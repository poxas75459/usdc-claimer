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
    "5FWUi3YBhgYqUFAEH3P22KYiAFAA1H5yp3s7aTFHY2CdzLMWuXm4WZwArEwRHF8Fewfhr4ksYDvCfAzcoFmNfgnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XZkqCHN2zhHgDK2Xmj8hhGWCHgPEESnbUgGx2HNpvg6aY2Hk162eHYggrP86RaBXhz94jyi6vKrYwWaSG8J9QSZ",
  "key1": "2LD5PJX1cN8bezft68LTaeDizM4PbYuatRrxN6zBkgTUiQeUfXNNMNH1sTPcmFio3nu2fkE47X2xrVVjY7s43s1g",
  "key2": "4xtYaorwd71GzWvogvjQiT3f6DuJefxsZM1GEF2YQv5e3noP5YFw2P1VyoFCaJgwFKBpct8iQyADSBTwH213N9pY",
  "key3": "2kt8qaJfSFpbwbuNxJXhR5dVJAPzD4yWDxHLAiRH6t7MxWu2Lhct3ybUug6vtoiH8D5c6XKpXfXgBh1PLUoJDeJM",
  "key4": "52sN6pVL2oAYfXdosopodaNbtX3mpyqxu1USGHwcBe5FQyrFh2JduWhazerbEsatBqE6M3KN4Kc1EkWwoWnEBzDZ",
  "key5": "4NcHiPaHsq1VqvLp8KLn3xyauQizqMDLW2yF7vGKDbEJ9WT19cHodrJbxKJnM4MnZCn8ea9PQjKwWfrkjKYzFZXD",
  "key6": "5UZEBpNKJCLjrjjHRKzbVZGmgW9ySpkh9UYXynYMbdESzmDGvVz2QYmqRLkjiA6rbKmjErjw4p6P3tQa4dDZdvvi",
  "key7": "5mVPzXe7NKjqnXLHKp5HPczn5s4BqQrcL41eo78yNYA2BeTFaUNpVtFbiygaubTiDVLEwjeyD6JL4EePnawUBZ6b",
  "key8": "4pQw9WHCfL94Rvhy7aKdZFZmDRn4PqSpo1WtfBZiG85KCay8oqwWqAEJ36KDTjPmnSWob2YGrRtRXmrjU6fv9pnT",
  "key9": "5Kfjh4KYLPscGaoiW6Mf6ZDLDMjyVrQvDfdyVZGkDPUAaxYhd6CA6tkBaqhuUUR65ZTc9cfdK5UcX1jttYyLbnYM",
  "key10": "uQt6mKpX3Qz16QEF5fsR1M1eFBXyEtW1iZcF4p3m7UBm8osUPnmtV7TddGt1DEGqYjUbW61Xb6E6VD2Tcmq5uCe",
  "key11": "2SBeyQBZWPQMRGJC2Sr8cAUiR85vnrkkYXDWcCEeqVhFzi7kRMf4xizuKqYt9Cdy71zmv7qAz3xHxqUDhSF3pcwZ",
  "key12": "3hkC8hHtEg8iJWPmJLhabGQaiLmixTYY2nRpeJ1Vc66HcqKwiBPcDiXG9EbVvpiaKqA9zjfWjsBhcXzHYibrz7ic",
  "key13": "4WGbG6KMMrKxGFr6HN7eVtJg8eWnj5xvFwsmLcRHGs7rvkqqsgSHFAogvS5G8Tn44QaubiLoanJKCh5WiatGwZwW",
  "key14": "2xGJyqujpu4KM2JrKjuQA8YJrd4vMqAVrB4dHibzjqq48CMNhkwYHZyguTuJf7utEQnbsh18hBLzsULY3eV6kdSB",
  "key15": "4uTw5MkrWSGTfLFbK1cwXHRFAW8kxfxXbzEjHWSJSzxCFjmjSv4GrcdrKsB23jK5DPZFYUaLHNT9PJmZaNv5Cijo",
  "key16": "5Hw8EeJUew8kV4qjYnn4Ppyqbx6ce37ZHqMwZ7jL5dtsBCWon3t5nWrBbe963MPZPuuD46W8nwC3TuN1ctSy1hWm",
  "key17": "rYeC8AKz7ZqShb1FRVgbpqL6TQAieDxjQExxwL2v1u8NK8H1Nx6gVK4ZBi6YdszNN2URHAXJLWYFDFhtenM4Bok",
  "key18": "3QVW9hm73qTChc6iPEzmKu75J4pcZTivZXnw5PJda7p3m5wVgWAStaGSuXkdC7MefsN1svPnkAQTNi2VKe7KqSAv",
  "key19": "3UnYSjipzCqRjhpQPXxrP4syBBKrM7S48irLgJJG3S4rhar8EL9KCjDRr84o6zWb8HsisFX3ngZwKxLTZUGvL2zs",
  "key20": "4LKbxeMSR8yPPGc1BMXgXhKh3F67WSHytKmBYerWXZg6Bah3pcZWspaMNtkVZVx31CSp2HCQxgi8GLv1JZfe8w7U",
  "key21": "3TFXFN8ZCRmXChR6YFT7p9LPjb9kBKsGAW7ktV5D1L6wWRetAgmWhnxXVz4tpUcFAKJTHcbmgjQg8LGZ7mdpU3pC",
  "key22": "4mvHrwK6ULGT1NEHTRaMJviHVoCe9zZK5H3DxtZmWFLgZMDc1v1reKgGpxBohoUyL1wS3bWvyPizYJB6iWCHFb3v",
  "key23": "RTrki2ABAdpnDkRRe6Q8pZWPmVVqDUHxhLsPLPJVzKujBVAFHTqmTLfGEiZcn5y1cC7mZXJJaqVCuZVMQRRuSSh",
  "key24": "2K2hrfwhdKceZLjRFKrJdqsrV3n28nMG873gKWkRZeh44ZUv7C3A5ApM39qCpNNEwRpFvJ513nDPRchrGk1gGKBk",
  "key25": "qq5rA1ggZRse96z8ZCB14AfquiiPVBzh5sQPa7dWAZ2GQC6G21KvUFhfNdjRWrn979ohtC5ycQUWugbZ8bnFUWo",
  "key26": "2WWa1FS52tTergZN1gFu3hDmV8EZy7rhdbSLhNn9YYCprp2bqgeSKjyAkVXzhLdTRSWfYepKrCiPzhi6WxZsMr1b",
  "key27": "36Cdtu7jf42A6Tk92FVMh7EfRK2sgjeyB8s1CWLV7YhSUCb8cckJL7naQj2SNsGXQ4ahQ8D4qbPSDgCcRqoCjVPM",
  "key28": "2AvKf9XtLnZoXdNi8DSiLuVsKYry3vocCYtM2Av47w1UEvRJ3qKVBzuJL6j8hgiz6s1L74pwNrmRtCKZixo2Nruw",
  "key29": "2wxBLRZ6jiL1g4nERAg9Qky7gP45h9uvuhkdtiidLBjjrJbWKp7WuSRDSeJnggAKrHKod2SsMUJ6FGrETRTMzbCC",
  "key30": "63qxS5EZXxisVdYYgyZxx4gvWrnV7kUEnQTUW53w3z3vWtwHG3sESTch216VVpx13Nzc2qouBLuF4tiq5puv2b5s",
  "key31": "rGRGjjQZt8JA3M3DExruzHsn69DB5KZX5h7wzGCFpmE5bRPZbmXnQz3yfgqYubpgbM25NRXF4ePzmfQfB3TWYZU",
  "key32": "66KqHyQ4LbC4PfAtouGExmnVKjXikgagEVxreKJL4eGq8iEHsGDrmB999wmAwTXgusr7YraKPKgaCapNHBYeSHzA",
  "key33": "3zjZqA1AHz2c9Bei7SNGVQQxqqwnWen2tPWEQEJo1cmBgjth1zGb9Lez8U7VGVniK5vRmE41KmbxKArWCmG4Zg5o",
  "key34": "RgC1Xv2s49iL4UbSALcz66t3ZZo5TxsqXzXDh7x1GFb8F9GG7T2WxSPqPnaEMauBRMuvKDden3pBCp81Ev64mbj",
  "key35": "5ZeBjLnDkKYjijaMzmpDFe7ABL12ksZGKaPe4nqHyibgL1GacLi8ejNQrPwxJVYxkoYEqRj5izP2gm73nyhLc3d5",
  "key36": "2Bg3KyknNEfYq9mZq3S3g2YW4x5JqmtxXkJqvoZbsYfpSEdqzf8EY3tPDYUS3ZbxBcoDqvRqENdYj4uQ254UnSCc",
  "key37": "4QUukri55LwUp2C7MFCFE3WgRBx8ukZ8VEUqhDaUnWZ2ovjVtGQRVWJ6AM4kLkXrGJKcmYAYh3rwJUVn59DVo1sp",
  "key38": "4LpoHnPetcc3b3Ccm3QLSMsz3RCPcQZy1Bs6pqAjmqyfZRLHHnbp5ihj66SjxLJAzTSTcUmVEDQYXMtGGmgHE4t4",
  "key39": "cfahtBAofZuuPhqTEsu93zRFGue6nCXNVCZRPCQ489MetSK9zWSXn9TU7yrDdtLv1Mvd51deoZNhHiCxczEf1Mx",
  "key40": "5ndaJHS8Qruf1fR7LVWP6ezwaxBh3y4pjcQET4j7vTsZqrYVmEZpYNcjtKQwRmLyakmC3HVR6bEaoCfsDfSgwdCP",
  "key41": "LJ5Xs2gYhYkJxPZ9DFSyBdmkRNhv9pSppwgZMALEe4eqkUPpzdYWYMYEZfL5KPaGQ6N19aiZWQNTWaeu6yC2f4A",
  "key42": "3xJJaPdaeFdsixjVPuGWPtvrr7Jw3gtnTKJAokDDHMu1Dk32Chnc6X15v47jNdGxL3TQz5psnR6mYS9WtkdPG2AA",
  "key43": "4zBB5zt944ZwgAd3kE6mCmMQk7DWxAqXBFAzD1g5JbyB4cbaY7bEDvrwqP3ugk7jraXnugwwNUv4zzASXzKC4R8u",
  "key44": "3ZexCtyy5fjoWwQvzKq8y1FqjnBEVTNPmorctbDhKThEbQgpXxtvppnj8Ku2oErhFt99sD4Y8k8BanshQp3h2vVh",
  "key45": "2mQa1jHmKU4e4UhvyGvSKzTU8W15dZAEDTRantmPX3PEpGAmgKTbGrcR7yVRCUmfMoVZsZpYQnSULHCryqVTLajJ",
  "key46": "5RySPQE9CJCC9ouULc5kaYAgSH7FnQbrb9azq325UKm493owNpLwBMVy3HRwqKczvikN7oineL6mqjHhTDvho3Kt",
  "key47": "4HuiGt6vsgR2k9Y6eWRtqQTkNjsbTvNcSZbArDxFFjco9VVx9inocKnagXDVhWNxJvHxqz4fxrnpUwJcefC12e1k"
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
