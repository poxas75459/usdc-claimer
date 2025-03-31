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
    "34qK8EcrFstJHk8tBiiiRJbfyh1Ze4BZfGjbQ6kyBWdSP3q7rd6GR5KcLzaQERwFPKs3PSfdYxSoToFKuEFc43Gq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MpX7ppDci19udTzPyWfMaXR43VMyuY7W9gKUU6KbWj8FxhdMEELdgMXCeyrvoAVtGPtXthMUauMZujVbnSfFf7J",
  "key1": "2qbHN3FnKz6fQQ7gEZXE6y4frL4JgbPNFnEJRiN6aRpeezGMemDXuekssC52fk8RorgMVRToeY2usyoatvKpnbpT",
  "key2": "3Shhckji3EuMbJ5VpgLyKJki1a2yt1Ub4q5Nx9ck6XdHQ3B818EipV5FCB6hTjkFd8kXt6u6BZhArGrkv5FeMSdJ",
  "key3": "23pf55BqxcL53hC2sYPjXk9HPHDZ5Va4KKPhVqNRzRoeqynRm4TULwUhXkpnDKVgN1AwULYRSSbhtuyrcBKF9G2s",
  "key4": "3AYKStnf2yU9Mg8BvnaBUb25KLkZkFFrSzcCfsL3tWumFm1LW1X7QDBjLjW84fxvJBinvYCLCCH2z4j6C9XjHiCw",
  "key5": "41xubZQtQAYaupTiFMURC9axk16JHe7wCW63js5aTrVyFyLZDvQG4NnZ8wuJJM8cGTydhtLgbVsZfHpHEhsPYvGV",
  "key6": "2brDrFvMQaWMHpi7TAE3KV2DXG2hmg1CJqajrjbvHVbHugKCfTa3YT4STRxwX6p1XUUa8AM81zn2NqHX6cexcgiF",
  "key7": "37SVgbDAMzTU9UkDB3B18WNdBZruaWU54eow2hik3Gmcxkrv3dMTcfAmnpHVUwDizPYr7kH4feQbAAfc191XRPcP",
  "key8": "5GMMRzEetySUjvzWvEshWcM4vxDiUKvNMrPfj3Lf2cETB7ZbzT245WJ1La7KMZ7Di6t3PxGmNiiFkuV7jPhxM11v",
  "key9": "4CXqkfM87q3jz3GyvTHX8WN3frTK7Kft7TbHxuDUwniuzJ6vigTgpwycqpGv4qoWYeEwHPAL1wFXmfqnaLQcHtCi",
  "key10": "5Vem6BtzxGoGt23qHTJtM7f1XVC7r21GttZ6MBQKCpuUrXwrvGYCcrZ3XhoLJYfa5zxTwRb4Po6tMpSsZ93z7XTd",
  "key11": "5is7yNcsbJHXpMXWEpYfbZunVGS6aUo6GujD7hpzML45BEpqVwjWJTKhCafiy4ypyj9gXuGSjAfR4krRJ4GvxxU9",
  "key12": "3KvWLRuS6eXQNTAosm2FkMfTLzPs2z7PgmFQubDvHuEg66ykXx8uh4P8WVAp2uw3tjbxjKq9w86f6w62gSnue3Ne",
  "key13": "LKiP5tsFCYBfrfrntbZm7McwcWUhDkWccaHvMumE8bvKGSA3JtEhGEX9dfwsqhitKTbvnpWJt2JjB5Pac46Xzqx",
  "key14": "4sQc6zVh6NtrLbJvBM1YStYCxzDB3wKsHzZWMabEYrAEuzr4UzNvM9yu4yPpmT6ynCUSkHGkgmBbw1oGbS4g3AoN",
  "key15": "579QLrfdtiZi365QVeRqZGp3Ssm1Z5MRD3mmUvnptABHzgftooyKn1xi1WzETfCqBFYKhoYi4dZ2DPdPiGvuZ8Ps",
  "key16": "3gSh47expCJ9igvuwQihxW2FX1pCiDbTMEf5zJ9QkemULRiLbNBvkftNfABPUdj1ecHp1MzywyN6Q1EWZHSjBizK",
  "key17": "ZSXMwRwRQqki7WpwEbCiysK8HcFWDWL8e27S278fnKdxsQF9LLaZ5NkHYazHkncvMZCgMi2JM4QwTEDn7VzTWHh",
  "key18": "5U1M3hWZJeShLiiPYNmuh4AdkF6mcgkqq7poqk8tYqKGXLprjZ3U22GfVkgMNaK7M8uJjAeUuPymhTvuo1srMvGM",
  "key19": "5x4G8GisAThHiZHgHBzagSVz2eofAt2pmV25jPFbanG1Gh3p8TFZp6PpF1aMxkRhDE4n74FD78pFVGqfWtTVx47q",
  "key20": "3MXfeuRZhNC29KzP48uy1tDF7A8d82iBai7hRs2mj6xjamUCFvuNEm8fjjR2tFePua6RD8u3sPJ6DrX7iTDrTe9",
  "key21": "61eYCJ8a4oTSafkRe8NVYb5oex3WTwnuS8cMapM7nXSk7exH75hEd2KGPLEuUGE95pw517XBcPUBMiHAx4eSyDcs",
  "key22": "4Xa4YBPRt1c5BCBpt4r5bXrkYAYBpmGeBwqDBHgw44unZHRpKdRjFR2kwyC4bZHUvcSUAXDvVotsjBAHp3g4y9Hn",
  "key23": "4GboQqLAagi9UmgM2hDRqnb22J5EUhKMdFqLE8WTmeVF5GRyX2T66TRHppDksBHHTFFRYmCYSq6eJ7STH7MKEEWv",
  "key24": "P8vjBLj29KSpZDbF5nwUBCG9Zu7pc3NPkimyHLrPX1BQ2rsSmuo8DbzuQ3NeqeWFTSVeJE5z6rMcXTu43CB9gEY",
  "key25": "537dXanCuxCUs9zxjMj6gf99UceAzAeBLXFRwP3962kS6WtwomgawaqSwa15kShvB7A8uoHx1Yop14xhoivD5Z3i",
  "key26": "2ayaTxG9wC4fTuskjHxBJegv982YxKdWSPi7Kjq5h1RAx54PvsEVBTNRh7gYoTJyeiY9mSefiiJoiEkj9D6M77Hb",
  "key27": "63ttXNsfgDebPj8Grmjq2NphCdcCR5PextDpxS1izKahPRkqg714u3Lxeytc5Cs1uKtW1nfKQgKCpeYWbtfJLXBX",
  "key28": "4P788gQ3rTEng8phPDiqvJxNoJnK3DWRbbYgnBfq7oS4em4MpWDmNbauggbhWMNgxc6KCTqmCwHjVRHB4a2BvN8F",
  "key29": "2efNVoU9sphuFXnwV1DVZjdvLAyLgx3A23jaEn6SUpYMzMCnuh6ezNYp532EjZ7PxQUwnfJguEeNotDMg6vQZKmT",
  "key30": "5zFdodQLE2HPdMpUZZbUb1YSqC8AjWh24qx7oziqCznSJTRKMZ942YUbs9ZedKu2RUx66jZR5JtfAfjm6oZ9vrBG",
  "key31": "4VbGu4NijJnx5x4VRvGtm8rjLRAQvpnsyGf5D3jzVbih63hyGvgLPws8bwsxbB3VCWy1RhooN9RRwrQpTLzvRoZQ",
  "key32": "5rq3kNEhCWcFUYAVvTMGPVh9u6ADL8MZHP2xea9CoPbNrTczj7mig7UvWkPrajLSEro1mjrvr4agJwTACvuoT16E",
  "key33": "63BiJ1ZC7bPUXnidQCANv3PiTtu6kGGfDPbWGyLBNHBgfry5CJxHZ8fgXZmLovAFNZ5vfArDtqLMMEnhE1hoyymy",
  "key34": "2GPHUKUMw4xEoebo1Hi8KhuVRbbSBPgsu7q61mJdwB9qRSt7UT7vCptPv6JQT64J5kFaF4sPirVLuV2i1JxT15Vu",
  "key35": "5wwSG5yTvs2nYJTFUravtVL2g12GdJqbWbJ8Q9AJedzJDv7rFbzGD1mkHtdCD68PJpJvUfWoEQL8yNSe9iuZpUqU",
  "key36": "5q1JQGtUXNCAaegpWj5Vw7ncJViKMk5MAfbigAoPMMme2yhetYScWA13HeVAm6ZPpT1FXbD1dWrch3vWumQRpmAt",
  "key37": "5qFSNdSkMkYCgGLSLajM564YDzDo497bbUeSNUxzUJyBWx5hY4djEuZHnTjTL4VRsv2ihkJPFqeHKFsjkTSLzNMU",
  "key38": "4s9HNpPMHwPWHMZBkfXtZ8MK2BeGKQTpE2csWkza2GmE9RhEApmCA9eDrJsA7Pqx4xpERfAW8QWoRm6mozjyTs2c",
  "key39": "4NkJYDZX3o7Vs3svdkNhU6JVQPzeL8cyiHGJUoGZfw3zW82VPNzETMxno6p285T4vQf7mz9rxRjvFKVHw6STwqU9",
  "key40": "4tnx6up5gNPpuRGL9TdmMwYMLj75VchrVe2XrWWf9JZiTevAj3SeFJN6BwmmTc5CRj2CJ4wJdiZg78tHuKK21D3c",
  "key41": "2H458GHVpnWRqZNXhFucyJENLzEugYYi4GqoxxrpdtjjtxRDgXQVL4WjhKdqYcv2Tu5A8zGNDy2JV3xgtNxBCZzi"
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
