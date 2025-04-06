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
    "XJdeBfySS6G6qboZpEg5gerqCUwh77cNMhARFZ32uaMVXEVuPtivnEeFZxDxv4fZbWxqUCxQGZB4Km9riTMj3QH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HVsKeJsPHEVhAXK1wmpSvt4245gAyyaZy2uXD2Ye6GLHRSNVHRPp1VPkLUHDfoukPDaEqDESgZHQP3yheSTQYDX",
  "key1": "35a3zgC4u6Y7c7CVGEAwLcV8Z8ZRsi7k4mnLiPZ58MgV2wSbBrCbx5FU8DpHWvCU43QgsjN6ToX4qCFG6o3v9bu3",
  "key2": "2nx6yNmetLGSKT7uS9sEZUyCDs66bk3T65sxG2Rs3Xo2LBv26r4boKUwH2MNobfAPNu17NhbTabiWH3EeFq1Qtkd",
  "key3": "4TPDS8Bz3M1p2HyLFReQcf7EJkovFeUvPc9dXF517N3xhdi6D4bCFhwktbDCBiGbvpXLrXNjfxhfptKtbDxnp9HY",
  "key4": "5xrnR97rrfnL4zjkQ73F8d46Fdva5bMk5DEZeWGCA3JJgXJK5rh3aeUukLauCfJ6wr5U4Vr3JqFaV3c9q714sBns",
  "key5": "2F84N8JReAnhyrLWQqL1BQTtoLukqJKwn2vtoSa6zHM9aZmgjgcAWwsMbTDhUtWYJhJD3bABzoaAKw1S1sUN4C3A",
  "key6": "KndJc2YKif8RVw6yGiqKtBZXQxMM8BMuToFaR3aWbApzur2KkEtP8rHuRob73VjT3QV8wHfxme7c1nv9f78YdcM",
  "key7": "sUwJXBtbBzrT9g8cTsD8WAjQR97WNuv821ycPTTc4XeKUGr5oarBJSqk4ouz6haZqfsYtQm62eNa3JzUM1dt8TW",
  "key8": "5wE85CYtZLbER8BSe5cDYFhbJnhVe41zi5bhwfEmeAgcVHkBRQykKhUFQHiWQZSQ942197U3B9oAXwD2bVvbJZH1",
  "key9": "5sq9FFehR9gf7r2Q49W4ohLbHxk1S3M2ZZNx3veKJY5JRfwHXqZxMG8nrMZgYg72rXigYymRE9c2jNgWG5JQJndj",
  "key10": "2XpYwk8599KPnxrkx2Pj1f9cf3t3wqy5U5LpxZ1LgDH2kx7D5QoJjRXetjMx7jhs9jrDTV6ZAoZodnksJjiL5FAc",
  "key11": "5PMCT4d85BDGVxg9Y8PJHRTKjfXkmF3EEePWSoVYktEEVJ1vLfZ8nvhYDZ54YbDZij6RkQA53VQoRQTsrJ2evhv9",
  "key12": "4ntKm5EwPeFNxzMk2Hha2QgEnn1E4ibh6snwRXT8FXXqRc9tYM7dW43N5etZp2iBSkzWSjMLuQ5Qgu2rpYSbtDnq",
  "key13": "39iimu1dUE2yeMHLtHf62CLF6Mwjng52sFXnqCwEYLpQ8TUhce6ZDUgjiwUdaivxDb4V7Ypc3v5rBKzmeyoDsCeM",
  "key14": "4HPwFJZX85oPCnEZ2vgUH1kqH4QbeXCcofsj78mfArTDfTRpPRG9DqgaxUumUDpJ11vE8bNuza7uiWRfJxBZ5kCZ",
  "key15": "3DNgApoLVKC958juYVc8vSFuxdw6kboLVErZLRUjUDLWyfRPYMBbSqj5pJnoxyqKZNZoy9wFFdWVYMvCL7SCdH6P",
  "key16": "3emCJpARZe8j1GMGThRFSh5TLwyQzrcBK3JxQnPUpJCrEXRd9rCgUwkSfpAM4r9wwHPLa5kE5vnD4DFwcaHCkKMx",
  "key17": "4Ksj3CzfvxZwQ9zzQXHVCrKNPBkwiDESDTiAu2f76yoPfNtkCBWTqSwCxrYq7YRyC1R6metfxypq6cp1zsEzocGV",
  "key18": "43sVhMNBKaPgEAqry1rZBnERbc7mvpes38bT8cFaJoGWXM2dn5tNyUmCb4AH1gkuwbdEjfn1sZJXVrKxePp9cnqX",
  "key19": "5BCn4s5HMjXnkQ1ntRsqMohPmsisG6SgxY4vPjYhjV1sMQKUMmMHP8VaeLsy5jvx6gVVhbsEaHvLnux19D5cP7MN",
  "key20": "mGVpm1HfQR5W8SH7RJJ1uEAnesJBfYJTpYt2tBYkqXuAii51d15an9f2q691khnZR1ZvuBfHHhaRCnqdbiTr9pC",
  "key21": "34KJabzsbnAhuHPu5MLECJryUAqF1rScSQkYwtv7PFQQ3pSfujVhUQySKv4Ln6fvCg89FiJMhrtnjUryYt4ipawf",
  "key22": "4UoYyFkNXisW3KBywpnfBEPK97oQF5BqiSRLqe9wjH7UwXqst6wyMYiip4M5dpKFu29v3FGZs9kj99J9vKL5jPbv",
  "key23": "3E84Wck5tpc4tPXK22FR1rV7bYXJ7PHdCC1FmGMkhPxJ2FFjCUQ6zAF4ohtJznN8nXPsZBhvekQaFGTyeF6UGzPh",
  "key24": "5mqQbhVAzybHZJxmR77FUYSdMxkm866yUnM9qWVf7vZs4tawpMerrGqngBsjk5Y5GxrMG7c2mrTVcmSgKf3HDHqq",
  "key25": "2Xu32E7Qy35Mq4uuU9NE1YCvPwYE72vNDCaJKo7A9GTZLDR7dyK5soKK9LBFcFcRX1rksPgQMi3i649WxbTJ39bi",
  "key26": "38yvxu8jAkHoUrk4SkntKj6ie2eE7XsMe1kaz2Qy7y9peTpkziviTsrcrYkE2wSVotc5EsgHG7Kkv4Mhop19GCSe",
  "key27": "4YqFQnc5FWsHg3GYufJEr93dMzZPqzf3a6FzSFnU4HZuxqFN4xfn8RM2Pob3d4D4x6gAd9ktjcY75LxFVfVW5PpV",
  "key28": "5zmuUoeyxCLoScDNV3XB6Bzcf87bAEPHQy9AAiCYZ5WzLDqefLjE5NPaj4qF894bV96QzrZPdN1myKWSvJE2NS1e",
  "key29": "47nu4o3dv7YLpvdj5FPtcoDoivhKreHYdGM4WYd1HXgytZqFNVnUG73km6JmSArnvnZg2hb6jTh8kZy8926Fdov3",
  "key30": "3wJuwzZvYEQqDfwSdxHT9p6uebh5WF8E7XXWccj4rPbE3qfajkvbSSWQVCB7GzTZZSru2BnMn2CigDeTTx1PMJBB",
  "key31": "3tbVCWKQZttK3qb3fxNSMdqG2KNBhdwKB9ULFh3MuTB2GXdfRNKmMG83zMZXX4J4Lgq5MJsVC4x1HBuKAvkc1mtD",
  "key32": "38k6KsS9cPeeMZy3CrKAuhDx6Jibvy1Sh6YJ35GYgHzeNuawguU2CHGrVGjnX3z3yhtt9Zhx4gLUx4Pce1mxEY8d"
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
