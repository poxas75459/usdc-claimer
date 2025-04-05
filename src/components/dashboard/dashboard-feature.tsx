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
    "ZCMcStdZvgRTDfmsfEXrGwjcNkaeHmX6eUpHiVAikGVJafQj8rSHY5f1BNmUvYceDT2EKubQaa5y11A36Zux9cw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cm5rjHRbMNK9xFSTv3F81jUbUk1ZseJd11EaziM7nJj7qRGKmiMnNZABuwUfAuSizM7wJqCUp5AYCXcFgpWagJ3",
  "key1": "4PA2qATB2Fa5ShY5GWDgzzPo9b81F3UyMBdNnpVKGLQsT9ecMYGP6WSiLLY12oqzo8nBaUyjxxMWdYbjPWSDm7Tv",
  "key2": "63iMiNzrACd4BwqaKSbqZgzXayxyVFtDC6tsFEgHH6TqeF9Rp7xAfQq3g35BamWQXhkzA2yT9KogrNTYwDGw4FJy",
  "key3": "5mbjkPU1zoqb3bCz2ni8s982YuAdL26c3oTp25wVG9rkiTvQVR1PKm1c7BUffGfcciPytF3vNfjRWxgzEb2jKnBZ",
  "key4": "4DefBdUsbmHy4tZjn5jwudhRkCrba2JsmKhE6j6CWt9spdwzQAueA2T4eMdyzPR4rPEZ39qS9PBvYCNqEEBQ8s23",
  "key5": "C8VDLTdbV23ohfDQR3ohXVgh6DQwGUJEvNE9x6uipNavAo3EXa6E723nr7BaWGoLGEiaEcRF2Tot4nM8XFPP5ak",
  "key6": "3Guyh2jGVKGSfyuxPqX4vHwiqCoRFJJYJk5J3cNAwZvDfRWuDanqCtYgQ8JuuBwk7swaCukojQaHpbEJN4TQWw5X",
  "key7": "2ZdQQGs94QA8mB3kdHUbiWCy24rJXC15e5rv5h1XHupmrnmKnYZGPfxEUXT8494uutehu8TYkfuk77hLyWw4Tekr",
  "key8": "4viWHx4k35aC6AkDnXdS7xqYwYcvAnJ9cKgA5Y57PwtANpuY7Lyjno9LvnZL91GAcXBBVceDHjVPwpxR4JXZRX2y",
  "key9": "5SkfMQEaLTidC2wKT4NE5Xw6uRBYDswnvD6tGWoDEiuy9BVReSmfJrwbkGQmPgEauwsYFfuqBgjAHhUo6115rTg3",
  "key10": "3fvbnMEDNXR9wLtSUYvbvm9gijN9Knh1sVJZMbsZFwX6sqRDi87gcFZvfiZjuJSaWdN3pvSpfP6mKwd491876EZu",
  "key11": "4kQsZ2KC5qiftUsMkZAm5SmgES5dCGXHMLW2MsgLuUqns24RsJgT3gaoGcpeLgRqcgHgtFSxXzBTQLU3agZj6ULt",
  "key12": "51MFnyjRvR7VK4rSvM7PqFB91VegDndW21jLyCzBuxNnEnKuQcvPMcrnTinDtz15N6LT6kPYxNuZHUxD8GwKPmnd",
  "key13": "4c5UYgxfZXx6mVQaBoGd6Jidsh5KzNetnkfFBr9ZYWsF2YAwVdmCXEy9uSYazk3UDiyVspPo4uEMKjf1nh5uLGdY",
  "key14": "4in9aE3kNCcm6VCiNHh6P7XiEWFSnzQpn5BTNu8bBdTDzQDrTychEsmeZnKctyUc4YWZPGY6pb3T6pgGC3aaVD9j",
  "key15": "57CHtAYMVm1FXfSm5dxitxFszzam4fChjcrDp4CZ9ZSUPhzcYXxxSrCa5W5N6UPDfHnyNTSoxdLma4B4ELoNn4Wj",
  "key16": "fq5YB46kRL6fLExuhDxa22SKH2LWBUUP8jJtEL1e8t26TCwPSCXHstQaQDDsiSXvkMe48wXZWfw11L6vkaDj9vg",
  "key17": "8nPyhZFDqALBdpTDrgrGNM7CsjPaw5ibW1xD939v5X37uH2kKVikpUL3duKejspKX7Gd1gnR2PU6Gays34LMVJ1",
  "key18": "AQnQwVPqhDCUPte3wqoDTs6CmGPBVwDhAb6Tjc8oknx1yKrwowZtQzgqYsSSCrtYFTau6ddykWgJ46Ph42xmBRT",
  "key19": "dtAoiN4xcrrYmzktrihKS9cbFKREJN9MMuHkQeKDro3GKQ5ZigZJxC7J1CuvgDjwabo428MbAJjnbJv6EePVR98",
  "key20": "5tTFcz1ZAg2qB6YEJvkhzAD3MqMpSqGAmeFHCWkm7jb3ELoADTXmu8wth1YxcoNpADL9y6WV3SyknUJUcv5DKp3n",
  "key21": "YuhbzFVPgDta6mpnCQMQWfFVSrsAdLmnvtkv6coSgzQEBeoiFBk8Qi63UDezq2ryZpoYqa8B3Vi2WAFEDQbDNgv",
  "key22": "5Dh9cvhs1nx3greUcE9nX7JtP2AhernpnKX2S7gT3q37kH6rUiGkR55PkxpqQuHPDqTBXLEegPmNcwLP9EFdtigk",
  "key23": "3AdBUWovfmwb1eSgdyQzuTRCPq7V61rgRjh5uS4tjRB5aENDN3Thb85jspXaqe8PHNSyADWn58J7kuaeDca7EGCs",
  "key24": "5n81KMCebk8zjj2JJ1atWCTYtjJvbmzS1XPkKLhM8mBeWfx7gmSjSaTF3BdczqGhVMDBV7bXwVsCxYzVsuTbiHef",
  "key25": "2ArFSG3Q9ueP3uby5aeUtUGDisw4VtSnVKo8KMwCqLy5vi7GXFveheVkHhMwdbW8SEsnDVpCzqiYo81BZd7LeQLw",
  "key26": "3W8P2tCwuiSAGbe877LzgeFuJYNde4moHy5yYERfoQDMyb271onAms6biHbsxdq8dFsiigHsMsGw36e7Ji5SmNi5",
  "key27": "244NtPsR7UAQ7Q2b61xGBDaXNiazQaHgWGBDLDS4BskrfdTmmFM39D4ky8VaZpYZPwHkyXoEBuZhVC7nJUWFZKG3",
  "key28": "7U7mt7iJHAnx2pCiFA3tRx4ga9zdg68KqeDbB9Mkk42fVaxvSjEn84XTeKYue5uVEtY4teLWhay4EgtmMktChCS",
  "key29": "3wVFay1Xaknk2iv8zHBo3mGacHo1DhgttHBsivs1hKYNnHk2UyNg2cRY3H3U9TpSRx6mDXL2iCLUCfsM2y2KzzPU",
  "key30": "4pcaxKDn8yXhNR3aReWUPafNqbsSa8Kpch11bVhkE8UpHXAUMBf6WZeN1ZgN2DBSeoTw4C1PGqEVZqqoessTeabS",
  "key31": "5oAquv36AvKtVXS5Rjji6QKXBBMTjf3inJCvWTQh9QYS5ixfZ1q9iJvt7s3ErJbbAduxk6MyG4VLLNvzRydJNQLY",
  "key32": "zrYoyzYXRpy4g36MwCqyYABacCf3uSSkuZ8mkvTYyc6AJRBeGiu1P3MAdqhdqHGyxXyUQcjxf1PVpSKtsnyTN5z",
  "key33": "WKybhWkvp9iSKognc1XUDhzL3SnjKAfFd1BiQB9UByiGrv2njpZo47999a9ZxeYjkDmUJXNmNcSPPqXVKVnnDEb",
  "key34": "4J64TTw3ctZnDhAWXmhZaD6ZBYbyaAQWq9yoJFvMTHRn1i8thHd63oLp8jKxMpCXbDA4pGVcNZem7rmWWNunJ5xV",
  "key35": "5GCCfs9SWLnb9mY7WoJJ86W7csVCekQ9ZBn2qmSLvC3s4oMrL8ovdpuECiz34Ao7ngTWnWTvBkGduajirGaTfNwE"
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
