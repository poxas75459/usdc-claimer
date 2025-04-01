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
    "5a6ArSCAt5KRrfTrhkAGUeWQAQSdktZqHtwRfCG8EvdsxkjVyVoAWzoRmNXcuF1uDacstZ77QyHGCjfvMYS97Eqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uHVdcAbvSwshpiHj2DMJ5RvvcH2VfxfJzAuB3NRe6DnwXUb21yMwt1Q1teFqznh1mEWsHyWD1FiEebWvo4oVY7r",
  "key1": "2z8FUXwrgDjGrHGLFAYXKzTD74MAE36SXVKsA19MUP9YrsxtJ7WWP6RVpXREsu1U2vV1q4qh4bUYQr8MAtfrAyjR",
  "key2": "5TAmbmKreBRmjTiN2wqZt5NYLCmw8JAHd5P4nPqzTRqBgmFUx54ARvVnRpP1p7dciPVkk34er6DtcNHUjjTK6Mr8",
  "key3": "51Rj5bSLiFr5WRjvQyTBBmrS4qz8MgDEDz32AM4t5oAYx2YCAsmH95Uzq61yNpyA3cLT9AjUrYcGCPFQ3cLb4ZeG",
  "key4": "4vBgvxyuK86VUHAmt9m3EQfEYJxEFhqqrUh5B2yXn3srwt7UPvzE7LU6gSsMmduzFySGhvL4B2acx5ipZLQr2aJL",
  "key5": "4QMf9Hd6QfRnLeD6BdvraMDXz9XZoeTi7paJH7Z9N7niUPMtUjmUkGcR8DajDHKsXtdJYuZa9XMZy1CTcuw9Ns7J",
  "key6": "2E6P5vAX2sNDtnJr18caXKYYjYy4yASaPRv8uRn5Fepzck4vMKRP5Ga5WHtqek5oJSN5weiRMBuKE2FoTNtBHx4g",
  "key7": "4LzSobPzhykKdpEufkAhpTf32uLgBZBigFVJZPrPwNkPv9MjkxVsju7tzrq81xEAgVVrHaWLqXqa6T68cF3U7ed8",
  "key8": "3hwSXwth8qDTuoP6xUNjr2k1jCD381txdeKWQZ4QtHfpnMzca2izJ5XnM4hWc6GDLEjqNN3Ji3Qb5u1anzt237wH",
  "key9": "51xJR1VA9nFyTwqZRf1MQ2WXvAnhMxLQ1McRoimjUEhoj75SmpwyjAaqdUn9GgSSzNf3DgHGaiqQsvBnsDSLKmAp",
  "key10": "2hUN6vwXy8p8xwiLE1GAJHxsauQNMZcgPBNQjmRSgF49Nd6UBQurcneDMXApcnPV6TeFtFtxwCJ96qAi7X2VTxzG",
  "key11": "3ZXyx5uJpKWtFvpveiGtUHxoZuvP7uGrZNFKN4HfPaG4xX1NyD8u9RBKkfBJSW5aR8BR1Mt5BCWgRCHFyKLua8xf",
  "key12": "47wK3JQQBJiPJs66pVHpxme7SUBgE3ncw3PcjhdXHmKKLKDxqyMqUVmyNFAjQgVNqbuPcE7Xr9aFQocbq3vE2vt1",
  "key13": "444Cm6HdtnPYJPJkPjWdejExLKxDfwQftGyFtc3RToByoSWT7NjG9qrMojdqDePW7oknkJxL3BWf4dULdeGvPVJh",
  "key14": "25bK5fFCT7gEdsrRVZvg6Qkqybi7ZYJJRpCmthbahjmoFdhqLZuGXuTxYNsxQgd3emKfnZq2nskq7D4RPCvHZJkR",
  "key15": "2UszNzEtf1LymgU7YfyhuMTE2gXCJmUbgmtQ69fUusVuhY8Trm6mWWqDWG6MJXvK9ztAsKQ97ngvSr7Pz5ue4QVU",
  "key16": "4w22PQ8YSDaoA6u3mRZ6A5nsyPNB78DcY4Fw2yDF1ApbLzeig4Mw3qxygN6HtnwuNXTumzaek5C7RcbDBQWEPVW7",
  "key17": "3q5KJQAHzcdM9KgF5oxa3HMz9GuMwCzoeRhHhXRJybJBGzVASRihiCntHdKaFzerazRWT1XcjvpusQb6kgkuXG4v",
  "key18": "3Jnv2Tyov2hxoc3hXUQzmjLe4bDWKNgVGmv7T95ZDusVeVCwyGg9qS1xnZiXaygRA8FSkYpa22H9fCgtyjmHu6PU",
  "key19": "4EGDjHvc3LoM7AMsSg9uDEdKvgJPtHhm7nTak6XeX4cJfA2jJYcKvxayfT2KSUu7h4yP7JDFe2tfuJpQTgcmcgQR",
  "key20": "w39NAcLJUfyEfouey7dMjyCxz8xM48CC9eHKcXPctBr4XqtQCeKtbw8ujdCBCPonSawFTC6RKAPCgBH1nmJnZyy",
  "key21": "4XSz4wtVFiaMcdGKJp4jtDMZgs7ndPbE7GfNaj1Hfo3MkAd7YefJFTanTEpuyXkoo3c4vXKhg8hqmZtj7H5wxKBv",
  "key22": "51GoPGQj1Tt5BB96Aam76sKtLGc1ppDWJAqc21jVvsckHyv4znZom3AxrZXcQhSjUeCkR4NFAgs7Jhi8tpyzjpQA",
  "key23": "33FZgvjDhkc1rAVpR5g5g1SH6PAADomUKmWS1yLbYpKSnXtfLjzxGsEegftTb6c6HSiYnW1ctEWC7WHnrg4RKvSi",
  "key24": "4XsN2Ly4jURGiFD25B3CysJkfDyUimMmyULvJX7eLhE3nvJQhopgTpV8HeTfcuoQFHfYAr7LcrcUHp3zyj72ppEA",
  "key25": "4JHev54vsUfG3pWDAMnTNTKsWpN6ZCxKr1qWsUPFtPfJB2ykeHHFP2tCrZBLoRh4FAm42Bk7kpK152yX9xUm7Fgv",
  "key26": "4GR9ZTpRntxs6E7vnwuC1hcXbqsXZVCxAR8ErN2GQ3AoNqqgZcxvUFx84QPHyqQiytfujwmLbyPV4Nrye1iGNhtq",
  "key27": "3uWyWn6rpYF5wv5a3txndLBuirbQp4zbJKN15AXC8E3yNbsHVWcAdnhe5gAFUNYPkK5GV9mXXgVQ1uiZM88msXKh",
  "key28": "5cRVFWt8DQaPsgkLopyBmjokUwdjhNQUhrAfp4rdcHeNhJNqQScwqBq3t5GYdgFYeDnLCYXiBke7vs1kGndNKFC4",
  "key29": "5dt7oMp58fS4MsfSerjSsWvnuqCxeuMBFEBq45pUabEg393Fjq8yd4n3SmHM44xy9z5fZK9F7obLSnBanMJb6mo4",
  "key30": "hHbWJAj5ozh3LpWsFfuXzPNhm8ZyoaroTCQrMd5RVQyYP8Wgt16pDJX8hdV7DCHFYfqajjhCkrpgG8ZaojkYpsU",
  "key31": "2VXrFhaSHMj2CY1GC8Eyp1Q4jBiLTHFjEPqesXg3r7oFKNCjBhUyKyZuMaMoofLnD6kPCTSyR6Qrw42SbFZMp6FW",
  "key32": "2DDpQtCykUgXqCcF37zhU3hvZ8mEinBzRgZqdKPYhjqL3zZ1rbQXEgrUKmSpU8EJeCmhepxf1DGmy1DBSuqxMVec",
  "key33": "4GimX1W8w7CfipvWYikFH2XyGCdpu9z1Vuz51vQvTAASyEyNtnZDSaT9SUvYEJtYdMtdYJuTvWhNuLU36R8ekbwd",
  "key34": "55YMw669USAneKuQsnogxxfeGKgQ4XFHneur8U2GJepVHMpQs6eV4HnGgxCzqocut1643PSrNN2X2YQV2e2pkrch",
  "key35": "64wsV3TFEczZ1CktbCX3xERdwgqh71Wj4QgDEVwZVQHKnbEy9gdDrYrLsdfLTE4EWZ4sVeVtyAc51azs6uxSPdAp",
  "key36": "57mUSmtNMKckqoqPSKNVsDPBp7JfwhRokgdxSkcF3gmDC5xWmvF5ynC9MLLnPEYo5MrAssbsdBRkhZuirKpp2SWp",
  "key37": "2v9syvbnDz5C2t4y1eJ8tknvt8d9zBLw4Ja27GmBD2ohBxyToB5FdeLz94QECG7FoiaGE1Q9KDzYE6gZvMmLoWQ4",
  "key38": "5kebSf3CxKMiNjLmCrA2jPwxcj2uPBFC7F1A2rHmzEmacuqhVW5iWCwW94raDfJ1zNH9N2SC5NAJG4qUj5DQRnqg",
  "key39": "2R5HqsicZLHVkbBbg9gGquPgvVc5neyKzsBbY1m4Z4heJRea6rabkcQMkivaEVQQE6qdAVGqsjAUaR2p1SANabU4",
  "key40": "4uJpfegVAAvSuLRNhFo9eJpvxUp6gMiE75YSbC281vBfMM3TpN83uz1magdwcEKD7x4pUj3qBpFDoPzqMeZsdQ6x",
  "key41": "bEN8gXTEWTVMYvjRzEj9XTDMmc5GsJEGZLLVSWyk9WF8CaMj3rqpigBcEDgPen49hWTUSXqenH3KtAC2rpp2gHx",
  "key42": "4gsAoVpKPHWH3kmMqFr9VvLLkxCogWEd2zoeUxHaK3sd9f6vAkNVHZcaDQfXkirBwePY8UNAqvsWJZqcY9J21hU2",
  "key43": "41hP5pDCohpCaPy582oAKhA13wVF8ZWTGDFwi8eZFrwXUDgKmhAT5hDe3judvnXSxagN7UqCs6PXUy9bsiByEQZp",
  "key44": "67LG5pDdoZLdQYAD6T6Ewf36Xd9D7x5VTiNXYL7kT18vN3TmGp5CEfWz64osJhebJN663znityGYjMyoNgpuJjnV",
  "key45": "23URqsKUbtsz99PmaLZhi8qC558zdJR8TFnvR8E3KvWytpeCyM4tM8B6HN8yBWAjbZzqgoEjjyxFvwzNprmxsHMe",
  "key46": "57o4WuAPqTp8ZSh5gQajhpCXCVtMp26XXMhbiAoL976h9r8sEwHYAXK5GsKS2V4Pwje9QnX6FJebmnnUNBLLVxga"
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
