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
    "3SmGUvfUGMY6y3iVNVjcvWk2HxAVRkPUqKMqGmBtnrYWUJpnsdLCCg5EWFWTJv2yY2ooELaR6ZWqWVKVp2zKEhgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xm7sFcTbgiHu25wiETqMfpDVXJ8KpnKXp532DKxFFcWbTn6Vu3NcTxDn2NYYN7s1DvkWDv5CjXY5Zot1bQcG4h9",
  "key1": "ZdUXYmwmb2awDvmhvSutbY5ufxZmCUA1Qf7TFHYe1wzAmzKCe35P2Gv1aEPcAqdaBZhdYwUyx3jojPQTq3AJWGB",
  "key2": "26QukJDSPc9BEfCd5x4b3tMQ9LKvn2onzC2i6eGCzekhibZGMGKoSZu4H9AXcoo7hQfGJMFje3wmNdVM4VREmA2t",
  "key3": "3EMKX2VpAjDyCbKQVnsfSe3W6SSFqNaVimFHs3hSmFYCYdpB7Cj6BYARHpD8osAGsDmG34NfEky2dvXTpu2rG9gA",
  "key4": "462fHdRUUb2WHvZaUZXxoK5xWnPy73r7t5hf4VNjCFsfAe4xo7YWt6XSAduBbu5Y1VNvxSqb2xMwdunHfcbC8zv8",
  "key5": "2WJvkTHegEw8j1j9xneDeFHvjwmJxGC4B8M48wshkQe58gG7LFvsUmCFT5QNkJ5doTSQqXdvC4VBmSe7XxC8E1SA",
  "key6": "5bHEi2tKfBbor6CUwby8EQMwv3Xdz8Wh9hBysXspSQkhRz9q6JqUCfHMpjKD3JFErtDhi6EYboKvEErLFpxXwWMW",
  "key7": "cQaXx4WS36SDM1Cz9Bfx3747Gt7Xgoyu9GLCo7LMzc7SYfzsf9bA5NKxSMsUHHk9WRMoC357pfFvn4CgVuquPBq",
  "key8": "5Ww8qr53PY8JcBXSMvqj7Y4GJ5fZxh2XpkuDLevM2gCYnSeN9BZsd1iaYh3Tbhcc2CKXWR2zuXc4Z4Q5tXQ182zh",
  "key9": "JqvWSn9ZSpffmWvNghYvsa4UwcCvrPYpXLQ8LQ5vMgogJxdjUaJuYYvxhe5VTYRj4R9up1JShruWRn7JZt2iCkP",
  "key10": "2T6fDFHoN2rwyX9ZRnEYQr7R9HqRxXHeAg5ATnKR5uJRAri2gpiPqGZZ3ZRmYZ1JXv4gopTRz3N4d9diC3aFHiKa",
  "key11": "46PJXGvKQvLL2nEwpPae1rV9uVKuk1kJ3Gk5FW4kWRzyTPMH9eowMFqLZhNs5iVYbD2CBbpUq6w82WNqfNN7MDRZ",
  "key12": "4hEW8ShvtusZMhiE1survBKSCBZE21wTUEmoRJxRtwRVyj7KaPvREzXwHdnhS56j4hN14Gxij6Cb7vPxNExTrHiv",
  "key13": "5d1srGBppybEn38ehanPoMLqSC16kYiBHna4V44uxjmCMwySgSyGN8xKbiVre9EmPJ4SPdyFWuGqrFWYtkrRTD5B",
  "key14": "48EMw8M6RNh8EQmYfVFvQd3NhG7YswnVYPEMZ38tUyFw7uKEvMKQFnrRPfpGMQbj2xM8cusX6wwU2y7B6AeWr2AF",
  "key15": "4nLaLj1svPzfsm1oF8PvawcqE5nUjZwLaSyMpJvrg8zGr5dQpPLhVFZfQnFgoy2k9Hb2uhuk69uHL55B8yqf6jSt",
  "key16": "5GffCQzkx9cwcbZfLwR471WCeRc4SsVa37Qw3jqU4zenj16EKVTK6TUoSLaRU8SHETRuGP6Jy7Gp699LZrrshM51",
  "key17": "5BQkAaDzuhUbkCZ6cAi3ujtSfsoS15zK9MHosGkvqnVYUiBRkWWFqLoUE8oabeqY5RSNoU35vj7DDg1f67yjdG4o",
  "key18": "56WnLrkSHnMUYuxGnchNmy9Rx3e5KngnSUM8sib3pePvLgSsqNadJb8MNQdmc52sC3yoiRdWtuQn7FewB3em7Uwr",
  "key19": "3FCkXyWcKkdhQFK86RwJBh4SVtg3EhAqgUKp79axLg5byyRtS3KCJmJyhHXXRNEWof2aqXN1ScoQVkTUTr3vzfW3",
  "key20": "2xfpUeqv6Dzb4jvkim4JJS569se994wQhhP1mYANYL7na4EKKVVBxybTrTiBA4HhzxeZGSXTG3cZE2tMEqCM6D7Q",
  "key21": "RpYBVpBwrxE2jEC71RjWmkyzLtGUzYrmN8UEhRWxHekUhs8AgPoGYrUjneoSKk6ANJr2ayuPXufmEKtjEDnqWBL",
  "key22": "3U9RK2o4QvSB4ccCRsVthSDVJNwBa3koYCQaeCghgdGPQ6nDhogRGZ5gk5gDaUxPgssj57wTw43atZqmLcG269uP",
  "key23": "4toGry3wUdyB9hZi6umoTv8EB83vsytKshsaFxecpke7D535Ha7FkdVN95nyoGBCtEspFCtDVsWrbkWkpaSH9ke5",
  "key24": "gxZPVjNZ9iy2aZSWr3G2fxxLpdwquwXWyzHD7PkrfxFLVjsgxmPtmdCPJzaq6i5MLySCahVHGGN63TZBp4sCa3a"
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
