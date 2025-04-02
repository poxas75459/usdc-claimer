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
    "5STEHqYzfbrPNVeijLWYGZfaZ7bsufwcAbEQViy2EpnmGXMEfwwjNsnQwhsdqkwdR2qmp2DjWsuiMTmCPbw89wWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XQZ8iSqMNbcGyqLn3PjbKfKBpK2mZxGjKUBJ5SBFhfwVPyEsbgke7F2CGJoEaFNpUMdXYB2R5N9DrihJsYvNsSS",
  "key1": "4jbmgx9ZkgaDxuGdAp4UzWZ4kQPMJ9Zjh638Ln3dwbgre6TV7kqTu93qDdVzZc2NYn9uGXHP7Twvurq7rfAoq7ex",
  "key2": "3EhWwmLFjcs37fxoRZ6iNNxqioV8WS5W7zpVenMktoYevQnzy4dEayL4h1btLRXT7VH8kxmq4C9Ekp9vhEPFEYyT",
  "key3": "49pnKhvN51JofNXFXGcw4AXHeJkEriaBW1EhquknL46hD8e6k6w8REPYTGNvuoNgnN1JJnpTWDdb4nNNnfKqgecY",
  "key4": "5hY2BWLsseAzznPsN6Zqg5THpipgwzcW47NMcbdZpaKoTzRhiEz4a1HqQqWFstW8f5mb4VgNHrceKmRDCPKY8CDd",
  "key5": "5MASxnQdtEMYeQbnVmoa9nnN5Rfqqg4Cm6XHCiewXZ9GKXztHcpqYkFbKqr39BEFF9VBc5PTRKnWpD4ywX6mhsdT",
  "key6": "uHvLZPqTTsjFVR7tHFTLA6PgupBRsH5T6USQVsUbf6PGWR52LL3nh2CyKWNtVEETQoYF7HjBBTotjgFDc8G74mA",
  "key7": "3VbT3UTp4wpq13qrSzaQ1Zbx7q6HFa26VqkPvzxSSmLeg9JiHj6avqm44YGGcuHxT4GxzMb4VM37u5Ciqj8RMFYy",
  "key8": "3CnJfTM6aXYSCf2XDP9a8f5fzkhk7yPtVvcfgJbRshm9dMJU9H2Sg3B4pmnuAMPdVEQPX6gxYdjTRk6c8quJZSPp",
  "key9": "4v4B9HLtUoi1xkiV8rEV3Khv238eudjJWF4zUb4JDERGqXuHs93hTD5G5FUMCSbZSApW4UhsUmogBNxwQsKtJq2F",
  "key10": "3tiGvK1nM7yq4htbBv3Re9ZfQctgYSZ1rBNwbsSh53QUNVfdrwTAKN6adL6uQDw5fZH387UWLz6952jmuXHZssKX",
  "key11": "35LB2buoRk8UoDBtAwCtozJEdh1vWfxhM4dQXvB6Goj717wZvwBqjpZxbqrpDpgnsruSESsetCxg7YLicFFuWDiT",
  "key12": "4S2A5m1aKNTdcV1XbMipEakNxmXH4jjrBFALrcDLhUiKFpbRBnUSvaHt98XRYJqWrtzAb46fesdwkh7QjbvExuxK",
  "key13": "2hTKtgrUVESYgYthESFXBQSReKDvZ1XVbT8ajB8DNjFAWixrU6ifWmHLpXpYBtfd3jcrvuo3dYWZDa5BFbB32WPZ",
  "key14": "2jAkxTW6f6VX7yyko1oADQcC4ad8JsdvHbaMikFujTa7UNNqDZxk86oD3RgVXvYqm8mKjH6EJcpwGzyyD9tAuyW8",
  "key15": "YyuAHcBMxPpTA4mJk5PxupG4RqTMXPHefDhM6aCfWWDyJ31Cu1o1qvbQBsWGmoH5ZAZxSiPu8njfqKeDkmHiJn6",
  "key16": "3XRPMApPfzw8vfvaV45CGtJ5rGy38RGc56mBy5opYMWoBR2u4ACXwJaiMe7WM7WqRfN7s7WrQqL1YcNMtPgHq7rg",
  "key17": "4r9JfKXFqh2idCEcfupajs7UPShL921a8GWrETzEZKicGxCmST4L3Nqn9y92WJyUrxRzZiRD3G9egUtEMShLeYmW",
  "key18": "592yw5aszrwvqiNumJsrZQMX57dTRFpY418yMwV8VLX5qnKqRLqfDKYeoURX1R8adNe3bga8KmzdoWfSfdjgz4tM",
  "key19": "5rxupqW8zQ2tM78v6sgikYAUyJnXcHZbVKsTnzESo6S3ZfMidrZJ59xWCdi6x6tzDgdksL6BTXsxVJNUyrVpkWWY",
  "key20": "5CifcvWE3S6s7ngCJLjVBtVbgspSfWJrPQVWC9JD2pCzuB8KxVX1CZkR31Zv29grwSPsdjkodMNAwhUeTFNyvxNS",
  "key21": "3DeaFtU72VdGeEyucvHXH77b7GS6XaEnSuvbrHcdJosq8bsNBzjwupLKPpqtuXUEj8pmY15x7GZJKTqXXwXRqEDH",
  "key22": "5wpXxfw3tc36KZdbMAMjdi7tBCJkY6NGTF5jKoAetsNDvF3oQ3v814UjBC9ZVpHKuy2z5nTmjvxnRvWG2Ygyrqgo",
  "key23": "ovL9KM4HVwsqb8NmEiAJtUvQB2Buiv9KzG1MQVu8CockbXHTnrKXaVPJiykYvLp6x7TcQKWWVwA6WneZKpk8fa3",
  "key24": "61am1WTV9tz8fac812qGgbJET54cy7QjFBAebyxPXUuq3dQJ4GS9KGHDFLaLtZdehFVKHdtpE935Syj8hTEkPEDU"
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
