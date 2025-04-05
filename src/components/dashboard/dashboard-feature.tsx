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
    "4D8iHA394b2Gf7ZremUPgcbQXouagumbFoSaZ27uqabk78LrYh7wsqPAXoKTMFc2HMbczjG1iVen1QrBD2KjYpR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wiw1n4eZesw4FW9zR3HtN7C2u4gwjTPEg1opgcmxkTr1GypvJtVXrjvZ4JeiqkC9EuMsMYjmG8nHVhQZFwF57yj",
  "key1": "QUCU355r6Zf7uSNyAJtpNXPPP2XAcPsN2tnV8mZ6vRJi2qb2NDiYzmCbbeoYdGaU3MdURt5TA3gAiFddspCFzWK",
  "key2": "3JWu6Dxj3s8WouZ5c24wGL7BWRNGNXfFDz8RYeJ16tk9pQnBHXRLcrkn7uXV7612t9Qo8XfGdzPGSWD8uGu4B9Kz",
  "key3": "49pQHBwQHy7hu3C3ZmcsvFPMzQirzQrXY4AmXwgBMbyxvxTAh4391urfPixQUzn882uNtfARADJjUctoqHCyqAcK",
  "key4": "5Nvwh8Qo2BUgCVBmg54oi7SDfA3rD2Gi5eU7MC3oCs8CGWNBWUjAxq8inznbMMKhKnUTiMbWke1te7npPGFn2VMq",
  "key5": "2n1TFsetyDs2LH5noRFVn8aYyj24pDagrox5sMAYsKVLa2of8VYsLyCAEcBskZ53VEiu3fEKGUD8zZfqUwXEYVAH",
  "key6": "3huBxUFzARL4UceVxLWhWB5ZZXJpxaEVYGmPPgUYtNNdbiL9oGvxBEk4iSdNLKL3ZFbfYHFeBfPPR1Jv4EeUri6V",
  "key7": "3oUaMBkJUfQnm9vjUcTEHrmsJeAmhpt7nzUuD7b1TX2ayCDD2Xmi1Si5gPNw4JZgEJNAQ5LhRvfSMxgeYHoVSm2F",
  "key8": "5ihNMBNWgoj8naAv4i2Qecyj6UseRtu8h8KbuCgtTDNZqPwYSRNJLbT2zWC933RRPGPL9ztrSrmzc2njpiS7zoBW",
  "key9": "3adtJaGtaPFq4TY9GzVGJHkqhS3ZrUTxpJqhgZq2TzzY4iR57wrE5bdaPRRiAP94YX5GUnLcPuGc42zXuMoxFuAL",
  "key10": "43Vk7RiB1JZa24CkPxTdCDPei8bCDGTNCZyJTHVeq8ScCFqFzFJ8HYyq25jZyXqGHnajKigrxUet25hts2f6JuLr",
  "key11": "jwGL596HRTB2sxktt9qefyQLTsxeDRWr3NA8gpV7Z1ujttSQW34uvzRLynaZboLFqLWaj7yCow4Bic1Gd4VG45z",
  "key12": "u2JbJaSaNAD4T8LsAh6SHie47E5pDUhdGGsjiZteXaiBVGQ2TMFq9SMzqyZBck2z4A74gSt4LKGXG372TUBibN8",
  "key13": "4NKxYNmaQg98RPxuJJniQvsWaWrpoc6AhzN5TLDjhSca3tbaDMbUbydCf2PLpsHXEHJJ7pvzAxqGsd6arUyBhPcD",
  "key14": "3o2QYYrkwtHbbUzFM6YxzgJLYGY8xhgS5fR64zxezrtejP7JdhSR5sJf3tWULqgz3iDG9ESq2JvupaDBXTdTMWh5",
  "key15": "34fP1aQAwjM7x5e1RSRystWg6VERrdHuF2AKVvGyeufh3Pn9kWLHCPDB2mATJe9QDCAxBxf8syU7nHxZGmvvn3NC",
  "key16": "4NxWLvdQJM97RUjWob3oc4jF7YTt6FzY3KfXxpDwdKyoWCRyTKrKqWa3T7DmaLgqDA5NTRU7EedLyms4AYySquG2",
  "key17": "3zeSvNcJYojNeGsSV1ZQUy32WX6uH5KtgmRJfKfd5Rc3dzUvUey2ndyG8g8o3ZTA9CK984Br6hQxJTAwU1Msi7nU",
  "key18": "2D5pGKjng2MTV56Rbb5WZQmdXt3dTbGuLjyZsxatWX25CEEpbenWAQSc7wdrU1cV7FXyfq8H1kUDhkEsfBfASeKw",
  "key19": "BSgys3g2vLGD3QB13QGpGuHURx5M7ykyoURGCbagHsLrWrZygYWdmsvCBSH6YJ24GBHFcLaZ8FWQAeaarF6MQyR",
  "key20": "5P4TD2xxmfamiEWK33Ye2xZNYYeiqTvDnXMDZygcKgG4MREmjMy6hcsPSF7Twa9i7p6AeeUqB2fANtPE9KX8pzRJ",
  "key21": "2pdMEmRMQ6tcdBhTW319Rc7cdVMZzhZgHMt779dDEKDPDi7PPYZ49Zgixn9yK1LpRAfc4tcywjpBvGgDaGM52FTu",
  "key22": "5Vh5Ko6KV7aVtTNHJeT9DFujmKcD9iVdpCvDmCaL9xDHEKCUzYb6jMdirV7K7yzmr85d2pQkdjaGBGDLHXx7wLbK",
  "key23": "BXEeLbwpah8icU2Hq9QV3aCotfftuzFooFGa6kP69SyYQKKhXkVMoW3BMuVY6p36XSeobT4X2BHydmhejwbRaEa",
  "key24": "2eyGC9kpbm1SrdZSqAdtUzAb5MEqHFXDYdWdpLjwjHWSy17ZoScokNngHE9HZfHVK5gkcQPMPUw1Fg8iNPhHjUAW",
  "key25": "4LecX4rJ4d1e6By1txkYThwoLxkW5HeXuFdSSm8ki3nMy8ygzsCvDifCgDXeNi2LiKsAS82DWEkgTypdk5LAFuUH",
  "key26": "2FnUGKKnL1BYUAR7tEFVNWouo1oawbSWNcyQpjgEKNdx2wmvoa3BVkD4HoRCyRDPC4phRFnAag4y8ia6oRX31Nq5",
  "key27": "4JLav8XiVxDxfKcxdJ8yk7bHMzwDqDVPLvrr7RGxXmobudBjaVWDWqxvmPbpNzMThnngz2BuFDDMPgrj3p82Musc",
  "key28": "67PdFE3oLV6FfBjR7Lme96EwrfGszB351JAXozyP6HLH69MqZwKSxzSyGnEd4tABH5x213GKj8oYw4gQAeVJ1Rkj",
  "key29": "5bYWMyL6fnasHMrgyW2agzHEAGXwYuj9gj1kDYxRtmVnqwDBvAWy6Kq7zLKv9fUT5XD4Rj3toMieiQ6zWoQoaEjf",
  "key30": "5ZHhJknc3hCTssKGmTDc5NNZsgSo6XUbe4GwGYhJV89WyeJFf6886v5ZGwqranTvoovKzkmQRsWdWZNd6krMAz7k",
  "key31": "125TNNpnjF5anhNbo7pnrRwTkmhxxY4NX1FV8BSQr1K37ywxNwvGBGx8y6MxweADkH6AgvmH8yyZShG3nxiBiJPk",
  "key32": "3Smffy4v42Wi7SWT3PWe5tRiFP22bd7RxuG9goJFNFKBGEfJhVvEQJppB754wDFn5fnQuAAzHCXuuZteN1cEMUGN",
  "key33": "3u5BkfdueKtq7bRG1882e47a1swMnvonrMWbxiur9bDhxsNRC3vLXhwHkidQdUt2BUZfm9LqVATu8VbrEogfjV4c",
  "key34": "2FhejosTXtQrgAJYCa5Ju1XkNTKoYn83Mg7kLatygsWDi1SVum9kb1DFLHdvwpb7G5A4VEjSrfw2YEBA8fSKkMoe",
  "key35": "5UGMu16HnYraJK1ARc69wVgcj6rYs9cskHo6wDgcWmn1umKoc3UyB6kfiC96vGCWsNX1XBZNASHFjAwXa3YfmzVL",
  "key36": "CzhprUpJcCBr8hLUWxaJrvhhBnNwa5jb9p4VxrsfD3i4Bjb9ni4RqW1MqgW7zSphRA12v68AitQCvf7FTCmWMj3",
  "key37": "62t7ZMGkdH786JbU9iUGmH8ePBzzk4q4L3aNuoFL8qdLaiwMVT4bQRWEeH5VSDRwMk6WLA3Fv9CE6fvpDVQYGyLU",
  "key38": "5ZvNjAKGFsngncCaRNau3ZDVk6QfZByN2iPDFPAf8weoYsGdBrykaqGiPQ8gTTe6iw7T4TDNFXEDkHe4tRxg4qkf",
  "key39": "5jcLTCirdRsjp34Z2egx2A8Av3cGtnaextNncRoDWjuG9K7CrL9sXX41dcyD2DPuUFZ9GNrbZCAYHRU11sBo7Dns",
  "key40": "5KbzNANwoB6AyJ3ugEoCtChYeF96baCErG2NBQunasq6W5dgnKwErHacmAfBFBnYcMct4uxrJJQc3wCDFQYqHivt",
  "key41": "29Jh5m5gjGDRjPjHFarPwxAwAn4iiWDV29dnjjGLqQNLQhCFDAHhJVRjnBvoBosfeESnKhbsT3rfyFLzThsrf25M",
  "key42": "48x8TM5FgqHWqzE8AgEpTPQVZf7msGvXLpSSPWXx3rQVx6RS2KJuKjqdtoCeh3ZsPUxefu3PpTKqcXTrPKAxHfFf",
  "key43": "tug8nWihtPt84LhGyuZ9iqc3rX7MkDFp5Y2VQRS8HRuUbnxzkCee4NHV2oU7fHQEmb9dxehRZuH6YNAtjLLHN9h",
  "key44": "QsDp4zT5VwUZKzqqf9KYp8sqTwuiojUxX61E2GVCja1eDATACE5oFYUPKYuMPq8RMAE9GemsMD5kgdZnmF3QeA5",
  "key45": "58XcUUqsrfadDxSvNaTr587pj1PVp3LFppKcMPo6su1WYH9TuFfJAqto5a5fpxB1r7cMyYERMPyD9ZWmjwFXoXVm",
  "key46": "gA6jT6aNRA48NyhRWYFoPhRi7JyKdGJzQb8VuzHLVz8LDh8r9XgyNQb4kqvxTTcGYjfh4jo1N4jtd9C67X27pLe"
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
