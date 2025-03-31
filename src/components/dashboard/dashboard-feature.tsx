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
    "xSwvvDFscSc1dag1PvE4QhZNfxthVEGL6cvMYCSz8xcYpThsbsPo7ADqC2juePSouw7VpsMs6ixWLvxKZ1ZTphp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Si3k6kLVhNe75kAEdJPSNDzAfzU5QYHkhvm8gmjiD2YBKeVbvXQkqw3WgKvGsyCMrXiZmmXL5odANVMBTfgfAaJ",
  "key1": "6pBjH6Cwy7o1z14a6TsZcZaBCD7dkAGfpJsWoXbpBDRhYcompSYbn5JCVopwG6yMQ1Upitm9hVSMu4ZqWSYwyHx",
  "key2": "3K9VdAC7uJAzZYRWecwTEkhpNotq3m9ca92KzRrriURzsrnhUwLwiuCBgeLZgqm7MujUSq4mfa1Cbb9XaZbdevSY",
  "key3": "5AbiEhbE7GXdyCadL63WE5vjoj3FA6KkA5PKxxC2SNgcd74Kt9KUJVvZUpRG24xLDqVdDbBF57S4sfNdKvn2L36W",
  "key4": "41yC9wpecAmnH4o4EZ1Tzz1424fcM5XX2QjGgMvewqFpJJ4sjP6i5UMaTBXL3UQpqKoW47y6dUef1PGdtKBj1UN6",
  "key5": "3w68gGntfEQGDMh8HU77i5C57EL1dbB8aEWeEatkknja9A7jmcb8D1opWyJmjVqu3NkdMFzUNzoxT9Srww8HFzpG",
  "key6": "2w2SEf2udBBSSVuxotQUogMJfM62v63vgTyxXhM7LWGB7njvNqaZfAbzzLYubX1zTCxrvs36Uyyuv6awe1W2caHj",
  "key7": "4Vm2VK33R4V8XT6dcJfyWEvnbtwhkBFwLRZNpWnSk22JgomDk8a2LgCYEtYoUSAM7esbm9XZzEvaPGEdME5RXaQQ",
  "key8": "3vak6pgmXbZuEizFGuifRS45F7mdpnFr5vVu4DgtAC2STsBe1GcqoE7DCTdNXDN9TVcrRmh34tvK2Mmg81z866AA",
  "key9": "5j6vREYhuqpTxdtNo3TfLqhKqzqW3s3ESuWHZkHDR4Y7mBgmFTQ3Wdi2CNCxVmeMEWsoqDE4NrmiLsp7UPkZMPLD",
  "key10": "3MegfzdmyuSBcopM3CAU9ce2KRVhcjsxFXbdLxUaAwMW18Q4mTfkuzUtoL6zpJ1s37XKS21iJCsPEa7PpbGAs4EM",
  "key11": "2Vw91m2oWr79Q3Ep56uYxi5qEePFA3oQsUUBUqQUNDVvQ5CMuUd138DPWvNMZMkkzJTYs9o2yJX3nRu9SbWGMH7a",
  "key12": "4ZzAJJiDyWP4uiidsagAkzAbkZXt4ck2N1XAsUphmLTPU2CFvAKzvxmoD828vKi8EjLZmxTsFMDjEkyj2re4v6fC",
  "key13": "4tuuGbGSe4SVPURKJiisdxrmjo5nvrhpWxaV5D8Wqs6RCxjgzr8dDBkfVPpsRMaco46Y8gVR5j7HfLSjv8nZ16hy",
  "key14": "5h1iTgQTw88X9WxGjtqcCD32YekR41tuNDF757HG2xgUnjQkXEsDJNs2V1EgzfTgGdvCGWVzL6a4gmoaidsUqh3A",
  "key15": "UuDtm7ibUXm65J7pz9qtesN8tBBFv1FGWsX9bQCNmq7b1V46pgWRSAS1deYf6y1Xnfxwj88d5HRX7xhkdfVGPKx",
  "key16": "Zo4BdbputhBVsghM1p3ukTEfHAKokdX5d5FkexAXELm2AYoiXV6ifUM39rQXuAkUfvnMtmwQZK6nUmHVVvkEZFE",
  "key17": "4kSN3dSKFnKJ2zXD5zbfnwDo1EWnk3zZG4f2EJuwPKkovmHxmraG2nfwvvs5Ex1W2cRt31ozTzEnBFUMXHiCRtSW",
  "key18": "HmstXfoAYzvvyoJYX42nQYjwqXnTBr6PySfYnzx7TLNhGgopoAajSazLytr9PGLbkwoToUW78EMPt4cAWNbSaTi",
  "key19": "4zV57Vy19BXN16wLTYgvpEjiNTwpDyJM7D93GYScYFC9fgP1SL9EynX1vHfZk2qovy3cnuiHRxDMAkTDTPUe7jtS",
  "key20": "3kLAZ3LG1GKXBmoJZSJzEmECStmTEZj7s8hmqhWMWzgdWnprKpc6NssjnoWmV1hAfP54vvEpk7r4Wt3PFANgTd6L",
  "key21": "2a1UDLYdEpBfYGsa3Lt425HEHgfPGWrxmmg3r9JaEJr6fbabQo4goCVKUNWrtwTnouThHCw5HtuxfuXGYb8BPYSU",
  "key22": "34VNyiLSVES5P9SaprA46fBZRgr6fNRsaoaGNTcezF4wzNy2ghDWvhNcPfsg8RhCDfvnjy9Huki1s6E2z2RJZABA",
  "key23": "3SCbcWV3ZXW28RDLqrc959BfAwUAmDrrGjoaxNHbqvcE79U79JADnFikY786BG9dxRmAxTpTJoHskbZkPyGiaRzB",
  "key24": "4393T3fakZ9ND1pRGrMj4mCw8753toJmxEMdUUhou1JbFk9G28rNQu5BXnqQrUDSipTC51ytJcoNX76X4C7vvUBu",
  "key25": "2UGUENXzBjPaTFjeqncFBRtzognZf7J1pKMNdTnX7VYDHp2ZMmFzXaEYSMsjd6JZXQFQngKTtvcaJJAmLZRzN2Kv",
  "key26": "7w1wK3ZAtH3bLGi9u1DToccTN5jUNrdUxYAwJjPCvbiMnvrqv1hCUgxuXKM3NPUA2bQqqECJjDCuxkedPzDU5Xq",
  "key27": "3Re5sey7kSQjtVaMKYrjYXPaYXSjt2h4qKcH45oaxp4oyTuLFEi8mYfcRUHAccmuG2QzjYnB1NYN4AAXedy2G5ti",
  "key28": "2hQcDwikvCMPYYUAT4vfSEXM5x9KN77rstEcL69VxiWN4uSeTe63EMwk6yH3wGAjXjgSegvcypcRqfUooa7rMKFs",
  "key29": "5JJ1DHYyyP8iy759xMHdAuRPdu9WijKnztPMseiRqT1NQ8p1i6bziGXMnyQAhsWvVw9udDWkjYkNWSgQhwDFan7R",
  "key30": "5HhSuUcQz5mgxHxLWMPhag3oZUnJF88EmSZ6NPD4v1rTDen22BjbSjVpELSi3hMdAqr49y9xGuuoka2dBNEcjHdg",
  "key31": "4ZvFAXi5uGw6kpCmUfLgnQXH5iXVGgSF48M3uDCSA3CQPtEt4H7PHPvmrP8pPe88bZGixhePsbbogy2wbPL6GYMb",
  "key32": "4HxwXNyCSiG1QATybBj6yDmCWKmHUPPGgKEggWdNj7L8dj9PErgT2J8JHVzZCSZ7N8s6h22CZgfLcJ4xLZGh99Mc",
  "key33": "3NX1G7hsSJiZpcQPrffLY77yrWWm84Qw3FdZyAnu2df5eEFxANhD1xZcLtyf2ENfK67UjuEieWJ6Si6m5nfqvVEp",
  "key34": "4KcGXhfaZhWMSqktCN1T7wXq6jNxFD8ZNoUgSRPwwjdMXnS2Dvd4iKTwYAHeWnUpV4aeKoFLqSEaduS7vFyRSApe",
  "key35": "5TRmNJgFLNK6sGqA6qWprZHTLnW5jaMVRCrqD2VNGM4kdev6XPr2wjF6Tt4d5PdGqwWuS6w5WrBvi1dYhoibg31a",
  "key36": "34TEtqwJ9V4BWSHa9PHRqDFYpcSFVb3GWPstgT3i8eci7aHKh9xZpYW2Pj3xWHpLysJUmhHRHz46eQHCker9ZgjK",
  "key37": "5BHMHpFdVSLt6msE1gxuUKpZQQntGaVrnckEvYzuTrENLiXJKebuHApKDehZmfUFn7gRE9GgCLLXLkT3PbhnSxqk",
  "key38": "2znpvEKX5Bbtzk5xC96AqKsX1afwPm71MmiFbgw31FrNJf8TkQdNQH2exMuVZz2mDjs2ccicgn9uMByehfM6EenW",
  "key39": "5qxQpVUrZr5vi2j6CaJ1mQ8K5sTqZpn8fZXCSUPztWVBUyDwvqeewTDQcGDtj7GmeNRoKJfH2DmAu2TBz7xsZ3dJ",
  "key40": "2WXgeEvLRNwi1tCBXfAz1SCWts5pfR11ZuDxCvkMP57bStCjbfvDbmGZiMgGaZ2R5nDPBf9NtpEw8hQEHc5dauun"
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
