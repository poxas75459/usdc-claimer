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
    "3t9dReYSCUCNxPsnpCz6ty8vfHAPZDtfTiXD5baDCKjPqoUMsLubs9CjHu1wvh99jsXnKwcAB3U8DTbHVpyQ9rKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d1PPQDV7seAKLcqcCG517yXqjcnnFwvtkNbm8Jmmo8jsNqiY2dVJJxCNpNiNpL99MZyLkyoHih2Ec8PizhkAgsQ",
  "key1": "3SNyQRvuoUnhSKiugFvCvjAFssdksjDnmRXwpyJmBUBKjB2rYPTqrzfhkAphTB24bb2wucYc957nwTC3GohM1nAH",
  "key2": "2ngq4TvjrdR1hTicAqvxAqbR5rHqBbixC5VSz28ssqbog447UPyGBUti5FmX4V31HfaMkUNJUtAJvtSfQSuAAknV",
  "key3": "5KDHPQ6DB1KTfoDUAUTJPYfptVoUNTvRmeMCtFTuUndEJHMx2nvZMEXLxXvPEyAr6xaAq1kytC9aug4g4hWQz1dj",
  "key4": "2NL2D5gWVHzx4n8rciNTKpuC84MEPPJ633GnynU8CCJuLdZsNDcpmkt7im9MU6vzuMzJWgp25v2ahtAopGFsi4eq",
  "key5": "3y9CvMWiaa196hqS4AxiXVTCeRsx5hN7ZRHaZzX24pNW8dVkA7qTvufdRzd6bxhQkkQJaPgyXsjuFweZu852WYnF",
  "key6": "7oKDtZ7j73NkT6Ret8Uz6amN1uJazGd3azzW1FvYeyEJkCQnQ6vpzr4s7n5ReG1UrxZsuvxTHPehZtrRts2uoGw",
  "key7": "392G6xaeH4KWjPLy6Nj4KvdFyAFANb4NLFZWUhujjE4K3LBVwC4Zf2MLn2oU8UWgzyWp9SoRBHjvdAqfMeMcWrQz",
  "key8": "5jwstnWyESkn5mQi9t1nWeiRX93i1toJiDAm5Jq7nQGhv2qLBnApf1Z6UUJ4W54KDp2Y3yQhr8cUBfuGCLKDnfpE",
  "key9": "wJMpibeP6RY6gsMP1Div7gdwGBTReesHivRCHqoXbxVzB9pRTL69od5gzfcV9hLHc9C79im3yf6Utknkt4Q8xzh",
  "key10": "s18JQYmMWFLUVumfHwLm8o8SmcCoBSbw3WW6HHgnpFYQfkco5WSiujz9Q2g4sQLkHF1WS8FVsaUCrnc65sV4qnk",
  "key11": "62yFS1L9PnCMGyPBzQXKiEjgiefWnvmguMssUnCB2oZ3YptZnh8zBQiMCescjdQ2pAE7sREyQsbdsZgjVjmjyUG6",
  "key12": "2F2uwfqi5AbGVzsanjidV2htnyjKz2r6TmEoCe5RDG9XS5KgJodsQhjNffDyBhXAfxTv6B1MktjJub7AF7ebPdoy",
  "key13": "2ABwyZBcT1iCTGMAEYajv63A1oaqNoZUxdqBaEbZDWDvZrEJTFduvu6AfQz6mEWWNhgJLSgWjRnKfb5Jv5MchUa6",
  "key14": "26saf5DWdwBWC34hXxJdSdoyHLq4i61YSr99HRndYvHk1dANrFef7VAfUnoFZVV5mtnwbPfpqaQ7UGQD338Js2np",
  "key15": "4QLWx1r8zNKdiyZ1DWVJcjABp7CLFXvbCPd2VqRTCc2BjSyqDvvKaxuYmeVDRfADAh3pGnTpfr5kBProUtKZfRzt",
  "key16": "5gEphD19dj8Ttj5PzVFjux8rXCymfX341atyovrMo8SSAgNrGR95EcqBowmGSsbkvfTWYFf8FcVb9T96FcGjnxor",
  "key17": "3ku5jKYZBhcZhfZHueLaNTbFmfKXMjU12YixLLbjKe2U2EECeAcLNHgcWQubZtPioQkTXG1Fo7GGJi5r3cEYW28d",
  "key18": "5cuiDXfo5u9hMf2hdRPLtJqERdi5xQnsbEabP7pZ2Sh5442KAqq6iBVpEpc3DtQxjDga6PTKMsVRUvb5D3VJRk4S",
  "key19": "5juY4J8PFU1ta6AcahYx43PSre53TtceW2ZYkGfH81H26LtocCHiEoC8HfLsqwUgaao3r8bxPqMjjWQwW3mE7UkB",
  "key20": "5VuyMsZA6sWvZcB5J1h4xsHbEC3P4nDgKpf2wEjgFWFi1JgpPcS9NXSDU2QD4Kwqpvz41tMLjmn1wWSUNsPKPcob",
  "key21": "3NAvXsK6fmwisL7M3KnmVxUbaHMxJjqkHvvt8ujCSyhDiZ8oReymogUpAJmq2x3ApRow5zCqfA79Yh8J6MuEcHAD",
  "key22": "2EPME5WU2SBxwQ4jTobooXyZn9uSpshz4pb6pvvy68Bvnx3ZJspfZ9NK24D4QpBtWn6u6rKg6zxvZh8zCw6MyCNy",
  "key23": "235Ra47itzYxVdfL1qXaRx8YMRXZV3a1NLbsd7aSG7nTw9Pxf9twm1qpfJzstWhthN4JRf4r1hzjzkCKWEEbttVu",
  "key24": "3b5sh1totKht2GQ5wAiLDearUJpherE5tkCNJ2Tuw9p9QpyiEHihhqgCZLidjUtExGp5meVtTLUta4DWu9tXMEuH",
  "key25": "653Q16xRsnAhzCfEhZGUkWrW5D9zfagkRLLKdfDxjXkmUkv6V2e3vWoBxyCkvi6dJXghGe3dvPz7BzmA7eNtsYrT",
  "key26": "3xZMZTaNUbsX2VSmXA3iWrzZsurKD2wiJ9UnQ9Qk3WyLZtmssGyRXVgPStsxKVSwJXRq66zwv6jmC1FUEZh8Nggc",
  "key27": "5aeRuxdMxTKGGskNtCzQYEFR9EkvZc3gezKZTXnBv3tHz6SEtnVd4ihDCMBAKpxRPBBT2p2ij4x3rDQYYBGQKnR5",
  "key28": "27xh5u6PSKWdCXYbRdQDGKpBKWgL2J1eZnwbommZDA2u2nEzMK72D9k9xvaT3yMpxDKoy8AAJV36xGUwCnV9qxVW",
  "key29": "26iebLHLYYwKYmcKxB8gp34YooAaxMHpQdbwchBwn1GqAp9nXCXDMbif9JsHiQKs17Q28r3BxZBbexcEQ2QGWBkS",
  "key30": "gcLqwezzZYq56k3PpzjSJzWVTyPZs84QLnfw1c3A2xxQEJgN91otoAFvvbBDTXVSyEJRfkkaVFYouGgSo1jNP2F",
  "key31": "4Eh9UpxnRQY4zWT6hihd7qG4rBnYMeLYVnJcboMJe97ZgfgSvYg6XMoT5rUyvu8X9tDGXfaTtpCKygaZLxGZJgYs",
  "key32": "3vkKKhtfNb2JgKr1pvLRJxigBDJnyXvP16nhiovpCGXz8VMA7pBuqd6RfM3oWPiHuEkhahpzSRwG9RkD1UDM59KG",
  "key33": "25ktWEtbwrJADoe7cqSHpnX43oh1XZi7ooo6RtNtGyy8QnbrAkGrtoDVy2khJdHRoDWzKqqWZLTEyYLPkR9pyZUa",
  "key34": "2qMiWRUNG4vEuvvS8GUYJ1L9TbDKHbJNuBQccEBjscyuemeqjDXigp9Mo2ZSa7zoHKTzA3pdJ1SPrHNuABrXG2df",
  "key35": "2UUGs5YxPPZnuEE9gzuscYVMX25LMBkgTu4xUdNuw3U9JDWPM1btR8FfaWBp5kZU1b7ZPHmVvkBkbFoqfZjNmE3j",
  "key36": "42KatkXvp64xNQqFvu3FtNjdq1HiyxrJqKTiYCLRv87iVnuUs9YBYp2mbZPGhVXEs3zqvpfQkRibYuKXV2m9g1ck",
  "key37": "5FKPY78R59Ki5SjVa8X6wAfHNaMHVdwPHJMne8MP8o3BVrjPeaQU4M5iPJeRNEJ1mENscETsQWKkpJbpWpg5zgEq",
  "key38": "23gVPmRqfpHPZBhYE54MbemBR4cvHDA2ZNePRuEptZerA5wThSDiwdEpTKjt8VtEdr3Zdzq1RMn7qTtrnztMCxDe",
  "key39": "2BfcvpqB9sXKqcttWA22kLHiVYfu1QpwnHugEfNN9qoDcwteM1ik1pAEwAwP7XBnfu5hfgXm15B3ai6Hg86YbuhU",
  "key40": "h1UBPrCKpZMUPBE4byZiqtp1kCqWQFidiZbi4iTjKyHg7yfkUULDHGiixtgNsQBUa7txrEnJ2HZ9jNoSK9uFbob",
  "key41": "2zieCxoewzxYHGDTWEFDUGqpuLVUMUn64uX1gUyGsZhXnHomRzyj2UkAM71UpTfXpT382VZUsQMiayDYCsjhnYr8",
  "key42": "5GgNUCTGM5vrr5y43UYkBDARuZEKAJA78AzRwHNSuB4PEvn6WTuX7rs3hrUxEwwtm2jx18yo3AeNhuRHMLvHyous",
  "key43": "fTrrDN9tPkrnENT5EocZ8DXdUMNXBHwBKy6qsE2XchutCEc7TAudTF1iXBraXzJq3Hh73sz1vcg7TVGcyst8134",
  "key44": "4LszgtiZmGahGRBtgsNbcsU7b6GH4cVGRyDzVtVuzxy4uyUsAfgB4qFb4YXQXzRt6PeRR4jh91J1pBfyeAYWBRny",
  "key45": "3eqj3t5ZY4GEPDZToCBBA9dxMYXeq2eQuLtn9X8PFZFDHiBUmuUMbVwLvgNeN56manpZHAjGpkFwipNKFtJGVirT",
  "key46": "DATMZ8F155A3b4Wxic4W2HpTbE45Qn45qcfRVUB4grWbQFsETiEjmS6kkyDoeXpmvrdk8iDkzXisRGfhTie32mv",
  "key47": "xU7dknWNMXLKrJY1tnHUmHD5djs7ud2GFNnsToWDgovf1GzxQ61g4dRAHUiw9jGFfqppjUqueX8gwjJMHxVuhB7",
  "key48": "2HtWxEQ5AEqczyFwZHfXFiNJFCrutSqB5qyTqrStuo57LPLtcQCeHYKw9cxrQZBKL9sRNiYV1skMgADWLs8pta3j",
  "key49": "5gHpohX6pZr7cDvZfCFqxZmFQsAw9sVsbxVXMM5W6fC7ytvCNvzNFsMKG3ckMQDXdQkJVKYe7DiixpDcAcz4W44L"
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
