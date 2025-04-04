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
    "2mcM56QcRgP2xWGZByuuHAqVBSMAfiMisa5anBUuqvoyi1sqE4an68PaGa47vif5XraXKAMEs7jM9Bshdf6ywTrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AuizNwz5Fn1rexPjVs8sE9TMoLe83e6nZtziQrPoQ74rFw3VjbTg675ibVdXZxVM45YU35fWRpEkqmDkciZh4oh",
  "key1": "4zzSCtXkVd8H5gysuLzzRmzVuHoML7Mw4WLRxd5HQqChmgXPPCryWcTznEDGXfABXWep83M1tZPhcm9KmUyCVmj7",
  "key2": "1ysHhiNGALUscuZa1y8BBGfTeMztWtm42Y2W4hbp8vkKaU9K3pEtBajJ7PbKiM3UiSaKvi1LUbB82Ls63GDGDMH",
  "key3": "5SgT2ydrrGjpchmTQas7hMiKS1dJgokwbAXJEK9bBS5orz6jVuz6Zfii5UrDrtqU2FRRWoxbz4eyf2Pp8ZWMRG6t",
  "key4": "4Y1wgTdaZtWUPU9nrNPazydJUhH2VwSBkuvjsA2jGqHa2sQRPf6oQh8XWhT972w32pYYrjRq9LwF4i9JZMqXj2nx",
  "key5": "Zj4UeezGuWC9rihfdRKy2Q1zvyP4hsb2AZXrTmvdwoTBuuCc3ztwxr39xFFNLHvjDFgHqSmXu3hvZH2FLpUPgpJ",
  "key6": "5uFBsLiv7DKnFEHG95FADNvkAYVjkXkGacGL1FbnW8ohjHrjvj5TAQmve4PPc4iW9EqykFh6jpnUDj2sUEFHLcgb",
  "key7": "4vm5HREJkbQsBwZXqzciVaDe6vAkVnSZpBD1NEQeXFZt1qjXuA8iu8srNdW5YAcCKVTZPTQryihYCF4Eboem1P3o",
  "key8": "3m8ouskzk1YqARZ2bx7St8bL52Z13qhZ4L9oSdCJnbjD3yL2DDDQJvPg5LGDoKpLfDhy49GNNVEZZaUD7fRrB2a3",
  "key9": "34YkXd8WajUXDG3k8qxBvpcZhML8HtKNXs9nvdur7kRif4aUGQgL67BBN6ip5jPWgASWCekE3nwic8pk8FTBcYZ",
  "key10": "3uabd2xx3iDWVAjXXydgw4SoCrPqicqYSfaJqjJyQxNEdRu7yuEHUHyPzgBm7igKmv7juXKBN1YxjG65h7zcC84P",
  "key11": "Pah55D4q9BMiD2W8GyMcJjxEYo88MVb3Tuk4XGKqSFVqeksGQHHf9Jv1xtfLYHUAbqaY3BiDQQ2NRwoxFeQqap8",
  "key12": "3jQYNMYbifu41XHP3SBMrVT5ZFahUAACu2XKMopQ9G1NykdvYgEr21EEwZUNmv2ZaD71dDo1JyBM3hvczpiRaR3s",
  "key13": "39qhpqBYveBcbc5XX9YdLw3uvYjhjppPJVBhnBBNGj6r6z9juBJMvPPJKpzuz5B5YqAWx8VHTz8kHZeaDZfKEhSr",
  "key14": "DkVVgmbqeH61noAfXwntxM34ynuyGx5CjbufQmVcnt9efmCuS2oLWHRbpPELnqodqjmiMzUq8zYsPwed4R376Tk",
  "key15": "yXMEho9rZQJwvepTkqPXeRgYWxhcYP7daWJgAFsN2xZNDdUv6twHZveaBr11siuGdpPjXwecCkzbwB7j1VmTuRA",
  "key16": "2vWmtWm7pqH2oEWXXYY5fATiEcEyNPdUX7QjE6sQ5iZ1SojD9rsPf8b31dG9MiAwQ7hYZuqPNNf4JuSHB9b7qHSz",
  "key17": "2hG6J9yEaWHf39SREZuS3SwhXi4eV9H55vfqXBQLRii3oVvLecwzj8isQQFBLHGNCtGq1TpR4MwX3h721diGkYtX",
  "key18": "4EKRpVCrboi4gx6bFmrs6pKvwmBDs79Bj931Dfpq89igNFRzfQdGpq3i7WWJVFCZYvzW95jatSjVzgdazUPrC7PE",
  "key19": "4k6uvjCx2VHWD35WZ3YzFtoLCfmZ6mdrqtyMCs3nVXSZ5x2MrLGgbwzvTEzkxynLyVkXxmwdpUa1XRWza13KjSo8",
  "key20": "2zdbweK7CFiLz9fD9i4bXDehMKsC2BUpKEnxU77wco3BBfLef1qWZiaAFxdnWdzWTZBND5uWE93XC5bDzzXYbkCQ",
  "key21": "664dsUimWicUxYPP8Sio2FEJ6vEzdeAmmi1pGJHk2E5zPJBCjHV42h6FPiUMsHoB7Ghf8W9UsVhQ2ineDn3dBoXB",
  "key22": "5pjMNFZRxm154aRCQjrf8cGes26nseHvd3StbTxasJ4gHcDgGAyKpDmG9DpVjdQN99H1UtxYahSdjy5qUEu6TyPW",
  "key23": "4fY98skJ3JNdrncp73hxqdMYBNicLxuoM3D12UymyTnw8ckbR7qbHe4R9AMeeVVCGyJUjh3E9ubA7buqJcLkWaky",
  "key24": "31GvKjbU6gmFwqgcboswgmskms8qNVcKUVwcFqekH6oBwMF8p8iL2jD58VsziePJAkCQvkDLiteLfBhH7kLHRyxS",
  "key25": "5xaWvqzNN4WMvXKWvq26QkM8QqSpNzyPt64SNpTqWd8UMggE6LVBSybdQBiuuksH1M74ZKbUWPLrqszjxzH2kSQz",
  "key26": "65xsdnBBXB33T3sP4VysATdqzj9cZY4MgrSng9TppHqTcarhuvHm45398jtopAYbWdGkQa2ANdtycB75yBa717mH",
  "key27": "5N93y9MKscyeQJKC7nsipa5hQk1v57YJUnwNxSaER2aR4sTDeojPobLK78PKB7ZUZdtW9scd4fzQW6vCSPnqZy3a",
  "key28": "5fjf3H2ySx3XDuWbcuZtDc4vWrG5gbENAUmP49QdCVm8LeEyYkJsPx75ZSJcxB1AWnv1LDy4qzLtCUKo9kUBUW9A",
  "key29": "aKyxNawyJ8M7u762PCKpDtxQuMuswQbzb3wHoEio1czZWn2AuDRt58JBoKh8Ae4fwxiGHBC1gaUPL8BdFepK6bj",
  "key30": "5WHCUmaGE3AdvX5F7E5kW5V75VijrHK8MonixPA1GYyt333JqXGFkm1EPkdD4ZYiN1Vbk7jWBr6pwG8irPFWqHVW"
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
