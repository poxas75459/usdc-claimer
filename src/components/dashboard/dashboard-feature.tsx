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
    "51qBjb3VR5NSWLjGDhNW64jJ7TDrA8K3XGAC87jFazd9MALoqrfqQadMSgZexF6tmCJrSJcy9mHGWzLpm2NayEUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VBcTbbRhy2jbJshL44dgnc4iuFRg39S33ahoimvQRD5Vrmf8gr6tGXfYuhj5cSEPnbde6CUDX9tj4GqaaRrrg4u",
  "key1": "3Phn8wy3bRqHabAqzvNdW9PH4F78i8LCqiJfwJsRammaXtPNmEgfUmGRaiPd9XEaS9TmtneztPPbdBUoc28sGTa8",
  "key2": "3nC61Z8DrqG3NSMQNRGSGHN9jPeUVpKRtijcomABAnq4Kxrp67Y1QhzQaxC9YaBnK7ypcSCkeKZvQ1ByuuKWEcDH",
  "key3": "5aUud38dRYLF8uffjo29mBPtsb9pWU2HeWZtFVvoCEKxWFYspJCHQmD1ZA9KgsgNzncviWzW7HRczFZiP9nVzxpB",
  "key4": "bZ1gerUagKhA1j9JbNHex4GAZEFS5hzDwxCsGVmD5JXASgsQXzSxqoDCdnBgRBd1No94ZjgfWjJtiD5xtRR1ZRh",
  "key5": "1v68Uf6cScKkKH436A8novPCX7ppCEM9KhaJ83CSqYoz9ZHJLEWxg6z5cttzgAUC8eRsis97oVe9kDi9yiHwiRv",
  "key6": "45Jvkmd3E7cfJ2u47iYULWGWTN5g9kJTLCTgAgHeZNjHrDG61KCtD3i1BJb43yPNsQNSJUsMkWU4btwUbcrqWFAi",
  "key7": "3aR7xKzDqqte5uzqHQihg38v6opC6WCzyHjaMLXnWQ78swFDNvPrhQ1ewKBUgcdQaUKRzqcmuEYSPfT2nDGpPq7V",
  "key8": "2RNKccc3xcuHp1PddqK53QnJxopfShUb4mb6YF7wQ8swd36SaeqZmL6gi1Gi4sMLrYHp8MzrAv2pEZGtwY5DhKBS",
  "key9": "QjxzQUFUw3tEDE1g8BoVXxZMwhUMb6icMqnkGBRCxTvjEni9HuvZS1oHzoQaeYWm1REG9vxX3dAKkVZEfh2JCaJ",
  "key10": "598pTBcjSFAowm5QGSsa7FE7K5MTxEmWoddxUfDbJRn5HJpmnjTjKE1re51A7xM3bTyKdJgJQmPb8qY35vwcEzY5",
  "key11": "3bei6bzJgjk4qfJJciayiskhExxbGVe3cjUpJiturmxLtrnJaaJXnPuUfTvFU7Q7spC9kBTdk7CkLZ9yGkQpphp6",
  "key12": "58rF9kC8rL5QkLWFxE3JKP4QbcBUa56XtcFjkAQt5b9NNfw5usK3njEt8F1mkFukH7EEDBo6avmWcSEwksEuYij3",
  "key13": "D1uqzLVseBwxLZWsHBet4Ws1XRNJJRwgL1RGux32SQN8nBEYUJBcAyiMUCAy7R1LWTv6XQN4xuWDB8xEm6jQy5V",
  "key14": "4eYwGpduHxw3Bjw338SYEezT1b1wtda5cdPvT9B5jv9sxcB2Fwpm52nkNZtAE7z6vuS6UDxV1n7KUC6Tk7VxAaup",
  "key15": "S3CZEiFKhr33tsTXekiKca5jSYLJqWkY6tVx3UszEDh1kSRwDeb341Lz2c6fzvL8aRZaCF3hcN8iNUeSmZgdYPr",
  "key16": "2q5opUKcqz3kHkhfW9jHoAvwAxF9Tn1Ua99XjFq9Axcr18fR24SJTRbydDCpS1nXyC3V9x53GB3gK2pc6PBqDFyp",
  "key17": "yq1WoJoE5oCjWn6LQx3SxVDMdu5imneQBPDGM5Cw5u3puXqq6roGtwxNpcXDjPfu72KLqL7ZRJLxK4Uey9afZvR",
  "key18": "3AR7VD2r2nqcKDiyoXAxcQiVPMUr2jRKQRu4QizkcNn9AbaF46RLmpDouKrS51zRrFcbpKDdSb7AY1hH9xZ5Qivx",
  "key19": "2GYU2MBBffj8MD441yRQpnzNqoDbGKSGmFFkEiG6NLaWZx7avC56qPqFD6CU2S9TgKFmu61sfiuzAKujvu5KYoQo",
  "key20": "rddRvLteSzRJ94GC1c7cWQ5Q9MEuPiq4Ga6m5A2XLtDCWgMpjNxSEeEAKrmLgAaoqDNKeW1F9oeqYS6kSX6eg6s",
  "key21": "4iUQPkgjkCT9Cafr1q1kdRL4SC223GpydhenCcXRvG3FYW596tNVQijtAEZxhKV352J4FAea8Ruwg7XMY675VGBo",
  "key22": "NFCdA6x6Tfvxx2z1boRx1tif3P4G9jSAfZwr7btb1RGrizVRQUvSSikk2MmLBqaHgwAX5sSiU99h7VQc6Scp7c4",
  "key23": "3iZMmoxvPAYdmVCTUR7JnCtX9jWteubeXcdYYpaJW5EdvRhB4Krsz1ngFBDvtCaoT6doyY2xoPfGMbZnXoNMkXPc",
  "key24": "3TUsgkG5AgUioGniU6aDdwxLHfnjQort64PgdgLP4cMUbNqC5o71e6c2MLvqfrDKeDpWDadb2hYjfMao1YgTczKA",
  "key25": "3eaGbyZrLdcSTUBctrR9LXHZrw3vkyUbjtBWMARCVKUr3dgiRAHq3t8eK5kgntTbBPAma2nT9AvaVcsQFv1TMmgM",
  "key26": "3Kyp8FXDK1PpMZhyTDaVKUVG6Wgr6pkTMZwcutKyv13kPM1okRmB5eTNyizPpLHXY2Gs3SktfQMoTfGmgGG3E34T",
  "key27": "3JtaVuw4zR47FQdY8FhHbxDGcnrMvydVrreGL8Z62sJMubxRXUUnQE4xRjg7QsDV5emQXUYnAV9gEvAMPp2KztY8",
  "key28": "4zDKRBfQ4e2mCyVkmvqXveAoTNfFemJweJFuaSgf9WhpcBmWnow6k1ncy3GMQVYupbaokL2vogCraDNEzk25wGGA",
  "key29": "41HkEbS6qtwXNscsEk8g14ByfsuJAdTBiqVjs8owKxYoecnTSJnX4fAHWg7Cqy52nGibEEm6svtumeoToZGBwHSX",
  "key30": "7ku9LCVX2Xh6BWqW8iES7WnLSubGyQ5bxoxVY3SvJfGKXPeVYCoQ7se365XCYKYGxQYs52dEjdCvxDgUcDYFW7d",
  "key31": "3Qy61s8PiNVzFVMpWb1YjC2959mUVcR9X9ruvScwZFr5cGfSuGdseSTsMoytZG71mLMDzoBvuSaB6dXMkUcB2Kv1",
  "key32": "osxirkGFbCN2ys1jdQHhgXehmF7yK1ghrXmqUADzdPTFxLoSjstuZTTqstLrHLrUBQRCwMHuydFprgwdUPrTBfC",
  "key33": "3ki48p9bci6ZVXd1DVGA9FGMfY69nBwYeyRmdchcQNPGtnjn8FXiqb1u5GcPKWkoS5DefeUqCiL89uuxjbvM1YYb",
  "key34": "kTtJtHwAgE41rg2iimeHGAHiJU9qCFTVUr2TDg5vnxdHu5q8h9fUt3ccUBhxLkMqwsT9U5DGbCmHMajivz2a8e9",
  "key35": "5xo8cGugPgoHT6FVJrktRtYKrx6suQ84ZgdwytENrYf8E2psGXwe1szo6kUuHno7LxKzRYhkLrRdkZVmjJSyrmxC",
  "key36": "5BnV7REXR37owEAUtozX9tsUcyNVSx786DX6v4GXw19KuR8pyTq9Hpkj5Z328xQK3iL2hFExYLZAx3MVko9BzzME",
  "key37": "g33zKCJiX3vQuLR6pWy3emdG8HwSMmqgWZSNCjAMGfbsQnKskARYWK49t9pSvBrAnB9t4V26xUFH2SNxUdoFrKw",
  "key38": "5sJKTtaBPVTR55zE6jQa6b2niBR3eiTAVi5nTPjajuP8TM6xAnWGGT66gK7vgmx4qwvbKTGoJAT4BH5rj1gwj7Tp",
  "key39": "5NdhxTWGappyB2uhmZy4GAExrFaE9iQP5drfm6ymChqwcHP7Vem8UFm2D8vyyW5eh9i7ythywrwTaJc9VzGzRo1D",
  "key40": "31n2k4m7E63E2gf4NFdKYpVNxZdvwBE3akhsgRxk6ceQxmuKLeBgBA11wVLQEUPvD6t9gfkFfiNnzjZusGwoo8wG",
  "key41": "4eSFJ9S5tpeecoS5EoZbAmsvo95z7zDsTcTpxesbMPt48aLrQMYxDuRXKLBhuzWt286aTdMuAVQqRc4YST3sUz1v",
  "key42": "4vSBiVBtbiqR8d9V799FR6BdAnwyh92dbF1thKvtX8uzu3RduodHAfkdYWcwEcvr8ta2qj1eogyGmHxyDj2DMsML",
  "key43": "4PsxJztQnTppwHa81DiHkD3HTH6nrZ4tDVjDFjfSL8Gm4UDvN2vJ7iCgfc6ntpJ3N5MQvxk1FouZFYPqaWZkcYkQ",
  "key44": "21Yh1hm9BYp4rExHjqdqpTneLNBSBa1uwVaHWpqAeej7qtVLjVGWhkxrpJpT1UiUDa6Mh9K6BeZDs8AHhjCG1WkS",
  "key45": "4786tTbFw2NMtS8gghTkAo5LKHzTE5LE3sRoXa7JmvzqArM8Fq2FgcgGa8nnisrKQqrPG5EwVP8CwmekzdSR4etz",
  "key46": "237oVwqD9cY2uUyefdsQTTjYu9TV3nYu8FKkzWCSbxYRWDGLkFeSTYSaTEJ9LZVBKtRdjodYa3xvvXx2GHfm8Eoz",
  "key47": "3qyd8fcrCHyQcEk5FkbSNWwsQRVfXTohGtj9FzPet1TAJ6avXQVL6VesssxK1JYSiaqNfWnDC6rixLvSRueUTvsX",
  "key48": "L7XdrqkmefRehQvgmt39gSmx6AiKjgLSA6RU9dEk6qXkB5bfZ2iGrCLEmJWTv4Zw49d8EMCHsQUYSzGgoB43krx",
  "key49": "4K2ShxbE2AJJgiEvifhEt4vk3AFekWq7wk8E8z6s5C6QKRpt5iPvYYpQGpjUsByP62CBhaXqhS96W7u9qSbtZfni"
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
