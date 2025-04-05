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
    "4dShDwSk9TngmgMCahKFFTueGtkRZeC1CgrpegqCZ4DRzznad6ZcWo2W7S5tXwcL9BJPXhHPB9RY6bHf8iK9XUoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nAykXY22AypH2buNexT5bY6HpknZoVLbMuKVrLFfvK2embvqFmPFmbmPTBe5kEMbsum6HRLLHYqmrNznJm54TSx",
  "key1": "5rpqdVb8eg62hRjs1g63jfakShFpsigPLp3oroLzNtSzxbWrEf77A7QAn7GDHRZ2mrArZw7NU2Jz4rrUoV5737Hj",
  "key2": "3xf2vRokADe3YGfhTBkcEHz1zeJp6bZy6TTuwu9Nk8TNV4qkNUhRy46uPdPUWXZGdGfWk6jiTGnfLNYdFYjWZfQQ",
  "key3": "2EKfREJsP19MUy6iFzrXyH3tARaVnykRYYtVauqZ1dshY4cYArLWytBjPQfEwy5K6HxyKRAtPh9zCTWAC6yWjfBj",
  "key4": "3VFsYZ9SHGVZdT6uLP81mhnnZDqPgTRCBpKcVBmASmQ42VFmEe3kFXGMorMdMqU5A22GJYph3KrJSQiGfiphyqPd",
  "key5": "3s6RyuH8kXwf38ztMFWS2sqobPxX2sJT5RNqgeR8oFqiA5vhQGBsUQoaT6FQwrnpggutHsKyUWwLZunR4YwxEZid",
  "key6": "2YPcLN8qgyZdX2sdt1AZ2ZcaYzMP8vWgG7ShKKftZ7RCAvUm87mSJjj9gruHNuYC3j12MBAtoJArto6QPgAhV66a",
  "key7": "3JvW5RcyLaWAZkWxSD6RnHpUkT3XoeJ7pA2KUq8U43oFEPmToduVxonYqfYYK4n5eCAsLSY4SK2DvjHHSxxPUQmy",
  "key8": "3rzyFQeRPNCwKupXZ57FPQAowhcKmc2kPJH1t37H8e9vJbJgPocKghL4BmGdBvgWao1nP2nHfxA23E9e2tZfMKPg",
  "key9": "Z8b8MRoR1xuH7tuFRf9dSvu7A5Zk6hvHzktvxDbe6LHGqF9vLY6EcUDEJ5J9VXNSMSMAqNVvnWfzsPPRWAnYDmH",
  "key10": "444srPmR71M8LRCEZFCJgXLXLKGFNpCV1dLcTyraFVNGFgL1cMMPUsLKC7HEkY8jMhU6CigRCCLe3hL5fUrZWqWY",
  "key11": "5e5usWCYH7qvKBNwfDEvqEcTcekzxak7eGbt3DKQqc2j8auk4eymg5ji4RJ9s735JpYZDH3biCy7ufpLY3rkH24v",
  "key12": "MiW4jgyhbLAzorfPisF5mSt6zSBtTe19Wz9rpQnxqu2fHXTp4gkAa7DeyaS53jNk3BVLnM19Jt8azGwVYDC9t3T",
  "key13": "2hHXr7zLw6xzKQiLw74Zv79JQddoj8v1PYUbAReq4pun5Cbb1fTZoE5t1RLYhUjoBzZQxv2hq87FXHmcyJt7rGn",
  "key14": "3W7mJVBmLsD1P6294V9XzHUDa31RnBeDfX7eegz8W92jJ5xzoRu9f5xE1eb7Ccw9FtXfsFbuai9v7wPFwnFVCqHH",
  "key15": "5tpksUsTPMwooauV5nYJdsbNf13xAhXy8buHwpPe2rcPsZeP7p8xeKaX8TBVxbJ3TGTkAD8ZGZtNJweHXvBaeJxi",
  "key16": "5gsjsdN21LXQqH4Je17Woco234rsRXH8TxT1ytzbLjRNi9iNtPhokCgoNrLBe752hotcdr9bkAhYyjeDZzP5uoKN",
  "key17": "kf6wJVvKFahtm1MDF6UiEdh83jiFS2br7FEzZF9ZH33fD6q1HeWfLcRZS2pienNzwFYj1yEi3Qs41WPLhXkTE5o",
  "key18": "3GBMnjU9dwbJeBPaSVJyCYDyJ5Gg6W8icnvAgffXoaMm2hwqbK8qzKYoQENy6bt49XGsGrJEQk27da7NaXhHuVYk",
  "key19": "3ojnZHgeY1faTPGFsbvMCungYXWykpc3MUTA9k7pDCAeusd7q8ddQUeMnVicuHMZWDtViWbR9E5R6Ho1SkvbFFXr",
  "key20": "5RtjX151URjZEoupfvwCfJAdLUCYyF8MCtuhZnL2YaYKBTZyfMvLa4HHqByqNcPyfwu976acWoa4qkrU1uxPXTcP",
  "key21": "zoRx9n31PcRZyBctV89GEt1QfJeUrzAhkQa5nrcRX9GS4p93PDCsEVtX1rzSayi2a1TMTbErbauiWQ5zfGTPd18",
  "key22": "371V4mUTkFvr7ZT5r5eZuKhyVyK5KpGWkUcUXtoZtMp6ogjFx1y1frbs8qLjZVeV1rXRDdhib6W9pZdcuVQkZYWm",
  "key23": "2iG69bgQqwNZeCLH1hRadLVguwTGrZuu25dsR8Tpm5GCMEyM58c2fiHU1yth1zz74XC3SG85oHuLZvPmyVV4r8rg",
  "key24": "4i1R6ypHY65V63W3P8WVjasAxAQJ5Xr9Xupf4sEYDMHwcV2QZRZzjvEaUSXdzV7VFrVEfwTibHbnCAyA3nRtAC6A",
  "key25": "2om37TLSDDkhrN2kzZyrreRUKYfPeVhKPeooK6q4pt9ywCt6E15MV5TutyzC5hrCDBSzxbSjam5d6pEotepiBzgi",
  "key26": "37AEG46krVNPeYpzRZVqWsn3b8iaULJfbDH8oMa9s6Mw77kEVoiHdEQHMrAMb3RMiCXCiF5P9rjPxKkxFsf2wHuD",
  "key27": "21Z7i5UnNE17314K84TP5dKPgJMjGmRoBD2PFkZZsJqNF3dGjJrd31ScMMLRAFNUXsPvapLn7RXXjmNUqYmpvCZD",
  "key28": "3ns3CKqyKevW8eN2oCXdTwbAV313DuV1wQjBKXgYuJfk6JmdAy3dq7CvUSu6y5CbaUrMQt95PnRYW5GvqwGMakxW",
  "key29": "677fG4q3diiU8Upww2KqkDprxP7gwFK6FBmha8HoS3KAa6eKfHr2ZhViywKHZR6dNqVdpuYYv7VdrFfm2b9c4cmG",
  "key30": "PdBPpaP1urxRkp1uXAxWpDhoyWP1BBkp6BS3LGE8GUZyDAehwAvfVS2UK674Ae6RmcXht74h3pQjU6LM7HS4UAy",
  "key31": "2BA7daRbLob2HYzF2M8BtkQooR1paptLCBH9WY3QFqQ7SPwhhzjUSxAEpL32BxcUPuPZBbaRuVqnd2ZVGuLJ7d5e",
  "key32": "5FsYKnB2TzYzGAzvXM4fuFgRUVkqVmzk2EMr7qAW8Fr2Y5o6GZgfLgKpMqbjH5rpq7Whf8Wbvts4tcp3b7W1cDb",
  "key33": "2g1TzxYstp55bx56W8LaWrNZiD5N1Zd7aW1Z3cBPBQt5WSmKaafqcBbbqeMrtFLDsyea8noHp1Z8sZ9vTwEUUQHU",
  "key34": "4rrU3fZxSeREjJZLpStkF1kzuuJBeap74BedVm8WqQ1SNYfGKeU7zKj1hLFfHp1M1LHf44DyoS9WcVRU6Sz34sTD",
  "key35": "4M1fJxpRgvTdT6uKiXmCrTcWdmYUo2p2LGKYfkjJyxTUMQ6oH1zvig9mP238uuPHPpFBSBu495Zzjj73BSCPf595",
  "key36": "4cG6w1zYRbD4J6bsCJ8UYgHZCbH14jN5tZwCQcFyo1nTxTgTvfmEvUb6264buCXqetmuQRuRHADDsWmF8JAgDBEM",
  "key37": "Wnffrb2AtVv1efDL2YRoBGye1NxY7Fv8ELVRLt8o5CW8WdoeftPgEeX8iMYaFLvoJbSNqAhp4jh7w69csb5q8Vt",
  "key38": "4s12aCJt4XCurwZ7HSHKxyvyM46xh9pVG3kQQrAYw18SkjWR6nEED1JUM4QMhu1yPephCk8worXsVaQpKDf6Cxi1",
  "key39": "3w9pNd3WQP7SNMwcSQxkN85fiqeKWdUN9a1dshw1ixA7pUCJzi8XguBuM6zbaqfgEPZnnJqrJUXGBHyUyy7FKYNL",
  "key40": "2JmEgVvz9ScjmVpne3f4wxJbuTgszhxrjzkaziJo7mScasKamYQaPed22yPqzQDZGXJpuG45wpFkvk93fkDydNEr",
  "key41": "52biNzgqTMTVfWAri5JoKLfDPgWpBxcJ9SCGz7kVDxpurjASsdENEA2FdNUDCSB8sTvZPHqYSErdgqdr2F5ksoBY",
  "key42": "Bhtuf2Aa4ydWCYLTq1QRJJDuXPNDMvaycq6JPAqdpDQTvsvrygJMQmVPSPydPoiPtk8PJkp6BtbRnxsgckjWET6",
  "key43": "8wUcs3ZippTK9BVUuxNAKbKsaTQAbCkjThbmStDXPYePHrGMX3k2y93xpeuwfuUrwX3RsfrpHr6cy7wn2TnJmA3",
  "key44": "67JT1joiTSvFiEhXuaxc7bBmnLKwzurKJsncYxkszYdc6AGkF6tjrVE7Sc283BinGAktxCMY7jNJWMiNDofQDCkC",
  "key45": "4bP4JAwv3SthiKnm8CzuHms67TKyYUbscPKGxhxmsPdyisG1yDjs3DygGeJ3WtrUWV8Q5wqtrBE1AQVwwhKMTHLg",
  "key46": "2CJEV4Nn35VqokFG86ZttFM1fgFnDNuU527bZbdYF5dFDgkoqV1K966DUMrYKx4Do8ACTj6ooB6gJiLSv4BzKYdz",
  "key47": "3JUmks8rXPteCn2pCBg1zQMvLVoAuz9PW1LKCQebvLW6U8BkCzrmiwsHf5XeNak9Woz34RwEHVsZXqzG5v79pXbQ"
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
