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
    "4VUxkGu5SKBNJGHMni66uVCsh6rbwmDsUzY38X7JBRTekKn4bq6wWA8eiYs93LkJUpueVWtWUoe5P5PLKNdnUVgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M7DQKi3P22WtZn1dviTwzPX5xh75V8G9F3GVtzHPRLC9JqneCd6VZF56MsJhMefe3tCfXpGs3Eg7cN8uBfgZsWd",
  "key1": "64miX9d9EPoUMh5UiqeSTkv9FiRvSFWQTYT9uBWTe6NuMPtxd33m7FUvpzBDX6AQLRPjBZSKmy2Ec1t9mF6vwNGr",
  "key2": "4QkX7on919q6GseiuaR1riezyN5256sXwGgXUkTWhgxdGypFDC2f9WAX7KytYYKddQB4D7bU2Qhd1C1pHsoFTyzJ",
  "key3": "2HZXaobCLxtmQwwWVhFLQGUcYsy5EozCws1k1vviDpz4Lo9b2N7rbLspFgvdAVMzVadAXHMS5WFnTArM87hiVN7H",
  "key4": "5SGujLRiTfJosh4d6DNukK83GgpajiTwSX9TzFndq3HNbztBpTNAHXygB9dSzvN3rLenXTs9UW2g4LNMmp8e3egy",
  "key5": "2BATjSFeoy1fhX6UpNXcjHUye5shjFg4YuoA875bSUnGFtDRhpS1DizLHbFGtXT1upoydruikPmW59PsPXFs3gPf",
  "key6": "2rhcQ6hZU8Qp2ybqxXyWwVgtJh3c2UHAQHFsLXe97Bp82k1bcRg2ENTwJyVEMgbUuGBdHij8zmRp4pDheygmSxNX",
  "key7": "2yAJPRj5ZDZA3hGLbJktJ6vzCsbwDvHeiCF86w6E3X3j3RisbMfDBg1oafcUrUGonce32qTXysv2Bt1p7xmJYc3s",
  "key8": "4j7UrqyQn8tGunpEmkBxRux3ji77hHSmYRacyLEb7zXpMuYZf9Xeo4H5KxFuW2xGnjFWdY6778dK5FUhLzV88Mnx",
  "key9": "4UKZ6856pwUYHiAXzDbg2HvDVRhWrySPQ2vom9MScjCkMh9wXmeSwZGPqS5LBCQ2gr1btAf2wbc4TeUV1LCW2KgH",
  "key10": "64rwpBEcSMskT8b5R2WnEGPN7593Xha1bYQHkbiBR2ZgEvCLkn2faMrN38maJ9ohzZJaQb8QLMjc1wgE3cGojTBZ",
  "key11": "5Brn4XgSK7nGQEiKMJZkWmSJn8SsP2e85UjMcwH1c2U3Y2i1PHhdqaDXKsTsPdSoZ7wTRVF5wA9maW2MgVkgsG6",
  "key12": "3kzATDMt55jsx1RVU74T7bua5YdD9YHfJ8GBWHsmbpG1XLNNC5vANHozRFVTD4QHdyg8panu5RdEe2Usd88m5nDC",
  "key13": "2BtMGkquWCFdAbGKrXSfkKv6oQB2EUgPWSg9wisANvx4yMiKXg6qh5s8D1Puoe6GWks5mZPtVpGDnSZboD1QG8j9",
  "key14": "263NHwLDbDjeZpHTnJYvZwjLPFiWe9VvuttUoo3bbfyHM4TtfZQaDHFEgaf3RqBBU7HeLUDFTDx7jo5VuC32E588",
  "key15": "RndbGGFdEhKsCx96nVuqRtWtCGCuMQUgzBpy6nEnDpKPoxVsLU4YNDfUosweuUArTPG1NdrbzmsT62X11LsXE8V",
  "key16": "2nJdAqSQkTo9W2DhmPgKrQroFZJ14i5nu8Xxm81jUtCg1zG15PtRDkgZjMNcMVTFjeKqk4gKUyzghzRtJsCXZ8GL",
  "key17": "4pn3XhnaXd7yUW2s38ofXLbsD2x8AYiVAKKA1mZ56ey48ZFZKaNmwFAseGWtyx5BprtN5Nvo5pszjQsXD7TDcGz1",
  "key18": "3QViv4xpd1w9MK1n5wEGnkUnHjM3avPgzjFTRkYyq9csny52SKHyV1ghevGyrYAoF5ydTHacHimccd62vHCb32MB",
  "key19": "5tvs1zFkxTw7MAKETyARbPA3h82tTWwsuQtF46nff5pdiKEpm6djSmEmGrrfGTYHBXhJ5AVQyTcvqDhm3uRTnmF",
  "key20": "3BbmaDTPBazvnAjXiHLGcuMrSiCEuK5Pc12cDkDGR3wJUvYXFKrJtnCgGqVS1UrQyVuMiLZ2gnJPGwHjK82re5j8",
  "key21": "35PHMrYXo45BzuAwEDei7Y6UerETB2YUr9KBN4ABjTiehyTGnH1ay69oFLHD7c1JokogXhQDS46PmSbPfYAFHuzB",
  "key22": "3CgLNDaKAPqB4L1Wwwk8ATCW2KkrsMQRsCkT4JsjVaN9Vrr6T46ZRwXt9j7MaMKpVXwSiwKfYDUaX2UH7rowBDMR",
  "key23": "3hTxnVgRjUbNV11hm1uLNBmYYQd7PvkYWPFMBKjLiLEA2AGPtuoBCzLdKJEKXo2LLgXCDSoXT8t71jbh1ejeMrvb",
  "key24": "2bLt9Y91t5LvP9WgNqzpoG8hq73hvjXcBEYCwDPLussuuvxtpYoqRCTM7tSKjdjqgY2sFbvobh7SRdMk7vysA29b",
  "key25": "UMTNTDdcHyi3QYTpwhZrAsDcwSAHi7gd7KRyBwpf1ai7zM2xriEHZc1SBscUBkvH8bob2rJGLUCfBHii7h4eF8u"
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
