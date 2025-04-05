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
    "2yfPieD3B1PZrGJq2jBawb1pzReQuHrWAWVgKNnxvGrPhSafb8YGhPcgm3RGM1tUmHuoGdzVrqAeXFetVXANcaD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32AbwMjjr6m7Uxpna8BHDdGqxuoXXjzz5r4hzxPKpYwC3LWeoMsv5Wr8WJtifBUgTwPdGtXwd7GSwssfUQeJXGVc",
  "key1": "4XLzqden9nMku8daa2XTcyrLpyQum96yRZswRUwHmGWqXbZkUxzqv1q1X4p8Rv54Xec88n3HbRkpnJ3nzJcvc1wE",
  "key2": "28jHRdJn2kfFXuPWmWJL1G7z9RtdJmmM2GT13WXwTP1ni9KCtTHmH7nLT83GGgz7dBs4eojb7WDuUrEcJ4NKCKRf",
  "key3": "yQzMVKWNceZhTJS7Hezm2pNNiUqLzXd2z7hdu2ewoJ3TGRhYU8CwaPVxNZMtLtLa7idXJUy4j7PJNdr1LF5MXMz",
  "key4": "5yAUWWUhzgZA7mjgegLambZsa5tVmFVngMs1bpRvzauy67nrDzSMJfQQthAyNk7vVwCeguWB6neUMxXkmZ5mKbgc",
  "key5": "5UWyYGtag5piqhAvmHbwZAjaucVKVi9C89d3hpBpRU5NYq9UmSuYTcBzX15UxVrT1Cv6sGPMnmf7mGe3pb4XvLT3",
  "key6": "2mLfQ18GmzFYZMjpMVKrkic38ESMKosLqUcwoA18nxjwsQ7QFQVF3e2s951kzRSjzkSGsVMRQHKZ6wYta63uz2wv",
  "key7": "3La2igGmjLAcMPeWLj9XWVX98Rum3dqewmf6niT9awSFgUT6Xm6ntFziowKVKMarAo1yNEZwG4NeN5tPixxrdkcv",
  "key8": "5EQqfDZLV3hAhPP46v7YMbSoBriN6zsDnSSX5w4UnndejnR8skyDEmk1ADNECbizqiv7jFxE51gozgyQtFa8yUzE",
  "key9": "5B55tK8ozd2xk5LDi3APfLC2KnC4i4hbyujEMGus7EpSob7gXAp8TLnqvgFaLuadkpeASv3kfjJiuUnkpYnZ9kzj",
  "key10": "4EyS2vb7D1e2GqkZjtojpDYx5rc1ERNtuufrkN7RHGHQPAfc5VcSmfGudZj6G74GxTaNx5RgeS5rUnaYCKRAdw1P",
  "key11": "2Cy3UF8b1BSQ8cRLWcb8Zh6wzGA51VtFq9GXTHDYEQdxaNd8YHam5dikRRBjaeqwaBCf9bmQzfCevtJZPoRPhodt",
  "key12": "2dy31M63GKYoEuGjJyP28ZG3oMjErxaUqPfKrdsk6piPNp1qg5k37Seza83RiSpTfsbRqwMqjKwTEq2UPRNjtQoE",
  "key13": "5H5ZMg9dqbTx3dUCecBPMW9fWjRQ1zw4pjXQ1KQBABvAfD7UhdR4HSLpb8c1PjayDmaJ9zH9J9Mfw8jCPhVL4UBc",
  "key14": "5gVWQHuDL6PzHCRER6V6y3JfhNfx6AkPgTuZXbruAhnAMCemBT27azBis2vyHVboqBEs4gotmQak5PPtpzxHoEA7",
  "key15": "2CwVzLLvdfR9QXQgvEPuzNbgXWxf41qwPbNaND34UMBpH3Uexfy8YFPATmd5xXqsu4J1akXvYixENsgzSuRpysZn",
  "key16": "cPwuPjtvUt1AqJH28WVyyqQS5JbvRoX3DXErSdMG95S9Hg6SmHHdqRDbEFh3d8u45fcFqT6VaZpS6B29ohZ3kF9",
  "key17": "Biq7viNsEnLxjTVYzHP9WFaFDX9jMpuLeeq3pmLeFD1temduUdr5uCgE3ekDKcFSkgTx1tGNLZwxm44W9wXM3N5",
  "key18": "2PoLojzmZqtN7dGTvqSSdamQQXobyB2bzMZM4Yy6iRpzDsmFdsYLoGTiJkTuSYr6nvsRDCLcXGXmy7vQq64Mho3S",
  "key19": "2rWuhe37QArDNahYLxa1cnJvCvtuFec8ec1UKYf2sBq98w4wWZRBZg28tS48aHcR6GQUpkxTpD6zAwvY4yry1d2y",
  "key20": "2QgtvsA9KGDRenKaf37vaZj8EQACygACoC4pkim8CFM34indYbkgD66kMnYfZYwYYkGTRQTusJY7gy8KeFM87qzU",
  "key21": "4GEZuxYeyxLGNfZZaVRMB4PFQ8u8ErdczwbXLJGAaKxAEs7F3fAdyMhd7wmZfSeXRnNbnU9H2HvToLD1orkYrDat",
  "key22": "4f5yiWbqi5E61jSTbhNWhfJ3UzBTftaWHup7NcUcQNxqZ5JzE4JXjmLRkwdfBvTyQ1ytXNKqcYw5wtsxYT6eix5j",
  "key23": "4wAFvu8XVPojMgCefG3kUHFDid3ynxZrwjRnGj8zVuFS3SVxjCKRNqDo1yCRNiQRgjrfmQgH7uGqSxroc67mdvED",
  "key24": "qC2NLrVX6YS5BVNHrA45iVJk5esZrPLwXiXEtuCTjyFvqPr5R4gSYfjA9kHLV48VqFM2wdWcPVAEou6FunDq1Ld",
  "key25": "4AEikQWvDMYGZe64zsQtjgP3rAcBridY4wZ2g2JR2cwKsEBiCZ1U6NdYdfXNfR4cJ1f18ZiMrpgxuB1GeTtgpLc8",
  "key26": "2ceisFFYXc5JWaofxus9WE27NqKruDvjxVjg2ZqpMrJYcfVFqEQKuwZJHV18npCvUtFVQWyyX1tcN6T9K7xqNwB",
  "key27": "2vXNQwV5CRtKWfnv5nJ9AN1YuDcEYypZTtVnBa7KP81QoSzADEUzacwvq5JNwEu48C9ZSHxT44CHNBcc2AVD1y3R",
  "key28": "3Qd6GTjUftSFDBXU2sVk88K8cfeQpzstS45z5jyWNG2BaYqcP92uTcMJ1KWLj1wVp5tdd1W5AwmvY4SyPNLx4ZxD",
  "key29": "5zfptVHcq7U8WgQ4QeUCeT3CFnipoQwSVgLKumNsESKU9oGMgTJ8T1DRp5qDZSuHvRCJSWY72sKPstZFxhALTfhB",
  "key30": "5GC1VCLodiDx3sWummsmTSvJbjvFxnLqhb4S911sFNXyiREMzjuvjDMds9DsK3w1TVmJ4QX6YfNLeFwWtBPmo9at",
  "key31": "2HALvEcMvSJb3DTVnXrcrWEHrUEk9TDfoBbG85u3jQC73xbui74xVsXktDo5jGPy5em7Saox6ioA5Nzyt7mujGhf",
  "key32": "2AW4JpJ1QSEjMTaTuebaKVe6CvpQ3H7ua2d73aPQEvUvBVHY3yFV22YBXovPqQFfuT3ypHfnjagyXDxrJ37xEpaU",
  "key33": "4ymRURQVdDjgzLG1LptZ325c8TnNh8CYuE6Z4Q5JYxxTRn36ZndVnFHbhWqXKsNVeR4qbkQUgsbfXamyPvxTMhcm"
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
