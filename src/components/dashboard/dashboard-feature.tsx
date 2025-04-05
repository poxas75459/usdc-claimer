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
    "5FU1hF52sDnSmJubNec9hDXH2eiYqXZrkkwB71QcX8Yc5apzLwYtnkRX5MTazf6NvWpy9pMxs1GGtE5HqmgLGxCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cHSZyLV925QcdDmfQtYkNRzmptnBqXC7ytMsZjmWkGrdyNrZHz8Bmr9sN2vxr4DHxMfymvFQbmS6n9GRNWRkSGe",
  "key1": "5PSBbt4Bq5VXJ3qG6GmTLuauiycMcp3VjnQLXaQ45xM99TEcLQnmH4CNekpBJFGAD7oNgmr3XUbgBJExhGgpfQR7",
  "key2": "4QXiBsVrWEArcbPycmxyMZfEmXStFt1u5EESoKFxhQGGs9fwCB7jCqjjP1yAmgxSNMsx1LwUJBAkpx6j73Gbp6ti",
  "key3": "2yWpQ6o23SsUpySWMgfW3bbiLFx4KQiHgjY32iMy2brT7YL9pgsV1rD14cPgX9inmn17YYFVGcHCDACmHYYmjQbD",
  "key4": "JHcy3ss7EPks9KKYnKewgTaD91VmNucWmWoS37RWSqM7Ku8ZHbeAk795kMRoYFCx77M3WogQWGWsVRkrHSoHpTR",
  "key5": "3L387ydS4Ys26RheivYHcwBtTmW4KbEg5kmJWpHzdCqbKNvCFZ1N4vQgPE3sDLHu2T17fcrBSPcjy7k8JvuqniFw",
  "key6": "2KxSdMJhpbzdXFhk4qt1yQo1t8Z9W8eVn3v95VdHLKBf2o36f1kxv1CYqY3yaTyAMWR56QEnF9BAqsadjgoNVg8b",
  "key7": "4nFS6aEsfH5AjSeanQFFkACfqSwfWQA4SZskyezBCvrPUG9sCaHogGNozhCYqdTGBnNUSqoYsinsqF9gX97uKkxt",
  "key8": "4zEmF7aFgJA9V59WXX5HogU4Sk5DKij68iWQZrDq98w7ZDGuCRShAuraUJxcUgCFmzLw9EyahCt2RLRZgeoSCMgy",
  "key9": "4ikhM2hGFbdnbbjojbsKrBFcBr9n6Joqj92N47BsYvGC9AHWmJHMTkqwySR5jcBmbYxqaxWn5SWxx4wFFTppAJrk",
  "key10": "3nYeZUqHxoSjTV1pAji65pv6iNFsYW2GBCy53UstBKct55JMZzpXA5qAQGFkLdqj3GjfRejWhfDNj1MwsweGbCgv",
  "key11": "4NyZK2HttPub7c9KX91pyVEqUPhEhaSQ5uKAdbohwNKyH3kLpWfNB6NTLdykWL1c3A4aQy3kdf7QvMUYqqkC23Es",
  "key12": "4wyDzeYXz7Nt9pfUrXXjXuPnACpeSNw3NqXjnbCjwH4AdTidGVmwBHzvAVNgpTBedvGahaiZWaHJeNMVwfXpjxT7",
  "key13": "2tCJGxAENCG1S9cgpqwt4hmepDmee6ETJ8bQWkdMamrUYr2Z4iJyZVUVFiwz13LET3ASUg8TYtfUWTzG9121eTbT",
  "key14": "Y2CkthtLdDtPAGkCC5Yuk2jTMBt5Nk4G8mYNGSzy3CkqSxxkptba4e9WipJnn6adcnkzB4Y4xTNFxxQEWcEzzoC",
  "key15": "2CBUe7Ftmx2hvf3wfE2JEhcdVy6nwuVGzQKXaEPWh8AwtFsw1Tj8NsPRARPHJxtxtXtueVwpm8WVszWfcr3TVgW4",
  "key16": "4Hh66Vbi5PHZimzUJBueqzWb8CfDaKL4e46Kota9aH3TDr8FHky9znHVU83HJMN52Aar8Tv1VvFzzdX5xtHsp7Ev",
  "key17": "3Ybym4SaGLLxhqoWyt8qFo9oP43XZnDjpyRwzGGLYU15KiDQTcB9KvPMM67MtuaPWJjdom6wt2mWnBYjvmvf34U7",
  "key18": "3sQZJnE4kXVJpv2QwJV7KBZhowZAFME66pFDgvbPqZfRrsZsJtCSTiHxQijWVsTANCJHVUvzcMo9GAdX7umpwWqU",
  "key19": "2axrWp1uo3Yce9yiNNJMtnqjuQTP4vQ5UiZCfsrnAoSbwWE7wFuVz4fYjx2DAzEJkXLdJg6gNNVF2dUu1bLACzWU",
  "key20": "rtBCPmHkdqtToMKfoNfuZJjtzE3EZWR5p16AV9QqVXMnuMCxmH1MaBqqfsanaDYLUn5ZCo7yxhacczS8MvcS9zE",
  "key21": "63UibEUCCnpVvrDvwksEZVv7AJmnzQjpJggXoHyfcerKXZNPfYL9SCUiMXnG7b5LgCEhdRzPtuidrrEsgSkhGV7f",
  "key22": "2gnd3FEGCe6q76FiAW4bjBhf4oxhTkXFawQ24jREzrQvnoPZG9hjaQA2zQsLaPhmGHphnmqaMyqkdh9kLUUDaGhK",
  "key23": "48fYLJ59E3Nq2ZHV5HNG6vu2YvaKtB5BUrCA22BZCZwZvcu3TiNRcbCxWuyqKq9HcU6eYHB5bBmL1wgkjDXL5QnC",
  "key24": "4Y3iwDmR4ApaZs5yFtWD25XezFHzYE8kqqhgcYKRz5d2oCBkG7qfLfg7bMkBPHWGoeDUPQF6ZNEPi4DhTUcf247n",
  "key25": "5WqWJpu6PVZVkuzo3X16NGV5MaMgoewDsW5zVJxmb8xrnVuVXwqMtXUHTL66WprXbws2D6faZmayX4xYpfRjMBiS",
  "key26": "3uioTvyDkqEgkJHmjyqFDCVzCRAddZGMKoCgkuP2kk7ANQaKxQLkCCcEu6CNjnKkjk7cadYHaZbTmYUL9sVhqYz4",
  "key27": "wESi1zfiaXYxoGWrFauz2THm94Q31k6PmfNcoHvFGkYw6WL9v4qjaoX4CZ7JtRWj4WFmVwmNqyrMefr4AkHurvK",
  "key28": "3hQN4waKY2xeMpvnKWjS59N5RMPdn89KvuTFkT1D3n2uEM5VtH2DQaPUK1ozuPE5Zh1BCAcSeiiSWJEeUMmoAFBn",
  "key29": "3ewHkaN3pFED3nwYZMKaYBQ1mnfdn2ojPYrauVXdz6pd4t5mgNj5CYJ2PHqBeFytPnYb9WhgmDWDJZj2dfzs6Ga3",
  "key30": "2ptDzGWaBMu7K8yuFq1kK3huysRL8ZTmnyb8Pmy6aYW1tqEQ7haSMzBRGoAeHYMZJUdm1NErRNrdmi56fHy7iuf",
  "key31": "31SA6dgQTaDzYg37YN5dNq9EjJhv84zWaph1wZtSLnVwTu46DNdm84GfQQNfiTAwhNvsEtc28cczreCgKmh7ECrm",
  "key32": "2CRJJVc5QtcWY1VYKX8UyuKSPJREixj25gyWU4pNtL1q2BsaCMdKEwxN6ycjNviV8aEnyLh2R5owhfKRg43x1C3q",
  "key33": "EEdgsWrCnpibvwzMLA3VZ2NigTaPbFPzAP5jxqWmQoF8zBgmC2Yzgopo1QiaD4vRm2FSFL1xymnZAoudLAmSgA4",
  "key34": "2den8Sxd7VDFqyVFMoB4efbjXUdfjvus2jySYUiYnbNQzUEgGyuxL4QCm3MqQKMPX4koHtCDZ5HDKNDnXBNaYUwM",
  "key35": "Fi3ks8WEuPCZ7NpvNuZJ5Vz4nV7ZyM2HC7Y4jxbNoKBVmgVsXWYFvL9hq4ZGiX2UcXs3jpe9catuQZWGtSUrUww",
  "key36": "23gVbWLN3qrSmkxWVMuKnTjHjSpvSAUALq1HTMZpTYQtN4F1sLGC2V5nbARBzoVpAM1Z8kQnzkjvXGKLVRnFCNST",
  "key37": "4NvfJSapStykAdWF2LCzp7rzPpwgE9N9ef1gnhNkNyf5FKdDZ8XPavRiCrXKNLFoeZbpsiFK8oh2MfKXqMhZp5qH",
  "key38": "57eXYxx8yq5yKsPTt4VoBhd34Jszsug8cnYTDMe4B6GLxFD3BmLp6zgM27docZijKtQzabRpgrPGiDDzUeMWKNTb",
  "key39": "2Ho9pqyqh9QJi4PkaBHdWhHm9QXab1xDvPLkm1irWq4tuu6UMf9CpR8dcaEaBptWE5veKLvUf4LcFdntqCqS1mJe",
  "key40": "3VgyExjtYcRdyrP6MnTiheSc5xWmk7LXXWfpRqhRQze9Ez2N1xLM5U8LjxWr5kWdh3TsPBjkzfuYPtQ5B2RqLvK2"
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
