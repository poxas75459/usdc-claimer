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
    "5AGUoHn6V1kxaGrM9N1P1Kp8pJB9Pb9xmcmQ77wmKZHR4S6MM1zKirTdc89AjRbS64U5wo2k4CaAbmGjioHRVdRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZkZLhsvDhe4wZmivKYpLJTk4dRtqFYQdFdcpWuvQic85RRkznkjtyCtCtQZZWLyrB5kHRFWrrQ9JjEPsnHCJkR4",
  "key1": "3KAFUxgw5YkHxQ95B3EThHX9WxR5L5j3QDcxnNZPwEzes9dP35733hycdheSBWGYsMKYhtqXZijVf6FyLFnHWLx2",
  "key2": "4nMEvfVkWLKQPsfxMq3ZB2h3C8pnA9EB1PCozsmrtsogWZLEPUMrLQwoVLHNi6LXJcBJ2JszQCw5JGmy8aDYJMmU",
  "key3": "2C7MUpgucT5sWDPckLpQTT6n2VHW2N3w1nEns49ABD7zzGfPm5166KX6mFDdL3oK1m8P2Dyq36keLy9vWG7aVx6Z",
  "key4": "Gnpxjmw1bXeS1QEk76oGP9FNCu7Q3jNjcjU83XVEqFwgJPKJkxwBbNdVfjjot3PEXDjKdiToHtHpXkpP3tFeucc",
  "key5": "4VwToH2SWPYGb41xkuGaR3ZNSBWcQwYjezqB7tQuZRQF6fgpwuRkpT5X4zgC891SjpGfzSMtNTXY8CRipQXgrLaA",
  "key6": "gHamtMjoMnA7QtkrEHhqx7on4XdKMtmATfySmWh6K5KPrkC2iGA4tCtiGhtigR5DK8K5AzCX1aEsuB2Qw5tVJFA",
  "key7": "4XVJbRNpQ4ujkKGnc4E87EPN2hi7qc1xgnzw9Nw2iL8r9anzaZBGDU4u5Td9UtmXuCCiQmCmqftq2QEh9QnwPKRq",
  "key8": "5DWMkgVvoD2QMg5q3Zjmzjb647doKxSVLdYee6Y5sGVwUa7ZdB1CDBHhkxJxkdUUG8VA5UhVdmubVpWP6cxHiKU5",
  "key9": "4bqivtDSpLVd3EaNHkbU8Yb7nw4Mt7fY5gaZtwGrT4pTsMbTQ1PeMfQeD176Vzu6yvkc314YcBwbTvrMMwfCehvo",
  "key10": "7VUujGkRsGEuYwBYBVuD5bAE4KVzd1QZxzA91VwarFrzivFJQ7VzgDYHBT1b6YqkNRijkhki5FemAC621GSn6b6",
  "key11": "3CFFybYBmcLcnb1WXgggvHkJ36fikhgX7RCP7b1sGbYMSCBDLj7mznFq9wnHCe1kLqxPSzsDMbo4QvJv7C7dS9UM",
  "key12": "RXyBYk39LKwaKP4TpY5j3PkYG3dbicBCB821pYTKcsWzEbz9RkYxmG1esuMnMx9FGKF6qbdMNZWHEu6ozTbUP1N",
  "key13": "3B8EjGVv82mL4ow1zuXLLWQEmtRejNywkJcaVruunXi9astFu761PAkSDsPivTk7aTB5qk7kMw7SVbBZtPjiWzqW",
  "key14": "3wgMJJqMCQxosSquUxk7emu6ymUB3DA6zgj1AaAX81qsEQTr2SQyzeJneHV86D8xUt1RQnNgTcEzAuttgsxgKY18",
  "key15": "3cmApxBTqqA7pk1f2kQx6cY3LSu9WrVqG69KJ86DtPZq9mBJaC6JqSWPfYU7snWH8TBfXddcAhSQEkqBWaqGQb3f",
  "key16": "3UV58PNFGpW4CXmUeNYLe82xhV1PFfuG8iNqfA85ryx74YDPVYPWErJSBhpGTxAxGkG3au7bDtH5oTgaygmevzwM",
  "key17": "f7sVsMhJ19ByFXdMCbJb1y51qhBFKjxvrVmbYAiLvyELg4ateEsiY2CZ2Kqxpdmn3a7yN75gYwrXqz2tqo49dNR",
  "key18": "5biUt4dTZobpbCKrP7bUvhv6NJdcymPnLJAGFvJCGWrsXt92fKtY9Gp2tQAFjo33tekjCG5gp3yowXArrz4Ljqw6",
  "key19": "4VJJDmJY9YCCcDkYXArEtWQCZKmG3RU57WGG8PibFyN6tn39RkXkQVEoRidkNa4yvgoP2kUgpSoLkogcFZZLnLC6",
  "key20": "5Y14TiKLHyYammZKqLbL3iswLK3vokgKEhynZWWWjQg7BxRdV5sfngGxMFA8YJGJ5nic2rvQufNMZ1RWnZJwkExa",
  "key21": "4usDmLTZbwXMWxYWS5eRqb91fGJFF1jxy4Wzc7yxKLH4KmgnD4Hvgb1kXuJ9iPmbEqXKGfn5Hu3m4xScReCBxfrV",
  "key22": "3A3m2kujmZ68o1LKXoXrB7C1LkZpuUJCVEugQEapYo5TWdwvAhXFWnURHUk9hnG8FdtgY6n4YjKZbxfiSefBjKHo",
  "key23": "eFPCeZ5h9MZujD6MUBPka6FN6hnCfq531FojnTVLcSbTthYwiqeBeNpDXdMGSKXp6NrJktyCZkenuwkbKVSqthH",
  "key24": "3TaYhELGhNRDVfpsmCJrTjVBFBJenbWJyss7NmpwgoEU2gcXLveP2PBj8zp7baiY2LPZ6zu9xeiyeqwiPzqRDYHX",
  "key25": "3Zkta8BSxrUjTXRhHsS7hmKY6ReJnRg5Gp8U4euKRPZibiUaHGaTiaAZ8L5dEP4jfU4ksfgTmBV32beX2dUotMoA"
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
