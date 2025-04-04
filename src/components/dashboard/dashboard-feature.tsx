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
    "51qzqHTDvvbPn9tDuJYtNb7k2EcyPoRWntXw77J4WWS8z37jAzMTkfmBz5amWE8e2T3MjmycQBuCMxAtDpU56qme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42QkcPRUkHrEghR7m586q8JR7cH7rjqkA465HpBVeuUXrDU4P8DKDAz3qcCUdjF9DSjujAf6BAFVTidswdCZX1Vr",
  "key1": "AfHEaRZEXuJMagAgJWhxwT7chvxjUffaDMRveEXmEVMqnFw1ABJ1zviGGFxCReYSuuXhiSv1YSYnLmZVo6CbFGx",
  "key2": "51AxysyhDG5enUaUmatDDeRwBX9jEkdMbQ8q9A6p4q1AMxAp5zKeMEQW4FqxadJUB3ActXCgJvj3JaGWUMu2zRgV",
  "key3": "WakBJbafGNYiTzuzj7Zf4YHprMLCrH1D7aLhnZYDxdbzmKQZVHjVQQnk7YpwzcHSqRvALq2KKxs8dLFo5MeAyfo",
  "key4": "4bxDgTBZPU9MrBT2KSpZKTLUBuk98kmzzrijRmeb1U77sMiwH7px35TVwVYHMvJeubxYUQMi8DSNBBnRsPjym3vf",
  "key5": "38AxSWDxTaXsCHFYjxnxh5sVdL9s1rJEBwXbwjcvoF4EGERXbYgsVm64tKHaDTcPzrHNuu5NMxdqfmc4LpmBBt8T",
  "key6": "2XE71NbEoEks3wukhAURohsudAKSJsFbspArcvA47Dd6n6sNGcsoz4wJgxNp5EaYdDnCmyQBZhtdjMxvwxTuqgRg",
  "key7": "5GSoeyfCKbobDgmE1mkfePYFD7b7cHJN49ER1Js5DwMcWd94WMvxrUE23mv7r5xCWVyFTeuutoWEDPBzh9B5eCcu",
  "key8": "3aedkdKRhT14bcZpC11SjXGedpwrYsGUAVffWHNwJstzdJZaFm4CBraeGYtBUzRdKikL6nP1CYpUsRRdU1dYHURz",
  "key9": "TAkS57f1wQkfx5KU8hPKbQe9jeDVoPicPoVwpXcn5frXarMP5RcpoMycZnNryn9TqwpEFbBEKhzU3ppPQk2BVNZ",
  "key10": "3fBNB8452Um4d7ZBw291frqmmBPZZERYHxh7DVnS1gqqntwFtDn2tD1PwpyZ7owRFCRq5Gt7mG8HfA9yLk2s8SfR",
  "key11": "52T8j1xrewZrkj5tJnXE4csXMyCs5Mr5LnvutNqE6UEA6ZeVHoXwgmPBcxwzHdA99uHYxuvG62hxEWtm6zXqATdd",
  "key12": "23KS2RYbKXYMcN7zAUP8jGBuapDMR1YvTv95HAd1W4bttj3fUtTnRxj93AVGzWMB9vPa9UdFBsUtCQEneueQxAx2",
  "key13": "fnk28AsPSA9Zq9ohD4ksd49zTcTzBShME69XyN2HHWyeXpcKEe7qv6Lvb41xY8CZSPjm5My1evsCNJ4kixCcntJ",
  "key14": "37yr6JXZvsA9sBSHMqTPT3NjJUantDenEhh2EQFCoYSRF9SrrowAetdAXUaaTnJ9jZU7kmyuzK5cvV54tj8R6byS",
  "key15": "3AtMavPNgY26XkbYg4TcPe1pPze86TnFUUvvCaazDegkJCUEg6WnDcKyNcxMfMFYfSkVQBKpCEtPykDv8BY17MGv",
  "key16": "3qzoJMmzPfUUNLeN4gNSCatUbcsX3Ti5aj7DVJq9q6o5MUfgiDtaLWVgBWYH7qKKweq4Jek16BbK3D7FPrNEWAnb",
  "key17": "Uz5vEEZwfXVPYRYpejZyzd7zc5njLuGMBFc6w7R5A56VTWj6u1FnK1mTPhHphAKhXj7drVTDgGn5syScuE72m7e",
  "key18": "bCbC56zLkhxkaf9RgY3hdQsZVrVmgpHKH4v7MgALikMH61TKnh5LpCMm1JUNc1RfN2My4t8v1WMRc9qR8YfRPiu",
  "key19": "2t2mxAd8d7k8La4iP4m9sjDb8gJrbxvCK8fyeLezFkdxCPMCi8zHnKs5cC1JFPT9zUXY4wQkdxLMsiorKGjVkzTF",
  "key20": "5iQUfBwEeY4EK1i4zkETC5aN8PoJWeYSWiLNqd1XCrTU5FbzV1atkvbLUDMPkMYivdYsmtrbtFdXrSiZLC4XhLFH",
  "key21": "2DvVC5aZYpF9zxE92Dge16rSFmZkAfuHoanw3Qod3wBgBEUAZv8oSGYCgP1zufxGWpCHz8dpqGcAo7BNCCbP5Qds",
  "key22": "3kyhUQ2Bv5a4Fw6mfMD8QewGfQ2LeSQhiBxcYMhdy4zjuMJsvipSNDkCNahVqLaQ878uoQU7nmaZ4uc4fbnwQGeK",
  "key23": "44RnRWjsn3h8vP58orPW6KsE8U23gZCYDMGyE4jGCq1HdBLuGeDmmgjXyaw5QmUou8tWxsYEo3vSfAZmfTiUPJZ2",
  "key24": "3RDseMomxsZd7gKfNNno7e2US7V2TpNqQrcpTfygMbR12WHoZf9Mgk5bQEQZkZ4KjSmVRmR5tCfzTHCiNeDhKA6Q",
  "key25": "2HqYXk1kg9KYHQUS6dzdvYtfUCtViZnkvRRhfvPShk1LhBEFLm2aM4cXqW6tX5bNEE3oFFUFyS1wK9eCXpKJmtFA",
  "key26": "5S7khbAwTwTHFCTEXnPatmB3nX8kEpg2cfUTfKsXxjw1wGvLgddQmPkS4GuATauWLB5JZbQeje6bZvVXBb77ysxK",
  "key27": "J4Psim7gjAYF3UcRcpKHAYcB2ypoRqyfHEHLEC7zAZ5RnuVLuK83jQFx7hGReDBnNJQ4B7x4uV8dDwTwZRo1XRt",
  "key28": "4wffCZhQMLjpj3seJk8HqgmRZTpo5AGDKMXVMYbrMqPQnVBus9jv3VxdexYaasH6gPXLqGUHAz2m57B5DUj7gYk",
  "key29": "2M7LJHVwYNkivxdhwtH8qKMaadV1uFcQahmtBMuTxERSk32coWJ6tVe7MpbNfjaXRz5pXxuiab8CPJvtQZTzNDci",
  "key30": "4EkfMCMkMUEaGFNi7tHrUofn49Yfpb1MRZaTFK5j5QNKzywzuFcSVNwgmyQzsoTSGgxMnqPUTsw5GZtLQKX6AtWP",
  "key31": "3HfV8xjvQhzutiqy8HuqtmjDNowK5oVyEUV9iH4YvyRVPddsU7R2ZWPMVo31SFiRxxhYQF3k8zQEiiHCanvpmgSx",
  "key32": "2jNKUAE1sR1kWWwpPo3RUfmowARQ5EFcnaNKbBJoCGygTzQEfce35jyQRf53S4eGN5vbW14Zv6F7QQN5mhAnMkup",
  "key33": "34E8dwBorzDUC468Kv1chNoSamqCcziaaa8NUWoVA6p8CcXiVACxzh7vTsafqm8rEJWEiVjNgFVtrcK3JMWQnDRk",
  "key34": "55m2nPBYtXJb7WYvmt4CoNNCfETHitrMChRwocN4WV2XMkkUsBxV7SncgVj4X9GnMs7KJKSCgG9SkGwv9WKdYHZ9",
  "key35": "5rn5QoiEp4qSyFfQHnfm9yuG5pwHfw2dR5U4fYQSRawEj1XEJfS9d4WyPzc8TNKdkS7RFCyVqMTRhRbsEbft1Lc9",
  "key36": "4PRLbwk7uLopfAPhjEBaXMMnSHTNaspGh17x5d2XR1djRkTU9R4sMjKsrDh972qiW4GA7T338B1eshwTLajQbZ28",
  "key37": "5M2iMTHPwBjkNP9TMuYKPuxB3z1huZNYDySnmcbBQTRQ6zdYrr6gGaNNWgoHr41YPhruF5x6jq9FiLFGdqGiyV8e",
  "key38": "2Waw35uUWMXZSATtqcJ5xhAaXayHfzpZ8xwGdHGYkuZS8B7baCiTDqMfMxPdb9Hs9qzEzpHywNb18dirB58sV3zd",
  "key39": "3gHxcz5vTQGN32yLwaB49r3EaAVwAHXRuixWFsqACx9sSf9RpP3qHBhoJHgoUkSVhjgQzw1D46dNvuv24ZGTbXjp",
  "key40": "pTGKevZBfNhVgxdrhW5tk7CBjrx2iHP2kFG28zgGuK2fcwtsNd5E6S6L7mmQyWvFn7fMB3aYjcYjaQycbHesK64",
  "key41": "5gzzz89A8ymxh93L3oYB48LWfkzPTkV3ebAMwwj3fn3FDVpS1LBBMxRyfsNeBuMRcxJKn1fCwy7q8BoNxew4zSMo",
  "key42": "5JkY4Cz52GCHmQvCLY9XVru95rAAdQtcf9vdwz8Ms87NTxeDbtz4nTth63GNwWNWhnaVSaszjwdazsWydru4A35d",
  "key43": "44wCqgCBspvYA2ATcppDZ2wiPkfLrXS1YnwubPiGx2YLovVHG5uGHiwoNUrUBKYKgDTLzgpXP4RqgKSMGp24fHZE",
  "key44": "5qHy7y6WowdciBjm5mdv434BtZEvzMTCjiMkKF3sS3r8ua766tWxg2LWhJsY1po1tDQ7PbcZgsYEBSMGy2fEqAiZ",
  "key45": "2ykDXiEset3SABCVq4V1GW2AusH64h7DDSZSTiVigapuKhjdy48yewwodZ6jFcrN8dB4uoGwAoF1gemTaaYuiUiz",
  "key46": "4E5dwDiS1Zx7qyzFNnsPu4B1yZQTRkTFSmNKjGw63X17U5s3QJ3SmeeUqt3DvPGVu8dG5f7GoQUNGMKon6bocXha",
  "key47": "75a2rWtMJukTzT4ovm8jrLXK45vMv6j6F9g7cFM59LeZ5VJKHbFHP9BJYamoN6aKEJzpNFV7MTX5prs9w2wYhw3"
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
