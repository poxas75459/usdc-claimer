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
    "3FJe9T4y3iXFLxJ8fB6ASddWR2uqJk1hRCgWJsxuTVLFV4Qfutie14YHKAraEozaahf3x62boQjZEyfLeddhJrKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yJRCG6agn8TD1hof3ZrjTLxVudrmgooCAoGdUB7Ez9DvnfAeQL6hiAL8kXpECKw1zXivLNLBvoEGMJhwiFVW8cc",
  "key1": "2Mt5Faof9fhhExzG1ea9sboy5vEgMMtNcWiyNEHVgxiAgBr7kUA1kvrX1vXxPZGR2JcHXsQVoFWnUZvXdrS79Lur",
  "key2": "hviahT5HogeWUkfJUu9WUFY8mWmEC7omwiKZPN6zNmra6keT6M6yaFXWL9yMhnVHMGEDLwB1MomnufkV3kFN7NK",
  "key3": "2FcduZEqS38Wg8m3ZacyDpfuSkmJxbrBmLZHKCZJXhy5qTNJM81ShiZcgwkvEsEe4RFwY5cMQTnCW4YQphLvcCJY",
  "key4": "4cb6731PNh4LWsnDvrnnoDGydrSFoZvvRXMEf2hYbuAnuPcroCsDF8k7Wm8PAwjSMXJ7u8mC8GhRgvpyYshJfCuQ",
  "key5": "5mSBD9BVRLvEBpkLCsZ5qkjF178xDyxzoq7D5um3vJvJx26VU3EZKPZAcd9Vm1CG56bNF7zKyHXjtk2Qy1kM1DTG",
  "key6": "31DcGsLVw135Ev1Y6ErQiB2L9ZJaFaoHLLFPGWLTPjAMFmqP8pGsBNPAtQVn6AyyefPw85RSXys6sFxNVpxb5J9b",
  "key7": "44vkmgX5QeA5gNxUhFQfEqQer6i59ZuinPuMyfHAVq5WEi8yDRk8gpbUcuxh2KyKjszY8tPL5KjRY33HPg7AbFsq",
  "key8": "45VQZAPbYCEzVSHJfWBPDoriuQpFojGocz15CjPZMic8X2E9sCuEmykos7CcxhByofKXynh3W3CCEajCLmmn1nqW",
  "key9": "4cXMgcs3tXruauqUDvTGukv26PeNUfeZrQrSL37gTJsZZXQg7PKuMh44XmsnXSZo3iPMeph14bADzGTv4mNCAxhu",
  "key10": "593oNtXvB8tU4H6Y5o4q6VXjjCo5qag9pA7h8pcZrNdrfARNenq8YVfaw2jEUTiqMvaKq2meW77yTZzWYB5PQHMk",
  "key11": "3esQt6wMDESx1bZqGRvPgJS9b8ijSvH5x9R9GM4SCzUuNc3JzzNZJou7EjRBdKG4kVApdVKJUmVoCfcMxJnWtGc4",
  "key12": "EvRewgLerTb27HPwnpeCuDo2QCRYEe4mtkJVyoL6um1wncBjzGPZfPSeX4GBJRyXCS5nJsGSHVk4HCfVhoLZ7xE",
  "key13": "2ySqeyPtGRjfDtnEcYg5tNNtJdT5GpyC8AVCnmSQkcHRzweza1WsRsLF736kQzPfCwxf7rrkEnujDpkdvzN6EUQ7",
  "key14": "5iBMZ3RYcYg9eR22aiN6DzqsHn2nKttbN9dL1Ed1LokBYmn7Vw4mUv81jS3KcNDSDumNvkEJf2irr4R13d5EuWhK",
  "key15": "5m6mexSKBWDYK9Bc62ZGqPMxX1U3C9vnjtWpwLdbKToPMJtKkbikoPiFU1oWconKwWh11cJRQtMWbfLvVud9Lswx",
  "key16": "38gGWgqtPnddqHizddyeoUduXL6Hgr4igaSxKrCRgJAE48B7GHp2fCYzy6RUFf7kvqTUMBBApRyNU7nVgYcVGXFj",
  "key17": "2fcHzQf5zUxnPecdchSK9Fjg6YRnwuWovN7Ex7dTqt7MyKCAYWMUNG9knKndX98d35RA1Vx9ffUot7KMyPsWDZKc",
  "key18": "5DmKAFwohP3Xrt5PsWvuoFWV4eHhTN2DzZawmbgWHLrot9FVn1i5DN9dQKnr1XVAPPr4PSEjfxMoUyY6EowjvZFM",
  "key19": "3kM1njzb8zrBMKCKa8jyutZTuLY2HhYiyPm1zYbzVrTHjNNGAhTBhV847p7mMbwJUr7ckb687oY3TzjE7MFW3tJB",
  "key20": "4t3M28i2JnSH2vsiK8zQqBpnKS6ZmrPY5uKsWb2tBJmD1ttx5n8X2fpiu4qomGRXSsdvU3mquDBkR1wcXjND66XP",
  "key21": "4npuQ3GPVLqDCYV4xyP2mB2d3nPLihdRPUKZ4sJLLmaSzrcxAaggW3EhJhLiNKbccNYDMUTK9GwUWT5Ep33nLfDG",
  "key22": "56XT76Zpfua31xVMw2G7rBj9LZMJxM7LVzh4jjJe7WVcibM3VSi9DW1wHTZMTEKkxe1TkTRjqdpFjXM79pBeGGas",
  "key23": "66bSX68MuJXxXBqJDc5Cowigf9h8mt7sorA3Dsx1rj11RL9FqgvvXj27c3hnhGH1DbjVTeoAuu4qZDtJtXYm9k39",
  "key24": "2cugruVYUUbkc8hLetQrbE2rDB8bPhiipHPZT1gQNyZCviwSttSWLwo6ZDEc9pNvAtkwWcApdAPZbhxEFGjFsZvH",
  "key25": "4CeU1uL8UkjcSsgMHoUKv5d1r5XYRDnNyjcnW5ELos8Ju7huxRvM17n9fedAq8THXer5NXrP4DuY7qwqcUiQjium",
  "key26": "3Tz9uqJqcHJJkRjdKcgvrz3afpwjRVnaSkQDDPfb3xspqMMT9fRuhoZEyQvsa5hwiSWZymqhJA3BPX9Mxtb1w7KT",
  "key27": "4qm9aqw33QVkN5YWkdsfHqetMsXZGFD3LUMDfmbayVL88CwkHVF4B4y7BSuQ5U5cC4oZ8N8G7JfZkHia56tPB3cR",
  "key28": "291rtQGS5C3UVRAdeMpL8JeqXxq71VtGYv45Mk56JftyQsUUGq4QCTLa4LXxZY2QvSPCW6VRHNEsrU3ZsQF4pivG",
  "key29": "2VwbhvSZinjnj6e1UM2YuQzvRPLLRbknJEv82fZB5w21qeVo7iHtgUPCREtJNJDqJ55zy7oi4SDaG6QbzcX8TMV6",
  "key30": "4AWxk5LrAmjzs8fVyoPyy5z6LNK7B7H5nLZ9HxdrXTha1LzuJHvtdXACLXCFXonW2e57rCBhguUYpG3cimG3i7Hc",
  "key31": "3fCfaAYbfxSdjUicNGj4i4cPnqj8ypLu6r2kZKr6v8cM8qMnQZ4Ff1S8VZxxtqX7EeF1GieqPRicjycHehPcz36y",
  "key32": "2qEDnVEk5jiCL9P7P86HRZXuUA6QG5i5zoh4ki3V97VPxbjYyj1JJt9ezUCR4Uo6DLQWaqRCNk2mAYCV2WZzTotF",
  "key33": "3LVySzVqC7eEDkyuHhsaoCRGFb5RvQyzc8gacMzSHy8sZ7S12sDAC2yjpk2qxPRMuAoxEY84FyjcYF4CbLFGjM7d",
  "key34": "2ks6z7QTgSyDwAzMV6wy8DvguLWmMHvh2k2hTqCMKiWTmRxPjfXnWHXRwJNhKjA8NzroLJYrazhEAP881YuRiGKE",
  "key35": "3zevozhzDE9EvNDFgeCRHWtM6nczCJJE13LUiExa7BMoWHh5MraPZuQETZcdFYqnVD3CcrQzh5jUMZwfJ1PMzwxp",
  "key36": "2kXnS5erPiLwjV1J3QNUSH2rofvMMBN8yWnfxAYJoSQseAqoxH8oM6hmc8hKVqjxY9r8SS2tD4Zfksc1JhYZXRay",
  "key37": "51xjtb2SQknN8KsxwUjVmNKYQ4YCWwkGgpwjNp5Sp8HFiEfD8Lv2TbnPBUw4stdSyhCRusDoqQ6q2Uto7s74dKeG",
  "key38": "2eq7SxY34YkS5SHRNztxncoegciBHJtDGwU6Bk558XQ6qQ9rJnCLKtPJLum5TPyFHpkNdfLuqy96ej5yJrHKF43B",
  "key39": "2Heo5hcUM2hyyVazKEBdVNKWbGkX25qtffLgeHArzj93bo4FHnRZvxRskAVBJjW2TbbDNJYh62hnyKTEDYjFekUC",
  "key40": "4Zogibz8qCtGsj3ePV4DcJYyD9mnoxw66HacnPekHQtoPWXtePpJub4u33iX4spaFWRBMxXbR8Dgga6TduH93bsg",
  "key41": "FTN3H6e2mL1LnABjS9YZP4iwhPnrxvA4oreK7xXch6rrkcJD24tJW34JoMZpGBsofd8U6NkGYQh2CKNckXFYXiP",
  "key42": "2eGLvqnRxUSgubvQnUEPLwTdWiQ2aKUx8cDMecLeVERDgzy6cXUtY529BQS8JzVBN5MpPaPsMquYxFKX2LDK67V",
  "key43": "61m8rgCXBJPjHuSdpUdfkLkDQSiy5bqitN8jBGAuwZNn7V43bZfs5KriMkBZEpZv39Vx4Ja6njZManpmLcNhGBgq",
  "key44": "3JwbZhJkVEXkbVf4eNAVrFP9wuDSYbPTFcRrjPmdtkRp7EV5mA5RUokaZgYPThWBMhCcafNvh5VYmvH88fqcW2A5",
  "key45": "49WqEGFjhqninZGSuWVUgcgS1cxQYiZfvXuKFv5Pevu52iKnjTM4hmTfZPhDzDAGyrdD1RvQgqxtmADzefXFynzp"
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
