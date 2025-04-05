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
    "WaURyPAKtfxCKi735ykeWoevNqM8dncJrVTwYMtCL5rWE56hbgU8z2J2JbpSxi3gRSEJozvQe6WpNFL2M3rcgrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AJVUyVq6D7CgQrMALWQqWvk1PmKLSvoWUxeCvqcDANPSANg5ePUgSGVU4hsUXhZcF8gq48qxFs8nNfavKwwiPK",
  "key1": "2jc8UbKuR32ELmfFYpX4Qhza19p43CXXhcMhLmtHXhTQkeEgRwfaTxWcrVbim3yxCkfjRExGi9sfFNnNEVWdDUMk",
  "key2": "3JLZVgMfkVc3tet8jLKLLZrphpHAkvPjFfq8GF65AGV46izG5uwnn27DgiwthT4kXL8zczow6XiawgRuHm6BRgab",
  "key3": "2kViChXt3MD12jdUYjWLtaMhKRNaFbFjymXqTR61cxiNWbk8amyyt9LfM1sWdqhXmomPDeL56J7TQNMN5cgVWpJm",
  "key4": "2aruZZa3a3FTXwkCqpckY8PkaE5adQ9nzyMZfRu9iqhgEwmEcakX77y59gUUV6p248zwJ3ReYt5UoYPoYxbqmNDY",
  "key5": "rhQZBvXF89TNk9DdqBxd5kFNcX5v6ZByS9YVDcyAFYMrLoAuiuG9LEJ96kWRH7np2TnPcfXi8Ee4CCUv8HjVbbm",
  "key6": "BGU47xg9Y8zGwK63o6vSBZEeu8gAxM6YpbFTscvRz3Xfx68NV6ShE7w9vpkYwt3Re2fwHpRP6EHYHwkokRxb9h6",
  "key7": "4pLTHMHrsFVDjmxAdU8ADug6RQn8x83RTdaKFaM7ukj3cfwhuMs6q3UgUbuVjmvEukSC9ReKcbcFyqAPvc3CEia5",
  "key8": "jo3Dmmhp77Pt4bP8RmeR65VmW2nadisxm5UNjsPHWq3JqPhruuacmQvkXck7cS8Q5ivQn17PgV5xgMcAX51FiWj",
  "key9": "3B3LtLrwrS4GGdVaK4n1uASL3zd7dE9PPCBa92Tpscj6iZQFebapqXcyNV4TrmzZnsU6sWoJqyzBCCuPHoyQHPoj",
  "key10": "2jyLUk52sGZg1TpkvEaJzip8UMVFGitxgxStHFqYwfd5RdcD6awTac8nLd5KZqeKRwPyHrSMzggtngYThzB3PBMy",
  "key11": "2ghspnmaTJs7nLHWx7Ydus4tJSCEL3YDhFNuztaMys8VH6Lany94xnBHkjRtaZep6peYZerphsoQkaZ35PJuk3Ra",
  "key12": "5tK57mxo6hXVXYdJHbH2VQr2SSkwYqZ6UXYG4S2VGbpskfrTum64LDpSXF3qiAaf9KkHmqaZ1JUB1gZBLdYCdra",
  "key13": "DG1xi2jKbWv5mYeEmb9WN1F9vaxpeLMEwsnbNpPf2M1YgJvH63bUcTkzd3xytUG8sotsaztzvbtvDjQG8xAGRY1",
  "key14": "3FuzWqsA5zvu83uRqQF3smqn6qmbvhrcMdPxeujKbjtEMWTpnCotKczZUyiua2UXnJWh7JKi1HLTTZkyDhPMx1MC",
  "key15": "4WTxbPpubcw9a6r9WnFMiJVGDBUcg5KzjodCPHo4PVdhMxUvqT11DYv5h6wSCHrsVFeK1Nh5vFFCAgmyQXQxiL9g",
  "key16": "4XztFPvq75kjXchGp9xn55qwhn8bGRbTnxdLTT7Nk9uxo3kqyiG3QspK9Wbqsot78R2sb2jQSkTfSeSQmmKTmBxq",
  "key17": "4MsvpiMSgaVsYZunXSq8WnsWDwrCDp45XgrEGDocGTbmvxz4gjuyyiKPQSHFLyoA3C3J6PfG1HgTrJrepuG8MNTN",
  "key18": "4r29zzuJ8tFnuCm5UXxeHD9psVZACq3swJN9RFteaS83ar8fjpDyaYJ8fyRK1nkZXJVP9cMHUpu2DwLndLcpf9Sw",
  "key19": "4g9fvwEfUwpvgC1SdjHQiRmw52nh4ZWPGp3CAfGtkM2n564TtrQoSfkFSfZ5LNUSta8JRPfegS5GfbhdK92vzqDe",
  "key20": "5Q8f7HA26Rp9n5KGdU2SPF12ykZRBhHnKvtvVxK8aVViQwz7zhyewFCaPbs3vTrXpFkBXymKrfsEPFpX46vVPwDp",
  "key21": "47EbGsqj4qzdUyD1UC3BTYU1DGTDBNJaksrZKGcPJYce3BsoY7hc3mRRynEmgySqBujP5zAPFPUAGpmi148nMZEi",
  "key22": "3kTTnnYFG1z5s9nCao47W7pps1YizQCrq9qHiQ8QZ9vp4QLRfsYhMf1DfLgsmERVuyiWx1GALcNnpzou6bE8hwGu",
  "key23": "4H8bXFxGGkDiMWgCwX1jEwyTsLTYMS8yU5cj6QM3ArTYzcgj5SdjwZjL1X9LwVupA5CjL2wQbzgfh76ty7e6QPb5",
  "key24": "4hyYLK3Jb2j11w7Tv17Cvo7A47B3s3rXPRjtrngoVuuoQrhcCADNjSnEdu5XMpYWspw2K2aPHY56sNa7UqKeKKuT",
  "key25": "3wgBju2G7uiLFrDY6G66Gw3BzUQm9ivF1wKoiWo4hcmL1YaRWUbepEqpzb7pXHHvVJugBZm38t86QCXbNTbJcRE7",
  "key26": "28Wf7athzsuSJAjP53wLQAs9gw3oNvTEYN52v5GD7VipjMfLSpzRHfFqKsZtYWeV8UNDAtvYHHZBwKNoxpcBiRP8",
  "key27": "H4cUG7TaB4N4WsrSBkzq4mvG34J9fbesPZ7zvfSPqXe9MR5rkCs1gfZRiQptJvwBs5GVVrBqKyCciYxpdjfrvJe",
  "key28": "2vG8VLjTzt3NK2HwgBKEWu8ULNCLXHQvFDRehoNM36k3ByTF7ihT5SDXFQvxuib3EcUgJBV7QBsyNqdQ7ihaAodb",
  "key29": "5WLii8mYGbvq7tAKFPReQU3BaHWBTtPXBBNR1XLuXChZvtvLCaQU9aNXthdFomyZAhug2nXvwuFjX6pXdfALW1xH",
  "key30": "3xVeQyUi5mwpbnjVqEqcWe9N4w5ny2winFzrFSJTZGcFRATjSecdpHGkScu7dYC56KpQPwuTotxhJHDTSsm5Qs5q",
  "key31": "2Srwiv9CUb23aqDucfzqXRBaCJTrppVNEMBPCYAR4nMZApTmuA7eJd9d4NM755A4WynttkqQZPoD3bF7Cb51Pjak",
  "key32": "54KeBuPXjEWvyVKbbwusJyZngunPvbr9SjZSvZph1StPrSFsEeoh5tNV47G4hAnDX7ok5RfExKmuktVd966jpiY9",
  "key33": "5iHuJ7s2ci4dRLEoqyxdRXwJizrsGSuERSgvoTN684tAaPMcmGRLXUb7erw44jfStwc4XWr5nYPhPR3GN8pwaGFT",
  "key34": "3urxaHheUkDK7TYY9SX8hYvMbgYYrhg6XWTD1Y5JauEWZnmymMkqGR9PmhmPggS3ineqki2utDKYU74UqrrVWAiG",
  "key35": "47wxBD3uEW84meFpqPE5qbwGYE3KKgmmKa9Wudd4xB3RJKDsg7Y4VMjWE61RkQrcSrWM4sM5hZAnxkPxES5K2gMV",
  "key36": "2pEqcXyqqU1y2AewXqxfKFa1qKZcjifzcSuNkqXEfjTNBFp5YYq4UiGk5NKrXUdQNvwFoVM8oujxDsdqSqJJL6fb",
  "key37": "649GZtJepE1jdYKdpwCSUUsx1j5QoEVVFbL9G2f6j8B1uLioUJ8aAF2wzswMub5WPsoZawch5V9xnya7kwZ9d1C1",
  "key38": "3gJyiE2Q2sKuqZgau5SGfUhoyhQJicS1xbDqxqpPcxTRJVVMfkz3e6Xx3kCqYEhRqgY8agHLhcoMPyt2trQqnwzQ",
  "key39": "3f6M1AvQTikWL7qJx73rr86ja8oM36LhYbk9VccVVr5N9ETPnX2ijVa6zVG7PoyDAq1Pw1kPbypaiCEpRuGJqfqv",
  "key40": "1i8z6nVZrbComGkqnKpTn61HMYZEXPYKjy9cHc1TvtZNdoAhNk1WMuoKbfo4c87PGSUbcw7WZHtEemC23Go7r9t",
  "key41": "2ap2uPUMVsToC4yqtXyhjzrzyA4XsEun1SzqEXzNhoBtBfdtqWJT1J5NM6TRDxzeJixU9Wr9HTboydH3VPUPjV8v",
  "key42": "486p8V4HSHfh9LWxBj1xrNgsicy4E2HT2FvkHhCsxbWFzz6WQYTwpGCKKDn789CVwXt8XTWhzCY7aPe3UMDrQia2",
  "key43": "4n17t2XjFgqfx7H4WP2xWyZdEAPVMYmJTHSH9qF7jNHoQ8GdpQjyYPpmxNFB54acJrkXmapmwbC3CPucWuCuZUxS",
  "key44": "YKChGwF6WcwVZRQasMajRnR3MurtDwEdkFRwi6ofJUPU4oTSh5izhB8fP2N4DoJtUXa3C83zNUcyKMgwtgLvcfz",
  "key45": "4sSPh3DRjtrioyosLPyuT1nXh8Z2DsUzzYJMdJZeepyxQtRhePeooch2Kr1gSiAqBRPRnYkDpq7cFrvMGiKQJy81",
  "key46": "5yRgPTGny8aH1i7ivjnPkd2hgAhuGUrxCkDvKteFmgFEVRyh9ixAnrM4gbsL2KaXWGvkW5pvw77Wi1WHGfitKS16",
  "key47": "3bJiV27UoUBXGNWNkDW3Szd7wud3fFaUdxCDHuMxifGhR6i7qwXhb611D8AhUR8mvMpneZDjBaRAeCjgNTKVLjxu"
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
