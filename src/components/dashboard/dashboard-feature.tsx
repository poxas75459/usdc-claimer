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
    "3EkvCLJvMEQ38ZHLSxnFD6GxtCGiMjhkDid1wXpBYMJtDWP1SGERZkjFW5fvmWhh4DEtjRj1xehHUUKT8CqrEhKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vU1GEZkG2z6W335pWpqVo7Bdxt3nY5knzjAEtW3XNYVAJuvDenkoFTfx4AWnEzRtx6AtjABP4pobMHY5ntb6h8M",
  "key1": "5D4GSjXjdCitWD9PXAbh7DvWAhDyLE1iL4zx2YEVtsXS8EKfEPjFg6ChtHQ8tqkGa2DfNzpYFZPjxBtsJvaSmt4F",
  "key2": "5Qj9bqJ5qSKzbPLKYDhVGcnxwvVv1iXM6pZBkEigzfGkFGmJ6fgwJrSMdj5izxCBgGzZr6Hk9HiR2qaBp6MAVjYB",
  "key3": "34LqfvnhBiYQJPAAT5b1GRzmpzQrVc9ErdSGtfAsex5phaicP8FCBKiTThAcekxFARWxZWZwWynKup9SqbaHawdn",
  "key4": "2BhZ8qMvqJMrcMCd4j3zSycmobXkCRDtYf8Re8TjLbcVqUF8eUHtn33kFMVPnLDbLgXgtCqE67LUXwcRx3hTC4G",
  "key5": "2Lm1hwrTS17Mftr6hmr6DnRFFJmA8EmGMytrtNWyrcPMafXeaXm61HZUa3RWdfP6VCbERdw4u1k5zkmQ3xjGYVyA",
  "key6": "2qTN1DtkMgz6cPihT1q37KFcxuFqtVaeKaT9vDcCqQMSDwFEeWhofzcVCRMEzVNL3YsYbwytfPgS5Dw3cygT9Gzc",
  "key7": "549XYMC7UjgQhsrZtfzUza9vo7AWdHZVgdhqsWfow1UzrhPJuAkyJxphLQJeqvzrj6XFh2GJsHFhxzbAPdCEqnxG",
  "key8": "2Up8yH4wuyRK2E818zkrb1ega42EJQF87hT6Y9RhQ1XkYxUmcbHQh2oUUu1xJPYSQ9Gy6RGgcRSBQfBh3KK5xZTC",
  "key9": "nVDUinpMUszG57sHVKoxsMkKTzP5iizoe8wbMx5pGmLJNJYjBZzxJjujuw6JctuDtg677UEW3F7sEkE4yXVEPdr",
  "key10": "35shVgf7Xf5R2KMm3ctS1HBydnaYMUTKCuVvcioNyfqAvKQgN8ZKmdn6FpxGE5aXrmc8qDQKPSaLE3e4fgsvcREB",
  "key11": "5AN9dwnspP5joFjgSGW4UuMGkT19jWWX8CwGcUzvQ1ZRXcNDLjJidWfdgewBTfFkQsDys55sfSQFHZdbFRo5EaiB",
  "key12": "5ztpqk9YrRiZzU6VaxcBxm4k6ZfWXEi74h73eZA3jyGdF8eSwCmtSQnGzfUnxd6Qj7RVXMcFKbR22NFxdvobfbvp",
  "key13": "2usrKvg4T7WEPwn5kQ3wtvoSgUkTv4pFALeYQsnpGAeUU5D7cRonf8rrBisueJc1WdpmcoD9SwLUBa6EdeUQyfcr",
  "key14": "5TVxtmjnQpFpMYp3JgEbYUVb14RxWi7PcMcuVVhE2DsDh7uqQrskb9YRH9hditEyuc6bxcx575bEgZSMD2bo3a7h",
  "key15": "2RhrqLy7A25RYqL5scrDQM4eyWBtVJuT4yytLGXhtycHS8j2FLZyHL5tTrmzSoh9HjLvNaSxz3w3ehR5YEXNsLFH",
  "key16": "5Vcq5tbqiWwYXLx1DJcfCkDArNMWgb7bAw1N32ci8QCMjNq8kUhATFJ7zamr4nZPukE4cb916udrWgcNh6VvfpsW",
  "key17": "3bdiy6WiDHZufb7BTvyGoTy1NVQCDUsfZcNivS67hiKSjS1eVPJs3nQQvevNd8zVwdnCB5Z4V9gCcirbNTJgmfXB",
  "key18": "3kw41jqJQP8iB4XCzZDVbQk87XVRH71bY8GCUz4ALTLkm2tugH6pva1smJqkYYNGkA3BNPmJhDGbLnxRj6kgLkja",
  "key19": "4NWGb6WjMDqBohMAPY6GV2PpvzEM6TZoXWugrTq5zYwczo1myvbBQntTaKFGfP6gJp8mpvovXt9VJRmtisjDUhTi",
  "key20": "4KvLCUy8RGAyMo4eUxRzWexjU2DpNjMfcGwgyZ8pBZGMMuVteFLiNSF65nciHjCkHCrcHmtKjwShpopPuu4WkM5r",
  "key21": "51gZtsTQ4ePELVdeEKk3DWMzS91vPaPWpmypSW1XP25AGgMwsy4AcxVcY5dJMazA9Qk2C2TqwbV3D2zvax3D1g2J",
  "key22": "vPEHrQbvrEeTysN8wLdDaz73EcnxdWkfCzBXsVzyx69UqvKszhvmzqHsVAXjm9pSxHbM7gPyVw4L74p88dZbF7j",
  "key23": "5QBXCSu6msvdEDLZxfLbb26cvduCtSNpAyGexGFg7SFXK5p11PLEVTGxqb3zhLFgzfLyT1CLdczb9JK1fgpRNmgN",
  "key24": "6MC9aEY9waSzHMsP7EFDLC6GoRyyRXiHnSm3cZogjkWvcfNZaQq4Cbrb7FPJaXMRPtuEZ1triuXL9ExmGUbpdG2",
  "key25": "5fdUjKcYcnyShTSAucH9XKANqzmoJccF6EFkHJgPLvFhPkt9sGFywLquNnozUJAvAG41VnYNRDBi8ELEWnJjYVBL",
  "key26": "32nqpKXxDFm4CxhjKJxFGKvD6sCTqoce4sujpUvF11rgFPVY3kE57Ut1tn3PGu9YMEZZ8rQYRLco3iSf1nYkjuM3",
  "key27": "sAAu7EdHuweyw86gx2MoPbGTr5AW7SHz5yjbjghaHKzuT7NTBDa5d9BSLtCAUddt7BjkpE2hitEWoBcGCz7BnL4",
  "key28": "F5wor1b7V61eHqf7das4BMb7XkQpJGKFkcCydVCfdSsfJRQttFjHzTyrzbKpCFYqAtC9WhEZdBark3fed2cpqYq",
  "key29": "G9XwfUEYGs3DCRbhaAsb1FuJQHxwx9NSKHUGkpAipKTjVRKJgLCtApL5hPoZ8ekr4AbXWxrogGjecKtBsgJWo6S",
  "key30": "y4vQVKUtYkjceZUtCugM2vRLA9tuUKuau7A8Ds5Cumq3WxL53SYxCtMSGJXLXPBb7azbZKwyXRMUfMsN7MVub8r",
  "key31": "52yEdXfqpZEthisqhDXsdeTbYiMU4jzrpUmZ43BaiYMqgx87VPD3uER8aodyMAfyUsUXu8r6UZqGqyHxryte9s5S",
  "key32": "LpwEWG8PaMCD4ffxMqaN21ucdnSPZtxaKHxwZ2fkjCVX2QKGcMBAv6MCcjUtBHa2SAPRXd4wK3NxfwA1qRQGfeS",
  "key33": "4pfpFjzqukSUjWmpjL6r7Rhw3gqWUTJiJGRFpfAFAJvpcp2xR9dWUATh2zE4qLiN65QypsKjxGLvoEJHouDY8u5t",
  "key34": "2F28k33affotLc27jcGnofmAueVWkENN4bs8WwkJc234nEfHrP2w8nXVJgbHfgQeg6zbjQkpo1DAFhMUgaESrGb3",
  "key35": "2UHbYT9rktVpQLgzQP2FLs1ks3KoZkwcxSAskus8brqZz91PdrwpWUZY6XFRrozjEgbLz535xDPiYyxtSaj7QxTb",
  "key36": "5i1pkhaf4P1En676VHVd5E8UVe57JxMn11TEGvgra2fEXe1YMts1CW6sazi3j24nmvHWFdKfVczDm7hzPuRYZWnG",
  "key37": "5Z3wjycnLpSZQ957SZkPPA4SDazxnrc31KHw9yjdsLfWfW9TXVRMyrDfBubByxvnZiDXjPz4uJtqesqqxQwrdQP2",
  "key38": "2CZJrtzyVQYKoQLKpuX7ufJrC6jCwqPT47hUHG1mh4RboQXa2n26nkpJBs7rkLQyvHHL6ZTqn5wPBQ5uTdbDnffB",
  "key39": "f5G6xYSY2wvtk4ymVgttLyHwhULGMzQAxykkZSfZTenzyPV4fP1htDhbn4nXWQLhMiNfnriVP3Eyx74NvZe6jf8",
  "key40": "57aZsHHuR37hvq3apuJxc7QUNDiHwdXkU66cBduziF9Fzt6BiKNz6avNpL3LuHLQFv9QkxrBhhhnUSauLRtuqCgy",
  "key41": "4RTqK9q5rgjKtj2GNkVZuDs1piWVysP7gBUB6G3cWQdrBpoD6MEPHv26QrxhS3M1FhU7dvnyz3JNZv2Nm4oUf3hW",
  "key42": "aP9XbXQ6HQNhbmcjDpddXjjGuqzipMn6u5z88jaMrqtaZH5GRLCn1gfcABCfnSBYDK1vfWQAgyrNrKYpxi7mLSn",
  "key43": "4WqyRcu9iUVYC7iyG5anevieZmGCLx3dw59cCZ3CTKsqAZYjxFsQSjfrPrsWBnD5CfR7mkEeSvkYLz48TczUpN52",
  "key44": "3RebzKCdxjQ2ZinpTpfm8TugGWLxLBpPsfGoh8tG3P9nMv6sBizUES4mZBPC19eWi83uhsDHMghpqfEzPm9NkZSu",
  "key45": "4UKJERJL5mNymuxsW2sLRiYfUfBQ5D5xtujWNT7E9QHNqozhvVYeNeRdSP3MHzdFtXBkKniFX5EqX5r6d7d5M5Ny"
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
