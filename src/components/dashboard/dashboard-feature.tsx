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
    "4SNtfvLccQtBEMCZyrsBfpqP6ihYqMbCRmVfiBhgpc1Zd7jm85AdaJFYwmmyjxdpa1x74jZFEMS3YWiSR3VuqK2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iGAraen8L3t2FsieAz43ALJJKKi9Fk8q92GmWFGnoz2uwwgoRPMw6mHmeLAcUHp2QGV3jvu8xHe81mtftxvYbV8",
  "key1": "4gB41DGg8yhHSLmRAPgdW1ys22PUMeYbapfDRaNCeiASSfXXAa5uELi6cZB1SKQmgyijLU9xzBTDaKjkMdvC9UjF",
  "key2": "4XNMQLczdktVDnxcdDWBR3sRyhKDSbQCM9WsJ2TDdBEKMkbpS5288kZY9xenTGZyqt4Fgn4dwXwAdueVBuWtyCBo",
  "key3": "5cam4fpVVDFhAqHSk6hFhL8fMunbqFAGVUd4jCjayN8KLE3kZSJki4HZSDHPVe4KYNUW2vJJmtNpDZo6wHfahXDa",
  "key4": "5hq9eBJSusUdT6B1156mEt8P4jQFFhKiGSzpnb88jbuu745unZQn2FQYxAnd2zrvhhk7fw5umeBSuxu9yi9aYkR9",
  "key5": "4VHybWdaMkXH5WPoJVqFCzX5TUQpfVdR3KtQMenuFoadQ7WqnSQG4Zoqy8QvxskMGrykuzBhE3q2rLpch27XUNxU",
  "key6": "5gPDXtqEPXZ3b5tFuiEP5ik77jMX7XGDefyst4dZTqcfBL7TvnGE9m8xQx4os4fc1bwZBWL1uzMN17tbL8PjZG8q",
  "key7": "5KZZ9V6dWPB5mEVqMVmZ1yqSd4kZUDnZ3Ls5WjP7RaZn5APBNEdmPi3gEHTWJUtKmTo3hoBcLdLXFRrX1pvw8qfM",
  "key8": "5u4ujo7yFqBEudXQrNpdBoFfdGoU9puPvEemfYc48Zg6Fyo3ZcfUdkTcGK4A3ZGy4qrJMsBrU7g78edfTZuL6EJS",
  "key9": "2nuxEeLG6sdVMdgao4AqHnHepbsVoc9Kz1Yrxta6qRMwR8G8x7DsfU8LqwcVuEGQUX3MunBthm87johiHai8N9G5",
  "key10": "4XaQYLzUTRNZHjRpEUNsJTN1A9MjNBbGjxatfBRDWYogvAQ74TqP96fcUJxtHUX16SYzkTBgtgkw2HcJNhUM9yVS",
  "key11": "295V21SThXvNe96EJ9WDPBoaW6krGEznehwCSHU8BjAFmjmVDSo33NjM13qhRPhStVtvJRrzBN93jxnfsB1vYbzn",
  "key12": "4c8TXwsvFPseBk9tfsnxRpWCs3QWyhVJmYHAH78AkApY8mqA35c7YxVHtDKHYHYjWzg7buS7djFaiJb1upyns9K1",
  "key13": "5zcs4LDAwKiMSwq1v9iA6gcypSfQXgYKUP2rENmZzsFPa5npEBfrrErMJnEUYH9urs5eQPUHaC3xpPtXHfmcQEZ9",
  "key14": "4TGXopFykrv35PtZPoPXMsoGABeEipWbSk37zV35d6ZDE1tafS9EfE9ZPAwu9ZuGNuvvaRGuLwazvD4fyL8teYqU",
  "key15": "CDEXrNfNjeAwgJnJbZzxiqWfQckK9KpUHj6Tmhq1MHcs1g34ZYtvh7J6nzS6dsVntQ9x7ytfeUpyqkPAmMbKGyZ",
  "key16": "5aYTrpcECHzsirnW9YmudxiXMWAKCtFt9VQ6EARNgfE3tCS3RyBXfYvKDGpJ3cKS15HQ7kU8kkZQaVEtEs5P8U7X",
  "key17": "4iodgsZeBjT9Gw7SYYDQny8cqBRuFKrPH5fAdyLvEyhryUavVrhqdiqPriT7PabsSSm68GzMkFzMa4pjuTbDPN9r",
  "key18": "5Hs7HZYLBBVUv3t1CeMAXnRTKtYw5yLCxMCJX5GXiPP4pqwiHJSnzdAyUpxTKnpVBzoNNtzbQMvBzM7ri6Ryy6RL",
  "key19": "3FSF6mNaWSJUwCXLtiUhAPJ7SuFf2o8GPa8i1CrAknkgNfJ6d1G5C2nHeVsC41aNhTHi1SCJJ1cjNv93AY3NgFQb",
  "key20": "52Bmjwg3EtTRTUti531AkMvcaq37gKKNJooTn7nPbJ61QzpBnBV5B9oAb2737vtMbv8opr2mKKNHgvBMJyUaFgZF",
  "key21": "5uKS4MYRSYzP237msYQt8dLgzGq5DynLbmk1gaPgtyPPS2SXAqEkxHeAwT858D2ekaTUYobPCmnj3cTUT2Ur3EMF",
  "key22": "5JJJfFcJCxcn73GxT7M7fSmS2RAxFUNtyqLSt46HbYnJSufGbs5DNAaHL7Rf5mMXF9pxGPFCFFRhoww42ExxfLNH",
  "key23": "4V2AkyhYGHp7Rp7PpeVdZN2yh9ApvPriZCtCXGKBRRvwUKMhrd2y3jAuXJRDLcJvM6bUpPza9X7v2dBtX7MmuhCW",
  "key24": "4GeYbiB6jhzxBXn6QFzw6A5gyKGY7B93m787fnhWk9z7QiAk4tnb16os6dCZzaFEVwWda2dZUCCAq3u9TbUVSEV",
  "key25": "4vp6NCwP1WiZZKxvF12BhfFg6mBjy9UGLtFFLS8mH6KnQw2J228SFhdj9vTUM35vxinxx5ZdKPhAFv1B885XR8W4",
  "key26": "24DbKa2briBADrScExiAQmbi4uDTUzcnuqnDm7c8Xapk64MGVe6HFi42RF8gro62sK1yn1NSkRF6ZcBYvaeivAHR",
  "key27": "3mQDGk2cSzwgXuDQiutL3Vakqneh5Ev251vHMtN3kdVqSp4yPMw5yQjidGkhNzN37d8WdPLaVt2CVTW4gTgHtz5J",
  "key28": "5P6xCdsTZAJfiPmhGiu8gkMoSskw5Kkw8mbWbUwR3MfC7MoRLoct3pSjbDZvgGrZUGokpZeRxNLWVY7gp1MFiEuu",
  "key29": "3DrFMzatMGjAZfBHpx1TLiZp4rgG6ayb69myiri7rZ1yhnQAtPuAW5MeEVr7QE7Em6QgLzckFBDdgwMEhgdipELY",
  "key30": "c9DKbdQmj9G3n5p4xMwzfZNLwd81saQdfXra81xrhcaLTAnWJHLyaL38gCCRNwbpGN1UqRW2np8hPWzroWCAhYT",
  "key31": "3R3Rzc7VzcJ8G8oDEPG237Lb6nKcupmW5SDnurYfK9e8GpWcSHZa9b572uf9SDPeRPgK9czSeWLSkNQgjQ3W38yW",
  "key32": "5bdBhwUd7GyG1bbdhL1L7UaAZ8p6d2N7kcBUEvTHtoa8EeKujNbBdmuyxDuwyCVTWRsip59bhN3LUXosj2GiQuh2",
  "key33": "Yr3MQJdrAX3k1XvUids2ViUbSPySX72DPdfACzPvA1hZNqtipPkUGyTmHqgHqZdhZaPgM5JWsfoY46xqSWeyv6Y",
  "key34": "4ucfXkWSPWJyicHfNnkYYknibKikHRZRNoRokqs8FtU9XLWPL2uA4WijpyHjtKm4aANd86iJ1YHqgJMn1HSGKnhu"
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
