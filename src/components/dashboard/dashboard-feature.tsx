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
    "4ZGfWq9bu2bbZhLpkbqWAzqFzrvodNhxQPeZ8DTugs9i99UWtufWWDZujWGfdXDFXDiU7aJf7gDWAXiE8MCrC4Nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MtbjS4JT8g4A8zb33rnCHkLznqfFX2ijAwjCKCnJzPYFVrLaEp1crb8p4CGLPZc2Ec6zDrG231e21cgt9Bf8z6q",
  "key1": "33hRoNmEv67uRuhcUi6m2SNgEG7dGvUqxabCD3JhrRZwM64iRjpMwqBRxxbmLV5uN2QfzvG2BbmnN3pDGR8q4GSk",
  "key2": "5W1fdiqdLRDn6bn7E7hKRLYMKVUr2WnPKvcLWUcNYmzd8FhtGpgJA7Yhj3oWNMoYib78Z1R2Nj7j1F1zBoRN9opP",
  "key3": "JCHgXYiR23Nf3bsuqHksqf2pMqUpbz1ewVBY3ZjEcvceaSRptWV4jTJErXu564c1wKJLroMPaJpU3j86fEsYu19",
  "key4": "5zjZMgiZuFcxfMyP58bnPQckzgJcPb4sucJpHNki4uW8p6B6g8ENuCXJZGBecoZ1kMksZLjMFdkGNcNn6FJQ9p2y",
  "key5": "2bAYE13EmSbGkX2jgUNHHaQhU5gQu4WifxhVMaC8RLV2iHQ7fuaSUNbZGrKLQ3d94Dd6X7mm9mM7qTjDmuBKhtSk",
  "key6": "tQ93BYdJAEDbjSL1MytgAFEc3VxJzVd1d639p83XZxS7VGVffZzazgeVbfT59rUwhxRbyyf8wPkwpPBHApRicmS",
  "key7": "gLBD3ee7jK9f7ZTvQ9BfgnriD3wttXmbDztjvoivfU4ZEvJhSKJvcf9dsbgKq7Qu39qStRswSJL7QrUdofDzCVP",
  "key8": "n9iCrUFP2uEe41vPczWX5MN3TvFNZ4bK2qLQAtiVk3NkNLFCCgiSEr2sECR6xh7MjBfGWMKqLgJNj5AFJb7JBEH",
  "key9": "5hoMkMRUYkw1nKgi2AsvtBbynAksyH1sU1RbGopLSfWBiS8d6HyHX8nVhRnprZauicZLTNNuFvQYk338mZ4oSJHm",
  "key10": "5MFCYdGkPdnwHJmSKozxnz1DUmiAKAVpyGbr4vmaj53aWwPC2GuevkDf7NASaXSDoaYtUV4i45GqnSEyASTu9YsR",
  "key11": "4ahTYmirzzdxATFQk3WM969HBs9ARK38GXU2dC1NkckqfQFztsCTqqiWuJDvZBV8kZFfHCBFMzet1usSKMfnwnCu",
  "key12": "2nNYQKhpoRnVajfwbgSb2R3nKX5kZRdnjPwXu2fEbKoUCQr2VqAH5keMakNqxqD9QfD5od6YVNpXL7cQHu9Rg7Ww",
  "key13": "61JRE2LHwq46Mujt1ovDkX7pLrGjra66hGJsvS5p6wXeBznUFR2jrpM6FgsyFaD7Y4UJmzyU7YwDx2mSVSTHc7Dp",
  "key14": "3GRih3NGjAmQGEPEbqGzNFFVgEwAQNQFUummwu7NF7HuL3K1a4opxXw48fqKUVFKMNzJNnLupR6ZpMTcrQFMeQss",
  "key15": "5GkaCyBZkU2xScey1bDeL4ASF3j9SNui5esX1Cqmft6nkrYJZacSCZfH1cKSPWSTUEVJtyTtfjtAuiVUL8WaL2uJ",
  "key16": "5VtJoDQ8t7mYf5sopj9X26zmFdc1gq6Vko4vDnjdkbLTTPkKxbq4Z4hbYQLzPFf6SCsnrENMCoAinQWheyWbgeCE",
  "key17": "5BvsfeqqMHSpF9cTiZjf5c4zme8S1QWTpMDjna7iG3ZYzcXkKsBYnW5a5uBLvT7eFMyKjVmjjkHwoT36Xto4LsDy",
  "key18": "R1M5H8FWVtRH1ZkGeqDcgARdLUHNPUjBccYqB9q9KarxdXF2BSGYCmCBJvn9pqVZHMw9G2mUn9nLRgXLKETVweW",
  "key19": "5DdiBLeHUMpnP4yMf9qqUPeF4CvhYaRt5wWC2Bge4bXkFjpuYCeD8mQJmGuyXPVGho8Vi6MKrEV4JbmtbRCgxxps",
  "key20": "4mF3AGF1uUCe8rdVhbsvv3jdQxkV5EcGzAvGaQC2bsZ4Fc3pggoGJbm4yCWe634DqDvFCbU76V977YNwxqEQLVRd",
  "key21": "2nQvxR3Uj7GaXBjNpe6v5SLLUYiDGkDQxr2ucson44Lom8zh3dBKXQjcpLh57cyWoC8vXrSWUN4i2FGfHwxn7tCp",
  "key22": "4dkgH2ptUgSUJ2bR7cKDWxYiJKqbrt2RBhejyvu9JYiqhqpATSMiwAJVkaVxz3m2xb1rgCrDTouhk88s3FH95Tmx",
  "key23": "5pgY2osUMWxyGPnx5FG4zhePUvmg6hBxg3uGL2JWvmYjPb9a1XVABUcRWbwGbAGAaF5prJqBNQMgHcrDPxK1GHUU",
  "key24": "2wFDLesncFP7kWahmiifSmktTUAneE6kQwZ9bcftbpq4mSeGa1T35TXEEX3bWwoJYQ8FUbbY93zmUBALmbP4sgFj",
  "key25": "3T1hn1mhLgBTZp4caKpz3NAgwiMUBJKuJwkMKb6vaMdvEm5gChBk4QseCyMrup4DReiQ2Uh8Y7HDrgjpQhjmPR4V",
  "key26": "388rHymW63s4TcYTTF8c9rm1nmVbeamJfPP6q3vshKuoeRHCTWrLVmmecHfBgPJCBFi4gc89g7ZBKkQqkESp1G17",
  "key27": "36byoH95MT2RUkLWYAyDkKWXndfHn2xiz85ucWSXjJPvv4fLP91Q2LG32AeDzbLckVAff3TUaaxHeyaJbyVRZTNx",
  "key28": "2rDWifUE2Uq9HjBXv64dZ73jiR6Qc1hRw5um4NKLSZS1uYduq3r4DstABJnKsdRd1oYwFqUNZS2CkPn5duWuEscd",
  "key29": "36v9oYs41h1qpwXontKAYWUbMnTGowgEcXpEB7KQw8PpcQoLw7GSMboaSwLjTrtcG2HYRTPkNtJ4ZgReiDAYH2gg",
  "key30": "2VkaWJtxN7zuaZ3c7noQrafjS1kJbL143Jaz5vxFqJBpPbCfnYeCuQtw8anLLj2V7ZdgSjs3bE2nWCQH42oYwMPw",
  "key31": "3tLa49eCLXHuvhome7MZCKjRmjShsrkK2ViHVjXEmdJgfaGxB7782VQkPPstdePXRALyg32cZdUrQbA3pSLbhD5x",
  "key32": "2oRwmnYy7zah1mCjTtKeb1zUeEFbu9S6HcE6KupEqSkFTkEf7ke9Pzshh6YJRso3YLPJwJ6mppGHBG6rNeopEkzP",
  "key33": "4tbVNwzkbokRpE3sgpEBDKo2SpcFT5h4kwrAkiTxLZBCLkYEmCHrQL28cojEjjMiJ1QLZfXgdnbTigXu4gcrquEH",
  "key34": "3QLkq5xmKpEcDjCx2UiVEyDtp51U3UuVkwRwYA5UgghGgUWvdNa8mxifktxG866Bo1qfzW7dMsQuDzbgonbHmzuP",
  "key35": "5dU4j2qUJYJ1pVsDSRwp7Jzd2wbfK5VYqXmqXDxdEZhhnC9whUgEkFRKBpkWJhYFecqxuHenRTAVXu1Rb7jHyCts",
  "key36": "NeFeTt9tbv6DCg7DbRomnEfTw7oFgXktRx8JWfVp7vM6C1Fq6fHQQn5ww2KZqDYuDBEFttLDibN9FCxbhaLr1uU",
  "key37": "4GireiJZ87G6xSNhPFeJ2z4qvaM6agKgbXvkd3P2oADJsQA1p8KvLjN86UigRoHdSbUnxFRrBmv6DpbzWX5byDHX",
  "key38": "643Kc6sf9ppSNyms7cgKvmqmkV8BfL6LQ9Br6bjn23bUWs6JTLt6Va7HWjvHLnxxkF7qqg6QKij3PKoD5xrzJDsv"
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
