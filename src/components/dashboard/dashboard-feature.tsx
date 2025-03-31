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
    "2UhosLPXU9qzD3kfMc3UhFEkktyDFeFh31erZwFixJZHbQLKbEhjaC1piqYDFfJEuL5NeETWcvmASCU9XP7c2bsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37eNc8MKFsU48HfK9R7dCL654gvR3BRURPrk9SSJ3LFMX4BfC4kCLp9SEc7XKhpbrcjUC38WQhW63chww1RLih7E",
  "key1": "JjxrdVfpjCgFxeuUJjN97DitPBBXs7JdiXUz1mywvbuhYEDR3iPCQJw1WvfEFcrxaZeLBpgQJVHkFUD4CDhnBVY",
  "key2": "87ZBWwnsM9LSNjFiZoP6fntmp7afbeUbuM5CBeaMick7tMY59okSXoQk9dUQkxLri7TmtirReKXxxyoFXWCZyk4",
  "key3": "5T8cUZpi4kUXwgmVk6y9u8ZqfeqdqyTJVx6yAewHnSPNXdHVxGc3coSWq2PUpdWwA6gdA7HrARCU9ncTmqFDKTC8",
  "key4": "2JReEq3dWiC3WZEHdRuPrV4FruQCaeJMzEgmYLJfKchGWmn3wvr6Zc11L16vFqZBAnmkXYGoaCPHFF6N9jDfJpdg",
  "key5": "4YP4NdyhX3wRv7mnR5agTr2F2GwBQAcJGh5DgiVX27dUrPreNiy7fXQ2nBz3h653DFTrQ64Goaaar6HkdMFbpBF1",
  "key6": "4vPmmrhgAW47qEj97xVkozgxbSFTyCW4bS2soCQBb1P2hVYpPhx1YUoN7fPFh4XgPeu9nCWfwcBqe4ZTs9cmRe4M",
  "key7": "2xn8NxsvJZnUJsWK8J7fcEWhGWjyV8tEwu7vEtyowWpYUAsCAo8oBEWqVCMQC8zqh4h5Qnh6UKJWZkJEPpS6z8jN",
  "key8": "24Nr6iyQXL7RTKgUNp41gZiEUnfu77R9KtswQzrgmM4Kv6JpbcohjHxESnieimssFR8n66XQkAJBmbgtHKNczZyP",
  "key9": "FUSMk2CkGxjLCy41Yced3BppHUQEwJJLitGunmXZmzzqvP4wWafndgCuKqgmiVpMgjgb6vNqVoLgxaJxm1i1he5",
  "key10": "2QV7KvtW3QKpsgPJrqnijCE19kLAsAmBGecbmQTAcftRxU21xb6sWUz4kAcJCuRXSrA3rGtyRTWcbfeXhDbF3tMK",
  "key11": "2MALmY58XxtzFjmNxc3HU8n9KmP1mYJqffgcffqm1ZasDZ2T5gkjZDxR6NgvJuQEGngGpALZf2yYSE5hZChMio85",
  "key12": "53YAizDmCVboE8cv1PYNbo3o6J3kSbrLeHXu1vzYKiDKbPKL8vuJxN2WS4CjCvreqCpk31QJrZkRZ2UwjKDQDbUf",
  "key13": "4CAh1FCp8PNVHA2tukhy7WYmu5W1J4Sr5N4fkge5h9Yuht3SR4UZuU8qtpsSAMV6AmZsMVBwySdULDGwt7bY1mJa",
  "key14": "3m8KcwZ5xECRdSp46SoiTdgCiZCaewCV3DqpCdpRP2H1vXpe7FBDKNZSsd8ERt5pDk9wNLHPREq4M37ZeGSon2f7",
  "key15": "59QEU93NGUWBif73QM8rMhqweCdi7V1YujFJuPrTUGHYDAtffTAFr92n7xox6csywxoEUawNwXYe4xZNfH6uZP8J",
  "key16": "ar34YDhWrwyWAzvNrVikzA5x8tvUkvLs3ooH1PpEeu9jpJ8S56VzHMR8vV5QUKdCJMp6Grt9kwVdA3GCJUHaiCt",
  "key17": "ChHa4ikehLPwyxu5TPj8QucZih7x3VEc1wobpwQN6kjKM4F8ED9AosTHVHw8Gb8fGbqbo1gZZ5xPq9HvdjWk8sh",
  "key18": "2o38nuL5ZsDNC7ENr1kPJboCNvtxiTXGrcXt4mr3KL66wwbwBmuTbFd27JDMfz2p5SBiUFJ7LmH7fFg1a4rng3df",
  "key19": "4qyXzUf97FA5smCq66FJybfjhAebv9A8YozSfzcGg3KkUcKs6nXTwqP4mRPkfu27uBpEUunc3ebhgozKEa5oNbYE",
  "key20": "4Bzv4xNpR6Z1pHTAg2p5C91uZh6XUqmcYAgjehyYZy1FDjuQLGX5agVRvwB7J5oGJRPJUqQZ98X3ALUBGRSsoiwY",
  "key21": "2JAXftDMnkYJZwBmtGHMpVESn2nD7gbYbqztvxhjsbZSyiiFXgaXXNmQUHStMKYDNqeDAwqLrouabuLaDJ9bSXDx",
  "key22": "21szBQWGS68RYLtqYs1bBx64L3AqCxb3gCJgv6jcmrPYXFPywe12ufq63LqqNoUxeScF38iQiHtWjfmUHHtSoFn3",
  "key23": "3M3h94rNtQmVbfcyurym4XWENy8JJq1YrztNFVbWcuUxiCU7JRwdL61VASkKKZqCXiGrmZP93qb5cpVbGrPT3x1v",
  "key24": "1bMgcNZbq8ZJmZNX9pK7JeYXZvffJTDnenMLN3TMRasX2NgrzhbdLoyvgTyGTu9HGQpiSgYB1QnjUobWjQgnjJD",
  "key25": "3CAcFkgKBHmAnvZy5iGeCxUFVy4W8nZBhF23kSdeRRjEXZLcVTrAjfuJkFvMugLdntsMxbBy7uemrQGJJohkqiAb",
  "key26": "4w1LaGapmjEVAsJacbn2BzJY5zMuwGy7NzN1Hr5XEjAuRtZxFXwxTh5ekJ3bGHWSuqr4j7ezc5FX57Q9HfXfThcR",
  "key27": "UHZooWN4P1UbXYdzQp85YWAfUKMmXnp47CZPQNK11RVwfPboc7GRnhG5AVbqMQjQo5yMW2JoH3imNdPaUyBYrLe",
  "key28": "ir8bxW3wvHjK43C2UvvxHHegGrwXsyGyM7KtfFzaoWFogWmYJ5ejxPMohJF7LNzwU5kPe1PghBMXiTY7n8481Nr",
  "key29": "4jDJKDV6wmYtw1i2ZhBE9W2jWFnkmsXMRx7yk3yZBRYKj3zeGCPkGPMFSD5smP7okkCoFpk3Nf3AQ75HuKBcj93e",
  "key30": "3Buq72FNtbRETvqkLQyMXzAMDS9TmaAqSKKuQVmWUphQsqHQBGsurKSQ88EStz41AfEQNJSefUP2Xy98Eu6zEMWq"
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
