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
    "4k7C3cZLVA6yDU9efuESicY62Fm1TF5TWepGsrprsBqbT8dSNYN7L5gJKDKzmYwCM6ssA9GQFGAUEN9nUZBfbTYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xviRvCfGDWLND1VV3AUyX34cppYVGtSSuG8kqaXdg2kjJMCEtAV9VRoYdNxSGzvrptuL7jA2P1mquWk6Z3fduc",
  "key1": "45fsWTNMLvkENidgFAedzGozeecKhjRGd8PzwYSpZmsXCQoTzA2yLpiJ7K64Zs76mCWhSAdqWcYvMSX2Lz1JL4hJ",
  "key2": "2E381hNvcUx4osuaKhYt3qSR2u3d4koT4j4HvDfD3bWHK5FB9oDH8yX3mRQURTUZbV8KwDC6ERrHFGJSuEvAYNy8",
  "key3": "4vViZ2m5HCcn8GBPx81jgeumvxeXQniDXt3M1nDSx4W5W4r4iMXxhYnqj8U7wJ5x3baC6JUHwAQE5uANkeT9auPH",
  "key4": "J8nHHzvZRbbLc7TtdB8SzfET26YTvtL83y2qVCriN46j5HW1oSJr8vU8WVhjnWJZNpJMnvU6xbb3RUpwj8JA62e",
  "key5": "2hJu1VAKSFv5RNyKZUuScLMfDkoLin2Gx8YfKzWVyuFHMmAkyCTrvJTVRQKpzLPegxoaLbXQ72VeJphdUxkuHy7R",
  "key6": "RYwbjdKE3vaGJWWqi2VHbKowScxadPSKtBWmZJCtdNCs4f3tQr2h5SsbjrQA7Y6avu9zWRuM24yXKtYj5CwEo1j",
  "key7": "5HrxuYhWYum535rd5HcxLjaq9k8z4kEqDLs6X4c9mrMZt7ZVPxR1RMkx1GnbKsHbYqtGdnhK1QisPP2ndmrqrUG",
  "key8": "mgHPo2HFqhxDUBbtqRiaPnM7RpLsvV5yBp9E6c7QnHkGs94goEWd9GpH3RDF8JmuuVYXHyi3njCRduygXMArEqz",
  "key9": "3pebdEevhWZy4g333DTy8duxEd7BQczpTdvstRyVLTqif5vvE2oafVJzjkrEGdDyFNSpjT58LebxHcMsce9MZJzj",
  "key10": "hyW55PfkCLKxjMF6e4jmwGKbm91NwAdB5V5QU8ZLrykPEwQnJKDQNzn4G3uFpG52src8pYkenmehHS4mWBjDMJ8",
  "key11": "4eWuL49CcyMBfnXJidnozmqTUo6Au3JJ1yMiTYSaSjqgnSjDpeyi8R8QxAJQNB2axS6i1Ma7n5ZqQizSXLgmP53r",
  "key12": "5PqehoyE3RErQcRJ2CARGzKYAPevuj78jbpSuL8K1V8MtKHiZkuaTV3LhAjn3qYTzDPqazeE5TpAS3x2B2KnoMcp",
  "key13": "QQNEoV2Hid6z2TjBXhy6Gbn8x6W54VndqwjF5Jbyp1iSvh2jv7aSzqqadRVR8UvsGKyoduwsyazDcMdmQSsQedS",
  "key14": "3Ep4p2PrQgXpPR9jK7Nu1ET7LCFiDoZsL6RkbKkNKUesTb4UQjJdCGRH6yqHxNcqLzMZTUzYjoTd5sJAPJc5qE5P",
  "key15": "3gGnJ1EQka5u1o5NUrVSvnQsCqR9nfjkP3Ex1BDri85S1paDWp6Awc2B6SV9ysapRJv6F6na71ZpFiBWMxpxPbor",
  "key16": "3VBKuo7RmKqMMHcJ5iJ23yEywcLqR63wooT699x1cD5pAHgtLD3nYVYEkBn71RzZ1Nr3vHP2quw93e2rfWqgRGbP",
  "key17": "4DrvxDZ9zHCEBka9TcjzU97nHLnQouMqzuWSHuJBELz7E4CSibfRoD9JcCcmRnKQGhhfswJNqhgUtDVTG63tP6uH",
  "key18": "3Hci6DPNLFvYr8R3w7G9dZdqEWo3pWdUMjvZqD6Aq8QBbQEcgpMSa5MK5yBzG8hARzymZmwzALTd18eRGuezmkWQ",
  "key19": "5NPzsD26mwRapeQH4eo1v8a4tGAzRDdUYRQFeVnneLxKKrcuYit9g2drvzGhgSUgp9H3ZF6pkzymzYHwcNy5FXX2",
  "key20": "4hZQA11kc5nxHWtDugVShxdZtMPiAWPg3nRgVLqVzsnMxQfQahMZXjRD2GAWkBLPYu6fzegCcBEYZ6DYZfsisak1",
  "key21": "2PgywAajHytdeXFT7CjfgzHVTNSSr99KRBkMv58tC6avx5NKynGdkt6TQCn2m9z2j5GuDXkos2EWNhyQ3mnMfgXn",
  "key22": "4iBvJe1rEmyizf2ERRDSZ8AzPsK8dkmiYPJYYo4xqxL2scAm85R6CuJKbcoUt2FW35orgesgieLsusg6rGMkq8vh",
  "key23": "2Hq7WSziCyhboGYWKo8RHgHeFb65nLraE471VBoaYGD7VHFEWzYChoPVLnSm6PfyKKmFwjDZxKe7zPCgeEBLYd7j",
  "key24": "4gADBSX98ympwxgx17t54wHWsWTWzb9pxXms99yZ2PG7eMN4WN5iSoz3ecarPZYweXfCM1Y824ZV8ZBfiBqxjUtP",
  "key25": "5Rj6JMtGZfeqfUFugFYtQ8RJaZqQDB968oQhKiiDi7r5aCe1mACj8ktabHqw7kcW8eNcfcooWijcrjQvNUiL2MN7"
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
