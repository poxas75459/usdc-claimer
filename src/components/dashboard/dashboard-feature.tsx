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
    "5A5Y7UJv9Rq6Y5o7T1PpCV1kxCVQjwzWPNeGxZg5yvWj5vryWcULzxtjtgGowg71dBuaPPwxA2aDix24v4ejX9xX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ASTweJpLpSGAFj5rHewRMbSZkgMxTf4nZvpV945vR3o3Bmsp38dmY2iN73Rp8ydBquPjg7tmGDzR5SHaKgajrmk",
  "key1": "5jange42EWhbnWy8vZ4qMJp8GsBaJFG5WpDJWtQ8upumbouzpZwpPBMhBQtuQNfE7oXiq6L91Kg6dV1yXEkt1JXQ",
  "key2": "2CfdTtXh1jNYX9gMQuLg8oGKq5tTepG535iZpiFzwDZR1qgbgCLyTWrJbr3h6yHpsY4jGmbJCEJEvmDS7i3Q7x1X",
  "key3": "na5P7S9LUNc8wWD4994Qd2o48QB7RZsazX8mVvgm1kJbhcfgBUKnpaxzHdGSreF1t3KxGH6ssG6e6Ta1x3JKDfs",
  "key4": "464LYb5rYEPuostVsxGDLpSNjWKDzZ6spWxrhMeiXrDtXLBoM5u5rZ4ikoDYTKW8HM89zcvJZiUtvYb5LsgEX61n",
  "key5": "GFQcKSFGUevHg7N6GuiQoc48PVJmyiZxbxAJPjzoqpXjpyLDd4M8KjoRP3qKsV36yRh9Uo7rJCFos7WiS9mwAro",
  "key6": "y1Tstfvbz8jjrLSsjvqfXgFpj1DA2k76NXf9ZQsv1an2KTFchb6KCge3LHfnU7J2FeQrTEmGxhatETjsrH3375N",
  "key7": "55L2aTHuQ67XwT7ZqvGEoBZgTruN2uoYTx26gkF6VM81q6fGqk8RNj7xkjLsZNvpA79DeLacfqMRqXW4qizm5xXz",
  "key8": "36JAwZzPZbitC6TPSPmsxDzoR2ZC16n8dEP8QUMpPoGAxxfH3Pvgba7b9Unxzznpx6hdA8DWuw9ChA5LBta3kNAR",
  "key9": "hbt8phTEmg2g68RXYoPj2W3TB1D58xFvFV5LLWKPzczgxE6mRGMPybsspT3HLRA5aeWxL7r9SmNkv84WUshtW4q",
  "key10": "4sJn8grgL2KuZzzAKofGqato8Xkg9GtRFNtPeBDUrPRGMv257tVJY84BuyQeYufntANDbp9rXZBrMxX1sDFnN7kY",
  "key11": "Y9DSWZWguqZSTNfvpedNHGhUt7gL2k5GhB6GRJ2r17UHTycKTd4T23dr2pdDBKHKY4zqvC98gdTQvBSQmNkK8h1",
  "key12": "5XsvQvWaWVZ3eJ3mZXehavTa3soQhEePtR3Vx2pjE9kc1iFAnhgr5kyvDfNRicXL8jryYvPh7mEAJZQdTRsX8vuv",
  "key13": "3bNBftniZ8JwWdKSs38fBJq1rakKoKJx3LSGJs3cCbbTKN5iaTmtRRckuP1DsVSY4mmd2bz8vXVDCkUGeBnm8XFK",
  "key14": "3cJg6AFsLnKSgWWD5b8FjvbvmizSeh2SCMi1Hj5uSGnhN3iaZtxCCfs45XE1Dg69copMccPMbeJvK7rUj26iehBh",
  "key15": "3TZchwhiDV95xEZWqMQ79xGtruFWYgLZY175Bqvo6FMx9ZLRYrUmKtWoXa6MWdhvBLB36b88VeUTjzRGL72Lxh1r",
  "key16": "2G2Hvb3MkNQ29R7Fb2Ddrn8ujkGqYBTRg8nmvV3J7z5CSQ4vWnhCecMWnxciPDoyEeY8EjhtyfeC4w7jvUEXAKz5",
  "key17": "vMP9Z2SWXJ2bQv4eNA2XvQrRksXi26RthjXFFGDeMVXQtrqVWnAFWvy5DEpdB9NcW3Us9UDgEuRi65cxuj6Zwkd",
  "key18": "2UhVC6DfDS5ArMzmCC5KhkLzG8xTwV7UdACYNPom9oLp4hpSrnQHucMdHYGxcZEoh6UiVzZGNvB15TfiFW5h5iox",
  "key19": "4ED5sgomq9sPhYu7Cc1nW4bmgd6wJf4vxkSvzZz2QAJsnhmerUF64K7ZPbYo1Bqn7Ls93vPBQgi6tmWM6zgPVByB",
  "key20": "4sus8bcQ4D6qCsTfBi2A4NzHrtbV5kXw8vgbygamRiqXWBTrpqJunMVxyiQWT6Dsha22nmpY1nCgoCa4TFFhdkfc",
  "key21": "3xTHecQPLh95MDeF89p8fhho5YgYLq51gJuJxQ3jMjajxFJjR71EK6D7t8WDeaHUjtcY8kdFax1zerZBVNfsCjuA",
  "key22": "2vBDCXdVJiStWTmrnNj9jeppFmFyoAQDdWZc6HBrw3VHh1FVdiLPC1Ts81e8uCC1MJf3mHFdRaBhrVMveApKBi3Y",
  "key23": "28jLEkRoN8j5oPhA9vqLSxxtGrq8YbBgs294ABZMDFJGJmU66rjTPQ6pgEyUoqyg1oLNHSzKjiWHcpo3HW2F4GVe",
  "key24": "5dMmSww77mH45SENNh5g5zSef7DHwiAHfVZHNyVRsVETqb43tak1sNr1MAkwGFqJGw1zTM9XL2EsNZfgGambsz7p",
  "key25": "2VeCES7o5iQgEZXaqtnHxRdj4o62siLBdneERzQRhae4Nb5dNDqqPrCkYzJgQmTUKiPNx8FFbSUSvakzBbUWhWK7",
  "key26": "4KypHDHLCY3CgDaLW3fwnpXpJPh4KZE3J6RyFM5FxG4DSmpYR78BgJQxbmZjziSPyimTLJzfzC5ivsdJByUTQyJx",
  "key27": "4KoVySwBk24v7aaJVGaF2N6q8mhbniuRB56a86zqSbaog2jPRNt6goKd3dAuiVkEn4gTYFpbmKsCRoUkBGbX3JB4",
  "key28": "2nCxoQTWyiWMR1yGaHTm7bftsiz42mPFXYC78xsWvwxXJbsjgJg6hhttmovDmP3DeqQ53sLjT3Dub8prYqo5yuwh"
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
