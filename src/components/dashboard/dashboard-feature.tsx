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
    "45ZPrpS2pJDuFxUg8fw47wxGUCU1VszaT4RvdzmXRpqJU2UmEApRQtyzPuMhvgJeHneG4X5MieCw9tu3o5EZyQga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jm9byNHHNNJtNzZfd6357V6btn8SSemYBHmNckS3VWmPbX5r7vPZX19drjZVZ4aazvq8xnwNexTqK23YLRRAZFW",
  "key1": "24EdzkBBNN2CX7kv9SRXx2zJSRWi8uftchrcxEduRDH1fWYe945oTDaQiFuSLpdCgXz1W9vdqT1WMUtjhb8tFSxV",
  "key2": "57KVWGLG44Hg9hKAaQeDQcih4wayGYS1fXEv9CZdp6KczCHsQxTQabMmnTmdxUxAebw6gqcnACVy7mSCACxHCMQ4",
  "key3": "5pHx1CsBv7njGmD5rA7gvU3FCc3fepabQ5jnzCijo3vqFyfsN4KXRyt5vhs8MreoWyaebXLS6WQYMN1q4RzoCZSe",
  "key4": "37SUd36k884k5m1kZzq6fTQTUkLvoMhicaw1jBk7BgBQxUnHhUUQWSQHRZH4fgzH1qkquo9H5urAYbqXXvCEfJjm",
  "key5": "4hKAubH7DhVgX3AzAuPnTiiqgzL4mBRhyDdN45ke9QP8hwS7TKtKCwmKquX4QrVMiYPgbXafkbQbV86KLCbMLEiu",
  "key6": "37yQHN4Q9XvrxFXco2RrXFRoVhHG8DcsNegyjqdhLJXrV2xh2NpqLA1DrxqBhzaTmb6HebvgB1Ny81FGxAMpjTj9",
  "key7": "59wFQWNLZuzvPEu8vWaPK6CmWXLtS12dnmcJ85PZzacorZfWvC3Cq6Vj24ZaW96ZTaG3sAbbrQjQ9R4bbuiVB6Ni",
  "key8": "5yg8VYvwPhjwqGtoGxozSr6BFyAjEZMGi8P1iU1e9TYfQ5F5HY2SrpxtV5fa4sq13EZDWbQKLvTLivz2dLuVNnVj",
  "key9": "4LufxcK4xREMa9eWw3UB9VRdvwNtgjhSFepFvQVba6SfWCWEL56ETpn41VfixBNnP1JY8Eaw1AenmKvSBPNdbKh7",
  "key10": "3hSA9XcDi44ZPB1WBSjyLvLAbfsvavgCV6qE8pTAdkGfxbKoHG3paRnhhWDh5bLPmB3uLy8z3s4aUt6n6u3fzAC1",
  "key11": "4CE9xQ1gRvde3w9EVbuMrKVMMhDgkMLKTyXfk8zcNAdXUjfkCzTqchTLr57meEWDZaGbcfCRo1jcQJRzhU7VuYjF",
  "key12": "5drourxsiab6mrQoxfPzCWPPoe4d9p3db3qtcrQzFhZnJnkqQRzFVKA9N7piXYN7nwDoQiTaq6DmGTc2a7XShFXT",
  "key13": "5GAGi181oZHSwkFTM3XdScK4Ar8H9G72duao1DA2xfXDJBQcH8ARC8jCzXwDtCpj9HpQksZhiYNwgvkBJuBhhpa",
  "key14": "4gCbjigU2nwVp5tJwDR3zezwwqw4kiFrAcTt5M5WDy4WnRkyZe5kZvBkbc4jHw2eywwvtGAB3B4t7YZBYoaheRjC",
  "key15": "yUHv6LStJGSid3iWXuTemegw7G7vM12g1n4Resgar22iKSQY2XqZDZ5ZQLScuwPP1a9ktjAXzaZNMog4QSvh4En",
  "key16": "21xjkE6o4ZxR2ZTfuF3SVq7MoGTxqZdwsPQf7enugjbBDiZFKbXwt5p6meg186PTPsrW1gYh4o9HDDBB97FHEBH7",
  "key17": "3sdaN32FKALtpaLarBdPy7vKGdE8BEuy4CjuE2PMEyQdS8K2dNvryeakhvVyv1rUv6gNjwvBDyRuNLBfvMP8bHqy",
  "key18": "3g1wmWYCLonJ1qZb4FbGgVFWULggqNHr9TNSTUVYYgJ3rkBmpkWwC73EWiFdTiJWk4bhwZxVDTRbEMzxDgzz5Qaa",
  "key19": "p7ATDMuFiPcaESGdMsh6zwP6r3hXGZhihJmWhXevu3c4CP6gDFpG7zpm57rEzHbMf2hf6eVV5gAkMQYuLiXhLwb",
  "key20": "4vNav229GNrSyLTpMtiKWyX8Zmc2iefadKGdZwTiPp5aA4DyRr2qDtKjXvk8wjDAtRgaftbU6FGNjrsvoXhnF8Cc",
  "key21": "4ecZGK17QunAiWdDqy1P2Wd5LhKYwPS4WENED4fxLM55oNyYHHALoX9ydj8qXE9MivC3gu6s3YhjjpeUaX8BGFoA",
  "key22": "5AhC4bfswVjV5nqKmnDXixMHCW8CRYKGM4VYHpx8U52X7MgmhptSidzQ4saCncEa65enCsrQbhD2uNq9iwZXzmr3",
  "key23": "2XkQQhbdrXkKe6h4sptnkGuH5maSVweGFU9hyTHcDu2PvcmKHU1DXg2C29SmLRMYj1ukDVAQKF7tbV9qiMVxmwAE",
  "key24": "5o6SbU8HBPUhE6z8rZCpWUxf5q4e799vQMyAm9PfrtUrS3qgAvpbGr4kkrEKVTqwLAZ6BQ4xaUfT1xkC8afFBhwC",
  "key25": "3jnqZDFiWPArJDTZaE63aboVhJofENJHHjiGMCTuTxyediLZnoFGEHa4eHncX4CosGsJQxZoBUCysxHQ5W7vhUUv",
  "key26": "39QVbCaybMy91aoZrt53gZ6wkpKdLLCzsQ4ugw2EwshVj9DYoRmGeEKM9T8C3tG8VdtSCfKu5UHCnPg9u3Ap6Twr"
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
