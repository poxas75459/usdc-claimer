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
    "4JkMquDevyZJukJFNwkcZmb5XLfq3qr1VWLxETr4WRLau3bfGomHPqyAoiLqncczT4DtYHbAehKz4quc9U9Ue3eH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZCnGxdVdwt4d4R4wKUqwXMggeFmkJ9wt9cYPpDnanuW2MJWMrbpGmC7rN71ox4oaMVjVfJHMdKFi8eHa9if3fUm",
  "key1": "52aK6EwcsDtSxua9qabBFZT8E72QDGoBxLeXcHfLoTuJeHc4Ei1KYmfQ8m4z6YcBSi1PJ1eWaQUECpqocBFX1Csf",
  "key2": "3q82wnSwXWEabiJRmEGHtkev67u2ioWfUb7YbfPNytdLyppfF6opWW9wsCuNPnNzhmJCLGKW2joexwL16e2KARL6",
  "key3": "23aSH6atd9XLkWPJ1eTDZbiEaH2AA9qKpGUJgRoVbLBk9vqBPhbwJoL5d1FnvFnRyVPiPNjPisYfsBaW54kg9Zu5",
  "key4": "eRP1zJzFiGGGLEsMnoxp7532TV2Uc1evSjj6R8FyWcRVRV6YgKFBcYk3e517ZqZmewcMT6Q1WZzvL7RGJopDPbS",
  "key5": "5SYtBDH67jHzPFkKeQcHJvFYdBxkBrHNdF53zAD3JWLiShmzKHLL3btZTGFv5L1Xhq4iB6f7fq9y2Ck5wHJgygzb",
  "key6": "8faFeV2CYgzKuWChrPq12AnTNWh9wiiCdxFguDBnBJwPKy55GCaXjvtGwtDTQZoE5sJEAYBVqX3RuJ3n1Eeh1Sm",
  "key7": "4Gsn9SsZc6KGf685TrdXTFXUP2YyoANpG19HQxC4fvYi3ujT77SDDLoF6a6Y8TtinWxUfGgRq6kNgp6jGCDXxnTw",
  "key8": "2aeCfUW9z2btcdmPxxw1WJJaWuCzr5X9zWFTPr1VF7bK5wHTYwT88aB6WVgKueRpPkV2Nsd56wKWpaenWctqz7gP",
  "key9": "29yKaDGrg8FNkzXYjSTG5qwn2eggqofWqdzo4z2HZjsVzX1X1KJUXmsSikcS7yo7KySPWHGYHWQmR1AW3b1p2hmM",
  "key10": "4fTPgUrGvZsXiDuDY8qoZPnyRaWwhWC4GQ4tYLndnAt1LdFxMLGmCaHRjPcP2bL7GzoMVe2JdTYdFNCgDdU4ojm6",
  "key11": "2QmZ5rmUTx8aQFFZfcLkm5wXup5rULSyGuxFA8Z9GjViDRbFCpNLtgYs1JVAuLofni44p3apU8gr3z6ymG4vcacv",
  "key12": "ameP7fAffjVT4VHWpS3TwaMMjS9u6hKD48ioWorq8cXfb6JBUEkC4MjmymYsoSun1KdaR2fBNNRKK3C1HRmD14P",
  "key13": "pr6MFMHxmpSEU22YSN1khbEamp4XhvcSoKxTdByufwt5mGTQ7riGYeGGkjDvFTFd1HrqQCJ5h3dkixVjR65hgin",
  "key14": "2QxPe8aU6Wq5rD2CvHQoNxAEEVA6CtGoQbQgeU39B8jXuN3FuTDrzpfMEsqPu2PvQBSDqUpyJmTjz6j9EbnY53gj",
  "key15": "25Bv75bi8AZ3uDBVbhsM2maTTb6zmYwxEVmH2XuRLQHHoyF9g2nxLQy8YhaWs6e85QXgBF8vbHUyguEx7TzsKmzN",
  "key16": "3LRz6pC4ES8PuUVuXEUeLpjvqUFYsJrC7PoqT9ZWdKyShsNHxxd3VJjiJG9AAiRssSRa7CnABdN1knSxAjqGVbiG",
  "key17": "7LE1g7wZ7A1UfagM6H4tfPvrdreqDgd9MZwGtK9G8hJFkgWnva6fdmMaRbAvVxBtpe8ycG93a2qTZMFzP2h7wm8",
  "key18": "3eDv15Z91Wsp7W1hBHeJ7dEA1CXQbUXgSqKtoeumHDdScYJoPRPpGJ35aTijJaqUdFNwF6joMjhqecX6mqovSsw8",
  "key19": "63kwFi27yS3Donfz25x4i3bb8LELydMuVSxZYnc9sxeqyE3VUJKMgrywicRejdu63QreRELiXwHagbXhUu927Wu9",
  "key20": "Qj9ryZLs3bsb4PMf8qVkmhJQgCtWWyNVbjJN7uMQyAGKAFzRiKaRo9uhLgQM2HqzCTrwcgnMyUMSLgnA3r5jLWm",
  "key21": "3WL4UCpSBYzQFihRSMj4aWcDxFY4Mx3s7HiuMGbEcGQABdVpxqbZPk3Cn1boNKjgdMknRsGCcQ2sSMJxzuF3jMEu",
  "key22": "2rHipqM1RF321eBpyWFRxRWfq6eqgV7RReqBCVNq12F5otUEYhcz12MbVka8dDiQgh7R2eYp1AJdknShLuA8isTi",
  "key23": "4BiHvsEwKzRZ97Wv5PUQYFfrNp88Yk3eJxiGBcm9nmJZv8sSP6UTwxoGcTznTqsAYBw3ZuJxGYobhQTH7EUbkAsx",
  "key24": "2e936wh5nXTWchXbHzqxRxae19dnV4qG61kAFL966xuW4dTh832hAiYi61UVEMCcKHfnrsv2ZPrg1PqLgdBZSaS5",
  "key25": "4npbbE9jRhsQ6A879LMs9Ys9xmAGoK6myboX7SNdLxHrL16pRpdAJbHJB8xYmcVLSo34pxRrvMyP4Z5qTf6X1xJ5",
  "key26": "4qQXybxruBSZfeRzyF5fVsAGtKJVcqLKCm4vPFYpZauEJBnnKg9hGDNb4dHmxTiGuAyZir2YLPudLLZN3V6BeZ8u",
  "key27": "4y7y7zXobQfZMzg9pG2qsW2SwvebA3qLUxy361NqokQcmkvc9ZAVietoyx8FjHf9a3hRyqoDkycAb9P4Yc3teozA",
  "key28": "2Kx3TbWiJtfoaitREetR8FSJCmJHtj5uwcHxwyDZNyLn3Wug77XwhLg5LTJY5TGMqvqrTKrF9Gd7Q4neNww1zeox",
  "key29": "4DCkJfL4vNpNZeZLWmnAfuvEsLvAskEk2eX1m2J1f49beFWznAo4XJ1FNY5ZgAEQEAe7LToJEKAAHDRpJvWWwSJa",
  "key30": "5asUkzsdDjg8phtzVmnp2As3hFp59PBQF5EjyMg1p5XYupRauGdApnhfFAC94hZVeQS5k7G9GeYif8ra16g7Uyka",
  "key31": "DTgdYbrFX7W8imyiQMYf5CZQVuxsBEziydojrUCTDXi93DPcQkkUU9wYxcGcitW3om7QtwaR2kEgscgZtefs4uC",
  "key32": "43UU2btnWt13hmXhxsJQyvZZiYVm5xv6bBqVFCnE6tDE5vquzLzWpe7xS5zzqSiLPvx8YAacPDqtZuxrRJASv3Eg",
  "key33": "58B4aXe84UPSMUpkv8rz5YiufzGP1DNTtRjSS8ShTe5G8frpmzoZ5hE56SxQNnPB8H69dwoWsQo34Jf7nqV5atxp",
  "key34": "48Veu8Fk6UavDnGckY9ZZxoqgcNdZK4JQ2h7VMQ6cnik4D9zgCxwCM3xP6Hcxn296vkBEsud18yyPTYDsmhw8x7T",
  "key35": "2W6YFPKa9rAZufBH9eecQ5qbu4SUptntZ92vMYgacPeZc3V5hhZmySkGJDokiBDiNLLTacf3QM663u4oaxsX72S9"
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
