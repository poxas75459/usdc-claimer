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
    "5gzgySw3UjHXuPZKujFEm1VhXMCwo3onEPLYWsQ2PYZJknmmVL5WWPsLFV651eWVTkS6vpAg93VsnB8Bpm6fXEoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BgTCUfecoqxdongTz3qb2UC1hHJosaLvczF5N6PkJjpcw4iE6RT4WuxanMrEYV1xGqKLMPW9PFut9UcWqDxrYHe",
  "key1": "59eE62mcA2fByMfaFY3kMvZf1qkjbKgthhQ9qNouQWg5d5w3d75RCvnbHShx8ZDyrSWvTDCGe4NYP8oMJFuvEJu2",
  "key2": "5kMAYX6Bekpu7B4prMYCtX6ktRAjJFU8VSFi73FfoKPSL6GHv5sHRqRVswVX2iDc5hxmgF5mP4a8tbC9CxXP6GPP",
  "key3": "5UFfrvDMRBXEGr7Sx8eF32yinUMRdekV2qfN7LioA3n1zYXvyu2cQ4DyD2FjWuB78qrXouaw3sm5KJMzmSKW2tTf",
  "key4": "5iDSbLPwqFxsjEYHANpgPhBXrjgozsPwgndJw5bKL8fAp9jpF8wdBMhteuRxLJDZXdJbEWuQJccsUCLna5o3QsSb",
  "key5": "jW28XNHtq6kW7xPSUGwUigjw8b9C3x9ZG6fQepRHUSFmWn3QsgyQiTRdfFAAwJGA9AgnA7TcqmScxGchNonh2Cd",
  "key6": "37nhpmYvjFBgFDcymNX8QPvTUFGjkcJe15fNw87YF72nThrQykqVrYgNHqPS4hiPizFj7VHdQgcxDmetHNMV8Lc3",
  "key7": "679swGBs5vGAtYr9Z6JyafbFh4gg4KVm8EZGeNniMoboHnWt9fqf8cGSBSJmGsHq5KkNGGNynyQbVvzPxZJ6UAMQ",
  "key8": "BLtLYJ1UqUrU96QP57gmAv4aYnRmJzekW1XtgTdFnj3roLYmwaPXirCEbkdmbNRebPc1m7rBhRzbXxGVfJBBDis",
  "key9": "5tJDbveVznPK6JDdEZSyE5NP6tN2ordkAjxQu5nvpLEwfKPSm8GLq65p3AGTguYc3vRZXZ54ZXhTXZVCPqzQqnYL",
  "key10": "FZGwPN8UW71tnH3ACPGSygi3Ekus2v2G9tzoUDa76sxCQTenux3jcWg5fLFDH79mZ26VfkjBPWbGj9kp353XrKt",
  "key11": "5u95V5AtahshsM9nQhXAvfgcEUGVSDDZTrXn4tiCeH92GwnossTfZoWntVAbADaaHgBaEyVAPrDb9DrqnZ8Sx9sF",
  "key12": "2qRGp9bdB9RwCxdwfBGeEsQKZQ6rwUVCtXwMfqhLJhq9cRnnC9DyCB5mtfxnaJP6GR7CdQvXK65nF2o8TMrgFMTk",
  "key13": "2ePuW2Go82QVFGC5BnegmxvLSkFRWvx8XWdD2F7FPu3HiuWe4xuZDBfx14WLik1ZJFU5yVW8uwMrszPaar4SPZSo",
  "key14": "4k1TJ8SWsmBrjBzTanJLMFA6GhFNq8qxXJKaGEWg5oQSHLk57bYbTiKsdPd2ADkG5QnkhvJnTSx8nyf8b94q7k2U",
  "key15": "4KgyP6Xw4nK1AAUgiH7BRig8NGd4ALLDCQVTN5M9iVZ3sc3bN2mEpf24AnhaNaHpZK1q7rPf34CXit2AY6sPSZ1e",
  "key16": "2wUUnCzTwg6AqufBkHxmMwVzu9S2PGydxEgwH9R89T4r6SwFbkfYvVymEpy11FUjHtEYJGZEj3kb25X8T4g3pMgf",
  "key17": "4YPDhnxZjAsk4tZAP3MyEjimXCTPTzzNY8eAvmJQ5AGKpdqmHMnBkG4amRkTW5yx611B65muLbHbgAHKvqVFejc6",
  "key18": "2S211fURnL21SQ1Csqe1x2pjfoRreznbmoh7zNfJ76UJMH1oxnyCooEVMnFGrhLii1WenFFYHg7puVoVSAokHsDD",
  "key19": "5D9b1jifHaxSHFyWsCDMMLZ8y6VaL2xbkLLdCzosmz1LX8eAAFAxyUuS6TCZwf3n5fcj3Bsk8GFtZCdH3BGdL1Lv",
  "key20": "2w62HePz4Hx2FDKVPt7dFLmNV1Sp88nA8NcjvUXo3NewPjV6p421UHNukhwkn4pZZCe38Trh9CihqKbRSeap662Z",
  "key21": "3TNbE2XyG586J5EPErQAnssFyMK641ALRcbnPN75wjqBDiKEmu5EF2KfCihartM35A3bGBsUZHEgE7PxufCRj6zQ",
  "key22": "3ZB1Bi4GzcUPQxZsSZ5ZmLZHHhpL3ZNqXo6pxFHGr5RpZNp2eLPAwx9gGT5EA9zmYsfAx4rk5YgUUG91AXKRcxN2",
  "key23": "3PCVdP1vszA99PssWJJsB5vsmABXF13iRbqyw821cZmFg2MaLRiiG4ChT4nxF7TWYN7hnTfGT1TncqiroJ95Bug6",
  "key24": "hHBddXNxvxuhb35kvUjBGbnRpkn4ETtR634rTA3CWRzwNC5KssQap2GNtRbg749n8kPB6Hoberu22H6bd7JyicR",
  "key25": "48pnVDENEZCbvE36s2DYTBpQx4EeCkTrm8zx2bNT9wBYsW64V8diG83hEqpPsvgHY5TcyYwFJHb7GBTndGKL5KQc",
  "key26": "2k5MbR8HHdyY4KBEKEpHQ8atUzhjEEm7oNSR4igvn6EBVGfuBuxkQJVcWLB23ScC1tAtSWHHpPvyrH3x2v9BBydP",
  "key27": "3UM4k4wiVFCjyEJ1rx11mmQcP7qMzafLiuKGdiLT5CAR2PRL6Mz87NjhQgntKfvsweoPtJTWmx2nEDXNjzXJAx8D",
  "key28": "dQ3hUpdX9q5PXreLA2DFQ3wbaahn9HZSdao3Hbhr6NrUuWnH9qegnUVJ1K1vDk3nJVYM5WBj8HKh7tHWgSF5cRP",
  "key29": "5GvVVhkSea8zYrdtnZppRQu2dBbTXyk1tKv4a74JMWvi4bZwf6qpCsMFGkaULdbKrb26TfBXmPQiAzX8fmV4AMaE",
  "key30": "4pdDgaguHETZLiiSrithSg4YVYUp3BHcwB27fJGMSdE3HKHtnQE9bcvgBWGkiWHq4xKq2enmkjXjnm9andHQx9PD",
  "key31": "4iH1D9oFFEXUoXiUL9xaEE7K7j3JW69P1dNcwBr6oo5MJyBKtegdfDfk9NsPgJoFiaEkNSYeksA8Zk8PDB4XCRpZ",
  "key32": "3SJeZj5d5PshAkoBuezyh3ESpt4tnwWhVUCtqVkc3vutYuVauYYpwWguGx2To3B5YSGyexahRsCvB8m2TbneCkV6",
  "key33": "P5GTH5V9yS2Ga8t8p2S1tqRogW6U8ACfDQCTfN6ojuCieAd3bw9GYHBGKatnRRzLCRxVfTjasfsmPk69ebADEh3",
  "key34": "TuXDt33hXDY6CENpdya4HzVASvX4FHZR4BZJwCKzTisdPkiDJPy5QrJzrnjj36fHZkUHckTvjqagC1LSWhcmXA1",
  "key35": "KG5qJpERsuPYaYJn6FrEq3T6RrKyvTe8VuwuuBjYLPPZVYSQ5wcGBnnk1aWti7smqXVManTntDZXNtWGSHxxNaD"
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
