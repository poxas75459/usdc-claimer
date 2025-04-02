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
    "4XtekfstbT6RsJG8m2c1Z1YFLnp4jpkhtRf1qfPNt8WR7FuWEmfv8s6NEEJXnUou3MDb4Ch51zGMmbCN2UFvmYxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RgBb7PDXgHj3BGvD1DZqEKQEnmBpRD4zLAgNU6hRCjNhyKRAqyedWuEwtjprY6Xjw2gvBVNYV2iXT2e8Qjq1H6A",
  "key1": "3AZ6gKCd667vpJ9uK8YvMXNn7wxXFcu6WyixZxm4EgRNrJcfdTcrzVBCwcS8nfdk7kjyiSDVXEZ7ej3b67d4zoQw",
  "key2": "2XuQmhEQKGQE72Rp7anJcUQuVjhrmHdFZSz6jNx9erPgzQKUEgK9zCuXnhwLuJ7mbA7SNKCK3Exz7abC1oapyPDR",
  "key3": "4PZ3jENLWpdSigL2ADMairES6UjV32EkjSfxsxnbS5hKmeD4qXgvkkhTz5w5MizS79nRWPi4QMnntyHzCANqDnjx",
  "key4": "yijKxNuwbJcUJYhH2EhJ3uq7m22HStpigPKwg3rt2DNPTc9KisKuuR67rvBaNugrQfRxb9VX1JMkjY12m9jVkCm",
  "key5": "35yE5fxsW43uDKBfmkC5E1ZzFkmJPwagygk37PhAA8DL86xG5LWUrUU3wv8tqCxpKpKC8rMR7jmwmFxZgstvsMUn",
  "key6": "5z2BmEqfaSGZEqA2j4U5ZoxmzPmU36pw2pvFsq1ts5DEpMs9EKhSdEXdN8LhGHk9s1nXNwE1iQ4WC8ed5daUiQ5V",
  "key7": "4PKhmPAdWebhnCikx6NLpyhfXuVAhTcYqg4WSEPs47MBtyNKuYhLo7BXQtvBiJya9NTJtGHpB4dQP4TvMcPLmw4Q",
  "key8": "4HoM1Zr9h9m8Kq8uKMq4nT5jSHhMsaJsdwbevCanxj3PYw24vtAedZewBr6zq5eLEZ7WdznmdmQm76TA9ZCqgoxc",
  "key9": "4mytL3rc3npy9ZNjUjNWdTWUpr9vGZe1sC3BHX3jGA2TX74R1DBk7QSc8s3FaLLwtFGCqDy5P1CcsSUDw87CSM3y",
  "key10": "5VNigqWianwfkUgxKzeiTVuWAdi39vHEaoU14SeMvD2E2JBXqbECWThFzD6DQMKVUW269XCbgq4HTTTA6jEFiJWo",
  "key11": "5N21XdBANoEhBBgz48xRZ6PhPneP6X3WV354awm4V9oP98ZYcPrihPrtQPRmDLgHoQriuQrFdSXhB9u8yTfzZUxu",
  "key12": "3oTQhzxB3kbLS24HPpWQHD1WxYMVtjvQ63XwSyoJKxpADM7x1KiiNKkoNSrAqWAfsNXywgAmiTf1bMgguyg5LySR",
  "key13": "3KZX9xnXFeYqjJ5VDVKARq7EjuBDNySgx2uCLQyG7Krzfmc19snJWrX4CXZWZHwcND2bNE12dyJwfYmXjphLko6",
  "key14": "5S93t2byNQ3LQyMHFFG9r9WHNitEpw8YgJVTPaCs4jHNjEu53kD2awWxuVeN7PsVXAW15Vyu6EY2VMStLKiovPw3",
  "key15": "dWYhP9xmqbRtwiFyq37rN41A466miGHbfrSb8zM647euLWxb2UiJDaeFRVT8uPGK9sRQAHkKw4BAcro2C1NcGFj",
  "key16": "3qcmMzeiRk6Q4YmudH6fXtJKjjKRn8CpZEjunATimDMjhS4g4Co73mrt98gUiTApTuZMDXm9mzaHebTNiimE2pSb",
  "key17": "QNtvJg8WVhci7ux4d15UoyKgroSzuejeYumGSnNhDgdsTQ51XYyQr5oBmnLFrpnu3pMGhBmGKNa2rgb7vmspZ4Y",
  "key18": "22LyRX12yhM69cGZjZsi56mHR7qP9LMCxs8EUucsdDNcsvWvW4bnSCVWmLavBLbtVKQT5nqHVUiigVfibbkZikHW",
  "key19": "1BwMEE3pcCryu5VxaY6nmnZtori4BU9UNDjg8wowaLmCTcdNjXh9hXzMHi9tXpYP3h5vHh2B6vRSFDMzsZXejBZ",
  "key20": "3z5vHC31acFG9tMHPaPx3SwcetxkiVCnvkh3K8tKGYC2R7ikJgZ8JW3CqjxomztvPUw5s3dSq1WdxUPySjEwgxrX",
  "key21": "56NXa88rjAzbrqKqGFuSNhjVQVAcqVfGn4TQPA1dRkrUCSwBMg4dKqA4R3KM5vr6TCRZfj9jpmGZKKCoHatdkxHz",
  "key22": "4m1UQSkBeqZDknG1mzio3jz4NSfQt8uNRaHMfLd9Nvp4fNStbSQa6ZW7HaJxVq5rqHqDUhan1rG2b1PLB6Ms5KNv",
  "key23": "5a7sVeQXXHcnLAJDU17M7CXDBJKhK9vNxrofZRFRs3CCLjF4ML6hadSYaesSLm68quLz6CKthWBHfgZSAntdHVFT",
  "key24": "5DhXS5j4yJE6vwV2rF9RNe3yhqvfV4dt6Ptq4L1LbXMMMcWGwjMUT8f7NJ1sj4Q5f5KmZCcTGSvKTg5Bf5YWKQnm",
  "key25": "4xbBFpS3skpaQkKd52cpzRNf8iiSC1UR3713yWXyHcTWvdoMRcDesGCitRM6vSjei2XBsz3J6qipZBPpMvpNCs4R",
  "key26": "2F2qjCetgRkgEpqMWKDuJvCj8fUiwJ9kSXqAHSYbsM1yxog1DH3jzMXA7ocqrvCwr7CWfHrAaXwPRveRAr8iWbaP",
  "key27": "wWLrb3BJwVGfwNQHHrwGyDKXKuzJKbnMNtDkiReEQEcqMZNaAoheqjPUXpdKccav97uyhovdkQ9iiiuvJDyLrBn",
  "key28": "5uW9YiwQK13yHY6ufyLwXM19t35hCVk9vkGXENR5EJAsNWLp8mR6a6BHgsoukY1SGsZ8nTMCUoBibYCFnLsp48Ee",
  "key29": "3E47gz4izSvHEdZWDEwkFJ49Kxo59KD4NBSgPZUbgp8EXkqiN8dZtBU5JM1Py5bVHt9HaseN3FmePcG3RwQ6EpFw"
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
