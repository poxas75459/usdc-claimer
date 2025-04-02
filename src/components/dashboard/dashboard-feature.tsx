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
    "55DCuyjuAdP3YbQctG3y8FmDBrTUP5n81yWZ3QexjNRuB3wLCn3Vyha1H3nrkqBFjkQUGWgEwoLfU3PtYWTFCUYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TAFAsEsokcRg8gL2hVLHFjJGohUQUediKdrF6SG8kxD1JXsDw8FNhiz6QjWX8p35rFU1DiAio6TBL3zgRv1zxN1",
  "key1": "3w8CX1k74M1HQy4B8NYx1tQJtsvcmfEWiqZdsdxVbufjShRq23fYr6LKWesh51fnaizbJTPzHw7v5kxwtGkbLW5F",
  "key2": "4AJmAGL4Jx2haPtMPQ9aipXr9cSR7QHpbGARohJvrmqEZ4bp6G1WdeT5qHL6HUysuQpeNZKk9GaeZt9CdqAymHLX",
  "key3": "3wnt1cCi777DjYhkdkcBpjJbZfznYpGkpFngDTvqryyzmXkrT7Nqp2KECbWQfeF2Rb1vBzMbLN49zL7mz6BY31ZF",
  "key4": "2meMpKZZTb85HsyGL6kJhLhGKWpZoBBjZEFJDmmoDarBdMG9Mz6erqCYYah83e4e3ZDdbzdEbqiHDszBBQtwq6e9",
  "key5": "fdo2UW12zDfp2NRqr7ouVRyEf7qvjuQDXGw1wxDt3ukrRgJUg7L94HHvCfjYzbZtjvZ85v7xJsPKxqvwvzM4TRo",
  "key6": "4bFkta6fYNkUv5w5x8tKYkn2yJBavZMbL9Z4Whf19Nrz9LDWtpecYVcvzotP4Cg5oSZfevU2UbGZE7ueE7NgZwfM",
  "key7": "5gRL1gF3RLtDHDhFbd3v2nPcRKUPqNb9fzXYuN1N7AUnU93Ua2xbBqGaDy32dXjNCop8HuXtVnjdToqd2t5hrKoH",
  "key8": "5sqbbXj5nH5YX1XgKJETZpjbJ8hemnWpX2aXzeynqsQjwo58EewEVJ6qeiPLHWdK5qrWcDJvT74CHyMAi4TLga1i",
  "key9": "qt9gcGYGKkrWD6geB7omQU5PpvhunPBZwGVuGyAwvNJz4MG89fMYb573uBUrTR7omn57YEM5h4wLQJt5qQq2Keh",
  "key10": "27XFX3Y8iknwcdhUF3xHkB5gBs5ZXac8HkjzetMp6RQi6XXZBWWBiSYjdAteCG4144FZNsXVpVCXoVXBwHNoN8UP",
  "key11": "G7qkYQYqFGiNnFcJ3fPp5qRscStuxjUjFQqwtss4Sf11hognS1aDQEQYHDbwH4zyV9t9m9kLSZwuraoCtKUGsQ3",
  "key12": "3oN5XrhGSX7WhNLtTCvssYCmFeocWywzoBKirRhH4RtRmdRN2X7hr94h8EavDi17nmJ6aT5qmebzwvX2EDgBr5xs",
  "key13": "t7wg5R8vmbkSeDDrXuxzEPkJzXyw9N1329xYgTTDRCDjJoDsh22dM9qM2a44HGWcNViPF32VQ19LBDTA5z2Yqq7",
  "key14": "5gmr6ihcoNQr3AcEiTU573T29kv3WHE6ps45UrSb2CPSnU39DtP4mhq9CkrRapcdWTEwuXBQ7Kee5GKS7Zroetwg",
  "key15": "3GvGn49YsknV7JzArRTjeVa97AGvYc7VP5jcAtko2KAqatyotFfE1G2krVfk74oJjSuWBjwBAVsV6hvkREKdUB49",
  "key16": "3EAypd2m7xijTQJCCXm3uSkiRr5MDrxcfJYxagcTExMPtQsQEhYxvMhRBzjdPmozPboaJ5cdQezB9ejSF2qbCkWt",
  "key17": "5cZKnA8cZuoh52tmWJMJyRgJdAKQN2fErvWsuQkoxUkyvLFZb4F6fAiVHTDiCV8KnQ7Yztr4Ho1wBtSxrUkk6xNr",
  "key18": "2jLLYTxwLsgWSJFXX4duoAk66KKiETdrdumbkuMxhvqCj2k9jtu9ghYMu2hEGbjenHwxCAtcmrwLD6SAXbN8LL3M",
  "key19": "ErQHFHMs9iiiTsxer76Ymj7dz5WcGdfddXA6h143bhcuftW3kAFYx85bdDp2iG5MFgJaWnR5U1SnBszF6wgBkqQ",
  "key20": "NauzAAgsZ2ppZdxFKYXbN98SAd4mxLNVhTvif5xUiWgio9f8RaVxQ59RaEECXreT9v8vGnnQZHML9wwUiWfUSDz",
  "key21": "3SwnV6TpxaNSuodqL13xuz1c8q4Ny5upen3y6eoXhi6BJeG1ZU4MuXdEZTZN5RBZcgYBoHhMPjgSCGdzVpp2uzqN",
  "key22": "hmM3BzDGL8QUGd6xttaNDc1YDZUc6QYataja27hjVjf3aMPPutZgt8BPxmcJtJEbCWMDZjnJfb14tK5yzQJ4QwE",
  "key23": "2yUvxQCNiSELbbLYD2dgwJB2Dmqhy4ugFafjs7e2vLTuhrQ4KiPqpK31AQpGeksP1pEjh8AhMqwshxCnTSvVVkSr",
  "key24": "3jsMrREdPvbVzXzvh4PGnxVhJMnLfA4Pqi2ojhdxSsmuShvVPANEn16h56HyjfcmeKtTXXuHMnJZt4kCfHicfDhF"
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
