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
    "4NKDuUDkcARQzgzdhjHXcEH25wFqRGPBkhsKU74CB9g1sVP9y4C2i7rGkEVbf3xmnkL86jNrEuUcnRCdJXUSTkhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jWuFaoUXy6J3aTAddFfbV73LisziotC6vYCzRhnsL6Z9LNJPNFjXmhPJ7jMB2urkrSd8oSAALTBASn1F8XGEyAa",
  "key1": "AUdLm1jzbRdyx7ydzAHMWCrZV2nPQDkyZHxedXtr1wjZo5oeoJ1dwmJBkZ1Aw1avqfS5sSwD1fFYPR24bvLZCse",
  "key2": "5G6zmfe44Bx1ZcrHtY24xaq77joXSm4xg2xy7yPdbibrp2MUXAi6otJAEHBu1shdjes9Ak9j3iq5kYpnGXxyKUKA",
  "key3": "3vVwUXUFEMoqFHKkUvEvfrTMVwvVzLjTihNLadw25aaRbAx93xUXnRo4hB6AYoK6g33DgAuox5oj7tRj2me2jAVb",
  "key4": "2ww1MXTjCoctPyxVXrBdhke5zkJiTWbhCp2rCwUY7x4RkdDwbZiAiMMbeaDV7F6SbS3TstYghZGS8QP5KfDbEkDZ",
  "key5": "4kVHfvFC4xa3hArQcNYRxsRwUjTRxGJidwpeDv2XM9hXasY16ds8QwxwjJPpKgCTtJzyBfPTK7adY8rwUB8PW7mm",
  "key6": "28ySourkqjyPb88jTy8joCMQtevRQmfv5myd5bkaqFKKCewa5ozW7VJ9djb3pTRVAminRsKFQrSZhYFzxiiBBhUE",
  "key7": "4TYNFpvebY2BJ8eLTnq7ofttLYFJn7Vd57iGpFrwvaDRkhdFMbVe1MoUdFW5D1fN6HzTjuwuEzoB2UNWQzfhCiVn",
  "key8": "3VyDXL99uYqT2kJ5YNrbVYyXASEspMmRMvBzmMD4Qt43npxY23tKpWh5nfJLhtB4cQe8QUFafJjhmw7xb6qL7t2b",
  "key9": "yaNbHFSjbCGkCw3yV9rrq2juwXzyqjsLbmHaJ2nxNzZTZHTnxg22KhqCPjfyFx4EADvqEi3V9rU3G1XteXWirFP",
  "key10": "4t3gFMJTiQPoMhuxY64TFkQME7n4JPaZRJ9QznUCQEUJDJuV5hH5GNdV8WErwq3LXMZrqDjvDAg1fScLf8deBXbJ",
  "key11": "5EV9S96uji32nRTTgHLuhv3uApQE8BWHrY6GXsRDs9JfNC28t1QHtSD4a6utFnqCaH6EKdipHCqW9UiKih46CeUj",
  "key12": "hWsy7wM9dth86MVhbZHMpk4Cxpt5WCH6b4UWPn9XAnjqPcUtRNgg3CDJ597EuyenWoE1NHT8LQwCYrAV4xxiYt1",
  "key13": "FvVUUqTa8K2zKzaKeehDnR3uGyv6erbLpKGZqHAoqNafCPkriKWnihcqVAzQ2BQTdJQce9C94Lwtp9W32mKCZHw",
  "key14": "2hoXD49mEiTa4g619FT6mxPaFWqzhExeMuT3eqUnWUQb6p1YtAGqayQKNw88hfFw8rUWLbakcakg1hpfjM7ehMa",
  "key15": "23RTLVjgha3jqJYxdVdFCeKJvikV3D4r5pQTe5ED52W5QCncjN4CivLiseywjqaDHVDBbez3sEyAdmTz3jvuib43",
  "key16": "67fQYR7whb2xSBTmr1LJLnSdr2MLRKuBKHHHaFhiETYWEafPHYRYyKWEhDaoSoDwUN75RiMrkht3KY5fHBoLTKY4",
  "key17": "2suDNaLxmc5ZJyPUXQUiaFTo5LVaKmvAGhqaSYbVFyEohKLEYpsWovYUKuhGMWLwmD6ib4auAyxkdT1CxDtjbHqn",
  "key18": "5zTvmuMgHPQ2dk6S95gCLHJfTxggvV6FQUPjeEYzT2Xaj7hafhfb41KYv14WwK3d2VPPwjM9iUf8Ce52vjEBnQQp",
  "key19": "KGXAvKi3JLy9fPA39m3D2m9h2uoEiDrkqYTNneSej29EnwUMeCFkWttz1VVqyJ9fNa8nEBSEcVri9oazsQ7eM87",
  "key20": "4BqbELGL6YpdQakS4d62qGzLYGws8hVnjySg9mBoJ42a6NGnWP23m1ziiWTqGLdtLhXgCP6aDGcqCoF5gsYHTaRL",
  "key21": "3FvoeYRzqFVPWGAtXDj4cKNZmujKhHSr3ECrYgAazFsWcbjixrT9kcTokBmJ4sxAza9EfZMbijhJEzPze6tTv5MR",
  "key22": "4eJGqDibVR379AGmFpcDZ4YQRWNEQh3CVcxv7Thc2ELekWjRS3rP4KURyJCdhjyZDB7eJzAsJA4Y2x64rxbKRnMT",
  "key23": "2s2Aru7nsKEkMhwQrEhwH3bew1Q5E9QWnCoMtcreAK2vAY4BqdaqjXYVjVRTVMPq6bVhj54dpqn2WPEEEZPoHaAA",
  "key24": "2YiVxyKbWyaEwX3sjxD1EZaRSuWLADBokkrJ5dvUtPiFe82SqjBzPENgWpzhZXgPTyCdUbkMS1UEY6T1L5jK7RjX",
  "key25": "3vWYQMoGjysBnmuKBcwqoAE9YZdtupMk9L8PRnjZsZwBTyMQsEt51VXeLEC7NYdWcYgfT9tLEogCdYnR4TumafV6",
  "key26": "66HsNaDqKmvjrvwqVEMozPzRMUfbFSUeKjpmBCAvTVqLcThSe7sYEzWxVigcsjobuNpXAcHmLbp6WmpKLxA7mSfr",
  "key27": "tuvQE8VLapjRqb2LSuRvB4ZMj7BbxbbtwSFAHAXCWszK5HJvSZ9GgXP88EdUa2E97NhVRAwX63YT8DKhHgPN7uC",
  "key28": "3Ciju1XtA1vsEvZhcuE9RHvgRJXqm9tbtPrbm7Ktwf1FNwjPL8sKC4qUPBoXJYsxoosAiGzKpF5HUMPSzT8WfiVo",
  "key29": "WsfUKKZTN6eTWpXG97PMy8EKgyVowAvUvH3ZsczM5xudtZ6uqsmyBt7G5faqVbPpYCDeNuZaBtZiitRtRkrE7DV",
  "key30": "4WA4HsnHR777XHts9znajuukjfpdmGpouFJSLfPm9XcJEhokbZ22Uc2pYAj8u13c15fUAVXYXr4eyKEdNxNEYyqC",
  "key31": "5MQQBWM8ND1AEdDFfodDcoWab1eft8rik93E4zqUEtkTwCDKjZCrjXSRaAf9BR8FNdHqUHHWqB2GVLX1E52T4gFb",
  "key32": "5AAXYCZP5pDWy8SwHDt5NZ9PtxkoUeF51suQjre1MEHSMsUr5LsgovoMJ8KaBaAJgJKmP8dNp3czn9oe1Q8hcyhS",
  "key33": "tcW7JGczc3FgXHPch6GVj8KfRpfNpz6xPZbBFrNE1piVwKuVhXaWNyuCuaEhKxqLvaLKRFRJRN1ZLzR28kFi4zv",
  "key34": "ayweij36nC7NyLqShnDKcGDv8YwMJL6CR8RHdJZxsDP8iwBijH7n69LwM2ms8gpsk3FWGqJh4PrxW8vNFHsXBCz",
  "key35": "44Z4Us452oMSVxAKbWWSguk41N1GgNqZJdTvjcRqedEFsUCM1tctMFUcquxX5gCAnHvQuHifB7xFHDvsRdE7jKGx",
  "key36": "5ZHGDqVFoyLPW7fSgp8sXbvaoAvQSM2quRFQXVv1eyhk2GGJiEgLKCrugoNgvYLGeRwUdtN5QM6NKqQPS2YpmViw",
  "key37": "5RQJN31K17UZBXsrxNyLYP15W47za49nTJLSbrGGVK9LpQBh8Sk5nHAaKvJh52YmgNxB7bRBpSRJ7meqRtArbo2s",
  "key38": "mCZxKyASaAKHHEofLpPCpLLM7r4CYkBpD63HwHDCeAZXbU3q46Uy5uQnoxD134GXqsqDNGha7BAkpn1EsLevhWP",
  "key39": "5GnFWR58e8e25NPLL5sD2cLncLmCjPjr42ZWMdUzowE1jmZ4ugn1ydupRuF1prmEjRvEpm11PoaTppPqt4tF8t3V",
  "key40": "3waoXbFZTxsZnjvW2iJ2NmssBVryXGQZN1t3o1R26Jiou8mCL6qnf34sGbbSM6PnkZXZMVQfrxzr9jSyMXNaroqE",
  "key41": "54TxS1qRdk2AyAcJUAcCqmuWmWQDZYjQnQ7LFgZXPHSQQToe6C4KzjqnLC42VzftzUZKtinzgE4Qqma1dSvgukcN",
  "key42": "2aKv23osoy2sck1YpiPhdVxoRugk4EbDkLbW8MgeboeRGHhCb7k3AYiBRnp8LwVsPxtQ1eVmc7CYFAfzkUyEuFVL",
  "key43": "61w5HseLH6ZBDcnHeBsqGdhwoEm8cEtYM4xyRXcpwYZnowUNa27MPDTJaLcxYrVJpbXWkrhjmHpHfPsTnirGNCuz",
  "key44": "4Dg8bN3tcNQJDWAkDPTHD8vZdWuaM62eBUbVdb19aM6tGbhy4uqpnxi5RJ4SNgRFoLcv15j54ysWKVZUihPGr6yB",
  "key45": "mX2tmbfgHTien5BScxABuWYb1kUjnbkPy3NDz5BTg3HWJziVuB11qECbEEZBTdpbCB1DUrEw29ZtrHegdKQNiEG",
  "key46": "52hpbQZ6cMpHFXiGMxu4wB7oAQnQrHmhXuvvnKMpwvxHtoaGrQqmDWJrdqkS6XRTzmerzEmR6ewpyq6VkFTYHHBe"
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
