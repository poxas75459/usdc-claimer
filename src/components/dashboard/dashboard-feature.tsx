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
    "46N5xuiKeCE7WX4oBikSn8uJRbXmLNz4oP96W7Ux37dELKbwLBhB7o3TMmV8zZHL96WBasq2f5JyFQwEYm5fcFsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WTL6Yahi58oGP9BNC42kBHwxUsrmJ7et2PyTmDa6LHG6gvWnuFpgZLokcHsWqcb3vQZXUR5ySVNz7mmdsxiKWUU",
  "key1": "2KQbSY8PT3Mz4tyT1P5TBjfXWgZvu2sW2qrTCpXpmFAgJUoPEX3W7G6EAkXyCm91e64oB5P8h7Kewgvy538EbRKC",
  "key2": "5X3yKtJ7jmZpepu7YrKhMoBzbNxE6w16boruAsMVxnmW7RSfY9VFKyqgQ18VkcE5gaHZFcJuj5cqEMbBb4NkYPuL",
  "key3": "5Rj7m3QnRv57TYGi3aG5L8rET7AdWGbaAb1od2QDsvHFJexTSW8VDmHSAVri2fUAKc4ztmtDRFd7US14xL383fFc",
  "key4": "3o7WTfS9cNyHmtS33eNACnbPsriZyzciBbid8GEgGMnKtkPmNj9pVJmZfxLXdhrxhXpZsNVbYGk4kJMCoVGxG6Z3",
  "key5": "23egpXrbSJ8ZmEv3dQyCkMNnMA4XqsdUt7Nqg48UMxCVLr46fmyjgpRM6PujRrPjEya7suYARPLbb2ttiEwngzwN",
  "key6": "3tQKqDXU9D7zWGpoZe8PsHc6yjGs8jK4eDL4FxJqGvsyT7Y6EJx2wQMo711vEYFfpr8ShhHSNXCo87ZGQYUoRZq3",
  "key7": "64RYPsPMZChB5MXWFphT87Rhsv1jQMuASWYfSmaYtz6pxe5xUVtznpibZtnDoVLzHV3krFiTFLmRywTApgvS5vJe",
  "key8": "psALy2GBSiEYDMveB4fvJknYopaSw2GeBsNUqArfvHfvdmjZfiGgjiYGHXS7yQ9xkpFAvrxQcu13TczjnPvAjpa",
  "key9": "2EjqiQhZkTzWAnAyuT6CRvXY472Z3ppe31FZzkTWWVq3qDvssWe154A7iRiTfKQihPw6DRVeg9e6vy4HB5xJsDTr",
  "key10": "q2HNps19W1gwdzA35hWXet5azYa2Z7W1f3nU7pNSPzLefQkaLWnH4qEsHkt4EQUEw4tEAuuapDMg17ssmJnMkVc",
  "key11": "3Ua9ErRPhT9XTUwrb1wjjPKBxJP9Cky7qyirRiDmXkwKjjLVKuc5HESeKB1XzrMcpgDM3hZoXhhaeS5Q5pp1PmuD",
  "key12": "5eBUgPYfCuwUSYCfsm8wNKPtRCNrU9WWXHRwS84vtPCqZswwikGEFHcLsgE6TPMcRPQAwDBXdGFF812WnzEWBMiD",
  "key13": "2q8syhprXoVLWHUf9Ks5PX4CVVzRMdQRKvuchXxpiomShNDxxFtAQR5esNWwhJyGFwvgt7TNbYLWKSwNXqe8Gos1",
  "key14": "5zfxC5Bo3okpfZYFfK7dcJWisc17RQZYXGayMSEjmzb7TGnt7gZbEDKJrACn9qtXqG5sjXpgZu4Bfd3Y6xmP4pa4",
  "key15": "5GGGMPrDfgD4hvAfCMQDcBTAjrFPpdcSZGw9WDY2BRe5oJTKSbjrKJyMoUoHKbdVYLFwFqRcxibrXXGVwYBDKBUN",
  "key16": "2HK43r1HuW94u8XZ3rphgpjN6kzhwKo9RcmQKFFi9MDB36UkMPp5zsrtvViUP8uMvACJKZQWKiuh7CLeyL3hKh9a",
  "key17": "2hWG4f3Z9EjdWRjMEEMjEr5MimEEhYUbX5fm9FBFRSx3w3cSXQqCF3ZWZcjh4uvr2YLNp4fALCiSgEoqXpPfpPmi",
  "key18": "4pKmuMbKNXfak4z7DU3s5gU7GQfY7u2CdtakwFumuht4HNcwiSrw28MqVhmF2WrgiEJWpEdJ1nQwKHCz6ieAnT9W",
  "key19": "5bYyNvSagpp1Qdvc8DkaoBkGjkQtHzxdrBLEjtdiLF84v6R3ok5bgLjQP5cFpeRVG4cCoH9RBBGxSCpEV3wFNHwV",
  "key20": "5WE4SZgj4AA2R8pXSVH7oTevDpqYEfJxKtKt68BSj1e57pvKGvtbt73DNG8e16rZFbSMoyhCn2aS8BwUP4PNG5Hu",
  "key21": "67D2mZrm6UvwpxAw2SoppvZ5AEGXmE2otAM6qcPzrRnzoB7KNGY2KW73Kgb7wY9MCXpTzr3Q9ATgvicKUZLx2oqM",
  "key22": "3NAKVc8sT42esdebT8xSDM9pZTsD9qtjmYdoraFKKQhorfaS4VVrzW4Mmgid5vtNxsXypiYFFUbx6fbLyPJE2hA3",
  "key23": "2ydY76xNRK4EssCMPw4TAGYEDffy56YqBK7Gvg3Enz3GdBrdyTmLSw6rYkQ9k8LXHH6VDypgDuiJYbsuJKmqcwiG",
  "key24": "RvusvauxYPYvv3EAJ6sbtZCruTC8oyg6jkCdmxFNhbSaLyECEDevJVsRHY2ob1YN56BbC7FSDc85NWRwQTpe2xf",
  "key25": "5yrpfpwHd7SLBLvNcPitQuFsw76Vj3JGcNtr5HpQ4cUwAVCPQu4VQh8u2hhaw7TKQ1Kp6NR64xE19KkEZYvTfYzz",
  "key26": "2YdFXho2Nh77SgbcvnLo7AyLSn4pbvv1YHnhjFrMLj2hmAZUNhKhfr4yQwPUTRby6WKgtMKg3av7a3G5kxfDnHXX",
  "key27": "5LUDLY1VNxwNdh2fTcxMVbmkSMyxo3JkyJhqGzEjTtpVRuz9rsfiM1HBVxaKiqmuzJe24TWEhULQhJsQTfRHwW5g",
  "key28": "mwbnPUzaMvFcjuFB2ChicsKpfAEusVbAgLmY3Ci5mMnqojX65VA68ma6134S9xd8ToFn43ZgEmMiABdxSxE4sAp",
  "key29": "2yhBNkqt9nrvukaNMvz8G4rmykytQrEVrCtRHUuyfW7N8F3kqL5LvtiuU7NFbR1xo7RuZ6BqSGZbH5eJ6Z4tLG5G",
  "key30": "3J5RTB2tP6kw6pXuhGtQGmaHNP1WCWAd6yoXm5Uav95a3pjfGUYu6oEEcvFuFfPqjs94ijcjEk1mJCvFkfFxfRAm",
  "key31": "LzUqTwiZt8VJqBXXLCHFrkAhDiLU3V7dhw7YoqiewjNSbHArJ1zKEX4T66CrNCA1EQXw8jxNCgRJLzzqP8Sathr",
  "key32": "31qF2hs9VrJH7DUgVzVxR3FRhee4A5yaRrThGFk4BxJv22qoYWvsWzgkstxAMaecLmfarqWNnriZQ8QZs8gELFqk"
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
