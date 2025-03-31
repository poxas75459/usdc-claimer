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
    "5rsmKudSfUYi1to1LfP55WQtkS5jvNXAPcG2DqCS9sfbr9hLoGdNXhj7sgiTKevRiNUtwfXHwoyrbEh9Td3G7nxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36LNWoXYhJ71khfPNHThHygCoqvsqP4qf7LWceT6H6f8XMmYWUMSUtDr6vhCjtWtoGRLXQjcWMPxteUdh2ZZf41W",
  "key1": "4CHxKM66acKx5ADzQhzFhvPqVF2DW9kmkGZRqXL4Bx7Tz23cX4BbYuxHd4TVdNXAGAXtAvZbSDYmypvj9ox2FQSG",
  "key2": "2Pbwk1VeQy9QA5EBMeXrRhpfaeqNEWnw1szT1LUGqMBPPnBTeYXYEW2CgzZWX7E5m9DxKyB7GLm1U9dPWwGLfsjd",
  "key3": "5wuBsTz46ASxUzdqJs1oQ44C71sHEiJegNEzK4ppjpWxUgngB1HphxmZ5SbGgNUjBo2ZZNZNV8g5pDA8FRPffGTb",
  "key4": "27P57BwwsSo968Kzp35QNKRjQYECuGcdeZhG2KzhimW36Dm2ozJAYBVSkKpk6bvW1txP1VFhm68DECUxe3gZiNYJ",
  "key5": "54bgGgdt9xwKgwB1PbcntvCxaP6XXXxiYZXRYxeSdMdEDU67WeJYsrWYrwwroxqkAsqr69AZFm9zF3TaBjNvQKV",
  "key6": "ZyiW8baCs58NucRidzyM2upHWcCE6JFrv3Ut8z3P44Z7un95o47gGcM8Bk9nu1UyPcaHbxj7VkTqf6hieamKnRe",
  "key7": "3ZYEdR3y8yAyFhZ4nfwubm387PnAFfqTbEao95qiWwN5mW9Mk3gKfEDBphJQk2HovaQzngSbitGVgU6LN4j76KdK",
  "key8": "3SSYDjXGgR9hobGGWENeDnNyi2RFCeJHw2uCxv7c6J6zrVuHjV8cLxFzx63vbAzbdaFtUKUKvw8BBABdkch7G9r2",
  "key9": "3Aq3UYuDkWynBqVjU6q9VRxBydyF1DFhbjRk371u4mwZCgQyMsd42rDjtCPFWJukXVvV5ay4aK2ZmrGDRo81nv2h",
  "key10": "2F99G4BCza8ZigF8MZtnhWZyUPpTTLeMWtLFrCqQABef2GaHCTUHPGyoVTJZF8tRABJ8dekNDiSdCe59mWFiwm26",
  "key11": "65gvY6E9TqVib1NDTnMfqZfUXuZ7L3mugTkEVxqozZ3QZwzoJjQBRUE4MkyjcFshu8jTzS5ne5dX26WiqPN712nX",
  "key12": "chcozmniY6io3X8vfjSKb8Hs6kofHaUFamVNgKjHep7RXRzZ6NXyL4CDaTFjPatVzb4Jwz6yfAzNx6Yi2vanuMu",
  "key13": "2rFQkbLX4bwcjwgXjAdGtxVppjGYNoKoHLMRnStpH4mYaByCr86GRPChF6Yby68VQwk1Aq9nKXccqRxAxZuBcvPm",
  "key14": "5cZ8HG9uioRZP1kEnKG4YpSAfiXPSEgj796aSt9iG76saJUE8sYp4E3keWaK9HFv8HADsDqTn3oexrES6t47eHWF",
  "key15": "5nPvGSiBadna2aiQMVm9gXkchYUVryRqP7jFM5S45AhZroh1CFUg1fsWGc2DNirGAxaWf7HGiLkGqw1H2pzLT7em",
  "key16": "2LjhcE85xk2ioQaFomJV821i2XxxqTcd8Tdpiu6KCuuC8vQQaWxtrn1xLkGzL3UEQC3K6gRSFu3NXoPFbmzMAKWW",
  "key17": "x3npFznRkyF7bBaAeUyVtHJbNCY6wrvmUZLC3yuQiTp7jtZ1QEnvqwwhWPPFU5a5t8oMhj6SjXczLV4GsCQdfRN",
  "key18": "2aJEht75zdQAU9TPFjD2m7EfPpxap6YpG173L488E19jfTFR6yNynb3d7iBvaKioyPLDeYwvidcM3yKpbUWfQoWk",
  "key19": "36WuULuGkJ4E5yVmZZkpngiNqAMFsGV3ghRCZ9K51dvdiJPGakrVo4icdTpiLmjoNhTvXdpu75tbS6H7X5LYoCbb",
  "key20": "4UQnFNHymg9MYLEkGYeoMJ4YQKtGGeGefuYYJyXJi7VSVczzhD1YkeKSMLoQfPoiUWoKyULpZEV9WxfCDouWSSeb",
  "key21": "2voVbCg7uYU1x5XrtnYcDFyPQA6HHWQ73p7aFD2aDRTVPehuo916XwE6edTd4n5hZLPuJ6MRun7v7NcsByBJUBNH",
  "key22": "3SVRJMuvHNvyZVhSMzZLtodC23QG3S1S8RGnq7ehr1rVsyGLVPNuY29h5T4DmenjS8sbarm5MZwBVgqLatCnwddr",
  "key23": "4FhTwWUCy5d6YUWfWD8PEDFmK7rKSDicrBgYHt5DLVW7BoCizitW9Y9YahBKt22ByJ7zjAW55Qp4Bjhhmcng1Ydo",
  "key24": "4K122dWkAXxWXtwheF4MLackSVpwXhhvEy5rYpUeF93ZpPBYoawdsWpTAaZBJ43kM6ki4yv2u7CgxLKj59BBpAhh",
  "key25": "D5Z2r22zjgQ8WdS72HCvpuxwigZmUoexzjgF82M428mojbHFq8uQbpnGDGcJouGgrXGRtSXX8cr7vkgGYS32noJ",
  "key26": "4cstMZj1bVb9ovkz4kNLXEgZcYWyW8zpLENVrNm8Gt18YQMtwVDKMcYUy1SuS6T7PSwQjVy4iWfaLnvSBaDKrNGo",
  "key27": "3PoiYJQRKUAbyeKNwVE7YSmcaxE4uMs3jAc4ZbNtmbw3Xt2U2j5zVSbeRP9WXo2fWyvHDoeX7ZtuGq1xS1feZEBf",
  "key28": "3HkQX1ftP9rohm33Ecz7dKrBxkHmATNLmFs51qi23eoXB2A3qztWBHcrYaU9MpL5ZanxkT3CeCmxrmZ8JcTZLZsx",
  "key29": "5sDZZR4PtUUp4L4BHiJtiVLFj72HEFrieZGrM4SqeA8KGVpdDuwbjshwS4Y5wVCLuXgCWp6whwGHjiZiNBtXH1TQ",
  "key30": "FHvhkqryuzZ2aQZameLjf4MuCG1SNrXLTL7AYYn2xXTfCBwj8rp7i7LE4tkho8Aj3G9Yj6LFML8fXwyceTRkiPs",
  "key31": "3m1NwXa8t4WzJkwu5orzpmSoGhgEhXw7adyq6hK5NrunPKk3DbB1Pr41KEQV93gCEYLftY9TXkw3AgVkp69aZ8Yn",
  "key32": "239WLMgnUNtYtyJoAzzHbKVB3xiFYvAwydxU8ZxEKwp57jkZZKXw4P1xBGmZgNR98f4cKm7SPdYLfugBFF32GSms",
  "key33": "2oqq1CV5qg74CC4sC3TXQ2oz9Dqut5etDvFMnCmDuY4QCGeWcPFz6PF2r1fJ77KMnzK9upwjACsBpXRyQ7dMSoKX",
  "key34": "5Cjjyp2kzveiMNZfDUYzmj7znbGRVegXxMZGj2bpfYDhvRF1zzvYS2WrRynbqHo4BXiJnFbTxJBavvo1uVvk88D6",
  "key35": "7CEA3Vw8aECSCUYp4arHfrat6XvhyaDv2qFxXLbir1hDU9sMboBnQuKyPurHKWexyyV46vLVEnWQZuexMrNRCe9",
  "key36": "44tMJZ2GYYxH3FyRmmaChYbVhtXJpRTcCZmGjT6bkH4PXHZT7zbogM2gbWgKd93t1qEoJQ34ZXFdk1rVY4Gye82Y",
  "key37": "42MujM2ihWW4VmuAjWeyHBrjBcq5Yqkrmxbov5e2Te5QFfdhBeLMLDg8uCnkiXf2Er4oCFfNJuFU162AxeNyEP4C",
  "key38": "4WiMcLnNYK6fWkiiBT7VLbEH6ybhDVVrp526nTD6UQgg89byvRBUGauqyAuqoRJTgb57Amuehi6UtPzbBUD7DRdC",
  "key39": "bF51SgYXh4qxwAr9tBDYbZLBs6j6qXudjpHMo2THyCiR86P7Hq22rRE1W26GAC1ivuUCPjbj4aTtUETBn7chPL1",
  "key40": "4DPwHZonTHEouJrbUSajpKcEqk6q4GqtA5Vq5c86a2RKMDmHzcTmALHopV76b5uophEVUXGg5faQYYY7zxXzhpyX",
  "key41": "5jk6mP3ALmiT9SVUQGBrHj4AgP1AnsnYRjUVyzanHDsr6NAw5RmaaxxodLFtHfEqHS3j37CqCrVrDcxdc1GAQpuQ",
  "key42": "3okhsSo32WonEkF5XrMW82Mrj1yuVqcpwCiPhTm16PUjKC9XDDtcBtvUwbPRxrSFR7R2rZ5Xdp3bh3GHh7HgRoLe",
  "key43": "bCtQHrQbkVkAZrG2PzVVSkfbY2hy9KZ3mVAinR9YoYZPu7eJUrsxXuDBqYBXxC7gYwa4Wz2sSrhqNFBsYbbZN8d",
  "key44": "5zgjX6NAbj6kKmEC7C1JoQ8Sk3Ldcb2SvrjssUdRxdkRiSeywgYnW7Q6wLW6hdFZfcq3YA431AEeXvvePW7wBHD2",
  "key45": "3Mm7ZrXdRUFreK4L5Z8QStATC9s1EHQwPfiSBNqNzNKgczCBSDCt3QSUAk6Lw3mA4vEnF6V54rnwrrBKsm2a2xmX",
  "key46": "5Wyq748T5mDQpzbvyNqGPp4k7ubdf4jdTkyFr4pSCvxWT4qnisHmvLWhAo8X1uVKuHhD8vPTeYXJaDQWrraSVJvm"
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
