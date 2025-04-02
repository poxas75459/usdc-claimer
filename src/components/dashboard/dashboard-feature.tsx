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
    "3oriD9gPccAJy6D6YeiabZ9VL6xVxkNbD3KG1HBjdqDjA2jt17PvDrgMuncpHdsjFcmsYQy5bDcA1MyAzhPzpZzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kd76toc67D8FtXLza6pBo4NN54TYikdAfGHHg8qkYpuqY4fQ2sArd3GPJjL6u2AtLWWNcE1Tk4cj9KNCKjWkECK",
  "key1": "jCHwjN4hsBi9dEjZBJ3AYrg8Rgx7hYsLJuY3x6DyEYf38eKSDkW6QE6y1ARx3zwGK7E8SHePqVBD3F1XwZwgrcM",
  "key2": "5jowbYHhR8ejJLssWkZVQqHurkozgHXzxPFQssE8h38Z8QCaZu5hiCS9BbnMyStFy1nsQgrFQUriqYn64RoKWmuX",
  "key3": "8jXTYorzfgwpdXP1653GHnVNJZZMZ88owBqocqoxS2yFa4C2FUhukGbWW43gv3Av7kzhD5iEY42JNdDfdeoVpJz",
  "key4": "3A3pDMKaTutx9yNQ3tuzrWnFVNVi7piUCgA2MyrTHLiB7ZHQxY9vaL3pYv8222H5fZzb2G21SDk2X989nUP33V5G",
  "key5": "4Sy7dNNhdBfDkk1dvHZQGVbYJjbaSkksjRKVenbdqpGwyJcDorV3Dwa4iwUiH1dNA2A2WxZhUcFCjpwwpvAm4hkk",
  "key6": "2sR5JKuwvpoA5bkseAtQpbyas1BStYpvbUNQ62GeVoJyGFxsWX68C12Tqj1z6ajdt2uGv9mTxcyr1UVGiqYsSJGf",
  "key7": "hWkL7CozdppKhD4DvGUiHFbfVr51nWneoQKs3idVCpaT9jW7s6EiqdZmyfa11PVFi2SCFrENUipjQKiVWLAkz76",
  "key8": "2VG12a5JyBmDurpKBo2as6K7NJrn6y1uHUMfUUy79HZVBU3YEtVVsme6CNMr3dqBbu9wLYzTbMYGhd62HKa1w62L",
  "key9": "671T4TqoJczpeYZtJAu5hDr8FYRn7T4yeLeaN5YTjAbckHWppKUPVKHcwirsijtXZgtzn5xLUGvRE1HXAuXZ2FM1",
  "key10": "2VzUBqViw6Zs5ikE6WC4i38HyuqXQ3L3RFAn4inLiKpe2VPH8n6BawtEk6CoDDVxLQmFQeJR5U51GyR5fZcVgPza",
  "key11": "3EzGUn75HS9DpBDS9ZDecyiHiGEgCfREDBQsR884L7fuzE6WFQPNsDpUVKRFQseMwqkguWEtM3RYRiYBakGF5oFR",
  "key12": "hLAwFhqir2fJ13uQGDYvwjDinYr5Eso2LGsPGp9BzPA3CZELvnymQJTqN5LWwadxe8fJKHdENXKatAB3TWwSW8i",
  "key13": "3NN2LRwpYLYR4zo9yzhfyQXNhL2NBdjkNWZenQaa2mQB5UipDEyZPTp1BhkH7QaD47WH1ESa46PWDdnUdm8Htrc6",
  "key14": "U6XwDzqkwKWY3uZ7b4XQy3ZrkSqpz7ubwwm7h4kZk14Z1TXQeYs1BHeKvxWxcsxv1gNsygErb3sj4bq5xr9h1mZ",
  "key15": "5fMR6bVaZAdq5hB9gPasZfXgqmfwAxc7XgvTNQ2pMzu48QUrcEDs6coTcDgikU6HMDppHzK1EAHnHopZ3gSv63FR",
  "key16": "567hVbk7za1iABLKJUkNoQyvbCEnqZopofy5SvEGF5TsJ5cSco9BE8Z61LZJVrxSAqLvF7CEE3DFQzhXphQLLk5E",
  "key17": "4AbqTmtuFocpZqifcKD9cWaQDRusHYj1KbPU3MJTVzFhgoKt1vADhvrPX515enY9diWm6a6sEPGuQdWBQaatjz1L",
  "key18": "JbsfNDN21C2An5oWhf28chwb6APicWZx3jYPW8MRrNw1YQpuJtSyCtsNMn2b9xLJaWBr8APfFfLqYs6DLPB9Po6",
  "key19": "2gfVy2PGwUU2dUXF1Dhr1oFtYZCFi9ktMzNn4ujkm5EUAxh8XsYAUgpby7PX3kWx42buJ9LjsefGzGtTzvfMM5CB",
  "key20": "4ncbqQY765TAX4dHfF8Z4YfYGvJcZqD3iYVhDQjmZQ2t6YTct15QschX52FPVhFZk6CukvNE3EAW1eGnEoFxYw6a",
  "key21": "4THNLK9phPwYWWDpMFnSF7Y92qNjnwRp3Ar9RJuzhvyEPx2GYsgeSEez8qRXJY4yuHAioJ4HbzWS2VFosd41eMwz",
  "key22": "4RbpT4Mu1sWaHmV1ibAcNa9ZTiW3eEi4YXHcwof37jyKXTRfNkqtwFoFpePHx656tRzsNebPbgWtqE599E8Lhjaj",
  "key23": "21x8rgxu1SdSQg13SEzcv43CqF8t2op84WbAUqY9sLiagPSCSFhG6KQh6YBJ2sC2LpY1bQ2KZruuTZLqHXFJWzso",
  "key24": "242BftSbFqer7PZ7aZrAz1mXjMVtByMxAt3ocstoYNszREmVUTL8aG6Gy7Yau4doCjgVbfn1AUt6nkgFzRaMG5eX",
  "key25": "2GJUcRTX7SMuUSWtf959NKygEKfCKxy4W3ai6sAsQkrJJtbnUrj5jQJcTkXsH8bsL1vSnv4b4m4591hu6JuG6z27",
  "key26": "4JRi3Y91NFtcRXbHiYb6wxWpXjspnTxCujFwmSvXmzon3C1955QLjGsiHo3HoCcp2GiedoEB3cnzR4ay82AgETsY",
  "key27": "4cGeY42KgqsTiBeH4VxoUesRHp159kR4ecHL6vFEJgqzKADi746ohshzURQNWZrgzNv7wq1aL4VenSqoX3a29GDj",
  "key28": "31ctsfv38A2NpGFWs9vwz9Y9B7s6sAkuzhYr9gFfKtn1JKpB4bXSN2drtoC2DeU3aiNz6rdkU5HSfKxMtq3x496Y",
  "key29": "3xQJzizX5TAJjA8cSQMKefstmbwzyeBPpEEdXopyUiNFHwreW2vwW9TyZNNvGm1yg715T5XhiFair6fFzBjrgVe8",
  "key30": "44DApM5GGiansHu7NYZmk1djr5DKtKwuXRtoZpWHrFbttEZaxFRUbQt7kmBy1mU88gUycKhe8cVDJQtP3iWfCYLY",
  "key31": "5A8FpoEod3ei5CpddPrThA2FeXTQqYndbFqUqRKBJ5WKwNCauh6pr8bbDyvK5qxVEQTTKNgE4ugha8KMhEB8werq",
  "key32": "4pXqN13ZjBdmeqtJtFCVrBsKs9nTeSUR5VCBT1E96KUgB7oZ6BNgKBoA9etmmDaeGMVqvvSAuQU6TsTPYas5z5G6",
  "key33": "5VL6EHmZeuzDTPSCMhaZKRSM3cHUg2ymHXd43rdaTCAt4RPHDwS7qZJgkLLQRLimKEHqeJ5FAM1XeBfJ6WyGrWea",
  "key34": "31TXwE5mM6cRFRZ3yE2VwTXXxisBPJpvgKUEVGKKyxXjJSzCTNWbSwAbNH39JSs8yuRm9nyJGy2KB1KCwo5VvnHX"
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
