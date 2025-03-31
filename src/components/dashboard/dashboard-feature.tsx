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
    "QaRBBoUvyMQ6ZN4MkDZT2tfJRPd8oiPn6se8UDsD4tvTXLKuzLQXTX447BzrH5stxx4KUC8nxAharPPC91jCsLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFU6bCLc8fTmUv5LFVhkZF5CswYG9wdieDu8ktCZu8HPQenZ3X1oijgX4PxcNk5rKwzMcR2nGDVJ3awmEBHj52p",
  "key1": "5STCYbFTSeVEYAwwBXU8UC4Sc8rZkMB59hcEHacHQfHF8DvTyM3StVSW5hMbM2eHKk132jrMPJH7cbq7td3msmgo",
  "key2": "59dp5yHVQbqPQmnAeQWEBUdV3j2Z4pZ16KtyUTpvspqSzko9bGPZMtLi9bS7xpqPCndVanhkiz4SYPraYSsGYUmq",
  "key3": "3w5z9La9rAP1anwT4zJ9FmR49KUj4gabKPPezfqptjQXWsKS8jNCN7DrN1iPcikCYjRH5cCDyWeJhcgH5GnVdNi",
  "key4": "4Pa7ETMto2X7Yb4vjfjfXayrDYDGHS6q4tBFnjJLhQGcFDJgRX5S2ZHpfkEWWW1qh9KzwBd63bbCLeJjC2Qmy1Jr",
  "key5": "21va9w3he7xGd6m1NVuaEhoCcWXFYz6eW7C8QKQYWaZ7CAnkdevXzG4TuN1mkCvEEbhRxsxNKh7nug5hJqmuXJQ1",
  "key6": "2LH1fATN1NyPaaY5rvFFSYxiFoB1gS1j2uveUbLSLnDtJQDi19GsqRandGdT75PRS52najDVsqhf5XVR5p8xXz9n",
  "key7": "2tw6rprffXhxrbfDQHQUwyK2r6fLpDCiEpuEo88WZcssVRqso9Jy29fDYgL9ULHzNiqVq5yaXM2fQFMCpkVP2aXG",
  "key8": "2iHNkn49TBDvog3WnCt4Ze2eUzzCQsMHDUEFdS14LRaebRUTJWGfXCyc6ozbsrUFxNqHRPxgVx5KfDSvw25LVf11",
  "key9": "4FXtdQKCtBh7P3N8xGSNVqunMaBtspCHVT3vLfzHwJG1iusCetVRpEPcpJ9fZwZJudvHzpHimN9xf3ykWkHeFfD7",
  "key10": "4WpfAdpeZV9Ws2nu1TpP3zCGb3Qt78nNsXqUXNo9coq1wh5FWbiV3RNoMw7tYtZmRq39bBmiaRagvdgzDfx5Dfkn",
  "key11": "3J9hAUTgsB3aUedS9e4LvkiKGAuXnQWgeXhUjnDrpHLEM39Hni97upRqrLBGoM6MrHwfW4x3kQtKCoS2by3NaE3x",
  "key12": "3Wh8btCok4BxUC9ir9FhZeY4n9Bba5YviXeqrL7kWZbav424bvp9bhtUcRofoZyhtcGpCoBKtdX4nWmah4qPzDCi",
  "key13": "2r9inY4Ws1uRz6NH4bnBe94Nn7SEDF4BcaD9iRVueRpGYdqrnvZLDs3v7SnQYuw3EqotvakbR81W3Cm3wKeqycbH",
  "key14": "2zsrSwcLXyA72Kfy3nhh45Ty4VrGrsF9syWZ54i1bZ2TMVEfuQyWeURJPFisdM12hF41goZX31W5gjNdgHHn1kLU",
  "key15": "6AJvo4QMketnL7KWFiB8HFr1G36FNThnofLHVuDKjRX7CaU3b6ydzNw9DXdbVYQbkKpyyo9dws7Y4aDceRgLnG2",
  "key16": "Mj5G1SuYcMhXhmekiY9XhYY8us2fGkGWxvvwynTwdTTmcEXmFRPMwTieKcZWj5No6dviFr7WaKkX1PRdveURQ1o",
  "key17": "z9Usp5XQmx1thkymHxVBKhbud8sMNFi5Fqdw4ZBhUQZa8v7Jeo15EqNEciia6HeS9WFZK6LwfiYPgQMhZ6adqoh",
  "key18": "4povvMrN2h2yRJSvSBr79rryTnheLXdKekZQfmNnP8ipvjXDZQeiM6TMyBseWuy7wGCmVUFn8UvGTzXnEHXQDquV",
  "key19": "3iKptXEpA7ixDpyAyGzPvqYiEEq34Fz1Nt9f3fnAJS6tzrBjgEr3C7du5CkCjGEfv1LgvroLqeuhKkT5hFT2gezR",
  "key20": "59UMbQK5KRbjSYRjjJom5zKLDHA2by9FjveRHrsrzvChBbNDjZa5TSZDxTvEXvFzEX4TQaMdsaXrLMuwR1jAzDrd",
  "key21": "2Dgv5i3CHWWeySTN5Pjg6TMkmxMWyLpDJUMCcdgRstC682nWJ2E9S7Y2Q74RLoxZudSipqm4k5CY73fqSV6VAN23",
  "key22": "fWPLhXVCCJNXWPxUn62pMkwqmhsV2bmourBLahWmePQneQxdpiJgXZVKL3zyGKWjr1bUtVd7DmdzkBhwoV16yvF",
  "key23": "38L49hQvpn4hAsVKKAt1vJojrX25c2LXYTexkbK8ApT8Ub4HgPAVFzxJ5r5en8jAENYddXLMRSM8VqnYqdHZMi5H",
  "key24": "3eehy7x6LQbsWur4mWry7BfwJEhxgop5NH1CUVQWkMi8ijXz8Lh4YcBesTNUWdSAEJEm5dXrAH8R7vM8hTbmb6Z3",
  "key25": "4kweY8ueHi5Cckqc8V5UPGuX6P4E7HFSsfkT8TnndbLpWrc5iCWjrLwBE4d9HvJFisyrf125F5vcHGP974DoqoUP",
  "key26": "4PRWJtfhXv85LM92jgzuBTCxBaRcrFr6YMmwPZ9B94ad38Mvxk6iBpy8NGTuwSyBjtgZsQhzsFBFuiRwVrVnqQEF",
  "key27": "4A1T47fo8pHks13GekQB3GSxcSK1CqE7dEKEUeySCi2pkCAkddAzKKjPQL5PRR5Xt9TjDA5jVHsT7GD7FDur35HD",
  "key28": "5vhxEXcz5Vd7aBoryMi4MidHakW5EYKruqDXDowWvA5wCU6CTvsjanDsyEH6YprwamTa7W3Ev9GdeCartyYS3YkS",
  "key29": "2xc7YZ5LX5qW54oFi4kc5QPg7APWhLi69qzBrPt5VmRGjgMY7M3uVU3hHNfpsedjCvdiayi6Hkdq4qP472iCqxkH",
  "key30": "2WS8u6T7V99V6jyRNBH8Ty6ZawAMnRL1NwYYEa4FFHabHss1AimrLNNVc7KLKKkmPKKp8JUqUpXDCJGLVFQPy27E",
  "key31": "WpsfLjZX3YAfiDvoD2fE9BaDdkohBGeASvg7qC9kjiyUi2E9bhB5mRsYK16Xj2dJXK9w1YGGjhrdWeXLVFjNwvu",
  "key32": "5wm8yHdH4TviA4YuJswcqU1tne4u9w8rHPwXo72Ni6UnXajSgqtVNpRURMLpbWgS924wfTxGepziZQQ76cM2qqMq",
  "key33": "595ANCebpav6ShBfY8aXmiyY3ZgPED6YoGyht7R6xAb5bMWgmuLBSV9zfBz6rkm63Tdzvz5RRY7CsNRwziW9ViWH",
  "key34": "4QvUdx8AuQxoMxTobK99TM33h59PVRkmP8umhFaV2avQHQjb8KeBtauCCQZHHxfWjonBS6C98c4sfREdLcdcV1WZ",
  "key35": "5s5YmTBbJQ2jfmGQTwycS23Z4TaAJaQpL2mLbepK932hHccJXuKybEnCh9zEt5FzzX3WqgLRjYHCmkdxrPG7aReq",
  "key36": "auCfzFwiS3atDSYwBXfaD3177F7fc2BbhjkGfMd28zHSuV6QYeafeErjxX41x3qqP85HnhXemMNQStgdSCpT4n4",
  "key37": "pEv26GCRiXrSZP75qmFCBwB8skT8SoMYXitb6bEUMXEmXxz9Skk1fYSzQqpYh1dzzHL7LJ9UNQ8qNFo7Hqj86Kd",
  "key38": "4ZBvM8YrU5ct8X5m5fbdQJbqtSv8i1ntJNq7yZT5NUUoGM5V2PMgXxLziEacNyEXt19XBgi8Nb9w5dwzQZA3Tb9A",
  "key39": "5qizKBspmJVTYoAf5UWmMsDBf2oLG4G3JDtFZzpnB1Mt1ivGN2Kv7f9m5M1EQaTaZuyLgzpLVQsfAHUoX1MjmmsJ",
  "key40": "4QKvzPvRm8WTFByGSkUsSBLhQroUeZhUtNZDfRJ5ohmRfzfduTzpZqURSTVU8CespbgFnof9kUcB5VBJhVXnC53b",
  "key41": "2qUM92sVc4uM6SC8rZez8ZQR35D9ZgFFvzWJZpJADFjvfmRT6sY77D9c7fWh2CihymzdH4BBDXynosndNLhKNAfv",
  "key42": "5FjBxUiy9bcqHZCCUEYQoTM7PuJMfNfpgR5mzHCtv14c8ManHGumAputCX63HPFfiZCvEHPzicFRhLXY6N7N6HLh",
  "key43": "w89ECCAVz4hqMQDpJesPbTPGLjAHBhfNBvUTwCR8Mfs4unQYZk14n3PUQ5x75mHSrESArR8kqxW1Ry9V5LBrJ2M",
  "key44": "Bz1vZW5vcTXYF5PYiiGBWHZdHDJxbpWV7bhkfP7GJXDanrwaLo1tUJp5YAYYfH5ZczPWhBBfsq52FBJC4YGRXns",
  "key45": "4zb8ZRSNWmcNtSCAx8jbJixutymQKv5sdQL5q9Mn8ra6hTKLEZK9464W6wSA1qq1njTfTNZukvjTB9SsD6BpiA5J",
  "key46": "5SjMkpeUVgVUhbS32dZiZToyyk9GY7L5gTKBo3heD2wQ13PUdPX5dygrkgjf3reynfXyNTrNEXTWy24zjTdtZJut"
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
