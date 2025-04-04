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
    "2Lty46zUdqYRVDgnRg6rrnRYMifoL3YJ3Jbznom9Ay55bPNpYr98rCkP2kUf51NfuTcwy4pmENQFHhMSwN8gwKRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xdfNe18325HzExuZFW3en957T4w5UM4hJFTtDHC5eWoRQEA5tuK6UBzGwpbwmniQqGQvnfPbzGAVa9nYYRrQsHp",
  "key1": "NUYxN3qwrFfEzRdhwvsEdccikFyUVYZqy1t1pzF1zrsj1x6VN56Y3HB615kyfy2UFY7W8apa8a6ybGkN7dE3vBw",
  "key2": "27HE3CypkvrXh3rBLEUmZrvypMuinvZWFy2LdvETi1MLqgsVPfBL3xzoiD7gLnSHb91j12Yz7gUj1JbtettUmanT",
  "key3": "8uPaDVZqSkEjo5d7uAdyGE72hvDXfK1D7RzSxxkA42PhqFcF82YiagvCcJiwiJAkCa8QVits5KpbVzRgRPwzewe",
  "key4": "cp1ZrJwVjnAUcEEaWUeLWdp7d3G85CMbgqErcLgMnpT1Nce78EJMsdKckyYnbUQRupSoBNc3PZSA7M2xn7XaYR1",
  "key5": "3YDvYezUf38DYfn1nDStekKdUv5foEGRugiW4Cu2f9PPtrCpn9fBTzyQAoMuWc3LBkT1t9eDQYzwurzo8PJPBQ6s",
  "key6": "5ioKdrsWX66iowdK8vr1WGaLfG86q4tUMHPyodvwDfpRuUGMLDxdAHyzVzXTt6eubjJQ7KmG6bPh2ZHoQdEx1PvF",
  "key7": "iGHiLKisnYrZTcpvTizy1Rnzk2XzXWkUbQWJj17FCpRx1G4LWdr6MVenpjudSdeVbphkovzPeqgYMgEVx1V1UJ8",
  "key8": "uMoNZFj7gED179BZDTj22Aah7z8z9GzMbgAaUUncJSNzaWnDje7RXnw9WQw3AGP7g5xgEy7SxC4CzAzZuYmYYWC",
  "key9": "4HppKmknh7sUv7MT6GRdFtsx158Y5XqPCe2V3CMNFieUmUki5dP4bWon6g7m4z2iLffB3PHtb35Rc4JTXq8KLHYr",
  "key10": "4eAh9jvbFAioMMkpf6UReeNzuxbeUN8zXxmeG6w9bWMFGF15Ex89csPjTGGnTthh5EXiEp51CA3QWtE9bzk15CBU",
  "key11": "5b2RsPpL8GmHHBfbXJNLoiDMN3d7a2ViZn6QJk7sbBSo55GpvUAH41ajahEibsv9DJBTUFD8FZt7MaoXWE7RLhaC",
  "key12": "4cNyqg5f6rE6rmfo8zH42dqW6H484BWmaFCgmutHhSJt4k9jECmk1DXvvkxg2DXrvBKXH7ntFvWeWM6JhJKJ4TQW",
  "key13": "5zfumvSHwVyJtKTJBKEEfxwNXYESVfTJcr8Rx6uei8h7oM1bjzRXfqnXF3LuWgb5KHfZxYhDERagNccCN5WQS1w7",
  "key14": "2wUvMYuaTZn6mtZdSnjWjYqw8rBvc3wFtc77imJVNrDdCUdGs357iokET53mnH6N1ZKoX5b1UcQXypPSDx46m92B",
  "key15": "7nCgyRXCVPbKVYasg5P9EhUUACLCTLJZrMtX1NQiEu7GhkTqXmCtUtNLA1aQhJeLfibDw8DT58QPGw3vQEGDyH3",
  "key16": "2TrySrhLZcabsaQC1B4GpSMQ4f1ytEVufRUHBjmZjCcKuMNMf7henQR8N8R6PN8mqjNRvfWZjqL8XGbJLHKNkkbw",
  "key17": "5soSC8tCGTqvMzJm4kGKSwuM9kYen8L8wG5vRU9PVnkRRJpT5ZEH3875oVyepmYDg6jm9anDmDK3v58n21sgcbYy",
  "key18": "48GJ9EqbdQ9rqKzYSpQDXMbggFJsJwD4hNS4r6mKz9oQRPwb9ikgJTzAHTVLF2frDn7PXBCaBrtYuVPmQKj43Khn",
  "key19": "3FgTD86Q543fGDWCxDPuvGki7Bqrs9LaXqmqk2JMWiSqkGJRuzpRj4GL5ruJ19f36G2y5F7DLHknHQvTVUovY9yL",
  "key20": "2DLH3wCJ3RroCEu3NvupHvWnNtvhbeZPmortvi6e6ryX5XpAKht8iTi66UNfPkHNCjMGNF5LLKxwmfU8kepJzTwt",
  "key21": "53uFFxFZxkZ5zhbPJKipNXbVRFrdF8VsCR1gfu9iXtHpLHyiniD9UKGxFqHHekFisV262VLGscK52wmdrVRhmkFF",
  "key22": "3Un9MizPjoR9BuGSPQ8jyxKwuE871P6H3wrSgqNRwUmHjLa6YwgSn1rUmkZxhzhqZUmG65cwDESmQLwNH6aowteG",
  "key23": "2iW4noVsvAGArRBWmJf7WmrYrzhvF51SNW3Z23UTbUskXWM1xkHWVnKHpNJHUVL6LrTzxPRMbAJ78iSxdwhSKPTD",
  "key24": "2fCUAu4TS8BdC1dqxZmqVMY2dBVuZRu5ncw3a8cyzM6kr3jEepYGE4qrTL1mEM9E9rEN9vogGjbm3C4M9NvfSJcZ",
  "key25": "4LP3HEYiH2a6sPYJHKyns7eMYVAMU9TNDqUrcgc2ZDR1qoN9MdNHHLFP5naxDWbZg7YAbg5ubsXfQCBSqLnrDfbU"
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
