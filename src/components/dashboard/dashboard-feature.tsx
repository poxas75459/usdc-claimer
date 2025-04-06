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
    "2mBfQoZAUPD5BMfM1ZCME1YFLJf9hQ1K1oWe52dqGXJ3tkNFr2xGx9SskuKTpn1F8zhgtWN37syTXUwvEXqWKHEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LkXezqVmqPeS7VoZTM4qpwXXrJYjTHAQWxVdc9GscAUacaVxjntb38SKSvv9D8jwiyjdsBLEYLZAiiUGKD8YK6D",
  "key1": "3hB5mSruJeRjsXRSY3ZEGwT6F2AnRGSxKU5fpZTb3ubV6SLJirUwwNUPCotYnRVzZmAoNe8rSaW39JYbWj5NjsdP",
  "key2": "2biu3wMuVkX31DG1Ecv9UP8LgF8KAaWnyS3f4X6JEEpF1SxMEL7VrMK7c7pJWgwinkswhURobtMraWaXQPrjehMV",
  "key3": "FBHMw3kXxNiButqN46SnM5YHXKvKu9m98GvkrvHefEHNTTV6C7Wy76gJsuyejen4i5hESFmzswsJnpixQ5JCLK5",
  "key4": "3FRKmv1UrZ83KVik4VdZ9PLzSxezGi3v4FBK58egp6PSjmaW8XHQcBMSkUBu4Jy7MHjLphxbnpRXwph1Cz7cxYcJ",
  "key5": "32VLdShBk31C5SJNc1koNzyQHhoJkXta9WB3wxbcercHXGMMbW9zroRpKpqgDGT9ZWdpH6fheyozm3sDXdnCwRCn",
  "key6": "a7hjzeU5fBQRKhkFk7ExUBFjLArKNRjwNv1rhmKLF1v4gLuJjwi4LPmDeXXrU5wAv1LBnK7ACUB5mGJrHkr4uWX",
  "key7": "rYK9n4U7E473qThag7dZNxMy21w5hViWthT1xk32QRy12JETRtWfF9JxeTwvN74yeSUKhfvVKuMC2dq97CyhgvJ",
  "key8": "5xW7mdceVa1R2Q4rzaWeyxbDrHWWBARNt7o5is41jrSNTvpCvsY512e3N1PEQwkJpn381Keg9syuyyLXNWqj7foV",
  "key9": "2SxxNGnRht6daaKtLASw5vKxuLe7CrgTZzNyEiP96bfpbXBXHm5xgQhvtu9uoi6njCpAL5GzjpseZY6cGQ9LSdLY",
  "key10": "5df6uZZSmHvHMzQDw94HMawYNkpoUdjdPZMKpzWS6frhg3xV8e1sZ52qeM4rtXiULBcAxbT8pvgihe1aSW9isxEw",
  "key11": "HvWKqCza3TZusXHNwbNmtGa69iGv2yNcv73omdAqnJ9RD6mvjoA3YfqVonwGxGQDNaEu4xXcqpoEKQ1rhrKfpqJ",
  "key12": "4H9UabKw7aggigBUKFRtpmQTXexsDAXfMkNYNaqcNDCSzqwN7DcBgWD2Rwf9SQ5aHVkYFZMHaBezLXV4YLaFuNuH",
  "key13": "Txt9J3qoGhonFhfZYvAYwZ9uvXh5QhWN5Ta1akJvATADDHiXGPqhYrJebFRmLfaLzWrZEH3h9T1uAgqkiscpFsw",
  "key14": "2NVUAQhDy24ZdG8ceyTG9rPjvTWhCTVfKM3sh9soXDPqRWYgFTwafiuzH6dNv4RoXZNiAnhTcA4nZ2SeuCxoV7Z9",
  "key15": "3rFMoLE7Skw1ja3Gv2kYcNkZxSe6LFQGduzPLZYT8GdRCErTtvN3oYZs7UV6T39KdNNSwf25p14GSU5FvsZVvB7L",
  "key16": "3obBH7dt6VH8SubDBL2b38EwuTTdY6YD7dXtfApbnd6hKD1F4kYKLwFamgou95AQcpnFk2v927jAJAYfNDqL5tk5",
  "key17": "33FSZFxs1RPGVoXia3VctL4j42fCygUSBTHessDqAWyAua6aRZ73uXrY6yMGEfCwdkLtk8fxXyEBcLiSsphhQDgN",
  "key18": "4tRachA91EwneGgts1dVzGvDPmdPfiajRKFthw3twJWDhX6eucAL5hyzx324DFxM5qTCQVdTkJ19ZdpbwyLoj6Px",
  "key19": "4mLJWsAReQrk1FzZ6U1MMTYuF2GBnbECUMiZKTVHycV6EVYLDorbNQ2Lh2Kf1dH62bVT18Ung7uzv43c7SaCeUAu",
  "key20": "3kZ3XTf9c8tRVwnwTW59wdUh2e2qknCimmiH1mvBeoxofFYWTkuBjW3jkppQ3JJgYjYUGnVvjELU8fapquMooE5u",
  "key21": "a4g3EUUKB26w7nQ6LNxLM3ZDmP9nqww6zjycWz6KEW4uSkj6zQWXpeUiu416SyGiW2cCn4JAtPfitxbGnkE7SAr",
  "key22": "658vv8ykQv9qZM5gzwqdKJzm7KogvHZaSxcQQKMAjmzRTffTVYQttNDBLiBNUwiXzmm9wNoUSWPLBkDTJbYVYhPz",
  "key23": "3FJ1r2a6wq8xZ1hCFo8txEgsC7qouAKP4ZMeMvVyxxEHg7migwxY46ypNZkUwQNxjkANfyezpGXrz1aGPjMdM5jc",
  "key24": "4rqBAuSBZXTY8PWDFtmbueNgieodfGbEepd3LNaCTqGMxk1YrhsMrnDbFDFuA4g5YnkxTysX3egxQekiqkUsgFkF",
  "key25": "43Www52Jediv3uDkQjP5cfBn1AApGAR5d9sjmgFzugsRfTMr6SJxGtKc8AfQBufCAAuF8uSM3i7a7osVoXYhP4ra",
  "key26": "WE56CaeU8owwmHRLAnfDY3Lg4wXC7HkTJRu9KQosbh5feWAcmaf3aERkx4Zpjq7mqwXjapbkazvx5foC5LFTfak",
  "key27": "4NwnZGoczL7o3aLce61t7apdeaA2mb6t4cTCKXmzgREx65mSeB3NP1sMia7S6PsqCqFJcbRFKHdq3qbcp9RHoG8t",
  "key28": "3sfEQ95bmxJof2eSutCfyVREJVgiNLYywrW3oFmiAvkCWmAUdtb6ym7gpgP6CGzWcVzh5y8gXM3wQDVHQSc2WXVx",
  "key29": "2wCGtxJHSZmUG7hpvDEsQMtse4evPsMbtEjHNfPweXKSZVBatjaBbfVYDJkxLDfVCKdPgmkHojCkVQj8MfeftyK6",
  "key30": "3jrTDSQFE3xq5Nmwn3pZD7QEiF2YgSBi7KL9pnzQpB9yLGMoSAFWFWJ5fjZPff2cU6oq7rY86CsuzGKXDKjPHRqg",
  "key31": "5RmAevjaAs6s5Bj4hqNwdF5UVndjNzYMRvZsNf9urBkcAt7kHkatXdEVg3K1Q6nRUsSo3EjAHXpaFw3HLiiHZDpV",
  "key32": "ZBxG6HVuMjPC5ZvZ93MUAsfUZk8PFgKHGpEUDd3rqRpJNomh19hoA4FXbAWb3tkBdP6PdhL8EgHW8Q35pvzmwu2",
  "key33": "RvPE5yqbPK7AsCAkdYoLwQiXvdMSirNJejrxRk1D16knG9vd78BXY6ZPtUSceedmHFLKns3YVzSXLSP29emeRYU",
  "key34": "5AQYh7zQXgeatjE4oaMhk4jBugPPyLeTJQZfZ1JFBgqw5iZN8yYbgV9qtDZJEtVpH4Ry4iifQsqcXdD2494gnk3D",
  "key35": "2o7z1Gg9KZrQBxPNL2hRLNPzztqDiF5atpNakaMiVUrfY4iTVvDmmqqNgg5k1H4iiSDQkAQBYgrSqAxwQKXVm4Af",
  "key36": "mmxeA8P9sUEifz9nXjSLxD3YQVvqZC4xggtSBwGungEzbxFuzV6P6QRHqbopRGemzbSSxyT43RpSeTCmRgYzr3U",
  "key37": "2rewkgjSgsqMeqKeBXZmWmqsMtdFJ5wZFkdErHdeaP7ATDbKb1sNTGJraezs3ByGw4LhsTGt2aJWsCPvF3KijJKY",
  "key38": "ZrpuTZAiLPrapEMDpBMwEZ4a4BMkizehjaLXpkyu84ZyFPRs3McrQM4A7TEFU7fDVa4W8cXFPxnuKh7tPbxuqWb",
  "key39": "k4toj6HNiT9mcTzGjaJLt8LLWKhkjfNnK5NuXgtGDpUgjnvttaReia79akVdPhz5JuKASMvA3JtQCDuJdB6q2By",
  "key40": "2vXmj1RiHavvQfgfrazqjwPEcVbbQoxSUvikHo3ZrgNmGu6EhUpX63Rxpj4njJLFXPcKyLWAaBEYUvwzwzcmVf2y",
  "key41": "2j6pit9X9KmKCLeVD42EEXwKubtRqoyCNT8yr5JwWUkaoRd5wY2Kj9rra8wX675nW2PxRnjeBsvKYRV6gh7watSS",
  "key42": "4rb4jBebafvLPhpEHALGsQt3oY432hLDx2Lio9ABCKK6yrTTk4CxwiP8pDNW1S6Cmtz7HRgpdDrM747KJK9mEnCB",
  "key43": "46crgyiaumTtbde5csEj5anDEXG6VVABrJGnYqALHZi88bnZDUwX9VQZ45QXbgBVPx4BGMLtCQVCP1yHBtxYcmzM"
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
