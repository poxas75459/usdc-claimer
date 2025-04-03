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
    "4YFgLUpmbdtEqE4qMpAP3MW6YmnBkEFP4a3fyF3yQyS5ZdpiXz135HLtodHotgnWNPH2kRs4hXFPFBRjPMC3JeZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PKw3fZFWAToaYeUeVQNEgE7VqXeXeyRLNtV2KG2oAGoHDhAwttZ6ptAMgexNphfkZmCUvrjA5MdKCQhT1EkrUJ3",
  "key1": "4EHPQurtsvr7HjzTpUHAzrDXmiKHDWnYVCkeB1bvGsbkkL7drgimFztEmrLBy8TXuCdqpQuzEXgfJXfLPfYbgxDr",
  "key2": "2DS8e3UwsvgBBUKLf3Abh6y6LRZbVg7SJnyF4kfwdZhaAgQSYWnLH4R7KG35mnojDKYLoGraqGo4U4jMgDqUJQKd",
  "key3": "5uQbdZrwsu63qgKGDCvVB3RcvRnKoExzz4MBDPeSEYjYVVMm9AXopjc9Qy8acLU67sjcyNC7cijbsiPYU3D1qUJN",
  "key4": "28fooPHfmtdqqiYZJnvCP8qSzZPX1xWbTtfvo4X4qujLimhqGPEys62RAcadrqUCW4eRLCMKxfQt57DhmaAxBinQ",
  "key5": "hH1VU874p1P8S5PHfLKqgHpuJ1VLtKUebdFZJr28LZB6pNSHo2tQr7Epc54aQPVKofkMnxZTE9FzAC6jvzJfZaW",
  "key6": "6aoWgyzq1Jud4TuXBMzsbHsnmwGGA5sM9E4mdoyDa1JCzEdH4Mfp7Xiiac2eZ5VyMkAReFqKJfG1LiN74AFtcXq",
  "key7": "5SGuusjVPrjuDfnURBbMk5GNoqQCyKHhA113a8eec5rxKxGKQYXP28dxQuC1SiRYZtCP7ZRU19Aa5N5bfp3ruKA",
  "key8": "37tC1T7QZuwF3sFMqY6prvqJVHQko3W7JvwA8SCSKtNzTFbkfRXyLoU3S6gosVKrWwXHmkGE9fvW13xZbd27vt9S",
  "key9": "2HS215aymuz2CVmPYm1E7aTLSZBoJCR1aAvuBP2ZzhDdFvSRVGCL2LW4hgqdLyxHwTUqnLxfKYZfs9epPSKN2xzf",
  "key10": "4TihJT9CRpV8gfLQ9M7U8gEGsXMErsX2mHdkHR7unXpD4qhZsXgA4c14cAPrpBXsAc89ExcFRAL6WdbtAvhPn5xc",
  "key11": "2gHV1WciACP4QqLzEN2xYgkS6xdBBcTzEiipdMMcfiMCdG136MVKphpvd34afAorL53Xg9rUD23BCMMXe9hNHRz",
  "key12": "3c9UzYoE8rphoFCkotbeq7KU93264uHt8BykPbemHc6NdrEzpqBB2uqXBb7jKobtBJVrsT488Kas2qHuVhraAVVd",
  "key13": "5yDmLWCokH7uSPaqfDFySU7WRoNgiFpo4mLFurUwUyLYGkkrVHrJyByTaFFdCiGQ1HuehTbNfa7AArCEowGLkRjN",
  "key14": "2PZgJ54PH79yCJpFmPGoAnCZz7Yb5KEy7p45xv1q3QLTZFvYFEJXLEZm5uzYeqpKJbsWvpfTqQ8PmsxLxSsUgvMN",
  "key15": "UjkKWAzAVPUMiiaTRqhFqLw5w9LBAhqZv4mz9rSvXAV4NsAPxmSyiMiUJfnPiUUzM4ZgZdTgCuABKufrcWRKrdd",
  "key16": "52ykh1BmWd3ffQRM9i2yFu4svGWbgeTni5ZSGTMwJC1DPTkgvhARCn3cbGGFkXiRu4ZrN7MAhprdG6jPNgNDL33u",
  "key17": "2WvgjuLjR5Ce6fsdtyfP2YSLfEjDh33v4H3qFigJzpRBMsn8ZgsXNci5WEo4ADA1VEbBL8zbwFd2sT1ACPpMsji8",
  "key18": "25hQKEXD5i3QNciMd4ufgMbtYzVikG9PNftxSX97JK5b4ZfEDywNXrT91r5Wx8eU9AWCiVTD7DhcVXcrHAL58J3y",
  "key19": "4dt1Ruwbvtrpx27hooZyXmLbiZZybX8T7KENFXZB5TAwwL3mW2hjzMQacZWKJwYbzjD4FS6C4ma9yzBdWUzLmKrG",
  "key20": "d9NMpn6eXsTiD1zSpACUiPjE3k1qSrBvRhrekSox1NYmro2SvfVGvi8JcxygCJVNHT6jSgZZrDq6EWUHcweFCNd",
  "key21": "5woRFp23PduEnLBj3yANvC4b5mazyvwDmGC1DT8zPgFNvoSp6HVRtEfBW337WHzaUQTZxKWN1PXbcW6eDYqJASjM",
  "key22": "5u1FLFR8eYGT8mY7Fp7BHiXGziKkEjD4V5N8VPcKWdnKmNWjMpDLVdxxMazvGvH4m42htHP7cUyT9h3mrfHnu6jy",
  "key23": "9TBk5UUaehuHDZytQZ1idGBF8sTgsHs6BXv61kUXsPyTRDkQtVUxPbCjnwAfMyZLdbDLt56u1hfiEUzMtmCYJDq",
  "key24": "2W1PR6M4oCcw5eHsanw892Cukxnee9LPSgaXKHjLL9rUxCLmdiJZpisCNNbdaSBZko4oeE2FE3KW3aLA4tQ6AePP",
  "key25": "3uKMFc1H8tuFCJFF2WFhWEcabTrfXk4X48wnWSZ7Wywr75RXPfrG5P8NVe4XpifJGsUAbZS4Hof1Auq2xC6JK9yt",
  "key26": "4pGoiYpSeozTtJQtBHhQ43YWnJurgHtF2EC8T6LU2befW2h3Fx3sgS4J7VKSWUpS6aM37Q6e6wWq8p3gK9XBuC5X",
  "key27": "3vnpCjZHWw9Y6ZKRoiZ7XUffDo8jNztnou48cH52vSrwA1cFxo6PDRXuKwVEKi3ugCWCeUGKsCURxGCwc6AmEBxB",
  "key28": "4HK6BjzFDjAXJxsT1xJiDTKxLLxhhXyNwikvV2hv2ZGbBGR48cgCUfy3U22K7hyta2ixETYG3tRBieok3kUj7fkF",
  "key29": "32NSYmpoEETc8idJ2BHkBuPHS6fGNgbu7dm4y18Wi6BtzY6sd1jG3cLkgDCLN1R9dPcxz45dt8Mx13iHhqYw3YdC",
  "key30": "5ct52TdTb4R96oLxJbiGKWWaKceBDg2EVNbTnKLjB1XjTpRKYYoEeMqY2EX3DRUTAZmubWJMjq6ut8SCQAUwE7hk",
  "key31": "oM8Ximk6kvrt6zzjkP76PN5uqYWWekoBiM87TrCH4pM4AiDMNbgTnAZSZ2trLBzQWDcpPZGbwtNyuyH2vvMkizC"
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
