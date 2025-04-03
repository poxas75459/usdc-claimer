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
    "3dEFdX4rgJZ5Cs3pfdzVfBxdszKD1rFvJAjpQqvyCciegSj8CjyenTfjWJFPNdSgWHqqdoPbszQ17FTkvjEF58Lr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HKghpHTKjwyaveQ7yCAW1L59fQvf8dcxUjH8EcNUt6hb9FdwtxqyEuPRusySL13kpbvFKUVxajVkXjWRwN8LSNo",
  "key1": "3Px6MxEEH13XbDVmAWZcvb1DMyEHSTAGSiN8ZQt71VzhMkCds33ESDzMkzhUQXH6y6RV5otcN2Lczt2bLJ16Pm6u",
  "key2": "2FwTVLxXxBzgR8R9xYeTetUYt98Ccy36Vy3o5QWy6PMoqnoXWm7e7TWHqVZNqGerTedVP3x4J1f1YcN9wBffShWN",
  "key3": "4TTHj8xhKu6FYUHtvxmGwFYotvKCmicwrEa4oqa2Mzk4nTQuLdqSTtSMmktKuMhUgJeCeU6RmzGwZVw9HWUQtbTX",
  "key4": "3TG1GfUXcEJmVPDX67YHqpFbwXmirgwyzWhJLriA4MzuxaUSK6bENPd3d3T1tnemaUWsyZAYXGMVbgng9SnLp6xB",
  "key5": "3JbqmWU1RxWkq26wCDjPuEQCQ9XtP9bqzzAMF47M8gQPwz9FVqrmJGLvTKintmkagDP2YJdgMAu9SgkkTr1ZHfiA",
  "key6": "5jEaV3eUh1WGrPQev8LdbsKTXf7eTDAeswUMbjU3dJhzkJpoBfpb2z16An6NSAavkp2ne4Bw2CvQfqr53RvSNRSL",
  "key7": "5JVxrqsC32trPkFaGb7C2f3VWvb3KuGoBGSd78aBguFXRyKkNfLC4vcYjHVEbR44Sx8UX9LmVeqvbQJu969NF9oP",
  "key8": "5Xpdf3xi9Ph87fhDynGPKdeZ4wM6tWHLV2rUQxHmJtnRFboL8eQBdGd2NXn4FPCnFJtV9K9oBo4VprPyDLHoe9tm",
  "key9": "2wXbiduL645Chr3zmekewwWkjUjJvXgwFbEwpK9hJJrCYothnFfXiUAF6NpTf3M2gjgx5BY614JfCdx1STmaiprn",
  "key10": "2SuB99LxMPmwsBSy5PS2u52KpwtLp5ojVTDH3WxruHwyR3gqMGPnmHnjsXM7JdQ5CjHA8LkCGSMXohy83UTxKQN",
  "key11": "37kZoRxSKW4Yy2vWVoX9DVL18QN8ufKskWLWvAf6cJxQzJjo3kzkCRiG4xN8XTzFnCkXNc5UtJiMLY91YngMBqki",
  "key12": "5mTeNqGqFscGPygTubjEKZSMRqPkNx67DyfkbxwdSaFYnKfswBUUvaGaTZZEe6T4KVziRhhQPXwLhwCaDhweg5uu",
  "key13": "4whos9f9tynSPdZEcUM4Wrf8vPX1ZsTRmyJ49p4qCDAiYKqic1GRXLZhpdf2fNFmFRq1ZsKMVxgSdJy5KB4HYRyj",
  "key14": "61Bcf3eAdmmTdikCUzCSqm3rsDomKVPdXAZ9kbJrZT2A48hFmf8EDFDdnA8orerE1hvC355ChqQ9DEnkEEhnXMwg",
  "key15": "2F3HA1jLsvv1ML7mRnkXvjnKkwz4Tv4qisiMA5N4uW13QdeLfou5Aw3WNpALx1M89wXkBe9149jttjXxjes7i9Gi",
  "key16": "5jMxprNQfvamoSYmt3cY6nQBFrSdYMD41okc5qpPvEnQHHhG7JFRkHkhjkbYZBcTxDHKVuypdndUESUDX61DLKpW",
  "key17": "5JpUtz3EjRwF4kyyd3pSoKxrsaf44upZpiGtx1QpwrzLiCeiGGy8TzKZK1isAWPvseCa9JJ9pH5mowZrjVMCZXBG",
  "key18": "5btSzLW2JjYpGpeZ7vY4SgJR4WibyScWStjUQH5vBnqXBFmKoztUK9LCde4CS3uzimqTR1zbWKFE8kmg76PjjYpK",
  "key19": "wUbgfqJs9Yn6YBcgdnSmkB3osfYfExmgjcaqoMnszev6iAGKks7zSBcvcoyU6C2szBPhihusyH6hYBvupKQriNh",
  "key20": "32orEKyoHoep76hnXsjZmojsauzHh6MdKDbuWXDw5Tetea9WHYPWaRDiU8skHMAaz8HcctiMdUUVSxaDbHbQXL5K",
  "key21": "47DtoN4KNNfQKmm2NfVWcbtP7XMcmKrfiqaLhp1h83BR9tuJVTB9SgPp1Z3zo3djF241AbZcTxizZcSzA8Bu3k5q",
  "key22": "Ak4YFi7sxfEQkpRLk579MphGjtFtRrJX9pp4AoksTpjESo97e3Xt3mW7Qoju3SdAPvz1niG6toBWdNRcM5ohMew",
  "key23": "4Uvg52fibcyy4yWYc9JXw55EyQ6nazR6r3vBaLrWD1nLeho3AtYYCE5XTGs2w9PiwyKqdhb3MUGi3QM8wZYP4itk",
  "key24": "3jNNbWbeyPmXbLcH1z7uwNin7HsiGRoP1hbdywfvmmejigpCDZEFy6FEwstkVDK4PWMy3oBMmRc3FAXNcAyMBQ9t",
  "key25": "48MbgG6PpG6Z4vsAMkDsRVcmcWgZr7wk3FRMhyqUuk6unwVBdX56h4qMhp6nyyLHHxrAeq2jD5DCeyR6gtXwDCW8",
  "key26": "3i5dQ2hssDK1XEm8kkXmdWv6Rxay2SvWzjEE6ew62v1oyfAyqcgBvkH3uTqRfKRk3zxtapDGnMBhPDG2siLsxg2w",
  "key27": "3LV1zgJj9Dq2gvgQtucT3uNf87qoDwCc2ECECGEoM3cu7yQu5SDDsAdBUg7VXwcDjZcciMztx5AoSR6TTUHJB1nx",
  "key28": "2bXAVy8gfq3uvtvv74PMSTpqjS2TLPJUw8y9jk39Xw5FeYXzrSNmKQrZC3EMLCT9nPRhrp5HDPuqsnan3JX5Q1z8",
  "key29": "4PW91TtzrdhKYfrfVYyj4UgpJ81PYg3Mjjt63UVXMQAy9V2Cdq77uUEbQJLzoaV5nHDPF3TTA2NV95LHawuLgcYQ",
  "key30": "4tU1b95CMtFtKFGPYN4SQBthz85J8AWSepidMn9b2YtzPtS4cU7P1a9fPnKGU8orhGdUxJB57QvnDHSdhgNjGPo5",
  "key31": "2JW8MGfEkZPmLdffH2BaJrqwaLcrGJf1x4y96JFv571uD69ew2Vi9UHG2TddbZ5bRJRkEyZdJ8bTdzBoqgRxct1P",
  "key32": "32s1iN8URxVMCxKEDfemdg6QMP9V6tb5rw4n5ixUT9RmQZKuFF47nWNMu5BF6TXMrbC8W3hsSYWu1ezYCPT1xpuG",
  "key33": "3oidLyjLBqnVxbzobUZpGP3nueZq898LVdxJUGELwdDUwjyLRRXwGQTbrPxjg1JRZ6cXU78iapgqEe6m1j7nTaYF",
  "key34": "2R31cXVtmbybojCDYMVYfiyoA1tFCmMBdth2VtMcyEpic1YMBnJtA9rgZYvJXrsCYVz4NtmKQm8L6TTHmmC5AdCF",
  "key35": "3LPXbq2wzwFtTBSE1LyqgB9MjGSJybNFG1sHVyDm5b1aAdE3AgMvh2RWGX2B8i83iuGNAkKC6EJvcC7DbJcf2r1a",
  "key36": "dUDDVXQQ4z7hXbrjGtJHLbsmxaf6cZcF8WL7JHJUBb5neoh1f1p6JhVpAj1ESdbgMYiJriuXzbvWhYJz6YqsYSF",
  "key37": "27Fv3G4RcwKfZNhkgqo4RiKDGLyZmDtMs3ZDgvDzpXDkcZWTGjehjUL1McPXVok5QqWCkLtPEpyY1kpaE3A5tdyC",
  "key38": "5Pkz3qihgh5ZjyPGWdY4jm1gQqSErrnYfW7ctSsFsrVL8NeNX9dusLofxv5jMTcdqEULXKP3y19A1y4oc8H2sMbJ",
  "key39": "5u1M75ZPqnMF9QhVfLc1zaAF3RY5MNVTCaWVEvreQUa8H1DutHdN3DStePdS9gFyaMF3AASRHaZjkK5iRMp97UKF",
  "key40": "2DUJSeXaGxCBr27Yvzqa1x2KNjZTadCRBuz52MejTA5EWmp6UPiVFgqV4FSJvjrUWHEWXseaK2fhWmPDNeiPtqYf"
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
