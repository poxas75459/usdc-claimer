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
    "38Era5SFmSCJdgMo6ySUC8NKN15tT3U6vAw6GgCc9aKEKcbHbA7hgwNGzwKupgCXr9fG7Uqu8MywAYLoaz5iBRPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z4mopkbSEhawU9446eiL63viBDKAmLMAhMpzLGYAGQJoTMxzvLCx9Var2rFYMYowD4uNYTsQVWdC4yn36mHX9dN",
  "key1": "5hn46YAdKPE8oAiuRzCpwbNKadySZeU5R8qbFpZH3XDy9uWiUCRxSYDCtLMaQXTUNuCw9R65V61wPsXEbqdzbojV",
  "key2": "57iNkaMTjdDLr1UxhzHAp2U9C92QhCWNZqiiFWDMWfPLqAhaoMGgQUbNhDuxgC7E4nEZaaaGicenqMBMfxmUaKj5",
  "key3": "39w6yYZq4uGdHY6FHddvG3zzye6tpkMQ7wwk8LXgyXffoffdVc5PKksrRpHGMnJyzSJabE3gvPqUL6TpjuKUhJ4H",
  "key4": "3iWSFhuZfgGNbXyoG37SibFZ4x2TncTBPaK6JUFCpdhVU36H7oLQT42UfiEFz1VgK5P8RZ9bY6pKWRL2nQ8EiQb2",
  "key5": "3cUEFjDGE3B6U7beZ61HLozRY2vsfCUZ9qu4FpmeRN5w8tEbCbNorkVPocXAfwiNPohDAdfamrft6poZfRntdGKt",
  "key6": "3v9UNJMyiqiYMaFFWqnFTNKtb4GcbCAwt3j6ZG1WoG75Pz6ZxwpTx8YryQKVFQL46wEFSSC9xFgS1sse9Z5M1cNa",
  "key7": "45LgSCovVjxYFbNrmbu6cGxa5o7tt3erX1Nn7qa7dm3XcbXZnwiR3hyGMVqHamF4g82gdQttQD4U6e68PUtCJAnS",
  "key8": "2YCVXVBNHG3sh7m78dGDnLZCaRxGBTEBeVsMd45rj6VHf6Nx8w5CU3NDY6ruLK3GBeBKnqpTPZNQ5PkBkBSGrAAw",
  "key9": "4QZ2Z47orGXwd5pYMaTH5J4ghEkJFibBzpcNEgmCcsncVLvvcUdStMH1zCNYJGm8WNx93GfjQvYfVd82PfWkuBE8",
  "key10": "4aVGn2QD745JJb74rbfaEZxyCyUZgNS6VcrPkrpqLMM6SQxAWB4PmvcbFqsnfShMBH9cxkNxVhBgU6zZUvrsLEcb",
  "key11": "4hzAiy86D4jaQ72fGU96W2uXgzTaDkL1xhBPHHDAJ8wmMLwmvEJqsbxfL4ND7KmEqeDReZyHZJH3gaaRoMtvzNoP",
  "key12": "CSoYajctZs39Xev14tg5gMJu3ETcg9CUn6FYVHk1td64KvTzbfaKw3Dqi5MWoXyVPVKh1FdgVAm1Gdv5mGM9hRH",
  "key13": "38VWwXRLzVKnrkkVmLuj7CdQUf8mTHyyXTZn73e9Tdh5NtBtL8c1DR7z4BgAsAbBJwErjXfhg51qCH9Sg6u7Q1Ly",
  "key14": "5mkgdUeVG3sczw1VWzzExfsPrfM1PuspoiJw3QBtc1g6qX8obY3MAcWGTpNtzYondfMU1nzEy8qRkUpn1jFc58TE",
  "key15": "XXzXkeBy93reFBqjivQfLFZQyu6wy6nKqWVbBSkeM28fFYF8B5zyyM8KLizrx2s5VKz4tJRWeawxVr4okCLNmd8",
  "key16": "2oarKkNxcGm1DFkgMjnGLyavejDtibZWKtp8pKA7Jbennm9XM1imm4coTShYDVMj8Yp1uiPst8uL6g26G6CTk9mV",
  "key17": "2JLujBYmZP3akrGFU5VLaW78WRYW7mucGAw15Sk3T4K8oFDfPpcSMh275AztRFvGcUd28jBnJSazLMDcJw1vk37N",
  "key18": "2RgSW87guTGksMFgmGidScBLDULCrsvCRqMfmAZB3hFBL2Vex9nncntHZf4Ur6W9oUmLiuFrWSzxC4Gedoh1BdLz",
  "key19": "3jF5P2ZsWakt98j34MB7JTmnWkQ2VWjLJtVHBUnAGE2e8fxNyuNH1atKjzqGVw41nfgrUYw3wUpzLTYMpmPJATwo",
  "key20": "31gVtT2ZqCfPKuzT2GCq3cjzcPuqN7CCuU3E5kDg2qtoxb72NADgjt9i58M7VouzidwrDTNA6Vd4UqUqjWrsmRjT",
  "key21": "5PTZrDZMNBE4E2Pyey8ttxdJwHb4hfm5LQJsMvRqhT2yaVTpkMA8227ibe1tpZPtT5CGvGWPkY3GXjvvQ9J5ohw5",
  "key22": "3iYDus4yRdEE8wu7p9b1fYayvWuG8yde712Q1WoZuFJBCAJBKa4HzrpJR4Pv8AsYG9RcxN45GrJFv496GVTKTgYf",
  "key23": "21xXuekVZrFimceqZHTgP8ay2W47yb8WcGw7VG3AQ3efZBRHun2uvGUhMNNL7kVGHWiAM2VCXpkjytm3WW8SbWaY",
  "key24": "2CQjVYDHc7hvdNVyfyENuxV9YshApPtnwcpPRF4hLZJZvnibmugjqwmgxXKAvkvXo7nZmJzZrHDXFrGzUV4jMH4Q",
  "key25": "2oKcEDoSGsD8R3VJtDJNZsN5GyBEYX1WYuY9r5tugC9iJACFJ7tyLWzh6HjHD8NMxi9Znmjn4mkwk6GSX5d1kQWA",
  "key26": "3d4UiwbATY9fFb9N9jTcUfAtxxbySw7wPRuJhmZ7tjzvzBpsk6G2SEmBsKGdg2NAnGSn9PAucKCpcKWcPa4JJTra",
  "key27": "329JjqEKYpjgXKFtxTvqJoJzmhrF1XcTUjuJc8NQHBxN9SBtx8nJqGS56qPHq7698yPAkh9rNn2XdEm7pddVB3qx",
  "key28": "38gki56hqjy5udVHQHhL7AUmT73am53M7XwA9owuhZ36ocvTkbFjYhA5ctdBecDLdGitz3BVnPik9jzdGYPzYrb7",
  "key29": "2h2aqZGzqjxqXDNAkywbeSJXqXC5WCu8RGFymbmE3ddxtGSdSMQUog4PDhcKiuU5Ks4JUTKuQKhGyJ7r4ED6JL5a",
  "key30": "XfzKQuX7GxqjXwNz8UPsg35qS6ihbiCUAxeQR1mmfJ29DbDHcmtcyZQqmN8wzAg6qBDZpgsVxkvi5ZGEq4JA8PK",
  "key31": "27U6dYDG2NwAU5AXkLZfRDioQQN8G5HQJ6B97M2qEwaSDRRx79f63xTcPdf98WeWZyJY4zSNBxhsGtSsVybD5neE",
  "key32": "2V9Y8AcXGTkhx5SZRsGo75PQFNDN3HT1wKxnFrns7jj72DGLvWZzu5gviMuKKH6fMW3Kn1wMFa83CCuHf6TvLzs4",
  "key33": "rjKmwXF1qy8ThqJdsktmQN5mV6FqUdS5cdEaC7sH5vY3xwocTWzJcCczQDdUCsWTNHCTcaHGCaCeqim4RsNaDRu",
  "key34": "3QRsULRhaP1DfXG8AFA4QpjdUYnrjTiaBjhsBcqPjvyAcXbKtSt3XALc2GHHc9oMGtqZhvfdeipAQvnjWuFeu4J6",
  "key35": "2i9CDjb8jxQsM6rC9uyrgpnySgMaBgcM3t7iasyY8zRvQLFd6FtrYY7xxNdxpisf3z7u4Hi1ChuU9QrYDer8HLvy",
  "key36": "5q5wPwKqXqGjZ3j9W4Ggqs6faWffCvbs3nnP2BS6H5PNAGauAYhYC1am2thRVcHJKCxtTx12G6toyJmTmP6uta5z",
  "key37": "31QnntEUkH2Vk6tQHqjSq9v2YctbrvgNNCdTLruNiXrXDFr9mjj4EnWRZmyR3Sdrt3Pa1zYsy2QqhiCqaYpXbBtz",
  "key38": "3bw9rEa4ZvAuKhcYLVuHLLYgGqMRvpCeKknzzw8nx9grQsaCvR4NHtoB2FKeynYR4eDqxyXrVZTXNay6f3Hu8DDz"
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
