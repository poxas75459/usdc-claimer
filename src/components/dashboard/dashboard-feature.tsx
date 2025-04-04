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
    "3jAcoxKVskZoJLFcaY6ezJwfaoo56dUeSUBrcFrHxHpZFh6j567wfFzNE9BsbnkUcWhHPRdMSuQrjnS5TTbgCH5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oqd3QwBpyJyNuJxermoWYeMKz2YNnDJSEJZuRGYXqo7QEdEs3XAKstu2qM2jzfjHYvtQwfgznQJKuXDHPHdc8MN",
  "key1": "3Lvscbu7FBJn3k46DqL3xDpR7a7wFt9hNPEafV9WzjMPoVtjuLUragzSnd2rHmimvN3fUvcFBbqt9KxxMPRVYEAQ",
  "key2": "4MatCwzPjWajpLRzaZeCz1Q3kduj9J9boUyduMVqHusX2N35dT89oRVQ5mzQeHtubAK5GTWq8VJaTaydm79gHght",
  "key3": "dthi5Z9pjW29RSAP2wyceBUq9YUhEg1KWbMmnZPVmVbsfTu85qYdCKY4MEecVZK8ZixTwRYAiWgT3GFMKLn43MP",
  "key4": "J31BoWCX4RKJPtLzSrPF2xxwsHnicoj5PhHYWmE6hMrPRhDdPF3Q8ibmfvWuzPhYMhxFQWcwEkXifsNC1GH7V6n",
  "key5": "5UjcUnuPPu1HFdZwQgG1DbRJpT8VxJXMnfRuqH8QJuTmJUT6H8PjyvC6VZrk3nzcVpdHKzz2Azio9LtSuaSTnf3g",
  "key6": "4bHF2W5cWAJY1zLUMpU2DaRAhRfom9WWpHcDxx87LGDDvK3aCPmRfqN5UXHU7QKw67aBVyK1KZWi8hDngPJJJj8o",
  "key7": "3Cz3enFeMv9AcmXw8rbaerMkgsH75rycKey838aRHmx5Z4d4Ekr1NnWer7141ARsgKGKwfMejJH7sJBCg4tvzhBM",
  "key8": "2etXnk1LaH8ZZpNMWKfs9p6SMN5cxLL99Wvsc8M9Vjufd4HDTyJAg22STPCkqHD8mxJD1A44pgUDH56ipcx16oB6",
  "key9": "5nvFd2RqD73LTBDynsVQex43FwcqfF6YfffBw3niu6P9Uzm2byyBdHN1AocyuBPNPXFjgRq9R5EDLMiiBGGD9wvW",
  "key10": "zQiFg5QzAZdrg6gggVMjuKxXKUcii1YFFyTHbAjbGnawv5qv5qf4VtxXDDoeJinkDDvsuJ5sKURR2B7SjSqZmML",
  "key11": "5uyfsApgpbVgEZFPWpfqNZT3Mn41bKj18i8kUuD8xJRg9kQfwV4STwv2T7BH5gouP6gqsawheMZVG86pLRGmvXzT",
  "key12": "4G5jHsXFVajGsRzMDMGAynDgCQZ2SyaKMAd6aa121JFeVZ7nRxskzBu6FbFt3M3fjoqte9G9myxJVdPmDWF1zrDL",
  "key13": "4CWyGLp6L6pTzFz4EypQWP7eZi13R5YrT6uJccN3Xoa85JJSsNPj2XBB369T6wMvrnyCRyc6mvHkknEDKjwU3SLF",
  "key14": "5xgQuuc38dLntz2zJbWqzsGyikuQ8sXSwc3nyXGCGLprtnkax2TxWY791Uw4bCmncDKjMUPeuv41L5KstP5Kx44m",
  "key15": "4hmjEW7LGKvH9w7F2VdtAD4wCu3WLETKxzFA5isBfXwkcgWYgVR9sLp55Zp3TBh7vg2ofSj2pSUEhCFhQhsAdhUy",
  "key16": "5nYjVafmVqYy5dxFVA7NonT2AQGuwMptyKBEL8NNcAt5vRAN2HLtATQsrekfiSsQ4S1woWTDvZiHTBV3QqVMz1Pb",
  "key17": "hP5xbuk1ngdEwKn7gxzrd7CfbZ2YmR71DHSzgVcoA6srfyKS5ehg9yRDWcA9NMGRTWeCzr55hzz5tzRNZanqx1X",
  "key18": "4XSyBabUf8tB6N9gbQCRLc3xjw5wLZY7VCaLj4qDchbg95QuV8inYhwDRaXr5gCrPEkBvMKdqSCsyrgQ5zELjYCT",
  "key19": "44g69EQiXfoxVESeVEvw43aQRszry2gAWpebmZMiPSVpa5Z1zY3HgB7HdCdoJWZTe232gCdDoecZDaVkBWHtr1s5",
  "key20": "3Ag8CNnaAc3sKj3xAQMoWLsGbsubKSanihnWYbtjBCY2UVvrCY7Ey5QFEoQFU7E8uRxXLkwn3xnGgXqyX9KJa8eD",
  "key21": "m9JAtZSZEyTfYiEYijtDUwg9mKGtgTXdvZbNVuoYCau39NA2dW7VERDNVH6XTZQUY64NZ4Mt4k36qwWh9KiVTcm",
  "key22": "2gyb6tWSUoJ7KU88996LX3R4XLFL5Uqu7evNxPVfaH4vPPRaLH5VPw7N9q29Cfdugjam1bsXUdioAeoD9NUZTm2q",
  "key23": "3it49rcVV6wofYP3KR9RQHXodZdqUJSeUWmFMM8BZuLcsLqLNEUNvbdPguySPvWZTAWzbXrkKrj21gGNKLverQoM",
  "key24": "37YZ4pKjA1gLYXeRqmoYSz33h2QyDcQjJE6fg4QEvEW9Sxtc5xyAqr1rcVms5JyYziXaAA1MxFB5nhEsrAkCx2nh",
  "key25": "5TYpQTMzrEUw8qX4NEevGLaK6AL3FKpn1gQWMEze9fYQYBVB9khiDfrGtpvdNtCnTv4zATTtVa7Gjbtsk7SXJ8Kp",
  "key26": "4mjqH6m6SEzBnzLZk3D3jPtXMSS2CND1hffRiFnBxymae4hSv7zXspb4LDiwBgVHCNYpWmcsYRqH48e8s5RzwEkQ",
  "key27": "9SoS9RGu5G5boU4zTjoaLHN7CSMsWrKWKFvpLGs26jFh9EnNfGNdx5ukn1eL4jHespvdSrUCfJkyGceYKajqXLh",
  "key28": "4c1gUGvJR4ALxHYdSrpTgaoFC1tnUhTzRx99WZPFVewV7P8jj177rXcFgKrm7RdGSSqqsngmbNcCxhCkPxrr6KDU",
  "key29": "ThXe4bFdWKdNKzUFDZ5Lx4ryZ1gp6zyTbQ3yUFFgU5XphX2DB6fBW83cWMh6KRPKxeC2MFKsxAykiSTJGtz93ij",
  "key30": "52NubFaJtTJacVNMac11rdVs4NrG9jP2wqRAnXFSrvGMoDuuZQ1x1bgXPsWnkFHrheN51Rf5bqwL61jsNEGVKeXC",
  "key31": "5bVGKpwgn8q6sGWYPPF7KaShsnnkbTB5Shb39zPbsC6aZXrugoVtTqTDwp8hgVAGGDaAqDHfb5hsWb3GEbrhBhSM",
  "key32": "2uU25ARraup2qwMrkXetrriDb8f9ES3sRV3jU6bjmUcwTRp2CGFBWR4zQcHTbxWx5zgkHoYvQAbVNu8nLSN3hbxq",
  "key33": "ZEmGCRhbyMg44dU1Q9F64RmKFj681BskXNCLkNmeyrkQJnrgbhnhWYuxWm3edDSpNYeQV1mHhDk2mQetMD5rq1K",
  "key34": "5otWm6V3sH95K3vzxdyJKjs1fjsXbC2GHgJduKMgMBfCTS9LZdLaxjCHn7N66DEcgnAnnosFh3jDkwr51THu6TXp",
  "key35": "4hqXbw53SLYcftArXDCZtSE4o695wncDvQQRJKdZazTUccqW3K5DdC4xAjdHCFH6emMVG1Lm8umCkFN1Qs3qyG1K",
  "key36": "rQjuyJX5bSeCHnKZwY2UBeY27Ajrm1i1wcPxRnwtebcfJPZM3n9xZMw4S7KDeAMqk2Gp6MTMnG7r5t3YvX57nfz",
  "key37": "55YRq3WsSrLh25umzdRgVR5KMwynuqyzooEgaZ5L89LT167jF6KGH3wFgPBrVy172zFgAqtjB6CEtbphjoFHCiNH",
  "key38": "g4EiSMH5VraYfZUm8JP1YYcd8Nc2fq2rNz1uUH4HxEBSqmh99CTwKbC3UotEbJRoqp9Xb6R8Mpxvhu5oa2p6iVT",
  "key39": "3EYdJBer5TekBBrHoxeNQRmaGqkeo6th5Zp5fUb5mUovSuzW1fwhK2E8v2zVtE7XBJnqBmEgG2bJCi1CP5zu7SRE",
  "key40": "4tZxaGeuSBuEtPRys4kf32bA3uiXx98azhjeAinnLpwNbrVWtQ69SgPU25TtJbga7HtLpd5dGBzeuETvnPUNFx1H",
  "key41": "3kaHN4HFTT5wKVR2uKyPLau1cQ76z16TBVQtsU6E9UsEBaMZSDsa7es7V9oq8FxsTLv7Jtr3TvcYiEKnoEoYbLEA"
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
