/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2ZpWvnxhCKFUGcD993GCciGPrVx7TV7akbpCK3oA59GXEpqi5AA6mAueXsDBwmjKD5PfpWH1WAJKL2dRbBsNRrfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H2QJ74UoQ86c3rRsJrbc1zrkkAf9BdKkfnVmfpEk4JniXsURWmte1W1pni5LqHQpuNu8GQYzM9Y8vWFeLqpqs5t",
  "key1": "5gaDRpeu1Ev2prpz36y4qRet4j5nu572N3GwTnkVq5CPE61muH59hLcAhVhT1f2ktQb6uPAtuKvVTsydQpfTwnvY",
  "key2": "4c4a313CLTv6NQyzHnEF3ad5c7oopkhX2Ds7PRTDJNGj1v2Wb8JFLGoqRrW7wyVdKz3Zk8kPRfMVYCsVBvFxWwq",
  "key3": "36gZ5Kqef9UhFr3esobCZK4NSz8FHoVb9uWfmcRhZyrZTYQ6NKU1KtQbi2vt9HJ1dMfNV1JtntNs7US52pZN7j5D",
  "key4": "3DtbP31edp2wX8tfBzTcC2PRGY1DuNqsfLr8WvX9QMYEXJh3FhijZSnt1Q4noj7mG576FkfoCtvHUQbE8zvMncqB",
  "key5": "3vE5jT3biJYKgS3Tiqc169Ac5tUigC2N39KRShowyvUUEK8uv4cfHZBdG7weNTT9fMsPDyGyEpe6y6AVAa4Gg5Zg",
  "key6": "5aNc7QcJRBG9kRLLkNXTeBWk9BgTSfex7ahHHR4gtmTjemwrTnZMxmLz28ChQWG4wyRmpN2jYntF1Dg1TgpQUPYo",
  "key7": "stC1LoJ8MrFon5581VJ4y6wWi3Vy64fCZgceUPax9y4zL9FSfVLzwBaBK8bg19Mf6rwt9w6wg4MsTVacTHZhLMh",
  "key8": "5r3F7sj48eVWcTQ5kLBaUDfyCPtC81N4mbCASb7Zooswh8rjhzXtbuChRMkP1inYW6rTufZFTY1SARouHUHPerxs",
  "key9": "2RNgTr2eGXC1YHpJyuGK59jFpMokecXucJqRcHpSwFEcuTfRwpqYs4tuabnFj1ZFS6Mv2ZNz7KuFBcJbhckG1H5S",
  "key10": "2ED5LdUtTXbPVkUp1MKhsewSpaq2gUiv8xfvpVw37ePWSwEiL2tTe1mqZFtyW1ED3MdE4qWhSMjKY1tekA2Bj7T4",
  "key11": "2qpq9ctviCTvpU5t37EapJapedaz1KcJc14rYhz2FJXH1ZxkSWRfYC3e7hF3R4g46KvuSATcJ9u2ErYHfAqVCr1z",
  "key12": "5RJUqx5Foq8ZrjZqUVzjUU3jbmQMpTegAgvvn33RLn5nfnBiKmwhbBVh2WFspL2LrPG7JJTWbU4SvEURgyW7Atun",
  "key13": "5MnFo1bmHeWEpfexKHM9bCDojjHxhetC9ZeXhpPVZ59XgzhKqvbta95bT25fyHqZY5KeQUfv3udGyi4SjE1CtrV7",
  "key14": "WF7HtH35kyqScBcmrydLMGBxoyDcKUNMgu8LQabaeVWH9JY7nvaTSgNkLd6Zv3PnGrjsw2h9UG53ytPNS78mPcL",
  "key15": "5qsqs8oG4sJrcfKPgFPseAkWoS3Zbcg9Pewz4XBB5ALKVhhQuhTHHesxetzWsAWCVuQK2GHE9qPpJ5zWv6axd28G",
  "key16": "2vZ1cotMeAPtMsCpCapLRkWbB2fwXNKHq5ejwfjqsjTDquvcZv32qCGVQuUn6c4XXfykfj65XeTDPJuTTAbLRbb7",
  "key17": "HBV1tiwpFguy2VwaxLEiYGscs59ogocgz7V8USBe2AHv2sDZVRJ8PPchythc7WtCWVr5BK5qJTGht1bCQ9CTf4g",
  "key18": "4CREtwQxCpuSDk4YeWA7WtueoY9g8oGSZenmFbAAwBtSBcyoKk8gpoySS4ZHjHLEvtJWbnpTTenoGV6yZ88KfRkW",
  "key19": "3SvBaArDibx9h6duwEVodabGu6kpEySCwcBxzXhnwfBfykUyEyYuGfmKJG86oTHi3j7oMPox3MJJzEnbKmvQDftv",
  "key20": "5UEZqTsYLVx3p9qgX5fqSmiMxhSDhJb5XNLnqYrsNGbGJGHDjXmbbQgfKcoDrLiSaTc2QyC5fLy3jJK8ybnN27ZW",
  "key21": "2PU1hk1aJjynpSgP4dv8jKwtkPmG9i4qar2g2ai4im3WkyqaYwV2RE2CARC6KBFyaBuEqcbPBUzTPDLHzFrr16Fb",
  "key22": "STGJZXdXPgPBDVB4pNW2kpdcp3MbNRVhzvY3SHXhUY8EWyLM4bhMVqrniyvkNXd67UhDu77xt9LZcWz3GiXX6Z6",
  "key23": "2b4V1v82Zipvy58uUuuTUSg5qbacVWiUMnYfJHrSCF5VnYLi2X4C5ZBTZFHsreX6dw6UyJCsmguYQDnbWFd2iy5c",
  "key24": "2j85bvkzuQ9DmNDnz5pvCck1x7cm6GtiQVq4BkFJ6Lc7km9XrBiqPgC3BzzLyxHfdRqtrJjXdXHNUPvtMT5BGBaF",
  "key25": "2uMnH4ie3H5Zsf3iCFNJKauW492Dsmrh1eDfYnqKQ5ELJLwarqaCwitLYcwDLxhRsZQwYWy7mGmiPwRLV7QVSXV7",
  "key26": "48eyqn2esEe6iVYZ5v72XYiFMqpHP15yVCQYUsTxBhUMnDieVBEVvyG9EViTN5gu8KDrSqMN4jYUJ5x2AcAMUsu6",
  "key27": "42hcTduHer88fK84cbf6mMQWe18G7RrvuT3sBYMKCnZumUwvMV6nV3BcagA9d54dNFBXG9wSLDSJHwU36H95H6hQ",
  "key28": "Fta76ctGqo1L6q2eeTCN9USk6acrXnPZyMmUVswkbcfMHNzBHZp8dRRvW8fUmWvoWehEAt46hFdY6UdMPaWujUa",
  "key29": "3PYHFrjXtKP6JEKMevqaDs384fdPaWSuauM2ExtBhmHw7w8sPcBTKJ9G5EmjxouxAsmrYgSgRE7G3Hdv4b2X8AG2",
  "key30": "SzmtSFqxGYsjA6MidpVvfMUhL9Wnabt7DErASJVErzM6JLPSXmuPzkLSDHMCJDVM2mZsMUDTbmBuLWaadEXzFyG",
  "key31": "5AyMoekCbCQouYyf9rUqBbQzX8QFTroYNHJYdCmL2TWK8mbUnjXqcKrm8nBiUoHucwteEfZTugs3XjxBev7W6oCt",
  "key32": "495LbupoZAfUKKjLWi4QdSXPxTbNijMCnqrQFdznLYvzaUFG2mS5mNnP5RvLDrD4nT6sCWoWmkAarst7iNeWekSF",
  "key33": "5NDavE5PsAfAkhDx63tZP7J2g4hcD69hJKs4P9nRiZsXiBna5RyUiaubknqjnzwxfLQToYwXa1MPFzXBFpWaVDyt",
  "key34": "3H9snSMRJUbCGYSzktEoLZcBYhTsGN12DAGZ9upgwoqcWWxxSZn9C3k4t7mhgeBBYJovGXabPgD1eHshx22r2eF7",
  "key35": "3pmy3sVpgLKbth8XwhyVsrPrkfLWvD9bVsB8RsXoBiKLVLUmWrr5rdRPHc4JGY1B8NzwrzzMkHzmPeFDWprb7LeU",
  "key36": "2WVP4M9PK26zwJsvuHngJ5JQ5TG7k2qiDZzd3pPe3UaBxm7hAheFuVRZXunpae1yNRBLKRhkMei1oHvyt2hydfkn",
  "key37": "xCjCt9fE6z3asAhQe8suTKxcSCg4BYZ1aDrkaxoSqLLeSVoU8T3qMQK8HatFe7vFijnqd98XmSkXmSrxwZdEhDn",
  "key38": "HDrJBgjUmd27Nye6Bi3JcQ5RQXRaDtcmEJKnQeb64cUAJucmLyEv1SYMJZqcwiEfMKLgvVU7db1xaUsdSHZ1RTg",
  "key39": "K4sdyP4vk1A4Gv5B6Qokt2XYS9LCiSDw2iJGMDkaUtzfMvXULYVEzDhtUSk632JZfx8MioiwtfosrgwA3JWnaxz",
  "key40": "3beSDQkSwFCQyGWVhTokbv1f61uuqJbUWg5QaSXMXUjH247VMjZzskoThYZJfHMk1xp276cnipBM7dvrTShZkZHs",
  "key41": "5ZE7d51nL5rerhKbrRQjFvJSwTZivAmb5FwCACn24ADcLdKkHAarPPmV8V63X6nDqrrZ5toHnF9XQ8YNBgLvKoBE",
  "key42": "61ZnskALnYxeV5QKzzQnCbzSDCGU3rGn86hUC8TXTAd7zyrViYsRspWnn45tu8GCrSG4j4tWefrMejCmQwiSgrTj",
  "key43": "4cBVWEHYH4LYqu4dktJ2KPi6iiB941Trhj7yCHaYgVShbfq4ZzVFUFpFoeKxAAf58oiTUDLhR5x4yq8zw9dqnFtb",
  "key44": "2MAxq1vY9H398XA6mQV1ommjhKpNLBcZEeLmHZEnKMZUTqB7YMmDsaUw8esM6nWjNTENTjBvkVWpAeTCViXq3B7S"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
