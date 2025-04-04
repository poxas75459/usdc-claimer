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
    "2x2e6uQxPqQg3uVftg8Epx9wiZt1c9UWVwc5prgnnNgAWotfTL7nSUdV354oqpNz8DRLNY4X3sDpoWYwrhLM2Upg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sWxuMsByNRpFmDNrUyu1qQqnXWkEiaB1dfjvdR7u7VwNjcN2Lh8wr19TyyZxa3Z9uY7RnaR4ateChdoztxEwMc8",
  "key1": "5patAFp4km97wBHRgjUTM9vWgqPB7UWCLR2igRo7ipLrMWG9HLoD1SS1TkWyz9aQHNMg6xAsVsMoT5V525q7xjPG",
  "key2": "2jF4vJGu6n6kC5ByRg4ykFJdJzETzBXAnAyT2MiKhWHu3nboQCiBcfSvW8DThTi4Jbe3jSi3YT9aye84WdoErGji",
  "key3": "3rXqnqZzGd6f69UeSPJmVLkBrH3LGihX11mf5RqxmKTnHYdd29aPX5StYskd17tbCkTBGQFN9Gv2MJTqKc8QHCf1",
  "key4": "4w3VVyPg9DJSovqWJLTk4jqiDGZsuu1mpaZUzmSnJH6ZUgf8ecpiFU7tbbLewLqp5eEFJ3XLsJnRRApbPhoqU21n",
  "key5": "34arFdm9BLDiFoffmrNhUJjCFLus7bUF67gVbVFc58F8LQKJR9ndYpx2tuMyBMvPjpxX6icpXJb3BAgWCabrvkEH",
  "key6": "5HyJCKjGsgaP3ZVV2ADsbPCTnmdTjFRrMaKdHNcRsyFvkRvQqnFpeoafz6Paym5xjARFryhJUY4SaY5fyBpfufiA",
  "key7": "Ld7FoehEJp5rRpiTNdS6sFgdKYjpTgyAuQ5ub3W8neugVtqough2WQHrdLj6ViHjDvfTtTkxqZMUnvS62y3iHpv",
  "key8": "2DXt48RpiBKDQFrG3Cs1FWco3rQ5PgTamHLEnKVqfAXbfHygmX82hJyQpYeG5EmC6wUG41PPKJLeEBkti8EpneBQ",
  "key9": "37UPteJLMM16DJfqYW4MxvoQcFGKdHzjdi6mKDtvgDMaisJN7mSivmCKtgzyQ8zktTJYvEub2GT8ak4Y7BQBkKZ5",
  "key10": "4bMxMNuv3iF8fmXMat5SphoVS5S5qm8qn9Q6qbF2Gdh5pwGs685iT37hry5uZWCAjNara5UQF2DajTnSBWnnynNr",
  "key11": "29cZRtLAzbAZNy9QzqWMiACQecAov7mPTMPknBooUqQHrSq7oQS1YPWW9T7kixaEt98XuiCrZkxMYgwcXmcm6NJX",
  "key12": "2dS2oiYCTmYJv1aHuoErgWqqq77QyPhsHFMd9AAHhs9sAMjgpau3VAAvAmNr7SwJS7yLWZzMNqrEn1YnJm6TxSoV",
  "key13": "43ADsVkecnGe1KKvrQKqKY4uVRnpPQAkjd1cQo54LuyAQwWvFi12YGyGExUFrGtHbUahxVka3hvgt5pxpTpugYz1",
  "key14": "Sp8RoWJRLuzERsr2QEwXQfP6XsdWJmuR37pyVMC74akoPBFZjFMsknqbUvEpxxVrDfBvRjUEDZ4kwRd4obi2DUD",
  "key15": "65LRSdLm3igFxdYSayL39H6itxenCDDh2zaQ6hACvVD7CQcEZFdNAA5Amug9zbEDYCEq3W8CQ1ZMTwQufNCKnRoL",
  "key16": "5ppyHZAMhsrMEaTz7yBwWCaJaA83g2qFbxnEDYPpVVmTb4qLHPwJ9JphZ8HMhVQ9iy2RjyVvqT6ugnFkqSDtuLc5",
  "key17": "4qxzRDdEbhFrRrRcLx7ZRL4Xzmumy9tGxUEo3yoUkGhnZQxLaGBqXimfHCzYVTSPa9QHEXfkp1fGHYARxkQEBMRe",
  "key18": "5A56WDxpDrxKeiREgGMMvEs3JWHauYE7Z5GfFKfuZhndLwfLUGDikHw4eGsD7AvBfqpPbCkvEzTE2D7pcjj1B1c6",
  "key19": "5baoVKd5EopiXbBqqUG7qt1ZKWik2L1fm5h8zmcNZGNMrq3vWMfgAHDD57ht8xQjkZE5WeEH52UCxYYySJfWfNg3",
  "key20": "2TvxMEJEnd19VadhAjqn1S1fxveXq3jD2jvADHtmSo7hJfcCDeHUkCmSGtBgrS69a8dMaA2d2hjWNsv9QJnzVRU2",
  "key21": "3N7rknbEZcZ6ZFsyJWKZAnUcaP3sbNmJx4bFg22gF4xS1nQiVRGA7MzmG5BcaLX55ujgcuR3ZQEDz2pSMZ9ShjDt",
  "key22": "YiTyucRuZkFWemVG2MKiRU5yXRKFmhkSc1V4nb7kyBWbbpu35mPm7cWE1wgZS8HxWPwJRXc5Z1zrQcEnKMQqiwA",
  "key23": "2tU6eC1PR6HRXEdHjewv5coRsfzYX5EiwGsm3TyVY7Qw2ViKj1ih47mcqpY2zoNNBM4bLdGQQiqKfP8zNdk5zoHC",
  "key24": "3fXzbjFyCfxJA4GzMEyuRxcFZaDej7TzXG3QGBWmtUoiYvEkfCQanLHw1KPoib4uXJVmqJKewJuLcjWntTDqkyuw",
  "key25": "4qBiZFvBV4YSpB1HFRe2FZVURHq7fuZHzyQh9skLBy4JskzMe63xfMVxQA4NtDwpnzZWNheTMLzKZaMxAz7bX1yB",
  "key26": "4oZfXRsLYYQV2kUibMp4bh5FaLKmQttwnk1kc1mP2TVfkWiehiVFAWevg6xxeRwDyvNyZ72M5HoU6jev6jARxDp",
  "key27": "4YRwvJyV1PZfQL44S4Ypsar48FdYYxz4xSWrPBGjpHV5jU6xq3gTuzeVzgUbkz4PdxhWGTW7HmAGCRY5g7mexn7n",
  "key28": "4ZkfurAszZRwhuYERjNZknxKWgZRyQPqZ97oXsq6rzoKgqgfqYtsBmDKZ6meAjqEcC3FcCBwsLS2ktmZsbgyBu7f",
  "key29": "BzYMTricVcez76iRCPuUP7bi22BgNnjjyKozewT4o4uWJnEmkMUYUeF8TGbzNqzJB9yvxKd7oV8BoT8BZtmy4WE",
  "key30": "3Bd5NQqrWM2HipfXrDFVLu3WH5T6hjRGDmw2Gzp1zam43Kmnxbw4bDWuQ2WKe3vhSF4nwyPLmwLRkY6WN86wxXxB",
  "key31": "3Wia3xFLxJuKY1QB9akM5ZKTj85pRbmKS3KVxeD4FgTjwPPt6SuNEu329bmbra73VgdeDXAkj6LbKiCohTqF4kXB",
  "key32": "SHLhY8JbanH6s8U5J6mEq34AKroiT3MDJBvSwPJdEMJNHQByqKaAKfPZbc247FxxNGjPEomt3tZDJ33UFgwc5Rt",
  "key33": "66dYtYMgDdVCxVM51Mbg6redxNFhagK1UirURPC3sGhZujDoMAV199hph3L4cnPAZMVHuqwugnQfhN2wEsHwbfH7",
  "key34": "KcVZUELwCXQTAQLQEQGUzRZyvbKmFF6BTdLM3ixEjhp89kwQmAPNcH3NyB4jujgoKZNuLF2mLmTXSakWg5rkstY",
  "key35": "2RP9FD4PB2BZwRMrGhY6sy4W9iqd38iy9JEEiRqEJywXGgNtAbBj9ARNtiznTPVH1J4vH7jyoPtV2ZbNgdeVsh36",
  "key36": "2pAZq5Q8xsqx1YSmPBX8tWH9urwsauP5EwPE56acWuwbfmTTxhYS6h9k2ieF5iQG2m2Z6hRSXvBtLnb5gZWtZVwK",
  "key37": "56HCR3m8jDqnpC4r5bb58KtqH63qX1123FmanB8yntJxtg28EWNCUfYCUoUBBZn3m723DaqPsV7zFS4gtiTCf2JB",
  "key38": "5w4vdegGtjawjogannCEvta6nVy2KgrMNukSoRh3Ni9tsAGzSgo9ExXiwX2CvXrMmDdJs9CqoYkCsGD7DqG1WAe9",
  "key39": "569MdfX3VNAnfFC2m5Dd63Ver8QEfC39b5Hamykiaa2PfDtRpkbUYfKQjCwNsq5JShssHVmoeGSaLWBNYMLo41Te",
  "key40": "3Ru4SWPTwG67rKh4kyih6eMdzVmFRV2gKGB5Ph9B8pfJYeg29bGVVK4d5tYHx2fCpShAF9rFxaXNMtXTgnnSuijB",
  "key41": "5fK4kW64hSS9u6ptKPF6JFTJJHcZtAdQVHxLKGJ8yrTRXpEf3hMxF8beFbc6QykxntuX2RHtimtfBbkuCYHvVwA5",
  "key42": "36bKpQo4xcdJLxwzvGNj53bJEj9UDGPeUk7UQSNtF1zQLFLyMFC4gNV1EqQGV8V6tzLnxAvWeGpD1cV5oY4bV1iY"
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
