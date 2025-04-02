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
    "bQBuEAmMnADXqp9S7TnMvNtw38qokx5LDHeKamW9uoSLzxdNGDZheBoZ1hh1VddgySvEAMQXpY4LKwreRLTFV3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Usc8DVhjCEwUEdZPGUBc6DwwMi895YXRwu27NmVyYj7EQZUYMjckX5yaiVuY6aEaoLeVE5cTMCr3GhSwzeCutko",
  "key1": "2uMDpN3RawP568QK5PA5EMhb8ih3xLd4cSvU5C1gNijYwhpVSpy77bKN3FsFQqWGPkzFwne9mBomsPXNDH7ymTNp",
  "key2": "ByhH3p4acU2d3reVvWJA9NcYSSN7ykjEaJAd9yU3L3hcKXU9jJgUQYBMZ8iy9UA4iFTrrwkkXxASRFuoZXqbbTQ",
  "key3": "zTZoYgfQjnXc6frKeHake4Sfj8M3Wwe5ZCFfTQxtUEg5vQUUm2ZT7fG2qGa67dTpX31xypiVbYmhcz5bHAVRh52",
  "key4": "2bcg64u2UnPRXaRNHVcaTt8uyV3sSycQdGz1fsGvU7tkJfZnbmEkkYQyxyMh9pofFyVfpm7s5qdBJqepunWsabB9",
  "key5": "3uW732375Q8jfgGqMgiaNMcUVVbRNTALSUbj6tfNei5rrJ4uQHYLbn4ycuTQrn9CSrszz1QAJJFSb9Fs5QCRSMVJ",
  "key6": "5iqCa9aryqfGsH7gCxndJ3sTVbqDtvqXS9dCL44LxQWRyuHCHitk8zfEkWu6s9GVsoxVePofZM67gAzvQqfVF1db",
  "key7": "5MAaPQuMZqXDEae88ffzYj9LfXEY1KAmSxEqXTGeF2LwQSS3ej68mmq8CDDir6KrDchfkRCNkX2M78x9F6dGXY4a",
  "key8": "35zX5BnHNUTvYi5EEVUVcZAyixzntLHNUqwfxNFc4ZXZ9ymFLcBgXjzMtaC1vAox4sw3GqhtsAp1qUQ49BzYss8d",
  "key9": "5fpdfshaC8s8CfGDMtcaomPrYULQEUJarBv8SC5ejvCp9mFpcsDMV5RqUHrpxZDiuapMBLJfVje5oMkEJjfCyCuT",
  "key10": "4DN59sQ96H1bQmTwrCbMiaz9SXQNrMqHWHbrWP2ejLCJQbSkDTr3NYhqwwoqKwhLBANueC5NXpqw98ikfgvov1j6",
  "key11": "36pB8XKgHyMVZkfe1b3AAQzNUqQS9rZVkYmRTPzaJ7PfgRrsTrUjzGd1krwQKExh994dN5rsCo5mUc18TTHzgzjP",
  "key12": "5DVyFXkeBGWQTvSoxmoj15weJzbyG2vKzsjobjii28aUAgkCtnCeQ6imQZp29qRhtjid4fP8pPnYvyaDdU9zs6wQ",
  "key13": "3gjoZ1aew218DaY9Zk39GqhDXkhBTP7CUv6qfDH2WLiWHSSMTijtBbStkkRSGt6R3vpebgKYoGapyjc9yt57RjUg",
  "key14": "2SJ6n4DrzRP7BKuQ7P1ncEF8v2zouKsGpbcoJksSFA1MKUSPbnHMtu9JPwxu2Nxys4qJ96aXgrvFSUdaNWyoAhwJ",
  "key15": "5PjgbaRXJmU9nw2ZWJ5Tsjd2B7z2sTCPCnW9Dan6TwgmGPGqVTv5bH5oijtjiWpGAj7MM6r1Aj6jo31Dg3izAGt3",
  "key16": "22siFLZ3L2xp7KZyVAGeHwheagChPoaZf1WAXc7kYNz5Q8LXCvSCdLB3JR9Yw2YER5XocZ6hLpidRndM6NSp5Jxn",
  "key17": "4pU5XDbjonBbRbADsFXhWgpaM4QZDyfb7Jui8mEb6acK7cUZeDxecVoQbwDMXvvE6CoXq93bQamBaR3oodR4KhwE",
  "key18": "2hpHap9AUNkMo6CmYQM7qqaQxBeZJ1tzeRXbAPPQyh1vHrpjYEK6WG1fze2JLwGUbwHPPeX4t4iPRA9xg1Ja4U4T",
  "key19": "5qXUmvsRBtEv68MMx9PaegFDJNX333ysDNioQupg5LZuLH4VfW86UQWFAPjNPZ727UWFofXoFSagZbL9qUSWtTpv",
  "key20": "3khD6M9etZ5o8rrEiEsCmzUx7y1X821oNyuaNrzX8eTYmgMTUeRmrvnJGPmLkZjgUMhiZhr2QDUw9fEKftRLCoxb",
  "key21": "2ihDHH3mFfwKbvd8XSvZBNReNzpFeinH9RkGftA15anF5YZL5EtqMJ7KWAiTyTYHzauF5FZwArNuDUno7c8FyQUA",
  "key22": "2ZEhKUYMxRpkFtGsuC6kiu64fScM1Bc9eymHyYpRATWiZbmDavzrKGoivJK7JvQB38BJbsKvwfv1ygbTL3uz1v6",
  "key23": "5K7cNBJ7uG5REUjiUseYETgKVCXNHMWfqUtDFZoidbFzTBSootxXZferijmvx8ZZSANKFEvsKcCuUHLADxg2jxrb",
  "key24": "5ZbMsjTc2aeLkCrhZEgfs1chnAQHe6EKToyfXNVm2naW7K4u1zmf8nfBn1QczzsGyw4szyPM5HFvHmjFz2DLKQia",
  "key25": "3ECTg7TCX2VSL6q4CtVq91PVhwg4WuspxWn6T9wxpwk7c6SuKk8uGFNQm4TPJQ4nV2a3vN2Sz5Cj7qrQGDz5VqR2",
  "key26": "2c5bcin8zr9BNY8i7ELx8bgE4DFXbjKtUKLTyBs1sbZGudDbRMFfd8vVVw2GvUFAoXqNRnAvmrvU72FsrBXp7hdh",
  "key27": "45U5CBSoB8X78cYsGW3tuWV2VzmSm4TeWxHPMQi9EsSq2uQBuFm4Y68z8FZ549diAv6f5GPuAj95dD3fCXWVbwXa",
  "key28": "HfmxaT45F6KFhzr2JHr1Wap5d9Kz8KCwfyUMmgUVFnUWfCW6c8YNpDPABQYG1JBYWduomLP9SyBQNPS598JbB9z",
  "key29": "2i8FzzzXmPRnYkUAwsotEwcrc2hpFkkzx1pkzikqdzVeJbYvzwNdq8h54KUMrBbDVBMvhKnaaKEkdCNBF9roPzjo",
  "key30": "5BJhzX7YoppTNzuLuCV8LZ2jy8Lb4adxs1c8whQ4uRZHURnvfm42tyezXWarQ5641CnMFF7n34WUzyaAFXTth941",
  "key31": "599T8AyujVbcBTrUV4estYhBH9NqfZBUNMTLPGkMgSio6PUFJhaHUYnwAYURCGVTjWq8JZctaYpZTAMDuqf82g5x",
  "key32": "32swx9y4pWJ9DjwHNxr6QSvXgapZ3Ekdh9oKZteYgUtwoHDPndY6vu92AkBjYjUnQuF2h3uvUTgbQehx1qViC5GR",
  "key33": "5Tc84HexqJm3daWSKeDzNqFxzQ9LkD1AS1yPsqGtCawWC1GTDWaG8UocN9aipGnRMbpBnEAsU9xFHkfet6HLYU5x",
  "key34": "53sMAHBKcYF1cV6WHwgScNwGcmrBFtEPT2nPDQSWTWCVoBzR8LjNHGw2HNJTGS8aLkANuqa5iPXNBq9tE3sUUwfj",
  "key35": "2iCQKhQAVBS7Pf2jkR8Les8dBZ9KwvVLCD9pHTobmsagj25oaFjmymieKfgGD9BJrJzQXHftz1Jv1kj21aXNZSDd",
  "key36": "4RF5g2iCMoDLqAingkziAFx6MXrjwsTGSd5LFbeK7BuaDEJsoPMeUwNQCVFi8xGcxzUZSrermzBrN6C7eFD1sTQX",
  "key37": "43WcB5jMRV9c6yR7nhfw1jAJnvRJS4oppDhUDxD159rQzNisSjxA3jGoYiv94rmYuxtYCW6m5BuoKgjvEaergoMp",
  "key38": "3s76P19c8RoApCphCdDfwrQhnYTCxrcmKejqybc2H8YwwMYDesmqPa823raxHKmFGrg5x7fYxbhhBKSst9jgoYKc",
  "key39": "5C6RSA2TNPBzaieEh6rRmuA27V6LVS5CnXq48MdLzH3qDL8B25tDnsWYihr4Y4ZuS1btazKDzzavjNCdfYMiJCfT",
  "key40": "3E281nDieLf21w3U8EZC8duihjqUotxUfa6XQNr9mtuABFKb2tiwabmPo8RNBAyJBmY2MzzeiBgtySXJ1pYxEtoc",
  "key41": "GDk49VYXqXAwZa9uaxaCMJGR2mDJS7DJEGfDmE7Ko5gTqUmMVsewWshnqnwzjLV1JboRMibnuzTWUxZQTX2iG8g",
  "key42": "3jJYapsiZ3iMrHjSmsQ6qdxsSbJseWTVozvYo5WPQSuCTuLvYPJep5a6Z5KXiFF2tJpRUXBfCG7umuy4kW3NVZSV",
  "key43": "3RSWx4A76vPYbYWHtNWDTFbCC4pNF7cV7fW5AZZmJFUWVXDJUqe5SiNRvwt3dWbUfzgac9jsYXSdapnjzW1vZpas",
  "key44": "2ySuF3sG3gLXY5wncNpUYCXPJg7KRF1sj4S5Z6njFc6zqqsaVk3SKaVgTV3fDbNakhPtaKQQmFre2zDK2cvfAbxE",
  "key45": "3MtPFUC73sy7syzsxcKSNQEHbVBbAJ8fVUr6JBMZAfP51X1Pnb2N26WgJmne8ypL7AvV8NghU9dPXAwfqyKVSRWD",
  "key46": "4YE4WFZYNYcR2Xhfyss6MtvpLcHSTPZkXfWhf7bxuSSAMWEw3fsvgga5JeoBPwwSmBgNpgRvwdyxHngZpnpp3LvH",
  "key47": "Qf9zqR5cD9HZVdgVH2MekHSoXRe6NnaqUxqVzwvLvyDQEnJJvvw1SdQSvA8k2rFD6uwEZBBHjkEgyLucozHS2z2",
  "key48": "2F22THtBZa9LR1uFFGAMm1ipvtHt9Q5QeBZytw8CpyTBKn8GucbziLK9S2DKqAHCBwvjxpRHW8BXZNCToTzcgmtY"
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
