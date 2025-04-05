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
    "3qgzuEq2xU7gpa7eBVp3ucgTqqQxRB1JbVpnteYbMznBEUAe4S1ghRHzmVMkckNZBU9uEVJ3eFdXMkS27GSYeLri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kpZLiueFDX9LDNk4Lahw51RkfZTXD76SAuwwps3zpNfokmRkjsfbQkSR6JtpFsByVrMmjty7fQP4YmNtjHGg31B",
  "key1": "3J59FJAXwtxks2kEQj4zq6g1QUDsbgunSSxA5bYudWyoE3pDqV1KPpGvgeDk3pdhjtQTmaTxMVKXxhmFvW9xYWkQ",
  "key2": "5zFE9kWqkD2TkrZSLGd8gFrc2CiGdyT2izaBCKvqDQ8NZ8CaP331QNh1NPKzFAw9V3m4vmrQ7K9TN19C3Hv8Xi5F",
  "key3": "5VJWo92kNj4CZ9BqE66yUdnr5tvaLEaWuAjT62BXWJr4jKiHd7VqP7uvYSBGfhexJK6UjPc6rLjtJCnTPpYFkowp",
  "key4": "4Rgh2kpgHVEZRJ77PkKgQMVb1moioUWmuxHx4JDJ323iwPTZYWqg6GR924bqRwLhbDZWBZycgbummCQCvnfV5WYT",
  "key5": "2oa6JxnruBPN5PmNEokN9AuudtMPVKe8t7X3pCpmpsLu3EU9nShkiRLuaq7Du9DeFGF1yssqsRN5kTEL5oLiJbvR",
  "key6": "4fVk1nFDX85Rm6R1CDn7UeWCFVPpdekPMRoPKFQJtbXX89kGkRzhYdJnPTEkbRVB4bH7Dhqxq1AGwT9fu5VpcLrv",
  "key7": "4c9ET8BY5GvxUXk5wboXzGJuqLDNcXTQfuKjTysrQQfQ7TpxMn3We9Pco2aoPZs4EDo4mBzN5X4V8WQQUS28VAcm",
  "key8": "TmdQ9XDpoBXfmLbBpCk599PqF5qmHnHk421DgjvMd2tdd964MJA52PwZkZHmfK27Zq5M2v59doCUXwQSjb7nY25",
  "key9": "4kDdhx48y21bD5Wf1Zdg6tWszMbvBZ7qnw9pV7dDWepEfpTFBKd79mLK5G56w5HQk6Tvb2HxnzRbM9T35fJNJAij",
  "key10": "49mQu2bn4CnLuma8BYjWDTbwaF1DoDf6DuyBeF1VKsSyB9SmxT46eeSYg61mk9mJoVckPEPdsaJg4EfVTYgoM5zy",
  "key11": "3khU8dMKLXMcW9xtxCCZaVRQ5iDKQMDiyd9CUu7dFia2mv8C2NWcqGKw4NxH1qd1MSsB1eJMqkwJeqWo4bMiSbXW",
  "key12": "4RdayWYEBEf3fJjpXyvvb5s4J55McMCY9MDNAaxAvXohGbMVH9aS4kRwY9zqCWX1cu4C9k1GhtUwybCiKtN9UTva",
  "key13": "366eQd56yVzoL8NX7LaZeZRCoqbPUbt18mCwe9tB7SidS7uzL9KvQQyGRmiZDxhQaSATzMPFubrRaYsVmJnNMN4N",
  "key14": "nYx8yXGyaMT4Ha3Ty31MRaWASv3f3tmKZ8xarq39fSHwLeemfGo7uLKThN3dN4iCfJw1mKjLCWetVhqLUgprnNX",
  "key15": "3nrpzjrSbq4aSiCj3wF1Fk8vRcukejjRqfaP2uUv3xZuUJ94zqWrfaaxm7hu8n8yDxycc1S84BPZaiRpmArmmgD5",
  "key16": "2ftXsysspqnmLDhYEP9kGA42u9xZ6Ejw5aVFhSJN2STQzr4vHFvqu1teWZAtoAdiMMBZXgYz9P78LUe1A5sy1Zp6",
  "key17": "vzjK4nhS8Wz62YQHfL13Xq6HgKUyFu8p3i3YE5XrDU6YRFHcNo5jmhNEszFuCCvTR6JMzeVY4QyG4FbSuxvYFKs",
  "key18": "3SamiZHxwQ7L8SaG9px7m28DTdTNq7qhiAMetfXC9TybVLddiiYgWL9ynE5hFzzmvxUhc2C3ZouHTm6y9zpeGKLA",
  "key19": "Gpp8DfZzKLzdKDKddWnJzP2b43eavra4ECZEVKgvhMkbTA1RWBaQ5uTPsdexepzzPxFu8Kx6L9ZKZFjAq1RRz3c",
  "key20": "5T2KXhHE1fvTm3X8Yp4x84ETa2ePNTEJtdBVfBwhbdevsQWYxkpJ9EKoDV7d3DVAUWvNpqQmRA6XV7VvfmEUu62D",
  "key21": "55z375Gjuq6BRYH17BG1GRrvSwVEq7GX7wrEx4XhHaTafk6LqJuurfTTqPbvpzamMj6LCfNi15TiDDgCcvi2ispc",
  "key22": "5FMbs85bLczFtEeEKhfhksxLLwxXHjeWRmogdJKaMMGYyhTAEV8XR3Ptiy1ee88XGyaSve1Dk5wrsBYoBNAC9kMi",
  "key23": "55b8M4qTSZnxUDPT4e9ywWAMy7UZiGk1vhjaWhCbJYQ14Kp9inK2wqy19SS4TrpFqtfvAkidzDQT5tZyN9265xEq",
  "key24": "22MAnpKx8js4iqKcwgCk3zGB3ceYbYXVoMEYHKvfKBCgGSiDm5CaP5eRfb5qBEGeQvjk35paz3gTcwYFqXdLTb6u",
  "key25": "2zkriBnAxcTryCu1gFDYcxnWk4RYcPqYVcQ4zD9ioLVqkVLLFPFEfT49rig7aFVdnWuYdXd7K8xfWsPd9n7v7ohX",
  "key26": "4suEZSoJpvCKdpkzA2oBDrmKaVdMi4Ds7nSsgQH5SW4gjVxaRWzzuLQadEbaynamVHoFzJ6jRWP97csupihhRCrR",
  "key27": "8Yw9QzBRAfaHyY5sWn1twoHZky2WVRkBqz3eoXNKXcNZ9Z81zdbVfv4YZnauAAkP1ugZmhDJv1fjnHLKFNTzois",
  "key28": "4mCTJz9ucwfMFdFCnitGCte4pBqqqwAtN9dB5nMG8voSy2ruZQZJvBKd5gbTH1TXcqX9cR6WTDauGU5PWk9mJ5hf",
  "key29": "3MFiWdhsjz9fM77PiEwWXAQ6rCuK752qJhxk6ooYhku8RCPDZMrqPDBx3KYXdpE5mBxuhXMav3UfZ3mWDDGARPgF",
  "key30": "448PD4ZKo37NDFyFn2Hz5QQsA4RYDudfNCB2E6CHMKYLTFcZ3qfJMRtwviYd1s1sZdixiPgkn3utcEWt2mEt5tJw",
  "key31": "3KmRPxzzkVBzknsGmYCTQzoKXiKGgfoeqrAAQt2swPhGB9bdEcYWw8QFweFDL3a3Ngp4VPJdRkAj2f4UpmgLNMYF",
  "key32": "4nXTRsEKRZvJH4hHg3D6fFwdxXnjuYJ353qx3tH4jaQzogGC6dwptKauG57gJGtFuaL9zYdWbthEgSuETkmz4kae",
  "key33": "3XkhBGau1hr3H6DLdvaBixGtCqHtH9JXtfuwK22PHYAEK1ieJwqLMoD5cmF1SQzF6UQBoR2h5eAz83iCbbK3Jkko",
  "key34": "3ogiiKZyPPQ4ujezchk1VPhrH2qmsTqVmPf6fCpooKFKWtyrChgecvSc3QJkvvRGYHaizM3Y2SYMhZowJCmTaihH",
  "key35": "2bnXoRqs3wz76f3W5J9B8mNhmNPuGE2irGkyH6dtnTwVs7Kjcunk6y7APhbNFdnjAgKA5Hc2SGGYekQ7fpPT6fCJ",
  "key36": "3bwLWtqQKhitFeZa64sMYMF2VQf92QxN2EfH4ujgzCbfJ3MpPBm3VDYaKuenCHZwVjjFwGvVhitoPmZB51PvryWh",
  "key37": "2CWBnoyRYpSuqM6cMbdVJoxrTSfkY2G5XAYjp5ce62FeTG1KbShuAV8M1qJyZz82oZvPqqKpvM5eN8tFQWarePpu",
  "key38": "2ipMQYZjoVGiUiaa8cBx8X4Qq2mSTG9i36EVSMSYB2EE2nAGaQJ2uumjoNLMZAhuswEaniyC5ewGCpcoPEzueYNL",
  "key39": "4Y9NYKTEyzCsQYkSxeeHndx28Yt7Q5q7ZCQLFF96pjFCdTLA2YeZR7PcTCsb9wnre2nUfi6kgtoXccnYJpk7wUf",
  "key40": "3mubnUdTSafAvAFx7hKUAMUPvUh4nGg8NPvED15tAL7bYt4wB5vEmby9oL7XKa8YkSKQcwRXQRPVFuUTU1DJqGxt",
  "key41": "315UnF9T1Roq1WFv5SFCyPydXjsjMYzadHPReVXSFnTMxb1Tvg5qHPNsm7bPhfESFJzDhFQTp7z6WbdK2N1XZ4so"
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
