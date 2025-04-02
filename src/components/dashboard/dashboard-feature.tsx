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
    "2Pg57bUUTbV7eRWghzvT265L31SJaoFim8a8f8DsXduQL6XVhXLgcbQRdygJ886aWercJ2nS4JNp67cTCqJzoYb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mdh5xURTL6eqF4jjPXN2V7DCNxbwWN7EX6JhXkgiMDwe5ZL3HaPB5BE3nggecN7BZHY5yKctHkjTgSPH2KGDeGX",
  "key1": "4hgAS51Mh9jKfwRg6c3r9JVKurMTjKERDQQf4tccTXwz4Nff7PCJYeWN8vK8EVNcPZU46yNGaKxeYNYxMd5WZ5uM",
  "key2": "2ne7pEZXj7NxMLrNQJaivKHmWDtVQH8c4scyysCXtm8EWozRz16JcxMrEg42s4sHNHa3iTZNMihCdHP7Y2YEn6G3",
  "key3": "4ycovfQXNw1oYWi2ke7cxXrDWRMzx7Hz461Qk4WdTzUPDbncKtr973CjWyV7ih3ZZeN4pP3vuTRSNh3K9q1NqMmT",
  "key4": "3hrTjHGf29CQANJZfMhrXxvPzjAh8qYd2AX2chgmbBTFP3bSH2v8o1WiwGwKibVLtkq9vELxMBrC8rerobzSXrnN",
  "key5": "5jwqiTa43U8df5GH9aT4U3LxC6TGpcLKMjFqhZybjwV2VFPhWP7JYxrjd8gXMfxJM9h1pg7keb2xVqY2F6PAzKnt",
  "key6": "ELdsGbG5WDnin7V8BpKFBAnm5kkzPGHQ1Tr5CADturaZo3UESBKJFHYi8AeL9z8LXbHj15evbdtK2ZDnhLpz31G",
  "key7": "5Us1n75JM7DXJ7L9jGKkVSe6iAK21MjPydzu2v5HJ1RWe4K4MEd8yfNuhWt936fiwb79Z4w959cksU8nhpwMGLEo",
  "key8": "4Rpgc7f9oBnzMDdc6HZ5yBPV9DTpk8ruNSvXcPh6uFxJssAx3ehpS2X4nZWE8rC3sESrisQTfYcUzb8t7EPuqgxA",
  "key9": "32JtycM78pySBVxARuyANTV2aRn4XdgSzWE5y1hz1K36zaYS4QHgAAKqUX5SGxwWUUNetjLH4SJsdYD87j97iSys",
  "key10": "YTKyPzRoqZcwduiyChG1Sa5SX6eY59hRGpFruLggVhYKjxYu3FFVuGdJ3QjTvAqrqzXp7TdLi1vtWyZbCYJKbmE",
  "key11": "2MybSXexbAmQcegy9uxLJWj5KamN5Nu47fmHSE3Gkh91xExfQf391XVH5gngJzjkowSRdswSDUSYqTmfEZax7Nki",
  "key12": "3haC9vi9oKMAiUX4ZtLtgEmWuoWFL1f5ae96ogqxChXnpmLvjDhi226BVANwLiE4HvPy86x1qYXoSqRZES96dxP1",
  "key13": "3pTneeX6uV81u1bbW2fwZLrK5AUr1crhr6Cpu3bCHMrfAMXDC1C3XSbRZHdspUr64RGHSa2Qv6dLbyBwK3d14Jos",
  "key14": "3xXKxXwfWBRTDNV8J6yQWtXxpRAooMovwEnEkVmGwnqvS48TkK1nVjhE7nyi5GnH2TpFhHP77a6q9rXD712r5c5c",
  "key15": "23bGmFtYPGgkVLSLvjoK7LKUDT9tWxZbzyk16zSzLDWiisLWskkYHyPNT2VMnj3XcE41paUjYhLnRpAsyYzwLw6W",
  "key16": "4ffjUUQywAsERvdZmMDuJ2HmD9WBuwN95CZzzSWWaxWN5f2RQbwQNo3YaD8RKeaB7sMQDvhZzUYnzXRdZ7VP1WWj",
  "key17": "bwTzShFt9uqbWzSZwavrNn8PPbU2B5ppmtus5XNugPfFZQtphwqKy6dRcR1WqmvZrkmouyn4cgExrALSa12pEQr",
  "key18": "fRAyLpJdJQ4Wif5RQJ8qDoRyn5f93fXLc8zqtcJRrqpmksYa1CciQ9zYKwER81Lj8nKxQRsKPtc6V9obxL9XjDs",
  "key19": "5KVguY7WHJcmxSJhY1nqLk7378rpEQftG3mqYHMQ5KQkc37FQQfv73Sea78jFrdhKcnkXAedRMrWLwSQPP85odbs",
  "key20": "URLNPS27kjP4DVQpCxApJfPosyAZivsHMVPhNthy2mFYdEWvGPM2crt73bieryxMZaSRvrstZAsn8uNDcC1DCD9",
  "key21": "4v1Tt1tUpqrxFgvnCjVaLaw7VUzS5tjbHoRze6TK3kXGGgfrvErmSuVQ4WzvuWe1ekHvLD9ohiXeDaZLhMCj6bRY",
  "key22": "4Jco5pY7StQoJonj1nQ6yDiRZ2BDHFNv5qAsyrsJQUK4qvBHA9cejHr6ujXB57GV8SLH1ro5JuV9TFijV3vQ5oje",
  "key23": "266mJxu8BAP9ApNop6dnfkM17oaJCS6NBh3f6DnMUfKgrVVBCkhMqApcEp4vhnrwTYAndZGnfXEiqPkCA5xFBbpg",
  "key24": "2ooikzHDySmt9ALwpgaw6At4ifLX3erZwAdQV4yfTHZeNPyKXY6w6A2aMEJo4TB3uNBDJnMMngYmzpTmV8wAZ3rC",
  "key25": "5FrpUVUaGSsHiZawnKjya67kYNtZzSzwuCprtsnRbDmsXYHVARqQX4HD9RLDSSChzdAdr1MhCAVoQopHEev3qHjw",
  "key26": "2S2uNTAh8iBP4JQBQW41nYWtXrKTLvs5cZmJdfRD4UWfKamthbFC7L7SycSovjFFdzCN9BE584FFGE3zdy4qV5A2",
  "key27": "4veUDDyW3j3KBJKzdV6bmx5p6JsybzEajsShB4TyAewdx9132iz1bMHmKrLr3s49M8X6TaSz39ypojeziDXUbDmE",
  "key28": "4SpNVyE6L1zsWLqVvSx1JEEen85j9RCTypnTWYSS7Vs6iJsZoU5Yg8HoNzX5HX6SeJSXhaNCKphTRaWDVHZV6oPN",
  "key29": "4uR6ELME3RiHeoxBehSiB4c9S2ZofC94rUiJJEqH4dfwuLqfm2fefEtxTEm19848Y1iHk4EWXLBLkdNDqbasN4pZ",
  "key30": "2SNdeWbzFSsz6ys1w9jSiPgN78xCo6M86n8abr1KAgURanEv5AEno3DDE7JLTnR5cxABRLBqJFcB8poCCJTcVeBC",
  "key31": "2vNscMFsx5rT5jAJoK5EGbcSrH8wkxYjConVAkP4FS2zt4Ziy293maRcrN5N5VbypeedNaKbEUvrhzBXDs85wcgJ",
  "key32": "23VM9hbt6reymt6U6hnwxsqQexqUjcCMJcdzvSJuatn815a5t9JMXRJN8XQcPnyutrtM6EGyhD3Y3dFt5UsfGprb",
  "key33": "5P3bRZsg8jSaFwtNJ4M1AbQJrPUqpqwyU8JNK51gW6T2PKfCDkr4PLk6MN6r9Py21EvWZvaswe1tbSsLdPNunqWh",
  "key34": "4bdQELC1TbagAxiTavdbA7V4WMwppWhgYTeFrvrYiNho68yETwnyj5qiYS4t1CXMoQ3Sy7fJqsu9Kw313xBrMjJn",
  "key35": "5xsMkKyg4MnW4wdcRpLmAYHPynJ2zgZNY32dTNdRyzCdzmZsYgCDXD2CB5uWziUNKecwomvNQMxxdxBPh335oZFo",
  "key36": "51v1qPdQLQaJVYKCUBrohdpgEfa2NTASqm1YwMfJp6ggec6ic3Su4Muqv21kWwmJcLgZtsiovZZtraw74htb3v1C",
  "key37": "4MEqv5RRJMime4nJY2C6BWKVjkBB8vJYm1ju4PNPAkjjByLi428wCTLcBaB3RFyCnrkCDra2PGb3bi9tnHex94xV",
  "key38": "5gsStNyL44Z3cnAb4UDbB236cMjS9YxeGWpPWwEgiEtfs3VhboYzkCevS1zC7eaGqJJuYZWsZDzmCVRGX3H6b9eR"
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
