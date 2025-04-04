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
    "3Z8rPeKs9BwUxH7zA75r97RoWtLHmCwt5teEdaYtw5gqD9Zjg7c8nbMdYdjbwdo4SWYWdJPLrAXsq1j81VJBPLH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WFDLpaA1jE4VxUCnp2g1nt12EDk4yzCr3hbCr1HxJaKRE9sGUsSn7cU82kkVhirV9jNqBha1KMBY1NPh5jA4jQj",
  "key1": "BqAJ2SFa6cRLMrKBPuL8BBJECEB75PdWWTu83RnXc4RVcKbmSJWSRwCx12SMNMKSGo7LUtDjR93xsmQLt5aHThX",
  "key2": "4tGNcVVmjd1nCqMtgKTTvuwzE4ssWrAvmEjNkcaKKefsKeumpY2mvFNTFc5QY82ydnLtL488VRKHR6jHwNtyMkm9",
  "key3": "59Jt5jU8pdnVRs1xKZfqXuGZHvr1sL92329HqeBUQbzzkL1gsjHj7xC1H3ufeYVGCGSVMYsz9zt8fjiJuLmJ7qXM",
  "key4": "4dqR98ycSv6MzEmjWNToPsxCKLYLstiQ8pQ1TpXSCorCso6y296fmp14KRc4voFvJNoeycWm4kg5hDqWuBcJ313g",
  "key5": "kzprwn7Uwn6td8uMUPcELQWEMgPxtDKnaVSTz3Tzn3m61maq6m3eZTuySmamrpZqFM8CVmpodu3PJYMwcffVHby",
  "key6": "H8Hi9zw59CA5VnNZYPrq3Wfeq2cHJumBKhjT3ue7hmbrm6gzLhLQn37bXSVKsKU9V4ytJbzZWXDtocUR4xnHUSy",
  "key7": "3gcU4KB1J2aw1FNp7TqD1YWFYXrReSdWBGe7umpBBjjwDAPsm7KNtNkczV8YukcY4trHARpEXPHJdU5P89tgKrjK",
  "key8": "5GZHv5sqQismT8JecLPDheiKjCRkYe7gP3biTnqKAAdVDKvtNT1kQkVzPFcRa7Paahkq1JVKKxrxdpMxbBEDPrQ2",
  "key9": "4tVMj9WrjN9zn8oReykD5oKKChRSQnRp6MSG24ZMujvS7BdZzD5PB2rmtoce91CUuXwVApEGDHaSm2enjGa1mpsQ",
  "key10": "3PHBjQPPuTfZNzaq3g7XkTkPmEHBxYZkwgC1wtDSWZD1FQX72aLSksncosJ4ftJdoUSBRc5Y5ukE3eZrTorqMiiF",
  "key11": "pXmk4t9PKghiVktrvzxhp7AQeWWWouauAtZGbZSb8eCZZQJ7oKMhvmXqubTf3TsjXpc2YgVuwSdJBMwQ4PEgiDs",
  "key12": "PhgV2PAgTEYwALbspXHxf5aDvoexG3NzyWugRVZVavWvBeC6p58igYBWYUMEWPjiATcaTAApS9eiPXRUHkkHaCV",
  "key13": "37jhdoM6NwfUVdoM3wMwgboo54fj82nEu1b5uTMdPeyXW7RBkfiJu6MYiEwr7Ta9YSSdQMeizdJpi8pQVAveRXdP",
  "key14": "dxw74RwzQauZT3qNbfZhK7nWrQ647Dz1FoauJm7gaaNnZuG3ohkNGf4kyLFY8NeToKXpS5fEfJiBS2jJGGC4YnE",
  "key15": "481QZjPSNAAFrEVbfrYCC4yUyhbxASbUxV1QSbLTqZ68d6tvXoVXf2pfxb8mrmuHYmbdyE5wkjZ9imicSnge2ZHW",
  "key16": "vk828DnVMZRbkeeR1dRHWZKs9c8ihxHkuk6XFEpk7p2BXvK6qHgdg9LjyE5Vi4WS5SvH6PHp5JjgSZYqs1vMh7h",
  "key17": "4nNtEUWP2vGiTA1bXEs6ZxesiPoCTG7tuNbyTWJk1WZFWAsHaePeZvLhhZbCnCibZ1295LsjWyz4JSqEbtkZ7SsX",
  "key18": "3bZCdhHh4jVdrrSZvph9VgmvLnWydyYzDaUP67JQJu6ZSSZ8GGtkedpRH3eWUbDdmZfSmBfFQBZgF8hiTfKLEPpt",
  "key19": "55gzzjrksrefafjpjtJsWCaSxoCPH3kWaCLRVtwiUBdRnppmpcgzQx4uc24dPfBheneVK3W3qgHqiyTUyL1nrFai",
  "key20": "2HX5c8pvtxNCNsnGUPRQd1oLVAX6BcnY3tWwadabrk3s8tyJPif3uYEuB5mTV2nMZUW7AHcKxLPSuwsgdZb4S2hw",
  "key21": "bkvs8TNCjj1dKRnDjAKN1qMApRtQdyyymC9Wp2sHWhGYHhmJxZVFnqTWkEiFCXth9nZ1E8qohn9vLTuhGAjBStq",
  "key22": "P6KKhoaJfWgaEATMbvjmbX2gQ6HKtTptza9WUMtwCHjoid5gWfB8BLZwCzeWUGZzZpQSgSJ1XSdmJNDzXnfYHLV",
  "key23": "3xKyGbqPWcLNwRBRBFVfPPnPVDZUenoTZVQJuLGAf9h3CK4gnUE9GzkKmghcmSxxoLz8G7EHutqrDof58Zuoa9Fj",
  "key24": "2zpCAtwv8qsm2VfY379DH6vyLCu16wRpZ26G4wRUe79FQah1H1KgNiWcYAyHmYzdAUiL6GQSHyRZsUQRCrjL65bC",
  "key25": "5DapRm6deDqPYFpivJtFZqDZqPayrZLJe4A8jjHFvCFab6M1wT15AXaQsoKeKEcWaNK7pKnYon2f3Zp9JzDuesYW",
  "key26": "54MWLPgAdWbsUSp8Fo3SAur2Ch5Bmw7iUJn7Qqp5dpo1qwt9uSn5SgWS9qwjEV5jQLqLNawyQLuSapkTMed164Du",
  "key27": "2xPYohcNFxctHBCeLp79vBHXebPpJMo6H2vtSssHqZQtu3hBG98s3thqMBWAtRS6fT6js79JcGYDLBQMsSSo9kaR",
  "key28": "3f6wFDNzssctcwcGBQdArCzvarG6K3XCbcmESoykZHUCe6wUbgmCi59cf5wUeGtDUzUJKz8mqvCs1QvoPcr6zb2E",
  "key29": "53rPrKKQd7FduMK1QP7deyYNKV7xcDmJ5f5DMEdYFb9kKSU9hWcnaQqEVitFz7wqurBu7Uw3Di8zGCmhYm9bdab5"
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
