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
    "4ArW6Jd18Aao8NbpE8Dn6ZiJNCivwhpk5z9X2QphNdsR2XnaPKbHLCBQ1BJZ5G3HUj6JtX3DDytGndN11Ut8EAKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QVaKDdzrenjHvBqqx6oZVh2GKXVLHzq5nGJbouieT8Nvm3j8FQbx3QHQD6QBPBrC7uzR1ZuayNH54uZK1JfGiN1",
  "key1": "5d3WNtAfYrKvC2t9Cje7sf3rchgFWfJ2xSMRF3mCkDLCDj2HUaWfDaGCun255BHmCMJQsR4S3GmAPipnJtpFcMiv",
  "key2": "5NUUj6byNk6nHCRcroBXi5wfLkZ5JxpWAtSDEwnUEezPVPe3aE8sfXmHxmgnsiTKmTBaZWrHr7RRxkwoE9gZNC7S",
  "key3": "dgeMZWRzj5bhmBXT91rGS6EGpfAGMtiqh1h3c52rdzdkaFyrPtHgXTQk8iQS6CU6BaYFZ5XkXrfe2kFQjSFCQBU",
  "key4": "2thjn46W4vVLZJv6sFqgNNMu7DP18fUL8e8uvsrPRXwCJUgsczxqhT4oCZsjqRjosSgz7eQCS1j6k22j72mpqadx",
  "key5": "5AoYN7W3UYu4Fb7SF3RNCCWEQHr79Da2d2qPA9yEswd2FJNjbx5fyZWAMqZLR5wHNEbqUrzut8TriJr6SraZN2oz",
  "key6": "3bQKRwzdktjVBWA5EMxLVfrupw2APmtDfJmstyjz6ciNndJ67EiRzSTZnYJbrF1oVGUcczWZbgvXjtraprC6cd64",
  "key7": "5UEWF4c8UL9Np7QTFVWdNkHGDWaUMrETtm1dRssKzVYktaM1i1TjH9CZP1PPFN7fhtEskmtxdnPrxLz1JS5iDWtq",
  "key8": "4mYJSNJeVXqPcQDDjHRLskY7eemmWymB4Y4dD2BJNsNhEoPUUFRGN3yheacPrxqsJtc38L1xTrq3fc3TGjPCm7jS",
  "key9": "439eGWuFqPBdipWuMHHMWKoSVyrYM9r85KjpN4rH6iVf6QWv9Pb6f2x4v2trfTNECMfZ7GooS5FDyakJQ5nqzg9S",
  "key10": "2Hcg2ytaFuocgpNE5y2FqrJ3PchggYmVKDBMWPAE4AQWRbAFqjLGLr7XJ4fMisCBoMw6L4y7WCUKku7e6xqPxZDK",
  "key11": "tQxjukrwsQEyBGcR21fZq86kf51gowsP5sgkeRwrhkQjvPzpxrLaaT2pCDNZQBsU9pXeCRDipX7rUJCGKKvKvia",
  "key12": "jTJMUyasoAot1SV7uEvR6GLUkhuK6jKt9hxnLtuHApqJmQU1JCq5pL5x2nigxMGLbYQpUTubf7TwN9nZwe5xnx4",
  "key13": "3RWmtdCV8P8v9Grf11fb4PADj53jTtHAQHfYXP3aGpXRvPMRVMK3YcjiLFARCrWnrLcp3FaXUHf1ySCTnA9zvtdq",
  "key14": "mzRz2dp6GvYz8Jkv7hHMQTZNVb4WyVcg9k7U666BzdoNHt7pUcAGzhNBMXptzAY5PpJLf4VXYdzokq1REkMT7m3",
  "key15": "47hEqocvcZunsJ3bkbeYiHVc5bSFoxkKHJ9UpetJsDXexVJniprnndQTp94gPeXsk1d5VPsuSHrMV8u3iGYsV3PS",
  "key16": "5C3eHYae89vWmu2c3wPah13ytJXrRG7TtUo78ALkza38zgBWyVwWJHz2Bo85yLATMft3gntZxY4XWnKe5sVeSPfr",
  "key17": "3cW2F5t8vAUVeVdpqbWCoJKyxY8V2Wq36V3rQmxh9FAn6kKoQT7U9uhBJ7RUH5TPkKpPPupA3UZhZnvBkCb3QqtK",
  "key18": "49FDL95fFbvtLYhzGFnZ7mug6oXRxNug472qqYPek4NTtjz3TNLL93NhnT4iXsHfWtyFffWMfqA9dbGq2Kvbttg5",
  "key19": "36PqK56RKpyymUgg3MJZoNeYpNeUjaAD4FgL1hQKa42FcgvtKighDijyR3seAiQsQfcVLsxpQtJjmBLpCA21fYjW",
  "key20": "4MY4gVBFqfbdgJpbezuxUQzRcVJiPaPgFC1Gk71FAB2VLNCHuSWFx28DoVBUPqbHMJjneVHikPXJcetRkduoxKr1",
  "key21": "2uK3ig7FS1qVcneUydCjPerntznKbPS4YCbxzBd5HKP1SwAXVnK7LcJc7gGPfdXsNnowpqBadJ1WAGrV86zmpYFc",
  "key22": "61VafXyU84kRE9uGhodV4kApoUJh8JdSQ5pXmDVo1Muc5TjwepN4pDCXEhKvau6Es26GKmbeh8JqEePpdXhj4T9G",
  "key23": "AcpUpSA1gB22WaVENTfyJJQZ8w2fbMyCzUmLx1nZq7rS5vRpiqsK4Nf798nN8ztPSocx9VLyZ6udrtEtHmY7XDg",
  "key24": "4AHQCoa96A5Km5Asgzrxf2cNDW4d5kULDAW7L9xyPHLDrzRDThA2WdE91Sb4xYhaA15dS2g8ArFvjm9p3H9sTEB7",
  "key25": "2xSngATb7V2RHVARKfjDLVPTEWVPGLSebUN8s5RXovc925YcQ56aohRkoYdyPzXiLyjWj1DS3Z8aNGoE8L8ceVNs",
  "key26": "41q6QQMgamY1AXXurz4WKw1jEKHUg9iw6tWdrgo6RzVvLAJNuSXNjA5iH78uXEFUbDzpAGFS8hNKAxJCi2QS9Er5",
  "key27": "SN7JaKxNwodTvcxxX4MgdeYDwCZARpFnuftT9GGYfkQHz4YynBhFXLp6TCphJovaV4QtyHmTBgqUfbpeU5YS7YZ",
  "key28": "ip4q3t6fVATBse7hmR7A3tTkEd3cyDPotbdzt9bQHADtodsem7MDLtj1iWYWczMQsVmyhgmDCajVPnzrieVVMva",
  "key29": "DVw1KQWcuZphzMG3kMbdVuua6NwU5ZJGuPSAZQhcHjyykQrSHLQfPxUTz2zt98uufaTaSEcBj31xoQMQ5gtoTdx",
  "key30": "36mCsMH5mQAv6ZNLVWG95FYHhyWW6VPNCYfxKFDYjrJmdxTwpR97C6CdhrNmnBgGmyZcfVw6RcqhgGVSb5YLb6zj",
  "key31": "238HTWzKx3fDpMH4RxuALYecpHDgGnWdRW2eZbe7kgTpq1bTXjWgpW1dRkUfJtpSmrsUq66nPymNFH7i4GNvnWHJ",
  "key32": "4rpstua1JotmxdnAC3jHHVDGxK1puYrsSXvBrF31fHnuibEJ2jxj8dXFFUFLCy2LChdvyMZUAX1nzXm8s4g3Ven",
  "key33": "2CXshXTwNWyQoZxp7v24diehYJsBKHrUQy89jTjQbKMcjkZtEtJjYodyg1jcyUwaDHa1DA91EexjoPtEG34ppcXv",
  "key34": "dXRtczdMYbxq5X4VUYhSbaorLogLPCHPcHXXD4JhQpmtNrEU4UtfL5jdtNYnJCAnFJ2KwJGfxNnNNR4kwejt16g",
  "key35": "puXSKh2thJugdai9fH3rRfuqbxa5sd4krqvAUsKUCSTutMQnZLk7Gavjm1ciUaZz8dsFrN8U1CJMRNM1ED7UGTz",
  "key36": "Mrx7ZsmF9bNh7ge5pHGdz5QiE4DHwFWxsUEH7qFFvUSY2xn9kX6ghM2HesiwsYZ3t8x4tKiGo4wswwVehScyvFF",
  "key37": "W6ds9HVFxhuKGxn81ce49oLn1JdQdh74M6fMzZpL7JC3dv44QtaheMWqyVEYC8pKQ1PPHBi5MtjrhNtWdVz2Eaw",
  "key38": "3wodiYStDYmm2yGkHWGri5rXX5vSgEpHKMmhau3RwUKXsLciYU6XthdiGXAkHdCCDZiEi2NcfVQXYtWU9d3c2w6H",
  "key39": "5GkRiWkHE72G5peAj4AZM9PMW48J8PBB7EdANYKGtQwSgeoURF1g9qK9t7qR4uYddbZNzGNPiHfqF3nJweqPYdCS",
  "key40": "4pwmCXzjy4FqjtQV4uASjUcsjv4KNUEC2ZHUpJruVTTPeQNcQUdiCGhzEMG4SHEhnMGcnKjeK4aERBLhxr8UB7r2",
  "key41": "5ZeoGhjBTyDZM19JfyqeiuiJoVzS5b48sowB5iDquXxy7izcYoSroHY5Jd3tNRPmNcumKLB18C9J6Bki225vngjR",
  "key42": "PznBteKUUpaDwrkBNJikSm7ancYp7eGSdv6MEVV3wXTjzKRopqcsPvYAV8tsYNHKx7yTPcH9SagAzSgjdUMQuHv",
  "key43": "4A4ov6zQQnPTY3ACA11YBJqwc8WzhHEDLbuyyh1pk5obhoCkD44Ebcs399B7Hd7r7ZJ3Z913gyLWQXCkQ6H24Z8M"
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
