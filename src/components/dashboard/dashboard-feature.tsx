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
    "3iVEUdQS1jd9H5nwoHiCHpMnNqcP1zq3He137LirQ5jxu2CMZxmpavDPwkmyjRGcreijuEnYZkt1XvV9ZYRkEKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R5i5DwYePo7JcLNqct54c6RxUC3mzuDwxCUgpoRj9DnwyMdvMozCTBhKpDhQhLaURLDiEmc2yXseg3pNG673Hjt",
  "key1": "GDmcH6b4eGZmPTUAWequos7Tt2vhVt9Y63wgSVgtQ4cXdGzCQr6yKtdL2DJrxQ9rdt1qLaFiqgr8ase5SPiDrGE",
  "key2": "2QQsyX8R6RFw1hMznKxf2J4uVFJFFyUFXEkuWgcaFMbDjCE6JTZPCFSEgs8wjoMcoByxdrtAC2DY3hLmhVVKdCYn",
  "key3": "3wdssGgtrJMLFJwdaVJRMoWsDmoQH1mAWQNYDWzjUvGzGXsQLS66KtdFPcuK3KdBqtMUpCXPpda1kDAXqgETie4d",
  "key4": "2d5Ys9yvRJS4cFvhRnnafLtQHVXRSnSwnML5oc75VHfjtdcivKWhxZtyxJohT6EqHam8FuUpQgBA87KG2RBpz4QY",
  "key5": "2VNhPmdJrEKwHRHzojrnWP1SGwqW8NLWM2Hs4VwodTJ8N8DXvrov6cVqtxGMMjsauquAp3AjsPykNLSbN7LYbN6y",
  "key6": "iX61DJUK5mEwNCGZGuHqTjV9JWskTYRp4cCjYimQ5ZKnw6CsvtvRDwPy8ixQThNVShzL13dHRxau4MqpuWP3tmY",
  "key7": "oaxDSDH4sZtRJ9ekUGWrCxVVsDY8yefRTcwdTQpM8WKd65SciDtRox2X4acKRwuuHQFBzKF6YJZETfpiRfPY2kB",
  "key8": "3F6fkdEfQxx7Q4oUmeN7kgjn7WWyaJyB4yuCt3Wkd18Q7bnznGsxkkWEyU9DzENYvZdnJeGAWGR3AkNh9ZTv8T8G",
  "key9": "2PFCxXSs9zuQ1EopYRGxj2dfquPUPb3DdcdVWiUAdmnFAzi26b6LzW698aPLGhkEfXpEYfj3V8tbw2KUCFemnJBi",
  "key10": "2jyqP2adjh2UgZNRPCvP3qvTdoJUZPzdVjECvcGbDVBWk6A9cUHFv5Wvy3vuVw7UizPBhhsWZEq3iLWrGZfd8i6r",
  "key11": "4GDBnfAyTNdPHZrrD8nnzg4ZKoXYPab1MsYbB7aJWo239CtcEAVXyajEzJQRG2qjk6ij7kWTKn8G7481uXfiajCT",
  "key12": "3ZqJKKx5ZmHUMVy6mq2zQG589DH9yG7E5Kpnh4t8kLXExkAmrzGCUQgbAC6WYodwqcvN5sQHcHXwPZDYEe5j84hN",
  "key13": "3xJRdewCE3wVD5NiVWr5EGhFNu7NFdbmtK6vb5WQa1VcNpR8YBbW1gdZFET1x36xeyaag8eR6Cq5vmAfuTUm726c",
  "key14": "2P9RphFWtvDpXdKX3TXMqduPSERFUEoy5ktCw2SrfnEGFgHxDC1rt6vjSzZP3n1RMtPiwouXyvUJLT4WDjv6qAL4",
  "key15": "3s7gS6K1Rv9qUyoXV56JJUNh7YFFTFp8KEgFGVUgaQSxmwzkpBV8FPXFugzzowpWSXP5bw6qPbzSuP9MNHZE22ea",
  "key16": "4m1T99RR79e6ArvSFKXT8JuMJ91TbcQi2rJrjB6byCEczv71A5CJepowa6xSZxXMPiiRkvvALoQatveBvCADwct4",
  "key17": "4PfnQbpTyqesMhGCT2Ca4zC6itegK8QDMvDR9CPrP93NB7XMNAc6smZJSSZiDtecqdMcL6KsxayEQu85eVUq3X3i",
  "key18": "4VRHiyHSKpQP5EQpCnGK2o7yVSfVUU1xf8XVzVzjUT648e98A3WWXxuFkJqv2ChvZsbFfF1iFTzXwvfuo7Q21Xwb",
  "key19": "4ZSYYCd8MjjcUVcekVUJHuhFbJsqfARva5qbcjSkjN3S8jpc2HL7iwkDXxRHTGAQA3z6i4wFNjoaWU3mJto9dsUR",
  "key20": "2k3DKZxFbAz8A6NRFGyvFdXYtrcSJixePmnrhuKNEsCzw9LGNn4fqdZqKuR9hzsJHj6kxsKAAPmWWkVNoX5GkHdi",
  "key21": "2UKJV6VhrPi3x82AAbw9kQYjT7NVgoUk9wQSNRMenD6NqqyDx38hvzRP3U1dUqPftJDxk7w1YfPfoD1eUNw2r5oJ",
  "key22": "4r4PRHusJfY9xBVWsEZUm5PWfayJRZ8hmczKwWTQtE8LCn6vJWwnnrZ4q36BoYsuD7XDrvqXJ66MZ1m6ovR1BpqU",
  "key23": "5CLeWa19c5pqZMiTGsWW7i6tVeaYpZG2WS9wrsacsJDmmeZzvmnVLDf5MQTk7Ff3d1p5fFVvt7J9FksRPDb93Ds9",
  "key24": "5XWp2NCAAKxdv5S3mrKnjbiePzHfehCTYAzjBhhMHuD18ypVBLvJ6iedGUNHQQ288FwTLZpp9EjsV7bUrEaNCRLM",
  "key25": "4cimED5SQX8YUAtkvrKiSFU6NVAps8Ubqak4GhVEB5uyYxcCvgqxv8jewWhGoNycj6KX9KwKwMfjzk4PPRf86mB8",
  "key26": "4mFzr5dxNEf2dwbfhx4fyYmynpp3veUzzkuaj7XB72sepPkQHcpew7HSX8eZyjM19EbZ2G6zZ6APr5oBos2BMisW",
  "key27": "3mTJppQhwqcDGumqtC2K2fG5dzAfAM5Js7mqQjoVbXn7kshGx1UuuSZidQHpcpKMmQfxScwxTuDkZdEREcBymWZ9",
  "key28": "4UBCZBZwVrnYfUjU13oayh1yEAP1dxfG1tM6XvKgMKT5mriV1y9tu1QQkVCXXeZTyVBNTqacj89Mqb3MQ8zn7esU",
  "key29": "f2udytPnikGuDwiDjiVFfXUbQ6deECcLTXFr7N39P1x4JGQMATFxrCHYHUybrfianS14DCVo16mJNRdmC4FVXDX",
  "key30": "3MLUsow1D5z3KrdB15d5pqZQU9qH7e5pRrQkzCrk9f56yGFwGBY2fEp4NQuuFhRa1cGHN9ESXm2UBWLwEioKhMzg",
  "key31": "5KTfpPkwGfYf4wXsCX1brpWyXU1VQLiEeACF2uvwMP9u6CHEcubn4Q46wBCEQ9XqB2T1vPpeHUeXZKWPtim9NUPC",
  "key32": "RGHPBz3WsRTjZRNRngJhUsrCNjRtnJucSNgbea9PhGAMUfeskzYYZhnj1L8bJQFnWtBHfACGqbCs9CiyYsfv1Ui",
  "key33": "2hc4Lk59ab1tDFAGFbPteLw9ptYGoor3oCE2yrH1v4Ro2fWUYEBWUW4BAKKqVUYXHqz3Zuria79RkWaTHei3bCaS",
  "key34": "83VpAD6Ai6yNvUHuCVrySwKCQ1rAvAFtyeK1Ndto6rTKZVDMjZwkJMikb2EFtzNJkQM2B1UmbfQ24AqE1HE1feQ",
  "key35": "o9mFS5nQoP3ytD8Ck3HTYGj7wdzkkd5yY1QVdpDvsodsRGqPMU3P1S5v8NueWPB2LHCEkTSKcNGB6V3UiZitdMJ",
  "key36": "3xHMnrJBMcKhyRrePVkNM2h818h6fqyrQXHGv4CfyrepwHXqDZepMc42R5WfPi1ZrH5yZvYJQ88VRkxxWQeLzTiB",
  "key37": "4r9hef2VMrDBeiM8xprV8aXaNFLTw5ej8sxUMvW8eiVD5WLoiLgJwHppjQHY9Pt8pH8QmPuHb2uqukmzvZ8rhudA",
  "key38": "5YhhSyn5cBptj1LwbPziVPBafkyBjAqAxqgPbwakx6j6bBx4jwV1U4iSGbAjxyyrThdiDiGAW8ywKZUv7Vpfbpum",
  "key39": "u5PK64uDMc66KewmdtChN3ZSvc7cPt7Giaho7uUbWH2SQiNWBZoUnQyitkHXhcDZRJVvSD9d2HMj4XNZEDKWnHx",
  "key40": "4nUnReMQgKhDqfEGzojtMEWZwLxBUYNWadVZWha7PxoqrBSoVCWKBNLqMah5GJ4hekRtbP2uXwbCSvcvN7eUgYtA",
  "key41": "5T4Vksn3rAjQHmAXsjJVmteTCdQxMporXHzHwdhDYJb8YPGiYe2jZDGP1jnHD7kiqxqgsiuERV5Tt9cAotpTeqh4",
  "key42": "2qBL9pqnnPQD5NXnV3bgMr9iBCffH9Z4x73LL3irtCNp1XfSATL7raXLjEmQRxPAEmbKty9rGz19GskpzQqDhfvH"
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
