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
    "3w3fXqfbqNiATso3HaBwEPBLkMjTsuBeKFwRuqL4BP8K7XnHGPLkx3NCDv4j456Fr3w8UN6QFKX895YHtgya8qPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hMbonsV1NAmhVP5QP7LYkERAiTtKYaL5cr5WsWFEM6SBx2WPxh6GdUUDeVsKDJCDwHerCHEeDUJn7JruAJR7DfY",
  "key1": "5uzH6dz6p1hMHjxpLa7QrWoWym5TvH5U5VETjnkrNgWjoaa4Jcc7WZzCh3hLRm2y4KLvFJMctXukJKnqKvXBDNwU",
  "key2": "5MsRXL3KXzas4vLRQqg8z42E2znx2ebfJmRFTznCYXS5u5nC4HtxjN6i9XpCM6uKN287Cki1WPpJZnGgtDtDAERV",
  "key3": "5eEiugqpg2iLC2NSP4kcEvN9q9VUnaFXsBwzkCwLJ3za47UjhL6pAXibUFLcv5VK8vSGjuj9obAwD4trgSyDUHoR",
  "key4": "WM1AWyyBDhGB8RfQAY2f51chTYSK5dNKLz1AToKoQ8do4LDxqtEhv6kn79QX3WTMgVUq5KU4U2wnhXpvUrvaKia",
  "key5": "3F9G8B9aJ485PjbJscppGQkqtWKUBpRDJcQ4K934yDgaMtNXiVn64yHiL4Nc49kPkSXi94NMbTUFR8M2jxtVMopT",
  "key6": "9GNKd6Hz9fY4WNf6r2sGcozjk73aGJoi6FBEVRe6i4y6i8nhwF1r7M1EmAz7c536cmNbXct5beB4Nk4QKWHTqqR",
  "key7": "3DBgf67hqA1NBtxFDfM1YiusYgxN1K3WPgnvycD4wPZrXqpj29J53dGGCPpzZEU4NPLKovVzAAXDdedrmazeYBjy",
  "key8": "5pzQ1BrjVqtCjpvrThHTboLCpYhUvYhUik4EsrzzAuHtAAvpD7mgn2421fkzgVqZXyiwohBKwLhyZAJS9xKFdN4Z",
  "key9": "5p4fBhTJ5GX6b4X3vjsGESLkAxknsnj9LPyBEdSgLwnggkQ84c7UQqZu7YS9RwMVannEYHsPjFFzypJ3CHdhaUvC",
  "key10": "oz3pvGifJrSwmNvVPzZoCtboNK41B4AGouP7fG8ocdQxSbzHiJNRhxSFfirF3cDPdDkrKtufRMTsAcU9VS9QujR",
  "key11": "j4wNrowpceAgxs3JCaGwdLgnMxYJsaUjTcdiaQqVMCqNucnkDjDyQthRkACV96FysxGXWb54SYcDEygToUM2dwm",
  "key12": "2wH3uY5QwP2PxF97GTdmsH616sda7CKVX3c2uhSKAfSw9qxvL7JGMyLzMuanGgCXM5yVgFsPL7YhtL2Q5H6hCtf4",
  "key13": "3c1YuTTmZuyeiTahERM91T3QhVYvwWh3B2K2RxU4EsroGNr5PHqdEhHxd6VSDkBLvP9GxCJ7NcLQNmPTgtSRm2Ri",
  "key14": "jRdhETZpALcdnwrDEKix8MacxwrsRTEHUo4yuCG61MUb5ZrqgLxjUEBv6mobR5NR65g8PUsfBQGw5kFBrEqMFUz",
  "key15": "2SEayoHM5ypKHLZP3o8F6je1cxgJuMHNybgqDFMq9F78APNB6edsepFftvunRnjSepxaiZffk34B1HDWrHc5Vijr",
  "key16": "2Bk6EfGeeqFnigsZZAJDFpYxPF6mESDXBXd4mAvkvrfRRjfSS8k6RgsZ7PYdv6AKWJV8Xrf66SaUZYxmSBtmNV6B",
  "key17": "5yfH1M9Gthg7qxjoPCycSMLeMqBkWggh7mNsj3yLJz5JJDmTkRpZtTykAnwc8oKPBZ8GLSaSEsRGfGs8aXxozewM",
  "key18": "2nk5nfAw3cWdFpFa7ojo8dHZLGjm2ZEBkn83c3rNezpUjdibdxbLxj7wStoApYPD93zfiDP4388PVSdmbZHCuxf4",
  "key19": "3Luowmj3V12y9RBdcdgXNusviv2CEaeZPSBx8zBDws9F4qCwhpQmQBoa6naLLLwMjoWePr2SPc8e5nX5oFkMkb8y",
  "key20": "WbeLrvKoK11tkszD1xyuzUhJdJi9xwMLENzQaV3obHrNxB7J4TYoVkxxroefBAuxxQZTfHGoqMEzHY5dcSCZqU5",
  "key21": "2HymrGKeZ1aFgt3ryFdMqxmGUakhpbfp8rLZbJRKukHAjYg4U2T1nutxSuodt5Eq2HiJnjMKAx13ffCBsxwzBBGv",
  "key22": "4oEDx6rrtiC5hD88qy3aei1D3gynkRWdyncQjgXXEY9CBWzrjSofjr2mwaHeR94ZQePZF5wWW2uYe3TEziZxzkAK",
  "key23": "3gDrT2V8ucThVR71fUnbrf9Sgesw3kTkczVfAHPZy5vnKaiGuF7z1ajGMc3PmBwJdE6vFibWMtqeKvxgNiWmgX9T",
  "key24": "3g87w3zHbH5sS9uBxJwiw1TMS4xzLYcpPgznfpttZ9NX9qYtJpN1gJyvG6HizFhenCk8qwmsinW8ycvWHemeJQTX",
  "key25": "3yM9e9jnrV28wJq1kB2iqTjn7KJBWayvbL4dFh1rUnc1iZwWeS8MBVSsEab6fkm4ebWL4iyYeTHqSUifEQBY2zCC",
  "key26": "4U2htse56aADewJhyet7P4JtqwApVcUk8MeEeqK3YfZapMYAR2QgPDrh2iMas66AFyiLQdKFy6eHtY9Hh8hQ8Y1k",
  "key27": "5S8yxwJBsuoXGkuwr2VzYV41QiSkTB2Mc1waVD4mLybzfQEPuABsJQBgtB93ecQNpLCoSAxRcvTyaMQcun18VdN",
  "key28": "67pY9dGerLVfxVkskf7oizpZpBU4PHguXCph6S3haFSxsS4FTaaDt3zeiK1mti5xuJhZiPxAKV3fM1T6rvfzzker",
  "key29": "aUriSSEQc39vQ2pMjGnt3otinkFnvKgQLfUijvsoKV3wmGJmjVSCpmtjsDF8wQ7rR4AVH9vxnkeAhtUN4SkCQ2z",
  "key30": "d3LmeVFPjvW95EFz6UQAqnDiyVEBXdi3UQbsEB195f6K46ghUNHu2hWTWBedMohLmZ8r2ojGbTaBpAUsW4Qk1ba",
  "key31": "4EXDyfMAu1cue8QUQXYZ7krzVNbqa3MZUEmC3KqjLd5rJgdUVzbWDn43YggZn6E5n5gGH9LJSkt5FRBmBmQdGNbw",
  "key32": "4QcSP3zqwkLQS33FadBUW6p2ikvJCpBSfiihXyF2TAF4oubWKbFYR6MvEtLTUyZUuaZ6roffVD27iMy7FNLRFvbJ",
  "key33": "iKsELhf1EyFMQSn5uLCpUW1qZvhE6n13jiUDQtpuqRyhZwco2qmuZi18bUAGzY356uRwyNBPogKagzgFeaiUTvj",
  "key34": "5dvA8BxCR2MqqRkzZCuF53skJJYUoNzP8Ha1UbQXNUUxCrjxNTArzYf6cGbB28H6Fp3LyWkkGvYVMaXkaP9NjzL3",
  "key35": "4UucR4yZGGYiWBNYg4UuHGADZHZVpXYYLM17unfBzMcaU5BxYCfKg5cAtAxB3ZNtYtSLCjGRcv68ZY12VRPYUuoA",
  "key36": "3VYaQc6A444kYk8jTwatkVycxbeTDC6xxPiuVLrq2dCAQgSuso6rFnGQ8tp6uExXpcVYRVoVo85PC8QeeBrmQtzg",
  "key37": "5ErAbU9deSepP93sK59wBc83YiFhpQEmbdd4ENze3z1UYR34GvhWrt1LfMFRNVEzbiyswwJxX27rqGTot9mK9PAK",
  "key38": "4tfYP6Zx5oJTWkBkXgvbFTu8NaSm4QojhrAvtrjRm28o3ypytFJXLtBSzqeowBfAyh3oiWYfzvEEqP2jJvZ1nDxE",
  "key39": "5QJG27cNiNVW2zyBK1dJf31j8bG4aXWcoLcJg12FZdJoPuVz3L8amvZw5VoraJzida8reQPMoM2XqAAMRKhxv3z",
  "key40": "1AcLokcLBv2nrcZUj4YSdhTXX1QSba6mVTR4pt2SXX3bL92wuyo7Wwu7Tv4qsqh7CVCmx8Lhva65LkhJYWW8UPs",
  "key41": "4JxKbV6uG2uNvroapZGPhivKv3WmAkjJfrB9QU8VimztWfrgbuNvKK2M21P3dqjAsFCRDRM9DvxT3hyGfXigtPQV",
  "key42": "41ZYMHDkNhrnqGXT7UP37tPYUombMAR9zo1Qt7CKRr9hGLtdPHKPq97Sy3iYU9Jp2zFPk1xmBe1W28rgvQkRtRDV"
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
