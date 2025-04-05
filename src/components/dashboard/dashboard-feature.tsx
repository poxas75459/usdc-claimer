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
    "4NdunjP3mtjiu32szc25tbwDMyqnbhPA1ciJ2UZW4xM875uLUicN5mNBJbZa2VvwA8NF5Ejf8xWWYJUatHQ8Tsog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1y46265PfEtZTByZ2gxFwXNGoTXNA2VK1nGumXzyRwEdYaXQ9Fo5LFhDsyaus4D1Zbs1N5gcrk1tgZqSipejz1E",
  "key1": "5c9QznNvEDs5TJJPaYgKer4m2z3KxMJwMtFyNLewoNX4ZWZR7q5n69iR9LWdZRJP9LSkTqtMZr5RMRngk6bysCs1",
  "key2": "2UJDyso6oSBb2ct4tUjF5cZfP6jVWcfSt7CzRoYPsDgZYNpJi9ahYrWvmz7R9kGaiLfqo1yUy4iAVH6Qx6yHV5Lg",
  "key3": "3LfHqEnzstEWyfcfYEMACGqAmwTa4VhXhxX89RQ2gEsBbkxYfYXBiPTAjCR18aUfWahJbx7ZrkF5ZLCYAwezxwoK",
  "key4": "3RAZFVoUhseGMv8BiNSjCXkmoQ4PtMMqLLN3CAWvZmYsxoMmsCCmuhkSJpwjBjZgMJ7gRJ9NQrX847KEthrkwHpz",
  "key5": "62EewKnRTPbXPiPJfABekCPNsQbVkQHyDU8iUARZrcndeXCZnuWEjYuWQCaxWCkBME28JSnWfTUWwuCmfHvUUrxN",
  "key6": "5pdrb5t2umJ5f3Y77QFvDfEkaQTCpBidtf6JghQoUuvegQm2Pzkj12ztPgiA8oEfjLcUb8pKAnxV1UTzPAAzJQS",
  "key7": "27gGG2WGGosaDeZacPxE6PichqLR5vR4Wn8KfTXBKSN8k4L2CEU52T24w5hmGHEDTewRYEqAFMR1VtDhzJq3MtVh",
  "key8": "5N38V8ivuvtFMUp3Ua8NAtqQ2VwSo7AdJqCdUEPbr92CEWLxm14Zd94ZpnSCsfKYCfGg9C9kacnfYAm65rcPDXS9",
  "key9": "55fs6fxvd8TzN5jwNSBYcjR3BMDVgLrZv6aEzu5MKC4Goxz18rFh6xfs4YDekMesmbKCuMoRTKBJGqyvjxH8BHnW",
  "key10": "3dXHdhqUe2acEich8oeTGtnqYEeDsptPkwu3s4HnWJ99KsbtvJaGtPL8QamR4UDEresD8TvHhBRKLfGv2MUDm3S",
  "key11": "XjNzy6jZ2tP7ahYjp26qtSMxtVoa1WSYi77vC5odYoirdLjgyJNYRZkpeCvBgJFK4wAvLn1iQ8Hq19QDyRJW4i8",
  "key12": "5VQEb9ZxkqeGCaT3LhUVKcJGM9DKbcAP7zb7EnkaJe4acTF52qwseGWYrwNGeGBAuhdeoDQGmHNU5KuqaqHdKGqu",
  "key13": "2EkDm9kkkAJdSundudgnXHt2UDq8kKYmi1B49hanCFxhj1h7CjmNPQvF7dhVbNZUNyCtuwjgL1kLnc8YhHMV3JWv",
  "key14": "5bPV6fUsTSkjWthptVRxEUx6GMns1NXajZZqrmQLnGxSLNzus2sZH4nqLwiaqwpemSY5bQ5cgRnd2SHVA5r2qUzU",
  "key15": "4E4EXLuFgxyh2jTik3sgk2X8ArJWZByNtGrNkBJt6jhvJXmEVr2T6kgWqBo1xhQfpSzGWguNevr7dkiN7Tbs4SEK",
  "key16": "4pEWyywNxxAjz5YQx4k9rJ8QivU5uRGTnWwF2DS7wYhomVL5fVAyPrjSrEmVGALz4v2NNtUSLHzwMtQptkLVUtoh",
  "key17": "3dPJqhHgeBAnuweWMr2MUFY8jVjU7ZDfPxcMFSLtt5AJpX8sqrQLmtHZw3oUpQs9Dj5mbB6wZ7Qx1jog2sLPGETx",
  "key18": "3iNV8qMKCRqPFSLxw2cbKYmhYoV6NVMZ5Qzk5P7CDQSL1QiWikkwgnFKbdGt3jkYeUfV3PhewFNdtzEMN5Paxf9h",
  "key19": "2kfqmDJXFPYfejQHtBLuB7PwYDUyJBSaCrTGkcZm8XcSusz9R4w7md8RNowpdL1tmhsmmme98xWfT64UxdYCmPk1",
  "key20": "Am3a93dibcrQkLaFSueFjRWyNVmsX2MiHU8e5eyEJwtfmuNrCwevTU3GySsx82MsbDxX5JxTiJdE8M8hCRMyqW3",
  "key21": "5pMpUparQZuB6YX2NirAqYiTh69YTCLRZv24LrSCZnCwYKfVH8BPZEuVaqjUotjjR4ePUvEfvUiURh4yc6uQYnhb",
  "key22": "49ZDC7dnPyL1YVxyEzce8d3aRzL8RCvFTYmujofXgdFQUa4oZizLFmpbgRGbyRC5pSygtkc47bNbJk2qz244uQZU",
  "key23": "34ZsBTzmTz4G67ardC1hTP7BaNTELeNq2a4U2jBCtjLvR54XdCGBVwDqbhMgUdHuTXaoH8Gb3A2rsieCV1ydHJ8o",
  "key24": "3xyYqGdSpGsbVXYCRdWV1ZoNpP8iHqrqErstUVovcwLkzKyr37HsakSwbvQtBga6WoxXVXjPv8ndUryYoBy3HtjF",
  "key25": "3HPcsKKSkFkLKzvdmDjPyftNc7DpsNES2YWfDBAtHiyCR1bSG8fS6X7iJwHJ6m97X4U1aEx29yUf8TsA3BAiP9A1",
  "key26": "2CTY1qJZRGp9Eu9wdFb8qPgEXMKnrik5iPiFucejKbdAhLvGUKq77xwXYyEGrzMcH1DpfXQqpMMHraz5Rsmqh3B2",
  "key27": "2n4W3ZeFjy4YMejLwhZBvfonEkcxi3yw1rKSHFyaZ27fMic4CW5nyxzbBPmMLcpeP3ot4yLW9pPdQJSUeXwX6Jth",
  "key28": "41PvxtoST5CpyRieF3AAhp1FCSgMNtUZPxSfQqTMZ8jsMApduEuuakDDSTNeNnBQKSc4J77Yu3DtJgGbeG9cHBBe",
  "key29": "2XBSN6vQVVT7kHXBascUPDYS7Fr2kyco5nAzC4VffhWncAr24wpfGZ7PLKk6wXHysNh4Da9q96paYkEPw5mDiZB7",
  "key30": "bZLWrXWwtUrD2uwzwSsvY4EwAZWBEhEwXE9L5eK9wGconQKkXGND9LPwsHyxPbaNUbbtFgZLgciNgR8HDc7tCZc",
  "key31": "qQbzby5ofFhF7Y1DMzd5efFRM7UgaA4U7e9yiHypjSdeYNqaP72oaJSpisQhjxPkxYAMTutFKoHAmXPRQffvnNA",
  "key32": "298eZEskzdABZfuuSrZzyRHRQjNPp2qFJByKd3nHnXcqaC64K3VQfXb6Tfcq9QBCpghBTA5kFQzTyW4NUJnSVrc6",
  "key33": "TzfDibnFgrceoXpSE7S9Z7NotmijiCxZ5dWcqpWkqcUtPAjizG1UV2TDc6yT3rJWvzd5QiugM9fVsTkRaknjsLk",
  "key34": "3V9U8zrxsSiN6UTBC8dgze8yfCZmHpaDmhaFjs3ne6rqnisEpfLvYsZXuzKVEu2fBtLpdrwThAfaMDmKb3d3psFx",
  "key35": "3bQEeotrg6GwvfDVMNm8nWNUm17QU9JGDSZWE8KYREx3wJi8VyqkSo9hLom5bkVXWkEFJkyqRgWEwLTv9EzikUpN",
  "key36": "45ye4SHvgGgPDTAnmKPNkg2kzekys3BNNaGp6soi7k32KGmSLTKDMrQyP38rUGwmJBY1A6BLmoXTGeZfW8dJf88G"
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
