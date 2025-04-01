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
    "23yiv2nScMCqmUQkC6UgQKxzTc9fwJSizVDJ8Dq1cpfnRd7TeL7cfiSQ21decr7DfXA2vNiwguJivvuS7RV5JFGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8CL3Eg1kdFnEnNpPyFubT2H5SbSwKjzn6byCrJ9xsNJtQys8w8H8gVuymQ9A418eBkSgEEDE7gNmQ4HvSv1iGkv",
  "key1": "6p291TjQudoo2k3qzxb7k9oC5sHfov3sBQ1PRrLn7jC3rjj8Jhj7GzfhRJirP5KF6hw2UKPpo8jDT89ivzVEenD",
  "key2": "stdwL15khNJvcmUhTWRWCF6cAgKDKW1dvAJhAsLiknrYji9DUnCmHrtfxPWbkaeMzCbT6uVJjGs9FnANQULURKi",
  "key3": "4x7Xf7gNapykiQbb7kTwPiDYyMBLvMpzeXbEGLifj4tsLuZc7vF4wmwC62FHPBo5Rpms24yoXnZWKXKXCzWBzKEC",
  "key4": "4NhuFqBWxRYK5A7fxzePuyLbcNmjUfYkJ247B5x6cp5c25xm9LcF3ixnbVCXUkE8t13gw2AxEjXUb5Yg9eieU7Dx",
  "key5": "2N9ezedgov2QDrHHp1uLJGDng63TiQDP4Zz7zJ4efZ4ykdXij5ogxq9LR49vxoUmpmuSzMPTWMWmEiRf5zYqwa2H",
  "key6": "5jEK5j62rAvoKEdykUqPTgVxM1wTBA4iMSJxKrYmQJScVpA4RUH8gHHR9kFEDZWtCoj67Aq4FB6y4VLbSmKsa5Vx",
  "key7": "5fms5oUkU3NPFAqFXZuwQCjbSg1BDzp4FmBFjspeXf1JiWscK21hTV9rNufasdnqZAkgZUT3knfduZmYSAeeCYCk",
  "key8": "2NkbEfbVjwHGpXFF9E4D16gvA1of7oh4uJriKPhtzichUiVkJDHxD4EcN2Fyhk5cVC6pghKqQw35HGwXbQG3L8KY",
  "key9": "632HKGxtc1YmUByLSdff4KU5VsZv6kfMaSPnNZsnJkYGgKXbVsYRQeZxRBitVVY97QoS4o9rxJ5fpRJBWGy8QfCT",
  "key10": "64ZRgEzxp84M1RrLNPNE2HQr1E6WJjFbCvuqdu6zwK85qTug1WAg1Xq3aHKzKiqCc1UY3SMci7A7mAv3NNt3i1JA",
  "key11": "3F2GvaiBfJKJ8UAWmZ7vzWxiHA3ttQ8teA2xANNs9A1WVeS4WYZNtyVkfwu57djpsF7cRkeYbk3AgnZ4wpn3mvoL",
  "key12": "jTj6bXUUWZntQ5vzsknmLY22VJMWyNK2GRKgk4s1EVdvUAfsp4akKb6sb66BaGhJpdksUNvpPDjcZb3sLDLS6Jy",
  "key13": "337JoZguGFkxxaJvatVJMV5JCRiDxpPyEJi5JrkeCtZqRatAV99TZCnLzyCdzmrjTn6cV5y37ghKV2fiEqXibBgb",
  "key14": "5mEP4fXfQSfAoDeozqdUTMA9nEUNTixQAXzsjnkuGaDtg3ZRxaqeqbWxqRDRX12Q1TxGYmqazX8d8d5tpvGx36MC",
  "key15": "4i8a6NgUxh2sY8qJ1QQ3MBfyGLCeWJVUt2gWPPUEdBFGb1d479uMVj493seTE3c5VSDsrnkA5fyTT5CTqr5wLAZx",
  "key16": "B7pRF8amuS2kcefbtivbEYi5aYCM3oL128oc3A7jTvc9zNcxYkPd7qZavNtPXYKF3egMtKLkbrye7MfoKKFy7q9",
  "key17": "2hEWFsNZtQJXEAR5UFUZu7VoQLDYezfZE68j8RdEV9c4Qw2SSDFNVyVWLoBHFdTXSG7A3pNRS62oa4cVYCJhcbFE",
  "key18": "4zgzDq8Q3PX4UXK1Y9J6A6rc9KPtKujmVtrn4zr3dzXKnxTf97LhA96ULcxqjNe1KmBViLdycJcPcD6PN3cYr6jm",
  "key19": "7vouzsnFonqLK4GUJmkxvdXcMqhV8NHJMo4rWjWWseP8EJcmVzWxvPYYmAzczMrQ1NdTwJgZTQbuHrJyKXWimna",
  "key20": "2MzHW46CPRFZq4tmacVFLCDMvDzk4ik8PCdUwqeUcJZByZeorp7UqLBPjQ5iTEVxLjXEWj5jBNmdLaRACpF93Wum",
  "key21": "2jWbzw5LfrmUFyakFtz2WdUcp8R5FcEbaZKrEdLogc6D4A9UWKkhtUMohd7y6YaYoPecvQnGTfxFEFNco7gvqNPv",
  "key22": "4KcoTupZp7P3UWKHAVat3S1eBNqAys1cw537XRb2EzJRtpBUL9FmgCByYuPGBhQYVf1Qht3c6A6uFDXz44dtQhaB",
  "key23": "43hGh8PQqdAW8PoyhJYGa9x5PqdrDWVHZ327fPkcgm7MDUmkxh4JDNM9Bdk4hUuQFu2k2oxEoNcoj6asmTJBgLDc",
  "key24": "qSQLrX7boJ8hDKNNx2M5jfcFnyhvrrcvDALuw5VsMRdUr24bPuW7u2vaPHUc1XAkxJr77Au2GHZwoVLkrmnFQw7",
  "key25": "5sDJdQowDQWwpH1YujEGPyBTQ9TNTc9MA3a8JHS3zaAF54qBpMQxg9SKAr2fe3gvKNGcv9duuBgaVqMoa37zxa41",
  "key26": "5T9tNZapHHkMdvZJmPZJo7fndtAFxEMHVqxPCAnKiDupm23RbdF3VZjbzop7R4aqt5Dpjnpuj78BYJ8SB9ZGbW1z",
  "key27": "55gZtrCR56u1Gy2hynT6NH9bJFNP93Ke2cXB4iYxKwgCJmmQ8mZpic36zLyktA3HZvH2inuFQwdgmYNxhd2v4GTd",
  "key28": "3KiUmHzbQK2mRQRhbdc25Gwfeo7i1mJ9bSWapJmgTo32GHHEaXxYsdng2uRvRgUD4bEGzPKfRY7yi4av6CQSQU96",
  "key29": "prrx2sMgHvjJPd4qVo1YmpNw7ZaJc3fPrddhbgux8N4rDMfWHHWF7rnRrMZvftsgfFFvgzyM9apuLLnSVzDsD3T",
  "key30": "Fpbx8wubw6NYQ819daze5UCaMLmJnLvxppvgdrStxTw4ZXZju1UxSqBSR6wEUj6ZWkwezsAdAx7aL28KvUSakwE",
  "key31": "52ErNvMTTirf8y2jpbowjTuBNiuEU3AMsNGUG86Cm8a7GpfPTjFBba5KRp65DSJvEXJBZR8gR2kGmd27tjdsRBrk",
  "key32": "3XDLVuyKvo2ud9Fn9dErJQDo9QHhWwPwVvrYwqaTEqE6wqrdrxfPHCrmYy2msbkZgTRxfPBwi7CtCyRyiPyzXDeK",
  "key33": "4Ax956N2f4c89SuFjQfMWFbwJRLXyHnzWKKrnQJQEgcVQCzRxzP1sCABpFiFeWS1FhB6h1MDkcJnXaP87un2rsH7",
  "key34": "4g82Xy8kDwcF3pDaz6pGpKoCRfjZYx7Pqqf362yLuMc3tupMP6RCksUZAg14XWKDK1qKX4hZ55AJUmijNeY3wnnb",
  "key35": "29g1T3dUAun2zRBiPFct3CePQ94JAbgRJEMjcuT6GiHbJEtGs1fxTfWuMp1kPia5mu8UFMJ4B2RgK74KxxYTDunv",
  "key36": "4daFSJgHojX77bsh3NTiJY1yaj3qq2m5btWqyxwzeCVDRECc5c8oz2LJJ1KCUNuASrKpuDvKBv45eBNTAp1bfD9q",
  "key37": "3ZCfwRGsLaqSCDMyjDU8Q4U8XbuaZfm3jURsjdkFrBhNbfQL3cy1SZ34TJHbzJNEtGMNSqPFeDV4gL9Yn5DV7Eoh"
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
