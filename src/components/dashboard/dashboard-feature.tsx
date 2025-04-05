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
    "ZR21A8jXo1GPph2ZQJYP7PBByz6Morvet7RqLUaPqrhrjDm1ZXC7q4nQ8SjVa7DWE2YtV2xV7r5S2KZwHjaRyiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FLjzny6Yrv7KoJPdtdHNQJhQMMwLb86MaWHh7vhet6dxxNVBL11CJzuKwWc8DeZyXSnvyeGkQG3AY8SaKwPCWoV",
  "key1": "3sL7412jiAeS3JP22F3AEU7TYfStsdepVZFHEb2Uq6aoyeVGcEa7XqT2Tn9UNdYtAXgWmmcu6QMATmmQW2KY7mXm",
  "key2": "5Nskq8aUoPxWDJr5pY4g4G3Ebgks6vCmVBSg12xsspD8qobRyXGhWSNEPhsubR18f1oMd8Pbnx5Kv9ZWsYC7HNnq",
  "key3": "3Bz8eUCuBkdCe2M8aV3AneXN8d7FXxBUDzqZGFsry8v7uruvy6fMuWoEY6pe7hVLcmm68UM59vv2ky4UBUYSkuAX",
  "key4": "5RN1hvctdB6G5KdEVjrEdh62f1w132Fd8FABCHGWVNHNeZucvG1r6BhZPukVaLTFspDaVXpFKCZZhh7tjMhJvGHk",
  "key5": "36p6QtudcbxPuhHjxbdbzRwNJ8NG7CMqB3Qbgatn29aTs6QhFhvPoh2DvjJbUdsWNv5gEGjVaLfzh9wogkiM6kHu",
  "key6": "3cNnc6V3QYvgMAmRcS51R2XFXxSmZRPToZyunNsAbx9H7R1m1EfMtBtJsYsJvNC4FXyimMV6dtgi9j9h2wFUp4MY",
  "key7": "3Eo8MAvW8uE4KZd41amVTyxGp1npmNV9CFHBRXEFTxWSPvMfgj9LwihHeBTe99cq5tk59iGr44uW3tBAjckgxHT4",
  "key8": "uHTHR2sfLAqcjCQaGPNKjHwX8E8cfdRiE4SMLJJokQAWXx7SzeX4dFQTZpmipUaxiryrjA53CDWGNjBZckzqbgw",
  "key9": "2LzcuLKNZH2TxbxZjxB3vv1gDmGhshBZmpEDxq1SVFmFThnHPUYvwXGtYovNGFZWjDR1ciB1J4bwYXFAGbgnYzZN",
  "key10": "3WbJDyyMXmUbB7yTNR8FiQC6tkjxLX1akL7g6iitwo8rWwNnoYUYSSEJSKPrwnZHGdtFcNdTSdafBGgcai44HpYd",
  "key11": "3ntFvQo2bdcT4sHZZ31KHgr1pDmt1fnvWvubxtqgDrw56ZdgtAceuqS4BmzhuqRkNNWvpJQs66GhX29GLQvThjHX",
  "key12": "y2DGVWNYjzXLus2okDa9RbUqrQpAQomBboheCfYJVLDxNKZdKJzt1r1ti3DjupzkjCS284GYi4tSbashhMB7Qjj",
  "key13": "3iKPCEc2bKf79HaLEd6p3uMoqEbF3XDAtcZH5Hf5q7suuaGximf4m192xTL5bh6jjDMgaoDHRb7v5VBRxUPEN457",
  "key14": "2QA5UuNX9VGKVbYNHFqGst5h7Yh1SNuS4gH5ca8N6ismU6a7ht5GbDrgWxESgzL7rJmFTVKZVdRWemF1qS5n6Pd9",
  "key15": "5XqztWXfcPX7wLS4AUm8pDrHAuJfi24prkhWckpaT25QojL7UP1ZBywQ1NTxbgE6DPNdF14nyQFLYoqbBmk9p2MG",
  "key16": "ogmud5BA1EcwfkmsACzTNRGScyQC8L86FwHDB8dDN51GM5hEymVe2djZEeuV8ZPD8utopcSRYYvTvAYzEbK9aEu",
  "key17": "i46KUdQdigwQFr5ZJwc3jYJkcXEyAXJdqL5CjxqGvsfrzKCgSRN9NF89wbgeY6147aUgeT53QVQKeFUBc4K7wXs",
  "key18": "2nMbkod6YS1tBXhLTXWX2hc264exprRdS3p4okUMcVk3KcjEuk2ZqyBdNjYkQJLBgPwUy9dGxiJu1KFAUd8NGm1u",
  "key19": "PhWeXdRY6C9CZ6hXczMikw536jkyQXx7TNeEU9fV7aKQx537g1YQXuNTFCtLsBkkCvfb759Dm9qBdTqgYBMwzb5",
  "key20": "YBveseg5ZpwqVGgaDxiw3MzYMxgxV1vfkrGPN96MKbf9yXy8U7rjjYRo5mnW7Qrn25mxHZ63xkDj6LJLdfhZTTH",
  "key21": "2C4a8JY7ZVPXydZkL1VwFNmUsUMr6WGzivYjAWWyPUJZffGMCzScRpGnpSVJ7VtwUXgmLLoxVA8LqWzXYHzhS653",
  "key22": "5Brp2zdj4ZgAJPQzK4vBsjvpHjAB1LRgMHaUpwSHptcnCmjAsKzAWs63t1EkcrBQqd2KLDiJzr1bNJSEx6Wco3Ws",
  "key23": "2nPLX7sk2wmSTzEkkvpMchbkac88EVtnZHc8dcMT5fymKdn6bm8Pwpixh3eJFpxYhamTv6FakdJSNtAKBE7zBRHV",
  "key24": "3UnJ7GDeS5YiZ3ULM1AXaQHC5z4aCy5XQy9FSBWVvXLTvCCjAjKQd48CBvDoavBqvnzDbkw2QeynBXiLzKGKYYCa",
  "key25": "c3egjP32F9p3PsprdPDy2B2ZJW5wyhfbAqyNBG3qCxDsweHpK8fZGjv5BW5ZKsnP5QJFPgdkd5Xa2izAVv3dMWJ",
  "key26": "3Z3HJSgUKNm5NkzPCxFNYgr1xReWWbT96bWpNGM4dVC65XktVB3Bq3A2fv1bkKaxAHRs99TvUVSJuipcuKGDTfBQ",
  "key27": "2piCuohNBHsb934K7TVRRoKpdXx8bFEFDbAPorU2cLf37fwqfmautHsvRks8aymqQfmisNLXWWHGq4QaMNx9V6wi",
  "key28": "57d3SzYFgc4XwyMseXA8tP3NS3MzAXyJRXWfBRHVtgQaq8y8LZXiuC2h2krTBwnZNqhnDgjPCMvVmS5ioXSpawYp",
  "key29": "5Ad2qKnyiQd1mASPMBQQev8pWjv9VDeW3WzPEuuQvZyZVQT2XVU1FBSnKzGbZBdjJG2LNt7Li5yXVCXZwfBH1uhe",
  "key30": "61t8nJQ8EZ2TZXpvAS1wmKnEutHSfwoAzCPXQ2nvk72cnr96eDAfXCcC6bYK49jP4r5LJzc4EUJfb7qJEQeZbntP",
  "key31": "26HLzhJUYvdd1kE2M7sPWD2kPHL8xbidAfg8j2TNqebjsu78JskXTtE37g2xdhf511iZGkBRahEmtkHdoUQNr4QF",
  "key32": "3p3VTZJ3XroNxCMfswEFHAthnSDkvxVqnMJK168yq9eJrUqYYB9yKqqQxMK54Q7T1tJKXRHP3U3QgqsUwSk2LBU8",
  "key33": "41SHgt3Np89o6gNBKGfFKNcKDVKyTCDcJ4s8cbQ6u8yfYgxV8tknzdhzfjAciRhp3dx4XC4eurfPt3toE6WwYWx4",
  "key34": "2RL2sZsRtE9KMtJTqoei4GUC8UKU5riNDeGnaEe3TptRJf59sZENm41ophvZiCZ3UGh4m5z71hAEPQ4S16eSqsgZ"
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
