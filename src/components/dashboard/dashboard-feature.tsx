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
    "RYFAmHWR8XdynVYNyCKX4ADXyvL1Wo4LMqkpLQtz61PgTTU9UKtnDKwW9QHFLCd8eF3Ek6q63vQNGLAiiaZW4wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bbU8Bewo6VcAAkKW7ArJTmuVTz3ZBCoXv8wM8ykGacPd8QGLvaaRCvjRpHvuZD2ksrWcCnEFPhDvQwYfNQin9sF",
  "key1": "4fkhWwd6QcrVaoaExk5QXjvW8c1HnqKyrUV2ApUTVkzD8PDDejP2dAbkqXJY1atPKtu1Lj23Xw6oqm4vzKaVQZbV",
  "key2": "2RLz8GzoTDjyGY5Egg7U1cb4kDJ9YGzXaCKC3fJaUdZ5LpWtm1WP46TX8Y67fLbC9qUdkGhtHAsqNXSqeTN1PxBo",
  "key3": "2sD5LzgatW1fhzHMT9PfohDMCBZ6xp9uRMQ8WyTqLuwdx9baPF95F1ANNHWamUm3c1i1w8mbG61T3br5rWpr2TnY",
  "key4": "5ggdzWfhG48wRhzJyyfHG2CY4NYhZHcJdmu49PW1TKP9aPCxiv6rQpodkV5rr5gd4TacfwVwpH5ZVYhLHfbxHyf8",
  "key5": "3z36dG9f1cvBqm2DgFroEKmvRcQWsSZW378W38ktLAieBDUJRzW9aJRBMWMuAYSY8m8XdgRMX61K9i3jWp3DdXSg",
  "key6": "5SRmcfyRPSBJsFWFyzRKzJvBHEyxgBzxFC1E1r3gLZuKy4nieKBsTdNBnRfzgoFnyP7M2YbgQD7eaFZ2pc4qkLQA",
  "key7": "kZQiRcfdiH4F1jaVcaXZDZr9re2wm4LZpFYtNJg9R5PqEcsiYoGJszq7s1QFXhCFsPvTKi84ehrSeNgek7H9kz5",
  "key8": "5YvupQdNmip86uLFbVLdaJjkqdXWg9LPr5uPVBCW5DiTww2wBgMuCFpkJpHHkKCBKrgzVyipPg5jegpwGnfhTDS7",
  "key9": "5zG68bZPbo4u7KZ2HLL67UQmr3wWQ2xtDAe4ECvJ5A3RfjHjjcTdVn27U3LjB2TGCDN7Kzp9HSidChPzVEE2yeKN",
  "key10": "32jfyAdtAMNfajWdQ3KQkkxHyaHtBuvhn7odyRC3CBzWog4aPzMscGybvKMR3Kj8HRGaevXNi3zPd1e36BzBb7ys",
  "key11": "2d5AbdADk1WrJT48eyVTHzJGWB3Avf5eYN4FqctWENBMTB13i5VMVjTZQ47WmKewo26CKLRUeKR4GfkAHYYHZSkJ",
  "key12": "5LScYsat262wEdBVXjJDGikhP8xcf151fYL5cuu4KCPkMQ7HQM8zkDvseDDizxogGmUFe9kVPb5bRCTnTZGYW8vz",
  "key13": "2aWALKdnxRtoqmm7oNSK96uAxAoEugiqgq9okVHyK9sCxkZZ33C4p2tSwCTxbhmv4wyB8kdH7PsSkaVbc9ihANJH",
  "key14": "5XDZmLrnPKLyXVginDjNLQDpUSb8qT3a4UY46nAp7ssWD8NvatZd76yFEqD9y9pCHWP3iBh2Zmqt2csJv6DspjLh",
  "key15": "nrQ39bm1csRX1XfetvrzGEFrZJDYHFiQRhwULe2Zii6NZXgV2UcQcoDB6QKWeSmdBMeFArZkiyt633E5FBEVQ4W",
  "key16": "22XWB86978KMjSgLCDf7mc1r7XZBngkuFqe2zDcYf7YkfLRMHGdX46WHD5Rcn4SqS5Jb9twW3Nr9j2DzQQMh3xZF",
  "key17": "2kJ695mymZWkQURw1iGKASNyagM8kM2Bv9kDP3phCXTQCpc4XW9nNeFQAhLvjHdMHccGCwYNz68gpujRikfnG7Ma",
  "key18": "5PicVvCpd3kXaFhnJjkjrgVsogpR37LfvgNnrjfwEbi7aDeksJA3xdJ93YYsNFTWAUpoyNmaaB36cMFMbkSEiX2v",
  "key19": "33rWHcp2ZTgmnyRWwogGRpJX9XSQAjeWjS6s7CSVHVrcxjai513YPrqJi2UyJndjtTMYtZikt6tefAU224ccn4KM",
  "key20": "4Kn2SSYtLDhYgqdkka55gLKKBiiPD5k2wZ5dDtCBNuHWLmBCWWnRofaWvpcr7751yA2VVWj2yMLi8wPm5RoQp8Gk",
  "key21": "d7PuUJ8dd4Dz439RJbZGdQeb1gqYR5fa5ZhycUWAm8iHXwCKq8ypRbwob3fVvEz6mAkSnmb148MvRJGfnm88sWw",
  "key22": "4nbebVPyc6rVwFprpQVwz6bPaaTjHoLXZB1ahe218ATU7iCb1Tb2eWFYQqccqNd1niep9jizBAh8KecGRqov1bzV",
  "key23": "4K3FiiqGtTpFiBQb3mfVE6PDRBnEqdeJncPypb7HUJUimK7h7zNERroADxNXWfwfo3dsD27euHL5XkP4yFjEfGsK",
  "key24": "5c8Y3ve9gcvRbuE7AbW7AudHxFpAgjuUhHLQYNNQ4Czgdf8sSjWyskatMoFcxtJk3avB1CUBFGR3oAAgdKxDj5E4",
  "key25": "3Fh6yUV6sYScnCKjLBaGGyKUi52DAwFRc9btYPVsz2rpqPfHqhQ9Rjdyvi5N6tzdfkHDgbxNhZoNtQANbJhBTRhd",
  "key26": "3MxqY2iKkGyJ8y2aRG3PBtmAPrrVqMbE6KZP2rEHVCt15h8NuhPyn61F4WsRspExcP96teRRfWjDXE39iRsGkDj4",
  "key27": "575CUa28HpgoKxuSav7owi9icyjCPHSv27miyJe5GEB6csaTwsMkoE5xwzWH5Cu1JeGZB1Wp8zEmYYFSCxaHsSL3",
  "key28": "4vTjpEe4UpjEo477BVZ8cyYnhceNGSxr9r541usz1AQyxmDbieRSJ5iBZwh3Bg4TX3zFG3HJD1xS5MwKMFCkhooQ",
  "key29": "XaoNb1xkhoKoTi52QU3mEyDxix36ytu8pgRqJFyvs1juYDQ5CJ7BJVnvA21A2GG5U8vkF5dhWxY7k5DTGQetRY2",
  "key30": "QUsz3j4HzEpD61Biw8JanCGYtiUjeEQDxwzkqpZXTZUC3Q4eSWdWvH8dvYQXxnB9ycsw8jwUk378Je3ToVNEgmA",
  "key31": "2eb9osFcXtmtpDDZxacUNkvWUUfKVKWWtvWLKAPh3epey2LGVzNZdeEoUh2vGzi1Au5h5UR7kAYndSsVJH4QGS1L",
  "key32": "2wHhG7bbF2npDa9NnGQ9wZ9VJ9HBAH3nwnnf5zm5MUk91Q55W6GdbeRHBLEtxdoT6TNm8wUxXQ8ddwKVmjdbAFNB",
  "key33": "4R7fmXM8DVdQyiKRS2C62LYMDvsz8b2Ct21cCqrFGnRBXHoMY4x8c6PSAJE7g4viUmKrKznMJZEAZkDFnaVExYXS",
  "key34": "jQp4RqAt7Bmb9ZmT7igKejw6GzLNTHATxjKSN1pSJSzsoEVYoeQeZfcAsMgwqZAHsvoSY4gtT1X9GNGNYTturWs"
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
