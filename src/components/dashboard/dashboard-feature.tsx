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
    "51KKx6qWmGg9zmvqDoMEwZcRvCCpk1dxd6BvdUR5bToZrBcZaaj3eCzqyxjQv67sCoZ7XPLwcjscyrb1AVBe4UtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27wpUvC9AngyrpxCR6Lras3sdbCTk9V39N4EoehgCu7DGNeQaKwLjPuiCGGaUHd736A4ZNJoTfxarBsdcCYtCKci",
  "key1": "3cPvdL2RbLVHSHBZgJZ5gGMcDiUZZtLByBYwCLHffCDQVmwJunzty2coiAgUbWrFgtp1otXxyCMSdM78MwJueDzd",
  "key2": "2vLeP1nCbzSd5QH9f2cbWMk2298TBJG9NTuvs4BrnRcdUdaiD8Vu6LustCxNZGpaJZgh5SHZp3sqMgdr23p645pn",
  "key3": "4a5qWij2mJvirbb6mHtdyvn5ivQZqgSrRiscTAuiFB1nyo7hwJ6zcoKApfsdMktyZr5ANck1Aux6aTR9G9ZAFHiE",
  "key4": "35hQZ5R2uvL4NSZsvFua9HWQoLKec5d1sMWCqDBJ2gcufHNeAmw9vBHiAqj7uDbpGbZJnqL9unhEB2ZLhBHd8t33",
  "key5": "55dGMkQe97NnBRPtAezAsdRpPhmS5xBi7V8csWRTAFF4czcPa1UMxpxQfmqWWGrkpY43uXB8RbyTLfRRuaTWyMDX",
  "key6": "4evTQ3wwDUqwoYGyoHwaTi1vSfKciLKhNP8BbU8fdjnYFWXbkyuJ7YoRcYkCHEa11eBibz2EkN41EZxkZYdKaRV",
  "key7": "48TVa5q8XELT9f7ks7Hu6JzNBAmjYyinMBg5CaC44EdrCVUqsNpRyYhkKz4upknwsA788W7oXfJyUukXp65UNQ1J",
  "key8": "5Lzggwfz1V6yrmxtHGMZEQrVPqy1RthRz2EvDoKoCBthLGVoyrRHaSpVUR4sDE55LJjV9ACD4pB1myuRkkjczLMh",
  "key9": "5PaSkFtFjYRdBZoRS3EyEsP5VJEt1jotiEx2FtS1P7Jo856Bq8KaDZECL3XQ8MqJhYpzFGBhkzCihnA9PvtmUKEq",
  "key10": "4JqwD9i3UACkWUVTEF95s2CdRShUDRf3ZcDp96W4QHTbXhSY5yAKKFrNa7jQSd57VnBaX58UBKiqBrXutt8PLFZk",
  "key11": "3Yj4U45j3Uo7czyup7uB7UZ1PbtKGMpajTRLmGL8MDqnHRXsE9gT4ijzqq6Gqz7Q4QJotKDu7gbH3aSxWcjjsD3x",
  "key12": "29hoVz1edzyZFBkstKqDDTfgpDrtqiKyznVrkVCdL2hZzs8Kp4QczWzcc96PRZLfbsuX3k5Bh8sKEyz7Ksj9wbiU",
  "key13": "2Jt25J3kFsgT4j8yU3Kk1vxRcuWrmMHXURWb7j86yoAGnH4qEyiYbhfVogymqVCuX1CRkHLbEMGL39bBgBv6QTTe",
  "key14": "2CCHZg13q82VhsD5STVLAeBMMbYRJeAJSbSVMXtzD7wrZGLqcSKHFG5bQhD2HRzFbiVNTMYwpYAjZd7QFLFYYr2h",
  "key15": "5bjPFPD8o7dbkoUXjJJE3Ket9XoW8MYMHpJrXtYxa2bpQRuACqMu3AN9FiQNvpGiDrtTxDQZK5xWiDGrALoqUBDU",
  "key16": "2LbBaGGq9mLf2Mzq4GLexvfBsyV3WUWqSVCw6TguqUkfMTmayWjWC55HRkGduPHbrFcFgSS2ZkBEfaRkmx9pYpwQ",
  "key17": "2c3yV4skZ6ckwTTBCA36dkZgBncNue2zgZAmJC5E6tkCCgs9yMrjq81757dvCXp5nhfHNbs7ibuT8oxJa9R6243X",
  "key18": "54Jw7kMsBTeo5mpBqothWdfaHf7xmUoSGwvMEZ4bK3qSqMpLW5rcycQa9B18FNn7qMq35dLNeN2mECcRmK3kjeJb",
  "key19": "127yNQRqJHZakXh4WC4AZ6jD2TEcLFmzqDYJJRfo15TgZ54WWhg1sVgdCFMx3MhGsozqsU8DUk1gQ75qzDt581ne",
  "key20": "3MCH4JqTgZuzR7aSuJPYhhijVwo22ii4s7wXcKceD83WEDJJAJyJxmQEsEqC5KHnsFKWwVuw2JHocuwDNo3AfC6t",
  "key21": "3BzVnowmzn4gnC2kD8ZX3ZW987ppxXapKzNj9LYjS2q5FcAwMkM6DTE8pC6GoDrtNmRLUDWSYeA5hstKJD87xPks",
  "key22": "59oPE3XeAmH77JkXvRSbTebLn4nQTi2ZiGfpGacJg9H7BYT8LwKsMSUSYCyjyic2cCxXWQE42z7ov39YQVAiyhZj",
  "key23": "TLnptu7BbP5Z28VAyDkSpVygN9EaJtvDQeRpTKToFBGhRAiWMA5dbeQko5f6K4h7wJGhHHMy3YrLRRusRihrMwQ",
  "key24": "5muFNLQ7Av4Q12EU7rBh2ELQ7RHbTYVaTc8XrfcNchSqKvMGu3fyaV1GvSsWavBHmB8uCUG4cw2ay2Y8VzDtFUeA",
  "key25": "4Rjbh2k6Ry5rZvNG4k48EatAbcRUcVkGU9AAh64rCgEyY4PBekxnbbLw338yLKx2hfUD55WdgvYpZACLgJ3XCv3E",
  "key26": "q85ByHeeHu51X9tfx7sR1BeRKUDmaJRzHP47yRxZXXouEvGMY58buEwWMmTrvuk7EfCzjTap2o6LsGPFmC3bVoe",
  "key27": "5DkSAov3Ewi92SpXFA9hNUBgRq9MFSnBAAFf8nJx1eNCVYeGpgvv7wzmDN7EmJJfZSrvfQ7X9q1q18DVLwEdcicV",
  "key28": "41PybsRzPW6nHJTzY3BnMFo8oL3wjfEXJzPXuJwZPEp46eyhESU47PiQuGSmGQqW8aVJs8UueJUkitGWxdS6Hhq2",
  "key29": "hSNt5gAcSashBZZ6Zy1cgY6gvsAJSEC3fq4jypXCLK6Ur2ZcQdYxL35tAaJp2W49eNUmRnPEucfGSH12Ek6wTBd",
  "key30": "32KUEYTmkXLbakijLX6baf3jq1VEPNzZhiQXjf8oauPk8HvdPdFAqZD31VHLQPURrCA2T52Jgt7CrPr849E8o81a",
  "key31": "4LbWmRGPEwxnw3timUZNY6Rvoqgmwt1K7zvo4V5pLqX2BMNuTwk53JAEwSJabzwdAqfcDp1aUCmG5jjganPWvTU",
  "key32": "5fEMeuk9frN4rFEVeociYc88SrcDvqq2jDGPjo6aUXH7NZXxqth3vUrcwM6wdtXxEm75FMHSLMK8thxRjjZMY6kz",
  "key33": "4HR8KWf7WC5pPngemd6ACPMvcDSH1Q2uCbN5veERTZD7ny4oBrLw7nntC6pS81m5pPftayZMaZvo5j4cZ2VfLrm2",
  "key34": "sE52yqcTbDw5Qr2tVFwsph98n9vF8zGuf59bAWDgJacsBa1xN7fQYJg5xkp1r1huctnV8HnvEgWVUgt3PQHV6y5",
  "key35": "bAD8o2VTEhgEJFpYjzGQqVe4KGKqSkV5TZt448NcrmG9PYnkF9QBemNUEFgyfqFNpZYd4MuMgRX3FGbtBLuNtj2",
  "key36": "3nh3wMYYy2xg76Gb5T2vjdqSCsFeNQrwEon55ozXwcQLm7Vs6pHvFnnMaxab82gV4XrQdMLRtmzzQGT3L4ZJxYn5",
  "key37": "5AscWYHJVMcc9FAKo6bmwdwna8QVV2HRu49D4bez7W1gNjPg86URzsRb8kWdQuaahMJawh7fMt176cXBQYyv9CdY",
  "key38": "5o26ZwZLyVEUKUazQ8ewYyGrMzqrD266bPMU5v6GPj65ifAaDZokqFigBwxjt5ZJ8oGJL4nbmKCvUT1Jo8gnZ9kA",
  "key39": "2J5uTNXnnaZYqZjSQRTY8LTC9HxGr7vSkk1UbyWvxg2wdnmMjKotFDzW3T9YpUPuxurEb2V9vr1b6qACtANMLUok",
  "key40": "FLhwbiswhnU9WRxkKSJBS3WD6U84KjCLNcnuAagtypYUeoqpcahgKVD62TU7Dmd4zR8c3o952xAhwUExgcG2Tvc",
  "key41": "3jjrem2pitF9zDgsHKh1oS5aSnL2hGveTvn92dGyxWArKt8rVMsKZNyWAUji4JBRn2hqrCMiBDz8vjZhNdeg8Q6c",
  "key42": "4EdW8iU8fBBB3DNUZ8QLqBPYyj4W99RAFhLV7gQ4aCcktKrvVEU6oqfCgsN52CwXYMhLNL5GRBc6FG4WJGPA3Vzu",
  "key43": "2WVn4Yhjmr3hnu7BnwgMcr2bv2t8ALkn9fb4VNJv2S1CUvCv6frxhCAmUT6Xc5JDPfrNdAWbcVJfRUF7HMqWtmZj",
  "key44": "3PVRHVPq5zzKTzcHy22jMRhZGz19PfTNiMGx2RK2ARBWkLNzmXdE93qxXaDgG1HNBi6kq5K4MTAZf5oUkCr2dcGJ",
  "key45": "2tiR1mHQSK915w86JkmeV8ssQcJ2rzB6T5gTKiCKttFuvKcUr3TU8dw15HoJdWiFuE9AVwV3MyZwmDRuXqNgYxKX",
  "key46": "3EiQSF376fS6PZbycuhScc3zq2vDceEbb4YNyD2uiusK9tzUtQfjwki3q8zdD49eSbNKNyw59XPeBGQj6Cin3LTe",
  "key47": "sb1jaLUv82tgsiYBwaDGFVqmXXu3VviP1g2EDPfL3yZ2joCSuH8PrkqeBErjo6Zd7RXZTxLhtHfouw2VQDJ5Gcw",
  "key48": "52uv53jx5FxkChrQ8YwuzPZf7kr36iyQHVkfdQrnXRYZBeZz49eoSnxjGPKqZy5PysCkuuQ35QRMx4aaUWvxknMn",
  "key49": "5beVDUc9incV21z6A57LyJ3h1HJP4Tqr1Y9BiM1S1HY9MPupRNDra17csfMvDpqeS5LQsmeQbwNF2QsdTufdRL39"
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
