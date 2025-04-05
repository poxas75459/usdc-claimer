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
    "2BTGQ6C3X29jWiVTqEbFbu1Aok3CfVoCy66QuMHcReTnoQTtNFKny5SXBuJhfzzrxBSBf7DVBdTi1zv9x1TPKPLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjimPyqUViYfpsUsQdjKYfWU9UCHcBEVVrCdT2JG1M4utrmZNedZHtyVF14yvBsrrWZk2akYqfDF7ynPUdApaR6",
  "key1": "5AcgLYXNrd4JgHiB5fz1T94GWyZJR4VJ6FNqjiFc2MRf1LoTa1roFbZSxdqdbBcFPr1h7oT955L4yZUmpUWjCA7G",
  "key2": "436iM6MxNoysCscNbJjvLY1qiUTcFTkV19oBBQP56f7EaFnaBcyUpdQFcTLURDKi6GTppgNwL1VKLyUh6QesDdhL",
  "key3": "67hBFgz4wxz2WzKi2E7KZePkpxeZ9B4ohDzQ5wqyhY9t9uf1VHUSzojULuBPPBb2YzNJ7BV45QPjAd6ZycgZaFfK",
  "key4": "5ho4jbNVPek8QCJKMgZnPaEwbx7t6shGUMpqSh9tC8iWKD1x8FjszG7ZKMgEGSZdZ6EthiNt8izzgvLaZvXzJcJc",
  "key5": "3hZSBAf1tfrNy9faR3TdqvUe8gnGVDGWeXhy79TuxP6KFF1T5cnP4EKcL75QNSL4ntxczMsMhJFBgqnHedY2GdG5",
  "key6": "4miimFfJXZG43RytGwwcgJ7J4Uzm2pbnw5ioz7jRWpyNnzFYoYkQ8aLocytwwDjdyVSoTFYCm8bmhSTJkwFj1Bxx",
  "key7": "k2cNAgRFHDn3BKPd5oDQcfjc2U9uTkXbGcALto333B4F4YNJbnrdpyqaEuf49Ar9A1p1Rx1w9paE25VFwbJzqGg",
  "key8": "2iLRNwQj3AfWTYjNKGSnKSTD3xLgyTY9K3h2CuXK7yShAyxPWcjH2E5EcMRMjheVQuvMQd8sQ1h2Zrj2n9Vcg7qZ",
  "key9": "24TmRxNE7Y2n2g432wT5Dghjgm4t2pJ8Yqi3egr8BdNVkakNBUngYFUYs7zhJ7pdQEWtFcoxwjfj82pKmFNmAZLx",
  "key10": "5Lhn2n5QYG1JQMzNu8Jqbb3AA2VG6JVrMpnsASfmdtuwsdXMyAjB9Cd7Puu3bKHaJVWXpNuJixFEY5L12j8ngtYX",
  "key11": "5HWyZi4tqvQnTWJGEp62XfkaFJ6Sx3ZiJ1s4iYFf2qE7sUYUBW6zbjveRMnyP1LSfrBEzKasKyTMQhouR8SC9Jkz",
  "key12": "31o3An6zDy9pcHYbVcuPgtHzZtXvSYdwxj2jUgpmzEyM3fS9EXZuECXhSMTyn6W5YCYiwuCi8DCCLdk22khFMqCQ",
  "key13": "5eLDheaW7whDS8Ggm9MSBS1tFAN2EoZUHUH5G5kzqs1xJAh9K1M18LaoRqDL1pCHVfb1s1XCWh1krtGXbSDFXTDj",
  "key14": "sGa3ZHU5hV27fbPP1XDU7uytv8JxhpHj8WrsKbYRvw8MrxQthusy4CRDqXi3cs3cYYFcTS6X43Ti4FUrFpXt2sN",
  "key15": "Qka69JZEnucmMVxE2za6bf71kHGi1FREiSE9HBC4jY8jds8kN4nqumoAoaSPBm7QK6u6STFqNP3RkA61pyeqQha",
  "key16": "B8C17ocSadBVCibCPp9NinzPpkYXP1JVaSSqsovi8KpPfCXHVHfJeq5wxa9eqPuE7u4BfKPMHucVfkQrR5H5qoq",
  "key17": "QKGx6B6pMu5BCopJn6k8n4SJbkegmpNNFJ8wV4EtQ8L93aFytoPfyKsX4C5NzxotAj4guadKXc74LsJu2hBLg5N",
  "key18": "5xJ6yiXZXuvYk82nfXaUJ6t9t1gvTPpwFYSUCJ8SjrYh3kJ78RQ3n36hiScs6Cpy41DcKWPAS15xJaqS9xPynMCu",
  "key19": "2YZ5qR7L87p8HSz19iaXokhK7BQrfB2KGA8z1tNXSpixwXmGAS5muYAe46bUmybbF57S8gefTpAWa9BeMadsGYCA",
  "key20": "5cspDFLBakCeGVTWS1V8YFBCEd5PmpGY3iU2dwpVmsvo1yCG4njQkVcPpxcVFsWjU9QHAQmwFs6VFRqjsFM2jzUj",
  "key21": "5Xcw8YRhRNhxrGDtnHLEjXL8v6Sm3yWjyF8Ty9idNHW58KEuLTq8BipB7rFva72XGm8mDFyoiP3NoaLKzwL58ntF",
  "key22": "UpKkVsP83jo5RGXYLARHuA6pokDBey6hGUSmDhXxksKVxRfZnenCWcDoEUfwqf6nMS8turVzoyKHFUL438jX68b",
  "key23": "3F5SZJo7A5GnRjbXmJFEpKdwnHmqVd3xQs7EVQYQuUVpAQkZcdRmgzKLKbhD7REBr1tqRVpKpD57rpGKboCqTicm",
  "key24": "5nkp5uiLSVKmSuW9sZZTVQrorCeoBfvZXdJsKRQ1vg5jSqZu8eYdncSWYopaymjpe93tzLEVR74uo6bkiTtsYXXx",
  "key25": "2q48x4kYpZMAyJe3M7nAqo6xq7aA62Gns2Lz1jG9JX8mTGai62dW5D7tpKpV8B73thJfKY37sv1BeLB7rhh6fpdK",
  "key26": "3rZ8Bp8mu5gUB6D7SMjD3YPHukM79p33XisXf338P4kZE2mi6MfmQC2dg5YsN8URmpNshxbMtQA1PsCVgq7NSF7H",
  "key27": "xYrERdfMjX94NU52rf2yHEz7sXNHxfge9RsFrBaJVUDt9S6hfu6N77x2PfeXWjUxtYLd7NbMrkZbybfhQwo67ww",
  "key28": "3nLYkF2xZCheRznP9KFr9J7quqSTPW5j2c7xeDteYCA4V4ezZnN6BsZAnZHjMXWzjGGHHEG8aXVrheyBmBgDagBC",
  "key29": "3EsFGUMg8SNG6ebGkBS9CLZHSycAgz8RT5DB3BiDJdPrTsfGwRAZAejftXYAEbWtSnyT7uV34eaPtm3SvZ3FoygC",
  "key30": "5sT91dzxsn8EVgva2Ct7qiDWry21SRRvihm7x3vaZL8oNNDs5yry3zyWPgYSh3tuxtJDXd4ZH2pwFRt722fNRgQU",
  "key31": "5vP9yjU2URFjA71Bm71LX86dESALFMiLJLtrHC7JBwVXPZ2NkqVE1ziFMgW2brGi9GBbwCjrYmrvXmVP7V9f8nH2",
  "key32": "5RJkwEL36Uy2Nzbt7rDp5Aj9Tz4pLRpW1vt7QLJGbszN6P6MNvPcUaXFd6c9YybvA1cWcThHnfstGXNRLGGPzF5s",
  "key33": "ADRUcKLxDM7kJDytkhJERA5Gb116fP29riCxcgd8maZb5Ss6aWjmu374uUCJcoD7zonzdgphqZRuQUwzVKF54mM",
  "key34": "2r8uh6qVq2oroYR8qjqrhZhV7BkEQ5FVTVb2DyKySj6ynnWu6C77mZ6uTuC2UMFcPWXQJo8c33b2ZLzUPMQLcRmh",
  "key35": "2kfNGLmyvHMtyfb2mfZeAaoDqqx6dwFBFDi6AakndP95A2JvVDNFexhvr7icRc9jzZM3FUJgntxtHPdSdwMFvkVh",
  "key36": "38HGVdLXLWprm29U5ii6ApGzTQp8hXUkytBemEJPN1ZfjMWq7Ud2cepqwhsQ834nSqzvG6WMDVmG5HzefoBe8icu",
  "key37": "4QT2GDGAuQnXHoGZ4FyktHqNPnLBkesesmWZo4Cpa3DCqbKyc4ujadY36XhQheRvsJDMk624BvaCMapJUQ2AUyKP",
  "key38": "3bGyxGe3a27Hhyo8wqjJXQAXR11DbidBCJC3SmfhuwgsyxK7EbezVV88ijw8HQyVvCUHeR31tx2u7FA1F3wd8hf7",
  "key39": "32i6GJcSioHcgogRv6Ra1KxvkaG2r8B9ACqXLj1kf3CtsNMfpZWV9N2eLcXKuzYupSrFrsGnKUPmeZnwyN2pHNg4",
  "key40": "p74eKdmjZeWAzy6TumbHTtHSsn2ujwmYnARz2RqVimY9iNe3cEPFd7XFdu59nZRMnchMVyaBFiTscZAuYXcTg1L",
  "key41": "3WQF2gUSv2xUeudbRfZMFNLvXgAGprDYPxKkwVGA9rzrazzvTaK8VmLkHT16MzyxrzSY5P6vKWTHhBAQ3eaL5sHx",
  "key42": "65HYyhWVT8Lvhtrt7rtnzgcPGPasdqmkUj3WGEmJmwcW3Qd1UYYNXYzoqDthE5o56P6ViZ6uSxdp5eYH63YPJCzs",
  "key43": "3i8Mw9FiDHuU3R5EcyR3hZz7mBJWkrdYPERVGKrxyEF3wuvPStRpXAYCoSZcM1kSQ17AWg9z6nVtPu2YgutY1f6b",
  "key44": "2inpx8BrcPtckhCgGpJhDAEsXtZ2LSHHvCzSagGB3q6epSGY4kWtL3g5Gpk3JAFHJq1rG1YRGxZQTzmtUL23xaX3",
  "key45": "4yANYG8gFtKaviSoN3ZvhhiAvQJXPvmQYdhmEs6ZjCGNsazxVFuQepXLUVxPnQxKzzN1pTNNyC922TaTw5WEQEm4",
  "key46": "4Zo5z1P1CANVrL13T3nsARdZfqRWMc383z7CfEvZxCMTLL2HZndM6XmpLrQ3Eefvj8AUdeztgJV2By34GeKft2oQ",
  "key47": "oxGPqK9ddHK7nAB9UyNEcMZ8AMdZVRKwRLJnDg8D5B3kWBjucWTVCHudRLxSsuSfbTLf1cdco1dycPNvnK41fhq",
  "key48": "4MzV9S14aiA8XDMV7P44nZds2dVUHiE8fp8ZeALZhP8qZxkkQoeszSKB9FMGwHBubzs7r9WtJJTDmKZrWSZ49aPk"
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
