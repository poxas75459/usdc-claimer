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
    "2KRPY39nA5UsBb2R8BsgcsPv3wBQ2R9bX8YaVN9SHpSuMPCbXKCSYovFkkRwjFpfdgq8PhHSuJkvbry7UFAsanhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WCTB7kguwJpNsxvE14Dj2M46Dm3RwGbexrvNc29zNP6zrGUyL7R3zwWjZ2xxGRpeNjhpEAL5ngqFc5EGKrw3FdL",
  "key1": "4wKq8XFk51fq88Zm7y1h9PuXPhfr9BArZkSSiXNqj7sMTo2my7UJtXFzkK4nVmRDFBwH3bvFXGswsxGrpYW5bBCq",
  "key2": "4WaRRjiW5X8tL2HffFzDQeERPoc2uGWbcB1v88zfgvjoEUoFqv58L91334AHaUMMtfEkcHjeUhBL2WFG4vZwmHLj",
  "key3": "2vRevMUvBqGw1Kd6vy3yckUCrnSgjeCA3SNAdpfQLn6dqqGvR5tXFerYWoyMK9MCbT4ZPxpukAKmjzb4Kq3DLxsn",
  "key4": "44behBRK2aQLrrNF3S1mLDDqGMDPMgP8R65tAsZZYu6rggjqwa9pMypFS4LpPxgxk1DN8d1LCzRGu67cJC1buYwL",
  "key5": "4MDSTVP6CABfNyjP8vy4XGJgtgUAWSurQ2yrtUTyhxE3q7vBxAW6AdwruH1eggu8qVjvgUGr3ALyJGQ7HEY3m5Kz",
  "key6": "3UMR5fT4pd9LA7guyLKBDo6LpjCsn6nc9izGpz9tzusPitrhbchGgX83ThQktmHzNuPQLvPdeKtuyfRwzmrtsfHz",
  "key7": "3J57sTHUkCtKzwps2rQzmPCsGV5RpxJUTcHRZVjscyxZxyWEVDo2ztRxzdTg24G96zSKCm3qfzVVSJi21UBnX4YU",
  "key8": "4HiiC2tguMeSgpU2bHzJLLJkrgwgdHu75vX2KRWg3gSL2c5JSNWxdySwt6jiPGNcwwC9oZFqeaGsrJcdwvCKtPHW",
  "key9": "mvqgidWKismavtoAoyStZGQrmZRwMUvbTLcGTzJ94BWfUJgaATL9Zw9jGh9F3YxYexHxhBDHrvLzfg98uD7MVef",
  "key10": "1JMemE8CwkdniiKSPpQsjmnQ97xZUQoDZnPfeQ8bmSyTCSrBgwjiBURP4ULJisCZ72i84JUWqfnsyYbfafjAuVg",
  "key11": "4vKSAkkePzjHGxJr2tHqDDMrE8j9SZN3jKWrXWxxtimVYXtc3SSZKh9GQCw2ccCG7YVh3FL4oimtk5FFJX3YtPSv",
  "key12": "iTDoemAHtnf92e3o3qcaaK69YSATaxcv2ThyiQrK6Zd6qehqifXCjoyf1cgFa3zrqPRxfH9CP6BY314HanbASt5",
  "key13": "2a5xBNWiymmJhKhWiHwdABV4NJMTtixtrGGVCu4J6Mxk4koCLvkz3MnxJAKRYfSnJkMYU5LnxfrSRZPDof3XAYss",
  "key14": "4Pvqo5DTydb2UfT1iCSMTz6uyH5wV8YmKpoxg3rx8WSbFhnYdKB6MhzLqZJRjSBATsHPGvkRjkabAUyLLYNtt8bG",
  "key15": "5g6JN8N8AxmBvCScsXZKGhNpBWhBrFQBWc1VMr6rnwnueXmyC1Vb9wY3PTzFrg4nPEJNCUjitcMqtAP1r5uWPcMb",
  "key16": "3PgPhRAtE7C62iZTPz7YMLk9gUjLuJafxiMKu7XZowLGdaKJTEA7WxK4ZWaNW5RfjsZhST2hWUQg92mLcyWCfZ7D",
  "key17": "2zuMbEobBobqZNYx4ZW5z12wqEpekZ23N8ZjpQcrffHEC12mdFQVx7tA2477scTDhNvvksKW5YH15YCLtWktB7b3",
  "key18": "2GfgpmQvNcmVqGT7baPnQMC4BFN9ZN1cFafQDRkRgZvc27cfHZPB6ES9roWhiWFLUNYBQEs25RkjFuqqQhRaZKV8",
  "key19": "GR3M2sUY111mDE1LSzX7j2tGPqRpBiY66c2c8ob1E7rmVpmogH4wwjHdgKGVaMGRXXg3vGnFPUDWdeu6tGxzVHj",
  "key20": "4xJyfY4AG6mg2CLHtyG8NS3MH1GATJZNgRQ5EM2tArQ49PkUhxLZvHbscgsLBhD6zSSYJy17TnZQoVCwy9bLoFcv",
  "key21": "2qjqdxb5SEX5JbS4tU4wu5BLxeaXuxmYCtrM5RK4iWKkMNQ2NT3QyEaaxomRzXKoGK3KE2o57AoMocJPeBBVUK6V",
  "key22": "5dkz1UZ6CfxKztpsmos4LugB7U7XyDNSm7vCwPitqgZGQr52PJNhzUxGWbQ1xobDXuJ6hw3YgDFAUjRrPeULp6Fr",
  "key23": "3PAwMxH8CkfqhSYzF8NthRDGm4sNCaoHhDgNkhVybNv5crNzsNxbL28z7ovkuJ9UTmR5wKDQrAJ1QoawHbb4f8RU",
  "key24": "3gFYZHGcuYnvWQyQuXncGMcvjRpYHfqPYMeyKhVGCLwL3kipqkUMwHxDDgpRVceqDUq4uD2j5EwwUhCWxDpgtfcA"
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
