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
    "3hrchVE3JZ16EQDEVAk9q1RWFKoER38PFfS4wNYFTTdkjiTZzVCtb11cTzeyV15jPaRKenDMKiBKbYFoEYt296sT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rxWW8vgJZwypcJxaYvCFDCTS5eCAxk1N4z7tsDCL84due8KVnTtBysfaKEYFeJke1EUQR4jf1tSzk8wGok2Heyy",
  "key1": "4gtrRNqRzcCYkXZHsK114QqFidm28Vih3fBhn8G4Jw9ZUkaG2mpkRHNuxLJbM6sULmHSZiWNM7HHbjHbHBmFhJND",
  "key2": "3Y3LZb6P9NJ2YQyeutoYtz9ukQY6vQHawk2cZi48J34NUnXUSM2LfDs4THbKAyZ6toQadJTZp7JsPj8Gm2fpCFA7",
  "key3": "S3P1m8xAqmoQnUueyjcpw2zvHMYnYWkmkzR3Yo2htFZQAf9zPvpeTt9ds6sKb3xDCkesfWzprn4ALupfTvB5R5T",
  "key4": "3KE2aXNa9wVZvcexCbjjq3surDBuNQ1xn2a9bn8cD2hCT1xJM9qfPNCb61UaT7shLuXvzLZHgzNrQyc1QL7Sd6vt",
  "key5": "WrssmhAnk5w5evjdDthNZTZnrGQPvWo7supvmnDfGLH3MGNeKqenQF5wARA3nkTGxkaPWFNB8cbgCXG4LgqzyYu",
  "key6": "a7khL8CbkH3HwQboKoTYGWMegCMLFsN6J1asD9G8HdHBRKR5ewL19HgCo3cfkYoNWMaSfDWBZ6uvyfZVwq2jikK",
  "key7": "62sJd75j2jEp5PqsYFfzbYTLqsTiLcXpmBQzn7LXzYceRsEpY76wa5afMaUNHqbhxBJMKCSciJtEAyYHd6uwv2dJ",
  "key8": "3x29mxgr1ECABt8GXPHKuKCDRCnpfqshcMvAVYiwhmmyS3nLhtNYo5zwrkGSaUHyDDChseyTqiLXBwmHReQb5rS2",
  "key9": "5UVaYgtQF3pSpEYv7zFrAbHvSNiwddpbP9aLMRemNeMDeXVnLAsZJ12DHmduHtn6JQQxBZiJwDBvcYJVxgmfKbc7",
  "key10": "4kzf7xYjwnA5rb7EhDYibLRoGUvngzyHFotLsje3uTsUg8D6KK2QFj7Sw1y9MEhExmYgaVW5pQGyFBeyzK6Turtw",
  "key11": "5jQoGhYitTXdbLqzzkLjpsLiUh8o9pBeNThELRsnUT56WYouJin9QdAWhAtotrqNyz8czkV7fj2VHrMocbbbQ4sH",
  "key12": "4VC24zpDFcpQo7kHzjctaDt3VhwYG1jCVrP95qgHHKx9n2dcYi1fCAo1wSJUJ3Yk6tvZzJteFvVH8Q5dNdZBbqqe",
  "key13": "5xgX59zoR4LAVA4vndNsRd6wA12WdnQhstXP6TK37LvxaVVZ1jk8SoTCT3FujHWyNzqokt3yxNqr65UWzRSSotsD",
  "key14": "66QrGBihFc7F6MiinxhgYCYfi38Nbhs6FzzPcVUQZHEiEJJb58jNyyWgCF1DAuwNSR1FRTtp2sXt4mCQ4CjBewYy",
  "key15": "5AZQbTXmcLwjXTbURhX3sxPB4E2XAwdyAGBmRoCgPocJehuzmYVsgP2d3dUVEYXMd9KqpJmtTcT82UPGfd2pNYMR",
  "key16": "5QvDRUfY6ZaKWQ1D3T4FEkJB1Dpd9a9G7PmdpRm4bWb2bqm3Wimh5yGaAuWXmUjLFk2a8Rg2eVw4C48gnFKJmG1x",
  "key17": "3QRnXnfx4qqYkbfM9TSk7gRBuQM8V9Y1KKMVWuEexrgqU76NZDQpFgF3rbs27dwGbNiLnUmR51Gg4Pv3PVwhdSUG",
  "key18": "2dsWg46nsjAC5AMExpRxEfpYLfpjbg92P8enSmqxQFBVSKRGBmNPAicTcw2n6dkaxWrVBPUrjg4tzFaCeDbwW64E",
  "key19": "32V1vbiMCT7B1vvVcowU5RZodzbptV49E5Ntpzj91rGVeqtHXZ2GGvumvgt8ZJBJMNWTYgyycZin1ZsqSijk9NBg",
  "key20": "2r8C697ubk1axSLyPZDaAuqJz5EfkGicdUJKLwxX3dofPtv6yy92VRYX32kncNkadDpYAfLiTC24VmnuBwAQ9ZsY",
  "key21": "4zDJjw6rxmQMMwg2UQaCdfCL7mN4oLxePKHaRpKKGEhN68uTi34gZW1P23wiuTpkqMQqN3ixYqaMitzS5GyDg8C4",
  "key22": "2fL4s5nUpoCzccJcRM5Tk3AxzFZsMeaGFMtM6YaFoqqVUegs3JwwWnSCZS36RFcXRWdNFcLR8cbFjZLxmiYTgyZQ",
  "key23": "3SfS1zExJmMyVbak9ykQs9HoEmtwAahcTxXURemXDCHTe2j3Lo9kdUBvLURL4YkCsBPTa1JPQ4JM9t5NxsXV19Q9",
  "key24": "3ZVsLvusU1jxKpGmcX6Xig1LyuAHrb3Xbt4Ynw4eUp39iMSc5s5TNv39CAnqM6imhfNZcmJ1TaXhHpeDPTi2dtuM",
  "key25": "2UhTQgqSCP19bjFdVLYJMu6KLCghwiYQS2ABnGNM8oJvcCLPmVZp6tsN5VCdSMrzArL6uvz6YXbk8cug1qPB3gD2",
  "key26": "4zgpUt2QbChxxuPHSJEq6TY8BTvgyDg82Hom8hHhoh7q27dhMCZW9pGfhyvEXPEHFZDZ4P6AZKJDzPvaFdEHWaoN",
  "key27": "5rjyZhEsnGZHXDpAycTGDUDcYD5Y39pYsJAngKuEWdDB2YTVjEvVRaSRiFuYZo4Ux1XWUdqxX4KPjQWTmXM6KhTf",
  "key28": "5JqnayCzuK1Wnech5opc7Hn2c892VVpoUftJYzQ9tzjyvWme7Mq9TkiboFjeKbDHN6tggxvd4ZYiapGSBs811MfW",
  "key29": "2FgGmsWRokx65abPL9Te6ZmwuwyCQuepNL2bQFXBvDHztgP5H7hK8DUYXPLoQRLv7e9kX3kqDd5Yh5KeDmjexr5C",
  "key30": "4VdW8goBxGtC7gqRQTAAoaSgtfRwdnWp2e2dknP6MQn2h2jfTV6Ksnb3sfs25KgLgNwdRwDkLHkUyM7QRBiYEuXp",
  "key31": "23bA15zH5UiH16pWDLKKSG47DhbTEABikkcuY5u251LGC33Xj3WaoikPVivEiZVJTfnc4xkAFZFacwbfpymYGX6e",
  "key32": "2DGG5kdthpCtzeSiSrUnHeD4Yg1vA8BEkR3TNHL9mdWVhrEGmjRhV7ZtihWwYqvnyWQhQBHPXm2m7vRgAwJX5YH8",
  "key33": "2Vj9yRsymfohgD3EeHz2qGKFZ3bQmLqmgRW6WRywTDmz7beuTD8tLPEqnLiqcNR6vSzbw6T9EkKSrd5Yk5Xngjvb",
  "key34": "3U7DL8wBcwq9XPieZCHcf7Age7tGPhL5ATZY9jhyM5PssejeYRiAwH3FutJYgExnYyksEmG4ALSufHJsHq1es759",
  "key35": "3HqNydoSgtA7hwTkySQS9Zd84CZ3oEWaon5nRHr13Mci9yD5qk5kvACrkek9tfGNEnFMNYbvKnNrNiyjcH69nL8u",
  "key36": "52Jx7Jzhtwn1Xq1NRRcSaTrH4RYmDR1qCi4b547uA9hn6y8wYxzEtgqKmDVEqP8qANGAnyaNJ3VXwPELoEnu7P9r",
  "key37": "5WWzGWCPK2okW2pGB2rZkBT6Beea3Ko1eTCpsdRyy3Tn3t99yw7rEmE2DZZBnAwUhh3TEkNrAMwZKW4wTSRUU8DJ",
  "key38": "hpVv2VRHgHNmBBW8rKEJh9e7egQsrtQSH5pUxdSTGqrgRaRhGC1EkQU5tdpkHE7c1UQ4z8wDzBqA2tPSHDRuSs5",
  "key39": "5GrrrvTnKyJwtBRKvNVkhMDWDTw4LtmfMjumgNj9nL1Neqo4NZ9fNxxwvAaTxg4FHU5hwwdyKbFk6LN2NUszgXoj"
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
