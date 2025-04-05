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
    "4Mn2AnmVW1fEgfukaMAnbQWm6GVPYuPA623R6vfuRCYGbJFPdLc1u3GT9hLSwheVrjiEvTjZs9BuSCv4vGypgfuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W2o3kYy4M3XtbnGWC2ZDDuTh8eTzsAH7gGzoDaB1DgUKg8Xu1Y4HLhoQYQSBJcUbiPh1p6M3NW6ADwaBCimR8fd",
  "key1": "5W5SgQh6yxK2d9Kh4SzEBC9cmGbi2beHCRNkP4tNWGqC6xcvdajff7sM5uWABV4XbXNWXDbDvZhXVF5jPGTzUpYc",
  "key2": "hYxFG621Ghb5FM7moMkTEjXNTNpnUSQeuN57vozq33jJx3XmcvPWxeXXdJXF1T6MhSotipMbvkJrUjyEFvp3nYi",
  "key3": "3NzA1xfjXEcEmyUByHJRDRoj3BryWBhM5eDVKi94dZQiEZQBQznoetH9ina5vrATdDe5VYvkGz9KjWFRWCxSoi4x",
  "key4": "5j1o9uQ7HqEEGfkZsnuZ41YScbAMU7myJ1spr4nodTUmMzrKy254U1iwCN7aMxMLxhxsdWWf2E83FMtW5MZZJ3cY",
  "key5": "2Fc2D83ggCGbGg3K6SpHrZD2nRANc3RnRxncfGHgQ1j4m9s8cA4kxmUiKc2aMfggBmNrK4dANgLeiA1RBc5hyHia",
  "key6": "4KDfjKmjhkuAG7My5EGQid42x1p41UcJemnzraSVQqvFRDdL5Y2ukTgNoR1cX8kd57W1mcuJTKv6SXqVd9cZSCXA",
  "key7": "5uLhqBZL25NnXebV2Lkqe68kj9kp5KSVWZu6rbzCYMMXZe7SLvNTT4Rup3Gs4yzmxCFoKwa53pJ4YyctJV94fCnu",
  "key8": "5N7kpr8CHasa5iUqdnJz9V2CVf6Vh6GCwa8jcbw9hWoVszPDzUFLCY8uSkEcEmEe2XbHHeykyaa7grhV8g8Sqh4N",
  "key9": "5y7JxtkWu64sFQyKv7neBc3QjYi5Qcfwz62kpFD2ZpCU5X1854YAbgLXsJe2Q6U3XATPFfvxk4ZENqEtwZekqo9p",
  "key10": "2HaM8oPVwsHNBgCj4vjeUhqnPUnhmvbngHyKfRGCFP8XUqDm34DQqUxoqCSxbKP3ueZbNzqDFQmaNL1exCVc2jgg",
  "key11": "JwodPGWFeF4eEpyNn94ACxEZQojii65L1cthBC6hN2C2yX55qm318t37D1UQZZLrwVu8Yh1qxu53xLcqcQFFMoX",
  "key12": "246q5f7XUp7VoRPdCHTrFqYmq3tqCtJmdmQJomxZ61M9gwTCZNzVp3bb1Q2BQMijTeeTGBaqPYSSVinqfMqR2f6C",
  "key13": "DdQrSBoi3mBtx2ZdMxPqUGfT6RmqSYve2oyFZqMLzi2y3Awyr8bE2g1RtzeCkaA7HVrwXvqzAAZPhGpvt4k8xjG",
  "key14": "2bpq6DbXg3XbuyUXewgmcUWSq7jmoeMPDnNZeyRamSM1jh48yN6S9GbYA5YfZymbX5UycmtiSaqUod9J9koA1o6s",
  "key15": "61NruvGmaBLZJkfL3hKAzFUkpYV3jEcw1BGvFACriB9zSKBmg3jeSwjQbWvwTNEUur9wp8dN7DLx7YZXdmsq4Rs8",
  "key16": "HuNdjqC49HEmGmZdUcvgMKr99bnGQGpqsGAYYQQL2ERgGZokYyZE2okYkAQ7RsToMvfPE5vNguxTNU4aDHwGiyK",
  "key17": "5kTaV3S1WrquzE4soq5XWi3Q1hdua9w7JV2pZ3ZXQg3jA7yLJPeFTvLQauQMAQzEeDyV8t6Lv3pPVn3DkyhPjMNU",
  "key18": "vZcdQdn1syTA8shDypCr53QhnHfMbF4nNbjWN6MjpeS9HdCuhqK77Re7g2VXdYtBaRd7nnNHyeXty6NfUfRG5Z5",
  "key19": "4eJ9NDrmWhphp5mhacoxsyTHDy8P83SG6uCnXTF6Ez1LsLkizUmuimoxCLsvYiHyy58vhouwN2BDQ57xq2iJJjX1",
  "key20": "5Svb54RwrqbgdgqC4BZYtF3q8av78VCUnfkHfeSck952YB7mVHRN4EpnD26CEtfcJiL9z8aT7AM51ndH4ep7yG43",
  "key21": "4GY88ZeQWCD2nmk9J6SdWnJwzYcypxZo8S2Mn3YbBPUF627s813R5PhLsUsHUGgcFDpE2NzMNWyLkZRdryLkDK4E",
  "key22": "2BniVgXy1fh4HFNKrrrRNrZ9ksWgUecKG4vNyzU4s7WyMjXf9LXwWdQseBsSYsxygjUHwZCbqsJGF35BLFUo9Vd6",
  "key23": "48SgUw9opABpFvyjrUDr4HBzgyfTkWLerVevprP4n5TTqJcMikhprFZbArckW9EGUaExD5xH6yT28W6x6VzdWox9",
  "key24": "54EY15zvWUMMKhn8vbgJdxD3ZDRUdnfZhq5A6vh6cTa6EqYYYXHnnBcKAnNksW8ST3F2K92qKPDefNnA252r79CC",
  "key25": "2wUJ9og1QAraNEiDCyDAhSJJHSgZDWLfJk7z4ffrAGfHjKovHQ3JwjACxkCBva1o8dgKfZJ5yFG3LzQzV13t2AJE",
  "key26": "4UtRCC7ZdzG4dJGssuSe6yV7KAkzd2CrPeZhS1QFsmsWKCDo34RP2gXcUHBWB93MgZZTestohLex44nPBM77AASB",
  "key27": "6zJdADGaSsV26ES1rqc1fxxPqRKDQ413WKuSEYhmG8jPn1bjHhnEqkPECJD2Z8isioKFesSgHFGAZHto16CTRSK",
  "key28": "5bVMVJQSX26Bj1NgYsPGj8ix1oNXy7f6LE8eyLD613ixLBcNcvrA7C5DSrxNKcgZNtDFYXJPdawUU86fDfEyEZRH",
  "key29": "4rEzona6GGYP3x4UHZPV13xvaWWQ8aNVSdSNRXt1csAuZroMcV3Zy4Ny1scT7TmD9Beump2ZfomMLBrivkud2KCS"
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
