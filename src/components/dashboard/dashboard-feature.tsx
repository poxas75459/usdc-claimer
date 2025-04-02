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
    "445HkXSEuJuyamiHpihWSVRqMzvY6i3LcVJ47JDuEMxGkPpUpfRDEA1sEQFJuMhXmXeLLRRBNEqwDzRJQZNuEruB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cGNgyHseQvvjmrWUMAbdXwBFraEEnSC2Wqm6Gm26pzh5oyWKA6RSFiRPYp4o92tJkg2xzfvz5Fpp6GfDAGRofUK",
  "key1": "5Vw5oCgzZ6BzG9hdUmabCCPWrn8BDyMs9g9HrWSmZoAQeeK6Ro34Nb4kRXXDn2qUQFCE6R6FATKjQiHFzEstD8ax",
  "key2": "3UrzEySkHXE1QSNYNQJ39TB2DdaEStTswoYeA1c9XsS14AtKwThcBtcLxcpNkAMGEy5NyrAjNgU7UgUJoKLg84jK",
  "key3": "4NDM8Lx4rBybKx7eHNUkwmTsfrT4xPiwfiYwtzUmvCQb6nWQzsjSYUQzvysVLqwT1rTtfTtm6EhE5zxAvUCffPaL",
  "key4": "5khumxo5SEZ7tzJ1URhfntugKbGuceuXiC33s37MR82h9RVHfF4J8BzSH4Y8SjJCkpibaS5hW12u6xD4u6L21b1J",
  "key5": "5Q67LhnwTwpewqqKAbRiG118dLuJiEVCSuQiDmJF8sg4d7sQSxrWC7JBcZ8SWKjfmHTDznpRdep49RkVA522ftjy",
  "key6": "4CCBZvSt7h63qgCXTcTan8uvaXEUwMy9X2yj3jzkusNzb58aQPYaaAeACpGeZ5DLFsnkPk8poHqo4os6fkgfYEmJ",
  "key7": "4GWgiR1DJahQK916aA9PF5y1MWG6Aj1wrD844wQASQAtX7HbNkS1huFAdBR3QV8mwoscUinighXgcqhBAPu4mPoo",
  "key8": "5MbGkq6hTmbB6kb447RZzYCAPF17KvJGDuVVZFsrHWNXbEaDUMS69nnGnUtRC8Lfc4v5Btug3GNEdSSUwFazWBYz",
  "key9": "QYYxjxgvi9upzBJajeJJSwopdrB7GVhFftJsT8zDNb8JEt3wF5HAuiAzZ6bNGcNrJQTLX6gVAup3yc9fBw2FeHN",
  "key10": "4GyfYoiBFsLNz7Z5y1w3A3rffWqiXa5d1J1zwapPjQeofGWUhGonkJc51eVzjFowE4fRPWgw4rX6njKdCSHUY2H2",
  "key11": "4mJ2JKXZxSkmDKpVwPj2ygbNWTvh71JFj2G137znyxbeMZ1njGo8of9gxtZwn11NtVDNCow76hKDAWKR8HyxJX9g",
  "key12": "Y7hqQ19h3dprRMczVsfX3chQyWjtohoc5PrR5c7P1ctodAeguKFdW8LTZWgn87srqArqedwDBEQ6Cr2GX2jPfT7",
  "key13": "5mf9NmoHprS98fmtH4oEyb53yRhYuC5PLxkyu6VX5npNQyHqNfaVj43XcQu156tCXtvrnpFC2D3FLJt4jkqZWa1Z",
  "key14": "55P1oPHU3WaRebka2NiF4EQTtFNkt9gaTy3sLCFyChwFPMT42EzVxQxyQes86dsiyikwLZ8XVbMXZoPpcvvKeqK7",
  "key15": "71wv7NVKCaJURHYE8mSJZt6JNGwuS3U2UaQDCGBJV4AfYvDCQ496mA9yRkvH9H2HwQvj68bpckMJEo29qC8mNAC",
  "key16": "5hrZMzUwc8sbhuxLB4DNKWtFxEsK6GBHUPqsPKP3WPE2FqDgyrSFLLp9sqoyerg1ygoDaLTrGfMFsbU42JH1Xagk",
  "key17": "4ECuJ41WmJqRZ39nZBFo8kZfJtKDJ8upG7VWoNRuXukA2Lm1wGQMKvNhzWM3MgJ8YUUE2beLT3Z4PP8oZaE7NXL6",
  "key18": "4BgWXVBLjstDa4A2hyuF1QYrz29cXuZnbxXF3mYrrT8qSqvXvJQuDUko5dNVS5cCub4cdMavTUJW1FN4cv4wduTT",
  "key19": "5FGQDxuLRRe6ppid78F8aaNUF75NHXex3kjMX3yjXp4yRUGT5ssrMY7ZKAZT8gd3jjHs4tUVCiTazcDYZ47Td2xV",
  "key20": "5TuZRHmBWhR7kFr6DcbTjvuoboEDtFLKHLtNhTeo3S7EWUuA7Uxa7GXTVQfHqKnhRj4yM6haZMMWkD2n7LLe5e3d",
  "key21": "AQhGDfoMk11coNj71r3HmcDorJtmj2z3BeFCgRiRm6S2j53DZoemK2XBWFBd4XhBmvd8CuaW864duMmTcT7LkiD",
  "key22": "4ynBSJW75FbVJwugpDd8XtLkBcB69UPqqABdYLWFTCS8uKertV8birUkTNy7S6Tys8yNeB211brCCmX8K23ag7va",
  "key23": "fEcHXtaxRCDoC8s6Kej5YY4CA4i4tX75GFkTcXyotPMNmKF5C4Fj29o7DySoxQiZDCcm8ZJGJoFLwWnYLuhux8J",
  "key24": "yhWPrrkEfFierpsEqz15uoKm7B5Dhv4d2vyK5mTv7tDx4tMxDepmbw6HMfxDF7oJjZsgSzxaCudaDSb1kEfzjY3",
  "key25": "3YmggnU6FFmmqVpxB9Kwh8wQkgQmpna7mbxdzvZYWnznyxoRmEZCuCAMDiqzjzfVvCyttL7nwZqoNLwArjVvWXV8",
  "key26": "2xctyXvCBC4UqbvQgeTFsXeGd5HbvuyuQxcb9ZojMKucgFFypkC4gsKh4oL1V6SkcqZ9xPvBN6iWcGo6mhhUzeCo",
  "key27": "aE5F4XkUgySxkD2WJG3Jkkjv51XamPDY3mYFQSyV9RvoLPpJ2ooPCB98apWAHhwTCU3bfSjiz3rRoJZ6GhLtQSw",
  "key28": "j2RFiCzk9XXNgLc6Kt18tXXkyvw86sPgQ9roA1ZLntCjTxT8AjVeemUB1Mnk6DKauFNwdG23UZAzz4feT52a7WU",
  "key29": "46q4s9wSscF5fPqESY9qQWuFNKYjGg2BcZG6U4YUi9C8yvju6wSxkeEW8mHj4NNdEB7MeYzRuq8CcijyxtWHtAKr",
  "key30": "5HpwD2mzBNMrsAtBBfQUNDtWUuxpnFfmrLtZNi5qXhwSLCcYLmPDw8WBXRySGB3LGBoTo1D1i4zHZizj1YJ8jENj",
  "key31": "3RCvvtrNExzPL547rhPSEmFpAhFF74D2f9sEYc32xtNAdnn6degKh7xeDQ5NbncxR1yRhWy5g7eon5MJxKEKYy54"
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
