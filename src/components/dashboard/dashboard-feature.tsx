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
    "Q3hgWj3JZdZ9RRjQWvqZ34qspZ6EAE2bQ1sy5dXHjHP9h3sRriJtwXotk2621vDFSdgRt3LedmEwwrHbuG33K9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y5UpTnsEXsvaXFi9wCy26nPJpV6kRRJ2KhBqzrXrQAhe8PaJ4DwSvVFeyL52KYSytWuAqdDrZQ4xdp2mCQTUQV6",
  "key1": "63uveChEVDnWqfL3dHPkrA5YuPT9xrtKjcq3wRkMuNRNAZPMJeoPT3CtRsQJ2T8paVZG3HjrPhWYgf6VryzU8piL",
  "key2": "3MikZhHHn4xJo6ZVcoygsJKkcZ5vEkJ6bq3CJ5aYyyk4QxooJUeSmMa5JmNjZ3f9aCjCH58bKLDsbKmeUpBy7CiV",
  "key3": "LNspqoeUXUayrihUqSc6ebZdurga8F57KaKzLPqFyj69t1K9nXxutc6JSptghQjupqkNqkJU98re4TM3b6WpL4i",
  "key4": "456u9tWJwbScVzWM8LBMkAF9MjECZrZJGEz7gUYUHkoNAbuxWKuBwt91SgtKPUrCj1XDfMqSN15hq16MG6uNGq1y",
  "key5": "5pUj8avYxtCTUf5oHcgo6EZJpjpVoi6pumvnfvdVdUgJQDJJP8YJmaqRZrvFWnA1A6bDZLD1DYp7NaH4KMyRaKA9",
  "key6": "4hqXid3cwzXHwehYpTebH7e2Hpira8aL2ZWwShqd2FBFtziv1hQb3RhqvtGPNDfUQNTi7UVdGQzicx8ZXX8LcV8i",
  "key7": "o3zwDRhNUeJvCYqPQK24o5geNFfN7SG5ePtJLw59oEhwpYAGLoMGjscDWXxuYAckdzwQjwUdDEuxxinVH61HE46",
  "key8": "5241khhodKJp6wtaGzS9sSExPbGF5snJ2hjxzRKDEuU2HYru9bR94LPkTxDwYDwFDbgp75PHTqjqKXH3WG7oZyrj",
  "key9": "4vw31ru41Tuhp7K7acgunmcQP9tqLCap7WNgDLqcJHvQAYAtMHU7zdsd8SXPjLdivGLsf2GRKs1MSeErYPJGaF5C",
  "key10": "54uGZuApE2L5oxXgyrooLEw3gc8Y15iazvoLMsgVjp6ZHURZDDGekVgDGSEccyBqRLTUrJ9B94tgu1Hc4DGCfMvV",
  "key11": "2mEZJEFcvnAR35mSzfGzniLWAfaw39CBMFD95CT5pnecbWBK9BC5h4K3YQY5mRbWEuLCz4wsjBnAFzfoHMSpNSfz",
  "key12": "5M8CYbeeBkaAUuXLZonFZsh8toxWAL8JpbpqEkfD1ku158G8S4v4JmmijGKbDzwunjBst4jLNoiMGf7SWJ7hQNz2",
  "key13": "3dMdMVXekrVFGeR3bKspxbpNF9vAKfZboLxVda7ttQndU8A5sitJPFAZ1sXY5XknPDDjSAk4EAGmTwvVNXCmvCpq",
  "key14": "3PFLC3XCtpTkDKzfSMXD4YPcKfNc3Jeraf3mtn43osqZhYJv1dN55GEB9HtqjnMnZR82jsZkLCK1kzbtsqsuBHR2",
  "key15": "3HY5HPKQsKTqoBnawaEHRWvKamyr33EAKN3bbCtAA5Rsh7cp3ScGNzRHuxX7BWyJjE6fEXRtkuCzuUgQGc4UZ58Z",
  "key16": "3YYbT9nh5tVDFEPgVduKaan83rYhYkNkRAu4yrc6ivH74xJo9Do31eisHhQBCtWnWanzVdNPpkWXD2WfB3aLSuYu",
  "key17": "5Z3niyKVJZWr84yifvoL5ucf9bxJU6SxbKfLysMZ9N6VhTeAx2rAjGUyzZxqP2CUWT3FhhjwWjQ8QTGjNbyqutbZ",
  "key18": "49NdM5G2L6brKvgXqm1YTAdQrQ5EsN65dbALxYCJ8ZtKQggPixmb2aF79qFHTo4cqbZDBmJ6gCypaCLyCe8WvKoc",
  "key19": "3uHzi2mBXZchoQ1vE2Vm3Ngj1pKpzCtgfvDsKwwGUM65J64GTVeqZNVmGGEacEMMpdpojAXDz6adYsdeaxBN1fQC",
  "key20": "23pS7AGbp3ZFbhv5wUyY8SqerteRckjZPYp8d6YTGVNEDDxts55iQhwiTH62doFQGAydVSt9mqNpXgWxnzFq7ULL",
  "key21": "5NEfCTYeeTPoNgAGrSX5WgXcMW8XaFrp6gYzdV7cxWAHWaFxhNE4Wt7CU71q1ZSR6BqUcnMck52G1AJFUmxDKpzr",
  "key22": "2LVud42uz5oXMTCyFaiWRN2p3jV1pfWPZxhWHvETgeuGzUnTSyvPUdhBhWTESmrsr8rGMMmuHUaCwi3yp1Y91dtu",
  "key23": "CUkNGkQAuCSHGutzfJSzrub5zRRDLYvEVFtm1kpDRxA9KyBhQH3B4UEDv23vwCTam1iYJkrLRC2aiMEhsLQaJbL",
  "key24": "3nDuGj6ZLgx6tkRuncWFnuqXeoUKLYnmCdVny1Q6bAdWkhuJ7Ssm6zgZBmp9hWWZBhHEDqE12i1Jwi4cZK5wYYAd",
  "key25": "5CqvwtXd6jHUR6xM7M7tZ3pU2U7jPYwNiHdbh5WBBkFsGW3yFdkyW1j5wwovqEyWvuURcBUjd2PjTq6y2NkteYah",
  "key26": "3xmwhZsxmzo7BChNwnQBHSzvBFo8nhxwxVemSQ7T7iyUMDEjGdGCcotcNFSNPrceZ3MgU4uYPS4Q76e8wo1RM6rM",
  "key27": "5QnQ4KyvJE6C8YrAraV8ZqAeo8pa2jQEmiAetN7jmheod5p7D1JVbj5Cx9nvpDGTS8GszDddFSuKi24jzV4rAqdr",
  "key28": "LXEg3vysSowEfMf8iEr7HUT2DMXJbu8Xh2sqSMCKstwFFtAZWuFgLM5DXNNsNEYW6D7BgYRQL1rZjKeuEvGktee",
  "key29": "4NWZfq2PPB1cSeLfoNdbfRFsN8fiv6MxDN5mdcC3pQvP8TJcFv1FxPeBGbtqiUePimwDB5x3Eu9KuGX9jpVW9iAf",
  "key30": "21VBJ6xUpr9bmXBK53U8bWLeNSezEymVSzhhTGz8zm7RUYKuC8y4ZT2szFZSzaxnZrVCcn6LdChCYzqdAfEaCYmw",
  "key31": "nbN8jVBQxJ7M9od28Mc9YF5FygL1CsULnYTPGpkWNSPWrtcY2F2WGpbyKGxbhgiupTiraQiK3X6tgJfMXBa1GMQ",
  "key32": "qCk9BskmhBQc1C4aLThhwBDdnhmTH5e7HMFKsAs8PMuyLRZS9Jn38Hx7W2FnYKJCL7qM489EVCoFR9vQuhzDDGn",
  "key33": "2Vc5pQMFzmNvjxKW83pTzeyccSLaXvgZmBrm9VLPFfjt647NyRWWLmAHXEk3z9VddsXtBPFeKipVfXkNEmDpvpZG",
  "key34": "5qjViqPpSFGgbMZtpr6o2HLuVkBARwdWVRR4Vwni6iK46ZVnxeasp7HBNcqdJuhEU1MsAbAUvvcVrbX3dvjG8yMY",
  "key35": "5ptN3cKD6VDzDf44AbKA2Wy1eNfaaBWHKonD9UN7w19QmKtjhVtdvxRh88GJefw8Z1MkKC75wV9SUGnUz3Xzcptw",
  "key36": "5eM2pqLMYNshiDZ5EqBXtGpikyM1F99Se6ercfMqQYdx9nTCi2QMrQoyA3qEm1Az4m8KiJJ54H2heJPRic3LPX9n",
  "key37": "3ZAuPR4F8GnarrtNvcbzZaHN8dZF49SY3kjbnzov3SfLDBJueACLECie8CcdmtEBLcJPwBgGcWXvUrLJdLVjWtN7"
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
