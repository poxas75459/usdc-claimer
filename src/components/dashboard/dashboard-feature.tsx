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
    "3UhXj4CA34zYVrcyH3CJ1drSTwPpeKLmvqCzZKANbYaNs4TGju8kmnEHYWrMi41oMa9nfGxRNhJAWBg6mPktiZDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UnXqU22xS4BpX5gQSn9YR9bLBQgoZHDUQ6XAbMoTaZJecFD2nJPMm6RwuRsFDcYhAvscE3VH1haECrRXUDirgwa",
  "key1": "24fe4L1UshJQHwgjaGfTir38x8YNfsv5bGMFkurLHTmojxL8W5tNBqNBzPFZMUPiWvdLoky36nyQ9TwpPZaiDxmH",
  "key2": "5Xt5wTVzEFbQ5aqcyCgt1MRFr8fCHZsqXgSCDeb2oxDosoQdACyYrHJ9tYNs7aiKvKspCSuuGQJSq5AsQL3s4Kr5",
  "key3": "3WZydNWbJNaBS5GUE7RyhRye3Gvv1vokHPHGa6SsNn24ReKBN1dS1V6PnVGMssMNjmgQHzCRRfvNmc8LNVauthkW",
  "key4": "3AiDa7zDEWB6bqHGk8jozMQU2Jpcx6x7HqZ15pcsAz6PD5Jy5Hff5ekgqPVhQarNgmvMQiZrnGrjnwwXS5uu3DTL",
  "key5": "4twNhNC5Q3cR2ynNKqbz1DH9A52fbxgbbE2qG7DCq3H6gTtuABCdSizAygJV5NwRmMz4e5HbMkQa28azyuhuarUX",
  "key6": "5PQpgkVp3xGMK1PfKpbeammM8jo3YfRKXSEMSMNoMyftsgBL7JTDV1xFEL7e3VY1Vj67ULc9pfwydEUW1PmaozDc",
  "key7": "4yYpQRJcgmr5dXYrAS7hMisrpWVXmGHqc53A9wF3uFQcgk3scHYmnoUfzdHLBoCgaUpErMdBAVyfEbMgiw9iZJTp",
  "key8": "5JyELHgpMzgNYotmNBmcPrjDuSzQ2RjvKTAw4ez8mNhNQRnc88QgwmbSpjxzyvQzFD15iiYuDNAMSQV7dUZMzCcZ",
  "key9": "3YwRxwC5NHHT4Nx4TYYfyzF4Zy1AqBNMWdCxRYhKJap5jfuxht9qXxxaJuqHiFQpoM6TM1kSBuYdUKzHjopRU4Xx",
  "key10": "3HjFuabwqWYWUqnjdqwukxiJoGncdagqV7nvc824MZKAze9RLsUxfXrDnRSwDergRJofiJZvdwxbNVhcjnFYumr1",
  "key11": "5Zp2hsznhXpfB14p9NPFo67YRcGcCnMvZVWnqws75gcuytB4vZs9XJNiDu4a1WmaBKkepdqoyuzMfzHVYBuDhciu",
  "key12": "419YZWHtkQgim9ePb6t8EJxxv5Hwnp6JKwR39aZHuxmbA1Uv1owobyCWnoPy1yXA54ueH1A8bMw1VqNebTJ7mWqA",
  "key13": "4byzuaF25nispMKB3uh1mFW33dSTo6YbNnZ4vtBqQqYGE5PNsHyB6RBPy2fTbVo2d478bwCs5epmXMmoFovhyBHM",
  "key14": "2Z8SLkAxDd32wDfcCTva9tAVK5KZguXSQfRAhCFBm7xfkp3w3k5JpcwStq3ZUpEr1drTiLBNWqpyq6ysVMKDpUwH",
  "key15": "3oN2JEhQ5eEnmh2Ez3EBve8XfeZf9bAKRVCNSVjiLLEHGJSL9zRmbabHnFhsFyCgUVPvibTz756iKw1Jmo4P6kYT",
  "key16": "2VZNJHunYB3HETDcE5NUFRXigUVbCe2kDFXkh36NvsDFtiMGWq6VKHaR5xgxuYrkwmcCGKjCGGVthDhYSBs8GtzG",
  "key17": "5vh7aq53Z8VuvU4Cm6hhyq4zwMwf4ZJtNNw3tLqHFM6w9bkk9yErKV1H6JZTz3xdcTyNvkzqB2a2UGetyh5Mt6Jh",
  "key18": "2A1nQrFvKYvH49JvUTuW6QKNKitBHk124BNBnTqcNRfdSqmcxaFojfAerkuHy4LNo2aoLj7S1z6nWtdNRgV3GfeE",
  "key19": "67gNZdoaZVToaxf77c6xqTnkoJ4ZrML38xd1kD5JQpr66B6o659wuT4JarBYAnC68A9V42brLzm3DTncHvcUSmsw",
  "key20": "4NZhYVWH8KuvxcJGDX4h19SbegPLucpzjyT2w94DP7MbERC5tKvvnYciof1VhtUXQ3rV6eRBszfzZEep5XY78k87",
  "key21": "SvPzWXLhmAtJ9yfA2GJtMZd5p72YagzcJxhEMNExjTm26LJuK7mA7fuVEk8xybuuSYThECxN6VzEttAYZvroEGB",
  "key22": "2a58YcQ9YS1mFmHHKEgtMM6dnqpdxH2MDZnQbUqyjyqyxAS1G5vBgPrQ8KgAD8iMeimR6oXe212Aahzv2tJN9PZu",
  "key23": "3GqLXxgfFp4qZapLx6ch1daf5qu7XMuipXPq39VrnAHGWRyCMEH4a7zQuAQaNrdLQbL3LTXEWS2QPvGA5eY8oHxn",
  "key24": "3RTWLcFEEBbzKZf586ih9qnKpxdENuAHRyLC7k8z995RgVC3rAuLWyGScpaY7NX3VizMLj586LGK7aAhvynZmHQt"
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
