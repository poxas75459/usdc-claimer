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
    "5J3G6HEY5Wh1Jaa56EHy36K3vvMocTGq7p6L8y3S58ZeNZPfDva3GEGHuPeaCVmsAHycEDqNwdXjSho2sBVMWtJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yig6UsbztEvguSAH9mbhr8BiqjpruvxfXMZeMLZ17MhsadSuqZeDqzoT5jynpbrwwuF2vnkyqAkBrtVwvUmF6Xq",
  "key1": "Ft1EsyoTuAKvSoqVQPygwHSfcpFKLayABBM77mauhaNJ67oXHgx2zvYjK5BAx6GDRiJQ4GWgKpdPJkHyVgGQfCr",
  "key2": "39UhsRpNVJ92MAF9jhgYzgbcx2h4F5f4YJNPswnmxH7QSefmpz5HFNXCRKRUiejt5PSEBK6Fw9JhSGhfFdd6Gfc7",
  "key3": "35WowCcijD8rr6hX2DXyMEyJQQTzuB9hhtaDsko8afvaD7VkKAqHnxEPHMrfDnkMoYY8FJrV3hra8v9epAZqG5Fv",
  "key4": "2CtRBQNMM4nAmDWHyAxdHyD2vtyjHNaE5hVBPqABPNF7oqUHoyft5zPz45HTi3MQ4TGQjzSeN1NDpHxxzVrAKi6f",
  "key5": "26iSmUbZBWJF7p6EMpbqsMbXwvYC9TjrjmGPX5iy7HjQM77UxSGmdb7uoViPvL31ZcH5yBmUhh7U5GKdcHt7Nymg",
  "key6": "5bsFzZxcab5UcsgrCCrhBM4bixt4fj22XKbXNJARDJDdmJwiZbKoFJtjnQyEiEJ5ZDNq5R5WMKPCeAC6Zj2M8tBr",
  "key7": "3xjhtZBh8yCDHoRCVRWgfJ6hPufHWGG3Dvy4wDgWB1BFE16qRs7SX8z9Khuaqe9zDKagQLmzCLQs48fvuu4VnKGM",
  "key8": "QeRNzVWZqURDp25D3QnBDR9baUx1CfVGxfWF17Jf4vPZaKPvyygLqCqUvR2bbN9t1hRwvx2L7D5qPERFZyTMrb7",
  "key9": "kJneGDWgLvRiPXycMJVeCGtdRbGt8rgzRELSUcfR39BnQEoh5opMsFtHar9mVreqEnADcwPVE98wuCmiZ8usHEu",
  "key10": "4Jpk6Lpj3YY2vZugLCVqC74TtuRVMtqTFzqh6oEvogrx9kUWKBqjjkGoD2DfYFxYSxz2wN6WcoDHv1PbwBi2mmid",
  "key11": "2RjEcgkzjFdXDuAp4J8QqZfRC7pWH9hh2NPsr27tbseAA5maHd1tMgLqWBZ6Z5KUE38nePPbJ5qCyRHvh1dnVi63",
  "key12": "2uid4qetV1qbagwJ83tdfNuTrCg8ZrdPfgebLDSrPuBGQBia5ES8N5DH7fgHsBjTT8NobnyStzBzCysL2W2AwxKw",
  "key13": "3ycWKC9pR6njz5CKAATkRkbvxPGNkaRbCD2DqGoKK9Xmh99gjTXp4iAAjNemm7Gz9HMDQctKxDaVQMk7EN948ymc",
  "key14": "5pkQsurHBpCR3zYrkMkMyTjvZbmxVi8EFEacX1MQVJc3X3qjTSznVE57Jrb38CgQLpgBAKz4ygzDusCE6giPnm5e",
  "key15": "38uMrZoAvcZuLCsVgEKEHPqiTixsH1r2PZtJ6zsiAe5cMeR4egx3uWFxhY4iqJQoC8EcuT9aRicUhduTiNWHigcD",
  "key16": "5UFFgcneEqsTVo6mfxLYdhwfkTsKzhFkuyWySYBeQQKxKhEDat3KQx3EPPU7gNyuHNrjHm54JUJTPPQVffsnVyhr",
  "key17": "4FPQ1NPAZ7kUakcC5AHKvMLUf2EhRZ4bTbrnj41NBH7xoktXFMKZEbmznEc1NXpMM55yN2KhDGPxrFrHZkk9gFrY",
  "key18": "4BFYL8D7ZRk7xUwytaQ3wzsy1TqJN5zPtwTA8V1Kfz8212R3TZnaaoiZZqZ67SyW38CgiPHFip7vthaswnHJchup",
  "key19": "4YeUskfpn9sruHoe9oSWbBjWqzbrL14xR5uDozh9Z1hA4ytWwv6LVd36Neev5xZgBXRn6QewKQ2wPm4NSnKVP1q2",
  "key20": "5rebEuTZi7oZyEWAEnhdSzFxZk8r3zvU9exKjiGtKyXY4rFBGSGgsSbpTRm3RGAFi3cridj85v1Qqk1h59RMkCoi",
  "key21": "4U612SFPb8uLB14mkdQh3mCFfHzjTLg8xhpr8sQpppx8kmQkNjtNtXgp2ksCVLpB4xKonxGu6S4uFoq8oHadx4EP",
  "key22": "41MuacFB1XxLUgcz7ZnC6Pet9LhAQ7P1vQchgRNh9RuqDr3kDYfVerYaJkPdQ41rgP6xXwGBFwdgbaCrHcPr7Nrt",
  "key23": "5euNyBYqbY2CHiNqskDV4dGR3KZyexLXMi2wFUR1jy9KutsyrHunM9XrcfkzreyP74zrXuRMV2hdnSEsVCZdTJjY",
  "key24": "36F3xjS62eHZkXUnFxg41kQ12G4K5qWCPnD3b3HtSUzgDQfcwnhzRpBhEHJmJhAft1zhmPdX3qe2pUUEoHpUPit",
  "key25": "4deT386arMfAwpzfJwZmZngpkYxZbshDtFWszorD68u5SU7qbyvgCGWmFnss5X4ykTHwj5khf8unMnKjDHwmJbZ2",
  "key26": "5MFcGdeArGHyTQvfc4pHWWtJzZ9yPHVV9Qajd1AHLvDkweUWnWUAaKSx5NUMXfUWdidpUJpd6h4PmVCj6ZvhuxMK",
  "key27": "52LvETT6ZjsKeJgE954PVBW79s8GyktQNCLyRytGsfMonKzmG6MuCyv8xvCLQpyCi4WaXGaMnoQ1rzR8YatiQj8c",
  "key28": "jF5unUb5xw77ig9ahTXLxrhw5kKwic8A5KVNmo5sHfpxnrg9FRXND1fjU99XqsGrn13L8Rb8X1AcvAEmU6XpDp3",
  "key29": "2p7uY2u2LSh3fJjEcaKKvsmknPkU4Bk7GwfHXN67Qz7fwJQfGwDwnYCoFen4NqdrTxgevWFiHTmuo49qi4fkfzdm",
  "key30": "s36Bwm6vUfz7TFfSjMGTUBqSgDiAFCqmUfS7oZpKZuA36wdifyU5h7PcNa1m9FSHS8TmKFcPTZq1x9D7gJyYKP3",
  "key31": "5DtrpC1v1mWBBktpXWp44xLGNCtqs9STwRFxsssvbS3CmwXWZCJ9NyrQfytSEB1FtAznnp3cJD6vRpbitXr9w9NU",
  "key32": "5ThsPu9ScMMhYKKJGpJTLpgx76KuZZFf5kDWecVYWutrkYbbtCzWXfQMqyApCVSBWfXwz1a8ikkfvhvfGPqCau1Y",
  "key33": "2u3GMowetLBQnF8ZsWo6YMB8syuEnWDPdLJpoDYBcnZdnmMcZYgP5eRaTGzSjo1GqXCapPSt2rK9FwYFp7QoXaeF",
  "key34": "KJAo2isKEXMFPx8vUaygkpxoSxX5GPSZfg8kD7onifMVc64uRPg8hjWRuRyunQGGW5M9b7tJnHKTLZ6Afrco66W",
  "key35": "8SWeRXHwhY5ESnhuofacrfAnpaPCay5RxKfMFAPXj2tRy43X349SQHRc39sJZhPPJdkW2pwD3hDMpGR6J1z9Jso",
  "key36": "AANCEEXDAqXKsLiz8z5VbhZaKthYknKoQ9oLb6VBmsxUCurnNmw1wy4BRZttmDoqpneqgD8kQxQSHHxqC7ae4eJ",
  "key37": "5YE5DQeyTYUBhDCsuTboNmugVQTmmrGRKfkVGkkTX9mNGQSqxWqxJdegKxKgZabzvHiZLKCMycgCuMLt5s29mMa",
  "key38": "z57bV1XNfkigiqXAVEnyWkha9tR6t8t3BxjR9m2wYkmXeqhudPPTUSKd541WdDJhM2yAbeNMhSx1ukSgjmL5Lre",
  "key39": "3BPCWRKwnfYhiK792UZYYPYCqDysQtxW9TTsBpZekfwUcQnVTvoYqvWVo7LhBbuBQgKid5sg1mTyNEFSAqmiczwB",
  "key40": "3efqGCbdeRvZkNFQmsUR8FWYD1Rj9GsaM6VoyQPqYU9S6nK6WXv1xM4wUmVW6o9G7Wa8Edcb2miSvpt6qHW7xBDD",
  "key41": "3bUy4EhVYRuW6XRg9DiL4mec8xiKWdAHyCVxbsSgyPU8SR113DpzC1yW4AL3dEx1M8VMMboF52rqaG5JN7cPvK9W",
  "key42": "8nBP4mJ5tvLLXuQaD3LUA2d7cSmDJcE9pYDAX8ZmXdbTnCRA45xe8tC9qTakBbbqmmpV5uMvFQm9SZKvDiwdesA",
  "key43": "3KboNP56jF7ZH2sP3ZhBGMjMNYJEeJdHxAkSL3UfyD3G39rSUozyqzSoX8KwoexDnfuNFg7RpZ86TVyGmuANbiab"
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
