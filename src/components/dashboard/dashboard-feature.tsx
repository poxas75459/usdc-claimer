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
    "65iFZT5XJLhtkD1x19aLuTT98o74r4dGBsC7fW4vy8dvKW9ocpfjBpb6E3QmLbtGQvM51VkfHYARf5ERCnEsTZ1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Bm5h9FHfYk7wE6hiMfGQKBo8xcb417XVwpWGvos8j3gtZ3D1NwMiEkwtWggQDRGtiDStytsjSwG7BBz4XDgTCy",
  "key1": "p5J8nfzCjGXsARucqmfsf9G75csQMSAuF1p8QszR7PvgTi9ACU3NZnrJNPwLwVLhyLHfVDeHqHNAqL52z47VFcD",
  "key2": "3RfsK3cMTpPVRhBKJrypgLv7kLKs7iSaps7iXdGM4dHNuhvUv86pnyvgGrbrrLex17hhpaurdMPw1ksnyZ1z6tq6",
  "key3": "5SDnQSPN7TXNijFyCC3Zk5Ppp4KXLEV15Q8fzF2GZupj65kQJie1HxfLwAbpRiZUGjjNRMXBxmBcJCk3rVX3ziGU",
  "key4": "2ro9FuLZ9cCGGriYRbunnYE8dopowU6535RVM8yLUYS4xAQr9RZBAhxbPux5TzeKksKUZVfKbVWFV3WTEoXueqaX",
  "key5": "3iSebkLFPd1MAzEN3qjnHhvQZCQyFmrZuqtSYeAR4U787C74yhPpd8xMxymGrssZYjcommg9ezDnBYnqMx2ME3jz",
  "key6": "5mZCVxUJJAn1HJqMdMy8kDA8LZ28waF2XbC9s8fZkB3We487JmoFw5zKMNG2dZS9UFFaEcGDEiYZhmW2wzQDiGrJ",
  "key7": "4HS6FHc7Gjts6XBJ9oq35JLRBxQ2HUywWPixVkdUpKwfBgKuLx1DE6RJuejU2rzAiLgM7m2aWbSieJMA2gRDBmiY",
  "key8": "57Gax5GEZonsxMGaZXiyBrKzooGkD1bQ8CoLUy4A4NFE3A5Sxj47Mdup7pYSGdTahtVr8ZUcnUxqUumJXpsVYafB",
  "key9": "5jwRjwyk8jcrczPLfT6TZHwBtaKdgUbmKFwmWNdmVJuxtCUTYHEZ3nRaNYCzMBqS2B5cPGQcVzsj6VNkPZKLiBru",
  "key10": "4tuPYrLASa6NSA1eC9mGi129FMr9Be7vXd4aupGePambwoXqYVygSKK5NXCpyG6uGVenhCZNio4WKppeDAtWp7K1",
  "key11": "3jWXBC5GvsqVg4etTUU6iN6ms5yKw8g38G4fBgWumqSB1xZ8eYsF3uVBRUiodsKqdPLZ3wnfE12gUk31SJmJBJF6",
  "key12": "3d9dF925RvsSZraAgyrNtKLzFBppjVTZKgV6Q3DnLv1ghMumSTtDr284evDxEABnnLdw652L79ebPr8X6UmQ4ReX",
  "key13": "4WJ2qq9yizkZHHtVsW8fHMn1oztJNkuyvUV6hveAhW28ydZ7wtrLiodWoQnVGdqh2SXVLV7gyG3Sa9bhtmdtaWPU",
  "key14": "53AvBzaqN69dGwLoe6ymsvXZXL5ePFZF9YpH9Q3Vgm1AqcAoMZqk2mVRdautrprg5AQLLTJXDpsiuAe4PkW4kWng",
  "key15": "5x2RHcAebWYyhcYipKG48hgeecn6LpoekyyCJS1XunVvfsXtqT2SCNFULEAPshv6x7o1cyeg1UTAX1vyNLdYJ8cu",
  "key16": "Kv61huoyrq7z3azpVfKcS2cvZP2MX2Tn6qaSQSkTrgnVj37aEnGFAwPmV7jBrnL2k4kvxJSNV9jH8AGU5htqUYf",
  "key17": "3wR9RNBw6g6y2nJcP2Tm6FyShKxA5sFtrUStyizPaN3xycRgQ3cgYocGxu5U3B3voBhRhzSaHdSuY5ER4epKUASc",
  "key18": "29dMUyoSUwjGwnuZgdoctnHq5PpTjwZhzJZB7kahetqNj2qxCvWYjPxcMqHgAqQkt8HTGGsdp1gzHa3KAdHCcwYF",
  "key19": "LPt7AAsT6tLsMJmxDfBVsysejwLHfecMiEwyC3euMBTEszjCMUxstQPNW7RNTdewCqMbieegGg56o6Kw2XTPBCD",
  "key20": "2PLBfPqkzpc8QpHfwdvzBc3ZEEPRsPxNkcH8qGtf5eBt3Rs444EARvmEYbQW7L2i8ouvn2x2BqGe5ZAFzKN38Nan",
  "key21": "4TxAiDW41ofUcMPcb5Xcz6Z8eK89N2x5SPfAL6gz82zfKn3uT4ddBTz1mF8zVEua5ZNgBJ9z8iqExMx64wVU5H42",
  "key22": "5GELz8KkTcX8Qk1PeJJUVSADf5xtWq2Txc4gzdkeDn2C5U2qpMX9oFg7W6gqpAvsTR6dBQpnzMfgc5sxSCCFcy59",
  "key23": "3reKkeBJh5goSFNy27RxbdCh8ubSBuBMdKFfbEhFaFLkPPg2YEnEUyGctNBXRsq3WDQuE2Bnxetwevy4LQUGC91i",
  "key24": "rRh6ZcguhiMLcNchF1ZRDaM61zUHHE9miTPw5PJb7mae3JTD37GmcJf49GQaTseqojAK5AiW2wJvws1hKw92fRj",
  "key25": "49c6PQaxQZrfweryJG2Rj6DXg3mnBh9ZYan8NLBJiqGBQne1WCXB1hrmq93PNyjwVwk2bvgvpwMBohHBFwrMeyft",
  "key26": "4G2J4Mkbg21TBibU7YW1e2rH84czVccX6BbGtBCZwScqPGmoQkPNczxEJPHABijb9XpwGy7kpozuJeEUPGmDQePE",
  "key27": "5gpJkvFhzhgZJPHWAwJTrh3DwWZrPVpkwrNdbocdWazUqgji2iBgnoiXjcKv55G4hBxPUZVUNrmmcsvdZjsgTLyY",
  "key28": "4jdJzWZ3Kmaia1fzwYxL2D27Tm9wzpdRGQfPTLCGPuiYrBdc6vqjtDPTdPWK71mioECwDNasHynUGegEhzYkj6SS",
  "key29": "4n72qsZrxjTqve7hqa5VCrTHjMLohyZ7rNg6iJRwMy8wvf4pUHbuGdq2EKDoLDVrCxNdXGboY17AQmoCnpp4oY3H",
  "key30": "5qUPqnUPEn4fWGTNAaussp8DHbNQh8ghbmmUiFdPoW9jJCv54vbGXs2ytAJoiCBQVLuDutj941XFj6sjQmAcDSEM",
  "key31": "5BHdZv1GuHXPbAZfNk9yc3n8QZ8C1VwxScfGz31HzzMydd3CQcJPEknMfyPrmkPEP3g4nZ2GiPuMqkEpquLpAaEU",
  "key32": "2d2DQTkb1PSrS3LRE2BrNHYjFNB4YVbfJmGqHdTEYvyFskC6XN7j23hZAxwcawKJnbXAv4mex3ka5v833nbsrCMe",
  "key33": "2ViFLQhTFMUqZC4U8NUCCxsHSjaSXCPWEiQtk3GqjfGm8Tb3NsDtZRYVM6sNis1aeCTzF7td8uDgqpgd1JvJM2fL",
  "key34": "5cykNSoXJMqTsNTS47pQWjTkEoaRG8a2TiVfLmEWwZxNg5G4PsBed9yLiafcssMpxxXXXpUvUXW1CKFTifcGKRaN",
  "key35": "2ZFeniQ51n1Ki8idw56UzwDUgCWdrK8jyYn3svkNDpnYcSnXRreKuNzJRGttQaKZsA2iDEerz2McS9cFZfJ6vpqZ",
  "key36": "4eobn8nXjngGGaQmXLk5wGXR5m12CJHYSvias8Rq95H7pEP7VLoWb79p6c6Mzb5F4ZJdowKuGAuj62sruhVHNKNX",
  "key37": "537RxNS5ad86f2ixRRzsty1ZwNpNvUHdiSXN78gYsvjkjE1cTcNKV6bM42pNmuVtgAutVBxfrAK8xCigJHJtiaGX",
  "key38": "42yEMovzH67wdCBdub1K1VWJzm7kuyS6UG1MoSN6osokUQcD5VXwUyGDyKNWj1VyD9pC5ZHcNR28DLe1UeSU3tfU",
  "key39": "24tZvvqAWFgSnZUYidC6KAuFt1XxVQU2r4z8E27PTbXiFwUQXs8kWwCsfbK6f9ecjZhF5pkMJmZFgLPC4xWNpzXp",
  "key40": "aSLNnWmo8AnmkBYofBHcJdQWxD1TSg8QkjoZg3e3CRr5HJtJsDe3kFgMWWLNWK4KYkocZgt2pL3Hn4co7mkvJ1f",
  "key41": "66f5x642TXXAXqhEV7pnpnmusyFfvTjjiXZaHYnNcwczgWTCujQoxEDE2bSCzU2FWyZ7AaJrHt5rYMEP6K4LYVXk",
  "key42": "2o1y3hkauBdSi7DnujFap953f5Xc6DsFTzHJ7i3unxjFHTL7pVY6Vs7kUVpReVhyqGBek1nfBaXp4PFzHRbynqqQ",
  "key43": "5e6JjT2fmTcRLuFuDMz29j3Bz9buMqSGDct2cwrcDYUaRwrpSQCvwDko4RYW9XMPuEos5FBQbjdxAyaMzzMnuQop",
  "key44": "uh86xSNAGnFCRUgdhS2rxC5UaY6tVt444zTDWHzTCGBzrF5y39FFd7NAizctC5sbP9Yy22cVp1pFzfEsktU4poY"
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
