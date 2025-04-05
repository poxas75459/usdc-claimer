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
    "oodEZ5i1APZMoLSMTvYbHC6bmHXYakyq3DgbMW46AXYkkFZr7RxHpvyeeEkPVdG3W6aHSmA24b1odokpvQAB3uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UEYhPmu3x5U5QUPFiWfMkszTLLpC3uBQ3yXUgMacpE5a98rW4ssDF2XcnHemAEngWsVvKyBH7bTFn3pixxehnMq",
  "key1": "3h7ry2HPiCDEK7aqVey9oneDGSrumGWhRJQgRSGrrBwCb3caiG2tUUcTkjDoEuYDvFkjw9BYqJaU8cLnoY9VizS6",
  "key2": "3HXHKttRG8V7sLwC8g1QQDWzyRfCrVhq7VZ7qYrpvnRsnHDKCQrDUyvEdy2wjJSVt5st5bYdox61pGgzQnMFHm1r",
  "key3": "4eC8iFXZWjYoXFn8JnZaZTEY25rz3xmfQQRFYzpQdkcrjwUAneNdcUFSGmRE6NrQChuTsfeM9T7VL6UBsFsaoXVZ",
  "key4": "jsiCiiPnvScCwZddRSa76STvDLL484knPF1kJMva58jb8moRCaGkNR97RyQCAVDDWZyX5mgWHtCnfeN9AQMJVLW",
  "key5": "k4m3bZ99XpNywTaQEiSeodhx7HkB5mFoGRz4EEXgANefzJ6YbasSXnecFB3cakKvgaZ4wXVRMhxXqVgKrmZ8kDQ",
  "key6": "4pgNStxQMbUovgfQfyxXhLex2MiFkwFEagMKYxyj7z3DAHaXigY6jckCmNF8Lp991jqE1ayQGUGcnYMHs385UVbX",
  "key7": "2WmxezNJyEfYHLVFESSosfKWMqxa7MKKrhb8UeE8BcXYQdHSDHWmX5PuFtC6YTCxoMy8V3YohHzxF8C3VzfZMfwb",
  "key8": "5T9SgzG2dT6TwVuhxYzCDN6jLnkqfMgvWBARhThC9RLn3cqoZHbs3UZtPEw9Pkztnwwpnq1YmgJ9v9Qvk8fPcNxM",
  "key9": "3AfkP9dzA7DvKFr5rkcYyUWFR4Snvh3yKqiJA2CBs3hBUNHj9MynMqLMaDiPo1DSWhpTDeA3W6xuyhJmqw8wQZtX",
  "key10": "3JVjwFDVzXTCzVjUrLD6DBcKwGgASCtiXPck7LnJcKeZUtN5ztvAoagAqZVtUE6A7H8twggwBEVEh2esEGSqe7zk",
  "key11": "5ytqiDPW3o8dLxtZ6ug5Bjj36RNxuXPB3t4zbVSnp3fZJgwZBaHtSERX73xUcs391JiDyJYGj8oD5s2R6UfPyGFX",
  "key12": "55zCqc4X8Z7VRjL5fk1Yj9DnG6yUvxd4JPjBj1v3xk7BJR5F8ARhRd5w4Zy54L2uftuo5cnd2vtLydad63p7NtqT",
  "key13": "Mt29QNGYTy8wQNzJ2ULXdWSChMdzimPa5cHT6vfMbwEDPSkpSQREh65Py6cyb81G8tiVorotrpfucFb139gMotB",
  "key14": "5RsRwZE3KJXXq4i8fwM5QPCXdg3dXEB3omdRrXXfJ2rP62HWjyka73Tc29LyBLkUYAFrSKxSd4VAFhf2hVk57zjn",
  "key15": "4UCJ496WbgTrnNNqSNQkPXDrrPfNq265crMySJAVi3bsCxH4sxz3qP3U394yxCVPgifxtvzjn5Qmw8DjhMN75rjv",
  "key16": "2ZRsEZ8F3WUuGS9xTk1iFmiUXcPbRFR67pxZyGT3oWRXk6XHhz3WNiDztbd8DJjL7ogdQN9EsDFqtwNBCj83z1ib",
  "key17": "2EVusV2f1gM9rrng4bR56n84ApSgJSbpBTjxxPregad7f9igDH8cLQVtZefA4cXiof6FmP77DPeKNtPNwotcAzrG",
  "key18": "2ApryNUvhZE3etrG1g628DhYeCFvaf9tqGD7cBU5em2fBZFkAvmL4qo83XS3cooNEHe7Rfg5z6ovypXTPXiNfiqM",
  "key19": "3QkjXTAP5NdjBUMhrkdf5S5fZjuZMz5Wnj14z71PnFFRJtNr3xYPTxNymzBt75YztBv4AX5hbptX13kGseS4srbF",
  "key20": "2XV9gXdgwcUUYb786R7Do6qAZ3d8M6WhV2f9yi8i7FiWXEzKjer3KmmTpXsoaQx5SDmr8uoF1LYUGnLjioGRDWLa",
  "key21": "5at4XBgavV3SbKx2m4diWCzbTdnda2u6pKJpsp4CuHncMGTdUckqxmyQLSQbzndwKKwDCzUoUeXRaAbU4zBUCACc",
  "key22": "4jr2DfaGNKn3xXXK4tvK7Sccdt6w5vpFRyETwYqcYGnSSMenCtema8AdHUavZE2FiZ8V2YE8DUate5tdJXqnEcaG",
  "key23": "VgJSkrfY91Y7adonmJ9yPrqvM1VWT7UTequ7TH2NE7P5rL9Ft6X8auDbjRNQGmAX36AhmjFM8UcW132GzAZfHsc",
  "key24": "4ps7hH8M8R9q91efEjpkBMPrJNZJe4LKx3Hp5gvQ2qZP2x4nuN75otRzhuJNuUXzzta8SNvG75kXJZjYXDorFwkr",
  "key25": "4nrTsky1aJd38STKTQfbRMEpLXnVT3K8u9EsVFv2qSzhCE2v9qAaBHeZPndwxPcVmKJb4WhuTMieWEtEj3rsBwcM",
  "key26": "4y2qV6yrZioJ8JujHtZ7QtQeMXcqiUM9DQ97dipWbo79feVmhajpmoAbhSm9WuhVAsg9DJ7mDxfkVB4ykM5uuuqJ",
  "key27": "2UewXbhDwmoUU9u2Z57G4dTpdFpMSkR11mP8urAcXzkipmabBMAYZFk7N26WGtDGmpe4Q5f7b7fscc4heN4MT1ru",
  "key28": "EVU5VpJwqTyCENozvCssZ7g4ZifGaacAJ6t2HmvheYpgrVvocMarg1ky7ajt5paCVUVdZGninNtqnL4siPVcFjc",
  "key29": "2nMeRpKfUoAdrbAXcQsK4vgfHNv9w7NQ4DYgDAZb6q6wZQRi8EmLaNz26Y93p1ZXWL6c2oSTLCMdpbieDHAPRjEn",
  "key30": "4pnWD1bYjfKGheqMR2eAubF9t9fNohi8unXbx8vjYMMmfTPULTqXtoGUpcaepNPFN7KDWoMjjFWJKviPNQ2seL4P",
  "key31": "ChRg4m9T4VFbEY3eiTSUasSwXUvWL82fovZhnqh4SW66V5jGNz4dwX5d2f2oAcnh7kuM9LHjnMF6vw2VDtvS58f",
  "key32": "5N55xTNzuBFZvdHyLfkcwtce1msPboMgND2qVb1qcNjNhm3P8Vy1eWh6F3i4VkzihoUeyinKwCMXUKxsMkhin6Wy",
  "key33": "2i1BBPZxBYR8WTJLtSv5tJ2pbyGFpjDKhnTnGgQ3RA5yxRUrXvUU6FRxAkbfdGmfEukdwyVmh1giUpR2sU8G4pPu",
  "key34": "3jbfjf8Hq3ZrArt1Zq5ZXQ3dNEmvYLx7sQbT5XmUVv5YD5U99nUkHyTb5yySdqvDkLFN8qdi5jczETeRAKr5PUDB",
  "key35": "2tb8i89hTkfqGFh9J1Rz6bqMkDkLijToVpGGXhpszWtUzuiRpw8kJUS1V92ebZyt92isFQGEBHueP1ig6o2eZfzn",
  "key36": "3kTLT6eHSxWNrExA98ynsgpf6waznNo8nYVshRvF1s9XcbVgn3Zxf6ea6AyWhyLrjHFTjWhvj442LVVZzqmQNtwZ",
  "key37": "3HtyHCR3dSE5Jz7sWgafvV96fmchWqTFDGpfQAu3BKxpTMd8Wm9nejRMbtnz3VRmm1jQTkYmFpcEMaKaHshwfdp7",
  "key38": "46gpA96ErBh9LiaQGnJZ8N69FF2PqmZiDeUj6XZ5BQizjA3Z3WQX3FZpc29HAhmXvrD5dGUGGDSAbnq6w2Pk6SQK",
  "key39": "4v1MXNFWJeGwawyyZ77BhrcfTsm4G7GUXgobbhU8DDUB4HLfHg3JDD8FWcX2qq2MVY9TcwMCvth1xPHnwZjXA845",
  "key40": "62vspdCiu7xftQQ9tB32RQFCgEZMXJ1KSsQ3s18q8xYanM7dpttEmVceUcv3nrtXpEriutmLzFM6iC2MJdJLKdR1",
  "key41": "5MvAnwRXhjwfE2p91buc2DxcNZGEoSgW8zaiF8evXkdULViQFCksEgA2SoxMkdGstfxviTpW3H589T8vnb8oXDsA",
  "key42": "3bZ65Kuf8JXYD2ns57cDmCjWhdpT7W5M4tdePH2cmYp9WmYqJ3HmsQPCG4Veh4xPg9VhToFLQF8Lbc8qDewySHNF",
  "key43": "4ugvHHc9vPXcjpHoKBiaAe9c318VkaUDcD54VhiGf7SijVw1w6N4h1rJKbKPwcBTLxzEMwHqrptv7tE1QsXB7B8R",
  "key44": "5dGyr9o8aU5S4FwNoh1Uz93iJ3PhKAarxtadTzmr4S6VLK4GvoJtxoKeST7GpUwWvUBx9hUQoCGJc7ZgQyXEsSJb",
  "key45": "4Q2crB9oQf67c59TMzxuUpzS7iNymxnrKZWDuyXTw6JFdEi5a3KS1ihyyg18ZpeBynQN68KevMvVDeZ5wXAEFo5x",
  "key46": "3UFmQGY4EDinAvaYJuVMqUfbWQMJgjVGP4vgGa1KZTF85WEBpCeeDvS9LzixDFPKjaFfTsuAgctx8g4RE1jRdLNL",
  "key47": "2qGSirrYGFyXQKpUaziJbc8JDnzVj1ZSL32QGUoUb1om8fgUSfabTLaZmxC1FjmQnBb3c8MvcZyGYztawwQ8dj5v",
  "key48": "qBGm6yQfgMTtNdqZUvQYsQEa5reYRLMqTRva89Xu5b3Z79s8QDwYaUM41hhtuHvG6jbHEbdSroizzUTZ87gJesv"
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
