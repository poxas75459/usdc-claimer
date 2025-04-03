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
    "3jy8VTuSKjrgVfpSdhN4yrxr6rrNvFZ8w8Vkx7mW3JyovwniASv4BQYYn8jaZgJG4mCRYkRE3SkgzFncbmShJ7Gq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oFfMkuLkpXzD1WeDLpmghk9BgG9iC4cBfhRPpJ8GAnXcr9VaFWjfQj58tDBruS3BXjLH5madhpRNqaWB4xZGDhn",
  "key1": "3zgRyYs94keqtoVnk1ZGp1ntApx4SiEaHYLgUGtCmsE2Dzjg3PsSEdRaYg3eDgowRgxDAjNMzpz8pahDFzi2Gxz6",
  "key2": "4gYkCnHTpfzDbv8UZYR5sHQon8cucjMPfTi7Z3wTJupQwpm23p9VgQRFanJULwi69PCKkDfATK6RrZifwvfQKHR6",
  "key3": "3yHqHY6dWT7JTPwoMvA8dQ8Qbm1tYCF5zSLunTy8e5rcmVAraQimpdDPGQXzznbwZybFmRgYG7HYVQvyZxekd37o",
  "key4": "24xkHbSxbn9Cw5bhbMkrdyx3T3cGhisnowKGtyDGVfuW4DeRTUcbzzy4c7rohXdT39AxQJ7WQXBdyxfipHYFh7VB",
  "key5": "2NGQaQTR5sXKFBrG3R51wcsQh5LEVRGLkr6GVRDaLsFYi1nM2LDWHBfdVweqS4Na5gdtq4xwzpc5c4pz4HKcsSwk",
  "key6": "3kdpbF4qztXtKS4piP7QWgQjiMHJSZwbkFQJtSxp7it37JEjUe7w3G1aT4W7L8TYxMqBJ4ubJnATD8E9TnAoZdp6",
  "key7": "3KfZScDmWjtB5feLzG2n1XwrxRWadRZRvmyyrv7MWph3ShisZAbY4WLWEPN5uZpDKVAUv5jkiw4VzjsUAbpKt1RL",
  "key8": "3q1kQb62qc9SKGExkabg75GQHQX4P1M5NWtKWU6ECKbuggANu5Yisscf4tKDfW1UkU7nZyyYKYXSXKMyq6Eq2pV7",
  "key9": "2G1tGzNjPok8qDmAg1jhvNojJmDfL1sb7gPpZnBVTA6piiq1B3mnHFrzLVLKjAsD95r9r5frwRTPzgZ6Yq7p6upr",
  "key10": "2gAbw8FeKta9nuTifRjJ9KSq8CQq4bnYTJa3vQZYNewypQVDPekWMtijaepVyaKweD1v5EMJ3DeELJbuGSuYArv2",
  "key11": "5qtxehXFVqNNWGNmxhyJhvSzPeuiPtvaSeeBK3rTm8KF5CxUZRNc4ZeHE7snZhRNpWJ2CmxrYpctsk2Z5pUKqJsF",
  "key12": "3n1TtH13JVXq3Z1qwd3tA2MmJ6nMpKzSQsUCjaU38eGUUP5u9U5RddqcQ2VtQ2CHTNqytmYyLruRT51XxND5ALzw",
  "key13": "3V9t7ttpBXA9M9MbvhP35V1zUNdwPho3kTEpW3e248XPChgxUv2MaeYgZ1bjKzy4D6QEuNTvZN4qyrxt6oLVguNg",
  "key14": "5adFJaQLWb5VXKb5bNDg5WMtCTnFyTAgyJpZV7miaNSDzfEfyk24wKT1bxxXDkG5ByKD5Drj4vTZwL7fjeyK2AGs",
  "key15": "5BbA8HLqQAFpKPbbaij9TYxjJj638iq6N4hSbKJHEXYsDWBUFgPbf9ywUgcQFGrg8T8RuPx9LZe1WTz3bvQoEHAo",
  "key16": "4Yv7ffN8eF4AFLx63ukUVsUXpaSTxASB5jAJuc8EnctCaphXTY26QnsofqK1Vhf1t7vzrJXuid1vaBa3iMJwatj5",
  "key17": "3JHZtCsxrUkPSQsCqk6tmT9HguhKf12qgeqQbhzqsba3Jjm5tKdfhJX3rxrW9dct1uXwcKY2ach4mQJ8n1F6ESD3",
  "key18": "3mamn9qrWfMq83UjTrefNLTq1oQykmww86SqHAX64GKFdyHdGiwMjLwmZkVEcMzRTCKkDFqXpHgccHpLLqiv9XsX",
  "key19": "4qmCyU9WvYGWcY1T2xcDFRAUKRqcyWfiyV88aMntmdF1JnSUwNvr2KVmo1Dr9fVbF7jTDUYkpo55FKpgHkxvz4tu",
  "key20": "Qiwyits1YwnpMztqnHcYFhb2dyBHGwGUES7i9K2aeEPfZ9ifk7heBcFoTc7mhUXLqwukyVu3ua8eC4AUknSZzzi",
  "key21": "5fi97fNAoCgxLyyu9Ue1CfgeJB81CJry9auvbvakVn6M1E8ruuze8DHqhRufZZPzDPebGbNFkyGZ5UEjBCHmNdaM",
  "key22": "aRAJP47AyZ5YiPSPcNPXzEfPQWkUoGqBYvNdwyJCEugyMkXyv2zNH6u293WxhFUhbKVF64bVDrnGS9PE6gGQ6eA",
  "key23": "53V12HfrZfbhVn3nqGbtDACviLzef3yDDugXFkoh1adTYvw5FqCqCAUZMALfrcTvUiAUuHfFBqEFK94qe7d5mxA1",
  "key24": "bJPF5b9vFYYr1Tbpbw7egDcacJ96ELEK2oT1ypqn3tKpV77AJ7p1dfuupS5Kuqr9vF92cd7KpoMN5osrJrik5jE",
  "key25": "2ymYfMV2BNH8kpfQbtye76KGgQiiJSgvJDYM8CFfzAbVSi7ssz18YuiMv6NfDJ6RUmmZ48LS6LPKCSt8VfS9MjnS",
  "key26": "4MrJCqFoXDEePKPMVTaF5ZrNugRFPtVLjtVAWyWYt5KeAkPByyvKQy2ud1he5BvyZ4xfWAhV6cVR6yb1j7ZUBfrr",
  "key27": "5yDwzUotfCC9DqHmeZhAcoizJV46TBxWSTk2xZNXfBy6YSyHinKNdmZeWWS3YEaM1MUh71EvLp2xZBH4hvTvxGzX",
  "key28": "3wB8xkGLXPa2hEEpQP6PYopHQXiTjerCH98NfCQhYWymCu4axG8fwZ5KUB8MoJNNQtACnq6KdfDiWqbTUNAnh2k2",
  "key29": "3jmeCBQMxrUDohqQ5wpiHgCkN4Hkqqf6hnwrhg4HmcHhAbgYaPhhjSdKar5Chw9g3chNM7KiDJcF6435HdqxXixE",
  "key30": "4oP3ty5ycUQ9LsqDpw3YaoKYipXjr34eCoDXCtzaNzH9SSN23uPWyV351cyeH2oXoA2EbrNA6Bc7t1THfm6eLVrh",
  "key31": "2iFY3EcbZTyqewY8ZnXnYEiRmVisABvhhLR7nyEFLNAGEpHDyrWnyKayfxmsdTHTMS7Bn3tzcopQmoLjWSDhESoD",
  "key32": "52ikKoFs7MFam9Q4FnKcWUH2Ym6of2c4cc4vCsiJxqBieYchkgULkbihvGvBA6TwD7aH2LmTThMH9TwSL9FybkKF",
  "key33": "qFa7Nb9dNP4Kps2MTi2cHvSCAmqyMGPiyu9B3nkZUcGYo7xNyyAAyKcABD57kGGjeM9pTzAaNLf56f9FXN3ywB8",
  "key34": "HD8y4fzzYyASaFshXh2akaiYKVD7ocPeNN17JQfmKhXBJBGRdhSLWyTarqpk2obeQ4vQduwJuYSUiGrWs4mJuMW",
  "key35": "4m82yBhXe36r5LkPsQTwPkue9njA2c9mos7eaaccJuA7Fx1BwAhBdHB2BXjPriEBGnmmwou2Qzvm4TU6NWwiLYxe",
  "key36": "3JUZ44d5KVFCgRvrFJKvWMtE8JLHT83BLeqKwLcYPrBEqWQ5ejGeEyGsva1gqxrmBywAvFAB7MiWje1A6L5yXahu",
  "key37": "2S3aeLsQnP6ayCMj6vbDcfAnQAaqMwBAkKcwcmwExh4YMBB7JrhoqaPb3cF6BqQqCx6a7XVtPahbcC21EwwP1Xhn",
  "key38": "3vRL87kqBYRtxDEUbDPEPBH5U6arZ8961F5yiLa23zecJNoQUiHhWbeyDD6Wu74qdRruebsJXNu7LTnC3ZPHHAEu",
  "key39": "4HH65bqppY8s9JnLYA3afpQfnXA5w3fetCqNNRKuFECi5FJydykhx6oypKri5jq9nBJuaQ9ZTqh95jh8mVMaV2x4",
  "key40": "2dC72D79rNexC1zXzNyrQc9QG8Zy8uVkMXzBQyRovqHT35QFfeAU2JQXbz9G4dvPuV7W3WuQnvfubg4dSR3aH29b",
  "key41": "3NV1xLW7Cwh2Km7eb5YXSf73C7rtxMExj2KjfF6JHHEBe9bqL7gibiE4hgssh9c32z7QAFgvpsuTbcvQNmSzKZRj"
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
