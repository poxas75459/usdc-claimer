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
    "Bsh1d5G7TJQXYsGsoUX3wJ7RVqkHmRr6vA5BdZMW3mHPChPE9SNBpJtVAjx34XXXdYTcU5gif281faqiSKjXpgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EMhJvwJZYdCFh3ekE39KWhSBBkzmT48F71LEJ9mrtCxJdKXwf2kMdXYRPQAXWoosKMBmiSRWKhqSQt5eEaB64Bd",
  "key1": "3xuvCAXSVoh9tzxd8D9fPJFtFrQRHrkjcK9gQDjBLuRsizhJ8z5e3VLKG7Paw48PKpt1So11mNiRR5d3j8t98m3G",
  "key2": "C6wDPZZWiu2BHqJwqJ7RH2wehaLpXBJ33crrtQyGCiTmeHdpsEHTGeDhZ1zdzsLxQrakHe97fAjZTBTcFXiRZJx",
  "key3": "2X2rw9YTXcRyhFTXYrHwS52BDMZztTPNAwSAyfJkA7jUmK5vMv5kpufWj96MT5pp3XaEQAQFBUpyXD7UcEXkJedk",
  "key4": "2fEB9pWjewsd9y8C3ndr4egAyYvCvmL4BzAQNpryxmmB12QvwbEST91aQcyRq1rRZL6yomBiWsVoPP4GdKdM5RF5",
  "key5": "4tTBQPwNySq2uNcHKHDtDBAZZwq3NsAiEfCnmCpw1nh2kZn5rwAEgwxhHTEgbHZDfhGwa9DzzxTJnAq9F5Ev3ogi",
  "key6": "64eejDy4BpYmVFAiT1FaBhZVQcxq78NHew6g7uBvH4ykoBtggJzRS88MbxzPQpn6bTxZC9pvGw66mmMMFVxTWZv4",
  "key7": "22G9LN9jQJ8gheHK7mkbj8d9HjL1Fs89g4EoGL932B8GRhDqS9Cp8mXuf6LwRnf1oXkN4tFDg3fXKcFUiDtoUpWy",
  "key8": "4fr5LrYfz5u4nY3YYjBvmwEP9Tm3AhWAPUgNH5zZdm6rTgT69nNLn5X9e69BF2RC6d4vVMC4183T2xe631GFrpKR",
  "key9": "3kt6xDEtBP3vWgrZmDZsv8U6e6SGGcTXcEomHR2XAE2U9yK2svTy56FQfhwkfNW64anBnr5jDDDQqTDDksCN9QVj",
  "key10": "5VwTrU5BUF9CSfwHFuTpKVQmXhmhLFZmaND2njihbwu1Kuz5z9Z294BRbgfCZbHaUpcaDkrsVrQMyy62B4mLBNzB",
  "key11": "4mtzTuw6jTGXhaGUJWZ9fPRcpm7wJQQ2ya74mACfTekJTVh6evGBZ52zkZAiQbEWY9GUrULoUs7j2bitcJxziKQj",
  "key12": "28PM6sbWGhTatwJ2uMtezam4Rjc6dhVCt2VVYwcF7FXz2kqN7FAewgVG5uaNXvBiMVNyZEjXP6HXJqerJ4pPUunR",
  "key13": "5W3deWLZJuzcWVu8fiRPm81VVF73dQmkocmHpWygevEbCpUmcZym6Ui4mTaZGEKY14dxb6xnp5dnhNe1fhrU8Zqu",
  "key14": "5u4MduCUEJNGi48kEetvJYM4bXZoESbGvQdADrnM8X9nzAq341Cnpfs2hvPZCcTwLDYr57iyCyP3Y5tgAFnbitWZ",
  "key15": "61NtJbXE2Tv8ttvvznJL6NV1CPgFTnHxzPkShQVFKwVp3SfLbHrandvZV18MyZJZJJpJaMrKm5pXKiimFrmQ96Pc",
  "key16": "3ZozWZSnYQpcUrxFAwoKcyCQfvVwoCwyBRWcRFHemfFPVxCFhAvZZPVEmD427RocvQyeLoMQeWJBHVkGrUWmYyEt",
  "key17": "UUBHgqbMcCaVZeJWdCfeTbgVD1zaekc7qSwQmVhiXYbYRcUsyfzJQz4usTu92HvRDWxEjAsA82SJyNaxvSy6ycm",
  "key18": "2iWvU5gixP2XkADGkroZLthfv674ZubPQkRu2oAA4rL7vVsvMmadhVSXP72LCwmra5z97wuRj1Lx1kPz42jszmtp",
  "key19": "2tksWxvuSqSnUmDBxqe8EJiH32SsWivTcHdoEa7zvcZnkFV9e5H8KnVhawdjiRi7Hef5uQTJg9gaDMvYHnNErAnE",
  "key20": "4NCdfmccCZ28GDuXgmLAMxAb9sSKve8TpRzrbhuWWXEBMAdgkFNAUJ5xauvCnyro2KFnk9TXjTk1tcArvZ9NBMGQ",
  "key21": "4VgyGjZdoAMCPWtA33XTbKHyRrnLG3okMAV5GqdFU55vQvJqQ8erjLjbJGiQnyWm5PZdwDkU7J8uPmvhRW4Te9Xc",
  "key22": "4E4VsThoGs3nDLri9F7N3TMbiqTMvU9NU73dk5DqzgNZvoeWW1ixj9U6d8LGn5U6BCNoCm9S4yrYLdpuStbLLeLa",
  "key23": "29jgG42Gwr1nbDGcsfQ9smHMaaBjX6uCSQ4BDgux8qrxydVQ7drxrnZ1VSWUXiNyirEsLXDc43sjtLL7rCDnHFV5",
  "key24": "2qs5vr5s7CwjYBzC4vtc7E67EVSnaTkbEjnM6pMShj5VhEqfkQ59UiyanKaaoucMrQrSA6haxjZHziwEJgtavAq9",
  "key25": "4sBJH2CWLukbdKB34i8zHeaZKK3pTqDXnizKo8itgLy9JieeAJYJCN4ZESJyZcCfk2NRrQpckJWuCTb5mDPkdLyx",
  "key26": "5r1jFzLhhqJddEwkYE1uoNgW2Kf8KbQ1F1PMLMm3EcwQqxmRpEXcyzo5pLPmxD5NtiiiHjh3Q4Ugz8VadwcygKFB",
  "key27": "66jtcZSuSJgqWBFQz96uNEcWP3HsnK7yMAR8Gigc4wkhCAYtap7xTsMJAgxwuBtu8xpeQjWqmTUgzYa3yzhYA2Kv",
  "key28": "2rkVySk3ZdYctdf7cSDkZnHeS1Y2zvJY9Lw2Cj8tcS5cKvXioF8C76om1zWpeeAkR2yZdSFioDF2PkXMihEsH9MD",
  "key29": "5xMavJJTmfQHPghkyKFxTgnh1p8m5CCQ2NqoYdKVQmXEPCTHyYc29CobAsmNsVqkmpdNkXAdgRWfSHxZv2L9f6Pg",
  "key30": "3nYRCtS56kRiZr2LFcGTn9VK1FcVDgbV9WDnYQroaCcWeGt3DwNseaSM6cSuEaVnCuVjCZL8odDbkgHuS9B52gk6",
  "key31": "3njW9dBm1VUNyUi6dywurLtrentXyEnbioVcAorh9inxNYEfkZmo9knou4w2y3fZ3haLhgNUxtXvmaMgrEJq4Hv2",
  "key32": "v13eKWXaDefdRzs9DrRyAhHrMcLkRNcCVoqfvKwzC41spfsk7AxsqE2hpCdQcLxx4QFxr8bvpWk81tUD5EECMGo",
  "key33": "3kTGjnHWo9fQR2ihxC44YqZSebo92go28B2D4dyPjJYuFX86e81H1V6niduqzxAd9knHVNU15wFZGAj3e4xRJjRN",
  "key34": "4uHUo474TAwLSh148Ww7sCCSPJZyJh6A7LurtgTwzx7BfhDqzMLhwT1JJX8pbHV8zk9VNGnaDZoE6PQ1FEP8ghRU",
  "key35": "26NQNQnsnpGFJPVsJeYm7iRz29g1MNa4EnL8cL5Y9fsSFhbBQqorXs9TcvR8j3RpVmpELaSyZvZyxAyfy79eHw3R",
  "key36": "2XRU55yT19zApNT5HwBeNRUMPWakv4pbH6RatwNe5pvbEybdD5NTK5dyhsUajUBSZS3Skw3sWR8FqYiLBmgjBMYL",
  "key37": "1qYvSXw152GveMcxLHtUF3EypN8h9tNL341FmXDWCSVyyVj4LFPx3r9TkdY8yritkhhNhhm1VhczFeBbDzCKrEG",
  "key38": "4pmCqnT7kXgTKYFBVfUsXJ7tkavX3wwQcK62Lq8ruoe3muLQ5fW6Dq7uePz9a9S2qThZUaSAUsTYkMiu4HrzgS3r",
  "key39": "X5NKYU4HoDZmCNsaBdMiL2o22qSeFR4Z4EFCrgJ7HCHg8ErDuf7EptYjuSW7NYU82yoa5zy7UQfVUjmaVHgkHv3",
  "key40": "zb5YCV68bnKchNLK4QWU2rTs4saCPdrNS73evhrRAyWUfYVj1M9Rd7gXkos63dVSyexj4kUgdASziih2DqRabzb",
  "key41": "SETWNRrnSxadqYrbyFDJraHcFigEygYsoi7CqrmkwJXRuyLkgv4w3LdgeLpyvX8j1CFxQ4CMptAP3YyxVFLokXT",
  "key42": "5X27XEb5L5LRUm27rmNAANx6oVmcYYVcCfaiX8TbzFJ1ciT4e7sycwiysybGimS32aTPSELmxY9fbocUjixkoD8m",
  "key43": "2gUj3Vb5Ai4FguCQQwWYzhUq3DXXJCMDSDaZCVFSNVGEeCzop9KUeQcjAPU2eNo14fDGCawjkUKvxuD5Rw3A6Bvz",
  "key44": "4MN7SPEtdLiggGtaozX5Qr7PJDerM78Z1UYta6YX5M9tZvnYPH9ev2ADQ1SixShPMdzmypGoytHWvbMcdGBamt58",
  "key45": "2UeWNYtBpc6s5ESL514CH4g8omDeNZCn7rNYPz3N5n3YUHVoCGFeqhcz9uDTezuedsiomR6ovUc2bQS3mhrxSm9R",
  "key46": "4Gpi7VBWkVq7MsBEwt799XUH1MGcbgA65XVv83Yu5V9XwiK2RNq6TpPKDoobLrJfy7d58twDmyMsRb2XqoxsfD7",
  "key47": "5djT4ibNgU41RNUJX4xLnKhTs1RUqY3JM8fhUEKkyuFeMjDaxTFazNXVx4iscVWQBnk5ezf8JC7b1kiaS9jMTtUw"
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
