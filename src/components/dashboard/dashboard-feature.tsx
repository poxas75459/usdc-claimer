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
    "4koeXQ8bLNs9Fa7nDnyT3mbWmbmuGzSEyP1YVSaA1BB2PsrJFVJRiZG7H4pps2Cb5kkTmZQroo5SKYYxKc8jjcKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vwYniKWPk4vMg8S6BsTA9fmd9hxvvjnVVUxcn8US3siZsJQs1wbYLd4ABqp37tPWZJ1f6Zc7L6k1z8z9eyHnFSE",
  "key1": "2XeLc6468aQ9AeE5RNqrMcnhonys6qv1NRF5jm1GXUTZk8AzeKYz2ncfi25cbMf9AmrvPoHUhQvrN62rqvsQvFbB",
  "key2": "2bfcr7Joz9kTC7FiZBp3eSZ5LZtdnsYL5ZwRYvWxuhkhESZcfYoRiEEQf1VF6Bi2HVEokmdadmECoWGJQQA3jKDv",
  "key3": "34SWBz1CWJgdMozrEy9xdDksAr9dApoBTys8ywj17yrbY1LxpKc3aeBHS3baAyiMDZdd4AwJW1noRo51KD6mfeCm",
  "key4": "2tMhxsXDk4LbBLDU2SSYHxU7JX63y3D31mN9a52REGAniLa9z1VmoxkMmdkXvhtvhroezwLLhBkzW2y8ypqUiEZG",
  "key5": "2MKLQZmGAHJVbk5vJqPaM3qfGbndS1Uz3Ev1ntVk3Z3gBd6CifC9sLTqugnFgK4SwvSxFvNwTToSFoGh1HdddvzJ",
  "key6": "2ePkyctbi89roxEJhVAbiVb7a1XJfhxH6ZBB7GpR2URjpaHaBnVYXi6FmkQ3ahqy8axyH9D9mg4A4VgDeBFd8MeT",
  "key7": "4btxxVp5F1zX63rZFbtqjx9hxZr47eSbqvy22iYH5igsHZtB2ncxBBMNDjwHkJoQnrUERACiUJgLBk7K1aP464rW",
  "key8": "4g2hh3Em6oSZVyJJGiEVtWrAygrXaa2CHNxf83xXoipnjjg3XkcpZ7eVUKcYwMYVLAzMKi5ps9dNFUb2coAKTeQF",
  "key9": "5F9uKb1QqfNCmGFuaBnwHcJ5Pja2fNshu9WBdSdBnxnQospcDeVL3eqfND5eH9qzobTV9NBXay3jQGMpLo6rRg84",
  "key10": "3Accj4H9moXDvXY7WE1JrSt3mYN549ZakCkDQwuMt5ZA1sZfCT6qP4eYzGgKBJNxXhLfYmLV87BBCNquiiGiZ9dj",
  "key11": "53kFdn3MtWDkzpwg8K8q7sfps9grQmsbhpHu9XdRRY8EKq62UytqqnaqDbupSYBKjmJ1YnieqQhrVc74TbXs4uX5",
  "key12": "2sDNppANt2gTqKR75Z9NnvWQVr48kA9FqwTtwDPuFfUXXEoz213VEG37Cug37XBqbV5DfGHypxw4CBUzMfx54ba",
  "key13": "rwe5i8zxLJFfRYqTLKKZDHu21NjqSg8drWHgCHi3ztt21CRk92MF5a16Hiid2BCTRescX85j1xqekyBWxx4cFxk",
  "key14": "4aCGLwvefQydxaZjcsTTH5QgNMPnAMXFWxQ5xgyA137yTuF6FesBZjvQQuuqezkNcAKNd2ZFoW3umUstakaHu38V",
  "key15": "4s5S35kL2vto5sNVn4VgkXbmN5bVwZJQDPTPensWP3qL27ppbh7NzesabybUNUFjKuzi4fz8gN4TLcr9hN3CqsfZ",
  "key16": "5JFiP9dXdstUNZN3GprujBssq94UK46FCuwizcoBizrAxNYaiMHEbuboT8eZm8PqnDvzBCsDRotTXj9b65bUbAtR",
  "key17": "21heBJWTLt7njFq1Kj3kWLd2qGvaSscaZjwsycVvuHaopgYxyzxVjYScWsLebktVc7rHdeMEtG2gr4gN6Jv5VETA",
  "key18": "5bngr1JhpdaDx5g8Co4vWc7hxArQ1uUd7CfnEEug5wESnhA7TpkL1c9n2GsSxfmADwWHzwpRTvDvJ6L8VvVb5NgX",
  "key19": "53SPHmtvF8DQxSJHUbszpneyafBUDYrkk6YpeodocUV8qiz3NKUPpghLEANDh54oM4r5BgX6EGfCo897gEpmptV1",
  "key20": "5f3jg1recPN9fSvh7XqEwA7xuh2n6Hi5LyxJTcoHHifvnZ6T3fz31HxPiimvEpyZqEh7tg7qYLmTWgxuMUibzXnz",
  "key21": "atp9LfKQb5DvhDqdYXfj51wLSj7vF8ndZF83NHwPS761j9MMiPUYXzcghhu8qGNf2Y9kaFD7mpDpeuPB5xi2TKY",
  "key22": "EvESwJtwi5P6m9zEVGNqJKZJC6fNNbFcBRg5FLMkpX5RrtZXkuDyFfHojzWrREwkC185zMNxkgUGPbim9qfEHQ4",
  "key23": "36SC6iHH323r3GJfNjZmuS314VVKp4q7Z12VVdWem2QV71esMpGVxzMdiVeNCK5YivAdRHrjVtJAdGrzySRjYMFy",
  "key24": "62UfarRtSgzvTJJcW9T3cr65vuAADDkpWupVdhwV9nixZcBe6vxaimiE3v8GGoSSaYvQVi9LhC1ATdQpw8BjUWyU",
  "key25": "2HfqFy8Z6ku4QfphQDP7Hz2Q6iXji8CKQRr9qKjUatVbg7bf9jKFyALsAwrpyU3yqj7hqEGG9maWfVQZpZ4Xkj2j",
  "key26": "24oqYYcqJSo5JpxNEPBjgvD6PtdCRa5HWAYq3gAAB25NZrUhENB7HTDVrcR62yiBeGaCBxvtKnTkmR2RuR4Qs3Jm",
  "key27": "2RZYWn9CbYVUTLEZd9VAKh2twtzG6VF6R1hDYhBUCgCn5i7zFqwdEFbcxSKZEHKRdux8V8srrhDYCPswzq3cvDFB",
  "key28": "4dMb5PyhAJ3MgfEwW2eWQZWXcjLsdG9ErFCjJpydkGTEDbiJpjUyfDaQS7DUzDNY7N5VAybQF22eXM7S8FtSt7P9",
  "key29": "5V9wTaGVnyRZ2kDT8advaMgfLmS6r3sbLSk8vh5t4vT7sBd1m8SgRiWqmgsz3aqB23ay3iT1w7Bn3HWsL4uscejD",
  "key30": "vW1eTY77YCW8JcKP67BBzDhYAAi1pZFQm26MKTAZqJdap6dp2Ha3ndMEmGn5mugUboAUkv3pZ3s8u2tG5qMoumL",
  "key31": "541XxS5k952idvy5yN4LnQt8S315s5FnNJMNh4aEbdTryjGeA2ZizRQj3d6CpmSHo4CixybacvKP3bLZWjR6Hcw9",
  "key32": "2fAV3yTzuvHUyoyieoxqcwFxUns6jKN5DxWh6Vb2f2viv5F97rg4Lz5eUi5t8JfNrheg9Ee14XCh4r1fGhtrCGwf",
  "key33": "3UsgMnRRa4q8JGcNPkTEtMcNaWZXvqEo9tsCuaVFgGn9Jx3ZooZsWBrbofePkYVrcMcCF7JdhuzYcnNY6GFEyEB3",
  "key34": "3J6ttVTVcbReo1ZT5sxB2VxkYPj4M95d23kyD5iXHuk1kM51hvSpchrj8mnwGQruxdCEUXHaHDChBdsGr93sXzZc",
  "key35": "YTzSdio1wSaQyJkvXKyRDG3yWywzkBHF1saPRzoSRqnhVuL8MDacBDmHqmciX1foQHYS9Lc5o3bQrntkcN8cEv9",
  "key36": "3bsB2QVRojHewQJQ6J7yELPZxAkh5Qxugq181rByz5Qxp1FmYeh2AeZ1FdpSQ8rFHWzSeNdvddti1CWeTd7Bzmbr",
  "key37": "5fpQn8h11Rvc2B87UudcXgR7r8f2jPmBKAjWgSsZw92z5qkLU53hxqJo5Cz3Y9CoC3Yu893L21J4TPqG5K45CbpM",
  "key38": "3NnW5UWY1AKc2tNb8q4uWMy9zVhbL8fmH9BtVeYB9NMgnBT6iB1csVbzstTJHxtqrxdBpemaRCK6AuVAH2GvPntu",
  "key39": "2qiZb2daPxFLno1yPPCEeiBnVrgFYeuyNjucPXckZmv4KVAL9ZBWuoKpY9YU3q7qABpsJ56sM1YhQgNgHEiCM6zQ",
  "key40": "4of9TY41wtdHQWTyhtQhWkLegRUABgC6MkQxSoyoWDKDRsFxYUjFXrvUNBNgKTaYzUxJXGoh6VAu4XE8FRYLAivX",
  "key41": "U4V9cAce6ZbSHgSJQQheP8mnASLE8gwjq8shQGgjEKo4EbHJCTJgKXBcKUs6EiXawkJH93u1KygSiaqWeRJoWks",
  "key42": "4tV4bfCZcVi3SDvanjQbg2MHa8ubcTSgmZK9pcuYHzd3pHMwvj1oHbyhv4uoxX6R9itnAXGFedvtbonDHHz2M2DF",
  "key43": "2FjGn4oW95WnSLF6b2FXcT5Y5nAh7d9W6NYjc4BStYptSmN3Dfww9Nct1kfnFKztvxQKUJgd8tRGWt9nwDACM6mZ",
  "key44": "4Df9ipNE5KJvqofN9TZHpKKb5AdhWgCbGvvdKAC9gjCvrijaRedmdACwDgA66e8QboEEWubfwz1Ysjt3H7PuxS7z",
  "key45": "4SDtDhLf5q2RfxJh5eiXgmRCvSYNNJ2ZsU5RpG5BgtoS445YfH6DbZ7AEQZ8vg78cjRChtEsP6WATrGeRa3tZ5x1",
  "key46": "4tXQwbbNsMFXk3dSKFGsgRDQh3VAZqC9ohcka1tr5FowGVNakxiP7fDT3JV221S6ZV1Tn8ifsqqcoD4sfzvjc3TF",
  "key47": "QZkgmFQyyDcmR9aQTFTK7ZX7yMpXGsaBLo2cU7L8vLUYA6YQZ5Ckc5KL1TDdpAgVaJwDY3Np5ENF2QYwSp6erk2",
  "key48": "5PkKvoP72fzsHqdn9Tvksnrt4cLQAKTrCfAaQ1R659onpzPMzZUw5YBHyfiDzpgMhuAFyvhy88sL3aVWbovCxHub"
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
