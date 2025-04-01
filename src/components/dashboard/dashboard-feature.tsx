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
    "4QzMhEmNVzqS1WfjSNhdg1oQ2PC7B2VbTtwxAu9B7sBESBq5urwD5m6WpCdc5zYTJcacKgWGko8oEJzHaKDSGEdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rsEwRm6QMjH3u35pzmwuDZEedikUrfDnD5Wq1J3GaEuadBTJnbsgv2P4aJdrg7LYQrksy7gWt8MnL8vBFhTug9x",
  "key1": "3YVzwydfXKsHyiZ264cgSuRqu394diDq5rg3Xwi6jBcFpsN6i8qYtZbXRE5tCK6GroNPyM4x9wVcsjmzUXYvummj",
  "key2": "47vXAkNJeaqZchf3ymPGHbwF31UwAQcQ2NSb2mJzrACRH5ghERm2s2zdWatiZNkmWh2jTGhkLn2SvSSZaUQPKSKY",
  "key3": "pS9eZGB4PhFF61UmxtvBVgcgj5f9n8jaEhGwQxK6QBD18b6zT7Q5gM6pqn3d1m3QZKJoTzLyE8xnrZv1K8rWyHU",
  "key4": "5zKPvRknRABfvSN8G7fqJVUp26iALdGtdMJxUdSpoDUoSvnEgyDwzRRVP9JKMJaAHTnDtACUMt2Qs3aPG3Hv9QQw",
  "key5": "31NtK3NQnqsxeHK4k5UDAuQXkkaA4ANVkxUa5WsxiTsozqeN51GNx2XxPyWvxgfzyjTC1h9qcp1sAHmperyW6LCA",
  "key6": "BQqxXggL319vV6fFiDEnn1Pw5Cb7w2ujPHrAPnJ15TKUmXXH1Cgmtk3ECacbDvQpWxuMiM23pkVM7G7B4DkXJAA",
  "key7": "5b4R2kUmh4Wxab27JaZtkuyEsMEBcEPLigM3haxWRkfg5QEFV54dvEYQpdbaofm4mSnsngfc9pTvnZjRsXgVrjAu",
  "key8": "2Rnk1mNNgbXieHnCFYtrUZMXKsA5tyNduk3L3DT4qQkkuNqamo9KZoWDhfVRC7VnvrE9Q3SoY8UrENw42riMswQf",
  "key9": "2CAir3me9ijids1UbJ589fb1vMXsNEwxic2k7X7J1A85jCA5ponzEpHdqYBFQoZBxVk9Ls33QFpoBWeG5j8EUheV",
  "key10": "3LR84XA8vaLrvsoRWdgpZgWBAPbW9whAjxH98muAeXiNpB5SZXxcbj2LLPHde2zHbQMuPnBkyen3z17HN25b4KEE",
  "key11": "5bAdYLFbq8Wyj7eUpxbPwnhnbCbDu5wWSq1kPnhCYcPjb95L77oR1VhfsHazH6EMAsH3hh2fNoWwTzCESy1D1i9r",
  "key12": "2btVZbSKtXqtJAeH8W8fQU54q9yTdNPuZVjQ16iSojL3wXp8RR1KFYYdKfQQo3UzoyvchRKkCm3ErjypsXL5nU7E",
  "key13": "4UqrAinpgGUa2nWRXTC9ByhUMWn1K3nQDLign9MR2r26fxXp9Uo6ShszQiZ75K8DEcm34tEpwwk1Rg2ynJeEppKp",
  "key14": "5qo3HucbJXMqfsw1qnoSRooa6iM9w4FRnK6qi87XHLcKsQQ9ajUqhLu2Ao1GsQzQgBNfpBfNGnLm7zh6brtfLw3W",
  "key15": "2kqgfDAxZBmjYE1SKFBDdveJEN25zajAtutZkqjcMDp5hPUsU77eCdZUuGGcNL4TPfYbneHSMBRX2qRdd4cTU9zn",
  "key16": "25Q14svHimrcW1NmSQmvhfhkj6Epsd8eevhGgGzpuM4hqWzcao4DrPxjCwgopgTMBXQeFfMYEwRzvB4FeoSzVTL1",
  "key17": "2arc48QragwtjGnrZcqsBDcDUH3N1mcmc3UfxeRhvrQhhN1rzc1kcRfyZgGfZNq9iZ6L8M8CEbKgQ45Pc8gpm7SY",
  "key18": "4Bb4GwG2y5CHV7K23iguNf3MMzos7XxrQYFBNXzF4vkh6goY4bbHkGmy8aFxBHCSPzEwbvvKQnnQhBuDNLG3pZdh",
  "key19": "3k6nFDodbfwuTic57e1ezRFshk9AhTsshLyDg41gmTPP2ADVVJ8PuzmTq5Q77nWNbpvMxVjzz1RZSdJ1yti18zN5",
  "key20": "4md735ryS8tXrRSis2h8rhxqv6bFwpF9CzAwbRaq4jDFWQvvkFT8gq4wU1q9T5Uk9BD5nVdWTuq4etgQQm1rf1Fq",
  "key21": "3gH7PyzTwxtEpQrzKXznoAsNNfLJEiF3TWsvD78h1e4jEsZ5JmY9Yv53vQvXME6JaE4jQ38r5Az3WjX1rnfMD74Q",
  "key22": "4AJyXF6TUntcgkjTXE7wyinX715fJGnYnurcWTZxFJ4SMWahiw62CVwTnwJ7ftXrwJNSLr7dpyzPK2WiQci6c5BW",
  "key23": "N7U8W98q7SU3nfWLnEQdTFTdqiGXGASqmQ4AXh9rBKf7Nr75mAsPapK8brK925iL3XAeWpGWFdhv7JHH7iw9bAf",
  "key24": "3wJjniw5pHhgkRuwDRXxAvkAbFPRrLo34j1opCqpAyvUJxwBzYF6wgnVFXuma35d5shrmjLEWf4ehtLgScEULHzy",
  "key25": "3q15ZErGaAYmDKp9SgH9prH7XomrJnKocy7wuYVHHNhbhig5YaF3vA2YivHPCgQdA5GHhrEqb3gBgCNCgCTsJnqe",
  "key26": "5XsBPNEhXxUVSeTcqbPVa4ibvcnDtCEPECKvcgxF9dGYPAEs1vxqj3PKKiVLXPPBk7wms1NmVQV2M75mfH2YjUa6",
  "key27": "KT3jAaQ1Z6Pb52BaMeyNqqY7xdZGFJchv4VjbvR6Q9uMrdBUQbd4cQRRvhUCr6g8wX4M2Bha7tyJ8gAF17j2GEp",
  "key28": "E9CYuC6yW7YD48HeguCEsG7SyG5g2rWy6dC3FAf6X6x15e9J2XpSDbszWiF3LM3VeesXDEXNx96vjTEMPwuPfsg",
  "key29": "3a3c1nYEuBhtMvDDaY3bt9UZ8fiQoy3SBMjCt52Sw5SsCUFtjoA3np4aZ9k7QMYT3nc46VTbMydN6tSexjroZpx8",
  "key30": "2PYciXAJfFZDBpVMTr2n9ezcDUtwNkfKBxxbwa1yPZQCWwxRXNMDZXJnDqWmcpQyRaANwFReFgYgrn39GgjaSqwD",
  "key31": "43whhbUASS3vdJMW8roBXoPVgjEUTPDwRrypinr3f65PQ3r42nv4ZeRceaR7NUbF5mPL2dW85KGuVMZa6F9e7zqj",
  "key32": "24z4yF4NgaPPB1Qxg419rZAhFcRkZaYXJMq33tzPFkucHirAVDLxMmnPk43asQaKovZyuVoRDvMAZk2i8nj1z1T7",
  "key33": "5wQD1xgYswKyK472nDGLoFDzYoEB4g5g5W8wCQLSjaFkxC2UE6bhTEB8CPpRyx7r6WG2xscSwzXfMzm8bMJJERkD",
  "key34": "5EexSQZf8HdKT8Qpf4ywCA8zyeeyKsfukbjbvFKBxFj78NHNrG9tGW9JmNRjTtx4NyfJQB3MAfLcSsyUesMP216M",
  "key35": "oVz32F4eLNRqF4oHgQyq3mz5qfk7MZFmFvkhfQAkkfmFEEy4mMgLPYXoZe4oHL4TkEt7WYtLf9evsA9CMTLCkAt",
  "key36": "PtTq4yAHJtqBb8hnXMECYi1qsgfHN2UquzYBDYZoFjdZ6caTiCgMjrbakiWT2gNPtPsANNT6LSvYFNm5P5SCgLG",
  "key37": "WumoybMhGZP8zYK5gHe9ff3LHegWzurjm4gvMPDGMr8oPQWyD7Bzu17SRRRm9qirRAJRtgDdmFDeoZWCYDL2Km7",
  "key38": "2FjPFhFRPKWvorLquTkEMAtVW1eSmA6xjC1QyZTbUDKvwb2Kd58MUdBrzxGpRyUAnUCxNVp1yGXxLpAGvhaWxb9q",
  "key39": "5sWasEv1Zf6qD6zuu7uicQfJYExM7Juj5EZF3BkCThtSRw1hrReqAx8McDydcmuyd5tRTxyKgP3xQwaRxatEMhEt",
  "key40": "3QcgJEeSLxcffgw495zCSJdXjKvyMF1c2MrUFKNpqB9xh8Wa3GcPWXsaEYicvHrykVfDUvAWinxM9LHavqRXcUwg"
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
