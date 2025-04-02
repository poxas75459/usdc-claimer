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
    "3vsGwN9jVnZrSaicJxNeQnKsWWEzQxDYUsaSvFG66KMqd9Vb4Buq3heBW9XxbfBMpocB8bDW6LzR64kJLoSDhWTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d9Dg1xA4h7o7nK5PeQog9wZ9k8UafQKsmGur2mgeZKXeYuYJXwWToR3rUX3C3RTM4RehQg9K8J4Dntzhurvsk86",
  "key1": "37afkdjmVHh4UUWDmfqnubohfHw5zjkJCEUxkeU9KiBoAhXwYM2btmLZ3u1KMDJZEeD1qfdbPvDb8tHbYNnFBych",
  "key2": "4E6mx89C9Anoo3dx3yNwaFvmCrtf92hNBoG6LWXDwyd3Gq9XixQaLhRceBJFEqJSDtbKNLWoXQGL8EJsJJkg8W2c",
  "key3": "51EptPohZafQ3LPZCsjckQLVQLcoKWF1cXKGZR9nRxZtm4qSYdfh7XfqTJfnCwsBgNSeDR7y7HzhFnxN9BQAnm3q",
  "key4": "rWGmVoixsGDo7tm2qYLSqtQMSnSopyts6HWRCrU7zHiUfso4AB7tfZKuFsE999gL3ca1r5YmLrHdfss1BSSXq8G",
  "key5": "3XZgjU95MXNmnqDMPfhX2pMpUDgMmSFVzWDZY9QuhzTt2TH4Yn8pKLqY9u8Z356WmAcJ65xT9AKzq5tWBMsY39dq",
  "key6": "3t1GaNYb53LLREw3KA3kRgnH6yX4wPCkZqSpgdTNbFxkhRHyxy9cxkwnJdhGwY2HrDsLmuhH5pxznvB2jH1Cogif",
  "key7": "3xfdSBTtgvVDeSemCyRZTjcQrgAPYXPZZQDYzdbTgNouYwqnb9vCmxGN2uRS41NKCftqG4Z2dbyyMbtzdwLg6VGG",
  "key8": "oH3xDKMSsr14vAZMRcZLCZdXRACFsQtmXA2s5YD9iDn6iZzgLk66Vv1uh1BbVUUefYNQUaDNvVRPFrbMsJXDG8W",
  "key9": "2pXJ7RAyqbszyXpezLkZfPJk6yKeCSThhWEuCYh4StQjCdA4cZjvjSw9QAZKwiWjWtSi6T8SBcyG2kzRkCuVJx9g",
  "key10": "4bPAfJaP7x6CD62SCpkPAFs6wyC5Rri4G5NaJEFqqregECnhjyvkP7jeMpXMbcJrc4jAaK3kMVZY3fhWupTctuB5",
  "key11": "3mFYN8TcuyjZpqnPsHqYXv2cevrWmtH2E55xmTDuy53wj2rWmWbNdd31vMRGBG5fr7haKUfAZn5PE5rHJmiMTub",
  "key12": "2znJcSMcJRtu51S1dcbWSLVbS3tEgMLTEbpyDRWw6VnZ889XtaPCx4mhaRdXpdnzya1aUw8xVFxpSTbzCoSnAcJb",
  "key13": "5EjvzHdwbDTJLs1irHDqCTaSt1PrawpmY8PGZQb61B2oBBuRZApz71shzrjw7MB19BHWSxKuJ888pJEcePcHtkfx",
  "key14": "3shDr1n29tsrhBkDqcVviegDjbibLgG8tF7B22NiuviTK13KTiG3BS3wQgo8r4Lut6CyQ4E6uXrRnpjFychcDLpi",
  "key15": "PszVsmkx762rkwFbEf7ZeDF4hDezAVBqDNUMDfujKodh4PBePvpwTjPGUZZUj2yPCUWDdJt3oeRLMdqyEzqtViX",
  "key16": "4JpAv3NNhA8f3oGEkSsg6JLRMHuKfkh9nBG6TVvcCbdRDVZQVtVb8hkxaYAGcG6vU7iFh2aVYF7K1Rp1QFMQ7Gxj",
  "key17": "65ujWkzgq6gL5PgvD2nkkZgB3kxQgS5bmCuyV6Qc1R1E5gFbmzuXhbTXdtAvjJssCdtWoaidUwe5co1eeyMMN7eu",
  "key18": "4gcUSQqDjtm6EEcq355E3EGEs5Ex7ubdxcUVjfuRDqwDdTDehvovJfesYadb2LUtghyjLNMwqBUBmYMXGcij8WUj",
  "key19": "5B9buLM1L4uai9sMHDRvja1GY7Nf7QyZFSYMdp8YDRu8oiPeha4UXvf7Bm6MjbqPeKn7SR39sjTRGPB9YJRVyvA2",
  "key20": "5KtJ1domu6CJJR7tbn2oDGpyFVRVrK53KzxVFm6WaS7yFXeNf1mXbgM16fbEX9bZubUGAN45eii9VDjibgJxFN7c",
  "key21": "4bj5vP33UrJXCcV8TA3Z9AoeYmDjMkBnWSbCDnNCPdkzQL6EeTo5SnvbYrpqmziTbTzUo1rCqA99nkYEfxMkjNBL",
  "key22": "yTrKPNxEtEJ8d43hTporHAeZK42f8e8qgjEhXwGYqovP1ZMKXZchybzvE8vmSxveqmb9gEq9atNRHiyTjW61DKM",
  "key23": "2pBCMNNfUrzn9F5PVF8WFtrcbgrT45DWH2vmthifu4EUMHen6WTymQx69YnjpqGnTRFy9sRwU9DC8ELHM6q7ii5e",
  "key24": "4EnPkTGHvwTnBbesejKE4ZvJgSpQdXyUAh7m39vYm6qe2FxUad3Z49xSvtd7xw1h5ebmRCnPPL26qThzxVWq1Vsr",
  "key25": "5sefKfNdGi58J8xBoiyDp2i96xdwD8YGPq5AdocgUmdTuMmjqxe5k3y21vbzZrqBkH5ASbDcuvLdkqb1yN8u8Tmn",
  "key26": "3HmKh7XyVAjccG4rDg4M7XSdYjMBaZDWv94wsiNJGGLMw8mSYicKzRco7Gs5ZXVbySjDJSGutoSV7kKgKAzvMJar",
  "key27": "64ojM2VAh5jtBr21RPhoGahK7CSQpBGrqM29aPDno1MTqaRoP8Y9YqBCba6vhLwuNkW5y3KySjGXL4RitHkwMyn6",
  "key28": "28EDN1yCnxPrMFERp7SnkpSxo8tFuAaU3dCU9CzzPaG9rKEtjLRLAKV7QA3kVgiy9nHxFFUjinS8UA1pT5hgKRm3",
  "key29": "5wbjhC2ywhn1qoVW2F7pNAH3R2nXqTo5FfnZ4DDd9c38FnkpVPsutmsgW2aSQxvV3xrrqUTQLmaqawdDzExZsTTb",
  "key30": "3sPDZ7rP29ApkSMWoktQ8qLB8E1xLCVT8kxLBWY5cZcPir5F24rsxgomUzHjCyJ5CMTUSXb8TFKYarHPYRjrNmVN",
  "key31": "3rF63NUcNUKPrnNALMhQrhcQs9VWpgAWaCZzqGM2iqzPxCqzf8dGMUsiQs6u3PiQ6BKi2WM8dnFUjoNrDC6fzi3v",
  "key32": "2FKASF6Jk8SreUKMP2sGLHY5AUP6aR7W7ikZKd9b5KCLnaXDJCMiQmHVyxCdry7GCPuubuSrzfhC9bY9YsrDcGLB",
  "key33": "37gWz8nPtgfDbTYDzLc3wMMKc8ZwAWWfwNJ1L84QbJSUQWg1FDRhfEYHqD6ptdqWtE7wSehogK2AAJDvBU2tvDYX",
  "key34": "2vjDmhukxreYqvN2Pinq18LNvhFFyHkBm1wiUw9XqKhCgPGnHvGRuKUGJit9oPEEkSZ1Aq2ASxYN5hnXeD1yU2fW",
  "key35": "5eAhw4sie6wcT3s2fGZopvUJHoSVibMZFQymQXiUHWAYjpvAV978iC1qdB2Bba7615GwyTkz3kN9tJCjShGeSVh7",
  "key36": "4icCxKz3ekk92g23Wf4iizjuTGmf7oQc45GGQHoZ7qZrnKJYjHhYNp3qRhcNuLNBmGcziPmayYwkDsJo1V7PhaUS",
  "key37": "2WDS8kGDVPCGVDe5DwZTi3yqs9Bj9NaSG3w6tL8EdAtuQDmFZ7d6sB5Ts2qgAA5vgLDdn7423TD7wiKioRL4Akvt",
  "key38": "5SRLzb3pefeJHnt1BjDCnNJCSAS9hcfznXdbm5P8aVdim1fYhVZDoo3LKJU8bGnBSeQCaWBHDDsKiunXMoMEx5Sw",
  "key39": "Svsky6kvGUC1Doq8tFNQBaGoj4ySvQRRo16FNNsuA4DXiCQVbF3zQYBwAc5PXZJ24QK4rp8mMG4NHiZkTBsoYDw",
  "key40": "4gqWoYuaLcfNFbzmMnNu4fseBKedWoWgh5g6noRtPHbhAvC36fk5hAdv1BL4AVv3acHEYFF1wYkwD46mgDxcFEoK",
  "key41": "45iM5aLPuKUNQCQckRkZB5bRJzHNLs6dngen3QugktwJNEB75CAWAEWKTDS3MgTmgXSfutF2aSseEFz7D38QMG7w",
  "key42": "62393NTn1MPWUnXqWME9YmGTZvJDKTe36GPKyJCRDEvsMMGEMxFnqHfyEdPn9Bx8mVP6jrawd1LfZ3cHh8rZuwaz",
  "key43": "61yW8Bru94RgSVhCjgHegAntQk2cT9z5nZXdFbc2utepuwS341Z4jTBVkD3CF9FSHRnR8DGSNkTqf7AbJDiornK9",
  "key44": "5zxWa6X9SeFTgFzwGpwe8UCef1xLKTamLskXYTZYWs3ExfQAnJvvYre1wvokzWU9aepDpJRx66c9eQB4VjxX4sbH",
  "key45": "3qcPFAGF1X3zsQPD1sDYcxWPJo7XsVHtGD9JjLy72FjtpEsXxkT6eCZXXbGvmdRzwp4qbEQWLUGYXLCDGRsJBija",
  "key46": "5nQXREj84fEEeTvtfTZHp9r9Stagemv7UdDJZK84NsKmQvYMyCm4nnWkxAuzyaBCMHvGLvYPsqbdFcoHEVS6QRh4",
  "key47": "4Rko8FvBPS6ofjpqDLSrSfEcSMMgVN5jrStNcWjALjySkfCrZZVbd3ChdyG3tcGZSwoGoXfVuxhBWb3zDfNKabHs"
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
