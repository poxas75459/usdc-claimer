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
    "62V8D3Z2Bitvt8BGLJef3qXGo6k4MLZ6cdnop3hBBsJNkPuprAkQnYv7aHt9PjRyp4Mk5gCuDQJq39JF3nPKcaMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSQQPCfsjcaSuXDrSxPyNBvbYyyNNUF9vtuqDMcmCFtSwJ98WMdaKMWtSFxiXBV7WN3AuiPEsquauy8JgK8WuuF",
  "key1": "2MTtJd2akEteJ9uNqbP3JSJFyccqRMqxG1ZZfg7J2PFsAbn9JiayuAKb1ybRCPyJVMrhyBVt8ENjTyGkRKV3tzQJ",
  "key2": "3KxnAJAN4Hs24xc4MFKcSP9Tj214e9adEUqrZPJkup1cR3ctQ223NHb7y5jjVmbk4qNAjY3yFEPh9h5u2sAEvwsT",
  "key3": "4Xi6vqZ4AdaWusUazFPPVwGt1KcbWtXByw3vF9jToh56Ezh74yoqvRpGcyPwaiZk98Kq8heHv1rdkR7Sa3668j6F",
  "key4": "3FGPmNmcVuLqqM5V8kaXTBJjeV3L861xgjLfjNE9BiWnXBhEV6kHTEZYnNmEJUH4fLVJgvkxTt4j19wbeNmEY6C2",
  "key5": "37ePV6FYqxw6tM6qd88wufPYpHARmEVDJ2wV8AqH5vbF53SDfvcMg8kg9DH6Tpvbh3ggV6yZm3K9KNfQSHFei3v8",
  "key6": "4i2BRABKb2uN9LKF62eQT4da8batGneUjzxRE6GDQQdbeweg3ZTJsS7pSdHu5WoBUfS5Bd2c8xXwpvHFYdzu21SY",
  "key7": "5ECKgc9vFXNR7BDF6z1Gn3H4GAKAQsGK2WQEZFKcwha47PkbFzr5vVUHH9bTCMWiVYnCq49P1MVnscdK2f3kmHTm",
  "key8": "58rCFyFq33s4AYSunyfmd6JASFCbDossqMnABPtGiVEyfbcSSydHYxdYguB8x7Jg9Rn34R9Ndhm554QkRLDpEqPh",
  "key9": "463jRAn4rMGMHD3kzBBeukzA7xtmYWxMBMXYTxzyqVKd3jGtnkVjNRbDxuJe6KWyJgy2NxTWdCCfr7gE5hgko6pE",
  "key10": "3sUxn1TuwMCqGdBNPzRLj5SrTSQHuRe2viNgnwunkKrk1Mv5ghAYaX5gURV9r8zEyWmeQYkTNoKRf1GMtpiGod5Y",
  "key11": "3YLsfAJD1UmPb1Qweh4gJUzraid5HuboB252ZN9qG41GSfYbWUp5wXtG8jaUWw1WRGHBGEkRZtTX8KdxVqVzLuCA",
  "key12": "4ctBDAptZUVPNoPvGVvBQcXS5JqTXa976kWKtJfQ1Ub3E4oVwwrotQEPhwiHLzt69Dmwz8v7PqsWsq6k4msPoXKR",
  "key13": "2s6aJBFnT9TKLV8cS8buUT2YNEy41k1f9dTnpSRzL8ohsMzGuYoGD2F8PpUgNX8G2GtbvwoUY55XUKdksngxWMF8",
  "key14": "3KetkiQ3p4N7Te9ucaXnhTXtyWFRrWMzkhV3iLnAwUftmSFRYR6RfZoE3SCumLqgyypQmTPHw1UUSvVwtmVTSJb4",
  "key15": "2bpy47ND9yxvfkpo6GhGTAmyKHddYXFbkxWToHKFFfgC1SMyMK2DWTuASdPuthwRtrMKHKt7cfFkTjoHq28mGVen",
  "key16": "pQjGUof6Ne9osNXi7TTAQqPXQurGQmPBZagejVqdCvqqFF3UHC4nn9xpSE4vBEbamRXQUxCJhUCXYpLyF948mrH",
  "key17": "3QsTTTaSViXqjqmGkn94EViSy7vE37aUEhZKLJNT5WZhUerjexhDVDJ98ES2waoPQnrx6qeAf9mdmUpATHWm5MAh",
  "key18": "bEV3y76J5mzqkfTanzFMMBYjffof1QK3wdNBGSGQWXEWkepsVWT5biF7josHdCjJTf272eKh5g3VVbGQQ8g8aqr",
  "key19": "2BAkDgnHmXLJx7SSfvFT8hZYVJi6AfEhbsEWqY4EcHmKd7ZWL483ug5d25CRfLmnDRN87pW6TcrpHCcGzmHoLVTP",
  "key20": "X1uC5SbWf1qLc9auvAkdQ3cYtsdNE71YiHuJq1tkZxbDHDEJB8QpPSmujXARbgh1hMkW7rjuDzpKY2rymoKEpVk",
  "key21": "5GoRSRZP2jFiynSHeScfUV1LxY1u6neF11ZginoQtpeS6EriNXWxU4uqDfd3cuzQ5HY3u4rGJakkBw1VkV8Mu4ei",
  "key22": "3xyHkPmevJ7A55QTAfjDhkh89ifFtpdAcB6U77xpt3htu9nqYydykMaCBKc7YUs5aVaJ9FuVcXuusazJQAZj96F6",
  "key23": "3xQgSW9wahUR3mNtDFaC7J54wGxefPLYqqRdWGnAuYNLDu4JFbm1dNuQvWxcAccGMZm8NfBrapTW1JBSosEYR91N",
  "key24": "2e7WXJKTCyaFnsFKBze5aMrcs6n3XcNQCSfxqNaMhA4m3w92NoypYxaCvNX1W9ZAA9N3rGzSc8mRrRTtP9F4bQqK",
  "key25": "PFJEDJ3BY1Bzzh6YxCNZTskqBdbmfHm1F4fZG4RmodibEUAWdYXDCFsb4Qhj2cwL8U48rsZD2QeV6QoJ89baLez",
  "key26": "5QGCq2G1wi4gsQcjdi53vo5NjCaXZKBUaLPFA8N3jZ1G8E5Ce8zr36aL311tDiCt8HQxa3WV9xwbofzrh9EYtmoH",
  "key27": "4nsjEmh5n9vZLBBsn5mpQ9y4X6sDPVEZqxypR7kdRc93payrJggvffZThPiopEnqv7TPU3XaQzVx9KxUEZTxb18a",
  "key28": "5xoU2HskLMjtBPfKtya6By1YUZ3YJMVCxW3G4wEmF1M7iGDXBckSzfxUuWHyWVGBA8BefBdzpkkDZNorJNQehLm8",
  "key29": "5cQqR3pMKT35NvWscEHcLEUqZfHKLFzjk6ehhWp4o97hoSdCmtgXgDRRPiqSumeZS4bPZNPBLFAXtj1V6fZsPHSQ",
  "key30": "4FApFqA6jhbWXignmz7fgBvkqkr1SSWadYi5UCFsAUZfmcqc1ujPniVSqzAZLHyGTmCuRJgXptZAGBu1S1oyfDQC",
  "key31": "4Ci3c6XATae9Bci2MgVArRnxEnUxJeqgWws4jugetREQ8hZXNd5QiMkbNRt2VTJR9qfjaaxpcDLeq1XHJjPhzmJY",
  "key32": "3Fsb3qUiFQYpTrpm7BayaKbH9hpTrAfAiceg3B2CtfPwNeAK5Uqm743sm1h5jJZskPDaLDLQUVrmu8do5QPWmTPj",
  "key33": "YMBuLKxTztP44HNbNzoTz1E61X4hC7AzJo9rjozWhFrWbRDwUwKNyNJsmPXHSNUFCiPUJNzi1SjMC1WDCAGt5mF",
  "key34": "2GmWtiPf4MywfCqVG8QTS17dL3PNYgmKQuDg65b1unxYUj6pgq2BPXraGSNuHtrABkN9sa5M1DboieLKTYFHkQGs",
  "key35": "2kazQ4ibyn8naX7HnzATwxetcrKB48ECy7GWNu8bvtN22HiJAYbiaFJgqqTWZ21jP3xu28utzx2sKpmPNu6XXeP6",
  "key36": "5en3JZu37fpqcdF45Vj8hGzPQhqTfvcgAX1eC9im7mkmL8CvPV8tXMtnf5teXV1oMWfLAvp2pPkv3CpzYseZZVr9",
  "key37": "278Lb98ZhxeLqViuyLeEubDLyHaL5ABZZmCgxo6pm4bLDHaYqneUHQAFGrg9iyCxUQkVp6MyLcXmBHMe748MCaUR",
  "key38": "4x2KHJqyaR4kggNogWeccfuHppjTneJeSLARE7MVjgLRrpkCRQcbMNb7YMKr4RhPu63TnPMFYrxjntJqZt4UTehT",
  "key39": "2uasDwYkecviEKvf9spHAGWDsXWgfpdfD15JTZXqtauHqBJRMQfsxjSMe6EsheGK4d3sRNLyR1M9czGTjdxXbXNw",
  "key40": "5d3axa2JoH7vVZM8otmkFcQKFKrGYxbanpQBwo78yjFARHipkd4yCegtdUYCnbrs9DFdjbAMjTGuwJu4NGfNNvsA"
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
