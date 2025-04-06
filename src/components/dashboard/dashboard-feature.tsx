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
    "2qkd64BCrZ7uJVXYqj5oHPeiU2EzUSkSX82uu1EJGmiDtYVPUwdbYr8nbQu79KQ6Ykjajdr1zD2B1m64CrCVvFHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wf3QHSoUWes7kAP2sMJN917TdAiZguS3Y8UJQpHctPAhjy5V9TsBVbo3a5gjfvrqTyYAJQAMomNu8cajP8RCVC2",
  "key1": "5WXKLgcZxo778yieUsTRBBWh5rurr2iq71tNvZFnTNFratk284Ve8PtG1s5hck3zAdhAadmdqW5AyB6TSzrzJm1T",
  "key2": "D2VtsJt1vwerukfNvfvHpLMb4NgJwr4NTJ8TgD1qC9K2k2t1ZSgQiqx21CzXst2mnNKhspBUV65KVScqS5uAiMR",
  "key3": "2vUS4Ea2zkPP3TKZRedq5RD1vQhXTT2G2jvbdsgzmDEtQkaVh738Ng5dMEK81X138fcYK5PVXrkvPivgX1rbSwLS",
  "key4": "5cyovzryTmvJrTHk5vuawCWj69wNaZieHUcwpr7kXq3ctKvgGJgeoj3EJkETkohxNYZ5ZE1wn2kE9KqJc7Jk8aea",
  "key5": "3UeAwo5pYrYgPLCUxUNbe2G6yQASxvGAoQwfSdPW76fxwuPHz8o4vnnoBXD5nUQY4PDUvXqDLoaUZNP3uJSJVEu4",
  "key6": "5KpNnNNYBcxxNazvXUbykq35fsmHfLefqnHYuZb3FjvwxFDssJTVW8EoxLCMwfpwL5p4htxTAAvGqRKPg3ypr8tw",
  "key7": "28Uzq2AWhRQf4zPUXtU9h7J6SvUAXQur5TuJg6hbtvzMMpqZ8tjDhegcwCKtvBdznDQWv1T4yS2bqo8yugL9dXnv",
  "key8": "3FJdGuSNYJvMtQ8pYfL3YLxn7JrTEN1cbWn6NKDWrW2jd2y8TSFjL6Jb13Lzshid1oXxEckZa6Yy8HC9QzmGo33R",
  "key9": "4voZhPgBDBWE4d7bmhzA1Yrj1zfSni85SpzXJo4G6sLWXoKM7apCma1Wsx95SYScBnZJ12wtHHVjZVkdFn76yMjn",
  "key10": "3DfU2CtEq1LWqUqbxDk64VJ61umzHyUoS9jwXE8Pr3qMUGuZUkjdfq2fJ7K6vWkXXNZqQsqpi5n9oKyryPAcneiW",
  "key11": "231bjUzTX2PJdNC8Xs5vruNTfzS8EPxwQaozZ3LJEF2aPmLJRCjH1Hdz8xrBpoTQ6FwxirEcWzwWftNoVUp9q2xA",
  "key12": "3zJ9prm5zekHKHSTgJYbbdqVGXPFHSGxiLUJckEqs1oMgoWxZNx12puUC4bpNXcmpeMqfAe2Zr82tT8EzdeMB4N6",
  "key13": "5apQGjFEPBYoLitBwYHTMwPszHLphDrv147qdVwQwPRCyQ3h6VX6cAFjRckZx9BqjbzjvACU2dSf3camuQjKkc8r",
  "key14": "u9WxgiE7UgbKdV2RKFVXC1iQKk2fCBq1yTx8YVMeby3ShCcvs4cfbDDKJkmrnDk1VeLoieMx22o5EGYJeJWgMSJ",
  "key15": "iGMtRi1jP4MCbNtKjmSSrhoLeA69R5mZPHQHTyYk914r6Mhx5xU7c5PKbGgMw21XaqpmhBr7dhTNSrYMvsZyrFL",
  "key16": "4F6skmjqeubZ5VgPryvrLRN34KtBrDryFitQVNyvgREsKUSY7oiec29MoeEgUKvG9nmkZKFpcJcwycKRAu7Yd3Zz",
  "key17": "mcBjGkdxmGuhWzSpNyRh71ZGtfYHbpucKVswcKESw2JJyWBGzgyQBdqJy41jsf8CeppqQ2sXNjsLAuoo6UZv4qV",
  "key18": "qejBCaDVMLgvj9VXvDsKq3sUGQ4fzjti5rStwuPQpwHrKSQnNsiwz4P5FPDLUxXsKrM5ziiWiBZvt8GY9VzoMy7",
  "key19": "5maVWmEqCyBQeaR2cHfyJnKjY1h1do37s465qxMm6EhpG95eCNWYGooogQSckAmW7UxZRzGLeB9uYBqpBYxzwTQS",
  "key20": "251nYBUzEqKbgHA66GFpM2Kz5PRAihaw1JUJ4jdYVbEdYCSMPsVYMXKFTK4Kq2gVrnLVZaRbGiiqxXLRNo7jr8x5",
  "key21": "vWvzeL2aaWWq1KubMXZ4KwVjvWcVPBaE3TKaehdijnGP6SRxpnVDedmuWfrdhbduThmHYbTKKTpCgiF2t8ZiZ6a",
  "key22": "2iSg267YRQ8x2betWoK9nkXsTJEeqYXYFpRcLtSCc92bYw2FhZN44F2hcRPS8ykunFgUkvoQqm52QAptd3QdHtzd",
  "key23": "hVKBKo5B7TPcBK2Yh9n3SyHrdzP2PXtwqhTnSdKCRpSxdfeczbG6ykcmpQpaMdgMWd9kWJ9DBeSxqKexkHn4eBa",
  "key24": "4tDRARsh37kqdpKcxanshG3LbedBz61mpkPJSTVsiCSpid5meumJ2fymFyPv2FEmMPNExKM8u3AjeQzoCzSUQL1t",
  "key25": "5qHRgwdES3Q9FfZLJtuobyWFA4xCuru3emN2X9J9uQqnPi3nbP72MHDpzy8173uebTUtKBQMf93wKwAFwByk4P44",
  "key26": "ekL9bBZ2dPfhPFtakd1BcjrwCAocMW1waSZ8FEzFS2WEUnVX7rj57K5UnA91BA1aJbdddSY9aHZ2ULYzUACqLbi",
  "key27": "3LoftgEr1pW2RqSsH6A5oW4xJKbWQKXE2c1Anym2371A7cRixrF2oKj2u64J3Qbi8S1jYYu61uAWcXioWaN9DjmS",
  "key28": "2bTDvEKFjfQ1tLyVrgFAJvJ13Je6XQtE4qP84QTAEUbSZcGz8jQzcaRcRR2rr6GYZtjR6kUDvrjrWcqyHm8X7ssy",
  "key29": "7WdhHe4AnxhjiTdzxmkz9nJAHvVRQ7HCbBJKaL2yXggHvyeebqXPuExxzFLwAu6D7g2m11SwncAwk6n5LJMUJid",
  "key30": "5d4WXVRzccYFUvxKSVstGs1PD36gGH33m94iyh9uqqEpKC9RznTZjhd3CECTghvLACBhMNWi66mEFVVViBysN2Bq",
  "key31": "4z93HQgXQTEH84QDpqmp9CtDy3xqKnMNsjg4xwQeXsx5pUfEzpntDRkjM56hjsAjXJ8vPowBM7Rg1raB4eu4uj1A",
  "key32": "CZTKZac9xqw3EVVzJ1xhk7gpiwgky91kK5txf62dqaitdky7Hv6awvK7iQEa1p5oGbfJzGUpcASopSq9D4gKKSG",
  "key33": "JA7545xbYU6WEregXEaSZFBBJrXUkq4Lr4oXpadXr3AniQZByXzR1pvW1mcVjQghhar8LMneesAQntnF9NXZ6eR",
  "key34": "4wYd1CitJeHU77JxJ93KM2sHx3attnCu8b37bxD6hmUXK6mkTHp937k8MS1dodhbGycmUg5GcXZQeegVBFg4NvRA",
  "key35": "2YsUNWXXycByHUBJr7YxrxDvkCQpnKU95XgH7PVZaLZpTVPdfhBHC3aAWe8u4E2XKXedPMc6dNaf32m5kXets3C3",
  "key36": "332EbgE58DxNkgWbs743NGHBv1xtMnF7Ti3GXwcYPwXvzxJx2CjTnwnXQ8JgeHw3vSemcDMCjDWTHBMG4hsZbYR3"
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
