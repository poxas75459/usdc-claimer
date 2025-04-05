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
    "5BoEp6WQUTc1GL921U8Ng1xQUz1RHZLYvJsgELL1mVAaxauNKxieiSJRTQtvFnLgoUiNHbv2z6G8pLttUsmcPpYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wu4WgsNwtpPHWWUfKT8sSWZc75jYvVZouwezCUsr4RJ7uNXL8Z6QFup5NL3MH8aAdYq6VdDAntKHUFEf1Zk1WUE",
  "key1": "4vuNxHup3bx4wyG6D3XkTFT6eKC8T6pmdEJ3hCuCHEEaSeyznmBrs8JbL2mp3yvDSXLnKdsEvgVSqHq7xP71tvRz",
  "key2": "znkQHGsB9wngBzPsWeop2JWWczaDjMxPqNiqDBj5Dy6kME8Gc98y3hZoXePFsb6WMrPmBvEa8oCW7YpxZ6YyH9L",
  "key3": "65p2GVWHJmcjBm4sW8oh3ESmwcFLbzeMcwrgws1midsVWHAdGuGLTQMnu5Xj1LkfmyLmujtb2hUQWWq9qhkuj6sd",
  "key4": "3HvwjzvSMVHBAYbNWYqs9JkBiwxuLiz5fi3kQ6hKpK1C4cc51Dtu2xFZNyKewjd1K9PAHhPHEiAcZyAb42C3x2Ae",
  "key5": "3aEQ9GisHbJNbmbCRiGEuw2vLLkZuarUNp4RLQNzexjYUdqDUn39ukhGfW4L8kKrFco9twWSqRKeKgVjhAWy3ckF",
  "key6": "5i5UnvVdVZVPKh7VyAxku9FzTXMzUM8wmTfWEkdyKQGKRfXNWtQ3m4CYE5gbctbrAjaScvDzNuwHU1v8hBzLCLW7",
  "key7": "23WaDAfTke7tPsPuAwAayH4WJuySzmjocrPZGASvhvpVhSkHRJkuPYRbZYzCbxVBL1UqLZaGMy4mKn6PLDvzzgpm",
  "key8": "5sykbMu3TnETUPeHiRx9eMz3X1UsoBApBQCb9BAJ9X4zhf9SAcDgTwdx7xwqmM2M3CUrFnAWvKWESqcj6ADcpVue",
  "key9": "5UHt7x2h2Uh49MFhvnxBXsNACeaVtCsMkgDom87HYaUbMbGDd2G5oa692k2wYZNNqPigHQNCvdfx7P3GCo9a5JCF",
  "key10": "tQiUQUhGpVDv4JMqwnpXvJRkTN2kYuwKABFERh1PGQoNJ7fPm3945ui7ZADPahDZcmfhqqm96AZyCFqACANCNC4",
  "key11": "43JQL5AzNHiLrhmLzSrDFv9fDkyitNxsML1HnxRCAGzbPJYjfuMR89DgrMvKcUuFtMwKasHaFnAnt6CdSKbhiAJP",
  "key12": "32FQWz9pSjjc3ncKzPNzmBwvwRn4vfPJmojDqhWSccFxtmzsdsnvoQex5zCv5Y9KLFobm2C3iaLWmNdRFtJKBujH",
  "key13": "3B7oVpGPM1Tc3z5oD5ALAGGF6PCvbfotyRmW5nMUy9CfxsfnBxSTwqxYVeXg6c3Lc7Gs8nkLgENKVPrMLrRH7VWg",
  "key14": "3RCLK7ciEJyitSyUa6uwj5MFVbJuk7UKxDH3cCVkayWAJsPGGTKLu4z57SxZzKEZSEbUP1CRkCgDPofAwEwCc5WT",
  "key15": "45mdoaHcLs6G9dpgYGDzUoSyFtaaHgyNidaxhvVdMx2x6Ek7pQSGhgvA3suQRAoZ4wngiWkeie5YRPHtdRH2WZCB",
  "key16": "3Gsh71WsoYERb6oJyACicb2fMXrEhPtGiepjVWV5GyE6EE91jSxFtjCiDtZFPD6oFfrmteGqny5pdnJyvVzwpeto",
  "key17": "4n5dTu8dKwhE9sqqCHkoJsr2pjYQA5ozgBfDZLRzThdsciKTtrXQjvhBaDNFykYZWrnHhH8hfP8GXT8GEYYHQKP6",
  "key18": "4PzxiDiKY62sUFtBm3rFTm8h7CA6wbGcn1Zp3ZcXXzyVh1wJkn9n8o8BoDN2jqyJJjANupbNKniNtFC9nQAj9QhP",
  "key19": "5qbRuKVzLFyZcASCm6WL8X8Jfd83pJtLuszxCn2nayenWfKgb3CkmvLTuYUhhcmdozyQnNk7iNajHmWGP7FCk5f4",
  "key20": "41XK8KvcSHZhNezGJ99VXvfsw6Db5kHidxoH8mfQyatRVJS4dRBCmfbCjMGZ43xnUfPw4CLxHP1mToDyn29qXra2",
  "key21": "4YhHMdTXrGjaeyZfHxDWSCGH28MJE4w21GrBEwFCAz9xXxGpLL68WN23XFfQmcHm6SwAsHS3c67yAbBY8hpvRZRr",
  "key22": "5d6NwWZsZjrHbPeBtjbXZN6EBMh2iGQXuWNPRuTBGxLJ4bt4dNbU2eLaNGXiFvyxNkCxiDW28WMrvLCrAKGjagdZ",
  "key23": "yTNLZbq3FM6cs1eAMGeDouHe8PpptNNrZSFmYmEpP1MzB1dpqV2ctoetF53drihvRkjTpvpXqWJ8J3hbs5GeHMh",
  "key24": "2hEJuS2c9kUPcFvJJNr1HLw4XQbmdLAWrkPv7YbLqpVAVeH9ocVkLHE6uNMdaivdyk8GGWuDQvTsZJTsk2ttXhiw",
  "key25": "21wzjudnTFv894qu2p848VP1EEvTNaZrsi4bvRgcGK5pF17EcSDcp5m1k11jLRERB4xVpnrsifMvPMwDwycbtFEH",
  "key26": "28MSXmRekN9LKfDKDHU27Q1B7mE82Ccm6TgtcQXatsc3Whiads8pJpV5V8W3Zh3UPdSqrYT1VvgJLcgp8or21XiH",
  "key27": "3PVh6AtyfHkr75pupQ6uM8LwA6n66M85erCp7mTD28ei5GrjgL13Boy1izJb6rfZi2U4fWPfMKsQ4keyC7uKtF3P",
  "key28": "1xpzrCVrDuePViosGhSTb3gH24pAjoqJD9RxevAPQCy2kZCwJpCWrYFDCofC7vMmtwtAbzb9H26M5dcVkDGY8ro"
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
