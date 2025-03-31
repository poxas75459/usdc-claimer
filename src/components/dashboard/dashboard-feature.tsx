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
    "5sirXPbKhJSjkVE1MqGTV4UxhvBggzWm4PM6u7pabwKycumJa8xHp1Aq181Fg55JUXFYcPdPDueX8etv7pnM4RPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Dvds82Y7UBnX2vaoe1uanU1Vd5DkeoLeQx8aaj5mf1MnGhyCTdWZ99UbQg6wHmvn1S6RN16ygToakWKc2XKHk3",
  "key1": "2gBjS8oBKYe5cWnm8Q1zZCKraC347dw8VDcw9Ni7mYAHAGPMe4fitWaxjUebRUCyxhRnzXqys1D46ZHLJu1L749f",
  "key2": "5Evg5VtTmCGRVMdGkUzH4n9DiiBNHMBL1jjj6BXQzRdcAdwek8ovfb1RM9G2oQDRYDFboRQYW3K1KbBHeDSWdWCJ",
  "key3": "2mQP4KgfJAYFpfApy1wdVwZnWpCs4KZ4VP83gMvfZQSjiwFThSgD38FH7uMMCLbeLD6y2XkgVEXYrybiFqU948L7",
  "key4": "5hdBCqkSqvGcJ5zPxdB3Wwp9DTm1dmmQm2HFmmvvW5qugMrionCuignQ4Auncz2p8as7KuZ1FbTuGwG29RSHV6Go",
  "key5": "2Revk3nXwmNCZBqe3ZjWPc68NtZTztyCb5FtuAE3KpuHvhabcYMYRwgUsQu83B6f8yUKPxwK1z5nQTf6BNdW7RvV",
  "key6": "5k4c9jW8pUtWwP94Jixt1sE4H71hJGVgwjpRscd4RjjwDX2cMHe9dmp4SDHYmb3dBxbz61fKbDbQHzgD8shvrX9S",
  "key7": "2u3nmSJ4P2s59FhpST7JjLahtsunkFnKUnZYPBRzznR5Asm4PSDMsJojtuRWwQcZzEBzqB5vTiboWmXrAdfE5jg6",
  "key8": "2QSRGk6DKchfw3ULEH8yLB6Z2ptA3UJ5fht5qoERo8CEX4kFJq7j1Y7z6hLxRAf2xbu7nFJ8aiPK1rL8ErYYk5J",
  "key9": "TC2vT67w6PJtUegQpyADigpaWC4frcVxsVAw7YHkR8StVLF3UKaDuBnLaWb1B2iEMhLXrmv27EraSbcmG5EFVkV",
  "key10": "fzir2EgQccHP5eLN8tY6nb3wadLCXgKVkpbVijsxyrZySDqPuisxcEU3N1tyMNH63eahw8kaKw7DgKpiqqAhVqN",
  "key11": "4GPc1KnS8zLvfcScKrcDdECJLBsaat8KrwoV3cuMSQWVZqjEHDgyDpCnL7ynUN95FzsQm6AP8ZNk8yHbDrEBmZz2",
  "key12": "5LAGBUnMy9zsrdXPZitzjDwGgPLNYwnvguPE5LdSx4KH3M2BTLYaxz5CyfmNx93KJa4vG4L6aKky149fftFs7NVy",
  "key13": "4Lqe5Zj7YV4RuyNc3xnAFw33UoEFJPhzFvCMWrCS89x3JRmWKezMsA3E2kgEtrin2VSSRePFHEqVK86GcLRc6egC",
  "key14": "48YicsNARM6g8YcSQ7yj8bnDsY7XoMVcwD7de23kq8m35SmAsF2TUrWNGDk82QgyBa8ZWh1vpiYJsYpbQzmXE3JQ",
  "key15": "5Gpy3stf5RnmwEHHBcKQDJPCkBL9oDdmARfH1ChmzjjPa9SFaHjk9oe1a8dYzaog4rGeuD3ZTkvqAzUxGTWM6jB",
  "key16": "5MpaeKYqzqxkzHKm1696YThJNGD8MPD2Yt1G2Hp4VA8bbF3moqN5dSLkApdjA7vRffzrcix8RzXZREr6SmWFL3Gq",
  "key17": "2ii4tWUKs65M2GnB4evp96i6FTk3cgU495s1K1Dd2ww2Lg6eWTiXDdiYtsURtsX9pg8J8EUAv8DD3kjsJt3m1HJV",
  "key18": "5D7JjDsdVswzZtAT3dNrb825uB1Dp3peJPTx5FjY3hsaTKtVy48qcxHBoTNcvsKR5YfbYjnXTjVCdDmVMzWqhBwh",
  "key19": "2u7kTvLDtQPvWQaeHNGP7dZsURt5g95Kb7u2bb1NyaTmKWgRXXMEB33uEiiWfMve7XWeD979oyEGidxDABLaEw8d",
  "key20": "26WRpJ5ciExCDHcufAbQBV2mgeRjdVAF4ccXrA3qARrw6TLq2KL5TftEed6QyeukZwDDXu7cd6t7xjNmMpg23DLi",
  "key21": "4daZfAo2uCsHWgTx8LqYPTEhsUAQEoGm8BVKzV8Pi7tgndXgLu2KUbPgwdDrwAPRnw9o2XWorPwspE8o1PDuX1w1",
  "key22": "m3VXYugSqdNUAJGqioxbA5qjuEqLmiL7C3cgZUZiiAHkPPXxZ2hwsMSQMo6GmRnBP82ybERPebzXcy5dvDFC1B6",
  "key23": "5S8K8pfHTCWcEz6CFoDeya26e9N2m1VKac3zGJetKRS9qQWm6gTZnE7W7WNyYByymhv9NsASrpeQpzcDRN9UVAn1",
  "key24": "2ZwvLoDM9DwwWYVrgkwyfGfJP1yc47i1yMVwkqdT6GyUFucd2eoNuQZEfLtrFa1iK7Z6vZxchf7w5dFD1gv1rVGT",
  "key25": "3mwa8NvcN37nhPSCzuGUUCumgir75ZpU6tuVFhZhccDhEAeYCHskzUNwpCqFPrCyyJr3hETJsVXHfJGNtNRpTT6U",
  "key26": "48kJW3Gnr3gkVBUQWfkHS1yAg5PqddE2VMFUPkr9o8WqfWyMeJpeFQdxaxFMCgCdAk5Nd3J6HT7geVBVXaerX2sN",
  "key27": "48u4w8LcLWzJ76Hfg1SoHiPEE8Mw1q2rQ4btiDQoWiBt8gYgtYHBwbqBQ28xU2qEjSKDYKgmFMbCctLZSJtdvbt7",
  "key28": "2UXYZgV5QpFejMJgPYk9RmXuvAHC9xYKcbdSwtZpMsNEJTEVFhNposcwZ3FC8WmsD7twcmM6ef6WUvtv7Amu5GFP",
  "key29": "59tyRpWdWg6zP91f69ikZLrtN7ehYTS16EveQaKoBxJQLQvxbNECSQ3RwiP4gckzRLVrEagyvpVyCmKKfUByo1SF",
  "key30": "Yn6CPJE5U39rnG7PcER4syeS7NyZkWEXjhj3sj2PqAskV2eoaZHwKhfDroX2FXRgSg1wphwgyoweN9h65gG4nRD",
  "key31": "ZXi1BHJZFVWZSkxNcFMfDcRjZcG2iWL9oUUi34MmBNdubcAYBrpAfabLpsUnp6DQ4uU4MVxvhyz6yUzTteLYQy7"
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
