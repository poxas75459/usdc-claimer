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
    "3Uf6GAJbGSFpykSJZzstv77vWE8fQDTK1fXwDHgnYnXXPmjw1vRBMECAMbV6D9ZEvpPcQ6uDdV2XqzksCZFtM1qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rEL7LdwTR2LMJSXNfsh3jcFdmQY7EfjZP2RFtuDE5fcoDRdDC6NvDUgFGjTx6LBmyNvh3hZP81XP4DH7cZdjvVL",
  "key1": "4uRzHXZc6td8UKo24mWqJ9nQsm589sMzeiqVGeM6n5aNA3DtCcCuvpcp6EJhQsd8fS5J5R2MxN8cBdWYukNb9D4w",
  "key2": "5MtuTf1MGeDCDhXR28EVNxZxeG1MNimNqG5aqzqjzd2qix2gMKMGWZpcR5LPWmLMqTjNSuh5f5MVhK1tGi25EP2C",
  "key3": "3j578tWT4D6khA7WPTdM7SukQh46wbgTmoELxTzthAhmeREyB6brhGsd1T2qupzdx4eb5rGpjCr7ptn4PL7mVeeK",
  "key4": "3R5RV4MXtYW5yMe5LuXUgqKdoqoqTRxjC6qn1716XsKk5bSNVDf9a4PfacNBRa8MxNjpf2zLMcwa4zTKCwCto7yT",
  "key5": "2d12jqvh26juuyDyfFsmEH8ZwH6A7vC17G61mKStiNHpMjhcxTC92qYkNXT1hRBVPauxD9vT1PJZarHcVhEqHE6g",
  "key6": "4L8GLETyNjZKWjMLGupqC1Af6gbSBj1PHFR2JnDEVKiWkEb2JbkWj27iaLuMLVY8mG8WtCXKaLC1cMUQauH1LeFf",
  "key7": "jSN6T2JKhGGRgNau6AXNNxk2Mm8uQdJU2EeCbUUcK5TtZwThBHkMW22YWB3AKTYw9DxomXdhiJH4Cr5jAR4QgXp",
  "key8": "xox2nTewxy6Q1ewbkLHgjSBp4ymK6ub4Q2n99XNTgc1ecnHcoTer3e5tyeFA1eZxXwvCLHpvU3UXwsXPLLUAzdr",
  "key9": "2a5CcYLZ1oDQFLAhC7GpyKyoS7g1nccY6LV3SYbVg3vUhrCrNHuXb3hMK9a4Y7aYmAxbJUriCLkBK6FifoQkGa6o",
  "key10": "5ZVcvm4uBSqBnL2tGogUMb19cNV62ibQy5Ywf6DqbWrCHFgq6KGPFdcQsZKZoQffKUKwuQzgg6CxVRHTCB6oKNix",
  "key11": "5qF6Qdg4RgU8TR3EGDCvShnW7xmiVWu3tVNNvZKLx5ih5akkpd9k8gRKarMigqK6ceAZCRgpzXkMf9SLzsxM8hCG",
  "key12": "58PfvhJrPKzyjKMoA8MU6GZrH4NUjsABniftQtbrgrmTWQxdFQHkvvgKeGBD9ToQgs6kohiNFt8W14xehLGr7N3e",
  "key13": "bHg9riDcGKMZowftmujK1HiEry6rPoWADqrRtntYwBYMQnp1Gsngz7kijroJK25rS1QDxRdVR19mGLJeRy28GnE",
  "key14": "H8BodgStqex63syTssKe2g7dtRPYiydGRf5kxufmahTE6dFt6JLeRXSctf9VfkFs1ygeVV1xyBpwXaHkacKGTvd",
  "key15": "2AVUasUyJUkepeuNAPvEafzNAYH1787VU9rkWyuK7PKDU7y1PtERi1igocLU9LXy6WBqQpXbDBwXE3diadgdnH8m",
  "key16": "5mmjLYMd6x2cvKwMwFSb16ZNSsFmQQEs9G5w4h8dS4EpiJbYdDJiYyKZHz9hZmqUWQSTE41jtqya35LzqtWugChM",
  "key17": "5YYZFkF7wWca3Dh3Rv7GeaAZ3cE6dKwe9RmfEJ1MWpMUEpzeqMuHLDyMuPdcUngrun4UbNDD8tsHQxpY445Ud9pw",
  "key18": "4YoxdhKky6Cvt2Uj3jKnmmTXfB2Y1tpnqRTreS5qrDHoncPWyVPKaxfxdiUoM3JGL3hqs5CroXGR45NdHcuVX54f",
  "key19": "LXQhGmSKoQkmcqVNVLAfxJK77iqwKGvgFvTGk2qu98MSGe5JZxZFmPEgVPxXiFAR36wH5xXfsbPzVXYEhuysyZh",
  "key20": "qpX7vMakhseFUb3cfmSZ5jnh9DatsiwSws7fHiPHv5cWLQyv2Jo9kmyUX2CpFnWcfFZhQhMm7yxJdRtfn1TvfAQ",
  "key21": "3CxMBcpa77e2tn512339M74SiAzhhtkius1x9zFJQe3zeT3cY2Tcm4RfiBQgL4W7C2JUFKvJ8NAzmCjCNRLCwxot",
  "key22": "K57NBGqGvhc1fC8gBCWdDx9FB1BdfbFT7YLxPqpJPYoUoCz2E7fjsEZ2aCChzdXpbT7MotnTi7T2Cmhgog1oLCL",
  "key23": "3utjRC4HorYVontnFqbZkT87rwAnpsbZsA387dTQ2mjLTs2QBow8ZFxnRrJhZxtWRFXXQ6KwtS4aEthZTi1fmwu3",
  "key24": "3jUYxbNnGDL4zS9KTHLvkQcpQ97D2oZXrBSMFNKuuMFRCyap8VUyz6S6vTbwspoEBeffBHoZSQdYufCBGMdJ47Qk",
  "key25": "5Esiiayw6wkDvyYuo298NHdJE9MnXdLc3QW8Qfhrq7wPMfDtmQFLE6bTTQPoDhnsRHdrn4eMb8XaCv4nZCiixhBv",
  "key26": "4PQabiz7RpL7Ha1X8qaF6KwsgWyw5oENGQLDJ8Bo4Z6MGyRKVHREY5F6FeRjntUHoe6shoo6vvcdRov8ZcmvTrmC",
  "key27": "5VQVUQzpVJDrbU6J3p4fqzoVEpPtBVYQiR21fAhFPP6yNLCgoQicxjQBiPxpAz8YAR228KZ6QoERsL6mybTrmSco",
  "key28": "9rtMT1Ab7vd8FEoK92j4TEzcH4rqXLwd9owBkyDscNX1QRppJJPjwj7gWrfEdk9z3tRZ5wy7FgGya4BWn3eHWbL",
  "key29": "5wRTEToPFK2b6ZPcQ9uUCeTZs7mFk5Tu3uahEhcSSxRrSXsumjRFm8KPWTCqyHdn16dpRHp8gkETmcLJMnWt1hvk",
  "key30": "Fhyu9J83MEGLR6khWVS76fXEJAdZGc91AbgE3HG3i3R5izgUZC4sN81rudUmYsau6RfgbiyofaJpsUrKgUxfdyt",
  "key31": "53Vx3LbniAXNm265JFbuMBLR4bjuYyNv8opHGLCUjR2Xq76UVoBy5NfW4Lxc1WbS97daiWhv54L9x8XWeYCUzNe1",
  "key32": "5xCzzN69wjFRSUREQQH5bPjNkBF2z9Zg2ntSmh6cusY9BrjfLmDVpdqYgD3wvgDcP92Pm4EJdBmjCNrfWVGetvR8",
  "key33": "3XxoHRWBSVPkBiTiyLbpsu6Fn8Hr5tDbqyVPJWhNjrMrafwZ4JJUmCBCyRyCgB8porxLx83RqjTHGKXBvf9GiG8S"
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
