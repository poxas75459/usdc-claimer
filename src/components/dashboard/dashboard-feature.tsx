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
    "391VFU7oJXDWikEStm1oKficotBPwoVpEQx6ubzrskpMXZfSH9NQNsmpTXq9ChpsTVMDUF9Jafxb3fGjFijEavCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xCvFWuDfUaCejMMevtecP2WZzWK9ze5m5xw28tB6zVxRJLfgRr3r6Px1QPmt6XjKSZbh2wVAYYGtqb7mn6f4hbS",
  "key1": "3BbPGLG4uP4iBWSxYEd6LWeRynYLuruALtsVocnC71wvzf3NdMmNqo5ZyxDkGMu6XXVgyvijQ9f4bLbiDRcDZg6w",
  "key2": "2N2D1aufgK3qHzo5MDtqHENuy1RKLKXWGEU3VkzGfwCGCjx1JoaCW7zP5adGWrSddQtPNEqtnjWdDAhXnQugp1v4",
  "key3": "4USawrvjdqJyNh3BPbuL6SwypStDjYZp359qSt5qqDhJDu4JkwtdrLpkoYE3eZ8sQ29boQ4KWsez6bd8x3E6dwvj",
  "key4": "5E3Sr75Mih3rWVkzSiC55YJ2SnPsbVRjQ8hFmc73MoHqGYa2R2v7xdRGCDhu2j4d3XeuYE616d1wQbzUtWpMm5Ux",
  "key5": "QXs9KQLsT249DgsQeQ4rQcyW56RQNvVfziFb34RueJ8VhHQxe8N3ujzkPNZv2TTBMWCPF4NK3po1Y7XondMKJpQ",
  "key6": "5fG3z9BEukzrRr51zTDyeBgXX4oZ9zDYPxG9CvfV5vJGCcbADBAzfzFZRXEZQyhn26toprBWsLo3L9SindzCnUjv",
  "key7": "3DoiG51sgD28AYSV9fHz5DRbid1iBQC5nPJed4hcBAb1sw7HAZiaPPHbm89CqZ6Mw2gUJBtiJJKgpjzV9Xt8ieEe",
  "key8": "3mmsiCZvWnYRQPBTZ3CQdJGJwn3smjnmeeqdgHTzDFJYUSELt9kKmyezKMm7z9D8V54sL3U8ub7fSvQEVRvzehRK",
  "key9": "3inqQi5DWoEf6o9hwjEPrTtw9EVKju3pvhYVbTU7pzsNR1LojPPU4PyQXEuNXeH8P23nFErsmZq9iiqhjpaknn5x",
  "key10": "gFWJd3yhJXp3sdXmUg7nWEaEP6j9x5GeuJBYwJT6wnn8AL3DTJALWJM4rNRM6Kc9MyHACQSLwENqJxE6fN7g27k",
  "key11": "2msLZD82ud2R5QTP3vhNTsTf7KVzYqPsrMzdPL6QHQATcnpRJohg13khNBUPxgkwpU9YrTFYqLXEgwzeJB2TRL3p",
  "key12": "2rtmTZPCixHC4Tgy9me2FEXxKZth5qsjqEpXSMZgB6oNJHRgfj8VkK4CwWL1gNZqbb3rGJcJoyKaUbX6mTPMaKaN",
  "key13": "56wPuBGcb1hXgxJupHWdZWzd2BpgqRkHyS8QbKxjLPiZqwB2R98C3viJchoQKnePsuc3PFL9woao7wFdN2xSUShK",
  "key14": "qWRaJriRQLnFU9vYEAnBASnxgcmnZmiqGi6kKCrkjdiFS5Fh4jibHXNeWQLMg9miVxsYEWMeaLbnnYArHDR95nT",
  "key15": "5iXyRvRjCAvBVpEaHPPW93kMYfSGdD1DssNy3SbCuFc1kXP1YobxVbSTRc8PU31LyJYjFhYT2mPKmTWy8aJRdKmz",
  "key16": "4Jsb3znDKfB21DP6Y3o7AUiDbro7CXBxvUms2uNHAKkmCTz75dbdbze4tBnw4KkmrYNXsvevKWNRv1nZ1YBokHk1",
  "key17": "2jrUT2KkxvgjGKmH6Ctz36CKWdz9p6hyt1ogi9C14v6Wd7gw8zUMsR1JxgiuChLXcC6dz5vTuXsYmRxJ5SfE7KR9",
  "key18": "62vWc2gPB2Hvq6xA7XX1ws9foZ7E2e45mSjjkBGEEKVCtRrgpStrdMwrr8MN6qbSh3Evde45pAasSCAKmRrtS2dC",
  "key19": "4DubBdHjyfrVoXRMw1kt66xrssQxYjXBnFHctxpm4UV4bYC5PjKvAuHj5Ab4s9ztahGZVKmJUUzryeupk2boRnYN",
  "key20": "674JGCeK7KTtR14NygatJYFWx3DGh8he12Z7eE5vWqsfx79uawHfEoyffvJ2kb7zLPypreC3C2GrRzaxjbm9F9aS",
  "key21": "92X1Bk7REhgwRvwpaJJpJDK4xb2gCFqwLuPEiEbbhXHcGG4NDfnPwgJXdnuh8avBwf3kbLheE1R1WPkYDZWaGS2",
  "key22": "3b294xvduCiTsRAu3FZ1pmmwNjqkYACkgaH597Loqe2YWUahUnPJDBvpFS2jnh1foD9x44q5uU2XNgDbbujPbDW4",
  "key23": "G4HTaWHYj7wh3JKnfq2GkMcDvYWWQ7337JsXKoXKZvcQRsCv4DphpnX5eTe8Kj8ZmeX62AuvbLMshZbVsFyVR6Z",
  "key24": "3Vq7Urp2VD2So5jEHJ24L4SGYtQbVmfiUvMQdZ7QvBgS1RgNSUk8RX12dcpjEgJWVZwdWvA8SdwaDhLYWzhDNsi9",
  "key25": "4nH5pe6Mf9TmUNPKAhv5vV1fQkxyBSH1DGqneLe7PKwXoVUKKcyJofktYbdjKPBqRDgmRS327zVnhB8a2cPyzUDz",
  "key26": "3dEVxbJU1B6TjVXPgw46gkx6x41f4ouBKTEht2etY4uhgnAS9kBY5mS7C28at8CQRznNfMfJ1Y4kBzLgZagoDkgm",
  "key27": "2LbtsWrGSoWz7xNpYd3jmpBYJwnnZ38zcnLyAWabVQknzcWbbp8d1RZktiZYRaSSUNZT189mKkH9ZYDvjzRdCd6x",
  "key28": "5sR1Lo54B73PB7B1jKjQx9Qg4iXzqSiUNzw9W8N4CebhixU87A7Zv3bZpa8opC8Se3YsXAWhVE3WATqgezHab4Dj",
  "key29": "5P3kFgTfuFPKztGUbmEyxxHeeBjZ4P4QM2WjzBLvRmgBWKoXTrpgvefkH4L3aY7AmRLEWsZoHjoKd8T5rzpLh5oa",
  "key30": "2DzWiFpJFmavUzYnVDxKrFEVqgKg6KKC2UyQmEkDn2mWMxo8nxpTJn4XdwaS8xT4swXRRgnpq3ebuE9X5YxTADCc",
  "key31": "2KDGvAUK8UXqCYFbnpr5ekR1G2LUn77Wp1kvxEgtbQia5nRc1MafrnpNyiSqd3MBE1JSBnw2brSr7exL9wb9SBzF",
  "key32": "2Xz4KsK5zQKtMxkFekLQAXBpXEGXkh7jJp3TnzrzkPQFsNbQarku3xZE4FMAiXipBY8LfdXu4hrCKniZ91ELfVFV",
  "key33": "b7pEbGxHjMKabdxnnQ1NBapcco6bu1wxHEzXYLJr8YjFa4U2GiyUTuWVRx5Uc22EH91PgHzmpDgWoc19SmVdcBN",
  "key34": "4WM2t5cnSXWaSQZASpeJcPumWvdbhwJPp2xwJUprKYvZSEW5ExmYBJFnWz72VcWhgXHxc35sMhTHEpFgoZToeWMS",
  "key35": "4hHB7c5zn5yJPxyH9YFqA2F61xZiNWRnDriYqba4ndrqSJZzjFQqnwDsjGx2de7cNcmhKubk66ZE9ArBTgq164Zq",
  "key36": "3Akbap7o3VTdNX9yRyvNP8skzXi9kkx3RePffGcKhdaTmCvoaRPTTrMMG1fEnTfyHcqp76K3EEkbyT9jRxJ2Sj7A",
  "key37": "Mxf1CfjGcQQNUwSNWapsizcE6QuhhSdBoZXNTNpoVaagi53Y6jSrJrvkyW1Q2jmifaMvX5N99suPGLP8sLvd2ss",
  "key38": "3wrohAdvXaH3YvMsMQn9jR6B3cTbMCTmvYZ4bjuSL2okE8A8fgL8nS7FFgiK8pX9dWzTZD9kU1S6a7eDCfGrZDzz",
  "key39": "3cgWCrgTJ5rZXK68HbUm33E2NTd9LNpVD4L8joKQGMaWPqqeTPE2RGgj2JGK1CTYkedoFwbrHTXtWcKnU86M6ytB",
  "key40": "4Qi6gJky6ANuJ7CwJx5mjbTGghBcuW5tTzenqouV8iCHyWknpnTLz5oJZBM2aSkhmxb5heLNxxfuTwhfQFTJf2Jw",
  "key41": "5SuLQxvdzEfZNBy4nsJSuuNkpqrgVZRk6YuHGtCfFZjd1hSbfZwYF9heX3XofF9SkcdXBScFiAfsMVFsDquGBc68",
  "key42": "2AXot29UvVY2n8aChb4fhQ6zmEh8cha2Nzd1a24o9VhDRc5J8MLYcy4d4mt7pZfNTbnyRSR4fXDjk6F37DhDmzmJ",
  "key43": "puTLEdofhL3yBMaGjHKW47xd1Foe5ewF7cjN13LCuvib3hLb5GFDPU5AoH7Rmz7pKKwDZxEMFaPir5dpwqHmEHE",
  "key44": "yhLCY5h7qiTq2J4aCnncX49WRSWjBjZLGuAj8o3EajjTAv1KSyiPMmrAnvMgtGbzTKowHzrWPtRVbvNgPTwwEvo",
  "key45": "3NL5FsopxDpKz3fzKAHKn7t9J1E2piigHTweVdg6Mc56gssWmsbc6cegJbU5rr5anrAiniL6gv8qdByqg9WodtKL",
  "key46": "5jgiXAALRMsRoK6bpni2z7F3kTuxjZ7JikzmpFcbcAhBDfKADrzqVPYG6kGXuCWmW9UeufGYJZovcCVUnombkAnK",
  "key47": "R5cpUivFRLxdUMXpf8AbwH4XrxEdHCHcbpPSZ7J8ZykC4424KTxQ1RaZY2UQdELzQi6dypyaosgGpoUVevK9HKR",
  "key48": "5DYN7MP6M4kLpNUJKnNjNUq1rKAkqdWYk8KqNPfEFHkfKAY4PArSzKpgd4aDcAsritpQHZDPNEzRTVMa1MGYoUkS",
  "key49": "6haGHzkFXKNJsa8TpsGXirruBd1aDQRPu1K1QWeywiVnnPfii7XwUvvG36NcPZtALAZtZiZvBpfW475FF2ahhT9"
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
