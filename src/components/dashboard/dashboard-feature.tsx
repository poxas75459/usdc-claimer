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
    "abY3qXZN5598WATR5jMUfieSwfmYZGpEts6YcmvLEpCqMrjVcHSpBgc4NWotMUoFYo4CgF68tkFZhMfy6ZTQUNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PZGcDYCjFqonz8LqfFvD6yRZLnDj74a4434kUmrFV6RxiQwYEwFxxajpQDudyczFQHSAWaRBv5Bt3Y8x37o13sZ",
  "key1": "64xp46uGTy5LopnGdcQDERsraNzQkMmp6GQxPCV7WzZZE9mpHsBJRFLtfbT5Ke8xMnBwCcXZEaXjxddCzKBCq4S4",
  "key2": "4U8fb7Uxbske5nkgs7P1iaYCWPJga8B8RyfGaANtcTRcRTMP9385bKUg6DTdU2rYtLs8rE1wqSrHMCF8qoU1vJUg",
  "key3": "HTdrAWtA2mjHKy281wtbpGFeLFjAUtPgBvrtmLDBTg3PxGYDa5GYFn5HZ9BytsdFYkL66AXMiJQJ8LdBdUtF8M5",
  "key4": "SCszgmQbS5WicikJJL4heBZCPeAtc6nKFAymqaLBrPFwoVZGZnWXb7vwN4eokWC4eCpEBqKKCcsbo67wkaophbB",
  "key5": "2GLu2ALyzVxfNgprfvSM11Q5gqdPwVzBARPdEBtLZGPhPkiHjeqR3rNkDNicf6pn4EurEUfV9RfF3entg1zoJMPt",
  "key6": "3sEpgBEQq3fxwBatzzfxBg8DoF6MTUj8RhcYvU9RE9y82piF323o2dQjbhtFMgNFyZNxFQ2VC6JfcK1uTJ9F4Dwz",
  "key7": "2rpnYqfBdqHhFy9bH4dutU6p9MqHjggqDb5sooggNCCkQmMAZjyuaGyHAYGTAe7DZykNXXsFqfC97mAFEnArMDKL",
  "key8": "3KBoTcTasUMQcMpECUQzEXVuiut2YLxZ5DfhjPjETjg9T8rbzKVV2hxyKVodiY6QuJjy7psixpykaGPaZeGeEmn6",
  "key9": "PjeWQt6miQrq9WKZPRMyM3nhgnLWkEiHGnpzjCSvzeKKbWPY4G7GSZH6psCGX4mmwnRWVfie2ATgtABfWu2A3Qc",
  "key10": "2zvQrTtLczBXhUbHmaTxutsLMEpSYLo2FmsXdyAVdZd9yo2F2QPxRPPX3nQJwAep3tvA74UXp3oGthhMJXs35VZU",
  "key11": "sXr595yrtfer2UC3dX73L6FFTvVWKweF71n2WBTJQhP1MR11grhNPAjYy9NtwXA1fbYnQCNfBM2w3EpJ98817ue",
  "key12": "5dwiuxrNzjAWYsF7egJWnfJmVbJF7z4R4SyZfzr7fgDaKjCbY8v3ZNdxyH9zXiLapKy4jtimL5Yv85RVfxWhfCCX",
  "key13": "2JFQvgZgARPkFB4PUBW82z6UAxyrUXWDkN5WBStHrYM3pRqXPx3nnmR2TzjDFdjm64ru9S7ducfctyzr17ckycsJ",
  "key14": "Q75PYL4iaHS5vxdnkMU7kZ7TkMbzYcUhHvirV7kNB9pgoBKTbBGa96ngzy2jkHMmhTiCau23DbEbVB1f9hukfLy",
  "key15": "5mKsAomZWNJ5QFAkFYfoLw9bUygrNkU3szSxHbQQaiZ1DNSQkZhBamLRnTinHfh7hrcNUWVJtPSVNk3GuGzSXkp5",
  "key16": "4PwRtN2c1Hm4X7RD9Xx1V3jHTNARbdeZJ4mGT5xZa1jZaCfekFE2EJrPJPLJZ2cF3PyMx5tmn2CcUFh9RQnTnYia",
  "key17": "3FpD4f3eQK4sjt5XVRvL7quZXNzvmBCrSjEWse4WL3HqV4tv7zk8y4uM92sYGzHqgjxZkSWPMPvcijTRkktMJq9Z",
  "key18": "4c6JriYXzgxsPMA4v42znY1vZg93k988ieHdKhGyfBJuoKYqZFL7WuM6LXiL8anr7wBJUzzXVjvzJGd6dTPPwJj7",
  "key19": "2n3zFeha7SAiQn8kw7KJvYTp7Fb4hxbdpiNg4Q72hJ8kfY6w63Nwxu1dw7ZDjvbvr7uQQaAPEsEfGvW6QMjaWEDZ",
  "key20": "67aubbTBLC6uc2Dp8NcWhKfchPGvKp4V7Yv1nUR3eQ8CHr4smkhSVMF8Uhu67yN1hgiVnEXJhq3mx19QXnhubif5",
  "key21": "5QnBjwihXL3x7i45LNXFknuQdiEHBy9VD1jnUenK9LsRh1PCyy2KsJnFB2S1TJaXv8FcTKxRkdoKYkg5hhzVQTWW",
  "key22": "2W9uRPhTSqRT2SfBPVFFUfBSXjt9fFpkKgu9p7nL4KeWVEeTWZezBnN6pE4LKHQJT3Yem1SbnJiuP9d9DGkdknmR",
  "key23": "5tNiyt54xunaweJ5sQzXj5nBDiLeP9LCp9Te95cN4rVmLGhS1NHeqvgwBx8Q35kDTZ1DrTwZAduLaaNHmY5sdVYJ",
  "key24": "2fa9zdzq7MG47HGkXzo3JjQU4wgDMREC568ruuMVye4yNCdKY2F1exBF1YjdTu3ToDXNgmDLGHsL7BTa2jdoMPne",
  "key25": "28Hm4tzfjEV1fSoWibyH9QrhQMpuQiuEeNAFtCU66vVeusVfJw3oaq4zG3hb5f7mkoM1uBvy6anCXePeJ2yrBtr9",
  "key26": "4wMFSa31cx4TAfbwtWRxZzdHkpWZGB2CcrbvnzGTdZzEjqtMVqCGa46oQQNwxErB1xSFatMzeBeQfbsyTh4M8LRp",
  "key27": "9AVHQyd1iype5zKmDcRHjKSM9RvGUrYLYVwV5rZGurRfXg7YbGw8DhYHRgXSjNNcBMFe1ReCve6VZ4KUxyab5iq",
  "key28": "3h4yhQ9sw5gLJ5nQsdJizJWq2w6N9hGSfBVtBaabgXSMSdbBJ8XaVWrEXoBTeUzjzxjWPha1H2onz9rfxYzj7hC1",
  "key29": "JPVA4hSpBEh4hDrLd818pReYcci9tQvNZ3JtotkQ9j3dCbV8gRwVDPUfKKosWNMA6Je96CbkVEjeWdTq3qDTFdx",
  "key30": "2Xyzguvw8hG3fbRzJpJyd5aSZ13NdwEFqoefJDTpuhg1DQaP3QBjxZHjstgRx2kLg18VgrAbgrJmbcgTxSGWdcgk",
  "key31": "2KiFxhEUdaKmWpDWgWG7EhoxgjEKVeVGaT4TYE4UxER1u6X5X75StCViSUWRhq126RVcH1EB5e6S1GMjSGLzV2UE",
  "key32": "GC178kjJXAFjnpyFp2j1oSdLGuoG8LZ9R8KSH1UC4g7W8R2iHwSDZQB3sTJkzYo5fQRm12wpvau41ZnDSccQYCb",
  "key33": "Y8iy8KRPPycyPm5kxLRAsJro1KUAPjrcX7V6QzRGEqzDL9LTDgZyxGC3kqZmxccXnGdpFfNwHeq4R21J3AF2MaE",
  "key34": "2WJ5S96mMqXqYESvt7XcA7H929yE7xn5CaWVbmBe26gqj3F89hKcfZPCKpst6C7ZZHTY6NCvmUjMkqCH4VLM6Kzt",
  "key35": "3F7sfbeBWGyvChs9vBvM9jpsLMmjjihTJnpLWtHUYR8DPqikngpyEa86xui6FZraXNHX4jV4npaEEjZX2EMsC3Vt",
  "key36": "3CrQXeNL3mBmmw3wKKDVx9Xbr6oqEs4hw3oA5vDyay9vS9gPeDMCBrgr9uYBAj9UDQdrwPqUYJ5RCK3DjWwqF3xs",
  "key37": "5GKzdZ2Me4bCcoQXDe8XkwVhcDJvjcD9jcVi8ShSJEUgFdG6THuACcDtu3m9okQ7tvGYq2GkrfuRWj6TWvzn9iLL",
  "key38": "2ZdpTEEZqwXgybab9nirj7DKFeSDkWTXYy7KAwFGcEKE6Hsh2kCCvoDySsY3tTWmYEQM3iVQMCu6S7pMeyYMrFhL",
  "key39": "4AvKmGdzB6CgygA48TGq91Fr9tWN4WBrHsfQvGYwZ3kzzTCTSRzGCKpgxCjGnVXsgBdp9qFesvKVhbCGWfkGjYrG",
  "key40": "2hFVv3TWVk5rdr1ZYZBxkSa3Be5oRu4s2F8yBBTEz8peLCg4h4ytMRjKSWuX6YdMz1tafnL1ze6Sf8SUm12mvm7r",
  "key41": "3smWza5tdseAqQgUxvevGhbRP6qQTnMeXuteRDzaLc3UCewPssD6q8f5Hg1YL8Uc6tTvUswvPF3k4gyfHZfbZwp6",
  "key42": "2oH7G6mnsBcuwQBQ6zQwF679AcFeFtaKw6jXZoHCCWuKJJX9oZ27pCq3hSsmsr1wF6YoyyyrGzPnxXwNnj6SR3Wg",
  "key43": "2kNbjQk9ijvsZnG4e8f1gS1PY77BDTfyF756VbLndUgzQYnAuX7FjhimqoZiKrc1Wr4RTnJeXuoEMQrAGSFZbXio",
  "key44": "25gYHAtZCZxV4bWLpvu8n6cfwcfB6TtffV1p71Ctn3yEewhpCHe1SM35XKbY69qua5AMLtjMCywVBiPns6MvorVF",
  "key45": "2Mf7CGMsAYryFBDQmm4KCWgu13SsDkb9aQR3Xv5WjyzkXwtjMtGB86UsbXXrUBrGnJrECk2sZSSYxP5cacU5c4io",
  "key46": "5ss5zqgFCWeguuQCreqdsZqZV5zvBMno3oxiTkTWY4sJrKxfx4zvmsR5r7NHQRxknxT9NuqbXqw9jr8f2K2EK369"
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
