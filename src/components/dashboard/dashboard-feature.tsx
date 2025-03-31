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
    "5MYYCW5w9ZTqu54TNt6QtbcYGK9vxMXQmmpfzyG6PPJtSyPdh7n9DJP3WWTn3R81SBswCsEL9DkEQTucfT1Z2Zf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k6nUB1VcPKHjJpitWzsNJdg3sq6gEKesqgrjCG2osSAk6VvUr9H5DeTgHBpr3ZcxC3XBSuY9mtydUUqhPVctH2A",
  "key1": "5c9zXxH3gKDLoHZESbx6qLGVU38MRr96HSTZAnmomZF5AzvxSLoMVRucSj6X1dmN9TqY6WExT6bcXzyP8fehdBo4",
  "key2": "fnzUdfbhAR9nzhy2jiRBhzoY7Ave5vd4trH9JZYUf9Ss4pigsrMtDFxx42TxLuoNKY1DKF8c9wj7NmtokGgReuQ",
  "key3": "3FZwzgTKHikyGwDrisM4A6xRFoL7spEFqwkhBiFfhSJ9e8AffqjbVqyvefcKt5xikegwfKMw6kmEA5jzb4ogjf5S",
  "key4": "uDuSrUT4nR92kxtMHxdUJ5XMeKpzEjEPqd9SRuRzAffsgDty1bgom3nhqxx8veYLndNcryHuHxPsg2ZERX2m1Rq",
  "key5": "EfxPDy6KMomGtq8zjzTcEWJAhnTgbx7a5gEjhtRBnARTN7KgwxcceHyhM9NN5UPxjoXnde6XMJ4nE64SD2SokrM",
  "key6": "2nCrh7Fc9TvQsJFoJGNpbcW7g9EisSmvassSSAkqFzvezLucYboKs9qZyADR2HFbx3uSwGkTRJBw1uAobRdjdhjZ",
  "key7": "2ZbN41CUD86XpzWgmKHgtqFyBRVYsfbZiRAUV3GBGCy1hWnNVtdFoRrjn59xy5hDvShT9YEyvgC1CsSGLnzz2WJi",
  "key8": "2r8NSgRhbkPVRxJyrwho1cUX483v8vAm5nP6Ng3Pe5iaLjgkuyRGiQnSsC5XggwURgZ8g294h6wJNB9N3cWmJkgy",
  "key9": "4TCo1Kit3zVd8EhhyDmMCZGFcRWzyTB6NY31y9TurVzFjHKABLv9AqJ4EAxB6H63QKFPDuXEbxAMmv4Ksg2EtoV8",
  "key10": "2MBP32bpTYsEVdyfN6MipkxdXuLBhFwYoeZmReABppGpsXLWqLPcoa3z6e4o8Axx1w1zy6vcTWFmzsMTrvQatZQ",
  "key11": "4d7YTWvTfkdav8fb9pBEPdG5ocCjaDYWyPVBaNvP6go7FesAMh8CLZNUhipBL1UdLYmfnmXR42up9QgR7DvS3wMt",
  "key12": "4YTxaeQKWRAKDiZhxd9DCfP9tYY1LAg6UJwW5M2JAajNduAnofn8D9dJAyuBPC6omRbG2TR4t1ZXAoFM612LE85K",
  "key13": "42eU2uvxww7kVnLXR7j45BhjEwoBL9PrhTbtN13hx4yAkoB42gox2zyAzxNPTEx7cQvpsH7kfi5Lv4jmzpYVY8bc",
  "key14": "4tkHbyff2jKE27syMrJik8ttSUACakhNBpfFW2L5ZTnvFRtGhVuoNHpYXs1n1B9qWckko9d4UjAjUCssBTKNUKzf",
  "key15": "xrGddFV8iCER5Yq1jeRMfR9FSXa2FpVpPnD9sokgL23BKYeQzNBEaStrGnb1NLceqGfhVrtgA3UVwx2yafoLcdF",
  "key16": "5ZVpD1Ba9sryWRQxFmWFj8biQeyjy5nuLHsWbyCFTWHnYd6qMrhrCPeBvSatF28VCRwjzaFutvEoeLoWGmksxyYT",
  "key17": "64cSAcaCTXSeR9D5JeKgYbQGwLdoE1o3sSvyJgLwST7e4YXs6zgnNSJsXhbLwfHNqpemCsb59ddRto9gKXem75aD",
  "key18": "4yGF5PoGwGWUw3jVR85w5Wryk8mqx5cvh77NvUphTcackPsNeNd6dxCNNqjY8g7yT9CK5XrtBFamUFBJqch1B2DC",
  "key19": "5JAFPtAHhiMbhxZMnuJFSxUf1vuZxaeKMfMLVnmCVijUWypaUhu8A22wgFP11SxrtXZ7MsHeRCdbjw9QkFBQUPCo",
  "key20": "3gbrSbkMCpc2vzW9A3Msfdp2YnMLMM8RNyYFAny8KYSUt8sZAVLSrDvYve8Mbft4RGyoTFkhPu5gBfCyiDexy2f1",
  "key21": "biG7upfMvTk1BtjjBCfUpbPoT1vwYzbekPz9Cpigz41G456Hx8FTuWPDaTPQntff27L92D9d9ed4Wr7uWdQtS9c",
  "key22": "2VXJrnC3wtseSq7kaov9HJ3sr5KQo3FJWmKnyrhXRkFhPE8MZ28Dnth9FwGG1US7ELp8wNHWGRfb93Qhy6YX4C6S",
  "key23": "52h2qjKKo7HP3sjHK6AjtyQWfogG15iBwft75dVr7hD7KFkCrtRrW9RurbPaQRU3pRW8uo26Vtb8T1boMSLpqgPF",
  "key24": "5cUghxeQXoea1Yb7Us6LE8NyhgzGPpEX4jrRuqgRie6Vj3eDFdC3JvSmzTkQCFG2EqKLSP3gfi8QxvZ9BnaF2Bxs",
  "key25": "5yhiDckXdcwoy3TSQKRYRw11HcFX9TmtS6Yz39Cv31wSxCF6eUXR46MzUiNw6Q5iVHnYDgjtwmH1kJ2QRQKqpXxW",
  "key26": "5o8WR1sJ1XC16cPZvVUQQpfx679ehMPzdJcxpZEkBqvQ94yf99wrEsC2PuRxFUb8vcaYa5d48bUEnjd4wS1Zfwin",
  "key27": "3JD7CAkVuokMFM514HjJgVcXYfBqsWYJ4T7LoYbbjWPHvzFbvwCXHLZcpynoCPud6jjb1poM6W3iUPfNBKtH3AK2",
  "key28": "3ksWP2XFedA2RnvUnYPAprzLQqRkwt1a6cFUM3oUgsVp1BzFoLkaoM7NxUwSpyQvzd5yWDR8i4otC8V5ZhWeQ9SN",
  "key29": "5DRPCox9hiNHVGNkLB3PfgxQZs5g2VeS8j2KeEJuRktLUmbR6nWd6rQdSz7eTDjHQVu8e6podWLgdjZBE6Vty7dc",
  "key30": "62qFhqpw1Qn4ZqrsgJmrZVSdn29okpGYQqe6U9FrSyiojg6X3RhEo37Fc8DPveLYdazo51XvZXQ72CvrbwUrNhjp",
  "key31": "3T661P7xVi3acSksE4utNkgWv5N7NH1dLTH1GU7Swu2SAhxc3MRKcBzB4nYkydkb5CJx3NGUwLYQb8dQ4bwb9Wjz",
  "key32": "4Bx2Ncqj2d3Ka7GXGr83XrW2XXX1qtjYfpwMmBmdBaD5oSydJYJFzQoRj1dNJVunRV5fLB4gMeuAtiJ38GjYDSQh",
  "key33": "5KmMALSbQYbotbbv1sy8d2158UWyyxzUiVSgHFQAqqUi2qpNmsYdM3prx62ndV1QWhkCMjFtrYED6xL5kb8cTBZr",
  "key34": "5NpxdQmkzsM4Fnpvg2KU6DAPL3zEri4rkYegx4c75GR3HBQjiKhwGr5bCRBwwnsiVSsiaqRCJUf2jye6T7HYPnrN",
  "key35": "2eJRwHnYFisdLfkQeu6ZzSV8yYQmTV2Eqx9ZwRKjMFwVUV7eCZWYgXDPCWZB2TRyUQCQNLS6SWX6sWoB3tKF3Nvj",
  "key36": "58XT1iyQnfKoz8bvqjVryBuBGLZGGJTnAGvViiKwcUb51YfdabW47Hockjkk96XWwFQg6DqR2b11UNnFEzcYGX5P",
  "key37": "2WhrfnvFXnKoEZ9NLHNVP63KHwaqq3ZrrEiKEC534Hhkee1Nzv9XGmVvtVmGygafzFya6k2oprpTGgkErDEAodCf",
  "key38": "5nMLacqmHjTiL2Capi5PyJugfds8jAm34qSAgWpdjkfRXdvTJsUbmcnFNPZn9ai2jpRX69pkH61aA75dqKWzzzMY",
  "key39": "DEJAH62qDMNci29YzNRHEq2NdCyHQ4tRpMuohGHdWNW6eYmP2QW1T9bSvnt2izm5GpWSVcsevwdodLHjKJmQ6Du",
  "key40": "59AmFjmuc8yvoiHSqGCfYZFzDGFCdrLz1DdSXKGPmPK3V76DNmPbCABf3NEu2gL8tDxcfCq1AqCKgRmdQ8AcQmwF",
  "key41": "YwTp4bNg7hDVEPhovfpe3JBoKDCDvTFGxLkAXvTQ6z2bF6Vn1vCdiX6EGN7ist3BTqhGhHy9y6fg4SdPSbtDUVb",
  "key42": "4p9LnD7VhFc23XjM4yWLHNw43MSbmfXbqfjASWUUeJojhySxLqjakQkd8WjPMLPYcA8NV5Q9snhPpDhZGHVS19ga",
  "key43": "5UrXHyKRJ2Bxt9U1TnZLRfjazughPi6PcbRLayHFJTqMCA7qL1WCRJEMBwCncePPXHTt2pPbYrWBxj4tPaymdxTy",
  "key44": "1CW2CFnAb95wunSKWLaxktR4587gNtnc4KSzA3cNCga9abno8f1sBrUUbn7sUdnEpyZpjyCSYZwg7yVKFSkfxcA"
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
