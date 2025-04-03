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
    "j19p1JpwRBEDaWZCbkoMSH2bm1EPxwZSmq5ni8T2aEdRFcrAznvgXhkr4ZmfZ1yWWrxAv78TGPzR22YHuMnFaUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVLx7tW4BDDyriN2sVgMVBL947nVLNhqQ8vspcq1mgYM2nXw5F6qjhpHy39w6ZCBJL6jNQL4ah4mLyTXy8jaMy3",
  "key1": "58GD1YqN556GmzCAfZ2c97CZSwCaqbJV1FXYxYPNWxwCieDTXEk1gd9miuAJaV4iKaaBCiKAQoL6ACPrwpR7qnAA",
  "key2": "3WX65YU9yfG5Vob8sdZYuJZixzsVPftmNgGhLFSSM9VAHmUbU4KhQ4LndPHwHCUkV2en36bBx9QQrvsufpJKyHEK",
  "key3": "4MH8isTbTXzPX8jR5fVbvKdEPTJwXgbXi7s1N3umpQVBz1bQ8AX5mnRBJnnmuy8vbwqKH44fyrteQPyMBwmeKMJN",
  "key4": "4fcyY8P3RgD38Xy45oko1svWFCRsydxpetSgspNmwdKJqDaZAUp7nvged3cw28GnyfYsRm3sNBoDUyAt8CjB7f1e",
  "key5": "61xuF3sB293k4Jpi33b9BXaGCXpsR89d4T3knKD5RKYygnqahyfa9NsTbJrHmBc1UvLhE3McGZYiKwSoBXrLTjdG",
  "key6": "8NzwUXv9tAHdRC23QuhUqpPHpsncd4C4ZLN9RZaSqui3qWKsGrG5xvKW4yTnnnvcHwwhmqdan7QpkN5yPQDhoBe",
  "key7": "4sQ4C6xNy2Wr4v7kEXC4hJKTJ6hp3k2HCo9uetwfVgfZLhWvVGa99JyBwT56Gj2RYsyY9o6XUikYphrVdDfWmsi6",
  "key8": "222DxzfpmGNMcjdb34EcbtFg2fc46KLJtVGQdLEa6esYmgHw3rBugCsCRV1hM7g7aS4HJBDU7KqHLpaUA42PBA1V",
  "key9": "xDxaud8LA6dtVNDQADobiGNAfu5ms9yCTVrbPy6GY1fBxs25H42va2CxN2BdjBm3aty3Hi6GHahpPVDHZoPFgjr",
  "key10": "8pfug1mcYpM1Kz9cBCsehwUR37W9DwMSPS6XqBhjKnhf3goEguXZvKUTDFPxUJbvV931dCkxb8qP74uM6tveaYK",
  "key11": "2JofEUkb27BxetrasvZed4YFA69tcsFqxpdNoTZmXPBU2BhkeSfffEr2gCLeZXgiFX16pGUjQL4mQsaLnWo4BJDY",
  "key12": "4qYJbdiZDjagbvjSAz17W15QCR96pGTtfms8jdjm63afrZDzoTrcS2AKhrz7E5vwc8mUU2ZkLNdmLqxKGv3hhayR",
  "key13": "2E7AWbcET5Q3KDSgkfW5LZT3yXmCyyHySah2NJnTJSt9dKBHtinoBxvu81BkbcP8VDK67w7Q7NX23RMfehHaxnwr",
  "key14": "4mMGCUtcwu7nRYs81ZW7Q21zc79GDAsidThC9ij5gKqYXjXBdR5HmLxT3sJSnvjnAawNK8oW7pfM8npih9rfZUEe",
  "key15": "67HdxcC7K7sD2qs8kFEfJSbAmiSDmrQn2gTjj9FRR5EZwJMe2qaYTwaHf8oLJiPV24mqN2z4wpFDAj4ebZ3j5ogm",
  "key16": "4yoeY1UPD7UTyLY2mGyTZwoPgQ17YGWCxdQspYiWF2heyMgEqmU39BF3A413Lza1YqhrQPtiraxfpqTtSu1MYfgH",
  "key17": "gmghLcAjzgbwvHFsfES4Ed3cpmmdADBAVATuj2brEzjSLZHbee4oSKNMgGdRQJS78qAx1Mc7U1VSomUub97PBnb",
  "key18": "2ftacdfc6CUtddvCTuukN9NmVrmVauykfDdiXcUFNfvahnbF8dQeTz1wcyii8JeEFiXq8JtqUXNNZC2hs8tghx9e",
  "key19": "9Nvgbk9p9yXTkTJ1Zcjvqrh2CjrxMeMi2gspuHZejBo8JCrRHAFa2j72qcwNaxREXJ412raSLQ6hb676eHJKPXh",
  "key20": "2jUbq9qXESMpNxStxjAa8NsqK1AMQHcDxPyEgkjLg5A66nvJhE8gmAyuapqFKSsSDvuWRJoTgW2zMZYZVTtyXBNy",
  "key21": "2BEQikqGDX27v7Ju6GgcAsdVNdpWgszCzu2Zh7KDPLn6J9Wgb3ueyveN7pfFefnsjgxEVkQSjCxUiePxm3UTppFZ",
  "key22": "3RoNthsrk79jjr3nJBXXzcrZQqeYyrkC7PkJbfEtASNfkhXpe4uawMyiNSfgHWBncg9DC8kCzyuMHVUKJZcZ4ig",
  "key23": "5h6mem2uPo3sgtRyw3bGkqLx3zGr9ned7EYo9yYW5KAhygF3Fr15S5DPBmaGHVrw56awqSskrCDoTQek3YgZogNM",
  "key24": "4VZKkdgxtynCEdRxiSDfnqY4iadgEDwVhEkn5YcZESxBsrY1paM8Vc38GRfvFY2rWZkcWUxtEZbTCHZhEHn3dShT",
  "key25": "4TEGDWaLJYrfPTJZEunXk4hNqBzGAgDE2RFyoSXRLeaaiNz7UQXWnC9RoqjkZkt6yjiKqpw1AffhQyF5z3rpuwAL",
  "key26": "31F3PNMgszdZDvcZDRoLFLCSaNqTZv3f3s1Xs42FD7rT6tJ39pmgyL6EeHLRjHoApw8mseTrmkqpEnbBc7uKePRD",
  "key27": "GfnS4FDPdDn12gK64cJFJDjn2icq2XVuAJr116aBMg3UNrTiPxZrDpJCLcA1gKNnQYhoXFDvTn4KWFYj7Wt8N2D",
  "key28": "3oyyMiSGXroxiwoEAzna88RA7zSNq34eaqEcM5a6cHNyDxPFRyrGnCPbGusx4VYYytYWQbim4PtskP5hN3SdMJvn",
  "key29": "63SWB2JRWBuGkJ5qMnGXymnfySMxfYYdDbc3aYDYyHhpuPe9AqBiufuFQ1EFvbEsHQ8V1ps4MVF2GrSstxiJg6xd",
  "key30": "JGbttgrs9p4UQpoQ9tyoaQfAcJcvw15quBwgYQqc3AAj3M7ZafnoCHsEfTwpiaKCYh5sTt7NPnsnbws1vKujET6",
  "key31": "EfhGe2gZWYuqsYHoqmWEbWSgT7WkaVzN7RhFPWyVrV4KU4egEmt1kPWdGS1UmNbjzaRevT3uBrwbyS5c72YKMYR",
  "key32": "5npgjeTdTbYNKgNS27AD4w5spqGSkapdHyL5K1csZuGDvkgBWGdPYvfBVKjVrrWczbZVFBqcutSzUjF2irHU1WPU",
  "key33": "3oPsTKN7336wUhFSe42mGVeP2pPH1oJpeWNW6FE1mkeprRmsBtHUMMdcddpNxWDW7ieEw77X5doF2i52m85RQpYm",
  "key34": "4sA1hzcg6k66ak5Dm956KwAdtMzrQBwxT7irqVqMkh6biYBh2aKXTVvHTXGSZP4iHpFKL89jC2VhHyyVMp2xskfh",
  "key35": "UBTkGUJpBVEBibPBkaT8WqVzWSTBbupiEkAJbCBaxXeHxHpS3VWmyQuG834xBpJv2rDYEJ78CFj9t1R71WTKx92",
  "key36": "4qjLDzhwmTPbbfHMrVWq48kuq5d7nPGxApA3gYyaQHY9Mj6EGpRxS2fKvUHYpYoTSyKnoTqMHhtCQ3fcYwecwqGF",
  "key37": "3nW4oWtHYJ751Sq1WGGddGNQSZTKg8i7yvjBwopvcy67LLdCuwiBnuTLQjLk4MjedxVj4af2eZ47hESZv6w58Vau",
  "key38": "5XFi1grydagrvuX4Bqr5XxE44KtNiYnL62KQUZZ3NTJWcTfwQTT3us7RujMA7mxfpNMiQCF7uFKcZE3b7paQoV7z",
  "key39": "LS3aDfaZTEz6TPfL9jqoSkAHTRcekdeKVQeuzHKXrPpGEMNpeSLg9cGhSHRj5GoqnauhKci7nQ3ekXJzNZpcJrg",
  "key40": "2qfPYgsw5fUsrFNbRWD9hWVwonBJBudpcU144VQ7JMVrzaGhwWjBccREQFfJfL7nYMM2AL7XdoRtoKncgHWTq2qn",
  "key41": "2n1pEyvtFLzVDLTD3YJu18YZQ7Z3asPiJejCjaxBtyRT1BZgNNcAjwzKYzbM8oQkfhBvBYwrZofVhiYp1FrLkaR9",
  "key42": "4yXP7ah5X54MLxoJY3Uv3UbdfNna3amKeFiEKcULEREMT2nNQ4jd7dkKJkFZHvijNmBmUnKqcb8bVDJNEhjVQzNb",
  "key43": "3CuToK1hKH9SpWhAkGxbqmMrTVuYyfg1dMnqvmo7qd6JjwzqUyugnSxp9WuroxUvGCFAmdeNpVbGioUoSwoUadqH",
  "key44": "4rQesUvDEVNBZN2ZrohLpr7hxMuNwYXS6wM9LEeTagVu82gAwo3uSDR9HFxWaatyjZ3NfKGb3gtAJ3VyHkj5ifJn",
  "key45": "45NuHdQZTRoabhNie6sMMKZGpLd7PPHHHYyNCj49JtR8RXKm85QxtBArJusFi8AgWx7THpQKkPgR5nsi3ZS13noM",
  "key46": "3B3KJWAiQvorxUQdrSg71uLFrLqFoaCjNiBvUixkTbwU3Tum5RCaxPuz1p4QaMPsfghKRMDKXo95WXBd9321DvEf"
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
