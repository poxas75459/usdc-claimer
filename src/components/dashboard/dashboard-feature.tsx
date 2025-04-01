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
    "4YP1gFqC9AjiFALW11rCToNPXkBMLUvQoynirYqrfcMkvAubtXczKJx5uBtZCs4YJmWqmQtoP2umS9Y3yKYAXcRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uCXJr3B7uvg8PqvdMQiqQqEH1wwnRK9zXZNw7swsKLMMUTYNEPcU9fqSHMdJFzx1XtrizAKfpZgU9FeZ5LG5Mi3",
  "key1": "5EGjM5sKEzGh9rvrSxDzWB2VrcEjswme1uDdNK3xRyZ2L3AnmqYPaKZUX8e6osRQMn3uAotmd1XMJUJd6m62BKxr",
  "key2": "4GGjVh4EHr5hvYcVm7MfAgdqqTrGj2uFXYnXkexa1Gi53RgNM2XSMZRoQ2DbtsT9JY4NKhNZkFuHDr4LxYS7HSCg",
  "key3": "4L7YHJVx8JYrNTkWmACG5StL7xUzMxxKprjar6DTg1WSDPMbLjUsgk38N5EYtPshU2xs3b6uK8M8248wEm7bjWJp",
  "key4": "3G5LcwmQpwe6cq6QckGDKJyyX1kqfVLbmVdUqKDM2JgrfhsXmfgEMk9LhVBwGCvyYYdW2nimzGr6TqAWjV9NpakM",
  "key5": "AjTbq2ubPuxTpPRoyriezGuThh5nBZpzds2kkpqg7ysnoKobzQfxp57KPovEA8Vu6CgRUx9XUexAxXCQi9LcJj2",
  "key6": "44wcqZ9bgqtcrAeGzeELyTdBira6Dd37RGeQjRLytHgdEZAYHZ5wiNXQtH4zY5RxXRAgyZ3kqruZSWUBHqHqC5D6",
  "key7": "3cy1edfAogMNUW6yxDNP4gLkTzo8juYrQJk1nHA7jRyv4ZqXkQZdU3rNqVn5c7SgVCmxL8Pign3shMqqBB2JN5fS",
  "key8": "3YKKgQsemj5P1o2V3Q9D6oX4BuxF25yHDw5GedPu8q3E5wP9MHCkYrGXAmHiQ2STRa8ssegdHqK9t7eK723ixGHz",
  "key9": "4vZoRnD1NeVH4J7FSUqHVqmfyXy1egzFhtH25GKvRysyrP4eUTvJmtiV8EU3MjyHJYu8Ddw6b3bWGwSaGj8kKkYp",
  "key10": "26wgHrzNxAXn4TqE1BXsaorHfALRQ13x8HRzw6QGsCNvS21w8f44gvg369KcYX9MKSNH4bRz6SFWNdnPEkoqmau6",
  "key11": "2cy5ym3ZD5hefUn3RwJ4mS9jEf7c6K4hwxddCtVD51FBUNFBZ3L8jsevksRc8McKQ1Y5SiMc3pmyvRvHxehqaH9S",
  "key12": "5pfHwXdZn6c41yeEnNQjKyY6vyW1CgHxJ1rzS5niNoowFwseLswwK6MdwutQa3kRmMVTh4zwLgmwg1jJvVSUkN4n",
  "key13": "2tyL5Q5UBptqDXgFUQ3FPBS5QdvM2B4HrTrsRq6kbyEBfTNFedpCTMiicrHakBq33zBrfcnKTCKa9pvRWQJUvasJ",
  "key14": "EYCgxyhP1PYDvrQmsqcjo5UknVmqohzho8DNG9AH9RdfsFGwpkzpK57TLAWvBeqfa8oD4S5A23roZ6GYe3xFZNR",
  "key15": "3HKByD33EG2eGcKfqW2TnXnFL63TjYESCmXbkbLfkHj3AZefSxdizT2g1nNwo1EniwQ9ndZ2F9BWBnmzKiGKgve",
  "key16": "65RLnkL7pZrq6gezffNa6kmYKAS5m94xmdbGDKthzoRFRMmdRs18VSBR85p7AkwVR5ha6onF9ZxLrJZjFRMDDuU7",
  "key17": "36mTi6QZ1fW3AhmuaMX6CbPFd8nAsudQzcmsp4VMgQSNr5yHwuHkvUDyoBGmeHdEvz59P33Qa7w4V3P9ANP8ojrw",
  "key18": "3wudkMVEZZakpDKpTi1t7CXXCJNrYBJbV4iGSwyxbswALViZJ7XNwvQkoHnK2AbbdXvhySE4YkEbtX7NvfRuNn3t",
  "key19": "3nsg6PzjnbWmH2c82PbzdYj2AapHQHLKhT4bAqngjfwAcPzkaiP7ZBpeXfvhR85Z39M5BEKgPWCazSN9uHdv8oYZ",
  "key20": "4kHpjzsz7HiLAYSyRy8B4btLidrAFNqJWgZprrKcXSRs2umVwGf3gG5RNMxUdotNaftrvtiQcBZ9fBA5tbRU2xYU",
  "key21": "2UM1LGvXucBZNDXhQpgfmba8fh7cpuUG3ePxWQ4fXkmUTBfpUu8ZwdwCVuvuTdS3f9b4tjRCKEqPPk96R2Yg4gmX",
  "key22": "5aUU5wrYPUyqNBYoDSgH6tkHA7neURBZhqZCWGxbkBECEUqFbnEQ1rzkt2u29vtjFyL87jyGuN1SBFhg9VQCHh8k",
  "key23": "5rXfDiiEHfEe6F3n4Xb9CTxDXERfKi53ag1BubFmjx5tKpeExTxFN16KY9VqXa6WWvtX1tomX42ferjJHmH1GYdj",
  "key24": "2acWhqwDSRLEX7F33Wy6foZyCQTKhwNWf9XiRRuy3DGLUCHwnhtofGYAeL887nXuD3YU89MeTvbxmaxg93wQDMDc"
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
