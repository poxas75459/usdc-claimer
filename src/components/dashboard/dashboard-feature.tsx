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
    "2H3u8YidBKoZYWrP7HCmXgGTdwy2PRV3JfF5tAEpGRrDiYRbxXBs9i7EmPWpDfdS58v78pE2gPc9E4c5NWvwkCqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x7DXUb2QAsDVSc6FpbZ5esf7Q6b1KxbhZ37nahe8aWzWKt6QWR8Zr4Mf9w3fRTNcunwS34JFwMQGKLMYeDMPVyb",
  "key1": "3H9a4MibvBRSthxsCv79r6iyLxNSAFBKMWi5hybFrrNUvbdsCciquTHhGsJwMcBUxCzjnQSpMNpdnzoDESQc2QHC",
  "key2": "QACxU1gaiNS59UP8boF32wUKdwBgLZHH26qoaL8TrDTCDZB5ddHsXWP82fnbjt74c3C4DP6TFovraFkptLcnoSQ",
  "key3": "WWm7JNFfN9RG1bYzPFxG4BcVXCZSqbj9XQBYNf797qjp3SAuTazMzLm2xobswocLfuzHpjX137uB1LfrvH83Rkm",
  "key4": "5b6fRYhPSHc4gXd1YBnVzeoPnsMJAM4ZdJijr1BYAF7LmvG8wReXcQfYCrkHqBNsTLCoiZRazQWu5KQUThbVt79T",
  "key5": "2rjwypKjfTaBcrY71gA67tgCBLmHh61m2PgZcgCAoTRyWtUjSyFmzinWAP2FfRB3f9u7axafXdHB4xk9cAxcoG3Z",
  "key6": "58vuYd8piLLwUf41BnsYARTPkjx2XNyAgBu5PvPgpY7KxBEqE9tGm5HPh983ppETJA3WUQJPBvBweQTjgR8zGtMp",
  "key7": "jdyBAMs5SauaEZwu2PzgvHu9BahPN5NKbSC48HoBvy8z8gMqQ2ApFGNR1BPCg3aMgK5mDUw8FrdNWD1FsrLfbJj",
  "key8": "3V7o1LwHxKk6JQxfhWyryK5T48pHEnkG7MwmYsDXTaY2aMdB62EeDWc9QLV3bYELCbHJrFGuSWPEiSLMbdgxZ2Z8",
  "key9": "4j1MmcMYciNiaWum5y3mervgNG8eZzDhYBZXWi6tCfwG8W22nsLSGiwaVnXv9Xdq5g1gckVUHyxtJQStcakwDV9K",
  "key10": "5ZooxYz9UZrnyZPjFKz5oVPq6DJUHqDQjAQzJxBJdo5VFvmWMQW6PCg5JWhicw8647ANrPDGq2PkKYhfeG7P4Cn2",
  "key11": "2nKHHMk2DzMpxJooPkf4KDyx18zgz5qxk6P6v5t1WSXM2Hs6XU3KQR97k3R8DZBYiiy6RkTvHABCvZnnRPUveG4q",
  "key12": "5XXK7zeSSmvUp99PFD8dm6X1TuUftDoMNXS3Q1DEhCyfwHRknT5jsW7sSGN9DbKv1C2J3q4T8NxqwBKWbcGRx2ff",
  "key13": "vbLjkdRg2KToWCZdMn4JJcqw9gXmjAhU5qRZTRFNQ56N5b9WxdbGkePq4hsssSZdu4SdDqZn1fywmb9PiPvMAdm",
  "key14": "3FMEQPmbH8xF4P4yzeRnegKkgkUsfKY65uKZZopo1L6pEhKTnWkyxrmw1fk28GckFtpZSqsKXbbhREV3KPd6JZMc",
  "key15": "5AEsYix3ewL7sDMKEotN1af6k167RFyaD8DmFpn4VXD8ApWDLC85k6i3pxm1pnic7Wk4bVHDD29AR1TB65pmtxD8",
  "key16": "593C2fp5fkAMijSvEzxR9oAq68RZoUQRcdMi7rFYVZedHD9jUhNzPPeWhykrrvzCbRPD4m51j9CzknmPQkvDoPno",
  "key17": "4sZZoPS1BT4XBaAfPPxUUhML8H5ZtyJUXror1MpPFKvA8As81e9h6CwsG7akkJPppYYquJCMDZQAGR7P96ej7Bwi",
  "key18": "3QzLypCMC7JEmkRNoCryqbtPwUPhNsogScZZwXgvWfFffq4awAdh12x5YQwMADFcXZogxRRf3PFTC62Zd9z85nTt",
  "key19": "5j9WUQc9hx8w6hv3eLRRPsGxdWCFiB9G8ZNAxLdhjen9sjX3r36jUqk4zkiupHSkKYMVZ9kgPoojmzP1bGUbTNZk",
  "key20": "EVM3tetww3EvA592PqX34Ms6VipbzQdwMkSnwoAgkQiPvnnWKuhCjPYRE1PxK1Hkxyqh42JvuKqtrzbFPEWaRBx",
  "key21": "XZxFjSP7G1MrhbhMxPEieMSo1Ce6aScNEwRsB4KBuNoTpWMHA1bJEt4ucmMTYGX1Hg9zttysQRUZTeDPMfuXxur",
  "key22": "5hgfU5QsXds3omaRVHTWebE6MsgQZKGLMHZgFzo4A2w75mdpdhEQzxtPLR24VChHVNr5aXeF6Uu3f69BV6hyzfts",
  "key23": "517o6pd9YJBdfZZAAPCYRRv4LpYc3wWyg2zy7tJyLAM3VAarmLiJMdZfZuXx2gWtJUvqswZrGz3CMoHHNXf6PV3R",
  "key24": "3FP9DAcDbTjqaksULk9J8U9d1mqhEhjMkfhGY2C34eh2TcRvxTMxjDjzqk7dNv1eDX1d5kwEHQfVqzdJmh6SY3RT",
  "key25": "tELNYzxtX62PK9s4hXZiEuyx7rg3sAJRiDTGgTBiRDiPe1TFukepSVt8cJE2Kt4aTnBwfyohA112ESVkVRDT61d",
  "key26": "56eCD7ALJL336K8r56Y3CPf3iFD2b7YF9Fkf1PvcUfbrHCAtDvPcqcaSuZPykddbf9oex6MXF4TVNtATLDnxVmkh",
  "key27": "3R2RpSkVRv5sr6wu9c6bK4D33LfjE4Nm2PjLtiUtvRw8doatepUz2oNsPbHxzNSrw23utJzDVsRXvM2ZHCd5F9qM",
  "key28": "mPRo2jJjvnF6J8ANaQ3GXytfv8sJdiZut5D9MbArhToM3bpz3L3NiJ8L1yU2pkegLRzrntquuhrF1EBuBPXqEjC",
  "key29": "5YSUzLH6J6UCV9AgJcTZ7ArfiGvqQiNdzj1i17ZBXADWYcKpQQV14ucB3BZaTkiQnStM4GikjHsf6XAfuE7r6XcL",
  "key30": "3QxEJABCcRw83YyCqQk6Afq8BGT5qNopJpSj4R744BGfyXprSNL6imfs7T987WahXDKmBneHgeRv8oqMiiB8XXAp",
  "key31": "3QH5va2pmXFXZno76kiHM1twUB4QMRA3u8yN6thHQh3VshQnUfTizLJ1E8YMe46aPGSBM3gELtSyQFz95LoAub6r"
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
