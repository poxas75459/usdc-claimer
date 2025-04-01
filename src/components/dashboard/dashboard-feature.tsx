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
    "24HmtwcxVHCQoaKoQsUGourqiKT1BpCto8v3X7WstzPHYGwbqhccV7gPiSVVm3AFqnEqtgksXX2ADnZzpzCb3VqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TTQsGJwPYVPu5q1CJuK8m7FhLLJABxkjsK8Cf5hE1Qa4ufjZFsgiPBCJTAjha1cA1JYgkqsFFzTyut3Edk2kDZp",
  "key1": "5ssT7JrbrcidvPqG1qSjW386GywwsppE3D1bQRfE4xXiCbYJdpTfq1pZph2FJe9xWBouLS2NV5n9QwMzuxANRFN3",
  "key2": "4ZgBmZ9wwfnYp4iu59g63ZCysrgg2ivLcsmmYQ4aTzbybe73qhEQX25xEVdxt3H8WKueM9tzC9HDhnYyZALBnpFL",
  "key3": "22hdEYyNh7pFbDJBkMx9pRfS3jSXb4HwFLquH6PW3qJFwKmV347uyXe9a2qgADMiL7eMcSSWhG9yqRboXCmkB37g",
  "key4": "eUKtNz8AYLqyEZ6y8b1JudWzvqe4SBWKz89oPaGKWw2muDPcPLgt5WP94gtJbBiZxzs1n1kYTZCmgAFeGMassJ1",
  "key5": "24PMjpbwfyGVa81n4Y9nBVu1WwtDLjRQvhKK31z59MJZa5RPgHGCwLULCiYY9LrNBaDKf7w7VoEAzKEcvQZLjkpn",
  "key6": "2TvEhfBKYFxkUfBZSJxYUaPax5zLe7uBsGCGgjAWKmy97P1pMmDq7PPq61pzRMWetdkbE8TzP8EWVpfJLAU6ZQDC",
  "key7": "5HEzC9spenKGuynCR8dQtCmHKEvDPgxyNYvWwHbVNFHeCCCoFESuxwmonN49mMtfhwG78w3QEB6BwRAvngn9d1Bp",
  "key8": "2Ldr3UaKNNeERRGgLWixszHdefXNQ4b6Y4qHwa1uNmGdkVfYtMTC1UX9xqRAW3TgWFJZjv71zLdvTTRmy56pCwJi",
  "key9": "4wX6jdH4tSZ2tr81N68u3SEUfjV7NxCnUA4dYPa2ANP9n19ZvDfBhVkhjm1vpSa2BUMvQuw8Bb48LJfkQaJbg9p9",
  "key10": "4JXgNaZzMMi6u3FNjSi1dgYxvr8BWHPH6ec7ArfyU9JjRr449WBqXmFnuvzd4zWxyxYrULgEkBKwrK68ZUw4i5xJ",
  "key11": "NPJr2ZFgtgk97GsU4Q7EsfPaFBb9cXZHwLFp6AKgVSrGNVbmNfQtDqNRh6e5LHDw9gPa2VVmEXkcpVjQkGGYPtP",
  "key12": "g1SonoAJFZ1ZpNgbmmj8BQfh52od1mn4A1LdXyYA8hTaa2DxJ7b99gAyqNEovqHmL7FcpbG1Amn7ZYp76RHn2Fg",
  "key13": "46oJjnMzW8txGbBSLCR85NErd7LoxLM5LZJEvUvJte1bLV7nnqtsTw2pzqJ1a9SaiFv2kJk8woreMyLW9TzDAKQT",
  "key14": "3XoqYLkhTGWF3V3Bxr7KEQdK5xQSnMQ3zPFUPzrzsZ2iSvCqKJqJzU2bynVvs3sxCdKBSWBK5XW1mqUontLy5zRx",
  "key15": "5jMo4uLiTUZmKarm1hNiQTstWadP5SmZnZuFSD9wDogViWRsbYz1276RL9JEY45ncC16gKp4RbV3FuiikGDeJ1Yf",
  "key16": "5vns5ra5HjqDcm9btVWdkGZWz5X3k5ot34tsEQfQkyWEZ4SvB1HyEDukGFqGSe7dL4MxcLwEbPSD7x5LP1kvvuar",
  "key17": "2EJEH5Tyx9N8qrfT3wPVFJnwztkY6Udt8gwXQoTWaE2PruYjuR7i82XXubj3njdhZ51S1UiRn7ch3UzZWNSDDcQJ",
  "key18": "35bm47AQb9jgvyKF1RVrAz4fGuYCSsnDSzNxQ3cNFLziQKRPdKHG3L9X4QX7UiBhYERHxREbi4jV9SZFaijJJt6o",
  "key19": "3CuXPkP5Tfeps2g7dWCitkDkkFJvayvU8USQYYiSckrM34GUF7gsH1yKbzH9y2bi6qJNVoJ6Mn9FiuLkachof96p",
  "key20": "4j84CYqTgDkSmtzYBpC553eTTWxPuQnkN9FfPaGPG9mzWaVob4idXbZmmuJJmDdm3PimdwDcTzWQKdkedb1ELNsQ",
  "key21": "3Tt7hQh3BF9YfLxut3iYNbnVx1d3bgF5DF6FeVtAdYhPVkFqeJpm8kFxsyU9cYPrYQqshfDhmEMYC9cToub2cuje",
  "key22": "32gtNp1iDA9F3ru5wPdp3mugaEdWocg92hH46YZh5GhMhd6KwzxwUNLyjUQSgSCsuawRDB7prE2ZyhARYpMBZw4K",
  "key23": "2MNLvsDV5FQ9fnSexPPrsBNue6DDvwvJgKiqxwn7Dnr2kUbPZg2hk9zFBE5JN8mAnVW471VW5mUQUHtUT1KUU8fZ",
  "key24": "4whbHBzuuzKKeVfeXZ8m4tuhxNkUWBPpHPW5XrDD4o6McHEf9LFRzwQTifozQvujW9zqUmdxyLC8JNi9Mgn77XFp",
  "key25": "dJzfHp6XM5uskvQBgFJpDcLz4kZGMJNWrgfkeU9FfXqxhsn3aYvsQaxBMBXf9GooXFtqmubJzw19kZPtF5CB4HH",
  "key26": "24YSVGdmNitsc9dKdmgqwCJrgJx5imn3YLnfTrRxMwLFBy8h3ixmev78z4Li7VWJVFmL4MGGVrp5LjxwUasczC3f",
  "key27": "5y1bqWPRhSsgo7UHMfkthJ3uQ74vZoaDNN5FTDUePKxqLwoN266vmYjkaxSQNRTD4PuNFHF1pN2rMFQJnDemZBFA",
  "key28": "2ZRsVmKW8mUmP6xs4sTp17YAPoL9YLE4MqXWC9ZNAnjYqdpc7DX1Y4MSQwkCXMkoKNdftczMheVY56bF4nDos3dA",
  "key29": "gFPhYrxyjTpuxwVgQXWfeQWe7jXEQWAhFp9JkU5qCiKXkPkizgeCNopzWhdBNbq6hKzVuP5MniJQkVsCdkmA3o7",
  "key30": "2eYkYhkerdq6VpW4pHy91SmtUHqzM5jaxnEVeg9o7rQvrzUXAN5rbFj4f28gsLf8cBSf91PAUjf3LAkoKuvrzbNX",
  "key31": "2aEziesZca6mc5Z7NL5TMRYrWLRa4o9Y4XfiE5HwaV88v9cVbWBiDURJ31Bt35ZBS4RFRJszt2XwpgF9JFDfNhkk",
  "key32": "yh7tbKvJ5iX88zReB6xb72ZR3wBc1p5L8LvYTVCAop5ixZGr6tfCzEqNNjWnfBouobs9kL9fETYP8xZoGibsWWW",
  "key33": "48sAcoEt7ozR5PR4StGfpgKc8auecoMNkK8Rsv5usa9UARx6YoDS3efSxxZ1mbcBfemEfSF1JTHVGABuhLGXBzGf",
  "key34": "8Ta9Df6jzabNsVhKk7RYMBnFioacVxL2V5kDfr3Ayio4dNtKoW1tehmychBpMRgBfJSWcgqLn1RzCUwg5fM88dk"
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
