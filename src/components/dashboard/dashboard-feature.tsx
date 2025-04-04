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
    "xsK3goqD7pYPqqoTLrUjQMmnpQTnRFhJ75PM6upYU3Xd3x9WmeMqG2kKcLddyBR8APfeLT8DzhQwzWbWHYWs1KR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v7X7s8w8GS6te3daqchnU9P4wMt2LpEkiPyj8vn415AkRnpBFhLqHAaxFwixdVUmCZ7r7jjaPYTE69xGV8fPTUN",
  "key1": "3tLT1B56ievApZprgNrtP8ptDcyiqfiR1ZavD7weDVynFGUECfYGKjQGpGv7tpwxW8C1rvyYjg5LWeyC4mv56FC8",
  "key2": "3Tcm8yZgRCKV22VRADAkc7hbZiobEfgRpnjm68VtPnqje3BqUvJVynqtb13FM4KhpH44EvYpxpGxTgZ1hrJnT8nD",
  "key3": "3DCR4TnHwvTUGjFPntc7n385HEUcxu9TDQK3EHbVDjdbN9tqDCAJZnhefHDPiu6HzHSmBF2gYSNUaoKpsWqAjKv7",
  "key4": "42QmfZiytPsxCDzZVkFPPsp11GFTbGGAXVPxSEP7PkFBByCmbeqHunYYdQQjNXywnRHt8mrV7swZ8HCdBNLZiGq",
  "key5": "23yYSX9okDt4ZQ1WdjQRTXjSsLjogav3h8Z7gGRP8NPbvqzTsGhQAKwB3mTFQGviDEuDWBfoSEKAiEfKqxgysKpT",
  "key6": "5JkCAtJbKZqx5xogWV56aUdEikWtgwvSV6x8ax8Z9WNzxVGTkkkmdxLs579FT8jRhSJvr6NZM8qRDhyjx4AH9aDX",
  "key7": "2NoZ9siRvYRKVDRferGZfR2JvdrZ93aiHacJYzcSJ1np8f9jbDLDw5zxDnRbPayczHB3VfV4LRtULFspTbGg5aga",
  "key8": "2khQkE9bb4dMrXPEU8Hu3jPG5JG5YAmvfXqKkzgwTxRHdL5TFHDsQXSM7Gto7hW3rZKRE6afzaDXs2VmzcbVCS1D",
  "key9": "21XjxbBYftB37JpXDCXb9xXyGpzKKDPKzDhf2GbDqrV2roMZevAAd7rFaqAj26LokPNeFKAKUDSPvqx3orbArMKC",
  "key10": "2nx37EiRHtP7cMwvHLGxymPRb92dCQofgjwHRVcZdzrsg3Ao3EZdfAQiN1TjP578kmKrPH4w7KP8LiZijyFg1VvH",
  "key11": "3pzPSZa3vJms4z5ULJTh5fhkXHoeC6KCizgFKkm6E2AeePXAEsRWToHboZQsm8njqetBob95LWU4LGVED5PWEmT3",
  "key12": "4yQb33z2NMgXX56HWa1zV2HBoD5rt1vVruqHiJHkCATcQ4539W5zA33Y2qxMwti8huem3aYCSxASkmGzpAg7pBAk",
  "key13": "4RVDtDZNHWwjH3tbnjghZnSzDh7vcpjfncxKSSNwky17A7hpGzgSqqcDczQ1rxSoYpg53kva8Miz2K2drDVQBqy5",
  "key14": "4gUD8mHvLvprXiJb7VzK6qTToc3avMs5esoKjEJdzwzunyuphQrjEKr1wUspgVADkYtyQJ8eiLssUTf4unfZGohQ",
  "key15": "2uLb9JT5cnYztvKEEmVSb9z6Lvj97M56t32CYVouBhWgZsADZgRnPTAnLu2MaGC9TjnRuXGvxxHCTS5pLui2uRWe",
  "key16": "398Udk2aNUB5KVmED8vCYi7uhjiu5AiTEh2NRf6hZ1EA174pWCsKWgd1YetZHhiaZLF2w49sh2w9yGjWojSDdwkN",
  "key17": "3ZZy1mp4NXSDWrHMncFvcTuntoJMigZ8jc9YnfSeQJAYe43NqpVhFNXHfMXu1W6wNAbuYDx7He7c6XNnRDR78F5o",
  "key18": "2wNh42WR3jtD4gLTZWrqwnUphNPbhcqZ4yugVyWyyhRzJhe6ySeSGyG4uxUPqQSfrSM6RnVStkawSVF63z45prRj",
  "key19": "5dQm1B8RiBi1aCYXsM9rC8rJVfhniU4ifpoumHwajLDFkLncWpWvJdi5qNXHdjWhZwAaNMnJoE9C2HWckxC7MEMV",
  "key20": "4zimwuNMtqsWHDWnmKVGiCsviYxxUpAQVo4pXdjZvXcp4KL2ZW6bQ9jZXmcE22Td3nz1ehqUAFzmg7d5aAz5X3U7",
  "key21": "544fCJb8YyGQEsEXeFDmYnJ44CuAZeaZdbsBQtRJGenC6F9PLT7Y9x5jH6LiX7iNzitc4FYfVG6zqDkFHbCSJ3cK",
  "key22": "5bTguBm6BvDihfSbF9CEdAdmpFC5XNujPiviNL9gezc2UMPoLsg3dgWJ42N575H8JWc7G6s2AST6VnmCvHohucQS",
  "key23": "WWJJ7NJwSmgyHNUMzz4s9JmQ7xbqyqVgCDKvMCL4VeQ65Q34C48vwDjZzBKvS79CsddwYr1K55x8gsEbBvgq3Zb",
  "key24": "2vo8VVTSMkMYqCzEHk4XJnMdRzLVzB66VrC1FL1L18T7sZ8A6pSptr9NdVhUEpcBoJYjzDUUkN29G3jta4aeiQR9",
  "key25": "8LZc6rdkqxEpCr7sw2ze3j4wbcZ5UDkwK3Re7ttKLn1EXvSDfHa3myLewnLRh5YBgDDZYQ4pnwN241gP1XVo7cM"
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
