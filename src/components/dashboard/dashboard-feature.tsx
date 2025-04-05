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
    "4aB1eykpewuBVR5xX5M8dMr5hiZpnWBwQFaNcgiULcgHvNWjoAbqVTYgBpw5UHBgTydYrkroZwkv63SjGSwwt67R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K2QUcndBHfspmmVizgAL3pjYsLsw3firV1N1KPDjcQCJwWRSQioJA8BR28g8yWzYeErfFYH9R1g5jEsp2J1q1V3",
  "key1": "PmotiJVTihoWBrYdm2BLMzUdcDPzStDF4TZv2pyevu7nDmGr8P99gcqxE8MwMea7AbxbgX2kvHmiD7FfoPZjzdP",
  "key2": "5TU4uQDKfETRzr82j5ezwNwnbEwg99C3uchthKGktu78UfXMY36EExGQxV2ZJTp7dfM3owMxgoMBxs9TqStomPwn",
  "key3": "6HzqESVXJTXr2bSaoaJginkSMZWjZiy8J1MK9w9SkgReBvhYH1DinASSKywULchxUo1xBJdg7r98hM9Drz8Wntj",
  "key4": "4YcEshEzMngbC4YMretDSf3MNSuAEcpcZeK8KTcR4VkLPCwwTrJtCTGTukHShYi6zadQ3JF9zY7PoGrCsjcFe5CN",
  "key5": "3Pdy8iFMRPuRGYBno6NKsYRgobP28ccEwLacHxvwxHRorkHXJ7WHtiDAcz8dUccGbxJsDHW19pHyUXtpYmqbYHbm",
  "key6": "4HQbPEzoTGGAaL6dR324qxmuQQozzhuoZ26dphfUFFsDnfJC4YW9HX1393JfcjXW5E51mqEG4Gz1am4yVSpDBDpu",
  "key7": "5ZrMcCpjGM5BHH86WuJVVBxQfk672s5jsG1H56WEYxQYKPEzgz2pQD4iKjJfm2jCNt7ZeGTJUJxdZxWSP74qhTLK",
  "key8": "Tkk2yKYkgLP6HQr9KRXGJJHeLq82myqhPYvjHok5SGZTRavyQKf5iDGLZgxLcxszB9P76nfVHKHXnGS9kputqR3",
  "key9": "4mspcQGyhBmuq76SJwnCU8miAQ7xUb5nAUMBhXHVNPzK45xgCa54obdNyG2CLsAVQVY6HztXzMemVq8oyGTtUd1F",
  "key10": "3uWTJZrWoPAeDqa1uiXLvcUN7Jcu1mFk1gQMc9eywA8Zbqmtf3BD4ssPd1t9AAGmTghYtD5so8NVerHkdUh7teGf",
  "key11": "mBqz3LXBWffxAA2ppWbwrxFEAymjJEQcDnwRJ8QemcE5p534KeVAWVotETgmruSRZ4cHLitqUAJ74boNnRTeRgc",
  "key12": "UUNBdJD4mGxvwadEsPJ6WhXHPDB9Jyf9LoTzpyFfjhBWY7BoXcjGtufjxooRYWFDscYqLNoTEU4TRCddyg1PmfK",
  "key13": "4dknu8oJW9PYSZWjzqnPFnCAfS4a9QzXinj4CT2p7K6xSXBjA6mzASX6hVZc5q2e5dCiRFUNxD6mJWc3yWMhsWR1",
  "key14": "5mqgDJvX2HeN6faYCMPq84fFjruP2DHfpnFrQuRCaprbiyTnQcJDCycQHS4eCMjvvYu1yjVA3MpuY6J9zzg9CziQ",
  "key15": "37NFhzbjCtZngedr9jjM3bftS5GG93cpJHs7LmevbgJmzcTXihcB9D6FMfCLh7XNKBgrugukZHLEE5qBR9vootWZ",
  "key16": "3wHFs6vNQSsRhAnQAhQgNqhiGpW8zs6DvW5bkiSPjsekKVWXE8CGj2AeTk3m5KDh8V5vYqfseZs6KyvvGUcEHap9",
  "key17": "w789tbnzzbUbPitRAdJpdGbAFCBArMVxMDEvrN4cyb11FKHzGyQdHotCAqAzkKDpsc7Wpv3neNpCWcN2U9vMbMK",
  "key18": "2fomEP1S19xg26dYWD3eX9hwDo1zd5yQbsFJCxjRyvyGTycKNaM5HGKgUPBNEESpfFwCcNwqMLXRphTys36Auory",
  "key19": "57bmQ84EL6aVCa77L2B4vTxYdh1XBekfbtgmkSRPN3RcTf5YmUCyL41M2TWMRkzAGabJCAAktnTjuRpLeBhB5d9Q",
  "key20": "XUYBTYnVE532pLFGxi7WJyg4JwZsGCJsr63GioQmRntYEFbKsaqwF4Gv4sFN3Lf5b46EoyZTCQz7AZJtQx6psnW",
  "key21": "64kannawsg4TxehpbBQpEMzcJCyAFZpwThaehPq6uiHuF8xExESjWMLU8QufrUJQKT4EdWQ4ZqsCSbUvAFGVEGYr",
  "key22": "4oXZE1jp8frpf7Asv8jvDrzT6zkg71kgcc2EsU1YQVcXw8jLbUBwiPyxrYhBmTHJEA6cKeD4L5BBn6RLixSoXKev",
  "key23": "43cWiZseATjJBSkCsazCkrTei4QtgJXE8YWRXS4sZDYdpR4rzEdeUQw7e9H23YY8o1csbirJShudhVLXkE8YqbDc",
  "key24": "5ELqzvufEuEyCyeHxAeLJBPU7JMyFESN7wCTc3i3SE3Q92ZACz6oEXLtpvb9yY59NpWvBCndqicjh3pLqpTRb877",
  "key25": "5vetd8VyNSfNBvg62bSNHVUhQsiik69GDLn8Xdeh87viW9AUA357Hw1zB8Hn7WtvKoT5tNhA9MCs1FgLLG6rP1kE",
  "key26": "45vhiYA5goVXFQUoFw8ZWMkovhoYyRNNstbLqts1puokuK3jPCUBCs2n8D2WW5mkSn5c7RsJszamTVdodpbDSrJ2",
  "key27": "4GXwTz3mLXdEfMAzP57DFNMi8vr8YVoUd7L4GJ5s6wBiGQamP3cZBoDobrytW3DCPk4dQwzmTy7g8gh2EFCQe4o3",
  "key28": "weQY1k2hPtiHoRcBum4Z5JFnaMr3FQiMsHiGWXbE1DPVPFmES68adXCSyd1gUsmncSvxCUHyJL79DrZgLLeUEFu",
  "key29": "1LfrvexQ9zVYmng7q3w9GUpo96Ky9XGXcGeZFeYY754Qtva6PhBe3oCERgCaK7pmfqzYY2AsDGPbixrJLeFph4E",
  "key30": "2TQtMYsLRoBRaGWmx8ResKiTZxPMBn2tNgPVUPLsTyhTPdCPgKu485bSzawREBipsJgJqpRk7DjWKZ2dvACZjEfW",
  "key31": "4DBhEGP9H5HEVr95qC99JAXHzpxQDuugrbG8NrewBHMx4pwFhZK8W2odNd3kjmEmLnHjnCVVYZLdy6bYM48kNrgq",
  "key32": "2A4z67svh7tfAb4eQd2x2EwM4WHpgCWM6mS8h4CTDamcX9yR7DGAxZMTh36sr8NgRMvVHbtq9vd1zzraL7k4h5RJ",
  "key33": "NHPYFg2RRG24RpuLbUBqNjSUKHXHMQQ8kWEQT9WCQkKBnmMQ8cnjgN7U6Y6kbCfsLNXoQ2WW54GTQgsHY2PFj1M",
  "key34": "5NPYcmPNbLPnu1J69WwYnwgdivV2vqCpx47GUw1ji9PjW4v2p7R6RcFGdGq13hFMmmsJZxq868tTMNyRfGmiQ3uR",
  "key35": "Qd5eT4222HR82Urz53zcWDLxhMMhnadXgQyYfdxFHH44sYJ9owqyt7bSFtdqiqTK82QubnGuF7QcaP89K2zXxec",
  "key36": "U9oNhAdcCv8hRDVdEUgLhyGpTvLVYW7U8JujnCz3eeQnghVvozBVNfNecHYHm2x13xHHnF6XXGdcj8mxwnrhPeh"
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
