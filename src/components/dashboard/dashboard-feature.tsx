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
    "hc3qPBK7WniUzGiwSppZzR5CJoDt49eL1s4vRM8KLR3tEsKhAKs2s3rdh15gzqV8h6Naeis31rqXfqxJSf1sPAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bu1yaH987j5LCyYVWqc1KGK8iaYK7nPQij5wjXSGcqPgYt1KsktpZMiedKRitbYWF3S2YSbRJgW4mXq83WwRczH",
  "key1": "5jvP4DvqUiVkNMHMzHBR2UsmcezghQUg82uSrxKbfsrHZGtfbEfjiwRymZGTmHNJR2DezyDjsWh15uXpzNUshkJR",
  "key2": "5h5o2DfpBzjBGbgGc1pt8jXsXiN3RWzvHFboKzc78jRkz6UfXH2CgxzjVXbk8VRpHDvHGU5FhjpHXtsyTiuZp7w3",
  "key3": "3SCf8W88Vr4YBuZQD9MasGtZRrQ8iR51QjQG65BnWNhb6zA1nTX61C6ryiGQWuR4kk9bUHADnGxFgtHKM3TZpKeu",
  "key4": "4JmZnbmSTT5ppSDGGgKDbdSLmrcQrs57bNyQLQCz5kPmVQ2uqFzoyoZnWvcQhYkKykkTmvum43fesJQToWgtpeFH",
  "key5": "4V7bgNXNUQncfbNTZ5j93DqDWKHZEBL5G4DW4HY4e2vT7s9iB6zLYv9s6rbjv5cS7WeF43DewvErUGkhW3xWcxtk",
  "key6": "5VjoXKS7t8u5a7uedRiT4PNGxG1hEQvtKunjmzkRXfGU8JVVr55Sej5kovWeHHoG5656hmfPtdohzfU2gcdDkmTV",
  "key7": "5uaEEhkhhpRAhtKYa1EGaUu16RoEsgaKpNrwCRJFVDsn1epuUF6z7ZK8cAjsXy2SR18ECdVNsjFNpxTjyv5Nxvtx",
  "key8": "3kPxfLD4WpJ2qDmBsnfESdkyc8Fh6oUvek3GrSPFLWqzdPN76FwKWi38PLRR9yPnUZUDPpaLmbr6u7vT7qsmAvKV",
  "key9": "5DRQ1YBSz6GZDZXKjWFF2M3atnDTGgPFZao5EZf8BAo4iauNX65Jm9ZZWe2hYQEuS6YKCNvVZ1GYkXp2co3WtEY6",
  "key10": "3Mr3c7qtTAbQcYSxB3tesd6JbdxPoio7AjbmCUjZFBhhwWKXJHtNkb4y14QvNYzJ5Vg6y5mYtb8LcCTtV2AJpeai",
  "key11": "5ugKtifMAy9pWGcmGihgGs9V91TdENjTMNDEUV6bsU6tgjfs1Qy8MhDeRAG8XkCUP7MjZzVyXsviZhFM16qi4D7N",
  "key12": "3P8p418moJgDBc8naJntYbzHazbhttsjg9f5iLhvdrfyoenRzfxXorYWA24wzwm8qon99GAtgsfovbdrhg9eoCZR",
  "key13": "54PiCS5dFjxJhS8GzyAEq5XA21XsPCTatE56LMiKeg5GZUrU4gHRJAMPM4aU2UbYeQaLRNAS18yPoSzeQrxS3cA9",
  "key14": "28jNDubkF2h1paBbBYvQQ8RrBFDaftwagXhdWiHVwb4RvXaT94Gx6LT1s6r9CxxXRhcC1VDkAKLEib3M4AriPoZ4",
  "key15": "24SC9DGfQLT7k5ZvtENbdnRkrdGCVn9nsZ3i9t2wmkbMScJM9RPQWUSWy4GLwNabsHfEJEMGGzTsMWCr6kWcfdU2",
  "key16": "CFRw4HZ5TsbK7VTJJj2UxEmwrjFh7PxNHq5DBU7LBBqyya8Saa7wjn5SF5DQBybhQSipPWSTfe4hR2bu68EeCTU",
  "key17": "5FbKGVqXjz37bYGuCr8Wtt3CxUYaxxxndT8CpzTXVz44kj8AmeDpbx1Rpcn1TGHexnsqENJWZoMjRC7HWwVDzWmC",
  "key18": "QB4SrhkobKvTUAqdEcwftjnmtwDaW3ocoqQHGchkjP77pq1nemfDNoZ6z6W7FHLChBC7NiXyzfNSWbzEedb3WWZ",
  "key19": "5VBDQHWtbAduzbxvTD34K1W4XW1ngiYnCd2F9o1gs6W4PF4JorGdEZdxXpANC1vPv3cYRHdw4Fvdd1Knm9FHjHyH",
  "key20": "XV8XizFqmv2WGAttNjapa3JPv48ARaUKiZro1yzY741RWrRYiCxcstnBS7QctLTAPEyfrH55544vGgJDQZTPHCr",
  "key21": "43ZhWvd4inbLYnxpff71EDiZNpeLC4wsoBz7A15479XQfB4QNMKG1m6LSPbBdEqe4ZEfpnRXAVDy6WVM3GSfmQza",
  "key22": "vPaEh6vtTDK8Gp6bvkcwnojdMHn6AQ8TvVWEHq7mjqa15JnoQzfGk2LTAaATamX8XpWixaePzXmhdcbnY6XAjcE",
  "key23": "5LmsHpAjMfdSZvh9j2zqEqVEdBnLw2ZAY6JAai5ZDUar2UmtuFwPd3ei1JJjQRRLXreRbbY98s389JyoZQmZtMzx",
  "key24": "2GQut2KX6jAYANopxmcHnU5BR4cG8aFQ5e9i818L6bS4bEnBCRUHCtTQeVAELUFmZ3kL2pTVrmmuTccq36F4vL4g",
  "key25": "2jGfkeh9o5a3uaFK5QUyBYMT3qnoxmA1GyzqrKdZ2KNJrss6FVf2jgh6dgkJTKB1PQ8YrpmfnwWf273XLaELJipb",
  "key26": "vho1efxVP2ZWipQVA5qGmcSNXL17JNyuETDKgkJP8rx7jvJTtAudptJid73Wqwk4RZ59zcq56rDaAy6ADzCCyg8",
  "key27": "5zBA5bEkQxPRqmPWhQwP2ZUrKqWZWCKH9jrdXyfbA2qW55fDZnXb5uJL26APMrwy7HuTVwhGj9daC7mfDAkNDNVT",
  "key28": "G9g88kK31jiYgULRPbgEPDuHfNtx4D5SH8ZwSuKar88uyD6SQp7yw9xAbaT97t2P2ZWBvbnU58JuY3Q3rLvtktk",
  "key29": "xAxnwPwaWtVWGJQtLYNb2EimtzX8UnGxVhC52nBtGuZsGg1hUYGusAYsmop9gkQrAQ6vPqkR5jeRyfEWT9aQyuy",
  "key30": "DiN2mBZ1HFYStmEyfzwfqsQGkSS5W5JrBGK1N7z8HYjLJDyycJFrNiRpHszfKm3LahqrfypBLuMjPQXHq7QD4wE",
  "key31": "2ZMWHHLoHkaiT5sTvuiMCNVkNfG4mG2aCcvwMHXGAtzgZSXfjBXCgCZgacg4cXp9NiaRV5Hxt8vSuvaZnxNPnjSE",
  "key32": "3CqLhqgHECu2n3xjiXLMQjxA9b4fAGhUDTN9psRo875j1HN8vv5xhjgig7hAJeb188agSHuBb1ExVpcLJesuFetm",
  "key33": "52mMavoBtHNxSPitXizSQzYKH9SS2fsNgTBWgMofyTaWjsYo3WRrYwtm5bbDiBrcSsfrRZeM1D9EBmarVszoGD3Z",
  "key34": "52sovL3sfjmY3ZNrj7f7pAwYAUcSTHRJFHsXc9rzjdE9d49sGyXWZUZ7buDpYnfgs7iqG3hnZ2AAaJd4Grb8QNXG",
  "key35": "31wWERghSoqaCZisvEjCr8pMCTDNLkZ7N7pEJfySgWUQTYXmJ5DqSr79mNPfWzdrJtDc6KzVR8V2RjWj45EZCQkL",
  "key36": "3NsbZVApjbeLumU3nQoNMbyKKUbscwHKSr8U2hJGLXoJvmbkoWg3uUXzgaNXhpPwtsmvSb7wFHZD4XhwVNeYUBbM"
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
