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
    "2NThyqiFC1u6SmoXK2xViHqsFpKsMWjf6UMShywGY32XQ1CZ8EZYhHZPKNjutNsQsMeXNsCtHS4w9wEKMTVYNMKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Rxj1bQkES8us3zEwdAZdP8JE4RNskEwpXFzUWBxuUjZb2zEtLW5S8C4RAAzQyQCym3EcEs9GekEkjqt9XQaW8V",
  "key1": "3hb1VWyyAzGHfnCiL5WGc9trsvmptS3c9QkN1o6kzwecr5CowFF8M3C9Q5Bzvp3cKi7RUpxdiGfFwfzc396fFNVv",
  "key2": "3yrmQctA2Mo3FceEDfZMSX8m94GsUWPyUFugRYxEJ3uhFbf71rvi3MVWFg2vvhtnHxAAMvmca4WT86xWuGaAwskG",
  "key3": "66kaL2ixRnzpLhjPnCy4xBT9g8vRW6QateFpergRsKgnqFwiBshiBMuTAFXaHpR8X79ULXspFc6ij4PFVCby7SL3",
  "key4": "4cGwWQqpz4oQphYHvrJmfaTtmQD7LbHTYtnuWJU8Utuar1mKYbFHBfkShs4NGymTvXEbRLSzwC7fxQQcFt6LQpxe",
  "key5": "3CShZmG9enWzg5vvXXUQbQ8dMbJEdPo1XhdaUZCrd6GVPp14HyLSusqZH1r79eoP9ZMqRVzDgSZEeLymBAYpzukp",
  "key6": "2W5cvqCwM7LRMqbMUb7JnwSFqjQW1kreh4Mb1XefrES56NJgM6qodexKVGe8qFDiVGXg1V2dzmA4N9HreJxyuazK",
  "key7": "5KQgedZrWgrSd8EaK2DTUCAZhg694edXiVAcMTnFQivcQ9anNmtotk1zAfXRGuJkrd65QUbXU2tL9EBoxNVTGwkz",
  "key8": "3kfT8iin5Q5bMnxhWrTWMUKHuGCE61k887sRhXZk8Zb41PrUzYD7YYhMhVPDXRK54a9mjBEwtPRUsXLL4RWKMcpw",
  "key9": "61toB1kzHWWTVKPuoKoHrdiS1zoifRHGmzCQTNKUM7JMAmtoWGn42gCCR9LmE4gJSPPsCzkxwXLTtaWp9LUQ7GFX",
  "key10": "2J6t1Qfqx64hcuXTVTodosG8fJajFTbCAp6qwpUZaYBNYMXqKieBqeeGtfqgcJFpRzxPtcGkgsXKUGicjVnD7aiA",
  "key11": "N7Sxrh4SPzW9uTR8xjRrh1hQKToRZf3N1cMTMVyySwm51KESG4Km345rv3j7xmHAKADP3wyb1VhzdK5wwMVphKQ",
  "key12": "5Us3FKpF4XvTW3uWFod2D4vGV5Vo3JRzzsHM6gHmNaGpzKpo7VdMhAKPPH8m2VHt9NDoj8MtZ565jHHwvvzN6KAb",
  "key13": "3u57bsVjkhSrEsLV2mQPdCGqdyJecUF6sTvHPZWdkniaJff4Ujb9todeV9uFAu8Hg3SBCjS4Z35zbczmhm7xyqTZ",
  "key14": "5XtvbSTeZU34uxmh898dsfpkKWw2vNQw1ZbzM1Xbe52gnFvkt1kiiZDCQfRPTJPUHPApjnFEFQ6KHBJ1QXTDhJf5",
  "key15": "2xkQNk7kjS9eQSSks7LwV9xr9fFfcpeCAHGaqVoV4QT973Ki3HmNw8ag7kM7wxVJ1tUek3mawAZB1fQU6UvHeeX6",
  "key16": "3HZ1cSt6rQVzPsWbxg28iM1YHVUXhq1eWkUC8XgMXkUz23ieWX8i8y4ZuS1oMmKUf8c2kVsLq1BfC3T7QnzX6mja",
  "key17": "399SjsxWCJxAdchysnbZUaBj9kGVjBLjZF6vnzXCg6HGGerTWtAuV62piSrg5S1JQ8gj7wjen2gbpd85RDXx2Uyi",
  "key18": "4RQ3MNUCAVCecNuJdZ9eSa2A1gBSKkrGxupQCWinxLRojT5EJ5mMox7uuXh517aRXKH9K23biPrgwVqrqboDfApm",
  "key19": "4bwpLGSMpF2kLLBzwg9P4jPaYafzVp38n73ALHNUtQYKQEEez2DsY5QJZ9y6mFAuXNyAnRSEQ2vYcEEomQD1Lije",
  "key20": "2bvK18wPUn5UmyCNQwkr5F4FcZ6B6Dq5F5f7dCS1jhfs1kj6UeWbn3oJ6KntrHh1YQgN2zsxHcYTdD8Y3qMzcRqo",
  "key21": "2YPCCxRBEMNwZ8Q6JtnVmp8Vy2Ay38TKYU83EkJCRHuzDTxqNj2GZEaoNP7fnNTkrhs3neXYAdCrBfPBRu5XD33X",
  "key22": "729hjS3YqnMoeHfnVDZ6H1mSnW6tMrW2rAvhFvg4Rt2wACwnBCR4Rmb8aVmPpjQwCib5616vB4z7tZyzDuXHnpG",
  "key23": "Ns9dfiSvKKmfqY3Z8saEmubqrfPfmDo1DVsHeZwhyDZ75f9Mec3k1UhzjeFHSWGL2B7VeSnWmvHwTu8sSffH4G9",
  "key24": "5874pgXCYZw9vaFsPKR3gtgebV491ZQQcpmQLaSa7UdKiMXxfTPrEsGSstEiDmHUVDpqkznp5wh9ETJp5TpbgGvw",
  "key25": "3MCsyvmyhM8i2Unm5qWfxnHAG76kZzae1DFrCn5kN26KJtCLMbeu59wZhMGYXkTeSSf1HJgUzhZoodaXjVskNK4G",
  "key26": "52XrkMVdMygxr9yZN3QKbnnhcjKsfm666j4v9KjQNNRZgiTtowmPqJRg9QKF76aXcZSCT8xqESSJ6mREpQU3vWgp",
  "key27": "5maRdkkL1tKCpCJAw3RedGehm2akvnyo8HUBpq4PomsbS2eco4y1oCKqCepLgcnmjHsLU96tXguqrn7KiwkudtYc",
  "key28": "22yKTpcrHsajrSLgSD1oXZfJXXhCeyPUFqzc6ukidH9Pap4GGzPDA7FJ7zPf6PTFpirA2M1A8Szwr7urHwzzmg9W",
  "key29": "5y5irNiYu9SB6xLV88Y9C4ijZRCJyGwmmicf9LkpzN61a8KwQgAxZrNR7s1uc1vrktQCHqzcwVC286izauS9kkfZ",
  "key30": "3qzCrMmE6v9M7RVGcL7vbKMzyHScdMtn3fWHmBovRU1k7P8pr8jZGE7ZQwzoDq4TgXfQQHR4ykzdAoECJr2R5DPx"
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
