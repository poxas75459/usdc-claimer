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
    "JstVHGZifTwwFXq4s4TnZ3dVNeUk2E9jrL2xJR61APfSQkvMnKxgmMFFt3MQXDMh1Z7cwi9gKxWR4k1vabJQBDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23pvo3cikzCBmeovK4BZWYJtYLZbZ9aKU2rMe8hB46j8yXsbXtuxyrj1tAv2jYYBJEmGRDfsLVG8PF1TGpL3FQgA",
  "key1": "5SsVyt6VGbCsdZo47Bw1Z3XVSpSmy13zgPYN4ktcXZd85317XoS4uH17abS598Cqu4tPRnu38GjFcehhkVqTSian",
  "key2": "3xxce4N3CBNcx8cqNdtCWkSiCSTb4CyveXmdbnw7Po2cYwUA6PvvzTkCVAsi76B3xRUqLPyMRoUSq8ZycUs1pCZo",
  "key3": "QqZmK4Dm7nffEAc4DnN2jh1b4X41M4azfzNZvq9FUSM3hu5WT7gDkcrwCWYNFzZwmwv2BvSxwN48qhv14Hmvi2H",
  "key4": "4uERWztRDcWLQv3toRDk2mKYU9JjqHmphVWwCdCwSYzY8VMgLzgWxF4oe9ZMzyJcVEMCrcJGJNMHbAdvikjYztw8",
  "key5": "1Ujut1RDGYduxiZTKJ7ZsdG85PbJUXCDJP727CmWTYqLw16TMgLYGRvCJKFCzLFVsRoebV731ozMc4wt8Xbn1ip",
  "key6": "32gD5YfHMrTJEd41HBjYCRjMoavgzuiMjiktL8H51nBDZU1ZazzN9iKUHLcNERNB31E3QN4NjCa1becAF66Vf5oE",
  "key7": "5v13U31Rw1fVxjVZtzvvvnEVjKuCS3Xhc3TjhdkkvS9RUZd91wHq4rjhpUVnBSTjZPNRxWqAu8yk8qAqSYYfwW3N",
  "key8": "654ZUkYHqCJbSM3ErvYEezMfsY46gmkCRLCiuce3ftS7uhSdJyCvYKmC5MgRriGKVmWGsLnwwosCLwtih3HKJFkx",
  "key9": "2GCrRXY5nKRqA9GaXMbFgn32gLcytyYhTCEtVwFxe7HTmjyxxXxzCPZrGqvammgxpoFfb3dsqUcaKPS1ecS8fkeR",
  "key10": "M6nS4mLzPmH1GzavdwZ73gb4wjak3abj3WrbMaTLWJAhTJxWjNGNYCiAW6EyBZZCHn4towoKEdV542bw9WVYngx",
  "key11": "3UmQHjV5NGEtRjH2BdmwtzuBus8rsq11GV6TgS5CuaceYTGT7Ym82GSdpTZC9GK7cExBaRS5QKJKj9A73JoSpvdZ",
  "key12": "3BNieW5BryXadeDjk65yXLe6kfmFiNSt1YVj5RkNX8Z6UzMigBjkfNqPNVPe3e9eRfcJbCZ4Ucp38HLmRdquSyUN",
  "key13": "2Z1Sn6cPmgn2TwFiiHaxS47eK18aJ9CAWA3NSb8Y6L1E1CB2KLnfJT7Ffenc5kUDMuVJ8xi9rDFHxPf7JZoSNrpA",
  "key14": "54ALZcUsArwza36HoHPiSPjoRQrq4fCHkNeGKrQN3PvyVGMqMmGPqwJ9mhFhfkyZWJSfJ8JTsKNX4cPhnxDFwn6d",
  "key15": "pJXqAwYhj2tkkVjTdDwDimStH4HrNknCiAEz5aFLehUPY4vkn7hTkeffhtJpkiZEvyTY3EWiq9Lz8wBgR9Gtgc4",
  "key16": "4aoq6m4NzRX9r2qobaJTBVEiSBBvRc36VTcJhnpjUebiaMQNhwtzk58UHZdhtVAudmPwHjwRVG6qf5G1Du2K5ePu",
  "key17": "4fHwYLReJnwFUVhDXewfV6VEAtco1f9oChNh7zgY8CoJEKL4c6SgVF37FxKTpm3SLonbbphEUscm5o6oDUzqD4Dk",
  "key18": "4GKMUhgvSLeh4fiGzxQ3gaD6MYZLMBwS7LG8ycNCjiTbQ9iGi35YDaH8fPzteTccmL8s8HDp7shrDnz8wxfg7ZEx",
  "key19": "2oK33GnmEoaMNDMRwzWStHeC7J5hz7GJoCmHhvY6BhWa2tnnTLNguNU1rH6tdChZmk9Bj9uX8xEdLYrZrXM7QfLu",
  "key20": "54drBdAtChnvE73YR1CUrKmNyxRgPcTeQhEsceNZpRCMqoAgKXg3vnF6FttsW6fhet4UvdpCpX3z4sS1iwo8H5dm",
  "key21": "22W9f8RZfeUaTF9Emki9ghVEXgnrFwc8xPWz8MHMzG6bJZ7uBK5dUYwaakZ1Kh8bu5ALTzKa6raRAPN7jNditZB7",
  "key22": "27JeTnHrWY7evSWcMxHn5eotUutU8MFMtmBBY7xbEatcTcNqWrAdQrtAhBFUqegZYsdqMDfcj1aKcVDHrBphHZx1",
  "key23": "5aEKeLQKVGp9YR9HDUz7eFo3vA3bPjQAo8nBvP88uoFyEKuUBESEEqqSr49jUz93yuLYBxgVFtZNTFXUJpXqpiRL",
  "key24": "31XgWvsqpyMTW5wkw62cLKefvVg7jjFWbhMYWd5UnMeyqXxJrhGSbuWdcb6p83nTFqnRPTfd5WDKLWgP2ytm4Scd",
  "key25": "4LTnZt2fcpuad472RFjbmAG95A8CkLfKknt5n2RbodJMyHejhcpug1eodaKp9YStA2mEhG43kxrxsicRuWiekNtb"
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
