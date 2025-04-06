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
    "4e5fHDruSdXWLjydXcuPeXYmeDGejZwyaVfX65VciAywSouFyZakMfqkERQAaiYaUUiQKG9s98CZVikuqdfrtuwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U5n7hMyfxAuCDrTx4eamHb1m2MHGY9Y4r3x7oB7WTGYL3TtsBZaXxVMJvkS3oiYFCqGAYuixPTmXVMCQyot3qMw",
  "key1": "2z94Nu2quRxtN2NhGYXKTWLBddZHofAoy7tL1XL1uBgMS9hv5rLiFo8MoXebPyAxT8w3cDBzQehUgoBLKBtC1vve",
  "key2": "3ttEpq6Kqpa6baUfkJXg7W2J8fsu2nByf6SX3AKY35QZw9g7kEAPxHsZsAPGKoqmTc9nUBuPDKoSKZ4ZdNVcG5DE",
  "key3": "2KDnFTQULCX53f5aRAYeUz933RkRd9WCRHLCGnv2ducJSPzpRYichDQnNdtRPBopK22Dwb5nftxPBoX4vxondtGY",
  "key4": "2FzYtx1mEnYmDiU88UgVy9neRBsaK17zGea8pCNVNXXF3YWwmppwBvN631hvd4RRsXSyq1Ww7sFf8PLVUEuxvmsm",
  "key5": "5LkAESyCEBLigft161kdvwDboweBKQtWNtb1un7TUtg1KywpTKuEBFdCybnjHLRTzrMEwDePcPjC8yDu2yCTP6Sr",
  "key6": "579oBjjxLsd2Mkh5xfu3arV5YDmmpWMCHa1HVZytKT42JpoueVjewhzB6fsPMjRTZymT5UZMh6Xy1jcF1xdWyffe",
  "key7": "2Pt1kq716P2qSgDJSTpvKdKfNfHwLz3PYxxzmRdGC3XP7634iy15y2wotUzEWojp9c16o3A2tFA8GBA4WotHc1j8",
  "key8": "64CLEgsFXBSqHcLzCheiKp83C4f1a6TxiMkWohCGq9rzXRUbCAJnrMf9rrxvs6uE6jcQtX11wPrE4GZKp5QkCAJf",
  "key9": "4ZhpVFkcejWfrc2ERZkbEj2WMQPTGSK3mdzHYhxBQC1hc2Uyq8j1FJ4oG3r78CUEq5RcK6tdWnQS4i34UUaiMB5m",
  "key10": "38SssGohgAnpcrDCiNk2jCNU6Nt5S1gN27GHywXdUz45QqpdxrMLt9qDbbur35sWQb82xYiSMs9cuqxjJfWx8wUv",
  "key11": "kR5uxZSRvBpLdXR4iNf1nF28qEsDZiLfJ7ug9B8nGxFSLAveHsXHMXX9bVz8GHSciWEZ9RhSMzbHRhjW1Xwvmgp",
  "key12": "p82X75yECx3XLyekRYi7goMHCo3fSHjYGusZS7YTjAs8sbDwjYic3NoLtVPQFAUH2Zq79NWP3pCVT8bztcCv74d",
  "key13": "3izgrGMb7m8jfXFvk1M6HGqiWkWYp2EPGmt2rBBWqQNJ2qPb6TnqJu4WPW1zVT695vMeeHVsHxbSgmW6nzDpBfzi",
  "key14": "SoxjsXiFyBv7DBnTYr7hJTWSXwHqEfMLhxKYrUzzcNJiuRd76sbSMP5w7vQQdjJLLNqcQ8Vjx3XhQ1LPNVqRSPN",
  "key15": "3Rt7hhoMRfWH6uvDCQwhmDNrBCbHunzWYYgqSFaLLJNLyzZX3EdLkMtSUUore4QCqfof9LhRqMA9piNamRhsxuWb",
  "key16": "2Q3ALoTk6drEcZanHxKLZZh1YWAefFZw7GnGS3uqD97y945Eyt3DGjujMNUu5UyY6nCqBAwRTZoBE7v3ixNdUwsj",
  "key17": "XbzWA4zdEREfDfU9UgbPqiEprdKVZ9QZDjcuxYQRXc9tki2a2jBvutAF5ieUVeDyEHqVFNNG7cQbUr9kUBny8dA",
  "key18": "3wQRDXRHTqzkoNYeSBTxW1fUaorj1vXYsVWQbNfGPhw5oHxHFfVEG5h6DVDNEzBBdLMimXhwUYHp26QiPgo69oAt",
  "key19": "21ouY2pMiZnsLKV3fQ8CRYND9GKJzfyN48ec4z2hLya9Y7RbJZCKLtzM9CwLNdQbamk4HwpH4a1SP2kPWksUvyWi",
  "key20": "667vvZQn4cR8B4qve8ZryaGQizY5CKq1kDVpTwc9TQGLRTgKruEsajMVRSgtfX94ShJPXsN82hpVb3L152pABe8y",
  "key21": "22cpJFxrjkshoKPaw1qWm59GnhYynAG7e4x5UFhhjqcqd3XzLWxqDf72SkdQEZTJnwSKg8jmXoLYvsXPVyYT5HhM",
  "key22": "2BfAcTZutMndGcszCuSu6mHZoNAigPMLWmqZXzUCeCatycajDSqwBXpCRtGQgeLFUx85ZovWN9fmSEnZG71y5NAH",
  "key23": "4xgpgHC28c9ABetiRrpEfaLKDNKpCH9PmnJDHBtTXjnkP9rQWuLUwPhbnBYQqp8ZPeW72HhaD16zgek2NFMzMm3n",
  "key24": "4C7PaDQcSNRH3kwJE6inLGKo1WPjijUfCSZCzgV7kgaoVTksJwE2d9dyGiLRB5h5g7Ujt725gzrPjcvYkA3nyg71",
  "key25": "29DcvDZPKbULesrz4LLiavw1H54DXH1KL3rDqmwNU6kLBrgqeS2VsoDcwJM6iP1iFMF2w3GaHymjUnrgwJfv44EN",
  "key26": "21ohMHHPFikkpeNn5tvxdMbCh5jnSMgu4SahBxwdGTsAtT14tMjteanWEvanE6EqgUe1TMYvAKpeHJidFTN6aVjg",
  "key27": "66AfjK5ac1dYirUgjKziVjkKkLy47hhnfhFkUbUdx5uhVsRzEFM8zJCUtU3zyFSxZjt6auFUD5GtihW7A4GHafBg",
  "key28": "4t7W8c7muvDyNhN4VMiB7ZRUKXgyMhR2CgbwKfZuqiZoEEz14eQFMqWMNkPwCQar98MpSseL45ANqHSWQFG7RGLL",
  "key29": "3u9ussd1deUw2z2W4apLVevEEWZw2dcReEnzh7YHbQiD7k65NTUsrGPANGGVPBCMLynjgupUxMz8cED9q4HmN5Jw",
  "key30": "2et3ZqCBefRB9bGj9rhSkhJTEWq2WNLLcEXTtFsbX6y52pGUrHeZh6MHNfPWNUbVT9QBSszxpRv18BWWsyJEUhqt",
  "key31": "5vehR3nhqmbtD4Jw48e8ZXeHydSDTwM474UQp8Za9xn5NxE6rMnMijaVnwQ2ZKNMRqXumDUgWmRUmpoQHfSqyfU1",
  "key32": "5dLe5WjnhLiRVi1Cy1B1i4myLKLKdbQ4ukS1zAfRuMpd69EJe8dngCLZfV3DzzhNoyiMfFRacAhZAXdkCmtWsTK6",
  "key33": "2ac14xgyyP5J4QBYCDxRkf5U63e4Ebr5eRxyFYxsqEgzcGqPwsxJvw2BbRH1fne2MHctMTY48QjqCtnVsTrixqWf",
  "key34": "2QfzEe6oNNq3ik6ERqJTE1kJYugkRinwqwr7HFmPBsLFjERXqXg56T9ZJi3bpDmNHWoJ1wt1PUD7JkBfiLoKchXf",
  "key35": "2v9CeRmx8N46jRaWo9F6urCLNXjn8Vb8iiUXbojwnUcbimkcCBgsWfsa9vM3JBpx21mXw57iex6yBF8mQPwj6MYE",
  "key36": "2Xh8JhMceQxLTwbPASi5BeYAPVW4WeYQMsoegXA2ruhsomZXqLT3gNoaP5LYqLRnMEowA9UGvgSq1iGWSrFygpUk",
  "key37": "5ZnrwEgxVtx4fxeVNitirkcqjPi3ve9wbN5MZgnLcPfBXxn5FcP6coABc63YMVRCpqpksuDRr2mxJTdMtPZu9wmK",
  "key38": "2tsfY6Z1RhESECK7WvwCQch2fizMovqWsYSwTL9yEscxwoeUgQUYKKcCeuLPjQpGEKNaxKWoouDunZHwQ5Ev3NZB",
  "key39": "2PqFjzS5vdAAb4tiXJqFxfG7z1KuPHJPdC7SP4wyvYgT32KtH1WoUGaJdKr8AuNWMqh3cG539GfvvfVARx9QUqgK",
  "key40": "67KZkrEWGMwcYmPrGxcqhC3M6eknBZ5hyUjNvrYVNMLGod2WQETXo4ZvyBzfgt7eHnjGqawSbBLUptDvmM94bfT9",
  "key41": "3RLrpsNu4s6MHPRmCdp9gpXDVwHRPV2oQ2eFETEKKhZPBLtA7vgDp7uvAWTFKxM8c96WY1cb8HPa6LMMqzdBcA9",
  "key42": "3akuvmtsafL5YXwK3M9T3Gv34gbiptLrfXzanuybaHRqrPpkACrYtE1JcHTkeEq2VnnTbrFGVgnqVgo2At1G6LGL",
  "key43": "2gvgZHzmYFZitruWzQyGQh3yR6kapdoN9ZJpDtJ2GuYYS1eCAai2cNP9vaQTvGH5ia2Lzu22LfqPcKjLejZcDkdQ"
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
