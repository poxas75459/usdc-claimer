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
    "3DD34zM6ARTJAgphq2Uydvbcp3uWXdqNtstzWXwaXGxBunqfppXGkCydK29rxq6HpSd2jq28wxw5Kf3Kw1sdywr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dx6KThoN8Y94rd9wUvh65Zy7ey19arcTLZzuX9xS5K54CnMLdyqjkeiMmgtiD5hJnVwLpkfN5vMEwegXJz78Nja",
  "key1": "4NsAfqUq42o5fUwfRXjb4HuNbrdiFhfEh9GGbATfqyNWUWKThMospuLa5TrtPoF8ty1rDA5NLfvbg9KVQoBGxgS8",
  "key2": "3XmhFKdXYneHTpmqpWKDQ2MuXhujnxcG8oY9ZGe3RGLoKvwRLAGdxgamUvFMENBYBqmw8uBCmceqi8ptAP1TtiMZ",
  "key3": "58Yov4qKTu6jw9umUEaR2BmQgQUHuLrJw3jZU4rvV1FPYgoWi7t1PMYn7gUVR3hJx1GauLeY9KTfjaG1gxkt2JoZ",
  "key4": "5CUHE14nBHqXkZXwVpfknzgc478j3mQevvV4SGkiSJiKCmvrhmYLKJf1ZnGayeaJxcBvB89kvm3U4u1rf2eh3TrX",
  "key5": "3xVMM66AMoYAdXsF3kZWspu69PzuujzMdwaShhfLUh1nyN4CDMynz1rkjKVkjjb5vpNopfco4ebHyebwwgSvz4ng",
  "key6": "5DHcDny3h6zVikLuUNLbMTonYLdHFrrr4ddrc4mgKEAHNLDtV8rRQjd6XwmbRkihG8NGYsq7jen3CjchV7bU4aFq",
  "key7": "jJLgXTjChYxx7eiqEF463eyFgnnZbSyCbLVc5Y631wXwEWJnQWAXK9KkaHtNig4aDDKtD4adAeFm2Pv7sTtPNPZ",
  "key8": "NerQfFBytmAFWFMWDctnm2YS6Xx53zX6R2qq6Q7WRhF55RHKRLbH1fYAHn4X1K1Eb4RzR7LjjFcPejV6xJ2t5h1",
  "key9": "3iTUqSogRf4AkEh5deGXZwiFNr6vu2zqCBN3F9YmYh1WH1NBpusMZeNAfWnWxKLSXGRodVwgCSaVqUgahETS7pLk",
  "key10": "5Rti16ijU2XuMVqnGXXk3cJpxSQ8xa3BSmUaGmpX6fpZGTKEyHuogRPMtaRQ8R5kRK53TipygNkq9zqqGhXtnuF7",
  "key11": "qdhLnectQf3KJnj7yi4y1q8AxRT4EPvptjz9akGrXzJoorg7YC6cZQ88EQGHvdPaW5sjKq1gv87pyeVQXfh3abA",
  "key12": "5tyMXrGitrEan1DMeVxj3VsdaHgNt3Adj7E2ktMmBQq2qGLZSU1zGDWb5ccuTYiU2AMmArHSzjx4rrxmpUVLzpYJ",
  "key13": "5GVhUBoEfaF2YZ8MCcHmtUkM2Z5XF4qHmGpcRdJQAkfdbrKuwppVYe9yyyApfs7VXXd5nTwdvGdiJyA3j7QWVEdQ",
  "key14": "4cNxZSCxDxNhcv3NjZUBDs2Cv2ds83iD3BdXt8zQczV9F2ceQv6wiFjg7w93wVrb56yusJSyUyt2iJ8jZBa7uYGi",
  "key15": "5RaTtbYwXQXgAVK6dKmW2zg48j8xN4DRYAi3jK2VCSspqPsFtbBBywK4gUvhzRjTMEJD8TwwLon6r2MxToAMyQn4",
  "key16": "3a9Ra4jBgrKLeUp7Z8DeENZXuv25nYVcTAhn978d7R6pDxAVjPUkxKJNo2CSTbcSC987YWN3DEkovxNFi3HyhPMg",
  "key17": "2QE9ArBp5zMEvkiUTX5Ry6iMrcrMBvLRfhoT6Mbc6joPkWTncXKXqUuHSySP7Znq1kyssRp6o7cCYntt1id9ZSsr",
  "key18": "3TE5s7xZqQDATcKYcPPDL6tQyKbZPNLcLVL6vhfLvFCbq9yvpVEnxgZ9FoEVs7TNmWUEYyEQeie6zaHebP5fmm8p",
  "key19": "3w33mHXobUm99xRjNxxW1CN3kypc4Y9GmxHA6kqF8xT2TGMLQd5i34Uv7YfVwoqj1UPLVEWaKXtFovfCV5iYbu6u",
  "key20": "38X89JYSybLRX3U7SsAQaXkSMddv8z2zrpsVseH3hmvTQoFxdMh3Um3npz8efyinpRxRsYh7pDhkKud1KjfwubgX",
  "key21": "2ZEsoxWo6NXf6Cc2uVzXpU4x4TaexY5bBVGXTxzEpsqMNex8eGboAFWpbtmFKsMna1qNfyCzP3WwyKX88Hm6ANmP",
  "key22": "5VgAbLiLkjQ2UTmZmqwgFvdQrxcfeeuLAy9FtNdDDyyhfDJ2uj39HKm2J1DyiJexjEcX3YHikN9MYDGhvFxJocY1",
  "key23": "4kNv68vCdcFJKLLbytm7qiCeDMPQ28LE9uXRn2982hyPmvKutd4feQCmsDEZcjgL72ahSK5Bigb4w7W9Haf1Ndng",
  "key24": "4b8hFk3FrRhqzJHXyoQnhYzo7JxSr19g3ghCujuVkTGP1xEanPEw8m62C3D5MMC9NoUHTmr3WbV2zAdkts63kTST",
  "key25": "qetnTjQAJd39g94Jvwima93Z7cVf4P84azWCiRqWSczEnEQtf2qSovZSNMEp7hyKXAyjcrqpecg7m1DNNtyemUF",
  "key26": "3r1o7jqFU4z3QrxCiQ4H6943sEFbJmPkzDi92UfhdBC19teXsVPCNsbjwkRUhmbYbMWBwdDTcjKCjP1creT8NLZA",
  "key27": "4XnqSL2wzATD41L9efHBPpXTJvjaNTKGJ2cjkk3KT8fn5TomYaVAexxkuaHyyCXFnsDKYLUDvjuxeipRq1mtYuGa",
  "key28": "2wVPyEZgehCRmpGLdkApus39L3MiqUM4ce4iDEsqmSvA2PtzMhyeLwNGnveq7Fsz1z2f2oWBsAPMK533FME65LWZ",
  "key29": "5jYjXhzuCKRawunLYMzdnDBNk4njkRtdZPnD9Gw3rS5LUNxrWd3qC4yBTm16CPn8xkDnwBcRqSSPN5zS7c4xQNSy",
  "key30": "Sa9aX8g7azuLgzxvmECreNVcNvFAJJtj7cijQWQi8dFhARs8NzdYC4eS7jPjM9ws9yZ3HYPaeAD5EdigVZ3rg69",
  "key31": "rVjhLf74moaNVKkBuUHb1o1uwmUjAwvWaaP8C2uQBJoZuQc6JvA1iQVvj4iDta914XmMicpbPs14nkT3hoFUsA7",
  "key32": "4eGLNU1njPtm99UoUCPFZjCLdViTsRSAW1fuekjy17geiKekRDX6N9aRQYkSd82Q8wJ1nUnL6DFuP95XMyhDqsye",
  "key33": "ZuJZM7bFfEVL4QseQVkGQmf4eQkiemQEjuW8831pg7p77ZvKasvJwQQBkGEaSFZBLcimpbvSkKCpmqKwHCZx3bb",
  "key34": "5fMPdv2x4K9nw2pwFHUhTSaak5yL8Ps8Sddemt7nApYuAfHoPnpLfVA8ACqZ5QyK2griaCTWuZcSJs6iYfYbkNx1",
  "key35": "5RY8121N616Cftx2dS7ZWGSHUopQSv3YD6r7AyffmtHTRWhBukREocafz97YErj8X7FBSzfNHGfyeRiRDqE2MC7p",
  "key36": "3W9x4MD8acL1nxbSPKTjC5EpaRCEBJhgSFmozAMdhv7c718VMJuKjAtee6ZnCutxvFKgKVTEVErxJGXLBajXRdmy",
  "key37": "3e9vLXuAuUWjyoZPVc6XZEG4LQFRDLYhKiCFGb8csT22WdKg2dCzmAHMPWMY4eHkFUp39X2MMwJjpWfoVvRRoQWm",
  "key38": "2Be7TaigMZngP1H5o9266cud3V3BNLctiithuZSCWx55XVR2B2SEeTkMK23q3b8G4nD6jujXRxVLHHY9Gx8hfHLn",
  "key39": "xoGBRWEdnaHVXQqiYYyfKr8Zez9rXauEMwWKX3GbJMzc8UKyXXQQidLGkSkAd3RMZT3fG4sqSEtD1V6S3bYaP8D",
  "key40": "Z7nVVH4zHijNedWJH8tQXy4JKpcEqwXWb6BDtJ3hbaftypShYMkbQm7fr2KqnE1aHHPeGagfNacLuEuVps4d5e5",
  "key41": "3c5MZxqdwjrmVoJzf3gce9cCg2G3LEuyQocH9jhgvRR6QgVv4W1goiKaEDKokmPVuwxDbhYT2u8c2bUo1EHt6rH6",
  "key42": "2vdUUQyo164Ri6Jn3qn3YioWE8RroyUJP7dY3ZqLQsKHHGWHmgxqftsFekpfD8W4p5RSky2NrXcgvaHFmRntfxfE",
  "key43": "2ariXUNSGJwpTVX5p8yzc3pScAnZah9qkX36uqZpRMVAshr8EXcxx6Tk1veaZkuAWqoW8Z4X3m3LmNaJzaE3Aaw5"
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
