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
    "613kVrUuJDmmL2VvQNDen3GbfY6bQXVyQo8VgqanUz6L8oX7WLUdY9z4r9BzGXNvccEehK6FvAfwQnpk1X8FpMjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QsL6K1XsFehiirUFHhFDzkSLtoGTBCcMzr4YVN1fvmcGMS1Jj1Jg88k5nQrRHRx6KMdfn6FW75CTKMXyx3TbhZ6",
  "key1": "2hAmWeGJostsuWLDhU5G48P14km2PkcGQdgppW62ZAEqohMjNPi4FVdpRTCtjqm7ZmbtNhvx9vkX5nUNW5kGBgUT",
  "key2": "2wy7MJgLyL7kNqdBiQsAg7fMDv9LsyVTVQRBCBEhSbQbke8Ai4kaw9qBX7iXx4VFZ5QQzT62fCbZqWBs7kKTbn8V",
  "key3": "2VDwyatQpFCdCQAbE1xDa6J28qHndPeC1adY8Q7hjGo4uiZjAcCLAymVgpgJcy1HmxVg63HaFh6KnWQrUp1JAEaw",
  "key4": "4dyyPT528yi68qhUitoLnyc8SVEqE6xRC2RqXUuFKwBgdbwystD1jAG8mb3sLrhEF1YHMrvzFj8ru2DYYvrzp8WF",
  "key5": "46aQKSvBX3VTtj4xJSZ4QgcKA4ACb4QRNnQmJsg4fdcHMTk4d3W91HZLchsoGNaMoecCExcSQcsxvBH9DXCCjDEq",
  "key6": "5xDXoTZP7udTZ9g8KeeC2CKyqq1RLpBw8MbfKTAwv6daqNvDBHMZXTRcEawqSnCz5yJXe1wrk1FKVGrS6sMCUFBS",
  "key7": "5r1hrLpB1uAoArjQbgqkTSTmQMeqZ5VnjAaAyYncPiBvDJLTFpFsEEupcSk2YyH3WSsB6XVeTX8KEmMZ2C87rGzD",
  "key8": "2LLgKNpnNEviu5v8yvk18BuFKtx7eF5GZDpwpDRZoQKPUjpMc2t1kmaYQsJ5n7ACWQLtDhbKrFZzBWZBLiu4jtkS",
  "key9": "4tM8K5h7CPBoUfofkMsh57bSkkoYDZHxms9HBnNtDC3qFu465Pof4pdifGMGAZJFovoukwJFMm5Yn9TNMoyVar1j",
  "key10": "2R5A3D3FkfHcSnzuUStK1Yj3ZFqCgzse2R5ZLsZrqVB1NSxWRrsGGoLvAkMZc9iWFfYaXeGLR6pWFZpF36p2cPZu",
  "key11": "qg6BjLmGSS14yCNrR26hFmgmYZWvZgQxXxnoE3xdN6Y7YaGk4mb7Xv16vEQK7xnFTXqgXKiNxsQ4X62NBxorm78",
  "key12": "4bLv8ZE5mMqR9U2hxkaaFwdgJc9kmKk9E6QNzy2VwKwXC8aPY5FjkxsgkjW75rJWrE3pfcc6aBEVyDzAR7TNEnMM",
  "key13": "26UBj6Qetd8WDbGfHysUQ542DxHe8GGnKn2HM1bmS5hyG9i5hQosoHEP42y7Suy7HG1vAYHbW819vMd7UGKK1TGK",
  "key14": "fMR8HDAADY1tWkAYK6oisNe6JhEAiT1igXGhhrRbs3Fvx4bceVCTeJq8VYSKhNMWfJuW9ueRAgp3YzmBUap1j8o",
  "key15": "2b9MxAgnakr65vLgkXmT67FcG9xQjRn4qiyfc41bR1Q5jEsnSzngLNZYNHiU7e5eqRcNZvVwAMT1yctEPVyxs8dV",
  "key16": "4CsbWZSb1j5vopeR49p1z7CawCM7zgN91oW92vamEYLjfkYvf1gGsuGpzYYmYFEeHU63jxErJv4MuUDPBYwa394N",
  "key17": "3JjMgMtUsAgMF6MFghLFjp3FvUeNzHKiswmZRi6KTsJYsjFKitHX5mdxG4YpBUd9yNdMad8pH3TmSUA3ov2f71Ym",
  "key18": "4xG5xct5TraLuD2fhC5zKMu2yqRUPsghJWHC5SzFCSYJuKqUtv73RyTw4CQZoKtJnk41rt5j1oPc1PwXpbRThsfz",
  "key19": "2vorwqhUWreGqhF1cxnmKy9EaDTjv6kPVM5kNvx5AwecqdGBnJsKAYY2BwHwAMnRdFKfdoAXqkSmc3uxfigTDK5q",
  "key20": "4NwCVUWijLGnyX4XEUpobdWyDKrLggcd3bSt9QPw2rK3tBooGzx3TK2DVV99PLpuJWwUoe4PHqNKCCfHmR4182jD",
  "key21": "xFFwnTG5g7SxR3AHN9UeCwBjnsRG6hP3mwk77iFyVSEDEfteiTdnE3oeNES9hCnUviQ39B9EXjfWtULgBumUCVr",
  "key22": "29KCwB25RvKSQKA2HGm9QxkW8vcqNWk4E8DPGxJx1aFUkFxNDXn6AxsNPiafXdqvVuwiCe3kBrYt4iVuKYKyJPqJ",
  "key23": "5ykgK3QbrVeia4ESFJ12JwmJJFxmwETqxm8njd5X3vBDzRTvyhpsV8DNxP6xaRmVj3VouSW6ZPLQPQBbuMiEY8En",
  "key24": "3iGWBuUBs3L2SHxNgjSTVz21y5BQHBrs8t1T5byALLbp9LKniTCQk8pbBMRB5K2o975XGxDjEkahSJ6uSXdKnJZt",
  "key25": "4G7yUqg6S5w7mMTLgibFVn6PRXQkoTQgMJQmnzqBkA1mUe4BUqiys5y7xYkGPxamkULo9YGzDFoqeH5ak61MntLp",
  "key26": "3BaPP75vs6vrVPHGBw8iEXYAcSetdFYTC7Szr97WbvLuVmjuCUbMGTyWnCLPmXrF4TSFQky5Hf1YjrpcfuzZWQgy",
  "key27": "31H3gDmy5Zo6gg8JhReyv2joxhvpACaooHxxFEVbxg2X2PfUkFp5h7EGZfKGExmC3Yy8tcWDRQgry8H3LMxEwJg8",
  "key28": "3W7FDAxu1YXwBgmxzvbCyhng2kJvs8ezKCHFynR5ECaNJKXTaUnEKDgz3VvPtZX1hovcAuyU1g8dTGLiVSau4rkj",
  "key29": "4P1EW8j84ZFAnzZ8UqXrVh7vuQEbsh2L4ahcWE6s2RCJqtGNicEhNEH2K7Qu4kxbNzkU65752GKR1KHYXhV5Q6Ys",
  "key30": "AQH6tQBwAntFc9e5GKHdiPJXwqTLzjyJtX34bPVQqNVstapTuzjWoTCdQusxyZRPKLHxecrMrGm7YxYyj1Jjy8D",
  "key31": "RJjgsTYEHFwArXiyNXKeh2CbkZM3sBivVxvdLoCGKrh9YFVLZMjfZNh7317NV7hBLwfbPLifkVaWZva1kyZUbRa",
  "key32": "3RZfddBDABG197eaWvc29YcQxFTLXapD377fyaSHjkeP26DpKTfNqJDcnjuinnpiThtUAeGTzXqxQ7K4qzX6Jp5f",
  "key33": "5aPR2U8FxrQk6qrfGwveHMxPAjoYchzM3wsjmgBJyUt2x6BnwgonTC2EaEZpeZ9hYGmvibG2gELkuYV7UEVCxsfH"
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
