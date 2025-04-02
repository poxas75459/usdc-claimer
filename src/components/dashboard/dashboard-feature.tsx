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
    "4zqxfHX8RdeGe4YHRv8fmNeNzuyAuFWqXCYkWapv2xKaG2TBTR4DgPoTh2Bn7cTc4vCMoYnt5tgpHCvLPPEZThBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bp7gkgrmCL9zUVZd3sDWPC1Vz4gnEKBreC6C5Hj23LBMGat31B4PZuAUMmhAgsgbva4nwoKibuuDZs1SJR4dEya",
  "key1": "46giCEgYnzFu9iYTqRa7sBmXGxxheSCA6uFcEWdRcvPUKdPjXqcMtNexNgyE8DDp5usxAPT8S5GbGATnqiotPLA5",
  "key2": "3hgqZsbs8j5rxum3btdRR5KUgh1q6kudWpGHZnCNGm8xjoXVEacmx1gB1tcozUYUrG5DbCm9XgDozRtUfzpuMewd",
  "key3": "5qB824PUbjf8uYEzzv3QWTTDJCcPmv458cwjBtjcachydssV3VwRLKEXKqtVxfWBJDAoW8hYvTvat4KvLu5Uo6se",
  "key4": "3x1dyC9wBed5EBv5SyGZY1vV7HJfvqV4CGqRS1qUCZHGEUuwiXwh6tBXdHahyHEf3Tx2wFpspJp6xCoHW4zWcTvK",
  "key5": "5pnKMM85wCQYGTWxUDCCECnqBiv3soH3pozxLNochVwqLDeAVenSTxPdsY867tvqdDZaMWFsCKJ1ERn5JLW5rTAn",
  "key6": "5gf9KpwvdF48mwjcZmbTccxzUUBrgLeyapg3HUz6aWuWgRsGwMwY7rgATUny3x4ju7Ks7sXNhzmQmmQbAeT2aCeX",
  "key7": "5mU5CAALPz1QLHbB9FD3qi23v48t2ZAEmx6F5E7tw2Q4SzeRfC1dwvsZ66tPcjJZ9wT8mU99V8kiWMmpa4p9xUcb",
  "key8": "6CjXjwkabZmccZkR3PWmmNAY99xB8ao4fNrNfyfoVf1ZD83G1nEQkqHtb1CYxvw3uoYEEGuVvo2E8trMRytQY42",
  "key9": "5VwqpcKH3vkmQRSaEL2QYwwJ6iHi4tCvgA8g4iJKiDR2hhURPLogb3AAJ2H6pFNSkf1wjvKjqg2qSb7qFm6HDwoQ",
  "key10": "4eaCZCELiWxw2zLvnhYx68n78CEi7ogjaxSDSSra6f9vvmMZDUtZ2urv5nEXFxfxMdLuRLHh73SJQymK4mufVuy4",
  "key11": "3W88cU8Z7PZtHgtbuwC1ZevYAMFJL3g1ob7cr612kdPETRN37n8bskBJokZVtS3XEHbqTHQxpjvb6bwqU1wWTGM2",
  "key12": "2NbrDJMwbQLNAkV7q8zfMvbBv9ZxkfkbenJ33VPM3GtFtn3fnXy2Gm3G7yL9DyabY8RGyZFjoNCnLQAUuNwMJtvk",
  "key13": "4pvVJiyCzsKFHxtAGeJku7EKgEp4koUXnVkJsYENqjMSL1P8A96V5VHR3qg9Tk45nZoDsuCESXNsxz36M2bzmXbd",
  "key14": "3c7RsLwu93arqBA4Domkx7Vgq4XdRasxsnuY8TvCtf6S55tSzu79bmbpJTabEfisK2SfKQ546xfdczBYccQrtttv",
  "key15": "2nYdhZfLFxJq7AbGrJwyeyyBxgUAeTEPrXvfzb8xbJeTtuX7YQvu6pPxqtJJmrDTeTByiB7mwQZUtkN45cTHvmym",
  "key16": "5Xr87u8UaPerZtjhm5D8AEifCsPQiTCSNC9W7TaA48vF8gEP4iuFbvfgCQw4ApqX1fyXGf1JT1RCjcMDBRsYf1e8",
  "key17": "Kn6kw9YLNAAJHmPzJwBjjUBT1w9L8LPZTysm7LeDostw61duF3ThYjprd2E1w32c99uWWbtV35NK8xDoo4EkuEf",
  "key18": "6rM7vLXXDGsNiB6KG3Y4QDuZVsN6UfQqyDBTXcGgLuocoqUEGw36AiNDNtmvPRtKXr2wPwLUzQDUW8ps8QSNCir",
  "key19": "2DsTzu5h4SPbGz1ig12tUvCh1M8bFhCpJY3a7EcAGTxqAE4EqYCjgFvUe3J1vKMUiQXDyGwKJRWJNEcnWhbGTgPZ",
  "key20": "3gng5b15Q815zvKJvCbeS711rPSf6UbV4s4SySSjBsoUxFojQBvAerSYafTSoC4XhQh5zPshtrPFiS2gpgFugavT",
  "key21": "5BLGAsyCyq2YLAnia4ZetMYec3QWszN27i4xmxrzKU1cJF8NoVo4MHcAXU8vQUMydpHJNdc864Qj26kx3a5H3Wi",
  "key22": "3LbEUoEhP6vVsDsnPyjKt3tqHaDMsJkAfQMiKBuoBo9zaK5hjUb5bDJcGhxWguSC3ZfySHxNVLNyBg9ZyW7EHmyZ",
  "key23": "39vPNGa5G6VtAN6PyZWWdqPE7dFznnxSthK7GJhLzupSMqqFs8F1yPTtXFBtAbjusJzyTn9FasHisaxycC4XeGQd",
  "key24": "2zacPUeeVrJwhAUr4Av1KFDYNfr56WovCNcoonX4zJ5CQEdMM5NHZx2iWyRZyAzW5uSC7csSGxQ7uHqJ4oSKSqps",
  "key25": "3AkbpALmnkupRpZ6JPjFiRjoUbqQ16xw8SnPYj5PnrDq41YaEggFjbkgjtMgPgSpMTQVJYCKuHCUo6XqW1mSFqUu",
  "key26": "5QcRDdj2N9ppthgubzBk4WzPs9B9tALDjvxTbLe6fX86DYHRHbEUjzrebV2y6BP2J1DWAUvK5aREeyZa29bhzuKr"
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
