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
    "3rmRizagMRujz8qT8QRyqdVPNFaTfxEFTdniAF9MX2hSMYKabRZP6XQBJ3A1Adini69cYjgbmN8cwapLbH3t2eeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i6iRMrmocpmQzjxkQvaRpD8wZ3HhLLE9CrLZp3aw5PzPXkf5WeDxCRn8tcsxkaH4gtc98wLENDJ87oU13UjZy4E",
  "key1": "25YmczSMQzwMSweVMDe2UG8dA7YPds6BBcrUfLsMeZ1pQg4XqeTF1EQWDPvovv4WYwb9fcAXM1WfBPbqcjNKD7kd",
  "key2": "fgtwsE1mhBNQ3RyRXCSyLk6YaY7nR7EFWBVvHqjdEvaBsVFT9iocfSBsegrdfUVYEyq3p3Aw3jMFC4accYWLTqz",
  "key3": "4cy9xgCrAhL5tKjnNmaMaaAo4dsqLe1qQs6SZvnHvCocjKUhDyxmeUsXnTmY4Z7765SJnTGh7YGj1oDp3Pmffg7g",
  "key4": "5c7VvVwgUfU19QTMwTKWWgLuXfSxzTPCsPrXvgWMpDtQ3vi7p6o3663A9Btv9BtXLK9F2aqSz1X2erA8ZwWHkDjZ",
  "key5": "4iR9wihVukeZe64heJ18ZGaWdRQHE5dy9xp31tSiEGoHhkaDSAafikcRM1WYBFx5AvhzNcsDt1bV9h3ENynoMptn",
  "key6": "3e1Y1QLQzLqxxyWYCMUMWUbPxnvYUQaBP5sznvYYtJFkJmri9CCfqxJBg1NgzaVjWkWzzyEa6idLq5gVKCLjTfsZ",
  "key7": "5c9ev7s5uE6BV2vwgykNzKEYr2HkGpmHFbaxyc8QL2w4afWf8p4Voo4RcekgJbBswigLHvY5H6S389toHgFUMRRw",
  "key8": "2q779VXbaqF9yVGPukhmpgF7pmtmrxJofzbj553B7X6iCfVrue5TLFoiZZgevaPUzdQkbBepYYzVHi6QoFHMfp8t",
  "key9": "5meibEDffpnKM85peShrwJwbb62brHNax4nyb7KLh9ZfM44jNHBF4qbjxFvLaGmmSKf1Bqtdbr8JcRcQFzsLevjU",
  "key10": "PkP6P1MVwGn6GqUKBoqv4rKTQrsdK4YhtnLD44Q1Aj38hn48nuqj3DZ5UvwbMMpUTahyUxnUe7a4vDhJzkmtMu4",
  "key11": "3VMtHNFh1rhZpNngryc6vUribitANaSrZrT1gJGqov8SBzTGkzHQWw1kkWLpPqYCuemDsANeqNXA47CwCsXZBMbF",
  "key12": "4ZU6erGKxEqAGdffgY597AXFSETZfNSuAV3crfT23DcbF6iBDVCYjG2oxzaHGDEnzupkEDHxe19T5iCDftY9m8aD",
  "key13": "5p7co8QZJG9y92zNd5c8V1SDx7jg6FyuBY697QujS7qxXRPxfH2Nm5tjutd1N8ncV8L5E12BpY1EDmGq9YVY1A2R",
  "key14": "5h6WFiSp62Wis4vGVWpMaaRVekUbX3kTmDG1xhX5ohstKScq9QrJ9ydpSaRveVs85Q9yAquBiEu4TtQ2K1nwNUof",
  "key15": "2feBzUfwNzESaStmCjnGHpPcFuVYUVVjvDkPHajccqwRpH5BUM9wjpxR6mrbGYahCJZrRd4fZwh5DJVuJUek2hZw",
  "key16": "3SNhPCtuNRz39Eae2V8xTrKT9UKfoytaVY4dz9iwki8S5zCP6LkDBBHeCiZjYpq6uX6bYtgwU2gMChuCyTuZGZo5",
  "key17": "5ActXyAnnfL4fk28YGT2Fu6z2fCv1WLLzP6cJiPY4sMY9iAPXdc69V4hP26Ri6sww77odsRJ2Rr6fhToPgSn62mW",
  "key18": "2zay1aMjB4nLVQvSVeyiV9JktZfJLTxyjmnos9YRgciQnZpBxGtA1GsYAgp1kXPWVVZL4Na9ZbgDRm1PXGs72ERs",
  "key19": "2QKCnaJn2KxpKWEDmaVwWCoagwdtbcv6tRNW3XBhp9j766CAUxAFwqaWye23XbHC5wUcx6aDqLwfRYhD6PALeiyt",
  "key20": "3GMBwXjeWh9Q6FuGxMgW4Mh2cBL8mtDieab2hVYEmNcxjwbpG6YyYtXqxTBU3EEfBsZM5mtZJ3LzNWXBhfAyJbZ2",
  "key21": "3kh4kRN2Ay2zsGNniAp2ZxSHjvtqV54rabKyJrhpJSEkNwaNBkTkjNi423FhQSnYEZU3FPfScngGEjythbWyQCiR",
  "key22": "3n4w8rfCxBU7vmrmE7nLMib17BY71gaQCvkLpSizAmB8xo2GexNErFGEtUY7f9b1CXgpVaT34U14UfmhT4CXziA4",
  "key23": "34Dxr3PQPmSADjsNNUU3fc5Lw9PMjEDUzsv9EX6f9dXp1DwFGu9iZs3dt3BrF775h5cGJyTPVfojmJbry3TXSbMg",
  "key24": "3ihNE32k2attqWBKgri11UzzYxcqZBVSbmsGWrzRJVtyuVZxAk7WEZVa9YGGJwGfRyerrh5mSV2rKT2MzWEvS4VB",
  "key25": "5xBYy38NNpAExZSfhsAqFj1t6MupKxbs1hfgvuqKXs12b22rqCsbVh5Uy17u8TUx6tiKPoyPM7T5CHnaGApkfbGy",
  "key26": "45KKg2hoxj894nvtMSjKLo3T2hFxNhNm7oD2wpwMsXHqSzMnN8gYyBKqr1v3zEe5uk7GWV7qQWfaKLiJEcEgkbfp",
  "key27": "mbg1vnYbSdUA9LJLef46nsze4QRZZDPNYJoAXCb5oafemLqMJuhszmnz13EjvmtZS6UHt4dYJ8YkPue8HJWzsgd",
  "key28": "pewCFz2yVZkL49WCqEvF3VzPB7S3BozqtRAEXcphjgqVWSeFwRMongrH9NmnEwbq5TvJ4CqwEJppaKaxB7VCbWD",
  "key29": "4p17jEEdWPFfyy5QmHSAS5hXVBqSFQ5kwKz2A7C47B2sFkWCjTPmLmvhVUEWAo7XZqvEmDPcVvME917YSrvJ3hL9",
  "key30": "3TsDw1aH2LLjr1kqGcot89ZCAk1isS4A7gAzzKS2b69nft9tPDjRUy5puRvViwFD7k8JxP9znFAX1G3MQbRnm3ZC",
  "key31": "5bSCaqYSEwhGCVrbXdghdG3i4hqMBcnmgdMzuC11LrJjULAe3zEmLN4h7MNZ29GXqEZKUPZe97fTskc6mebjKB9d",
  "key32": "2g3KrdsUJo94MssyBiXYDCThJz9a65MvEXkRM3KzxBsHVTMD7Vxu9jq6YCJirS5R8hK5jkccGaCad3gdbu4Aya9Q",
  "key33": "5BsQEtAFQxQFGBaH3fPny1AC1XVNsmH8jFe31FNYZese2LvssDrVmpsDVg6Ew1gqP8GoykZoKGFd9p4EtJQHoVpC",
  "key34": "4ScNBFvuLBNuzEdQcMqnNsT93AgTqY6zKbRSd38bygWzzVFFLQprGYjFYmkofNC6QsUNgaJSfKywctaA6o88TiV5",
  "key35": "46Fi4yXtW3u2UfggCmhksPLoz8LkvFRh8BeSbeXLQXCreF77UsjtMwjEWJ72MWVWREJnFi7Mf9oLA5PFy2YpRNco",
  "key36": "TaQ3x8MXiZjFcYZQHm9fDWDoJjbM59nzsHUAdcAkd718uHam8KpZ7WQ4RNagNWANan94D3VMrZiCb9Kwg15JEia",
  "key37": "a3DpcHu1YzrDVEYWkX9p2zN8DcMmYimiDsU7QMAy8hiDyJfb6jZYCkUzmse8dJcDrmivNc3QV4DotXzqmhWkifJ",
  "key38": "61V3u4AYZ22WubutTz8CWuRjpFiPHywNhdbtequE1tQQJi2sgrBjPEJ2NWKgjXJxjycv5GM2kVd37USjYt5474Dv",
  "key39": "4pzsq9SeEqsqVqmgSttWvt2C7cPZQ4FwxdoRer2ohuEQKJmzuAXkCJyr1LRemziknAEntXfqQ7Dp1qbjzQzmHW9r",
  "key40": "2AHMVHb1A5zqS1yAPYgUnqy76uJkVwjeVCTrRxPU41Lhz7jYvAxob3A5YcjQnwfADVgR4u4qVEzAjUS3LupQXx8W",
  "key41": "4MpJgUJtigBnBoAVGgHVxP8V2vZ4zRZX9XMEAyzuNbjMeGPGEN7bNk2zMr2WazgL8GM7S1TLck4AjaTTGR6bjYvX",
  "key42": "4mFTPyhQQwGdVjUfa1QT8jvsHwdYQkDFQxfZpFRVaxTsWSbFnk8HooCGAzYBNhbAdM8QqyWSh8xEbeeNFE3ejvwi",
  "key43": "4oRCmrhTAvxM4Mmag5YRvfFKyHm4zRx59MUEK5RLdimtsNR6R6rHho2Fr1HDRFmvkHZJBM9fQT51myCyDVU1P645",
  "key44": "3PfmVD7FhdUUpKRVFqTacBRY5H71oPkr42vTpAuqrWXZgUNfYWearVyrF9sncDmar2Wq6UEN18EkNcYvviRsSSzf",
  "key45": "457xbpYgPLP9VyEvwbKQBaZRNpDvepCCU9YEsx6U16ytLsQUQjmh8oHhrEn5KuGvBU4dwc6vgUzZqG9mUZRfn2me",
  "key46": "4KcLDZXDyPhBKCHEkSD5DrnjaxjNEt9drkAyCgcMdFNn8dHpxVBESTCCcrJuYYRsmz58tijQFHSw831awtZMQw3G",
  "key47": "TefN4fnFs6VNxSxX4RmSR1fxuekpfywJTPbbK8VM28nNdHzJ5RUnh91JAMSxbcrCxJt2Z5omk1bikHAVZ2f2AdW",
  "key48": "3GuQbzNqh5D7Wg7K9BmfCjgZPM46eujEpdYm8LGHsyagaHQDcBZN3MqJo9mJnN4SkddPuLoSRXa4hwXFCgUVobkK",
  "key49": "heiGfTCArL5UpZxvA4Z5wDxhph5zdoo5RP2RcJW5c5ZTaPuupoYcmncrDFPYE852SSR2A13MYESTL3gmKPpPoQn"
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
