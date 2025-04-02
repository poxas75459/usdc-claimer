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
    "3DpUEGKE8WSKKHfRSGXCgQLpLnGbCUBVU5ze1kqVuSBgetURv9SgZPJgaK3dtBfxaS9qnuABQmkFGtG21KFpPop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rs5MxvMaBFNE9xXwcmJrsSaYPoGWBzeujh99FaY8aDyvGLYDhP13GZkXv4U8Qasifq3QPxZbsPHdmvyFPuB9LhT",
  "key1": "45H6LYAW7Uc61Hwe8PKDWVvRpBUyr6damtURmX2P1N3fCwWXtpXx7KdWD9UVmxXuXWNxABxnivaRDRVniNopCtsG",
  "key2": "3Jz77Kc8RQXgt29FkyS6Fwqiz2dTC3Rq6XaL8Kyj3Qcx82X4zHjzGuCameV4P8zuQYy9WYeVLakcVqtsPgfAKiFz",
  "key3": "SJLeeFtVbpP6ZTTimARJS2QFP9VYEWcZjSK42jfTHktUox76GqYEhLh9noyyPJxMZyNMGsiSB5mg3QoJjEgYo1y",
  "key4": "31vP5fXmfrqsrUhAJ1iEBK19UZffbqN5akaQJF86YCgm39Tfahd9FcTQHrY3PPThtjj7afH3Y6U4wZ1qJLEZEihh",
  "key5": "H3hEMFb9HF15R5JA7BCGejFb16RHX2asakqMZmugjs2WGcR5j4SLAeasxNbHm9J7p3Xyyz4ULmTvxm4wXSrxeFx",
  "key6": "4S6JZgGVegJxGtKHxwk6Ljvf2z5rjXj8vu2GH5vTKi5kUH5um1LrBdx9G798cksiRZm3vTohcZ2EEJqe88oBZKKs",
  "key7": "5BsVNzfxo8khs4Fs3ymf83HnncTF1HzPeVqqR8r1xsqqsf1K4mLffXZTksjByVtXYQUGstPCepF9eh4L1ZdtNHA4",
  "key8": "5488vtxRPmf7Je56fw51qSnGSePXLcxb8bBaBUrCAMpkqqqPPUrSYEW8q9yXJvXzZXJ5tDChWnnWBmVp2yvUG2Yg",
  "key9": "3byTaCWesWx1qq7ptghPRcFn1RenvB32SnX9YkWe4466pYdp3Q9EvV1wcnnVVGnr66cQfffrr9YjfQUu912TpD7Y",
  "key10": "25qvoeE2uiLJHPoLs39DUAGBCNiuroFy5CQin3UiUA7xbJnsSjrzJpC75oLdeye7CwuenWTA4DVcfP2JYXBLHxWF",
  "key11": "3C5q6asN8xcf3xecVhvKwtk1LTtUkSnnu5WddKyqu9vTJGTEGuChGPmzgzFnqEnBBjkvH1QjYJgGqx6S7VBKqMfJ",
  "key12": "2m755AzYFyEq1ps5SjY1XdX48dTwScCPrEWkshvfwjBLDpbwhEAjQTuNiK7X4JBdu5F8SAsnBVACKGJXfVEby8ka",
  "key13": "jJyHsaTLM5aEmow1Ji24uNBS8NC8YQZ7n9NVNeLeste1rP9AEsWPjN9TMQjNTYz46dpNn728Uy5hF63M97QS3sX",
  "key14": "31p4styEyR8ZWrxXsWAkyeRgUBmMzqgM1SWqRmx36yTrxi6Svg2s7s8e1jRG6iYiNY5W1jGTbZ61YtAaiafyGB3A",
  "key15": "QpsGuvJCxkSEFnDqABpjiHecozfDK5BBUBgV9xxTxLsowLs5bm87uHQUgS2nq3BSqaKVvudY9vc3ij6WWVTjaNT",
  "key16": "65yVbpMFp7hXTJj1gb6cMQSmw7zTT4X7LucVi2FQQt66ftbNYocunSgCEdjFoMyBSL7fLi4Ntaf8e3a5ucfwEQA2",
  "key17": "4u65Ad1tzgejzoNDx5121J59CkM3QaunYTkfwBpERV9aecTjcNNbW89ZrpctABSqNxjMSAywFrm2uTNMhVBh3d1B",
  "key18": "v9QM3jmvE1jfHt4wFAmBrD2TxUSHef3sjyFzuWnJvCVNx9H3UgqaA4RMKYK16VdF7VkQSNmDZC84Ws4UW9Eu2zZ",
  "key19": "2r379pVzwh8erttp4ob4o38mgE41gzG3HmBePfmQd18etiQZh928e2iCjkNyntJjAYddEZUrdm2NjQnaeTT8Afbw",
  "key20": "4u9HdwMYHejgsjQEncjcF5L2z58z8TStWo64Z3XUwmT8PCntqRTiPQwGbsqPbAa39wrYoqJcaSrhHBQXRV6E1e9g",
  "key21": "31cGWJQpV9SZJKRqLZ8dF8Nwb3PCCHhRMPtVSNN3u16u5E8GQK9H5wHStsF81Gh6jXn1d6TjZ6ka3g4ZWk5DmmoY",
  "key22": "2KYf36bXAXb2UT5XohmL1EPKekSuno16gZTskH583Wf3mA54TH7TJTT5LTNxYjn2bLnfhJpjRsE9idNiX1bUh3NW",
  "key23": "VCJScVA7EnmDo7XWACCoaVjfg4eyT6fv8wpnaE9po4NajyBQ9r7VUSkLPmQDNpbATuzatCryLv3nwAGELLmXs7e",
  "key24": "4bYzZHLAVfH1cG5EvZvsASiV2K9TWK4nRxthQnNRJWKccPr8Wuzs7NmnCSbAtp7SxrGj78He7zk5brMxwhSrbFK",
  "key25": "UetMTzk6iPVPiNMiVWN1UB8g6Cns17zMD1T1ukAQibefjU6qhVUYQs12QSzDSuJMpVAYprwYVCm5CcaL6cMNKvJ",
  "key26": "3T7Ahn9d4CYnXaSYBBceW89j8Y3ByRSwjxdLyx9Q77WQZfDNzEeTbs4wJNAnmrkeu9XAdWzEmwE5B3XzanerDnJJ",
  "key27": "5YBRb1sfhgCYE2Zv5WmxwU4J7QLGmu8FtgpP5FSNQXWUM29CwqbyeAXXrqTupaPcXTH6GTkUnW5yYDmZNDaj241b",
  "key28": "2njTNTzTrUAKLbAz4WazGdChKLCmNwTacAn8yToCb5VLCArZEHHTCrkaQRPnqe6AMMCKUbUuNKYypCpdRDXMxA4v",
  "key29": "vr9agtdu4vTf7wpe3g25hVx6mXWdZrQWEdzMsdQx2HwavFwXMkdYjNG5V99xbwg4gwgiUDvUvrTbWXxqhwzfWdV",
  "key30": "3qK4T53W9kDpnUzbjGF4YiMUuhR9uyy114NpddQVaUmiqQfnDABd21dYoBiyGQnYPpKxXpku8eexSbN65jTzqbAa",
  "key31": "5f56ziXd8rromxEQKiLnvnwkxnf3XWL4vcqF5NiccuHHVf4f9K586g6MqvT3ak8eVj3Waou6kFMzyB6x77uWhzCh",
  "key32": "49eYcCSQ1s3wv5WHhn41N5AGKFn6rwrQNAE1Vxi1wuVJYWW5WvkvX81wqKjmtQk9NgdrsiQW93xZSGSN8DDjgDEi",
  "key33": "2BCqLvoYHgjFdQJWySVGBKCAhSiPfb3jmbHqcAaPaqbozEYDu7W51d2nKzXhuLMamYpGSZBENY36hAbqfanKmmyb",
  "key34": "42VZ7gVj6eySpyDeFHSScCaitcFp7cSAVyJxK8xDMMss8rT1zKiPRNazqwVZqaSj2C5mZh5dku9VHRZJ7CACqTiG",
  "key35": "7LCrZt1RGmpqBoaGGPDjZwP1LAviGED4VEkn1hs1PhSEBDww8dzDzjmqKQCMwxdGxUDexdcUJ2zVQqAbJswFH4Y",
  "key36": "kr1Vkct6RoQL9iE1YzaaK549jNsHfHXD2EBAB2M3eHZ8TppSyxv4FfMDAk9yMmqwuT4GatoBJ6g1c3CUd5pUZTk",
  "key37": "MgC59Hwuqg9V6Fwt9hf9NmtGXQrqm96UFHfcBNkhougXSiPNfjxuscqQN5F8gzdQXBm1GsNMau5ahe1vMJQWxg2",
  "key38": "TAwN5fbyDfpBTS9srXuDREqj2azGKBsZsBQbw1zPuvM3TXQyiakonAy5rNdAvteBrr3MqcPXtxxWnGncyRZpc8r",
  "key39": "5AhiHhP7MGRkJuKd6izzBWi9nhSUf1devnVoDGzyDejFvYPCJ2vwaH7XR1HCxjfx6AjJua8Pe1Tc2L71sgVhtKYb",
  "key40": "2Myw5QdwAiJejDDmdU3bg3Ex463t6zjvfvyoqQF1VWtFb5sAZL5euZ1WEr3rC5EEQkhZXpNvHvzz6Na34bXRhaKP",
  "key41": "XsXK4mPJNwemGmDLM5nZxFotrAhVeewzU7uk1q2QDgnR2juixqqQyyjtRYusc2HvenzmTF7eZ6XQZ5QAEpxzkX3",
  "key42": "CJCyipNGRLzg7rCAdY1ptXz9jXMFPTYcJx6C51tANfFribvhmMNNevznYJzrFrxyEijKVVrRG4LwsW8ZpwSu9pq",
  "key43": "3YLGUtFF5YjNC4rarmN6ig7Hjf7yoYJiEehiagxg6aB4tD3ZVqnLiVZytW323csFodqh716iAQiKrEx9t8HUVgPm"
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
