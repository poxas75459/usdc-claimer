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
    "4s49rWK1LvrcfK8cFubnxNpcwHoZz3eVBNR5eMfF2HSAJDoV8KU9xAy2dp5TnCboY1zwfUBJgAXuKEWBE1atvYvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HiftJwjX2yqq3e5qy1uq63iZKUKksXtGJev64DzB7evkFXL1JPUAP8e4NRHo5onam5wmiJFFnMWrcyxm3uvM64i",
  "key1": "4f2bgvzRgYWiEJ3H7gn3Jt3xUeMpKp45xMdbTFAUKpsu7a4d1KmtJnGPanarHrjgEepgbCVBEySVj9NgwEiG2Qkn",
  "key2": "3HFRDoK66fcpiCWppoSeRLjvxdcA7tAmNnR1qovdc4cqUyTX3gRfBWzaZt2ca5k8eTGSVgT7qNdXqjUcYHwXwkJp",
  "key3": "2xNF2bMA92SEXeW4a3BQVo2shZKgD34SFmyU97C9QiMtDbCUtKG2NJuTzTMDQ9qeN7ntEhqJD8gWpA1dEzxYtwTH",
  "key4": "4qYCFbhdafVhyYbCwKgDrGuuAjWYqXJHyme3qrfbVhciGcq4xL4ckmVQTKTybuDb4dRBGucsk1hkHJ8DcNXPRfgp",
  "key5": "5RD366HmRBM6icmzCNh7ghUBgRMRvMM9rHbs5Bk47xH3NSkEtoFdz2WNePtRXA9kRVExFGFmhPc4zPUyA6FHLst8",
  "key6": "2eZvpYSkZh3byMMwUx4s573zDauETjHp9eqbPLbzsGgVfcEnFhyHReEg4smPVjofYZ6uyQMoGxscr6VG4aTtgQho",
  "key7": "2i7j1B8TU9aexu63gDnRonsDH1jiwLWwBDyVt96bBHNXEZ8jNSyoyVpfumQenPH3k78VChHNY1Vt6mA26MKHiAUH",
  "key8": "vLqhuDB8Gwm9LmoqZLPsse2PD4oTRZen1gVigjwETFLhwTZEFuURuv1QLBD4vDz6FCmMib4obzqJm3hWTvUmeGT",
  "key9": "5ypqoB2jddSsDwyDU3pCq67Tkn2qq7L3vepBng9n3CGiUqG55aLirLhUxXbWdekcNftMvBENgJGLxGvfQGPrpURB",
  "key10": "9bZmaLYaAojK1Ajih55Noh7L7PuMxUi2nXE4QCEXUvXi3wyRAurbXkPDc83uPLeMYNZ5NSc6WtLcY5vitNhndY8",
  "key11": "3n4CyooAVJAHERHVJ3dxs3rQeHE8vgUTLwJ3wJG3MnH7Hz9P7S2nkKzbj4UarAqXFTqV1qRtUzdTuaNLNx912VKC",
  "key12": "4qCyet3Cjw1rFu8boVCdxSMBc2AGXrv8JvokU6SsCH7WMrsb6yD9QssjQ4Jwe8XQ2EgkkL8jiycm6ZMZxztsLYGh",
  "key13": "251Vc4KgQGhVhYehqmSCHdfXoZFZXzQKemZCJKMd4zMF8iKZMDXXa1H13XGtpCiBUNnejB312a3XTsBHPMjfffvq",
  "key14": "44ZtwgS3Jz67bpwEgBCfjvaW8QW8VGP1XJU2vzxCqKvX81VscK8j8KTstUgLneonyhRRmU1v5AbDrEbAfjn8mxVp",
  "key15": "2rwU6UCvS88gabyhjr7jKmJeDKf95ZaRUAnbU6hYCgzLtpvfuZDX62aTVcTQypNrkj1esPwHc4uo8i3WS5tKxeAY",
  "key16": "2Y6pd7fMoiRkSZfwJtW5ykGaW83GZu7Y7subcoWYUzWz5n9KotgQymHDV2B492Wd3C1nBVa4YxxsvS6TzD3MwXNk",
  "key17": "2YxLiYUKYK7gW7xW75qGMMgtU2r1bxhSbp7aKDEtTnAmGYRLLdSc4TaeAGJcuXNhwZArziQfncMkX6mPgk2cT2rP",
  "key18": "4ZcFT6pzskKgnjNogjdt2wCszzqL7cK5ss9Vkicwg8fkQ5rQNS32nbNuNvZWaB6pG57qov4EdbjVkuSnUzi58XHN",
  "key19": "2KhrKsKnpdbfJfgkvN2MSQH7sa1WekA6kuYpmD1t4FitpNbXwFG6CaSNn3isjgkd8B8pj9Cxtg99Ft7xTNkGFiXg",
  "key20": "5PVTjpGnChekZgo4PzDGZcmvpAQbthoj6GzEMDygSEQmeUPbjffE4ybrYzxnHnQj9DfjPvSQmkBs3kaEokKCDkR1",
  "key21": "3ApSYxsPzrd1hf4SKncq25Xns8hpUNk68cxX5HtzfmgwF4kGEnCyHBoVVeWphjTbS2zY59HTow85p9cmK7vPhH4C",
  "key22": "5FULNCqgj9Jp2uiFLtkWuyBqHpZwJGxbGgfuKubdhrs6bwMU7Qvq5udCDiJVTURyGZAojLFtrB7nWFDzVgBifvey",
  "key23": "4SG6sD4KmDFm4EQAPaKWAJwSJKLn67UnFVKqELtSePZV7J5sB2PUTTSjBwdfFu2MebRvUACc5VscLmj8b1SocfKK",
  "key24": "3vjGe9E8nQdhtqp1V59EnHewoCUZsptGPJodQyoMhvCmhQ1YkAaLPF7pDdXvV66Rd7VGy5fBXtHEtvdXHxFe49S2",
  "key25": "VbzeZFDRMwqPFwYo2eirqR8fakoDnaZRK6zYPfUEY1wiY1zfpDxpvPtMcdYkrkvKfiJpj5k2rWmfHVymXJsGgGk",
  "key26": "35SFUm7p5JNGiAfojKUcGHQYdm9a7NjTUdfCKtchp5NXQCzpMtJh6JWjqndg9kHHMqA1q9JdvpvB24PTK9JaKLv7",
  "key27": "3d8F1b53AhQq2ZGXiYg4q1SoA1v1u4Nfx18j4To6ipxhRGCsWX89on28GkWjo1ytwfwwGf4AHujNESaxCpDe7NDS",
  "key28": "4vSPJKn9QbLs6eMw1HEMjUaayGuv1QvfKaTxHYSAvTjFHG8qiZ1vozjACifXVegCGQuBQbuVJpxoWyzmK2FquKjx",
  "key29": "NKhSc5E5b3kiBqZetyyLREN9jF6BVQnzJ2sq9XXmoHhaYJp8H3SnFdKQHpvuHUFY1Pooi1refxXaSXoYJ4TDaFy",
  "key30": "3AANRZGDTWC1jMobGYnKG9ejmHP2X2KE8S1pSenr1uhyEofqQ3dAVcNGnowUACxjyi8HYSqSanTtTBfTX2y7HVf5",
  "key31": "2Je9htLAb7EjhFcMZ1GPBfwrXW67tSLjRhrrCAHrcQoHXPCu7yt3KKxpSxnWyK6vRdbAAd4L4gHducFjYiwoZXx6",
  "key32": "2eqrhrKwQEyQNRkhymEP2ssHkHPqGf2Nc187jv8AiPBenvvacbbF4TAuNFqGh5YoB5BZqRvw9beSFeQTQA4zDU4h",
  "key33": "5TLcpEuqiffdYkzGNWJrgNoFd3DcKCCSN96gvBCEThpgtrzqJdUqc8tfC7CJfy796mu6u9dMHt5iLJaDnBa4Rt1w",
  "key34": "1XdH4DaCk78QLDwpPsbcwHS57QVJK82jjD2drZbvAHPCiZFoDzgh8pAgJo9uPftyhGFkVbPkQd6FJPU9tgRxZue",
  "key35": "5uKbFLPbnRBqafHL5zgryu7nCceDrKxh4aVvKP69xCsr8Lp8mAcXUcjDxNFLnco7iQcGpc4fAim3xe5heXCnY4YL",
  "key36": "5xf2KH5rKBcHpjS2UWdijQsqaAb6gr71nwN4Z2FVgcexHga7mbZjMNcefggc4EZyDmHpBdKMoRyxY89ctwZcUKHA",
  "key37": "5aR8h1FUa1HXhZeRUbPAW2BQqwGeDGFL4efmSFubePB9MGQYJagzG1aDHtXgHWVMsiJ1rd4rw6qLCoqQ5h3pj8Ux",
  "key38": "2JNq8T9ScajouXtLJdTpxheY5ikzezQWP9bjW1qEEFGp9qy88nZtDAR4afVp9GoaxEKbwREhWtt9SWRHmSydVKF2"
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
