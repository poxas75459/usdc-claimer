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
    "2JfiNnmSYrgJHpc7ZytvZzy1mCEim51aPeiUkNQRvhtP84RqPJiMNf4WTvqMTiSVtHPncbW9mLqoQENQAxQaRzVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fJcQitXdHBqtTBX6TW2YX2URZHqnjtEDmAEU9zy3kKp2zVTFGFPDyXwa6c2YrUmDsgwFMBwNbymszSmoysi3wPz",
  "key1": "54x7oYPHhimXTNia7aZgWPY2tNHdJ7EMhby25k8cUYNF2zQe9LzgqXYk3JGufoJthan4mmFpHwYkqSykPbibsgNS",
  "key2": "gBRfSVYX8ow7vcKX7v2oQGQ3xmRufSLbuGJnpqQH5qB2pREqm3YUf46eXcdCHFn2W6BNSbjicnu9ruHYUhgABGe",
  "key3": "3Mk9fNqhV5X3TWwdoh1wjZhpgHYdcqco8A5cmnfEvYV7xXHzsmGvUaxQ5n7y4JFqqkLfCkCukocgUy2kMJEQNTQT",
  "key4": "EnrnL8QcDb8gmvmKFmeCyA5RtTYeK1zcRsubmNwvQAuJLvDBqh7Y3wSkKZP5Ya1j41KVs2wWGCnaNtcL8B9tAyQ",
  "key5": "oi3Ckn5GCj9sevtcQWKxv8rEggDxRk48KkTiHYHiGSMdFHG137eD8wFgeJ19RKi3Atv4sbnFWHUannVUzbfPCky",
  "key6": "3LXpYSFBjfr5VGb12vZVmqVKP36cqzoCdQqBmSumBdFsgdsV4HwrFbv47wBjhbVf1HVE3uhCXZjUUj1TY7yWmCAj",
  "key7": "4SV1NgVQbMW7LyJig3qeYHMuZwTuBD1WoWV2PEfUiMnJ2fKBh8zzhSyHYVST5q3HxLERBLg4XzsPxQjPnEamKifj",
  "key8": "mSPSTowFWSwTYGBrykh4iPLS5aDS2JpdHvofrq5vaHMe8dKzRFsvEsJv3eUiGLGHzPSrcTP4rkhzNo6ADZFwT2p",
  "key9": "55hTb2uiD7NCSTxMsXuJWFUCRWA8CH5Lp2Acqfmbt8nd9i7yY8sshp8oGnwsTJC4n8GjpUeya89BDBfqNV1y25bG",
  "key10": "L34FV23jDPwneUQeVBZav3rzRDZYHfmaLWBBrNHAHRtWyeZhENfEa6dQQXxkkZBmA2rnGt1YPMWH1ZGM2AwsNha",
  "key11": "2sKYYHtArbpz56fHdziFCtVph2CXxuTXghqM9AukHFncN1hHVo1VQ4NNJgyRwWMFb2R6zKyhHPCKPedom71iB2DV",
  "key12": "4rQKrorZGPPWSoSAzMRLB3dizXNTKPEGWhxq9w8d9gPog9y9dBko1n1htbtktFV3WyX5G34LYPAKse43gigd9YWP",
  "key13": "5EEA2u4krZqK1xNiM24tHVZSg92MReGkxGH2a3w53EhUCLVyGRdM26Ey9qNHLamTdyzhC2pEUMBrvMJY2sKZGd2U",
  "key14": "27pGFgM1PjeUihhUmceBd4a1URxodiCd9HUypHwhWiDtiVSFXH9priZmjBSxBKu5WoU4ZmY3KarTaJWxLm9sm4SB",
  "key15": "2KWrbkY23xUHpXau5QJpzHzt3iHQ7RUtMS1Q6F1K6HYmSVG4cVkQfDtmFTuGFVL5NX4kUK7mnvzHqjuziYRV6tEi",
  "key16": "2Vmv7czDYdbzQdjLeuYwLK1V5gg6AjUaYohhNeoKm1dBhtvSg1JcVVeA6cEvJ85iBdCsjP2fuhug7k2JfqZZtXDY",
  "key17": "213hVF33Tzns9cQiFKcAgNGHXZdTnBNFodjMAyN21MianL6bRtHfRAyXgCmQNbMMLrSN1RsC6KhmB9XY1eRqMK1a",
  "key18": "4YzQLYJ5nRRrJStH3Urx67RrXaTbpxtYz7PpWroosybGRT6AWZs1TtHqYGoktNSqMuJahm4tRHAeiaUqJjCvyo5E",
  "key19": "D94A4P4mNuZYtCUN1CRwDntMqADChTVB7tM88HpQecLPEARyf8iUMMsMZH9ro8MQf6avAi3EMa8nJ5cjWJjz3hU",
  "key20": "4jLVMnt8d4SNCY3yYJN6M9yEBQXDfsURcu4Kzfgv41xACyAofNAf2NVBaF5xg9qjTwmjP6TY2G5BD8BwqZWdTQ7d",
  "key21": "3QH1PkygX1mTeiTK8VUHJBg5XvPLpJVNCtfUyMj6TR8TwA23cy6Pp3o4kFPUGWkhUdySsU6NTP5SmYxCYqB2tr5w",
  "key22": "65R6XJFH7BozdHzVzwazv2pmRtLeiyXVzSAGYpAGsqychCoHGeCsMFCYrYuhqAdBWSBGqL64wHLjBfZnXcTrYZPs",
  "key23": "5UCekqK2NJFxJqBzjLomQdsm9iEPTeswHZrZQabbdfMXPWTukuhbg21X5qn51ArZgr7rVhStvShopAP6tKckca8p",
  "key24": "43M9BgfrDjZUVZTPnusYEuWDqo3pVkq2Mirw9Mx6jnQ3tW319zZHLgEDGyfF9wZ8XpcukQhktPTsRDDVz9ab3roa",
  "key25": "43WbxxmMp7T2mjkmTyG9dwr8LuEjjBcBv96vCFPMeU88iSfKbMhgaUhUDPQS3V8pRy7dxUv5TWaFCXHg2p4uSRFV",
  "key26": "H3aXKYEi2Hrow6ppeBYYb7UiFrcGrBPr6KPA2ojsTfpyeBo6r6dKpocuszeih52nQTCbzC6NZ31FzvLYciLad8a",
  "key27": "2S7bbqKZaB5d1kSbNkqMZygUzCf94bZtjPMEGnVLfMtrBwEHpsTaAksFoN1T9gaGx7PnfQyq7dzJHY7hu4CwfPgx",
  "key28": "3Dd9L5GqwGzEUajCzAgGBbnPK7zFDv5Y4RuHjo9BkEdD8YiUnezP7HKaS3rQKnfNo9DwVk4fAqPtrDz9BEyFnWzs",
  "key29": "3it1JutFvKStyqzqVBvQHVjhkaLhbbQLUCLFZNdsTFBwbVihxC1JMBnu7d1Q5v2WpFFyY71ybZkLC8m4uHnWQt74",
  "key30": "4BKPAyXkUp8UYGy146rYUtPRJM8kC271Zto5PpHF1w3Xh13VgBizmqXANrCB3NoWh5bgoHKxu5MD1KGL1KmwUDnF",
  "key31": "ek48Ydf9jLRk8n5KETLQAV7ViAK9B3f1iMc84ar9aRBqL3YenJscpF54NJyMUhRbeQ1YP54JAe1LSB3hefAqLUy",
  "key32": "3LKuknFhtUyVpRUZwXhT5yHU2vth17RHz7C9FR6PBxDZiZ8fFpEK26KdMyQSCiG6NN3Utbf8i7aPa4kSXvbiUjfG",
  "key33": "2rnhNhKEPx7MUZtEH4VAGCgLpqnzo77Q28Z4qbTGmjVyHUDeGhNTqPnRQwb22sEBEddHkbYg72UZNiDoTheRMDpx",
  "key34": "44rUgQAxTZY5CEQoCwci5FkWVksWaiMwCdJbbKh8WexgGCyk5NMsNVoMKa52EHPZqvcbvDtxAaXEaMdmhSkvyAPV",
  "key35": "3fd5LYXiWkezBqkJmqwed9PAxNGGcibNarzsoZxfoE5LNneVVSY6r2uhSwiqnYqDSGZKVrjwQxTpt5vVUABwLt7N",
  "key36": "hebPbHeMWos6LcMrRZJeeh9eAVoLRjuo1dNZxQsu3e89eU8bTUkFLiDks3bzYy63F4tsyJVmx9UxmgBZvjibz4k",
  "key37": "339n9yJLU8Zj4bC6Qrt9nRUeqvAfxUn75XiyvjQxkvkGybbgX3G62w3GdBriJ8RwpjAkPNkrznohHCtqJUEruHqw",
  "key38": "49eVZdB6PDZjZuAcV73AxZsWngW69v9mBFYHDnSF6CcCMMpMNBFhsK6NhJhYMDkgVTZompeu6SoyT4SgSUz1JJ1Y",
  "key39": "3skYYuJD7XUYfGcfWdhVofn1jfJ4UNeX4yYHy3eN6DETuGxbvjgxShdWxSYrqD1NVXXrn71FLB5EobAzkHrYjYtz",
  "key40": "ZvHYZLBcCGsSNnxPTLWpg6Z3dAX6WSLCKAYCXAL644iDaRf2YPXeA95hzQfATWzg2aoDnMsiSYctvmfHbf2zfL1",
  "key41": "ZzenSEVQWpaG8yd6LEPuuD7MbWZ7H4kGyt9xEtfmGVeJd4uWLkXkyVEvKQNBEt8VUj48Ccxfgweti83uzwCHokV",
  "key42": "jLZgN3QRVtCPyuVVdUm3J6Bk6DxGMEyVUwGVipwSu4hbXwESsgqbwEac2BuBaxCneDtRrTuGfmZNcBzgP7NXhmL",
  "key43": "4Z3Z5X8TtM2cDzHqmmxdXYSWJPYcBP9pgDGVmEAnM79maqdSJBm9gUfiWisqkKWVCAwnTMxgA9A4FH4cyFQv7WdT",
  "key44": "3cjve5Gim9cQRhtqYsisfqhkm6G8zu5hdy5B6MUfSHg4McL7NVMqaobxbHXdBG1YGJLNRc1CtuEGVggnHAoYk1L4"
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
