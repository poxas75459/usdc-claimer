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
    "2Q4c5sw8czE9KehCaiF4fXoM7RA8WQz6bWUeigVHC7KVCXL9UgCKa5CWuFNfXa6UGbcdkMhrrn49LVAj3gojQ997"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QQpuSgPWLU2dSdbLyj4YueYhd6QhRcRQezodKTZdHMSZ9eYqFtL1Xw1Y1AsqtU4PsHCky1tZ563WNWkmkMp23wo",
  "key1": "5LV8KZKsPPdzyn3F7dbMH6wySSyzPxFrQmkCApYr3K1ooy1DBD1ZaDpCXJUaaSe1pQEhdx7PgPYHzuPf57eFaA2B",
  "key2": "2TphipDUnrq5NT6MHFcnrEG82Mwx378hu9591yjAHzJqtAo39hH6uSKR4nMCRBEtUhvjyBDD8J7JbqYKiEtWFRS9",
  "key3": "5sDEaAKLzWbhQjsKbQ1hhAoGBNpymNYufJNw1DvrqYemWCgAo5fGkESzbU5m1Yi18WaJabMcTyZ1gJ9HsMvWfJP4",
  "key4": "4sCPRaoJ8hrq4eap79foN2GM64RtiSdpexSJtMGSiLyJVZt2SQaGt1K1KwWjn9hYtGYgz93cgLMFa7KaoH5SqcV2",
  "key5": "2FXvP3eyh1oKXZK1XTd9nMxrtYY4f5ntoz9oWjzEGGQrS9ZstnFn4HZu2hurxDFG1rWJqLveotgwkhbZ3Ng6uUYe",
  "key6": "2CLw3b2WsBPsbGoHuUJ4xtutce1hgBojJ3v3C6WEpuFQsz6G1SnmyVW6XsKAqqe1DxmXUfBoLn2EHD83zXirJv9J",
  "key7": "56nfNpu1LU8wkdNhZ8poJEhBeQNH1k4vxURKrjEMquisb9VdZitJLcYfC6moojzBiXZMDG1SF9467bLhgxQTmAu6",
  "key8": "4YdXCpcnKfHRpnhia4xnc1bi4ziyoRDTmAFF8Kz7odo7BYc3f7SSfRwtP4MZ19a3463LeiZq31UdBqtLqcoW8jHJ",
  "key9": "3qkyx5rQEH2smRReuCVeHsrwurhmq9oWRChZ1cY53cLRvtsg1C9JM94xWFjYAwsqCAw7vwsXhfamgEeMAy7WKwNY",
  "key10": "jPV1WHhNgVTyBSYbeC2p6TqbaV9ydUogj9YdBaDbQWQFhcWr2Et2MY29jq2zNUTUj6eHVeyzVyKHA3HNwYqrZXY",
  "key11": "5J3gqPzXqWBb3nwkJ5aShw5rdB2cURR1sBjHQbT3oY8WSa4Rrh5G4wjXaPXFWP6TFSXLCi73j8A6z5z5bM3uhqLj",
  "key12": "4wbGPJQwSRXzoDCbjrHqK61RYpYUcE8naf1op9BEP6EBWjDNYxZLhkkC6ACKCaLjrqHcE4Ep6gX3ED3SbFda3dYp",
  "key13": "5EFU69qyYWJ1GbWLhrgfUT3FChtAzPwVDjNfLVW8ekYdnsZQA21DyadqfzvjvWWMNJZFgSz8zjykiPq7pxm4WpLN",
  "key14": "212fSoAjHKABjozg9WFApDevhE4e4Y9tM8Qvov9nroBKfi26ZQpiA51nnZojp2Mmtaqf5vZWyikkBSCtqCrmYidC",
  "key15": "vC2x73kWououu9CM8ZneFsUez1TQxQc9j8mRCkMRakVGcS9VCFvxPLS3GbgfeCrA9gsefM9h9HAo4HHueo95BeJ",
  "key16": "3RMT8zUVcfS5KGZmHb239tqud69WyrKtTpLd3hqo1Xesv3LMg4b5HksrwUbUkQvomTNkMzwfg7JN3uBs5fzEoMNs",
  "key17": "eRxrjDJwqGdFxzozRnacQ3BnseZJfEpQYHCbTwKvNhuwyFPwykSdJuag3rrbuAPmCHTmsUCQtMSDioYvjNp8LYW",
  "key18": "2Jw2X299LovGxbsTioRmCuCDxisPDUxC7cAYEFpFYXLWdBLKBi5BkFjNouv3ZxxW6urNAHWggzWw7PeAMoQ3xg32",
  "key19": "62TGQgZqJU4rUFaXgRMNnJs8ZPA4JiERz8bKkcq2n768NNE1CSXKq1nZ7jWbVjsFH4QWN16qCp7XTu5hj76coU8r",
  "key20": "5S6Akn3RnjYEXLFTxUNufwheSJh7NpePfqsQ7uRGXKp6koHZnWjFGXe7E1MRYiPNbXNKLG8r5KrvgyqL7j35KK8d",
  "key21": "3RH7snxRvgtPdrrtGfY2Gzb7aWB6WhEav6QWCKMsoqHVuf6dLxvET1Zb1w9UevzS8gYvTS1J138bRTJo8tpfB2rr",
  "key22": "PbKEs1LgAHfqy298WxNYfPVNLbnkb7qRaj5r1TCbeHeDRurJQa7V4Yc8cc9T29XJKLYhubPXMScqZmsK3jZAGx1",
  "key23": "4k1TWWdoPWyk2gYaMTtBudyERhibBzJpYrBp27NqECAPJVH45tgajczC7GNTT2Pt8Vx7wfNete4RxVj1XNmCKQ4c",
  "key24": "2RVfEYupdssUyBmE15WgXs95X8BTFzatMEVNBPwMoicYs4ucdwHov5Gn8xDKgQXd1uQhH9CwfCpgq755qBqsGvUo",
  "key25": "ZTCuQA2WkCu7nqgvne2Wxcc2amV1WyYACTQcRamzXDG95sHeR4pdfEUw1hckk9FBE7DxQvbgLTL3ECShmu4SA5R",
  "key26": "34bUhvzh4tcjWp1To6ZgkpC54FPoRsybRBY6ytuNhWzQm23eMFKT7UE2S1ruSNkA4n5yvSzTTAK8d1g47aexHLAn",
  "key27": "2CZY38FrL3oELfT2EZFhuvm55FHK9G1XyiLSCqquLNvoWbWaxXJDA4ULmbiiKyZyeMmbc42wR4Y3SwsprbxTpFUm",
  "key28": "2HFQ6EvpbfzNFpLWSYbA567VG37MsUdnmaUxFnZCqkfgX5BPx8Lt163MH1KFdrJXRRoDhzEZJyQUwKFfdqDpiq7h",
  "key29": "26a4FyPVFBq969H4ts3QkX1kdLbHho5xrw7fdL77FC8dAh8Yrw8Jd3ivm6A4YDx5nYdfqAMGD6vzwpJjUA2e2R1E",
  "key30": "2oLi59jyxqmcdrkwx2aim4Q1ogg6jkQGJjaMvzU6E515a6iYr6ayPDuQFeJMgrC4zUUyPHXCB7DgUpwkCpmxfPHF",
  "key31": "Xgg5Cg6JY1nmR5nPvpqXE9QoTsoLBK6fACAmTFUYHuv9wFNXEJH9G2tafKSfQKzCeNaX2nP7WgcMGjABoWU77y6",
  "key32": "3s2HYs3uroMg8yBJZR8FjjtPvY4AQGzCuP7ejLSt7mD7wGbsCc93voaECkUUsaHVJwVsVh6L4eqaxQ5KtnrtTdmH",
  "key33": "4KNqy433veL7HzNi8JMw3yuXNzZYNyMpq6U49DdmGv4iwprzqqCMMoJA7U1YHDPp4omRFqStd52rorCVTdQiSAri",
  "key34": "3dA3XYdPfGoXzerNwqpbJ3HftjHA4FXoGTjM5TV2fBp2eWQ9GSoH4GBfXjc2ehHH8tYxmvtgQzkpqtkXR7JvQmNC",
  "key35": "63pcbWTpTQu9gbN5M5H6eLozxeBvajMGQ7aiZ484adeBB2sCGt4wkySXzgBNuwdCqnb7gRA3T7Gs3TUUtWsiWmqf",
  "key36": "5kTKDCxcc1KnQWw3gbvCcGwV3NW9xGk9qrRWag38Dxr6CxvWaXMZNJLXx17bXdAnkcB4nVPYpDpedBVLgN5xHNME",
  "key37": "2Nw2QuudNbMx8aaXjDe4Fi5tiUeguaGGpBZ2XJhkW8VuCgJhjGmJDRmrWGa63FHnmFGFr1foipdwGq9jY1oC6fup",
  "key38": "tBhvjmPaPAoDtD65TqQ6Xgrrpg3mLfCeJmFmbDEUtb7QTM2q1oDr6iSyN9xxnbzokA4SqnxTc6NP2dDGyzeXddX",
  "key39": "2ZNHLgenXRQR1rnnCyxTthPvwX34YHaHa86NRSq7J7yzD2Sx5KedzczjP2LF2qr3Uon9gs26jfEPNMgWwm3vG2yG",
  "key40": "4fuonayKdZamtA5e3y7RyDbR3ktqACWmXwoxXwAxXKnyvrjgDaeSEjmYZvJxWBVH6Ukqd67Af2JKGnGWmsHutvJE",
  "key41": "2hwLTP36xTeXFQfmQTxoGqEZNiTVSjvjGU2a6k9jfWpq86atDQ7FKC6uQoMfU7sMvcTL3iW9X2sfSw4WJL6PRmKq",
  "key42": "5Q8xDNLVXkRkJspqbGvhmabMZhHsZuBCvmG7JfG6YuVHRw9kNJZjTyHzt2jrPMmdpVwo464qrQZnpMUa9wPcSByN",
  "key43": "gLu1SGCtRsyHUoUhfTeX2Nji82iP523vgBEMxjdyW1rvuC4vruBYSyynHcQRCRF58MEnCThi79cRPPqvxe6gm1m",
  "key44": "2iwLJ1BjqoPaEZ7AexocKqpJ6F4ksTdgWQ457D5qqWpjRsWsZJ91N2G51NMKE8dwjrCg1RiycQ4N3sCvVzcwCoJM",
  "key45": "jBEmwsphbyxuM6rWAsgPV2bhv4GJyikJ3zCNmNhGVr6kMMaciZpX7SEiGtveAmESwNvSZbKwJRYZwYkuwh28QkY",
  "key46": "51hg8UJ15Jnps81JXiPod8LtUSG8gQMVep7ab8JxG2NG7iLZPM2stv8DwuDGuoV31jb8yJMqWwMmu1nCGxrb7f1B",
  "key47": "Pss99wDrsB8FvQfy7SJzC6Q1cvV8SMNoFfYqLo6UPjLvL9MoNqZDx1Fo663nFJ19eR8PcAVqKfECmxJU3zqpWcU",
  "key48": "zw1dc8heq9tBUip6jZXAy75khpjEW5QDChoYS3PeJCerDP13PywSwrdFTxi83bxTic4sBUsJcQFb3HR9wpGbwRb",
  "key49": "32GUyywSUF9YnbiNhjRwGuYUAifD5zm7xhEtmEztffPMps9F4qv6Vdg2kED3jhQt813ry6DfWfkDtuLSZHgSUM3u"
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
