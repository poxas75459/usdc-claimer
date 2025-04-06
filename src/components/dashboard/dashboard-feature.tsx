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
    "5qrmf1yPcgKLfmsHER1YHP5p1UDT3hSox51Z4qBhm2YdVEeFTiKumdoT1FHP7DqGhKABCTuGB2bmFTerLH1i1wRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62dMbmjepa4iTgxXFSfh51aPSXmXvLMUMUFMKfBe8W1cUZsYyAJ8dwnXBeUprG5xt5XMNnCUHhVzWHewNuCR7FJY",
  "key1": "43Gn5zQJWRET2JE5Faa28ZKhzUdubQbPqt259sKrF1gHZZbt3SQ2Hi1TMsxW9nRaMiUr7b5VmhTiTY5xTZ8h1qMH",
  "key2": "5711xG8MqHb3MK6LNk8vanQ3wBhw1SJskmxvWT8uza46A2XnjJrMTCZJU2gRnPCfcrkB3iJJou6jMketGvUMWRDd",
  "key3": "4rUfriaZZczYDMCgXsS3oyovBkP8WYcoLHwpMSQwCyJwL6x9UN97EEHWLuWEt2fUtgbEqSY7hJVX5RhjvENAa5mT",
  "key4": "oD48LaJgxeMTTxvVrn15mygZsLfQz47ucmvKyhuud9SQEVKYcEhJryzzpo8EEjpeCrngU7adBPg57UdUKmWAA1A",
  "key5": "5bwUe76Fi1U7cD4DTfe8SqEYdKC3uCsqY5ZUrbFhDPwuVrxt6CB1DwCi3UhuowVokBFN8GjSvvp1CxyEZaQThY6",
  "key6": "3hEE497Ru4X63X7Uu51iVN3aNkNzgNoDqxAKwdExb9Z7pwtdkKQbUNLiHHABdkfSu8uho19eSeE3zwri8PUcPYaB",
  "key7": "4Vmf88rZrYXdgJLRpSsUBhpZLNqriGo78T4hCeEd4rcTbTWPY2H6vrctpELd3hLm1ihE2cVqvLA46jn3pDy5pTGj",
  "key8": "2CAxXYGMDKMecU4qx9zS1QqUvrTtzA74Fi8Zca7E1UkXVHeFo3zCLjn3HuwdEK6dwonSvjpJvQSnuNe7MEcRXXgX",
  "key9": "62EH27cgci5twLepme26zKxN1uVd839L4s2w5Wt7HeGc55MwCSv2rES7w8D1jEJfZDqM4AyLwpvUaC3WFBLNse7E",
  "key10": "2W2pPRvSN2ACECTkkvFGLa91f9qAhri82P5Vhgh8NpHc2aWzaoctq9KFJ47qkQd1bA12ZFhJmW1ktjvDti1Nbt2W",
  "key11": "4NyexK1PtiSj5Xx67Qwi45dv8R1yuqBqmits3Q3NidPX7aYJStHdQgLhf4Nz66i2QGT7beb3eZES4vq9ZjDDN47r",
  "key12": "2szi8ejUoG6AjF2wA7easGa1ZYCam7dd2UrP7MXRdTR1dpMftmzfLPyT4qyQoHo5TeKFdJpJ3m4t6E7C9HZs8X3a",
  "key13": "47NSEgSZJCevhQbyKC2P1kvzfscUUzTTPCea6kHqKWyrK3X5B4Rkb88T8Hm1B2JuSsaS8BmTNhFgBSc1gYcos3Bn",
  "key14": "3nPdVdJ2zpX9KpALdjVAfZszmcozxVprDw2h3VantyUZvB8B5osRSaiZKLJXuLmWagEanHzUL16AU3FC7ZCKwdR6",
  "key15": "5ptPLEJnwDHMLpNSUhygtKWsP6pqHcUTRe6uUpXKFbCq6aUQyfBdMiYnFDbMmXgD45PxjJnpZJ2a1jrUVQYWLY8B",
  "key16": "3jDbVxhAnzvvT4BBwACfE5PX9j4GVW5UkhzXFpKM542BMJywKXTM4hLiPbVuMzkzMRUhjj36N7ULTCfxwv1hhYJu",
  "key17": "5ZaSpoVV42T6sb4RAmKEgiYKwcqWsexjim6RgHWq23GHmSnnJasGgJ8nB5ghued3AfwAmnty26Xhgmir6CcwwaqX",
  "key18": "8LcL42GkC66sd8HKWpAkiVLFu3AzyccP2MKVPgWosqMPRtXKUjfHPA8FZ1ZZwNnoz981uodJCZ7QmLbe4yUtoUk",
  "key19": "aYZo7q37QC4exVKx9D8M3RLzoHT5FX7x4UjMHzSaSfKq1GNJJ9PjESH6gZb4MAZcNjK4wEUXHfeN1SnTAtuaoCN",
  "key20": "d5uvbLr3PUXTPP3DyEdrEFZ6kLuCQdJtUT1u1vF5TwYyk2SVH9gToMVeaYuzhaX3xxD7nhXTLP1DpMd6U2rJTKq",
  "key21": "86iodTpj9oRwrxbNANpTUJs7tmN8vrEPaddMzERNzuANivqKPdsbsXCUyaKWNEzEsBRzeZDRcbdFMrXL4J31erC",
  "key22": "41TaGzhJkqYT67BdqBge1RRkGtJ5MJoHqNHuFt4LNoh3LzsboQnUX1fqXtVJ4T6PdPsbwD9GZbCUMQCeiKCYSP4w",
  "key23": "5cLmb14z1viGpwPUVYFhEamaHCnDW5ba6KEyWw36Zsh5Vfdc5o4CRQi4pKfvUiRNw8BftcovKsU7RAgwnFe78usg",
  "key24": "2TyALKYGeZBSWuJsiSXzVksRoYLfC7JRhHGLkpjn9kzkYmpt5sgp5TpKCxhS7GyPqpqeHZcf2GJXKwp46xyLnFm4",
  "key25": "21DWkZPmEqaFQm1b9mXcNTpuEhTVcKxkKZoo2rJYsu8jyLGm4aCTCaHHDfJGW82F6YNHAWNMb6MhWKKNQuD9WX86",
  "key26": "3MwaXpKSPE6G4j1Egktut9yRXg6pZRveENm5MH8cJfbCPKsorAwwALX94cWFDw5pKQ56tnaWcTUdFwx72ikehfmb",
  "key27": "4xagtVCo5VGqCnXY33DeFQzRKkdDuHYXpuUZYMNmhwKghdfKyvWAHEu4pXGwDqcaFp7BpmyURujV2yEWXo1feUma",
  "key28": "KXYru9d81iEoZohNtL5Uvc9Ujhi2dnmACPpVJEW51LL1tGQdwKb5Bqn9J1Gas1XdMwuuuRsJHaH8mm1dqEeBkkv",
  "key29": "5tXs6RQTwfZopiy5yrbx9NwV2Xts1LPuwjnWFbrZ4p3KEZao8JzbaRnA9ahRbnMmfEh7J5KYH5JyhqgMzRuWq4fw",
  "key30": "4yCTNFQWuy9qku7M4KfB4bTYWPQQjaxvmp7x3G6CbazLKqSL3bDFLTuexh2wE1FbKsrV4ccrk877PYPotxvp2eva",
  "key31": "3QaZeiEjyBuZKTcuadMotMPLHKpxLo9Mrf9D9zRdjKc6Jq2ZT1L7yHBMi7y56CG7zummU7j1dRxyGZjtwa3rVezD",
  "key32": "61HGcZbG72xUFK8C7aMA36HDygXRdYxRZQZMokF5hEmyGfYzdHmMBKzQ6BWLnbuxXnPTg6RNTqGq1g3rpxKj8sBR",
  "key33": "gj5RM5SDi3qtYFWjdC6uL8cHYqaK53YM4LjERGM11gbwswT75qmT2pe6S1DcxNhhb3aWkKnhLSQpXSaevy3JTMX",
  "key34": "UUFRmXxCBH9NxGAa9dDtT79ZJLGxTKK5vBLw2vZr25ewLb2Yss5WfXzU4GKk7t6n7MvdTcy8a7yxNFYC49MLaQM",
  "key35": "43efdsyyi3HvLSqTV62cfQcycmqqY5SHmtFT8nDUR1Y3F1GYdFJ9VyS9qDWhwntwMEXqfyvtaNwYVb4ze5RM6oGp",
  "key36": "5Ze1wAHfbvk5g2nt5i89o1k23WhQLjJyea6hyPUDPFQssvhCJ7uzjGRNFfDiVtbhW4tFTxUzQKuVwgHjeoPeS3iZ",
  "key37": "2T7d3juq4T73GHjTBiMpFw8ZaS3GV2tTPEgF1Mf4gukNMhQz917jbrrNL2TES2TSUhUYSgksVVoEXAPe5vgYibMt",
  "key38": "YGjUNrnZmJUZ8oWsJx3M9EWyeAA473YwEy3744vEBd4qLxMNgDXGGpe5PdSf2utqFYs8R1D6pS5nJkJrz6Wqsg1",
  "key39": "PDHPTwCc3oezw1JmTgXX3eCXqm7C1cdrYVyDGv93C4AZYYspP5tYY2ngySFoz8wQQ1EVUigPXDcKbDmvRXMWjPt",
  "key40": "4YKCqyXX9XNSutv3jDBMCuKz3WLSC8dz5ft4Bk9rYMTKTxmMqYxjspCkmutTgGozoT2xv7xQQavtoJnuV843bfNS",
  "key41": "3Gvq9VMAHVXEBFUUUVJaJJqGnaFtebhX8tvMwNxisqNSoHqFDUUV7UkVCSjgrBScmE2u19S16BdRYZN2jpSppnYz",
  "key42": "2J6uWpxkT6JAgHitTG272HG5hA8dv3BAFJzUwb3qugDfpZiUGPaQg3jP8JzdCSAez2z3kgGqVAew9LqroFq72cFL",
  "key43": "5ffypYxDBmR9yh84AXYb6s5rcDepguEnZSPxVy4fwtEnkCHB1zCE7tNYMWJGwwWdYyNzbC1oRjsjAXD5MMRyiurR",
  "key44": "24kyJrNntR1cYQY4ovNDjkhRMiJpVRWaaocDiGCKmHV4MwrHpM8HqkkdqQrRYv6tgkYUeSS2U39wT2tziDS46mw2",
  "key45": "4WLbJi5piVc2qX13soiVHC7FeqztRuWeoe1VS7ysZkN1RSft4fXoHoMX1oedPfvdDBg1GmBjXQeFhCc3NeGahvn5",
  "key46": "61S6zkPMycevhwPvTLXuvnLAYF3DiwVXxZato8ZtJj3bykDCaKMuU31a1YRjJ4uwYvshUoTFxnGAaGwAq7tx56h2",
  "key47": "rbP1ozVhMbzLmarzJXxzsTHmrNkXbNtnrSdWVgrQAVZ34nYWpXsbF8gagkbcjgqvs6oqKnCMGzrjonnZXEAkhxg",
  "key48": "wEbXvvjn7D6K5whyVAPABVrbwBCfyDHB415nA4gLPCyKgCqxPYLtfCaFgbqeCDhQacRvwyA78CyyiaxuibQjzvS",
  "key49": "49Dg43gVMgJAcb3JpNU83yjakwNDm6oZsjejzasudgexQfAnjJ2JZEtcYa9r5Knzcs2GdYFinsgdhRzHhYcM98Zg"
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
