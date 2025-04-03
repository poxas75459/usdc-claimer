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
    "4faFQbqQiLjwuxUXbt2fSg7JH7h17t7JDAb6EfLnT6SZxu7ebfG4o134TEUycFTJ7UKrAmWYfH3QS4JhnnekjunS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ba2sxxTUYY6tHmWyyS54gMPaBWK8kTXBL77gqAVw9uYFCYKceBEJWVUZhJKqpEEDPwQCDwWTJiuLF1wNx5mWFa5",
  "key1": "3eZJpHNqLN8RcnmrehVabVepWfituGtdp3JZy7GBdBVct3hF2jPdvcUzpog6tKE5Z34Wu6vHLVJjBq8Z3eDLu4V9",
  "key2": "4pqoJU1vYTiuomZ53796mGYn8YGijAKRggXHaXvaMfS7BQRfCyTc3H76Cqrn6YUjVBxCV7Kq6tzouE2ZFy1JjQDA",
  "key3": "2B37PLeCd9MXeEHMxYysZUwCYaZgNTDkxhKYBcYhSCrQWo5JNiD7BMLYj8C3Xm5oixYhVD8514AAcuphj5qdGmA3",
  "key4": "3MnVxhULDUu9z6qe9aXH1E4gQyXT9DCX2fXX1oSVme6zkfFGKCb5ZQgMsr4mfvzBRhpfuQJxiyiFbMx7NBv5Sg9q",
  "key5": "4r49iRhRMukeM7tMfxYr2z1QmHvbUxh45Ew3Fhc2T88e7RsDdWHMVxmrKSJ8zPG6jCWgggKpGhE9KqZp2Hec1689",
  "key6": "4n7QGWuY3hREoDCs3nBk9NKFcoJ5vvwzmS8vTz761eUy9faNoMtRsurQVJ3gLUo1pgp3C3vGP6dVeTet3npyg17o",
  "key7": "2MjCpAmrfQ1eQRJBRUNuc1yP1NEGawn8CfCV3UJKZW98k372zTgVgPQFsjs66BxSXGEEPv6vqFQics23hCh9mdLq",
  "key8": "2xMgatXAJLMdPeFh27kiiDNo27gPTKEa2fJPafuaGnPxuKUtShbwKxS7qQKD6mrfizQfEXezQaAehz6yaR85Pz7u",
  "key9": "NuqwdVmyKfNhgw2kuYJkZM55zrin2KadWnWAqWQ1862DCXKqxH82T8MNzN1fo37kK9CBJbB9dgsrneaudajTFP9",
  "key10": "322gvM5RL7zqKYbd3kRG3GgeCgmmy3mTWdNoK7UMySsjLYHoEYoKdPykgJabm8HXz2Ux3CeTFy6Y75M9fRJQDEvY",
  "key11": "3DQvT6NbWawmtyfTUky6ozrExWt3YMsnrd6Y9PhwngKD2bFfmFTQLxNDhUzXLWxehT4wPLCENfhNcXAi3F6AgNMb",
  "key12": "5tx2LJALQSsLdG4TfCBgNazB8tmiDyCxN8TFYd5VWGu6YA2FjqjM9NfRQj5F1x3PayNaDhvZ2WTPbuTT2GBVxALm",
  "key13": "341PMwuf9eY9F36x7ZZkJ2T1DNPDeA8vqoEH9FCFZgKjesutnsBKtLSJuVaXMHHRXB1sHjPQUo2CLBUCNoSsNqe2",
  "key14": "thupQEdrVh9KUapF7GyzePvYeFzVpiG6yZ29vWExagRo3r2ooCTfUdrE5bsQNFMVEZx4Gc1v2wbsDTr8eXyqB8s",
  "key15": "5Pmk8yHoDcErWDrEkc7JczE6YiDTfsgBXk9z8vaPCMRFjHeAz42LYQU3RMCs7UXyHNsUiDVcxPjL8rwTX1xNa2Yi",
  "key16": "d2ywBVtAD6d7C6jm4Z64YCoQocVzsn5tpTRrY8pELGaLwUTUbFr2XBKtxXghDSxqTf2w9Ye8A7B3yF2XUYxa2Rw",
  "key17": "2SJ4XzM1DkLjXQdfPgquc6tWoheKySBjri4mEKqzed8tYABDbrZ2amLkhULfJ4oJ27YDk5UXYVgDCUSYEnEyzibX",
  "key18": "49Rmh6hj2GuGSq5jEvFsrcq8f6SsU198e5jVTTMK2rdYxiNKGAzZCtS5ftZ4GboHtYtANevfrofHPgcR54ZrawUv",
  "key19": "3bDUjcXt7E85NYLv2nGNEhqzUSuC8oBhSffoaDpQ7iEm5uzLx91LQL2YBUs2kKKEzkYxcgAbeAKsVCC3pw1TMGDv",
  "key20": "aapnkjiGjT6TVzVHKrjFmdhzKYkJNTaZHW7Jk28cej8iS32AdVXu3gejQv4TQ1PWz3RaRsazP9Lrq3LQYYQfggG",
  "key21": "2HsfEZYwyH3577aM9pd9umtoT1skZ2HLce97QoMgVWbKAeA9DwiJpmkbDWRtixvD2ciuqqsjuXtqLZMvAkijmdT9",
  "key22": "3UQf1veHMWa7w5NLyEgB3pUUkgVhDqhMpNtE9HqkBzY6eCp8nSRmFrY9vdq7aiX91YpEZE6ZSLgZJaVyDWJDEWUv",
  "key23": "3jG36BBsazvBcxrFXn4magq1D8ych3DxDVSHzaeqQ7RoxYFgbw4wY1H8MkpB1UCLDXpZYQFHnmMT9JKEoSh3xvNd",
  "key24": "66Pdfi6xpy8LeLBfniFpKigBtG8BB3odMmEketjcz159fJRzJHw8tw8UxqheEuZ9KovDaCnW3c6ypcPWYSJeg2tW",
  "key25": "4zShfdHXFAZCndTGY7LRHiAam2zgqR7tLCkWd3WBr95j8CWHakw717JsW3sPQUaojP16vaAw1G6k698d2fZEQGUi",
  "key26": "5jBpVTsy86cpXMMrZ97cuf21Uhx5Eg1F3qDkAtUSZAYeCo5CSkiyhbwQBaBpga8Zc3YBLHzcumxQJxCrxTMRDeKj",
  "key27": "4Czdx4XwwpRBkQG2vauuTs26C8oARw2Sdd1AzJg25YY84h2RW7ojvY2uVLmADYXUogzq6TV163WxzFsBfJkUBzGE",
  "key28": "3oTeChm4KMb84rikobLn25gWUB3rAZ3xWYpXkrnzncMapirYDvCgg5wmC2EF3FBdfeXAHC1Fp6pwCSwWghC7jySa",
  "key29": "5VCY8CesnCf284BfQHkcRKLHdDWqHg3ouw93WZpjMiPCqNixp3giQsKwHMNoDKQ5NtQRT6fu8rs8E6xs1gtbM7xj",
  "key30": "3qnM51qUVeg3jhpeQHaMtN2TnrmnerhS4iB6LsMWpJcjRNzgv3EPmEqor9NQzsJn41e7Q3dnuk1RETXPpv3rLt2i",
  "key31": "ZyppkEAJuFnBvkpY2fmxNorqkwGU4EzR3gEjUThry74QofoJK6LFvvUbBvAM16Npv1PutrUzLCxiqLcJcH8m1yN",
  "key32": "4meysejJTBiKhpjfr97mVHRsSA63VXQ5QfZYyzQa1Z2yFr6yTw8xVfbiF2x9Nnt4xc7edcwt8pkmWUx7kBVdMpVS",
  "key33": "2mrX386RCB9k7Tk48fgGU5hrYErXYXEK2gNMM9JkzR4PnSouGMYctZiU65b1JwUUVrno9oa5n9KHFRs54tcyDR95",
  "key34": "43qgcZbN3Ek1DuQy8rxjyajWPGtZe6pdYSSk8CoB9aL7zwTMQS597YRRxS3zbgxnoEnBJ8pYh6aqSTa3vXxGsDnv"
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
