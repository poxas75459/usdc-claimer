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
    "2iFKHAd6m6Z6BvSfZnZ5t1Q47d6kfUhjtEMuQTaBd6NqoUih8RzjkkDauQtDoK24QNrQVMMEGVCb1GrnJrEfdQfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FRrc3fjtspL6GjBShK6Vpxwmj8xtwrJTrGJcJNqNTkEVvyguVjgKEwuo2rWjWnnhYQtuWsBYAjVYpxkyy6FV7Sy",
  "key1": "5qKuRSrrqwFQeugpm29WfiSY8A11AFzQuz1fNw8vqEMnB5EW2drTQxGJiwbWB5RtM3jsSKhfHpRb4ukKUyyEpVPF",
  "key2": "B3XSN7yPgLv521kLxK3YvDf9eZHgWEXXwAnUBHniGytx9Lgy2Ra9EeoT9YcxyB6TyDzXYSN9jFVjU51ZgR7esqk",
  "key3": "62iaahj7o5r9BHAQHJc994DH4P7R69VXNZGarzCFCrYmGhZKiDF7RRbxrA5DRvCP3PxbgSFg5nfYM4RYxbG23xtk",
  "key4": "4KWtMzdyzghesSJs2uHUdAinfDXMqPqMX9BhQny8mDgC9uSpnUofYASFPXLtPVm3nxjity7LcpvgUAzNVSZaDYCJ",
  "key5": "3i6ED6XeDKVFvgWPEWSDsGpsWC1nbG2aXrF2c2BtX7LHiSUB8EBhGMdZVQb6b1dDFL8m8udrDyzadWQW73Yr3y8S",
  "key6": "5HyZfCj1tHy9Yi421Zn2JWoX5aLic6DVL6jJsKs4JPNY73zoXBBVDrfiQBnAZJdfTkimHzcXyJ5qU1kL72BTxx2F",
  "key7": "4QjppLdVh4JwY1wYrcW9RqH2HGbxKYVxrEeoxMmmdtsDVzWcqMaeagf1N42PTLPg4fdKWLk9Qr91vEghDwSysSDu",
  "key8": "3va85RKakhA7w9D8JpRffudnPBUiGPFiqD89himd1jE6WMnoAudbsEycE7hHZ8JX3VxoN6VpmFygEUWvGvGv2ht7",
  "key9": "2xdJhyCwViT3EtDhN9kCume69h6h9u59919s3gNnkNfyL6hpWtERutBzREKTxp6Ei2acERrq6ncCAhnRTQjRWiuL",
  "key10": "3ijgZmvHh6EFXcSNsg7L1MraazQGcLEAbhYMs5pTE4HnfMAbDnvgHJZTwcKC1E63izJrotN7vnyVav6nyA2Q4Wzn",
  "key11": "ZLvjK25vsStG74evRm4fbyFoaDfSKTJNN5aLWvWuD7cT9fKtjHcsGZVNzEyWTp5Pi9FUsV8LpoGAzAvRHVsQCtM",
  "key12": "oVdQkyf9b6qRWY14JAYNnpmFWBfhDDQ1tpx1QB6ABSGMA1gp1V9s4zWKiSTqVWcv1GeBLbtz5A4WxheLTZwFVki",
  "key13": "532J7tKN4qNeKFZQkprk2eonSGzWmVn3Fp8tyQxrd5KDZjCJqYPE3AjYLEzGBPNuRCCGZGQp5g1aH3PZBwUJS4fa",
  "key14": "9SSTHwRcUTW8F8Xds9coXj7va27ifNgAJXcGYz8mNE2FPguUW14drkcro3PCrb8wnLVEyNCT8uoNFnrEuWh5kDf",
  "key15": "HdCd3r3EXCtnED7DoKrPPDpqPgNy4KbPGZEdP9VqgYsoTpf8NP4bq3YWdGCb99wvdp9ZuECam5Wy3wzSUbqJHoH",
  "key16": "3w61bDrmsBHNDsnSEPaLNDEpjUQhAvb7PwcHczusZru6T8g1q4VHR1PqENBLtycUkkHSQj1JEVZLyTYLMrcjv5Mx",
  "key17": "4MdXdgKEU75LTB4eB7yvtPtswHpczdKwxPA5QV38pMTbWUqiJjNQsCEba7tMbFgtw8DwyWnXjBL2r9G9B6p3PsHC",
  "key18": "4GW7LeBACvoKmQrx7CF87LfkR4GDvagucHTiJjzBQNkNq3JN9eTSohbZHPr47SpY72XSzk6bkqRe2Vx92YMx4WNi",
  "key19": "3g6bcG6KEyBBtspV7mabSqbPFxq3jNrvqjNBQt4oJLpeCZj6hk8wqBYpeE1xXFzCxEBqvx8ZpvxbmAU7RtMqtjKw",
  "key20": "3TXa8BWVYaeeHr3uW2uLhMrHnGHAyStdnmABERQwMjrDwWuUssQ5VxrsV3ZcmzjeLsgoMEFS29UuKieynwnGuV4p",
  "key21": "3vCKUHXq6SCKAARU8sRWaeJMy1BT7B62XqPUZTd9ciPKLkjdrEfsRDCNU5PsVwCndc63zBN1RqgTDVAuuZbFxxtJ",
  "key22": "3fR29NSoXjuy94VnYNGh4JrFLYdQicsLXfT5uKY8jNG5t4hADBPc5MczR4JGT2H6DFwEBaKWm6yYo6vU25WFR81a",
  "key23": "5MUFcK4zCweGBmqWm2aTRLLHv9s8kr5gWMAmbCcGsetR93wuMSkwRQx3UJc8jnW6QwKZRbi2DUX7JUrbJUyjw9rE",
  "key24": "53NCXuFHCFNQyxssKvKJrNb1oDvyjcasd42Yg6owwzdwRgSK1NxRQR9UPyUWdy3RndJXcTNrmuELFnr1tFUYU6ny",
  "key25": "4Fr6WY5svsCgGHHovse2xMFXrfKYbB5TmpbE7Dhm9pfbcBbfnyCakxqpWWd9ihBWvZkYCy4zgicvhcjsFqkdiDXc",
  "key26": "2VduuvffmRDNCmZwmXYxpU2dfRoRJAQsbaLFuEzApJN7ueYpdXhEEVwBEqjWMoEByHVmJTgyAtjz2uSVyqtzQtnh",
  "key27": "5dkQE1zbbRrZWzw1swftrigZXoTnwfq1hcJ8JnF83JLSVvMyofNNijrJcQTAJVhRe4aARiZ3hC99szfSuhGPPoG6",
  "key28": "BmkTntkQLUcTvJaFxQeZJGTUXyrTuKgLgUxGeQUxe2pjGXRy2Hbp1BU772hyvHED5SeTbz6X4azSKciu4dctV2G",
  "key29": "2BZ96zvySfmsK8SPNJcBTwokT5Rq16KNsRovcEXa496n4DqE3URFsKmjJgGLqKZzFCSHC3zBY3M5MZcbGGAkaudG",
  "key30": "5YN79Rjr3YRJtuk2q6MDmdBHRM54SLeBZYSuyskGoy8tGtyo1GcaiRByaSpHF9XuczWDAaMXRemHf4ZiUuoBhaie",
  "key31": "ccc47z863xmjYA9ZnLZofegZqku9DeMYWHwysgTEnDStem13Ho1bz6HgSm1TkqJRGa1gXynLqVsQBHiX8BmGqCG",
  "key32": "4R1DJHk5fEpSmEr8XKSb5QtDqybbk2LW2Q1SZ1xJNevhRaVzuYMZxxZXCx6DTuxUXLYCBW1U8WcfDjYYJmxtoLb5",
  "key33": "2v3NWgJa5k3H98Rcujnh3B9sJPZGPCxyLJGYmzCJBXpeVEH8XP8um3iQCPdFDan4kCuuccDsuwcVCZoSsePQGUxZ",
  "key34": "25c7BoEzAgxTJfRBfZgjDezDGnhToARQj5z8wHua69o9sXp2NWF7DeShNuMGVucLi2cGBgtU4twGnsu8gowU3AF7",
  "key35": "3wh3qafP84SFa4oYN4qQS9rhfLaqEgBLUiUXAVkNkU4cFrdt419WjoHeEwKnqa5KXAsxyLQQPexzZCLcpvsVZGZW",
  "key36": "51Jb16fH9xAWDpYREjuaU9Ke3wMM6HNTwTzCqzqJjYmdyPFSQc9EJxfL8iH96akVBJRDixZJSNqd8Ct32XJKcZ1d",
  "key37": "eUfKhnuS7PQ2aqjjh6eQie315Eb3NxdzJJjZGds7T1n25g4Gg5GLCoWkhcQyfS79EGVYSFwUXMoJCkvzrrJdeYA",
  "key38": "3pwkcP89FH1a9PXnLxaoWbEXZWaGcEBTWGGHCHdEGAKvuCn1tevF6XjeC55fvkZhAUtyy6MCtyB3Pi9zADBV1wRH",
  "key39": "5vaJxvxhD6rUBAGLUngR31HAMvDKpZpVKseb16n6o5YGcL8fTnuKdf5gYD97Z4joFzs1CUuyUHuZLj4GQkM5yHeu",
  "key40": "2ADuHJyYoMDt9bd1rBHkXEENYuvSZWcp9qQ4fEsucqpMBiDrxAFDP2F3fBpquwNu2bZcgzD3V6VopSnWj1dgyjuu",
  "key41": "48GMX1jot6pfVNS2jTa282d93yWWHC1XFAFdM4uHvoZVbbMwwrBt2UrVQUYAuuauN2UX5DMpXiqTxF5hfjjSsUcC",
  "key42": "4NN13trqFF7CTH8enV1F7RvuEzuinKmwHAxu8vu5qGt5s5m5dogT1vnqr8GBFXGCfWXLY2vUuSERmtTLfrcmfim1"
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
