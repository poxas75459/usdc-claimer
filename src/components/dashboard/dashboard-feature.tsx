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
    "D463ahupgd3r6uEVXdDHT5AY2Ga4rqJhep3uWZKxFevk3oTiFNAxNERT54ZTqei3GiQkHdRLPUraQJUvtaojTTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57mfqH6yykQzqVzizZiCx4joLA7T1om8hhYeen35TCeP6znivzg2CvmqmuLVufx47YYT6vugEubmSJvdfQRyfCMX",
  "key1": "adKwZVCNzwpd1FLin8N7ALWp5UvYh78Hrc5gbffKBwknRpnGxSMt1Vc8W8xxyeX9FoKVMUdmeAwuHLrvBGC4nWW",
  "key2": "54D96CDR1t6AwzN1iZNkgCroG72SPef6NU7zRKXVF1YdvmG7KTQKczwsnUkzWQ8t3iHVFL7jkFW64qNMR3WdN1i7",
  "key3": "vsUgKcn2JtrDJkLGsUosw1ZCfiJpq933tdUbvRHuHaajUgz2UCeDiyGKurGq1BurqXrgA2o9rc3oNQh5u8w8eqg",
  "key4": "38gw6CcVVRz7i55hzLeTWrryPbFdkqN9FtiRRAsixbgESXpHPpy96SHPt1xppysJjpCptdRjKey1GKQbKaTTLFmJ",
  "key5": "5bn61aGHzck19cDL8NCEEmNwsUfWz9GA5A6B4LhtEW7PN1T985ZCsbUQSN4zksgDG4QgZGe4AQ1rzGD2zYoEjZvK",
  "key6": "5CAUF9rYJHrC4UfTXbgCFuhA9v6weJnGBFcSAqajMRQwxpqzZ2vHgPyEvowTC4zUJb4sZ725K5hGbrWczQ5ysgqV",
  "key7": "3nrmmfN4pybRKof7eDJaiU4sEYVfFhjsDeorHfNA8VYjPDDfKsi8F8pc9pnrhjxq8ELBP73PiXUkLNBUjuu81jDJ",
  "key8": "5jJn5gVFLorUftGbbc4FLwtpuGrdfkgriDyUmzYkwT19FdorpsDYVFit5ciSRFznET1pPQmtFTGNSt9DxixpWYp9",
  "key9": "5EYMMUgjQyrgCfz9VW4PbciNb7PLgrtEmARR1RBaEAecDxjK8pbC4oVFhs6VZ1ipgC9jP6cVzZoeDX7XBzpzJq6u",
  "key10": "3sVJvQ85wCmKwv2nS3imHM59EZaRTzCPTrRF2D4s338BnZxiiR9amxaDHXZmTA8aqJnFx3iXHMvFfReGmPLZfvPw",
  "key11": "3bxtQLktbamuGKeXuNZDVaHYVYsgMFHN992YRanJtU9vhTg33pxXFBNm9DMC6iqs8iscYSKJqjJXSTM8yUGzXPNx",
  "key12": "PREfEEYHesbhLqvSQXvtsTcHGYHbLrakoNjGoJ1GucYbXFPq1JBn4K8frtNMonqWYY5X7Yn8qSn2jkkvkGjowbR",
  "key13": "4sxEasThsQLP1HrvsyW649a43ivSgHhJk5zrQnJDPJ9Dx5knUinLqHwLy4JbAqcAyu6RtKeQzN86uySzi8AE1P8n",
  "key14": "5SGyj4LvkND1z5F75t27jPzBUMQBkReMGikjRH1ZQZTpGSrawq3t1ckDedqWSSjmLtmgRBtFYcnFNgCfmJvMNYdr",
  "key15": "2HujFkwTJRJjgP6s3tDrzTZMe2HFLmqpA9xJrdQWubWovZoQjMkVraqwDFHfSvXj5huNxVdeDDzoPX4ofgbxt8Vi",
  "key16": "4KUiCbQ2PRjELQjWXunvdywhRCmiJ7oEAJQqtCdqDvDiNoMxXK2b1EEk6Cry1jHPfG1zojibnDMpzaAnNX1DCcpY",
  "key17": "uDe8gHdGuWy1jxwbQXkqQgTAbrZ6YZrUvPgBgtrUvBbkPS7wU3tSowAMLW1dp9W4X14kuNVzJpV4kTDkAWHMjbK",
  "key18": "4vvPt7fy7Br1utJRr3AwwpjsfwzW3Nfh3hGiqwc15CgKaB7MKdGGYqpH3zkRgoyXneTYjqD2gVEw4PTJMosxBDtJ",
  "key19": "2N7tGtkEBR6dctFLZDys7LRE9TdXWevMr6zg3f64wi2Ef3cVpCDrFWLmYn9LDH4sA1UetMqpATuAGBWwAzSi8TXD",
  "key20": "3JZwd548vaLjxe9dXe3CqTs1iepyL6Q69p6GMaYbi9tNF693SCj45D6GFuVBeDkrDxyJfqHDinNtix8ZbRP4hmHA",
  "key21": "5fBXRfbKJsfoQRYt57bUnsvRT1ZjQTLtbKAsmBTVjnAq2D4aSuF97KBjAxqzMbJCsgCoQiCXpqcggZJYR6SKRaJm",
  "key22": "2xjVnhJXi8E7UCUsjZfu8xFEPujJkySzBWmivEPinQKT9gD12saP7UrSYCPrXjQX9nLRtHUPNmpZQPkUUeMr8vvQ",
  "key23": "2rEwzjqfArujSkVQbWMmipyia1vFgRMukoiFXDRvuJKR1DzKa14Fo3HMyjN8Y4cV19CsnxQj5vLP7YS7DeLCi7q7",
  "key24": "3xbjn4AjTbf3PwtTrsBBeGnGMMk39AEvCLULoRfUZCKpMAtcDrGKFXj1sDwzAB8U7bqbHTtfrhtEdB5DCyKJtBJ6",
  "key25": "8yo4H2PjUfcKDJuFKuhqEDiZQwMRAYmHUSRbuavZELy2Z3D19R2vtUFsyuvM4xEv9hke12GjWziM6abm91nU4fB",
  "key26": "3Jab4r9mN58GBhBzTyvvk6uoJLs9nFH5du4iWg5WJ8MjQXfGG4c6oZHHYyunp9dUwibFASXgiVyu34UiMtbrCK26",
  "key27": "1DdhHxoMqdV7triopXCpQwFjEiLKcG8mGyKBn6gAWZXbDc4r1RP3LC7pNWrvmDK1CnPJjR85c5ZAwBegsgWfY5Q",
  "key28": "3DbaEuS4qSLUtNDSh6xfJQtyr1dcBeSUBH16UBSp1Pciqbe3j4zkBtLNAU2Nwg1e9PiuHoGoHmPgjsAGruu7MtnS",
  "key29": "5qL6m8RqYbngTYCJBcutiTmtELGNCDENWsZzsLLZGw3LGrCTT97ww46qAURmiySwUURSLY7nViU4EJJGrjbkJ1c6",
  "key30": "5XAHfrWovKx7SBo2HaJzUeV6sWdixpxPpoEXjGq9EHGi7NXHSmD7DWHQwdCDpJ1d13H1g14frnGPtK5wneVUa2Br",
  "key31": "2EEBSgHweqTyuY8Nvv6B1gXPWXC2JfrvdyqmUssVvwhSaFz65oxVhnJKHM2CGFFYCUevF12Qnfj11iaCNeLPUC5a",
  "key32": "5BA1MyUxYQMbg94saGt8zkc3gPRtfaFfBSnpqQU9nq8tzhZvNTpnFprsHG13fSmZAxnL5Kvztdh1t9FQK6bsvCCj"
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
