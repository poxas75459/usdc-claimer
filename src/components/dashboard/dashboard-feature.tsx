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
    "HdsiAfSeGnnfMWQ8iBWmSnfQZRzbH1Bi2zGA7wn76UoYVhApzRRcxdHgKAdyZbkhqi3qaPojHeu6MWSzgFYnkdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a5o3XwKTi4j47Wh7SfJhk5AhNSE14q5kaBcCAUJ9tqXxAuzLGsBiZXm7FxLfDgb3EUeW7ujeKpsPVdBDrLC26FK",
  "key1": "55kbEXu6HbAsMULnYiaBSnUmcaTo8QNNNKMiDkTnyuiyQCxpaXE8cAbMuo5z4cPqYYaiX6s9dbZC8A6b2GXgox6c",
  "key2": "2Xe2q5wKxpVzfTnwq5LcBox4LT8Uu6WWXwHmDUeqEQdsnLeMcXqVcdZNPHA7d5WduEqc9HM6bF4ubAAtpXX8uVLj",
  "key3": "8JoNswsThixeJQSGsGE9qKKqC7aJpwJqCU3hC9gSE6T4DkbSZ5tMFfVXsrEdx8cZUYqEJXFyXhRB71Sy81gkqMH",
  "key4": "4bYWc3Z1QP9aiQTy3z2ar1mqmgGZ6mzQVptGezHfF4BmRxKUfdUxLLq7fYfxWtUJmN4Cvye94RwDUjKmRxKyczHm",
  "key5": "2xyYQMdPBSfPQXwU5fdMThv2B2K1sLqbYZeX9nXFNpRY5UFWXSyo1LLRzXi2Jy7JyGELWSE8NvywapBEHriMcJmf",
  "key6": "4PLh699xPeGEiEgcKbJCPQoPQfjXfmWxHLhn1Xeq2NK1XiYojoayzY8532vj3WQQ2PBUm3vvMxByxGouqhpfMaNe",
  "key7": "3MedaqZVdsje5bqDWXrQtK1irRrKGz5P5m2aXmS635Mp44gj5kjmrFm5FyZFoTkArJLjxog52cvXzrbXLtTtQ43X",
  "key8": "46vSHgc4c2Qt8vx7wHNmnWPNG2sv8Eijf9rdCiezjGpUPELa217fXducdfMdzcNgR4Ag4J6uXm8Ss1WY1jiUKWHP",
  "key9": "5FQ5pGtpkMUrLRtix29yyevpB3g2UVBpnR39AWb8Dz8KcHStdLtobCQyV9vz49memj7K3XD5ZEXmg9fG9G64au6P",
  "key10": "3rqwRbqreBiJ1h31AWJmJjryziUUarRNGazeHCbDcxHf4Vx78HhNhEfW7WQFyv6t1hNjZJ7AVwdZ5kdnCYyudEkZ",
  "key11": "5pCwRo1G8YXR9xRhd9ru1138uAbesQ9dkUt9tmc7urHtb3gENvhYCM4A7h3MMEHLr3riTdsgeVhCiXBx8gm57ED8",
  "key12": "5jXtWi2hqPR2D2wso6yMcgf6u45kNRrNrym69SGfs7HjJ8VG5rdCn9GQrL3UqKbPJex3zksQwqyAtLAZaXnjkt5X",
  "key13": "4w2kT5scje8SokuDdZruZx5UfLRUxVJhzzkH4XH8eNi1gERjAxYBPTvGsawG52LE2Mj84yjyQn6RSuMdMZnyYqcY",
  "key14": "5CzrofLWNmTjHhGsz7a48zm1vyZo9jCqJ1zrEfMkQM4G8jzeL3BtD2v5sCq6vsS5M6C8zv1VzHun71z8bSgFeWGj",
  "key15": "5Q6C7D8uHoGWUKswbgvDdnqnZjsmDmRobNEpua717y6mfk9pJyfN4n1EVy3woHn59YYaixexERKBuKkFVa7EcGDz",
  "key16": "2esTMjVytEaQnNPqqZBUZAvokKE6iuVef8ZR6bKe8yB1M3ZQLkpSeZuUheQeUEnzidxhqmREGXUTMatKpAJB9Ha",
  "key17": "3sjkEK3aaMcPMzKBtkQ9Ef65Z9Ue7CP4wL7aRAf2uEirxaBcWkV3bKXijBejkq4ZErKdgL5M1mSEPsojrttBY65c",
  "key18": "3hqGJgSdFCtx7gJrNjC51BuK82pGCCCcoZLw8ZNEm5e1geL5TYnP4YWqDYTpWnxHKhvTC8RPKXQwj3DRbau5Sd1J",
  "key19": "45aGMATj84wvMMjm6JjKzHoNHci5rQb2du8vQoeRSyXAbrCQs1SDNF9rvrLrNLL3ASNwbwHdxXMSoa9eJYEa2Yky",
  "key20": "4VVYRRpkdEyTcy6gTAyM3Bba8h3iMKLHrMDYzSbrjwTWAWXxcLZKoHbeiUfL1AH2LToHQpDozSRexWjAqDQgd26X",
  "key21": "4cqujgpP5frGeBmFa5UGy8W9k7GdbAWqbiUUt1VoMLKZTgev36dkdzKZtXEQK5craDCb94yCq5SynZVZYNeKyAXy",
  "key22": "2m84cMN9W6iM4CUwUcvC23ewaj1VuKAf2KacvcnoZkccDFa59zrACtfwhrvvYVoKnfiy9xTr7Sb6MwxpNo7iSj63",
  "key23": "NARBLEadruuseZ2BgHwfSZyGvK4MGsnaidpHTpA3PRghWc5o3y2UqS2KKbSeYDUq87g8V52nD8tgZshGZjyDrii",
  "key24": "bSbwDBKvZwpahC1NWAjtxLv47VN3Wt4MaPx6dkqqUzNtgy1hnyKuXr3xHtE1cZ8G3tZytEENG79XcFELmuxfmeM",
  "key25": "2VeLiFPhWoq6gTLjNL7qGSYPAUEjySRSMwPUAai3TY2ge9Y3Xp4n2xXW86BDniTvssiV8aAtmnEzy1y66hfRbfid",
  "key26": "5DiNSAHNUFhahxVmmrn1Siq2Bto9ZvFANsNbUcJQNUZFrPbezjGSMcusSWAkjebKz7iJnF6c5J2wL4N8fB54tbKi",
  "key27": "4KA5MxP2texcvG46kQ7oBawiTWUHJBWcWDgepbk89n84Wc6v6hEciPe1FryfzVUo6MfUZewBgc98Wed3fFWEiNkN",
  "key28": "4cVJmrVzHQ9mZEpJvLax3aTWHXtmS4jATxiyk2Fy182DWfABULARXSoMYe2d2arxzVXBGpvV5ePvd7dHTat6Yfow",
  "key29": "xWyuNaBYvcA6SiEgevwvhyg6S7fsz5rgHqi4JRYvZ26jSW3VHwCp4DDZWv2mY5pMPNnda7ydX3yyLvNjhRj84LP",
  "key30": "37HYeXoCdA3XKS2r9xCnqFEJLs2XVW32rdDr62XNoCJE5n86WMdX5tC1Hgc4tpHyUGX4U6sDVU4WbatHqV6oHKtQ",
  "key31": "2ZWNzHUPU2Gin6Qoz8T2NKsLy8UhK8L7W85P4gJMb6sVq92oDScP9arcvUTs1QDEJcsehHnsSSXQvB1veBirwEcj",
  "key32": "39F8gRBNfL5NrzGuQXkZDSc6iCDwf1UFckAdAPtXpzobfW9rcYxSRs7mAMKjnaTx5WP93nN8HpLL4xJoMCTRsc28",
  "key33": "4cwBVs1hLLM7ZfL5S7kdiPkFqb6z2xH7yPdiKkAek59VdSctZZo6YwuLkH6afA1xuGv4qFzdqZHnLEQFFUfTCWvB",
  "key34": "A8nDp7ZnyhRjxg71GBbmvBBxaXfeKA3Fe2tAVWDHWHfjV6VjXXZ3MTkU3WB1N9pmZkNw42BJUp535KCAjoDvWfR",
  "key35": "2r28Lwov8ygnMaKoRpR4J3XDnGfWvJeskntfq6pFGRfVmAmNWBzugHkYp9LsDoTXexdirdvwcPtM1XSfVcT35aAq"
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
