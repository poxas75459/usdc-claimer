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
    "58YSHRvX3XrxgHsdxmXv4DzdyP14daWam3BbpEJvbBMc9ockNaVpsGkR2kPqPyG6aynrXZ71FqgpnkXYdqH6uaqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EuTNvMAKQzQT7Dtgioourtkn7VdkdG5ZcekrmCBJK655NSEU2eSmfF2AKVdAbAm3xUhPTnrZgYKhScSX797GVcZ",
  "key1": "2hqP3qqbH2LZdLTjnNo2t67zDjP8eh5as3ypLaDH9D5wNCz9R1EEZNZH85qsydN6nQ8dNuCwrXFUDM23F5G31Zm6",
  "key2": "JGMGmVjbxuSeMkDtwEgt8bpGiewcQmPZXnkxdB74gLZHgFxgqTr3HCgB5mvGW3TuQJafx7JwJZiHSmcQKVGNRh1",
  "key3": "4aCvXKYCjbKXG1ArfQRWceC4mtmNU6roWu8KcsHUogMAmV6yaAVnWSZeyq9sBBxQPBcw7Vv7CeRHhkBBnVXCaSRi",
  "key4": "3YHUHYzmSaFmc1mwTYZyvfb3kK3G5wdeTEghxKULcBBNzV6nDKsa3aTL1h3WvYTX4mZSWYkHz6e4guBzHh3T6YDB",
  "key5": "28fmgxMjU9wHYQWr8Xi1dAfpJNHu9pQfPg3vDhkTa7djCAwLh6W8rTpQNY5eEWMRDBkNmD2Co2z9kdb13RiQP688",
  "key6": "5ErYyW1hEJAUfauJhjDK4yVnRdTZkWLpdUb5JBMkSMP6DmPxhN7Q1XEQbFSS6hJ7QWeeLJQo6HpE99cyx2kpnTyZ",
  "key7": "3kfLRRT7TuxbD7PaXXiGdpcDpH9wjP7w4MSF3Ze6nvFf2KeSFZS4C8SDWUYDi7k6Bs4iDuXW1YoVHsvGQLHnaGBF",
  "key8": "73CXeuH9UhRfGw3FfnvbK7KnnVbQdEbNbLsBtTxLEwM59RTVVUbp8aHgdb7TzzMTNBfWukXWT6pQW4NhYDZ12rN",
  "key9": "44a5dMVAViyrVD5fXKDb8h8RvAk9KsRkch3gNYzYQMhLVmMHSLt7ojZ4KVWJwd1yQVt5GbZYmA7HvmF5kAtFfAUV",
  "key10": "SnuFU5t1cXHoL5CMeZNasPB25drnpjQxB6rXuydovUYVQHBjuu1E4xJtZXngYSvzDDyksDZBx2qtG5DY3yjgwn2",
  "key11": "27t8Bkkhs3H7fyetPjPLjtnKqNBRT9C9rSE23XNvboqs8PTupP7DJ2zdsQcEEiEYrxMrNLp4j41MbP9LwwPGMajq",
  "key12": "3c62rsy3QDdF7J75ZL197uCvD7E4iTj3oHLouqq9zmMu9P9T2LpGuVCHwhrxXpnNk6k9U8SWNqiKjFUBXE3hCPqX",
  "key13": "38WQyJMqSU3LQb1f97rbGTY3TaP5wi2EDmVsXJaPa7iP9b3gj8XGH2jGjcxMznumwX7Bvergv5Jw2zQYLzioC7zo",
  "key14": "2Rc9tKNDzsMSbAMLfGsJ2MkpwUpbPw3NrSDpKgxUZStJt2yxoqLSqeJeQkB5UYYjcRcxETfdpMWMFySVX77TU3Z8",
  "key15": "3WndUcsZQWtYchUJdPgh7VjQwBuStUWx6yLoBXGfqDjp8tVF9nqG4yXb1APCKQimjL7tERaxo2Kz5qRGNiSEZXcA",
  "key16": "3d7v4QSTPpqzj3oHREDvnzrBLJhJGQMv8Xq6ZmhmYpQAutbPn42a9T1Atc6FVy5Mk84SrhW94HEjnXnpvVNBG1gT",
  "key17": "2n2zAZe7qMztCnpWa2PaVmE6BBuBCwiCwR8tMLRsnkfhNTFaYPMi2kA97JwLQTbxM5Fuy1maJ6wDYYPwG3n7DDAb",
  "key18": "5AekaQghr19ytc5VFoo5NCbjX2APmF3b16FtGoUqN7BV7NmmEuYLeBGoNH6W6bY4o3i1cmjm8BepkSHi8qwK8pMk",
  "key19": "5T1w4E77pT7gx1tXgNkGS9pcn4meoggh3uzTsvwQKyKexn9oL9nw8yJ4y4fzaAT61ZnegrPBLokYeBmgtzgW2gHY",
  "key20": "5PtoVp4VQatkV2AwN2gyHLZrpFePdTkabmw8MoWmUpLDi7bJVQAzzCqifE31uzKrGiamSUcogi6YT3NgmSZ8SCAE",
  "key21": "uftiUmAJMFxFyyX1UjqmhdYcEwTpwJVyF6MJrV5qWmy8Y8nYJ553E6qDeyZHy4WQBAQh9kbYn7SbbR3SJV1GTa7",
  "key22": "2zaJt4dkMXre93dxzD9QQsdwyCiXrceuNMmhhKjazkpLCo7YxfBpMqEHVdXhSmEwSodA59B8465XinBYrNsNWoW5",
  "key23": "3Yf8N64A7FZMoXBzVh67h8MKBBqKrMeMkmxd9biNCTc9nGizA8i8uYH2B8CztjdBnGEFCMPnU7fhQ8s9ZqbFTc69",
  "key24": "5ed4YcgdK3yVDEHprc9FdLfhtk6eD1trcWQrd6pbZ3M5QNG4tGinUnFhYto6GQof1AangdRj1AhjK1MUg8FJbDsy",
  "key25": "5mBKtWNapj3iFMn4iGSBCm9MdbwyJBceZpK4AuVWHKcjLHtgqU6T9KHLJvDTeQWLs6U7WGNEJuG7HXWMVbdtogac",
  "key26": "3x6BAPJDswRH494Ch5o9A5kBeozVbv7Awa1yFCEMsF4f5wTUcFGaa3DUS1NQojcTDDjVNDXWwbSFPw8adVL7PfqY",
  "key27": "45TLzCc6b7aiBBCL3JwhHNDvuaVBHz5kq7GYqrKKVhJHPZbv6HogbpL5biYzSNPpXRUmsKHKy7nogjA2QGVT7kSJ",
  "key28": "1fDoXBJ5FNckrATKq3V9q34airrSEisXzScmTEKFYqhzK4FjD2sGuuzM8vfj76vcDyoEPKVgkSZtGd7z9szcqu3",
  "key29": "27pedsKuAtXzKR7Ecpvovj1q4B4P86ntNoXzDqw1nxGptYRhFx5MkQ7igQNDVUeziPKHfhU5nWiQBXRdbfMhUASY",
  "key30": "4QSGSEXd42PKSUJGVVu8d6R4n5Znbe5y6tCiYTCuJQ1VMPZ1uCvwrNpqkgS82F3kopnoovg6pLaA3Hm3t8sPk1t8",
  "key31": "3c7bbUGunkcEba4vR18PBkLJpaX5c8wrrp9pG5DRUsen3t4WWNUEf3vo5dEFrRM4R7WDG8dhDqY58J3mXhYX2fu1",
  "key32": "5g3mtTAJLUZ2LJoU1kzQ6CHhabJEVvv8xmEuVSjx17hGqQVPYwPdxs32UEHbPTxivPq28x5zsh1zLUTsz3PHCaUr",
  "key33": "4kS4ETCpDMrQmBZic59mAd1v7VeYhCRxyDvZVvWuS9z4hgVVKLgXjhjNspGPh83buapEyXnrthteTKqGU372QHMM",
  "key34": "2FJVP9NGQFCaYXDvnVeLT53N5jNvLrpYJTQpWQaUEfPoULAMpoujBw3wbeCswPqzeu8WFmBaqh7QZQhfx1wVTX2x",
  "key35": "5XCHoqZpZeJcZQAJ2Hsn386EBmEPNrGdxc9szdePTAkX3QJz7qRS4sVdHkH5nzXhbA6RhuH7fkWCLWfp5bVFQYR8",
  "key36": "36jpg1xi6HK1dTyPFNxvF56RBeC5fMfnV5haaLnCgAt61YGfwxqsNqZw1ij5em5zU1PGX56jWenLu7Yzi59Tj2eE",
  "key37": "2Qorme8kBWnVPisQzcNnUPYDe1Ddh6cntDp8VTYXtqLWLg5yregBzJ4Yyg3mZeKuSmfFYaYzxuiuioxW8eCpxfFN"
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
