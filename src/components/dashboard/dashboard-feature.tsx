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
    "bBg17naWFu5DVeqcKDsbBoAqaAYF1QL37NeJrEZP4A8qUJfF1JDurHYfgbWTDpGTvxtxe3KnWCC3vGqivqgL2Rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TxRmSATC4Uq7WStJm9Pu6rdhNqDaZL2QCqDgaFTM8TMZt44D6SNZ6xVApEU27hnyeDwbXUaKscHqLrXCQcwvyi2",
  "key1": "4BUtihScQ4K6zuTZxV3xg62aVxuGaJxpAhfz5W9PzfssWSG6C9VEvq4PC4CdjHM8W7kicFpqTAj2AEXnCLGevHnc",
  "key2": "3MRC8jCokuWqwX1Sg5tGZbLf4geGCsMfgiHbAky6V3NzgGXBXfiLQU6Rs2t77pE3XSYirvEqrwQHR8CsaVegdbdW",
  "key3": "5W2jEoM6Vm9BuhbNKzwSwdfW2A9odUbCGPEJLRacnuEbLtRPxrpskoRf2mjKd1vx4WaWVeeJCL7CvSjpXXsJ8NYR",
  "key4": "oA6oYLa7qSqrbokvLcqFBfq5RwUXSky2xvjqBxhnNhLGVMF4T5CNENbC15VkR5wovoLo1d3RXTQkMWMaNoSCiYG",
  "key5": "3Kt7ReSTuCciv4bTzZwcjHxyrzxkXHkvV7ndqp5CSiVAzSJSanBwiynWEuLRaGJMSHdAtRicFEhgSPd8FErVvX1X",
  "key6": "3yXquRPxrcGXbP6T85VRE1yWRq6AjDGnwPZTpSbM32GzEpxkFnsgzmNLyH4YL22bbXZnqLSNqWQbBsRjRQQXhk4M",
  "key7": "4XquFEbP1UcGV8rcwHkqeMMRgchEJxhdpq6XNkSsekTAXDGDoeQDR6nitk1cog1enW4MsZQXEZfPRFVs39obMDoi",
  "key8": "2QwPzSkHVX7p1Nb35MuDQtZLcksmuWcqJwG793s95ZSR7tC8okfNr2Em83ivTBBLzrn8HoLY2rw3hwXvLArcQhVp",
  "key9": "2R4r1ckmop4ptw8hLQjRYeFSDtHqp41yaR62FAf23AfF6LbShXd2o6zYfQAhtQvbTFKgMrm5zjq7RtfU2QuuWA8D",
  "key10": "TC9kEoqFitnsbdN221yqJ3j8nJS3N74fkw5oqUQckCEmM95CFw3xb8AwWMPDKAx81u5EztUAxnENDbkDk2msE9S",
  "key11": "5xt4HtyeoStkxwr9892rxD3XPcYL9hdn7TJGdUCVMXywwpyPeyd33kGJFK8iJhzNm8GUC6sNXCfdvMn3rWVTN877",
  "key12": "4CVmwcJs8uWqEAqxkLiaPgRRjcWdda6CYUxbXZCqcv8jjtGvZGZSyzbkp8nzf5bSTicDw5umonHLiwWgn9gSEvac",
  "key13": "5o4mK4WgLzTYRi6FiPmDmxF5DBNUw5GohNDFmFc6AKgd8MgYrDk1cT4wKwGz3xtQkgMHHAUUDKEqJWLoj1ChX3rN",
  "key14": "3TrGEKWA3YZR3xE4dGPR8ma8QEaJRAD5s3gcfwaApLbpnucpFjg1gUCP7Sm1ZKM7qVG8YZtGaMjq3hbvejgH87nD",
  "key15": "2A2VpWTkifDrznWh1jwRQbRPqoaD2RWtStHAVvxspjJyd3mCta25tQuCgAVTjpG1Vyqda5Zfg4twrzMjhSpnGeqY",
  "key16": "4PsbFFZ3ZHVFcpUVDWryYPgCx7YCrwJBytvRA7EeTGE8AvAhCtaMJ58LxBnCfxmUiMRfCHmjV8QyUC1VHV7wawS9",
  "key17": "4ZBvQwrK36ctiQswpBjkSrBkR9RLVKcS9UGRjSV1JAYLBqqhHsA1cVdiCrzBCFR25mz3wkVjvkeQt1m5gZbGXNw5",
  "key18": "5CvzDJtboNdXeAENQFpsv8aEohfZu577D48RDxPCsgnZdzhCAKif66rL4tpfgJZgEAuVcwwHz8hP9FLmxvZsY8sj",
  "key19": "ZRHrTFTD7sCHU2fscmtYGe5vxpKc82D8DQtrNUr8LcUqznCvPCRpXsqWg9PLV9wNRLRvnKSmdDcd1tuqp4QQFe7",
  "key20": "5sPgCg8uoUFx7bD8H1SzeGVjLRtFb3Y3ZzTLwXi4zFbCD5X1Po7W6Hm9enLYZrnzmduzgHjBNtUitdF6WyK96n8",
  "key21": "62J1thNwaiSHNqNUh3qLsCtaWRnBLkknfZFoCAD9VZskMaw7MaUpeWrnB2NSCkH5zZHePRWrmeKwKDDejKgDn6Ai",
  "key22": "62jpZegmo3DGVeDrJqzk96gD5VjysnPiYpBC3VXbAYxcjMEwWxGzhZJsJwDvyTdYUVZNhZ7kBXkjsKf8P57XpwfP",
  "key23": "4VLNjhx42VpesuF7GkFpcmRd1FEWnFdt1CXsN2vguc2pqjscAf8km3vt793UNWynD6dHGKp1PXCQHcYXcFqyx93r",
  "key24": "5coHE8rBjxEPvaWiE61xkWmQsUCdMdWzRT2tyiVbUaENr8dKtVfhvMrGcdiYEMjeTcrVd7WG42a3VCEYsEUvCaJz",
  "key25": "3c76tmJhRahhUghjM73KpbQZCJ2ahzLfqEEsXbxvjjFKpc4a1U5XD5iPhu2JdSvv8EiSJaaKayJBqeAJGurh3fvv",
  "key26": "4AJmQv1yUYtGCaiqcLGmpo9Qq75qhRrJ4PGgEMoaua5qYB289kEjbsg6z4zLQEr81FP2SMFuVg6N9VU9yue2PN1h",
  "key27": "3r2oPN4a42Lk4H9LNUMNxjdqeTcw9PGYJHF8YfHwJDKsDTmJvQrrVZNjRwJkttPMvfCtBKUUVBhAhR4bfPbP4YzS",
  "key28": "2JM5VPWQNEt72G4s67PW98CRUKkhy5tbGQod4caGseCC8aaVYMm2UTwZkhmpmhbfCSfjT5aYDePRrUzex8acUNU8",
  "key29": "4xWrQg82HsKhuNs8Acby25E96zvFzJo7wqsoMoevPQNo33D4UfLyKMBUGM5nvGmZS7XSM21mFXUFRa111fMVJ6VH",
  "key30": "2N66SuTaFAmeAGQZptQquUZgfub3srfB8YdYuSPrMiYdbQD94idS7FAAVXz1LTGs6X9JK5guM3yNLsCATKQQYhKf",
  "key31": "53ygWTr37t2GsCUHqg4v72yzhNC3j1v2mxNeh8FBsKERbFga6gqKk7R6VkyvCQxKmPkHwevPjDS5gsnqwv5ZS4EU",
  "key32": "65QGc3mqAcEPvDbxkaMCdcrfZQrmZhUbvZBKHdw4ySCeHu3o8rCectRZsKZcrVkdusVU1kXD5UTVhtqfdY2gQ3UD",
  "key33": "5MGkjjFbyQsphF6sqY7wemFi3Nkj4x7vtAKqguYzNX4yfXA3Kkni2yRkAyzDAgQzFTVAEf3RubNfeEP7YehK8r7a",
  "key34": "2rG3Nef7PugcBvvC7BpvYoxB3Wct2guUH5Hscmb1oWrTJXQBiSK9K6VoWk3d1HUyL8biJxE1Foe5npDnoVi1rfWm",
  "key35": "k5mVsC3VD2xkQuATMbYcrtW9yUKozpmDMxM52TcmSn8CqBur2ciPPEEhSrVbJqNu4VYy6bxePLGRJg3LavHMJko",
  "key36": "4njrbCULBo9cCmzqsPdNnQ1T1CJBKKMx6gD4KXRQSjKu4VZt1X7RBUqaz1VVgSa2WQ7wvSc2jB6mcZxk5Mv3Sjgc",
  "key37": "CFTKkvMdYSpweiKgux1w5N4TnrYAfPzb2ddsktC6X7aqvto8ze84SrcNbTekMHa5z7zXz2rrbwzjwFi1dEKdtyh",
  "key38": "2xH9nKCdroLYFy3iz86WRhCjorBd6pbLH6WqwKrLAhhBeWypSuJRe8Ar3pTHx9Yx2WUPsestWSj8V63qZT35S2wt",
  "key39": "4KXwLNfu9Fa6KzZn7Dd86ntLRpzeVXYdgsHBDoXV1iuhYeWYPsap79nf2EhTjysGbkcAjydFtzKA2aCEYNa4XG97",
  "key40": "4qatQ5N97Tb6b6iW3VFreJ6u6H6fbRsZf8aUYxG2iPHmAXzxA1oL8XCYBLifwAtwdGBjH2pyEBvFGocykPviv5pX",
  "key41": "48dtyQzAs4utbxLZSLF2sZpyASzpJV1PS7qFwDrWbJKJ62QyJLtybAfLqsj1kTEMkZr2PsYGEsQN3UaSaNJUAFdN"
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
