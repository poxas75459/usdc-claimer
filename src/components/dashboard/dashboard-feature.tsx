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
    "5875r1DNkaV1tJwvLFxyiULzYBPixBuTo364xzGmQysoR4HfgZZRHCGs7UnqtkpdiKavkRdbcAGvDoxwWSg1ctsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v3L4WuNhggAoj2b8umZ49DVgQbCwET2r9qvcdrz92AwdTnhonJqbWFiVdqvKgZGzjpjx4122DegKWHw34GrYHmN",
  "key1": "3rqbxgcHLR9MzenjastyCaccYuAj1LVjT2JytTT5cfr7SAjohpPnRFAywKcQqgcwvUtyn8hMMCdVpuui2Nzff6mC",
  "key2": "2JJDb2xpq75vXRR3tA4Xo2jNr31Bd8Joi1ZnXtoetQpYW8SHzQ9P9WFaype6HPc7a1vCskwqDBYbu4big3g7uwGJ",
  "key3": "2GnrUjuseBmVZtmrnc3aroWgxU9RPjgAh7jfLkhedQXpS94o7v4wtU3W3cDtmwqmNwtk9zvj8SgR3L5PkKUfhnLN",
  "key4": "k1Ku8drh9GNPqw3gnna96V9iKsn1P3oHLgmmsH6zmdDZ53mAZCgxvmosa3HbnuvtKEGEaqvPFo4HTUjVS8GpGP9",
  "key5": "LRTZ6D1vTLekDspwVXxc3a1WeAxexfX8PN2RyL8xZrTnC9zkarD6yzE23451ZrSh4BtwVYK7E1fdZPz656AJZAt",
  "key6": "8fwzEawFJM95iSnbYrfw9xT4ah2tgbn92pEfpiYogGvYSQzaT9hqC3k7FrLjCS4gePJqaK6MP8HThModPycc8vz",
  "key7": "53fTJ91uCXAbYEm6ccYxJhK6Jbt7dQhs4koR5YYy3s8P6CbfyAfF1nXitVY9YWzywiTQVkkRhCCZxyHsdFAgGqJ2",
  "key8": "4pccyFwpP4Bjg6Drc7UzxYY15ULxxB1af9EWf1Aq81Z5ko1Zy2MJvC5zzqKGt7myjFquBfg59TKj3Dk4j5dTy9hc",
  "key9": "2haboHFYUtBb1ns6nqousAVZH8ZqCZ9sWo2C3gZqujE9jqrnqaDMdqFbgHcXQG9okBkBSuNKwfN1z5Z1ZFgYUJjv",
  "key10": "2cqWdNS6RuFuBgKH63kySnZqHZXGRxRCH1yhEQSKA6HbHXo2Rzth45gSoBZ2BdUS8uG3j5sf2X7qApiZmobQR8Hy",
  "key11": "2HQpcG1kZhZVKQFE7cYrjKNCxNturKZQM1J9CxNtLUGWRHT3Q2vZ6Ne3P4Bx5JaiXzWyf8JbvgL2bJDJdBDEaXgK",
  "key12": "4AZQUG95wJXBPjsXhzoBJTgRpu1gtqgazgDNzRgwcu2eCgDxQFtxnFRPBbuHyoBxChVk3L3SRVSLVXahNYMNsYkj",
  "key13": "31pBa4g1Qr8bNpo9x2mA8bFpFWH3KGajUSwGaXxPiCd7zSP2iBcGYFmQoqRbPnDfv6FL2Tzyqev4jZ7C7mHJhRSX",
  "key14": "2Gku1cVthbLzyFZb7KC5TKM4fjAQEXzBdKM4oR49aGCp6MPHQn7txSkSZqdXb2JrjK5FmzdFVj8io66y7NUTmER9",
  "key15": "4PJ9F6ijY6cGVboJ14sfCm3WoCDZogwdJ9FEPGiHrAdk9eZvFycW8NEnmnU6DQFxHNNJ7nqUkikSq2qQdZCZF47f",
  "key16": "9H11cr4zqnKUojxvYk96CoCiMVvuWbSdjUesJEVUpTu3U5Hzf6EHAEqhizo6hgwsQr8ojAVQufWCK9AxQREcEDP",
  "key17": "5BQ82kGZMBJqm9CDWMN5TFsLtrCSBYo1jBQxX68C1tSf2zipHeLFLh2m4MLn294DStribPN4XWMuChnqA7x9xdre",
  "key18": "54xAVVV4BMm73xGP35C4TLgySmm22o3AhFhwXfV2a7zSQdC3cBLHoYM3MfeEwmt3nyEhCFWmQrADL6qLRgvTm4qo",
  "key19": "9azaMjCCo2SSUyZEwgsm31QuXYnJ9wGzTkmmAHGwEb5NAmewES9uYSoMQvkLQQSGjgi422VXu3jTfxq4n1qh8bB",
  "key20": "2WKa6pJtpzbF1TCdf452RZNbTNn6zGBBwbggmL2kJ5gi4EjT18bQZGFfiGmzwLA1bNBi2jDTJBuYTRoziQ5GcAgE",
  "key21": "4bWWmmkR7hG9n9Rx4RvK5bvGeBsNQEyUygPYk7tSVsB1mk2j9FVKAK8RXfhBXVKBL64f2amYwEeCEq4GDWwVyQKw",
  "key22": "DmGNShRdkzjWJsgwrmvx2xyXdkpikfREPJNWNfL54pLcmkX9akFwg4EjcxnQA6XvVZAfz38uBRo6TzhqAgasVBr",
  "key23": "2H3saT7sgQkCkeWgub5pG5LDf88yqXXZXJuX5SamsCuAoSeMhM3T4AnpB7BnL4haKHsuH2WUZHRAgxRn3fXsDRrC",
  "key24": "4Ycb7jnXPf9FqfnCMdqAVoiRkwWVr8mPwcJBt3AMijiktuuZoJRYLjwdXbFNnEtiWtxGw8BU65P6rbJ8Fzmf1t6s",
  "key25": "3xLZ18YiV1iQmpP7iBUC8eYqQUxqq7dK25ipmzmb9vKipCosFevZL8423ztLcZmh83L5GUx6ZJToy1rfxpRsMkYn",
  "key26": "9eeip4qbjFNJzAEZETkYVB67E3X3edbsS1Z4x6Li8KBRTecj2EEQ7aLJ2gsYWodjrWg5CbFN1YAKXwhP5yFzZxB",
  "key27": "2QD2UdnGchBF8zC6TVBQm1cXbToVAas1ePh8VA2GcHookBKD1gMw4CMrEaL12BQmRGRr1Ctz7v7oy9XYfvMEKHmo",
  "key28": "5B7ue7ggTUnQcJwspckH5nCQmDWMs4HWyfsmfVvTPLcfRCCKBV5YCRk1aj9cTitZP2M1DnxsettDbdS9qsDcS3FK",
  "key29": "ZVJ6yEKbpMq68LfX1yYT4Swig4iT3bSNcVwX6aMAzo1VGsArbFqiY2C12bW9q3pxDYkEtq7RPd8QN1PEMUxpYYX",
  "key30": "3MKKxp3CikckjQb2XhPCJKfrUHhnyF8YQBcirPC34A6Hc8QU1vxueU2ev99frEmpdj1HAPP3BaHb4yMoEnNB3SnK",
  "key31": "2ZRu1jDAMVhAh89fLxzMkgFd5poHVT4sYbv9gvGJtsmBt2JzL6dvL6iqzPXPh3SFP38uJLg9a2Xjt8HAx3U8bqTH",
  "key32": "3kR3kH4KojYPJK4oNRXEB6UkmoRqqzH3sZBNfXMdmN6bBWE4X4ZJ2uCTWwfTfvx59CX6EkATprmLd8DJtn2Q4pZ1",
  "key33": "559ePPFmMfkQTVf4XVcLXyuuuYp6WrwerSQ8QGwVeE3Xdk8sYggHydgM5pFhd15wdkHqi62nEXtebTV7YGNkEied",
  "key34": "2xQRPW8xtJFKioHVwC2JFmaB1ATyAWFZVDpm8BrGfLxKUiH9MLZotN2MBaL1FAh69N2M7Phdzpyngw2FF3qyyDtM",
  "key35": "2FCmec98jeQ2cVH5PWTmpXxTmuCD2EWHk2WdsLh1AvWnmvYveFuPwXRDpYguLLDDSww7JmvkidcM46gzDM4xfB6g",
  "key36": "5iqepzAJvMR51gVHYQbLi98wv16ksjLnC9BN4DmSzdoasBGMVbCRYC2a6NmNCyWm26Wq8V7bLYXpBcp1FfrtGTrK",
  "key37": "3xFtWzC7s6JTnYRnbYENmXGrS8qvkr7DNegJhqpdaJCQpugQrsWACrs9oHPxK9EeCZK6rWYW8ziTwu5RTgWxp8mg"
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
