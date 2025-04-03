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
    "3uG5t5nqBezgeo4v6NG1NzgA5QSy2To26xt8xGVoRw8UvuGHthccXKVjGgoVQH9CtZjWx1E59T84XsqzD8TQcwqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hPFffWqAze2rsUKQ1k1sb8EinKV3wDqdTeueGTpA49RtApa7WrY1VGcMcuzXhR5u2ZBN6XyFoRLRweuyWU9oPGt",
  "key1": "81FTeWgCC3jCLpGiPjJyWR7SsRLbSeBH3bR3ixfYyA6N15dt21KWXudz74jq3unVXB3M5UYzBd33Jgt1rJcQEyg",
  "key2": "2zDGWqb9kj3FD6pEDsFGeWydMhy6kwqZjBPAefN3guK9y5veJka7HZvXr4rF6voi7AHWgBMDJ8SRFksmUvSBg6Hk",
  "key3": "is1jtvdouRf5FameAxpd79rhdGFNqVVjmFgyTS6vria7qgGZTYUQKJGLCYuELGKbpM2iZv9A6JQqsHVFBTDfExp",
  "key4": "4Hb9W1fF5aQyzRY2QpajRaJkvTZTn2NyrWm8W3rrdRE1P9rDdmfAkDhUvf6zGCdbZqnc8W4rc89edTY4ULNUP3ER",
  "key5": "5hsyMrMZEUCe3qUUEK7mjW6Xww5ZqNdDH4UhQSzCg4XC3tJqXwHs2MocE8eACRMvZQDi6zDdJZpUHwwJTCmSvdwe",
  "key6": "2Gem9JtcTPWknAhdAyZbrNsFJqtMcei9E8N6giftfxpGC7r7UXBAjwitmMKfrZf7QagvTzMuH5R1ozfJZnssrxe5",
  "key7": "xeYxRPLBMQVKuWYrjesdJ15ZbA4XCJD82Q5z6TcTu52hYv1ifPd2f3MXUzq8kfb3AeuSubfExrKqhBGAVZhRUTG",
  "key8": "2aGH7sHQeivq8AfQjMqbi96b8h1YSSvj7yfPKy9bDx1mNBZK371YuJx9N5ykpLYgQPc338bxCWXcAgfrg8bLZNdW",
  "key9": "hNDnjybjwACTmu8rK6cn7zBof4agAjYfwMV3znKXcFCda57jB2gL1zZ2AgVnZSnCf82ds9bjyTwgPavptmyCMgb",
  "key10": "5xLbRYHdquY3ZDrpWR1DN9LUxex2iGijPR1vK2thaR1iQYGn1qzLiP46oWPdea22pX8wLgiaCKhvZJrsY2BKb7Ue",
  "key11": "3cyHP6pULVZnFKGeh4AaZCDCUAcpnjLD8AXf87tS7R35rnuGKxiCKxgFYYkiQNjwimK7ibRuw5VExEVmtSP5fSWd",
  "key12": "3QCE76oBmuXhpBo11qXFoSKWCaztUHhYmi4ZScZQJUexLsg1JwsKvAnD64of5815RwwRsvwgWmtHLFYfkdU8ZfPa",
  "key13": "33xjCqeSExa56cnLrFDwZ3aF1gmM1NWq2ECNvkoz5wvSrGprtzqyB51VnKVHXy974yRX3Gbb5WuGq539VetiuCTk",
  "key14": "4NxiaxkTzuWVdan6gNg5PjXww1fQeeAwEsBYTbDzXUvhEzUSqwE61yfQfkmbbxCm9woLBD3AytzMEP7bpZHuY8n8",
  "key15": "2tXePKsBMXmskF1KznHoo3AcGbyqcDy5z5smDubrHybdAkg8TGbNqHUvhwJAChq8kgrypqsujw5ojT1CpEGEGGSA",
  "key16": "pbyq8tAE6JSTgZHTyfm6xBdo5Xfa4u8usoaMv7V6yhpxNPFCfVxjnp1Z13Gywy4W2KZjrYP3RL2WEx6KEzPzUYW",
  "key17": "3HLk9Z9pzfB94n4RHHedcGPB8ibyhG4YF7HMyaxqTgq3ZvXw56BLThJjFiDCUdMPobqRMMfNwpRgYGcKAfvjdN7p",
  "key18": "4nabHVQdjTKyabYuaNNx82jUTfj51aL32zvTxbkwg5gMqitSrQfDK9CScwXoePHFETxGZBwTnEhjmPxobpN1dKsg",
  "key19": "cao5xrRbuZqzavvnZthjfdhP3WMvPUPDBNpvXQCi3zsYXRgTt7rosdkEuhpP4QYmXJTSm6ptRpRZAgRgdkF1Xak",
  "key20": "3RiVR9c5ev9fPftNfWAS9yJ17z5uxY2FZN8X5xQFJD2NDKiDobhzofVi5haNSSYUe3L5uT7MK8vLhkdTirXDjWg9",
  "key21": "2PK47sbweo445FEGpQyxHmSBYtmJrks2iYkiqbXa9ru9Pn6YH8JXWkzXoHmajmqgZrRwX1o4WfaEZo9STLZvhdab",
  "key22": "3SrGsaWtWs3KwEokPwqQ6uvBe4gkcjYX2pjd1HDr4mc6Jf55wtK8gW2SUZSrx4Q1hZerbCBeqY3oPLGHcgZg5xZ7",
  "key23": "27cfQLaJpJgzUsMGGLB7vkNdfxMkE7iQghFdZWmxnAomEWfh4M7d99wtEeeFEixZR1emH8nJ9HdcVnYZe9eWCeVH",
  "key24": "2fgnuFSi1fwyuGCPaAbv1shGACxektpDxthEENjfEsMDBvEBi3DfCAnJUv2G37JhbLCqx9m1rE4uujd2usxpV3VJ",
  "key25": "jsec3FFuUABeaaowi9AQjcwXmpD3MquagvJsU7iz5ixNBtaD1NtDhBgnf36Q16N5s8JRLnVHLyLxbRSC4AuN9yX"
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
