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
    "8zNaro2j7i3sYn9EHG1MfZCT55PTkeQopdb95ShSxaUjNYUc2zbdViUPoabsxDTLWauiNbw2BwNemp8mF8nTbet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ksF1mJB1t86yEosyjn5a1oZGc66AGh5GAHy4EkciQoRR8URv3feo8esPNvbeQ1tGgKyZe4wKBd7wUaYLtMd2mrN",
  "key1": "2cjsy5eQy4nqHrpEtxAXb9VDt9ZSLG9f2LTnBuKC9ZMBSyjh8A25zoBJTga72ms4bKwPMoPgBa5hn3MYWZcf8YFi",
  "key2": "Yjq9jv4tqfrDSjaDLB7XybuptmaDRcPCVEx9KGEKvCGVobFTNsHxmnst7Wsuq2c8R8Le1HSmGy9Z8uQMtoAiHrZ",
  "key3": "g6XPrvVVL5PUM7fyRPApZxDotFVcAD1EXr6i3bcuTcUjrNzuc5kMRT3gWjiJKEoz3jqgCAQfDGSrrpVVKSSYKdf",
  "key4": "39Da6uTjhURiJsRWFG89Ha1m2GBKVHMDQNHnq7BrgJsp65AEeqtMBnrbuTE8pTnhBRSyZaFQvEFrCCBNDaQP1jkk",
  "key5": "4qUwoLu9xMhRpqvnqsBdP9GmgQBqBK8yFmxqnVAFyKSMW3LodXUmfuZniFkoeU96HpF8jJdKbaaqvF4cdA8VrMPp",
  "key6": "aPYEfvAn8Gjxjcp6kan39GdXo9pemV27UzSH4t9JBnDUoq2dJtCHUCZzBwqdXVBZgniTAB83oDoYzH9K6ujX1Fm",
  "key7": "6PCqHxRmjX8512qZkSBxGY55G3Qad79QeqsmGhtWY1yNt7dzdzz7zvngAopUvWT1bh4hkAC1hWNrDQaWnrhiKGa",
  "key8": "5cgZBu4514Dh7JXSwcw1YRp2huMZCprykwBoZRuBec5f5HBe8qx14CKpZoUcrKhazTuRoV7FUozJCy3EBaeDq9Uy",
  "key9": "BxYz6hd6he1tHS9DcrK6iLXjS1fGzUsUXTnAC76pEmQUiNCMciaLxnkHP2M6Q5tS7pUPuZMEGHW8WEPzFCVhTsk",
  "key10": "3GFFxo5oS46D8qtzs82mPX4quGFHa166nUn75j3AeJnoSSF6THPoTAeYU2tajtFZJVHXa8HKN6rvDYueAHWpRhLc",
  "key11": "2StbgL86YA6Aejj2yssAAFeFaSbUSuHTmceMtyGeYdmXUmqTiVJALuMt7kUvFLhWwfQTZuQWSDUcWt2vrUeD5J4Z",
  "key12": "3PHWCKjWuLS4Vx3MMVBk2ik6uLDYruXjVVjhHesky9EevMigxDMbMunDoM6TTwrhaLn7kzZaLGBihyXfBxcpqSSc",
  "key13": "BxdwbovRd7XwSHFTS1oXAhsoXHn2QXviE9uZS9jJPLHgCYUjP7XyMihSmt932GgZSHAgkDXgK61ThghXkbZtdrm",
  "key14": "3vRBUgAVoqaHvzfSiZwD8vLM1Jxq3e5NikdHB3cgac7ZapM45ipinmWzUmhdj8Uq9oqxykzL1BqX52LXU7eN8hsN",
  "key15": "4YyzN7nTajL3oSHc96QKt7TMpiAA173br2ckb9CbejhPUbfxk6fzppCSUonHcDx5nTP8XrkAkFtx8GTJKtqd2XQ1",
  "key16": "3JtGMGZMDBBPib2jDE9h5k9ziZAwzUXz7SNC4oVwHBXfXn4r4TAExxMcwiuekfWZmeRBDLxcVDYhwFgmrBRXdhP3",
  "key17": "6767e1LdMTRk33zJByEjse7Kp3VVw6BG71AiLwtU5jEEUD6pTZ3AJ4seXGYWGVWxj6usq8JVMPXYXV2h6gagTBmJ",
  "key18": "pyn9ad9pG6csKCKMeQSDqnZHs2ZNCxEi4DPTvGCyczzqwibge4RLqW9f28ohiDiruWwPZHPLZtZkRnpbycHzGBK",
  "key19": "43Ww9Nkpnf3XyJTrNJyDsCpGqsuwY4RU8AbfC9V76rJUNB7haRgwhH7YxRPP9Tvm5jrU4PUfJbMZvspqc1oxVxKa",
  "key20": "5Y47gv25vuXAKcVbqdAGGPRkNs8iBoMdckwvLvB1v4gvTx3tBbyP4eNzyc9ZsZHCrw6rBqepnc72kearhmhPXiYA",
  "key21": "3DNB87DVj2bbjd4g7dL71hwADyfZ3JM32Xz1KqSJ3kNjTeqvj4yB8RvocoTHE9ofcKCLysDFjf88ksjTCq7zeiJu",
  "key22": "5i9bG2j1SLAmPAEq981wPNr5bbDwudfRcfR4kE7knPdJQFcB2fc9dGRZi2hjG27D5xfmfoCJLDfdTXBYBXFzNwd",
  "key23": "5nCA4wPFiHM5oXUjs2M8dmuUp1hEen4aJq5SCeSv3AM5iVsG9JjUAXSkRktcsMTgrpN5qXTpbwkUiK2igze35wpQ",
  "key24": "3YBhXdsa8g2zhKqpNo1x4Rwh7GkKvMduKjGjHEXAFQycUaLN2yoVjaiTb2Y4HCkjZ8xDW4qzT2BcaRYEMs4TzJjo",
  "key25": "4mjhmqfotvNBMiHBMirjsrn3JgsZGRsBfKUicv3x38SfEqK7ffhU2ipBaZoqmYmwybhUoQGA4xSRDPpRpaFBVgce",
  "key26": "5DhPzsfvn5uzUJjKngdZckVq9NmBWCQ36KutPeMUtgFUz1t4LhoyrNtVxZeQViAYHYxiJbp1xmykhsxsUmCDLqVu",
  "key27": "1Uk6qW2PiXc2ZfFqUFwGmFqENPvhjpNSt6AZvKf9fHLFpAF8d2pN8PSMcLM7WPz9RymkuQozKPXjdaADEefnZPb",
  "key28": "4tEp6BSn6YQJRSNwPNepR2pDeJRVrBoGSDhZqEiRKesTTCk5GoGkP9P185RvHazqADBN9s6xDioR9RabTYBARgK6",
  "key29": "26VSCbtY2gjPhphp9kj4bLUCih3ndTGQTCKNZTNa3dHSQYqEZvmtRazQTzWDvK1LcZcrkHCs699L9hyWk5x3Gea9",
  "key30": "3ayC5Ze2DuNUFJk4dh6v9ZN6yGyrFi2uAf2p7ZQw6b1q8nr9ofH4JigjQkU2TPAfNvZA75hxx8b9u8MjbzTBEmtu",
  "key31": "3kSZiAk316hyZ9GELZcS85jSrZrtP8TyuxNhguQWaMBZNZ1xSwDb63JKRwSESGirFnwtWcGk5akSmQ4jLC1wYpdo",
  "key32": "4NfqWBvKGpzxZaD5jhkZ9y2xQhV9TkrHDyZLKPoqtTrHV5K8EZrQDTtvst5yMEASh9kJ1J2VjFhCocWNT3EUkpQv",
  "key33": "9N8e7B7WfjzR9aoRG5wDr8rm6WXjJrVcxC3rwd18qsVk6aYrDADerzobXBfWQfuAkNo5Bmrs9UPQHjKFUkGLQR8",
  "key34": "2kWGS8ki8XVCVuNEn11VDVq8CHKnNoL2zvu3P3ENZhSe9bqunPFQq4DcpdsMMb167qYVvCrL18uVH4JM8uL68y3m",
  "key35": "33eYqwSpV5HEVzd6sr4WmKUVFbH1N8UoZcb7THLiFnx57GHxvPLSVkS1idg2LALUPVBTedEr1wsXhSsEue5Smcqe",
  "key36": "5KjHL25zYG4Dva5HaYKbypnLrxFKBJxGwk7PYeH8p37fERwgxkhhDBWEFEA5Yr6kD6Bv8zSK44Z5dwhvQjVtoD5j",
  "key37": "2PmdeE3MQXLyMRW89BPtEJoPCCoTh5qjZQh8AZBmr32eMEz9tFw9oaKFxLDUELksPYSNKKjz3WoArN6mSh8kcow6",
  "key38": "2m9xd4u6VUrCszrRcGyUCcdMERnQWkw7sxsQ6grVPLnmbnFMMyF5DQRJaHyXQRNzpUbPFJQZ2RCoAj9yyLEWpWSc"
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
