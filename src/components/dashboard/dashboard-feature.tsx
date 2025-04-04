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
    "4FYj5kpk8HwmobiQGrHJ4cz3vc1Pez8dPCPWMNTXHxSQvy2GLbcrZ6ezxuRUnpvmasDgTEu9yqCD3DLxmYXhFvCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jpvcJ7HLkCakQ9L8fTJx9KT8wzPEUujfhXzE3Q9Hea1o7um71e5FiYVn7fRC13w1akyaM4uYocGZthtYNuYwCjw",
  "key1": "3s41oqXPKj56YNgEZuFZcrV5q9mkkYA8NAwMg464e815tYPeindZoLACY85ysjmsMZ2Xvi7pM1Ve1rgzSPEkBCgu",
  "key2": "oXp3F8YhfRrxPaBVqR2iDQQT5vCQ1Z7kgrxem8tLG3otLj76TLrxDUU4GhZxryQbbGTPm2Jb8TnShEo1tXmRGdf",
  "key3": "557KMZzVTVq3aEdo8aHwGFaDcFu4sGkqok5WhUTk4kUgeX3wRtqU2choUNiJFbthrNRQ2Uvh4xoDJyZRUj7BRxy4",
  "key4": "hb6wYyXZbTVWQ6SezdXSUkj16MUzartv2XYD4MbVdjxEAvWXGRDk5Jn7ibwgeAvp5BAkC6ViAsqt2jDADY1wBm6",
  "key5": "51djrCoLv264E6MCSSZE5gankw6gfpSizspX2aXrUxjfpkA9DGosbPZ5Q1QinkCkSJe4rmZW9Zuu37qC5AN5yD6G",
  "key6": "2Jzw1ENXt87NvWnUJHTKZtsQeJ1PtiPJyQqMjq85cr4aG6GWoReVukzqzvPGtY6riFkgGCchMsuM7hQDyoizHz1j",
  "key7": "49p3E4BSKJDsv3cSpQR9EcahSYpyni2zNMNQME5s3LChz2NtaFZDRibdZMjbAHHBM9PbJ5fZ25yKiUQfpXD6WApE",
  "key8": "4bZN3o7peHKv2EeCfcU1MsTv9gmMXgsx2QU1r2MPWgqx31emVpUjtzCGDeRFNzF87KmjU5s3KvFrnUBho8KhHQwp",
  "key9": "414ZxpUMoTryiLPr7WbhkA3HEMMnEj2NMmxcG8mCtAw2duxQqnrmV2DagxNQAEvdqD2uH7ZhdvsP99ekBVgfa3SG",
  "key10": "3H36n4vEHAyPzzkgmyT6Fa2sT9FUXRcLFwHRLxFCU5YCGnREh28CXyinfY8i3YeFQkeSJ699ZWr8jJhyqZzqSWK1",
  "key11": "3RtHLVKpB4vHgk8RrL98yj5ycHjSda4bxTCg71z23gi1ShVJP7t8G11fUgN1N72chhxigJaiXmiJpkGV1m4a4e4T",
  "key12": "39K8Q2nJAULBvNLvNrBsT14aZwaec5gmntJq9voZFUxhtkwko1BB4vs4TF2qAVVDLA6p4xySQBVSL9isHiY6jHcD",
  "key13": "3hfY6Zmo9BNXhZ5kuJyuWHjkmxBmt1FfriwmSJCLH1xzBGNG9anwBDw2bFiD7PkYYNCaaGqtdkoGP13kTC159dJz",
  "key14": "31b6yTknQbem6F9ATzRq2QytTM3modUM9AoLWbewiNtg9GAYK7T6WnpDpTjUVuud3WB73yqn9T2kmKABntJar934",
  "key15": "4ENLaqybzVuQMGP4LjCC4sfkWxwGWNm5B76XbHS524bgB5qUdRWvNUj43dFx62bjHPLmaQuAT8GPeF8SbTbuKom6",
  "key16": "4vUFoXkKMPPATYPoUyJuTJmnJSDxncMZfkWJ4cunm9Qmuu88nt5RTkVRdowyB4a24ZvS5pDT8inoxeQHyzvjrVaq",
  "key17": "4ytwUSZcrJ6ZLFmtwZpD17XMigmqYMjaGXXCiTfNK5h8r36fuWLcHtV2DeKyMibh47rzjRzACmHjUtZSVuRmWtVh",
  "key18": "5a1xSc5cAcjFw4nj8xQUFESysxerQZYCnCAEMYT2GjYWTeHuLAw5SYFDtJ7bVoD44MEDRhAyJgHTRTbJThJBEbP7",
  "key19": "2eFKYPX6N1t46Z8GmzRcVxPzCjEwKpwMVe4haivdK3nXBkHiAEdq2mvmz6JgNJys63NR48HwMhasNf3ygzNjCY2B",
  "key20": "3fbDCGUVJBzN2ZoCEBqPskjMPh9fzqtaJR9uiN2FaLraeS61TV9acbCbiQMUU4tAeCheXB8E3VRrB3S67dwY3xKk",
  "key21": "5w6bWoUEwwr89UC2cciehV726796hi4bPXyma289yuYGm2Z6894eP4wiA4ENeeQReqzwZ6a3Tv94JWmYfPZEiLdW",
  "key22": "3zYrrqufLyMkM44XWptYBuAAs9r81WTLJBtMgdxgcUVDzBVYEfGMtkzq3bNN8tiUNoZ1tJU1nHbqRMw6FFGkhhT7",
  "key23": "Y3UQ1UdWpzqmKeiLU7bgq62TysVoQawgb1Xrk4TXGQH9uhjPJ96gsKkmVA5YbYfzrJuCfWwMWAzS26hW8MEt4Ug",
  "key24": "2U3VLh5Pz6nggdShr8MNGPAiPaTYMqgeG4uKNLi2nSWBBCTz7kbtiNg2bXe3CkhpRdh37cnhry49rc8qpCrabUxL",
  "key25": "3TpziBYmeA5nVriFgH3gPhTmrMDgRNo5wLKLAQtngVQzdeSv7DTthubDt9mrfgnLFXUmSKhyDFfT2LBd7BvuycyR",
  "key26": "4GHb35yHQ2SNhgKrX6qujZmNAiiShnN6HwMkH6sG5jYmGjz9Kngeob47scNvTuk76vCvyPXuduDc9dCctE3Er4rZ",
  "key27": "2e25LhcRnDWrSJGYkx2fB5YCReYknby1rSE9voMM5cnz9HEdjdP5V8trPEqaje6wM6XYsjtRgo1wbHqZqZ2hyUTY",
  "key28": "5HpLFuaDi3Z4rvNHviHE2KyoKHVFud7BG4GYx2aNc8swAnHFWNdkkZZePHS48kvXG51sVCERAq2XB9DAN8SwyYtv",
  "key29": "37NrBe3U487gubQ1cU6QVsw3RHhfpjjKMxDt6Zka4DfEcLMzJrq7qggS4g1auVULHfRBZtA7UhqqdUXLN6rtZ1wy",
  "key30": "3xxQbNgHA8MHh76b3QYYzuDz8gmPhrTouhF3GTJXAJ9feVi8WXDXWPstedC4U5KEsCYY8Z4aLJxfkK73XnbjsuGD",
  "key31": "62cLU88kQrzQ1eb2ur1akgT1B8qYUbTpTQAMcwphpBR3hFhpztUFWPapQ3jPmUZMgQbo3rt1xjRv93CHBsM4hm1Z",
  "key32": "2t9Gk9bz8JfjF1fJnNtMpSdL4jy5yX6zVJN5covbixLthosQ6Q9xdSijEjFRdkzgfbyiH3YvS9U8HGVvpvXoEBCs",
  "key33": "3EsVw8yYH7JkTdPyiuXsTZgrtW2bfLmeXQVj8i31SjGKu3U2TZJZ8XwTqgAL442sx2dTbY3ZFrZJK1E9HBEYbvq",
  "key34": "2fFw9P66JjSFgKFWy7vML9iuQqcB6cnvfhMaEXvzte1UBW7kBfTN31pUegx9WxqkNdoDssvnwZx3H2NkyPXBzSsL",
  "key35": "3upPMb75URN7UBvw6K8yyqtwugL2HFfMQMrLLbzDfvt1HKFgy941wkHdXDJRzfLxU2t578xaipZvfTkLh7QpX9LU",
  "key36": "58bcCZHRD4JnHpoUBYWUrD6wA54V4m3j4u9Y97fk4WhW8p7Agx8SifaDTnmKSJP1f2DBxiLzSjybQte9dBqRjUoR"
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
