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
    "CYGGaFd9Jctd2ktkHCY9WiguJv5b9GwaxkaDoVnPwPsWM7PsRcyfCXnDJf588YA1dMFL6xyCvBK2BhE8Woft5Mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HjhEq24GZLnR2xj4JVXovvhMAAGnWf9FQSKCWvL6T2V9ScCyEwEjwqqL9y4YAvV4r5NWVUbiRaozsKsAzhBNT7j",
  "key1": "49eLKWJG57acuUdp2YvrUyopFhMwKN5De5XirVPdiMcEK9D1grXBTXHbeykLqs9fPgYh5oWSB6L2Tb1QZRzibm5X",
  "key2": "3nL9A6WtydZXcQnGQHRfYwCghqTWqqm3bBViiC8ZLPKtNadHM3LVK5wfmhZm6TWB7kzXzXAs33XvCLdvu3hzxwxM",
  "key3": "2bNoAiMKG17RBk5JDaTDNXLZBnaKf38EM8TRzsu97D3kQiYz54VQMUkK3ewWLqRkdXMGw4WaVQxTgw1KZs7AmVvp",
  "key4": "5DkGGGtSAH61tX5RYPSnQvPh9AUwhafs6i4EZQ3KZS5zG96Ra6AWnWDDA3FfSvPBsoTBtXS2s4F968WmaepPruC7",
  "key5": "2ZSwGxwQ887MYXkFbVcQWFVSKQNX4WzpDuwqrjG1y5E3MryWw4KnvFBWKn5ALSHrYJWJmPzX3jxZ7bCXrwji4JA8",
  "key6": "tThne38tvrJpkkGmqWuXWPE9dwejqkRoEQ2pFRmr5EXeqDrL5HeH9AjK5s61EtZr2986Jjh2EW79aeWFbxJ23iF",
  "key7": "2N4Wga3vuAaV3znE6WKxWpxGY48qFJjLVmAKVaCLRKDBVCRPKzgPbDvGsaFHYM5QqXCi1tgCZGaSK2ndFRty5N6V",
  "key8": "63XfdqGZpF5NWpuiw9mFaBFaAkKuyAn9RWywuuC3Fe2wxNdkZrx159Y65ubLjSvAYfkNY9NXCHN7h2FjhW7LGEee",
  "key9": "2yAhf1wj1ExtmwTPxcsBFwggi4K2WfrVR8FNu6QF33pNaiZ6Z7KrRGGhg8bJfLH4YGNwbKjjDUBMgiVyi4vZ1HZf",
  "key10": "5wDfi1xynHZD427uzZzFoWpvgfW2o7FNw1jC3DkrcnKE6tQV36KMqnkB69Wx9wCeDb7Xmt3dQW13mmyLt1pwfho9",
  "key11": "464swiZZ33DM9wcgkGeiKhXeT4VHS6N6grb2bChbhjGcu232QnraTpaZp5teb54ZU1o4hLZNGsjDheuqsZwFAWzc",
  "key12": "4GpXLk2mhR2sQDwLaZMQBZ31d3uMGDzQVPP7eTUt6MJ2wD9ikRPEm8iWKYftR9DSrX3bBZWg6Fq8QsD5NG9fgcgs",
  "key13": "2RyurozN6685ZNpSQiatVFE1uBMhUTGFWYwzY6wt9bdnRB6czUApCzXXsV17eZFMeFiuxkPYws67teSmNHbjXt1B",
  "key14": "3geji8m9YtikrPkb3UTfTYR7r13dJfcbG2AomZnym4euhg6Ue3G62HqCUgEskQ5bM7U9b42yaHwjz5zH59KDjC7R",
  "key15": "4ibchkwQEZPo2zFe3UMuxbmnAUKbofQQN4niUavjzDSsmcXGGZyALCm4YNpgmY8vu91MHNnr4gg6jarbsuQE6TwF",
  "key16": "8HFgV3AQYcTF2eyKww1wirrH8LrMaFVDr8zCBweqyKtrpywfKHxpDrakdcgbT5x8v3Kz3vpYwbKL6u4LFRh7N88",
  "key17": "4U952eS75F39FM8upbKUo6GyRL5yRJZx9swYSZMVK1nBxB3aFTpfotRLtjwacCzLmRGbV3RLtNxfN7BcQbwAKFHp",
  "key18": "5gkpcDrGZvYZMUgR1Ce5dc8Mwy7jUXkyFGg7HkMo1nDwaE2SyTAgWb4S3oyqiX3veZYKMsx5SmRWno1AVsXzugt8",
  "key19": "49SHpMF9Fkku3tq6AvP8nUGRENnXwYSpjfhi4cyLD2goHRBKaka4E5hHdSmpZUcMe1KDVvGXAhcTsuHJ9QCbZgE4",
  "key20": "3XhrqjLaFtnMq6LnP2Gyb1u1hGFpnojJiXhrAbNF5iSnCs9YyTeff8iK8CPbvownq7Wijc5RXS4zLcoFaCQQkuyc",
  "key21": "4UdifEEXv3rbZ32xcqCxmz7Nu2h1cBYyrET1bCM7fjkmDLzCLc5KudHBSRPjWWb6fnw3GMzWPX6PuMsEW52Jm4Jk",
  "key22": "3aCBSTAif7twjRV6SNm8ponBsCtoa2oojQTBUbY87TnXPb7YH3PxJ7KbFoHmLstD23i3D3SiSBppmv8CHCcXTf53",
  "key23": "4NRQzSqo7Kzkc7iaVwWBb6tk4wpaeRsWXUrvtAk17rPXGG6wNgKNpxyHVt3ZGw7gqLRCDnhJrNgp59LYg32NYnEz",
  "key24": "6Vbc1vgjcD5L3cuZH8SVkMLL4146Ds1aw2vPLcdqGkmhAumv6EVP6hUjmaghvuF6qm5DRzCE3FZxQGYPBQ7ZF5M",
  "key25": "3JrZb43PYVKDUwFg6TjrNuic97thDop4w4GdvoePQVrCkCAsHStBycdoyqdm4wYNMQPyQygEdXnwYjrTu8w2Hfvg",
  "key26": "25x8XtKMbt47arfb4dcqqVnzQPXCfKjZyrQADn7dxMTifTeXd9DgB45i3A8Yh37EMzCakpUvUj6Ci2bKuXP7mePT",
  "key27": "2GvV3E19kdLZ6gybVaMhY7fx8PSEwiJB5ifktWdzSddxXUWLcMopeKXbGfTEFGm3U3pgMKrC9tmFxSTTtGmUioam",
  "key28": "wVumnhCqJggHxLB2YTgH6KXtZ7L2w5nrAEJz1obeidsxJn6f2gUPAtrWJCE5wR3L6b177dMaG6bWdXGnsGsWea4",
  "key29": "2ed38Jy9CkrsZa24YBfML71HuHswMLQU4AXg4uJEAPTGzWqZEgkebKzN9HWqZyPbbfKxmiBGx6m678GUhdSusudG",
  "key30": "5MN2m7vBdLCuUfUL71ocUfsFHTg1VLq4Sgf3o7wEVx7icdAtkB7iW7TfJbUAUX57YbMxj6KH5L3SuAH4o3ygHtVh",
  "key31": "2wTjdDSvhkq3cAEZZ8RGM1CFFJUrhJJ9pNktZxFq5nbjYehiWLhjramw6j857Du3TriYXpXLW2dbTjShKQxHX8sB",
  "key32": "5bGWk6J6xZBpD8r4LYJMsLVnx8TrtmDETT4FuLpKBDn3XLoZMB8v8vSmfw44oa9q5xXghPqi7NzfwdAUbDfQNvhp",
  "key33": "39Eui65xpaCdR26AS9zDoBsJXaobNNy4h5xPRyobWWqScToxTUMxWAkeL9DkG4sWSCW2JZKc9xFz46Y2fefnfQT"
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
