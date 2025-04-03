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
    "KxpbmSRZYaZ3RDKkLJH8Lg2XTYvS2eAqcDcCCapa6i6PT6vgZbyyBUtCkUXcbX1uGLeGkyJnBZ3gYuZUgUNofJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nySHcvovFGWsvPq2N1puXEAkTu2hcXokqyrH1pSG1jteTfXRDwygkWLhcxL2u3QDpq7nDCVS2vzWL8Ftfq1q7BQ",
  "key1": "4QD16U9HiqCfm68vsk3ES1TzDeAWWcX1bNmAbGffwDYQbkMAgxjB55TJKS7YR8T6HifXrpB8SFVB3xooTpqyXA1S",
  "key2": "S3bbNUceFF9htohYyGPf6BaApHxbpGsGhMtNu1ncBdRxBTFj5c96Gzx8L9qPLWR9oRqZza17rdYLpUS6533nggj",
  "key3": "8tYRf7TEoVvU41xAw1n4G5Bh5prBn8H1hbc3yEGZkUBrnio8PmLxUvzo7ZRCt5YznSJGustMEWiijNyHu9mXPNw",
  "key4": "4RTPueaXKBTEeSuYc5Mebgku4MhBaMapp6EoKRNaumfCJ4vGtLqS9KKT7hMPTnUnrVdmvAZfDSrs7GdR58XG6kWM",
  "key5": "3GCSEqgQWdEzV5vPa7DrmaBKjF7uQq6AL66C54XhDDRScQbmr7LwrxzQzhSPs8AA3vGBuEX6Q3sSQQtedPtW43sV",
  "key6": "2GbZGAJ3eqXpFVHhnKygPDuJZKRfGV1VQzZMBByMHkh5cLZFz598T94BP1Hz8oDLRZfrLL3aEYpjUV3v1aGsYC4G",
  "key7": "5tajkrAqYtHoyrfvoVNE1AX5dD5oVGMqEuRT4s1PQMC4K8dPcu5VfsWFrZyVCVTDn5VsefWvXQaR8hxAWeM5Cnt",
  "key8": "XVqggoYuoXsRtD2m9aGxGFS5BbHpEcCHPocCd8aM7Up3EoeqXBUtxk2c1NG2qV8WVb7gFJAFcXXyKFAwEiXsFgu",
  "key9": "5u6MoSR1hoZ22UPS1EoRJURtJfj4RYusJyJ6rGBxyUNwjmviq8bwozjHm6sfTqwSy9dhknvd364o6BfHwU27nXdp",
  "key10": "5osEhF3psysQiQaASzADwfAMG5KpyaZd3y7QSt4FwgGZBAkkY355YbMSTgWSBtQjWaHaYhmYQKvUTniPzopycWW7",
  "key11": "4WbQMgdfe8rZm2UoL14Hu6MuFhQbLp6v8fAD6H6qDqV8N4dYTfEvhKAvniQMY73N1DvJe99G4uSKvv5QtfWSZPxh",
  "key12": "5onTeAWAktQQPMQUNGxRvXxXakmQ76tyh4HkUZjQwx9FfMHUgZXNmkWp8nZceS8x7FQY96ak6wRSxEhtqpazC8EQ",
  "key13": "ERyHAZ7EeZQ9VAXGyFquyf4q28d1v1mdrVzsxmEwGaD1WPaeFoUVZ27TUWeJsfEZ4i6GArHLRiT5kEQDwVTE2ab",
  "key14": "4kXpueEtTr5E3fiEjKoo5tPNFTPBCzXmrUuo4cVEvokZfcmmGeKQ6Zn4seCiDQnfkBngJzuM9y3JRawTjeaohnAP",
  "key15": "HPJkgGEpHMBFYVc1Q4p9FwVZHcrbr1qr5myLcBWA7vJNJDNGkXMzNT3t8uww89TBzg3sdvgB4wVRfswYnUUS5Pz",
  "key16": "5NnpFYndYoaLXJgJgAX5keLQDTg198La2RytMi29bUkrKRfrcdAUJozbVQUW4sJVsGJTpXb8Jo2fGhp6Xi71QzvL",
  "key17": "29wUQeBUfQgxuuwUav3BRjxXEKwqVtWGXPMBMUatJHb2yCu5uRo958CEdTwBXL8WMcUPcLoKGJ9hJgSZZ19gWyZn",
  "key18": "SVy3kqVAaXhUwobDJkwoK3ASkd98nKcNiPh3GVcDQMrddAQiZBoqrsDn4TfaZ5kEYpnht73dbsag5EdfLTLgnU5",
  "key19": "5FWXc5Vm3qc9rycNbhH63oqynxh1tRHJKp8EMVpQWW9ZPDyHUfjWdj2j4TwNsGCZTriZGzT4jfWCG4vUgjViBY48",
  "key20": "bY95jVEaVsiymZ1AeNWztqJUsq7Bm5kbUQCKAf4SFPitrjBYSnA5AvgmHmucjQS9uTNCXoh2h2xjGrX7KAJTcnE",
  "key21": "4xAtyvLepzVpdmEM9i6Lv85t4PN3ctv2xTAiKthEnw4Yxe6rd9hQZvcB6kVos9wac7pynfyfrRGhNAXd5gUTmXvb",
  "key22": "6GzzgJYXeGQDKVP9cvNCsV4sxoqVxae1Br6xU3dQjEcZwXYLxvxYPec5kqTG2gFYSuqssexU8YC5C2oNCc6NcYj",
  "key23": "2oUXvQmV839mWsQp226Gds3djkb61iNQ8Xo8d9iKNayJjsVUQtaxE9yYAe3EDtRkT3efrPCrQJPFVCxyZ3YqQgca",
  "key24": "3QeXg6BBpZd6VZcR9ydH7T5rCXTjJUU8e49qbij9LxRm8UcF1byWosGn6yLPJDcYmdsaFv3ANmMF6kJ21q6upuRL",
  "key25": "5jSNFFSJ75tZFowPhTy27j26gTLSnDeovGnhqfqQJok9XVvhvpwB47uyBhddZQsyiUSCEPmg4PHYX5ocgEBRtP4Z",
  "key26": "2D7fdZNufCZBSHZxF1FchrQQtkmYD2fwew4KMXNJbbJyzzN9s2CT4ULthKPT3zhowvezfUHmy8tFc5vQ1NFjvLTZ",
  "key27": "gLWXeapSFB2ZPDCoLezPiLc7iwb5M8j9AYgRv6gDm63myRM3hneBpJPe4wD4Ab1yZboVu2a3RabhVFxDLUAxpoH",
  "key28": "5YZ97Cyve9ijPkTqaQemB9dG2j4TWGsV1419KsRFWgV9xCNY5ZNLxyxJfKUfB1jQ1Qg2KH8jBWSAgdvTMDfjCGZM",
  "key29": "4NkrtPeyY7voRQZ2gKNz9PK1F5n7pAxswYqdMNXY4diGZpAMakngyYmiPP74bv1ctnPVSWz9PhugcUXuTN7MwVPN",
  "key30": "33M4z46vk2YYMd5NqP4ctjBv4FK269QDUDzwhJdmm2ziPf1oKVSx9YBCPk5ckq1yTHHTJ5xATmGQBVGMwRY5tZNY",
  "key31": "jgbAnEhdS5vPsmRVZrNeX4UsGUnx3TGwaYgrKLAXpti7SoggKWD7yj9zQSowy6WBktJoqEeSVzk5WVJK8soVF6Y",
  "key32": "2xfqWHCYDMqE8iareBJJPjVYwZqvRupXsxBjtGwNiUbehu2YhsNCEYM8X6tStgL1d9wSuDQMRnrC1dSWETZLJT6D",
  "key33": "2BwEk7F2Fx81fWwf6TeGUFssvFCNavkfiuLR5Bg1Xh27Y3yCn9VumGFoVz737dFPpkSsfcpoo5VwzTcc49cjoAcA",
  "key34": "4vdSfftDRvpgfkcmUfnLVsGkyUxM1oSjtrtKEvKtw1BixGTpJdGheKYo6Va57oDneRPDJx8GtmcqLN2bPB57nLXo",
  "key35": "3Q7Q8GdQXgPbHQ8du5SWwotCanJhuZ5R8j4a6miQiJVFqmxYFWahWLqRpSF1mVQhmwNTHaEQx8MmsXxz91bKbhLA"
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
