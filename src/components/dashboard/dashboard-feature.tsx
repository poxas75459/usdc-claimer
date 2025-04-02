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
    "5rJRwAEnEDFqBBkBNoA3Ju3KfSAWVDBP7atKLXL6T8nywLL6SNBkUQyJWFCgJvfKnHN8pNWQA8sd22fffWJafbZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3on746Ygc62ZLUrSseQ4MqZKVpUFAcNvt99W3dwhv4quxDTXsJqoccq1PVTotdy7wEweL2pdNAjRoWCysfjmGs8n",
  "key1": "3twim3Z26dkCRrPspqfYrH1b2PEgxsGjwaeHzfeQCdNjgfFoGSAP276FhZs9HZqexfa6fcaZb1jDvpDMt6A57pQz",
  "key2": "4b7vEJytLxmxw9h3jBGmw7ooFUqGrfDpZRpxVYLMsgPvEGVd6xQH7gXg5MG2ySdcwfiKR1Kox3CT9y3H4bVWwMW1",
  "key3": "2k6BWS8CQDApTw7868DiXCr5cDeZXFRMgLgSywiGEfwB6NKZkZsCLEtU3iyWLziwVaoqMcjXCymzBf7q1P6qoSQ",
  "key4": "4vWqbowH1HmqpyJ2HX6fNetUzN9mDP2aWjCozVrkMsk494mutcfCaEBYM2xG7iiA8aY2Q7F3fTMJLJK6CS2gNFB9",
  "key5": "5SznS5LRsgB1Wq4rPf5HdnTesTWL5WLSAeCkneWagSjPhJzzoJZABvK3Ws55fAcwLcq5bU2cSWfqXMLAxYS9auYt",
  "key6": "4YXhvWydn26t5iE83LQBoGBkLRvmHGEUSeMTcEEY6HvzMvB6aMRVduGtWX5cJuEGut6G4GQz17Nw9jc4FzJGbTAL",
  "key7": "3QxbzsaANrmLsBnixiyXn48RJYYLPbRatbXWu3ughPyQuWCXp3UMn51ALYWqYE2zvnw7vR7ed9JgWCtXD7aFKc4Q",
  "key8": "rurayX5XooZtJdcagjFcxGHq2uHkmV8u3m5xPEsS13eR7GFzZ4XyFdKbgmgjZA8HLh2EK6mPtdenKAonBxDWD4N",
  "key9": "2VhyTSxW62fdbnZZM2Gnxt6qcRnjCH141xFcWLPp8rcZiqr3yttu3VQd6Di2gdk8PWGVBCTj9Mo2ft2mNKRcxqfV",
  "key10": "2rosjRDnZiDvnximyKcDMHgaMEzmSoWinVtrCDUVJ6zeczTN7H3Jns7qPJRQN1uxc1arVdxgi1KibVbkKhUEDxCo",
  "key11": "m75kBvqitr1PMSogqZX8CebputPrfXkheK8Zvfkrv2cEwoLnmemizGbDWCukmon3AwkQjiJfr9CVi17f6ppXyRK",
  "key12": "4JEkGpmyBvPCzAZY5qu6vMrTLn2e28rGbtHtsNGVz4ZJXE7AAWzEsWkZgMQSBKeoKfjSLs57Nr5GbZVHmqyjjXhq",
  "key13": "2aHR4fcpsYsEWW85rFKJPQiQNHjTuProYBk9sBP2QjT64YEVYSnaQTUzaL8wpzEeX51BnF1A4uxekdqqZvX9Z7Xn",
  "key14": "5DwzVAXeFi9CEmgVLtnStJR2q4LWMzExjB2BXYncgj8uTaRTBkSZGJdVfhrw5sydtmSb99WzbBkNDSQxzY1GUKYg",
  "key15": "3QyLpDeYKyFr6JLBupcmmjzRUGDdYrXdsgLRcjxkzWi8v5GLeJFtDRx5eb13DMc8gE8Tj51DdyWvJhY7GEE59FpF",
  "key16": "2tKLai2QEgwu4s8CzFdTs64m2XMNmRxspKbarjqpADPaxvFvqrWCRLziJbAPqeSxgg1KS3E5LjVoP7c8xqQSZQph",
  "key17": "2LmPEssyjeRZUcDYKCW2y9HEf7WyqMCCU7c8PiQYKeKSvJE3gg6Hm9RnAeMtjYe7p5uK28jgGiWAZP997dALZ38H",
  "key18": "2PPqi7XHzFufRzVUPrJhLrQUJcyspy25KjvSsQNpoR9MJr1kjYCxrpmyWmv8uFEsV7Rx3Lub48RCX9JZVpkaiMdR",
  "key19": "5JXJWEvqmkCvZ4H8AuYJAjpu9sMnAWadTS2xibtJpQefQjyqZyuz2ztjYwHQV2QN4ooF9ZpG6DEq5iGgf46Z8oBh",
  "key20": "4eyCbuTCLGMKVJEokYoSLEfGcwaX9uqQk3RAx4ZevFmCfFp4KsitwXLon26G6XhLaWw7mMRDLqaW4vKMuxXTwR28",
  "key21": "5wxbdAyCH28H9RvBdSuAgber87JWkfhUyWZiD5EMSsHVtEMjQck7A8oz5osdHyMxusM2McbTrCLm8WnnmjaR1ZnU",
  "key22": "266fqr9pwZVS6FTMPdUtkXZki8ELbh98D94cYFsVyDjbk64CtTyJAnwfLy1asUDa95BkdpcUQsuHE9zwnAXTv91q",
  "key23": "4AM5DotpmhbpcXDdVrngsgdSJRqbknRbvrJN7y15D2zJRJ9DWjPUFae4XL3yVxnu93CJVZTCXv6oet9GRWTQYgKC",
  "key24": "5uiMAiNGRCiCpYcNztFfyyZMPEyqGXGFrZSiXG33TsZy7jp929tq9FzKQDucKUGJnkA6N6NUJRQA67xYpykyV2U3",
  "key25": "5N1i3WEgsQ7Ftf53huscPUMJJY44w9v2xeGZJApDeL4qnVjxqNcKSnXnQ9WJTnttDDDvyxcLJ5MEPrugTTSLtnjs",
  "key26": "5AnHDo1v6JVFAZWJXDBjPexqixjKz6ntSZHJiJsAtRTLELvmYJ4MGeZrtKzxPpG8u3icbNteQVg3XMgkbrWTnAFJ"
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
