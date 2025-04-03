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
    "3ZzeTEqWKaMuGZC1NPY79KjCgES4F3dUVWq4prndoSvYyoCAFeLNdhJXR7FvMZsnd7LwvhxgJemsNjf15jUBdn19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c98wu98zQdfEKwtvQttZpNDfhJFmN1fYWkDrDvnwjfNPkjBcmuqYXzRyrN1sxJhdHR3Yj8C586cz46gyRR8iCwB",
  "key1": "22SNahZLE2DxBPgRhdAGgqL8NMYc68DGcNGErv5a232thTQB8QFYztD3MYxG7ZvMu4buVfJ9BnwHbE4G4ASJUyyG",
  "key2": "43fYaEGzEmFWTc1tRSCiUR8Cwq7MB4kWycUwgecvcbMb9NezdmsaG7qhvZczshMVLaY4yT2wFWsV4qSWwaRPnyZ8",
  "key3": "2E4LCm3261ib3mfCuPSnzMsr24o6JUaj7Qt9NrCgBTETCRGmsaSsp8XY3s1ZXRBgZhAqfFWKzZpoTwVNYVGkLzap",
  "key4": "4z4fJmJ3VFMRKvF1y6w7wKd76ySAe9s5JxcyZZp7p25JgPQ6fXytRXVrxfhuGzsSEWKKbNtEfSaduZn13SFoKyxf",
  "key5": "49C98oXBShvPBLxELnWpwG8edAq6gJjCYB11MfN5X7rjMRq37AWEnGCeM3zUN1FRHd7MXNv2cZkX9tKtNrSCx8Dw",
  "key6": "2wxL7jEMqDzgULdYb449mEnRLM1fg2uEZpz8w3p1Y3twxKJFUFfzshE5rWJG62firv9ivtTsqoHqFuwvzZqRfzkE",
  "key7": "2fo9TvggtMTbCfxSKDXA17g1qNtvqQRncpntnSWLLzsGjdyDcapSmWjCAeYaDHeRn2cYf645x3RvBAzqk2QNS6Aa",
  "key8": "5SEXruRTgPbfumNrBXvxjukhS71KGQDbK4Lfo6qU2KmTh7tjcZ6TouTihE8YHHFy5FYMkdLtkVYcnDNzUD3Aed25",
  "key9": "39Vkf1UeRWndwYZXPzPENaNf6M1usrkX3p1xuZQTu7TfmHqG9LbB6JJoYJXfaAuh5bjAfPqJm3mLyVpVeJzzdFDd",
  "key10": "2BeCpKvvUpuZT1PCLy9DMzmw7N6GwFkkZpJQWenUo4EvJp9EFk2UeXHG6svBNAuFaSjLUMAm4pjXdsu6A5hZ6pEZ",
  "key11": "5tW8yTGNtbSW75CYgMRhk6cJJPGLcb6jLL4PiNWcCCWffoHFigeuLKrDWFoTRmrrmCiC17o63wfyWu6jKMmMK4Gb",
  "key12": "548ARxp8VJGFoACCgpB7dofcYmmGNjy464MEFcWS4nMnznFtd7zz1qTwrcrqLrYSjPeKLctHjEKy2anpKBD12jT6",
  "key13": "41QZpemdsC7KsJMgdBy87TeKcFyBDotqZy6Kx27dURhBJq6fkrYTrDLGsPvxPzapRtH6yjM7UqJS8pAaaWuMegnb",
  "key14": "3ZQKbSKFzCikeia9tL5ivyNrHrTFMYuzcrZR5PDXEi4fUamzgCeUbcdrFqPufCcBnMeYUq1m5N1eEAw4yjfqQdgT",
  "key15": "2Zqd2Y43ztx6ci2qJHRtizoLMEnYG2DoWUnY1GuT13Nzz6FNPNSGz6GXo9jDQaehi6eNQcYNv9WdB3HTXTSAJnjC",
  "key16": "4g82svwJeK7GQwCskEiu8gUo7r9pjKsCFWrsFFVbLgU1Q3bRMTniyv8f57wNGYCYzhKxqGPkAGNiucXkBnbVAUqF",
  "key17": "HAtC8NxUfkfjJ3g43P3uwbZYtnK7qYvSTj1xWus69vzLY57wLH7RcTu8EDHJb2C4BpFpjqkcmcbnorp7wexaopg",
  "key18": "3HpoAwSeWMg5HTkWqQj3BRfQoYJqeJRL2s1K7LjvnLrw87xm8NG97DNWTG58pWUXoZiKa55ojeYqLgkapBPym8kE",
  "key19": "mhgtvi4fEuM858XvdGgqJm5iGb4yjjxpjXpSHfL3X8Sgcfj9kpEZyFyTjaHGz3DL3kZ4youbqDRuqnDLVykSvsu",
  "key20": "4qnsJCJuvQU4QcGrrib5Aze3s99F3UKNxS8HYjdgQdNbTcrUvcbX3UymUs7qQpoYSKRtdtyGY67tBCtVzNk3Svtw",
  "key21": "VKHoX2JKq5ve6cGxYuekir3envtPabJBhyiyeRaJhGb7XQo926eedBb5dgNgZkvYpdTc3pzDyEB6KJQoL1a6io9",
  "key22": "54Yoffy7pJg9Tkhve3oNM9kcYg7S5N9Uua73TYJyQGDw62MF139ArWf97xKqr17g73mN54WE7bWi7FoSGtFhTwam",
  "key23": "4L6QYrx43voXvQMPQE2rpqn4DnbUqHcRfYykHGQHKCNTKUXArRCpiuGyksxNBJq9gNTN4aSQMu69ZCaN2GPW17F7",
  "key24": "4zjsLZdYmRUAiUjbX3gmVeUAPSsJdfhfaiNCbzZqHwCnWGWtdzSfpiAD7jvEPHeSpDtaFnW5YkJ5ExM7Liz4ARiN",
  "key25": "2qBtiQdNQ9VNABuUjobXe26N282X1JS8NusshVYGPueE3dC2pEyeBU63eMcUQEsAoSTL2W8ztSga332fpzQHCrjb",
  "key26": "2YWwN4CZVmxiUyq8MaWNhCUJCMDEq1FiUJCZo8fN9pkqGBiWVzdAg2LwoGLprBxnPpHBYYEZ1VukifggZH4ckvr1",
  "key27": "FrUQHHztj8uC16TQjCdDAxsCEK3gXUj6KSdn6jNbR5L75WAAVb7ihRRtMgyGjbVfXL6Dn7P9PHy7R4kQhXsfEDg",
  "key28": "W8YY4WzyUQyD3C4Tfb9yrS9ead1swGbNPAauVuHT7AqteZ1QUfB9vyGCQWDpytVxCPu1ZJGhJnutd7M3CMeZHRU",
  "key29": "4zXkjFQS2FVD4gUfTLFCCgrwPvXTWvvwgLnNRx1SWeoGAVYeM2hLYV5oBdfviezwNWhreeAm5i4mkXdqH6zGCNV2",
  "key30": "28r9ofdzExmzkwdiVuWMcM6cDZR38dBv1tjF8tFXESHLPcbLWH3wb7nABNxNxhHpjFWAbDe7UaQw49Zw9qVYWyeB",
  "key31": "4auoYtMLgkdmxd3ZeYgMfRTsUtDpFnSkqW1NfFGeeXq4ybDgu81u8GjrHqA6CyqReqq7vvRXC4b2QQeZKHKGJtxc",
  "key32": "3Ryyi3L6DcfZaxjS1MDBS6HmBYJk6GB4RJSePs4Fcp5eq6Coj3cTpMSFjvL6DhC8cwgraDbivKZqbF374pEnXEMC",
  "key33": "wv64Qa1fLzCbcF7TyikJH6nz7YTPqUhxXKwyKj6xbYsFjDoAqggYyqtBKunuMCDNWzZ8nx52UvZD6YZFNFenAyW",
  "key34": "2boFxNLXH69Xh7KaHJuBuSge7kArCeGNq3jTko6eTKgKMruekFWrfGyzEC2ZcrxfB4FVgoCsCDFfCM1TSFXda4ws"
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
