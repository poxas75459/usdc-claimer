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
    "3NqZz7AKxxu2ue4N6V4W61mt8REaebmgePfqU8fjVvR4eQfzSbdYwKCXZ2X61aArovt8xvJ5poNgYdKa8efXPdPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B3JSBqB5U8PQsrwSCxMLswPMQLPvYP54xxzb1235B9Gy7n1y9GGkpHyhyDMMGXnsubW12zbwwi8h9WSacR9sCiS",
  "key1": "GYe7a1jUCT9wpbe85j8yeS9osYvmPFjkYHG1DKhgCnFBymk1orubGiyuiBy3RUTASvcUfjebhbnCeHjYLHWyMwb",
  "key2": "42C3wbha2sKwWMuFoqKwqBkVwJWZ7Cbu7Q8fBTC1MxufeADB5FN1r5S6n7hbr2KzsaPKPRi2SiPPXGkk3pUrseUP",
  "key3": "5Cjgfz4twiRPeUgFnrXwhStpk4LRvDfgZRusY2kVU9Mp4b1aTc6JuELNnA1WkxNnw6oPotrvmEdLhtS2YmVu4HQ5",
  "key4": "2o7xm64BSqWChNZVUqKe24sRuRq4f1d9RW9j1YNzWVU4CuURvtQx9XjiZnpfXrgCbTSj9TvJnNwPm4psgiiTGT3x",
  "key5": "4ZxuVfFN2nBDNzJuVmJdaunZFX9k2zK9v6d7ncCtJYtqYReRMUAcG6GZ4gnbTyhuPDXUQ5UkibWLrTrQGpAhWvCW",
  "key6": "3ytZYVeDizhVd5ueUCNm24Gp3uTrZAVKsCxdTKkfrwsdsTCtTpUnNNqbcWKEcZUtkermX6SUZC3YFGdiZKDtjrSE",
  "key7": "22tdAHEJkSYLkh7EU1U8vjxWn5U3daTQidJ9Lv3HvThUqTqgLRKsBPHk1W6iyBXqLPaFCyAhMaoQgCxou1nRmquz",
  "key8": "41peKyJfttsA5zJBxkd1p8veGLvUEa6WJXC3jftkNVXG8YYsDpSmm2j841sj4pftfsVN4TXwoBoHFUebAWt1rjwt",
  "key9": "5Np2nSduqsTAjXXhLNhg8GyNEn6vFxLcSqC1Y5qgNRYuLrQku4ocyybmqk9H8jYnesPEMTQE5x77nNWUu15vrgH3",
  "key10": "4PdsuTS1Km8Kn7nRcf33kRf8g9AtbVbuNqUxWKwThTdCpf1t72d2eZbhewPXxYVtQ87hsKeL6WvqNUz19KuPeibx",
  "key11": "2Q3ETXPj8tXvh532GLqN5gKxnMuo3Aur2Vtn6aiwQ4H1CxJ3cBTV9n8Nc3Qz4UuoUsAqTNDfTkQK1UymyHUpiDvb",
  "key12": "3MSb1RpscRKvSggPR1nAypgGWsMCV1BgDYJhao2oNRMHa2JJJqWgBcdiCPap6GLZ8JNhtkrZYU1pcT5MTc7Q5L9H",
  "key13": "4tnN3kUEewSLCdbpm3HoBKpZ6UGYwGhiY6uvR1LAx5HMV7zedBgRB2rJpGHGcskd4kCoSmuEeNnxAQshSRiAomn6",
  "key14": "Wp7U96AugC9WeFg2T68uKputuQ6v2zTeDzjdURr2PUbk1F8iGHu1aN6T9ZdHZCht6nHRNKXTAPNURrgFU6vVckm",
  "key15": "2zzZLCyTHnbFzx3LioLZLkGaazGpMM8sEYyof89ooqYe1u9WDcV2U36e69z2agS5ycWK9Yqf99radE3ocbrrRnca",
  "key16": "bA9CBuRKC4vdYqVHpewkGApC4LSjJ3hk6GkHyETEJGqn58LBFmSqj7594X1QarEkUFbKrpZb3VnuBm9e3prH15v",
  "key17": "3wi1obtpqZpatS84zgkohHkbhCE8qSua8z1rmne6UjMW7EhHm9zrZYRgiisUPyCqBNdeYMBtECjDgTmiuA6EsGAY",
  "key18": "59mkvNhwY2JJ8j4ZTzBX5wBP1jq7wPruQSpfdqTpr8oJbTGEb8y7yjEX7BJ1YjppHdCDvEQLzepJstHTCRAeKbhk",
  "key19": "2g1cJjoctSHauzPVZ1yNA2i1XLfK1aszjWJJ8xK4fnBgjQ6Z1y5NLJjXd4GtnH3ZwpKST4PMiXUHtC8H2dtSRpNt",
  "key20": "4mDAkQHNo9ypW4tet8tJFgGbh1MFQaf3XzxLbjeF3Cici7tAtLfunFJfHh2ax5n1xTRCLde2auM4nmgAxJKc8qo6",
  "key21": "8Vma2CDuXLQcNB7Nb7kTDFciaemDC5p5qARvt7wtvoVxEq2WLMkFiBqswN1BchfUYfttfcqHvv7HHL45b1QRjDh",
  "key22": "5XMYZ5RszgZH5HJraSTE57oh9A23gZ1eNxkfP9cZwQaTjEBeCANNqqeACFkff5kvd8Hg6Bau1vHYwwBHG6h37fuy",
  "key23": "4eXWpszwaM3TSPMa6dKevcbdNmGKktRnPKBmsdnLYd3HyZyjB5NdThJYSuacjjRn1ZEtoJvqNpAvtaan1e31KYBb",
  "key24": "2VJbQfkcWetgHdHUmmSFW73QAguHheoPE5mc8dkxnfzpAQVkxVVvcaZWDfK9xoUZJXAgZTULwQsRZJJedggQ1dwJ",
  "key25": "p6yV88yb5XtEJMxWTYKtkeVUebRqv5bMx3WTgWTkYTiX6UU4upC29FqPZLVZvE8LJgL3NFTTLYft7xY98TykpdA",
  "key26": "4W2zznfHD8evoQrnp16QpHPLfeNernRAk35mcvAkEPQrzNFgsereu2sZgnpSqyH2uQp7iVPcrRbL6u2SAuaUdtzM",
  "key27": "2pRaMZZDH8yDeth7t3JC1KNx8DCFTBb8cvnQz62dqfzMHj5LAEq8c6eoQSpKhGHjhSYaycCmEqSPFN3stB4g3qL4",
  "key28": "5Zq18chQwj4Zakt6LdHkqwp7JpwhFuQhMBByTxBqWrWLn9eoYU9S6eQKGB2H734pjd2HdRG4nDNsvLUi2LKgZiNX",
  "key29": "3433SgtnCJ5XcypR1mRCXqqNKP2BHCKLG6uPB2QUYV8DHnbGYW6Um3P1DAaJsjCnQyp9hpAwXBw6KLPi9V4QfNec",
  "key30": "4q2j1QC3PFBkP11ETaHSu9bfmgKLchiDax5mqnLSNVkg2VGBgo2AKfPakzP36JcgyoMMaWh9STUwJKdLoe7Ju1cB",
  "key31": "hSux6rP6u2qfKzFBwq6ezTeym84DQy9QimVczGVzDWMCVtYGdUFZymTDNk6rNJFTbYRWUAXq4R227HZQf4NF1di",
  "key32": "416bN7h6Gbw21KKSsEsn1645ADBufiWd1iNTw7zs9ScAuFJo9ccb5rogfct1BRmTtmLJdGGr1nGNg6BSLhsoXjhL",
  "key33": "662UL6QKhk4FU14LXsUbLRCYKrVDfdaK41HUbYPxmwc1BfvLocM5rbGtuc9dd5FxbByTsm5R7A4jocqQgG7vezFo",
  "key34": "MbfXW6kz46nCdiTT6a29SHWwG5pjdHfm8jrSGdrMwxUkaJdCpkeoQHhoM8YRKdKycav3vwkv5rkDREDquCp95Fo",
  "key35": "65UtVwT79CND29xzF2jX8TmEj8W1oopjJtBw9wxgzguVvMHRLVfU9fswA5YQooRndfU25RykkKMzt3wZjoQPK4ws",
  "key36": "aJGQn3oUFpfqfJygANZ4dTXkmbMBvYVL2SCBQqUhE3T27uLiEAhZubTjafo1X9VoDxhVYSvR3ppTQJ9TWD3a9TR",
  "key37": "3KQX67BnssMeMS98AEWuwWPohZpAjEaB3JtWRvzAJx2ucvQupvmCKe1MWcgaHF3ULe831pEAJKwPMSHb7L12x9Gr",
  "key38": "ZYTnXRpND75JkWdY61mBoRSktQs1AXYSCWfL9dsJcBMj9Cm3ZiUJPTX922egU5CvU3H9JyCWLqpMcFAzfY77F8M",
  "key39": "5A4FUfiFdaSAKLi5a5c8qXyt2s5A37v54QkmSYeq5kFjY55v2uEbM7peKx6KATAwhqth8Yb89F1V5W9rhefNmYt9",
  "key40": "66spoo5SARDWrQJgwX6jcTBX1DLuCDHNaHuvPNxZm13JRCs2VoTnnyoanYsfTPcdswZd1ugkUyQBqDvhHjEqXmiF",
  "key41": "4yv7SPJhoZVtdT2CkY4Mn7FGWrLi5NKfPPJWLhsmBGkEY7mwMqSKzpfzrh7q7pRBu3Zzg1eqbqXMhJ4JUFYmZrP7",
  "key42": "udt3fRuXcgh1PCfVPLkC4JZmf1Rzb7sRvdvAaWz5qASvwQaWrrDctXtWwL38SRu3me81Y1RZGTrgX1Rf3qTEGpz",
  "key43": "9FajoAfQEMGHsFMu5kFXrwQH14GqsqdgwAxAi3eoE3wkBPQXBt62g2NarruzvhKwC8eBEPvwJZqnSRPjbsy8Arz",
  "key44": "rkxGV6SvzJAr2Tmy7pRGGM7tJKZx4Qu3zdbLkLbp7GTXjQbAHYegHyXDwBnxnsD89qYDS35dj891enjhJVvcVSq",
  "key45": "3VM6B94bHdKSTbvBTx3mcjdAkSD2rwhLN5kozFfqH9cvnM4qQ9hNVyZ1aNdYo3VD5gzkeYEcgDBh1Utd9psbtdqQ",
  "key46": "2TYySAQiCkocssmUu6czs1fFXemLA7WyBh23qpEfHLxWbJ86GWuDjb9verwuY3DV8S8p3JUgH7dbVVz19V39LpvD",
  "key47": "U6aqD5q9znc5ipf7yX8rnjX7RHUhjJ4uBp3RSns1v2hCqCbcaxwDaVUr17DVTARBE1KM31EFYndbYYu2QMWZUHj"
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
