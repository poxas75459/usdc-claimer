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
    "4yN7VPqHqBrQhopr69b8VmYQWx4hwLG3nvAEPrU4K1AiyXrVSPbmDB7TiYPCHJbp4Cp9ByeeakxdzgsNfGdCtnLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UaoyLW3e5UcQX8A4Pnkg8t2tN7H4jL3xW8KVNA92eTHfXFWGisABQA2xwhLFjYQjhf5BajzPx6PPh1MNXbZNW69",
  "key1": "3r3VcgBNtPpe4xdDEb2PYAa3wMcdjCw3tDFaPnz7VjzuV62EuVpZaWYqEz3AfKkPCX7bdG4KHpqTPxjRACya6Lbk",
  "key2": "5uUXoJejZd9n89QQ1o2TGPiY9AFoMm5ok9njdoBzKxAze215X8W383ecoZcrRdGPSQX9k6es5ckdYhZ3unwop6nM",
  "key3": "4Dj2wGya8BYNmooAEJUSnb3cFjSxNjhPvNz3Thv6khYj5M6wpQ1QQBn8ajJaeNHJhFRJkkMMzkVPn9TZ9xjfgeii",
  "key4": "5zR2FnouPhSPa9DBAqbDaXsYvEU9ngkgCMgXWkUMcBRbZVyTiwyMsYG2gSTiVCgkbux348L3sa9dGZiPkKBeEjKu",
  "key5": "3T4U6A7PBVUDhK3edVoGq7q799it5MRKv74VqWZzjQYzwBYto3c1wjtjaHsbJndjFv1nEDVqKYmZc3NLBeJ2UxWG",
  "key6": "5XNYMuGHkog2yv1xKGUuQNJuVgBeV31XvHya5TDNFuQMEPaJosztvXJgogeVxWPjJdWSoZCC1uw3Znho9CurEdb9",
  "key7": "2YBcw8RnuGNBnnuKN67Wp4xxM2KMDZKehefC7TwjWTpVzFeTHeBJ76S3X2JrxZ982zzRHXRnDg7f3X5iue7nTohu",
  "key8": "4gA4erWdrECpNQVe1PV8VJwZwT5MmNeEykbNhHk3aGgoy8CdM1iggSsXs99NYezA7jwmxYC79a35sKZaTtCRn5Xa",
  "key9": "v8MygGd3aV18KDVhVRuK52KuhZt2zquMMifW47jX4jM7iMr97T7ffU9ZnWzffikPWGeewNBB7Ba2xJj4NxyBjRC",
  "key10": "3DqaebxqDjDU6BGy2cwCfxZieLjozQKwpHuxwPkFsyubNSgEVEbphF48foX3F422VNZrkg1BzP12fCn91jePvEhv",
  "key11": "5uwSrYpvHSmBH7jPBnXHsxJJyMBnFf13Zd3BGdVK1DzUpRhBt52qLjiMHyFf2JR62BT4fXZJW1QYgFiSfFhZwFFo",
  "key12": "3XYYfbFW73raiVQ6vUqwjbCBSY5aX1TXTJnBYH1N2yhejQFrjmJ5PCNg2iM7MRM8HZPR173juTnwmDCSqmuipLNQ",
  "key13": "4JhZwzHkc6sj9Cv3ERnvW8kHFvjqjCAD46jrCheFaNhNpVq3yRJMtsCdG9CAAXCid1X42iuE9KgAGb3av2L7qdqS",
  "key14": "4gvXL1ETbvn2SXekVpyfyro44BsPhRWiuguhCeUA2bEVU7pyz7pJWEauAQBogGXaG8rxeXLCPXeKKRhiipX3bLN7",
  "key15": "34vvEYMMwzihkp88dhKTxzNjURSWCutL7EFAZ929ToduqQ7ud3Nd6FLzKts7pfC5sP6Fdr7LWMnoGiv1kSPiA4vh",
  "key16": "TH4hDYK7XsvbvbLpdtgRoe49BUYgC2eMm7fXrYzvZft9ejsHZbTgzgQrFihXjqPbiK7pkspHnqK2LYuMP91tA9f",
  "key17": "3pXT8L797nxXeQuumGC2LwG3wx1pMnignfGmFDMjYfdueKsiZs1vL1eKs4z6sJmHMp3tbR5uiCUg3xv3dTHf3hwZ",
  "key18": "2aBAjTyJbwhEBH4geDzRuqz4ZntLQDL2rNWcGfiA593EcgCD1Eb7KFye51Y2MmpVqx6d2acp7Y48V4FAyugzfVRk",
  "key19": "g4YxA9Y4bpEyReQUaFH4Y1qQmCzPqSF4eNf7KfKZ8c7CdA52bWFfUPYei7L6d4zcL1tcEzYb4p8j47C96u1uXgG",
  "key20": "5TDC6MvkrTqws2jGsXHpoWNcfGVfJ8cPGbNUDRG3xW9eGwxmJVUVnjx3S2GbNaqB8By4SEB7Rbg6RkC4V3Kt4AJC",
  "key21": "2Jx5GZybf3W6u672i72PKLbf1XbD5LnGxr1BzNdsa5jBVHRZ9HD3UBbqcFJX5fr5zs3CbrnxqdtwE4bm5KJYXKPi",
  "key22": "2RefYkGvMcrYBnjmV7wPWn5VBtxfMXHcwRUrtnH7pckx6yG6bG4CWfY49b2cBFFKkGQz446GC1A9wZocC6Funp1r",
  "key23": "4QipTMhG9hEi1frSkEs7w5oT96GQu5VPDdzzSbY4EhKBK2LvCgGFyXaqmwMBU1Jrgp7c8wsX9WmFRDDGyrTx2GMF",
  "key24": "2ns6BHyA9pYA2eiVPiVBs19cHcuL3UsPWq7Z4Ecap5CLErHWxYA7DKBab5dcusJpk7pB1cdCrxF7NiVbmXPtjNj",
  "key25": "9noc1JxhjG1YEdd4B8LtsSn2BkzYtkebD38ARB2hTWAXNVNtMaATGdEhMyd2NcpBYJb8wwnQ8a4FgwhzqmqhaAP",
  "key26": "3qepEBMH9bgZFPMZ1GRrbbNFkL8B5rwVFqNDPwhkgNdSmwiLCXUGthS9iUnFVFnf7TWnJUxigwdPpN6v2qFLjX1x",
  "key27": "kj4jCx32tmCTU9hY48zL8vUjhjcnvr5Y7SL951a3yJNHGHjsNwbyGb8EXGtFUbZe52ryVYk3tQpUZUMHZVSVbYy",
  "key28": "Kds1RCkPThvZMHDDNbxZvvid86fU2sLPNxTBP6khJaciEQQsWchqqFosh9Yev7aJkKSgGorNZjK5rP3iKhMaczn",
  "key29": "3QwEXL2Qu8WNGo6XSFCm64PdhWmbdWnJFzVQvJinBVbVh2Z6fJBQkppu9MbNcxhu5Zmdvp1u9LMmcP78XB5ivZik"
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
