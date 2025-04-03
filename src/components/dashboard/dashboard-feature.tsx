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
    "4EpfNU1QQiqNKdiaDhkqGcVHFHZmML277J8pL8VBRoYs8TgYb1EULJymHpSbGe1Fdhy1nHWerDMwCaGoc8AxR4pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JMaRCzBvnxvc7THZb5AineQYovDQwtk4fLtPXxwMdqjV9PtcYnw3nzX1WMmcQdKk4uF9U1CLdjA3q4jNSE3VbTe",
  "key1": "cfS7jRUrN6D7nBVznhugcR22PUPBbDNvTXxG88hTpZbgsuieyfatK46F1qT4oz1YtyiTTVwwrVA7Zjk3UrpebSR",
  "key2": "5vHzW6WDpXavVjf2B71ogT96JCydo16Qu4QQVUR46VoxiH3N7wXTsX2sdGs7eE6Y4gFhoqRfTtjwBCex1scWd3Pz",
  "key3": "7hu8ug5f5LRH789922evmjxMhHztaLMxfZHMW6khXkTtYCnpBsj2U8HETpFBb5ympS8vLPj5dsZgnfhA2eXXpdE",
  "key4": "5QGxDFsZ9CxXdoFdwpAEtWm6ChmcQnW8nDhVQv4EApZeMn1ghGoeyeWmUCjxgTz63KahY1PHpf6hFv1RQ1zqyUHn",
  "key5": "5s4mGr7F8VMchCCJsnJ9p9sCmiDPPWRZauAx4FJB1zW7f69KYzAdMFwFjpGqk1C5Geeo2HoVq4t1PRrbGuGE2Wsf",
  "key6": "WtBpym8Tb5JC8igsQC9qBaLnqV9UWU5Gf7MSdf6ygq5RVLd5vrZGt6cqw3qkCt3iK4DJmjFLoz3HVDWmAySt7x2",
  "key7": "5vhpx61wDL13WeSB2sKheHmpz7PNtgUCn1SXBAjModwhJSXTwVSKm7SatpfhSF6MXR8FXZQXCxUhWVdV8nR3oHsW",
  "key8": "4WhXZa7kpWJwmH6PHZiiGzJEuSRFsQmPDuhoSZcirLyUQHSj3MRPguptN5kWbBjiZGWsXrXRXy8Kgy85KXWsXWSc",
  "key9": "5ajT1jm8zonSqcb5Y7EMXpytUH25VRdeQmbUUHqfshts8dsvGn2g3UERQUhscaxsCkJDkU9YQcQQCDgCDu3aYiZx",
  "key10": "27XnGsJE7XnRRBDhCtPjy8XKbMxTJ7EWozoZFXEM6G3MsGf31PgiubCLMTA3mMkKkBwAPpkpLp9SzURMAXjYT46p",
  "key11": "2tw4aS9xKjkYe6wreDpSSxr6UxF5i14LhaTrUBjNto5MgxrnWaf3XcnKq6CRuWyuBoznyYSkxeZKqUyGSjwaqCr1",
  "key12": "4DtLqVBJzMqWejbzuHH8D47DjKpiQxyaDPBNsYx38CJtWbmusVDmjUVcgtNcSKysfzGja3wFjPGynduWGTLvyR3o",
  "key13": "45biXVKfRFs7D3a86Ayd3fiuvy5drUU1Me42oAB1Hy5guLKNnhVUMNzrvUcTt7MxoNwyTxy9cWfcPPWSXR8ibRZF",
  "key14": "BSkx3MyP42rMrUUKsjL9KWWB7AZRnFWp3EKGjmT2Ns4jU9W841rDFcEQPPYWX3TnRke8YkBif3iaAQKEac7maqv",
  "key15": "2EQpb9VaWDdC3nA2XWGjTBba9fg65qWxSe67LCNgL5X7JorS7L3eqPKe8K6ewKRa5SdJzevuzyABvoZo95rve6CS",
  "key16": "4rsfvno6k1EQZyAGsZTTsNrAoW5unfHjMyc8CEivF9d4r6FUdPNCystrVumGHZNXPjg7K3vQGYySKhCSLytV8HVX",
  "key17": "DkBqVH3viZbSBwTBBqraaDtuFbkdS3GH4uzjYbugCETjikcw3HaDCKon2ZvogUZ7No6A6DDG83CSwp6XvWHZEt5",
  "key18": "2KQLgZwfgZQR6MBURvC3keRBRJkEBV4ndC9JheeMZFifgpELcYvzTf1KojKWXLaQt7UVSw2sVNyZLwSmcysRvnEw",
  "key19": "nk2hwPDPmMu8QgsGgEzrouYV9YQML2uTBbyjC1VPayTGEJ2G6anTwgvziQ9TM9hGT4zmCUBk8jZtdCKqhbciwxs",
  "key20": "5EWQVU3bh1o1WemdCEhkKPQbopMN4WZdZECRiPVLMxR6xYMv32dmLNe8qqURhdNfo9VQPitYQZjiNe9hcciUAf5m",
  "key21": "F9erBrybCGVZjRvEXwshUWkV3hYqVjU16MLmL9Xr89BZPF9vjPupteTcGqnnvY5GBmJHL62hV5MvETDJ3gznZHF",
  "key22": "2bejy7YQ3a2UYheC3GhkoEgZTeBNJKMrFUqYsjK57fy1d22C1DzsnHAD7pxfPNbDvNoE9zrh5eHSo9CVxrmafuBf",
  "key23": "3dEXLQxXqjV4ZXDTMi9rhddycj1GCN2qnjindg6yyocru1WKHZBLXMd3StJjiaaHnyf2ey7xp6AdcF2e6V2wzvGT",
  "key24": "5obotQBeG9Lf7Vevbk4G8v8hy25jzH1jfvBdnY8qHzhrZ8aEPLUAjRFwsQMuk5GZRTqsHVSp5CRBqKwzbkHwNAXT",
  "key25": "2i2zvtnf4X6axLpAeAcvWtCmmMFZ6Hh7QT7YDzEez7CTX12VG26uRDAF8ZCAgKXgMryM8YWk28bTbwKHyrUCSukT",
  "key26": "3FARcjSVuLCZLqiZHMpLe5ZrqzGS4bbrb8e83yNhGvvanvcGbB3fmhrGVm9NMAS5EfY7RKGSD8etVwWefgxr2d5T",
  "key27": "5nPRA1BJzCjwrBbKSZoUG5SCdfBTrs8qomX7hohLEtyWxLXHRDcTLaFBdhtNCRNYhq56cuzcWrq9pngaYqzzBNft",
  "key28": "3anirFpMgQ1ZQFdPRje43F7P4nWKyqWT42NEXJWqebyPCjthKsoor1mReG7DD6JMdvDVMTkV3dn2E1GrKG786P34",
  "key29": "3euWc6axKpREwEoyTdqzVRkU7k2rgkoYXbEXr6BkLywcUpfVLAPFBHEQC8k4r5cXRQ9ksPpHzNUvJQqoAGKTdvQ7",
  "key30": "5dGWtKum44ZPLQQXE4zByBMeknpez7taSB6fKixy6SjdrsMqwsR4eeTGdjwzmLmtNhJNmFwZPpsmWfBU3azf5DV7",
  "key31": "446cwzkf64NShVk11PpjhaoXDFwnwdyzRtxumuwfR6g9SAHTZkkFkXejnuRE8QRercA4qaq4AYg9iQKdWCvKio9y",
  "key32": "4xxdHaDEkXPeKbPkHxFHEs1GyvrZG1nEavUV9JFirwHqkh2P4J9wyziQ33v1Jp83ugjii2S24a1g1TofD21LgEnw",
  "key33": "2S3HE5V5pmSuXJGgGPGvT1LA5qpuJZX6Z5B7EodLjT8j38PpnZcK8YVUSVnbbEtch9XsuKpTisweECfP7eSBSAqf",
  "key34": "2HjToNSjHN4fBRycNevhvvMNDU1yf7qnDBJbNtFCtGSLsYfQGgdoVCwhwUcGhqXoiSrYfQpFhpvYxMJ4hviSdFpb",
  "key35": "4BodaoJTjr52jmbzs6RG7vLZN2mgkwEmYzKcm3N2PCWsxWk44mSVtERGaE5G2jzVKjGSHmevopXcaFpK6213kBcy",
  "key36": "4jjDMWYnGTUSENyTZu6cK85CzuLJFysGPLfwq5r7Z9KhtujkwdfmP68XY15HyYRD2WNnHmEJ8Zoee1ksJb9CtT68",
  "key37": "5AQZyrKN4hVytmUbE3mSCkJD9tHMddYMXjzkZMsiSCX45nencmprTvGMH1mpmLhDZ2fJhxSnLAPihpPkTiS8aokJ",
  "key38": "3v2rSE7ySQFipN4UPjn5AxpCYZrnRXLGrKVzMH27Abp4qvjFpgW7ytcN5Ng5JTR116kT9Kh3AUvjYbpDRqo6fuk",
  "key39": "28GgQyUedAvvrTueF2m8E5Q9HyXT7yaDsErHiAx8HFj1WyWCDKkehEaNs6L7eKLFcyMvYpP89Y1jPN8DkM7cNYhw",
  "key40": "33z5NKCpLVFfnzd7CEW9ESXB5ucSwAtPcD1cfqJjS1cRCPNaECV74N3EypT2Y3sRLRVYEcQKeH7BrrPaq4JZv8ME",
  "key41": "1p1J5gtDW7WrA4ewM19GSJpnc2KVVjjE4zMDXoGZM7FcS9Lto2oHpwQrEmbUa1H4XZM8JENeCV1eZseyVwrKrNt",
  "key42": "WBm6DaALGfmeu6JacD1yo2iqJVRtJj4CTZbRefiBhBMPRgrda8xzDnPYrJByxk1swcAefz751hCsnULMwQ3n49x",
  "key43": "5Gokrng3nehDZZsW8ZXRpubL1rbpLu6HLvmJcJVRCBhwRMGKNJBYxAaPCCbt25pAdpZaTWj6J2uJfmEZTJDUaD4H",
  "key44": "3xNCpW6MjefDkrgc2VT6eoafpBAGJ8MY9QpZRJsaqmWDdBvoXA9mqLbEwUxpheutBiAsQDi5LhiGcv74GKtkAixq",
  "key45": "5Y6f9qXZ9u918troSQwWqjCNCVj2m3xvPXvREShQELBbtrJaoH3JGvN7L5NajFDiqPnZE8MM7jBadZNCMGKpWRUP",
  "key46": "3yD8VZEn55u894ZB4qVyWUnN7w1QKtKGfKkz2XYbxSfY8CYVCEpaBUzffqYwcHDKo4o1t3FFfjwmA85GJFnfWHs2",
  "key47": "3KTJjn1iP7p1xmSMMPGgAxXyqatb36g9HjRpQk2bCXzCFpeXwLnBxJXqqevPTKRFgiJJQrARCcZwFt5bym65dmfW"
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
