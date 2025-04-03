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
    "2fBeWEky2S9U9sv5ZiCQME2AvfnPwU4WUdBWQHbpy2VHxBSM5hkVJy1EH35DF5o5DZW3VGJ8TXzhw3X4Te6aJVQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L48pWramDhPx3MPzijMSiKa7qNYJ28N1JYUWAAwRRFtFG8k8R1xAUhRWYEh3v3io3mP74XgsCL2HzCuEWiMFCcB",
  "key1": "3dqVSttanaRCaFfiVVe48TMnJUgGhzCFgU2fTBaJex1ruvauZn1jqcdc5HmeRfoxcK6zoH8MRRsWfzGLu4Bqp3i1",
  "key2": "5jtEA4RxdAZggpko8Us4Hw8cHKBQLirfkUbDMzUnr1133MvaSEGXvPvVHRaKXKNQpuTsAowSNDtE36X2zhLXKtnW",
  "key3": "Svf7CpbzsRwJVucnTqUjxBgCZKeW1Wmmcp8rS7y2DV92mirsxW8L4DFjsF15zHBbkTejPxSMsxeZ88JCrMYxUvA",
  "key4": "CqLBzd8QbnckbxKwMkoLxKmZKK8sEmrZbQ7WbSMME9XFxpcKzYYhxXmCzDkVRFjiRW1cEpWKd4dFzQV37dJpbds",
  "key5": "FPD2UeMT1GY2NHcDSoHvn7ChznC6d67WTBEcWY3mn9H9aTCwPoei9YAi1VcPLfkST9XDguVuNsMQkyFsoyby2My",
  "key6": "3N4mf93aPkaUTDaEx1SqNocHNhGggFzmLYeZ96HqDnHhv1KvbEVLcK5Q7rFoVkEpDG8aU3eGE9uJaXnUX4LBZMdR",
  "key7": "42xqKBHZ8yzEg1dJXyVgshvfF59gbZvy7miuBgqbeHY5KUmfyQrfVvisLnnpD4BjryPfqLLfEjQrv7xTbA3ZVoCB",
  "key8": "2RUfkHsAVfAk1B4pzHqtR6WmesCNpUH6uWhnu3iXuwSPPPKJmGzDRsDvXUZ8St7puumKDLCbpSt1GMgejqVsqJHf",
  "key9": "32rWzUATgb2dvPXtbXCWDX6CFt7j8sDViGw1vapeBFiCguPXad4hZk2D4dCmhiFZmAvnzRTYnkTV99ZSv4ZUzdph",
  "key10": "5egoVLAUfVtVHfkmCp3kXuYVA3FC4b3dyFc63tYgmDmtXC1zitPyKEV74CirxnknPNHjydUEWQVsBuU94xmtJHrM",
  "key11": "2BmFNna1odQF1a1Jr1r1GG1yB7YjtL4fduwsKCnu1EERx2azbSp7Prm7UD6Ga6YxybHEQ5TEVxT5Tiu1u5eK61Dw",
  "key12": "4JyTEAGWTeLXukmeCysRuiB7Mx5J5yYxVdf1VvPkbBDhGtKiyyCsGZyjKJPRgRw3e27yvGcVMFWoDZXP3DNJ45VN",
  "key13": "6H7h2BJjzrarhEjmRbhrGuNWNrx8U7aHzXEWfJq7ihuH3y1WbdBXBDKcSqaK5M3pVjeNMU97vtR63LQfYZkL8qr",
  "key14": "3gQ1z9cqmjw1Jwkr4jffBjtfoLpTuHB22QyLvMfeRY853vtmYT9fA3qzE7FMgf1AuNYPixFAhsgCARZEzfu3kpkY",
  "key15": "5f3AAzFKz3YGjETXpaftr84M5S5LhETJC7a2hvzF2xFyViKFMgvSx9QAisE9TQ1ZReKZkAeA2f34aXTHiHMmKumr",
  "key16": "FQabT1sjH6E7z7fTfSK5wevktqbtWr1hJ46vhPt7K8YsaajRiz2Gewk6SuHa4UXXujLGehwcY2f12wCX5rc6g5H",
  "key17": "2cW4HFAeoPDzvWM5G3g28A4WzmvQukhqN4GKFtvU5AfwhJVyrfzx276waaaq9owJmNUPoTzYe1GTJvyTqBAecPvV",
  "key18": "4dcEe7VegSDWHRgNUC1yWWzfYURJT6PGuJDbwQJn9ehrVke3Nwenn6Bya4fLfF6yB8gurDjt3Lj7LZ56HJ1SU8Aw",
  "key19": "3Wi62yHLYfy7SaE3EnRi4NQSykNMGyJZaenSvUtgXvrvwN1Lqeab7xfKnWgMbGPMmZ2yV5JVonMZsCJfoYMAtbKu",
  "key20": "3nVhJZJhznH6YpgHsQfhUVnUtBUaJkwB7dpx7YwzpUnHrHSy1drHpqZRFrPf3HNG5owAityGEiiTceFJR391Yg1H",
  "key21": "jnMauttS9PuPoDyF4DLi3Epyy7JSW89fYLgEawQzeWwo5mX6eG766X9MT5buVjAPL59Cjzxfz83YHnzSVdoyWLj",
  "key22": "3UmAsGoZNz5A7fGcreJZ2oApHF5w2aUbwzy6ncC97tHtxifj99pXhCSkqypnjo5MivnHU32j1WsBcyR1kBTABvYt",
  "key23": "53EURTQ1owVMk1EN29vez4QMLfBkKGc2sAVWeVwgkLmeEH6YazNgfdaFkK4QxB4y4rC4sc39Gu8Foza2H6E2Prfy",
  "key24": "4L7CN96VsUtkvzkMhxwDEkfyW37UWWqTSeNUferun4yq8DZ78hMyCiZraCcRVnYzDV8TrS2kamez8N6BiuoPdSkF",
  "key25": "3wN2myQKwNFJAu3jHdmt3zdDyLsg43PFWYBfLMiTxxh3qT1KCPwWJpBMSnQuMvsguTEQ9huWmH11aydXTziVGC7W",
  "key26": "5L1yZ9LCLQKDs8MToGYrFHqWD7upZLbNa9cn2VWxzWEsnjY3GSrr9Y5Xgck3x2HCWPSkHZKgQTpGr4sV7d76iGXh",
  "key27": "61prAi5XcUStYQ7poKh59RMLWiabUSFu5TUhgL36x48vDRyDzfPWeE1rbrT4kCZehAkaeyMuNyXjokfjaWJ55LHM",
  "key28": "24w9bUqvyG89hs4eDA5xWuQMgJSB1m2SjqRamRd8PyiZ988tdBek58fNSt6mB3UX8ZzPMjrQ9HHmFtarE6aKjqYP",
  "key29": "5DJhj9rZS7BfhhkUmZdfpEtf3wtbWPQvYFYRYG2qWPFtq5pJz4EXxuMuGZkP85DqXGBdi9WpM1tj2iADDzA3s4Ti",
  "key30": "2kyMV7KQacSrybmajmgjoDMBWbdZhePdwEVgDe1fUC551hhBGZzJimvbPvUAnRDicAYYRkNaYrCgHazcHj83wDiG",
  "key31": "3fdeB62g2cL1UtaTQVwdY484mWPMmPZhXqwZJYDkmKGyb7H5zWheLNXZ167rRacNTYKvmmdSj7EQWbi9BBrVMb21",
  "key32": "2EYF5CstjG2USYZBk8FFDZ8AB8LwsbBafmgWMQRrF1rgPk1M4LqMZ3VKBhWePvpRzYLzeuAJeqJZajGcBnSJYgMn",
  "key33": "2SQkHoeSoKzJBTw713quxMHkBq3z4FomPCVyShRrTxW3ouVTeHZXcybQxaunogycBQN6MSKggndDLGnGkzxMM4tX",
  "key34": "4qRA1GQDTTyN7H7hXBEDPiPFwCqNsbA3kXxiVYsQUUxLyqvXazP7FVTE7CF8hxmcRtMnVsX7xPF9bykgMVnkzemx",
  "key35": "62mQ6KUVvG4QZsjgM1ZMnLiJAt1RCqVyPTVLVtf1e5ZoEYYCbVve4YThaPJ2kQVA3XUJiEq3p1oq9VoGJXgpqdkB",
  "key36": "zSZUnTNyTnKsUax6pijsDVwyEzvBGqHJjCje1MnBUY1R4RFoZyudYB4arjtvp3NREA4mvYSj9sWyxtf7nYwhD6h",
  "key37": "35dMiW4hmPJN416zm6fgve1ewaw4xjaQQha8Am53NdMNZX62G6SRJauPwngd4pG6HwoSmXEmL8XpNN2UA3mCWSmJ",
  "key38": "giYbvZZoUTdftxse8jNF4PsQrppzmL8MVchmShneCMrVvLXMo8AZiK1jKCNTrWz8WtRCXDBqMYynu56oJgWa5E4",
  "key39": "4zuuGwevXgR8a1GfbX28K7aE316biunoRB5XPwAWgon5f4iAKvEEZjQWur34XPfyYH8iPFsTNmBPLGNSqQ8fq2Qu",
  "key40": "2v9Rb7zpWvUAZMeRRDEGnYdWQs9EboovBJnXLFfPr2WBkHSxE3UqkcvEvocQdhxPWfhwDHLhT8rfr4dBFQqCbKR9",
  "key41": "4yz5jC7MYMD9fzbWpXvU2PKq7Gv4c9R86c691sMxSB18BfvVzsprfDoQahsK9Ck4hxKDJBtw9P8V9VSExj4dhbJZ"
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
