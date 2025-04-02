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
    "62ZThm63CEvFjryX5jm1CgV3Pt5jguc3xUbtLaf4xuk4RmciYx7K8zU5kP64ovVfTm75Afh7n5DFbsjRg2RGmfoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CyoZhxinLRo5pSRKdfxyJyn9xxTPNoQLs7ohvvRFs4Mg8qpxpJqKs2FsP8wZBV4kVBYEVrgaePZo4HsQ518UgL5",
  "key1": "2HboAPPViotxonhGsp2pSR5JZ4SzU2FCVWXn22LE4MXe1PmRmpg3Fn76V5awx9xPhqQn5sPjY1H2vvq3jakteUyw",
  "key2": "4USmLwfVvsaZbcopmViQr2w72HruoRionLwpkKMJZfXPDMDh95Cb5dh71qiPqCo1ucUfFJrEmdHKDrBxfMqozx9E",
  "key3": "3P5bUogBBW5Wose8GnPjv3HG61r7ehxSrbqDroqJoWhjozuidAnuZ4SCirnsTkLdkPJDHJfrC3pZH7nEX389kq59",
  "key4": "2Yfa8c2ddSGNQgFboqjsXswsXVb86tbV4skEWFrNxdZqahWkZbGYMrJawQMHA2WzS9JYHcWgNA2he12YKq2cAyBh",
  "key5": "3YZxiwK8q5bRSPLBRM3qk2Vjoq5ZbTyQKwHAHJn7L2xNBFaYNB2BhrWUpSNEE8MEaLUJKN2oATtfCYKbjN3SqbBd",
  "key6": "4k6K7uMKPyxJHi9LZafNucvXPoKjnf7ToaGR4ADQzEtAUqx7tbcCJuiBLrwCthQHZGXLM7vsmbqXCW88rp7nLxwb",
  "key7": "368679hYyipAYsE4QCVvzQbTEEs7QeNBrDhxTgymkCdXfvWvbMry3ocqzWvqydT5BgPKAiemM1thwTGVJKAMA74R",
  "key8": "GJYzWmWd6R9qtM2YVffGP7tjto7EtVNTot6EofcVJCCsBsRvati9wUYcmNMAKsSEL3kNR3sgtVJPWGP4d3Wrw9f",
  "key9": "4vMNCLjZxcagG9vek17uZTZYsttSMqTwNDkCdXeuzvTVFNzcMebrxRyV1dS1w9GKBvg9HrzyReb9QjjGdcNU93ES",
  "key10": "2Hp6BihDspUc9JddkqSvemL28BE9ZeZHaJRrvcqRCiD5i5apjVJ4yJima14utrEvCbakWZiMyhDXakLZPrruXDV2",
  "key11": "4aBUB3HfesmEnoZLsZ4wTYs78TfXPwixnQS3pRTtJB49C2bNe1pqdfTuceMz7muK575qboFUDPkHh6iumnNtCwhY",
  "key12": "4CEvBQLVLeoVn1GsRwonrh4qPSoha7xPRZSwVUY5borHoHMMC1dbstzdMWkn31up2ye3daXrcHUABXNwnBokNULZ",
  "key13": "xhifX9uQ1Na27cP7sLzpFQY6nUCekGheJJoUYFbHruQKcnxDCwCBtkwwV6njKA8mc8LpywkPtTz33ir9z2fhstc",
  "key14": "3HQsFaeeGyVZqxX9wguBXvu3sbkRNnRvRchMVuHmZTVYyJpGy6Maabuh5yEPg8VkPckYDARLSWgvoJx363bBqcqY",
  "key15": "oRqpf2dw3q5S7ng5bA4XjZQoi8yFykR5Ud1vT6nTMmDjPubgQvjKPVPjY7o2epdfVBgtrsjpiFYanHd1g9Kb4WF",
  "key16": "1JrpHFbGpKKaaZUXo9CBxZF4MPv3D89KJ1RkLW7JwpRGU31pe26fciZ2nNiVpyTLR8B6bRiQasuGqyqkc3JsPwZ",
  "key17": "3bz7P8SLh3irdZA8LJNsQzyAbS36QRtKhCvWeWfoUunyo6xqZfuvmd6B2fwP1ZGPWYbqhzLKykSSkMKZLbDJPKei",
  "key18": "3jduoMBiE8vT8XcdfpLGD6VBmGeW5dPCwrNia6RzLJ21BLozLJ9yiHAd6wFGtUMQpGgjWmYtjNvfiQZ58payfP9U",
  "key19": "sg5ecGgju6vKetQSdp11PSnZrhbBJzfH1yTGoGBjtZfqtmyQ3wj1febBfY5onLdMctfJzw5agjvN33ywfEds2zr",
  "key20": "3ge2okPrkoanqaHr5MWv3Gtr1A3ZNdA8AwWTsN7ZBiSFt92aeokUx5Emd3oWoS2nrn9JB4crRhjtysnoa9eYh6dC",
  "key21": "4bBmn9ahMmGVXKeFC6shzw8U5aNJZ7F2mHgXmM1EthAd4SjkeQrzAKY5RGiSqJQF6rGiBZ8FSaCU9hapWJoy1P4e",
  "key22": "2y8DMy6T1B24zFUL296gMdJqWMiZieEhhEnPqGHhZEw6MSbKGXoRoarVWntueA5aaNyUmEf5b9dFZLfe1epgLfYV",
  "key23": "3BrEzxuRtHqqC6UBx5UCkJRrXyt79eGmVciaZrxvQjjqhdAg6NdgVV7JCwk1dhQUfhCHAEqudLmKzYnUeXGtPSa8",
  "key24": "4xKU68EGftmQUrX62TnEjUuVqzZdqp8pjNe9fx2FZkXnUvxQ2JRWi8BBhd3GuPpsJND6HHnFtkQdDQjtUZko499Q",
  "key25": "5NSFuwEwTt8xbXqscxKKXUE6WQokKRGxQsxUcU6cmrw5CsC57sf67jmTwn3sn5UoEFRfSjtB6iwY5H495KyWUKED",
  "key26": "5FFEK9DRWTi1LFGrTdDUHZoyy4JAH3ugfvsM88NAYrKRsoa7DrKbbaZYRskoaRBvve9b4JtYjK63XEf7vSLVKMpA",
  "key27": "5Sx8dRHB1Rs6mHtLb6GVSifvkGSzXgmejj53igpJoh8EryHQU32iLm3L5BVXUPJ2hLf1t8TbkYb8FLsAq6G6ucp1",
  "key28": "jWUBPRSVnUfsxcDkQmTg1MEVCrQ7QuVxYAv53opUVhfBJYQVkyWG7AjMrC3mTYhEMJSm482eSnKSMLF88KW25GY",
  "key29": "5tMQGUsPgMKieZu22CUWdCmEtZv4cB11Vfp4GVpy5eR661pFEq3YXnxD2cJjjYDiKYb36uTiJhtEw7hwpJvXwzFK",
  "key30": "kRyqLoRM6cVyQ3E4uHSAcCVdoubrtgB37f8JDL1GBGyhYfTLX4rRtPELeDGw9PD26qk5F2hHetu3BcJGXLN7pDN",
  "key31": "3dER9PUrFjKtcdLvP13YogVGyr4GCdKFj5wR1wGkmoaqunyX1XDcaNt3ykEyfaSeSY582YZqYgTgJTbAuN7ztAJU",
  "key32": "2cHHRrMpXcRbmeVHvxVGpHAde2GweQDUmZjUwLucAioTkMn87F6Bqzjxp7vFw7K6vuTtEw7zzQ1VS8DqjSfdBatf",
  "key33": "5qUpMQQPsxMDAShaRqAauPW4Zzv2MYNeHYDqs2ByihQ8pYGwVAen3Hste8vC87mE2W8zN5bZMFE9SaUN89HgS1sN",
  "key34": "5HnjETJWYMuQ3toRExy6xSpzSACfaxzYXpBeE97iefPhbCAjoJqX8c18WG2AWQeuBsSF5rhbV6Chqn3G6wENzfFJ",
  "key35": "xC64MdMUP3egKHTVYmYs7XKRxUu4nETwwt4zA9Dqzz9CbwMLyorcqtdRQf2zqowZzpVAVy6XMR3YWsABjE5oh5R",
  "key36": "3BCSaSoxdfYEHNgQ2Go37zBEqXiazDjrVvB3pccdoXfCTQdokSe37vuhDTkAKWZ4tFEyCyEbs77APmDzA92Kd9tT",
  "key37": "4cJMz429e6gjFhar6rpZyKUDZcAxgd4aqDsiyk2C7du96MW5PkEtZgMdbUXFWbfK7cWnifHtKG3Yh7UhqnfDqWep",
  "key38": "64XSby2W3Gfqaqje3J3CrGuPZQ4inMRvPubpdVtwxELob13aLg35qRi6iQuiXGoFcemBByK6BokxkJdiaQRqc3WN",
  "key39": "44mi36e1BdBJ5dyEEAj6Lxo6wr2poVghrpUodSbNwJ6KU2HYHnQa5DWA5RPhAXiqutK7bvhzaeVgNJX9QGiz2Muf",
  "key40": "4kBusQYcLHcg2jmyqvddRzcqcUCXX7Snw4qJ2E8LXUQzFsXbjmWSMKFbys8F42Pgj16s2aFhfi1X66gQsrjsjhtG",
  "key41": "2U1BGzN6rvxL1cnCoo8xAAojnSKvfcor8bdHBDc13q4nGBGEfC2znVmiKc6Dsh6jqQaoJxsNCTZBKV94oSwKpNuT",
  "key42": "41Wb9aDwJEyxPrkSTXHGSZ3A2pRmXR5q35kG8ThP5cxvdGmkjQiHLjjWToaxwUWqQS5h35yKxJwJDUyMMtBC7uEd",
  "key43": "Cs7Chkydj4tkWNozaAsgLc4oBqHucq7jCm16MqqPHts8YNXu2wEoab4nZMjPf5vt6ga6d6TUJ4SvBCPsuowun3S",
  "key44": "5dGEGbJpEBbKEMwHF489t5CGHRNiFJL8u67y7n8KYGByNy6zRMB1mW92DBWUFE9cnoTnjqkacoYDgwLsMoEMtyKA",
  "key45": "2JeSy42tpqp5K2YWrybdoR3HS3Dj2ioBYoicuynQkWn2m9VCCdBQWfC9WLmJaSjMeJXkLbo4SY9XDmbSugMdnqTf",
  "key46": "3XZKTTJnvCRz53iMjqa8og5PHGjhSZEoNb5sM8LZBFGKBmP3vEir94QqYZ17twsub9fxADSZJb2kZsjuTCR4StFZ"
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
