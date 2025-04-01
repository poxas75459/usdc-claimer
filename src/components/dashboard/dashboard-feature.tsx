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
    "4MZs7LB8M3xJhwFaHbLtmbPZsB8e532CYdDj9pJ4TExK2Rsm61pRkxmoMr2bhbqNd4iYeunJSnFFmcAaXcqX3qjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bXYNr3uouCeedjU8oheyZx4fQPW8QPaoJ7NRUm2Rkjs3nKGadmJuW7GcJfpA3soQuNacjm3uCVpJNmREeDoiijX",
  "key1": "4QmdQuRPbj7JErNQwiH4WZXfCb4PSV587osHo8cbbijzpZWtQX8T8BYtWKTgKyDy1JY9URsb6ry1hWX8u68YkDGt",
  "key2": "4H6oio7dLfpQpHDhcMNMjQUPfjb7fWxriPe59xp1jjG5S7b7CQ7rqLG9ANCaP2jKo6WMW8THHd4FJ3ELWnkx4oUD",
  "key3": "zaQpyskVTu4fvLpaFeGBEA7SkXCcbAcAkkmJuNSdwgWf37uCpH5qoaqNjkWSB5LZhMfo1ggVhqRZEePijTh6NWe",
  "key4": "AbyngqL1TXhXkFjmZnbgSHMGhocNMEJmLmjFt1p6dSPiqZetA6hboX4izrchwNF2EWEWVfc92QVjTwg2y7sL67n",
  "key5": "3NCKu9BjbjyoMGFMBn1UQsaiRHVVvo1sqW5aTs93qtdp7A7bZcFjG7U6FWFT3U73CUVvmSbfxtnBrm9Hh2N58oV7",
  "key6": "2XwoYyFSjpguw2yJVP6Y5SZunXTFwr1Fpuy1DdVXfB29qB9Z25xEmtNy3vHbtHMDXX7gqc5aBgzdoASWAjTdMrCj",
  "key7": "2qj8p86sjPrfzgEeebdLxovxRhtkWoGGyUwUtdVEfLZyguzptTiCH5c8VrDFJaP7q4xsBJfo2P2Z4bMa2NdpRyNc",
  "key8": "2REuKGRgRRTptLwDP7uAw61ps7rCzT4uPbrKeM8TE3TPKJCAVC4j3YazMPXrYZJF7Ju3PvVUXTSjAwwmoGgUucfE",
  "key9": "4GJtvCyptcyUX8BVeTTVLkrgvVAhh19HPf69G9QSA5A9djsxgE8d16FhSUyrFmyW1jSruv1hSqY53hP24JJ9L4hb",
  "key10": "9LRQ7e3J6ab5bExWvGAxj94JXMfeavRB7cR6r8pRWjUXBmwSiFpmEaL14Q7wXoouc4bqfB9rLJNLvLbVT6j5n7s",
  "key11": "4b4v572nM8KLi2fbAdUsZmuT6PEixXLGMkfFvkXyNv7K5EYbJTSk7Rr8QsCrR76bspEnV4i5CtH93N99gySywQ4C",
  "key12": "maQ4oNgy49vhv9GKYvSUJehcqGPpbQnLDpoTqZvb6uPsMnnZ547dgo78LNtMTaq1TG2pFed5QVX2PkuDJHTDMbH",
  "key13": "3VT6397ZKRhzxGN7sNrdnEyP8r21Hok9GCM3WEeUFUoYJVS4VwvXYDzZTkMXYdV2q9ttGggkwXxfqoBDoYLxWCsd",
  "key14": "4RRuA4p8SisREsZzRjVA98nhY35nZ2J5Z5Yf7BesrHFJeYkbW4oYBUQtFJfCUAcZv85NsSBNzL5NYnrE6H6wiMaG",
  "key15": "2KMpQ1LbKUJdKVFShFFtFKNHPVNy7qJ78SMp4bSQHdTgxUrhJGaD86UB1HhnptG6SmB6rMC7erRDkiD48sie4WBT",
  "key16": "2pipkoAUvH7mFAqTv9iraiR9NuMMR2hLMXXX46RxAcxniTX5YVzaFTDNxnUoZhM1zWxY1nKUZZ2WyQvfKGKUUSfv",
  "key17": "4wSW3UrkT6iRcU3Gv7FhjPv4pp4qY3zgrPGqqsLPQezWRuunt9xi1WCt3H8QS92vgnMW3syVC3ZYNh5uxuRiicoH",
  "key18": "66zms1XfaRnEv7WAK1kyR18gHekHsXcRBHUaURVKhav5ZVG1eDvD5gdPYf2MouGhBHxDkZqQB6WVKrosaTTP64B3",
  "key19": "23Xj7h18x44gDLamGPU2CjwE2w28SSfiG8abvHcTWAinAwhL6JvvwuAP7GfD6rKEDdjhxgmW2k1XBptyksCzzYw5",
  "key20": "3AaLJ7DK7kRcxLQ7UHXMH3fiRjBZBJNgGBZ6gwJ7FWzEFLDDduhe7qd4BqoqiN8GBEpLUxZS83DSgr5Q4CB36DSM",
  "key21": "64ernybj2NE3HP4ERnWdcLHt4ofy8aDgjLbGjp6ZtLQhe4rZgrQaa3rJjM4QCxPccZxZtxdm7hV6qwV9p56iyhgV",
  "key22": "5vBf8SLHieEZNPpYFY9Rnmfavhh4Y5bwda7FgbbEtuWFkXcav34cCaQvL5Zhk2sG6qzKTwAp8dAup3oC1qzMEiyr",
  "key23": "5rR3tC6iQQScTfKCtjzacN7vbUWmXEUJaGkoxDP2pDJxGQrBLtyghRKvakj6g3hLSJPrNoBu3GMBbdESBzbHCK5d",
  "key24": "LbLnQKiFvoWSN9C9SbLoP7RnHUDzrxWuswzv1jd9UiqU99wMfXARKWj2ZXsDgUKCpXBZ9fwZUWccdQsCwXTnusP",
  "key25": "4m4FtN1wR3RV6GDd53RfaGA7xyf1Fy71XubfjPNmv8bWt4FAL1NrzP7ygfK8nMQDH5kwPbAQwFyVoJdGnqcyf5n8",
  "key26": "3q2sQ4MatbjHoXZXNtULoVW1vGYSq2WLvihJTQ4LS4sGmXbYALWcvYLHkAiNQWuLqVkq5kSNDY856SXDaNrGdQXK",
  "key27": "5aQz2YEHpms9DuWvPgTPmXomGAV326ADpJa6mTFkjcVJ6Zt7x7Mtt1JztMnrDLVjdKjfY8b6oueCnaewM7KiEVZc",
  "key28": "2mrQvWjW63KGiVe5zT4iPGX5J3a4WeCMnbiPsLdJyxS6MpPWM1hkVSJ7BLYkGc6QfE9RZ5dDZoUc6TeEWSzNm992",
  "key29": "2BPFNCK3wHA1bAiEcjH5oNARHc7D9UXwibs7wGsuHySx4epG9hywGMBTgwusBMB8rQMuu46dMMSMJeA4QSCSLojt",
  "key30": "5TwoAYvVAESd9m8EYzpgtvjA8DvdEobRRmXG66wyapsv1jPA5fgZJnpn6NXZCVNvt1bbJKe7bmU8wDKyoAzWEpxK",
  "key31": "2Y5z6ywE4zPFoVSSoSVRhiPz5auaQoofECKQ1Hkex3mtkf2ZUjbw5YMP5ufbtYKv2pS2W45wmhHvKTmpbRJje8oW",
  "key32": "5tfk5D38MURxyEde2xmo8zxfdJF2WbKaeU5BxKSjES1gzfdU6g9MGEaFh1sVo4834cXpNaxJ1bnS2T7EARTcSu2G",
  "key33": "3zdqAtqZuZzTw9SaqaQUr6PJnxeMM976tSm1T2RivDt1FD1bzdToqN3hygU1LocuxCxKabXhJaV5ev9jgZmpVAhY"
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
