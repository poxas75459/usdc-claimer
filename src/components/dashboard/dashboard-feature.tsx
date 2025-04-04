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
    "2v4TC4jsrHf9x9mCnqZ3zpjBaE3DG2TjUa9BfErXERLGqDLhWmV3rnZix52owgNCcroQD54yKjyEbXnGU7hVQkSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ct5WknSr6oMfypr7NYpbKiBxYZFa4jZQeP91TdWYCSaBLgx32uxwaqHuN3VbEMrFd2orH36i5ALKYdjZX9HJxi5",
  "key1": "5aTArfFrPK493pTXhqHW7SB7owzamJRkBq9mSK2mBpzwDDuYM8rLspnCZQuzL14eBoRgNmBhhEW4YRfB74FH1xQY",
  "key2": "Qtnddor5xv7TdzmxPVcnJvuDn6HxmndPxSx1UfmdRhqBrnyp7TMfnwesqempKSiNmPLMcEmnayGZsZ3eADWZpx7",
  "key3": "52y9SYHk9aYZyWkrfYj8WYKXjrbhG7NacsUVq1xewoRqYYZUDDCTvuzUsyYDcsngjgiCybFeDMNpFjRHRwWXnxM2",
  "key4": "5Fx9mDNXNu2V8ZQ992P5QkMe5964JmuuoTriGCpnKRNGC6R3jakJv2XMCQEJwksWi8E844qDBp9yN5WvG4QfGgtG",
  "key5": "4purDJSG2UfAagpXZLwws3oXZPf8MpGqEAUKM57jtg6URezFD38nhEUdAeSToJXYmgaPvECqcHzmYCy6XVhr5Bga",
  "key6": "2ddmvHpzKKirVGWKTh1qV4fdTb6NgENRpAt8NCcDaqCeTiLNdKJ78NYgXdrzCXCxfryEmrEUrxLfV3bsHZpfCXs6",
  "key7": "4X7ZPEK48t6FAE8ZgiP6zcGvEgkio7Pz1ZXq9WrBVVaGVimbJdrJJ4n6VeRzbepPchXyVxatD4nn6XhwmJbGBSsw",
  "key8": "21UdGMkpvUiQry7hjZiKoyRbcTBfJYNusi8L93BbUwVr3wv3GnE4b8myJYpyaDFty9eZNZfhxAmPAz7pj9SZht3E",
  "key9": "2zeKMjTGR9P436nbKQAzHnWyFTKFXVXcDHkPNugfGsXzFz9TgpfccvLcVQsZADsFWve6xek6EYQ1ZHbKKAaYEWPr",
  "key10": "3pWXumBsa5vUUof4G8HJiFABVavhAMbbYXddKtbhgec7pbMqgv5XqAJB8uVuUKbyskLisoDbMutPvWxJcLJLvPC6",
  "key11": "3iKC5YqXRZzxBVFdUPtq2QBfkjTyt2FeJtWHpjPhRfVBBumPq7EiqVUcCKJpeuP9zWKEJ4onTmdXGptZtNgs79Db",
  "key12": "4cESffbF1DBuHVqB1TSkWovDarjPQKcwtoi4htGUfrBhAWqhNwQ6pAQD4BV3JS59gfHWV85zP3pyPNrdmNokb6FP",
  "key13": "4ZwwmXVLkNeDVrkMM7rBv5NuYTAHqmd8GFwvFRQNxcFCTQmE4GzJgCytaLg6S459hiCdoXteMfjaCFZNPm5Dwvaa",
  "key14": "5cXVpqeiRkgChzscQuDxVWLzZ14kY7jWTCtGw6Eo54yPiEoS4n9AzdkmSAszrY88HLqhPZWUHV7675vAYr4WJM6t",
  "key15": "2RSSZryh9ddn9TgtSrV9HZMpi8MJYGBV7YBKssLMNmXHMdevvpe6MuL4eY2fSajSapFwgnWVnjMkuQ5axcv1kC6Z",
  "key16": "5MDd6z88iEq1EmiWnP7ybznmMChnucth6YN74UxF85oobrpFnRwE53Tr7bohCGC6j9YmYGrzMXT8WPfaBzf6heSj",
  "key17": "3StvNUVS346jsFMVpWEqVzjeX4mW3itb2jESopiJ7QyYaU6Trtjuyekxd3rhCZfGuwCAd6uMai4JRRRv36ZtXxEE",
  "key18": "4DSNeDwzYG5WfjaSZXqEFcCbGWGiW6KC6VP4gQhsXzCMmPYcsj9hZXbzabqNymzroGXLrvXjtgazHoWmLgKY1oeW",
  "key19": "2e4uk2fkDXraWU6n82NuDt9wL1W1eDVhymKYqegZL8GmdeECUkNPQPRXntFkZtupm4AzNw85e5ij5Hn3Ur5ihsPU",
  "key20": "5nXQML4L5PjBvpJkGuvL2ofsxiYpDC3ZRGzKH4uPBJxWPmm2M3SMmcPTLywp4JCvSVquu5vLoDAfRQCUxrAgL7HH",
  "key21": "3Bvh2SPHZpRH5497S6URHkKrRiLtocjfKg97RFtAhE7xM7hLfFgAd4be6XANKoydYknkdxuUgWq8LrHk3ngNGfC8",
  "key22": "2zyWHszWFBXtWtsweUeVM1SXqhGyaScDvFVysnLvWJ1HzdvYVUXuQorQkR8D1CJgMrKRwLFis4Uyx2MB85PJGPE1",
  "key23": "2zLasqXSfFFssRHkuF8ZwN1aSpUWv6AfzuaYXxjWgqL5sx3VTziLvSUNooVMqVvjiGW92mWfuo6D9jY2gY64Nouo",
  "key24": "57HHrrPT7AMTDKHuX34AZyDsix3JGCMYsxxsmXpPkUHw7AgqVoiptqBbbq8c1rMyNQQ3orFGn9ckcJYqFMB73TjA",
  "key25": "4ZGBqStjdPwkGfaUz7kkjeGesknqboCnLBLWz7ZJn8hqB9HfdcG6uqUSBWN7ebVeVsP1j27Wg4RYtgs7Qa6X1nik",
  "key26": "3nhAH513x4UvLkYAdwGqwQ9vcnk6Q1FWoCPZcosMjBQ9292ajGSRLbcsVXHvgUZAn5iZqhodWaPRRx6P3XsEDApc",
  "key27": "5zSJPPZrAF9xrU5DbEDDi1dcADZrkrZqsytWKbsTssvV3ECXR1Jd4g63uvkCspDzNq6H88SJhnFtkhGN7taiaLWj",
  "key28": "5LnnbwLFZ17Z1e1qhK5HPv4uoamzDWLPvk86espar21ce8kFtHBG9AqW3rDTYV6yux2Gw3QsF5A6rszYcWLbpMZu",
  "key29": "4172hFwRbncEjUEUUAnc7QRfRQPCcf3W6JZ4rKm4dRdsdQDgr58NHbHtWdsYew4skEBAdnHQu7DWRDp6Uog5CBHK",
  "key30": "5a4qtjGozEToAJd4mGcSs34wz8VhBwbscsYFWPcPp1nW7CUNGRepg3Wx2pKeyoLjMwRyc9jgcDVj8tV5FZxDuCcM",
  "key31": "2v8B2CeENQpnoahPiZC74TM8gu166aa83opNrGGGRTbTtLH7VV4Cphs5i4LzA1syn3fp1JcNzVUwU1dG1kh27Dbb",
  "key32": "34WriT8si4JjRMPbR6812o56bvBusgUUsJzivJ88pgc2ovgx5QjMuU9iM3CiKiKZbUxgNEubtGYr1smraioXWtjh",
  "key33": "2Q8qcUnjKTSx4gzaMckj6Uy4mfnaq1cvvfJD3cCZyC63RxRJ2bJf1gAcQnfZLt122FhpoMY5wcSDEDWi32en1w6s",
  "key34": "4vPy92edqnxFqUmenLytgKguFjykby2QPgQZATZF8my4rovTGTp1MdGbVGy388gsdKqY7jUdiyTxTtCRv37yB128",
  "key35": "3jxLy52hCqhLSJ9hvaJJQYciyGFAEhiaybKJ2DgZTydyGPbmdrumqyhMm5grSCtH2uJeJUq8wAaftn2YcVe5EpqF",
  "key36": "31EbW5rUgwWQV1haqcpyX5ioA352Szr3ESn3zKXYtJPB5UtENeWDRJj9XNpEW9PqVRNuxJXXubHvQn5qtZMMQkjd",
  "key37": "2f2jziMFrd5EWbmRsTR1H5bisquQ3UByfykKhaVAwHogNcJK7Qc87paMUVub8jAqvV8AKyR1sw7jEiZfJKuxVXAh",
  "key38": "3yNRyjWrnKwNkqTcTmcwtWP1Q9yFyw2FmwhyK8LuLyDGjJXUtrSi8cyv5mRSCCAtmKPdPxqY8VRWW6b8C2dT5Njg",
  "key39": "2YgpRFg9qJhSzf621B9A2Rsre5oZGoTtY5T4yYsPQ4fi1Sm5bcps4Yk3QpvjDLLPHbY8TeP8z8JM3nDuev4uAZrU",
  "key40": "2NsJsDUi49tKrVuvn97KuNBucpUcBpa8L7YVukzN6S2tPMyRTwpSr7ejTDUd6zuLfHQLD9bwMSAsHu9JALRDX35w",
  "key41": "3DxhSb86mxvSHFVweGGtLbi15YoBvnCz7uee2Q6JytTH88yXqiCKbyNAkcmzRhgnnyya6xJ29frZ1MgnF5a7YfdA",
  "key42": "CBqPPSD7HTBhy2M6nfYbLe9usuQLa1kfoNUbSsdcsaoXfEVwN8UHLs8pwPypCBaeW6eKTwUNwBVz25x5QYdrtMK",
  "key43": "2qL17VFX8FFnBMEpNyHdxZp3kZG4Da4PqGgNLiQ2CWD2k16HQ2SBhZaVYQc92BWVyrGYLErf4NhB4aGPYgBuBxob"
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
