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
    "2uCsFwugnNXi49kx4KcDux24kyaZVBrnGEXJTTA6MHGEWgv8vPvuoMxEsBHZ3ueRS1x42hFyZjbW1jf1rzrRo5sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CGhTnJWHbyxqkjWUYVW9kiLMf7Z9Au2P3hb5jPRZMKrBep9umvJi1UvnYJYKBX5ANngividxW3ZtSM95MZGF88n",
  "key1": "4oAGSvhxz9cGuMSCBMoUkiXDTYJWAByu2F1EWkPXheUzgfzWsz5a9j19v1zHYmaTLmVY6AzhzwLLkrKC2kPfyb76",
  "key2": "66BXx95nqwvXYvwuBP2bDwHeFWvXuMKSNUU5zFjGyxzG5zhdgDpLntCi9SNh1bnqYN2eaDYJ6FR7ypXBfWLHy3ZZ",
  "key3": "2rEiYNByNSLFscfhEoBHH7VLjyc1KoBCKTywbtkM9NpBYGUvKRQxRBdD9EU7HGMNJ3UCbCREmUY6zDVk8aD26X2z",
  "key4": "5FxFDFK7kTNYXRThNsd1oo8X9fU7uANrVxwNupD5zjxT5K491WdGCS3d82uEw8W3Zg7dQBrxrnKboTZgWSFJjDMC",
  "key5": "2pSixxbEFttAY8cVgB8UoJNyF1SzqrMUdVVosck1pWEs1vDGNuNqzME1aVcSjgS57rWe1u2uPwAoHdFvVwhDdZF3",
  "key6": "44wrmreiUQqVTifjtzHz9BJ1ZjQip8D537RSHTEvzZ4qARzsbhfEFgPhcc44jVUvqnxcdzSg71RfiUzNeKfgwK2F",
  "key7": "2JJnGJf3HZGRAnhLzfME1UhU5UzXGw4WuX1EFN9DkQoCs8cgAjURE9qGujT4Wvr27pj1AciQWoaSyfbSN852FQGk",
  "key8": "5e8GmWyHv5ZA1m3a19FVhkroJmEeC4UZ5HjpN8xaiaWRJ8mNuUWgzQpCG5woDENJFhH7G5TbJWjmrVX3aCDQLGAw",
  "key9": "3Bxfchv5aQ559q6h1tVZKtCXrsDbahrs5wGS1rGNAD8e4Sw2Et7R3AmV8d6nc9NJ74Fbj6kf91UJxXebFkpvfH39",
  "key10": "2E3s18cr2DPhhrSnZfYoDXnTYVGPf9YRF6fEbqwfu7yC6KdvAgoS6JkCP9xoQwfErtcrremVjwdcFDr3XxsNDhps",
  "key11": "4Wtdotz6s6GSStFdj33eMNfMuoDbsjTan1FTdPPYAbGfhLpSfbtYrCcDtZ4LBk5CVLo4E8eHnq3GySfVz4mwpKsZ",
  "key12": "3vjLBncW66K2LUBtbABYoozNACosNBm5S91jbAnibF466XREtLsye9SR9Hfecr4BvDf1wqwpbZbb2y97zCxqJS9V",
  "key13": "4ZndG5A8AqVwHYDiiAuHnSYuy4ryUsDekkfoE3sg856CPuhrFGttkCzxjfqTXi27jh46B1oDHW4fMUCQFnZ8qM8v",
  "key14": "3xfzumxBUBsXY59vGDHCBkoNTeBM2ufnnPN6YaA2Mz87Z6bgZeqYDWtJRCVx8nzFb26Kopj1PRddpkNLcRseRVG5",
  "key15": "5MEJjmSq9pdUFqEESgDUq6cULkamoEvtkNcsCqzNXbgtZK8SmCHoZLJUMBdRtY9MF4cZxfSFZLvawLZEAjoMRMZ8",
  "key16": "2H971i5yy3ho9j9Z6VcNQhjxYMT3dKxHtDXzS1U3hauc2fMaZNXoz9wbTikBDHEHsnswfTGafN7jQBu4pw1LFDh",
  "key17": "MqA7cZK9U6UYkhhmPKEU2jgwzrqTUYV2GWRZWUqW1Giq6uFETdTH4YE5HCZ5eE8ajGPygpVEBQxGr8M63NNyxLC",
  "key18": "3emVgXU3LAzy32wzcgLLViPueDv73xgiDK6afctAYSPyr5uDc66ma6NBFffk67MtkVnLsiUhd37XgK7N4mkV1dYs",
  "key19": "3MJicstmd7ryLrcmHyL8Wzpz3JJHQLKwAUF2miWZcBPcPJfjmz8zaq2121eFkC1h9BYXXhiYQrYZb9ZqxcoLZ7Y2",
  "key20": "3LUJCasqCnZjq8PkjyNN8mDQne9APjo7q6Ep9aTKiKoNWiCrDpWi4ieE7tpLovduz826yNde6wq3XaQTUFs1aX3L",
  "key21": "5Ky7vqqLrp73sjpwDWeqHMkxWr6brXyG2jWYdkbAa3VicLy4WtghUZkfPNvYR8UxLvNZhUGT28P1nNpKFEggAf6F",
  "key22": "5qL8qtxb8hUarVRSYXpEPKJXiFiR4bD2bNTtVtYcCD6GkULHJtmRk8Smm51qLH9GNZawe3KijGugqGHn2wEJZzsf",
  "key23": "618AxpZHnsC84NNGkkPzhbAMM1y2M5LKyEGRKHibFQRyK9McDXBJB93YDQJhp3p5Ne1yfgE7MKhfn1RyBewP823e",
  "key24": "5mRVmN7H2RTjSqikheGDhg1boqHU12QZA6pSYsbvVn1Pi7kS66udHnvWpSzW7fb85f5CcB4BJ4BFWZd46b3rE9M",
  "key25": "45v7XAaB21Tn74BPowbUqR6t8VQBnAS8s3dTqeZZ9kA9PiqAiAz9pJwQfJjb1jN5tNxrqggosKrEYqsSEuFw5tBw",
  "key26": "3as8vz7Dn5VsnSkLaqHVdJryHCfrwx9n4rxsjkCa7YuXHshbXHEbyTnPX2JNBwieT4X8X3JQcUyLrdW2QGxRaMv9",
  "key27": "4tRwVqe2sRDLvrPo9gcZ6EpRBQtxLhtHRUVXJofg1kN7mGyBi773SVLwTfKz8YAudTV9V96mPf4gBV8EwvkVnKRn",
  "key28": "MPsLE4UFvSXxW8H8axr9eN8fsg11rKGpKpZMszodCxb5iDTJJ1vtZ4z7SSknjsP5maHLYGwUobxsHvKQB7rFrE2",
  "key29": "2VKbRZK3T2iHufvmZVqPHwFLAko9C5hYMQgAWo8PLA87jUBvE2JaWUuPoqrY8rXceeH9jEypjxcEnEUUgGBUUPNt",
  "key30": "D3RCSQpL8xsU53buMbnnFJobyW6nqcKLeWqxL5GRzA1qpXUGwS4JsTtt6RNZUx5Z4Qe9iErWQGiksAM6h2R3Pmz",
  "key31": "5z1tPZuihJTkFzoLLwhhpFAGGbNkPQx391xqWvV12UH2LrQMx6TRg66N6qcUikJuyxZxo2Ay9UtHG4tnFdHrLQeb",
  "key32": "4WcGEwtCiVGFXFnR1o5NLCxdj3R6Kut5Rfp2gnxhPndpxp1mCFgouGTCzsJSYszxh3c91VPJA1CApHkRAx4WW3Zd",
  "key33": "r24BAQaoaCptKfcVWwYCmzkuABqWy3rocgWPgzSHiRkxKvoRxPPrdfohuboKJrE3ByR4NJhZAUKXhJWnzCLbgsw"
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
