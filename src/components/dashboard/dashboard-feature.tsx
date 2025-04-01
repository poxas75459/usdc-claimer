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
    "4P7Zrw9QeTQE6MAQzXSPgtQJfNDYUL3mzDHjjqNnxXdHgMHEoGfdyk4vwWejuhob2u9ERE3x8z9sorQwd7gt3FcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g6kv2SjL63MjEATbtmwhCbKEf62NPkx7AN5LfSho3MhKUAhCcCy17FMxe9UDnXRoiYKpkHsEVrkHo8K21PvhB1v",
  "key1": "2pchFd1VZoJ5SwoBWiiB9jxD5a4yrkJh8nfts6adg8E7zatJ6qvvW3Cutg55ppHwq4fyu6ufrXMBMDreFhb5ZXxK",
  "key2": "5AqeUgTZefSx98BWBDLuvAf6iutBq7eBRcaDFxpNz1qoR15ei2MGrKGRfHjBYS5tLWXUgmZbPtrM5snPcKaE1Vyf",
  "key3": "3GRgs7Kkbexin1AGqK9Jnaahqt9G32wXpJ6BEUFKgubXUhNqvCbkk7B2Drs69JqCC2bpYaKSsaNk2UGcFr6Ana2r",
  "key4": "4Gqgr6UUxmfoA5SM4FyU2hUbdd2q6idPDf7j2j2xd7g8b95fGMRVz7BQD97PsupXGDtTuh1yQ8exTMRjpXu2rUcQ",
  "key5": "2FdaP4XXnheMZt6FkNKHdwon8FEo13oD3wVPTA6mKNFJjDz6N4fgQPeBdkcSsAHo56GZmmLTCifWF8k6AuAi3ofy",
  "key6": "8PnZMAKmhoErUAL63Pq6YsemExv2ST6n53K7ssLk9dS5iAt8FXzMmTbziFjFbU9CJdzckoKc4QMcgaBKEJ6U5Ba",
  "key7": "7znhQMeA1NV1UVTbYCNw4BXd8Gddb2SnTJ2Ty5qGgypqnetJjA8CnbaBp8GW8LMJvMVsUETCWimD7fxCZMwuwt2",
  "key8": "2cANDJ4MXpH5u5iZb9Sy4NfReHtJ5NZi62dXrbgSQkb9oXxXBNG3iBuYx2hag5cSLqfLC1c2UtJ8iKCTobmx73UP",
  "key9": "2aLyqtYZodHmztaGAmEmrKMd6Wk8Q2k11e3HhcTn5J16Z2oWsv2bLtqMZLjgWRZJP96Fm3vCBt5R7XYWbjFZu8pA",
  "key10": "2km4XGUdqyazeEDz9sYJLWTkmLjFLNch1bqHbjZriaxFJGK39KyG4rmdTCfG7f1XX3SJgmjv8dfh6ZDixuzCuLEa",
  "key11": "2ug1wvUtkG6zRoLncuZqWNn5HdaoZLakk4Lj34tW8Mi3gdFaQsYy7Ve3Rr74n7kZLqnaxr2Pscs5xNvT66MGt8WN",
  "key12": "z5zLQGHK2hA86iTpx98V1DU1WSXFAMm3jA7jqm4MfkAZSjqqvgmxxmR8JCqY2aiScTeXE4sQbjsaR1MnozTGRvt",
  "key13": "J8kGMHCJ2VStGiM8HMZd8nxeRKb7kGRkU9qztteMfEtDjunC11iJfgKqMPUchq33ErGan4QQwCGFbz8X1wRgqW9",
  "key14": "2fjSsj79xUSW3KP5LQUa8vezkamMZjVFUzxsPo3eC9Uh4sBcwRpQcMh7gvT7hCb3KMqnNGeQegzbdc7Jj1iWhJDr",
  "key15": "5e3PWPEw8iRfsVAFs74E5tdfZWmpjAPBwifeGqujugvt6wNg5PVKzhavjuGHT9VrgLAtjL6nvHSvrZ9NnsJSgSCX",
  "key16": "4NQ6PedS8qqgM6RuMVSWB3gmmBdZ8sNHSK2DE1VLz4g3zgHGs28XGWQJDrfSwuE2kstea3crTpQ9A2WVvCskERXy",
  "key17": "4vvjxCFw5qpoy61hqY4RGqMQaUXKx4La8BDHGuDMTUkh8Dcnpcig4BwZDVCFGTikPakHg9zQc3Wd76yftTpqJvQD",
  "key18": "3zTx6wiGJ5ZBxPBRDTM9E3d4ouF8Y8y5e9aLGXJR7c2k9Z1781y7fGdFNs2pHwpjh2ZRtuBQkcCf5rHQx6dJdcT1",
  "key19": "3YUo4UVqu9Xo6Bsa4qvEXnPmDddKdAjLnfB4oDhqgYy5Zc8jqunpJX9X7X36cwEWzQLpsqLWCnwSvUeVQoXMSamN",
  "key20": "5mdpopiF9iG2QEdtwj1Q2vhw2RoxyamVkzTYD5kcQsJ1QeqZsUuqZkJyennUzwcVk9saQ6uKnq8478ABur1C6pzM",
  "key21": "2inTrSz2HkCJ33ouyzdVBjmLMjhHbnDYGN4MuV7p8eFrhVud6UT5LGTdmNpoNaZAURk6yi8gw24iczK4AFzseNCk",
  "key22": "hJA5AUFV1nQUVj7gystqAjq1jVn6HaWRsGw1q2dQ2SDYyPJcKPRXDcu3UU7H1Fq8CKa6wGgiU421w4bSrCCQxsv",
  "key23": "4XB5CLhZ7aGrwKNnn94yAFbsadkbpfwJYAjCHKFH1CGq9bGHLchdRyoGANr88RMxvALDBvEmDMQYEViZPNEa7d9m",
  "key24": "4A96u5SxT3t32GTcUgBrbdqhSf9aA8rRKqK8vjWY7UEdRbhFtVqHzcsDh4cqfuou1RRfgkc1Sri6j4Rai2JhCoUS",
  "key25": "3bdZNW3CBYMDfjo677qY3ttNGzxmoAccrpzmdcBdPhLj8MEK9kDP1tJMLiUQuebAv9zwdUTbKnX4q8i9icgTXgnA"
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
