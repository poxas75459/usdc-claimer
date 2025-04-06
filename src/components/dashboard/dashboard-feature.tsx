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
    "4wodAhx1m4Un7uvoWbCNbXaXfzTb6jgLgJWzSkhtxqUVbJBzJMKbWyFYR3FYGcR7CfASNmFfY14JWezHc8jNYUmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ntaq1UkzHcDmqgBxvaL27kGTAnwMPgvTGgP5D4pnvqxcnxojUaEm9p4eBSXHPqxhfQEKWnanN4uUkjj3Vg8FctJ",
  "key1": "3WM3WAVuziHRHecdX4M48cVu9hBx7Lk3Nzao7k43un3L7yfQtH1HXqgGvzoBZPGG8ZtM6wZiPPvfbdSDn9URPCbK",
  "key2": "45yyYZbKRoR4qCbfi6esYnuoSNpabUgfruf2pGdPGXqLUaFy6MKU3gvzwPUCumQ6gQFFhL4nkEioz9HvyqJ4xDGc",
  "key3": "3RFDpBU7qB6ck8ZYtyhjuq6W79rEjgRjoBwyxnqFfnHkQ8cUVNh6pgweKrdz5Ra2c7d1ZpAHDDwefp3MJ9DYm6Qu",
  "key4": "36uZHsxLzpWDS4h3bma41kS8mBL6kr7z4rS1ZFvTctWj7WTtTnPGZ4EfqZUKkpJpRkaNqc4Jyrtoi45yBe8XRgLk",
  "key5": "3QbvvwBX1eT7Y44rrjes6KwAa3gKjGS7n6RE7zAvve64cobecYBxyHq27cuRwi2sQAdhRSiwnvy5hTxGa6qV1cXf",
  "key6": "3LyzwVKAD1Lu5jtR9MqND5o48UwjdUBqFpBzjQdk5fCb5LDS1CubPMtXn3BfS1tLh8KK6pe3YiaKXdhreaCo1RVV",
  "key7": "86aEbVziNaN5gLcchnGyENYJS1cf2sgsRzR5xMAwzkHGunfM7SenMM3ybXQuXk9SpHtAaB8PrmEzUwQyYNxVSGF",
  "key8": "3Z6CSPs2KCdr9rKYSCUsx8SdB7ywrXbui5HkEfHfmm9ndYTn214HeREhKUwYd7YnFnC4z1JUwq4FLvPYtB7YcXsn",
  "key9": "2AVpBmXxtQPiHyMdVgSpTikRyWgvFyi9kYk2bvFP6EiExAZurp15jEPYsSeCtby9PNRPXSkSsyN7ZMzb8mqwsswJ",
  "key10": "5Eciv1a682CtrFZtP8Qg4BGQd66wr5i6VMKz1f5VLrPHW6pCHdMr6q3DfvBJBTTyo1rUKfv8YiqPHBYtURz8pBCZ",
  "key11": "5WzZhUXJmwZ8aSiKdmxbyM3BP6ZQaExSB3GApUYjapvLzhFtLRz9PQDdMihQxMEyprwfejTNLtFoNeYD6CpDapbX",
  "key12": "3N7mCRhtf12s2Zkt2eGFSdne7wLMfYdqyAq7RhtyAgVrJjxRAM5Dzvo3u262JrdsfCEDPiy9iDeeEd1wK2KgWCHF",
  "key13": "48q5LAh7cujybepRGHLwoPkYVeXfArp7MoZWvdUzdfsaGeZPbmM4i2nKAfP7s8oHkstoYrjxn4Y5Addtu2YdGMh2",
  "key14": "1jVgCFY2AMKbUmTo8BUcfDF3397B38TGGfrExvd9j1coRGsnRoo2qwWRGAA2mKBTXFXHiFkDM2pFFtWRjEduqej",
  "key15": "2CH8XXRa2wHL7KY7UZHeiwWapQfs86b4BkYaWEcoYAxSGnsR8zhGFvNWKnJYVtixVyZg5yLJ4z69UZ9SbHsHWB7a",
  "key16": "59YXZZidLvVQrwGYpsYJti1M3qfgdQqhdHZT26V7GQFJYxRdAXvue6FWxFLni8cEtccUuboVixpjthVFxgpyiP3w",
  "key17": "5TJe5Mg8kPmdvzfoyH81TvrsxompfqrvXBYdaSn9eC5jmpLcUstZDnpdsb8NxgtU2Z4ypEvuWPFKb2xufSm5sW84",
  "key18": "2dVZ6pepWumYd7Qa8x4pfSL63vmfz6ASBCzPmxTy5H2Eb2TFGKMZjvxs38hiVMEqJd5p8mf6NYesnLjytCCF2bL2",
  "key19": "3zPw45iKz15s6kC3qBfdMDurT2K7HagwceJUWRvCQCDZY6hFFzhtXfJHBGZjrh8FQ5wmJTFhVpVVAjrPpeYR18ox",
  "key20": "47PzPPaiVRrCYiotXwRmqps2YnfubnioZi1SJqgkMfoudz3PLiXs5yVADzbMBcgDeehZ7tLZdfTjox4tkpbFC2Ma",
  "key21": "3AAVjLwgassWFtqdiEQA6gi41uuyT6BqtJHeoXcC1Jyc56sCFS48RkxSgdgCb9EJWEb2QCTjWCMtGoTjMzptQqFD",
  "key22": "3yB4MSLfdJpSYovMNQLorSekvRbDuEkV7DDydGJbSA5NFJjpqEZT6yrkbgCPANU7pdShDHpsqjFDZpma1onSwQam",
  "key23": "3UMst33zmmCVEX7Hyi6JBS9Xqzh8ehXUbYwUVCbWNKkVTwcP7NFPidkkXNd32WP9iRRfWU8yUa8htV2oLCfQPib2",
  "key24": "4C6W6Ub2Jx5aL6LkMTZHyL7CAvpPgdtLFYBJY8LEEeem97jHYPsmaNe89v5DZfXkY1ioWVRiBHrUpX94EXkfUCqN",
  "key25": "xLj3qksX519J3Ehw1LUKfNs7zhif8P8QPKx4uWTuJekM96cwEsy1ozYpuBHg8wxWR4yvbhQPDx28ww1Uh2dCva9",
  "key26": "pQEWBHhDgoaZYikCUkMgASM5uGsoaLZgqo5LMvQnSGW39ShUeT8YghP3EcG8E1MSa9h4JmXsQAGTP1FV7rzSCwS",
  "key27": "2LMT2yXzyFf66AYA7wxJQ1yYPcdiTDURaixtMSh1sgN4mymDYmvRPgPA1UySXX3RsMkUYwHwffoxKNAX3uVvyHhk",
  "key28": "67W96gQehbzRoRoziwJuZJJKNcZS59qkrJ37Bq5D4XwC3zTDVcAVZuexznEdvythzQx6h7UAWoy9AXE3JLjse1sk",
  "key29": "4rVXgvDLWJhwYfMwWr8b34RTMoYejCNyXqxPbT9Y5UT211ZPhe71z8DLpw7Y5b6wk8YSxsAXKuTvdutx8Bk1tviv",
  "key30": "5FRLx3N1Kn8hC4fMEbeG8bX7zuhWaCgVy9a6JkWeLcLzE3EEYZFMgNUKiJZhGSRNnHDkURtTdmre6jkZFj6cRWjk",
  "key31": "5AufyX6q24V3kfMevD4KXwkTPKEc5mFWNTXw72MLCqKvtLa8cowcoCVWzs9jYfKwLVDeGnGj7N2R14P5L1DSnhsM",
  "key32": "5zqxmiUt4kxbU4u6kfr3sDwhBz9gropeUkk9mtZ2MuQyCvGeV6LcsMVFep8xi4onSq1BzKj9jC3ruscLs1Lvg3dM",
  "key33": "2yrxiEXsxyMTYumN8XEhuL68HLb2qw7CwFgZKKJxxCSSaYHmTvVK2wBaySg2iGKWLj5LNbZV7xNBVQtj17BQKBmV",
  "key34": "5iPiYUs8iWaNBQJb7g5Qw7dcadSrGoDA9Lwxcgz42FhtfMv4V1KCiHWbu6J9hAtkqwxtoz6Pr8YNUFoNYp77PKYK",
  "key35": "4k6mHMxeKZVS9pXw3Zmxfop8xedQtzujh1mvKF67Ptxb2k2ExvZ94yBgdQMRkKwdgWttyemktbYCEb2KQi63f9cX",
  "key36": "2QPdFiBYtDgaXizPVq8mM6TtdRgkufu98q3TmBv1dEjBndbpW92V6H5Gub35wr9F4JCVeC8CvBWBsENVsAidtaLZ",
  "key37": "4AKKzhYk6XsPWRkpujz6LQiqn5YTKcsmSJAX5bku3mf4aqJWnFbLxGHYomBQFs2bN3X2yqt8iciM7oNftoEena7q",
  "key38": "25GzezxbREoE2TWTKHuwTitVKGgtn6mGgckv3UtNmMngzaDwmx72pGLxmY2K3sYq6AENXcJNaYvkjnNLwprn1vdX",
  "key39": "KvhwohGzs5BdojvtMS9aVjKEwX2yhQqoEZ2QWPtAoW5bf6eN4ogta4zZeesHVKA6yRX4c8JBA9Cf9pYhLFt7tJz",
  "key40": "2QG4F6mvk4QFioLfNF8fG1UfKquw8E6t6xgGLjWe5SRTzZRxdSbM7M8kktnc6X3gKCGMCcrgozD4a2LMVdc7RuzF",
  "key41": "4WwagHwDjDTB4RWMyiRDf9uuJnmLQMw9dE5aPRWeJgBeta2DTSWpYFWSuta594uSkWZQ9WqRXAwBjthu5mumMunR",
  "key42": "67jka9bDy6bZk1sz2FkyJreAEpeneAuZQqEdM8josZV9YjnkUo1UW73K5XEsRCmbVpUS4SfVjPJyL3ZBVShfSiP7"
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
