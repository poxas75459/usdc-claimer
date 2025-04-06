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
    "2ADH11ojoSCYKDDcwsQejR9aPBoto6PLSgFCU8CaeTbCCVqPQ2FPFiWhngkrdHRer8RE48CctXTye72phj84gtzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wo5ALhzxy7MVS9eZJW3WX3eVDpsFRbCZgbWFZvQEpVQBcGTfQRsGBCmeucuodEi85JJTUX2mVK3TYA6Bcw7Pj1e",
  "key1": "SWonDuRRACrbfae3quNqBhRPfZAfkvZ7TXQKfueqZLLVRiAHRBVYXWb2WcuVwUpcZu27phuvKtgPZn7ZCnZ9dWm",
  "key2": "PvVua5Yuz6gVfHdXCtkeEi2CHF7BdxJ1r325ueLwBiJYSVWahvAfhMaiZTgeoXgatFSjXRGNezeneFp52KfnSVZ",
  "key3": "4esuiPDgVSnwc1rauFzfFJstt3yz4JDnG98Nh9aRmkMN49PTMnKDUSoiT8nRLxFc9KcbuaLtUo1Bry5RV1Z6pn9K",
  "key4": "2cSs3wgfWznmtBmaadmPV2KzcH99wiB1gqbqkPB3pXxgPW4b7Qx9m7qGZErzmmAqTwjfCWGBBE7xhgtiNNjvCK3z",
  "key5": "3DML7C1EPQkDXa9rMuyiVLWF9ZBw6NkKhDTbAhdHwo1kiunHbQ8TDLJmpyZJZ4UAzh67ce7v7tY7qtupZ1kueXCE",
  "key6": "4J3waaQ2NhGxodUAVcJtnV96iRKcLWnYa69JdFHpEsRt1nT5kq3ERGrjDkZDkgUxHrm9UyURQm7PsfpSpU8WzPHJ",
  "key7": "2t9HassskEyTpA67vYi2Dh2ugarN2DsM3ZqTA61z1CTG9pEsRgJqgAL8CG4DLcYCHE6sCQCoL2twvnGPUs17y8TU",
  "key8": "552hLiTVXxQ9ipnSCTDzGVxa7T5F3t3ckwbnnKKX1sTTFzXJaKc47WNL2oAoTs4cpuojj5Pv8s2of6Nzi2p9LLSA",
  "key9": "65CymhqEEtkEtQFfFqfDUr4khM77nkQDBzZkeKcUdUHgmrLK4Daro2Ww8NeaAW1NuSqkE5CSfAkwFw8hwxJNGHVK",
  "key10": "3tkjA17QW3nykpUmXwcGKHzSyWthJ7Xf8v1TMxC7qKAGkDMa1o9KKkzXwKp76VLX7QCwFct6M2aENCYHLjCwsTnM",
  "key11": "2J67PYkEypma5q9rqm8fCGkWp8v395UpRyqXF9cra5UhQaFkmruDJxE1SykHzNCwj2nBw5J2ZyfTyzud42zqdjd8",
  "key12": "5peGjHtsS5QYjGNXimvzvxrfadXAsxd4dShgmF8qpdP165oJrh5P2SqaDHWkVq3jbkXogfUMbZoQYyLxZcnavNcD",
  "key13": "eGthw3LZHNWKZ4H2vG9hqCSSvS3Gr6ggMNKu7zcpXrd6aQvyWb9qieoeKuZQEdmwhrg1bPxQVrJY75nqMPqw5sp",
  "key14": "3ycMgYgTNmKDHNs3SAGd6jojoQo5gX3uwjmXV6AjhtvvPkECj7v73ET5VzfkNmsE7WVkZt4wgnoCS7koJeeiXowv",
  "key15": "51kahKKEij4zzD4vyhcLpKpHQ7AWXzftTTemFJS2Br7S1PwBMQng9WCfMbne8J6TrtZ4NzAX65Jh8SrAtVAr7NdQ",
  "key16": "5ksBAYbx9ss6w7YkU7aEdKh6BU9hx4GsDMDkwkaR2cnuv5HVxwG5d6c8Dqiao4eE2BLngDi4buweSVw8HYWaS8zo",
  "key17": "54EBXqp2u716QLip8pxzh6FFzMdZGwbpDMZTknRFe54rC6s7SL3A2opgfvUf6NqvhASQ8XbApdA6xA5tmT4USbdq",
  "key18": "5ptvpLxf2Lh7L5GexQUpEYAbfsFHJyPqv9yut3vjBgHCWaESSWCtQQar8gay55VATszAyJZoSLRPGwyfxqCxWkqw",
  "key19": "bjbPzv7F1TCy27ZFhUKUrX319xoMv45vCFw9Pu1YTBG9LZo8ejDy7ugJ8kHWVJTapGRKa4ntZS6eNthtzMTG3j6",
  "key20": "2zEtmjE2BdSWjVYym3eRbxKi5K9WdV3m1GeHdgErWKtUzfLrLf8627m3FUymMjLdXkjc77ovqV4Q1kmmXY9YSV6v",
  "key21": "45AoYN8hqCdenEzeNr2SgMNHUQzS772Eitq6GhFRNtpDQbXzb6KBY3AenW5mwhoE3tUrn34RGbvnbC3QWqvRageu",
  "key22": "66N3595PsG43wSLyMD4Pwu299Dfi6gpdF7g4qB1PgfPtB6RHGUamQShQbxQWH4pVLQ61wCBB59LEXxdTbrxqqLvx",
  "key23": "5N8bVv2Dm3HLwVaK5ENt6MkWUsQPFR2QGJgU5MEacC5RXRKw4DUKHN4A9MxatYfbfLJHULezqAPRiBRfJfbNArHE",
  "key24": "bgcu8VBDej1Yg3pofUyAbjtitPydMT5adVnbNMSyfRk8YMGt8A97or51LMKh1DTZgy7AHnXY3JHZaFjiafYrip3",
  "key25": "2x9Yt3aLbSBgTRYgJs7uTug3sABo4mnWxrHmL3dFpwr9FUCAccQay5634R7Ds7rABs3JsSCd67Wqc6czgxPcq7nm",
  "key26": "2B6izTmR5grdSPRySRTBJJr8MVYMhQEHawnQCcUoQNBKn3WnGx5V2NYDvaw5cDcMkZ6QpdAHXMSuayS2TcFm78jB",
  "key27": "2YZCodRGZY4DP2XXCvfozWtwxh3ixqLto3QqeuEfAnRayPoqepqVMweFpQWuwCmFEU8VmDRbdCLWDw42d8YK8mxh",
  "key28": "2HoPmX9QzrTLis1hfsFnGDEYAESbkxKHLF8TyU4Yob9Wt7F5MMt7utjipZEDVQ5zb1cdViZyAmE7jf7SxyJJ8RUQ",
  "key29": "5Jem14Tm8QeyyTS1pKWZdkBGdSEG3vU26nRfGQHcHMQCTYZSwDUWwSQ7MEBgJHViZ94u7S5FaxoR3y3iWrpvANW5",
  "key30": "4euaaAGSmEz66VG4PvE68N9kXwvE5NtiHVdhKFM3oGkGGm6QRXkyfAwYURrCD172ccpM23jg2pjK4VoVBW2iRRXB",
  "key31": "2NdkWyr8qsCFWKeLk4mL9rjAY44DAS4GVwo15PToHWedzs7RyVCQzFPc5BCFQgC3ABsY6TtJrV4qXSeryc5ckHSG",
  "key32": "2nVezZzRPTs2CXeneuNFboqy37uL5NELBNT3BuG3snWvXskn3YgMiRJ9UwKwbscxgKHh5srArc1jpBodGXEzp9LM",
  "key33": "5rmB47R6rTCu4ZyFx2vbRrGcLPV2asXAkidjKRMC14UnBVwN3tHDCuAXTz2x3vGh6pBnA4RTGSajDPNGR35tvx1r",
  "key34": "3WZpPFLVo37zWd5hEPgNWLtGJMbMe881wVxt1RyHGAtKyEHEaYhDVXbkrgKt2GXN4KKS2u9FCNTQrpjLpSxzPZX3",
  "key35": "232eJq52i77WWDkAV5DamhLyatJwhurDX77ZsiZBcUNF6jufhMcMM146hCm4vRPXU53RKpiMtRsjgGi5yJzcMHEz",
  "key36": "3h1DcAQu1miPNKHdSjduwi19woz5niwW5oMenQxjxK6dvZXVV1oSEqMgdC5DfSRvjDMYQmYZZYcMgY2CuMQ7f9Fr",
  "key37": "2m7AEMh2VMf9U3wbKVfaiyCD5m61AQauKqD1FzLZhrS38rATur5J5VvYB3Bsv5AUxmTVGWwgFRKTwnwiBpZzNSUR",
  "key38": "5SUMCQCty1fQyEXSmz1HPZ8GNGQWYeVNt1MeFR3LQRQdMyJXw2Fc9wF7hHTQWCvs1LtDNjYMDMmN55ckJQPy7grN",
  "key39": "3TxbUDbRbGj2r52o8G4KjypX93DbqpyN1AjhoEqKS9LNfCfkMrXANtUiyeK6nz4Zw3WvEMCPWGx4akvqgjDmqabM",
  "key40": "3cwuHozKYr5mx88Tzfny1RpDRec7q1Fqqs46pxBdwVZHdPaPRwieZgMAgGikmL1RFUSqaqiCYiLrZwr5RvRtKvdp",
  "key41": "ziuyMCa9NdHRDkQJtsy6Ww4JEFsG25mWDUvX4NEz5j3q9NHkhNmzkvYMnZBn5H4Ka8mCfV2XPQ9gA2hg8iYBpxg",
  "key42": "M6PvSypEWM8Zk83FqeWFfRTK37UUAzpW9atJJUH6Ajiz68efB6gjaewt5RbsYLf8qiz4bu1nvnFnvgH23BnqGSu",
  "key43": "62EZsPRNZQmyH9tRGXF46RMEafap1kRjkeGWAoHCJvHdpM9NGxNGCoPWXBNjvSkXZqzTT69hikRdfhaj9WNfrXDc",
  "key44": "3NaUhjWqenUx4T9HeR1RJPDYykMkNyex7jVgzWCKjeBvZKDK8vJiWZ71V4NCwUnZwDDNvAKV3cVU7SoVPmvXaU4y"
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
