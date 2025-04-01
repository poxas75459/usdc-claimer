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
    "46HT77Un2BAm1aCRkKjQJuRftjuwy5H6KjgTXN1QW583i2zaDDQAwsEKM2P2oHqsqMK3gwV89NtbjuogoLjBReUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JUvfaAn1eKdkQ5AHtKoWnfNC31UcE4gd2mR2ued8SWyU55CHXzrhqkjsuKBnKM4nvwqBVyiQvTgqiy2CkTGNhdZ",
  "key1": "37WjjM2MwwFJE6xiJTg6iyieABdu563XmFCACEwVWm676tkwUsoxFLxccsMjGrZsRFF9rnPqmTCxrp7KJnnV83jJ",
  "key2": "4nc8dWtJBCzaDEto9dft87j9y8GxixxcGFogf9pbGQEeghFQTd1nZkrUekxoEsT8852xU7KuQb1rY9yk7LY3GUva",
  "key3": "5tiLygPtHigTsRbU3gFQumwKxndRWDN9CzTaeyH1Mj34ef868R9zcxZ3GjVmix6wmxXyCvufPiPCZVfDqHK5U9o4",
  "key4": "4zWnBJq3mmMbpMUm7xxbfGhQeGwNEMakVgjYqMiEAXEZtshCyPK2nQEVPPyGwnd3GYTzgzAWbRHrGP5rajewAcKz",
  "key5": "3irjugTQBqsvKAyCdbBNrUwFuRgnnVcL6yNKzZM7xwBV1qFN2JYouGk9fgGp4ok9yiS83XR4xvEQcNZ5DNYkpyEu",
  "key6": "59mA5P9NY6ox2DZkt7PyWt2jwbxqCTUmVLb8TwYiP8ZgyhLJFyhEPPczCNyUtZjPkFnXniLcF3TBmqQmVfzfmrYi",
  "key7": "39SDZDz3o3ZQzbekXGZzfyeujEZkDCqUps6LmDwgsuHrHN9tkKgVFpGNM5RS5FX3ogJg6Y9H6fGh4swoecWN9Uki",
  "key8": "hmVCdsecnVktaoJ9pRXCUpxPe4EHFnp9fBTUC2JHFqaAH479n2fYbPDaUBKCZ1ZzJZdqtUgd27Z3LXjfXT31CWG",
  "key9": "MKTZynivAV3W2qn5oHNauZ2GajZuptPGPdfp4wYCDD1wmoAKjVDqSn7DmkUCRWGTGakW3FzixkKA21u7uwMUFat",
  "key10": "56jRK2u7FX4EMUC7AjkAbZgy37RsetQ7FK7JnnN4PZYuwqthK4vHVEUg7tmDMQ5H8KmgHiQpXuhw6u7eNFjFR8d8",
  "key11": "5QGQgoRZaffXBqDmjGYxZFSykWux9x88wAksxkcyTQag4qanBH2D8JovtpgMU2JFPZjf7q2Uoh1PLPyvXhV6ou2V",
  "key12": "3MVTfMs7waQb8i5PCCrisL5q14QYytn9GYGNauHfMhy1yKVCMVFhpLXcemAzimZxkVFBMzwzKC2zieQuVXkbLmBT",
  "key13": "42FfdiBuDmn4p2Cd1MazLU1oDCUiSRc3H2sbDYuHrjZ8R87CfPfUh1dPkZNWX3rFvszXKvW8kSozWzqsTt68VvVc",
  "key14": "XutfGMMnFf8gqt18pJynE6PGWLviwcEPND6deLpUn11VYXYBsemvk29H5YjSJukGxTMADjgHRmoTWbSvRUrmy8F",
  "key15": "5x7qNeNMB8bt4BTZYNLigJn74fcz5xNw74j7bsXB6dpt4ggWMHNC5i36CWCqp8NDjqpegXwvdJ1Y4ULKNNab8foe",
  "key16": "2CjwQ5atZfyJYBCE6DJHHHJiMuuGkskXPAXyAH7VfbBV8siQ6D7Gc2nKUdTCvhW1C9RLN286DcHE388E12LG1daP",
  "key17": "3KPvz7doUea2YnMQVito8ZVYTHvuNvqHNVAbyT4JLHN4gkG515YLm8vY8fytmDbt6RD5gdhtvtPDQcTbZNZDKZJF",
  "key18": "4EMLimKQo24amfp4nQxSGXgESkV6zzR8eeYgYAo28o6SxVpdwn6wfj1jh51w4yvbW6U7dxvs1nTfKTTyqp9e4iwx",
  "key19": "3HWZ9cqU1WwigWDUMMqvKv9s3N2qwoPXFWmWpqngiEcpgUsTSjjQb4VeSTupkgmMLVbXM72CnqTveSfmkpTwC3iX",
  "key20": "5NrWLCMJ21k9hFC2Mtiv8Qof7KZNp1tPcUV2xDQxcWYHSGWhjuZrevGvK4q5U57fJmi9Ka6ZDgpbHHRM4KRLASjk",
  "key21": "2wvvSX1X73SVT8ZF1BjRErqxW1Lo22cBvncUUzWuhHL9uWibuoJaxSwsNASJ5CApNdty8yqoC4bFGemc64CnHL7M",
  "key22": "EbYPnsSJxZ3CqZn8Phh3Meyzzj8LmNKydEby7kf2qxZyz3EK4Vmq5Mn7n1VxMaCNB6V84jVvt9F4NczGoLjktLh",
  "key23": "3nstkHuxenwmZP1JTB7Wo6j96j4ZKQfM57tdEmjzBvHRFLQTSqo9SebBKPZHWG1FuDUXAaiYWDVzYPUzNKfm6TMh",
  "key24": "32sv9aCaM1Q7pkauJEVz7NyHDmAQNGk5V1Btyv1HSwwc7LfPLUfxXEiXVB7DqNmJPRtjqEUK4NUWf6B8LCB5pF6u",
  "key25": "4X4DLohmQsSHeNsdyd5CRCXACZeU4SwbzWmDAJ1JRvuXDQpwhwc33PSkcNNXymroQf3gkBzKopjr1AjA1qHWR5jw",
  "key26": "2YWbSbBST8ovPBYhSic6FF8SCjBQfitus3ZgeNymw2empX2syHdvFxcYxNZyPsuftCA3yTFfGfuQxqBcxrqyYupX",
  "key27": "324F3FBKy3i4b5x6FMu16XuxrBsJ34X8Y1G57ccs3vwyXRJ3Gc21qcBm8tiwJxVM3p8aqA6GJnw1xn4UVfS1AAFr",
  "key28": "32ZjJtY1Mmg91VaE9AEA7nunZzS1t3qWUAnt8tEDYdFvszwRBaXiCuDW6GCE3XH5JE8ApbssuzX2hgZnuUR8P7zn",
  "key29": "2pxzn6DxZ78fi9xAJFgJavQpgNRVT71SC69gCbjT8S2px4BR5qPu9DmWrwc9m8rNSddtTBwxo7hdn3PmABzTTkbb",
  "key30": "2Z64GduTvvyea1VPew2CCDVg6Yy9B1fQLCQdQcqgWCSoteoHkh1xhTJTqetqEXofT7JErpTYPFsLaiCDUkyQQhJb",
  "key31": "4N2n6PbKfWVrEfVbPQdjv5UpWcwLGFuRbGZVoG1A4Whizczo37N8YdhZxszvJaqFRCyGvuowjyhS5CjQSzifRTsg",
  "key32": "5ebJz8AiweJFEJxLXFGP8ht8DKdfHMCKNoLcALFKT5pvbStTdxHxBTK4pmykXEbPg7kuN9hMapRrhZjQKHjgau5X",
  "key33": "3bqPwoFZUYEGv3VWKECRbSgrB88NCJhEWdWVXHy1nfnCWt1D69C8ypco68tJL3DrWvxT5u4vNTeqLN6xE4HE9Yrs",
  "key34": "PAjAtJtMzYJd4ofUWByyULgQjYwhUSTLNbQBsJFJBBXRXr8isGiZiXnafzmv1C5RfCHyaBU6Jx8H2M1j5hWv8tz"
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
