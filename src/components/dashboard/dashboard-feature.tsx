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
    "j1zaF93G7WEg1PaqsSNYiupm6hswS8kvuR4Hd4VWUoVQgQRS5pxzpvaokNy6NSjZQATG7fzfwiVNdMAAzqjJvnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pwvzQved9eDtfzeE1uyhkBumY6LqKcSEwXxNQktUywUPVvFgDWQqaDnkjQHMZKU4aSzpz2cwxRw8CSibut3CjBT",
  "key1": "5kWhyTHnypRT6aQoRYjANVAvvybRXFdG1b77zRNMbAE2FRFoyZ9sXgC8vVPFFoFy8HSxtGV9xVXrFvojeYWZiPnL",
  "key2": "62ywNS7gqYQKqi7vt3ScUUFXjTt8CjyUiXXumNsrncr7kT2p59GTccmsbdiaqcxKfG2JUfLTWmVBAX69r4fNzmtZ",
  "key3": "2q9EFbubJdF1zmSq37Kto6YJMUT3Vx4DcgVJEmFBV8cegnGgEXL1fuF6UScTny6RZGJCSUr1M1NQ6K3SQjvedHtq",
  "key4": "42yFhkpxqiRzYZpTnpoYtxHaHCQYeMsWcWEqdDsgTDRqA8hatSj2Hjj3J1WstMniw6D7khriye2e28f5dXnHZU61",
  "key5": "3yLtStX9cENTBNjRUgactyQy1X6QeDWBr3tj9pBFBm94gHJSPiM73rFL1ZswJjKC9eu5a3DDDUxiu6NeB9agvqgd",
  "key6": "3yLMXjxHQRrcP37MYpEP6BJfgwNhwxMwixYcNQ3jWqF9v5qKxZktXgEFuRL5Rh6Jgdwk7W6XBvXfcScEsPqLffup",
  "key7": "5g33wNGjdtzKqFdjdRWF1LMmJ4w3TGX9PBEtCywaL9Wwo5CNQUEBZpMfTyhV1MPURC42BeUXBNKgMiSE44BXu6wp",
  "key8": "5q583qMnvsc68MDkTdFuHBeQo4unamE4QYUfd9iAHwkf9hqF9ociQihynkD1GxXXDchepqfHtnNMsKZvrQynfQdR",
  "key9": "2Y1zVMteexf6AAcX3hLjPxQmJNL5Eov8FjS7AGQTE6VVQzuiZSkXnRANEk6CsCigzueRzKudxXFjKP7J31HfL713",
  "key10": "5NHU9ZFU9MC5br6Se39VbqW24j9rDwyufLiCmh1CzgzNVHsStwmViHjLSuPMu3JzccLzfD5Zcj4dHfu3pMXbyJaC",
  "key11": "5rvM4CRAqQSgCPAPW6iyAq3L471WYyV6ZzxA2fFmFZ39yNF92dyycEfc9Kv8tcU9R2YWQn1vRgnWbL5bMa7pw6y1",
  "key12": "2ESG7LR33HzsGJQripV9B7ddanVWrDhFw54SBWDDQ25Ra7vqjZKwhH2q1wcWqAjNyLwPMuSBzRFHo9HVQ6juAVBA",
  "key13": "2bJ9WBEU87XrbG1GnoizXxtSjw4dAcXpZEZTLjhQtr6543of47mXPk6HLEku4VmSG7XUFWPD3Ac5j1cDuEAB1SXM",
  "key14": "4g5K5JHEmQ92mL4meqVrR3gu6gj9YnfVCEZ4xzBEowzGJPnKWH1nLdtEDxTpLWT1nTj8BoM6Juu8v7Mu8rk9nj71",
  "key15": "4XQHkE2Tpa8YVQCJqwCXQjmsdpm9gV1RTyqNJZAo8MWpYs1TRHrE88rrssQoQpJHeaaZTeeLp8Ys3mEVTHiVRMCd",
  "key16": "p5A1kcTPoAatBdjyZwQw991MbiioAthZmZf45tkkh4HEWq4VxkL1eEx7nQPeA3GqcoBYPZujrL4TsNzSEV1J67z",
  "key17": "5VvpAGy6M61C1ubKTL3F5H9EymEeYPZs17WoSNVDxRj5VBuDDVZ63DC388BicNYCbJBALBh9LdwfnUnyTbTBE8eT",
  "key18": "4Anp7D65y1aAuFNPXhf37oVQaATbuYm4MXkF6GwPHzfKrEi82hN8KshGZJ5uwm77uBh3AzgSZXhuTbWGFTBK3JnM",
  "key19": "2yiQut7Pq17xXaWfdTk5hsj2aKw1ZCcsv8iHv1dfr2iSCs9uyij6PkmTVwryYxiYSRCixqZpvPAzcWA1BriUbjJY",
  "key20": "41GJmy4ZKcK5teakYC8fwMkinAhcj8h8fYghNQnPy94rrT3RoSk43wyp3aZiDdxN677sGiJXeh11FMp4GztELf2r",
  "key21": "7EXt9n85Jy3JyqR3zE6B3dByHMn8coz2FFVxuyCxnzFpnkNEdY5rJzJDoqNQqgziPLVNmNcuxkPWhuRta1tr5Lg",
  "key22": "4gWqLkrgsCSSQt9b7T244PnoSP7PbNzCkdycnYr8x71DLw9C7EgDnZK38kHnh9ej6wzytvJvm7f4rbNU7gRq69mS",
  "key23": "4g4nxnSyK2yX1VMBH2ewwdniFD1eXd3T9v5BqkA6k16h5PF8CbHEmCTTvNJT2LWDVuorjjcdSkzUkEntru286rnw",
  "key24": "3sS78QDUD6jcxHocfaF6B77S23z2RaeYQaWkZuw9Tz9guyFTzHokSyTofGJUVavcNiFWnnoyUEKFtrQoAErwtHvw",
  "key25": "gJzShbGtLqiC67gUVANiYAn4BAreXt1BixNjdQtgrKF7zs4EqudHkyQ2pEc28RX56mQ3eiVecud86H7W97BuTYC",
  "key26": "2FS3zGtXq3QdDcDLbsJQR9Q3juKvbjbYUkWoaY1P2DgQ7ZVjYDFcPR6JT5yhbXZEQai6FxqbK4dnZf2mePHit5Tt",
  "key27": "4ABme3ro6nZ4Qj74MqMGPano9k9XWg1136APQghZgm1S4GZt74RQ81yXtrNgAsQZJewon5oRcFj7CMMLxCPaybcA",
  "key28": "36TyBNXF8kG3fSfpjTcq2nFwvq6Wa43bYpq1Stet5AqEP99oiShXnQZ2rWiuRKw2dTmLAajoDTWAZAJ3e6suosrz",
  "key29": "nhCM2sLZNP2r3EgJKBHa9A4iuFDnCXnpCq41BezmrLDDM7SsT8mw6xWmeJw5n3RALknswcnXGzdbh5daDj9ZCKo",
  "key30": "4TsKmuYA4Gr6ZLCuJ4VBPYFVqJcpFriwykmtYjDEerYcvcAKMVcsGfKMG8ceFFpV6bV4n1Yr5uPQD6L4wZEqExiR",
  "key31": "7gcidHPd6qrpCznUZ7F2gTUpcY28KzsckNZqDov5gMVwhPoTEDDgmkYfYMGy9xVqhTp5tes2sYWfpdqo4Xcr5UK",
  "key32": "2MeKE7YSgHdNx3zo4Axihykmo9vRyGKe34XWWg8N7w4cQJW7MGFneGeizNHeob7sP8Q5duKVxwqpZmJCJ5LXuxEm",
  "key33": "66eChUYMjXQyLWBYyexnuZ9pVfBxSNb2BoYH16iv1BSM5Es9EgQ98SkGPxvX71q3GQbWenSSgj4tk2PmEJRYgs1i",
  "key34": "2emNBZHT98HonkiDX1cJdnvoK4yDDLddFaR9ugh39tZRzqvuwM55DMRcWzACW9m7JnKMKWYSDXUppPrKvVmUjaNU",
  "key35": "3j8a5PMuNLGCUtXGngbvESXTo1HA3AcK981saDQ6sKAfpMNZzfQVB9xCf9XTBieJAJfFfYSHn4Yc4Ck3SH8BvzUy",
  "key36": "5gVUWwEMgHkuWkv4ro6E4ptMHQjNNNz4T67fMDQCR9GvR8P9uRvRXPFjNKtZapVFA1LT9XTCqBXhZDZgMNRkFBwJ",
  "key37": "uCJGh76qtNkGc9FDQffRx53MUzuBXGahEbQJrjWW1TGx5MzALEAAqLduVsrNT9n2tXcgGdfZWGm6om2KUJ6iPgR",
  "key38": "24T2tUUo6CrMzBu8DdDXKU3oEYmApbiJY5i2MtNxe6k1ss5n46VKUat3hwNcZqkWjYQB26GxwhZzYFMrsAgK9qvg",
  "key39": "4nBveJgSzN8A6zevzJRgSFzDXC46Kubi3XxUcReeMRKTvxb3f6BB4SeQ7nxGx4GiiSXffZ4mfajbVV2zSMAJ8kF",
  "key40": "FbmtJFhTeufD1c11fGr9iEsz9qqro9SbEwqDU6wMhvTjDsV5en6aW65iRXXkjqBDjxLNYbvPN2tYuQRbn1QevoX",
  "key41": "3wV2fK74YggdYTA8nS6hM5frgrJERS9H28Yk2pTck3gHjzK6c3zamcGMDYxsxCq7vH4W1R4TyRjZWiyhKonD74cc"
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
