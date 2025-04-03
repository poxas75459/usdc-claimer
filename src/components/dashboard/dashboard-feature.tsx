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
    "2V6fDwnfPa6hZmLJoNj7xdLimScJtcKHZ1BKctMnCs1PRYFrDs87x2nN6ahLDFsygGfwyVhWpAUec9SHWmMJaYCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FC4Ta1C8jDjbBVda9EkTtxbpfgBD3wjmJ7ciyEUdYqtmWxbG2GjvPHwuxRgdWJFrH5TA4y9nWSkcwa6dSwgL6hb",
  "key1": "2d66eQLmrdYR653nqLYcrCbD8QvSddaFkeY1kkAhJm1sjmf61f9ccK3y8yj8DvX43CESppjDLWZmuCvb63dAXfQX",
  "key2": "2G6FxBBgnqbFpEeuHPUWEEmJZez3ieikxRHKajpRiBdJvQM53N5gJjaxiVxF1434zF61E5Rs1XqmmgiyNfJnrRej",
  "key3": "2opCDAJK1LqNr9sxhB8XbxtioVkh3QoPWGZNa87bKoW5syK9Bg4335iVvA9gEJLKUpiVkXyxWs8qeEmvvXFjxoqc",
  "key4": "4y2LQ4XyfeGuQ6UuCv1BPSqWmTqobHaDcsprwkNxQoHuSA3cLnUv4kfwdNr6aPAH5vvQ389xHsbaqvVu5ZHXPsuz",
  "key5": "3Ejuip9E4DmJ1fCBuSN33G9MJYB7swnFiAnaH6dU3ZeaZu1aNCeMywEhDH751FCct34FXxNaT2AnNf754MwpA68b",
  "key6": "56seeaR6LmJLawH9P2tVxsQi3vAojNVzLVEH97ypSVPNvXgoMM6cdyuUn8A2TcGEwhzeGARMUkBA3unDMiNxvTnv",
  "key7": "2cneti5M8GvnNuAebzhAL5n8wcPyPXyDacEPUgGimtdUme4eg5ACEqbHSpnJh6GdGKeQu7P9MF6KRvSsDTXt6pKF",
  "key8": "ed4agSZPtAKv4nqK9rxcPnmdWpWfrhRscf72T87icRYUVhpsN9jNauhK9CYjbFpK5ikXBpbnzfEawmvtBsKnfdD",
  "key9": "UfCSes9Ji6rp9Wcf3esW5MDK6p8s9AAcxHhveXPTw67w7kS2xNDuVCbKyzZweacTJ8GXNaPeCjnuPz4M61wCfE6",
  "key10": "4ajcvi3RhoVvG7edYETYcrtvmGeaoztx2k6eewZcPuJkbeTZbP29VTiCX78ikeSQz5f9wGikt3FKjRZoLs7jNbgJ",
  "key11": "3ALwJmddoCNZ72EELDfm2JVs3oPCVZXdMshBAC7ocVKaFeWVD3Tsy5E572U96dfRQ5zzefQuwXNtS4TeAdriZPZu",
  "key12": "5vX7LafAp85AP5msdemqA5Lg83nX3CajqwVbwxaC4QVVCL9S8hHYAEZm3CU9LZak5Du1DCbPZHeSetLZvVdzGtQd",
  "key13": "2pevFwNLNDPNr2UsrLEKRAqKZGq5F74Pi7zB7GgXgJnv3uK45fvWBbmEKwG5gg2ohTFcMVdduqfHmcHARMpNvkHL",
  "key14": "2sFRhocr5drBjTQbcRbqwdvpr9BvmwAhF68piys5kF1HxsUnPD3wZKfXQqtJRdBmH63jnhP7Dp4qnumnnTbShjuL",
  "key15": "42S4EKh9k2avxgTtZAU8UNu5iG5eqQLqagftxyds46NdRhguvxze22VSTyz3UvtMFpcH2rCvZBg8Azqo6NXaDdyy",
  "key16": "38FbtARxHb3PKc7ERoQTPWRGRu7ynYdZ1ExSLvkSmS1bVoh4f8uLjKoKxM8Wc6yyJt9VNyNzsK6XurTUhS8fU1Bf",
  "key17": "CvrxymM28gnTszPpgWpSq7DX5SNFVB5iJvCzvJ8AHi8kNeebjhU9UGtR8t8Rc1HeRPxrxy2awEN7MrmoQ9rRejY",
  "key18": "58xKnMHpLnunE3bVBJs3KSpG82teTctjtc4SgShJZdqcZoS7wbUcRjQcHxv3rnFvy6zwVk7etJ9GoFaqZ6ECg2g1",
  "key19": "2cEk9D4SFwL6UiqbZVS237K6Ny3Lq876JqTjoRq94biknTeNqoQmR1PhcxQ9wcHZwbSzezzmMgE35s4qByoY9s8M",
  "key20": "2rgVha16ExVqc9ykn8Wu2gekX5zynj1SQ9R1DePnreTWxKW8WE6fgy8BeRt7BtkzogjrDxMYsoagpk1jd68HxopD",
  "key21": "zGrE2YnKDCXroP9mz3yqkPhizYUBhgBYqZEQVsXs98WDoj83CbzCVp7Vn5jVSqqYojT8KxKGCsw4LXStACHhf6n",
  "key22": "278vrxuYua2SzJRv9NNRFv2QLLFHqbRGBrHiHPi6AXZf1NFmcN1EYotGedCJ2rPKiuLnVs177M6KT9wvZcityyXB",
  "key23": "4SUxTTbKVGqsYaSdRCJN1WwDdwz1H9ASGFATAUizarv2xZcxH1ua55gtiW4WzY6FmpQzTW3rg8BDd2L5tVxk47rM",
  "key24": "32KAZvTzqnitPY6jbqbt3aCicHAm1NBR6rUWkCWuVKzSn6a3WqFpRK2DDYFrf4c85ZCGUAW4R7CpAXvW8EES93Wb",
  "key25": "4eYoqcduWjJAESdEe4XJTnVCyYnKs7Qp9DRCR2GJ46S7b736zgpRgi5QBMwqiu6Mu2ug6iJDpF8yXuchUuFXKbU",
  "key26": "3JD3iqGGhyErXgksMJM7ViEyz2sjLoAate3yN1fWLXSutYScagBJmwXZfRDKuUaV1LgH8CzLCgQDb8sF7ia7wNN2",
  "key27": "63aNiBkdVET4hPW1iHD6umGfgQALk7d53ys6WU2VyHRzXHmmANWtQkZxUfC5ZSoRzN9MQBKYq4hQj77XFGToWB2K",
  "key28": "4FNBkPtPZTuDu7vuCZUBUQnfUn7Van8JXXy7t4hMRpGZQmYNjKjvc8fVd2jibvxiJMd5s6zxgmyf9TnKgsfcqfD5",
  "key29": "44ExGSa54MwhzFH8xRXmnzCipXBUtAN8LuXxiAhoXESxvfxPUi94QRFxjysq3j4VABxDxmH42apFCZkzr9gMvuV8",
  "key30": "5H4ZgQZEZay8x9LnksuQQN9X1kLTf2K4bgkhiVMewpNcjExZ2ywyoyi17x2Zktqnum9F3r6nM2KzKcJSWYaqrfTn",
  "key31": "cf9rMrxYdEc8C9bMX57GxAJ2QEsa9oEHi4c7z9weZg5mFVw3joZorVmvhs4RvFFs4Qu5zV86ueaYJ3aVuNYx2MR",
  "key32": "ryNoY5bzRzRCjgduR8V9EEki8kkVmJKM1t95mLwU1jSTFavbaC4NqqpVQJcmUbP18izUpVyQKPEBtn6pJaByTtS",
  "key33": "kVKhrp1Dtv3joeKTT1JGigYuuJxFriuqfgk9FWcj1XrDSc4Wh9z4AQLsxnGT3HBXyCrxQAPYFREZJNBeoPXRhub",
  "key34": "2hFdWZ8HmHhPmmdQVBJdK8zySYErtwv3M2End5ja1PGVbH48FyRpMnfgiG5YhibxdJ6Kji83yHbGj91XSzL7zRvQ",
  "key35": "3xRyvz4rbdA6GuMkdNbNWB69myKn2g35APyJhZfAjgr4nBM7JvcjazNpaRK1akArqaXY2P9x2cHHrxdNDftab4Wm"
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
