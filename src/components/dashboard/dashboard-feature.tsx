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
    "3qMD4Kfic5bB9RxfBoVJRrkPCfJvu5xd5omsisQDBus1Xy3cfKFhwGgntq8s2miMHUZMSH5u453QZs3mZGN9U3Jr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wo57XaW9bqgXtP2xqFBdLkpzxELnpj4EjMVbhf5tEWT2H762FxK2QBcmykJZpfWk1z35eMHbDF8c6z18pALfrU5",
  "key1": "2ty8Ai2FyJddKaCkLm1s21H7A6hXPWfCeWvw5paHLVt7gwNFSA7fz61TUA1YYhGe6ZS8weggfpzJZ51UQYp5Z1nB",
  "key2": "3wdgjPXS9Pi6dVToNV9icMC9kH7nYNTgcFm1GUJ7oV3snzuxHszVH6VdkuRGDayCxDfVR9gDF5M4iNDmjpzAcJTv",
  "key3": "2RaaV2beL3h3GJooCdz4U5W6WhMrrptTWcfUkPLqc5jTNVEBBJKTnSbJMpwNsnJMfuLkgi5Z9i4bLgpyGcoLTU3q",
  "key4": "5cEHGSyL6yyh3Y5pupmAbXgTe3oLDrXA6Mj7FwTNAfUF34kUtD2yPbGytpnjpKUjubfC7jLpZUEaTNZAmCtPUX4a",
  "key5": "5n4jry88wc5yNg9DRo56LxwfmKxMAV5gek8SbereNdXjJ38hrexXFAjm52mzC7jGwiP3soAu6L1E7s4cPACSLTR4",
  "key6": "21SYH3tYhZDYUQLAQZrLbhS45F3CzgRsU45wf8ziWbLM9oz2TKuXdgZvjQAQYKv78ipX3FShJu1MjwxZL1iTXzZh",
  "key7": "4JjnEA3EAJT9t1MY39R2zgn7TuPQf17zQ8EHNkmNiQVFhHzMxp6jiiBRPUkBh4dDH3vpZXfQskdKRoEByVkFyfoH",
  "key8": "33sN2iuuZhn5fMikfxV4hXq2kbMTagPhQu1vwUZcDkuhFTS3tu9Q3b982DVKMsiqjLAfw78VqcPNHLWizvp1nHaG",
  "key9": "2LY1HVZDyqw7XrA8WD8S2wzaKw6sA5gLQb3DQGQHkfmxbR3tP1dgSMpXeWYyxiustryxhofS7Vf8Unedod6Mh7YY",
  "key10": "5f1TASbScTHd256FumQsjDzqfrv56pSGg5Q9AmMDeqXhpfWP283LY9A17rRdeEEgK8m9B3JCmzk7PcEzPNLj75wm",
  "key11": "2NihQYsKx76Li1EV9UznNuXk7RjmmAWF3XTQaNkao5H6CJuWpNv6q9jWDWBD6fpAUKYseFZht1e8qtCGnrmZQ7hY",
  "key12": "52Gnn6MGfbQUenrrQEJdVbLdmCpgfLaio68GixHGzTejfCVkuyoKjdt5MeNayg7AiGXw8og6rHKYoXw5amUo8xEA",
  "key13": "6XGvifPjo3kEpxuLDBDXSRXwCNHqqebyYZnj5awCxv4hfwajyTZBmDJcqas86U8kh4kqptzsBwvUPQQnHqNUhpg",
  "key14": "3KJfhZ3md3a94EecGR5j67j8MeibXF7McqdHTF9B3UUcz5qPEinpx6TGBSCbbJtH9LFrxm4JSaG7UGBwnAEB8QJA",
  "key15": "2RHMh7m6yFSPvUnLbhx2pqCnQenfctB3pjYgxNZsuDKqTrobDPLnsvuDzUaQzxQi66dhaakiyC3CzucbWrVT8AR6",
  "key16": "2wBdUkEUUKFK83EWeikqchCvgfJnyWoCPpkhcNWcAnzDLGVmaZrNSr5yBGL2pZ8CupNFQqxYbAzurVj71kSx5k3L",
  "key17": "34b1wwpYRzV71onDT1fcycJYkZvkwnE92yToQZP2FBMrRTgGoR8nw8RfgdefDtD1S3BQrvTUbj3acYHETdcKjddg",
  "key18": "64W4SZMYGtggsgYPsVdajuxowBLDpR9Ei8H6XpmuNDZe67NrqkJpmJBNqqZjzngTgvyJXEP56ESWhgo8rtoZVruG",
  "key19": "5dZapKjVP5x9wehupwPFPkWVDhmNuWNCirksSp5Foyj1eNBnbwPAgZqaF14UrLVxqtF6iShxUyWCGKcQWgZXWxNW",
  "key20": "3Tcyex51oDANGb5qWC2AkS3VZuLFxRvuhoLKwfWgXwVdfWF7NEZ9VSPKJHhjznUoqRpN7CKWr9mq2eqQbz3k2kNY",
  "key21": "4TNvjEiE8uWaoBr2u4CJr6D6cBDGBuxyRdHk3Hj9xjaPmqET7djMnEHGWCKyk3Za88kRgTrAWmn5Ug1KpvPgMp8U",
  "key22": "35w4aBEPXeGBaeWkbqR5dfLis9MyjPjvnpQBPbhRqGQ972CN6REkmeEY1tNveJPwSZAVfK3grQf6NRJtrbQMQ9YP",
  "key23": "2RvdoNHkqdNhaDCMyizjYfxxVYoQF48W9MGSjMZK6t13QYj5KqsmfKBUihsnUiUrRrMvU5pb4hHFwTn64FqGJVUF",
  "key24": "458hF3miDTKU8Ph2JUtxuK96cfV4ZjD8sA3rtbVXLNzvLBDYq2w46jQPBzTMiiEyHx42uWZ2FziDPYK972GHt2iE",
  "key25": "3b7yTnYDF4Cv9dkSupamBuBLxhiT243bWujJ8orSt8MXBi284gf9T11PAfrG21mwb3D8wUY4R8RKgV18GSzzTwFf",
  "key26": "2htHVfEZ8xC9sfmyz7x3eRBQKrcbX93hCu2t8vuLjmbfnRGVKifF9L3rzxV7fHKWLvoeJNwTHS53uTY9avcUZ3Z6"
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
