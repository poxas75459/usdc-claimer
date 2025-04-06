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
    "4jQy86itnuLWZTq2ZWKTgz3fGH9DBcW6Bs6LTuraxun94FBwSyu8JUVRKsqPcXSW3zHJLEzwdbbtSXC1UEoVoMpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mb2rqBrP5r7bMpMjjvsSfL7PkzC4tNLmRV88LxsPT6jzXmnGY9LQUPJoqDjZGVR3MqwGBuj81Y3g6zj2NFBfkQH",
  "key1": "3U9xBMHWDB34hCUt8V2LER388DqthxAVW84vh1oeVAyaP85vRqPeBBLsfT3KDyrzWVqLDNWB6YFd4P65rM3V7LbW",
  "key2": "2Xe6yYmWDvzAvws7Gr5QqLouyPRnv1oWyBg6Puz7wA3iTi6uMMrwiRj42UcrBeStxsRr9KCbpEt2V2TNHTpk3yYv",
  "key3": "amnFJAe1z76reMiBvMAJ953odAknmRCvr2GGhq4enH3zabUhc4sVpeAsAxW7NWeBrYQD8cYzbuy1NBJ1EwwCW2B",
  "key4": "6eywvw7h42rW1vLL8oBvdB3wvGKwAcQwkDgwdjvnjsWYoi5jWt1ieA97fsP1uW7hJ8VLEzALT279Yz3m4xPDmB4",
  "key5": "2rgZ7mdq43scnW4dpXRCbxsXrFvtbBHvhyqAXm7cLkiuHwWXG2f4jTQhdoo78DyM4XhKfhU7WT68Vq5mTpDz68M",
  "key6": "5MdrWGxjKPTckc7AWrKzsB4MUpjwjLf6c2DQs2GsT44NEe67A7vPGGs5qopjdQNfXK8nuQdtCLZciUU3fX1Rz3d4",
  "key7": "4iwQ9ag6Vit1gu34CXicL1HxsgTAMRiZQWvoJQwTgVR4KyaM1SSsyzpMyNF3HpyRpUcf4yFUBhEHmc84n6LsZ3ky",
  "key8": "4LmyTq2d25uhkhhsVzK3YGkLZ5WhFZHt4Z28kRZZHPnYDqr5AXhk9fBPEnfY6MD4sQjGv72rJa6CeA8x1rP5qZ9f",
  "key9": "5CmwBCDWSpaKW82fVsCJhnXcv7qP6FfaSxZyL3SLMJuKgfrrQpT5CzXP9Je9BDUF2xPM55JMPaEFQCLCmhTJ6uN8",
  "key10": "5BKR7LgHsfU3jegVkkrNGkZ6xnzRnxPG9x3mG3c74WbKpSoTbr93trnwaP9nWacuQmT6UJoF6Jua2PPmkaxwUpT9",
  "key11": "iQwZqVyDot3hBz38jHp2GkZ4rMiFanD3jZXhj7MTg9mPNC7SJUTRsQZiK669KCw4gkSkpRxNEcJM512fNgqsPmh",
  "key12": "4dHtqTYwYCGCubpWr1kBojGKocKu8bD8Q5C5vemMUEgPhteeuSo1i59pqBAYLbzM8R3R2WbUydDhPJNzid26932E",
  "key13": "4ofEzoYLT2jioF1C7LT6iMyu31f5yb71poqyCehgmZZ9dN7Z3BsbN4VkPANKfnkXVhbNn9TJpeBoi4bCnQtFZjmX",
  "key14": "uuhZ3CaHVw65jNY6Yt6FPcmfLLUy1GPiza66MhpRx8izve52msXS8v7VeJbd8VDZXbTUTemZFPzJCFY5z3e4ZLH",
  "key15": "CGngvPprw2VmpFPr38yZDQtby1nrNvpiu1Sd4XroygsyrW3LMQAK76YKDUZhDE3re6tnHnjZB85mXtPyWxR6ted",
  "key16": "4H34xvKYa6eruPJZiCYnjzTpHMaAbkXiTgfrX2AjnVGreMURB3SXJoBsR3rc4Rxizk1s2hLdj84gT8oACu4VnnEB",
  "key17": "eKjUdhsvJzwXy8e2a4QEBkKSKDXVAVMRKU7UtWfqvGGzJdeZTXmhRTBNSdMRTKgFJhiJnPr8NR7Jg2v54KsRgnD",
  "key18": "4ZSHViYwaRzpz6bG86V48YrFNXz4T712c2pC3WA1ewuZ28Neau5yQ28dEFxipJaBW65iGADB7WnEzPUxxKA7beeV",
  "key19": "4dtnqAx1UvL2UQrCa6ZwjDYCwgLezQoWhea5cLFEoUrJYDVpw5xLr1ZxwNc9A4cvJaAt9nNX6JthvmKjTcsddVn",
  "key20": "66qFAdw3dtqiX3LCV7ecUyLoRAv2CNPoE2tooyGM35BUauRrmx8pcFvf9KWCghNYjqWJbMiCQ3F5fswMo6bYXneH",
  "key21": "2AH6c3cEWpvZ5XHJf2cza3ZncNe7FxVebhmpY13zppFhPQzSR9UDs862us5XhmUdBFL14kF2WNaYnxntCmRqSUMN",
  "key22": "28VqTMRisaeP6fN5bNrmqfdzy1D8raMk8Dd2i8FLwTHpTWWoovZsDJDZ3xKFSNdYzo7dCUt5yYdUpRwwwURV1YVK",
  "key23": "3hLmTWCH8M3geft8zx62d16fopLrf3UxN2ht1Kee3nsVaosUpkBMP7J7UCUdbu6FFvyUuihQibcNHZfhwpnXCki",
  "key24": "3BdSAuq8SVNhygDsCpLxH3nS41joS36Mk53gpSGQgG44D6qs5xQqv4w3wVPAGGosJ8X59moHuKsZL6MwuTuRRtuN"
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
