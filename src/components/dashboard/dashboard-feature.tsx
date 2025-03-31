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
    "tQ9DpmqxrSVvyy3MszPtUJ9f4WU37SCL1NR3gEt41bMSXvghNQKMnBCjLF7iPWeCY4Uwu7ktcmwrPo7gbSVaHYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CyrgR9jDSDLP3foxQjKsSJuZfyhf6Ph2Vzsyd6HoRBVe7WcPCPguxGyLY2FXVuD6Z56pcvoyyu4T4Mg1DmPQu4m",
  "key1": "oXnRN44DxaVu8h1BrYVtoWQG7gYcD6rn2DiVCD6pf4f3vsvJaTCuzRJKNoKQ2V5aonbndAGA9EiH4Abmft85Dt1",
  "key2": "qMsbMmjF7XPZHXtGf2Wf6nc8tCoKE7HuqRhBQA7MraBma3gwXRnffz99YTvE59nN5CPLzuvUndgfrHDGtdwoN54",
  "key3": "3C8NYnZ4HXVyvYYzuQVzePGNVES1vWcwyhAr5DXofRb5tu4kEENmr9aqBq4GHgkEvVDdrvxeVSigtTKNYWKhLRi1",
  "key4": "4Mze7fD235yHoXMK7eysvxKc4ib9LzWRJ8dTxJ5inectQbB9rjNH9MbNZX9VfanbZYFUoGEzeLfhazdE7SvrwH1d",
  "key5": "JXenjQEs9tSYHyDmYUFYsYfBcM5BLoZVKnsYonPnJAeijDjqqVDcVSUxH1sxoBhpSVQGMp7TUUNKe5Ev8TC9fUL",
  "key6": "31mPpAh2UNfpB18S1QhoCWEkJftag8nUTvHHVUvivsKp3ASbsfhQuSi1i7w4AuWwvLpks8zpYdwTbwb6F6ddErg8",
  "key7": "3MtKjBMcYEa142QX6p85KLGu8PiTUrM2GQPLmpHh5wMyo2Dg3FnkZqpUYrCL7Lkodxc93oyibjLmzodzCCiqdCu9",
  "key8": "3AeKtoFB5MYgxPqMA8H2viovoJNckkKML2xFsQBEH74PkXzS3d6adUyx1qecZK8934MNTNSVvripHaju47QUJHgZ",
  "key9": "2t1UVyS3Srs3udiQW5dqTA3j4MD6qr7nbStjBdcYkuNwEoUbRSNztAKTdTcf7tWTsGq4zGE3d2qLicJYiF7PDicB",
  "key10": "5G7fGjDP6DQZBWsWqssGrttVFDpydFp1TXBAvmJycFMSzeUpfdibCZuxbZmFHkwJeSnAW8mm5LvKKsJEkYLyeRgQ",
  "key11": "2EMUCjB7q8ebgf9f2pmLXyTMGyPdGTtCz3XKRMozozJc1MYGNTfM1ng4iTjBVw38jRn4U3fE6k2rgihWwYDPnQW9",
  "key12": "2NinBbHytiKd46J2H8szM3HBJvCcREgr1fPByZRipCxbYN1TBxh3ZZBZwWXz9qH5UP81wuqnSh7NpdyGXZjLm4NR",
  "key13": "644dXQBHsnkoSUx5cxy55voywjCWN5433eKuvMrZCPb2koXmoTh71WUcZ3MVjxXi9wviFFjcz259gcDS26EPT4mA",
  "key14": "eCXx9G4XbZGHC7AMWzzcg2Yj8i9JwKScmsa5FsKvfyM5h3uSLuhFTsX6jdLaEsnysLhKXsFRuwCJtisQ9zyhJvR",
  "key15": "4xfjjS62ZqJAcDtQsNQCJAk8D2Ukhk1mEKZT3mmVdThihCDjAfeqwrqjQBTueAFjMKQkhHnoefWkjYxG8k1CBQz1",
  "key16": "27kgb4EUoifpKTAyDFjvYT5SemxUjXC9s45atrneL6PtzZQ2m5JobxJNV9PmdtUWcjzmjE3TSNhgsCGKAEB7sRyq",
  "key17": "2ghcH3X9YhrCVkNpVzoEYwcptVg66Q6a7Ecbg3SPwiaVrbsvdmLFt9yPA9WZ5rxAdn1yecMVPhJ4kMQb3QTkKhCx",
  "key18": "5AfNutGjHfNkFtw9rC1mmEBqXXkt8nY8f8nw92oFdwR8K1k5cDANg3mzMRqpsYGQCXG3vCorbVijePw1PQJ9g9o2",
  "key19": "4qz5yj6n9RQA4P5nhEPM6Dndx3RJfrio5pEYQJ75wN67gZwTqvqAFrwioXmPrRfmaBeXdV28DN8RDNEeCJwrFvgk",
  "key20": "4oUAfk19aQoZRsUiQLw8foBMh7K85ChBT7YBug4JbW4EHiMwzDP1ZiZ9Kqp6RqnYYLP3fKtUNfPJ47qhRavJKWE8",
  "key21": "284C8Fqh2DtNqNLjfTLr8F1nyPYL9PsncDzVNP8b8fpFdYgaykjewA3ALfiPT2JStDD3mNCNnfGEPZTpxk57PqW3",
  "key22": "2twsqsY6m2bznSUT7rHxefC9HgXRqVqB3G769YQvoXyehx1KFnVP8HfTb8yY6SbUWGGGYJY4Y1StY3i4ySEZpYWF",
  "key23": "21FWJ79fxmkuzbgzk3F2176o2cs7DnKUcMa8A7v8rYv1m8yDCQYqEWDVgsNZKbUezasbh973TrkXLUJo7aNi7Wcn",
  "key24": "3GHX9xK6ZmzVztLmL9vZk9mtLML5hBiD8ZymKgbdctn4NmeCQX2n74Q4hEFfGqGKQMP6Uf6XBiZZosdcyHikujgt",
  "key25": "5aS1VRUTeXpRQgqwre5irFNwC7GwpgBrsuLVVfboKZ1jegy8yb5gQieFk4GEJm8wuqPK9B1ndydH3RLHttJTZcPn",
  "key26": "gwC2VcHXn7gZZwZDvyGmqEdJEBxVVATnLw5q9cLLjzt1ry9gCm23m5gzcnjvDBbPbkFLDTQ6j5qGELnSRJnU5AD",
  "key27": "3D2chifRJeYhGnKkbLA9depQEpQV5quQ7QtrinuNm87CqksTBrbkQuNaXggQRzoR4RdgGk4aUGDaCuBjdVym8QXe",
  "key28": "4kXHbuQK7AtHsVx8pCqWthdKt2twXnMxvPppbhxsuiGXv5Mtfp4Y6jPHuLeUijtuREZXaLLn1TBhMJYiYm1ecyzx",
  "key29": "5KyHaXfWD3WkEravi6Z5ASEp1ZZPbU5h9DkKTLRpzxrqmVZ4mYBGose6SLEr4QC4u7eDq9tRLJ5mUwmpEYYTN7Ro",
  "key30": "4FR9zSdbumfNPCGbDtdkJdN7zPk98ssUNmZLSwZvpP6fESMVYZ2ZzCZW3FpWpaRsUMR3vFDwh4mwga5grQZwUmx6",
  "key31": "4QaqLztxzXXBuaMsjHEFWiDLctbNnBG5GqthP9VApd52jB7E3skKVwyR9VeeqCpiBepXEvjVQVCvAc1uJHsghiZG",
  "key32": "2bDwRcpmNuvrGAtoNRtT4Ckth1JBZ3WzTwSR75rUouN1m2mE761UBSocJbztW8f3rHqgBwyDN3oR9o5xbdg2aPfN",
  "key33": "4xi9dbm7RZybR2egmXrowFfzGnwotvqJNT1XFtGjng7JPH52XKpG4v9DU4ZRYA4SiNcnqBtnJYGoD5STDK9ayECh",
  "key34": "uFz7kDTyyELquWVCpb3Er2NGeChWnB3YupVQuqGba2fipxBTcfDarV9jsj68EGtAR4uC8qYfZEQRyCGSL6k1bEy",
  "key35": "3b2Do15rFxYbqnESEGis7SxWcQBsqfZmKZtEoJvpy7VYvjebe9AvpciFNQFrAnoFBWAvVGkcPRH73xpuPcXpbeos",
  "key36": "3LBCJ5k84zKNdNKLXUskr7NAfr2ULv1KaGrLdBq85pCHrz73YYCkwEJNit1Mw12xy98Kaq2hSogsJTsrrPTofVq8",
  "key37": "g95krxxMHcU6tNppaDhaZkJPtpdQQwjTuDSgFpRGeu5m192KCMJJA2xCfNBj3undKPmtoT5so9TkETz5VRdSBnA",
  "key38": "5i3Vkv43adUzcuWdza2WRATrGkzTahoC8pdc5qP8Vm5hg9VAN6DWnV2yym7JHu71b37qtTXpTvwoZtrgs9hyEGbP",
  "key39": "5iNJRWK3APAPns3pauM2TCUAgDBjiEE9KAmjkNqNiX1kZvkiyRFDeB1mxGwGjXcEeFBggGC7hx7pAwpJeRXZwgu5",
  "key40": "5PuPmUaUG76Z9JqUE17Sekmzc72y65kfpueTjWeJxVFk8aAYtTqRTVhXgcvvG9GbvWAstrLNK4N4ddisVqwrAgvE",
  "key41": "2rvGz2Hsu79YgUp3egknsHJmHXqxhqHmXRWMP35ok2Vu62FYq4QSvPXLWWGVw5p4GJuzvKxtmsBxJrYf5BLhfJC8",
  "key42": "S6yrCuUiH4sCByaF21ze8AgbY3MhhxhhFPZ33pPJKczeFQpwAqPb5iz48CX45grfYVPEDDvGht8GKm3Rx3f3W3r",
  "key43": "3ne97yTZKLfeiTrB7VoZcay8wsvwg8LnmMBKx4JuyCjFkiW3dye557L6ko13W7XGEpBmHF2JPT1hxWExCcEBNvs",
  "key44": "5Wwj4MX3LxDd2DQN39k1LmqZEuQeWg6ZZPcrZgEujpsNxZGMhsGEN4g2qEptBsxRpRzkkBDo4ANGBXrXacL5r27g"
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
