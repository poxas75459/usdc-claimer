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
    "4tGmgEw7yQEC5rZtW55KYTPMk7T4cU91ssYKqhhto1fbd3xuvRYQtDwt2C54w5LCjs8Jwp9EEaUm6wjV4EAap8A4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qTQzThpwU74eWe2CM9Rhe4a3zPm3n4dHpmqQQLM19gXwZt8nsiiQUzphrWtBYeJhiAcBqEWzMkGi5fyq1sBGEJe",
  "key1": "4F7xVPVyXALyDo6ctgPoHYus3dp2US5uJcBjJda3je9o93vctv5DHhvkbPGDQF1wxshfNYLs6XkVS3zrphnd26eg",
  "key2": "61kr7Z4kJZ9G4gRBkB2tb9ew7kUKiosmEAMNmhoBwDcPfaE3a6ckExRfbPu3SPV1ibQ5h9pn4SRBfec7yA168z7T",
  "key3": "4ndC7xWtrjKXjQ83tNXCd2ibKPVBM6cvBjwLRxAjfbTdhRHRfUECyWpEWAs6tDpFAkvDX9oFjDpHj5yja6z7spq7",
  "key4": "4wuyjtqmdjkqmj93ab2STLJ8AzRDN9bn6TEbeBhWao6j2kZE8NWvguq7zBtUTEiLqWkCzzCJbjhqkqLNNsVcg9Xu",
  "key5": "2BTnUWdox2VcogELLU2TvU5XSjMN7JiQJCXhq7FKxyDuY2RbTBG3pd8ATJ2BuTaLD43X9AagD2arpMH8niTqCSJ8",
  "key6": "4pBgKktxonN68PfHLEz9NMVB3ZsmGQufaNjE61Z1ZZwM7NFoTL23nvz7ABnd91fav32BAy2Fun5mwdwx1qiRy26R",
  "key7": "3bpzxZszVpvFQcD3P4Ap7Fgvxn3d7boiEAWiwbspbXtz2FNgaksJ6SX3LNcw5NHwCprDVsaW1Cwkna3YhAop8K3X",
  "key8": "vWW9L4tNgVXvn3af3JMftYS7dC4b8ZopJJq1GYePnFrKpTfEscL7rPiUBxphX91pC7Qd9XWi2HpWtdJMk5utJ9L",
  "key9": "5DXijf5jcsATNBSobsXahGqfqbk3xpxmXBoJa3etCGyHMjg7WBpMYsFabonFKdohmnXYzbc3VfyQQXTTB7bjMvVC",
  "key10": "r6TuSuJ8ACxGPfBAqdUmDGycckxBCDb87BjuVhz7jyMDCpjqeVQatmJLakafAu4En1YKhcTsdwATJc2GnbEkgdd",
  "key11": "5CsoY5MrU5eAtjT42k7Yvwc8uYFrx6AQuP6EX4UEsicMJa55a1qv44DzAQoqa9zqUegR9eN82qErduEnbG1Mwf4J",
  "key12": "5wj6VbqsdFAEWWGazKgMLWoqtkjjJy17H22KFKKL5TzxCKYan1bbLsyaTaYKABQ2g3TZKxPz1ANwK1QbrGc44c9X",
  "key13": "4WTySq6NoExqG88NBZXr6LZGSvGAf3qb7GoioofaAxt3FBdEM3dGRkLs6AeUUmnQQKXeH7siTdsi2y2E9tGVExxB",
  "key14": "52nQjLDQuDB889iLvFu2iMe3zsdBKSkBTdTBN1VUr2m4xkiQ7EqcxPYVUKSkXeoWZbVzcTcB8PTCgUP31jWscqTi",
  "key15": "kdEMPTgVjK6RyeLzUckmMuWZwXHKQeKoRj5oY2d63gCvn7vasPGYT4JiHWaVgyiTQjvP6iyFnfAYphvLPSigSVs",
  "key16": "53uczA4pQTf9oPXxdCJ9tvNiX7TKBSQ7xPkFH2EfbAEFTXYYdZDyvtPY1XbJy8ycSsJ9bdU553MoPCV82ye2VB7m",
  "key17": "uqfi7u3WeXozCLagusrPPFMKjjg7d8VSijddfuaxTu9sdi2gpAzq1k1yb6iYS8wFQy8izpeXLtvGwDcNuZv1RAK",
  "key18": "4PJwARRpTdjpZ8dM1rvN4UJ6pEX3nukMGPkxpfNVA2HN9hx7arUEo8M3pNTLCpsibZypUDaNFMfD1jtpEuYdZ63K",
  "key19": "2F5J5U1ZjiBFcR9YW9cWUBNa6HKFdCruPbS9jcUr42tTqKVC2jVoGqSgadr7Lq2d6tSJHY1fRYLFjDrVE4zvP8dh",
  "key20": "F3VYyYtWDbLSttHPNDaHgc1a6E8omsxBPD4fE4q2PkUb8CwC9RRFZcaHBeb9fHacWgNVjF7sSmpv8vMHa18AEXr",
  "key21": "5XjkkdRdkBRzWfAvgzxyAtyLpRk5aW6a4kqcxMhKuebednZKr9SBbdkv3sHR6YZd7u86ACvXr1nG1X3EKaTRuk3a",
  "key22": "96oZmZPnVYFN2ds6n9KWg77qbkoSNvJJTznih5XnPJFKnsk12XgZm6c3YPqCra2eBi1ZqKWUdyFjHk3NuVxdhpW",
  "key23": "4J3YhVBTcUcq7EKHbdktvfFvgQ5ccjQXw8e3otyz5nXo9y9gjrk7sgEnwzpYBetMpPqmEs9pS8avFBJPNAJZadGp",
  "key24": "5x7isxL5ErT4r4XHesfHP3fkHx9n5v4Da7iLJ6GPu5ieVs8tfRfKYtdXqcrpkgtXL8q1tUgPTUnBWNLM1EdUagCU",
  "key25": "668YiTzGTY6koVCeNqqU3Xnxgh89grd91XoEmqt9hVSzCRnu8Wbqe4snRukZWGh6QEpmGRddqa6G2GHRsjNQFjHN",
  "key26": "5LkkM6VWmPNqFGSCdCr3Rkov348qQC5ARDno14fqj6WDFsGDzNN74stkM5C27QuHmdBQ37GGNvsG82RwsL4BXSmn",
  "key27": "2m7g23yv6NR4aKyvek4uQ15sPu614Krxjp94wfC2fQDunv7weom1QtsTPqhVdnv9vCcRdAYxtrhzXyvAjhMqqx48",
  "key28": "itPSirSqQEbPJBJwFZhqnqbsprK8P8Dodjz45uiK51Mdoist2JPGoszpH5PeW6w2VetRTuLK9iP2vvHrqVeu7JD",
  "key29": "5Zy3cRbCB8m3F7Piuhn3qSsjgGNABTAAEHbEajn7Nkq5Lgqki2sbEGUk72USyoKcSsF7FkJ1nxfFsKXGpxzuEZ8x",
  "key30": "2QXhsKNsrw41dsJcccCquV64vL1Xb5PpxJb3QZD9coLf18VQSLqk9oeXNwn2c39VDb4QHHTGRaeEs4Ltua2UCeRK",
  "key31": "2RhCRbecprvdJWbkaCmVXX3cWihYvSJ7d8R8cakuxajPkn6CdXjFA4ezjXYGyWMKg2qfUQnVh3Gkxsybi2qJXWbo",
  "key32": "3h88Z1vdzrRwUHoc9LDDHpYLvgrCAWWto9jHyjV6gpM1sSDcD6DWVgchAKPqM4Qf4eZNXpbv9W4kAohY4DH8HE3J",
  "key33": "2Ggdu2gj55hQ693BmzjWAuereo2hHoUKwveKaVAr9wtVpVTAsZCnRgXDWgKHU2bcaX5ayA2yTfRWDRDsy2EZrAqX",
  "key34": "5CPxcqX5ddXJcV14vZWBCpjavo8pT8T2ycf5fhTdtoQyndgbfFkf2AMYWi2fiov4AMdF6x7V3GgmwmeNYL1QGtrM",
  "key35": "492nSMyJkpYaP8KXL5BJA36B2Rp8o2NKxXXT2vufn78TcxTj2GhPKiShZSUH7WMsEjT5M3WEewbgpygmyhfcQGwN",
  "key36": "49mAfzJe1Z5YGonVmobGFgL4iW37Lubxd3ZzpJYTCZdBKV7rXUkoaQTM82UWvfy4i64ufkL93qmpe8WCdQDqWu4x",
  "key37": "3GTwC3z7rFBrK2fTQ794xaD6hG7e3SoSS1CEd1Q9mZrbqfieYYs6ZnKpdfpQ3p7wMZYsqFzGy7ZNcHWdRSyRnTNG",
  "key38": "4zzshrZzNhQ25z3T7mr5CuegB1d9cNfVyFxK5EPoF676Qk1t3emdJEy47ano6vdWGT6tkYfEyNYWiACXHxoix2hM",
  "key39": "26e5T4UZWEVJnJzJthEwCnQSAJHyEPEyiJoNAkKdkHJCYAxuNWDQEU7bNAEdABMUqEWmmTZCrorMMsbi31Mi8c1p"
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
