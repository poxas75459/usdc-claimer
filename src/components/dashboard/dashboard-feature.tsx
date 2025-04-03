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
    "5jmrkmafyVEmJRdJDGd58xAqsLw8Feq5cjqiYMyKvoPiTVsknAdd75PPBDM4phTfQ7E5kJWzCjSHsqQXtsaD1SSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2882VXWum72V2Wuj9PVarYPob2ZWkjJ9cXmwN6LGcSK6GgrGgW4EhS25pYo7gjAFRFDyE7gFaFPb9n6a74BZtjsG",
  "key1": "4uRpY26T5YoNHoikjJ9s58dZyQWZCRf6qigxCNuwJQxY9ckQDUsvYLvAs4ajSQuoGpuHG3wGYymDYWYmuWTzaFts",
  "key2": "5UgTWj9nasgCB13bCvEq9VD1uNNjYjsm1bVgy8vEMW2vQKNhcsYAJera42f7yDGJpkmxULTSKxzvJGeALw9FhkRz",
  "key3": "QbpAGhTAvKyvSEGjgf5BWzwnmERe24ynKemRvmgmefzZyPAo2qPixt28qg5AAdoyDyjF5JeRgQERoAePkAG42yR",
  "key4": "5HmX64ffZfNm8Ha9twcMTNVdTp2zQcDqqU947dQ8erXWtdCdvd4FHFqzZPKMZJd9NhMV5x5VkUxqo3LRCVkGpbJQ",
  "key5": "5x79n5hG9XX5o57FSd8iA1Uyteo6hms3pzg6L88gKc6Kkikxc5tzCPniznRTh3bSsF5zdq9xYhgPyMuMS6wr2d68",
  "key6": "2osYU36HevginJxgLtGry3ykjdxdYRPLrdj5ZCSSzkumMZUtZzS2Cy9huUvqmF74fTB17hfdPqLJQeQkSaUdtdhw",
  "key7": "2HKgXb4Qf6svHa9eQj1xpJdiJ2sTQfbCJYBf1LFQWHKK3LQcPCNG1mJKLzEXat3jW6XLoqHUNi85vZrSXjxwvA6f",
  "key8": "4wUJb5Mt1B3XygctcyFeZzGkBXX2UcUJBjMbWysPFu3ffdSufC6CDftNuyY3YFQSQ64u2E4fvyzCP9Y1SLdVaAYU",
  "key9": "2tGBECfM8fzYvBjFyLMRTtewbFsjgH6Kp9GYcfAL8gbjXRD9B11W2W6pRNKcLyJ57Zb5fmFSwtVJwCFuAhUoBRzV",
  "key10": "c2L1rWSh5HjYE21sUn5FAUGA86VJFuPdu2ce7Gngsi1g9ppChRaEUjebBxrzvxKe5asjaJp93F55GtShbpF8XLu",
  "key11": "URNNtLic7Y55qywp4FKvuMV1pge1BkyJiQPDoUxso4h2LtzSzQAFtaeGvLXuzW13Q7tgT8kvX2ys2qBmnaU86qs",
  "key12": "4dJbJM2DE14mSCMpr3WA9D7KWyBHKdKFg3hSHjTmvyNsF984enWemmehtbugwps9oE4fUVJTgjH6wDPoy1p1S2Pw",
  "key13": "4maBS536hoH3H6X9beRrcXR1wsLPbS4MAunDHqfqLoQRZidjcPu1kyU3S9F2a4LQFB1DAAzfdWeoMPSrT5jkqWWq",
  "key14": "5pfYvHxzhosodg6FJYJ2FcNeykxMgE34yqedYsbyKqBF8uMMJtJUfMzBiLrHZwVwj8ff5ZFdwXNAHhcbRv8b9EET",
  "key15": "4MiaMuvTsAqPsB3B4eLiGXj9Q7Jbf6Tfan2q3C13fhduhJR1maeks9261ZSx19wSwWHy97vGRn4xDyXJxHAQPfsn",
  "key16": "qyrMSEDaKq6V4r8bjrairdv2g3AvfwDVDEuHbQ4anS9f7JKxr6Uka57e3PqDQrC4ayZEmX9k3yNWZA9HdCGk9pS",
  "key17": "2XYccCc4V769KwVyeUJEQB6enyFLAqcm2mbSp2fXtKEC9bKJBs2NAJzzxFSyqJdYDks7eMJRysECrHrrwdADts9N",
  "key18": "5FGwQGg6TdNBtWUkVnFje68v75xY4v5ELhfVHdc2z53xiok6jxPKcJoj441DvKwyAzrJqioM67gwdByL5g8zoiU6",
  "key19": "2z6trkYDFD8NqVnyh9iacmgVLYCV3WcMcUDVnVZB622Qg55m9gZnbMZDieXoUqoocvqCvmp6WrtP8XQ3Q8pLw3dG",
  "key20": "3jYdYi1DC9xnPNwkLF7hdMsETsch2ryJTKY5zPU6nGvFDu5m2jSnzHxVAfNJJdF4p3nnapBnudMLRQ6ZpNGP7or4",
  "key21": "3n8oeHWvNazZEm3FiZ9yTJ3ZBYtosHRpRdxKdu2KYmXuT6A3aKqhbhWSRbH821Y3ViBG2CYU8pQqT4n3Yh5Gwfih",
  "key22": "5kaZyHtkbirFoYsS1hHQo8eh9yL5N5KHgaprfoQL8ScCPBnXNPUHymQ4FDfjm752EuGALxzUxVPzpc6AYm1oVF4u",
  "key23": "326T955NXMdddB34GyURxNtTJoz7zMkU5jZD43WxnsvH1BdhGP9LzHFobGxRRY4WiryQ9f9WEHRRXGHEQLz3Uuik",
  "key24": "5iRicL2EhKbdk149HC2Z4by1EaGdrGXYwH6GhT2JxyHzUGkX91XKnWPop9a5B6ndfcURZ2zmyfcJ4eYR2SLZR22z",
  "key25": "249VW3QLYs3n5psVipFo6u9xEFZi1mvdkb1Bd8ZA3DP3xrRZhLDq2XKFoXLB6zVeHe4wKDJ3TFnK29eNhes8p4tA",
  "key26": "29njZwkzL8xTtyxNqRS5cLcAR1aW2xW3zEoWN57dUSj1Sf2my2TCSnyfPqyaUCnv8rePMbyAjwD2kaiFrE5HQx62",
  "key27": "2Vt4F8aPUjiuRQApMfALc4LsWqjfXmomgdR5EHw1dhKLaaRxiRvMCEWDkanVtXXwMJ41QsMSYJE9nxih5do8Nng5",
  "key28": "4eRPUnSrPRiUQrxKLxUYgjzCjkvamig56SCVL2vycFHQ9vu11pSLDbyRx6CN1EKs7FXNU67LCfwnv2GtC6fhk1dK",
  "key29": "sFtRa4q6SFW5RVwxxkmLdBk4rZVotDGbPXg1QkkT483PV9cm9htyEFh3iVqNX48kBC3NJwGhQhV4KFTLZQm94Eo",
  "key30": "5AwoNGJJBRzk94NhKurfNE56T9THd1ysextyPYis8TfmbAnXvXQ2xxzdyuYAzva3HqsmUZvUTdDBxbLTEgQoFqwA",
  "key31": "4gkpRKAKekPka7BtjADtziZvJTNinseePXdTAbWvGM5CJYKJ78mxPMS4RoiWZQ17mzBhx6jEkGabrj1SyGkVfq5k",
  "key32": "4V4yE7EyVhbduRWxXkDzjoRZunFe3QFT7aCK4E4toaJSEzJcFJmJZ3ZUP6Zrf9jc8A1aWre8PxH1miuNxmsJhvE3",
  "key33": "64naY4Vchg8CYieuD4AyWPb4hfRKDgPfgS7c8End7egrod6HwxdxXSkPz2CKrotuetAYQcyfQxZnxESmojXJNdgE",
  "key34": "4YHiGinShuhHrwn2qXaHtwh2y1ScbaQwxfi7FDQePMEGsUDaoPZ8A2anvSpHm84TfvDeXahqUqqX1RhSfSgv8KqC",
  "key35": "UX66XYRhuV48g8Vvr9PENarkkqpkwzeDr7aKEwEWytT3RaySDAfZ3wuniJ9rzqj6GiUpYiueriXZztsBgCm9VmT",
  "key36": "3BuejezGoWLPn2vuYg1QYeBBqet83hDri98WukcNbWkcoZvoaVHj94tMfAomHWwGMSMABjzPFfqVhKJpkMo5sgUs",
  "key37": "5Qdc8FUp1XNPfZrecNMbrGKXMB5HBgKUYdysKLEBuQK27uriij6iNzA6qW4x2Q4sBx9APSp9kxs8Zk7o5KpnSUYT",
  "key38": "29GnWj5sgoSfLBhSqVYoDMZ1XjvZ9dj5Bh37A9ea9QeUKefYAz8UueBQ7fHX542TUcPTGsQzNtdcJh9j3teigswr",
  "key39": "3wrLtYdon7xe7EY6HFB2BbYMZSrYq5GB1LWnqy5HYSCqk8d2XopfCW13ksqHPThjDoY9VufkwER5HjpTMoin1G2C",
  "key40": "5oFuSvqmVBjnCGrUHya1crNk2QfuJ5uVuHm6VzRQoHXzDvL2gEjDD87n2ckEDEe8ApVEJ8U3ZZSiPA8rTJo41Ukh",
  "key41": "3canqj4CSyENwXxuTGuX77HBP39oTD6VvZuj4hgGpJEZqUrjbMWpkKkujz5ft9VbD33Mw991CkrbEo1bvJFQ5dmJ",
  "key42": "2K9vDG2JjVp4zobUq1ATXSqynHLn27tKJGU2Y9tjxpngkBDwqh5uPJDG4XZQWfErWS4iohPAZkvFHFQ8izQz21Rz",
  "key43": "VeQH9GrNffCErjmq4jCx73KfkdkCzGcSYbzWnvKavhDozmnqbp5SK2keYshWqq1bSiMSqhYSpshchyiJvMWVYG4",
  "key44": "2uBriambpzcsYtgR6iBBDDoCc4Dcc8XT2947JbtsFPjzNiDVM4LbmNn9T4gz3cfy78tznK2gSv52pdC4VwvuSXfD",
  "key45": "qPunRJ6CVyx53oZSRLvhWNB5RvwqFeHLxno4zCNQJsfMkYP5JRkuJezk6kGT5pMN7QHpoVwefsXgNsApRRGrSqi",
  "key46": "4zHrsukgmTbUJDA8gk92ia9pj3eG7Fih9VCum4RT9YXH8G3jdfu48yqy9fLkkqj6Zn53QndMeJsVgVqK8hchKtYC",
  "key47": "59DHhdc7SC5Tu9rZJ149ZWteH1P2dQYEPvZHXTvHbzLLKuJ7NeFkSDc3atuMLRiEA4ZXH1tPhcLY9ovH24vrxj98"
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
