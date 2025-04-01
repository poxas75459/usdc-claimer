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
    "4bKL2YnEnmWKTz2jXNDXT7CfSrXRcSxYdeLihqwEDAV9rnagJeFq8j8M6honAqu8Psc3m27fFGGVtzLKn6AjRV6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46V2WMcB9v2kJLXHPCfpJuE42ELduVdgQTo87QmEu8nDUZ8VEhggi1BHejkUSFpVmvJyzuhtGqNVKpn5Pcobp6yB",
  "key1": "4Lc76ngXREbYeZPRVjdVvFVCDMiNU5Q4QT2jEghVHYsioxVDAKnCW3HLP832aLMBwoi8xCEK2osCs78B72FWQbZE",
  "key2": "4xyuZZ5xdPMnFU4WVv8g7ceHTPyBJkz4FeWckWNevJwM22PbHx8ya1bsZuTZku9yndzR1DLk4YyFYbmcfm2x1Z77",
  "key3": "5ngf8XBBPKpY4gSTRs1jr73fGGVB1uNynHxi1YeGwswc7CNZ1tTuv84Uec5wWvFP7Wm6iz8k1WPFe8MrwWsikt81",
  "key4": "3zWgHXT74tYdBuunZ4B3C9XGcdjm6CFvZy8aenLwGUQss6Tt2KAFHCLS4YfeX1xW9Nq81yXaczD4mieH8MSer6US",
  "key5": "XxHHS26j4TPjWU8qnG6QXigG93YNNecAhqUsFHDjz2ymshBBsnwwGpN5mDYej8CKUWTzbh4ZGJKQ1X69RxuEKJQ",
  "key6": "5N1BHW14bP5ofRw1H5X6ZXBJffKaMj3szARMTEPajrtpbcNdNmRZFezYPx1KRHji7iCoWeP9kqDmi145J2QG5gvi",
  "key7": "36rgrvV1brhWoMrhqgyyxQckxrZCH3ioywinTpKt7cocUSBbAv9bP16etEMSsuMmiMx4xXXuoiczoS97YToaVXuw",
  "key8": "4gcj1WFW8QjzX444LouinikcbjVwisBNyAkVN538NtWySpCxMK9odZEUk7DAHUX7mKxVp9aLKrU5mD2KSXGrn3Ub",
  "key9": "4iiVuQaSAdTRXBb5xH3nzyDabQ252gwUHMcR1s2LUJemjQVahBd2Ui2jvUkjbodbSG1qr8NTPGN21gk2MwdbYhWz",
  "key10": "4frKtVHv532RBSq9JCX5b66ZjBD6eQpYujka93h5VFMqGU4hw3Mv6dYsP4hzhm1sLbxHVBDDSQn3eF8xGkShdzfi",
  "key11": "2KbxuJcYaa51w6mDP4AiuZEvHmfmyNskK8cXAPcwA985g4FxPed9VhysaVe57CGovw5yp3nd7Xwuu1ksHXbmX35f",
  "key12": "2QVwxaairGrpQqpcYLpy5wE8c1d9BfRbPftoAGLdxi3p3Je82Mp7ohpsw9GMcF44Hxy76Q5onGoaqbQA778anqk7",
  "key13": "2EmkKw6urAyuHYbTwwy8scWLTsCyxPFT9FSUuGi1E3dKZjSETeL1worzGckWME7LoV5Vxef1jDYb2uWj8BVdV5rW",
  "key14": "fHfeGm6RVcTH8G41rW1AP7EwQ2HpTPRfLFsqyjZdbrJrsFK6vzGPYToKCuunzrE5TxnktUmPJ7BR7uUSJoCgKQX",
  "key15": "5ZAJhXqNpoQdLAvr3xGtkwbWK3FNxo2uDrw5P9fGmBCshLX5R9dEsyvu66ReYKQdznnfhhHiLaiQ6qKe33k2XfsK",
  "key16": "4QV9bN9DHWzwHoDZMfuYTEo86rbkzwQP7jQoNRVqfBrt8gg43bxahqUFygcqZtJVTeFARxTfZNoFZ8vgHKqzc8QD",
  "key17": "4XkphaXgj9HJbVSb2y1DWPhqNZDgxgkmyXm8RqkWi2bJSVspWzyKyCJmmmYwdB6m6nysJnrBSzptDXtHGEBfMak2",
  "key18": "5nzMXFL3JfxTB7zzTqYqptvRqubqt21MjchGmk7CxjPnxKedub5vQZtFCiiUWhBvSbLif4by8KeHEYNPumu1Etru",
  "key19": "vQbQpq4cRBNK9uU2oWvVqRbwhd86x7Hyagg4qQhEEF7QDxkkAaMZbkHRJK3cmvhwYEoBbxDhYY5H1TJ2LQ69Qie",
  "key20": "2iU45phb3ALyjccJLrLVQCYEjFn4fsvH4F51rwFR37gq9iM2pUZBtY32MGRjbA1VCMMcUcSQNXzh9Wo88cJXsENg",
  "key21": "Qd655DjUyrRXyfyKYS3y1f1L6odjkHcjUZFqYUjuiY3bjK6xbCasfySLsJKWvDnEQHi7mAvqX5rCd3mDY6ZHmZV",
  "key22": "4xj2wuyRy8LirShdx7hVPCTJMzvVnsdox3C1iH9yResUVz8EjEYBmj8uvEdz2BojmiABjarX6LMtzn7Lv1zJCUyH",
  "key23": "GzwFGBJt3dkpeHKjrXS2tVsxM1xwz5n8oLLGKch5jdgitr8rcWf9sytkRfxq7QyhW18hAsK4qYW7UVvTnh9NyTu",
  "key24": "37PeKGsJLYxVFj25qo8rGruuEf7RE2PxKP2U1ftEJQRpbY4FWYtQbUR9RJtdHXXGjXcYGcUck3UtPvNrRiCxj638",
  "key25": "4fZYAyZjLGjBArLyQcENQqP8jkyEErpNXzNcvFsWoBqAzFnxpmswKNYZtgNMqHaC5begXSejfycoWDn2bLKVx712",
  "key26": "4LPZbE3LDMsdNQDLbwnLXDeESRm8GrcrDk5a4dEAAA4WY6SoA57NAEK9TmZ1hxVdaoaTKqqYKKSLrZvsd5DcTw49",
  "key27": "QWKouNnLyg3UdT7A2iWoKyQ82weZqNpWT93DiWyReZDnfKkgzJBrct5XoFAiFB4ApiHtGHYBXvRUJ9PusWaHFmX",
  "key28": "28ccP1mmepyU7sL7mFM12b5tSVLTxNX4BUty1FBfMnsPMcXd3nNuZEWm9Ng3MXqfnr4Sves6LCJx7pLsz3aSC26H",
  "key29": "5y9G9ACngTEo7Lm1Lcit3qDJUt5nBRTn5s2dVkjLRG9odcJJpD1mpMkge5mqi3ydpDhVTuFtdxziicqRnBfjKAxq",
  "key30": "zp8dWDDpcKdMfujoGdiQF37uwsWVHu6QaJVPgeEsJVwrR5F6Z5VnXN6QKJLnKhMPWvasxkjfcXB1R7GPoVAG6mm",
  "key31": "5fBTtyM81fKXRARQWMw4eRAM1GdygCJj1wbtsWYBHUknqm1nWS7QBYs4NWRyVgWMoVDHZoGP9fuFybb3UGynDaKf",
  "key32": "3KkvtT3gwhne4iS4tqXhSZgkCBKKVg9Yjd9SGef6Zad8kfzpUwQMtC4amuaYbA2MaMzo5Gd64ug8XGjdPjhf1FrS",
  "key33": "s1vVkEAWqkQACMovQW6FAWriHgemXy7McChtCe3ctv64EGKiS7keXVERocvwYK1KsX6byzkw1zgto6vJBJf57Ed",
  "key34": "3AvAs592eweutNahB2z9Kqjfk4ktHoe387MxRYvM1QsLSSPcBr9ugXr8KPATtbo8BYXhwDhHHiLM6dnFe2M7wfjG",
  "key35": "42Fpa2cfsD81iK2bs83Y99BeLPdQZXbnoDqKtWvdMRAEy4dX4dxpDZagsE46YmB2AQtLuqR8FrD1CPKj46ai5daE",
  "key36": "oLP85grbEV5jrAXtAPPPo7jmMS1VqVEybMQNbF4RtJ8QtoyyXgWsLQU9XeC6emBhQzL1FGk6kBTRQxYS3ns1WFH",
  "key37": "2BTYFd8tZxMA6fEV3Gabd5w5sNseC7qpTx1vHERW52r3SXCdDFgJ9YrFJiZGLJqiYXy8ogHUEChVP34YgCVUMbNy",
  "key38": "33uiB4TGHWs5RmRi1XwLw8SUX8e21kkBevkkA99FFHsr8EDB3GnTgYN8vWd3LWkM3VxkXSE38xgfpuXqNw5yz5ix",
  "key39": "5QMNaHrr272AjgDmTH8JSVPtjyfqq2qLJR17LUFN2cJgBHi38fkTkjjYirFZrq3LYoNrgkpCeqap8GE17pGoT9Un",
  "key40": "JByqqdtPAEhRsDShC2i1UDJkDbYTziGw5gwqmiGVcUU5EbF96B1m8ksCP9dvBuSDoB6EmWukbY4qYcbR9W8Fhyk",
  "key41": "37aLWe6AVtnhzFWWJiuQS9YqXLbKe9icfL6d2uyEfhW5RLyfpsw5JhiYpr29dQSYqKZH8rf4uTCNVMTynryjD5Vi",
  "key42": "4CuYGjn6T7bSimKZK6zLqqQ85dMVXuUP9JuC6c6WJWkswhdygoRZ1bwe7WoCGvFpuW9vPUXw9MiLfv9tBKUeXbEX",
  "key43": "2qzukiZ78bxVZreYzyY3xWjcHg8vw6CmuJeMbjx1zqq3PHoe3iCicM5SQ5RduQ1ppm1wfhcg7i71co7sNn5JTSwm",
  "key44": "5Wj4pFqy8PRf5SdUYp4qVoUcxjczG8GCmT74WvVtPdtJZwEQcw5GNZ2zH8TG7KZGe5bW7Hogo3DPg2NwFyrBhtVQ"
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
