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
    "28dKEuuHUDW16ZhdJ3fTSQPuAtWr6MBZmhRbRG3bjArEupK1emBdh5WnBuxizoFm6aF1RvB8aMbqkV3SK5UjEUA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w5pjSHG6exjfbfNAXsB41wS3BaiaKMRhRCJhNVa3X47ytgWPY43MzcMxbtEWuwdH3Ab97vjwLCjEy7KHXDj63U1",
  "key1": "2RA32tWQCtU1ZjxAKKinKZNCCuaZucmXrQUb1auvdHCLRFU6SLymjX8ktMzp9W2MoBRvwB687JtTVo8chVXAZ38o",
  "key2": "9rtDjF2X1DgrMgBaa4m6fkyWtGkf2bcbz6CdQbHo8N1RNXeL7AwcZHi5HoBQgY27niZxVapVYW9VLDkPzTer3rD",
  "key3": "wdHqovQNXZdqwq9JgMFaBjzpViATbc9u3vGinpDTRD86nA86yQL1RX563F9yzDv1c2nt1EwHinVgN9TPgSSqiMa",
  "key4": "JBBNoPHyDEaqVetY2H2FRK9xqkKNzGzzRCLEdYKPhGqBnuGwWjibAZW7JZ5KdnaZ4K7VqqETAFzqkHEuSSP1v5N",
  "key5": "49tdhirmwEbMJfL4xVjJWawHv6UMwfZRmVmtCrWKcwXERSD3s2ZRhSXu3JLFQtAqdAhvtK8oh6GEQBpwrzH1KzTY",
  "key6": "3QAxRtsJFL6TquVvL4RbC2iR7fbH25AR8nYCAJNJxpzYT3k7pw76YrJA9FgjpVNe2TTCfVU2uUsxqQK5GRLKoV7j",
  "key7": "4JMXhTr4tdJprHWU8cQ1r6YqebSKmYENbM8NjxnvXGCTKkL2SgWN2RmGA4HuB4XQq8dUmZtRSvrDd6WoKdPQacmr",
  "key8": "2Me9J1A8ohTLH1iXTvC71hKJuWyhGYRKozKVvnp2p4MzSuSffcAYWtzJQpSzwrVXQkwFVbE21v4v53hd7XxBTQ4p",
  "key9": "2jJ5F6YFdgkxaxSy1P1uKfA9n6tq2sT6Zp5xkREUyKkBwheEdfR1C4df8S6jS8bRXJsSqqZPUa3qFQQhWcFq6WpU",
  "key10": "3Upznkaxwh3yrmGPympCaNrBQgaTkJGH9w5y7wTeJuKzo3Wfh5rb9VcMYvmkdJvUju8FWeze8dkorn55RcRvFNxd",
  "key11": "2SE1Q3kthkoGtdY3MYNnwGEB6r3rC5ghh3W8hherWCE9jxu7xW6uxhoPGMR1EeGx9a9qTohpgaLhv5BySiNQe8AE",
  "key12": "3X7KX5RE4WCYfmZnxJts6X9cV8wEEbvpLTrbbSDXMjrGYk79YDzyQ2kzfdFsNn2K3gv9VsQ67b4QAmu6W7jhK6ts",
  "key13": "3mWotA1KEX6c2FbWNJ3wyYphKB42i3mKqg8Ky1b6v5oms3hoKEiCXDsE8Nt6AxXwpE8Efwf18vPQNzGtsQ3dD916",
  "key14": "65oUbRgZLzK34GC5FNHH1v2A6SZGLHjXiqxvFTZSYdR1ov6dsqKMxcfpuqFBitkbDGdRDMWQ5Gw7UBWZ1umCH1Mc",
  "key15": "5Kbx6ptvBDcpG6Ycye6vPYTSCG4QrinnLR3dMnKg4zh8wvdVDE7TZ3TWpbXigBpMwGmJyWkaKAYU7khjxYxqypVk",
  "key16": "29arHQjhG24hG19C81uGmrWJzZjw1mQRwjHP9BveQEienhAvkFB6et9PWEpYd4rFofDnHsnurPZNWkV2RgyEiuz6",
  "key17": "53YCTnJYCBMr92SetQEW9z26yKqARTSLXXknuRit1d7vmLg7Q62tR86ZfR9EvVSMLUxGdCBVrd9je3imrALDSryU",
  "key18": "3hq7BAHG3x59h5tnPdACaDV62xoBNdGkDNBgpZxxcEq2n2RiNUdq13zvahUbs2Wudc3oiN57AgL1127fhV4TzQUJ",
  "key19": "uiJT66FUikqLqVwPbHF6fiEAv3YfshwvYE9a9SsEnzoq1j6rpFqxeK3cVDiqFsHnDcPVP2LDU8cQGxD2T3ox3o9",
  "key20": "2YkugE9Bxth8jyktX5v76BhhjDiYzcKDij1mXUxZ6ebafTxJ8Yj64sfDsWFkes78iX875G7pT6uoWvyktxnoA69M",
  "key21": "5SmCn4d37LMgu4nFL2JB7ZHf1kPZG9jn3qmTzrsXGUQaFaX5YzeNV9ZZBPr1UNpeabHJPxq8AQz2S42fhoftbPhb",
  "key22": "5Dv17sQ9wqAAgpWoVxb1itK9vBGZ8vHn8FLNDuRGpy1i8gB5oq2HjFuD4ja6HmpDte8J9H2W3SyHBz3BPCfrCSxC",
  "key23": "5yP3ccibnpaH5Ly4Fxx6aKohfwCSCcQ3xu4KnEBj3wa1c31FmwbW2Xw4HwJjGJv5VUbkdqbw2wJCUfsv9PGQo1sL",
  "key24": "5M1dpoxFyVs2VNQX9BahnrNbxTKiM6KbX99xJZXx4U2adj2RuzSN9q2d9TsEF4NgQHSDTse3kaYLR9pb4JwZyuCo",
  "key25": "3jQ9mzU87K4Nm8v7Au6ncR6Y22wDPzVfefsToTogUkXcPoqr1s7Ts8w61s16GvjFQAJz3KC1JLAXB6QHW7QABaMt"
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
