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
    "Hsexn3tymCtjW8JAN8shMKmhguXtn2iJgZPa5Au8BShB5F17P9Ajok5aYvsQVJG2uedkDWNZyoHDuwEpN8SWiCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rt9vZqXu2CZFZfVoNWFSChRwb7DSiiavtw3btAVMtrzoFqNSdhPUnVJqMMKy1rBn4VGvVWkTyMmLGR6vmYhLLSe",
  "key1": "3bg6nZFAzPJebjbBKdYgHmvkM1Pnzh4jadFaMyxohW1JveMLiCzsrgRH2SCRgueW2dN93NH64PEiWSUoTqfWuNV9",
  "key2": "5FYsPvQ2ud3QUAFowM9CGZXtFHRfwLwybaQFaYWhX85ZJ1D5fdJ5eWhp4e9aK1ntDHfHR713wFxuHzDVjBfgRfBy",
  "key3": "3VqqtRy7jqJ5desHbNqY4ohWuGiHRtYcZkadPkUdENduT5YewHkh4Y3zeWgQNuxvFaaaBZ6ySPM32svi56GrGhdn",
  "key4": "29DnmnUqmF1mupfoLiNjRELA27cRzFKFW6TY1AWBYZYyvyNgubXiiWDAou1iZ8fAUPPj6a3r2j8cmUqnyDphorsc",
  "key5": "3JVdonBZH7HEgmoBtw7PXRaMcFSeBuZsfXaByrF1hVvLpD7H1SbDT4v2aWMpgxN1SqTK6KfHZJvAH1uuyBwoye3H",
  "key6": "2v53wb3mKkdoMVs4V8nXMp6Wv3uUAjyZ7SPv6BGaDGpE1c4hZ11JeCQKXJ1bcDcjExDasrmof2YG1oiZZxwPv7K8",
  "key7": "2xgfLH2doYhgVMm9gVqyoZSyrdJsuUzw4eP2fQjHjtDUG7vk2PF6N6osMMWYiTymnsGhnZz6yU7xNDaAfURJKVJo",
  "key8": "4KE2oqLSUrQskkVJe5xrAoj2182DFgoHQVBzjEPUPfzRuC6Y6BLhXZ5deBrre5Rhiz98qokwMRfqLEfUV6aaGqFT",
  "key9": "2omnmjc91kiLpzMazjP1wMd8ZZdne4rgUfHi43Zqw2T7z3FQB7Q4ndQAYQ8C8NmpskABtibHQv9AsmVHGJwdZKA7",
  "key10": "4RaCZGJSyAy2fjQoQHFDZwAC5QK47MPyzLVaDQF8bA4nsUvv96erhukZg5oURmSmRueCU3xuthyWfXkpYVzt2NLL",
  "key11": "66dBFRmeEtvLGfCX31sChTJJzGehepUxtWNdW8eoLhrauVTWAcYdRsJKViFeUs4KVuFQTS7MdrHoKEvK24tJnstG",
  "key12": "4xXekJUg6oAsEyXXefDhTcQwHGgA9cMDGtAWCcPZEAZUo35quGzP2tLeeQCqXjVciJE7Abg2MsX44FRJibkRxakk",
  "key13": "5UQn9WfEexF1bqvZwQA6vSFL8k8rr5JA5XStdvLTibVPgGvS6DQNCb3K93QZCQg7TNkSeEDpLNdVjsJjFfn1W9W2",
  "key14": "3uF5CRVrHAESZPYZQVu6h7827kmEbm8NFVgZiqQM56fnTqEU9RaJZ3XQy1S9ubrZUqb38neekJtsR9EdY4ZS1q6k",
  "key15": "5LcCWgUrdrCgVwm53nUZbWMgT9AtRuPNK1PzKKgFtidBD2zhotobZ6AXS2JckgxtUoBmzhPhkKK8FzLavtocEnCU",
  "key16": "4AeNGfpusQCu9eUCLmNn1jyfCQn2ARqkMHVYjfQQqki1mXbwHRZyP5WJfFu2u2pZ3JjaUfHMz6NNJpVRAWZen7g",
  "key17": "4PR8YSSoeNFcsY69HP24nZvGDKrebGcagRC7SoHjEmt6Q8pLra6SxKgcCbHbbF57BFd74YPVDis5qwd8Eo3cC32q",
  "key18": "3RzaJxrTCMCkYFDBncaWs2D8kCJymKhYDd2Udndcth3n74r1NpPS1c6qs11KmQihCsXznb3cwXJn8K2dNPvbnCzP",
  "key19": "3bhgPuoJkV5e4MmZuyLXno8ky4VDN9n4HyvLpmMD1GX3WWSpDs2qZEMwaMWqV8FyVz1f2iMbxxCfgPn9mVtmTC6r",
  "key20": "4iZLiMYw82DRt6smosUzeSgMewHJhddSgDYpwBpuFqr7NoZGpLPVRSi7QKoJsJExv9SojnLecTHe9gF2p8T5ZVGe",
  "key21": "hMPcncsx8mtveJTc5kCUiWxAdwgYGDCSkFT5yGUWAkLKrjjj9hdhTKAnyYqq9e9pFUi9fP5ZeocpfGvofgDgdTc",
  "key22": "5coRmXcP357f4cwFCRR57hUxXcJGrb6VASNp14ZyLUu4i8qDbw4ssVjHKDUVZSisaQgm6PQYY1bAqrVTFgAn1edC",
  "key23": "4vqT7MSiwpM3EQgd33zxn5Wqv9kNQWn5Dgr7tHS3ib89PYcCBQbwCDeQRjhrSfs19YsABCC4xjrqBmWurQyHXPaE",
  "key24": "3YXnhbZVgec9h4cddHoqskJFAoJeeEgbHgVfRRD6ZnLdKGArHYkvySzBJJknSLchYXQGso7ZjKhaSkm8LZCRmhKE",
  "key25": "5YdLw3J94nT3a4rKCaU8N2JmTxv4soo7r8FfotwXFQVBJRHFSzmC36oRLt1LYpxAXF9MQqsNtfn47PvDENnhg2Di",
  "key26": "54YafFFfnFUpKZWvxQBSZp2oZB4CG4UN45A9Pg4P2Zr9oq9MdgycfoXBUHgQybee2GeU6xP4QGPz7o3NARztqGBN",
  "key27": "36ob3SjdNLoWbrXBEFQk7bn96fmP9dNVWYBQDhQN7zDTtAnwbRn3956qYyfznNr3D5nzz73L7ssdHMPk2v9m2Egw",
  "key28": "2tdn2DHdnJViYbkRt5qdxrFztrsJJEMVCLUxGwDzzQSJv35TqFFQc3ZwWZJRckLZWY6GM9Jqf5TMA1gimxxs6d91",
  "key29": "5EEpHus6Fh8CohgswckWbqNiRAXwqLue4AiwE4WKb3UCVY4bUBtptt7UxyyU8gm71ygcasGnUf1RpVRoGRyeWGa9",
  "key30": "2jU5hnAEd8p1vtTd7SFRv8vVrndoyDnerVc9xnQhhrLuoeTFt6WWhF9GrPh7Vu7866zDKfa5S2bCLf8T8pNRE7w",
  "key31": "5BqkGyDLcfKN2GvicGpRgA45xRNSDcCngbPFPcbT5wNt6H3Yg5fr8fjmjxKZcTxSreeWgTJLVYcVgpemsRHHL8u4",
  "key32": "2miEUd2z4dKShxX9xRvM3rC6yj4hfNvn3f4dxy1X8MaXk2WP1tMHnJcwoXBMxmHS1oSapG5jSks1Hs7uTjaaLopm",
  "key33": "3G7N1tqXJJafTAGJ4xVAjguA9uNZ9MF83AQ8oY4G15E4aPd9AfwCAuXZAmkb7A6JRTHq9hvbbEWuf4a8Qs4khRib"
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
