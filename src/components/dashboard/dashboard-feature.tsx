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
    "2K6UbDx5VjCbqjCygmX1Pvie438TWnafNCkmxBwhvQQcXJ52U1rRx1kTZv9MLrGP6joxX3KUfFx7U3ZCPuFMjPKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PYLog4xqvxKnaUfTMXAtie1tDjQhCfF1TAgHN9kZzqRV85w2ybcmWf8jaCwjj3fdCj79Ww5efTpNtCyMGAa5RUZ",
  "key1": "1P9X55Vqj4Dkjj4EQkTbYGQTQHBATL6ahQrzgPrHAztKszC49wA7NpbRPD5zmpaTaCwvQmxQvMxLGMJPMJaXCP",
  "key2": "3igT3VqxEFSXs2K6aM3L175VcvhQVbagU2X1yCgV7vQCQf4BPyXtRQ1AEhL46cT7zCM9RWhBXiH32XjEtoe7V2w",
  "key3": "5dAjFVXrbaAAuFYnkjzenzdbvV6ChW2nEocKTbZvJ8cbne6ZTxqgogTpc8d5bL6kviLrHxWeodpE6Tmmj1saU8ZQ",
  "key4": "4CRuikjq7qvxRuX4JFrGZX7kVVeFmQCsZrZ1cN21QXYnFT2F575VwuBGWRDBEWeWqqATXJ5QpKX4rt1UT5SiiaS9",
  "key5": "2q1HNgNdw9cKUuS8V2gSo9Stm42ZH2rMVBept67Zhy3dyLJBjT5oQaHdGT8Q95KgffMNrvJfTDfK1VqJ8nFs6urC",
  "key6": "3jrqp84bnLiPusfVmiCSiqsJKozLCSCqzV1LmprA8uCqEDTfzrJHquq4K2PFjqrfZ9rSJo2iZMfA65tiqEKhy3aR",
  "key7": "3QVSegAT2Pt4J4XcX1ERBwSZTdhUkE8hceUPcSgsLYuRfxAmUHwPYoPuvaMvYC5nyx8NgpAfiSCyHu9mwxzUZPTu",
  "key8": "3xu42xFym1fzKHuodL6ezdPLUeXuhn4HuXmhLpANg3F89VGE2xQZpQ5S8vFh1WBo5itYyidd9SLjZn3QeZvm3r3y",
  "key9": "41AZcEm69JzzFiQ3vWPVZJ4PG73gsAb4HW5gEBEcu5YbN53rvLK9U7RB2K84sttqxL2pidBZny7jNtvNPimhKknH",
  "key10": "MsaVozVYatDFvxHSMwrTkMLUQizxXdWHLwumhhTaTHFDApTh3et7tVLVWXsCAHgQYzYw4cEFb5XwK8sZmPUt4TF",
  "key11": "2zQJduWvdGMYjUJvKQ24GaJ5nmkvhPgioN4UF6HGrL2o5qhsaqiAgyHgMA4a6Rheu9vEbPBNHfZ1vPD7M8n5Sh2r",
  "key12": "563M9j65uyqGRVv2r2Pr4mmMW3qPGBYWe8WGvMGC8iM8fKrueotH5StH5fNo7W4XLz39MmrMv6zMnqxMkWj7bsp4",
  "key13": "ebZ9gFCyuPJZmwKzxiiKX7BMaQXQH9P3cfzWmsBPYU9x31rRFDHPJH3yryHNndbmN4KTyBJetXYtHTFc6qAF36c",
  "key14": "552GtdhMzhZB5SitESdwcLzrFH7d7UWChBox5rZhD6fDHPn3uJND96rN6fNpcZKP4C3TjerykVR9y3vquEjvQkAA",
  "key15": "3pYGxU4Wmnix1WyovrnjRzPka4gD2kX3GdsRDwamRVLjNRJwBiGdsVkqk2brUBM94Azs615SMSeZ9FBtnnxSpdbP",
  "key16": "4i4pgrVHAzQtereY3fEvMWsL7G2tHpmucVqSx8Fp9Ui1DwKHSwnvFy8egP6fBsmPYPYGsSLTehG58YxZxHQkBdxw",
  "key17": "3g2GDei5VZMhDVbqzvuKRNVugXKbwzjDbsueYUo1RuvzVFrWnn3mmZma7mbj6UtwExFbgv7oi2zuXeEtxj7Xeshb",
  "key18": "5uD1g7ngLWpckcn69KBqnTq8afx7FFrcYQa5Xk3WJ2w2unKDJm4TcTnU3t5bRyEds7XZtqVrCJqAGTeTyvKeQzK9",
  "key19": "2QJSPRwMnmqQ9wSMPhJXAtcK6eZYYcqxiY5GD6miepZs2EVMT7NQo3EiBiYRCJnS89wuDVEciWCFEFPug7vYs9kL",
  "key20": "4VaL2NwDvnQbhVn4b9jnEzb98bgGwQXuJUkQ1BjDCKsVRsmoAEPAefoRjMbKG2HjYPfZ6Wf2NsdoK3FxcYYuQBPC",
  "key21": "5JFTPMk9L4rndPEGStznZgkFRfC9jpfAumbJ8q9N5xdbcFMXGV5AvKoHAzuk6Jnii3hBefKpWDZkLJbyGMpdJKTv",
  "key22": "3ULRDSZr9mqSf5ajRwxfxQdaxbGe7YnmbmM15uC359bxT2zwKgZtWpW1PxNPEoKMcovHxDSLkq4cFJFJMNfbVU2J",
  "key23": "VVaGzjZHbo6XHzW4CNe62JjAMNWWhCJqJnNjRitrJGYYmFiCBd9N5E9nkiaYtCbVbMLDrwERxLAfzTwjRMZWvJT",
  "key24": "4NFBfN17ViLsG7qk59tAsf9gmeG8bjJPcpK3ek4NnmmYeU2kshyA3W1ZCZMZ2ob77jY3niNdFrzCptFnZW5eiUpC",
  "key25": "2gDqEUUP2oTevz3XCBf3C289A7SjwfB4RgmtBMJSLwoCbFdqMjdtNQw63TMi5sAKodu5RpqxrzbAndq5cvkTvikA",
  "key26": "4KLNYEru1QCev1K2AY8KrhjJpUpPwAxSKSpwwpczWAQDSagxe1WHfruTC8EK54BSpWc9cctGWFYJSsBvbfKws7ra",
  "key27": "5YKr29NTeX7KNqFima65PFiXYFdZLfFiA3pNYug444LNKxdMy2Jn3GKm2vUPqUUAHDRm9F3QkVyE3UxSjeAfVHz5",
  "key28": "KABrxB6hQKUvhmYCJztAhv8Tdv2KmhUfiWza5U9oNa2kPrDDdb38rVEBjsvy1HPwKp7DUpcDDBEohCymVZYGCys",
  "key29": "4sRqpeERzFcdnd3FDkDbcX4bm379GcAqje2pwCzgGkhRd2eg3DpnnyhgjMVusM4MkgSEMotXvQnpa8gZq6YSq6Ny",
  "key30": "4V28kMVnf21B7AEaxGJLJZizHe4vYh5cJBEMTJrg8Vw1djxbT2DqXnUsAsq1tREoZoQVeYdFTjNwvCLd9wbt7JkP",
  "key31": "5swmeApM3zNLkVXXjzpGYQ6ZR2QbSCxkDRVg5rR938A3j3buU96RrLcAF7jyDzwGiwGiYS5AcE1SpdGW9qbxVSgk",
  "key32": "3FkRTtYiaJBy3Msk4qvUiqv7VUjHJ1A3b9Y56h3vJayPsFj3Q4ETxZNHWGbspvyNbvWbbRcoAqzvp8kZeCgHPD1x",
  "key33": "44SGiFcjSEFUawrhmS2TKPbWvghWz83CKPvtUirYyviUuAB9o1hkGukZqJaughJ1suc7PxMZwZpVnkNozP3Xmf2U",
  "key34": "4s1jMwkR9mjNmPCjE1UNDVUdfH3yUGJRm6vwJ5344grKqUE7Kejk8pJkXiQiUGxyn58B1a3hz5AnbiA5A9iEHAck",
  "key35": "2hjKJpk4nBWfyiAY3Zk6X3cZCQtfNR5ZQUVooiq2BYgEUXaajRCQ4MeF4w2y15qaQQporvLyK6jXpwWagnn9PivR",
  "key36": "4J4u4H2oP4BAEmskRccyeH567WrJCFBaehGtq7PXHtFtMmvzaHmV5FDftNv5SZtW2qyS9XqTTj59pWw5HL2Q8J3w",
  "key37": "53U6Njpw2ZfYvLXEEiMFLx283qGhGXvYWNTZKTpoStudAJJjbF3ZRj2RL8odnw6moQpLWtAZUkGe9yYjnokDUT7y"
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
