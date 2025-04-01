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
    "5o5QDEiHhzkbtovNSjLwWEbg1SrAApG6xN5CHrSt1dYdeJzde6aBxrhnB5NqrcgZGFYJzVpg9zuL395WpzDZFmDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6r4nqZjmYE1Zrb41d6GkCLAfGCbRyMn5MbcthEFjqqPafhJUD6rn8cKskFYvTuNgS1cC2duM7w6JmLDxss45Fn3",
  "key1": "2ZKKHcXzg2oB52PcNPQtTwFpAYC2pkzeeTRDLH1qR1ZyikrnQk4B3Bc4PsV1UwtNERDsmV7X7jUMpi1jKRBGy4Tt",
  "key2": "yV8AeZVHZXk438cu28PeQVc1uedmTjmcVSEfwG3SzewKYUe7iTxxcJRokfXzLg8fMvWjHbDE3wu4cwLSnMybF5t",
  "key3": "4HZSHXKao2Bmh5vbgWSvxqUgkNz7shqxokCWWjcYhsY6AiigB9upvrKbDwdev42tF4wYcRGKsoUzq5osRYznNZxX",
  "key4": "5aivGHKTcWVe9d7TSoVsqJbruPsTjnQZDeRjG6jHi4wQVDsAJvF1ZN61uXTCUXzCTgDBbAaTHshyDYFN3cKxfeyF",
  "key5": "214Mi461iG6sLB5QRJHGfba1qpRUrQpZBFNEALFuqyY2LeCovjD1hhELnJt6wBYsxn8T5uQLJq6qJU6uE5C18gFw",
  "key6": "oBVKp5SihkrWvp3eJeWunWocbgTjh6H7jCDXYp5CoMQeuSkh994zWsjeMLgT6oiAX9Ca2Krb34r8zN1JTSCCZMR",
  "key7": "67RZEKk4ZXRowY3iE4z7ykZYRiqKUEE9d1w1pSiLxqF3XVKzLLRQKEhDbQiYefvHcUrnBQdjkH3sAMj3cuBFE2N9",
  "key8": "5eGvxPGjfXe9Eu4JFMzeWNXrtUvS5KyfCgPfyMqLspsJkK1tNvquwcMGn8HrBNxjLtrH1vr17qEVrtDoir2RszYw",
  "key9": "4pUFs8fBuQ5ki9wePfMG5KHzfZapEauwePLv4jaiqPtuc71EicWnDX5ygV1USa45DEi9nLbBB5D7gHnuJkXoZK2U",
  "key10": "JJfuoWeTTPXTy5C9uEnfRjQM3dW8qxAr8mfuhg4rr7wLGSuCVB62mvw7S6qH8gE4jgH8LZxtM1gszfskLR5vfWv",
  "key11": "3c4szFTZHABqaGbddzwHLiPfTi6FbcLyEjBZyc5Uc81mF3444W5V4wAaBtHPETMZxgQQeXH2WuHzZjXQHBefTCt2",
  "key12": "4cvibGNjNfKZpTu52HUMFr2XBwdqFrNhc5UubvkAR9rhkLCcqztbJJkbn4qxVHNbcaKevSEpZa2ZCECfULSqDbot",
  "key13": "3bm2mygus4E3LsfeieCyGGio2oaoxx2vikNMrmEt2SHpKTDuuWGR1WiWiwBbNc1KThjYxPofaTcyxzJFNZmaV6bw",
  "key14": "2GtevQYm86tdRLo6U7GQpmRBo1V9EN6d7yJkpCQdsKbkEi3YhR9JtGknfE3nVxHqVZqiH6pu3CySA8z8YKjuwMT6",
  "key15": "4ragaKNFoeznN8T4pvrAQS21qjbhEoUpzJbZAXdpPiZdZjfGmCpdjtHnt2he2Yhfa16L7U978rknmMhSdev5squN",
  "key16": "36HWQVCYtqrcAuK4QCUMxyS5CuBDvSeW2RYG1oWTZ6Q84Sr42rkKt1N3wYDiUVy7eCt3sr4AJ9eE1zLogMv7dXMN",
  "key17": "4KzuumjdLXKD71aptLLtNa2ZUBwkN3DnYq3PSYKmdyx2ZQ6EAzQ9kDvLwTB7Nru6rWBavmb3uRpHb7PZR8S2Zvgv",
  "key18": "4GGd4Gb88z2XWHSCh9oLi79cPwHQQNWo5a7NRtLzcdHi2PTBRk98dmXzrcnMYTQoPDUZPDFj5kx95p6bFMpHAi5y",
  "key19": "5rVqEiLJGRem18AzENChU1xKKZNmmhEQ1GmJLUJoiMHoK3gzkK71szaxvY9vUrj9jgsDNsCUEAgLYu6Cf9ScQ33p",
  "key20": "4RNHPbH5tuR1vqqpv9qr5xopQVLX1GjeJU5dgkRsN1ioeoYm2jJoSk7AuvD7eSzYVvYySnTYqJPE8v4GoDMCrfgY",
  "key21": "5Q5pUm3F8HER2ziM39HNP6Nqx9y3hSS4LAdcT3hJMc2oANMZSwW1BQ9J6cgyzJvRNAHazS83v3NFsWM8MjdZoSZm",
  "key22": "4ehmmTxDJk8ZUbGQwKBZ8kBcSickSmp6BHaQ9fEHxQHdvr1aADHbj8tkaWN3dykm52MRk6dujG3E1V3B4JfpWpGk",
  "key23": "29Ja8gbwQEjojPCuJWJEtBQZB19AYvMjETa9DBygHRJfR8cFn1Acq3MPVkj42GQyk7GHUcbH4GWdYix5y4u9fAiM",
  "key24": "5aHeVhWyuxVnVXYCus2ugEeqfoPuZxhNDChhdDK3tXRKyzW3rhzctcLzwuHbcnmVz53CUezcbrdPSQWvgCsmWxRS",
  "key25": "2ZTp5KZX34JXLeRf5Lpi3ZeDMdTgPNbhWp3rkXXL65HJrMUaGZCwwchmgniZbMCAyUCWro6HDPwSwUpfnkKh7VDg"
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
