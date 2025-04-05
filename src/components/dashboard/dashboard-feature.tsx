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
    "2HmT2MdD8U7FzXjhJDwYnVfATVCj5GYtuuondpsksFnw2utYek5qPPVBQj9mxDki5sgB8sooBw8mDxxFSmusiboK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vVQ5a8vUUd7qYgrRVi8TLXnaH1kE4MiutF5rktoLTybELqFfEYNDFkJPwx4g3Mfcwa2L3yRxCa7sLkhYXJev1CX",
  "key1": "2rocTM3LyBLLwhgXTR615cuQ7tHNJveaovdzKs42VANyPED6hbGMZs9R36nddBaJLGsGd1v2FbcEq6sWqiFSXDcr",
  "key2": "5wdkc2T16ZeJLNFsXdmpj4NzaQ9UmSwaHHHg8ntpxzjsXLc7ymyy84JZtxYHWPMsJiCPzFG3BJ3N849mGNznFdAu",
  "key3": "NUAEVucRJcMmoQ8VSTCrfDGpJHRgWwTZcwcrfPDD387QB4w4y9Q8c6peU1bALgcJDtttA5TLgUBYwBKfYxcnGNc",
  "key4": "5RJ3F8b5Ch2s6tS2QaUJDArrbBPUBb6a2cBQ4sZyp1M9Bvof2EauhYRWnYTiBQm6J8FKBdMmf1a5N9DPZWroPZ5n",
  "key5": "45txois4xdWNp7K1CUBLmueKXpj57Q5Y7N5fQdnm6SLtGLUzMUxxkDSW6urBK5fi28oYSCZvYfhATGnpEQEF8JF5",
  "key6": "64HHyDrZ6hw1vUB4BuKZRSEXR2g19SkZ3m1etS4nSj5rixka1MdmrC2CG6ge4L1q228CNxvH38Q4XVCgtafVheiF",
  "key7": "4m1qdtSAi8A9H2diYHMerzjtQZ2VWwHmD5nkuGue3X4aALpubWy1aGmogGg9rPKFKTjuRZPBFLFkjEUT5rTc7K7E",
  "key8": "4msj9pkTqXARuRYDBhDg1JdHQbtCDFYWwpqFeV4uVoNNMTqx8mc7nAbmihdk94yCtA4RnfnT29BVENL7Mai73ogc",
  "key9": "62yjJnCGuqDKfujy2MuYbrRjVMizZDg2V5ev5VBsEQwbe1M1Z7BV3TkAj18X39wqpVN9qFy1uogA5Wvo8bvCFm9E",
  "key10": "5di4G4SPXUB4UKvDtdKLzpECTnL4wJZj1RU8sCb7cdt3zRfENF4Mbtdj2SJFJ3CqDVDPk7d7byjvTg8MpqWrBDJb",
  "key11": "3JLNvJ4cjWZNhYndchLbZpGe8SX6VnPmwwPwXgzG5Bo9XYq54cgwRKj56czPHVvuBAgQ6i9QRtaUkbWScbsXCH41",
  "key12": "5x9EUDqwV3FZRkSKrDXfQDkBW96zgqZEVeHvu9WK7ZTEFu6WwMg15bfQTfKE9cJxVevdF63LspBwjbYDjbVLMno3",
  "key13": "2bEFzbpQMjMsmtSWfhKQxmjfWmP4xJJBffD439MHz7yFfscJUovyoS9AoX38gmAkdeyto5qCcniMV1mj7mAQHSTC",
  "key14": "3yRrFbVsDVWMYeBCoRVLLdu96t9ZeCbMRvvNScCTbhcjAEDYx7tWwBZecDFD34jNvMQBxE6k8FNa5Ef9rqkhcR1f",
  "key15": "bKYWpg8bLuncRJ3m8JYBED4kwyLThoZ6fJdDyTbuXMRq2Go61XwKxFoPH2dJHyE28dGqjqf9DA6Em8ZxK7mA3nk",
  "key16": "2FBwp7MHjctK5TKmMeyJUXtTR13osimwZgcRZGKUKPFKEjgJCaoGRPivwTSELqHunpcxPwe2beC3Rz8XgNEddiVW",
  "key17": "4amcvvguqfU5sqa9ZKFUqSRTgn9eXmpaRXo5pLzKamtJ8kqRMs7gQnmKg8pCw6a9PQVPqh5EiZoktyZKtyY83PiV",
  "key18": "3ffKuqVyXLz1gHdTVMqNugjicztimVpMS5TkNgmdy9aXGS41skFuVqNVbcFtgDFxC5oWFSzfeGx5mYeY3Xc2btnY",
  "key19": "33KiW9RHrvogiaBX5tHJr8D8FTuFQUnX1PeCcbwp8SFkmmTiEGhTr9TcHrpHVGLowTwQBgVQyVfV81k7WogdrEGJ",
  "key20": "3mFNNqHCqbk1rXkXhmnoPTk5bnxpmu6uxbacWt9h8Jbwb6XxugZ2iyyneoxGv27nx1ZFXPWPnUd2QmdSS7CCBbsM",
  "key21": "51RwEFHKiCvuM9mhCbz1DTieJFPu9kyDreCwUkevvukYZTxDjVr8a5NDL5mso9EEVxPyKJYphYqLMo4B7F3sSh6Y",
  "key22": "2f4t8xDZbVQ6E3KegEqMXK3zzcE73fZ4bq8CiWY5wES95RBsrgKrpKYFWJsjpBh43qGZGGvpvvv3ocL7wJjAVgX1",
  "key23": "4HLHfaZQ5gG7sbb8hfZLS2SUta6vUhKR5qiz5rQWgNu6EcMmFYnLAccbE72yT81P1xBQ7NJPP5C8HSjfhJAX17ZZ",
  "key24": "558Sz33TnSitXtsAyKkqjgoygvDMXWXfD2gUqV6YLJxt1xBZNF4J2FWPkVoWtwTB28rA7yogxig3o7YKXL3yX6C7",
  "key25": "4Xxr8Y3oQu4Khzz9jqwUomcX1cB3oCpZ5VVj5r1ENwGqXc1PK1A31MwKFsK59KvmKt8WfM7a23pkSjPj5MnNUzoq"
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
