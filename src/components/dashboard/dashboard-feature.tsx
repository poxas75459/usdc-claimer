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
    "2QQPkVtRbXe2ynmFBJF4Zy3A6yUwwS5tKDeWM69fe4E8VKw83saJN46b6oDrFu58jaBCWXz6ngwQkNzQtQt93SV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63PabkfgSvzrQZzi57hPY12q5oeZYR7BDJc6yTQ3sSSkdYw5ei3QkcwbVN19o8z6cRj7Dj6PzqoUxtkcRpFsZP3E",
  "key1": "5toeQw5miNukEQtR43fAt3uwdjDih4mqaHRitkybFjY1dfWXZfjUNSdw5mrJc4uckGrTM1vWk763AyVXX5zMUNsD",
  "key2": "4oDUvsXxeB4PwAppDJyNviq674SfRhFW9F9tkxNCVuqLzGi92nTfUVyoGqYbq3QkmLy1DxR9zQoNQBXB88ogaNDp",
  "key3": "4GigpumytM7SsdtPR49eUd2MDZqPvpoE7cGs3oNJty3ZCFzeNdM8i9VzjPpcHtrTor5RVgtyJyqsVvzqez2eePbU",
  "key4": "3J1UwEuP5wMXxLym1tUFeU49gg8iTDbkm24SPDAFwhJjyLwHA8fZzVYajmiNkW5tcGn9SBatJf7z17ssxNYXuX1t",
  "key5": "4Gsw2cK54EVLe5YYCy1rrPNWLHdixcoLmyteMeTmtGyHLQJzLQPchprKBcJMyWiyqgwrp5oFamJxHz29HptKWVfd",
  "key6": "2u2pb4p2kzJGz9D3Aro8FHCagBgMNgrLzWakyNrt1ScE8cviC9M3Q6fj2qPaBggfTsDwzhvs2E9W5xk9quGyCKX2",
  "key7": "3hCjnrn3uBT6wq4ECkkqxFqJbfP6NTnWbjQM6XMyFfALSCykYzkXmE1UyZ9gHdhprpdULsnQrjFEk7Xo8LrduYRU",
  "key8": "5MnXDM8KMhbZxYqSmMcqqDvsqy669aTeXGLLbjPAoHxd2jzAJTuFDVyDdu8Rh7ucrAwFH85BqUYBAkvyYcRLyLTT",
  "key9": "34pN5zYawuyQsgo7vQ91M1jfezK4V4srecZ1g53ZMqMAXZwMF1dechNXPe6uiWeAYMrzBpG4kCfGP2qaYWZ7Zfug",
  "key10": "zbgxZDYJ7rxLJh2ruJtVFovkuEbEhqx6EML8me12wDSUqp2EsE4ivWdJEozBjHM4ZgdKdE1AKtydLbS3H3Ntc1m",
  "key11": "x9BgEkU2EodyGxzUQT6kpN1pKAKWxwYW4VFMgszpCYuXskS47atnTzdL3jzYn8V1gE5MN4VQ9AsYxgQmmJ6JqhU",
  "key12": "3KMDqUmi3vug7XZuKcoSLrf61weVKhodJSAnmaUgpG3EQN94633A25bR8zB1CnHvshNbfjbVVJf56Bbfy3vrnvZq",
  "key13": "3KjyXmEVpwTw2YZtNXEfetxWQJyGWqUrtUeVnkefmSThyvtt8U5dPztAupfGLY8iCMdZiayunjz17qPoznhwycTF",
  "key14": "UKA3LaRKnQSnwETapbPfQWSiJDMzGUAjcqRDA1PK9y5g37pTrKUvQcx17BBSYD7Vu36uSzRk4RAAZ1F6zE3BrB2",
  "key15": "5gSV3x5wqjYQz27v2GDDybpxyu7BmJUM5j5sjshnZCVuMkRez2b7mbqgjd226LydeZAhbyo1i3iAqBNr3C7edrNG",
  "key16": "3ViD4LdLb9Z7JVQj7EQiQLwwBSDL2ALVDcXYMdNUT4KJ1coK8auwrWo9fgHRv2XKrPmZ9gHRW6L6z8UQ8ZoSjFqV",
  "key17": "4Y3AfBLniaj5KbHemAzCfXwrGuDCiQwdET23xTFuezzRvCc67LyGeGac1jGFf3zVSxd9RAoG1vYvUjRdQQirTfZm",
  "key18": "5dY85uLNzRbh3kR6xCFZVn2w5J6simPNo8rLk8c51aAMATKKYsNqCbUAhirRLpUfzZuiux3t7nNxKrW6GXyiqS8B",
  "key19": "5xnfgevv6ShnVqXPLWipwDH91KQMJqCQNz8sJ2x4fhWLn7aqCYc1HBWFKhPgLKVrT3GzWSBxkiMSUeNE1HJWds2e",
  "key20": "63J7G2DXrMsUAgjdGMvXXxZBARTjriQDZvhYNExR74QsYvUxY2QzMdEaDsw7dhmhTMz4kuDut9a1gX4F1YnWJnww",
  "key21": "wrtsfoASazMhrBAvEC1o7H6NbVK7BVnpQRMXHnW4f8xYp91zkfZAZUxcNYsqd1WCYddvEDAufMwCkMtBCvvbm5H",
  "key22": "4sBhoUHFVk2y8LfB3EmeXN9XnnDaV5hzanuBpGSa5DNDF9PRqAYE7R7vZxyn9G5KF8B5fz3puSMr984bfbdFmH3c",
  "key23": "3ZMmxkpsiLviqVhXKdySVpezovTCUuDn2LLRRmPi4oDyYFpj1r5Xg6QTMrvKuddHEpBX22tJzU94yMDVwEGQdoH1",
  "key24": "5usni5k2LT8cQvgbuF6Z4hzmjX3Hk3ikErp4MymDNNHQUZJ3n8iLZALAjroUQRrBUwd6MYMqV7iH3feEizpGczWG",
  "key25": "2fARoRGD12iwv1hsZUVrVTPe2sprpFQ7th7nGoEjQsd128kSTUcU5qYeiG7UUV4GEVVgKW4moPpPMVJ9899e2fTQ",
  "key26": "4m4Scq6cjeigVfBRYUG6VGh2KtTryVV5o3H9CWtNt3FZB9eyTHs6uNiiDNRKsMACgJ8D6y4Aaw6V1w2pyVpBjKP6",
  "key27": "45qZW2721NmJdU6Cbk5ZyqA5C6bz4qV7SUGvXAzgz9bB7a4T5NQVW2gY2K3akczR3RDDVStHEU6aEr6gfryedUGG",
  "key28": "5y3S4LAR5XCiTTBVBudDuFgZZPghQnvifLbuezMfxnAQ6tLFttNzaP9HbzfYAiHtu2Vyt7Np5PGML7DGGjgbGFFP",
  "key29": "5iAhm33jyS6xY94i8and95z9M6ZcJR2ww3jCTNGKAh1ecpDt9qQBRkgpL9eHEJ8kb4rTp5cfxiZaWkA5BB1Rd36B",
  "key30": "5AzoD718BzVSMB6CKViUzWi8BCTNJuwBmPfwH6dWEoanPtgaq4D38L4hPYaxSmUh6HPVV1y46JTtkczYrqbxutwu",
  "key31": "7CveAuWDHKf8jFw3RtfnCCnF2Mx6SvUtpyUke4HTaGHgz8PAAibSn8gZcbarEwhkGKysjMAosCyTio9emVjomuC",
  "key32": "3QE7bX6vgk5wRhQz1YZ8oKtzYdXhXKuJTpaHBQ8hayK4Hb27hoN2CwVVGroyT9gAwQi34xddEkJsZKcqfpZU3tSv",
  "key33": "nYZK6Y9EJz7gsQjnc8g1xH2GbUQV7QaDasgoEJB1yoUnYTzrVy8JjGLJ5BshHznPougxK2nz1Wf4FsuU9PnDDvZ",
  "key34": "29WgDnCE6ns7bj9XBTWtNPcEWVNuXBfDojbqpZNRoyXb1gVBxFPJBroSLAsbQfp518PZmG6ULqTpP88oz9aHHjj4",
  "key35": "XbbE3koFxxmbkCEPzTthptJYPaRjSeiW6i8BrXZx5e4ttSSitPPPGTBX1DBQRK1V2kXnBandhBRQiPtNRDUD6jt",
  "key36": "3h4gCw4JgVDNH2kqVyWHR81fsXoz4YKtC4h95eEf12JHs8kJW1eQ3PTumu2HE5EJuUNvWtFHXv17HZSDb5aemLa6",
  "key37": "3Uh7QW6Dm9iXUZ2o2FvzxYSXdvKVi8JKs4cK9om7dph1Z14QJMVhtXdYu4SMEcSm9DTq7exaQ5gFY2dAVMapNfzN",
  "key38": "2tWqw5DM5USu7KKLLs2pu7dBzDjC714p2XU4PdUUAaXaUtifkhJvrnkCgESToRvjRRfNfAbwm3gQuvSHgMzfQfyi",
  "key39": "3tTSe8gHBQ8JGS9W7rr9AUUCpFzJUeedxDcRTkWD2NGhoVuNNq4LH3HrkSzUgT7rCeye1bgVtrAWxFDjqqY6QGq6",
  "key40": "M8BnMpSJ6JPGK2V5Qcrc7ttQTh7KYXvHZT4ersME2WasniNTYjixosCXZfofAqux24ELWqjJeCWwvwVrjRSn2eD",
  "key41": "51kdoUGUPqimqraLb2FHJ7R5hEpK2btGXnKZjCoeFpXhRDNvfbjbv6kR6uB8589Y5QFkZyJoEDqkPVwrxSqL5pgy",
  "key42": "43Au5Y5gwUtyNpLpLi6fSsESxMYMB1zRvFBjU7K8sAEVoHcHFC8M9PpBP8FadpUvVqi1oUSAvM5HBYNvbHfwHqAT",
  "key43": "4pUdJqqMP38Mkv5R2zv2ZdVHf2biy5p85SGgLnY6HK6S39KN1KPdBDW4ih3gVzbyLWKmNM7bqss2UBsVfv3MhJYp",
  "key44": "57mFN4GPiaH5t1t6Vf1U5oW7sueqiDnaEayDmvLEwwr4AakE6UJhvWNmcT6a6uwaQrtEVnjMsVGdcQnpXcHSKBxF",
  "key45": "94tZ3tFdi59r2XgFPkpX8puFgZanwppyQyJM7oUL91Y13XF87UwqTNW9Kk2RwzQmY7GooEwQLQTKjf9fn6Xt76j",
  "key46": "2hsWjnb24UbbqQCLo5tuvSzwxHds5ppTcU6JvX5jDhJsuLSAsGsfLwptacq6hdL77NeH5bXToBtX47qzhpBrAhKd"
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
