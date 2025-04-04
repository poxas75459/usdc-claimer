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
    "4yW8FfEHPETWuJhdAkhG1F4RoeYmeFnhb4j2JdcvWPT3XE5FvRo5LgLbLUcncdi3Y1UKCb453UbEMyPkxkQdeyg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H8Z6erSo6Tuscd4odKnB2gk3XCTXUz9vXdGKEFUfSrbG6SNUZ1ueiVX8sjFKu7Np9o9eKQPAgomS4hG6L3EUKvZ",
  "key1": "3e6RT9frWpFZLosqzq54g86ALtx2iNabzbQLnFJwRemQBQmNyo6BDHPfKRnXjjgjzyL59x2ti2kuKqshHQfbg2J7",
  "key2": "4Hyt8HFWpRSYfLU9iGGHmA1pVagnqenCqTFzoHYcQjuKkryHV1919RB69dN86tNhMfHX7r9HcJz1bh7coApVQTqP",
  "key3": "Ly121kUfbk6xi1Ch6gopGwxGykMjDondgdTUhfSCd4Ngn3X8n4JtJQ5r29UernLirgg6SM5xHKjqF1xJSH1eMFT",
  "key4": "5gGfVaHFxucrNroozV2vZoQTNbtUC6zv9y8e59n2fMTun6ZACvSEiptPmzbnhTsY3KVkEd85MaUu11Pt9mR9Wq6R",
  "key5": "3r2Gmmn5KtiSTpzDiNdxeXXSuA1TPGiynLN8zVYL6GuSj8Kg226sXJccesZpkPYHxrkbbP4KX15gcswnufEfX6Xs",
  "key6": "3eJSm8Vg4zFbynrcczsqHXZ9a3gCRw1JrQPUSiWPNd3ikmWaYLPMYsAAuSDNPre3Sm5YWKxm7T3oxKbTVQaDSNAb",
  "key7": "Bb5FDvZjjrRgmkGzHJJCeHVkC3QM4dreue4pvyV3nV8ARfha9uGRB3tjbvZgXU7fu4FUwg43ysyFYGVaoV9iKiF",
  "key8": "43r1jLYtiuAuYkjBsVZvhYfzUidyQsC7DmRfauT8FANzYie5od6macWz1JbNt1mPwqAanWYyQwGAzBzLhxvW6cHT",
  "key9": "2afmk2cCtKxuktVgcmmKxnLky8ru6WgBzMvzYohhHrAKUJHPDNGcdMJoCPvgeFbWsC3Vkrq5senkvFC8RN5JQ734",
  "key10": "2u5jTSBKX2woffSHiagdmzioG2LmY7nkUamRWWJfEo9JEv5qTZwvgjHhrvcnU48jKsutFkH1uJmnkqsUZprahd69",
  "key11": "3itUMkEqFnbAbUNg7msiAVo4iDnwKfFgQUMAcwuhQSCnyvAyxcFxufD2ve23hxyX6XrKZTivHz3UXRbqvu9YkdA3",
  "key12": "2TSdWSoXrCJabwvcdWEbBVW91jmNXQvfyFJBHgysyxmYedsY4W8HfM38LjXKUbf8EdCDsYj5pk1v6dGs34MF89YF",
  "key13": "65RvAWXLjVisHgX77TbMShRbNePSJCzM5zCTzPjJDocde6xWn4LxgvRN7rxzJpa9hWroLXMhTsKGGPSg8skGgTra",
  "key14": "4vxAo36anSqNqxL1XwJEpAEuQjj9L7ZkPFy9pEa7owQQra7N6o6zjHYbd2vJfZFmK8bhUHGvzUFRqVkxdLXbSopb",
  "key15": "4u3RpP2s5yzmtm7Z1zniCZiAjfCnxMghGVvh2wd2BNtyQAbJ8LBTuHmGqkdZw1fJehuXQzXBHVFiXtWXcBxGX5Mx",
  "key16": "4t1XscVnh5xX9JKtNAZCpGyk6gYEEGXX3pd1CTc62qiHNiR2BS5EUHCz5sSP9KQbTS7ZC3fBJfXHQhthQzqjGsdN",
  "key17": "4htTrUio2vY4fuk7L6935zjrviKBdvHV47fSCB6p2VkZWZoiUamFTkrz5mYXSQJHzM4zYi1atZqY36ScTCzFEMTJ",
  "key18": "kZomBjk3hfZMNoJ4tmoWCEzMoMdbJoN8FhjXKhzSgPJjJf9CiW7LHR8CLZfxBznkpqvpTNSbcCsuN9bYSRhQfg9",
  "key19": "5vna3zi25AdJFirRvRaNuPV28r5AFUpnnR1ikxpwALFGB6FPpMJoT7w5BZbWYz53UsvtmFCrMEDLpJEyFo1wdJhy",
  "key20": "3bcKAjoBYsgqMC6Wa1pyHmoTEiquRvC44yapDNkSQqtwRRBAi8NkKeaJGK8PPiugwNRKoqAZTCxTgY4Ue9bhZrQZ",
  "key21": "3MUC6oWHSaT2g5v2H4bA44GMhXuShGYzzF11d76zTTTvNQs4ceWTea3zq1waEbVyUF8fGmPbWno5ZkzFQKS4KwnT",
  "key22": "2suTSnkcGZNsyW1dUMwXgcc7pnSrYhpwp2Z9rCbDz8Myp2sK8tBqnKaZm8ude1sFYM1nmnDtwudhni8TsjdTLpPt",
  "key23": "3AaAzvD8C1Zsf6G5a77mgtMNPouBhKuf3BY5ipJ1Vp929LL6hUzX7J6UuaoT4WbU7VwhvYfJWQNLpdJBfy5WEnkL",
  "key24": "PgK6JM5bR2gmrDej853Z8Ai6kP7ebtozD9W2dGRa3fNQ1PGBF6KwvVCP4fcDL5Kf14tyvyRAE5w5FQCuKE1PqkM",
  "key25": "nNZqRRuNUyDhgZpdCDCc6n5jLSER2eDy4T2EMhRH2QDb34ZX6iGkpUzvXvfzVoGg8Q7BVsCgvkoD8xBN5Z9xpTj",
  "key26": "4GVEfBR2JEQzhniCFWiLFWZKHjb8Rv74t5yZMMj7Gyn7G9gwwkcvSgsCWdrNH2TcscQLt8kbU5mUfR68P7uBK6Wj",
  "key27": "3MFGxneRfDnutqhPDamQBzM6bb37FHhFT3E2QSodT3RA7n38ZHSUugiYHGDFnaHqhGLHmdymsY9LJGmghqcrzetE",
  "key28": "gqiTiP9XCuREkvxVUxNVspWQHJhbZCTrkA3kxiTuRZGGfoHoexEu9dGnoHNbNVfWWW3TyNkMXspc1HyQMv6QsdM",
  "key29": "4X2bhnd4Y53NUJSu2mw8UWG4bFpsFPs5Ws6F8ajSGk4F42KKgMzRfYPoKCtD35qsN4cXokAx2G7qtBRoDBE3kQYW",
  "key30": "vPLpGZ3MwTFpbBLcSSYkCEWaEZ8St5a1t5LxcsU4AFnDrbLKBvEd9UdkWCGZh5fy6VVFsX1YAKt3LYsCCr7dr4L"
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
