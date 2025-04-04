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
    "4DLMRy58jZ22TbmSJzfb4bEcwqg3ByZu6EfZ1PBWWQtSAsMYbgP3835fNnhUXxu9kNqxACJtaECBikR76QEzwiQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57FEhK5AUmb7beJ4ikbGHwU4dF5Z2m3uvCq2whn3jFwxBiFeqGqpU2eqWXoErwHvZQBP5P4aQvHRBUr2ytx2J2B6",
  "key1": "UjmosLo2jAZToijWPyM8qhurwsBrbgwiFbgVQec5ZGCvvxWHfkq5PpNUQaiAA5srFqV1t7nPFF2epo8QRWgSXCW",
  "key2": "4NkZcj4zpU1bfqfzVfUpN3dct1XXBdE8QXToLHsVczMwTcxxsegWy47Kch5BnzaiHMhPpv4KdQqw5TU5J1NqRKQF",
  "key3": "335DBtSRTEqyNYnGcRQ6KJvZwQzzNS3Fduw2qrnrChCZNscYN5hZ1KYKGMbVL5Gyk44daDS9icM9PGL1YrJD4JYD",
  "key4": "4a8Pg9Vo7m5CuJ2wsTjRpaJUuJzwBWFhPnATLVDu33UjZboQREuovxWsTE2xTLz1J9JgeYG4u4NxMJDRaQE8C5NA",
  "key5": "zi7QGzWgVGCyc9e5veWNvSj1Z6cq74bTW4Ub6va6vWGKUc1WiWxBFhs6GFQSTdnS1hQDfrn9EACDvAgPcmJgsEu",
  "key6": "4bKx8kCUN7omcRze9R9Hif9vedJDFXS3jJCwStmWWA4ecxuMcZGQesLD8re7MwcGDm8h66p951GfPxKQVExkgvCx",
  "key7": "5fQpSC3UNWCMevYBrCxjMowtw5Yx4JAjgjBiBXKkowiwC6WDowKcLzuE4CE72cjEm9h9cbATJVsU25X6vZLDKxTN",
  "key8": "4QRZVCJxFvdRzNR44YbwGY2KSEyBZsZQSC7JKn5MqpMb3HtDowgPhaHyKZ4bUmyTehhByqDyUdixxqd7LMXiwAAX",
  "key9": "3uGjcMjbdVD22EFe1zEjBjC1n3cfGCz8FF6neU6P9qJeCFEvJLZAH8FcPnWBwyaD6q8dWZSfZXbGTaXXjjzhZzuA",
  "key10": "34kAsSqj12HJw8PmcCPDxySqfCoTr8B79VdRKhfwarPMzEPPCDB8ewGzbbUAB9QwRMnSVN4WXY5ruH8zjykXWDgz",
  "key11": "2U6DPdMFruAcpAsDHfsVNBR1GoYDgGFrYVmPnEzJ42jAzsfeYVvMN7xyzVJPhgzgnk75bFufuYph4H124cyhHeKm",
  "key12": "3C7u9AjQR1Jqf6F8ruw1g57F2cvmq3MFbV6i7u9Kf2hEMyWkEQ9u4V1DtZSCD7ip3exn6sPbTwEyoRdF33zTKZK2",
  "key13": "1ZGF6Tx57tP3ck4kcWupBiRsnepnKsfCDeFMHrZ6CydmvcERwbY3kZJH8qcLHpMTZbucPQdZxYqUDxHmYQF1xv2",
  "key14": "4gRK8RjbMP71sbNy1DAYjSXgnexsxJTSb7SY8PrKTUGFuAoLxj38rVsgwc1GWi1YCrCZwmCxoHKPfui8EYiuc9Qy",
  "key15": "4i3yB7QDoWASZnJJG3iszcADxoGUk6GoyT8B3FBYNjbNYgqZBtBvQ5Kwrbs78BBQSFnmdVgNZsbFJK6VwCgB1Yjj",
  "key16": "3BDua2hW4Eb9XazxBPvZfQBJx4oWDFT4f21hxdTN2Ndm733dWdngR3qs7KfVSBdpQy2VdDTDpXXWkxPnDtTSrbDJ",
  "key17": "55x66UsEMdEVJm1KWE1RTopSKmtNXi1GRhmZrfj1kS52Gquq9fzVYvJtxEX2WqBGpNafa8BU4rgZtjYHCpfe7JEG",
  "key18": "3gvjuReFxN69AG3jSihZFhe2S85jjAg7jtbNWnBZoiZDcbsw8KYbszctVsw7kfzsNkeBkjaXW1rRRwSpS7qZSWFc",
  "key19": "2VKbdfNPxNQ6VPrzTBHumQXTcpoGc6HBcAeiMuqpGUBheajUWdXtYJdwk21i2qwVV3tCSBeq5i2UkrH2FWeNi7z4",
  "key20": "2kf1mAbXaur9mXGQhqzvBpU9aDcXoDrgA4AoPDFf7bpqBR4sGPw3MZkdL1mARFpD83dUCSbFNJwoa5Tk13ib8Jej",
  "key21": "35kFQQDfy32RafR5EwuDK3GUe1pgNA32qvhegrWb9PR5fZu2x5vb9njGGLUW1DZVmK4advsj7qbbAUoizGes71uB",
  "key22": "3MTYLaR9uwUK1XCKn9TjU6mnz6rHYRxuMQn1m1VwieKi2ZQiMrCFpvz9MQArgricXJegdRMS84VXbuF6fEBRbmSN",
  "key23": "4mgsgzX1TDk4waJUiDYdczxaWMFocJLcNRciH4fC5gnLwjLp9j9ymkNPXxyjsnLpMbpSs1xT5rzmGPadHhMkB9W8",
  "key24": "3gqz4zKCRi7XHAvY7QpzyzG9m1jGnHBbYkBCL2rUavNBDHS8JJBD81yFNcah3iq1TAwt3Uc3QRPxPucXqPDtG8Qk",
  "key25": "5CetPfTiZN53yiV8wtPZywvC6Sh7C7auUFyghfUeMak9EfkJVDSMcYJaC934vqtyBPL7mpUdwtkYN2YBDXqWU1Nq",
  "key26": "5ktFzZBjYsm5Z3aFD1hYa85su9vGYfYoqB2ZwtuuzCCd952UK8J2Yre4DVdBy27TYvGYWWxqxwPJJ78XNz97oU2T",
  "key27": "5955SWHyVRzLXsk9LTvn5nqYhKRnS83pu4EcwBedQXwuF5F2QpF13QKGX6NZpbRXN6d52tUcZbCH4W4EeiQ2BqbY",
  "key28": "4R2vFAbe44LjdCLTcoEBBAm8wHVbENrzYDAY6zah7BrW8dg5HRyQbpbigPCsXQv8SBmniuSPtbkgwiSMQJFtcQeE",
  "key29": "3PrZzjtPwaJvXCjeMeZg19e9hHXM5kNmz8UL1wxi5sNmP3xPTQHBJoZn6A5eTtEdmxw1b4k3M3eFriHXVPbC6Kd8",
  "key30": "4hPLb8xVE7DiDyRWJJMrUaWNhGQwVFvwjPYRdHArT9TV36azM6QU9Q27SwNJ5u9bv1emkEwvDh559Ge9cv7b2Zbo",
  "key31": "5CPmdW8YZ3gf1NsALwnzx7f1wfem4J8crEyiMZhrh2ZowbWMsai8b3pBt5MEBxvBMMoZZE4bs1C7uyiGJ51QcPnH",
  "key32": "2WSt2oX4KpctbcqmutxFYUApZYwMZYGyuyqBohHefQu2dN8MCK9QxN24evpu8eHU91qyYgasxPyRNtkpJbp76Czq",
  "key33": "3wvn42mekxjXp85CGJSEcacpsiEHLfSokuHRVTsYHLxku3GsWZH6UH5TAuSHgawccYSSpmeZdaaURLLfUQsuzQAk",
  "key34": "2QsDGY43Ff9Eend1YztqR8PkYrmkXEeq5A3kbUa1n2wH2hvbuBEAcGvzbBemWFuoqj2gG9ge6WNazUEwTwfmWhSx",
  "key35": "58dYsQJA16zfEsPYesqhseH5ysjpUjMbEYvzjtqJ6ZEuVQPzRXMk5RffnwEZmudSgG3KXeibSxYatHQgDgHxFrQT",
  "key36": "5X1nd5gXkA7m2gtuEvbEpZSKLaWkDShJ4cEBpjN3cesnZ7cAdXvnBUQWwEMkMau2R77N75KbyYW5Hs3Qt349rzv1",
  "key37": "WN7QSLu1S59vBNipnqJpBoES1oin5twKvJjAREqA6Ak582Z95QpVhbevVTy138Gs64VFEGwEF3tNdkFfuULnGvZ"
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
