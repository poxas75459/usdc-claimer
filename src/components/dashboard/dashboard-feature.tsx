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
    "5ydLnuyvRRTysqZL2rBCGSNKseGw1tV4kE2DBGmFFT5Tnxe5ZJ7utd6h7sEC7D1NG3aH7GhoneaoswSgCD3LCL6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KwtnaSseenhHA7yboKk6pLvLo9KKDcwUXme3GSuTXRWmQfekWH2XRySSNx1eGBdN5xXnrue86NzpR9DPjnUpjHh",
  "key1": "3GvJ2gRtKJ1A3ptsKfSkkATmhdjYY5Dk1MAGqA2YhZ7q2RZjk19wCXwS764SAf164uVr4vzoznkLskNBeMB8YLu",
  "key2": "3sotgGg2MWVHamCxHqhZpW2v1oTsZ9MaTUHSEL1wfLRhpjgp2frSzW2JYGog31QmcpMCyZZiexrcVFGaWbCmeeEw",
  "key3": "ouxLKpvBdWuFu7mmZQYyMFZABtnzJR3auALiPuZEUX9XbyFKXYumdxhWTDRZcCebaw6YCK3KpjK9bbUyMXZUkzf",
  "key4": "5VatWVNVkRGkSPcxNLVfA3xhVT8vzkDuwzkZZWkZUm1oe5mqcuHH4SUwFY1BMCrNmrSUnYXD3wHZ76dFbtLsSsUq",
  "key5": "5LwkrW99rgDFpv51hDt8RiFPDKxMowzTYuWzqkakwYXfwft8iAyJ8QiK6ksVwGU3DmBojk1PNb1mubuVSH2Xujb8",
  "key6": "nS724yQ9nZCN57RoiAT84hPT3qTaMGf31NZqXXMkdMSGUQh3CUNF3FQDX6N1emcZGSPyEX9J7N66KLaT8JArSAy",
  "key7": "4atipBFP1pS75912zb2iUqPdXNTSA3wgMEtYDDmuqwx4UQP4MVSkJdYDSFrsfSJuMPAsdTiVZEgSYet9GwxyoxRm",
  "key8": "5iG6eRQqry2Ha7KY8cY8bgUVWRywUbLbY5zSCVo1P3gXeyxAEFkYwAhGXc4Kwyhw1vWbSfMtjeJQWz16jcbjzsCa",
  "key9": "2qURrY1KuBd2xbF2sPEJuuTdgYXgt9ax1fgtZJPC9A6MUwA8scSsCbXSnX2frWGR2BLKRgkZmgQayj1sn3JyVwp2",
  "key10": "4zvUf4n3i54neiPvkaoPwnqWbjBeu9uvptB1L1DnZbfJS4hefNuJcmp4daTq21Tq9BYxZFEFK65hQQukcmWvHCJw",
  "key11": "VJ2utQes7aC9R2oFkZPTQVxmKesrgiE6oDrr1cujEudaGD2skjxcf72cu3xbjJtWew8MQtXUTbRoLWz6adjkyiB",
  "key12": "5pWkxCAGYkgWSvY1HFc4fNMqszKvR6iuEw2JZXi7ndPate6uzBLNUGL6TmWVPrSwCX78BtJUqZACB3Z6Nj6BMA14",
  "key13": "36nQHxrWU9Lu67YUbScTvfskVFszyuTreh2AdRcQxiiwDmmCXkHs3W5rVEUZ79FVdGQjE3ezhjDaC32fijRvwB2Q",
  "key14": "29QseZUzKiTEqBzjYDH5Y5Bnno7N2os3zusoGNpgY9jdY8Sx3bWU9ms62PTt6YgBJXpejzk4sGtVhoQxCGy8fsBL",
  "key15": "5fCD2z2j3kbpbxBhxGoTcYUwhY8movu1a7G28Mv9aHpYzAHiyBNfG7sVV7PbUSv4iHBtw6NV8MKmyd4fG3BRdiSa",
  "key16": "Gz4KqnjYyMGHNzFVzEex8ejyLSHURkGgM7Qt7WuoYv5KbTDiHygQSd5t6vuTquYH3QLCumF2HAdgzbMsaXrdQbx",
  "key17": "5HZPdSFSiZX7tUFSGZS32dFaziPfwKCkiHLKmaeZzvoGboeGCZBPFpBzoYNyu6AAaMiRZ3ckUYmZNfToNjzFDuRz",
  "key18": "37DaTd1Jsn1vL7G1pDfqqA52i7HhhZJTqWSZngjQXos9BcZxKTQGr6vRbsAVTE3PPrT5grtVomrEfqu8NkxooycN",
  "key19": "4QycryviQMmX4vwVuK24MRrSkwcDxTRsiJTcq4sQ8UTwGNoqFCAs6iDbRhJ9PHpigCsa21gFyfxHPVnzp591rEz6",
  "key20": "VTW9euuyXLHLrYpiAUV8qz6kDifpfSRwh2v2dr7VT2vLDNdz8p4QNjZZ8LhQAWQP9PAomFG1cnDLaA1PgFgxVXW",
  "key21": "5w9BMnesQKe45YS12HndAUGFsa1yNHtUr4fjqQvjRAxTtXtodP5QuNRY76Q2TcqaU52ASGkrcKQnCFgCh5bGd19P",
  "key22": "4RwW7tEfhKV6AK6ZA6U58MJFfRky3dpwR57hqRA8aSSiQvXBXpgHS7jnmc5wFX9iSoji4ThbjKKRVbt1Mg77pwG1",
  "key23": "2zVF2LukWnERQSHyMCiJ6nnzP5ah5J6xaSENZ9Fdh9dbejdGAAkdixApRcYKfkfZC68SSoZZvobiiHumhzYXw2hj",
  "key24": "2H2RY9vKeVA4LnkThciXufUAPqsgFQdnDzRhSVqFjdvXQhQWau2MXx6mrAJRVcCBniEjrYriYm6EM5xPbLpjsq2k",
  "key25": "2adJyzCnhnZZJov9ogrZAPHKX74kGVRVeuo3bG9SMVm72U34gYnxrQ1Gz9423y2VWizVygW2bFzGaLwPh1jzxAcT",
  "key26": "3beNmYGXVrarF7yjjJJUJkrrX8cM4sDPizgNxAWto9iahwz598DAkciKwoc36TmmvcWtMdSdEPyUbkHJD4B6PR7x",
  "key27": "5qVe9hNj6VXutwamrZVp4nrLC4DWuvfWkYRrp5j5CDx6xuAVx6dRTHL5Xj7qspktrVbo4pAcvs9qMDZmAB8nGDe4",
  "key28": "2z6GGXHUB1hohncECeYxWcsSdxi2TFH79pZ9eALAq6TsCLJc7QXTAG9dVSyyPD5Byt6YWsrrQmYQ7FcsNSqLQFtK",
  "key29": "4zSZhJeDg8pNreSfVr168Cxug3ho6cSTV9FL6t3132mZnHMMRTvXAara1bPq3ubB5cvbAXK1Tckuzwrv3rvGc3NK",
  "key30": "GsUYDpQ4kiC98NkR3VBv9wxReBsqXBnR7X9NBGgEFHKWXJbqX4TeKdFhgh7FJUEfxzMNEpoP5t29U8NfGFLQybX",
  "key31": "4ZJR1w1QJRZv8m3Hx3GngRnQiQh6mLA5tQXJ7LmdcxrSHJQtdMq6YjAeHhNuby4RPVUjGAipZM6L2uRYcRMPPzkL"
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
