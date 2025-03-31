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
    "49JWCPjpMwCK2xLNLnX2ePvjrR1ykeQRjEfHwomb5srfdFRSBJY7x6kENh417tiSfKpxuLv2UBT1vKyShUMuE3vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kEo8FRyfiPYbwLdWKf2nApgGqEpNohYAVfgZZ8BrW3q1ixfyNiiaeVaA9rzjPby7NadJt9sSJVSguR7kAVQMLG9",
  "key1": "5uUYxqUUTqosVa5nUPqy4Wm9TvS2dnNsBFfmwhBp3q6pBAznb2s5mBxAQmrspMMqt6WnyqGHVg42PbD8hVx13uW4",
  "key2": "FqYcyEyDwZQxFCroCLSsagxCZfYNKEZ43wXVD8rxxMNYDBpsQPTVvdrhHx1VdzqLSB3R2dAU8NcQYXXsVoefFWK",
  "key3": "4KdoTib9LpKSY9UYEAJc4aQzpXbTJ4js6NPMvvHMXTptZTtj46MtYq9w25y3yS9tZHxeCrLGgtu9siH3U2C8ApZ4",
  "key4": "4mXTqE2RUfhN2DamF7rZtQwABbjsE183LCUzXNPrECsf8TvSa8kHQTj2roeoMWPDqfb5zLT2SHbGJyi83AgBa9S1",
  "key5": "2rXuqoTChWPQvgGcHR4mwyCdZbJ78ar3ZLrFzAucta7D7YRwRNCcc59qfgzi76sU7nUsSUSPgiiBt51WzCjB3qJe",
  "key6": "587YrGMsNWnqv2crDekTxniyNQnzt3SLLWBEGLFrS7FkhnqkhTsXKkVJL4XD75TYGdvtYhT4E81nSd3DC1diAsHf",
  "key7": "XB2iWSiiW6Fs6h3GKaUypWiNUpDx8h8r7XwEnnzeuVk9cSjzhGCAwbE9uGquXEM4f5vQKH2KfjNLKCjLj2nLJUe",
  "key8": "2zv852BZovkFvkBXWc8tcUAayrPvQegiT9VbyBJF6kLVK5oUewPV9ZsjfVKLr32sRfzdwd6pFgwUdyfLdWroiJAE",
  "key9": "5cKWk7ToyFs9Xh8167QbfDeRdfo95svGLE8GKKLPRrY35JMNQgJtfvZX1ZqsHFMDryPt2iefR6y2NVt35czkjBrC",
  "key10": "3RsihYcQn5ni1vzd8X4QHLkddmcdvsPhbLE83X2BPHcDLZUfEV1PqjqKLcoZPew2rjHU5CbJK66nVZt6qEoWrWht",
  "key11": "4tfbKTerB93APmbtepaDF6yKtioVT1R6AoHvCVDbirFZceqTJu3Js2W3rbu5FqyZTUrDmJqZykPm1P4hhgHFUcyu",
  "key12": "2bZAs1FCkNfkWK35Hgh441NapwNRhY4vhzgE7kzhEQ6M443oJQGWj4jxMUecmu9j2YYco1SHr5zJ4H3KdUhLqNp9",
  "key13": "JYB9RbKetGVMA55q3SbN64CmTVrnogNGZCUwrGk4iVfSYGSResyPH8GG6XPVqMwn7HCpU4LuPJcjgyQD2oz4h1F",
  "key14": "Qox2upVub1dK6gRJDt51keCLnejdmTZNTsXAKADmsHHtgd4QPg6B4e98Mza6At9Bh9JaJLA2ZagjuEj4sfV2CPf",
  "key15": "5m52gZZHTbEfPDL2XrPduUtK7YH6mGsucjMcLN7SFVju1k92sLYmW7USgWrLtLRjy2raDM5qH2fHPHuCfoEmWxQD",
  "key16": "vqCDGfz6wygsAC3ngdvmyDsDa3x8XCBQ7t2nUm4FW6pRs7EMynsGmM1NKZWGpqytvuk7upfmV9cpVANVdH7Huvs",
  "key17": "2Xtod3NMEUNrrXE2LJ1BB9V7Z5X6bvJ9Da1K2xh19ciDM3iScbwuueBJFmDzR4w13m2Ww3SEtgbuKSUkgTNWVqyP",
  "key18": "4jFa6K4MzMAo5tuQnnTKmJVkYYCDdoPhHLCE4uV1NKgzX16BBTeWsJRhgp7rKU2K4jy9LUgsmhTEDnr4gGhqPFtU",
  "key19": "4Ta3fV5Zn78FXqH7ceHqxEPePHoug28ieKGAcwUiuHcFF6kdZEvGX7yJkfteVWwyZp28vHP1MoLEjYtQSKXqexYh",
  "key20": "4eNmBu688YNa757xET7iDP5FAL1tP92QxEo2J4vzY3otQUhHgBV8Wb2CocJxAuqNvjRQ2XDfRHWnKy2jNLBKFq68",
  "key21": "5LywXVFhNYNms1c48z7ZzohPzTAVEAHG9o5LWDdHCbz8JnbBFMvVMZ27uaCojf5WFtoZyqxXc4bF8GGdAEtWn8j7",
  "key22": "3dVRTnWijgfC3qJr5RZua5yX98CBcDkJpQFTqYket2MMAa66sCYFvXPAReBHmUaNNhvoHzZr1nfzLpzkxJJDyHHW",
  "key23": "2GQ5hVpkF98kPwvvqA2PWXZPRyjaFN3CvNVvm1LPcjiw4V3qTQX9FCgqSpXdJ1wsQwUNhi1asug6j2fJjPVgMyxy",
  "key24": "UiRQMEu5STwJ6Ag6UvsWF7ZKuvjtSfSz6XpCuUfoXQ1BNLvVy9TR68Fx6dhPuEoGAJXELDcqwBpU8MZYwzT5nrh",
  "key25": "3Wg74nYqR3QBPXFfQswWwExeC1LeKStrs3ri12nmWfUTN6bvPh12XWUrD2oteXLHSfqJq9gwyAZGxghL5hrjkcqH",
  "key26": "61akFSWnyRadfmmVN3h8T5PzBLLzJQ5FGWazR3KFcsSqQTJtx787xegpEjKNmFEY8c9mL289qPDHaRLxHedvSadQ",
  "key27": "2thaPbPBquYkb4WTrzqJhvyV6Mr5dhisVQfb4VeKYTvDViDRXejdACkVm9nK69tPhJ15ji7APrVRCBJg3gteWZzy",
  "key28": "2qnTpLfrY67wbAjSjcejwE5hnqminhAmjjepAyyhAGfAt1CfE6qdBLLdGBwKya8rnRgcLPY84YQw1Um8SDsfGYKG",
  "key29": "3y2VUbsFmjUiuDzzsUAGMjzNyW9sx5uCNW8acyMoSfsyzJtLxhAQx8MYgSWxiaQbFWoyzPZKZqxrnKFAe7gshoTn",
  "key30": "5Vbdks61vgSkfyipeefrqvaqduzao2Nu4ZrRNC2VrUkqf6MQx7ifxYWnZZCTnytUmShBES3N6Hqkfgp91oUgcHp1",
  "key31": "5s26nzYYHT4g5z82vdLeLr2vBstfeiem2qKJCuXUNUBKU9fxuDaEJcxDUuRX36RbWFjPA8B4VGwbZynWGxGNeGyo",
  "key32": "2RKppoNSCe8ZmDGGw9vSNe4P42KUxB398onZY3QU8b5Ksgx9JwprdcGqB3cn6niEiscnLLeYyoLcC1xN54v3C76Z",
  "key33": "4GyvTYkzazi77MQGoyo19mBHZaskGSwR2kS1KFyMj9LTuDN51w92BTLSUBS9eTLC5ccUJqDbXj6Wv39JPdfKFgK3",
  "key34": "X8fuPyd2BxRnXMuz7sDeg1NuYxPSweYtUVS47wGZViBy2Uw7njnRaEuHFEhkLb3z56B3CB7UZguRyQKQdXC8sZ2",
  "key35": "28SQYN14VMnRcPPSsWCvbMfRwbREYKVGUHT1DA6tR3oSYsddTZFHvam9dNHZcvHSVDp12LsrRPdgbzs1wNpuvfVL",
  "key36": "3XFxvQGRu11e1D5ENGbAZfmmdCiquaYFY3Erb5X8J16nMquNQDGJvV3mzzUpGz7dFpT17TXALTNSHFwWwMGCr8jC"
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
