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
    "X2fqVygDpznwiPWfze6GkMN7sXWxXmJRTCgj9v1EZmg5M9XH6DEkR5Q5fTp8fJNfNxvGU2CJGf3Y2x77WksGtig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A6i6ePCyjt7DcYu6Yfc4pHLrYxUvaxXidRvA7jnWZ6ymWnjaX4jV8o2qmvQiEiKQa4Ahq1an9RYi48TuD94bnkH",
  "key1": "4HcjLUPRmWstaf8Gye12KgRnY6qw8jq8ZM6NE93FRCKaVT5MvmCgXPepitLKv8U5USdLw1F8Bz82FysRk5vr3Jqj",
  "key2": "iBejgSmz7y3NNrVBNrntzxwdKZSaVPcXUXeQz5VgqQkwMBPrPBM5sm4tN5DwXyczQHEZWHc7xKTnjCkDm74bL8D",
  "key3": "2KR9ec3RPKn8ppHDNKC6ynzE6fvFigZ5zJUBGYmCSut56jXwTyUfbim65HCnQ9Mk5RctZBLZTyMecFDqxztvfTKK",
  "key4": "2fjSEQ7Q4ofGk8f3Wv5Bk7P135NgdpG4ssxtCWwoVazgjbgaX1pJuetnyCWvxZhqw3cxD8PPmEQC4sQv5eZvCesg",
  "key5": "3boaMQXQhqWitrmaYx1DHc6Me4xkTsAS5gRmRKu1FQCg1YtAtryx3h5doo3Ct2iM98Lv9hwa1FhmEJ4Tu2HgzPhb",
  "key6": "2r93NbwFVcsw5ocmWgvBqbcB1urbWxZo5cCk57rS1V1k5EPbaRmsWhZoy2KNjcuVwaP8Rinos2YHuB7MxCmdKwYo",
  "key7": "DYQ7WC38Gqg5K2gLPFBtiS4KWe71y5XwzuvdjWn11fRbfTzBzACJPtbbRFj6EN9jMrM6UiNxob55oq6rmoHhojf",
  "key8": "4ZN7t9XTwWfEREXyswsgd56Mq7BqKjAMQpFkfWoQJJjdFGvE2d9xuXLRC6whCVbGJyQS82JouNB3aZyZvuntHab5",
  "key9": "4ugn1cD2c5kXg6n9teFXjUK5yFied8KTNzfh5z2wFH8a48cjx3hUXBvEo5kEt2tvMHiXkF3JGYaQYFKxZCXX16Yy",
  "key10": "MhVWcGrV1dnauwNbZ41uRmWQLwGW8fmCD462iAy5cDUzeuNrAAc9t67jEA14KTd9CBdHVL2oX84Ki9zRRTNnxKy",
  "key11": "TSvXPvRKK7JWGpt94FJ5oTuWpBDedsLjMDfVPQ6gPmRhHsyeC6f827kZ16bCJ9r8CsqL44efZcNo4uCEqLcUYMS",
  "key12": "3N4qE7MubgqKKXT6a1pyFP4Co5PNJjW3s9zQHLmz2MdFTHKojBCcronTMqs54ftJiRD4tDVMBWCxXbs2kXDn7jfV",
  "key13": "5eMAEyFnt58xnMJkRi8FrSXcC9eJHbMqyAiEn6qkECB6DVAi2thfFRTnnR9yftQXKXTxccALruzmhg9AdgWsMSmm",
  "key14": "2RcDQHrZraD1cjPgj7tQakf6u6WSnzyURgtYoXXgKESFEccvVgTDekqpZzRFybzXFbWaAz8dLPAaMuUfqRZxxzPw",
  "key15": "F65wsRhcx4zgJrFsSffqRG4tsXxDXGa1yPG7hB7z7qZ7BmjZTjuZ2db4vKVbNtKW4o16v2Z2AAJyjyVxt1UDy9h",
  "key16": "2jAaxBHm35YtdpqxngWmoZBDWLm6omDUL5QXYxwovsh6VGaeDnb4ar6L6UpkcEoetmTtVQNg9iabpYryjQVC5BW7",
  "key17": "2eB9xA9cCgXq2Ur7EEbtsT6yzXgdYjSZznJrGHLqFvRghcGH7QHQw7DFeRmvck83WUUSq5WLRAwWk4UUZr7dq4i2",
  "key18": "3kunbDExHrjZ7xZFVsncA5fmBEPuUg5MyL8UdWxjZiZqgWDdN4push6wfSzD9ommKs8QX4yWZc8tG35DE2LrD1S6",
  "key19": "5SHDfMyX8UxhSuUHYjHZCCRPNZix7jUb2c5XELtE4fmZDRBMeWSd1ZWgmoA91zkEFg8Hg5vfjP5bjo8jP4W1RdDB",
  "key20": "374zahRzXN8VWp3bZ61SNqNDpSdsu5eHxouFxyiuy2dnn5SiWf9LoqBWT9KbG2cNwk9SJ3MweJeczfKfRKYy1kz8",
  "key21": "3xuRxzgLYouGRavgLGQFRYLZtaMmpvPZArM7xj89FpjD6mkHzSx2kBaqcmwbwJPiyeJ73BjsSvL2DuCcQQhJDU44",
  "key22": "4nzHYaRQ83RyFdMkLHdpKHvBsHzRZLSPbWw4xkAu6swG2Yxpf4DtE97m57mHiCEeWyoVmcV2ApuKq4ByeCVWJpTg",
  "key23": "3jDaTUddPkERLYsr8z4YUmCzuqtaRy4iXoT1vVMfe9SWW75LXCWKSTki2r8Fxx7Tzf1v1a243hrxkzQZaeV1Y8FJ",
  "key24": "4imojmLDxARjnMQKzBHsQoYxyLnWD2gF8C1LbNN2TQhJD4is4biu3T1nUjhBqpSwNJmdtQ8r5THMXvfXtei19jyY",
  "key25": "5Eas5VHERgTcph6ihd54Wj1Wxb8bWkiQW6SCRhiNvGb2YqKHqGRWengBakrPVgQAwJvtGQnxhDrK5EuLzQPSBHWV",
  "key26": "3JfPeqr6fHypanw2ZcYLHBj8xXRZhw1wuQSrN6vrHJADGDEkP8nGWreB3x3eKQq3DWvXRWHfp4TYfFGWDPXZMEiy",
  "key27": "kPcC2re81vUwkiStD6TkZq93QWRMFvwcRjfAqmzaUSPs9NoiYG6ZoXyogxYmezSjnUNBY4xPEZivg4sJKK2qRVt",
  "key28": "43sK814uNkNY5LkmUSsseocPLq1UtnP6pE64xTJ3naP8kriaTeAisBCwiHahCMYq3GkcuaVpcn2vxjEoik5TQT9b"
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
