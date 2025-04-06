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
    "2jadXM51eiWtaSLvJjDBHgeGSyj544EXt42d3kUR8XDeN5HKnXUKXMdHGffikquPwsux2hFS3oeEhfC5ydKDQjD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PqCejs3pLpHtUXkCkncvH2dkz3s946wmp5ndgvrrBdw3vHXj7A9bjxQ4Ks16mDKXE6L1TwZK3Cz8tQhdLb93MQo",
  "key1": "2CX8PEKxWfNWnh6F5D1TEywottB4Z29NZv1hMvjfEuJAvP2seMpxHc1FJ69tECtvAtHffYhvk7644R1CLyNYqELN",
  "key2": "4bU5C14NjqQDVZe47F9Ef1brZkV3PHoFuetTbtztWVTXeXpUDSk2zXZ7BGmRgNPJM3bgH9KQXw7t3RjW59koAbKu",
  "key3": "2rKb41jypdXzQ9eeGu1opbfEhuKb7eKtAkbGFwpbULyPWXifX33t2X8tjG8W6B83tC7MHgzP2Rw5mMhUYEi4SBEs",
  "key4": "2rH5Ls7dTt9vJ4CXmnbSnDeYJLNZuUKL25oDKdp9shGB6ggz4g7a7KHMG5fkV5QYWyHikz25HqrajX9KjL8hNtME",
  "key5": "2z684Z7v7k2DUAWpuwJ3XsKVXm6u5sE3VTCxVQFteDFjnGWke982Lb1ZJxWoGbP8idERsbHEUzYe2Ta1VkhSbSkP",
  "key6": "2XiADL2pRXscErtWXHjjY1QqBDtQ6vrwc75gJmgSSEZETxaQWHH3vJigiLxyLhpLmgCbrnusvVtudr5Btg7VsPw",
  "key7": "qQfASLLMzAhVGtGehS5CeJhxaQaDxxYw1UkJdYSRpYLtjjGzp6o6YHFxTiHgDJfiAEN7wPv6hRwzdbZp1hRtFWq",
  "key8": "4A3qcZwCUc5UQU9zpYbkGGh1EZu1Mp2GewqSGXSEvN9Eqzvie9bV7oq6CvdnTpqjBR5z877QrabEHjw69inujrQU",
  "key9": "xCGXErEHf5ErQ2Rjnrn6mQCfBMHDgP3pTn19xjLeUWupw6n4MpntKq8Ha2mCcWqVGdXYgtpvnRAvwdef6eui5Fj",
  "key10": "5rGaYthFhNoogWYMxLo4qhatCyWJen8PDE2JKBAbPUk47Y5r3Sein7Hi8S2djpRbEkmoXcaaxQF8Pxth9B1JnB2S",
  "key11": "1n2PuzSFGFSYi8yYwfnhVuG7oG1KbZqvvBQEzbpoGPKRu9kLuJmAG9zgVTYRUHmKQiVa6rk3J3PSsabC2MMT4L3",
  "key12": "3e4SwnjTR8WKXzQHmN5o2icfFmiwm1uTW19hLYJTyi3j67DdHbNkX9E9oowXmeRdEycyz3Jiw6ZVjZrcYnBBs3jq",
  "key13": "2N4zxzW2u2J14B9Z7K2qQ394whEXcLKeiby8pna9LRSkboSmzKXB5gh22B3mKiK2emczg6MCxMYSFsy3ntC5aAx",
  "key14": "35DjkmJVz95WtBrAHBMshdXLzwnZWv1aje8zhfKKMKwXteazZ15sqsEXD1g7bBfXqK9SW5BwczwcXyLX1bUr4s5w",
  "key15": "3k14wYL89TjhVTk3Qa3RBzu7QiMg1bb2u2wQnwpBqbLVhpJYoVRxYaqtSseVYaGDyTQTX8SZZo8nGwFX4HjKPF8i",
  "key16": "zZpqciU5gMDaamsonp5BxdxT3dVcSSpdnrrJcgcfVuprZNBXunU7VKQPhpHgsiRGYc9jAyFpkiZTBnBqvFKsQ7a",
  "key17": "32HkuutS3AvfDdrXstjvfWEiJFuAEmw9Gwr2udKUygA2JD7HwAvUKRtY1vyVGwBXs4g4WYjgsVYA9ZwbFHrEo1M9",
  "key18": "5anTWJh1MRi3AkZH2szgvvEAmXGZiL9ohcoaFePssfNJFmzSVgECmJCXNAZeU2S2j3n7JGDi3C1rWk92LULUJKzL",
  "key19": "5iXP9YitFGw4kSJDSeo2AhLCoQNH8H7CCdeAP7A9RSv3kymz2VzGwWR29mTFmpwmhYc6cto6JfHnrNYe1WBSb9dC",
  "key20": "3zkwD396wdAqwuYXbMPPVUWkptzVhYyWAKT6ZxRMjhtFtZqkb1qQAHpA2RY5UKipBB8M89dCc8Ai5bRCKPzx8Cgh",
  "key21": "7uRhH2SSq54BUWXENCK2SCpk9EWx6ZhJq3NLxybiGC5DarMjU3y1kSg38tFLQ6SpCwhe2W1vbTA8XyNyEYSpiaV",
  "key22": "2WHFU55jS7TQFPysjEPPTvQGvmN5EQE6Ez4w9xYSVC7XwxXSugyrLHvpaT961D1hU2EGdYcfHT5SymHQhMNew9oj",
  "key23": "3C2n9jXgiBBUNL1Z6LUNFi2pBtDjK13bS776rptzrLZosDhCTLTW8eYbBEHLkccSPAYkgWrvpH3QiySsTnhmN6fk",
  "key24": "5BhkJ1LEqTP9XTYMKnoPzqHHC5x48jizfJTDwonq4pJx3G2VB4FS4RkH4s8BAudAPgykdQFxdXWzWYJMh8Qk4myT",
  "key25": "2L4bSVS9zTd4Wvq88uCTrCmxU3dNSsRoRJWHaMGeFRC3N12xREqRmPRbuWzmyhtWo5AvcGXJ7xbzkky92V5kmH3z",
  "key26": "43FezAdgE6jhtuMXhCQsJCKqQY7befkMvH1ZEMFdnWh5NBWPrVYGhGmKqitmkqUbzVYoHD8g17Qa2iXDptPQf7TE",
  "key27": "2bScJA422PVQDhAuXe3yKEyQkRE2Y8NvsASxdsh98bap4Yxm3m3qL3nqciUuFiBLdQLegBm9BgwcsKS5LQDmvkDS"
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
