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
    "5TGHe7ej4ALg1VPYKQifE63aPdPgYTMr1PXTHDafHFBcmJoUUbA5yAuzTpUjAX1Y2Jud9s7NcfuGTxp63L4BX9LJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FGWJwu4WfzmmMdcPQrWZXL8ptXwoPSeyh39waoCnCFHNY88BjrjyH9KW156yavyeaa7fsXoQADqCd4zmmSF85zB",
  "key1": "24saBKxtQXVgCmGKBoimDB4sjz4J2ZAkKLKXiFiqE9S6wyaZYNjZWze9Yj9rvmo5tUVVNZa6BsxEEAYbrnNhRzrZ",
  "key2": "3aAbHwKqzL6JbYE292QK5JVrwY9md51SUTRD4iJoTPhDPQ6YJCzfGP85oRekod7y7zmDtcnHu2HDH3EaiMsTjMiE",
  "key3": "5wG7aL23mcQKtMp3F4LypdeLn9m7JcGF3kDvUFLr92eMc9kZ8pzFq5gug81dSFBfH6rZZnL5mBmpxo5nGtsWSNDH",
  "key4": "4o6gEPk4wybA7NzSiSG9hXGdi1eHK32yqVcnpU4AeDKgAEXEiZErj5depQxNbTyK1rcjkcfNEbscj8ouUZ7weUYV",
  "key5": "5PHAeXb5KzHU6xBtzEhhAjcqaiFkJ1jea2X9U2YM63SFtEMDzQBk24VQ39E6ivzKfmv3pvJDoKxCad8suzSfcAqu",
  "key6": "42yQRtxd11gdgbDjBrGGadde35s2edXbzMz5WRdWP4dmaKRQY4dGs5eQwzEdEGb6yTKSyhwdBev6TGFpdVVyjFFs",
  "key7": "524GaGgb7oe8V8zW9v3Sj2tq2RyuW3JUkhaH3Lw7uA3y2MEQ76g3zzWV7SUMUT2MA3yX7drrGxCxMiurCjuNHYXE",
  "key8": "3XKEBgxSWbxfYff514zbBsCztmVpCzkLESWA5fsC7yR7XfAbngVXsxLHbPE1Tbz1gh8VJX4BWeDm8wH6MuUrbzCy",
  "key9": "32sfqr2ihp2cbfupnmFmuVaBYnDyo5k3vurHVU4pHZpccw6jKcrBQ4bzeKAVuEJuqBtspqQ2uEzLQ2JaaU2ESD2U",
  "key10": "4omtFmzoViqfFogYFwSrNS1i9qLh9uuGfb2VxKvHmEBce5AwBo2JMTZyYM16SgzNLrYvveSv7rN8fgqcURhPCfgF",
  "key11": "64MdmizzzRAfsvFAmNgpUrU6Bs9YXictuy1KxN8GwhkurfiDhTznyLX2JVenvKEKjC6DNULDmQYQfLLUWEmCwCGA",
  "key12": "5FWmgCriWcN8wyE9cD9g18aKkN2NwA6eAisRBoXqXXaTsKYwRsV1fs9FdCdi8QE6md624dq9MqGQFmdMiHXZwz6N",
  "key13": "cFcWEs5fJMx4o6ny8fWkC8dPrcpYVpQ9fDGovsbjcjkWTotvS2c1JSbp1c2pbRiz7EFiDdL5GxHbX7TrxgVGNGv",
  "key14": "5LYiyoUQdhRD6m1oVRFYaRzfTpmKwwXcKT55B9rtK1nSLYF6FTsPTHrLMWpRHgrH8QBu3Da8JEJrBUHi4Zh1giTb",
  "key15": "55kyECaQp9AR7PjKVyJEv7MLRNExXfm2e4tFd1QHjr4YTDo2FpcBbohxajsgWaxq5RXZGUgaCkwDbUZwR1oPQXUH",
  "key16": "5ZhWr3TNS8AiD3656EredPkBrVzUo6fRJd1xcc9Mer9gZhjp4MVgFdj4K6enXjbQtdtLoiw3bF7CKtRBtxw97H4m",
  "key17": "4EGui9CQCezUXfGN2bG5ydb5fwzshBMg23Qg8kiPUaXJVeA1V2fQTp2LYvMmY4yYdHffjrxDYwc3HPQVTGoUh4w2",
  "key18": "4DbPs7YwD6GuF3GC99JVyLY2W3H4HmtkKviebhFE91BtengBHGjSVQtgMDrQA4KJZaDHa8mKt3aa5WthGqThjwiv",
  "key19": "3h8B4oiCU6VKgANoYs7kMJ2yw5zLqgkWq2QueVv5rQ5YJ83hun8KYvdRDusAzBHqVwPp1wc8KikTJmpMutc4jH1A",
  "key20": "5QatbPupTJ6YGDbFsmjqyuVyvKF3K8YV8nuMcmXB7x9TL1XsPXP7D9x6cHoyN5oPD3THhnBnCMAYfaZNobxawwe4",
  "key21": "4yvaoNY2BkJtEx8RdAiDM5McfKanr4zeXAo9GxHkLPyzsVjBp3KW3mPrA49Ypd9sSsBFBXm4WCRZyxHmSy7HnhyD",
  "key22": "NKqRFDQkbezSiChtw1LNKU6QsT7GwEMuoHyWDgvwdgypjZLPioeAE2GtnDxjEvtzyBYap2LuYh6o6xTs9oaqcNy",
  "key23": "5e9Toab1yaqHLeK5gP1pvsm9APMLugt3qe9vfLyr66c7fNMErSNmSJLmfmNMgusSMDD3SVJT44w4wzBMGqNDxfGf",
  "key24": "2zUuScnix6ZRHLyv3T5VqDHJ6vVv94TxuKXzYTKCU2GDPpEJctcC4WWezcuYHLsnMTnDPxFxznFWouokzVm7eVDD",
  "key25": "46w5Q2eCmBEu2HdAoqKzM7LVqrNrZZREZ3ssdkiDB7TKfADRA35kZkE8ZLRMbPCTycPvDYrtZg7MmSGQDd5BiyL1",
  "key26": "PpxahZ778v2Sc3Ps8eovV6Tp6RsMydbUZeqw9TJ399T82Bkr9vBhT4aujXT9k74wLctSwETMWFALmRj6Xe32wcu",
  "key27": "3NUVf1EFdh4Zmye1knVLsQngFayM2fhHkJyF8NCwqjsi763H5xg2tpqWr3aHRWpYPuruBS7rCYVWqQZmcgwM8CxD",
  "key28": "2LM2n2Nb4cKZS6c9z1hpddhrQrZksTR5vDk9yyFgS6N3eg4p7FPYZDuoKCKzMcD1ZmYKVonAaTy6EHrKh2Jt2pbQ",
  "key29": "zzVBUNU6wyGmidCi7q8z8yU5rtxGZXYo8cg6CXkckWVyKyd39DUMSXm9zGYCS3K8hESMAiB8HwuCxuAjsf5AmgF",
  "key30": "2Rvr636JWTqwierJ2GcMDxyJ3ah83EL5DdgaRQc2uuk2L5dgLiWBGfNTs4v6tvQzcByibUuMvzox2s9ZuCDxKxXF",
  "key31": "4gU4HaE6NLVAUicdFBjVBuLDLCWFvEbfMrMn6TB8XukF8zzWZUF1ytXPUjfzPmR9sQAZb82yAqKYKoW1gphFvPc4",
  "key32": "4sssMgjtRtn1yLGztU5Pm3M9AKp4FKXX8ysFmd3Ui9xd3G2pvNpja292AMrkFQWDxrVAG9Xzt68Yfp59bZmX2ive",
  "key33": "3doGzysUSmC3J1F57sVJQDVLT4vpUSikrx8AxxqYJFx7wiqqXASLNJD6CfzT8FXLt9nZhGhTn9g5t8Z6X21aes3e",
  "key34": "2UF2rP5uytioSCL2xR2P5oUxfCyiLKtaiNU3dVZGm4YcnCQBEzxrcfXDiTALvjxj81xHYdabNMXVDCKoj2JVMEs3",
  "key35": "4EsPnBrk6oJgvH39Dr4iri9z6y8a8WDgLAmzED6n3ni8jnKrWUjjAPFLpjwZ5Cz9QifWwKzXxq1pcEddf2agTfv7",
  "key36": "EGw7BT2gCr5s2S2jtJKEYAv393WzxfGQJ3jbWjYYhuqQ2DxuML2V8Gthbe2pznyA16efqRUzFHmm3XLLpcVe1iN",
  "key37": "4PTi4Jq4F6imTmbEF1AFJUdXd7M2dAgvMsMvVKe8kRnyK33KN3xvbAkbi5iSRDT1c3LaKi4cXNA9CfyjchZ5MAJD",
  "key38": "28sHrBHj3TUF6YYpn4nB8wJ9ciWbnzSv2Ga4Ejc8wtKMyYxhyx4D5kHk3UwsqoMyDgw5L4bQd8wDVEePiEBMq5qo",
  "key39": "4NJct6RC9Z95SdqoDgk49bua1q9yUXjkSHVnm7KnrhC7GM78kDzdpGhm4HMCPkCkypcAvkLzies3Xikdeu2rzcAc",
  "key40": "3W5aAQLeYxGK55YY52bGePK3hFrVHCq9Z1L6SVtNFQvxs1eZkLy7agde1QtyGHrYg3KMbNNQjTCbYJwuXv4rjL1G",
  "key41": "2641oUTqC9hg9BG5WoQKYNCRBUdPpCY1dBudKw7588ZgQMKe26BUG2C1719dxc5kvF7D5aQqdEa1Ts3q6d2psDWf",
  "key42": "5Cvs75gBoagKAxDNQL1ggkf681s7DwfaYsVRNHvrrXL13UCREFELPvPrTkGtAmPaDYKMYj29iXzCyHDPdm6qRXHz",
  "key43": "3gP6tpH9A8VemZzyUjQoY69ZEE647k8ibpwFeKqvNKaubVRJyP4H9u5RW4XHUhcny2syKSgAJbpRuyWQE2RDjwQb",
  "key44": "2Arw6GcGkRYyjbM3etd514LJAafgyPjUndxNTSxSBj83tLT8XDZR1z41LLRA5pDmUbnQ1C7j9zMPciNdWoeAh5vr",
  "key45": "5kQ2Bpyzwjxzt9v2LWGemPEPFpP3MdcfEaQrtPNQZD28jFjBjKmywJZPPYbi98mMJcsjsKs9YTQ3MefYQAnTwViH",
  "key46": "2fFvV3QMq9BKWhvNLmCxFGcEJwysQHUa412Fo4xUjKoKqLagCGidA1L7ryKPZ7boE7FoMPrCQu6Go3MHLhAkXwuC"
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
