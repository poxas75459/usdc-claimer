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
    "3v8NiLdNJfXmDjssVsLKNz4v6bXKg6ZmmHCVEwgJCH4XD9R1sJBJ3HensNPpd5nhG7DgfWhNHhUVcXBGzTvGdnMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42gWtvKtaeZNY2hL2wtfeMx3aCh6rjxKYxMTjFxxJX9DfJ6jgU7hwVSEvAsmEPkifgsrJWYDWubxjtWZxJgGYiq2",
  "key1": "53DimiKbeih7YnfNyHYDCRUqR1UYF9Sr81ngBg1Z8sT3PRWU1FUycciy8MaWrHnE2QbrQMaU4BZXp7ZvWowJavWm",
  "key2": "YAarsLf4v8CTLBY2gyuxCtDjSE7VUSkpHUpJ9uy8CKtVpqVsLaq1UzhmoYkk5dm6G8B422PthiTAbknx1Ns4oap",
  "key3": "3Z8RkmaNEM5bkxLgDRLBw87g1RQ6DtkuUt7YHmNWq6xFcWewAAh7ETePTT61TH9C8uZ216AVCqvZrFn2yHQQUT7z",
  "key4": "4nXYkjz6ueXQJuixcEVvPqdaH6KdyUCjTVWsjjN4iHe2qBk3x6dDaKXhCFxiWjnftYA1xD4EbSmyRdjX3zUQ286m",
  "key5": "4s1th4349MWdXPJzoncCCjjpssjqD7HUjxwEWM9maLX4wmbnx1MNHzMdPBQXniS3KnyCwXTYYML4hVzDSDs4khUk",
  "key6": "e4qkH89kESHntATYh1T9kP1TBwh62Q64MP1HwToeuscCfQW5TgRQazRtMuYsoiMmvZJuEQmAvt6vinrkFpQsuWA",
  "key7": "XYqswapvMDEgy3wZVrhh3C3noZ9uYdPFRVUShKUcSVTrqwMX2Rd9P9kAGG8GfcrRuRuagRx2hh9k3UormFjvFmc",
  "key8": "3KVtPPM65jdgjqEzrtrXEqH2ekYQeaZ7HZCgYjqvMYVMENPCdGmi3cYPoex5v85zcbFU3YvrpVkirYfUCc4VkY5x",
  "key9": "uu4Y4HfqfujbNbuSkvvdpudfVc4sPFxV6g8Xe3U1Ci48otF5i9npdSoY4VTn5QnTpqYXqH1g9vhkdjTJPL6mvT1",
  "key10": "2yNc6ZVmK5tKumv5WLheEQigpUSsWBYPdUiUQX5eAfmrhJuRxgLFvQfCZZXE1DuXppGD3j827AcoxFnssxrB3cXK",
  "key11": "5pNPVuFr1EmnECFBoq838DoHBfXF7JSKiLc4vyvA61JGc6JQJEKFM3TmqBdgJRQPQPGLYN6JmPViz8TjCxUsFdrJ",
  "key12": "55RVLSLLoXj17ofaButkx7XbqecUMePZwJqfdQCfSmczeHWzq8Hos2vqrGxDUBt1EAmx7vsXrNK4NC7CzFtTizTQ",
  "key13": "5FRWCh3d2NdGsqqsd5D7mGyiXyAS2XNkuhsBdmgVWM2htyDSHn4CU7fDb1du8YvvjydrLRhRuTXLLJrhN8TjgzxL",
  "key14": "HY1LUMTYwp8YM7693UYykjxgBpb6eP5h1sPhoS9gAspbMzzT5FX6XYPF29AfZz6VfNQjX4XqpEqSxnMaeUR25nr",
  "key15": "2QRcjqhqXMeoK4pqdkoxcZ9tfYjhZf2C1SEVGhfodoBezVJ7fmBL7V4kLBXtvcYUuxMnToFcdrQg87LtTDE2t7te",
  "key16": "3heF3cnmG1hkYyVrTTzkKgkV73oqkfSFJqEGK5SkvmstaMSohhXgz2yb621rwk4X99k5oTtSfuXV7TKjHnwkrN3h",
  "key17": "52tgt3y96bk1e9DmGxBAKJRdZXU15JerVjbDacPQwL47NEMxYaUXZrnvc2W9dFKS9U6QdL3wtaF4S9Bx84xyMxA9",
  "key18": "gZRNTPmGtam8ann65biv3sYeJgBJUKnvhc35UVbN14a4VVjgLfKsuSc6BnnNFUApCSnWPDoNY1yXQKvMP6AeKJa",
  "key19": "2pJ4X8u14KXuoYw7pjAtWcuaH4DyF3BwU5r2Y1KrfNr5btvzPWvwxhH9mXN7hxAGYn61u2xSRDZZQoJPmeJWb3WF",
  "key20": "DDedeE5goQni4XZuAfHA9yFYw31eAUjzvpWMjM868i5XLcma5GZABT3eWnraLyVQqjyLA3iVpXXUQ8Zy6pDNdFJ",
  "key21": "2th4eSny8C41amGqSPb5LgrbS58KSgFAr1Y853ctsEtpNEPPijiqyc3JH2k7jrLbYm8ppCL5x1tRYzSuva7ZPWL4",
  "key22": "583A8RD1emZ6VsEuBNT1K5ZnuYZBeBWuCAhJHMgdz7ZFQ2r2RimroC3rQWVwrnFGS7cuCodQL7UjbFxK43CvaseP",
  "key23": "28frHdytq98XVFsGqjrrnwQfaUosKHo3uPymjA6dA2MurWzZXcJ5UaaRR3mSqahuaSNKGA6UQYkYqrfcr5VavEqn",
  "key24": "4fxZU8stuVHbdSduWrEgkV3WVxL7vEAuMTcpQAEAMrtYCn6uRuTZqsCRd5iXhL8X4zKPYSsRNFZFFp6U3M7FpwY8",
  "key25": "KnHpwgQNZcvZMnfi3vqDWHGTKzXVGaoNJ7jZ7Fg9biuB5rwaQiau4Fz1pSirzem7fwGXf47SAPD1WxQBmVnNk1k",
  "key26": "3KJDX5UkzcdSUqYZQP9AW1kgna38zDJF9yfzP92CZFpi7hAvKX9HkA3je3HghGZDWRHKUBb2g1A43Ec5Gai1xGFu",
  "key27": "56URnwZiSHb1d3BQeuzTHHvZt4MGtrweXU7Xgr1cT4tiAuAtV4KCQeq9Fi1bihe6dfcU94o4EmYEWeu9tfZyykTP",
  "key28": "2uxuq9oKb7X14nbFRKyzpSHwTnHzsx2GRBcXWfA5tJ8mTvgqghjtLkYjr5PjytP4Hi79C4sMfGpKNxcch1fxfmjA",
  "key29": "5Lv2s23N8ZUfB2kQbcZ6Nt4zLwyfvJ67X9MS6SoYSm827MrVF7dNfUig73qr83jqk35ajipgSFgBADGhXf9jmiXA",
  "key30": "5opW5EG7w56Eht9MafnJUSNsujLAti3JcWgSv1C3jDRs8xQANto9MEd4oZinUYYJBJ2Bx3V7DTrS29MkH7ab1a16",
  "key31": "41xgWpfZVfFe4c9E73img9nnirbd2vY6hnKGKFgbgEhrnTB2bwXVnBTgVV88qHgyEUzmYioWvNDo1TZHBYi6ikgt",
  "key32": "5kwDu7RVZKybGfUyDYZ4JNZ1UiEVzfuCWDpup26StLjU9FGG1usoEi5jo8JaPE9vYptPUFrK8gmba1nnTVfLkbrN",
  "key33": "2b22YcSd93L3jYE8vKqEEgMRQJJsg4h7agsbPyh6zUdPnpgM6k3ZZHovRMGXjuUQNdrv5giZu7RhaZ9R9e5pMXSy",
  "key34": "567ifDv9RMNPSMifTrpBMiXZv7yPHPwBcJosCzDVPCQcnNECjSm3WnPQFBQZ7KaRDhWKxikciuejJm2gsjvmJ7RD",
  "key35": "42gfSFXjNKKb3RPuFFsitEKnZ42EiVQvsvUA5xH7FaB7SGQw3EP9BqR8nSzqkUVbFGqdp9uAdub1inkt39AUkLK4",
  "key36": "5eRUCgPzyspT7SbCNeztf7qZgtnfVu1xWPi2MYTPStiwhbhw1LGvnF7wX3i7PKAfEwoz7XgYcJEKicbSA2epsSmE",
  "key37": "61NFvuqe8Dy48tVVt3xCFpFkTZ2eg9GVkcmi2fc5zVVCZ3fL8TntKjkbJ68ZHforpye4eabsr4TM38R3ydWmFw1r",
  "key38": "3QtjsdNh4BbTPV9jzZNfiwpB41oNJaeBJLnS2YWeoyq6UeEB59qvTniFNcq7TQ42QMCdYEyBbjRs36YH2wr2ACF",
  "key39": "o9VkXShkQLpNXjnLhbCCdHz6yzJwe1zRZx6pWmphEaK2YxD3mrUpoGMNK1cFGXZT28VeVvfWxvJDoLjjuEna8SQ",
  "key40": "4DkNyUM3zuheJ5hbtWTZsMLbDddGAFQZ4JouyWGTsdyDJZt5hSv2x7HYYm1hQnxg4wtEgaekS8rp7pX3Lgqqp3ZW",
  "key41": "5QYVgLfF8NotJ9Ziu96FPktJ6Zs8ruzjqZ3frGZxdFnFhKAJWp7bZTUR4daWcDiNU5RMs41ZSGiHs9NBTvxtzth5",
  "key42": "2CvwK2j5piozwBvHsSC6CA1kbF4c5xMFSp4nRjQAJdVxSVAaTZDvZLoXwLf66k3h5x4uDLqWbHqQ5kDjhuCGt4b5",
  "key43": "2dTjFWNnDqjevAnjFwcmqgH1xcQzUQbHbWyStqtZtWzQmqwKdv8ErjJcbu2Nc4rLb3oKuokJFmG8apVoAUuTaBCc",
  "key44": "5JSjC8jzJwjwufQYzMHMSsYPZdjMgtYHvofYuYaAgPw1jBzXJtGbXnh2DJv1dTw3G3fg4mwcyJuWcVdet5s753Yy",
  "key45": "5kAyCUTBh1SS1P8s1MpJ3nRWcWdazr1LdcBtLGmkNerJw9oT8hNC6u7LZNZGfZn9twiowER8GHchQTjqb6orgkfv",
  "key46": "51pd6LG9xExEgVWjkD6j3Vgk6TDrvq6FrwtpbT3sq78zWGXzYT6fot8hPNvGHMAYFhHUaAxuuqVfodcCMFhkJAXF",
  "key47": "ipUP3LwSerxUNUVkiExwTmkn8J82gfNrTJxznqLVnvoqy9JYK2YLBswMgPEFJXjkfqCgWXUCJeHDFVJzvW5o2oC"
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
