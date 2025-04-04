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
    "4T2gEDxrd4K7xPuV3wT6EdpwdwesDAYsFZ3iycxppHMsoo9dkbRfSfcJ6R2T7uNJwfBGy2yuiQ1wNf2v2ZqkmvYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48NHpKKm43WTtSSuxcShcCs19nkyoWD6N2XnF3T4Njb4Ftoj8yJhWjfWK4N52tEp5YFEZFy1sm2Fd8qH5FxA8kQe",
  "key1": "3PCGbtw2CNfQToBgLeKw7Zbf2kyEstd2me8ZfpVBz4YdGqjkxrHb4bX471n7pYEtiv8BAYTCY2715JZEUFzGfw2Z",
  "key2": "4vFNMNxjA6AwfKQ9hx2Pz98UWpqXE5rWpS6uMyvvt7BbBdQq4NmZYujX7x77UoUkKr82HrqLE7v1xxDgTpmYJLA8",
  "key3": "5iDUo3Nymu6UzHBSnL3CSJt5VqwTUGsxtL8jU8baAWy3zgfj8BuUbr6kxV8niJT2nx2SmjCNLthr67QmH4hr5r9d",
  "key4": "L8cK8acUBfxWKVtJ7Jyjii9YWnpiZFKCpPEnwRjsozs5J4tsXVW3cRmiehbSMWXUvPdTsbBdsi9S4BggKsiKAEH",
  "key5": "51eNjo3UdGVS8q1DeBhG6Zww4Mj1KsxEEXYk4v2Wx5rqaoqPQJrqxD7b6CqoQLnzRG9Rt4uq6EpGiTXbMjt7HyG3",
  "key6": "59Wav1wpKi6rYsX1z6bZ9eok5Wrwdy2USJkqUifYy2t4TKgGn2XDVWcaTWk3C2pP5kKxXh9DZxwu2JskUyiXEKfp",
  "key7": "K3is5WUWgwF5M4Y2V7xWNRuvVXvUTZs56nAWrn552eTPkEe2X6AuT5tKxxcxVokcFbN3K5FcmKz3uur5hr57vJK",
  "key8": "2icP3Az5yQEYTXkkcTLGhjSyP7vuMoYaJnGsppwKxfSW78wjjpDAmY4qEAqfexpzDfJ73jmtwaBNBTdEnD25E55Z",
  "key9": "2S2i9bKjhP9DdhzVyVbCNzRU5fpnpk78hmgQjUQ2sPsptFLDAmzu98aAfDUenoD53inD7g2ACDaJFXLbEMgBoTYZ",
  "key10": "5t5gREp88z6T3bQz8SM8skJfWLjca4FeP7uQCppFiTEo35CuBCeMh5BVKea6NzRt1EU6FSJXmvDoFetNPXheFjgS",
  "key11": "2s7NGUXBHHSidyZisnxAq48boRruRwtcz9Y4eQ7kjGSsYiDPBqn7WCu6uAACW9K3CxToLhjMKmcxkEyyCoGQeN2F",
  "key12": "3pzMCofjqca3NfDXLTVQm5kEa1kr4fgUjYwYYA4WmPHU8rR9fS9wnmKEfu68oJBZiXDgwrYNWNTD18JrG7FP4YPS",
  "key13": "2tLu1mPnsYWVnKptx6E86GKZcy55EzxGcnLb4GFxGRZ6XSTcPP1UT4Yy263pXHk8DeW3A1HUSH1C8gQ6ZiSkj5c7",
  "key14": "tXnkAAz2s1DNfnLKh2osUq1mHkgrnKRxtgRgk5DPhpHcNekcSbdPazm13pZBn1CANEKwcmJRo37MajgcT2cnrdA",
  "key15": "3xJk6EcizKSCdxhH3iZq1rpezffGotJEbp6mSN9HrVQ4HbVYZWsXxDhXkqkrHAHZEJ2nYwbh9aPy9K8dz6UMCA93",
  "key16": "5R3mbBTkhMaN8V6mRGXzpTYezpEH2paULqnzDeJzsMrX4Kpi55VTxaKHWKcyXmMZU7BTvdgf8sjaR1ANHDNB6e4K",
  "key17": "3jjPKutTk8F5upaJEgwSfYkB9NLTTtfYecs3Ww2iyisaGP9GQam9UgpYLr5E1iawuWQyxRdoaWg8vffqKQBAqUDL",
  "key18": "5c62WAc5vN7f5TPYwFnmWNDdesgBuXnzFHDBhBM9oMu9wyq6aV7Nd9u2BNbByjzB5mYFy2ufXPjADnjjgxjkQsXE",
  "key19": "2U3GgY85cukriURV7M8FXqWCG8od6rrbVaY2RWQVvPjRNQw3bMLLbttZQewcJo8bVJzKQzpFxVPbTyWTFDpTNNgB",
  "key20": "44339rF7ZZDH5x3eJSjygirWartVXtBejQn6VgD3KRTGtNBygFKyc4NnoYZp89U8dmFoaEsfW8cgfWJ19Yntriex",
  "key21": "3aZSy9SBzFK5VX9rrsu7rFqzDd29QaW7kusSJfGN5EdAboMf9emP3GMYAqweahnSYTrYUJNc1wq7qisSTwFDnDSW",
  "key22": "5sSuKf5udpu7DCqmNGfDBkQ83CMGAaQuWxxiUUgZEpdwh6Wqs2cXgUsS1gBustTdqmwvq4tj635Loxb9bAZQR6pW",
  "key23": "37Z8ULiyagZa9vt2DgacWQ9ajPc1kLcuptcYP6dNtTaGvHyeuwQczQ2vRCpR83JsVumTBtp9XRxddKJSqsspiaGA",
  "key24": "5Lb1fbAUrkRaaKTQsLUe3SoUywQdKQC5zVtFV9scVC2UgK1tS6EFkWwo4zYqs5ACgc7Bk7nCXtCMQnLWTSrHQQkW",
  "key25": "2noMqR2aeErAAxN6AoekTZk7NbN3xz5q2uoib429gat7wnb6bHEZeAZDErPo1vtQBanx4nW17o7rsCYPAT9s1ZH6",
  "key26": "4PtNg9f4D6umHW8g8D7hzXwauPFFseVtY9FFvD8KJQxcfgQ9EwJ4ccagMAnvE7Z3vorihww3t6ujzWsiTPkVJGXy",
  "key27": "2z9Hf1AbRdWxWxQUix9sUYkCZNFP5twjWBw3MiMFeLez7cKLoMB2jh2gVsqRha9TT8gsqFenwJwiy465oxBJ4Xwv",
  "key28": "5EK3pUCwJYhr6az9TMERyPSXM32RMdXwGx28YKYdsjyE7BN5YFrRPLNJJdCQhk71a57gEqVHJJ9ZEcfYBhFdwe9b",
  "key29": "4fVnjc1viTAsdfJ1ypoqbBB3u98vxUdGQAypkjKbx2ZzJzRbryatBHgQjDsBfevKjUuY1V1YZg5xhtr7tcfU7S7A"
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
