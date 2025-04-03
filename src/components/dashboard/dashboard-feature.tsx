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
    "4Dzoq67HShSLyrac31qfJ7rauZ4anxU8MU2AP1AXzDKK2NrArYfiXZAWoq9Sc7pMUqPm3KRqVbiXAtCF3H5RQPUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bdB9MwDpPh7MeUaegV6B8ZyXdTD1BvjCb5yZ5Qt2TU2wWX5U1B2h7wejrQ6VwcW8KE6pzSN2GpEXyh6Vy3snPqq",
  "key1": "5ucXR9yfau267QxwqgqaiqZYA9D8Fky7WZXiYgZF7rhymwXyVsLQVkYBUwyBieZGZ6E4NJNxs6vhmoPXG6iYAEGB",
  "key2": "4SrVSGwE8uXC8rEr31vZ11MNvQSNryfCJYi2WwDWq4X4DcDqE5HUjc3DKVQEKx85bd5rkxSACAYsBayEjSsSJgjr",
  "key3": "2e8SrdUWun14nL8R39ncdJqBcvZsNfskWXpCD6cch1rSwbC2SQWm4JK9iTv2sdEkGD6TTcWq4LdmcccccHLCLn7N",
  "key4": "2qECimDrfbHUSJiaJm1KhwRs2QBLqLb3DG8KruyhfhWov24BrBhRsEvKjBj1DqvJWKKUZasYvFRmnJHKmgYTAacG",
  "key5": "5bt9TtgvfQ9WPEwbb4tajDoy9HSJicgvDa5231YFzNDcxEuSocDUwnfTbt7jgrwU6PTUkPpw3Ea1mE66zEcuKDy3",
  "key6": "2fQEEjv9cJzRcrEAVfEifDjsxCBcKMbzLeh16Tc1Bedw38Y1YW5hmGE7FTVCMkYLVKY15HmwTDedja3wU8fCeB2S",
  "key7": "3agTotkuKFfPZStNvk16pGZWsQEWmLhyvF7QmNedzmpjn7ejekL1AJ3b31fj3ZdCngLT75hF4Bu92rF4nyphVd2d",
  "key8": "fh4MUWGBin41SSLpckhmRtxfDjG8sRyrzg2HKqWwgQ9TcTsuPQoduiye2ZdPpqgJR8B6WTHuZhFcNKyxaBXBoqr",
  "key9": "2xUmbj1hu4VQTbAGtJoJPJXhAmPdje2sPZJjbSgrWpP7D5q6D3C4EPaSn38qMW8drKV9BL63PHR5DxscqYSVCQ8A",
  "key10": "2UTuTFf915xCTB6ZrTLCov2MHjsnp9SqHBWFHxXmK9WinPAFW1ikExLvPMo3aY8QqKiBKvnVxJ5tbwT2v6nqNCQt",
  "key11": "2rPDEYkTJUnwHRe1cY7rjMJqcFwFY17EgaAoJFPsgP3maUJCGd9qTrFmFWnNiwidYQCEbcpSzt7SJJPA3F5Z1kLZ",
  "key12": "2Yb2m9ebX1iNkr2ivaqM1VbSLaPhegAXfKEjyBVqCDwD16ggRqJUvqKejcLtftsebow2nFpSqAVbrPCiq7VJmVTX",
  "key13": "56oPZBqty8EdVqFVoRGCyzgeH5MVqjBT8trkQuL2J2R7NDmLPz7TSSojRJZQ2TnKB9BN6RQnELZnX6aiMTMjNghw",
  "key14": "2ozMWcFD15mTEQSuU2Zrod1uRoJqLxvvXffmg9J1qyPZhAG99LwHBKPZovjYsZPawwcqvnr7YqYZ2sqAuExACsz4",
  "key15": "2yAaoCCo5piLXcfgiRJsyubKm14XdW1CTHzNhVQVprGXDA9KwHq17iSZzMZj8zXjE4bc55heczTKynJ4g28vx9YC",
  "key16": "2C9p96i3DNmHMY6tgVtXPJfBPrEA985YdV2HUQtnLU3uwFmAAAcGsT6ecy5BLYTZc1ocwL5z2MZBpHJBnVY8Lhb4",
  "key17": "4nH3wXEoAQWffmEzX1oa8Xo189aePxYfJ3a6WgULCMtybgtq2Khb15tLUZ24gySomVGPLXWBZorcd16TqpwMWmxw",
  "key18": "57gsPdTQ3ZogoNbZuvBTAntQ6dX46Ki7A2DocRRZ5tPFPaG7kq6rrnPT5zkF3YX5dqGMqxgHBMFqACjq7o8dLZCh",
  "key19": "34kYWbQUDdHq5GNeQ1DLZy9JXhuBRL3rPAVWPGZeYkUV7aWEkxFsBmWQZDwM5sxDEWy5mtNCynikWwZTZvLJ7sBx",
  "key20": "5xwwjfoKowTCbfM5zTW3PjWVsefgM3kb7sm1sLvH74pksJwQZpgLBPi15pp4N1M9oJyE6KdWYUXJkXsnfZVSnoes",
  "key21": "3J94f9pwvBsLy4XVWf2qiQXEZqHunXM19WGKcL8k4vKbjddWiXqrqJcc7ijguddWoEC81yQboDVhGW9uc9vuwJaF",
  "key22": "3JWvwTyvUtut2q8vXkMov8tfBb8pZQm8hEYx4kRubKqfykfBS1oFLA4LpHcDkdidsun1bRDtB9GV5QRTLzmHjTXd",
  "key23": "4KoULkqGUU7xqHdYFswxUR8yzFu3nS4wT7B5mXiboMFyjH3bWb7dUGvSDXus3QjP7WC7Vzb1RDMTHiiGAcfxAY3z",
  "key24": "4RoXft75VtVw9nCmkZ5mk644KZ1Mbyi3x4pnFd6hbYvqwRgfYfeQWFsYTkzwwVitYvNSt9NjY7fCnRtbvbdXfjM6",
  "key25": "35CTcqBKKvW4UgSD7g7jXvhfVgUAhqiUUdNhtNcywadQsUP4gAMf352sxftzTwyNDzuhMdtFmBaDXycSK78QUbeC",
  "key26": "5PqRtRFJjPjWGydyR78YxHWBPzjpr3mQ7MPjCeJMHwArQrHSAMZLyJQuWr5wYzYHGJ7WKbb6sGGAmBQXqczLQb6z",
  "key27": "4mLWqcwBMTAvvhcMKUAJvgGorpQ8pfRVWDGBbUcAX4su2zVRqVu6HiJVas5W94NkWhp625S1BVRRY6mr6mHtB3pE"
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
