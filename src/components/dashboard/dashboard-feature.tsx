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
    "3bXKyvL8zgvwMKGR3ojjngoyD3qgEcpUBugtkKLCbCSsKy6rHLwKkXXdEZroci3S795FYBhRGNoode25M9pXJusx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ThFXPwwgLFwyEz3AM6CDaDbtUTFbVXzerZL7uaBekrrtZSVSLdjxq5Zws1w6SbqinaufPQepi5wmoRd7iVQw7m",
  "key1": "5PGPED1zKEBFv6vMynKFiTwRsuSDTEmHSfXtvmCLXqtwQfsh6VoDLy6wsCURv4eExXU42fvfwVqgeLaTFEcE8dMf",
  "key2": "fNBEMaBjuaesh4gch47x7t6R1F6yb6gbYphW1YGGVRHPmraYGEgVMYHZMPz7gYW4m124K9PLsMXQLLPhyEkj283",
  "key3": "Tmzw7mBsH7i2UVQFqpuKJVGT9Hq5hXUWXsuzJ8fDY1MG8jLwMcX1mmqbGUkcFYzyoCzuj3oVMfa3NC5fcBtJa5f",
  "key4": "g1x2T3k7XaM8dsHUU8LB9f18vqZteUjwQPAGxBuYh9zgucsLWoJEwoJLPNYfPj4YhKPXMUX5bG3UgZZXiKQrwP1",
  "key5": "52URRD2JTdeqBX67iaM5dbNp2ZpvFdw322F7uNKfHJCaLPCpiF6oHCPCn2zJSC4WYcaAtJuueuvHwxRPRkubs6Jk",
  "key6": "GEe1ShkbnSGubR6JnSXD8rXwZYZbCSttazawyiEcmmkeX8SXHKiRiqhJVgcRtE2hr9Prf76fcUpM7mbfP9A4TyE",
  "key7": "3FSLLvLFXK3scTwg6cNsLUtw2eDLDXGUCGHwLJZpUyvRmDphBYoJw23UpXCweohb18FSN4zViBkmug2qkQPU39od",
  "key8": "4ebkX3TVyasdyA919YW3FuoNfsfanHjCPVeagY9Z9wQqpgev7ms27ZzTMtXe1ZYYZ6xvMo16M96CwPUMAxUGdAmW",
  "key9": "2zqM9gju41jZ61NzHEoruAZ6DP8uJdyP6vSrLW2NTQZRvyJKbCHLmn8agTJfsad4mpvdpxu8SAtMoHhqKcvzds15",
  "key10": "5R4BVBBL5TdPpubK73fKBaEM1TTnyyg6Xm9ft6U3e6VJvj34jQVW8hS687TC5W2jnVRFKLyq5myRaTAYoyszBh7",
  "key11": "5yN9M5FY9yj9xhzXz5LCcGu8GDbNVMPbJQvasyJKQiTUeyWLDKAt9uUeH85jwyeF8RfVRQZkEkQ5FBbAindYErLL",
  "key12": "5sZRtXuo1igePcVgiPhT3iWhVXMa7tgBmufUUeSpc1XzhmZRiaMD9JeLEqce1cZjxceRLTdPFAmNanCsvFxPffMr",
  "key13": "17Bbk5GRWi2b4ynxMeVkv5h7gA8TNJtjH7NLjqq7ufpjidfb7RBsLkgvGggVPqSGwNRagp4Qf4qBBS5HXSEqMQL",
  "key14": "3fUBBYsWbne9RzxyN1sNxiy1Pg9Bxf89MaVKCT7NyeRTi3mMH4KZ6DmExNoBS7w237zeGmhLg41T96yJ8aWWqD1p",
  "key15": "54p4PrjYL9KqC84Xp1AUASXmjH38xep6UJFwyFx7mvNkFVMjXfZyM488Uu3wEHhbmdNo169Ldwp99TFPeKxcfRtc",
  "key16": "3721Q1yP6dH4ySXEL13XPFh2LQExPkqAFS4zX8Wmcy8eXde8jcAt7PbPGH3c4mxjBdZ1G3zMT4KPgXLYH9URZhNs",
  "key17": "5d3E5k4mSM4JhUu3hDZHF3WCAiZaJh9nczrahSnHm3JN5a98YNJDbfaCtUAek2PSugucNS61LQjz4aSSuyq7dU63",
  "key18": "5WjvrSLLewX8VBFbagVpwiz6jmFsagc521w2ZNhpoT3GY5hgqfKtqmpFUYtiCELpkYznaMx6xgAec2qfAZbBLnjP",
  "key19": "5K6fwtq6GmSDfRphiqevyrRDKnBgHrNKSe4HaTpgSWi499UeeAL38CZodzEJnEhaqLgY1PQFZ6jzz68BvgSuZe2H",
  "key20": "3CDox9SVfmPxjhNsgRxSzNxt3utKigXpUd1GWugTz4TtdmyPF9Ed99ktJDzcu6qLuE2uXfWkL1eFtceFNLtR6FWN",
  "key21": "5gPnBrZVo5hajxM2VUUdXDu4DfMjabxiEzr4G4zNYYrGuNSppV6fYc9kJt6Hcnmev2yzF6hhcUi2dJyAG3jxi9V3",
  "key22": "3RWH8xCrKbYXVxs2mNPQa9tegCtNWqNUXc9Y4MHGTTMy8y2iPzNo3KW67Gi3epX63qE1YjmVc7sjW5Un7k7iyQwP",
  "key23": "25XEDPqMDXZYyRn1R29jNGs8bXUApZWXy8wRyuajSpxrgdKsBN3kZyCxFKHUUUPicpeh1JPe3M3ke1vHx1w1LN1i",
  "key24": "2E1VdAMnLJJoJMeHraCGcNsjEdeZyFnZ6Xy1PHNnGDvDyJmqMrUDm8Kiv71dNFDwrxyT9Fm3jJjTXPpbNuM9fHeh",
  "key25": "3yRwqTcn2AZtqdgPZHeQBUoAAiKEGSEt73yy1xrnbvQhTbemvpGjZh54bNqitvG6BM2jnHAhuaSDpHxj1fVRv28B",
  "key26": "3khepPBZHBZDdPuGkqtgyJuxhX1B7Gn9a8ZmMybw4dBLtNBaBTdUnXQ54mgsCC4ZUj39K8ytv3UwuFsQ5hX4uCvy",
  "key27": "4P9hWr4ovxv1RvqtDzNyaArQAdhAVNVtWHh4HTN5Ngb54eKqTZajgKUtYwW2VjPKJYbmpuLT33zR7qmtkWeKNfFE",
  "key28": "4jQpDA74BcXpqQZ5iYwLJFGTX2iTSZUTKTKqxYX7HdWP5eEHhMFcBr5Gz9ghUy1Bvn4aa8qvVjbdtCo78JH1rVLj",
  "key29": "67aKZaekZmFnqHWUVu6CzwzF6R8o1KhLXucgmibiyMz7dYmcGkQK8QJCwyG7Wi58fakqbozAKDoMr6ZuUrQxBA79",
  "key30": "3VzQe4qWyJnW3y4FfNo4qZo6HpQJAAExEY6qUtonsWg6ziXtBdwBBKko5nMTnbnpRDJ7GaAu2okoxo3EfT99MqRm"
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
