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
    "5CUYQjjLG1CjxcTAezEnvsZyLFXZmk6aWPkdfMKJJNT1B8Qq8VuS7pQ1n9jszkkcn7n2FAAaxAbhRo5s2xRAEMS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7C18f4kjSCQfSuLZn5ypPZQ5bX2hNTRBR7dRyyhuhp4z1Cn6Kg6Xcw6qQ7N7xzNU6vSB9mU93cnvpWDeu64oTA",
  "key1": "2gEacJhRY3vQhtf4dka9yMCLt4kNExBQJrBGpViSWjcxdxnD5kCiBHJMmrca53DZon8KoS1e41CmmFVDHLXC2o26",
  "key2": "2A3K4ZrWAYAb7VYCe84Ppeoc5877R4Rqose9ESTyH5P8xBaD8LYAKRLC1p624B9rk2At8xjFReE8LPCfjYEJUKP1",
  "key3": "5qmDSLzCJ42eUvvds7JSKhWgAgpomr9ZHUZ9JnbxwdUmw8KdWTBpmV2om28iPxHUhkFnYbctkpSzn5LPvRYfMsZi",
  "key4": "LGp11M6S6emEWSTbjqbjPMerMwrgxS87xVLQCLPSXNwgSKoRnMqZEexiW9hyxZ28woWp9hF5Aqs8oREFHQehYB7",
  "key5": "G83aJfoEvFPmcZpfmqb8Vv8FF1Ecff5Hdun952AdJpoHzkGVsS1VJCtJL1wZt5ZiNM1WCDZAajgWE7Z7CuaDyfW",
  "key6": "JDBE7WuZgE5eCfe6EbqMDkApYzS7g77PsAA4a4ZL8C7bULnkuCmMX1gQMjs4XcMPnsBthp5dYLNJi3NFqwzNCvr",
  "key7": "53m38f9QXXMmKVzswAogonjVJTta6FrQ1EFDiMkfTMVCmgGDS1aPc6zuM3CKoBBJUmMw6nsUixfrgDfBpn9dKBFt",
  "key8": "4VYHHgJd6N6SnJq9TuANqcMFD3fJzggvsgQxM2dEgpysH2HGfoLCC5w8ETZpgG8QdNxybdWPkWkt9MrJodwXMc5b",
  "key9": "2UfV6GJARjTPf8PSYFeEsSvdyAVRd1UipmZvBGNPurnsmFzRK1t2pRCMGokuBK5gg3gDccwCkMarsdP7abkZPzX",
  "key10": "5aZYVVVXPYQ4q3iwoGUgWui777AHzcP6j8BYSZeasNFW76H9vQKZtUybEC42GQGHFhz6jJkBxSuUnW6Jy2K2NzQV",
  "key11": "3wHAr4qb6QjnDdYSDUkKFKf8W1HwLzaAFUGZ5bmhgY9He3K5xFEZwoZtcg7uaRgcwGAHucp6BVnzzoWmWT6DwHL6",
  "key12": "2WdichsGMsNfPrKi9aF9hLKpGRkN9peZnauTaWNqMfuPcw23gQBfCctCDjMQyepU5AfaQPkcJLyCgiFPyDoP1cfD",
  "key13": "22SgbJoU5dRbpp5H8S2SjSn1kUwhwr41NqxM6YREmzAYYWFZaBuDm9gh23Bbsy1fkn9NvQWjTocDBJ4n51oQzH3s",
  "key14": "2UgZeuXQcQuz9sDBz2gqH5GVAiyG9ZCEEYrJ26pQPDF4GMc9ZtEmtQv3g5WRtMXAQDdAk7h9JPsqgJKqGUtMjheL",
  "key15": "3rjUZEa16D4PyqSRkLXp9w9v63tDcssmGewV8zh1QEpcHfxnsoJ13EXP2DxAaUw1aj2jhwrAxTiw1BVoaqcQ9eaZ",
  "key16": "4AmGtEuKC3CoASyghEj2dNET56a8pgXKFXxJ36FpcPPh4LH4TALpCoQy3aGPmt53HKWkLuGNfkGs8bH2HLz8LNLw",
  "key17": "4urQG8xRaeX5qZD8j5Y319NUk5HjSgt3ECNAeejcqPKhiSsgB5jnKcfymTgt81svDPqooXovktKydAv67BZHmBQq",
  "key18": "8bjKiDr621hFaccuUHu15xwn183ZUEy6AR8z7JCG5Kky22bzYHEGkuUtF4QeniLaBVqGmPg9D9PFEJUfMXEphYQ",
  "key19": "5pA8i3fv3NxryG6VsqKhmP3jaigKSUUxMoLzcgovyWgy8DHjeBdEjweWLMUSBMUADnUxrGS6MYthYMazQhkGmAuS",
  "key20": "5ApZ23TAntQ6A8S2BuXMkVtFwABdqHCJw1yvwynyWoBpFMaD24EWkD43w1SBkmdXDsbosZFzDUAFUEUxMjY2doDe",
  "key21": "DnzF2Sf8dmbbo5srLVWjVfnXBAxVziZJVVv3CTtmocS65NfBJxNCEqFTT8z4wbZqz5ft1xPpqdzaEoQ3r3Y9uSe",
  "key22": "39fvkoXbqq5S84BAx43NeXyozkt1LirsHej5wwZbANQkQJXCGGfL8w7cmUPLF6EL42K2DfUisV7DvBJzoFmCJBKA",
  "key23": "2GnLkGQdMowsb6kdNw1Z33PgVhD7kEb54ZtqxNzea1zsksSH4w2AdUjrBv52zNGBpURii5RFqEECAZ24Jki2jhHa",
  "key24": "4yCKCzM1Q6xA7aCsqyiemZymrZWErA8vWkiico7T7qYXCKjtkirvoa9py71NueDPvcE1duiFTERckCi8nUDLLCBU",
  "key25": "JQuKBnzaX2i7iRo12WHUVcEXHyRMj9NQGxiyrCmGNNf7cQNzBiGC1hJKd9u7iZyWUCAvYq6ZmACiiDSEZmhHA9n",
  "key26": "67TAnnZSxHvkKdiXAxs2RS3fdLHnySBu6pSUQ88SZ4eXTmhrRSpEkEw4HFMM3ifLSuJrdMnNjhytrHcHun9vfKMF",
  "key27": "2re8aja8yhuTLMLCs4ga4mMVXDDruyvcYbi5g2aPndMaFx8kKdXCrpyWWQH58PadcHABa97nfSCuceJYqSBSiTHq",
  "key28": "8dTBYq5rqZPKstAciqorj2iCzUN8HwfEFzBshycS5rqaGchSa8GKCxvHdGSSWXQXztBvMq5Ho8AxguuXUkZGL4e",
  "key29": "45T5ZLxsa4Ezm8qCLkgXWBvtTymf7obmz2wSqySXgbua99Kf4MRihT3LViLD2ExXvn2bUDvTVGLMzQ6GYVFTwMiX",
  "key30": "4nL8j4KsRuiTqLUq9r1ktEo7shEQBpFSqr2VD2TDjAvZj58fdk7J8kdap9LtGRE4en482kS6WExpiURRnJUz4jVb",
  "key31": "2jzhiASGNsNdzTwbHpn7v92ognua7E2nS6EyynhtvSnogk2DPbsY87T5eBxegMBqPtC5MZ1ivR9A5tEHnUqJTqku",
  "key32": "51iN6YzDC9mY8eVMrFvLYnpnRt33LBUwdvxcriR3uJatoM9B7KHPcF6wiXFiduNFvGJa76XkyLjmLHV9cBwCPSam"
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
