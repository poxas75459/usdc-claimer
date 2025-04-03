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
    "3ZppZcdLY2w3DiqxzJdkjpFsBezcVXYWVeZhEqFwBcSKkf6FayGuPEHytMmCxcNrAJbNivWc4pvtWLWP1Jka8e7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fpQFQXcuxwXXK1AFXfL66hpvxs7XK9vtSQ2g8g7ojPXMzd34XtfjjzWUaPjZQpcpoiwcKyDZJQ8ecwoCrR7VwxF",
  "key1": "2bnYTcttaQCXA6ZkULhWoC9y44fVFT82YpihJiNYdG415RTTZVLqD8S972njqXWqUoKy5UNNHziTPrgn439JXCvE",
  "key2": "owc3MvXo6GhWf6e25KmbcxYJKbeMbkwQP82mjVzroaTz6UGhKnKy4WbYKi1oQszc57ymNAGGmxGjB4UpeBmcEEz",
  "key3": "38R19BMmW4Ceed26h8sNwj6yGTnvU9rNBUG4Y9svhsCkE6oDQPNrnPT6ddHpn91LyShYZk3zP8HWXJ9uY3p62NBm",
  "key4": "44s26u8hsesewtxyDGP5Xa5wqEanPqUFYpCCeNN33dw5ZECiGAx44UfL2VzSpBxjLuaDJw3A4iLocRP6D8VcTGNH",
  "key5": "22ffQCWi9NFxAGmUXpE11cHoG7Pmd526H6vWbiTJNHqyoyaRm9m6uJMJW7wZ892qE49h95qP8KtYoZQbygTVcicM",
  "key6": "B6QR2WgzD7jtqPdjwq42dA2fQSZjokVHXvY8qUk9eVCY6yg2Brn7dtwnWjzGh8z716SQq2pHVvdVPZLB9H6MwN7",
  "key7": "2e6QZEDwELRPVoadG824N5TNhiucejuYJLac2pZiyFBrUidK9iv2xiGrKai8vujhvwRYb1SMxyTs3QfmHP9MCwm5",
  "key8": "59e64pzj7iPnTgetpD8bifNnMwcLjGHE556Mgz1KzMbsrtMYZYsvDYcAvzqQgRXqZLJkFwbmvF21yjNruyGWk5Qi",
  "key9": "j3DsH9f2P5pq4wo17UBNJouXxGa36aRk4JQL7hzuYnGKoU7WG9ND5FJur1mmgk3NuoVdBucfbDXCvvaJ4k2F2Tg",
  "key10": "Lryc2NBYVx6wYrDVPdwMy7mH1pQsgwDizcAYM3DLKHPowXQshSYVVKXPBYRCSQujvdNYdrMRfjdZoUqhXkfJnLx",
  "key11": "65GMkRocRsKpLex9uxHFXMfHDnU1WifaD3TqkTqFVJCzj19YY9nGe1xjecUFQSmvWwxet2jckVbX7ajKafQkb8zo",
  "key12": "2hieJBucqK1qzaVKbJrWwyEyJ9R1dWaEh3rry3BvinnHM74UdFSmCwnWLPNV6PYbLfrCVBwz8wev8iwhHNUSTPDC",
  "key13": "35eHpdmenr41pUQ8B9v563KHCuGzKmn48X6nwNJFbHtd2JrAEpx71M5TUPiFbJCY71FPFL7sk1BYXPcCnrFGYD2k",
  "key14": "9t21T4JKo7gxcZQXTxHBqXAKAbPaHsytuaEbrJyc6zUrKoq3GqfMjq8w17C4jotNUdM8XC976TzXUzzkPHyzkbE",
  "key15": "2QokcgSrrVfoXLLUC71wmE8v84fpgiW6nfUQk68H5y8JWFqvj83M3yxMAq4etYjUgbHFmtWAEPs1Po2vyWjx26of",
  "key16": "3XU9uG3NRkzYFJ6f4GjrJMrpFdnGZWepu8Dzws1pZfB3UNR6ALMDPvZYdkKZKBWWTNkmq1eR8p9pWyRfutHtis6H",
  "key17": "5VECmjZbuTLUJkj3vjxaAs1hpLkeHncdkgbttrhYrmFwRP1zxsJNP9AL7zqt3nM9M2BeKJqoCVtCxLaw5L6g9dbP",
  "key18": "3ycAN1qUPoKRThrATbawwcfFn89P7Z1vPSUFGi3EpNNutfoWhM1q3CheP2dkw5sCA7hfHjZbTLh9roNdjSDLHF6C",
  "key19": "2zsb49dWhxaZ2vh6EWuEAyAzzsgDeTDEm8WiVbvU1urHxZ72xp99kKuAPAeWi97QHFXw7Cu42jCMB96BMZRtt6mS",
  "key20": "2Q5ArE1CSdmQsGmXHK1Wji9Bv5Y97e2bHSVP1u5rDegg3MWw8cQ2DihyxHc7HHF422LQLfwfroEYd62X5bTj473Z",
  "key21": "4vDhN82NdXDshWpFgBDLPeU1TzwBfTb4HfU3pbRjqfv1xcok76KVv28Gkd7qwwr5LqW8GRxUYRyns8mqSBHxt1Mz",
  "key22": "3Gc2Cnu7ZwWVVJDrzW7ayc9pkkUWnmVyUcjQjqZ52o8PwatWPF586ypZ6gDuaFCYW3fwCJV27CwTJiuxziP2uagL",
  "key23": "5BUYCybVYbN4EjMrMqS8FXFfTAjPoh2x8eV6osWS2aaPGwAuJVUFQrSKkZDeRsxCA8G58H6uiqKDCx7UHpkr8imq",
  "key24": "5k8zDLvT7kQKEZwxat4UtHCBkA9DujHxjvd8QBntwD4942qaunqkQbggQ78WdWkmcHFkg99YywvPqFQ45UYsmsbU",
  "key25": "5QUaZiejbawW8tt4Bw9NPaKbHvSU6fvBs9Q2xdba1sND8buaB69TgQvfCUYii7sWGDKAAUDubpc9Y8KNDWs9tAkT",
  "key26": "54z547VixyoF1DUEwV2zFWzoiH3ivDvSF4uY2gu2vz4AsQu2nGBF1uGPgNqSPAeu4PZiwRK7aShmpnF5ejp2o2JS",
  "key27": "21DJ47uXC5x2agmhj4MiJfxfLsMCdEADTMXqw8kG3L8TmeJp6DUqf7pDShVxt7XzYkKpM6o7NuzZZzDZJJL6aZey",
  "key28": "37TV6SCfnuG5gUXr2aW1gNB4jJrzv2nm7ueinmPGpy1hzMc3cX6v5UvV6G77imBe7a8yc8HhngeoA4h8XgjJ45Vx",
  "key29": "4szJrBaULpK1zJ6PZoNcS8Zun7ixhaDBqJfU25zohw2TFTWF938f1MnYFDGcUBYSXxsA4SqLCi1D7mFUJqVByQje",
  "key30": "326y5L27a84EVU2naDTkTeDuFiiUGJ4a3mXBqijQfgBseQv58TgiBWZ3TqckKmnYMbC6xb2iz7bUpn33RVn8q68i"
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
