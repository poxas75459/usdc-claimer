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
    "2fDR9uMJ9rVLzguomZeRJYd7E1NZ2r561VwSDE9FUB95toXBfXFi6QGkRNmD7MiUxQCazRZFqSCJeFi3sezx4hYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kEtjDbYMX7uka5j3nLRuPpeYVbYUpi6qWR5SfumydxTbkYStRwyRZEVNk7YocduEdgRwfBZbw6WK4k3k1btBKMw",
  "key1": "3LiFBAT2P1qJADgvGc6MyKhHfZVXCA8yqH3e73bApLeYKZMnykY2T1mYMtibAwjup546Cii3P8zAr6pXQRACqaWX",
  "key2": "2ADT8Pe9cM3QUgqJB7qLwdQdoy4tH6fje3bkfshGRCr1ecnFCQoBdueTRUGZi6omL2Xr7yvSbTERXYut1xhdEByn",
  "key3": "3zCWB69iCVtVUMY5G7MfYqhKg6syHdC8WwK4gUk8PsysrNUCj4BY96rNcSUecU4cunxutQfNjpabEehVvyVjxoND",
  "key4": "2QHe8Mg6y21aXo4xeHErHsDdWgjpNuth4oDAL6qFqRVC3gYRFTL5g1kLUTUovqjZQfrNLKYeaBLxDGbDPzmih3Ci",
  "key5": "RA3sXNy676TySakDNFgDCw8MVvywsZ6PSYJmZsZDyhzD2SD8F8T526wHoF4nFc296J9pAvSmGkDGbQdtZysyxYc",
  "key6": "4KjW6MbYnSuRrYBb7u7ic3e9KL7KDVVjcULg7QUUHT6aVHuxoDeuMpXypp3GUPDmTgAWs9cLZZUY9MbbHmao2FhD",
  "key7": "5NujwYNk9vt6s8YBR8WguwWwAxe1D3A1Q9T2RQJEdsnCxR3zAwPzXJHdQi79LcDdYV9ya1wtTZ8Tk2Py5BxMJUan",
  "key8": "18SVEe1M3nvH1D94wtCngBQMQSNs5ujDFfZcJkamqKFfRazmcW72VBe9fPgkEy6eKo59TJRXKnjgee37P654HXL",
  "key9": "5boUXwdMSYgr5Pi4sPVDrhSZ4kBBJQJFQcUVGXYQ9GdKQnYZ1D2DYRBSk4hkL1WM9XdUgJoeShGm8bHSZCR4Qnzc",
  "key10": "3ifxBAhTPZMCoUGVdH6s28FpX1nbFhX9xb3TNVC2br7vbhnGz8ArbiSX8JfzBND7RadHiuYMhpCa7WxKqHtCn1hg",
  "key11": "fzfJSzawMrLDgFg6MKmgQWo9jVDA5Nn3wkQhXCUGesHBj8kpdPJ3DiJo6mYXjXhszSTg3NxXD3f2v4Vg8bpkpt6",
  "key12": "4ydF7J4mx6gv66bGCZ1fJ1V3nyNbJptQF9GhxuWooP2ndWKZTko1pY3xR3JCUkF1W4tnb4Z56ba2FedWij7gXcwb",
  "key13": "xNrATepjK1dY3nHiq6yAyhfJdXPv3bNVHrxum1Dvv1AeUhSjJMt76X9NWR8nFHXK5sLeSyrL7p2XiGnZmNjYeJx",
  "key14": "oZ8m2UJDgXJP1wQsC2iv8sPK737kcSy3v7VANRQCA5BMZrfUU9acCfmVf4KAMWnXaRSiwkgTSSd1D3amQB7ikub",
  "key15": "5eMV9wrwpZrLs2LRLo4hL4JH39dTxeRs478NquqH23Nm9KMG1RGSHwizjHNYAbNbK4qtfqqjT7kXf1vTwuKPqnti",
  "key16": "39pBNSV7pvyUnZsQx3QovxkSpgy5kbfM2iYmvvrcVZEkyBQhDzbGsU3HQcJU2FcRqBbdAVL5YbabfmENkjotRsqr",
  "key17": "5JheMFd4oL9ETAwDJzE3YMsGvH6JDw1AZ4vw13cWtq7z8cM7zkk7sJv3hXGE2Y9n1G3eaercZ2ER3YnoVBkoA2tu",
  "key18": "5xNLQPuCUt4j8cLUb8jkV68sDTF2dBv9F86nTHtYdXpq7PiZje2puWJRZqujthcCa9Sc5T9a7dGMW8xcVDXSEKWQ",
  "key19": "5vUqx8aBj9HQnoAvefacV8bxTvUfbXNM2yY43kAdYJ1vQMeh7zzFPy94i8DU6Uu78ZtsLypZa1LAdFABPMY3tr4u",
  "key20": "5UHKdLMANoTpP6ZaKBeU7AjTtrezDMpqTKZC2QJfQcWGSHajzpxBB7VcH9XpvaUHZa6QZnrE2iWzF14TqpGBhWYL",
  "key21": "3dAsdFQV83cMyZTRdkFpCvCyfX48LbVwUJ2pg5aJJs9dcfon2xJHVSAfjgydjAqsHYAsKarojWDdbWdp6h1h2Jne",
  "key22": "4SGbYKKutifbFPfawGgNYbMdieWbgr4fgsicZhoCMbCdzdL5JbtocFoA2u8439v1h7gXZc5u99dQPHTPB2wWna36",
  "key23": "3nM5AT7dm5p9wceMyzA6iWeevttMf3HdpqRVnMV5ENXE2Wk55jih8PRLsLKMZBmFVeckgDYYe4o3Gi1bWj5mxQ3H",
  "key24": "4eTGKoM2SnDtn51nt3PSKzcL7XPLhkcommxGEA2duULzht5e7di1J4zWu6whtBvnMCpW4DXiB1moYHQtjU5QRwg8",
  "key25": "2vFkTJFuwS2mYWYmtw9oHF2D6SACE74aAfqT58WvNVuAPxwoUs7oE1M4wuQs6v6Hz2w89dENnU7gJimfBG4iZM9E",
  "key26": "3sTARyq1Z25GJrXtvZQErsR2Y3zLqXjHmbhbCnverFk6zpJppQo4rmsEoQFCCXkDx8BPeuKk8zj1R31gNHCdMPpB",
  "key27": "2KrWfUkqJ9eNkNSz2ksT5e9YaQCNBjSrMiGkCBpnS4CPC52USQBx6KPjA2UUE9ZbZbvantDwvfUxwV35ts1hpdQg",
  "key28": "4guttv4ahwdwPeoAsHD1Kb5amhs7pboAhJ1y7hLnrdVqioBZcd1yDLhVJAX8FJhMMNzwwEjNV9J1CfQAp2m7MAJT",
  "key29": "J17rqkGiRkGw2dFdhScxUDXrbMQmmHGZ1q6yc8KtKxpuwWxD1n4iV2ACwetVQdQDR8PmQmn9b4HgYDV8Dd8Q7gA",
  "key30": "3mN9biPsqRVUtYYUsDFFtr3R61xeuj1L7ozoBPfinsxLrYHLH7EPmiTwirgtf4EnMgYNwwDrnXVLJcUjVvs1yrR1",
  "key31": "2WnxyvC6jex8gXccHJ2nKBxh4eApfNrYwmwoRyjmVrTcBd6PzN983WytSFATYdMhyNMDfWxLks5bwzCR8KQsydKK",
  "key32": "qW9G3YD4uQmUHWerg75VWiCGdvxZrf6niQwxcEaFKdWrbZnZzYfDL3WZewaohXhtF3LTb7CEq4UnLN3kAQQkzt4",
  "key33": "RPvqme718Xm64LfXJofzXevAhrbbHdGsXAxhmDZKVE9DerWtrtzG5QHQvMgXr5QqNsVswXHJshWZhxfToWifxcp",
  "key34": "REodfz8rb5yt3tLa2cGeXss2diB9K6R1F6E7HPxHtdQF65WcjJ18GMDcVgJoESCfDTUzRANUgJk6grNCe98Gg3x",
  "key35": "67SWtMy8pDpsEhf5GfCdtbna3i6Nt9wZqiDvLMTzo8LicdaugBfBuhqf5wDQXxJgJ7RgNu9Lxw7Pj3D3ocJZwgZ6",
  "key36": "3Zpow77yqf6fnKux7SQngdDEWQXZA6a4cLrzA6TKPcuCWQc9ceczqKKPctYzKHHDAJ6PikMYZs5pWDb8156QuVzL",
  "key37": "VdgM85YxqKDcoR15CBSmSfFjMTFGTfpMs6eGnvNj2s5KWcBPEhALdAvuKpKTzEEYJUWWYWRGoXFvdaqkoC5FZy3",
  "key38": "4zuBGDC71zSKR73LMuUBmQUdYAuuCH5qzaom2WiGTrjddK6RztiVet2h455tL5MdcZ8QzJ7LAZd4FyWyYvNDSoti",
  "key39": "3ezxiYStSXU6TBF3yszTAkvSVL2hakZvRvP7n6hk3Lsn4rrTsMySCFSXwU5nVcdqXE9gBEa2Ftx9KKZ4DjqVxzpf",
  "key40": "2dbvKe96JKn653HjDvZRbEAjuKvTrCzWU2TSQU1zw6uqajjHaBL9QTbvUiJNgFZBJD49in91vMVL4nHuzZuMeTLG",
  "key41": "61giXibAovwhPiAQG5GjqQaxDhPP5kSfbV7QkfTdNcudzWk2JTV2K4gu9WZdAQ6UgsvWnacSQbB4X47DgQLizKJ4",
  "key42": "41KhHgiBMS7Tou6ko8ExmcJVQhBc9v1tzfwgSBt86e4QkkoJ8yMnrytvr88CDH5c3hzVmbqKFkVh2LsDWVMZ9cbV",
  "key43": "4DsAC31meaLgdLNhtoxwxFoCvP1finm1f2wxrYm8b8p943EDd92VF8NrZNzU17JSGm6LNWM3rDf4dra6z6P7Z2XW",
  "key44": "GDJ8FWX5o2EZoUvE3kuF8JAM64PtyHhmC544kJkmpeHgFzJrCjoNe7ef5euJ9wKFcamoDkqGPf6HhpTCqSiVbpK"
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
