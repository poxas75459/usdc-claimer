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
    "2FbuqUTtsr48YTF3qRbLB2ysXWwkYyobt4ab3UijVsMPH4riCSVyQy71Z7QK8xXCnkHyjRV3P55WdexMJgZ3DZvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qYK8LTj7CxuPgcFWeHeYmok5ccfHLvWqF9CdVU4cnnPoPrQ7toitJM9ywtJqtS9dyxz9DyJwmajEhd7K1Fz5zBC",
  "key1": "4rPztH3YKz1X9b3mCJWqevEt8suqCjRZVfwo6GZrnsFY68WrZYdrLWdytzwiNY9apyuEZPkJ3XhuTa8EiNLnThwe",
  "key2": "4qyjd4RfrDN4nr5PZp8C6T9nJiKovmSBvKnbXUqHGrjSN77jH927zpBZnyp3q9dJx5A4a6YizZX7UXtbP5d5vwdr",
  "key3": "3dDPRSfwvTvpcZuaKqXmQWy8yM9po34KYHQrfcmYcrjDGnEKtiw8F6M8BBc8s5y7WczUue1m5Ef8MWznjz5VGCka",
  "key4": "64RpLvVqnWmRe4Mn2Tdokgge6DiuprTgjU9c8FCs94tVkhHQtBh1kkCGeW5MuGZVCmbFXmQtXJWjNixCTk5U3FQw",
  "key5": "2gynUx7JWLSVcrthFkhc1nXdFqGF9opqmkrZFFvwMWtvMnqgduWnb5jN8i99XWchECRahzLyBQSiZA2nMECuzYLs",
  "key6": "2rWE7qHZY7RXkbHGiz93g54RKATC1NhB92PFJ74oazZTQTeHxpWjnCNAFAiwSteD5hdGpuwTeWkLpxM3GHbEiaij",
  "key7": "qxpicwcfdR2f8WtcXEd9GENJPdCtkwU7U1CFmBtVriqRPESDFwukcbiW1JYMmpDYNsm9mKNhi5ReciQV3d5FYTz",
  "key8": "5YNmVS31B8wtx7U4X43zFusF9pdF6npN5tFqGyd4z426YPncRt5Acx9DGUQu8pn6nWeeDWjsNYWRz3sj9QharoYL",
  "key9": "5vV5EAfAdsN8BdhPctAGQvcc4UVdYayPC6KPBLs26XoKSmKkeFWtxb8UNj5o8CWsXomK94fpS2u2mSzkN8mn5BTf",
  "key10": "3eA5Jpx5VW2uAwkHQxexUvaxZuWi1qgD7cnqqu75xQ7Sc3x2k6acfbFb2iusj3YnE49so2YHWztguUNTfxGwiDum",
  "key11": "6AYMXgA8fhsRToQfZzJ1wBnUpc6Nu1LXq1yLTdWPqZF5wJ7DucvkKHzCUiHzXLVKN9pitsvg8gUzANyMTh3SBE2",
  "key12": "wBmDj77ajsT8kuBNsvSoaThSxWBa9CYdik1yyj7KxoajL2MFYKKsGiG9tFA4Ugrpv6ouCgLbv8sakqipXgMyHqe",
  "key13": "4BbV1UeZZv1q3Lin7mBDYKwstgG9QkLjeHSa3zm1VeKQq4RYpfcSzEXj1cFm46Exw2xAvEim35TjLCvQD6zyXikr",
  "key14": "3YQUJjkWtBjKBQpQnBS5aukL7e2XcyvoY5T87SVfkmKjpve3T9NGa8hr3iLYk3cUcAZScXFoMH8813ZqDSj7MMNx",
  "key15": "ML9HQ53SpXhSqdKEgkdE3KScZYHHmDSrPeKnemMZRUaBiNmsgB4bve5P9DmNdP3PRF5wbLxhoz4sghJdB6nV8mW",
  "key16": "3oegemXifR5oHDWrCLWFtWMRtRXZFjjrg4WdALsKA5wufpFDP6U96Wshf6ZnHBoWfuAvLJpi1r948RGPDKgP7kKo",
  "key17": "4sQVm6hnyuxNBBiwFGkAmmCADqJPKgc3gVXTb5bHTQwoJJQBetwx7M4zVtjzgATb2LgqYvMQg9PM8N8oMQQBXdEb",
  "key18": "5H5L4FyKToq4kGaGiaj5LD1PN7mGkZtpB3gaLsNo77Q65nBDD1vQXjQcjXrwNbCKVCebrvgLqLYG2t3m1YfVaLMZ",
  "key19": "2Pu3VvTZaRwgU3UZFzqNweYuikwGUc1ETn5m3oBjgCaxBXtn4ds3qc6ViHCQgxWwfWHUdTQUJ5VYHGk5wBgPwUv",
  "key20": "2C7jNyT3Rc8VCbWtgkqdqQDvf2676o1VjDwgvLB3chH3nJEW2Go5rzcL87eJn5Vx8j8FSxujosDA2wPaA2r2CKVh",
  "key21": "5puvzFzwLbhpTNTCv1evpoWE6zbbhACT67rXJ2zwYbdyhNQrQUaUSmsELErXfrsdvvA3pZabkt7e2V2nVxBg49d",
  "key22": "3n5K99RJCFVFJjZJDKurxDCRnB2cRucqhkLPt4iPp8eDJnRJFcwbNnz3PBDxsF71hVKgY27UW7TW8UPhFrmj29KE",
  "key23": "2EytMB7xE6iswYgFgcU8tfjMZJnjD8zf49mnz5FZ9rW9ZWa6Mpv3xq2rZESQNXJAGahWUsn18M1sCE7oKGFXxagR",
  "key24": "53MriJnw26dp14HhzbiK2ac19eLWsXcwLqvSV2QULRK66insmSvSBz1r3nvusqqzaJkPsr9DxHkisNRvsWjyrByy",
  "key25": "5vwVw4ThAzZJN3gXWo54uD3XxH7SiC8caoYpgRpvFGFQwHn59L1UVoT2p2nTqEB1bRGhxTKvJohhP4jQWu69fodq",
  "key26": "54Wh4vhxMz72f2X3UzKVPJdDfBpsCZgcgY7AFZe69q8ozpHZvFQs8VFt9XSXisVFU6JJ3nwGjyiTsEtn8gXbhbfW",
  "key27": "2qieL1es31PahHzANkqZNzzqN1ErY4yjcwxj7LAvBhqk3o7A99fnW5gNpgkRqYsuHB7YnQGLHdEFwcAnWwRwPhB6",
  "key28": "3dbmAJzHgXBeWQJPnfnvHqrzbsi8gjPpZ1NNp8ohDkgAQsvqSxEA1pdJTdFUE7RTHP2qZTyp2eMfr79CEZen4Qv6",
  "key29": "22uTt1UKPhqsTmtWrnp2TXE7iCs82eeq7kF1N29hpxdcd3uKMDNu99fTFRdkDPXyeMYH3M2dfKECDiXs7hiXgBWX",
  "key30": "4zCrZoJCiCyKe6TdM6AsJUC35h4CQtUjFVgpRwj3rtsuPKGeWWyeqJNY9g9gWaBq41uaFHmga3pZN47hy2wn1bL7",
  "key31": "3BYJeHaXxmDxkyi9CLrPNXrVKjeroaK5uLBMCkwLpwjDd79o3ZkzfQReDYD4Esy5axGfMmeHAncYVLFYeN1jrfb3",
  "key32": "649n9h6M3K8Bh2M8atRrjB5P2jTmKYwPd83DZd42CshAY556kw6Hb3FJWfYen3SSQzi4ofUhqaxUxfgTAFQiZiHs",
  "key33": "29LRzYteqXurUD271yzEVmk2gqrWGfpUmfcFoKdksyVKi8WFgubQRYKi8uMGArT3ZVj3sVvgbW6soT9MmnBJFVRq",
  "key34": "9qTNcJGi3JQf8HLBqZBUgr4rh4U8PMG1UnCnz6xrdELtKi38wnXMVu5JQbwSZXeRCgWcsvpYAPp2ZDDn6NGwjkA",
  "key35": "2ib5tGR1GaxY8KPJkEud3DYhqbWL3X6tgpMhProkdhVrvJMsBpULUwpU1eUe8GM69v9xmoPuNfkNf4kwhUJvuGMH",
  "key36": "5Cxkn3nZUdScwKWLzawU4cohciEFvirwTWTe6F5xuE2evSD9DFkRDzRuK9uZTm67aLqSBhT9aohqFnQ4F1jrrvXY",
  "key37": "k5AVk71ZDnEngKozXbzmUyCfXVDYJTBGb9E99Gmvet6r3w6TaXbtapQvLNLKEdnpLztJo1ghrrYK34gfBhmL71V",
  "key38": "239roezuCPs6VMhpHSDMCksv8by7jCmUC5UFVjCJsdN5U7e287WN7RY7eFK5p9Z224Gv4mmZYZxcZQdPLEVtPbvN",
  "key39": "3cmkLxo5DV9LTikgjBXpk1HRiGXkuG2zQ5g9VqxQEY8gM4j3koya2qU8ppQYiekmd9AuAHQxfAkcjZaqnfJCGGhD",
  "key40": "TnMgyyg7CuTEK9XJqBvcrcY5bnGyVNxSuLncT3Hsoe5UxPjMCiBB5MP3sq2dFY4iTpK8YKYjyGsiKkeEbP7iTdd",
  "key41": "EHizSQGk5Zpxs14UZHTg386CZVwXcKgZmogvToCfsnHwjPrWqpXVa7NwC2uKzyV5A3qzCqWk9mZxWVCHvrrk7G3",
  "key42": "xAXcYc49xN26L5vaeqZWXaALcs7fxauqH7wMyTW8S7eioacVesmsw4JU1tQQxVEg81i6uHz6HKjNcUEwhRfdzau",
  "key43": "43upByhuQ6k5ANpokCcswihGrTSLqa4b5VpBxAA7fNEZYzmUmjvPhi5GuaYqUsMfoeAVf8K8X7bvSP9EAuQhUk5g",
  "key44": "2f8eDS7xdQCd1qzJzEVG3st9kGTqmubvbhaULUfiXsif3vupD1sxHgsJkM8NdB4LNjp9AF11QyaVh4htrDdpmFLm",
  "key45": "5m5SX2qHMyCKVU47iHHgyb3W35R6bnQcgk6q5rejV6bTkgCDCiEpxnph2FFyTQKcrLvjiEcZ3rGc4yJDsAcVHgk9",
  "key46": "3sV2PhdKKp5YGYhE6EKSBaM2cWXApK6Hx21vnDkdUzgWikfBzkxTcamp3R6ZXyQhiscGV3hS8Yccyf1MWoyDHkxY",
  "key47": "2bHY9CwxftTUjmoQ2W2EY3WmTPPN6P5sCe73pLswRXDFimJw2urCxB6KkuZtqDMcjqUTByJ1ohZ7jXnvHnqVum4j",
  "key48": "2FycnCdwAiBgWwgwp3BASuejSvfHbspUkt6LV3LhcmSSxidvZKqnS4YK7ytAABzqjytE8fjJcCNewjob1fwKozeY",
  "key49": "2UwUun2Vy2aTfV7FWPMxnmqsdGVPFRgoyPgGji4BZreVDYBB8deCL4WSEoqLPij5RZJfncYeLQyUQVMRXapMeCyk"
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
