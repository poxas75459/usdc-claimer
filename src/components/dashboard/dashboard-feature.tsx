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
    "2KhopFZ8i5rSQ7f16CRiXK2MGfQBPTMqFCJP91t4Jwyj5ik1BH8Nb4B8WkSdSCWptRfhT6mQpd6kZZGYn4ivXNxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVJHGxbuMinbJ9F7x5RjuPtRn55YbjqmeMVg8uP9YH1x4cBUUMZ1ow7xgnpR2fDnBafH82VgxvKxq45bgffEVG9",
  "key1": "AC3bsRPUGdbgDnpJECm4uC1wX2n17EkS1n7JtqrFxB8AuFMmJTkmNBBifGtjqgsCLCzoGEsyJZQbyQsPG3kRUe2",
  "key2": "38ourpDxxWSTHLRJiWFjimS1SEqg3ZNqpg8mW45sM8PD9BpxENQigXbRdoLwvRsZLsdZrNYf2YUapR5z1skhBvcz",
  "key3": "CPXTCg8LzWPtGuuk1GzWy7RfmhpCoC5femPi6AJQYAHxNs37ef8cqSEAhQwS9urQtXhZzer5pwNy6vSCbiwvZv3",
  "key4": "2thsG4zDiKbHVEvWYRzsMc4kxjgzXS4F2hjbJyGnXLwwpd2oL731PDeM231RnG58rtVvkg1L3EmBqoHUqFzBXruz",
  "key5": "4qgz7jD1PoahWevda2kf8TqMY5B3sXdhRUmJ2wAiMb4gh54Sr4zu37Y2keRLPi2e8Lcg665H87gTDkrqiG5QqnoW",
  "key6": "3V6JocxyhZXorX5p6Rd4E1AzjZ57dpeVq9x6BgtQyBFxcYMYp9MNpw9wuSKUGBazPHYnnfi9aeH85DhXq87XGobu",
  "key7": "4RNjV9PmsebDoYrXuUo3LZbD83oKbaMsYRY28DY2hKa8ACxLADKqrF5DGzoy7k5JVQ4XSCyq3PBiyMNxRTJZs5RZ",
  "key8": "54DsGdytXfq3cHRoxvCQNayJQJntAukBD6hKmsb94EKoQ9Av75QcJnpYSaGMPi6ECiUCFcPgb1PbiefPxjj1WHKR",
  "key9": "2aXt7qNVhWkkBpASja3EmqmY3QMcf2wcqxHSrcMDDbdvDQhVWEkEktMomDGbBM58jTVJ6ah5hsSC8DvzyxQuL521",
  "key10": "2DkbuHZSWv62r4hTD3EqpLeuqMAbx6hAYksevRMx1B1y9pKn3kJuFEYnxC6a3E6cuaw4xBwHk6KBGSAKMUQPD7aN",
  "key11": "261tJxsQE2HLYE8VUiVW5raP2vW3iyczUMBifpscYA6F9JpEiMVP7eG14Z83BvhygiwjjHdZSp2pMtsMYUGFGxV4",
  "key12": "5bjbouJTKAGeG6cZozSqkqcw4b59PzJGbXg5D9ZbhhCN4PASTJLhp1Sj7h1AcSEmBdbqRUt5Ug4ZwJGvpbDDrCF5",
  "key13": "4x3ewAbRig9A9pLFPYQ3xmeKtyyHKYTUrojyZaJin8pqhWZ9hm4xDyXBJWs2rY8V1VjFv6sdwyN2C8Efd3grT7mH",
  "key14": "5j2iatFVSqSUCJFbMe7qErHFG8QpumQvLZr4CTXgKgnRnRYJChnjAY59jUcVowMmzhR1mGjGq8YpZpQjWVxwr9Ja",
  "key15": "4RBXLJ25LrYL65m5BXQ4fPooZFJnGaj4tXGi9KgHfCttcZKDZcGJJ7Z7QBWXwEM6cWsZ2sqSTZNBpirFygLVMTxC",
  "key16": "3Px187Mieg8tgEDnZj8evsN87HhwLyQt7uYmJnHFm3QtXx3DeNxKTw1pDFrV8RErfsATXXpBZv4p95z6fjz8zme3",
  "key17": "TPhTcypGAqMBQZqGqzyfbpP7zNQA1aCBh3BMud4NdKoHw97DkoHSRG9oGVezLPzHMg7bRzBt7tmhYtNjAGiwtmr",
  "key18": "441uELcFXf6JnbLeh6VNc3DeEvMCKAA6dX4ndvUm2tFbgm8UaTK2y5wLhLrQPEGWRKfBHb6i61xVmbsRz9caxMeV",
  "key19": "5xEgFW265LCyBf9z3L7MGYdiq2ULGpdDhrWA1nK1jyQ6Fg8KWhxvE8Mor8fq2wrUsedXWBd1WumyeTTBHHPTFMVh",
  "key20": "54BR9YbqnzhmGNt196A97TMAmdB7XcqPCxd7v5UHFgXZJWLmSaushyVfWbzjP4qACCfw6qdE3kH23TYP9Xw8PV6m",
  "key21": "51HaSR66wuXD9jw3b1DmrEbVFS5MDpwduMJ6mwBFBUcvqexRhygpAx5mF9SneYThEmwS7gHTCMaZko5f5dK8bRaq",
  "key22": "Gdokvz3pevgoDq6LYhQWmn6wnoVTVqhUcLCrnaKzqDAH7DtUHash82L5vo9jgSFzvMPvKCBYGrxng3rqw1NTVvJ",
  "key23": "2oQ335r6JbCBkayH7PDHYETDhcqQEE9x4uZ33FDw3rbxpVJRc7JcJagsrB3GccRpMTYeNtXrE3KCK7UiUkqHWReA",
  "key24": "a8T5bBm42kuKxyvxVU2zL7ogsjBF7862ag96sTvjwTAp8MDzikT9Ztigt4DnzuRz33qtLaXJTx9afrWmeeVxrtU",
  "key25": "2ZmGfzhfbMndob8QxHyVyzkuZpkys3X8XEpscFMBa6iDZYZgZzrcmsPS7iVKWHHeNmN8PAtao4TCfCHG7Q8FTpja",
  "key26": "3iNGMygbV8GB4TFu7GwGMhb3h9eicUE1mh2KZsZpScorv8iVXpsTKpEbVdpBF9fsFiWoXYdYDkczg1urCNmtVHGP",
  "key27": "3j65V1s9g7TFkofwnkLKy4fPjqu1MMevTU1UsccEKmJToXeDZspEAoBijzZGRFFjQwVNR261DR4yfKGbCP2iQd8k",
  "key28": "3pxVM5ccvxpAPqxy4jzTC8Fwk4fiacjoMTrcGUnW4oBcpESh2mGnA9ZYnEgaZbK5j1QmBd3tyNGr4fLocyrDt4S1",
  "key29": "2H3jpx1HWRCfoPnDGFSJUgSKFzT27YddEhsN2v4EubPdNNcjCTFbb3Z7T6WCUdt1JcZMnQ1tTe4pGLn2QN5nvLdt",
  "key30": "2L8HahvchSvViR9x4bvM1RybSWQmGRWeKTn7BJgaBmBsBF3gWzz1tkVgu5ZDCU8YHwfrYpmyRpkMrWiek5mg646a",
  "key31": "BeWvHid9Efm3Uf2TbH4k2XCcziLjHaF6LxxENV6uame1vsjcJkJHQFXXz8o7iFu5nBWN6MLyJbxJnGoWeWaE6Ew",
  "key32": "5zG9HTZQ6aLhjT6AGssNc6AJRLhBma8J6RmyM3RgFBamXCxbnHuNQSn9a56TCnrA5ijpPMtBLhZvewaUbUKQjUev",
  "key33": "3TyqBhSUDdqJP4RxM9XFvxUkX5f8woCgB7F63ZtXrfUUmN3EACvzdBn5dmgJpjSgeRD6iX6sj7zZeMEBnSkstzMp",
  "key34": "3hmq3xC39gM5zzZYUsh3ZowLpNJiKnLjNT217YCLTDrVaWVbfxTGRb3TnCUYNEs2UAhdgH5Dm43xHrwDn95NFt1Q",
  "key35": "5NR35BrnMf8TmVcKWnyj64ELTpNPprB71KibECwxgF3jb9NsPbCCbF9CCyZM1u2Xo4bGQEPfNfWkcSyzxZzmjopV",
  "key36": "29F2zwEM4PgG3yC1LBgYf6V3SWQv2qDKvAErN2Ab4JFeSuQUxsKZqvUjbi8yATd72Kn2SksQuPGTwn9NKPUPeQcY",
  "key37": "h7Hkz6ccQJF5LALyd8FpfL6YqpyLZAB9H9TLaCZzQCghBVwvN2jAWYZ4fLE915Rrsw5NfWose4YxzphyZe8sR9c",
  "key38": "ARDY8qQvzqGJDajb6o5w3vFFffiY3txhUQadocJXVEXLKbUnqt1dZ2cdEi2poE3RNaZ66zgYGBNfUgHAw8YYiBp",
  "key39": "2VVhV35WR8SUCfs2cNs9poQHJx2xeza8MmJ6eH5qAzSmNwLEK5oWLPzF67Q8wXoyeKBPcAwszwxorHDAheLomhgw",
  "key40": "58B6SMJa9XKxcT9nPMpi1tZybFppi1tQGx8kBaFd7brzri2Kjgz33wnW4CpJsY4EQrLUQfTqAsh9ivSJ1jdjkDA2"
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
