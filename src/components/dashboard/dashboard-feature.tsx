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
    "3xYCEKBLnCi9g6osUF6Ytexg4jm3oyG1Q3YFTuTksfzeH7qnRDYtW1v6LetyVkGTcnrRNURivuxaLM5FNWZAp6ZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J7XhKHGv7qe2Qej4JXKwwyG6qeoo35wYEa82rSrsg5Hk3JkTyRdtPSFQ1Fda2tiu7CNHfFwDBeoAxrtVQCJjgSC",
  "key1": "5JUJDmAH45CxPuFpvMCii6WnGskDQ7xDfsRhKxZEJaqfeKsvSpkZRogTaTQep6GbAGp2e1q5dLkzjyEAKb2Jd6Cc",
  "key2": "3PzWnb1T31mPz94kqEmRh11KMkLxM5DnWP4iFiAm1dDD511edZWAuwFN3uXmmWb5TdrKhbSqnY4wgDrAnkqpWmtJ",
  "key3": "3jnF7msA5ABXwrAtW3n9tMQjssBVg7SoFvnv9zYBHo5iABEdvmsr2AJiAffYTNZQmELWqCo7867bQrAq65TA7Rw2",
  "key4": "5tdBitHyyFGb4yFdwhkuFzkLY9eUzuxTVapR1GbZ5AbGx5qekdduwzZTEyZ9sCqQZRpHF8GBedSubkGhA5Yc6Z5e",
  "key5": "3Js4swobVR5uGHMqLix8vr1URRuTNzHPK3AYcFQeXBT77jgekxkaC6xMEUzUjZpEqoF8A5Xgn8snXRXZMpdxH2Y9",
  "key6": "54aRhrhGjaQGoDyqHJJNjE2d7JZ5RatDGjVCvYwecMJr1xQGbJ8ChV5uo3rhFkYVvGSGctUDRSnd3CJh2BADDb13",
  "key7": "4MKZK9yEgETtNEziHt5M6oh1p87Pq5cpJn75eauXcokEZzvG4eA4WoKwLzxDgSKFKmESWtwegFt3vU1mYbcfq3kP",
  "key8": "3p1QNTi4bvQ45ef69Ts96cM9s93VxvdX33R7Vu2FjYinwtL3ma6fS8CJaY9yhqgQHyEsAM2ywF6FA4C8q3nqgWYX",
  "key9": "2E1BQ7qnbQV9XEG4kTdLnf9uYG3RcnALLUcGGiUgiHLwMc8iqs2RGbwaAcXjRMKPsQRtuWUEkSKzPiJW2CcqfW7N",
  "key10": "2DhRHNhbrZBneCQsaoGNhRzoMGHiWpZH52BLYpyThtfYUPTHWDBPZqRwC6jqLdjBSTAwbA4NYq1vuFdtFYdYoSJX",
  "key11": "3eyZsSFYPULJTCKZpdkEH7hpG1LBxfKb5DJWzcMkjqBK6tH144wu93hAMcjocS81fcWCyqUvZ58ZZmroWE61cyhH",
  "key12": "2zjtWynjYt5djVRTvPQWasFv3dbSU5q3NcWubkfEgwhEAKKa236PDyFy5CnuQ7hu6eXNHqXoyQLEj4fUTEATfehV",
  "key13": "3rN3DC5WoSeqeR73TDEP5adg4PijHBoPDeXDxpFqrkNC3dWM3Ry52cJnvJGE6DYkDztXDJHaGG8iMypcjpy7veNS",
  "key14": "3wLLiB4G9HhtripTfR1ivdoqHBtzgJU7gYJzCjFSNcfFTSkpr4hPEm4x3ab473sfYGKrZ6HmgFyvNFzqqXR4WuGo",
  "key15": "51evXTnjPew71GGFKuwgVngdRz5Xr7mDuDYbj6BhBJYpGqRvg8XyoSEYCmZExzuexDS7XyD3QMhv54kkR2jHyBgS",
  "key16": "4H2KH3HrcyMZPUA8H4BRDjF931sshEWRDCjZnGACR4TpYQkoSwmqNqDNYzWLwFGVrFca5QDduheuNgSXky11sQ7k",
  "key17": "4fnCyezJxfodMVFsSfXY3uBtwL47pExCJNGtQrQgsmUfGtD6h4Gr4amDwFR1iiBP8XvM97rxhVwGKk2tEKoosr8t",
  "key18": "58TrUoLJb5tCmNLA7kR9bNFvMB1FoeSMcL8Nzca35ZgMk4uTDcN9FyinsJMjfPycRL8taa7818V6W6RqY9mWFPec",
  "key19": "4ySSmznS12nt6xeUNEjVsRzhT7zZGJLc4XJZGhT3gLegVoJf4SViBBhhXJdJqLhXtJvZTy4ppHAsjZFW1NZLArrP",
  "key20": "5QbC4rnv5Dh4dngU6PcbLcnrxm5rahTtzYtjiHyQ9sv82KBYYi5fr8v6MuTyNnKiQQHPZE3g3wPfn6SzFzWaqBwo",
  "key21": "ZExUxDFy7rS9zsx9LQUbNDhzwPHrT7AxwQWEVG9GwrHwMaoJ78XznWtPka8wUtVoP1oybRgJLws3CVbLpUJEjFk",
  "key22": "7XB3vQCUbacgiqg65oTnw1hqBCrewoQjVX1yVCXHTzZVF6Q9sq13GAsWmk2fZ9WWcbX3ZaWdLWf4KevWRqJZzbp",
  "key23": "2aKTr482uVUuNhA1d8sCXwR3PNFvC3fMitjPxnDVv2ncMwL7ZroKSWxGq1b3fFihXEYGiXjhrDf39PwJu6V4YyhE",
  "key24": "YxgokLxCgQEPCfWS4Cyp1CaM2GKHrx81F3oSqpzUCofsyndYhawuyg4MFUPwFkAdB23LYfLSQyaX51xyYjH7iJt"
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
