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
    "636Catpqpxt5MHEzBQADDEuvjdj5JwVGSqYXdksHZ2BrS1Fg82fgEXByJFjXN5zkTt3BV93v38AuiGPShtRCvNAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mACwPfFW1ZLD6NZPECLebW3Y6TFzUWXuyLxgdKLz1TbMsrnDkWcarKwXXbLFmLn9m1tcRcDTW9zeRrWYpZTY5bF",
  "key1": "23rdQciCsnKeFR7keQ5KFo18yDL5mzNh8tD9Mhst5fUnyLT3cN87xhRjDjwepwYDne1UttJGzC6nAqhq4LhoqmAC",
  "key2": "2G8S7SbxWJeLH7wUzog9Xo2GfJfvTCSoR4gjn9cztRMhcceCWo6YoepKWkrD8ZkwaEGBGpmHLPaF7gEikbD74vaV",
  "key3": "AemVEjUo9f6CKH6tTZaWeLY9SF5FVuRKtxTbZd94HTZpAtVjKZa6s7LUSQnEGjJtBSTGqmcnCx33BKwmw8P4wFY",
  "key4": "kdRGkJZPosH8DumWtMYFSxEcMujJHSgGxFaZrqP144AQV1tDpCcdvMeSJzboEnrThVtBxbkjPNgbAMi7ERULUMB",
  "key5": "5MGinRVFHrTCHe1Vgp9BDqziDVZtSw2e3m5XJKEFEmt5c6MhbNydKyp1h6kZjAVwfMdSHzCxBobaxCgjdFTvLaaj",
  "key6": "3kjjL3QBMfPz3TEGLM7mY1n75E7S2yyy3Krfbrq2XGBRZgb7dK9jTzNbgPsZg4ZLbhzrK4cXBxCnxujceELWxLLn",
  "key7": "4VEmALLrLTJ3TLXYNyTYQATN5D4WLdiYKeoP3sRQqQa3PkYJMqNJEEJrVU3f1VqACa9dn7F7GkSSSsxRJYSsJcup",
  "key8": "3RLhQjZtBZ8wcRHTbxZeqXn4utU8w5xDq4faQHntd9YQxuZoYT8mbnLzS8GqAcV6twVCRkEmB5hRdQ2iiV5y8QnM",
  "key9": "51T8xZ2qLYiuJEAsj365tFzGYSBVnP45ExdWrZJe8xv9p1YDwXvfESWQp3rbCHMGbDUzDzezpeyvqzsdJQriYmHz",
  "key10": "4ezgkXx1HiPzfid3yc1KZ4ETJTqPCQeuzBv1obgGxiuWeFuqMBHaAgr4FpFbpZBmy1VcbDGysTLADqKzY8eKC16M",
  "key11": "REZ8TPgtqJwkxVkdXrYZuLSF5P75d5xohMQeXF7AL5FCDPyGRw4vt4RVHYf5TvZY1H2FL83rV11PQRyNvyxjHrD",
  "key12": "KHGH6WbipJ4Sre7hbPFhbSfiCauK6V8j1GjYswrrEDQNcXbdMYbpdm52v4qBD8MG2KmArLMqJpvqALgiYCT5UUq",
  "key13": "5fGTNUjSexgQxWeoRFB7yATaqH7k8fkocMW842ibScfw8uqJUo4oaUU4AaxFcV5R58LYkytStz34UdKzaLqujS2o",
  "key14": "581jpZ3nGyL2Y5MHBVLU7p3dkoUf8gTvQtxfogKJnuF8fwqbg7Ws7EC2Fq96Tuzb1ebWP1zgNtvy1CGfQdUGsxJB",
  "key15": "2iC1gbRo5LS9ciZGovSA6FYSgfNvHAnvJMaSvHUfwv7nDzQR79zQY3bj8NuZJ7273dKXd8ST8uyYNZhBiGKutWcX",
  "key16": "A1CBxpqyNtikGGTfFuDTj5kKjoWsw6sqhVuSpGT5ZjQ7TvTbJAmJbpe6FoX1hu1SLdDVdykGobrQwoaMZ9PKLYq",
  "key17": "5rGm4C7SWe7C8Bi4gxnWvhQeyCoFyJ6kRRFSpva7AQYMNU9HUv45VANwWaMDJgGQW6mj6EiwBL4fkdupAnP2RWt8",
  "key18": "3ZPNoZowHgtGbdA5kFzxNXX8VTD65QfvScN7DvwKK6CJc1ZFrXbqka8VGtiWaeWuXdbFp2J5amGDw75uwU2q7tju",
  "key19": "3tX79DwhoLkQ8Byxsaftv7dSPfFLRythCayqL6T6EA8LafrKQumRQxvqGyiL3JfGGwuQ47duSWZCgzv2bSeeUAgX",
  "key20": "bS5oDCWy2rdRWrdjkSEvoHeutAmNxWbxqAfWLg5y7z3tybuTWEiQaLJYFWb9w47GHBChtP8VgcV37mCvj5Zfu1D",
  "key21": "4x8GRtTpGE4ygKQrD1xArC3L16Whh2wnYvmCm7C61b82k2Gr1Ycb7RjhXcxx9X4ZWq2KrLahT1NRaTZae9SDE7ak",
  "key22": "fuUvgGwj7YkPqSrz4v6gu1Em7XkhdFnJQe2vARwsqVFGUoZRwGHewHVug5pHG6Yd3dtMhNBsyGGpgurjggL98J3",
  "key23": "5SZMHMRzp5u19nddFQnGFS3hxUhQhkh89Xedfmez6GUnp3jq28shp4BPAJirUuGh7WPG2cDSgANWiuKW5Efi6G8s",
  "key24": "5H71qg4YZ33sKMwfr1bmKXVVACseHoNpmJuUec5R5pv9qg2iAAKjyXQnLL8vhjotCuSzZABNCkELsHayPqeHG9rP",
  "key25": "3Us6SSKBzEJbCWXyTFeHBXanePEvrWECgc2UtG86FocLr4UVLQmXVbpxUmawEehRqf1vtQw4PkEqVkCgBktYK1Cf",
  "key26": "26k7GE3WwNUY4k9PNDoaXRCjrQWWWVPJvYahmpaRQfvZnQSLFLX5qi95csCmLK2ZLi5wYr12CiJBLyXvLyWqQtmr",
  "key27": "QPpftnsyeJSi3yV9YzvGJw22A9Pj9smNxfosqTBTp83vHqvWGudAEnWZRRp1qsFZZe1jBEGpJYGrf4TiQGoz1Ay",
  "key28": "2CfpPTqLyyJJAgqxdRhw83Gor4mw3YWqtAUNDEd6pbHAujmsgirjT2BG832PBT3Y3KeEJ6qeBoiPim1r55hubbEu",
  "key29": "4hrtnKLUx9U3MggNevNjgzTcXj9HZoos2CrMsbES8pAEwVkDUXVwK1LnxLg3s5cxtJrxbDi3e8Y7gLFVwhLp8Nuv",
  "key30": "26vEpixGjNoZWCrKrRhKzz9P4KFb1QcrZQw6AguiPXvZb5RC56N5211S8CChqhQfzG1hMg9gR1bwXJeq2tBjbonn",
  "key31": "JFMcXY4JGZLV1u2W6ZmeTkvUB8NFksBiDnyhNi3jPjwUCYStvjrLgA626xSMaNcByY8AbHrKyktu5KTJkzDZAs6",
  "key32": "3qh8vnh5R64x8AF6ynTtRiXyXgHNRMWoEmbz8Sn7bJ1S1SNDCmMuCmTbsPDVuQ8A5ziEs2HQS4k6d8UkRCFke4ap",
  "key33": "3kP9y4bSjKeL2ooQ1ezQCD8BD9KHJNmhGFMoL2gehgThuzPfX2AoEGV99Ddj5RH9gc8CzwHipQHX7tqhm1XUaQnz",
  "key34": "fgYyyECnSWLgTZeVfqMF4k6APp9yxtW1joaSP3rfoR3RwBQRGFq6umHtjDJEqaAPxAeKCrPgS3yTur2QYxKHe4v",
  "key35": "4P7PAYqTCDeTfqJtZbnATFBYnzqkwrNm89whi5ASic1VWTe6SmRNfqE76LZ6WHAGBQ8YMPVcMGVWa1syztN83XGt",
  "key36": "4VX44xVotRnfXS39eBRbFKDXodL91Lt8nUXNtDw8dCLLXAXnY4aHqF4VPLSuSWMhWQNSP4dLAPoUYeza3hfLgTWF",
  "key37": "5hBDsMTmEiWWqyAJPse2XtjFacqykZ38MPziCZ2nkfNR9RZyS7ULYAU7Y5ip8RuRXKZ4jmv5pCV9GdrJax3BNFGg",
  "key38": "58YqfVHjzjGaudvjoVDhTmP41QrauzZnPZMqs5c2TU4SeephSDaYUzEFAWzVu1MGe9ugG5th4fLoxd4VGwSdsCJA",
  "key39": "3G68VtxnfSNPBTtKtxxTJDSmEAVSv73iGR5negTY9ZiYPmSkFvuqyDZZPxLozZtF1ku9rzitzFttohnS9cv2hfV5",
  "key40": "5Zi4PABTazsHyxVJKGGeBthm7GoxJoYbotZLfigJKZm8xoeusKsQDs6X8G6hpkUZi7DkTDPdE6FJf6ovyf7Xnpir"
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
