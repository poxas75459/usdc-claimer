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
    "WATEW4X9D99sKioicc7hiX8EjxDfMrbQ7vnsnCJntfU8ENoRyzc29RUyyHzf8ixCPL7QgktdnNndPAAGbQSfbY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kr5mo2y9BmPc8hiYGE1PtCUuacgWW9VZm9hWvSQdDLVe7fokEHcf8am3g4qELWsxYrn62TTvNsR9RpgjZBLmu87",
  "key1": "3juvohoVNji1MYRKahXCCokFGzAc2YFmr5XTqUKjBVPzuH3DhsBcpCSSb96hz1G29PPwKrURKEBy1hpLEp1D8Aur",
  "key2": "ubrruYNsaLxnUESw7v6uL9DyrAegATdtK2wkg4drzPkj9YMXRYzMXhHfRXyAqJt6hFjbUT7MBSgS1c8CJUehVpj",
  "key3": "g7HTCwiEtg87aeSwJ7TJ4Zc5VSdbRowSFRH8NqLNfDGtkgHgzTivPwHwNFA8Bhb4bKaxMoVALjEKVsSgnzoivXP",
  "key4": "bHw72ZzZaAXVryuVj5c7MHw7y8sprqWJ1mUH9qd2DyHuqYKVvDC9U3ibCEdCcnNek8c1rYYP6LcxBEapjSBeNen",
  "key5": "276g5ziKpVxEj9YBNC5gKJmM2Fjf83vRHxvuSNPRisCgUndutzRiuiCZnHAcYnToxWNcmFa4rwmoiNU9qQ7ZjxkE",
  "key6": "3h6PgW6qGoaeMoxtveh8AhHQKABGmuZ59hUcQFkhwNjimxnPkt8SeyXkGNoZhdy6MkqdGrbkLmsdrVmsGzFGrAoS",
  "key7": "4UZ5nLJQMyUMEuwbwYUfeJi9rmqmR1m22wQ8sW9D7SdA2nMKhw5QvRBS7y7vm8c8aFZrWfYHXtr5mGAgrhbk5xYd",
  "key8": "4iRXGoANyZBXXrj7QaKLYuiDUtMc5aHLwJrCFufos9zfCig6SdxhEXbVCSs5Rqiui5dFmAS9RR7qbfHuRLtBGuMP",
  "key9": "4yXLg3s9tbyitg9aMr9eTozVkNnaiRbDuYvCf2cFHPrZNfocKA5KncAiJ6amjCQprJdajfW2y3oH6WxyotMFUjRD",
  "key10": "24EhPUhYbPfSyQ4XuL7JxQHU9aJZtHR7pr5wFQbaqCkmVrdWJw2PF1SHNvzXJaAimEWsR16HGfWPu3pKF2s54kcQ",
  "key11": "58WubA9UBwYq7tBG6GoYFE45FSs1zQx1fVMicMMq7ySEk1TZ7Xju2SMNMPcKFAdD9UgLxXqPLwLd5Jx3pXya9wra",
  "key12": "4M6vezPtXaaEj8iHEWQMmWng41AsxR63eH9nBHG1hKerjG3gcUhBshRcfBA6iFQMbAu7GWAMnJW4eCk6d996PRYn",
  "key13": "4CbUPcEe7Nqsa2RhsPiMjZapPtgaymJZyGUDymiVsYSN9r1AxA7uKivD4SYFD7VQ3Q3eHEMGASLnt5Qjc8ecXSzr",
  "key14": "44yqNMBKsy5uBzPpgzcs4vM5NnxT2uTtowvxEuWoLV1wSNfwC6STAP8eP9FPGLoH5PbubfXdFUfj742pxXXaPTiT",
  "key15": "5bkPkfA9nYPX9sdMVQU7GvmR4QwKGksWtryUVv7qX62HqCCi3sKYNmyZnnez2jbLPhjQbzrtVksGqHNQQDVJBsqP",
  "key16": "4sSD5rpkFzVGTBA4YXP8h9yKMD49gnk8Y3aqaYdXVPN3bBhiCssHZrTCrGj8j5NRvZRxmDtwHNwVo26HM1r394BD",
  "key17": "3RRyvj6HgCCX7PeVVKQF1TftZU9n5K8DuMGWGGpT3DjfCBXzN662dBud6RtanFXD1qKajcMSDAqaX9Aj6JkkLcNB",
  "key18": "5zAW4qaQoSr9FFSn68rBZsRP6KKKVVuVEgFoLAr1s7mbGHUwKge1x1QtmvSMG2MQQEwacFoG6L7vGyQewuXYhavV",
  "key19": "37JMSZYrr8BCH45RnHCgqRPuUXfBpZabkkb8MFMvMEPZQK8wTxYQCoq9FWTNfUsXe1WAEZP5serhEsLMzFh2Wnoy",
  "key20": "5duHzpcKVX7BZcaHzyPYz8tnCjcehicxhaA989yLLsrJgY1hJjpkdnRh8VkK7d3TMAJsAgZYpGvgBVnG2NBLv6Ey",
  "key21": "3jddqgrPUPLNMe5UYd9JBpxKJiUWUzp9WvuBADHbqNgB3WkxhAH4oH5awkxhMKcfX7dCh5Kw7oU8b7JiJaEj4jhN",
  "key22": "2W6K7GNFNeGS5wxjtmyvNfCwvENsFPyratkzRtnmvKRruYWR3pTqD4WYRJCqDT3XiMUmmTj5ekhwwqRvHNfdR7iJ",
  "key23": "vB6HxFUufTB9oPRRWt6XeLQxo7CtHNUXNonu6vq8BgSZH5anNpzmfAgKpGBMiMtkQ61Kf9sgpnXL2NiWgSp7xwc",
  "key24": "3ct9DXRdVXTTReGaewASN411C49t4DnkwygaHpgndN9ENY2YAtbPYa94foryAgCp2ZWkMV27bX6vL7Y4y1RTxpAF",
  "key25": "5Z61AWzW2eWMPh4coGGzpWpV42dyc2sFJ9BoNKiENMFejQJPNt53LwdMpKgT6hHX7WQB37DUdFv7Th5FY1N2HgVs",
  "key26": "3PCazXi4KwASHzR66okcgpW7dU57y2hCB6VCfmc6ftcmWe2ACbDRs9grErxSbqufqzwV15npR73TFfvdRadYgJXi",
  "key27": "32R9akwZLUph2Y8AigCKvFSLTM7zcBefM7RqiaU1LeQnRsNc9ssCW7AuMJpthWtCAjywspaR1cHSH79dcWwZ1tXB",
  "key28": "22Cb4ZctVtugJaCnkXRh1se4AjFwzJmZxFC8KFaDJauarhkZxaX7CqyCQWNYLJnCybmFkvXKiyDcTSm7GBSTrnqg",
  "key29": "38eiUtYSswJg3ErSnW49c2twzodFGuVBi9SZ2RZFau8fCzvs5VHtQ2TGL47Ts15QRdD2aU8TcNgvoGXJF9WzRiJU",
  "key30": "66DCHiW2AfzgdS861ZkP6ufqvBYsu2qNyXUnaYWf6Qde74HKWj6VXaQHc6DKJtioz8u7jptuGB1jacVDvdPb1sLh",
  "key31": "326ggULzHdvi5Z9ByaB5xKovtCp5ZPqxkjG7JAeQHvkmttQ55vM38MNz8zhfzjFKgQSBAc1zM7RjiM5xNjeV9sV9",
  "key32": "5pPQKhwUXLdwTKJR9zDsFvWSaUBvmcEp3KoEk2RBceRx4iwJTME1qXXgQSHB5Geq1LZDk4Wr8F3stckJ6zwBohKA",
  "key33": "3nmtMa6MWm1XqaFYf8Aj4BVFCG6Bn5BuBvHVGZXzmUdPvQayjYPRknburA2oCWohp2uQcbyspFy4cYJVd3PhqxrV",
  "key34": "4Gzo3THacGPYo5AM13o8jgxiYE2Mra7oUe4StYLrEmUVh9YGVMPyvW23UrM1cysQTbjbunxjQzU8ZcH9sxe9TgfZ",
  "key35": "3G8KTSZ24V578rcptGXb9xYiGJA2NfXbQCFt8qAJS3PsRXTGXu3B5JJ55dHb6bbb8Kxmv8AZFtuiaKWhzQR4qvJR",
  "key36": "5RignrjgKDk2iBeG6E3bKnFuxDtoHgqyxX2FfbZSam5CBgsmrYpncdmrcq6X97KALF1tJVTNGnSG53VGkHh6s2j7",
  "key37": "gJbZJWVMp9Pz239uuP2oyZXpSH2RGvs9hD954FNmABVS2ZcSCqgUvYXLj7ter9uikzkuwCJXL48Q5vBAeTTBexT",
  "key38": "nHmhSUfBVLRH2BMkwE8JjFxyYebvHjPiF6NNrDw31rHmZY2UZk4qEvSbE7kLa6KQKFR9Ugy52RepCsBkvNUh3rs",
  "key39": "4uRWmWtbEZRZBUTmHToLiLfdHmo2YESKm1kZDr9gf7ZqfAARtUawxWJx3MyGzZydaJgtL2rc86eBzrsPEcteELf4",
  "key40": "4i7gnUv4yWn659ma4Ayw4FuWMbyyU82UDkEMUsLvW3z7r5MP7HodgHK4aHjJVezuvQVK7vhV6ma4DwgyR4fTfSC6",
  "key41": "49FM9S7ZkSwGGVG4pjB4RPP66hg8FZSScHmWhkt28F1ojnNmQbAAnQZ4qg44gRDw6CuBfgLJcuz7QVoDhm56AU8F",
  "key42": "2L6faH4CAXVRgz6P8N4LXxUrG3N1HWLv2gJovys1DJG3c5XaHD9JRZ1Bjyzj1ZgqFaXNYazYQqFhs5N2QMuxecij",
  "key43": "2gUYj1nE7DnxiPt1nxxJYKwJLtdeWJagd4pEUsot6Zkzj2oUnagLY8R9YC4zfseLpeY2VkBEtGxWPzpEUSxH1CqK",
  "key44": "4Eee5kCJeFJLoxumHgFQrj3rsyxG6uYyRKzu475KzCBu7eyLBSK62VjYkJZ6Hs6YZYzMbTwFs45nZzqPm2GKwLwC",
  "key45": "gZMy7zFCSdWAwbsU9EDdAELNbPkQLS9VpZikvr8om3425evq2S5b7xSiaATgngAqPytRVKPBkEo3NrLrNthJrFq",
  "key46": "2omj3SYfg3JTSyejLHdeayB667CRGMX7Z7hapwafBsHDbF8NrSdPxJc7BYjbJGWGwsjv7tUcU7CD7u1VDwGHVyTe",
  "key47": "4QtwXWUAJLaafrMhm4gmdT9EpzfcNSbzd6eGWRPqm68g1qbAKqsZov4cR8gT8FesREL6tygjk5Ks2M1tnrCJx8yv",
  "key48": "2A27YUVk62U2MtTw1dZ1eTLW3Stiq6RDS3hYNoa37uS3JBhVb1XdoPKTZLrs7ngLK4yPX9Z1zRtkSJ3dei5xwApZ",
  "key49": "5k1A6uKFPKstVUJX4uxVwJp51c1uJ6w2mVFmb1TGEGidv2oc8vFGZsQvqWrt6BmWvFZQe1qh41ecrbooNRKzfLUt"
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
