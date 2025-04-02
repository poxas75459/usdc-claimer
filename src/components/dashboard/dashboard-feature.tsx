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
    "51Rn92GkSQnLrLwrZvcK7FTkPfsmCk9ujtRzu9FsfwxCgdsK7Zxtc3eWoP1dCEK4TSZpwi4qAhyLySdrjT9HVhnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aoUBss6fA5MZZs2RxhRAE5etMY2HynbS1azJUvP2x56UQBTVq2GLWPUgbVZy3EW1N1hb2VDDoYvFYbnQRbffnEy",
  "key1": "5Q2Gzv1xYnvHgytb9NKWWBiM58CJMretnnURBZXdek6FTFxGZfQFhnjiuXwP5J3LwoHQDaDe9rxxAdMs6bFc5zaY",
  "key2": "4fVHBMumMGZR4hzCwRcBpXvH5ojzbURxsMcjJAdnyvRGe5kFGoUbG3r6S3VZZHKibTXkuqcXaML2YtXRwaR16BJS",
  "key3": "22LNAcJhtA9BXvjvnjFCKhzpyfhXm9ehXjBtxhxQYmZXPoZyiaAx3Qq3617rvnugwBkSNxDn6UC2CMcc5exTvWxW",
  "key4": "ZJurYpnuYhERpMEvTPJZ4ZS6XLrBaqvSuh6z8Gtj5GbPetGkCz42ANkgHLBito1tLWaYE8Z31wrN1H5DG2k1Pxx",
  "key5": "5HZLzF6iFJ6Zp8WmFH7hTxpKscQVVRSj9uortDdohVE9REWWmftqx57EfesnXP2rtYvTXSgnp4g3NyUeNAtKfVVX",
  "key6": "bXv4KbuExmjuQ5SQrZUpcYZ21gmR6s6aivG6rfFSmi1mWwxPiD2TzWwaMMHF1qbatKquEqVgDL5dfYvnShzxYVh",
  "key7": "57VRCAJ3JANK2RsPqnHmRZX9PW1oWYvLc5sV5bE4mMcnKohPXYjcdhJCxCBARrVoeqJmWB32SHTg21CDm1gXWUJ9",
  "key8": "53tzVgScqChHSPrMNciUYheXC3w1a4vpuZXdNN3m1LAznJxgbKx9x7PvngLtMZyRm8HRqwGJqUHvBHZVbe6dLtt8",
  "key9": "3axxEfFPS67LbqokiBZiDMyGqHkBspV2NgCyiH4yYmgVm2E7prA6PKXNEvHDAbnW2qV4VL2x7v8DioH1NdDNFdp2",
  "key10": "35UvM94CcdYAyAjhbiTn4fXRgAxJqhGxb1ERJRNQsTe3qx29gnmk6Yi5JHy7Yyda4Xjgbw3BPBd8g1K3T3yuPw4B",
  "key11": "2qbYFhs8z5pmPmbB1WyT88zNiLaGYwbgcq13P5JAtwBmMMCoTvJHMQ2RvzvjeRcBmbHdqhHzqzC1KBwkNtEWu6wH",
  "key12": "5Hj2YtgDWR3g9FDgkrCVGDPSv9E6qvo6mUi7RSirHnH8DfRetZp6tkig8KYxpf38viMyTxtWZ1Uns1iuoWwtzUiJ",
  "key13": "56ZVecjAq7zAGhHRgyiSGcGizfWjc32YKU1vXgesVECDgTqKXhX1eMo1fydHdDNoV6iF53XBgoLBmaZ8kWoLWPui",
  "key14": "5dnBMMuLUXuRp5DvYoEDvHLbZiDoniJuE342zaRGZvndobUCYzfqE5wRtzisUdN1SKSgdh7M9acdNPKQ5Ms4GaPF",
  "key15": "66iPtBHpck6V78KfoNj3SANyU7bK6zsCfweax2iE5ggVmADe3AMDwQcEkfWZ6PwSdiaonjSTRztrao7Gpk9AuGtH",
  "key16": "3EPNuXVyWdn6YyAA2YwucLNf97DhpDiAQcubidXG47gpuUpALinSMfFFJq8MtXpReQiAfwbPY61CSBiAZ2GsP7Ec",
  "key17": "3n8pgMqVNim1bc1pd3gDfHDHKGrQWvHupttdr2jgVpK7wYbsHJn4znD5fJcrL1VfysgogT42hCnAbeAZKPtXQska",
  "key18": "Eg5JH7weTuF6AyBEfMwJkkff1jkp8Pi4YK2cs6cuzKTUVgGLvvWVYS3se2Z5WehfoXCWmrBbmoRwUJuPLPjcdNH",
  "key19": "4NxWtUmLZpTs8vKidVSG3JdAjEi6WznUPGRrJC5PraiwT7bSL7xk65QcDc9giu9VNcBEVNNq7SP2reAMaDxxoRPQ",
  "key20": "3JyUCBvsYWzuc2BLPgoLhjTvHaBxv5MXxEtKDY4k4fTd6pZPXiFw957AM1X3FD6uJGsiv6UGTMKBf2WbJaWcdhES",
  "key21": "3MN6axjfrMUAuS84eysSCfZMaW62GBvgfE33NfpAJQnoHgdd4MJKDdoLDPccCFfgBT6RHjhzmahbt7G9psH6Sn1J",
  "key22": "3WHC9oZN6n73LQH1cUpXdfK1Bv348qdK1c3B7BBNs3X8X7qspxVPGyCQ9TC3UfNXWFojiEtRGVpT6PsHudxHHJV6",
  "key23": "43g5S4Qqm3xoZ2FsWN8oCdiy2xvkn6LKCCc6S3dqvQzYxPRiJLGCyHmkugBxa9XYz4Wo7DSeAzDDUqgUhnfNMmU7",
  "key24": "hBb2J3ViZBWwQWLurkmnPH5PgHy8doXi31DSeta86dx1pjT3qCpzwqa3Wt2PKMP1PnvDF7WjrvzCM3hau351j8W",
  "key25": "5GfbWGcEUcTVFzvSbXTLZhWYsjumU7gVigDMTvCKzNrTsz9DNtPWBCA8FfTEcr6VtDTWU5czS7GoiFw459pWAgcj",
  "key26": "S5ic2UgUMTE7QZNrf6HjmHpQdRfrgkfUve1jmeS2uyBP2VD4qiDWaMd9n2B3QwWprAEyJfe6PhrJxe9ApL1quL3",
  "key27": "yu9m6TzsDDR3YoQ3VJXu7t6914tWE8ceh2vxRHWVYVQzarpgGTEj9vajwqfdzLvASwR5XwnXqwikywW2Dh2hzH6",
  "key28": "4N6Z7cNcj5MRyvT36uoKHAnPBU9zDSqetq5Hk2cjEfhMp3q6ZmN2Usd39nTrorBzSQQYavah39k6aRZ6noafe4mZ",
  "key29": "5FvG1fiGBZ8oyS33YRX5TPybACGkWLbxUNj7ZAYJfWGVsD65KRU1oZyFVY1fetyMogVYLLM1QQk5cmVLjddriEiq",
  "key30": "3CZUuyaaLkcy6uCsqYQsfw8zNCLgnGW3fFjY8NGV5NBiaDLYGVZbKC5tdbedevZNfeBcvRBfRPiQz2R6vgbdwceu",
  "key31": "UXy6G8DftbXgyE7XETRvPaJNLHD4YPhTevg5Y2Vozk9MnypXj7KBbBFLN7RzwabqJ7AWQt1CvpQFi3uaWzwNRa7",
  "key32": "33ECEykQrhW4D3c1XQ1zcGmy7DTjwCvXPm2mBaXDeZkWyPT5Y7aAN61p4TgdKdQP47cGyHHhCUFsaYBiyjU1AiWZ",
  "key33": "3b7kxyx9BA48jk1RSE8Px8VtJW2nkKyrDfP7YVXfWVFZLxicuqC7eUyt76EedeoELodLkVsn5sTKS6bN5hNbuR9p"
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
