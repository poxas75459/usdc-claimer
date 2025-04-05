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
    "2ngrGGpo7pt792FWjv6iqqn8w4kAPvEnvVYxxnUjk7DG3hRbxgzrk5pHucGzR2mSvb58T5SRJRJwxwAszxQbnj6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qEb3QvcZHs5ZQ4dCm6637cVEjYYRVEiFaP6vH42gnVZNdBbJpeZgmNnQuoLRr91ymJtJY16hp28NYAzcye1Wuyd",
  "key1": "5H2sG4TSo9ix5yVNFmXZG5vm9upiVe1Av22n1G3zwt3abRxYdA2me3GNaWE1eUbik64q8Qo5cthVrj3kaSHj2jj7",
  "key2": "292j1qBw9BYd89F6it3kHP1tBoTbHRCRf9YL6AV4eGduTmPH52oqZZk3tu53gPT76qAdTjSm7U99fxRtbGTxmz4g",
  "key3": "qhkmsb8QQ2UxeJZwU11gFLa7ESjohXQ2nu1LYELWSuhArDP9hmP8pvuCmv53jM3dP5EGd5EJXiA77ZKXvdUTUTT",
  "key4": "5dSGgYr4gzFGY3FkW3d9Z22m2dR8oGvL4hpWvBaBjkDsdCaVPdFFwSSqUrZYaUZdbLzXiViYYkHe5hd8R52yYdVs",
  "key5": "5SaiLvvpiMcwRrggcfqoRRtYRMerVX5Q5tEMGKQeP9dMqUb7zFMa4fMsYUUe8eArG8sK9C3KNa7iX3mirgYg7EXW",
  "key6": "3SXrr7oRqPyndnchjssUo3oJrgnMRjgeL68r2EUZFpEcEHiifoKwMoNvWRc4fw2HUAeN2RhWcFhRTBFdAPNRH7gm",
  "key7": "3f1LbPHgNu36rgPyST6Gb4r99fGQDdQuTbRHafvVKDjm6y8AoRzBc1FmTM5sPYrJpHAFBXKZm2m55uzN4YZx2hK6",
  "key8": "p7vzpqNMbhataKjJUMLeQfpCbSjx9eQwGRghWS99EJrn5K43EBj8FQ9HJxNzDsLjWYywety9Ag7wLJhwVMpShYu",
  "key9": "i4JmoZoWBBvRX6nhCuUgD5UR75Skc5ML4ysd5JTHVJ6XpuxbdfVq4uc7FbTTtEhM6AAcUmsWTx7ViF7uze1eT5g",
  "key10": "33JYdwgou5JgyNotvgYzJCyXibdbifjRXjDpXUSTmNv8N2V25efYTD1GtXem6FUGRv47hdzMurQwmQZbREg4Woof",
  "key11": "BzF5tUceHdCth3TZ4ExdkXz42VtwtW66DAAJzurbhhjsyyHUfAyetKJebGA2RJbZSkk3toGZDx9sW6FNWnPrqZn",
  "key12": "2KqMVCXC3NiT65HmJpkK17nyzweq9MLePeen3EP6eNMSdSPMAg6KfYKLqXwJcfe6ys46KuAcsNW8rDxzL737Sh5n",
  "key13": "5hRBoGejU5bMcsQHjoMxZtzLMGE3i7pbyyLVpvEwQgGWNsL2LfzAXnEYP4oxqCpmtTebqTdwicNMp2WStb4r2dyq",
  "key14": "3cUK8V2Mmxvtb3hLhNHU8gjjgPMJj92ZzmjCyEUjpAeBWyEQs6TJEjFfxZG1mhyjcA6T5RdS3XYZ6heeCH9Qajgw",
  "key15": "4YQuz7FJZ3JBR6SU6VPfGyAJ8tZqPXU8Cwt8X1V9T1jCqShsNusyuFgpVvagreu589v4cUtSNacMHS6CCyM6NAkF",
  "key16": "atWik4hNumLfaFFeDTVzNjcLKNXHLu9wXjePg49hcDcwKY3Fa5TLxyLAow1wFvceVn6QzRSTLFw9TY7ficqBwLv",
  "key17": "41PY5cy3cdd6KwdCM6Sb9QsBAJq3VktzZt8eEAG6e8d47a2XsqDk5R6iqqXwT8dG1Dy91i15Qk1vQ578M3KkhxMF",
  "key18": "3F1fHVrwijkHAWmNSB8BErRomtiUCZRCunHCqfFTZdEiuMmx3EMkJJCC8bPhQ24oTRNyLMWKkJN3q5EAPB8AQqsC",
  "key19": "hMcByEQQ1JiBpCVuyUHKqty9WrsPqKFRNiGukDxSz8qevmVJ7nYZRyhdzb8tPMnYvzrBBnhCXfhk6mgxA6ixwSK",
  "key20": "3Fa3YBjec3XAs1VoKytQPNkq5WvnzBayjRPRb3JZzsuF2gHW9nTunofUMzNCx7bZLAFXZ8x3vBayu7CerzBuL5Ba",
  "key21": "Y9agqEAkS8AgrhrdoibFs3Duv6ufTjaDieL8k9W7NBqPHu4DL4htgUgpU8hcTBBcuLgTfP6GbuvJeiMXX3w3cKK",
  "key22": "2WYKRbLZhfvwfD4Mv4bbBP5A3GHnXcdFpWYPaxbkT38Jk5LWAtkK96LikrTQmxyqnUhkMHanQ9ZpVjcCF8KuPJri",
  "key23": "gaokmg5Ttutd13xTQHuLMQ1KY12mt7qMCz65KmGUu5r429ZM4Y1Aeoub6P2GG4STcypmx9Q8xw19DBo5aZ2vvWN",
  "key24": "41aS1Hwn7xktoZ7oVsL8bxkmQfqHCTazD6WGu4Ki4toCjet3qZbpTwpnV6UxHDa2rJtqpWWav8nANjmdAWaiW5mx",
  "key25": "2tkdSKebkqHnkR83XFeUd8Efviy3aCsJB69PEGVKh1nkaMNioV2KQsBe8nV8g7r5QT1eTCv9W9xdgbkvYTrJSMaU",
  "key26": "3Ce6Vg1ujYaPKebGat7AYAsTA3t9yp6A6f3DMS7H8hN17dvm1pX1w2Ln9mMykYnhTYY14PmJ9CdiQykkPSZFup4E",
  "key27": "5hDKL9HzYAxfc2obXrQBKuYddpJwVm2pd7oMDS5RbSc9CSdCSkQxgL3v3dTTXjffn3ySD9MDfGty522XwB3CD3hx",
  "key28": "2PoqHSTECbNAr6DrHYNDGiAGvmHxUELfJ3EHpmXddGaDYuGuceNnxJm7sX6P5DmptAtjBqK7QBs4DWXzirQ4HcR",
  "key29": "xYGqgWpSiBoyxXrZJ6G7Swnpn7groxU8uJN6dge1C24konAPjxTzMdvUGAQZRHdWmNVDeRuVE4eJwW26E9zQ35b",
  "key30": "5EJyd51fxL3XHeYTPhwDwTCaUdQy1SQ8cWFJQ9V2TCZxamJQZm92QN7Cut8Rf2MZqatYvTmPPixRhkugy4chfDgX",
  "key31": "55CJnXhgf8SxjshkLSDKXUsZFsLS9qcag3XP9MsvABXbeFwnJzj5FsWe59XVn5SnFWTPLW7KmTmRk4KkciYM47By",
  "key32": "2oUv7mgSZvoJFdCRdHe48waaiU9kz33ffDMNWUxNwiFKukbCWSYcJ2vSc9Rs8PU6ozW21FH3V24i8HgFHnwYqkVQ",
  "key33": "5khXoUV7ggJPJi1dnnsUpRu8enyHBvHgGYiTEtqCiSS26ncusUK8AuLZQoMckpYACqssDE7wHD9wHmmdXJCPe7A",
  "key34": "35viKaq9QTALd6HgbDizHsHyF9DLBRs8rGUkqZggvGVkXuN9sFTey7oRmKVrVWyvCrHWYtTaiLMTr4DwPqgkCuNX",
  "key35": "4kV9VXHGCKsswkTxTn1QdZgAR8arRCZ33FrKGsnCDMuvrdFG6W4Er58mSjVyMx3uxnGwNWfxfzrD33aKUWMqPvVK",
  "key36": "3qpw8BVSFcuQNUbzwHN55m5F8ro6tSrFzg4RjWyfnmVotqAQ1agG7rDyNNYVUPV1HR2fPQzUQdsSJ3yXGFQUPMrt",
  "key37": "eta5pb1dZNq4VmCrhbkZVv2MoSMXGoapuaxytGK3fvu8cWP4bwxKaF2zHWjAYhpVNjP2Priv2wqPNy8qgKYkjVh"
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
