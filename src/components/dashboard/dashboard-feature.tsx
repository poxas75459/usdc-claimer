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
    "qs1rwEHbWqv3jyjQvrwn8nCE7Zp2ojLwngLxATXz4Pwcx54xA52TXB4rZ1PVLW8gz4HxAfrcgmn3wEDgk3KButY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bTu5haS2S7b3JHxGi6u5beg58c5xinZkLzXZSnHxHPmNSr2UZ3oHUQKmbfSkLfJJTPr7kyfYhJAWtrZypu8HsJh",
  "key1": "54LfwuYBwXiUMPvahq9QdyLGMt3QEFqC12tL9fzJudRp4if3GrHLcozCykptr2kS5tHECp1tYDoJexAedB14xwF1",
  "key2": "5mgXnrU7imMkvCear2pZ8e9eadTq6rTvA6iWLn3bnT2qwbDLJhMeBuJY9WxFSBN2yKya5EvRLAwV4yYmqYFvkRB7",
  "key3": "Jf9pCdwWRN7C5bYeDZ1orpNmbB3SCPBWN1KzyDB2Yo2UsXn2gjSfW2Ud11Xx1jGkuBLmk7Zc4em3Ds2Lamj7cNc",
  "key4": "4oQnMnHTtkksw6bkvdK5xHyBJLdcXQqQDKnVNfY6fJ8UNoFwrMHAefDmJFk4p8FcmJPHR6Cv2eKJ1n3skvMi8mJt",
  "key5": "44prN7c1RPJWWEHnhXizgBTFKqFqbqomgggMvhfyE6e7ZeC4onhifFPBfVkzWFXZaGn22DPUucxpzPrpMgyhHYLy",
  "key6": "JifKy6aG7Ms43hZE6Nt2EgvuzvADM36N2rrnjYPSovLP11X1VZXd47spxJoCgBMz2DP72n15GNXXhX3wMxYRzex",
  "key7": "5qo23WECagxefKQxnbb963fVhnanqrC1kw3Su5FAgjwQgXDSrcEDokhMpPdYMe6ALM1anvzjjLCD2HZb9wsyYZPB",
  "key8": "3dBtzypsZkF1mq4pePyEYC4FPBHy8G34Shunh5imRAE8nifkuX3zPPSeDGxBYU6o7VbZtAig3poyb5V7LPzFHvhr",
  "key9": "5hLNtpSEr11SktduWfRwR5Df97zgUUeNSu88USPaZCW2PTrKMCeXgDf5uZVWCVpLUJdySmmkDLRiLaFbkbRyfiWL",
  "key10": "3ZrSiqv3cks5ve81xTwidwzbf6uQ6xYTvkAmDHRa33QzP6eAMjKmk9ikpRFA5WKyM2sEVX9WqdktFos5vPg4kVC",
  "key11": "DHK2Wb1LhBTdhtoVQWbRPbt3koQG7GdAhwy13ydEaGYXjCRr7YQ6Av4Ko5y2pDijCmen383ZAMSWx1JJgbPQ36K",
  "key12": "4P5wSPCnwSom4RtF8JkstDjnYfq1KKtSCJKRTfMudGrrm1RqJ8peDXHS3THQ6hQ3i5GgNER57BKQPNXERuw7vmxh",
  "key13": "4MdGjDuki7Aca3uttGgL6psFECDTdQSabuQYQR1U15PN5TsULB5btHQFUuuWAycu2jozBvudzpmsRwGK1vxWexwZ",
  "key14": "2b2JQvkTcTrF4TVJfoCHikEPMhg4PmpSVSLW419QYSRFbMtfVWsfb4baLtKWGVjyKcSctsNShpWha41yWCNBLnNE",
  "key15": "bvvcVtaDZGpFYvbRDDQPb1Ex8WbQShZwBcDRBRp1qJpon6Q9VRdqBbY4nFMgJd5rRoJuPsGZJeyXMxZ98SGMo8o",
  "key16": "5nYDfyb4oGkLvHTxGkt8dvVD1xmCBL5UYQorrDmxj3gVYukpFb9dPN5MsJcCzP6qkWdge8KC1tDvawxZX7CSmFsw",
  "key17": "2LsQzbpV2JUHSB8HzWpYuQfhyPFpYsJPSFQjJxwrcTAajRj9VNG3sDLndiPC9xt5iuSwbeQF1DhkSTF39tVQDLVw",
  "key18": "2A8rkgEZ7wG8YEyZzEzSFyHUxh1Q1cHESiDauNoffVxByrR5uteyCVfNuUbZdkM4jknmBKkzyzuzBhZcTfTumqXM",
  "key19": "3sRmFg2GUnw3LqKvwkZKkLdSWzoGJh6KMA3SpZb3uFxVmobr5wYhYLMUCVkw75zi3276DwcA354L14MefavA2Eb4",
  "key20": "3ddfMPX3dvg1oK2rKKQGEYbaQqhVpXxNFQwiWmgF2QMw3FxD2mKp9AhWEuqPCHw5pBd1nwCGoUdkah4bxpnGxYqJ",
  "key21": "3nLVS5n71ryxrggRjUuSSEHqJmT5hYRc8XmqfZELjbCerL4PaiKQdb6AoKfa3eZCkehZpvLBGhHRYjKq8G3nnFT4",
  "key22": "3Lps6ZKJNmxJBPNBF1BFQ9Y4yDVd5qxmzJGn97mrkmTpAruAojF8Kf39pugm1DV6dKvMXRWCd97KtCgEoyZor9LK",
  "key23": "4eQAwwskShJ51XF6RHcLqGSXY35sTgSAUmPQGn4EL2t35WpFjoCEePFZe9hxY7sKU5PwVkk6xxdum1AMWbpR4oFE",
  "key24": "4xwVUsoKpm7AB1H255zneakry4pft4MATNWcvXom3tSk7Qjoi2kpdwZxHJT6YJiSSX1ubHh6xtjbTVFQ2jcyifWt",
  "key25": "4C2BXKy5knDj8wf5oiUWH8dZxSaCfWnyPXAvZrnkxs8mBteZjJz2zLQcLZXhajzL2G5p66hyavE3TQ9vXygVGkLj",
  "key26": "5Zn384JUTq1fVBwtjeT84zMudUEiQ9nZsKHL7CSpMdwt1cK27HFuTx28MMoaybSBtQ331wxgrPMUL4ebiXrHKNBX",
  "key27": "5zLJG4z4zbuNjG5ZQYqQoKWQ16r6SPTjKBe736v8c7aTtPzpRzGUyRZ5NjHhEpLH3Se386HC5ZoL7jRRYyPxMo8p",
  "key28": "2U68VjFXDijPo9MQS92LqoJYpZDTEUqryfx836hnr5xXT6kxGFk8umzgVxBM5NUUPjGDHAxHNtG3Hw3C1cRzop76",
  "key29": "3vuzS4d8q7pCZS6krjjcwpsLLmxudaMRC3dYFgGmb2BWomT8UpxkRwCU9Nf3UXtQGKErGxW4SYWLXxdg6GLLstva",
  "key30": "exw5niRzdJqzv3Exx3Rc2n4xvzAyScqkRAjsQnD5jwbBMyfTHRfnnQvqwyAqGsZ4NRDmVoQLnVi9GA8KxXTRddG",
  "key31": "41iq2xtDgu7i4Rt7JrbdKSJTiu8Nq46qrRPd9DCRbz3sA5XsggznfZiiG3UgTWZh4nj9PjBySZ4ZABda5bKTFwpM",
  "key32": "55bCxHrbYhkAijUa3huPBMCtSYpZSdCMbwvP5rx5dnNjFMQP2H7EFopcC1tyqTdr3quL8QQvMydR6NusJpR4uBbb",
  "key33": "3x2aApgu3pebY8dtiQUwGAJ4Tgro6W6VEyAsFisUcTP5cTgq9GTUeskHQK8MAAp3ZU3wZq27F1tMa1d7euJz2s8r",
  "key34": "32zqPwG2GsuuLK6CBr6TqYA1oPtHUVFtrgnRdZVzZypdZxgqt22duT2QZKmwA7FEpXYqkm5M22mTJeBFYDrhhT1A",
  "key35": "3KUXh8SupJ8F4PYLLDu1uFmGHSPrpqFzYxP5JBCrBBNMtpRQTiEtenJ2kQSCUKLgvHBaeze6YwEhAJkG6Xp3ECnC",
  "key36": "8jta4PPDa2xxs6H88gtQhzBkHmvsPf5PqCvL3izMZq7m6cHxQpt7T2DCQFY6Cd5dsvKwmhhLvjodiBtFyN4BU2L",
  "key37": "SSZ5JNQBD7qt8Wd46n82tysUcfcN5LeYnL7NvTCGbCDA8mzjBTZCsuZfGhHdwfPe81hQnAcfmcSCBgWU4JVgRpu",
  "key38": "66mUivFYoj6JTVSjmHazXuFh5t7qE32413HyysW6vWbw1ovYFJ21tBzPSr5yw7cVDiZXnGVEnjXpFKf5muVpn3u",
  "key39": "4Z3hqiVjx8n47rVjTr2JyZAULpm65HXEb4F73ne9pJUhEa5FxufEetNJZVL1aTAR9ZCWb8ci2pk9i3QZZHydibgM",
  "key40": "3rnTzLztUVXp9jtHNKRmJMasVsEYcryFd8UF6h3msgJpXPxptvcDeeAUwjkC9r1DuHUYetdSozYiaAYkvkCXxEzP",
  "key41": "28bkr6jJFr6t89rtRH7owAMeKT7EBTJWBRtgqoVJCMrqhxFAXWZ5vsykim21JpWkEbJ8e6oAEuSEffHFdek2iJFW",
  "key42": "3vCGbQoKHQmD8np47sVvm6mDZmB143ydfqPfGyh9HKV4PcqxRvAdF8cris4wSzKX3zijWMnc6Eta7mTDW4hqhnmz",
  "key43": "57rouKWETYBo2WEiVRKGrUq8soJUyEQ4sHaX8Qs9JVddbYrTEAeX1Q4YS8iYWuJDdFch7JrUPPfMtJ5JE3RxMxbm",
  "key44": "H63w19jKs7t2nZmLDCWpMNpUZKCJESvWhK3NLnQX2RYBPY8uvBSZCPeGK6MmzfAmbzoKTfyeqBARho2xEt2GQv2",
  "key45": "3HCPhpp5Qi2NUKQJiRDAEoDPX6aFZuQocAdrxrW5oMCZWxQkvbQjryuRvxQx35TPQPhB9r8UP1y9oiRMnpk1rCpZ",
  "key46": "2mQ8SMBGC5KSnwmRmAcuEjXd523XUGgNEDX9hUA9Y8N3mUJ7j1QMaG731eYvTw38wJvN3HHiB419Z1Bzo9Y15Q1W",
  "key47": "d7YBzqet2RN1q7AxDCf3APBzYgywg7dujMtZKdhXd98uAh6F4vVfAxCryNi9taZ843Qd7AAUYZ2jwYrj2Y12TXs"
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
