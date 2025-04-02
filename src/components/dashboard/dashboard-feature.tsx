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
    "381QiJ4PXQftDYBnbZSDqRNFkf23fNiF7dgCG1LKu3wPRt2wMNf5sHLjqi8UGgNECG3GrDbeRU4Kk5Xtg9rCWghh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QdFkaxQtHkYsJ9kig8Qh3VJBeZtuKFNtrR1RU5RCh6waHgZYUuiNzQBYB3XQpxUpvfPwePntMApCM8q5dYMPPuF",
  "key1": "38bYGWJB5FCqFL3DsGKddfSgWagfUofuB6RfFjoqnQptB6YwmjAJUKuk6es9trM5bg19L9tbkLPEPTBWeM6VhDbA",
  "key2": "43N736XfsA726P4siwUpY3qr1bgvxoVicw6tTvGJYJG9Rp9jGRx7L8g5SJgNxWHWLHhgV8DuUhZdHPpjBspnZnRF",
  "key3": "5PUxjxJR6uqcT7GZ58Hi5Zr5fP2Gr6QtfPg4pBWv3LgaWpzRHsnYw4BuYbxuAub2mARegd3oS4jkcwezDRBtccNu",
  "key4": "2pL4ePsWLUtnrvi429mU938dPpUXZGSHneRiwCPjCSYEAmS38i7DT5E7SJBgzLD7pipBpKvPUKsSZVSvHATTPMHA",
  "key5": "5aag2cXt36SPL112phno4EbF5QjsMYUrDX7h8sYGgbKhdCTeZuKHbB5bkDb2ZLPbpbpfYhyETP9oEx3kmu7mDGqi",
  "key6": "2j56rkfMGbyCo3fVpyTMcJGTPH7S73qqJL7RoG5ocCpQUASYouiDDveDPwsvgDEABiX7HvAwTZ7KwQGmeHwHTfjh",
  "key7": "35Lbu7GBRTPJKHM9zhMe7PHNbjAa5jSyNeYN87He7mVyoukAZE2MHzuyHKjceyaDLAwtJjWfUk9hXuXXV1E4oZmX",
  "key8": "64rHk3BjnH9yrPmxvEM4ftne4De4JAp4DTE2GM6Y1hNUbaMMhgVf8bMadXtrYdAsHNdh6vVe1dqjRWwG68XiogjF",
  "key9": "V8iZoyrsdaEhdEdYB7MXT3MQRR86xjEK1Gc7ZjdJnvm8ikK9nbbqACa7iMdxjWjEftARMfvrU1pbieXjAsP3CxX",
  "key10": "5YkPMC3zZT8zQ8gj4gHAxfpQh1DuAxn6oZQYBFcK3oHACV6eubJqSCqkJoQgq1kG6LHRAs62qBJUS1mRHYXmgPoS",
  "key11": "2V6qyEinKuTumoiMPZG2KFMhUL9GCjcCrT1NbXiYbeGVtenbymXnr64nMSHVmuf4zBdgeKgkKerQp74cBDzSU7JN",
  "key12": "4S5tSgSke31mqhEa3Cu58hDMJ1JxZjiY4Vh1eiWXSVrRXWkZumXKafG36ULKd2kV3PiC1kkZ9fePb1XBArTJcER4",
  "key13": "5hZBjBRLuPwhjZVWsQAwb1mBNz5DkAkJAqCe3EyyLapUn3r5fo5zbdkQezrctuVy6ZtKdD6h32HgzzR1j87sDfcf",
  "key14": "3vtiaruwHL9zNwKam8MJkcMCJv1x3usnU59h5qXyKEy1c1PnfzCmJMr7UDWhjvazTcK135BermgrLVM6LChv4tMh",
  "key15": "qvC53qEiF7DxuJKdiLpsFU4gRr6pupV1KDey72EkhR8Em2UwyGgRE5d6osLHxtCmh6WJx3VgVvHm4PbU3XQJ73r",
  "key16": "xMP7neCmW9thfbyHgX1P43ptDoV8dCUXDLJ4pA2TxhxPT7hFBVeSYuvEr9S4X2VDTaRsxdAMZGuT9xoorJ6VYKK",
  "key17": "4iSp5piJSN3byi6R8x2g8TuRHySWM1frqBgTYW9c71z2Vw5b1F6kiXoBGsf36L5MrwBssuY8CxBFYisnvS4CFFkC",
  "key18": "2YPUjMvDxg4Y5m95h5pdz6rng3E5HbT94DbPSbYexoZ2L3RADtRqF6Nwgy4iyKxYpknixBnfAJMxg4otMxmH6TeD",
  "key19": "3fKTEGcPXKfBauTD7QvJJ3bEJ1tGKHs6QpL2VU2osZHNU1q1tJXtyoKiWryRXf9Y53VjGKzj2eeMjTuZCUgoEjka",
  "key20": "3Wja2DZuTfCYExHvL7cYH5pBPgNALRYWTbDXQnd8iHVqpCCJmGVHrhWnfURowhH1Auwj3ARHsAuCYWq6q8PsqrsJ",
  "key21": "5aQeLU9DauavRbkGcSjJUzj73kPqiMVmk65nwVQLd5s26CrFaB3xK8dkdxpzS6S8osmBEHQFDCSsFvt1MF4jpz4e",
  "key22": "4ctMQPKAhNFLXtARo1viAx3hYgZeh9bpKbryMbs2BSvy5RUkmm1VceoRRQqL6WPqcRp3EBF2WYDXPUqRYVvLsBJi",
  "key23": "3chV1yp8aLGRvfbsEPccTgxy6A7R6UYdduTXjk1u3Ks9Fu8n374jYKjPbyBDVCG514F8ZKVRbvQQRHUE9NkCzKv1",
  "key24": "3AVtwYULvnbi2j33VA4epDnRPci4NKhdr1t9j5LCSit1g7WJUALjLV6FCiBY6c6e2ZeD9rvzfijTix32NN5bqeMQ",
  "key25": "ng4ybUK9F7GkGfiYK4VrBuyvQupanm6CsJS76DQZSDCBdJCgXybQJRT2RspESG2aVRPWtZcaoqnoNB8XKzcYb43",
  "key26": "3ZvL6WAGFdtSV6fhYtwAZMbnBtHPKakHvqvEkBFfuh1aPshcAEqRHtYvwU1bSJYww3xpDpo99GcaxCqtdD5T41yq",
  "key27": "25abuhsZvrc9EFfo4jNUiX4LE7q7gowD9MMh89dtAoLJXEBaaLkGkwSmvzdjd5hkpJc2KYDa781m19VPqZo1C9xR",
  "key28": "cpJGpQXRbamrSFYVSd93nWaNHTu8nXxHngP8tmiUFKbN7kvGMq3WHquVwd9d9frnUi6mqsn7jtSkHLWucTy53HP",
  "key29": "49XuLmTFRDP8mJsfSEtgxRA3Pz8oZLEShdHm5m2v6a1w4jqVjKgnLP9bJupQG61697H4eR5AjfaVDd4Z4fXnQEvZ",
  "key30": "3pgotRiYhc6cs5VHGtLAgDTQ21KwtgWi1xPHYuVooBrQCMnCeRymCY2j9uv9GPcsfp84LsipVoQjRXgXc2WcpNEC",
  "key31": "5NtcDCjZoVfEoze1wRXb5YD4sWC4pYhHpBtcn3HcdgvkRD4tKWPyapuX1Rtq32rzLLciEehK26BFp4B3o676XgHk",
  "key32": "XGG87aH7okBJanpjJE2gGfeEpfqq51rgCG1XkSyDhybrnVTz1Nt2gteDJs6qhKeDcCuwiSoZ9UwfUZ46wwHfQ1c",
  "key33": "5v7fQnkHFJRskDW2f67mTHtyKjEkbUGMtVSXd7xDmddb619yhALPEuJrqSS5XYpRw16jSqNkHDX6rfGjDGcGEUyN",
  "key34": "4PkH1q2e5vF7W5oEKJMmG13D4mqYikgFvwA1iMb5DGGmd65sy2qqcD4jgsUdmYBkpQLKAsunPhUcfsHfj6dqCAFp",
  "key35": "4uba1NxbdqhyXowJ4aE4Jr66BS16pwdz2pYwm9K6Lhvoj3azt2rivibfVhMbKQgxQ5YQZ6nbYE8b5QBZbKDL1o35",
  "key36": "tVECUsqGjiStzTGpD68sfeVKaxV1a4LBcTSYZwjtZs2MqFTs8TTBNzQsrLLa5vPKdv4oeWsonnBv2vrDX35nmnY",
  "key37": "YiF6U5Md6ZYNJpS3ZJ6nELtPimQMfM895aiXVKXQVt43ptqy6AnB28etp7o1XwBbFNKXsKcDNmteC5Tkz79Wdhk",
  "key38": "4StcBxLhVkgqgdZmJT86ZHHtLwHE5a8dJeN3RjdhqJj2RfcDKU3cTsnpsy6Jt9fuL7j8JHADUDxoLu7rxa2YpWG3",
  "key39": "74fSYSPDM1fhPy6aoGnGF9r9j6nzcbkhrfMEvoPfStjounDnryQCLRAu3wrAWcymeVVmY7M5axVa943vxhKKGDG"
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
