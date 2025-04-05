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
    "2L29w9BKHP3sZfPeK3FdDT4LvJWhhhWoAzmAVFoXWxWoEeHCHBTx19Yqge8YhkEThzW2y8RCLRfvguXc4NpJ4Hy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dq22nZ7w9guyA58MpMuHTUp5TC2J1Z266V1z83nfvRQ2DxMfmWb4W9AYKWZJ8W59VHsizQG12w8JwKxmBcsCgwb",
  "key1": "5TTh3Pt7NG43GtJAhsNcyrZPFBYJn59tcgjMtNzg59a11geYSbXaqCCqtMPSWbjPrtX3WhgNRozmnWvvdtS5sd5w",
  "key2": "tLz1VANYDBwzHptxUNGNSBzHMTn2YTH2AchejuRxpPL4ZxoyfbGVS11HnFYpqNpFRbpyKjN2KKyG7aFAWpvw43T",
  "key3": "5b9Hk5rq6iFPqp9cS5A8FwSJha7RLhhuMfntCEcic7bJTn7xZTbSDeF4gyLH6P7q1XWW7At5ntzHqXgtMWMqSxcK",
  "key4": "3Nimb4raLwG7MhLerwxf9yF1JdEfwnk8sABWNVsThmS6AEWpHjyRV1XD5jTsztMhoAEsKX6p2AkjtdihDDXkebNE",
  "key5": "3Tph4BArCGmw24GyiTqDZn5WVHHWRWNLp1YWHXv3846cgCcBj99yeS993VDy48sEF5e9sF71hrP8cFzEgW7ofEWP",
  "key6": "2kh4wJZKaceouJBLNvnndhyRwFeYFEPeRx3BzfrPRhTjcYF41TLgaxjMTiZjRoUw6Uc5eEmzLd4XsRDTQ6ZT7YQM",
  "key7": "nHDeK6TapuyeXsbEGLcSxvXWbyVbkSZRkqahjx6RxkENcUyiFcETYx6SpttwihXP2o8QpmTw8M5NTkwymRAKxbg",
  "key8": "2Ls3kqGadk1oqpLx5cuPUD2VYkuuAFqmW3KqTKgHLPRkt2sEj3PTjXuECpVGKpjosmGtG5cfeqp46N8Rkh7eQ92h",
  "key9": "4fjwyLMbUXMCvFHP8c5cW4ksJw3nKDTtBDBZ9TiFcLq37dxpUCnTtppnzwt7um72vJAiTdjhteqU5Rx2N3dQ4ybx",
  "key10": "3S6CmEMqZnRx7u7ugk15ptJtnGxgxUA1ddk99281Q2QKJUjYFxmVxxT44qRaPCJ55aA8fCCzkXesgAK5eDYY17a7",
  "key11": "3yrgBvBsXUYLCQ9F4ucLTnzMJpYgN48xjMHVGTvYkiaTZkRLUhvNVUgH9JJoNanpRppCb74J5W1NB943eCiWbiBP",
  "key12": "32o8iggvcNMimP1JFM8XeuNkoLPtEnYSM47K3vHbVr6wR7tbjxoxMXa27uSYenUM4daaz8F86Nr32YB6Xcro3TFW",
  "key13": "QWvzzAtdTeEARi2MCLXSLCQVXdDhtckXowHD14bPS25G2sBztQQLeCJEU4FD5orgK9h6kxL7dTkbMcTb43qpn9M",
  "key14": "3bwycSXYbCuFCbAGbeKXucJUXpQ8RqbVpXYhkhyc8EjWXrfUtWfb7H9cGqotnN2LHjHbSbtDb26WrxEnh82oz7xh",
  "key15": "3h5kYxaWsWzLJCcKtzivketfyTVrorUD7EeZgNKd4zyNhtASoUBNaZ8BFCY62TD9YwLuB4A1NUK2mGZrK2kMQuQT",
  "key16": "2kwmvfmhWRp1fKEmdTY24fig4xiidyK6uAc8E8wuY2h1tmXaUGnFppGnzA1jd1fartZH5eTsYP3WQNrE1BARVbue",
  "key17": "2By1EJtd4rRvEDh98swQzerobK6W2tUXoam9nmGVngo3bFo2yBQtaJmzqDKoRPLAu3jkWCwjwWJQ8KPkti8WJkN4",
  "key18": "63tL9j3dmwy5c1z5bJb9ckbzCijCjTYE9Ms5W5YAbg4tNt6ny94fnVd6eBfsZUD5g9jGTBHVd3fn7ARV8MM1mAwL",
  "key19": "ivMrqDYbEnaQTmz8rMVoYdtZ8f1XaM5v5m6ZCZ2PYNbGy15nuttzpH9iHjBCdyUAR7ZpfzGJHcXiJwG5xxCaMgm",
  "key20": "54pwzCd5Qm17rSbCni4zyE8PiyrPPHZzVp9ZkNcpX6J1VCGx2dBL9e2rmS6kWHTNC9QEea1HH1MSxPSGgjKB4NJP",
  "key21": "5thsNLp654cUBoPZ3RDdiwCkrxYVwRWW2BzdYn3xU1ngU22wNp4drHexctvLzAhGxfoNfAzEVqUe9fCjXnbnwPe3",
  "key22": "2bs38adenY5PGWKxpB6p5H3QssYnnsZUZKp84ePEio5iDKS1P5SPfp5ZwqLJXEU7WjX2tHSPmS2Pd1qWkp2Sf6ws",
  "key23": "4zr9vesRiYtyN6i3doFzBfFbeRix5XDPDgpKRv4Lt8i3iBLhrNPLkUPSbhACEovY2VdVSKKas8HLwDUMMCKHvwEg",
  "key24": "3R2wXApSecBLTeyVTrRPbfVKtqjw6b9XjgE8yjF1Y86VkLBvRFv5ENgrwWYga4sebmXAYNUsiXKRZyktnkYUt8w1",
  "key25": "3hQz1Nb6F4CGbgzYvTEKJb57zKhG3hapC31tNaYtAHHYN32dj3hqv6SFYnsFHbAt8AffBxXT7sYxSbEvz5DmZxBV",
  "key26": "4w7HT3wduMEt4SAmGbsmrmuvHHnPgQzikMZD2Ke3BKE8uYZqe6T9qrG9wPpaRCBhA8DKYeNQD22vE2uvQwe5uS9h",
  "key27": "fEm2oUjQQwpASyGsSGG3CmGJ4HtQiCSrXXKtK7VVmdsCpHR5yJvfVZE8PtTHdPSMW5WQdeTdDtuvUVYgDSybCtU",
  "key28": "5C3WMWdtuHJWiffLpuFshzjDCwaeXMdQoYnyMZxVN7SoCq5mgqjWXAEcDYsvKnyZomr1xz1L2HsNKS9fJ1FsCYqn",
  "key29": "5PYoih2WkJpC7vQVWBPzjBsv2vZ4AUsh7EgF3yxv4ar8PzApTYj2PHCVq6pXc6AgP8Gv6YuEgCT8RpFfdy6mdpsL",
  "key30": "35idMSNaE6JKqerbUHBXnnUKvH6rxdde3JGivzRrVHFKme3ieXSXM99nZ96Q2mQen2heQYjLDGkz94qK1pfDdQrD",
  "key31": "2ArACsjNZdcFPqeMhJKYrjK4cZopyL6inMTqGRbqM5JZ4PRLGmvZDyQiMzMZyASBC19CcvPHfzHJjiAh4WdWkiHx",
  "key32": "56gojkghmZHhRMTwb6gqC9TTiZ2CnKmwHp5TFJzWyxF7x6owYQR7mg9b2FGqa4ugMyyms2aVpzXmJewrbPiVRSoQ",
  "key33": "343q7SFonZwoU9Jggh1yUTrNAudtv74c4dYZzZ57MuK18cZM61iXEPt9vByPTDrpSa7JGSYXrPG4DkrWiuEh7yro",
  "key34": "3QAYhh5zZ69BGbvEpsSq3Ea6Thea5Ck2hvp9djMr7G4Ay7iQWmxVzQEA2rX2UfBDrCsza36KffUTGKuyBR9Wf9oh",
  "key35": "gKBgC5EDz92CCJ2aDuUKWJgzx311eGnAVWa5sd8bAczkjZQjSGiSZYcmWYWDv3RiHZBDLFGyEqAdvDumjDiLGgL",
  "key36": "2VLcemDJPVNLWpwyeYpnSxQG1cehgtDDFm9FePpj2sHVLSoRNbg1P7MGanYrGiAQ94TMZVViPSDprKpMDXpen3ja"
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
