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
    "4bUyr9hmBJCg39izPF8zMdNXkdSEw5wEoNzRX2Tb7qTbAVUPLaPW3wrYW9J5hCh2pdDqDZceJsryhqsZSNPBbdph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WzuGbJWQvzHYfvpmnu7JCVuSY9mtdC7esb13f1NtxS3uT1yc46wZh3B21k9awcc83t83u1HYDB18wH7Ht9HjVY2",
  "key1": "3kbCLgyc5j1mqb68YjaGwSvbPapHJ3n7TbYxNTrA7S8vif2HFBL3UJgYbTiD5jTrYxPyv7Cb1ZppcUVH4hAidkd9",
  "key2": "nrRcoLcthsyHsRKPF1JUEjS2ymXWkJHWqHMVpqz8d325Sa9D9y8nSND7VPBad1BSiNbPq8HJmjqSVsH4Zv57MTf",
  "key3": "4hhvHeoYYGTBKDURXrzH5sGZ5wRaQoqfUFbuvHDrZ27SdnQs6g4JT24RTm7hRgRYadrmYedAkV3TLhePfx2xBskL",
  "key4": "RpoJiJ6MC2oSNbLrGvmBSPd3GTToU8Xy16Sxsp5N4u5eZ8jHNZJDDb1LiuGxrPTXQJ2jJTJ4UgJXk9RCRccVyh1",
  "key5": "2G58nRLtBtPL6iUNLw8JqNq6kA6QyC4GvXcJekD3WYtrZd6AkRYHdEtPPRkervJpMa6Q9jLxEQ7xE2RXwWvYsaPd",
  "key6": "uG8E5Vjj7H8GyawN5TgBPUUPi3tUBhPaszg5tGceNsgchpd8aCnvJdonkw1R9BD4VgtiVgmPM9oAeVJsZgKeUPA",
  "key7": "43ZgXPNRzPubWpzVbjiVv8K6V27fFc18iBA5vwyx5S1tyMUEeNRNdyPGCQhP6YWLVcrbQrsB3Dr9HKxjJqBYVt8f",
  "key8": "2e7fCXbrWSVbHCXNgm4eaTM19vB8Vncef8aimSQuQ5p3rNwEXy47vHkVdzdSH37HwGtGk2zvVvxUAPEGGj2ns5rJ",
  "key9": "3f8MwMeUXkujokN4WkyAxbTyftq2X5usHi5rF9UrcAKztuMkZPkQMLkp8LHhyJsPPfKXMYTmc7Nc6ZpXYg3hsjsX",
  "key10": "26oFwUA6JN8tgucaLQkP9msLBZ1mPfMVSFWXSaSBtp7DCvR9msfZPQUS72jy3VagWqXLFnvwH6XEBRrVyWEM56RQ",
  "key11": "jekipRVgpQFtJukSq38DqCVbjVbBxr8iayEmXy8nWvmtHq4SbCSAn68X33Bw7o1DCeCRPP6C2sK1XVv8EQCy7JM",
  "key12": "4UP8G1ahztVfoqioiZEQN6kWeDUEparuNY833ykUUvy9Ws9ayekz6VaNfLAzYVjxdPHzimRNcpjXRTnt3UEB8RcQ",
  "key13": "5BZoiM8aotXMKeYyj6TpVL5FguzvQPmLVAXmNPu6CchJGnrKDkJMGHSgGP68NEPwBmD9KRTPeEacknkbEds8Mo6",
  "key14": "2DpA7v8SvcZbRZ4dao7GvtK6pJYnvKDRt7m26JkisxbXmkJVGhSxU1XYJNfgoLLfpRXLhTJcCZDMh2wVi45hckEY",
  "key15": "4a68WU1jysfGX85KR9PPWv5pBTFXVFxPnA6ce1tDpQSpGnr27UwZG5C7wCZnfpLK1M9byV2K7FiNaaTbCSXx6u1P",
  "key16": "633YPtaVRQwtzN5vjLhTEUjU1qFJV6swaYKGFPLnFR9meWi2KqBFN82tEciBFZCsduwBwe4JSYuHqFDifPi2mHUh",
  "key17": "5BdiCGUksnhZSefCBTxbWWHXx9HYK7cjkA5ZjBNvbmgowUdKDdqZX1EFCioiJgXaM1PyvUJ8fbPL6JsAzNx9SQQx",
  "key18": "5X3d3mge8FMdDyECev5YAEWMPU4bvY4TtTNS4z7roVnK3MXPqihWVQUmuGv2crJ4Z3r542zRNHVCppw7UXZNkXHz",
  "key19": "2T9XyUk4z4g9qH4F8LyGs9HMP74CFZ8w7D4SCnmegmcpCYP6bEGBMZNmcJLuciLcBrJdQUR25U6FZ57efBDcXvjC",
  "key20": "2m2FSDNgucJ43zqFKw6esiST1MJs4MUKL7oqwYqv4UCt9t64tPTFAnKSrHDEPWKS91MmUqTmfSAmtLsZpVPBQXVy",
  "key21": "58RCKyZM32yp1SJPpoEDkgFUtaokj3LEoHWm9w4fmKDrzaYAJ1LZo1eCM7EybmmJjmK8Dy59rjETu5zTtXvLkMmV",
  "key22": "67dtZGGz7EREv1c6o7qCfxcYB15HvT25LNhPa5pZXrVVRYyghkWJFSaeorwooSRhdXjwfw4gZqFp165VrKE61pd8",
  "key23": "5qbjJFPZ9kuaeKY3en7iD42YHwGAFrnDwQFvmRFvjiUudg5GySBmVYxa2pQe3cEkPQfm4SqJkiUSVwGCNMTYFNU9",
  "key24": "3MrtkjwwVbv8zyQWzwcFasQ7c99BaFfSUBcCY6ZbADaW37aZmGjnH2mdZhkvjGngZAUC93Zi7TGJt3JbqSNHWoeK",
  "key25": "5hWfJzoWgK9BuKYYLjBGSTxbydQ9u8mWHAN5gbaMFrGzEekTYquLzkoZQHrxtzZV5ywPAyXTBxsSLuo6Bf85oG7",
  "key26": "5c6qnaq4Npk3oAAQZikiELy2xsMwgjAmwPRAw4baMsvc8ZgBSi21p8gzGWsf44FdpX1eUqnjZ1k5V2dsxSJfvADL"
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
