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
    "41zVHR4eU4VPLW9ME5bRXFEJxzqaCzaRCZCNvhsfWYd7bokPkXZmhcRz9v8r8cbkiMvmcCrPj34GHB7VVMerPj1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wx5iTYjDKRDKMtCiBqjAR55KAF2T6rgrhYdEmJ5jMZQEHjPNhXu1aRNFDwgBty2SWEtLkXEz3VqP9Vcy2AVsbig",
  "key1": "24en8nUdgg6XdtnrFespTi2CsFFEUxbaEYA6vRZA4ExooQmKv2xRWZ8PxWimtgyWKc2qE3hQ7SerUErZegNKnxVq",
  "key2": "2svJa5EKPQZMkQ7V2M1q8qViPsdph47kn3CmmTasejH7iYB8ZXtVMYQsQ2NnpH9vcCqqGtARzNoAnBvkgFpKJei1",
  "key3": "hgJc88gNjHmsaifWihfaq8MtvaaosGpetnGja6q695odoZ4XNp2VW1fGaPM3etV8a4DC1sG5NunASwiBZvE4vty",
  "key4": "3emFo2fzJa4WJY8rvJ1wpm2H7pVMFn8CawMeL6iEmW1vxyFD3wyE4121YccdZkWeDQVAuKiJ6jSj5sC733RAJJid",
  "key5": "2sWU2eNw6dGvqMtCzgCr1gDESrEnNwzecBkai5gzK7vwUk71sXh7Nq8M7d6NBrJemZ4XKswnJqdC1aKir39ggD9j",
  "key6": "4okQUDZaTsXE4XoFFuQbXkKaGdQfSho93vxLKsvG1kvJD1FXK8GVgzUjDSGFi3cDZWThSEyEXPYa2yVyYFxofnP7",
  "key7": "2iJ3vQfPyrxW7YeCVWP7aZfg7BVMLKceYdAWQ5UfAD2HRqE6LMVp7BgHkE8wav1ruJ3P2joQdSaayim1EguutfTR",
  "key8": "2gUNruC6Vxu6zb4fZPFT8c6MLdEdQ6tR1yrsPKq94LqSyHr8gqdC4Fmd7ugiffwP8ZAo54mWdGFtuKj7wnxgPNMK",
  "key9": "bHWuyUPqNBEgWQzqD1AJsNsJhQitaYFTMBs56p9EAjtdmBP5XhxwVet8k8NZ7mmTWanWY1KFyT4ao9ot6UugECJ",
  "key10": "4DwncYBRe64pSyaPF4a6ZSbkn6exkgaNAydrsLRn9RMAFKpSAnZ1HqGMsXeWX7inMuULbU49e7CP48cKRkzuRNnU",
  "key11": "hEu3wrADWiiWQm3H2wVA9buwG9bjXuJNUUB27nMDxJNZvHnxrQdsdfdwRvAp1CL4uhJxY28xPrXVcE5dLSRhnvh",
  "key12": "XAYcv1bBXLTfx1c5q1n7fRx9ymYAmDyc2dq7TVhM2GFdYSz96VjWfahLE6xkS5n7R6BLYUygfxC9DRdx2BuCTUU",
  "key13": "3wRdjLv8CA6MvgxhSzkpitzPCCLTnffR4zdwHhYdt3vYFJNcXJ3zUkvrEbX1bLQVMC47rHuRhm5FJfFjeXSEFAYF",
  "key14": "oBfE26C5xyWHK9FaxhMKFY4zSHwUo2tAn97bxK7qxzrawPTPreAvqJo95SDsWZKae5rjA8U7W4cmvnwiEetHDWY",
  "key15": "2Bye5WMz3PeZmW63XyL3cwmSaojic2JTexFsqjeDsZFfbye8SFVu59XRuwSHptPtmh4tpeQzN6nXLLtpWp3pHhrB",
  "key16": "5qpgLTo68Z4zR8u7uJFjSKJZp5LyLmMmz8aRPvhFRGoB2Un7N4UFNABVepQzZ4GfZ8VGBSLHuevFidcsYRTaQzYL",
  "key17": "4T5jgtDiKQvFn1wM9rngfwaaqFQpCVtZHWsbAdbbfj1bXPKV2pfg3ban3znmTKZrGcfzhnHuL5PrG9Pfyo71j2RE",
  "key18": "3qnPCU4d4nMzwjXf8zboH6F59enToTf1p14vP9ShfNUFUN9bGjcGZB8uo5u6o5HV4TgqdcJZoGizmZ1uHQVzbE6Q",
  "key19": "uYnopx45jbKMB43Qsu7TdFTz58NAjWheXp5FpkE7icuEKe9k1JTpMQcWepfTxAiG4JtHJKgCztVT2VFV2kNkvw8",
  "key20": "HRYoqTaMUFjBYdGNPSmjbtR7n4zfefiAM7gYa5Lic61iG1Ki6umr8dGPoGjYdGmxRYogJgMRLbPtqPRHgEeBcdq",
  "key21": "2yvXDB5Lp2Ghv8vLBKQWNy2hd6Aywg3ArADBpP8ybW4xMTKn4zmZdku6Uwqiy9BigZbHQYeG8mqH8L2dbYxmUYqT",
  "key22": "3F6Bc9NGLy7HmwgpwewXWhREnYG7JA9ZMrWWFJaSbWddimYTmzUvFGQeA739yTBkKCPNaxMCdfa5xGSHpS4CP6MB",
  "key23": "t8ma26LrcT8PmGYefYX3cSbwYSVNsc5iQZa3qAXCAeQiaEpNLDB5Qnfk6jZyARTqnfE7TcmpoHdmQERGbgvr4FK",
  "key24": "4Adu7RHcj3D2gDsSb97oEzKLCBfmu2wVq6z7s1HozBt9gR7GjRGc2UjZFGdsFiTFaWeU4t1tekhbjA4zWj8GnsJ2",
  "key25": "4s3iyxp8KxGsLCcFHzCg9ihHo2SMqbFYPFWdqnpgbqVPyGrQFd9c3VnwjAEzkZZmYYYXMZHMguVG5AaSat5FusZa",
  "key26": "2K5JLkfcxZn51DoZKZJxq1LDpYuEfEt3G2L2LrQQLWqXmfCNtwiBTyxVAGpqZbTjsDhBm8hVFpG4XDb6ufnXgyWH",
  "key27": "5MFD22wVyysajy8tS6n24QdV9V1DUuVPrWjXe7f9AkN6BodgJuPNxHibkHP9jRTTMR9AUWmAdDE2fa94oukRY7RE",
  "key28": "2dJMUogyWKcDmrNhJeha5JhWZHbSRKjHGwf2UdHc4Ave2JvX4FsQYS6c4MwSpvjQUDWtc7xT4epe1WC22RrVfbAJ",
  "key29": "4XH2vA2B4UqSdhmzHyWHihFnD3p1YkLE8zkfZ7dAwckHhVtp1FiZkrBDQnHs7yUEoagNDzNk8gaFRhorAbgANVVu",
  "key30": "3t68hq1yP4jm8ttwZE7wUSk1e7d3hbHaBfPSQbbecycwF5xBVmN1T4Wf5SbiD1KzfHzBrifNABao3DyTQ6hJtZ7n",
  "key31": "2uzt6vMFxQHEDNeR5FM38U8UrbFuqVFfoWKypHQpAgqQjgx7NvSd1Kdk17s5wbzqFhN6HhJzhJ1ZYi4rZ4j4fUbm",
  "key32": "3PukmtitD5p26mkHsxrdm69ggHAF1KvbyvG5ydaNvMUxfzLe2DWJG5sHCNnBoHjS41gdizuG4dMZcrjA8yiBhTNs",
  "key33": "4a6WmsmdyuFvxgyTo3Aub2DtwCHNdKDJoy4EdEhFRuQeccuGw69E6hf3FBHWc3Tfb1BF6UuQC2JP8KdBCwqASbZq",
  "key34": "5nMNAK1fj5g5p935uzHrpp8WTUycXoPrdzYb6XyG3mrYts1NHair4FXmE1dSKycepoyPmTwGASAWJ8JUNHRMqoja",
  "key35": "3dca1AaPrJSuQw3vWmtW5SKULrdYJQvUo83vHVBLahZc2TMZzdEEZw1QPtRnKNa6ePVTgiDWCzgtFNSuHMcdo15u",
  "key36": "5CGuBN3gbPc7QnRxQSfPQ7M1qjQNjDj1iu2MSmJhVTv2cU8pKK9F9FazU1FpATnqiUWqhuFADAFBH9kJd93dEUBs",
  "key37": "4JtHrBp5WLUrfLdTvnZHZuQ3rZ888jaVa7m6t4BEYuuKjuVggfBJW2Fr58Qod1KnkHV9xuySU3amm5bGoxiriLoH",
  "key38": "5SUnGSGCsGxhozvr9S2dSUAPDngBkM9GwWjfRJ4rh9WQChZ8Vh3JYnsxpKmprW1NVBfuVc2bfmoN2yjZEDqGmnqA",
  "key39": "4mMBU7ZFSb81xTEGNi2P9cR7vk9gt1C4Q59WeC3mZaB5foUBit5dGr9jD2TXXLWawGDi19n5zaseN3NfxvbHzxU6",
  "key40": "4yE8qPrMqNi1PVkJYNEpuaStxe2Tf89RYpwNt4Bb8WuAsMJNSDVrNd4vEqKcX15NsEbhKoRUGpNpeVzjQDhxjVBi",
  "key41": "3U4LkT61mWGJK91MApvv2eiTNQcooj8KKVDM1tWEmMDr8qfCCJzMibMAsDwwnTHwrrTXaYSjCT2fKYp5aQEfphtA",
  "key42": "58BhUrnqPn8bQSp7PgpiY3Bkrtc2dJu4bMgspW2p2DwVfv5o8K4xPdskeDTbg6XMohFU874nkJLet8CRnZSTF18F",
  "key43": "3HFrYFxQHe5AybbGbGawKon1feUpvMeZj9g8kfpSLjxmcASj9GSSnbgaYJcj7Zne4c7psYrQu7JD8bnctPQEshsT",
  "key44": "AwmbkoFh9b6S6RkcgVPo2dJioPtRYp4bJHzcMUzTmexXmsEuKwND77nmYJpL1sZ3pwAGkHYGfb4MmxhzTQpMgAQ",
  "key45": "3fKjESv8zpo9DHZwyxdGtUgNNPobdA9tyK9eDJz18qTKmAKf79GkZBnZ9WoPoXUKRXSwWc5gQiwtxUCBE1YEhsB5",
  "key46": "JaDhdPeqYQhdHdo8FELcsehDxeQS2myZd8oCCsP2XBAqtVcofJhbPKxEtSTDQLZxUxqWw2uxjY5qUaUcWxecPq5"
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
