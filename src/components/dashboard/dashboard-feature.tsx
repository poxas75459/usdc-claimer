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
    "qbp9qnayDRCDSxmGWZHssnhKsMYByJ9fKYn2S45stfcP23C5Pv1tR4EuxHHDi56fy6oQehppzVpXi2kBTXJqPQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37RttDGPNKL4VNe7cQtjyC1ch9VZy5gVGTmFnm9btQxrbhYqzGCsxtNu4sXwrt2a6pJW6y7dn8VMA4etEDJnHPhe",
  "key1": "qAm7EonipS5oYeCSFCmBJQ3A4AnC2FTdfyHmReTq2adEbabDMD2iUDpYDpgBN98Ps1uBSdFQqyRbVnxxWyAZLyV",
  "key2": "3E1JJbUUJzzyjBGtZzousyFbTieaQkSPeHWNCw2mh4mArcPrgszyxLtQj4F7EMUub5xfvuUxCmaxEiYQ2Gz2Vixs",
  "key3": "2R68CissaE3Bs6Jf8pMRq5pcznKdwtH2ZYGC3XffMMWuuq391UXQPj1JR77KtfSomeerSeQxdEEcphzgPpnTQ9XY",
  "key4": "uQQM7gKvfBm3oD9ExKVpZUavyu6Uw7H19a1Ud8bQfYJBJZnzkLwEACY2j53CyQSDpK9qbue2ctYM1oaaKVijw9W",
  "key5": "4vKacCB5fUGzBi77f2CB7qBhJD5f3LvqQqPM9poqwtVHhTGRruQfekfu7re8672v4LHjt1YnGkNbwnkgagKjC3mU",
  "key6": "3smDXkWkBb71bgTxMXDXNxDY8A21UhoMFNY6umAsdSGzcVdgVJAh5rWBro3yZpwoH2fUywHZWh5mLfyMDXXzUvpm",
  "key7": "4QLEWHnjF1DQtjumGRFEnFZXs7Nz8Kiys9LnFT5J6hoXCuE89ZfN3apGvXq9cEi6ErjHujrhivpDtHyDe1YDz1YF",
  "key8": "2HhBA5Kxkh66Rz2mRVSKcH84dBkLvEtPBHHE1k197wAdhY22JEqpmC1RFuMhBP57snxPeN8di44CEP7AfCNs6YH4",
  "key9": "67jNEprp27FD5dvaPaSo9Ft4HKLA7XTgZjTuwUb9G45EBT5ACKW3WyMhAt6tzqDxCoKM4ecZVErGyJqSyNXFBxGD",
  "key10": "6oir1SsNkrf6oAWFnYLftNF8y8GTf9TN5JpjwQLdoXzmSidHM41VPbmuunHF7pza7RdssjEj51r1unySAByGinM",
  "key11": "bFi7hGuDFskPu4V1eiXPcquW3cB6o1f2eu7Ee5bTa2SUkyJduM9GVNafg5YHJFZQw9tJM75kY4cBpkWN24TBkiC",
  "key12": "4cufC5rfecJzZmcGwi8HzU7nBL8mcjdHEUe6wqTXVWRk5wGtX1w7UnwZPxGGa2yG6HKnT71ZzscTRP6UM3GX4n7q",
  "key13": "43KwkRDms8gBBspuRZJyzeTSYYE77xtVJobS536ciUwfb317UzupjWiAeKyhybDH6wvovWnmevrcxrREWSMBhQfZ",
  "key14": "35CAUjQivc9xwoJaLfsagZ3ScfpGrS1LqCdnPr7zgC6n5Jn4ErTKDXKboF55kxSMhScyJpLb7SDv29Lujv1i9gu3",
  "key15": "AaEmctVgZ3Ean1kZDj3QLdQ7iJpsD1NtrUS3tyhifQASyTrU16Z9EherfyWC71BD2HDz63dbisGRz1etU1zVjNg",
  "key16": "3pDJPbG5JaE8qQpocNoq9Z84nQsHLuV6on24F4qudEi996weKTFGmAJ75mp5ZtHwAirDcNsGirLdusb4DMabRAVG",
  "key17": "61wtodxSABBJCcJqgggoqyQ57LayTuvsumVeLdHuZoaX6QysG64zkrModG2CgwsNw66huofpnsztuXKMPJMQfBJc",
  "key18": "62gFFadRVzaoAet9cNCNBJmBFKofVUszd8AoR996MgaQLnNN9hhBqvETETVwUqM24UfpnBi999KRn3GCEszLcrT",
  "key19": "8dyDrZuHN56dPKtYt85DiR9Ve71FcjrFDBurvhjN33LN4jWXXLVhpcSDmQsSpxQdaqCiYiEpSzWYaxD8jjMgBtX",
  "key20": "3rz3QPMwJwyTkaKDpMMkz5x6QSB8eQMMbR2rxvgGuhSfjK8dHWYNHAA9Ag9tbhbPPogRmP3iXMbAVWx7zZMayt7p",
  "key21": "HRNCp8PfMrygXKgeRtK4xhiBWKSXutpgADBgRtAQFkDgKnTg7C4jpyymjJqsaxeW3XqpoJJSNLqbEVh2nGTebEK",
  "key22": "qQFPwJCGaKfzjheTETUSPwEMgNbRtmMRqStU79V9WhD5TsDZi4x7bSpbe6xLmgYBW4uuGe3CM5J4CJszAkhKGhg",
  "key23": "Se7jqktADu5VMkLqqUg4CqMJDnas9FQUbuqJszi1wUPwTFsSpqVBZdcikTJSgajrwR8AnnvzZGM3HNyycX7DpLX",
  "key24": "2FqHrUysPT4pB2haoMHLNzcZXvtLn7ym49KvEZ4LerXD5CdESqyTbECQdiNnHeRw87VQNKyE75AqXWWN54SYo64k",
  "key25": "4BXJzcyuamNqU4na9oJ4hGjNiCUdkwKY3KfSn4eYQrrFtpCHmNNay8V2SVGPorL9gFhgbiMvwPteRtGuYvpUsLxo",
  "key26": "5DMcxVKquvBQWKx9j5FaKWNCk3WRq69t64Ty1bjUbCZwqrkndG38y1y5q7iHgimXbh6EsziG6wbcMYVZk5Xdz5xF",
  "key27": "2mQnXKykmNkWLSoEBWQ4jiAFNetmaLhNy1UQDJ7m9vJT2guYy16y6Ybz6m9DMidS9PuKuATcgaSr5MjWKYt1GgXe",
  "key28": "3WbiEcVtFzeS22nK3dAKjQfJSKBRFW82xEvyyEfD7ufyrjt6NR8ZWP6J3dLAvqxexi6N6rrDowPhtU2Pyza6cjR3",
  "key29": "5Q33ogD4tfS5CnAapyYz44iLNN9HxGyNK3SEG4gFaMisE9y5LTU4KpxT4Sg5ktHuXfkCYp6bGKPvytVJibvZb3Sz",
  "key30": "2a8BA9J39nA91Mmjuv8HK8oY98vB5mgGjdqqanhzX7H1cMidQsM7UreofWF7GAXnXjvGTTztggVB8Z4CnbLnBkgm",
  "key31": "65jyBHoqNEwgqoYSL7fvAotqAWbGZGak8FRqbQkXz9JR1HoM1QkqpWphfrMQk6Yyb2hLaRsSKif7KpMKYCAH3Rma",
  "key32": "4E1PX6X42qLMLGaUZdn5q7koRAtQzN9S1kFSeA61PVQJAFzwxDrthjPij1xt7EZa68oeeDzAQQ9o2T7HFv38bLjD",
  "key33": "5vpa7K5DXEPr7LyT8B5mycq3hEeLX5ZNULgC5ZdC3Qv3BMnCMaiiMNVH8ikU9TzLX1FEdbCeyvvG7aDfLkDmtJNm",
  "key34": "2XR8FVjaxMykEeiEFAaxN3CoYbXek8Rd7FHG6oJQF4Sfi7s6GWUQfJyiaiPLJCiyR8AbZLUC4LbduBySpcS2fgWt",
  "key35": "2Kg4JCbYmfAXM75oJ55Uf2ATcn7uhUDUb2YeCq9yqnFPto2aZUgVzPCibuX1Qk6QMHTF6GFjBfiyZC4QNY31JKG1",
  "key36": "36rzRVkvjMJgN36oRRhj6y53uFum14Kcws1cJEXWiockXc1C5HTjhPwzW67enQyWmgmqtp5dgUq6Vc1vCzqoLMWZ",
  "key37": "58Lrg4G1jgZQgzP1J7SYXCzA81ABhAUQZcvRLqDvBM4wzk97CY2bKjeVktmNxiVMVaAWReCk1P38SfRHPeyDrm2s",
  "key38": "4DBEaMSEwhAhirtyzx2bk5oqKbqquEJBSxNAzzbw17QHCbQeFWXRgsim1DVkNd24q57DnKcDVCaujU9P1ZLggzUz",
  "key39": "2g2icznEpD4nTPh6GyobWKMpxk9YYYRKASpoFbWWdcZw9j5Dr4qaGHqAwxNANNvP8mBj7YMoeFuo4VxgdDGPvH6b",
  "key40": "5vU9tEUcSUkFuMfBCcZbDF8vpsjxcabUWdFSYXt1ZJpj6rNYsFVenBhJVFCZBkqYHXcm6HqFEFbd8zdAQ8jpQVPK",
  "key41": "2AKUsof9JDUmEJjjck5JEEytRbK6M6rAyQjLHxJZGUfky3oBqVYEyrQR53iRPb9L2EgkjSWszgDWbCXqKd3qLxJa",
  "key42": "2w36UCxusgJ2SF1MKexpB8sHRWQSdA3k4sccG8bXcppQKQme6WLwM2VMsmKwbsUhyLmFAU2eTJ5fJtQTEgiU7e4j",
  "key43": "37QyixceyiuZSbwnUVhmDyMkAtfQT1fu6yLJpbAap65br9vJNYmaqJa77oLHteEqzzX1yAfhv8W9kLQQHKiTEfJK",
  "key44": "4YpmH5exbbXGRgJd3YYnA7FFGqdnrtyfLSBncHMBE66gtEESW7GPTBxboFy6Uos6evMRdQyo82VFKa93dHoHxMHc",
  "key45": "2AdQx2n16y2jR56KDCjsyyvuvSGUQpEVL3mLNZ7ySZdUrsoeRcvyoDFE4UCPprdjtuHNbA2rq1eBCkLf5uRH4ovx",
  "key46": "5cicQZcasKzTBy8qpViHxTizwUhqyaect57E3Dy33zJfuBoPCLexYPGRtYb5sfuUCsZWVY3NfgDdvDrwMG1EtEab",
  "key47": "4JBhE9m8c3HoG7VLcitWHpHvwSsQL5i6m5jghhipYHtg3aENKEhewygEaWjs7XAUbzuyzAd9Pg3uPhmPqHyCvNRB",
  "key48": "ZJTeWhoo6hiWUeUeqxTkY91YVzrXa34bGTCG5n5orVNXHRSAYTszonmfNWmhe1qFEMM83wjtP1yqcgBoxo4uVge",
  "key49": "3G9mmWKE1y9tSKN7qzjCG8bP3bYFJyHMcnYMxZNEeVv6hfGeDLWJ2fRNGrBXW3PTHbg7js6QbhqJ51s6fQumdQUi"
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
