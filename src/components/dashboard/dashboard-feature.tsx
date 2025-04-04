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
    "35mUKzGpoLDQsEVxMTpNAaVckycsaRGf7rp3BF2RnDwgD8NaTdsSEyxa48y84q2BXvQ6Mzk1BviZeKmaNHR6ka48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GxTToSJ9wFUpdZfgfy9XwKc5M2jP3g18TJA13Jk7XBCGdQEiVw28FjpC61fHi8dDXH4xhApayJBFP1ynedKPA9N",
  "key1": "3LTPb3C3W8c97Sp5GN6WUXHzMNxpvzwxGZpgWee7XoFepX7rHfZ6kyBg8dK43tA1Rah9oNvFUuHSVuzgn8TSpR61",
  "key2": "2GPAXAFvSqDry86LGhGTSzg5taQYhb6cSB6ewtKbTeXgrCCFAsJBfNYNBW2Wf5We3ecJDrC6rdrXPbRsBnUzrvFf",
  "key3": "5A47dfTvNC1fFZikKs9B9tkYKoVUgKa21SDsXKHV7yAKLkwmuF3cB9hcPZ7WyQzkAXSEGjZ2DMyWkvxhzASgQEki",
  "key4": "3Qco4PWHqwNENFpvbmfKBDvmPyJLuP9EHekgEVVeXEBCn1V3QAkLNmTGbCnoCo62ezTNo39uQp6CyNdu5JBU9qpq",
  "key5": "3MJkKziDQyNMeJfsRNSBxtXuswGs9AJHfxmx1YmbaRJhgqaJiSSDmCDPFPENanj47hUB3Hczz7dEMjJaomspdRnu",
  "key6": "4HYqZtJ6FMKHtLWHNs67GDBZEw6fXVsTTcGM1fFKjjQFQ7xGJsnTqfEXCbgFfXLCvv3coMCGVsbcQ85vF7DhehhS",
  "key7": "3sYgYr2zqF7gQ4qKrv87VNNSnfLmMEynSmkMitfdyFAhy8T8CjRPo6otnJiCeqPC64Emd8v6AyZd1dUKdfoAW5jZ",
  "key8": "42o5qGt9YsAxPFcT9Q9UUp87DQTqvxXrsYWrKLPZJJL5Zvubha191VYB8NMvuToJPX3oar5ArBoVENyNdUsEt2eN",
  "key9": "53Di9PBeGSMoGK9FRiuGv6URmVq758yMAsWXmsMiXTpwTC3AhKgGEeAWEK6UZ1g19LXGo5sNNkjSKrZ6YLtdd6nD",
  "key10": "3XkYCgjUrqcK5aDwn1G47nuB9QdrzCqXJMrwsk2uMzzaCVsqDhC6LGBdmcfNa68jXpLYVPLr5ZX3ERnJJsLwYEzZ",
  "key11": "2LWqjp3u8j6TJLDG2QndoPGCnjY3yEXHFTjddLzt2Det5ec5P73q1JNULgUBqaETCBppMgWhRJvqWazWX6A8zj3y",
  "key12": "aJpbBWZ2fPKSEXe2CyuCwV8qhs3BJ4KemzPtFkFoqiJ6tBXnDNpjd6Vn7AEmRT4KRPof5xi2z7ZkDfhwFnAgeb8",
  "key13": "67XmMN3XouKmS5JdqF1wFp84HBeFDSjfyiFNTw7RGAB8aNTzWGDC3bJMMtGju615vEcNx1YYi9qmsj2qGpNK5Mqr",
  "key14": "3kQGgCrsLP21CMNUPJTGsfKW1zsTZNhPh78uoC2YartXSkdfEKk8HRycugucN2B8K8kSvuLXnMQo2SmH5G8Z1F6K",
  "key15": "m22qukwwVnpXrhsht1zpgnDnXsJpNFeAN9DvLuBVqzdEiXwkzkJijjgFcqGh7NLH3U8Fv7k7BoDzuDUNj54jfU8",
  "key16": "56RGjesoMDqCLfc6R8zgwUenmyQMALvxfihat8F1VHDmJxCF9JVfeM7nvkiGM3mNzQi6dJgDzhbDTnEmG8HGCkiA",
  "key17": "2GUCNQ1oboaxW7JVZXgvqWz2hCYeBffK2M77oLVgkV8Jb6jr3zENaSvyqThzB5rnPedDxEYewQqsnSPXFifvSTRE",
  "key18": "3YC4riiPAZM53UcuTZsegZnjoYuXqG54ix1PcsBXDSkrjLLmBbR5yqELaG4FnCD3tfbn3w3yjvi6jTcEG4iMcoZW",
  "key19": "3YH1CkfSMbsY32HaCo4ihi4zYUjxQ2MtcvmTYUkiZfG7JmjEikMvgpMVPhZZLywYL8dHYguS2desL52zLJw6WFKD",
  "key20": "58JqW28mR75mWPWDYwDgeGiYHXhWZhLh1awvX1BkmdPBAH16kmz9zXA4b4JAm8C7NorFqKpZmAV41YhoZLuM7csK",
  "key21": "64w6Qz6pqMmhmDU5z6i88Y1uTsQMQqhtFeRb16BpvDJcVswgH11FCp939YhsfK66Xhe9icUcrxNxoHRechFt8aPB",
  "key22": "3kfQVsBc6DReTEy6aSR5aMGkVfABBREBVzppni7U2wrEzwn5izyhXcnAFx2odtkXu1KprrFWpacwxrpmwXjJ7iLr",
  "key23": "2BckV2ZT7WDt2e9KwCSxxsPRrpCcCrg915jXtgXS3EdmtrKiZkzhhnxg9yZssCbX2eZUwh3AxA1xPqRiEDMvg8yt",
  "key24": "2puwczf9qCsyWCU1miksAbqzM8GVaFSk4HjyuzqQyWvQS9i4PLT53HPNvSor77dJMJbvesoq9rkg35WNBw11FdKu",
  "key25": "GGvakme4EWYXH4ySyKMAjDadZRbDYgWexRw6ZEsRNptaX9a1tTzF5mPKViYBWkqZukJVeGsyCWHXx1ajPpM6YoL",
  "key26": "2R1B5xz5C9sg1RSYFFn9DTa61iGpzk9n7vidvUnjoA5ZcMDSxRpJd9jzxiD2YuPq6DZkdPbbmRCjfSWvGKPa8mSZ",
  "key27": "61KvZaddVHHXxCHVGMMYQqiJS5ipL6stwbwwwbEy5wvzoDP5M3VDsVCCtwFpVKgLpbRPfPEPBAZTTUPnfXc9jVXe",
  "key28": "52sCFyKPhFtRgTZCkFj7WcGKPXU8najt4h6RWqyWVigywzr5P9tc27LYMSdorVmm3aZLcXcwk3vNvt4fa8dYLipH",
  "key29": "3n5KomMTYLxkQkKYWGX1z1NSxqXZwHQVdGeeJNhPXtjdxnfA7Hg4q2FgumhG6DWNjv1FZjwCT62LQFCghu8qQGbv",
  "key30": "KMenPKN1PVLvwb8EFstHDBn8tW2XV49MMp7Ky8HpVT8doTyV5Wey6zQFSY7b2y3eNMh99jbTx9zHaAfdK3ioR3i"
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
