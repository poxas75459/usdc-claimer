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
    "5Vcbz5tajQvmrJT4L98mDdMuXLKi9nZnYV9nt4cghKaG849aNjdtE6FnmXu4wGnWUhBPe5vi6EMCYH6gvYP7rqkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aqvjAHVWJdKJLcxAyopmp1HSoXxApGdW5xcA8cggJtqiVmbcV6VcdyNC9FTN4vK2cBL5ozmU2JyTb8pDgU1Pj2F",
  "key1": "5MLW2mvtMkDqdAe8D2DQYJ29EcmnPswY9mcKRoyLh1bbMjGqxaY1z7hZ1ifyR9FCtMB44hCKimPguARmewkGvysF",
  "key2": "UqWCpqS8wFvpTwdnkcVcYfCcQRBpYoczSotyuikaJikMPfabzzeeCcU8nhcuXbTQt9s9S8gyJvXxgXWy6EscoLt",
  "key3": "4RJE8eB48uR5SG11e5UrCuC7yJKwHHeZsJLP6xQZefeMoB7YWyEgSjYFLdtwLPgKCMyLz9LaKRBbZQMGvQmUmqZ3",
  "key4": "2XJa4L1aV1sxmNoUGcRNKQ6AgtNF998Ujra8cPu45Hd3AA6kLdrDpHTbpf2gcBqUBDM9g9wDtXq4MUDgkYgDC4X7",
  "key5": "j8JGepwzC8a2xwkSzBVboSGrvMqDt449YPLkQSZR2AFtiNvp7AgPhH8zpKRDWWCxMojUBheXnw1R4Cod9dqZuJ8",
  "key6": "3mnieThs7MiSoqmuXLYXhAQDcwE9zXmBKF6ySeoxGbfWhfni3hE8GEKEWR45vafPstz1fRXzqfNfZC2HrBNMH49Z",
  "key7": "3wDKevhvv7jtucsEZrVpLauCCAnsbDE41V9Hc7NZxtCHuB5tTVVBpv1UxE5URcALHczic9b3EQfonRD8irB7SGSY",
  "key8": "5yxJd7BgVxjcZR4KLsWWBdRnxXJSCVkQHGoftjhzidv7TTMyDDKAvMkUsBzuS4XpJf7WcbLvQFYmDpM1sdxHdio2",
  "key9": "2qVwoReRF2xaN59itBMaMGN4c3fssioGodhzTdxRcFVCiCihFwwgpPZjh6XGbBZmCPjSdXoKjkN1AHAJg1spkaib",
  "key10": "LuYWkiqbEmP1vfWojH3FWVU48fys5b6uYq84b6vy2s2c1yf2kiWe8DV2BtBUUHonEVwUDVQSxdGkuvHo1rKzfdV",
  "key11": "24xMt7WkHDzxkUBu4tS4BXqGnsFg8hGNs7evYpPFsE8c4Z3DZpyRq44MgWLupQHhXYFYJTqjWK7v3dRdbvCskSfY",
  "key12": "2ptRaGCVeEEegmKSewikaJmPaytJNTUhCscbzqDwRdcTFxGDKj7LkzkrSMcfWRWqNEQUHPcc5EQpqYoHtjp429jG",
  "key13": "49b1w4xx2U2L8rz3NtBWH3szFRZq2rRcRxKr5Mi6NqHEfbeAW7bmT4vb8va5ANMbk1Nzb7ToGvae4SUo1SUb6WN8",
  "key14": "3dw2LMAarRFycrpiVZgwpEvstaMzydtRYokvwwiev76tPatf15SGMZwZuz6tKtfSNWC2xT7qpAbwyLGmNMkm5RDK",
  "key15": "him4p1VLHyqyGrnDSr2EtSh3xzSg6AzFW9dYkkCfMDpMZNWJhdQny9so9fBPhWHUPP9ndAqUGZqezmj73NaLH9d",
  "key16": "2FeiuhMjS283kAjBN5T9mESdHLaGArPtr68zLrApUCrG3sFBdN7BvXq3MzY2BXGnEW4e9aHm2vBeNsMjuGppCZfG",
  "key17": "1H6k3K37m3tztZiBp32si73xrfmN9pCQF9DBb4sa2iCvsGXYQFVEqskXtGQxCPzcZ2EYrqUFN3BMgxqq27SdUtp",
  "key18": "5TZrV1vWMpg7ZgRPZLjaZhg4Eou49xpfX4LScRecGTKhDWJJbqkfMoHnCvBBeJFGrFeWkj5REjZRYptDmjEaEQRr",
  "key19": "VJgryR3enDt81TuYsE3Q9qD1XnrV47CY4WJ63xysMHAfYEpQcuA4TB6NGdywbkvD7N6bKpNaKebrtpZNYzXsX3Q",
  "key20": "4sQWE5L83yi5kXgJdzfwhGHKtDTZCnTnQ1HqNXkNpX3svFFUnCyE2C8hb6RFP4d3eXoKgPRM5B8TLNm7NfyMXsFx",
  "key21": "Jin7hfY7WnCcDDgjM67mB3B483oUgZYdkNvLoHGHR7YTz9ezKBEy8brWHEJU5RTqB2coH3rj433GpXHMeoY3yAn",
  "key22": "x8xAW6N72jgiq9qBkj7arebT3GJnF7qzLgNbPe8int6kR6KkHKW6oWFuekm3Sbghz3d1PLP8unv2GMErodJnXu2",
  "key23": "4k1k4m71pjocDQzmThnpWyY1uYu41DVLLnZj9EXCPdybXJAoKq2qYqMitZon49NNQteuwrEVXZ98YCwMgAa9NuXL",
  "key24": "2mQ2d3cREazG3zvKaKqjMrnsshBhhidRCnXmzMzveSNHbNhTvixn9ugC63QgKNXMuWVqa5CQr35TPYj3dXcMz5Xj",
  "key25": "jqy9MVWUDuaKg1L5q1Rw45Xjreed7yMNWJ7pLV1cMyP88oUaijEwQUvP2VveZVSveZAHhhTZetuZCa5SnELmy9k",
  "key26": "3uoJVf6GKVPMnKpmH18ZFMjguQynKrSRH588LhNu1XAgPuqxTy4gdw9QA8gnG9CuXMhYPwaRmD69fT1NWSkazEzv",
  "key27": "5576T3QzAqv8Gv4ETG1VsYaR9L3ND8GbXNPgnv8v4iss5obZsmk1XWPM4EersJLXkxy4RZhkVFwQaSPQmkYEsigw",
  "key28": "35qq2kNfRJLQiL6B425nbNHpg8EwBUfE2Zdo5MXuk5zdrVpaKvhr36wkwrrp6uygDMag55TDThKcgk48nmkMuXEQ",
  "key29": "2kfMhCCfhJLFhb5zTQmJ3rwR6LwMiK7LkQKU1FF4g3uMWXffWDqz4Gv8JASrPivwBKNrRjbscin3ddV3nTBVK4nY",
  "key30": "5LiN7hQ81M9soQoQqHmKjbixMJUytmHVXKfKRqKFR2qzwrYX6iJV7NJDYXzhcgmKAJBazuy5oshKMmu3NvDuosBx",
  "key31": "4DRtnoTNioNHocJeXt9CHhX98YWDhuCXzFSHoFu2hHPtNaWqQ3cEA7bsayJGtUtjPBUzQDmY7fcPDQCstFiMp66d",
  "key32": "3VvVVBQ6WydVg8QahDYKa2jGy5L3juxzaZvzPEJBXF95GFKXhspEny5ZELLrjkUv5s3aVbj8mKhXgjkvigDAixv5",
  "key33": "cbKt7WM2FEMuJYjfTZmCR7MPC4ps1BP3V3ZhWb9Pm1kMG9KHr62h41qvHUJDibav6oDDLAUhkqBCsJ2yuU8A1zf",
  "key34": "4LjLiFsGFE58wZWXnywoqbnMatC8NBEXywtSSSpbhbcoL6zvkui1Do16MVNi4J7VemLjshcX7frBMbp6EG18A66G",
  "key35": "2WM9MecCjmuLkkTUKJogMCwWd8jA7jq7M6zvwPfkJ1tfkLuGrZLwswS4txFcn66StpGP2i49qjCMWg3ayVBUycji",
  "key36": "4iHAB9bxUpNmA57JRi6tXiMrsa1hQs8uDGEhfhC32sWKPzF619c1PNppb4AUBxDFzw7vXsqu1ViudT2fjCj6Xsav",
  "key37": "2YApKREpxvYA2wE899991eSuWnDpinM4ALsnL91r6EiUsnJKLmZBm5wX39fZieCCFqGmbQyqajDfw8qUmJiV42sy",
  "key38": "5ZpBq7mmKW6PSS8zbPCboD5ydsVVtWTAQhvoGiGAfw3jj1pTbmPR3zFGAWNejtwwBzHJVAUMcBtimbpXWjkGVC98",
  "key39": "3JePbhUugeDP8aC2mcCMzkMD9F2icQP3eUycMW89UBkhNvVJg2NC9KZ29it2Mk4rqohFovs9gZJosTPnCzGgBXSA",
  "key40": "3R5VVeaCGVrTSSMTERMntoeFNpatGezaJv1SFy6pyWyJYWnHoLv96ZXzfnPDuUTx8aui4C6rh4GrX9XVaqnb9yka",
  "key41": "3Gyf7ufbh24sQz4EmZcU9sdR75AfjcaDuswvCvh9RDkS1CTWs1rJeYRMm4DVs3LpiDUa7Z9x2ype42Kk4hhkMGqs",
  "key42": "56VFsboMDiK4VrKLM9CqgaAykqNZrZFXgz3P3qULx2e75F6riA3f5xiKVoAvKiufqPVig8J3p47Md74XcGDzZW7g",
  "key43": "3CEG1Ybxie7QFZ5Ycz1bT5CahsUecN9mf7hjXKB2Xzym6SoE2vvn2UbJv7PVUUan4kWWPU9g2qT8MQSti6GX3Aj9",
  "key44": "53YvfhWh8uWS6QpY4fbGU4ANy6eEej6S4WyfubBQmrBZEh3C59t4D1PeZzwzWyWuoGtfFZPuWimyUBuJEvM7SEsr",
  "key45": "xLjh3iYq1ZtN4387xKZj73cfcs4GtiQ9xQuZBbgbyag3zRQcHevP4AL2a2uZ3ceyrsPU2LpjJaJbxrRjXZh4tDw"
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
