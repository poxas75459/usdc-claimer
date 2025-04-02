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
    "4W2mP7NVQTPGuWwSAJGvfBLNAn1jZYLLqtHcniezPvN4WhbGaWt1X9eaTDb8D9CsCcZ1F43qVUgWGhUPh1JTxXM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XybqxmMtwRxxbYxxpEoWWx67JZET5dvJ1zdPVyM8BXaxA8qw4NKSkp7WRbF3BrmoLxMgb8Qcz7FQpxyCF9v1htb",
  "key1": "5r1JMtBaFAU5V9RM7WHwowdYinsYk72eD3uJBYcErtc7QVMFseZ6A7f5VYAR9JHq6ciSBX7Kwjz76BvzBkhEdw37",
  "key2": "5F6qR3gpX9g42Xrei9Uz8eYkMZkij9YtwzSEW5v2T7pgea7gNea761p5RXrafELDY5xp2HXytyVkM1sYczVXzZRR",
  "key3": "Qqyiv4ahd7zQeEPqdhqiwAYAvCi5bdfrK198HPhSHFELh1GZXifxmHVQHx9VC88WjhaS6FCykaaxLCANmYE5HZr",
  "key4": "67qp4AE9ovDhVLFc5zBMCT5mEQFumUeSPkZVQurtYMX7VrHpxcy277K9ULE4AhvEq54VzhnFZKJg6xgkkPoVmidT",
  "key5": "niHJGzNyrgxdwQ5RoswCTdLPRdkBpeZbArShbbfsp6bszz9tKMxRpyFZh5qW3HLVqgQaZJfYT33BFDceZdqMWcD",
  "key6": "4ZAtwbs5grqD5b8rXtVPVoqAUGwYWPg4Q8ix1VE5bRzRgJDzDMyEps69vn7xt9w6Ni3PG3SBzMBdfua3CcBhM1kh",
  "key7": "4ZnrAwn1gsBpjZWfkfGze2SH1obT1aR3HQ8CRtDVPewFghErbJ4eXB7n8FJbzAvuE15rjYJSFSdZfNMGNZWgoAgA",
  "key8": "4W64Utqb4NUDTGDq2ouMrZqaB6ZiNmchuiBRBTPz8GXe564hiJJk8eo3dwMzedMVTVajFwxLDfhQgxWJmnNRQDSi",
  "key9": "2fakhCpt8DsJ9NQ7bPpwMngiVLAMLWgDGEMQvAfKX68vP7b94sqgZ7gk4y7MB2tcDNcPquzB8U7PT26d42gDwANQ",
  "key10": "3ZzJFs6LSjw8NR29SyH2EQRcDkG3fjvpa7QGyw1TmmPVF87sbkvto5nmkoWok5eAB1o6iLRj7qgenZP2C5apJcym",
  "key11": "qsKcDXV7FoL85Ho3zXGvqyKr5Fz9K91GQ55iuVYmaeTYY5ENzCgLdNpHGjNA8EvDm7TCw1XUeiraWC1DN6MZ1Fb",
  "key12": "2HxehhFYmbf5K8ZLLu8K62dXeqwMNud9sFubDGPbLKTPQQi4rKVn37t9nu4WVM9cWb1qkVTQrAApGk29V1bGAx2q",
  "key13": "4W7AEp2f7yg9UC1BvTBA7aNeFeVWT23yHpLEPXpc7xHTRgRQd9v78e6xtKibvp58EhPiT2A6VfeSduEdwb4L2eyi",
  "key14": "YXNfEmPNsa8DWAst1zEN5YU4i6JQEEvgZJZUo4AWq2zaTEGoNqg4w8L2uujNN741Cp7P1g2yFeBjDZspU2tHCHn",
  "key15": "nDxntWhVFJssZ99uTWqgUHoCqEGsotNTjmr3CXhqqwzx6Yriu8x7joM3BYH55CB2D3jBNdUvJgN7DYMfQbsShJZ",
  "key16": "4CVdhy5mWXfrqApkZshmGxyiBHtg9b7ye5YskN3aP6YPHRo8ACKGzPvoEKQEkSwe8upvs1Q4HLJyeN5MCSqZ3VnV",
  "key17": "5hRx7sD9jBLzPimMurBnnw1gepfMUFVZ1HrSqfEJpJP7zKra2H9JKwuEtADVmfv66YQiyBAEkfc5NV29aYo76uM9",
  "key18": "aAtzfxBaK367NJwfuLoh9GKvKzgLCmP1rFr6Y1kGKZyVQzfqU7ePfxVDGcSi48VHzWkteYyW7Ra2CpR2gNEAzKT",
  "key19": "4Z9HpT7a92T55SFJxU8X5myWuM8yNM77qbeCDYfBWfebXSZ1HUdMwgGgBmx2JccwFUhkFhz3Sc8pYpoWnHvUyvA2",
  "key20": "3L3qewFU4JvJDrRrJbARtZETbFndNowsXmUJNXw1Ceg453kRjkWiqeHrAjPgaQzdVdV5EQmWwGih8Ru1E84W4AG4",
  "key21": "5ZgvCKZxPookCFQJDSazcEVpS8X95EGc8uo6C7DUKUZ9zYRGZWyowZjArSeFXhcYes3RS7a3VPbqwP6qMApvBoZw",
  "key22": "4qwzVqKty6vDCREziK55EvQ81MoKEozUEhWtocen6vi3ke9CSLAD2S3vQ97M9PFUp3yHdC9EQDQ8PUHG6oFawuq",
  "key23": "iqj25WpDJaSqjnez25uj9yohmzhLeoicE1vC6Hq5EsDH6YbKLCwoENKnxNKgDnq1SJXteCPQ85hV512GT21ZLPG",
  "key24": "Wk3SEJ7KWJR8A9m1VYypshBMiWMaWV38sooVPEeQUWoV1atN7VKSZijqHF6zw4Y2pNy9tTh4VtH6krk9VCmmrRK",
  "key25": "63apfiMsqsjJAuwWNf72xjvDJh2GwNt4TqZyXnx1tsJSarzzNBnqnJk5nqPGxpybvm7JqacWMfYVGUpvDJSXjSPa",
  "key26": "5QtXsX6mBcXns73hhtSMC9QbnFibTnCQH92Dc6YWNaNeQVDMVx37xvzQMRaEA2yf3YkPKfAodibtB3mZtLTQkQ7E",
  "key27": "5Qf4E721PQ1Puxbn3JAgoQ1Q2gQPafjZy9fyyaQmCmgJB5RUHy1UvUtvqf7XWnS8wivE4MXnymWQRYX6Z5XXzasL",
  "key28": "56cuPeDf3LsX6S2cM9H3XAhp9eB4e93vooYX5j7wWYJpPPdd9UxN9cv7kCJkrBnRBzsL9R4JuQAJrFdTGgUgXV4v",
  "key29": "2MUJtBYZt7iQJiFL56GUTFc717FxNz5s8pEEAkNn8xRAzdceGZyDaQBriLiQATF5wKayUmZgJTcjx7YMqJm9UH9r",
  "key30": "3BnCkfnD5TPsn4X5PAyUbkEaKwrMVwPAU672bmJmLYG5Pk7XUTaRpF9EkoRNitSg7p418NPzHunQZMKhdkLmt5cE",
  "key31": "4H5JEWUE5zgTiWnhyTd19HyfjLrj8TW39idVrDUgeFiAvzMNKgZtTT6WKb5e2KJSaHzsWx2iQNCbYa5qWKbkW5sE"
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
