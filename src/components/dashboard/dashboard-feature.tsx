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
    "3bKjRZKBNXy5KFXjiEaRRkLyB8cd4mchcyDotJ9JGZWBrrhWteAuu3Q9B5zvZFqXEzAXnX7gGLmTQPLeMeRNByim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KWu8wKrQV3sugspnEdvA9hDATmFYd3MMFubP9Z5iLaiLjsv6BJ636fJ4HqDVKRadmCGKrmmgbpPedXXUeeMB8zF",
  "key1": "GULzKvnbt8asFEJ5MovoXVJUgfL5XJj5igSXasWP5AvmqtY1mUM7W6VKgtp5hi4NXHkS69xcLoZgB8PEUhoqnH1",
  "key2": "2kBnGydNq47d7RLKTPa6angh24RZsLFFMH25csMWKPcqe2MG2MSbKUGgq1UmE17uvcJ9RbbJkc5Nxrfazy5L8LUa",
  "key3": "fFwnYfAHXBjonoeQpm594kfAB3P8PpEvjMzEzCRdPQ85UPaDQ9REKFgJFMxtLJ7cnacths265otx4VV4mpuJ5Sb",
  "key4": "3PeFy7BTbtDTNTfrpcey57wCaWjMyuibrSC8JynnQ4zB6kVV4iMrX9HGAELpHB8v3QZ1nxdyuzCe4Z9UYQgpcNbH",
  "key5": "2ZmP6FheyDnWpif5WP67GUvAZ6CF9M53SPYMi1adSzDoWs9mUmev1B46bjhZadoYkcv27RMnQWpRohmG7a9pWvnc",
  "key6": "4ekvhffwUBS1FHJ2bJ59vxDD3mXnFHFjwU46x3dQrXHVcoJ5qNGUGGntC9cwXDTjydBfL52jv94Afp6TBGuWJPMo",
  "key7": "5aiuv4357ZBVeJaBxtbbaVFEyqMC1vyf295zhTomug19aNMpuXGV58zYCN6Mi9t26rwvXb7mXRwWWFRDW9N4Smto",
  "key8": "4pcMvogTtegNpqEhac1mLSHgm7qAeuwnGs3wsj5DPktsq9p6SHjp4HzfLVhFUyz1JwrvV7kvTovPLiBweDsGCyMa",
  "key9": "oPV1VKdxscjoGa5dRd4v2y45JRzBaGbxGGjCdSk3ivqWH615E36jTAvekeWpup9HQUJ97Szq15Ti6841axELYbw",
  "key10": "36rWeCyJwkBJLVN9C349ZP6443UoG5bzW1AA5DWAuQNnAg89bjvcsnreQHebznNAqkHJibqpfWeJr3YNXdWj9ity",
  "key11": "2KQ6wSrYUDobGkXU3EsKRNvkbXVPziQAe8qqkRpqfoMUDiqrHtEhh78kS577iq4CoXznt1Sojpa2aiTpnvr8qDSU",
  "key12": "PbpfJjzKTRdz3rzTCVZ9Jc6Er2vV2T5i3Rx7GyjrEQfMA4iTfzhsVAQBCESWU4nvLCc3GP8XVrtajHua77FvKSj",
  "key13": "3bPZWCdegKT1eRbio94qzTJ1QiN1obstBeuL18YTkQQuueEThL62oNbHKRJmh2bf6qjJcTZR5Q6Vyc86d4Sq21HL",
  "key14": "4p74acgfRhH2u6j4oyzMvAytkYbEiDa697928Fyo44396FCT74qT3ypQpMmME55oVhMHwjm5vFdbqS6FNXoXjMt1",
  "key15": "5wsQ91keV8UaVtEoBp9XWHWAjJ5rBMgYwj3LZ6QwQDPcnLJg1WDzztghK81Pk8GRC3HN1vMekp5QCmnuGfTi2GXT",
  "key16": "3Yxi6LfwHNeMBssBp5Adrr93CFNHBZsQ6zaUjjULhded5wcqcjdDkpFNzejErHr8xrnHVDdYNwicFcBBGPhf6J6D",
  "key17": "4oD1WdpYWKfeKd4mkceq9yReAbvqoykKRdo5aW8VV2cR5SxrSYpaNc1JjdoMXX814nDYUnWYr6JfG8LWuFmrzMGj",
  "key18": "EKf458ZQ6vk7Mxo7ZkCNc7uQaktaxa7YeynY4QB674MGrWMBKkHTHbg2oZwaYyLa6xsJLZe5DH5PudPTPmtsf2K",
  "key19": "tdDHGHnNzaBa9qizYR99cQWjpjdriesCB6VEYzrTDcW9CuH1n9Gphv5WW9hDCShCsfc8z3v3EJzcfEWaYDmsTBK",
  "key20": "4cSFeuz5CsP1GFUs7e9JxLkFczS4mCcBYWK1z3z1qNfZNd6WpugN9rfd26jr7J4TB3cBY3BWD1a6gg2sTobNREdH",
  "key21": "35mNnNBsfGFS4JTJP6J1tTkQ1ZJ9tarV9Px963HVrRFYr9FNci3GfcsMFxpRxcXVTHQvFYJTqnad8V6Znn3YyfmP",
  "key22": "3MjzvPDvem2ogC7kR6sPwP8FayRnrh2WtzJ4h7L5XmRHvN4hWt1NKx8E3jVw49L7oDrn3oZBmJ4V14nh9DiYdHCZ",
  "key23": "2UaVXcaERNaJFFRjamEd6uWwz6SJe6tDvi44XLGSo5NLkCXWG3ouEM9V4XuZuZgycRJ4Psp1CwAaRWpaeQsvAroa",
  "key24": "2kbn8kkQgcTFoNaStdT1sKPuLSoXSKvxWtUX8A9UNxyGxg8CdvcxddsGJkA8twebGxY8PKiWARSBeHKfm37vWWHe",
  "key25": "2oEoT8mVqtTnShcLADhKF6BpueZ1nZSpx6ExGVWDqweFNK48Nr82QwbQfQjmyHnyxCddndiN7BuWz5fzQLhLvgqc",
  "key26": "2rpMs91wq3FRaCMGfnd22CJ3x2v4f2YZ1K6hcp21Xh9bNFaxCN2xfuSxskmRDBUFzgN2e7xd5sQKNzvPbYZrgA4G",
  "key27": "89zNUkuE2SyWzdNdiWpETY4jcQAnFVsw133JUVMKbYMRd2nzxnSt4T8hV8rTo7otmfuBC9QXX9qrQBP7wCYjwLY",
  "key28": "Vrhoz18Gf1fffdquqfKsi6R47oZd8vHaoKWHnVFY9HAVdeMV1izoB5TYDq4gxtLHZwm7VGuAuDbAX1jVLQ8py7u",
  "key29": "2bW4LEwjuwSj8xKc8qmd8ZmH7XmnogNkkzBrrnVUrYD5uXF99E2PwjVvu89bEja8zNXWAnLCqAuYPb2BWxN4hv5j",
  "key30": "456NisLyvybY6LKVH91ffz3b2GLrbi55XskDx57cuh4oAGGJKQ2KUp1y8c54h6yZur3chHUuNtXG5YJTbqZ2k4Wp",
  "key31": "2Yn244bBes27fDqC2gFxXyQRwEMt2m71J27Xo31Ugg7TVMD5QGYoDADHmNcuaWaezHYbPkGJ2116bUkovaujV5zo",
  "key32": "63qfKqkXfs6CkaJgFTvYLRccUfZARKTeUuJBCDRZ5bEN7AxAGvmKW3rQT7TqDqCsmozVVQGp9phxeSk98NHvnQfz",
  "key33": "3ZvBp2PzNM2hEC3Yt4Bg6JmCEMS1JXCc4zAQRNp8nSGr5BcrTQqoK6yD5vgG8yr4MgB6JodYHWam61U9Y6zxor6t",
  "key34": "k6NWJEuQQFDD7UoZ4Ehq9VY9YVJXzM6YCc3593ffd97MYdNXt1YbnSVsenkdT42DnjSge6AP2PgjcMJ4atcB6QA",
  "key35": "2Rf47GfgYqTX9mVQgkSNmtJwP4YQGcfMvbFo5EmivL1RNBEBVUoLQYbQL9fQgqSzeVhGHcjNLC6UXE5o5KjN3tt2",
  "key36": "3emQBjvy4vy2yTNKxUfoWkd4xvCTNY4dAMzqDbXFpxRLGtLD5xZV94ixnwSsFZkLrbtwiHPRid1xxXkCBVQN4rhF",
  "key37": "2sDZg1xH318D3wxVNsuXdBnq3APXaZwWCytPwsQm4sNmqLqjsh7p82gDVmWzhi3jy8JMKQeE3Zp8QyrDiTpbBn6W",
  "key38": "3nML6FCi9U1uGJRftZeQfA9FxEZc6i3n2BHv8UF5gcFUnWEzyXm9sNCnQuA38ZnHLS9zbrtBwDxje7KtmVzizcSD"
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
