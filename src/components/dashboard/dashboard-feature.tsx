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
    "4fkNYu8LSirxL7hF7ZVphEiDXoG5V9icF7tQHz3wxkTREdv8ojCHJdGwt7437fNgtr5hzwh2JXewVF1wYzjESX3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3feiuTmarKyNuBDk7c12tXKeGQh9JuU4QJ4cr6n8CaA3fXMsjKjTVtiX9wzdaLSjxUUKKdMH5kx3PTauf8Fw5Aaz",
  "key1": "5k8j3tS82qSYmqRBWX113rqehA7pTqbrrv7zxqzkg1L8B3Y8jkh3595QV4STgfDKmMqFsxAGnDsH6imyog36DW8j",
  "key2": "4mtHNcVubmQaDzRYzpgTyjXQG1KFZGSkiNSuZYL48mtTuBuq1jnoAcaraLYyWmURLjpmdXMqtmFypaF3PYXsCKVs",
  "key3": "2xi8CBC5ZD3f4EUjnttD8AQG42yRB53uzEvQhjfXromVuvQE5pc8tGPA67HqveGzkxdcaZHBBMXvrGgH4PfTLNDo",
  "key4": "5edzuYQ6mrwQbiR7BySvjsYyMZSut6NGrgkRPgKtGZk3QN5dMcdNospb4SpyL3tQKqcJ6r97R2FnMwUG8CJ8UFAJ",
  "key5": "35HLjXLpCsYuDPGY3awBZppvqUXjGMdtihT97D5D4M5QUPWWGvL4Y8pVSMJQ914FKwQTextBjvwv4cDxeWgLXKBh",
  "key6": "5oU7FYBMYvXJihYeEypSxK6fy1de2Ksxvu5SgafvRdDWxaqsGrzz7sy5LhBTgPg2XQLFAceudekng2a5dUGtvkHA",
  "key7": "3BM5amKnPT9fSB46crwVGwneKnhLYeU72fiUErsR37wLbPBhGKBMmWbnCL3VTNnThLzpziGDanxRpPzwvaJm4NeS",
  "key8": "2ZyjBmYS8RijWeL8nhG6VNtSa7xxb5eNeB3PoQa1m1ZEUiZrzn2VrnRhiBnYZyXxRr8HHLqeMgEtBoFFiq7jWGXi",
  "key9": "3uZsM8NcP5n4cdHq3DybkumumCdEyNKfGzT4M5p4kP4dQWbFHaUfj5e1qf6LS2SxPXzDDoEyAZQJ2GWnq3MSD9qv",
  "key10": "4GYhePrNCbDSmEF5B8y93oL5c5z29K5fPxj9J1vEzQsm8tEMW7W7fMRSo69EsDRn5M1Hy6YCunHmqZ9hETFAJk2z",
  "key11": "3rEVtnejRciwQ91hv8AojuBKrVVdYx67BfQzHYbFW473w4SmZVJTSrYDJaLAHk44Y1HHHF3QyQ6cnTzoyBFkBxhA",
  "key12": "TWDQWMVgTFERfSL8tKtsHpsZMcc6kfxJm9EPzkKVAUUXfScKHAcWem31Umo8DqazUJCqGzPUaNzoYg1WC5FP9W4",
  "key13": "3p4cN1bE4rWTe7ZrbgA8mRQk65N3yGJqmwtfyG4JLBQh79hZR6rPn3oxubo9u6pFoxMgywWpq1gnnqaW8wFaAL2j",
  "key14": "5XEcJP9PcuZnEJkdVvF1L11uhwc3NfX9Pz4vFH9cks4C9bYgLPAaSqoUC3Cv3V2womcRf2WUpUa9W9r3xfZaUoZ",
  "key15": "37rD38J8jaTuuQyH5y4A2LrU6X8T6qT81dfTBFfikeMd7nYqYr5DTJ9EawyMQVun2jHzQG2Sd81umtxeLep3AjSu",
  "key16": "4qd9ZbNgZKFATuVZp23giMnGXLPiwbnKGEyDBNrHBwZ7LM3QM59Thnb1tDa2RWLUJ5SB2TNmjAMZY8cC5Fc1nDwy",
  "key17": "29xSAv5VDkHwQsiEcoNDsDjXYBrKDdCLhmzgn3hx9hQByL9FuMhUucsZ8jeQPKW7B2tXv7LYpZfDtThDQh7QomYr",
  "key18": "3NxWkY97PeE6xZsoGJcbyECwNi86kyhWMFz3Z2mfLBQJycDmS3su25necMU1y6m45325nYS6ffRefYakJA8jQEos",
  "key19": "4w2W9SwqcsxsyMkDYQagMGXvKXPJPdbsffRgCdeoUMY5pFqycEbx5CEJP8fBuWWc99Cz9yi6o1wdPjRrun3gtynf",
  "key20": "644MNADe9oW2jTXUHgPcKtNmcX6bpPmxaQwKqjnczCqdH5KsZ1YmF9pV2PXTM6W4prZp1doNS23jyvqC8Tak8tZv",
  "key21": "5Vt8jerLUfghBMx8SCHWLbWrucMBA5nDFpHjX1nGRLWK7YaP6ixzRDLficQjNpnzby1XMkK8ZDbCDGYmHGP8NpVh",
  "key22": "Xhkek1qi7NGZZ5eHukMiXytZoEY8mp5QXq4tDhV3VN9uvsLkSZuoxW9SBr8WjMz41P9DjnFKk7NKTBvH9tcVPoZ",
  "key23": "5WabdvFVeHAtmQhVGeoRXNVDatbzpURdSF8URnzTutrnWKxtpn7qpY9cgJ2jRfA48wravrzi8NU7rx7snB8H7Rti",
  "key24": "2EUyANGHtuuFY2gGMACvEwEgcs8s8xN8uriX4yu7Vrf9qeCARiynTNNgqoZheA3dAH1U9KNfhYuJm86St4DdKypi"
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
