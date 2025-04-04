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
    "4y7iHdxEPkFboSw8U7xeKfAco7cPTCvwq1ueekB2mMtRPzMLCJ95MgTszinW6VGW2nGJgrxsMuk4iCVJWWSf38XE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qCDAi8W7N1fqwuvgrmoTBtnf7eSgW6fcrRtggrMBCepg2Lz8o7MdqFVTvdVnkVNCSgFiGNeivpenq6pCBrNukvJ",
  "key1": "JZexLia1MTbnLRtpbk3a9xJUKbue8kDK8FXFHgQmT8if8L4EQsEAhLgeqp3CupFZQsVb1js7XaMzgCcCFVpSuip",
  "key2": "3LgtPtTHhsJ9gcXvBWB1Gqsymp96EdFRhKMr5TcagAcQ6i5M13V1w7gY2n2c2yhRbeF1onukxoX45QPqctEe1UED",
  "key3": "358Z6tgasQWjeAHUpZwfn8AtqGaPkGhfiU9egLyVkYnDugWfRxpCWopQfzq2WbCid9tPsneKhrTihXabDqN5xvpM",
  "key4": "bfHgTjbHQdWY428iHQ1e2MoXCzGPXtDHUfNDor8161UH3nwcz1eYVJaivBejf9jcabxudPQb4gH66tKtmxT3h6U",
  "key5": "5oAKJ9dnbksACR44kzcpMx9953BUFWnHMicfD8w1EnovyLQSc5gx4RqypjuTiLsFsEDJx9cqzt9AcNfUFNwpF7ab",
  "key6": "4mzB6EVxGfzDGoS9tekykHpHaFNcsBUtdYc1iE8frDGksjE47AxW99h3AmnRy1oSFR6P7wMcPNh4GMuA1Y1uinWf",
  "key7": "3sP2a2Pfyq46yiAaUaWs85mxv7dni3bzEocWDJWBdLVo7Fc6ZamdXs3VcZ5S57kk8YfETfn2qbEyyXTt6n9dtquh",
  "key8": "ggtFaMjiLbxG2hto5UpZuzmqnWHLFXi9dvRs4gzSKSHviagVeejGFhvcxkVMLBkfzTNBtVrwwn5DxcLRmcwSge6",
  "key9": "2CzwhdcoPtZJfgydfgNas7KxPgxu8okefJfc8JAsEuQUThcmVHpzdeCgVf2jWbdHkcEWomtMUGHtFLo5tFLDFbSz",
  "key10": "2FX4KwUaUpQfi8xAYq1Jtsn1Pr187FwEfibvC6BMkM1iwq8WiNg72wQUTzdkydb81FzwmTdMtGs5po5eUZ5bj4vL",
  "key11": "45cLE6T19JkGTwFXD9eFvPsFL2xukYdAGLqtVz38E2PYYiPSB8x7maVBbn8r6gKVaSCziauf3mJPTRt2GDYAwRcT",
  "key12": "trb5bDbPaoUBp8yDw3bcfXn5ea3XbWMRnMPM2RkyFFqUy2afqsXFKC6pLHKyNgNndysxdwTrKPPsFRCMhyXEy7X",
  "key13": "4duL1xr65m9bDvYy8fYyCTbUAQG1kkgpzb1ck2mQdzENMG2S6DPaScZDjPfojHFcHsniLg9Vi9kb3iFZFh21eXQ3",
  "key14": "eLDvVWiQajDmRdCteGPvjDVtxv8pDrHLN8g6cDabDcS6n4BfzKX6jPZFZ7jBFvMXREojMKcEoUhsV5oiaRwNNqe",
  "key15": "5axkFhdQd9F7djPGm2Pcit6RF5AtCM5jC5BbV8KNe88N8ASm7dBrEoXcQN6HmdGSEU2wuQJPQc2TAi85iQc4X3dd",
  "key16": "rx6u3rtzrk7RB65vw8kuRL1N9mmhwUgQE7BVT5mZ6ArzJxumx1So125fGw5Z51oAmPuUBoHVGTK49AYYpWUGZTK",
  "key17": "4HAJdZ3vHX1qgW2hkhDU3Xcor5hKGUTecE3tzvQ4YPdicqog9oHMH7Ydi9iJN61kKrGNAKcB6Y513NYADMYPJ5v7",
  "key18": "CtMkEQQB2aVuKn1KSFYyDDJM3hj1c7Vap4a8RwfJsVCsuJVi6tBZ8RbAEJtDVdesqqJW7iQ4edi7Jrge3rsoM1o",
  "key19": "2MCXcH2AjLX9bfcZ7uSH5YiBB55mKyEmf2BsaiDpBzDtMLFDHvnakH2VqT2QEPFtzWZdp4DkoCj2hNS13WzyYz8Q",
  "key20": "2imtmkKnJDTa5yTUBZ5KSmv3Q6vvfR6dVfEXt34udqjJjgw6JPuqyLWz3WeLvPXgK2hKU8tvsm1bw74svCSCSAZj",
  "key21": "4owHo2PhEev3CCavQVEM42TZm3CRbwfB44coLAErVhUZTBRHBwzMA9WayCHa7cy6JPM2GCf2WodPhahNaN9zekSz",
  "key22": "2WR4FC5mQGkb9R84EK7Cf4S7dURNHNiMT7qGHEf5dP9NLivkgcn3XEKNBBjptVLwo7poSB9STMC7WEJ4rKB1CWXq",
  "key23": "niTQSVva2HERkuZC1xJjBS7roajPVV7etUtatL5gbVxLdngXy3Zah47Vydg5td3DrmjhhqLvUcgrna8GNkBW7yV",
  "key24": "2dJ5wC5RCbJQqA8cFTFQ7SmJZW2DF7GDj524fYgSUxK49GcNPP5fvAXMHDjTz2uFgqqr2LEkHVAbQLcaRGDVzgBS",
  "key25": "3KrMaag3pv3VGh6uEQqPegVibF9fu4QFS2QFxLihD9TjbaKAyNMwFFX6SCqgmcaozhKAAVXA9LNTNsGh65gnd2Qn",
  "key26": "2FE3nYWzBxH1Xg5HwrDykxn8PcZrrdjmqqp4mQ9nTxs858eUKt8baGoDHvUsGUUKEe66nxx5Yk83hqkovEiT33cB",
  "key27": "3t2t6qpJUgHp9xV83NW8TRuZsifGTnaUHLsirtmkxPCuvMQ7MwFCUCwkAXkdZ4DgDrU638m6MrJ89MBYvTfx6b5g",
  "key28": "31QAZpoMXkTD8yzhGAQqyEagN71HuPVaEDFN7MdXtq5W8iP2ERSdnnEfKzYd9BZSkDFaCi9kfvuP5ofnzbmExXH3",
  "key29": "2yq9M4PgfGKy934BUXRUzKPtGUb6gCcoGtLoDBfE3dcFAXrpNqvUoyQ6bQtSEeuWmGxKeXVw5Jpz2NE8uqVjzrB",
  "key30": "2RdKRWLmE26AGxa2cNrhjnEs8LRaWpAAeUHe6VUwanBWtVem22Ath9HS6CbsDqLKP2jfcyKjba12dQdJFhfsYxyV",
  "key31": "8xx3XoKczZUQPxLK6oUH6DzSmbZwk8ZNPiiCVpwpjeSd3uipmSftYNCxC4rTAsP7V9XpWMRAnxc2bp35an6Yx7W",
  "key32": "jpaiDWDyBpu5nDprNqnH2YHswLquh4uFjH1Vf81Zt98mQ9CoSMUYoKxJFhDXsfbxU5WvP6UfqxVvJHdqHMEsU52",
  "key33": "3JBixxdtWQcuXRnKSr7Mkwd1HznrfCw3JJ3CX3uNzMhre6es4Ed6gKhGSMhWoPVuRjd8NdhssA5ssGUFeWGgYvEc",
  "key34": "5k9RzWQb3QEu3EJdVrbkJj8Q6XTepYVJdmd5TTPTKVhvL6RNQbkwzX3WBNTuCKHX9Gn6QbdJ9Uj1RhGbk3gLivMo",
  "key35": "57pDC8RjwZnn3k53ejuDbK6sozM7qM9W5Gzfm2MThPpY3SBd2HYmzNdDUpxuSoqx28XALk1hvAprXF7VgqmtKAZm",
  "key36": "FWEs9gCDkg75gK4ZphQSaLsAcTVTTqYqQUGwWmAAYjeFvXgxky6QtTD9NH5oQZq8S1wwS6gU1MWRpAfki2Zxyj4",
  "key37": "464kbXRmh6rZMehKEUGcxTVWCLRHpo8FRNQyhzLYjThSUEy5QZFK34r1vUynhrvKqaKUiM5v6ydAYw5N5BzEi7eV",
  "key38": "56nVCWxP9N5cEmsR5MNW4t7ooeV5ZFtZj91BLyxhxXCoaNvmD11ZxvcLk6kkxWuRhuKW922aACByokTsTpqZBaaX",
  "key39": "3xhoVbkvHtkph7GwhA8oS6yDMJZoLCACzLPtGH5ytKRjEBwWK5FHeB6Guvipx4QXLRTNPRtXRVGpYdF9dqZYwp8x",
  "key40": "61nxzVjPzTAeL1yERL7VRNNsSmTGJKuEuhRrJpdEc4PtKBFSoQnnrRKtqBaJMDxpF5GTaTVj8m1cWiQxDD7AzJGi",
  "key41": "4EN9EWPpWKKXfhjJVu4uRNm53MDt1jeSm7opAqaekyxA1b2pqtp1EEx8wz5yU7LWUk5kZQShVnWjpL3NoVFiH5Pk",
  "key42": "26zXPrSKJn4PmN8EKxbAErR4zwxfRDCLSoWfoAnNdsDMzVXF62bmg8PSJecXE2FLbQWucJFcZpptTpdtWwaY538f",
  "key43": "2CVRHDpGvwR5H7m4H6Uq6KocuxFDo61D38MZnuMcLvX4MBRK2EgEwT6PWygTt73Hdu4m8K87HvLZUz9WERi4Rs58",
  "key44": "tZiEwZcH1zYQwJwR6EWkTmF9dsSEFvBLx6MYnh98W3tkArrnBRrgWuEYoDd3Tt3GKZbZu9aqVoiJM7ru4oKkJcS"
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
