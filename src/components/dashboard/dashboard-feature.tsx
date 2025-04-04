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
    "23WMvk47g3cuPTpeJQ6wA49eWAbV6F57Wo8JzJuhTpHh8mZcw3xWZPkWv6t532LQVzGebHdiuW1rADvHec3R3TtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VdD6D6epz6KUEALajdMG69YiGXceN8FFfw6Qd2amGVVPicg3axq7XXU7FKTfZ3XPbusES3yckRKVU6sdQKjRapS",
  "key1": "4k8L4Px2A9c9Xou8x7FPUwaWQLmeHqAn9H2pwqTGJ7G1969eKSSX9SnKxv2D4mrmfsRuk7eLfcZzNyr1NNAeJjzd",
  "key2": "5yWxoRCmH7h1tvGJbD6ASxv8VpS8APjecNa2NB3KWsNW1mZPDt3oAW98vTzwQRBgZ2pBZnnQH9swZgHAa61dQZt3",
  "key3": "3yJ9RtLvsirDvuLLor8dxHgKFtDWrxf2b9vdHjrZjbY8r4XLtqaByCRnbJ4Ffj7PiSoGR9JJYzZ4vxB7CT9euRoc",
  "key4": "616NprtNymkHmDwL6LUfgXzRyAivsnNAFjf7uLAnXppwLEzYBk2a8B14ghakUrZHC4Jmj967Erf7EDaEkJVvioSG",
  "key5": "zvTPt1iSqPUMyv7r8X5Vhp1fnYMiHpijGmeumM8kB8f84gdZk44HovHef9Ti5MYkPMUzh6nhuN7rbNqtztGWdPt",
  "key6": "4G7WBvNmFKnBssgKHDxcksW3hsKtGNFdyPT752E86iBaq5n3zQhJZWA8LscWSAFR9RijzFiYistukkcHGwco8ygS",
  "key7": "2niLrYpXsPpg6LiZaqxvXYFrLsXgjoerWfcyD6VoPSqBJYVaaHjxQCGoszREgqfxRCrwtUkujwweL3giaDwt9F6n",
  "key8": "2KEPTw3L35JgCVPCax58CQzxxFe2ubmiqhaCrfcqxoToTbiHGjfnuovEmogEk1qNu6m1bXGtZxrmCoV9aFJQa49d",
  "key9": "65BqjUkfw9Vh8j9CnTu3kk4FeEzG7Y6y7SNwZB7djd3qLHwc25Tfmge6kV1ekd5nj7z3dMbRYM4aH9drpvj2goeG",
  "key10": "2zgCCE53FJ7TtcjiZzDcaBennx639PqhRyawJXByehbLPQY9jqsNyhX66Sp38DgUqed6duK61DF2Z7eTHQFrRSS4",
  "key11": "VKsUFUKiSvW5LhYCFwcZeDXLFnNqFFZ2puHjd8tZdTLWPDesgiFHa2TTiyVFtuxLLBmRMuKnTfYSHUA5RHvV49h",
  "key12": "5fgLnuVp2ZSiQZaaoLoagosZ4ybd6Xw98vKK7M69fCNUsaNYSaP2wYJXsxS3zZGdSSDunEAKLxiSg8xKq3FndM1",
  "key13": "2V84iJv4gsn9KFzWH5iMXHq9dNHwBXhPcF3WqtBCBp65LaecaRUU1a2D3mmyZCxz96wqYz8Y2MzVJjgKPLPvcFwT",
  "key14": "44MajTGLM4r6Vu1a6niqxVLJB6iXzC5JJ4FbPwXALFjJ59i52DnPrG4UZKrXXfgodQdopcTqE6aPfiQMypFozsL8",
  "key15": "3MNpyZhTRifx2X6AyDb1EEuwgDLVHtu6UjUmG5pwC8xZGpAVgu8zWHXqE7GZUHLvm8fwnHrivaesVDUMHR4NGApn",
  "key16": "5seqeq6Wadh9HD17jySxLCBB84CoE3DMVEHB1iXgwM1gXVJw8T2y5H3DuiBKJrpyn9NK65ooX51tj6W1szwYChbn",
  "key17": "298T6AYF4snydnD4mCNhKp9sfhRAD5VKVor81LKjGAhFo8KEUuXhDPuLBo6hwwLYqoBnzMjuZzsaqXsC2TmKg6KT",
  "key18": "2BrQ8vnT9Y9G2CQjqSGRnLKpJN9MFmavbTgHZ6JCcmReBFaXEGQFGypzfqYrtqpYhrkaKsDcxRTqXoavyWzxLVRt",
  "key19": "2VwVbBfCMVT9uWCbFLgnppr9hy6PYjkDNAWqirsGrq66CLMpjGjP2wVoNeo1HzkNr8VWnXCyqt6qZiNwXEUNBsv8",
  "key20": "3MGutY9zWxJM2VEPqjbhZPr7eXbstCaKiM1yqMM1vWTPP1hKamkPqxFM1XfgtBnuY4VQBgta5Nrmh4tjTEktdyra",
  "key21": "2uy7JyYgAZWXxCkScFVw7FxHoht6muFRAwSpujPKyNXu8XU9b4evxY5vek1A7pn9jemitw4NLcUrS1nb4Qm9ZkEL",
  "key22": "rgHYxeHU3pmyxC9myQN3TY3H9eu8NDamjH9JGygpQgc45q3gzEHSMCCiaCqqUM8sPxXXHXaFnjz4yhygKTJjSdT",
  "key23": "aXkVosux8z1y9SyAWC55pTnfxFpTykbgixGvGaREStai5gvC3x6H6MgutaTjsmRzyVzMMZ5X1ncUETHJCv5a6AU",
  "key24": "51bFFn1fJ4MfNfhP1gHDqh5Nrqcc2qfpdFAG3DGp3wvcnopUcsJCgkpYYU78gpBShzsWnNAuncW7tX96wye82MrY",
  "key25": "5dJdCeVH1L7fQj99pwo68i6umNbsmQ9w6zezMXQ4d1yLSRLfHqd6HjtPiYuefpLm7zFzN5sXKrijLtyXQJs11j1y",
  "key26": "4m2MTeRNoJ6mDk1okvCWAq6u4iR7foeQyfnGZRoKEJX3y1CnMhBuas5gHdy9UyiTBz9jTEmhDmvrHvJo9qTqrwW2",
  "key27": "4DxGW3YB2tWRqCBUHQH7uGnJiFmV3GhoXUiANDJriYTCEWtrhtQhUYViV7CBtGjfUsTx8rE2Y42aguViLWZvEEf1",
  "key28": "5685kmBJzXoUPu6G6kvEpALoANQ2e6d3yMPY1QZUmSz3VSdY1mtH3ThQmr84ZWwQtFgwbet94DME1vaJuvTMYAsi",
  "key29": "Ef66SZS1UePxDQwByyBCGxiCNpQ5ikzETsMNv4rEwggSu3NUEeoi8XqBS4b5sCxbMKckhU2pa82QHt2rsmsXVPv",
  "key30": "3tPypoVuC63tgSjpzg7AJVUV9ukgcuHdatNP81Y8b7yChdN49AHvfNUCWnrbdgEmD3Ab3TTBhMhPCWfydNWmroEM",
  "key31": "54sammm3D1PsF4TBwKKAuFqab7fCgwshKWsUT2MpBHZeDau5Woj5VA6F2as7pvkaGN5j726w1VQEdCvQy1qSgS33",
  "key32": "5JsaocozYDpcV9fEH7kyXhouKtjcgAZnpS79nmF4vshQtbAJqw6W38wj5Mq8nwyhXjeg4jHfkmtoy96L9cvcVteF",
  "key33": "43Y22bbd3WPZoJSN2MsMULKNRboVSLzqiftnAWeUVEAWuRF66iJb4oLiiKfUJqAihGMJggbdA6fkMwkXsuvTW332",
  "key34": "46rmt1ZFfh8PauHJ2X7NrDh3CPjKoeS5AoY71LTucPusRFyQBJoNQ3wtYkoMPBd774SaCMVdUMASt9pMR735pseP",
  "key35": "xhif7R664QLcKsVm6KLELmZqtLnrCFPLw51Gcm99BoLEu9x1ngi8D7kKtPXc8jWQnwMPxwxNdwvGUnAR6iq8cqn",
  "key36": "2sfx8saJTY3yUay5oDipYMQWTQGejMxVPJkwwF18kLLNYA3ZQ5Hwc3aSUDcP8iQrxqb4jtkZhKW8gKPjPonFUoT4",
  "key37": "2fEGc8DxwtwTgCrvAWz7emLgmucqaXnGyBi3WUsidvfZvaYnXN5FdTZravBaf5PyWiYBSWcmBcSvkL39KSztyav6",
  "key38": "64nkUZqpAtSwSLLfXCDLnXiBVXSgvcmgKsksBMyeaCSMWnrdjQ7dFjuTD1iL6cEc4oumAGFZBsBuYf62fpUKoCYA",
  "key39": "2Zorm9eiCd55tmwZHYDddVTZ1XPGXuf3WjXXAWrsES7UApUWWUPyhC2rgZBY2FHJXAjMQKUJzi8ZrrBvKm6UaSjP",
  "key40": "XaoSaXwjHmnQGWoyFF2cQavLDRb1AvaucLNQiV7dLse3vfdQRb9C6JV1QCFUELse5cYrN28FwATgJxHoupMTFix",
  "key41": "5GPtYFeDym3zXxqFe4YJ4W2sczMcsL1BVcQcJKGHHys4c3NTUiS5vvTQ2EZ6zciAPcrqyMw7a88s5ydeaDuQbeBq",
  "key42": "5Mr2KbetPqzkTvSTovPcrj3eNPvFCzjVJunrcfGuoYSuDhPivgKdsCNxXVrC5rZWPKL3kXH2ubnJ5TTZzvwKGJZF",
  "key43": "4uTqF2DFxBRYzMeywvJZ8GMH4bp5CxRsieHZ3reJd3tURyNhcQd3wBHy9Wkmw7XPi4kySgh6bWBA3Uce1643yvLK",
  "key44": "3HvD8pWjScA1b9PVTS7US7zBtujHfWzvqyWPH153KDG6qW5UAP9sNtnfdmvgqbZiVsXsXJD9dGkTh9BjQEeKXd3s",
  "key45": "3REKgkN3ue9YE4LDBiWYvb3ou8TX1Tr5cQo1KiZoV9uX48FWTQsjAgwUPi5z47cPT4s1rjTzhQrXXQ5rgTqa6m2",
  "key46": "3onFFdA9YT3tPJVL4RtCejvTi3u8Xce4nbAYA72safxdAwfFcUL7dZ3R5mGvWMR9bqLJybVbsgpFAXPkZn3jZ5Kb",
  "key47": "5NwUyo7F6Ci6vg8nWbKiNGBpJKt84EoX5HEJS7mw18oAGNmoUzWX1mXjj62JM1hccZaFqYEJJ2nekjunHhfp9Xc3"
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
