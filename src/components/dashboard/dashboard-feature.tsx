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
    "435CFrwkDAhdTJ1YT9yiHwafxYQkSRrSrCZ5MBp5RLJtqyVP4wYYjc8Zc9ZbRCKvG4Lb2hpE2B2P9fTdG4dAX8Ff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KmkcFSGbqRGvpi4RcNRiMC4EfJBTDP6BQ645two3NyraXMTsK11aBcKv1Bi5WcmuedPhz7P1RJCyR4Evbm33s6J",
  "key1": "k8g2CT34M2ztbFaQP6Um5TaC4cNPH6jJSua9se3EEosV45KdRFjsebjgEKqhhK2yTHdGUn7R4fuztcpgMpDBPwd",
  "key2": "5GUbffF2UdtUoimmZ2LPHiYwgBLXgfK5KeFT2Xs3GKheP15enKYZVZC2pCu3m8zjr4tdF8fjAS2XASnr3cxMZjry",
  "key3": "65TvzDfqh3Jt5L3i7sqdYTTxxUfqTN5JhVs9JFPoKgVCGs167RPXqwTeDmb2UYRYxizZvkFW5i1qu16uyLSAGv5D",
  "key4": "4STGgidJbsruqdYCWX24qBFd4MhGC4Afuch1imiUswJbeSM7mSTQiehGZnM9HBFytubnPqH3o6AN6GK33p439yW5",
  "key5": "2FfZPwngB2AwJ8RFn5wW2sWE8icax7L6DBBpKCN31ArS6emTRJLeir4135VFCKyuFe9GfWYr3uKQ3tB4perTctnW",
  "key6": "4KWZ8pX7gaEPYj2scm5wtMCRQx5HNkfXLQQQYiwcCP3vJyhgPaBA9YTtRWDM1iSmpCW3HNm4EaG98rnHap58H4xJ",
  "key7": "4hz3eWxYYPdsZ4iWCEYpx4hJUACKN7M7RWukQsshKNYydXBtTje2p8Jw6daroKqHGvB4FQrsaQv1qscbs28jf3TR",
  "key8": "3NQ4Sqr5SZy8MUkAqPURaFVxTkPj4JXnbnAWaxWkWNPDJn1ebMK1J2EMQVijov24Lx5b95ziTRiB7RfSrCPQog3D",
  "key9": "3YDmvKgjFbWzSZtTsasoFTFqmoZQQRh6wF9CPgqLNXMjSchspCLn81Kj4FZu8SULjMXXRPyaVDpd3jadSe2h2jHw",
  "key10": "5Hmc76pcJCgj3HQeXahpqNJRucJJPUiFWywWcSXtPw1q9PkpN8dtuuKJSjYEwxUPrZGM63WvUGDMBpMRrVheFXKt",
  "key11": "7cRxardW5mbTZaDb4Tsw1pcgFdHJ28U5Zx9hhBsPz4AnXgZTAFxDwbPZqBMTias5kzLJtsrzb7iJEA8HpG6zEa3",
  "key12": "3cPGEWXt3WWvbGcGjTRwm1bqLWdNfht6kaKwStzS9yi9qFXVy6kT9diwoyLphjjTYTP5niTj5bBKcphnJvBa9vwN",
  "key13": "2M2CPAn8sE1xLfH8gu9evpdL5yAF1GCWskVSyLsDkCSzXWuSeJhzPGssH7aDXhDvA5D3RXRFNocWyqZSp1uFigRR",
  "key14": "3mm6km1uhX7JCnHoKFrtdx8FtP1fzvhhVdPas5B7K1EtiCYGkXiojwrgrXB7XbwMfAjB1UfoVvTfNomiEwsFrsGp",
  "key15": "3ZB2QkMjYuKjxV7jEdAfx98xngndDR2rFMfbdtrAWGAajVpnFDBbDeJUZci41nLFYjxDwpUiUzprWMe7mBa6X4RB",
  "key16": "2b3DhzLJFzdh4dPydEbzU7eVFGzzW6gt8FQvzA5HfJJuvAMpbeYPkZATUms9LZMJADv5hESDYiPpyG18Pn1i1uw2",
  "key17": "2RkTVCtx7KzXZr26xC25BaurRBsMxRkuXVvZGctjYZm2Wf4RT8u1g7PywCpg8tnJvarLp2VgMoxECmSPjqoPTLr5",
  "key18": "41h8kfkBTG7dJCTEREHddGLjVz6UJSwFMBB6j6rsbXLcsTvrMWHBEH63hM8uRW5J9tTAyxRjqGRUKZk4z9NTRN6G",
  "key19": "5k6tcf7eh2AvP3MnAW9MFbBLHtf6LzPT3xcnnaqzzWPSuJBRmCPjoSq4dMGnhk6VKku6Te4mKzCtaQhE3Q459B6W",
  "key20": "2ZCaEXqyT3wEC4gGRnedZGx9Apribh9G7n6AipxKpmH4VduNxEmm1cMC5ZN2HSzQhN1r2MDLa37HHP93sJHHtEsm",
  "key21": "5cyGV3xweKViNnA5J459qop5nHLECC1p8dVYWgraxuam7mA3L1UWS2ugdkm4bcRo2rRa3s7PNR2jtCFRbAo8DuWT",
  "key22": "4QHhXiPjX9uLFPqW3eDvW4vUhyyxg8Wo8zfi8b9XN7AZzLgjLp2eaUdG26mTrqq4CwL9TYoCnQz4pNdcznc9nxPF",
  "key23": "5z5Mo7MQesDU76fywCFtGwKcnAZYLgXc4pgwWqJAg5j4zJdrsTvruKEEsxtSLfvymfUis538ABeXHM4eSEiojQ4i",
  "key24": "DcB9onft2vPJQwpLBadN1XoWPGm4mBNqk8TxGCHbkD3cpnVbHuH3cFYsoMuJRomByUWy8h88dG4mbwFzwGvpLnV",
  "key25": "5YBjJGjo5JAG8pgCQCnZ6ptrpEg3xw8H1EiFi92ps2u9C45mbpeakf1aZar4kav8AmHEcb2if9nZnH8ay6WKig8p",
  "key26": "4h8Rh2Dg6CaA9PGHviib1dRvQSfNeL74uoyREhiAE4HUzo5YmgN7KWV4C4H3NRs4ZJViJGMmKJX6MmkLiVGFkyzJ",
  "key27": "5XYvVfZVU1xSkmqpgddVE3MVwvVaFZfUoKrUBWZxNU91jjhe6NeoBKgEtNcDD8q5cTiT8hrrjHJjGrYwNjMPmz2V",
  "key28": "4KU9RGzUSTrAiVgTPKfp6jdTgrDkEMsYEi428rXQMi3zV82yhs2Kz6r9HcvJhM4cy7gbTyhTHCK7rYXZwezVPZXU",
  "key29": "5pcMxFJgVYk4gGbs2bFJoXfR9TRaMKaKAH3LhrAsETgSvhq5UpvtNGpR7Cr7US9sAFaUS2frjuFx5B6aKfYnbw9B",
  "key30": "3ujzzgTTNFgc8EQ7j5mzEZZAaxeTnWsnCodczeMteyeXUSH1tHcVEjGfnxw7gmacUMBY4juK8oecze9qjRpXdTnu",
  "key31": "3C2Y4FM9Js8JNMXpusuh33cJznFFCP58xiMjhumjnHZbzG5Xu7yhGLFPk1CvomPY5jSgH8Qr5umvoyswaRREavnq",
  "key32": "9Dz7JXA3HmjhSWVguYAKMYoXCGd7n1pCFaVqwGgPYyV7TDxgrE4S18yi4X2CMB5ZFPz5iYtS2HQ33uDJNq33QWw",
  "key33": "2eq8tpXC8ETb76Bx9FCuhgDmHy8djUXis7do2KtQb4PhFYVSouenBxoohFhwm1pDHFDxSXmzTVmJcnNHhcR6ya3w",
  "key34": "2S25BLhaiyeVu2f6G8vSshwgsFrZswf8hFy23XAXsUUBt5c7pipjdeBRD2KmWenRu4U1FViW6mBzUx4YS9EXcdmU",
  "key35": "DCyj9kHAe8iPHHP9oTVoT7tpWkgDZ8s33skUAHiVRwt6R657Ki8JENKTiQaw4tLCkxg9TSLC52MTK9ksq9E4oHA",
  "key36": "63sn3ermA43SmtCGjRDQesTFdxxCfyjwzPt2n2RWEDGMeUTjiSwYYFNyXWURGLN8NCcLgTrX9u5AjzJZRdqkfXEQ",
  "key37": "2eWMZ25Uqqt58BxRDpAt9wVs6mmv6yAWbMZhabtu5jwqQcufPweavUHstTKbmtisshcYoR3rxCLAgDvuMBa8NtMJ",
  "key38": "5GwkwNVaoazfghDUR1d91dW1L4SSdCLoPDWD3NBfPQg5MH3NmQaY87oWtTymLi9c5MUDoLXTDvaJjoGaTmFpsMVv",
  "key39": "3xJSdRv38vRngkRLvp1BWtUspNYmjeSzZ6UdbkGc7UwbHSMuHVRogJQmUNuN4bePxnChrYGnd25DRvXanwqooZZu",
  "key40": "9ugriskbrog5go17p9Wt3XgNSPqpyyoxZqTwv9XKVkZTNHrDFUmZrcY4prmcqVrUTdANiRNFpxHkvxvQV4qa32K",
  "key41": "2gNL8HS65TZzgG8DTFtcWPSYPxKSER4uMQ5eZoEDWXovASWYkMsyMhzWc9rpbwMXiRgZCEk3wWU4c26S3JFgyDGZ",
  "key42": "65MgN7Yj84Se9TBu7KZo2bDWixG7BVM2Ua1reGu1Ykr7GbfretLiXLV7VN3RbaMuh7eTueoz8je5spGobSuAL5QD",
  "key43": "JrgrowCTEk2wyVAKeudtEoo4xdYQUS2h9KWmKj3zURRYuGBpsHnPGLaSRtvktAMjsRxSTif3AWRLmsJc4i3fiCX",
  "key44": "3kp4WHsjhusVKntNiDfz2ruDk6HEbAoEchRFQKWVEw6k7wTqhhXzGnUCpBnXTbzNZaUVMXm8kbCfkTn4G5KsFbxw",
  "key45": "3c99s4PHGGM531cRrrba7rmgqPW8NW1xL5oz2Jwr8LgtEAoDV8qjtQWy9U1CUmg9K37sJdHohjKo59GuZCwMxSC8",
  "key46": "M3GnL4YhwwABh537kCYiQE8BUaV2JFANwP7yuAVSh4kEWr72rgoJrV8c63xKgV8Mq4BerGeuGzBUroZ3CruYDNj",
  "key47": "Q84jd55huhrSshqzzCE3j9JHUrdcRsayem7w9bvg9wf85xq1qVKcCFPdywAhbJvRuMHGcwGMfxt6NkhzezjtnKz",
  "key48": "4oDrrjU9c99y9bsSMnMpvBXtV1Cz5hM86miBfdtTQofMouCVKRPPN5FicV9Bcm9SmiE8iC7UY3is2qJeJRkzh1vH",
  "key49": "3vH1HpTXn8wbm93zCbYj2fAbV5KAcVqfp6btQGfdrN7mGjiM1kKoJKsDuF2vkyScoQbUrdxgaNouEXytgJF49YYC"
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
