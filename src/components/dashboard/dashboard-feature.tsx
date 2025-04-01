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
    "4XipUbiGki3ytuSEdfKTqFP4cpMz3WmU4DSwfm9Hyf1PXFnTJMvjkJrCidEV78E7BboFwDGQWUDfoGeGvtvoWdhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52LugHN31Q5n5wYnTR35e1tSFyLmtcA3qQr1afiyPLMhPMvinxzXeXBXU13cXuiyHbVYkz6ue3wMC3os4jbWCtaP",
  "key1": "3iEpHCG77M2FZdeHkXgAzvP2DQQaWEqnoRxQCz2AwK6hpNCHADQLQRzjsKJr3xth71h7uFay3Jv5f23KUchjMQJW",
  "key2": "3T9t3emcecfDMPPfyvAfQA1KrCzvCPu4TmuDpS57dEu2B8v4ibLeBTz69wPBQoBzMaLyJhuzpV5XNkjWKYY1HGte",
  "key3": "2fDZ4iMgtCPmeYVpe12rYuBnvqKA8vDZeTNoAKRdRDmtEdnwn9tuPXEj6nRX4SUTSNFvKzVx5YTn2sTQBdZ7wxzM",
  "key4": "3Cd1z7T26XUHwreusx3AGWNxzRHtVmxFR8FnRcvjrEPPwXxbXbjnjd9cLxd2VCFxDQDdqzD9qXGKd4qHqNFoi3Fd",
  "key5": "2yDACFYCRjNZmFPx5rQLb1YF4xmbjTEjXKJUhEi3BztEQvQSHeeJHmcJqBrDtdQ2TRFbVAPUgGp6w311pZ89rqvL",
  "key6": "CfruyigKNgNnTWE2rKWB1hBcnNcrs9aobQVkBRgGrP1LwooVbw2LMpkghsm4iZLCpRaAeDy9RRJfHjnVyPFBFZG",
  "key7": "3VVZsGGhVfFwrJYQNpvH3V4d7Hgae5kPQm7r4h7gnFav73KkkPa3LatqoXWhBCxpTMg65WMLXDpTyofWfPAtWuGU",
  "key8": "3nHWioYPv1m7aTKnkVuKaviUchKpig2G4z1h43odnBSAzQT8i7jJTvg2bdPBSVButVedCN1hex2ghLej14bYiVGV",
  "key9": "3gwKMUGjZsfb2ZrMPVRyAr6q5xJd87XWKeoJ6Pa9UW8PfCzizVaa8ST53MPBXx91gj5VQUjNRhQ8637qkx2nc9pQ",
  "key10": "2a8K5XD6PRitF829NtRJNgCbRHkrEaaK1QKooc2xij6THQpQXsgw9dL2Ap8xDVXx7q7mt4WeRep6oShd6YScV4Kr",
  "key11": "5vuQRYm4Rerj3h3ZibXfdHX3PD3D85XVrKveCobph8FWQuqgcZX61o77tXwgsGdSJq3Sj9MZfAWrdPwwMu5rSNdH",
  "key12": "3LkMVpa2rErveVnErkHWj63fFKfjULmUGEFRLw8co6fvbp28gojA5YB5oEzSNTbor1CksEcEAo32DdH8kwvde2iT",
  "key13": "54JvwQoSaCHGSjxEohA7z65qeXmsmeE7Ac8aSnouvRcgSb7BgK4A1V6MeyXndpt5ZH8p8DFcD9Jueh5xBwcn8RHX",
  "key14": "2YNytwF51MainDWT7qJCDTBzBt9umLtjLbaUzQNMQQtfk4oXynycv4KdxNokmYALMEfFSeVH21c23ZiwkFSjxZng",
  "key15": "3sV5oq6uLHwFb1Beh6FQz94yRR5ZQtgpS4RymvQxgdoQu8kRUqiQ7UVKtaZCg67KL3oqGNMHkLgR96Ewn6xkUC8r",
  "key16": "3Z3H4XmN6ZZsdAXMwMtomeJbANfKZrUvLsBzpo6MdXF2UkKyA7bMfkoAmwW942DhKH6YjLUU8ayLYAnMY88m5W9Q",
  "key17": "4c2XZNkKoPkQrZAF9A3e4ozABw6epX8kvGty9YZnh1P8q4KF3PLEod6UuJgbt5onAzYFLhHAUg1rg6GoGMfkbMMf",
  "key18": "d2zc7xU6dydiFeyzW17mvSrqe2ERNRbqKb4GMz5kTBYofa1Y4kgr3CPG9SpUhTLHWdcEh6m8ZBLnWmW85DGZi8b",
  "key19": "22Q24pL9PD1SF6UUyd6QknFvnExsnogznKxFgCgRBL1kZGc6bnF6XefoLCei1Y2yTGpu3vYFLxs8Mz3b4iGJjJbg",
  "key20": "3dLfz9yZHJvBN8NHLuFQrX5qP9smBX6gQhwUa4Wgv3HBxQHCU9m8VDNEJQxoeSv36PXa8oCAzdaf1sVEz6Kisy9B",
  "key21": "2BsychvjBvgtnB8VkVbpr6NjtNUwTg6yNmvv7Jo1LVm1UByzfBoX34uQdBV6F7JemFFj88UKSoN45fpJ3HqxvJ91",
  "key22": "ExndkDZEoGfPbZEVpvHVoSdNqp7Rg7q8bcEPFjiKNFMFpLRhym84D8BRQA8Wi6NVEKf4kqnheAd1cL5QvKQWEUd",
  "key23": "3ia8ErqoLfNhLtcyquoghDjDhdDji49PwyEbcHWZVWbygaaosfNtfoQP6GGWCxURPnrBmKiBb6cjpToq86FaCxz4",
  "key24": "4eXPuN5YaaoMM9Sdy2dqoHzB5JuvZaMrUHTpamCeXSK5jNMJJnAyhWhiR8hhJL4ht4GNkR7FYZSwr9cXAXv7ugKd",
  "key25": "3rc3e5SVq5gAmxyJktmTw1fJxnH5o43dWp15chYsUzVZpDPgoCiaLdo21nCg2be8HifSPwdJrzQKYJwYHp6NifLS",
  "key26": "3Fr6CGLvxexmBHvkSJUeHoMTq3Q7xSNGegz78y7cW1XH76qfozxZTCyjsXD78YkrP7WFf2ypBgvAP6jPWLg2FZhd",
  "key27": "3mwHEGmi195CGMSPvRQkTCf7SxSwcaHrbc8BpRgteE4299UwiiQXdiA7A4eknpW9MV4SBYJ8LBwWpve1EeDeKeFG",
  "key28": "3Mo35w6tN2zLyQfDuYjh7J4DCCZkphcKgCSvL4iWsJ6grhWZZgn86xVmRVf6vejnS4Qh3bhP5SV89FXvezMuKjT5",
  "key29": "uWSHDZxtC5mptt2FaSbxKCcTqUxiwevUJsB2K2S4C4Z59H1DMCbU82crd8iHj9ZHTXqFRSMRtyikga5aqSA67Rf",
  "key30": "tJZ82vsjre58FziY22Zvx96eRAHtgwfPAzN6QZ3TiM7ML1aZvxYJi5s1srvKQGZvDtn5o1RBSaXsQh34c5opzhn",
  "key31": "w4v99avt2ztEceDmrcYWoXpdEG7LLfG2BmxEXXhw6rf1ged9BaYTaJigE5XqwLSAJdRioU5nQPzmpZCdzVYx1E3",
  "key32": "2NmirQ5NmwiBRrCbRkKHaQZi1jt5zW8z8BvqLCsfQYiUFEvS9TrybWS6zfgtCi4EHfeLCGCgVPpe1d45nYfPidtG",
  "key33": "3GTHjdm1mxpwUG8N7GfB6LSni3GoSXtbjAPPwaaEEUhhFUvEpvQXhHJTkh9Wn4yv2Ai4Njkm7r4G7LPU8eZqGzPG",
  "key34": "UUKmrB9A3gD1MMWeHPJnDi7zoHYxpTQp7ZiCABFZgRwtvHEf3jj2x4ksfxmJEbssNEBJFoh9f2GPAZDVfsom9h2",
  "key35": "5kX1mW5ownpjNhoy6wnpRP6Ui4wvUZoaZvWsbYeCqhSiJx3cMAkj1ZPncsuSDLQ7vpVt7r4wMb3ir42pZmq6182y",
  "key36": "5kwpsUTRJmjwDXLHYxvpqS3vExn2EYv5sFSdtuJP5XfM7hYXMe42J4fpKgo4qTHnDU9EfusYEY17mb8cQ4BZfuni",
  "key37": "54g9wEZrpENpz88tAHi16LpBmNnD36Fz73WssUHuVPmZjvHP6J1aoDCGQv5ma9Uwya92jmmxzcSP7KvejoEz2dxi",
  "key38": "52t2WXS6exWd8zcpsVSMQrzJtphMGPZHXwxKWni93aPNmVbns2ePGudqdRWxsaNYZMRJZqbrU4b1EfiTzyYKU5cp",
  "key39": "Nuu45KuCWyTqrh7bB91daZ4JEbazh2xQSy2vjmdTBe43VQBMsS5DckBAcJfdmq1PZQvRBPuP7ULCjoZD9huN6Av",
  "key40": "2Y55RsC6opZVtxKEk3KTR2AKpMA7wV3B4nqDv1BhcbhfJg5mybgvnTBTQ5i14WPTBpXjvLxPwGt1uVVAYTtM17ff",
  "key41": "44q1B5cUBvKZTBJPi1VCWgp56SGJDg57octMAWUPQFKZGqcWjoQV3E32reL5kdY3KzZccCS2ZePcCCd9H13gLv24",
  "key42": "2NH3NiH3iAmuzwBT7uKaTdABW6YJzhy9JCoVfeJYdJRsmf2CTAZdojiXSQeig8QgiEYZ6xrCWd7jLb57xmbpfHNJ",
  "key43": "pgNYqFxjftexNuLL5didzBSfwNivgttjfQaaBC247cMbPdQjdkEtLwtqx1CNKjhP3P6qpWwquPBxS4ggSco9fnC"
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
