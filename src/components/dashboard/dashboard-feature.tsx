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
    "59Uvj88HWiNMd3Br8gUVvnPHJx516JnriT4i4HHwLioPVr5XtoAoUVXK2qeq6tjD1f8QfLi3xCyqPGXhkQVe6bj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sMTK7fH7V9iMw64r9zRLWkUx5PsN9f9uM6S7ZYCM1VJeBGv3PRfiWAfT6hGCp9MJZ3umZF4FnLriMKnM7H2ogay",
  "key1": "5sDidDpPwTJ8vCvb71Ef86guntmw3Zj439h966fMKsDmmY6gPRrjSZ39av1YEiNekqQVCPYPpzmVLXUsSSYw2s7n",
  "key2": "3VSvCvB1F7J9czbHQy9T7vzM5CtWy3k8LZ18tywbQztoS9Ey7piXiavcSyLUVfk9xutPat65ydNwFhVJbdTixtbW",
  "key3": "3rWusHM2u1CuyaWwUxN9LxFbRvtvgQTUi9boG33S7X7irEGRSPGYGkmoCA3KKSn5aJsxcujxu5XnxHQZurk5FMfR",
  "key4": "3TU9QMGpE4zTKyKMD45AcKTJitmFw2TKQeZAgWWbHsoDgPWaVpwjHjtAuvdvn4yJ64QrvJtstuVVZSBNcfiqQ9MX",
  "key5": "sLssSnANyvSWMrWZHXiJtN5s2b625ALLPKQ7Xb1pXa8fsAW3c3mhAPVmorSBd2ys72CT6mM8u8QQpKyvHupQbmU",
  "key6": "3CWEVmMFpgapy5WejHBHQ8vq7TDQwsorQ3cMz2hHekdVyPBpSjof7QTWcdpQ7zNW5o7NDVD2CN4tQVMv7DjgvTpP",
  "key7": "28UMzFhZvjXR1H38kLZC8YC3u23pBbj4Ux99VGAAGWeHY4X6qVdTFowDNXW3rEMYqqqyEb3Ks1cVm5h1unPLceup",
  "key8": "5iUCe5QMthrDSMgPjf3fgaz9SwJVkbSkVpGwG1nMNJ1cP28rvujEBbQmNkESuZUwVL18JBRj4Txjw48zeFEMtvs3",
  "key9": "54kRdAA8EsLFpBLwjfApBC2xjoq9imfpKA8QMjmX3hDN2khT2FUow737sjfjaVGL626uuF4xgJLczNTPxPvf25Gc",
  "key10": "3XhbMp3WzaMSvj2vCef7MoN2M9iRimUcQkSVDKXfujMosVacQSwRYCWxZfwnEXaNm9GxUYjyoNYXVA5tDJ4CMreU",
  "key11": "53JpwVTMn4RN2V6zgQ2BuxNY9bZ5Nike2bD9y1zVeB93j4NPvASRsQhsWgr3fj6Q2fFUGgTV2kF6GzV1xiZYpeQ4",
  "key12": "5czgw48RJm8ndhP2BhYiyEFLdhzKC8Qj8J6UWjWYAU25L2WJ9Q8E6dADkpHsEhP3ADpweaQBnGJNnY1NpUcqLteQ",
  "key13": "aNfh1kkzjdtmXHjfXcZ3V2z1ookaBHoDFiqR1XWqVR8Y569Jq67h3mVEP9NHuBUdnA546YDmrtMBNHeuaCojAw2",
  "key14": "2DwzMdRakyc2Yae8m5ZCGNvLuTGh5cAaSMBkk1YQ72UeaSQf15eUudfpfodtwpw3SGLcAWpn4V1tvA9FWJag67go",
  "key15": "2FQeFQHgpj1vLM2oiCvaGGLG7mDgYuLksmD1PFLN2N4xE2T6xbpzPTZwvScoy1bXyRWwHYrsGjfeom4VfdMbWUU5",
  "key16": "2pgMBE1owbaPoh7pBYW7ZU3WqznssTurUEepZGJHZiXmzLPmWWcVTCvRDr1AGNUSWWY1xhTRBY4WZye1BkQ3HYeH",
  "key17": "4m9iG41nRL9g9nScDBBbXJ4uLqddGn5ZbnFdvpcdqQBpxDUshdgAn5MkRuLawjV8deKFbfzGcDGiC91EmRg19XZn",
  "key18": "2BsBdtweG4jAcMdu5EiboiDSz1AS7akn9k74j9cuWaCUQ2NGhRSxKGAKjJReHkqKHagmBUBvhaQKWaYAQGBamQ9b",
  "key19": "3qKrUp4N1RxWtRPkvDeKywUozrLLbwTK96XxFv1cXmq9TBKpUKDEPkKzu6Yfcfg1ZMgJ3Dbhdze2Su4jUpsAcMAc",
  "key20": "25uACCrVqqh9S3aB7DCXGRzxnGY7J4sj6t1LbofBpUYJYSeCumvd3zTT4FVXUP3ZsvX5bQGFbcnCKsyeMQLUZwSb",
  "key21": "56ojKNxbnpHBfPDchkkUdMhJf7cp9JRWTAhwJTBLtfJf5v7ncFdjM5W9ju5pvpJ6diSiFzwwQGuSZLrKNUizk674",
  "key22": "2baVo1pktRYZujGSjPkMe7RQqYh2qh6ESAhcEpDTWxPE41joSCxC2NL8GZuJfRFhBhnVmfeAmVu9EEKouxT4wqbr",
  "key23": "2vbBfcUgVE7GqVRnjiBiyPDCVo4PEut2P1DLxZZtGaHKSwFmfBCdjZLWw25x7P7CxUZJRao6ZCtqTtU7FnpiMpf8",
  "key24": "awRqfkAGjNTiVrBcYJ3j51RMuYY7Zr6eTtBRexNBXUE7aSNq6FUUFyKpfn9UwVtYgCx8doYgvazfSCCWnesVXP9",
  "key25": "2xBKvj2sBGb1JqBbdwXYeUTTaKJqZ1eMtKShDbYNSThaXnfjPChpqsnpHvzhn4kLkFTazpupQ5jWH51TCnWn97We",
  "key26": "34uZxE2Ag1ZWFq3e7khSTGGmLm1PmsWwPd5CqMQQJCacwo9MAV9yQmQXpZFzyyXyin9YyuJJVJmDcAKKxbU1gANH",
  "key27": "27r572beBNTgQ9M4qaBZjeiHy3Up6sQxHLDEC6gAmVrLK8mkHRcv59osBhcPdWJoNwhfDAQVShaySuiANytbrBYj",
  "key28": "4hFD3UW6UfiEkwEJjjCAxdg2JZXhpBop6Xmi1ssRBSMLR4msBvz3ne43P1Ab33s2bS3AwSoeZV95zTbYtEbYp5yX",
  "key29": "4eu8YfDX1ex38yRZdQv7rmKqdh7bkipSBTS8K2Lv8WADEQiXR6gsfwfBV2aemUJohNi6xaNc1KDn6iwPXkVt1iix",
  "key30": "23GKt5qmLQ6LHbAcoH77iCrm9QNGTfePUhcuA6pAcC6335XP1TuhUy8LnfZm7zpRFKGYQvcCDFLNzwApBY1Qsmb8",
  "key31": "4gk8CtuwJWvTKakpDTe1AWyP3umD862piZP11uAiZWpzQjuVSXix37NXN2r1n1TWyJRhA1DeDzxovFRGrd7mbw7i",
  "key32": "54pmZCwzuy86TE4WnAr1zTMFGxrEKA8nncLru7H8bZ6L9FnVecyARP228i8aWu9W3DU6sqVuyUicawDZYSCq3kD1",
  "key33": "4f6UqYZDRbPhsGPXXDA9afKbLz2yLnZKsLrKefYHtFTPU41nrMHKnW775kV8jj5FzRRvZj6UghCUhUnt5iL6Ptbo",
  "key34": "4FDR5d2vWJoCfwWd5Ct1iHdhHUoRGaL6hG35bmec9jb3ognP7pEUx2U3HZLuXaLKti1F8RFhwpuJc7mFKeCvtCgh",
  "key35": "4PXikDbRce85fpzFoih5o1qnkSDKeWpX5oer7vvaJyC5UfxecKNS5Av2bYCgcUwW3KhQrAxwVS28aLX9MXCf6esG"
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
