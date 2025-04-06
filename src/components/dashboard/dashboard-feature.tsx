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
    "2ZnaDeKZkXKBmvZJQ3F5D155qZkpjRFWmG7mLjqYqQWWUGiSVj2YrE6TGyjPHJ9Fh3GEGL4UkzJofVMMgv3849hv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zhp6wCULH8oBvRMxp1ENeHmiZwRfLmFCyiwcEzfhL9LJzV2AjNeegzrJBCYw2Fau7TZcCjSaaVZZWEZFPEo2Yj4",
  "key1": "mC2DfajREyp3TvmFQEkFTTK1Qa3e8X1Awa5o4FS2ysus7soRzio1H6yvf5bYx291E9za6FczN24AwQ4tEYVYDrE",
  "key2": "2XkpjLVMY1JuKDs1D3b9doyQxpko3rRw9kXVYhxWndrzQvEgYWFhXDVxAUxjNDzdPUJdEsx6xXCSiE5KGhBuhWuZ",
  "key3": "2ozfqpe1Pv666zQDwQkcbT8og3a6pHutXTkvEoVr2xAf7ra6ojHs8BEANMSRcXVTxRC4yDP6KzzuwuUBT4NK8GV8",
  "key4": "4D9Ema3QXt4ZDXxsArTgDt9KawNhrXdyjtwpgKahETxKtg4vk27SpHnLddfJf7Zy1kjvZF6nGHJSXjaeUSXMKsrH",
  "key5": "2wA2yMpqHuhY8hWouNWr9CWYdf1yfgLVvEduWD4zp1SYhg9zSbLYukVwF5XosMt5unHxGT72CJTQwUXPn3WcKPc1",
  "key6": "s2Y32a1BsipQALEoDXNRWC6LBqscGSLnQRPgXbQzswrxT7gnrkC5HaqkRWKWTVG26gABQ29EA6JWiurY52d1oM7",
  "key7": "piehAR6so1PXwzsAtbW351BWU9Eaf3SRzMaNkL1NYVhnbN3J5Cvxw2zAGNU3d2zfgEZJcM26VuusAJ6BFqDptat",
  "key8": "2JJvx6LXgnR4yvTGQAtarwC3x1sWn33a6BCu265SAWnStybKcNeRETN7F3swLezSAnJCRp7aAqJbzteBKCJDPHgs",
  "key9": "raBWA6d34yZnAsBXAZ7agrrndbNzytPATEcK1tig9MssNww1qJUeLaKAz5s68fPCsots6Sm2WHPHWWAi9ZE1xZH",
  "key10": "55shfZwtzPbNw6Jr31Y1A5ux2kdqBs9Bd5rgSP3xnFQDXeDRo8eHjZax1U4wSyhV19mVjfzwsAKiDQ92gRayoE4W",
  "key11": "4fYfrD6oq5gLG8N3VXfxjETcX2VFkibpPACe7XtJSSxjhkxSNbmijTuMHtxovYa5vGXGQ69K7p4RSJBLPc4e2Ei7",
  "key12": "28on3AayKaNKCBtrhT1HxxtrUyQYYaEccSRFSswpoJkCJYJzpbZgd1dWEYGJcAFboQYTiHHTf2KCj1eNkySF9Sko",
  "key13": "4xXoEnzs43iwvSUJGVqofCRoo7aR4kHpDEW4BcpkKQNrAupRifQpz5yv3xdLu9JWEBk1poeDfKtMcAShaefkhthq",
  "key14": "2iVLjGy5VXQf2H9zg46YRJcrAhe9vhfWpciitrzMVrn81TNiHCE19e7CWhBNcWK6Ck7RujeN16GUJBU79jkZoHXK",
  "key15": "57R65ugAw7YPYdmgRvetCpKPxy11WNdfrpKkacS8XiJvmS8YagGvRJ4LUbrKLAWbPjiJ7ZrR8nymQ4eb2KYroizk",
  "key16": "3mvwDucdR6dUxRg6pa2yEuMKQ8eET8N2uAneMpy3Tm1ym616Ra9zcUH6MVfz8nq7ZBCeYdpxWi6cFvaK3Njz2iwc",
  "key17": "pi8x23zV1RQfVm4QHBGmtFX9cxR34aZRJtnpdDW9p37WN1f5GLNti7RmDhooMwksnXAYJUfxS3uR7Bfdw9YM88r",
  "key18": "2qNa8Mcx5c5xsGqfat9YZBKDVKFTN9Avkazz2cZMjoNYkF1oMj8UA1XwsEAr3hnfPvojs3ZMm7pGBa4k2LqCiA4z",
  "key19": "MXu92wyoZGZw8VAeAcwKxJVcy9gdvUJQRjEto9wgiw9mk9Bs3jQ7g7G7LUphw9hKNP2kiwMh7EeNeQNejLSEPhH",
  "key20": "2EKECK68cvS3JHquUfpaUyJKYXkyd4VpmvEwkMURL6riGv1mjdif6PAYAuiFvg4DTZv81gpjdKjuhhAFXpaeSf4o",
  "key21": "56kXGa991it5QwjcXjf5XwRZ9QxSN7d2PPwo3Rmier79oV6Hkt5Y9R275fJjvuNs4Cd89FfffE5j3FjAx3xKXu9v",
  "key22": "39LjA5WE7HMh32x4cMTnnpt6rxggZGR9ZXteae4gSQj18mLeBW2kV9Cr881qdGNxZBLsJBzwjxaDzfMMmyxEkMWh",
  "key23": "4N7f9SAcS6sPDsUxUqbCyQxu7reSuwGsjshr4j6R9eHLR4Qe2pjRH1LWCnuDvmJuLtS9YZftBpS8AoSmBkTdiBNw",
  "key24": "3Tm8T4SSRQ5XwWpTuEu2kwxstyhPPJLmudFF8ye81ZAKk4N8PakTPiPVqPPVLgupScE5GmELQmCFJAMWACH5pEb1",
  "key25": "3Xe27XstMifxbXsynba9nybkupGZXEcBjmKy5N2UVU2xkEqr7iMCvbDrq4vQeAnt1zyFsPQyQ8V8hhPvhxK7i3XY",
  "key26": "x8ZCQUQhNHm2ujeuKmh94nhBC9kNgJWTthvy7TWiw5dka1atRtSArvqvKAEpEAXVhfPh2eQGvNuks9jnUQQosh3",
  "key27": "ckEgTdmRfj8UEw6nDK5PyK7EHR8iAH6PaEyBW3CiTVWmYBtzWPKivx71QvucQ6A7oX52bsUgeg4fjH8Y1iRQ2X5",
  "key28": "TCGqXUBLSrYv8sV3vQ1dvwEP9RPohXhq7SvrQuM5HtBSuAX7NF1b5EqAWwudvJsWwWRGVhuK1eSq1rEZnd3LnoW",
  "key29": "3SYHgTGLRwhRpTJfiGZ5QddsDN6MWxqAtbcZLjRAmcmrxfsKMn9dFGL2LMyALjMoZ1e4WnSz7521jHMid3WmXaDp",
  "key30": "2Aoe1FCqfxs7WMqRwNtkuUfeQ3MXHAL9zWnhgxpaHR4H1nNgbfoJJkjJMgqtqAkCzuv2YzmJefgZKt94F9iCGDJH",
  "key31": "3GtjK1BXd1xCEuKDkzp42uRNcgkExEdPhAUyDafLR5hHtWLhM7ydc75U8Gr7mD4Pm8UF4K8c6eGisAsXK6DHvTD1",
  "key32": "5cQFcoaRpuTzLZBRnQB4256SYR78jUunS5QnSwTVyEsAS3ckbdfYjLQ68ie7MdtAmVj4n2Fmsg8uBuHABBYtjGyh",
  "key33": "4smw1jZ511aJXUqTHTct82D7TAqZjPtYMmT4yubw94UUov4vR9DCjt3kjm67HUbevLMsVJdjkRT3rCBUCQpZLZeP",
  "key34": "3sAZoSYF8ZE8qxAFmewSgmpXt2c5HHMi4qHps7nDvjtBa4TaT2L7yenSzoBEYnHfcBQEvTgxWbjefKDjiunSkxjY",
  "key35": "5afHtQ7dMXvBpiqnrRYCVWYGBya16uvW5f1GBTijnYMU4LHK6T49oiSA5MpBSYBNBT7h2wm1XZbJpkp5aqRNjGAJ",
  "key36": "4Q1Eo8LKQTeSYian1R4KpZxMG3Z67erwetqRXriqDpNNA5dmJNsSDTnT5sJhcJ4iKS22Bu4rVeW2CFGHAeo4Hijn",
  "key37": "2oap9nsTdJas5sPN88zw68LTLuaXL76kQvMq58A1BBTaDDRWrgknPoTnm8iumzRV4bfQnySbTnxwKQRnVWwya6aQ",
  "key38": "bkzCy5GwrEcjGHzy8dVUmYKof7yJPihKEAKzys7VJXfxe7pWyddva9rEmrkkGjK8ALZKPnpbjjDXjSDafD8rxs4",
  "key39": "4CffCfvquKeebYHaoaESvwtU7nGfA1TQyy6XC5wEDRqMQPVUG1jGRQhb4hWsim6E16f1CS2ww3Q3rDGoXLB9Gmuu",
  "key40": "55j2RLMpVspdyYKLCxzhMgZLgTfe7grvEMhtGiXCRkUnmgNN2AoBWQnHLCbAXYFaakGvUCUxSFF4zWe8n75Z2MJ3",
  "key41": "2XXoqBTZxpbgqZWJmK6iq713vziMcKPxuGfvpKYzVTyL7VfuGG3b4YaDqHTMhUWjT2JwRxCscgmRFtwjMgfS7v4d",
  "key42": "MYBDsufT5ApBZmWRWzDr2H8gsMjD8U1f7RwjoSDifdwZbEeaa77yifiPte1VeHp8PigJMmNtTxFjZcHaTFiUKPz",
  "key43": "3peVCE53EtmVQkaCyGn59JJUd6NX6DdCoq3U81zMV7AUdv8DhwATKkziCiuHsMNuot5Ayd1N2i6YSQ3sGiWsfdy6"
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
