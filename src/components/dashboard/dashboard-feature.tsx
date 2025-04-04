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
    "5Kn2g13AtLTd3dNccDq7XRwTp4zca54L45vrcQWjN866DUR3uaNeyxbvMsRZ9Sjou2qseot9zmrc6jfTim3qBTcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E8RoRz6LpG6HqCxG6x9BzjRYycTFcPocNq44q5MQBhhjAQB2Aq7oLBm8nRfDRQT3xfGJ64NUX7sJuiwFn743pKc",
  "key1": "4E4FSEiZJbi289fM3D921S5EheHit1p4JJCfWT5Pk8nzuCA2ERtpsdxZuo2NErJD4T3dnCDF2rNTMXAC5ay8dvsA",
  "key2": "34hdXHLMhSfbqBkXaRXXSg5acDpGs5vjd1ncgt4cLN33FaZcgNMDhZsxcfXhdYmKUKhZdjUEjwFbwSVVnaG2ozYs",
  "key3": "2UnooLyNNuxAQ2BF2psbzKXnF7XH2nfh6uoTgJP2qDKUm6ivSBbFsgq3WUXzpubqNYVjq3cM5VJsAF9hwRtWBYBH",
  "key4": "2XfWFGJ4TQwFU4w68wxyf5nxTLvTjbJcCn4wBxTjd2gcDPkwsDRnAha1EMJnuxAKA3tcr8XWP4d9ytAr7wX78Nxp",
  "key5": "3jMcb9jB5UhqsXZn5QmgXPK24S8xKkvW6pVdd8YXDYohgM6D4fCWonJ4B7XHTAYf14b7bnaKb6t156qKS399JdsL",
  "key6": "3pWGuE2wpuevM9xT41mQHTBdEbYkGLRnK9R5oLMePgQXcLuzWPUBumhtGJRAfAT8Hxuo3tYZxHTbaxAzfbywcykp",
  "key7": "5tJhGdnEkFCQqmUaz3GEcb7ETjCfpdnpH8AuUJW2EGXvDYqpCCceMGWwQiL3UzMF6NPTQRR75w2FfjEo2NFfey81",
  "key8": "5ExpZiNYrCStfnFYEWPBpuEhnZXq19Cq4pmaM9CkNrBAwHiXVLeHkNKGFs3xYDKJYc4A8jDkwfXY6T5PZVafb9VW",
  "key9": "3s6k1SuhsxxzqFtynhkbUkBereFmxLSbtQRYiUi2Hy7wwgJFyGGPfrpdzdty35imPatvnkuu387Cgk3x9xHNPSrY",
  "key10": "4dSoegYU41tq8p2XQsmPuksZD6n2i1WMF8LSL76fEvCLnNCsmxFmutT1aDRoNZ2Ppu8YbXKrSUqjpPRH5WGT5kvf",
  "key11": "4ZA948XQeyxrLxiCXQnwo8yALtMzye3iKJTLjQZgdLvzERgm4xGUaHQxbnWQqt2wr5hsRqEGgbJhkUAdUSMZfRxr",
  "key12": "3CPN2EqhJnsSoLkBns7Y43jHMzCAKDT6gKGFW9bSggMokFkqYZ3oQyZZSUhU7cXz1T1UyNFCV3MZ7Powcy9FjjRB",
  "key13": "5EV9xX87mzGXB1kkHS1kxRP7UPYV6BngTc5yD5wnpESY22xRgaU4BWjCtweqBDrZUDnF1FXjN58pvJubtvQoB6UC",
  "key14": "5Ym6EDY11CnYgSEV9CJ2uiTS2kNxWow74UorU9LKidtWVXPRfQ4euCuG6PhYDDzmc5NBcQSXC4Z9fEypJZXP2Zvu",
  "key15": "5eVacbEaRE5B99gMWtkQAjgtbM8hXE7WhXANXzUBwP7KzJJRTZBCr728Uo5Jn5aVr8vsuu7GCRAGrS5oNardN7i2",
  "key16": "33NT98s3kS3qSxUEuYdbsiLboZtYbXGPHV97gUkkcnFezGCKANFGi1g8X3NMo5YhdtUUsgUWGezrv2NaxUegKRFt",
  "key17": "2LDiAQEucg4uNdSKDaoAVxb8yyGaXvycc6FCwK5BwoptBUuZe27FM83WrXLvM8p1CF22Qdo7X5hDZk2UVDMSJBhG",
  "key18": "3tpVzCYTXxmgrBKnP61ZnC5RLqNTGz2jrgt9LiwdcvVQhpVsWCYXQzKGr7s7SRewNyDbLu4ddnE4qvJ4NzsafneH",
  "key19": "JCrznxmMBH11SYKX4qaarKuqa8UFdh7GgDDAHhZVN617FxqdbkAFBYt3WSqWaDLLhNJUTRmEg5jhqA8PrQSV3JE",
  "key20": "9pwcZHmxhvCX3Zti1iUaSgj3fYqaLQGyPMGh2NopaabxBw4uQtJKaAdL2L5PZoP9FgUK5RQvYRYX9Rqz7tTf1iu",
  "key21": "3oGjrUGg1bmwv4FQbv1q7qVRRp6LPn8ytGyUrAB9H58sLBNpNK8fzzswcs5x8QSJarfgto23gDz3mVNCbM6xGvfb",
  "key22": "57ZamLSKjHsEXCD1GirKxgd7kVJNyZxLxBY6doiA54kxAGJg5Y6YZsXQavPBWEcXwBMdBhjvGLgwdBExYbyGibmK",
  "key23": "3byxQFGsvAWariPzMXBPXKM8WzRN7dGbGHDxcGTCdtTek8jJh8QYFSdBaapwhfiVniHjtkHz5sbNV6RV3PLX8cDV",
  "key24": "2ZNV7cFGzG5Foep7AwJ6vzZsTBDrU4TJDvDGoEnFF2guVYeLutsbkXXQQBCKTSKjr4g6do6sFstLoWurStbKoxhH",
  "key25": "xu5yKNLk6pv3FQ1j71BQgUjjatRz9F3y8GV3QtZycSmxBdRwuLMvJfCKfPXGBSgAmzyqFRvbfbXWGRVG2VntMda",
  "key26": "5KbW9b7iZ8wBgbzu4cvgfrNcX3ogv19WsQbo2uNHfRVprpAgvyZjBBeq2JWbkN4p3oGyzQZ6ixTVqqPDKicYxKBx",
  "key27": "kQ4KK1p4pZjp1biEj2RxhycGPPZqjqhSowcxVU1MoWudvEHoB94R6F7xE9nL1pWc5NTi1XYoD9uyoVQ44iJHEnX"
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
