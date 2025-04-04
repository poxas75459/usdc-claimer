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
    "yYJbxcWmaeVYmpMwcVmcXDcGJJRMoh5HuyAfQRtMhjYVKkQVpGzUU5WJ5tbugMXf9w7zvyLYf8PpgWdRFbxFsMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n2KZkEm5fHDnVi7zBLEDrvJB4sb6V8TqTVX7oUK6cfuJtzWRiDXsR214N4B25pU6y9AWVSNaer8DP5b4yrTemAv",
  "key1": "5BCRw41athYeUCkzp1dj2qKwFX9DMuLrGy6KbtBQoJLLExET6dpeMJJp6TCnw6z9K66mSZ3FtKVabgF7bB7ipk1S",
  "key2": "4C2Ec1KC8J8b6HBrNT5xcis92nrb4UQFHfp3rVgL8SYYjob2jXSAYXuaFXkGFGYsfjPEBT25n6HihVNWWAiSX1fA",
  "key3": "3EUFYmXbVbawTvxN7gkNCTGFVnEsb5VcRv2QSgkH4dyfdNEvqzPgWDRidRfDvkF8QaR9gg6m9ucWjFraUkhpSwaF",
  "key4": "2jg8gasHWm1mQQbXboAsn5oUoP8yeHvoTPoCqzKLyQSV1efbAU7QQuSE7F1MtWPk6e4aB7uw57JgtyVLtTeGLrqS",
  "key5": "snxT2Bc5nqs3y8hwhLM9hsbB7w9U6bLXtV8gAukbpFXqrwjFt3EyhUHjqbFB8yfEmMs4X2YhFmx5x4jEDFrWFKq",
  "key6": "2WvigVhkA8jhTSqXNLC9wsqKvwpZiYLwFvCrQSyBtAEfyqdhsm8UuxMCdtayqfTG3Nkk6w7fp9dQL9XbGim4kLQJ",
  "key7": "2KLHtHHxH2ynB1F1vXBhA47odndEfJtj89UTGsydqMQrLHHzqhigFY6vn6E9tdXCBkoasarYTjN1xNrYzzUA94fF",
  "key8": "4zFoc3QDQKsC1kLSYHdv25bDXD9ke1syWMtJ4SnndfNx1Q9JRnPwK9WjZL4hBPF8vUdAw7V6KFRjszipuWQo3HbT",
  "key9": "2WCxHLy9dBSJzvuQxdiwaHKvRd6QRDu2Yopyg7uPxNMu27cyZyAgAXXECPGsKRzyCTZqqgXqMbhp9jWLwUYXFYKn",
  "key10": "3Vd4V5UQnxA2BEUbwUFrytQZwpJgqPF8AiksCu61kaecGJGkPoXQnZsJwsBo7Fopqc77S2wBSrq7WW8Eu4oRsjEh",
  "key11": "48rG28ZSPhY139kUetYBnbwk3jv3vfYdv8m8twBnxevsCRUXGR5M5wiJfBsWdodPvg3PWPqpPgqyiViiXaux5QHL",
  "key12": "2RMa6ZjxicWCDJ6t7Zd7rmq5XWwbRNh1bxw6kx2aCAsD91kuN5mmatabCe2Tn6Q1LK57dDAnXkGGRrWGddf1CWME",
  "key13": "41fXguD9tCxNC3qhfeJHfBgptCFDbJByK1ifo7ZwvDeS97AmtwLuaLA9SWNbJQg8EWggJTmXX2N1r4vWKK3ysfBP",
  "key14": "apYieewNEp5Vy7T4VVhqJLEUC1uXSMKSqyC7NB1LvUJmPTDLELRBpycuepFZt2ah6sjdg1Xv6nqoMWrjXjZFrDA",
  "key15": "3xNBvFnvgNJEZFYChf6rTnyAZk6Ca8zctWdU6FLGfY7M5vopkrKyh1nD3pxfg9gsKrwJ9zhBnEjgVFxaBcoYwyG8",
  "key16": "5SH7aGzyuN9RahdJYfewhW8MQocMcakZgXAmQaGH28dro3mQpPiTGw8C4GGyUWMm7J66hAzG1YRfev7dvH8TuSMC",
  "key17": "2dE6pSZScVCdMBzXnNexy6QFiibE9AF4GSfRGzpnZB68LXzGoxoVZj29JFFoG71oe4ByhsY5zmyJbmaMvenXQwZx",
  "key18": "2epBSW4RsyiG8DS6Dd3zKVmpfzknFDHwz5vzuDBaV3iSr2Bx14tBMymVGfCy5UCqfud5eEh5taeinXxEhDYWJpf7",
  "key19": "2G9r9aSrkMbBboGaifQDQLXJtEeAFZDoaSPR18i4BHaKnGyVTWG3TChC7NmEgrKMzz59vD8phfbmTeoG9SYKapzU",
  "key20": "fT4UKvksDwHPw2fjPYFJz4D2DPWFiryZUfmv9QvcqvcojYp2AMGCHPTe6Y5QF8pwUP1fC5XchjEWYTfQzarJ2EX",
  "key21": "3BhJdkt5d9AtPqpu2HKKDsvTiAFkUUhNSCbK6uJZubmE8ZntrbWzoC9PLK3B6c6veW87kBT9hoSxQnqJTdcTW1D2",
  "key22": "4TKnuKEoKS7nT8UKYaHusJgNzyAfPxZiMmY6CnXEt5E73sed7Fc6114eJhwHNF9SUwYAF81M1YBfkUCMqTjAkYC6",
  "key23": "4txxp8mhNLh5xKRmqFKv6M1TU2Ru9oS8CnPWxsn6VqswVnixZrDXFxqCoQuFs9EVe6EwTjGFxSrm7ANvg5vWeaRS",
  "key24": "5DjygheZ8Ts6y4zFagnA9XD4AUizcNuiEUkTxUKjpVx4SXEojmpVAsMBRfTotgZxh88KGtzxmWcq7aWLFjMs82Qd",
  "key25": "2cQAPLKEaFSEpKD1Ca3cUvgcvUbJQ43iXF9wjJdwvN1jLvCfCX1gCRtvZArwgCJqyz6VPR59DsGHSvUPo26qjgdL",
  "key26": "51p7vfDqRKGQSqZ2h72A6QMd7eftqBCDWPHaY3NCc6QZeqgRHWw7tGpa4M57uZsWZkg38WTi4KGbYAFjmNwuzrkz",
  "key27": "3miEvQ1AjSzr3f3bWb1JyQg3frXGVEYJT3AP2XnrMmTdZcFddTVLcqfVHHcE3KSPALhk1RWmJQ9yrdGt6Ci795SF",
  "key28": "4g6BiLzn8G5yZP8G7NymVgJKqgXFpHFs5phnA3GykGc6hTqjXRc1pVMThepsq21Lt93K7fFuujJz4SyCYoDa7CFk",
  "key29": "2K8LWbMKxK74vjHcX31Q2tLYbkoKMvLyVXe7ycfUNHnACCXZvWWMURT5nyGHhpHSm678QtNnK7GaQRqQvoFjJmRG",
  "key30": "65r3L5Qy6AovtcLTPpP7QJn3bySXDbM2J7FJNXMrSyytwQia9J7bHD9LAsZSBPXqKysN7DMtEhKM3S2o6XjPmQyt",
  "key31": "Cn24HJQChaveHHNDYAK1uBcHoehva31C95omfg97nuqyYnjiU3WbMNzBeKwC5x7LbioysdjqZfXEh41SEUu3EKN",
  "key32": "4MMcwwGYZmNti8c4icqH4ynYqyW3FwyoD58BzCex7rr9RLJPfwuBbxKS7TSqf7DerUWcQkwKBCzB6AxmjvFyHFWT",
  "key33": "KCYFZkaeNFtV82iA1wxTK5eSyaZg4oUQ5BSkcGT7b2ZYXQsT6r6e4c3XbJr1BDgyNJr3dptgqheRv4UtJZiyHfv",
  "key34": "47QJtpSoP3SrN9jq9SMDYAqn9NwoR6o9bwCDfwPHhvUrjj4xJwvpM3oMaNMTHAMaGruHPeJAihowrzvh5TVCjzY6"
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
