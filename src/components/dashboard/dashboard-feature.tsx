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
    "Zfr66JmMjcJ413FQWSHm45MkzaG7qAcEm3WyG9Xam1PwTCA63cKmMLxrmeq8jDSGFjCKJtp23K4wHT6bHGX3Jhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yaqfpTTsGu1bbW9YcRj1CvfMChHvcojRWg1X2J8SJX11DYAvoxPbdUCV1VGe3Yk1ssqpcSSKLJr3pD8x3nsqiHX",
  "key1": "4fFSqKHxqyEHLQyfdUvzf1Jx1RFsNPYmsKA2zSbTLpzWq33YLGXC7jQhF287rQddF4zD5hx1a4MyxnhKeMb6sMUG",
  "key2": "5hQooHrDKBoHdYiCnH7aPF66QxLgy3ExmtE14yN4AffD43CuV1mxhFpEYiRPX2NUyWRPHqyxQqBrCZPTTwRzj6xt",
  "key3": "4b7GK6iJz2Dt9RiwK95pYdnKsmneKJXmuta8mrW9NeYdcjaHKG8z9aafPzDwF1BvSNyMCiZmkfu1JbzYzYy7utb9",
  "key4": "5u3tpD44nRKMLchww22M3rPFG7PzoYj8hhFpB715okNp9P4m8srJFmvcwd1rjAHiX2LYDNXCodJwoHRkJkqW4adu",
  "key5": "2Nx3juRosi61UqvmySpPZc4ryDkZ1nxHn2J81mK2Jh1T4HmWB3fycU4QUx4atb667VZDVwdxNcjsC81TYw9dkqxh",
  "key6": "5NN4JbXGmVS7VusvBerisjEEtLGPDV2uXMvbbs9gmnf7xSN4XLxysaefGdyfMRCzA7kt64JBY6GesxvdQu6yjrCm",
  "key7": "266U24GjyUXzorV8d78GKsVuvRjx9DaRvBWUmycpVB5u9yLdLJP9Bv3AzoeXLN7k5Uhf87BZpsoaTF3fqTQLYqib",
  "key8": "2qfkdm25DKqd4Fw63Y8YDCx9xQ84yBEDo8D6dSkbHvuAKabW65JMsmjj62dqMVM22rQsavERKzsdKXRfpgVBLGX2",
  "key9": "42jCqPdpdGe1d6y7U3sRP2VUBXKSsoTUQzPxi1X5BMvb4Ew3Js9hawGqqM2eQozBofa6ZURMJxDjvorwLzt4LQoU",
  "key10": "2EjDXFvpfaZzEQXYgVqcDsjtxbXd7HHQ3Hzcq6Tre9mj2ex7vpM3nFYptX6NfgtMMz74XfTB7wW9DnTNVeWhtrCM",
  "key11": "c3hvC2np37E9hJr19pYN8bG1TRA3UcsL3egJo24zdLwdbE5VdAhcnRXybjXjotcQModD36bVqPH3xVSqWDuSBbC",
  "key12": "2icbzzAm6HULHFLRwiD6M6GULysoTy1nKA8njGTGwPZVCx7DPyACeAUrFZY5sNA3TdtAo2QwkQQ4Y9gJxYMzaG2A",
  "key13": "Q59mh3HvioVrZuMg2cqstcUSuAeTBHeX6N32X4yxCxHgzjPtZ3sQyWbBrQXtHo7criEbCeTitB52QDo3hW27Fg3",
  "key14": "3YomfN75dmh5jHerUXok4Amnzkf5rki6osjxVyvE8NJrRYxpSDozLFKMymbNdJpEQpioKc8fPLt8wSGncVFCVaqv",
  "key15": "3tmcHuG2wwxMzNrefUJNFU9XbNR1W2meE1UPTk7Av1w1RLLMexeqVyH2CF6RVQpZ5Hw8bXDU56FhRwEpnWRnzjwY",
  "key16": "283EGvjVfoPCjk1odqLDaZxAdzB1iKbNs3qTYCbqqqVJjvU7FbnMnBRTU6ViHMdJcCnGw6vxUEGewUad7UiguuhB",
  "key17": "x4vHviSZbE6iqC9ktAkaTQMVnnoD7jV14jKtHrVjdbCnvzYxADFU8XtL36HdT9oXADD1js2bsQoQF6yyDaWv7vX",
  "key18": "ptCKiK4FoWvs7CjouhYCCygErY3peJQzGBSy4fPLitCWeDs8N5zUnirW8876hw6pVr8RVjcjR1m3xWGwezG7mMJ",
  "key19": "5bPGDKuahyN8N9Dcih9UtcTQhi9QEUXcGntmuH7E5jgvMmVPthe1YNhoKtiar1XSqNehH1ADR4tuT8umtsSshSeZ",
  "key20": "62Jp1PVG3QPaHRwNzcMpydQJHDWmTKj15ywTE1SLGKsDC6qLZ6FQZCprc1trDUeC5TfY6QbWM7jhKL3iMs6mTZMS",
  "key21": "52p63sufvroUB8nnLqh3xvG5EgeGKFWDcYnMGatc36CwQmJZyxYmUDuBMkcRxkTzFGavLJcBBq6Uyhct39Z6h6zx",
  "key22": "4PyMn18pFj68BnAF7Rtc7AuX4qA4Jqrtw6pdyeStdn74mQVFjmbaQkAMsTaCXkEeneegfApm7jzAdjhAHN3LXvH",
  "key23": "yL6mkeiB6L7gcK2mJ4mXQY1mUGwFpnVTqAhcMyCSu1zzHAUS1aAvihbLQ8MvtWaNFSFYVHNCgyKfRA3pSqKw3Tb",
  "key24": "2h6cS2XZk9H3B94Uvd2bs7PiUey5h6191gLNNpy3iwKjwHjLpKYvFow1K9Ru3iwqnJxKq4vMB8ZNbGFzi5yhgdqo",
  "key25": "1jT7JnG2eB6nzs1sG4Ee84hHmXYKMteFDNtxWmj36akmDM93AaoB5UfvufxFkhJfuhkyCyuvSytCqpKryUJAbeM",
  "key26": "5HV6YFJVMFJKreQ5Nzpk82bWrHWrbwQshm1sEyY2ABj79mvwEPurv13KSHZdkNM87zy6qeCzt6Rws4f3WJp64FaN",
  "key27": "4qDfwb6ZTuVcYBZMW9zJBPYWPMpqDA3Pp4ZYVvFKey3m86A1f91QaQsx1ScBkn2TLLCYhtUa3VDc9CeK2Ue1KiLo",
  "key28": "44j4FmYVRqnyNV5qMhWRwrj1Uf75mT7sTF8fWa9LnMH1C3edU4z95zQjToUbbxmnWaixmuzrWeLrQi9RuLqWbCcw",
  "key29": "5n7Uqw2pXmzgWNjK4JqBKPf6Svt6xdQV5JUrk1X89AFwZYyj7BfJgWw4siSSfuw8SWUiwJcQXRCNpJjs7Z15Q2rm",
  "key30": "4PttvbTLhHrR8tgYhtUBCKuKDUB9gUTqo7pjD7tX4gyxyHfZ8kKHLD2V51y9Dt6KDNRnYQmkkFrU4ZvWVwfxgRSp",
  "key31": "43qXZpb7mY8L5L9KDBrn6GT5EQSEmKeM6szZpHXFTZfy7d5jUCHQSzSJF8x57rQuRqr35VukT4Z5MFTfj5XG5kGb",
  "key32": "2YnKWNu24y5cj4NBdHjzt8bjYJa44FmJzhHjA1yCvvv2o4cLoTLiTTdgWc5rvJ826wt4RJcTrSEtxU14iPoz2BNd",
  "key33": "2WPV3TRqfUVL14ktd9sWZP7z2bffS1nYLu9G7sbUje3heEtPjWC2Q4ZKJTSnX8Lq99CDHU1Wi7TfGsXyU1eGnMdV",
  "key34": "5LRpqgvsu97gxNvHXJRCLdW8RCBGSMSpdpH2wFZaDZ8yLdwUDmCDZa1qvyXvnfrKdsYvTAnp3dVhvRJW9gossQso",
  "key35": "2zHvCmKSucnJdHoupNG64wU9acZJiJ79nTe8sqmiNZvM5GKHu1Mq67ywWFb1MKEeUaDaJVQqp5oLkRnFyVMm215s",
  "key36": "3CFhzYZoNqjdmuALpQMsgWpEX7HpiN6kmLUA77NGBcZy7WGYZdy3D7ib1eBjaW1M5Hqr7Y2Bo3nuXLTy5zZtq4xa",
  "key37": "4TaexXojnYdq8Ya331PoQpXid3bg4fkfgtPkQFXG2zwEK9ShTgcXfHGrDP8RoD5gDwggr3pRhVfQUjhY6iEFQsDr",
  "key38": "gQ6QAMzoMhuvWQe1tHfM8r7SXYPNicfrZhVopRwR12oX3V9cBxdGtvHvQ82GwyVoS4GmSPjr7VTHaZKxQkyHUEJ",
  "key39": "4bMxQyXzkK3TsAQbZ9QteBpJjHkCEEgFxkx8DzuvYxubW7EuH6B7eMDMCze4keiSw7pUYtnHdzGqLM341rTS68sv",
  "key40": "29MhXTfYSHSZJYZfkttSVVQin47ZgPGqx9zEyZwRuxgoXohAWXDdAat9AJJuMbjum1xRvJZwh8FdTwmQif4KmZmM",
  "key41": "3uKhXc1AuAv7rAj9fkr2i1NMkCEBZKGtwfYyjnqjQT2NYELRXtxN3StxLEPFHzh3q2NEgmY1cqjubDD1k36G5aXx",
  "key42": "5JCB1K8P93gNcAUSEno5T7fGfv1YMgQZLFHkqcC2ujSFSPQuG7efur5EV1y5Z6PGUu5H8SewfSn4ru8rxQm6MoeE",
  "key43": "65Ns6sJaVDC3RNaauDXZCJAhNnnaGEmNVfNSEjcpBvogJqqFCbiZEr5GDxzag6MfpNn1waUpcfHAzAZ76gEJPrwj",
  "key44": "2zDXV5q5RJBZfG65dcfgFnFewDTip9JLpfpzLE4tdTGuie6D93VVnkGqTqUd6AuX2Q1apBX1kW75NAeErYbsG3bp",
  "key45": "PZjgZU9YPFQcKLBmzqvvBJVrQ5kwYdBNiYNujkcXL6Pm8CVKmE3phZN27iHbaLDqbxZeAykuAii1SUQNR5w2sMo",
  "key46": "3aoSMzSWYTUEv2bhjqiqxGyBsmsySuMj85R7BKGStyug8brLt9Uj5rMSucoeqjs5be4RTWDfSv8hsW2Coqsx4dKR",
  "key47": "5hrqmB9YAWUJ4ApKG4XXnR2j96JkeCad5ESQx5jm8WgkPzj8Ujd7srBpx9jwdBTht3wxqLc6iMB2VHpTNkaUq1fs",
  "key48": "3aoEruUf92B9J31QhvuBHAUyzYmiSKFKypHkbLbDFrpXLhJybvHLPrP4ydHUHuaWAst1w7SfQVwGgbekP5iwRJqW",
  "key49": "4waCKsYYqiB7tbsf3dh6H2Rn5BDL4X1F8xrwkadB7iWZCXP4d2qVYHhLL2PvH5HB9nrKv7c3xgLUWqevby5LsnA9"
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
