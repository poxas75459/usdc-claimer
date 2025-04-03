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
    "43zsuT9zDHyDNdxtCtz1YKVkhzQCBwYPAuEY69uD2ZuMA5WXnxSZjnrdcABVpNujzFfk5h6CvLH1wyW4phFeiXoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pkm8chahLP3Xc8eBZdpJVVkJBZmqVuNKPZKiRtBDvue1x6pZeHuqJ9iLxEg9tuixNCrMdJyaWDRCgGqNMtxupJu",
  "key1": "2ztW9Ywm3uqiDSX6pRrkPGF8SKw7uRPVVSpHcm3q8VVFiax5b6VUqKx9LatEHMmP8779miqMbaHNCkacRHCajTAE",
  "key2": "5DFs8YqeaKjKvWmjmugzipfYqxpGbHs7rUcXG2NfnNMUiWSwTmF9sE9uNQ8F2pky1n1yyfABg554W2gNU1GJr786",
  "key3": "5VN6FqLgwx8FKAn1enHN52GjPHXAYgd8bsiY95RJ8Ap5Jm4fTU73E1z8T7aTVQT3NdrkycBMSxPHz3fiPPELybYh",
  "key4": "61TP2VnnE1tHboK9Tp6jgt9XALSuJvsXuEMeJWbxE7eTsdxXC9BpYqoqDUP5K5n5J6mM5Y2D7qDmRqxFC8WJtC1R",
  "key5": "22sKJ6cNZNSFvrrh2TcANiRaFdj4CAcC3jE33cZjs6HBzFZL5fvsi1qxU1qT8d2DMT1B5RwhCvkT37VYmoqm7Jzg",
  "key6": "31EEeDn4yiGkKK7oR3cMHgfy9Vi97oznDzkrGRYQxBjQ1vfi832Zt1jDA3My8gSrZAMBhH9LGe5EzNUYFHcSgCL2",
  "key7": "5eiDXujtJFLJxNNUFwP7fYxYmbYW7GJE4mxEQWko4BfRxmZgTMRhc239YN6fFrbdjZ8ndMuie5Y61NLyQpxC7J9M",
  "key8": "VtDHb3zQZrzsqWASTW73sUJpngViozgcENGfxzx5wQBXgPxzuokkTyKfrE6yUpcRo5Nez5pMugx6GqZrg1vpqNE",
  "key9": "4L1yjA8owMmajfiuT6BM3bKFGo6tJ7i8k3Ytnw46vbj7FmPAjDwyM9dEeSqniJWsBooQ2bk1T4kKmbqzjWz8NVaA",
  "key10": "34f1JSAL9AJsb3EB9sXwQsW5wyAyvA8z37TBLgHwUG2byJ2gXoQokewRDHN9g6zPTseVvRd7d45kfWsWcPuZZsNb",
  "key11": "5QTWMNx7qSXRzKa3pnZAqwVwmwYy3n4hkyGP8QyjL11fAaZC1y2VRTGdgiELFAYjrGgNYoW8q4LHoEeLnfatpPPA",
  "key12": "3XvkWVTYEsbKkiXpVa1UJJ9PjNHdWGH1sFW5XHJsHj1Nj7rwTkWmXdvcbowLM4Mte87KiH44aHX2g3UM8iYeb4iF",
  "key13": "4MaqxE3oy71kxirshautqZ95WaCu8MUR2RsRF8w7EEHRKQyqNScHHCakJPj7yao91Rtngs9BxvfCg4pJGtZAg3Lz",
  "key14": "2iwurisbP3hHoSE4UuoDwxmMSWQYoGvthhJ2R1kqWmUAaHBtSbdsYYwaGcV2uCZyTxf6xXyCCpH13K29teZDsZxc",
  "key15": "2fRxdYThSqq5aPWNCyEUSuK7tyG5o6ALXbmk6Xbrh34PoXhkTQUdfqVeAcFqEBtJcCDJFRNwozEWeVaWeAJzMg5U",
  "key16": "2okzGtxW97y6ZsJiY8uv14estuF76reyF47SSm4F2hqkpNUTKDtZCPu2PDykoXG5seKuGuvVTd3S7BEqrN1hcPL9",
  "key17": "tU5T5atvQXuKgxpFEEoxsCXyEJh2BbgKt8PqQvyi5NzvvxEkoHfungicNtTgaQ63X4Gzjn3q9ZZHDWvZmUGeCDA",
  "key18": "2bCqGp8o3PJtURQtxyAPzhiC6XdpPTyRJY4SmLxwuPMpmPkYeN1EYeNA7sFKWhJeThEd8wRfi9UEBbBFBmRQiWYn",
  "key19": "4gr6ATSASZFw4CvRwzEMycKmxkvkjcqpAae7xeLGLAx6Za4c7TZjSVAwb6VdPobnH8dScgpEuw74S4qa3NE1Cvcs",
  "key20": "4J4xUzdhZfPwQacNceKp3coDYvhwm9Y4v4PqAWToEoTa6XSnHaptKM4pSAZiu2p39svtsrBmRkEVL2Z5vgRHEvkW",
  "key21": "5JPL3iN9rJJv5zhQ4kKKZe6dogetK4tLD9DxEXDkazdwC5FjKAXnGhNxb9yARw1adFTftoXR688mCDth4XNj4N4c",
  "key22": "476nxL5Ab32FbBYcHRK71vDF7zHgfEVpiQWc6ZN7Evb7hUiFR2W7RXhzfxbrXa1Ekpg1izdnWGBBPvdfYymuAEYc",
  "key23": "VJWyg8CYTs19sdDSLaun4Pt89NhgzGWGUHT44z9JT2m2h42KbRDvftxyVYR6ejzZHTyHDd1gyU6B1Q8ycggQ7Wm",
  "key24": "5cPcZQt58TQnt5tDwW13htxrnEtw8EXfNpEfFLekP9SmQ9yphhqRXF716L8paxnyZLzzwpKQpJRvJZQf5ivEBzJ8",
  "key25": "2TbDe46NP7fMgf1R8BE2vZsWcvAGMHDoYTCQDGDwtMYH5fjRwo63PyyB9SLB7zFq7rnjNrSqscQjafDkdAmH8Znp",
  "key26": "3eXJ4uMX9Ftoe164JRmTjuKCAy7KLNQ49sfmuFqHnnYaxUF4PkZmtCVVS8Ga3SDQQF8N4joukUL9evGkPVukDRGE",
  "key27": "E5ACzYU514Shia4MHCCHqYxQT2jDm9jVeXHhXPySuEFeqGPGNWGid1nars9aKqQd7YgttAABsXVb7nrH4Fwmhye",
  "key28": "4gJLAw5dVvakTNhWFFP1d3jRx3TBtNwdezT1UpkXMVM6aFyrmSb9U8g2W7xhrYiFQygizYGkhSQX3v6BAMcbR9Ro",
  "key29": "7aE33UPzvZesFKYhJDTWFTeiV9XqB9M6WNDS67MfRpuWRnW3U456YuuoSaPyd15tpnPqvFbJ3Fx3yrPJqP3Bx9r",
  "key30": "2XhpDVFmToV1kbAqPj7Q2K9ZS7zxPF2UJgd25qEPMD1cTagV65BAm1cCW544MH4YW25Rp6fQxQmax5uqJNZp7AsH",
  "key31": "61iveQTiSHomsoYxRC8uVQMkU4jRC4h2XzasqbvtdzfK4GcomcRLWNBJRZ6buYaWc6V2cV1HSYP5tiFEnNjPYTEB",
  "key32": "3BxWi7Nd6yz6txUesCHk2aE4RwYJtU4W8jZb3X88if9uwtsa7s3j4TCvcLeVw5h1baRNboqACaoKbwGkw4ns7xC",
  "key33": "3xXFf23kZeFYv7jimunZLABXn2cYJcdznVSVQczEM9M1q2S1KBLztBjYYbyuYZBsByzuhqS9twBJ3Dq77rYm2cG8",
  "key34": "14KJuhp3aBFQKHH9DR5EAQGQpyimawo3Vw6vUsipxpC4F53qXDDP683e4L1sdEzGdL96XBRv1hjjU4U5t1cigKL",
  "key35": "YiZY2iFquAzui6w4kN1fbBPnqR9yJtdbm9FgPeh9NDMGQa3ChHC2ucFLtqrbwktyESRyAgYpSeD6oqfEXNRZGTa",
  "key36": "9V88efRAhxtnZ2XoxBDzeVUAKcwcyHeSBCkBTPkmsmDLzvGVpnDYHhHMqsab7TuYmGcqJ12wJx4WTGNNKi8T4Q1",
  "key37": "2eX8kY47Lv4TKPU2ssBcDciZKQhtSa9GbLtSkT9mZ4RTCnMdd1HGnP5UPG7b1DQZJcwrGToyqBtAy8MJ9Lh2m7Mn",
  "key38": "4zeTbSQuGLWjJNG1syPJHaWVetnfFexje9WTMqp3VgSQ67UR73GiASHYBxDAkL6oSvFE6VXiZFeNZCnPXSFbygCB"
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
