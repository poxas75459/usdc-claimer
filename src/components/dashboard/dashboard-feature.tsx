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
    "t96p1sXa4SjTANBYgy5ZneRFwqXNfyLRhpu23zXEJ3Eq9XkyDQcPdanrUeb2Ry2MLSy9csp4TvhXqcumyUzkuSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3waFn4uosQWpVFHDLXpBXdDuj79M1mtNmNpp6TnfLtb2yQHVeAy7tCk2XxkLvX6bsAN16T1wkL41ZB1jaHNyWuWi",
  "key1": "5uRsQExcnfpfF3oweAyVdnkPc3KNawv4aykwkByV9sesLUidu3ad5Z2qhhmo4EpNXeg6y1q7VPjLCfTYDrU5gWZo",
  "key2": "3xsCeG1vTvKdJvvh1cBfFxg9yeb7YoKUvNQSdv4DAy1eErpLgRDMTLyRfVj8SrMjTHfwxkARKDnLq4Wa9ibn8661",
  "key3": "2QBp9dxhN9jzBHGMzZHH8azvJ9CP9NKdKKXKBLKEDUn2SNoH4T5aaH7KnH5EMc8XssAEc3KtPATBcWfHaHydDjRJ",
  "key4": "4HpGN8Mb2ZhKj87SgFB4hKpzomQxpPDVfHpecpLZAYeCnJeW2yWaSS7BFub27jEa1Lp2wmYyWz1Q7urJqGP5xvCL",
  "key5": "5uno9pzmYwLAVUoPAM9dxs39K4USHCdrrY6xZNdz1Qa7dJRPnQq3JA2j3mnu11WBBruBcrd8gqCvr4CkkrALvacX",
  "key6": "5v7ifrgByvPziFxPg9xVNaPpaGrcNxxvdh41RMz9ErYCTofKuQoqvm4hRUSRqaehFGKYaQhEwGzFj4m2mUFY56Ce",
  "key7": "2Q24FXVafyNFPXtQhpjbL5QdHBZRkKt4E7Tck2jWUeH9zBd6muxmhiFkFbm26c24mdeDfs8gnGbYU953BofURNMt",
  "key8": "64Pxh2eAnwJ7XtEuG1qE8zhxrr3b2kHkgoD2LT5T3mnvx9VjJGKgmXHtYJwqDkCFn1KwWKrsKyeGReeMYvUxSdwG",
  "key9": "MWsJYTVHE1fotJvNc298Evyv9kWmToqLvfBQisbXVjjxn3jStgJWyQNVPV8GzDsDF9AAyQ7siS46cGtfkLa2jru",
  "key10": "3Yq8AywBjRDTEywmauMSTXV2hrGJjcUqTQrDz9DxP2Mwznak9cZtj225t4Xt992yJSL36BvifqCS6FJS631zwWx4",
  "key11": "5rJvJ6fu5Kwpb9kT4CVEhKjZfH2jciQMHEDpPKxhQPNRbR7ZEFArGpCcRkusFmQzNB3BAH2WBA3MxmmbLvFFjkDR",
  "key12": "63MuWeLivi3BFuw6JsgrRi7wRw1HWXDWDfX3JXNpbCiK2dKFwbaNQwpDVoVstDPkKJSUdpBpf9wxutxp4CxSPJA3",
  "key13": "86LV8vp5dpAjwyi7gNjd6nyVzKKbZ3SF2XBHgdN23n3jYXeMHSgvnVWuwWCmK8khQjcdP4X1dCzWMj9LZS2mL5F",
  "key14": "4nq2hAHohJ6kAWouKA5F85KNAh3LC24PuFzYLsrYiDj14pw8EYvhhskV2QqDWJNsFQDdFGXBUepF7dJL9DV3ajEL",
  "key15": "5KeYVjZzL2y12SXTuGdBPoouvHptgbjWANBf5EUs4JVGxg61eurpQfG5RTbVpKeJZzc6NG5xMvcwYXtif5Tss9N2",
  "key16": "xuUpmWSQYBHy4HB2MrcUTEqVChKfHSQf9gXasNc92Af5VJLUhJeScSLE1iSqtbvJmpqotPghAr4jBpsw8Uc4R2d",
  "key17": "5b9NVdDggWwreFnBNEyz5UPGa42BkM4uxMnjyiu7c8EEeHiapBYyDQTkFqQqYXfvRxQP8stUN1ZoAX1ZPGZV1PJi",
  "key18": "3f2JbCTo9S6JwCyfv2zsDxXtaNcqCsvP167cBmhFjgNu1Duiqh4yhsWRDFpi7NeNsemRQHwSNjBDG2AdnGHmJoPa",
  "key19": "3ALS8bKdQotxsfdjzFKrbsCu9QnvxfSSGmtbVqNCtyS1ZU9dbEPokyXogGeK9vmFhoGXLGCfXDXY2J9kPdQCBJat",
  "key20": "4ai9qdoNQ51TLxRcZjv8kNCwgCKnmxXiLDSxtBdPvZqY1dzmdff4wxc8cAWqjo4RXFzoGeqFQ5Git6JA6cqASMPs",
  "key21": "5MtdnBWFcAbtje7oJCDPLCa2D3NXsVxTRSm8dkSo1CmcMvKK5cDvVZuMVSiSUAcLvUd9jd1K1c5SckBy37C1PfPT",
  "key22": "35PmSXh6oK27bAiwawtdcAWdnH4Bo83mg5kLSxT9y2DF1KX815XstXMrd4Jg9jsHQYxnQ5iL8NZJ1djtXMsHaKrQ",
  "key23": "3sC8ZAoMdEeZLPRAZVLvL5SMLbvDtKNDhG6v8fMFwENZbEzvQdzDoAE85yMQAs44wbG1Sst6xR3WuVeDchE18XbG",
  "key24": "3z1Bnd3WoAGjU3EVothhHdrkUPiZ19XdiLFEezfphgS9P1kE11f9qQMwaFBTM5PfvjpwTmGyWTk1nvLocrR5CmVE",
  "key25": "25DLoBCZevE9KYaCbwCb8D435hLRjSsWa2uEXB86V8ZgRHFv4L6tPz32UtduL1XzSZpoz1Ec6P3ityVT1ex9vDVf",
  "key26": "4vhc8ugq7heyhq4i4HJxCWBpWDqPfySEfVhesFF1sG2K3AM1VZX9BcAgnGiTaJ91m4awYfrPzPrWK5Whp5ENT1aa",
  "key27": "2sVikGX76Nyd61mVStZj7mFSNaeeUk4DUZDUVm6zczKcsfJRaakVjHNuauEb4eJ8vqyyiytZaZEs4f46jqiJNTqC",
  "key28": "C178qEDDUJ75aMpzFgN2JJ2jdCNcLuS446GqqM8mb4tKLWPfv9XKcgk4zVJefM5AC3xQMVtEXgB5x5EE2GfYKZ6",
  "key29": "tGp56ZYgunFSShGFNoz4eoecpuaxc18mS7mtjtJxL4tnUphciYcVpvejv425yosXx4DuTgCLVNxCLFHScgddZZ8",
  "key30": "4UE2wZrqy57vxdPov4YJ9yuhCTTiw6PwoErDpbvXXPxTfkSjATnV5eiBxZkBXXewZsmPyXYt6ZTSespVgtTeiTJs",
  "key31": "5CeqXD67eKHdoxb5Hykh4WUEQdwcC5mRGWQHYGf49PW6z3UcXSA4fnok9eusvosytM1vukiGd37iGP1nByzDXzEi",
  "key32": "iswZMWH4iDKBav4UKCdUJmVQ8y9XE4VRwzesbEYfFVdWo1neoECXe6fLPK8jw3dxYxQmsHibW7dweyVcDpuhFae",
  "key33": "48GvLYnU7XVqJ7FYn2CEUSY6bVUkKhqPWjE65j6ACWgxPkAgtBDTPcxSn8zPTGexJou9t6xtZ8aY4QejDtJTg34t",
  "key34": "4YJSYNGEQN642jQC2J1XcFKvmYNbod5bk9YArAJ2sLGdPJa3XVf41h1ke8wiRhjZaCCY7ykvw7MPNRiCTMF6pmq7",
  "key35": "2virkuei2mmdpy9wdCezx99V7EpxDUYs8VQojWXUhJS7miJsVGQk4Bx9Zyi6rGRaGSxfKgcet5fbgqDED1ALPXMN",
  "key36": "6GnbPfzCh7axUEME9a2xi2RHfD6fE5gbutNAeATnonAy8iFknHRpDCXXfCUJPZjxxgYCJXXiM2jK3AJ7MuzbaGz",
  "key37": "4V5UwQA7nmJyt2FHQwCkz2MSZEdK2iXLq4hTJ8TTvx7G9nBXN61RFPQxzapWfEZ8gVYtqdoswdkCSCXxStH1fLHu",
  "key38": "K9gkyEbx7tgwDMaQEHm5oGn2SC19PHJEFp1RnmvzjhSSQUer3jv94h2JGufaN1uQNuMHMSs6f4jfUw9K8zm7dac",
  "key39": "2VeJhhGqWSpk3Mp6hvDHmdp7MReef5JYMfCq73QwFiwb8JCJwCM6JPdXxAKqrxG9R6kKXgHjjuPmcf3VrXGBKCz3",
  "key40": "2c4a4NDXrMzehWegAMyNpwPnt5n4MAdUrAv74kzcb46x8RrWnm4oPUqPxyeNikLYrGHQrGkYHVmkrHR5avrDoYwY",
  "key41": "3qjaa8KNgRTMZMxM6CG3X5KRjhiRCvSP1JwkjSfds9YqhdwT9V2kCNEA7gaVfYEFNhs4VLfmiepkP26RDZxPznGG",
  "key42": "2wQHbjWJmFZc4KDhCuTMgioKerRPu1z9f6R9CdZCStU5RB29uG68tvSqte6fX8b9iUM2KpXgyipA9meni2Kbk9w6",
  "key43": "5zjdET3w3FYgNY3N7H46fR4gGiUaiSJnuXfmWrpz1DSfsfSZyYKdKTL1NdF35Vy35eybCZq1zhZ7Jt3etzgh2cr6",
  "key44": "243m8cSmqr1TNtZd8Nx48Xtn1NZi9hmQaWbJPUcY7cZjJhvY62HyujhcgFMAXLsLYavGkQoqURiAhbz85wg1DVFZ",
  "key45": "446V8vx28pDKBaET8UVehcTSm5fhPrCW8j6jbaVcTCBDqm98TzzSHvaqrbA1ZPVyEAWStso5Xp7bp3GtxGNr8upw",
  "key46": "57cH9hobN3yJUwQqePEXbf2R7yVdHSo6czst8nG78G8UipWVTUuTSNNgV5zSkNvtG5sGxRLD7KUVfqBEAha4zTx6"
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
