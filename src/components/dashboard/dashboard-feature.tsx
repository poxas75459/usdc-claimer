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
    "Ahk1oZWhR1zicBJ1QCdskwsGxTSqU16sB2PTdb5TnQQxpWW5bamqNN9Y4FQLiNnLQ7WjRUDDgmCN38wf7aPXnKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pYNjssAvMocPWxK74KtZ1hRYcUoSmo1ADkoWdZFdFKK24GPawvUoWLSiscWjMYyub3TNuoWnQXnB8KQ4xSri5Nd",
  "key1": "oMjKXAEMKRp1d7VCrcJiUVkhUcbZhTeuSVXsVZaA3geaNkXWVcY86oPp5WxWmwDPP5Y4TZpbdsMWFmJaoetaG1E",
  "key2": "5SYt7QvPRGtdoNjmRArpTcyJnZXW84u2K9o7bcnqSt1jvcbtEvcD4MDb5NdY2xrwxyqMS4L9tPaB7GRuoDfpVZof",
  "key3": "4mfBwBRJgEUqUWcKDgQRsCa3VAFCKdFdt2y3Gp1FjuLn6dfFZswiR9AxxHyguzXJy1UCfpcyx1aw3fciHu4tGD5F",
  "key4": "4eWVApz1szrkbsW49Zep77Ex3NGUekAptehe6Z5R5e8Pu3tM9o4zLGxhRbcemaQMMDnTM9hGi2wbMyjwK57ywLk2",
  "key5": "2wEa6snuBmsWuN9i6MS9PSkWaC9zJ6fwPJ7aP6qxJH2rbXtTnZuvNMpmWqxbxdFJpDZjbgfwM4GoyoeNuSskrGhL",
  "key6": "2vgeSijKzzgcacTeMJmddxGeTTk11kEC44XHFwQDdjGhNu4gckS4mX5Ha6rKnGBBNuXrxXPZXdkQi58uERr2GZgn",
  "key7": "3UBeqG6C31Y2Pccy8Yzekgfg6ENqJQ6tXdu3PCccRUZ9agxomG4tKTqoEAGhZLQaK2gX3mA97yrNnWuJ7ixnwFEQ",
  "key8": "4xP4SfV6qycQx168vnbRHzaTpmnFjJQ4rLhhsueyNVkHFP3QWGPZDn9BcU8THibEV5gzv5JNCGTkVxS8oRYhuJaF",
  "key9": "2G3wfdM1sinQxcyh5y12haj3Nv3itF74V4P8MPmZ3pWWsZjNoHg8EhqUe3aeNVupXrYkx1CZgzZdnkE85R81S7ZH",
  "key10": "4gPwDrAY3jNciwTJkRbgsrGBkm3mfxVufYfFyb7VFRUSnXoeWj6nCGrn1HhdFHX8DzsUh768kpvZuaokmY6Bdif5",
  "key11": "h9xtQyeMNBoPUaom1zoiAiC7SMziU8N4KDgjLe6dierspwnmHz6cjcrSaf9rgypGVwTRQABqgegXnhsrTNv58P9",
  "key12": "27yDgoNXJFF3r6a6y2rBMd4CUtpvkEMPXjQ3YA1rg2eekgEFX6pnQxz341miYaPdkZUBSQwQjrFS8nCJXkypqjeU",
  "key13": "oV7G2kxN222JtCpGaU9r3B5UXqGCdB8UW9duoNSvTCzyUNpRV4vZGyUVm2iLbPTiNAQTMNGP1XJ8UE5cFwLcbRv",
  "key14": "2jx7hWbFLaWFaDiDvVVfD8rA8aFZKEcKLaF4BpGg6LXQDx27LaqPKo69gxppMJWm8EJPP9U9Ns6o99DPVzYqJ2hU",
  "key15": "4oxTADyAeRr1RZemGJpJdnE6hkW4sExBC5G5Tq3buSDmtDLpvK37ceFP2kUBmwZ55BTc1SQQPrfSYZijQhvF66HW",
  "key16": "5YuZMkfHMXgkDeHyeuSj3CdZsb89iPmpbXrvSMjZp5F7diX81AVM5HAGSXZsE3SCdF3cSPG8YwuG5PAagVpeDo9G",
  "key17": "5nXKDnG58H8wHJpoXpZfmCTAZVgG38qPnyhpX8bc1wdCLNZ4FajMG8i8YjLFmgTJCLG1pbn7q5YTNGnkEQyCFyQf",
  "key18": "35nsTD7ciufEeJarJPNGzjxKfj1pRGzxvUUYtUxvcDTh3E8kbc6vC3Ae5PX65a4fLhRXkyrZ641zZBm96mXCZwhg",
  "key19": "2v7CHaY6yjV3PcnVcftkWn1KrfwEXJ4RNNqmEZWY9bCfhWc624nAdgWVWLuFGi5K3Umqqgd8Pj1MV9b3MX8qfvNS",
  "key20": "63P4g9f6Mcos6qXBLd9pkTer9EQxSaUJ2p5SCbdt8uQ1XbjUUEugVQkmNbMJQvQvxJt1gytJHcq7qXEKdWNdJrKx",
  "key21": "48Pv83p1f2SvpU55sov2iuSLiQrx8Z2g6CEGMX6C9oLtMVVpKvfvQP3cUj2wrNuYHrsGruoKHQWNQVMn8rosEdgD",
  "key22": "2d2hpYtXgXNAgcRLEUuZxe1HQVtMWwgLqtkWda5sRFnvL5uYwUZVBqxcsX6oshePeVwmT2PEHybVju73Snvyxuj9",
  "key23": "JB2CAsX4tXBijmZ7GNj117pFRbUGcE1qPfXKWXg9cLzgNo7RPs4Nvh9Uj8BCU3C9wP51RdmVS2dUwaH8DGUtxNv",
  "key24": "2CniDQ2JdfmCQnKuMxJKBVmK7EZ2ea211fRj6xYbRUsD3buKuhdvYmUgy1aiz7B4kSrbfPKKxdjzeXi9JBxQgTqU",
  "key25": "T3uazD56JUWXRjVRzfUkqtPNW1Hkp9xcrTVuK4VrSPAx5kEBsYh67LmB6P4FfArnSsGEPgoVyQciCkcyRNVahFr",
  "key26": "5GwU5nHGzRVpWpTQ8VrVwwiX7neQwAAtDMDa9tjisr4T5McrSQLhGViAt5uG5Dq7xiJfV9NQex6n2wfGdJqLf3Zf",
  "key27": "GJEKs4EqpphiWdC7qswgVUZqtnnJeG5NVLYMQVG4Vgg9Fa6gPFNw3rHhtEd3XpFAQWRA4j8kGbGjaeFB1e6RQ3c",
  "key28": "4t5a2TWaci1yCcK2CvCQDSPgXs76LHZW8WyVuED5nbhdTJVboPmq8SpEC97G1m4hEtFk4CrRCNQpvMyqQnaxPUbS",
  "key29": "5tfZiMPSrdEN2rrPoqPXdETC8PuNam6PCCu1PmfBfes4KUabUNFtdDygzBSxxtm6ncSWwchVR4Tz2DkcatFfJ6tg",
  "key30": "2s8utR7jvfA6eoPtsKUbSd94DmvEsHpNAVKvHpG2x3SHWbyFrswGMdhG7apoYVnWoCNX51dxy568qnnk1mT2k4gT",
  "key31": "2DXWFUQMemYbbvwXJy2fja65cjoF9tcqZZ4H7LnoTwJjLpgXyYJX3cT6g1fFKjZimixB1NbgKNgNreMnjqmLg5QV",
  "key32": "43C2aWgLJX3xAnewVt1Sz4X6Bh5JUL8E6KWhdNmrtRkPp84xLWUie8RYyPektpiQubwBAUb5WqBVHiDMzVbNd7HC",
  "key33": "3xX2oamTsGe2Vzmobjs5oeTdyLZYrwenoVW9mqKSb2CGqmNHvR2pMF2bKJeMGgmF59MmmdXgPni997wR35v6tQBH",
  "key34": "3kCSP8byzfcJZvvv2igXjJm5xTCxvvKJv1LeCffBCaHJCLy8NSxVUD7ScDPBRxvQ7mKHQE9KNsC2tUy3sED5FfvD",
  "key35": "36UrFnw7XvTvXXZZeD5LEH3DbLcCu9Krp26BvTGAdJBS5KuT89n6ZPkKr5vSK1iNMwUTLNrVneYFbQSVP8PPUt9L",
  "key36": "4CMiZwFyGGVoaj92sxm4KLvYrzvVBzuacdDdiHFeRURiVW6xtDHRwcs6k7iNkxxU57Qr2snAmGxsfRYKLqZDQaKj"
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
