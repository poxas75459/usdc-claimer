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
    "2nQohdr2fMbcR2nMgXyk96crMRpW1BfXHT2oURHs8DJ27ZmcSLAVgUzADZPf8Wg5oo9J66hUgq5biEc1wV2EKW4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2apvDZDJDSEJjcAJjKoLEfDsbY5BnommZAASNbAEaFk4gYBzC1D9kuMNKzkGiKtaksY89Z6b5M9hB6v4uzWK7iXh",
  "key1": "4AFFbz9RER99CASVSDSZmmuQdGYvQaUJKvaASDVF6DXzv9yrNzt9mR8r1u6m2HyjzcFwxjaq4GuAKDdqfT6ofxtU",
  "key2": "5YWJ7bcR9PZi6EdbrPSVYKkssvp37N7Dym5Vw4UH4ufcWfmeJYHRoMhW4BNKnWG4RdG584xzdGLcQpWyXvrneeem",
  "key3": "5sRxSTfn9WQfYdtL5Paah2HfzLQohCCHtGAp5u55GN4Eif4epbEevWc612sw54Wti7bVRexzU6Bv5j5CQLPeQTSa",
  "key4": "5jCx5uBfuxXxZL7jnVRMUpjwy1FhmjnahJnivDazn9dk4bV9ynE3KfkuqxAf9bmj6bAjc5Fy7LxUB3MeeUpAsgCB",
  "key5": "3WmQG4n1C9xb5FqU88uPUvNB7EUmfv5XzqRG7cNha5pZtdcJDVWKPR5gAFU9PpmqCowZE6Qago1cLdxbv22wFDKF",
  "key6": "5bAG4xikJiyydS6344oMRgVuvRtGMYtrTT6Y7zHbYVjeGcjgJjwy51xVABC1kreCXTWCtBtNRvroig1SguhTEA26",
  "key7": "5JdeDr33Yf7HoYSCiq1czEFm3R3cKAFP5XBduKTyFxYWrSVka2XrFmUn28VP2Vxw7LNHLtoaEJKadqRoH87NZQh6",
  "key8": "5MGMPZdgLvLCmcjuZVad4zFiC88qPkC2r8oTsrZ63prcqd5AiuWHt3NhmU5SDgV8GvXqxRR57qoPj8YPYLcavUYB",
  "key9": "5B5Ght6GfqnuZmiHF2tU6zeBhFJ3AkYcRrAGiiLqaY5iyJbWvZ9N6epbKzebUUNUYotCLGa6uJQZSa5KzhjPyNS2",
  "key10": "4CiVKqWRrMDkSFARc4m9F51JhmAiPDKmagT8FzkXQeikZRvARtjzn5WJbWnYuW8Y3hYYf8C1fz1xjFZHFYwKufD3",
  "key11": "5EKKrsmNbn8c5fV7Pcvcc5ukuvL62ikxdRAXfRbRwmubk4xmjVrRQWDpKLgpWWQqjLQpMGr5wt4GPdrXsB9357GA",
  "key12": "5tuxYNmm3ACwCPS9e1cLvwR9Z33KS5zHRecFhs973cFB6grWy3ScUbPL1Ke7xF1M5JwqDdgnDT6HzwHBsmUYKRDc",
  "key13": "5veif2otpWiHTEJAB2hHwvndBR7NC1DkGPNM5qTheKmhaxR3HZXtaqwsbWAS23FqB3PfQpDP2MriE9qwbdtmXSZ7",
  "key14": "5VhFoBPRWHGzcNZpmHLL2evs3ZUxsePf3wLiogmFzqAPVgYR7wAwqqwC7NAGgvjXmmsDHiJ6xRD62mpJ3jgWomS2",
  "key15": "4zTHpJC7eZhrn8gqL47oKFBasRJqdb9jCnBALt1RY3zKQoD1ggT4GNmEdaAvW1YpJMbidrcY2djSYjSHYYbxfUgU",
  "key16": "5yMycJkExqJz9EEdoApbAL4vN1xhCdC5xLTS4AZoncrL2op8fCmS2sdJ97XngFWLFie6z1syeb4EMYBCEt3deeFt",
  "key17": "3SEQJPS45JHHZ6xw2M66JAUbiM3NawbtnmUJm3QevMH6K9WoFMmDjyPEwHpadzHXFT5FpEWzqbQpmhB1sjuvChB5",
  "key18": "4zDB3Fy1LR4ADFxDKjKdXmxWr8qDW3GSDAVHXr2GR5J6vhFNNbwp7nYbUSZDY33hwM3CxBiKQ7Cen9Q5WQSL8ZXE",
  "key19": "8WRQmxYjsaK92rKYAXorXB6UoyU98dv35sXC3bLg9hMMLchq8ENe8T9Miqr5RNXVqZwh9CkRmAvFA8EV58GpRdH",
  "key20": "4W8eH1ncwzUJciYPjzFGLp84rA1YNNeTzwQehjU9Ej7NvTouMUUSJPTXcw7MV8HWwPHedSCxzPSPCMnAG4vL4X8w",
  "key21": "8RTA5pDNJ9nZGrESRs9kErayqJw4mazuhrxbbTzJoMApKj9GGuTFpL5h3hRWNGRUByaMK59PyCQohAhtDBf5WAX",
  "key22": "2wGYN9YYMv31WhavSV46sD9wdAMv5fFKp5JPjxyTqRSGhS2fqqU33Y26LMHQ9B1SGTypbK6U7doMeavrDFfjPzAc",
  "key23": "35vF3KZn1RJ4QWPhx6HWP1DZNjSyeFz5P14JqUPrFK3nk61SpSwDStSfJotE7f1JDFP4wNxoRDZgcTaCdgKGMQGo",
  "key24": "5M3asPdxVrNAZv5Lsv4ii36mApCKwFkDVCLKG7YRavudtatY3yLa7HDLXp6rmoMuiyRgAQtnncD5JCUHmdnP2TGQ",
  "key25": "4cESiYq7xKYkGrN7ji43JUNUQ5TGHdHhV5x1nVB1YXG17gCSgA1uduCGjk9rRs4D7smXnQrRP1kjbPMh9BPbQbnR",
  "key26": "2W6mLNZs9ye4KDnxMeG7mUTDB51VvUBQjfMLBYPcutCcqCdZyUUUpEji8JWL619TohcEDPY2HVBmp74PmjkhQ5bN",
  "key27": "TMe3ekZrXw6AtGjewcKg8mdt77KkFjpxpVYkzmfXrbCERw2ewrBmZ6gbBY4BrTB3AvPe8MSBEHujyzsFsXfrYST",
  "key28": "3C2tvteLyY8C5ckB8zQM1VeecaFEGtiJ8NRg8ZyFweNqwvmhbFt5WJvsZeessVqdCyg9oLrVqFbWQTBhEL3XVfSf",
  "key29": "2qgqL7R8sUNKhwffAPtRoRb5xqHBkrVoZNjLXzpQ1NFCrdgdv57V4rHsxya6Uijj3Pp9njTfPcJHqXVoVyT3iKwX",
  "key30": "22k5SqtCyGL9ibFowzKEH9Xqdu1cMP9PUjvwU5HFXLrAxuZek9ZKXn8BZf9t4FheHtQfjwhLYSLNdzfey4EZhhQ8",
  "key31": "21eZUhCsK2y4a6Y6qSMrhf5JKCQRF56RMgn5r2LK6j7V4tgwB5eHcNMmFEEHVHZDJHcMvhngiaeJo6iAQAsmSjm2",
  "key32": "4KLEHiM3Z5Z6C8CuGWpvdpqDK6X6ZQjMBdCNxw74KjWJwRWmVSeZzRXwJdacxG9xPuedzZk9TP5g8i8sdJs3xvFX",
  "key33": "2C2BzuhESCkuAFJLEd8aJXkDPKDZ5D7qBzvSqebLXkK1gypuxQMCcsd15FX8uE9z4X74GjypMjCfAB4cmAMNEsSh",
  "key34": "3ne18soovQr6AFg3Vq8HWg3MiX7BEkPBbwu8LKUYDEU2VznFBp9GXDMQRMRS5WDC4Cj5vr7B1yFxZbk4t3fYQ4B3",
  "key35": "h6DuX5a5fN2aJCFbRhEq9C5hdZ2jyeMGBwSeseBcVrM5PYaEHqmNVjqNrLbUYyZQQirn2jkrVMR9uHac7xR78kN"
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
