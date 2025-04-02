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
    "5gMEpfcyjHnsHV3eanXeX8nEj2ji4QoKriFmR85jerQAy9KNpiDN5fMMt4jW6oJDYgcDgLx9yEzgCuuiQhJBxJ5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QSv2EojQVv9KKqZJn1RTZs8WyXAD7vZKySWHoVTN4E6MrdrCF4kppBG8s2p266gLu4xa954Dcj1RTmrtoGra93x",
  "key1": "DwfNoJaVGGpwb5xZBF2R8QRkRxvEg1ZeqrxQBoHjZxiPjkCeEv1wZxh1BCCwzwuewZK2eAy1UcdbQXmYEwXA21v",
  "key2": "5GmJLfu4n6MHKsWa3qB3yFtjUMonWimCCrXf2kZPGtTXHWnCvjxSwc1PG8cqaDso4vWK7mtag7o4Xhp195L6RkmX",
  "key3": "4p7gX8U9KwjNtCVDzxhgB1nYPHBaC1mg5C5PBuNAk1qoJaTw3u9spc5VtXwdzLxbZGEUnBE41iPEdhKA8xuWnHHh",
  "key4": "5SrzLg3zhk3rg5GJyY5RZxhXFmAHMa424JhLbqovXqHhf9EkBZdsv6XfZQc1DVpVRy8htPwhQNnxPVHFbYACsu86",
  "key5": "63HQuELpwY8bYJoTAy4NoiRWeBkF7L9iwcxrsrYqZCxu6skii6GwBEtYuVWZTZBdbeefcCq38rVATD7DcwdrrTqh",
  "key6": "5JKk6RdRG4XLo3WxmT32GNzzLqMgt52ugYfdf4u9imm9YGP6v6wTkMaRPo6cFz7MUUWXywuAwuTbZYEUoWESVbCu",
  "key7": "5UuVxFAVytEJZJYxm6VvSDyaWZ9NTY3QFmAnoWr1621zSpHdFi5VeK3Bxa1jbcaUjQKCJYCr2aa7W743Nekc38db",
  "key8": "4Sc5ksuMkPD42iX5WnMEvAYPDE4FyYw57efYFxGjvEnodWs4DFA5EUPrWvHSeoFK4zQGjA1EfoaxfHa4o9smbdr8",
  "key9": "5nHSwuNe54n9Qc4bmSf3gp4zR1qiLmzzGu2t4QRdFSmMi7JWEgNNu8bKQBtPXmXSFngWweuoFs2twqy2zKVSP8ic",
  "key10": "2jes5mB5qRKuymN63BXZPAoebEsBwfQZ27XhLUuL8Ej17s9qb3xLJCL9ggpBNZRSWF7hfo2FDnmMaat3z3UVMJjb",
  "key11": "4FYmZSFoMoK922NjioQ9LbX2PEvzKQU7MMuePZCvCTvkAvHhyYcG4ccpzSaB6gWP8AurPKCN1s6X3ELcn9VyXQHX",
  "key12": "3VmfxS5soJbGc83hvKHU8YqMZNVcrJZGw9RgAnXhycXMCmC35zrhW4yMH7o6Pni54vNDpAZrMPBBmuXGeXhiX4n",
  "key13": "48Yja5WnGPg5BrLhseCPnfwGxXC19perhH7ghyPLCecz8CJ2f4nCTshfP64cqFD27SsSsp3EYTPznxjmztWhFPew",
  "key14": "srgKoxPnHbVvKLpgTF5QL8o27nhty29EZczPR7B53KsuzKfjwWDigCnayygrhJvvoNooUsuZsxn5RHvGeoJ2QMS",
  "key15": "2vUf7VZcgj4n1DWh4m3cbQnQZJbLJDGGXZprFtAytybfBv39jLYhcquuwEcAvvVXqGjS6mcV1eisbmre6pckHCyc",
  "key16": "52P6VXAhRwYUu7Q2LhAVXghBFyhCW24xSjpiFcvkPDAcccEtLpCNsJ3cWkUsGEZRYDSjxix62Qk7JyvrdBkxqCPL",
  "key17": "5LbgQuVabtP8i5kAjsXkBmEjkTbfqzKp4bHcYw4hKDVMDKEC4QUdAMvB82cEymBGzyqtgixzJEMA2WGAWpXZvvpR",
  "key18": "2usL9LhuSVjcow1WNJioLRA5oWMNug2rYquKP5rfMPfCA1YqjYUzu67knDP6jRBPmiUxLainzDZ51i4F1AjxgXhd",
  "key19": "2agkrWmEVDXysCJTZypHC7dah1yW6E9Mw4tevFL5fDcWaoQzoq8zG6fJyewKf3ACVEsHkBbzEhXZJXtrk4oFehVU",
  "key20": "2CXriStW93qFLgK3Z9QQYbdoBFgBsRHdGSVjahN66wo81AYyvXVVdphTuvHuuGXJ4fvW7Jqon9hsPTga98bxqAfX",
  "key21": "1XciRGpmLnd4JjrSebKXeYiReskz6mbgyfDXAo99pewRZQZATZs2aNi2gaxHNRGtS4gkt76Tsd7KG6kkHmDeyec",
  "key22": "GbxmyqnxEV8ujkP6V6jMj1FEDjVgFYr9D4TSeS8se7QTjtxBmEDHfd2yBMA3vSn7J6YHnwEZ7CJgypHEK3A318V",
  "key23": "DAQVuHCJqZwocUyonXgtiEKMVxx6Acjyq537xu5ZJk8nJc9rmyQtmQHSe1BWLtob78SHhFmsCnDP1QMTQ6iFDDe",
  "key24": "25uY5wMmFqBhssY2YCssZYE9zrbPTFAULZwHzCeY282o7jUk96RY377Uunk19vqE4uLt77j93Yv92y45NKbK968x",
  "key25": "5sS9eVBnLTNfr6ZqZKzYisRHdciPL3LedVAwM3zKauudjVbX9yrTbLx8TgREoyz7zYTNAGQgjDb6FkiuprLw6r7Y",
  "key26": "2PFZXuCxivWt1Dr3XMUDrzAMyZtS4WUvrHFjBEye9xiKsa49bVMumaDUNegbU4U89vzJR73F4rQSLFKnfnJ2kJaj",
  "key27": "3D47jNzs8iV2miWsQQQYhh43DeoNjKiKv52wcXqah9qvCiFa5n9AwJyU6fagTf9kR8C1uebHk385BvRUuChKBoSh",
  "key28": "5SMywg4UfGw32RKDDiPPraiHzxZTNUdh3syVssvWBF3bWdP29PpqRXU2mockzKwE1Qd39TM7JcqcemT6VcoimAso",
  "key29": "3KEDhC6vyyY1Ux6Ui4VnP5Uzxz96kE6QwhyMQVx1J7ueMhrTEpp2cQqH4FwqVgNSPJyPJkznqaftXGS4WH7WmULW",
  "key30": "22aXc5ujGMHWuGjnS4dFLrTrBjzWEQmYtpEqWZXZpLgQksEEku9cXNKPcv9P971qQmCCQpVBygaNzC96yxSdVWQs",
  "key31": "37SM3yg2Z68h65K8Jgcsv8VYYMEkbn1E6f9H3KJ2i9mHuRLRPCyxchUYCv67x4qPcDKnPcpbrRM6AvkywYCVp3KG",
  "key32": "3xhguU4m3KYf1wd65JLq8JAZqXkknLma64d3KyyrPcVYZtKJcmHBKgAoV2sR4ztr6j85FpxigkRNdYxj6hVdr6VT",
  "key33": "LSpAbT1YegnK3jNQqoJZkyyBZyUE1QfLHL7XmYLM3azR98BAeRVurgz8nFDhunuiBAnuvL5R6sa2qWXWyeZEn4L",
  "key34": "2MZ5F4Niwd6xyjyyqFj7MUwHPaoAKCmckFxA8pBNtpGuJHSaupnhMNpANCPna5X8pMevpivzxWpGM91qU83nkfrf",
  "key35": "HSTNjeGcFzg7ftXNoVmnbRp41x44XUMe1c33v9KRbPz75XFzY6BWdxyinWHhqPuWxXKLBpHsxfcWGzMzBaBf6uZ",
  "key36": "5KWDKwmZ1kcknR3bhpeGXwhR3PqzB1GGuxcmYWc4LZJEptn8t7tHrdgNNEcFEue3G9rCZtP2kdxJzXRKypjMFwWv",
  "key37": "5WACopa61NA7HfeZvBYx93KSk5zEoPDij9FFWPPjHV6i8eQvPfhq7XdLtCfoXZeRP6n5CHvP6tfG9r3M3Q4EWSGV",
  "key38": "CZFp35rotcJorrmPTavYLgNvJgKXXC35BNiZEnSPttVbJvgsGbM9zu5SKjT67QjCV8ZysuyWM1PQoU3azq9XTg8",
  "key39": "4eMLL6VXYeUnhuf6p4RbbD2xDgQTjsJMUKXp7urrAK7utrwfyTc6mdGPZbkk4ba5kqKDd76TcSAZhRFrc4TcCaC6",
  "key40": "44h7hwQppaYg3HrKwjhQnHLHE21WjJuH7WDvS7rHb6SoF9i8pqXqMfN76WMt8cwvVJte6w7fd6em6DZJFrBC8nem",
  "key41": "3AhQTscKx4fhDHKyET2tLHRMAR6v5fyEkQAS1zjNFTGDYVXDgtU66WJ9Zn5a1DzvQikyJ6GReNetZa72x9XXxpaH"
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
