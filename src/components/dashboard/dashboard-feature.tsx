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
    "3J33oY78yYc31fuAeCLPdknUn8G71mUiGgt8v3MgYRHbaNXv5KtQscSMTDrby9Vyuoo7WxYrQgBJrkSnsdZyVkCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S6oCa2DSJeSqF5MosVoh6EESBKJ7hFvWT4XjZndp1sLPHfYJkU2WwhjBcHvBPHYdBwtNRfaXNKLD3UM4vant9HS",
  "key1": "qTTrDMm3hyciK443BHYapJZ8BrdhnAQJvbRXoSkAs9CrJtyR1QPzgznQJa4MDEaXx7Uwd5wZCTozaPqd1F2pEhx",
  "key2": "5aga8GA1kXQVh29prCXAYZdkVksNiWikFTQcrouRCZ53mBNo7JenCeG12jhtoufi4zFLmJ8VkoaNaEuRhwznsUVW",
  "key3": "ACgJQUTy2tdChfpSwYvMpcPqBQBq1Qnm3t7VQ6Ajh4Hs73LYuZ3LMCT8PAQRwtwJYHhDAKtpKgMHYeSh2QRn8jt",
  "key4": "5K4iyuVnXErRnzeHcGG4NpbNHbVKGAHB98HrXEK72ZRfLPiEtLxSbcrWE5YFW7mbA1yAzyceMoKu2eMuT16CC76e",
  "key5": "3aDZocwWEXFNCnHhjjGdqTJa7ToY9P4G7yuFUv1nWBoWvJ4Juo7W9iKM12ZqxRhPJkYkKpmGcP3D5gnrZd1znd8w",
  "key6": "5ga812m6dQhrtw3JQB3RrtAXZ9nMqvANpnT7xKbUyDdTrDx8DPfdiLStejr4pjD1TP52rUKG9jCSP7TZ54UVeEDJ",
  "key7": "5ZiuXFGiH11PLvVTeA3nYThftyfHLzMrfKe92CD8WJ3s3YFoTxUfUsjkJNJSCA5AmZMgQ1zYkQ4hjLwGVVrPiLyc",
  "key8": "5w1ghhyFbj8CpyShoJq67dvNReVzsVBVDpqVmhKtgvJBpgAvfWju2e5avWiEUiEyhAU54XQLTLxjvHHbei53jjfC",
  "key9": "5gT5QWoHwPLjZpa4vZHCzVcWofrN5NqY7qTzcyi6vrgN9VyeLokJT2mdDL4jwhEo5t64CtfvT9HF8w3srzMdaPDU",
  "key10": "67fe6dRGYrDi9HF6jWkcc5ZJDQLJNaDAT3UQ8PGNu8xcrKECT541tMLyYP5jLmH3JE8kvsxYXGZsQHSWShGTp7dT",
  "key11": "5KfbmG36yEjd9A28vqCs1mbLrHkVEFpeDat1X5fQDBd5KsjjuUApnEcfAKhNCXFnHU47y265XsTb2NQKBjg5Yn5y",
  "key12": "3AnPKsfrLP4R3LnTJCqdyrbeVe2b6teS11Qzew4xb2pZb4uJeC39pB7GrmDYLNGgvxBUkt3Mgd27P6gQNoNC7eu9",
  "key13": "5Rzhd4mHiTDWWdKsQoeE7BM7QcZ2jsQeKbqNErqEAkq5R8Mn3j2Rd3d2K5AvwiLJqig7VYDxNTPNVBKivZX7dua8",
  "key14": "67LYpgdaaAtuoNWxUZURKbnmpsFQsCFCbK7t5cacZEdf4nPwHVvUhM46T6Pc4kmCvF4EbXSBJGdGm6PwiFjwdkmM",
  "key15": "5kR7gC8cYH35C9emfYQmHMyj9HWTQd3XBPBHPQ3Wv9f1gr2qrph5rjQqZe1gpmcnZqNgfmjS8NoJDpXHmCfHFaNj",
  "key16": "CdbWZuarS3ZWvqqWfAoAjs68Xhij9sXzX8E1QFvnb7UgVAiqdD3vLBasbHQse7DjoceEyKDGLt3RkYgu2bpqT1a",
  "key17": "7ktFx5kV61B6nZTaGiBuSh375Bxhi87XkUzetwWEQ2z1NuHnW4Ngaw54qUAkQ3tUwFtCXU9hbS9kPyspMJGMAmV",
  "key18": "3fyupXDSug47GKT2yw9CcdQ8Mj1sDKyugHvBLGd2XfkuH7ujP3Sw5Mgs5KuFg1TbfaPvgKQ4r6HM4LrhpqQMtGCu",
  "key19": "54KK9sCo66LVMTkRkizHF7ex5rKKsdfRiaYwZdWNCUKkXnQpJDwCDvoVrxCsP2Sv6BiT9oPeutbhPSRZ3dHjG8DN",
  "key20": "oboNw3GBTg8pTPAjRbfVgsnqLvtmMdJfb9r13fqmtDznTtAnTWtieXWiAM3kgRrN5TqDzmZpbLmLitWi84yEGsw",
  "key21": "pat8jiTMwyyJ3xnMNbJwhafPJE3DNBvvWVDcHSkt1FDruE7DQywaaTK24A3vdZUTrhXB1mYsdbmweg6SCKsnNbR",
  "key22": "5zPkqmYsi9nQT9EmYFDCe1EZKmWFgHxmFuJW1oj3Tr5kATSytkNsoe53bvTpzPnH3Gc4ZRWHZ15z4jtmc7AiHTLh",
  "key23": "4NqVoqLD7Lyakfd8hhDS8ZwSDmk5gYyt2PMveYtM87UKYgJuRyaCYsdgXE2q518KWPvF8bGkrfRWjP3P1kn4fthJ",
  "key24": "2C5hALT4nWVzq6cM9dED1DtDjcAvWNyBhtSeztkXNshPAb9S1Yr8f97Rqf5hN15ng5GK3KZPgEfuY9NSaKri5Xxa",
  "key25": "4c2HzVNGeaKRodFoQhuSjyYH9QBuV4awe13mtpUgnbpBbc4mHZLkbRggAxNv8rjUbgztiDhNoeq8xTm89mdRL5qG"
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
