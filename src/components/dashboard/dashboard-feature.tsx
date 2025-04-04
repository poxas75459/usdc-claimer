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
    "3Ybnv9cFmLCt5AZkNK14TYsEgoCjNGgWrvY18L5e3L2TvKXhCqswbjRK32bPctazVDxPsXhHM2LmCGPFLCTDAeVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5usR3vjZ698rpp6c2BAe9LE9ubXtkE1tRQZLqQ2VhyPe9TNBZJfTYSpd7Zf3x2JtucbSDkzpowEk6kguJieuujdT",
  "key1": "2DgZYWqAMjkcSCtiz2RFnH4YBdooKp1JvcAgyhzTkk62rEiQrnu8PvCnxJDPHfBctHf9RfTp38pVdnrw3DkZ8PzP",
  "key2": "5zF7AdtD2krLabh6pJX54cA4VZXFw5ZPCEkXzAMfMjKU6K775zoJkqTvKKc8f5Greu65YZhm2saiNaKByw2JAFiU",
  "key3": "4bVcdzvR29uJvxzsUhMp2wignepxvL5QvsW97hV6zGWnUXEvVeacgWppgAomLHASKp1QutzhzpP2NSgaXSErLt4E",
  "key4": "5AHFmJG4EgPKhgi8ehkTBJMfhV8JpegYwCRAtDDboFv5nWjysTnsq1YoGwSc8bM71MSy2tbi4f3Q46PzNTJSdz94",
  "key5": "4fGuZ5xB6oAYA18c6L4jxnr3RS6e5PC6gD4MKaDQrqhbaSG5VDznYVZGBF7W4nJ66zcrASnoXcqXcs5tGRXHt4fN",
  "key6": "3h52yxpMh7uvGtgGm2k8oxwt1AYjjhJJ654aGnZ13qHczd1mmE5iyDpR1p4qxKe1PGjBLVhXC76aNnKu6DYRawSP",
  "key7": "jkTWK5CS4GsjDvEAftxhnHxPCrdH3vqHzeQ6s8F8hr774WRjSqCBf9CCMCRhusFpchBbbMJK77mLHy1vcvhMnzL",
  "key8": "5eGkYZGUNDZKC9N7d35exdhdnZebRVisBUynxrGBsMj6dXJFNv9rgrYGbiWCG6xfC1NGPyuhobGLHtmMjyACtktD",
  "key9": "5agD9Y1ZLxuzke2Koj61ED74C8HHRwLGtnLhPvLXPTeW1Kx2PxShWmXVxNGeZP9DjcF4Stp6UnbtY386UWcykfLa",
  "key10": "59TRCWVQdYm1YA2BcLm1ttYUQpBo74bscrNGDuKd7RiR4VqtRqsuPk6w5aLx8XQTqsnLcxM4iLN1b6c9t9Ew3oHU",
  "key11": "5HQZTogq39uqNFpf6sHQi2mNzqZdJdhSSKL9xo4j7ZWLw4hSGpeu1zMfnQMt6BaGo7j1gKSSza3oyUiTUb1BV2uC",
  "key12": "9qY5bFT1FtHKHXgLtinr3HfkrpXKMet1rTjTVmGrCTJrT7QUyvoQewaNbvxorRVdBjusHDAi3s1nZMduyBUR4kR",
  "key13": "2rQdEdJ7H39axKMHRGRiT8fen6eBViiFkBYQGDUaKrKnamqpr7fYwZycLtRZ1QsPi37mYe7r5UYzHdfrWy2S918m",
  "key14": "52uSndA9Zmcg6DyzDcteBtSGkntVUZU9D6NSaMqos6k1RNVxJQ2HA6Lpi4ssZZTkvUSkaWfaGEQdM5mXS9Z4cdf6",
  "key15": "45jJUHxn4HMuHw7V8xwXWnTZZarA9KyYaBayzAmVmu17qqDA4BKg5hK3qzsGDi5y1BpWUxBuz1VNVkydEYnxoK4s",
  "key16": "Amo9EfQ6sMvDExGMq3EnrNtDxHKewamh1aPuKFoheZMHTrv2bzyZn9zYXfHbqNTRSHxexgibypQ9Ee8KTdzFHFK",
  "key17": "kw22MuhCGQyX99QyK1zVqSutSHyAHSBo9nKUY1iipoUbEBM6FXF6wB37A1cRGvsXxnpsoVz5PiXnArP1hzF28pZ",
  "key18": "29XJ21GfBs7vKnLw9YPmjLXuGDbFYu7RPuydMMnJyTPaSDwGwtz8brL2WedxMvtFSqhH8MK3Qg5ZRVwA9gpgEH7j",
  "key19": "reAvUWaWoBCpFr3magNSBEim3Ks6XyeVJFdepkCDEyyGb2WYoN3rQzY3nEJD8NJMfrA5HCmkfKaEq9VRrA4n3ru",
  "key20": "427kAf6n9n3BtpoqJBpU61HWBXqw1nhkct4rr6DEBYmjnywn5nnrxr1CeypGH2AkL7sgoNaDBDtEJFph9afwBpnS",
  "key21": "sqFjQ4A1hcQn93H46pLhuh1ea5q1Zj3fMqan4rZgqcHKexKfZLqYAEUCLSvUVCKKpY1GFQVbVkseMy7ES9cJmMA",
  "key22": "47yF7fZ8qRsSwXAmLUryZzNCgUdc9EyJTuaSeAdtKSDYdimUtAAxVubyjZwY4S6jGznEyTNq7A79Kea9sSTky9ND",
  "key23": "64nv82CJSJLPfoHE1JtLm2FAqJRpmgzNQTF3xfoVJyXsgAxUAqRDdrcG1dXXWP5PmTrFSNsEGJroAH513ntYuoAZ",
  "key24": "3RuWGDdyWZJynktLzQopaYXg8XMPhKRFAqSUmj56Z7aSpTDURL4eaqcuqUDfZwVzVdxJjcRvhKuBeMDtD8yiaque",
  "key25": "3vzX8QocSMrHZTfmRJVf5Z5ZgMzyR5MX8pD1Jdwx7H79sAjYKDgs63xipQamk6pvKrLgeEgx9t5SDjsRLe5irfKT",
  "key26": "3fr7pBhZrvD2jMXEHbu1pE5N2GqMWVvrCDbWNxnanBc2pMH6KNFFxfcsy8zmrwXD3rVHbja8xQjivHhTjaWhanQA",
  "key27": "4pnwgqcj8xWkTJZhbxCnC6oY1Rznt86xxJCrCpiVR81pqVKu2ry9XwH1vXXhoUfYYRZ7zUKHX7ZDyE2b8hCB4eT5",
  "key28": "5GnJhfBu59B5qLFkWvRiy9vNSdcMh6rQAcQSHVk6FzyUGeVF8fxTq2fe9Apnzi3UPWefMWiDZ5Lqk2Te594txPwx",
  "key29": "vd3YBN1q8phdZpYT6DRax2hiEr7QkSAZC1pHmibFn1hpdmv4vPKxr1mbBMX8NncJLK5fqTj8v1vjAsyEBCvrfcS",
  "key30": "5Dr6VGCC9HRx6KwczVVSJUr8HcJETKDMtMR9CLMD3Vm3FFg6dETwR9XuDwGDMP1aACijsBwsgFBAVF2hty1qELMT",
  "key31": "5EmL1iKj8uZUyy3sRmuiic8swQtjNwRUS68yvYXDj9y5zVv3tzJxSkuaGBncRcWfzmN7mZNPEcDPSZLKwYmRL7Ww",
  "key32": "yPkukwnv9FXD5Tjk193Pnqv9wWRTaNZTPQDeCFEMhUbjMhWE4a7wR9qndgBi1HVosH2HVooNuQf9X8uhtNArDTU",
  "key33": "RD9GcWeYHpLMUZPctmkpALKNS7mp3Jz1bFsJ5tGSeXatoHro6r9cb7htrzMDCqZehQ3ctqtPt7HaW7txPcJ7yd4",
  "key34": "2HvQurFUMryoHqcMpgstWXSUvy8SBizFdT2cjPf1Uit3Ac7Rjh2trQbYm3pXwPyAMMNYdFXkM5m9n4Bam3WwXY1H",
  "key35": "52kA7PDj6n3D3xGE8rqVpucB3fsyhyUMxhoKhUWv8T2wBGgJ5RgDRAxyAaEWM4QM8UcwfAzDq16gg25QE8PqkPdD",
  "key36": "49dCVsX36owX1x8JFwCPEefGJtK39eyw9Z4DkWvrRsn6Ct7Z1Z8G5nqhbBUyijfRxRTxZXu1i8WsF4Y5vusNNNj1",
  "key37": "2v4u9LUDF3sAA9SKjNtDZGzoumjB4yCZ4CCLGNY5QRUHxd1zc2iCjxRQpSDcB6Y2Wvmn9dJkLvFqfUG5fLs5WKc7",
  "key38": "2pLLEXQpQgKBCXSNmCu679VsMjWaKrYafCz32JPa8uCjGmFmN14cfXtXSMFDCAF9uodqt9pa8rWBikZ8fcdZBVfh",
  "key39": "5vi8St2abdhgJNpNzmHgRjDyWnX8MAB2s1CWVQ15KJZbxkH5eTMdvwaWwSGqapZcUdEFWzCuZZX7Jmztzp4VYCAK",
  "key40": "3XHAg5kd3Zwca5FnAt53aFwWrJnFBSudL3MLZ6MqXqm5JLmMee1VLzZMVfxw98qsEFrkxUEHgPMRUwVhezBfGxqi",
  "key41": "28ChgsiD6KyjdZ2rdDHmKFXJRoU1uxqpSbdUcJQpryyM3GUD8zkX68P3vrMkvF7bjY7KJZVGhGxpwwTAC87ehbnZ",
  "key42": "4h7CdQVM6uiANcvAjiPBWUZWibXWrK3CPtckCrzT3hQswCXQ87hp5PixjuLDup11mhNyhKkuUz1VH3ijESATbxu6",
  "key43": "3h5nN2wkAsaxn8isgcdkfoLh4tRcKmEwNQtpquyt7dzbRMpVEA956dyktiPiAuGe3eFaAeHryuvdPmDmXyd7dQRw",
  "key44": "5PahVBdfT6antJzs5qBUvrjA5A5iaevPkJ91bRQ1Ynf7mMFvaposeQ8hnUsTrd1m3qMRosa2Fp7BTuuE8XHVvCwB",
  "key45": "2Fu4mDEZNzAfJALFodxx4RWWoYiGc1BzqEbn4FiFwd8YYqbPcp5yKnpm9Fa2cCxXJciG3tG9RumxZWQMM1Sf7oWM",
  "key46": "64CVHefgTVLyfgmk3yzeTgjWzh7jCeZeagcfFdkFjNRrecR5VNeFebMLLDSj6YDB2LdFQc1sQHzmAr3oEfSgAWrQ",
  "key47": "3U4adJ2ECfQuumpxA2E9YnWQPZz3eVgf7DjTyYoAmhbLHjmFpNRjAoDZDq6LdhAmhPj2rU7L3bM5T73hEicjkjhr",
  "key48": "59LAMKExmQCnBdWLyiAVVytRgHzwA1Vtob8doQGJaPQyGZdrasuHAwvQMJAYbESvq4rwS71t8y5kRdUSEJWsaVgd",
  "key49": "4JND1f5BA4seXLY5wDUWwYiE5ecgPQrtU5Tmm7bXg5Q5KkMBb7u88fQSpSVeEv8HmsdMnf5QTMCJ2sqdX7ELDCyJ"
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
