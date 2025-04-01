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
    "4CofoNavbkLKGtG1XYL7cbSVARdLyCQwR98U2cvC6476rLZNcgCqCHvkBEjg3rZv8V12qdn3ym4GhwHfm1oQ7Fs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ixtmqfDBhXTvG5f6vSVnNRyusf79zSaK7DcAzMKhT35qutEyvdLSVtCboag524it7iAyzT6bPsFWPN7rukJdQrw",
  "key1": "nRP1sgiv22iMzqnVBmt4YczMHDJwNSD9q9EkUBMD97UQMUfXFoHnfP9pTt9ARZwpW7mSutxZCqnLtC7gb2RwRYd",
  "key2": "H1nfRamqN4dscCozjHDYDdSLB6UnL8xFo1DW7N8ttZA5bYNJLgTBjGohwXzp7PV4HCiYuAr9WpgFZGL9RGTSk9A",
  "key3": "2yB3dYnRGzTEaNZc17zNYGsHqsZ5GTCbHwsVKnQqvUz1FqbDi61BWnSYP6RZHa2uxLXwEtUsJu3nGwMX75kJVodT",
  "key4": "3FhJAcbs8q3QYSrsNzHzWJn9ueaePApVWQbs7yLaD8YHiQppMXUEKF82dM7noDnH4ZQ4X8ttAcgPdNdH8mgWZzpE",
  "key5": "31DZnfUzZw6PFp1vQoHPBcKJX4mhLoonw8S8ux5XyiGhk3JAof4kwYcjwgwEHoSTdzKSVSrFA6AoGkWMPCYKL6LK",
  "key6": "YT9NsNSY4WvHQU9BdM52H68eAWo1F3dni4BMBBJ6fHN5fTSw4rqFV3csE9WQD4Xp1bhYqtnHW7muzY3mZ2ieU1X",
  "key7": "3pNVjGRB6EsUNfzBCVXVtEUFBFqUSnoKBuorUHSWxXaUd2CJTSoeei2iPshzkiktkiYDnXsJ2rFmtgXxSdcKUfV7",
  "key8": "2kZom2SQn4MmBZzaD7vwnhz1YE7Nfb41UjN5gSikZRDySqZukmB7jhTdpohDZqS2qXu2Nzi28mYthc66rkro5db2",
  "key9": "4GEbJEMPiwU4XCqqEbFH2nqcP92JTw8cRBUzEY6TayAqKAHPHqorRTP6jUitQTQXAQ4hk35g3WTzjz7zGynErMPz",
  "key10": "3suGWRPLwx11uHgczd4YjVPdxToHLWH7AtEQUvqTcd3xzaUN1jsL3tMVB8fv3GqttbxKehRLdsay6vViHq3UosFh",
  "key11": "5oorxRVbmPs2X8pNs8rfg4u4hnAUsnahit9o6vSfYmPdMhkqyKaHNsCQRYDEtihhy7ohZw1cphQxfoFF2Nw4gzEq",
  "key12": "2KGazz9v6NrEkVaQf3oRh85ccn6nFH5yXkCydeAJnGqy7qMyz3sqfgxcEsVqvJohr4VtohFgHbW8PcKbQcCnNGao",
  "key13": "5KSYAQ6NaGzweBFD9sFMkKu9M1XUfx82keuAcWCR4N8BzzqrhhxqULdKMsgiwUJ88BcRjPHAKXQp42ijDYReT9xk",
  "key14": "4NJX5788dvgLsKfF4tHZNYo93t5mvEnRfLay1dUFD5gCc1CbUGLAVmj6euW8BmpArdgd7Uu3Z3i7aKMAqWwyaenM",
  "key15": "3bUMaVzFHMEgPvgRjfy85gvKqYoMgbAJE67SZbfJGB8ht3KY7QVNF2B2jaa5r1yfek4NJqHnfi2MnQZQFkXfSb4b",
  "key16": "2rvWQARXiYAgTQsgpcBNheEupyeeotWvKhMVEbTJKaHUoGR8ouMpidRSJiRt1DMRdAWyfCxJgw5HP8u9LZC91jKS",
  "key17": "5oSswen5Gta4MQzahmhd4JHv5y3hTPdr7mMGJqgwH76nbuNZ2pjhpWoNG39rDm89sBYHgwEVWmSN58S2Aw2Wb5GS",
  "key18": "D2DEExS74XArS4UuQ4DBNmTkNFsjpuhUZZrYzmQhKB59hrHyroFom1Mzpopr4t8ujn9A8kEFvp7EcNYJbLDd69D",
  "key19": "2HJLFAZTxQ25WBp7oZGxXfKyfKZQVsv6p4JCjg4Q9wSRfdtYeC58pZRoM1Nhu4ajCq9pXvPh1RJSUZ8vwv4Y7Lo1",
  "key20": "4g7GMVnRNeVDfaEHJ5ZyWaUxLY67sw5rc6yp6eu99h6afNCaHa85cvoNd5vu1q6qfeYrr9Be67YCGUVsbxuEQZBe",
  "key21": "4gNjcsN2GqR23DrpRStb2BqDQuVzKYSWn5ondSkxXwC3Ynx9Yr63eN19kV3zpw4yHsFV21sSTam9E7ZqnfWB7uGH",
  "key22": "31DnBRVH29auLXXSSmUsnLPG7myfFYRSThuAnAyni6sVGGQBrbzi5Q3fz7eqWVCPYkBkTcBf2q4kkhoiV2PqPbCp",
  "key23": "4GVXGJnEmQ9zRjgxcqZchHhEubZjFSvpTbCfhU95FfRBetF8NUTkWMbuYTgKiRDagzWRLghnS8Wv4vLrqcV6sKi7",
  "key24": "3tSx1n5H9k8xvUFSmPGXsGBRWW8zjnabwhrXL49uEsxhXKarGC8HRhGjgQof63t4C9inMuELnD292zR2VqpNVUgb",
  "key25": "25zBR5HjZARHLip2JdbxppNFgsX1qxidceQonGFWcJNHTSzv85iktzLgTetJuKnGzzFjQvHR6ZzViMAL7MFXkE41",
  "key26": "3aBMBR45URimg9N85md2Rdo1Lhyr7wiyja9T2HEynRxb5RfSvj5dW1g4cqJniJeUQjiF6PkZjjzdVwP3is5e9Ynh",
  "key27": "2gbRG7wL6LQF6jx7NWsDfAsEtLSFCRBk6S7R1j8MGaDzvddrNGMFtKaaRDXENXKG6uxpnpBNJPUxzME3hdLvXc5L",
  "key28": "3bN5JgqJqgMKSLgiD7sexu7XasfcuscYEbXMLB9jVwGwUkNBbdQ76m4NHBtfPm3tfRgeaJFe1M5wLNEcM88Wxfp2",
  "key29": "3Y8zjkqXtkJ3E62ZSDn6mPh8nrKTZhUNvf6eYUb8vqegzK5ezrWyCSxgwndapRviZ9Z8ctnwwLr6abD5cwvHDWUc",
  "key30": "3NzE8pQqBd8DQ4aRtnb8bAy7tBkU1Hb9aTPVrSRT7nu6RXsbbmMwt5bgBJpe5Fh6dPEMtET7Za1aNTjoh8Rx45Vh",
  "key31": "4vE4KDhicfBZyoVKdR7HqBN4NXDgvKUmSK6dHU1xueduqWvtMDmPMQ15BZBpjP49tR7BCQhpWSNNQLYyMa9zSSLQ",
  "key32": "5riNRGtPtd4dSDqq9Z8A2jcfhbKUuvLgWTN4oCFvQUmrZc3A2JB8LsDqjvcKYGh2owPDWBWr1Zsf8LwQCrC5TJ4h",
  "key33": "4qzwjSFHYCGLVpWYLUxTyDBfanAcgEHCxJEFSNxn79n2K96NAHV1PuPM5CbXCuHp8VSFGuxU3NFpsfzPnJavpNTq",
  "key34": "2vbAVe2SFSccQnGVs3Uhu4e8GczLofZvSsWmjX9Yq4qmkTpuMjdJUSATKwmdidBXQuCoEacfCHadmf5xRH7oCuy7",
  "key35": "3mPFMtGTbKpDkQzg9GNBhjF4V1NTjhSiVMJYd2TGhFLCuM1hw21LgYhS5xsfUB91AodEMiwmgSFPzruahss9QpT1",
  "key36": "3ZnsQ4thoVzZuEX6Y5vQFbcA8zBboXVgrPWX4dYgT9HFg3RqWFq7X8ut9UvsjMFp5EWSimLpm1m8tbZA2CNjUVAB"
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
