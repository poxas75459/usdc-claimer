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
    "2HNMu4oewj88eem1TLtnM69JXwkZ2q3nwda41BxhHyuDCj8SToYstpPR1WG5n2p6qMxPRZ8SG1TpzwfRWKHnmVcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55c4M6RaC3ZHE9S3VjVkJeF6C1EfLfiuVYnkLrtdsinymbpHxBLbss1wMT478rEK13wGYtp7gQZYnvdaaFHVqvVb",
  "key1": "37mvkrPJxed9xs2wTDfkywpSXYttY2BAxPLRZSppTeUV8b4yMeEXbznYdWrLLeBRZdyt66JPnh8cNgYpXwb8vXSk",
  "key2": "2tniLRDyDdWDEANQCxyuQwD5bFSLnuUjJpMKGMguvFmpvRSZHCqXCp1fnV9KoFJQTkUSG7YDqSjWASjYsafi8DBN",
  "key3": "4NMCaV4vDnw4FUhwNQms6QQfHn63KQ7mF5sXEeExAiLZ19jeT3vTBTDUaCB6F3hoonGZWeBrJ2w6qtjUn6Kc7Gjs",
  "key4": "2eFQgK52feohTTdCxj95Wqv3uHwMJuuojoJfTJa2r1SLgyjZaXnNWvzVLLu6c5N7U6ULadZ9zUgsX7VWyR9qgGgU",
  "key5": "5J3sHMY9f6cPyBeeWvFDBpjRr6fYfKrDLKJzHCY2cVDJnFgpkfVAsqmv4cNQVRhuBtfQiGTznkfX32au4fXzHe9j",
  "key6": "5Jxy7tbNdu9T2nYPhkKMg69CLvSWyt666U3s12AFhMfcU5rG6BvWJtXgjTGpwMsxSRHC1wgLH5mjxV2q431J9Xe3",
  "key7": "2CuBVonq7vFNsEE2Scs3AbAWHkRicvt7iZSNBD7DMEKCmMXaeWRnkSq3wzzXmxeNGu1j7ivpJ2da3gf4z1iCbwTf",
  "key8": "2mNQm7jxjeH5vr1BUhYxWZhuWbD74DkFaVRceHzfCNFKzL664AHuE27dhEBd5smRdcGHtnBgXPNrz9fc4F7ETbXF",
  "key9": "3nvP2TXe3dHDMGgeo14vDLLryAQZ1TykdKFymEYb9rH4AeV1Gr4bt4xi4n6pWWmc22hFgyEE326vwR4NxW18hdjC",
  "key10": "4WuzNzfcTX717QXfS45w8nTDbE5BiR5RV9KFuzJ8GYRVhkt4rZFvNAdHsTFh1mZdEMyexXHJmzSo8wa4ogT94rtL",
  "key11": "3aqfm2m4QbazdNUALRHbv9csce9q56taivECuad2ABPoknmzY244UueuAKXCESJu1DDvpNQsn6aP5kYqG1DHM86u",
  "key12": "2h8SwwZfVr5KnpQ3YXc88xJMdEUxwHdFT9J6eEwEmgupjZahQ62zxVksBieHydAF27sX1aBsehezDfjzSgbGqzEm",
  "key13": "29NEpaWPe8xUYVCCg9WLj5t8Cd2BQBdGpU1KL8a6e9iRgsvJxVjJ3pWquq4yUaRKWCxYdpSCYc3vnZMKjZ9vnuY9",
  "key14": "5N4DRG98tbWskQ85Zgp7jDV7zbH9YrsdxJF3QbwxrdKzmgz2ae4Hab6NW75fdXVYASxNXvoJuL49ygFVxf4r239m",
  "key15": "5eqhXrLKF8XsKRwqDLkSh4YjbWGo6vcnDb7QhjqfGGcKaCfMCM6jzGrDum1u4NUAHHmYBKazT1j47S5g7ov8H7Dm",
  "key16": "UnpQKzNAxmexYaRQx4xvkefqvZGayiSvLRkYhTXWEEnR1dtHZ26x2QfxnqcNB9SZPUHAHVVEHitF5jqn2FpfTHS",
  "key17": "3SehcMQB4QbZrvnoVsEFPYCCA9BvKcbgBE4Bt4i6KmWfpZpPxYAYnzpj7awgZraNTP4X5rGjvdAry4V1tP5dMQAo",
  "key18": "4HNUJttu7s8yGAM7RUFyivo3czkWYg7fxFcos1pEWoyoGS9KMh297cskEEmCGmMiHyTir7rxkXtobR6tgG8RrwHV",
  "key19": "3k1hdXtkn6hmB3cVg3zmQcCwjcudmESJmgac3QKkwoU6MGQ8qfY9JD2pHzhsPeu7UV1mXNBYPqaVeJpZJqwU1hap",
  "key20": "2pAhfFAs8WtdVdsAhj1sPMnDGycm6dw6fnMUN1JDviQyufivTFRMm3aJDDf8tUPEQTsQFohbKcMMu65XTJaeKXop",
  "key21": "265LPw9Kb1vsu4FshREeRn1qbkgfzhhmqB482yszSeBa3mPd9onPC3LBrR67Li3iiHyfH3bbBqxsZ2pYGmmxtNKA",
  "key22": "2XcFHmxuEhGPeYzTJJYweKXXPCK4E7swzg75YeZN6sCBoTzpBrNjr1WNWTE1t977KN5McoA26PZ2gus5WBFGcyoT",
  "key23": "4WPzWcr5VD1ce9LprdK63fLbQxq6raL85btfkkF6cvqFwndWPv9DeTsuk7YBtxr6qfb8N49bdonQgLcgPCcgV8ab",
  "key24": "5byge7iwv5QJSYhQT4iXvYxgqWzp1RYyXJ1CMGiYTYcnDoA3r4oqxy3aTKE4ntcnA8KLkQDFo4KYr4empiW1BYXs",
  "key25": "2coC5rEUQHYSXooXmHXCVv3zcdvozwj8o7v9PjRQJjFvbF4sBbgEquaTf1bCeHrrt4FKDRHecDri2nHPLLCDcYjU",
  "key26": "4sEc8R98MWLQKfCYqPDWn6LuuYJUXo9U4GryY9zFDiU99tvjNkpYdQNkKUq5YaeBZbUsd6UHFkdKnHrHjUGdkMpD",
  "key27": "2XuAue6znEkSvDBC2MnqBKeyikyNkMEr5JfNVQkRoP1reQnmxbnmGRr214CWzuDFu2GpezhGJPwcpS1EkiaPXkoW",
  "key28": "5SQjGnopdjp5fY4Pr4JvVURxp4LUwWnVBTDhTDA4bfXGgzgXrH7wiPe4m2MA7LTqxyC9nMBkYRaGkvvCNRx7aAC1",
  "key29": "KttwKCjjM6UcvnRoVywdgTEiCATzmPVV4xztQCvLTRts8BveTFnaA63vYZM7c24cMdxB5n8e9fWvJNHnE1mSXei",
  "key30": "4BzF6jNeE9Qsqzvp98h8puPf6nrKEwmGEVCguzpZJDhk3a3uQbgNB4cNnRZcoDXjSjmgDJSsv3i9GhYyRmkJud6E",
  "key31": "615qH7NdKuB8ktDWShywL4ZajZ545DyBgvGXNL15QzNgjkm3aE6wii55f6b2GUXPdehqMr2HvgLxxEAJUgUDvvbf",
  "key32": "2sGWinEZ6TyFArFTMEbcwnt4SdTKSfa1iREsT9qcW2V3VYeXHU9tKUt3Qgh9ZuXx7FzKetABMR4wdwstFnpdbnxP",
  "key33": "3iaakceNwQ2E4eWAACK2dRqtmZsrYz5AP1aZDc3e28bZoQJhQjR8GQbveJMrFX3A31ca3b3epo9DzTvRWgbYyJyE",
  "key34": "5A83x6c5FDHtFhvZbmQsfm9hcrPVdpvzmgv1c7q29kDKjJdh6uWVMz6TtkXmpeikUG9koSRMU7hNFT5HcJ4Tfqqx",
  "key35": "3AKM75cv2AYFteKQ7WNPhiJTyhs5YY6WyR5x9vW4sCW1VviMARYLGk4wwSn5uQZau5R1CiQPLCgtYRoX8g4y2jW1",
  "key36": "4fYKHTmF9JQhNZ9amPAsvvcgFYH9PozGAoy3VAbHtBvGwBCXhqEAqeun4GEdcaDHE3uZKHZh1dqiXMbTPb7p4Sv4",
  "key37": "3ThrmkYiqJkD4GErTPzz5KrSb8erStaduiV8nC12upjcEuM8hcEfM2C7QbhmkfQrR9i69xvjox8LVXcFtjHjM7US",
  "key38": "c9mevGqE6BrQGoYg7WWiHbEgyphAoucnEhC2n2iUpi1y9v3vTnJwTN5Npkbd5aQaumKyvFMYLn21xQCTFtF6Pbb",
  "key39": "5bZkDNari2izrLpbQXUznUY8BJhGTCjKur8qYhruer59Eees4jqMnACtAQ5ovaDTqAW95ML8cSpfeS35QkVD2z1j",
  "key40": "2aSSwLCeDhy8PajhWGh5zNVVNj8m5AjbppXPXxY733JdWXPtX2YudFfbK6noC7usHCXyGfPD9626NDwXtXCv8nYV",
  "key41": "5Xr95yaczjx2Ko3VZLNT2GEU9adRDpNSfMwPAnXTYcBCMXfMwgbCmT66vEcT2vjQ5aHSwEYfr1S4KgzRPVq1MmgY",
  "key42": "5yMtA2wACj22vyLo6Y8PBcsi6pZCCsPufqXoxakK3uBQvDhhPUE2mFq1wXPHYy25ropbJzttxzNs2Sj44rw4Z4cK",
  "key43": "5KjdfbMrrSH2VHX4pSiQLknngGdGFv5oT9C7vj1n5nYsVQ84VmtNwS4ztvm6vCStHqzJFv5GxXB278P8yVknRP8x",
  "key44": "5WELpX92pFHnW3e7iLkU2iSQVrXA24j1Xy1csimKW9duYm6iY1RyinM34Tjbs3Ya5BSb83fvBTsvy3t4C3uqsqEU",
  "key45": "4WSsA1Fo5AKi27og1bhz1Qhggb38m1KjFfrAjaoTavFoaryVJfb6xKW4ySRJjHC2qELtbXC1GvPhLc3bUoo1A2Yh",
  "key46": "3VRSrpb9LqDHQdVSpJXiPtp52Th8zkMV6ekb5ZchKn8QCUWT5FnWd6zxJsYygDqdx6BT4f8hrVWukPq5ythrcEgV",
  "key47": "2AYJjDQ7qFPCKC2CigLg2vXize15MiAx5iTeTP9XKt3CCRv3ZCu17o5KgKagRfrKf6ie6b3CiF8na9TUJf6ZqSaP",
  "key48": "63frEddAQwZQaQj6hWQmzAavTJN3Fh7NU2Qe3GimXqYGtb1zkDZGmS5cMmoixDNAKszMpZVPpyBp849dPWMFhT9a",
  "key49": "2LSuALvTQKWMfPoh8W84cE7kfE1wZsNLAtzFpdwQfi8esP2RPwgoq7YtLWds8YH7tFGto7tpU8bSRWeLDdLSpMNL"
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
