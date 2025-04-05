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
    "3HEbfaWQEZJkazX7VmHqLJfPSxsWokPA9DfpKFBJebTHfE1ULQzP3LkRHBcfqtn9ee2KyCJdeUSkoqEfkPcK1gRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44EbMqBezPA5K92xfuHzjmcNuFA6V7ZUR6yNhoN1zBPJvAF8YuKecgpWrCeWZBwYq5z8tSptkzdT6LNJxd2nq8bG",
  "key1": "4YcqLUDvGNRkUCvCAdjt5ZFcXsh7CjqrRs3ZYfeCNPmgNNAYqxuJZRYHRsYy3vW1SuZfEcRm1Medb4F1ajpvijwc",
  "key2": "3d9a24qVs4hejN4n3Y3N7d2CE5Xur9G5Hdo6GiR2WEhXLs1uygMZezAaffLCF9jtohak6Y86tTxjpBfH9toz3KJc",
  "key3": "2HBogecMrUKfnQZVoNts9xLDiFH8aZTFY5Yt5EoZJnzKeiFvjXhM1s3TzpE4FStpxfgaz7Cna2S7xA2X5MM7x99U",
  "key4": "ofXQErYr9ZAd5a5jLeyLbWvvNvkdgrTR1TaxHhBN8WX2jX82GHZiMJXHwn3fDMp9HPVZQBfZXP6DPBDnYWC24d4",
  "key5": "5nmpy8oHxrWfVp8gXakgWDDMAWNRgM7E73EDit3U9kyFkZkDnjWkrxTEAjFHr6K94883miGEE2MEXy1iQiwifbPt",
  "key6": "4SMDV4pX4HEXyfnkHQXhV4Z2SvLVqL7H5kJ5Vod5GFKXqTbm1mwidnJpdvFqPFp7t8SPpWRzoMSittPr4vUQ2ZHs",
  "key7": "5PV1xZwN1VxFj2xCFWoEpkLBYuVGbzavRRucEENRZT2Rg6pCVCLDKUmhNf5mrwdhThTnfzJhGmzXwP4NEJQ4WQA8",
  "key8": "UUe4GBLfRBrv4xvDP8a9rBFdFfFj64kVT6YCyjMBZNbbc2UcNyGD7Ln7ZuZsrnU1ShVskfEfdvXTcKhbcFcvb7c",
  "key9": "27Hi8gWUNHpXJdUkdumfwvx4FV9oHwVRW6cqr2N2ikCkRF8Aqfc9nb9imBWJX6Kf5BnBBFQfdEZeKZEc5oCJYa28",
  "key10": "5pUGQL8MZN9ppQpKgfkwAXEuZxd22yTKnHd52qaY1pUNGeDrAgDAAYGA9oEZHHmSAD7jYpzppfw9sUncNpiZiWrK",
  "key11": "4GUabSxUj3hQymEKrjmD4wpHAV1FHr2T32EY6nedtZj7sCqY6avFPNK5pMRDT7KnHCV9NMyux3oTZssdUJNquD9N",
  "key12": "2FtZr7gbHCP3SCwYUAocq7hAJNMCo7qgmk4FfDGJsQtZUfoPY5AfJM8BnDaR2cv4MfCuVUqfm3KxDWz6GT16UKKY",
  "key13": "3MXRv2Sf1Fugq3cKggmucsB4K8gmivhyUK8yT9idyY5NUKunjw7nB1HG5LrCQUnANpmrZy2nV1zJtWkjLw3PCRi1",
  "key14": "2wCi5UohJkfxqeTYuz5CmfrWrZHHJRqZvsijJ6bvUUR9sduZGUE8tmgKij2TMGnAVaZy5i98LfebF7ut1y5eNwdv",
  "key15": "2P8cMnLaXHMfDSTdh3ZRPWdmm5wXSPEPStgHggpcmCGbc9WZZp4NF99gbCSDhzhxh4nhaJ7JJF9mg7M1BGoYTt98",
  "key16": "376gWQXgWrpR43AC53jYFtgqZYszLaMLitf2Q3NE8kjjftbvoasmxS5SAh3bihkL2n6TEmgu9fXHTPxy9QgWYsqD",
  "key17": "2o4UQeVi1ddWJ6vX3wEdvmUSko7BznZAQQ9GLRsftoGcEiZvvFgCAChtS2x61Y6qf8duUVE7Fn5AXdUhWx5NxYLW",
  "key18": "KeyECzJKamWYBbepw2mp7D3hDu1F3vGHkJeLrj3qLy7cKuyuvJGCAZqndZUKXsp6VgPbvneGagZGKyKZTshehrY",
  "key19": "XfktPpWuVx9U6LX4TbNJqcscrjRiHQ5J8JBvuMXguMYMNA3H15fxgcHUwNyYumpFc8EfWVAR3G8CS8idD6qBSZ3",
  "key20": "2enbrpFL4GviUxrPkEx2CtZ2fTBReKYgYVNScYSPkXZa4uXDkrtAo6JouzoWSdjvkg5q71Unntdm7Jodt4KnxZ53",
  "key21": "71pvuBoDbeU5ePmrrCavL1WRrgNszpSxuNszJoehyZX7qbdLuMH41Vrhi29J2StqkotJc17bpWH6ZrYRvdZAqhP",
  "key22": "cLWx2JgG9JnAxrLSmLrUYbCN4LfX7tKJZ2F8CZ1UshMX7ZurjEoTWh6djB3H6ooniiunwyv7ec36YeSSSAoSK2D",
  "key23": "32v7oZrTditMtHoqMCWN1yyhTUQvG4UCVtWoz3WBfGUrh4wJbWZ3d5EVXiyu9hFFCpchELCM6VXMcwFQWXMqdSYj",
  "key24": "3WwehN2JnKU8dPhs8zREdC5A36c7D5eRYUsb8DmYarjSguszyGAMBBMKPf9ZnMBWczhBTsU16B9FBT4D4WgCNYKh",
  "key25": "9RgQmc35qhiSu6poK7cfjGu9uRbyP9uu17hh9qWJPhtzf1mCw18ciB6id2ycN2H9hZnb9tfmZHZcisZJnr9JYRG",
  "key26": "2HGUAKcR9mZ5vUHeXSBE6SUresiPFzNBdyANbVrQT1whf9GHkKiDcdpGk5k5ogHghmL27kMY4USXKD8BtYpTdn1j",
  "key27": "435g88NJVATzhpX4SJ4uzcinjBdJ9nhWg647QS5d9vVqizj9P2VfV1wZ6H9VxLW5VPTLzjf5AQ4gcwBVdroso5Lf",
  "key28": "65ZaEZkvDbUFRGxvshEwwEZ5MfLBgNP6GFatwVSjjNjhTfHSMrTW8EKFV9MfUZqXBGcxyMH6toJ5GkMf6tfvHMw2",
  "key29": "4g7P7D7HEJuDxTYi1exgzfdTqYhRG6AmbMSqsqSBN4dy951TxM2sWsn1AxGMbBpNwU8nk34QofapxDRegqyaNEXA",
  "key30": "5RFSCqnvVVXmGsJsV3TLd19PLCqi3Rh3GHtAHDDrCY6KytMgZbXys7egQL2vGuAZfzKYZYKXFpxVs1vkwLXLmy33",
  "key31": "4gzofzDotJvJ3BLhBUXJR2GRy7vELZbsUYB8C3HRVSvzDKiTR6veXdX3cSfFkdrj2FDwQVXcdHRny9CHREuUvJ5z",
  "key32": "3nUz296Xm7ToV7xHY74tmxChG5puqkMFi4MeJusdW2Y1oQdQwzMTVafwhpF5PN5xGT1tqSRnr38MhSzXWCXFnopB",
  "key33": "2Pt5img47Eiu7EKro3XodXbRY7whHHvY9UBDCuE8JnEscAoXXoj11D4BTBCofBHokthvKSrC2q3q5rp8n7Job9up",
  "key34": "29Mz25bc3W7feFAqBc3cFNPHLzbR7E5rhTrX2LUoD46Ny1rt6j59RckQGhTm1sCZc27p9jnmiiqCSvFL6tJXTmAA",
  "key35": "BEjc3Dmnq6TywJhshfWXUzNgmqxReDRFTo7iBtw1hjq3rb4rnzEtwrC8sV2ZjVYUGPaTSt6JxLHxPACkaD67YcD"
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
