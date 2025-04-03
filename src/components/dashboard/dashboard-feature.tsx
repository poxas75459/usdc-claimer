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
    "K4xPMxDpodNst9JL3Ge7jiRau9Ney6Q1jFmJgR7BtJGhp7b8g4KVbM5m5pguPv4nBop9Hj848biZ8JojHtnjW2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dYDTnZGWmXoQ6vAvBEcvVfeo2tuMaspD162jxViwDZnoHMZhRKQJomYxHG3MkthYfQndLKqNf777WEFzZ1MPPFL",
  "key1": "32k6h8PkCUTm6VFMtoE1nPSt3VMMbF8XTPVNQFSJMfh1qDLwW2CKHBHo4cD3UnM9QqUQN7MMBwLsCUyU1xr7bTxM",
  "key2": "2PnyMKWWnZ689B3BHe1Uw1uXj2yyvVd5LrapRrmqDM2HrKR5Em2NswUHTv1vdfAR6f84xUf316M3yajbsV6eWBHm",
  "key3": "21TS7LnpGgPqTmniKfz18NHm5wjy9utps81M4qPbUviuXCdGi4kJrzdEL1JJfwQKUzUK8jnjviUFT7wceAJ1n6E8",
  "key4": "59dmphypqSSSCAV7AmxQhUM841QvW9TdEsVdzpAeNEvwTEdX7RoHgxyQz6x83xX67tkPcukVkSe2Ai8WujnjGX7n",
  "key5": "4FNZVJrx82NDbQNgaYDhcGbTHcqQUTou28m9sNn4r6hPYwmUdjvLqwwzEPcTBTGpN4URtG3tjyK716t1J3aRKJQB",
  "key6": "4Fz86NFJ8fEsQrpji1ty3QFBdTwQq1CKC5PmE8jWyaf4Po2XBbweHc391cxFhmS35TyWoVnWJ1nP3zPU4QtJbog",
  "key7": "3c8gS989fVMhgfi1wGy4TJtH5cm1Xrhcz7hUr2WAxp37U7sYVy7N9XHQeMkQUgMnuWKeR9VRffWBY2WRx8e5vJ57",
  "key8": "qVRv2qbaCbdsNoyjehRojQnFmXQ7j7d86CvyAdGzAWZva5DxiJ1DVwxzTk7ZajD8wL3PaoP4V93jJYZeFYawdSC",
  "key9": "5M2VpwX4GPnJeSoHqLPpyTjsvp6cNdLxessAXjhzUuee1UrMPQUnPfjrgop8QDUAN4cASmTDd9dRHKCa1au2bdTX",
  "key10": "5UcbqvGzkKtd4tAaH7bw6rH1rrv4bgX2y5E9gTndzHRykU3hWiq2Rm9prBXTRqj68mtmiv6zFpHFtpUuTono8qdX",
  "key11": "639jqjHZMdxEV4c88rgBdri5qBuj4msHYkWPvws1SpYn3GKmisZFr1Wb8X8FkzqdihdvMYDTZC8EPH9Ex7tyFBXv",
  "key12": "3cRmJTEfh645duyF8PMcFHodRPpicAnSCrXmipJox3V9C3MWXF8XrHDUfWQKRhxZhf6s9noeUSJRQzKvY1RT7Lho",
  "key13": "5mDqnbc7tBnD4dDAbzDn8AMjYUF4f1iU5Zgm9MjhAa5p4B2XacoLP2WH22CqHKAJBTARWEjks2wdowAVK5HwYo5d",
  "key14": "Fbc6a9fbJiXJnJoVHCLcvNtvzoDkjeHSrSHrmo1t8PDkwTppb683SjGdv5BLCha7viVA64chqPkTJgfgxXULYe6",
  "key15": "2vAJFBKivDx96gibTQ6FfcaNSLEddd8Btp6z45VWaCWTiWEnMVK8vNWHifNvdALdknQYZMySL7wjzvoJypB7xkGn",
  "key16": "56tgyRU7ndd3FvRJJq8APTa2rwdL7FAe2bS9mVwkKhLSqtTqazv8CJZQXp784RWstZ5rwBPZJAwnbAcMQpz2p1eJ",
  "key17": "QWAMfLjmxL1LFK4LXFwX5E6qEWMZNPpyD591Cdd98179SfKvtEe2koFaH5Eho9S1JzwdDwgeuauF5AaECHTmCz8",
  "key18": "2FfZciuZqecN7fEdRchxLJ5V8K8Toxv7hRBgfrcHzEUidBQC255VBwmW7dvgsqiUGERFYZD3fn2TySfd6MZLkK6z",
  "key19": "WwaMSzVYfKCtuLnXsFr2auJ1XgvwFTNnMMXRAPaxij7NRsA85fdWEPZqDziCZDddnt6cCfCqJXC3y56NR54i5xp",
  "key20": "y5uCXXchQn9sGtH1UZPrDyRDrTKcJRfoN9MBVn8uP1gHFoz6nj6rV3Lub6roi4NEAiB4UK6cFBonDNghWPVhUg6",
  "key21": "5y4qevJVBC5UESB3Za9QRrvrNZ4yyprz4PhH2Hbk62mtiHLPmB7t1kH5AYyhnJSAKQmikpLGfWChhBY739FsU7np",
  "key22": "43RbbdjhByfhz6kjWSQHsFNB5mexSb9J6yHJ1gvvEia9WhLaXbeazryg8TZmMjS211ybqGScg8ETSSp1sRTB615M",
  "key23": "3Q3pvMSe3UoYSBePAfoBiCKzJfnV4m6iZNNnhWf1hf3M67uaRERzm6gxHftxKipQcz5cn55qeogvBLQ1wJyYSzdr",
  "key24": "43t4xYbWoKAZCmw6fzyf1NA4Qad9So3MhPt3L4rrkmzXNzb9TknpmN2BfjwsJY9stZobAJ5oSep91ZPPAaFgrLjE",
  "key25": "b9X32AoFcZZnf64cSmrMDZh5PmSrYmif5jqQaSHB6eWfRbgiHeT2ewGhx12f4xuxWvaZczM7xfuVCqxRrw94Vi5",
  "key26": "3G23jKFE22rHcRkR1mtdW3T8FSp4u5urcoikVSya2Yqb3bNcwahF6pNuyispDWgGh1HzRiRZczFZToghcp2CwEhj",
  "key27": "5DPSHgKTmc1RGfN1AWniJpKKXGwxZKCj9cYrCEeNv7Pg9H7F5ZUEvamwfN2hq5yFz3mHWopBwi6CXJhFAL6Xk4Xh",
  "key28": "VhrDcC4DKpNwLXGarmhLsDMn3p3u3KMh5PqHYz5Q5QMrVeNLVusjpB5nod5nJsoAqqksoUm81n3zPzCLvnZ7LXu",
  "key29": "4soE1mDdopy5eyNX3qH3Ggg9q6g96TEVttkPmWPhj2PniQ54oXW87aG4y5hnhSGBe2a8ComvRXk9PucjzaX6tDSa",
  "key30": "3VvWtAmeGyMXegHCoz8RtLqdcyPEgVLdPaKbZFiqSJ2A7kS9KrR2bBfumrRyRZ2P1bRzsk61zEpQsif2U3dKTgWG",
  "key31": "3RVLT7ysQprMj2LkwycHTYgK4DtikjerdBFBErQMjxRaL1fh95Cvko4Ywcq8BgvXXHArjnE7jE3uWm6ZVVfmvtez",
  "key32": "2SZcuMgnjw1UhHoQkVAUTWF3xcGtrdAuRRupZQbi5GLUBna8zC9rcQYrqAE4NfCELE5bV4W6FXxKkTaX3gDu5FxQ",
  "key33": "5LcTB8iViC3ZRxxJHM1iyFWqMErenh4g8Fa4V5FRUZHLrDvLK9RqEodp5edWfvs3H9qR26V1SpMVZJtXoKEupV5N",
  "key34": "2LsFxewbo1Jp3b7BmzHiWqb3WF5Wmxtk9cUEN6dTdWwjHLjYStG7LXHjqvuvy5176sgAbfbRBiaKTtmEHSzDW2UP",
  "key35": "5xo8FkKEa8jybsGhQcyvEQAJNFYnsYmKjt3WDQFh9PocqH6TtdKG1bHs5owV3obA1qTHPTo6LqUg8mRvxZvWJFzA",
  "key36": "5wnfouBeRTRG5rYR7AY91CMkMr1oLvsHxzZEFXSgDVJfyZuZWjsFPdUHfo7ydYo72WrUc46yK5Wyestn22hdRdDC",
  "key37": "54sNcYjY2N6ixpkRDLeoWYaAu4sNMdfn3SN49zKRdag1UhWLCidbTUthgHfAPnMeQDhAFyui5Wrfr9Q44SgfzhKE",
  "key38": "5FN2yMkLycxCzLqQSNgWCi3Tz8QxV2uHeuFLtLeruA6VXwCTXb3uMuBTujr1NUepHZgUsB5eFZBaYf9gvc3LGmvF",
  "key39": "2nPk4VFtiqCxVjStLHYKKLzkADuh2yHGRV7SNPtrtyDvjrBtvPgE4kw9WEDhngRWPAMSzCzuMhtBW1DzrH4yYSuT",
  "key40": "3CnLhntUXayR4pT29TmJXR4BcBuPKjCrhC7YQwJDXuKLtkgPtNi4bE8eAA7ikfqUQoCdUHZky5UrMEvLqWfgYvrv",
  "key41": "2foYBvdJDKU9rnfhNBgEeGMfHwycwwz93xSDDqDzaPNoSy2a8F9E44K3Sc67xfvRgGa15DDvt4MWqfQxhmWQgxDP",
  "key42": "bawoAV1f825bbspcrbZGgnNvo6H8GkAWiN5XAYoTCdxCSUh3PaPqS5uxrk7MJdXue182D6qjrTka3TZmCVCwfQR",
  "key43": "3dMRUXY5hiJe16hbMmwL7ETLndP8P1UivmnBYkJtwgjQgWQkhKPk7ym8vvhW19q3Y5Ww4LBzmyxNudkNAyTj66yD",
  "key44": "4yoBFHzESVzCv1uNAGyxnowGCgwmz38UZJz2YngepLvqRJNeKNXZGehKsjNkqGh3VSidjXKgcWk4esv4hoXQ1a6y",
  "key45": "48U8C15S9NNYNvRHhjd4Muzi4pSqRwaxviDpRFchnCvYLUK1FtSZNfBfKYM4Re35UngHgTMHpnFWd1S9jXwir2W4",
  "key46": "YnwBtWhVhm5T5APBruQPmuP1Vawj1BmSF45fzA6wLhKim1WbQcUvhMX12Qds8s41ZXXp47fuy83ct3ypKKjYJXR",
  "key47": "3A8Mx5HYviNaWxcJGB8DAk5BduV2whMzKY1d7b9MgFjnQ33HW7V4t29V6rqULXyMyrV73gYRJzZa4EDUsxCUjfAz",
  "key48": "3FzhsPfFE6EQNE5T3DeQo7xhnuprX1amdiLuxSF6oyZR4C3Tc99qYLGmsSqKrpaCbDKCKV7DF2XepBf2WchHPq4a"
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
