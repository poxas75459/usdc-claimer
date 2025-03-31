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
    "2L9iMY4HcdSbz9QLv925BKFbp5k2Qak3CWQ41L88esS753oe4BSYG7cyEU5gZfoXjBQ13d597jSDJn8oZA5S1BK6"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4TZLzFriowZNerkar8w9aMptjLYHwNhQnvuGitJ9oYMMtq3HUKV1XETvAYWgro9fAY8DBwWUmXYQfpQpYsNnZDj5",
  "decoyKey1": "22Y9S1U7VHu1krcAC8Khs9P1Wo5T7sChVBAnmY1cpxFHpyro3vf41i7rsN71SamPyuTCTwoHxcNBvgTC9GmxDXhz",
  "decoyKey2": "4s5gHWTgz93HbeJuGXYt5cMJrYPhE2bGm8x5dn1R2R2aV4PoqhrWT38QZkTCmAeXURRDYsjW59zYNAGq4yBFjdBP",
  "decoyKey3": "3fMnRgdv9qjGeM91D2FsJPgfVR1tCFLbToWSVWAsCY3eEKeHuRrFznnsNvhdPz4eWL74fAjRKR5cj5z1erqxWicE",
  "decoyKey4": "2LqyAyYDMNwCpMxo6pRDtGX7nS8SGcQUZwjorR5KLxY5AFQXFM8btWDYQwAd3cuFzT1syRtLD4YKWL47eeVzaAE7",
  "decoyKey5": "cd7YqJjCyDYrxR2gLDmNkbf3sMCWE6uGNK5yGaEX9GnFFDTbH55rjnhqy76cPCbgHXb98wnmAmrdFvd9cPFt7wk",
  "decoyKey6": "4X4wJRpiqCa76khdKbBbpFEWmvwAZsiXBZmCuyAj3ceJ6N5zzdkpDXvrLXj1rj4qdvpdaZYb8sU96ETGXENNokRL",
  "decoyKey7": "4m58PBP3yryhMzo7N3fa3baL8bYkpXknNphgQzrdFTSP6qRQgLcbvT3iAHDVYj9fkAr9HNuc4GQoiFobWM4tMfXX",
  "decoyKey8": "3LS5fFdnY5Mu129A5NaajUL6jh35hUsM7RMPuujQoCrkX5WmHb1CNU3wgcMdHiJxpu1mykpJcjVJt7W8RJaY5ygm",
  "decoyKey9": "55eFHKE6GPFC6nhXVSm92sW3ZbESnwJHjeo2HkLwSjT4uco72HS7JaGAMTMwDcXQa3ZXUnrv5G8rKoQkbeFdgbYV",
  "decoyKey10": "67Bk3RpUnyRUkELP4k3bZvCpEn9tCKYUGbCZ3p43qcpsp2PgFuU1Qb28u487wuJxB2aRg61YXmDccWhuPJHcoW4d",
  "decoyKey11": "5CkkzDbTvEqkyH7MA3aGTzmTJqRXGfYSP2JVmjD9wtqxMRqAxUA1SJMr2rzbUmPntRUUgez3X8FXECavvSH2to5T",
  "decoyKey12": "32iyeRfMfHtmm7aD9pzniPSyHZNaW71Fh6etYdndKDiqNH37m7Q8wPDCwmntR3MAp95fg1LochAFBE1kad1WF7U1",
  "decoyKey13": "3YWx2FfcpLUCJzQNbjv4aJn7HCaocVWkFFYrvL1ANJNDGw1pYi1t7m33M1Rehrex46GZxfR29jkoosgA8dWJ2UCN",
  "decoyKey14": "37ASPkdYxujY7yxwqzjJtPS9CA5MGxGh8q3tfUYDdkrWKotNgHUzE1DgK715cCMkKUh7bHm6rB9pt7njqGxbhdWr",
  "decoyKey15": "2roafoeoL21pJSMydD6fAyFPx4uLhFVep13GrCp5RfmVrJLtRrTu5dyPc4V1hqihKwY8DKGHwnFU4EL5JgBaUcTh",
  "decoyKey16": "4LGbkEh2Ec8Ma2KU25qbZHVPT8AR3xKsNBidC5XFoES6TaU3U4fg46MMzWrERybVTuL5D9xgbrWFyrhrMHck2Kiw",
  "decoyKey17": "58TTpnHG3VRFSeYRe6e4NXAKZriPyJDigP8j86Bt6msSuZkyyoQrkJzCohRDaiNg4rbESobmR1S9f5e7tRzYyz8h",
  "decoyKey18": "2DCta9TYM1bpwTqw6vdEhHTdCotNG2TyBJtVJpe9zU7kemhaFbvmYwPP5brKERpWRGi5sjfPicuKzUopnaE38c8t",
  "decoyKey19": "4qWQRFNYrCKh7mVT1ZMgwVnipDLdcgvhSZTRuL5eEWYAeirGaSJ94iQg7WaRA8cxYGoKceXipgLcbS6iVNHGUKSY",
  "decoyKey20": "RhkkUbLawXP625Wzx17rQuywyxtz3UzUaBn1yDZK3gYwZFDbCGicocqw8CbHvkN8wrfr4RxzEhNB1kFytrC5JNq",
  "decoyKey21": "3oFBEh4KrAcHH6XDQhgbAAkc37LNSMpzbD3WvrJrsxcairu4sCp2BB8KTZ1C7qgduuX9erbrtDVPqgyLphi5eF1N",
  "decoyKey22": "3QtfsixdYL1S3Wp5QKADXR9VKLWqaCQQTmogkCD1CDeZgeL831tQ6ChF7K3yUoeLPioaAhw4wHxjeHa7c7gjr2qP",
  "decoyKey23": "5od7Z14FjBi42SY24ohijJuzSskjuvXeJUat9LszkSTrDgciUGs9zCryWNKM4wVjwmh8KqzRb68c3M3qDvbzEBgF",
  "decoyKey24": "VFj5T2MNbaDbyw36GemcvNKLmk6XbWKTirdccokwRTrH8u1DGdyLB6ehFJNjwn4QMePpcjdAeNKZyhvVd7uox81",
  "decoyKey25": "4kuKhxBknfu2KewoGEEikkQ21oCWdyZUDTreoE4QkPvfVSTzK34atfkFmEp9egrXnoHUTV5RQWxLzdNsNfe2RccK",
  "decoyKey26": "49jPhv3pZC1u91Ht5RnDDDbYR48FhpHY6Q2cKfQpc3qDZEd8ffnJpCrUYg1FYTGsDjrFk7p1jdGSgXmyYne7URem",
  "decoyKey27": "4mMueW8PTxHRjR72MbdqKkd5yHvrNuSPepSa7rULUA7vigo4SnnRecjVngdyP8DPggzRWtQTjK4oQxLUoWYkXbmh",
  "decoyKey28": "3uzBMFLbQvkHLiy8kZ3dcP2ym9RT6BzXgzR8uw7AiFDAxtStVHqMzJjvrETxRcSWKs6fxyrDdVGbL1H8A99LtX8n",
  "decoyKey29": "2gPyDddYYHFQpGKyuhsPoeS31ZJ51MXTGms3imcZR61YLWvazgtS7Z75Ewvm3FAHLbqYEcGLYba6gpMUYx2T7nKw",
  "decoyKey30": "3sTp7x5UFvn9bASsocg1hCBM9yfDkJbVnBKH7GkGX1AdoJ1uGt2ZUbZmgcj9ecLSkz3rr66PsBRGRgmb7gnxd7Ya",
  "decoyKey31": "JtuxJ9JbRHWZkxZr2v9N8dwnMu84pH3RhCCC2urL9qL7hwBfYbeN2YcVKboxXtjtUbVvQWCqhz2PVzeR9evPGJy",
  "decoyKey32": "24BWDkthHBL9zoqXDEd8obzdJgQuwdxBZFPiE7S7oiowhB38kttCMSPrwM4L5n7BsrYhz7FB3DvXLoikbxiFj9Ez",
  "decoyKey33": "2CUHoR3RZAxnSJWxofzpqGpeLEyRVZNS4TVKbnAY38KtBuVfWFYNcmv4vSYNiG1ii5nDJ5ZihNT3pXzgk6R477su",
  "decoyKey34": "3JweQzuJhT5wuJ5KPoZH2cQTtg3C7znGcQa999i4gKZW9rjiPUcGi4c37ooGZsVwHbAXGcFqgF5D8Q27Ca9ZsJku",
  "decoyKey35": "55KGpWAdJCtHS8xvELqA7VUw12ERFqcpQ7M8c4p83Ya9kbD1EW7See7Ky5613MDNp7QDJACMEz5JMHqjYvXSaXbK",
  "decoyKey36": "471WkbwZ9RqWXQ53hUMsiGWkM1zTUFHgbVjVUKZ9mn9M9rVTB5uxbCXatAATCo8uFqGk1TtGG23HDWuYgT2GrBNk",
  "decoyKey37": "5qhFshoXga1jwaCYWfmr5LSRW21tCD38wM6xERoeSZcUpKqrXTSvP9quzSY4x8jpzyseioEmBhr3uaGD5Eso44Ak",
  "decoyKey38": "5uqQFt7Vj19Ahk3VENsyt8d3or7nPXsQEqxPQT3FxR5BBEJePCgX9boz7RnAdHuQXw4WBe5qWZM4AM4U4EQPgbfb",
  "decoyKey39": "2cJtLcDTEuAUDex51qSMkmyiXu29Htt5m2YnXMYD2acsSgkH8igdNaF77jP36cWXe2dU4mXj5t97NnNaFxihVKvr",
  "decoyKey40": "22x6beERLi48aNXhcC9Gsc37bZAVQre5oBsL6ctLH5xGH9MPbibkLCEAHj44jZLiwXpnthC29Z4fukRd282gYqRq",
  "decoyKey41": "zQGRRF1cFbRa2YNYp1TTH2D1FKaXWGbBVwjc1ZgP2MDGcSR7tP4tpQLyEYNoFU3eKLSobhqB1uWcGLDZRcfroP2",
  "decoyKey42": "HaGgXFx3MtYnWhjhZNozFhqv4Q4LGbqFaX1vJJawLsaRiZVVc2hXXWmcaETSZfBN3MgAGHhnveRcGBSb2eD1oTH",
  "decoyKey43": "2X9ZxoswQ81a7j9fznRxS4hZ8SerdEHsNZGoFtL73PQa1JYxC5eex5pt4bNqMVcz2v9HQREW6s99pPKUzRdfCHg2",
  "decoyKey44": "2jatUtG5GsjVJ483aEN3USy5GJkSip4gm1AgY8fuDjuBYJfzMF6ZaZUSzBkzy1bWz7U7rN7dCJfcuWZY3CUygJ6P",
  "decoyKey45": "xnXiuGZxjE3dtP8Ai4onfDtVfJsHaKnKBU8ebSeYuTiRTzEGi7zCwMm5DQTDET3p4uREYYD3doRLRDFGw2Fka7Q",
  "decoyKey46": "5DQP5QFuHgRhfww9RATf6f6GDhJFUTb6EcqYL58B4gkXKiLKFCWHjQYe6bDoM5SEyoAKhwJhxHKXH27Sfo7GcLgJ"
};
// DECOY_KEYS_END
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