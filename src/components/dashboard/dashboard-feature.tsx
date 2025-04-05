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
    "5UKsh6Az4H6CSiTJocWmcBbkY492baoHvAwg9FpzUdeGS2R4n26WgmgwD7MzADLctVJA9NomRqi6Eao3vQH3wBJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63EQkRohBFEotLc29GUiBo4jmQHGrdzJ2PVqn9b9UwJuG4AzSmPKcQfpUXWrm2oF8NKCTBECGL94i5W5xiYmamWA",
  "key1": "4MfTTYYgQXYQGgiWn6FxXhbRXurukNdEXquyd5FEkFd3Zvv1er6yqohL7bNZRtK2ZLhQrkybj8pQrDDR3BUbnuvy",
  "key2": "5Pdw7fntL8NKLGSXnnbQ1XPuqFSRBvvmgpBD4KCtoomq3Q4E5DfHvuPh8jGmSFDFErbZY8AJD1oxEpPGZqUvPRng",
  "key3": "6664FsWCxTfpQxzrCovBRQyz7MFpdd4LSW2tP4pKDPx5iG1PUgLVbVcNF9eQLQPypZhQ11k9EDgh9epbhKqrTP6Q",
  "key4": "33h2zWs2cUbzvRGZwhEsfJLSm842NayCz2B8QZzBh4RKc6imdBDvm4tRyyi3q1eFNCQR6R4zkDfPgtLDeKuhcrr5",
  "key5": "4WvUbzrrMzD52gRT4RXNkwmRcUCYsKshvujp3DUQpa6kdH5KaiS53hDNRotvpn1KvupX5dwwcBSLa3bjPmuWSvBJ",
  "key6": "MPQK2isVKNouGX16jC3MFz3P7RqaYJzddDo2q8RfB5ri4Pq3ErkWnLvqbGwTyipWnPehmLdBMbz7VhfdgpGZ41L",
  "key7": "2g9cBDnHAuGFPFVYGzyFijQWA4ZLfQmdacnVTpU24yXG1Ee4MesqLs5jZo71G9zoJ4dCT7Gn9ZWYWQmFNazyZJP1",
  "key8": "4nf2RrTy3anW73Jcg8oDPwyEaC5m1D8JjhhXE3qhuSoipkUbdwLJQadXDTGzDsRnHWqyBPYHppE9Cx3HQRQNPx9f",
  "key9": "4hHNq4UcZkVuLnSCRqvqniUjxo6Pmazyv2x87HkFa8bD2tk29L6YQWUo9r92U4qvTBpthZz5tiyvVwMEc9et6n9S",
  "key10": "3HP2gZkdFdwwsjTZUeFuE15cxoNjpoXAxkFZJzPmobHHMuKJnbxTFSXfsTeFZ87rvcBiWm44438TeramoXop4JFr",
  "key11": "5imwA1q1yvQj8bf4XvJ7c6RNKp1oc68KBgXPCUGSh97imhdrvqXvBaaTMtHxVsXvxD5mCEU9QmN4Etgi22hcSBGV",
  "key12": "5SaLh7CnTYhWdhbYZ2ouqMwBG6kUd9GSyQ3GQMTjBsyD1yr3qprxwJyGvtT15SLPvPxLv3KdWoDXABLuCXaZFuaa",
  "key13": "5v2M8GZFKqfGd5CNxtbDU7x3n2uMYLA8NR6uFuWEMw1CemLfegCoMsb744qG62Yxn5tePUZLUKNKzTXvwgRKE2Q3",
  "key14": "5doDu28afdSD3UnbAxFtXwStmpiXGeNG4FD4UXZUyvAjnZT8Gqy7rBboee2BpM4Xy5mFSZngVnRB7m8hnQk4Xn5c",
  "key15": "2MKCJ14uSD3A3SX8nRgGJVbFVSirMr6FE41XFftD824f6bKj4urwQHcsgbbYc3PEnRezEir2qcdBtGBAQ1nAoXb4",
  "key16": "3J6a1abRjoSnXvZivot6qFGLGjxMaLfpCd7YQ7WaVvjQRmbFu82YjkoV6TpBEZxrY2bWVzNdSquWEn22ogrvHaH4",
  "key17": "3pzjTnJ5STJXF95AMuLQfmEVqvE31Ms6EXZuFKv24s1gYnyTuBLd5s7aV5ePWDhmeo8Zd8aFvkXj2nEAQk3NrNFg",
  "key18": "2NwCnY1coGsYme8UsJojkGE9s5U2LMmqZknjBVT6ZQbLnPMhT7Up7gQyVCpfZyy9XWkmMZ6PepocRmYtvWJN4GKe",
  "key19": "4GkFQ6mezdWNavLnHtiTH6TH6Z3meNYU5arJVrR6HLJ5ah3JvAuhQAPNVTFXnQtTiP2tLKif33oMNzxfB8mEinwz",
  "key20": "4ZjcMYAhRs6BmtUpuebXAmzE3GugNwmPskG7uDK86BjtHjFbC3PfApwuxfH4dcY5yoSq5M5nZa3qrkcUzLpXsTV9",
  "key21": "4ZNjXBkooFrnLny9Q7cEPZxeFng9KRaz9oNkETC2WAm6aXAKR2uPXR2ZjMBbeBuQyjjzsvJS76h3ny3mFqa46MUe",
  "key22": "2cEBjoeEqgSdczcWu9nN4fceMATi19qFYDQ6gfgioShdg1o9kMQFtxGeX8Xq7ccYSMmkc6rvgfiKDfAr1Gtb646D",
  "key23": "4JhgaQDQyAjZWiow5DPBT6JjBkoy2poZL4dWf5DnVLdVCsvmeLqFt7haisiDCPydwTXtT7dZeTgSRNnGKQtMTYjW",
  "key24": "29Y7rYRawAfo6hX4ycSUtqKf2S5imWYyKj9AJajboRdwPHF3WqLfRVwb6DpKdD2SsVN7g59cWUYcfmNDMrVs8Vg8",
  "key25": "3bXgzc8HCiMH6wHbUNRXvZUjbzFQFpjC8jURJo4vmzrYZ7yu2YjWzo2B3mY2ypt7cyBQjDujRta4tq1FRaJ1kJ7C",
  "key26": "3ZZ7oozMmUVdMkQTADJBamY57JbeUCCG7n34zzaxUK3NrQn5RVBEp2QxmUcvcf7EymxJ9KAtR9kDtwKxTN475Xbi",
  "key27": "ByNE6gDHg9Jeyy5E7PDPf814TaNQqoPmm7X4tnrmcajrmRPqVDz9HfKXLGd6qhXm1XjVhJr37NJnHJMAL9Y7y5H",
  "key28": "2Mqaob3c8ng1gw5JV19QQv3LmotniMp5REk7KQY8XietiaqTpjiG15Dn9t48R4sx16gvhtXL3i6LDG4k2KYGQA3C",
  "key29": "3KDZcKAVKBCawyLreFcghWs6jKmyzPjc1dFXo47ynqKgVe96phf69eAJ9pTVX3S2WZtw4Df7yEUZnwaPQtcCqcNG",
  "key30": "4aVstgy6Z9jcBiinMqi6QmtV4eJo1fNmQ22ZVK9WZ4u9LQaKGtcBvLto7TCAywxMvi69oWpd3xWSV27YyhgDUMib",
  "key31": "4H85QTgtkQMESWzxiQMdXg12WngtumZT5NAB3VQ9RMSSFGxhTezrGZZcYXDUaidpSN7dd7eoT8XHvHqUhQ88h5VB",
  "key32": "41uMUCqJsufoAEXRX71hv64PGEgBWcc3QJDvvSHtqVAiWkBtrNSgB89b6DUgYMUfbV3tL1xoj3Xu6qLw1GLRak2N",
  "key33": "5hiY6dVhMw8uEtU3RXy7bJxgzc8cXwE3mdyVznKgXfCoK7Mt9PzQxyxzoC3fQSmDbMgxRnViaNpV1rRBH46fHbf8",
  "key34": "7tFNFX8DJ6zXPknXVKTXYkX5sHTroUz4QHVXGCLmCNTd6NkxBphZsg87oysPu4Tr6emimFPfrYvGUpLYsbeJMqg",
  "key35": "4VnfoX9KvRnpAMLsnkjZVAxbvseZF9xf8wiKrh4QcDkWXgh7UzLz1645mSFpfkpGRoQEMh1TdtDixkWzEp2MvEtT",
  "key36": "i2Ne7owHHMeztfy8LP9K9Js2TCFrBrU9jB8uxWzs8FhVf1MbuHwsYRwWePfWtRK4KyiiSszNVxCyDKLdcxJ2VX8",
  "key37": "2xnkdFybssV6dNwbUpdFvTJCyo1cM64uKeRffH8dXryb8vYdCRNYcZN7tJAqPvL2BB5zH8vVd8c5egZ8Jj9d91o3"
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
