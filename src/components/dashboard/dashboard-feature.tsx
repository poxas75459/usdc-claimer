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
    "5JQiHQUn56uVP9QgFABMGw5c29BPGKHe4FaTGbfYVML7egCRJ1Cd4xEWViATygChrquV4HHkUjTvvi4c1UdZikMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RQP1u8sQRBhHztMq4DXveSTECK8TqwKpWZKw1XrpFXnu7SMLs8Lkw1h6zL9ccPJuHPt4gWmogvXAYRiARLh3Ewo",
  "key1": "4oEPfyobMn6Rx2LAhjEXPp41kV9EAqcjPcg3VrwkK7LRLZ4BfHFy29RHYZCHDsfgWM4EivuxSb5LyrruMWd3z7ho",
  "key2": "4eEn5nyvduQ7LTH7pmLfYdLkPRNtSC9PAKX59zP3UrSfopRjEkjJR7CtNKvciDbQ8S9nBNYNbXwUBcrC2o3F1Jgq",
  "key3": "3H9wPgu3gxDUpreBHmwidQ4RhyjdR44mfrFE8Jzsraqj7A74MWDsucekiEeooXQRxZwjzZBjRssihoWj836vze2L",
  "key4": "2mma62m2mv5adXWsjcoHQe87ipkYQbHVyVsAaXv48gVpVTqcJtMQbGzZew436tRWVhedqZNeMe8CQYzxLBNbbKGs",
  "key5": "2sLkvQUnksmg9wtPFYaobCukNEoyHBWWWRaijZkT71dz8nza4sb9objz8WRXXjqEiFkdJZxg6iUzKZqYEVJxEXeS",
  "key6": "4VQAhDtbudTcKHdfDfzZxAwbJVxCmxGGgYTrsQfuJ8f8bukGyiP4UK8AG7V9w7WimciGyoq1qbeuN9vB2LPjQihb",
  "key7": "2BCreh3aBgCqxZzzJwFysX9WuRLf2JWK7PY7KU8du84rnvfeoGQFupBQBCdjCu4yqxjbRfHN3WBFcTguuTx8pzjX",
  "key8": "swm1aGUrfo2fPw4wEifCjxFc7qJ1UK8nZpm48hLoi9FwbWAHkpqzcgCEUv7nU4FUS1wAUqgev6h3gHAQr61mzu8",
  "key9": "3HiryJzSVgcinF27rkMY7wtLfJvedPF2y28qSkNXMPvYMt2TfH8ifKNQBELFNc7xxhgmFEosKUJpoknz7hYPqbzH",
  "key10": "2iRVVsgVY5bVnw5E75cwFEuLDqMdh71Dxbm3QcALovzyNN7Gz5qhWnikJmQ66VN9NvB1sgBdcBnmtBuh6Cpwqw4J",
  "key11": "2eVKSUjchXUp9mzkGV2c9ojBxfiZad2gdtnmQ8aj8VgcYCajPXHNCmz1yGgGhjHUgFPU88NwXNyhSaApo4DDp21J",
  "key12": "2qLMXUnnRmvEzZmjmuGNQWvimomKb5zg3RxrvRpMZqANMgajsmbMMDDWihFwYmGeZQfak6ttCBRFuJmzuoK7nZo4",
  "key13": "4YUcH3Dm1qrq2deML81Cn9obB6mnjURrYPRTJpwy2rom4jxEmy7zgBqGxza7FGLHAuN3RQGima1TVH5gJ4NyBZpj",
  "key14": "3w6ESfNmcw3PnYeAe2orvq1XfsdBUu7jr7w92gqkBpK3zWKCe3fv6JyJPPd3rvnFEkrAXQkzZquDefUFLgAWELun",
  "key15": "9yx5tdtMjSYUKhDC1KJVtozWx4dYMgxJNDicJwAP2XRt2cbcpKp2hdD28VnGFaJWs71FdaRdsr2TotSyCmyzPfX",
  "key16": "5chBnDUHHgJZcwauHsgxq5Mr79RxZHmSardAXshyhYH5bYwWLLPX2d5LBAhYYK9SoifdiA1HMk5oXRX9y94gwpeq",
  "key17": "28rn8y8mhVSPpM8GzSWzfpkJ7Aa9Gf3NZG6DWaSg9fXUNDCxXHYFUffDmFZ6hxcFSH1gqWjiq4MjmxAQRYcMKV1Y",
  "key18": "5mSNoTcJ8P5ojRdQzCq3D7V5TRhWfcUgzejKUDfotANwVC4m1kTs58X2sWbQFG7exLHWkbnyAEvkHkiL4ShAfDLx",
  "key19": "s66H83ydSpwbuVvqTpn5TvX2tysT9ConLfNaQwQL3hyWxv5z57xZX6CDXcAaEY3qFkvV2aPFheeCyc4XZtRi373",
  "key20": "xkUkLMRBuEvcNqkWd4TTaDXBtKdDH4fMabhCQFfape6CRAi9Yi4TCzLNPtFcArKP9n3VLHpq3Q3CXH3MVXmFbBF",
  "key21": "4Nr4JnFP1oEjfcTkHRP91Y2tFHwZ3YgHxckiroYQMpUiVtXfHFQsZqhPKiHFazGp16ERKbhSoDoLi2eajpPJJ6Ze",
  "key22": "4Qnz7RFPmnxrdn6edDcEdxhe9Y97zXcyCLhQ5hhp3TWt7FAJMgEJQyct5SwdWLVx4bJwFNtoX3NcS43MGrXUKqc2",
  "key23": "2wfHLx9kK3wFtSyemQKv97zxC4byEW9qn4DdneWf1yYzLdxPRqauTVpwRrroU87Xe7XSQdsV2jV713hhXYyYyo8h",
  "key24": "5WFRKHLGctCkAAJESQeu4qLCz8uGrfMq7Jj11HnttarpzVhzsaGrW9rVZukhSfrrep4DvXHfRgFtqgXjeZNgkmaK",
  "key25": "4RVSVJhGHuxYAF3yjH3wKjmzKFAuvW85PQr4Fe42VTn9xoDAu3c4hUWrEGFC2muYqgUVvcwMtRAEKKZzjgPwE5uJ",
  "key26": "5DtSVgasqDpSmcSWno6NZK2R7eBNGj7WtbWMWZ8naDRA3WUreoLkpySo9xvHmA3QUipkaFb7maKiuurmcXdAiRDS"
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
