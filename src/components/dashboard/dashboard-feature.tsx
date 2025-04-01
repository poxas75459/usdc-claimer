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
    "bkMypmKHezSTqmowswyNxFQeKVeeTfebjE6ovUAENpaMeBp7HZ3XjzUSKzgD1hyMGpEDu2FaUGs9wvzfcrpuPBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UbxLMGF3omvpogCXL94CmPDRqMi51Rfa1cKu827yWwh9mYGhZt1aedT5TWjX6po6q2bdKYPo4sHSagw7hV8giq2",
  "key1": "3V2EnvQNv7r7SxZDst4MhLW7CDzLng9km1rTgyoJni6qEfX6enNNWic2uXqDvx6YthLhWUoh1DjG8jxpkVEiPmqY",
  "key2": "4jxqENYA4ZRwz1wzePrXrkiRfCqvYhMZkXTKPyLYoFN5rrYcijTZt6sQfUeVj85g5GnV1XG9TWGszaaV1CkKa9ib",
  "key3": "3uq8MNue2jinqBRKCtEasFkpb1w6MWT72YbLv1tLsKy1adNENDT5D8LN7eVGNqsZMgswdRrBNTbtSbtDcUBgNAz",
  "key4": "61rBXokYQRRVs28KwBarjVgMo7M9a4pyDG4QEjVjDxnxzNmYSCfYbovuFA3jZVFoq3Q4fiPcXWGuqtbosbaJFJYd",
  "key5": "3qz82ekWQFzyJAFrR1LjcWDMLdYp411TFC2D9WipJPnA27GPnGn53xKboQGKv13GoKpnnA7bbPvtdyBqbTNtbGMB",
  "key6": "251vnQecrgHGsN5d6m45tV6cfM9zZLaRim5p8zqmPEMSpbscVzGsctG21zCCCsNV4j1FHQsTy4XG8kZjuLnEAMF7",
  "key7": "5LNxtNKJFJ7rtTTmwA1tHCrXV6kdJF8RCXDQkSVzWnfLHggXEuUdnkBsot3Wkm8NM7SJxwBie7RsHJHTrddHsTrC",
  "key8": "cDqkajiJJZo6yeLb4ehiHujRdttv1xT8SSct65pvfSP8Q7bByedm4KabxEY3Cgb4pbYiiUyWJeHWDpQJv9ocRjb",
  "key9": "3SpdxH7BHdrmrwubKRoUpsK3Q275yXE97ZSzAPWuXrziXEUCpGQ1MF5twL6rQBDNdEiMVHsBHCzMXU7phSTD2yhz",
  "key10": "mxsTBbfjuD6mTnZurpnnyESSZPD8K1UAFBFz16vuHDEw7da23s39LQdXwo3in92n56mjkCZCD5AYX9P39zQvtRH",
  "key11": "22mYSUX2YFiPjrrfageGU8QbfR31h8Q4hmFQEPGTPnsrmBPXacWa6tuDXc5qQzLCBHjgBXgMuRTPcFZzqVnHUxkh",
  "key12": "5c5iDRYAHFdDvEjHbYs5Vorr59QkiG4DVayv7TgcJLKY21aPU7FkZHFARMwLtP7Wq5hdAvacXmnCB8spsZNbAyf5",
  "key13": "EqVxSir5fB4uHNP9aiwc44qnMqx523r6pXXUJZFsycmxsGWij6sJut1u1ZuCU1pUbGo3DkC5o8B1eLwEGUkJQx2",
  "key14": "kY8Nm2XMUA5crVNi62prDmKn8F42guf8885Q5YBkpUB6xLTWyhzQPkCdVLxuhFjhSS7Wh9zKdbT3AAW8TkXzxmk",
  "key15": "2zhdtBxWtP45kGpgznXMuLZt82ZPme28LQi26i2FRJT4ZqYrk66jzmBkVKkv5ZLpvruDt35CYnaXQCjn9mPKJQVx",
  "key16": "2UR84tRBdJcyrRez6viAABC9U2KQAMFcNAgf4pXgze8CMFRbRTniJBkkT2qeG3UvWkLHvqkkNwHhYYdwVxMYHCem",
  "key17": "649BcLXk5FnCcjfT452Kan9QspRbZiFCcBhaHpvDkLdA9Lzhd2C4XLvJZcbCQrySxGSiuku5LkUeqvdpCzqeHvTZ",
  "key18": "2R2et9T9tjBsYDkLYQVW88f4vHM9E52kDWEfwrrQtN9fNzk25ERYt4WQB8TLEtrCkfnCuA5aEFTbbiYcXvHau4kf",
  "key19": "6E7me4uoDE8R2vJ4rPSzKUrxkjYgdoCo6ksJSkFp14g3Q3SCfKRZGVmgFWaomUehEWyudmbKBByGRDuBzMeWd7a",
  "key20": "3kgNgaxKeyYES3c44Q3xG7b2Em5nW1MUBDgHbRc3bmyzf7Eh3woupFcYWkjgVjsyRpsxff5GRTZA3Fx83RPjFCwH",
  "key21": "2Y73iTdY1DQV9LczspjjMk8AeTh59wehCd4AmqfXk7ZfdwCREDU8jSeJjxg1mASjJv9T84Mxke6iURYgvwuCyvrb",
  "key22": "732o1FXKKDopTHH3LsimVerotzJ8b2FA5p7fqV4mgLHNcPUrjEPBNB8fJm5BgysL7qPLEWFkhukPpDUTKqrKhv3",
  "key23": "2scfvw1tovtLLG3dkzErfeYJHPLsPtWj666h9RxxS1nSPPVSJ6qQ51RwHawZichCAHeyst6BFFMP3auQej22FvL4",
  "key24": "ipESVXbVkeaCwCLqDKwSPJGiWymAmCDWNDmSCEh6Gn6ptguprvAdQh56JqcBhk7MR4ZKgVr8evUHDoMkTeqiMBV",
  "key25": "3MBeVwb6eoK1BTDb3v6zDucM1puVN8y6kxHifwsB1aGdzRkTEzdwUWtUpxcSfVPMgLvq7uhq7843emEbt72L6ohM",
  "key26": "4R5jPyv19uSHrpduYhnZTMJkjJ2QSAMLPx8i5tG7u6jy7KVxEMDAmsH692C8JDQc1Y68aC7MEBigAF5rjCapNEW9",
  "key27": "zruKPRtGt2FNc1YuDbsdP4wmsywCVKGxaK1aTDPKtZy2Vfm85rt9PzQ2tfnxAms2KfYU3vEJwe4fKP4HcDgSTpz",
  "key28": "3DBN2s2Ez7r4uCxpunqyDZYAzSmG3CBi9En1meZGNrr4CWgL8BxQ613FBmXSh7Uf8cqZPUHgXyrCrBiMmi3awwX1",
  "key29": "o5D9dMa4NUhq8NvVxypA36wYqTPrYnc7uucKEBMzUMF1EWjgUv5Z44zpd6KWKd7GoB5LrbhekYa7FzjqmoDZhNJ",
  "key30": "5pJyGX8cfXmfnLwWbwsVfKaJmXC7NUfUPDYvyQC89vNCJkybR3aKtRPU5SbmwoT5CqbcQCJ5QLeRWqsgihMVPbSH",
  "key31": "svftdg63GQbcKrwY742NEE2KdF3ZrEyQZN3LJ3SKuZ73cLRdwkG4gjfvu7HvMKBzxpzGsWxWr8gGL4ddcrpvbwb",
  "key32": "FcnhwhViZFmTBHdjqQPaEJ5fPmcEZHMg5RERCUwDdrprhJT8wgfjERbsHE5QouptHxLheWBedhjR7HwAnTAaBrd",
  "key33": "YJ8jQCuMhsndKQzcxUJ8R5QDu1THnfCqeebaxp8NFfFmriUqwdkSM3vhoMsCDD4qtgnAS41gwPy872kM3FFxtig",
  "key34": "2LqR4GjudjMiCZXU57h4vM6dsy3bLqZefnB6JpQcMxa3QYvL5oZwiEy6GWso8kTHF6R1wYcsXDdE4mCZrgSy2ocK",
  "key35": "4QShAy1qq2pvWfYRgNNrQHSpzSAKrAFCY6a9T6XiCwzpzs37yjvc7CwGYhTwQATemnws5mThzNrYWXPBV9ySTxmg",
  "key36": "3n4zA7tNLQTsvrTcbFwUBcKxWbZY2Yhwoa3SBH4gq6W1XbNwzmYn1VNSpFyhcxzMR1pyJqbgB6EZXnKKchznwvxA",
  "key37": "5KDQ6Ljy1MLLnDmbYCyiCvbQ8QsjiXHcJmsHWpAGhAyDzKKV7brogaw5uvJ9ZcZ4PiYmWBpRfEaFvZMTQdyV4rnx",
  "key38": "5Vy9cC4fUJPtstwL4s2pcngLb9bczbVREZ6qj29sq3noUW8s9gKWkPZ3nmjjWRwxuaFdw4cDjimtyDS6JNPWvij4",
  "key39": "4cQbDDp4x2SYTQ7HJ3ti4ZRUoXGATKhJ9i4vxvn9d1owEFQH2vd7VkycMsWeTyTKrfFDKouGuof3JS7MTyQujTx2"
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
