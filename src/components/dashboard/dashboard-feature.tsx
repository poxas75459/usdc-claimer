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
    "3R7NZjUQG3KAzy67P5ZMK2ihn7VTtVMHaFCj9Uu6V5gszgnzYvuALZXWF1Hw1M5P6qVhFioNhHJBfWMeXJTEPYXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H5WwNimPDhpQyteVLXNwCec8Qr1j3mLmjYuf5k2ZRmoYSdNaVGAUtKzG5UcGBaYACL1tuxofsUzWLeAHTBWvdcW",
  "key1": "3Kzz3eak8rPmGKw25gANmrbgpEiJ1JtmH5JrBC4fsiLZjRtKNwgjHLqcgAyXkUdaA4oYdskusk8id9ytXEPNxWGt",
  "key2": "3WpSBM18Lw695d8VEk92NU4CRy4u51PaVSjQv5VfZd8gWFqhsLsapUCnYQqgwtQ4iacAY4LvncNLvZCxpZ2o61CJ",
  "key3": "6e9WtFMxZEdTMKDAG2QGRPGaxJUbkkgrnkorF4M65VEc7Ni5kwkgkxspbKkzRXwrF3Xs4DqXCgHieAuNhwob33S",
  "key4": "4YqioxabS8R4AMatrL28mkq2imcmnVtL1KxwKK4BPE3tfPnvqnRqVgTw393q1VWgUTrfEoQm9k5Jn2SbMNLWih6b",
  "key5": "55R4URuoX8mvr72BKZ41XSgF8HXaKJzivKNMiLCqf13chEYMokw8mW7hyzMSQyu4BHREv5YKsscVUADcBDRzefEV",
  "key6": "2AE6BFFzyyxG64Ho1qtgrnGAMMAVqf9A9NAaWPCTCM3tBnGSz1KUbUwXNcYLLAPdoYufBWu9nKrWwTTvXtPL3KSn",
  "key7": "66dyxbi85woe5AqsrbpY2RtwxfGC6KBbRyuJeW5itWZhs5FW2zg6q1JKTFRy1LR6UhCHVRPM2Aq11PrG6TG6cuxT",
  "key8": "2rMiRRTJis7FdMNFppNaUaGeZ4EFAEuaZXjRaXa5dKHBvCYAYnK99jgZJVqWUY1dpFBKqDkpJxb4a76oWacMT9Ru",
  "key9": "2z8ZnrXcZ3SUensWEnAtF49mjKGAov9VUQdctBZkcpraihUMoWgBf4BX4AE9qP48FwQhHYE8YsgyLc5HcbnAFHu",
  "key10": "4LAwwKZBSZH6fcCeJR4qUtYUQD7xxQNLFFNfd9M6ppodrL2ihRX8i5cMcJTqLvEAqKuHrVaVJf5Ke1KQbS939wZn",
  "key11": "3WFAxBs12kXh6mpfGFcZ3tDYC57zC8K24nYoWmDTb4r6SbPHV7TZuNF3TNw9omyibzvemQ3KmHivsKMFFVXjQUCF",
  "key12": "4z5kEXyimJBxFc4h1M88sWACMMiyvqUtUitebNuB7PC74vCS529e9XUZDZp2VTLhR9vriT4iiB2Pfo5bcuwhnRXu",
  "key13": "4RPUN79osJPrk15wnhLrGy5dUo6zZgv7aKBHGf1nKRCKHst7ydwrmVVHWbhDE6ZWALiAS7PPHeEhXDJxuCnm38vL",
  "key14": "5YGscGqUFX54y9ncywv99mf2fYzoE2ZrGNjqQYGTPnXyB5bXh4SrVUHryJU31Ct1qv5RJFjAaaoKKKfrzdToumxD",
  "key15": "2WiFhYEvGW9AhYj5NNFZjH8tGpPdExzU5b7qLmxYvHQ641qyvLnuAPXarocQJcahKASat37HUMUDKiTf8KsgTZrj",
  "key16": "ru1FCeKUxUvqSgf1vDeh2S823hDAyCy8M9aFPwYta69FLuJtdieinEoucSyuTvbMu5FuCB5pyDZpueN6qzPUiom",
  "key17": "5AkNaYs4hFKVadYizHD5D52PauknthGgGL5BbFnVtApbixATYTU9fULc5bcxKJy3X6h3CzpuSvpCcJd9qw3DzfWE",
  "key18": "3f9tp6brtKVoW4wkk8S2pB8DNGLAkY7ohCAwmrMBykz3gncL2J9pFARU9mhrRMP9GKCMPLT6URwGYxqQw68nPsJv",
  "key19": "3r2KuhkBG5QGgeVF3TEbnmE9SfkQN9KjZnk5fpmqwidMboGjXTDkTSE8KdMznpVVECKRMS3soE1mkN4aKf29exdD",
  "key20": "5FCXkyGYVHzqgZUL7kbUsra4MYchj9DaZFia3YT2qeF6mFUiSQLUx81aiqvpiYT87nd4yC8QaASrYwhozsSTGWpL",
  "key21": "5Kct1bzJo9CVubkU3qu8eSkP1gYGTB3YWmcM5LMXDEWxKLGeiLEMqvmZUpXmdvTvEKeuAmJKkhxnATHnqUn1P1zV",
  "key22": "2byaUBNoU7F5UVJ6e8fggqAKTXLCJFA1ppbiWjv4jcWGGM73rCQXo68uqDnJdRCaGkaq595pcMmUU774JrHuGx4q",
  "key23": "4vKGiYq4skmXMhC7Hmzx7WkUJVWmZibUSzcdQZk8yEsChWcbGjayZfqxwwXzG6ZT1GgNJk1xFW7oFNfgVCztWUcJ",
  "key24": "KE2f7ASXHzofyRvVLHezRw3zefYiBAHKGWv1UBcpy2b1461G4GzccuqKNrVrdgsE3DK89umZePusbHLpejBdpGy",
  "key25": "3FAvGWUyEnT8Jcb6YTUM4RSEaC52BsKNeiQzVLofGFR3TRLMMSNt3jGp5pU74J37PQmaCWme3NfDdfWRUrTjPXSk",
  "key26": "A3ggPCtG5hTAzv2kfrY62L9A4G64nZJssUox8ytq9NWtmHMnCcLtELbZQpSa72Sd5nc37eaSWsmxy3uJ16aWAnu",
  "key27": "4GGRzJUNmZSARxgqhT6qxjbTzDeEzU2xaAbrmL1GSHbjePWvxCpLbBDE46TtbKnYKHsHyUXJNRTZSwpXzFQSFGJL",
  "key28": "54sDXA5A9eSGRwoLUicyKHKQ89JQmZsSjCkgkyFsZEf11BB5rASX5fCs9rRH6N6yGC4QLjbdCtx659pk8jBLNAUv",
  "key29": "4Pqya1oWxbR6XXNE8qNXd7vK3DEPCJzedHd4j9RjoaiqNYqgauGrojBb7YbPZtsV8z4hKgLTgEDyDVYyVmLUuqh2",
  "key30": "qfCdQoq8zqsL3aAGmHchbQb5spEi3CdPuS6tQ9NyHnipRqztVPd1oKswtZe5DWyiaLBhFukju9D1LQejWj6b8So",
  "key31": "61rqsSqhxn5LUXareRPxprtuW4YvbeMLMBwiETua18gTAkDVc2YnRtWkkjRzLgtvy69sWKe82qqGMF6TNDFLiauC",
  "key32": "3UWskBwC4Sf1TTAC1bUtpQhz59UKa7YvNXPbL3ZZCxejYPnKK3vGPb62Cwk9YGRXWAWpfm6JoD7zcVgpr3Kd4GP9"
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
