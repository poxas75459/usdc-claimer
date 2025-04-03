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
    "21Lm2bFMU9BmmjoJkUVYsMGMFBUgy7hHhwrm2zuSj83tmQtrmJ69fPg9Qof3gNHPjeW7WiYWy74U6XZZXU5uZUaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XQTdbPS8qUCoonXRWRzkpfy9s6SakEMX6QFm6UhzvZnk14hhHw7JFZ7dE4ZByKGFzJoxh88WfbKRPHNbqUWUAca",
  "key1": "2ycknPg7JQFv8AJQGnLTHDVTwN3YGSqYFvrCipczuEsr5JUJwP5XaJZ9jvsVkMmYd7YWRmrrp37sGPd5tuiZ5QvD",
  "key2": "2Bsi7AbuCQk5wJSvwzWrbRwkQYcN2w2S59dZtCTC2bJgJW3Lz2kMPhJEhnpSZEUAZLGc1ysGXFzRZSVK84rmmuyX",
  "key3": "2b2DRqstuw8Bux1ZzszHA3cbemUacsQBJayLGuX1DtBkU7vmSEL1kZLPBgAftzj3uNi6W1SuRJk4UmxGWhdFAGUB",
  "key4": "5F7YEpDqHQYwRDb8AY62GB8TvBR1PvTKwPjdHMZRox6JCWMMw3SMVfhpvJfm7Jyhu6S5fYzK3ZBGHLGh3MHr9Uw1",
  "key5": "3UQSvDZ7hmWd5ED3o8BHGZw7RM5K49TLcirBaCvdY22xx65Y9voUdguDsUXv6MAjB3VEeqjF2vnmnNQ9D91DLEb1",
  "key6": "3gkh4gPNQZUDSCYCBM313CtiMU9uADNm8SRNfvnzLFGxsjVH6GrfAAXgPFV9rJYCeB2V5gDU4pY3EZaiMckXCEG4",
  "key7": "44XvuJpmravUAe2NjewUhtLDMp9XM5cjjAcHYnnPpaTdRAeYCjX1zALPxzCQxHYSrEKSXLbAQgZ5MBvmw1CPY6AA",
  "key8": "4itQAefiDL7vM2HmejF52CuBfPUUnmRvxXj84WntfWEAUMeaCGzM1Khemqe5UB2x3XTpZpShQXqSznRftWUV7U8S",
  "key9": "3dSkVearEz4PSSRentVSEVeCTYJmLmKeWdDsZLxXV41MJtuKvEUjCBzQUTXUqhwm3TG5p1RmWtVLf9oB2aDbC4u1",
  "key10": "2PeJefZEwxbuTGuN871zrNC3evG7TJUPvMYQFc2GLaTA3ZcWnR988nzSx6vfeePdCMvYgPYsTiQpyxW1w1xAzM27",
  "key11": "5if5aYcEMmshkV465AWdHTwJuQAiLyGeqLkQbhapd8ZxYeppPBRriY2bu6CJwsVvMLJhtAi5uw8vGXWnKtHrKJJz",
  "key12": "3k5n1m63DnyLyTnt9rdaawx5RnLHooctYeFykX671TsmU1v3HGPseL99rTyKjRq7a1mHcNVtFBFNDDwoTdVYMrzZ",
  "key13": "yjg9X8rzrr89MVDGTE5JRVLt6FZk63oA23PiiGnZzQcSnQXX6bjqyJFVfMNWiaeHJZtwfXqNdtXRWtG9etniviV",
  "key14": "2F7UMVmq7XZ3Hdn2DyKckhNbuXEM4zLDAJJno5TBMAGnAJ4ZTbXBnkFrmctaK6joqJHo5NkEFWj8kJAZG5D7x2wS",
  "key15": "5PXE29XEKx6aZxDa3cVyjXBwC1SmEWnsyC8bj3NggHsnfghmCp1QL64soSoFE4deTqUWbWzNK89DbsGbnqXb4PvN",
  "key16": "5ARiF2CVBR9GKhvdj7Y5PXooSt4jHLDtha3rmVjG2Af1KEBa7VqRh1PhaNQpjG9wVKNQceK4EQocF4wpPudWgQ9d",
  "key17": "Xm7FgjrwuhEw9Ejb3J4eYPNRC53QiYn5xDwwbjJMWYZTR683W47a9xoiK3sugvPBvrVNA8QSh8adQ3LooXUPvHE",
  "key18": "2kTMkradrvZ3FfZnwjBqegx8SaidhYFT3d8tELmhXcewUP6H4T9gLfvm1v6Qn6URLSS9rCySHW9iS9oRQmSRy94p",
  "key19": "fJB8gRWVPYE2YrTyT5k8U3wqxZtWJXefTfREsDUm5NtpqREQCXUQCeVXTMdUdznP98fLNsQ3RWBqFqPWP4Dj5mH",
  "key20": "27xNXKVo5JvPRH6PAK96PyK9f2GAw4GyK3q26V2zyWjSRELYWukbdgutPrKswUzQjKqX8yXY3TuaR7kvyB1v98hm",
  "key21": "3yUXzRNcstrPzowpKEUpLggkqkfreRFTYD8BZNx8JNQEtUsfZ4Mw7nwfFG7vDQAWWG6PDWNa8PrJY7RYHoTQryMH",
  "key22": "36Mue6J4WH3CUDq9FS6nFcnaSMXnsNzzPKk1oNfLrtnWP2eaZ6Pr6jVNVW8tinZaXDr7PYqU2FjyKci5yZir3XzT",
  "key23": "2VUFczRdhg2SYsa5DbpFZSQeF8FLn9kTaavJk3Rw8qFGne8LLGWx7P9YAxhkUhy5R8Co17P9UeDGVRc3TnisZBNG",
  "key24": "3KVoM2FTAHB5D1ouoFSrRD2HbSndjd7ubyk5uE6w34JDW1LdGRe4JuasbHLctfjSBLrQQ8zs6FTa7X4z7vxUWufP",
  "key25": "4U1jXb2G8bTXAHWzoDgzuuoQ5rAEifoSba69zk4PbgCDA1wmLgbiMShy5zzxTaDAPhjhfEdyeMqA3kQgtyFhjym9",
  "key26": "623AEKBDLi3XdiRYdxkB55vsxer7KaL3F7Jfvw2h7QeLga41kdeCf8wq6S9eKxD3pB5CwFvqGhuNLafWhfwMXoSE",
  "key27": "kx6zDLbDHdFFX7E1kzpFsTtB2QDgG8emafYnkBjPtnGMKVo5e29fXp8Y2XujUfyMgNjYoVpPSrcE35ccwZNuWPq",
  "key28": "5fLeLMdtvNdpX2r7nmegvskrwxKTakpVrRHwtKHVYM1miPNoU2oXjXYaeFwQFaxYBw3B1kJFxxq8Qjqnhnv5NJBh",
  "key29": "2xcrc8aSYiWzvGRTGzYHVnx56gA5omQikJvTvEahw4eUNvyX7SrpembwfcVXZ1oLexzWdCA6ZGW7ja6W91HNp5TW",
  "key30": "pvNWgvm9gSouCfjbKnrJPUTc65t5wmmbTzRDAu1C2b11N4gpwj6ejoTdwkpkhymmGsvmATT2My9KiHwBtqFcZsE",
  "key31": "2gmQf3Gd6f6uf1eWF67BYPeddn3B6haU9K2y7e1tMi5nyFwcqBr8oyJSwEvd8nH1eiQX7Z8gmKwHzDsS4Re5uUXB",
  "key32": "4SfUs15DnFUskVnCWnFVtUkpwAiwppXWWpM86qoSV86nxVaxxuH2vXs1eNzFqw3wC8X8aUytbagVStBaZ8KbAyXd",
  "key33": "2tUE87xQnUDPwnRQXFBxj3mppweMqqVind1k9b2TUGG98zzU8wCbCT9VGNJQ4PoNymLgZjgFJJhtbtU1aJR6vcPT",
  "key34": "5UrXkDeF6DWS9RGuZLuZseXvby7YpxuzyCVNfUAS5bAtt3tb3bp3rE9itDyA1XvxozB6x74trm1SZmFZkqu2r7tS",
  "key35": "4Z85w5W5dMzRxnff3x3FySWuKrime9afFMDjD8MRV8ZaBBf58EcahkrPHcoKrAqqt4qREuJUBL8NQDX25kGm4qvY",
  "key36": "3ZXYkDWD434e6qMUW2f8N7mN4Mcurv2yd9owBU882NGami2gJ4iNWUgjbN5NWH1SyEqUDJhEXeBi7fbtxDbFZZmE",
  "key37": "2Cxx9qtBmRp1FhaRCM9DwYFBFDSstcBjTN752LBVBd9CEAV3pueV869rT9ByygyUjGPacgtinrTxPMuKMrM8t9pE",
  "key38": "2Xa5Uord4f8Jx9c5x1Fx4M7Kue3kfv1MgQt7QhKSFpkfBLn9MPj8jiuFMDWZBKyT9kpjiJid347DCqfHrCethA43",
  "key39": "2HyUtux5q4LWCsZzKT57tnqRUgSLuTR3xZEg3kTifPYTZGxiHbXA2cpccrL4NN1rKVeLXpmKTCDycA75Bh5FwBvh",
  "key40": "emEJJjvY6S4ep5svRP5R8mGYnKabeM9uNqDNXKWq2G28Dtv5bGhYGzu35fz4htRrpTYiftsqQtxkPnVZt6ZLZdH",
  "key41": "2d2eTG1VurCjP5vr5qMywiysrUV7r2AcsxSe94awSYfXWFUDd8aPPVEdG9x8zQ7fGVWxkKEaz4aJudgCSX9paKvE"
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
