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
    "R2dKR4Dd1Kd94QVCB9Z2bs1ZtD9nQ8SM9KK5K7cQ64b1PXK787nYSgfWhabgwKa71ypgSWVQUG8VqmivVKjKrZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hJTWkGUfMKXAYJMgmXJRAbxVDHnS5wCDNE4dqmwzxBdLs2DfrSWmsQqmq6FP83nhKsamCfgtFipaHv19wpxeaED",
  "key1": "5wRzCkUKtbNDUedhZsBBogeS1yxPWWMPNrFfRDR15bhZU6hZDkD1UJZ6HFMaSVuqKj6by4wJhGU3g7R2539oM8Bz",
  "key2": "dpZ93P7AYBDCa1yH2GhpWgWbuE2nCMkn82XndqMT9AdcLuZNSvRWVSqgQdjaVH5oGPGhk5CazqazNf18FkeZ5Qz",
  "key3": "4SdGcWVskVpByCaNYfSYFPTUX9YUcQkWNSUcDK1QLU7yMF5LfunLYXQxvFXWGCt3PV25y8h2eyibE6UzyaikdtD",
  "key4": "2KqBVX7y1DTUKBFD89dRUxgTQm3HqJFGLiLsXZ6euGJHFuVEvGSCwVnFpwuh4pAdKChjPaBKPoetipByiiG6YfiQ",
  "key5": "38gjTNiSpQtsqM27C6eV2mxAifs7HHAW3YhNBZoTPb56SryYucKaEN5Nwzc95uSHEWjmVZfX4pwZiXgrb73NeEuA",
  "key6": "4HTUJr9ZXTGoHp7b2sxBtcTLTCn7p5HZoE2t3FkujiH6BxknHQHhv8rggE9GnYJZrGA2maNWuHgyvjoTDH1SHqWy",
  "key7": "61aTptELT59G62hXsukS3B61Kzky7rCyV1Aw5KDB4zLoFLofhSnmTTAQKT6aaRzGHUE7qExEYNmFdU1hRA3m3Rds",
  "key8": "2JnywenGhhHJbESYZrCb6bMeQLdkEweckDbdno5NgAtYPe8ZD64bBQDucDvhyyeRqaX3oVYPSjA4JNgyhncPxxpN",
  "key9": "3dBsuWfwAxWVfZcLXXsPmnGJayeqJLGdsXy3uyX7p3FoF1dhxuWspijtem9oo9XgHyrYvaTHZnMwt7AqvyJ6bBeW",
  "key10": "3weT68CocncKCbS79SmNkr9B11wAUmo2Hi2UdjFBEvQKzq2XTa9anUejbyqRpJ8rmubmAhBjzHVzEhrD9u49cKQm",
  "key11": "YZBV5ZGD7uqoXLMQpF1bLQzaqcSAJBcFq9VbKZXDMpJv2SX1bPF3DRGLE9m33rAxKiG3bQ72ZRbC6xGPFHCX4aH",
  "key12": "2sgpr4E6ZhCr9B8VUarSwRNTMjCb2iSC1eLboA3ZV5qg6qD9tqMbunFM4t8R3CvTjTvsyxGxEdDtXMEvdUY5GcMP",
  "key13": "4oikXse8XPsTEtzutgHrbbijMjQPGY7SXZoUYHs58YEcvMyUBu5EEdtaAS7jqziTwkG6gzAx867P5up44rcVdS3B",
  "key14": "4nnDefsxbfmwyy8ThGUdSk2uWMQ6vsfEBoF7jDi4VwUGdAs1okzzSYgAGKCDbydSh8DL3XEwEZkZ19ag948tekuZ",
  "key15": "4S2QoGZ1Bne5c9iGhpHpL8Ue2r2RxzdkBKNW5EGjUjDxLStc1kmqCnnaeRmBuHdeE4kS3TXRmzwHtek5TKm2mNMB",
  "key16": "3FVPdTLNqREPDVYCBagDQUVX3hEEUmWCDk52hijRtPgJEn1CGiNRQ2xu3ZftEDZXUSdUCYnsX6AxYTY795nJV7ce",
  "key17": "KT2pSYsDfERcwf2jqaNNyupqG7JvpELG1KFaWgSr6pjPA89bfNaYoyrf3cvJi8VFKvmqxCA7dhX2vUGCNxqJFk6",
  "key18": "2YTvV73urJcQeCMC6RWf5kdQCn3npViEMncUTmLs5VWZsMMc7iYpC9qnw7gVmbL1iu1oR7MdoXHCP6xGTmR7bexT",
  "key19": "3WC9ABTqC5gTq3S7zTnWoXb8S67oUwMX9zCYXoY1TVRW4pG8Laaon3aZWoagLcJvVU78VfrCvrosmm62mjuSdroc",
  "key20": "5pYoGB4W75kFtZ7QYQAkpuimxBb2v9cSg7zwjyBBWbt6knVhw9iHRYdxthWwHBzqCgAh2QPbjTgrSMABmcTo2sA8",
  "key21": "2AeFoEa32LKpfATDXe68EHoJ3hd44xg73cdWWCFTikukSuPk3F2JJgcnDfD4EjLxyirvkCLVrrbARUnsb2dVf1Nn",
  "key22": "5FvzuGqz3QcwziZBrCwmVsswSCL6sLozXHhaNncgVdYQpZjJX4SLg484QRvLeusmFepV9r3iqRttTa3QKZ5mfRyG",
  "key23": "5cbsuHzzNu7SX19t8tNnUBJJGF85MY9vQi5NHLVRPipWhmzimDgBdcRsWKcWimsuyLjdPn5GJ5kS15cmFASiGPPJ",
  "key24": "3aY9Pek6br5fTWUqk1jS8upf32AGcSgvN2HJPc1Kr2Vhm8oMJ5gCCHY48SCcMebpQ9Fp97225NVDuKwzQV8ZsdYC",
  "key25": "3pb3VG63oiWWM3J9KeLK2ReE25QBBcVLVr584oXh6CaJocVAbLn5u6GY9EuT3poirUFUYC3ggRgbnyc7BJF7iTcx",
  "key26": "3vEdpVttuH1mbK5NAdXKpWACDxiD3v3ksy5Yf3KhDyDqp9XuBnqcsgHUq7khf4Bxkg7zoh4Y8BeeVCtt1JrNXtj2",
  "key27": "2JtHX1vd5zAj7hM2oZMe442h3UvNFvarVH7i7Ex4vuXsM589XdbjmvkNRh2raawTDWQAWuGx1xnR7zcG3MkWRwvS",
  "key28": "28YU2KyMy8f5yvNUr98KY4BgJumEyPzDuP27XRQBhVrDHQoKa1zWUt6PkG7K3inShbEH8kmGCmYG1codgp2SgQdC",
  "key29": "21KtCGWJKjMAi1nrzA2gWKZWWkvkZ7w4C7P4H7j3RHPHWcnS1mBpPB2N1Q6afXF3KrCfqFAhaknhrYJCXstU8yZP",
  "key30": "3a8LRt3ezmB3VYBcxTcoo2Cwroi6HpmtqfcybsufnBePXkzC58ikKcZTHshYQAbog4fn7GyVbBybcyfk567bnvgH",
  "key31": "4p4vWN699KK2MHtJLwHcNudPm7F8oaTR44PdVNFcZL9HBDScZAEnKWbcsKQSvPhTkGzNuWvCdAPbxDFoEqHTywUh",
  "key32": "2SkncGTxEfMWHjMMWiva9CZEaAdgmRpx6UrzniT3J68VS51t3rSRBb3xv5RgZ6WBzKR8qt9YC3H1Bcr6J2Xk1LPq",
  "key33": "2DBXmMKt9GW2xRJ6tDbYP29mtVj9qSsXSJQCoJbdQ4dH5qMfTBzmpocgsXCxM1XKMMiLh9Sd1a1rwm49DFmraTWC",
  "key34": "1HQd6tqyNr8VdfL9Xeyi6eSYFPWTFv2Jv2HM3xUfiFN6SJdLk3wW4zC6QtrzBj43fBFFNRr6m35S9picXwk77XT",
  "key35": "3X3sFMqJrthbTPSzaq18QQB2REAfWVAgpepR48A1d3kcnYH8K1HibAWeord1qB2ffVdDARoR8FxUTphZr6LKL7CW",
  "key36": "2Bh6EX2Xt5Ey6AGiZPDDUrhWx22FRqUR7Fgxfz6fRBYBL8UQJyWNHRLWrWv4wACM22daBXsnukR8R2FzH1VChALd",
  "key37": "4ycdKKJnGrg2emBuXo9ZRWLoXThSjzMhNxbaSSRueiHujQS4uRuyB8LzBhCBMrZhaMTa6oNxgpUXcv3f21Z1FNnc",
  "key38": "2eV2tbdGvsqeNRUannchNYzB1z9k1KVJVDEjUkUk3aFoi67Zs4mA85wzUMr4j7BDKXAoBLfuCrzdtS3tutVMaKiH",
  "key39": "67Y6bC9uUGgUUYV72aUDugzLdmBzEu7uwz6xTGHbX1pkWVvpbgmc9Wwp7tJq1VcM63g9G8nN7JMSXAJosZsiKcdU",
  "key40": "4AGBfwL2eXeUqz6mvvx8ir47a9jzw3jtZX4AAv4yVBYnBJJkJTfcuKB9u7ZS7NaPCbUJiFDrdGQon5bTHdoXx8dC",
  "key41": "2pAr2e1p56hLjzGkLEimHX8YuMWCdpXxrhHcRV82Fh2RiojnbPDzi59z1dpZgLHxzkii7eHXZVGwasFpMNcnHVLQ"
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
