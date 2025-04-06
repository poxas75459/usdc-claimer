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
    "3e85hy5cLuZyC7D9vxzKFT5WVX4Szt6mZbmhrdL77yMp9ucRkSFy3t8Pj9VaD7XpJyRSK3Z3JBo5WmpJpLKdGFKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24UKK7MtjSKWgbBoTxYFDpKNePsjMN4C8wbkgq6rzei2pa6NuhYHkf2U6o7ncWfz3PG9yWX6gd62e5aoH9Yo9Ato",
  "key1": "54BNxNuyK2u8nzvkNKQFuiJ1nrTHJ7xxNetYrq7KpTSvSEeD9Qm3ni5qxK79t6Y1yeY8pmB4pJfNXKZojFzny93Q",
  "key2": "3DvLoenEx1bvMXNEXVXCNaAeSz2hHiPp6icsJWWsbV5rNp9avVLJbQx76bqT2QTktHF1fqGJipPUWxDZCQKEYu6T",
  "key3": "4ackPyRPq7gzpFNmXae4wc9kcFP61kDYVH8K4GJrTJpZvxJFADF9da9i3BgSDXR3Suk3uYbpVWSarJ7vFxeHgDC5",
  "key4": "2qzi33rh6ajvff3q9rj3kfwxephJiBhDtNgCjqwbVrzixm2BUH3cskPQin49AVueJYgNo4JtFbVexmmQRgbWV4w5",
  "key5": "3ZJRcdeh5xkAMDcehRVaSdzUSV3De8Auax2hTP7yjN7nrn3gx1Zs25U4xsD5VTSsYQAZWKVEMbnzXw37ARCWqhBs",
  "key6": "2E5wwPuSCyqTaKCX5fURZTz9Bg8tpHoC7CXfhFQmo4mMRPZY6ajN2WzTAeTYPi9zcTvDQnjUuTBnk24tqEH4qNDQ",
  "key7": "Bt38XoehGWP1CaXxNB9PiHH1eu5qMyD5dkM3BfyvLfBgiXgxYCbVXsSCqkw3XmJXfYnUpGihkhnJbGnJTZ1wGp9",
  "key8": "FRrLZCauxnfx5Aor6eaBse8LkPC2x3tNRVmX7GYRyE8HsqqbcxDurnTKGLUcizvCEmjzfSpKWfR7aJEatqBWVvR",
  "key9": "34kc6tfXqa977X2G3UAkP86TFLYcTDEbcacUvqBqGyfKD1tfZfm7NXn8TkxmiUrMWEWuvZhxD2wje8Si2qHYmmdV",
  "key10": "66ZxpWk8q8inQC7BiB6xnKSqZTtdgUvaf89Bu4TpKqxqVtR985uBTtxKoThPXqBim7LyTyh45fbBoL8REM42W6bC",
  "key11": "3HQJwKAw5ccmnyGjA6tQWBZpyvZo5BdpguiQT2znRBW8sCTy4pE6CvsZTPzLv6Gtb46rB8VWHH6kEGDK62DqAq5e",
  "key12": "1tfER4ohXgyXtZZeHqioNDTHBHmfbUN6gLdcqEXF918NybJAwYbJVfZN9L1bDJbSbjEQQ98rHsUfLGW6FnvAP1m",
  "key13": "63pJpY9ja8Rm1cMx9rQL84PAj3E9VMQE98EkbGgVVZuQUpKXzvHQdGCS3yWrFWYLF6nLcho51PESXLSUQ4PxEF2J",
  "key14": "bG3SLiABSNF2U9r4qpzqQd1sGc75EzZQeEfAVzCV2sVeqzywhPyhkTtLYSUBhXjisU83ngGQzs5n4p4ZMCqC9UA",
  "key15": "uQ5oVuCPAXwjzfkhgU2Zrm1qaHKhfAVMTzeXRUb379dAF9NDRHwTTkdn4FwR1Wezuba9GrELMnb8KerTbSmUaGN",
  "key16": "MAGmwqpYH6F3M5R7p4BeVqsYRjDHYaDiVjqdGw9NDKHs2tRAbsR5zHCpVLDBr1q3Na4tqDuwbRdAf43pgwQmDkV",
  "key17": "4ShQHk43Rrc7xQqB24WR1aoNbUBRQL1Ksuod3L1DYkeS7g7up3DLW1akpC2xd9SLiaCkSo9PGhhGyuEBgQurwDLz",
  "key18": "2uDdMDKsmxVC7AuUSnHhgfoqPNSkFuqLwAhXbtZv94dGkCdogxAqxgZVaeG61PagrisRp48sdWMkz9YVwh1YKX47",
  "key19": "3fubrmDfgaYSKtvRDrrhSjZpy6uVscWoeD5mtGLiwsGtmPbcVQ3J549yDzbKbAPw2bQHQHN6VsA5YFKF79oHq9dF",
  "key20": "3uZF4R2QwXniAdL6RCoEncqZBvxUtE4WVo5wKqjV1f9zafEzFRPfsc3XWL6YhjzZHauBvaGc5VNLFGhvVsn9hKvR",
  "key21": "9onBLa6LFpoEtJs8ATu1s87B9jq4N81dEu1Mr4MFUr4yJMVu1rkra6z8TKtEwD4NyrrQMU7A35yjMUoQNjM98U5",
  "key22": "3mu5zrrcPF3KTjCF1ABDffFr5P7WB2gyetMgWTpaXKZmBihmx5s3s6mrn3i3dw4rTW2Abtq2ioPhKQ9WFuSgb8PA",
  "key23": "3d7xb3neqVjYk9cZFUYc6qqjhgXnpcEvgdM8kQrTJrNwf2QZ4DQuXbHA3jQ4NBzgmwByG6N7KdbLDWF18kuZgGzd",
  "key24": "4rJnvNGgdsAsFwnVo17VSJP54FzZ2rmXBXb8nZb3KWYsWHNxQLd5eLTSVFannvQdnTjq1GFpiXHxgcF7GqrDhJ1s",
  "key25": "4Bn8YxAuWdZ4joWHoCvAUwkMSipxVMLNfuuiXZRWgMHaCsHxeoFDMdFJSt46V6GPjAbPb6dx1p7EWPdbjG7A5VzV",
  "key26": "3MfusCFuwB1nF9sbKtVbKWtHtHUHenjMs8FMJUhtBRTtPtVhtZs7hc3JGJkG5hG4ZnEFuggjZ6FKsSscxh3JtTki",
  "key27": "5agHuRUTQmzHg3yenGR1GmWvkNWusdw5fMc7Z4HGgVNts4MAwgmxGuipmZkwy674yRYQMsYJcdN1zhT4TvEJ1Pr7",
  "key28": "dR5Z1knzmcLG7resZDmiQepTTWjEeQ8SbyHc4Fx443RP8q2oubNjgYXYhCuFwPaiuiwPd6de5AGhLso1uuiDrJA",
  "key29": "5HP8mCBFJtgEwZEUi8ZWKAh1CWHRjFv8Tds3Xrfwx4EUmZ2TaXeGxUy5pnaFT5uNzgh9fKyLBRBKLGmUDmYhkfZS",
  "key30": "5kkqFVkuzbUu51bwByupBrhELXeQaUuvshUPajxNqATpkmGp9mokk2iBZQhiSFzya3zRmpRZEBRz8KR67vPoC2qC",
  "key31": "45f1KkTY4FtPgG8SEwJb1wwm7YkA17TDeFGtWWzNGbxAoCenKyiEZf8xP4AS1eXHoAwCUnjoGmmEmyPw6jvBSQzs",
  "key32": "5QyUkfS74nBVgK5v4VytcFFfcPY59QMSvaPKr8H6mAfU8855sy87ZW1Gj9T9Mjy5BdVXbpW339PynfxK8So9fkUU",
  "key33": "rz9CokxjLTVqD7r7YxGd6r2gZD1DViG8geAxTP7MZHeFcKx1RTYUn6sypAdqBgashKZqzZpAoSL3HpLGUS72TFV",
  "key34": "4iZhUukwn525CbHNATkCaW8U4DxsWkcwu43D3LcucYuW3TFUYUKXjij3bzJh7Y6yrbV98PC6tASV8dzRsXDXBiyR",
  "key35": "5HGTYhedRsMBRvD5KsjNDCL4sKA4bvsumtiobBRpYppLogWqmRnPZgt8837HjgsUhNJx7HLFSA3G2Ru4RWnUPkVp",
  "key36": "4U8P4a6aBiifMtyYnQNcK4WHnsaSkC2zV9NLzshdWketiXkLTKedxwqeapQtyoV7EzKfaMrnywEsQaUc6UmY7qVH",
  "key37": "hNG4Dar4Ti6A53QdWVKL2Qzf1Z8Yh9K4gn5DCbWVf6TfJnkBiv4UWRis7JmodUcKUgbfXuSJGLveZQahfWSx1gz",
  "key38": "57sBpjWgX1YGsEB23fqY7vwLY4megEv3Gk8xAFN84e1RyiJreaxxxqXR9xC84LWP8PbdytpRKKp2ZdoFfJhpWGKA",
  "key39": "4LQtz2zLyS2YDcLk3w5HCNvfRByZ4a78J6ooPY9KtC8zP8X3To4CYGxcnECFAeJi96C6dV9FQvNoW2QQH3aJcB9J",
  "key40": "5bKFbPxqCWHBgZiMPTeCpMtxwvSFazd5UsB9zpN1uoVKWBtuFQGe2ZNPqwBrsYn6Vy3fzxUket4ySWGEmwrh7aAd",
  "key41": "5Gs8fEqnhaZMHzP7wpBuqDhYeRRPv6aY6AKLnPDb4Kpys2hq9dZSt9UoJKS6uAguZNivG9CUL1hbNfmzEFhX7Tuh",
  "key42": "2C93ZCMX1JDUqTVuLsGDjMo8U9kQVa2AYVSFtW274yDf7VzdQKapLTSQrEx8CMuP4BPRnWgpLRi2J78eNTATjUHe",
  "key43": "2xgEGjr3iyeXpYUe77TdERrzBAhMAHaThK5K3qUXSMz3ijmspVmi7xwXJieYJyAPs4dVvkpk2PJcuwX69JNE36Ji",
  "key44": "3pkjXwf45sVmTGNtpmAL1j5rFEJrMApBP8Ms635Do1quxBGR91BbsGBDRSBuMFdY3ozLfvLbLK8JE8bcKmhwUrSb",
  "key45": "5EjtPkqjAkNggwh8LZbF7yBChT6edWjNVQtt6u3juuLYWr3TrCkX3fy6S4AV2PY427cG1darFsUkRrgcADmsCH7s",
  "key46": "5As7vWxB4FhdVDuDcCoq7yzivWDHzEnhuTMxW8L23fMDUZuG4s2A2LjUAPEUsepDY8oxZXLqQa8jY31Pt6K4RyWc",
  "key47": "B6N4CNxEMFUZh571dZV7ENQszP54nM19QDgh5gj1Axv5Q5Z7oQVpYxaWZKcv5yc7zD1dZkHQA8RwuSFU6QHZKvy",
  "key48": "j7bfN7pksc3VnejwWj8sXSmgtcuqwZY4SvoNQKSwQuPVhqkt6TCpfPs4TjN2F22rfYwoWajaGa1cE1fMm6fcfFj",
  "key49": "24HgWsP9DP4pLYWNCco6jToGWCZXerAhFPaTA3BxaL94p2LZFCjfsEdgrVSLJm3isFYzdyTYcZaJSoEPNs2fiNAw"
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
