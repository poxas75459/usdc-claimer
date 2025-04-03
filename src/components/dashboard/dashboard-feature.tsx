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
    "HWcquGwpD8m1h1Ap6kr7qshv7tx7egzM2k4xEDJrPu4schSH2v8A6JBjTbPGEj776ykuGkZdSSsLn3shs4koUeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C7qNCKuj1WZTrhfmiKpDqNBAE63q2ud28NY8hsm6bWL3w8jfE6CYYkNaLF35tfJoeDSSHsF9x7U4XCoNA1pVfS3",
  "key1": "XuScYNr3UF1zMWGuRfJewJCKrfBJ317WUGn6uLYkYrQkjtuQVfh5fE1R1dE4Ez9FGr8c1BjyxMATwJURe1WASJm",
  "key2": "2uyrtyp4oX3CkcV6iB4uqwuue8KX2ooVUmkPV55T3STEeoTYbv1UWbUjzEpbyS2ykTadZmqtHcBbR7bk2hBvsjkK",
  "key3": "2W8Yk2QqcKSk9CatPSrqYGhGRniA9wdU6f9FygyiRwQoj3D3UhDZGZRreSXdyvimrZ8sSYovQrMFHJjuFkRUCYu1",
  "key4": "4MRfkCRytCDQPfe8HvQjRC3X6HyMENcuVt6LP4SQRw3Zd2d1u3tQMWiMuj41Aqg7rVtzJaSH9meftnojauFZXRFA",
  "key5": "4Zp9TPF14EXhpoJTqctgpncCmuZJJXsNoHbvEf5RB2azdJamir5UtDe4dmPd3qhZVFjGziBCfbNy6L5m6p1UbTVq",
  "key6": "587QmMPN7yRJTRio5LEFgmv9dfM7283yrJ3dYzECmKteAmFMShEKNTAU4tKmncfdRq2BJW6gveMMgX6v9savt6Pb",
  "key7": "4GLrC2ziNqGZ4y9uVv6TSYyWspitp6qRs51bgwJRpEgygBmMBy1SyTVJr7otQoXW8S6286SYV1oZumEHmsFt5hFR",
  "key8": "2kTyzMP7n1xJkytTGNsA1bhnQHBEPZjDeCHL73xTvpCQnmTxvf4cGDiU6JcVuWhP1Hp9ycrH5LMUPLyg95Ef6Gcf",
  "key9": "38kpLcQGcvvtvs63mDwCqvuN1p4DKQDWLd6DuUjgLyGJD64yv3Rmm9Lmxtb5M1LGHjnLffiT9gtrsZWG4X7WNNZR",
  "key10": "5zS6VJkbDfSFP94EriGjrhzpQWfGPeFLtdrQufBcqUw6QBjx5GWghqoj8JrFYoFnW7LW7XHirpsnRXt2fwbMEu7Z",
  "key11": "41vxy13AdGocZ8SjQgDTXGnCk7X2Ku1QfFMuytZnPPjuvdsNsJ17dUjJDaksFmoYHeUnopyrQeLoK2RN5Pe4jKXu",
  "key12": "4aPn7ZAgy3kZPxtimEF3f5mS52p9NQiKUYfXjQERkQmekkBr1EeaQz4hX6ThwYs9ELr2EWQ7DJLsSZc4uxBQVLwa",
  "key13": "4XePxTkxh4Wtjf4nuHKRFnLsduNEzVmcBxcLxryM9rtEWMBBo55BNhNoAG2tUFohWaMQ4dDZ1muBvpb6T5YUmvDz",
  "key14": "G7B3o8QY6nvUNV5PzSaCB51EWwM55eR8HEezjthiTPRvjngmDCKbdryHVEZKeWCeBGiK4MTkFKZw6ymvNFPaNtG",
  "key15": "5aPqq3sKpKXSdceE8U2wKNsp4ot3MTSPAoiPmQgVvqFSDtAtiQG6CZKppVtvfKYFknjgjkQcyBLWEHGyTxXKeVgt",
  "key16": "27hQ8a818MyKS8D7zoh9kHVPpTy9DhSespHkG4Dnyud4LiPWqpQPCEgPk68AK1rnJPGHPSZXN913ci3gcsi1tan5",
  "key17": "3wxpS2mb3mxq9HSjRuCfUHZQFbkEuANULEuJkgATPCeLpUWJLEMh5NAq2Xm1A6XQ2QCyx5k8wMqL5tx6yLHnf3ee",
  "key18": "4pcskpWfCZc8fZypcdHvn81KLobqsdxGFGfJuHe57xkKPUct8mrMgfS6LotpdHpfWYdYXUcrFnRUxEYHVHnRC1PU",
  "key19": "eKxj9h5msrHneqarrpFVA7RriBSAWZmC3d2fKQjPs97a9az1suSdvKAnkKtxFYVyv2d9tcxDvYa5vodQNT8XKEm",
  "key20": "5wBZptLw54yS7DdhDfLwE87Ni15r4SmaoxbXyKNkgQB7utjGvxT6conaErkES6S78tPfEGCfU2kf2WQfSPbBZswk",
  "key21": "3CuyZ1tjTRFsKQHwshtPp5CPN3xZTG8HNw63PxbswJ87xNau7TFTeYarxncMnWaPwG6zJ62kMM4MNRwFr2GTzEJF",
  "key22": "4F4W4tGRWQEVKGotPqb9fchX1AqU2mj1n4b2j9AhzN1Sdcu389ts8o3HVp68bn3FL77awty6thVZscfchu5BDPrn",
  "key23": "7FooUcaWGjUfqNriChwJCPFTEw4SgytsGpx1VXrvd32JVBg3qoVtsNNy5zzkUQjimq1Hzh3M1ccPwzRfN472gaZ",
  "key24": "3VqsC23rQ3W7A7Fibq4T7sJ6z8q1r2Efxtxkgje1kXD8fSWdxeBGTjsdoZbSLG43DSH43YASF5JwN9bBr1zQEHKY",
  "key25": "3bUuHV3WJKWDm3xUo7ibgAEhGF48naML7EnXDbAjnmhbNtSex3u4VGGmiH6NLjS4rgabH57h4oBH3rQ2abkWVxXp",
  "key26": "4JQTDKW8LDNBqtY6KuXu1viGMSAyA87qco9yyvZhYTXDJUGPJhLKYv1rNWkVLS8rvLDHfNPhvyv8Ge7T432iv6rW",
  "key27": "3ZC59hPx9RwFCVV8stCer88ZzR9bdMLGkgA1Ur76fc2iwjvQHga7EYqgSKsDTY2XBiWj2cEmLdeK4bKcrnE7mdGN",
  "key28": "4WCCW5JbKXrxmZJsqFWTbAzLqWMzTyjtz3PeSZk4NtqqYUy9wyk9HCNisgrjLWzyHSnZNyaj2mgonXCHxprRoCTU",
  "key29": "3dgKfGpYVS15FNM2qA6dCv8V8hu6jsw9JV2rGCDjYJEGCwXKMLkaomxsPKpZFK4G4TLSz5Q4mkaEQPWCP6d3UE5N",
  "key30": "2NNHr6u7hwHkJKwZaT7aFFXga12z3RPSdJayXkiFxYuMNrsTdZkMd4WXGxZd3Zjv4dGoiLymrHiTEs9dWocEth71",
  "key31": "54crt2U29TCrJEPw9kfZJKcB273RyT6CbXLMtY7bD2gk9oKuMAgPQB3piQc3XSZoZWpTBEWnGq8BgA3MGmB6NxmL",
  "key32": "5Wsh1sKjMDojHi47BqXDeGppwFpomgMe5sAvSGytnJ5ZFMKrbLEmnzdXJLHKjH8jqbUJTcFGzWd4W97M6xAGVMgh",
  "key33": "TjEPKcERCvfn8oF8J8QcEcf1T8uqwXeBS8j6h8JNLnvreKS8UTQBjAZi4XUcGDuDrpG7MK5zK49p9DL3QRj6eD9",
  "key34": "4k6LQrFhjBVm5qREwB6uPasaa2mKgDgkRz4L8AhpDerPXEqJPBr8fAvU3RzeqCjFE9TVmCxf7mBSDHHc6t1YVkac",
  "key35": "2KVuosQwQwwScy8kE1z8zp8dwpc9KqBQQ2JYHgpdZxV388DQebLpveipBjhXhnMmj2Fnf9FAfTvX2Ps5rwKrK9Pm",
  "key36": "3G2dEqoeiVSAAXFRwjicV9tqJ4LDJiMe1K4Y2npHpGbTxdmvbn3rzjZ8pEaHvG6tnC5EXp9TEFoZfgctjc5kMNsG",
  "key37": "3d2EARtMXyaEAowzAwd3wJjmVC6rt5AaaqUw1vZ3Ps8qoX7iPzmMAcaE26cfM6NNVZrk9PPsh8ftSWFZ9kbKnF3X",
  "key38": "5hAVaXSA3KJ76WyqsY1v6byFkKf65aU5SCwovRmVCx2RqPQ7VmEHdXNZ94FnANFV73yp9u581FeycDHy9nuQq8LN",
  "key39": "2smRFG21mZpbfTTAwotFjwPn8e7WZGL6W6J1STVoZyU3n7TAz92PCiW5vh2BTFMhvySfNuxoY2g6DVZcBcYEZbLP",
  "key40": "CzagdULgR3cRTrume2Jw9mbuzK19FPGpM5jYQgnK6Au9CwciA436HWVPJPWAX4vomgSncbC9iSz2JrtANLxTATr",
  "key41": "25h3DvbQN9GD8smfm1QqBDAqraQ8mX9yi9Rs45Mfb3xB52t4TioDXnWvuP9asTB227Hn3Xh6bApXMrxUXZG7MbZC",
  "key42": "3vPDMFnaMwq1BmhxG58NRbVV9UmgxaJXG2YfiCXB3YyfZBmbfmqBQMoSwUrbRPzdkxmqUyGv5BPyY8XcM2JNnq33",
  "key43": "5zqBiXN5FC1ZRanAqsdfQ4NNXijRG3pGXXPfALsBes6YV8JpG2XGb5reHS8tcyiJ9RszU4WVfCvHrgwMNqK2UwWY"
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
