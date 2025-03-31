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
    "5q3Y6ajfSeQb6XA3PvRonN13SSJ6Vgycraw88TPxfojAmq9YUzfmubA3T1M8SAgDv5GCDST7bptnasZvNYj4cADn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Va2UhdENyEmxozWzEcSCACeno1t5ikR21JqEbeh1EjYQEGoP3Q4gDrcfez1hNqvTBGLVMW7dJBM4BXKyFGeLdKp",
  "key1": "3uBxedXdERKE2P9iY9AFTWNTrP78p2AztjVFrhpNpP5pEn7q79LfLxtCpV2idSWsseGMNnKdyQtUcXMuVekysVha",
  "key2": "5Xcou55z2uhtNy7jCc3NePRypqUCZEXFesKXgAs75hEq7U4MnQ9vosyDcANrkkLSKWNYv98M2KAUKiCB712Du4eb",
  "key3": "Rk66GGBRmKecCoT7JsApq9Q7Qs1hgHjNvQfcaALCEX2uBb52RusxUdXSsZJUzigZfVPGrjrXy9Ptpms5fG8ZpP9",
  "key4": "284iTq4EHFbRyPtP4tPpKCyxw71tvYFUCTEREu3NXGRHPgYYiXsVgDQwudufQ7xosUFMj1wgKoz1XLDcqp8RCYwn",
  "key5": "SY9ckVNxJnPHSKooougr1sZJsor6DYqgr94AG6ZLjV95XoxcyZw6YvgXs12LVZj1wLLMJ7JZGdTz1d35boaE32f",
  "key6": "2s9BGFKGxBdWRvmtY3ak2GF3XV3EBuigikd9EKgK3QKuChGCcymmACn1Pay4ESNQUdgQNAy5qX3sAbKEckBsz99D",
  "key7": "46vUgDM8k9581NJEph3gQkth7aNFQ9emsqrcNN7r9ypqowh2615NtCFLqYirtx94sAYGazZ6BKwyusNdC59ybFoi",
  "key8": "4eBFLBzwePBL57R9RhqzKGnLJLc1MVct6fzEhQajXqdmYKHYLTafVr2DWZWqaRWNjBuQPKGFmQURSBqHFHhseBDZ",
  "key9": "5MoaongtmBVLPjDgpSUoTakGgrMZs7zsa3NfD1BxgFSsKMcPGDufDbBzh86E4qsYyBnSgdtDkm1XU5rx6BebETsd",
  "key10": "3uW7CZo9Av6qzW6r68A5asTXMB1L35jJZDZ9NHnf7mWhU3eUySAcQNQyLnkjY3N7cWKzWZiRacTb76ycP3jPfpmk",
  "key11": "18oePqCW5qnBzuaejtAWNA5Tm2euEGSTYrCYijn7iQK5XepoAe1ytYrWVZxbqS1kdzGvAkTaZ8B496rqBqFQiSe",
  "key12": "Nw82ExPkpAu1kEarJ2f1yExM2qUaYVST5eTLnSiFoKpL4wmkeWz5C5kPh6yjATpT8Y6dw6722sbiuLiztvvSYtk",
  "key13": "4HPYE6Sp7QUCWdd9QYzWnU5gnRSrSfMBmjUxPGPZSqB98B7yf81nJ585Zm41yTfukjTYUmqaQTQDx8mkgjuiDJhj",
  "key14": "uXovdmNiiok3VDZvPzTeYUDC3zeizAjHZroHcPwrfeZ8LaSg32C9UruiHfZ8oN2AURSBwpqFh5GiF79MHqx6nEy",
  "key15": "6GQKjpc8tt8RHpHp2UyZaWLrHoYNk7Am3vB3SiAfXz4P11VrBSKEiMBBzLcQAeJ1uqVAnvqTTMpGd7peEYQvnDP",
  "key16": "48MQFEXsoKPynKWNB8GSSRBhRkUsBjDqCKxSNdePkTT5iEt53Zhah8FFpSdJHgq1vLepKdVkU1ya7XPHQaBDEz8H",
  "key17": "5wGnFkTZhs46eNT9x4tPBvs2pU2BicJufdV7Ka1paN2jVNfbVCnA9J5GAys8DW53UpAzyihR5cAozs5m58De679L",
  "key18": "54f2RHCrz7dVoM64hzHUkwwJpegk7WKzVJtxYJhGwyTVycqvVvNZdyWq7y2f2mHzo5w8X9Lcqf4kcDt6L8tb4FHD",
  "key19": "2tJ6z28m2qJPpzPN7YcNVsZPKaiV59JkwfgetXWiBMK3ru1cFFgZSGAPnbY9UfYwY2empKhyXcf1QLMGbeazRRof",
  "key20": "4xuA9wC7RrGmGwCRFbUTGwoDgroUbcGptd99cy4z8eoSVPrGFp1DBemu8zaYk6cZ3ueWLypcDtwmNEF7ek7gFVua",
  "key21": "65sXwyWSSmwJ8DnzJTTjnfq4DQxpJXVhh82MJXVeqLqmmr8wYGW8KZYiTfZsmjwFpf64aJXRk6uVswg8TfCPwa7D",
  "key22": "3d9hQD9NwFf1qb24o6NQpm7aqGQd5CZNL29tAeoDvGvaeHW9fK7DLxwcfKyKigrHy9vXfWNYPDyda3gd2Mp1y7YR",
  "key23": "5gcyBi8oQBBmMzMEYQBWLStLx2CWcE7AaxVQmW4A39ujvRWdjA6gJUVxm967wBMRS8aUEpP17HwCxmPrBwc3p89x",
  "key24": "gHnwG846CTw3b7iZVviX5vj9Kx6G4vvczdmBXRqvRLwjfZ2RbwmjW2cKXwyCg1EnCEM2Etz7BNKHpdgAfTMx5Ur",
  "key25": "3USCtCQEfaFks6pD4h9mTU8z8VF9okfqTmvLjTG32PWBh732Wpb5X8wPJidPRs24WsgmdhromQa3NmkGCpRrswmW",
  "key26": "byBJMYsrwo6Rof1QLrBdSHwGpDTd7ELpzLwS71RmCdaGz47nGbsnjWwmdP5AQ1jYZ57wcmjTNWqVWmZG1yTUNH9",
  "key27": "4xDFBSY7AbStWFDd3w9knCdeXaTjX4GChBZWFyqGs3qmFqU2CH84c6SYGXDahDt6hcG3uiq5PRbN4jHmswAyCcVc",
  "key28": "3pppYkNBX2QUqgHGucCMuaKLRRNu97oYyhbcW6kMf5BGVrZY2vKoizbA8YNKkz9kfjnwHPNzjeYebFjhzmrtvpUo"
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
