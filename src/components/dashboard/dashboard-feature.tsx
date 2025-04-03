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
    "4oCHodrGKuMrdLNhSGWWVVH4ysH1DAtZYsK9wkGSmKR6Xu3Y6ieziiBFmWNKeYwSacVbZZzaNqVztUzkXaSr1Vm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9DH6Avxhbh4X79CgcRWRgzCrTNwzkGTNpUzayUppK7qNpAF27eyeL5dTotUUWtfJbtREVZtTD1DXPutsabTfTeb",
  "key1": "3ejumtTpKf5T8c2h624u8Ue7gJGkrT9m1cUmSt29TAjarnSedkEaUFTRjcV4bkrKAHdwd5PrP3LaWr6e9VAiNG7v",
  "key2": "4gFpjxMtGHv1K5tNnM7Q1CQ9ggE7iEBfA9rTcej38hJ44eimcTWpYwZ7fEAQBhnXdNu3HURyRYCMYp6WoFC7avRN",
  "key3": "2ZH8zDMfyVvfztN6joB49kGpX6wiPUUJXQtjGXsvMMfotnBwF65vDWs5YB4k2NNgm2ftVA5YtGVmS8HWDzHfF86g",
  "key4": "4BHUDPzxaxJyujFT93Y9c3hdPY6usSAuwEco6fMuG9bcv5uCCdTmxRZGp4BPq6aKGArqTTzeyQjfaLLgaWXYRs88",
  "key5": "4MzkbbqDnYKD77HL4BF4yFs34dxQf4pPGZVb2U6aMAnoRDHt475KmFT9kDDqn8MreYYkheQdMjdiz5wSzpjAdVQ2",
  "key6": "3BEaoAZgkfey98sN1wuDQqupRhWErKDV3c1yTKw1ezfimyj99oaRzr5bA9MJNSUoSmUDosRHwEzZHq4KUxEVMd9J",
  "key7": "jww9Nj6XCeSvEr3gCyUEbPeW6SJpsWGZULw1etV4QJPKswgxSevxTzc5gBSptPXnxNCwmRSoM1AhyvMgMjb9Ezu",
  "key8": "41DHddgy1WEfkfR691AZd55QqgmkvoPFKLa3R6PdT58wafjKVdG1QhDnTrfmpwaA1VkLPBWJmYJKf6uEYd8i45Ba",
  "key9": "2MJFufQmuvzDBbPuCsmWLtdZnKuVLau9tuaS3jbnCkAHQTh492QDL1HejVZTA6gJXaqKDQD38L7RWNZG9BJDcH6Q",
  "key10": "2FiMqcm8pdmY6JsWZ3V7zXYVaZ7MVRn6ymHDRA7nBAKLNmLoVynskTSfEkFctctT2i4yh4AQrsYnq4dbohDdXjRU",
  "key11": "4Xv8vsaBB8APUqq1qyG1AyTu25xFCBk3FCkmJrAoTcAqsVJTMuAAkJzDaJvuPBvoH27c7jMXoYC7NbZ5nogd1x5c",
  "key12": "3KdWXYhoy3MJuUE7tCmH9drjYWgzrjpBypnsko4rXKH8NnViEwjr285W8HVrHmmvAVjFM4fhN1pzdH8WQxVoCM2W",
  "key13": "4PTwhoU1Mhb2ZrrTpLPLDLwhUEez3jxWnnQAwrGVdqUhcqA82aY4Mt6eLbTbvx6Qh8Uzc6iQRfEV4e5J2S4mU17b",
  "key14": "6535bfmckfqGw3KVVKURytWbHqm54eADHSLifBnpbin4rQmbrw8ce2gqidULExzCjx8yBxEe4v4KZcJ7LPfZBc11",
  "key15": "4gYy9LMcHwmkAEUbH3xxaMAoDd1N51p52u5QDxP3twuA73XVDrct2DK6EWaYaBfpY3jWkvAzKckY2vr6fzYhAPeb",
  "key16": "4Uis9geMMqZJNM4TxrWKUt2fsTUdqVUG3DRVMHVD8hBgYqokWZ661zoYPqVW1ZHiX75BWJYFpwiUsZ9USPsp8zH7",
  "key17": "5UR3oB7XvmxC2aWdR6iiT56JdTcYib6UVCrLGecpQUMUcgvvcx2M5ujU7MyKFa4zzABJ8Je2tGn8mb7FH5SQ4iBW",
  "key18": "5RuvQVVWTvPqPU22EWxGfVFCTrfzkE8uK6Q5Dx3UcbT9jsBFqRCfFuLRdqSRnoBHF2ufJmW17pBLAgdMPExU2Yxc",
  "key19": "3tnCqVt1zYuL99qVdD5KRLJyBDedws1yNqDq2jpeGB1wTgUYnRw8ZJ6YLykGA76C9xHh1xs2uMfL47yj1nccgAfA",
  "key20": "27GyYMVLiYJ7EqGiBxsAuWf2FhiF9bvikdNVQKFQuLzMLURoPatwAXB7rVryfEYsF1agAXcxxNzP8ZP8DPMZqLCJ",
  "key21": "5RqKsGeyfmy9VVM2u8tKoK3fLLLoahwRAPHbUDLUdfPmknpq8fzzA8VBjNcocBsPTuKcvWPkrRx14RgmuJmWSc5W",
  "key22": "3BqdoRLQHFk6BLX8o6v72RDkV941zRfUTKJKSbzSUmeG9S5rnEFq9KWMKHxYiJPsk2JqyPvtV2ruNrtEZjTzvULz",
  "key23": "TxEjoGjivptURc4rCWZcJce7UXJdM68qBxQS2P3Cy3QJZwWuAGBQdBWfKD3pXjL3ivJAfsTRVhUDR2T5j6ZU5Br",
  "key24": "5ZwEZweadoR8XVjLbFajMqcAKN72cwUBbrYP2SnPEjKyZJ8kXwMJXzxdS3xF5qytzdELjUVfLQFoRfGSHDx8XXGv"
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
