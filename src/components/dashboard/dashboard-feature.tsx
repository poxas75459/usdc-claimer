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
    "2WphtXX3mpFk4r5a33CQRkdLBmZQeew1jwSykphPnuyKmYvoPttBjuM8661Ui7ChwMCWLHsdur2cYTC4AugYRjV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TWtYPTwkjdgpXbNxnTsCQSByKd8ABXPM5JjbyBnBGipLpSfft8afLgLpV1JgRhKyPgvtc9Dzf5rcpJL2VbGLMm7",
  "key1": "mFp79hwSzrGsbCXEA3CZaUGAuMiLvsVs5JjUsfdRjUmJwdfeHiCne8pLC5x8RPtDodWUieF9kebHmXwEyFbsEG2",
  "key2": "4NMfU4FUErVhj4WYvFk22URaqw2hjJUiop8D8eZPkXfeZSTknziqr215dq7B5bibdN2T23giR7SiTvkw7WbyNydc",
  "key3": "2roLhjBbDJUDn2GtZBbw6Wfi2qabrr4MXZ7Gd8P3SfZbMiWEsYi4fkXDAKDJmDV6xHpcm338BWP4ff7Sk7P51Pey",
  "key4": "b1XnCXK6n4JZ5T73BmAjAsdLstszbvs6FHewmXt4CF7TZPU9urjg3ii5jNyFZGZiN24i7u4QbjyJWLjH6hvH2Hq",
  "key5": "36wg5pEvKwCZCADi11LTtMCoc1HzGetUT6TF2nRKfSgKXT4jXuug14RH6bmqcFaS4yzZZZooi4vgpjSZEwkoZrkS",
  "key6": "AGZs7KCCJctffVY5WecaJgy3bx1VCGf5Hdw2u4XVFMkQR3VWsaFGaCPt77inMizMy4tjqp627crWnjwuShfyZQY",
  "key7": "5bwcJGX38qD2pVaUednD9SQyzF4NJj2nSCwJ9iGkNdoBqCwa2EMNsBmLAeXNNbQax79ehuagSixZW58Fa3vcdySk",
  "key8": "nyxEuG5jLH7CKdXtYBaPGooZzjng3N6sCvhAYFZ4CDpNxQTegfSswCPsJEKZxtumMPW716taJHMoeTuxsUZJxPP",
  "key9": "428BucSMqfUHMtYZy2qUTewnbHSnEC4d4fesbgCvLBG1k1NsTvQddvQhb7Gn47a12gtxDVMAuHnh36dZbm8uwp81",
  "key10": "2dXd71qZ8UeMcrHPavUKKprDdqC85Jvv8QpJHer18oUuByEDNMYaDjY9rxUfQ8N2BbdTnvhjZ8mbgy2H1TYo33yt",
  "key11": "B31yhgXVd47rTuja1wdZzVdiBb6yeaCaeDHvpmb6Hc28jXPVpYMRUJ3bhUM3YzCBBDRqPxTXc5gcLgQoi6cyRk4",
  "key12": "5GPTUiGkQvYARso1FhC9cjAk6pkdHVke3Kxf3cn74ZSSpyWHkjBYFwGUJ6LFKff3nTNowRw4zhJniEMsR439NLMd",
  "key13": "57zLhFsCAiFpcC1TPXubZ1ZFfwhtRsSDAQVYDioDseG26zWwjwcKXt8hMDrhhKnDsiHmrwYY3SgzmKNn8pYsass2",
  "key14": "zhS3gitjAaJ5YLdLq7AzzVcpCxYV9qmYQoH1X7RTCDYAXi5zEdXsLjWz7TnRScC15LgQrSTfedkXGX5tvKWZz96",
  "key15": "3szLHc8Evjov12gSYCGKmG7EqXRrnnoGEfknZo8NS2am1WBF3fofZT6dVPYVSfXb1yHEh28PbxHW2idEWB4EasjN",
  "key16": "4T4UXFVZjiyPVr3FyAZrzxEXLfvXStDywFy4Y6ogULwdysVsLC2B6H2YLuK76ejTLusAzTLNaVeepUta97LGv1wn",
  "key17": "3PgqwrPRms3HyGKaDyFk4ieX96SuwYWcs6bgArjxgx95xnQpjnKktqP17r3NMBnFYpY8VTV2nVq1XBznU28iscwC",
  "key18": "3o5u7o1KQ2TwZRwwGWRcRpAcqhdgp2Jr3pb4dFcodxCv1jXu9ZB1NFNDSxFLy19HVEDaSQZHwYz1uhz8R4fd66vP",
  "key19": "mpmWrThxU6H7RAaGndTf9PJYbmFZXYKSsjSusur6puvK1uDnoWq9DAxbkL45qVwDd3yVyVRtYeyJyLBbphfUF8k",
  "key20": "3Jk8ycCmUvbwo1tQKBFmgBXKqMkxQh36vxJY7pfZwmsGYb7snSiEcSDggt6jUtquDBVhbEA6Guu1hDR21QhAG41x",
  "key21": "5dN5S1vBae643EhrLtiaDqpbqhtEMWQmRq8YHovacBEgxNszqrEpWTCFTjMCdnzb147ugHH7xd77xxR15RkdPiuR",
  "key22": "4wG6J6nGxrUUyrgaFWabravqVFPbSnPssCvgB5mGutoLDWMX5283US34NMBHMR2oBgKgRc5ATPLoFRfgpiR33YQs",
  "key23": "5Mq3X3yd1VVvVYKExocufxKpZiNnfWQiDotND7TYVhpW5gQTT9bBwCfLjBN5PguKGkEVy36AgD9hZnGUUpSavr1z",
  "key24": "3CP5jeVgojRErokhHLxgZcsZuYugWPyHijy1dtfPSRocUkShPPMsjXCKWKCKH25E9NTNu1xEuHezxB8QTBPUj3yc",
  "key25": "3n8Pwnjp5kJbhQ19PLkRKfXkXRhc6xRV71fD92YuhYko4ug8JdkYVnjWhv1EEqjFc4oBMpkwKb2jUELBWiXhSwgg",
  "key26": "52i3RouoKw8PgghNAQsWr9byB39KAWKcDeA5Qd9XDCoitFurZD6cVsiAH1Bq5kNKV2SY7dtXhwXQK4ZVNyZ71SXE",
  "key27": "HrDVLLGFAhGwmEiwf4uUfV6kWWwBXG8VWMtzZpFZt32HUQjqQxSL6JWbSMKYCn1x3Jj5RMkCyeKpugkjfYE4vVo",
  "key28": "4KSrZyD1JoHBpvq2oLGptLaikkcaMRKPG2P8WH1YMEaEXT7dja3JdrEbmpoEixJBA9BAxdc9iyh8REdZtY2BDSoy",
  "key29": "4TY5N9JauJNZGrAkQcpHMMEHyfXLrZHCmcX7cY33HwqwXse38PSJ9PBksjiv7N4GyTkUaNzaYnXE8ATrmZx6dHEv",
  "key30": "KtaPfpvMyG1XZbAiUyixfQPpsGbhY5b9ziRYL8aH8h5PjPdXuNE3CeCTqeVjfKbG4SRUoUS6rpwGWqwL3EkrutG",
  "key31": "2xWyuWKvXVLm15YfHHXwnGKrmGoTwx8DTCRn5FYeApDespis23pTovrapa3SzjREwPE19jkbwmacmwCpdVe9KSML",
  "key32": "3Lxed3DJgaSkzrGiFxmTpSe68r7CMedjtsBuzwnAWvAMY7MAQDd4UW5FosFDNP8hyWW4NCNcroSgQGnKioU7JBaP",
  "key33": "2UL7p8n33UPBSfQmEuvfw3h28Y9g3v46QJLXtDY4rstyVRnViMGkrikwcZaTrGNKPqAW3E6JQbaNhmr5krUqH3Dx",
  "key34": "34t1M5R6jxgS4hrgAxUG9Lg3oW7Zu1cnekdVfcjrKkGZmnucwvP4zXxwH5jQoJYXnVFvBY3JBcC3QjL9WpWHciB8",
  "key35": "4PQ3J4bR4AdxQhjBcNCyewhJ3Gcw7u9nrka5tSJy3JYvhzUKzc3NwLipBciDeaJLT36ztNcwoDA1EkjETUmjow9X",
  "key36": "4KbeSrAanHJaUSoxFnMCT2ks4hLtrvdQgevx6myie6CnCM9zN66SPN4y1dpwvS3p9JJr4pPxWyKboYBjzXvb3Gha",
  "key37": "47ANqexfHMp3vo113VMFWf23PK2BC9d6UGi5Axz92VDEVWf8aEZ94qSqWoUWW9qTmU6gP7dEtrXKtvY5YcSf9R6E",
  "key38": "4oMgh7wnzqFaDAgVYb5yViVVuc1iFxWENWaofjYACcp6QoMGqrofK7Mq9c4Gi8g5ZvybQZvdf8WyaYxtNaQAbHha",
  "key39": "64U2JoWxdvx2VqSzbR5eP5oNWQbWQUvi4vvqHEk5pPp3QvUquYZwjGC4knmVuhmnFGrK8bzva3DaqfSp3w2NSfEV",
  "key40": "2eAd6X1Ma4g8JeURRiToicraXomkojQNhebcuKVnjoqH6ChXt2rDW8UN6wNbLjjyQd19LkgdGfycEZJ7zuVcpQqH",
  "key41": "3ewKX4rt5LU7zmrEYqycsihZmfkcqu8baYiJZ6tuVbzNaY7K6UZhrWbTFtKa1134haZBieDo99zg75id3hdBVBQS",
  "key42": "58aCB1mUprqw6rpZnpuBhifYitCUoWz1fotc6itGDq2ce5tCHVVknPPgcsm7hZ6mh15LYwHCMtMJEWXmUEK87qn9",
  "key43": "5EQPzhi45QuhkWaK7HmebpTkLNnq7NpEQY97FTGz14FgyogWCH8u7TjKPP62k3U3jCa1FhF9jqFMba5uLt55tSSW",
  "key44": "4wm1aASX2WL9JPGNHe12E6nA1dQniffooBkdj7SWrcpvVJSmVMNkP4ZJUHiDV21qGPJowNNEMPxcqU8YTGvC44Kg"
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
