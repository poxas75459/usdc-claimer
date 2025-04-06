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
    "5rQW4o9STcxkVcVWmje9om2wDQAbUpdPcAYCUiPkuam1hbNwWhaQNNbKR5PPmPmoKvVYUPg9UN3Sgmdt3UGcDeVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RyRfPVHMnWY34m8Ztx6sF4Bsy7xSn3FHaBFSPg9ngKefjWsZa6oaY93L8cJaMq7pejjw7fjGSZa3GiDa69tvHTB",
  "key1": "5BHfgr3s9XVY2by6UjBTCqaYbMpKMJh6WiuEqyFpxpGDDxzsPKmLBNx6zaWdtDgzTfWzQ76byoymd3R6S77p8We3",
  "key2": "23C61rkoLST1rxbsH3FvgNV66RQq2UpniD5Weeva1n1GpNLcPuCArBeLoTLMQKH4HhxYiC8pB96ZZevkLB8tUUii",
  "key3": "Dcp53gD5ft4mxLmwrfnzDhKv9SWjyUWxShhwzc1XebF8pJEcaxhkEtXcJtttpcEL3bS1SM81H9L3swKjor8afqM",
  "key4": "3Ld3K4PQkWAPfcpQjiWhPSkfTbR6cKZ9c18UGafeBq52pG5rnpEfRtfciKfFem3rMEVumTH5M4qt7PdYp786Lcxo",
  "key5": "AaF3pRjfSw9QtBPBchS5z2Ds7MpGZbKXN8B2qrJV2yCvfqL329873h5mw8JP2gazNWGPhDouRERYXcEen2thNhQ",
  "key6": "scttSoYSxk51pRnrgSdg6BLjfxXR46zWFrnBvDQGmVoAg6kMUkd6VZf2KYBJCG92iWpPYCVsg4bLft4Gs43hJHp",
  "key7": "4VRB18ieohBAVFRhdoWbBcoWrTypFL4MpcsbQ7Et4fbkUX9XuFQGdmru2Q3dxcbKKypzQzgykthRZLnC48kbp3Mg",
  "key8": "3aFoHSjdKTu6eoc3UVy5jcSDkKNftxncpspsjKjWCMbjbazQbeBFUkwXMArTje5HyBpzsqcb7BZBUU6kAbw26SFp",
  "key9": "5zowqLrvqiRWR5iNPx9bmSdfcnf1iWoamHTd87mJ19KdxcfaNfZj92UBPXq53hqcmpHbpUM5FBeqj1vvXBvm9J7B",
  "key10": "pTQ79WFormnpKcoZMAAiDqqFuAuaLbgkTGL2MBwULLdYk23kYNtvVDfbVMSfhxhQxP2DDeRfvYtPgD5SHaEE3hp",
  "key11": "5bq5UzxpYvUREto153WWnpdb2xWBBXktDAw4G8BMbFZSB45docPJXY82FEHEvSaBdMHkfCfKUs1R64T6e5FJFLya",
  "key12": "3vz4HBTbc2dAxXmBQoi37Zy9ZvRJxCjbp7MvB4SAVxSjK1s5dXCdSeHNm4M7xcUp29QF7hYi88hyVgh14YLvjEYG",
  "key13": "3pDfvjoCe6riZjCBwuEPaLga9Uf38EJ7jnsrwFDPSnjQjmSUh4JYT9wJ4RZ5Fb53fPTkNP8m2cVsr5yXnsQuFWvj",
  "key14": "2Hc4yMQ5Vhq3CVwucuxVP4W7tzJF9QtAxLiSojKVT7BKgpdVB9xwSk1TsM3Zy6kqrRsuG9L6MfugT1qi8BDD1ktX",
  "key15": "3UvDGLCUmPQVUTuGqmAiN7F6tbam1u9EwXqiaxrsEeSwHW3Us45BsDNPsnffGvcHrAJgFrLuFTDM44HVEaCiJ9bL",
  "key16": "f86tsFLGKJQoMZ2qGraNNMSaZgtDTWyUzm2kqNWzNMg3jEBfAcJudVD7eqSMmJQj6op5KakcfZkQMGnkuBjrde8",
  "key17": "2Cf5CV96q7pXL7Uv4N35MXpt9LpndT5dehuBwkuXmQHLwnfc7Dfm71myryvj9mf1hNxLUWWKJpxynq8cXAGHZGq9",
  "key18": "3mz27ro8iPWnXAWfhZ4GrEZxmc5amy8Vb2CEJPgNzjPhprqtvxNsujEvvdzipQQ6imopzdm559rXbDtsWDdoFx45",
  "key19": "4kD59ucNJhaG8cfcewTSFaoRouNEeeYCcnkxwmoB4R2Rs1d7pUB6YwZg6zp8jqfjXHA82VkDn3ENJ5Xn7DJnQ5rW",
  "key20": "3bzRjtft71oPMQHyeQCscRjpFtW2wjDs2WRCSnZef2f6hSSMgdRci2wu7iaJkWKxqZ1H4uX5LKcfweF1RxrfeEc6",
  "key21": "5ws95vKXQ224cqM4myM92HnoDhHVVLKm5SbaeTsqCBwbGGkXA14j5YuwEV1viH6j2Duu9sgZCjD8QPc25UTqkVw6",
  "key22": "42PruXt3nHzb6uUv6C1MheJpZLc1KUDXgwuz4aV3xEbn27s2rcGqhUWBMQ6gLq5aETySHBiLDKGakmZEBaCyyYEK",
  "key23": "5V43BA7n1kPaLUVod2DdTYNMMYDc9Bdxc89sZJr4XZy1sacLXqL87GPD4V7JTVNpBuWymfrxB4R7V67VxqAUhWL1",
  "key24": "4xHhu8x1adY2bE74mPykfY1XG8FpjvsoTUVN4YQFZ7VhkbpCC8nGCVxxAkTpAnrgiFdXWeVXAmqVCqQMoCVSzkka",
  "key25": "3etM5Jq82fD66H5kTT28TSrnoBNXyWWZbnWc85WCX1LUDiwwM8P4wrSKikkXFg8XvqfvUdABHXCV64PMjDsFQjQ",
  "key26": "2PyBhHfApaHjUKqEazVbrVuyuje19KWAGFfuH9aXZFk9WyC4FjWw6fprCMaeD3RVSXF1ENv8fk4P9ehiwpsobz1q",
  "key27": "4PNXZFh7k7MKdHbwecckjNNgjT8Yzq5gY65PtCoKPh1JcHrRNRGbgLM89bixgwEqWBktxUn2ziypMFSGZVw2qnE3",
  "key28": "4AQwewTpd2k8G13H8eFWCeZEvHUpgAmEi19YStp61FFfrtVW6r13ELQbGMGJMyYGYRp5wvGF3X4TEotVtfFSWvMs",
  "key29": "4ksfqHQnyojwVM5VRHzfwLKWncpHx2C1ycTMAmbNLsdaLWB8ZuxegQbZH9rvPTJyMRjadj6Ka4XP5KiuG9DyQ7uW",
  "key30": "5Ssbg35MyBxQwZLNPQS7M9cAdYzuWFER4R1wTR8MCLaGyy8JeyCMcS8eVHHn4oU1PUUBn5hJ8rSvLRkpPk5CZ5WZ",
  "key31": "2CJabpxgZXDfQJvSJeaJzVRGgnnYx3bwQPgfzBTBHdkPDgTZKGVrcpDmCEtPzXHkfveoyBEFNu7WBU8SDPEeUJg1",
  "key32": "3eJ7FRwFWCAd5izaegKTh3UwAZ7thbWXkJq3kVYCUmZUq1KbPsvvZLjdZ5Hnt3uNouC2MrMkfqJNkDD3Fh6vUq9F",
  "key33": "4uNqf4Ha4EetggvxfTZV1GaH6rfm2qFamCLBgV65SAYnvbZmRUw3ybbJoQvFxr6EMNZUSp3zrqTYDvRC9VBmVpa9",
  "key34": "yLZvqYopDyFmYfNNZGyYL3pAHUaxVSMk22n29oM8WFaUXNxXFzaSRPY4UPf2t8b7ESt7TZ292UM9uH4PeWKdnvK",
  "key35": "4Cu3GRxL2toiHa3HrCT4RGdepqaXx7YY9qNM3ReRE92bc9V7AuuMV6XvNw2kHT6dkfJEyBb4p19RShbF7zThpVUx",
  "key36": "515JsHKTDk2RHt5HB21SDHesJKV3vJKNtmswQXAhASQW7ftWnXC5zbP5V7ttgrWLBXS1xSChGwzQ9tVLiH69Vhna",
  "key37": "VAZRvvJgy7brR81Avnb3RCdZmeRWVcaQ6fPggySoAznehL2bg9icaWALz2yrR6TvX5bfMuVu1htYw8hYyBWm6kC",
  "key38": "4LFpshe9911uvGLn8Xo3xVmTK6iqsFJrHAvnW9nkepdze6pi8PHq6kru6XXTEuhc9jKD9LGDLAfS6evn79C5jM4e",
  "key39": "NiDiejnc8C7L6HafLou8A7K3FonSbfWiQXMHh6BF9KwcQEPP7reg21qyyNekX9fFXadzqdh6wmUBr2ZiHAgNham",
  "key40": "2qYTGEMqPx2tMsCfwL6CHJhp64LynThuMbmop1RLSZtn7Uhm4Vh7hv2YAh4yZAer8iptB1yWy1qnyYRMXxD4uZVe",
  "key41": "5sf6bb3QSEuGo3p9D6y2ge3RYCsmQwteicVwH4a1r9nHCq6dAsgcKRtVCtjMqLZg2NSyQjdhRotV8B3xN9Dv3Hkp",
  "key42": "3MuMZgqJHuE4natuPNX8pgPKoFqSAjS9emTpkkGsVjGQYGdeLq65ipnpwYaAmtpeJeLrjanoX4zAaB44Bvpbukvz",
  "key43": "3opdSPCmE46PoYBgrrcKk6kXhF4yAD3UvfB7soBNfFbaxz7VEtkYCNSBzEHNaQXrhb6fdSGDxV5y3LNo7yYpztMf",
  "key44": "2hFdpCLvNv1SfeUZy9vwEAX241uzrv5mdrFRAfR5DC65Bz5thmvJhuum6zhMjX5MErnTxaYor2mCRU973wabLdeh",
  "key45": "jWTuZUFH5bJnh78in4yeVhuEUa8TP3cTJkhp4X1er9PdTJ1kNJFRgEvKRZ2SnTdkWpBFqZccLThTZHtoUFYQRy2",
  "key46": "4whRrBsnxiEUurdo2f4BpREx2uw8bjXaFjCaaqV4gwVoB4PXgxpoMxu7eGatT4uQ69ZfhAyHfQktkAK8MbgpoKj5",
  "key47": "4DReioR414Yh7YFkWVE4F9sdDsDZDCX9BAP6LY5Gb3Tnbj4zLM6PhEqvqh6SVKEGD5Bi3jDtYdV4FuqRtT2qitML",
  "key48": "5Yoih24zk8y8shMHPqWoxdnKGwA75xtSZJk4rEvLX4JiiJeMkU9WwYvtvjCmXPXHPBrBK1MPcrDx6kwst4RS8T7T"
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
