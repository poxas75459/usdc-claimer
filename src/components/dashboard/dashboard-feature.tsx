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
    "5tVjpQN7vgpESDNqxJ34MPKxyFvN9Rvu71jwpS7jxfDJpe6pKBaEKdsWLE6t963ddPra2Rz4nLoqSKn8aPZ9Hhww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QDSN61jAy9SyWnxYCfi8zZkqZbXU9sognA8wKGs3v6WP1cTYndnQC87KRJnSAWJbtyfbDHQCCA3kKRABATfU5Dv",
  "key1": "56BzfEp375WFpYSUYbgVMBhoM4skB3KSd4xKGMrc5z9aVicjKVZyiZCxHR9CYygpu5KqVR3RRhptYapjMdrWW9a4",
  "key2": "4j62dG3ppcKJg7uYtDBaHZXi6HSG4S6XDJw5Qbz1EDPRFNCgumWcPPuV1iYNTAzR2WpfTsdvTnczoXMZvuix1PwC",
  "key3": "jYSXGmxPNazcLGq6NPysaKKJXKk3pmy4oGtR7My7ZrPf3J26kXJHSHNmSNXSpPj8wvHzu3Lh3GL8zWckjCvT1Po",
  "key4": "5SdH7bDgSd6LT9uZwqyCRaK5SqoimnCDhsx1pr6nY78SpznZpZwkuMSCYsZ5heauBqma2ZTJn47dtLAW4WDsNyjW",
  "key5": "4Hnoi27fqSdkMYkXgF4nDsN6Bhcbrc9rB6dweqXVU5AnueMJK1EcXBgLX1nSqz9kyirWAyBj78cYUMH4Bqp3U4HD",
  "key6": "61XsjresnU3o8mADyt67BG5zQ5Y4USLt8yjBEVKvN3FbkonMRPonaLVCQu9gdEVHJshapUiu2n3pidcY32At4YCH",
  "key7": "PnbrZmw43zEAokyXvL8jcw9FTJE9eZQHnuAR2oAzEGy1SW7R3PPpFbZX7GvKUYeURwFuPNvdvNq4GRQa14nPEpz",
  "key8": "5nMwwQorcbwqi931CLub9vvFt4gdjJsLqqBwK392BqjEZhmTgmJGVksLzANxs1t7KzN9vq42Ty2DHcX93R6oTFL2",
  "key9": "4ccNRytdFEQBzNv4pvCvwXsDdQgLPNhE2C8LyZiznVgYkcNxdHMnLiK5EqkSmfDVqohtkfEbaAGNKRqAcpRYaywa",
  "key10": "5bPsRXsXZjVeT1us6yHGFfrQfzHaL5gErRCSWyLC3QvCBJNw9vNpdrnuxuWEdBdiU2hzKnHrd9iKHYtzhvnSh8bH",
  "key11": "2LtZV2sCWaq2D6N22nJC1t3krQbyZqwXZ2pURUYJJ1jkmhpXubTzvSKC66MDY4kiUHAmtVkV9SUYahx2vTUdcRvZ",
  "key12": "2MvpVkNwUZaaA2mEmj14ybBA6ro1BHL8N6toqiUXzuzDCaUkfmXJVpRKhzKfhNXRdPrWy53xgPxcpcHpKsPhc5xC",
  "key13": "afzFbDZ8sXuRUrFhLKPZAnWqjnJYXRnLNwsBzcXb14M8jYgHyQ4KTy6Aor4jap5T16PvpyKAVfArKZqFY7Epk2k",
  "key14": "5wLHsphq9WaX2LFgVBjQ3Qi4FG6RJqjJJAjvsp83GoJdkzQmpYGUv5AzVeZyAdy6tiYCyxrLZJHqyZ9Yi18ETEqf",
  "key15": "9Ruu3bPtgNrXf8vp3D238LPEc43PnteDserwYjd5cjoNdA92mqKGB2K4aG3T7bnvCfsjEwxCDQgaQH7psDEoPiA",
  "key16": "2jfr7XAHxopzjevanY1CTn3LQAmVAe5yoBwFgtBeidLe1fQzcBhUxKvaX2WXmXsvBTCsFzAKZppkvSgGFQVYsgcJ",
  "key17": "5ekCjBMJkrSVVWT4yBNhyVkvRMR7Y6q7nJCxHEaBT9v57ZEnEmk516m4Qws2hAfPpojmbBsdfTfmkGKcZwzskCt",
  "key18": "5v6B8rmbQYmN9JRThLLDc26kwBiN3B1R4WrQg8h2t8UcTXDN1hyLpSvkgRUtJyH6GbUkDGeqiQrR5gvcBYp9kQct",
  "key19": "3q9BSrEvy2vkFY45uq6yf9ENvac7duHuUiWAMiVqKPhSGD6aHrSvcjZBduhLGtp6WWKTNvqq9cmjBgaq2VDe2K6h",
  "key20": "CXgKjGXHcC6bmmKdo2b4ES5PzMWPT8GqwmGQDSMeWrDT38gaXCs5zjMziZZgmNgZ54ZcwkwM6ACL6i4oR4p8Lgo",
  "key21": "2cZqEhfKNL6n1WzAxKbmcfkdBCKqMm9E7DQP13Y64paVxwEH6KUrTiUauoHAU2nrZWQr2mh4R4rw44ZGZjquki13",
  "key22": "XkJ3bW1cjtqmckmZA9Jv6xXx5SFbnwX1V88Qt4euMDeHWNmE4Fx2Cty66AcHCNGJ5WiemsA7ij7tWcbTQGP6pGJ",
  "key23": "2KFamuoeSHu2xgFfPhPJnb8dp7vf8o6SJLuZU1hE1FZpRhcbgyYCdaDyhmnPmDGFA6LoBRi1ypCPCv2amnxpqMNT",
  "key24": "3qdFXtkzD7Ju1iVBUYHY5oJHLXG6N13fdwB8fgSKafAcn4JAobqyPguUboCBdCfWbnwjm3uiqmbVeCYsWEXif21x",
  "key25": "KYdqoXbxus72CogfveQqWxy9TKKWyFBWcZXgmPiVwN3AYcFLrQ5pVL9T5HX4rWq66kpEiN8PakDgAK2VMpTwEWm",
  "key26": "29y9hTLxPqeX2jinFN1ZhbxVheETTcxNAi3RJNCnmNpyAPCykzkUMGc94GCjeJHkR6uVDAiaHjZC2sotrXWt2E57",
  "key27": "5qVfP3fuyKGqeFSx9TFgLMPmqyXEyxZEpq8ghEg8tk3MBhYyfxdxUoFpKtDqrQQHYRAvSDvH7dGpYajDR7WGCKiE",
  "key28": "3Qn9ZCKLDxLKB6HYdaqSWRofhcdpt7MbjBd7PJg5fa89YeBjZ6jjYkrGG648pz44AfKpWqCnHPqr9hyAfZH2utPD",
  "key29": "51QZLMHmjzWEF9cePF4UZ1PHw59dUbXPwKanJh1JRKacPLgddXZgqWeCEwvfxnSUtXw1z4BzAW9NW2WpDaUb29iY",
  "key30": "3LQDX5joxcATmc5cHXcAZmsz17aHsVAdenvP73cdWUiejQq6E6TdUrPP4EiCc8d6S9tgY1kW9RtDeTo4ZhsEyR1b",
  "key31": "3s25EwVFPibZvHNPZyR4kiNM9ZSZkkzqnUFjUnRNpDjRnHZyXGW27mXz9Ds7tyJv5zjuEDV9H3XfPaV5qqBeigtv",
  "key32": "puicqDFKcrxXGnbyniUpwsQeTBdq4ByRsPDfpg1Hg7vgfCpmsabV91ddpkieoLBFKPt6yhw6ECiVskcZ5phW9Af",
  "key33": "5y4zTyj53CJ2BiWoJpCKJRNSHKqSwn1Q9NVdLQuL2JLVDfqb4PHPuEs7BvqpL4jkpr84EA5HmThXcgJaQRVX1hkh",
  "key34": "eGiQyHk1qFAPQASG87YXiBd3LzXehE4WT5XJzKajcpV9iewcEMbFLRWdxrrR4jhWvw75mG9iThgQE7vdQCdXeFg",
  "key35": "4r8V8UmatEjcJATZwNhdsgzFr9eAvL5eeCsKq27kYQgpx8PaQ6ATCDgJ8HfqzRY2jKfA3cbtUj8T4fNhTcSktZZU",
  "key36": "63xvnWzwSFp8T33qqZtMxEumVtxruyx7sGg6Kek1JucM3Ef5xqFbM8HiyzdtRoHvt8GcK6B9UsYMPCZq73VcLNg8",
  "key37": "439jqQZtomHH3yNLTxrSeU7rF1rD5xwTTzZe2VZEUuDc3yMJMcs2DwzAMAtucbDH3SpXdkb6uYsRGGhrKeg8X7hP",
  "key38": "2jQi4hxfjiMGqddMt1D36XfBu8qcPTNxMMWPp3cbNRweAhhtYeFy43wTC8yBoUo9ETFEJuAky3iTaYrBfAKqdBqQ",
  "key39": "4qTcu3dE7WE4LpVyJbr18YVjApX5fs2xiGCxtbi3vovbFHzdcaTRn4CTFv4TbFYdGe9VXnRq4yvXGFq7L4bnCbAf",
  "key40": "5aUhzGfMVj3kDUxiHGUNs48psMMykeFLKm7QhCcSuEu43AF14P8TzjtrHmwEvDsbjP1AKqZMMMB25vijFR8Fft3Z",
  "key41": "2fnPuPfxrWMe3EfEzPA4gY6PX3j149yjB85dVa7odSYmnun7WZ5BeqLVseUy7rnqTpu8w12zsv2mVqn4GAAJFaMM",
  "key42": "8aRUiekexVQvBVa2UrvmHQWSy45HV2jepPZvkucPRnQja1EXcXp4varUrGodiyCBaDj2vxvkbyygBF5qKWrwU1f",
  "key43": "2Fsx23HgxBGy9gep1UwR7d8YGG76cfPJqjvX7bTDANanvFkXjT4v2ei5bYe16fnj82MMcPhLSf1jVaXMAdmvuZvt",
  "key44": "h68xq27iXrA8sSM8k2y5AmUBKwjumMFg99xjwWuZRWoZAnyMagTp8NNowAeDt3CUGL7Zqohg3v4PDUTeHReXDC2",
  "key45": "42B7bbAUiygwLi8S4RRMG52T7FoiGqoYGr7w8hoP72ocsoE4bUZqFkgCapPisRQDCUmq3meadGNGhvK3hT1GAMvc",
  "key46": "2Bk4V2KkyZfcoqVfiwGgcdNjJy4xuWPcocbGD8aHkJenta15LHyxaDpkLoTgBP5GtpLVcHQckbsSTiftRoKRuUcH",
  "key47": "ZhPyV3F3WnVXWBBoqfohAfmqZz6iwLWHmjsi7C4DT23QgbcCptumKYW9DJ8EY71PhzWoiHUi1Gz1sMg6F8fVv5i",
  "key48": "3goBsFFNByAPXTBXsuCZFwVz4ngDo3EtUkKKdySaRzohVu4ve6ccSB5oErQ1N2PcowspNdzf9NdDVzNrwmzGR5Mb"
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
