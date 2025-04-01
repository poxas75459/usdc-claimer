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
    "4TgUe29nyxjGioSCimZQZDDCrmQEGXY7smRWzL9r67GiiJYhacAmdJARRL9Gmv982vMuh1WBy7btnNkfPJeHKKvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63JL4e3jRsphwKHpT48L7DvLtfezNPt9t1g4WNj3JYDSnDSpPCateMS1pYma3w91d7MzgJaBqzbHQUzn3Bg5EbN1",
  "key1": "3WMjGZBS5pm7PAB3abZmq48LbYUAjVpV4xGzqaALPk3ZvxTsd6QD5dbzgCtPP9K8XWWcUVgcPp9F3Sre7NmSQh6T",
  "key2": "55UfTmCcJux6FzQbf545DArZJySuqki4ojUTMBhrUqEoyJL3MnpyNUY2shrhJuF5UGzKyU8txD4Ac3JpSf9VtrE2",
  "key3": "JqS7RuSzVHV5nUsx341rY4Ua5hafBbEa9vV5uU2GDux33AyfnvFhCShG1DZAmVMZqrgEQzwGDtGdpVxE7xYzzTg",
  "key4": "5tUQJX7VVCbr1r3CHu7BSCpub1yA8dHgqHcq27KQ9hieL4pLrsefzbf9Qy9Z9j4nF2SxAXBj6pZmQPqUavwCuHfy",
  "key5": "EivHVJV2q1LHTnyUBud2QgUUYgigaQjE4H6iLaC6RiKnE4DYwWQtnQN8DktTxvQ3sVNg8YsyKxjxMXbWwe5G24S",
  "key6": "3WhLDKpHUGnVorAhzxW4Zh86Wa8JYZNbhfsXToSCC6X2fF4PSdXg81HNFozBVFTwyzWx6FdhJf6s5xKgGydv2FUJ",
  "key7": "2NiT9j8za5x27Ar4rEzV1rAvTFpAbT45XHv3stdXkKc6qiCq5aD7kJ2s7ayvw8QzC16EjN2MGJNZ7JxgKj197KH5",
  "key8": "5JHYou9W1hsjPcZ1eSaKMrGt12NTyv14B5mJ5HMbkvn4BxFChcsHZMeazYbumpXPu6ibJUPXKutHTzb1z962mo2x",
  "key9": "2ATkEztqJYyMb51y7ez17NQAZpxfYTq69acXNzA4z94Qiotc3Hcj8CwupPVoLDZfbRf29CqDxzx4P6R952sbLCNt",
  "key10": "557UVX2E262rSrTYcbyGoJm5qGZnqemimjYizRFrEKSFTdyqs7VyXBqw6rGNu6JD42ML8K9RrDJdFqPGF2Ey2H2G",
  "key11": "22fAGVDfZ1XAZW1xR1Ruopg28H1KtHNxMxNdg4nKsmNPhPhRJ3ZT2751rZqRxTCpNSjwK9UtUcagjzsivnDVmVsD",
  "key12": "3K8MreRVzcg71XcuUFYwQnoJAjVhrcXitSv8wSt6Cqnu2TDVtj4nXJ2r9SEPAWn5UasgBzDM7fe1iQFw8tck6c22",
  "key13": "5VHGhQFeLpaq1o8mVv996K49qhFRP4uudYtF739JSwu5vwDptSw12w4y3HeF5nBbowzmGkNJUrh7716Yz4RW8PVL",
  "key14": "38iQXxuCkh6RMg5FwN8xofRHAXtF3anVkBq34BG37g1wPjmUYYmzBjBZFZTLjp4sG8pH9VpeTjGdrhtxuCPcHg5R",
  "key15": "58x63oSgEehycAo2XbdchEUPUmqoGifRsCEsMLukD5DTyvBtRnEftpaSBiAodXWxdPUuJRiXUNT7WAgF9QedU6R6",
  "key16": "4b2cTdBEePvkeeN5KSyfNmu8KrUQkn56iDxGsRwR227S9ve96YBJomTZLJPWoRG1B1F3gumfU4EutUbPRSLg2EoJ",
  "key17": "59vJNjVqZRJANhnBJXjQd4MGGCmbNi3VGG9gqKeug1UqYKCrqE8Ns1NPQ97chyonxQyhfnAp8mzeVdhaBBTKPb1t",
  "key18": "4W5BeHheVx7ZDGHbRH8puoJ8FccMQrHrhhe3gwKK7FNuAzjWsCaApdSo76dWVa6KFARMw3Xs1PCjnyHRBAC2dReS",
  "key19": "bKmuc2yBQ1RKfwDDNnQ4o22KMts8zaErYKAHAGTUwJUFXfF6HtmUWe5e5a62YfvdVS3WCBoTTxrxTqGN9KBiTYf",
  "key20": "5ABVeST5jYJqZtZPWPWevtJSJ4XbtYKi3fq3MBAcgQcgGjX2k1JKmr1sMPDQE8CQaiGXHonAjtVhQB3dMSXAXCt2",
  "key21": "5LEerT3GjqQ4Ampt3Ajshn6fQM6wAvMqSQ3PAQkWykEnEnJTECL45rR6xk3SttUVCZmPbyAZf3ErRj6iex32rodD",
  "key22": "3pyJtrt3eF8R9dvtC9rs8XMmpaSnFnuMTvrtfAr816tuouBVyic2aTkEfb9xcsmTa3CKtFWqZvuHbAbBj9NL5EsQ",
  "key23": "HrzZG94oSwqk2r63217jhnXWRJsNP7eMRQp11pUBzVnbF6QyGGwwnryKv57Tsx15hn2DxeUKMZVXn2HMEHxm1Ys",
  "key24": "4BsKGQxrAhcaTSuzT15Co6wNXwi9aSSGKQEXMLN4RHYUbA76LBwMwjn9UqCJ8qeRp4jMeWc4hz2getTxeJUnRCpH",
  "key25": "2kxdY7wayefFVpwTD69QgejzqZ9C8SEkhnKgxPYhENCqS7eU575xE8Tase8EoNjwDifPEKHytF7rSLGfdCTC13tA",
  "key26": "x4oxRYHsT4V4YxfCiAHQANmhvcgzurJtegh4BUe53uxrMNJ6PyeRcQaHbnjVCjtnUNRYpBULyd1b2MxYai1zfnH",
  "key27": "2MPF6AMpvskg9Kwpwu5gbWgYHYP2C9W4x7py8AdphrYjcJ4aaHyk1QZ8fiCJTy1Kf6V2BRnDDJXfsh2oVRfNvBLu",
  "key28": "4VoQYuuFeLbSH9vNnSYBhbcaS5pS9ERikqXAu1ZSLsRLyqZbNWaL2osCE6Sy6oLhf42H3jUWSMaJyPS445idUPD1",
  "key29": "3GWYS9HCkGnmuUE1eKXSnsd41STnyuDzYKacVu7uYeKeLL1YeLt74e9TZ3zhTu3kmXU7mH4Y5uXTQKtPJYMNXAPP",
  "key30": "5GNfJtDPfsJ46gXTGR3gzR6sv84w3LpChtGnJZrVb7z3NY8sasvn6zC2oWbNJAmk6x8MEakf63eF6hpQAjcSym4i",
  "key31": "3pKxVX6HXRQsvXEbAtnS4WwWGyk6h669SsJTpo4DV4eRPxS1Zuj3wEYxFo4X1Hz7k6mcjLJVSRaYQp64NzXA5ru9",
  "key32": "2B7L1n64RHBPEfwzskXTGXBsfamAWLAMakLt9Evvy4yXbvZisMUYVqg14xj3QXcLJZeCSBrPwq1DCWWYWG9bEhVT",
  "key33": "hiVUDan3waqtzgUguaZgJ6qNxwrohSWYqmmrZrGw4dHKFzDwpDbWTR6NDB6XnGRrpHTFTYJzrfE2fWURwHDqgqN"
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
