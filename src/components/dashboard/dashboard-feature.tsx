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
    "34bhKw83bBEBfPSsnfAdGUF34LpSdp6TnwVNcFwuKgEwwNGtKWu4kq6cGQqm4Qm4sxNaFDJnxr2xq2vw3jHW4x7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57k4kAhKwdEWY2HqyCYXJGnZofN4PR4WMvKs4kQEC579dpF1gT3iPNVjoLnd1R4ff8XiQsNZmmcuQRoHNnKWbhJH",
  "key1": "4RCy7dBjAL9KaFW5b52JCmUgD8G3n9xM5rZei1DCNUpwmv7RyhsWS6MNToQ2mF4Hxm1QujB3Xp3iQ9M8b8KPen7y",
  "key2": "QVmk2tS275k6FDpcCpCiyGGSVhnhuo9TwNCDm7ibTDvQwFGTygjy542qquKBvkGhuydwKgY7Jweg4nraymLZAzx",
  "key3": "hqMgf48e7Hj3SCJTkS11cjZyQEyLm5rXPLV5Sp9tBiSRQ6y7WTDQEqVwm52EJ6ZTBF7whzhMQKSWYBUU18chPAF",
  "key4": "2xXjkF7iVavovpAFJbNhVgvYso4SoaE1JScfAdrpvaLfw6c7RYhXTDfttw3dCv1CCo84iDfsc3TevoicXp46LV8n",
  "key5": "31JkcyzWnm761qiKD9bEfcbJV5jXTyVJj1qFRr7DminBQr6zszwsVWwX8r9c9t1gjPJyukxSFDH9Zy4iar9RNmzK",
  "key6": "67Sd3BDBpJaGDpPtgrMHiBAYdhV4RoRCQaLFRRWN89Mkt112g9FqhPG5D1XvKDecgWdkRL2vWBBMJWxD7ZkgyTDQ",
  "key7": "5k8R2wZ3FPV4F9RCdEkspBt5F9mRMJf2mV5cs8VVmdTmH6c8DXnZDn8UxsVvJ4qfbGbY7GuDNE3m7VALd78vnQkF",
  "key8": "5H3bAW5kCctwrdqLdKFv8TkF5vUfsH7jbhQaKkpxGFhRHCj9Jw4BBxhqFb65n5FACf6u2qy5FnuPy8V3eyeCVDR1",
  "key9": "4aA8tFryKui3CYa3XoYZJ3A47vaz5EPCSxeEUVL1W4WszmhZyTDKQqZKygsyg1efznYvxsdpeTMcaf1nhDkTenCx",
  "key10": "4oQrFGpQk9cXeBP3BhUncEHVruaJ5xhSmQzSMQxgcTXNBxVktuntFq1k31EHSEJCNds1vWyYWcJPWKJYQ6FkAiwx",
  "key11": "37EoCJQNK5oQG1E8wNSJdrSDGZjbYqiymPpPTDAEMwLgGiVj4S5NkCuzvqbUonwoF9DdqHhQ4Q9Df4LNtg3HKNeE",
  "key12": "WkwKu5VUuwG5fhjf6BU2BoeeCVQb6SBVQ9j5FsfFoK5yFvJWuHX9vvqcNZQ3HZdGVyksL5TPNkBpFfEH4mvF2ra",
  "key13": "8ek99ijsQZed9iWcTwBh56TWm5Nibg5QF7HFdpgVYkWGJSC9RrJp8brt6TeE8G6fKkDh4MzbX6sZ48wUZBWJqxG",
  "key14": "5QAWeXhryVfnR3FL7QPdT49Tjx56gjw7RADToVVLzbhh4Tm2bXze8tLGQv7MLNowZkgLbBnTrdDYF3dhCB7qDeiV",
  "key15": "27v9T9m2caK9n2aMw4df3ywYD4coEnj9uZWcUmTWiVkgXQM97Aid13bqwe9K1EbRtqA7AwrLjbipt1LK2keNSXEd",
  "key16": "3tim41LiYQDejPRpGpCrMnhFB47bwkWog9R6rQmN48t7YwgVwiAfKFaXm27U2shyJe32gRqrcHJrbnk1MSbXsA6e",
  "key17": "2VAoWXimSF2YTmBKYWRiqFnQ65MXyyschzrTDRgwsJFeuLiYcpjHvEEhDbT7yksRipEfUFwYNAq32aPkiGWp1v1y",
  "key18": "2mW43pUSAPUUVThYCZWNrvqtMdsqNk1fuCNxWU26V61zCrjNBxPTrHqC76pxb5D6FbAxjQPADHcWbZYjQ1nH93Jb",
  "key19": "4tT4NryeoHK8MZiqNRu1nLg8jtF4foF8Pa4L28t6ffaJHdoZCeQ5zHDcAqR4sepTehzndtyooYX5d8mwZCHGTmZb",
  "key20": "URVjYwsWfVa8G31qhwa9PB4f76En2Xfhoh1Qoov2wmVBLiutKgC6oKuLMaqTaMjyK3J2v2ePm5Hh3Q141Vrw3Du",
  "key21": "5WnMgv4TXmDpWpEnp1WJnakpK37DGMfYJSG5hxh9KaGydsSYc5YvHmH3R8SryvofvDDxdKtzmZWxCthm8Dax8NGr",
  "key22": "AY91EXR4UcZ1BksycSFZr9gnNXQqFvGopMeBeVRvLLyGmbPmjFefeCK2vV3aDGVrfJVw9A3snnQRbKva5fJwVxV",
  "key23": "5c8Ryf94AasvaUtUbRuqwnYbJfptVdb2GeMTiTaCyYwCNd3AfGZFTwznYabniYVrgdhkjCaGuovXThzoXXQ9HaPS",
  "key24": "3tWk1aFnvbDR5espow8ANK22vSuwYHTyPmEtS2yZJVTqx6Dh9RZkgxcm7QhpgjUiB5nERp95WbyUnpiCEiU7Lovh",
  "key25": "22KYj4PWwW85R9aveyaxU1jbt983mkaAv6nJxRjqi2BinpoYVwMJaAXiD8bUy1PENzeLTYbBDvaXRQcrfA9AwVfP",
  "key26": "4eFwe9sFQvriD4DqQNL9eTZNJCeGhyJptKigtehQVfdCHfR3WmZCco1iLgVgRTzUUKq5yd7pgzZZmtsPZeSBzkck",
  "key27": "2s61G4EqHJG8naGYfbHFUvSXXzDb9HzykUs2nNAoWf5EAzzVFQrSMohpLa7U8uGsuTx1aJKaNJkMR8o3pZdMYK4i"
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
