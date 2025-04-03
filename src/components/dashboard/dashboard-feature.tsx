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
    "VdGXs5x8hiQZyN3f9VQPdsMEBXiLr6AUVJLTD2FyaLyAXi3gmh4Z8Sinn1oy28D8m3DTmLVjsUSHW22C7VPGeim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G7Nt4KZhhY15ZP3hBzKMmzgrhDJGFnLW9S4VJ3MY11GvV4Vkmnp6igZhSvnBUafJSeMAFKBdxDGw2RQw4MwSQDH",
  "key1": "R1zPae17fPNvyLSJ2gRL8n3um7cFXTaHyQPpayvosJaM3PSbKwe1oXrhEXeAGhkTzzvD1tSnb9jR4wypT9aLRBU",
  "key2": "5D8iHoPG6XAm8ETampDAjnjbENJdHKqsopvALcTZTcbTMFqYq2zajcEhu2kap2qh9HzC6w2VEcAacCFWcyMjwqbK",
  "key3": "4tezo7UW6EPhJAFD9XAC6T9zhuVdZ62js87jQFXo2A1n2usTuqRXxkCNE3swmdz3rFyZ4UU182Re5g7PWwynRojD",
  "key4": "2ewKsB3MCeDNQwd751BhNNCHBE5U8KaxR2ZLkUmqvUeRhH4qLLBbXqBWLVmNwA69JwZw2drojkoQgmRULaiBVWfA",
  "key5": "jRhrLmdkemhLkuUjNu8y75hvqV5Er3gcmC8dj1AVQBFtL3KEKX45ePvQYYniLnsdZgGTN7DZCpWvrCoH35LQMrN",
  "key6": "4gAFAbG1Uype25Qcx5C1HHxkbxK3JQWcwBpkMBWeVusfZiYExgWNPGq5muXiRhQbWJwxiUkTJ7cXRo9k7o7CR2gB",
  "key7": "3YNPuG4dzM56Px5xHqwRNLRsYrGciTf8gfMGA1Ma11WmvgoixSkgkP2Fd5avSs3BJVTiYi77FJnhVgzMYNYQ4ZGZ",
  "key8": "4kEaKR1hRsAUdKJB9Vtwky14YnMuszpeoc6WUvCGTkXYiXwMfoWj4AuZLrBRyp2NB3BxRnLAaw3GJbanEtmw8r96",
  "key9": "5YkBYPXrvC8w9gynE7F9JsYkRhkGxpKHj4wFUjqUtwjP6p7pRGZ1w2ockv7bzb6SgcxwqkuHiKQ56iqRAWmUGv3h",
  "key10": "omeiFRBD3kc7zryMf5rWcejfwK3DUaKN2SfGDCyc6VZ6DyycH4WTWc5xi5xYxFu9m9Yjjy52mPFVf4w4Aw3m3dD",
  "key11": "3pe32xrtzuJpsLFmBhLGvrS1cn7JNTTmjj24JouELU3sUEQ8fTsc42FFAxjoWQfvCdwSCH91rFrTzbbRL4mBwcCd",
  "key12": "2z8fo1yJvmLvb1VA3hrUmnBZG3VBXWDPKbiSzfrV8WByXXXDuDN9i2NREW7mGNoyj5hVy1tgBu42heHU8JejDqkC",
  "key13": "4sp2wgpi7r3urY97P6suVWkQnrQKPjhyrEbjfYmk7Y4Fcwjm1aUSSG1kDf2faX6mvGQryigZfqBdrzgsq5jNFFzX",
  "key14": "5Jp34r2uGsdQPNsaqKdeGx9offPZbxk3pHjDDyxZXdZ5BU3Yffvhzcdd8fjZfz5DgofG676aeXdwqdaY9uHjrt8v",
  "key15": "5xeoHK69jEwD1C5MHEcG2wvmGT4GSYJUGUhq82FLPXuBUwnG6843s6asAxFA9B6iZUgvYMvp9f26aGNERedjF8fk",
  "key16": "42XRt4qS3CsM4ESmjn4ZKhyhxiRyv6nf9bRxHzkoUwfzxT5TMVbUXWNvLanKpUJc2thuhNMg36UJYYvXSRUBr1Y4",
  "key17": "dP2EASGgzxtRp7D8sKogYMRC7kJ3MsQb6M68Ly5cGwUwTTqerQgZU67X3EhEUrsfQbzaXnmw3mwfeWQ4WMXHLzX",
  "key18": "4o4WC1vS79ZLg6Wztxz8VgNymogoSDEyMT4vCqJCgjqXi2kRgM2bF85ReKdwQVJgnprEFUhJhHdsLXAB8jfsL2pf",
  "key19": "3GfBPXh1eKPf38ALgpAiW6iL7VoRDn3XJRQ7XzA6BAFzfBC6k1py3M8rMNNH17orVqyR4noKNvqA3cgNV987sLSN",
  "key20": "5UGhwfPEHCbEHLvjFfiDjfNd46dsUhJndjJigPZJmi4dyifBJf9srrQ9hUziHswzyyMgNCHe1mbky7EuuWgMqXJ8",
  "key21": "5Enfd9LV5LZzZd3fZuwqYP75oF8MQNv8WN41JvxBBWNMKUqbmwjErDR5LYamPyQFiNj12qTTFtJBdyrQBCLokxmK",
  "key22": "4sW3VvXazx11ZLgX73hSJtjqM5SwAPbkeMdAfSn4GVM9yFg6ZivCr58KonFmYnGvxUkzy789rC5dioGghUYQuHw5",
  "key23": "5tvcXtW7P92ZoqGrTNmbsU9suxWRehWN1P394Pk56UQeXgGqpWFH2WDfPxDqtZCCMr3Vj7QcmRKTMNHjmzRRj42P",
  "key24": "4vFSUh5Lzp2mir5Tfb1phoEicyrZTGacMMLLw9rzgrF8AWYyV7JsusPTLWM1RN4jqVXVd6asLEMBRLGrj1pNvmzK",
  "key25": "3s1WtsA1TELs977fYwvC6zERpnE8d2zw8GaV4aV67awJV624VUkj2i17eYmunxzE5kRSnePouYEtJhtjbgjz7rK2",
  "key26": "4UxZCqDHrMYXZg1GiUD927htxzHMwMP9dgnSgZP6BtL8Zmvm9hH7Cx3Wo232NTFux3QQZANoEsNHucKexg1Zu7d1",
  "key27": "4VUnZbr3P2ioi6h363s38xTMioeA4RuHvf7niQvkAEWCCBB8pdz3H6MTf6Ya3z86wHmQ5dSzCGnBx5fMVdDs7b1t",
  "key28": "Jr3bt8tFr35KJRFUyRjX14HbC1kmqZJ3ectGgdBXpLM79rm38LpUdL23S3CcqyN1e8c81pBt7z8uxgMShoUsySm",
  "key29": "45TQ8cCj6x3ZsE6QBLSSZMgc6pUyaX4B55YNSjjskqYPvr2tBQfDM8FtYGQojpYa9vHoHKxjZcEQqnB3kDkdzK7s",
  "key30": "5xPA8ef3MRYLL64RDioZ8H7jsBzXDoVi9tkUzTrEs6g8xpymm9pEhBcd1rDPn8d413LN3YaKPpRdrU5EqxyFGwK7",
  "key31": "28DDX1UvSdjHZTyBXaqJ6nY7PdMFgfvSETAMWwSQub8cwUri3X5LTTyQiGZcHbALxGTaVBHFvvHvqTbNZmVQG6Ew",
  "key32": "5yta4KTeXNgTKV1xizf9pH7m6CPtqZ6Dmh5syyhv6DVi2U1R7k4iaCv2vnnG15oas86syc1Jt8aEuE4jExnY2B1c",
  "key33": "2XrhTBCrDwqrCJ7AC5Kz6k9EnSkf2mC3945Krio6F29B35eBFaHmmbmojPzxo1c3Dd2giNfCihW9SKd5m3D6gys2",
  "key34": "2PrymZ6YxdQuPRjZpasGyUuyAybJ9EQ4fT3fpaWmPLwcusRfPohzrbt5JFFfY6D1nyijKN7S3hwnAnksodYctfJd",
  "key35": "3pcNreQq3JCLxu52YHZvLBkgNH1iyupWe4kvPKAJa65r8ZhQMHR4Puo1hB1uV2EV7EDWHCsPq4RdhNJbZcTHuD6R"
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
