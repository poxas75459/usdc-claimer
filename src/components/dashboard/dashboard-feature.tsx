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
    "36VKW41bojawo49A2dP1CfKqDwgr9mrKBFgKcFcmVocKGF2PSNUtwnz7hWdoFUdYMEVU3W41nbtChkWebjZZCtab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v3gf8PQWkmtH7hzYvcS2fc3c3RuQJkaKjaDLmA8qTEXYGZShnYYgjbKfdFQnKYvu4nei2dPXjTmoULKBUS8aiWJ",
  "key1": "5FCvHBFqReS51wudzAYErg6SfLmxmGEassz6CBcsKd9WFeDnhbKrc1xgqR1zTTyFsmZyDexDBUswN3WBGQ14mCJu",
  "key2": "28T94NEws9N8uyY3M77G8z93R1219BTGCvMcr2BRwdcgsWdwQvuu4ofmupwEKcU2Mgesr8X8RYR3oXpzkz1ZbRMw",
  "key3": "2Te5mgzfAPfVTn4H3NPa1N1cMye5zvKBkBWLr9t4iJRtfkNjJ1rLtHNe3udYFUuvXdexUPW3RspBLjMWmSB1CrfQ",
  "key4": "5MuEuFjAuQLUif8SwmNNWQFWVUtVbEyZTMMZJVaKqpA78nTb8hoR3Nh4NzbwQkGyt8gE7ofFjiYAWKwXc4Nqhtds",
  "key5": "U82LaWRhnkeoY46dRQbyrEH8nG9ijs9SDEgisVAy8uofDv8CbWX793GhfkiN6pBP1uis3Y4pzUEUcxjF77ust1p",
  "key6": "3Skmo94VCExsPg9iYFrijDxsWn5EZdp956Cs9tg9xqh6wyTKo5XBRFyJ4Pr2Xcjakcc17GavbYNR7oL1hBZJ8vtS",
  "key7": "3jB6FPhHoeFqFeEYH7HUas6xhVuqpxoRoQWb7d91VzJM4oyKYL5chMJ8mrT2rGw4eiBreRGjskGTkg2LbGfF42dK",
  "key8": "24NG945d9kzuzksczAH6h2k31AMnNA7zUuJqzZNtuDAKCt2EB9rHtmNHC5DqKQoKQfA4aBiVE5T37zKQZuUz9iYo",
  "key9": "4uPZ1jrpjM88242VaCwxC3xV4gSLxPr83QDBrMQdY7ju77B9kqsxkMHjEqbvZh4p5R4qwqf9W54JaQewgN5AWr7d",
  "key10": "59QsJwsihcrmdZyNbyMhMeg1e7C61KKqKaYPhmjEARCvASji9Xwc6unWJdCSUpo9wmXQE1NoFpWN4VJNe2AqhL48",
  "key11": "84vYbyC1eeAhy3pg6Jre5RkpDB6CGtvbgt16XZxQXuXWUov7aNqRQzgUvAVgNFnJzWtGcHtbZbkU9vvVNi31upy",
  "key12": "4xC3kFQyoccbKPnP7ycWhcmfEg4rNYvu1WSGjudr5VQp3ZaMC1EcpkdU8sKQYAuMYeYY3JJiakdJ1KBHR865cGJY",
  "key13": "5sAPbgt4PStbm8mbQ4FNGsXhuX4ED73V8WJbGHD3nPPycgJMaCJJ5wyuCPtfHVckXo5MJQf9Jkg3tegrp33kBbz2",
  "key14": "5FiKy1i7RFNk4He1wKFnCnBff4hxp5pU5qAZzu7zkN2RzZxQM5299h8yoj6TPJJG8mM2Xj3ND9bZpnJSA2XCckhg",
  "key15": "55Gh2WuEKAR53YNTfUVbPXUjiiezCS7XyLd45MnHBsNz7QiyZdu4DfZ9VZgoBWYmVmBYh8decKVCJKZunYKxVVzG",
  "key16": "3Mfrh94tcLMtNUsozmMLByg2E6k96VQDGgKyXaioxG1UE6jT834qpf5pMTTXBpZZR6vvUoN2W3teJ85U5t6JZZuk",
  "key17": "T176hQvdLX9z7pFo9oruLHAjRH8Tugc6WiRA5v6x4EMLowUxzPSFwb8W6SHLJdyvofvfSK3m6rFhBVn2ap5he27",
  "key18": "43d2Fuu8k5H6Uczi523rGR66jJFRmPtxzxLCNbPiUUUoDcEQrcYUorB7oo3FX72niXC223wkg3ECAC9eJKe5YDUA",
  "key19": "34eSPokcXBVV3h4gWzKkDdmdaVbKo2m5xdgJgPX91tCxdtJHGcj3jw1eJTSEYh1gB7sbnd5WgqgvYHwAGkXMLNmk",
  "key20": "22BHs3UdaX7v1SwjcugSN3EVZj455moW4kjSMsearHckZZZrQoxiJeCAo7YrCajATUN5K9rNyBEvbyfGd5tXy1ta",
  "key21": "56q9oi2GDw3Mm5hrPRQSzW8F5XWGnfC2DqCoVZ4zsdLzjh8ufGVm8TNmmfzXk7VVy8UHPrk4cDB2C7kw5myAWiQy",
  "key22": "2Fo52cuAvho18hNqZtRoELrBF3dtv5RU3TpnMxf2aMHF4z7CBig9JJDjdrsUaA9jSKyPQKUacMrDjdhm1oN5wzPA",
  "key23": "5pdjsbQi2C6mmaVjwCcP4pCCcFHineHc3aca5YGA3RvpoYVp6J4wbies5AhFoma4mBTZfMX6gRFwwV9hZTT4xUFq",
  "key24": "5BSQPZjrbbbr8bEXTwJPk7kHnB4e6ZsmnSGoUBxRj5gnnHd17f7VTbfmByr4ErWJoi1SwU4mMAaem8V2Qa7VxtgN",
  "key25": "bg3nE6QhKg5RVfy4sNKwKM5gNF7tnA9CGdG2isBzunikf954y71xoeQDYgErNZxJsBnGmWz17ZyodNinSxP7FeY",
  "key26": "23Fm6ur6p4RZzDFQM8QMW92McHQ1ixMkxsXCk8AabsJ7Hh2UeVr3X2EkWUjcxVfJg1AWUkbN8ZpBZmsn44M7mdcK",
  "key27": "4EUu8zKwcCbQDVvBJRKKSAuC4mCy8Hx5bqbPk5hgAKyPaPqvS6mYTi9cijjvAGfm9nmKLwnbErGhSfvP4h8tMLSs",
  "key28": "3RjDeWWWVLBMXVQ9bK7FEGNt5vQoESdAeyXruNgM1SDgXyNQyj4Rav6hYzf4xF7oDfwaYhzLR9yBZ4wgtMERLpNF"
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
