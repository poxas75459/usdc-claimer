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
    "25FQQ7LAFE9yhfZ9VVW53fwJ1ConRa9kWg3RVuU7Jn3NubtvhEDm25sd7qEa4SArfEMAWuQe8GbP7rD7ieZLP5JE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L7JjN99tPAueMeCq8VnYX6eJroZZcAyEp8abUQWVYbqceZgJrQyspZ68MdH5XoBAEpTAATvBXyU9sdNLwYPtonh",
  "key1": "2WFTtJwDDhXbAsAoBg7HvKVo21VZsUnH1b1S7hjXn8fEeALYq77z1Cvk7UbBN11fg5Kyj5Agp543ER1Bis7FZeop",
  "key2": "5iVnYSD28NvKVrvMQ79phLrPP5VrKUmEDXC3C7Ld9FuDoBCknFC8t4nqHJcP672KyHHoYULm1NWNJPX4DdkUutwH",
  "key3": "3tVtPpTrDYFwXXYRGrGDuwEhv4Zah2SQj12RWw6SedF9s6SJYr1sWRHqNVAF7gZJwzrH7KLTgMn4xRw5RjFUCktm",
  "key4": "24BesLz6NEtoZtCdiMot8SZBvws5qGLdfXSXFj9b94MxsUpsqutNuXeCX3GsQ7d7qorEPeeo1vUsrko6kMMxVEwD",
  "key5": "3e6Jkbtv31CKgDsEm5cW5gbviMJHGSXk38YnB5qTLwGmaz5SU5tSxpGp85rC3bRgCrArUaAyRrK6JKVtrfaiPx6H",
  "key6": "25pgG5CWuZ6CEyDYkZzMnxGuZM6m3nHw9T9YnqbUd6eMyXtDZ8jptWxDcRn3s5eXN8YYWW4rimcfYY8Rc3pMZfZJ",
  "key7": "3RzNNrToKQ5oETy7yoqE8PjN4Gmn6ug9MdLfoRpSkBjdag27MDn1xqWfEyiqbeGpTgQR5puv92JmUsaAUdpXjCCP",
  "key8": "n7UPsJ8hCQxSZQknwgq4i4UtvPBFGuGj2kNaxs6pj4fnuMuRJWHkGAFXpz42JEFF4HdGUgNV4n69KsxBNuTXt95",
  "key9": "aXuAanoLjDLzv7F31cUpLxFhV9RRTZVkscjR6cghMvTLG7ZSu1bn4sPuuiMkCooCwH9fcUCpgPoFZugVKv5FcmU",
  "key10": "5JPcpXqb8C119r7Papichkzgb34oSSo3bLzQpXsGo1Xo59S1hPTDJTDcPU9pcmUH1B1h9YqavjJbB9kqGcbesJLm",
  "key11": "3iYiZMfPEopodJryPHaCqGB84m7iEVZ9UMZJJxEJpXRHUDf1oDBPzAgS47wYM2rEyY7jpzy4BU3LaFmAdW3kxqoE",
  "key12": "2JUwU4WFUfGRkEDuEBe7cF9qwshP9FFw6bh7bE8fqPczboRqK5RrcpateULKQdk7J2ThizX2jVQe27UwNVrAZsrA",
  "key13": "CEdABPvfHgGZckXfbyHVzesoxfsHaH4m8vMBLGcWAAqjvwfrx8WGwcb2J2Dp9pws3saLuPGd12Mdk7kfCKZiBeF",
  "key14": "4H58txw3oq7K8zJwYQKSR3ykzbCkDQG2gXLhe3DNgoDFL1hTJsQ9NwqJdfMuySEG6AsRCn5VmUKFNkDAcb3FPgJz",
  "key15": "5Au67axr1KQWxpYiVq7N1Ucba3Vot3E3jiV1Fn8efJ1tDKod9wL8Q1WfAQh3KQmaihFRo32MAbhfJcufx61c794d",
  "key16": "4rAweEFh7iygsCbcvs3qCm3kULt6s84miLNdFPB9o3jL6teEP1h5kEp7FmxbJUCmydH6QmbpQERG7EvnKCwSy1Md",
  "key17": "4ehvdnKVpW6DFSF2Do2R7gxwS7oJwJXQGnA99rGA7gMrWH8Ezs4sfNtg8wi49PYvRuTWJUWUcf9gRQMEDMBNsqLC",
  "key18": "5NecPWVnnFZsSK7z3bXCEs3DNdq2GP1cMB8EvrKLHyb4AR8kZFoY2BoEL5Pif4jjYRPZK1mrmCB5poJqg2Gvxy1J",
  "key19": "XMfupQfrL8wcqaesCzaRFEJnLkrXGLV3C8uPPz6rUDfM8jgVe8rtxWEV5Ao9kUtDWeK5QP1GvDDzMyJzCdpuJqa",
  "key20": "hqfN3hb95hQPEtiJDZXuocXDfFRmNpSqUg7BEY8xs39Dq1opcN2pxpkx3poTL3MeukbgpRUpACFaoAPa4Y5r9Gg",
  "key21": "4xdKeekXGmbNRWVcXMemJCzaGG63uxEmyhzEw9qvseA6gvG67xjB3XeUjPHxZjUx51mXRS79YrdM5BAZ4JQLoMD6",
  "key22": "239fzac7iEKhwiTfLEeouU3HLh5jp2phiAZmgxnriNZozyARWiCE6UCBCY4Er59RNXHfvj4hpxTmajDuEHfdz2Cp",
  "key23": "xvQjGEXJYcNAJbJeC7MorZXwtnRyYGDiacUDHSm67ZvuGQ2hvdW8dUnrhjxtJn88u1ASzPsh1Gp2Tteyg9y15R9",
  "key24": "LE9qRVMggArgt1s53Kszumtr5ezTS8cvuqhcNMbQ8yDRQ38RqVLbpCuvxx199bzb9uzy9nXVghhZw9MGMuxrqgT",
  "key25": "4iEm9wc5kDBWimkkhW7mcW8kgCzJSFU1R1qka9ZwYkvsGjSLKpT7SCPtP2GR9fEw8wvt4CJyD8kQDo8hDD9LX4ZX"
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
