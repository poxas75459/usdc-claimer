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
    "4Z1VcYFiwLVM9LMVzJ1JD6rGRMkd3JK2wUZFWESpQRMgFLmjC7yv5AvJSgeew3YSDZo8EuhHpFecC2oV9LTphxcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LXKE7nZUxHfTht12J5ndwqU2o2HrLjsCaZcqbiuHZZ52ggEYTKLN4jxbLn3Z5zKvFEwAPSAerHgD6sGFqrTVZSr",
  "key1": "5g3w93p425mb12jdHrSod6qV8B8mABGvr2stTTioTLm2tQKo5dzDAyLTX2LSuTZ5VVh4h5jtSEBbFjtgbLRMM1Cc",
  "key2": "44f4bHuc2GTN44EDE8aQEw9KYJD8A4pSa33gC3yGcJSmqgykdcW34Y5UJTXfjSLU2nd4Gu2fopWVp5Di5aQqsPRd",
  "key3": "2Xdh4RtJ4yytmiXWGCWZAoLcGTy6KQEeLzUK2tw1nQoShSdNTsiPd7nwW9yhnS9tLdCXHWij1atwFMYuHjooQ888",
  "key4": "42McGRDPrZGHPe83ff9aLw8E4SNm5kNnoqNiEAGpDh8T3mxxgFZHsKoot7MjNzCpXYAiHr9BU13vWzR63UMprBVf",
  "key5": "4MPNHVSXvbSxDGEPLm3LSiwzXzeMpTsDLjQYgKo8eNXZUNtr29f6YXBTsJwu3drgigCiqY5pRygCNq6i6CYmMdEZ",
  "key6": "CmHzXN6r1KpEpG5UNHcG5zF8GFMB7z54QnwhSqjiobcVmgKwn4Z4iSRfUYMTWkBi92C18EYHfFyBZ5eiwozhCz4",
  "key7": "63Fio1vhnbWyg1Fn6iTE8pBEWwzmyekRcUPpdn6AvE5mwQspFURfoHw66bMp91zyZP1x81hTsnskCW3yxZn1sMaM",
  "key8": "2ftuNuhYEqcM8LNpjDnM6ZnarAUQwKTfVxjDNQtp84QNyvh8hssH8qzyYEz4HUHNmDiaKrtZktmoGY6ssjVZEySo",
  "key9": "4ckNRUyUSRq5tZDsLJue2HSoS6QCWv76hJkW1JmiVZ1qVHF5Uifm36u1BAJg5hXXpYochGXdjkWq6mLGyv62UotR",
  "key10": "Aw4843Qy1b237PhwMfeny6oabKNrCGXAH4UoYUkckqNNCHsbCYKxNNXL1MuxeERAa78UMfP89pa2E4dRXcmY94x",
  "key11": "7S2GWqGBhNYgSciBsqeVQq2ZDwsLgFSkntRzSWndEDo7MjzrsXL7FqvKB6fxYLaqUx3ouU9t25wN3cssyeSce89",
  "key12": "66AjNif1vY36VJVu91KjHiUzNKqbMC99QydfrhyTSkgaJtujqFqx7uJczjNHK2va3GhLw9XPdrS1Un5gQn11aQXD",
  "key13": "9B5j8tggvU3Et6TvtGkwYBTQZP8vfCmfnYxKSpyfbR26e43t6jf5vfveUy5YEg1LiRJRKEaZxNpYF7Cxtc7DSJy",
  "key14": "4q5DbGmzj47NJJjSyajKws8xyRVJn6Upey7AsNEmE9a6iyVb1LE9QuBWd1QsMQhHuu3Ht9MSZYD389KcC9Qn7BYB",
  "key15": "29eqgJG6TedU9Ttw2r5n7y9dcW7SfspuYKchSefZUWP9rAEhDZ1moTgNfR9NpVJvPKu14AZkgkMnQDj5nvAszYDS",
  "key16": "5cVoWJR2Qq7rBth2Pb7PNRwUeo9wiaou4uFHRX8J8LNqL1xEfgQZmTg5nj54pdFV6YyZD2kRvw6Bzy8phZoT22Kw",
  "key17": "4q9ZNx1U7AVfpKpNwSnUjmDcfy98LdU72uh2iUGAvuwiLFb5AuYBWtVN6GvYEaGbRWterwiWiznK6uWGqBbdhE1f",
  "key18": "45fPPA5GhUXPJTTqhWCbGPS6xipzndGr73rKEcAEkXhFMzGg3Lduj1vWQNsEeQXG5mtUwHuTRc1fwKA7FfF52Zqz",
  "key19": "61edaQZYSC3XLXv8aystC42rHG3uupfy5f6rkp5kmQYYA9mYUKLB22Ru71222qHsQgumgPKaYzCB2MrQeeRssTYr",
  "key20": "4hc4qRQGN2Ce1x9LxcyHUykvW4imYnU5X66PdAtn9YXJcp353vezpprUserJk5bA2p5PnTv4bJjjnnoVN9FmbtTT",
  "key21": "3it23LEu81PoUDwMMy1SKFKwjrvvxmDMrj73voHMoxv7ZLoDr76YN1VyE36YxwubTuPmem1pVdvaK7pEzCLR16Eq",
  "key22": "4DR6RnzqbW11Hw7YNgdA6M7z7AjyDQpVRax5XQ7YzPiYaUia43Yqo1ErRYbJs1gjdxBM7Q8Sx8NkkZzhaB311PBT",
  "key23": "57i2kyL5htXjFGYuM6XGGtPYfSW9S3fq9w51K9Vadicv53PzQrb3DA9scqrgdETk9u555JQMvGudbpXQxJPa6qTG",
  "key24": "2wz9JFNJEFmUWcVc3871R5fTELosdgdskpAQkvNddYBbh8A7pDbMuFRp8EivkaYeqFrtr8Mk7ko6Rzz3B95cV4AR",
  "key25": "3yDnxALdCzADaVkgGyxLXbGAxFg5DudJ9zem7EbxeY6WGZPVEuTWz6EUhgq3BpYvbvq6KXihTcFiuwjTWdBRvCds",
  "key26": "5SaNY4owFJCQzuDbhLRo7sqwU1ZugKZpbQ7x7QhJfjN1fozhfcnb632cvUVxkzVPE7sfj7vxCByWHdx7AB9UET55",
  "key27": "2ErgNt5naGXeEgBRWXqyfu9T8kEx2T62KKFwvzuLAAh7joBmgiTcDH1BNaP9LZGqx1w7Rb9vTPPoVNR7kWykrnue",
  "key28": "2pZdMoTNa6kd1XMte8qYPW8KVLRRK5NezPXZF4E7r4H8ZzbYcETpXConP2QPLuQ8TTo1vecEgB18NAqm1gBcFtJm",
  "key29": "622m5LnMPrECRrv64mBurjeuCnMkFenqfz42UFc4P4AqnnHjqLbBzAg7qAQW7VfyE8qwT7WsEiipjTpu36pWUmcy",
  "key30": "37fZkmoBb27Nq5aiWnBoZ9Wh5ozbcXRqSff2HmNGESdS92R8mEdM1oy8zT1M2dEbUagMEUrwfavbZLwe3v9TizF5",
  "key31": "2ETCxEFFtmweg2Xjj7rvWdZxBYtEV8Si6U3oxoA5DxvdP91LbMf5zjKntSUvLTffu6W46o59tf95k7tBuNXkUuZg",
  "key32": "2pXf6LCwVpo9azCEQdPYtsW9dXG4Zp7T73K8mv7nwkbzS6QZXsKurzLTkbrRezjSewSmAYbL7auyjeW8XAmtz1HS",
  "key33": "4ZweBs8RfifxztuCgHod9eXojx8x9BTzzZPFdY6FYPqZR7hTsq9rYsdZF8cXGF5muPXM2TczJqUdHniVZsnGXc5F",
  "key34": "29vbBMrNj2xLSBTtfToGjjYkn51fR5iZs2RYDpVFv8S5EqcLV5ULQ7boFckaWi6CdVChZaq6JUQxztTnnYBt31Hq",
  "key35": "5fGD92fQX9VWLg9FcueMU6C8FhwfccLAayFoDKY7hZrnHfKdwmKNapmX2g68Y4ps2uA2ekWnFoRAeV8oiij7nfce",
  "key36": "27u4c6GSCZNsfqZFtHNKUZrthJx2dqtriLcC8x9J42H4oeZhJPUA24Bk3Nbwx3sRU8cLe7ZiCCgGMmdNL39gPfFi",
  "key37": "3LK7traHTLKwtrEUn2zraDdi13gkA3rcSGa3JUxd6YC7k6r1rApCtt9WwgwstQa3VodnXx9t2mB9FpV3RfmrRDtD",
  "key38": "46cDFHtb3viXMUbN5yNvCCJ4kn2uHUei47xGcxJ4PjjTNvbCU9PLmmFRoQ7P3ujbLRk18qwPBFWbAuRfLz7veQk",
  "key39": "2wH1mQg1amrXMkiSLFxXZS68Eo2BTBcwUw7meopwrDwyLM8XvK8Mjj1gokmEdKeJWFDxoMXCqAe4Atigr2MDh7e7",
  "key40": "61PC3jLGAd4giNWBYXLZYh6Sedcu6JscHbYGf4Te9VWthWizAww3MDAkuEW8f61L3MCKPK7QcGWApDusNKXA94jz",
  "key41": "wRvhe1XV3dHuSoaG6hMjP1ayhtREiThg7ocP3up4ujtZFKVQ1A6HaPkLuJvFiw6LjCSGjH8aZNeyCo6w9xBMJNJ",
  "key42": "4cpxztwTgkgin9qHYCCD2y6z9qZksZr8Dc5GaEcUF8BaHNH1fB6KgpUX6zAAjcmtVLp4SJnPjU2UFEEQcYcBKZZt",
  "key43": "2WioSVBCHKmkh3R1pv5amPY7XyX76a4etT718o4yhH5ebjdPvx9yxEdJ86qPFHVTqMPzopa3FRRo7FDuaZLDTVbe",
  "key44": "2k4pMUBCYUPtp4qftGiEZEnJrt2CpVEX5k4YGwG1o6WUm5hRsqunokzThV8vAF7DtT5qv8Z5qMNVhi5KEPqH4XYh",
  "key45": "2w4c22XE3nN1YfjAVrzeUX35UbdmJpjQnYAZxjrRXx8L4gF8QNods69mhAULmcDysRcucWy6i951TCacmMUX1xuo"
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
