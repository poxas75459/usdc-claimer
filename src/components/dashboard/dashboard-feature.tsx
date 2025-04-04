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
    "z18ABQ2jf9U6pkGz4mwt5v2wcdH1UfbEEp5wW5pdNjKMxVKmvgDphcSTpN35CskTXJ85VV2dWdbF1wfZxVWxjwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eVNJimUuxfM4aVWiozgKVxUcaZbgYKKg2pn2K3soa5CxAQAXyVV46TWrpLzQ6edTS9ZRTu4o4tnggritNmXvHkV",
  "key1": "UzehozRNjrsfCp8WDSpmdLVQhAVrtNRy6bc1cQAkqKfS5kW2zfacHxbTVzcLeHuhYAoSkyX263SrxLk5ANvCM9V",
  "key2": "m9iS9QQLNwJiTwuDuDfhJajV4ve88uRnMbZJo98CVvCW8U3Qwv4V78mMQGXxa9vfEYa8j9W4uaWCBYgntUxQ1P5",
  "key3": "95adx9E7YiAgQUMaeoY8RTFe4hfrZ1r5rrktvkUf2xaE8oJZUggbFgtTyJUYb4VQcWJg7Av5wUKd8ejPpSQ7TwP",
  "key4": "3M7ndhZVGyrd6gB8e6gJvvXsomMqgSkaXVaiJK1xHCkCLSpR6Tv128D3GTisFxzyAU6uTuGiWE5EAh1gLwRhiYPA",
  "key5": "vxZVLiqfEM5C8kzzoFxv3Wpx5ZdLZexXnEANxukFukrCawJEUMEbwdhojPc2YX54dmoEmUUiksy1AwaaScPuYza",
  "key6": "47CSgxJteBvs5pD4z5ba3kVvY3mr9ej1vpgKf58C8S9zyKovdUqewHgPUfdgogXVeTdpm21PXLsAMMfzFeuUuBLz",
  "key7": "PUt2S3gzedg3i865FUGmp9Lhwkcd7WAf1ns2a4x8AA7bTY1fxcYxQGe6UwgJZDrQQKuEbHATPbeyeNVJMfbXU8L",
  "key8": "3YucS9LFhWQP8pHvEtFDva3sh6tQ24bvbLGcmdVcTQHg9AwGmq1NvfNCeuL5Ucg3oRniQ9UL6f2RMGA2Zf1aqaHA",
  "key9": "3DRau6GGdJ8ihXL8gj8z8gCLbKXYx7tDJkzNgrkximzyNbvLrG9oLV4UzJKp48wppoZMnSa7gR2TC2ntgLVvq26h",
  "key10": "3zx4yd4oYkWRs4PQo6fAVCBXC7BT5gzaTHq6bnaXDFb7bZ3pNrtrjpVhFq64PfN2zvcsZhjWfHLpaFdeWVqPCpWh",
  "key11": "3izB2tMFKyn5uCfcZbX54VuoXjZPW4YoUn7jJViwpR17hKapLVHLv5xB2QwRq16FLeGbgSRcpxiYjjyKs5JRS6Lq",
  "key12": "49WWjLpBYwjKcuQUCju7rWsGP46ZWzXNTDnrG5M3qWuAYGDgv5xuRFNyJqRdMkShi7nTWN5hay4d1zxQPCVrB1SN",
  "key13": "aednNWmugUM8KN6PyknkPn7Uxh9CgVUxq7F4zohXWEtbhMpJrUqdtRXoaVbFTPo4LLsw25PUd3MZVGUL32xmQHQ",
  "key14": "3mLcnSdgwfnEnxzE1iU2siYE1EHeo1M5Wk8AFSLhwhVFrCmpNYyPqhib1FiQjdjh6dEB9iX9SpGvKJsbq6hcGN7L",
  "key15": "5S8ZGNDyeDbJ6koxKtZA3hQ5iZas3mAX8gYWbo4NifZG9xjijb2sfPazPMWgBrxJA1oZACS3suQWkSio5YAcieCG",
  "key16": "4C7HB2EykvJixsnjWEicYb2DSG2C6W6g5k4AYeJsLP46cZLNLGQdu4JtbbzUFxLCjeLpJm5rMCTwhCXjsHEEAR8b",
  "key17": "pSCuVcfduSzQexa5o2asrSasd5kUjdtrQXSkbJi19Xr1xdN5FVubwsCgCn13PwfeW8Zi4oMVJx8Y554sVPtyLAE",
  "key18": "4psntJaz9KaVntxAgqVzQbnQprJJwbZTG45qqraW9nrjrindyYAFWauQsYmpgTytkHCQ63RhchTJZM5jU8eAMGrX",
  "key19": "5UtmSUb6VvStFfJmmi3j2rDvhZ2iPstJf4iX3bBsEL3o3rS96n7EvJbo1u5DSFfG3GafEHKzc9eFbPo4AwVY8BU1",
  "key20": "64JtW1PwLXVxbp9oXGxG6aTEdF2BjptsJRfZZKzT4628QHohT3E51MWK8bztVsA7xLpkSJAMG5vRZJSyuAuQazmU",
  "key21": "v1VVZibgdvVEjhPh7EUZs3dYLJjGxsRJuniPR2UkYEkxXgsbmc9uNRiPdicP18eLQvpLcbgMzTH5CxrdHhnSjap",
  "key22": "v6bdiD9sia24VQUHMnTtRiEihAUzY3jhKtjb5ZdH8atx2WQ669aCpxaho768A9ANkeXK528MJFC97MesQZFCcjF",
  "key23": "49vTAxRPSjPHz4oW62XTVhauywbq74hLzr12Z9tba5eWKS3HG658F6W7SktqXADmm5Kzfg3aVhwEB2LJeRgPpeG7",
  "key24": "4YrcerLdAnNiBbMCKSxsQHkWQBu2rxKJD4i71PqcaikQKUej7rcKjUWQevTkyNE3XZ8AGgsNFPExRwQury8zGxTd",
  "key25": "4DNgcwMd3nkbwLfBTZXzwtd5xh8KJbhkJZ8i25XnPLHKQQ3BFJtxY48Z3Ur9BinXqeVjPqcoKfDPoo3GVrak356n",
  "key26": "mbbqjV7vyYQDaxS39GrPmqxcDipy1v2HFHKhiHjKWfmsqVQ2AfQVujvxxeG5F8vjwETrsM28yRAuX7KsiS5j2Ff",
  "key27": "4ppTYGPLoVCkf9F8N54rhG1NdQjj3iszggHh7gX56eyLamYiRWTk1A7QZzauTn6upGZKU7eDVrj2uFtfuxVK76pP",
  "key28": "4DR3mcAMySoCxucqqKqWx7rxLVFcPEvjeMnCU2hTzTkqbsD51WqCMkAQ2w8KgAZoTsji9Nz67Ae6j9QYCKghoTTY",
  "key29": "4xq4ka5F74VSUHBttYq6v69hoTzMwos5hqyyFDxg7F2DUtnq92k294ZSRjGEVCNvVh6TUr9sKk1pFNsmtRjZ35AK",
  "key30": "38nPHXDPvGytBZwpVEeTKwQZPeZQSkkqQFjhoLikAYA4E5hGTQRn4W3sQHHiwB6acV2psvT1YoPNjFv1Eu4m3pNm",
  "key31": "3M274ihMQqbXVtACL26vWJxxjXqbDPNG3e46hcGnksoZAL9duVM9DZuB5stsFNPWCAMLXA3jR9DbuMyNLRUkkvg2",
  "key32": "2QuBJcQw2DWfJQqqo8BZ78ThJ8V5r7K2gaASY1WypjbNezSbUcpo6DqNVcZ7Ktm1bSnaP2BEWN4zV7GytxgtRyr1",
  "key33": "5sGnJiyNbJkY18Cndcx4wyhiPc1sASfKi4iHe3P6HoB5vv5UT8AuaPT2nEL4Q2h9bVh6qcpVWocgCw7J9JztJxuz",
  "key34": "4SuyCsmFsCDkzfm9efnFqeHjzS6xtbCgGcTGRutz4W7LAWPgtcnhXkm3FQv3VDEx7AGH9LTbbEmDkFLnjKFAtuHK",
  "key35": "5zHws8zRmTzKJRjDbiK7e11zSby7ZoVDYweXYNZazpx52wDnAxGo7UC6u8aqt82CtBii8Kg7e89LDNC6hAjBCnPf",
  "key36": "42NztdCyK5MAHHzWBk13FUAqFG6qXbp4WR2ezdWy24hUdUa1sZv6z63h3GGyNfcfPgqTQofppWBhf7K6xSeiNgK4",
  "key37": "5pAQRWmSGtHSZDqpmDu3woqjNnhSEe6xbHTj86NbZYLRCXZwx8Ujik13hvpJLAwqKevxyMTfL1af3BgAX5Buqra4",
  "key38": "bj3Gy6pqRSprbZAtT2CHekMp2gsTzxKZ2iQ53wXzg5ETMJy1qdkrnJGot4ViLDiGzdufu7LvNFV7VJ2CkNeL4hL",
  "key39": "5iugVuihVX4C2qQHCD5NtsCDtceTw9TGnamsAFPvsLzPdpyWu9YB3jqLEbj6SY2BedYCxBifAuqxXvdrwxKqcSZB",
  "key40": "56RvPhz77k2PBjsnBEoV5SySqUdr2b6f3BBqq3niVZ3KrZRPxs7nBmNH9W5s7k4vMWvhMK2Nkn6HBsERDow1NQh8",
  "key41": "4CN9zkDtrSk11zH1ds6AQvkoPxYkG2Hnghk1DdEWbw4u2r3zDPBEk8fDjFeTUiP4KrkH9XkoQqnJfTwNGZiTxoQM",
  "key42": "5M3VTZARpsLEUw1eJW3bKhQwrdUjQNTV6UG1skGEgtbrwiHkgGNwszWFYjhMtqRxkwSwr91KvThM92ufm1A2Wx2T",
  "key43": "2BMhWdZGZi9fXMZ6inzE4FfiFL54DneaMmPs1DBjE4BDzewmSd5i9pm3jfPYcwh9fS9iaNy5bKwFc1wpRwWNLD8",
  "key44": "3WZwhGvhmffuw6yLPjaE4sEGAM9LiKBnyo42CsbZwwYoqVxkwS133PGGkQHxomQUnboHmGtg4QrUDdrKsc6yAHmb",
  "key45": "4GncoqZmZJVNwRDVF9epcGRrJ49He3MzREsRoEHVPAxysqng8wxrCWNgo97FXGXimfik6N8Rv5Q1XZ1Nw7gqT4Lo"
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
