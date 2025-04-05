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
    "5aGL2fpCmztnjcD9Avq2nuuRcNLQ3vqMhH7mRPSQjBaQt9aocBQdTcHTuA74s8J3Tz5GNb7HABqsKnLBJe6n9qKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46uqiqv64vobGFRD6JR5orPNmgysHcUHnxcqvsEVKJTvM4mdwx3ziMscjZJ9rihSbgKhM9G6jBMR1f4rdfvtDqrw",
  "key1": "4ybrdUFtc59RSDnvjNtvTSoX7SJDgjVMrXR4Tcmk31GNBwLh5wYCHkc3WsKD9ZypnMoxygWVBQoyidyMMUSG53Cd",
  "key2": "48c4h79ymqNWxqCAg8iECL1FzAgF2i1ZTZJGQXw4SHDN2ruxr6khFEH7wK9PBzz2hvJAwAe1iuNEwM784LrHjbCU",
  "key3": "2ac9ZnkG3mT6TQirPCVgj8q2pzVsapxjZuy7vh9V1dup4DmXHVgEC4i3KNQqEFJi3LoRVf9F3qTrrcPPnNvx1eMf",
  "key4": "2PuLBfAFfKiKjSk5StjJz8HE7xKNKpEmsBhFWzoByYTjuCQG6bpps2TxFuZUSunnBxxRmaJnDAkfAN8m5pjc6zMW",
  "key5": "3Pg32qqdWs8HVGLYPHRa22qWJgshs2msuNdS2SZcTerAbYZFrYsPW5g61ixDaVVMgZZPyPL9q15K8DBSJsWZB5V",
  "key6": "4DjaZpiiRH1J84msdXW5TDKKboBDq4FdvBZdJHgUo11YALzYuu1oqHyY2ApKHGSyMB9qp5BkSvySyY2A9JEXaKr1",
  "key7": "5cP2vfFTCFb23K6GLuKD1Gh9pg4FLdsPGoaskgSP4SN4uPPeDgyC3KTqUQj3yeBroxJU98bfzA714CXiFasE5Bjt",
  "key8": "5rtXEME6HpLWnfte9iQ8agkYNjrCYwHf1p2PQFzQr2N5wbLjYrT3CsEjWX2wkgkoJWyyNPnduU3zjhGNJ7G3cXCk",
  "key9": "3Y1ALkQwdyycicZrmuVgfSjHZCR8cSo3nxFhtuABUXJBZVMkEtp41FUyDW6jvCdHaW4o89A5ebQHLmGg1NwmXwSc",
  "key10": "2LLTkz7MCbGzDXTnEuCHuqvTz786Qd1aeRbA9ioRoow51vFWyvNa48rYEfvrRTQvmvt5dvLBgkCHjhNCH8ZEBT8H",
  "key11": "2SjdfnHz4iisY7M6xQ4Rxe6ZqRWFusux3ZAKktqiQggRFNYdDHg8spbEK97gY9czHYTVewubEyCcRvHFLaW8e8VH",
  "key12": "i4Aayzt52Bwaq616kZMuNd2ca73xxbVk4niUHcazsTF1H4rg7SNjTrQPAnmbu1PdWwJXoMoid7iSGS1WN3XC6Ng",
  "key13": "52huRYZX4sKf9YEyiTbQUYKuaroxqXCQ6BvRGec4oEYGaLYmd1P1jNdZRFhcSKDPHChX9MxveojDQKWbBvvn6mko",
  "key14": "4Pve6bKhQGaNEkjmvpQR1SpxY2qhdPYyPVK34c5fSD3pJiZgtZxmUHYiK6HCWTtibVfZhTJbC91Nv87BfBKnpr2t",
  "key15": "3dVLjZVbSujL6wQiRQQaaeQraYqqKP9DrpgaTuryv34mimZKhqMmnTNZcBNWDWRy5nsbL8AhoTReiesTrjjDudZD",
  "key16": "36sA5PBYq8FQQuQBrVnCYr7pt3jDCZPj7z7njJxtnMv1XSUR15C7SVYRRRTHrAMA8nmd5eYjaFDm2F4DrSeQp3VH",
  "key17": "Ti57yMuKPyhKk2qUf37bBnrLzePQCV71MqVHomJVpLZTRxB6x7jR6U3iGmii3B69LSKhzyqNSWwkprFwQ7Uk54k",
  "key18": "2WAy1PwDtV2inn7rw64uFiDomPVMeLLDGwo95DF9WZ95TebpYwVhhi5yTDnZDaQtzRWqWUXr3Q1HUWBRmdyJRxbG",
  "key19": "5Nafvsd5ZaK2wFkduSUbnTpw9Lrf3RyTbA4dnr8V9ZV9evxJSmBtJhSDtucVtMQCMJXCn3KkjrACMBL8X39SKPgx",
  "key20": "48jRLHSpuJjqmMgiBajTJyApKNrF3mxdaxA67cdzBSzWB4HVYsYvmXcDerm8jbknxKAYcAka9oo8hLHgrvUEq4v",
  "key21": "5mzuCTMbZid1ynAEtjNSPX13vHXJf6BMPfc6asqgPv8sye2eyHR87UezzHchze7CDXGjmX5AFzit44d52yJhGDsj",
  "key22": "45Gor3uHqcfyVS3b8YG3XdAgu8Bt1Yko8tAyh7W4SPNQLYed3no4PDHyDTPSXsJ36RSM3WDkiEFgZmkC1v865s5B",
  "key23": "5KxqZ41ypjT1iu4QMvyh1tSByV7KHCfKW74AFH9xKTsVWkyNAStynrs9Cmdkfx59FP9TNGNdWe4xZht3HeYMfmAS",
  "key24": "2MpEUg9bKaAqeUM2DNmRXhotwAHpTjsymUPrgVJ59wm5m9sj2n94LxyPu22mejGBUYDssktp71rsq9DW21JQFZ8Z",
  "key25": "5t3pKn1gt7cJ84BaNeLeGwNhv1Fx45LA98VBMNuwQTq64sPJJQZE33hWmsZNKenRa6D7vUBkdsQiT8FmsUrLPn3Z",
  "key26": "4pknLSadokAQvjWbFUnfvAx3t6Jc4FwmVG2yCQXwhc9jkhuAUcMc6RuorGJfdpVQqjfZNQ9fXP29T1v72fQx28M3",
  "key27": "5A3YfVBmLy39Pgv7pYrejb1fARVpLkapSzGZWfbFNGxtH2tDachcUJEjfNKJHTM1aj1EjXwYFaaxchfddmhcamBq",
  "key28": "5Jeipwpq7D2ezaAiRbfxqQmRXHgAupRgdQVeAvTRETrA1PWdXSdNLaNbiLj4Cy2Wgg1FLoBpjSN775YQyY6PUhSi"
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
