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
    "e8ECgyjKcbU7rPZPCaH3MfJtnAXLFBQRGoboqoKn23y5k2TrWUGwX41XCinbqoPmhYghgM6FVK3kLq5VCpyVdEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JEcAaSMyxCLm2rhZwZmARimEHfFhVw9yttT4SNrD7nS3PFgnTAXTWdh3V3nVaBssZVfpCLUrVoQW3idX5437JY2",
  "key1": "2G6ybXkeVqhxq8kXVvJPsWREjyNBos4pWEaEG1Dx59kkmzu8Q2LQt9Q1ZefuQUgf2hgtqmiRJQF4tAgcBuHVGJDC",
  "key2": "5f8QKwdTGZwh71rM8NNNPQ5oFjL6iyydqHyqU2oVzFGUZBuybwHfMU5chaEm5U8mMg1QDtBFB3sPxER8tjAjpwWm",
  "key3": "4YT4SPzLyEvtxbnoNqYMtbMsZy2gDMo9hkkPuMqH5c45DxTm7DiHfgZJofsPBm8noWv3mH65QUP9Wmkzd56bqBQM",
  "key4": "2SzQ1dYhd9Fu5xJXVFvb9WwC3LhZP1qPSdZKWpskcc8riGJ2i71RdZLbm6Nx33mfQAEtvxeXfTB88NgcxWWBB2Px",
  "key5": "6dYn4ADHELi3UMM2wjnHaqhJKgbtM51yRQUCQYk6sYMm1WdaJDTN1mAz8tLchgRWMFJoYk17XZUM9bZmuaP9HiF",
  "key6": "5TGSibX8GzyweATYe5wm1DXyuRsaWvF6KLCfMtgxSk4UAfCe78HHfCiymyd6T76VqKBSdcRbFbEnbsYyEFTiCFom",
  "key7": "YQd8TKuz17kkkW71ZBaqq6WmKKUmjy9z1nz27Qmd1U6yJMBBC2MNx5iHwYqGsomVqq99GgYkR3fdciGPpGj94cs",
  "key8": "5Z7sUQWpfBLw9xYDYwdjvMirP1vaVvBjSb8eYP2twe4Fkzj7BWwvdoJfdMbqYA7x3AoPSnL7Fc5kVFpo1SDfYzg",
  "key9": "4VNEAUvBKD7XSLBDm6pryZoKna98rUfiLWkJRdpwpTZYuEuhCnptfWuTcaoncTfKg3pmGo4GafiSowKjJb3AQRco",
  "key10": "5hBE8uwra6qhcupbxsUjBMbP9E8udY2wUHBHGYjUJ13nUsSN6XK28NQCS5kqGoDcLSfTBc59jQSs9pM3zDnCSUx8",
  "key11": "3pyPWUtidhEdHMfs6qK5Y7ApZiAjJw2jH23Zk1wPWpM3PZ2WyQkX5v1ErkpBcUp7T64uMmHcXfcD19YgWpQaERkG",
  "key12": "e1cEnudDH84GTghDGV3M9QiHzMYZ3h4rmDYuMa3p42Z5ng7yXTVdzdC637ek7s3xusV2hSVaA8hU3214Li8QRrq",
  "key13": "jY8LDXSaJC4PUfvgMhCTDt3DxctWRF2xwTnW5z5hJcSpNQ71uprWTJKWhQFthnFUfUueNgiwSQVKMJwwKxBRMxR",
  "key14": "34oEtAbHzorJUmvo6KsBNvwVhKVcT5zkZQMmPtLkXRbYTC5Xctoh6xAhXxmJ9JAY4CQQuxk4F8qVzCM1ywiRpsZg",
  "key15": "5EDuUan4c1k1nTNN8BWqseR2JWEcfBNjdB4sFJRZ61QM8MVgxKag1767395VbSmB9qjokpNeShcLkkNfqCUwTC6Q",
  "key16": "5Jw7kZA8o6ee7f2VYpbkAnTxcpVeaVinqoFLjbezffD5qyrcDjiCndjssbRnW2iLPZ7oVnoanWQeoJ8P4yGnuKSj",
  "key17": "5g7CeVRDanodmz9RHmvUYewYzTeJ6SFZBY3evH8xfDU8dixFmcSZp4RAPnscfPAqxb8GuqfVmPbb8Kbq6K1ksMsK",
  "key18": "ggg3XYPN5XC5jkcUSaSpRSig6xrn1fiWnAajo8WL3QmQCZnEMgUU1csgxdPYccV1kAaQ1SDkZFNFW9vPq784TL7",
  "key19": "WENZ57YL1JDfzZ7NsNRkVGziRQt38cvb3njXar6f1y4AxrQohqZN3N8Z7MDijhewsRUeg7Z6Npm2mb63EqdKcHU",
  "key20": "56AYpfbe9Q2vbvGbQ95qpb87yhrdSvjCnkwQTCU4CUhaq3nd6NUhFMpcDra19krwqvrWvGr6pm7v2TjfuUFiDKwY",
  "key21": "5kFs8cssUEyxHLdBn43WdUuTxAjbBRoN2y1q1Ytbuok4j3TkLg1w6Mw5op6CJXLSsw6fUAJXhc7BejvbjgFCjLsR",
  "key22": "5xNmxKsQtBVDkG6ATpgRrZpBFZvUJJKTc6gRC82jjM9FxpKrvYWdB43JfURbWAd4EBKNYAMP4mPDVWAWG3vx3joH",
  "key23": "2K6DNJmGq9JFvU2ooDaFKEw3MXZLC5DxwqkJFGXtVAd1PmD93ALyXPsD7kJpMKKNnipUGamgEfzjta2vyFrF1Vnh",
  "key24": "44y9YTRjrRmyQC7782haL3MXwVxDuqsY5fLH7B8D8GqzJ86fUsAimevHhQ7brUiHojhJwS71GMj6Ph96Wxk4fJEU",
  "key25": "ka2P9Zus7tmQw6Uv1BenUhWr56zgF3E2nbprvDQcrfecC8HMkeHhtriMd6wwaZVNjsjgc2uYCs6BinZ5gmeSVCZ",
  "key26": "22uBE4Y4BQswYD1i2P9UmfPYDsgbdCabJ8omBdjFyCbo7R7EA2tuapzCwgzNqgu83yM5KF2hre5BRLVrrtXmcEp1",
  "key27": "a6hSPqoe28LJNawXNHKdpXzLPGTLf31o68Xzka22gRahWrdQyovkj72SY61rmHc1NueWjYVDAJzaj1qbjYDQAxH",
  "key28": "2wmw2KzMvChp2HtvG31WjUEoMLY5ZKFryxY3B22739gKPX4kiHsZCCBLuFKXCjav31F7JsYcNR5Eo1tyAj9eRuvK",
  "key29": "tSD79oTwQUHxghATCUCVCL6B2J6eG9LLfTeuTihKj5ApGhunHx9mAYbuVrFSw5jequDB9oNj4qxSkNp12VhSdZh"
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
