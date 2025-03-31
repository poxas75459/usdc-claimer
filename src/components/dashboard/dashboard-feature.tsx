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
    "ds1VioB7ptRQMeMgvUgmfk7b3n3F39btG1mVKEEbL1bVBKaVgPoqvAKK4yydsvTf3icfxXRmrpLrDNZ7zheGpUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29HEaqgL8K73JW9QDEzNXDAihAmsK6KrcAbFVD2qc2ocZTBMFsaC4MJimfG4TLkKzGPh7fyiVsi3owibwjjQhUqa",
  "key1": "TttoyHQYxvA8dBhbFpgG2majKWe1WMWfajTJjSWP1StvZYxLtQ6De6xmL6ZnU9Qj8BPJWRWN5nDRaGp2uvxjFea",
  "key2": "3fSzqobijF5wGaa9iwUMLDf9rc9fAtF8DoFo4iC98t373qmANqzSrKBpSL4L3HxkAN2Xy3PUFfGvww1BjoquJsqA",
  "key3": "4TKLmpmHZxJeYf2EUHpbztyS4rkZx1Jpn6k1aGicRuAqq6geJknLpJWfu9RgQtaEhsETZnGRVxKhWKxwsHMG6bSD",
  "key4": "say8GXE2qsKngbFUwhAStGT2akT5ufd8qv3N1LHu9XQX6NhsLVZLdNCvq6FookBKJcJUbHcXT9nx6rw5rVwvksR",
  "key5": "61yg6k4qMbpzbfYiodsK8XV16YgF4yHTDG2GxCJTkVoJC4fa93Qk1TiLA2aAXVDBKGN49cSzcPbaEUqhq99qw3nm",
  "key6": "3F3ggpBHAL2TQWkuE2nwXzV1npVErm46AawYwvS7x6rckDyUhhm6neT1BojZaqsajAo6trQsEdiJE3ZkKQVBFDpN",
  "key7": "5HnvXzwSbEKQDnVwaTc2brzRUb69WUiYdRFwi4FwPXdrxDs22kTMEqjQHa3xNGrZUcru9bC9PsGWgnk5eo8Aiw8F",
  "key8": "65VYThtdDd7zWQ4eUsqUgDpwdptVrFTz6C4PYrrMNxQtAfSbiiGm1CYSdQAPnuy53HEHXiJ8BPtkVQL8iCvoCBAH",
  "key9": "4kPzf7TKHZN1BAfDeBrdgaWZxwF2vnJvVUVUxhAxmNAL1v7zq5Q2QAycRjxx6tURwcGEWHpZNXY7kMdL79Hifczb",
  "key10": "3c51SRjapRmDya51MawbxKrDVLdRLNunojvN2t946Xq5WwqSAeaGQUFYrjfphn8whuTPDRrW9JVrkSS4GoJei48B",
  "key11": "2bVJVNgJkMh797YgWnb7rn3Z84vGf6rDAFKR3cHmieg7V1qVSeRyxfMVVkczqzAmX8gKm7rsvdGApH6uBP2ikZwL",
  "key12": "2Qp8WZCkE95owBJ1FMsxHFemV5FBpVtT8fbddfGtTkNCvUAbxBUV7n87gJsC8QJBrMEb2So555Y4FFYhN8Qd3STJ",
  "key13": "5kpu4DwdNCmah5P3BdxuL3MFLxk1TSNXM6kzQ1XxrmkkrCucMYUJhH8b66RuL5sGR6CvrniPypzVHv8WCVwTvYwC",
  "key14": "5YEBTeuSD99eoakeBCpnBnKvUry994ErbBX95GvQTTpLukAMBXEWrBpxBFAtbNnUxcKyzHwpXdsj988qAX8Upo9h",
  "key15": "2hZmxBfyUADe2uzCg8jhdTgFgRMJXwwTVXEXVDyNXUfKN4uxV34WQcP3y4BnA7vW2xQeryUaNPru86jwJc541qkE",
  "key16": "6sDRTxup7obJcugRYRHo48QBwFive9AXDdweGmCGwbGABzjhd4d2w5SebHrE5kA86UeCCpgSwyvSgwYqhasoxes",
  "key17": "3CqsrLzSpUbhwo5kNbcsFs4odKpxrD3aQMiitBqMA4vWusWKSdabsvHy5NSP2geSpJ2Nw4hSU4tBaC9zxeEnjKGH",
  "key18": "3oz5JEFkiaBMSkeexccHkNLBCbvtXzcFbSrn7VSGoSwgn9KEsxHqB5MQM9e319T3XPVC8fQuvMeeSFhmxKzVxh2Y",
  "key19": "2ah741URVG4rXEjbRzYvteCSm7k7atZN7gGU9HP8VqFr74HNdtK4qgegPuHAivMrzjRe5ATLte6f6JW7mimeBW2F",
  "key20": "3JS2LftLSWzckq85c5vtLMRtGMzKMsQ9o1mjUyaVCmLi22d9QSXqYNoTp7dnzDtPAysGq839aaonkGP5HdBDy7Fz",
  "key21": "4Yb7jTWKr5GTGiW6t19DaNjY5pJ1u3AQT2tvuPZc6PxZVESLpc5LriN4z8pNg6MKYgpeaLfKtbxmTmmaBG5v4J9G",
  "key22": "3kX5qfVgGRuN9wgY1v8JhsrcyiDT5NVi9vjgFTQL39NkC1mxsouXmKtiCqBDGKS6Wbc386btCmc5gT6qpdA3dzqY",
  "key23": "4qePvbKAguaN92EDmvKHGR3b2zxbFRCQuaupyLw3piE6oJm5pFD52B1SQkA5gTQ2WZuQd9EsFjU2qz1A3VdTeTHc",
  "key24": "3LWMN7dqhR7JPBW7CxMojXebEcVGp4Z9udesLRta9drLnCxbSe2kAnd2VXsMg4AyE6RbLga4M5Cu8JqLBHds6DgN",
  "key25": "XNKhCAYpamoj14dVCwP8sqXzWUnkfQPwDgHRcHvcoMQzaE4Rzng7AxQwTqyCtF3qxTTRMiFdzBxZ6DnCdoLhoSD",
  "key26": "4ZFyTvtAzyfZSHsbkHKuSskoBHvdHayYFxikbuvSJPRbbpUK8x1ZC61o7JDK4DRyQpkRbf19jTcTiSVwg1sDz4AB",
  "key27": "5h94tTsQSjAnFHEZNDQFckE8HKcZqt1Auogs4pdyYTFGEwRJurXEaCt7VbnzX87LBNwXwmCDw2qfMutHffphDAbz",
  "key28": "5SiMvJttgwpf8v158wGcEARfzxnvTiRc9EsKwshoUitMhGWHjfRodYhGUKEgf2rK68hj6wtMfNayu3GUQnwda9ud",
  "key29": "2pVm7eMbUxcGG6boDVD4mUWXENQusf2LnhTnoXckoyT9QEB1vwbUj83cD5xgF4TFPTXi44UYDppHaWQr9aeQsV6h",
  "key30": "3qzHKcTgzZ7SeEHZ2tut25ahSo31k2gjTscCdkLfDtdFf4vgus1eWFaeefX8bVhfn4T8QCv9AkHqxPPhii8JA7dt",
  "key31": "3J2D6W59m9jdz9n9faEWT3WpL8xJV9PSMqP3XKCGFC17pxZ7bttZDjJpTs3C6By8bTQMqESCRHYkGTZGDZjS3YCF",
  "key32": "3JQ1XzGqxeBrwyNm4hRPn4yAeui2KDB5mC25StGatzo9P92WtoAdNzt6Fwfs3a8DN4Vw38MUCT9Mm6T7AEfUpGQA",
  "key33": "5y7qdrMSgQYp2n4mZ3tj3uNjYTyqXf57zBSeAdkX6AuL2cCKEiet7cQheFX2BgboWHDh56sfEvZuK69wEUV9i4Mr",
  "key34": "3BU4aTpnZXxzr7LXxFR6g1BqeuErqrtYbstNMPatpeT2YMh9Jjjy3FUvpj96ajYRUi169tiGWAwD47M4D6pU2gPf",
  "key35": "53LHJmbw4eyTcaRvF6abci5bZAy74PMAk9Ks55HiuN3tsh3H3hrvHx1Ca9FHr5PN5Foffds1GejSSA8wKeS4h6v5",
  "key36": "3VZeogUENt3n5YiZ2S5VHr9QcTeajypw8C8LrurgxDCnNhz11TDm5U2SdwREFfCLWJV7e839N1wTF2zvEi6q2aPR",
  "key37": "419Tdoqe64cpDZnJeXVAocs2hL8HSgeA7upqF1W1ZTfSrnPgJjBA8q9VEqBRrzfMA5cw18rYw8FNmEmbU4BFPXi2",
  "key38": "34SnSabQ3u1Bi81spuq3iFZbdbmn1jXF4bNn6QCBEAgCzp5ki5nfDZLWUajkDtxHvNfATY5CsmbZf3PzgsAHLK5f",
  "key39": "3nZUz9FmDb8L2dEcLiYWhRzPAYaCKJ9agju6uk1StYx5peFmoz4uWqXvHuYdDuKxgNn81EheimFkgK9qgbEJj6cB",
  "key40": "3QbfKburfpMQxZvGEFTQ25j9FVxRvDT87BtEhbJT7cr6UvLCc2jsPb5bU8FTGSGzndszn8vvSyCBrtFSGWgETFgJ",
  "key41": "eyHmNvg8PBYTqBMwiAZC5x38raMC7hoihcFgQSaFe3x5ot9BqGKg4j9H2QWmamm8ZYEbUgcrW3gRdynnBde44LD",
  "key42": "4bBG8y6v8FZkKYFPSGbamRkbAxHPQZAb5Qq7smD9RSCUPo3xzHVeqJgV4KJZ3WZpVZRnJadcdFXqxBDvhDQXWmRX",
  "key43": "2C5qUvPGmUGaB9H9CGQmv8Ti49E3LH885iUgJJVcbLS6TR5MuafaKCowCicSvcEy9ZrtLVhTCC2HrWWWD2mqVUWo",
  "key44": "5MPxcNSy1Q643yvVrnmvecbMa3ji7hvsNJqtjP93X73wwHibcnt3sXxSEAsenEaGdKMqKc7HemhPC3A8NmvhvRui",
  "key45": "5bL18ojwSu9VjNwquKG8q1VEzcb3d5exvymzkjRTp6bsr6XiCgUYSv7nJkBxsj1pwvZtqopzc4bgKmaPSfqESSMr"
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
