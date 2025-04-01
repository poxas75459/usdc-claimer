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
    "5jZsT2Yh3J2P7ktuV8GHmDyxCWqu74BstLpRxHFndSp2WoSqMhGJp8MaYMrzJq53HHCUkkqtK6nbokfkarraLxiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i8fSLPZn16jcdVxTVk2qYmD69Zyc1yfrQRGzUEKKwa3rfP4kGqV2RJVGFe9EmaZxrqTPnqBZoPE9g2Yf5sDvnkV",
  "key1": "4cVm9ZHcaDGRazCFVU71P349d9ep29yV6up8AmZawfVmrm2YJmY7pB5Kk4gM5yRnbR6GTamqoTGpUsBDJM2TaxkB",
  "key2": "5EwUcDhtoaXt3oXTq6TUkYmtZ8hbgvKP3F18fEqVuT4hwfxFZ61A6H7yZ3DCu6t41Pxq1CoKHd7zMXmGdSavWU4G",
  "key3": "45cKjXwBJtB3aCt1DwLXo4x1SVPuGh6fahzwNCxCCkL78Aej9LCwQFP3BrCitVmvoxZobcu5geAbDwwzHZQtRWfS",
  "key4": "3goLoYh5XT3ihKRBjV3RKgNX2CtV9HNMmMaPxhHETpAMiQHCcTCh7QDhVydZmHfCnDbd5r1u54dfEXm38ohgUgCi",
  "key5": "3xhVpWAxaoCu9wv7ThE8yrw2aNfr4Ega71BsgZstsuVoCHFh4RuWJLaStGoEPU6oNgoixyoLhFdVyUDkoGaqsZnj",
  "key6": "XSh8swY2LKuMLUxb2MV4inx3sKfeebQdtqYTe3qCTxzytNq3geAib7uH4Q3uvdamspJ8msLGv7QQLjrrUuLT7Zz",
  "key7": "3R5e8sbv2LowLebN5LkRhE2XSj2JPRosnmS7YbY9Mt7qjU68cBaKikTUtntSxB4NemG9rhU3ryuoSU9C8oSzJPDy",
  "key8": "3c96XyCcSPCqBL1rYDEmTavBuPXTsGz6TmWWbvs8HewNQQLLZR7BBSBrz5hSVzKqVcFQ2BbhJxj9MjjYxZ3XJ4KC",
  "key9": "fc6dF3uHXAdNUBCvcTJGq87U5mZhUtoEoRt1w2paHLaFwVRYmdF9toCJkmDmQu1xNRs7u3xgw2knwuHYiFeQusE",
  "key10": "4JJzHrdSGZQw3PCkzf4oA45TXYeHLsrMRAFS4LmXQP3zzqES96RcEtyDU92TqusBr6nTNN3N7sMLb7zrbMsCC3AW",
  "key11": "3SAwtFFVqvdX3vhLrntjNQpDuAiKV6aTDS5rVW743yhgrg1cqwFzq1QvLCupgHHKSFcA1iDbnUjgd4sE4VQyZBFY",
  "key12": "29H929HxTNDfR7HPyYJZvkvjx49xvMKca5gSQv3A7rwYoUPD8tLdBA3WVBfEjVqADwUMHoQqBTYWNwLZYvjPZ96E",
  "key13": "B7TWsFUb5MHUghmKeUKRyioZn1Ykay8Np6X18W5BdHFAxwsh6vUDxPYeNpXHTTuno4tyzuGwD4secHwKJh6cTZN",
  "key14": "2rGDmigQT8dqgEU5PRHRvt4L8UWe8qpSmMqkzXv6TS91SvB8KghiksY6JYHv18YjzYeca7NJ54fwAGNP3u6TUGhZ",
  "key15": "pPPYduvxykKHGFtt1P4Te1APwohupc5kbBgcsQXpsQygNY95Ms7AtUjdJULQwx87Hfc4obzixPa2gSXpwSNaK3A",
  "key16": "4oF8kYfrPUrzbsn6KgkYQff5reZCHGqMt12eeNXSFMbq2rGm5hmEMgUbe63Bh5BWe7VxMZKJ6GhDpAeii1nm3F71",
  "key17": "5KYwowK4qiM43XgZjVACBUqFXLsivdA83PXPDosMJkioWJNRsuntTYYNVPtYN8oY87k2HyQhCkyTHnzASJCWtPTz",
  "key18": "6qenFWRUCAxGH6zd7JSHTxZmPV5QuLSmigsLqnw1NfE57VnSfiv7S5LN55awwJPbhudE9h6mWC8GBeEeULJEnrT",
  "key19": "557swKok7hX9wSmf9svFumhgCUgTfANAJVUqEzZgcihHSFsUQiD8td3cS5SPA7sfaC29g8t1z9MEcrFs9dLvxb7y",
  "key20": "5czMdDhMpUyUm3grJbLMnmC9TLJiTqkCSxDEu5jtWn2dAS4Wt9Ey3P2kxpHXA4pKDtRdUiZYcwws3R5tFg2FEe6G",
  "key21": "E5gn8obFLTSSFSXbcXxrss12gySCqJ2LLaHy7pgoVj59WTEK1Sh4McMq4coA7erLKbZUJH6iMwnUYPpWjHMtreB",
  "key22": "61nZ8YH3aB8uapXE26T3BEhH5qEpaF6aMeoL3XeAQq5W9qMujm3KUzhmpGuMou3yQfkbgYKbBTpDX4R5xMMEopVo",
  "key23": "48i3TkkfZGqrZJbFVwePM4UsYCyKMDw6qeB97c5gUNbppAZyDn3BdohihtoY9pNhTvN2GstThk37e4XiF1DE8D5T",
  "key24": "45Drno8ws48E1yiFTKNBdCS9Fr3eFSTvsowjfC6fDFYUzhv9Zh5cArVXNayXyF1rSon42PcCRKWQ6dLpVwu5YnUt",
  "key25": "2t5JpLfpyW9CDrssgewdxBk34zniX3SvFnYUqaSfZsgma6zHEs8hiAbk8YdEd5XVSvZxYPp6JQC66omY4hhWD4Ze",
  "key26": "3Evpon275tUqBiDWMiMJq6hBQqRZHua9Eungv271EWmYmLZWtC5nCfvfFSnPP7CsBcEoaapD9LmpUREMvgyiJTa6",
  "key27": "2Am7FDw33r1DC1J3qPVS9VWb3ro6AcmSrmM1qjCopJ7PkP9P7y3vDEJCYHPmPhPwQRqTYHjJtAyF422xf9H2HsbE",
  "key28": "42r55Luyb9oSxvmyZn3nf7c854wUqo2Q3LPCuQSKp9nkAYdvmfRr8W4p466aqJhNgki9U6vAguLBSpCGr57U3jLr",
  "key29": "3Kr5irqVbN6a9KCx42YZeSmtoAUoZG6SnqxSfvhoi2k3fFi894Kbeq5FrmH32kjv7sMZq1n34NHC3kdSsuCXZrxU",
  "key30": "3u58dwyBXMDiWqLxHhUWHaZXaeQ8TkuUiWXDEzPmgzmh3UHTAfcvHBC3qqyKALPF7a8WDUmhXFveVgj7BEN1Kk9U",
  "key31": "hZKZoUrKMpHD59zeFHr9p9vQC3U2Qtvui2roz2cUJdZbJrQcBvb3UzqJ8UMnCoVezgbc4916XwdJUkYx5v7aJMP",
  "key32": "HkctTqt8soURj6du9UotUeioRGRaQADEfXJry7GAEf3wMSZ4GgADxqpenYXq6QLummWzR4cVU4upvwCgp7m8o2w",
  "key33": "546JLWYsdocp6TzoPfQrJvJBEH6CEzH88VYszfpPjfEyunw1gUf34wSGE6WTvGNfFZE5JUvh6WsUh7SrRjZxewux",
  "key34": "4sSQfRHXw2sGQoUfUStNvebbX6z8z5TWWhgNyM6QUB6C7smbrEQ3jV1wmdMKUhcctDadQ5dgX7zWSPJhrbriYE2N",
  "key35": "hmHxhYD3JBKBydWQwY7mjkcjVuy8AjP2KDFav9xtRkP1RsUUpM7L7fNKTh7qEjKr2Csw6Ydi8RcknT3GVGR8dvL",
  "key36": "x6E2GwPJFbyjU2dAPDR1d2Hhs5cX7zNhN3ttT5JMpApYVuxrG6AGzWfZaNjtHcP7mahPwMDv6FsEFSNmPncMsQs",
  "key37": "2vCfUMoHvT1sBmBHcbYvh3KQZXTE6kXqZ7VdvzXa8TAGEZoFB5YncthJSyTdKkEzbU8cuZrWgPfD1itcxmdRcrbj",
  "key38": "rZRvvekUBgvGuKgxaMANyfyWndGjkJD2DebrTBypakuta7A6KsnBK4sfxboQTvKkTp7sz42i7omXQBYXbacTZsB",
  "key39": "3X24usDBFWSMPJQHMwESEFWfi1xztX4SdbYoKF2iDt1Rj4ay2UkpE1ctGgKnXuXMneSm2iR45b6ZRHA3NQNyh7Zq",
  "key40": "3yskgsDfvCoGv8CgewnWKBvfBGXFZjxVwFYzTzxCG6vLhXCRCnUM9387fYpJJooZgD8qX6aRnZQNm9EDGyF5g29D",
  "key41": "skDzcUS9GJ9CqjXSUUCqWkN6x5Gjhbnb856FXf1CSpX7NNBsoinJMBWAzaJKtPN3oTVZLEjNQnP379TkFW4EbXh",
  "key42": "3VHdCNGKKmBusKVreVNtyspeXFmzVpMwQBcyCRhoC5UGfidvNVau8Ja2SXXygUQn4VzRDz4HJ4hHcqUs8wW3K8MY",
  "key43": "5Uoz44i976QgYYm2Wg6a2o3hqukb6CASuAcSZvakoj3o9BofmbMys4Kga4XwR8fcmTxLijsU9FMzi9rsgBjnWVHD"
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
