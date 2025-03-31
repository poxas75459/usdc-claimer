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
    "3L1kUtxvuNUC4NKget22KiUSG6UBhpZmXnnzQpRqvBmo2SonvaLDW8vGSzWYSkGw3z7C5PmGqWqQndayz6SQ8gPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RbwFhtxcLSUPuQ6a21dXeKHgSHieHt8AAXJ4XWLhmPS8KUEmh9XJLUNNcAfurCx4Z3NXh2hP1uygASGNaRxpa3G",
  "key1": "4w8NJaMfmFneh2Q9wg21s9RvsqgowrhivtBk4VhTWPKddsF6wQJZMnmH98nqCroDKSDmuEcNoKPTppzRCiZYij4Q",
  "key2": "5T4Tg6bDwkqvUK7Zq1tULU9CzEzgnw1f1vAUszFSHydYoaEkAARn1R7ZdyK27G2pDT1qkPjXrTqY8LFmRdYHGQ26",
  "key3": "3wd1npf9cS1kkdbvVo3XMktndLbU7Tv4sBw6h59yKUU7k5YVaGcv4P25REHfheKrwwrua1vEqDYKT3zde1V2SXPP",
  "key4": "2QwFxYc7yTtyxXYrqxjZUV1QtboTXSYdjUJcw6bvfaTR7U5yrNJKFxE7eaYjNaHpovtw86iu8uXxavfskPtCHZBx",
  "key5": "4BrAcQhK2E3Mqw8ZMSFk67aBoHicivfEeC5Zeukg8Lb364w9xY6ATunBNozYoUBB4yTc9s7Ty6yAbNKAhBYNFjqv",
  "key6": "5AgNH3KihEYTo41yKmn9vypA4VDQLAsUpKgjLMVGZ8EeugXDm3N8Ksx1HMbYspSDidoFgJsLFCo9ThQ5UH1qvQFt",
  "key7": "4gAtFjzJvPrUF6PpwP4kiY65hfxC354RZNLbnqNs5CwEQD5VGPkGcDEGEAHFef121V2oqZztoNWk3GTE1NehSrJh",
  "key8": "2SVsPq8msk5LZPQjQt3U3F9EULVdagZZudXL59dCJRqqfayojopKs2ttkX3N9aTfVQUWzpsN6Gjr2hmQAJPrVwQj",
  "key9": "cFAYbvz9CeUye6sbKStrrEYFNTWANtLYHE2TZhEHjSiij8pzB6cfAinfuFLehubFoS7FPLggs5pwKc26n8m3ciM",
  "key10": "5djqP7KMs7MjHhUQ2SW7NrCWbrEDm21P1ChVNHnHzxZHRVdW62VjcDSVHTLNk5kMTkgjk9jGgMWHoUmbGxtu6UqB",
  "key11": "3e6rxDpoQ4sto72A3Jox6d1RTGGGN8az94w3GFdCVy6N5Zr2wvX3Cqm4fEVhFtQWUWJsLovxuanbKQKK9BJATK6e",
  "key12": "4Kq7Jq5U3eSJzBRpsUY2EzcCjqdRULqBU8iohbM1cC2imsEHCBZczMvZZJYqwVq4YeWD87zPStkShfhXDGLS7QvK",
  "key13": "gyzvfKyxjAyEiG7F611UDFVrEMM26Lygr1KZYpBixzAN59eTowxd8zriibjfL4VzK4TnZaJrD1XMWPgse55CUQ4",
  "key14": "26gUz1S3HATeiBCfPwYQa96R2msnhadma14uq52tS26gyJs9nfcReMrBRmi25nhHvXQhBS2N4xXwXSaBpqRM2sNH",
  "key15": "rfRAuQBCBefcMhFS395kcYD23sb7kZCQSrxRaRnnNQv3oUtg1PEMLCVcYvu1dAW1ujXa5diRHBGQ97BqGzmnKXf",
  "key16": "4bm7vPhdkC8rz6sCKRQEhuJCA961FPKHqu1sXf5hmCgd3pHGcMoDJbeF4YPbf65eEK5SUGh5WzWn919wA9RWGbcL",
  "key17": "3rsKfbxidU2FxHJJtiFxfgLv146mEv4W5nhqFKTRoMVXDguH3ZSCV5Sc3YcY8neUrwGNiq22VtF22qvbUWeAW9cg",
  "key18": "4BE3TZRZwXL9vETU8PVjFEPA54Frtq3Q2oVGvEfnN6bR8h697agvodNoR7QaJ7mpPrsbfp5EgTpjL53ygQvmgZBo",
  "key19": "bVwLhXw7as8WLmnF7CSpsbZv8dKhMKVdvLT5zH9zuegjdXTvHVbKHRCN4xDHDzHuVeAg2wg3AghZHFJtu3x1zhZ",
  "key20": "SNS6nCTZyFGayQDBcTtgwmQjXL7DAZ4m3AXSpi9j1k7H13adrze7sPr1hJNZb28AsyUgmVQQKYVBz4bAQmnY6k2",
  "key21": "4D6ev4pSweB4ZsLGNKx7angMVZSJYbTL1d1QZqAWPY3E95NBMNkNUTREyxaeiZaRALdmi4dJJgcCjC2yZvp4LLBj",
  "key22": "n682rWbvSZo6JZTDjkB2BkL6pUCzNg6gFG3KsXmN2uhvEXuvPycZd1t9jo3KGhVygX3t3ABEWMq5YHLL95bziem",
  "key23": "5Nxc1wgN8yXiv37RbKtmb5DqJVkefaYfaZGzM84E7FQxXuBSLnTU3e3yANja1Rf5p8MM1J8JzaKjRvQhaqLYTRox",
  "key24": "5zyKmwML5z5xWLJaFp8XoDm8bzWs6LSbrRi797GNjg1jmc88pWHVx3tZHnuUZ86PxkMa2tpisc4uMWyx7EnNSZWa",
  "key25": "3HHq9KguSyTbjGrhYNyErjYWCow9gvkfmEpFXJqCUKzFGgVY5VoCQ1TtyEC1T57YQYiQ4TtXy8JyQm6Fn9R2jevF",
  "key26": "3w2kVxrwUkqNKP6XHinGVBviQ64oASsjkGEDtzE1grdMvmDafekQpgVa65geSkxwaK81quanCGsav9UKtvGQTrvv",
  "key27": "4JxnaiQzBiKWQ37D81vwMS6YVF3JcRvVu7pb9p2ZjPqvkYU8GMNWhPmLt4ZvqTc2btyixccy68zcvAuJYxYoWV4X",
  "key28": "tBJ6seBuzUeucSxCAs2HBFbSe9nZ8LCNaHmLwELcMLnYzky2NPVoFBKQTa2QYMUSrwLJVqHGdWP3vEq8T64iDHg",
  "key29": "4tqdg4s2rZAgCqazn45EcLE2RGJR8rbtZ6Moi9kRg6sX6EFSSoAApLcMTsM3wYpMcesn7nLDV2j5Bzd924w4k9Rw",
  "key30": "44mAbEZf2hDSBoJXDRmwmsgVfAFYQKEfnnKi7NFvAKJAW7WsEGtCPaWRgLCGkedgFpimnFZncc5Zs49MyMRjBvkX",
  "key31": "4hJSxoRpdr8wVdFgC6jZHan5BpSyTtJP3a9RrbQeHLakFwJtKvUdYYL6QtDonbLxCUCNtZDTJYZR3YgSDxSpSEh3",
  "key32": "5nvd6Ac4AL9rFU5Piz4ki4tVDbcN1KfThNgxnmxZEh82LtpBFqpHdVZajz3MJwemx1dR5hcnmBU2F1cUiBpUajR2",
  "key33": "3cZ5TqoYxUwpF1DGvocmZ5qzBuZJHDVNCbpZQCpjD1jDRRpEhue3BrSkt9DW1Q7KXpLGpep4vMN5Zw9xrDLgVJXC",
  "key34": "3oAbue5W62ZeRCefaWnHdfr2HpMGinYwyYQuyiNatHMWucak4AyFnkso4nVV5BWXQswH6Mif32LGCRdnXkb8NMMK",
  "key35": "LnorDo9Fpk5Fnbzfe4jBGLdiDTvzjn8tSJHmEKMSW33My4HJ3bNRyV2ehPSCXu5im5ivLXZddrUspwRQBua8JuT",
  "key36": "3S3D6PXGa6c7Lk9WMD4Z9Mdz66ZMpLZBuvdVmKdryx1rGQmueat1Cjhn3HqcaWXuUrrsa83f3PFyysbN6C6QQpKA",
  "key37": "4hHY7JRmEH6FAL9jNc9wKtHiStkgYSpxiFfKtCq8LF8cGnbk19CAntTwFGQVxPPvnX5ASUxjrZJo8Zjhw4HKno5j",
  "key38": "56zR3aCYjjLYSqoqGrThM3XjjgofJzunEDzsYENLqWpAxrLeWn1RDr9kT8DTVDSEsJE5bEevBAfP5CsusJob3opW",
  "key39": "2ENCxHLPdyp9mQMmm5kSRnWT5JGi5uXwyqovoayoGcwRY3ypWEwZhzEjYmWGDegrjVvEbv9W9UkbhPU2Puy8x1kP",
  "key40": "4KtyFp5ykktsBhxHq1bsLU1gSVCVvqiuJWewkTr97x1fRSxqCMTCA9VPQ2Wj4RcTiYG495AuPT21SLjEwiQ4ZPSY",
  "key41": "5tTtTUr6QA91ikiuxgMkEAshtDfJqQggUV2NsbSMLuAgYcCJaevE2tfpFG3CJpuhvX16ey7xXrqcEWcLupmM3eay",
  "key42": "25Qh5gykDe16nASx9j5PcyaDF3HCTVf7GFmQSras3vf1CkNrm6cqQEhEVUMCR1PxWZfDtmDj8F5PnkzH9iyJE7eK"
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
