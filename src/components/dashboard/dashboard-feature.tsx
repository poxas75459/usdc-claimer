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
    "4iioHsXmMs9mGEgEsUAyc76fPuNefBn1drwu826BaiZMB1Z4npsFy5NHGfnCUi6qiuvPB8d5NqyXG4Rxyb65JsPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35RVrV1vF51uupHsagqDH4wT6yhYjg1kF1JpDsy2heAL3Zc1WnCs9rjmZoA9LeFrdqYRFAhPQpvjozPvvWF75Hhv",
  "key1": "2rRosUCK9YEqbQVucM92FoXbk6LF2mmckt3KdjXjqh5tUZrJQZHfBZdrw4aVHyMpdvdcGYAqgUiqZYFoDkHxZ41H",
  "key2": "4Km1dzthhRikavuB3Rw5QiBR6m9q3qGGNr71u4YVPd6c3iYAhsnphHk28DENbdqkYrY3QvmnnkXUJLSYJwhas2z1",
  "key3": "5uPgk3yXXgr33hJLKL2k5P35M2tEnvqdk3NxkvGJSy2HSt1RG2JBampUX7x9MneYib2V3EphgULBFBkwhhQQk7fm",
  "key4": "41pewMvQwGuBbxdgBh5jnkh2LwLf57XJEWPECBznvsCGXDgRPFhnxn6f6DiBaRsPdkoneJLB3LqxP2mcjrxNYoNF",
  "key5": "4biRvkiBMUePy7QtLZEJK4bMgFPzckTQNq294LNBwXHsAmTchrR5RgXcCjjdiW3xrWmpfU3ZaqUxaRBukWJScNL2",
  "key6": "39cCUnw67eS3jT1nghm6kVaJaD6CysqAStwTfRzaUPgcLdf15JT96mUL1sWUwT7jmscaTmRtQLip181FcQXNwDuq",
  "key7": "371aoTTygSd8vdpui2zn7knPZDqz3hfzanQ43RZ1Zgt2RkbnFmzRtYpUey4Gz88g361RNkBDdduNQceoLY3Sqsf3",
  "key8": "8cNMA6qtF4JFr74ANxSHHXnHTGZNUkkD5ebzpKTSU2i27TVhnwqFvWUyR2QzkC75LZfHkNhKpXwFEojiXaRKhne",
  "key9": "294PtJTvi2M5nrWeSa3XkMUBJoHwKYSmhBHoChejg98bDJ4YyZSvvRWGfyVSpRaMfwbjfMTdDUKE3RsdhDpvwa3c",
  "key10": "2DHsMk3aRcJvSLfzoXYpvJnpM5qzZMaS3Huog3iGBt2otvXdHXfcyPSVkJUMxfmpc5xE8Y2AfPLFPmKLrhr1zjZr",
  "key11": "3PvJSL6hpr9oHcGnyCjd3rxmhiysJSJ7XMhWGKNyDsmdXVkbUb2DaFkyZ6xgPZHyBauivRNjofFKsqAD726KZoBS",
  "key12": "3xMMEqicdrUJ9stGY6HBeRSHWSzQCJt6d2r3mddndhugCPyXJsYe1HBbV7B2ycqhQiuiE1GXVv9dSwAsKV8i3aUc",
  "key13": "jenAd4mb49LzbMQDj5k53mB1gpcrqNQCtty4fxcdTNQtNGH6pSwhoDHtMXuHYfA7EPc7oGKHQKMXKRQESuSwsHi",
  "key14": "2x7wWT5g1CKfCtV4LF5DwPFpbwTDTxsMGapQcvqpuv7i7Dco8hsfFQZtad5eyoJtgMsHo6ocp6TPuEpqoRQCX9US",
  "key15": "fN55kjgQqPt8NhHwg3GryNaZL2oChq2s1iWTsYqZnWUjXcpAHnSSF7ZGFpSgR9SySdDiDRhtcWaSqDgp6MZnCnH",
  "key16": "z22W7PfX9XWTxH2fY9ctpRutRisEwsALTfccjScgXdhLbTXzFbgyvbLTg795tSNZtqxbYwEsSmV51U28FroHDKK",
  "key17": "GxMbXpYKweAmApCr4HmPnHkdnkTw7FkLRX4xB4B2onHT9r2PmrrNrtQJr54w12oKWejRzFH8Dhnuri2Dgmiea8A",
  "key18": "G59xiA1L17zxwLefnJdE7eGyujDPtL6EHvP9acoHYCY41htyTkdaBjJZWg6jdVUkAZt81C5decskuaiD18nGK36",
  "key19": "4b8WJnoZiukaRoAvqvavGginF8mbNzGTdfpt6tjJWhbYn5xbFgxfPPaNE9xzaSbVrhUeCMDMi6dUmQm7mjuYaNAD",
  "key20": "7sMdf4paEPYCcYK8qfYTGYneWYSYf97GgDwbgG2V8SafEfKMMeJ52JE1TACDKwoF86byAgLEk5X7CE84LzdUG5p",
  "key21": "2n8vR3wUfjLJM4gQauCfF2V3r2HW8JezhFgWD4t1sufeFRqRbFD7ibAhY3wH5mmkW3WgQoYVzyU1pYi5gtCRoSdH",
  "key22": "WhQywZw1CaD2DLu2G7W3os9wriASxnwTV7W2pWjxb5J3upkGm3rqVnVDGz7vjAzVPFGuSZThweLcsxNC4Q8jRRG",
  "key23": "3QSW3zSnbhzYytwp5uWkgVZ9cXEU5cz2Bg7gHne2kk1ZxuU1QcidNarptyW3PJHMv637Tqtb1FLW4chdogx35XCE",
  "key24": "4y9D15Ce53MdLMb849TXzaayZd598ix9cDDoHnrEc4ZXHPPntGKrPtGgWxMk4C98JncPWm4gEXhWEDQEzHAARFQK",
  "key25": "3kRhdtW3yMFRkdzfHwVBh8pBTaAyzEWTomrEdCQADZ3wYw6MrmE8FwvGaBp371jTfChGffkZKyb47mkfdDySgqeT",
  "key26": "3UrRnAK6ssYejT5GmMCtg6zKPS1s2oZZxeCYqLCALZh53ys7NphLZEYefHSmUpBeiFHawXt9mosWPSVRd1XM8TdW",
  "key27": "3XvMPGpS9mSaEZhpYqi6Dn7GCKnq86EGdDiMqaYwdmvxv8SkytZPGUkAjkycBH2PBEuTK9Ggan2XC4bfX4kA1tRA",
  "key28": "2Lopxoz48Z1wUpKcimgDViBF1C9gN4XVdguAR9hbuAN1S7UWsWjSrhh4uSDRgqLH6Spo3qBgAqonRLh7kv6uaE32",
  "key29": "289zEpTpYm2KEAHXBaKhde1Zr2TgS6WJgpNuFpaUKnJRhJj8Am7jnKyxzW21FfUerjLbxESBBCXzmXRjTZ1xbZDe",
  "key30": "2Wr1nDeXwPtMw7YTioWt8m3VVfuk3F74vSEhDJKyfRyoG4BbFLnWZxfuJEoL2E1GWv3YZs8sbvaHD4R9Gn5ENUNr",
  "key31": "z85Dw9DibZb6Ycf1MTLaabZLrC99oEntAKd86LiYeTxXHr7d95dYpMnrLTLa7jS9DzC9EuYcLoCo9dxnwTw33hX",
  "key32": "3Nj7BMPrVK5mZCp49gzW9ibKQQnv9ZeTEDcV69fA8gUM3KrbbjcnW6YGY7asMShohNC1yPsn4sEDUmwuhmp4ikFT",
  "key33": "5SZL64nF7uGEm4m9fzxNJKfEcTaT56TMiS9jp6kQ1ZCbSmHbXWFbBFzw8LDzsZX5zmT5TPy7Kf4bTGPtJfJU1Nev",
  "key34": "z5HuUkRuzguczuRYG4AjzDmDNqBWNkLfZiGGqEriCTg8pCM9rby73wRXQxSMc4E7BDj4YqMDzvBS7gv6YDNDT7n",
  "key35": "2RS6xZhoBRv1qHtGUSMrNPLDKa1hQG8CmYbZfykiKcSKsiz6jB7d3E36FTqZQBf5iusSzgrjdq62AfhuzJJGbtU6",
  "key36": "353GBfWvq9QWGJnD7Sx7mbVxuPzVzgcHT2nWLGKXwKwVVHiTTw5Scf8Kw6U8SGLkRg8aBqfM7Z75HNFjznf7Qngh",
  "key37": "2DnjDgLhQ6R36VMDec7bGRX23wf3mRmVc2C3taTXqwxThReVCQR3L8PCwdcHjvdjoxhL5rSxjHAC4odDzaaRRHPU",
  "key38": "2rutVnJgiosTPSzZCQBjjqYu7UxMAKJfjATkYu261PjMpTptpBBaYYX6GcKiWvqQSbb2byfhYcX9Nqs7Didxc3k1",
  "key39": "5HjmtqwKjWQ3tAmkxALxed7i4iicW2TgoBxKFtKnHbeMMpaPguiKkaqrYzNhDVVMn8o31SVUAcDfCn8U8jbNEjJo",
  "key40": "4XKJj1ibFPsBrCdFGMJXrE3VbeDZEWmuFYXFKijykyUNN5BizwU1RKVWj3PyLTPd2D12wM9kC1GXaDaWorbZQ5Z1",
  "key41": "4QSB5DsCdCC2VL2CQKFt2xn167rLNkjr2K4qCynv5gvixFSAVk1WGNFdXnJckf3CzEt5nv1ECcUfwfTYTi35W7Ut",
  "key42": "3Wf2WPTNEc7Jd3XzEdSgoB8ivinVycqJYGB1xSnoCRXVMkX6mhP9joZpfUL3fWooSEqUW6V9uBgd2rpoJKGXaiPF",
  "key43": "3eFGrRWyXJAfEMxXVVtTdRsKhybZP9qTG57zmtRqqfQKfj8YfqvAGn4kTTkTpqdXnsuUTmm2XQ9UE4RqR19eJVCi",
  "key44": "65qe6QNZA9aiP7uVJrE4ZmH5JKdxowUqBFdMwEcirk1d2LU6isbfNRUeYNGGjoBNwHgaG2hQRpMtSiTpnjfPNYKf",
  "key45": "dPRk55UreKBYoodVsy6sTRt62VktnsE9k799zUTzVYAoGimdySJntPrh2Cvsc4xhQQceUa8iEd88XYWm2DuEgMA",
  "key46": "4wizzq4WJ5wKhWbcE9nQzBz4TAYPcndUXNa7vAb6M2R7dzbm7DHA6sz2yrVa4tXfZjk5R6pvHr83UbmXbvdXRM5F",
  "key47": "2PEBm6vrXKhQvj7vsH8cs1eYhJZMVW1HcrYUnsHCHU8uA2ZWHhVUpK7LMo5mRXgMPBk5fuHo3KLUQEZJfzBBW6Qq",
  "key48": "55Q1NLfzRD5aHuiYhF6BL3ht6ZZudzCZRV6mGNfikMojR6moK9mHTmZMnjpPhc3ZhCFELaYadpQyPkeJcUPuKAPE"
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
