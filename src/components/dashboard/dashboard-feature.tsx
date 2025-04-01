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
    "5sC3iEx7KpFzoJ5gya67msFegADfF2rYKKK9jynLrJabmx6gvY9nq9Bzf9VEkFz2xRGLzLCf56ezM2pX7YdW2RuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HqAtQdH7oqW73awQmeyPLRysBGQzJciKSuLzKBt72N4iXjA4jwzFmytn9RxpHxMWUsfXqJoyM99kz6JAt9YttuK",
  "key1": "22DTUb17SbaHYBpEX9QyprsNqnDJ6JzLR5F9R8imd4PXyaysN74iYiiBvndr9aZT9VFkf6WE3cbQFSe9TDQ7GTXc",
  "key2": "3tde4YTWfSNJCDBjcwgTxnZi1Ls6FeMQXehCfTZ1F1gJPvrK8fEC2FFk54inyBTN5EUP3u6yfsHXb5xWyP6hb6u9",
  "key3": "65wLtz52bKDNt2shJW3PyEijhZsHEXbMoLbtr9EdDuSzVsHUcN2ePEAsNvUD4crQhXgWdb235vYWtbm4rJxbTmTf",
  "key4": "2eHHx9BRkiNpV9D64ZRyaAGaZYmEKSyCSioyp35sWPwo4YRcmGbykv9PG7sqUCUf7BGR9fZ3AW5aGG7ZejNsgSiw",
  "key5": "587pQK5SHgN6UdTuuZjzbaXgDbMgh8jzwNJbwyLzjdie5XqYcP39f3mBfBkpG27RUEusLG7gqHjRKdyNiYB6qydt",
  "key6": "5QBJwfzFQ6Tdq66yG4XzYUnUuFeV1NLApQbwcCYtRpr5BF1NTHie5FUQv4GEVyQG6WZTYqxStyRv4sZhnuRCJN2X",
  "key7": "437ka9W8Tu8UqmdqoJ8ET2pscddXroa7n2p7ki9Pas7mBna7PmwGeNfkHR46odTNzqQQbErChLLA7J4THeyPJdQF",
  "key8": "2JoBjnJ1ERspCUSX7Jto33XADuDeKHsDMi2Sjoo3hC8RAsVDQV2QoQB5JAX9hSpzDzV17bj2uD1DtjZLhhquaoc8",
  "key9": "3xzfyM2YEVwAKMsoSHZyUj3FpnJR2RDA69zaTjfUAEsRJNxzXVGBxW6onGC81WDXALwoMuakeCxP3rtZAsRuZ8p8",
  "key10": "5W929rfWZSCEHZKDZNTugBAq32ufAv6G5JYWFziPHezzAAHtDLyig4aXZe7LBvTHBXiMTPb1hJ9nuXrzFq3TxYxq",
  "key11": "3eU7i58yhnVM2pn24Gm9mRydBfuxsPwZvraWNhLCq83KUkTdXps415ea9t7C33yuTSn4THJFAsmaVDHcuh1ETuCQ",
  "key12": "3gBG7w2eHZjQXW5SmgcXnHZnqFKUQQpmvSwqV1VzKYXRnZfLrErrTV4ujtgPZXv1eKQ5rYA9CqpJ5i2q3zGcsyBE",
  "key13": "3ASRakxXSgUZ2nf6A3wiLZdsVwD6q6B1cAiNbCnrNN5rLj2U9KaU4JByGhFLDubuJsz9zYVhbEnAnSSzfdhHepn3",
  "key14": "57YATNFsGtQPf7SScdp96k9rxkfsf2UEo58njU5o5iSWVUpHHjNJtqeymEn6AKfEPw38srj4FCfwufNqvjZifez",
  "key15": "5cJWJCzitNLfrfa2hXaLNDB1sTAULQdpaEecpqPXzEvZUpQdTdFGYb74ANSsmDY2Q39JxrK29jahFZ2uJTTcFEcJ",
  "key16": "43CdQA7V43nXBhnBhYy5HkgF1j7XCpMCkAxnKWcrK7V7vVTMzo54ZhdCyai6wHJmS39DFtDmgLHbjH5PKi7hPQAv",
  "key17": "2rfBxuMxr9k2A6jj1PSEUceYyb9hSUtpEoYJMcoPAJHuZRoMZ5L5oiPmMoBQxqXmkUXJazoT9cP7WNfyJuoNm98t",
  "key18": "3QLTeq6Vct8tG9f8wZJheboLAryD2eRrKDFjqTJmgAaMmCNoD897x1UNJAD9WGicrnEPs8vtDh2jfh5MJi9CP9z3",
  "key19": "4atFXwZgYu6xLp9pGruzJBD1Z8PN1btUEkQo5XFc4kmYGsMmeNGy81dkUEh76oExwVxiQ7A9DrQM9YovJiQEqerA",
  "key20": "PLqPuFA5zzZid4vU2JrGSqippAeSw8o2Hy56deSWZbFS4TM3knm1kpk9XML9ZXsDHnE7JADJ8dyzEu6hej8sNDr",
  "key21": "3x2CiKr7mUzDNV75eXeCAkWnYknKKzCysMC6wgjGTve4PkYUrnYZ7zEnMvFq7iC8RBoH7hJ8gfLjT5RYCWeMK7pV",
  "key22": "jHWFjD7fGTzS7NMdS7oyEUSo6jVHa1gP7DaBzfkhstenDLxw1pynk7DboH2drWgGbMDEJckUKbma1CE5NTKJs2m",
  "key23": "5zvxqCTF6V5oSzK6k61RAQWGCJ41tW6DNYG943mY8W1FUYTjR7oQpK3Phj9cwFtpN6HhX1kTeJvNafpocNwetyb",
  "key24": "4ikZt6tPUv49iM8YJA7cv4NSysyZvW7KHEdpTyBYHRpGBowVbGUJ1ucP3yGRgGESaMGQgumeZ2AjwW5UwXeaAUQj",
  "key25": "2ZzccC4zCKrkUt1jYbQQEq1nGoaZeq2EoAcDFmb9SfceAFktAX22TF5t7doJ86aTCuye3vA2JG3MM2CgCLFatznh",
  "key26": "5BCr2AfKZSMP7AzLYp5PQ3XJBUCZrhnPDaMDpZb5VcqnsCoZXFhoMryzRKQck5GrEyah6NkJdH58mGNN8NEMCUDi"
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
