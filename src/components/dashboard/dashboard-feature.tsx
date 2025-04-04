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
    "5RML6tqjpkn9kgLDrMwwXR9YRwfdL4wriSqKLqMWDU3Ec56zYCAf4qR1pToC3e7Kerw1uZfv5vVdfxAJKbNrHzPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oco7kF7XqEyf7QGt1NqGsmUkWCUwZ3bwmdZK67iBhQh4e3awSNgujJdFQc7mAqgteceKAKhiFKzGSpS9APuobxK",
  "key1": "3RPipbnuADTLdhFW2hPuSNGWQepWyZdipbscF2ZuY5J1JoGhe6JaaXKgrpfgj6mDjP8iKiCzCL48TfCwUafsG8SJ",
  "key2": "5xmsnUA65RK7hR56BWfzb2HrUv8iso7qejvT3odEKPRcZgUXHwpauAg2yciLpxurdwLjaTwS9ej3yKUMAXKPhjF5",
  "key3": "5dWN2PnCRh12f7PEaZh6kXsvwqUk74LUEJuYdW3fyAhDUD8K32dJbf1ZqEUEeSuNAfMdX19aw17ow5C7LdiCSHQs",
  "key4": "3VkDGTcWeDyjZHpS2j2knozWkdUytEBSUofCbS2kCCepyt7CWKxaYvCVHRz4ikV2owCwTnQbrDBp8xpdb2MaaarC",
  "key5": "KZnz9GvHJA4wi1ZxNwPncaf58k2GjQvUu2mDbM5EpQwxvHH8D27GsuirVkdXszwZZs9Wvcr5c8w1kpYBEqDf9hZ",
  "key6": "qX76WeV6NF4yJC4se3SaJ3sC18uCjBVvtGPzhm1sEPApGGeEtDXvkGMqsP5nfLN1RgHjC1FGmgtdPWNqBcqFfYH",
  "key7": "pKz2NyhXwmjUio2WJVsK2XTPbNopsjTzFpJ5ZbxYAKhSF4StHY6FK5TGKZcEyuQ5ckB4W9JMiBvcuKQKgXbW3YB",
  "key8": "4bPFgMg2Q8jkz6W559eZCFMgWS9pCFx34Kj3kJZCYyVCRfSTG6aVj7j8vwNZ6znEpEnNykhDwSuyCTSaqJMc21UW",
  "key9": "59tTMWUi1vg3Z6mSUdUqj8zw2hQgwxYyrVFNTRP1JmZutar1AkzA9NhFA5HvSXT2DAUoaGFNZcHEisC78Niz9Crs",
  "key10": "4M8tmf8M9NTHXvG6mqbC78SmWJ6WEeii7BaZ6s7TQ8sfUqV5mYrgiRgHiWLqv2uUmDaiAnEQk2TtJrEaafjj5RXe",
  "key11": "Vsju4XmcpXcyiG7R1xGAKQTuy9Z5EHkhpGGuNPFiwJ6ekkYzUPQNvkSWqSUz56BXSXPgjNczGZDSicoR8nFGqXF",
  "key12": "4dJ1iJUsoMtvpJJ9AjdxNE3ZNsqzABC6qbpfrhZb1SKujxgTxxSFBuMrKA6ms8QAnTyb9Y7Yxcss921rs6WMpzLd",
  "key13": "DzJDvMVp6UxvL5h3rcWbmp7XK2i651A4v6L5qD4ZjeuWb2vkbTtZECCtafoW4gkPhnzC5msBxFEmyEL83FtPDwq",
  "key14": "3T5S2wbnQpCqvoLXjJcLwRQ8xNqfVLEJMBtDyVBnie26aNH48wQ4hzdK5BB8xC65k5crPNf4hQq7DV2W6cpifZ7q",
  "key15": "4r5mym2Swrertvh41RpPg2jJRN7yQk6Y3V3yC9KfXbixdeVVXA69JgwG2uNqyEVK5YcHBnTnWakXmdcW1fxDavJ5",
  "key16": "3JAsvo6aF5bnh23u3vLvv1uGXvasGf7NKb8Mv4FZ3xF22jwyNjGEwjRJFdp6ftVwAYD7QfSrjiE5puWUwm4Ees7M",
  "key17": "32BuMvNNuKzbTQo4bD6PWppRYZWw8KtVHVfKvK1bxpC3bw9mDaxLbbtf3dJphkHdVPAN7hbzKf4zpfC2KdQmGE4Q",
  "key18": "appLhGhUm3YofnP9MMxg9hhiJKKq3PLd1bimDEQqnA7K3Zz81UPNVUSnmTSrbMLP1txHvubAfz3hoQ5215PPj4d",
  "key19": "7hinmqiX4xoL9gs8HX9HA78da5DkhXfWa93VtNygDikecMP4VDAg4AcuNcqAX8ucsYj1LKWXLTA58DQZPAHpd7j",
  "key20": "23NsoMmx2YVgKeH9nCVhyaMt6zfSQC1dQBfh6XMCzyr4vLFX1Yps4b3aF1mVoJx2ZyjghRyCvRadwBQB1LSH87dY",
  "key21": "58jQgMQPvycqTHEW4g6sT5x45DikVYozkiHwZBM9Knyzz14JN3Dgew16cX8sCvyQfWuxWET8MDsMJzeKeTQvDqxE",
  "key22": "3iGfddEAMB2SUo4bwtR57D6ssFRrRUjou4DvXJj1WrujJnVQHnJMzjyHG8HycbXtjSSpRVNnRqWRwQRYUkk61GfC",
  "key23": "2wPjm4wBjVTeMy4VGdJt9KU1GThvJijdgMvTrZJ4SFgTTiFBBJEP3pdMawKNzwxkxpTHMguoCpbzTKfH3xbFJhE",
  "key24": "33FRs7dKZA3Ad1LxXFx5xxjrXu3JkbtTiSQpjChbd41P3QEbB364mn5dPAbHjzysBqH9nnhgsiFKsToQeqUHDevj",
  "key25": "3j3N8rEhvhjxHru7q2sqBG9edXG9tPjnWzevMnUEFH4z7E986Vp9RDEthjiEpFZsf15dwACRZx5NLK4X39ayn4Ff",
  "key26": "5VH8cP72yfssD7B2K6vj5H38YLJ1UH3oqNQ1DBi7KVYNZ6p57ooCfgRP8JGE9xMSDpGSux2cvvq8FxnmdJvCTYaU",
  "key27": "4NLF473GhoB3UKqorKRwgJPcXxyaGesR4TDm9V6r5rQvJ81QYrJ6eGezWvMCLfkPZEykR7HDi3wKgQZJcpvzBuv4",
  "key28": "3BhffSZwSPtt84t1KXU44FNH6yp12brwbsZpU6VBrDFG9S8nPDX5uFj9HHzJRWdRfcu6FxBhpxB3k9Sig9A9Ehk8",
  "key29": "3mPqH7xJPwRFiWpHfkdXKdfvBvKWXb6Vd3tN2U6sYFcCaaSX5j3vhHxhQyJrsCews2wi7D5inYaPoYC44Mp9s1Rc",
  "key30": "24m1cvPPjgakqH96E7NphiH94h8b9KwD8NMU4YDkXcrvYTXEQGATkC7b1kSQcwAHSTRS2kFgaTi235wNrYYtjGCE",
  "key31": "5vot66cYoQZaG16o2BWH6DpMfeh7EfCCckd6bFarpr6b4oXUUYoTy22qTXKb7U9LPtugHzMucmRrqRDLQvMyASca",
  "key32": "3ksmcgGLJW27amcghDBbpiELWFTSQosZ7oRRPnn8Sdne9JuJxJBzgJLBLPzm8DB4weWeTPY1Hedy6Eb7DsPSw84v",
  "key33": "2uaM7rKZFiqELcim4gprGEtGvW96K5ahmnbCBATzL5bB5djhe478BsUFgiyx4QtpyrxczvYrEx7GGph5QsxzeZpq",
  "key34": "2D8qPzYSS4NgHEGvTUpQmBF9JTcJLvBrtVj7hdMbGxRRLuLR6pynucphd7RutSxQNhKE31h34VUiXhD3ovqomrRJ"
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
