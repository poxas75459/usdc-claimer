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
    "29QrrBWBQegJSqzxN8wJtKYwwLfERJ7UpcBhxZxNkpQLaTfZMU3kNsDwXf8Fvb7LqkdKovkVyB3sgJ3LChSkJ72M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mMapXAYmwBzBPYvpQ3BYJfkPygkJ3dfJKqtKzr6qrjn9rJNLkDBGyBj57MwqcmSnaUXrRnSNiRwsZFP6hEjiko",
  "key1": "3pME3bCAyg1bywoXc8VcWazPv797aTmi9kvFmumi4YYqA5oriAwBCxPhoVYCnAiWctDED8sDKXYCEeAoxAeAVWCA",
  "key2": "2bwtfcnLcyFYpLDjErSauZdCERLj55xjHSXFRNB7LFNrBdTV7jtDiHkTZa1yNMt2BmB7gW9r1VSNBWJjr2KVCQD",
  "key3": "2XwTaNhctW7zSqoBu7tJt8uFRLKTquzQFJKDLpCJPJTgqpL4AdQPewY2HK7Kuoq7sPKT1673RoGdTc86jFSUGHKv",
  "key4": "3qN1BUy8qQVB5odCYcDtt7x2H8RLxUHqoqFg6AWnb4yetXLvNUXrMoCycWm4VNSJuH49qzdxNbvUYjcdT79dCXY",
  "key5": "4dLpxye17XnQYmRBDB8Pbwde9XV9wdk6CThMbQiDCbDS5mUnG7b8wiKmewbuzzzRXPTEHSzJcg5mkRj2zN51rHTH",
  "key6": "56tTWHuYhaLkJnphXRunF9meznVqEkoJ6ohWbzT9bS4ieDARyCXwJrTYeN7T1YywWT9CXfVnF2dCHQvr8aPwEkct",
  "key7": "3Q1vfu9cFJRBYd4rsEBxL8vef3adMWCMbAimGH1ZcpeWK57b9aMtxEpxgXc6zGN3rUyLJXVySfz7Gv8f6tsYVUfn",
  "key8": "5RFLzNLksi2HYd11V8kdFnjmDoX5ormxv695zmXxFgYkLfTMp7JxiKMFb2MzvfA9x3ktAkihzeqprpjJ7AKaSKa5",
  "key9": "5v4hpdFZGGaisW93sb9UtE8evtVKAv6A1QY8FCennBCNDjtLR6Vq54JY5oLfNKwGEcogJ6mozbA3gEyFCQoS348w",
  "key10": "4RbQfZY7A1qzcjU8oVUeUdKZ4YkqDg1Hw64vgpFsY9Q9pNPy9PQCVL1Jf9YwseubwkpDPcwHicefRMdbUH5rScFG",
  "key11": "5z6Fha3Ld6kQzro6oRTuXyRBTfJxXywaZkLKCJeCE6WgbzJx7BueQqi8ajuCHQfvrzdDeJ6qkQcabTi9y8tQrths",
  "key12": "2Yut9CSXhxnnNaqN7JPsf6ZUdwaqoATgaKHas8FY6d5WDhtNJZmFB3f5rEptSTQfH7XAasGWBbj9yfnHMNq7evet",
  "key13": "2c6pidFYDg2zhrhX1cJ3cnY5CXfSoaxP6XsG6CLPDLp6Hcty5AUW7XD7CbNpm8BWs6P6udY5x5XNF4WFiJkd6Ndc",
  "key14": "3dpVkW5W7q9iNtQu1cDK3Ax21qMZmXstKG3UWcZAdzxf8di6YaQ7Wa5xyR15k6axe8Q1hH1wqRYw7oQx6cTffBNq",
  "key15": "2ttLDJTnq88HUmtJTQjbetmYPEcipfLdzMdQnzTFhSQWU6B7Uehi4t8VkqV83mgqAH6P7iRJNGnT3L5doxmLeNxk",
  "key16": "5V2Tk6WRbZ7e2fXQGvxjgQY4jUHvgge9fvWXmadqpf97uaMzZ2K1QKymDexUEKEnBcvZmfcAXcu1SnAH9qkGhzDz",
  "key17": "5Ktxp22BwxTFALyjooN31DFH7shmNsELqdHUkJrP8BARn2oTbwCrPhSHCNMyyuugxn4JBe6cxfSduFAo5dHXsSwE",
  "key18": "4DvNdrZFizWyc3XwBtdNHNADB9G6eztdhRPJuF5yHkeLA7haid28pUChvRf8mQVNKtm47jESUqKVuy6D8EwH4ttE",
  "key19": "2Khe74W8JyEm31QGLbtrhKGsGHD1aA4RoYD6VsM9uUVZxpwKmY5QJTDyqgfZ1mYjuuUg7q9zjzDN3mevoFvphqbx",
  "key20": "4DarPgAzyxxM2UzgzDtSqvAcZ196bPJskLGwMhTARY9kwMjh3auC3cH9GZdCSd1teaqZq22PfgR9uRpwU77XDwsY",
  "key21": "2UEEZLcFyG1xTJ5qKkyzR3sw2yQdY22LCUhrVdPG46X5STDdZp8JWmwQ1rvyy6S44CqmdeuorRewhaWRrsFVQbKM",
  "key22": "2H5FC2j4trccW2TA7V8w6kPpC9vuJbSgyyhojWESrMrT1L6WNhS52hfxZbFhTtai5YpLuzBNsEiNzczHzs5ijuBv",
  "key23": "kETxGi8CTt1MaynZFhxZX2s3k4btcn7zn2ALeWG2gYjLANMV3Ar1yjnLuiDmVWtkuV1Q5p4PkkP5PnrrYTsYFEP",
  "key24": "5VYiK1AaXeYnRcFJKvpAFrTqpEMtrpXFLvE1ETQb3kJxA1B6vDJiJLBxbTy5UV4aZqX6Sd7yW7HczsFps5VdiLHa",
  "key25": "3PQ3iE4paa9BhkZNdYCfBf3pMe4VmrtAPr77hkfwE1ywH2ARdb1RppoxsQPirPdnnsmVm8ANcCCqhH1PCuadwYHV"
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
