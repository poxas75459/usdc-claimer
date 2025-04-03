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
    "4qxNYy839TjdzUJMztGm7SXpJJEowZ7kP3GtFLdPVZVd9dTHZoyuHyu5hUwCjkvUquSUyzQyoi1RCwptcavqJNcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K748Jyyu2AJ4ocwCDv8c6P3XFTAZyhXHUyft66GZdJKEskMFNCt47e4DAS35zZChGWjwsS37yTwfZS8D7utpiXQ",
  "key1": "5Jhsx42Sd6qkUMCqhjj9bhk5oQaPgPqFdMhUj1ZR1pdTKFa8v9wEevXb7NzmvwKZXpWbDPSqPeyPHs2MZLNnSDfs",
  "key2": "3RG19tJzKDSa6q5uPBUfnj6h2wvg1wey76w4Kj869nQwgJDnYUaKJ9WUkuofT5Pfq7gqhk2JkDPNe2EUFzJFmori",
  "key3": "5nzWEjdmHXjmbuLTnBvPKY9PyA1EkfHLHu6J28e1AMG97DxckSyLbc9HMoobdxbyY6Nf2JhhJrboPfUrMVdm16yP",
  "key4": "25DsPiKPhSadJmv85EVNqwiCe2tVB22XXrtTwMQ8K46LDzv4GgeSiEX85Qd5qLxXG6PdCrCnBJcueQLWwNLAoF2h",
  "key5": "3gydFQ7AcaiB5CP3Mki2Nr99DvQoto9fLKixidYEHxuhNXuyHUKjJqoCvC34EwunjGisSmk65GivGZSEpjeTWgLA",
  "key6": "nCYFPxp64fy24jKUoFWwcrcKAZVZekryab6AtpyBbkwCvPsTXisu2x1fpZ2uyzrdBxHZfLufXeinsNr6Fr1yvc1",
  "key7": "rvcdhoFDy3iLkP1TyAZaBQAj5TTNwWaUp7FG9i1xeYiEhsTDFT7zWGkJeZV91CX4gzeiY7ux3YgjC24nshNQTnW",
  "key8": "UcJqrudKkxRfdJZMW1EVNCDjiMvTZeMbDvc2osQtSTCN7eqnoXvB2u6Emh7XZcE2KgBPXgjXGNsWMrm9PgvoPck",
  "key9": "4QsE4QKYdnxabrmtkGSRF2dwNkpRteeKdYgFSDgWMiJxi9ZXJJtLFpiLZ4Z8NMN5eZSx4Q6mw7e2RY95cn7jQNKj",
  "key10": "4aDUrE27Z1SMvyVTEApfgcjpmw1g2eERKbnjvE9HxGkDSctTGhQLXEP6LRBNdxiNYXh2PGg7816YrKaoiaPWVaFs",
  "key11": "5rT6xELwiR7nqV48m8LuJetdaZHw5zsE61oGWrUcUV72kp7wjZ8Sbz4k5s3WAt2nSSWvoJPzykv39upmt8THoXDx",
  "key12": "5BjkpPU4U1Mz8r5f5oBoGRPoPBcY63jFTF5kqJ4hjb667sFBKas7Q7oQUzh3HR7gKkuwtpgV1TLPYeuo1mUwXZUZ",
  "key13": "3PTAJp5kqqE3xTHGooRFiDdGbn54P46ckrsDakiURsKkxLaQqsxsKLrX3oSYkC32zPdhY2v7MDm7ydict1aD3gdN",
  "key14": "2UjHmG9zczX1DfLBUBjDMTnhoxHy4Qb9p1sj5r3pRZFU1WR1te88TJh2LTpXpsDZ1fGRJ7uCzuPLKXpJu4nUva2D",
  "key15": "2s5C4KoxWyDzAJHR4nYT5NwpzgTa25mb4S4tXxe6NMN2ARCtKwZ4r62bozUedr9bT8UJpso6qbH3G4xGP5DQsUP",
  "key16": "2JNFQk3KvtYPUhnVmXJNrRGuP2T4gNaRSgKWVxzP1KBC1ymsD6RVdNtw6vzR2CocSaKUzf5mcwsSw2QC8Sch1BWq",
  "key17": "4ZdZFzb7E56cWonm4Nevy52A1v9HnAnJWchQiknMLLhNDbp9ESeCBY49bgw1x32PYEGJuH8Gft3CKvEvh6i4iD5f",
  "key18": "4Nu1MgtGUPPbFvgoLkQB9usvy45DckZxZZM3AwC6mCVQSchfcQpfBUrpxm3W1o9ocjX92GgAufhxwCfz9V4u5VDN",
  "key19": "51chy6ohhjgT14zubZjsDibrTMvmTLKDNZuEC3xWGFSc6zoyhGmUqf3jYcNXMAVcNiy3vwUpfKuAczZTx3ED6xvL",
  "key20": "2WhS5xtCofee2zdBmqpbQ4Ek4jjMHSj4b7gKbYHtgjeBupg9ehq1XAfQqeCWhxydcP6CfqrZ8QaABSkZ4xcqYFr1",
  "key21": "5XaRSLGehkQpJDjag8JPYaUY1ftmUeSSYtHZxdYnb1uXxwSa1gMLrPsun3HW4oMywnmagG9U91r9wfnDcVjax88H",
  "key22": "2GCKhxxpA8VQpqFACnxAb7LfsosaHKTJwTJ2Uw8JquVjT668rupAkZGpmwon2gbPtMWsZXjG4CTnL5398H3EX3ZM",
  "key23": "3wfLYfC8y7pr4jgGgRwP9XZdh1mA8ARt8jpkaujUCgtLMNrF6nJXbbeZcGw2dXikLQ7F1nBZZPYygPyk7sU9zRA8",
  "key24": "4XmNLk4UrCBzA2H3Mb6TuFsAhSPGQpV6PfowvxDk7y3AsbTs414VBSatDYkJdfhGEDCSK7oNjC9jjwH2jFoXDyM4",
  "key25": "4TH2vHNH9v5f1xCWKkUxpD34iEKGZzDxRG76WKRFt7EYRgHK8mvqj5Yv8SqShDmrajQMQriQkXmVJTWuNVRTAaRU",
  "key26": "2DBBXzFyHZ35t5Tf4pZFWHiXRB6U94NbMgL5KVYfFQtixGSyxWspPLU1d87yJL6dzq94ZUgTwqHpa32X7LPyVqiv",
  "key27": "4SDJj4qRKgX8d52eFSu8eqrP5rMapA685Mu1Hjsk659qMJ87by2hKrLT248GWZTkiBR8vfS54bTeuWdCybDoqPyY",
  "key28": "2vBfzRw33jvvC8SbYNzaDv7Vh4tPe1jqhope4j9H2p6cAnrWDvmj1Nxr9vuZ8A2XgQZ1z2taLMoxwRGp4rKudR2P",
  "key29": "4Pp3aHMvCSGQuJ9TMaoz5SBeDLLeums7yfwvC2Z5rpteRncaSCsmSdnog8WXjZksJgK9cwfjZJArDUTVr4yBqXS1",
  "key30": "3AQHvqZ6bZXxRixteYTXDWBaXRao4aGPbHBek6qqafLaQ1yKFsyPhHSQUbHv9vzXgaFPzSgB4MNYcqWmMXdqFxnX",
  "key31": "4GsmoBEbPdTPNgUMZ8TfqAWSyuaiDhikZaTy3ZvKNXmdwroTPxq3KUNFqHZdgJJKgiKN7T8LDDJY4wWZdPmPctqp",
  "key32": "3kVLKncuJaVc3MQXomR1XTTofcL2tnc7mP6578FxXc7tyQmnFUfTgd6wTXHJ6XShVdibSER2n7ZsqQTkCT8PzBXW",
  "key33": "3J4ew3Mc6c4Xr4bz6N5HntQmgk1B65dk9W4CM2VBjaWESh5yPAMevwK1XnJGQeVCzihomTsWj9bDqC85cxBgGhvs",
  "key34": "5kzvDTGExPQvvtVrnbuqqiGp4Vg9tnGPJH4MingmAPNu3SSAySqpAs6z3pvmqsQTr5k2qbdsXKRrvfmtuSzjneCy",
  "key35": "5cNsUDH7FaWdM57vksk9aPqbTrTfEUyiugNaqHSyZJzErnbNdPKVWrRtkWwkSF59z56fJDej2tBHZZ2LphNqKHTd",
  "key36": "4mmUMpeHQ9h7KrYMPPaqfAHQZPWZuhnEUPTzGSjgcXrZnk4Bwvd689ZCSjyFnwqChxG4BLPuNLb3bHCGgu55hLQt",
  "key37": "591yZCz9mR9Yb3EaM73ZsG3ezddKMRQAVr6nRSb7pdDmrdgrJGogqfEFS1o7tmoSdu5tCmrUpwxBcsDfQKxnpsZe",
  "key38": "5zfyBVGhtrbVFmF9WR8rvzsToB2xagygfsmQk5bZM4P2zB1M9TpPagu4rKdpoXHazR24owhH4S1SCHeMwC9ijSEP",
  "key39": "bVTW5odiKRoYftCxEkXFbutAVk4XpauvjNsGR3qps3YMq8YUPku2kjygWvgCGtt61oiAXzcxBhy9gMkKuS7GCoQ",
  "key40": "GVZCDEFzTbiWGB9MZvnbW6Z87CKrgZnbKS8qPTqW3RctqEKpiU9eEkXZnnYVqbQf5ojWd6UoTXpdrAjTjbpTpVJ",
  "key41": "5hExbjuF3KuUrk2Kd9coBJUnZGunfvNjdsMMz1tLgsvVvbQ7v7XakU8rQAjuBDSGwBB1pEdYLapkMvrtaek9qVEb"
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
