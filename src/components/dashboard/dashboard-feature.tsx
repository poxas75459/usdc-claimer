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
    "2qhUTsVRf4LEVyCsZPE86EQCTc6hYTLVTXoCeEr3Z7eqxQFgmhPiEPFkp8TpceewFS1cjYGCSYJRBv6yCina4MQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iU5cz7esZXMHzUT8nYfhnx5WhYSjL4otv1du3eLu5Rbxqh8dAEhMvmD2t2C37SVrYhbg8Gh7prp1jG8odeuJsRf",
  "key1": "oyRsN7FsUCY4wDt8suaPcwZnQhm9mXjb4cqYNxNE3uWH1Y4wKWVzcsenQnheRZQPCKvgsuXS3Dcf4Gh2BY35eXw",
  "key2": "5Cy2av9SXjuUQd5Zu2tTY17YKYBXk1AMfrBdSGU1jTEhNpLnY5Jz3e1FwdGgSfVGwLrY8FQqUQUiGWYDk78ocpjB",
  "key3": "5thV8c7LtQA3ZXyCT5tEftJbjYWYFg8t6vPixqkdcp93NLa6tWjyA2D2ZsWX8xmiXjbBW8NNJeejUNueMRGhfPjg",
  "key4": "2mDvEoKTqQHosedLFDG9H5L6yBZxJ431T5TPzE6PHT9patg7SvRbxnoLw8pZrcNuFgaCEsVaV1fFJYmtxS7C8XRN",
  "key5": "4hYyyBEZYQfMuExPW4oruxFfv7y2EomEax9sVD6kA6Q9m29TRR7PBdNsR5VvtCQXQBXX4trNu7kXuDYF1UCduPSk",
  "key6": "4nrnMNcaNGUd9KZhTK3FXiqMVKwLSPhsCEDJqiBZUQivfw6FARZYoyy4ai6i7XZi3HM5C2M9k14MmyDk1qgsskWk",
  "key7": "G6DMjygseMERAaVAhYT1pxWiv4Wa4XN9yNk8zASHSmFYUQnWCAJxbgioKtaenAFkFKi8wpJVT5r7RhknR2qonZY",
  "key8": "4Y6rGCZs4WiaczwFps98ArKCiaJD79M9nnUsgx9rZcKrNgY35f9DkXKfPCgrwic2HxVTmwZtiQfu47FBp3VAnibr",
  "key9": "4sTeWUuiQJ3QPz7rSS5akc25f8HEz9RHsHTVZboGH6juzYounFM2N2fVLxphaU2GXpuu4Rv33Pob65rBfuKSRmZ2",
  "key10": "5wKRcekYpg8cZ9wc2kcsYtV9KND1o9TauXT1t84FArutHkfA138Ti7qdN25bqLQHz1Pnf1Vv5iLvTw55pkTD4fJM",
  "key11": "4XCXn3VPUW7d5TLhN25Cfzb5ZZrmMgVJsqxGAiSL5UMNksuGo9nFFtM55C77xuGLJYdCbMJdapyKFyos2BYPRTL9",
  "key12": "4WMC5GE4SctSUc5JpaFHyamt7tErgjJWe74vFQRzdRy2HKpkbGn1Rebf8jGxAAhPeoF4xdhkJJEaxCVDeijS9tT3",
  "key13": "5pp4vWaECAZGt1te8UYJkrKRbp8C2MTEgjgXdb9GmWp4bX1Sg4eZMGm41NE7x1c1LWhjgLWUEnE3WzioQtDiy7sk",
  "key14": "3UMkRNijhRA56GbFfRqWuSRrSA82nrq2tWKVLiDAWYP3HW6kQnhQEbPENDEwmFEwYvx3uMw16fukhNaXdV8hbUL2",
  "key15": "5zmdC7SFpQ8n1ZY42rdrqo1pc6nccBLXqzcGBiNBR1aJi3Jv49JCjp7Hjc36kgTdcZP3RzJVNT43UBAb4ohV5eiL",
  "key16": "5tbSAvmxzqUUw1ePs5ERu8adjkHzZUbUtL5cY2YpTCgGrZSLZQhJVADjiedSsrqdaBLMk4Ns6tMYbP9m598hq9Wj",
  "key17": "5ynSUBSFwyiJb2pBzjEWjVDfmjFXN2Ba9VDtgLraMcLJ5MgX3Epn8McT9dHuAZpLzHJDALqDVoBeJDLp2Ws1htD7",
  "key18": "kPLaPbLy3dibcx9dk7XpfRcTJJcS8yjxxNL1fhrVnBjCUX5QJp9Nhs8Umqt2xbTXPzhkBvas5CJkrAYwbdPu6Z8",
  "key19": "57Lrpc87fZmYcpcvsduLNcbDUXDur1GKBUS3NRKyxQrveeomJX6uFGinfbymjCT482phbNEd2JXcDCn337wuiTyn",
  "key20": "66tbpNwVgBczStwkY3i7zYXbUwWxL2TULsrKgpNXq8VSKUQVNqcKy43Ej5Vtv2rDxVJ44kKfsyo5kYM5hSYSk6ZK",
  "key21": "5swTKENxfVHb3uuQitErrj2RxeFQe5aJg5A6gdCbefbjHqLrtkSgcniDpEBuQxRTsvjXK7pVU3FxmeX1jYmZpTBC",
  "key22": "4kPhrEmJofE5P1zbz9Wi9NdXFZ3fthc55DXfjcyro4cuRmx6AzDt3WzX1PJxHzRj9VcDqHgVkpQjUoaymQEn9Sk9",
  "key23": "3rtZGiD7KfE9yEbcH2Fo45qF1i7fcThENfeW2ej5WARQDBezKT1tN55YbgFrAi4nMF7fwYErXXAUgqFPmBjSxoc9",
  "key24": "4DXiqtHAhf7oPuU8gdg2eRprfY3hme8J1aKssvLywe2mVXARTimCL1d9QBpUFwZNwjfzVwgf2AXwRjpHPC42Xorj",
  "key25": "4947hPJdZLjda6rwnMjoQKH4vWvehiuVmRpKVoaRLnmAr4r5V6GfoCdHJF76myNkoZWopZA3sVyr5RWzPvMuTRMo",
  "key26": "235bYmAfDskFfgMpVw8AGCHMtQndsU8pwQ8iEF6qErTAbZa9HknhVEarMaT5m1svajRpXm1MbtBk4TWxJyznYEGn",
  "key27": "4n4d5uVsVe6TR7Ewh9dt84GV2vG6trwAnYbwMce9yBnGEBpPbtSK2boSAJAbLmj85s9AcpWTbe6pr6XYkJeL5jza",
  "key28": "5mr6h9nZDM1YmknRabdStfQqSJcGX8415aubFoiCse87phHtgiQhzv2YVmU6fFnKSxmbdZtzfmyL1r9SSH6EY1nM",
  "key29": "3WDk7tkgFbZX4nPnzsy7tZSumSgcJUrLLxkNZr2hFSAKMzkKNF9S4e5KM5mj86VXfF1KL8UHFtM7mAf67H1bMsrn",
  "key30": "5iUQqndPbZ1tPjbtNU23H5C97BDv7444BT4wyP39XKZiTQJLS4oBvxjxFXyhcdqWB72tPgWo7kmr2DQcv9wFYm7v",
  "key31": "3F8NCi2eByzXjw9d1xgtn9CjDrwN6RXXTQyJz5qyKYovnzJ5Hvn5oMFRARXV5PXxcnRvw3Xq6QA2RmWG7BQYLsAj",
  "key32": "2RrZgyL9rvq5q4WTMG83Z7kHv3eWBd4Nt8crGraufjoyWTE3FrM6mDBqaq1GFtxEgNPfpgL3UMbZJXJFw7y1XLmo",
  "key33": "3ZWysgmBwtxBwmXYXQ9XWbHjSpkifkt2sbpdV9EjQShvfKooNXrHa9uKaU3wAhrZq8NAeTDGwxf33RWZs2mepqSM",
  "key34": "5D6iF8LASW5brJvKkERwtgdt6iegF46YVe8ePaMGcAgC76Lz2HwKmTbnChE9hdB1XwgEeKySxqMqB4SaCoap2dZ1",
  "key35": "YySEG6HGwyPLuumVimeAUmPCQyCuhZNZq6KxHKFbtAqLD8PUSfK1vxJ4PNDRv8FGB23hPiVDckG5jeeducZJu13",
  "key36": "9JXi2Fk2TsGbxEe6Gx5P1QdcDX6NFTErFPNxjygX47RN4tTHohnKyMwSogenM1oQwQ7KHPg5ZrATtx7WZeG2PaW",
  "key37": "33vgMCXatPXrhTfyppzwYkZBWMqCsbijEeZpnyqH13LfLgutYcwgDnLfeH9gM3DrSvZvBrsexPe8Uocaz56Pix1Z",
  "key38": "btrMi4mVFqKeHBzirSZ4EgJG6Gi9LdSi5Kv5efxfmEKEZVjf6CFCoE7knozEqEgDyFnws6TpU55m6CzWgPEQJbs",
  "key39": "AorRNF75wCZP3wzdCfGVsHefsBc8gwmnHtBaG2juf33wGA6Ma5BGNWnzJtvj5RDz9HJ2ktQ3dfMXdfFXCKLF9tX",
  "key40": "4qaPL7xKidNZmVg9tZdCNQBfgB1SCNECnGox3BjHtE7bYDBTrsXJwt99DzCpyVfS8tCMpEZEmfKmAc14uuTnXBwy",
  "key41": "LFf9hmsRxCn1tNCQLPfGiVfQRUCHbMhdvN5bRghgTsQbk562c6ikKAffH3ZT7eGYN9TKj8Ru2kBtnhkcfu3XDJq",
  "key42": "3hSZhYxj32SfibAzekzK7FzuKT8R73FHRdY31a8xJuH7H8F6skPyWPuSYdLvLSWyn4tN7cisSSAXtKZjPAuwroXz",
  "key43": "3H58rhCDvnuDFvyY3nVfTPjfMK18pohyWvXg9TXcLGRNHXmLsYHhPBz7L53RsyAPk93YWG2bE74SJ7xPmtzmnmZQ",
  "key44": "57yjHgBp3sEyoZj5TRaa9ZD9dJYHMyZqbkiSC6K7wRPyU4TaD685YVmCuhm1mGsQ6zan3umdU3hnmQqgTenZw8QM",
  "key45": "2dySdEzSVhCLS6jUPyh4ZBgwd4qZMgwqqsrqMZp4rGFXkb82XTWnkyvwxjsst5bZufLmbWTdXRPYeWVrwcRorr2K"
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
