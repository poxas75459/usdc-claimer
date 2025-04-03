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
    "3PpwzgEQzF3S4k5ghZkQhP1f68PDE5PwRh2jG6c1jeo7E726pErRYBf6uUcTed8aBEK2ABfMS7R8yUyNmrgkPohW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n6W9V3MXUiZTuPUUcJBWmnUSVBcARf1Yz2YsJHjPr76zpFwLaTHZvNq4dpNuk1VfvwH3WvaWRJpEpBASZFfqG3Q",
  "key1": "3APYXCgPpdg7zyxjZMrNpMUcRMVUfUB2xvvWmw3CjZx6bSTrzLKQeBfCts3Eun2k2eDzj4ZHJWkEp7Sc8EwK4Pvb",
  "key2": "3yVKdjPPbTzAuxpZQUrwLmcfAD1DhwcxSbHQeHuFrpko5P7trKKYGABN692bwFKXpqGDTaVeKTHbGmfq7CGzdVSm",
  "key3": "5JcVBLjjc5q9xtpHcLmouTPUAApDBcjDANVvELmPDLA2GjbYWrAoPmaTMQu6w2z4AoeTVc9z4uxTjakB28GFrZEZ",
  "key4": "2LnvMBAmjYQTDzBsQc96qeLA43UMLwphFacT1sWEBSnrvnhdGYfY32huS8nTSc2reVoHbj7wHDPMi1ZVGCsnNRMv",
  "key5": "G8gw3RmY4tu7hkRkk6DLik3uAwN568hLLAs9cw6Qx7GFC6j2RSFNwhi869CPzPWXcbb6EzhZ6ecoTWtqJxv1Eyp",
  "key6": "4gWvBjJfFa9u7JcnvFVArLkWuBN1cjfucNfYx37fUquf7jnj891pNAqeUgD2HKCjy1CrqF1zVd4WoZpNrV6edPSm",
  "key7": "5zFRjnxq9bBZtfcGDgt98t9h2ZJUS7GhWRQDpViggzzmWdjfvohUakSR3v4rt4qcZm25iAcxdTctkBgmAbPiF3Uu",
  "key8": "4QmKcHgaSY2QEYregdNyZgrKAWvRXFEHyWNpzBCkinzGQRvZXoigC1aD7qJBdTjiJurNfFizsiTQWnPByXfkxXd4",
  "key9": "EevnDbfFfZM4iCxha3vDsj9R9sdsWUuStxCyB9mWA3Fs1vcLTLcL4t2r8KCaceQCTwV5pjFBcHvc2jLGWzGxxbW",
  "key10": "4b5rpRhCmMNhe2osvntTL5hrLqyq3FoabStdxQLe4wC7f8ZtzhDYNQZt7ZV88yfRzYe417AV3EvnHUFaxdc7jB1b",
  "key11": "4Q62z17iWMfu4Qj9FoP8FRJypTQWaD8m1VMhWfbBskLjKPaWof9n4gZTYCuL3GA24kS4uQ8quR3rrdM6dAig4iJw",
  "key12": "53ZkaJ2K4QKbbte5RjWv7HPQkf4x5wm328GeK4rcfcsA7fYvAErWtMGqU2fSLUbiPfJ6NeZqRAYet8eAUuzoQKiB",
  "key13": "3Jg8DYiHwKRfrFDwGboYXpMwaRg3VZkbS8rx4B3MsAzno2zZ9gTTtLW19gvLTgpT7Tyw6JsyJfqTNXgvAoDwzBLz",
  "key14": "5UyZ18rS1pjkFX8FYCHMiMPe5sLDUsWWyYP2nPEFndkgD89j7mSjpJPeqE3Ef9PVcwkRKbTkdTWu6282sfQytTFy",
  "key15": "wvBA4EBmcBktu1YeQXz264nMvXYR12CB32mekAfhbg5se6TB7cnsPvt1KodR9NncWWgcDn23QSmALp7tMd9S29v",
  "key16": "5yBzk1D9AAwJoQRQdJMxr4cagU5i7rk5v6ygJ5rNvyRidUXK6XqsXwjD3gdmNzafc3dxG8vTw23Ri5Emu1au3hr6",
  "key17": "5APcf4sNBxYDVAxxX7uDZ6p7asV9Y4L21Tg8T7zX6PAUuxk51kCA2zfq6av52xFcYitmEQaoWE3ebWBrGPnRh8LE",
  "key18": "2m1xc2i5TX8th6Ny74KjjcpPn2MZ9EbJUhF26zqgxvbRKmzZoKD8GHgB57TZhb2MWARtARqEk4NsWcDgQQoegVSU",
  "key19": "3mxUBsa1dA6Z3vawmMXwj5qkzVQGLLjXV9mM2Vfckn6NoSVQ2jVdDXdwqqnFxbtruGzxLfPt87dKH6SbW5tS6qAb",
  "key20": "bnkyhHiPnwVT5Q1KjnDv9qjUbVdRWC3q5F4tvKy5kGa8rT9HBWtdL3TceDsn53BszKPfCeasSwTrsaudQ4daD8j",
  "key21": "272WVvt6i5UHqK9oEpBCxCYyDRWUVCaBxRHrynhRXd7TJLpgMer2zsHUcv5n17Es5W4xR7JXxeTy4G7YQrR7E4CW",
  "key22": "4JdZ9NPLordtVk1xFEsWbVH81Tbz8zv9N7H77ariJ7zcM6hJQYdynKFUZd3sUiEz8QqLQKUwTMe2c6EVecV6dwiR",
  "key23": "4rW4sktZHqKq2UDvtvuzfTR5RXKNCmcZApCpwKLv4nL5h2oUTs1dchmZ832g8JTxQ9pZ8QdTnvEry86hT5DjkjJ",
  "key24": "5ocgqs1mTnw2Pv9481cGjgoHpgTfoM2XTEtewd1XmF1pVmaCk3pcBBjKhQHuUJhiirvjMpUThRKcHDtMDY2LrXp3",
  "key25": "5x97LzCnowBZo33BXXhgw43pTsqcq4biPbVhfgRm95KAunKh8h8RFgP46nN4txoPxZM7oSLqVfSgrV12wquMcs91",
  "key26": "jVt5ZaEEqnCsu1py3ZZYucizeuPFj4JWwSRQk2711Zac2rVAWh9QQZVRvCthEYqjcfq1FCARZNA2ELkcEivRXFa",
  "key27": "3BNVp5X3THuT3SRiL6ca2BQmwjszmZfCtZKTjYWgk7yxNfRa2BVmCpTY9uKUdfJNFvTDK1EiYSCCEFdErPCcuHcw",
  "key28": "2a9B7YEypY1Rz4KmQeZ6WMKW73haBz4SakMPKeArCR4ngRP11yAWRbq2XnwoanAMZzAD7PY6anJo4zdugPeGVm8k",
  "key29": "ZJ86gq7BseFsEMd9ZV5NowB6M99eEneTK3tX4KzU2k8Xa381FJGKc3ruPz8poLWqbdRhiC4E2YMRB2D7sjYq332",
  "key30": "3bXMTpAdJgpDZatPnEDdh6JvHzSJmJmoFZG89Hj1N3vrVFaVR6Ksa6sZMFdDet5YsUDWgzYsti9kxk7CnQPHwEes",
  "key31": "5uooUZ5ocw8jPazw9pSRfNSVRQYiF73nNNXWFXvveiaSFcrFoUhgG5aXpun4TPUiXrMTeEEcfB1fon2GET3xjYzW",
  "key32": "23Fc5Gki4Sxs4CEqNjxXWuWsjec22NSPdXTJhn15xxJ3vh9vvpJ9HiBuzibruMA1G1CyyFAZGysjt2JrUYWK3A4H",
  "key33": "3S4bkoTwFCC1yPBpN5Ju6TRqbujxCdNJkPaAH2EaH86BNFUWRsfJq3MJ9CkwrdgPBF6XQsbitwMuTJ5fEWHrAQyS",
  "key34": "YY1jKpNk9PpguJ7ogmtNTKvc1VZgEScJU1F8eH17VPgLqLDnkFxekUA9Jas4UfKxaux8sPMAKq3FJDXb3vo7wGp",
  "key35": "4RrGiW9MY4vyoujPzQFyKkH1amiCWoHU2pXn11NrhK7M3q7DdFCkSmCxZv9jDy695NZ6p2J5t5N7VJEz7u8yHKpL",
  "key36": "42Niie8kACcnyErXHYpfiH6i1xch8UXiZWFgfEXXoucDpREDdzUoGgLcCCWAStkJHVKNRbFBfkv3WSi21Kcxpjtd",
  "key37": "4RKVR4eCNoiH5RVivRXQ7MGALjK6JyykhvxEdZiiAjijE6MhPpg7dGCLWmd4mrAchWoB9reBrUjSs3XLGyxrH8ep",
  "key38": "3o5RG8XfizYE8ksdZKNW2dFACmgJTnmmxdwoHQZat8jpcm53LvdJQnZYDBbcjh6Qz72viT559sx9AU6UcGUZhrmJ",
  "key39": "5jyqu3qbKKwa9ZkotJW2y1TD63UkfseEDHj7TQtRnBhqdffwNWVV63E3sqoQbPdYjRZz1rJ9dsWsjoauRJ6ULbPp",
  "key40": "2sHvQtqVdXGJJvgVJqeatZgPU5pbWErrkvfaMuaUXEVsNq77Vw7nBHV3CZMdMsbnkKuKCAW8ibfWwuTqfditVkzd",
  "key41": "4cTzCppQpzDNJmc4kCihA2e6ynqqho7ZvgNDvL6vucYJZj3oidKSNsMSL2r6J4pf6X5gZ1PpFnfV8vQQbeu6v6qz",
  "key42": "2pbErK21oj9vRstQQiQhWQjCcWCBQVSL2emohCn22tvUEvKcQqjYQd5V9ZSwkpajxFYJ3nBDkkiJoZxUeBDk89n",
  "key43": "481xZtt5K6c3HwQq1ADpShMDeXhXaGty7HDtw3huDEqq37W5fsRbgmRd4F1ZA9pWtT7PZkyzTKQVoD19xig1QsfM",
  "key44": "2fhJKuuxRBdakEKYjpXbnYW7pMZhVPLUCMEzt44gzuKyBRBG8XswPrucueeu9RxkkKTLCouZH11KQmqCJ47uvzrj"
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
