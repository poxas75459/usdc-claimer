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
    "5wjqxfzRNNh34nm52z4j1KdKDT4eNWRa8fVxmJjiJSYYTW3emyUbHy3ZTjR1z1ygiR4dKRezJzV5NtDfF6czRT1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jsa1Nvakgj3VLCWAnkqniCKvCD7rYB2PpjTx39GGeHevyZrX75pqhGCQQZTBkjq4iEeW5DvsZ17xiG8ich77GKG",
  "key1": "3A5JLwNSSkUMhC21QyK3FNMMDTwohipUeQD96LzUJLWcniXY9tLUPQD58Zqt4DYNdYbHnyRDkpZCogV6vL8V9pKr",
  "key2": "3cr4RhSkpBD9j6RwxZ4xB8vZSiPnxtq7LAdn6Q4rtgA7CxvPLNGN7tzQXC6cjXVZ8y9S1ZQJQuFfa2AEMcWauLh9",
  "key3": "58wXG4X6GJpmFs5jaRKAWSFQ9goJAT9hukxCXzroA5fdZY9NxNgrX3kKWZveANW2knszU6pjNLw8UYYgKSTqSEFu",
  "key4": "5EuMeywX6PGmMuwocCvubWXLHLAtM8CfDYtmADAPEY7ygW3rqEXngZeur4VGMxQDygBCFPdQ1ssXRpPEeFqU5S4u",
  "key5": "qJqN3SBD5XFbowgUdyXWcCvwbztTpLNPmg1owHfr9ekdSPcJsPiF7rf5bQ4AGAzTjfukM87s7EAgVYnVKhPf1Nk",
  "key6": "5WYEtnvmZporPFDnrcSJp5d5ayztj1xoezxA6LbiCooaZ6bW4wH7MYEK5T3B7TwW2wjHjzp65CtNgEBkEHZr9yRW",
  "key7": "PhggRoxBcVYodnyjjE8F3cg1DVwPWdqse4PnYeYa2b6hGX8bAUxojmxjuoAe9vdzMNsGRrHtaHsRQ1133XNwi5A",
  "key8": "2xgH7KJWrXbCetTMhFFuWntnWm4yYUWYufrxYuX2XjjKMZfKj1mjN4egLuCxUPnycnhSshmVYD9EbwseAY3GHvtF",
  "key9": "EweD1D5bDJp6DPTAXC5idnn3KdztTvRARdbsfddAQ1konR4jcmtwdTuKi5Lmd8udk6yHi5zNviLRp6YVgRP6Scb",
  "key10": "3dEdvmWRdKSsSi78z95219xsVDKqgLvYxgkCCm535cVntxrXZQBiVx3KfWbtbPBaxX86vLey2Azta1f2FeDN9Pae",
  "key11": "5wNRX6UrAfqSi9ufFuFyJj1JWzskSh7xKWGGUCD3xDa583BcjkcXrbB71zZQs6wisSqvc6fjzoVap8tmbKYjcRWq",
  "key12": "3B4Pg1kBRpnnHw1tPcwcm2PGWuP9q7RwHgmNUDeuzJGAwjRWLNAfYLmhLyGnQa6BmMwjZY4Gz9K4t2NEvXzxbxRp",
  "key13": "5k4qSCiMwu7ZaEh3kqASqVRCksJywmZZ8LAGZ7fcncoyYTRq97RWSjZ5WEtx4Rg7ziP7H9RUVUsv9yAoMXtL5DMg",
  "key14": "21k9y5sWYj8ooubWj6xfgTQG9ARQZrUYMwxi2Ehr641ySPp1oBpRHDQ12YdaWdATTUfHMLteemfSLgGU6aHEA6MD",
  "key15": "4DRsjMGwwpUahhsKps6gHiKMDiyVkY7vZmJYEFAB1DTt3sjG3FN1H8giheHGFhHtQucsGQbWdvTt3UuhNFGrc2Jc",
  "key16": "2UTahQvRvRbAbQzk6MB1CqM7KzKhF3GDWwy6Zyemnpv8Veb34UHQHPe8N34n3BPGJnNgBS2MtRMHn9ckEBbhaugE",
  "key17": "5rseUTTEtLs1rCUs6HwH4ngRzXnYnAXFdFrjHf7ZuLU8BhGofMb7zGw3f76YvSaXUwrfEyqFYDM1KHpGZCCR1fay",
  "key18": "4ESHXx7HeiYawZu66TZ3VUz1kJGWgK6m6s5LjLkG3Ynfk9yrd2cjv9jtb7nXX37JjyDHbSP2Vna77pkGDAkWFWRL",
  "key19": "4kkAYB17Zxe2ASsSxE1FpLxLuJeo2sR7TqpT5iYkwdadVRLukid92RQLxVkJ9QncW5NuYm313t9mRhsif5xqo9Qz",
  "key20": "2wDEffEuTNVa7xFfpX1zKGkhtPfgq7xPtdNte3getm3X6RpAHQX96MxstRWt9qpS1Rzf9szS6VKhiXMgd1AhbPbT",
  "key21": "38F5j4otMdyWRHQoy2FekJYMB4u2LzK2mT5B1pt5dBkt7R3r52pv7Su1RRHhipQYEBELTDnRsHWjmnGFJTyT3WkU",
  "key22": "21cZCX727ELknWGU9FCzKWrbKAJVLuH444TB84i6sUGEKfefgVv76uppCbkxi5Kmcq6uteBzeUTMbxdpuugBxryC",
  "key23": "5GDjqwRHzPiiBVtN9kPCdm6t16mwfdJNfBqEhWfCJvt9ukTQkYrM14ArSyG8i2XsLXBvSfk7NP1vsp15XHkyCaQh",
  "key24": "5bskQ84ChXLvtiHgTJYLDMYXc6JDfyLGroheieGbDQ9Pc93xVYhRsEDcWd3YHoe2anqfgfNrb7AfMohoxBbMMTLq",
  "key25": "2CMs27bqS5YscPQegzrGJER2eSCjz3X1r8ZE4innZx1A5YmReAsLvsfvyHE8jrwcoRRL4AFQtXweM1ssTU8o3CuU",
  "key26": "26KkrBYiHN7q7nSrt6JEYRBeDpBRVbxzyB8KzoV3gwhxvXGqmez2zCcxYytN4sDNLm8EdifXeswMADP3tBZFyrFJ",
  "key27": "4ZSniGPKKkmYEq7BeUt9xFB3PfUSbcBzZ2QQe4eogZzzhiPZLA6mptSxEPdUoNqZs4Ju9cCD3mwsiNygrDKFN7sg",
  "key28": "JcgdfhBkWu4fbqh98Ga7f5TspohJBFg8yvFmeQr1VZLzZBtVhQetyWkrhbGd3o22xczgzQTxiMa4jyNFZNzVf7B",
  "key29": "jZCr3YTmD2bm99uZftzmCG2v8QgJSPHxQeTcPzRHzzJsmJQ8WeY6nZuBpGuMvRZkPWvQA81ZQTer4N9YLRMZyQ3"
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
