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
    "EKteCdZqHWovARo4fjUndTYtto2MxrkPh7DqToavkqbwr1BDJ6TBRtXZ3gWwXoyx6v2tf1TAoBUpdDrkUvwqwfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46YvWvzHbBNfNuP6gW5XCf7umy3XqhECBZAdkiPkub6z63Hphxg5vQj4fzFXExxR7oubK7CzeTZ8Bkt9RUcyc2Bd",
  "key1": "4ComsHeuG76jCD48kJbrP9EASXQHJD6QDGZU3vteHdS7EGhMSV94bfrUMa74oBcDBKu21dPwjBaU3uZvtPugC7zf",
  "key2": "65oeAW6BYsHyX5DqgSpWAY9zW5vs91hahfjfnTu4WMPgQhc4iQXoeVEasZodFHCSFvUKaM7tVWFcWcZdKUm5fKEt",
  "key3": "2KDv76HZzw8VaJBSLrRb2iwSbXtsgdvTfL5ehXVHghxhLr7yEHAPyvsgAdUBVXgM8r6s5x3HQ1RYMyT7WTMSi235",
  "key4": "2paPSH87hYhY1UEuijg1RkZAs2xdxqBioXDk1xP3beEbEyDLtUiTDeGP6huAMBUyzo9i5pfytuWwRSGJwuEpA1A5",
  "key5": "2aagFHr7zU51CZzwQsAsFjUAcTJKk5YRbRnAKtbQbRPJomFtujUGjHovMYEb2FHZ8HFfmvdEQr1caDJMyd84MDsh",
  "key6": "2AJoA6YhDFtV2zb1EeMpKXNWKmHWB9BCS9AsEjZfppuh7nBBtjq7XPFtxB8nCZi5fsB7RU7A7KdoJuHwmicxhqyq",
  "key7": "8CHdZBgGnV9UXhYt4JUWeRH6EpMNx34jW57KtjezK24CKNb1KhXhAmEDoMy52GHiCuoT5gUkNRH1QFudhikaG5Z",
  "key8": "R48QkFTHiFs8YsgJCRJ1xst3j4QPz4TJ63CFfS7t7VVyRcjXXpP1BT3gUdkSPcf22gMXbQF48SNiwbpLZBjLfP1",
  "key9": "HA1oGxoZrN1bqVV3qZWf4yDR9UDF3FJBE12L2omzaEafA7u41JFkGhvxaonFfePihh7sYm7dNg5FPtuoYZvWez3",
  "key10": "635UiSBbSTGExSk8pbRvUXMowRg8ctcoy4ukf8xWkFwvTHic299bFY6HiNe62ZMSaYUnhpMw1Mvgxe96UeUfAcJp",
  "key11": "2UG5yGvpCrTJjxvytjqPquXiwc6bPd5gcgaH6duLF4pYUjvCwK9KXWads3VyjynZ8LjqV1pWko2ArXmQXGjqV18U",
  "key12": "2HKGERzM8xeweoUUevoWxNMc7MfSTrGfzFU4F68fF394RRYC9Gn8YHYfWQnm9CbFRi2odbUTJCjXvuPPYdghEud9",
  "key13": "3HG4p771r1sRgLgVjUjeQPvtJJMV7ijwqr5kjvkcbxkKpLjbp1aoaQGJwp8MPYojgf693h8CDMKPUvc9Ki4XJiFa",
  "key14": "3MgCZEyb5jvVN5FbJywVurGK4riftNysUNXS6KzvEPsNnrcfq4p6sHeMFSF3iDTn9Dry7L62tyAUjvj5EZnNe3pA",
  "key15": "4r1kb1QUXUiUXXgCcbckR559HguZwpa6Jq5vT51GuKfkDwLKgP5qmmFY5boPmavXWUsdqPYTha9EXDHcfRmZa3tT",
  "key16": "2yR3bJUgoPWenYeqJ95cqR9vo3zMfcJ7TRGq1UabXBB3QAAt88to8dsmYF76j26ttZmvqFx6ZghoKPhwk8iVfSos",
  "key17": "3LZYyg2JzhHUKRQqdrmnsLgbpHntUW4LFeVqADmLMQzuBBarwe9PPAkLwNiHsSwTh2J7AxA892mThowKmNbMpUqP",
  "key18": "5BemryDKKaQX4YVnQvyTtU1Mo5rDXkW8wn6GJkPoeGH9DwYgiJQP1Z7BuVY86yC5nAPmeMoyF2EKqSZ464VACZH4",
  "key19": "5K5JKL4avvxDXJyZvrM7KaZmcT24mBbDswVuzWGnpnSHqCNCAxEoYqBgApTAKa33mdJsFYoc5Yjj7o8YoUupTJHe",
  "key20": "45DTBJcHpsXwq5Dk2DjBhxkcmADcadq2p6jjDQD2en3LGDGRju6XbZYijwDEdhvci9f5hs5mUgyABkjpNtRHYYxX",
  "key21": "5Lao6JjFtzh3fpazr36VrHSWHeQZQ6heoaWmQ9qTgF6a575rb1nzriHFLyTL2uZbgHCo2eSuGNSAM9KX5xY6EFju",
  "key22": "58ztzGLvJEuYHomGByNZnFgE3HehaHDMbvuUybg8ava8uMsYX37azwY7NQZV4J6FtSpGa1P1pKa9Wd2KrG8ZB3nU",
  "key23": "PgWW7bwujFbqykvegn8Li87RKjgpyxa4iZHGqKAAGNrKk72aubTBUygqLC7J3LLe97gzUSEDgHBjJdCDK2AnHcv",
  "key24": "3LrbHoNRsjmovg8zR45eD9YQTxUgtA2uyiUVNUcGxm3TAdkcmFECd8vnhHCeTBKdpJfDHEKTPrxxxGXEQGRb1mpJ",
  "key25": "5LppXQm1bVySM6qqGhZPa9D5NDeFgPYDHhPUnEvKcZJLR7rbh1jfTM9zqRgiGpWrkb1MRUaevwX6E7Xd1TeadqtH",
  "key26": "3hcCmPBzQnLfmEoQM3PwfVb1sysisdBTKiyUT2t3FqAuj7XezZcHyCuPEJFtL7aveeLgjcyvtQsSrXJYz1uCnvbj",
  "key27": "2HStRfXicAfoZ2jWeH4QJGqW4XHmmrcsX3Bs2P3Qa8MtnHkJx8EUMycxRAGpUcvKpNufkfRzEeSYCZqj3z8cCPaw",
  "key28": "3s248mTqo4LavmXnp3g7d29LzHcmPfg4o6QtaL8YhSdXeGY4KVHkbkVxRZroRKHRoBijroLFnyYDdpV2rU8YbpMG",
  "key29": "5dyi793ywQB4RwEnQnVkRRQX8qAwnXzGSJeS8tEqBf7wct2pmxz6DViwozZZH8KjKdDvwMYK9jtLGfACoELen9Qb",
  "key30": "5kotBcPdhFzHN3HZ4JRVocuEViWVgNVij3UaQwcMjUGQQEpjourZDF242DqdEX2Xo8dn4Zrq9sbTJWfqjdhgRv6A",
  "key31": "4zrNugH3MUS4inxecfGhWZ5aUscBEur8KLRExPMCv9QGepScpugZZg5Jsaprrn16dvCLffySN3QY3msE7F4hEa87",
  "key32": "cdPUpEcqqXd3ZgNE6dSKEzo14SAgndVTk3fhoHf3khL5vuj3yC9H6MrB8memxeBmn4ETCPChJYTDhyXr3qhV2jM",
  "key33": "5hZags3Rco5yn5421PtzEiewpXMSNQPPwLg5fsRj9451UzgW7Eidz1o9ybPEKpCPWpYyMVvxobUabHtzYUYD7bKC",
  "key34": "xQQdCQpNtHHoaPMDDRKaneSHUwHW7ypDTi6qqTWNazKpv36L2tNwAdMQm5BRTQP7kNpvyftP6skMaub5qvLASNj",
  "key35": "3c9Y9D7gih7hwivDyUcxuacsAPVkRE8x9tRNGtvqQwHgaB7UbknALkZsJUMGNgDvG2QgDMaTtnnxvpdFargmkJXT",
  "key36": "4n64KNUJsRaJ2jxj585KRULLeWzj8R921MZ5R7cKQxR49PRbJVJtKkrzXiXKwq2NGPAaVtSb3USoqbcsMRg21oG9",
  "key37": "3n5SLza7MHnE4mschLrnmtTwybQukRQKkN3Sqi661tcobz67donhMu8g3yfwqtsSwZejudE7nvJM9FFACuC3VZvA",
  "key38": "42UzDiYuZxKeME56mQtHh9c9wbuEqyS9d4AfnqgiRQHjEY46vm6iQCNHb78cGoDqbsHqPTXWuZKkhZizWBFokwa7",
  "key39": "nD11tiTFZJL5pSJT7hHU5Z4GQnwYYLorxYUzKHC4g41N8ETjczvyt7DzURe3i2Sr5P26JLaJc27tSF8yUvwq9cy",
  "key40": "5NCb8vcGPLUjCGPAdUueoZvgs8Wmb2Mg4sLatQpnY7m7se3NbdQoCvKBZF3Uhgja8Vkw4jnyBHrenRiraeeZmWTh",
  "key41": "Bfm3Y45PUVfSVgSPWYXkwHZ5SQS1bQeXvj8W1LeLRUYCVowcpVrMoVGrCWNHZ29mWHXwVFgnkksooYkQyxkFZic",
  "key42": "439dWgu2VTLf2KzWSQkMRkQEnJ83UvA2gSF8eqXvZmETDi7u4sU3VTCSk4gbmAZpYn6CGbrsSL6JCX4eW9jgsHcR",
  "key43": "2yxdBjBrDSFyDGGwnC1sGpSf1hhpLvJQgJLDCfVc63ik4Yp6RFMXPxkwUXg3WyLTHaZM5nb1j1JBBsNroQJ66iFd",
  "key44": "5AnVYErWJXNPVndWWnhFmZeBJTAhKvTk4XMSycurkMtvVRv4FBCuFKZA5eLqjb5HYkVTCNKUGe9JmrHHNhxMGHYv",
  "key45": "6TTSwSy7VCWzJAfzcrvuyg6sngFowd5AM7sWU2bwEmNTroWFQhvr8GxbYRPAkZS6oQHrdwRtGycMBtCEspeggB1",
  "key46": "3goEd8duk4UMuqFh1Mm28FgQzSAEPA7GUdc3vdRGr2c63hXTvLRJpTGAQq2rqsQbJEsEwNBURctcZHhfmKVM8tdq"
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
