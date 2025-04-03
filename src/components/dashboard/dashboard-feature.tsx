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
    "2rpiTgJT8maSGLYWSzzPj6ne8Fwqm6AY8LgbE3YsufZHkdHSzWYYurwTzSXGfe5ndTdZEaz6xLSGMrfUSC1oQEUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jKuRmpwMTo69RVZ5rJvUAJe82r7GGKBTN9HgbR1YrLePbc5yjrdDatsccex1LqF7n18mAK3AZx1Vyy1YNGr63rR",
  "key1": "4Zz4HX4EQ7YMDdcg5zMzXmQetupFYrQQcP9FY3LkKk7GhUmjpXfewfJaowoiA5XG4BLw4b4Az6Ux4ypXGCyxFJuh",
  "key2": "5j2rtuyHDUPz4qe16UZUbgTQwMXeYRdPLWZQdLNV8tYEJ8LRzNFssKjTt2faFDSVNkPPE1uUPeMgKjNJSzBRtEwH",
  "key3": "2gkgWnCGfiX8KS5YBkPA32ALeh2LToPc1yGTqusukaQv2rYWXJ39WqTm87WoCJheV1xjdZqoQrcdYLatLER98XLZ",
  "key4": "5QRi9XPJDYCuCfncPsqnVwUPgb9hCrPKSt9MzGK8cEf5ePTczSboVMyZnGmhfarVu4Y2rnugib7Cz36w6J6dS4ZY",
  "key5": "fgzRJ4uQ2MesP3gbpCnd4d1yqfYMhSWad2kmVwMNiB6Lh4mGjkZdSySr66BKEkzRfttR9w8z2Q1JtsAnkhnqGP9",
  "key6": "3idCS4BzmrBoGNYFKjVwXvL4Npjkvi3nZw1wwtGd71e5WuSEk8jS6w397sNExaY3os7FJfDviGu9189CPKXtR46r",
  "key7": "3KGKU8EiX1ZMiGqCBnCRfH3txNMRdgC79yznJTzzhGPaopU3ccbPeRpHaoNwJtNb5VnUowA5iPjRQ5oW7sECBkWc",
  "key8": "3hE4V4gkx8N3WAdHhzdxBNTjZmwkBLJoY2nwJvChFx3UQJpWpyeQuNayD7WuMXGF3vtYd6HjzDBGB6SjeXRGwpFH",
  "key9": "JWf1uL3j9QoMvZytGzqMj6KUuMKGpZEwvVnUycUxNi1SXwhDKzXqQtkDjEYtcqizZnoe4B6wMd62igmMBWEyqmw",
  "key10": "3FUaRUMfgDxLkUmgmsHAWgWvL4YYrNPm6HMW37H5kjXN7RLsa8iaSeAefF9CwwQuxPew2MRVoFn8rxUSZWxiZwdj",
  "key11": "6JnvT87uXYRTaNcoULUNfWbJqeWEoo6iwDV53cbXFyyzZqbhSg9ZbuKHCWKWgucMBhmYt2cnwhuuxpoJfQReyWv",
  "key12": "4zxKb6NTvhwjMTZKaFCXHT1rmz2YCe8C8jSXaej31t372SP37tw1BAhtiJxwjRif42pcnEgwCk3BaCdS5y9DyAZj",
  "key13": "3TzmHS1kGkR6WKUvNsKvyU5bxo6dAdVX76GeDdPb1VfT8Dj6fTGfFaGAUEq9ZCd8RBVzPTS1jLuUq2SKZP33d7j4",
  "key14": "46QU12tUM4stz8wtKDhUCPMwGsQLyjKS8AkFX5in6CkU86JeVKV4Y9XFCHpJcmfXy74koYsvSG1qYPEDZKmCFLuW",
  "key15": "3TchTq61z6QzJ44tUjkRHCSh3sHyhab7PRAnHEmyiPd6jfubUNyBYTZ5G6pTA5VhzH2ywCp3UcBRj9gncjriKk2K",
  "key16": "5bUhQEbowJkznNHMTY4DxuwumPmvj3QzqcQYvh5ZiCR2zQLFbv9EaYRJN5J5YAU1X9oNavbJrxGK7fDGPSkk9o9H",
  "key17": "2STbDGpSSHiBZr4vnHPRmEr8GYGHzguGZxDFPnuLDNTxvzCMLPfF4qUKQFeVAkznjUCkv6nE8hzc8KGcM3bxG1j1",
  "key18": "4EpEB8eQcaGy4ZvmCRxFDqpA2hFBzjG9hxd4eukh9c54q4HuHD435v5gVn5WwRioeURYvTqghCcDdn3ku6y9GSXN",
  "key19": "3yNAbm1So28TuQMh5aHvjcaVnShcHPWrpsnUmWAVeUE2FDgtL7TdavdyvQraw1WjkSKasHiKfi3hBTFmCb3yENNS",
  "key20": "5fPhhbsTR3zwELpMSPA87YVeBpDPR9gge6MXGgrnRHfjFrkV4t6WAq5pqitgKf6c6ZD342Jb8crwwsZKCcNS3iiK",
  "key21": "4jJRLArk65Hg6MuLquzVzR2ucuh527LzQc6DUzKHLY7kdUu2PyYhpKri3xgizGWZZvoaoq6JAveB8vsNKikahBYK",
  "key22": "51oZsfiJoV4rrEt1D8M4kwW4JcaTwfWmdiFGH1vwaBDM4mUuGkc75a9iuuZF54EnWv7xYJjCUqpRtKJTQgTeEFEZ",
  "key23": "3sagk5aj7kgmuUDJfL9mGDD4zT6KqxpF3kFSkJj8rHGge5cDJkrA9iFUmysRVJ2ThnvvogbrLbxT8bCreGEj4NJo",
  "key24": "sc2BCJbpsm9V49s44EU1muGoyidNfQzcJPswyU7JaaoZuUKVCSUz6i6cC6nTRXA8BXNS7ue5prpWFEPrewpH5J9",
  "key25": "Xw8g8GgVH9CezeoSKXBPLSyQxnHdPCkVN4kmxNc3fYJroHuPyFUj6Xiiqbxr3o59aLPFNSLZPAiYHczLm4zoJFA",
  "key26": "gBtZRp4Wqnpw8L16wRYoRrBtAVEDLMu2ejbmAnX4x5pitWvXqhBxJsnJvUDwRjjwWCr3ikHkHVJASJe2K9Y2Rsn",
  "key27": "3K9K2X4z5Na3aaNPhkncxFiKEJyp98Rjy1pYgY962Wewnyrqwq1n8ABtKMiUHPnpWF5q1SbMqRA8vE8etobhuACq",
  "key28": "4hKA4Hi6FHVKAhjuXZDmsryxyWAnRpDDUnPPQW3vEHZjMga4jbpjcdZLjNCivjRY4eN7cLXNKzpNtFAMg1gScgsU",
  "key29": "5FqS1VYbTTLdGVfPLQm6SkZiq1v5VU3bWBFsxtLW3BxFw99jjVzdikoSvZT29iYMrZDRwPSjGPrZHZPXNwEHu5sG",
  "key30": "3A6c9qNfYUAgHSyt1q72gWLgFdec6F2d4fzReWraSFM9idtMz3mSSGt4PQLuqfY1tYRXGhxNkarUgs4mjXxVNr5t",
  "key31": "41pUNMYgmu8SbbonZp1BMQwVnHFZiamNsPTwfc2vi1gxV9r7yVukgZe1LAbpZidHg7NVUmJhqV8482NFSKTAhxj1"
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
