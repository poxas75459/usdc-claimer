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
    "ANrLkyMGDkvXfzMKUgiiTGTpLThRuCDw6F6oWFcGbLQcizGePVuwDgmP462DrCXXnevoPdrh473DucKbLXeSstU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TBzYJ6hhB3zLs7aWGtxv6KMYeTwgoetjwLVe3EoKA2xFRdu16VoMoY7UPhWX2QDFECWjx7tLSU4MEnbaFE4ZoLj",
  "key1": "yvG8PDYSPwXaruyZ87nsxQWBSUTMxp7u2FXU3uVF4U8pfbhmbKs7yewEEtRqGK9fM5P5n1HBv1LB5wLbAAhktMG",
  "key2": "4qEzF4hFKfw4ecopeBizP78b5xJX91PssVzW5RC8CU1YPSisJAdoPqao2uybBYc4QYQZQo3iBqDZpBCHFyJofpgu",
  "key3": "dsgvY9f2XagXSUAbSSSVx1TaJAuqyx7ZwF28u7jsywaUGjcKdBTr7CrxwV3zQewhRtozVK2H4sitUkWgCK6Eq4M",
  "key4": "33PUBgxn6CnTkgNUAhKynjiDWizZKggHxXHQY21ohnpzJuJ3FQAP5AKV1wFMB3c2qKrDw92wLEwVD67xSzxgCrLd",
  "key5": "2WrqQVZ99ZcQtHJ8kTpJNxW9jQ7sffVcQwLBXqHpsGrhsTK7mc6hhVoDS71ESst76f8PDr3PvoMt2Jw3MR9S9atJ",
  "key6": "jzFHVE6qbHTtQkNY96LLnm66xMUaiBYAFCPzvn54EPVbXFun3eedbQq31P9DqfnKRSu8KD5UnLoemZedJ6C53bs",
  "key7": "5mQVt94dLL6jVavziY4W1EKRfK6yCrRCXhjESLPVGvLgVZLdUY9LKjshbWVGRaQufUDcNaW4Gm9pd9YNJR12mtwe",
  "key8": "5BxX7tqZQJ8bNUH7XY7jQmyUPU68EBnHV3x3W4XzZoWjCdPK6nzy4UcGAS8e76KVWdSWapWzjuhtF8iUVfJ3EeYQ",
  "key9": "3gEv45zGfaiBMTMaFH9o1TwmnkJ9FUoEw2Ux6fUEmD1PaANmCXfAzyRKkowwsd9GARbK5UoSiAAMk8zGCyxsyydJ",
  "key10": "4ShVVBbwBnGMVBbt2kupEoJ58P3rc6U7cqDabi4yXeT3Zf937RZzAoyMj5jKShmqy1RMLQrWoCcSYvtgBgtQkX4f",
  "key11": "32tF5NsgZZAGYx7bukeuUXRfXJAqU1PBLqANvLyPLnHi3tjQgRuUGs4TP5YWqQVXKvNMLSxmvWDEkNVWG1zG7kWc",
  "key12": "2YwoFH356g2mFLKqYmC5aZLzLyDT65PqMpW3cBH659VG7UjnbjZ82fntRWtjxPZ44AzBs7LSBMv8SiY9RvEP8F5T",
  "key13": "eyTEm6W1xc1HkTfqhKYBPpCQbSN9RSQyE8kHwocqdYKLY3fNdgTdEuHC8XZqpjSGThVKckxAWsRmUQL5kpqtuKL",
  "key14": "2Qcxpi8e4BWv5z591a6gCP2vY1x1QXMxVduWHHrDGgpCrdTbLe3DYvszJLoEZf5fo9AVGkYwG5wh1vU2qQSiuKX7",
  "key15": "5xpucQDMrkoiFxLRrVmVvWytgJDSEijvPhypwN4WDJqcoU1NUosKCfVYm524gsAM6d945QKVT4NYeKASjNUUzh9y",
  "key16": "ZVwVNbSo4KcuBGuyj6ViJgtT3BEdd9gcyzneQy4xtDfaKgEwuANQUr6ARVHRf5UaGpkc3jfd8CFR7cqUx7GBz8Y",
  "key17": "2XftrsfgZwrbkqZ3rJkj25sh3yLsp2qHEWTBxkbcTUE4cuphJmF6ox5YtEHmEAQPAFznoP4sGm93GjWEbVkVTZZu",
  "key18": "2ZGs33P7RoTvQPPRGK6i6r2UenU3RycSbpsDqLn4UgSQnbfqrf9zRXBhen3kg8qFxPzBDR1hErvAz6RW1p13YS26",
  "key19": "4Ab1VdQoXomoMWfff7vJFVT35KbSRKoPkxNDeXw1MHbmfM84k41DBXmGTyogCaxEQYo6fgVVrjH58FEwxasTGZzt",
  "key20": "3gFDGtJfdHri4MbxmrRkFLoHfCzLfnm5DMzrTuxtoaSKcydtnR4L6nDMpV5TkzmwwbiFRXAJo3xhT3fUV2thWCEu",
  "key21": "3c9PKeRQjrYGi7XFYcbua5xnSmu31HHgjsh7yNxiVT3oQxSBxXHhguWcfUsBsVgjybVvs9XDNeUEtBH7EGm4houH",
  "key22": "57VrhAi4zw9HR91WTiBgdszdWkW1UfPCHQa6LDzrQawEVwmbt3nG7GZD4avmjK46TYacL6GDAcgERjZdaSdXmMK5",
  "key23": "2ju3Jg47b48NEB31aQDy7vzdoUUMmnzzv7p5wQHKXFnKQJDee2AKk54UwtrTTC7WyaK6gbS9j86uPNwkVdbVQRss",
  "key24": "dSvVX7dzToHCUck3LZXxjFa2WPRJLokykABgu4hfXjC9XFc6VAFWhEhehgJgVg861bamgi7cMT5FF9ZNw211UhY",
  "key25": "4o7xavJT9YMuoKq1UBdh8yKGhudgprFMZfGvi9BrtdmNCGwxZEXCkXGBdc5xs8daNhEGFFgJK88xU3xgr8NYL8a1",
  "key26": "4PtaPRYRTCG25dLC8uiuY5Mg9uj6zFpgM3BJiasq9S8zNdAmbg3Jta5SqdY3FbWbJwdFbNSHGnnZenDgibta4aun",
  "key27": "NEYuqFuqBzHSD5jhJnb22DahyAs2HoShKgjbTXgFfc8wcTo5UqiKN3GiU9Ri2eqBcv4nku4zZ135WLNvYwFWNPa"
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
