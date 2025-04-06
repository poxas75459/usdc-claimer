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
    "5Y5AFmqAhA6W3vUPaputTYV9FmATeGDY6qFKn5XcwLVRG9NaAVDdLBuJ1WnUbggDqJH2w1U6AXqoKYeUZGeXxdZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eG6TzWwDKHnUbmYG4ZQH2JYbxYVLmzAnx7QuQCWS2qFPyS34iP38jFaAnkEEW7dD5UbUTEoWM1zQeL7C9AmkLsH",
  "key1": "vZN3uHJoZ46rt2aDUajxYc91zzpmeR9qM2he77uiwhPrFwVtVmBRfwEmGYArcS1M8bju8QXBbs7WuJpXmpxLTxp",
  "key2": "3wLbpH5VruCDpo2Eb9cHsz9Z1jdmSVNXVWnBTy4EWYWHWpT6hZfs25E1dTVcHyTP9gRDQnqj5wgkMVVUWK7pPMpM",
  "key3": "5k4i8ivizsoEimsdZgsWC3Mso5phm7XtzC8VCmnFmPKkTwYhocakQRPGaLqohPj4mUV9g73LTuxiDPiRHWZKFLzL",
  "key4": "9Xj15KeZpwXfCnSAMsopLscfSoBLrSMnUKniaKzTyhT91i6Wzzuk25Ax8JhCEprXjeK1jcz8sj5MQPn62GULPmf",
  "key5": "Q1WgCYPSkydp23BvaoH5YihjvyzHYXe9aVakqSoFgYC5vySRMPGZayNxXA9pZewPyMPC97ExWND81W6FePTrq8q",
  "key6": "44CTGpncBEqbyZvL7KQsJCGjLZaguAuZVy3kBzLxXVPnZQJP9cQQYaSiSYbDxMGar2kYDuRm5DBhXuPEjgvp2dY",
  "key7": "5ZgL8MGKsp8pi9iQsadgJTgHasPpR7tzHL79xUQTXZ717pkTCRsciJLt1Yq3jbunewD2wJGgTzahrbzWsw8j6M7j",
  "key8": "5pRUYiasDJiub4TB3pbmsV3TRKwGvg7rHVy3HP4GfaFhift6argWj5DBKTjoe84YhP5GUQVrBJSxAoFpUa17AbZm",
  "key9": "3RhUynRWg2617zdcVeDMznUNZZuEGMcSh81BykAgFeMLxMVqy5KfunM6DqhPRSg9vQeXDvbm1zZvpyNVZeW2MAB",
  "key10": "67V2tffhzvfbVxie2MX3wXBzfrFm4GVyq8t238H8bMP4tbtCC6tYGiNjvZwcgcC8D8AWFj6sifhronV2oCLXCBjW",
  "key11": "cajExreoRc5fNvkXpjxGqjjVwwLVqEqT9chMRMSK17TNVQmmncuo29ge78CVLCmrKigMx1kSCXHwF4rr12Rs6ao",
  "key12": "nCMuZDMKM4AGeT8qmgzqY1FhDQcpWh3wEVZmhLr4mtP9cPtTVCZJXNyW2ZZSAvbC3c3juA5UrwRLc8kwLNEEdKi",
  "key13": "2Rgk2xU75MWiyKRRfZAdxDyXm7F9t6dai2McvANsHceAiLTKSBkU1UvcHpud6gegyhG851TcaKBRMxrMJHQwv9oS",
  "key14": "EsjbUV5DBCTMGnPYfgwPRYeJUDoZZQ5LYUfJDwiBmjiVG7Zw7YZ6JgVYAupQ5qTwrWZC7cSfW6hFrrufnQhAUaH",
  "key15": "5uZUNS6f7LJPZokaddkp9vB2PEnW124UBS8iLLeEN1hnLx28R3j2GbhLRwtfwsaeJudue1TVUmARyx8Hmb64FbwY",
  "key16": "XyCN1v6Xwz312P2opg9qo6V1QkgUgSxdKokYUnHvP7qcgFTbgKkjs8MuuvwgQQqtqAJ7UhcrepJtQiiY6efJFbo",
  "key17": "4iGoCxAqFwAqvv19aaB5qEVas3VYcHRnaVcjp2y8aYW8jaXN4aysZQC3HGdV4QdgvW6odp5iMQkcuBQRGX7voJ3i",
  "key18": "32ontuzm2zRpEZijWTyYzBvnj2xo3Vu9DvgwYs7r2yFGkttZdivd5KUPRbKWhhNkcgqLS8Zg6nn1jc4esfvhiEBt",
  "key19": "uXU3miRvDHxuHWGAQPPmEAESX9uNfjn45kXFrtbuK7h3CoFfZoY3ekpGehtoqEnUKm347sKGSM2zHNAsNVJCWuw",
  "key20": "BFin49JtxX19xDuuP2T1qruGAp3wnZth3dbW6YdGWHzkEGW93nyioa5cA7BZrTXvrrcoEgPoe8mEaaq2BaDLywZ",
  "key21": "4Sz9LP68hjzgwQTpLs82LPeTgERoun68MhHm8dDV3jZFq6ByNCyn2MZiPNeHnM1xG8wuDusK3HdLeTBdC5hEe2fV",
  "key22": "RDmYx8J2mpWNueiV7mXEVNcLteXwmaSXKAZb51h6kM88nFzW17hn6o4Ew1ddeZpcJS1RwaNMPPJJYeP1f7UP1NQ",
  "key23": "2sjE8kr8CSevxvxZAktEAMNNX7AheRpSQday5FGUBQTiv8AnRhTJSmDAAg5nWHSxTv9QwFfCXn9U3NtGwVbRUuue",
  "key24": "4dUrxjuDj7TpJ66FcRQ2zvpMm4RxpZuzCfpdNzkwegCczzNAcM83S1BprWh2bkiVgRJJ3PqgpyQ8yvzPb51yQskz",
  "key25": "5vM71MUQTHJBXw8hvBZQeRKkkxS2VYu7HhSUu1W48UL8rDKtUzTBQrika9V5bPJ8puYcdoqt9ngGXThmRggAHT3R",
  "key26": "5JA4cVizsUASY7hB7X6x1Jcu2KQVRyTqrN1QK3D3reaCKhuukzFfkCBpLzsSPoXXyZob3VEJiKENDY3qvK3TNoxx",
  "key27": "65yZ2Aw2oFxuCAAD9aUGtsA6QQT8vFkXH9ynTezKYvFXHocHgC76yorsfdcwe6tCryjAm9xe8194hk7oLZ2iciv4",
  "key28": "52P9AYaE8AK5sirsGAUCx3fLBQAbbNbbehKfP1Mf1UVXvfAf5x2uUVmULobUccmNoHpaZnmxHiQM4wdxFouFc53Q",
  "key29": "5pSm2bon3dXHMuR9GiD6MVya8JSfyPnwDENnzRxr272Eu7gKFnF4c996pesebrzFVa1dxUqyhWQ2oQSzy8z4putK",
  "key30": "3hpyN1HP21Bgftz2NR7AwUVHtkgh4LCGcW92g7aEyv3SVqoHrJLdeA9syJCj4eqYTwsiAsEDB2aaXHkK3hWkZ1sM",
  "key31": "5Erimk2m6tAYmJKcypNn56VJd7b7D6kSdfkhXmcniMuS45hGuusQQ5fB4B4QyMKiBGL36B2W5DEksGgMHUTQHRAC",
  "key32": "5rdKsvUZLtgDBz6X1n3rdY8g3rJW1WFVo746Zic9D6UwnZgAaHZ2NhNHNKMvLqQaAHqsV8zgRnFMaPToZ7kNYVxf",
  "key33": "a36NfoGYnBsEs12E9moQVFhSByvz4JgPaATV8JRHqZ85xftvoFoYbDdJScPdpEtZZr4XxhJDDRqxW8tnHR3hRqZ",
  "key34": "4SqCCiBkLppfRywhMJnMACxNC3pyuiYNxS9kRtdi4QuWn8aDDMKtLhe1SDxHCpnpmL7sAV6ndznrbHzBcLLgCrqm",
  "key35": "1DMje3636ocqRP7kgrdchdfQFScKtuKNjdCPiyuWdbSN53b267mXHgJyTburNcGmMPhS6GPUaQeWx9keWtbwyJe",
  "key36": "4Pu8rPHDtVsDamRw2mELyMsud51R7cTasoGPJpKX37xHZSpT3NAAs25QGndMwdSAJsYQ5XY7Zq3TD2wX3tpLgZQz"
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
