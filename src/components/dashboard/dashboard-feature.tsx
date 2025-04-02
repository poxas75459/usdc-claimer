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
    "2Ez4g1YSVuthQgx3rMtFWTXP1kHLspcv9Vj1FeRqq8sNGcWQnCArAWGPo2KcH5e6kqAxrNN2ukCC3aGBhzzFnPrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ydr6FgoSM87nLb36u7xD4yDdec14udVSSRk65WeDXmKnMKd5fkv78WXy5KnLxzQqwKKFPQyur81HNV3WXtXTufg",
  "key1": "HxWnFxJ47mZ7szrtJBNCjYFArVYppbWnNBLV3HsaBvftq4Yii6qikB8gLaUUSchS9xa2NPt6kCjYahybUDS5Wao",
  "key2": "2YPKazGMKBx99CqwwtLqMf9XaotjQgSEYjy9i6ggt5itcsjKsBohNxZDktC58VCMnsv3Ax9LVbV7DFP7Xj2zVbYF",
  "key3": "2PgKfWsQ7YFpdDBgPF36KcfFz1634b9ZiZeHzzqBAtfGq52eSo54zC5CcH2ffVDwa4JRaYkdaPV5hotoZTBNqw4h",
  "key4": "2e3c8JWiKEPHhkBFQotQivvM2hbhug7ED6yLCSW1rSKE4jtdB9HJHFotMimPqzAmX1FJHWwpU2q22hDKC9ma2op4",
  "key5": "333Y9xr23THEbixKdY8P6rC1ewMnY1pwGHoGcwsUKvPYzpR8ndPdNpkwLJBswkHb5yNgAHq9LsFCW4Dm48cZD5Di",
  "key6": "4tZG6XZ4VG2yRYaM2GUWRKZ3avj1zqTPqGivTZ93DKpncdb2Js8fWtLjkTmn3YkTVWCYA9XYfzLWvsRYsVnEtNRG",
  "key7": "42X7bBby1Md87DB733tnJq5RkvWTUSG5Yn52b1pyhQUwpabpjtsU6Jv4f55Ge2k7ShmaTemzLcXk8eRiExf9wZsQ",
  "key8": "5tAAzRkTauNcM7TqDAmhFeHDcTSkqwBo7VwBA6a8Y376CGhJn9WvG7hjm3FbtdruWuLvaH5QVJWugwLNVaGpJ5Bf",
  "key9": "3FWH8SGy12Ba3WeDRTMFT93TBNeRVdRjPmfqbBRyWGpdNRReMPUKduJip6AwZTRwxcvGAs4ju3ktJxWHvHtbfss8",
  "key10": "2UzzCCYuzWaCPAkXmZWX7o6c9gRqTi4nmcDmwUb8AHcNosQiViwi4BA3K7uChbX5o5XaLsbk55p35Ahyj1tUfdzt",
  "key11": "5oRRUtHmHQT7oNtMcyW7N1u1AjJaFaWXBhces7J8KpkDzhrKp8ztufnhLHVSigFNmPjDYtyGwdYiwibpiQsFRV14",
  "key12": "4iH2kQRy5fARZdNLAphuCMuo8y1zNtez2TKGt4y97RKsSz3qMnkHgN7pex81zjfB3NJSHgsiY7CnvJUcamXgni8m",
  "key13": "CAhx5XVuUtXLSXFvWQRjZ5Gpr3uceiRUS56ZVwgvhYtgqL17Jp4MArBDK724uq3p32qQCrNPr94gM5g4MNbaDAa",
  "key14": "45hrngz8bntoMhURxVJhTinxisMRUPxd4xLcsaaST7QvJacmHWQNhz3MJKh2Wscq8LTaJTnzGzgEZo5TshHT7B8F",
  "key15": "2ftViWZYBogvGYvnxYFWKNtVRggctwUFitBHzytSJyf7q7vRbD5xz4KQP3ptHJLzoGdogjxEnq8RAwkNshcU4iZ4",
  "key16": "4ZdyKUhmUzUxp3kcyHwtapkPE1pwqZtVujoGWJSQP25hE7HoctHgY5sLtTKiMmPSho4xzukZ1eXnoFKxLfYY1Yna",
  "key17": "55KMugFysAoV4b1f6A9NFcbyhkHgkMwxtn8AKCyD3rQtBLWSh1vTA9BfCZJoTBaxUP86td59tF4FH1f6D8NtMcnk",
  "key18": "4rfa2m8XALPG9fWjDHBM1h9LDeb7GTtHZq6oDofzZTD3cufW6Vs1gKvQW61y7uamkQxFKJw2fDkQMgpW5J6o8bJz",
  "key19": "3ArXohyfwujvWSsFaZskh1ivhnume3Gqh6zZir2BBx9PBLuQb3qV1QTFtcqpstcmQZJdN4hsn5uYHxhBDsGq19ZC",
  "key20": "4Z97rgaWc7fZ7WiJLBybnMWYcCuN6w4Qe9hVcqQfXb9M2YpY52GpuKLNeSozaBteX1oVhWaUDuRDfCFe4bSmw7se",
  "key21": "5ZYxtSw2FPe2AfibHX46YCK6Nw8wnfaVrWi72xmmMH7UG2yY1wuFsW6jU1R8RaSKHsZXrEzQLaNebxuhhieDGnwk",
  "key22": "25MwYj2d9mXLrKNqEd2NMKkhkuDL6F3C9yve6tUBe4xs9sJqAed6PrzSbaLnbDiqmpTmogtEHLTbg49iXekxne7W",
  "key23": "3gMZagiQUGz1J5VReZqHissHixMmQinsciGcndn7JzNjDmVbeUs38WMWFbo6jwyG96snHrraeynGV9zVSvEAzx9G",
  "key24": "5tD7Xt2yTabQQyuvysao2tyz9QE5nSAekJeiHCSJ8mkp5cy5bpyCgmWze71BJ1WfLYqvJMjmufKHoiDXHBgLH98h",
  "key25": "3PEbPvVNpGP25wi1JeH72EMurPpUJCJDYTXgJydc6BwR5xBzF4a83CaqHg2uH5F8ns1rbVhgYSBxw64ta5v4KNnN",
  "key26": "swagXbmBAi6BGNjaYeFgJW4M7gYJePiKrCeE1yyipCqiLKdvQbw2v7pLXbKY3x6dKZB2aWUFdVCahsqwqQKBrWw",
  "key27": "23icFGyXhwwE5t2h5zUsRfdtJVSrN4XyuCKcijjYmQ1AtUc9bptqC5j2NKUfHBEg9C7N6JAt29Mjk7PVojury9yp",
  "key28": "44rAuzT9imjpsh9CajFkmatdtt4PS3pGB5UvJkrNEVdvrJ7sKhncSJGGnCHXEBZs1Cx1hAmgnWC8UqNu6VRc6b4Z",
  "key29": "gdtNUf4oCrr7DhUfUFtQ6gWjRGunS6iTqsGdfHdAkXpp42asvhVu2GamyVe5eEzuSopsvwpbhCJZXw67yJf4WZ7",
  "key30": "RdBvmxoZTM6NKtncvfwKi5zox7QBxqmP3sBtEj9YoVL8fysRiHYU4oYxDbJK3EGT2TPdzp5o2t81PdFc71fPhtE",
  "key31": "4NwrEUYifYuMgwbBHfvhktU778pnMaPXKnb6dbn1YcpNdVHMhyiTn1LxqEMLSEjQ7g1rogd4fPFw8MSMc3ZFLmux",
  "key32": "4NQmRV33jWTEX7Ef7r2oDFXkhm1skxUjCywexVP3QtCu6N5a3RzvBLM5scA35B8iUAt4K4b16Buk5nmqpD3MqrXv",
  "key33": "3eg68fLzgjvkzrgVCoRqHekLkttD7dDvpwaGSdyZ1m3B936mTbQh4ZdJD3vgaqiyKmtt5493RHj6sMfH3Je8Ko3s",
  "key34": "2vmxRuXUqpCBNgL71AtG4XV3nmd1LgFfPcWfMeAhhtQyMtHArF5sadkiGsq8GT3tacNLmKgCLDEUHmQqL2sz94DD",
  "key35": "4P7ncu5WeEEmgjyEg88d4RH4RMXk6q6jW1WuForcKizBuzy7YzGZmFXGJf1LS22BiEZxdm9LN23n5Th8rtygqbDX",
  "key36": "66W22ov5Rg3rczTMGAdu3Ybek3DiM8ZzDczrKz4mW8dWBxB9BxTVLmHtkbxCikqP2YdmNuDoaLwziVhvk1pZ1bz9",
  "key37": "4jaEjCWcb4ZiYYwhdvo8MoRm6eCjZkvKSjuCR5WVDC8MACeqbqfrK2tkfkqUu3LQkULSKUiUtoWx6eGDk2T2EyUo",
  "key38": "2tRbvRXizjwDoKG5PgEjgsBptrPMen89BHso2HoT4ENET7ynF76zeDdX8sjMBbvBRKzufTwKtiXg8qzXwV68NqYD",
  "key39": "2D8qQ5dwwQhHWzNbEPWvjp3MAWMqmL9qyCpvEnZPy3tCVyuFMWGhS22KTwFgHL66ZtSEe6MejWUg3AWYk8vcG5CL",
  "key40": "YvTs6EpVWzgrC4LEG4xF4U7jn9LRK1uikMtYXd39dXqCVeBgKSnZurkMUpHNFvGKmkPT2dm5soVsvDAgQBzgu2q",
  "key41": "2vV8hQQyVS6gzJqf4M5n4neyJPuaYvEndci6gc1n8TWexMyVDyzu8HEJsCZker4LcfmzD8PP6rrYcDmgxq27r2FF",
  "key42": "2pcdiU6FXcmYpvShySs1pE4tJtq1UPhEXWkHJmHCEBndPGQgy6xXq2Ch151JP3Syp7RgGJMojRBmVio5wjc8KSZA",
  "key43": "2QYKTa15b4NZCY1dSQ1wHeR7MwSN6yq7FSZgvyLUxHymwg1JyDMWeM8aZP7KqYJjAUhRvZmB74xWGxSkEX3HSETP",
  "key44": "3spmSz8x2Ghyh4muR1LWhbvpC27SfzXxfYS7RkNyyHqrNHsiCRZLHUowh6bRFNjQC7SnTAUSs53acvNHkxTkJ9Vy",
  "key45": "23SYTjRF2zrsbuKYNhPgEEMfMstKe6tgW5EJBrZr5jmbWZjq8G95hXoxG2vkuLxb13fVpCcKc7mQk3TufHHJ2yz4",
  "key46": "mJaEMsFQWxEvmsx5ceNsZi5AFNT7wzoVo2ssmuWNg8PVYHy1awtGNiEiYE9FpEHQn1QvjBeSoUnTfRMwruDqpiC",
  "key47": "2ofhL3wbcjWTZEBKiL2EJ9aux7quHv7awjNAkcZs3mpZZgbUFK7SENwP2tSRLT9XHdtYLVMhoE3HAnZsWHjuJRVS",
  "key48": "tqsQA23cdMtnF1mAZBPzoXNwyTeseUV6eCuSs1ozt7m6BWMoLbFf2ixKYDEaK5QZZvGHinb8rFGDc9WbNspzdHZ",
  "key49": "xWWHH8vHwK9tzsYiceEx3icHdmNUSSLSJ69xaEjUVnhARPL94EWsV1rj6TzDawDF1Zix2vKRrmN3oxyYCT8R9q3"
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
