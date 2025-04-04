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
    "2pH8ja3sXtTrPBmg5bW2Jx8TxV2fpeTEKtWjruwcho9VUhm2oD3HvNfmGduY7AiCRBab3KG1vQp9bSkpgYWEYJqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uH99WALTG1ZhuLDha8R4HSASjpWnNeJJJ3XDBGZmwYb8xUX6BkuXT31fp7aHdCLEKUcchEjUEeN8DhQfXnotUmL",
  "key1": "3eiH43R38wj2L5Ltn1pD8eU99BXgcYq7fbVB9jXYKXayru4e8X6VfDqbn2uxUwzc2k3onJ5gTzVrHW11rxTDbrSW",
  "key2": "5JA31ZmW2NZ9doj6JExCsN6wsMzVtxuf22xQJRSWGqLY5ZEbdJE9KGQLcgJ2f8vfgyjvQbcMugJ7x41hZJKhPV2c",
  "key3": "61BcFfGwAU2fMpnFHkyped3gUJLsEmrJb97DabsAWsZ1RZqwEyVMp3kra6wunyrdorLVKreWQyM13RAdTSuTX2sx",
  "key4": "12vXHZkewEBnY7EYnCHEsUcPmTSHofBrM9arQeqEVNTBAr1wKge9pmka7o5pjdHvsHKqqikWnuRHtN14tMb53Un",
  "key5": "4TTBqSp5A9T3F6hNJf5phHfZezsS6m33BEEHtQZSAJS3BsRAHjjg7THR2Xjy6GihpyJMV73vT6KbdwkJHnTV9CA8",
  "key6": "2hTmxgxgdaCa2Y4D6VLAs24bYi5GNCnkAVqEJBxqtvkv6bT5kjdLku3FxRSL1fQiqvPyf4JVeEnKKR5MpfUVXZDs",
  "key7": "4nTo85TWuB69uLJ2uCPU3v3WMoMwfY3yE93GT43SdzixSkhpi9SycFWaDYfiPUSAe7dkdrAwMRhWu4k1CzYKu5UW",
  "key8": "3kp2VajYVXxJhLVajDt6VERn7uTvUMWW8tQdMrZLz9x6FQfpNfwnY6YwzT1hi5fq47SbdLtBmAEZuwX6dykDt9dB",
  "key9": "tLLeu6TU5NNoSo3aw5yFFXS5NjKU6tD79KAyQY6A8BHtTJ4Wtd9oPYG4Wcc6Aw5mdbYk1RadTgBVDe2ajKpgvDS",
  "key10": "JWmcX7Y1AvstbGdapzuPcHqzBCJmUMJCJf2wQ3AQjhjU4Fbc244LHzegfsQQMse1NMHmuQXMEH41ysU2v1e3gVw",
  "key11": "4K5ZQYY1yyd57y77ir7ViSzWefG68MsuxcWb3UtUJPAx2uirgBDn9o4TyYD7o67zp9X4UHpvHBuh26Sd7CiTjrF",
  "key12": "4vPHWDyRY5kSuWAgyGW4Rco1eHN8fjULHeTtPZyt8uJh2bCWaoEX7KBV8TBGrP6YvKEkd139JRaxFsXQqSDoxWpc",
  "key13": "5BdPBFaPMZWXkTfKtscpfeeZsWY36zWwk9fg3Q8Rae9LxrKhzLby43QsrHHxnwPFxvurZ2BaG9Au7esmdCvoTMMh",
  "key14": "39qCwvYjepngjYNsPFZms56CdNndF6NXYmpe9rkQ8FQu6n6kYF3oQJWfCdyzyforSR1eMcAJdvWEK9Xds4d1u34U",
  "key15": "54dgPbzCiYVRu1VqJeYckni5rHmkMDWm1szfg1CugGY2yKXMw64gLopjJMQBmbJx8JcwLQj8Cz5pj5ubsEuXFcQ9",
  "key16": "3bew2RSYz1JRFhw81zvJunc4HmoAPpRA9y86akhV2irscSTPZ8V5Wm7A1wXS2eAuqP5G2kC585ji8kq7CdXUdb6B",
  "key17": "5XyZjLP8pFUxAT2fFcokqqTe2ZSNzp3HWEkuQqu5NPcewVGQBT2TkCUkg1Tt7JAxvZ7aDiwt8JK77Dekw1AnsGw6",
  "key18": "DjDGjk3YLQUvyGmKGrnADAAts6XY9zffKpetmMv7Qjimh3qHE68qrEoXi6zBymNft3oXsCV3SefFis1MhjrbrhX",
  "key19": "4bkwRZDieNULmro7iTzBWCG9pgQoGPJWvaZfzSCbLWnmZScJMrw8jxUt6SU9UuE8xyTVKyhmAEtdLXbkrB5Da8Mu",
  "key20": "2AwjsjMAWcfjMKB3U1ac9dhq4HEX4zR6d5QMfLYRK3GAiULjxA96digxT89W7vktYFmsJxBBXt4gQ2oSTsacEEww",
  "key21": "1ozEEAVFcpNdNN7JjSyFXL2Ph5J6zreMrjippRu2JtCFUEaDXvhqdeUpFopMdXYAczcuytB6v8Jpe2vBGXbada6",
  "key22": "23E3XpN7g6SNjPHKsnYfEgxT1UPjWP42ZBvu2L4KUo2uek6fu2WWypuvZ8dm9kPKGEN9bWM4UuWJUVAQYiJ4NYke",
  "key23": "hNnPVPsriLfgFrGpRFyjjv4wCqWuV7gL8Qx9tptxhzKo2LmpjXw9i4YfD5NjuzLBcRRHvkVGaPitAJuDnHtbhux",
  "key24": "4yHXWCtdze22qUeRrcrW1TgCi3Cu6z7A2uis4mc2X3eYiJSWjCkJEh7yBAsZeTihWKTX1pQqQKRkVnvSmZuSo6f4",
  "key25": "3n4KwB8VkCfMZHfXN912d6ufJTwzguBPCaLVnRHkpzDvffvSWhF8SdUEbwTdQSErQwR1yBK5gM18X6oZyysGbszz",
  "key26": "4mmwSg1ijfGRME3R2FBnYueUGiWwkDsuDkgXWTWbvvhFwqURzQE65MoNrao3DRyRhdAG3yFZeiLQNEWH8YCxLqBy"
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
