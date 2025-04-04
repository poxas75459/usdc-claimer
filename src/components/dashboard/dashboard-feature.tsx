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
    "KtmUDSv2avjFwjchLa6G5Xuz3sdR5EiByKzvPjcZa2KuqBvsMDfq5guVo1Vt5WU34R4cAnqkNzQGvw73PpSFG2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wnoGyggpxjAhfxr4e7JjbojLQqqfE94oYtNVh4shh6C7zb4hZxTwe1L8BDmgj4BUi78L4wXqC8KtojUCXtURqNP",
  "key1": "5JnX1DPjFCF2AwWUjyCXhLSx1U6ETWDfHhj3wB5pwaG8vUKzb143MoMjHUNfK9e2S8vbeDN6KyxqReNnndePtX3R",
  "key2": "2gwDqM9jekVQ9AYCPYA9t49ybL6LhqjzNaL5YcyKtYJfAkgf15W8u16a3HUXRxQeeou4JWtuaFWDUeLYJrn6xBbS",
  "key3": "3i2Ybxs8426RkCCxzER8bqvBoYWYHpH9BEgjxSyjYe3SiDyFLm9MZvUxJ46BxLRSjHhRNtDvm9EMhYdD5RFCDRwQ",
  "key4": "2s4xKWJHz3B8DY8jnkQpY6rZUdEDBDPpXQWMhoXkvrqMmvm2NLjoUEx6VAFHZi8zmh12eyoVyLDrVJTMUQzUp8yT",
  "key5": "2DABjicMPSvfXE9vhbpgC19KdkuGBjxj8TGsusdsA24VnKBPF7mH3p6jgCmoDCpV3cHA6NjgHAePiZDVKsNYiSxh",
  "key6": "ojjQN2ZdE4ZfuBA4TQ1Z2Epua2fodRiTfqMz9JzTDrcYY1hjTDbstwbKbrNEnhT548io774jBzSkUdoNt9evcTN",
  "key7": "4ZoMfgGevecn3ABnSDLvfHReZSqMeoD7mBHK1VMNokZGHMNmGn4ZiFiPDQcxFh9JsxsHw59vPw9BnizgDKCN3E8o",
  "key8": "3T6gTzTxfEZFg8fhSoQ9RSofEwbk9VdNJhtQKZoAaFp6fMLtpUYVk2xMs84H6HzHr2ZZ8cYsPjwUeJKiwXiqprsy",
  "key9": "4hd36yPRHW46Y3sihPFUm1EcQi6tmxMUgZVGXELUJbVqDoA5AWNDjY1yoJvwdEQLSSMAbBxegjqm9poRL4ytuDBi",
  "key10": "5tWFh2qWsXtnX9PdJx63vfXXpgCd8QkpxSUpMpKqbWeYZR6ujb7E3suGQTZyXGKTJWyB6h6p2qQN9KmqhVdd2CR8",
  "key11": "2EYykfpD12cJc2BQpEgjuWHd9q89J9Pn7CZvz626CYhXS8RdnjhTEZ6nvw4vyJUEPqSKtTAJcuRfkyyftvKwcUvn",
  "key12": "2BeQSnMPF9FGctmfJ7zxEpdxje92r6HmPvESukH2ZxrFDd7KftEm4XAFV1RbgUanSAsVLYQ1diDXDkUoutqAaT19",
  "key13": "2yUcBibiVYHAL4CZjrHG6NoMd3MiXQcsXp4Fq41ZkPNCaSyiesv4cj1cZq93K2ir7Q6zMpRi9pXfutcM396LBxt6",
  "key14": "fDoevf76ZWYC6eWHVSAidUuAWqkqUstT1dusYQ6ogwYLKDnSWKKwwNee7Tc3mekMLQhWUtDq7c5LB1iiJMegrUw",
  "key15": "psRUhwRdhg1UB3DzQYjiATqJJgqgPQVTyCBMRpDH4VX1T9sBavvsppq732HT1zGVr1YfpCig4z3ozv32xaZqdwb",
  "key16": "BYCQZYcLKxBaLqGmkrdEt8YNaEqHio6px5oB4dHNHEPiJBtP4RsYMKCxmPaeeEu5QVZGiKyLAAh8BCA7oUpn8et",
  "key17": "3L3g9QQJQ7zvpPFiC5vnJZNsnhJFoXjqYdXNHW2BkKtNBirVL3pwT3aG827kRAzq69ipd1PmgjJkbPEEB1nMiZbz",
  "key18": "54xV19QJRQRvJA7kn7BGK2y4DBwWDjq8PfNVHV64tKMnSroejUZRAYHoUahTFx5QCZkDR697RnS2gVkFFpocswc6",
  "key19": "4n3KwycjmeEYuuM2Xs3qda8uC3E9uxBDirjTeD4Yr9NxcEwZ4GMgPRafeXpcnKLdvR2fwZMjCKxJ1EXyX8sEkLfZ",
  "key20": "4azM3CTMjY74wQxLbHFDmPCvuojXMTRwYZY1s4yrkKWFN2esQaLUwScEiRVXudrhsQ8pGUd7kSjSmKGAGvXfB3Fn",
  "key21": "3qJ8MGx9u8yko3TA6iBhreRYk9JpYgZsFv6reteXktAw679qqdbSYCPFAthMUcbo5Nh1mgiAw2eHMwBkdPANbXdZ",
  "key22": "4Dpn2sWLCbAQP2T6pzXEX4DmmWtxRbZNQRDdSNjkv143MzkQrX7N1Z6bu9G3iYQcwHTbkrErwuk5UcvwUXhUqnmz",
  "key23": "3qhHEmNXfZm5f8Aq7k5zQ3DZvpDLzgNfkUXWBtmYY2obvAAsQ1aRJEnMUG8ocpUVNFkdEYfPTSZehn5dSvxD3zxe",
  "key24": "APph5wdZUUNwr3B77xZXPzjPFbNfFKGHEKLSdW9oKz8TRTzgaLWcT8zWdy7T865VjibvLkjq6DQpVUSWfu5QceA",
  "key25": "5dyRRERBDJDjJdZi92sAFQFEpr8b2RqoYNBWq4roNJfXmhe9Cj8Y9idejPULxbtSZksiL1pbSN5y1VMuVdSVCoP",
  "key26": "2UuSEWPkxTAmkzyTPHiHddo412urdWwiqvatWa3r4g5mrqLqfK5cZuPFAmqkhLrmjh51RJZoUWaYPR1cLJFLbNAZ",
  "key27": "4LvMwbEvuLAGaiQ8BfQg2HV55YjDVFTbzgsFoj6PeyTJiiYUcWNZVb4fr2bck6fiiw3VEhAdNqUAzGNADvqW7rQ7",
  "key28": "4CNvLKLEJoUrvV2URFRGLJiobnku5Sf7n9CMGm7nJHPCrpLjmuct4BWpQP2dbYMfphPkMtqUe3skw1DaDEtbR6vG",
  "key29": "R4LeMBYGED1KV2NmDY6Qrc4eFJdhicRCCXaie4EaZV8uESpMRrHbYZmQhVsunDXwqW9uHSqSYVEd46iQpu7P7td",
  "key30": "62MwztkXQeL1NdNuYo3UgaXfNht9qTmYbvN5ThLpGT35utD3NWVSc8vfnKR1SKx6Y9jt5WpATUgE5MhchVLSxdQ1",
  "key31": "4GMGmrBozVMUq2kDFhReJBWTEF8Mo2RA228vJw5omNJ4H9ubNdZKUsvjBCgEA7yW3WaLCYPV5dfKNxib9RhPzwQB",
  "key32": "4zBWpeZMVeYfQrECFyCHZbnFLwP6cDt3e7MBk3w3UwEj6j9DbESSvdbqwbPaw3fCDDU9X6XKDfhBjp2Xg8U9orho",
  "key33": "JGd2L1FvRtbEMFwe2qW7UpAB7ogoQm5dj839cutuLBrt8F9LL3bu5upPEv4xvmFuLqmRZzTYppS3MEtDii69Awx",
  "key34": "3uKXwXNtw5n2jLeJCNNYKbVebKttv6upEVcP5oTutUL4LXiCTWA9nK11ue52buYRQguv4SQXfzWeGNpDWfU4EoV5",
  "key35": "3r42yWsS2kKCm88BzVdwqQhXJA2N4CLvrNJeQu9WcqnbWNY86khfV5mEWHu9wduWK1XSMvFeqj2ZjnodFHaFJmMw",
  "key36": "4HsRK9e3jn76TgWe9ojM2KHxq7qsyV2bdDiZnoU1dQYY3PebYix73ef2eHKEdV7vtRB57XPYbCLGJ8rgjV1odTst",
  "key37": "26Bszz4dPM8U2RcQxd8bPd1LyNMSHyQNoKQwkfVKtNLQGoo9aEhvmQqiDQ6k3YQnBp414YEcxKPxCRuAwpHVjNZ8",
  "key38": "5uMM3Utn35ajWcPKpcn98uxNvUhrzZTZkdUS6scB8NxX8K33rxxnmnMgTdNmjhbqpE1Cg8uFPvtKcunhX4PNe3KE",
  "key39": "3mWWj6qffj26ZFYGwSqPVbhjTz6ZGD8ntditfRP1rvDGzP7GzVHK7tqw7xbViT4Rw1ynHoXQ8kU2jQjTQ86uEbJm",
  "key40": "44PrXuTZ8duBVxggN2PWHGB47CwoCiE8JXqw5LzWuwKof64WitrnSzsP6CBuWcwFvnSmvoaJBzozNEQmL1YXH3gx",
  "key41": "51Fpzt8STmfab6Nb7wZuC7mNVeUoqqCyWPD52k77HTztLz7YgMDgvwCJkeuCwrFBuWAAWnUmyAvzey2uj3WiMr1Y",
  "key42": "4agS8cAW3fgbdWqUUPhCGUHqEeMrAZ2RWjKbmpwoEtx6BsdrVGk5b8nvZgyx3aeX3RcZkz7uJrb6evXWdPMsoj4b",
  "key43": "4w5vsrvzTyvuXYZnGMeQq7s1oPRZffk6eFnefLU5yUw36PWCtfhaoY1L2FrtZ9u33uxGLQ6ZZJ26oSwFUpmmmHkQ",
  "key44": "roagn75R8gxDvi9KquPf221aDzNVRGDcJ4NrXdGgm9YTVmug9ZQ3NLhg19axBXQEN9rQJ8QrpHwJQtcHj3mY7kV",
  "key45": "5YkBr9p1ayTeiouJcPxMXJLQ1FNwyyfKsXtFRrVRHsP6X3MxqKHaceY8AGfH7cDKmCwT1DPKEcNgmXggPXt1NN2b",
  "key46": "AsrUXLaapigH3XADtg7B9ssjELqxBok7m29XLvNCEqz6Xa8uXD1EpUVEGfdysad5uU45gPLDoMA9SahCVeWPPbX",
  "key47": "3FixWbCcaktG2KqkvRPqUknueX2EKtxMpg7sRRRrbyXEjTVFErbqNceL7ZuY2AtKgLinydJz7y7gon75eaJcxwEf"
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
