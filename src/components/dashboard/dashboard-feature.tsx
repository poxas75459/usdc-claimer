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
    "3EMcQWbGowUFSMBhWqQf3r9WjqV7B2GD8Zd4ystnzWFWWDjeMuxFTHshXGJWyivNqy172fWGdhj7RHx4D3915msW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yhicN8ac8oJFHM2Vzbrj4UMguZqaqCpiCxU2YQurH2RazN2Ygx3bfbSLFezSb7oCLrfGn2cF7U2H1VbFwD4baKn",
  "key1": "2MJ1JwSPrbgggfvWkGFbas9eh4SuN9Zie3GV64Dnq7gUrJ5RVMFGbdbfKpzfzjd3Rj9xQReZYjCyM1zB4RsZkZMp",
  "key2": "3bF2jXyWtX8HRsoQtSGVzM22WPDaHsSq44jgU9v6YoGAcNtYLTtautNzHNBLe3EaMfmbKnvMjEMuViMgja624ki",
  "key3": "ouAx7g1cSAoHjvLux1eQCae9MmFGFfFh6tFZdge764EqdKEY33aMZiGp2tpEtkddQRrW3kW6vedB6Lnj8M8CgEJ",
  "key4": "4wtD1zV45vjjsgQpt26LLnqKzkNF78HXHdDD5nuEQpjGDAfPV4J2kcDDqAJtkdzcBM21NWAzpTHUWmjNh7hJ2moN",
  "key5": "64h9UxGENb59GxhiGzPJCqJ3BfL4gXrvSAJm6A9oQG69Bgmhg9QvjKmjTERgD4ZVh3qkdunHUmsutzQ7f8C9Aagx",
  "key6": "4v9GQ4BPhuFpxwYDKXGe9wLLREoXvstC3uENXzvt8zeySd2qWFcP9q5jK8KpMjq7QtNwSr1EWhAPaqEzLvr7e8VR",
  "key7": "2CjRfvKfh8v4mQQVhDUwPReQ5vbCJxoRbRUAd2RBEVYHqwBD3f5Bu7MY4FyACJB6Ms3vPNpkVYsPveit7zxhzNS2",
  "key8": "USFCENs8BDqhh7VmYJdiBRuDYm5Yq3EiNtjZRBWdPh4CPD8bgZnXJY6XcDFAP5ju4vdVLayd7xyvHs7M7ne3cZU",
  "key9": "37xYKgkbUnBt47T2AnKuBHchinMxC89ef1vopHhZiw4rEdvVmLcLFB7Wo1zFimwkcYAmNX6SdkyPb1trrNJw5qbR",
  "key10": "3jPQbEpVgsamaozQ8vPACLsNUTdmdqLyZfjymAfHvgy3XtDvSfJVU9fhAnieQpNsvcg9G2xTzFB9PoBQ78dRbQeK",
  "key11": "4rA7YSKLyU6RTi8Fs28fZmrtGydiAqAdVnKeRk4GTQgrRTaJrzDVYoJJpgFX9amgMqn3gYSn3wXYMa4ve6Fx9nT1",
  "key12": "4u1dVzPmshPQ9Xb7TMzND1gkAR4bPzGhr9qqoo6kGvGqFECJxXWnEPP8M1i5nAMccRpqcjSiQ6nvPixzJDUsHuZP",
  "key13": "4LUQD7L8AemyKBAwVPK4rDfCWbwkauRWvyKUeHbv4pXmMDTYT7Ky1es6TJ9YuvfGDRGaiP6rW7aKTcXX9hpfZYji",
  "key14": "5FpagjmkKzQFGg4BjrcTo9htKdGzEoUwJiByi5PJNV1CqNCwCC9RAECQUAh8h5bFT13bPma198U1mTq6JufyfTyD",
  "key15": "3XbuKWdjqdYpnRYMfqCbep9fEMiw3p6Vkf7vph6hEuMS1T5ZgngWyh29Xq7AVqyCqQsVK42dSAgqHiBamCgSQGLG",
  "key16": "4XZsH6xjXk9EEQiPfYDUwg8ZjK1g39jhCmfjkY9QummFaW99TDg9D22jtWZM9c4SP3tVBRDpyWJJ5L5LbJexjdNf",
  "key17": "2eRMjeS3X4v1b4zULHt7Ge6zHbjaXR42uY8kWBYWb9b6LbU6xsEgSVPbekjRy5xWdKvDrm89vKReG6KRzwYwxnBq",
  "key18": "5SGUz87DoiuUYKVeV1mjoGng3CL3QijGHFEuKM3F5VHRgTxVbJZmXgjSwfBeGjZnkA34i4rAWXDKeKZS1pDAnPbn",
  "key19": "5tdvQ2kwbrLp1D4Wc2qwzAhpeq7YfqUEeymDumzet9TTyfi3qFdgwqx74EKW8a6LRFnLwwTMM5dyXbZSAyARtaUL",
  "key20": "FRv4eNwqgHxx5PqHmnxREi9WJZLb6atELeD4PZcjb8dVjL411Z4LWnxwF5MkeN6MZEDKZT5EU1m85Ha7nEzGzZR",
  "key21": "4smAkaYxHy2ExvSFLMcJTedequj5pQ61wbZaXuhst3BnXp35bUs1iZfrqxtTQGkgHm7AYeD31rdhmaYsdRqqu7n8",
  "key22": "h8uB6VYWWopjFjZRpTbaLWq1jgKQ4xNv4sdSA6KcR15smhJFdGYWi89ycZK13fFZi2jpEeMbuZ1hC6mhnb59rzX",
  "key23": "5qJDPpSBZYu4VH531d2a7tCCFhLhdQxNvYv5m6nnFNWTY5Ys6oEcVqConP25hzDQnKELEfFNZDgtbpSCvx99z1De",
  "key24": "3VXNf2QDvdGnNTsGfLvUyF7MqDdghJW9rkkF94MUg7Vi4mKx5DnGp4QxBjYLjP74NLVX9MwPrt4D4xGrFBkpk7TE",
  "key25": "3pxgWkyGc1n1jQVNz8EJTfCTzBYB9wTsSrWDPsSHiEKREhAKYJYDWvzVJ34wnNpKSz1V5MaH1bPXjCXwmar8ufDa",
  "key26": "41M6eHmbtARfZ7rJCVbX9tpFuVnHNHfdtL4M1uP9iTdMgF1KMohuRnFoA7QGfC6crDV3NC98HajY8oxXBVzq8A9U",
  "key27": "2Dx8UBC7R1B5DZ7kWbdiW52NYPtNG6p57YBF5nUUm7QNA5mfaeGZz4evET6i8j9eMa5QcBNTz3AJH2LPnRSXFFV1",
  "key28": "53yDaHtVdDQGdK4vysd3XC4xBgNqAbKsAaundFMK23SdEm9PfyZXNprw3r6M8E9YjoDCGGwBXxuom91QdEBSypPM",
  "key29": "PxmtzD5QKv7LDgTC7Tv91McKvgiDXJcpTSYPzxk4q3VaxCRnyzV2fuTsXpuHZm4745MoGpKkG7VJUV1UpVuLSmz",
  "key30": "2own4VVMAet9f4cKnN3HMa9jtDQrF3X2jGuGugYCmdUYE6uXng4QvJiqxd7qugn6BLjP9FkBBmHEc87fR1L9momh",
  "key31": "5sgec8SHcFYoYwpvyYVFTr2tmwnkrxtWPnvnCgzYD85g5xHGw1XiL53nNvdz8Zdx1Z17qhVLbkgyKXTwdNhSb4Cu",
  "key32": "2TPtJxF6jjxTPp9ChPixN6w17zTz34gQDLSaSqXQnXhdeTQ5dqhERuZzvfcSVqT6xy91vwiikMm7P1GDyGfyjVb1",
  "key33": "31VFYUku5C8xB7ZgaNSDKqTUXth3zjZvsicjci3DN8RpchMPKUXieahRr3FQhtTYdpM2iugMpqT11SFuUUBSNe9H",
  "key34": "3Wo593E3Jq6Fc1Hyb3WqoVYf6zgcnNDudXE1tDatuE5GArXv5FdeFuCnR313pcBMRvCS48vArHCFZbnHW1qg1eZv",
  "key35": "57urbJqcXoSZRhjWg7R1etC244ecq323fTEk5ftvE2cfPCGME7p77es6PJ8vzP6rnhYDQFhAoJWMW39VLhxXKyxo",
  "key36": "NXPsrgKUgAcF99jrMrXigosCRpQMLdFRiHAakYZMsP3HkR9trawm1Sq7aL8B3riLisFXwmtjEuxMZPTLoyybPKY",
  "key37": "2UpbS1M222nHjQx8VCJPMjLv8q3WqerhU4wjqRzpqNrDHUP8dMmUvYinG3zDhjxaEFKWWRNLeVsxvT4QgWRSU1Td",
  "key38": "59urLE5xXVbSFF2aXC3j8ukT1EkSoiiPuaT692BTcSXJ9hNpizyEJsiPQQLofRQmRP4n8cJnnpW1NRvV2FPh9jnP",
  "key39": "66SzvM7r98hwhbjy8TGR1xZcnuzK1XiYTm5mMkAF5u2JWbtBPDqPSXLJEuVjWsfD8TMyxWvXj9mJ9yKep5eNCckY",
  "key40": "3gayuXc93msNygVgNKXSNxZfFdNY6wYXARVb2Aw2vNHXniqL58fDqFrokSupsGDdukbx7jUs6SJD3t3gzshTjRnj"
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
