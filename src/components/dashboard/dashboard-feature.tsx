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
    "ie5BhdPc6V1ScqkFYoei1tRBxji8ov5kN9JYPt3qDNXYmyT4T1JJo5V4TUacoBaipCYh7xWA67Maa52n9NW871q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wnvq6RXPirWiKW5X8Rv9iJNHqaLqWJcnyCADzR8oUVbKCYFba4gUCGZeQbtjXJjQeEhV5sgyCeog5gzb736BtY3",
  "key1": "3ugk11CTStrkSn1rFddmt27axc1TV9K4itSxu76fCDsPNfhehWqG8YUzBvYtTNBFzyd9UdCg7Vzgiu5fBdZMh1bu",
  "key2": "2hKEr7Wf4sFiMxkpbGxecKAL73BCWTPQk6h1p1RxAjLAkS1KtBCS7hA4eZm1SfwcTtDBgVMzX1r6pJ8tFcPcXcXA",
  "key3": "TvnLhwtZudKSEy4CN5V93hCXS8xj77xAMHHm46JXTeJs3dga9hVA42w1VWE6qcHYLpDMmr3pKQM7DHcEN2kegko",
  "key4": "4NBfdHj89HExtzYUjZHPyXefXxeTsaJNU5RFHVeKE87JPdQ5giQR8atzTmF4XTqopRDUbbDyVtMcxzvxZwTXbpCN",
  "key5": "4RZtLTmoA3amXCcRbMB5evrKQP4WXDEtqc2ktN9fsXSQADBidrSo5EAJWBY2u6NeYiTkstuBUeo8nQQ97LjpZKEP",
  "key6": "1dFFprEEdm385y56qNycjrG3AuWj9LkEaMB943GEfkwMc43PyLGd5Exm1BomE4SeezbyP991tUZ7GXCDn9cdJKT",
  "key7": "2bEYszMNgJ9k6yMxuFeXeygDK4hxFJ4zcTFwT6QB7ZezR7bCxTBohTjGjU8KYZPdDW2WNd4sy8GnYuTkEqh8iGt5",
  "key8": "5pPDYhhoVgo9waN73oHbVaM8v5mNiXaLiVx9mf78W34yFN7Nrdwts5ZQteLdSViCPSLXQSqmmMKRXZ4FsiZmEP9G",
  "key9": "2KruuMrkx8LjVj3tkphUoBPkfKADivX6PvbJrxDKYjYU8Tb7QV6DiE4FLt475Cr9bRMw58AdrU86JUtj5KTLAd8Q",
  "key10": "3aU6xwYLvGvtSzXMcRcCKhoxAZURkV37ddyMXQ7p5vfDJAgWVYZJbUZtFK3ZmG71nd12TA2E4gra8rDS1yQKaS33",
  "key11": "jZ4Fm9PCMuip9ZzpCzQrqF71ParZu9Ang8kQXyCe5S4WgHY7DNYYTmwbA4hr3oEdVrk4QJBe3biHnh2bWNU3gpQ",
  "key12": "22QuFKm7J8ZGEJFfbzruQmcDMvyB5soFfdAenk9wo8efBjUPh4M8aaYSStMyScmbVhRVSgqPMnk7dyxtQ9DShmaa",
  "key13": "2WYK7regPhAJZ9RiQExYH5ENqNkuMsd9dWzUfGYiogRJ6bTgEo2LcTFXTsibd6KpUknBQnvBX49VLrKS16dup7ij",
  "key14": "2kZNFQgSKMjy6g8ar3bHUR5XL2fAYV4VJeR4cF1p3STAFGhR9G6GHZnur7DmKg6grygw8dnNch7CCcqACn2BcgAW",
  "key15": "59jZ7fpWdsyXPDeYCVSkuyVSL9w9zN6EdZPFfKEhJ1HqxfyWMsomfmoyje3ypRcdtWvbSCGx45uhyczuSKfrkngV",
  "key16": "545edupEUEr94s3HJsf3CtSHSN4miyNrdK8ouzhnJQXvrx1zhD4AJEjLEHWByyYwrV3VdT9swFPvfsBzhhwwYpSU",
  "key17": "37vjMS5thkVPVuTZjdQ8xV24MZW7jcQ98qnK1oLs1xivrEvLuoLXzfZD53nuJvpw8q7v5xBNCGaUmJtLsakR2EdU",
  "key18": "3zEMNXUZeLxHnxZPdMBVAg6Cwuk4h9JhmNx7mxyX5SDdeGX7HU8qoSjAwm7kqf9m5EPBeWa96KuYWYpuswNDxvU9",
  "key19": "3oZMYdE2nD8pAtemvGcqhZpczJtuL4UTewNocRbWhekcrSrWGp2UqLys7GEdno6HcuCKNfT9Bo9AKsh5GJqU54UG",
  "key20": "x9ioJjm5GmU8wfyCkWeDuxQyZpw2ZR7KTxvuvgF2nP7NTSNBJ9HESpndSUngJg5rpjt2PEwiVj1NGjeiGDjbNiN",
  "key21": "3Tm7egWNCLHyER5c28YxrQv9Gr5wrdQcwYGSaxgPVQpr8MTaUVLc2JQuGhX5PSnXRR2rck6GJ6G6NVHdukFVN9Nh",
  "key22": "xYgK3cJdATQeJyFBAnXJjVV1w2ooWGRCsg5z2jJTg1vaABEXAYdfHeL7AVchcLpNYrnjsxFVvJUkZqsCnLM9scf",
  "key23": "4cXWraPy6LsjNhAQPLtccQ3L7PHhxqa3oFhCoDXtbf4vuFwi9P5zahVDEdove3d2YBD3rcyNnptqvRPm4swwxP6S",
  "key24": "61yA9PTNNfax3bwr2XEJR4wZDDSgrfimqzyVpJvP4MUTM5bi1xwFD11MmWN72CWvffzMiMcQnzQZ1rZ1jPUzdML2",
  "key25": "439CM2FaGVZSyc6GrqpLn4Vn7WpCrnsjgNt9sB1K7MoDC27HaKCsQ3ExhFJ3kmTjktzN26AdPtrukAAUzMuA13GX",
  "key26": "83MPfmZMVD6cssXXwnYUvyzE8ekbHZgAx7cDCDNCha4Z2xvukmwuqgrDRn4hgoSayQXL24y44i6tUPCcBPbcoxw",
  "key27": "X1GUpRokKS1Bkp9wx24jU8LVBcvBtAfhZK2iBwomnN6vJbTZgm3mtr4eAscWEh1WYHP6hZ9XeDALEJ5N7hvp8p1",
  "key28": "5vyhmXb2qsjcoez5mq7MB5BGS29QtLgJiFA1ui1rUi47KPDtuYJzSJnETMEWtg8h2smQxoftZV2mRqzRrGjg3FKS",
  "key29": "2Qh7n34dvXvrr15bvcs7jcBZPqJs6z3EYdeoKt1e1b2P7DhbYUBLyjpoEQAs859kXXuiawqQqmxu41q2XnzXEDbP",
  "key30": "3vvPMXfMz8123TfyAQKbeLG8gUbKnajfmnRwmRNHgxxzsYmNhzojTs6JZirH6tK3aeWvsy6L5d9c9MjK2sfpE6SQ",
  "key31": "2rrjD2NHdm4jxsgVHeknFJzMhrCnNppBdLDroX4tGNrqkSWDSjEcFvjPzpyH8cTgVogU9vaQVb52V15hhRsb59gT",
  "key32": "4bNXCFobCKu8fJqNGWidsMm3gSkvT6mL7QbXkBtaZ7LjQaHbcfoE8z2fFDDbThJ42PJk5TrztUvbyEnhP2Jgdqwz",
  "key33": "4rnf4RNm3CqkXwjxFa1bqnGjRbwNTZPhJVnbGF4LCTXyhceYSqDiHjYDhFU12ZGssAKVk8NDgFvHbMqnouBrwQ49",
  "key34": "4hQZrepWdbyWjPZQq4oFMLKAfAeUMmZMDey4qeTr5zVcANZeWW8aC9H27YYvLrxiFqbNURaB7PyvNU5Dn6rFPWko",
  "key35": "2By2FX7R1HfSfwzMLi2CEwk4Zwg76hq1mFrzvGpAvxAJPsgnfqesu31YSjQykigrkGyUEVpHZDY3vkoDr37U78Wb",
  "key36": "4obe8i6k3e3aW7dXbsXLuST7zasXss5DtYiCy4ipZBrqf5k4jPt9LTKBZcMtPvrZgehoq7TWyvCAdmehcJTvNwtA",
  "key37": "4CDabjLWuVVchrcCgCQCBBVGesmWR2o1kRthWQre3je9h8okVDZ7nmAscyrcGnnLcaMnfVXzsBbiCdTm1HYWQnbr",
  "key38": "2XUKMi1i4KX4iTEbfwNbqSBvMzj3oSpMrCZHbFxwRiGGSP9hCzSW93pjk2xU6ZEz8jWDXftxEf44KoJ1kvrStFXR",
  "key39": "4bKVNJdpoZUn7PPdu2REwb3LyWUjZZmycNhLuoTCDFvPtwhrwtswHBknKHy7T6bpV9atoLAECKvNHbTP6rpwqoub",
  "key40": "BcD3WxwgXV7y5KYxodKvYHZ8ChBEwSedYEMzpDqMTXG91go3v2Buq1yRy71RLopxfLEuSVMeaoNSkXzc22ufFfM",
  "key41": "4AZMcBp3TSJsasgNJBwfzkx8PgB9KTJddpAnX18k38x3CexjwRC3cntmJRBsQ6j3d3cAjofGLopmcxQrU2nzEzXt",
  "key42": "5CYPTPU2sdZtvoPZQ6GvbXWvo8dR4wq3GkqnHcj7M4Hd4JYcKdnohnwERmZc53U5qJ5SxnJfCBQUyaXR9zKkGrbK",
  "key43": "bVzNQG2USVQ23fYXsk6euARV72Erz6qSRLdkXBZYiiu1FXa7H9pPJEMBPatYaZJbxnrABz1P8jjDuMkY6XQhW2B",
  "key44": "3k9ounXP7n5Fth5daMBR273yTtZUyjWVzak63SrCXos2R4r7m5hSMiHLHhMiJU4HPNE5VNvuJ8RvAHpgDUUPU45T",
  "key45": "5Cw7Z3N9qiBVTozFWLRPU2Mapr1rUkdVhVHqUya2PBN4LUhLuiagYmNCLpgRi9vTXoDeeGBXjTTu5Ze5Aj2tfbpQ",
  "key46": "3Fjs8fiyKCXagvktNdRQ5xvByCyJkxtjibGXJQY3SKLXMoNnhQ1jeWU2rUXrhcgN5GeWUoJdTDB8Q6cSeF61odTX",
  "key47": "3T7D1592KXU9KSxprLF59A9Svbh2XUBS5tE9MCVoMfT9Rxpmx7MH5FKTKwS9o7QD8oxy4Qgxi5ZdHB9nArUUwjMX",
  "key48": "3RQNmqiaXRr8xHmBTmCZEcvETTtbq2YMrtdkwTBoVHisybpZck4zFYkxj9t2DTb4QtzNL8yp6Mmps1cQbWky6kCV",
  "key49": "4VUtS6Jr3YWMi2joZy3jMweUENrujEDBA82NYUz9Auv37QbzwkDA3t5p8tWGbP8ThvuUNoPHDU1DNmRSWQTqizNa"
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
