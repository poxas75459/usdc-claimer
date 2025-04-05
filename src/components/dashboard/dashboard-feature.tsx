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
    "8QXncHyYRSFmTf1xDRZ5W2qeCreFCfoAkyL6k74tktoMSQHFH7ohDf5C1HzE2sstyoPLYoDL97FYv1139KcEqji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zxsYc3Tzd5dDCeD4k6284B5KoUauEJ1JZL8NGCR2RMnjee4BWfhTx477jKBpQpT4XC6kHSw6ZjCRhFqmvwCR9me",
  "key1": "3sEUoJkhjKPH21q7K98RPqB5mBicNtCnkvV534hy7gAa8dfafprSYroLQtCf66ZZZuRMXVog2nUiLjwvk58Nicx7",
  "key2": "3AVBXAseh4UgjUbBFiUBax2wKib4c3ctV6fqGVGjqJYy94v2a15Wgke1gkMxSaKxrKbS79gtw8PfgC5kKmcTXypU",
  "key3": "3Lsff5mFRDxWHpHmWfUZUK74miPdGsDCD46n299hNju48rB5eFoAWKfwdXLXtgqgPjQDRAzrfPttXu1uJda3o8tW",
  "key4": "43ohWwpnRYBt5uKMCMmHs6tJ7HasCoKe8jsbjemogLPPXJQHHjDWefiWqjAZ2BPVya16g6SGAc4jebSi2pW8LDo",
  "key5": "2VGuc3HwQhEQyPTSbuuUugu2yC8WrnkEo2Eyn9RqHSzjzYwtZMXX76wNPHCKuUtWoHtcGWz1pBvgr6z2x2FVobYK",
  "key6": "dyNfmJfGKmJKq2dZuFv4AmY74wRxi3GJxW4UxmFJXaPkgVKBnVSbH9ryeGq9SC23p4drUKMT5Uifnq6BfTfhySg",
  "key7": "2nd9X2p2T7YUR2ue6biMrioxRYuV26YsphbgfWFtGjPP1uTcce2RE9J6Pjc1HVdygmYrbh1N4JAKF6qzDU6e4cJa",
  "key8": "3z5U7s3DrAN9jqNaEmp6sRkx4K9uozi1CkKrtD2PGJfgn3jzq4YaoTGaHNSujRQqQkfS1ZZKDgZjtfRh84b7zXHE",
  "key9": "3b8jXcDBCd4zL47mJbUtW2EpJSXAswRDw4wCUQPkJZ4f9Zn7vCoV4zjE6MuV9dpaLJQVVNFk14dtkjX6NMvfD3vv",
  "key10": "4vM4SC3Ec251kRpgiQDQQNGRftLLbbjQ4cv5hKMyHKs2HbtzoQ9hGEBnEHTEE2Hv1oBaM7Yg9T4gAaaCsnVFMEye",
  "key11": "61SZpRkCCGKsBnFEZkDLVpykcnVcBhcWPrmHJQARwG4ArNgFXXS4hvmKR26zfkJPQ42YkFvGLmy6rpWvWasPU38d",
  "key12": "2v4H2iFk7uY5uBZJf35Urc2uSeatKbULRBQmHRaz8C1jK9T886qSC3bnjqAsSWdgoX5hMzcfPtsz6p4GJyJUXtsN",
  "key13": "3hZj1cGbfxkAs7cwKj3WjZTd2MR2DitKym3SPh5jMQ7EqtAZ4cm86sF5ceHe1ZwJi2kzfsSiJVnaLuFKidi2kCVF",
  "key14": "wGrqTs5t4vnmAjd63JytCEXCyDHmwyahpPcYapnLrz5VRKcbB7yCnLF6Ke3ao4fHAUJRs8bLDs1ecKEC3quBxs3",
  "key15": "4foLC74Pjom61gFFmdV9uDx9YAVfa3eCgJZqfoPf1ktsVNwoWqyRHtLMQyFWPec6Z3WdXDPxwvqwAFDiN9cXomxf",
  "key16": "4B3AqEsLDXQWQqMnbgqziBciHAuSePLkUPiYhzYgeQpj38kDF6kac3kgMWA1MhNhKwZQdCmNoDiRyepMT41yHAGy",
  "key17": "5VXV2TwsVCwSibx3F7Qa6tE7Vab2egXspKqEJEkM7GvZG5jXx6CGHZtwTypXs5nLLCJ2vc3qEnp9qAbJHe9ByqkZ",
  "key18": "ETj1fbqJDxMLP6MymtHqfUgXj1CCLK5UFqWxfeDKejKQKwpUmKydCw4X9PqgRaLu4MbEDpibVf7BBPtZMjdbAoQ",
  "key19": "3a2Q7mAbExMCxrrEkXDp1ZgDnJH2xDfjnkWRrSrhVPDsL8tZCbh4pDnbrn3aKgFpX4KwUYfX8c5wRSZuLZSUJdiG",
  "key20": "2uQHnTDgzB8fcSpDPEE7nVQ1Cm86QfRFNs6QmUWDpwoirVCfbDGM1Nnwd5VLimJQkwDP8XhqTViZ2yxxnmPq9Ep",
  "key21": "94hgCXc2xuRSSTJsxK9zuJMw4j5df8ePa1RdzCGdivNKr4oit5rL4ierRDt1yK1fLhcj7dNqqzxQzG3dBuqm9nA",
  "key22": "1J88ZFxUfLswtdoqqSYLzKugg1KmGSYrcMP8fmnMVDpzpBBfg8Ybm4KZ3aHtM4oGmrirfPyYRkAh5ygRf5wreN1",
  "key23": "3RohgXvUQWBJVPyQVUyfq44FyafXbvevmZeZrLFrq8SczxqDYiMKWtPKH7RnDzwBgEwLVNmjP72tyccy9mq8KaNW",
  "key24": "2YmYPeGQpKq5hKmefY3cM3EVzLemryFjHPnxRk9NnWviJnYqjyXPNvbTxM959jfFyQMKKbQoJYhAmY5qGeLzvgcN",
  "key25": "5iG3rFxiVDA73UH8BN1M3ZDXdgTDRQ66U9qkV2NyXKU1uzBwxBS7Z13CXSVWjSdbFSRfzPqGUJSoCzZ4gUAFJZiD",
  "key26": "2xJpdqgDvvHjDgiivLXT6uNSmLFztVJmP5Yz6RP5fucBiZT3En4yL7yVRSrmXwEmSbwQshw3muS7HRQjfGigcbtC",
  "key27": "53eVaqZpyqdJAE5dPDRDvL6pCYvXRVV2HXv4GvvuqUnFzxRAHNhXJULiUJ4TJD2MhKkkfpVgkE5pDBx25rzrho17",
  "key28": "48AbCSvFdzXtj5BnQbafuLsQCws8VaCtYUQv4QiHzf9NxkNyeNKmn7LpVjn2VndoVrdW7SwFDagypYSHC2zo6JZG",
  "key29": "4tqM3BTYou7Egvcf8qxdiFJ7KGvsM3zN362TNe1K5yZN2GsUj2QpDXwtMXMxgGxKmJCUw9WaJCbYUa3ahMqqzXLr",
  "key30": "4ui1FCZqJQuaPRFiotxSTphyu2AcSjZm1bP5nx8owTPUatBTu2FrRhjg6rBW8V79LyqNmJ2AXzE7uBz6v9sBX3Y3",
  "key31": "3S9sU4wQQeTzA1xgY9ZkX2SaLkWjWbs9YpRCJ2fCeK8xJ5z66RQcnKVxQsrAU7fxJyMisAAUyJ5rMGjyDNUbbKCm",
  "key32": "35AeqRPHg6H6H5NmUU2ykjGmEq8jLFSELLKPCDWALTaeQe3ckGZuMwwYV9nDMX6DBcHDnuBz3FGBsFzRTP1Kyagt",
  "key33": "43rKys87yYFZwxTLKDDRL9GT1KrFnyZQHXzmiDB5vrivQ47Q8GQ7KStvRe2AU9JQiiXkyow13kAjUds27oUtCwTK",
  "key34": "TeyMoyqkjBL37QzVTnizSQPySphphPHKJpSkkB4VcU8oAPMUTSppawg2DbkAx7x2twH8WMvWfYvfiWJ8Lkxt94Y",
  "key35": "36qSR34Yc16WMYPmVjbuXUzzfumhy29VPz3xUy3dUTyy4P3Jxn8K8NWnCrCU6xvE2HUSMhd87b5DE1hwizeVzJtp",
  "key36": "xhrzkqt6nmHuE5fQZSrZtwHXSERUU1iYKPS7ajowZtY43xwsdEvjrYt18Zj6QptWZ196SJdqqLnhGxAK89PiXPK",
  "key37": "3whYetm56NagkqWBdtRgRVWFdB7tFadY34qTSezNpmwWmcMkt1mfwkiiwqcrthH1qpxtn6Mh72CdKgNcc4a8BxzA",
  "key38": "2oYcBqpycgYKyveSWAk3Wick9pZPbxy2AAxvvjTzSiKgnqeJXcpL2kkQ5SQvq7jFg3Y3pCR2STVWkvwr5kh81jhn",
  "key39": "2aLBArwHztt9UP9JDvPUbbDUVoMBVqPS8J8Fey4ZokiHvRXLaAgZDpkjs7Y9wyott4Y2Lut1YTYivGS7LcU4PeBi",
  "key40": "5bB3A5W98nbUuY4MF5M4BP2SzWCe6suXNWCw7cdzmrWiSZc4BeDVbFVXQiyZFBnV8VKqMGnwZgNQRbHn8ku3GaCm",
  "key41": "5i9HxyFHowASmMA2vrBLMBWT4b9mpH7jyAzMDzrL73f2XYhgxm8rGfKWH6CkJqZzzVpspkdFmBPfR7moK35jbNoP",
  "key42": "2sB3gqpz6rBcwt7FGanrYZqZng8VyijfdpPF3frXnxgV9kAEhGpunnGs9hQMSKZFdstMp1ZqtxecTivBvigkBLpa",
  "key43": "4Es9pYmfKmEoB3uD5p6axVvRthkAydNRHZt3XSiJHuQUF24vjxVjYsPfsHtqQ7GmBcqoEydg8ju7Uu8EDd2jEVmG",
  "key44": "5huGyiMZ9cPyZweyPVqZ6sDnB1e23A3ut4TweXSsVjL8f1XRhczSGYDYiE5zkBU4zf3cy4EFKYtqcSFRwefGJGmw",
  "key45": "3Mo2c8sfTjsbqEVgw9VKkb23AP7ZA6vQSRwbsNu6oAnuGqJQYdR1QavwConmTavuL1a58NeQUVKwRTmAx9U2Tpnn",
  "key46": "4rXFMPC5DQP5ASxRyFaMVvvJiPqMJRZbXp1HcfHkuc3yabQ31jim1Vj8F9po6iXgSfVuKu3CPS4WPUYKEnaSTFUs",
  "key47": "2NSdjGYPzopGtrZdxtzCD3QMDXfghEnbYUHH9WmuXt69ztcPzZe8JbGE2c8dughK9TgQncrtEZ1hCBCBeAXv1hDp",
  "key48": "4iWkACPAR1oUwrt71n7k1JwZbRdv2sUSgNG8wDgxMCRf649F5Yd5cKd7go8PciQ9xYJXJBXru5LJQQGGR5yR5bTf",
  "key49": "4J66CYy21Vx9apTHSzDvAJ4YKTv9hLPmt4CLsGw3akfvMUQn9n8ZfbCHQjCsz1zPRXNUpm2ZqegnRpm6ys4egFa1"
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
