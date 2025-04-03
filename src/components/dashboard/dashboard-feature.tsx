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
    "4ea5eSxDVFgoXxjLfqKFBBZzjg2erJ4yT8FBkJxHjK4S1RJYK1CCFMBvmn1i8jEZaycnybk3EvZXYJG9x6P5ZHLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KZqkYTh4YykiBykN4pSymSVXuyF3PJAKw5vMzgG23ELph8LTd69kxkM7VrKVy9p2w8FYZC3as8wwPg81W53WfUQ",
  "key1": "2F72Gm2axvKuKPg8AQrWToF7CXkxbGtnUudsd2Mz66z3TRTG1S1uVyJW5hJGA7HkN21TaMJmpJei4TNaMyH8VhCH",
  "key2": "3aYUF4JFxWUm8s91LUVxPLrRKBT4MVcV5sHcvHkeuXk7kuT2izDZzZmEwDgH2673PziHU18mBkgB6GP5B8NETsRE",
  "key3": "bpunWj2FBS6vUneqwwuRoZTfDFYtYaHPnifHK9CjrGbyoTz9Sp51ZLdHNURa1aJVhWjeN61yD9tsS3pwoJNV9nr",
  "key4": "3qioTUwrUs3LXYeiGxn77HWqECoVTkQy4z5ZR33u7UNQPsVUDXi2DhrGbZbyo3yhFFeQjKmgtQHq9ygx6MtrYASF",
  "key5": "3dSN4M9avTopPvUQ38941eRguinBqL5Q7bh9TWuz8cSyHTk4TgXZMJiEgi9dFT7pqhKzeNYTrKQPNcvEysPSjJpL",
  "key6": "4CF82NKLA6hrE87yzfCnY31EmTMo83NAkFiASt5ovjw8UpEJTnDywvuiBFnq76TuKjezcQ5CJyp9LqSEbktbmGZX",
  "key7": "4cxdyGzS49Z6VERHfxSGSrEjXUGL6YMTjBxmCqDbZja5rurTX73p5JCwLT2Nfgk8vqU3AMNr46b3ZUgQwsLF4aG8",
  "key8": "4sa9qYd5oXYMfDWNKQUz9WaLaMge1DQugm9Evbr6o2LZdoVmmQqeP3kFPsXHcbJevo9ABdZq8xYj3dFqGUMaDgn8",
  "key9": "39ajuCmuHdv9x48G74yWTjuDynkxZStEDraz83Z4W2xVpib3U57NaSQXsDobQedTjusFaQfCwbfKvnMqJVy4md9o",
  "key10": "BnCLkNt4MiBHGt37cpxru5JKfezJphv35zQMqkbFRcerTtiwyp1dXQNTSycNbDCLaiQj5anSi1KKsid6bzHVWaA",
  "key11": "5TiSLCM35ameJzQXsNRExFo7KzNFbeakYC5odKpkWW18QcVTv8AJSqHbxWECzFybaQiCaeExGowT7aFGqeUAS4rt",
  "key12": "5bJUEtLmKcUrnnzXL2z1ATPQnsPkibDVPP9fY3QRq4cwpN5VZSusmoNy4ggbPGC7RHDEKo3ox3qNs2fP5R6ScBj3",
  "key13": "3o1XCordc9JgeX96nXFWBnsTditk77npT6swo36ZmWGZ2mBVx3d4rZUWTCYiUTKW7j2PuYxZP1ifesonDxyUc2Dq",
  "key14": "2R2BYuHs4jm71hBdskXr7pKHzyH7WBetgxoKBLtTPCSVihUyo9GCVhEnv1dSBX2FW2XTgMmf28UUfTQnqnSe3k4o",
  "key15": "4mmAXSN6gD4yJrx3GmcXyWgiXFHDiveYajLmGixdF5FUyZFaBR1gnbkECCk4Teg44SkPe59YZApBHgdmxBWqPFhK",
  "key16": "4ChuqfVKCc2VjQ4pd2WcTzu5zpE5jfurkiSiVo9xsondpY1BS18obpoBzuAQ51f5phDH7QpbkXGjazZeBXDztfTN",
  "key17": "2ikzLXVB9GxGny5b7PmLg6bagoj5NQ4HxCve3Q6NF814A7eQunaD5oGurnXiB8hc3kFEgtafmFnvxD8VyyXFy34",
  "key18": "4maWAFYyGwHSoiVseuvYt43sxFDcXwt6GEFuvyWeaeAtfbN8Ji9XHFAMj4BREz4EGjPkjtjMACGWRHpgdAYGLZwZ",
  "key19": "5jDFSqimR9HzXBb6fchzTDbMVc333jLLZ2umNHpjPWpewcs72UKwdP71bSiv3thjTuevSPFoxraWuqSuCQnkD7C4",
  "key20": "5TdxWjAshrMKMw9PDCsHfcQRPsk3u4x1k1fyfHfDFveBUFZ2qrkvs87oGNEjuUQFp1fESAcRxyy2YUURBLYKLzNj",
  "key21": "3tdH4HDkbNFYKE3BCtnDFJhNaSNikRbFtHWGxZJeAiAB6eTtypXnLvaXQnxs8F7kuRPZHx3BBjygyAGgBx31bGMr",
  "key22": "2K6BBj2kELEpoTkEw9fV1U4jYFXFxgTp47PqthVL1aVCrk2SzaHzSXaSxMK8CnZUK1rA5DTjuEK8WJRayWfgAqpW",
  "key23": "3kSvBjXEq3Mpb4o3McLjcTeHaQQgXd2JpCx8CWJrG37Pbptr7KS4aeV9Hx3ptaYsaQY2thLENX4GqDsmue4jsTu7",
  "key24": "KATuDBxLcoYbUuaxeuv7sFmJLx5TEDs9LW3SfqPb1hY9Sqgv2zf6kDjd6ucNP2SkVkRSEmqESfDmTuD3pZ2sioL",
  "key25": "2Ts4y1XRfsEeHjBeHgB97FTbWFu1acWUAcnEERcxwdJTqdiVmMEMGNWE7gxo1U2YLmaMhojXR1rsb39Nu67kSkSn",
  "key26": "3C325HZYmiwF1qYoxh7vtNMspEqraD1hbEMa15HJ9AQpabLKLmaRSCHukD6CTPkEj6eTLaHC4puh3ar91GP2q61C"
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
