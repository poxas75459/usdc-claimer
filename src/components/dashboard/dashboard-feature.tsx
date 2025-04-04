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
    "54TFg76ZKpu2f2ytrYvU9YEcSrJgjy9TXVZze5hPMfTmBdBvu1pay14k9fE4cH76d7hsHuzNjfPgfvaZRPPZwV6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DEsifDXNR4U3ksZRA4fb8EURoGy5vpCLZsYiadLSjRZqBHhUCmyeC8e7uzrCxSg5NVpv1XhythfWGAEA9bcjRYD",
  "key1": "3v8H2xfjGYzeL9ykBu4n75twNAhMCYdMfLLFPWz8WVg21zFmobXVnTVSqzqSWi1Wro2V5E9bFupYy6PdwF9eDeZd",
  "key2": "UPcRekEjB6hdyQfx6wSnNNs9HtxoDPGFK4cevmDL37SohXv4EKPwxGcgJjsXhNbmBFu3kBHsdyKVZ9d5LxujyzD",
  "key3": "4r5CfcjHvV8Yean77rWZpcootfC76LQ18K7kZDRz8Z73FrUfZfagPZQxT9RNoa81ag2SZsBhAb67iEiR7RmAufMW",
  "key4": "2A7c55uz2Y287WcFRnHaAB9RtUm2gkbUDxvpKaWutvm6uDsqD6J4TqWrt8V6WGwBy4CNQTxYY5WPWiumyG2Bo2ix",
  "key5": "43VskbcEqCFgFxKuGcA4Hc6hyWBKUaJYQTompQWnynT9rMPxSCeKkHo3HyWqhVhZTjEeKSy2zyYM5CWUNE4WMRUE",
  "key6": "2o9NUY667ryNfiXEBohDKN2rK3ZevGDseiE5av1ig2RzG82Pkt9giYdtpmrmrqMMfaToMSt6H8pdnS5SALuHYNFQ",
  "key7": "2hqnw9Jq5ZZ9XkMK6dWb3p9Ar7yA6tcbhvQwyNtf3Sm3T5Zd1qdgLmvAQMFupdknswEK1mDx3zfFs2d1g6rXCMuy",
  "key8": "3WWZGhzkqNfe22kjgBbX4jg9PWB7Kk4bD5ymLADKddhxtaMkLcffN8mLK4di17Xvy7JoMzoZLroHqXC8auaryoMW",
  "key9": "57GHLgyPTL5KchkYdcVxsuAKBtsMQD7Ua2qunC3AquJy9sJTsBsCrSLZnvdWrQVGCWycjx6Uig5iduwBH2yB8gL8",
  "key10": "44uyRA9BKVK28LDXM6pBWYF3f7aT1b7sDtkBG9W4PbtY7mC9uF3ufXFx2DDRpoJSdjMjRKuYMSjcRmWXHRC8QRq7",
  "key11": "5fu3CCW7LmZFagMJW5LdnUFW8wZ4eJF72E9Nc2JVEXK3eJkW1S9YuVevRgG26weebh19ytcuH7VhE3LrdxtjkwpW",
  "key12": "HkngonScP7nZapXKGDfb61UWvwvd7owdKuVfD4BVAgUmsdjWpWqZkXyAb8QHyM2WkjDakBbU4ZFryNmPKvToQVY",
  "key13": "4nganCurcjPup3BQWmVmwX28Qgktri1CwB6RXXsR5TKyRrjDR6MEehKvtF1cXA4rgzWJDTwanQsRYGTkWRD8yhB6",
  "key14": "2F2R3vGZTGEZhHpRqvZCQmXy8x79eVBxP1ymrTT1aDL5cPKqsZyXhjHJ2G7G1YqDY4YSNAX1guKh6uzTkfmQbfyd",
  "key15": "3FuRVZKqqeYSNmBqMATg47KchBv1qdpupd619URJNrPnWiDK3r4gukNV5WPGy4qLwGPBd84xyaUu5WZ5FjLWGKEm",
  "key16": "47BZsCU4x7uehrV9XfFEfy847mkaqEN47HdSuqtzcyjEaoMzXhDnyeo2ffpaCL7PeXy1KaBnrghNuTBxowwX4ocH",
  "key17": "2kWmBw1kcxG2ixghiEf72zTTwNEN1p9MUN5uWCDGQfQwqSNoQbWjvnkKL194MeHC9spYtH8pACDtXFkASMQCpGXM",
  "key18": "5Q6hXTGF9j9AEiNvWcXy1Rkd45K9xT8FqNuPfKbjy5jeuucttcfdL8hGhCmBsYdsgcwJ7jf27CpCqCuu6UJjWSu9",
  "key19": "2d56QMJfusuvJbdz5XdXZQan2EmidiyREvyxMe5ad1CKVmVhLjWLhHPD9q4vbRpWQsFHe1QPnLBn8h14FjWQwhHS",
  "key20": "4tSvkySKWq5cHFN16hAw2VZnF4ho4w2ahxmJroDPBjmZrfsfkaPmoGsvcncgS4qCWw73VVRC3eY2AsusgbMdAQ4D",
  "key21": "5p4wC5kABTGSUsBrR9qTyZecXSSmqHL5PEtbDw6f3b3XEphDPwBWFRzwdKUqSEm7KpuCDu6YEEpmj6zMZb4oyCPR",
  "key22": "5y1LwpL1g9WBuBzwwbNUuHuPkVCfvSEQSWmudnMLtteJnZ3izowjJsxz3SkDWGRrdkMYH59YVfUUMXS4Njn6anCU",
  "key23": "62ZEyuWwQNvgRbwp65bRnB7p7K4k7nFTuVoiLum2p4aCwf3ufg77LVDHVcei4XCWDsqwgmXskh8jUGSuMyzKLsVy",
  "key24": "4KBjgM2AncNWBbPjtHMcEDeLRH3CPgQnN5Spf3QmTk3iVdLKzNfYkDJRETGaq438idqWrrUmG2xr4rgRQQXumroX",
  "key25": "rzMP3be4Z5LNxtavQDWdXB2Lz91dH4rWhn2vWPyfH5QWLnL68SCKqPBwH7Md99j3SgGLWFyuh4uieo1L4LiJXkb",
  "key26": "2gQogvdRaL7KbeH21yWthPqXTurWD3QRkMM7v3FTJ5MQ7pu9q54LZ9GRWGxxvHWuNG518ANrYGbXQWF7Xzk1CyZV",
  "key27": "38v9DXfiG1VXpBxuK1q3d7goTFHmCFJLSFAPRC2XfZB8UMUg96zypcjJ9u5wQNb5KkaeTKB6uMKRaXsqzyx99aZG"
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
