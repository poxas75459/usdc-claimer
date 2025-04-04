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
    "5xziKDcR9awL8aabANF6oAYoscgyievW4QGGd5zeg4hH1V4VwJT7aniEwS3Wc5DinpvS7B87Vo5DmVA9mMyV7j3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y7cs5tNtYh6HfHm8mBvVKikwL9SejmyBXbgnG8H8U4kPXFHB1utBXX1NB3QqgHetH3LPedhFR6YGtCezFrKTEXY",
  "key1": "2xcoqyvM4u8vkqaW9MSxHhJeGb9zcLGF123mtPDf5vDoCBQ7x3x2U5A2e5rVG1gsgqwFGhvaPWzruhewFCChaeqM",
  "key2": "3Dr7bHsBtNFfg3Nat8V3d3FUjXLMhgptDzVD8bUEg41m23E2zTPpKGvfq37zy3wzeTdwvLaHVRxPWQu7G8LfW7Gn",
  "key3": "2pA8Kcbcmj6g4WmoseAkK8nJnNpHVzBRBExAg2Fx7wDymQguxVieDemrU3Wh9viRAWntzRN2vDKaCWbiuFvs5Vyr",
  "key4": "5zJVw9G6q9b4GRgcissNnkA43b2xWvNgnRWHV3NztNmcwDot9MjbLQeodHQjuqm19ZTrfjTrAX7ju8PxszMLtcws",
  "key5": "ANa1ZZbgyK35Su9mKHtJi4v19wX8b71UjQVchQis1aFqvCRUowtvS7bZkw2s7svHh6mVDLKrcnud6D5uPENUYbM",
  "key6": "21wPqF4Me5mxrRXNdKTd9heW7wBCiM3WvUvnNHSEHtMokSYzN9eVHDjJShRoZBdzhJHBb3sKJ9VfFYznQPEAwq7R",
  "key7": "h6LfeLG3ajSYN3nrRvZjo815t8uQQWeQZ2aUCerb685owrDGZN3h7orfpeGuBokLJx3PMRGqwBUHEYFdkF5WB6A",
  "key8": "4TsqbnZtYTRmxBkhX42YqKGCpPxU1UR2XitVP3eS3wTmFDhw1usYP1FgMc3YBUDngj2MJ7ZB7eWKSQnLhK6s8t1B",
  "key9": "5Nt1DKkA5zYQmnhTsHjboq5FJBMCBoVhibgrQvuipSz1cZi2QgUwCB74WtsbVMbxx4Pip6zghiQdjtgXABVFU8Vs",
  "key10": "5SMNSDch82bYqQrvD4U4S3BrcPvoTfpWsRkmbeXaoVKNi1yb92eV1kSfYq8BsauZGuD7cAviyXQZz38uJQEg9k8N",
  "key11": "5Y83NwvGTwQ4cK9uGWBjAx2xM7mAncKUfLquWB5sXGevUDCUpzpZgoT9McPUWJfA64LMeNHCEmCa2fGTQ4FeWxeA",
  "key12": "2iAbNpvrSwGCbJDERa1m7sUxow3qbU86xMLSJUHQeq9YpppRnxqGBxRqnvqU9jwfNReU1eYArGNYqWBEyo2QTBar",
  "key13": "4WrdcU6dHM2T58QwBNjSF989kbhSou9mMAocFtYefJbiXUeLiok7SFBkVcT5Udd8kVtrtskDFcnwhTeozU6pX3cm",
  "key14": "4sfnr3NCDRNx5At8PmHiV8KJ4AumLv94jeFxstNZFvVWZcRpqQ77UPyyn4oZDGjTYXBNjiHnViSwsj9XV6DzmUhv",
  "key15": "3UTvvqFEBJdSLTXk3r5nB5GoJAb8RGwi8H8D7q6xJWxsSj839utad7wa3249MEHAHUL7MU8RMV2PcVTWPm4hhnF5",
  "key16": "2qgEf2BRoePJyg5MbHGc9Xb6P3n4op5vrP9cZXUxPDcjWXtr7Cy6fSPL6a4vK5sqDCTTwUdHGasbL542BVDAMThe",
  "key17": "5tDHY2vgGVQM3GXMBog6u2FqPh52RozgPiDKktDkoWegcDgGZyv2MHyBjW5cxADCBu7ZcW1oG7ymQJ8VUTGgamti",
  "key18": "5r9742dhPNdEiZXkhjXhJ3uu7wZZC3YtmLXoM875NcSa4UkNtc7mEoicgSF15QpzJK6RRuXS3UjMMFnoPKtGDyQw",
  "key19": "B1g6bUeRGneVaqGdtjuyNjbvoom2rkiib9m2VdfEfkq4Qru13zy2cwADFmZzacgAmZBAtGQefpSyq6KtgiReNqY",
  "key20": "5LWfaNSWG64LXeFadem7BZC6UU8JTMRJ1V9C1LRbhA9wuZqmN1XgCcBJVpX7HVjd7vd54AiKhjK9UZgTFwDPnA31",
  "key21": "5SoR9ApAfWvUmrDmiUtneB67L2YuNjptxbUib77nLkXVKMP6XiTxKihhrmMJCWRVFv9B2Q1Z1yEEoqJh5LbmfAwK",
  "key22": "25QsMoZzcrET15aH3HL7vSHNxxXbuWfk69yG5xczJEwnrnu2zBNZT5psoausKV3MqsFiJTpUHmFYekiRiV6UiMBr",
  "key23": "5PpAULLiVPdeiKBsFuaFJ714CxfJXBx9aNnFomMpoc2jyT9mL37MKLkyTXQR5c33ANcCiYK3EsmsQH7jNRhWcSEh",
  "key24": "Fq9cgr85vPmdjSb2qHKjpjBvV7UvMxMHuNgWxX2uD25WgQmkY2rSPSuMXZFuYt7J11TMG7wsNcku14EgRjSdVNr",
  "key25": "5E35S6n2tVvMy68Pbaw6MRKTEecmX3vDUf8BkzdcVfZZtiP7KnF1WkQrVnoVQXwzBabRkAM3MZyNErWAHXP2e8QJ",
  "key26": "56MqcT6mYQ6vH3NkrNKWpuF4mW8xiPXzKUHwcms89ByJQgJcRpotudARuf1gsLzDPUHtWJvPUV5WREwActommCGn",
  "key27": "zdrpLierMcJk5NANpVQZc7aw243AtArsEsxfFZvW7MfDoQt9cwE7D6nMErDLYZZ2Rng937qE9LeB8FAkCYedfBJ",
  "key28": "5YcDBTRTBAFLD5QuSeapwzfMN8oeqxqr9bS9BwQruAuAcDkq55VMCfPpZmphP6F4btUAMY5sjqigzVNAbEz2aZSc",
  "key29": "2PEM9ZsS4MRQ7UdAA8JhGkka4vfqou7Q2iUHXakbo8N3VqAiZF3HM1fNPWkXytbACo4tEo1RgK4DHaFLhBshmQCt",
  "key30": "2V8vjPUv1nLF41fYmqPoCmJLLY6ZJ26WLmjiPPtV114KFwp9NQQxUqzgjHWhT31VuAe3Lnmh72EAJzQAG6ChZqRQ",
  "key31": "4gXXVHVmdagoBHSRJUuXjF7A3smzYVbKwJLrJRGxyv4hVqgSyhUSfHwYxjNkCX7p5wcXrVchGZAtTQoi4xrU1KRv",
  "key32": "3mRx39MNuatEkWgnotVrMMBG4eFPPhWFVdnhTTLx4tWuKYLFSEE9uUYnyq3Jt5m7jRSDMmwNhys4zCrzAAWpLRyT",
  "key33": "49xkCMquZkCDjBDFCkaBM5tg9vFfsuUcpALrBeeoFjhLFHuL2hqjRnmDZqDYC5S5tis4FM8jTpkfuXgdwHDiZg9S",
  "key34": "5piQBR2E124JnK2oCo4jtcVE8ydAP1d6roxAGsC8ck9frKV9goMEKBcn7T259Twa9YZ3VPZUGkZS51f6nrhisg8m",
  "key35": "4M5GMxzw99wcKT6kWkGrkUrPLSExMxrPhjCuJPBuQAJD5gy7pmg8WqDxUWawAUD7STbSwui3SAWBPVVHo8Yrsp7k",
  "key36": "3VrnTnnZtU1YheYVkCJfL4jw4FDawrAxtPYZSgKD2VAoiq6zv7SNqA54smwwZZfX1mnYhE8yc5vRvSff1yzLneoM",
  "key37": "3Y53VGPCyQPsEnHKXtauGHh5vPa3nAFb2woS95iubthT86h3AZupptHJimSNCzzfrFecdqE51v1HkZA2DGLsbLur",
  "key38": "4nxztoZMQxCTRe5iNiaCNHCkmDk3bLefswaEGEFhW7jW1jpLjcCHPmWKDBDhZuyBkQqZJaDL7TJvYfNqG4hmnCg",
  "key39": "5US1xSXKFxBbAAfqirUuYCi1rEDe93UvTikoAEDVrNY4TcjCkDjzMkNmGo5aLPZPJbBdNpyBTsi3zEMYePTytFf5",
  "key40": "2Pa3vUXQmJDLYFvnRwFEfnnANpRjzCLHSCbY6woGsJpQ8mLQ2nAyiNMX7N8EvHGVKRg5dcBSXLSWkspDJyFrPpNp",
  "key41": "3tC9PqSGk7rczHjJFLj6EgiD3HNgywusJuwFdVq7qe6xDGvoAxuAySpRGwPRGrvus4FRhTbpmiwVMguHuYq2nQdr",
  "key42": "jLot35AQxJHpzdy3V2AVKQsfzn7KSbZ7DKMJLvGEEeUHoJXWtwNbbgbpSpVhFgaGjQpysWv6R8JeYm7CzA2Fwtd",
  "key43": "5VPJWGMfiVGEBjVf8Kh487GL6HDajERYYYrKiNcELSVidnjnJzoGt8WaGJ6iNYCTzz3qKEct3NuBsggfjQqh2BZi",
  "key44": "4M5UEwbBDTrrxpTMTaawu3monJsz7BbcHeEByWusKU7dDCWEZATWbPceAnHLCnWMi3QiHWUFQJE68jm872DMtq1q",
  "key45": "aYhMeyGtzumzhM3321NWt43QkhGEB3zAdF5nuizjDLpBFfzZQP1p5k4RmnvLEK7bsNEGtoZ7CCqAXxQFWBP9U7x",
  "key46": "5UDP1vg3XrKXASLVWoKuMcQqNomVKgtreKTprG9YbuJ2PSgb86GaAA6wBx2FPVbmAD1UvLN8sFoFyFARcYeZh8fk"
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
