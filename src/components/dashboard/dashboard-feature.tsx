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
    "TPcysYBBtjkx6LmKv61AkFBELCPsPLnigJuYNXed4hCjGY6SAUECmEPupXkwWvXCMQ5ioNUCg169zvYKYHAU7Fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eN2M3RNLD4CQCG2bVLgU1c71cZPvFKCmMWA39KW3wd43mM4Xz1VJWmmzZNSvpbcRRmNfJh2voEoWtL76xKz59BX",
  "key1": "2EaVjUhuViBrs4PWcByPRmfDUbNLxvnt7UDv2uFAcMtoCY3UAHujLUyRPviu5NyKdG2QF4bpx4FvXFQ3nUTuviww",
  "key2": "3kyZGh88d8rV7VbVEjYZqgRKCVhdLzss8mdUUMrDJQ65FMDLsq8523hjDLn1NGdA3ddzH2fdBoUYx4rzc3JuGj86",
  "key3": "3otpENUNzBN4EHi2WJz6n6SCRfyZdZECYXcqS3Ldgdzho6jUDLpWm2wa3cJLWxPnuhB7Yrm9MX61WgspYYFVqAVz",
  "key4": "5UgXSQrWHBuorzCLMWS4cASFhJMYzqwbdricGKKsWTG4id1n7YScTtRSY2i1545ruCPMvbRAWuiCnKEqVBUbRqdf",
  "key5": "4iNQ2DRBBH6PiqxJWpejKF4rA8SJdUQTp6J1DrC17e6PVWdECM6resvyLq5C115DErtzd5bo22mj4jBbuKM3pDAw",
  "key6": "GB2ap5Lq4yz6p2J94K4neYbnxtaM1d6dC5oFyZ1xiiYs7uBZggguJoDExM2YN7krqmdZ3aDyXJjcXmKWAh24SVA",
  "key7": "36UMw8j41Evu7rQ8FEb938f2nVV9c8Ei7iswzZvJ5CoKzpFyZCYFFUoNqkqscn1WQzpBo6APAu4LLLRBnMdPiqBC",
  "key8": "MjTx5FUPTCjGzVGsMxAJQdRutniyVNUazqsP6XWcR42r4jb8Wih1uQ2PjuNjdCqEbbyxUveJPMwVXFwvkrErCSf",
  "key9": "5ecMmC1952KdcU3VaLMse8pieATaHTwkiiFWFaHydTpERReic4K9onSzvH4os9TpRsLtB1Jj4yPxrmVTZZJ9ovw",
  "key10": "ts8ofRzTrbzi9LSMXJxt96V4PuKGqMTLWVX2nsGn126x1UPCCaVEvKccfGZQHphLKHfpw3QVyfuxomtrXTYkdPi",
  "key11": "3AFyTHgLr4tbkJxxsDd9RT1AXutzZ1SnVzpXkfgJsSj4hr22soEo91ifCpanHXTBW6TZVpCD8dVZDM6h4szJCDct",
  "key12": "2W2rdnYEfWqgTnK8WB8LQ5duVrmiehirQeuEjFkE2HNjbBtSd6Rx51R6pkSfHaNBaS3CuUr3voXFQnWvGQye8LkG",
  "key13": "4WUphixcdRXYnjCzprtvU8XmzGbFpfA7cG9XjjgS1Awati4kh9Y8Lo2kbeKgQG6ag6UNegbML6CaZVrWTCnAjr6R",
  "key14": "3zP7PtUpkg87i8WGCZcLV4kQeRsRMJKpGVoHZiGxqheSkycix2pBEkjhXCAuBGA8TJqU3tK3bZNUDjvbzwiNtZ7s",
  "key15": "49zDUvkHwLCVm5qdcMEwz84qj2RPd4Gg3wb1PxTfhGWgkogF1qYyTeyEep4mS6WbDBk43kpVzAT4YRSrqHGPVxuX",
  "key16": "3Lc8miD7t6E9Erz4QbVAKkJj6B57YDng2JMWzwQKEPx7q2PQSQU5vgU1NzXEoTpE9Wz6NHWWwYGmYGPagxssW5Ax",
  "key17": "59x3gbgYmJ9xQDh4fcQXynmkTFDyXv9q7LngXLWrZpbFqMeJcVpQHyZeiQc1wYaQzvbYHE2xEb6bfMoxHCoYxbnd",
  "key18": "4uzLooSkL94rn9TJZeXfenu7LZRuvcX6w3agbquKNjc7FKqahY2kgSdvNweyAuPEybsC2LXDQuw3fLMxZmDsEZmU",
  "key19": "5UKrrvh74cq5R5MYGBXUP1sCBR6zPp5kVKzEctvf5ypheFX9AkvSaDQszW26HMPeEs1k9Wj1FWV1GCN3CJF9nuNg",
  "key20": "5bqzort7Nrh2QFqamPU4nTKGMi8SzsLAE3LzHjc3F5xRuMMbd53hqz7cWJvoYsBHMemJKyohGSiLGncprKz9yHq8",
  "key21": "2D5AXhYEhZLiMcLbeVdDcrVn8naVLZXsaYqgfxvLhRhmAcQ6bc9nnfShX1aKwfSAUupLGNNPZK9QdpTM7kwoorF9",
  "key22": "JV7CgXqbRpfywav31BNJdu46N7xo5yEg39wq9H1cnq4694DYJnrrMxLMSC8BitxBqmSrNhmTfw8g92iNVYxRmpt",
  "key23": "4jSDNPNKWBXsY8fVErVx6GXeW3hdhgTYet57CWZfWGQB7pPaVxV7uqq4JDrKybfzPS9b2WAa9poa1JSsQv9xPCQG",
  "key24": "2sY7oZt4BmqKKtAZPuZp1HG7q4J6d1vWxT3w7qQjvfSfBwJ3gCEW7jWnc138wRdmcgzfA2md6BsMDVRVFT7kyjxs",
  "key25": "2BBt3NDq1u11fGqkUcUgUudUmFXQYPRMy2zZS4dcjdv71P2jWmB9wPzYYXRfhBJPZxH6MMCYiKxgBAru3w8gkysm",
  "key26": "4Pc9XVxFs8a94h1mZ35wmhCeAJG95WkQxrsGHJ4DFM1nyA1Lm1wm6cujMMTYctyf8d56LZ32JaT5wULGJs8tYdNe",
  "key27": "5DH8w4Xh1fag9Ahh1o3RyZ2YS9kcMcR4HuDHL8gbx38abqkttJz6qaAba8YUGSeXantCVoTaMAC9VZgNEwaoZkk1",
  "key28": "3UhamfNSPeHNVcjeGxRTKyiAbQQz8Svxp2g8xKkViKakRGrtXSSTZZbzjBwTjytEsTcdeZsx7iJtrjUkvq3t7N6U",
  "key29": "anZBE5YL1n2CUqGxoZSNuNu1xt5gLMffXBTbiigrwTUZtE1GvJfwbzji7kuC3rxqpVgbdo8cM8ejsQZQrNo2Yti",
  "key30": "2ddBzkxS3QjodqsFuorf43VdXA3bs7bpD2f7xGYJQnSj8kUjtVuLdAw2iPiiDoHL3MJgM2ifBCUkjBuWj4Jy2ZoB",
  "key31": "4H11XSAinNP8tWJQ1H9M2dps5z9tuLeRSU23rfjPBmPokncV6xUgGQmhWmHsjyqdNnhk8MgduWZtndXFs49nq1Je",
  "key32": "5crf5tZNhbpaAZHqB4n5X3q9NCexi3GJHULFg9cLxsp9AVb13Uc14SFS7feLFahcdkB8JuzV45EQczhgUhuofAFe",
  "key33": "2kyw6Q6ModMhD3GMhGSKjeech5cLQqu3UkqKngHhkrUyZ4dvxZez2hDu3644PEsMwL2fuCDsy8X5zLYqjnz6nV9Y",
  "key34": "3VCBy4dZp3D1LWzQpaJVfdESu9gpxAiChNg2mQaYLpG255PpcFEZUyzVjA78fDhQeNy6FMoT8byufDxGDUZaH3qi",
  "key35": "3p64RjHqKibFfcT92tZiwMHb6rcmDWQTMJ7y13LBgKZqmqX3gwnSbDChSBqYPy6XC7kWiWrxjrgk5fgDND2sM6GF",
  "key36": "28m1wyP4XRWMPL5JfWBDdghFzogGkdxpkbJvRdyhMbya7VfPRZi6uxbBc6fH6DfnyawaFG4Hd7Rv2xEDB4k1T3Mu",
  "key37": "35AGnzANFHog9xYrFLM4rR2YBvfsVv74gVtMtw1nJfLY61YUVamKq3AHfwBvkk2WF11oRQaeTRYaNbeeJsMLxuGm",
  "key38": "3gJFFdW4uEG5MFhcMYARTSGSn4cBvajaUMD8oG6uQ3hE5nUNeZdRF72KN7VrNDDYrgZQSb8CSUB8JiBWLfqvTUsT",
  "key39": "AxQrsditPwPiTAHEusbMFC6FUNj1Wpznqoe1rDgbTEY33cGdKH95DtqcuQ8BTnSA1dcgxBR837772UCdJNXZXwN",
  "key40": "2QnkxBoWgHZSkQEyT9MBuShsXZj4rM5bejE9uPhuedmuwBmRPJyjjif1kVpPLPZffA3dqoMKPTgDymqHR7ZLMBpR",
  "key41": "222ysaN96aBXR4x7NvYxAJvH9tmjvPRwKYtES8HzbtAhmzi6AJdQmZMnceZhZxY92G74H1Y5q9m1M83ieZDd8j7P",
  "key42": "5f1dq9AzUWVgi2d1ueg6SYHDwBUeUAmQcXLgdwrjLtWjFRCVvPYbiCeK3xYExJDG3c6nUyGbe3oyoJdhrADZ1J7j",
  "key43": "5KjLsMoBatk3dvNc4uPnMiCFSSqqb664j5wcc8CYmsn6smLbfFMiN4YSpx2MNSPZiZ81T2TVUB2HA84ciUKhHPTH",
  "key44": "a9rwH6LjeA2BPbNMsEqBLiVSDecqDbAnzHVoGeNFy9t8xTYvVGngYaREwGWLS5c2pHUPGHKLtsMVoqBduJdtG2q",
  "key45": "3L8dQBdgqdLASSebhat8bShUKbkV73839ns844gxy4QhjzX7wuEbyrcQFZnmTjWPMiDbjbRTYUHh4U51k6p5SuSA",
  "key46": "2QoJBCZCUnoHNLw8NAWNnsmGg84rLvDZtnxNh8w1mAe2kundZSq4yV5e2vFfBXzFhRpwkdr6fty4yEaENKZXVr6V",
  "key47": "2rXx6UUL6oppVdKigeY2pGRa9D7Jv7Tdw6zFZoMQAvCqjENt1Pk3NdP4e372HgVUMVK1oajqhkCs3ewRLZTEkv7d"
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
