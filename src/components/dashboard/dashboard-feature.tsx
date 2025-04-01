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
    "YQPMH7DVqFtLQkREjtySgu6QsbbrCv6D6ggvbcWQQrnC7Q2bTbdG4nxabTBCVgmFuryHKKPJ2yCQFZBWSF5WCvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2441gQvpVUHRccj97NU6hMXck7FnaX42b6Wo3b5fMbH8QA6y7C84m9pVmjPwJJLmwjE9nUjvNEfPR2gr2uwRmwfh",
  "key1": "4NrxwLJgDzj1mpVWkjGPHF2kQ6d2HFvZDtYaHycyZuamqcJ4RseXxV7u9JFCyKJ7Xwa9ELMhaxNrMW8QcajUukjQ",
  "key2": "4ynLXk4VSpWZYYQNR5EX7VGLrda6fs2ymBCJA18FXdqaGxspW4UhHJWEqPLV1a8hAnDseRR7Kgc65bhzgKCr1oE2",
  "key3": "2TpBgXLB3PZvASraTBeHiwDiXUWREWVanMgFFN6UJWX1tC9uVoe7DyWyxzHaXPvDzn4jUyyr2ynhBBF82Wz6rtbg",
  "key4": "nqSKRbuwMSi7deXq2Y5Ze2freqodtfYcpBnNxb3uhkymbyhNSuhupjqf1jMQT5dcfT1rJkQueyQPYSzyTBhHyaN",
  "key5": "2dA9Vb5karwGn1ijU3euYPpXVVTy9GrjJVwUbojh2F6qYqxnxwsnYBHVHa8muAjwYQ1bfgSb3N1koxTMX1K9Yo3R",
  "key6": "3LGPCCNeRvCbktue9RKKz7qrSZybgi2PMTDwKkYeb94KkCcFE7hErxP7EERupSdw1nTBdrFrXrZHrWEhjj7uBSzD",
  "key7": "3CPaGLeKdcVz8245LRhXSK8MkGxUeUBhemQ1eJAYDFzJZnVbxQfWmbuX8QCteHYkAvdoEwWkiaF6Zp87m7XCAJU5",
  "key8": "5jd6iBejaeD7FwVn9QRF4VBFADKv5v2d6UX4onasG5yghAeEZQfdMtwDon4rRTZvFtJym4W4uaCmzjP9WDfZXrNk",
  "key9": "3k8SGcjLBJr62yYFZwVaMBkYuAggrZr3d8hxzk4P7qeQy73HrP2n883kTvbvpT2g2DQjsN7icLbFZS4ki817dmy1",
  "key10": "3ZJbz6uQpm22KVxLLvWpwn6RiwBqtsRJpwzSnQYGB36jDP3Yiq3tMqS1vfsNnmpAukKHXGrHA7onDui9Us7SPUDF",
  "key11": "4boJHRX1x1SJFQs1FAQ9fNBwJTwsCe2Bb9efpsAv6HtNFdChRnrxhKPPxW9amNY6EskMDeBSJzmu5xLNhKQvENGE",
  "key12": "2Gwykdvg6JYwqE6y5ic9fWZU5PnKUqRpPQno9TLwwJAhGhpAAVnf1p6uEXJVQkFt8JpwEHxqCasNZ73aXKPDdwPK",
  "key13": "5NFfFYnbs1PFv6PMeRyFdRqm1F8xWSEwzrc1MFZRCuKZfobL7y2GkMPNBkvDL7xchnJhj6UNhyE9gMf8sTG9ma1B",
  "key14": "2pUPCunHxfaTuc26wB926GfMrsmmcNM7gYi9rQc2fyYV1ou6JXFSJSaPPaWtiyMA9NUw4WLQ4Z5ZWdm5GriiBjtJ",
  "key15": "2tD2Fp5kApFzxmBCAG1o5vS2oKvJJACCaFMJwssknsJUXz4KxeW9mWt1m2kNcjkzR1E2J2Ny4DJc3Kku6LtcKeiq",
  "key16": "4AHhLaCG3WhTvMLHE2WkUT6yXWpUauUpXN5JRfc7P6HW26Nn7DtfVyjRzCMUgtAsBYDxFYS5BPGv4mQhY6g2eKiL",
  "key17": "2ZAbqddpUda819W9SowEjbeceL6pwRrxZPfofrFHJdcBVYGWEYqctnRJNyvNsKhYbETarssSZsQTHgkgwmV9mL6S",
  "key18": "3GxAhkUWzcrAt4PDFWgz8vX1GcNiv1Fub9zpnkVkqKEmcgivcgiSsQZWT1AfVKnP5rqDuaofJDzHCbmAUur7XA9J",
  "key19": "5bcxsgZPcQAXTVygwiFRY1yD9e6bAUVvfmktxYgwwakpvPV7LMAbpxz2JKABkfwpx5NxeMdzRK8F9VBUXDuXrS8Z",
  "key20": "4f3wQNcfawzMo9ko5pd1hHMUJ5WR7aNxt1YotpC1ZeqU1q5EvZnirHxb13q8N4LGdZS2CJ87mwTH2dtiUnd1Do9z",
  "key21": "3RBj7Pu3uwoJSYH1RvqwQerbak4BgXaFWZVboemzqej82u77pVccfk4mXSeygc5aVb4BHqT46fqsr2imjeK2ptej",
  "key22": "4KnhXe6V6YuMNk9woLrsfsh8Sot4C7XyQ83hDg4wuFE3t4i5M32pKX7r1e8vBMaYbWCUUJS2VuscxaES7aQZRapW",
  "key23": "5iqYsjDFkzz4s8nPPC8S3VM9no7AA1QWyGdCNCqLEhj6uA4XwH3B3sYYU2YqFx9vWGT7u8aybMz7diRju3q2CV4H",
  "key24": "3FQsGqsWFugKHxPr9MVkTw7uHwdpwHwgKuKyMVyvU72zQFhZX6mdBUxadYfa8XUFT4Gp8ac17c6HsibzDwuujBp8",
  "key25": "3yJc3euByv4icXmhVp273kFvLswj1dEGgJSYPRQdvcrUXvU5y1YT7nPGKX44gbbEceq1FNzqsGgvPQkUqqRUrV7j",
  "key26": "5GYHsaWAEbewFE9RckEJWbeG6cLqcEYWz1ABYWyxHRzZTShrXfSNraWknhEYwkEWvnnre82Ym8mJvf9PkHNq3wx7",
  "key27": "5EDPQxgCVLp6TPDjmY9DDfczoxPnUokSXppkVa12WyVrV6vV774SH2rEvjMF3qLsRKzjaiU3fc3nFvoL7w2g6Jm7",
  "key28": "4qHd1J7F7CQz63ByTMTopDEFAsCJgVbWuMmR2uvEVKhBNmAzUvEJWax69kPuoAnEZ6tsvmBJs9gPCJ9YbsaZBbA",
  "key29": "22N79QyUvTFyUCPHXNnRUkuy8Tgs9HF1AJvVQiY5mwXLv7KqvMsEcWrK7nnBiBNuVoJEXL2oTQN93jMCmn5wd4TN"
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
