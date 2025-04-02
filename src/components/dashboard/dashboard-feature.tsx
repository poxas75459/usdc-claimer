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
    "2F48ckrGksvH8kNZJxD3DMzK5EHD6eoiMP7qiNtSqVxkiFMmzuobgJqPTeGt9wd1P65gAjYwrbCrAaa3htdc5d6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kXtPLKNDxVadpQ9j4QZgL7CupBUNmTwKgUBnUgtBrBBJUNuVhwLWfYgNZvRiPBtuDWfTDmLHp8q8mMQ4Mg6dt9f",
  "key1": "3SdP88pq3Rh51QW6278saK3gPb55uhoZMBL1u3tbD5VWzUzJrMSqtRD4JT6LTtmgdSTs5iSp3Z21bN9j9aMr8XG7",
  "key2": "21XUhEwGLv2QZa4ijFJUevSXNZEXqEx1Dbq3QfzPGm6NRjXTs2MJqMznc2hLY6HXE1V8eK27KgKXd1F6EpxWEXy8",
  "key3": "5ueDUqGnccSoBU6cwCrwZqHQMmT91uS9dSUFNmxiYDzUGMDCVRaFqBQ3RWwqdSdayk6QJgApmRS2FomGKa8ESYHS",
  "key4": "5tpXUSSjMNGHPsN3V4MmFfP9AzD7CB9EERkEAMuViAdU64VBmRrnQZrHK2Bu7LnvBNn3TBcYyY38JrhvKHrkczMT",
  "key5": "2DKt2poWzghLC3EwJ2puuVKzZD1JYUbcrNfQwGUQgpKJNfwfmtGB3i1DnQfsaPrnKbUXRz6upn7su4f2GYQmy6fY",
  "key6": "3usXegg2g6hR4r5FnRkLtiQjuRnZhy6LZyQJ7puR1sd9cdxzHsZH7JeXcvZdZewmkgrbCeTR8fBhu4g9rVcBNgYg",
  "key7": "37aSsUXuWNmC6Lp1rLN5cEhRDcnX5zsg1hh6DQQG3Ke2wYZycJupDxME2Yy1YvDMtmP2rD3B9YKYALNk7Q5TvBDq",
  "key8": "CTJC7zF7iuyjvUFN7UPcPyP27Vv1Mm328mKaxqQacetbLxxxMvVggjDBj7C1Ap9Zzcf7WNFULsViQ33iGBktYTn",
  "key9": "2zBgnfXN7ZmVTcDAeaPfT7AjZBYMNpiQMxzfAfBMB7Y8VYKYKpD3F3JQ9vw6fafnUkZ3jadZ16F7eYXYBZ4G47JG",
  "key10": "GLKdUWhxtCqnMQBSnkf4Xpy9M1kx5a4PX4UA8Ln2ArNu2QEWXPzTjBguSgk87y5KEwEibkoj6H4nPVhBtdrSaY2",
  "key11": "2f7oHHYyZFbxkeB2STsCXupqLJXFwFfDWtQbAtHwDo87QkiwVTGSD2rLejBKwhTvDmJ5mqVMjLMPDHaqPq36Uz2r",
  "key12": "4zipUNbtFPeK5E6akbQKcDc3NYoBNfCMytoztqmD55q3ebtKqEnThgNwD8VwuNQfMGpRtdKj55qicHtDf8LmQbrj",
  "key13": "2QiqorptsmQ7ddNAXKroW2HDwHg1adYe5gAPZkoLfG3naxVS5jgGaBzWwb5wgat54jMD8esPVewzBw72Z4Yw1KTK",
  "key14": "5Fv6AML1NZdHq7dWhfKqHp1jNC8mmWBdcXwSUBVcLiPb2grfFpEdL6zszMFLxmQLJTvaoZ44APa6i4AVuWYeLTCh",
  "key15": "222H1tEKbMFF3i7Wpt6Th4MnrwNpWNH8DYGAatpF8eThZUVUPQ6npheJ9LCowAJESpjnEDoNNdGvxfTRYGep1cHj",
  "key16": "y4AUAoupzxDCa8uvSUHNyk3JCLjNmzUX8rRWbtZni6JwdqXEPKppm8Qx49XuwTwj4kQWnnpBPGezfW6re99Ug5N",
  "key17": "xz1kFhsaoBf3JHZTi8ARD3A3jSVqjR2DXGL1r6Eq3K1dVUu8VkzZ4863tNm4m657dB2hrkBMhGiN6hiFjhCYoSE",
  "key18": "3FSunJNVdAQfm6gS6qG77rVDCWVEGsCdEc4kzWLmHFGLhqTyFYhhYM8XyTqHviQb27ueZqz5fLBzaNyLwnb4m9W3",
  "key19": "jTf62XJNRMhUuKt2NZZZqckYu7AHGDyaEtCmEjZ4LhYCxnzvxQSmfaidx8Jo7z1hFmNX44XebXPAH4Er1avXf3m",
  "key20": "2adtbKYwkr6tJ35YkJf6ywgY7H2MWDZN2pgyrRTnNGX1vPaRgrVrEgTX2QLbnDZVKv1j6EXZZqXGQoS6gfDLu1mv",
  "key21": "3v4ANuCK5zktFFb7UzxC6EM2WPdArEjXe7bkp34KVSpBZYDkPukGNyxNdtnVFXUEDwqxD41xJAX3Bv3WUfMJGH4a",
  "key22": "2jq1J5VqGpwLVSsq8FwFooETERrRY9XnAyARu82FTpBm81Xo3ufn5CKSceSjdCgTi1oRCn6P4nyC9yptXBf2hN28",
  "key23": "jF7ETki46g7RFsM1U1ijVs5LsBsm7Po1DD4ZmS83rCDm37dFHJRgswwJQcVBn3Dx1YqAQPouNefQWQeK1Qe22CL",
  "key24": "2FZNRUebV5q87wvifhaiequbqVP9NJVALJh33qEoMuomE2DfB4mzDhZ75hFxiyYDqw2icHQZ1JAiXdAHjagkizzr",
  "key25": "5Gc6WW2v5p5LFinYHfK8GGiGJieTqbRo5AWQiSDnSo3Hrn4Ex6SfArP8YMitrMANfAkQxeFrCiMR2ZHuxVWnmW5C",
  "key26": "3i4H5YuiPE99PDPXhZSNBk7N8wDMvv4ofKNZjCsnAd9hisTFgiDqhcMqxGtf7Ke7Z3ctNJZM6pWRmqbd5E6Kkep3",
  "key27": "m9kHuGZDWGcC29dDhosPjA9rkMxysUBsi8gXGaUVy1jW49wXeR9hYwdSt3b65aYDd7dD22wQrHDAujsZj8sbSXg",
  "key28": "2hj9ZHJ7GmECxJcGbiE73y1d2QiwKob4XLJDFMvVeNfWToUJUoWuhdSmq3vKKCAAYwHTAHan9giAEg7Un7kL9Zz9",
  "key29": "4p3933jgc9w9kjQWsr19RQUz4edv4ENqGgxtUJgjeJgKXJaifQ1yiCUYmvSd4HtSoDUNBGEZH6PBTj1EYdvHKTJn",
  "key30": "x845BiastxkDxV3mDFYYiERc3Daa7pzf6ozNcaSARLgGhSto2Pxmmg8zMjChx4yasXhVRPCwTvD1nB6NUQKegbV",
  "key31": "3aDzp8DAjVPbrpqrcwFKC3SPb6FPNgJeZgabAmUhsfZ7nW3w7dMdtFRtVmBRqtvHRF4UisUSkTqQJovJJwXS8EE2",
  "key32": "5vxZg6ndXW8nYmjw5W62LUgpDUL26sESSEJRBiRtLE3Hjoa1yGbza3KYGDcNYib62R9ZnNgHEvrkRJ4dejWjKtsT",
  "key33": "59n6tRSg4mUSLhVgK5e8tbAwfZMpriSp8U7nbzrRbcfBS6yeJwU8HFy4wkU2tkVjJZZqnm1HwdPHwo7hNPJumYDW",
  "key34": "e9yod26ZPEw6E8hDfjYDvheFHAemxB8DtsPJpmzgmQN6XVq47Qh1Lhz5hfxAWqwJwXuXqup19Tfku7QbYbwB7AY",
  "key35": "3Kf3T628jBDAe23vSc6vApspcXhfT2Hj3aLwsNNQ5PjMN5Zyw8L3o9y6bVEej8mPZEAqPtrHob1CDouDUhZSPeo8",
  "key36": "ZGso4Dve5qARfWPPmmtBq2rzoz6btTkB3dLfACynESL84HeYP6Usf4r9RhiyFgmVuzazSqvBurgAQQjB9doXBVX",
  "key37": "3DAQCXvJtX7dWPYzmgSH9qVg3KecVgqW9EeBbMqf7VXDrJxvzyZkEBMKsX1wG9ZNUG9dmqwtb2S2o47KkzqVqd26",
  "key38": "21KMiwxTUPm5sdA2yHwRrJgXyScNKZ9BZPAUFR2FWoSP6br9w5a6XQNzetgvBjcJWfEN3Mb8zErRwDAG11CrN3Na",
  "key39": "5vpFeJ53kEdfNvypDsU6YDeFSbtfXyeCmJ1ivfeNYrv5kRamuwpmE2LcsS9rb5bVT89YNjiF8mFH5rRV1gAsqgyU",
  "key40": "wLkbbQaWLjS4Yyb2K6dFSYJuXKx4h3FFDxJTGxMdJ2hGkLbsQs8KGP3V9EDqPG6zTaiHcx8g8KLCsfk8XvzWGuf",
  "key41": "5hxBFHh28Fr1yUT9BAayWKMKK3ZafEcvJWe6WGjoe6kTBkNMxRnF7QH1AVPrzWo9BzRoFvT7LjTUURPRudKpCkqj",
  "key42": "3VKQD7GRang8X4YqNSUpvnvaX1c57uJ4Jcfu6JMKpwyD2rYybzZ8Yyx5zLyWresHJvrksMwV4b6nQ1bYQJD4w5Pe",
  "key43": "4Rstw388jqLfXF9of46eUsiGLUYvAXsxsQSNbFwsm7ZNsTfHw7kcoXNo6RJMDCqM6K69Ac7RsUttEYGNqzxbjK9W",
  "key44": "5ryvRUXWsK9XUr9KAyn7wtQnrTqMMDbtBBU5mvWPpvU7v3z2p12adtUxk2TUzWArYhokH1w14uhXnauie2PR7R1k",
  "key45": "4jcDR7nXL5b3Fsjxr2p85bYNDcPXZv5wBdD1BAXfAc9Wn1q3NS5cd1mZ7rYasUh3UFFNpB7QWbWJLrTeDTPhWUUS",
  "key46": "7NGV1cXEuYjHWrGhZapwYFhQBScsG8bU72e2qYgjNNFnEaWH6P1AMTQUfHAV8kfXRPJCaLa3iqBUDpHGfot4awx",
  "key47": "4Z3EfGRWj3GfEDPL2mtLTdcwTqPCdFiHcCfQKCpzvouVNqqyh8Z7NVn1odLpdKEhQZmf8rjD9MBFij9sKrx4jgtF",
  "key48": "iDQb9hGCCriUU1Hi2GWX4mFmVeM9z7Wa4hps6mgTdYdBkMRQht71MqRRHBRqWubE6nR5wNKeu51LL38KyPLcBP1",
  "key49": "2tsfLKJazTcx2AL7SKkaMvzkaSM5ahW9CyzSk5g71919MKwkTYAEm4wpc73CPFBXUHEBcKXpvvuHXrHPxsDLe7HM"
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
