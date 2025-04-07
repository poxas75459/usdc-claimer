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
    "5XMmxaK3P4ALgUbJvBX6CqvEhdrFyn26biforWX6kMLdnYsD74KmMgy7kX8n737RqMuWTePYFN9NRBxUGZVAGFfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Drxs4YKkKYJwzUE4mgEwiHvkx1ceKdfyKULkVdCGKuDhLUMxnKcqFGKhpgeb2M6TKQswu1MsiHmuLCWjTyrQLaN",
  "key1": "2qkBWKybXQUSknPDLH8m5VJaMDVqf4SwmQubtejZhXTuR3SayzvCd1q1b6ZTAHdXsyEY3SfDEEZrMnTeVf4qcezr",
  "key2": "ZSTG5v7aXpb3akhVEyKUcGLsNsNUssLDzuyBeqGqWKk9VsSWt7HEpgL8CuhRQAHH46VXyV8NdYsWdxH18ZLDQLq",
  "key3": "4qMqdT65qJagrGcuFu7SV38MjAXWB3swWfg6xHavbF9f6Gjr13Vr5U2dgH9RLvu2HLRQnZk9ufZf7JCiVsjmrKfo",
  "key4": "f2ppxf5o6DiRh81zFLQkTUGomC1q14yehKBL4QBKCjwW8N4DnTrS5XLY3KDitM4cZUaeWhA9aghGFJ2uJQ1aRJC",
  "key5": "5T7pHjNBoJdu444hWBjoDWHFigafSJuDz1deHBVnoMdXzw3eojDRnSyNLFxQpcCq3uLydRZrw7CjmuTsRE4dhNH4",
  "key6": "3f1VVS2hqQ1j3e82k76SdJNJQ8fm6g6TAnYbN5f1zgfXyBgxpVsn2TyBp3riixeUKcKMzvhJKiAuS7dhqXvK314F",
  "key7": "2YjJA3EEporX8BHq417duBAanp7cyTQ3HE5svikZ6ZM7BM9ySZ9bAY4N5mQJj7SKYP6fyqRJcQiUgAheRNLHVPXC",
  "key8": "29p2FpCz5whk5dEev1aQPinVPFrfPUgkiFBYf3ux8SSEyausBR7nhU5yLC62dNrBvyaWXrbYqUoHT2V4kijUPyjX",
  "key9": "2QAGbuLLWkVyJjgwjXYJXK41uV2d5TgK8pdyx7Y5XqzuuYqpthm6XyPjSXiEdzpELKXWF88RwDHrqxUShBGAPmrr",
  "key10": "yKBbHuXsuFp2hQdoUZaihHkd4VChqrNpMQj9ELojymRPEQtb2jVFZQPJq6qtcBg6ZXULef7MHG6sXFspRLr5MJT",
  "key11": "66tHJCi3tycZ3zzZ1GVs1SXigkPkx3hkjkeCnFY1SEEjkqfgBHnU9esz5gAi8GeRYSkZdoE4X9yK357VccXqxPkk",
  "key12": "555uZVWWRmhp1xABDhgHPKM4fcEvGU2RSMPQDA18h8iHYDtzJSkRk3RrxPxit3MczmVjaMrNgcmQ6TGo3QgqWpDS",
  "key13": "3tWhzkYadDHHgCT2S8HmyxtQeusBwMJwQJ4XWfLr81UghRM76bptFmVk6sSCevrWVAbyidkyPqt1T6Y5APgqbY37",
  "key14": "28cXmRNCwo152Ad8mSo3vWwtusNiVNbb7VJXYNP64jB9oUuNJehY5W75WuYMo1oghCKjTTvq1XSJB74ZnkyJ9s9E",
  "key15": "4CcjUwPZm5DkWyF7yP5HeKyUDrcV7UHWzh8Uu2dmA4C8iYRRuuBPZLeuvyYge2pUonSRptiMUMJNQkm3s3wDvHF5",
  "key16": "5XFYJ5YSmqoey6gyrH4yaHV8ZULURYdpZEf1JdtVTJhkF54zxwZVjqM9FEnr72jLMMyNcLt77GsaQSYxc1oYKUg",
  "key17": "4TecXN4k1qPQ9gFjeN5vW54mrh6oP5Fch1QsMvSnoqM7HpJRRrgws1WHYTPBqHcuX1ehRh7PaBs9SEZ4hmGhD1c8",
  "key18": "2rffYARVCN1EyQS4EkHxuh9DE6TtMALtpVEs8kE1DuDM8KgmarYbv7bSTDHP2DJhaJz3p4pJFKqU2Nw1Ho9LSTm6",
  "key19": "XBeqe6gkgQwpo2Su8n4Z8kxpMzsg5KXNQaYpxDQFVCN9dkDAMxSZQwKNZMxmXiyd9JtqKbRDTtccavSJUFs1yCK",
  "key20": "3Basq57eqQN8qn5pKYomhTYXYBNoFhw7MEJ3rsjAB3uHotmfLLsGG9ktqJr8xpsxUheupRWXLLFA8ECStqm5WZqh",
  "key21": "eFdUoD9pqnjUMz9A5itQqpi58nohXbnzSG1oiStKb7ewWXq4D5HYQvt1wDoqHPrB4XDa95ZdxBbhQ9EDTk1nq3B",
  "key22": "2dNZmoBZia5c5DA8bbPz4PXsnznESYtQ9J9rZB46fzT92MzB9KufGa1CjJA1j6rtab9X6izjdLTSadfwqrmzV8Ea",
  "key23": "52hJvwP1TJNxUvpMYqaaHfvuQoVzQk1xKf7dd1fu5AFhqH9TjEimzTE53pintfSWQwFGUcjtiUJkoHt6w316NF7q",
  "key24": "3VggdJmPEw4jyDtGVkiX6qEDxiZjHutcorhE34bNgiGQnosnANt6g3PqtNmSJqikPd5sYbxjAWFeTB23UCq2VYB3",
  "key25": "4txTjPkNk95vaR7Rwpern6LcqVXyRGuxhrVS9Hp2bPSrUFg7BUWd1kTLqUhoQbke9ZBj4nRqX6Mz6xdCmsLr4UwV",
  "key26": "2rdx7Xf4boGW9KtByE9QJNAbzpbaFeADrJSH8hc4fd9R5MvwbK7tYehrnefZoovQYEiWYnqRUG1QEhppfY7oHeYp",
  "key27": "TmqdLhS1LJBtqyTCCzYQwNRWWKDyyqoyQBK36hSrNWJo6F8U5RkuqmcB7N4V4EpPswnkqKxwBB4GEo8qNaisVXb"
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
