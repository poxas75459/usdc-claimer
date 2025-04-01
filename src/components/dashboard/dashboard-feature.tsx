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
    "4nNwTsLFyh2ekbSYb3dR3GLH3usVuuALeMqXgestNQPrPoK3j4SMuozn7bHexph2qTsXWsJTL5tn4iDSS2W4nSMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RCcp5rrQjPXSQqsgNaoYoW1xp2JZgu969mU43aKbJq8CdH3MpsR3tEah9Ko9U7PFQ2LY3tGUprbLzyR4Q5LNhLL",
  "key1": "377QcFB5mVvHMMGahz4j7WhHyMgf9gmQppRUkURZUXsK5gmZ6znGWTemTc5Xo7RgqxG4PzTgGT4D2FEq2KLCScog",
  "key2": "4jQfomoLmEdBFFcNs6PutqnknJH2nFNrR8UMptQZXF8pR3zWj987Uk6S2Vt2Tzya9Fz9rHqiURA1ydvNrSD3cwnQ",
  "key3": "3CDqKrqktwP8JCzGFHDncRn9P3mBv1ZRsqur4Gb958MNSr1HcgM3mvJVzXdCqF2t1qUoaENRzbti61mbyGKmYJUc",
  "key4": "2YDXfLb3sHEF8KDxBDRctdBPuTJ5rxPsEQeMUojzLQJbAoxxb3cQ84VKRH2YU4u6rqTemBenqYpw5D7GbaGVcL9o",
  "key5": "4FisEBcgq6zmbeWtdQrHvrWS9XseF8bEiAKJ8jzPqGz7KcUVoUQzjRTo4C55f9vnXER9fEtgLVSBuYGX44MKTGSg",
  "key6": "5kiMydTWdDA1qWyEFWpHCUMzL8u1LGeR2B61sTc7Ssdrae9Vi65L6tEHWVZ3bLv1PW8V2BzVYmNh4pRNoQUbAf3G",
  "key7": "5NNMQxxLScC1BaydQwTm1yqRJPuPrgzGnthsdAAM9bAg2uVsDXqB6fipASXBET8LAiYBVhzj8Yvb4yxUzxsLyuZK",
  "key8": "SxEqDFK3dDEEc1GSnUmP8WmJRFavEz357WgF1vfSHgVnAy7TzLvZoiGH2FCswVAoyJ8BGpbRgCwKbqWseGSVVQ7",
  "key9": "4DmKd6bp9jaqnD9YPhxpDTYWa4bCVkENomxmTN8UpQcGx9Cy42ZBQ9h9bioA6X7MGwMSF8cMV2KbapWaTAMUzJe2",
  "key10": "22e1iVRFncjhfzzsne1n9GvSVr3VtWRBAn79ByrkMD565ykQGg6Zim1Jrn1G32TfJVfmurJP4h5gjYieGGzXTyRp",
  "key11": "52rHNPGTPUrGpKDwvQ1q2SSMc5XHZdea2p9k6mpS8fyL3SFzfv3D73Js655mrCuqivEMuouhC6gYzzUu71vNUPb9",
  "key12": "67aoZBDxQiA5i3RCCLgs16K8bLXfwpdXKm4pwkjMDBUCrAEP8Z5zSdU4M7KD9Rum4Q2QuquE8QUX9gJjGW7wcgDs",
  "key13": "49P5R9hjmfv4DFb2i2TDn7H4S3FYcPevBVpagSw7x1zyspQj3koCG7wCnTweKtUE9Bd3Z2FmcLwZY3uKSWv27Rz7",
  "key14": "399tcoo4bHGWiysP3ifWfT9FUUc7dAQQb6Q8xo4aAEEdkBRDQ78hZ5DVSDTEGKfBKQK6xs52QMoZcijbLHdYi1F7",
  "key15": "4KpNm9rAZ7AEP3wSLMctK3Q6etDQAtBnZRQMHVCEf5xyXu6Rgg6J3z87Y37igYAfWgafyxCj6F98wnraQLKXbU2b",
  "key16": "5yVR1zwwRD88vxtGbYZ6aRzeAG1pyJ419j8xX4aSNE1MgzDwxDd2RTmQLGSAQgR8KmATbEeRChRmnnv7neD4SdXq",
  "key17": "5VfBkJ2YTSDs8PAxXqEkkYT9pD9YnW8YP17vzYjmYriMpY7vF4KfmgwGyPhCfpZBw5tLujTpcmgDvrwHJjbkfoqt",
  "key18": "5rnVXJvqfXT6p3PimKgs3Ppuh5qBGMysNHi9WWBkVnoQF8MEyLtQ9UGQWxXap8tptb1Vv1yKmZQEQyKtB1UwF7ti",
  "key19": "2hSQqY5QWecdvTF5GguXL3NB8fLgRg1Jtt2xXEafpkfcSVKUKCnycx4qqBHTomFYptyYsHV4DcwLjg9mhAzPhbEW",
  "key20": "tPmcGERE8yZocYDizMFAsZZqjMFSQ7aEXZTYEZX2GwBGq1NC7Cg1pMKMvVj8UuyjwKiS3jPp4RBZ1W1pRF9pTze",
  "key21": "3V6EyG1ifpxPKN4MzhfH8FS7wYUEC41wjH3u6BwFztSApTHw6RAKnWKwT8Jq2PUY94rmpThGcoRtQahhH1vKDyxG",
  "key22": "5oMQ8ZDqL5EUGcwE18ZDGKKWTvPuMobRuhQ6NeAgHAb8M7SS8rTzos6Vmdw45GwEKPjNnxb3ByCv319US5s2nkHG",
  "key23": "5fq7LBvZdgWXavZ9mpoqu8LGaaT5wPcmCoe3KZ4XpQdY5QkE5qb6izc5M7u1Bkn3GqC8KmUXKvxmrtqMD2LNHCpo",
  "key24": "5vWAuHkW3r2hRdM9GhNwYuwYA2wcPyxakbyLQ6kpVdj6DkJUbLuPRft21sAmTAFWKrwPSoKb55BZF71FuoBHGFLR",
  "key25": "sucmbjSFPVXj6bNU7wMjzR9MVmvHRanRQXczx76oggS2kQj1o2soghWPiL1eDY8cURZi7Xq9SvkRB4qTZnpNpwB",
  "key26": "26mJouNMFnsGDEj8nNLrgPo48GeidPcSUiZHbGiPv5wReJqkotyzXNxUxAq1b52nnm2wq6ASDRBSK2fFiTPQgALz",
  "key27": "3f46c4zoQ8KsqbEhDjFyL2yo1kce9Scg1TrTmzJjHsAGRvZLoqP2anRjVKJVnUWRijEYdKPa2wHHLtr6PgJJB6H5",
  "key28": "4WGtkrHF54f1cvEymtSb4H9qg1oc9YqhrU8sqsFrMj3XuroR81511hywwnjWAisaNavw818zSEotJPyGg2yVXzq3",
  "key29": "2cHMKSq7dmW48hugLrBT23jzyNa2ubujPi8kW8htxCtBuqK5EC7jHtrBq2p9JiZXC9aXooQ5zzNjHj3bhb6W66ou",
  "key30": "2ZUgT8HmpNhzJPKm7x3ZKgZArBDwJ9sFf1UUahPiQFXjPUPsnftd9ujvTS33NiY4i5anQGtGowxuYnD53nmq4mT3",
  "key31": "2A3vXyk1yPcuZ49EbijBU5jMcAaTFsUf4gWg6woRL3jvEsdffrxfFdbZ8ndYExmJzTCiEJFBPhGaNkHSA19ZJy9E",
  "key32": "3naemNB1XWeTn21sS2fjgVUrsFz5dzmaKeLUatRqhqjuhJo6ULYnaduHSddmrGPtCMtitBGLeAoXS3dgiEX5BjNA",
  "key33": "2gWdJZxGD4a6ZFHTRZwCFhsQVw9rxvWpxqRYZ5CspBZ8RW5UdWnH6JC8Uhin44m2UXMdrVLbUAu6M7vecBrkWcwD",
  "key34": "27uU5gGhba6jQgc1bjSsgjgWNX67WrxPE9FEhmfAi2ZWrxqxZaeh5Mk5zXmPGR24kufWfsFeQ88ky1Q483Vekfsg",
  "key35": "4YpCD82vt9gdfjjEhFTZHGNyb6kLhwZamhfGpwT9fo3SiRyGaH3BS7WcoVTZmpvYNKAwTCfKZnJV64ubgiMQxjHu",
  "key36": "8MBHmMg7rQi948LbhpYc3yfHfJ5rJ6wpkCsWFH22s8STxiHCsCT1GSM6Tt7sbezrCHGCMoWar4Afy624pczWiXZ",
  "key37": "31gfKZwmBSdMVPJhsAu8UZJVU3ESvYJwkHQT4v55puDM7VxTP4ciiB1A8DqusDVwyjbB9CzK7zbnZV1jRafDercx"
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
