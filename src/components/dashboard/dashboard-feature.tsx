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
    "5zfQwjeAHyY6L7S37pdM3rETwJQpcrGQ48wcyAMuSCUwkgsqHojeQYQcETYDajSEeR7gdNdQkiGHCEEYqVRSxqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LhEKc6ZcRXsucxeo9J6spZG1meHTZpeSXavmNUmtEjZ2qiAYcTvrjvLGqsrXGjazu1NnHHPzv1ehQkX1FvTSRxj",
  "key1": "3G4gHVHJVCQZ7WgAaqc18nKDQKyFdGqkVMfFUn93AfteUxz6o6tXSDwk3McagYo5ED6zbDyTzJBzB5xPqA1RC8uC",
  "key2": "5Uioi6m6kU9VKvid3LPuZVZCsfGrKqV4FwRMELakW6JHVC6KWuRXXknFcUBbhMse3puXwwJAATMB16svkWuWZRAM",
  "key3": "3vDVrkTkV8BR3EvkwtxyYpGBYXmEMFkq8LoVwmBk1bQmRMPu9UGiEfaeKFQb26qw26TpK3ewiL7aoRYcEVBSJyMz",
  "key4": "xdKGeGL4RsCnvvp5HPBe4yEvuhrvHdeB6ewevHByZcnTRNMkrMVFVskzCummx5DZfzXWif2ecVfKFGyze5f7ETa",
  "key5": "4tmW8gGnuSGLpdUE5PqZZNHuJxwsGqTMBEHm4DU7MbqNQ5gFtMiG69r1JR7EvdZSWZYs1hbE9RJbtzutcC9hBbQ2",
  "key6": "2sciU4AgCxbryvPoaDQpF3ZTLByaf1UXEVkZEzbM4go4ViYBy7MvR3qoP8bkSnfCKpowaKFgcEDvTDc84QJ7bKSb",
  "key7": "2KRdjsoSbW4MLdo42UtPsd9uewddxUQ61fV2ZhxhvQn966cB1KMUCk377L8FvojoGRGPbbxi9kZk4dwzBppx8owb",
  "key8": "5tCKkZ4vVpKTYJ5xxqKeQFp84NuaT35ka2wboRmhNoq3sFvKL5Z4FCSx5ZYQ3jGEuUXRgE9jWMqfi6gyjkqELDeK",
  "key9": "B4cURvc6cgyV69Cs9TTABPXgduxpwJjy46jSmL8tc6TufipQz1Vbrfp1iZ1KxzpjMUPLFtGW4JyETKsTVRD1k6F",
  "key10": "3xHgq4nWoXpJ1MosSZsBG9dRc12TCqZZcPekSusNTDPbj9ZL4c7yfeHW66qaQ6dG5eRVhxajuyCHpc7ziQLA54zV",
  "key11": "59xx9yoBxiafW1NRVyjXFtDkGXiDDPhPHdsinDvjGxhDzn6UAXevCfdpZTnpycZZgTeuxHETYNzUFkMD9oSmnt6N",
  "key12": "4NzNjuS8EK7fdc4RFnZMcX2VxxFkLCXihE4W3mgkg8pVhG1hEYcNLDE9cH5JK3qva85msAGuKFhgDUxvAyNCnatV",
  "key13": "55wi8LHdG9D59CKbpqgy6spGCobG1aakDVfKqnTS8HfGu1EhnQLjTTJ6gjZSr4Vy2bea9ZrNkfWZLxbFokAaKJQ4",
  "key14": "edMpJWHYCvWT29Bqq5A4RNE4jr54qZcsKWJHeCFsRiN655XnT7S73YD3G8vktSn3xMPPU7w7WeYS3mrTzeVDUju",
  "key15": "eWE7xAmgGQq9xQKMXZq6ZAPA84ofwtvjZGPWbj9QtYXcPCsSxCiwkJ9Y4pvbZpM8pe74G8SDJXu9tyzhMwf1tUz",
  "key16": "HWiR3LwbRUyGnoVep8TW5axM8EM64ya2HwZgAjZBgxBU5PqadFoH8Q1AQDxA8UPLycb4JmtDnKFxrBky7GD3D6F",
  "key17": "2Gk88FTXBqYgMFRXTh2Bv3c4UgyvQU5sL7vq2Fjt8fos5dcxVHZdYQT62BwhmxYBZFSkNCBJWFbggbBX15g5GWug",
  "key18": "Z6Tv8HxnhbnpbEhXHs1cqdcJ8NxncBKNFA3BFXW6xzG1sh1Jdi6TJ9CFkGopTENQAkcJcfCa2nicjcFKfD4GRvm",
  "key19": "3nVy2eQvC9QVamjkzusNorwWGnBowaZBBa4avtTsucRkARQa3bsHqAUW7LLn3M7kRP6on98YKHKhLUFUAXm98ebJ",
  "key20": "3q77zdKbogQpat2KGUTp9iC6zA6s6BUT1AjLzuuSx2xwF7jxsMifwVABGmRE5SUUCWswWnREWLFP2XQZy7dZpk83",
  "key21": "soaNZvtWALBXye3gqtm1oagEvQcT2eGvhZWemhtLNLqSvNVjKYvqqu4EDaR3iCCQtzYmuBn7giPeN9eQmjNSZbL",
  "key22": "4iqwAbwZkwooGw2NcMBsRZ9XK21o3jYwweKffmdyQCfLu7VjpuxAYM5yecXqrwCFRqHfzajw8JJ8LYNYZkn335jt",
  "key23": "5af9UQxgkg5tsBSkLFPzztyr1vvN9C86czKALUTqPHDsKMJKsAC2LHD4TqNtQy2XXKqSqLmqiKc1z8AFc6heKnSC",
  "key24": "3SZuGqMVB4FkVFcvcBB1qh128BqDkuZnXsvfK7Pppofgx8XBuAka8ocdJ5fLowyd4chbYzNqedNosCnRh4QdcbLH",
  "key25": "42SZvJ6jrGxxpezF3m814W9zUMWrqRK3fkbmdZ56iQuNhsdtNNqKd6sjUZvXfn4WUPJLxoWT2VVJEmXNxJ2is2yi",
  "key26": "5HSdEDqB8SYa9pPeJyFd5VpYXKaMrnJEPKwEBEixG37YJiUF71BrYLFN1DmzTsrJdjDt3cAZ7HSUrnjZBwa8yw4c",
  "key27": "4oB1ifCovvMZLEGyB2hYbpQ9dJ8wwzHURKYVJdTbZVLmsEMVo2KtPNcn1VfRotjqzt6pgjJMxB6stqqZqsTSDQuo",
  "key28": "4d8gxqUHpXuUbDKmhtMUDPWd54X6ZARL4qrQTNUuYJvPXkRmE6MqqxeHrnP2pkkLUnkMJitfwWxyUc73d5JoV2qg",
  "key29": "3s1N9L5oP3PTPESZM7b6PCiKMBsKJsNn6nLKjT22wCpWe3JCkqSnZ4GthhHBVmZphz6eZFfRDxFAXLQAEKaNjWrr",
  "key30": "46EDsVMU8mMwM8JwCkNARCBtdyzvgkAhf4vdbcJ6wKfDVfGcgFnuYb9YZYtfJEsJjxVuurT7dGes35BBzqzSkqwA",
  "key31": "9cipEZmMLaarc3kbBqX87L1TghvPrpKi17gMwPMgStFxSW1RvWacVoYYPiHDdh9jPQ9pYPMVYDjMkgSv6gDhzrd",
  "key32": "2fURw8v2sVf8zsbtcs3eukT2aQZuiTvc3EGQqMqeJtWjYbLE7FmzH1xfyxtuzNCYDKWaj5AGmePtTev8eZ5j7oZa",
  "key33": "4TH6kPpKk1jUtaPPFvJBb3oFeoFREf7AvTEgVwDcam259TFJRFULjACS76sn1bmxxc8d1yidYdNjVTus6U7aPjLz",
  "key34": "2MvQjaKwcKCZutaEFfsBK5N3EhA4bsFxxiXqYuTkZsusfpntaxL15E7tFeue184hnuFFmxHMoezoGd5c5bUMtLB7",
  "key35": "4kKfWoRV2Q3diJ5dY1CB4DHcRfiYfGWVCBWpM5kd5Tv62M1kbMuRMUwdkRTY4AJQCcjSbdbrME3GCbeESdsqcAjC",
  "key36": "4wYhQWxgbidgbor3DvtijeuDcnBpf7tH8PbzK491G5dZb7ksBrWtzkCJXrHyPCSHAjbVLpmEbXnVQynAjwEvuiHd",
  "key37": "4FHANzDkUKSsnkGZbW2kYoC3DZjVA4NbyG3jQMvu9zuz8W5GYjfaqKn5mS7H88ZAEZUzHQwdBKvaLCzLQQ3fFLRS",
  "key38": "3WiRrT4thyzk17LrPbGwMzW7YgbbpEpKqKE6eNhpaeGru1bw1B5FBAwHL5S8iQzUsz36nEEYWR8JcUcKcb6dwpMH",
  "key39": "3r1hZTgMCJ7o4sThFQzLkG2L8w1M64e1D4kragvS8k4FnDMeU9CsLUkAhGdjE4YasxP8qwLSkLwHdXnvEga5UxC1",
  "key40": "8Pzb3UVQ7MhQCDV7uAZ8TBb5HiDuUauWpamstmojF5URkWi5nDq38anU278Kv44gVc8cN97kGobmyyf6B4ND6ze",
  "key41": "4kMz2W3XNCzVg6cFqEsmNS5RgRWc4bkotjwbNoz93NwGEE83YhEz6T1MUcgPiQkj5wvmJDdNrgKPRQyBaoFWQWfW",
  "key42": "5R96z4x6wWFNcYjjeJYAGRS2ujzU5eMUTewoAmeQh9diW3mNEaqpiEP4XgTCXojjTyFXmbWLipBbtEtuVKJxyeNF",
  "key43": "2dXqWWpuE4xSboZP33FNzxdiwt5gMDPTSMP2pJwmMyjrJtTEqnckXUYWat8EAAqDXQ1xmVmt7ADRWvLvU4rFguMr",
  "key44": "U9snwKCdDvSXSH8UbiKj6FiGXbhzDYEmGgCX7qpCsinxKGj37R3z1LwMxYtt9i1sB2D4Ys8HG8xDsLEq8cVcNRv",
  "key45": "25AUoq7GCYjLcQViWmrJFLxAqoAebR2Hm3s8LHSSXe3wRzvdiNyQHonKoDKH98GnuDkyrBeZzPqf2mQYHFbTCaNY"
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
