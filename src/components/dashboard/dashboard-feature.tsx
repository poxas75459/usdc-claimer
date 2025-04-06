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
    "4YDjJJHyB4hDWtSVTEL4A6bDFWGqQZD8E3nTrDQLb8RF1asjbiku9buuyygo8FsPhAazcZBGnLtpvMQWErq2B2zS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENHNyHQE5ZQBfNB3XQeQJAKaWL9zWfkYQof2gNV7BReVFbReLo1NAmwkejqm7nY6y1CH4t6NbD8Nxv59nBnwdpA",
  "key1": "2dStvw1uag65RCXjrVS2nSayViYVy98rt8Y8xzssLqTp1kA4hRymvebvoBBqoZ4JxJ8CUgUuzV9ETrwQdqZSuV9Z",
  "key2": "5zZwtFSGg7vd5R41mU3pGk9E9gTiDuekoEEeLKjaoUXHFN1DHLrkuWaqbVRyRKyeyCg8ajAXewNgwXdN8xm4vyyt",
  "key3": "571oQWfkMJozPG3Fx2Ejx5iCnZZwNxDTRNgjgFNUE16EeLPnV821dhBLveWNvBBRk8LZbVh575Wwor9H155Bknsu",
  "key4": "61xZFrUN1q3MYXEeyqBd8jMVhavWMuyGXy1HH4g8v4uTZGarTV9Eh9RFbV3ffpnA12eLZY8VQDkGPzjrLpVzjaYN",
  "key5": "5FAxShqW32VBNnYM7KoQqfLUeLTjB8Tb1YkKLzLVMZiTpYdBkrHNUqhYeAmnyUXu8iMP7EcqKn1Uifi6WTVM4NBk",
  "key6": "5GH1T9NMJi49FqcnEajq9Ek2sff9XQT364f3FMQ3WhGG6hm3wJynaEeX7Qg9xAJXNSjmGsjr3yYwaeNxRDjhJ1fJ",
  "key7": "4yNULTUkbdqtHgETnibknE2KxY9nWCA3cpzZu9cnKRr5rrgLYdNyzE54TVmHpJFDKYPHZvmb7To29jDZySdtCNzw",
  "key8": "5YVZ8dsooArJjbbj62UHvbkoPfwRSXjiPs1r6TbfZAFuMP2tZ4AJmNzUbZC3WgCMZFbhc45dLFqXQQgpxxyQ5M2d",
  "key9": "NAJ5hcTLWN3yq4csmWdyf5SC3szztWLXQAQmMzNqEnh1iLdTa2eHZ6kUb9aDtrHqNX3JN6J8o8bTmR8xEZdzfPJ",
  "key10": "2vtY5utcKEj9wHZyTdGuyADKi8tJMAndv3B5vBmRzmcKcK8xJWwPtkoqmbQo3NWcCsiFnd3jUWHKSkSUAcu31mE3",
  "key11": "3UAMYjsyJv9fBfmo9G4FAcJBsGbTEZaKnqwicoi26aKjRsUXVLaDUzDpCgMALuBbVYRZZSsL9dhsz1HYcpuL9dbC",
  "key12": "4h7dvSBD7fjQiwmmXVEdpVfAARZfoS5gCEe4dFZykoPpzrRWobxxHg9piofYMuk4XnatrNqUaNwmgW7UFd8LzerP",
  "key13": "53o2BBeR9KD45teoMB2pCde8XDfBcFFWJLW8NUfmRfbC7K11oLgxiB8yS63p4DeHqeZd6zj9CYZ5YsoY6YFXjXAq",
  "key14": "4K7A6FaF5Efdj2m9PZy5kj7VaRJYXYxmTCWKf3o5tKWzmFrBkj93WGtWCu2Z3SwZCpvCNcR9nShsdtMX947bcJkm",
  "key15": "3RhUpPzh6XfZDXwst34w3QDMihLM8Cn67S79wSep8ZjoaVwkyHw4GJPKwfSWyuLS4z2qqmeYN7zGrVKbG1myPNEt",
  "key16": "vcJm4mmMC78FSj6Rqu4qeZSMYFJaK3hvFSAmhNpzhZ7CjoNjA8eESoXWdSu1HYzn4bc4bRmpBd1k7h5T2VEiSYe",
  "key17": "25JgAYPY4D9t8Nhqf3jazSEb2b7vuo8pvRrbqiWtzg1BsqP1539KyodMSrFyHpTS1thPqSetoMjk9oRMHX9222Md",
  "key18": "gAmr1xfiNssDkKe8eqvsQZq1WHXLaxRaWNoJqyraepEfgPRvTmefLAgCAJAyHTU7ScMWgJeaC74BG3JtpGacXjv",
  "key19": "DpSvbyoXGy422DbUgTu7UzKj2jU1edbSoQSn2A5cDxEi9pMbHRCykRgtgig1p1aajmph7X6htDUhtVNr9rET3DD",
  "key20": "fcSH14etb4J45nXbcktHfrXxLz57KX6wcsxkMQ5LvpSVBMJDYaMqmFSLWM1Xmi3MLsuYAeNjbTSPffYjEtWJ5rY",
  "key21": "3UNuh5wcnWHGUxBLJyxBwgr9uLzPLqAJPdK7s9hnrHGdgSqqsMdbmWA7ieoVcSrMH7npEWJ9aoYJg2vokUUaS8LT",
  "key22": "4ohF4EZ76rfT2fnKS4wBuEGAGHwG1rBjK2mpHVeCsoW8m3vF7zPhhSKUnAEEMgsrczcMQnrz8dVChkaB3GXZz9aX",
  "key23": "38Mdc4HUaz5hPVEsYqzm3DE16d8HKhhrMKrYS9btQzQeR8kYqVp7RctY4JrNCvAHTAU6DnTDGieY2ctir7YGrAyd",
  "key24": "3hiHj5nUrTmfGFYXN4dHn6A9FvGqSyk24YKshVnhsQ3PbPNrPCtwBQeZiHRiQiwYz6djLhkQJqx8ZFXNqntCbELN",
  "key25": "2ciks8vEwD7zSUmFuFC5BN17bjr3saqbmygafvwSYidCWjkPRXiRLtAaQ8wEQu8QKeDRxwuYDpebCNgvpV6CyTpy",
  "key26": "49hPuKSJNPEUFgyDarqwzRBQRkS7WektbqjUBrXoaeTL3LyUgwEeJWJEDNXPjXizFAnBEY9fjGYpv1SAHRg6vfBB",
  "key27": "nHs7p41Kdv1rrC1QeiLNWTVzPp1THL5pcjW8BbsdhRRXVyy8JBeRDNzKv8HjoD4i5WYe4oBA8Vt4Do4hNrxgXox",
  "key28": "fidHCGZvYVD7HVM9xEtoJk4ER3kLof4CUUK9efXJemyF6EnTdkmYZSNHYcnTvpEaHeW3NtHB3nnNsK8wEagwc3L",
  "key29": "bCeMawmBsXihNHnQzryUyFpUgfdLYoJwdeWFkJDGCDyYqjYj89pRcNLKNYshc4FTkvbbHCSDCZ4PiSbWAvqjwjN",
  "key30": "2DnviFdcsMkKQBQrovPUCcsFWHaBxUKQrvi5v8PxVSUmBkLLfN3kdzvS1vPdLTgSapE6n9r5TdyCdz9AP79ShNnt",
  "key31": "4g9PnM2ct5L8gAPaLkFHVYF12ZpDc6GB9BtkhQ8BRdLTgTw3vthnpgPHAbeLQndhYireqW4W3wMqvwBEWBA5uQcN",
  "key32": "4tKXg9JGk29r9Nbfk4PXLRFCXEPPoSfV9YYwDgTqG3MDSw3gVX3PDbxb3eQwVVM7H1PE4WaYCn9hUrsY299jEEXG",
  "key33": "4VyMxDYFkBdpMnayDLWT8uuyD64b5jAgCrU2NjY8tHQSDttSoB4AqtnAJvZV1LRzmWHuiMCssYsJcqgmUfVKyeGt",
  "key34": "631co7dqvHBhhSzPCU5LkdhbbcEnZXvNKgkk6P7m3cUEbPjtubBJDxQ6oJM5sYPPB3iJoRtosBVoprKdwWwmKAhZ",
  "key35": "v6Dp3dapwNPiFioaesQyZWG87PB2RMfGogXgBu6g8xavLNMKEH6gTA758YSpzBh5wdkErKJSN3EALJv2fWyZJKU",
  "key36": "67QZBBFxwKNSaFqGJnzfvBW5bo99FjdMbuuxZQNagjxhArjbFaGhqCTqZM96fhmrJUdgD7oxuVnAVZSMsh7zDADo",
  "key37": "3LJWkHgYkYD9j75KmXnuEBzoVZdeNwZkZQkymDeP38VMZh2WfTjoWWdAdQHvHyYpkGYNuErEXCjwEgSyqRHzV1Fv",
  "key38": "5TY5g2mQKEBYH6RVNxrpHHYTF5bYWbMiCE4eb5SqCPXk47GZwAoAEuKdfaMXmtjYRNTT6LNrogBoXieeRr6H7r9d",
  "key39": "5rFLBpvbxEoDkW1YsRznV336NbzmKTA2iexdcf17zMHxYjueDA8eUiBSrC96ZvzKXHcofmieQP86f1YWpV2nD8mu",
  "key40": "W3sQ8tqkmebYaUjGjcBWv2gpyXskq7XWVe7wc9YiTBtG2JeAAqLW1M7sFR7j9W6fuHki2ApjthUxp811W4iM16f",
  "key41": "2CcmMWWYQKjf2XSr6hbah5YviKhy43PACukXV94bgGa6DqwykFKLrgHTog9JpHMNZEb5rce8oHAhBHKRSBV1quXS",
  "key42": "4M1QKHpeCcLc1SohCSw9ZJ8vZeaSwyYQyKbwKMGMCWNiknnNbaZGZreZj7c9hxQRcebS46JF1BX1FMd999DGnZHs",
  "key43": "3xBhdrH3yssLNNWvWtANe61CNy9S9mUxyx2NnZHR5EYMgbRofhooBph3xQtYTHysR3zNiVskMvwD2Fg5gP7WLgb2",
  "key44": "4bmuDNdS7kSH5aAEWPh9iFNfcsZafsP8wQHxb7S8EAtQohjczikG6WGaV2eamnXVzLyb29ETKvhxY6JLQa9jBtNP",
  "key45": "LqKAbn2XgnhLxZxGVHVDEvdkYjNSRtMZnw1t5x3V8fbHovVaEnHRmyXSK3jF2mW1bTgWDUrxuE9HRzXMkcwVKqT",
  "key46": "5vFHtUjCJqynjKxMMqkYGpkkVRWiigfoF3FnSHgF1JvBL6bJHA4qGX5teaR4EAagu6nUiYtrzXRy9PLVbk7WCrVU",
  "key47": "59HPZNMPgikGosj5XYRbtVq7SF5ry2sCebTE2NSr4GVJ368MB1xZ16tXGReUjVxMyR5sfi9Hd28hzoDvxajcG776",
  "key48": "6BVBdYKK3gTS4frWQBWzQMD1ygbdJre6tKL9fyY5yhLU4HKrYibJdiRCkFNhpireurzQiVDUg5fjUt4qJx57N1K"
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
