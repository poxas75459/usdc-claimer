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
    "2LhSr2HuNV86Wyqg9U9MwopdbfyDp7n4NmjXSM4FihcEY2THpYX9rXBGjSU8Pt6QiPm8eSCayrdKkmNT1gHnAXHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vpedVoV6vzkfrJLKheRYCqxe7djRzJ4gMQd3rJ1NB8GwTnjpoLVjDwKztGcvLp5rxfTApLQQHVkD5thhWHHt4ej",
  "key1": "E4fGptWfv9BJqMsukHNLtAq7mwK7pgZL158vnVdJJe2WaSdTWokvGXqWqmaPsuHmLortBqoc7eCuQN6R7zZ9fx4",
  "key2": "3nBrEQVHgmaDa6y2LJ1fPjvf4LWrMztsgtKJWwWZtmivUY17KWyWXe6Ux71ZWn4v4Ppt2jspu3FiT35HoTbvYZHP",
  "key3": "2V7yMmeNBE8EX7rzG4A6PfgQLPw9WGr1U7Ev2ebK69yn3ejtpczsCWNBGguQckso8J9FVTG5hBWCSpjGC84gZ1x9",
  "key4": "5eKzWo1xM7XU2sMCrxk9G1UnSdsT273QTCEQqssZGF4vNb2JnPAvs1L6gMCJ6t8RXdN3t54Bqn9fh8JCy2o1o6wW",
  "key5": "2GTMqbayvEZz39ZonYNc2TPNfaLnTFNuaY8nqaXFrGt6KvynEsY2Cb6ptcSnvToyiLT7B5DRERBpSVEC2XUFQbyG",
  "key6": "dY9k6Y7UWL2Puu6LvmYHUsFaZh1Rr3PpiVxcy7ZyP9HxVnBP2fBpQHUjYRhAamoD2tGLRxAC2VSTEsdJP8jexDF",
  "key7": "4S4UnJgJodsQL66qTkyGHAtuLNMNJKKzQWAjBWbSub1g4re6ayWWQjWm2WohbXoCvDPgLBpKFkr9P91w8HFio6A5",
  "key8": "5j4VJQ8Nvo8zbAeQZvLqPFZ7HvtsJ8Q1pt3JUfkmZGQGDgYQF8mSbNPRntCxj43RGHnR8yTu2vpihvUmTXEE7YBY",
  "key9": "3tRvNhyGTumQ5bQ4qgHWjuqTxxci6BKRYH3uSfkwEu1Dx3u4pmsE9726aFNzqq8K3LnNAXZzy67DBZf2cUpKLQkq",
  "key10": "NXo9SXGfQUrp97B8E6YXERXgXHzewjN2k4txjCHwDo1g4d9ahGWAtgBrAAiaXpJgtgiGwzNu9XtnrjqRia7hzVD",
  "key11": "cTb2A1KN4Wyc8xbFqcDkgQNUxSdaL9EcXgs6uZ9UbjPhDDKZosUvKKeYKZm2LucdEdr4b6hC2Dkj6JFMcfcxJ8f",
  "key12": "2mXescWQ43invKXULYkgzNqZcAzT1CcdTS3JCki5Euei5xKENtAwcRCHWp2SWtm4HPxenncaBRQimaBkCjjaXr9j",
  "key13": "2RLNbxi15brutAhskKcp4JSAkEx1oqxosy6R7DhVzfEoFsT6UuanRNkz4JtVRK7r5viNNaXjU8rTytQkJyVbdTfc",
  "key14": "64amhLZhxa8hjn25C1EubKHpeTuq8AMN2t8fSVUJ9eCYkn4YcPRbWDEsNJhvsRfqu6QEvN8fmb8funSDBKge9yRM",
  "key15": "4jVv37UkFvL1pgLF5qdNZDN9mXCzvVVdfgQoD3AVbokrn5HyX5B3Cjw3e614ZuyrNHP2KsqiyWRL6UFBGby9btCp",
  "key16": "55EojVkqdsLxYXd8kaqZ1YTJd6K5KmmWK2VvLrP7hbSphRfMcfGEJrYQa27a52vMkoZrpn7iD3MW3Ht9rUMJRUZw",
  "key17": "4DGavMMir6rE8bYVwMkeXvoABiSBWxCzkEFqk9abBkVpTwe2ji3coG3ZfofPpRwJCycA5TPKQU5V2KmFU2pyo6ZX",
  "key18": "248aEURMWfkSatjbDXKRfXwp1PyUpKMiChkEYY26F8Bf3AfMUiPAdiEh5aTMHouNQ58CNAPuqBZ5XCJ5RH8hQxxn",
  "key19": "5TWjV9iZgNxhZyMdiUWquyMTciRqi7jXXe7Pukd12tjKW3TrF7SZWoydE4u1TreYFigvKwqq9cH8J3D5peK1Vx96",
  "key20": "47JqB1BtnoVdb3YdSwQoEzkqMxZKP5dL4Rw6sa8YLxNmFKLVz6T8BbiZGFn5q6ynuvkpTkVm9grAnXjjWT72EmMg",
  "key21": "2kX6f2SeJdCemVnpHD85ZXtUx6m8cUbL9TogNuoBwwfL9pnWrD4X42cPhgTadwuz42dtnF2oVMW4qDpHwvEmjGGn",
  "key22": "5tZiDvfMFRDUvU9zN8SDMmeEZQ9QvEdX7SLUtzqR4nXPMW6mDYFHS6TFvQhfCAdAAFehxUe4Ko92msE5pfCSPe5C",
  "key23": "487nvrrgiH79NeFGqGPEq5mTFWR3ivdKSMqFxXBiWWSQyNe7vC8rpRNXYbieHvLkTKJcgYtjbYv8Ux9Sb1MH1TRh",
  "key24": "2WiEgS9WNYFtctVFiBoECZKPqC6qrXS8ZKEm86ENdfP9JU1zyjJGfTJPf3tKvKcHSNntsP9a7ynZoK9TQswgPFGx",
  "key25": "4ovTS4cXKKYkZhaUUuBkMK6mx9qQPRs6kJUAuv7EDg68dQLAmSv5KqpKHRu1jp33nhfvqbEV2dBqi6s1VnT1VKA3",
  "key26": "4S5a8vk9GG7sMXoeodYvXai73qaCRvd9MrbBMG8gfV3itCgn7jxWpcC2Vi4BSu7uqgdWrjcRg7VzePx6MjgZX39F"
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
