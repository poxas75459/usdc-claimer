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
    "tUfkjzHM5cooPsWCTxqzbNHLWnxDrHZg5FAxfws8zHbqDZ3WVWVVnXoPUNbFqtsNdWMqcVk6jLgSgdphtzHgtF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CHwJDhywXm9S8BLZ3j9XrYfhp4iiMSVV7PPzsmmWgHzbii8eRh7wBVGL1CFE5VxPkPf9A4SVL5uVbgmNiESXXd3",
  "key1": "TCziPHgM7nJCrUTjRrhfmT2Sf9kU8WTX2YZc2uFCy47HhJqUVke4UB3cx6fxVTkCeEKipQ1ANBL3JQeRco1vxgu",
  "key2": "2rxBvHuXjgNs9XkiAiPPiy9h8qRymvPP2REipPYt5rCSqqJQHTuU74SC1HcY3KhLuu9HWGR9C4LS35NvDsYNkuGG",
  "key3": "2NB8jEbzhAHvVKcFfGKGashDVCJ2bt8QYriRkJ1P9P7x8ds8VCpdRVs54rhVhT53PRzV9yyD2wXCoxZJuqRkB4v",
  "key4": "3DYdF5NKfpExXGtDbbHQovRJiwE7UcapynTV551s47R9h5Gi9RvxmE8qJNwseqeDnTXVAVg1aoNdP1mktEQs3iUd",
  "key5": "2jqbgDR1sXpfGec4dUFW8FobNgKWAaHn7KfuuUFaVdEnp5hhTu1cdWDUo1wKQUWDo1wGMSRNKrgxKwq1jb8Hiby6",
  "key6": "3Zc7adds3R2HSQ2FU7JFc5AsJhnJTqhZvAtPZUNEkZq9LDVyaCxBoSsUKJZjiMkeobcsrbhSnQqBNVnqXghjD2pM",
  "key7": "zDDnj7i3pYm7u8vGRnVinv1UMLWDYm9cAWwx1VTiVdHZd5rDHmLGihsSjZtpGESNHNAHSLwSJhgoX9boHD15m37",
  "key8": "BQj35goESsYXeyhiNdHEVFyVLN8odciTesaShzCt4ALkLuVUNxvefLN6ghuSaosneM6ZryaJ5ZKn6377GPkT1R5",
  "key9": "4FZBCPz8xzZTrozPfFBgax9PPEC34vTd1ksWDmPvmBHxWkTWtKdWAUSRRFtkcXE3zPWANZhJXkHmo7M49rtLKgLz",
  "key10": "2f3AZcLwcwNXiXBoLWTBQNbLfE1cTyZMnAjTTBEoXSqPWKuVEK2EDrDAwcmhmhdLGDEmQ3yfAjUsKuP6KrmsBf2b",
  "key11": "2Wq6nJUQpkJGwuRtEHRRYKbgTW8S5vYyjAAumHSzm2ETmoRAfKA7jLqKmpHRQRFUzKEh4fxKJT8SVYUP6u3FsEYx",
  "key12": "2MmAyMVWnaHdd2saWTZbB3JMGEcEkehrEVWL14WfP4ujokxryd7Dot278J5eW5QYqyAyni3q6mRD3qkJdB1Q2jUG",
  "key13": "2oYRmnmoEyBGJnMJZ4xLpjTgUMPko2RqTvNcb3Ga31E5a9ARXt18PXKXTcnGPZnxaKyh9CF4M4fvAeuCL6PVjT6w",
  "key14": "4JhVsnSHWdAC9xxpQAtsmAA1NRmzr7TZWCJRzTTXwtpcED5cS761SXoFrqn7FnHFvT5hdGyvaG9G6WLtVXVq7JYU",
  "key15": "cv4sC34FhhFuFSdg4JYibFcDpgvN1QyMtx1CN473YdYFj23kHnX36rmqq4GfUZtmGPpGWBifNJ2jEZ11iaSTsUe",
  "key16": "4DE5D1cFCgye6LNwiKEmamvfdNwJEXHezw4vHyYVCriHGjvziqRyvQ8Qj3y9wySNJkJW1ibUqyXjnvUsmcQirzXt",
  "key17": "3uj1VucdXUns2Hj7aghuD6G5VqxuzTc2SGxw3uvAjia7Q36gzbvVA2Lh1KNCx6hsAn4GbEJ3PW42PkNnWi3nSXAz",
  "key18": "22uiweWS7GHwCMchSPkv8vRtsevPr2VG2uRQEfaBGGdLjmPNcjYpNS4x2egQAfNEL21Ujp4d7MK2UDYzeAsAwJAB",
  "key19": "33ThSrLgc3hxngXfuWvzH7arFxznBXKhPPjSt3oWkmrGr4yMMzCkDJWKddNcTgUQxHFT4NqcRm1KsNvPkiSwNtKe",
  "key20": "4B9uTh2qRej38WBxziE4yRarBLrCGFrD4Zwbo1msk3H1q9pHgN8BguENvcL72dnqEc4P775Vr69ibQuMD6bvAxuw",
  "key21": "547aqV5QwkX55bgnTkFxjxhD41Wym1PtBjddKs4s38zLabvAXypt66qNvLgvjjMMmHZz5k1R51teegnE1uY4Yc8b",
  "key22": "jT74AegBxN9ffBRmHztymjUNitF5g2j8nk6LGuhJEPw9jj8jMmWTMdfw13V9q7iRHEzakJRUTyKPgH3SA5QMSCE",
  "key23": "2GEzvi1ax3FWY2xmxwJNiE2s58Gkgx9xigzXXiV5QGLt5ugQeBdpsqQVXRSAqf4eQ6gw7hwyESB6jdPyuHv2m2sx",
  "key24": "2aJkA1Qwn3P9GFXFzxxcbonKh5b1Gn7TZfUmjwwSABHgC7YPZP6fJRo3K8xrQ46PPKknmCcS5d2p3jVRfP2q6HqY",
  "key25": "DTbZDqypJptZA4JbBswKJc6aWHQdWGkZAD6rmVJ25iWVZJFYvhGcXmZzjd4JBiSeHg6BkCiHoW4fRVQMaqAvpTq",
  "key26": "2RyVFPSgUpXi3ekL2wSK3tK2YSH12N3cDfs7N7XLyABfkbTD4myZDTr75dnUX1vzx8wiRyWYBcvLrQGXMnzfec2D",
  "key27": "2zzfxfNEXFzqvcu4ReZEwbRcDmmYE92WVhaj7k6UjR3ySmwtkfsNddwVCEUPjJKHPaYYpDWMQ5R9JQXSYuNfrPqA",
  "key28": "2zzoUSPRPmuX8Ngh8jRPwtbLAVjq7XbCkYFUJp7crpQLurjbYcY8D8CfKU6QFWSfK4yZ9FAAGnwWvta499t2Qwty",
  "key29": "26hXnC3ur7xTGrVHkEQV3EcJfT3Kcyrf8tqJh72a8Whr7uEu6grn8PqqwgyZozM2zyQCFseE8Bhe6uBRgqxciqxB",
  "key30": "4YkdwpTZF8XchqPuzJ3jaxUX3az7WeFBieYRChqov93NXGtvqyvDCHudvjEgVXcDPNu3SWHQB8bewrez7BCDniWp",
  "key31": "2rNTxHQGueX4aNxfpscAhTpJDdHSJBWBCC9teGhtfbrenZvafr7DRGpYxRHoHXgpLxk4KzvWGoSLZXe1Aytd81v9",
  "key32": "4KmHoRQam1KMtjMvTv2CobexMT86t2yhyYpBkzhinZme3dTVLmFffunx2ZPSHAmg2hTY9JHXUG1PKGPhy5EKgSpH",
  "key33": "2EtgCXKdQevuZ8NCR15sniTWqpMhmAiBr27QQkWz2DeLs1HFYjnmBRX7fba4DRogwUK5gdFLbBDjTL7uvR3xvmRQ",
  "key34": "4t7JxEkMfDRSN9N7m69RegcZuKyuCRqKUYsWUNMtGuMmKFyPtya6gr2KvUGH54s26DHfk7KLvzKGpn6MRBSa9DrV",
  "key35": "BxKQwsWN7usCLHBYRuKr44gcydXM1PUtKLeEYjgg313GoWtWudXq62fddUzaJGtTZXckXSMPfbtuHhdzgyy36Ao",
  "key36": "3VrYX1c3jTLQszUWqFXq1i4Rp2PpF4uwj5JhYL43B9ZMuuKBG185RUHnNRrAsiuckW6Cy21KPQr6kZwY2ABVQdMf",
  "key37": "2FJWXjh75zfG8Km8pqxaUGuMo9WXdKNau9XjPrZnWnhc46C4yLfhbFkViQNMhbfY1eUqPpGNYtqszdiWFpxbUNFk",
  "key38": "3Epqxw9jqEqzYDF5JafQgY1n3MKuzkcudQ2JomQa9Y4ALuHJpNLxnW2L6WaB1f1XAepdf3ir5rpXiCnbB1tKA1dv",
  "key39": "43bvMFQ45jMX9rYREujuBzHucdxNUAqzHqhy8TkuoLZVJQnrEE5JMbN6BvuvFLkmmyaqMn5sYazrYhEpzhMJLTrS",
  "key40": "31wvtY6Zob7CNgoLmhMQbS9qJNugSx1BvZvYG44zn73HQr6nWkKsXPLP4n1XB42BPux5rNkdcti8aHJKRB1RipoU",
  "key41": "4AxYDLf5pG5UgLHme7hvgN1grSW45iZ3beC4mKGyZnTcyeyMHZSJAKJ5yogyhCRWFcqG6yu2jUcG3own7kFrdAnY",
  "key42": "5dC6hkCBwmyJXEo2ZYRVkDpvat1px4Wrkfokvs2mMCGKkSLpinaDgPue38pxx31KZNZv7wu7tzvQ7xbm4jrP8CQB",
  "key43": "4ugVhYwayA3YwXUdPgV32Lxm95ezg4wE1puRytADJ8Fgjza1tRFeW2KtmiY3Jr6rN4aXHK2PTYq3r7T9qe6yKg4k",
  "key44": "5RweX2PmQFk72oxPoi88SQT94F8UNQqmtppUz6EmBdtuzMX6rQb4QmPeWnQyNYFCnbiuj8ZAQbV1yNvzTfkw7x38",
  "key45": "4eZbX7YV4g65h7eudZxtf8XbmdJ6JkHx1qqBDTRv7TrXdG9GrN7FZvqQw1C6JL5QwdAVCQpUqB4L7d9xqDdXzX2W",
  "key46": "5HP5YjSpDB3JddLrfgNLjc8apkthm2bJfEZift5s7iH9yeJL6gCFuHJ2bTfFFfeKUNo5caLN5963K9EVDKDAXwBD"
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
