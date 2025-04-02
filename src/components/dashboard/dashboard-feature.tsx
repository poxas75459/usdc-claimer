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
    "3NropsV7PrKaFbcjPSGnvXY31R5hfs4BVpXRUpkEGBPaThGdfNMco9VXGUjkePaqjVbXWhit7ZhBjeacJd2FD6JE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iUKGd3y3t2pJKAXcVFqwndBB6HHw2a77rXjjF5QoS2MAN4MWkmHpbwq34Rkj2RNf1DkK4xJaza2JP8yoeVShrpb",
  "key1": "4dgfS3zGTsCD5sTPmXh4n4QExCx9XGLGB1oCxeQWXgJTddvSgDgymVvRhEP1W9GhQShsGAiJMoofwobNi7WeuqqG",
  "key2": "29VpNFQFbR5b7Ugvt8zapMPmnwMQLwG5sZwmYk4zi8MHwM7WjvdZmHaHE28GN3qdjBybknWwC3JPoaPKeU1WWnhm",
  "key3": "4c9xLm4RRHcLGaoN83qraSC54utHBwNYWxCeBNwyw25HeFtVSnGFcF2omc9chGk5z6E2Yt8NsFXbFyngEPyGdXx2",
  "key4": "214PR6h2eGwPHoP4udnTehW88PRrR2J66VfbV4hu78ZPx5LrxjJw53R5TGj8ng5dyeM9s49nU4C6DxbhnEgbYusp",
  "key5": "4eDnTNSvuPR3kGQqatv35WLPYLy8yq6mPqtnRGytu1PrYNbCfnsP2GhyVPGUbdsoFAWiMJ93LcBZ3g5n5NaLcqrv",
  "key6": "64GR9prVL49LJ6LVa9owK2PTyxoRKFYYgvV7YiHRFzMqRALaiw8gaavbz6X3CpEESjXiPJZmwY1SdfsAv5PaqvA5",
  "key7": "4EpZyDkxeitp8A6qwaX8rhm7uTwpSnyQHeCGw6McCucFZV7SsaZyNgmVECVL3rUg5vBaFix1zWJaqtr1sr1Gy61m",
  "key8": "3T5zPx4BeFPUGDGRGyGgNzDy7ErTrVppYKLmsHVMaokLS6aXAzCkwnaqFxNbzuo36DpnU5W47WqQiCps8vnW7Dkh",
  "key9": "3nTF2g4CMK8CiVegLxLZHhDm3ysphi16ymQMTvDZFVqrA284KSQvNEXpksv7WdhS5YJkXTrQTQuGbURsEXXG8mrA",
  "key10": "4ss3Xzbs2goKmahD5WcPwU9yr8tVt7LnaWCr7hsd4qUPEkZitKL7dsykbAsy8PVpvW9sepUBZQKQiaexmd3tbzxM",
  "key11": "2U579qBz1UUDJmcKMGGwFg73BqHqwF5B3SCNSp1r9j9bYwQ6zFmHMQEah9dzofVoje5JcpgUiKHrtvjcpfeLRqxh",
  "key12": "5Syy16Ef1Yu1xCCSsc8ykhMtH99MM3ePkApubDKds5gzEaqPAv9CfaepsLPsntEetC3GmpjVNCobbFyjNSrMQWRw",
  "key13": "4CtjstgfZAv366RN1GLudZ3zuVBbEjyAh126MLpb1eL9SVyRJ9aLFBEQ4uqcicUJLrji6UVw1c16LrbFXfBw4GB4",
  "key14": "5uR9BY11pey1TUU3eXkmbRe23keMnTMkeyuRBU2fVLnHgVPVQaD9dQ6WCEtkqHiU6EUbrVzkJq5Yc4eWwxboQNu2",
  "key15": "5K81vek49naZm2Jb7Ft1EgKJuWmnBzXALDV3ck6tTVVBUet3jnV5KRdgSQNKkvrqv4FhrADoyJwvTU3tDhQToWB5",
  "key16": "4dt2YqmZQC5QX64A6zxGggcqAB6WsjxLs6sRWu3BXCyTB5d8zQ2XsiTvyRSJ7RJuhYV4YVhRsHuAPhbJoGPKZo9s",
  "key17": "41g18XdNVpeb52drhTMHHoNmgoFTNVvFiUWYhvnWKz3niwwhV1hsrbrk9Fsqw1Yg4D76V6dpj2m7BF7EmJV2UtPb",
  "key18": "cz4nDww6r5peZUTsGhh3bbugBSKM7vstEzm1voQeq9kQGGeF4E5aUZ63Lgg8prquwTcxpnCsyjiEeNJSpFUaWBP",
  "key19": "2okcJ5w9DWkqayyAfQhpTCFkMGABkJ41rwjxKkkRMUFc2qBXn3tkVgL96si6HXHsmDQM2yHTRseTQXjvqR4d2EFb",
  "key20": "4SMEH9LUxxMBHJhaHjhPfwcZeU4uEiwCMa3gpHvZYdjz2JA6vS2Aq2MUjLvpC1QysMimDvWBrQxCWbe6b8pXQBk7",
  "key21": "zA8yf2tcCQt5kTLh7fKEkuD8MZ4u766VH52hiUeTyzDfu5oAhxDoPjwrVYhVExykEbbCnRhaUgLq4sTicHSUjUE",
  "key22": "3Yk82LFZUxceXcSxQvQm5B1yRNkC9PbqE6r9Qte6oFDLLxD3Agk87bZWzXf58TFVPf6mzTnoVxq9jHgFCTzQ1fru",
  "key23": "5PieC9t4EJBTKA2DAiV4nj6rmbW3VozZRqJZXm5xSVihBSBtgY9DJJXyHkB7Cjbnpcn3UnxTCxtDEaByqMStZWe6",
  "key24": "oqmq1zymTzepfGNCCLJjdU1RhNzQcUPyM9hFMjhKBVuTRytPHZRJn33aJae51RZfdKWE1MxAdpdwxtJPvACraM5",
  "key25": "2BF7WXMNwYpxh1yhVSRjJLe7Dmi5oRW6oECfAnoAvYATb5MX7JeQYDP1qxVcTddpmwQpcqfFs72v16zvJ3psS9K4",
  "key26": "657mwBvmGgKD9iJSvrJHPVVxn1xn4gXuR9akGay1bMyuJnWhXK8Tew9c39CdyS9DJqsG1VnHFzE5VrXaF8DDy8NT",
  "key27": "4NTKY8cpgKiqpXBCTah4qa4BhLiwWgWy411PYfMTi8WSsQQ23evKJKqGyREuXCd69pxBrdgF7E8iV3e2VPagyqpx",
  "key28": "5NfHnTYPjyTUcWomgaSCLWwE3HgUeWkJnLKDnYXWYP17jPrjKEtRjmyybDmFnYdeBqfncFfJGWEgnxdu44Hfd6Ei",
  "key29": "VEbwtJVGCsK98t3ea7ECSZs8KD8hFpkfaxFF21CVLdm1Sc779m5FXgadz5ae7PvTdGGuw2k2YUF8kciru3ShGcj",
  "key30": "ee8pA1FtwsiKPzqSNyd8KXRmvNrJDGkWjEqTu26oRxJymRxLeFDaZZTwkvfr6X4KTY7tTJrtu1YqNWL3thnt64P",
  "key31": "4Qn8dPQvpUUNfdy3jCF345xCrrXKnqZ2BQ6SD9XYMHZHKq1rq6en7nffQfh9VGHPDeJ2w9SEDLouTjLiELSe8grz",
  "key32": "5y6wws77CT1H9WhcHrZnRYAsHLyL9NWDoeYa5rZ8cpjkE5TdLsU7KYAiTQRkaoTaMrrwA26s8Fo26KGg4UBULwxf",
  "key33": "oRhLLwUMnHojoizA85VSnWK5Na6WCyVT8yxGxkDpwoSBVcBTZSs7UJAULgh8utUWxwrGk1H1a7bciv5Djs6ixb1",
  "key34": "4BK3xZPXeTG6FKsZTTXDTwC87ehjChzHQs99HvNnGd2vb3YQ825tuLwT4aS6pTtBibvwr4uGa6K4YXwMsCgupo79",
  "key35": "4rFkpJ8mqNFFoHx6WJz8W4igPhdfic2aqzebr2UXXT98kVQGswY8gqghBp3sznTh8Mqc2PBnJnxUzFfdXBocQKwK",
  "key36": "5VN5da2X3rYoc1JugB7d3kYk5UrmN6nuRJWj7w1ARAbAjv26txcPWk3PgS1zX6xjAiTMAip8m6c4GuZRGi1AuNNX",
  "key37": "4iNGGBxUv1EU32GkhhWdS5LDfQLgdLKPVWZweDwjcsQK2X7dNfZs7pegTkJHnGhQuQ1WimroH8dFpJNfBV4YC4yJ",
  "key38": "4uMw98dg3JLHfguzSDBqQyJA9WEudX6fdgWtLZkbacuwjD8CRvsyXrZ7yXQD23kqQrc62cQmm26i8KAmNom6HSSq",
  "key39": "3FKsmdL4tBr9iEQExnmnHA2rXMXuYMH5hX967PMk7gmMmFTzXSzz9vUcimPTabQC7ejf2a4qkfnAj1Wuft2J2hMW"
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
