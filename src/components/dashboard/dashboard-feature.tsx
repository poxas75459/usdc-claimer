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
    "mvmLfb9SAVtqstgscRQtm7B46GKjyE3ZMPHtWtAkXvaRf4dtnk3jD5bqFNRtsRY1Dke9xFk2vy2XcVwEcgxFbeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oAT7Q5X1UUesCbPfGT8rcBicmiXm62m2T1qYeu2Kw6pMY9XDWEGFf4VCRyZSe4WBJhc97Nwtkekxg9ULWXggGVE",
  "key1": "2P2yri86RoLq1zACEfDrDLaYXeMq1EGjDDcHHuAiTG7oSAdMkkBWRMb8ZV3a1ysxCsXAopC9ikaX8FvoDC24M7cr",
  "key2": "37K2JrRxf2dEHCQ1tQQVYTgQMqiF1XXdgnY7wYZRCpATTb4fHChYi6jjWTQDaByzRmimE9H3urXZDz5ZonwRTDDH",
  "key3": "2h8NHmmLjNtzQn5bNeDwCSLVczW1PTgRo4yh3H8osjTiF97oz18LeaPuWHKsKtrLinnRwVnx4CLtfoZpzfksrES8",
  "key4": "4EFin2ZqquVBUjhi73DxNK82KuRXu5BxvaS6gKSkMfw4YXYSihgZMxRWXdAzJRacq3VKTmhwyVVwyjSMs9E5BT2j",
  "key5": "4rTsuoeADePHyKrWTEUf9FUEhNs9owtn9b1n2XDCn8TQofdUhxfpTgnJhujADnJKbWgCXZ7d6bS4QmnGfSafh4p",
  "key6": "66HEdU5SnpCyYRNyT6dttVZXJwRBdCPNDY7rA3ETXJ4HfibTwPSxAnTzDiaR28pKKy5FzngjjVtcyrotwgC5btGQ",
  "key7": "5YfAYZ94B3WPChuxi3CJwAJ65ec3YSH9ApdhoDiW9YpiapdvQg17uxF4cAXimsHfx9YmkSMrFTkr6CHpLfvkp8hg",
  "key8": "3e7FLgKPGwZ9Sv9FeXSG8ZyWedQnBMPRmTMyZrahC3TTMy5jPaiD6jHCzzhSwXz2KRsxuZUQSkA4tsqCGL1vzNQX",
  "key9": "53Y4zKQqf9at8FG4HvAecXX312rXZbLfD3nGH3vV1heLWHmSsfsztvhL15GemPGU12XuLQ568KF53dfmUJ9EouAA",
  "key10": "4zrCPfcjmmzzMQAiK4gRwiQnbzCTppZCybHVvWTaeAqq6FHfVmpayZjx2BxE29BBhKwozTDgVXfytLdWLNkhkuFh",
  "key11": "ABcLFwnYnQsEqEQLDKmTsqwskmQA9dJQRfQu638VmbNRYrQS27TLZbcfiUBTjg7i3mtpYxisKZcbGohSkTPXT5m",
  "key12": "2QbL6bzLZpdm6hq6GRdAuUCo21MkZpyc3eMaVUdVxQcWhQq63RCH1EmTe49SSP8tdH2k1kGRcXAF2qriXHR4MCcV",
  "key13": "2VtXgcfp73DuBmA4zpXf43qkVHw9qndNvbinritfvfFkoZmjEqjVikNmj3CSkqboQNeyYtXakZyYk8QqENPpqkBK",
  "key14": "47m8HBR8xefg7oNoyQujDZBbEbmvU932z5ErL3Q4mAQb3qPi1PgxT9awuwaNH97NrftXboaTjCeRhmAzP8abPtka",
  "key15": "5SHLSbGit7VJFHWCe5H1CBa65RD6bCEcXbeEchqW6LxY9Gz6j4eVFEadWRQLe731vMPoqB4JW3L5GZG5sFUL85wE",
  "key16": "hFi6P3YY1MdJz9KkdLiXWCdRMSqpvnsmpTbVRnD7E3NCsat5wdsGUmpUegZhahymbSrSgRMvF41yS2KcSGEE6Pz",
  "key17": "22tGyV95XX94PytsgxtiP7aYcrAPmE8G69HrZ3iQvuTcfrsGBn6icSfzPPEbpvyU6QmoA8rHqUdAuk3ZEinmN64P",
  "key18": "4KP1fJ7RxvZwJMtCAs87hPqEdyeaCS2mrfBtjPGsJwWE2CV8vKMDtrGneimvbjnAvDbjT2aybVDY7o828XzhjKAk",
  "key19": "4U1HZrfQfQK73pSSktaUuJH3c25oAPZsetgMFF4nQB7o394tN1DEFThHp7X3b1jcMzur4vHYbmGF3fBHrcWzY9DZ",
  "key20": "5xeWVv64PTVXSqyhC7c8evRi4sza1SdUcu1qnHs5HwaHaXAaQxBmJLvDSednbBByVbDCexzzQisLgQ6FbJUphNLX",
  "key21": "4oVvgpaLpC5T27QXufiqCTQiDG4tZe1yPnUNcRSgLPbJpS5ZB7LMrRT2WsbW9wwhrxJBgHzCxbQwWBN5Z5ZNcHUC",
  "key22": "5z12FANbCnkLFbKKEZvF4ta8XJBweD3u5tvgX2BKmtkcXJ8weUVhcGiEUgwqeHFvFDu3Kd2X38QxJ6SV3jczoBGg",
  "key23": "5UzNt9c1F7KFCoojXihCrmx9ghheGdMuSadQCRiW7WS4RgCyj5zmH2y8NN3sA6Z6YViTYyo88dE6xJpMh8JDgDcv",
  "key24": "eGp7cfRpUP5t3big9YC7PGRgC9x2iEKH7k5Ps4ojp85YrQFn3VhifsXKTup3YGnBxWPoaLX7a3WYWVouQN5614V",
  "key25": "kiaX873VsAMyBpCXRXPoVtQHBdaBmEi2dRXfJMyAUzEcCkuhXSFhWYWG9A2bhfhnqMwXc2jWmCxFp3zpwAEu44g",
  "key26": "2FWRMX4BqKrfCS9CKsmrvHhxXkBbxXRzoTaPA4tiavdnV3h1HiiuhuQHM3dB9LKDqRMiGHNSXJTZ96BLffjcMEpn",
  "key27": "2qxzkeCfais8LGX1zwW9W6MTeZ2LHo5VFmuTtatiyxNJqnAT5rC31zXj4jC7UGx1hHVZPzUqWX9FF7puTLNGM6D5",
  "key28": "YKV5JSf9kcPjYg2MQNBWKny6cyfZm9tUmtVADowj7ASrayvcgKjZpEBuujNtaZYeUAq9JfBWS5GJUKb9cxyQe2f",
  "key29": "2hguf6hQZenGCwKtwaCU9CfVNpTYSjK1wi3hbCqqNT1FKssvjSyRPeA5eYqnfcv8SnHUpH4TLGjHmGSP13tyvQPu",
  "key30": "479t78YF7QU6LzDKUypDKwbxb2gHgX4icVZ5aMJt8JJmdBRNUjANQLmTuEwKxyrBhhDH5jEK7zMunDiNJW3iEWi1",
  "key31": "65FL7VzMDZTi25jn83YJhveQ8bZTkyRDUbqi5VBuZyxxcWqT4ynw79Ymiwpv6USQ2X5YmFpcKXsa6cV9zsznJ5ZY",
  "key32": "5hNfzJA4Wid3M3wew7CLt6ux6p5krxgs8AX9XrmDJXHSdx3jQFNeHjdNuE6Y8zTjkuWRTQ8HFGBEDPdVuPYCG9BF",
  "key33": "47x3XL1EBCB9v3QoGHmc2yvuRHRsoAUBqNDedcuN3zZjD9t8hrPhEQmGTEGEENuT8BHyKELbUBYTZYQFr1wLPHG2",
  "key34": "MtwxFXaWmvCThe1M7Euqy9dtyE6CwPu4jr11ZtssvyEWpZzvuS6UJkFa4FKPungvoM1h4WdQ8yLKXfV3Xcewi2k",
  "key35": "4UzDTdHkqAcxXG2jDBH6ZCnRV1bAZHxZ88JnuY8jtGoSU7QuQyUW3YGMFoGwGJv9DYEQwU7Lde5LR46qJKxBJjcG",
  "key36": "41JqrFP3sjFRZsxzqtsDhaFsesyxHVfRcMctk9vj7AeWvk6hqJcBNfG8wPoMqccmiUZBFwJA8hASDkYmT1AXEky6",
  "key37": "th4eGNcoBnKyiy9UqguS2NbhYJV9rkP2qQpoBur1QnaPe5j9jRPkv3sRurcZTCHPGXFzhQSPbcJkH8NPAksQTW3",
  "key38": "2fYZNYrzWUcmnmyK5unXb5pgXH4SGJMpHv7XpY6CwdJzE96n2RPd6GgHmQNP2C7Q4Z1NtgVPMGYrkdh4dFwJ641R",
  "key39": "3hMvKyUjbQLxuU8iNzp9zRXJ9iiAt8wuJFci1ntNMT1ZtiXf1Y6vhna9fSMbMsmJHJqWPV9vCMBjbzZ2X8RzfSHM",
  "key40": "35hsJ3xkSEtnqZ1Mw3UpHHMR2w254BMDu4KzdGTnrAQAk8WFr3fXZrp4zvbWaGck8ZbN6iJBdRWZeVLhcRW3Ybas",
  "key41": "2h5TsXVniTTXsRcT7x4B9FE89LDXiMZd51sw3Q3HcZpjU18A4EuU6p32aXZ228nvoj296qBPWHAGULVB2Udfb6hp",
  "key42": "989297Qc5o6RTbxo8AjwJ6sK3o9JHYiHu9U6GkLhnMsHJ2z4GcDZhPRQcUQAKXxf4Z3kTAnNqzP3w9uoZMU5Bv7",
  "key43": "385cvEd9NckAximcjZ3iGupx3muzZ46HHan9Cdyq3yDEqnko2997Zpq1m4sBGVdcsHS1CdyB1C7km3TzLMRWuUBS",
  "key44": "2j4zgXbUeSwJiq68exuVgAXe3oKsG6BGT4Rrc2GSLqmF7aZgfmLBSVLSp5z6bVzNa9kvbw5KpPMice4PyLeriExE",
  "key45": "4BeWw3kdW6aGk2CbaqVeaWJHCQQ4Re5PkFmZHWRnAWyYvkTV49XoLiDT8uCV48w9yMEuY4eVyrUfMwxDjBrjeZMi",
  "key46": "3m69edHdHyrPvfWCfHNBW7kggX5E8gjzeKcspufAQDMYAVGvHRhi8vpCRojCzwVxqje4qcnEetketXHDwDaVxtuc",
  "key47": "NaeMpxFmW2b3KYX8Saji7hpM8fbxxeWiSzgXFctbwqWEXmyN8zAJLAhHGzygbJRkKAoDkUVh9m6p4h52SUzqZBv",
  "key48": "5fhwgZ9TTjhNeCBbkdWsEy3EdceFCwRMdZ5eamk2MX7ButnuKwqEiJfAGqU9LmmfEkPipMCXLRXiLgH81L6vLtoo",
  "key49": "3dcMrLuPwbqphTkNq1bgBMk6AXqbeAV6xAnhRf22mTS6gAYAHrpL2u5vi4A62bcwazEu5eYsupmAt44YWSC4TESi"
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
