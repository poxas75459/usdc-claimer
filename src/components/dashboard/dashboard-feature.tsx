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
    "2U1AQ2s92hZ8rw3DS3sAcL7Eqg6Ljnhwisp7Kw12KESnSnxaCfUVx9UxwzepxYSxvsEaGxkhkYEH6hXETzW42sAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eHoV2DmnxRQA3E7S4g2tAr7XUEWpxPWAgyZtszHckXRVqGeXC7WtNZwzGgMsLVNMXRSruVARpaZvktd8D1QirPG",
  "key1": "23BtZDvgYQSpTrWv4yyZ522FFJfjkzcQxEzDJBLkKP3cdXVUZdoZdsmiLHPdXy4H3175X2wgHgQ9y25YxRR9Uy3T",
  "key2": "3qGgvUnQtMvYxyqtTx7oX3HMSZ8YYRxNf3cFRPwoedNAredkRyYXZY3eFMWWbGfuPJPC7YAMmrCQ4mi59hB9pTj",
  "key3": "41zBXaN55WoL1xDovFVf6NFekaS8a3fHJuc2MqyfQZ2WdV2hrrbxLs98Nov5DcxjtzAtTRZ2XPgF78WWNBj7hhDT",
  "key4": "4VJEnGdiqs8a9RHrjcFVNVrFSYus357dXA6QggGTmWfPJB3Vk5vJxFP5jJ5JgdrCwvXvW1qKJgFtuZV1prxmgEAu",
  "key5": "4bbDhu1w2NPaFDpLCkzb4bBRhuyy2GD1Np1WGTjETk9Q2qLS4NYfHXWEAraDewco97GoQoohUAnbM4V2To6kF82w",
  "key6": "4dgKYKSsa19wRvto3m29HBXnhDgLTzUQ2JEybzs9fMsg9FeoZaepxvBjXrVRvA9bJJ59fXARATcZ3Rp9tTyUcC54",
  "key7": "2aKRzfonNMRtHp849iQPrgizQivd4ytBQ8Bwz9p3DFNcQyL9aiQZEwgcNnSAPAi52dd35kigm2zWKKXQp32uB8cK",
  "key8": "5e5x7kJxoESg8kNKwMgZvgWeatd5LgNGiCdk9xMZkUXuE21ddhzDQ4Kat8VX1a11ohiPKPsSvdXY9EYpLYGkwVt",
  "key9": "44ThMWQjL3XF4frKTeUB914W9GhG9vgZnq8MQs6w2EH6CLTNpPeATMReVFFo18uWz31PSQGjuYGNhneG8mxNDxwr",
  "key10": "4uZzpAt5qyaQ5wJjp8VLt31EKSJYqtfXdAEfBR3vEKCgCkbfgFcSdDqEwDMVk4MFxqNCnQLVMZ93j4MaYJNteXsK",
  "key11": "2ua42m1ydQYeffWh76AgWui8hkGvjC4bZLCdkNq2sqoiASVCiA7EiuvyzCEfUppUQpyiDQhTnrNgHmzfb6NXriau",
  "key12": "2Xo84JxdcCQSMYVk3aZo8gjaTasCZ3wrHhiABwn52Q3EBYjQzunS7tHqbfNtxzQB48MmJd1bbihrVWYXMtwfA5VB",
  "key13": "2t1PuiczaqdZULJD4JiAyELiEYNjbaGGG5ZCvMFVru2k65KMyeh4mRqTAxi4UuBfdDHxmZkfM6JnAfFwbmADvZgo",
  "key14": "3VHtjZFhzWUoFU7Ty4noLAvRHEULJYVBjyvSDNFnnuiz3K1UhizKhGusn5ooMzbLYVM2zReytYYPkswgHMJpdvZn",
  "key15": "3dhiGbpJHPQjmfeCznCbEhWrNJeFsPjHpR41drt8RFGdnTKM2YkfM6khmGf9afc3w7KHrqbG84pbatr6vXMhDciM",
  "key16": "21PqRPwcN9KqnB8hkFMEHrGD6M2PbtBNMk1BQfVxXNBjwk1u9RsF2Mv1F1Bh4biFMvUdYTE9pM4tYEARPtTK19bS",
  "key17": "5SzDLJZV9zM1zWTyz4qsrcj6zRCEkM8sRWrDtB7kWj4jDxMKPg2chC3GGyXyzDUbadcj4V2ovms2bUWiTiwuSXA3",
  "key18": "5grUU9g6Y8qwpbaS8WBCMQmMPirYoXKxkLe5BrfYU3BwRvFxGRTHJCvDywqGBCqFA9p42zPySNcYHgZ9GEhsHX68",
  "key19": "3tmuThmgi4cbaBnuWnrK1t9T7NzYbigfEHEFSTSj1kwRH1RaenUSi3rb3cAYHcC8Aq55iNqD2beqxNvXPKSd3uiM",
  "key20": "rwAJZ5t6MbncKxNHPoQZmKfG3sAjjQCaDPJamRdqjG2Xmv45v3CSnMtUpfwT4KTvXBiupu3RdkXBQpYtDtsMGD6",
  "key21": "3RiQuGLwbDxVsVoEhZwgrRT6rtAhY3PQbsrAqqGVPqaP23dVeKctvyjsxSmuU4NAZ2qR6hnVwuJZq7rb1R1Ccj8B",
  "key22": "313YspxoVoGeGc5RmcNTuehttmTZfhZubZr6dLZhAGsis7CV2xJ8Qs3n71ZFgYwMWcg6erebPadHKaCmzqLTUQ4i",
  "key23": "5EzZA1kfkmRdKwGSHLXTw5E3wAqCRjFobvgq9tyvNEMLP3wggy9D8J2Sf4rCj6ZfaDi5sKQCKAZKwTQFggQfbSev",
  "key24": "B9cCiJbnGWWivukkqBxT5u8TozcbVBLzSLjW6GrbBepv1ZLMuvqw1NENLSojS4w5Hr9Mq1m8yjR8ZmceeY1RJU5",
  "key25": "2SsTdBaTSL9h2Ah8UQWwukMeXJu54kykL5TRjKqWoQWeJLae4oFyKQjJPG2c7ETxe2CxxzXFJvt8aBH1QoMmN9rF"
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
