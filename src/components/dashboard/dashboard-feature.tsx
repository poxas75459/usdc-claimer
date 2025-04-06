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
    "3ZY8jJ3eNs7rtEAYuYhsk4g8qnzURV3ZSZDzFGgVLYdEn2UfAQq6FKxnBDdyRDLEHPHcsfeg96sr3cuM8ZYrduwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U52yKJNvrRUFUP9Wu83NXnerQWpHWZv7nRrMkkbXPTFnScyPHvgQCdksUJSXPcu2A8hd4Vym5MFzY6gPpEt38rP",
  "key1": "Np8t392GFvkScwU4U1QgWM75xoojZBFS9DBasfey23awoacwWiSiukdNeLS392cqnjVEd7Lys4HQwJdEMSf6mrU",
  "key2": "iTQHpjQU8ymyf8k2iqu7Q1tQYVXgmz1m9PtkSp3Wv9NJTZm8xwjAyn6XZYp5WdhWCdAbPdVyT5seaZvNUUF8R79",
  "key3": "2bpq9C2DXHe17wVXQuFjKhJSkQWAZrSbLEdKEaFPeiCiXj4NAK8kHDivjP8L1JahVrgPWxaghqjA4wyuxsnL3dj9",
  "key4": "4KRRtHive9wTxS2gWXARfEq1mfQjqBpamwaNEKxrmP8fvaqYp7yECWh6dBiAYpxH666pt4TBaXm7fqNSv5bDSCE7",
  "key5": "W1hGhNR6udySN6vUqH312kxSuJJQd9yX4PCBkPzicLYH38SbAWQfBCbpjkK82NCMHHdyVXbGsuonZ9rCtdP1heD",
  "key6": "4tXm8PQoqLYQbt376QPJNAQjxKhgX2BRiWgF3zafiSsNXHdGDzqGJxULp3kTVwHbYiDLDxT5Zp1NuiVYYJ4e9uY5",
  "key7": "yRvp6D6i6xQnCnxSxvm5ZVvmaEujerAdAfR8MU62q4yPeKe6igHGPV8htkg1ykyhPpy9M2nLpQrt3Dy4biy8Ftz",
  "key8": "JgDyDrRAgynjut6tq5B6K7bZ3WStQUQH2JLUmQM4U3MdKuLazRDMQzYCMswNmQaifoDMzATZvbsRMNYviABzhUd",
  "key9": "59vwrN1WGy8e2EmnfeqekK6Bhd4BnaKW4ZtotU6U3qdy295aomogawmW61aU3nsoQVHbi3FjFS444eojSRx6X8ia",
  "key10": "sGss6m4Xhy1HzavpxR12Je2uBteFAVtwUnB1YqWSXiuq9JatsseSqLWsX7xpnEUspq6TApyT4npLvQruujax8J1",
  "key11": "2kS96YgwErDvnpREwPz2tvXc9ZA1Jt8GdhQ8EdE3Avwcz6hrEwZm9sm3KUgC6TB9cWK4JGC887KJpLRJCyUtKz2v",
  "key12": "3fHamvEWN7gKDvzNazJtcu1qMBkFnak5wfhcUfEnLinkeK9nAD9snTydSnJhrZLNie3tppUFGYJ3THVfvmYinzXZ",
  "key13": "3wKNc1b7W2K2QL5z4isKJ5KXmVnHMYn9JnQHpXUAhnXiJheDN75xmofhyTYV8LA8XB6MamrYqFTE7NxLm3yZCBZb",
  "key14": "5xQhyux93BznNYY6g66juzt3NMCp4CdMvLz8prtvmg7Bf7VJFyFscK915BU7Bts5tQPvX2ghAeQ7RcvfHL3ALdd1",
  "key15": "mXji1WoLywCcxwGrDE2pJg5GuSA3TPM1UGEdj1ozZ16VvSzwtjcpfcxUum44RDYCTemECnnzuFNRV2ieY8393bq",
  "key16": "e63pJfxErv95hWZo1ueKo5dE3nLfTdkRpuHTSNfXd2y4U5DXukyb3n3j1iR91qM1RevshuXm356e4tbd86YjEnc",
  "key17": "5XojZ4riCK2r58j7eia53d4RAmQuNQRkkNNFYmiKTm5BczXEff1yCQUUcDfgV2C6h9gLj24iP3P1N4k5wyUTzDRp",
  "key18": "4dW8LXrn57nref3ZZXWgd2Qndz7poxQWzWbmeQMLJ1fGHuzyeXjxhK3UbwYGRXkca2VRDERakUv7eiCoJnDM8ptu",
  "key19": "4mQQ1GxZH7j6xdrCbPZ951T1fYWxkJeNaQwgLzyEpU8kApyEPwxcCdqqn6wLbjt4d6ZeS7HBU2S77TjdqJutyrzJ",
  "key20": "4JinnUjSVNgC8wVju74cNGPPYQaHAAShjG1kzddPXTuhoVwgFmBU1bpzWm8py9qbTcmyakT798gzm1nrFxYJbp31",
  "key21": "51paYDeSc2P8fUshJhnN2BYW7FTFREmBGNg3a2QyhhxxRaxFeAAG9xy2ZsqEjdo5NsqbxFMog8tnEU8xThHD57Xc",
  "key22": "3JVPyW23u39TnkimHoUNsZHj6z9qbdEaqrUB56Bb7JAzUXrdFuvuzZmYUQebUJtRgTAmox1zYSbDwbYwbvTDH5hx",
  "key23": "a53Nz5LjRV17aFBnaHtTr5RZ5pn79wzLr6WxsXYmk5uVdgC13Po3TqVH7kNp3dWLCRKNBQN551wrcfcXwLMthXQ",
  "key24": "66LduL5MyNoZsAEWsser5enNmEFaMXhxgCbghM93i8KQpEQwNheZyKneFsXwmTtkytjVSNZ3mpZmzBpujobgTPXy",
  "key25": "4UbFTcPJu6uEQVNwHKN4unGLkyWzARZXCS7WPUN4zgTZjhHgzKCwzU8vPnJExwFCxt22SQcm5WTmPxmSXxJLdfWr",
  "key26": "3j9aENxsV7vSiPiugkt6fWK2NvCMfF5SbZM3V39HbA2kNvxhdhhJpZiXBdy52pTSh7uKyEJJCsJBqPtaJ3xes3zT"
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
