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
    "3ivKgPePCCfWJR8BHGkNewvaGNbAtG3X5feh2Tyh8ZiD4797YFKecNPNs2ArKjWigDSmSdN7G53WDx9rjtthdTcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Mf3Hs9qqb57vEoUCHX419gt3emub11yqpGBpYF91XhQQ7D7zhsGpXnh9Ng32W4cuwzBN3m1f9cZqZoyRYZGoCx",
  "key1": "3rpUwKoGaaWjoGT8dDi6HeBqpnBDGFCbbkeVgbUyxgfSw8RxKanzxg3foPSNkweGeK6tVvtVSWQWcTwHLo9wjXJn",
  "key2": "naaM2a23xDRuYpSnFTSizJtLVnArjg2RNusuFapHBTQpryAEZ6ygkY43hyFULb9k7W171UkQDHRqG78oBEfXBXG",
  "key3": "2HBfZNYctX6p74ZgXvrVdXbXqe2vA7bnkqjy8MMXss1whKWCxenDcgYtc7QBDPo7ZGvgXXYpwpbdGVUuLpahJ98K",
  "key4": "4T47y5KyAzzZUHVesmWhqaQW9PZtN5TTqpxKwsixD7RVXZK9wj7N1ywjc9NbV2tbyBYDTbGkvgdtAE2WQgTD5yUL",
  "key5": "4ppw2bFkH4bFCoCho9eJfnjVytDonceQBhHt4AfRjxd3yYy8X4UbYyPP1hyg2r1ZY7EpZ3xHeyLEFaQSJWLVZrQ8",
  "key6": "5h5q1qo7BZ8pYptQxC6D524FYsmPe1GTVv7YM2VxNoc5Mw3QoyzPU374Nk5MDsx1bxzJg4cSLiBBDbmosUqxF374",
  "key7": "2dk4b3kTxCqv12dFfy7gB6cCz4TsCZ7B3bqiMM3tr4jsmLz4PxsyxxHMzM2ef5gqMxEAFXuxLCuMGF7U21eswfZt",
  "key8": "4nJSJ2wJqrdUNrhsXAM6GVrb9ehFjcoboPUn1eHHAXwRWfH7h6hFLwzdNsbfa1xnLSTnsYQkE5gDapvWbKYRFsHb",
  "key9": "26ihaYcPzEAL4ef1oiacTpCREwHjuoRxVnT3XktcdtB95b2PmbLJwZ4UnGVLQNdbgtR6NNEyn6n2AufrmuHHJWvr",
  "key10": "8curzxsEUJ16wHq8nrdUeAWrQZsrSNPXMn9smKb7M96HHYX37udLcoTQkkJyH2RmkEkhkt98TkDcP9A3eW9RsFd",
  "key11": "3xAy7RfhR267sDsvh195AmGBJL2bL2bRgD4PXdDQKhAwX7rjJ865RZn6yyZgX3j3P4wLnk5JtoQAzRKdLq1k3PRP",
  "key12": "3yW3KZiVgsGnvTo1a4V3GySv6emv4TX4ApM8aanjVQqAoB96AKTS74r5WLeZbhT1T9d6U63xW5ttRPS4VTsbRwov",
  "key13": "2HGeFdetwiQD5sB9NRzBvWs4UYsFgSZjUYsYWovwGr8HaPHXoQUDRftr3stUthSomEzMYVNj34e7mM4RgFokkCKU",
  "key14": "5gAeZYsx9G2FEX5ZhBPxC8v45nYnhkW4zhGHMMXWZWkhF23s8vo3Fq8EzU2uabEeyqkZf9yWchfLvXVDFF8UbP4d",
  "key15": "4vA4YCRjgGSijcSjaZpPWHPjcGjAzcM5rsyia8hiaar7tXGPVXaHKYAsxFfqtdUfxxaRhyQXUNi82dXtoj3LNEaT",
  "key16": "63HTjuv5zeT63gCKpViSS4e25HL6zxoFCXubVTwNLhYgsBBzARd6mj7RLxyCykbK8roh1pApH65Uu3HqPDvrtHkW",
  "key17": "i57Q7QQoLo2PpM6U5NRQCcYDdmpiCwiiqAY5eihEgzmdfCQ24cohCyNDdfrZ7PZAJjb4Yuzc5xjNtGHJXjw7rGj",
  "key18": "55N4LfakPp3yq5y27KGH6djhPoupaUZK6XNYKUjfV9ALmUX4jrGwRtdzgwrGdBzemZWUJPfUcoyxs3bY6JJtsZrp",
  "key19": "3D4ZWqZrRbSDkv79HLvsdJX2LQatbxDQPVknJaxtWXNoYTbZdmqks7y2ktPkJKpUnLzZxpQjs69Lnkxi9A7xk4jP",
  "key20": "42ouF1UW5WVbZDxcTnZCc91LqvRCGsjw3aWDD78o8U2zgQutFkQvDbkzQRFrGMYv3GCyHkaDBMTAWuXuoEoPkTWy",
  "key21": "2NmJkCXNt952Su92ZXEPe21kf4pvbf7DBHEhe9bdbT9r3mgv6suvZCcFr4afZah9qjrpS3o4SsfDZUpQSWhm2XRA",
  "key22": "5q19nyq8ctmWJZjxuicbaNnxr81SK77yFyiGMTa2LMHh3nrgM23bwVH3mgsrKo4ZzE5Gy7yxtVsgFBo4URqtFdY7",
  "key23": "zQMKQDX7P1Ga6CWFiYzJCJL5Q6ZZuyyWFxFmHjbRF9z4uLttHrJnkfhghG1SNhoM4a7iviYAtFq2n4BSxXbFRHK",
  "key24": "5HUfD2EnWw7jWwqGMEVHkaxxGvVJ7Q4qFd492F7iMk2Jq4ineckJSf5BnkGH9twu4Vwjx8Sm69Z7Y9BGr4hZJo3K",
  "key25": "5r65TvPU2oKUo6JPe5KM6gGBivQhcf5cHg2z3HUWAWyJt7w8zyzf7ZYtH9aBubpyZsVwxnuRQbAzSpa4S8LyMZ2x",
  "key26": "5YYT7JyWpz4KGMysTk9Kf8wKb8hQ3SLzfhJXr2vfhBcPtTvDs9azHUPfv6ZGMRTaS7PdR2F2JL9fwx4UbCRwZoEQ",
  "key27": "2NAVuhkhW7z3fybEFmW5j1hbhZMSqi1EoJTttCC7rPg8zKAiCPVcrKRtT2GimKhh7eMJo6XjwLS5GoFrKYcfuGGM",
  "key28": "4XYVu1HbVBMaoPV4QRBSBM2njazZkovqShVpVNYxZdNd6ftSXJixjoW4k3HZaMriHCKZnke8EVS15JECB8faU2S",
  "key29": "5bfVUnHYg8y3UGLfv6Ex4G4UBHRHiwNKqxWBeM7mbz6BsX7AddMVvM49iREFPZKB4xaF1bMZzmC6BzJRhWPZ1L5M",
  "key30": "cQ1GQ5kjLaoLSCxKxnxnghuWwLGFxv5YqCbPUef9SS4NWYrSWk4v6RjGWEYUAFqdhLhQviVMPNC2zuH8mTQ2tKE",
  "key31": "3nkCpER6pA2VMy67VKruU5K5m55x7hRFNp3ELb8hXgsZjmsYPHmy4qrAYPuqrKkCG3qbV64hZ8EZHgw1e1yaCRp",
  "key32": "3izA7JohJxykZ4pJ4BLJimqQyu39xwQ8Giz3WtqSFZHjoEcC6RSjHCYWpDsqoHQg4CTxf56KFkCGkjcX4MJx7U66",
  "key33": "RfrUsQpmdCVa9XwLTnUvgHxHTKXR9L9NiKyQuz7YGzsAstbqypqz1SwR9Wo9svcVsPtQiCQoikz79FxSABBTiXi",
  "key34": "3a5gWZa6uW67Rm9LwNpJK387JGT1HxJHgLtSxEgvcVUdMBAvvAvBtnzSH2tHUxRQbFJhQNDtAh4xQFg67EJGUtdj",
  "key35": "49PinBbQTs7xFjTPVz4FZ61WPEQUXPks4Zj7TWgHJWV9bEyPnmfontRoGihGhYHF39Ceb2XjYaZt6eiEZJDbpTgA",
  "key36": "ECXxjSiZ9D2vP74y5RNZvj711vYGtbAxGAN6Lq6rXk2Dyh7AinY3fjcP5mLP2LZtABA8kPDUZ78iPJRb1EZT6X7",
  "key37": "4MNrrvDS2Atk75oyrThhpGryke7gRDR9uuMxqApBpJsRj33DXr3ppSrAPx2b8LPg9yjXnGpmq1bkB6hWBFYEb1M5",
  "key38": "55T6XzStKAjCZnJM4UrVNEviFWDRG54zo8fdvirbEsPPBM7sX2oGZTvBvMKR2TDW1zD6JWnsfEXXc3Ygbb6BZdXe",
  "key39": "43P6vGPbn8u3gVjrdAxZC5WAtuFTZg5dG5v5wFZRVhXpSeeo2dDoVQpfeCc3Zghsy4Rd9tuBu8WiAn9SkCXHLZgA",
  "key40": "5MZh7T2ZBBUVbGopLV53jjAPJnMexSPgxykYi3mAKuHvk5Rwy7jpK2vUFy4XXFVCkFzhUg26nB32PyVrMBAdbHaG",
  "key41": "5cTNFMowfmYFmnAUwjt4JJVw9ZhN5XJzcXbJuy9GBc5wrato9o4JzAXfV9LcuZqZAZaqo6NLwcvYZpxe7rfE1bVe",
  "key42": "4ajgxp1yrRxKJHh2tdcK6VcWywSsHTQ5rUS79y6PiUQws6ZGN68ptNQipeYQR5DT62qx2zec1pptDrWJikutU4Qq",
  "key43": "5mYGG1zyDtbJowsA6PhpnFVDRN47QMeYdwV8FNiafgWjSAmueFypn3ASQPVfwSqrJZV4ZjykPEpRf3QyzUb7VzeG",
  "key44": "ZVB3h7VjXCBbxPes1LD99gZWZUVR82RQuLpMvTQjTJbrDkU5LfZX9uMiHZQJqU5GwJtcj2rh6dRx4ntRDBTtSFC",
  "key45": "2fwwiGvTCDUcoQ1mbbXYp1nCoi9BSNK15PGzTc9Vax6FENgk1329eGv7vSQRBdosxtdb6zXafqnsbMR517kAnctA",
  "key46": "aR8M7GDEBw8ycaxTuSiKktFf32adA8eLahYVAwfQrdopM9BffinnKCNg1cnBMkRuVFvArMGQ46Mcno2oHANBGza",
  "key47": "4ZVyThyniBZdR46MfwxrbfufJa5nrahenAL1W1JuQ27MJ3QYatd2c5rJW4DtRVMhpHu789VRKUkRYtqABPNrmLGX",
  "key48": "9BjDwv8pKuYk6qhWDzmZcdLgnYQ8uN916DQfEP6Xk7XvUoFWidK2bLNY9LEtJjj8Q7sCRZv62shnndrzgQmECZG"
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
