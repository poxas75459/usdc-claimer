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
    "62KDKxsqf8J8zgctfu4vLvZ3E3MF1S6FpGRDqZU59a9y3ZTqcBjJsjy56GfFZdevfvm7pKYPfnoLDUoS54ZikwvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JqigfFReXnwXtdUzPwcGvDG5B6gFUXag1u8nsaWpFz3uUV5rgtx7ruMFDtRQmzHQqW1HKWSdmyC66f1b4ww6Hn7",
  "key1": "HzYaBDchVjfDZ9KEw8eBv1nZTFj1dJUVQwpzpU2m29u11dAHVXAbkvoxqSVc7sLoctxuud9myrHZkAfAkXHj39Y",
  "key2": "wf4ofBRyjJ3tMF32SDAXYk2WC9tfF8WM46DQoTNkRpRwMkhoeqgf8xZBcGBQk7XJcvVeMbRm3CboRxaLeg8s5fa",
  "key3": "5BH9ayQ1vnw4p75ZHoocyzQL2r2JS14CAdq4MuYANs66K6aTQ4DLEv15sTDodX3YuUSfZTYmk82KK6qyjqcFJ5XX",
  "key4": "pX5yatxW2fSzpchLKZwTdD2As9oUKDwg3DNo88SMuhRXtRT19XPY7VMbig7RiRdd7L9bmSQAmhLJfT5gEXd7qXU",
  "key5": "4EbpsqUdCqFehD9i8AdZ67M7YGgSEd86eMZDCMBAt9ZUzTM8v8G4XvyexCKaad27QNDLKeYnxLzGHjS6S47rsg7r",
  "key6": "3CnR12bixkXVE4s6GdZmb2oay2UL4zatfP37HhqdVgiujmrzfXXoA5NamqzD5Q5R3CjeKjoDfSYc2rbGENeSbQtc",
  "key7": "5wUiPfCsFYGKgztWwWe1ZapNmhfmdxxvtbidheRDzzJokMdoZSK6924W3BcUn4qQGn2XXEQ5RJHzgFVimdSFYkJX",
  "key8": "32qDBZJLRkUJ8w8kgWawbaLLy5JnpBDxmTWwaGXgnBrTsHMEd7EJjwivS8HL4Esmr2vq8Wx88WPBrT9kysWbTTGW",
  "key9": "4kgeUbuE9KP8x9rHwH9hJP5puLn5rLCbjesi5HHLhK5h85snHPPwt2Ent55febrmcDyUb5yjA4aPzkYCKoezoDKn",
  "key10": "4RfK1WYFcXkn9CFgFctkBFuBFVnoKfBYn2EMDDuVbmL4jfQyihNMn4CXS9i8bx1aupHQAjARLT5cvSG8SPESrNX3",
  "key11": "26RU5uQgHsjnbspAnymDLcZQZiGAGXJdEVQbkEVNnxkrbo9YSwaukC7jJgTzcGuK5YCruqTic6KcVGTQPGAVSUem",
  "key12": "66LykiSoUv5jYuzTC51LUUpvyTKZ5f5kzyyCaF6iFzh7hASuRa9A8EoH4pXirJiBN1bTMHy6EV4ssc3PkL63hFKd",
  "key13": "3RYVLwUM2eS22V9V8ECzZgWCSCuVGzDawA7YBMBjGRmEYtLEwLpA9wEVRMxd2Fwx56mCWHQHZQygqTznPYRyxCQ9",
  "key14": "5J9S8M2wK6bkbAxevqWAmtQHcKCwyFE6BwrjSXp7AwbdD72eNyQgkg5GN5TtLXvP2AB3Y5KEb3J7G9UQpFYMX8p",
  "key15": "3duPduYmzxLjzNKtqKMYh3gaeYV8GcYwGtL81iGmsoaE1Mxjppm6Ny28dRPqmeRKgTXYZT7rgJh6ZFWdQ5J6jx9u",
  "key16": "2mGHpGwQd7BaKTUyXNNWgBFKTt3b7FAbXDu2Y6DfzY91AcRbXjmsUV4H1gW9c2vHK9UuwPS3e5prVsw9U97gWhnA",
  "key17": "2jU2hkoPoafg1JWZ5sS9q8AYbAoqbVAsFE6ZHD5D1ZFW9ZibBo2gjgXWYjXd1WnX5bqWApdSXJeQvbPAfdJeck7E",
  "key18": "3BzofQzFpemab1F5YAT5f5oJgSM5WAHqSpUzBfZF9PttaY9XJeJhQF1cknDD78v9vbR1TKg8YQeM1E6DEsxVdXJ3",
  "key19": "2YULQFLamAyAmhZkG2nkQtg8QuAmatsAXyfEejGemJySY6TMUCAcJ3uMHcc42dwTgE7zGCTibyRiyTr2JWfvX5u7",
  "key20": "J6smU1NN3s3wppynbdCR1snZb6n2WEXT2vFkfRu3X6G48RfXecTc6HndWHhmmVNqrhoSLMso3faeqxMmwiVTQhh",
  "key21": "4xNp6cctXqBDkTAdFZCZ6ychKdhTgUrhCWJ4m6k3Dc7ANDMabDwVqbdamdKCA5HSofsL1NJN2hXJkupyHGMocYEs",
  "key22": "24gj53HXynhdJHEAxtUWqvnQ1FtYCYSqHgZzQr7Hr15JXkSRGwJ3inSwgwg5gEkDhgxp2Jp74cJovpG7BCuoMuAe",
  "key23": "2KBxgschFYJRi22Kn8ucH7Y8Vm3Rv1Js2i4kv9JEicXwNam6XydPFNSi55D8x4zLpvsTF8tc1juVPPhLaJyMyNFR",
  "key24": "xJ47UjLkYBvr1eXEygWajbhmKdNrC2REPKvqVMV5iPnsNyyfxZx7VrvpNz7nyXbvRqB3pMW61aHb37LpbwxijuE",
  "key25": "2j4xUUXxLLWMTvmq9D26VekoKyLHcDPAiaiWBcqjH59dd8iZtjMkTHeN8QAVEavtXf1y1t6yYWxQ6dUVcF9SseV6",
  "key26": "3XUCwZYGQP8Fn8sJddzQwL5H7bPFyo5iMnfWjp2YpWZyXi5VJyG4q7brNhTb7yK81wtZtJb4uF4tab5yVu8mRbs7",
  "key27": "E4NQz9GocCcX46A5KgQ3FweH5SKxFufUwUc7FXUDmQPk9hFDs6ZPXEAv8V9HhEuZtzevd3ZyXg2XrMk8H5Wm2pD",
  "key28": "HxnS9qo6R3aJwbcCUJ6A9ZCMuCkuf8yEq4SVYiqnevrxpuzmYF7HrumFYE5nHLH2qpaRGxNfB9HikWU7zjDdfZ3",
  "key29": "6549U25XNgMkUNzLzprMBaMytfLnnYmXkzgG21qY9MyWRpHwMFeQRNTUFy6XF5P4NU9BGeZi4k18WfCuGc1Ah65J",
  "key30": "2Nr1JeJ9KKCDSJQpPrWD74p15nK5ue1mjmR4doE4yy8QuNWBTP1V627zU9bH6Rwx77g3Nw8ETJkX5dHw1yDMseps"
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
