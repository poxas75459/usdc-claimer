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
    "9xeKovZNwK2aFZW8uUup5g1u7P8JChgGq3qUWSdbdxyFzZ2T7GLbH81b9jUKTUgoQ63Hoy7ANcQyMGjgtbJNQ1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43zNrvf3j8Qz2n33buecuqnPuM8H5PZ4xQ97n94RZ1fYpZFdeweBeVAh1B5a84xwjQSXmKAJ1hp3dwQ3Ba42FMeR",
  "key1": "5MGehmix8W6ZHC6dYaH4vF6FUKxwTmCuXYjVrsXAFbYz1gkaLy7FRjQKJk6MCCpGeJV1FJYFCy3GPxJBhjbjiMFH",
  "key2": "vTiExzeD3n6kAmw6icnok7Xdq7oijLgTpFhNF2nr3u55A3ZgeMF4WX7YX6L7uVUvLzhzp9tnj1PzHBT5AmCGrAk",
  "key3": "vG9att6YDCph9mfaovkquXVpv4E7uXrAjKuemaVtDS8FzfeSxeZXenLe3FRUbqtjWKiriTb6EJVDq754U2rSJRL",
  "key4": "22BhtoiY7CQRQzuahG24ex2dd9Arj6LbftqXDbWZuMH7JahdH3rXR4xjZupdqvQGuEDYqBrQAHFxYRyfgMfBo513",
  "key5": "5k1i9ahXdHe7nVihXWtLEvP1xmFJjYrdmjgiGVVhpJrUGcrRNuwcjV3rXagWhau8tmSQ7ig8EvT4oLQTEfcksTXe",
  "key6": "2qLt6gyZsF6mx5eTUwonsQ4TG3HKWWzSmWEARFmktV1zmgvpct7zJJbJahR3JWhCntHkxGBLp56SdXeqnQ94z3nP",
  "key7": "57CwZVdF8EEMaKSjAj4ZqYL5tSDoAbouHwSAH3WHEBSFqimU3bk2sLqVm4zw5fNEEq41CJmakbchUJPv6mSWshsS",
  "key8": "4QvzrMVNtNP21zwcm9hLpmY3vGb4SNpWjf1Gwgyf8uDV7TLwg23JfsBiETUywgfV2wLysVX36gphPfSKZxQLvKde",
  "key9": "3AAgDtrroSeynTTJYAHn25hz4aQQSaBgvuYiHfyeYJpKexct6wN6fxdr7h9goCujtnR8n7M9okm2aY5nsVCw25B5",
  "key10": "3Z6WRBqX6umCgDfbcSQKzJJKE2iUKkyAwrQmWcqEnr48WhDx4xSGpFdsuG7DPJLm7bxH6VEH1npUsxM6AGGoEDPa",
  "key11": "w1KTV3o82EgSmRmMNk4tpJHN5jfirwtWRN6s9AqW4YGKbznyBMV9n7fDgqgiu5pxUz3RrsKxHcu2mwdj712F68J",
  "key12": "4fzMGmjnEmUreis97Ewi9LzaAxKwMM4e9AjxJikTP7Q8Aok3tqcxo9DnY2m7Hyhe41NUMhteP8UKXVVxRa4v111h",
  "key13": "zFnyJQBxDdBKXcJBz9oTjKpwb9GMown3S1iv3iKGpQLVmBhzSVrYnAnjF32jmbDnM5xVN2Wxh7tgkJzzfjeR8H2",
  "key14": "2iRG31pV9uSULc8Zzjp99k5ty6xprnqwD6Jx8mcYAT1TwKHo878NKMUYYDW35FLGCge6U2C116hwXzWxcT6aZcxs",
  "key15": "2zGaf8N75T4DXDc97iZTkZDjp8Fh5sKT6RMvzBGHnjVzN2iTKCMRpqZqChYs3YobQCNS39fCEfRz7EmuC9B9DyZU",
  "key16": "UrTdYkKZCkJhs5WsH75nh2H4J1Hb3NmmrBSkGVvszVb9Khcy3UQDk7D95QoHZdrP6wAEVczp9apnvL4VTFXMFNm",
  "key17": "4kbDCgy9mwbRUFs2vY7Fs1XRybR1ZGrt9PeXG3M5PbqzNQ6jFQJ2X9xV3DTDrXPxEamwbbPnCJJ2QunhFMAzzA2c",
  "key18": "2RdYnernRFp5WT1sUwJJGcSHAUbjyHDYuwddEsMbcSYSNGYG8xY4wwT9sEaZsMpnW2Rbg4CdpsuKJ9q7vrAbrmc6",
  "key19": "4k1Ktv61Lh33ygXUcXbzD9uS2MyxSWBTW8efEJnh2RF4MDNhMBnJ1ASdFoZz9wc9fP2LrAH9UDSGJA2kcGRtKidr",
  "key20": "664yeF61dVDtCi4cyqnXsa7Pk57UyB57H7H1JQ2e81zvjQa7NAPrKpcyAcTSYUNTTMQfuttjtvoucb9DFth3hN1H",
  "key21": "FCUmuSKQXAvtqwirpEWiX2hafLBjqP47YFDd5U9d8HpwBa1EBXGHCxQEfHCjDfzePJNKmPNihmLwZ7eFSNdRfjX",
  "key22": "5v3DBwa6f7t9V7Yf7rtHDbAmpHjHrbU5ehXmYRvhR2S9nP2sUXgWcpwvJGDEJkF5axvCUppLKYUrSYNiYn55B8ei",
  "key23": "eiRi7CC9uP2bDEPK7N2RNvHaCpA8s1rhuoNvDM826uMKPEPuxAS6vcaQcSZSpBThA2wUDnaQY5sEPAP6xAEFbd5",
  "key24": "618jztUzt4Mb2tNLCmhcvsczC8aFjpoHXTiBRxLtHeqAw1pUz43Ggke5xmw2rc8Kvh6eDhv2KJ1Udjwo6AhPtALd",
  "key25": "2AxMLqqGJjEVrdzindqb3MjfdbjnFdeBmw76Me7AmJRTrwtxjSFYvF7K83E3ACfseoUCdL4T5gLXbXraRpaNpo7Q",
  "key26": "4Vf38DXyNXbbupuQiPLsbP6bgrVcmLMMnAmpZtFkk1RxG4iQ6qvixbXRk3rhR8utnUHyb1ZuTpaL5Wmt3NBQ6JyY",
  "key27": "4atK9HsFEGZSzkhgiPRZsxSNs7G5FfAjo1NBzRWLdewEaboThtpyJpchY4Qj4R41dd5oBPgNB67BB9KeBNu3D7YQ",
  "key28": "4s7y1nwsPDKqaAwD6f8Hkwcrd5HVbae6PRC7vJCPwGbdjtZ2wT9pGje8WrEMFzx34PBcMtPxVi4EDBeSS4uhfGA",
  "key29": "5BxdpRWLwLjdXhN6CP922PHztio2tSCYjeUm68S9kGTrg1zPxne2BNY6PwTpobQkpYjpndZmV9WPpAE4Ty6ULrqt",
  "key30": "3F42LMg6M1P1eA6mj72BLwuKE1Zr7rSXvuf2hmbJe6Skf1MSGGmx3MovsyzM4ciobjjj8gxoc9cK3UZhVvymU4SQ",
  "key31": "3LnbMCzCdnxm55Y1FzMdQpZ8Ah7waoFF2bzNuCjgNtyScL1zJWH3uQu69HEyoQmr7JbhddpEFahZX5BZet9n1Fx4",
  "key32": "4MmjAhF2b7jmBwY8o6N3EH36tzzmGweu8vWvDJg4eMYuXsvkS6pPCZ4v1i6quPG1vRSdvMqEjsuJh5EJFMunfGws",
  "key33": "5TnC5cK3P1phw1wzDKoyLcxedqRt1wEosLkHpf5akAhFzQeEgrFUW1YeGBGLBXHUosVTkPfXp5xEEy57JzwPcACo",
  "key34": "5iRCLRUZWQQrveaLVybVQsKS9yjbXgFJa1mExLH1p4omNg2FB2QLTxmTVqND1iSfdSrngQVyESByAtGG4mYbddmX",
  "key35": "4phaEshEVLiiLnxXxAyHvYSZLcHz7uQ5upXkPGwivNspWL1GXdETrub2Rt1kzUaE8jwrqSYUCGMsNV73AcqyogL1",
  "key36": "5SaKE5FuJ2BqSJqn9H9gWJ21iFtJYgJqRMefLUP2Hh36uVDCJd7n9MZ6miNrpmgzE99aYyshjXHzsHc3vYgMidW8",
  "key37": "2iMd6xJ7HZkirnSc9qLPyy9iNe85n1tfQNknym55NghVbfqwd7pAjzWDm6fgahvL3KGoyzgBQp5FHTZSXurxSEBn"
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
