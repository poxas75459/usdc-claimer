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
    "4dtGxaqjk98Ft1FkFjh7k9wm6YGSbeECzWMqwXM9qghSUcg2jAih3mfb5xHCyFS2ey7dpkhZNtzBHGEXe5bxxZZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QdaMvX3wbECUK7deSXh5ibsDaNLLPcK1yW9RNcK1vvMpUxwy14EPLwLpd5fwFj68g2dWExvx79vX4kstEXDmYpg",
  "key1": "4p1Lj8UdWwWZykxyxwi5f4wXRn99RoMMXPTpM6WycwmHfQjiBXMe3yL2GhhqTwbE3uFJRRcX5DiGLQLW3Q5rnKaC",
  "key2": "4Xb9EPkoXPWEqoKRGryhMRWABuDJLTbbp67rNn4LemzB2bHhGcqdmbihRMod31XUmaWL3ddzYF4uvY84EMzaVHs2",
  "key3": "2pF95H9prnqWp3dDWdB2cFNVGkFpVR39UkYivpCZTp9XsVhShtLAzEGh3Lgc7DRCnkotasjK9sYAe6FzCiFPK2AQ",
  "key4": "4FWR9d1xEHNbHFhQemXWRoGZRSJ1XK2YyuxE4B76ENf7ccB11Ue2rb7WQXyEGuHxc57e6RRLCKEGQ2KwZpLnWjEX",
  "key5": "HRp6X5K1v63Y97g3Zybt1XPsaSJ9cTsD7DrWLZwpqxzXhnCX74d5Nj76qT9eaTYE9PtVRe1hbyDVDQhNTfDzgYU",
  "key6": "5syKR4v2vMYkvKxSxysvWsx6breKxJxAawrEnb3xsEBbp2vzJFe4CNzNoQLAqzR4AqUB7r9mJoPEG7npqoXXwf3g",
  "key7": "51z6pWzMVmabVQiTWHCMZmVSvUhVAjy8JVeEF5WH17wi5Ka2BJY8mkAMnpPbuioGZtezV5qtVS7ZxLPzKRqAU25Z",
  "key8": "5BruZcbFxac5yyYMQNnH46QXa3KKtaBxQ6dRXTteU5XCEvnvtJ616CiTaeefDdaJBKtUKYGpnjGrLEW8ioXKNNXb",
  "key9": "2nNDmWY7rb8Fbc3JVtdAhnACJCFk8iKH2oSmeN29Es1VVRyxpQkPKucyYB7qbRPWMhHGPkwb17RKyYEukPWzzjri",
  "key10": "2KNHtmXgTeuCE9SLQhh2dkycpWZvyQqpbrrna1nUViNCgQEd6KcfF7AdEhDevSNpsyRhwwtDinFPE2ND6aWJVrEh",
  "key11": "34mACVq7xpk3hVVYrgPKTH1X7sBA2WNDdktdoQUTp7Wac15VUHtYFB4qcWwn4qo2CP56dDVt7ihGmhxyschGMxD9",
  "key12": "3wz33S3jUEkKAV7c3rTNpJSkVL9Tj7QwwGqwAUtC37sVaTJNgcHfwQfQCBoc6RPk2fab9YaN5J8fSNhVXAx1rEz6",
  "key13": "27XLJJXopKTHTcMb7ew3748EpWC91Q2ibtEvxvfh1mhG4HJ7kLKNTA2VuaEjEHFJTWkCjhDSt3rfqt99KmjrFsBa",
  "key14": "5xNdUjVR7yn4DgeBKtdb38TimgR5qj5tcNrc9KpY4GEveJ2yWgQQ6ZDSBKC9mpf5kNoEu2h2uDUAC1EU1ScjQpQx",
  "key15": "HFSzd4Wzg68qkHJPtN8mmtYQMY6P1ptd4EMNGtGpEoLB2zxWBupnDgsy1BbUEUNkYoTPhAcVW5pq3TNnE8zmxuH",
  "key16": "a3nUy7YypawjV6p2Q6DpaNS7ZicULoEhMpYdXxqPgEvS6o3igSYGUHjkTHnBAKWGe8NeWXoepiobyK3JK6MzBho",
  "key17": "23ms553CypGBjU9rC6PWcMCZFBZVBJed4tSWZ4tqnJjJkzT5W7zJ1PtdiPmJ9FgU2waKxG4yiH12XJDffTAHnBpm",
  "key18": "2C8u441C9DLZG2qZssSyTUVerDnGBwEUxTGaTczpzMFjtoKoU9RTqPPievuEvxXApX3WFgwNE8o2fLv2bZn6vHRh",
  "key19": "4xy8GWdgW7Xx43Eg4zpHejoxSYXttkVDgWBYeXmScd8LnnBHJk4gxbekbAUd2L6AszWvuUCiCV3WBujnrSmeogy5",
  "key20": "5Twd9o6NVsKT8MLF7K57p9vZzNSGHZincewPzasrBugvxGnC5qQyDDDb722N6fFPi4U1wQrRJrwfkeu3X9y8SgZk",
  "key21": "4jwNWVZaXQXAKNu38WmPi6jrKf7JxfG4qutztq8sQxt8NG2XNCwojoX3DiFcPz5XDAbhakZRujghz1pii1qCdTie",
  "key22": "41iP8hbq8b4wLQXVXrHK9nNDc7LbsTPvECCeY2pWsYLSbV2LPyfuMSh8QPQ3VKyUnXHkYXug7X5szN34n9LV5Wwu",
  "key23": "37DsaDppAg8XJFkZ7vZc7tCUQ1by4TTdrm6HTisoMTfrAsPgPLCTSE6kEc4f9o5DDbzxvChx612etpSTKTttvwLY",
  "key24": "41QjRZSqRoKR9Jz3oEtXyHN28RVhMqYAHabX2Bv8NDWKRSHcdsHE6KfsJoWvQjrTUtVPEPCNZLa39uqQTEdaqTcy",
  "key25": "5s3zDw8p7s4VJmZqSAvyNyC14iH3win9aC8HhdCQzJwFExetjXgN39QbbvUnND5bZ54iMw5stWNZJCg9gY4M7tSd",
  "key26": "2QCrkfLeXgwExKJKSAWDBGqwTkFz7Fp3XcXK3pYymHbZaqc1Nqozj31ovQigweKVTsbuoi3szjeaMcDtsqTCdcvW",
  "key27": "34G4cocMhe1SPN8N2a1wkR2v7m8qLnggrsjSVP87RN6rM4e6QwhDER7mu7BLoWy9brvFMaRVuLeWWw1qGD5b7yme",
  "key28": "2eMZEKUGzrKdiBrfyE9ZrqR3Jc4GuEJh1Gwf6q2xA6d2A4h65JyJRxQSECXTDy8dQCQDiHY7SzNPDU7hcv25uZKd",
  "key29": "XwASN1g8sPkpK8dysiQXXitMxDLhmQHFYrbuC8tUhAFKvKZX3mpyhR5DnKV7z4P5ScUkHCzofs5AJ1yJbzjSJtM",
  "key30": "2SfmJ921e9jAuuW7KeALFxW5YitZhFLhvUZGSe59KRdQHcwkEDD7NYY1cMgWapxHrfUmBMLQQuDSW9pmvPYtAXFr",
  "key31": "2nUfuckxyNJZbWV3T7JBjKQfCW6GBEn88Ad1xEdcWM2gd94T3c5fVWcsmZb4rKwhz1fzBcB2fBenSUY2391MCee4",
  "key32": "5gtKPfJFs7dTKAqRn7zrFwM7qZABVXFAC76ZKtAScNYdPEpHiBN4pqxn51rH1HM1kqckCJRSvith2VH36o7snSYv",
  "key33": "3JSVtGRNugGPhEiFHj2BnD1RUFBgWoZp4Lwk1aWDwVWEoKANJvNqDbrrJnprje5DpRaM6sqoSK8j9dM4CYbfwb6u",
  "key34": "3pJg4jaBJSJHjsF5LiycE3qGkhzU1osTnwDV9ZhnPegNDU468PeZwBLFuVuyGKjxkhnE1YRHPQu368z9efN4L65e",
  "key35": "3N8tZEVMZUzWnDwM3cmggJzpW7gNhVdhumqLELW8tuJfaza6UhbWd9R9gB9g3f4rWcKs4NxbeYoJgjqH2bMHgZHs",
  "key36": "5k8tjBA1fDvqitFN9Nm6s5RPVxgYCS4Tgn6Tm2pdoEfrTE1CFBmT6g7eALbYHpRv4qYvpfb1JgZUAyHKnYpeqdu8",
  "key37": "5PNB1ee7j2HJWyQxemPAcqrgYKx5DeciScrfe3p8nN2TCGNNi937UzpozrzQ5TEvuAFkig51cBZkVLgHjAMkbdad",
  "key38": "4DxTVJeY2veU5qS23Tt6ys48XhWaX17qvWxhCTg7AhQWmaCrEqvmkGKkbicUp5N69XHS78mbQPekSzG2DRgACzS8",
  "key39": "2oDkqpKi16TTPpRuSNN7vjFJ5qYvQw9RDxUDT9zUddFXE2QZ1xVvJPrg6W2LdauME8GQsNUvbBYhS3uLmRSvUrA6",
  "key40": "ZLreyxXDuQDyFZgYm3j1uoyxJmZeR8rQJ6D3FmQHvUNH3i9zs38joWd1Nb9g5pxUb1rzAaCt8Mc2tPiaAUYoQ7n",
  "key41": "2ronUjBVAMSfkPBerpuhvXBxuaA3Mr3dh3nBumNetcErL7Ks1sHHmm4oZCbG7JrKehaPmVonLT37kG263GHXsPp",
  "key42": "4CxE5w4LEBhyMoEUXVXP9ifky4hZYaVk7sgvaWHbZQit4veoPxR2GT29pmzoRECTLLZSh11DLK6Qf2QrkjKyV33E",
  "key43": "cmxyUBBEemjGexJEg3u4AQYAncsXyo3nueGU64d2Rnr1FzV5rg2PMTGEbfXEN7RhpXhHrTaSDRHMRXKxBTQzCwZ",
  "key44": "2eEQQBKH4qJYPrwZKdRrqNVecrZPLxjkxkWmBEeBoF7nnHKsSZmrU38kPwyQTvPcbNccMdrwFz8S8gAYWTGZK6xo"
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
