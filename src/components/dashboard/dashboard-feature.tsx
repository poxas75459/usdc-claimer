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
    "4zkXqxNeKwwdqujLURZMJS9cR2xaHn5dttU7nNawjf3X1CgEo6zwELmb8ThDcE2W1jcyXsiBxV312sDtdksRqdXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fPFgLc7jtGqj4qCbmJNR1WUG3sNHJXz98AubpKw94u8AV7CkXVXre3jaAx4C8wZJMrsA99n4LqCDbhTpA1XEvQL",
  "key1": "38QtaCp9PREMgkjLLbWQJaKwXrxm5o1Phq2rr8iLCz5xPYix7N9coAzEnCL5TzkZ8ZMMRcsPk1LmcB2WavjY5tdL",
  "key2": "2563MsMa9Je53yFt8sQ2TgrCbj9tuzngkogT3cbcRWCF5zheoeq7xrbnwHB6edguQfFQXDCJespWEDkt25vg2Vcg",
  "key3": "2dCvo6hSkCqhGWisSm1V53eXrqPFnNPCzcthADjy6avAufbRNFi1e7EUPME6DjioB2AKRy88MxkhnmSfpRAVhRQd",
  "key4": "3WYnMBRthpLEdS4aJdFyRqjH9KBhgHrDk7dQFi3KRk1Q15ra6kKrTU1CCktGJjgBNttRiwEoy7ZZaWjeNuuVpvfY",
  "key5": "24czbS33okihgYxBejPGWi4tur1jorFD75xy3CjnohD1MhTjGcsy5W2BPuwXDv8F1B6MTLh7ai3cPTN279XrFDc1",
  "key6": "jZWuEbQtPGAr4d2JQKkmns1tFjnP4jG7kpiA7NYHy6Gcv4cS2ntN2pN8Lf9mLR8XY2sSjj7LusDkgcbQfZpTndV",
  "key7": "wdoZK9wxcASy142DRzJY2Jxjh4LnjmnWzCSKSLriobb8gxn16DCpQPmcHAARbY5oC9AKS832LKGj56Pc32QrDsb",
  "key8": "58XbsxyMTHts2Xesn1HurKHozTgzjy6gg5LcHPBorFjW8TzCGX5yTtfGnEz1PJFL5H9cC1wQD4on29pAPGP2wQtA",
  "key9": "4g7TA2MKce79zjNbQWzLgaRmKPJTvSFRGKqEMjaRXZQgLqmhBchGXnoj7bHgRL2oUuq4YU1ukdbnGETt9NpNyo3T",
  "key10": "3USRkvk7E2V3N4DkXR4yL8Mo8krRDRj6BC2ZjhCpwrfXWPvmNwezZVo4yg1YA1oRuR54Qo778N6xUBSa2saDcZri",
  "key11": "9SaJesry9ervPTqtpuEq8bW3DBPjEsJErzMg7jPrKqDxuC6YYU7WkbFcod278gDxehUzhftz7pTs2iTVesqo3Uq",
  "key12": "r7JJSEc3uLeqxwBEwHxKUHMkemwzw7CP8hdytFyc8gsDzeNkZBymUuw12Yx5gt1LkgfdvTJ1kQGKwEYKP8V9qbM",
  "key13": "2mR4k6bNaM7wyHvrhVpBuED1y9uD88ZiVeWEDCLtMyrKySZ78A319hJnuZxU6KQ2ZEPcDSaF3DHrQTZfm9Davs9j",
  "key14": "2Gf2z1QU6cZP1Sz49nvXvWSLGSqzvEy5ffMyLJVUKwYFhXr4TMCJKDC5bTvE3sZQhxXyXh5mwfYvKSA7J4WAK3T5",
  "key15": "2MsS96YAgrNCpCyjwp6Cc8pa2D5ogRe7ANRS7zGqTANcWnzmqySkMTxdcfyh7u5jJzN9M8vB3ompJxYo2bCepxVS",
  "key16": "34sMziXdKH9BuTNqwdMc5PpdLpezAkEWQL98CQrNnBM2zReXHyNbvyGrLBfHuYL7F4VjRLVra3u5UP16Khif6wPn",
  "key17": "55xEnjXGmkjFjrh9TtpY2QGKpBFg1zDLW2sMorbrCUoZdjEPUPzGP33aGuRyDNsBbVnye8PW2RddyYfesTGxsw8p",
  "key18": "44tdduhnRGHgPW3vQzmMKA33i1n4GjW6QNTXu8U1ivYszRZBfpPxLJTpTECobaDc4FpxCKivA85DiMLFE6igCUdi",
  "key19": "5ga4aGL2VoE7v5BC3EszPu6o7Cvk8PdbzurjkyP5u2nxvHzmfSu743YuzdfF7Mo76TA4TCrDhL7tAStUS6huSywS",
  "key20": "VWGJHxY4N1XosP7hxRnGJkXJRQw9GaTmGCU2UzUHb6awEwCsmr8ZHwXuhS18QH6z5wd7EHpW8yzpYjQjZvxbB7M",
  "key21": "5ApHvY5tc7qA43YeZqgoCg9DgKtjyBvvRPFkeXf1JdMu5evr6MwkG9po85zM7kzSxaySnnEYZqnPg6iEYdrcnvTW",
  "key22": "4EuK3NRMQJtSaFpgrVaLK6xbAm1fcnYr8NDfwWmeCmeSyc1k5PhooHFadtczjYA88FWNVvbx5QbqagAgdQfYE68i",
  "key23": "2ZgZDUiCkRnfuLMmRzxfRDxoWPNDQdCDx7KTtnfuCKheTq8YJuMV1S58un51RvH84S3spbN93sjSdtWCqYAupEdD",
  "key24": "5n9CxDzVX8mNM9WCCMfcC2C13UiFCKAzh6349PE4H9Cu43FRKxXC1uRsCHwqn8bCRBBfP53AqHNNeoKnjNTcBZ48",
  "key25": "JhYdMjomgpya1vbY8zYzNkfcDCYMgt39aLwni8i4yq5cfDbRfefrv6oht3ssPjSHpyX9ozz2EPEDdTxtR4wM5Nj",
  "key26": "43Vy56fomp3nWaHtp6fjBg5YPuz9kBbBrRBeDA4ygGKCxUa7TELG87u5xTvXTyrWXWqKVBYj5QjA3t5HjPJ5aXSW",
  "key27": "dRPG3JrzGAauscbcHPS7bj9ffGLTQiP3UULYNZNCMJhEQZWEqKH6eK6vH4ZWMKAZ9JmPE6d9Z7zScz9gVaRGVKR",
  "key28": "3Nihsfi9GPf1kJuCi1NPfBWZPCHyGEJa4Kvza5i5FBCwk4MsiYjeUuVsWH1LuPmfCpgvMK9Q3FALeksuUQmxDBEg",
  "key29": "3GSzKBxJBcXe2v8CoTFoHQwDUkwSGiBXdL81VRUTULEbN1wfa261WEppExxBqhigsVWTUxYevgV54uCv4fnSRrxj",
  "key30": "vnnGjmUCbmRqEwU9T6x5t3aub2HrbMJib2oTzSSMVRySDK5CYUKHgZxQZ21varGXQgxpUMfQKXgv5B6LZN2xUcw",
  "key31": "3T8v5Gjkgfco8pYX2fXHNyMmB5Ntpfeh46Wvq3eBTzbfDitFf1nLwM6krzB54JKpPeLUStdKDnWZutj3rsnENETG",
  "key32": "19gjPcRXZSypxiSnh7kWHLhjDsdmUME2E6QCCdN6yiEdVaFkySUCK22Za6SB6eTf8LNeFhHEJDStD3oD2VmRGgr",
  "key33": "oiGepBk6X6qoqGi6DXBcorNw84a5Cbdb4cWyU4eftMsSgaL48H521uMKAYuJs8JaHxXUgxNWmUoNKwhQ45qyaYH",
  "key34": "3WnBcAgH5YB256XQ9eBLGoovSkwh7Qc1oAyHBRDdpDJxdFiCEtLYMXguuXvRGBKpcZzizGD17v6bNiRiskBn1TVz",
  "key35": "3kWPGmCm5WnSMXHumuScqJZK1ecWXEukT7XNKqi5EDcjkKJi4pASKLeNUDJPuRmJ68npi7uH4Yj48DBEYkJsiuZH",
  "key36": "5wmHC7bExYQGa58qNP5LnnbAF8vMGLN2iDpsPtB3xYkV5uZFTLiQsRiRyGX63c3v7PuTaHYNtm3cou4XGQ89fwaK",
  "key37": "GdgRtzAjwTFsUXMfDak7wEhoYBzddaaF25BLNyRau7kRyWVKEgyVjEYtbJ8MMLXaXU4361NEjhFwKkaHph1CnQV",
  "key38": "PHCneVd5QyycmsU3WCqN8obsXiCSJTo3gGMBemaiAzFLhqtMRMrjM4svRbNDcV4sdrJMyHVoSwKd42uxqpgyEeg",
  "key39": "5auJmWt9sPeGdpo1FbRLnQVPEcGWgUcBLbQyYq4KWogJsvVU41NPqsrWVq1cj6rXNPRGxzuyA5TopK3aYQgSnbbj",
  "key40": "3XyTx5wVEcoEQ8DZjznCbazfS9Dxs63y5vDVJqebHGr1sMWGugLzdJpgoTCsx8jjbbbsZ2NxfC7K32589kRogTRN",
  "key41": "3a3u7TCkFgCHgQrCTNbFcrULqQQK4ikm8cbYZc98b9UCHGD8aTiYL9kQafm2ftSMT4tyfTh1z1SWd8U7tUZ8vF3",
  "key42": "32Goha82htNbwn7UpX9CkSGvvDYkyKrQWJLpvtQFa5qKiWcwfXnzNWBH3erbsLvrHJFL2tREKijSYfnTG7rWAPSA",
  "key43": "4kSSTbxikR4yXKeaXjN97LhyV6hLdQASJ4tq91JnpCUFdwUB7RudgeAaPaLZme7AJb7rF8sPwRRi4q7GvLibm3H6",
  "key44": "pv55yHG88th8NsBN2D5bZdbKFa7z7ig7PBMLoELaacuy6Fwita5uxQhqwZPBUVBSyXsyrAn5gnidvhoHXwXzoYy",
  "key45": "3MTGxyjkdpEH9sk1MWkpZpEVHxYAQVUNNJu63bY5zmoWJzXhvQvpVxQipvfxYnTTiPdMqiZcLoaZ8xVWGJXph95a",
  "key46": "5zNF3CBqUDiCPdkUb3zihREfbCydveRmTokiBTr4oGY3g1FoYvU1YbfUvTN77rHcntaPwN7YPCVUfTeqsdjMayC5",
  "key47": "z9gBeV3KXSejRteQazRRFE4uq2izi8mRYGx2NDzpUSkC1Ca8dXvz4meCuJEpbTsYr44oQ2gJWNLCjhfrBqVzfbn",
  "key48": "J2yaaGRSUDWbXEJQqV1QZAkjPYTCvgkddmFQ3wuPDR49gCkdazov2WBGYaDGPYLANEFyDroUxLkhkcMQCAev4S7",
  "key49": "kaQEEyGLLAjSdaBm4eqxpaf288JAorfj1w27wTQX1UFwsWQvDnRnDLs3vooLQp8ijHV9zjpVC2tBzDiPLZcdto5"
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
