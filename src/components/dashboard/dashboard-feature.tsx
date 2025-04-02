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
    "5Ai7ZDcjpmyE4x8Sm38aLkmS86hZSj7zfZSGbxTneMaQRgQdzmD3Xs56L7RbdoCyL2szwXk3tMvpA6GPhgwFsVt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WJJCoSqxkQxkUPqpbUg6f8QYRbXfxjmxZxAcvCtD2Zmdkp4DbSSCuk9mBPm8vAaUbvLeSLs5XWTkhjCFxtBHgcr",
  "key1": "vmArFeigacHNGGEcRso2t8KwrmJtH4HNMLbUMxwYndLNxqrL39AzbTa1Uzu88gvtjqtcBinSgH9KdGFApdZkwfY",
  "key2": "3CNFHkGgZdEnxoTabhRNyzbvtLpnECzH83MVN7bKSG2GHNRtTuF3mAsDaNmPffcDc5pHkiaB6fLhoX1Y13CQdApz",
  "key3": "32RifR6GL5AWCqjdbHiHbxYHuxPPXj4qfWwFdKdh3jJdJykrLk9qGEhZ5xazVZdecWR4Dg7fBDGded7dVur3Rca2",
  "key4": "3HkwuYx9zMmrDDB7yQm1WZd7KmU9RU7Ba57J39HYLhMCF1R2XGRZLMu1xdMXWrk1a73mhgbNq6yNRsrSpsoNxn4Z",
  "key5": "neYjQHWkH5sPfC2Jnf1w3cYroYuEM7DMLMeh1K46RA4NXNLVueiEU6APUBdyNDB98MWQH7NHVovPA4pY5vMkuiv",
  "key6": "3fRMxNvX1qVcsXB91kFeSFPPEd1p71L1ez666fXmpnMnqwfWpR2PKzgVbN9sSYLEKfj9aeLe9WV2Jn5Y9uzJNFXK",
  "key7": "jUNx3LXpydjUEeU8vq6pdAntqN6GndV3KZRFtkLuTbW16Vw8eykhWcefBrHUoe1xPiY4cMJouVw4ffVGKNbMPoD",
  "key8": "5EYjpLSzEE71Ns44TGZjfN29kCNPEWJSzvsm3Xi3RRUhZWYapCCHSsWyoMCM8H55jkxbhpHv2szCKTPvYHDtykcK",
  "key9": "3MhCPqQiFfw86cDkHAQzsExxtzvPAp1pFiDwFpxVdrV7SkPEGS2ysWWKAH1YAV9MLdYmazDSCX9uBC9LaFJCWR3t",
  "key10": "38eqjsRa9B1shqVQW8UMuxEFQUy4Z2RrPQn2uBVMCHvqJ8wXxiWfgFa71PUghx1EbXmSmFU6gYt8sNEGdzKMNXDc",
  "key11": "52fXmbdrTXnhhkDA5oMi38g9dVKGg8BMYX96xABXn5Ru8Kopg9BiCxCADi59fvKGkMGpgWsqowrje7MoHJNqu6nS",
  "key12": "4n1EJU9pZHH1tHLR2HS3wzFKjfTaoGj2cw8zuJinsmNiaMNFNvH8GkpK4QiBznC5gn9sjBdDHx4pRaF6UgbcUDC3",
  "key13": "3aXacN3GAsgXvMLZzYa7eHohDV3kP8AcsjYH3M3gLehYfQ8Ch9tKjAFdzBBYC5a8uakzycoENANdMUQJoMhhJUvT",
  "key14": "4rLECVt6PH22FTr8knT8xPoj6cr7i6eGAcDqfpeXWCqs3hMx9PvAFNoVEgy7KF7s8PEF7Xw9BTXN5EvYahUFhhNY",
  "key15": "DAAsBBFKJV51FoVrsXneoyR1RiUuyK4bzxkxZZ19YQkSzkfmXnEijs1v1jDFKkHwoMemmBit7wxBErU6ij4kWRk",
  "key16": "57uhMMVUE8ziusTTqq21c2VjchE1kZVHozJCqEqLsdArW4L5YdAMY1eP49ikpdHfVT8R7vaxaYtwGiKmSDoh1Vmw",
  "key17": "2H1NCY88tq3GHRUPSTmfcmgiMkkD6KmKi7tqa8hxPSHRX62J4dbcK7fqSEwCvER1WDzFRVXPQccpfpXDQR1SkHWu",
  "key18": "3Niqfi9wVfEnVP5zyCuViZxWYdtAGYykR8Mk6axum8K8MrmXJMwt923wRfkGkCiwzR9ywqviu9PXR5y9VA3ChqJH",
  "key19": "4AgkMRGzraVvKXP4VYrC6QQujy8mV7jQEdQM1kvtCnqTkcRXa8v4AJxZMpJxvXSSnnCWYCXupy5nfcEorFcb94PW",
  "key20": "txcycoA9tkWbxUBFXvpZ6Nn9T96Z1699MtwitVr8jcw1MjU2tmaRUtE8EAtth2Q6UVoJW585yrzcujBLRRKubdv",
  "key21": "2XpaMqPNPTTeRxKUzaiqXd5CaHS12BTbYbbe9ivCwEQXwh972jB3VkTyXbGrz8uh42n9eG2vRAqbYQ4zuGuZxMt8",
  "key22": "43j6dSYW8qPkMw85qkUMHbzV7HXDsP2T39GsVziDaqu8NyauZH5mskXFsdidBTPzZarSU83nVkEntkQkfjj7m95q",
  "key23": "2gS6kGMiaHHFpK2XB7P7QPLKNhHkKptasJ8GUC9rQTAf9MCmFBMa2dBh4tQVrBhP91KjPRnbzp1Qwuj5LB4vhcW5",
  "key24": "6STPsnc2hm46YmTkBUXuzoYQmwjjqq8VVFT6cnQyXApJyaZJ8r8g5mYXLCyFZUSDg1duJj5KtgnySRVtGzP2NXN",
  "key25": "4H37bVeSF1PqjoHQm8VzCpGZC95SmFfRC6KDVQShYtuwA8eJMU9uzxkvqqbL8HWoCRDx6Zo5Ff6XU4jJUG9Kd5uJ",
  "key26": "LvuvHfVpuR3Vup361XnNT41ooYZwxT8CLGDa3ajoNjwv83HYE1XWUpr3eEDSXDPHjqcak6nbt6KFZCsGyiL37mp",
  "key27": "4Jwzm1QruALsNMjuDqXmNNWxjPFyC3rV49PSmfLvKyFVzMBubvN29Ln2v9mA9ENxvpZiGU6YNZ54XjPBEDrT6hJh",
  "key28": "5GEzqXC2XpM2Cmc5qF1vHSpVQKPmtPvNBAEiZQYsY9RGt3pyCmuLtxWW6mhHr7Toc3oe6BxXyPnjGBhCd8atJ6PE",
  "key29": "4ZpypKjtEtiK626zC5Cw7vqCpibe3pP9s2u65zd6d8KTcA55fAZrF7548Q4LdSJ3b5X3D89n2BtMPYujygdPJvsh",
  "key30": "yVLSX3HU4iEQxF1e967XrvRefeDfM2MoqsUWH3FQS5enSPL4j5uUGRjZjVCW8ksfWrBsyWho3xRxoMo5aWD2GPy",
  "key31": "2bPrkdnFcTSmMDZnRkrFhdGWoCbsaqwagYRLa7LVD7vvDcqgSKEK2AoWHZAPa86hTo9JZkLG5as2DUqkrP1zFqPy",
  "key32": "28L4texqNFYPGCpuiVivn97HSNdk9pMEW91YBmFe6sd26GvxqbECyq1kfyEwGfVZi1XeSFrZTQ8r9ZwZQeY11sYA"
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
