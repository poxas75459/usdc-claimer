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
    "54NNuCQ2uQwhW8mNv9qMFN6WX4sgf1VJswS4eEneu8Hp6PtmMv6SHFyrCMD7HzPSAaerAk1kxrznSNekktPBvUxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31zqWyJCYmDuZZNebqUhMD2dVas2FFvJFX4V3iyUUdFd9yVBLbDFztKMKFTQJBfQpXwmH7X3jriZBeERuZoYcRP6",
  "key1": "5hTk9PgyxcVHRCkuVWt3c2DjXcvrkB7JDKJfXhuCuoz96xBtZMknDc27rxQgYScTa9S8P2BEnPehUQJszYj3a65t",
  "key2": "BQ5XVfLCH6YkqZjG9KEwVTvfr34MR1XsKmXnSrBzDRBsUfgrs5tL3JD2ZBx7rUnUmKe6CaQ1HwjJkPUX3M3iwgM",
  "key3": "4fesGftZreM9uAiEk87xmqs81SDR7ktkHTW6d8KvudZKz5BogoqZKExs6JVwZqggFCwo5ZNY1qFz5JerffRjBXxt",
  "key4": "2MrMpBoD9LnZgo8pkgP1er3zoigYxAaunTuYmGoGh7RTpsG53fKudVSTV911jHidurGsezvng5FLELAJ9CuZd6MB",
  "key5": "37tvMV3PiyvMcLQhtdFcrZYPDAkhnfewgB8jutWFseRb2BciSTPfh4HN9A9VkmVm36e9RX5aWBAcDj6SBcmtYNeP",
  "key6": "4yQb5WXy3Dp1qTw5wbzuhy9YmNbBXNbpoGpdnEqhuHMWzUN8WbPQPTabCCvRSCS2RqK5oFChYnKUPp9sKHkJABe1",
  "key7": "2Fp4jtJzAKVNSuQVnXN7quLsevWRetksJySrrZtHo1T2TjFfuehhXduZmRjnCuK1kBW9a2Z986hLV2p9hbFLmsGp",
  "key8": "5joND67RrVimUMCze8YBjRkzLGvWsM8sWW4v3MuHkhv57uTScnwPy5k9PXjGYK2rGihEQdjb5FpdAB5yXT9KTNaB",
  "key9": "3bNJD9VXi5pZip3AeXbtUPjMzF9XK197FFtNopGxjpnsetBP25kWo2nchLsfjXhVZtvbvnZXJuUoE9X9pzp8yPC",
  "key10": "4HjvnAgv7M1RtUvrLPoxLeShYvGaknjyDW6KkNDt9of4CGQ24KGPF62re2j849T1VHzHvYC5YDPaKDN3oTgLJcEN",
  "key11": "3FonJ2wHk3SuYwdKarFGb3Z9eyE54gEQZHmWtwPkRPmsFq33P8DnXHUvdJiR4krXdZ2LyiKQp7siGoeqtPszVZBd",
  "key12": "5WB5vsP9paz12NJVVKSsPrkfP1YqEuu66xtm9xGqz9pFoB5vECJkGVQuwWrVDPuufUWSzKKTB54ynZQbooNtMBAz",
  "key13": "VvncXtmuwaaidohzTZQ4dBn4NA1RXD9dpfnnDpswfWb2G6b6oQUeZmFaY13PmnbMLnTqMK3Tp5oK2FF3UhsonNQ",
  "key14": "2PYifm6fw5LcCdEetGiRTdpU32nci4nimSRFTH4mnEqdakrHm7ricxyihjmie5qJJTQgKwSscpPyWtY8K8d7iAXY",
  "key15": "2Qg736HtyEMFqWb22DxkAyp84jTC2EyoDod6ekaR88YS2Wcg2x2nJPckaGf84aMsDCsXx2A51sCUGBMj37uGYqDz",
  "key16": "4DEDTVL6gHoC8i9X3bZgkoQPBWyQZKnSXT2PcFm88zUfGp9tT8XvfGtgcZpxiYB3DDCFWpfwPVfKRmw5WgWcSx5q",
  "key17": "5wrr5anvnGhAarJxZpEVfeSsq9raR5o1jcjZnvvt1RwgL1cPzhdc8FFke6j9mGoXxo45wsspNd3WJLCCRqzfwpvE",
  "key18": "2XJbPy5D1smBYyqR2mL3NgsTmUnLpo5dCFxGwNHxDnzTRgXYCiNefBiemgzTYud2NLTvHHoT9zbBQVYmtMTV5b4X",
  "key19": "AuaEiopMWyLstrFMX9Qrahm8Na84ReMsffTEyT3PLJDtwfXYsCKGLDjbNQQJ7bRWFSKbw8VUcnsd8376CghoaDV",
  "key20": "3SqJuRQf8gRnorBf8VYGE9ujAVqoSyEpeEySudkCvKQ7qBVYZAfg9Jvwsz2HKWCWizNgdDyMULGjQp14PP4rdAqb",
  "key21": "3Cb24YaYTxb49QUSS3gnWPGcRkL2M5Pg9CGJ89hcwZXc6jXuDexUuFY6M4gTNh2yVwo4ShobUJ3m35GK2SgDKWYw",
  "key22": "3b1tAdnzYZWLuqiJdmg7UiEjbsmRknKb84oJuGuDvZPiCRDtHzuVqeaGjoGS4uMABqV2Ttv2PDWEcJHoFAxUfhT8",
  "key23": "4QKdsGrXfayZRrn1AFTNfHiVDVCWsKjXaHoKjEepSQsBWvuWQYbaZ39ruxMunuFB2JQtsfMHoJkgbodHNbRHAmtM",
  "key24": "4PgXGMZG3cXpDdg9a5MsNoaT8h1XAbAo6mpeHA9YHBjowcd5QGWYSzWaqXZ3QcJxCvbyE4rcnKKXZGGUVqnBPi6N",
  "key25": "3SbuPt3ptiohQLonm3xBgFPhMrKDFyoDE7cYdkZDjd9ndbW7UUt6mtiLSWexiZVRqb4DWjPKUS34WySdkSSLowqt",
  "key26": "2gAomxyNi6i9A3EDfyaW5XGKAKFoTHkJEmZTBKGuj8RaB7bXXPjjboKRVDTSRi13evq4zpJoMHCicpad8nQ2jFyM",
  "key27": "2kD6EEFNe9QTVA6iYqhhQarRNZUf1TpWSvg5cKbrRgxPtjzRW4VyQgcstnTY7DkvY3tZWWQPNQf76XEnftK2D4y2",
  "key28": "3wzEwGDXtPGQFca9ma3zuW2Y8ntq7R7VkyLXmWRezXDX19ArC1ygxEWeYCuBopjNYF8mestw7R478vjzoDdZTR5i",
  "key29": "xn2uybd57rHc3vZg2gKZTh526iKGJ7QqtPhZHDpU46vN6RBrm4k5ZkqbBkT3JzJSrfpY7ZpgTtLaocrPfMqka1u",
  "key30": "4bQ1AiZK1ZFdyLmXvuqTFW7TJo37Ei63iixP7xnjB4VycjpFdSmSsZCY2YCCBG3EY5sxdoKzVdWRYWEgiaK87tL1",
  "key31": "22JUXyNHcmNgwDvd7VuKJEEDnVL3S4h9bUg9vvqvKmJbvoT5AFAi5dxCH98Bvhs1J2EVZ1u6qsDSptu1EaBh1m5m",
  "key32": "3k1iU286H2aJA7pteJBBafH8cfnaS3scwS15KvE4f9K2ZFrMXx3GzfeDwEpG4HSkbtrEZi7apDsuLs27kwxvp8Ce"
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
