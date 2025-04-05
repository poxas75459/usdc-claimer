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
    "4jDp5dPsi3PP9gjeoyZx9MCKGf1iUBBn7oDYGCgy9nbpZz5sg32QjkMbGZXgYtVif3xMEWmR64DyuJFXgiW8jqnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62dZEVdrkPygTN3aDoKXiDZkXnREyTx2dCNxuuF1n9gzdgrBunJdD3rWn33rmMr82gHTjqRY5BmAngF34K869Bg2",
  "key1": "49B11Tdu2kjvXb4tKKdJ6yrNxbC3QAKwpukK6PZWPMvc9J7yzkLGAiYiXNk62iiWz2t2HC3vxTPGtZaw2Cqaum2b",
  "key2": "49jEjc1PeYyBjQYexcEYvqp9a1C7wFj3xhrk7U43pNgjE49hbDpZhmk2hQPBt1QArbvWVDyHdHRmzS9zELvcoi6G",
  "key3": "3b3RqbAKbpcHiinme8Zq63TwJJ7BBsxSuqp4swcR3oEZRtVnRvHJuwhLojSXTEysp4S2y7KS1SAjibL23ECGkKpP",
  "key4": "2hXXB2dVGLn3cNN5W15UdVhadWpEVLSo5auqE4xg9dcBMuXFnp57M9RdPe7VYUpT44w8KY8NNMTMLwYpNp9cN94q",
  "key5": "2L5y97wJdiVaUMNZEC3LxXcw91awU4jZv9RpdtfoB9H8Vnz9Ch5u6myuAec9113QemW4Jq2eWkV3rXAP3irTs34V",
  "key6": "3K98LEjZxE1q415C43mzVDu92cEhpH9Zbmc8GTdCsUA7f8fJgUzGQ19gGYvM2RDbMELiw4gt8Kbj8sVA1bbzzTe7",
  "key7": "yG3R3DeU7g7pFMZJHEbJekGjemHycv3BTJMp1KFruHCoJbZ3JE4Z6S7tid36sGVFYzSQ3F9Pm8zLshwR3aMb1f4",
  "key8": "12U9oZPiYkCLY9yWHSQoP1AxGbf8LSPFBKAjhf2WMSZjFYATjn8DCUix5BgMZKcftDyEpw72Ec3RK3Fauzq8XXC",
  "key9": "4kdebQHKft14dejWzbCRNUiJnCn3aLqo9VhyTL4Yuh5P47iABbeFLVsXSdSsNvGkD7xnHBcPbxgCAddSAT7NHDDm",
  "key10": "5qfgUJJ4XyqDAbkbEa2UVckYxfxk7kKtKVtuiHkjMcUN2GDRaJwwuQfyauj2EFqR8bT8r48qraAbgPrQo82CHU1y",
  "key11": "4vK1ncCQhG9sLV6xjdJLDJMKf354MLWBNCsWT5YML93yxoBYjEwo8Dx7YHG9Ne5B7Aqzw9woY2WDyRJ7vcdjB2dm",
  "key12": "2hM1Pes5DNVLgkz2cjifYQ3NQYd2FqBNLyVmXr4rx3MwM17J8nnXDwxAf3yZDoCQnsrHAtE2WCSzVKakdM68pTxN",
  "key13": "4wCxvZ6bpPoc4s1n3XTddPskkDaTER3njc8H6yq8NqYyEjLye5gHgsMBBkp6NatGTY3QEGcgHDiHmL29YrPH8MYb",
  "key14": "f6LoixoUrKc34HP7j1BegBXaNBD14SkjKpJxWiX525UrJUH3RgPTsKnqNjAsPDCAeP3MfHzhRGiPPB7oEUwcBF1",
  "key15": "5wrMSW8Whw63AetSW1PTQyTUKDAbhfDHGeFuMgAGcgChMXHJa7cbb52tj1BvePCuA6nPueFyQSJdKvXWmHqy3zN5",
  "key16": "2DXtK5oy9ahs36Ui5tJwBeHpMvMseoJPB6i1Kj9EhXnQefAQV9r7hty3mthwguMfMhrGKrp3cCtrQjHBQMun6Vnk",
  "key17": "4Wp7F8BHzR2XDY4q9H2aG3A7gbigrUfthkB2TXc2RmwcBZLvQX44HSBDVtPYu18yzg62bmgsvmiwsxgzmquR6MUY",
  "key18": "5KfuUin2a5akSdPGjLmmqUCVtCLnfYa2p9RcmEiZnVyve4kpSBktGb6Tw5Fb4pbugiZyitzBAHcGmQJruskzFyAZ",
  "key19": "646foVA3Qk8YFmipzogFLALXgiSnu75Rs5DNJbKhNVTXd73j3dEVtA6DxpYXXmVWQH7TweShHkBA5JLpCVezmy7m",
  "key20": "66sYFPKzSuNW59HfdhZBRsvyAj85v9RKkJ2xYYLMPVxMBE7bFTGKNMrmsoQEtZxeT22RmeRaZPTdsVJPwmsa9uJt",
  "key21": "5NWXvwELRyy98wNLCPWaspoMn2Nx4i9krNsmcRoKq4dvDm8oXDqZJddWYuM2NiTAYd33DZiN8yQ3XWwFJSLv6621",
  "key22": "2B34TKAHwk7TyBjt5FJZJLoAEeJiBo5K5PJpQwFjhyoHX4YZC7oaJz6mC9xEhqj8LzKLsa3HvH482TwkyU85KjRi",
  "key23": "5dWgToL2TyDdFc1XApim5UuKPPX1MCW1omJwUi426amksjUu2VawHUvZNNi98RsQgcPSxzC2TeY6SkR18UYPGv9V",
  "key24": "5qFYT2UNAPGdBHegigm7aVp7iZJvrUkyMuKssFSHcP5etNppFmuktEkJArAnndV8gMM22dqNHbbQmNQspsqh2a45",
  "key25": "5TgcVCMUzLBvY2fgHyhWnhjhoYNZyzrG3dmxJZrB4QhJtaiQ6MXi2jV2k1RJo8RR8mJSn1LkmwwKT9ewwnYHN1gd",
  "key26": "587KRUPV2EcHXUPQfoJ7MrWwxbKkVk2b7jcyJ4Tbc3N7TQJqcB1doTKv6TVR2RSNpAGdhQ5No8tmWw2AsfveSyL2",
  "key27": "52cxwro9i1Z1A7HzeMQbW5AL9AvorKErnkssaQVZYVKiG6fgyamuNUkNCGjxPheArDF23G9S3VKDkxkafTW7dW1d",
  "key28": "51ZxEthPkwpaAH2M3ddsciPXdq5993uYhKGkjQhVy1GyMmrvBsucWVwtX3ctXMbrVSiwmLL697Wc6G3auo3eMwGS",
  "key29": "TpyFFaBMdyrBA9nQyYTC51XZeG9qckFxu5iFY1aSZpHyjSNurwSuSsaHwtMG8fMBNVPtQSFjMEXYxJ4vVjMftNm",
  "key30": "3DW87LQpGs7JjcwTXfv9jo2H8CCupcgJwRmZYXXawpx7968P658ZMrsRoepaSV1R1mNHSdyAZ6CWVDkwedYYBMYE",
  "key31": "5nJYJ58wg11uqtScsHS5ZoDB3kUaF1ns5wjBE2i3yQbATnFDKWqFq8xb5BPf8HYYJdRNXm7XWcdmnFSVYRWgxRRp",
  "key32": "2gEGU5vEMdV4UuUCbMHrCY9u5E7YNni8VCWNzWnr4VH7EhDXXeTEpMV7rgC7jqn2X3N2itxTGXvWgeP7Z9L1czXp",
  "key33": "4hip3zA9TYBNkprhdLbFJtAiEHRmGghygrVMeXec4244LB8VjPBMrfmtvQvDKadJQyqGT88or32wtUcbpqjCeRtD",
  "key34": "3PQb2EgeYSLKRA2Vj9vfHsA9mqaHst1xNp4LPExX4snKnpVrMSWCrj3FXNxLtywWoWE4w96GqSUoet1ASW7seXg4",
  "key35": "2adpWdUyjcHBhzzF1gS6W2BcmMCD3sHmCFmRSHU5g9odw1wCYtGvs7riuZAeyw9us4fbYA2X7276PNmsagvsCEzD",
  "key36": "2CZYYC99XwLKKAYiKBhq6z1gXUkJrTRekeMdddyJxZ5QduoiseRgJbqct5v1bQJzyzd2t9b3TJBnajJnhTiWKbZA",
  "key37": "dNBgTHS5FqVnxWtn3r2Q4RaLAWxsSreDAMwjW53wXjR9oe8g5QBypb45yrD1dnkybu3MfDGa3fVotjmkumCeLeC",
  "key38": "4hejrfAEcmc8Jo4G7AFX5AhKgbrBiiw2DHyuHpzHrUNoJCWd6QTyE6k3EtVHjxXjoFUrSG5qcLmoRrrRUHJyLyrf",
  "key39": "24z5qA3Cinha5vqQn1sgJSGXE3ango4acYg2CzM8UyaDsETdHMjyoNKtdvYETFSLwh65s97qsCAhcn9hUsXtXmN2",
  "key40": "429ejFufQrh9SbYCb9ecULHMehfrAUhtysCfKavMVn7m4cx6arGyTrEuNUoqLVdW5vFbZLsWBr1HU36VV9M1HSGz",
  "key41": "4s4tZWkQMjrLkFSujbjy54aaxdZwyZRY1vbNyMvKWv77GaLB6Q564p5R1uxFu74G9LitYnpm3BWU757x29QBx4Av",
  "key42": "4yF2orAQJxJU7sWbkMzAhjprc91F6qP8sMf7TpXuNPrmx8U1kUUt1oA7KtScTg13CkGQLdqsUxfiFWgMJudro9Cw",
  "key43": "5LGLqkKmhUgwafAiL5pvVWp4DqB83V1SCN7VQCQoMKyv2bwgnrD3KeKWNypSy3peqqJTwd1Hdp3BdXcqR8dDH4wa",
  "key44": "4VDjpvGNRMb8K4GxGt71w1msWPP3mCNaj2Q1SNMSTSQtMyoaKsdkVdbNCe4BFauuJwWij1uNCbJ6qVAEAHqD1mtb",
  "key45": "2FycZoyJuvbKJc6q8n96Mtb39WXNCvfyzEp3QmuqmcKC7Y2WpjoDeQF5wnxjLLkSDebquGpXxwFdnd4MJXtboKD9",
  "key46": "44ER6ihZjZycqTuJrbyGkVEc6cDawaVW3RHvM2RzzmGiYrc8Nu3UUd8HZkh6vv1iCryYnUSTtiQxUMndsTWXXzxj"
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
