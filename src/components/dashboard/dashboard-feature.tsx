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
    "6EdnzfJQtsJjrHYV1q2kHQwBbKQYx6yLCbgNVPws5kx1pWxiJy43obhvYjWMAmUpf1Sw5HLVQeV44kmC2xSbmta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z9X9qNjhJSrFV9gg2utaq6z1f9pTHLYTF3HAiDpxDx9xm8Wd3xngkgLvuwSjRESL5xyKK8TfjevZGFc75b6mVPe",
  "key1": "3Df7xHVAdnQxpGQUnviTPicy1GaVGMqDD5gFYu8NzK23zXxKJXGw2Q2Des1TyEFDx6CBEo144nADqPa21LXesEwF",
  "key2": "3rnXvvB4AXYTGSkWGNhHoYvsw8w5Ym1Rg4SF4DR4mjQbzsWN4ZMYFCNRcDRtCJs4zSiPf18ZbxomiyqPQJVf51Ms",
  "key3": "3wUJfRywZZNBuscpSYJQmzxHBZLRAhF3mj5F4u28C653coSNgmLx6JXMiN49yrDGKq2mzuTibyRyCr5ubqjh1Jtp",
  "key4": "3YY51CHjgUUBUWwnjYMaQiDeH5A8sLtJGXGEfUYkCqrJWe7o7VFWR2A341LGhisUPjG5WpiXBzTy6Tj4WSS8aRsX",
  "key5": "LuspiAdN2SdvtbTdeYTduTJgKqaxiQYxVFn9iaNSVJcdSWN38Z12fR2VHYvmw23iChnWwGaqeU6fyLVysfN52X7",
  "key6": "3zpTH44UFbjw8URMJtA4m94UFqzkmpXaGZmE9eQizLRTAa9B47HfJ6woX4EQGNGZCzSiuqQCvQxGCTe89TJojHLp",
  "key7": "5KFnCzWHDoHS8QiGT2XYSBgZg6yfHhpAuAoLJw1NvNZGjvfxjcgqERNGE2VMXmNDyahfTNDBNZJ8auRP2TpLsAUq",
  "key8": "5HKSDumiCXxRKpHMyP4GzZ5tLZcH6qFPSAdfEE4xaKa5X8z8hphvUiTqgcdGBT4tsWswPPf2jwQXMLddaE7zb6MU",
  "key9": "4nt14da7GtDJsn2ivByZyKjVES2MhTKfGGYQvGiy4qoDoRNhS7Q9zM6SWMyiqK5mUTih8EDc33puWUq1ULn3pDrg",
  "key10": "3qMWk8hgytH999WnM1oq1qLLgqcHBUCLSeRQVQiLCvTGc9zt21XrijVMCifWRDb5tFGoECMMSUXb7mxifbbeX91M",
  "key11": "3syD4sJMzwKRea8X6yhLcdPKgd7RfaGwkpwne5W4pnCQ957YrRLZVzFxFaFbukfNqoRf4iXvA9A1coU74ASDQoG6",
  "key12": "2rzUsEtEJUNveXwgvv3CuD94e86Dozj1Dr2JSCv7KVq8tYVtAtTNyjRBd3y5zjUE4iMX3AM1XHREERZ2LkkJWrng",
  "key13": "21fr27b74mTswzYLEgrNyZiDji3NNzxHbVS8qHQUkAh6AUJWzLpG2i8LvksT4TVtqc1S1xVdFQjPG73q7io2mQR9",
  "key14": "TCWTtJPUFYdmXgGhk5GD6SNEJ8UQjsptB9SFnuxisJqzaktQ4SnRGM5BxBj7GaZK1QfsQ9J8YZjJznaSC4jFU2b",
  "key15": "4v1sDWcaq9FR7Lzh2zi5QtTofNpoHytfykzKeyiJcUhMM3uWPeJ1SePQLgppt7CohxkHvAcogBQKU3CqRn3Fc72C",
  "key16": "4q7nmJFEGFcTgUN1Buu8ipsyuChp2GvYWCHJrMRPb4AqmbW3XStB7ZtfR8kt5U5ojzxJgAKcC7LFJ3Un6nPdEQ1k",
  "key17": "5aMCMq5W3cWd9UbYdsZgCavF2K9sb7pPdQCnspSMEjF8gtdVTZyAwdA1swuhx4aEob9tGJdg8pgPgGch2Y9EUBBx",
  "key18": "4Fz7QCK7CDztbcaPtBocXv7PvPCDAs1XBAfEXyChsUEBxVXojMZsgWqTvonTfk2bJ8WL5c7oDPbF12xycbAZFJps",
  "key19": "4ZPCLh3s1bGevxXgYum7PfFs9CAGMmm9Sy4dPCSAtnrDioND3qHKY1MDQxcMtFwGNcm4StrseBMPuue2cWqXTzWS",
  "key20": "2PUNPJ7Dr3mB2n4mrzngiurkCdrQiYecmJy58nz4msJmMeYjGGrMCxXaioWeUMzy5ZyuzjgikNwjXS8aSoSyQqNv",
  "key21": "4y7qRCJy2Ask2YPoEHbXntQ9VV8Ts14h3vDG2hfDMqo6roJdhNpWGrgJPnTM982RYim4Df7yhoe1d7aioF6xM38w",
  "key22": "4DQ5jGJALYwYye3wi88Pc3ahWZwVG5RCUyLnEppfv2VVnLMhgWNtqd9igkLaQ1yYJkkkEjeYnuqheCiRVYpbaLe2",
  "key23": "2f1Aq7HHF2WZgkgkjrfRLTPnYNnPDMG2weUeG7VBnpTEzbnsNUuUW4d1RUbGTdQpxSJHe2FjKp68VcLC1iyobPZK",
  "key24": "3pZbRBs8KD2Cwx6jubmbbwnDQRSQbdagxqDFvscX6NSE4FiMJNTVSP5joioykaxvavEj1y1TWqKipjnCBtjn4MLn",
  "key25": "43zkMuKoZJ6bzXrqkamFAPMbG5sZvshwnNd96uZp8TujBhZHjGZTrehRsFgDipu4mMgqPm5TEBpcHDJrYMUmc7YS",
  "key26": "wN7J2Mv63ZZCm4JSEJSVuKyzxvuDg8JUiwVabMpgPvXVRMRbLnwxJJjjqKbJ3gQn22FbmnT4wsZpBHSfMNaG65j",
  "key27": "MNbjx4DEHzEkVNifZ7qjh83EBdErgLfzN1eMpZRhMxEBmrKGHjt6jtaDhQ1iVXnhGeXTg1vnZNc9ziMizisVmuJ",
  "key28": "5RNTELJ4qvy3ccJ41dWsaT9i75FyEhPynrZVn3PaR8E1WbKgbsbHhm7RpT9H2GW5UtSdrj1CwPjyDVgKv8priT5Z",
  "key29": "5T3Nzs26K6khPWRHTyM7vRk9jRDD97zKiFS7SyJ4nZDZVZbFg1Bz3tdCHJi4VckX8qxg3Vzf85u85aXDoVDTZocc",
  "key30": "YD4UoaPyiU5keUVDKfNmGc7m8fhvawP4q9Xcyy1LCuRA1wdc1aMa1AEm3kjzCswV88QNYsG6KVsJXAoCWACaDrH",
  "key31": "9zCkpFriMSYcdyJ2ATQ6cAwMLE7XEUu1o7AvMAUR6aLLeQ7xkEgf8vRzRM3AwxMhpNQme4ExByy1QEC73eBtNni",
  "key32": "5WgMi6pqF9N1WpxLGfCcMi2ZgjmCS1LNqTGfcf4XGPFh7sFWQdgWCrmAZq8SzutCUZje6E25jpoFC1BFsctkdPfR",
  "key33": "43FiiFqS1GsRFeYsdc9n2P9dPDsYWpd9v1ZnBDahXeo57nZqikvwY5hnqBmHyQTzGe696D7dk9RzVe3RFPdvnMtU",
  "key34": "5QY9Tgv9mKPEvU3cDf6Q9Uvhb52RgNv3NBbCfejryALzckjB6CKf3i5GNvmsLPqRVJWigMuJk8tDzBUDU26qv2Kn",
  "key35": "5hA8Svpd5ABnghm9h4saLvYubh9ZT79UHEe9vMsGzxAUUsGcED1whYzXRPRnue81EXfYZToNBBBRtCRpMrp75YSH",
  "key36": "FHNaFa3uwfoutNxWcK5EZWyanmeJVPUFP5mnwJmCEgSFkqxWTwBzghftCMW7KViEr6FEYFafWaxtZCaQmX7sT4R",
  "key37": "cugufJZjfCcos2ZPa3YkmunFmTPm9XS3LcpknvEiWJGYTrQSxjgrJQRyQLdijJBgBcBeV2VB4FjZczH1FWHkJi8"
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
