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
    "24q3Uevh9AqGy88XVQq5QcoWob7a8efC4Ef6716ZTcWmDKPMdLU2t3mpN2EKo93bwvPzxBqWeTgPaSifpLZ9WtGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TPZ4DJTcqTajAjnS4K4WR61baQsYFAhFw43aK2PCpVksGtnc3QDHcwXRs3tuiYuGfydfNQuxW4oBe1awwCGepX7",
  "key1": "doWcXmU71r1BTcgi121JsjEevyLRiTESVDdogMfKGm2gVuTzkh5dMaFUbVrcWFyMdpSdG3gaF8mhwszSrVx1opK",
  "key2": "4Kt6D58PEtUSxp956nkB9LYRq3qjQfsrxrZboDAgPb1neyjes3pp9NqUzmNPA8UPCMgebtLNAN6ULWimyfRWbCJC",
  "key3": "2WLxFjVYunQRUe3xyb6pcbNd8G1QRVnzEGZkCBFkJzfUT7seCxj46cYKVtZsncnmnm5tRNPEvaA4tYnMq3YWVX3Z",
  "key4": "2UtZuNuCZTbPBFztP5DTfYtprStGi2BQGzu3kA1BTzN6UWZ6E2ceWyNLSQe5amoLGCYPViHpHFgNS7vgJPv7aM7i",
  "key5": "2pok3gHEQ7zjAqpFnEu2f5b3aFtZouBicN8sXUTCH7hpNYnNpyL5z6UtDNsCtCWFrM8jUzp1Fe74WXVpFbf9CdiL",
  "key6": "4b6xR5kUHR4YbBjn7kq2y8t19rGKzd7nJiZCh1eHwqKaqcgaJXa9op6AmwLQ6JgKkBnYaazP4eRFke2g6rsSkdzD",
  "key7": "57r9Gg1aqyArgHbdW5zC8gfSczciXhhp6uQwSBRez3aWiMDhxPccbnkdFBX2nyCe7wBqYM3gyDmvSoV1nqnPgutU",
  "key8": "63NTUwhuBsMy4kGveqeJM2CvgJjQzAnnMNJ1QVmjatjhxEVe556SDqSAthoQRbRd8SpFUUiyCxRtjVj8ks61LC6n",
  "key9": "5UZyKKGymF69nBqx7rUAayztMLwujuzY79ZxWKZATUp8NkEcBTrJis3FTHoc7MTtcVWWcGrJgMb85T5zm12wLwL9",
  "key10": "Yr69UvLRrt9pJNTjoSLUyVKcFzVkmUXkMTbKEA6VUAyNkkZPzEu4EdKVfxbeFToUBVPqDV1T7oxnaJBjjhzVhdz",
  "key11": "49CRFwJLqEA22K9LqjRxSW6aVABHiFozrSBG2UgHmZKtuJDhGwzvk61xG2X2AFvqJ8Rt7f9Wwsfk8txAoJMNhDnZ",
  "key12": "5JUtmdaAV2nMNcPqMaW9ev8iYJQqNADweNMpryX1U3BoigsPNzQrnxiHZ6n2NCZGPaKhu3vNdKFZ4vwjU91waaVx",
  "key13": "5gpYGizBgmSf6q3tNHiWgo7LFfxY1eMyjxU4NLAyNapJ7G69Kp7qwKsU2QcZY4edJHVqeJay4cBJstJzndyHp1ag",
  "key14": "7aXw2E6n5V5jqRoTYvJmB6fFX2AxfV2TcahVnkk4PmzvJTqNcZNjeMrD1UpgotxW5uLLYxCdam5g75Kp5PM7Y7B",
  "key15": "3SZKxbXXAbZpJBWDhYwkyiQiABZdsiLuN1cUo4x1Pvi75Cs7deQF6JzxSPfXy7Dr1GHVFZwrJafatBRNU8xkWCtE",
  "key16": "4vbHQABA9KA3AiF7v5pH6GuMDgffLyWrwAqUr6WxoPRKQmFpTthbma5Hy8mCT43WuL4iP4sVFrcCzLriwSxe2r35",
  "key17": "3HWbWpdcYiCQ7pcVafMxm9myk6KP4NUrP6D9pQ3UpU6QqadKEXMQsvh5LUVgpPztEW7EAgqmEW69RZf2KGjtGtz1",
  "key18": "5it48Th1xSyvmuoQrzjL1LA2Nc5CUkagDGtEeyuRBdb3PEL9cStr6BrcBv4YNNF7jZMrBv9ycZ84jXTzyo7szbod",
  "key19": "4LNXiNncG3EZRHtKck4DjvbsgBUzPbKgaYEyaTxzhhQQgwfdkFPSZBBjdyDFp8Y3mGDAnr799V9wD5kfi3feeHoR",
  "key20": "3poxzLV8xcGJnPdPM641itNYbxbuyekcdPm8GGdHmrbfKeFAcEj9CJ2wJ5pSgbvJUo2UzayPhB3hQccNAS1gGiNd",
  "key21": "5yDYYotXkHiMXGnru9PNpoPWzV16moN9jQDxFpQETXhskzSMgqPsLxZZGpCNUHkgusMDuM2ZEWUBp9EWa1cRPiDy",
  "key22": "3R74wx852tLs1rEZHGVNZRZfzp5A38EUHbRjzzMxSGBmyYVR9w5YbHHQrfhQEZCmGU3igwybhVvqYoKQEcobLeKn",
  "key23": "q2Uhm8WWz1SzGdsRJxH2MejUZ36oxJbty2LQ5zmNRVk3gDTFps4sdYtBrVsBhZunViouAZaRD2fG5CCjL4fbvCn",
  "key24": "5QetwMNz6cbAZBk1WLJt86CEyNb83TmAdzXmWLHJnDGnF1gPcPvKi29VSYnyaoiBRmjgNW7KYLMMdZiwoyGwCcvg",
  "key25": "2Hbc2mPd2EcJuyDHNCWT8TC3wRrKAb4b6Bh7KLJ9AD8MSnamHfysS6JxuAK1Rg3AQcoNMfA32igf2nAPQUVrFaB8",
  "key26": "2ot3Xr2seAzsJrYwDsKL736qWjdDig2bzWXH26XpY66SyC4phSbsVJFVvGS2Y1mnysfBHWDLZo53tsjV46t3xW4Z",
  "key27": "2rKF1uTEei3LrzQihqC8gc8nLfXKNNFTVeZazsmVFgrM8zusyVjUDTTJFsNup9B5wNXDAb2ZHShPsaCkhGWGBWUa",
  "key28": "s1aZ3Smt1vDDUcUH6FUxQ9ctZPAQFCqf3Zh9BWbKBP9fD97UHLupo4MGNx8pkDn5mX8Ajf2U3FoZcKrmLo485Gm",
  "key29": "3pFu1XirjWLRJwtkceA64BHpaUVnTF2izqZ5tx5wkjbdTUQ4bDhSyiYj9BdHcXinxrdhBPoQxKh1Mpxmq1ePKUkD",
  "key30": "4e9JZGKBpyrKn4XFPuYpobf23zx94cWkt38HmPaK7U4XSbkyR2oBBPk5UAU7awbuzCfAWDTpU2zLMr13VaCUQBns",
  "key31": "4QDrP35gEzCzYDeTBqBx4456vhgbAa25rAXcvk95qF5NJNPvo1kETAaGpCNrK3pVvRCocghVQEGash8LLHF5Mk87",
  "key32": "3yLioLQVwSWqfjigAxmkTFnu1g65kGBWLd9TTAz26Uax7UpmJJdi1qVmDAqq381myGcz5jEWy69YS7BrPhmDCFwY",
  "key33": "4XbeGDEzpkb4gPPqKQNpt1f7JMk74ba2WEVcWVHJnDRHkNsFTe5oacVVpA76pTchyUTZZoVYSLtbN4fT76gbckmB",
  "key34": "4aXB7wfL2t2VqzjVVuZ7fvU7B1Zg2Kkx7F4DPjQCmDJkUScTfACkNTUVj72wYXSeTvR7g4724kM7a1aNjDNVYgSS",
  "key35": "4K9TDrYL91VvLX5jkQgdVSJygvZbQdXisghf6XhFikXmNDH1iog8EmsTg4K5GQs5gJJkEcjNyhdSRixqhYv7tzTi",
  "key36": "JKQjcAQpHJJMfAEsisfrRGKjanGcKUb5CUVQLXxRpDqCPW6MbUua68tbpDah2cmFhFZbFdz4qKPhkF6nuVYPqKF",
  "key37": "5zMMXokDhX6YBn9QqLkH6SFN8eU7K7SPvfyUSYQXyBaX4Y2UEUZAsm6FyJj5j7rxkcubNGvWTNCMbr2kcAG1wic3",
  "key38": "3MhXrHV6qPD4PHoAZrAM4F392ypo1A8pHLvd1xiFGA8FZniY2ubkDyo7vYG5NwaWwNF99V4JdSvWb3uFK3u8PXTF",
  "key39": "CUcQHSNaL8NqWhLFcyLd91f6GooZnrxugNTYezrAKxJuttL2Zwb4LU74aPioseRXCbDtCkbhNw6gAyfJLKk4obS",
  "key40": "5bDm6ujUE69yXBJKApMBUG6JJBwXic1aKqawCjqRVfJ2noToHTeEBTTJ5HruWQ3Fhwq877sKwS2eDkF3RHTd9iwR",
  "key41": "4PsNusXma38XfqpbgPqUbiUtAQgLJZHZFcdLjkp6jN5wC33dsNKsRbbkueSaNGNU8V8xwiSEvVndips7DQgdhcZm",
  "key42": "LAyRcZb1WwjpMfz9BhL4FvCXvMgg1pgrFoDLVHurSZ6hSvezrdY7KSm1LRX4FtPFz2BJM4t6GLfXVvkhpAh25A2",
  "key43": "5aYqvBkTn28rbCssSdHyZZqmiwX4jWgVaxJAaCJ4s69X2ZtF4hvEfce5pkcTRiRryfpsmA9zaVwppg5CJm92sKux",
  "key44": "3bqqTEytMnrFSjNVMWGXxWdD5pHPKpudNDeBD85Z5CexCsifPBB9xHNhhimnngZ8TYCLTLG5yGNKhUVZgCB8eQB9",
  "key45": "49iGftogYngopzyyhuzr2A7PJeqimvvqs4UKruYkGTYyyVXHc2ZpCpTUNFxtycCnpeqjdSwkcvQ1MUme9y22dH4m",
  "key46": "559kEcdXsEeq82wWk3MYnmqQxprUvdzNJAWWnQGmdNV2Y5UPm2MsKZnNMKYai1jLNT2qqK6xLsoRfZgoUULzhCu7",
  "key47": "4wriMmnEUwcj8Jt5aBw9Map8zfVgNXZVUigxubgP8o4NpSLiRhUt7nog7Tf2mENedEmCn9ZD4SBht4Hi9cYkaqzk",
  "key48": "2X6bKV7sZssYCy69wBtNFBFRbo7ZMa8RbS3oBJXLebjfK2MR4dBmmahna1MvJ3Eqe22q4JZZziErSdKmeF4NJNDQ",
  "key49": "2S5uAjkJpY2VHxRqdmmEuoMj5ApsoVKggYdXp4hVZp4w3KjWMBq1wWLde95oyffCX7vkbhYdvJmhjTwF4aSxVcCn"
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
