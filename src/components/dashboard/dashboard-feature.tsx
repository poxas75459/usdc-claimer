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
    "5es6Edpe9fffce6qUmxP8VJJxXntUGdnhjMMM763wAadYPohFQKasdJcWEB9M6yzwLPVGVmtQ5jcZ3kQZnsrrwbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ybhxmpHAm7Cv5DgbNHKgMbobdmB8paDXeQzHJ2QVHBZjpPao9srcWbHLnJD2fDLoASVD9ftaW8Ffw8LBKE86nUW",
  "key1": "KtMnxUH5kfvPS2BcmjpTRK6DZix3QpF1G7yW5qhpEGYzVpqCB1Rs714z8YPEe4KVKEDQSha3ZyUrBDx88Ft4krC",
  "key2": "2NeLZY6RhRhjwWvYsSHGvSWvoQLi45gXRpJ73UEdgB7kpaMts9wyt4nVBbEyyJ5LLC5N5SywgvZCYuFtZU2BCh3c",
  "key3": "4vpqD3GSQ6cFpegGhcwxHFRxpsf8fNFrUy9UcWfwfwi8q3HJzJjCpVfR4YjX2BnAbu8dDXK86F58E3rPP9YB9Qxu",
  "key4": "3yAahNf5JcKQenJeYggBfX3uvZwSnhuhxGMXXX9rhPeGqMtv9ixpEmeBcdvfFYKp27N2ZaReuUHotnHJcce1UZ5U",
  "key5": "cg7iczKfCoLpnmmeVzCJdq1t171siTB4jNcSFKS8SWvXZyTpkLnDuFK9mRv8ep2rU18y7bpYtRFtb7JHDBEpSVw",
  "key6": "5dgsGWwwC28vZUgmRUuYAwZkwBan5LkzMiMo6zLWNsMmGh12vtpSGMxt5hEEewpnM9xT53TSorZFx3sPpMnRESzS",
  "key7": "3KD7AhEeUtLhYfWCSBDY5ZpqfV68GqqK8T85PhNG5JZEGG4fSu9AAQuMfyvUCrmkLvnzDVujr13bScDpJ17kvdJQ",
  "key8": "2wFfo9nkDR5oycK4o33gLYTGBSVF3up9NT6jVkQw4aHcfS7qA4LXd2ybbLHruNBQBTHQeJK5JxVfvVTvyHfC1hkM",
  "key9": "53eDMw9K4VAgXPPorUQibB5AiZmTBUGPTC4qrvJEoar6mTbdnboaNpzFquHQghkKas582YKy12HnkEfvYUbcYpFP",
  "key10": "2mBRfp6CftizfrX8G8xjU5PU2ibFsKAaGfjSGcf881SvD4GwKEVzYqudK4SHCJ2DutxQgCqVB3ya5zu6GUYjU4C7",
  "key11": "5Vyf8qCY6k3YUXJqs9xa1pBQggH64Zb6WwScBsUFQNVpn9b8xMtVMiXQHz6h4S7muJ6EAr1z67K56xrsLBZxy3CV",
  "key12": "3yHVJux3gopPCwBkcNP1cBhYqXBKtMrBmucXKPxetDz4bKdnuGAKwLXHWvtr8XviVaaZDpF4xCH8HNrGBufKABd1",
  "key13": "4kZCL6XaQU5zEShhZ8BABFeXAMheN3TKmPeunYn4Bx7S9a2QRP9T6UELyp3V55QCqo2PxYktrbfgVXQsQ1eyQFtS",
  "key14": "3kLqp2FPoVUgKqZD2uyXvWKtvdAeLbhrrAkvVjUdzGGvLkwSSm5bFygTJr7itaqqFkrpmuVr59etnnU5QcsXNKvH",
  "key15": "4SVzJMPzPEjjRyA3fmGz8Tna3mgrzs7KiwjcktdfwdZ8yU7AFA424Q8VycZ854DShFt78qnZ1rDbJFxiyeYeNgr9",
  "key16": "5G11o2W2hD8RLcz4xtBULiHVxDq9LjK2sfNHAWGWdztd9aBDNjSWLxf7dnb34zVbEhw65Cou5iP3wbJSPUGHsVPS",
  "key17": "5gMx271uVVTMRo5keDWsuBBPH8W5pmM8cdTyMynHbJrN3sBwYVQxCu4Lea3pAmkCnm5dxHuhD7wxAXPJ7ZiCPreC",
  "key18": "3BPCFCBkAKwPvwpH4S5XCv8RDJ3FE18y8cE3WkWEV4u5vWQQwUfo66SKjQwwte3e2RSExG9c8XAgoCkTLsmbkAgC",
  "key19": "5qL992Bo4H5c1kYbE27tAqvA8MyTPd9EABywNAveX3bCuRZSc824MhnGPzyN9qkfUAfYrQVpbiNr18eMurcjHSSd",
  "key20": "5Ayc8nz3Wn1VXeXZkoR8q5bPf9En2N9qYep468AiZ72TECkLKdj5kjR5tVc1ZU3DwVpwABoWtL6CC2SVBNr7Lfeq",
  "key21": "2pnqTsL9g9kc4FDNcSz7myKCuKfECcT5cyyApVTnVWLtv9D9eSV4yxq8cd4TECRgErKCzgoGA8NxpaHz4GGwDZWV",
  "key22": "3MCNJCFDxSJCzo9mmSiV4zYaCxeNP9XA5syEFFNjB4kvxt1RMcHAS15fBeFskYcJbLyRppadnacy5v76Hvqqk8iX",
  "key23": "4rLKenD2ZkZNwoagjLQQZ46WJQtWGP8ksFbrF1zC3NJ8vthL3WJEJFRFj5LyTQaCPPzYkjEtaaLdXjA7LdaN3JGZ",
  "key24": "2CEFnCpfMiNeH6mrnEUWiFVQHxvc9bF2KKK8gF2u5qBkqgFGYPtRUHDxoRyqveiknQrMMkA2vJbY8WczLAMicujr",
  "key25": "oNFKrNrYuGjjxzjCsUgUsAh4z5FKrJ5bXG3uz7uF5CkRNAdWgpJ2k4ymx7n56bcZu8RFVWpcN3P3QscargxoJ39",
  "key26": "5g5CcpmCTVZY75X9Uhij3dWPqHXktkiWaotwEZB3xaR3pb7yrswGngMr71R7apDgs76NXFZLrDG2PTKAMgLNxb83",
  "key27": "5qNsmG7Lf6x3fSoyswAFEEmS6fgotSPWckjTvSjxzdDCg44MeP1q2XMcSKeNiaLKp6zjmzusXowMuBJQkmJhiS7V",
  "key28": "3TaqwEENU3dd8s7szKy8bZ73c6v7WHhzaqRZxzw1tgxnmZeoeNoUk4BqTKXbES1rtEQE4XuKTvkgFyQGBtCY6uS6",
  "key29": "4brHcyXpgNk86qNiGNof6rH2XLFZ9yAHzTMi8771BTdM5161NEZx1qpUxToQrUaTbaupME3RMQosGsuJNqhS7nNw",
  "key30": "fq3YKzn2xSiCBqYjHUCfc9GtfncHguSn11SHHoNcx6i7z4g5L9QPD4iX2jKGEbMdWR9TuRD3hcamLrLva2Z2VhL",
  "key31": "2Gp1UbaiDYdanHzEvdcHAVseKFuFXMCP7rcBRW9um1CjKjL3KtzaV4AAvC1nwGSnYpfWf57xzf2oG4W21NCsNn7Q",
  "key32": "s493pPRPaE63FKQq5iHJ4RAbVjYCb1PsYHvAZAdsF5WyTv42HKmcuV6EPtFc6o1wpacPASt1GfF3H5TN6sKfFCP",
  "key33": "4DwTw2qTftUbZ2ecwYvZRaCzgZmLyFAvVnpAoKiFK3p8X7hrraFZfvcQ7Ahmz9jxJGhi6u2MMQygB9XDzfpGnnfT",
  "key34": "3kVmGpLfgf4iuWD9Zq1UcTEuxhFwNoPAGj2euWNFW54e3TUrDpsN8FRPV7mtSCkeJiRzjw9Nrmjyx671YsoYURZq",
  "key35": "Vaugzx2s8cPsPmNjq5LqXf2Y72tMWWzemQjQu2KuJVbKWrqijgcXz6VdK2qGgUnByPtiEKCw2vEnhuQvSaRuXyv",
  "key36": "2e4Nb1EusH674HdRZm4TE213RKeCHz8NjfjXpCtsZ8sSkfiCmAUdhb2EHWmjbFrKkfeSb6UofBTTrw5SMYSDZNYH",
  "key37": "5PRF8MeghhQrKEAbCfbrQX8WKsAALbTDuCQinXpVJEDP4vW4hNkJANbKakshytXDxetVJUGmng3LP687mnMgaiy6",
  "key38": "n2abtQfKXja1DaG9J4wUY5pGo7ixUhe7wa4vMNSPuRfSUjdHd7Zjvg8H8t6wppLBV1SEmfhGvjxYCz9oz71TVXZ",
  "key39": "4e6ruAWxsZw7DdB8umpHgmEn9Qr1gWqCiyE9QeWdFeUVJmVtRBwgA5g5v6ssA5rgQEpnrUGneuTUk4Vs6Eg1xaeS",
  "key40": "5Y4yGjtsxN3rScaS96fAybK8vRdZyu971BgvsuwTYZLEdt5v1T7CiaZBVGHSWZg1MnCCfKgAaxxBjfgWhSPRV7Xy",
  "key41": "X2nPzW3HN6QZ3twL8A4mHKoWtkeE4MJp6MeyUF7x6qXb6wctuZMPCBbmrjXUNDXMHgiGuuPK2fjzScQyPrwLttE",
  "key42": "5WEwTanSYdHEpgGohHtDLrdfDLN3oqHRHKQKPLNgKeKRq7Nen3GoG5f2gTM1sDT5rn9Mv2VxwXdPgpaYagJfgVeF",
  "key43": "55K5eS9f3aLN7YBfR55YYxgg4TW8NXwESX6j5fnSQKZKQHmiWKvnrJvJdNg8J5jDCV1cX1Jk9grWpMeosg5DK57M",
  "key44": "5KwumaAm1id9oAzZtyadAN1BxCywXXdQ8ttxZdhKvvRwrG2T9ETfSQoNAhchW2Dz9VqNNDcqwBvHabprgenqSobN",
  "key45": "2WJ4x32KAGZ9kGmA7LGifzYE8eNtazJvfMhbuuphZ5Q2VrhneMHbPMJEi9U4Hy8bmK5nK3ry2MSs2zgVn2b8ppof",
  "key46": "xtDSD1PR1ze8mCj6eBfH2unZ6qwo7TuRz5Y7D9agjZKkVwAbwvqEoVZ9QJGh9qz1Z1yWn9US3cg2LE3F46sbSKs"
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
