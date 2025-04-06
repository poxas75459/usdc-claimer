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
    "5UuxCe75Adfc8gUsrX5CnamTZdSphN87VVu7eKtUhAqEVXxcRBjKNnwuhDej5SYVfs3obvToh1cGP6PQkJPNmCNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GCRsHtK1AY5NYYjt3Yw76wqDQrYPWSkPFBWzNAsLoYBGgS1R3NuvRKHVictEuA8oNJkcEvBs4VyFNiNT3ua7xco",
  "key1": "2a8Zmic4QoCDeKoNjkUL5hgnjJ3cfXgJJV3NfKLmud4qFhPiGMyvbht2CkP3MXuzEzQuNWayyXy1d3mCyZEinc2L",
  "key2": "Db4mne9nfctLE2Fcyb6jFUkushV2Yifp8fisrptTzJ7xRB5uXi2RcjRgSP1Pqo8SgMvkhSg2VURFofN2zjHM8gr",
  "key3": "5FQAZnZozFHWJCtNhGmbiWDoqdhSxhknvxK6sYMr1jbVLFNEqxUrtHGJ7r9iP3yvMJoF5PePnx9j7RCm7cXkKGLZ",
  "key4": "5QQkX8amEzPKuULyVmjbWWDW7dp3ENBvDjLFmmfoKG7kjUetzc6jxLmUGmdKpCjBcwG5CRwqiYZHvXCYbAE4tmam",
  "key5": "2y3WK1kfde3UMQqmcLKw6mfwdhqdBZEL7rzyyhNUxeyiPfAtRLv88Yq3rFPkMpRTbhqUCLhA3K6vJUw8HvAwRziK",
  "key6": "3b7EKmkDbzuiRa3LjzVqCPpETWRAuSjKi4gBXDyFgM5fG2saTB8wzXfeRYezmhyfuzdb7hEPVE1GLf4C1PEvVFvu",
  "key7": "fhuQiWUBpc17S29D7BxhgH8rTbUyj9gdhkf8HDymY4urwGmjrQYrbcYtZmmTuVoPqCSH3Z3yT43aEn7zwpRaqew",
  "key8": "3HD5g5NJDnnu5vJLvdbnd7BcZfXB5sAXUCwjtZUp38EJqdW3BhMHrvZAJHmZccUymtfZ8F4aZeafuui8Jz6Sv9ft",
  "key9": "52ZQzuXggTgZtjs5uSgSkUekbhChyo1F88GgELt6kuoj1Cvz3FtXuL5naC3kLDJQX6craixM1iWoRPTatdwQTjaK",
  "key10": "CTKkJ8pzWwnhui14yJjZLypyxsG1ygQaC9sBeHz722WQ7hRQvsGbdFPkaN3L3sFLyz6DRshDCcJqS9WsFbHEpke",
  "key11": "3sBFxgcFxnjtgJEqoJ6tJsHkTQqjnWkcSdG64rVVGKPeJRGbAaH6D2qRHk6q4ivUiZMa4Qh6CqVh7ZtGS5P6Rfgr",
  "key12": "5cWLXXGgaYShn4byrGA9HkE4PMaWLJSd4wvYRsp3PJ2aKyJ2MdqSo19Z9yNvHxhUJ53y5Rf6vYFim5mYeTjbhqtv",
  "key13": "4faETBdkieqzSBqXv8keudsGzU954oEAo4r1TrxhX38io3rB4vXSw55egKgP9bf9JtoptF2G4fQxkbnqhFpECkNT",
  "key14": "SMPdhBnPU8yNogdfrBBuuLwpJ5nRMZCA79wMgknjUSVm3G9614JPmH7WgF7S9kPEbCUWRbQy5Tc5UsB7Ng3gvx7",
  "key15": "epki488NWKj3czAQztUuJUS5m33ta75NYibAjKwDek5YCVWccbc8ynKwwEXHiq2hsqdCeFqtnYx1tkU1ox7F5YC",
  "key16": "2R1GSxqFtKFxtbqYSGH1RqAdAdbB8RnGanWNPjjme6Ux4rVFJqs9YhUritbMp5Zq99oP3iemoXrifNs1BXiBjL26",
  "key17": "2ienTcAywfXF2YQxE2ZPHdy8CbjXpVMqwVDFZwskfchQ95yX8kWdsqrzWVVjxJRNzJ49eVEzS2XiYnKTJQb59yD7",
  "key18": "3qY4wRppYnBBkMFv591ZfU4HWa6aHJcYAx3yAtpR23BD2BWgLCQ9uZFkwvmqiss8Cw8mFcfrvTuK8dQdpmXC2zZG",
  "key19": "eTyUVUWh2ruvp1G6hXjPRwSJ3fc15Q7gYezA6PkU4jFm7GqbBfiKoH8rW1ZksXproLk9Kpd1FaN7s3BNKNYW4HJ",
  "key20": "3t1YgDT5V5wu5j2jMuW5hneqcwe8yQoYRUrjg2a8KjHcWAkiXgFSHfAUD2oYcb1HeWQk3geCqoqbspjHEtvD6N9w",
  "key21": "3zV93XEx8cwMMDy6FkMjBWxCPPis8EeEX8tVjAegYdBityTbrYmkfuHJhgFSSW9E6y1x8zN2bVeBKaoQiWLBdWrS",
  "key22": "5bX3oYwpaNmdXpvP5569sTMBjvMXS43z6a8drNHnr1rGt3ATRi5rFjC4xboLwjftLuxbHkv5Jx1vwi86m7rnjkBT",
  "key23": "4UAb4tEjFkS8VQmMzgdw3CqyfjDwAzvzmbaqesTNoziZicEQBJRyRDANZWTJhfKazUK3AKvq4UoeGf9JN2ArY1TH",
  "key24": "qJv4JH2WcSZsuJYEF3dk2kEbwFLcpRrW2jMVTPkdqSZ6MJpKXZkHmYFVGNsuoVnQcw7LoyMnE5HP9Kqpm1QRpwj",
  "key25": "3ZraRuaptfafWC4q5gMzoEry36r3ijTYxkafgT4M2zLyTxFvTxHw7iiB8tStL7na5pzKGmJN31GrQcRqabs5Swvv",
  "key26": "3Fr1w8LvX35Fq2Xt9LaG7p6x11BWSiWHQRVGgZRxACMCZNSJ36F8xXsHV8w4y1qLTSENCDybJbMvaNVqtzyVM8Kb"
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
