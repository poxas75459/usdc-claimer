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
    "4Bx76DSU8zNHonwvjxQRuwNHEyZeZDbDBR4pg872B7Jvz3XghX6xr4P7SpPcvbuZbn2yzkWvrQ8f6cXD5gcqxJvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t72Y7oWPpcGwLmV7rbtoEsLbzEyBqX5CT7FyovkKQjGBmu3vjbcaPvUZ39DyVnyuZq5ywtif5DM9RZtSDLxQ4oV",
  "key1": "5qiXo6oXyRfzTWKsnX2ZLGdZVFfYWDeCxC3RJHpX2s8A4j1LGS1wuC8e15wM8idAm32548jcukopRKJM7PeoePC",
  "key2": "2D9YGu1W1yz1kgvQJW8hVGELiEQLqSbRjRndgjCY9A5QcRKcpHLWHvPEdCjhE1eDz5kQ3GyzfvprMbHKsYXHgVm4",
  "key3": "3eXo6NqqQsQ2ZXvrdjCNpdccuquUtcJrjvKahNJQw7eekxLMMiKxuErKuYaVo6fCH21fi7XYg6rgtHCAiPJaqu61",
  "key4": "2UkGYZ7jSzZe7GFjq61DSpi5PwEoHn7BrEB9dhbwZzJEHuVCPCqBeHJsxH54NebuaQjqLruRmLoHwdBsXAa4YH3J",
  "key5": "2RrhqVBugdepGCm6enPtDEzcRVCAPzExmbK6oxPL3tyKgMR8nERKFVs6v7wfk7Pz1M1x7nLN93g7U6s18QSHXSkk",
  "key6": "HbqtTYSgYKPmtxRsKS3FvBqGUWoGxybh6QHcodUsxfEznJtmyVj5HnwxBPW9jSeTroABqoES8My4kBDGNXQFyyo",
  "key7": "4vCgGXMxGcqmgn2cqCetFB2YNoszk8QkAzPMhXYUiWWwPsBBsgCVJHqj1MqksrDy9XhyVxUaS7336958wotu6aFx",
  "key8": "2JTrRHXRfvthxR2i1HVdBiizE49rNbpeu7ebdPhyqBt8tATLM87Zt9u5VzMK63Gr2xVMPwPM22sApcidNVwQaVd3",
  "key9": "41BGhmoqhWfa8P6p1V4MaxyBVkfPqg8ZPz7scdbMu2FoLVRjjjhprD5x6s8no1rk4fEWz6RPYMTij4q7uNDp32x2",
  "key10": "3c5AA9MAvmCugUgQx2AXDEF8cB2B5WsdZQaz96BzJWh5rb41FXoAhXoQrdrwBgrxcHnjyriHwCCenm3H7XhiXjZz",
  "key11": "5xRme1gFwNthyEQHwS7p2kfAuXwfrXN6d6vwuxiGub3nVHTZNCy4HCUHLUYbWxrp78mqwBdLr1YENnSto7ZKQVSL",
  "key12": "5oKuH2JTAhRfFC8vRnhwAAGwCvMN2J4j8Qa1Z3JY1kSQjoWQsu3whnPtPr6MNosuvVtk3rmxjuFYqe3bjVq9S8V1",
  "key13": "2eZm95V4ZnQ3vHzLJXFrwntPUyarTVjHntszDqtmkYvseBMDrtkUKKWzQ5SWXPuAs2K9hjTbnGR4Ecv5GkSnTX11",
  "key14": "Pe3uiNTCTYpWZQN5FDm1guYPqnusF1uFQUYdkCpme8Ls73q6ipKNntU7hKKM7byHfKBCTXgxJthK6dAGGVPYUUW",
  "key15": "3n1uVT9NqGBC1xv5u7SUc9JP8UBu8p4dCPEjEtSxD9xGB6AcfyqvbdDtuLoCnK32Dqijgz29ZV6WoY2hZGyVGwtH",
  "key16": "4J9keRaHL8zx3Lj2E4LSn6MWDw3Ab8YwQgj7ZY5UU51K7YfLxhBjDs34mTzpjahhbSDBdYH1ve9pu8NkhmjecMBY",
  "key17": "odDHcNhBXAwNzZYYZb6kCiUHFdFq82vx4RQnGpdHiDoMYNpebh4Gt3DAP9thQ6cAt1UUA7xZiAF22vZEDkjEf1n",
  "key18": "5N77tSATRBFgtw8wHqrAWgSQynWAZLZH7AWzd2AmA7XBB9U3GC9GgKMHCcrFJUHKRRevvkupm2f4S2irsj6fbNCj",
  "key19": "2HQy5FMZwb1Hqu8jc25bB9PjMrUgKjZzktng9qR2R3deTnTJrJ75EuQGqMPoyg1DYLaZ7JuMCbrpeuijfDrtmzvP",
  "key20": "4rU6dAiGLvRSmFps8D1fqWdHNhng8wghY3ztRGmRcGU6AP7eK3gQoYoBVx7x2RhVP6ah4xv6rrpYopAJRniG3sYV",
  "key21": "6iQTFXDuuHM5sH9kAGxAZ6Qkh5WL8pHXgiv5SDcma9DQLZp4N6AQsQXuQ2k3ffmPxQ5NWoW8rwACADTT5q78CbL",
  "key22": "JSem2WxhyagcrywqFZuWejR97DkiW3JmpRngVY3Y1Kejqi9HW2VfnGi5NPV9DLpjeeAw2T8ZJJVG78KyNBtfk7G",
  "key23": "4RM6kA39d4Y6QVBz6f2MkSa6PSaahr6zzXPuvfbHALgeVMAXR9EHfnYyriJWjKSoW22YfnXXauBBViHJA8ticbcn",
  "key24": "4hCy226j32qZSmQdfexz4LEaKKQuhJMaLTaHUgsMDV5G9hujNdUBSaW9Yq8Lfwi1RkJVA2ij8GYyUc24zRQNwKr4",
  "key25": "59H7azUPZxjfmwDNDcv3FEbA8NVfoZpBdRdGq3yn8v1rBNuy3EZZiTf4LkVRrswhvwobg8cXtBbNnsgtugi3Hxnz",
  "key26": "YuJ3UJdzjeua472A6t9KyRYm3SYyBC9LycavGebacmgR1LgnBcvhmqF18MDS1A7oiz65bugYKyu1iVnLnSptGoM",
  "key27": "2uqL8gXNDVCwRysxcoLt9pWvpTxsZCaF4tT7i3MiMiN95Tom1HFieHqYEY9zcGEvNMBfxhqZGH68QGnCMPrTmbzA",
  "key28": "3zNexV87dfNAmv7pjYFwazDyBchJxbHPgLG8pyECADM85SLhNput69LTGHSucTvFypFVdQA7ShKYbWoM668uVozi",
  "key29": "5Nty33soMHQ1Dz5AxHVbaPxkFWgY7YtsmKXLV4uGqaCkx7MSpf8Cw29TMBrvtG3u4SEWHjUiTW8PanDyrH2mL1ZZ",
  "key30": "54bcrDHWxQ6bJPDfzffs5BXGd78LFbQ1dbiPfjq2d4qZUEXMHcSQiCTyVqghuTMPZC6YB1bcZyBZdBs7KiqAZGRg",
  "key31": "66Mk948HiamCtsrmQYvcw3zvLGraHy9tZQ71TWzaRf5iJmxCyhr8k193UAMNRb9fb2ZNidqgAJG1cKEAqUaGJ38s",
  "key32": "GLzFP7kCU8XGG4NcMMFV4mJpa2emLNrrRvGYHxtLQv6TSdSg7pJZ2j3rnbCX5yN4qsgRVsxDg2ZxwFwb49MZd6E",
  "key33": "4VVEWwgVk7r8tznH8oFqDmiy3cHaBmfyiijXN8fH6Eoh417Rg651FXWzQLBi22THJ8G9bjR57jrcuBR3tihABGFL",
  "key34": "4KSDRevVV8S37CbFUrVkM8kaDzqPPPd2Br7dBstG9kXfint2QasXTVajenhPogiK6YwkB7m61eoCNWLiiRmC2Mfx",
  "key35": "5rfc1LDqEfY9m9Gt3SzymD2ZQiRpViENoqTnbrUyVDg4tUkki2cxVcGf9FX9obhaoq5dFjfWJVEzJgDqaTRHDP7K",
  "key36": "55sYuBKdpQwktmXkiV7ZsABFnQvDuaZoaa7rJnQtHNHx7AqXW57tpYw4VMWdfm88SFsdXwanMwBhud5Ndn1tnSyq",
  "key37": "2fHnYuqsfmeLtNYWwBpckhGFo3Y8wAMNFUPWqk1xQkTYBXRHsQqMgdpB73zeKqxSgpejF8LwsNaE8gT8X74x6EYh",
  "key38": "3efQFoCwYf5L9MwjqyETsheM4znLbRXoAL6zYTufhwknvrvzzTFySjoAC5VJgbneMnhEct7MJzvYQMrx9NFbhkJG",
  "key39": "21ujP3bA1M6bFqUQcjqMcpxBgaoX19bTDztSon9USqDLx3yh2GCCfBMgECcAUsZz3sq1db8w3poP7qtqSTLbkZki",
  "key40": "66cLJCAH1GtJsSYMMNjEozEn7157jEtarRbvsKPBnUXRudidQH3pLEKygDYXDQJ4gJYwk6sVVemjbbfSLhK2eSDd",
  "key41": "3mdbfZHr1mCeLxfakLjDYtAAdmg2uXYm9vHpyX7JKypdDC1pyYwHXZaGvgKytqsuqj9BYpwqTwiQdAFhHXgmUoYy",
  "key42": "Gw8nben4ykzswMeSqEEyM4ztuXbGYj7Rsi4E5XgT1mpz5QzXfGuGMmUpKK9geeEueAWccydCM5RvxT3nWFVJKKX",
  "key43": "4JVvkpu81bXYqxbduWCf1TiCViNFv6pqGSHLYR78AE8QRSLtzEfgWqCJi6xeGccdVVEEN3BvKbSfPKs8sArmo7Qg"
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
