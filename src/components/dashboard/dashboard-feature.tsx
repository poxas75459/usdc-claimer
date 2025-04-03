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
    "4MuQy7gg2cVaRSHg5KzXp7P8s4jekRNhFGrUeHofV2Jo1VJ6Z2vPZtSSHwuaSVVW1KwKYXgPuVAnYX625M7bxPaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtsNg1WhMfnbLH2vzNUK3f9HjCRhsJLCSJUcgk6Advy9h9gV3VUX1yzjD9Pp8pP2dE7Wepxqr4uVhjWqT4i27rp",
  "key1": "3PSUzjjfq6sLwtCmDJLibHgpqrw7txxBh8MFEcWdtZw59PUeWqtaYMSFy9ewrj7MBPo5BrxroKmTPLMqnkUDtExx",
  "key2": "5izUG79fStKzrhtTSHN3UDdo5zcATTQoSpdTcaztoo6BiftcJVnnwb3otqjnyNU7RfkK72p82gtxSe9iKEvLtdhK",
  "key3": "4fD96DafHh8REocGXmFvrBfsTtdPb6gX8pwpCQoefKGNrTegU3KLKCpqKvdsmYjCUpFkyqgJvFV3qyirrtgaVzX1",
  "key4": "568tBd9pSyyhF8bzYFjTSp4uizEZfAr6o2DfQcmqk3rBH73VkKMgUFhqCezANwJpkHXCWMBPjrApVjGzDqGtMEjH",
  "key5": "2yGwaHZzr96j2CmCN1xMkemU7HTMKjgh7Cvnp2wHPhxQavNnDiWmzYX4LKCdnMoDX1oHzmaWVr6XVg1kPddjAJHG",
  "key6": "2Z61y7h69L5iSZHQU6v55Z3efmcCuPToydbx5iiqoohsATRyD7efjD667bFsaJmvxphxwpGZa12Az1FXGcUnk6ZU",
  "key7": "3cpEJhDFzMU94szCunJK6ydvQv1JNZ6h9nHkwR8GcJ7UJQAQ3N6YBG8ofJ9nBpr5bY7EBQtctDhMUfCAwrxz2jLF",
  "key8": "5JQBMd1dwgYhigsA8fFKSkVQi3LqfR6mQTforzyRAmsikT4oNjKtYGJBCDbw9d5MZDNnb9e5446aThCPo78bxUFn",
  "key9": "4MSTDyPLwhEJ18M1RccXLv3EvmBQ4RD7VejkAZcApycx9U8PTHmhVs8SmtEhhskPztGXDoi3mFvLBxq3FVgNLskZ",
  "key10": "FNpT9pBDWYWCpzhS9A9ueLmfaUXpCKCtaz74irSwn7FvootdMDARPCLJPsHjZ5KaH2JM2fMXJMgFmbK99jfgM9j",
  "key11": "5tBBtVhDHD5shAUdgSD13ow8TR3jMJ8q4C51fnT4kEbMQNvEyHRnqYu1wtkfPzD5diY6NxRyXCMyhD2VAqDxttjt",
  "key12": "8eZqcd5iZRC6JMuULf1o3162rM8vxyCjQBmcY2Dt7xe6QWkB61q5jd69Wx15JHZs7bTeUHe1ARACfasiiYGCiDK",
  "key13": "21hVxQk8AVNNrUt1mCPhAKvW166anJA494fiESUKHwhWnCBy5GYbGfySe84rbMj6Uwr6Ay1hHNeEUmjW6Lhp4WHd",
  "key14": "55HLo1mgtrx4WmigXcXYyDtxXhdksC6iJvXm8n8Xy1r6747givT37zvqU7BpeLEwLUUEnXJVVNGhVZfL6vypfvVr",
  "key15": "26rn15Sb9L4DLWSoLArfWM2Zjqv2Y1WaurYKtxL37QPEfHCGMHRKr1dp1GCjvyKTNmSqUd94JMkQdWpY9LLzYNWm",
  "key16": "2F8uHZXF791TuwUpp9D9Pgt1pHj7SLGLaYgLnvUXbU6HGaGAtG921dSzShZ3CcqbbtpMJ8Ur71CEG5HYPMm4G3i8",
  "key17": "4YwjF5vYjE6g4wXa8Z32cjwPBfsJcKx6CTreU8ShB7tKaqvoyH1tZnUd8iv5bWmu6GP95wBzqUoin48L4KPxp5h9",
  "key18": "5QsLi3As2mPkygyWEEFiyjRSu6iYG2Ah47AewgZxRCPqP5h77r7aWFWXcNC74U2VHiTKcZ5ozzjPztxKyJq7Spp1",
  "key19": "4QMQeoFhK9apskBzySVJ7uPcSEa1eujtFGdiNS3f9xQftTmojAMQHZhjb1Wom9XT43Yem6y4RzVpjLjTu1UpVj7m",
  "key20": "3Zqtqr1wmXgEaQ72vMi46XAPvjdcTw541oWePXrZfaxxVY8WkAYGkdTJQq44yZvpa36q3SCPbj1G7VH3wqdTKjyU",
  "key21": "2NiZQbV8nfpVhuoKf3ZxXVkFcg2xHMffGx4ut4P4W6czF2FbqTUrfxB84WU5aZFo5FDwUvbszEHeurhcdjJiAaMd",
  "key22": "29PJiF15uefDmNZuAeN8wgXyNfJrSnvsvnfD29ANxzXkWCWFyBihkUT4738Xn4c9g8N64umyHt9DWUcDRJq9oyd2",
  "key23": "3yqyQL2t58xMxSLfvs5AG6CxFbZMK3np9fgyjfwdojUPWPivnnVoc8vAbxDUP4zQwzEHp12yekc2naDEU5tvCx4K",
  "key24": "5hiDbCdKTJKcmLnd7qJrDbaDNJfHT2scE3SS3zrwVts1uhMKQCe3mT6gMy2xmGxuiiwQPgQ7YTvtAwqrXY1m27qu",
  "key25": "4KhxyPca9KT1p4XV51hLQ2FC8zH5Z636TP3TYuQPeWc4PpbJ7DRFYiMrtRU8Z7TJ3CxfGSu83nRVb6rSgyNRTrUW",
  "key26": "52TkqreqiVkbhENjFdhDze9Gmmy7sbNCbAvzNeSvM3EgJQXEdamKN5FKm3zpZwwJU868pCsUW3amnYzYUtYn9uNr",
  "key27": "3tx9X8ciAzHgPEFMb5wBzXWQHy5LMHEvwDtFhvq178DpVS1rh9PYKF6iTyGUQBk8tzHBQbYKZU6q7Eve7pXv4fqR",
  "key28": "4NTPA39yLyKgT5nQmgeMtENZqvZuTuztatnNW9BWGqiWufZxui7r9m3hCkgWZKNybswFYLV72A1LVJS4SEGTVqSN",
  "key29": "b7cV14tRvRLPwtYjzFL2eZXKqMUNBhDK68mMsut2AKJUWsim9YbwXLYJzsyvU21oNvZygkpdCc8NMek73pV7EMc",
  "key30": "294ToFkwmjYS8KXemQhRmbEQux4jGbk9sLepc1tqX8B65RhtrQ1j5EM2yKDJMkn3sbepA4wFMnESz6e1CbrWUzhD",
  "key31": "4uj91XFisUkQ7Qvu7tVPX13LHvh1zCz82hQi4hC4SP8L6rdDbRsUUsngDsXvAMDWZJK2mdrzqgQX1xkknMLsqjsP",
  "key32": "5NWiKJSGCtXZ5ueKU8diskdsN2yATG3mP3GioCEquHhnFqoyT45pUq7iwu9BF4kD6TEGx2kZSsLsjRMXoh1Ry4J6",
  "key33": "G2DFFwrD64CdVUn44aRUK86ksKQPosLVci9LrkcczaTpFmX4v8g1zrHtVShMCS2bqpceKP8beNpVRw8rqqT48jU"
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
