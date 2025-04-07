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
    "4mhNyd8s8zRjdzfKT236gDQ9mYzif5RFMEEZwnXkkJDMbHUxJtTiSBP3weJgZw3zHE4GqJhK3k7sDSMsiarREF8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vLVSx6dbRy9bT16G5PHoN5z8cRDt3fHPFAqjUg7FNR4yJzr2yGsEEDFSnisbjdRqT72uwv7nWg7a4HStaSjDXYi",
  "key1": "2WkYAVrCFydtsoCUp5Azfbrn9ETCYYvCCoMT9T3FjFoCFXzTbnv8v1NSA6VDU1KUfRdXfMEiKShiHYTG5WCPZfKU",
  "key2": "25PzQ2iU6dXMgBQzFovo6DJdCfJFcQKHLK7eoXb8n8dF3T17dGVLsmCG6cc9LxoeeGJhvJJbdkMcqUxXc26znTXK",
  "key3": "SJdC1CX7UjgNbBnkhxwr8kyCCs6RTqWeLBLL3X9RHH2w3aZNxBNJR9YbcDxWxLWqVSaGPQ1rkFfbXkwLhptjXyy",
  "key4": "2nNx3cyf75MpRz74oAMbU1WGL4SZyxNQLP7FLdjEBPv394RTpAWGRg2yJYMszcyaBKYgeXY9BXcx69BdKt8UEGDd",
  "key5": "5XC2bVce7tnHDu2x5t2bPvUcYUPN8mcH66PmxqWF1t2jXWnojFkjQLQf81mQQTpg4Txx1FKXirFXNsh724n5EF8R",
  "key6": "3H3Ko55T1j18JhW4sRTQySttArU19dLELq1TcPetaJiDX1SjB5hMytosijHyaEd3rfwYJKN7oJcWZfUoM6RiPiRs",
  "key7": "4nTygi613RJ51dqtTUxrv4NU4wwa8EK8s9FHNTg9JjPauCEjHxdqqbNWi1HQb5yTsR68HUKah81awz66Vd9eZ1ud",
  "key8": "2anwL4oWgCuaqXvS1xedVuFyAwM1WMgjqJiwMrkEzwpDhqJWLbnHJ295fHr3Ww8T3nix21pBuwbt8nHfHd62fgK4",
  "key9": "4wFRyjaruoHZjdbi4wt9SJRvr5qBW4VFNKyBW5MvynjcLEVJ3KE4jLu5BZUVz9v7N1kXY1n3BgyuyWjBpYCcSKzr",
  "key10": "2BVFFLj21VU72eBZ578AHG6HZk5U2DqWFXCy2ob8JVrci6w3RQnTwxrNfypTNyFSndy5ppjwTgP5MxYmzqcLoc4C",
  "key11": "PspV9XZXCmaUxmceW74XL4NGVc8iuVc1tTQXv2SYbGUTwjWCWrkd9XxHHHa1KS8FtCYzqbobp1mBZnTPsrqtiGv",
  "key12": "3H8vnaNbbquGGXV1KW3vJ2V7mQGro7VxnbuRtG79bkjnyfRxaos8hN6eEKYPPdZNAU8jrpcH6rJAHSE97Eorvxt6",
  "key13": "3DPqUGEkjWmsuVzE8ZBbEjnoRShS7x1RG1jcR3qGZwFbcysYH71gT3r5J3YWwexhvFipCmvDTDekv4cvrgpJfdBj",
  "key14": "4JKqWazCEmJoyBkQ8Rx2sQzZH5Ye99yzK1eniKtoFULbuc4ZgmQAsEXnD9khgdPCxEzawhzu4skGhEssAkyynQr4",
  "key15": "58k8jNbjSmCMMBkDPxDKRZKonstoqXj93sMYQktWvXuTsgraT58YqHw6Vv718FxZoBrXhUzkNhpPMJfikpR5eGWj",
  "key16": "5Kjh1DfE5Mb733wRYcxB9xHc2W7REo3R1arysnBVvbBpFiAcKNCZNQixjFrKfJmE61f3UdLPrxVpCXaTSjYxEheP",
  "key17": "oiPpyzMdPBUDGuJEerAogP4HZBap2gr9WRNzSPKfdanmC8UTg4C8EyixSi2982okLRpLxCq3jRssH4CZWaSyfCt",
  "key18": "2zv81pC9M9BTzj428xRiP4vekeoQGRyaaugy1MD65UyhwgZBTHaErCAoQuH8mhkJH9rziUy1dgr4LJNTG91MQD1F",
  "key19": "6467AkjmVfRqnZMxjYyQrsbpG5Q1nYfhcRHVodxU8fdZKFbVxXotn9spaCw4J2kQTPz2ZVPhDt4MwGJu5e8xVE21",
  "key20": "4EWNKgT1bJ2uV1HcPVpNEmzKsQvURbKNuopALn2qxRyoNHEzze3xsCuZZ3HW3VNwceRhkSTak9BwVi4tbx1mW2hV",
  "key21": "5ubBrvsxyRKB9KUWKajPbRDUroX2L5LKqRZDQJT5UqyakwEwpCtTqTCyxMe8VLErmTTotPUWKemEtJLENF9z2szo",
  "key22": "5MijW5A8KaJuCVWNrzzpXLuWjy2Din4bj5qH98sv4hTKg8uJbwtQiWbJzKRWd4PVtW8zabKrFgWy5dssZaZDzbSg",
  "key23": "46NSmvnkrmogMzgJjqGdnTyBmtmSBcExcwfFvpu6i38nYqk6bscZWuVoN7cfdx7mm7J83P8XVEMv8C5RREguMmi3",
  "key24": "3XmwtpdXP6jqMSbx5kN6TZ7iDv3k8r3ZQhgBBXxL3psbnqD446BWFAHHsPTaFUTZZ4g2NcwqaC3hi6d8RUm3CeyD",
  "key25": "2JE9GMTGV9VBxjYoaxe6j7sjcj9oneJJ7poLEjtXe9VSmi7uoz4BuwHwrrX38aovPYJA7M6JnGYqvVgm4kGCKxoL",
  "key26": "8jAhoBHRGqhJ2rqvFpf3mG51L8SMhJ8FWmVjmV3DwN68XJuTED31YzHL5vwoTpWXaGe7Kpb7NyquUp4MCPJy1ST"
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
