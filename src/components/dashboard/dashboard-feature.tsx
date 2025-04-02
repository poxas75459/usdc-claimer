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
    "4z1k3JXtyhcvNQhBDasTT8tKFaeJdpn79GVyHB5ArvreRQoAjym42txCRBWQVvDgksFY13VSzDfkqfH8LUDrVPvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pxwrMcwEcLgShFb1YTxRAJAo6HmPZCQUQ4Wq3iFbfKvdD4tTw3Mvyv7nt4a8qPTWAc8rv5nLo44NytsZ6yJ1ifN",
  "key1": "23TYoHyGDrgjdrfuJoXC4YKgbBWUz9vE1Zf1U9wP5RwhJFsmiY6PRhNm5ksB87PxPp577xeygBQ8KodRjB7bdzjg",
  "key2": "4hZXxuuHXiWvw5SpNAALj2Av3bC1j6j7x9cPtXqagT68Qq5BQVrJyforw73FzSNcFWawemYxiGK8V4WZjC2oW2Rq",
  "key3": "Zgw5QTrnxrfUpY6dV6RVf7sgeQGMXbVuWMzTpou9ScQ1JZoZnJcHMXQ1y2xup7ZD6oUAW5QYV2jtqZbMSWjYW1Z",
  "key4": "3NEaEcvfGFNH9xhprecAoVfo2DsRtpqNKyiJsWv63ZBYyDkUpSW3MvEQCyooGBxzMGXG4gwqoJKqva4THf6Lzqzg",
  "key5": "2VCVneC55Z9CFCb3MrfJYdB9pAK1mVSpwPdxTEBu5dyznxy9gn789MVNsxdLZi1jXtbSef7fLZ11xUxaWvN1Sp1L",
  "key6": "3imD7aipyD2L8u8NNyMqsndji7ChRySzh14ypFR4NsNxjJS9pb5KFCTHaBf7XFsqaohcS71rTVTq1Mhi4RD6KCmP",
  "key7": "613W9GDVpi7Lm5r3gXT5AjzEhDzZaBVgiHepgy3vpL77KaLqYNjSxuzTZyBXEDcxNu1HWmu8yfdc21Z5Jcfg667o",
  "key8": "31BTvN3vxYW2Q69ezx3frh1hv1yLV58vGvWTsgf8tkJfeLUs6z1jcexyXedivDMz7DdETcu65KgZGsYfnHKBGWin",
  "key9": "2XdYpkbf1E7rrRDdLBcnZMRqoRpDDR6xEAAyA8ACoEkypoeHCJ34qFEJLWmFLWHBnH5h6biik3WjJUKMHsKZLrs5",
  "key10": "5trrsbKkeuB81edhm4F2V3bJAGjKd2vYAf4n8NidVNiDJHHEhZHkRm7vQN6hH4LzJQBXps36Vv58PXUjTuKQtNV",
  "key11": "5Gb2wQiaE6gyKYg9jbqQFPE2vn1ZHUTxG1iLmHhQV3x4HFcBzVHiBVXRXLw1G79EAmy3LSDfDBgdt3tMN6Cg1996",
  "key12": "4B1SbbHXji4KUzRZKEGmN63aWTH6VRuez4TULp11uY1xeadEGCaj8CY9hvadrsrVoXfhcJV9Y7tiSUyUqEwJVai9",
  "key13": "3uGip453fDn2HGwMjm5wbrSku3y4P7LcWiFRHW2SBSH833Z2xy4TMYfkVJxWQgtv23r373MJic9yUkWpGiaQWAvZ",
  "key14": "4kyLeWhAq5FTEeWcsDzHRYwFiMFoiQAHV7sSCRFLEA5WA2DGNaMcvAGztwWvmJR4JfAhbeFDQRA3HT4a5kLmHJ4Y",
  "key15": "4ZZoR1vP9FHGJCYH8fCJfYj72uc6AmjLkRhwfgy7FKNXYH31hjvtQ9GeGBK5zZpQXUy4M73kKJ4MbjsXbBr7it2X",
  "key16": "2zYagPxGdGYfqYaUCUhfHjaLxsCXT2gjf3TY7zaCaRkF5YYzUV4b4WckzPQJxkV9F2kFMZP3p9mg1PWJzDvyohU3",
  "key17": "37PNZrUxrCv4E7fbRKMxMdeXHkDgCJ9XGK1J4TJcYsbiPukQMoXZQzWu5VYBXnHh2pnncEPmhtBmHhrykXMEwKZH",
  "key18": "51KGoYfwDkHk1ZqodaSWzwC2wmFv59pCjatL5caGKwiruUyvxL29pavv35zuFMSSvQ8quHtzywwtVRKcYnDK7Jc4",
  "key19": "5o3CryqftvRPpyEFBumhoGc2YWSyrpVBDeer85BeHRTvJcakYqtJRCUrup7ic2NBF8oUoZ2jvWGYfNiHD3NHJNur",
  "key20": "2wpgW4GJfv4MUtnYYNeYvMxN8SzejsFzsQPjdBii9nAgo8FsqDHAa44QE5MGx2z3m1RwBv2xpiV2EtTbZbSBW6rY",
  "key21": "5UgBKb6mAL55fQZmrNBgZfXSEBzxmsovbBzj6xePD3JYsyMiEDZVwDYi4QYhVS1CxNUdkqLre3zvgvNy93dPzYfS",
  "key22": "4iU9Gy7pDWFwa2xXFSEofZH6wPt1H6ZLw9JRroLGfHmVBo3rRKSPbZTdaxDacHxoMFsWY6ifypSPtA1XpMkapg5P",
  "key23": "4gMErZK7bGULPGa46F87kRvjQ9gnjset4DWWrTUBtEyCqyeyHiEu1a7kgwrYC5DLzywBTXUA5y3k2EZ1msadk65v",
  "key24": "4AX5jgq5Bnz13jhjRrr6GvRJGqaXZe1iPyRVyVziyGL8gvSb9yEkZvTmAktqbZ5YJbiwdZkAzzqxZdLSweBKAME4",
  "key25": "vfjLe3AZPEfzmEDPzPm1gYQHMn5J3VZiKCC9kzJoZAP87kMJntgRaNBShguW5s1AUvHrm98EknAroWXKN2wnbHV"
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
