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
    "465aLqttQVNTrMyE7K7EVQafuRmGGNntAQLUwAGvTAnuy4wbUkwsRmuMBk9u42kTHNpzYdz9jRM12uq6k98wwHrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gi8oUYszYwHp8vUNKDSCkJBzq7m4NBGhw8SoJ4o9GKRjq7Sc1aHvyrVJ9nmjtEaaxFrbd9Fu7AkGNzqwBitu6jy",
  "key1": "h2F7mhPerYU2fap83XwmQGnkzu27MTVcQxyzAFByVkS3XAKEoeNo3uBLaZPVyqVBzAwPBJLCpriV8gphN7jTvSK",
  "key2": "4a2JdgPJAKYfrtaic8KyEvVtJeu67XkHny5gycKX8Wr18Rbs3Kmdmv3gUC6Ku6aL2bwLUoDvU4J3HpY5HnGkHFHT",
  "key3": "4bg4m1Qp8Qe69KugDn5SAaWPQu7ksxTW321xXMqFDCW4hCoBXE5e8FidvWK2XrukUYJLcAaKFZygtBsf174xPX67",
  "key4": "3USW7wL42oGNuBWHzQ68f4asaiKMDBw5cVizjSLR6p21kHPDWjhAbmQSWg3ncFK3SHQvRuiwK27xnT3ZQP9sCMvB",
  "key5": "4spRNyp1ieuVqqL8cS9PVsFEBdt5jNMsNiRHrUZcGYRxwW1nprUxCveQPR1v1xqHqwuv7XDEjY4N1sgujxgn7BR8",
  "key6": "avvycb2cVch6faWTjmaqoWcAg1MG1wb2pJs1a9eoj6Jcxfyn9zE7gj5w6fcseuXUXq5wQKgskeQJHZ8cWqt8Vxy",
  "key7": "2NUD49swG65s8xSQ3kbJiJZz9k3nrRWXepLpwfbqnXTzRSWKkr9QkwtssfULaDdpVZ2NXUvdE9PLBRRKfdv43ffs",
  "key8": "CxWgRUPk9L8fjzpj4YHcZ4y11rTrwdEZRaBbvshASPtbPSXLLC8DoyzzK3cGqd6mhMpiQkxvuD2YwB1AAQLsiWv",
  "key9": "3B84HvQtTf7ysxJZQjaVt7X3VsZeRhBJ8ATuekyrR4nBMsnwi8G7PzGWdAfRC6hASakxgTQW65MY8ZcoKCCttqfu",
  "key10": "5CKechAAYkUxQ9pQ8SRM9nAWKUmygCz2i9WeZoJpZqdVCPwVzQjnSNG2BChUTqp4rrV2FoChGqZvdsKxaFZMTNrc",
  "key11": "2Nq9V9hPoq1oMAqgoCQV1tFJY9yTEAqN6ZrVomQqYLFEbGznJFNq6ZuGGQ8FZK6cVpJWsXu8iEuwPdfztXTiiRKx",
  "key12": "c8PH8UgeXBjmSg6hkgZinvQ9CRAfBvT55Co7cJEh1DbhUBDapEvGEByMR1SZs3JinqK4jNQY6h3G8FkG49yTDWp",
  "key13": "mGQvRj3C1PLA1mdNPAAqe6xV9gvKFmvvS6suCFTcDCyujqW3wxGufpTzbcCEaHy2WmuBxHGQg8BvNwE38CNRpjT",
  "key14": "2j2eqpCLLaVyH33CGLscTJkoe5cEf4sgV4y6TfGQRXBnW5PYVJybFhzNZr4eo7nvUF2bTQiM5eTMrK8hWF2X6goN",
  "key15": "38PCkKkPY2seDdaAvkc9Fzu5b5i23DPZ6Kyhg9MQmK83rGoTVf2MiYBxbUvb3VVPEK9QyW6QWn7XHP8KayRkzbDC",
  "key16": "3Zy1yyhx25x1EYpD1w5uBSVyLSxt95qmuxgjBGmefGQktHVPvtwVh3cmXgSoxYv1aWmFPjpwdhf1fS52GYsCVzNG",
  "key17": "3NVZ3ikFodUSgtg8WRu5i4U6DivGV3umR2gVXcyLvBu4sENUcwUwha3qE9wwdHyD3hfvzwCM7pYyMz1o1cTWGPVG",
  "key18": "3b8nTG2EzFTDafLxgP2JZXTpW59ManWhAf195PQKN51a5B3ntRv5FxFBYNhKa6ezW8pXN7zyZTbY7kcBkA8QkP5N",
  "key19": "3BF6B7SNUydjXbu8EuKYztDpUZoA21tGQUDJrtGrHP2ZzDzceTotYUBenkhWp1EwG6y9igjFmQsK1wUProFNkAry",
  "key20": "2HDawdNwfpXbEpKASfADM56q5qPTcwEqguZhGtQrUMV8avJer6jWa7bNuN6eLVh1AFtStFtKjhUNzQDc8LxE3Frd",
  "key21": "2hyDMeb9FgJ4eMhvY8EYLDrPKDWgP3qRF6SPLr28jWE95KRiEYnaD9vTe8BacHGGhZTSQaWkyXHDZ5NNDq72Zdbz",
  "key22": "5N6M9Q7UFQ2k5pNv223sbWpJqQwmw1JhjjkgKDg9hHPKgNmuA7phzpMsoQ6ghamBnNAkSFd3pN61cGMxhSdJiTo3",
  "key23": "2PWtXk9yRXM8vi3r3Z3RVZ7A6RTU1E55cWrm8pLf1yj4E5R8PTQ7vukMMuC8as2R2Dq6973FFDqrRBvHDDU2WPEe",
  "key24": "wue8nK9Nx2CBusRKcfZtc2MEsE4MAx6ymKniE7LYDvjXpyHtsvW1g2jsG69fJeRhV1jk5W2XRatbdTZh3G45AEK",
  "key25": "3U3UHnSv3ukeUyzkeehg6dFrbZfkbN5fEmVTHntUDYck4ADFZHcYc5SKtQxPgPZVNDZDZguGiFox6UwXYjzrRh9V",
  "key26": "5QCabxNz28y5fJVDi45FzPgBESnoHDARWh814jYa6bn3fHeN3xD229o6jazBsk4Gdh4fXjv1u7RE8Fw9DMRb8kFA",
  "key27": "3VY5wmQ93LA4sSXeGcuBfnuoVjc6f62BYHyZXqPSWMoHzbY5U25fx5d5QqYzupoCNNgPRenbpCSYnRQDDYryQS3y",
  "key28": "3ZUhSSdEgHCGMgMgkYJ8HMEpse9YSZuGpNRpXW9U9omjeBNAWqRSBVw4quWmdz8FTVLpTG2dCfEagHQSzkz7Ufay",
  "key29": "5ztPMSXquwaN6q3Zj2ayS4oEugZJTu6BYYimt55nvGViyCqaA5t294seLkMSaDt8T7KM1WsVxnXj4f2A3Dd3zdU2",
  "key30": "4ymQTU8Q6xcggMEWXbBQJxCoaoi7S1q6p4mXpcygTEiGq3tBL5V5LaCMJ9And7jgmC1txsWtH1NdiRqopazpSmta",
  "key31": "2yrbSELJPMN6X3y9TUWU4fMmHPLM41e1j4nA4wg8Yyww5kF4R1JS8e1Z2xNeQz8MeEXNj9P4TJUHQ1DC8cuY2v4Z",
  "key32": "3JV2XbpFgznU6WMRtwu1K2up5SKfTgy1rXkqgqj7fyFZdN7JuAMKUYG6u7jVBa1feVaCHNVnwwPosTEUC6YtgUVu",
  "key33": "2M8SGe8TCG8cszfBa2Fg88TKBz3sJyC24tnQHaYSkVab9gerkjhosgxwvWRzQQ1BjqSCCqqYWSQ9oeWCaj61pL3L",
  "key34": "65ZRKR7aeX1zyUgGuZjD4sqUxMXmmkr81GrDLVCrTDhbe2sckKhQFjmG6YTNug1oj7BgYWmhEL6utapzc5r4YJrV",
  "key35": "2sfmobzW7AeyvHvcYEyCD9FdTweSMnhgvAEVfaxA3rhHUfgDTxcXFLshumNhV38ELijr8H8hBBWNPGLZF9gPCuBy",
  "key36": "5PLjkUro63h8yA8KL4E1F2rfuCFKXFYbQtJ1w6DqrC4X8vvfgRmB3C5ru8A53tduL7apkMkFze4uvhhwBFPVcCWN",
  "key37": "2wmi8jAGyW1ML5YP96PUHDMmXVFgyhe4BTV5tZwy9q9D53if275rjqTwNU8oQ3L1GtbbenK1Ta7NuuJR3iWq7knC",
  "key38": "oXGJigVjFiTAFbowqnfGYv7gn372T7mAmkJFAHow9G6yfhW7AkBZ7UthXZCJnvt3VbTAwazqnDcm3hHt1UpEU6R",
  "key39": "3fnmNfHJYxhUQ3TM9WTC6kAvW22YSeVAi1NiyDMxkQJ2szKWXrJPFGqEGM6XxaCjqFXhekCb3oVHVKb1EEgt5NtB",
  "key40": "4ZV4frMXQNtXivAgJD1GCt9EZxboBgx58bXiqMbvNom9N7ZgBH7Gaa7v8PLyZk7LCeto4ArJoPUqS1jPGDnMFhDR",
  "key41": "5HW2uEfrwGprjN6buWXQz7VgTpDY7GB8yroS8NZgG2eXgsEmFKsvHMCbinuAY8kNXYbAe1PLK99UBPhpKkGzvyGD",
  "key42": "2PL1YhEBugEa3c6QPd9XtxDQtPk4QEbAxvejUS3R6hjmPtKE4qTY2DDnbMy3RT44pSjvCGBgP5dQWnDP8Pppp7K",
  "key43": "f1Vudo6gwE53CM4mTy4MgkkqkHE1ywbDNYfmYurVhMhDSdbRxyeS7wwfWAhb87D4skdnjiBGSfmJQxiZMfRin11",
  "key44": "QhNPT7daYYqL8dGKJQ2L23HTCDXRkPVpKkC3PptpdT7PRvUbtp3S7aZkULN1KLFN4jUBJgkey42Ba7iK2y7axfC"
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
