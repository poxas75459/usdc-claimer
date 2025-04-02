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
    "2kKGwvoGHTcZBnQmPJx5xM5SPuUB9fTFrTW42kjvvRzxQ1hkPWJbi2yoXoFS3pFufWkAACTUJXHo8bWNP1yonAuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fZBfNfCsmf6gobVjjDLToyFsAbHyfos6RtbwrT8fjJFGCX1zHnWTZTPMdSBRSWxY4anMJDXGbg4vTuTqUTyxQuk",
  "key1": "3HPEET5hmgSu9hDqSMu4tmTdzf6iptmbXfguAoQGNqeG9cZaCdyRhZxMDksRLf3CwaHWPGmjx4KsHHH8PErRjiN5",
  "key2": "3cRkaw6AFBsKiuYFtdEujye5zoMAqn5sFfXSkGAMu39iAuLmFMuWhqF7Z5H5TUWP7XXNM1CrHvFCa7qpB92Rxmst",
  "key3": "3eFh8UwgcruNqVtLBCsPewAgDkkfeSJTCchCZ5DnUgfzAfDm9rQri3RyGBGgzAG4EaPgvtdnV81iz6yspfunuBb",
  "key4": "2gpRz5DaCnBsVhsDiB7ZWWrxBUCyeTY3AbJMF8K99TLR9gT43gpS7JbDoPpLm7VphRLnXsMtBrBLpWa2pfkxgUiE",
  "key5": "4jTKVST4Cx8eksWMq1iTLhWNCcMXkj1ZQWDiFMMX1yAMh6kGeW9c4SJuQcEkED8FSM8Zz7zyAHKa2HMNASBi85bU",
  "key6": "2yiZSNNgnq1sqytyBHyBXQvGk8NsXGR78GtopgmEB6gdbHUQvgdKKSDLFZBLJ3E7KspUevjbK9ML2G2zEyN6g6KC",
  "key7": "2uhBCV3xbrpLZNVbEa7oAwsciV2J99YKaVQ13CffivkX1x9tTeveorjx6ZG89EfdFVnSEYgBFoi91DHvEZ9i1vqE",
  "key8": "HReTDrYj5y7qMjf4zLAh8FENtjjc9fD8zcx5yLqYSGNVxtnfzkFYiWsipPMas6fk5wtYqXFsT4dbK41ifgcoSs6",
  "key9": "NUQo6LqZBYqJgD1UDTd8FYyZUnx27FNV5SDHVTAcU8LRRvkAUwaYostEh3CW6iiQhgFF95zgRCobVfT4Uo4oz1a",
  "key10": "2xfU7KfAjgE8ahQMqEiQhd6cTv6ehmmZqXGthkD26CMxMS2DqCtV1h9amDEpY4c79rf9DTvUB1K1kV7217FPfLN5",
  "key11": "5TrAGYxDqrE3mpP6SS945hXwCCvoNjgwxWE6tZfQkigFuvwaeeB7aWvqQrdmrBDbDiSxwUMW7idYMHgT1ZYQqWrF",
  "key12": "cyuBJ2BcQSgGgZDMfPcbZBDmYgort331ywxg6A29bRazy3GaUhCwj5SxCe8nn29QpEzwaG6SsWc36dhwQoWYMS3",
  "key13": "4rpGnoKyN8ZGLXvGVmLFiccDqBh2eZnZyzz79DL2M7WjKAe9NkLvhn4eNsWkzoh847oi7Gn13bdoXoifPzfqGvpy",
  "key14": "o8G6nXYbsXPZko53X4aosqaf98JWjUJb6KvvSpcWh61Eh6SfHQunVZxHYfacfhJyzMscmKu5LgzJi9nzSeiEZvi",
  "key15": "5C8QGZxtAKNUiVpvVRZ16CymswoCZjfF2Q9r5qQ6qAFGxcgNideQf2PUF4jAkgvJNjqFFsTN1kXeG65KFmAFPqCe",
  "key16": "3xK1Su6jqHrQjAyWzAAjKrVUBk5kk8Qe1dqW3RPY6hsoguMMNjFXMW9rUxR2SNWKskxsPtDtEMTSbGJDjLQPsR55",
  "key17": "4G6ptApcCre4Wm9yKuAjoQnj8c5hegJaisEmZCvWdZ3etoV8BzVMvfELKmJzqCN6ABx4m4DJvkmVgXrdYvVVhXPo",
  "key18": "5r6mB8hhzHqyfWXyiiaALCfX6i37LWFC7PaiYkyMD4EvfHQwFeyRZTvfPVF7vTafMeEVAB2954F9DNnQZvzsdCK8",
  "key19": "31nByAShRuCUnV4VP2gBXFh3d3j267FQTtSx3ajKGR624tY3hHhLHAzUDWwQUgCssVyMGzt7YM4vztAP7XrtfPJ1",
  "key20": "4DoT1yk73iov5E1uGdR3fbyax9E6MRwGuxtL1ws2Kyfm5nN9otQVCZnyo8doF4rDbvgxvUcAHjouqWDZ39gAfcnB",
  "key21": "3vn3jv2jYHWrWqzEHs4PTrJenBU2G9jjKo1PPhnjzvizGRw4pfGci17HdzRvowg8mnfd1j9z2rSocyNV5RNbvYR1",
  "key22": "5zHvRcyGZia5HFdt3UUkio4ndUQ9fFzKSGkRppYGDwri4iniA6GR2END8se1vfN8K1tQkpFeHcK2QLUC7Gqpctvs",
  "key23": "4GAMEVSGZz8vppA99LXuABrWvWjpY9EU8NeqrKyaZyaYhuk6fGsQy7L1QFV3HjXeYZ4h3HznCsxYpVB74LEG3g8d",
  "key24": "rggVdwNCG5y3LkvZah69KPPQQchjJMMBXzVdVawUZUF5LSPi9aDQ7HdhDYvm3StxhZNBJeKDp4FwzPbGuSYzX6W",
  "key25": "MWRPXJTMa7TLSzuhAJx4jPctU4KbNwA2pXgdwZMndLEraRBHHHKMowguq8T4pyWRjWfXaY3cQyKyDEvmWGYAR7z",
  "key26": "5jyBYkeyTYPCwbAA3KParpucmPV13X5nZq3mwtTXYHki3RJyTWvjTBXGdp4RCKzifZnLtyM16XoYJxptVaH6KuwW",
  "key27": "31Ep2EuJBrwcxUYWYeYN6artYT3ZZPKNaE2Yx9BSoPz63itwsoiT9AgqmYfbYXotT5tMDYcpucpMTU1hi8MNoFnn",
  "key28": "ETkcxofDW5kFMtEHYA2fub96AE5crAvFvaQuN9S2cXAaidMw88aGt8JxiuF5Na72ipdmqVYiCuZ72Z9ccgYLsJv",
  "key29": "4UeMt2TsHe71Y3XxYfxqiPgKjzPqZYdz2DSLCFMQTf5ANmrCnMS8AFJKmsk1npwJwPfE7dy9Xb6rxBNFdDAcAUnS",
  "key30": "2gSed5AxpCXMQgeggMRd6jtapJMXAVkjFryRMBxk16DfsgQepG3NTxfAjnQ5Y76ecLa6oWhFLmP7y6rGSL4Wt9Dc",
  "key31": "3hYkmNyKD6WmFSXMTUYsz2PUP1GoWASuuTQAroxAZYVfcueasb37GStBoevSHFUmEtVFAiDTYcWbkDYK3o875t1i",
  "key32": "5iWFLEz2yVfw5fsjrZiARvEkeuPyewuywmduQev2SFtJwZ6a1Ck1ToE98korBsUswBdFvfAK8NGSpdEUkJYekeFN",
  "key33": "4BKCejjpfno3RezUiJN9MNimGpeF6hR9BvjtcoHY5R6ZH9LJ7mtWtDYRFqeVDNRhcMQ2nM9VU5zxaEawWGhadkAZ",
  "key34": "5t1RJu9TN74K7nFC24ANx4s3AZmCUugxoPnjaFJcyPzA2r55nrp9PmGuyhLf2GhCqgc4zrss2BDvEyWXEFQLYqCt"
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
