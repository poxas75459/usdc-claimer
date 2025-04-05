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
    "4BNdHBJoK1aZvs3biTZpdnjUpy688iNtYKTo9RbuBmsKshQPxJ8Tqb3jgtcJafs3qsfLQKQ4wUK9BoHLRKJCdzcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jj8Y1E3Htpi2WaYNk17Lv9QShpz6jt6fSsicN1nAwbykNSSuCbo2AC1GDT9F62ka9xDbwDgtcW7rZ9a8mFihLnT",
  "key1": "2eCqiAQPhZjAjAdbtwFiarsoRsdV8YqBtMnjz21k37EXNuMMrVLpRfi5Lmet3rDxt6ThYjaJ1kq1VD4dxnv1by1e",
  "key2": "5Z6Up9F4thXWdUhAxHqbzcnxFkoPQMKveLsoksv8NRehkGV5qHdVKwfmvWxStFbjqTKxSv8Y1Anj2kKeZWXsUuXF",
  "key3": "5ziB8xoLx8nUY1afxRMShi6gurd51Tt5JCGVqBdvszW4cUsd3499DSARWcMyutqmj1vKijGUMbj5Kofcw5SukkX9",
  "key4": "4cK8X93TJhhzJXcMs4ZP5iLaKGEefyKuXmzd3mS11Nh5ra91byHwocQ5FymGSDjtTDhNH4CwY7wzSxU73GQqnKX8",
  "key5": "2xxuFnFu5rVYEmJ3YZ7n4AC1j3xsKov9oKKLHkgsWN8SkuJRtjAuoSwW8eLXUceiuxaPZty9gxS7Uumuqrgy4NTr",
  "key6": "4Gs5Gq23MGz6wqZ1xUAj29bQxUuvRV8SvDgL5wp8QMQNQSXrRdjppV6UgHqmfjrYYuhxidt2hF8ynVRnje5a8nVf",
  "key7": "3iKMhH1tr2nKTGbekuo7B2p9PzCuYZiCMB2FRv4c1tS1kVYMqRZfbpzgiPYWjxYyvud7kTWToEHdm6sCVPC4nUJZ",
  "key8": "4z6yGKS1xKJ36ocWae4dFuUGAVGsYmHUzDHmuip2aAZNAS2suCxoC3eJnunryZswV8iKZ321wUtT9hNKRJq7V9yz",
  "key9": "4V7cGtDEZTXs9TMyiBJYXPN6YPNp4ysCRj4ZPMogPbdHivDKXKJtyKXZUb97qekbfquRyoHgZ1S4k6nCWSVa1EUb",
  "key10": "naQMcJv3YwzAV3DNerPGm3iUWBWunceMXrc55BFhsCp1GJPstYDvVhvx9DrkTakqoiTqxgPkAdJX6KcnsyFQmJ5",
  "key11": "2ykYgwoMcQGtC7hG4T4jBfEoMvtg2bnGsdK8e28M5QCgC9HuRx8uP4VQCjfABBabfoWqjUe2jp1QpAHNWfLrhYPB",
  "key12": "31cNrowpYZoA9zHAogToWLhZpNeSDf1DRFgLF9ttoQXhDL7KEPkjoNaLRKVeVwjyG5bnG5BPm3pUkQBRYCriLQcg",
  "key13": "3RaSVn14NqX6nEH5NPaiLB1uKZAt6x6LHXJrZXkxAuMz9nU9dwpkgTjt5dQ1Wj7CtwDR9RBDGyzz6s2FWz34nSwP",
  "key14": "2T1wojo8HZZ4yyhy9fTYc6voKqPFh4v7XeyuVtnKTX4gRiKuh4EUD9LTogArMm7LqaqkZp2PxBRMokXrejmzWBad",
  "key15": "WShynCXgz7n6JXSzdFjRi5WwMsaV6EYWe175WW6paNrfn9j4PHFy8gYaHERM1rdCbMJK8HgvF4H8M76KffPozoP",
  "key16": "wZ3VDMmKeGmgR3njQiTdBo3Nc8QudX9n9h6rpEHKBUFY7pHvLr6k1tbF2wVn51s9kwPupE6baFF6HzBAGZxoEqt",
  "key17": "pGdkG4tB3J9tDDxENRptW1LmtuUDaDEbJ15Be8Lwo7CqAwzcu4EPNKdXM9SwJpTUnwY3CqwPyRwW9ZRCCMY63qf",
  "key18": "NTa62tW9DVTE1Mei9oN5H92egfV8BPpyVadTYa1T8LWtnDGkJn7AU8BbSrQgsn447JPFYyC3xAJRboU8FQWwuAt",
  "key19": "3XktGBLpWywCtMFkTy7kP5W27HeA5WbvTPg54s1s4iRGk9sTDWYGSp8a2qCBUWA6pEgfV1ntA53pG7GED9ikQX2e",
  "key20": "41emDPevX6ptPCSoFW5d58NNE3fcEeAxHiciVN8fLkgi35BRsPLgvz36m9rAXfQkgrnEsY2iQ5mGPs81BKZWQKa1",
  "key21": "5TGZ6gLLscmYsSerHwLYBRn7S3jrBdUuCyxBJeL8xN3AWu6d1rV6vbysx1LxiJnQD2hHgTvsm7mo5uy3YdLaiLhN",
  "key22": "5XP1R2eAaoPbxxCUoVsrqYqxWRMBvm6Zco6uQKXgSypUaWdeFknPv5jcitidhoDMcLeeYZiWPLXvxsRrS3SifiVK",
  "key23": "3ctvpuu5vf5pd9iZxEdGtjkKSa5Jj2vTgbqowfip1WYBHg1TjdYF6FU2eA3jSiKAjSe3Bxmfwhfx4BM1jeUAqE68",
  "key24": "5oKEuMQis8rryaZWGSUUAguBSZCWvaqEFHXX44eo2ZvW8WbWpAZpkTdebkHKPHte88bEfaD9unusq2e9jGRstU5i",
  "key25": "43bfXR6Sssf25ymL8neXxehnxDxubuYQrwiAZ7J8swFbRqxDb3AXiBFtkYywzxvn9UaMVp2xuY2SqvfjdSD2JLr4",
  "key26": "2a9y4ndVwQW9zyJv3JX6yPoYBd7XMNRr81SGovKoGUY1yhuuAPXLLDypvfAxbgYyeJErzJY41kfdnreisL6n1eEr",
  "key27": "3AoiyrVXb3tTE5PjP5ocwsyJLmDaPwxGmc7qy7WvMAEfXo8wJ7aPs7GigxRs9YY9o9Ftt1RTHbqszNmRrVxgD6t1",
  "key28": "5PJmNpLGEjzje9jq6UpgYTVFQMLCQYVfbUjGNauj7c9GkmgXEkSuueiuQwBQ32AYA5GtDX6prnLWLjJgthijsNgS",
  "key29": "5yfcscQ5fpcyzKxat8DSZ3btQq5FTxudnEfJwh8feKpxUKxV7L8cHYrYnWzSQXXqMPmkydEPDNKR5DeGxrcyk1w9",
  "key30": "5nKgcbCbWB827YRuSMu32Mnc5mLb6rGkRV77H6f6hwTfFyWVYnFQUSjL8P44ZirsLfTgvAKUNfGivYXth5d8XJcw",
  "key31": "3oC6PYBJ3CUYs3aEQdC9amTRrjjg6D482frrAhQudgHBkoJYUzWqPjhPoreZzxMkAJohy4MyfGLFEyrVzmgDMSob",
  "key32": "5hXw4kChKiqNLFU6avLDAGqzACn4b2xTvNZB5iPaTV5dX3YabdGiZ5j7Zo2NhqSgQhHQrbTAm3WrmW9Ew6VTzKJv",
  "key33": "5yskhvBsnFYCNi4Qt9mbTJsyQ7shu5LXDGE7TH1itfoEXLwmhSScEYdeY88yGqBgLYMpE8buBj2iTRDgHT1QfpQE",
  "key34": "d1YTvobRm7ziC9hdeefWcmcyncGzb3tpaRy12MBwX5duujWEaG656EP6pyoArmTuDWyZjk1fmrvBg9vk2zAC6Z2",
  "key35": "2gwxny8VjMH7ZjWUSDsL8xQeJ2Aga8zCEHsBRUnhjj4ibmXsphebfcbDzKMtGyyWnnrRC2c5mpzVHuA5v58mzbgN",
  "key36": "3XiiR4X5VH5B3VxJZQYUffUojSUawuSbE2TcmTcTj9WQGcBEuvLfBgdixNSiMTxsYV7PKCVrjZJ1e6qBEPh79hgp",
  "key37": "2PkmuwFpDTWGMZM9mLSCZEbUzBLFVQztH7JYGnUMuhdH1qjaKfXKiYM3dj7MFgepixxJdnuXUQRDsXRRY11jQJUf",
  "key38": "5YUcrF3m2LBZG9U6AgZS74z5dHZMrFsEuYVUmVqdGRG1TJDPJFAbhLtAkVMZAdF3P1C4Jehv2vcbTPLBNLyJgZGH",
  "key39": "4X8HGsPtNtWwExKrLcjwHYVSoQaSvy1X3UTfipJYCs6RV6ZPvr7U53NwWNSuGBHktJS22zB3fFKTyDZvB7gmUjZs",
  "key40": "BUPtNzv9imPMre7HoJJHNxYyACajDuF2mC7U5YUs7PFEdF8SUuf8G6nfcU5Vktf28zPMVHsqLifv1ix3h9UarTb",
  "key41": "vqDLCAZsXiejEiBWsD5acXQkNci4mYj1BasNemC2sMpFPynrVPDiLCKbUxLUbUmHRoARmKPaGY3pjKwttf18WeK",
  "key42": "2aXYiWWyT8K22bVP9gCdS1G4zdeXdc988Vte8KLVknb255KoBzdBkdMckc4JwRbaSm4SN3Q2t1WbPargeiXZsAZt",
  "key43": "5Ct2rSChwgWx24BhEDCq5XXawoMwKQk5ZtF4qtm1GigFZFySjCywkRexxyKsTWVug3dxk27RBGXgZYTzUXaZrJhT",
  "key44": "Msk68QGDa6aKLJniM2xQZJzAw4jhWERFpsJXo3hn21aQHq6hEVk7PA1U3iomUb8JPNj18z227p2e49XKHtkiKce",
  "key45": "2WaTJHGQyrZeGbgiq4URXJ5VjBC5E7aBjYrsvP8akLpZgha8HesFjGZQxXJWFa6qqFnZyoz8KqkKwZ87ZY5CzYJQ",
  "key46": "5gBnYHATcZQEfZdFv3BA6R1Pi71sxXJXsKTitNgWxG2cWLqMBFs5kqrR1PuRjUZCW5YaGPxWzCHEdcfsKaPfdUb1",
  "key47": "2uivKYJeL5UXhNiDMrvfR52p7VWmibYL2cWhk1XZeKcRQtfwMf8sEKB3aApWgKCHm7aaXBqNJMjNimQRoA52STL3"
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
