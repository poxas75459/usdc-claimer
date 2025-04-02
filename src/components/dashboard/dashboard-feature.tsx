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
    "3GpWJDNyL52WArboqKvdtqSNd3F9iGXo2o83dXrzkudAvS2uWRVRiT7mhtDXGsnpg5UZaDsEUg8jNCmUd8RMLGid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uciuq5J4va2ijGy5ReeRXownFWqqQosEPwHfhN5Wege8vWtbDEcReYF9rrc3dkh7is1koBusdKtvFDeFwSNuwHY",
  "key1": "J1mdCKfrM8HssWK4GcwZB5RDR52mtJ9oYWHKfhe3jfAKBa4kz5ikYGcvMTxaDxaEXqgReywwSaYRtvBmurLpWFT",
  "key2": "2pAQWh1yHHjjZPPsVNM5gej7WjSeZVT1W2Se6rjwSs2uy1x8TMt9SikBG6F7vPtWs1iCK2x1rpKDGN6cZa9nsYzw",
  "key3": "2HRgyVjgcK35HBjBhbTZLsda4vQmGHxdaXzHAFaCHC51U6dSWU1gJyqhj7MjB9e7Xk7sPRLbwKdc5DgMCUNJW2u6",
  "key4": "5YaNAwv6y7Jy366d94MsFZJjvNibdr2nGitevjVE5SDzfmnAQSEMNUub8eNUKQyCpmaifwP8W3rP2C1AUwWFMYki",
  "key5": "4hbgFGj2VVA4Ax7uQXPwJEGizRdvujrzs9TkxB8nj99fvBNwxzkt2sukY13L4kVJJnpv5JnMrM9wE5fre3g2gRpU",
  "key6": "33s3297Zj5zGDLRfEQmX2BFRVgUwQPfQAEH2Et2eVN6bp3BkZx6eJWbUo4cU7JvQKf9Uyw6W6CeD1xhnPQAoYeTu",
  "key7": "53xxFdVZHtYzVCFh4e2JkSJs8Exo34yr8XmrJ123wSkKEhqjUFt479AqQANgD33wQyqVMdtRjtHMswKkr6J4kaHJ",
  "key8": "5QSP4royq8rCfABpBvrthcPYK9AVZJMcSvK4wF8bkxwDHwGHT671uGxw4nfqfH8hCdFgMf7hJSe1d3s7H5tRKd2y",
  "key9": "53yQgR4iD7f3na3Tz8PYDYVtD94fJrwZRoZb9d3AfBjx97HwqTnhR9fYRp9dA7dLCx6qbcgbTGqppBLM8pq3yhAu",
  "key10": "3GtZRZTpCSf3nxoxFn5o7ktkqB8qZhPxHtXzBAftHm1cA2Zw896MsS6SNo7pYtt9ixAFEPLR15dEGZMcLiXNe5k8",
  "key11": "2AfGHeRqDjD7eueSTs3e2ZSbCvyyVh1JXbKrJX8vpEfuezYT8thL5LXyqNKwWNgzNMSrurN2GySV7HXLFCm25Lyc",
  "key12": "2kMtYZX4s7abpWfUpvyy6T4hb3Sh8f6vDS2ZVixfrmuybyMjoESVAdzUJMM7X5AUTXYK2pHMLgg3qEep9gbNiWXD",
  "key13": "cLrLgbtReAwvVWzVMyT51M5WJgiN26hg2868fpCD2Nrs7ZbsDkpvxAamcsppQ8HTWeCZN3tcKQT7Y2Pv7Wp14E3",
  "key14": "3GTk1Cu7ou6YTLbAY4LsbXRKsWr2TmzCPw2YhYGTNePWfioLTwU3pQabpgYJQ21iYcgsPxA7w3SuZWHQ49QBTQMg",
  "key15": "3muuTn3Ys7upXawWuoAPJA7XuPRtHmwA8RnCThA6YFJj1k6C6629Q81iKn2JYBzHyrqq7Re1G74GbhAQgfJyHZt6",
  "key16": "3GtG6E6wgcwR3ppBHHkkMuWefSQB7GoFRkZS2wLCwbrozW65w3ArcH73DmMqYg1DCEF8cHtzC3uE15w67qSRuyuM",
  "key17": "5Hdez6humw3iTcd2v2fLmy7RurAXqV61yGUfSdfuZYi2KfMWpsTnt4vTFgxW6k4D1NHkxVtnAtBvehGmh2k9sHP1",
  "key18": "3rT5CFbujw9yfNhhU4g9jmUhDFD7azAW8uozAjY8PX7xg1f2nYBrD3bLXQLpCjTFuMJ2o5Htu22ZvihUiMMXtWUo",
  "key19": "5X5KCMwTNPpGcpnesbWhaV3siGJJH2Etq6EpmaE5AoDCnvdBYNaHiEzoEuMHko8KePG3JQdc8WvZZHUchyhFnR8u",
  "key20": "2Kuq1DqLD32KgwfzCjKRh7LUdVnMbRScZWG68ZB9iNtjb4vbL24VADyqPQu1MuM3WytkYa2fyPE7y9AbhcpvXVXA",
  "key21": "1Xf5RWuK77Ee58KxX3VyLCvPoXVth179HPGh9hQ4HcpfSgwEhtegAfPmPAEuG1wLJdQ52LTcxeECF6qfzFW6JVV",
  "key22": "Tea6R2hFEFmnvk8YMmf5rR9WQyu1qGSX7CsSXj3wZJdbFWcELVpUZxVo2ss2mBd194SYobm7VZvvVYAC3Vbi4eN",
  "key23": "3K4sVQF9kQtumGQjXCppfAWcjpdVWVxJ7WBhi5VRBDB7PfRpGpUZwZQRKCCeq4yRCyN2gaf2dm5zsFcRGf4MYDrC",
  "key24": "5nA9DJUzuDurMb579LH6Q8ggsxNxbQfpTNPtFaUkdhD7xazEXLqL264JurPUBfSWrFzwmWqmwkVJrjfNdshnKDXp",
  "key25": "2vSqdakGbaGKBNY6E2k9rK7sHyGxNYxrA6dQgrjbdQGqHSaRsXN9VBM9hwzcQpbMT45HsDsoh4n5Cd5kMmDaJ7Js",
  "key26": "32pD8poRXkP45DyT7uENkRhZX8GuKH2tiQgHqjoeDhZ4eX1FMuajY5FPnfCKMoxUezg9u2zGeLkZYBd3HdAHpDRx",
  "key27": "3ex8SoJ22zZHgyFxigyFpBvPh4bgRBZKDfYg1NYJ3TGxzxnuBoyYUBRvxXZVWduJx9ndsRsbYEPrjPb6TqKEzFdX",
  "key28": "46Hkgb3BW7SEMw5tJwNoSVJPGo4wj3BPFPnMPUaYpzFhyon9WfPiHHwNG4ntVtF3W76MzT3JCS8QvKAVEEf7UFG1"
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
