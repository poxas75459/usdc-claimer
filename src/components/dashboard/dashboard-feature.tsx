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
    "2rBsnLnxRk8shDYxdRUoSD712WgwXWUmwQfPah2bTtS1ysJmBsK2bercBzEgsdTeucVeZnFgufKHoPkHQwiootSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "391CMeQEPMbjpw3rhWSApzL3ZcmKdqCe4hvLmvnAjwXRvGbfZdJkqc3Bpy6bcFikGWthocbySx7YH13hRKpNTpb4",
  "key1": "2m5YpMERU1HYC2LSPVZ2sGD7i6TDVkF9oXJf7c8dtY3GVBMvziyiJAFjqVMrkNZwWLdbsyK2bQBRqnVh3yjeZTk5",
  "key2": "3FKqAXPFAqRFrbzGkYDH6aGjW9yXGcFFxHjUXNpGLzVZxvkBJuBfCAZPDFB3JA1rjRtDzNZ4EvhjPi7bjZGzb6kq",
  "key3": "3nw9hXqcLWryHDhWJXQcvBMSvkzjR5XJKL7SnDuv3yqUjJudPE9REcddixqkLPbZBhmcyy4ZiegBRqxnhLz252Sv",
  "key4": "5H4PborLe8KrZ88J4TVoCXgb5jjpS3DpJnMxo1o3Ts2J3BpUiH4xEsUw2nkH3kacEt6FGFKtZbS52XEnjYNKtjoW",
  "key5": "2FWZncu6jpDjwVXLkU1fJfUFCyPczNjzmBLvUGTiVFuNe3vEsUxrNHbEWfw5ZJwje9rtqSeaFsgjqqjDZhbU8iS2",
  "key6": "wAqip3JCfg2AxJGSEHVzEKQ5yFiutmsLtxGRFpdTjU1HgG9rYhVYc7tSBEbQy1nrD1dLuf9sg6uXcFTwuKVuJv7",
  "key7": "36A5hmeDzc8CtKxxRgRt2sKNdv5ahb6JcxkYK6vcz3VdGFSQisCUCF4i6vxDZiR8eHjhDP7P8feaKJ1vs2hWShSV",
  "key8": "33weRY1GwceTkh1DmEDrB9AkfLw6LveZ8xW2A79wS7hBwLNtN7h9sbHHg7wDKdoxYdYbLLWgHXu3T2miHxVGtEnd",
  "key9": "Rb1B2JwnywVhk1Sxd9NSmw2AW9PksCjLXNS2kW9PvwDmV65isDQqZcLnSKcpQPKSLW52JNsHhQLStkgYdYTLQ1d",
  "key10": "13cYZwhPZu49aji1v3PjJfRXa4oc6NKUFnTETSvh81BPGCxgHpZKdq6DFJc94xzyPFep77f13Dfsv1ZP4AEdGBH",
  "key11": "227PHx7MZKvB9bDnDwUgn1HZD1bo159h9gND5ei1oiUUcxyFZwfYfwUFkrQ8kuAA17Hdgg5FnsDQAYn6TJxEGwk5",
  "key12": "3FymHQs5mKYo21TN9QxrSaRSPAgJrECWWePVdHk6wu3AVBjsFSgPvkL2xznsuCpAuBkJDhDdt5NzfWGTJsVvYmZR",
  "key13": "5yquJUfS3295kpHCbLyzrjZGTtpXT7qyv2zS7qAVVpNQJmjBNNqV9RKyXi353UtqYF5YwBiT998XtQ25xUGXHWGy",
  "key14": "3C7Db2cS9kLxnjjFDGPByj18ZuxWV2ex8kaSiYyniaZNDaig3uNys6JKBNJiakQrp4ciaa439aURTDGJcHKadERo",
  "key15": "3sjWL3m7RDmep9VZFLXywLYrbYkLJP4n8qJNP63SmmojtUYbRMWQmjQQN3cpMNadz9KFpzuxNx6rccNbvE5NjUWG",
  "key16": "57LwfcxuLQZSG7FGmASuvuwbzSZrNhZC5Zh4HRJGEBdVzZh2RZiyAp8hKs73b4GEaK7u9D7x58v948gs9Q1jcnnE",
  "key17": "4nth5GBwEzNSera1vcke1taYquBnuWxqxjU3JKmD4sPp3tGVfTj5DyqWEy73WTsdoq286UGxRWrnSUNMHWUtVNGS",
  "key18": "482wn3Rpr2s6p8fbnYmAx3jtZi3a4f7777vPJcwdECPbDQTpKuY9sSpR2bHaFpJZPuYbF5WBxiDRMnxP9PGcTcK",
  "key19": "3eWDaGzVtLo65AMrvunPEH11dyh18e4f1yZ7FcyNoR4h2eAovCgfi9qWKrM4NbxgsQ1DNjScL2v8ta7T1gceuD8X",
  "key20": "5zyZ8uEdaGjk9BQiJykck9WgD5ydYHAPH9QT4i6KaFn7LS9ymMfRX7SVAvSKG9XKzTB7JChVKpVhFrEqKsaBYfqE",
  "key21": "35tkBV84YL45t3EfS6Z7DhiXxBr1rQktVPqdM9hCQQKNW8rSpYFPYxMUqkkc4Gh5Lnbb7xshjNELy5TykwXBdPJm",
  "key22": "3NPdimiN96gFP32qFG5oBAgnhk2S21kuoWEMYqn51zH5Ptmpec8KQ21EUDT62RYYPFkxf1MU1T5b2a1w5CPAmo7X",
  "key23": "5KGqD8fKVVE4ziMkyMqFdqiCBRYRt1bygKy7QtfQZ4uxDp4kSaLgtrgEExQYkxkC9DrAcd6rBrT9QSXiSSyoLH4L",
  "key24": "2NJygqQyRkAJKChxKa5oTSZvX9ViMd2u9N6fHuAHR2G4LMnG4PbdtCY9WmBvfpv17Va4PybHQqMANePXZYDVLcxa",
  "key25": "49GdAQ4znXR8o3S6XdFCAeGbrvQMpEc6HFcK1DnWwXzuC8KpFWVF7qDhf99V5y2fdtctk18GetqNZHQq4FfYT6PW",
  "key26": "3GBpdbzi7vi1C2yj2kioK5VMjmVQP72nr3nwhfgAWtL9hZz2WoTNicJHT4XNiDLBBy1DwcRTUBsXaNKTz9dx2sYK",
  "key27": "4EEAFmrc7ovaEd4MRUxVKqoShAkj5bgsUv1xmZpDJLVabDiVvXxuNsBSBhjDrpeSkB3REWupFyCwe3VNR2RRq3D5",
  "key28": "2X2ZgKUCrnaYJbS5w4KgLjtEhYZtWunHCM8BdLRasStk1hN1SUyosLmChRTM5JTWSqmzmWVZkpzSrxcrXbRZ3wcv",
  "key29": "5vNrSfa1DPLV3nUfNWHEWu8PjaNrjDeuZF6PSdNKj16FhPFqTDgFRgzBpRLMBp2sgmrwZJJvcPZe81HCpk8NkjLF",
  "key30": "1K9xYL6TNhLK6b3CCMDwpUbbvEdMAYjvrTnjzXw2oxfh5mtgoS5ioiCFbuSpQGPz53tZQfMLpmSk1nixmjFjuGL",
  "key31": "4TcPAkVoDX99VmnCtsKxsEc1LYvurztCYcAXv2L78skXN6z9C3sSM6CAXi94hBCJTb3ZDmzaWXu2DCTgAm4ifg6W",
  "key32": "NLWiXfUXptoPcwPapzqorzNcW4xiyqRVBEmdQFJ16RzyBUSAtMZG4N8MutdvTzbLYbV1efAJZs59fGXba97sgrT",
  "key33": "4kCPaZLV16FsSM8gGqgpN8GzTnworBQEPfHN7yfZTWiSexwrb8kc3WLE3an2U5i1M9FiydicQgQbqYL8DTRkZnyD"
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
