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
    "5o8HKSSkWkcVLAQXJagSwNWjHeqABBs2QMhPgPXyYPKbZcEvJkYvY5FJPVyFSLuoMWbKxNJSMRV3sW7vKmYZC97J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pPDL2EALAD4kqHCVAK9rZAonMiqaytLuf7GwWYgFDP2JLMJJYGV1hmRuFvbCW6g6oaVKEyuqRpZQqfHoGSgprgv",
  "key1": "2MZpsUBbm6xQq83B6gaw9pdVcjVpwa28Qjmj7Rzgx9fTD5VVsGtHecTC9KCdE5dYBLG4PtY9UAbhpuR5nb4F85m2",
  "key2": "3Yxabh3yq2Pwtw2c89mRfT5eHobcUt6FMoaemMH965wfYpy8Heojs7MULwrvXMRwvQteRi6BJUuZa7uR8gm2dhJn",
  "key3": "52Ebr17mhsyJHQBtjSx2U1kQVhGCKtsA8Cn37cNpDBNGk4bJeayvA7ZupuLNrAGLhGuiLxSwn8tziWWxGngAd753",
  "key4": "a7BaqFtdcBgfibSHQ4t5mkFNQaAp2jr31oRJunjUvP27g9ksMaVGf8B7KrtYCxLaZDy67ZqUMPWcByzWXS6QHeR",
  "key5": "39JkFNUskqGVQ8NKecSqAP5EcvM7V19QPpT3xy4isQNqFhcsMGEYQPo54gq3LGKnYa6hgvTyfNFcVX5agCKSNKtd",
  "key6": "48qrRWAW4mY6Eg97LXBkvu4bpWCVYrAJA3sv1FExSownnPqQXkZorMydhoG2R4BdAAwR2VYK9sVupPVGwZMqQowq",
  "key7": "4psNDiDbsbEz1MtoNoaEJpuDVgQGfSCzx6h46espLoyZBoFptn15z1CFcxpji6bCaDW12AgViXen4QgYVqn1dzku",
  "key8": "4cYcH8bkJbrt8jXvm48xTDwptmNZCmVbZh1qbdNcvS9XGtEUoYfFmNq8xUcoZUqWwYRiSLfBqVLNH3jAhhfyLSdv",
  "key9": "5Me1RiDwQTYzGvx19gDrNFoJ62WYEh3apx49XX7NhQFebZCthmcqzPDGJaNGiYibuXhk8PnQ8QSquYs8s6nQzkmT",
  "key10": "2d9tV7uPsoSPV7D3nUHs16N5XM4xaCX2ooLboJzH5oTcE3qN11gjGgLmuWtPR7ygCuU4x3TT289rYRJGMhRXBLf6",
  "key11": "5dhmdd9XebRBRmLJyGZKhf4pAA7FxcuqNeDTQguXGkVfRo2vhMApRaTUimujEApC8ER6QeFCxj1bJ7HbggGdLGDQ",
  "key12": "3ZXp2mBoinYB12tAcPC3eruaKPFq6BaSMSJa16MJX3QWR2CwoqhY9RzngytThjuNcGuXHgeJx4tgWuyJuMJygVBp",
  "key13": "417M1ftTy639BdTUgzrE1jwBz4BeZ47sQedo1J3dFvngAh3FHXD7G3FJHSmQt2WDJygo6re2xgoV4Re2puCv5N5F",
  "key14": "67iqbHogQgsz8qZhHhKtJm2V7wVmyWXiJwjwu1hcm1CMPzC6Hj35pRXYCZiJ7ygWuVXUm41PcJeUH4Zuqvksk7My",
  "key15": "5FDC8EdgYr8mHTqYxaLhkEFeaADYfDFSr7tAL5dQeK3sQNLTYBkcSWKgMr9N5dssQsE2pXKqd9Tuu8CciC6UjQwZ",
  "key16": "27hPEKHYZJwDjE3jEANoMTrnPMBS92imzqUzwm5SgFX5ZiCH4W3gAptkTTjhakRDSvqqQR7DU4kZnZeEk1EQSNc7",
  "key17": "4z9AjC6vdNVE5s5G57HbM517KUte7BRh1FgFVMehKBRVc1k4NyeUTj9wQxbx3yxJZgbBYieDJvrL6dWjRvbbcvU4",
  "key18": "5zZrh5HdESpxjE4dLF8EpeXMa2X6bBtrrW8PjRJfEoLwG5b9ENrHeLR8Qxeo8hkTzrGNhVrBPqeEHPXKEw1Y27et",
  "key19": "2KYyqTbatZtvtKi3vnXTcVFMMfwNS6Rf9g3QJBMUoJ98rWosVH345ZZkK1QDCy4FRLwKXnenVc5yF1w1RD3qZ2Hy",
  "key20": "eoFQAoojz6jxfoYMGwBkQujryHPXi8pmZ6cDxvf6ay1kCjMtrz96KUh7vFGMKJ4HSEUnQDEkFXoZneVXRECxH4K",
  "key21": "3F21vD79vpgoCmDXbnupWak6h7nkD9RYwH5T1qVQZaiPfWiod1xveXxmjU4XY1GQutGi2bhwdN1PSSXxQgwV7bbN",
  "key22": "3n17mTV5drSuqJHZQRgqooSz5oL7YX2opzihWruaRxCeYytCxHeJEVK3dsAR855vCzNZqrKznDAgfw1mZaHVv16K",
  "key23": "2kRo6LR41ZXPv3zw3GM7oiE95S5mxnFhtGeAqQAyEdxPV5GDckfjwKrPneX52bk5cmy22xwFDf2ngs7rSX9x59Ds",
  "key24": "2oPMhtAudpMyQC6kGEcMfrQD8CDQhvikbQsoXwveAjqB94ppKvsaYxkU1AqZGek14hnuYi6m9KzSUN248yxfMPhd",
  "key25": "3tfm4iaNJG8QVG4kBdKBSfX5bS2cL8U8CCfvEFyKmjdjmH52U45kynf31unEGEuR8JQPKpZL33nk8A91jiW6ANcR",
  "key26": "2J64x5LtCNN7GL9ti7xEddeh4xTnysFZH5ez8Terrxekgzi2KHXrWByZ4N8oUACjv6QiHjqfbXmuyNASSnK5wxw8",
  "key27": "HMkXeRx1H2j6ZTUrmwZfYAGmPnJ2zm43fmtYPfFPKLiZcHFDBZUg4NqdPp47vSvjb51WJaJ9GbrRAakCjQPHf52",
  "key28": "2PXEvVHwvNNZ78DF1qkV7xuGGU5rgSQRX3SVbunScRJvyErQsJtg4ZXXW5EnqAnJSUZJuvvwSFAd4JQJV54z6vM8",
  "key29": "5PmfFVbdRw2XPBzjrHB9r3hdnwopvYVsxbvaeggojPhNZqNkh3zsMgggRhH5eJq9AhBZR8fo7UG62AY26hDJDyic",
  "key30": "31hfDemLUzDNPTbgpfddPNwJ4HX2XT8WkC4SvoWZM6y5SDkvcx4fF3jYcLb8gK8kBFbB2jnU6gJk9h9da4jvYHao",
  "key31": "3eqa9efSd7URNmaxsL9MQDimJ126WHHA9gPTwsWUYc3Hrv5ZFVe2RsmhE3vBDodbJK4sJFxTMXjcC2EPsmP4VWnM",
  "key32": "3UErCwpJs9bG6QziaaJRhKb7C3QejDfNJsez7r4ZNmeGkyTdHfUr6rinoiRUZx3BEUEhcWbdFKjMDdYR8PW8TouA",
  "key33": "nfsXoio4ZkRJKrwDgt8ASQo8nxeEgiSMT4SwQhVueswCFdbgrVBNA2EyqUar2eaj1LqWoitBQwdmFWWjS59XhAM",
  "key34": "GGxAX37H1NToKuWVai32UQTbcmTweF58Xk8Tdg337fTZxomskrTAjUzfCPFxrT9ErgxarqPtbA3Tf6ZbUtYwEQF",
  "key35": "3ccaoq6YK45dYAVTDcCAqCHN2P4WQzXLBG7HF7Z1iNTnxntwdKX87taGGL4CrwyjDeUAu5j28g39ojVgbsywgcyU",
  "key36": "4tmGBXB1KQPmSdJ5esjP78oC9eTJsm16FbAQLMvxthR1KrW1fphqS4XsgnFSDggZ2vzAoxPUrMD8BMAvrKjMsN8P",
  "key37": "2BFdMZyL6XP6mzhBVeLXyByxHBKYEtHMRM5kcgy9JR8hFcxZFihLA1eWvbsrdJt6H4Z87zgvGJZH6UpouVb67S7y",
  "key38": "5ethjwVzDHKdXDriDYDvf1LDqgkqASoXwnT18cLKaYsq1bt3LFveKBtpuXdt1GteXTNteNrRjsfrSaFVe2E2thL6",
  "key39": "33zp3ELxqDJMHJtCLRGwu8PXWmsqwwWfz6NU4VEvfpQdbGaj4Af4uF8z4B3UoJZWLRQDtxa1cruNxGGctT67t2ae",
  "key40": "2jGEeVq7NMjhq9DcKc6ZaDjETu6Md8hzbFhBRovtjF3FwrMBX8pf6BACMYKcfUyrLfQdgaGfVS48xEuFLUtnx5W2",
  "key41": "3tBRgwkpkoWGYtiequPK87BHZFpQx8SDw3PiyQXZ3BoqZzUDfQ9NuaNwyobLLpHpE6b4njWGbdvCrWtjcP1ygSAm",
  "key42": "399vAB5HUmbUTHd4EbTDZHzSgMzeAJvMCUxQHVSoNcsLC7wp8D8NfbZF6GLSk2mgBUGSS3MpprNjddc5T4aeLB43",
  "key43": "5gn6KeJ2yuexdPWNporQfhvi5tT8DJdHwKhC3XkyE9yT2su6hDTeXUeY7jqohkryZWdr3qpvPFH642xSNc8oNcss",
  "key44": "4vAsBZ7QRwTDfdSR9dA2GJiHcfKTebXj5WHepfpECdRtN3ZLZyLYTewA7QttuFUe4ektaF2USZpjo56A3VdikQdd",
  "key45": "6ZKSnuxCDqJCWDjERhqtNSBMVuSm25iUwX4aGgJtt7Ww8WATEU1EiKs9r5tvLp1h7gBunnGnHo67Uu6AJoh4EuE",
  "key46": "2NnYZKDDpWudRctMhf7x7GyovUPE8cpDWkibhKqvYRpNNXuA6i6sGwNsKGVvFu4w5PR6ApigGLn1GdF1vm1bn7av",
  "key47": "5KMwmM6fmsNQye3SNYLjCmTg7KbtwfZvMHYrpZh7WXe3UxiYHYv66SfqEgP7H22oKAkBzVnLzfVehvDc5tHDeude"
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
