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
    "3grmHjNJ9vjQT5okXFd9hND7t5APddfKg3QgMUcTkkp4rcvkZYJmcpu2XEu78tpgxiLJSC6AMNv2a4NuFA51Wy73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4z9Geuk9w8Ma1x8vKABvN14AmEKdS3U96p8zsDPRWxXDbbNKrv4bz3CVNDJTUGZju2pvbhewabDSrXzTyJhZkU",
  "key1": "SkyCSZ4rEGLLJZo42WzKmnbMCjV3GfKdZ1fYRjj1tecCiket5AWHZXx1BwDMgVe8SNUyAFpahmWrAKZ3na8uFQ4",
  "key2": "56hr4xYk2oyf9WrY5k7Xz5Zoi2n6sMZmUVvB6PUoewFa9dZSmVHnJNXLSF5Eg3n4Us3i5UNNeg249AxSwj9Ly93w",
  "key3": "5z1zbwL3VmB3Tkco5RDv6jrRBFyVfXAAarow8EqPm86YQBixtC4uYhLgtuEowj38QnzWv3xqyFYSZwxkjazVy6sJ",
  "key4": "qkZ5vDxivN6a3fougEfoCkchZSx8BrYTwsedEbNEK3vQQVnmCeS7EboS65JLRw7jXeFFV2qWHqykEkFM1RpXAU1",
  "key5": "hJa3Suq4Ugz2YfdgMga1E1XrfvsmZuBn1HaeGS52ghJt3oTMmEZq1AoxFroNKLqPwK4id2H7q27kstW9sKQ5Xgq",
  "key6": "xPkpkf2xGUktNHsbtMVr7jWMiVbguqC8aTZgwgPGSUsx9sGAHguZQECSDE1JU8evHKXhZfHqkUQcrRfmQ8eZ6n2",
  "key7": "56UBUzdAj6drYGkditrvzpv1KESU3s1GUYakDD8oJ7iFXStPDq7Cr26GDnKZi44FApffCGQqrKp7CZ9EhaMmuatq",
  "key8": "5SnPuCSHtYApWTrX4fowAfwmf5c1FSHp8hRmJ8aEbYzAJy5HV5qbe84mMrviVberFkNEw3NMe7FaG3XuyTFP2kfY",
  "key9": "47QNk1XCmoMJkrHx8t4RBNWNktrRzqQgGaHD8hLa7Zht4xbexGLuic3tHjLCqNAVJa8qnkSTS47egY6FHGrm27jG",
  "key10": "4gv6CVfpsgGKtmCBEfKFqZisactVZmGHiVBqzPKiun1MdYoQMDQi5RExnq9XJteq34yKAEZHxu9GDk9pmmsq5PK7",
  "key11": "3Ff6mrCuN5WWaDAgYUvqr3nWAS9NQ7zckJ4urV613G6UTMix2MdnqFZEDoo5i28CgieQhfXXVfNuqpkLHskaZKEy",
  "key12": "3cMf82zhCnfLK1ZuhAPQ3XBu26x5fV5LzLzNQoj74ADdKeRVgRRivJfmix2um7aGxU3qzSgpoWkJjjkgM8DSLFsJ",
  "key13": "pgoP3G6LCm4whweCZvJBqb3F8AuNaFxdCWPxRzKCLRg1eyC7RWJ4CcbwysGija7WgzB5dc2Y2M6yG3EPsojwaPZ",
  "key14": "3U5rUaAo5sKwcJrNLwgd19bAufRR7Lga55CcwzizF8GMHSi7u2ZNT1AB4UZdNBWPPkHpMBDWD3pS8NaQoMukTFrX",
  "key15": "2q9HEgboNKcYtfwErJ1bQaJ2uwXspEGqMfRZ9Jn7F58xdVr8ocTj9BPYngu3fWLdeNcmanJG5uSUzqex9KQuHKxN",
  "key16": "4bCLCjwhTwbyudW4pJD7b76uAk4Fe37KpuNSJZYFtC4kiyipRdE59RmURaWzTNCr3hefHb8NJ1BzCknTJ2VsXVEX",
  "key17": "5RuGyArBfoWHZWkr9CN6rGVBpeMxYqYqwW4JfT6vLjVEMtMFXmUdSb4JnYniTzsBvCTvN411HN768Z5zARMGoPPZ",
  "key18": "3swvdpMqyc9Ud9URRrtUu5EUiQnAYZjwRgpjRmvUCNSn64nsGCH1zoyz5DrHCXGiegMB6x3HTQCCRKTxtwm2fHhT",
  "key19": "5avJ31b97hLL1yzH8BWLYB1BxvpKnQUarwdAJu2TH28ZDEhEkhUNXs4jn1qcYJA1ZGfB1ZtYpd7mywRBi413nxcB",
  "key20": "5BiZmjoJhAvHJiYZYFECyCo9eboxvjVq1EPUSdXr2ELn5Cc851eNnCDNWYW3qKAzvGqGN6n6qie1wC1z5vSxPtzL",
  "key21": "4pB1mioCfb5pLRuuqxYpxZGKe4Jst1dJj8fG1M5jCe9ENWDnkL4rd36XsEuQivemXhXY1mNL434MRg5GqmCQA7rL",
  "key22": "3eMasZGV8jAiqqHBubjyCuRE6ir3XKp9P3oc8ShNhE3DHis844J6R2yrBAjtw8S9UePvGdEVf9U8dDYmBKTCd2YV",
  "key23": "54rx3jjB8v9v8h6ZsDM4yf13ShaANKHsCPYAyxd7ZWZ22YpvZwuiUvg32auWsGcJy5qMnqdJkCPDcghDtZV3ZwmA",
  "key24": "5taAckzqRzwRrx6MQq9DhLSU9f6YLW2db7JduuRJZUuhCsJvwCiF8Ab6JNf9dxZgXaymsJ3HCBNgoVDD2C27di6g",
  "key25": "4c5socLQMjBQEXSqBMNMNnnPgy5T9PsUPdKpgXxwop3mRA1v39rGK2mudrSBUZBEgTtcroRdoEsaK5aswY7o7YeV",
  "key26": "2n8W3pLGvEZNN1fqCEaEHXVLKh9Me69pE1jx1SryyfaMV5n31cRkcKVRZAUEz7CuuxgRxSG1Lw1c8brWFiaMuhJk",
  "key27": "4KGh3NpHghjbKGUBNQSAiGBfHUT2YnyfBSsCAEjmhggtffwcNNfee6bYWPE82JAYidXLGabiuvVN95W3o7n8c5yr",
  "key28": "3UXT4Ka1HJci12igoJqGyescDfNbC26S23iDPNZRWdsq9ezt7Viw4QroZu3CzwM8RxifbdGTcRc8yvsccyvsueMR"
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
