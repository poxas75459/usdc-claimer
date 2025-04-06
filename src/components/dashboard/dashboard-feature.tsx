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
    "393oareLm5WXdsxFYayZULtJkmdn5L3yGSBpE3eJ8PjptHQGHTAtFwHQnwqgB2rw4YkmJrLBi7ZfK8zGWUahQXxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o7gP7wcrsHHTUEgAt56aGHj8hBVStmojmXJug1d3e8M3Z54aDFqaXaQjJT7U9cg3swoE9j1dwnkhqkAMuTPCeBn",
  "key1": "2hD8b6rt69ZFpQQGfJMmy7R5b9DH7aUcuYm2CF8sZSSxwTQkSkL67F5Mzysz33EYhGiwiq9FMiUtdEZCQSq6r7Kw",
  "key2": "4riHFkH6X2AukxpcB4aqFS1D97Uvm2jDoLQ7q4Rd6sPsfJeD6nZHAn9Ns2pXadj88kUgyHUzskw2q729SDoYoZw8",
  "key3": "4QmnSFdnvLy3hcKa1AiVhSdnGs2MgxhTEvUAyWUXQw6DwAFx2Mwvvu2vsnpgiZCPgiN2AxWbasEX6SA1u7HRkZv4",
  "key4": "2ix3X2TRGAko77b63M66VPEHbvQ4JTgRLTxMysVfDD61j9qzL8CexvHqzHAyiekowseVRZReeRzg8NxbnG6azx8D",
  "key5": "nrUnbvdEo1MabTwj7P3otvXE7LDNi1K7MU9mZkkhV2KqWp5MWxE5wFweoYspgbko2L9GU55CeBtkJoFEF9CeZ4z",
  "key6": "52LDJFiVmPTzwaFzWaa2cry43do4BUF59unKCD5ASVg6hMBzXLNWtjDDu4Wob4d8iPwgLKQdSw5HbHSUgQ2VbxLN",
  "key7": "3DHnFXAkgRAdYcZkfVFq4r1DZcUpxT83uvCdzBd8K4LZA3SwU5URuae6bbW74jPnpRTQ8ULaFdPLPTF4pxu5TNCH",
  "key8": "24DqPPAGoTMLwkt5zbpoZZ2CY6r9nsoWzKf6YvaNsPtUX8iVaYJxF7shgoGrkEgfoBn7YudA7dCrNQCEYwvsuzjS",
  "key9": "65C64m2ptMPdk21iF8PosgB91diveKhLfTaAhsDYMUbRhXsWjefDUFGnVnvo7mMgUC5bvW9JogqcmFYip7VBnEd6",
  "key10": "hJjMACRJjTVwX5gr61dnud1XXF1aYmh2XoTtbz55BFgw16eiyFZ6JyaJcaCyiYjoursFWfrKkzxDV7u7EPynVXq",
  "key11": "5uEZsavLRPzpKeVXY39RAauo6LagsRJLm4pkoUgnBymEHeVu5yRU3z1w5NSAEhmtuvsUKs59DezdMbFoNTb1vP1n",
  "key12": "xhWqo24XvZPHCw4UD5sLNNb3oYnsdqXn9AZEqZzi8y6dVV6jYahbQ5ei3aCjHVDUmcU9RPU5B2syj98QhjLZyjx",
  "key13": "2n7gjTt3UyHM28iBd2rdwmriqje9h8GSZghrmUFsVVeHpGTntPeneuAsFPk8nUvEn8DjQfVtqTmWdzW5iYhyBmqb",
  "key14": "5Rs8rkMd3ZWz8HB7hyvTSpSwz7nksnjYm1ptB9P5CXFXwCHmHnLK6ZMopW2f44oUmBa3kSCCVX5gksY5gbtagpFA",
  "key15": "5snHTRtaAUPVnskYZMT56tg538oQdDSnknGDT7evkkyZYj6BWedfF8GMoiZLmFyeD8jdzUNfttjvJ1DtBneDPW88",
  "key16": "44VV8N9Vw1CcHLPgb8smormoiB2um3vyS6227rs767CVDx9WUeiPWHRfDp6hajWJADWbwuLYPqXJ4TWKqUFNdEkc",
  "key17": "335EPs257gDvd35BDkHfNfPf9Fa2seUeGuLWFrURszi4DQoPdVxLPHiFng4YseKiptefqX5TohHTdcyZ4zGP4kvR",
  "key18": "jW1kxw8Tx7XhYKXAz1AKhcNtpLcnWjTdPgutqyyuZeaTUnosnywDkss4jtTFqmpyLYPXwZZ8H4vFxxhHE1aZEqc",
  "key19": "51SKz4ytVUEaLqj6jLHEKezYEvLASXQMz3vLtfKtT4m5fjufjRrK9WZ9x4VE4Pfg6ojojaTfeMzMaFPov4QnrdkY",
  "key20": "2dczqSrCDLL1TmnJ7nzvrxKqX2bRCd3LiwCtLjHcFpzEwAaEDeArshmmFRaBCk9MecE9PUyNC4MPzEGQRQZC4oAg",
  "key21": "2tKc9ibAGYvBQaeq736akBC5ABs6hkcZsQSbUvNg2sjDh5pJiHduQnBYz2mBMNX9BzLoHRivbfCtQwkzKXBFmu57",
  "key22": "tqCEPTieiZT6UaY1fpA3a1u8izfdyQYerxNKSt41qfH8S6bQQXC4nKEtVPtwNu3Z89cdC5HX8ur6byK83uz22KA",
  "key23": "b347ribYjEFYWEwzbbhyiEvf8Sz6wLwr1My7GYm7GhzYXwGHyqieTC5KwgD9NsMZVSucWZ5sJ73adAutcPoc1Ur",
  "key24": "5XMuTtVFCF73XqwZTRK24ebmj3Z5tgs3o1d9ywePeSmNUcxqX3dCwQK1u8rnHAiDnDb546SgJQDv4XyfBL139W9t",
  "key25": "5qWiFg2aXFGqjf91aXJHrcFxWVkwQkigCcESUzQ1PPRUUh74713S8LX1ZMRnw44o613duDXhayvpm8LjwuMssayj",
  "key26": "76dkLHht9xkkq8SBfZsEJqpP5PrD3HSrquiM2tqK7eEca9VZXcu6C1R7y1VBCsoEH67yXCzSMnrezPYRyY7enbg",
  "key27": "4UDehhyMPV5x8EcyspmJMzLw6rWYgpkcZaDcYJcJXMPvKJcXe98jM5Yt8kyfsS99jEt2yWBug4ZCYcrFU4m7AXVZ",
  "key28": "2ZuEmYCxNe2YGFk2M5JXtFhboH6g7CSDfr7PZDpoMXkuDThLN27mSawf1kBnQApsoZsmARcPdHeSzDWYNmVhVsJb",
  "key29": "3xuneeX41oKDnQhzBaPHX3VpxnhQ3CYugw4gRZc4HXbop71AeBt4WgdvhRwK31s7jTkXbkZcodJ5sqf3kpfRcnBx",
  "key30": "35He4An3y89Qv1gw18AUtXCF4vfWK5ju2UBiXJKDz5zr2d84xhhbZYqZvoF6U9hU9fFUAVamRRPj77S6NyXDHbZP",
  "key31": "3J9GLGSgef1bAMtZc96SUb62dXLtYeBcrYvvGTECKKAi2iD3M7Z6mKAE81v4MyPdc6BJ3fw6jbu2MmxH6AGo81X2",
  "key32": "4vwsTJbREh3AcRQe9g2FdS28vKvMvDTaj5aXnoiBea3RnXwWJVcZp5viQKk2HnuX7NEDx9Q7qFwMVnYWfsj5Hshn",
  "key33": "ZxatXy5oGuxJ2uJvZdR5Y1MAn2qA71zVVAAi4nXhv1zYNyioGujmyuQn7UXPYmDhpVNiaak1Y9uvZ4n9ygtsh8m",
  "key34": "3R2sQXqtC9X6Fpf7DF18PeLKEvRuAFapjuCMCrgQauyN6gnzQ3YZuec8Y7WBsUJqqHnALwEuNRJJfQqvamitrZhq",
  "key35": "2BpoKvdAYzKN2idA3jvFG54WCcLZi6YbrmPXMXeyMLDNK7KZxTMNE7b3TDYNQEYP6LutE1SoTGrCPWBp4mqcWFHw",
  "key36": "3szemRKCkDzTC85rDLHB1fzwbNiCzswK5gK2suovxjTNGFVqBfEUAZUgcqEs1vTZYMDK3f6s6NSaU17dHb1nCkqf",
  "key37": "2dLJuZ2YqpX3GuLDfsKZwtHa4woh9XWyt4ugUNQfnH1UCJZ4zKi7DynJjsZNiFYPSXg2mxVknzmPSdm2zDNTbCSd",
  "key38": "4AdCz3jMARdkp7hj1fXewrjh1h1UGJ4cT7Y62chWtyU1faH6GH47JTppFuyvncN65CR9UjCSRBmJYyuhZuPWSRcJ",
  "key39": "3bTgqXtZGNkUqgMFbv1sipfz83zPifa379yjKeUNxN1dEC1kXfPDELeZaKuKWLcNnN7fG9FwJvNRQitercm34edB",
  "key40": "3Y1Tx2isi7m7CqZ4p2D6DRY4wdrVtcYrxi8jLKe6RPfewRtnhxqUVXKfpoErgZSqT3qxyDjDuCgLp5cdB1ccZ8mG",
  "key41": "56hijMytxJ4rc82NtfnyRhXzcwHC5B1tzEASEkfKAWD417EioXMFgZ44MbL91eJnuVicUAKyLYkProWWNWXzXDWW",
  "key42": "o8nDXDQizHXGocrE2JtAS3W3qqD5KoU1US8h8JgCW9dZqBJ7LUjDajFVRKUqXgtrKYrJug8kk9sQBU963kotjbq"
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
