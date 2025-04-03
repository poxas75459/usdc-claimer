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
    "TjKv59ajaoV8GK778wcu69SJkMvsU19U1m6Ae7Xrwc2i4132xUJHCBxukgAeUofanRcvZJPQ11so7NMjG635aDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LhBdWVWdKjoBrwpp1Wz4Pb4tSyRvDJHztY2NsshMGs6cuFHZPEGkJsyF5wgq2MhqATerLFUkVJMnJsjcR3WK8oG",
  "key1": "3FqjLjNmB5PfGe4kFM1yofUkasam6SnVE3xvKtam3tYxgEG2BfHUKk3mbHaGJwTzcCDR5VergQXcE72ijhyqhHxo",
  "key2": "79E1pzTTN2Anrb8HaKQBcHhioJSpS821F2gRSTwYnsGJgDGj5pohVuaP2mNfSurUjRraa243ApkQSfxcmhXr715",
  "key3": "4qBqJyZxPivhm9V4mb58taQZxKSdzykXP7ZyWZ6yr7wSQrX1nqqUFU7VdaELePTS1cCM8haVTFfUiLUbySnXZGaA",
  "key4": "2rt1P2kYoRSHzxGDGHTmSd5muK1z2yTxTpRfWXuv9h3oaobnNKwLkeMyiwnP1KboaEhR1F3D9aBxoMSjraRaQokf",
  "key5": "7Gdgg4NEJDwyGGo5bwUnj5Bcnu9UspHfyr9Yeuaw2Vik9KM7EvEUSSqw4Am5WSGPYiaxzb3WB38evfyDQhw4mhS",
  "key6": "pzuoW3cd7NhNCg2GUjdRRkRDYsg6SUP49jempkhNmxwCJyRmwmZ1iu8U2kVF7PdtbVNWu1rA24xMPVsG9TmTKk4",
  "key7": "4EJYNGhT3ESbsBEsBaj3dXGJYchjndWGHLLAF1hP8C24eSiNPKkK8rVuxbrKtth69wHYtr2auDWBTr5eYehRABBS",
  "key8": "4c4zjSkbQaPyENdEwjMHhqn6TRj1D1ZB3njCWVFVu8agQ63wXh3BUqTkW2cuCvWWK2hisxgnjmWCKkiHmnc9ssMT",
  "key9": "5v7ggUMDV1n1p3qPDHV3pQLtUVijfKGqMPSYvGyyrd8ynWCDsTEG1T1aEpWYLjoNLGdLkEPTzDRAFr1zTa8brR2u",
  "key10": "5WZLfByZDsbrD2srT95ghNYZEic5vuh79obzBxyxLvmZD4BbttxsZpN314aWiPVGdtZ7BrwnZu82cNB3QQw4A15i",
  "key11": "FFFMocSUgv8gYFzUELmnFNayfLKp1VRfkxZeLBF7fcYoxTFjgvSnUdsEbvFGaMbJ2HMyARR9F7rjWiW97eJh86F",
  "key12": "4Uj4AjUYXKWGN6D9saa2TScCRaTNT8JkEacFQg7WKiMkvh7JR9U6gjn1ESfMPuPZr7f4ueFEJFLkHWMWr3B6eboi",
  "key13": "s8pPGhpbPPdt9i18iHAEKsox9Ck6m577uwWGjNTRCKqfNugWzY1x7dENAv8cCWSH8NZGSJoMw3PLUHrLE1ybmoh",
  "key14": "2JUV6XJ2heH62Zbh4qMgJFGUXwTac6n2xaf8FM6swFTj1rv4GmZ6a4yP4EzcwZrSWYbpa6dBiV9TfmZxCnv4CdPz",
  "key15": "2S8CWJBtoSFKVoEq9wjfXm848ehVGmA9RSrVTpVLZM6pRkW7k6knvocHwTqVqE1Ehwo4JyBAdoHrw9H9tgpjCtH2",
  "key16": "48QyPBbGjziD4S2QVeRp6TueZwh467DHwWn2ca8zGQNvtxUUNCnztSYFazvUj17KQWRhsRy72td7Ue7NQF55dgCG",
  "key17": "3GYAs2gkX5uBrwFHT9DAmA9xfAN5m383NQ3oZbmphfSMm6vb6LUuNf4M8rS83o682kYFCS3R9QhE4sFfAzHSGZZU",
  "key18": "MYZjM9fZdgVeGe9zwvavqqrrGvjk9DjpuqY6du686z4Xu6NvnLexp9Y5TSrHAX4TQGHW3wbHD4rmubZm4ifhh1E",
  "key19": "iMmMTwRwn6rKVvTkA2zprG4GbSsfJDgk3YzAf92vozZmyD9JN86kfBs212XT2ohMPmg3Bc8RCgUPAuvZVDgGSAj",
  "key20": "4774veoNsXuJPyURadD4p5Atx5y5acWpu2KB6AqNFAv2NeiVkBK54yqx4awnKxu25J5MU6Zti7ewjeFZTSnBdKA",
  "key21": "487pB9Fv7wngcKJnAxHUkSkAWPCanbbuS8q9gwqeAV9NPw41Jd53UqNYMYZW18eAoE6Kt2MuuBU73xRhxB1GoSvn",
  "key22": "54dRAJ73sZQ7RdVuesKpLNe5b5xiK24ta18iYStL4uKacjia3w38YpueTFUibU4oy3AvUFNcrf4ZRVbrjB4xuydi",
  "key23": "2BreUcY69b5NmDqhctUuekQujTcTwVPGCC9scNZ6rkBuWBHC4Ju4EkVveyjXyBhwZEBi24GGwQfW6vVdWWFQeLur",
  "key24": "5r2yNJBtQgLg7Y8U1ahg1k89rkkwMpQmSU8j7Ncny1z9J7y5RpjKaZkYNi4XhBL92VGUchNBScngXqJNEW3U3Xo1",
  "key25": "5GsUowyQrsq2pqvRkTB9hiwS6GV9GTFsxDVu53GSzNdJEKSXPZxSxBX49CkSAMQppooJUwtmEByRv33HwcDohk6n",
  "key26": "jGp7H5YHxNjEHVqDCekCGfDpducv5oTURMZ63DvJfMofXYgCG9LMMJ3qWxEmvUmMsS6EdkPkZo38C8mFFYek3xj",
  "key27": "21g6ZkCcjJAL6HAF5fEHurAkwcXve1demRWnF6SdzeQnmYbKLYsvmSqjk85RJ6RnVNnUU49G9vo1i96xxv7qRQar"
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
