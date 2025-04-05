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
    "2Rz1rEkFNRRkCrLMUZT5gMnR6Y7ZmQKmLbZoxa1zjZSd7XVQdMM9bgX6JNFrxWjSRA7BdPj3LDPr6ZQpKQoLHd1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SUdA75ChnTpLeeLkEU9JKCrCapwmPYES9EuMP6ino38DGqdw4HoqDp4xtwQTgWpeHuWJdzgsWwL2TxZzY4AoAre",
  "key1": "269oZjH9y8kzeg8vk3n2eUazNR4rQSAjjuSe3nADJ7cEVMAwvwRC672NboTeiwMMQ6hvGuHZ63aAwEwpPyUG6gb8",
  "key2": "5W8gJhyoApVoS68jrTtFaGhmecx1H558KPadE8Bc5vbCrfKGUmgndAq5uL7ii8mYQr9xGxAiLNo4TNLYj6Q3y58j",
  "key3": "3oMHDdjRYHFRbGuASiBzBj6b4WwaN4nhN5Dd1njqqDRg5Mosp7wwxvnuT5zXD4JnJ2TDRtmf5yxHnR5AG6MNBmY1",
  "key4": "33dsZqPtJesR8UQMqKYpDDzf3s2Jynn7iL3aDSJDFenDzTDvxFZ1ZEKKcu642LQ59ripFFbpfMs4uStibVELJ9am",
  "key5": "4Q67DxEqxD9qJxrecc7Bx5FhgzrRAfk4qHdF8GUxLLPGoQhnR2w9BynMpKjES3stDf7qiQ7E8PLdvF84wzYiA1DG",
  "key6": "4maLo8DZru9yKNpGpvGz3qBThtyCCY7NLeVMSZ312MqK7SV9y6pnzcACf34Tqn12LjsLmwDggYDs1A5tvQvNb959",
  "key7": "4p4UAPocpsrqV1KD9hwmwawRTpZDYUhd3MRobiu1Z4r4DqVQkky2sM8enaDv9XDYDUpLD4Ci7PFQRf6a5sKLNqtd",
  "key8": "3zB6GTDoK273AeucUmPuNS2zHZZxZL65B9NU6MLE5a9MQdz8EnKj12k1x4AK7XMd1BqBmtN6B4jfPn9tq1diw8nF",
  "key9": "5KiKV8aTgHpkotrW7sTfjTogW6cp9GyhJrAWBr1yP6xckbURnVwVH7qWWVgWzohnZ2q3x2XTjaTGtQq7aWHmTiq2",
  "key10": "67VQp3pcSkQPX1ACzFos3CiJDfKsmJ2j3GcERYAa4PuNY6Fc6KtK36Eu67BoqkRYLCfNHH5BEH2PWTKAih17caJ8",
  "key11": "5stDs4G741JmtZ8duvtfVJzu8J7Q5jQqWJw8vDySDAZGWmooZhs3jJCa9vZBJq8uGVjrgpDAC6r692rJwKuxDEAA",
  "key12": "JgJzpt6JhBe1RXLQTHVxPRYHAQkYFY5fThSZKRTjMFqu1LW4yNtV4d6oUHLqNzR4ob9QPtsKrad12AHwW6XdmRH",
  "key13": "3g3AwyVgdWh6rFmU2rD37x7JTpiNq9RaxnNmdTGtSCNn4t5Zgar96hd1uACY5eaBe9wGv4Xx2NeTEeMfTsLbvGCc",
  "key14": "2owM6q9hNPMyTupW5z8k5LwwjLpPPYiyyCQNb3N9f1yNsfooWxecJYYzbjNQoM9MY44PU5XXoiZK9Y5KjaLoC47",
  "key15": "21x7JNZtvVqqBMNtLb7iRmC1sdiY745diwArAonCwbt3dCG7tytutgLRVLQGTa5k9PPfCtE73KkNSB1jEz95S2e3",
  "key16": "gcKUd1ZC19UqAzCpdqLYQqpHyH73WJSQNKoYZgH1H2n49VjEL8GiCvqgiUvJdaTNYMSyHnccFEkvmEomRbyik6J",
  "key17": "3GdX46mW4SB62FLV4i5xRPZZvnjfgxQsKGBwBrwELzqqC1LSPopZWYodE1cpPd1d83CUkDwR6S47BcxV36DzrMx9",
  "key18": "3du7VUVydE4kEFj4a9Vf8obBaENw8Ktrg8orFHFkGkwycRc97nVN8bJshqcjsdPh6n8Ax2dCQ7STq4C7nSGAWTey",
  "key19": "3ysMkeASJBmQ6eZvg8qnPEFfngJ6GdApFG67iwrDN47RuSmrb1iibXGXxkTnDKa8fXpnydsSB7dx6noKzcW5qLGy",
  "key20": "5F2BDgnSEuqGNeHunDocJDQgAjp2DxuMKtcczU1RTJPy3CKk9b8HEGHH2yFDrjrvwqpYF44sXbv311LRSestdJYV",
  "key21": "4r4CQMb4XMxkQanZ4RPwPhdgF8mgDmznUUQZb5ZefEksNfHio6Zv6pDfCpRjvHVjkKn9Z9hrY1oksz54DPdMkgzo",
  "key22": "3ZBNFkDS2Qjjsocnuzwwp2gwJeMF8MowVE6xe4xe9tmnLonjuxxYdoEw6d1dEM7jqFpXh6oYqxHLK1vbsJPv8x8B",
  "key23": "21SeCe2NPW4FvKBKK35uXYy3beCXgaKaqgDh6wmEj47wUHcri8LgWUsUJh1ETMP785bJcqCKBsKRxDKQqnAb99wc",
  "key24": "4L5vBTMi7EDnDNbVTQ2ieZ9D23HQAs9WNLm1LHetJs6RibGSvk3QUGLXoSkhScaLHA5hfozSAkHxTGrNihK91UG7",
  "key25": "58WUQaQxtrNgqPsHHpyihWYjsw6VT7XmiRZZhvyoXxLakDXXJEXfh18GAJAU5wgn6tTCPrDR9wBx3UGDZY4XHPmL",
  "key26": "6HbP433MBJaNeJ5boQzxxjCLTb5CqiEjYDqFT9bAB4M8YdUy6ZMAY78iwiZQ7GJHApnPvdHYXkWfEFcztcssngs",
  "key27": "4SMD8nnyrKVQwMk8G2NxYT8AAGjoY684YRHAUiCs72duw4jqzUqRHxJVzbEuYGdpRZZZ6gXX9yEJdvxDtKbFZasf",
  "key28": "3jEPQjunNpHmA8kn1b9GB2GzjzBsH4QguMvK1XLNfRXy2LWDkdHeZePKtA5w4JqiHJ7YjuZRtQq7tGegDbWscwoL",
  "key29": "5GrCqCreBWkq4io1gP6zvnXgVxzFwUPWJYZ4pANWEqqSBcrrG1L5i3B42Sb5hAgg8PsVSpmYji7y1r6DryXbsEYn",
  "key30": "AxrD3nchhvqDVsX6cXLCVHUk7BAtfJ1qgz2LJ46spyfUQPQ4U8odF8QyJa1Rp5rVB9EfFCeMGZgc89Q1uoVTFPz",
  "key31": "3ed1gmyLCBXgmAbRmeXgfBP5a53BWuTidWEgteXA8KJfz9nWjAugy93CvujvczPqkU2vFg67stvR8WyyTTfCf5F9",
  "key32": "2S4j5CEnf3ByG7vaSTsvsY7HWbx9VW1LnEicXVEeCP5FYgCMLafkiS7F9MFvgdg13y9dtsCjVbbnWZgm2FadzpWq",
  "key33": "3JM8t58pa4srxFD9VacgDiicnv6FfBYLgAvY7uPH76UYs3Rn1z4chh6yjQAraQcMTZtrp4z1XGpa1ySW7qCr2Kmj",
  "key34": "5WsKSmrbU2HP7j1bVMjgTswri5FzvweLR26v7edi9FpXY1ZWr7JGCyKtNaefNaMn3NvRbCnXHfk8zbjXUaNUxx4t",
  "key35": "2XowCuVyGvyfx6fA53bfHsxm8AXo9LjVFhQsvRz5foB2y9pvFhJvXCjT39VjiDo2CfVzKMJh1eGKtQ7Xrvn9FmuD",
  "key36": "2nZNh1x3QBkFjJmW15FLNgkiv5FGgKHuKxGvRzAnNA24PQWkt4PMSt3bECSn95khZr3p96B4zSyGEtdWUjrv9p8p",
  "key37": "4zaRRQj1YW3QKS8zPpsUJiHLrXvMSgXp8bfDasfWoR3X3weyNKxJGts8TSQoA1yHmqR3GnEAnSjvTZgtTHMRnZmo",
  "key38": "3XWvjCpg9fFMcxJE3myucsdJaSqpekKL4dVKAEu6WQjAEpELkyXZNakCcZf1woKfqdtFfJNxYvw8MhU2DAd8vSrk",
  "key39": "45dbd5JGggPZd9ndPZxoEstPgvqmcDuvVtsB56pJuBAZfeyH6hLrzH9SGfx3mGPWJRpeBc4nqDPje2fjH4JrmkHg",
  "key40": "NE7yb5QZxG8pvcdfCr9mzzUwe3abfwRd2gNCRufscjpdfnjgxA5h4vtJnDM1R6PSQ8WXDdk58BCmPGAykUcJZ6s",
  "key41": "5Z92JBMs33TY932K1aVsxv8GJxQN4YGkPcrC4G3o5cnkD9NWKA3GQ7FUcpBKMGQ5VMjyyVgfFomyhuUQeVkrwCeS",
  "key42": "gU3Y9meKbYLtmxiBL2xbE7zQACTK68UC5Zoxj6iPZZq1HvZv5HULzPnQALaYrcGbbSp13jc4c3QhM4NaGtsgxH7",
  "key43": "rXSSH3fEH38BGNdtHdzQJkzH92bTHPTWJiVkHJoUYaAaUJ9JPbHCoTW6M3VGuxujQGgc65jAcqxHd8XCCkfNHYf",
  "key44": "5FK6aZnUaFvoGHjS3Ais43vjZXRLLPLT8w6rzkVpFUFoGL4F5iwUiSi7HM6HKvRDKBM32h5BY6AcyyTepxTXHPZF",
  "key45": "4S6kfCkBYg3oEWofjjUjeNqsEXDQUoyf3ZZKGjNWsoZgKxV327rqtDHYppQVK1rCPy2cdbAKqiUJQ7fqV4uCZpu8",
  "key46": "2XMHDUp1eMDtTy9YAmva4WgEbYB9BcTaURAk8ywxEbVRJvhFBdWnHNHEosymJCPY9kEhZcAU2zaLbQeDy1AotPyT",
  "key47": "4vDA2d2pFLx7zyYLnVDfmbjiyg455Hm28xqwRYufuBW6S82GMWpv7cVYJn21BwrBQwHTmPBeZQsEVe4vjT9Ppo48",
  "key48": "5tNfPxfuuQEP2jPLto3itJgkXjWL8QPDzS88vNLt5qAJcoQi2SSFhQ6hmbgg2Hw8thKdajcDykAkzT5TuCckRiQa",
  "key49": "26yykPpyQCdnuqPPA4FyPWhSGePgiR2ATkj4oP6DiTTizvabrHpG7aGGeVej533xErmBTLJfLs11Sp2S5xuGixz2"
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
