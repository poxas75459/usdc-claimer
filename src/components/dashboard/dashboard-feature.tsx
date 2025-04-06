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
    "2ZAZxVQtSUt91XM6Jgu2144x8UTQT9VFaJ7maoQFqM9HAGv5NYWjUmuCcWc3oiiozaGBS4b5PJnvUUA8QVRpFfzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44JCeA5haw2RQrsXBBesgUF7Kq5oA3EM3z5v9siCBDMPNAbssZhVqHeBiKpn32WCtiz2fV1pLzLBVcQ3SZzFeHdc",
  "key1": "4apDypNRDo9zxpU1JSfz6ohEeGhYrNYdpNyMLvsgus7TiDWZhsKHsHGJG7oevCrrsVo9q9Zmb5PWdqLp7P2wAJKp",
  "key2": "AAL8qJ2yuSsQjAXRPTm57UQVzYFteC3TtmX24uQSFkzeLyj9wm9Q2pytPuDpbrxxNSCGN3gVLGp3Nm2nwuAUxXC",
  "key3": "3GvCymQGYLewWLbfp6MwfPSYVzQL3X5oZKoUYKqXCPYuSMyQdVLxPtfPMxWQW7rDtoZBVukayUTY8JPHVGDRdtNw",
  "key4": "2vMH1wsPXqgSYmoPMdPYqpaZdr5ZBFMqXzvqNErPPBCURBCUfLgbKUy55UXmTbpjoaDV7nSTxe8pdc5B6uwRr3zo",
  "key5": "fM4jE6ac4gWmZxdKpjaskfJUoSW4Pfrp5TfBwopJ3TH8WeAQ9tdHRGPa5ybQK4QK1WajCDojUJ3Gi2UcyGGGiaM",
  "key6": "4JPM71BXdTT8YVWUDp2tEVVVGBQZDCNVQqos8YRuSpqWVk8exyjuAWU2ovvpw8fgUZuPSykem6hwXCSzYtWhbyH",
  "key7": "quH8WK33UxfWTKAp7PpxoMekC3QuaxZQbHzXr8T1YTLFoE8G5vVYCJXUG1p2kz4kynDBt1JnDBj4TCjErhKHfGB",
  "key8": "3u7ZvHgu7fmCLbaiNm2jVk6z2DWhXwoMZJp73CG6HDqLBEvP7ZtQ61hj7iALNyvu97iUxVkuPGeDHMgiyfYYS5Pd",
  "key9": "2GffnuHjcc4QnDFo2X8sFULjSoAvZDrxUkDrURa7JudzDs7FXu8BfmRd3NPY7SmrvanWxFvTHBr4xaUpAaBmD6p",
  "key10": "5nLiWSzfGtFiEytFNDg6bLQQNfUC6kakty3Bay4X9xDDKSf2CSegtVCqDUsKWXe4kC8CmbHd82DhvwAxBhtCao2M",
  "key11": "24sajPEuzdSNo1QAoQXgV864Bxh5wHLUNCqh4GBJ3czr4rNs3J2AvJ9pnKZ58MQQFQjBkENCJEuwboT16sCe4gFX",
  "key12": "54LcgqZtCFXXM71iNHHjpheCbh9jYutgS6N9um2AkrKZREP9wvWU5Czo14ZsdNbE9evWrTeSC1JQJjsoWwV96Nqu",
  "key13": "653uUvvgXVe9XPYcJs9C6WEjLDXAGVwi6s3spuauW7q6Z3vBqmFrvRtiWXmqbDbvkytAfX71pfBeD4uyxC5opcfN",
  "key14": "4kWMJtPGDnSrQQyWQdwo21FrGunh12yWnrJv6CJyQsgJ6dSQBAmxXQtgPkeh27buFfMfD8vD1KLnvFw7Zhqc9qiW",
  "key15": "4UYiGZx3jzc9BKa7ZWoN1ZkPaWbke7VPi1qGeeFcE6GGHTHyU1HWTLEYFCP2YtbjagxWjwzz7wTs2hfh8X7BTgan",
  "key16": "3B3TjiiZvard3cxhSAL2di6WdSqQxXMSXVsUJ1344o1XYfAjibC8Kvav91dFBKBZcVfm5fdSpKTz9wuEucgXZ2Sm",
  "key17": "385uYVceYZGZi3rjiLmbmjp3JHRDyNfSb2rnxBBnt4FVkocJBmUq4qWxz8ZUwg5nvhuWTLmCvUzyvDjzxpPYoVnA",
  "key18": "4iQhQcnEykJANvYSCLfTezwzQ9qh31syfvtzQ94mGxFaLnHx8tYi99dk8u8enLY3kxEQUGgvvc9y3XmtkCfu7NkC",
  "key19": "vKog6nftfFbkHyzdX9i38GoGVQPZT6sq1vMDjnvuViHccD2Bx4PfR2g6q4EJtJpXF8Pt9PaC4KrPqehrxWxjc4e",
  "key20": "61Qc8dRbbS9xsihoHAVbQ99N5fCkBjovBG3KbVRYr3wc129uFmhfXDaxf6raVFCUcWVe1R7B5kVazo8M2GnojKB1",
  "key21": "3M5henrTG5qXxbX4B8nRYkGQPtqDe27rcW57iZkxm3ykHMAyszRLkyjCjzXp7Hh6bb5fTQExuB5beBaLaxgroCQK",
  "key22": "5nVp1C6tHMXrUhg7Vz5b2ytSax1KGPZGkR7BwbDmcwTrYMvELKwXe4WwkiekuYQkvp9WtNniGTQmQeKGLXFWdgz7",
  "key23": "5u9qyULsPXfZQoPi1T4cMGRdbFoc8aqz1arBRZetw75jczVsGz93fxoTRvt9ut7tWZ8RbbqCw8WNFGw2GvbJQRAr",
  "key24": "xVrBPcRjTrUmpdSzXfDgP2sbCBxpqzqZ8TaihAkE4Pwnm26aSzhSAjTVpfUkpsthepWrvPSbfWHiSwoQzy3whQz",
  "key25": "2TW4fWxhTXco3QNfBrkXMdExmRuLNEpX11hJF4imULQRroP23wYxhJXznyfbYkA9Sev3acEtkDGBmf8uRBnLqkvU",
  "key26": "38sE4VoF7xVjWtTF69sWJz58YGqjmiRoWG6RbwYkHs96tpc8PoVrfBo7BgxJjgDpkVjPVdgzqnFtW9bqaX7BrSGe",
  "key27": "2nkEyiSi3McpfQkgJNSQuichwMtb1GnNJM8qhizvTQ7k5CXwtxsHjdQ7nDJm6ACoQQ1zdRBRwSY6ouhM6iBSgZ8E",
  "key28": "5XGEZ8BWoG9mzqivtrDd7VWBhVMnaig3EANfts8Q6v3iePsUNf1hXdY55JWdxoWA1Mhb4cHTEgdDfW7msSAh7PEW",
  "key29": "4ao82srnc2RqDszvCxLpAzduKr3cXG6T4SdPKhBdboDXaun1GVroggyUHyxybUVqunSrkYgtaALEXd76WMr1z66u",
  "key30": "uPEhyqjR3mkWkdDtcij1izYoJn2Z69LeWL6GqwiwVJyba3nczMZHzo3eLBmiMZADEYjv6YSLrjCtLKeYkAtsLGX",
  "key31": "5rKDr5TrohGGyyF4E44rAcB2gkpNGDqjJSNL4W2aeAQrxYfETEFrTkL6j9i2G2b8U83dKSoT3wyrPbQKa8VX2hgx",
  "key32": "3628vvtz56cWafhHDznKnjFUTsJp5P7rkcXBvENWQ7hoUw6tnp8nAdAiE8hyPJt2QCC6MZa65LYzfAS5yPom7eRD",
  "key33": "4yxfLa6er67HoXyFpjafScvtWB9MqTL7kMNMwVhGufwi6Nnjd1aBy1q9diMAHB3x6Nthk5KZBWHDzUT8ijoonCEk",
  "key34": "5dTWvDMeuzr3wvQcT2o8Sgqp7SYwNsoE8ZLa8BNfxiC2fHZEswpzGNorE8DbxJvgsM5mRnSLZqgnNqhQ2ifEkNHt",
  "key35": "5DgL91ZE1E73cR68vpJpxK5WPHZWhoYsSy9Zho9eLY34bg7xNC4CzDDQhEi6x4vFrzqQjqK9yq7U4sCNi5eEGLqu",
  "key36": "2ENUFvfVkX5Av7oASGhx1JWXAeuKzH1q9vK5PaUxoVvvAFMo4zfDsVMsKC4kzvDVDy9tgHYGmP9aLT7hEBsadmWz",
  "key37": "ePaCUHNzFTvTALrK9iGivsNkD9zw9tgy3DLDQQFSbK4ELTHTYu7BTGrQPyAE4vPrbJY9vJ5jMXQzxAVLqmFyumh",
  "key38": "5d4NPD4B6JcEGiGWuTAT6LaG8kr5F2eJrUhFNecA9jXPRKsUu2Vg1Jh6Ns48NckWDDFMq8X3ErQNRXyin1Ab4dFS",
  "key39": "yVSPXvgbnvSagUhjVvQegFTU9viJVzSRXwBQmkq6Pm8AoxuGEWpsVR4g3HuQ2ZeQm189uk9Vx2D3goKP1r7ogJY",
  "key40": "44NQLt1LM5fcpieVAkPVWksi5yH1gHpjPYv6idZuhbcbDyMzD6R9sH23fzEwN6FMpgLtgvyRwZpkSLDHHgahT1BF",
  "key41": "4mF5aYpU1mYCJK4jL8N5kFqWvP1afexSGksTXcxJjzBa4qUrkUtcTuZEfYWJ4yL4pHH8ChXZX3N2GXZXNiEVGSKd",
  "key42": "4cn6ugXxxCJAfHmNimqUk5783rtf6L2qmfzMqfqv6PwzaRAYWnnyZCEMxrJLhLHpZg1VSLM3wbmEqiP2jAvy97p2",
  "key43": "5GPkqssmd56n7pKrcKCEdBwd4mSgEuZkBbbz5skUqL9r7bd2roXkXnM2pd7ZLWRFRjn4oyAhWvoAbCNCd6krPkJH",
  "key44": "2GzTrAUgQLbqarTyoHZ1aV6bAeHg4W2BJsDsGcev9JqnrnxdxdKuSoNAYhrtE82TygzvF77VL655JAHn9FK3qfr6",
  "key45": "36zczn2f9RNGX7fk7BR8Du28ExY8exE9JEcUB7CR9Ap3yWaYfyJ5bh2AoF6UNUYu3v1KdeXpcsygSdaDGxpYAAiP",
  "key46": "3xBPbd9VHMQky5zDAdXSUn6SeMZhuEFaEEGNau9u7ce9We9K4cdziD1h8R9jY8TPcWRZuGJvkE2SXsCGbJJdpv5e",
  "key47": "2EEEyoBmFDWGe3cvK9edtrR8xaDGb1y2Yty9fD4XwhqVHygGj75UA15GebSi6A7HQNU8JuXgokeTySof4tV8MN3F",
  "key48": "36dVL4RdXR9kZ2XVDyAZDo6ZHp45mo9PRr3RJg5toyMLiZuzVjeRVZQfGvcR8gPwbaMNTEuG7FFmGuJpM4J2sgr3"
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
