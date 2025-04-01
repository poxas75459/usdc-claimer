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
    "4RiDQNVfRy2XrfdokDRZwTsyTKH41TXoVdi2nYAd9d9shaWCQBgCiVtp7RjjrMq7KcHqXPU1V2kWFUETNbCbtE1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xyit62jXkqAM6fCpFEVrGXp2mLjS8eiwZZhHWr4gqbm4sKpWYocdsyLNxkdf1cFxo5zJgR9uLMRtikwGpz2yBgi",
  "key1": "3zg1dU4dbTLs4FXvuMCM7UxPLYJSvUMgPRevFFKcpKKZitWUU1VgjYeLJnswR9w2Tsx12wtH1MwYjU2U1wXyCS8K",
  "key2": "5iDmz4yi5XXWxquhiT1vyLei65FcVFv3ht4kLe93uiqNqFyECaWFyQiN7NjoomHbFwEiiDwZR8A1kSQCqopckeUR",
  "key3": "3nGKXeCAmKGksEUXprnrDbABebcWUS2ruSJHHCYBJ5uihviZE2riHgjtPHpi14PPtBLPBCThFbG3pSvKUdQCyK1R",
  "key4": "3PGdM3pmBnYXRx1jjBKsPTxP3FTejubNKoPwkVt49UVnzMr6s8Hh4nWYjqc6cguUpzN17Dw4wmFTYRCfwLbt77Fv",
  "key5": "2kfsEHUoYGxTKRjxAiy2TtLkBhgUf2KPJJvBZHE8RjFr6o1MtzbVQeQoGZxaXXx4tYY52qzRPBeEkCKoeLjWM3At",
  "key6": "aWnwyMqKRbJHSzbPi3aKALvsGCx5pua9Yn8pgJPqrUzs6Rzz4A8C6eZMWi4HRTm15yCaPL6BR8obdwcKZsiWozt",
  "key7": "4N8AKyuJiukvJZqUp17wvLWUvyTk4R6mHNqqUUrheEC3DJcMLip5GrL2T666RCo9GdszLZNt16cDwFGVVvrG4vnD",
  "key8": "2vxZSjeJZhSvg5rrdCVk45WyCzmUYHJjmGJKAdJtvVK3a37Sv6KJdddUJJS3yBqE4MjT2HtbMBLXA8bxZD1JrBVi",
  "key9": "3pomSYJtqvJuBri8ayEtA2J6BDjoNJAm3z73tHqMGhtnRtFTSXLkuS63QRakihEgQi6v11EyUXPxWbvPaBTtyTTQ",
  "key10": "3s3u68oYSM6ULYsyg4ZrNifQkU1zRPjTKwCQsybKtqHoEvXMxEf36Xfaqz8YjTBwTZzRbuFYPZNKrniiiYPRHb33",
  "key11": "45L49h8BJEGmrTmWnesgE2bNRMz7GwWewgkT8JRwPuowjGqqWQy6cfU23wYpPKR2Ny7zf9n39N1hr64eRAEmvZCB",
  "key12": "2iy7X9vef5uVfBfvNkLu2ixcsxFuPiGKbSTZpBuoEs4Zm5cq3fqwr6HTeAawcHHHmiN4nDERht84KKnXn8ByxaRX",
  "key13": "2iHuuxQtoQrKszdwt9EaXTPUUsYAerdV7yPXtACyxqzop3U6xS6QFVYZpH34zMPkKaZG5wNZSP9xzZQXDZaPwC7V",
  "key14": "43otVajYP8ETsxJXJe8Ac12g4bAMWosGjyAD8vya42gF1z428ucyZa6xT8xCSoptrfnLHsh921cGwssh9A8mgFfS",
  "key15": "3SD56oCus2kubyu4B59kf1yeECHdHUAVedV8FCeq8979xuBtqDrhKA3FndAMqqejtUQYrSb4EtP3uH2MAyCrtQ1W",
  "key16": "4qEjYZpmbYVp6eoiXQ5q9WjPmqQeQXJvi57YZwFakHcnuh412xFGdhX3q1GX7AjammU3zCyrW2g7radW9xsKDaAc",
  "key17": "25KS3h91sSn5fkzzc3VwfzVqMfAB7DbQSLbp5D7DJLQPUpcmrrWbKYTYXK8oNDGXEiLeUtFAbdtU8k1W3kbCsjg9",
  "key18": "3jeRB6Z2DCWTWqshkLdgnmR6snCNSn5GmXHdp3aq4E6mmtCpVFXTUnmzww8FuYZg6S5WMr1nBkJz77ti4RVNPvhr",
  "key19": "46pStwLKKPayzfBWWG45svPcv5aP8Fhdeey5cUidDooPniSfFkhSnsyzoNyb6oDNiyB1MuT63K5QGgFcu9riFuoJ",
  "key20": "3p7QcnNZ2yKWpgZf1trczkxMKi42CBMcMwD6Tj8bM6WPRTqeUvDycnC58uTEbVjoLMc96JZs8BicwMe3CBpnBjVT",
  "key21": "3Tbb3oifF4EWnBJP7DK9q2J29ycqL1KeKdDJzyZygg8Ko647r7yerv1DamFu5xJNEpDoW9BppDVd6Snmd1uikuhA",
  "key22": "5vfiEDGhTg1kNwYDXtHMP6vxPCMLhNCkJMFrJRGGBwaxanf1kBiXCt3VueEJbymuyh9oUuwrsGGFRaxf2LVYRSAG",
  "key23": "4CgXNFQhvrJ3wNtEbRCtNceTSYjjs2ick27PPJ6S9n1x8gduwK6Vi4SAeJ5kxsvYthLuVBzztnJ1JwVrFQtc82Ls",
  "key24": "3JaXaPfUyhXpirrTfKh4krGTaSV3DrNvCRbkT3vAH7gY3SDzJtVPMTX2E82fYnNHCUuohsdMPDHJWHzu2GmYAs2C",
  "key25": "5umtoqXDeuqtBWo58HTZ3mt8akVBR2o8v3JoYWam3JcTpBoS1XpptgwH2zUaVdxpgkbSPb8ewDS5X4A349pjzXs9",
  "key26": "KNuVEbq61iAQp2kMWvRN4W4rgR5iqab1rtsHVm4gM2SC95yeZopSWnptv9VywxAva68bMDDqvv3HvMJeE5VYnTc"
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
