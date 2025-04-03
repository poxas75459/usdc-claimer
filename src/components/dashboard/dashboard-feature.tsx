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
    "jApiLv5TLq2JNCs9ABYoEb8SzpntJ6ecH25aPFawJB3Kqgf3D6h2j8epNH8giiXFpkBGMqhgrCKcL9zeeQxaots"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jmhV6Ggceh2ZM1mZi9TKxTFKWjhbeJqMmuCKx2tUAVsqBGBNyxFwDcDH4XH12HXB4nUdDj5TvpxbuotGw1HKBDL",
  "key1": "dkSsC5eUuu3y8UnSZqEqpuMiGkmjdmD8Zz2mR6coFWQgxMuUdbqhdaELHF37tVXQW2QjEEJ15xXP4byk55wAAnk",
  "key2": "2EHAtqATixXEcNvR9YT6jiFCWcgDiwRPMX2VM6iQzfag3CkZWbhwPC6mNWxnmeWb6qiTFyARsgvm3GRyY2uJeXcG",
  "key3": "4akVvEQg8cBFZwU6fsAX13qAAnj8uNmkYAX46wTYyck5QYpXv6jy3WCJ1BqeoGaL3FfP9shbkETYpFZ3JC9HjzQz",
  "key4": "4mC5p4njQTu8xWjTSPNSRfAqqd1yinZFmDxu2AunovMCVJNXik9fYSbYwoP89KJMfMDfaRrjw8H5et2DEfu3aYBc",
  "key5": "3SPCUEXAMVxBLna64FhgYanvEUSs5gMU7KasJAwoWW6iTNcYCytNU2b6wbSkpjsE6FuWx5WqyAJEU73Pz2TvsvZk",
  "key6": "4UCtqSHY3o2U8tV3wkdsmHsg2P3vMwbanACDosiegYjk8kfJ5E2ZbKhvegXLihPZ723YhM8pFxgiJRpr7NfdnjX8",
  "key7": "4H9d3cJuUDHJUhRR8kzNjWJ46PDNzythebtx7TmMDBKbEQBGvB9Mo8eCpPvNegu7TpFC5CVSYPy9KY8u3Sw5Nodo",
  "key8": "3nHTGkBxmD6XNPnywB5ve4U9HRYtaAjN59wSdWqWfCcBvFR1x3NXcBvJ2mqaHNp85p1MXLw1fUoM7iEogg9Zq51N",
  "key9": "24gfK1CaEwPReGvWK4MX55mCgWGVGNwEg1mqvnaLm4xPJ98fdfh8VaLXiAJ8i2cxA2t6P7ocFnNiHVDcB9tEhttX",
  "key10": "5B2SEMptk3m5hCiFwTYxhjqqdxT5ZMgCvsCwZc3kLfPfcCDGvnaztAkDGq9d19WnBQCKxauS1jH6gnLaTaUUeFzc",
  "key11": "65eCunDqnpnT9U3NVJJPhALLEc6UiiPiGqxsCzt5DRefSZbgHxjK1teQZJUTyuL72iob8A46TtBybE6YJE3vVgvV",
  "key12": "5wsciFxN1H8LtY62ti9uby7Fw7r7AgVQEV1JdY6ypXc8bBD8Y9w5HQbNawxfTyW3cvLfEj5epFupRzCu2kPh3GH8",
  "key13": "5DDxB9bdLLyqCrMbYa97z1JFCGSpxbivkNAPJamcvoxKcWEXkhe4gT9Jjgfc4AR8aXi4rJET8sGRQK4rfECQsdFB",
  "key14": "3TQ8qacSKd3jj3e7JvbdhL7oiXD1WLUpncuh13NdpQ6fM8ntWyG1NWz3xd4z2CuCb8hBdaSaqxgpqdubWibALTkD",
  "key15": "4nTXM5oG3u9Usud4sawLmBXUzSY5vFZEPEQrnxHd7pkkd5hTxbqqeSBtejzJBQVi5i4tzooNaacHKfd7zzR7dxat",
  "key16": "5rujc6DJxdHc68BYxGHv7AFA6GhMUBUwTBkz9egRCcuFwmBxewsRqBNHZQLyRXDm5vK9cjYLuqNHeDGsxrd8fdaa",
  "key17": "2HHuNSabFMnZeF7GaUJQ1ynDhhPn2sqEw4QW7Pvs9bDQRSjNjVr9Dxax4NKPWNWuDs6R9g81ka8QSkWxxFRPQ5AJ",
  "key18": "63uZxdQGRRZ8eE1KdZeV3TtiFMNTjiFuGprSaHU1MjrFh9Mx9sAkbvTE9WM6CgHvd63PnuMKrq1PKjws4wWMBRNa",
  "key19": "5foNJ3uXe8mzUHPBb9yiiEjHtzqcvXznGvdt2zzDPoWfXvapXBPHRWqfYnZovpHC6KDhMPGhFyHNHnvThPbSzw3n",
  "key20": "2wBguFZ88u5G6k31iBsDSdNLjeZgbHwNRZuJRs1ph8AS3SCqesnybFkLSTUHepvXzQDGW8VM2scBmmeVzsHSTaU8",
  "key21": "2PJxtYNXdfwBQrHiqsaDKCKt7Ui3rxdGYYRtRezcrQxSvgTw6NAGnUuM1f2VoHtMEh69CozCgSDLMx3NFpNbgzAR",
  "key22": "3fJt4RtczJVD6fk1oN8jgjuCRyAvLE4yaDcxygDSPrYDLPX2oAR98Vs393YJ4oEXhHrxd5RkPWtejif28v3vi4AU",
  "key23": "33RavMgsSD1ZqQo43FEp399KBiZ7kRdpkf2TAd9S3VGKUAKAGNB7zw124qcfYyFPQMthMk22184WbNumPwVbjTfC",
  "key24": "2eGETaVwdqGHirrviPEXY7SJfKTneY3TpbH6TmVCRBs98VRevWRKVTV3MdzJYcRZT97nz82GeUCzXV1LABdoaH6b",
  "key25": "4JCfDYyKCtaQAsZVjoy5JL3qU4g1oMNZp8zi4Dy1LYpvi1Y1TYiRss9SUNoyCAEiWfurAMnH7d3PkMyZVMv4AT35",
  "key26": "36kM3fMF2yChfwE958RfRHATJ91hFUViTuPafjqzNqkVwmgvGLv53jGsoatKpufFtGcxStNXGjGfaMGxC1ah4Rgg",
  "key27": "4Cxb96TqySvpWWEX8UVGZV6TBMGPZWLF683PBAnbEQiUQATqrC9bJVcRNfvT5GgnBHhavrTB4dEK3jNxpicxitjH",
  "key28": "5DhsZ5JZb3nKtLec9c1oe5YfP33bN9vp8fpgvCw49fTf2sqrAyJKgwxmSu1HadETDTgMu9UAM131DQnpAKG7woYR",
  "key29": "3de6SnoKo7qKpnsThwvnTfXT9SwR4a1C2BY4qcoxqXeUf5GQp2ZUM6sJv6RTHvhYGqqYUd6Rje44rNK4BTYDAiJT",
  "key30": "2RZihZ3US1qvWRgcCJV1hUNSx4hbRVEXBcM2mdwVDeLp1Gs9mLsGPUFf6wVP1v1sBZ3gf1iJijbDiWCNDvf64B6Q",
  "key31": "21qcYhg96aSTWJiJiina9WQrxp8ccvuuXTTcpf62ZDkmXS5yEU5Vm4NHv3Ee3abew5NUre66Q7NuJkLd3RZVa6zH",
  "key32": "5q5FMHggj8xhV2Bfc6Pjz6PLPdHdw12HXd3PgREsgdUaUsUAyiKfVP1MCFgimoV5cB1kB6EhTMyqNRStPfBPJgE7",
  "key33": "CfVHHjn2h2VEanV1fsJ4Rko6s5SEH6RuLhuoyLsZmcw8mxZF4EqpKFn1LnmtWTEiNpFJJrwFfM1CbnnrfErxg7w",
  "key34": "2zHr3vqPXjhV5KEH1oRwbQZxFGN2Qx4K1AYCHSmGcyF79JepUgvf9F3o8ASyhjCVPTaZy6FvR5v8cnSuzBzkab7V",
  "key35": "2L8DX1DvJxAyrWWNsPMPk2YgngiBAysV43utVmG1RCnUCfy9VmNSJjSzSEP7HLpecauqCy4kn1CjPKJygta6YJnR",
  "key36": "35GAfqUbiUWKGVZ4YV3hXMPH4fiywL36mU3RLWXddss9WT9qGAHve7jG4BfqbY5U9XLM3GyevamtCSGfwSJEodoa",
  "key37": "2LmBt3BPmehjJQ3Kbeaq8hjmA34ZEJKw1QQNrRLLtNFUFALWBXwoqj9P4kaftnxXQDCwNinYzAjfwUXURUQTvwdK",
  "key38": "3PRiAakXNj9e6LWACDyMLqrjFFtAmz5uxiqJUiYLTfJUQmwkRjDuARsvYLagE1SgKMbv8QYKziCJzFV6VCdmJ8wE"
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
