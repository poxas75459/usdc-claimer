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
    "3GvBsGtsQqbQPGuBnCp1dnnxVnD9Znxhb9N7KuzogiXZU292oP8M4ha8uewrLqU8vexe19zfDzMQ3K8KauWvg4hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53tAZ39Pey2KSy8FTLFR274aMLkM5yHid4zn3hLQhNMRu3eksBbNq9a8p5FgZmCtiLdKhx3FfHwoWt3UG5SgJ7Ms",
  "key1": "39irMaWZzeBiysosxhTo9Zb18f4G9r33atahgXRhkZDc4PGedLBn7Vc4kPvAnUWGZVmJ6gXHYoytD1CH2VAe4HgZ",
  "key2": "3AcH3Pa1dVdp7Rdy1cJSpDfsu4kXAiKU7ykVWaQZBxR7coi9wTbtzx77ZzqaUzexbbMkRHEHpy6SEXnfpLBBwxGB",
  "key3": "2jqrYjQugdkb4VcsCs3fgcEykfxW2WDN9CRcAKXF8SwoR81X3jL7TjGbDdT4zr5PHabTfgaxLzC7dW7u61LKfFY2",
  "key4": "5zt4HUZPKFb3cahkWPjngQmGoQdYs6CQQ2xLyD38xJm5p9f9yYBJfx3upzjWs2mhW3yLcuRioYsknP3yaVHjTJq9",
  "key5": "4LpLtkyZur2gPj9ivBkmUeDZg9vjYLgvV2kPu9yRGbr5U8XWQyhX3i4Ri3YLA3dz4tSE9yGve6jwLX8dfVog9uFs",
  "key6": "5iFZve6MK3yW5nB4hs3RJ6MemArEx77p8dYF2Dm3GrFegxqdSGAnSVwWaKY3EgkGcUrA3ApVK6CnDL22wKGG1EgN",
  "key7": "5eQeTeQoz1ieU96uQybT6FVsKujTZwLUaVbWc6USHtFyuno6cswv4uuQrJyd36QwEwLHkkXGnJ4mtsQCNjtrLhca",
  "key8": "35y2BpmmCPudP99x8VZDK6zokMPjXQyiShxjYeat6pJxFFMEE2aMhZLxzm7K6oGkoSAs3mZNeCYQym1xTbChJzWk",
  "key9": "3369v6RjsbgZ9W5hMGnKQ7kowUb8fbGxjdvqXKnBEoFkPc8Q2ggCuYzNRhjA5hHqiPfAaPVqHu9nicVreStLtrQa",
  "key10": "38Rw8WijniWAKMm7m9S5dTQvL3g1kNnCM1LSJQQesgcVB7jh12KsZh4EjHpJoLvRtSmUAtGP14UvqkcRMMnwsMWV",
  "key11": "5Vdejy4hDDLdnpXHjV6EDMaoutuegiWWm5PXusUDxebrURznbvwKRf553RrbW6xgrzdeMckzwpr3a65czFQiSKom",
  "key12": "3Khb8cv9qva6p6ftbzM8gT1M9HXApptrS4Sf1zmMFSqma86w3cqwxCnJKrpbdyvTquKom7qg81G4nYYdsDmSAK92",
  "key13": "KzUg82vp4CPqv4s7uAuPAryaq9xN1hgVPJhXGg63Z6JXdVhwsfyVyHUx6HADGRzDj4FxqRzduXGh2yd1WfSaXvL",
  "key14": "5bBcAk2d7Gg8jC6cwUEBPjzzn8kxvuWDT8Bzw3G8D3JY361j3CbxY5pBSq6XtHj5zh1QNZAQccY5jEwcVpBmiR2k",
  "key15": "2rXihEybnTYuY5DnMv4jnV7vcSRWXuPe4yuEjAQqzzMGu7EHFrWDoFnZ9UHU1ny5tSKzdXdvheT7T1GkCiwTbVcm",
  "key16": "2TzoG1vHUx3rJa34g31CJooyh9LtzB33ppFPUhBrw5mdM9cFznN5NrDV2ezb9fAqqFXrnwV6J2Ev7YVv4w52Yb5s",
  "key17": "2BCCPW7ErP8TVkjnPPap5RyRAhE5cFzMUi9GbfTFeJd2vwoSwDSzVsQZB2LFHwyRiznB2anEvtvePMoNZMh1PNBy",
  "key18": "32UsMRio8gnBuwe8vnNiVsrLXAJwTm75aUyJYkRQQL1MiqsxzCKCa8D82SYvojfZBuAA5CpTBGg2LxakzyTcYhNi",
  "key19": "5hzDAy75VQza5sUDuCgyomE1BZQ5oHRBaMHcdR3o65ZzsUt2SsrR8bw4EPxMpkjH9QAtNzsLzpdWcHXT2uajinw6",
  "key20": "4eL7KNuTtufzcrQcwa2D8VMXfrMaRFXanQWaDAGdJWt1SbP9aRzehAUPAhWLRnhBZEqKFEyQQ6LRurHyExkBX7F7",
  "key21": "sSEey5YfrDF5Mzd4ohgzip2CKRJgWM9DrCSxAzoc4kSqPb2vzwDB9crxHYmqh6HqV6zQNwou3w5SqzJfHcqWhJR",
  "key22": "61X2SW6ckF3G1YKyfjMnvycwME7yxtgdn6JDahd9tj4XXALpYTrhzPcNPaAanwKnyxFGocHQxDPSGKXdvCmusMhT",
  "key23": "4uCq1x5aTgypYsx7dzXAnA3MTTaC6SadF5zmH89uLbDwv1cwXfVHUK2QbRjLq9Mp6bQbb9ZREtZzdXqpm1asXQ5U",
  "key24": "3ZCxfmCMcxFAAntXzytPeuWb4XrgMzX98VrBRsxS3zGreB7yXaRLEHww1S7mDVQNKr9kqxWdHjKTwSh5baXAsj92",
  "key25": "4eq2RJ9a78vcyW1kmJyfEUrUFcz2NmNrgYto1Cyfz7sak4SBHk75iEdsA8vgVj5a8se4gvPEqaX4GcwZ3p219hGV",
  "key26": "65DytovbKXNRrQCDPUDnit4fEqXMD7m6c6uATjanFvaxVbEr6TqmUodbvqMMWdDMM1N7i1WYPyjqhWJxU5WwjfUY",
  "key27": "4ZtMfGQW2hfyToeVVTqBYd8igo63xwDKsj1pypBzWf5Jg2sAVoy1ULc2X6ppRVB3kaedszcRqjrV6ee2XxRfxcc7",
  "key28": "5ue32rgNYcikQbAZiZRe4sv8JSFTqE9YkWYsPKFFGEkcHpgqLL63aBotAz1D36aLPF9yx1UCmRCzka79uLZpt5Zs",
  "key29": "5WS1NXG3xKp9WA66TVTZNAw9C5qquDiWfeCanmQpF7vzPg9oVs3qfoP2c4TLRDzQEGnxyCoxEHVbP4HNng9QgX9M",
  "key30": "5FrMAGKPTonqXqtmXd5cTDbbmFwyhj2wZBEixYfySzDGjfrQitizpAGvoeBpX2JRiCSyg96zoLAG47UZcz3V5PUk",
  "key31": "2STUsthJeDW7CYYQNi1nC8kkeUz1LWgyZXpZX1MyQJupqzY2zHBor44JRVmCkWcik1wcV8rDQSx9xTaCWAJK3Qxp",
  "key32": "bz9FPwxZ13s1cDabbqHtdMMcyWTj1sFnSx58JDNrb32MPny62aG32yAwNceUrDgUPPg3oqcbynwjbDybgUdrmwi"
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
