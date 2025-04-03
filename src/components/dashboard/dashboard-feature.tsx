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
    "4SceEevAZ4NdDr9DTFeZuoD48BeDp2E27dw5wnmYfXsoTauKRCrRH5gdyBt9wn4bPe9EDXoa9gKv9wSQRQ12XVxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "293MAxTPvCVPULLHvBrK8QrChoWdacXHhyquf3jMpb4kxtN1x4KiYcJ5tUYDUwXVc6EfwCM31wiLUQwGpNL8aYUH",
  "key1": "3N4UbkwBdSVmtNjimFik36aBGrEjPpc29NYFPdJMRUoSAdJe7rY6HkgQjcvJmFDs8tvLQqiBXbY5zy99zSmrpdcn",
  "key2": "4EtRiLAXyEyhoPxm3LeF4CxLhrW2aq3GPFb26xnRo1WXJrQPNuJ7dN7LwP9TRhjUywJEuUnp7W1HuQd3hwA4iNg3",
  "key3": "4VTxKvbTfDxW74pSQvF9JFqDd2yPM2fPN83BpJr3jXaxaxpJGCAZ6kuGHvp4WF8Z4qWHjh9FX9T6zQniqKQae2md",
  "key4": "M7XJTDm295GhikidNfjBC63wyaBxfPz7mmoVAX16VCJk6DQL1GjxzrejCLoYCTC1NEzqCv3GaKkSg3Yr2XBZA2m",
  "key5": "s5qarGFXMPtMmP6nSggoLYCL2Mdahm8nrhnTTj2GMzi4DGz9UGZhgP1NbnJJwNic1nerZaY61qKcdwsHqdSZApo",
  "key6": "4Z82yvnUnd3uWEcJo5oPBfdM2zKd841F5Js91CpxFULbdHgEJyc487uTU6GN8UsipMHKcPaGqiEEgLjj1c7EQFj8",
  "key7": "3An56deV2Vr3c5g82AUrGMEzs5hynLrirMfbT28BMSRfkR2voPQCxQfckTY4JeZACVzME586yAuKK3yg548ZyoAf",
  "key8": "2CBqBCVaWSmAyHyEeXqC4R3B8TK3d1ec3kxoqiHS7EmHN5bcqGDcjah9my6RCoLUxAwySjfBxCAD7Nqtzr98GFYu",
  "key9": "3FqPQ563ruEFaKr8WHeCsv4o1t863D6zyDs4cC5iLPBZFAk7txpe7zSXwbnCXHbEAnYEt2Xz8TwVHNqDigTrvU43",
  "key10": "5yiBEQiu499xELbsZdjiuhkT4679rigfutbsDYteWW3La9wu9zMVVV6HmUYva1esJWwi1MiWgbayMCeh814Myaik",
  "key11": "nZ46xjL9jXRWB5D5PrtW4KgEYBNK3vuHSchYHrnTcjzDAWbyZS1UuxGuZEpqHEJMSCEzd7o31sseyxu99LtFiFv",
  "key12": "5qVmaJHWw1QzGHkQepEsZH7wwKEEd4W1ADzVBryUvNKgN5taqdR3D3XGmmWWougoHF1AiQUu7MynNDMjVW7mU3nt",
  "key13": "51d6BjhrN1WftHjXfj1PiM361Yy1ay7YjBb4yhwiqryVx9ozcuH6kuERxVaDPRhseGg9qte4YKg9Y86FdFgLyiNY",
  "key14": "2TyQDQdWfJs4EFMVWh4FhGkVeCgPsmWvopomTC5oGxyYSZXbDW7SFqBHqDt311ynqEgFTM6im8z9sn9N9Khmsdjm",
  "key15": "4CP7TrNVjeA8dM9wzG94ZcrX7UpA2qCUiyET5w9Ka5sW21te5G51rresXfLrh8ekKLZWfXcjspT69igesVCX3SQr",
  "key16": "5hiHX6EjK8Av4PYNrP1DCuG5vT8Sy9Uj5mpfaW4vVwYLnTGHydKVz9AnsoAABuqTypNBeBLDBFm5nogkbKBQZFcK",
  "key17": "3kQXMj2UUi1zY2hpn5DHB5RiTF3wNr7UnLpXHCsfhZVhGXo5UR45HYnXLcgKm4ojWtLxwv6QiVLGwS2JAVkRV8pC",
  "key18": "2b2xVR94EuRn6CjEFUHHTBMkbcbSzEkfCxWWDzGHV9MFj1hMfcxV6KqiLifiKHpWokWJQVZPaKNne7s5Ffm6Yo1Z",
  "key19": "BjddyAETJRhuKoABfySwkQHG7C9K8QE7sdembGEUxUaCyd3cyttSxaqnctePVpkM1GSaj7uW1VUV6kkyC59cwZi",
  "key20": "a9SZjKEm1cUTxRvBNrEmLBMFfAbeoP7LCH3Y4uQUxTfNiRAyhev6x7Gx8kerwLLj2r2ama1JFZ3uqjkQ5myRro6",
  "key21": "58upKSPktLM8cXbXisRJrheV41SiYHseAmAcisSBCkrfnJQdGRaasU92ZRHHJ2pyxS4gPfLxquo8n2CWkhuE4EZt",
  "key22": "4YpUnDhu6jEYB6Bea1sbfP3jMp1Lrt8zU5p3rUYvVMXguuxCggXZQF6zwrCyG2wxqUnnoDD2ovS15p3JXYGPpVXB",
  "key23": "v3LAc63rPXDgn9L9AKAipfs2EthhpcNQRfiBLALMKrYPM7G2WpFAuyeiT2WcyGZvexn9vj1YiGeRdTsFBPp1W2E",
  "key24": "3KL6xy2VwoZEu4eRtJduxp8aA7g9d2WAhTzUzATAfEzrc7wGRFEojbBCB2A2gbdx9vajM8rSyhW2yGziFV5QQQxJ",
  "key25": "4bGpgCcnsMrbdwfJP2Yt3u6dXSyW1tY6Vmg23ite86Tsq7ieDPwCoMK361B6yDciAjTKx7y82JspCoLhVJfTH7wi",
  "key26": "4uoENTJ2AtuipQ8nmpndvB8TFTVB7gtvEKaaXVSS579bT2GCYseyJxmjJwZiXeRVGX8Ud2nbHyQ5D2SGMLtjrjux",
  "key27": "3vW41FvMFVQ9hN6GBYuFHkQgBNNTByq8hGw25kaufYAx2yRGQrZs8g3db62unVBwvQGL9JAM6fAjkh3vfd1qSUfz",
  "key28": "5jroLTSQULM5VwPw8EtvF2uKK4gb34Gm4rxJgCPjecNUiuXiJGppHwXiafuCp1bhhhMAczUorDJe2QpkajfPbVkm",
  "key29": "27kVbNZ9pChu8xy2E23KxB95db72K4L9XUdx8fbFDJs6YdYkgxAz9gHQnuCYrWkwGwrPEsYaVubvRKJ5h69A6KYR",
  "key30": "2mupWTJMUXmed1EBsUGHvB6u6vuEfKppGipHuh58PqEbPxkSiCMK59oRhuqFDugfTpGV9xo2yh8SX9ibpwTCKfPx",
  "key31": "3f1fasibLoyVRrVhjCbcfqmdTpCR2pH6qTToG1HZEHxNUP6JasEaa3s44NPB2nMMgVwkg5gPWxy4wXN4VJuek1V8",
  "key32": "2g8Lfirxp11ZDYdinvd3g8qR4WwFbuQQMPmypMuHfaW4qaSUBBwvtTCKVtJtFjxfejy45vSCMmHsQ36eYrarMxEk",
  "key33": "3zgFQLiKFXLGHeMFZaj43QyfAiJ6gVwYQPvQYggdbJ8LFA4qVf1t86Chvww8zYsP45wNA4ftFSykKgL927UFGcqt",
  "key34": "4iHiYRTPJkKmgENguUVeF6QVQU1nHBP6nSXmAqJ143ukkKyk369unYTfWacaj6C4TxmUeeCrvBz7t7xyg96EQzUR",
  "key35": "3axmKPGehw9CWfzibWuUc4MTCbYi3bbBoNn9tP9TSC474RqFyr2AKz8K32cCVF6kbHCxveBmbrhMS8KaSSvRvxLR",
  "key36": "4uKTF2a3M3KQ5W1iwLDrnHZ8xrwdmWePxxf24mpQm8Ng9TzBEiBAdhJKSH8ihwYuLuw6wj3ehG9ELyYEUcVJv8CD",
  "key37": "5g5HsS457y1SXF7ZYUAXW2VpuTkyVB6eovgvyM3iZXQJmBp3CfpLUHGsfMyw6GZLf63EWaJybsJ6Qn9HbZh2ShAM",
  "key38": "ZJJ2UydkftbBsrM4JLBTL5wWRvDDMHkLGpu7Uzn44y3WxXmBifZQci5GajXKHthZXhFWKPpg4vfsVia63awGWVL",
  "key39": "4KkedKrFEw5Du7MzJ35HVoVJD4yHKuJESBC1JzPun1auyCxVtV2SSEek7pSvj4q1yjhmnw345doqKjH9AQ4Z5fuy",
  "key40": "UuT5RUk23ZxuNEyF5J2bx3xRKQbn4b3VR7gCCLetAsGw1Gt7rDcRL4XuXscqpXLhU6DwSLkjayyvFhTkKaPbDzK",
  "key41": "4U28PkjkjyXYsZCNHx1HaY4ahsK27TqTAag1jn73UJJqeN8uCJFzZiZA1J2BFvmmwWebYc41eWxK5yXnwdvCJXQM",
  "key42": "5VafhH5fU7QJrxNujYnEba2wxqXshLXfv4aXohrT9azXh3TjS1B22y9B1E48y8RBhAweG7ykpbQXduvjQSWwgFQt",
  "key43": "AwgW7ooijoHmwbrTQA7Zje449fm8SHwvKtudDf5C2AbRzEJqcBj7NSKrH15q4qXMdrV5w7VzU8ENbMsLuToaPEp"
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
