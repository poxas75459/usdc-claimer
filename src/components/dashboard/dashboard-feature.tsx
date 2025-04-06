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
    "32BDk2VcMVP8iUjxoH32EoHTZ464tGQQK7SAKvzWpp4FzUTxfomQdBWtEmwnLyFm2cm2KaRz1hyUcCg7ZaZBFKJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XDr4KtTccdg9rbyH2mXZ67JUyLPZZV95fMcSqmLsWcJg57pPrF2orBz8EsX4ZRe8bgSd8LqCnFQTvfta75JsRKe",
  "key1": "5bPtbW87oz5jrYY5ZPDiwWrmAVYhGFWCDx5HYEL9jJefxuwD1Bfoagb9te5rTAptAYv53VJ1fHozx5wD1Vr7PVx4",
  "key2": "5YgGUgTCswecLkh7oqdGj672J9UtnrbwfvVDtgqSQpNMw9JzsZQDYfK427eTvzbew63ThtMZsv2sXuYBtwcyBwkE",
  "key3": "4WRUwTZ1MGj3edwRrujwPDaLy1tR7cB1YTSW3fwv7ZpoQCwFTM8njzMs7HiFj3WQQS35W3Ee4STg8ibTrRv7yWST",
  "key4": "5KFC8A8h7MmqUUnHZLFp79WYUMFTUwzH93kH3emwdtUm1EtpeHvwXDEiQ74P6EDBTmc6VJB4yGwYhmLEA5DB5nvX",
  "key5": "mFrygYwo7mmnfeVUX2ErvksNCaxcYNKRXqgB6GZ4ViZcsNx5hYhSY2G4dxSh2hWnS4hzDCFcPLZGCKPnAskwXdM",
  "key6": "KfJEdQo4UBoyXqAMz77FP5fzTjiyDSkYS9TkCmMSoXVpsETXBi81pXttMySrJvWZyK2qRnJidDtQkvAsRGmAh4t",
  "key7": "2dButRqnMuUTb6hb9pVGDKW7b8MMzmGbiyWQj7D5TwdVYFr2LPEMtF63Rw6Cs48zMs1uccJm1pzchNUbBtMBjhGT",
  "key8": "46KsAVoeiFYN65tK7KAtPPSh7fuZdnfCHDhgprAFSwmh6bLyuQF4Jwr9Zx5d1aJvHRz1n88J88NbneHUSDPasV5E",
  "key9": "49jLe6rfLMtr4ArJSmzcYcRWYUnu4G6iZVhZhNWHt5MeUxjQDnf9fqvg1mGJUZa6esCCfhimrgJzjjrDEVgzCdLB",
  "key10": "3K5A1jkK5ueAa6iRP1UyHqL4uWJCtRLVEs1MZS4eJ6tU8uUfHcdAf8vX87d6GtT1HyDqhGJbvQejfeA3uJpmHWv9",
  "key11": "3zLcrxhM9pyDezXTRi6HZjUh7B3iBUoPvRRN1MDq5a2mX5jEb6r2XPCReWUtsf4ekHPRf3J9eMVkw3srGYGrGCno",
  "key12": "gz98dEF31osL5ZcECHrtJPZTygVfKMP2Z1racKg7sZHWSjLnwT6VDntYJzJC4Ah793bhzqVc8QW5GUs9WcfUbfU",
  "key13": "2RWRKSmK8HQ5pTFqapKk1gr2sJjRbcce83hAd95u4FsyyQ23M8xZr5mVZKPhgvjjfQFGV66oTnoBT3G2GFtfzwYx",
  "key14": "3AbRCn1CBLi2WY8gKbXFZ6ER4zAVhQu9e9jDrFfJsDdTuvunpGS73UnX6s4cRAFiq34AFAWPZEVFL51pKzEcRguv",
  "key15": "5EWS4abYkdX8Tzv7ATiLdRtGjxzmV3pAractN3m7c9wGLeYCV1GW96iqZn7MHckDd4VtUWY1P6rozvXAUSUdKt5Q",
  "key16": "6XTawToADoR252KcW4tjfjLcRxvm6Ms9bN6r74k8frdq5somvs7SGrHUq59r4wfTTvuKVkWX7r8PweDCxum1tko",
  "key17": "3idtp3SKWos96obu2nsFzerxUj4HV8Jpy43heHEuTKnA4j3cwv2Uz7ozudoBiCq8U9UxxmTZLL2WsQBfDD2c1g2u",
  "key18": "3GjK7xrNjENmBmQJYCrGnefaFpsC7Gb1PwgqxGjZey6cm79MzjMXzMCi9NgFQVGqhywL83cbYv4Ugo6ZHZAkkrLq",
  "key19": "3shWJLqJwBW8w2ehajbsL7mYSK9a7BQQEFSiV8hD2gNBgJHYpG3vo57PYK7kAhMkPkNqgfmpdS4KLhVrD9ePSg2K",
  "key20": "4YB7zSUbUWg6Q4FvhX4hKkTNoEMRksm6KFVebafpEpssTVABf2s75KycxdkJ78yfQDoDd7vCwaCfoVp8LEJzvcZY",
  "key21": "xtCBAoxULb1BQxcBFcZWPC87FS4zVuLuj8W9msLz3A32PRZfco7kA51a4EY5DW5jLVbUhksj3ePXFZCAswt96Be",
  "key22": "5pbM84nUQfTR3SAZHg47L5WsR6MbikW7xcLFujSx1WyNNFrL9BrGR1hq3jjJ6ZgBTXZ31zkT7nmRGVsPw5o4mME7",
  "key23": "2t5p6kNMP714uR4ZF8Ey6A7RGksy1oEDkoijGViqGfMumoxC5J2GNFq2cGZ1oTD4osLVzoMiSVd4tv6yE2czz38f",
  "key24": "5zoFJYBxxbbnoXvfbgfZxgobGxaiDGNSaLtcSCwVGjbMEJ5HMmQuGPpkFUXY9Jp11Q3GA5Y8f8oeUmUC1uauYzXo",
  "key25": "25xbQ3p7i9dKpGbsLXLo68nGLSN7GVvAPTrMbEkQqnaTJXEkVvCzjmz93kRvKao7JoSo9WL5Wj5CvByLz2Zo3Xqu",
  "key26": "29ho7r5KNpUmyXhB5JbRvJ1vffHc7rMVdi4ist4wTfJ9prr4ysNzBTThtai4XwB5PoW3wLFWzpub7rrqWBQMNs87",
  "key27": "5JbtSrRwKhdXAe6ddgVmKz5ucP92FgAdmQpSuVKzUFcxAm8nx8yPpTvbF4j25TJkcMJFdfit1NEJbQfyn4W9vZZ6",
  "key28": "4unAkejpYRgewbvFTBwCDhdh1qF5DR7mpgtkPEHMT9QM8pZBUhJYtiLvsfQXeBCHmfVCvEDpHgsGDe9L6DE5i3oH",
  "key29": "C38Nz91CoJSkzBkuHMwLmh1B7yRkmiaY5W1PZWbhJGjAAQcVcyMpfmUvXvvjVW6cZ2RCZu29T3W87pUS55xL79H",
  "key30": "5rA9EPsmMdK8UYQfWyYaC42sqwyRVHxe8d9PojojQ9UbStfNJV8aiCQ3GEKysdaLDFcMchhTUnKBBLKjJ3Ws5xXi",
  "key31": "4ExyRPVWH7jS2zEYTaPRn9JWiRr65oqs9bzFSbD7LeaaczEwQkG8T7KEGVsKNcBNc3LbW3n5eGa8XPUJEaVngyYa",
  "key32": "3HQVfvA1dRsmYtBKT2QMjsdFJVxoLiqwnQfmca8EacKa9QbgPdjfn1ishxC1yZe5KSnBbhdKBgWXQGcQEjfR4ofR",
  "key33": "3LeWxPKMZQ1JkusTjRQrZe4HiS2rzSofSs7jLH8yQ7LJE3SMJ5cWmpu74mYs5BAeCWjpwrtVzgngLsc1wBKGPhph"
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
