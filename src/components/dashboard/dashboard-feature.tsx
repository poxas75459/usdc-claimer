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
    "2JN2129mxh7v2jjjcq3StWZ341ao8K7R4kedaP7XFsm5oAQp3PZuj7wLcgd5aVaAjokxZriGA8Ezaa4JRYQFR1Fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28HgUPhxFK5eou9AaKa8FuUjDBo3qgiWdQCJ4Uq2TizopLeHMyDLcyYDumy7hYTLubCNhfjzUcFb9TfP7X1pbjpk",
  "key1": "2q611YoCWmsGBNXBPVmF3Wgjawyp1y9iJZH7Ginn9RQTkKFigqVjfiMKzY5Y44trvTDrdTVutTKiJhGSpYYx77eX",
  "key2": "5TCxTgMQYR987fft6W7MJ7NQMBxfWbbWVP4cVyAr6kP5vq8kByZYnC8ifxoHGH6kXbVa4sKBkkzDt6aQwyRE845E",
  "key3": "4FV9SUqQnD6n5csEGPSxK8xgZFprFC824bCRYN8QzExSPG7xQtDo7D3F7KfQhDousB13BmfRa4A8PootmSu1VR9v",
  "key4": "WTVWCxEhj7xuS27qDzP93qzeDRsgKjrAaDX6Q1LQpHQKrMzXgLgFRq9nFQDTu68WX53FbQ5kqsa7exzTixS6PHV",
  "key5": "3byeNjg3SqjETvRGPkZ1dsmpxd1zYRo1qmUAHSyzezsAexCKLjqQWvhysnTPszkWwcWWkc26zbHgunr7oDa8HRoP",
  "key6": "2J1RCBhsp5s2Uyxkp8XofsMr6NPMqiUGgbT3byNQtLpYF3S79d8oTftSATTMKZztFKvm6YFma5AVxUJZhETxfymx",
  "key7": "gY9WC9aq3ivQcfYUKp3QSvQceZ4wn5UPrjmS8DRduxp7ijrAfL8oVbVDJiemXz55d7ffgaMDodsQzVpQf6nNBYw",
  "key8": "4gCqSxBSnaHym9ApJwQT28Lpe5KitMHX2fTyYTv9oNwVPBgMGTDgJEh9v938CZzjU7nRgFw43PFjdGStcFvcVHhc",
  "key9": "5HWhoUobVr82iKq1YdUqT3HMBB2zq84xEoVYbA1nR9EP4PAEnXX7Wtvstw5JKtvFyiQMvSCwC4e5ers6KjjpEpeK",
  "key10": "UgPpwjRmvJCYFqXdB3Tkd5DZsiTuPBMh98gpHnvCZgCq8pwsUKd7ahCn4bqEmsrjwGmwEwS8b6RALJQjPMAA3Dk",
  "key11": "2hf5psvz9a4tijkFCMjjBtN2f5Ub6xzLYNcdXKpc8oMFYjpQn4ZczLe4JtFpJXs1CEyjrJWKSapC7QTv3f8tSSqz",
  "key12": "5K1wRZvpcWDxW59PvcLFsfMQdpbXgAoRAh2itPpcZaA1m4GWVLxC1muXsRhS6SZSD5H3uSuXjeKezk6Ky6gXh6F8",
  "key13": "2rujEobsissBBNBRe1vD2nYSpTdUfgNybHUEU5xFd7FaiU6jN1xYf1j9qnU7pyFfHS9aV51eoS452Y5yZ8e5gkgK",
  "key14": "mjQTFRvPZknWWXK4JrBbiRYpEDoRu6mQUb796wYVUBDZLnxWxnbvgaXu28BFvANURCfcsAJT1tKoXe4afM6wx7N",
  "key15": "5MkeGjkGZVkqDPrbRaGRnZe2PXhHdwR96ji3iNcaKSMPUDiWk3Z3RJ3ftpJaWJu3tgz99Tjr5C2yW2qQJVr8dkkx",
  "key16": "2ZpnAZRNvaxgULGQqJiU3ebYjrRcMsySNv4KXsmvvNaq8hqv5M3f1xkigWLfTBXzmhqT2XkBxkDQZP5UepcAaLJ5",
  "key17": "66DrwhucK14GTGoPuZn1KY4xD7onYCp15XYoidoNjWUt2ApPaMycehfHL9hVkGN2j5xGXibKrsvEe2WJDWTUrhhv",
  "key18": "23NNi6BGcKyZTEUzyEiCy17ntowxYNWhE3UQCy1QcYJT1f7DRZGdFFmMJRryiUzb3K37zVT9y2qhH1HLXMwCn5CX",
  "key19": "2QvmJCQV8pkin1sJ67KWgGLVyGUvHCum47hS5f5jfcEwSmvpDwpz26soqSL854ynnnqrEJxSceMxFfo95rRhKCoK",
  "key20": "36gjavdXDrRooNajFPAfuxXVaLwMnvMgusF8KCL5DHvB2f8R4eko6PtwceZf696bXfmDk5bYf4LmAWbZmbTFSU4L",
  "key21": "QtEVtfqMu34qRSbJg8ZU5Ajum3NBjUEufioNGmZcWecm7ugeX5xxQF9VqUpRFk6jQCV5kAVq1xmBhbr2e7zta2C",
  "key22": "8CrCRkh34gpFApaTDZqV6W9Gm3ayFr7qVgo4iwZF3Mo8LtjzGRGAxBpkycAtvRhb2714siByvXVgCrwSQAAATQD",
  "key23": "22PAMv8gRo7AYxHWj1DpcXLZw24CFLKR83SMVMcSB3SdfvV8dBNx2zeVpdSZsdKd8sFDJxL4gJTQnNcQTwL9yXBh",
  "key24": "4XSVPPMwkuNLDZPfFr1iLqaJYetJxwZpkzdc8rKdLX1vhes3CjeQFYPtF1q1QA4vhgxGWw7H6Km8PqcvmrecxeHX",
  "key25": "3Vm22Z6Vh6M3S9VhZxmJH3EkWpGX9s3zXkkA5shBVyjsN7eoFKubmGzLudZ24kc9ZbimPrpk9bBHeTVrefv7PVwa",
  "key26": "y2XWz6Ui1Fj9jkqeSBK3rPZjjuL6xuFVjbbcq2qugKcs7bCc2GnHmNLGZ9YA2uw6zsfKhh9a3tfS68PaVMDnwaS"
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
