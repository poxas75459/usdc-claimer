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
    "fUSBjWaBKL5Mwt9vSXvV4QtoqXE4stE1Xu3vgY9htpbntjNtwcBMgqRfYgnJkwvRMVvwF17KMsoZj3Wd7nLWGwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31DCZuZEYQT8XunRsjYaRmQKyHYzgFNWpnMW6EFFis3Ur9wSX1v4pCqvfqXMnR5jLFMmsjSbExTKVjGWh7Ja3vH9",
  "key1": "4LX2dG9cz1X9AAMf2BqrJNQXHfBm6L65hGPeHDwZcdw9ZJgTwGshUtyPbxMTbKBHYizj9QmnUZ5Td8R2E6TiVWCQ",
  "key2": "2ZeQZKbY8whgMGBghuvNrM6adJJFDyZkvdQjAq2b16D3WfJiQ7qD5BPtkWPyVk9E2brxrYC8k6DkUS3TK6iTXvh4",
  "key3": "3qUUhVkaXX4gWoMJP9q1PLg2CoEgHMHTbfUZsmFheJEUGzoUbA4mRPuqkWkadHJEoT2yxqH75qeVeAFLJD1hHAYV",
  "key4": "2G67tQUznQYxoDYAMGbWrJjpzatWdonFAzKgxonGUTv3HZjCKkR62RJGk2c8sJ98BfxUcvoTPqxuHSxN3YezNrhd",
  "key5": "SnDnQJvnoozc3KVY8hujh2ezRjEjPccgATMqJP9nZdb3tZ645BpkdJ2MquG5MrqAmNGjeMae6N6N6dAb7kAbBXk",
  "key6": "24Kng4mWTmdX8T3TTyTidtVB8P1phquvHa5U77x9mgqTRV5fbbdtsXS1nSC8iUQ6LECyq5BjZsyCNunc6TBsmacy",
  "key7": "3w5uF5mjpq5tKopwnhQj6SwdbbfiLAHB4ETDsBgnc18ULdWsUEGKCKWz77VCiAeYrCBYtanYEWUm9f9EaMLxH5jC",
  "key8": "4nQNqRqDJUuwk6pNxNhNyJpmKhs5nCy8CVmwqPu3twdtbqmNWwfLxigVkxm3qyXLByhrXtNRnmpvFRgSakbCG5jy",
  "key9": "2uwhmQ2XNu4wrQczAMMtNu8iLJbrN4vyzbyhM7pEMj8kSYpGxX9gWkJP1iv3ae7dUgpKUSCyAmS4JuXQHdueScSq",
  "key10": "tcZpuL9vBgCxTqT25DvdCeWjnmfKUXU4RgfjzedfgbCATnPikcSbijfCAwz7sngBrGFA2EeSCR2Z8SjrtDVLSnP",
  "key11": "2eQXyie7dzxaCYpYLx5xsRLv3VwRjvvLWNZTadUA4jZ6dDhsBjtdoYLb3NtbaBFJfSQrtRR16NQiBcaN9cdCYabo",
  "key12": "2Ty85YatdFcy3zQaT559fiFFDaWczs5bpGfhEzWXFtf8cFiPVJae29qM1vV1HY27gLEzR8m8VnvTKfQpLMuvQ671",
  "key13": "5rQco7n7gGfh8aAYkQKuiJaa6QvU2GDxVScyXYnVctvg2WuEtYAukWPjaJGhBvyxcigGNiEN5gSDb2YBy2JzFJ8D",
  "key14": "WkvZRgLRzrcLJ5hEJyAeFP3YztacE1h6pbF1jmG3x9ManCknd1QVg7mL8kMU996vnHfWB8FSSikvLMjRCvMYCqF",
  "key15": "nLJKSom1t28yxG9WyGfcBVBrbRN7FegAbBpZBaivnSs4st69AGQgL3fJW1wRjAdcLPWYMLcmnK33q8sRjf6hB5X",
  "key16": "dDcnAYijWP1PyeLp1MpMNwi7vteuCE6fbX2k5oQMHJiB5PR9YvTLwAVE65mqDh5inhkJBPzXEgJ8EWJ9J317bqo",
  "key17": "NHgcQEZDngf7J8tDYfBsbH1PhQXdiHUgdggo41xL1NWss9oBJQh2UUdx1GGbZX8oB3UDED1r7A4mgYHdLYmRWUq",
  "key18": "49xHxYMdtrQ8MqFPhPnM5wUCAme5ECssRNBcQYteEjCWv5Weinesz9EUHpArHnybQZQVe1JMZrsNLvpsnQY4yEvp",
  "key19": "4vCyaaGYjvZme6AB4pWuuTQELp7eMjpopnwpzp14Z5egTpnGCj9vt1RtRyd3aYyMJvGyEF1enCfggduT9Yx3J5UJ",
  "key20": "4dJrSxvnfWtCwmneSBNJq5kL93gNuLXgQ26rYCCjWi58Q3tdR5bvqSg5DhGTNspmhNC1sBHg831SVZRG4Zsa34CW",
  "key21": "47M7gRdckqzwGqmqBV3uptwSYfKNWnzE7yXcZw6uN4PHGiMEPKeceMSueN61XA1fgfKAZsRZGvpvqG8MZvpQHQPZ",
  "key22": "2tRcgKEJFj76SWcEYqdjaFKCLzUpKeaDpuFeZhbK373DJha7MnuzRkerjch8zx5vqVcrhPPj3d3AeoXhE6stYm1r",
  "key23": "2YjmxyuT1fwkvqJcFbrKRR4Fap3YN9W7WBpfQUYDEWgAvWPK7odHGd9PGWbD9gQQcvzRroiBEbhfND4Uv5SFN43B",
  "key24": "2m9GZX4ePKrkymAmZdWHjVpCkAsaZiK9ap6A35DddYK5dH6Ltk8N1SLPpv4x6ZkBdMpu9ijAWpYLePDuXVs7vTFS",
  "key25": "62165Yw9sDamC2LXvAUBusQ2Ga2ooLXFtp3eV6WDY1UgJ3AmyMGniht5zXsnyKp49wpbay2ddjwSxRmDZ6ood5LX",
  "key26": "49EohLo3gkkUhybVaSb2CpkFjVwdzs5tZVyfj8XkCJuehyWSLkVq7EyjEWHGWvmBrDp9E67yHD2KNAVMyNR8CsEc",
  "key27": "3VMXwJDQpb6c6gqqSMJwBr7YSdTCK2wPTH4U6LWCW1HXhsro9tTBZPFpdxKaa99TVVnoKyrV7p7hRJ1KJ5RHuHjN"
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
