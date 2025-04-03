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
    "2W5JkWADJucBvapBebBC5FVUiMWfjQHHWrxE4jF3CXNv9HoTHXDrjDmUrtbs6Tg7rUyBsefjLyyG5vvLETCEUBKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EjVxQp7E6bN659cdKiT6uEZZskCX51NCvZstHrpNbaCcu8Kj39M3ocNZ1gzUEXrPSKxpNdjrBA4yN3HrR5nrX5i",
  "key1": "2PxtFtpLTfdhGRJVmoKpFe5ahry1o93q9QdLw9bbSEu9EpcwpAz666y11zdbYgFHbonKcu8TBEYos64QnMjNng4y",
  "key2": "2RZN4mCFK7anKGNmjufKw8xXxNYYteLtTUBoBx7zXv8xbVtS1rzhujksPBZa2JjYeVEWtkpqi8HS9bDGAZ8o8EAs",
  "key3": "3HmAhz5qvVMxXeVBzLcrcU2nPwqdtuDJEh9Mj7MbVTBpJvPV9Bj2ur8BfontDmCTc4SEwHLSTY8QAt1uLnZ4LysS",
  "key4": "39qLZEMDVKzwFQcbGCH6s2enpQ7TwMG7xKJ2vtsGtG18X4uK1EtdPCVZrMXFKjCQe8hgm5kTwXEwd2xM6w7WqWjZ",
  "key5": "4KDTZuKQ4BSqj6gtuzYjUkDa5xDnrJaGnvTU2u398FeQUJa6JWdNENXrzMqjADGgsnA5xCVbf45mPeXPFQQopdGE",
  "key6": "5vUK7KKp9B1V6Qnsw8sTGTc4wATysfU49VVRC7TTvqZxF8wFsn13M1dJHnvk47VfEg2d75y2cCeEGd7hNyqwR3xY",
  "key7": "61yfTfumUxmsD3JLPkhwosP6wYAQz19E5nEPxqE1oyYprFeA5Kz8formft3woRXZgcTwohkhshbb27iAoXFhvEZR",
  "key8": "4NY9mgGqVAvrH7d5fVvChY4M7rrjK2F1SDWRQyogGM57ZwqSK1mvsyFANvtJpUhBrWwzTffSZTndBsj7dXProJWv",
  "key9": "65puA7djn6kwD4Q4PAauy9FxGnAonX8MNPKiQ34fCbMgc8VseoPYo66giwaGTjqC8iKSvpuT3YzuBUsWXEXsMxaE",
  "key10": "p1JmBFWF27r2Shc9m7zNrZJzoMFeJFaeNTwHmnLHXDigb9WmRHevp8mYnrdFPgefJjvegiEcEcBdegxab4dNdmk",
  "key11": "57F61fKQ1JzTH6YhSVFpoVZDmFsnMeRwpviFuYitWDeCFVEthJu1RMtQef7RzTaSgYUfumq8ZyCvUcGghJzW96mv",
  "key12": "43aGvaVocwo5hEpe6ewvvjaGRVAuTPFBSryuvV8BRR3RzwbrQdmkgB9TFFsK6tdFWSYR7HTrP3vNNn5wDDBErBZs",
  "key13": "4LAuJWKZt8bkyio9hwKsnqHo1FvD9wtnVpmRD5p38KAUDQREUeUpTNJF5YTjJ9KCeAJpTZTXBkS9PbpjUHRAahwg",
  "key14": "24hd3etXpBrzQJCeEkEaRqo8L89LoSjKbpteL6kTxdQDm3UDs9aH1zMQTz4zbko8zNVv2M4pXGHsbkQLUwrPZQj8",
  "key15": "4hTUL2AnA3214xx155qLCtnW9iYDtZWajWDpsWRwP7kW6pXtgAqfLgfCSy6SyGrrqu28BxEcDGwS97LzKk74WWsN",
  "key16": "5q5aEpTfAJG6YveoqpjRtAvkMP694KevvfKX1B9cgMZ5tmQhV43jpTrx6uWer8EKfRyiQWajz2uRfmWHGrBGncr4",
  "key17": "3AFycCoiDsKhmESG82aTNVT7TLzpQBbqtVjvcCuZ6LPw3kd2Xo2YzYM2GfQfzdgKYZuraDhYMqqG23JZFC1mPELq",
  "key18": "4Ay1ouHngp5Wrp1ST376BJvj7JejqYugoS82uVHJLCKTkmWcVtenwhrrwKoWQv3MyJqZEtoAxhtCAhPpbptLi5Hf",
  "key19": "5E61rjvbgPsth8WvsZMmUXVnKazXGCprhwrYbG4Z8XgF7sWqRz2VSG9M3GAMvgEyXN1dk4i4URW2M1RipQ4m1HC4",
  "key20": "3z8RaVWZEz4wJhEW9eSGeAn939B5eR25FREUymcFkCJb2NEeewbKUmFrSTpxa3hKXpowpdqZPbhV3jRVc6MeLwXN",
  "key21": "E2WCpXbmq9mZq7HWRSNYwDDy3sop2ghM2UwhXeKfyfdz9tRV79ikg1Q31sDro2KrXzsYAcQhB1rQZv8XcX9TG1V",
  "key22": "4dcXhtx49JfdrrwNBo6mL3SkqpmsTfyWMSfoBLawUZ7NCz6WSE1yqkeEg1G6QdtrDBf6MFAzjNPMHdGB1ugWsGLM",
  "key23": "4TTCav3GjxAGqrSTBPny7tXEoiUjVVNBBLCeXfgS3uH3Eo6Z6G898MCDg62jMihiU9j9TdxyCPXgFj377f39WVnL",
  "key24": "2CuY2uEfAC8ftRk9tESSr3N81Gxh4vDBrbD3E3NxPgwNavFRTQwyjoJbSdbyhWarVyRRLSmj6VRBBQX8tmWnFyu6",
  "key25": "3SHhhR36rtKtmeR5EmbqHXmP4Z6zWtaMT833A6gJaReuF5MHuBtNLwxYFxzAy43mAAireSDBxxtjkgFE1res21F2",
  "key26": "3668ZWKBpeuLzzdSZqkShyL1T5TZHhrdHTNLKvwJh83RjbDuY4uwfMA8ZQjmES6NFs5qZkWoStjnBAgvwykPKTk1",
  "key27": "2NhvJbFMV7ePvwJ1wLdwdP71FJB7NDpkgWzDjcMcwJT6NE6yyGxwFNka6uQJKEMHh1xAHoXy5osShwvvZZjnjdjv",
  "key28": "5RX4Md7HY5gutfpFM6cYbsnLNFnNjqngmM8vMimg73FAoS3KSjbXQTKQSLAw1uCkaqjxK7E4agcyLkKmscLSJD28",
  "key29": "2nr8y2VMZRGbRM7LVfNR2xoVyDZKNmEkipA5YiP2daUptsnZGzDkHQzaP4SoF4irf5EyZhGZ7h7ZHEv21S31onA3",
  "key30": "44hVvYVYZSyzvm8W1KEPiXncLiRau5FYzJjjRmJ8ReWyTuyNHk1GUBFT3GBCfuUn4sNWh2LTaRBwGSvgeJWSBZYj"
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
