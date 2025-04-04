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
    "tbHGESEvfH2GKCcQoJBugn3uNJcB1B5yN2T5RUs5wbryqRtAXQbNPqCGBboTwPqSMMRJCUd6mLL6rrr3Tbb2zqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TxBs3SeBaDCotKuyEPwwKdy1odDs4BanyWPE6UYZbBZcBZiLSZp9EV3FbDgdUj3J2BoZcWbrHkWRYNQW7Hec5MV",
  "key1": "5nh8yuvfiXYZnCe4jPLXDyxn8KHZVzE38ex8xMBoyECMgUXgiiCcEPiZc4223zvKcN8wRQt5iJBve787VzMRHF9P",
  "key2": "4Jp22vP6ym9Yr7AZ77zWFRKTbHMPpw6KVzkBEgVoMiQdu7eKYrnzaDaYbVQVB5KqsgWpmwFpJaPUwuCkpwc8b3au",
  "key3": "4QN3U4EgB4vruCnqbW7fxAvNbRsCdDYzNf1mnfbNyZpmYTDTHYtA3oPs1D4ufBQcReZXWqoopn9QzpKLgXrQ33zR",
  "key4": "4Q5LnG3LKtAXQw2VxhS7PHSqKjpcVHXVRkPP8J3eYXHL6C8oBRZw2ZHwq44Pjn9Yq75RvrursVTieLKnPchDVE3i",
  "key5": "UyenZoviC8ouLz91aHuDnphiNsaBqX5oC8RBj2iP29Jc6T5qMocVdF53GqDNPxb16iQHimqLZ8BMScg3n81usHT",
  "key6": "2cpg5tcKCJ4WqRF785JBY4fXj2cC7i7913R3x1Zt4yCLoa3kHY2Uj5gsX4iQaCvQWf8ApCfhAZy2JESw4S3hTYyo",
  "key7": "3J5H3Xsw7MHYqR7NqkpJtcy8RkVNKvLPk4RPk5F4zUbhUiM3f7vvciYRupHQjr3obWTZ27oNHzWTQwP19mtC2V2W",
  "key8": "4RVLcUDPP73ufU25m9EVcuxChbcHWhzaRDLxwhZaG3vgTiz5LDjPc6oN3nknWMSydTDeaPCKKqM189pRa5ayxSHD",
  "key9": "3mUGXWDoG7QScrcZSiqMjgQTzfXCsbJ1Z2wadEoZ5bZEypDjBC5FH56CAqdRtxtXY2Pvy9aZW2GsMgYDe8Kz64dT",
  "key10": "4SxqeVAAcJDYLWh1ESsS7qzTFZnAzJ5mCLcQoCP37FCKTrRdreb4gJS2uGfkQ99NB3XrZKwnSjbKKb1ExR5z2b39",
  "key11": "2zvjemZTKnDd7A83yyo1N68rJty7DsJPZvkTVTPb1wuuBFJFBQdNDuFANUVSCdKXP36Hi4Eh8RaJCdJrAoadgqqe",
  "key12": "2jZb2AmRrnvSdAB7Fp1taHdM2H8xExQ3M7YhYb5a9y4aPp76a4BMA3HXwMfWKgni94dEJsihh4iwfjwjFTg7qjHB",
  "key13": "4zDvNqbZoFRQQF3M4bmcPb9Zmzh5W5vi4sJ1vmzqdqXYTr6kCH29wtG2VBUMWwvd5RSBwNKS34taaWANg1EcESAi",
  "key14": "4Tk477w144NbGtcuUCkpa8VAVN7wx5YWqSp3gZoKQ4zcAqPAzFNuHvuQkkUezyZS3nrcePRHG2eQQpmhjUYX1Vng",
  "key15": "3kZrnzFAXtdAFbW691oRau5CAUFRi4NFMppyKcu5ZgKBwo5knFUafAJmpc1QJ4GgHzJgajabbQnoqSD7XYxovM7f",
  "key16": "gaEufPW9BsL7btoQDjL7m4niUi6eh5vjXSzKshz7F1sCmMAEqfEDWzrDZfHCR671gJ7Nb9xYHnJxmbinL5Tktpe",
  "key17": "59PmQCG8CgaeqihvJmjT63r4tr59jCzfjYxXgbprqypN41dWp1Rvmxg3zKu66aY8DTzvWaUyBuYSSxCngfRxusEp",
  "key18": "3qLXhncXuNNX2iQnG6BuBkKd7MNqxFTEcipnfcx8Qw9tiu5joQVKPJ7mjve7LdWH5wnNgo28kNTDf4f16ydHV9KB",
  "key19": "2XiyyEsri3RrMrf6i7SvcoX9vGjgkTicvef1DbkPX4NRhPgj2fzk1AeR1LNxFrhZ2rbDhRpiqopRMRMicvyvN6X2",
  "key20": "37YQbpJ14d7regtWncb9nAqUUgcdLgLv2UdouJCj2tFtk4yZghaF2YpGHu82ief1nFyUpLK2PbfNrpVBgFAtfkZ3",
  "key21": "4CCefDetohZC3rDDnP5i1zjPTdzJvomoXycy6abCgG3uMCpDK8ej9npwghYHFeZuitX86NZZAanv4prkerZ21GmY",
  "key22": "3oVBV8dKQA91VWFmMPUBmU1KjHcimd8kJ4G6mfbQ6kLBQjQMhtrPAJFosHg8RbyUfrJtPQwcvKx5W7TKxkr6ZgfY",
  "key23": "3nYmcd4mnK1ojEvz9WGf9MarfH6eQG4TMy9f3MB3ZHXD5T9FQJwwYqEGnGkHpwjceXVDgbGRSG2EVq4bARdE9WzK",
  "key24": "3u8QUBoj8PFz79uo8imyLe6qqqrNGSwMct3VSn34kx1RiSqtVa1UNJmnVDqVe2uMhANAsGtwyCmQguMYCSN3TqEY",
  "key25": "3QHXy4DRNvBmN5WzZtZgjeFHxTEJ4wfPgg39VfEk6MSCBDnJBhfDZbvXAccbN6DWkHdYFpBbFZcjWS42eLbXqA9q",
  "key26": "6SskZkoWzCQPBW3ddKdgQTrpsahCtxD1vYbfEeUinr52AesxxPNcTtDJFK9tsQQp4Tk644a3ZkAv4cfvRiAgVeN",
  "key27": "5LctcbjACt4emKyzTHf84sU99idMsm74KJjPSSeRgdSax1TkoGbTSfwzRoFc7SspQo6pFgnGBW41iYor7di4f8ue",
  "key28": "5a6EEyoPgs4hYvvuvgzvoJ5FMcQb9YZJu7k3YJ9z5JLsqaF2MypwmPF99YrfJ3oZR4MPC7AVkqF4AGUKA3UV5rF1",
  "key29": "2YGbV5iPaGb519YTwZ45hZsFTSmA7UBbDG4pNVNLA3sQpLPWiGoAkmc2crMdn8CZe7PNNAEU8iSogW3FTDejkotQ",
  "key30": "4UbCRX3XxwN7kRdNXfRvqBhSBAmAdfo9TtNaK3biZTtTHigfJVTBfHRseRe2bsfxUiuKW2LNxveoGNPxp2WsMaCP",
  "key31": "22wWGdLc26373T33rCo89U8kEH5Kx3JoiMSxk7mBck5y4gyQ1Q5y6nsvHqVVMZoCpbHT4MJhvQ2iayRBeHDzdqrz",
  "key32": "4XJ4zmr2NyThAgHvk7NUfC6oCDFxU3eD65LQkRjdAYQDVjPayBkRpaWrn5AwitdiiB48yjPPpDSZBtqFyPJ2Fp8M",
  "key33": "phod24UDAVMNXvGh85CxAig5C9cL6FL1K4wmAapfkvBCEDKikq67qAFDTD8QVbjk8dJQZ5HjKoHjwtFXy64QkCb",
  "key34": "2jziUEmFkwWE2kAQZ4kAXYRhHCz4FKdWk5CJcXdGTGsJKYJvrEuWRC5nELWjby8V99Db9svMQezPtTnBCnjzAG2D",
  "key35": "4o1FvRhnesfPcm7dGCDgBY5VS8SDax2uz9vAemv8KiQ3YnDTZenRDnUJWpac7cqfQ8TNhpwAEqLDDkpYMaSZW4X",
  "key36": "27pfR1SDgvPKeAsVK8afrmB9zb1VqPNNWoWwtLDnheqmKD5ycmmmJwiRSbbMhMZq7wHgtqv2JyKfqTH4u75aFfBc",
  "key37": "343suoMH5N3VUnaaHRczJS36A23gXNR4Pg8eHpu7dyojaZVeg85LFRgPpEYd2xwLTune9bDWx6JDDiAUU3xAwk2L",
  "key38": "2zijrpZ828W2W2fQpYuNvwGC85tHZfK1GuN3DAwfuVMtZ9MUUfy1abkEK1G3kmyHAySyqqoQDmHCHQT9Ngmc4n8U",
  "key39": "Th1SaYR6yMCeiVHjUw7sc5rnDdUyLNmquTpfAKvYr9C8Nnx3ZyTzkrx4ttyX2Nk9y37DgERGVzeRyaSpDYLgGmS",
  "key40": "rCWUfJtoo1MjDf1DWh2g2nXKLqQSUDfiwimfWvGSnVBaz93vSdYahc62QpJzccEao2AJqmcfdLGVo43v36eSvzr",
  "key41": "3FpPL5f81c3Rv7o6H2R79toPWZG8HG4dcNBcKsCLQPnYzQaLWPz5N434oufcfWmG6mPzEFd8gszmNQdFeBnPujxC"
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
