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
    "2Fta8RFFLB8WG5j3gKKrnb7YCYFgfNydKDmsRFq148wQPZTDHNLmXbSA6HSqcAqFDHRDq1TBTMksux1Xv8Ln8n7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TrWd6dP7LXsCquqdC6uEuJcgeVcoqnGtJH49HwhcFY9YRF7MKto5SZsuLRQZUsuJaypbHnrryG3Dywj35rkan4p",
  "key1": "3dzkBSoiXAJD3YYKpyn3xa1sxSogQxrjcHSPh6wh48mrxs4yTwdvhwbYvtof2jTaziBFkAJmu5aYgUwQ3Qc9dhgd",
  "key2": "5rBdRWfbhakBDfdQWHh95aBy9xkjq5nDFm2YVJsyrgctdqRnQ3oNXC6byinwRKgT5LoVPG8PHXDxDXs36GmpYQA8",
  "key3": "2LAkbyJSaffJzrL7vRdRNbCgCXWL2fRmDASa8ybD5iiDAwztLuUxNoy8KoXMFeM6qhCLyoQoPNS3FPB2kjdJCYiB",
  "key4": "27LL8YetcZZu3x2M4kDzfg6tzWta683zdp6kQi5SqCgimh3BYME7rqMmAgzogC1X8cp4LFJAKLBrwmWShou2tCm4",
  "key5": "2CfALdaVErYJqux8AQ11EDD5L25d4WRPovsbtguwkR4eTQE9t3QapLuSMLbSLn4YeUzmL8LZAKM9uc4b4KnAtfRf",
  "key6": "2KUSyGx5G6Yxavij2KZu6r8s5bVHAuLDzmEkqNGfx4EQq6yQqVqemYcGtLQTLaLee6MyPhP4ewJUW3RF9rwqLW6F",
  "key7": "4j2ApkeA1CNbMjTw2VrUs2PBuM9vN1vE1M1hBhNpkWGdxugvg4y9JcsNzgoV4KNumYAp69TQqgsU5szqiMpXxy1b",
  "key8": "61vLrgK3GWdo836Efn6VV6HMhYXqZ2p5WMRRWBAPaWQiyhecUvDrqB9jctqvKKEssG2nEooR7749E8YWnn1EZt6E",
  "key9": "5iZDDdJUb6x7YrVfCNToH6amjyTfSaHdmbkpUSb3Pdm5wnCtbxkLmR4qTPQQF5UZ8ja4FRJiWdTeBtMc3axBb9gK",
  "key10": "3YnjcjnJG5YPFAuP7c3qsxmMVS46YsyiWm2SscKgcUhHGHWqpWQnTssYzF5ixrXjGppE6y76TsTqUyBQJkWPHEZ7",
  "key11": "RfFhFvXnMwMeYTTPfnUFdRKyZKHESCuU11pmKvfw4fmL8WhYwi9B5k38onXUCzeHEtERvSYrD2TaRiFjeS8Y4mb",
  "key12": "5dDYYbBBrQVEoRiBKcXfjNYpL2dDdtvSg1GgBkNQ3sNdJNmexCDhCDzW8VWgT8bxJYRdzsmjehb3uT5A7jJ8j9xE",
  "key13": "5gecuFxSMv5AAr2uUrPHV1XuU9MDPtEtcoyrtquNoSRJLY6NoouxX4HShpVZdWHBZaazqQdGdRdqsbG6TWNQ5Zhd",
  "key14": "2mgeVNe92bpguYmtpjw3rB2G6pfmJzdRmVf2xjWoQiGungSpBhA3H9T4ofFvZqGV8fHdZvViQuVRvUr7s31VAxPy",
  "key15": "3nH91nLQJk9yvnyoKrY49YwCao18EyqsHkmmb4M5xk5SDKqwVYNR2H8pYo2X3MEgzauZY1uH3vbrAXcfkmmok7De",
  "key16": "2P4pqbjkrKVxP28aicKmnGKdSgWhEQajh9BhApcQZ3HmnKChtL3vBfB9GGynNffEXWj9cMUMp2B9prSXjt1UKEed",
  "key17": "3uVg7GWAPNAvDXMrT7DZG4MYknHtxACXP4Qf5Q9okXxQQ2hfrwkjrtkus2V8ZY26rVjD8UqaPXyvDPvNeQ22iDxC",
  "key18": "K6ABPssTxisaJqwyBUtyxpoajRgYZA9W8pJsX5rjNqGiz7XxRe9YSfNpvinjD9eZA5icQYT4cE3Py3eRKfczSBz",
  "key19": "3jH3P8Stjz9jht1WJGk8mVS21tWAZheZE3GTNTJaHQBAJbR26dhMrvM86pwiczhqZTxYXP8CBVqCcYxiBU9CGE5S",
  "key20": "2MoHfCQAJXtWciZsFnaoAMDvQyW2hqH3YtDU27GbAEwJy53XfY2PzaLvwiqUuoupuUiXPZMKHKh7FhmJeALkyrxZ",
  "key21": "5PdKLkaZeP2gRSXmCt3itHxvEq3GrFc8sVqHRaoLZYpFEnyVXxp2VnUw51a1ae8oHP2vj9PuJPsiL1fGiDTMdd75",
  "key22": "7hzhWyZDVDfGNMxuBc2iQ3QJE5HALkCZ6xQTerjQbUxE9WNuqoGmQNy7yUhaDtQbsLX7b1rgMHtRKbqbwuLhMBH",
  "key23": "5SscJJrdpzsZCvwck55ZtzstjBq3TGZdfjp6rxSmnMJUMS77ZjLMbnEbb5F3ZY3rBcW1WKw2CxZD1VSEXM9sXxuz",
  "key24": "i9ZDTWZik6mFHp8TATJpxMRqnTzZq925Hr9FCPTRzafQ7gZGcNZrotYmCkfkeiaruQnd2SiX65ZVgrWVeHFKvYc",
  "key25": "5uyukVas3mYtuHhgxTWKhKMKgRStXFB6aTNkumJ3bxATUz4ZF3RofjFpkDpAN2h4JKBEXptTwkrDTo1mwpY7Q9SM"
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
