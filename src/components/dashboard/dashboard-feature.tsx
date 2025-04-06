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
    "5iFCv2UGXJ21hWeZ7QRWBPUZb9SfNkKWdrioeeNiup1UQPfrgY3DcPn1DMAWukvNwrpNYNdBPRCMsNi8TN2im8GH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TfUbz4a4bMZsBax2vgGiEHy6Q36br2QhZ9r6NqLMkWPMD4TyEtQfjGczFh4uiSKMyTjMra5weZmX4mRdZimqVqW",
  "key1": "4sRqDrHdaRMo1XqjaVcceE6aJUqR2mGufRx5C3KRXng9ZvTw6LjDebRrayUgKMha8H1S45jRf84dUQa3BM56N3aT",
  "key2": "jnzP6Ko1H6Z7nYZunPhPZ5KvRWUEPkeRASRgZMfPRp6cAkxdJF8cnWpV3hVHDRBwJrnfJtzqhRqVpQLfJMw2fGF",
  "key3": "5V2jN84sxe6BhjYiuXLreFRfEVS6yBknqVD4saaBs5us3ZYzwhyZSwTVA6ho525WegT7uhWt2Mfb6zLLte7KLJBA",
  "key4": "3htLbStBASx5NL75NJrLHgnRVrfAzDZc3ZYphxcWG5v87CzYi7oZRJfejJ9B5CfngXPU3mojy95wW5WGHL4GVYCL",
  "key5": "4jTHtJs9agvAXAwqFp2qNXNRfy6oMCU87ySZRQFG4BUr3U6rK2GrwWo26JV9tCVRyTbhw3RmU87Lij8qq9t6gmMh",
  "key6": "3H14wGXbJmxxrS5tLve3Rm1BB3PBwo5XyaDy79phS8SeAKjYqAsm5Rntw2YDAoK9CBcjU9eeHmfmSizeUa6W6CQM",
  "key7": "3RQriMYKEkNyajZH5pp3uaoYZuXWeTM8PGUdVR3z76B1t6Qzau5SKJPXfNaBqq8WbXUiiUTfVa6n4fh4C7EtTshd",
  "key8": "QM9hXnX2bSUn5EF3sjLS67LcbxznBsqmzYM96QP8onMbKnTY8tW9iNonh7Y7hswL9jaZPCypiwA4tnwvdk9qSuD",
  "key9": "jnK4VX3TZagFQpcAATdzHMSEshg4t7XfnzrhV742nFKXAnHt5cGb3h7RjNFp5P8mUGTmzoG6RZuHqzpBPfBXmuk",
  "key10": "2gma1BLY97Sb55M7QnH2upjvRXbYZB9qgMCQw3tMAcxEX82jtg5dZqHuqJu3vbgnafbWR62E3iZ8jkUUPVDvMtLd",
  "key11": "PBaExKymqDincMbpGDgCu8b2oARrZN9igutApd2G8vVrSa7nNjTXyURqtLJdV5Y3sBVEWdY6NycaRnoqt5Q8jMr",
  "key12": "2kbZK5T5vEHof419GTGFxUDNyHBbcrCmDE56ctWJ8LiDmGiEJmEWPmtQivxEMNGWq5t86XL1mJfjZFg94VbAXwNH",
  "key13": "3zVjcTxDwcsVXyJfa1xuHjhsqWf1GGP2vT2fuDN7116GwNGZzAVd6MGnJE8txnudQJVjhH2WVwDKaS5Y9hoDswsX",
  "key14": "2kqE284Vn5uL61M6WGCiy8169ywQPqYUncd3DPx4AQh2nMoEybdMXWgx7Pa1eXCpPEkBq8k8JBosEecQNVX9Lzcf",
  "key15": "3vZXz5SkJiW3E51LzYAKRYP7Knv6Up2z2KSKDytfYBRbGUvhSVPTybTW13jy3kY5pGKEmhm8Q2QVhpjCudXTtXeq",
  "key16": "5jMS6BmzExezDZu8ELQXvcsAsPcdFynwhPQV8RF5MqC6i27T4iT21MshuULnaPHsPeKjuxZTtC4MUnAh7bR1kmvb",
  "key17": "1GYAgkYskDzeEww9BBFLzKDFN1aHG6ZJsV5T1mmF8Md6XEhggpTKZw9wXEzegv78qiW2SxLEqRsuPb9qBCnMYet",
  "key18": "2pw7odnocQjpBH2xKSBPjt7x642MnyQtJmu1BTB6PT9ZWScX7tDQdFoYuVDTsuJCEAKcrWM3YHFRAbE5kFJLp4MA",
  "key19": "3f3y8rXUBAiyeFJwT2emSC2pyWQnbXCoAiM3TQS2QAuyjUv2iCRKB6bmmv8vpUhb37fuRmfY2E2mJGraMWpQ378M",
  "key20": "22A8RndgNBAQWDN9FU5ktY7SjvkNKtjF7Yu2gpWFo3az8TSXkum2PdEsU7wmfa89PnHJySX5H4ziXEi69zPCJga3",
  "key21": "52Raa9CigorxDBtAjFfqbVY6iQ38gVQrgbcsAX49b3G1k2grxKY58JYhejDnJoaas6s56Hy7s1DQSsstkYpQgiXT",
  "key22": "4uoUibEs3nmM8EZcANr7FC1E9yvFCcy6HuqRhPAzhub5GDf5DVM1oWp97VkuqSX83kxdyY1JSqFyeJ6pQZipDTfk",
  "key23": "5YA4P8MbWJcQFqroLaaiVMDJMTbrTFVuN1UC5KFqoCgpG7pB24sFUymMhQGdYJPhWfzj61PyR9T3VaWmni6d5P6e",
  "key24": "4QmU8pqUTKahhCvjVRvhuZG3RVPbUJ7h8baGWtgC5RMQTfcAguS6RVWo8FkE1ke3C42AnghguhThNqqtc2YKphYM",
  "key25": "51rYRcaw2oo2tZWmtjRRwLELp17JYSd456BatqVhLM7R5QKWGoxWUhZXF3GCfdjbiqheDycqT9oR8NdSneQwL28Z",
  "key26": "2naEtuEZyrvwqjAKyaUBsHC147EA41gxTumHayVpQiDkxm7knZzCMnoP5H89so4wW3bjN2K5wJ66iKtGL1cKdv11",
  "key27": "66d4WLPE8z8yjX4xa7DYtkUQPYgfGmk8z2sbq7Ry9849Ju1YoQXR6ciUzaysK45XcNMZ7PKsmxE1QMifSYeBnraj",
  "key28": "5MTcQ3keYD3abv2uoyBDWnZfDR9uoahpAfw1pjV73jGpJmTYEUqW9SEyMCQSCv3NCVn9xq51U5JhkSGCeStcUxpn",
  "key29": "4npZAX6Xw8DuaWsmnZrSzETYtBqKmauR5XQguUE41ibpZ47VL5RzaPLqcwYi18Q1AV7HC8pYKyGpoftMtfMfwGUU",
  "key30": "3b2FaKJ1ZzfnTfShGa6jC1ijuiKgZzf3sZsUb1zWLUcfyZThaRWn3P9VykaTyKHAPnSgSf3VPvJU8DdhqQVbk7d1",
  "key31": "2mAYbgs8jFNq96byta8DDJ8KJ7E9ur6tgxKK9TK1XMci2d5y3UwUQGsXwaWdKJBXWNtS7n6ds1Y7yssuiQmbsynV",
  "key32": "4qekks3q28K643vNezZoqzoTkvBCh4Nar6usu6Js3Cvq2bcd1M6aUYKXM6LQ3pT2oixuBWaD7yUnNAakSRtjdBUi",
  "key33": "4CvEVYGR8rw3JMVTa3BuAa7cMuVwBaQraLCPuyr9pN8GXZRRuQJDYGfy7fmgRvY1MdtGnEYa4EM7ca9tpbBVNZZz",
  "key34": "53yri1SxL9MdpEFwQRPEqUJruPQTJ7HUsdEYpaqtzGyXQSDe8SrtReiXVUfSUwrgceb6EjryfRSLmHDYXiJBFyyL"
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
