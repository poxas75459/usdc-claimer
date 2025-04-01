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
    "25oPbeyCEtVmwuM2knpzgMUn6k2aLyDAhhX21Xc8U2tkWNeTg1bRQ5zYT9zah4noRwsGdy6Ju5YAGD8d1bJhVEGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wCTvfTC9VLkArgSiqqx1b3BXFE4CsrGNQcZcjhCBkfJSxQGe67P2CWTwN61TuEZPjd76TQbD7JhongwQTG6GfUA",
  "key1": "5P1dw3nkpYnosbLyxnRJxEquRtWnhv9eHFsETxQbdxwVQDw4fmwMcvyL1RvGHPxGQyJcia2AkyX4sS8fJ9ogVaR4",
  "key2": "5NefeLihHiRDYtTVMQmftWRRSr9GfDHUNpphrwVi3Fz6AQNJrwLFtnbkveNzU5Q5Xp3KPYZxojSzkWd5nGpTCxNf",
  "key3": "3p771rBT4RBka6x4fXmgBHNHMdhv2wAucc7dxYihnhpit4yqPcoGBrECP5n7rG4webzWLpGbPYFWWdBRnsJwfV2b",
  "key4": "3h7esW1ppRYj3bYBZi5aTkpA4ffMxAc2azeN2C4Py5Z7YdhVXQazfsWFnX1hBrvpjkRHkAzgGg8LeBGi434huqgb",
  "key5": "5sMm13ARcAWw8dFxYuuSD8iMiTAytST4TcvPTaTcESiu47amEyhxrTGi1q1MaD2eiaiKZAbMLENZqan8MgkTjuu3",
  "key6": "4r44MLcsETZi7x7N7wtUv5Cygx5tkhpsUm3cXdQB8NVMWw3Nuy7MXxYhgKTybBfgEwc8PZ5BC2hwiZXSWzMTzbZH",
  "key7": "DdDacjZRwZYoinQyXYyvrwnP3J921xuWtWfkkEFNd7WKDxnB6tarQSNs4bWWLGzQNaAsWPxhL4gxBUrrttS7Qpp",
  "key8": "2NhKdWVUS7AMXJ7ZFqVouG2JhiZiLvRDf28jSVGnL6WVGN9JvjBVzBPMqsUqMPH58cp1Vjt4ED1VW9aKDU9TNw3R",
  "key9": "2Ag8tb9Xe3Rc5gpRVPBVBbuXoAbF7swfeBRUnfR9rCTfg1LnqyFFjZC8oyC1yH5eb7Ky8PNrAeD4no9C2aRFqZXm",
  "key10": "4KRZrzUKv7rJRaebZunyrdkSNTa6SS3d141cZdPakLATQeHGv7qQrGv9SHyF9GGGoYhBdsZrsUGHqCoghw4LzkYV",
  "key11": "3VYxnEFX8mmeF3hfBfRGV6YtvefWFpLYPoFGRQE2XBsK89eoEF1x1xBWFPcrwQn3NCX23sce98vcEE3xi3gzfpxL",
  "key12": "4u3mEYCHS8VcCPHxqeWjtzFSRaJKzwp5f23D8V3KkpaJ9hVxznpFmSKrc2DZRrCzT9YsLiofvv7L4iTo7Xh595Hn",
  "key13": "5efonYsiUpgy5JwvV9bzmvj6hVBSYZY8LRoAAJUeqoFjVLzJvfMGFo3YGpaR4PqGhYgPkEZuxsGbkDAuJxVdKa7a",
  "key14": "ab5zCnWedbrrPGWYhgSgyXMxrhzQK34hQMEtLYx4WtebEZW3kYoVjrz8ALRSH9uAUhGKfqjRNkm2eyfZjAp6wL2",
  "key15": "VwP5MiWo9aaoDuvToZwteLNpG6nZXijiZHnUJw7jCw8Dof8fymDnYEuzYzhJxU1WStdCMPFb2HSu9hAXrPqq7Jn",
  "key16": "2BLMAh5yuYzA6GEwxSZbJBZg2ov8j374Fob1VuRtZH57LW9r6PjRdxGtEBZA4SSoRoeyXN3dqnqL8gG4QouqiWik",
  "key17": "2RewromvYJGyzjmMWzXQSVcccpgaN74hiaverz7FKM2onezufLNBa8fvKJzwjiGaDjtG7Enoyp5Xfs5SwCvGv66o",
  "key18": "opeRcaPRWWEq1TrCSCJ4sbN2J88VKZrRgvCAgvmJ2qdiufgPVLsb9S6Rpw2Q3AR92Gk4N4cb2BZPycGDDJ333RZ",
  "key19": "xg73qzYCdXoE8RBgKAAHdR5BexdqqCmdYdUHa7mZCk3TG7c3u6CcMXG1YhbSa2kaMnwJSN9E7LZYaChSX9t5aPD",
  "key20": "5NDBRynaGjozSpL8YWTM3uBRNRHcXSUidEZ3wuwAR3mXNFyZuPjvVM5cQojwmEmBdbZQoLDJAMdYG6grAr1shPvC",
  "key21": "2pa1grsnQNV88wSgNVcQVbzPfdG5CmbSZuFpwzeAGPzcN3yBMLXemAZbZLBABCVaN85vENfcrwtcxAn5eCMQUGHt",
  "key22": "49qEtro58m3DHSWh8a2nS6gmrWYE7Hc6oH6keskXesyNEmmJEymN5BkzoopvPWeUyFBwaKD3AgYhsTACg34oVMQR",
  "key23": "2wknEaWNWAffn5pusBqnXD6XHwvuJXoGwRNYjrTCmfkAjDnxZxcLuMV9gQ77HuY4TfejmkmNuNe4cYQTXXbA4stq",
  "key24": "2caS93Nne8AqeHfdmMMHiYd9HQkwqCeH4zdBoqNEJc3xB45f3C8Gc2pC6CGgWUxtok3TENJV4HGdQ7U7jXX9iDHa",
  "key25": "2Bp1miyoJ3uLMqVvgRyedbc5MMkwJLx78bCwzF2KGLQdEEDfFyhCoY7mC2jsc5KhhbJtRBBaCx5j5tRrSu8GMNps",
  "key26": "4pU6ep4Z84GKgkxxch6MiN1MQwh6VWKHHZUGYSd6zWURtSarj76BoD7ELhwKEDhvmNjE3JSGEfdoqdangqNKKLP2",
  "key27": "634usXcpsT2pjXozR84TX6PBxsgq3iArSkxHmL3j8EyNF83DpXWpxZgyPu4F5fXvoPCU9tPM8KVCgav8aYZoRM4b",
  "key28": "56eczTbeEnNRGmCsiid8HSphPQLNDdWD6X18F1uCUyEupPy1tKNZhJetaZUKXnwLpsrzYP6HYECzE6zZr9CHVNEf",
  "key29": "3b7brE2NZc69vsLGYcNw6Snf1V5fi5z1BXvtRCerirhX2MSCKQU9CLMT2a95fpfVZgcff123G3c4uLGzQygy2qgc",
  "key30": "3VKH3ssyD7Ej4t6TeeBdd3VAmQsEPudEaDazbecSPKTk7KoWnFqUvuMqZL56xfEWDjVg5QpkLR3LqezhrtaJMZFv",
  "key31": "2GPaSdHR9FFGiC6fUu76ctMMQWt2kJc7LuYcL3gaZqseWPmcKG2g944Y6DfhdvRNVbUFSPc2w9VaUkvLKzrvYpHS",
  "key32": "3Spj55So8yKYcunRABPuyXaPhX95uNwwpP6YD6ungXJzjQgmPRdru8di8B6QdNE4fFPEWNKbuQZAUsS6Po8R5muF",
  "key33": "5phcFXKNE949TzBF2vadeJyjkqJbRWGgFocWxEKGfVJEL4Ea91UcqVdZRJsqeY2aJaMt7eiEK6yk5JyofjuTARwj",
  "key34": "4B4aGWTChzmtRhqk9Tz5oZSWXiJZGmnxrfZqAr2jemuF3poQi6aVveVSKGAebEMjGZjaFc1Mnnebyan1QwJFeMK7",
  "key35": "396jraZQ5Ajs1Dva5p87rVKu6GCxNy9hCEFqVQEJPJvjnR4W49aoXXiUCmhLMGXiCfkLti2nfccWCgtYmpHVQ9Eh",
  "key36": "rLPd8ozsALA482JywoXQfcSMuQfPLbGhng8SCM9bDUAWdyt4LgbenWvQJPchcc9Mz1iqk7ZJfBXngPLk6hYDRBp",
  "key37": "3U2gZPjKrJRy1MjUBZfFuj4fp7nsvPvA28QeGzh3w75c7grHUXg96MJn6NWFrRWfC5sUqtNLGxHjnpYsu1QzZ9PG",
  "key38": "9zXyNgi8KRfWDyREHk1uSo1htREMHZv3eSd6jCaUio5KCRLprYnenRU7mdGHJ74BEwmGdzKciQtgzZs33PSRzPk"
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
