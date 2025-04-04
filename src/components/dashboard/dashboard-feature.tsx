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
    "3YbfvnggJBNsr5hQ5Fonxv5zAM9C25WTdjAMj8bey6QfdDXKsjhUnc23zmGgSVP3PojNfKi4aTyRvAFcPgG1pA3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CjqDVrBeGqbZdBPWFecnmNSUqv5pVDi7QX4PJ4sXaE2nuVRdAoW4D8odtYYPKrBcpVy8tMmuwYL7pMdikB5Mryc",
  "key1": "9pdx1qyA1kh6o2nGqkHWjXTxfe48XTCVvKmFN8uQprySEqcKGJRUJjtza8wZ4RcQHXXSxy9isYUoqTuSnVRZhPN",
  "key2": "4MVvrhtvCFTzSpWmFHnUXt9rTwSob2LetiWhEDxcgfhgTVU9AEJDcnQMebJ4ohDwRSEw52Zus6P9qzzjSUmocRMD",
  "key3": "5Z2LH3nBv2YEQckdp3sCcyBgmAU37iJMveZDg598N8ptXwS57w9WkP4SA8mn2cHG9aEYKffVvcAMJSHqcNXGcUY6",
  "key4": "2jxjaBtcuYo77yqpQ6NQvWMNZUnCoZUbs9rshn2A8WXqN7xewep9toXGKuxVgeDAUFgkB14iLucmVkkg9H1gAcVX",
  "key5": "2hh4JpnRMrY8JAZFC3TnrK9dNKFPht5qXdHXatfff7QAGwWRVLk4PNH8ojuhRQtHJ72xXDFoSafXoNoUvd8G9dAh",
  "key6": "4dBppaQDbPVbdf7nFD68YfwmcUcuBT1oz2ucm1shgycz58B1v1ffEUVkJw2dTCRFL9yrtWqkcsDZFahd2rs8fcAn",
  "key7": "3nYyUQaWdGzYgUekV9T9KK68m9TTLKbBcbuVdbzqqSVpSX4SQiZsi4TTLobSTM7fbu2H9XofenPcxU3hpjYCmo1y",
  "key8": "wPhbjoLNmfFz374Aj8pDJ2Bg7A7sktqeuFbs7iMxMdn9AcyD6CZoPCzsUPyTmC5xFNQfmdjonPXRpkW9A5JXbfM",
  "key9": "4i2X4b11rWR1a71Kt7x4rsCwVnUysN1DaVPrSYwEYhjZpdP3JZjUJNdU4PuhFf8FsBxAgEKGFkxBYdxmBRYfjSzy",
  "key10": "3p18HYpgR1GgQZMbXo8YUm1TeMFc7TskxhcHaZDeg3KqR793EVpCZpbEYWwk5s4sAmVjDrjw6F2hF2U41gVm6Shm",
  "key11": "2W1riFkRsYScCYSpNdx7HdkbySonuuiBwf7HuXJzwNET5M53A4wro53KkgfuoJGT1qmXfbMV3aehRV53wh4Ge8MU",
  "key12": "5YGcYuLmfvJErHNmt8co9xJbvF2EmWq3LzUWuLPXSTG5rZBH6eqhoW1kic72oGnBSYTPzp7DrhkcieBLGjCmUk8u",
  "key13": "kSoRpK2wjpV989kQr652QcxJExk3mpth7csK9b5cisYBXEptqQTvM2YUMLcnw3L1mH9U7NNkdLDG1L92YM7Z3Jv",
  "key14": "3aR2xQ4jqMbDb2TjuMbNbRwsgSqRKXojawx4wgpfbad2TBaJ43YtVt5A9GhRbWfPKNLHR2qipHH3UanimS2HN3we",
  "key15": "5aUdKkgbpRrctdwKZDQNafYuUYpUEFn2wV2tGxbsxekH7bEi4g34CqKBGpizJ35NQvqAVBCtojEnZyVWN2xnaNBa",
  "key16": "4JQRNkgxTMYwRaaUpc8Kp22ALPi82uqm9L1vUhG3fQyiRpQXCkWionza5HSWudsAXeJXHPFhohDfeeFmVsSzaqTB",
  "key17": "4nBBVmdS8d33EEMuD7fSvdfG1McVyv4QyAXZyHpfqAzAdTnfULo4WDN4h5XWBvJmjkiDqkLuSz9vbMZRefhxQju5",
  "key18": "jJbTkZC8pcxnhe87yvMSrtHXaeWed3SUHi2ypyqtASHnoZRvvzKcjWxzAKdQaGqV3UzXQModT2L6bsPjEwXcLvd",
  "key19": "27Yiid7rXNXE36bBiB7Mzqp2Y4cmA5p4yuPPBkddcQJp6DbxsAQXhK1NsbPDnMqPgJWV4av6RNBjNiLYpcLZP3w6",
  "key20": "4UKY2x2EcBnmCMyBLo43F8P2c1wqeAupLLe8mxdMHim6K5N4evvR5Wi8ziQCh8H3KnBTJgLozwDaCrkJZUWWxPPW",
  "key21": "5eB6fe3uj823YcwZkhoqR3PWFKNhCUL5Sc8P7TCL5VYfurdN3tD42XRoLJRGrxok1d7u1oqzaiRGgR9gTSCQxAAk",
  "key22": "wkXHRSEYUtvGHr7NZo1aRKFCQdeqzWrD43WQL2F8K7iarsYhvKrfvzpLHUXxtqLe4nWd7nC327nF2BtqCxUqPAC",
  "key23": "2oVrp9MeNkb3tPMeui7p2ZTjLm5TAtViUoaW5yb8TbWfHm2PT3fbeKx6z36T4ZxJ84ZJTQdeddebBxoziQRDhP1R",
  "key24": "3pT1wjz1qGiESnfvzzFiwi8WJi13kSpfABBSdeJy93bwaWmmoysi1mzp4MD3agso4X6J5oBy9BPWrhisbLEjot8a",
  "key25": "4AcWwVf5d1fxdoUYV4wws5yhdGHgcnXvAQNk7WG4Uig5imepPNJrvJ8BQS7QfkdW87Z9s4tUUwTDxiWe9ieGHMVn",
  "key26": "5KgRN9sFrb5e7ZKadGktWVXfszqCFUfcXGKNMM2vg8Xd3dG53otaJLvVZz1EAn9hjCJrE5xM1VJ5kkuuYNe5ByVn",
  "key27": "5izQAd4s6v6CRMCQV57SdmVLsGHvUtPZ3uufbakwpVEgrRrMfAbBQfP5TiEbjCqYHPhUMPHukyEiugB7XNLHQJeo",
  "key28": "5rqdNASjCVMAyush65BKtU6YotE6CwCjrPzNLjMD7b7qSCKGwubkhkD7mjiGeYBWkDJf4LU7sXx4tRrU9b3Szt8X",
  "key29": "4fNXLMMKvExyYRT8paUbkjnuyptiuYkZozqkcsfPkHodj2YXiMWd1L3cyPvBETCsuMk3ojQorGqn8AzFVzG9MSz4",
  "key30": "4mWzqfg7BRXc8SKt5wbiuuVSNT399kCKsEHA85cdYQVKf64LJ3dtkLCN3LsNyDZcQUDLu6dJ1saZ4E9KRdWYq6FY",
  "key31": "3VrkRddmhh8Ks2UuwfB49iiQ7nucZBtBXMnCwwdBwELW5odWYJXcxVmqGBSKJp6Q8KoN8PazcW7bxvcNedZFLBqp",
  "key32": "21sYFKt7yYdgx5Ghnp2qYBXfycXVWJUqgFF8iBQi5wVRgbndYh6P5uDoE4xJ9z25jQcKLcVWcsL5FYx9dpoDgRSN"
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
