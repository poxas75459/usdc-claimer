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
    "RGdbS9UGGkoCTCPaTS6MqbZnAE6A88BWGxqUfcW6WmY2hiDEz6ZcMraTDquTEAUMeaD4dTzgtpJkDCXArhnUiE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JQUZmNYLUbmqifA65wgJ8SAC2Ry1kydDGtGEduowb8RX83XQFwgVdeCdkj8iZMKHqzde7s6wUn5YdfoRMufg2jP",
  "key1": "2hohcUHazjnNMGcjr4xzSqui5FBDUZ1qnCJA18MJVsAKKRC4Gz2DtcFD4Wagf4FXSuxPUvxYqrg6Y7bJMPnH7jZr",
  "key2": "3vbZv1u95GbSFNmnNkNBBjNDMdgUkzkMXh559SUAGV2ocvZ8uQaQMHnrQoq7otzPSW1VKoekZmhxNE2xYcL9uHjT",
  "key3": "iEpLTLU9wQjarFU5wdS6n3fkYnvXHQkSj94mGZGvbx3VMkAC9Cf1xbjJELbdW6JwYFL2JNNM3isPzgGMTZ7zRQJ",
  "key4": "5ZoX6CMMQUTd28VBQyJGAqZLGAxpXd236qRTVMqV3FL2ByLqEG9bbGHUXBESDfCyRHKCci7Kyp3FbECnL3Xohawx",
  "key5": "44zrqVwHoUMnyLVEMrkZAWHGQ3LzLsHQqkzWxwnWf7jUC4Bap8erUTkpNEB3k3rmnoXwgw1wYRSUq3KDdgHQVQXY",
  "key6": "3PMUWY1W8g9TBhv5th36qXaT9X8WDGbXWSBJua3zb75HFwmSWi4DSDUduJgdWq7R3gfrvDjmHXhpzBFaThQX54uF",
  "key7": "4N7Thph4EKvzK28KbQs8ZLGDcqHC4crSrWQWzCAJSJYNCdtfRrobLSymVYAcfLJSEHbWBHXjMaRtRy7U2aBSJQqh",
  "key8": "2fW2xhaYFzGae2DSmCgAMbzEzKcLKxQSe5UNPKLuSVy8RFvj1NsYzWHDdi6KMvdGYX2vrFRqrP3SzHdbYhqxvx84",
  "key9": "4BPjbNkPD7ZdWWHqhn731JwAWo7nhdRiE3WHocrzzU2knme8THEzrP66m1jfi6V5SVrk94enDPqvpeqjYKxDghai",
  "key10": "2Ac5zv2ezk6bKSkF7Lpm5fu8FVc61AWFJ6pHMDnvmYk5J7bmrvGS6Q5a2ZSv8qYhBKYLEXoTwux8iMYp5ZRbg6w1",
  "key11": "muTySa1gbWMiH5J8hRX853XaG8VTKuJoxcaEkBGmFPqi7PM44VJMPCcGmpDzjFeZLDZaV7MQdQDAhLPJQCExRST",
  "key12": "3jgwpMdrYjhMoBXiJ1Y3YDafoyEBK7d1b1zJSbBkkjXBy4yyJiZWVHnDmyzJmkUM8Sz3CqENwd3mU7AUU14sYud9",
  "key13": "4C9iJqX4NLJQQvZBbiEChjFNF8s4tG7wLGDfXnvJ9nVFcFw4hwYMTWssCG9bHsEmVrVXdZk5ucBvev6UjoTwGwmR",
  "key14": "65cCHzhrjUsDTiYhZ3XdYHNCKhixrFHEZhr9E9TD3w6zi5Kyikuiv89LsHVPPKtQxSipivpJq8jFTjqBHz7cLd97",
  "key15": "67ismnMqarWKSvdxgU1kLPa79Cb7SYzu8pu6WFmbqPU4HTBQXuNNxXbmjd5e6niLYKryKfURCD9hnVCs3WcPFt3P",
  "key16": "4NJ3QcooXRK6LVmrZ7nc5nfmcsnBjx1j7DYAF7WcEawgxcP7FqARt8m4gtnvJDWBMUmsFAzrK8oaRfrTBFYEVeh9",
  "key17": "4PopahLYaCQwYa7ChVsQy573g9GzvW1niC86C2eULhAFuLUPxbNqgrcWvxZqv72vgj6HNfBf4aeLx9TphPabEyEV",
  "key18": "3UsZNGrXZpBNbMY73acVmC7Srp4JZ7WSFbhzwrN5kVe2pYgk1mXs5b59svoNUN8kNG3LRazPcSXtTAMA4ivNu73B",
  "key19": "3cbQiwm2gAkj8eyMRaqR2a478QLEKgShKJzyY2aq2jtx9t9VX7694JjJNboHJ29iqTQQX928YanTJsorgz5HDatQ",
  "key20": "4TMCwhUrv6s2jq5kU7hrAAEzLHhwT1zRbM77pu2c6ksi9NyNKCouzm1S2GVvFyipom3SsmY12gf3Ykzvoide15AQ",
  "key21": "64ng88mwdsNAqbBCZ5ANskgKQov1pJsxjqTV3qGAXV6YiZThGHSdPGmYF9pSx4f4j4PC8ZyniLKTXxD4efCmcFKx",
  "key22": "G8dLtPP1AQrhmxDoK2dPNqjY8qnuGYagZWpHAWXGhc8nFZ9nTspLN8cJM2oXKcuqvBWKefNBwkyKjZ3yjfjrxs1",
  "key23": "4JgPqZJZG8UZqTRSFjyQTdNE3u3td2726cFH6bET7bAkEafwynJqQ7riLHUN9HJRfm2RgYsPJvjPEKz4jSLceBBC",
  "key24": "65a4sdnt5i2LMSPo1xLvdPU5XyDFyA79PHyJXaVPPA8Vh3GtZDE5CQ5fsQWgibGoG656MY45PzQkLMx7ZwEkm6uS",
  "key25": "2pSpU71ukBYLMmR5znDiN2PhdMxu5VnaqoRvocrQTxJ942NDp9dXaZTECrwz1iwUgZEmq7c566dm2SpiSZwppxXJ",
  "key26": "2JmcHvWd2kdkng1vERfpkTqabLcmG8VeukQLWd8WcM9MjPrrt4izqerJeHzkxej61ENSB6RACvzcXdDUoLVhCsbc",
  "key27": "5NpNXBiuyHqZFvqqgCuQ7JihqF7wrQzifLDcXXjvSrx9caZjCLXxY3EUT3HQEywxpCrruQVXDhWZ5JGsGdh6nBKV",
  "key28": "3aQ2HgHJFqDfzPJtzepgkyBqhT6y76mYhJLNHQHsaYFFjZLzGPQreD7Uckqjq4Zk54qBkA4i21zKxbA6brUrt3Nz"
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
