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
    "5YjHvFxTYed9nxzVt345cfNu159sJchmYzdqofXQT3eCSHFM4XJhWrr9ZxxFT32Wj4CQjTHcw4GJykVkP5okhU8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pp9bzU3JJ2Zf6hKzAtn9svd1tbpgdjaWy65hdqdE3FSWgbBUqyW2WYGsE78xYv1BnkQ7NXNe4yeGkNyywQnrq7F",
  "key1": "mxMMe3oxpwztF41GANDKAbfZnqN2Fk1aefbKSGLZUUvPttH7NTkoqpWPMCjDHikZjkK3xdo9EnNLpscYMr9ToLe",
  "key2": "52cet4JGNdhT69VUzWGtV1jGYRbwnoS9gKcL7ihNPbNwcnk7mpWk4JZZBWrZo9dxM1NxfaHzRFLk3iq2Ybwoj5LF",
  "key3": "2raqYjQCSbWnKc9Po1yz2pC3DCgCRAVWgLCYp5E1FHch1xSmXKQPrUkJMYa4KvWbvFyTQ2rFa3NcmPJk2BiB8bFB",
  "key4": "5HYYTLt3DgSddcngEoqbV34Xg7xQUpkNupG51fYAkpxWJ5anBCLExRvAkJ9ctjbxyL4Eo7PY3b4ZZdHZ4yiGeHQD",
  "key5": "3dcRnuwfmULAwJojuMkQMj9YG7Q6KhSXRiv7hpr6jtQ1LHWvfXQ3MLMPNwrNtjgg7VpDXH6h279yNdbdNqWt3JQQ",
  "key6": "2XJy9cR2v7kZK18JsoxiPSV5ajRm43T4WWwVouMHJuU3MT2hjGGMQ4J9znN9oMvQLd1qSiLaoc66J41yvd18rp7",
  "key7": "Ka71CWBLkSRwae2sNhCgWm6wmRDpVk2vABMpeQ8WUc1VR2sTtDTt7UYB6xbd17i8UFUK4hwbonRBk1UJ65YPJyH",
  "key8": "5kdg5JREvi22z9zpttdDrD7rDDovW3WM6egZNsspxVuptNZtb1FGLpkp6a51ePeXpQ9ZHU2XbHp7HK4YDuzXCDQ4",
  "key9": "3UsvcfuJcKWbWLjv5KNb8jAMDLzWdZn28i7cq8qM2mEjUmYU6HtZNW9YEnsarsd1ahMDRmyfmJuu9HkzVXQdrmbH",
  "key10": "3aZYCTHMVpmrT6PjPnuJm85yu12Gfg7W8RHjZvb3fyQQjajyN3rLQuqJQcDtQYF5d41KWBMHMdKHDwuujJzmarv3",
  "key11": "34cGEHgj4zL3XAZrYMjhhEUZWyKhPz22yCboLSAhJ8HDHaQcvmnvsQAW49NKrKpDgSUsbmw2VsYAf2XU1khFnVrS",
  "key12": "g2dbZ15iCoCe4zcwS36cz8c6Fk794JBNWpk8PwghCP2BQi8oabYYPfQLr1epdiwqGVb5noU8XFEXGHVA76d9h4t",
  "key13": "4QoJQBWey6hYghAUwjaMcRhMRH4ugTF5cvZfvb84uBdveJudLz6y1AXF1TYofgwcap7owjcihDrXjfPiowYR9XBU",
  "key14": "3KkmyUcKMYUeqAVpf6NKmn6ZbUK4GDnbcpeyWcdUXxEmTTodwjRLZ2mNFpqADRuCQXGQQJBQraBwRAMZNYnqMJRu",
  "key15": "5d8hb8SR31U7obZj5C9TcrcuhDhDcFrKk2eK1zgo7Q3KK4NnV1FrJujJAgoeZoBw38GvgiA2Z7qXdECp78Nxnyjk",
  "key16": "2Z49S3ALuXhoh6QYrC6BJ3HhdcrLakUkEWaGpuwWms5yDYqzJU7MYkDAjzWccaPThFbVqNafVDoYN7H5ZSCGEXA5",
  "key17": "4fuN49tC9Xc1XLbcTaBtuDfRWRNtMCEM77xGhPc6vBBfYaVrRvocSCxxptuGkDpjdFQcsSv9SRs8BsvDTftvHmgf",
  "key18": "5xiJ4qfNYkLiH174X6EktHZxe8vy8pV244Aj3ptRSsUUFXoVWeLjFsu8qhh5oru57KqFift8CSNB72N2Yx7AnvjR",
  "key19": "5re8ybdRMi2RMriPhkbAiTipPKrxYCEFXXAuBQeN9TFGXPdh2H1s8vHdaENPTTYPViQHRjCAXpGX8DkUzz9ojVUj",
  "key20": "T8eYaX5tpy3MGjVdM4RWniXU7sEbLNJeuCLJAtAycNbgba3wAx9K7yGXhef2QYbk4ZCZYD8S37ABb4FNf5KE7pD",
  "key21": "54YMH1xsNDX6gbtBkS5V2MuZv7TMv4DG1QBXToMCRgEBugYCF1ZNS9yskwjJSee6umJUEq5PPUWRAzNLG4sw8XYX",
  "key22": "55ys29Wdg1mtL64Hmp6gTJnxox3LgvG2Q13zJcc8WjLwSEVE2jdnyC66wDEdE8JsnQaqXRzpZpYTNpYKwB4mxqEe",
  "key23": "5QeX7mabHvhAe5UnXhiyJPMhQkgfeVDJvGz6UZYePtsAR3biUbZzPjpR9TU4kFHWPjDEPqLHVGZMuUSeS5cXwNFD",
  "key24": "cLEVr6wePEnxWs6nVsAD7LV2gCvMBjPoUpY2Xk5oq7jnmxCz4UxiizqJsb5i4awP4xaSBJKGHXyocQy1h6kAmfJ",
  "key25": "4TBJ13FFXAmUWjwmLkNkdsGSn21BNyVRKhKAqh1H2A68aqgKuuJQZdXYkxNw487R5SfQ3CUMDjeUcaJJFQPZP5Xv",
  "key26": "JQqoujQA37AuijTYB6zaYcAppZbUjyMRkUQTuXz9szHinzgaYEJ8718HBeDTfuUBfwqP6AUotc3TkpRJXq572RP"
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
