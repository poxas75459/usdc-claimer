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
    "43Wpr8i6AjjrzLpHCEDCjYjBgiRnLqeNJZqkCopjc6DF9Dw5NzAru9twPRd5cGwXpjddGRFaevSWVzWw8PHHEEzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YZ5YNcvskUnCo4ieRTnLhEC5RcJt3P6nYmEjALqp5yeUQ7wLBFKUdK8ppUve47Le1MTtpkjYw6oMhAoLNa99RFG",
  "key1": "3G15Bd87NvCwuYbozMtan8GW8teRTE3rmktKLZaswhMWV5hM1NU3v67ZdoyskhsujE2nFwJsbg49YiN2ASew1z9j",
  "key2": "3FR3Hue2FU8vjAmw5pyqmDPTB7bwFSzzEDVoSpnnCFvJP76r4giFTkXMpmjSVgtkkgzygaanpbHc4gK2kBKEqQPo",
  "key3": "61UeEtPyV1ggWz2EsnS5Xmmmf5pjUD9N9vgqL4d3T7K2d5Jxy8fyzE1Mg9wVZ1Cpa9F4xLPe6ny8UHDexZGFTyoN",
  "key4": "4EQkmXaTjPdrT11zC3SYc4grQrduzy6Thow14GSX1C8GHZ2zFEWUMdeUndjhkYTh8nMGmS2RYYU7sz5VuY3cHWQQ",
  "key5": "2fxQzJre3epc7EVBWS3suygNMDbxrduBHp48itPa8zhSmXc3wMeAfN2ZqFkWnFjaW82VCJimboeXZykoqF7c6Y8y",
  "key6": "4TK8GBaMiqwGHGdnvD6Kh9d3qQMJodeCyjWRAG9u6wbcmyiPRS5GcUTuHKwWB2TtYeY5Kqxr7PAovNGHjQit2CZt",
  "key7": "3B9p8rJbyVXRb9ibw7Aj3NxNict1yxz1b5oXdokQWXcsmBvVwHcrrJ4hPSKTPQeMrB7rcddYsM2Z9WASWJwtYMP1",
  "key8": "2uAGofpJj6gKG5DT21vJTVYSVMZFZapYujUCxjXAzorVBDYyMxzywJxSsbk7FvpTfRXWvBB5P8qCCDSVWWkgjTgJ",
  "key9": "5Yw7uK3dAQGSaiZ3wQ8bSjpiWR2ETJRX2jCX2AfWHii8LvW3Gvc5Pb7thNmFkhGi1Z3jdciupX8EATKKUC63hdUL",
  "key10": "3gQYp7PUifPjVT7qnMtK3xuYfE3Yw9qvJQKz4291xstTwbpN6EoUHWbFGmHQvtBWKq73rzVAGQ7MEcgsmhozaEFN",
  "key11": "378FSLb2vveFB6MJEK6NH35eY2pQ5CJz6MibPJysdnFHtHSSfHLhnNqwagqJKbSh1uqcbL3yf9QdXZYVZZsDMfZp",
  "key12": "2Zw1ExViLxb9j8g9az7hh2jzkJsLZ5a3Q3iK7GpWFySF2N886ECxDnDNAGcfJwUasJJ68QiMDSBzeaC1W2b2ku3m",
  "key13": "5mKmz5nmYyvMsXeZo2jqVSSJ2hobB5PynU1tKyVw4CvUWE1qhm1Km6kXYDh4EnHpxPhXvosqbpo3Geaki9H2DMaK",
  "key14": "55HyXTXDh18pLaDBXr25mGPwmaDTu8AQthdvmrg6aj2nfnsPii6FEhhmHKfH8qnAy64rKRsAQRcF5ASvBACws3wF",
  "key15": "47xXLKrUL43ecRZr1G9Ubi55V38CNP3SqJhXcux9CB1WbKtyF3e2gpAzgXvvFYKwfdpPvj1b8H77vCSL6se4fDFq",
  "key16": "4GippAfHR1j6TqwAdf91B3hYgxWBWQ5NDwno3enqT2vx3PaMtQhey1uNVvvVpk7shYs6WbiHM3eJxdbo2rXCUKPi",
  "key17": "AL9oa3q8TLepFsCT9h7Enfz2f2R2yw9N8pyGb9XA9stBXmcFLgGcHUQ13QT9T31iaRD6Lsd7s2TkeRA4Mu7V6hC",
  "key18": "87Qb2MsYcWYiA55vA7Vi8aifayKnxAHoqF9u4WdvukZsMoW5DNUf5umyxov3GpGPDwQuZB4oD65XMZpG5ZbNEHL",
  "key19": "4K3QExPmzoVhVVeMLbHSx6TJGhTXuv8KTnztZhEKAxwEAicwxEFAgwTiuPVUZdxP5CUoTANHEL5TaTNxcefGgnrq",
  "key20": "48PFGHpxHSMHoRwPuW2YdJMNpe4ZVBLmssLay4dBDiCGMhG9ayEbqg1vwVnu7ZfPL2GcFbMsSSEjYf1maEyc8tn4",
  "key21": "2uQHpEZ1z2N7ikSeLBfREqKor6PVTFtx7TpfyjCvR8VwwJAE1bgv4fBBcWW1YSe5AyGpLWxWm8ssGzJZCh9aCeRN",
  "key22": "1A4Lt7Yb9gUFmMjsgCi4tZppYUFo9WhcgqynAPiJMjAT35hhuVUtUxYy3TAkknae7uMKnMWrowzsFhDNM7MkBmy",
  "key23": "bn6Pf3Mdag75E8j5GV1XmmHY9n2gBhMPNKRHMAj3851VAr6tXfnjk72bPmRgmzemw8EdY5kBcMJkoqRtwBh3UFt",
  "key24": "4CQYUjjJNcNR3yznfduVGnphMKLuqa1r1prX54MnFoPqZ9yFTV26Msoe3pjbdzurmYi3ZBWEBNS4hMVVdZ5nLGcq",
  "key25": "28yYSEVn9B8Nc7er6nwhGir3JbLeyUb3QBkDfnHDCyWhVMGpASfCs8DQ4D8Yj5s1Dk5SPbwcaxvWmKB8ZFTeiAC5",
  "key26": "3SnHws1G2ffbPuH72Lz3gdcGDyUGo2ov7BcFsyAecRivrFHtwY6YDYHv8L8BvM8yft2c5RsWBbWHphNFGtYk5Ngu",
  "key27": "4uALQCbhLcx3E9jn5ucnnnK1iF42zFTTGHd6Rv36HTC2gUxv25WFNM8zYiCprYwJ9PzfMd5E6dspaKmAceuY8uGT",
  "key28": "57vqAXjYcE9m2mzZheTiNYKUSjZNw7MZQkrUKFy9KYPwjKGETjzwp9U51ppSEbkfcgdqbASHDBYGkwC7aKSNxn4z",
  "key29": "2NXicrQ3GJSyL2zjk7aCMvjAwEuMaueDi9wubjgMyL9SCoChny1dQmQQrkHQf7GKPgALDXhW8MwhJoKJwGZupMoG",
  "key30": "5d65DNz8nxrJ3BMrypprSeAinrHwxcssHKTGGyFqaZrztcWQQA4gG47zoxJVTqw42gQApRcfr7c7E1T4enaCN3jY",
  "key31": "PkUGULAcN4wwTmFSYgxAZ7A2CmJ7EjikZ8Ji7oYbpeiqNXXi55fs3PykAA4C44zT1Lw75YLdSJjc4GSU5LTzHRe",
  "key32": "R3RPvCYyV3BDvLTHJLdbweC2KTSkgaRjfaTDfquCiTPX1wvB4HdqoFvbLd6iC9DmD4fDr64PANjEbLLx3jvvZeP",
  "key33": "2iAWJRj4CLYgeeNzYbNnp4yqcJ5Nm7bzAuEULi9Ga1jMgEN9BVUmYW1M7UGfjemmfZS8ctQUFjPWjARMRdXXhEiL",
  "key34": "pkAeQ92W1Y8Fez3LYNJw3RiPa8dRn4Bznnwk1V2sLoYfCiuXnTGWcRjWN4aRSriHjGmoNR1FkTbfNz6apN6LKSL",
  "key35": "2gv4a9PcBxY5EQCm9YwU9wnX8mstFQQRY57wcU8ymjXAVePXu2CDRtut8c5QscLmknGfpwNK7cJ62sWypzfD1171",
  "key36": "5eXcf8r8ifswQnGpLySN6qXu5mbJq5qHyxeUTF7XmVCEPnQyp4RnYebwa84mQ5EH4ogAZ99znDTw8Z8r5kHTcoPr",
  "key37": "5rtt1UfdHrpsRwg8oFFQkntCy9qHhof4a6BgWfreEgdgKPwnsaE8nYBN25mPceGEtDGHznm8tQAwrZqLg2Spn1XJ",
  "key38": "4eyDMwbe5X8YfXkjPRvMNoedgd9nTh2gLaa6tftviESMB7QUf6UPm25ogTnajyMdsECte5PhBfn42uqzvBrLrbNV",
  "key39": "j6NvSeV5m3nma4YMkdFaU66GrbNfjWFVht9DyJf9Gehtw5cNiHVTehQFxDwcyUqPFeR7hgvqAin6Ffdpd5up9fa",
  "key40": "57PzraX6aNoSPa3os3e3Gr4saRZ72KyEboteFz24CVJgWahJ48wKNGkdFx8Vsnb4fiXUmXN3ABjfMJjnds7XZ9Dh",
  "key41": "4BEk6G81jJTiwuE5ZwJK2TJxtGiV9rZKR6s7YyWywFGJg5XEheVaXVdUSwGt7qT41N3fgw6JGtzd2Q3gWqKwBtWb"
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
