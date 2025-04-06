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
    "4guuVtsouvPQqXYMhckzeBeFao86FUtP3u4J6vXZ9XxS5b9CofUpKwYTtRRykgmu2ignupbBJ1Bqgu8N8e7Kuz6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YWGJuJhEEmPYGPuxJBga6wRscbMt3jd96CMdELLGCa6ivXf1auwT4FCLmeyHYoWEKdsW2QUZv7fSraE3z1CYp7J",
  "key1": "3CK9eSL8qaZdz8AV5iRpg3EYCpkYmXCBu7LWwHHuTjNQ2ZSdRJzsNXV9P5kaEucW7aLFpUDNgPt2R42m94Ay4X5R",
  "key2": "49hhj7w6iWreLXbgXZJnv91L8SCP7CiY6Kui6miEv6mXhJYcgHxVw4Y9b3VMSYptEzzBGUhGxkYe7sRDHcGkEYRQ",
  "key3": "2WpMeLAFt3M7JVKsCMPLadLpnW1acxghhkQBVigQcHFvV7VknkjxuCM6S2q1cbu6ZrGHRoPerptMcBCK7vba16id",
  "key4": "D9F76qDaxqQXncEuuy8PDY9Mjb8vmxYThczf8cYBShfD5fwcXUpE38ohNrJ8VkdFSUbpzM8KQkC5SjyBFTHhT7j",
  "key5": "39AFSdkALCggFWR8E1rmYjomu6HC13HQL3k7sRJcdqz2bZxVE8YuikqJ5baU5nu2CmB3FJ6nadi12o9UEVjcPakt",
  "key6": "5Nix9d5RE82FsET4WnBsKqPfrDorHxVh3PbTn43JqwkX1rSHiTiJtUbNv33eP85bchaNuXFf5Bu2C64Xw5ab3iJK",
  "key7": "57Cd5QgebNCF6k7CQKXvH6BCfJAk2FqPC4jhY1hhtXEMTVHKJG6TKrXuR5pfH9ewXZQEqphs41ehT2FW6eKRTdja",
  "key8": "5v4NDGn4U7fzcfrVEefrPupeJo8AGeRHeCEHanw85zTrdfg3kbabYQPZ2Km32M5iqzgc3K1CpoHBzTbWKL8utFHm",
  "key9": "1zZ2YcbxJWiJjoco3q8oAt361hCLuFd3h9ySSzsBwc6nauxR6TdUaA3Xb9F2gV58d1BTCepKSGDfHC2MvyuSevK",
  "key10": "5ovt8g8auAtMWarRtPurqZUXasNbmc6rq3FFESytiiNdkyuDR4ZjswPCGf2wTkNVdBRk9oTAEHjpnEDffNmzPpJd",
  "key11": "2s95n6PWTWu5VHBEEbYXdPMFm7TjD1XusAFqLSZba4xc4xQDv6qtLmTRoxaMhqikLdTeAi8XobQGd1MxRMV74sNb",
  "key12": "4chaAcrE3cdcAVoQbKTjTi2iobZ4mLFAjJS8NnvM6544sVwHNZfWadCvpQmmmD294UEcGSNUcboFRYUpQz4sg5GP",
  "key13": "4trd2Dx25NzdgW3Pz41hVxVSkMncoaUS2GUPWAoTovShY5VhZMB7jn8QCcJpNGvLB5U1ppEPqgxz5Nc37UyUr3kr",
  "key14": "22tUS3DWH3DSHe4ctRtWD8Ji2o5rVVEYKwYx9UFC4MdVRsdoSsrFmYZEVnuMjSkjgUv1Fj2GqDZZoyTpqqFtJx7n",
  "key15": "67fFWUb35ZZGbNqZjKmcjQzwHbC1GyHJ76EPoauL9Dci3wXH9k2pqN3EcNXcgwTJpALymb25zrFtGxsKY3j6JwrL",
  "key16": "gEhhBobWaSWmpvaW7zVHrQdNBZNoXeLXAqSFitfNmJt6At37jw9np9VBUNcYL4Z8nbPMb5Z9q8y4QvDkzymPVq3",
  "key17": "3pDacR6wEKf6gJR2s3bmhzBtime5ZDSh3qyGNYn1ZSs6wfE1ancdVzWLg8Ctc1Lax3HRf4rrEv7UBRQC6pk4gsD1",
  "key18": "UFs3iWXihT4ZgcgXpsHXT9XRLa8NSWdTWacDadAnWN65ZDwdbS7qcduNBNHFjcqmPVcs2bTygmk9sZmsf2xj671",
  "key19": "BzqwFtq9qFgzg48abtYmGUTvGiDsywRtZamYjAt3H71jgUjF1tTBd6w1nthDYhuVPJC2bgw95DY8BxXLYBivqHZ",
  "key20": "C1M5EF2tddvvFH4TpijH59zFac99b7jAJxZMKuRtaoqVwkqJzz7WWnbqgL1QMxLQqrumxY89nBY6sjFZBnbYiE8",
  "key21": "2TMbTRcnRZSjzjyCJLc4JbLK6toZ9sk2Z9HzWAd1fEGHYv32Qn1y3hkhFUsKdfrrEvJerHZjSYEmjbZG3n39mMyM",
  "key22": "37i7Ry3DmykRYy8DqzuPnFhtC6eQHqWcJTKnEuwggoT3kBKJmUFio1f845NoooVwfyaJ46AqemjvhqLPio798Ezt",
  "key23": "4rLRXun3Fgh6fwYJgFWZFoRitQxD3gFmFQWES62knkEnYdmm1gyqwKqoNcMXnAcAfiEcHTMfv9pEZQBKVGCFwQA4",
  "key24": "54L9j51kSUQtoNtiPJCafwEzwPzBhXhsUNdwLmnpF4asY5rnuXBi8ebEknQTLJywmgouaDnCg9eZjnhH6DRvbfWq",
  "key25": "3zmf5P8iArSFqTNMMCngMNg2Lj838NqPNsNdAsajnKzCuz7Sqf2jh1UdnLSyHYkqhKtxZDG1WLZjeqAsy5G8zC4Z",
  "key26": "5q3imVFcqGNhKVQ2xjRUKH6aLqQoSsy375q251SorQww9vfrpJQUAJaLcopEsC7JhAGivPHinGY8gUENMZW65zZC",
  "key27": "2QzAHEMDaPgzZug2S5LoMCAzN55B1jH4B7C5fJunwCGFxAaxzdAAn4XJAoJEa6ts3pnVhYonCwzDSaopVxndsuED",
  "key28": "21irSsu9NgDPMt7apcanbKs8u3eHq71LvGeN2ZpCUvXKWRYhVZypFFXsy9xs1J23YW8SWFTHdbooJV63gYmLzRB7",
  "key29": "5PWSGdmaBfk6QWMmPFUtSUjsJYwgvigLs1F1RviZxLL7C25dsrPGLbMxJRmdGSCRrgzkZ1EgBuUMAsg6VfDG5Vkt",
  "key30": "25TAZMgA1CdpoYhbbgatKK3HyFNMVCsc2uPpZTwz4F8SYrfeyXschqD8KH8bpHjqbbhzVu2q89UfewUYQtKDXiYX",
  "key31": "5fyMGthFTSjdbQEycmA1CrzoWQnsDChWJsnYKaP9urwQjMxh5yqotRzS3B7ew6WHSeP87mNkRhTYf7tAx5TRL75Y",
  "key32": "211Wkp4Lii88BnXjz7B5UQzAqE4BDELTPkgagiAPGz6nprV7ghckxPiHwqT2TENVgAuQ9Nq43enkiByhx1BNuC4S"
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
