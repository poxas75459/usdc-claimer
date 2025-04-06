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
    "mxQUgY7f9Gq24dJu5KgyE7GHt1dPoAYdFbQJ4iM9esiRp2WuDHtRaQuAv1AoV97HigA31mgLcaAYbaadh8L7Sbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MHPx3J1R1bJ1qbmvCokNGTp8dn6QBTRvyxsG7GfdCS4bZxcQVpMAwRtT98e6hf3NQ6ZQXkbJUo1vXZP9B8BtqAx",
  "key1": "27pksihxTiVy9psUjXqmzo2p6wErYATM5zDP682uWTsrJNpEeFYfUGqLsMM6y5xjxunK3CDNVHnJUWg9vSpDQuyQ",
  "key2": "2yWPF17fApJtPT2jRsW5rH8U8Q4WHTYE25dRwyjrzvKohgqc12UFS32qer1sMfZRrXGKQ4nSGm9aHoG67FBuyYNG",
  "key3": "2BwyJsgMfRBMCqR4xivtRdkbjT5SstSuU1AkyBzLoWVfy6dkuRK3XzfhL4Hu1T7zvJfT8vfL5nzLpjhTxUpT3LBj",
  "key4": "2ESeWRnc2e7erTZhiroev97fhQ9v8RAhcfPCfbfscjbDfzASgnaVhR5kwccej6dKptbsAaq7VFKAXyX8AuL2afsf",
  "key5": "4hNCQw29RAkDBj9om1hLDB1hdjiFwZEMFXFva3d3qGiKyqHcB8NFFt3vAySfRjjNLzKUpKUzVHAbbLf5cbD6JfDR",
  "key6": "2HVwjkug3mWHZPdHSd92Ge8233u7MXebWtHdXCnzw9V9nBNuSBeFYk5TeJLJXCKrHehSaxup3cFrLDeWXm6zngmS",
  "key7": "64hRCh6grLTQbYfbXetc1L3FhgFkGSiU2Q58JL5oeXwXaGsuU7WPVab5rza5ETEARN5ctDspb8H23yGn9w3gDkaM",
  "key8": "32eWvi4xLH7VHuRFq95k1L7jUyLPMzLFnx8UDbb82ANWQ3FdKXgFU6Lm8ro9ispMAj9yZhi1xwVtCcUhk1vXaGpy",
  "key9": "2i6mMpAPEJHS37rpY6K8z7AEYG6sZJyXTwNjxzs8SvwWJaq8uVkzB1WqjwqYL9SXSHe8GPiJaYWvo3z1wnHgGoYL",
  "key10": "nLE9pX2PG61oG6phwaJJrzUj8GJ6vqPYPEKv4pwBgjErfE1pmu4HQDqtv2Ekr7nDENZSdpJ341DVjMtga8HRqRX",
  "key11": "51MybbZcdEs3EweW4RvdyZmEeACGRDVfuN5kQFM5CaiXNVTR7MdkZYZ2sjZwzKUFw4obY7NA7eB7qNCpWX1djUs8",
  "key12": "2Ed3cjQQMZms1t8a4794UDafzPJtbRHkz3K9HX4Zejx5rFLbDV4EGro9ADPNaNqpsvuW8MQy36BWunVDrSEkYtJ4",
  "key13": "4T4shtyJgGEs3jCnCPEwbB1ANP58zoNY39MDtvDfpCv79fZkY4XMRbBu8UcJHJnwYWUvazixVHrBJUjPoFHi367B",
  "key14": "3PphBAN75uMvZnYxnXxkhXHcFcnViBLC7RbDLzdddWofAvtp6VAbYhLLfXafwJYXFZ8xue3whp5oA9cs6Aygy7T2",
  "key15": "4JxkKR36HoSVWQoW3Aqt8pjKc7KuT5nugT2pcqDmD9D1n6fGVVZhAtotZGBmhfq4PMJA7Y4xchm7vFpvQMS1NdTe",
  "key16": "378gRCmgdvmQ8HumVDAXXYszEKCHuUEiEiPZpqwcg6en5bmgokDG6FLzzYYVXmgExtD5JjYQF99GiUgkJFZcw3bk",
  "key17": "2hT13CfV6GKEiJ49EKMef71G82o5e3pPeFhaj2gfccBzRRXTGfV4Nu6irU8Tea2pALsF4QrtYWsGE7xnHdsPf7Yo",
  "key18": "3UE1YTQRfuXYbo3JY57ndqe2NigedcNNCVfhmy5Mu9QKZ2GtBuTjrPAZxDF7C3wuzGLoxCbQHS93VsuVC25YWWL9",
  "key19": "39jzaXBzZNw5GzvwYGgJLh9me278p5ZQxhNoX2n15fEyiifmeqTiRMcCFNzKxLMHXSg2dP3FAUhzYsDeHKjjaB38",
  "key20": "DwpVH6Y746FSfywivTG9vt9jYzFTiLKQVVJ5ndi2xTBAb9gk1xq1ox44BpWEXySK9KV1aoQERtKe7unsYx5G5PG",
  "key21": "26N4B4LfYWfrGhkYjvBtTsUbGgTJ21nNU1DpXAagMJyFAez9skVrffHhqyYrDoALtD3YXJubdnGuLkycyzD5VDai",
  "key22": "5c24VpvTuaXpogrZrRz5cACt2LeACKNNbyNJJorVDzGPYHALgoLUekVJQrp5vBmABAjHeSX5gDFagMx5Jq6bULxC",
  "key23": "4ako69xwwMuWQBcLfwHav9KauL1RAjc6SgLTK6uhsfYffHW43gktEkwkWfnsg8g9GxBGNdAFQZpH9Sjh5hRidhfs",
  "key24": "4kb46S6fygeWEQnZn32sU8Pbwgm2ehoSTpgmZRC3Vu7SwLEF7Lu9UwMLrbmvqxf3TMMo6xJUaD4SDvayNHhRKbYL",
  "key25": "21RE8xYiu7tLwzyZTD4TfcFkVLt1Ni6wPCjkQF8jmyi9nLkdPQGpr9H4q4aqU7sa7iUJ4cuwMnCxgRcjnKoMebe4"
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
