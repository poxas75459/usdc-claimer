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
    "62fHURM1FkeHvp5HgqvPbdimyJntQ8R6gCrXF1cXLpb93aJZMT8Yp8iq6Un9FLnfteBBKgomRyUedgBSqiMFR1ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dwLDAR76MpUESKfdcH2HVg974NDu3xRKwFemCQpCtLa1yXiQ3Zat3sXsLoLz3spFVJc1m3BdWrr332gpptNzZg7",
  "key1": "2Pwjo8fT6MydwLCsQvAgziGmE4otNfYPicDqstTNcfmKh8ChHYTVdnAjtUxzxar1dsj62mXWn25t75jfKzoHxNRZ",
  "key2": "jHtWRE13Hfq6Y6SJ9FzHSaZ9boqbnZYxnmY8ZdCyXjuCVnAbf3PKTEkqQVYvD4NQeijHQtbwhNrtrpSXaE2HVVv",
  "key3": "ieAws4BETN3HybRTEBvLvkrS7upX3zZgoMqcTvwrLngGqzSLysz5u1C5gG64fguihdDXPwoMWtgRq1zW7Zdp6iM",
  "key4": "4mRDxqVnJPQHNCnGo7utk7AC9j2bLwTV9E9imGBFLBZPUqG8JcPBTsyYsvAdowyxF1bPuxYXQCzi3P3sfD7fdHiq",
  "key5": "58zxmdsPVfwAvn7sDM7nuhqtZ2YaeafunXEf5A7z5UzzhWHMWA2foX5PMzd4JEutLEYiRVWUiMuPwmQXZRtFvmo1",
  "key6": "2GAZaGyEQQE5qMRQcXvUwZKakHAftYB1MoDayLJpJeJZgRgX2dUM2ha49zUYkwFJssVtemGQJCiE2bBydq32zCWC",
  "key7": "4fMHFYxo4JMKiRQ2JxN9ZtcCM8AEBFjrdeJ1HCpZugmx35uZ2srTqtNwYpaRDrVwLAafAd9JzJTeFVzdw3SMJe3R",
  "key8": "2jEPVkgYb8MntmhNZZQEKdReWFpt2qeKfJCKi8R4CtDb3MKfMruax6XXDg4G9qX9ZN9o2eJDG6QoFHcmQCuuoe9v",
  "key9": "727v5vCjAxoeMgXCmjXxBQeJcdrFTiP1y4aGFTQ5BHMbaPDVUQ4qqYWghNEV6Wh8DwXUp5jF1pL1saFSLzJNiM8",
  "key10": "2vJTkcTAw7JBmQJf6YfJDYPqng5r4doUH5unPbJrsWFcixZeikviJcpKXn8eRE9UArjZuxPJtYA23sjMRn55Z2LA",
  "key11": "2LEjgVUK4EhmT5iY8W7eR5G9KLKvKx4UWmk6V6CwqsZMfxYyQdL2s1hLHUT2QFYrnBfuXtevRLsApSmcNchYHanD",
  "key12": "dkZRqCDtfgqcaRFz7zn4gcAuCyX3jrQSrMomD7Lufh8LZV561QfQG1yeMXJa7XHNh5Hc9Sec3AymJEiVnP4Wnqj",
  "key13": "2jUpMgBmZcg2zpfFWv1Tmnc6XMFHkUpULE7YtzXM3Emcs7NvbTDJNoK3ojMHL2JwBsUQvVimiVRToufqmyj7KDde",
  "key14": "5Qee9ZKFYqPvH4UFAd7n9vsaajyRNyrwLh38o2j2jK7yAhkXHgEztohs8iZQCzC9K79aWWt8TGoTeV22ZQ65z1rd",
  "key15": "54BnuNWtMu4iAgTBTr6zjox2gEuYAHGGmgnFUeGJQK2ezB6pxTmxXQcN1NW17bwjiycHLYtCbGQzf2ZtDhdJYDs3",
  "key16": "hHLC12tZBJSdAxxRpeqSgY8qQYMNnRH3juHA7nY3HMY72QkbFP3ioRHDKwWCR6LeJqej6PcSMvTYZTYPkfKcZwj",
  "key17": "P4pDcjwsWRuYkXuuvyFodWiJxUy6hqTt3dFMYn1Li4ygKErjivanHQ59aomroNvr7zPH5DpKJ3c9NPBVRYW1xVz",
  "key18": "arHZx5x9iofz8k66jwRrAV2TfyeQQ312fXjxf9xJwiZcEp7fbsEJ4QbaeS5EJfJ3geJ6kszsDLCVKgmAZTEVs5C",
  "key19": "B6CNT27Dvs5WVDoRmPHwYUYjUPAkwgwsaMfLisbR4wevHL34siXGCcv8ywdLuWq3XV34XeVub8PCemSgBtrmby1",
  "key20": "dUj8CyQ15grzGPyKrWi5cdFEgThHyGocEj98EhsC8Sy7JWEoUTyVzqdAFHgNSgEtMMSebGBJs2cSqK3cRHCF9aZ",
  "key21": "uHWXt8qCg98YuwmWShNDFvag5mYZBvJUsRhxEFBNUFWZKaXUeXwx7u1wLGAj4JFugeqCM1E4HQb8sUjGjedmUJA",
  "key22": "5TPMfohfHpEN7qij4bc6poya6XNWTsgUbc2uxE6nf1WpD1pAzgoNucveMHLrpB6pTEiqZWYTJ2qsmSr6Yrr7ndVk",
  "key23": "258xqLLgz3Py2Cz632VdHaR3UzaNfTHLjXzR2eBZ2p9UCSyfAzrwEjq1XU5EqthEQ9R7ou7mbKgUzXM8wqgp7er3",
  "key24": "4w1crEk5iyaC6zvaJT2Y4Rc1rAVrs64MRzPAnVsnNcjG2Dshr9huarg8rJViSrRsFVKRiZZms31dhVGyiVXDWz7V",
  "key25": "2YH5NNt7qDcb8HATmsLofrGwFiGHzkag5k6U1of8uqt3Key18zYjUVx8jbAiksUHnBEtk33sLtubMdVSKS19firx"
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
