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
    "64yx8gzkg6LSQn35qYz484YNoNC31Q3NXqzirWNQanPGqoYYtibEdZu6SdscXX5qdPQ8tdFNakVTSfMoBstKPwWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CDpmyq9K7Ny68oPGUCBFSokevTcbry77svWrMPHm21vtqrX3FpEyrTvGJH6VfUY6zzjkq2AyPWxUAVmDXi96oX",
  "key1": "PeV8bxJudiQTmtVV2QqNw6yE2tz2joMwqsCL7MEydoHvKaoCue2ZMwvx2YNxZu3aVYk7g1DUGLGDzpAY6x117v7",
  "key2": "4EQdPLJGkg45sQkvxJwXjfMMUC1pivvx9aXJqJiuFBDm7WSS6XhFaFSpsXp6L1F4WiiWMVigipi5W8zu2TmVJkuN",
  "key3": "44MCzM7HCS2bT9BeKmbPkY9zAJHrKer8FhWsdpCoR57b8fSAhcyz6F1zYFLk4hBjjKVSHKkoxp7PZn9hF29vLPBQ",
  "key4": "oJwuA3tzgw64P2E18rCTZbfeK9vFoJ8utXKxpzMKyYF2qhcXcjNR1UcsWHYLVZwsfmgygc93AQcWizsg87ZKHuA",
  "key5": "3HNTconvFft1nx9tgnLuznt2wtdRkyHeXv9JU17x2xzcQEkves2EZFfLjdGkEBVmwWDf54Mo8ugLgMSkYixXJrov",
  "key6": "5NtgnH3YbJ47CStXAeUDGpM1vvuBjMXpUGrawTbmFWXDeNyFbgKzetU53exun2Sigud5P3WGA2X5FsXe9V5fwugi",
  "key7": "xP5vyReEpsgKBcZC5vTRsfWYf8qcDHWZjP3ztsj1RpidXhCRGfNNAhtVUjsxTgbVsgjAMLa5QzTuDrKkg52Mfig",
  "key8": "2LgovVLkn9NXziBdqT1s4YDbsfmt9h7i6Sk9kiUs842mSDHCSTaWoAj12apG8kg4jdkpepESGBdzVT3pbGnLkgKH",
  "key9": "33yZpTzexzCWzeYg5wAr32xE5Ui5nqWoEfyfivYBwniGLxm4Kx76nb72w1iZVvqE8BkHMxJJi3Dr1wfvwjPTcjgU",
  "key10": "2hmUMf7Ed3dhPrrVXQRgqvWcGMdGgxmJZ81MpMMserNewSVXVqgANMCdcq4Tk28j94PqeQNF3dxejzhYJp6gVt3s",
  "key11": "2hNtccTv9fKKouG1XXBf4JFSRKM3wXnXx31nZmX6QBAxFzigCv7GJgAvRb97qyAPpS88vVSzffAnjhiwhgvJGoxK",
  "key12": "tkQrk2AwNmrspfB8uwT1CEe8Jz75Mc23U8g47c3U4nWsFEL5Xy1ZTys5JmyaMCU9xTWzNnqDnTFSB2UHsHRzj1s",
  "key13": "5guTGivSuvWcqy1f8mDQXSUjvP9ARBjQ1uqJPXntZnt2T1DfV8wdEpTR3WucMti3utpbXc2jB1s2W2VqCMSkdFJj",
  "key14": "5HNuRJan6s2iwbDm8tmAxi9VNEF2cGa8MoLYViSMDATVLfZ4ia5LeupHAjxN5isx2bNRo6ha94fc7JXmEfc5MVcy",
  "key15": "3xniDDs8uwLEz2cvsZM8CggNBxMX4tYJUCbmXTqsKG64tGtdi9joBWmofFarzyvMGREJ6QYUi4b3HUmsxmzCiCcx",
  "key16": "QBtsd5TqK5swWiZQWGrHXkFaafjFnSa6JCDKTGzwsyP2ocTwf9suo2PKpiJ3eLqmVfMVWYMcpaYRdpcwqXqQJWS",
  "key17": "G17EGKB6FvhYzPZkMi4FcuGhcmvNKsvJBFsEx7jY4aFxiTtNb6E4j7KtazHbYqWS8kYuH6MWzqKSjwRGB9MbBMS",
  "key18": "5EQ3W6ogv9ckszEQFGxPCouJvhXv5Tri5hXbW7W722dtk8aUp6rwzpPKQ4EEkFVH9aK6uhqLPE6yoBrCdbrk931g",
  "key19": "gGxFMPC7vB58jppapNEYyWowVXtKgp3GyZVZDrAueqawxNcbRLJGZTC64biYMZf17CjE1SFSvUMhFzLTkea4GHR",
  "key20": "5eNxJqCFciEV7oQESzdjkxFm5UJ9PKakBLV1sqkEk9YrrEoN41gmnxzEhxuxCSLVwsVc4SLnPU6WovMXtUDexLV",
  "key21": "EpAKQK5ds96yaNQtT8FALvM1oEw9LhuC2wuRADnPrVH9Uwd6JiQ9jLmoXyawRkay2Lphmu67Po5DuCFrgQmcbaC",
  "key22": "9nhQ57UpAspANpgYQbnm1xzGU9Tg5iuxVyFmqHQ9phSxsyMzoUqqpHLJxhvtQrH2rWne767BJU5u7gFaveoN83j",
  "key23": "223pp4ZGC4z6dfbyPWRtHz2hCRXUzYShqw8vyLbR3xBYetNw61FadtWhu8ptqDoHXN9nWjXTCmbHXbA9tJWoEsrj",
  "key24": "KfyvdaYJGCr4dM6e7Rnn2CjWuptmHya4o3Z2k45anQhrjGhr3sw3LfsbMK8dCw57K8dHbbaAA6E1fs6XBFGtGZg",
  "key25": "bghLvUruVfodMsDPAknPRJr7AL6mk85fh12V7VgmbV8Hqkr4BcUY81DW9mgAQTF9mQmH3FbCtav67A6oVqcXo1S",
  "key26": "4V4Wp5ZVZBigNfVNUqX6ze9BumkWDGnmgRSxBjoeu5WeArVd4f7GX5szXEj3EjnTU3yxj7jTb5t8k3KdSMhhf9q8",
  "key27": "45Tz2fhb6upzrN2YBGMvYyqS2rFCQqcRpB4qKwtqMoX2setJkKee1UWUHk7RVv9wp9AkN5RzFPFtyR9YzfArLxDy",
  "key28": "2n99bFLzatkBbojNYGoQwk5PTZ2fExX2j5gwNVZkzPDLkKg7ysxZEAc4N679wC8JANAeUUMsEKvKRXGYLzpBsvC",
  "key29": "P3snPW5BbY8YpFbazAfQxTN9binexRqgPb5C8Q9dEAANyFngcjvJ87kok9BaFuExzFdHepP5yiwMNzBMLJfybRm",
  "key30": "3yZ5e8jeYFVhq5v6Q1Q6pGPENaBeguBXxTbofBYW8SLJiHGBqLknaEYHsmLD2j1yBw6rCH3prUfeDPek29F1ioHy",
  "key31": "5MCuMpr2NLB3rojZrBwSWNBvXfuNHyaPiVpyMT4WchmD7rut32dDn6rvN8yYtAZ9vLq9Vi9bs11hKRxYijwGiqU"
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
