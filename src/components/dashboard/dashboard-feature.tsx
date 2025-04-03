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
    "4Mga5Za5bStuUsUfQU49WKFftGARUWFfghSduHPUahdFGpmrxZzaTvWKyvisV9KYgYbj2ZfEySMvK86D39zG2fu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WWD85qX49ZPG4C8NPycXAhSvYz3wthiDRs13u2QBi4jKAHzVmPjERRt36pkcPuZGcft2QDZDEWwjFEuXN49oqzY",
  "key1": "CmT7NvK7iMXQM2Fkc1Dk7nV4rdWEoSYnyYiUp9jSWQaJrZejaqiQU8iZC55KBTWTrFn5SSgLHRswCAyMkdJnTqJ",
  "key2": "3ktDeqPbkv88e5FRLqrojFom9YaXXxTWo9tDYtgy5YWtetuDxiQb9FA2j8fRWhJyQ6UuahHUwFDpTffqENB1hdW1",
  "key3": "3kUYLHmTBjZjqdyEbPhFqUZbmhZYECGKcMdMFvwvHtWWgN5VqkJGkghuMvgmbAQpWRg3AjULvnadpPbFyjVhZ2W9",
  "key4": "4iT6qujzXxvdMU6p9rVnMCPDeYNH3jVQ31jR2d3MAoXhYogbbczbgK2PiBRBJkMyzb57DCfSbKk7tCnVf5XpSEiW",
  "key5": "yU2dGRPiTc6U42Vuu7KQqhoCYbLgZsdn6PZXZFU6dJnTagPA77Kvjd4dMjedqt53aY5ttkqenokgyEnpz2JDmZU",
  "key6": "4Fj4LuaxJELSmtJ6Dzh1Ajx5cbV8yygC74xA3hNk3ud1T7mawitWBNpfmgyayS7sUu4Dwy3BFP6vzQjUxjgAkcD5",
  "key7": "5VJojN5yHkycPvbTQjDzyofQJNou4oDnoHkJvk8jMt5GkjDaaMjFRYdwqKUqKRntpgxXngHjoMMJqnugxqSXztKf",
  "key8": "5YBEWmyami6ofLxSYAmpqsN3a6KmGLMejLNA3rwh79vtbLXRQ34uqn5CWUGBsor1fG8jZKCNcpwitGS4w9Ly9m7C",
  "key9": "4FgLaYyEDsjf93wCNj4i1wSLCH99jZTMdsSNLCS4YW4EUF8TaFUuMqgpbGuYMkSdi9svvJ81C13NPNeXjj4GQWoJ",
  "key10": "3T1cKi4WYR8KJu6eUasjcgodxHAexzr3kFuoWe2fZofNx1JcCEu71CPDr3bqX6hykbeqQfc7gmd9kA6DoU9qLhJY",
  "key11": "3GRLCjUSgrQtxsHvARzxYiKX6J7oMnqza2HmeD1bKEVnN81k9gPjj1cfsbcApMobL8uU2UmaZYEZadQU75pn5kce",
  "key12": "2RSV7ErfJ78wo2WLwiiC7gmtwP3h7cpwqZQNHpLREyMZatu7EkA9VBYvA24E1PjJWBGoS4GwqKi3UV79J8b5mNas",
  "key13": "hNeyhrh2VYtU8oxpGhBk4hiHP1FD72QRacq8Y1objRqdk8doowVZViTDN8bqMxpqT9hvhL3kCTPvQpzeXWf1BEp",
  "key14": "wwP32k83YneTisfLmKGWDLmqN2jtA91GP3MDdviS7xQNLAxLGyWPYutb5AbfEYgcjMxbuitRsANZFuaTpJGZMrq",
  "key15": "24gr1wrijgPt3BmAgzNFgkGAC3cAivn7DXmERGRGv4T3N62jF36aSbXPEfvcAK5DMH61oxns1Fd4rXfa9XYZXSga",
  "key16": "NenwfSrPwaovueKH73WaizzBVdScgtyZv8BYcYhtdy2gSigjV6cF4UkwBMa483Syk69Q7a1ZdFLC2QC3YNZw4Zk",
  "key17": "2FgDbFDTHKwCwZk4jfp3ox6uZUhZEqRbAyExsCxW1qGM6nGpzzrFQyWGtkS7S1oY2Ur3gHErbZtCHLsfB5WoRoC3",
  "key18": "3MdVt3gjeA3oW5hrtvY2vq7NxvYzKXb6qJoRBhXs8G9rcevsGquqi2DYbUDy74YFEuBVLBq4cm7nd1VPu9emZfZg",
  "key19": "3RnjhHmbaW2L82S94LaWMRvMausbJtXh6ENPC3MqBbafzEf1AKwPu3smiLiCRxbz1eb4BCag3Pztaj5rzgod1zZ7",
  "key20": "eGhmz6mN3mxXDQ43LWCW9pNhRGauzzGxYhf7aMosuriC4oYpYDwAn4ZrX1Het1wDFvbLDnPm3zpfGRY4ovjsMbh",
  "key21": "3ruaVtdoQDcEptFa3HqmTPTAEoKtaqnpNgTtEnq2cnrVaCVzYKLyDZx4s9TT2hydcbHwxGAfCz4MxwMB9ssfwpkn",
  "key22": "4mutakV5LoYaggvLCS7t2H7RQ5baNPnmkCzXqpHZD7W8ZA2LyVKdXFiHKeWtsHqPnw4UiriSPvL8bG22GkpSvBzb",
  "key23": "5sVNQgiaXcmXK337EU9RdS1AyM9KNqZzc7hmtAq7frhmY2oHWGxagddiVNRToMwPyWHDoJn33b8XkHgJxdej7VcY",
  "key24": "43r3J17WCWpAfqgoZwCy2arGSmT7HFBtbzraehU9yc7mYrA1N3J81zobFpDgUyvgDHYSftvhW7mDB1DrAMDBbuwA",
  "key25": "5AMyrKW8jCAxLPKAAFqR3faggTTuSs5aPWLKbsAL8Mk4Z3GbZ2hpuMtxWWNhngtrZ8ygmAAYchLG14TVehHsQrWx",
  "key26": "4KXwiFns6qazXt6o4ueFmeh3qMq2iMd9Z2NUgfLC3Z4XBhXXQvhaTgYUskXoTdMxtRnHFo2wJBRrEWZK1yNk5jcR",
  "key27": "5qzGzrdvgGoDHP1KwidTAzxBgiCAxfwRdKsEmkFZgGfLtzkEjxFpnMKn6VLs215Dx91aSAEcumUfyp7ueoQaHoCt",
  "key28": "2UdTr9uWExRSKDF3F35gL1zNa6WsUR3yaaGbjY2mycWUJjGq2enbou78cBWQuRY4tkrGE6Uv6XF8rivLNeTag5Ve",
  "key29": "e4MKzRxoevLxHFWBw1fN3vL9gNW9tMWmEk5ieTvtcNFtfXi93ocY3k8mA519vchBoG5LN1gNLhgcFCs66tdrQqZ",
  "key30": "4gyz8iqZEu2393GFN9TP4fq9TpXAN4ocsGtjtSX5pTWoZqNv9C9cmsdTZxLRub1QSotnxcCe6hw1qpJMahnC43ch",
  "key31": "39W4A8tWxjWP4bPo7AzfooDgAKVFXsGH7JnqgfCNAY1jVo3eACBpJo7SJFg9fmKkxFKsyY3NQxtLPSK5ifWMF1Eq",
  "key32": "5p6muNY6wfz19DzTqdSV9kh8J4hNpVvtpfw4DqajuEhV3qDvdD46PJS9Mwv2QHkCcFrN6H2syfkcusTAJCCyvZqe",
  "key33": "2QebRXxFQ4FPvXEpSwVMyJXxoDRErMrRq6PaZnmBX8mGCmGd5Gu8iVfEf8DFvP38yB1iV1gZh29KjBNoHj1jXvUx",
  "key34": "2VLn18mZVg1RpLJZXL6yTVQxd9CEDtEVCtmaF3qp3CuF2Q61XBcdp5uByvfKezDeHUbUNq2aVeqMy6qU3mvdKxgS",
  "key35": "35j8KxAtGyBQsL5ZvKq371JZXiBBg8FSQNPAYNLXd1jy3Fpd2DhCTJJVo5qfdzrGLttUK82Fw4fb8vaf5Hdhw5fN",
  "key36": "yQmYvALWfvyoVsbkV9qCay6JHG7T9SiHpZsGKRGH33s81o2nL6bbXbmJgwg1zUqMa65z6it9pvkxmBViwS2WYAP",
  "key37": "5PUBLZkeRg6JYEjimKaKgaRPMRfXgJFkyyk3rrRPEGnQWGTozd6z9L9NyxVJweRpP1AuCFwrLn74xTvrKSAsjnHb",
  "key38": "3Lqcea8VKfyyTiP3DQ1q1fAkmN9sQZn4uh9bhKNgWUjgKptwnmo9b6NH82SKWEDCm8z7Xh72YZGFPqX1sVbXhg9G",
  "key39": "2d3pnC2Un4rCd6LKMYBzka1hbD1j74wnY8iUmErjoWJpT2QPpLxqEbEKWLfqBYrsUdvD7FbvnECxXR8ksp7fe5NL",
  "key40": "2oab7n2DeqHqfuMeYSyUmrjyMSuBoPmELKjhgShxswHFoma4y2pCcp94oEzKmGudGERx7Epio9GjgxyafYr88fKM",
  "key41": "sufpim8G9BCsJjEZtL1qSG8iLpq4aZwLDRauwXnDrkKrzJwMKyVLnDuVgS9eijUicLfZukxCFDwhdHSUyA7U1Np",
  "key42": "5kNo1keGD3rJcEMe22coYZQT8xxLX29cdSTsjRjPKYPeSNacwpGqTQPBYwicQnWnqsTu7zouVanYB5H2r5tDWs2y",
  "key43": "5GyBWhmJYU6Hri4ge3RKAe7wFHiMdBfup1KXk8Wc1TFyWQBP4FwPjMTsk119tszNGHPQmfyvMPfeAcBCaZvAoMqm",
  "key44": "4DnEqC9TCE6UTXHCUyqoc8TXgH7BCxMEMQMf2e5H8FLbVS75LyUqC3hvi7UJzoUXokHrMtKqpMniw4F79VH2knpJ",
  "key45": "cWEKxpkDjp3NzzcijoVAwiAq16w5nmLL6XhjCKxcxUEBnWYSKBf7Z8MUY2RfEQhwSM4R7WZT2hG1L4eV6oKjXJW",
  "key46": "4MdtEEQYCPG1UgNfEvxQfEf2hrkTRSVen4cvrptqMNBPX6CkR7AYwQG6HTh77k4Le4b4yquPQzSV6SE3Lo8FNGWq",
  "key47": "4U2oAfPSbms63w6gQSexkQ9gvfc1vvPxexk2WrZx3R4tDpARVCp7zoam6WA1D27M9Za6KwbE48qou8p1udafqmcA",
  "key48": "3UgMfWxNpBMf8WZwWBG8oFUbnQp4wPJpjDfotyYmeQCWy6J1ExrJcktwyGVp6amjura3suxZyqPVtB2rerHWpXaB",
  "key49": "5zQ1WUo6GfAZEG6obUpmBANcZRYY9KBBruNkycSpqDDtxLknbZ9jaKuicN8a4PhHVRiJNbQu2r58Evt74JJggiF4"
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
