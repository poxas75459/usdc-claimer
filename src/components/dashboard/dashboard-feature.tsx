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
    "41uAkNA16XNdkianQw47Ae1Pk9Yebf9CaecLuxL9NK49BcyAgqLikgghCH46qQFVQrA96HvXw6XDHh9MBFueHJDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FCooBhsrX8i4LrxRzWAxxwq92JwZSBjYCXKHd4EXUt5DemT95xG1eTk6figYPku1e9B2r1tMaFZ2qRuUZrWhw3s",
  "key1": "v3wwEgBtzudF6ntGtzgS1eRSC51cebC1iRULPNruNwKFVNMGmJu6KJumFpFfVywUhK5S2Bq4SrQ7sjynwz1yN6Z",
  "key2": "5UKhqCy1ew3NwYLPxjKdLbPgyH1GngB9ffE1yZKPTxwQftWHcXsqWNJoX4iBwG5rLySiYFmrW1FgNpXWvJd4jVmj",
  "key3": "23PDyw9ygNx9g6nwWmAMKFekNiFdVgAKaLKsvXoG61sJcu4eBM82vLAS3LC1S4eeovSZFD6ywGFv9hrD9iw5hwuY",
  "key4": "41zbLwZ2GkuevyJsLzL7zStLvn8pUgRD3h9k7Gcj3dL3FkBAti5vnsHAD8pBtQLnoaSuxddnxRR8e4DpsPk1qekt",
  "key5": "5TG22Ve9epvzg8R6Rw91vpmWnKCAa5N8gRWQZZtGB5uh8vBPjjx2HyyjRHsCmJJ1DB7mi79hjtW1otrm5eYNrnmN",
  "key6": "4Y1fvn1EZa3u8czWSVHRN3g5RDDrWds2vRX8M4rYmQiz8W27pXKuob2BMPmB9dkpEBtndXt7AqT7rqPn1PfFA2YZ",
  "key7": "5rdok4nbk5kPHMajL7uNpemDb2EQwnSLxvLm1h1v2E1iJZ9arJ7rRy6ypgo4umewBcJjah6Nb3WM1XrqE4n9snEU",
  "key8": "ELGkNxzHzrzG5sffVWsModfBHXSR6ocLUZQM5A6tuA97512eDMnbVLrxYCR5wtsLL5Shseas2wSFt84x3CtDUTR",
  "key9": "46ncquksM1Y4vrhJiRTCKKFN5pGJ9jpqjrNwovTvA8BzcR7kBBYzh2KHTYQfUNDAxkPrnFvjFvBHxL32YD5RVQPK",
  "key10": "XnJn5XT2p9KZGoAtE7yZ5MSdX6YKfTsq7Y7JFBcHGAj4YSvkW1MSFdv3H46rDk4WyVv2swvLAvDNWJo8Y9c4h34",
  "key11": "5syCjSwpDqytpZekr6mGpA2hYaUSkhg2y9jDujcVggVHcsHPpqZfmygHN3z8dezkSvVAxkkEWP684pQyD7LLbihG",
  "key12": "3wcW492mFkGVxGS9NLVFtYXkDm3j6zqrQjhUvzQ1Dj26igPFTe3JyZNBEjF7enDisUTLhrPRGDzQFX4LPFTRzae6",
  "key13": "nU6frX7yxwAJ7f5cpdsqFyWK8kGxCB1hPsYtvr5ttTKCQd7PNyorhXyx1eFZjZsyyXddRwnToBraRrD9vq7uWs9",
  "key14": "5G83m97fLQQqjSfuaa13aJeNg51639wKHugsHUxusvfzWMLyGPHbHa92wMaMJz343wug42crs8L4VwwZHM5mxFCq",
  "key15": "3HxYvkVm4NSsJbmhpdAoxL2bKxpDZQkceMDP4LAWmPHvDZYhcZUSzneEc5fP4iStfFU27UWCTgaqqNH6c8RYUifT",
  "key16": "45kZjAXWHkeapGCppzzP2TnEX9bGVArBY2jAtP2d1DqMXDsoUFxgu11F4sxKQqyriEnMKrzLuMPp7eU2qsMFcScM",
  "key17": "3MHcVDv6XSNNKL3yKVdGWpH2MBKHQGtF1G1dG6uS6cemsFadTDRa7bFMWX987MWJRmMZo3fnt7LVTRXeDKCwfW9i",
  "key18": "ayGW7is2fCCvbMPknY4WHF6vGtLBWkT4k6i3TUpjoRjTbabbUmq9JC3ccJ8pnCxCkcw55HAFDMW8iKS12zXDJPs",
  "key19": "4mmpcjvbwJN6fG4ZTYmGknwh5m3rYMrYcuXKE7Jiohch4JfnzNgnGraVbAVVv6pqNXq6EkKtNgage6zAeGVVDxQu",
  "key20": "5zzsXRaQi7EGa4qwFNtFHpdjWe3Y4S1pBDKEk8hyahmHQTAWGxFnsSL28aqVdgfCTgjTSiP1fkX83NC73JMDJmjL",
  "key21": "2FAAcoFYKeN6KeB3GboW4csRrbWT82oRRQRUNdiK3aczAgitcpfjLkA6VottV2M9SHuLJjVqbBh2yzBsqLXCmWPV",
  "key22": "52UT5yJRA6i1Qj9P8BH6Bewu9N6NuDD4AT2AFRHCUEiaqLxMdyRqT6Toe9sEJB4sTR9sH7uemX6AN4pLxYaV1Maf",
  "key23": "2o6xegk2MtkC1dzE94WssYhS9EMYtNqsMmQCo5zdWPzKWE5UDyZ3bW6irfLqxks1vUh2PW4VhEEdXtJbuhnPZXJB",
  "key24": "23X18KJyLmsiopjrSKnKmPbEWNSc5oMyzDWZMg2xnHVBYi5S5Yr9usQWA2McQWZMUjSoGTDb9tDuc9xDYfZo5TWs",
  "key25": "5Kez1KUgGquna1CnmhHvmxmWFvxRbtGo9SqUUwMK2mLwuYEiRRWjX7H6QjwiNazyu8cdevaGv8zdhyU5jU17LUdk",
  "key26": "5Lsjh37S4kH2Lv3DZ1xqGfSZnrV9gHrXAWKQHHj5s97bePr6fCGBTZhzRD6fPi2YhmqCFzPtKptkkkYZTWaCR8z4",
  "key27": "2t1guiXjNUKAKCzGSpesg8HGjGhKC3meLzhwntZ6jmzgRmTCFTDScacJ42qZtwrU55d3W6sCfS21RAGyaBNdYbwf",
  "key28": "24rx2hwAtmwrGkeht3khoS38psVafgp3e685j2633fAPz5eridNkkYUpHNcLkZHbbP8vFCmdZ3eZRXtuQnpwr6UP",
  "key29": "5GU4a5TPb7KVAyiL9HzRa5FSnCGKNw8z2UGvtWfegtDNvGHkVX1UAQLLw93S2K14LdzAvGNeNxSW5ien49eUHQjU",
  "key30": "2nfnzMEt1yK1tb6VrFUeCgeTxkZ92Gw2XMMa2TWaHWwfScya4YzGxiseK8qRfWSgFFgkQwChub8vpxyAdG8Cd6cv",
  "key31": "5qoSbtbipPTU3TLhnFyx8sKJ8XF7YXT1Dc5gXk3TAuThEhCaXNjQNoiiQTEbNbs3pg3dfn7E1pZwtRnmgWcXjbJY",
  "key32": "37SJE8hoYTJewaMpksjWMexcJ1NZkuT1eH2AQNAFMLaKtJpYQuM4s7uDx1QLL6aCVwDiP8yZ59ozFeRZEYDYUwy1",
  "key33": "4JcCQDgzEzYejEL3diCZmD8BYtJoym4e6eJuErruvNJfxzWY6hvPyVrhyVY9htD7ZgjnZQU7eXGDrPJdAwiMc6es",
  "key34": "3gdVBA2S67sg7iYNGp7Adr7e2xEQsmSHUbacfv1P4VXkz2C7ZxkoLNu8cA7t9UE8sTVogSJc62PzfJ7yLr8Gjyv9",
  "key35": "3v1wwTRbMS9icYdXCknfT95v5Mhh1p8wCBvpRoG6hLnPJD9GLGFu9xeNExc79t4atfX7RwbwSvvscuSU5dE6eXTX",
  "key36": "5dDXWMpxEcKDmWJbHVFnkWCRm84MMBTRo1TxbqWths13M9wxhPnZfTzD4YWLGUmAU7hpcQtsCtGejmySHqJGTtWc",
  "key37": "27mb95KpSg2WG3CWzuXjxXZwxT4h49kd9N1fTQs1sbSoqAeVag9WFEt17k7RbYZxxEDdy5xT2brmCiCuFrXfrmTT",
  "key38": "4kQghAdUYKF6TD2vwZU9DDvSVttEWpNkGwNFoc2qNoypYZCds16ii8ZzPF8xa95kfxVC9n5uGTL8rXBbL1djTR45",
  "key39": "5k6LWiD8H3NhCUbCknbzrbLwBqzgbCs2e6cKq99qYaQJiCaUiJmk5ycTDo9mkWRXz1qqJTMiV434FppfBKWEbo71",
  "key40": "2kf5aVjgvXsmxqTQtx92WyYwH8e7iWkDHi2wTLPNpF29XuKwMz5VFjkWrH6oynWHswdhTBpvosFc7Zc5DnZNdJ6v",
  "key41": "3G2jseZRSvmZUVD6mrbSj16gEumotqNSRxhUfqByeXYb2KSzSfNrdPy229A7aZ9P3PjWS5hYEd7vWEZ1ztJQrpik",
  "key42": "35G1is9BP661TxCmnQXgJ6uQu1Ws9FVjV1eSbAgSyggwVxhmgbQwQh6rmb6MSEEXePuPDhUcv6QmLaAKqeSQJnVA",
  "key43": "4rtgEgcco44zZYHrWcKUB3UuuW2ZDmZPwKmwPxP69vsA12TqFAW1tzJP7xSG9pxEPxzzJJK4K5FfurpqTVbH7Yjc"
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
