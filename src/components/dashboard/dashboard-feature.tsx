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
    "56wZgNkYFze4nVs9eu46xMDXEUqxi6ZV9yBzwCrFxQyiqNVyoKPVyzGXzKG99nFhiYuq5ZBQyN1z2kutNZuAmgka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KUt6ffaFpDaVWfH7hqbbQgSYMeNjmE8hRXkhvoyVS4UGXMdByVi2qUDUoxpFYbwa81mqTZt1icFTWkMb1yvhn9z",
  "key1": "A1TXGcbfsAatQdwAVj2eUuw1xE5c5fvPpFgP82NcSq6ukVdB3hGnmzEEsKPx9kvaoGJMyoCo5UrsehzWQoH8YWY",
  "key2": "4vNsm2n1p5SfShx8jp8f83F9NcFsGS8NLUnmA3SkpHXyvKUcPHx6vgUYhMSTx9SGasvH3qN8LVd1FQPaSsJugXT6",
  "key3": "2ZZ9FnryAFfKtgpt24EnKfwsXWQProPJ9PShTCmBgSLJJV1rV8QZG56sgpY3DV979zdZLtoVN9ZZVbgSvUS3xpZ7",
  "key4": "2FLuQVaCofc9KzgXJanZEdo36N9T2Q2EUZMDsssf5x7HLKzkYJfVmaWEagEtxkbYRdaK3dotGgdHjtR8QyoxpxGE",
  "key5": "5k2mqWB3BCX4fyR542aL8RFBVBDP1WLXjK436n6ssyPcnLEaktYfHPrFY583BsyR18MhTwqdbywX6qzw5fXJXGRi",
  "key6": "KgDbduUbBXAcMPkiXKdqKT5RCC3uR36K3fe9LwcJ1XrB8Cys4LZwvweTZsHn8fELJQYGoL7jnd6WCnL4BVUK3PP",
  "key7": "nHurBZs8BR4kQQh8fAttPLZqm1cxKrpkCWa9fB2Jw9a2DLoKhxqBXTzftYZtdXNozHxFHuRGDYx59L2gj4tqHoP",
  "key8": "4y3scLqroeyjVdv1ZnvtpHMHH1RN8mofvNGS8XEDFXXQKJR6KNqss9kY19WcbPPYbLsLGsUDnkbsSCUfpnVKpAjB",
  "key9": "5vPXkmdg9mG3gK9tsbF8M72ajT5bY4S94dUFhfHLsGk6L9XXRW3qfUn7YRBWism6Y2zFXXXfBZCrKphV12wYRWtu",
  "key10": "4cS7vxPiDuUi78ZSuCGHvKsBDBWhVtrCZWUP63SnfnER1NX8jjyE6bmEN1dpbEzxnaKTCwktftBnPC4eVNyWULoB",
  "key11": "3dhLFDZcxSsrXxWYqFouQCtQc2eUJKnxGJGNbQVozdzBSFq7DiqNyBkiwv54e9NGPWwv79yULuwEvr5kR46FHkqY",
  "key12": "C5EJCf3KgcPVCBBcDSaNEzCtxgzS2c5byfeZ9GF819zjQZE7RBMuXQvc6PL5Hpn6TJnmadtZwzhRQZbmjoRdX8r",
  "key13": "2cFbG1NsehALSH2XwYUJRfB81fsEjbnW9N2koYnCVgyhHUrhnHZ3wESNkUwrQa7XdMvyCqg92wcLAZ9TkLJ11qrz",
  "key14": "FJh6PQwLgrHcdKZ7dWhRYybrfJ6tmCkc6mA3UR3iQW2AFGUdLkihsJfve3Zt539DFCuhTvf9uhN5ygEXybU9Zvo",
  "key15": "2eYYdoV2hZsfQtoDDmLRdeJgeGKyH2gEqugU7NpqBg9mQidRNeAKFFw3oi83YgziTTjQeaksLMjA6NzTkgezPCbm",
  "key16": "3qp3ixjSzd5x5DN5Zt1Bp1WCmLpwC1S6KHkLots8g8EYebt7AJgV5Qpqup16L2fqDspHVbw9XE6SP2unXJL1tHnv",
  "key17": "4Qyq1wpoMJbtHGmuym1GLiQKyhxKTEAnnMuYPdoNpocT5BeF83PrpGfNMnYaUH9JTvgZUMdg2nDEi1XJByqa8fmL",
  "key18": "2FTUmgrCtb56Sn5Q6t5epq6cBaYwRG5mRbTVD8ca1f4vPfiNwEZVHqnw64EMAdpzpQByWBCkXVX6iQZViR8QTZ8U",
  "key19": "4aZMNPvuwgjqd3buW55iPsfnrwBUjSpw5DTGtBLJRjZvD8HqVCHx5soyCnh8Lf5NJfBUSnRbcSrwBnM7WiFvWYrC",
  "key20": "2g4VVeJeAXRXzXDrs8VwzbQqZFi6ZuNYfyif9nxVfpbYYmoF6NoGVMqDvVqnFvK9hRqo6gw1YmAYG1zD5xStAi44",
  "key21": "2Cq7Nv1LvarUNiH1DtTJ53PmzZT2Her2rZJrfYHoXY2zsUD6Np6Kc4rtwijUfxLXY2cYE8MfRQwjosbU1GAqnMHJ",
  "key22": "4s5mNwEdcrAGbpWHutZmkoCCUNVE5VQSrbseqy67vVr7Apr1GjPKdeGMiRDbrN6yYNxxHSG7aWss7p5Pp1bq1DXq",
  "key23": "2oZjhvV8Bftpnm24GyHKAt8xTcUkSPyHMMs4N7m9n3hWwN87KmdrREj6n9b4imakw5hFU2G8aq6hGdbyj3rVP2Yp",
  "key24": "4B6niWrT25nRWCiJtg1dDDkrFiYVfcb94qHgFBLrQxAEwpynkukoikEnL8GEdrEyv62JG1JPMa5wNfKrzHeuacAk",
  "key25": "5Q5RzLbCZF335mktnu1LRr6XGqUXjz2S7H9KDHHQ3QGAJWCoPnrWRHCc79UEYXKnk3CHFtQsRdoVMXf1JwiFh8nj",
  "key26": "2qFkZLuDHS63tSpjfgsp3hTaonh4s5GjjPp4SStFBAX5b95tu9NvwxD1c7brDmnyJcUJxXCKGWxG7woqb8iuyCH7",
  "key27": "4ax4V73RoDDxMuzME5UERKikeP4E6mkGfEMenCRA7seuB9zsRNQRJ9k2S95igJ6YWqFLkXmpjBG7uxDPF69cVmo3",
  "key28": "2ZTUqsPPrjGC5Z7qgAnGX1tjrfTNQgy4VsU4JfpZDp2mQgGRdbqwJrdC4wsroWGQpngWdput1oWBohk4boXt5fje",
  "key29": "2X9WhjbAa8mpwZBvug74JhXRxNpru5gYM9tCuBRcrXkcDawNQJFtveTpTLzyGBtq9573DaSuMfxMS7CuFVJXgr4g",
  "key30": "AQyZRghHrRr2YjsFw1Lw3rBon3U9TXymx8ibXMNVEaYPDDSV6mfHi16Z2zMLsokEvCsBX32Jxn4LLbH817BqXvq",
  "key31": "chbjtrXf44SxGzsMgbrSjYR3uCouGypEUXerFPa356tV2XbGS11J3by4iVdpq8SUQZhm4yiWLddY3peeU24Z2Yu",
  "key32": "5f7caq8Vh29s3Zxsiu25V1ywKkre7Ac7iyvtU8YA1yUCMYRuGFxnsFBe7MGrmsb2N7NVDhGZy8z8UzXxHSAHJ9J7",
  "key33": "sPNwkJMTGVdLSpWobqBfBeTSgLGWgVaxgxTNGYCkfj5MRsYcKnASEegDfXgNNcGq1HfSfyB2JwspCTmcBUcivkh",
  "key34": "3vGL3sUzzaXeDJvtGC4r7GV1gXLqaNHcnMev6xE2ef8asqmvWCJaLkStWE6aZGoZnB75JwE7Mc9KzxyYSCLxJtqF",
  "key35": "4wrcHhNdmJoAQ8qtsmU4JoQ5uDxGxZxiapc2oNbjFg9KjoPYhMaThiB3PVTLYk9zDKbiXU8Hcogd9ignhCJn6emH",
  "key36": "PhDKPVVY5pJCXo57Tar6C4mSpyJAu2GhSARei5sH7sfyZ6EWycPYhcAfTpYmm7dUAtQfPPmugazzAur3uSsaNeH",
  "key37": "292SvvM9CAen8uRwdvUowzUHRiLmnWTZ34npxwmAT71JkzpnXAASaYFoQ49Yb1pU17Sp1HdAnwvC4iPR1ijCaJvC",
  "key38": "5k7kCQJfRhG8h1ak74Bn2ZgavMbtMDVLS2UL3jRpQNPzh9hMgWf4DP9KRrGWoybJbnbiVSUMNGasJdGWtEoBrYBf",
  "key39": "4FjtFdyar4aejWu36g9sjnAgDjhFCWAyWYjqWHHWWGzm942bnyPFghx4cDqAafqNi9bSDrRaLgaZhG6FjrnRJVfe",
  "key40": "4rN8nLPU2WeNAbwrjRUbsug4uzG2TTzBrEgmtcK2GF14fh9k9H9c4ZB3krw7xqiRExMW1JqTA3Ny89WG981oHGLL",
  "key41": "5rEJ2hDHTwSYVpp5Ayhhi86pa4Db9gqCRzuyK7Hq7vMdJtwB58oXiXygFz5yy7sycAw6s51BHcAfHnV8EDbrYG1f",
  "key42": "rH7ycLZa28QZmRTbjQbCLrCy7G8XdVJ2J1oJjuFhNgkZiAZdgnDTMfEESJLc1JzttnnQMoLWVX93cKYh9w2zAHz",
  "key43": "2nnB9AkK2zy4e6yQtxKV2d191zGQ2MxAF61winwPFAhC6fRTUPfCFPr9AeZJye7TEivuMrsrtqyqm969DS3DNUar",
  "key44": "59y9x19pAAzsYBuBPYyzuHv2NCtJn3uXniCKr5omdWRfE19F8UonZpd7WNj8sAkMSWmM3eYVzGA5fJDTQDKCnxXa",
  "key45": "2eQiNAvCumPFPsu1UkdS1s9devF1HmFzLzdRupijXw5ZbxN5j1T1MBYQWw34EHjZ7bWSEymj3TzXf3DQFxh8EdCr",
  "key46": "4XhMhG9yDgQFWUVAnve31Lxf66oTNQMj2MBRXFqADif8ZBCKjSc1JqHKmg3hM1TcfnAWkv9brTWWUGfE9VhuHU8e",
  "key47": "5rPUb3VPgTwgcfpwDhiTFHrTYYuavLuB5RAVzqor3AbuXf8EVohHAFuwxH1iRxRdcvZzbde6Y8mYiJe4gQH784tM",
  "key48": "26BGV7GUs2JRhTbFvDBUH7FoeGxZeXbchK8o1JZxcQ8avwpoEQevEWdF24DdHAcxMpbKY6xCVEg4bmDF4QtXZy56"
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
