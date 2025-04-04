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
    "3kSueCyt471p4HknNuQkw29K1qu2ExhRvwbyRuum3fQUP49Z5JKhRkRVMAq1XmupzW57dvNp3QfA3T9tsGBcDsDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ac5c6Hh7N9yGkmiurzLUewJ97Spa2szPFhFAdPV3QGmgBgMEtMKjvsn2q33yPHNN2YaQQomtAHKqWFG2mun7STm",
  "key1": "4ngVDHDAgS8Gkr18gvK9EhcXpf6cBSPkRvyBF2aEyCaKr3LV5dkdfi9u8J4bXZPdHmFAvw6HUief2EWqHu24kbjV",
  "key2": "4K3PDDDmqdCcPQCBbGzpMBB3d8PnmQhZ1wR9DXFkyJhCUP81c5HJw5RZwHZvGNpcqF1yZcmJoa6iRBjBaLb6nBgX",
  "key3": "w7aDZ1njTcWUsmuww4gvCthsCwBFKFXoai68yoDa4mByd4vAYLjkTbvaovzTEyb7aFzs4qJ51AbHSYkj6cwxprm",
  "key4": "3NX6hs9NMFANMMEnYBF1qTeie3rwtfCCzakBXTPZY6Tqp2KC7yVCnJEvxzv4Uexb9yeBRxGVq47qnBgfgZwoUSiR",
  "key5": "eXW6iwCpXPxYSCyHpgvSrJDLfDBZnDCFXrsK71Km6bsoodUQHd4t7pLLCYAXnvVRSzufuXrP5efw9KU7wZYAAuP",
  "key6": "1V2vNZMmhk2GeHRm7kJ4hCM3oU9QHaJDDpEF4cfiW8b3Bbz7mqPpvgFJBk6LpfHa3YRsU7nbuCsrzYfbr9kt8fZ",
  "key7": "4PMY1B9enS2VeK1oyreUiFrqXDddehMBA94vbjLoc9DTFJp6CaL1wrMM9sBAdNQfxtTF1My2rHQHVGLy4PngxdFi",
  "key8": "hokKJ1k4idTTfdjUQ5MmK33ssUvNeUt2e6dJ4tviNepEbx2kfsZLcWWFEeS97qFFneCR2k1Tzyug23qj1xnQu1f",
  "key9": "5ZZj1fKtCW6Cy6JmWfMBwtwmrDAAqouY5ogqt8WwRQy2ZRbRZtvPEm7q9oZc2gGZiev9z6SH8JzuA9chQ9kJc26o",
  "key10": "52HaY81m1zDDAycWC9ksd4gPDEFzwmKpHC6Bqs3hKkDmxzRL6nD5DfiqJv9RPuaSwHJ1wSNd6xr8WK3rra2HvWGa",
  "key11": "3pEeu5m18HaiWMJprTy2GZst82MKDUgSDLAzz1CyuCQpmRMbhy7acaE4nY5ucvQFG2LrJBqoJdDQQ7zmGR568FgN",
  "key12": "5hpmo6PCcGUxqKPnxu7HhYqkmWfStHRwssrzkVSq1ogPXYT1Hic5HWjdtPTcAjmxai3fziwjZUq9UURwLCbCSnA5",
  "key13": "m9XxuXTsVVqKYToCaz7TqoZvzsAT2szQuGf3TP9aqiYtd73C1jwm9MD5xW1tayqcgvP97eJvcwE1yMKq5Yg7W9s",
  "key14": "3ThcHsgaHgnULJk3qhUuR7RmAy7jU5U9YaNBNbhBwJgEJZmvHtz9KjCVfLC7Tc24w2yu3NNWczAx6hj7r6JiojiJ",
  "key15": "5MuYsoqd3D5xhqcf4Pnpo3NGxpMwcrBuRBZDUqG7mjn6anCgjmpjXb5UhZooFFepv9DCbDP3p7TVf2DbPiQW3AEX",
  "key16": "4hMW5wZ3vBgG8MjW3pUaHtwtbsrgDKLLfLDfn75wu9Vkf5ZiYMu3hMpAKtkVHK2cHKqyckWVBmctHCESQBnK16m8",
  "key17": "4QraPUay3esTCWX4gCRe2RMLYMv1Sx3varGRKfNmbG85sEFRG9DQnxqXr1ptrU6j7opB5EELTgY9ygxJtErLZKug",
  "key18": "RXAmNxfaoBpFzFSAowYV93wdmEbaCQithmU9pr8zNFLtuVg5i1bpgKdRLg33WNo479LFTHXrDfiTuUXHp1csoua",
  "key19": "LqL3nwtiYXHLQFtVem2AEwFQ5D8jAL4uquVbpJ5SrznF63z8KFwqphmw4oXqykvrP5V5cLLKRV2hJJGFpkraebh",
  "key20": "5XCkCBL7QzixLwdMCeGbiKyck6eNYKJkd3FYBPAwhETxCwwk6FfEatLS2EhcJTvg56GXz37n1uYMWa3zjXwTzoaV",
  "key21": "4zW22PzhbprEdv1JAMDWXpZT9TjbQqQtF6wRTA6tLTUwgUvGc97KWc6MNydhvBYxST2y1UkEZ9rJDgwnDRYVVbTD",
  "key22": "5StXmn73KJSVrgN3zg5DP7ciHsYdzouqcB51VJu33GD1erSH4d78fp17v2VCqTsvUDJT7qQBAyEGPsamZS2px7t5",
  "key23": "271Ya7HuBj8JMgaHdjz4oVSn3gFMgXveHrvzvTJf36WxpYKoESUWouG8NQxxHQqEckUVby6yNqmCm2tRR85UCk7J",
  "key24": "4tT75miABQZPjQzU7eSPopneWsDkJX4zHqLCkNfuEtdXxPYrpTLLgMzVoexfE11vD3KLzi3YmwTzXHKXMgVP85yA",
  "key25": "SnGrcfbVspbvpLXUiPTkDSUb4QwoiEQuWpD3ZPiXkFPpcUPomp9t22pezZPD4nge4jwFQ1FZUDgERrcgXe7Ee2z",
  "key26": "ByexhDyZC8ZztgnXJsPsKcGCeETgr6ePXZ24JosnnUWAr9DAeWUdHbZ1iX2b6N8wBhWr8YcQ9sZT6tXsWEP9jSG",
  "key27": "2jadjnGwoGQP3Cpp7yfa5dVDJs9gDTmLEghAQiWZvPaRSe5f5pBFPiZNp3Y8opvuinVa3sTdPXZqLzdftnKZTB8L",
  "key28": "Cum5M14MoB61UapWK4kVUToPgeRzfuMLeNT33VYzi4dBwdigVBjnmP3qtF9wBbEPc3RifkADgf59JEEbr1XyiJh",
  "key29": "2mTRLJFALFpfs9to8NyLxWtAZjNCHSLQHxiWEgmEJJP9FD61EG1tuChHN4rHs7RC5cowrjuMEr7k2UYuXCEY9aMv"
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
