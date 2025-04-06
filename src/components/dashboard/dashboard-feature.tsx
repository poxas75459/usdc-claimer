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
    "5HES9gb3n2SWfJK4PXp9kh1VUb6QhGx7YmMWS7bVx8tQbX5jYtziVoU5eJHkHL7KtQRvug17nnokgPkZ4n76jxXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kBi2N7nt6k8wygEow65dPV1jJ8ZdZv9CnA3dGfGNrkaXDHJR6zq9fdxV23DKtPVsLnxsrzLxkNffgbTtFJf2tkT",
  "key1": "5LZRC6bAMXW91tG4a3pSBJ4GCvPt8Hu9X6MHiH8drj49qYgAjFNTTAyPM84PgU7tpfwWY6FaXGVe2ZnjFiqofnMo",
  "key2": "4QKdCA1ty7RPyJGhwAVSaYu9jZqdsC52YyLW6gAierDSdcq4CTujU5aVuor3MxMEmzaW5iKJTanoYRrP9EkFkCgK",
  "key3": "2KFB5jvUiHoyoNsssSYRHWjxhJirxvawtt2cxaACaT9XPUciR6hkK6z38hd9hrSfN9ZXv8FD7SrquCjcrKB1Ga1Q",
  "key4": "5vKbm1SEKUnj5vAfxTDnoZPdTVyZ2AGS391J5AprkGB8uMR6B3QdUoxwYsnBv4j3MumqWFiuW6BYgoeSqF2FWZcT",
  "key5": "2Boyn6658UzE2JrGSchYnFUhcXsGjhGUMfsjAyNMko2p6PycUPxpWbfk6b9kKTUykAKveF24VNxUmq31jkjiVsnN",
  "key6": "2y3mH52RABSYXCtFWCwirTjfruLxtnusqLtGVMJmqoegCugd9iRJWqwpd4UzK8hX9kcmefhWfTpMKwtiMeVe5v8q",
  "key7": "5Mh6LvKekZddpA6mimyXdra7gYaF2Ec8FRcfBfKBZ5dTAT8eEBwWLqfvG3F68UVJtrDZ1jWEmrtkvFS1trd1Wpd9",
  "key8": "4GhstBrSBrr9usbgpx85b7k1ouxHEURtA9bzaQxNh3Ep9i2A4DoJFVzFxP8cmM2HvHZu2fb4RkVAgj18T75pxmiT",
  "key9": "3qkEcwiVEX6BUXiBFj3zRtwmHc2Fxnyh6zomAcsFdpwkezMvioxESeMBcptYeurG55fNaCBiqBDbxhuYX5B1YN4h",
  "key10": "4w7CypHRynCNLpc1dQPrDuSSi4yNfeKYH4urzXxXXPQqg7kAbetxqg1VdbrSUfummZuVpxb1aXQkpbFD9ffRPBPF",
  "key11": "3shW1UH7BU6e6kmFn3dQ4p3qFxDqQscDUKgwQXjr43SBUD1WkQ5DdKsSBtwtNisjwWasrRMcNyX7NQwKn7QqAwK6",
  "key12": "51T2LJ2LprTrD87H4w89KSZrkKPUyRUwahrNkdR9MiGcuQujEyTeKYxp9x5iXYYavCuvKZEUC6sKtzrAUZNC4Ans",
  "key13": "58EFfJZJis1CStkWqo5PTchhBRQJPKacLR9Z3sJCXCFaMYKuN1sdbXFWM39YyXMbrg24qHx8vU6cqrtSYHo8veB8",
  "key14": "EjWM1qwWzho9iQ6ThrJyyTgZyT8ofwzfVc3sGqXtn8rondn9tsq5Dwr4vU4oRrkYH2gU5s68i4rgQ9n7moJQ6iP",
  "key15": "eMscoVEGAYuHpdvFbApcNwFhUEmhVFiShkryQCoZEtmYz2eM2apSzJmyKyk1FqYetY3SxuSqyh3a3Genf7MfZHA",
  "key16": "3qBGxFSAAB3iUvJ2RVjg4mfAWFNGqnTvhPDhbWJwEX7d7pawHBJmpCP9Nak2ZzJn6R5AJcEpESazsYZXtPsjWBXf",
  "key17": "FLHLQyhTSVxsfs1nx9jb1mRnxQdy7SMdxuJ3JLsXu7FtLQhHqPY9K6KBDzMRvDSwctCDs28YGTSifejvWrae5BA",
  "key18": "2Dg4vzPJNjg4qedWZqLUz1kSijdVJLj9iFZbhfFEZTUc88agZi9JRr9XQVfewfEmAsUU1Kpzo8U1VPZZ6NapoWvj",
  "key19": "2rex7edJrvK1BAA6AmdVva7BimhUCrC91X4gHSjY645nVJQm6NPdd2udg8Dja1GXZ1RoEnrb7Hv7BFCwSfNT7Bbj",
  "key20": "3AXGtWfkqper3mNzt49KkfMGFnY1bbedcpBAVRVQYvsupa68hVZT9cPkf39wbpMDZCgykukVzjuP71DTN7LZMbYy",
  "key21": "5LYEv14ahLPMjX3iyQaLiQkFp8qPPnKndvA1ZLkRVPdEyncqrYcqBYXxcjoFiEJTXPEE1XQziCrspVbL6dxvvmV9",
  "key22": "bLUDLVdTUhjko7wZoC72ER4ZwmYaenReNSbLq4aLmXCzs9nmWbQYqAdDPXqwERt3ataffeRvCM3rEtDFLy5xSsA",
  "key23": "3iz2AFgaSgi4VGeriAuPr3hAvoH6MtSk9tbciJ7bWWRawSKAm5SEu7smvW9veYmEExPnvVc4C7DVrEhaqCqMzG36",
  "key24": "4aA1nHNxybfMc7bEAMXTrKgFvArCGYkzqxM17b5E2jcqSCVV6uG8mWS3Pu9RstrcEfvF8bW4EPpVeDZ7qSxRHF1G",
  "key25": "1VTUX4eHh58p2fjhSJU66STgZqobhk1dNobxB9cr3usbv4hAa2JFziV1FPsCbNJNK4BW9EmPALetTYdxXPS35i5",
  "key26": "3ZuAtQHLwJLoXszgqwk3W1yyH8Exq86SeeQurjJGMgjWuS8mtaNo1ZMi67ZbR15J8eD5Hd2BqQ14WcmbFokJNu1Q",
  "key27": "Cy1h7BPAYupHrjwyciVxKnZmx89VRmQGmPv5e1yTUbYRc8Lra8gfP3AgGuheJXv2BugvXSVZxVc9YZ4X8vHS6Hj",
  "key28": "5cxZeGyTGBAxo5FRBWRmS6W98NRhxMXzcbUQX9GdPgcoxHuGxCRc7gLv6orTW3boXgMJP4pt6jXPHG7Qzj2wM6Fi",
  "key29": "59cEfsNTMJv5eg7oVFihccjAoCxkFZrrFzMWSgMVzVyqNQDZor127ebT65kvymnoGeZLh2XKgRTiKFoHY953AMFB",
  "key30": "2miZLi7g8wSbwgoB5vjYTW3g2SNQJo6jbcKipt2ukAqDiVHEp9GoMNJRjbc2KGTp9kVqKgH5qg4qAWfnQQ6DVKRZ",
  "key31": "2axkPVSo4H9me7r8XgdenU8iHB43itGNytK7G8f2RJJiqqc4ZgWC1KUaZYnC9fwByLRnX8G4faSLNkbH9TTSWn5f",
  "key32": "Ne5QGvQqB1KhDNFH1kj7M4WmFtFff5ZLRErFYe5eks1y2yh4c2GKfKPzjvAKJkxBNhBUqS2UivqPqpDmSdSJPez",
  "key33": "4Q7TiZnTmsqfE4thstZwkzySPL3kyHsVUA8ayWSbXw6PncbgMfhcux93mFDeFQUpetB2FPjRkDCvgJELyC4Gddkq"
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
