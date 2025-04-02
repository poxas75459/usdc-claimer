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
    "5qeNoFA9maCMcY6LALJ5S3ME9wh5JJxDqL8MqwvdHKppP5zbRAi94mG6FmFNgKY2rSoxa5YDc1MBHbFG5AfMrUHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1223nT8Maqse5s8jvbakWb3kPA2Vunvosuo5YqrZXjFe81tZGBq2nxQKZon2uLi4WdydpC4dj8ckXdPU7eaeAhqK",
  "key1": "2qVcr1KE2wbDhQp349ChxZFLsPz82ZF8wdfGtt6vXUAvNi9pAaVowTJo4oqZnK97W8rLgrMtju37SCLbcWMZfEGv",
  "key2": "Nxd417TS5KXmw4kUCzYsFBuiP38uECZftNiQz4yXtPc8VMh1bkLp6TR2znefxkDPgGNC4PwXKG31bReVzNF4X6K",
  "key3": "4A9rvku4wb7bRSi2aJEeQ3FuJNBjouucTQPVDbiuJwQBV6HJNpmx6Zv8czZ1K4VUgsFmX3tktFym44nZZo6H8aTm",
  "key4": "2wggvs9rvfeMcb3YpPp2Sfzv7ZYbb9BWghWkBT6fTxGm6q3bXH7LkVWxFnKqTNBThHU3HXA6DK5TsPjTfSJ9VxYN",
  "key5": "2rvuPEbK3oACxFvLGgJTqHUZbsGye9twENmMTK1nasDkKSX5BmqCPfrSUZU5JxEEfoL73VvoYCHK71LyQiUiLGz3",
  "key6": "4fT88USo695wVgLb681C4ZZDWLXZtQDxXMddmPTYxFRy3uy7jdPSte5eRCUWydirvEeHdYwDPcyj1RuCYzAyuJMk",
  "key7": "5bvsN17AvCBPxQQyQ2vw9Vxkv9ZxiWYamPNwd25jqPimzU5VQcpP6rQ8NnA8JDSqSy9Dv8xVrig1r4jM3AaeP9mt",
  "key8": "5NMyLoR7Yt7gmAcdUmh1Z8XQ9ELNK69waY7bKJyRCsYMSeevx1YoruV5GHdbWXmRAzYLY45Y82q9RoE7enfbYKx8",
  "key9": "3UoBhfyTXQ5FBWQ1CYUEkrr4xiDRVuQfC7WJXiD8B2rBrhFD5VnYoWiB5pKfVC2zTuZBG8VEdnSRHw7uLL9bJPoo",
  "key10": "4b49Qrb5Y3QNYSUCnNKGyKtdQ46QrZvdXBe5mgqxgL4LUBwGM7tToksNL5EAuoFZqi1u1L72cK5BcVFfaEEraRoU",
  "key11": "4V4kQUgq6uoq267DMeBmuAzVsy8iTwzV2vjhmy9fVXCwod6Czv73EKSRc3zaXd1s4JggYJ6JMbZkLP7A74jZxdo3",
  "key12": "3Amf14vWd7cQhWMnFn5QP4ZAqGNhXnxf3x4F2XkcuD1jd7Rnb6Sw1MberjpQzvwS34wx5ybxXqaHPU2qzaiaqkmU",
  "key13": "2dXStHvYhCQZkzghqWPknUCn7pYnSeadjW76C2QPPx5EmduvmTuUe6assqCXSsrKvb8rmNYaFKEWaRPMvWsiv2zA",
  "key14": "4FfBKd52Too9pNYyuAtAYS3bZJHUcLkZWPTutoHH8SAJrzVvBRMuCHR7qC6ps8x4NmzWCGuULpQ9gsEYwk6ERR6x",
  "key15": "4t2Gmt1Ah31t5DjHZJgsxMykhVeTuUaM6DbKCT15yPP8XAxDEGCUaFJD16iGRFutHCFMESYaxn61QtfquFiexCRB",
  "key16": "4zAzpejQbqwNErtGUgsessPaiXrJLPTW4hdnNyMB5u1DYSF7MXsBGHws4SkdVX9vcwD6vkesetUEwNCwofJhEtFv",
  "key17": "ouWhK6V6Jzco7mwwR1gfd9gPd4cfiT7cSYMP2ifGq1HXhBiLXap38jvfzMbXv55a3PpS3HCNmXwzMbsTPr9GzH3",
  "key18": "2Uzv18kfgNBr7E1hHcZUHXEmHFvX3nVEY1VuFwWrPuyY6EcLtgw9Mfskb4GAd11EfKEC6oXy4FERi3iSnMgbzmh3",
  "key19": "26VcfnYpsyCA9vqF1S4BkqTg77F9Yazak5dePRzauzGSUf6XQhAXriYzkLGmNNeGMRYPNCMZiBLJx1aLjPHwXJED",
  "key20": "61He73y3B2HhH8PStNtRVKt63DHSTNPw96RG2WqpTni5HwRZsXjLMvNFzDeTdtaKapL1UiUyjMmTLS6iiJnHbkGG",
  "key21": "617bgtH157isJ1CHimfSxHAs7hsP3L8zqNXGed1tb5notRgHRBJ5KiMj5DxqjhGMnDbL3GVF3SrfzNMVnMRAin5R",
  "key22": "EEWrfzSg1yz8csv4KzwoBm8ZGp43UV2x7trhACg43HQvDcUMGBCHjYu19bawTX8scjKMEoLFDGPhkGWWZfNWea4",
  "key23": "3UMAkAQ8zktskzi8tWBBZd4Qf8MZRr3ir2jxkV1UeiyGppRv9Pka7bx5LRphjU5sfrSBqMVCA1cJZP9VXFnRzA9B",
  "key24": "2hdCHVgbCLf3eGBZ7eEQXAWs4kt9CEh235JGCAUokAKeiiFzFiXZu6YwfXtu3vUKfzJ3SVV9oYU61rqwv36abor8",
  "key25": "46x6T3HDm5TSCPzZDXCnaAqch5DYHH5kwtGtgaw1RMd5GY3tA8Bbmyu8ezS2CAfJ7A2darkGVhDS9x5enr5nRVAp",
  "key26": "33Utf9MMQoTHBz69qchJRxt3BJkQ6B26xNawJNk1Q678djrBgM1aCWn1xu97xyLGwSyg4ehNDrLducyvJWG8xQLC",
  "key27": "5DGVTFxWxMFoakasoEy9b9E1Jn1cmtp4J2NpzvULc6fdegF6GzVEf63tA2uPJJDT5gaA7TmmhJvGXMjhRGfopdjP",
  "key28": "4ieT6opZBrWi7oh8XWKefjcnz3sPf7cZM3xcKhBnSDYi2GQCj9FUiz1hUQGiJk3A6qhhavg8ZM8jHUMb6ZXP5V8z",
  "key29": "4YYBEweXUKYqNkuvKSiJ5k6Dybog33hqVMitxHmienDV4MXxkqchb4QhFzYc9TYn4fFbSKsQye1gCgDtjAsfQy4b",
  "key30": "FWCjKs3w9tzRu1JhZ69HcnjXuniAV5S6pu8ouWoaqeYY7TwV6EUuGLDt3zUz5Ac31PdApP9bsPJHe272MKqrxVk",
  "key31": "2cM7YcXFkjvb5Rpz34AA176ysm4KiV4RaPddS9okxUQMrc1paDsRjWtAn5soX3aDPvUWfxCpbkUtYbmyUmJu3ZPe",
  "key32": "4jMTqoZyWEZootoVGCUbjyjXRT6XGZYeKNUPNSHudu5jennQjbNm7zgPHb3FKtPcBmozou8TWi7C85h2M2xeFKuJ",
  "key33": "2GsvmeL8N5hhuwTbtuRfE1Yopx7ShRVuQoDymiCBjV7zdtXYBTAMqbd3jXUSnpMoHantdkE47QTeGcBYU8T3cu61",
  "key34": "4bHmLdFe4amsuRyw2gQdff72o9VPUCR5rckvT6Wj1Yqb7HWNmgCEPdxXLeCaTkLST1FPJAmygxHRdHRRNAPD8X33",
  "key35": "7AVVEvsK6L47FnEsRpvtqx36GYA8yr9khSfc7MABk5Ta8daMkXnG8TYuXBP5SupC94GtjvS4qqCgYCmtBtLadS6",
  "key36": "5hVt97fPJHnCD6dbM4PZa1Rcv8odWtwoUhuatmkQobMjkTA1VB9YyfcAGGYpVMkTuxFpth1JLW7Q1ne4wAEoHApE",
  "key37": "PZQag23bz1oWWd8ffeUbEYnJ8rgs8ruTHV2xcVb42NnscKCTcxQE4rA9GrW7xyVd44fz2q3SHXtNKuVhN5hh66K",
  "key38": "5MWeKtZWH6kzjULDarEjS2DwZukrCMyXKf5T5VXxmskqSd8PCpaL1nRF2BGWE8pMViqwqn1ZH3fdDb85zJ33eCPr"
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
