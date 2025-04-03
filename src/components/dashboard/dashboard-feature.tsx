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
    "5EDu2ZdE4DCqHtt44SqcG5Wc3xDUbtUZufa4DF4be1PChetxbxieEPmMeX8PE3sByU86zLskCnam8xGV3sq9xQaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A5ArigkfsmprVVrQjUnii9BBSDxFqKjqiM1LoUZwGvBvzXS7RoVLwbo2w97wP2yC6cHs37aQsbfhEyyyAo8L926",
  "key1": "5E5QdT7QDjHDzBw21x6NjgnQLWhjC4uWBRmKQxNR3rbYh9rMtb4eECrWK6e5S9SCgvB34v8z2dnQFycjZgRxWT9h",
  "key2": "2QfyuByagjVN5JMeTkcsbCbhuikdHzww9Jk2ANM4RUGQeQ91RDKyozt8oBkCAW9mtaKSBjHw32KmdUKQjeZxbgHp",
  "key3": "4nuqC7v1CH5Jk3NWfKxm1g73CSmq8HYy7d6uTVyKkTFHMqoy9iBAxWbn5MXy1yhYp3MA43vVfPFpJXtT3p4pNsi7",
  "key4": "4XB8WCMw16XtDSLdm1tsSaY2SoTborydiAmEsX6WXfVE1QKMXWt4nMyZWzZs7SmBVfEdaYLq3xkVaB7MCBS4ZbFN",
  "key5": "64ubioCHyFZrzUi6YnTCAFYNoctt2NbHCNQaRa9uvXNW38TC4DKxGm3iYSHdQMrnxwAvR4Nkg38BWjEoAwvWR86U",
  "key6": "XSeX83S8rzxFeApCPRzji8iM1eLjJV2YYZGhyPFNebjpvMM87oneb2gma2eTjKxNaetteUZLvjsqAmSiDjaT966",
  "key7": "2kE7xbFYc8PguS3YQ8VejDXB8BMGDY3PSfagTU6sNc22WNaaZeK3sPg46FqTeojhMk6xthRKd36VsafSe3WSpf8H",
  "key8": "4Y1V8Q97HADKYqqUPwXsrPJ9EGkHihMDqDUyDPciQLgB9TjAiFxmNTCSsUEYhfpcVGHtdZe2Sq8wfBYLdSXAqUvy",
  "key9": "2XpMg9fMRfasxUN5xcnNuZhn1aEa4mQFMh3LtndeSb162q2UgHs7voC4JhQVvCquW2WjZ9oWU3RHrcApdSsQ9o1Q",
  "key10": "5D7UqxZhpSWA2EqdnRL9SsJ3C4agQXN8nLE64i49yayr1hbE1jzkqvA33RX71aD3uAZ2mt2uhf84FdpSSjFAjyMr",
  "key11": "45U9Tyqu6yXWwnsfr4RmAH7KpZXeKXPtR3xnRTU4QWJC64F9ZyjsCuDTRpVUTaJjFgni9ZZ4avDSXf22wvMVYVoK",
  "key12": "2CSFT2dms1V5RnN3fCwbVC8t33qUbdemPJr4SJRYUzZAdrsWMY6VNhCeMo2foor9ECaU4r5isNJyPJ9TG9sf3HDU",
  "key13": "2dcFkJ5jUGtr8YYfsyYHUkmxJs2UGAQTmYkKPJnS9qHqhyXfCQQJHtagvQFs5T1zswvoFJgs2dW3PV1Pf2zi4QvD",
  "key14": "3shMy1L7rUzdizt79kQT42kea28e7ygg4hgK9Jvo4kP47TDo7RT69NUpsnHdsewkuofSzY5uQtafEnYmf3P3LyMS",
  "key15": "3FseE93wPGzohgymWBJ7sBukCCci6sMQyV8bbRJ52zgrvMyoNTTXFaUiiHoYq6JTwTZ12UK3H9a1VUhSQRyo6Xst",
  "key16": "21HZbmXkHq9rkLiEQGyKowcQeN1QFfhFXyfPJWt1VLRQAdKUE1mumGtPWdxtWtHrbSFAkQcZXcJgJ2BQg7JMCpdF",
  "key17": "41zgJsEGzyMrUnU9825G46vY6Rrpjb6mNwuRMfHiMhXZx7DNhgoEw2qN5EADfMYeJLSMGhHuhXVxfG5ptmizpGqy",
  "key18": "2my1eiwZN4DRziLwNk6dDE6tm1HUXAxsvdDmoz6TG5cnD67jgFNM9SxED3qobjtiD5xpeJbo6JX8im5g3c3oD72N",
  "key19": "3fCS9mHaaLdM3wZwb6oyGZ15P7r5K25QcPnUNwS7kx88Xqa9kvA6BrSdLq1n7a8eunUCaDbezm5kzptwiaC1CzJa",
  "key20": "4TWuiMzwjcDrXiKePXaDQHBeAnQQPgz33V4HwGdchocJsY9vys6P2rKQsUgqPV8wgeuiF5P2nGH4hfySf5XFfZow",
  "key21": "4bBnRiSpcc8zgryxyZKPxxGX7MQmzxmqLoFL7j5MSvqFSZ1uWpSEsSQpN4SMEuVEMaTF9oa21JkfdL2MnM92BQCb",
  "key22": "2FCqgXLJPskr4KYNkmso7g9E4dyaBWiRoFvqS16G4Pfkbr3gBinTApMSCqTjPfB3ixCzdVfkXhXZrsBNoZc6fvk5",
  "key23": "2QvJELicr29rgUD8KoVXLzLTkZjvjk9Zt5tmb58rZEeczZydwGTwomeRCJGVxMQVyTZ4jb4v8oabxvY5pGnN8pW5",
  "key24": "3kYLzChFsLEEUvS336QUkg7F8KhtXptoUF3K8RqMPdteJfbwvRWhis2WJ2rY7kx6jPBu9pAVm39XA4JNfC1cUBv2",
  "key25": "re9cGoC38k5fLQEyQcP8hpVyPFCtWoNEztorbJcWFP5hRBUUFJ8snaHXHAi4JJd21uRPGe22jeDBNQc3RTvXfXZ",
  "key26": "MYkKd4xc5xMcDDSdKxP4VsH1LxGhW48XySBGJEPSRYaJqgcQFNhyXYHq1mdekxuFZ682fGtUpGjLrmwHann6bbB",
  "key27": "NdKkLf4Wz2iXuSxKuy71qEVPyv6xhJBqN3sAJQ9QURRXocDqJnCRRFgqqFzjPhPrrdCTodzFZUm2PGKLNMeNpbZ",
  "key28": "55cbuhBa42aEcHfdGJdozshjjPLbm4s1Rayhe467b3bw7AWGGRJqSHxHGmZriHGptfecJhhQ5cjykyw4PSWg4rb",
  "key29": "4CTvtYm4TfCSVjsEdnVUSjBrQxQ4zBJvVsHGVn63RvDo4EUGTgtqzdvxSLQPd44w4uoDcdoLq1V4bJjf2ifivfLU",
  "key30": "WGZagCKDtcuGZFT2ysvziMYKdXWhRp9jsyBhQVxx1bCQkdnx1eC2Hb4GgxmoGYkpYcrE1Ccnbd4EXqbxBHGpiWe",
  "key31": "3K6s337kqFxY5buU1XGgcWp7CfU8cciYfR4g3VPhQMRR4itYL8otuvP6fqtL3DFHJ5Vy9LYy6LqYDGunyXSBc1Mz",
  "key32": "4fMCoaDmgtA5RZi8S8bmFVG4dDFsbu6fLr1t2vvyPBQ2S65NdWzqWguRFMFCk1me7SeqM9SpSUpWgdZyzKaYav5N",
  "key33": "5oTzMQPtR7yvmzDNAqzq1JVMCspm65yZbi2U1RL8C6VUweBZNpTQQFCt5kkhtbmsjySern4TcZGC9xFCoTwA5umE",
  "key34": "4rv4LzCpvYKymcZmtv3tzpB4NzJqtmrM5izVkAEnrFeAvW2LzZ4u5jCvnD7DrJx1tjyRRbMGSo25fYCmxpjcG9sc",
  "key35": "3Ch28AXPnqmDknpMAeaM9MvWfMZ24hQQbYwQY9JY1AZJ4unFyvK1KQiqeUkBQgX1w2jurYqfdd4srV5KcgmFVoz1",
  "key36": "5XbzeYwtu4cc93RhTdcTARUcdznxa4UE7Wx4X7nNnUvZhKrg5jb2jRx7GhoEhcPTK6Mj4fgVPcPPdcN994XWwuSq",
  "key37": "37TXCt4qZTLeZV7DrwRsNPz8qn2X2xLx9qcifu4UUQY6CcG1teQoLDhjh4ZHNErdxb7E8iioZa6QP3z94L7eGFVS",
  "key38": "4gjx5AwRD2i9EPp76ZcYRZuyXfjMKiSK6vzSTr13UnRietXvdyyzaZjDn4Xh6qPE9k8XcLjxxSux9jRPf2MoYDrS",
  "key39": "3gpHStuaaMmJ8kJtS5qJ5fJ1maeVpetxjs2Zs5VVhEAAT4LC2qvJrpMmYNBuN1QVsYjZDRgKhyjHf4AQNVcSea1p",
  "key40": "4Jjvp7yQ9eC58wzCdW4cGCiFDpYVwRVjJV3tstbpomSkiFGHTschuZpb3KwzrPvBA4DEaBZetRUYZKB5JFGKWdPk"
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
