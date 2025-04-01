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
    "5PvhNS9F9zJbTynHz9r1mSxcyKbZTtukTqcot7RujdhZn3dgpggC8T9gTor3fTry4ZCJdU5keyvC5iCkvU6YpkVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5df5W2maV48DJVmurZpE1hUtYojK4bpw14BDeXNbAWRsQNtuJaYAiJrbNoPdVER9vqGCLGP6ZetJVp1VxFqrSScX",
  "key1": "46WnC1gZCHU6PZRTuLXwEsThYUadyekt2TgW6dUQEzQEhuz17xfCLeB7y26UdcuCaNK6mJ8JEHS6EUVPLtokEMin",
  "key2": "2g2ZTqgoiVDVpmQHzTMRnoKCyFRYoZviPLazgicDo67DHeCLLmXynmSLEmZLRmoQ8W116nohsLwcFYTrHbhLJdFD",
  "key3": "4KEdhFLsFwvgBL2tv6rRDLN1knmgysSUm3MMUTerzhJbUSBGQDncjRksbUKmaHYaDB7wKbxaDhfDyajxWTBw85rD",
  "key4": "3qgNjVyifH1gxgyaTcde9Bq3oQWkJVpqkmN2P326dXRdKjWNk1s7ATC81GwTK1iEj1iqC2Eh8FfWiyXdrZDZhSw5",
  "key5": "5CmzbksV6wqBPyZ5NXXr6ShJ1sRkdRTcPMsrJkwzpA3JEFxYpzkfaQjcHLrVWoTkF2ookK1DD6rsomNjtCMp7ChA",
  "key6": "YYvh9vfqtn6RRLrWTmjszzP2xxi4Ykw2KPZcMb43aaxVrmnG8up7d9zNrab3QsNHmrPS2i3JpWcwaNBuNnmP29C",
  "key7": "4efcy5PkJffrMgxcuJtZ2vWdKSMgTosPzk7CuAx2JCvLFEJaW8JuKv1ue1SWtUY97pBMJCvhNLqJq2umawQxs5Uo",
  "key8": "4SeCwWQnPWeKw3YzM85wos7A56kMD3WM9WsZmsQE2VGYQP21XAbuKaZepZzhhngQqohf7k3kgzKR6ZiYZ7VT8Xhk",
  "key9": "28j34KFRck5rCyhKiDpWf8g8Q4jBW7GsKfqCCj3G7ffuvMP6a9wRjgMLYjkZqrEzj3o9AFkYC25AHFrxoshLuqQu",
  "key10": "4WcbL5Fo9YtsSFWMZMAqAmHd7QbimRrF7cckCHDiBbFCmbgunTGm74yt5VW63eZ5PehXkdPxqWP2QhydN1bSyCPo",
  "key11": "3HdWjJqhWjEgzu6P9JnwtjheaVE8MbXGSs2eSkz6NNGvq8iXhsxf4n61QVSKThnNQjajbi1c6GQdoBkT5V1vRaJE",
  "key12": "46cvhzAGaAjnhhnPjkfV5gS6QafiFXUxG4LP34zsxe7jpbPC2AthbQ5eu3ejQqoYjg3dvVBB3XbE9JzdXp5XEHxg",
  "key13": "4HG76RxhAkA4Q4rakoVR7u9YJR6ALnxHADmbUmQqyAtoWxRVUhHMU1L5DYW2mpdMGSGqpZR3aPxmMcvWxcVSKCD",
  "key14": "4HgR5iYuW3EkjwiMpRV6aqF2hAodMp1ntNBvgvgDmTp2jxUNxpgb8Awn4mU7EWuGpKQevZRyL9GifiVTuGkxGkxd",
  "key15": "4GySShjQmoGcmtby6vvCgtDZHJ3tLHYVdeuxy2rtrXhLEuWfVStmGavjqtzYzsuA5VJM5TRBqP4t2KbD9Xw92dDH",
  "key16": "26eWduhHf24EbonHM4X85NxCPr5HxSjY85HyTB5JLDSg2A6TnjjryyMHtb7AaQrqSizLtWoxAvcUKXkgsm8nwv9j",
  "key17": "2EMqFCErroE84njNqp6UYnvMDxmyGmZM56sFekuPgmR5ycvnjkSpgyGid4XXMmcuuLX6gQJ6NAm4JRxVNmdqv2fy",
  "key18": "4mUTcsDkaCm1JEFmcuUpPyBLXTTeLsCdgUgY65YSLbBx1tWfEXG4e2y4bqWUbyfSbTPAhQE6oRnPvvbmb4PHyU6k",
  "key19": "3z7zBD3ZcshkAtC9ZBUmZGuxHnCsZfutqn89CX2k6395S9SwsCEubY7tcVpQkRs2C8RfCqUSzmJt8UfYPuNtSdwE",
  "key20": "6HpzFqvFDLGVbqFTJCZbNLLrMG5JVa8ToXo9VNuZgaXY6fAWGHNeeS7CR3MuyMazPNDwFybUsXrBFeN6Gnra4Lg",
  "key21": "3o8DbzQ2uZR6SPeaJUwB3rgre7N9BkMjn5XZ4nA69QHRLzpD9hGsoYehQ1DipwGexLBz12nuPiHDCb9pCk3EsHdY",
  "key22": "2z6Cr9zptSAauFJECfd31Rk6wuoi4XsnJp7iqxcsDXxS4M8mDLCgBZzScSwmcNaMxmXRkWcpGVPB2P3AEqVWfeEu",
  "key23": "WntgvKhL8X5BsPkxmVgfSH5ANEecrkaARodrpT3Mf7Uco5V4YmCYoQsGRMMz4Ga5ipQa9wThYD6xb8UGssNUdjg",
  "key24": "5Ubh38yYnAV847o7K5x7SSbtfZXZ9S91vnsBd7jWjuMAUn5QKDbVmdADjBcCNJmu7QCqJGXtq5txb8VSRsyqGtG8",
  "key25": "ungdqJ1QBkm9zVxhkq7L6WK31rHy8AoPXFQK3m2mHq3bPqs4Ac4tYRS7t4jm8eaZMuZ7NjGUk2kFQhLs26MBnVW",
  "key26": "4b4Gv1qxyZvRhSTgyFTdkZMfowA8BcKNcXuza635YxuQZ695dDtQfTvFqoHftHSE7J33bfgYhCMPPL8UvoXs8R3z",
  "key27": "4nkkqzTBLyrB3ZFmGFsqWSp1ZDiasdTFuVBERRLtrUtzE2vPfoz8wMYAtYynRSenqPABkAFS94ocP5zjATktDTYw",
  "key28": "5WBiZ1Bkhxu2TSMqWUNjCKt2qGrQHQBn6kKrZCVrnB95LqSZJX7bxw1Rurp1eVntB4N5c6FjvY519d19w7CFjxEG",
  "key29": "2KM3j41Xc6BpyYsYCxBGz4MNJ78zAJ3BCYd4Wn61UgoJBVN5GsFxrww37Z64bJnoD9SymtUATHnHaxKALZADB4Yy",
  "key30": "5WLHQ8rof5YBiR8iSaSbLHpKmADUjVBo44Jzx965KSkeQMPhqwbbE7bqzsGpUM7yL3aMXTX9T4uRQRdnAJB4XSzf",
  "key31": "2H91oV61Z9GtyTkeKs5qrYuaGTA9fpSkRaR3ZHk28U3eqLMnuPzpuL6jPdaQDzWVuLQskKTK8nFTJVD35GFzCwMc",
  "key32": "4QfZRSBSBYvCgUPi7L84vmmYhGi2hwnb21JX6U4FAemzFYnFCQB7JEtbFb4gfCP3vuEwJ7U9JG22PYjWFLNaT8SR",
  "key33": "4PDiB5yoV121QJLtY1tte1aEDNK7eahQKkimpXv7TS7BqbihtwiN8wyUnkrHEYLzFJz8M3GSJTaiwDphvk8K8i1s",
  "key34": "5DUxxb729JvkbTUzZYnbAV1Q8Ty5Hx4ZiGvu8ep4eqjpB3UT5q3WFLQ4b9ejxTnTRt65gSV22r2RwM1kX74XJYqF",
  "key35": "44TcBzd1haQcC185f5Nu6KXByFiDTdZmDnMt1iLPqaWonrhmyopL9Vb53p7Ta5K64nijVbW353RpdvphMjiQivGP",
  "key36": "4HYfxkQBbrN7UNcoRVqexYfU4z2yygsQgv9XFaQQYwuipTBUr5R4mpi3uhXWoU4tejCX7EVENS5y7KgF6DQn5GC4",
  "key37": "3wwCqVFXtB5g8dVPQ5qBtf9Yq5nukD3EdziSJSyG7ayHLhtzY6HGKgB2YsPwDZW8E8dqjvuLQWndqSggcTPhWQQt",
  "key38": "HpTvb6r4Ybu48DoLPSLmGfsKiGuqBLEHdJFHw5oJFLVSWGeJgp3c37XWjo8Mvi6pTEiyGt7E8aStkkcpMf2c8zp",
  "key39": "5xDyJPwYJXFSV8feo8pkDfvxnBNwVKt2V1cyUCuX4FuAdFEyqffpqurNfFVRxyXosShaj5a4UtNTYv9ZbigixGJL",
  "key40": "5S5fgXe1de7RSAAFNTQuiGk2kpU1iCR2kcHZ38jiNHFf98q8wXfw9GWTsJ2Y2AFG3ZXt2yr6mCMts33PJPf8oJcw",
  "key41": "3egzRnrwpThHWCUFwGGVbYh7o9A1FRcCiDBWj6keJPdsscVY6fegeUyYXP15Y35Mdo7HCLFxp8JQSCmV5m8KR22a",
  "key42": "3MeMgTiQcEVXzMSZcWtzHiSQecKgypaec1DGpWVQDXo5mko9ExY4G5UQrYtKP4f7hUebDPt5GB2NiyWrXd5ExiAb",
  "key43": "3fnU6wJMoc2YgxY5XDxjGKQTbce3dditnADLFXmy14QsiGJeZQZuEWLJkDNNFnCQwqHZPptbDyJ7dtMVRajBcEpt",
  "key44": "2AoNawNk8UUA74o2Nj4KF1JBNPCi5RLLWhLwAZVW53nJ9VWbpq3cGJ6993TXc2KVSpZZqsW7pcRPwmeopP4R28dR",
  "key45": "3RryRF38RU2bpQFoEV4q4wwqQatx24CeDKAe3snGjWhhKzGNbTQmvZoTwR5nzUX6fsHuyJjvb14CFsJgYm6itkRq",
  "key46": "3317hZUpoNWZ4V4FAfMsQmwBsxWzuywwvSEReZsRdMeqQSHAFKiqXfxjEKfUP2FrMhy9LsQiX6JQchxoc1s3WzSo",
  "key47": "345tUnoJHe5vq74KbyQsnaTAwup4XxfijTee9aMTMXBH1jtM8xtBTijTDACY6qAnaJDUm7s2bmSa8mzLv2hzCXhA"
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
