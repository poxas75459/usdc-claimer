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
    "2SFkMSgyZmNdkG8cDskwgDcn7R5wcja4ppfUdJNfv7k9j6xZtXGZ22isKWwTvWgMqNMMTW9TD3VRRujJ58xz4YYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59X3n3XxBwmCtsFuEVmm1zoU7zVVWMK2XW4LNyamgH1p4ppPGx211zSMwkibD9KmUBnU3xJgRSdVLiojVHJhLCQu",
  "key1": "4MdBT4BZZHTwN2teXqDBmuqMVJD8Fj2PF83hCKWGYsVLZbXLzg2dzLmuqDbHbNVS8d3W1fvXfDxvHWhZerFwR9gx",
  "key2": "5aAXTxJA15wTdfy1ApqMLN6yLe4nvoivzZe3i1teahqpfsoxLeqmCxUtT97v8n6WrPFzqHshRMmN3uuQENS9zSoW",
  "key3": "3abVFaGuzV3V1Z5EwoiigouwFTtzVKhw7iCXTXA8WFGY1pXkeTMwjcej2GXkBBz46gpTzxUZw29EwZaYAAVkWR6v",
  "key4": "2vrCQRUAC2PrD1u1kSEmPFpdWfsWrF3u8Qnq7Z9ixYdc4UTg8moHHAgeweDBAsBsHosJEgzFkoPDiNpbJGwJDibu",
  "key5": "4eMhwxtJFV9anJELq6b3ag4vS9DYvBj5wggHQrBDZwjjnDyC5cxmsxiaEXRHDFNUg96K7BPrZmsnHYaS1fMVMho9",
  "key6": "NkESxw7xqgSmY1qfzXsHAThqhB3c89ZADGoqNDeFeE1fd3Qs72eXPF4qVoGxJ6yRkTUKJxL9r9nprLvbUsHaacM",
  "key7": "677YcaPcy4HZfeahhEhejd1SUGVQvucRzyfgm9W6PerWhmF4tFAeCMsXFwtwo7egjwSf8FuEanPkSbg6mQ1SW1iE",
  "key8": "DS1iHpTdtnRCxXkhVWTu6fveJ2aiAbeM8TLbBU3UmL5cqYU7Tgxe8VaLYhmnMCJv7sDSZHd7ajpd68nbgTjLzBS",
  "key9": "FxmFz2rG45WooDAewxKqBUfcoUfTKmsqjQ1pQHTyC8v1emzKPAa1suwX8KHWh45e76vJRMAwnuvDzumM6QoEofu",
  "key10": "pF6cNC1bmR6nCsTSucSm6TybKA8foLvXhkb1MHhEkrUZBcNPNuSNcRmnhnYL8Q19VcsTFMp6zGgRXPM1QV5dW8t",
  "key11": "zMSABeakWUxMd6FApibc4wt92QPdUQsFr8GtRnGnSTNspXixkXSsQEAKfHezoAwUGg94Ha9ZLeWMM3xLjZBW3qu",
  "key12": "PNnJTnkkqQMY6TiFXHNGia4XsbyMeKk26QyiV27Pr5VHzQtzthG2V53jEtQktqR86AEGK8Hb4Vvn8So8BTgLU6Q",
  "key13": "3zbTaXAt5FcvsNiWgxhUakDAPcjps9GjLBU9YEU4riMBkUyXy3a6mAo7Vhw2KvSqnckfqhQApkSvdjKghnJGpi5q",
  "key14": "34Wsg6yXVDqQNjVhCcbuYHzGLmK42HJEDmtiMbzDJ7sj7FSLi1WUVRrAHj4pipiPk5pZaPYnUVTJwukYdNFFFsbS",
  "key15": "2ezxAm9xgmKLPRGJo2CqF2T1TUC77MT6ywEVAYbQnMDMVNfP9UAFMx6uReYDz3sxubYHUcTNL9g8j1rE1FCK15dK",
  "key16": "4YPzMdAPvoedjUHEVbirWy5LLN54vmBobD86oSAkUpHhDdSC23W5Xqe62iqJBJDUQj1YPZQxMV79tEDh8Sn8bTGx",
  "key17": "3p3oiqAdH8rfm64phT6e255BMDsCoijEhuGbyZ4NNBH7qwXQFxUiraZ3iKXcLnxfQbqvKpp8Qg57bFMirh1DQEL6",
  "key18": "57fVHD4LzqVGorxfg6oMYkpV7iEheYjVZb87AQQz9HFJ311mjo7aw2Vujoe1yEWUauwtvydHxhpzskNV5miVYRMM",
  "key19": "2u4uEgJ7b9e3brAtCG6F7kZMDGqp97HyL6EBBSfLHtdVFGgdUqT9Nw3op26FXzeR4DBzS63UtE5vXJSLa9bniCiw",
  "key20": "7f4k1qmFwdChEWm1T66oziEhhmfv2d3qY3kFdUhSpR6ojZjs2DVCPdwkyuXRoq9uQqLjfQfc81wBmxaBpQQzPV6",
  "key21": "4hZkPrYjJjpzMfvL3kRTTRR3QmnnRw4Pqtk5ALw6K4z4Y3qTdfVi4HrB8JR4fRVBUCqHWpp9L1bWAV7PwPnqwAEY",
  "key22": "49q2h9wuqYZGqNbjL2CJhBkpMcsrQD1YdnBsztKazFS41BFWj9FqkRwpbcQcTnZHtCJaZdKnJsPEUCDmwmj77NnQ",
  "key23": "4QTczhd2gQPNE785Wn1RsFvf6HsKPvg3N65YJTyY22ceDvqtpoWc3XKiYxCfMg8qzfBCMipQF9r9WE7bC4nrTpqr",
  "key24": "5z4JBtEZAPteBordvaHLB7fVcjUQsPEZ7j7qz4wAEwVofaxV9g4M5Z6x4M9kEyG84AhhkLUMNx8GBS2aTq8P7hy2",
  "key25": "4J9Vte79mz8i1Hi1Rx94EYRcudF1mYSWRcrKJET4TQ5AJk2yXji7Erps2A1PAG8Q9GyKpuisyH8HV6uF8ZrKUhPV",
  "key26": "4WoJiWFyb4vxS7nC8as3aZqnsaWfs9h54rV8wKDtx75hxXBrW9WfyRYGULB8Vw1frLbJ6VK3A4yiaCieSHuwizjy"
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
