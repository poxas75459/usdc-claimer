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
    "5Go7ugchisSrfiTWzMz1NuhEpxheZVaLvtXzxhFmXYYnYpt2H5Lfpy7T9Fp2L4cuYYWUvJmXZWLqxzXrg4KSZWwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65zddAoCodhF6hGszmzNm6rhZSW4swm9SLTh8cDZChaQGHqrZCA9c5ZtEN61SeQn54sDD3KuuYqWoLVCska8QVTw",
  "key1": "56RjSkhPgFyF8C6C11ah4xat9JLzVuiDxoxpB5SjK5GC6L1Xy5gtGxQYyCRz49FzEYH5TsWbuW7CxntqfSxiiAWd",
  "key2": "359BZbKAmHSif73rSoTQ3os9TnUw6LiYzW1EuA4NrDj8fdWSEFkMksSsQ3KGwSuff1HHRYsCxoUX6vzgCE7vj2ed",
  "key3": "2NzBEdKZkFFBWRJBDvsrhtndW6sZ6LNKhT7fCNzhSLDryapoc5pE7oyygvChWWEbPehwLfhXxYzPBGNjJX2prULA",
  "key4": "61rEkVWv9LEpzPZBDwvYz6DLynMCo47P3vN2Q3ScDExU2NiNws46vSieCkZuLy7s9H6EMB2jkVFd6deQZr6i7T6T",
  "key5": "4zMNe8Za2MSUcK1CnzHwTtUuoyfitDb638LKWQLWzFb39CtEkds63UZ3ZeCc2W1p5ZmSngXYaWBkBGajqMLxZWPN",
  "key6": "3tPHKy8jf5MaEk1zqN4S9jGAUPtqh16yxZmtbDUDmUJqYJbr8i9DdV6X5rA1b9x4KRcK5jovYLEKsis3GwK7rVWi",
  "key7": "4Kgw5dyxGxvKrpbGrRtaSqEH3eJSbtmzLRy6dFDU7cxxSngWXoGrpuS9Lng3Zyywpv2Jo8ev74XYwTZqkZXF1kX2",
  "key8": "3hVnYURuwG2pnBc2Pa7713ZFizY7kPt57LuCwk92ybwmycumq1QF6qRMZ6XAW11L5sTMocCYddrvLZsiPmQsq6XS",
  "key9": "9BsqRD7a6gA9R78SUcvBmWkvb8fqKYcTqqRhRW3UvEV5y6MTZjnJFg7kexF2NzDzLpsagYheFA8Pf4PD9p2i2ZG",
  "key10": "3TPxjQWTyEr9kbPAR4JqdnQrZCpsrgbW26epNFNfZiJugaYzYLVKBwFv1KqDtS5QAfq564VWr5Y1NWbaawW6gUWy",
  "key11": "4os3srQtrKN26X7FHs9aEBTyQnE8qRKcjLZDEYf42WMgwkzn6L5Uvs9uwYs179iqXnFmSo81uNjkBwrwMwzj6sXN",
  "key12": "5H5v3aoSb644GxWhsT7izSe3pbZiB7mTk7y3BH6xGZhrsJHoVe1ytPAQbh2s2uGe8ZFhvaKBvpi9jPdoi2YVVRb6",
  "key13": "64DkwxbXoaiK3JJErs49n8BCzDFwrgcGvE6vCkSgPZpuDrMHv6Ap4X8eaTbdMKafw2oiYpdPhy4Nd2CtV42kGBPH",
  "key14": "5Mne78858ZSetyjBM15WQACmMTEmH6Jx9P45WV9BQhfWjKdWLCzmLdFtTGQJ3fa3Gjh5GxT573KwHceQEkR4VWJX",
  "key15": "qpHqt3W9EM5grp8uGBS4Tc5dobM5kigoYfdqwTnfRyH4w6DfLTcyk39nL3kUigVBnQizDAGEYsN8FAh9U31aFrc",
  "key16": "5FrwqVWepZcsaCKuE1i5hba5YAz916oa1FbBfT8JBBy9TSwYMvb5T2J94DEscrDWpAvSQCbQ5FLqt9Hrm3nsFChz",
  "key17": "2cWTkYcqmaUw1GjBnyDrMCsQzjoypQZCh3a5QVZsaXQhFDvJGstYYEdCavQ5L8YxHjecSYxN8TVSQvDTPaQqC5JG",
  "key18": "4nRx56xzMUGThqjnYsJaym5NpFnswFw3t65y7fqzjecQm9LQmPDvC6PN8cdmffB3GHPvCnBat6yxMC3fuXde8kgn",
  "key19": "yMnXLRGQVRTW2GnDMvpNbPXYAQLFRfBBo514iEmTv37oH8Ez4ozFU7qW4JpLDpdUKTmFVrrSUhTerUK36fVaF6B",
  "key20": "dPthELuNj3d5WQn65jyt5BQo7cSZ5wb6QDWhqZw7sUFhNbcCMqaZTXgEZ9PhNkWPzQ5FTt4u129TDLaHDdjAb4N",
  "key21": "3h5NLa1qByTucQX34qvGxpp5UxmwTiq49kj1RgiYDVxtWhpw9m2AUkGmsJ9XQKrfYrREzgPWTPkoSopUkBXjGbGn",
  "key22": "2kNbSSYUpWMj2s5C9gdWTNerUdmk6HBp4B3sR33tiob3fLBPadjZMjP7PQRHYPJZDjvfVjm5yemxge4jjzg7h3po",
  "key23": "5i7UgJF7QZY2HBCzicYC3kzgc9Zk4GR9PmJxYokHHYD32sVDChTaD5s3dVZFwCJRWecfGetU3PUdoQqZ2c73ELwF",
  "key24": "2Cr4TDjFJS3fVjKPAZhY6J3XUSB8yqMXyhJmZMb7U5Mscvo8ap1gFb9rBbKMMdcQykGhqw5hjRTyGgtVhFkc282x",
  "key25": "4s1ifiHXdvgy4xf7XpsYBZWzQ3PwrhbxSiiW5jKE6D4pjS8AiMY73kETJgwTynkC5oBq1o9n7dJK6SSnQ3JoPwVS",
  "key26": "3N5cGYbmaUgScSkcJfEWbQbiPj5PeCk4eudS6csk3CWyHxAvRp3gmr6HBLcm9ZXz6hJCy2B4thtoh5egujQVfEFc"
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
