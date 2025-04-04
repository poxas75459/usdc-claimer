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
    "5Ggez9WKKTTbtQ76fDNomWVhTKYasAKpcEkJe4mnwvzZUtZMCJJQaTcSHt5fCfAzoyq5qZ92WxmSVavYUjppdD7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55NnRdknjS4Qe2ooXWAJXAUWsaWEWxDXH2DfrehUWA9em9cVJF37tZ18zrqLU1wd7vWuiagTWYWu8BZE4PXGLoix",
  "key1": "2ZBNSGbrt66TEpxNG1QRjrcFgxd6sQQdw1ztMxKRL8a2YVoEgVPJzMUxErKfAUbgmNjd6PYB6YKjD8wE1m9oVa9E",
  "key2": "3WGmL8AyACzptqbujtdrTAsyt3ogs5esES71eUVY69TM2czJ9bvh5Uaq4u4bZtKfLsHZSFQ79h2GmqJReJBpUW75",
  "key3": "5fQPciUurLDq4S7C13YHQ3oH9ciMMU5J4hevDjV8Haj7khgApqAn4R25WfyAafdy3xKc1sf9EPNveFEbh6oqXe5z",
  "key4": "tmQdTuZicCAVDJepCzwj1989qF1aMPGmXHDbxMYnc5u5DwE9DPJu8pN9b8eXnGkuVsg9RSsjJaxmnGQqqwvCTqQ",
  "key5": "5Qb7ZLwGViFRUWkQCCCVShiYGx54mcbpfpQs7zuVy6wY4w5mNcWNdjboQDAHwhUbsCspWfzinVfqnswFc3xBjZLN",
  "key6": "5XSaavUVjPAuWiZE2cHstXYtz2BBDLkgGLZgZw52dJoh1SBifs4ipMgxV2UajyXYM1S2igjfverxH9XsLFGyzuYH",
  "key7": "3hNDDvDeHvhUgrqXeMFX8xq2ejv2bY17sguVPRk1hNYBnSZr67di5nMnFTXxacpBgZCL8SxjTrMNoeHNGZ753co9",
  "key8": "2CZi6wYt8Jh8Ae4UyWifjkWBBrpMm5JKrRRuqLeND8WK96R5E9PDHbh1uQSUzGZ8v2ra7h77VYPqFZ4LSNeVTY35",
  "key9": "LEZB2FpeGDUwHanB9j9o9MjAP9R3o9Vj338Qgzw1Ee5pnUhGxQYciv1Q6wEnf2QKspuQXMvrF9ruXc2wjqpJZ1B",
  "key10": "4FkWfEx7pagP1u6f9jmzmhZrBQA6ukmhg5bbX1Kmw5shb1vteJ6BvZTkCDFawoGFWSNVndxk614LxGahRRWnY6Kj",
  "key11": "2TE8bwqTkc4amMsJPcCPAcxfL1cacUqFQPpgSYma34K8vvcSyj43W6s21XQ5RBNrEf64WoUdxKuPZ5BXpe92874Z",
  "key12": "6UqK7CdGwi1RHhpCD36hyRC572N7u5v2XDeH6gs29eK7S1rjwwxydVeg8TbfiSa5rEcFPHNk34ubnXQgogqJ6uz",
  "key13": "3z2ywGuPqNDAdY1cPofHcQg8QrMR1vsHJcL9shBDtXr4M8KAbRfgdNmazK2YNUmHQPvc8DdncbNYXXzBxZitHfNv",
  "key14": "2CiziHHJzyXwLA6XN2oucaaTWoiu6kkApJMdxMRwqVFZHXxu3uSuBkMB6svk5WgZk9bhE8p12BNiHm46SQLaes1v",
  "key15": "NYr29DW1tQgT34W67KswfqngtkdGJVZ729t51kSKHVH1WyYGtmg4aD79Kwz7sSJWmz7JPoXmgLPei7WKBJRxXqF",
  "key16": "5iKAWrCK7BFZTbzU6ocnLsW9TsQftqynXhWyH19PkPK5eyYP32bVZE39YrwhJRGhLB75vVjEdL9uunic5trJGS3j",
  "key17": "TeJJf8QyUWC1CdTPBDP8nYiLUFFG1NSDFBVJb1Z1Guw9GgTQpCKoqDx8HFVd8MFdTuLESWcgq9qvCJHRP2MN4jh",
  "key18": "2EkmeVJ9eJefcmd5HWZL89v6dp4njgbbnysUgEnCC8Pg2siSvaoWe2w4gxXNTUEu7eR6Y4XTDCK2w52t1YTVQeJU",
  "key19": "52KAZdp37scKNQ8GssCN5HpMHr6bc65CUWrkckwLA19mQ6wrPVbW8qyo4M9y2N79oYY291xFGCF4jd4HrJL5EVc6",
  "key20": "5LYHfz9JzVPak2H3i6SEQRPk7DmHg8bJP1W2sZmZ3rvg6dNNM7ZC5uNUqVgdFfdz4DBxgFiT1KRLcdHxEMnhSz9j",
  "key21": "4ajy7eih78WqzsgA6gGqsUU4DMj1rqaNqp5ZApfiPvsGTJmdEuu6wGi6gazsNSH9dz6hYrKdFvgzKrBZ978cyC23",
  "key22": "2Cidwjk7VbRZCaMnUHczQc9tdPxg2VDMtWEETab2NpieCUu7tdJPHCsCxeLP6PzjjZSZZfrzgMevHts8Echxy4eo",
  "key23": "2y6ynvDoH3HiRRgrLVJQjPQtdWmWq1P3BbRqzWRxwQmKwFfCkiokvWWk6Teo3EbKdutNyXLRP1TEwss7Ss1yJVhM",
  "key24": "3nqPKAniS86FXJkoUUrBEe3SY7zeVYG72KzQcxA7eubf9tFqrfQAhCn3srpNoMyz3EQNXM1yhJNKcVenPDFZ48z3",
  "key25": "3xtP8mFXJAGfpRa6s2NdRUKaNcyNk2RWKjLjmyRyQx4kf3Wn92LiUMFbDL4LBDMEa1VTUYPYoHARVC473ZNh4DMw",
  "key26": "4hyHUAGLcRggqnJi2wJ9c4F2HWeXNKkkndL4UqtVW3btAa8wex3XeiZy8DRBRLtXG6ddqpasxoggje9fPRZvgCao",
  "key27": "66WXbdTPNVZmLhUqf8gcGjbpjejAPaLvNCF5j2EXBWyLmJAnRykz9T1mQHgPKJf2T3VTiuS1gJfsUFGLKhi1ifvo",
  "key28": "hTm5Bh6nH7qCG715dZHzqwTcF7CvFA6FYtpCKFunMRbwKzncuKCz9hvp9kkZUEXgXGosn6mJ7zxuhFW5fSffsbN",
  "key29": "124PT4TBRCvFDJBpMbxuBt2KW46oyQdo17yJ3neiNy2gxYhiQeyiGyP4z9M1DmRTSNHpAMRvtt6EFD54V3MRKHoh",
  "key30": "3NJXtSyKuR4mUYixZLHLC2t8keWrDBuK9bnSx17Hp7s22itJmbM73j541kMhp3peK5NcBhf9SGBzSPUsedmL9TwM",
  "key31": "7cYGTfxEZtxJKaLeHN3dazBTGmUePsnspNvvwKUaUPZGvnhxojMqZDXvkRfJfWedgnwsVj7wAjw8xcvLqTSApto",
  "key32": "4WUhACm8AGRcs6rPtrLp4xy5wY181ssdfPmaVRg5sEKPa1iYVrLgC6bNhTVA3eaXVVLHBuB3brjyGdar22SBsdgX",
  "key33": "5SBLo2JAjjVwxVxcM1zEvsXY9TC9rBqpxgP1jLcBiHrqaQJV4pSKb4uMXpMATEFGZxFrxj2FCdQysFB9b2CLJxoJ",
  "key34": "2ZzcyB4qoZGDgyU2wCL2449qavcS1YSEDWBGo38xXhd24nRMwTvV7p2xFagvH4DsLdCrMAnzEBB2vjZqZu9T1Pth"
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
