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
    "26WMk81K7mQDU3MGLYBDdAmj8jFuUC4KhNJKsPtoCCw11vDADHkKzaCZnHqz51o5g4oqL1CRfb7cT2t9jnKQcveu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SmPR3X9XbSKSHRwBCWefC6fUzbY1SWD2NYQmNmpbDH9mVp93RGKCvofKrfw4p8CVx1i2aHtpoisVyx2vjZDTGiB",
  "key1": "5h38GCqQVf9oqsTB6Vu8hipzFhTTSQvWk5dAC38RFW8y9s4tdaUjMebihGMtTUG2ju6FunsmMnpK5qQvkDKGFtYE",
  "key2": "5SvAShY8C7H9A9dEc89nyeCjJanbETRqYBVtos4u4ppUXEEEKfks9RUowMkRwuL8ruQ66vYJcsYButSekSKNbVU9",
  "key3": "3qyEYErZhNSTyjZNn3VPM2FFjmcwdGDQ5KDFVovfVEs9wnGtmYWJVnVALLpb73H8hr5VEn77YfXti9MDNxqu1Xhz",
  "key4": "2e2d5iCXkePEdwtysJYc3cQKBXEVG3dLQJ9zucniWX5FsktBhkQ3RcX3PoTAGGoUrzF7f8hmKYjWJu12CTHK1mwU",
  "key5": "5a4janipGEYwpqMMFhmRzPGiwUuNmffWgRCbU4zJnqc7Z12H1Ax9sGiFQ33Fqt5TQzotRAe8uwEBTqRLxZRWJDbS",
  "key6": "64fPVVPLzxpCBJ6qezrHSkkXNmHmMACB8SQEJQgNeyAbCqkWS5STdtagwv47dj9xCiiPsUUBhytU2miB2u3wEdz",
  "key7": "2dXgcRET6JYx2RgW5jvvdzdLtUQUi2MiHdcD4wg7RUu2eQkR7WqRNXowg4WzSziy3p6KAoQKnFS6rZr4PyPXP53B",
  "key8": "3MqpdPaGwmrsgfzpbZ3vw98ZvuqmC5YVgqaYxabXzdHngdsvBFYUbyXjr5SGG2GafPnYuhuMsjntjxnpKCNf5Xvw",
  "key9": "2YpjvCCGMq4on4SbGntUdbbCPsBkWPPQa8t3JCqStvapjzutRvGekzv9mAfLCzf82XS6X2viFEe2ec27qzJfidxv",
  "key10": "3bfCNv5WxgdMqgMjXay9Xuf2aw7JtCqV8Y2ajcNzrG9TiXq4diT5JMXjy8Jx82SmgyMWJZfq7Tg3jujMMoqq9zs7",
  "key11": "3L3agKH34Z6azTBcwRrbNpK7yNB4DJ3f5zPfAoAiPeHnNU2po3cfD2iwSFeyA7YWw7SwD6o9QSFgXfdGERJvbEEG",
  "key12": "3YL1CtPJVYw9KfgwH2MVs5xjP66Phn9tJE5pHLY86cenp3eDkQgoMUiMJmM3bwcERzjdQwFtQ3V2AdRfxqxfDARk",
  "key13": "ani7NQfxdLg4XZYoiW9LLjc71VWQtC2uvPz8Vkd7HQUZQhWarrTbUBcVW5cLDzJ8kgvnX9jFd5fYWTVQEuwJV3y",
  "key14": "594erdZobx1GvcVwsuxbrRzeHALrheZeZ8VwD8NFdeUbK24KMp9hUnumi43BbFV2rNaQBMVcKtzY6PVh9PXo8ih5",
  "key15": "3qci8MjcLeZ2cr8xXUKqCnFKWFSathXQPNY3XMKpjEbMN9jQ2popSBp2rp5jvL9CD4Wf1vbYjzibf7TVGB7CcASe",
  "key16": "5rWYkk5Dq4bCwqFxycYumLKVxhvBu3yNbVHgUFCj8g2B8CmQWgr9WqWzUuDe12K8YEwLjtBZDM9sTB3hGxHZ9Luk",
  "key17": "2tvnuHiNaZukDvSpyGpJZG6eoMHkxccVaMBXY3dAom6grD5UPpE7mXLCLz8Wy2Zd19N5hKnufV11KK1duawqAwrW",
  "key18": "VwGyoUgyaHmo17jY7EPs5rzEGoyaDE8uiv8GDxxcVV3gZGnMC58G8x46UvQ8Z4jV2g4HA9ss3CQgE7YW2FabutJ",
  "key19": "AMuJywqDhzaeGHs4rW4ACwLRMTq2cgQFLqtZBGeNhEasKPqMqQjJ9143GShhrejFNYd5fMjB4C164EbPjkdXuRt",
  "key20": "5LbJGQ25jKkHhRvA8jqvurvz7o6VwaD6PGh1wjWxfGmBeNkEeNDqRrw8UF6fadNpSvDR5tromtRhzkHAFGRFJTEA",
  "key21": "381dCr9dcymjU5R57zPpJT71QKDy47m2DoAG5CmgfSg48SN9PRGNMDv2RgpLFtrAsmDFEfoFLGGA9MpQEtdqNgzU",
  "key22": "3Ta7SsxMZfLdJ6XwFQu9GmFsRfUT6qHehcTPqDUWvfDAPHLCFHZCqW3aLkB6ANF6GhPboA1h1Se5RwyTbch55Em1",
  "key23": "5LYdvpv7GmeuEv3NR1ji18tGT6NsFJvTiaUsK9yA18XdUfkHGvRWofiY1vo8P4dU2B8TeWF77euvScAx2vRK9gRQ",
  "key24": "DGG4biRzZpm5QL7dYBRk6kLz2YRqgJZez4Y32Ldkqfm8mEV9vdyqdtLUBhF5YR5ywehKDHpm9rfDTNHoRdCcGQP"
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
