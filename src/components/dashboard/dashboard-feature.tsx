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
    "3LiJzWiH9R22h2RLHSe8kgxa4M7EWbYGVVDQhYLLc3KyKLA667rtHo7cizqARHM2qNC1WdUPzQyEBtdSutn4ho5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AjZTCQBn6LMwmiEHgdHkrsRc2ewJmex2CMwHfsPrg4Htf4LMrNEmBHHLEY7UZmi3mHCyqwTRmR6JBx5myD6Hk9P",
  "key1": "4ge4wAGa4rUMZhRXspNoKaqskBHcDRQGHR1do9AWynYtA3ubUk2JCFjQcC1mEf9vMbL4SPXhbvKztUMrEXunhHQd",
  "key2": "4tD5scBnN1XcEWLNdQcsvjsvT85X3uH41AUyFcyimu5wmPsngoB1xSN6hS1a7DV9jfPwMgXygnS8WZTsRjgBUQma",
  "key3": "43yVV9X8CF4DVcWFuzhjwUBoiDK7z3QGJKLwHqTk8WBUpM1TP2ZpHD6k66csbxb6UrQJDQzMDhPKoxsj9Lw66QP2",
  "key4": "guQWoPpd5aJ9yeRUYcjLdTfEBzBgax8F2yuAdjBxWwP14ALpjg1NG8Jv67LZSz4we9cFNWY9WP8ZhEPKTQBR8yX",
  "key5": "2UGfQJyuirz43PPrXuspcgSKFZR81TXcQbHSmnTCWoYnNXyg6nveF6GPZSExXjkeB6XvVj2U9bHjpkqnowh3MHeD",
  "key6": "3y4PWy7L3iHLuMNuq7mC9wTYWVbKVqdtiJRN3D9hxWPxhWuKLRceAP9YoFAZr23wnCSkDa74VTkaQPrjJxJJsPk6",
  "key7": "4CgUHVfrAbKfHmEUHo7DxzPZQCLYrpx3gUr358AR6LQ9cuDp5r1mFX4enn5Dmmd3fv872n7uD1PvgvxigNZgDKbX",
  "key8": "5jxecRawCqEGME8vNg7XJQVTcEY64kDgCjaJzPo3ksyg89AEq3LGQXiUvQEbfFCV85oC8gE2cbe9Pt3cG9YXVKby",
  "key9": "kpDaMLHB4XhagvPikSSQhDLrnRP4o3jr7YDvvkycApVqCYJLa3Ahvx5YAACYavj6HfVpmEXQBNia3npmDneaNYB",
  "key10": "87Rz5JG5M126261z3Lke5n1JcE78Y6RZB7K91zVxuPuFLvwSdMfaYvZv3DB4MZARaVLaekVZTg4kxk69GCmVNvM",
  "key11": "3Koqdh9bvABdnECbZVd2gK1kj5kJ7sKQGFM7SJCRAYhRnCe3L39t4gp7HLgym5b4WYVM18Q5cFarpyrNj6UEwx6j",
  "key12": "33vTb2cwnqcwWAs4z3peWaeFtU9TeAmVTtEiY5dJ7NoiwpcgrGm5QKdNo7K2dwKr9bsv6tyUyuDg81jsyx5DqG8T",
  "key13": "61KucbyC2ihzV8e3Cy3T8k74fQREWRuVJT5vXBJ5GF6jB4rMZ3ymUacccd5dhCC4vpfGmVDHDaEeYxhYYpxD7DFP",
  "key14": "LNWMzy9No7SEeCwyyEU27vw7Gyh84Ngj8jv9sJ2ZnEnDcT9dYYeagkKvetBWPTufBqv1RHNM4SBVFsLx8v8KKKm",
  "key15": "4F6oeYruQxJwXGP7KmE6qwQS5pCVKsY1zQ1k6qW6yLhe2E5oWFserBUBBvvtve9VhU2c7qxYKniTcu31qfnq1kTF",
  "key16": "2WgYksm36y34zLWFZsqAye6XdQUZuUaZbjLMKK68mj9cn55HArni2HbFyAD9Wr2pf6RWXcZAERH8NKJL7jZsCPL3",
  "key17": "3Q7g9ACP5uwKpw3ZG3Z2Ef1uYXVsHezuAC357Wf6r6K4eaFrg6kbHKK99cNf9Hq6LcjU8m6mFJDNkJjHDk4pzpFk",
  "key18": "57PNQGSDyjtMquU2pSxSZWRYXTHMyQHAmsrHxm3HeXDmvDbmtvy59Wsjqw968K7h7BoHVrasxuVQouMRJVSApTNk",
  "key19": "22W4MSzGguw5t1R3ujkvYsVFiNG4g3KDfGEyyFxqJYQyEhYj9r9Wh4FosJ9ero5oQByQSV536Bf6nFGfxj8XvdhA",
  "key20": "5BXPaWsUAeSxgtunotBkTNLEwWNUPJ8TJJgS2KCqne7JXBuENpYvsmZ81ucc86kuAzPK5ZnzbtMtNXeD7CyBWsuH",
  "key21": "3S6PnznDhaSpVh9eaEfBkLvpdR3eWkqKEFR9uMwVCsgondpjZjMJJpvhwTDzkHBq57Rd5P3D87QZLY5CT9ziBxXG",
  "key22": "4aUm2vjNbxX8UrrvvuQ9QaRWeyk1Z3DLmfPptSRXZc4bPdMoxoXm5UCZPcQDiGENCQyTib64Zr9aXYb8jbakf2ye",
  "key23": "3QUzPxHcq6MtcPTLtHdvKVs1D7814jX2Wg2DwpjH3zMkQ4sw4MdntYNWdWRDrbCwPNHZpHJLEgnq5k2AT22Yammb",
  "key24": "21K8dt3z6oRBiSJhVnG8hAwWW1zp1mXwrf5vY8vtxkMccjfR9rU69uy84m7yekbTx13XZsNpWujy9BwiNRBHBRnL"
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
