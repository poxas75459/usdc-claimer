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
    "2BmTGEMsxKGbEYw4KGZW6aM75CiSHWwcAUiN4pGcPqkLVDoHFNCnEjJp9x89p2PoRKAaAuJ8tgh2o4X7ACAjT2ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qrA24KQpX3cCaShJjXn7kGpEtBHwZBLvbYSzKWG6AYJNM38FA3rw1KXHewrxCeLQMhHm8SvzQg9yFKfGgtvtRE5",
  "key1": "5na3jjFEHMo8LA8DfFHdyXD1WicCdhBAh1nYJuXZmwi1r5VKj4LSGHnFQgZmx1TDS4bT2kPUYJUxJFXiWbpNxcWk",
  "key2": "Gt8dmwkVLHwP8xYDpfMfufizoAea11ugEC1y32GgE2KstU4VU9PhYrff1Q4gMq6K8hAQSJ4E6KZtSpbw5ZSsg62",
  "key3": "2auGKS4AEdiT4uB3eJXWW4i9XdyAJfzbLDtYdEF8EE9zfdHZ8q7UaXFeahZP6YnR9iB5HUTxJm1UZT5FDgyeFkbw",
  "key4": "5C672c1JvPoKk5wAvaxGkBS8TEasjU9FxouAjs4uaUoPEgDhaVBu2vaj1s24GyA7iPDeR9fTr7EKSL6ACvt4kvxy",
  "key5": "4XgYyP86rW58BvA6xnDP3WFTVJT7AvZX6MRBncWMoAK9PWbQFH8LgXvEsMfk6uCT3xE8KfXBCsPueXSq8LSckrEz",
  "key6": "omo97jGLHWjdn5zTtKjNJ7Q7k4EhnZQ3P24tsVZpz75PUaAAEZPM1VefutF1z832WhtyDyNp1UE4C2CdjMSQWW3",
  "key7": "4od8W5JeBL2Y1V4NmtyWggDeywkTcNUojxuFrVC91YXTuobfUup3SAWquBzF7nV2zaZr8t3pjkvXzbpU4sGVsMG3",
  "key8": "BqrYm86mDpGcS6VMMnFAVwh1Si76qa8R1LBqScGBsUJP8ZEtEVuPnbff7kkxv6NgUf4kTxGh6HwzpXsYVRbi8nr",
  "key9": "5skPhoCuWqLkzhUbpVyTztrBhm1SuJkZW34fCW7kR2sd9qZbmqHBJnqGbY9VjRm2o6asQZ4dDz5hwQk1XMCVnBsq",
  "key10": "235HtVTsmcc4goVtFGk9Cb3vxo2TaQ1vbiz8ZsJnbTXYzd9EYJG9MxmGR9D2DHfuErPQLmKVEN3nWrkh2v7ePhrE",
  "key11": "35Rz3BqBcQbxZbMpSRJWR5BDcb66j6e7ggNh1c7eyuUsEXgo8jWm4JnvcYzaCL8zvxeE7wU2vmr6jniFbdksRfND",
  "key12": "x24WYxvezYfLo7CNa3uWQBh2jXZqtsSqTieRLKw6brLDoQLGJKJWZWtagkgXrKdLyBdYeSbfSY41EfqzJvu6qEJ",
  "key13": "667mzTX4oTyvncvRk3jkZBjREYJ4QgQyadsR6xLT9Bz7DDfQwPPYhACY7zDTAXWKenYvykcvDmYpbmJyvCrmo4a4",
  "key14": "2SDa8NQEjA4jFExpnTfL81fogV7CG9eRFzDe77AKrZojbTZXpxSMf3CN1dM2bMBhbojQrQqHVw2nxe2vkgFhxDCQ",
  "key15": "3sYQNw7oNpv11teVbSgHwXwztfrEKAv4hUovuNax2g3TuXgnpRKvL4bdAWPRpLeyHg62ai16zhKC4DKbnVT9iJbW",
  "key16": "2qhCa7bm3PJWqLorD28YVxtNAQRz5YnUvYztH2HwtiJ2ihx3QiUScRy4tpUtkPqZoW66aefBsYA6CdjHLnNmjBG3",
  "key17": "Na3bAFsCw6Mqkxb1cjj3Dz7SWK44GsUwkq5jbDeQdWiiFYXPzpdYUPFhWuYXL3xuD5hSZYqgbuK9gAya2gXdXNF",
  "key18": "2ZaWbFSq79BKtwtEvmRHeHZCsNPfC7xg8ZuoUq3VYds1AuRTBjtLcHZtGwtuSomVKY84hhSiwEufkdYKi1dSaS8J",
  "key19": "34HjLRXBZmzC4rnnzdhcXPot93Lpe9BvzPAGWgsHkWmM4KG9cKwuVMWWb8yrmqYkERSKThjEcbQ3tEE8MjadDsvc",
  "key20": "PfcyFK8qfzaAKTBCQuf1ak7kpAAANMUg4nuhSNJJa2A91MfB7ERL9x82FixfycPvcXJ5tuSd9CHTudMxsLy3VWn",
  "key21": "3MPum8dB6zHwqiiBFLsYVbT3nXMNnzwT2q9bHZHcbNJHQ1xTrrFy4FFrp8xmJnJo76idvZkKbVJYFAH2LZpyBarE",
  "key22": "63RmDMjjoq1ZB3jAZifgbeVGzoopqHRQfoAnxnDU6b8ERnu9wprfWST8Ra2eXq8bibqT4612Yc8sBaxASbPt5wRE",
  "key23": "5Z6XoQBLuFBh2BSpTxTdJy8NBgYH8QyBoQ8nvr9ZSXD5egjqf2zewdx7tDYoeW8aiUSLUUDguCA2Xw6t7xXK58ST",
  "key24": "3UsUwpMLH1QzsT3M74dekbJhHnhtuNZbhtkVBvZM19J81uxxnet65d8DmvzXBjz4Bz6P4VtU8anep8R718z8atN9"
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
