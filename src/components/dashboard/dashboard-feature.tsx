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
    "632UrTkfSaMduhPMxaMDGECHmQDqZNsJL6EYuyVwkyCUTLtJL71wDXu5GXAbGTCwExtbvD79t7n3cnAjqU43buYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AoSAUPKWDZmfwUJhVqqMbvhqfKomVKDH6ech6mAPkiWVGqwiPze8zRYg4bSwCP6SvBD7Zuq2SohVzNhc6ZMXNzn",
  "key1": "2Kc1VPAsege7MrFTMHpbSdyWT5H3ofb6VPdoWH8XT9ZQEkHodMoriFYNJkbNC6gWriugzRhVeb24C95hG64mUqwU",
  "key2": "jWiVgKJvquy1McLZY3NXYjwkrU1cjkUHsjCDCSDHuEsqFR9SZNeFWCUD8pBBD3jTGZ3TYbW9nZMdcDSrqRmkpto",
  "key3": "22F8waJsLyv1sEHSqRMq7Z14dDxd9XDeKVHWdjj67KBuUzHVZvwPgGBHTNYtcSJ7zgRYDvN3fKMqoxK29gtGLAHd",
  "key4": "VSuMrAjPKn22khQyyzHSNEuMVX9zJ7yxnum5un6ncNwssx3XrvLqFcHuaTfQLYosaw47jMHzXYYcHeUPZ2hpw5t",
  "key5": "2DZ12WyLW3NZDs4VLsXupp5ufpKb4eakkfWcYc7MTt4xXZ98C7AGuq56czWL7Nr2HRfNKvHhZv6qwo7S7M4dcDjc",
  "key6": "2bog6eWzcD8VotMkq4W3pgWaPrP3LdhViaNCtNyRxbiqGPMw12FVZgkR4vdKPMNXjMpndNKh9HMfZReoUUM2Suyo",
  "key7": "EkQtPtQMxY4rxxF14nncRffyYpSGo7THMHFVfmrKh2ECUDqmSe4LSgZNbigdrsLRoUJmxU9mxPToxoyc7oBEcDU",
  "key8": "ZUfEsz2Y5mWsBzj4iF1xgQ91CHsCthLV22sppsG11PNXWAUTjseLfhyXkRwzbBdEagQq5xYi1BHNPCxqM6RQATF",
  "key9": "2V2GMgfAyEaYaLB3bnpEHSSkB6L6wLNFWxAALqq7EaBGkAEfS11GjjJ9DNZ497VFwUU3aoq88j5dCNyqfKar1ids",
  "key10": "5ESgjQKKzGGC1ZJvxDxWSy8aZSaNHMpwHR6wzj3DcTGhSPK6W6BhvTWkGE128Tupbsqa1hkkrpGoKyMRyp1iVFXK",
  "key11": "4huQwX3pNZG12pZxB86LmEdhKxdrmCLmMdfaFzbwpKVEnBQhrHxLuEpGrr1LomZhvfQAM8KvffsgT83989oyxURg",
  "key12": "5gnBAHqjdK6nLcTDutKbH4UzxFzNSc9DoAp7a1JpSoi8ouQXddqJSt6tNcuWNHUu5b95RtRK6D1n9Dn2oazZJLfX",
  "key13": "26YVexaxFQrLL45T8d6yowgJr2xSNzDLYqfm3Hps8HQmostcCVv6Uy9ntveYJpUWE6mHryFA68SxgxiVvCBiS5eA",
  "key14": "56U1YfVXgGXM8cYoXBzycQaJTboUrezkFM4zqQrmTEe6LdoagtN1QCB9CnGWbYVyYkHCHJZarEtJufP5cVHSjaNf",
  "key15": "3tZtzSgKyHAeVVEXX3bpE7CECfBjgXjEtHzYLJemwdy3krtnMVsNnh9F3nwjVHKRJNKXAWiRsg9uz6VP8dWguDMo",
  "key16": "4XGN4tC7UnyLv3kw7JQo3mDpFmL4JSSiivZqH2C3jCxJ749Sj73r963bmoHNre5rAS8m9NtTzxWxXhVtnaJHvHvh",
  "key17": "2rGqr5rEg1i3sGgUYNzK2jEksEj9Mb91kEKw3G5wu93K1SzaP6buMTMXXkXa6Hrsmq3j6gorQQ3yiEtPKf8GeK9y",
  "key18": "5YbiooBJrRgjCJQm5WNAq4GVQm8MvitfU9X31zap3tCU69JD5AuzfkEK1eygAwVVDLF79BWmQipdV6bkY7bX2s7M",
  "key19": "5mAP9Nvr21A4EVZzYriHzUbv7QvYt6LpeykdKeWAcTrgWPRgQa7wKS1uvL7MQZfaNdBADVAwp8vRrrqm5hLoMbUd",
  "key20": "5Fqfm8HfbkDFWf4yqtbWmKq88gzKpGKSAEZbdyeC4hpD7wSaSyc4HZvHuNZkoDaLTw4o8LtKFHSVFB2dvsGFRs1",
  "key21": "HMxhPvBBEtwZtnkStxLqspYodumQ2GZ7dFFD3ncNXeL18sTFqosYdZKeSgT2Kim7rHgvawqk5MvWcBwtEsg1XoU",
  "key22": "3NvDrGLqCHczeUP7c1yk7ph35Vre8pMwmhzGZhX4HcWcQYearJEoNVGveYndyKhVZPTLrzFvE4DMgGhK3XFcAVWo",
  "key23": "H2g5DZU8aYk4p6u8kFceR5oCMnrHZpYUD84tMGN55EcoehMoD8X2p2Z7Pm3hd1WAr96wXgkcBGadGKT65YJMHAj",
  "key24": "LgF4XU8crHsxGoWyj7oqXSgkx8g97JoRXUXZRDV2rPTiHJGtw5sNwjzKUy3TSH4bKfnErD8SaJTVkbDGHQc2QL7",
  "key25": "5AConsez1LybxaGS5TUVAzJQUSfsxMSUkcgzJkpov7DwTaA7GCK2fgnWqWvUJ1vLXnZbGNpxxUeMPD8V7T9N572s",
  "key26": "3Gk5u4ujM3e5GpnJ236nSBTRnywRq11ULBXQpBNZ545GMEHaZa9mrijZrNujc1LTJwdYiUS93bQ3pc5ynVwq1tdz",
  "key27": "5oDb8aMNC9KL8ohy8bzFvzgfi5jkuKsczujgKmWR2DkJUP7LoUMP747GvXUWXdNdtbUTXhjvT5ViEY2X14BvmpvD",
  "key28": "3nMfuVcBcjFKkG5dNcuWKdGF6J43RawY9LvpWcNV8J7QQPHPgWVTKZ5bpZpvBHoQQdtpmtd5XBoGZVCmt3RLtnM4",
  "key29": "3jNsBY8qcsLL3SJNfEufKRJXzFPxdEQfGKpMFt584zEUnSxavWqgiGuaoSsWePsBkjP7x1rWqtTJMaUjLZiiuQ6S",
  "key30": "52SU3rEEtRWK3cXpC4grqrjZnHH48ZRoAh6o3pY3RwgLcsXwKDnfnz1aStDHr2LiyVBCtcyhUDxpnprGaypS69UB",
  "key31": "5xTi8tdE2fayH87Z6KHNUcNzUcPfP2TorU8e7dPPe1Meihr7D1TqYXr1WL4DFMrSn6Pvw9AxKwnAqTdYR25czZsG",
  "key32": "61rZtU1WZtHp7SvZaYrYkFBzw9xUJFMP4YVW1kBisV37XVCM94VWNi1hWstWsuSKmigrfLaVXLBDBarbEodR3DwV",
  "key33": "4MFBjYXGQa3b1FhdXfpRyvuUNG5sHphGALPk5T7rkam3D5z2hH2K4HoQ2WHqDHo3esRaXDUWGE4T4n8WfFZMkSdA",
  "key34": "45STgd2F32tci29npsQvpcERUXoe3FJQyu7CB9v3xtyFGuaGthHPfBQBReeBWDtpccjRgiWeFmsFgzTv14shEr9a",
  "key35": "5RHdDcvKPvxqRz8kP2iXRKGPmtZPLYFxDD3BtLEmeEVVAw6NMV9zcovSxkcG5SNRGcjKJT1wL4ugBFdUeUsKfgCX",
  "key36": "5V4cAn4Z83KW7NqHN5XsJ98eaXfJKfDUCxighXnJQkLbHXahVFJE9LHtZu8x1LMRFgUpJS8K5u9Rgy2N1vR2eka9",
  "key37": "5Rex6RYhwMyhn4rGucvsyt2jJzaL1MobbtxABnjLHqmKHj4xXANo1CrVWc9aRdzHyVg35jF3sugkjQvfL3cGhp2c",
  "key38": "3wqaP3gkuEq6iWpev6gF1JugpQYbWqeoYE5sjGXrCARzyLsZ6Z6P7Zs74ggs2bowyLJrXzR2DHtM6shnSd7dPKmf",
  "key39": "amAgTftqEfoMasfV7mq18ZaFiDWDwLDeLywbSzg4UxroZVPgM29G829EWBdE2S1s2rwTftDFE1bvukUxcCwRore",
  "key40": "4b2apmgfoTCjRMEfZ2pabnUKEZaVGWSJvTf8xzLgDc31BTZb9w62Go1BgFHwrUrNzR2jWbCEyT2QMt8v7CPRAgpx",
  "key41": "2Gw8oavGobg44Z4on29TGJqkwM6Zj1B3UYoqztACkgiW3x3sh6MmnmXKJaCTxVaZyHaDLQgogsEALQCAE5b2aagC",
  "key42": "4B3GMkNndmhqyCXLHRfR6XLwq1HmRNv7oyYXsEN7xKUnCutQ8s3uEeTfABLVAL1irB7A4NRBdDjAcs8DALZXn7TX",
  "key43": "5xpjeqbXzqNsLboAo1c4jP9a7gCTQcWC1NuDEJo79D24KRtgGDeyhanjK6vnQdRftXRwTETs2rbWULWMVrbZZKH5",
  "key44": "4YehXaebrTMRhi9HxqUmDNBJvUWyjVeWZtDHFrmhKkpbqsk37DKbubRUjyYtpyAKyXr33V66ynLmEgSqypV3PPQQ",
  "key45": "2PcYGELQgugtrKL5EUTtQKaQV4fEdmETzj8tarz5hvonCNuRb4XtUcpYbq2ERkr8CrKS1mP8n3qKSAc4ZGME7Qxx",
  "key46": "55RsFhU8nPTFa7d4ZZYs7PJmhXwc2MwmKcNyh2YiduWEb7i384Q2r6x9h1uzX9HfbgFNfSux35xB2Tp3CCSUaz8k",
  "key47": "4qJDVqq7gyxzmanwkQacGsjLKSTysYo3zNc2BWCEDyxaxAVtcG3nFW36DC7GfP1iYL6LLVvQjFhtPxbS2MxkTnY7"
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
