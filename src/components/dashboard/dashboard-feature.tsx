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
    "4BMemaU6yiYQHkExWU16gH7xrdjmNfFikHZjkv6u8gVRtVZbpkqJ63bKhwrGfy11ZKGdqh6tPteFi44iBdJUegMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pBdQVq64AuyY4ERcJCsPZaEnR2quRrmuoH3PoTkrQpR39uBNLUELYLpRLeMRgQmbuLwpweT9DoYXdGobAX8jGHc",
  "key1": "3k9Xswpwjigk16cGcqPVcQpC5KDFpi2vnHHob1pzRik3M8ytV2JfbrdLxuWcR26VNYsB1heemgvHtQWFUoNQfbGA",
  "key2": "V8WdJpNh6WdzQChpz5FKJFXtNWFNmtsKxo7eAVzuSPnAu4Beh6CtKQTd7GUyBewaNYZJBhsRXKQV6sMDLzHWPmx",
  "key3": "QEXKHPavEBu77JCa3rSv6h1zCUm1PxxHuqH4PFHV51jBqYc3yeqapvC2gxhtQoUjNv4nXYGrZCmn94U3zbMhXGD",
  "key4": "2AV92HNHYanYSwjKEBgsWG9ryq33U6oepcsydmdfhPkAycag2yw3tT9GRVagY77DfGgkyRESm8fDXmWde3hoZvVD",
  "key5": "3wFfaR8YUPrBhq8JVaWYG6bJSsPYmGDuJn6ofbzEBebrntSaPZ6RFMUqHEbDtkuQ3WVui968DZCo6SagKqc4eX9u",
  "key6": "2UEj3N3EZeZT8awbgV4ztL1A3xzmQwAJjczQJZ2dUkj3yCgpggvCW2YhQxR5quJ6Puxe9eXBo2tQozbqA9qs1vmc",
  "key7": "2PG9oCyj3fJJUp2Tm4aqw7qRZ7aVarGxLkMSgFZe7BrUqNHy1Q4Dvhvti2wpwARoRN6S7ebkjtKGc3P7dSqUqwKi",
  "key8": "4wZyfKA8bTDxagKwRMK8N4hNy7MddvsXkBiTikTbkPKWZyuFqCitqDrpsAGsr5QK6AHQTFXpKNbsMkaZhXDhQfy7",
  "key9": "3Ug6JSKAQxZH1kfEHYnQ5aTQETSDWVAm25b54Gsq94yfpEdPdWRJmJthWKTc3t4PeNSzMAgwYrFNYcM4VUjPSdLB",
  "key10": "4DSrStA4xh68sRrtjPmKTqZKz3fFWRW1J2tpDRxMCcuzyaZxFAtVYinKcngieAfBG6nBqDKr25wvd56j3u9XLW2a",
  "key11": "3FB26YWn8QNeKJ9ixKs9g6PjaietzBiWv5VzitAzX6pWgZ39M3TJtoWDvN1QnDi2EtiHFk9KRXeq6GFsAsQ6jUS6",
  "key12": "2RvcewtGgBk7CmUHSmoWZ3ngdn8qoPg1GSWLnMNCnHP7jhsXH3QWi1K6HfnYL7dSVAfbKcw9BhPM5UreAbAmknFF",
  "key13": "56A1vUmi1wmYUhz5pNKRqT2QtS3RTAYc23mWp8wi7S3j66Bd1Y8L54CCRJhmBQPnPuLZtXiyboMv6HhiG4DH1W1F",
  "key14": "XsiHQqaph3q5TaNFfyLrv1Lj867cZyj7LaEhqbteDPwyDXUpRpY9W4Q2Cvgd4jbSqsCqwcPPFz6jPxo3LVbzFCA",
  "key15": "2j3pa1mMuprh3L83zMGW81u7vkVzKHphBrwBrS7SmHVJvPaWVGV7ZMREneCiCushWBi1xeTEYjcNr3q1keq1KKPb",
  "key16": "4PFSomDhGjs38zPG9WS4Sd62SCmwnsap8UTenrZCxHM9KFYrDZ1Fr6nxgzdEr528SiBYpzA7gqgUeFDg9WE5NjEE",
  "key17": "3j48aCs7kfQ1YzsHmXwryhNA3UgYLXYQDcuJeYpPpE9wYtAJLXeVcEUxRVd6P6LuXNhpvzo1k5nS96cSj4fKTL68",
  "key18": "DS8F4S48hp2s5RGR7YKp9Z5aurLWQRw3Lp3NC2nzfFybAWhxmHGJBbB6LmaDyE4L8HWH8Bo87Qkzp4YbpAL2cLx",
  "key19": "4FZmvDpVHwV7VcoHRtoxHRMJnBVS7oP9Me3T2K9QC88sNesfioqMqq9sHPAteNbV8HExKaT1VLEK6ZFQ2B4KPkxq",
  "key20": "5fLErCrZRj4V75KZXxmvBpi1sJnEbWX6kGWyS4rtMZKXqB2aCfehwKiNQLZ6QrYYFtSSyjFEuwGGfHPyh3aTVfBF",
  "key21": "4a1ud3yqaPmMhpagzoNqwgmdhVf8a88DxR4RhUncJXamur6cKfhLsiujhnEz818k13VqFey2L4Lgn6hKio4UBDFA",
  "key22": "4RTujuUvremAcqQDxTVyMTUsyZE3scetTuLXNXrZ5kUoJRRne45dgFGMFmTef6NMf2Hi97d8zEogmRPU5CmA9CF8",
  "key23": "34j1uR7ELx9gL2ubgqwgfipHHLhj6qrg8Lk4scend5oRumEsn5SSTbng3GJpf6mwGwqcZupTZMf49PecGnd5HuHP",
  "key24": "37TZEjw3PeY3KFVNMt3CmeYKVP4AmKpLo5CEU4GDwbJmmt4RDXmL77cyabKmJgEuR7K3WVQuvjRRUk932soJg5Jz",
  "key25": "8F9ChbDnFdawnPdsC878Zsx9uEYd8TKZpi6JRDZN7EbKmFHHFT3pGYtPWGX22drbWAPazeV2ZrQz4wCzuLqhK6R",
  "key26": "4MKyVvV6Qj4NN5v47egK7vqzykj618rRoVK8eggTUorp2vb1GTXQ2h1Mkis7nvs5WVSBpJkmhCU8LZwwtr2ckuE9",
  "key27": "HowJ1JrFFZKAG77xUc61ksTcpjQvaog5qfiqKQQXVb6RjJ6jNMxFLWGi36iMh2fvPXnAQkKQhkmMvTNcCMTyNVx",
  "key28": "4HSVQfLjqwv19yB7Kt3kCEHit5vrrJnaZn7ND7NXEH7kbz4JaUyTWxXf2D21siwo46Wi4yqyS1xPTyJatcTUsWbT",
  "key29": "5Znp6xwnE5ZTLH7M27D4hFTLyEsVXibHE3dWcXaspG5YZY2xupCzeM5kZwxbYErCMLGh5Ef48mg6o9Y4XvZ8fb8x",
  "key30": "2H2tfhzTyJXYgzTBUDPwGoj1k2vjgEq5EJF4Fb1nMiHjyESADHo7PgKUTHe8oA7sRYPdFFVxaVYe557u6neNrYvM",
  "key31": "26YcBMJTQWRUVoMor7wErVNtHx4azzTQVcCdzVLofKWng5Dt9c7K4Z4wcXNJjnhEMUzQwXFos5i8BjfrgSgzdPmm"
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
