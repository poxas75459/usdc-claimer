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
    "383PVwWCgpGWx16kHpi8HSfjAmLdp5eczWVj18acJhjYUw14NHxHri7gUtDSddp8tf4EPJ9E8djd9VDJgfH1RwTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iMf5moYc3h9kTFmHxPbUcvsNWmnvfYUivCFCBMMWyBDKDbHRso9tYiMrFr16nKaTfcJj9ovDBUDciexUYRKPXW7",
  "key1": "122cGWYPXbEW1JD5Qi1BiJiUYfp6fidKfnYbGezU9JGuJyH24x3twLFjSCqmbHkjYzATE1LGJX78jhKgXhmsmcGv",
  "key2": "2TmNPYH576Y7LdVo4iANc4fdETRgmtdjHwdTVME82ojdJfgDDULaVq716E7m7vwRmVYzV3buKdXyh4Hb4CwK1SsF",
  "key3": "57v8FJ7RDFPFy3y94Jcq9Pp45kXL38Vq4jB6NJKwwbAV9MYFjdnbyVDqagGRbW6xjYGiX2BRiPuXJfoFRyGcy6Ua",
  "key4": "HLuS5Hh3SNxBpQjprrYFkQdX8eiudMWN12P7MFW7AgFXuJSmd5zkdwaLSMXMTi4LU31kSNvubVqvcy9LQA8t8Ty",
  "key5": "cq84KZu4viA8CCPKSgb4agPeeCbDPJ9zLXTs4Dttg41An9oqXfcj47S3mSiVSA5JTXEmgdJpHTyztQS7MPD5NZ2",
  "key6": "2NquNjfFws7TYuxURpxTdo3Zr7s361Q5yg8hhYDbBCLKwQPC6MuMqNPATQsbxUHHdKC2xq8Au3phCrJUdtQeHinP",
  "key7": "3J5ZLNMJhPjAi3BKYDufvJQgiuwrgd2V1HRNoXXLhDqFPM8F5cx7rG5Q6djxBW9N5ciYVnEpVtWqpEZy5jy9rxYa",
  "key8": "ddcNH9u3CyM1BawKDd44wrNaqdnLx3Qjt79irxwsn8aCwS5q5NjSDX1wC35LPAmTtYDGDnTqhcC4qybEm433by8",
  "key9": "3nxuCtpTA485mX4vYzrZz1bcx9uf8XGwajn1vMuw1jwz1gZdxKmm4T2H5SNCRQh1Uw2scth76RiXGnAUsQy8UGE9",
  "key10": "vddugaaRwVdfU8mLHqETLUZJUnzWycyE5jysbqGSFFeLs4txH47d3LGTCRrUv5YDx8QhZ8wpMukdbd6okJcXiCr",
  "key11": "4B416AqwYvkuYeTRYoFEVtPo4d9crn5dv6e48SHz2LF5DRqvoQfjSgt5AHfAnVvq6sJ2kyqVC9qWFHeSeA1F9xSK",
  "key12": "4JsGLwWMfVuoN44E3aPUcyawxSW73gbv1Dz9rH7PK8ZdcX8RaYxk4zayU3LfHsMZkrBQ1agxo1cD2rDJQjfoajGa",
  "key13": "5pR9uVdimCn2EzCRGSg3sSt81WrdgcYG9HY9gZMsHeKk8RHJJW8fSU5NqsR3KYkzUbZ6dpqvqTWcNviFQseYSov4",
  "key14": "5sJJRShrB966nytj8vrgsbN7bg9yQXQvbCH5j9PLANFPB41L99MoV9V2m4wpuqytqGmNMPpKFtNXSugPPQ3hQm8B",
  "key15": "29KB7MFZocF69WCrjk1XFwCY2mQv8MLfAPFZ3dK1Mh23Yu6EzvrVRHeL1Y4LnFa28o5BmsNfDFeWt5pX47masbXy",
  "key16": "fN8LDQ7oNe8LbsQpkM5uqbc6AAKujQFmdVJT94uvpBsLxXgi4sXXU9TFtWdkqtbzzeWeGvxUD4u5Moxsb5sPLWX",
  "key17": "4Eq3qFYcWxxfFazSyXb25DC8cUySregSAoEZ6qzqimDyjSEJDYwSPeFLJTvoUNewVc5s1N8GD6dvpZRGveHL1D3i",
  "key18": "5YH2V7kG743zCU8X843AUCTQaFbUQXunfFGfN9aMsuyqFwJ3AkNKdF3V4WkHSt6MrmP82Tf74vbTHHrXpxCcFn3N",
  "key19": "25Jn8KGCsmv16Vh4JfwNGHNUQiiBVRR4re5ApkWP8SUsQFjrisN8Z6MCjd8WTKVJThrto9q3k5WGSCcnwVYYkQFw",
  "key20": "22fnVx8mN2jGLCQ6EcQ4r3vyHner8Tt2g2rSKDKJ2BNeLAAZG2S6EnM6YCrokj1qD6JqLjwNoQz4JPpq2gKgf8zL",
  "key21": "3JtqnxmY2sM3q6ne3xnf9TrypEud11chCVq7Bgyue7aA18ZvsYUWDPEuezuM37UMYt8Qi5R9AnJN9DygWmVmu6ZT",
  "key22": "55VqLfb4783DUErngs2wimfRAM4nxb4VfWSCnXKzu9nxBvYu76EhYYHRmaeDuRP8rsk1SE7Vs7Q2kn5DCW5o4boh",
  "key23": "2MaVU8JHg1MJWaFM3EaiZtPMHgm3e99BtiNCHVJaLyZg71wFrfbz1b7sUDak8QXEqjrs4Qj3vceSwuFso6oTXwsa",
  "key24": "4YGHoaxZY3SNX4k1a5Dt3XDmkzh9UrSZo6yHd2aAMRdkyUoSY8ZK76CvzGR2j2BtRjdTfdyLx89Bcmpg9PMMymic",
  "key25": "2w7Pkj1XWZpjkdo2oQE7yDcPwBKQ5CH52NAPz2XpHodwfnERofeX7NazvfiaMixRqH3MHep2P9qDJo5DzgsJeSRz",
  "key26": "4fYidpw4TRWoeCsnrpAJZxBgXnSXf7x8WfkvJiGoSEd6zsoExFDjqYKqcjmAGTb8eB2hjpprx1EF6qhSEBjpoQnr",
  "key27": "qRWKRxW6Lss87zv7CdyTsV54ujEhN9DqtfDmfyBeHC1LR32hdueGtHywBi8gZCuyHUNJ63g7n1N6VT7xHMkbY1J",
  "key28": "5C1GKTbwfc647UV77nsNXrFGPNatoF6jk8ysBLtahuKQS8AuCukwmKaTYE6SFYMm2UYYkqXPYXMgnbPvXhJc7yFE",
  "key29": "2s1e3kSKVt7PVjRWUtMcU3LyNW62oa1XKSnwdV7KeepwhNjqfDjPCS3KA62vWrt7cKFea5zS2ePuRQZZWoGPhbfG",
  "key30": "2fUTnnNVWwYSRscubth5TuDmfWEvpKnpcFFy2nyQqyDvYkfwUcivZRUiFY2T2y96EU6Re4VSyG5gDuqJbkeGUV8e",
  "key31": "38VJBfvfPZW216BcHssw7jHVexpi8DpNtw9R65ZTCJ3T8z8c3vycgajQ48aH4mEADTDNZfyghmJ4DWH2SsKEn5ip",
  "key32": "33QXUY9nsU9Vq7J8cMHyZNjH6sTQwFt3dk8XRm267AC4bmi25WTtwLKGKXjzg9pMdkmxLQ38rDgD2LhUXyaoSx1Z",
  "key33": "4QMyp5jR8MukirRQCyaqfBEwDeFJBi7wkaDckbUbjQFEBWPf7rVnLUmCK1JWgHgVKaMcHSF6jPq8pQZiGmxurS3W",
  "key34": "4gWMAgqmdv94tXDTazrMr7RgLMz99uYRXESNYiz3XY53ptNYhQdU5aYGejBtFEHicVUKCwqbTh2WXGsBtXm17siP",
  "key35": "v66qMMnc1SZDCQxXni4ZuA4UpbbsK5uNFLkE2RSzvSL8ZLDtH11ekWhyUuj68Rs4YuPAfnsHa3oU2699Dyf8BwU",
  "key36": "4cAdhQhAitLe2bgrtmpXLN7MoMVuf2Qx2ZUxN1jLxZbjt1BTLTT7ZhZd2Tsqy9bx6FgoVLWjXaEig6UEe91GSAGC",
  "key37": "3v2C7v8AHerYH5cggQuFimEFEwgdEtX9hitQs2Tzpdc2E178CnR3dmsyH4h2UnxBJoLbo6uzxPpoMP9unPcvou6h",
  "key38": "4S2Q343CeCCLZRkCcLfd3chiVk3NYojNcDRJxMBw3g5MTEyGHbukFfepeq95aYS28VsMgSkDKYTdeEeirR3icRWp",
  "key39": "2hfvULSshnt2aGfwxHU8RFzkhhRvYzq9KjYLQV2yo9Rip5Dhi4y6EEw9vV3sc3ePSUWYo99yfKNaKTvo2rLBD932",
  "key40": "5CDPq8fvkefuM1SoDwcCFNS5hvL1tb9bw4A7wPyr18a4KdnPopjCiVNYiT9ashUeMMoUfNwXLv6hZ1LdrH4xrG4E",
  "key41": "4umsVSZ589NM2hBsduEMie38SJmrVfPkU3hdn7tmkKrkVeEoXZo5b3mEmV5Wc54FoJbMGJxMEiCnsQLoUtc1rq2n",
  "key42": "3ntCZuaigHq5bdmRtGdyLVuQ7xBjywcJwM7FmoGxhovHdFfHGqtPQk4GypfaGcw9HQzBT49Ss7NYCSygoEM2bzu4",
  "key43": "329eUsccPVrU9FmM63hvaYbQt96Gq1FFSiKfZA1Ck2PrsTmxy4ojhM5cauh5xebzcPYxzUkM8s7UP8MY53c98a3E",
  "key44": "5AZfn6i5Ef2wuaUbMSQmQjYfC8SxgBukJ6k92tZxP7PDnkGfbyaH42dWJeVA97ZRw7pUAbsUojdfU4MsEG48Dit1",
  "key45": "5gSESGR9taS9Ui8BXdqKPmyaqmCj56ETprCn253KAiq5BMGmvHiEjTwkN5pndw95dZ5pB2ZenGpy9gCBHnLUzD92"
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
