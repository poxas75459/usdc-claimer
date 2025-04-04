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
    "4i3guxfSMHUcPua3Kj7xe5zi1gGi7aeFPM5FrKqF5PmncT2EuV9JZkt1SocBzzCsxriUECtm1yLSa5ypsf4gbq4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZzN2qHo3hjmYDjPm8P9s9F5AmSM51RSdd4fvkmNSEkQuQpGcoAtJgXPpHm9gfrYSfQoSTrJCE2wzC7jsNocS1d",
  "key1": "5rmP3mgKWD2qPvQYmkyCprmg423uJD2aRt1tQeLfrRbx8jGyX1c5rPV3dqdvnwdkzNBPiznkvcBWhnjBMNET9EgY",
  "key2": "3zKaqMUbooFpD3Cp8nzmAxhZy9hKrh61j2aiNEQnWDusc7aTPxgc4AaKSmaAEkvpdaSeN9R3rsMHgkjrBTv5Prf1",
  "key3": "5KmJXqjy2XSywBjcs8suocSYUde4YaygLBQw1jUoWyfZz38fRa2o7WrYExsGbNoV2sS7sqpbDUK7rjHnGigqBhu8",
  "key4": "2RzpL2HA4YX1mtV4W1zHapefprUPDf45eT2uBqV4xrm6h3i2CorndML4gTKB7fhBAwFBc9ySM4NNb7oveZ3XJ1H5",
  "key5": "3uXDybPY3JUY54jPx9D9dneAanR1aFTCPZdNquNnfJFbaNmgeZ9qtbGpnvvXrV1oTQ6zXSKNUKbnuYNgepTRZUqn",
  "key6": "2GYw1DmcasHeArXPmfMYTwAtJsRMQvw3D3wQVPNZ3NQXC8UAgSCvKCLKH4CvufXhrab16NMerrWTp5p4Ebj5Z4nv",
  "key7": "2b8WA5cXAjyWW22ipSGxqHjKdPJYT4xPWun4HGExn5cPxzNdJ3izi8r1MpR4Fu9Z7pa1dMc31GEPrivqWLPNc6gK",
  "key8": "iUYUUu6LDZLUHee2cwjbUjjQUBKukd2QNeKySTsyqwJuVNGYs4nWBdWk7LogfHJrpizCRfxDmcJkDnNiH42gyLJ",
  "key9": "3rJHFczCVSB3tpPuZ8fL9nXNsD6xNR9n6LatdGbW7SDA8HXaRxBhfJCgoix1n3jW78VWWfBKE1QNLtyTMca8kjWA",
  "key10": "yCB3sSMVdZMWBZYEbWH99VjpaMSQZuQiUUDLxuHCM4jbL9WshtMmftxCLBdKPwq5YRnqF6LtouRnRqQsBiX6pDe",
  "key11": "2hFLRgG3iW9u3SMo8eRZUnBjAYdzmnQVivtkhgih4oTzf1eRzn9yxaYKp1pnrpR8iEyHukk2pdavzHJ1QbzCgwtC",
  "key12": "36Ux5CKpeACUxFpLYZdLEG8LECGBwTU9pEgPRjPEkBfiNvTEJRBURK9VxvJT7EE6zLKrzH2T3oQHj5yAZd9ZxYGp",
  "key13": "46DcbtVbxMEPcjwwZJGQ5GA5t1nUeho1uJAZAB4NjwN9RQ26fLvWevPzmrXWjqdBrY97JLMnGYB3YrbXLb99wkKo",
  "key14": "3MgmutTdMKZHe7AfjcWoA4Y4rRn3CMyfvJc35rVqFcDFBpDMSaoq2su8YbpAb3PrmGMA4fw6mBz2WhCgyR1q2qJx",
  "key15": "5hV4wignRypEAZjP34rW3wmSUUSsHj6tGrCjYNHo53V1AYLkYbtKDLwZeycv7Qp4X3hYFm4QEXcYaJZujKByofV2",
  "key16": "3UUBSsTBmF38GV8jqExfYsUkhBYihdp59PdTKdAm3fYRTFkMBNd66V32qFmRHGJZdLbcA4GR2QyVr7CfR4EbyvLG",
  "key17": "22y5TVTjGpTJhzDdJGxEep4Z7Piby9U6sCojG6fQu7uaNEKYZYZXdMsKFkTQViekAvD2v6AbngVQ5Vc3D9yD7uv1",
  "key18": "5wD367L91CGgNqGMXaco6p5THEzPjgt9SMpvqedWqppjtgJk75V1ZyhFh87VZzw1MUM1umLWpGm8v5nMrmmVnoZA",
  "key19": "2kYgB7Zm8YW3ooTtn5VBYzD1EQ3Qm7RSvxzuL3vyCqMnL67WuBqLrpoc56egUPHRiUg8b4poxABFDu6xEzYh3pV3",
  "key20": "5exG6PfPxvQDBw24wLu91faS1vXHUrUDv4F9x3psc1SFqkXopEMxoNfemMEkb4eeHiYx7Pv79cHVPSvvWdNpUeCa",
  "key21": "2VAotNoKemAPfSQvc2f1BB32TGh8c4ZZzMhiFAWmDcdheBJHTfun8yj6jozshjHrNJ5bMnCzw1tZwWbbd6s6uc8c",
  "key22": "Kn43tGgtYQEXCw58nREwE6GFLscpMbC9Xa4pjxty5LWEC9vDWpK2o6ykxT7TH9bBrvznctL385F957VrEHLqG79",
  "key23": "ra2d4nomoWGkngyRKz8TG7n5ww7T46MDHbR7uhXqv5xVFxU58Sq4wCgSW3e3ky2Do6e7a2j9x8fQAyXKZ1aXVLG",
  "key24": "4cFAZP3dWF6QEDhJF9vG9rBQqgtKavTmFf6v6iirQRCdkthtw2auvjicKxqCWMdmUySmD6pj5ugE72PWPzbvMCCu",
  "key25": "61B7Stiizd7PiMo8jQmqjGaA6G9sBMnzLrmBNddY4w2CRQPhJagL6utLjmHaYVkcoyZ82SbhQKUgUF97m63sXSUn",
  "key26": "3xDiPKSXR1EqJkMi5vC1bMFNWrx3Ms2dhNiUgxumnPtruaz5pyYcvWBe75gfjGsXqWnMJUsJmx7L3YY8aP6cXGdK",
  "key27": "2yJwrrj4UjuRdpErKdeLCo2erK4L47mUqg3WiqnfFTfR5XVoDsPPyYVpj6UK6wyfeRh2u33zP1emnbo5dDpcEjPi"
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
