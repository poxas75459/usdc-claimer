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
    "26B6NP9KMFLLRtYyCC3cwLyZXrpwndcAVk8h7ASFvAzW1LeDbHvPAgbtQ7t9XYhHaGi4CpFYDfzJq3UNWR4vnwbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ACGBM1wkVPxHQJ1WU8gUmhWgGCSNvvS9YsvpDy8dFRtTLHPcFLACJVxd9giLyaztUh12JEZXsqny4zcwFpCm9Bj",
  "key1": "5u1PrLKZWYCuEoD5CUHsiKpuw9KepbeZGBosj7KqTrgAbafymgirThYhcSducrqdD9tj99ofw7zELcrdbHJwfv4G",
  "key2": "3zFMWBitr3y5o8JvDt1jVZjQ5Bq5213fPtUUUrWisWf9ZhJW8vxMQEF1zc7YLJvabFBqe9guH6d3FGZq33xbNkvB",
  "key3": "2XQp7EHBmdrvFBQanNJoNC7yLWaEeCCCauRkoH4QDYePMnA41Abu9NvmhTHDPxn5RFkocC3RXPKk6JfbhNKd62cx",
  "key4": "3ZGH5a94BxANkbgNyigMJSKT4BkDpd1kW71SHfnhs6fzNz9jwz4LsqUKqwvdBF9eVQnPPXqrUGsuXWT2oJzk21bx",
  "key5": "39VMHeED8EuuWdMUgiyLQdCQyC3AhN8FXj1DDqFy5BtSftspimrqAhfqpcKuB8xcpyBMKHdDM1FmMAo6MDQd921r",
  "key6": "4aeyY3896NzMHhNBBhjiVrhERPtC3X1h15YWLVGX2vnxs8VTGZo1vic5GgqUz93Y4mJEt3X6wtjcBDTw8y1aaWqL",
  "key7": "4fFBArbTye3FFhHeJdAFCduPgf66YKvYmhM4wJZ9ATpLgoJNyTFGiv5SYca4p8yaHsZxoue8TAGfHSn1wQmmxZDS",
  "key8": "2hug16j5xkGToGbJwX99AnoowRo5vwxRDUZCEZKA2CAzYotVbS8KRxAgk97NaWVTvYvL1geLx8d1k7XUK7Yfrwca",
  "key9": "2VW6nPv3NMsmkHkZC8vFWWLBC6rQuaKXQFWxqbBLsZkYMNoN2JYJK5xEWKyVXm3sBo6W5mN1oz7R62Hpq85Fkds1",
  "key10": "K2LhdcenMeTNJi1M2LB263mjwRJCezxLMwxkKqbmppGSYdvaK432GBmmMUw9rT36TfHYPcJKzSKSCzKVMWqr5nB",
  "key11": "33gYXw6ydZPbrk6gE8xp3HrVBBa9G4wf3FboTd65gtXNt73hj1iCUibyYjFU2KepLydMxzToMCHv3VMpSg8ULeRU",
  "key12": "4JapmCfNPNaSRDJffE1oCy4hYbzSUhSaUNC6jv6PGLYMndLyDp2HgMHPa2FpZuGyTa6fxAoM6Lp5SdrhuJmJoZfJ",
  "key13": "3F8x6UDEQJ48KKSLCZ38GJQZyNcTNuWkpe8nkw6Jerg7Jv9N8vadc9xETVhxZEX3GdUhYgfteGGC3y9FxbqCJVAf",
  "key14": "QaNK4Q49SmEK25nMepSjU32XJGbc27TY7V2VjR7thAMo7oUfEucL2zA6uNwBhiLK1uEEjpnnfRivtiFSahozkS6",
  "key15": "2Vp89QuN8bfkwbq4Re97JwB7QZWT5T7q2zW6EUFxSforRFhqvrtfbCWCX1XZ5xrvXwjcqcAyetFy25TdVUKBiuX",
  "key16": "5Wg3H9uhmbx53dkSpRFavDpTnwscVTPdpZHnmnZdcvyEDawKhwGC4uFTGyqhSLLa2WL95MEvApbwGmbVfpX8G6Ch",
  "key17": "59QKyUcuqJpis9NA1RPTpPPpE1EE55NDiCPTrt8ZxyELvVGdA7wntTZYhXKjmLbFqkh6bFLF5eyXJ2o87Ypd5tQm",
  "key18": "5to8Y2VTNuNrTKnNsJAJP97uUhKiY7EeTHyD5rKqDEz8VHhDTxZxUQmjfj6i3HfMaWNtVmfQzMpeSdkzz2jxR2f1",
  "key19": "4CrgyA1TN7uEZbhe4TEA9zR7LJ3uqkawg9yeNnJhB4DbNdXsKRoN4vemEYCEExkWfqPoVHyX3p6tbUfxJPNsN8XB",
  "key20": "5A82L7nHnYz6oBV6mMeqvAbgBSy2KgSwDEteYg4mHVRir5Y5rDAWxsoEpu8HZkkW7u9Y6j7Lz1AV656Zhug6oZXR",
  "key21": "i8CdC7ik2cMEkShub7kdjgDD3e66ix69ZuuQmWMu81Xa2t3p5CCoU45Ep7r77dBvvf7FWbJJiByCd4artdy5nTA",
  "key22": "4Ce7L8DKk8u3eRDTR2wAcvBtmU5QoD1S99SFLfuK93PysuGFDEXiWGtMtPTeh5fLRjbMaBdBx15rgs6rgwJXxPPS",
  "key23": "7wED5PDj5zZkmHJyoX3L937NwdXfYTgKAAQGTsy4oTX88EZ4nuE7tBkHnAUcWe1hFKwk3cpL1ZqfLD8fj4BNfhL",
  "key24": "2e3PBngBPZ6HUKngFKu3J87zuQ7HVETdxhQ8NcC2yQtBx5h62oWXFddJPpP5sq9YZQw91ko92upPwJFYGoTXi8FC",
  "key25": "yXh5n5wiGhFQJVE7vmPNNLnFxnzjbpsS6suWkHZpJeyy3teXDcf3Qn9CPf4Sjqrk3NC2zgWqutDR1fHXR94SQg5",
  "key26": "5mKtB4FmeJKcYjiXLNci3WyzrdWchf39kQo1E9QE7Z4gXQgRV8FkAm54FUafgSwUUZ3YNuyasZqTuLLbKnH15ZMp",
  "key27": "B55i3dUwxYaqmT58muCwrAh7Mo6kcDB6xpcmfMny9ob7s3QdkwwVZwpPeRTyQ7PDFeQqoYkQj188JEwxkYZMYA6",
  "key28": "ieeW9F5ENw15CEdGw9FqcG7xAGqPPDG3jVjHWU9a7y6wA2a9W6kSwTVENXVvgivijGe2dye4zJop1HkevJkms7k",
  "key29": "3fJEizVDWxGBMLsfjjf8iQMAdXpELpWt8RrACLammtA3VAonzmg6LgNHj7MJHMWLMbZRyRVWw7EchJo2ZaQ71r53"
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
