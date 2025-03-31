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
    "3b7ZJ2jC7XNGYCLPtcJ2a7TExLAw8BLaQdgXbzfMCQF8PvktXRqJi5ZGQtwgh98iHhKkyZCMw8urnKofGVop5odi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r6eHZMdGAKnzP9pJkxegrbfFsjnQCgYk3Sp7GEZ2AhKJNpJKa37W3gSKCe21bWH4brPFybUM831tycEqKvfcC7J",
  "key1": "2zVbxYZ7dNvTq6jTT6fk7uts4xcHsmgqe211cXDb9W7eDHnBbfHbNh3mJr83enLFbfreQCdvA7cFbqsXJQ5DjMxp",
  "key2": "5KarNCcg6ArES8zXkMNbfpnBnvbDZAVTj9Vuft8fAF2UrBh2bHeWyUqgidYfRF4CHfnffizbktrnYRxGk69puo1B",
  "key3": "3AJwM44Dp6bBEVmRPtx89PvuwKYZ2JtYbWMVtryprN1RHNpnu1S3PS1LCuwFZddv8peSEp7iYydsxnm9K1Vyh1rv",
  "key4": "3n2ans4KD6SV2t6X8ac1mcaBA6eyxyAo9T3iFSmLZbM7iwqJT5X9dNgF9TfrThrHfsT78fDiomjSZbw3bACtU5vG",
  "key5": "3Fn5kt9C2H5SiUcEuE6HK8oYRA3j9GfJtoFox3vJbsTDf38WzadR4eWuhZ2Y6xnwHe1GYpDFnswNa9LqkpCzqS97",
  "key6": "2CoNhzKU5FTfFt7LupnQRP4w1SSbqMyJQ31Raks3KnDFa4gqTmxETCA5CtVN1G3Xt7AMtBvPG9d9EymXtry8XUWk",
  "key7": "4SzUJVHWXqnHXbettrTUcnATJdmPYUPdqEQM3BFqWWLHMWxFtFYbS3wmjMBEv5gxXzxbtyqXuzAJyFDY19rrRvPJ",
  "key8": "33RJgUc1yBss1FxuwEnewgSmccWFCymrqEiPEj4xfdqiQbWuyHaWNt5FXSDPaQD2K5kv4EGANkcwDXmxes3HLVA9",
  "key9": "AoURvTc6k9M9Pn24F2CqZhv2etcHQCeg9hZkYHSUKncz6tPfKtwjr69KK5vwo1XP6VQ16QnHNsokuhwLthS8hLD",
  "key10": "4MisvdSMcBipxKzEop64mzGCMGccvPi3ua8uBZfBCSmKmVdxiMtbrJ819jEGQ8zvPgz321BvNAJmohvgPDgZwMjv",
  "key11": "5HVZXWQphp43mXHiQM5BgM4W3YxeDKbscak7bMBdNqjY2JBufouypECkKAgYZNYg9RVvF4XRbG6K8jxr1Ri9nnGb",
  "key12": "5vCn6kEyqt5yG71KvA7WpdGBBY4AwBHNccSgPJrtexxYoxGUwBTacaxFTdkv1GuxM7QxEcwURZsze37TCnJTF8L",
  "key13": "4iVyAaPHXcaC3uxYq5FWPi8zbpmrW11Rj94xUb7q654V7vcuwLhoy7bLdJGoDPoqTB1CRaoDgxYQmFsfPRQWrwQF",
  "key14": "4JJUnicQhCHJThqZvxc19NPxYuTcNmGxEshVb48PLWsTEpFFiZtCn8o5Gaf8j3hLwbN57rP4pkw9v9VGYTc5xnEc",
  "key15": "CXcNBqD2wZLrUBZB5gVALh6c28KZiAV4Y1fA2Ss2k3VTVAkVxjDWgKFEGexr2i3YGDcZt7bvPovzE5eAGd45s7m",
  "key16": "39FHUmLUCVSjiCz5VFYnTirqMwtCzaMuZwjC9n8w5GNLhvkRQBcGaUXcJvYRmCxFFu2yCfeJYZtkTJczC4SZujtJ",
  "key17": "2sP4dxeNrWFWu6T3JJvNtkbs6ZG12WNJWbYV2yicNhaodAe5w1ApBNvgwkGUoVkkyTGWcvv1TZ9c6dCz2k25oW5z",
  "key18": "2fbgUhq7oFbaxZn5xxtnjok4YwYWbVD1reA7FHEzXE7qKHkCzVFzbHhJEmFknshEr5we2hZQY5yR3wDN4vCsar2y",
  "key19": "MhaadzhnzP4FFGAuNSADnuo5HE3YXtCBgoHc5eoQYyF9snqjHzsZTy4xAJg2TxcK63pghXcZcWGvqdrqEB844gX",
  "key20": "2HdBH2YjyHZpSLwNTQcwvuf3qBASxBqVRD4Y89zv4zyhUpvA8w9HE34V5uvUb9ZavPsggfQMuTDQJKzvC5Tspg3B",
  "key21": "56MqzYZauJdbNEJfztrwRS7dV8jFtuW1o79QpwSjzJecssnsJcGLU77ctCVxj4iqqPmN3Zqw4HxmnpGEuf4PB7Cn",
  "key22": "rQyZ4ZXKfXeVoWGqiAXSL98NmzB8e5W7isGXtPAHzBvZ8EhaMyadKWwutocsQ411GxkPNwhgDmTFttP8sTPFYUF",
  "key23": "a2537j1e8YTGt5rdmLV4spcwpCFagWBnxBV5EXJN3rKsG77oijtQxJMnytFLEh9BNbC9iGGNs9ApWtxoYCtMrbh",
  "key24": "3dqEVAdJWP3neAMhiopE7Xjza92oy8bzyHpFHBj2JcELH3c1UjKirwS2crJDD19hDbtGA1vyEh6rTGSjtDqymv2Y",
  "key25": "5nLhybzFj7wV4g6xCn4pWn95LtweyyN2tuqTnWrPuYMyogxM2gvgSQup8tekBRkFmg5DyyMVgX7MaHBNbhCHiJCf",
  "key26": "2ifMsdKBkbsa23XZuGgCEbkFzStAHMbtx1SLHxyw5D9hjk3GwMD3F4sUwqpBdH8uHzPpWZdmet6sa56cwPsN9NoU",
  "key27": "5kBfuHvjE4TswKNxkZu3jP3rr5HM5ZgggS5rUFj6PLEAjYHWmypdVEwTD8KS8rWvfS7ZiFNJFf5gHkxmFjPgqCTf",
  "key28": "4FBTj43fTUYHj5HtkmuzzCobWJg3oKD4Fa3MgJboDkMzx9DMPD51WiijRDVyFewkPv5sDMwsTzSMc9ZQ1cVodWnV",
  "key29": "57auua3CZDwvyB4xJoRLhy24kUU4pjTpdppj9ctzgi5jg3XgWDgnrP6FQABSMkaVQcRDGE4tMTGHY3rL9E7RY6pM"
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
