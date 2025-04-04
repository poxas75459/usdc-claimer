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
    "5KPSEVoVD4NXJFkR8LZn3vvTdU8mez6umCCxJNe8RGX74MfWj5Kd1BHQqv9tZaveb8WYvvxKzD4vSkHVFJwNA95a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rAnyz8JwKMTdAaCFzw8iuHHtkrsconQpEKvi9i7RMkjYYwYdYdZLHqEZmtprntbYCviDGrutMXE2THbBepEhiTQ",
  "key1": "443RdmRymjPL8C5dCqB5YYrH2MeLVDm5YjxaV41k5e2Ti7mWhMoC1xM6aSG8YCyLhrKPAQCUPEohm4QY52eMvy12",
  "key2": "34cRZz8bYetY8YbvLH54Vjpo8wbyttBxmGNyGjrxG77PX8Ey6J8rH6ErqTVBX8ySZsPje8aMZp5h693aMjDnpHmG",
  "key3": "G4hAbFPb7e2DyAn51H9495TkoA5Y4epz4JpxhsFjqCKgwM9ybpeTTDnkaN1mJJ6Wa2WJpBU2HS1UMrKAmJ4iYEa",
  "key4": "4rmBqxSJXJWUqk7HTzM82dKg7KbXgZdqVQ7bWo1amHg4gYAMuHxPHJH3dYpYrU5iKiSxyLySuqpUoUX5Cc3XC1wP",
  "key5": "3sjDHovYQUqATQYbLKK7e76SvnRrZbioPBn76abE6CXubyYUARWvhcN7kaArvDVS1czuVnFYxCEZ3Q9NLffN7rmW",
  "key6": "3Fskw6WDdzUiTpPHiNBtfcqTHZqcBeJMVkaBJ6yrPvp5vwqLDYwaRXc1LAupvjmGQHaJm4MTi4rfLDFC7kibR2Bb",
  "key7": "r17chu5Mg3Qp8EuoLc4TfWSbiWfx8vwV3hLgaMxEw8x4soZ31AvPdZAfU6DzPAJzPSNcUsnGxF7dqXam1nyVi8H",
  "key8": "4wHLQVKrZJvDyvoxutGurg5HR8wBdRBNWt5XGAcumqK8qkg4mU3fnPDzUYjwH2L8rjpVUtaRFTcqkjAsoQbM3xfp",
  "key9": "4oPyGQ9yPuULChJEpZbefLHXaRo6xbtddPsSrWsyjwaHB12MHifRVJWcBzUoLyJRZaWWSvABkN77utd1ppgyK84Q",
  "key10": "3SH8rqLEcsmkTx4U79ZRuTjLg7wFxyVv1USTG2wmirsnE88tax6LSehFQkhZ4KG7Gp5aE3ZCDWWPa5F7BqohpYz6",
  "key11": "2uSa4mQwUpry1UZ5XWe1o8oeCvAV9bymw9tR3rXJznBL8sNjHdwRYY9nPm8oLGkTqQhSwZJNq7ZVWaPbr3G2Jsbn",
  "key12": "Pg34MunP5P878ZTLq86YsUdYwZwZ6BPQsEiwVLX4FFJeFQjmwfU7xjBpoSc2nkc6UPttwnZQrAbhxrbtEMRKD82",
  "key13": "5bLV2f8GszqcRJf9ULfYw8k3ZDEXiakJnYLCeXKmtVnfEGgAfAYst6SA49K5i8D41fDBodLH5S5GoPSMKvH2yguK",
  "key14": "5akvopP1nX3QMPsGGiiQ3GP5jsviGDskdMXAu4j1doEKxAvHJuBHsWndSUH26rKCGzkHmXzmFG3rvYeuwnxp1tY2",
  "key15": "4bN15hW46SU8FGYvRHm7vGbouW9TH2h8fDYaGJJ1pKThRUYx7Z3aY4QYtxnzdfKrkhNryReZkgLZUhMQ6U2WnnMK",
  "key16": "5f1Vuifq94ULm6knAFFPJ5PWt1ZJJf18Hs4F5YgufD7xsvVrYxyySfx1ZyvT4gsobB14SDaaX1UaU2YCxm8Gkjni",
  "key17": "25TNmYfPmSSEzN7vAuHzHyoWTm2aru4nnvKDbSf62e9vTFVHnwa9AyTzbZ9ctTxWJtx7b9YknyTu1QxJchwtkapU",
  "key18": "4NiHwCKiBJYPJ5REN73QAXDLnTeqHueAZDEJBiqCBa7THuLYyZQ7sEk3jDH9VPX4Ux1R49eo7zr61gAnDCBahvxZ",
  "key19": "6an8Vm8hHB585K5hMzSVLg1YDHwAjTkLj6X1H6jPPpPg2tFtwu3nnuRdLs8uVZi21sZwQmQsAU9J2M3FMPZTSqR",
  "key20": "4HXa6wa54VCK2wQNhccBsUcQ7vzpF86EYXEMwXMRvgXCoR7HKQizGD4Au1dada8Zqhwkea4zicNC4EXGYQ6nQ4m5",
  "key21": "4cygbjpYCxBo5BLDak67RobkUg7S8XYT9MWdXZmKbUUz1qDevM4xct1gqWnRaz7QxtWwzYHH6RQvBs4jmmmpDMZC",
  "key22": "4hRx7J3umtutCYz51ewTjv8d7GymLFXSCnWUHZkK1kJsgiNTgYQgo15uohQfg8FPoEKJmQb6qkn6ZF5xVGAey6si",
  "key23": "5BtCvqV3mCh3LdvsHT7SpeqN5c8Wv4zSENhbeM8wyjgJErXDFJS2CvLiErFXVCMKEMc8PYGoZviKdVCdar6K6b9g",
  "key24": "XyvS1UtNfTqYYhcGw4m3Dh62m32vHSW3RS7iCBmGdWq9AU7rnzP9T1iSy3wNNyZkH41CpLPiiJhtYA24UhEbM39",
  "key25": "4yzL4F6XX3CvrStnRywwtAtQeKPArX7s9Zct4zGtokpdMkERoYdKaZpxhjkfrXHgs4Vxc1hmJnUAypDWAGyqoD1C",
  "key26": "497XNbvHCmRcSxHgs6Xp8xFmi74wZpeUf1PMrpvHmNXrJkH6ufs3GyM4NHkfNvnhw9U2jXEhfr5oSRpmCdRowJcB",
  "key27": "3Ld8U4XffEbK7rWy5bQuRM8k3zGehGdFsChjsqRHgSAZL94FC1YMYii4WM5hR7cnQm2NWeD1xFpbYsMhSG6FsHK7",
  "key28": "4rfZkJFGY4K8gJ43WPh4BqbWxEw9gTbSFY8kivHiQHALxcCJrc62Uw875LQoYJUYiEWBLkJHEeNcwZMMf1MVYTDX",
  "key29": "2mWNYS4DRBU9Jiv7qpPmS7vogVtMK53nykStcuFY7Boj1m8qshYAhbPeanemviKG64GSVUMj1GfHkoTg7CEs3RYm",
  "key30": "Dtjx2PrfJGMhFgTi3WuazxbUCJfvj23aniVLtAXJGYvyzXfobq9xKXWVCS6vBpxexekAsLE4i7mG4bUXDrdwcDt",
  "key31": "p6HGcWLdLWAFAEBv9XAyLBwxZnKrKEo8kfv5pSBdkVn7SWgCnaSaVzzpvJjxpASggL373snzJrRtW86u2yYKz7p",
  "key32": "41sV415YB33qojMRRxLKcyn1UssBprAsjNbB2mpP9WfncdJP3VxzGD9XXLwggZ5uuUJKBirnwewM6ZpoVAjobb6n",
  "key33": "3LCxy5VPXtxgh9z72Ac3sQwz1z8Cgi7Y5r837dUqUhpDWfYXzmYEAXTBCQGXt5EpFec1j7BfBqRJ37judqGJnkNX",
  "key34": "tacQYvugGi7w5sZe6nbGSw6mM87C6sP3TUbMawo9dASPBVEyPKM5Szt1vy4J1ahfDBBiCibmi2VuowL3SyH6BRc",
  "key35": "3wT6bWFYLHLGBgfSdaZuSj9MhwEevxWNXRh7BCCcwGF4urXgpsYjhz2a1EgeUytEM9ejYaqbFMwcrS4uwPUEqPLW",
  "key36": "5JbeTKqANdcUYNr2P1qUVUenEhfwn2n7RRGdBppNfoZTry2iH3AUusp2baZhLre7r4pAo2ugckcN9BySq6ax1tTL",
  "key37": "2qm57ZxQLaphXV9Un3acaFB1E8JJUfVYTr8jq5QL24a2QzrtLe7tscdgAcunCNUQAUWgGntyLPD4XjaxZEHGPuyh",
  "key38": "4B1rg7tzKz2yRcg8VYmzXCrquR9QQnqVMn5JV2wL94xcYCQbnUq94vBQR1niiSgDrHkYU9Cy2TqnSe3ehwNXmXu4",
  "key39": "58n2raqN8u7hW94yxxwxTRubZhiHsAsNYCcbbGrPaUKk9TyywzPQ4H1HXNH3gRGMSnvsTuUurWQXBDnF4UPHdM17",
  "key40": "3YSHQQePxQmsnpEg48ctkahBrfveLEZeYLLRVtY6v5EYZrYwLZsmW56Kvce3r1qiCEBJANRdygayahHT6mdmSx9K",
  "key41": "43PjbRsHmrzNVUKyyK4ZabMfNyB8kcXrpDHYMfSBAY6fVQAw38LEdWQoJK22vkYKSeQPr4YYaKTQz8Z7xx9KEZ6n",
  "key42": "rVFzwnkmRhh8e4GDwV8C61c3UPhSn6Jyeai3N8yfgFZ9n991CcTxEimr1ztSHsHzNoca4bHtREpLYvd2PqJWFTK",
  "key43": "5X6g9x6iRUGYJzM1XQs4rLrCYPjF3KFewHDk2kjzKTNtA533drTkirD5m1qmREZz2fVN8sM5SsFmew8f3nH26VrJ",
  "key44": "37L9tEYJ56yoAsGG8dGrNi3cY1yEnCZonfUqKigbY8MsJxcw8ET1oJzeSXgysCM5Sg8J99nUQjN94FztgNiyhrm4",
  "key45": "n5mbjYmYhy87ctN4KSN5Yb3QRGDX8GdzXSdoqsadhuqA6Boj8LswjXfs14CcdLJToP36XxpH6oLs6chMsLiV7KC"
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
