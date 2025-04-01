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
    "5HQ1zQxcKP6Jjif8rjqEVXuqLpTsjDtrFeFnxmTJsyHQbJq7aL4yVcEu3oar8kB4mUUvRDW6tWAZdjToLnQhDUMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kyc12sPRRKX5yJM3VEc4aThmqrrcDzVVirM2pXTkwZf6pPLmj2VQksSK8FGpR8XEr28BAUXHaxEvAsG8ZWktWks",
  "key1": "3NsYau8fi2bB1xk6fKuUAD2EBXRJFZ9Egm6EM6Mgq2UJvjX9LVmzNoEBaXofxg7xkqwiAhnoEbP2Rzgg3qDzBaK4",
  "key2": "4BrbsABoWSSPaXXmdKy1YVt74z9FS2f93jgMPE3YcvAFeP6jWFW6BooSwdjNkxso6qqfcsziinzLe5RukfQuo1Cj",
  "key3": "3bfMsiN4baHZa9egZNyhWNe1mz6PM8HUxNifYtZnpjUhSsEbziLQpzjM7wMSRnJmBRoUuHbXYbGaih39kwjUMDdG",
  "key4": "5fVaj3yK65BzrXSvcvgL6TCcXYXckmS8xeZp5ZWCzpAtio3VkemiHEiTVh4domJdFE4526YDr2NKBycz6bigT77A",
  "key5": "5eHCjXXHKyHNZkA449HNpDQKuiYTwmDDcFSD9ppat76byFWB7yFh7PgfycvwEW1jT3dbZEe3YrLPeRMgqjeR6VvC",
  "key6": "3isaFBWRzMaMoiEtkoH4rVkHzcnKNATHKZAvAZWrXgRRjjAVAZ7fM81NEgRpvnCeZ68JDE2mzVxY8ZgnZLudrhg1",
  "key7": "2upKQQX4LiKFpRuVHQcYbXdEPz6uxJmc44ckN8xTb8R9YNRDvkuRhmMqdfP8KghofZ9zadG53gGQSXHYu6xdLn2U",
  "key8": "38VX9zfwGg859s6s7ffpW4Pagw1rGHEfJY6xcYQRrQF7r7nSPwEAFTPriN1DbzGFkLKQARXx7oZF3ijRXnzB7ixY",
  "key9": "bbiKeEhZ5WBNgWeLYrob9nv7vxASGYkfQB28Rn9izgZQC3vcas6fn8YiZiwB5Mbv8wjLQa1aFkqF6Lbhr43YRvD",
  "key10": "5PSpYxwbScwrp8v8miTgwM8FMnnQWAHWQ62r1AdFB9kuuFMviLB4fZzeCiTeeZAkrqVHCDZfFRw2txHNrComGdL3",
  "key11": "3sTNzf78hNZBzztUKKgT3kTy6ACq3TZj3a2dDzC6VnoVSj4iYGeg5wbMKf1bAsywbtJFsFhKLbZ94DLrMDs3uggT",
  "key12": "3dLBu4aaJxUhKcQQagDegXiAev9Zh1ZgdCkgvbSJfmUKEczcDGL9zBqZvLbrrzXz5fqnsMarYM7QRNgjzrsxrn4c",
  "key13": "3wf5gPX6H7e7EpWrUjFNLkv7VvCgNv7FemXKmvwLDL5CoCCXh9WV1yjodRb71j2tAvATPxRmZKaCMEhbkSRSDfWN",
  "key14": "3uHBs4QwZFp1JzivYCFvyxbitiS4VUPQLqVhzpAPv5mmAQoyCxJ4kgC5G5bNjqERvELhFdC28X3s1ygKSGuK7Fcz",
  "key15": "YshaQs1A6gMwDJsJT31ry2HM33sReXSGJFMqTkaEzL4Ko8iLxeYYzEkBgHZoSYH4CEKGPiQFWGr8TkKaTy5RfEn",
  "key16": "2hvtvCBXYkrcJcwgxkiro8es1uPrdqktjnGUVEToepzapRY964eCwjvctLGiF3ZpED763gjckjmgysitC2zLoMKG",
  "key17": "5jjy8zMaL9bD6yjZxATadgFSydc6PotQrMSCbbCmwq6CzHYSiQrZjSAa78GvJhPVdvSnrMqz2iAEL62qZSVMCdVv",
  "key18": "2gLnKPQGGxvo6uL3oRN3GwM2BGNintMXWx9NGhSMoDVtmRwGeQjv4idp2oG4ZyuSaMaVfzAbQrd13Kb63QWDAQfy",
  "key19": "3HAjANgx7E7odvUrFgKkn9PDWLHrcmAFvsLQPHJnAqUk5kCi4Lown2XmPbFzbuGBiBVjEEAvoDFmP1CrfhzyWksQ",
  "key20": "3Z3SoirCdn4hDs6QZbwhLKwU9pnzsLwV9rWUFWeBa43Kic8wWmvHATeyZNMGa1RvQxGeYtJ6ABCrZCekQW4FUQ7Y",
  "key21": "3vPyCXr6Ryt2DwtMxJnbpeArDz3sGuej7vknMRWrL956nAfWoU1t3d3U1usfMS8mgZG9EmTo4v5avaJb6BA29eqP",
  "key22": "62usyegrxCaRo2ui4r23yPTizXmqe4gT1mvNCgv962PGxzDHVkph6QTCiM4uB6Cfku1RTQSyXZhshBVR34CWgkwX",
  "key23": "3cu22mMyRgkC56HTjg32oe6EeKcLGkH7KnMdnMST3ds5ze127q1GYjZ1RELr25tSVYGGSBZyCXpZ6g73tjuEjPkz",
  "key24": "5EnUhEgGGkW2jGmSQ4L5hdd855n3HXMiLN1SURCZ6ovdf6xzEbXc4xwX7ygyPRBfzkk9EQWCS5ToZuD6B1GySLj8",
  "key25": "ZnpVLa9iBj9ExCawBDdkdYekcM4v62Vh4jmtPNMz4dAnWDFGDoJAzfa2akPsedDvjrMnHkUXhDCygtVQW2KhxPE",
  "key26": "235CyNtMkULmeV2MGv2zFoAx3YxreeV8dr9TV5aGkqnQknfoFhE1TihkgoaQUdnyNEFzduqee2Q1qPr4aH3vUUce",
  "key27": "3mQCPxtUL1LS2qoUVpxWpn6eGJUknNxNFfwYBnYwTJAwEh1u3DgTti4PJvHkMXyUe952C2jqgfheENZtvBA9pLiB",
  "key28": "3fKiVebPZWfbVxM4EoPmkEKxxg86sppDaRF45HeSBTgQkvnb277bT2CF6TQ7mMmm32j4hDwFpv4TB6VHsAnoMWCW",
  "key29": "3ZFkuSJ5N3yKcrDXqYu3LPsr8SsokZ3DgHHPx45jbAoihV5ergpMGosN2p9xfEFUKwmoNZ6icpHpJhxm1iZkQgy5",
  "key30": "3YNokQex5stqqx4JMMitJk93trUNtFbiHcExWQfEKfGrTXdzw4Dq6eygRSqaUQyEqZcJTt5ZBTm7vPf4aW8cyDSg",
  "key31": "QMEqjotw1ZhCx9PjGtzxYG2Np6A3njM4uBk2uS9NzW2AwejW7R4atbQv4rYTtyKVBSyMiYBAhvdww6m2ckku9xy",
  "key32": "2XoYXFNhdV6BncGgjFKaPtwFziJwvCMDPbfV5XjLWi8JWvrfYzVwTAfpjmay4wf8H1tqPtJvPzsGVnk8MSQo6o1P",
  "key33": "67KCdqxkCRJPxmRyMayMiWgnZExqBjK2o1aFpBkm8ZQthxBi1atKutfLQcxgYjg2jjkdhdjnqNcAKZFMaE3YiMfi",
  "key34": "4EJi6ys6vSC1nKQV7wL2aRM7gAy2CxK853rsydBTD61abT5H7qrVtqLEqoCFnJLAkczUCuAkphDcwBsZmFpy6kgD",
  "key35": "2tPatAARcaLhco2D2K5TinehDNidajZAsy8R4bqWAHYeqXuRAXEA5uhibrCowdYdq8ioB3vdBc2hA3EqHcBUaLz5",
  "key36": "ddo9oCzNBYZVryh5rrSva66AmeQUn7rZ99tM22naFpGn3Pc9f7BwbDDHiQ6i7tQ89UAPZoP2YJBd2Bom5zANzFo",
  "key37": "5hhtayDJP77SAjxrMa1mfMXarXb6MXG22N46ozCFoWafqSpKHAPDY6aGD8Pma8bzXDKf2A1SXBXYGx5vpVVPGxxi",
  "key38": "4X7Um2qurNTZXLesjtnMmEZ1bsTixLc9jaPbs6gmPv9A1EiKCk4qMerXsuKHqirpvoPRnqcXDzm5gtVQKX2xq9xc",
  "key39": "4P54Ji36RLXb8ccCiye48URyY9rZKRFWRcMfHb8XWNNPaJ19QMeYUQHZF7xbyzwrbVF3FzhiEJqcDtCJMoRXT8Z1",
  "key40": "2PKjAh1ioShEWzMja3NjagQMY2xrQFwxm4UaaevQTmzvVQmKmEeLtXDH7zeh7MT2KWVKiTYJsGuy18hhcpnLwSws",
  "key41": "4hhon7AGgjPQhx2kU9EkSdrDYMP16ZW5z6WsA5fNzkDNWsaeQhQa8xJkepg4VyNSqVDyrGqsg8ABKucgdfyG8So8"
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
