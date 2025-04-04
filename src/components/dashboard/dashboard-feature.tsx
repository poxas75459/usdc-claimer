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
    "64jKPGMC3s1WFn2NKBNhsRRvR7ZJ4EtoTpTUwTH1Ewxb4jYvL7qyJuUwkYR7fjv62Lvp86zwAaRmgRvWXjp2nGhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ys7EDSTvsH49u8XdiaYXPeQVVsWygzm5FD2iWPXzHpfzv351BvSFWEHuXarcrfe1U8vqoH2A3GTsLeFELPQuT9b",
  "key1": "22PzmPKUEWwrt2grqKUFCy5z8nBTstxyUCpm7NVeVTvNNRBHgtYJHrp5UxWaJXUiZzyRSDqrjbJjxvSvQNU9KyQU",
  "key2": "2sz6GtJdbBSyed1M6nbUCcLB1K6wzdsuRS5Q5nqxNnhbp6gEcxWMYuKQ15wQUYP2TShyTTbBSgHPu9Rm6UjXk3ui",
  "key3": "5ZoGt7evW6gc4xTpn8yTavs38SZQD6RKfd7Rn4SLtR8MGDeGYuvTurqiZj3G8Ju4vPmZto6MXS2csPhpgJVcHum5",
  "key4": "4baL8kzjm6K8HqRcM5mZwwwbMcCrS7cP97ySxTKx4bfWiuUZj9xLc5oKn1ooFb4hosYJgM9Ppj84DYfgBpVnGrw1",
  "key5": "4NZLn2xQsRFUnzPsi3JLkev52Pch8Mib7TA2bLmpCQtbrXKxZRM6X2qefa4aAEogp3XmfJg5ADKdjjMh9RNu9kct",
  "key6": "P4wNxAoTdcK5j5Ue2pmHbZ7mKJrL1BPbwPBy6ryiX5GMLBvG38V8Mr3Rs2Vw94YBrJX8V9o4W8gYBDiSdxY6GUg",
  "key7": "5Z7EsrpRzKFtupbKKvTaYTjvwRZaCXJrNo91gUN33C8YPHUscgBbwqxueHbsSPT3KaANxWK3cH7TTrKq24hAQFd3",
  "key8": "4XB52CrDi99doZwskfr6Rzeggti7xScgrjTepe35UMHa6ss1eJ85PSdMUzCAGegJasyAAa5371YeT7Xh3ZusdW4J",
  "key9": "3NKqRuu7fFtPE898mzrtmQdDzNva25jx8ppjfmcoSgk6VP2MTDBrooe7AjEpzu5jHD2H2eZgYQhzbo5TQeeNC65W",
  "key10": "66epCr9rN6cPctJ9gyo2rQtwpHGxmDXKcBk6uDvcEUxTUpEQZy2cqnnsLkXGbjxw9pVGTtDhMTJe4XLi7y51ZGAy",
  "key11": "4bt2G3mFDUqKLKSpqVZ73exfKKx25zjWEfDg1YUn1rBzQh7yMH2umy6Swq5jveiY5Kn8p4fHkfn5Me6N8zT1pYEx",
  "key12": "2pWs8CCAquTcj777YA821w3GTC8bkCywuWoFj9N6TyRvpzwFvrHUJMqd4kZTemmiwJbcVhXPhWQDtGqHhvaBi4gQ",
  "key13": "53yKqhE2nRYpYewMCX6oxfbewgjVDW3wa8mWA1fUg2oZYK9f6ZJkzd5Z4yNo4xmGWsD8vJf2CqjdsidAjwo7d6S2",
  "key14": "MbPT88q98HzyKuAGUfeZRXzgNT7wPCEEz9NrK58hZJPKaBvwwJHbjfBYiirpSw7duEixFWLD47eEVFrTHALSYoT",
  "key15": "3Vk47xckBhrEsDandxwPxm5iMdBCbnjfM6bu9Wi8Nqz9VkWHuvoGkERaCmfg8isxjUfqUs4PGAeYKNPzSvMg1Vqi",
  "key16": "3idvyuS9ZS6XS1p7KrNBZmv3bjWSuNq8dkV5AAnG7x8CMufZ6UVVRNU9vU74SXtjhsYHgAiSuLozKrG4fnJCm9fP",
  "key17": "2RDkvhwE2JTGfYqjG1qMrzXfSiiMu59yTxWPEHzEexUHmM2CYKRtCFyZTvgThpimGqpMBaGKzUJhpEtupj4KY5RF",
  "key18": "4frZ7keY27neJyWCepdJtVaPPww7Cvns1raw5nNncmHr2ervNfS81joJyv8rD9LGyfHidCvCxAPSxAwdDYchxUsH",
  "key19": "3iqn67bmdb4STQ31KgLJMr8xejF8XqZ47cMEmdJwbEfYXLRRjezFQcyavJzmhd5WB5uVLDJcsUEtAizYjYeihFcR",
  "key20": "4LCdWR3khkzxoihTrquhLHiSdyvwRTHBSJbuKEo4J7sL1hhjCu2QedUeoQV69P9MQp2dFsPkYkiZrwSbCrhK2PMD",
  "key21": "3uz7SBRoGfY1RQDKTeCxHfDGiSn2CN7xSi4gqegksLiSZ8g97dSRL5GKXbx386feTUyh1LJBhWsQhAbZ8p1Y3AvF",
  "key22": "3kLpDKwX2LStZ7p4aGXEnkuKAuzJcsZcWb1Y8db4x1MsphuwV3npGtRVYQ4YqVKxkArTE5jVB2xyekjVVnuYvbxS",
  "key23": "4ek7pLVL5NjqAq25FF9n3BYiTHDM4coVr2NvLqxjFPTvXCRniAu1qYK2wNfNzoja3aiL7dVBHuQBmT6yNyw7FrPu",
  "key24": "4NAVCSVJotEUF8tnq6iDB9q3Yy6xj4y6rvyiu4eji1EErMQkHd2haZoVksFgTBbg5ED9976M1Wi4sTsKyFwFvmDM",
  "key25": "rEniQqYp6ctFBwt1orhp3974ZS5Ym9G4oRzVi4RTZAsHrWz6TJG7ihT1ekDLrPsL5wDsmMvTWSxU3QWYz1Ed4Ca",
  "key26": "5jdM2LbQ1zKE8ouS2kpUWQwhwPhQiXCepdg6x2fxe8mpajzv84mucfy2Fp6DTkMWCAFHBwFnnWP1943W7XPJx6vW",
  "key27": "gifNZcPXmZtjcuYYGdHLa7umaBfANFrTNK2RSXhXCdjAYMDjaH28s7BpAZZxnaL6ahfeyy6nYYYakA9BfypQNMC",
  "key28": "2dJuMrDg4Ry51qoH1JgV2Uw2WVycgLYYHC5BDrLHDd2mQEFSEUE4TmvtLDVtNEguknW8cfXbn84fije71kX97SsW",
  "key29": "3ZCCV2oxAew7RvsW2YFQ423CEPqY5tRmFaBEHAxv2tpcHzBzzH7B5rqLwb5wKG4aSjEh7QuxgtQw1Fwu2vKB89vM",
  "key30": "KQtmHbApDbQXkboLNMzL4N1CrBTFSMLyXy9Pq2eFhjEsKpoBnVXEW5V9CPfrA8XuKhqwXSq2yWdpZciRHmyDFxG",
  "key31": "3oUMhCBoheNYs4LEZnQbwQZLNAy7tewGGDGZ3B4YzUeE6XF4SsbQDEHZura1Krj3HSSJAiSByK3jJ1oCjpjrr9pW",
  "key32": "5WAb2drQ5DrvY44mSzHGgWnh1wSFuHZV3PngL9RrJ8FFhRrSau2RJPi81JpS7LHeumdhvssQjogzWXHUrURf5jxN",
  "key33": "2h1QfPJmV6UA1aSdGPwEKJAFUhXpmyBkkKxL2mNYttcxTCXP5LDXaevtBQh6GCERB8i6o9sahzo5VQPsRS5VQ1tA",
  "key34": "3Hizif3XYXg2tVNmEc2pBUbK47xtYQkcW8jNkjqweLWewvZFmxSRa47f2DbVhzquh5vA3oUeTX1oCTyqFoqxSnUp",
  "key35": "48mEr2vU2RoYfZiGwufo6fTmRx7MPHrv6K25VLsQaZ3GsSsHNjGEe8g2bvs2JrgDmteRXVRGMRrtRTScmUz1xtQA",
  "key36": "4g24X7ttXiNF5j7JHB7Jc7A6Nx2U7fmE75mbf4CxuQa9YynJhK2uS4Ja7Sq9C8FrEpVfzssetwenTVGbi7v2m9va",
  "key37": "4j1UWGoPhkmuyGg2JWxBZUxu4RKogM6AG6iCi83zrjiUmfsXzhr3aKoRGSQAqib7ZkoaV7XqndsyWzG7xM5RswrS",
  "key38": "64yAnfhUPcE8usDRsrb5JdP6PpVREhW9kAPCqRCCd5xcTPSoiZsB5QKtVicQE6FeAtH5AvJcjvv8qdbGqYCT7hHF",
  "key39": "5THUCd6D991GJB9QZYr7FoAQxJfieLeXCN3djtustJByQayLEx6KiSH6M1jzBcX9fJ886GQnMtp9DfNbhT7uaf48",
  "key40": "5cXcQX3wfeYEF6C88GHKgooXeubvQXZorw6k9BYCgbVxULauTFMeuVUCL96guhhjtC1uA1FVaJSZjw9qQK1SX1wA",
  "key41": "3GrJM3aYrAueUHi51PoEGaw19QACViU2pMvqo3tVgK6EDGfpczV687QrxG9UdFdXdoD5yvvYdADu8Cdek9j2yyqa",
  "key42": "39AqovVQHKubGA2Q1Exxb9ny5V4KZseqhMSfXz3So3My3B72z92592syYE5LCSiXH1tYa92EeHrJuD11QhsYw6TS",
  "key43": "527cdv8S9f6Ax81VMyHwnZmyMu1AURifEs7EGundrfbyV8pockRNpe7nMaWePL1kvbky55bFXVpJWqYMV6CNHN4C",
  "key44": "4f7PZ8tCBg4nA4zkJS33WKm3rQdupdxRHt5NnwWxXFcQayScrUznwmsviqYxJu7uGX6BJe9F4bUGdswpakGfV2XD",
  "key45": "2NqRJrwjqYGB5ApzGoFonK7LHwFsbKuFp2RjhwgiSzfuXirzkzGZ57S99nK7TV3AJ4K4PXqLNWHEpJ6LTDp7zpwz"
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
