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
    "3BC4FU2kLnfK2vT2ZY2xwEPmph6vGV9uja76UGjiWeJ86UyVX3sEdwsQHDTMvbxxbQPbPjXCgzMqJSbj4dZu5zdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wMTpVaM1JkSUZu6sc5HjUfpfSr4YbevympKxp1eRfb3URLLRG3hLXfynaadvJtJtys9q5vEHfddd7318nUBwGoG",
  "key1": "P1qJXxYX7tAjGvQ3CQcqp4S4Bf7BGxcqJmsx5GhH1XoBWHxV8zsrcwoGdS7zsL8n3rLLSzee87M4PzWn2AZ5iqE",
  "key2": "45deY4bcLm2bwbGbzDFaRTXQYVsMB7iDRGrY2vDr3Q3HHeoY1hEAYEg2xPaiGCRPYmhTKykyrmpG8BdnXPsLxooa",
  "key3": "3xoaGAT3fMVAm8n9fQnB8XYJ4MadBai5ErabTxVjQbJQ9GcvLeog8NDU9q7XXXtJEfnvXMvWCcRQdoQKyoFmbeeh",
  "key4": "218pJMiyJJruoks9knNTZZDc8f1M2anSm5ymTrmY1aZatzPpLHpuprHGm3PQmMFZEyo3BXukZfzciwFBjskaKN4g",
  "key5": "4urUxvhjZzFDFtPoEi2oma6GxKEVkpkViCcmEfTKPve7YSNjW6AcgqMGQ1w7WrEmdpu4ZZVHUNnunTjAADv27xjq",
  "key6": "2s74kHVaXVvaQr1Vnyh6oykLV1Nx1MRdsDnn8o4w62iURkj56HKP8sbagBLVZBxhfdbjdtiUQn4shbHauveVaYQD",
  "key7": "3ytU7zFJWnKaujPoczZJKHWRQ57KEutpGs21dFkryrXhKAbmiYg3Vf4we7vqpRWQgZn3cBudhPwj6mZsQSnyizYa",
  "key8": "3VoyNmzjgf5qPWqKKFHdVqMGQSYRQ61PnpCvNTk5VBw83cy7tZpsd8YiUxNhFCbo87aM1C8wz5xoT4743FRKXzQp",
  "key9": "2CggrMtfVzpPCNmPuTz5EasscKoruV7g3vJJGH82bcHfkgoYzokYVehqDGGKoq7PqdmX9jgmzK5XRSEehzXZxFUT",
  "key10": "yh9ZBykhqauJuMiSjkaeFsCwNZzr7gF8RbY4Rp4cuYKPHVQs2juQDsosM3zAdfMuE9q4urkJcW9QkecbKkkJy5t",
  "key11": "56HZGUepodJQNjhoNxPS4vHSY3ACYy35VU3cvNLBJcjZ9bwJ1jrfKzx1FJyGVNBmdJAirniYBp6KyLfsRPsUYN4C",
  "key12": "5y2sgPtYHdWs9JyH8gBHgA6PcE7oXF3EQh1WHeVsgBEt6nG15twBvRbeNTynnXvSBV7iHYkhaAUzHmpHbkwd7XhK",
  "key13": "46yfv9iDuPJsxuXGetvLSuxQEdxXPYQE7Dr6MHb14wVg6GV3538xtaca3s5aUxadCfmeD1nB97m6wUsorfCNkMda",
  "key14": "XuzgJ1eSpYhMvLN4CimBpKesn8WSNa2dP1qwRo2LijM74gDgXiBTtNxMTJS3zCJ6czs6TU3EUaYdB65BjowSVXA",
  "key15": "5Wy6eRvGhvd9uXi4FrNfvmEwh4S5zMkiqo88y3gqfoavFQzJez6djYR3KjwFsMgYmcrWchHUrGq6dfj9s7PVMjSS",
  "key16": "2bKbwyLtvmTEPb4P6JcYqjZF7626hbn9SCLadfjhwuD41nb9iXj4ffzGzLLckqHovaQEvmFuvdGx9jur9H6LZYoE",
  "key17": "k8UoXvjAKE2jP2rcCBDm3B3eUyxTq7WP1duBJxM9aZJKG611A25hvrT7oPx93z1DSy68B8fyDKrwhykRc3vaaZo",
  "key18": "41Xxu4KTvwFJyPwxf1LYoS51pFQQ9QGzp823117Xgg88hxwSieQ7a2D396Du32fJAtAQXeXu6o9ha19idvCmw995",
  "key19": "57YHik6ENp5U2f6SFV2rQoX5dVETE9uynz3NTftaAgbF7Kso69sisv9UAhnq8r6XiGnVJx3ETgFSHcv9R1qLguaa",
  "key20": "28qwu3hUNqw5onpdX6ow7oRBWd3Tse3FyCXaA149zM6CB2VqH3xyPUrr1ZQDTnZwPXPtKVFhZsGJ3GG84dxAZgYE",
  "key21": "2ot7nenLE1msLAawwt38NuK4rbtgxXek8xgugHcLLf3wL81DgaV6mxEfRR7FyhxaoMQRvCa2MK7hReevE2xDnWND",
  "key22": "5tcfTeBCSJaswM3KeaPMtdofL8HkEmoAjPqvM7gF7HGSWs84Z7V1Nii6TWY3TK3G2pFAkRsKa2E7Hn76L5vFsbyM",
  "key23": "PzAk62Y9bQDJAdfG5VnDRoXEanDUdgiGjevSxtftUSwQ1FdaZgAGxdaTnm7PVN5VfTXyjLv7Fdm14ncQdvmFoZZ",
  "key24": "cVf3DfDYCFMCMQB5A6eKxKbrLQuJbY93ibztQ7u2qyPCkNjDAhdFjKL2px61V2uU4xxTiSR9cJM94qazMravyb8",
  "key25": "7eUZme5dXxv8MzUP2uAPNEPE6htCEZgtFMDUgPH5k71PvvVVoD3imB6PiG6nHNEi3aRvcxPZdESj1SwxqBdxV4f",
  "key26": "hkfxd7JzdXnB4kdfugxL1sdeBudorKetrbJoXj2twsi7j7GezQKYskbVetcyELn1UtgoEFSgG2gPifR4eBMYUfZ",
  "key27": "7We5xdhX4qTmwBaSM4QGZZ2DiNZYgCwfzybJvWtNpzPFx2LRFUFm4JyjLCepVh8TYz66jE8GTCJSLoykxPEdoWn",
  "key28": "3AiA2jQ6Fs7ayKCEvsYQzXQHz6Ht8x8FYdZqfR1h7nwWNLc9q825VEsB6PamaG8fEtuvyaLcgTkgZCvJ1qpeBBBs",
  "key29": "2BdXDLMopBtdBnyau4s68LT9u29x4Hp7frkPCBMmcnf6LdVrb55tM62gjF5YtTZ9RLrMaZY18jjJVLDN9V3ALBXA",
  "key30": "3AroeEtE4nJrvx7bs2VSLe6tNF7dMtkfNVmLgcRQtwU3He26oSWKqbkaWLsWbERv61yD3TdwvGYRLDsi3JhJhFSF",
  "key31": "2saGQFaVpL4fuanDQjUJv53z6wpCuzWyRnVvJV3Yr6KeUKwfwnK9ijsvMTUWTw7RcnwEaSuJaZ7JsLmiBw1WqXeM",
  "key32": "3bP6eiRzBbHA2Ge3oL6rXhUS9bCua491yngAx8Jc69gf1JwsMkeTL16akXL6hzCyvqRun9ar74mFGPX3BkUuurjA",
  "key33": "67Sm7Le9n11uBwYyWK7mZFkfafDLUPXbAg7HwufSMYP45GpbfTjycnfaLHBUKifgmC8KujYz2S8yZgBuETMLmzpk",
  "key34": "Ai9JWzNj2RPVm8SQX7MT7mXg95K3YEewWwVqWKVVajFDC8P1GuztY7sRCrEaNr9Wut53TBX2VeuqGiJxMh4UKyy",
  "key35": "5mF6YJdKRM8cs39yksJ8nCRs3VmTuUFmh79oEz2AkSBswmVAE1SHCrrPpPRUq9dRv7wEC9vh5M7MjcTRcb7DDfc9",
  "key36": "TuZDGMRJbR7hQxRjhei1qVDhugLxveGF9dTtcqTrGtArLNMGmVxiP2RSw9HrR4QqqcGdihHBfXKTiebtFBtZUyQ",
  "key37": "4foqigxyzNfdVtbwYRQLZDrFVMc9uSVDBCvbB68tKC33MvGLeNvJeTYnzcFT8GSif4K1tx3WyWZm9aeWdYtK4a5E",
  "key38": "2nQXLPAAQDJnW2GkixceBX9ecCxXhpoGQmZP1YZjxMQfD2GX2qLJynpiQR7gmpfAFZiRbmq2RxWJuZt9FxxCm4QT",
  "key39": "2oBRrPM5LWuMHFSur6gYrjsDZZdGmP3SCPxfWhL5e5VzePs4yq2uuaH8dB9vpivuTGMRw2xoM9aSK1xxZajT5nop",
  "key40": "3ar6J3V4q8fuqpppgxjevhUaJ6RWcAMTedxgQvanrDRqeNgLUq8QWjtE2dY9uq13NtJN5wStkzATRugoURAN65RB",
  "key41": "aQzEFaGLLJX8GmTT9phQkSQV7WAreqWAKdpB4bjVYWiDGmjsgikWK56hwdfWQwrFE5etFUTW6gdnGDokZiBqwwe",
  "key42": "cTvaZLvyrKTArJkQvUfnhZxjPewzLmh34NM14Skp6b5ds5cjK39BPfkvZx6S9cwyB54sRNQAsGji6JeE5ha3GtH",
  "key43": "3WjYsMuEnSm4c2CmZG4GGnsqpj36zj2fjHrsibM9AUF5tBVJQgT2QSukoSCy4YC5CopPpm6Gqi57LZDy2Qk3f1dZ",
  "key44": "3WKc8mtLtrZY12UdfAfFrATWuZNRw5K6GVKPXrxt79wGDETbJSEqW19saL1jJQASWsyLCeF2g8LftowxRpueteRo",
  "key45": "M7uUKeu1sEk1dfoEjgbS9Lxfc3a7i2Ateio4TmEsGEsUC9MGuaeDSifEVQYJGX5foFQzMREPjUPKHHNAcEgT7G3"
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
