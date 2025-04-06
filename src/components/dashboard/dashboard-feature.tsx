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
    "2jwhftCuiHUvtmni1SM8YSC7Qq8KqjGjYHu6tzxcWH9c9m5SsVo9LV6AvgNVcSvYR2SeLdof5Amev1pVmmb5vLmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZxHtCsRC1B2RnmE1LK6mXrp8GDd8rC6bEM2C5EMgPWUpvee6i3AeSrzAYGLmu7nMXtAajMnbgwTwD4uXaRKTLJq",
  "key1": "5FSy2bYgxAeyzgF8DSMgQVszvFS3HzGh5r1z3LqazJQEcsCawTTyz5DjGWUQLCERqub5NEcdehinyeKWB2pmh2aR",
  "key2": "2vPqJDm9itoacvcqms8VRnPFmTnnJYc1xW6nSoYnSvt17PxzArAXuG9ehQRpRLYunqCe8XbqohGshUuFvUUgky7Q",
  "key3": "rDT9YiGNHZ92v34Q3nrg1EmveHD3eh74AJu6fAExoDJtEdz5jhV1EqMGFgX3ykfmbCCsVGBiYniMc8ywzEEmmq6",
  "key4": "5mipXYoMHq17iGiF8uxrarpncWaeQWkmJij5N8DrJJdVTy4QJRsXSjMrUCbidtg78XRPW5AcNXwCK72Hbqz3q9Wa",
  "key5": "3eBih5rwMsZDTNdZLQ2J6zNxsjpHBNTrZoRdeY5W8pGC3Pr45eUoNorivJxYjNUQooVgUkz3a5WBTVroy31DKAMV",
  "key6": "5WSvjs86jU6q8h4MPn28jm8bF2ozNZ92p7UMbprS7sCi2y4sibUL9K2rJKuit7xTv7GpHtzyarkWZA9FKEmVrjPh",
  "key7": "3jw5bXD85bM2UqZsgkg1ghqvHyamAej7d77s3j9NuFHS5BZZRy95bfnRA2cQTXhR8YnsqRwSFNCjhkYHiuAf8wvA",
  "key8": "4UxD9ZSiqY1GpCqgDqVwJXomoG6MxniZnsTevryJYQoSAFADKWtsTHqee7yuiqjH2aHdtSCQ5oatGvNXHR25fzVF",
  "key9": "4CeJidqRXUwYTpnZ53vjVFKqX4t1TBH2X68oim23HrQt4R4RMSdhvDMA7Tke7wK3NWCwjhYHMWtypDEis7QQfHKd",
  "key10": "2LjFXzxvqsqCVZAbAAnvwCNaiZK1EvvsQxqTRmDNWS1kpF5Ps6gGWUq8tqoYxM3mWUErRKNmsZzLetuyL6zKKtRc",
  "key11": "ttvbaGv5DaDeu35mRjCWtSW4iJsDT6MrDdiaugndmMEUcZJENohXChtChATABjiXkxxsjY3MD7qmgvGF3yofAng",
  "key12": "5jEX5M4uqxcbckMroiBkTkCpJXwkkiPRfwaxcr3jRfCqM4F5RCt2o9aWdufXkEfjeRawXTCgExDCSJ8SfgBYW911",
  "key13": "5eLVV7WnWboWN1XUmUVbVGiTovcx6pXPMMxmscCGh8FWy4CxJgLY6mX3MEQP7YT3q22F3SYAgDTzLihxxJVHmhNr",
  "key14": "5aCeSLMbrmggyLU4jTYEZZPAe9RBUAxXaLQ25KXXwmBC55YXiDr7v5kzRFhUkXTqCHKMWTM912yFFLaNECk5Sv48",
  "key15": "3xve9unZdTAUfJG5sRtxzFVfLEJA9vG4F5U8SGWgmUhkqYdxTLYEW4EpUtgiwwgkW88XYQNHJjWhpLaLpC993rZV",
  "key16": "kCQJBvPUNmHW2t5KuY66BnD4CAL2WfWHMhQKDDSDb6C77ip1FFK4cJqb8FoSBz5z1VECZk6eRasL1TJPw2rFw1g",
  "key17": "2mVnS1pnzXJ4A4QLiqi75RjLWJowX4V1LGVwVXXDhwgEcGE135FtZg88ibVMsK5DJWfiQgiJoGPd9quPmuupm9mw",
  "key18": "2gMo9UC6sKU4kE8zxYMsjK524TXha3K25smRNyB5KozopPjkxVVC1jLJa2qvt9qnmWVtKVB3EWTGB7KNX61xbBhT",
  "key19": "2WrvdTqZ7F2kBREcGejurUMJbPUWL6KVTmZ1bDpmo9eiacej2qBoYADXbTg8o1EMs6S8UXmAmx6jsVGR3hBa362Y",
  "key20": "2Qqz4BFLf968hoZXpaDoWKPDBcjoe5M2kMtMP7hdsWKN3UoaarnUWxV7c2ZeXDhKxA6VuRDSCcae77JCsK5WRN3h",
  "key21": "3UVdZkUiy4Wp4rmB3g7Mae9Z29Q9CWR3udUFnzjqQjsNh8uATn5kx2eMTUb5bRSRUdNXfYKbZrc9JP2p9Hn7cKeg",
  "key22": "5QsdM7HwqPbN2jHH6xD12i4RvqLZuo9ehw6ound7H7r7z5GEapH81z2fQB35A6Sdgh2ksTdMzyqdpcZfmkf5kXyp",
  "key23": "4z8opYJF9jY4cyRKn3DXdC4n9u625bPgGMK5F2poPsWHbQWPrhM8N22LzYkeDGhPYfQgv899hNx7R5kNqb8sG1rg",
  "key24": "r5KSyXUJz2Yi3U4wm2CK8YedgnGJ7id5yBJysRLv7eN2dutVPZAEEtYmvFoiL7jyfoPe5BPjGWCvBHgwk9k7MA3",
  "key25": "2zcu7pUSU4w9WgU2FWoE3UGyJgFUT9ThoXVgmyKHSEQtHqxNgZQpmYQPfUzw51dKSfa5PVPvQfJHzVyCRQ4XVm6C",
  "key26": "Rw2LxBcgRcqREU1n3SguSUbWqjCt9NzRQBKuF2uwUCDuYSQ46rENiZagXc55f2j5F5ogjxuJJU6DnyRnpAfR9PV",
  "key27": "DXjpzdEK8tez4aPRCFd4MeyJQ6ey8Qm4NYjjrK1o5tB2iWWzSGxPY685EkRRXgBvvc1EuSWEx6NiByfW6cUvpZM",
  "key28": "3EdXEkx738jdzCXXzUJ8MyKfLQoPb3JRJt8XdNPXXpg9ifVjW4XX3ZCCTThahUhs2kKAjA5AE46SWMXGk3Pi8UJU",
  "key29": "3DvpLMVCmwu3t7QYTu1hFp8Ze6CTA1rcsRmBo7miVQ5Mzge5b7bDBZ5SbG7NXoYqm9gMy8HnWG4SoXsCSJijpidB",
  "key30": "2fcdqdFfPWbZRvorrzQqaZuERe9weTRzBMk4Zqa2665ApJTf1Q5oKuifKvdGUVmVtnzrSwiPduGzyDEujcmTcWAj",
  "key31": "3jNuNAiYvR2fFxdQuGP6kMhBQQB24wVaTHyWDxLEtTakKhHMARvyDrL8FmQcj7riC86ccpkjsuH2EftCCAefhFiY",
  "key32": "59CN5HXxLbPz2h7pgAaJAivuF6pA65GUvLbfYxhFnY7gysRVn2WzdhBbNRabUx3SigqjatoAWBHcAAmgHbsZWC7g",
  "key33": "5inewpj3e2fU8mnhK1JUv5iQb4aiRaZAhj8QeoTTeMtY3797oTdEVVPXDZDTgV3DuZkru21VX9iD4h4egri2R6dD",
  "key34": "4aFro2dXZQzMom6pZijtWrUp3TFnTZBj2kokymFhzfz8xGLUW6Vr49MaFh4ovfGEWmrHGrztiQP3pug515f6iA5P",
  "key35": "21AD2vrjac8WpVtnN5356iX6scwwGCwvSWWDmH3cQzrmsKMqWy7chMtr3eir786ReZdbyFv3mvwGKMpbCitAX9Nx",
  "key36": "2AWYchrjUbvTJC551fh97eHzAbTrVE6bw6uYAZCu1rxfdAB5zJXfVphDbQ4BQy1htrb45dFaDAu5j5CVuNWw8M34",
  "key37": "qC2HLXwTnkoiCzDqF5XJNtpRJPsYUGBk1szEzxwwc6dosVhMch4PuZvzQFnVRXDLZyD4FUCzAf5uDYJ4ojUxzQG",
  "key38": "2xQTUGNSYMjwLTRScJB7kCefAXw187gXfywEJ4ZPPxQb8jyNAvtFsdGWCAZ53QYaN5gcJNTdVSZgioW2MiKU2Qx6",
  "key39": "4EEzUECATgF92EZyTvkSeAJmiAmbZFghB2Z3317Qhp93tZCezEP7zJdXURAxqmxZMwvzmwAnJ7H2RZ2ZCLdzGuLF",
  "key40": "VVD5mXgzDcLM4ENL6eBvKRJ8ARn1d3heHSKwDh43PGJFsrn6kYdMKKc23ydJzD5x6XcLupu1BybNgg4PmWp5UwW"
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
