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
    "BrQ8T25sqF32FUA5FHagUen9KTVZQmkGZQPw4BWkDJb6CqNVLxVdjbBsczirFy2rXS7d8tQNYtiMkEZxgh9rLvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uu7jb9XZzZ3j1V4QkRe7UtFGXECMr9qCu6B75uMi5951tUVuF1smMFm3FhjL3XLuE9ogTVgQvo8N9RQszUXfj56",
  "key1": "5ep75afiMeg1c74AdSkvMrjbbQJ7optU1tZ3gbAqdzUdPj4eVYNyWhgZ2uftjBM5bW7nff7rAgrD7eBdyGghwLLw",
  "key2": "5xhMff4yEkDPEGDPAcx9Wx7DJahdYZAnUKicDArAzscTH3UKe25vJkTMuV9s5L68cUzk4U4t5kN2kwztVy5pQgfe",
  "key3": "5XmwEUmsctj7dQWX8eeFum738MkA9ETzrfgiqftv2har51q37pVs7exdxDQqm2K7PmShpVL3feiE2tYHaNkYuxkw",
  "key4": "PLxHdYdQMAZWMemXuqCbYYC86CoPBnTUkTMqGRzU4BkoTn71pMYCufm532xJ93Upq8hPPyNzkeFDWpfmN3WUYLe",
  "key5": "5pJ3UZYpuhakfP2PJFGmLPqZpJT76cN7d8hdw9VCKqgSC7y3GKnNCxNzJZczMCKz4RNLUPX6WEUFeNkQingVQRjT",
  "key6": "5hFccmgd5y75YwvmGdXan8bkuVMK3yy39tts5gQP2gPp6oLZNqJyvb1XjFoSbCDSkvFLL3GLD7CxvA3fbBXyRviy",
  "key7": "4ADLYbh34SVKKrBcRKtEREq2Nqru3AbiJdN8R8s9hnAT828xqQ3saw34oFfVdRzTaVyndc37PbNeQkonEDFrS1PZ",
  "key8": "2sn6Mw6wgAaP4bw7gJ6NVPeYV4txcFyVbtT58NmX9LZQNwhyN8pdWFK5nX4tPsAD9XyN9uXnqPp3QALQU4yj1iDB",
  "key9": "4hHtgsmWYuuKn66tnHtT7KoZoLiVKYYC2cAAfbJgDAN8kpeESP3kwv3pkp482ka8HRdpN748zMfm5CjQzdnSBmyr",
  "key10": "3PMBsmzSLQ7znGRA2RtJVu54i5zEMmy1WwZbDv4mZZC1D8FJNaSh7JJLBFv7A5N9FofDxXdMx5mBAP1ZyHukaoyJ",
  "key11": "4qamfB6bv9sebB2pBcdHQMrWwswCm254jT9P9Gd9fJ5ruKEpiW7A32ZHkEasm7vLCECY7hopnyfkVP7gsCJ366kG",
  "key12": "2TCuuTGDfNvZQ5M8YoEkEDFv7td6eDoeqsaeCtdSnyKLCehpsUvnh2EH8JSbuQRGNKYzjjki3ktJPHbb2hK7pKM4",
  "key13": "3SqqBJMXr25qUtXYxoAb61eM5i3kzqoDvZQTgFF3CfJ2eP9r7cTUznp1Rjko3fdVieqwHDV9HhJ62i9uxAdrnmab",
  "key14": "54CEqZaEanHVhK1nvSCD88sfpmDfqXTrF4cp5RsAWSbKWWtYncikTHiGhGs14J6smbjZRMTP9t5Arx8iZ1DJcfVA",
  "key15": "3KGXSk4FJjckvEh7itxsCZhd1ntSFebMmv422Y3mu4cQ8xvdBLJWYww59aV6yxb8Xv6sAGwrr9rhGPaULeFTagxa",
  "key16": "2bDxK11tH2fGTwusjZWgr575n38WWJkKhWpxtvNPvX9FGxNNHJhMprtiqvewJrZLQ7vgWYfVj2HDsFfUg2vmMFCR",
  "key17": "5m4ueeZFtTZFiXHTdGKfFPFZNVsZ76dgj4a4PXwthn3km8ceFiqtG395sLBhBhGG3X8Xyx1KhsApkumkfv5DQEks",
  "key18": "3TVWLHp3QS8fxnxYEqNcCCj3CPbnjgDAePRwENF42teca2dsxPXgaoSJtWp2vuwVC8rS1rTUGuYtne2mS3aR3LGN",
  "key19": "37XrQKT1fqaib3RAagk8UgHUuqjwjnzwWih6qacizu5Rkg1BJWnUUWg91DAKkvWHVBH7ciGoYKBmRoDmc6d5HFDJ",
  "key20": "5BCLgaShwiYRv1QovrtUaBYHggkbNoFXwSWG6hq6qCJRP3EyAavXP55V4tfu22cPeRTCwmLM4bu5aKz6FcDZwFpG",
  "key21": "3Fttxiyj7u8j4wFBbrtLJHAHLvxcbBQVsKnnFC2xDLkQeB5qSnARCbvdLJZTdXtcReq8otbmTpubfLZBHiR2nvVy",
  "key22": "CDHpUFvgQjZrYzdqg7Rf22kQBvZ59tKhv7nHiocr8PXpNTdiPvWnuiLuMErNyD5MQQg3RBfhYHQp4J4maQcm1QZ",
  "key23": "TrFVi3Q5xDPsbQHF6xhCkPaEyGNBBthLnveKRiHDZsJZry3MQf8EQ67EDEUsgzyDADUrhiMwHohdGQQ5jA1ocNM",
  "key24": "2gsJDVkmsuuwz3XRm1fhEsjBJFuurRkcVjQBefiRJmWZm12AQyx2ynNufjfTbfyLgBmDf318BFdCjjqE33MYLE8f",
  "key25": "2vCTRFpAm3zYGUDmjuYkG1ibmAgJ9Mk4vbqcfY5moYMdaEEh2tqwUo6KYN78s67ecJp4GWf7UWJKQ7CyhHMnzzA2",
  "key26": "56fmLKxSbowShQt8sBSYKAHDtJxuK7JL68T9T5GGyk8im6hKZ9DPitX1nag4q9Y7gJBihMaohZinQLG9ViyGn6pv"
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
