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
    "4x4Bf6UNv92gFkQZ1tqomeo2oCAeiuLhPGbDfswpzWMQMJ4fYU2UdWrakuCwj28aG1SkiQr9sBrnsLLZcRsEckuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pNiaJkB2t2vfhvAAf3Nroref5KQ2nPC2qJoFWLNHjvqroXdjAeHUvEq6yjABggdY2Pdcdo9fNgaxhaxQbhYEj9d",
  "key1": "4hWhiHG2NmUBQdkFfJkKvtiDszsvoStNbXX4hVYkMszMCfryJ53Fzmaoi4e2rwVxZMu5FWtU9g9Ve56vi4J1DSCJ",
  "key2": "2cyLmGDvS3XyJneVy1UQKAaJva2t69xaHoB9DHu2QqYu8qHmAaXTwhUopLFetxym46Hy2Dwx1SSXPVu1bzBtdvpc",
  "key3": "2izKBx19dtVJMUaNGV3ThM3YH1zduzrxL7V7sTEVevecuriXmCUCoM4WLG5ZD3XqeqKPF7LELMW3UPRjoJrK9mBn",
  "key4": "u7jBJWM6UwT5TCKUiJSx7ZS2uf97UgxM7aYNjFeFnunXYEfEDVgRbcsDhSfXJxUVG6CUKGRESy1oxYfgauBDWvy",
  "key5": "3TRzRrcYsJWq2LTDe6Q4DVEbEjXLBKiGZx1dbf3UWQkCEKEqYqs9DFGe3PPDAWD8nchCAU57rc9XmK4WqxVF6Fxi",
  "key6": "2NoXETFvswS8rbyfrokTYgVfDji1xxDDjyRsziet2yodH992a35jVixc36zd6a85adLuNmjDbB6NDbUVQoLcVGTU",
  "key7": "rYKmEUDMbuinpUwXYcs2d1twDVhft4A2qCGmupfxW6Rb2dGriUP9XXzBd8wAN4c4Ei8Zh4RV8CmbM3vJTPWS2Yy",
  "key8": "3TZdP6nJJBsmXbv4jszu63ofeNbNwjqGF9BJPb7xFn2dyi2DGPKQqxWAGA5WEsKK9F4uU6ytuVeRMuK7ELppEM8i",
  "key9": "2i27ipJJohTydW1gTz1LSPPop2n7d9TogFXYsfP8GbmKco9i6PFvLz75LpTAS3Pea5ueTRoeZiomCDgZ9Yx48a3m",
  "key10": "5abPuf87Ls5ajScGTKCjkEHxDriRmSrDHU7ed9hVYkEoLPW4zRhrB27arABbhQ4C14y51bwq9w5d34EzFKFxWuTh",
  "key11": "5wKYibCdbTfa88udhWBmunuARiMcAAmrVNgGkePwsBcr4Cqf4U6un8yPCoaaLEm2NHjrPczDRZ9tqAZuJ3bJFtm9",
  "key12": "3fE2nDvcoHY6iYtidtKDhUMB9Xz96fN9KhL2vbdNGioCL2bcVUoo85sQmNLbDQcHetE3Vg7A5WkTqSLCFbB5cxFg",
  "key13": "3DPys3XTYdmMhH9ZSF8dXHPudmQK5wDhwjCSWhxSYHcFD9hfiv31awxzrce3MC9wK6qAPBLPeEMZXYCzB57peKCN",
  "key14": "WMHBmhRK32miP7dF7XxJuzFzU1q9sTEd9mPwFoiWNcpTSGSoTHrqa7ucXMFL1dtj3rguqhSHZnYeNoHV7V4bAuq",
  "key15": "QBcDer2onHxFPHaHJxgSmUnMEnm7DuHsGofFGZ233J7FswqVzQs49vUw1FvCYpiqVVgSAfrYbjyXPTu2vaB55fh",
  "key16": "5vUkutxbs9fSqixaoRM2ES7Qj2xCRf14noUCvqzRRo7PoMzUc9s695Y4uV9A54becADYXYV1zRhdGiAqAypNQBfm",
  "key17": "3nARWa7V3SxtAKN2HmSVhJY2AcTHtRZpS3mZzwGAYJz2Bd61Lhk1KWPC79XpNRXo3cDrMSYCq2DM4VKm2wqFUVka",
  "key18": "4LDpRxWMkpCPhVnccVSz5H61ccg2AkkrsF6KmJYcZQeiezsasWrKkiFuSRKqERFzBZrbf24rdodZR6FxH39P3aKE",
  "key19": "9bnMgoStJtDyCGSevjw71QX5qaC1k52L16cRUgxQfkUdE2GkwJeJ7rB56CwE9WvvmovumthsrfCJdZst7N3aPyb",
  "key20": "34J5gBnrB4uGEniHMNQGvkZaZz4kCFQdYhqUEc3mDmDEv6Px1BpiBHPrZAAGd8GpuDPQQfzzUDhsPghhE5865F5s",
  "key21": "2g7KyEFTUxaqYUFFSo1azjCSrrwVdYK9PnNBgczmbEYtUmdao9XXPKHiCyquaL23XeCC6Ub7RLGpSdZd1VMCo8TG",
  "key22": "2968Zt27w3hDH3KRrL3zXjq1kHy6GtHyNL6wr1XU3AENLb3pxABXYKAYKxiHhDr6BuuqPy2XkzsTJteX67MkTFne",
  "key23": "5FMHZuanzgb8EuoyR5XnMf8MEwSxu9wk6mowpkihyKwK8SEVYQUzCm86nYf5NcaZEKkQ9dZVzfBZLrqikVWjh3mw",
  "key24": "46agptHEm5KfDb1Mr6aEsJTT9NQLNJ4pziaBuyZAycMx75J2jNBcywkw17aFcAW6K9VsRgYftZCb2WwhgtBDkPqT",
  "key25": "4gHZ8dEbZ521joVcywqnFL2g4uDD3fSxnwc9jWmCP4S7U1jVZ9ku2iKVWyMjsXrxLbtKFsR4eK9JVVgJthr7X9fW",
  "key26": "2QDYVa79Mr5bR5qsz9dXw7whibTdQvFpA8iPm5y8nkoYb3UWaggCUR5jKS3KyYwa1xWEn7b5Ad21fXW5GugdAQ6Y",
  "key27": "31NSHMzeiChuWWS9fUBgvVKgGsDyMEz4R7QgRMDph5qMYsky9z3sxiuzFH14Wm8deYB5j1A8D4DAYaiir7dc3JB2",
  "key28": "nE8Ezzz5B7goMZK7dryucToBCvP6hsK6sv1oLiNFJJDZY2sXkejzKu85YnSHvstwbUQmqtNnuk31U2HN1btVuXz",
  "key29": "4ign5A2ANcrNX6EzZD5epgLQNfCRYZ5Gt48syNgLypHhMFfpuVNEBdvHcGXBQw3Tpz6xftMsMXoERGjHvpn6Y1Gr",
  "key30": "Q8j74PxH1qRVSzCnEwef1CnfX1GBQUrpp2K7QvrzEp6JRf15wcWhwSQjS1hdjBwy8PTLSphGCGuKfr4YBqBXiWv",
  "key31": "3NGwx3j3Kskn3gdvKSrnksjG1gyArinrLSbHRimjERnyzhUKpEjsKALWQBrspFiUFikSeQPLuJQjm5ebZ4afkQC",
  "key32": "3A47SdgFZMdGwQwtCnFsVSkg8v35q7bZubYWCFVVrmEN57z1PMrhnaReoamqB8vEkY8NWcviLRhFp3mCxvGWaN5m",
  "key33": "HVXkn8gUoyL3NkrDBe9BngKPMXH5XLb34NxLnjVUfp8TL8k7XuUHFHT1576peRxiaJDD4mePjfME7SRuBYkyjog",
  "key34": "4jBGegh3SLs9hubFHw9LRnW2w7rfEXi7qxRKA7SyyLV7Y7fpZPHVmMuAxpuE1ZDGmsD5motSR9QSQHS5wQcLhMCa",
  "key35": "3sbZxfDnnR2hpZV1Ps3B5EkLHqq2uKS9RhsxtFnXVC65wUXiEoLvMRhxr6QQ8N1Xb1TPoCwK4RABkFnxbFVuqVPk",
  "key36": "5NAJ9c5RiesAuLoFdCsPtEqQjUxGzV8gxLfPEZxCE3zzugwYkrcAwPzGxANLt9csTHyWPvxwUBAE9qUMs8xEDhFC"
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
