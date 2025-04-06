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
    "616gpUHj68JLaz2wCyNjnCLQPzrZ29RAvsHXQ4whnSV5sVqPi2kqP2k3yXXAYBkgMoPZZK4KxnUxxoNHYrLAgYfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m4hVdiRSGzJkv1wfyJZAh58K4dTkXowF16JMGZ11TiWvP4wJu6wTFRiPyKvPBfArr3kb5vFDaiwAH7rNuxfD7ix",
  "key1": "578ZkorsCC8zda8C4DjsxqBGeW1QpdkDZEkGSMaaTsFg5K3Jg8tQaRt4YtzzWYb6o194s5u1eZ7oaDhpfv5cGvdF",
  "key2": "4SJ9Sn3pTUMsZYpJ9FdzPD24CwSKzFrxpwT5pMxiWXc6PbtNkriaqNNMQp6SdA1wtcj9Hgmj2uuiXVJxCa7cSpMb",
  "key3": "2jbXF6YxzRLjbMJCJ7pv8UR4VhKoQvaPj3AJTUVmhBdef4XZRqkXnBfiWmhMQxqknj8KMEV2eVeic7DnY6D7Bj4k",
  "key4": "5o2o3XdHcveCrNZbkZ7bFCNsGTsQ5HRpCNajmHQ3rKqXm5DHgZiZXYVuKZdvsL9jDvLRFPWunY4T94mJ23sDyW8B",
  "key5": "2dbP6svMDQhvUT5bSEy4v3yhhDTB8EcHa6CeNvd5cYkbG3MqsDYK7CoSUvM8wkGM9sCL3bU1d4NPUS2S1NmkvXnY",
  "key6": "5kZzp7kMQe2e2RePdLJi57PQLYZ5CnPhmspP8WquqvPL5Hc9uhcsA4WPBNPhKgzCPT7FBPwfwAgqyoToVzpQsV5G",
  "key7": "26AmSwXaTcpbYTf7njFAsVWjL5BEEWh2BTwq27hgwunmJUY5F2TrkJ6ZzdfYQtLaXD6NVHtpz4Z1hc71WArAjwVp",
  "key8": "MHvqUP1QUrj3oetQZpsRF2m4gBu8qRSQ5boLB1RZoysUHYqSAFkYUWDCPbBnoaTcaCg7WAiGWTNznB3gWatMUBN",
  "key9": "bddTMxde2csqgNnUNSGLPfQukrdyDo9ktdKC2jmGddUigcukQU47Ae3iKQQK4xiUAyiNqwRYSqLjvG1cQ1BNWS7",
  "key10": "5KGkvsoe2iHwUbstUaHirLJqfKbQrSvfgWBR9euDNwYpTL66GzxZWVWieTqGJb6TQULMT782JGrwmKSBKh6LTSxN",
  "key11": "4W1HBAToJj976kMa6RBs8duNmKJUDAXtYomvGYr8oAf64DvSth4uaCPUjPuavDQazbAoqsm3eyDqsRRpt4fBrSG2",
  "key12": "5jChGPxDN7YJiKB3jSb4VouC5A1pbChXxkWm5dx58iaEuczRjH6eaympGVbYmJr6nyuBGbyZiiNghzd8TFaYqS4X",
  "key13": "izTRrqN8z92FK7Rgjac2tgyrNfCacmqF3nowpHJqf9gVfCMQo7hpqxRMmy4S2oA6SVdHzGC8vhEESrfsRksZk8o",
  "key14": "22KDT4PF6yN7xHMdDK8XmXXFFdsHiTnMdf1zrSA7jR3kXBwNkSHxGFt7CDEhzw7YSKjM5EHzTCLAuxbP9CLJ3nT3",
  "key15": "4U9PHDdmfm4CqarVsZ5L7dhr4vQECFZPEYwiHMNppseUULnCg1XiJkdE1pKzMuU6PtuHSdwmZQAyXCrVGzEUqbe5",
  "key16": "4yx12cKDDNWX6PyFQ5EBAsSUC1A926T3tJPwGaBnDEtzdv4P1xv6M8Yy2Y2FuU3CGfZWjiVuyiJBvbEkwSP63a6U",
  "key17": "64hCf8m9n8YAqfAapk94KW3n9ZYA4XNuhARNNbb326KSkdAYedUhaBa1dG8MSzc2GF7KG7BYWwjegFSsUPy9XttZ",
  "key18": "5p2qqYEJWmf8mcRiuCcFvA6RxTLj28o23ptEZ6VgEz4eU4U6kJQA9XeSRkjopmN1KxAL8ZV1DvVXRpeuzHpM9EL6",
  "key19": "65skq5X6z3uPr7LVjMCo54yo2FPtPTVVCZ12kda6Dyjq3PRsdy4RRk3shSDkayx89vBvXrjpzZkNr1pBK9jv5g3D",
  "key20": "3Cu4CunDQ6jDcosix1uWJM4gjoTj4HVhzFBbRtpmRiyZb4E8WP4kkXX451cUfxnWSkgRzZNfzUppRbYp7VUTjtbe",
  "key21": "3TDKnz8ucQtLWgj4TLKx6yNHKGtzFcQM3BNzk9WkL6zWtekp5sGPTPJfYkFcHzzQGA6fYFBMRYwAqKv2krs3sx2i",
  "key22": "3RXRw6N5YGnc8HoH1rzWpS1LVqnNrhmzYGXAeRmijX6dkk6QmYtrKHCyT7ahHQZVTNpXvhRXyuBXLuua4C7Sm9P7",
  "key23": "339PoVnzLokXGYSqoJ1wyP9jx3spc2ZezbURoSEFrCcbGLSjdhz9463Vi9vAfaqYWJj5mCPzmqa9RQU2ZWWC73Sy",
  "key24": "2GTExmSQngTajTAP7K8LJogDKUSysGr9eEe68mvFfGkhrk4x15TMvmgw2X3eu1CSiC3Phmfa5t7TFDZp35MQeMe5",
  "key25": "5dotMBhsBsfdSaFAqFKep6ZKRABMmDdypTC4v7PdUVxXkSRuWYQG6aZihUAvKK1szkQBEPqqCV9D368syrEEBHeC",
  "key26": "xQQQXxtSWTHuHzkcwWRkkrmApRHG43jMkJvU6G4rtxNaBAKf3sAzSv2hd3NT11aBqxXSvG1uNgVTez2yrRdFyej",
  "key27": "667AwcQURwyeneUypRwdXcRXHytUAzuadX9jWL8Ld64jVGD6M29U9m7KQRV7uunaf9oVFjLcUSumhziksAjxBzEF",
  "key28": "5rwRHJhns8LSq8SwYp9rckw1yuDaRU9urkczEuiCjEYAeMDUMhhBkuygVrZXszFc8ekTapUEwBfWYX1vQKcEXyL6",
  "key29": "5M59VFDCfYZwkETSuuHWdYMPkTt7jfQ7pq382pgGutqn7ab6avFvsisd7akHbTbiyyjMuwZKi3TVsaedynNJBQqh",
  "key30": "5yfVN4uG7K7sVQrE6yVon1mQw99HoMpWTjYTzKVMWy7uuuKaNTcpDvkCZAwQA56LQtRq62163yfFEnBLfvkgCt4z",
  "key31": "vBVdSXV9mnX4cab6idr9vsSa6eEKD91vbmcU5e3ggYbmFpjx7BARZVWf8tA7RPv1iJfHVM8dLj71XC6opoJaJPM"
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
