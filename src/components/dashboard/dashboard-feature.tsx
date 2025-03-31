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
    "Fr6zMTpk1Bt4uQWbLppBNykyB9vLv88oUMyMZAhgGB8FbKjfPR1LWKN17SuGxykGnT3hcoVWmj8k6uuTUS4Zpyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YBkpL6JDf3cQMd7b9Sg5jeANGAAHwEfHfNMr6WfYWCW6yu6opKyzCe4p9BeVSUpeF1sipLCAQ6LqDA9SoMBtpUH",
  "key1": "4yeJUiXg2nidFr8xM2bage88V9DRZ43FtysQ9qSqYpr6B1jnG1ut4tg5NdqzWMuxSGnDvcNR8QzqZAk9N2siZynM",
  "key2": "kz67PJGVxhqFRhY5RZGrgYsNULAuy46uRihGzrJFRSU8gJeUnuBy62ZpeMg1DfwwYQ5EhuAFEcG9ZZwqX4j1uoW",
  "key3": "3Vvqdbobs4QYk6b8Vf9uojQiPKy8BBJniKAQvR7Kq4y7TaHMR2b5VoR8tTA9EV1qP5Bg92xU5x3WX2qj5VmmkHyu",
  "key4": "5XpVfq5g8EV68NvWnZgPRRmyed49dA39ytiX1kyzo21EoAHLP3fVP6dmxqQ1jmXc2ooub9howHLavQhq572RoZW7",
  "key5": "4h4UZf5Cgjr9a1qmdmVN9JXJFBk26Grk94W9vtteWhzn3PbdMNfNSc2fRr5eTJq2FMujSt6T8npq38okKTf7qian",
  "key6": "5gscsLxbWpNgDuJGYHeWSqL5N5og3FzG9akaWYfoWQRkdbuqe2RsA5dTvj35Jqe4UsevTsVcVQsX27mEEU7pcxLp",
  "key7": "3tNr3Y8x5nUWYF8PhABT21XUi8cJ3B9WhtGqD7Yh4J67aR2tBU7ws1TQYNBjdfBfQH6n8gtc56ay62NYN7F7VMUb",
  "key8": "NwEJUZ3XDpqqnU9HYSmqKCJ2ArkA2MSL7nf93jeasaGDfe7MrVh3gPxVwwsw4MWJUBucePnTXzYEASNr6wVQiqb",
  "key9": "3jDEycGvapttiHr3SQiLwj8FzZnyC2ni2NkbUYRgfnT7NJJfuxP5sKUzrhB8bLenp9jtojDe6eom4jz5ChPGMkM",
  "key10": "5iojgv3rhek1ZL4RCZKxYAvcHyvc8RsPK7v9JYW43JvfsaShf7xGrPWj7ssChRbHeQhiUbP8qwhK7kNSy3H9KREk",
  "key11": "okqWUaERp649v3q9SayMG1BUovkjLuDZyiJHgv2bBveiJvkei5LkX5128ZptxVyKPKDYqGGSxFhYXLogaRjKHNt",
  "key12": "4xT8jXBSaosU8T9p6Ks1ATrah39EH47WoryZ68znE5FKjP5ufjbXQgr45Zcjc3EZdZJQkiVszyfpzpWXQyJfbFJ8",
  "key13": "iEgRnkuciD9YA5y5ci2AALofvVGRuugbCGjn4giNa2WkJC4CFUJYsM26ZUA3UQGVXcFycjj6UDmnprecZH8jCtD",
  "key14": "2mNNdrciMBQacwzqbebU1SveC8r9fLE3HQ5rEdtyxtELcXFgAHH82MsLvgnvXh9NEYVSUnj6RgBMRGRonAbvRQF9",
  "key15": "28i9RCoLEWoNxoC7QG8pVW3vRMATaLAPtH9rUs4Ff11yTWnJHFvGJkTcJfUB3ouyBamy6xbw4bBCVLeYy1MxyV4k",
  "key16": "5cT1X4Gh5a5anqUEf8H84kG3kM74wwXpoLumkpr7wmD6PBSaYTkNXk4eRjnuES7RSmnwHx8eKvS5Dtk6gYgrdMci",
  "key17": "3Wjg7ZDrDb3ThgG7eqU2jeqXberUKFG1nagYSKGaDtvyWGrzYXWnVoE3uL6LyZJ8MAipApdJ5Qj5mMTjtekUZSBV",
  "key18": "h1vNATzcGAzTKNXPX4DwaiXaAUuRUUybGMCr9SPKzKSmou74RDFfhGqG6pSp31paq8pswC5PuJqV7TR8xw46uco",
  "key19": "2V6RfeLUDNGk9HvzXFbxKhMLJj8cTPb5ejGTsHHajgRrYhwFe3rN8PDWyrF1su4mRHoW8fBzMR4NqoYaGsdWiDsY",
  "key20": "3eTMxQupuWpDvcx1HJBde1PfwSogWVvG4atyQDxV2JXngScZqkNatxrAsjDCZbVFPTXjzmem2QdobMyRzSMVAWyB",
  "key21": "2DgDFhGxARpGBCqcvz6hXgaSeqCKYiYUnQQ9J5G8bsHoaZRRLWJTsCVquGnr2TDd8y917QZv3GGcfJxhQzLT67ZJ",
  "key22": "3Xx1Zs27tSMTH968eCbin57ci3YpxwM9xw2VaQS5rw1ZdooqbLzEzZJgzaqzgcnwm6YL4nctasmoQLmgGsAzNqc2",
  "key23": "2MsYqQgebM19fJEurA92rAo1LuZ9wtBW8BU8P67SSRFhFzigCX3PGqQwgRnWPpG4KBwhe4KewrmyeohQnjuUnKtf",
  "key24": "4CtHJMMiJMDfCpu7NNpdJ6Q7UckwKhGnCWQKDFS18CJZ1EApeYksL7XrTxQgc28DSwU6RMDuR4D2nW6Dy3L6WZWF",
  "key25": "MVy24VHuQNMEbntndTne8uN7hMco5FP9d5Ya8x8AXctGJxJc8bsbqyBX2CUvFCB9qYzSzgs1iU7rwtUTW6RPXXA",
  "key26": "at91qXf9qwDjs3ZjRtionid7z6k5EXtj2rADEQgHjTyoXizYrCUXQkdG5wwngGBrqsHgY6Zs7nJVYRjUVMti4kg",
  "key27": "3nQvcfXvud6ytRctPCY3LUwMBYjaDiE6a9m5JPhmJ1HbXpmoJsTWYwdm2BvEwoYGAU2aU7i83emucpbzs2T5pvPB"
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
