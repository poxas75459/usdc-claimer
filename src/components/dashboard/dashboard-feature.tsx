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
    "RJvPjXwcAcTarHMxRj3ibjjfWaBmTzfE7Pr9uaoGKTxrCyyVFU25G1TbgSC7dbJn7pT47oPepJtBv6LNHob8Y2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rb2EXn1bSCt7EGArSS9qUXqgqcyfSUrVtfcuv9UKyJ53ycbC75f8712rpQHDjymQLrhhxfA7b86rFFSQPM5tN5b",
  "key1": "5FWE7jNYx7x5uzjfxy6TtwSB5y8r1bsZa4uvMsHErwMDeUJyFEnr12aFT49oh8wgoVRujf7mquqeqeEfSStqFbu",
  "key2": "3M94jwqCtFmRGynPN6jLekYrBBSp8LTt6HH18qKUK8zwyvgbetBiwSCgU9ZCZzp1hTUBesPvSSbehDXgQhiwRyry",
  "key3": "4B5p3g75oZb5LwGdGNLWenDhJS5jLSS6UyCAqswJxyrwDjCNs7mZMDLYa7WcuvEd9Trbvp63zeRTN5bGb4mevnW6",
  "key4": "3qYv14ZZgYmtgYRqLp9KZ4SNRHeX66mE3kM36f5ARmNBBAKWCa5xX3nxo7itkYQQgatj86eADvt8d8H2q3jV2aNQ",
  "key5": "4kM39oLbQVkeQ9ewtPSaWahhLuivxsHFE2x6VFx5adkJgy4zhNRKX9XMeuEmi9zJZBnRAVsT9i2eynjbtWaWrQtL",
  "key6": "2ViwUAimDJ1vYRb8JP8BJGJq9yQT1nQh6MMfeHf1U7QyJ6dFPaFxPaLmGJ6HXebVyL2zcFmijyt37mX92MyEe2C3",
  "key7": "bq2EgdwpgcY9KqUFd6LduwnmbSfCixiwd2bRkSnrEfy1PZcWAqG2nTHqKto6yfHLQjFtoGQYUqLvC8cugYa8f9o",
  "key8": "5FfkNAHNx2Nbm68uXurNYQKSNw82VLmKrKzp4kyZFwkjAaTXAE1LEZPAEVgAG5ENKm3a4Trv7AWMESdzKb1V1nJp",
  "key9": "29fox1uL14FFeZDB6Bi7eLCyYgzLd4EW46AEbjqQU7aM5SxQo3qQGwi2Zng4zuG4fc1LdmbuKpptdF4ZkNFc6mEJ",
  "key10": "2wDzke2U159SpCE1XpFy7DDsQsK3WGzgQqYtz9ER9XtADaciNMBsnYj6PMbAKwgMAszThvZfaK15prZEjWArZrmb",
  "key11": "4zEv2QSBDXZz63DY7ipRgPB5Z63bTL2JSYL98h5pnsNbenSRF9tXWpAdR1bGp8gQDRjEwBJvi1voBUA3zmhkSRUy",
  "key12": "2AXf1xNqYAw62GqJZATmwedYhAYEYwssdUKE1ZorBQFKkHGXo9dA9vupViXt5a7bCrz95hmnvgwQzV3TXXPMSdc8",
  "key13": "5SCKQFjK8srQyUtDEoTKmwHYJ1n4RcFT1KGjpifuCfB1C9vLvpLpqLSSQxXZLBd3cDRkSdNg4pNdvSDuiPpi2caf",
  "key14": "2pNETn9Frh1FugsuXmWawDQZmsqRbQE1vakNrE81mpiABWzzSg5GJgzU4A6351bFhg5nkoaZVFN9po2Q67WyaYPL",
  "key15": "2hrgNAFAo4RwYZfsqzyjooQ4a8ve4p9S5JPTdrUcSKg8EvpbFSUymp9baWmAFeGfah88aquDMb1WGhk4oFfACGx7",
  "key16": "3G8FwyNG7gJMcYwSYzcu8YVkVPWkoMxUHPAxn49mPymxU4ps4tRS47LkHkUopogVDqGT53aMa77wtJjRqpUgeYdz",
  "key17": "2iMY6crq7DNYnEJAtL4PQfitVdK2usnWf5nJE45GKYxRCjU6f281JDzS93wkpsmGXtynEz6zjBFKyjNWaMrwvG3i",
  "key18": "28WfSV6rwKFqQVcLHjooneURtSiHW12iiJ8BCM8Vcq5jttzPvKUzeausvpVBhxKyMj8HWUK4zc3W6JuhjJyR8Wj8",
  "key19": "4L43xnPpi7fXtmZUfA9ifViV1bHM1qhZGXDcEwaPWQM2AdXxdJzSv48NQNgJQ2z9sknppciEfvt4ixZieg9Kq9K5",
  "key20": "4wt6E2YW8f47R3WACLw6oLNNS2B454AbKHeGTEx3tsk7JBDTi19Unj4jMd72WNdJNstHFtydB6ns77b6rjkbFPW7",
  "key21": "3XiC7TaEQipJD8pXTRuaPHLBrCqS8VEhH88iEgiWFzNtbzgjnA46uWT6wrsyzvCVN6d4aSNAsSLNdLi4Doo8PuzC",
  "key22": "3GDgPPGXrMsiApvGdEoUpBxyHDRnrXtejuDdx58GRV2Y66ju6iSMf1kdRark1xkBawuxB6KGBkx4HE93MLXbZWPB",
  "key23": "3fJhqFG3UtAevUnS9dhGa2sLA1kjrRUQA8ztoCVYAcnqT8sH9Va75gjfKmKXEFMj8nXfkPqmoUc7ZBjX6W6Q8Qut",
  "key24": "4irrvErDpn539C4wU5kYiv3Ftfu1YqyqKzAzrRCy2Bo5pXpVix3C2KW2ZG8ZTBUwtfejS9Zrj2MQmv9La8GaDo1r",
  "key25": "63UmV9WZRPBNkZBEUX8Zg3piy6VgBYmi9aqG5o7kBYi7qTwap1D2DVHYGbjvmyDvmDvCMGYwA3PKTHExqBFUZbrg",
  "key26": "45Avq8tpKzPnyAUkznxYZiX5wMPDCKekg2QGbGsTuRdXVUor4EvgBLvd6jtokkh3dm9GYts6Sy6rZobHeGiZTvEM",
  "key27": "xifaFpdxiwYBvhJtw42kpVumNZxfXippWAQfJ2DCYUuxoJ5K7vZ4QbvauLjjKimjH4SCJqAd1h97xcjBA1REGFp",
  "key28": "3sbfVuzMnMxQA397F99MMNyCMMXj6oH2uymUFUPgHvWiSbN2zJEe58q3Md9Ut1GLCbW4Z6VsaTq2Xv597teKXv7m",
  "key29": "5XHLSs889F6KedRBY6sVemSbx3XNTbpgQkJeA1X68vFfYncLC66MjjaG9t1f4dVTMNSwtVHcDAoxiihJxLrohWCa",
  "key30": "4zAKzUTBtJ4SosF2DrD4mTRWNsPhgB7bL14MDw4DRrqiCHQvkwh9MCe6N3vMmAJbYqkw8DMwgKu3eB2fmXvzZpjH",
  "key31": "4Q4JuCkjLVwMQyLMKdQi1Rad3hbLVSRrL1ptidPvVP3MnwFAjXa75ekp9MjdggFKWj9w1QsctKeGjeM6iKrXgvma",
  "key32": "3Buob5x641rh3ffaRexVUVSMsfuP7p6ioEo1r8wCnRbbikxtW42EnP5XzWnfSPqV4UfFGDtPQveNNJj6zXi13Nng",
  "key33": "3xDWc6C4Eezo56957k6GcRnwB6gwWdb1RbpvB4zWRNrBeJnVdZ4bE3WnPvkTqc1DmMdwnqq5WB9xEvsrUVRYTaD4",
  "key34": "2bp3VCrwBQemwLzKc5LXQYUcvNQvSRmT22ERyBvtkPnR9ktCF4tWTMzBLRW4z9t3bhwDD46FHTNwTLJjF9HZ6SV8",
  "key35": "5Msqoni6GRq8BhU9nuCvniVw8emZgfs1eLCJMCW53ywBcXCCrkspNXup295nxHLfSZrARFSktHv5CfJqceq8Sadu",
  "key36": "4rVEzJXwCQnLQrc2QqZcSMRYZDeza4wNiLStCUYL61tjgQrr7JXZqxWvDBoQFvGxfevTnRyPWRKaSotsTxFeNnaZ",
  "key37": "3oeL6hPTLScufwoMnKemfzeVDbnNjsqyXADJrDRq8hPGHgheDtvJvm7iTRpqoBPgByZkpMkgLGQKjzQNNJpjskEH",
  "key38": "5UWz9p4C1sgq57BMwbezSAygGf8aMw3nr9rg3WFT4rLE9bhCgCvCmHWM1WtFYp3Bg6J3gDvPisBQhcRDrvrYuGWx",
  "key39": "5cb8qCNcdSg4bQDAKKNjvHEDTvqWu3HnFeY1pFHdxkjdqyN9ppszF4yJjDZDNNK1NcTYEWCFjTaXZtDq2MbpCfd7",
  "key40": "VnPmHqEw8hcRVUV9MMe8UP2LBJy1i2Jw6aVyKjzbxn42hCwJeZaf6pYHGuRu33vAMo3RcKWM7gosw5EWWoG1yYQ",
  "key41": "2t9cN4ZP4fYeksNV4wcsYA5KbhCFuPJnsF3ucgvm3Usw7YmaPQtMMJtyBw5U9boufMjQ1rTyUVHtgPkUkjv9YmWE",
  "key42": "6Rrgy9nKehc9WM5rxByqtqP3iEa57qnxSWh9Y7eHwjgaX9kGz349NBKCKxjdUZhzpHK5812Yd8EPxQAV5RMr7f4",
  "key43": "55fJvtX9fnaK6FkKcgZ7mTfRZcnsesh872EN6JPQTck1nUaQiygAccrf7FZKSrX7YGtiXVgxw9UB5NBEZwxCv8r2",
  "key44": "5vGZX6LVwUW7nj8hM9rt4FxUX2AGoYjrCZLmJSqRViwFHndbzxsoxM8P1UvvR49rPu6wJMpgBXV6WhWAeRtq28Ez",
  "key45": "CLH8uaDYEmKf5DB1vjx4rRFHRgT8Vqeyk1BYUmXcacqTv53sR31F2cMdFpB9E1dF2M7ZKwRxXEAH7wasdXjaUS6",
  "key46": "5Y3ZL7fbpkLTVdWNZE4fLCFCJQcBwTonJdkhXyMC7dyM9jp52zoVNnkD3UA1vQod1uFRceELiVC7CF3YHgEtk836",
  "key47": "2tKDtZHYYC5PHtw8Rabz3fjnrVRCiSDpmvrfT9hsmSjoDrqdm9GWv6kM5LNCSLqY5XFzKv5ZFwBa2qbTdJLqTdqx",
  "key48": "2cV3mdGTJZYs9jSjug1qfdD6HCjFTFpRwK12Wr28XFeNpucncjap93Yf6vYegGabhecp31WmawWPmMt5ghkCc2Yv",
  "key49": "25i7kqi7Pxy7Fu9WNSzdoAf2ATDk1QKr8CNw5zZ1HukDAtJ4Je1MZQuQ3LUP7QM2RzWpjfqbGd2dwmpsoVrVJQx6"
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
