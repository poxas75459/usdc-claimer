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
    "4WzM3sTyUn91UDBL1Mw6byQf1roW6FHwtbqgmd622Eup3uTHcsbFAjs5cyXkfKHpLCWAeQnr8PXEKv6JXiT6BQPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g39QBDoJmZo8VgxgwaAkB51SQPABZ2dZP8UroDM62Q74cS4mFJwhHTL1HPLuGHvUzpA2nR2WdGPgGo9sdadWqMz",
  "key1": "wrATMfdVg5VeyANwMXCnC6oA2zpY3G82wzd7Gsvi9kWRfW6pxBLyqvUQABkX2u3sLb6ico3RxqkBHCdeYYPJB9T",
  "key2": "4pCGsmk3LUtF1aiy1XxjYHveHiZeqnkmFaq6L2kM68AXHYA97FKJ8PcBJgi1DGhgPdYdBHH1n8QcaqEoV1hisxbR",
  "key3": "2NzCyin9R49ka1N6uw45hpZZj8KuE1uzb9hSicgn8GwnVLeEBa582MrPCgEQYLpSfGPkjEkN7zVVRQRFAqBMZJwy",
  "key4": "3PeLk7uvSBRWzRb3TLs5g4cB9h3xkNqtD6Pse9MH92fKn6DiQsyncJixPDa3PyZjofTBWisyJHv5pUWq8N6t2Hgv",
  "key5": "4G456Z2o2Cj12gQidB3FvQnrhkSkQ8SHHW9KL6afZv7Em2bgkJtAxEQjpigCZxzf7UJ3oBFQ9zewB6NFFHe6HZaj",
  "key6": "671BcKj11Wyzopgvch3GbtEEVofgxM9bhBAuoz3vKGXQC1SYGzXkvuF8cfUBBpKNCKpNPQaacsWF937DCeBXk4Mt",
  "key7": "2SFdvreLAnLoyYMT7qdaXwd8NkTWpakR3bd63Qp6i5GecnekdMw5yQTscK6V2Fod2jhAygjskLKe5KX9im1m463n",
  "key8": "dmd2iak9J62uYp3GtdUZepbmzYYpm3Y7phKEkhH81rLGN63i4QVigsu1whBsnMKsFAuEP59f2Js8Z3ATn4zHaVP",
  "key9": "HHTVQ4mrV6eRboEVxRt2n2ixZyCqkSGeqVpb8hvt3esQTV4NmrsGmAy1pcN6Wem7ghJwTYnBLecZc6CXTmzLvGX",
  "key10": "5vLLVE6UsgW6xtMGF4haFprVihVKZGe9Tp8KXXuSGekEtDviTxmnF28GZH4jqyvFe9i1aUbMsZYu5L9sETaHMXpD",
  "key11": "3EF4XqDavy9CFxVV8nAy5fAPUvRNaLxT2sxAJ49Uwa4yS2cNM8xbFRzpEvx74zazQaqtEkvQw425F86vJAsFeVXB",
  "key12": "2fR7voVb4iASEdqy9BjFWDWDMNLeVvUJhpR8fJdQQUwY67Xouet1WqapCUjsEteun53mDsAfp7dgnKPcdRnFs2rG",
  "key13": "2j9HUry3TetcRNEpfnh6NVoUWqYnNdytP9HBAC6uh8ZA1NSsKT2R51XuVeiDzpicbmJqFb1Z997HUTJDtLpFKLWw",
  "key14": "2cgbyWDiGXheJUUjhD3CFutM2tgnAGAPHvDPzoL698TaHz4zSV54cVgAn8LyZhYLYkb9oawqXDiBxH58syNcmMGt",
  "key15": "4XBoMTJX3noYYBcorw6mU98gtMgKUbuMSdDceBpHLecp6m3LBQTneLGqoXQb298UxjQ6ACojevxw9gJ6kdU38ho4",
  "key16": "59fgiseZxRF2SPcFR2Wj6GPpMcGLgnCb3n9KyNZDmyxdczVSSmkC3o65qkHQnkZwwHdo6yPb7mMeSeyPxa5gnEok",
  "key17": "64ZhewmaGmRBtQ8t9s8FrbB1n34MpMnp8SywhCn2f864UyypjZMec7rfqLEC3G5P2ktYrAyyVryKeX1o17h6m2TU",
  "key18": "37HQTx2VzLnc1sG1q985PtSpYPW24FEpgLmrMNHWestFcq598M74bF3gMEywFaruBkissyfyTtAf1c7tQghXpS6U",
  "key19": "2jnDuoWXy6rwmKinjiJhbCJhfUssQvXXdxPPjje4kEsf3LmZ1Da8YBjErGfRQaYA3t7ts31n5obANfssDhDMZwP7",
  "key20": "3fkegvYnPdN4PZhXXuRYgZx9P3TMoFVptqgMqESTD3QYeJHiEJ4F7DJjefmeK4Lz4NPUD7VEWr5CVE114kgr6isZ",
  "key21": "37ehiDEWByr6c5XzqzWSzu5k2B11R2JLD1YBJzWWas8bniEUHNXtpZHbqxrNdvQWqNiE2XPDr7MrBtqjSETdnz5B",
  "key22": "2FWMEL38LKHECrRetyJRfpkBa79wtFMGUJfWyZKKQgZ4wxnu7JwTtKA6FxhWMWk6iBrfFV4tJsjPmyHHaLuiin13",
  "key23": "3Bet8zXTg6WL6BNSY2RHmWaaMdjkcJvBaXg3BXQ7GihMR7BVqbg9EJQPgGuLPpdggDShYHfN7gkSxXG54tN7hLUK",
  "key24": "5uFXKwMQWTx5qJbdbZZN1d5ZNyoAm8WanFV2x9bJDFbGYGz1UuizkwCy7SRAmXXmC5JwZsagCPiK3wpE5mbrwnKX",
  "key25": "66sUyDhmpoBGBVz8d2usHXtyBezs213cd772wEckPV1WRkvzCCVRLoc3B2wJ4dnhwNkzyjJUD5NSh9pj7zyKqu6N",
  "key26": "3cDfuZGcZmCMJnQTT14mVFjoP5MLnuvB9ncMB6WUgp5DmbNaNzBhKmAMjgjX9mN2EH1s5BMDNWe6sKcuJMgwtn8N",
  "key27": "fC9j8T6xA4NfRRJk5p98pGCimaqbgVMRA8ABYsgSuLBQ4cCZqxn8Fb3rdcPbvCvDYsrpbgfTcUjFnXyo62Ntpap",
  "key28": "2cpzwie3GuRPRXLsaic5PgNfSuH9dVEDdE6k978w6WVk33XjpXE2viKKZ8aEqZXc9edFP46TZ9gUpBNFS1ubUwMC",
  "key29": "5Dxy7UV1t7aWRwsZsgJA2zURWNCqZpD5svDTSsShnb3oAj7QUcNGVqFkJqdqFvfVJng6NzDDaJ22EMwQfmesdzHa",
  "key30": "d7fCJV72FifPvvFYnzzTgxBfRfhz3JCjK8k1hBwvYDwL6m1Rd4mw64oBJSEKCdtcfSK4Q8fhLDwzHt9vr9USR8z",
  "key31": "GNfRxfjsQfjwM7RwS5TaRYE6ZjjVdvK3KkuAPShukNryQBnrrq8wzueFQnYTLisStzkcv6YWF4dMYg7kcZq6ZDj",
  "key32": "5TVhZQFyBZNgBN1Qtz1oJqFKHfMvNmrnZ649ZE6DWLLrqWYbBSSCtX1buVsuHGoYaENpJ6SHo84EeFp524bjB6Zc",
  "key33": "2JNnFi31qCVbzAaFLASBgm2RJZKBiLMBZYyzWaHKNZWcJQC77rTncNS5XSbtDSpxKRp4HeBNA4xuXPrzidFZYgaW",
  "key34": "cS4g3HgbBFUKAj57nyzP2bGA7PzZ3Ax5X5EvfnM1Zq8weKct46rgECjnR7QuSTzfBbwbGzwP6qXV8HKunpgEC4D",
  "key35": "2zrQKQjhbofVgBNyxGBkT1SDJvnm8MK9WcXt78injqD84pBVRqHc9PpdqN8QVSdPsoLYKbTLWdxhDrCRpCxgycBw",
  "key36": "2B5jUBdympKu9F5yXJt5NpqFNPgu1f5sz1TUaqzCjS2v3Q1mVAZYs8JYEoAUbuwWBTx7KngwA6kPaHpboMp76Ckq",
  "key37": "4Wv5hjvArhE6FWNgAjyaZS2bqWv6T9Heu2sZM7woKfaRszBJkt5ZyyimyBK7MUewoDNEMMSxA5QU4pypqxXQAcCP",
  "key38": "3vt6XFriqfeQWp5WYoFKcRthvm6jCVr5Sv7qCQc34ypjQBYQxfhoVCdtvk7UTSUc98LquQvBDyeJokscoitp4LQm",
  "key39": "4AaG2XeKHWTGMHFc3VpHLpAS34KxbC59DEq4ArxGtQvFDqoFN2ZUZjRrpAf4ynxH4GnfpXvUymuqqr55aUiiabKa",
  "key40": "3CCbvw4ieB4xBjQHtYL3gXp2FWdhWwLvGtdXxVCoptDk5oNvHP3Jp4S6qcWGCy9SYyETAjZSFje2rvJdzrrcE3qN",
  "key41": "3WreWQg3xkmvyanV7d712UKjk3ahiwQ6p99Lr3C5NNrqw7SgKYzbW77vKqf1CUmeX8S9XL995CEDi1jTyf1JFCFv",
  "key42": "fbR6LSRnNL7YTNqwvitutPWrMgAHnvdKciip8GWAnKHsLDNhcwNdtEDqXDx1gAvcjNtWY38cmGdP6pN7sFVT29R",
  "key43": "83jfi9BGHiesc9Q5Usac2B3LsQsBM8DTAsokzE7ctcs6ELR7psC3tPcJD6zcYQAqvAJ2g5E6fXsK2dPd7dcN6Q6",
  "key44": "B4YGihct1KRjDeKLx7Db2kj5bKybxkiBzgVvg4Y8LTDUNNkKsfYo4NEEopzaBMScwHWqYdxnz7PBmnz17hkzy8U",
  "key45": "42yBZ6pg1fe9eMVxrBAsDGquSuvhoRWdGLN3UQLYcrVxSm85qESgNPfn1dQV3qyDANZ8HgwcRoyVHMjtzqMahfe2",
  "key46": "c6qsapffgJFdo8qgxNpe3r8sFKEXo81WuydjPJNN1UsDbzTrUddvJ3fK9gehVsJKEae1S6TVgYDsAai7v1FdSfh",
  "key47": "65z2mdiVeQwzBUkaRXaPkrwFjJGmgn8iCRcVivK78oWKXxSuu1zEidgoc2JXZFq7Hp8fTYzMrSNMAUitrQzHD7sg",
  "key48": "3aUdfFisZkeoDDBKYpjjc9fdvFbMJwrGdV4LLAE4mM8zCn6pBa1Bs8jG786pFuHejsXD49zSU59ivZznj7AjTXa8",
  "key49": "5dNQ85ufb1vsQqoRbVa7twzx1D2Ayw49p4A5y9pbGe7V1kyS89gQe3SjPbZjVk6h1UAB3ss2muyh9TyXGNMHf57Y"
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
