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
    "63UPBxxoxeaKcJnvD5PTnWXEGZhXoR3a4GKxRxs7eUAguq66KkaFpx2q3nzePTUyJHgRWVH3FptpqEBSCaeLDZVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iESveokE1SBZTfGFVct5PbSvWYhEzG6XmUtj8AtZwYh9f8eCJQ6MNYGxozfZ6in8brMofL8ZxWecVtk98FHKHDz",
  "key1": "4CCBPmtsbyQxeHVfmQkXHHW8yqnLFZdZQfNCtnfRZ5MtXLs9n5wRNiWfLczuySHfQc1bNFSvrykVkoebhJxqLegH",
  "key2": "y4shyTqr5JspG9hf6gp1jhLRx3sYJwH8qLMScvFQvHEL8z6jD1NYwrs338H8ry2qaNr4Kwuii7wn28ZNpJyjjTt",
  "key3": "HWMqpVz8pVcWz6GjfBBcNbw61kkx4LpFU68MN6JvyKiQR2rPtjvzgWqYc4DPbuy3aWrzLW8Fbbfxv7qgesNrgWv",
  "key4": "3uvYoqocLQg84NjHgh23NdYekTZkHXvUZDFyvwNCZXy5LsAgZXqTD1DrbyWXmPNZVSgGCbpm41ai5UTZDFkGR48v",
  "key5": "43f1ZqCj4ia9MgZMvjW1pFZ7qQQwZZRsvNxTKXdvz6EFQxWuX5U5wCAUfqai3vHMYgngXbp1k7bxXsVtcWDmhsKu",
  "key6": "4ABWHkw1LQcrnRDGxuijnePF8Kag4VemHnwpbki3iLkK5JJiLRg3uoWJ34eVHb5rBHy8KvnxaMdHsk3YE9VJjEg7",
  "key7": "2V4EtpLkcEohtXXLg1jMZRhSnsuSXQDFwUfSb8ht9ZGkKTWKkosCqGFDbMzfCiRkvCin9appygNEn5psWZLgvKZ6",
  "key8": "ZkchLcSYNpA6vYgQAoAbGN1rshzcgQz4ffUzfXkJwAimZAXK6zm2sJxcM2xn1K87ifJCCEAD5RPSf8jVBxkXjQo",
  "key9": "3uxgPKs2jchqJQBKjSfRpqW6NLbZKsuJswDRX6rnp7eTRBD3mvxmpSmGw9DZu4mdrdHdrCrtefsSFF4T6T4hnqLt",
  "key10": "4mJTciidmP9bCZhFFeX1Z2oAhevA96c2pHGZxqpQzXgs1q521R156jYNq84f4BdeRaADQUEjNbjc33ckuQzrNEYE",
  "key11": "2f9D2dR2W8nEQ6z64yfLthigR51XLsbj1aNhvoJmoHH4fdnEQ4PAy2FCoCeYNLw4NAmBPMoK9U6TvEsu9ec8MEyp",
  "key12": "3X7zzYVUvAeJPXjfiqzFWizwfEfVinDGjogrCtwTqRkNMf8KBPe2CZpxuxTrs97yQX8AecdDYZm7vDdCWHfoRv3S",
  "key13": "oghebtDKdRTD3HcG7YjbuwX1RPGb1pfmgUA3DgUAqvh4U4SZNn8HzbzaUANzdNc7dpTxaxiU1VhUDSXnTdFhRfd",
  "key14": "v2mghjDzB2DDrhyAJ3obbQ19oxJXuS19H1gs9RPeSgfvhgKUfpUiXFQRrYnPAA1gS45up59KjLt7MsuH2joAG9n",
  "key15": "3cxpiJA6D7Y5NR394k8eRdCkhtiA6EwgvafeVMxFSmpPpxzTwCYvDh1SetrumfSBRizwjJPMwW8fBm5sUod6X3b8",
  "key16": "GSySyayHVtkdx9Jcq1fuBzAcMoqS7ohpDLPkAJixCxnnVwuM93B2AUXiTJarBb7jmTGWsDhw5tvDhLPrKbw5a7B",
  "key17": "2GPPbaGqQoXMDAzgmrKRru8UPp1jijeLju8nU3kULYSU7LcidieJ9diFpmsfTZRPbnCK85JLwzSKZRWpA4wpS9A7",
  "key18": "2zQq5A5fYy2QFMrYt145h31HqkKTZq3TCkYmvuBWEQ5aep9togVGyxrzVqgWXEJZdBr7SEgPdcVAH1Qsco3RwEK7",
  "key19": "2gEbMsgWztyfNSDDBDey9fQ2LcuE25V1aqXrFam71NJ36kBcenxKeZQqnL5Nc2v3V4Vpkpy8mgQLBCj5h2qT9SDD",
  "key20": "5pa8AWNVsMPsLdQTnCcSGoqgtkRphsY6fCW5fRCd2kaUTc7Yv83jDqUhpvx9NZvsDKsxg8pZfUPVhKxhc4wV4JMD",
  "key21": "vqqNXREybuMZB6dkUeJ5aioqSH5UW3CReHxqTLrj6e7W6587eSMPYvmJyuNveptMRt5GN8DAgoamZS3suKr47Xg",
  "key22": "4c2QZfc6cV41LvAtwsr8vcrAs2n2dgna3VK1jkUTJSm85fAzaQh9ahhB3XgR1LkWruRyxZh3wEaBpQDJUPUnsT96",
  "key23": "oY9UhRXQ2exKcm8H5mCWcD4A2Awg251vowRMmCBZbqzw1GL1X44UPoT4Keq5Zwnh7brwUN38C9zyx25z1fwVFWX",
  "key24": "5hNejHxPt5RRhzfGED3VrmznseHiDMoE5rKBH9MmtpWiMM3rN6QbtjD1dKiZ7mg5AnQffYDEwDzZLmyscxyiFbP9",
  "key25": "5uCo51N22d9ewtFFoueKbrW6yR8MsEWMSaAdmJ7k3ucRZMCM12id2F41hNp1UN3ZJDUhxYLZxJwZrAbkjn7wJptD",
  "key26": "5T6g4AyiCaBi6x2xTxjz8KqW4JdoEH5qQAzLqxTpHcKp6ntKzZ9kszsASjtp5UG1d8R9N888qaSD3guyWkVEAGrP",
  "key27": "3ChEwhA4K4vRRdiU5sWEYfzQCYDAdRNu4eFLnhkL6ePPQFjhSLRSty4Y1uM3qhBfzMnYYHpAu46BHxNtmf3VAerz",
  "key28": "2VpSoiWHzBS5CXao2e6Ww9TuvZWWDbExjkZQZScNkx2PGhxXcS8rJ7Lwz4LCz1oc9s2z9PddtUHW5kfuBFmQb8ed",
  "key29": "4PqkwUZiNJ3Qho76hiVyNpVqYZn37QF8M4QJvRHuctP3r1J836Z61b6FgR8KYGn9PyfqJPApWAmGFmuSPbEW7yWs",
  "key30": "4xYabAJ72vJxSwKS2ZzLKGgBprbA1iYJjqfjwKVXg4QYdUezo6ZYjAXRgHAMNrRCftSCW2LqSfzxfcTC46KHDkcV",
  "key31": "oSbHQtuSARxJRUMLpdv6yW2szbDPmTn2DfJ7QoAChAu1gX6Z7Z18wDyugqm5PnVdFzonTpJ6G9XUNwqjy2RVewJ",
  "key32": "3EhdHGD7yvyiJQ4cMbyGb2QvvnSpEKUUfQ4XovMQu9ftV5U9cZPTW78Gt7Xd5qfNALA1qqmBnXAkWjK7zT3a4wdc",
  "key33": "Um6VrUUrnrzoEde8xyfsBdNosUMhs6dXw7MSGfHFfth5Yt8XdBDxzponxxRtJfrQ2kaGsEFKj7HKMCGcQZXWtLY",
  "key34": "59vfi7rYRjtWVT9sR8sUBQkeVqhPTfxkNh8B2B7oof22XUeGt5ryFBbCWumWjg5BSnkhBXARTS9p5LHR1fzhn8WL",
  "key35": "D7umjmvi1J22YDCAgrWq5y3kv4cAQYN4jeKVLEGtZbUQL3etRCzrsDVwBmN84DJyogz5gjKfyiLfHhXTjLokHi5",
  "key36": "5ecKpQhVDF7yoWisYtpDuTt2RgkdcCTQ3gbMG62i39NTuHjuv641LWjceQt4naWjmJTe4GJhmAqhyNvQKvPqVjmz",
  "key37": "3oQfs1eqy2E9BmXXDhextf9Dym7b51fag3cTK43o4DXmkS3MfdFR2XbsPDHRmZsMDmbxRJx3cuerX5CMrRiVbZcj",
  "key38": "2iBVGM6xCJL4Y6SX9uurS4JtTgYem4R4jiMxMK2RxVLqpdraXy2DwYM467hFBugeNAeug1wPownqQcps6rLjaAQb",
  "key39": "tnHTjMsWtLJQFUV7frnJnjMcW3ZQTDt8vxXegqS6fWJPt4VKjBdLRbgwxx5m9BhyvFyJ5ZTN74dVeu2XYHigyK2",
  "key40": "5qfTiMXod6LktVjJWw9dKwnyBoWVYRQ4dXaSBzofuLrffHXJUKFkmfk8RMZhbL76VQF67Dy85xmpKY91s1aFhaP",
  "key41": "4PRKoH3kdip9NHRDoNLDi1ZuYTeQcjuTetWBipg2QmPh6CGswzUrzg1K8UjUC2VBs8hNK7sMupUDhDhx1K3V7UJA",
  "key42": "241mxUY255vksgpZMPYSSoxgXVoGDa8zmV63iKq5QmYSWdowtCjYgGzRyKETQBRJDP4t5NVtgiMsB6mde7CRu8uh",
  "key43": "vRQg3xrixZYo3je9AUGfpPoFeR5dHW2YcJoQ1B2xgfDfGrh3g3ePrU1ifaPmoMPepmk35UrJczT4K2Fmgrypiwj"
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
