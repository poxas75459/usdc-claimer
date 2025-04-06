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
    "2Spv5HJW6XoDuG3XfFZhaL5KUbuXiNUsN1isKXzhEyd93yPvuHtFKi37Y96BWPEYH3uFCKCoDT7nb1Qmig9ChGqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oQDJ778UsHKzAqmBe4woCQK1p8bPbqsR4V95Xbq2A8xRdW8zhpRcq6ubdKM24deKsnothjK29ozRsSFnz5yxuHV",
  "key1": "5pYVNV33oTBZHbCKNqgXooEtCUv9E2gXjopjcCjD58Bo7MGRN7nsfdtFkP8hUE8UyNC91KKjrjXe681wshzRm5qM",
  "key2": "q1uPEwUdmMnFbCXwsqSjfgBgifL3pPmVVToLCzrCmnAVFD78KMQum8qDVckvRtH1SK29NMomq334xcMPXQLV1Re",
  "key3": "5myERDTPQPQWyG953ctHfe9KNJKq8usGBBPBGs7PcAXLudXVhgA1xS6ztvdoFYhtVZvaXfgV6Hjcxu1eQxJsjfq3",
  "key4": "4xuLr21CuE2ZD8MPv5BTpAzjutXBBHwUcsH3RGepMUq278dpNRVR3SrDVyzDeJHAA1JkrvtzNgJDhb9waGP1Kf49",
  "key5": "5anxLMYze6HyZPe4djVeB7cSMD3TQdVwG3dMbaEpCfAgJtgqsCC2sSWgihQd92Spz2648C7SRXMiZWYUZD4A2Gpx",
  "key6": "8DdnPZH3A8Q8aFgWRYcXe53FENrFYE5NM7FJHRyYxp7krEfKkkusvnegJfQXk2D8nkwHSZw5b5FxFwPNbKgkwnd",
  "key7": "2R4QbY4ntovHWWovmkfNQJmVxxTnnryXQDisiFEtokB32U3cTwZHJsrTjtnXTuJzYbftABbBFTEnZqPLTvmXcCSe",
  "key8": "2YFSfm1cWf1eJkuJzvdm5jD1ZE8yJFBLo9souB58ucZg4NhnpdtLdVwyNeiS2TMQT6cR6SGhBjZP7APGkGxfTkLd",
  "key9": "39vMjgHCpVQE6Fk6MA718DvakKRrt4AyRqsciSTNgnv4pmDn5pwG6iC9nwJ21ntdkgi3kYTXrjfrEXqwLzzBVknB",
  "key10": "4fkV6cjZytsQkbTnXiP4N8c62gmEvCgxdbwaXAoyMfNM4weH8b7TXpoXhi4RHcA2o5rYM2Fb1JiFeJuv5cMh15mg",
  "key11": "4uJJyebjz2Mv3bJmbSVxhesCU89YRkL6ARJQx1V2bTEpawass5KsqvCNgwhh1cbjEeNYRQ3FH9NhrhLdASLJzKUN",
  "key12": "25xBqkpFUqNQyaUxQ2Xa2qx2uDivzGJG5jUFrN7535RM4y5z6CrCecBDGXn18AkbGrg9ijPwNL2kL9rSg9DotVHU",
  "key13": "2VPb3y39dQ2Asp6dGZyJA3oXeR4YJiBny5ELYncDA7D4U4h1xJMSesTXPXaPWs61RVjEsiD7vcXfuGautKrfNU67",
  "key14": "3Km9fi9dpSe6fmPioMLTzfazngiMDHgfLYofX5DTvBy1AUPsPkAD2hbmTW7aU9n1txzCC9C8JPTjwCWWraq8GXug",
  "key15": "3NCMXsvv4q9ozjNvduyFFatGNiY9w19J7F1ZLKmP2fK42hiixC5BhExSvzKucaJRVQx6VEDsWYcZikDudNoREsBc",
  "key16": "5cgkcLaXR4XJbUVJKULLxi7ULpGEHgo4JnPW5M3XYDerYhEqL9uKmMRuGxQTyjqeUAmUxH2nUdrBUWgTBY4sCFE7",
  "key17": "66DUqXcNUBQhAvzaEDFNMJpEpMkdrdkbByNW27GaSaqkk47zQZEGSgBjUWtkrPUuTn6yiFmqA1JrYvkE6eDKb3jP",
  "key18": "8r3XBYLWaz9W5KT9jd9YtrQGNgF5ExusEWQ7z5jvmqjU9wAmiwEWBZVmxKDB7NLjcSHVwrkJFLXDMbfLiYUSSEN",
  "key19": "3pEVhJbKgUpEb9X11RVLEPGZE59JtNjLixSSqUSZFLFd8EkHG2rPKaswyzk2RFAcE7n55XjPVE4DexEXa3Cyfjzj",
  "key20": "3XBLxgxkJgDhp84MjJKMTrJfnTfiZZbiQhbKPZsxCAn9zc32P7E6buQhmbeSJzPLRBx6LGMMvT7VbtEFZgkyuYdG",
  "key21": "4jDZesyb2ijxb3Zwgd5vg5am6wgb7NayvaxdxTmPdwKubxFGyhNGKe4QXg7Y247VfyeaTVwTb9uReNp95nJWyFSb",
  "key22": "28kfSxR3WG4XBc5zKU5QqNQb9kkis97XvbjEZm3pZVj4FqQQJwqQKwKFAP9K6WtatyL1yAkVs3ig9qDMadjfikNR",
  "key23": "4nZ2qRD5XDA2Z7tTo1Y3wNs7RufqthZHWpvRYBzfU4HemUpieNikJLr1Qx2LekRQzTpegUMEVLyzpVNWsQq6fLqm",
  "key24": "3SUPhdAb28JwEn3dG9ZtnxXyFAPrQwCCisHMsc1QN4tnr617FhUixjnb761c7CDHZBPRLqqyKzyVoJ42rfEFS6mD",
  "key25": "gfdKz9cKwt5SzVMeAracr1AA5ZGYurNUGzUo8fmSksZCQZTbtwUJCMDUXkayJMFWsZnppoiJQKxH4PogfxTxMw2",
  "key26": "2pZWDysuTebfF7B7zef5FDeVVBmKPQyUvr74vqnCDYyX1WFx76cDVk94YomVizeQYpZJHdbM77oFFrRfmCi1eqE5",
  "key27": "UZVyAWx4ubBZfKUEkMrehxmUMS2gh5gmTUkgbTrR8QqDUQiPbHjAVkZGKza8njPrdx9x8Ke7LthnARiLVpWxdbA",
  "key28": "4JJ5zr9YKZL2WDpJEjEax2kGCReUWTJn87PL2VM4SGKkFkUceUhVovnDKJ9aUbDsX21swkGx5pjaQFgxP9gAKZ3y",
  "key29": "3u4hb6zgJT3PQxRkmcSbn3dV6HoY33sdTFf8uBS8avzfoLGkiXQgKdZpNt5Spkymtps5uyY7HonbqAtvd6Y1vkyh",
  "key30": "2w6vVr9ULD2aMXu9wLv82iTDdAz3Sekp4bPK9yCzDrbsubLbAYf27xaf2rVBNtCxHJHTA8698fYy48jbMDDv9Aja",
  "key31": "4mPJjirGZEjiovhFSfaW2iyDgd4rLrgwvXSdE5tmC5mPNfGfxorMwdPA2D8wGuCZ41GtNtViRSytghNa73XYrdfv",
  "key32": "4o28ZVLVBWwRzU4jWYK2Jbs1YAmoBsvCSTpYomLxB9pRa5UVdMtQtEc4b86YeByx4jv7LmGCv4YNkxMVLfT4vb8c",
  "key33": "3E8oFTUsjTWRWVov95YtuRL4SDqk1ze3diN42o232MyGF28bSjR7tzYd47YZj2hfoHEdsskSPxNn2yfQ8yKy8kuL",
  "key34": "4Dm6CqKBHY5CRQspDsgKBPNxntd9nMjh5q6yfJ5eMYuThkBzDeLNbuVtU1oMgKPFjJcJr9tzhMqdx9kirywbHMwd",
  "key35": "2FAUp3t4Vryduw5hc3eEYkcZhavRSfPg1Uc3Xt8uNGFcm7cWdsX2rA4Hw2XDKhpaobGxdMKk9zf2LuDTYHjcqMsj",
  "key36": "Zam5sc4swk9XFhoUpKNXDPfJFPmtDKHpT8xtkiZghFKzK3imUMMAaarjYaADdxi1f1v6uSCbZmJQPwrpBiX4Hzn",
  "key37": "SWWTinPaPw4BDRpNqoDnTihJ6k3g1PEhJ9keH5tCB3nA6LRJ16yxgSDEX2n8drAZiZHWsAHFKzFVCmsYdtjFVgz",
  "key38": "3d85MgLasM5idt9FYchBeRwb1eaEuStZ1YREQW3i3BdMMLScJAFC4xha6tvvi4gTRipwUsshkwUpyQCVRPGV5H84",
  "key39": "2PaXZbvDbBMi27pvK9J5kqvagucfN3Xn3jLs4AxjNaAspWbZyMcy5JiTXfeTwZd8AcekzbcKfEeauJT9FQDwgaMY",
  "key40": "4uWeQfGKwh8S5Q6Cy2LRewCiXmAgV7g7ftjd3VtbCqqfqos8Lbnw17uFb8qbEnAiZ2xuHsHsLEZyAmm94Ae1zu7M",
  "key41": "2cLTi5YVa6e5MVmtdHA7Pb7ixwyF8TxK26TGbcohsXEmBjwTzPpEuhfALRB34qCEfK1Tm8dWHVJysaaB3SQrbkR5",
  "key42": "3bvM4t2JJiPJu9LRhndM6bpgdL24ZEiA89UwS6iLgT9KWxi52R59tzr4kLHfwPEzzBFpuRShUkFy5DJrw2Qs8DLU",
  "key43": "ezaiXZnpPfFYPk1VQdxPjLb64eAtFrXsdMavS3HBHETDrHt96wM3ZrNm1kfC3PsYB6vTQTxo4Jc4WsyvPqBWYHi",
  "key44": "LwefCxfv62ayo5u7tcJxsSqmrBRP718kDihN7e8s9YoBQUsuZamYYamCp3DDMzDNho4a2BKAF6WNejD6wdsDEop",
  "key45": "27jCAeiY9VWaK6D9Hqpm9KmYmZqWCtKiHaYz8ZQ2LvzTmUeJu7yMBeEhD6dGGbgopa8pRvucw3Peg57VUL1G5xP2",
  "key46": "2JuCz9sprHPmMtJLYnu2MKETThUBxAaWDw4kAB2vbztu2H4v4JAZQaYPdBkSDeT3KfJfwX8pCQsX3hZ5akku66RU",
  "key47": "2KnXCmYnpvMXTXUSyni5DdQF9rVunYJT35B5ZvHrnn7XLCttjUzQkEMLzrKGo7ngTpcnBx6fRGYpkB6ePdYnYL84",
  "key48": "28suJF1PTgyosrNuN9XZ1zg1rrogA7LUoB8ubjVriZyDMcPUcrpMhv9fS1z2uGNDjWDRiFAaD27hS2znGUvfGVP4",
  "key49": "N2s1oCYfXCb2pmFe69JgHmyqSQczRSsdCmMm6F9zTuQXDc1zEC2THH1QowLCBuXT23s6u7Qn9uHEfMpfaVJS3dn"
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
