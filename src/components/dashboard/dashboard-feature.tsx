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
    "37MbE8SqZUkQxqE5FTkbZRp2q1hcLDnJ9FqNFAqZt2V9HZBeceEty5NeQLnq6bY2XkaadHe5SHS7hHffLhZJDCmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fZuWL3niWq2KLg95dLNSoDNPBx23PxqJvBrUkXspBQhUY1oDbdavoCmtqKsZD5yLgRwfwr5mHSUbH28cR4j3Mva",
  "key1": "3BAVJEd6bAwXpch435YZhqbVwnTcafb6DNjs81pXMGcubDbyt6ydx1mxe3k1XUcPzomXhmp664x9a7SgRWuVi8Cx",
  "key2": "GkSADVbEJUK8mubJGEyLBDifBdiio7vpP9qUo9sGKPwNBJRzejBcW37gPYxAa1DGTXmazSUavtCh7p3PHHmS7Le",
  "key3": "fQh3NCjaFid3PqH4hxSFx8HVazveoGqrY4omZ15sAb5SezTzSbzHqBZy3ivxT7es4wYpyeE3ykrrwQK5A36XTcn",
  "key4": "25g5Rs9c257pAHF7hQJZMEzoPnjrRQxUzkBst4uBhZiRTdksS2U8ZVYRx1osPTnYKdVK8BdKbupz8oEHEv8BJBWD",
  "key5": "3Xa4FsUvQNdw1h5r6cWQNpSWXW4zvNyyzsqhMSZMuyjwzx4EFoQ8EZMPexM63mqnXAJUoFwvn5GT4Rgvv8Bku2Bx",
  "key6": "dyuvWPfw1ajY5aWpMH9m2NSxC23FMGZ3t4VEsK738oozgtTCgfcBZNkKrg8TG8FJAjn5BeTFe2MkdFmqLNKp6y2",
  "key7": "4UjUxfPyBCh3LEoF56NcEpSEy7d9Uu9HpNTxqwRyfkPpZxSiQBXfHYc41dUig5bs1a5JEFHUG6kLKUzUvbXyHQ36",
  "key8": "5Xhixsz9F4MwdTKASB49Upc6eCeEUqsruyHhoySVNnNYZ1Dfh8nF4ZNECpv9RZ2hpdwupZ3TUVJ6sxvJxRPfxhFt",
  "key9": "3YBRZ1vjCKknYP3qgYFqHFwpiMejXZcfoZo9FKCrHjZNjZzWSr7SAMnKLFZ1D184JbGoQQ6pVnaSsZMN4zzBSSZL",
  "key10": "GuG5igBSQb92iHAEjfhGKknGbahgF42SeK5AVH3jWNMPAH9xEcwPQ5PVFWPNuQ19D1dAMQcu2ShzvxfgvsVZagK",
  "key11": "22rbTjxEHXiAE4QhiGR3rMcnqMXPMbqSTe1EcFBU8QxPrBXmHtqJQfDGYZRt6T62LxnbPQMvT4whp4BXFkNsYGMW",
  "key12": "RzmWvcRy6b9msW3k7kA75wBwX3GTd2mGfFyY2LJLMpyFSqpoEHwMyXbCnuS6PM6FuNAyoq4Y7ww8YxYzuoWFaTW",
  "key13": "2CeVFSwDbK2zcXRs6jtnAi2U7mHvWMMFwAdbvbiiTpuaU56zfLBALNVw51vcsotMF8yyvQbPprn6urxCfJFsZuNx",
  "key14": "5VyW9iyNMo3AWLzNZ4rfcVRvnrsfUhHBKNnmMPMBgLZ6TuCMN2djgsKV3qpnh4Enk1WBvbor6gDqF1JcJWboBVU5",
  "key15": "421Hng4BAuv9kLjh79s9Km46GpXNfLyjyhp8QRyAGmQvvD4AvazN9QTpPHUPXXABbqfSdDmiMuTXuv16gqmZeQjp",
  "key16": "27C9H5xi3FDPy9W2nyxAhLZbdH8xuUc9icDnYnEXmdEN21g9gNSKeLH79BLxXi9piDXBoWDwsEMEXjj52nJfcWdX",
  "key17": "5XqjvS9gjS6gALAT7R4JG8eHYdAPKBL2H9hzn5X4otQXp5ZHrLELU5vw6E6ZszbfeWVUTgR2Jr2rcNv4LiE742BK",
  "key18": "4Rj5QLmMbvTPLzdAtWMbYaBMByqihZqrcs35FJNWhbeFawcDVw4VoLaPYPwJXf8tMq9uSwPSMR8r5HCAJnKKaycJ",
  "key19": "3sE54wPLe21msrDGroRqiBeeudosd58v29ENtMr8kv354TkUxAW5m9Q1vrYdgttagWhywkznC2KUg6wvMqnrcQD6",
  "key20": "3iisC8p7dbqmKE8qpGwSvKd58PZPCkj1LBBN2ytGbcxatofb4BC2qU4TLDRXrYLoFRqvafK1vxH7wCeaFR7gjNhP",
  "key21": "4jQwRWAmPCJ5dhyFsypT5pv7fwsHEwdfeGEpKeyFDhcYVs5e4a65qm8YMpZcugH9xNnti5vNAX7o8Ngspj6pB6Yc",
  "key22": "3NfzFFkrVKpdzzBE5ThrH5Je1TGpqNo1ra2z1wPUbDsNUuSfWFBTgiuEXn2c3CS7uuJeLSK9jdWqLhNKAV8KKEic",
  "key23": "5dxXpWzuz65GZFgpYe5Vu6iiDzkKiXjpHznj6kE4ao3WwsfPhHPvzitBxm97utqSs5vj5QTzn27enbB9k8PUEhBt",
  "key24": "4cVPc72vJLswxTHX2YggLLfzBdREJfnHHg2uU9JmYXnCMukDwTcGuBZTM8cjbfW2vDKPeVQ3Qvc9S6z85tMKavj5",
  "key25": "5TA8tnw8Yz2biEKAzLUeVVSVez97vDf3yozXEWx5jdBNNb3cE4BxYW3tL8PEyUn9vzNdq7Q8YcUnv4H14da4Jbxe",
  "key26": "2zd7bR9kZDLYkCXzzJ79HgjU2LyAA7xAf6xpSFZGmcRXQq577e4FQwmEGXaGV5eTXgSuXDBGhyEBNA1K2XN9efDH",
  "key27": "51vYo4aV4aTmhmQAZJJwdzDXGcqGbsSXpSiRHGLvAfPpC1vowN9YzcrJY6ngvaHPndcrDwk8tQnF8KEJrGjWYpPp",
  "key28": "5Q9ZEaFgcNGRCV97YTyXDGVL8y5fmhPnmuwP2fLtD4AAqfB9KwUB6yiU2TYW3rSL753tJUHoPkRo4K4SkCkJ5qAE",
  "key29": "2ubanwHtXwDgQgBDb7qEPadF2tUVSYYUhxAumqHEMnq3xhiqBhJJUxgsigjKnndSVd1brz6C4y5pzZyCfA54jpZX"
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
