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
    "3drZWyaWWnbr6Yj9ij8EnFzhwGbvLKE7zrUc9UHtgzbdMfKmEidran1rAi2WEmkeAv77sjEbtA14vjxguespRHav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wj69SRuiX4w7SMQRtsCaTWi2QKQryqXcZQYx3x8p11zunAhkQZ8yzxvciYyARrEQ6KkQuk8R28pAy7mNhvtxGE2",
  "key1": "2WDYnfTeiZYMPf5Dwkp5QWkN86uetWfnzvRYT6c1GrSn3KCjUyaBjHG3xKKVx4iTNYnbqtn1geFsJmHdG2aq1L1B",
  "key2": "2te2qMZov65PUo9m88Xog9wBvxVH1F1ERRx2EcAXs83gbBWoD7AcwDfXT99uQiV9w8pU4AuuztLXHoX2HaFa5tgF",
  "key3": "3oeqEGCxiQ3fe1nnt29gLTCargoevsze4TZQ7QksJfpwyEWSPn7oYRGin5Ed4kFDE5AUqzneyKpdEFafEr7JJHvM",
  "key4": "4SQFjKyL99VSbP812SZH11hN8M5o8Rb1zR5VLxKUrvtUYyCCoEpAGQjU6mDpcf7AJZUVBFLw1EhBw9Gwn2tF1oRn",
  "key5": "wwmpgWrh4kgfY4GChu5dmFFMXybRMiMv1Z5wPZUMjeqG371FfHUhfi6Ai99r8Zr9odZHRLiQMYETSBD49iMhRwa",
  "key6": "2BMiF7EdSHNx6BQgnkq22rKF93jrdbWUQhMURLEBXL1ANp1kLT1qXvf5Ha1Sqar7PfXX9XoF25EAhiNn5vQFaRXK",
  "key7": "6ktRrfX71QWQrL8R6p63RwLfCkEh48v6oN58s25eDJQn1gWBu4GEsJta6Sf5qyR65YoFbG6JsNnNHroUVCdGv6p",
  "key8": "aEYPHATn2bctV2NxBn6QQTqYzVdfKLcJAhwsiEgAKCDgZrifkr4dkxq9DNg3pUWTaMvK5D43FAByeDLrsCRjztE",
  "key9": "BLHHNt7NJM17a7JqXJF3oWGwPuALx6ueKYpSL66txkM1eZFn4Kmbg88ctKECe1TFJ6hxV6AeTNNPgaqmvpqkGTE",
  "key10": "zzMRxouxx23vRZwXX1tucV5hT3XhpKBRt51cxy82HCKFTX3NBc4dwXnq33XP6mhTspiGu25gJy21vDzZvVKeDK7",
  "key11": "4yagmzS3sFjn5ZXtCT8NjvSDaRCVMCZA89QnBBTZJFm2WqZ2subT2r6DBUkLYzfWE8bMuNJaTwq9Jt3RE89K5cbB",
  "key12": "5RbcfJ29sfZbruBg62KdoLyKVrvhQv5udNFYM9AGKMGKZBKXUGiZsFYkERhRJqz8UAvbEYDoSTMKxebRPpvMwWXs",
  "key13": "2YKhNgRGpyCZa8VJTXaStDWGegQxm2SPTVtMaRdQFZgWFSZ14YR6d9BjkpLq7S3Fa4VieDVNkxqD1vUHWLc6U1hf",
  "key14": "3cvEFhvxiKPFyAwP67M2UsM3qTfeAW4MZPYfVJVYWKeiUBZWUo1DUNLYDf4t4fZJzSH3HSdHq8SNebHMaAUJhvyj",
  "key15": "2WBXQKpQEy1QvoqfZd7eGqmwnx36ZYtbu1AZBi8JqLEVCBt5xvBoEx3m4RBQxYBChgjo6kWUg7tQuwTDMp88ThDo",
  "key16": "5jFfC1vf9xdu2DF6H54UM3KF29MkTRRfkhbXj2Cu5jMtyJG3PdWazr2Pj19NG6DWKAnNucLjuYQzdNofSLq7gN5K",
  "key17": "5scPkADrF9VWnaiJXAhgxidLWLkH6cNLS4X3cupYZiPfz3RSbLvUkD4FWJxRYGyPCxZNvUdMdZLZJKnuoZei8fB4",
  "key18": "p3CVKVpLQtiUad1AoqtR7LdDDwRQvtU9V9gz3EUq5LFbAMVJSyqFvqLivfukV3mHsL9dRrRYFxUZZyKAt2EubtS",
  "key19": "27EgbMdw1Ef7KEtSgQZAzcaeA9CbDw9D21c7L5V68xNn2dfFyN6ZTwvGdVhF2GDgJ4ZvDGFySgCNbCA66E18W4Y6",
  "key20": "49T6EataRA9W3Wmi6eu1wyFvJPpSFb9aLyeG3uFTDxm4sqBE5Tds1j8gg1WksdMtoxxJXei2aBmykr6E6eEvAYYP",
  "key21": "3V1Vrnmr4vKzanJpCxowm2VQM3ZtmDvFMzc6RZ8ksYEAizHie5iToSxtMTaGyRHP26HjgPdsuYcQ1wFAqG6xbvCx",
  "key22": "3WSuhgqWyaqq6ZUwW1jt3Lw7JqEkgskVAKQYXKVzw8uGQMp8jH4RGa4dukQaxAUtvxRKUageKXKjq2TTMSakvaGc",
  "key23": "3KQ72hdXFgs4xM2mAsy3sPj1mPCmgfZzb6eGRmfHgoY3VxgjvpBWdFHPaeochgv12AEeHEJFSMDyehbSvGdG1yP5",
  "key24": "4ivhFR1cFj7stzGv2A3LdcefanCS3FTVNgK5VeLg6xCPRpmY5WFoTLjtz1zSVVU7gqCJkzSGhyitwJWEwYMti4u8",
  "key25": "4Q5np1sPrax4odjbzgn5GeoErpBihBAfmYreM16SZx365S8n1Qknoj7rWZhw5yKxBiBRLfAVmC2uahxPhdsCd9Xk",
  "key26": "2jSv9Q96xCkMMaLBQMFLb6TBULXfp3WzxX3b7LSuDwktrKuRForHWq268vxQCXJHHad7nn7iADo2F2z2V8Ppw8em",
  "key27": "28C3NgKymASXw14HDUUB4PtPKcBAPYnusokM1TKeXdbEo6ZKHSD2QEJBnK9Wv3bo9dJnbnd1rg2y9wvBF4LEpzsh",
  "key28": "4zGroxgGN73kG1xccKKSWa4bc8h72VQNHqfRi4UkeAhgo9c5gcZCiViLiUyyxdyNs1cMFUJwGXVkDJbyJBVAJD8V",
  "key29": "3Q8YAZvWQ2tShVQHnrLXcLQaG7WDng3Ck647CD43m83SqtPHoTt3JHfVwFU4MBXNNq2pDrGV5HVvEYu8KekM5SzQ",
  "key30": "4gBPTdYKFe5eGDkgFWrKjSdVnR2Qb4Kz9eMeRNwEmDFbdGQKEaH63ruxRbg9LNSNeM485E9qMfKsqk4M4xjn49rx",
  "key31": "2Z2gj6fujsF7PRQiZ1cCuTsiv81oDQxdXavaLuioPgccE4yeNM1Nr2EabJ7cTKcrepuvEBFDSk2UvNoKN1o22kPg",
  "key32": "3ZsiHHgpBhdnGsATjWbcNc1fH15h438arGqju8v6cQ2Uefb6tPw5TQmULte2GFPgTZ6XhWSxyoMEX64ENvRrWR3w",
  "key33": "4tGWB3uJpgGjz3tit1HLsgWLX9HHZf8ysEgxBxj6VNe9R7xT7WCpAchw3jnR76v7dcbSAuQHMShrMywJayXmbdA4",
  "key34": "5AvtbrXhxzR6MsgPzxT8n2wBX9PMKWgNS78NXwidgQe8NT5Ku5LUZaGoUtaajR7adDfGRFoEoUBNTyN3QcdE5sfC",
  "key35": "31Q1utC7cBGMSpKrXhewbDrJyFFZ6jFrxBUqmgp6vtTCaz4o1rK46TRpmZbyra76rVcrXpkhdfzJnS7Ezf8MuFYe",
  "key36": "3LajscHsEbBhv3REWbsLRmsGFDLtMQ3BT4XuGQYHzgumR2F951GWvm9xeVqkBg2fpc2X3XvD2tSMotR8QXjYBmsC",
  "key37": "2mpKrwjqcDGhB8rvLFvkk6XVqCSagUqXUzoAGxwSALGa1qsD1TP335b2vX2hxRzBFuyu7HMZMH7mDAKntwEgF1E8",
  "key38": "46huLnHbPsvnFt9jqxEJCcfhLXGufhyVr3Sm7kF5keYvjLJepvi8fPW62rsoP5otKxwsvydKM6sRftSSJAx8CL4F",
  "key39": "4qEp39Kh9fK97Yvk1fDPftb6Mt3Mf9JKaK4wDsLNgE522acv4v8gLrygaT3eHcH66vEos1PkKEFNaxc74ZVdZmLe",
  "key40": "TbRfG59CMvRFBCaDNuN7fNVbxSiGLsdnXrHeVeSLU9jqKJUBL83wyjRYQ9gpi3HQV2LW39b6pZuhFTUK5qeyLek",
  "key41": "q4ZqabZq4osTEFtLPEjGihbfc7xu8XtNErwa8VYFayx1YeqzYFHZVhRuyV3hQYgbKSQexxvsg6We4ddS3p3YSYE",
  "key42": "4LGyqaBuhHHistPEtyMKTquGx1qmCgARfYjovunQvMDuemHVMsUYLtCN2C88NZAwAe36vUDXzoks68QtjFXSqtcy",
  "key43": "dBskLG2wKFM2WhjsNEJRmv4BrEsqTg1vpdPxQeSdHvcxjXXeRXCNkiSax1ggiQkLTcEzNB2SXzKZsfPhs35LzNv",
  "key44": "KiTmt4UWbKP9CCKE7sgSjSB6y3HAxRfNqCchDnBy9Bnk2jG4GWC7ZyWLLSBfQpoFpJffJ7xTCNQXfBX3Wf2b6e1",
  "key45": "4kz591D9Ca3sFpvxFoQi6CrbZRDdUuJmc7knXuRNzLziEgSvrqHRBXDRDzwQMQ9x4MPe7Pk1tvF1N1w2bsNzYvJ8",
  "key46": "3VBcoXWTMSGntccFX3JrrPnvjzkDrfVSGY1WnU3F2BjD3ux1St1Y7DuMPbbnFRxAinJqYbHFxyMBUXHvCqZ2GErf",
  "key47": "3qVG2M3aN4wMtE4pMEFc87NmVBnhheofpp5ywgTukhunEebFrVSm7tfRTZ5CnNtfKzMkpiGE1Pg7zD1ciLfAzRER"
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
