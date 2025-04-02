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
    "51gB8iVNktAbBGxFVzC8BCQ9xPvCQsjeBwpLXwVJHQhD5iJzXXjYx3FPTN6wBKy7C9LTed3ToTvwPgeW7VN3LoED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZJZqr8GDmh8HggdzyJ46ziY4W77ydyXAAaBmzHQyddWgegHw9v3pqvwP1A1K4gBbYCKjbHpSLerMBnYa1JGzGLd",
  "key1": "gn3Ya7AV72jqK9L4NJzJvr7XGTfPNCUejU2rsoBytXrUBvK7oeGrdbYRW4CGbBqCsweYVa3dZxUVCZhXR1C4eDg",
  "key2": "3hLrdXgiYVWttfy2eR2ignX4ehSAfmjqgXvQSA5vNW19iLb5Ryu3xojikHzLce9XdGLFqRdsiG5WGtaW7L4kJyRT",
  "key3": "4N2Z4MN5hq83cKKgkmMb1SbcV4RgChdTCnzWnqbFgW2xgkLt8KuSq4bAcCntDhoDoy5k2Mir6W4B7anrHGMVNUFY",
  "key4": "4JkNUJ7RMSWeF2ayY6jPfuGrWVLi2UDDW7uScvSRJXcmvB6fV4iPw7VT5cMK4f8fkuQE6fS6X5M7rgm7keh8Ubr8",
  "key5": "5GAxSoyhrhQjfpy5chhP9M7UUys7JUH2DbGHSTKrPV6zygj5trfUMsJiL1YyDyhAZxKTJUc2ELjtE3Hq6tnvhhFZ",
  "key6": "3xE9m6h77mcxyQu2d312qpmKvha9uCnMsDtMr9bEeKk4ujdpeKSLGiZTM81jWqkbhwQi8GtTKnNsRL27sBKA1Vv4",
  "key7": "2LxjRDyxi47UkB2c2SS2cHr5oXG9MK5yzNCAhrajDtxr3tPgGLiDkXwkZAmQAr6ixMCRk5BJdktogrUwAaZUw5f7",
  "key8": "3cBpg7KDgdt8H9wNGQPSqscB7RZsuqBJA58hpmvrfhmS7Hu8yTM8XUwcCAawjoqS8a4GLYFJHTzSQf8ypcpPabYm",
  "key9": "41hn3YqmP1rhQXpweUG4L7ns34uRXPB8ZjJRsHX1kQy1kAe6PX8XJqfCtdaM8vPvdLBkmmwx2z2FvYcTKg7HACdN",
  "key10": "23QkjuMAjZxWGJtxWHKQaWEMoLko26mg8EYZX3ck4u7y6jBsxRiw8RrnH9rcPCWAwVcSngqFksXr3kvFYHmc6rcV",
  "key11": "gbGgqPTetmjeaFWPgtobZKtTyVuBb3z1UpsqYhZiZGCXf4ze1hA4ySNro8VEX1xUrW99TxU5uWyPHAFUC4stVsj",
  "key12": "PM4izVvcNe5eWHkATkHn5Kfn3eG5pE3cuD4dxbYaHNNLdrUrhNc5TwgBcQGN7e52UmwmDcwu4qLMKwE5vqUpSb4",
  "key13": "31gxp4QgcFT8sm9wz4emFoCCgJqDTJL6jB9gL7oTExmv3RNnFMusRjmoqJCNaH1HRadHfenoDUXX9kSZjLQ7qH9x",
  "key14": "4bWgqQvPDiDxjZrEp4ZSEumNnMCytvCQXYUv4vMZRLrdHmSXs7YX5c62Fq8G9Zh5Bv7VbzUGwqWs6tZhaJrmTNVB",
  "key15": "3ZHWUWFs6Jy2ThpkGzTtq2dw5QbyDdkH2XgXy8iYBWf7fKbnot6naJfSd6PCFhJSdRdjTR7uki2Ay1AApo9tyFWS",
  "key16": "o2VXXaXaWBp82oN7k2LLvLeL6H2vcupKydTkmezJY33sbSme29jyMRNR7XkDM8kGJxTRuCLxiP937cDobNzDWaU",
  "key17": "HsR9MJTYpuWHqDDsofcARueonAkLsb1Z59TCJT9JttZbSw4fjQvnaMnWXnxBgUCFtp9nBmz9FXVGQL5tAobgFwr",
  "key18": "Fd6kkz7FW1dZYJ1e7bL8yPbBBaVigTVWjcePx8XbY7ARQtJZYNUUwNaYGA1tL3Exoq53v6Yj265JXinpgpSs8U3",
  "key19": "sH9YD2a6VDiJ3TnmDN7npJqJe4xRBBhnvMXPyrj8v7YnyVLNDbmw2kr5jgeLccYtaYXNb9siQR7tArhvGL3AtLc",
  "key20": "4eAphHwrw2v9PZQMg3X4aFu38BkbEnyYdguqaRnaBHAVqkGuxwu2oGYdAdZtBKD8AdQTg2jJmAHUjhSkxMvToWHF",
  "key21": "PPs5htcVmAFMwwNf3C8KooYfKZf6jne5cB4CSUnYihR9vZmzAkGyp67aZnNqTa9NbzMTc4DLdvN8UivJzwGywKh",
  "key22": "2CFLmmYba2usaE74SvGKfpZp8bnuU2EkhbQZ6ZEDkjyiPB6un5i8ropbH9oZx9XCK1iDpMXDLrhc3eNpCrHnfUjr",
  "key23": "5Rhx7Lzhpja1SSMSvWgPbLePt9KrH6zjHaW4ouDhfWQcvacmxTSaLi2Aa46jKc7vPmkRJ2x6GdpZ5rK4g9QGmt9C",
  "key24": "3di9eJjNgkxuCPH15istb1REYAGrbZnRcHvfTD1P6P8JavrMntZo9cA7LU8VHzLvr3B6rTrpDxverpSUM9S7zJw",
  "key25": "39bDrK6k8Qo1oNYrZs2H1th3x9Hk65xuU9Dw61AJkHwN54qogyyeyMo9AFLSNKQjGGtyPxxFKCFh63W32fNHpY88",
  "key26": "38cuypd8NVd4EfVmieTwiSNaXEVnquiSbQkiQAcUDsrAyZaVyMZGVsHbcbkqoFsRgc88MAxLjvjnJUQytmwqDN1M",
  "key27": "5D4cxppxXEXMVutasiWih9M3mRmB8AYNuveCC6VB1bKLkskDfmSnYgou2HLZoFtUhEjYYo1DYnTqVtr9sUBYkRYA",
  "key28": "2AV1eiKBUvruTetrHNviW9Y1n4ycCdqGgBrBF4vGZWNNEBE8eJUpZM3PVcAhu53zoyj2f2hn8fAgrxTZWBHZATvp",
  "key29": "3nCM3Tyg1NnfztX1vf13RxLULZyLhivoKH5PrbvvCayvbGPiubZutGHXLwpqjkzVC57N4K1L4CSvgtMWZZAA9Hr6",
  "key30": "5wsR3pNuyG7jt8rtLgWJNCXb46cKsLimtnxwFdrm39zk56pU7YhGHnCxawifVVrkuUMAkcP3m5CccNgjsNX4jsN2",
  "key31": "2rTRvtfY1MwAX5tZpG6NbBMCDqBUATKU4uUiBJoSeNSKdRYkqc3AhBVLv7grS8EzD7omfZ3yiEcJW1L5vcyXmn8Q",
  "key32": "3Yf5LmMncb252D5SciWzC1WjYGdufGuLTWj9eG4AgdRKgFnFud1a3spradbgEMbZqugYLJBnVMGwohrrMq6MkY5w",
  "key33": "5k8WozaxmZvDenAoCyAcnrk8PnR1kfFat5sEKLPXa9mp6reBVSRTbf3Shxt6sndzZc95wBYnr1K2WJDUcmzh4djU",
  "key34": "5XKf9DQnpCT1KwNtCDdMbR4J7dcEyPrHqkAXdQ9m3qHuwnorL73ib19aNrR7H6qKQtPRbqe6ryvASnLh31iu8S2B",
  "key35": "49cHjWZ3bDjm6nq2kjvpApst7ej5G59aLQTJV2Xs1UW9177FcbBe8HERNny41CPth5HvfhmDKGrJoCSemRgD5ptV",
  "key36": "28UANys3wqQ4ird3PJ1CuaSyEDPen8t2U3yAQWeFK1oszL9k6bsUp1u2nnid3WUn9k9mZkhWsqPb1pUjMn4FhZQc",
  "key37": "3BqerEPyopNVLS6Jhp4A2j5uXZpLkQnmDxxVG3hSDzN8EhenRaA8DEmJGygPWiGvZKzU1erQtNF9n3V1LaTRLgp6",
  "key38": "33ZuzW87XTtogQFGb5zNeRyQRhdAqYGpwa8jNpc9mo36neQTXqTZpwxJqJxdBasu3DD13tkqeV6D21LAvzCAfhhX",
  "key39": "3D1xso1zWcYUps5CfJMLGAU8G5kP7T1tBUDFuWXLnXB4nTukuupd7WSrowo3QkzsAXDN4zGfxaBRZVzVnEjTtHM9",
  "key40": "3bX9cdKS4eDYrRgvrqBDZVN5LEkkzen6cTn9TXsXZAwj2niKw7uikGFTGUxPFLSyAP5oRCeEcN8PEuyPgQReMsSo",
  "key41": "31BoAL2wR9oZR9PWmqJppzcwKe8fgWTvkYA82P73Fj63bFaAUKsEiH2jrqfpsjLkNE4eoYEa1A5s3TeSUHU26m9r",
  "key42": "66G1dAsp9v9GgAN7utgdVuUiZPkTBhLX79p23uyUk46JxcfNGYJcE2PdPMejeiHa1BywKQvvmDGfXwfeoiXPESRD",
  "key43": "NEGPRu1QsgkP5aR7XandBgnCDUsfqZhdWqom8dCv9DPaKUpeMSAniLF1JYuasc71Aro6Wnp3M8zkX6rrZnqTYjz",
  "key44": "2DGSx9KntPpdVUd27jjfVDNv4TceGd2JkiK4EZA5LLeL8NBgt17sf4DRUfCYS5f2k6SoM1ckV7t9KFq6fj8hzv1Y",
  "key45": "3RcvkSNADnuEwZ78p8ZAAM9kkBM2jis7cTfuq2auZdo9ATLreFzmjo85X66Yf2X45nMQwQZmxGvKJwJiyhh74yrR",
  "key46": "g78HvaiHrjqEUWsxF6aP46jNwyRy3uPbXrqUReFgXtDj4FNLLvTjgbQoEBNAYgDSmSvZiS5DvZUoGP5tiVFZcLd",
  "key47": "4HPQFQHitWYqtwujjzmfASSgc1dZ2NmFzYz2cvQf8dzEaPGgjeK6UPa2MiSiQ1v14zW249DBRsX9EYDLSXwELZfJ",
  "key48": "5s4rrfyQ4922tbYoNt4AR5cKe3r4kbZU2VrC8H3L4UNBhQo7mTghpcFPbTH7Rgf2ePAaKmcPLw4o9g7MAnn8CC4D"
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
