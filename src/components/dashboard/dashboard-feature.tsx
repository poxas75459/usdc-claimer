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
    "8LPyZXntsgLsm8wxBphVMqpXvgAJP4HKnk9dcwEqDwvBrFyq9uiJXbwa9i89izRjb8CQ6TEUp4Hro5FkWXAGN1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vrVy2UvczPL1ktn8ZV5BNPQzQGDTeBwjyz7wtzS3goDDxGjHSMnV5Su7THeUi2SWzgiVAhYrhf6UgdTWKtAyLXC",
  "key1": "8sbhbQRPqbLyxd7FpFbWr52Au5xErGLea6qyttuk8PPGvfXni8fgUZkMVQaRE8spkQsu4ZFzBvrQs1QSfDb7Ecd",
  "key2": "4ZKPXZYD2ahniEcMVwwnEVSgh8aDxbidAy8KspdDQPfZabJrjcz1Ukyx5h5tpXKtzfEH9P5CxfkvPnmqZZPf9ypr",
  "key3": "4ki9bfZ5RngFHgUZM3xFkoQDZvfwLNF8MTH3TXqb4rL4DCwUM6M5LcLH7a413Dyqyx5WxcTG8cmFkaAKuMnjD2o5",
  "key4": "2e54gQ9nF9zPkWaymRnvKGxnxj9ZtiddVq9SeQsG7nYxaQmv4ymNgHcceFvn4avfjtzvrAvV7sZHsLFZvcA9JQFK",
  "key5": "4eQgTJietQKyxaHgGfznkCeG1RX88NPGmJYPvTNzgsWY1uLS2kZxZnsxETMqcVQHj2J3cvavVjA1pHkk2pDypj6d",
  "key6": "2YvLqoyyXH4JDQjHi8XeU4LAShsDNDJfdoWEvFkJd9jnCdFqn4MMdqWe7oAtsiNtdbXsYH838ZikNYhsUPeWQ1sE",
  "key7": "fDu7jZWmiJHcev7oMX5D6onU6NKjUedjZGH7tKF7QQgGtgtDhErSPWjbHkLjEg7MXB99KBNvN63jE5djmduvzMj",
  "key8": "qdmkUMiuJwsjG1N4BFP4FyscRZrf8mUPjQjzgSHNCtXd7Nz7txbGQM7GCBkR1JM19vWLf8fb3kKAkoCugRdGXPF",
  "key9": "24411z6M2z41V7vC2CSBsdkKMaExP7Nomd5MwvU7WfLfn5YdJVh1LHcMzEFwWRmop37E2KTQU4s3nfQvVgmXQAGL",
  "key10": "XTFsgibGNkjj1LNZgmp3HRiR6XdsqLdwtgTown7kCLu5aYky3dFAKnxP5cg15dPagWdKgtNKt9MzCwqQTy5JZL8",
  "key11": "43VjXDtbWgw4UsQ53Xhwg8Baizr91v6obrUZg7yKtuPcRgw6prp273eiW23GgoxS7GvwNNbGzDJoFZVTftuYESDP",
  "key12": "4QNP8DQLpvDaTvQ9HkXisrX4DLxL8KMMCQMtefS9PE1Hq41259rjTGUtpaW3onKonrKjpcsHkZyij8weZLHx3GSW",
  "key13": "5hv5mkFWwdgR5pUe2irDsXzamwp9TNLq3vqXBawFhbjMPM8zkMpnNm4mSdB9x9SniN5Enpa9BUWKLLYQHWcqDAER",
  "key14": "UA1TE2aGqMhGdYHrbFdXDEQAtPd13mBSTunfsjEmBeSLbpEznLyUmVPowcmybTVUPzNuriXzTXBL5qfWzzVcDJr",
  "key15": "jJ3aBXDQHgMwgWPB3PV9H3ozvDzy2pJ3RXJz2LdQXn5kfUF9SRKoAchqQci67BMLpTSqXnaGKcF2D9UBRdub85b",
  "key16": "5ejFkYDdNPMZ7F38jJRo7QLWEVjU4xL8yTzqiRZ681YBCbore5wXBUnLf2HT885KkivB2Ww863a6fxF4foW4jQXb",
  "key17": "337vnEaUCJKshSXB6uFKGHBKXn4vWaoZhtxgTJ9EpnEJxRfZjjkmrNBfJLtZsM9THuGmrHzY51vKRpr2wzDC1kKC",
  "key18": "48hm7HE9iphZg9XcSBqZWuV9j5WPtYHWQxBSxJTar3oQYgX6KTESzManHnZUhTGue8EE3B87d82A7LTTetBPBejD",
  "key19": "MuJtsspgRP5XYR65jwMLZ6cZpfREzJQuQY4MEnunKozsgBTHJK5FdBGoFZTh82zbMkvz3waBPdKeZaRxX5C2HtY",
  "key20": "3kMmChNVHmUeGwax1p3LNsmDoCqyntYUk2PyH1uHVsL4ZpDjzEq5q7nyvs2vQR4A62DvzdFDj3xjESQuGAk57pbr",
  "key21": "4yn5n2776P5DpCFz1sPTrmn8unpgntMxEmi2R51H453VLjo9f88iRkUPhxiAK8CHfsb3ETWijrEAKDvGRw4TZtev",
  "key22": "4f4oVs6r3ipetxyiNKU8pUqYDS98Bem3QZne6RFAWaJmgpwnj7Q1wrq3HRuqPZZUPLyah6EBgpYzBAqB8tiYQUm5",
  "key23": "2ydES4J2rqZesfEMeYKmg2fEmd5zprJbL84JSotME82A2cjJw8WpAGhGSFrRz5SR8vgP6LGabyi2oCcZ1rBRmtsr",
  "key24": "5R41kgmQbqtiWDbiqE5Mm1f3abFBRikPuSxXeSaAG6F2EzLzAinWnvMe6nUSEhWBbBV1ct2ZAeTZ8pWLbxe5JtQW",
  "key25": "4Furke6nRpHLsBAuUn2mZGz7ac23fqQj7u9yJuGBohvMgcY7gLm1SCFQX876QeNx5fhtZRp9gLNFvRMv6pyrdCA1"
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
