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
    "4evMYuJ3RVFVPVkUbmK3s7HusmYRTGbPyDabFiwy9uuWreRyhgoMgAotjjEAB5UydkCBGNxF7zj2HsmZTzhpvyVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hLjbTCDf56hKqqn15LKeKP9NMdmXNXX7ZeicLnE7SRzdEfh2Q193xZEkFKs3piruLxKJ1XXjyyYCZaFQ1MqfYfE",
  "key1": "262T6G9GqQo4PsTkut2Rg9RkarwRUqQKq6Z3msHxiayLMXjF8ephrBAAqsHMs2DTWrxMoXNTMBPZMktRaRKiypp7",
  "key2": "FGreqc2oM5GMRNkUeseHWgJLb3cKCbmQqGm1xPzQFspxR9pajxXBBrg4nGL5cki5uv9p8dTvSCbQcYpq9Rg5Ca2",
  "key3": "4DYHF7FxGz3tiC8DvH5NYxThp4DqFrxoZ9vwGq2EFWaUtuy2S4w77rCKy5XkjfFsdubtMDQaiAxjGphoXUXZ4iki",
  "key4": "293S6Uxba7XZq1yKbaHvgodKb8XNPiVNZvpKrXUE2co6eB6Ui1RMEbwxcyPEhgnXG8pPUM859Hx4SjsQcMVKBGuh",
  "key5": "29RrJo8uT5hHLaskcaqgvDbAn79HREj2Vq8skV2y6Az2DCbaD7HRMpgNcgkgyew1CzGVLugn1Mah4WGGEfSuYHfr",
  "key6": "5dTT9JSVnHRAAG8iffSnzaogScNarBakmSf32zqyq1sGWmAPNJJnbLTXHjWxecKbwGg4nKcWu6E1xNtZ6BaRBzNQ",
  "key7": "4pv2cShebngMGZzz1b2JGDYErhZVnd1bJpiGZsaUY3h8pkVZyySDXr2QH9JVkqpnED3DMnQrHYPt18Agy9fHD94u",
  "key8": "hHE2eVqCZvSbELqvMs8YgnuVdS29tyD83hsu2LhtaEy8DJQQQU5GMGTXVSx7VXNbKVQYem466ZuLPe4f66MqhZT",
  "key9": "JvgVTw2vwMQBGfpMpwsp5rhLE7csT4A9Zy2GdgoXV7ccYAdTv6YtiFbhbW9guzDDB5KxxQu83bozbrYjZDtzVvn",
  "key10": "ZjB9n7YjEGnC3WXFDQTRK2NMc7JgbpqrmFJscQZ3Fyfr6wYigbLknWxq4ePRGH2ECEhFvBft9zRJNfNCbs8eLNq",
  "key11": "4shYx2nBARfy8gqB4KRhAfNGku49UY6s66vgQQTbsiGUfkfFwxD7CkuGdWuqeJwjX1vNBsBBjgiqqpciNUc1n3H5",
  "key12": "3xwAbypKTyVjYsTCdnbPSJprtYVJAGWU8Bch1CFXg5c5aX5qXkAn3gpv3WHsWTorYb9dMy9VgDxL5mWe3nrPPRNf",
  "key13": "4vsLYXpZcPNPMwhKSK2jiDmnTV6Q5MvGuv6un4xe9vYfWhHYgA4kQ5DpjNaaLuNivesq2P7MuZeXMb6tmb3HoUye",
  "key14": "45NvgLRsjTvyYvbttC8iuzS12Xra6y9WKDyDaiGhZFm95ryUS7Wrgxcm9AxUnhpVHBwbkVvmSwRQdSzwepBPjCTm",
  "key15": "3QmZG5RAx7LtHgTR6SeGNZTJ1DePyFai17YPYSvGRaXcqnHQto4i2ooz8SWKumZmJXgn1ZFYpcgxJBZYgtJLZyX1",
  "key16": "3mjNNXZL4hoGmc8cF5yuCSpqFbBcQA8Q97QhnqPEJZ3TTXy1oWSgyXMGdfJY6pFc3cKUs4r2hg5QVEHkXrS5prfM",
  "key17": "z37rR4nHMZKuZydmHwzbpLR1UKNduPXG8vnRT7aZjAXEHNJdq4mVsSNJWQY2Z6vRULnfDqAveKXQgEMzRDMgBxq",
  "key18": "5fFrAWQVp1b9KUGnf2arz538vmxBjHuwWMv8h96akQ4WDPrqpH4LqPy2bqKRZ5Ay1ThHU5mGo14YotkoBZUBNhtB",
  "key19": "5kLLG4VhhZRuyrS7cP7WVJCsmoR6ETxKbcKThni8vPneiYSaQE9fnLvnpeqdbc3xU7QURuwJK2KktbNa4oT1ZRnT",
  "key20": "5ppCYEnWsfd8xhRsUogejkZP1qdSe6vHc6j5PtYwTJFDw7aBh3vDs9J9q5fG7SRtX1usi3o54d24fSAhvLvSBrjN",
  "key21": "4e9nzNWRgkEkZ5fNbNfSdigLbWSopL3uoK9D7rJs7gWW9nK6ouq4iFGxQgxeovVT79QmmJxb4EquYnE84gvevFxy",
  "key22": "4rh1c4nV4TJTk1rR3woZyEAmfUoEFen8UcwJkXZ86QZPnfSrXxPoTcH8XWEwevpSjuiD51ryB3tX2ojbdLQ73Qcd",
  "key23": "28wTYLoa4rczppG7d8s9ag7eZ37YWaFPn4AwuKBdWNnrpH4U2wCCXH54HMYa5AM97BMpFGt4vUWNotw4EMjiEtVK",
  "key24": "4NNACJ3VzAQjMWFSdaqYDADEvZrtnTkJ3byZ17kdLKcPBMXjvfqCVvaXTSjNvXnvUaoRjv1KL3Nm4ov3y9i88BHU",
  "key25": "49PXyy7M9CpwakhkGaV5TPE452EdHJa2MBAn3TuAuo2DkbThfYqNSYkRPXwz9LrNNDw4LMXfaph9Dytym2Vd9xod",
  "key26": "2j4UHiaauh872L5Jp6YkjWNBZxDuR67Lxma3G73jynfBwL8ZDzc2QYiAmsTKDEUm1PD8AG2d9rENazUXHBZG7fBX",
  "key27": "5kaXqXa6Hxvfxsu9v3KFff9TcdSxJfyJiym6t4BJ4yg5Cm2Yh7HRKuWcqnNappjvoaVaDRLH5J78NDrUjST25vib",
  "key28": "2psreg4G3J3PXwriVuK2SfTq39xquupHwVX62gy21x6uXxuko224M1ZYhQiLzZZYX1FruwH6JL59kS2Be4uWH4Ay",
  "key29": "2X8mAjQAQStFvsFjnyuxa6WcytDJf4hjNAUhBEsskS7h9smkFYrCovSAYsp2aVNRaGqhYSmRC47GyDFD8w1kp7Dg",
  "key30": "sBDctadMSFwg5ru1NkDJk8Gfu7zShNvezkShxHDNt9hpNYeBNP8trmc28ohG3NrGibx99Lc8yLNUk7fXg9VZXmU",
  "key31": "2ZuMEMreeBTarMNLbZuDZTmrkL4mPPXDZDBtXEhuBaUbEpd6cT7ikMDY8HmEDsQ9PgipY2qZj9jAfWCs7d5BmCNv",
  "key32": "coChbzPnyVhJrs3Z92m3MgAxjM6biSjkevTT17sm53tdMbpzjJqdb8ijxwoqerbXx1hNqBCs25iSW2prS8bZUPZ",
  "key33": "5PVykV6R55HE21RkoFETchUrWfi7VYccLLk3sGMaA9ZgKkm12167miAL63fGStQ9sG3QebbYDQBEonqE3tU49qgc",
  "key34": "2tqBCq9id9K5ZMduj4mzHSWhREMa6mAVufjAeiBa73QfVa1HBhVJptLPCg7xsnTFNtw8gbTKzxh1Ruv1ju11fMET",
  "key35": "5ToVXwQH2LcuZLias7vi2tE411Q9bfspDnCKYJ1ZhF97gsfomKyrUShRULXT2JkcaRQytgzriL4B9sLmga5gtBb9",
  "key36": "2mCExwsy2vvBqcyyW66Xq99XLNXPGuErLcJPEnrhfEb75MtPsSAweQ28NRQdCHaBFgA1WuWfDoiU1N1GizHAbfSG",
  "key37": "T8cEj519CrMMzU2ztdujLmVhBopM9VgEpzb5Rz2sbimdttTscU8yr5sqzDcwHTh7pqnANFUctPJmS6uyFyq4tro",
  "key38": "4PhcnnFRku1o3mbheUtWbG3Ly2pEuPfm7eS1ZiNtWJTBhXqNnx6GHsaAbVy4ZjaQZ9diEx2efB5DSy81DbqKojQz",
  "key39": "5tqnRKFzNUAE1TBQ6pyFHsab9DVn3gVJVDJYA8nmCm7R1w5aDVjGeFnUngYZYLcL4hxpM6UtP5npktJQPpvaY1gr",
  "key40": "5gpyAbh8h3fsa9JSjwy3cnBEReDZ4LyfPwTj9zHotEj52DdaEJdPL5KFuFkpAD4y3dE2WLbUHCEicuJDGZxaBbQP",
  "key41": "dvDqptvDsVJRyspZYRA8d23ZE4JHjSAkpX7DERdCzssdTjgUXcdyS7vxzzfcJUB2uxT38chd9Sk8XLodiNdMjNi",
  "key42": "5MhoQSQDcyVuYbZaygpf3wqpJsaTbAHQwESE8jpizat14hnc2tM889oXE1Bxq2q5BCeF85nGMnbSut2uQ7m4gAYD",
  "key43": "3oUs5QQqdZGuzpMiDGBjAkVnwt6hCqLt2SNZjmeVYKWrUuZY9btWiRNmH2JoKVBqFGTFiaZYC6aqS2MogumWMpS8",
  "key44": "2NWz1obMq7eCATQiQYUbPTFCHvdwWQmeNR4sRfLsfqVgCoFxyXxtMWcTbZjaHrULCisJiDtHmzQLnLiSTLutKyHX",
  "key45": "yFb33cSCRtPCTvgiP8f9VQqoQKFESahzYUmoTMuzqk6UmeqNxajTeNbFCLkh1AegzDDw1D4Q7Ge3M1krCywTG82",
  "key46": "3hVmMNfCtCd491Br2ZKzN4XRZeUdBoDxNvNeLBATwTQpKzs2X3sFJ72r5RfcF2ZQ9VauQEcoiwYEe2zpJt2ufMB3",
  "key47": "5DQBGb33vV9BfSdhuYYwxtfDJhrpEdSfioRw3ccGtm7cbzjuxotZKD3MaTFBBkVZhfw8yUFqeyyjNDFCCe4rWK2Y",
  "key48": "3uvFwMQjbrYw5uQtRJiYt7Eaf3hzvXt3wudCwECYApyojHMbaam7vgazH2A9aKPhg77ujvt3fqp4Q2rpVSZ6vt6u",
  "key49": "571A9b9Sw85J6mJ7BUa5VDBPrmV5vrhPmrfrTSLzn48rR8sHegy4NdaMuhqurMorjgf2UUbjDFBH3D7noEdWobhq"
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
