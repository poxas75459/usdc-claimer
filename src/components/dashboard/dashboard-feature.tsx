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
    "29XG9WhSNxo6ZzwpqNuZMHDBaYrrhmhMbrtx4tvdtmppoLZgteyPPku8BSokuzPECinQYJ75tigqr3eacFiuUQLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KKwcWYxVRrcKusvxtoPUKd3c7iTbRdYhuuACc9SqKhDFPuDxC4LtmGX233cvTR7Y83BByU39ZvQgn83uTjcSHLs",
  "key1": "4SfJjDiKxZL2NSQBoajWLtT2hdbu894tCPMk6CF4TfHAuFcAPuK3miCMVCLu9gad3UfkiDB4CqAVwsB9spU9cy9N",
  "key2": "K6Lxi5PJ4wvebYiPJmFfjD2625CitwXMg4BUCmxymdav2A3MBUTvALUWJBmpZcWkrhc4WG7hBk9zbKLUiML2c1N",
  "key3": "31ZztNX6rm65d56Zt1nAY6zJbjcr5Giz5w9KLkxavxTupfVHcwCpx1vmSmZ693sN8hVQFmZW9eFYb2TpNNrMfvX9",
  "key4": "1y7opL9AHTmmWmnfvGNPiPBz28w5HhBqFMnzYaQXZUo92y8igVE9VbRawxQi3B69Jc2dAovqMuVwYjqcGxz4pmq",
  "key5": "4LVzt6FhtQ5QA2xrcRS4mDt2dHzc7jFCiFqpD9WgR3NMP3FmdFmH2pL4Lw2MUGjtocpVkeskZwtMTZ3nQmcx6jhN",
  "key6": "35f3VjDD9Xnkh7DccnFv2sb1PimyaymEPrC7GmDwvwun2FeV8DVUg18ondLWAN4GEtwUN3QuFdu1LnsfxuY2VPaN",
  "key7": "2ZKnh7RRJxtJhMgGf5yWpXihVec1tHUZxnSm99ConszN9UWLiBJ1khoyMmC3zeXbpZCrAFiihrgA46mE8naPG4c6",
  "key8": "H6ZFaLaKQ52WD6Tsf6m8SjereL5fKs2f6Ew74m6GoQ9LUj3X1Lmq17QqE58sFPsKdES7f5mVuJaY5kwhrGUsbQW",
  "key9": "39XTH6ETFjTiJdWa3jhvmiif5MdMSykqnbKXv89o3rhuVUKCCUydVX6fk87Fobxd6MsSiUAy1krqzfToNie9gpxg",
  "key10": "4fQa6463TttasLTRCGn4AgBRpneC4pG2uCPsY7qDNrXnmQFuYwk4s6ni5FV4agmqTC1stJKkXx9Wrvf6c8aEf741",
  "key11": "szHcqVDEePhqseTRW9atmKUuNy5KMtDArG7vMfVmZqpLYEGmSRToTFZK6ep9CCErvuEK6xCaVnaQoj1Shtyn8y9",
  "key12": "4KtpWv5uWC15yYWWsNPtwskb9LJJ6ZxJoEuebhaJMoSPmm1jtfZim7zXzzquWUysUynuBicDoJYC8GiNqRmCMFnf",
  "key13": "jh9Lc12KRJ5MF9YyRYGCEFNtEXqEKGdrU5ja1ZUep7YHkbJozKNmBUx3B1Bbz5TnE4us2UA1PecideGGh4X5DNR",
  "key14": "3ip24pdrtZcuKoiGkMpFQUo8BKZ6o2n5Sd45Q6ryrNVR9fv1tpxf3yFHsuf6EWHuUsbyaGCdsVGoPnC7Poy7H8bB",
  "key15": "4S6FsHC1M1KuzQxYv5uL6hB2TigyMf2yxG8zQPTF7T5SSh5LQhXg7uV3UEvyPSiM7qvKt1GnwL8bQiuDJPJhTbzc",
  "key16": "66QKf3P7kstjKPSEkywkBG2K3QyiYqHX4tcmQefzUee1ueLRETGWAWT2Cdq2a2v7Z5BkuCjwZ3kaYEwRCdG1RiMC",
  "key17": "3Jjqqxju5KpFnY3eCNFWUWXyEagzvPeueA1gUhuWdiryeZt1p16KMAE7Ln5AyyKUW82F6KVd53ayigi2qkovSLDq",
  "key18": "4Tfa7V3LSjgRtAzq95Uc15BszQmPUZUP2W1mnkEAC8tCXB8YHuCiN1zQbqz3VDNRi1BYb1Y5eocqVAexjQLySuE9",
  "key19": "2miyitzsP1P5Spvh41DiciWHokHTg9uyPKc7fwYbJVoMdSU6nVt87BztvewS95cA82TvRFEJAUhmNVYLUZDni9MW",
  "key20": "55PV2RircFeazybTqAcSV692rX4cxfx2oRFPYqgp14k21JEeSuFqxD2qVBsdSfFBbizeNbxR7wYbg8MSjHZjTbK2",
  "key21": "4t5cETpJBSri7HudJYCgrkitiL4SQpLvPsVJxWWDusUjjBe8psemWpLFVGgBguc35jLTPLwhEHDp8ybNEtr2BRzh",
  "key22": "2TUUdoERJcfqk8QaBxaeXp4jmMYoYQPAYqrSJDBU5apT6socnf42mdes8H6yD3rL5SQaN6MFPGqmPm2dCsjfiR4D",
  "key23": "58Feo4vbziEpRrjRBH7vQbGVH5T2JQQ8WcuEFAG4FDRPR2nJp9ewkpGW8rkMexPgVAmWhhdLuY2avwtXzw9F1jhz",
  "key24": "2r9AmxzsTeVY79aKPUZdFNybMdvAiLEY3fHJGc4b7RtoHp7ApJJeojqGRMX1PKjssF2WLVVeGPAzKG57FG1pBXKH",
  "key25": "3vGKdfQWpYe3GP2dao7Qy27dexujufNADbiuHwYXqznNNaVLd1yNeEDVuaAQ4f17fih7AAgDJGEeqWo2mATM32SP",
  "key26": "5znfJHeyW8L7TAbVDop238aJ6MhCoSV8FWiJfqHaa4KrXcq2cHA7ymTi34ZozV5k4UB9pyJcAj8KzJrzU7NpPeod",
  "key27": "gAyrm2i5WL73cB9vpwGBMrYWdYX96VMoRgz5Norx7rLpeYsMGXEVtGk2p4FuCtvXkNNGoRyBqWZ5nzsh4ZL1avS",
  "key28": "5LkgxX6DUGJvNprR71fktu13pCikhfC1ibwaxjDDFxj83Su18p5pQFSk3SXPhah34zZt583QqES3xsLQz9FNd47m",
  "key29": "3VDZVpCgW28X8P6CFpNMmc4TidQHrozmdkT6g97vqsqwJU3ehBx9NbdtEJcE4TC9RCAU6xDjv8DYCtG63UoE1Ma5",
  "key30": "4ho4r3rdcBoDLaPhq1YBMza7SnSikSesp9owTsDdbj1yH2knfexRnY3WVGcesq2YNniC11u3SEdnwndyzq4mCWbb",
  "key31": "27MLyUHCJPjpcRGyBMFVCtLZwxoxV9ghygJVBdddQv1KEgvYFopHNdbg9pq6EnCSj4fco5nxmLHvzZ52VzT4wMAL",
  "key32": "QFB6hMJDNsKkggqpDWtcU6Ky7bLtb5RMQwJNoa9i2N1hqPPW3ryhPpYXdgtc2J4mCxtU1Tu5piTQxk9bLJV5F8H",
  "key33": "3WfndSBMfzBiwhZmdHj9P2wdowXNyYtA3qD7XAUhkJJREVvS6i6ZYV6gsmCRhTAkoqNispJTy4rsR2QB82NxBvQd",
  "key34": "RfPEW1rpcF8rHP6uUcVLrgKRGqPdvkeUhCpFAWVZhDjcH83mYdw6Zr15aSxzBMfqtqVezFAqJEqEiJTZjjxpLpT",
  "key35": "3ABQwpKwiN9faS8u8zdEqeuiGYMb3MpW7S7FRirLWEj4EZ1NucmnjBS6NrhwnxvNuoew67WhfXvP32E9MYnKE1bF",
  "key36": "2aKbzsrpgLNbk65gangRc8n8rowUA1dj78qTvqkuqVmJHM7wCJFxT8jMZDxhcodky48QRBgsqiFtvkWYeFKNKv3c",
  "key37": "5XzpCAJQQt2K1ggNp8Gxe6TKX2wMPuS5x2XV2DMHhiagpatGuaKoSLLZvCfaYYUe3AukqMcj3QGZTzeW8R3EX16M",
  "key38": "NfnTUZ9K6Q3frng7bjYiq4ioAv5NmBWELQAi1ubUsUoC9ERPcDXjtr7wboHBEHdVQQCSo98GSqDtB4aWtiF9kqp",
  "key39": "3tEPUCY39KcoSRfMgEbqLErxYVuyyPWM3a2ngWp26UkEX5FJcbfUib1S1MWtQyWSSRTZiwKhwkpegszHsbiBX7Cq",
  "key40": "4rr7ARsGkDktex13ocjiFCqXxGNxkEzEn1zUbofxkL7GcpL4dvbAjfzoFaXXY55ET8XEBYCdbaFPKyJb26eafk18",
  "key41": "3dmppG6LoEPgrTxvtAqvdtLqAymX6HpKy47tTTB9iT8DAqxEyqYQQ1dbdeTVqBGoRAHXw8xHHenNmT1Q4X5Y8qRY",
  "key42": "ES2jTywrS2wSTAPubw4BU96CtHzgci4AsqC9WVsi5oJAPAJr7pg8fAYuuKJRaBv9aEjc2wcJWQDRCq5TcPdaKe5",
  "key43": "3AFq5QFn8uutc7TRUx44E7vZuqKuDZ4gyBN3WErNiYbdB3oVpYBGQhy5a1uDToVDD2cHnr6EUsxPKzKFQtDEriTU",
  "key44": "2bW49rBDEYSpJGF8DXP9nzjq7tm7Up4Sr6Rn7ctDPCE5eDp5q9kCAnSib3woFhSQGGDscBTiJkuxsFviy8xpTjGv",
  "key45": "5zvfBkvHx3e12YZkceU2RSb8zut2KXtKMZYFhKKFjgE6E6kHYmDH3c3NVdmAU46gnQPSNzb5BVBbZgfFwPMkfGoZ"
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
