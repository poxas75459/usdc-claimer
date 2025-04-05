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
    "2zhZfiQyPjxYdgjzmna6fAtrRGUtHR19dQnFg2GdxP3hduFdTJBGnGT2D8x3bNyH4hTCYCCcACSFxM7dTxByervS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VwAFApu4vyBXY82EHrFvXbb9Ge1pHesCMz73tzGAZ84afYM58u8W2MFxh4MzPQWyj5ZCqrWFMEM66hV19K4YfNJ",
  "key1": "fZ5Rx8wBtpkxtnYXtqoYyVjcuKQuNMQ9gefpQp8E8uT5aDhXpUWkZrLWvXZZotUTtfWyBv73gG5UQtNVz7a41Gb",
  "key2": "36Wv5EjNh3K6SDWc68JC6FYsFXVWittddm2v2bTDj8RtmbV3KtGyGsat2neyzUyo2XyggELC6bnAkHsgrgu8WZLf",
  "key3": "53PTXKx9iG3Xj5A6HVnoejJhPHtiQo871K1mWgT9rToQZLBHyB9XeMJYmSmRLWf6qM4P9fGfBZrzT2HE3uhqZutz",
  "key4": "2VDr4Rs1JYs9YrQTY3A8RQUXuebMEBcxQSMKDB8bjhcc42V7GihahWXZmcyS9TJkR7WhK4jyEUyxB9wGZ6SaHfCr",
  "key5": "23uwGh8fKaj4Z71Y99CgjNho9R45VTrtoUQZENemUZcdJaqebUJ8WiEbFHeUndFJtTxB7kJcrU3d17DZd2MqE4TC",
  "key6": "48yjSpdwt9tL9u7wDdD5hoSP7BNw98sS56ZLnbfY7T6Cey46qkKh5b4PNkGqnb389GNfyUDvVxkHUFkvdJnyi7hX",
  "key7": "5FpGxKiQXiBn7tMqSdgRvsJnVCf3B8JkxGT8JTD6MDsQBeEsoGoySw4PzawuGAPWoFDcpHeSyyckZBrukcRZaDpa",
  "key8": "B7vwUuTz9YeszJ2W6ZawGyCtPjYwk14oCxgF1J37MGhMeeLP35oPqPGfLZMMX5TQ5VxBB2rBXvt266GzqAX4YHq",
  "key9": "2d3DZgv6bdhMfmhyUkSGi1YeQpit3TizvzRQhtHZwNdceawbGVZccJPxWRkNzeiULmrFn8rg5phGvf6KRBCFSgA8",
  "key10": "3P9sXLYWf1mjYy4NE2TArSNJcQ8Uyb3fESMYbmMARjMsB1xRo5ChYfx5PqSp6oPWEhcv1woBuFjxKXH5NMDKcg9t",
  "key11": "4SDJq3icpF99RjynBKtzhWRguciVgJBFZ937mUZDjG4bYJqAtyEqNy9dQ6XgTGkgJC67YWfdrUjGeY4piGisGnxd",
  "key12": "3SGbTfgXNN6L563Un3Bqwqgcb8V6FX6ZBGR44XNKyVdpkzL93WSgSx2XF2bKeyVtpzsW2groxPHsiv1oDbFUEeTT",
  "key13": "5TxiGZR5nBNqdNAGi7FLsPaw2z1dhkREobGaq3tdgeVVZjBEnHsmuQCBMYDEnm9D5rC2GeW2pskDLRF16TNaU5pH",
  "key14": "CX7DVwqyyGbBNb3z83vj6rvmbH39PZrvAEdKt5ngwMgwjvjfwJ8GZng6uGRrD5eSoKdLuaXTpQHp16JtMyVEaja",
  "key15": "653jtC7UKxw2DvZvPgvcvNoCFBWe5xHNpiVABh3xWnkmS7MyrX6NQajUJng9HijHDHZdzR9Fg2gA374x61sjmWma",
  "key16": "3YqgfHZNjqHPzLuv3WbLB4sEY8kMtjALphmmNomD32cPaGmGAzoZSQuhozajZLHwmrUpTcJzvzuM6cWMrGREpp1w",
  "key17": "5QzZhdbwQ7Jtdedxr6ttEKnsGZQSKvLwP5uWJWjEPqiJppwkb2wLbx4NUp3gMrgKksnpYmMxa8yz78rJCN5x3kJD",
  "key18": "3JR9WB7MnRenwA8LRLie3czqYqcjjYE8NsHCcy7bs7bxsnpo3LTQA1Dscmp8LCstZaS8vcKh5X6aQ43WajZ5PuVZ",
  "key19": "3xF5DaLKMSkC5Rxcb9yAEEfrPxGBpzvhHLra67QKcpeQh3npkKyYTe3kyvJa8odFDdXKLykiUXNzaiVSCYWBsSN4",
  "key20": "2DdmugUc8oF9991PviyZN7fQuiGvNa3YwGxzbPvn3UffAtXXYgznie9ULPfqXdxzfFEJWY6WMqePfytCtr1JbMKa",
  "key21": "2F2Tin9AxbaiWNyQZTfTtHwWK1PGnHxQ2HFM8pbp2a8JjfmE97tvozo49KqbTKNJFRZkM7jcYKVhqPqBp4ky8EoG",
  "key22": "34EiG2xMAf1W49FfP8rXBFVzJiL9NWAZhDXaNxMuJPKQhJHXVSZxz4Ne3bRbeabVzzwvtXxvxczTvgvs5jTQGWDV",
  "key23": "5VN6QCq7havHwvnyzfjmEV7PEnqgaR94Vn7mDU6cFUr7uH2KMPzMQZAbJubsKLuRkfZcmsazZgLnkpJRsvtYRrVR",
  "key24": "45hotgdjRJuNYWsAtPyJr2EYpNpsXjvaHTMg7pN2GaDqeKxxZ6tMGLnDBokZSNiZNeCUi86CM2KeX5DRC7WMxqSU",
  "key25": "2PukDf2nen7vTNka5SMVdnZ9yzSn2wUWpBCNAVNZQECT9EDMqfru9yL77kxqNcD5AXdPwWo1B1nUxC2qwZQZBjjK",
  "key26": "24dtznCPLzdiEqWttwxsE4vtdmm6Ssd8tD1av2Q4BQ1oDSD4XwTa1fV33NvgdcjZ3Ur613Byr1VyDxXV7Scv6GVX",
  "key27": "284PpBeQVDKuTheTUUsKxSW1EbhbtucDWanutRZWPzk5gLwX9dJY4f1798cfWdsD49mXCvgpJYoJAmSQJfDkSd84",
  "key28": "g7cDRiJi9fyQyf4vAA6WpjRBdUVJhEm8Zmk25R2XciTBxF6qN9oktdrpyo41jPJTQFRRrhzb5EW6wpzceHLqypB"
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
