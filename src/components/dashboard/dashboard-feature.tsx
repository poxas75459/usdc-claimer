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
    "5aAF7YnRU5KzZmNHWaQRLDBW6UcCu71yKV1Tje5634R3kTCAo31Pvje9E1ASULLJcvXGWdJ9ECXwaLW5oL4BvtNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AFnEWNHUBLMBMuAZVCegxTvXn2ue7CDetiMwqKovjcjreCwDABt5awBH7CGiYm53WfWunVA5P9WnRuAq7Df37y7",
  "key1": "25gJKCw2fZCbZVqTk5TziLW4jLbimaNNYFwYfiPPTueNw6QwgR8ZcBmKaDHdm5fpccUegmTenUW3F1SuMv6jo4Ug",
  "key2": "3KA7cj3Ba1ckUXP2gjAdry5WsvUguERuEWJzwPpcgss99mGM2RMvZsAum4yzgRXnFoC5dkkhQNcAfDptruvufqCN",
  "key3": "4SbX4xGUFtqTN7r7esSBrGLwFVybXY3twzKAq9dQn5iAam6uvh4Kpj5ZDMU5cARfqob9HZokKFket6WSJt3ysKxq",
  "key4": "3CpFHmVMFBvxTKZpeVCzDEQfKM87HW6aeCb4q2iNQV1YzENuwAGCWHuEzLkH1k71dMUxKg6yDnaPrAPRgaCW9Anu",
  "key5": "5P8moVpGEK9w3DQeFU5H1nfibNmwYoBrDf2FC3bYzPyiGUU9HGtCn81C4fbgTGfycsipVKggfxhSJ6qLEGcgUri",
  "key6": "3BCV8k1WADYGi2nK2qRj2gZEwEPWjxEkR5pDsxiqR3qS2XhtYsTaabaEP4X43orCzDdbe96TFZpWd6De3RqA6KY7",
  "key7": "2qSQ3onpLxNeRjyqhov2FTeH98gz9k5h679Btzcr3GTdJoHxcrzUf9P29RbL5n38DN1KtisToGgPeEGUeNnNuQPs",
  "key8": "4TDUcMW4U7WqDC1XPNSV2PLrDpU6RFFNyPvtYWZSF1YSLRWGMro3NsrEyMN4rNFYYL1vEDSBz7JDM1oSZsB9D7Ha",
  "key9": "2CTVGiiYbf2iQafCqmiLnWHjrRWRJyB27AftAxb7n458DnihxFRvCTJUrf8PGhwvrFWe9zDYWepvruh93BH9y1tp",
  "key10": "NGXo595mmy73wQRH17Bh2dKMiP3pWZtDNYzjDGKLBG3Megoir585Q2tAVupRBBFL3KQS4WBZp4u5oYgNaUkzZ7m",
  "key11": "29KPduDPeXaWj1YoE2nEwHPixXLdHqYVPqQt851CAhBUYLkYMdqFRb7oY66VmuVb2XJmNmgyPxoUPy8THmxUNs9Q",
  "key12": "zHguRd1Mb9Z8moct8Jko7YEY87mUbEAw35Xr6dDBLN1HwEKKcFLseem4ZfHgApd4sYDuebgNorZMR88h16h7om5",
  "key13": "4qVAw7AQiTF8pzES1yHoJJQYNHLr8sMxKUBbSbA8nbyWLXB7SCSowjqDmqRJqa2M3XCPRdAaeaSbU8puwa23xRLx",
  "key14": "3y3rSLyqW5F3oBMtzd4mmNn9g77Gzz6fGTyHizt3LGpCMKxguKPrgBmzYaXbPVsTmZnETzyopt8u1uRk7tQLqC7p",
  "key15": "5V8QXU7ow1Xfq4yN6K3CKCnnatvuqofWNXKZsWmwTM3pacispqbfLLZJNrwrQG3hkmv5Nr3Z9CLxHGQvsJUbXyd9",
  "key16": "odywaLPPCksm6YVf85EPaBMnUQMRoqDNktGvYsbJTr9YRNJrWMveoe8uXq36zn6MBUdQymUpEMLvaJkVfaFfAN2",
  "key17": "Ed3JecpkG8wDicBwiM3QUqmmHCB8PbTMEkmu8zWcc4WPtENQoLuvFpfnL8uPBToqkoNn7WXbDUu77mnL2asnfan",
  "key18": "5uaNDiLLMzyFarPewX1j4HpgDdXsw3EG7m2w9Loohahm5ukqnwGFWKw45qo3gTNXySXUDLeTfEiAoLXSosSMebny",
  "key19": "41Lpy8sP25DobVk1tyzZuMX2Y7e45YBX3xdELCzgvENZx58KBzVyBCHzQvFjuMUQMn6zHZxbG4S8EVphPaBpB1Cy",
  "key20": "3VfVjAv5ESMj1jEXVAcdkWdmjRfqbGdTsezkg6rGf7nwXCbNheqAhLcFF9f4yja8jDiszyBp664C7EfZUCFkm2EP",
  "key21": "KE56fiANXjF2DrhVB4S8arAvfWPZwKryEqhP1EqYzZgdzAokCJd58YwEE7qhUaRgXNqyJrxHuBDwQZ6KScsd15L",
  "key22": "LoaeTtDWpAinpQmMatxA3oFKbQRjeTT9P5MiSUVpBfvoSR1ruxxsz5GEXiUuTR5RpygrmWBSpwXSgFq5XW7CdPg",
  "key23": "t18ULeywXVJCHBgwkCRHzTrkSg4ZucpiixJj7W5gczcyBLMvg1uGgEQRbxWwttcj8boFgVWgi2fu6qJnWxXwUdU",
  "key24": "59VrLfBoWpFaGQdMNZXaQCpmyT68Lx9z8qvjeWM8vbZJKBFZtWK7wF9sCRT61pKpPvGYaMaJgDWawDKJQfQqWDYg",
  "key25": "3UZ9G6VTXzH3wAkZGYNdJLUPYwAbvhLA6BHEbnCHdNDmuhnA7pCr2frfLhn6KfNX9Li92c2m65FEXgyTtq9B1QVu",
  "key26": "3tsmPZ86DMgU7CehYNvZBhzMbH5WKYeynLS9HqgHPB7Lvg344gDfyMpuuJFRDWtYf4VcdoJcS8X5jzKW5TguiRjz",
  "key27": "3AP9fzrREd7YkaYzZk27dx6ziK75Vvgxphre6JkGewwfZk2r5fRerTtDaaZ59umF3aM9D3fAEAJXZ3aRwkGPtzkP",
  "key28": "4abb87gKtkVBjMTxoWzSW4zwo7y7qndpvsDPZew2snmNqAg8roSVp8KTK9VD5vyYatas94AQ2kBe2ZW8oRuKCX95",
  "key29": "5viKdg3uFvHdKY2axvF3EgtTPsq4Ytigepzf32MmAiwp6oAnKAcmpuVi2HqeAmgAYH1WY4869He6HRuBR9UaGQXo",
  "key30": "5TLeTzRxuSc8PtDzx1EVeZxuoBACRKwUoxkXBgUBx1phREwJxRGbRgK5f2LVj95KF68pbYacs8vjEPutu9e1PiTx",
  "key31": "2cRkY2atu17xT3pPJe3UQ4Mi1mAH8FH4JkiX9EwhpiTWDjGqW4Jko5HeQ7nxPTMQEh2HFMi67b4GMGr4jPTknGjn",
  "key32": "5Lc6iiUYbCqH23Fsr221vHBFGEMu2KeY4AeXHGvDjzEKWz8udgYq9GkyLBALKQf3fd27r2GNYdkrRuPxDefK89Ad",
  "key33": "23rygMc6SraBeFWzV1WcgC92x7ydph2NCSqT8prZ6v5TsGALc4MA3RukYxq9DaNWz4qdtEsC32QGH6jSLBVATxVV",
  "key34": "WgUZumtp7KAYwttGUCjHoTKbA9NvzM6H7Jry83PwXb6K4eBRr4hrzFXZ3xkeF6g7rLgVuEJZGec5TX5mYoMFw2R",
  "key35": "5VNXdQm1URvmT1aU7kUW6hwHQQZvN9qvbxpJnLKftMwJ3xfev7YqCafaQy3yLhTM522rYj6tHDTJ2HyKkzunP1Vh",
  "key36": "Fmk3xmVR1RFxW4zwFVH43YYXRMLdM2e5xVa31xwUoSVdTFRDomXP8gpTsaAk4aCeN2tZ6gbZgc2X2RGuFKmKeYc",
  "key37": "2Z1BWbPD4qxwkhvyeravDmUm8QzuUrC2HnQ5SYupVZUaaLBD7wEsq6cdE4cMdiwm2ZGsHzqTc4MLwDhNWfMVLvEj",
  "key38": "n2JvcWEEQoGry7VoEL6hdThuW6oWr2aeRYaKnrEWfpX9MJ8fi1MV2BdyzNgY38UA4XmUvYWoCdSneQrwHcJo2fE",
  "key39": "66XbmRrCWnAwPmwGDGc2qPVcEvSMne899DM1DARxDUUEo9KmaNRMiYNcjwMpw6xh9pyfa8YXQrwChKd1ypt1uYRt",
  "key40": "4mMET2ir4sEgRJTZDDBEFeQJyCZj1XGM95cBVcz4o6A2aXfYru8pnPFTT8gerUZXJL1WT1u9mGVRiSPwNaDLaRKb",
  "key41": "bVVyz8VXMZWiZh7ZkmVGuFTSRFEkma5ucHbgiTJRywZezU3QfW1z7U94yG4o1md2iWQuGttJEPVp95ckP7MNnQf",
  "key42": "5TvsZZMBbCtgVYMAihw235JttnzKsmbYJsw9o7JPC1hu9b5vYVNLtxufF5j7qgQM8cXtAJNhuUfDzGdkz4KBuJhj",
  "key43": "5jyFTXRqeDCPxQLHP4kveETW5Dp8PNQVavduZ4R6D8fZJ4FGYZwLdxmQCrGi2BXF5kPmZ2EbtV4hB2MuJQEcvDMd",
  "key44": "5buBerrwjEfbr1gJ9ahMDpRG5XzSXZ8PyPLGLbfKy9egyDYFecjKjLzMUED5eM4SPjyEgqbWxP14YGhVwpKQqe58",
  "key45": "3tPwkk1iQDaJ4MDwMstqJYYoQbph5k9ubtvva1ub66dDFKVtrzvp3kr5HMjagjrxrWie6zqk3c4Lypwx7vYVjdkU"
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
