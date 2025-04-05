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
    "3unyLh2uwJoTcXy7nQ1eVcT15R95HFmWMFJHXNsqLZLMrjmYwHHBR7poJjCJcnKKKWbto23BtbeBtggcPHbW3Zzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65GBu8vNDHkZ28oRVZ7RDQdCYXoWkmdPiDtNnMy9aNwzkNs5qMKVjZTZ9RpwkNSTo6DMJ5m8ZspyduVewpdkEYW8",
  "key1": "3YxkE6zDx36Fdwyy86XmyXckBcPUu4MBVeXc2zS9YDZTeeP9A6FdocyWSKbMj2RSBBs6MErXgxAaZVPF6VBNexxM",
  "key2": "DnyYma2LgW2Njt3hZHxdWMeWSfmEzgoEoRgnUY96KJQ1cfr9E725rnxYVqW8oP9bsPXceGAhHfytY7uHo6DvHjN",
  "key3": "63moo6UEgqGdUns4B2M4XhrYk4HahcXUvN3o7336Fkqu19ZuRKe8RWp2E6SwwCXWrDhWTd27axtudRbwEePgVAAM",
  "key4": "5ZkD6rxvXoQx3367cpR9kwF82VSPtZhsrj9JSJmVT9xNjoegaXjyCELya8gXP6gwFNLpuQrkQT9qi3doBGuDx1rz",
  "key5": "N8RCYjcvkWnw6KTXxtgg1RNQTmRFXphrTaEB6C2DZVorN6gxYJamnLdoUFZRJjRe19jYqSExbHUzA4m4DY36ebV",
  "key6": "4sPtpz6gp8VA5baZyYqDSAVtg7gdMnApJ6UjrYnrmN67ALSFg1R6vC2Z9mxdfJQzLAgHq9upsneAZLDnMU3cZbpM",
  "key7": "utLuxmao5cszHku9bc2zLDAxuKUXAjveVM6JLpM3vCQkH8adUsNma7zL2MWRvBXi8N237JaPtazL2cDNekrC9pt",
  "key8": "4BiyAXGVoaTnazL3tpAEqWvJZpc1Go4gWXnL9pyJkrVo3CRzXqeHkyBWnyQmkaHtGWUjCsybaeDXUaaBuXJuDbtr",
  "key9": "22G1x61fMJDeio6WA3U8DSLbnXbbDj7TgS7WktHyfsy5Nm2ndhxB9r2UCkTRuHMc6G2k7UfRot8dtyHsVgrjRHky",
  "key10": "3bEDRt1Fyp6EF3ZTZNVmqAbi4KHRCxfHTCXAnzatznAWtb1jrFysqRpzuFMa7AuqWsQHiUMhAiSsND4FWTfzrCAL",
  "key11": "63h9nLifkePRoMWSMCiwC4T1yHWhC8Gkhd8gbqn1PBen33HHnu2QRgxtSPRL4NGo263PU4b7rNufzwPwQtpVKPg4",
  "key12": "5n4T15tRmZN4tgeaVDR3dWPPTHkyBVJvjEj79LWdTdrAD5C1igcQGcHF6rmx3cxiTRjPXJx1jytr3vfM6sRzH2tj",
  "key13": "2GAB1U33t13EbmszeMtcikpyTcAvh8pcEy86boD3mpiJXYXesKMiaVFKopREtSRHVAiWtZPVtrYSSY8juzXR6xXo",
  "key14": "4yr2KXizDre1qG6wbnhEfvHrjdBDUW4sKkamx5wEKDWogKTq8D6r2Ppq5KWn6yo6mpXXuWPg2PtfLRDMpEH7Gngk",
  "key15": "3QT5HT4B6emztwWkaNHkw48z7rioiK8ZKSBNWsJZ6dg8VnP5cyErxoSLafBhfEPq2VzFFX8wS3sy584UiZuuxv17",
  "key16": "3TUnDedB8emP26xkZTn9cYeRBenTitoBz9Ubg7LkpSBMyPpnFoAMzNW4oeBe7TJEPdA1Vwm6EUky33axEHYqND9Z",
  "key17": "2sahgw8CsqRYkwbtGdjj4TomcmyR9VkGoC3uT19DQDW7i2VGvQpShXeByF6qHv4VbD1z13F9CbLmQtKs3LQqJr1y",
  "key18": "3G3wNYKuhUGfUTeZs88DtEzLdxu3qPcrcpW3zhCWP1FCt385itrcZWxZLRVLWHdk5bUGDRYVPCv6vczjxFZw8Vzn",
  "key19": "3ic9KRwLoMVmmA9oWnXrDzU9YVo4mDUsK461rfJuWpzR8r7BUitTQLyMHnCv1sBv75YAkAyfhj7iVBM3kY3hfxbX",
  "key20": "5SyL8pRLWDLa8ZtEi7Lrho75ecaKdBSLiQ5KhK6FaC9fPczoy9uFs9bbhMeQL4KKbzS8d6ruk7paXZsuyWpGDJdf",
  "key21": "3Se6h4oG5Y4dDWKjvkjFvi43TSJk5Ab4M9jeks5d84811QSDKze1c1MAtbf4MfiApYBy5tNwxPwjtyqntJdNjNyk",
  "key22": "3D4wYbJDc6yoWr6paJaw9k6kFEKEG9AauvxutLQhQ9hQwRp6cCezCth2iXhah51aYchkLkE2CWuBPTbn9dv3vbHZ",
  "key23": "4nJGhnt4jNzeEnsFnvrj61BkLUDS4zbhof4JsGKi9sMfWQdrVaxPnEtrZSEEpaTZDZjACLHQUUkqsKkFckgsu3XX",
  "key24": "3qQsZsi7pQtJeHd7b64QSNhDKw3vTFDtt78j2GKTGCKTmQ5TDtPy3z8n4v4hKbCTfFX6iKTCnLSYAD3LnGbDi62X",
  "key25": "4uL8EX65c3dT1T4ER8HdJNccwo51iF155XbeXnVMLdUcpiWxazPgbvgEDwRFwEy2T2kxfZKGdwZm6ZActUB1fj3E",
  "key26": "61WDTYwHHnuNAueCFe43xeYwFpJxehsuDJzHoRHDbW7uKY5NkymxsBqmsJgjqjtJHGWNqF1hQae2s8UEAMiN91jy",
  "key27": "465rFWVXrnNkWAxi7gmQ85kF8QpZY3LrFS7zCWGqCFBKgAs8ZMjSxjoyf8HgG2npaMJEzs4ZejFpLGhbGDvPQkGL",
  "key28": "4YCGfJiZvqtrgWFBY7eLtsmdBmmVgvHJB5pRRjX7cBZ3NPv5L1X9qvV5qso5Y56EgNuRG6mYcGNfjqjM9P8Mhcje",
  "key29": "zqZLcziWhGYXdCTqgXag8n6qSFmT6vdnKFFr1r7Fo8Mit485yPNRZcjrD3FA8abvdxUj3H4BRfVB3TXPxFawy92",
  "key30": "2wdNo7JBJ7vrYfxwddmyhb18GqCmmgKNVpN7BjJp5hiZmPNNCRwQeTxXSBjSv4QX5tyswoR5cMSJNihLX2P5ekG3",
  "key31": "5ibTCpgvciwMUrwgDgocLfknk4Z2SebdwPYTupinrDg5VEt7QmVRLASU6m3cDJ3GsiciGkdnQhwZ236MuwENiZVp",
  "key32": "2o9hagMKD36omkMj25t16NdsE8ASo5paWSk8j2ZRZs4TMQaQQ6DAYdqBHQdnW4aa2iCEhGcR7ekVhHEuQPjzYGcH",
  "key33": "2sRqCXXQfWtKe4Xt1NmhTsySzLGyjzaoA6fhZ73EMC1cFTJVkkrgvSsSnZxHg9NkNhgNHg2dqy7uKS3G7uDyVAwG",
  "key34": "5mr6eeHuXdViERreea8jwQftkWqNwJ8aZ1UWDw5gAgiy4uUCw6qEujFkEY8j35SszhvPCTityW96zBp86zaDZuht",
  "key35": "55d5tSdh7BYaCSJkppj61SYfmQV6bavmNV5xAV87YFGy4b9RVNXMdwG1axC151FgLPfer8jea5h3xtaMG2iThrDu",
  "key36": "4w2xVbgzUnm72WjeWbGTm7DT8698cdm2e8AsPLMxS6t4ute8GNq6fBNEjzVMjpBAZvJMcbZ618kBNftDJ4KqkYAf",
  "key37": "2CuDXcqV4Q1suA3fDHtAkT2A8oyCH5aAMHqSNdmRxV7sBB4e9WtUwy2NN7YbKsNGEituB8NUgCRLf1Sy88aUPSZL",
  "key38": "ue1ctYEzjmadviRnk6i9UF6X4fLQkW3PGYntRRaGa897vZgN9xyM5qPmAU2CTSciWwcjokFvcN14DTNVhBE38s2",
  "key39": "N4FvG3jjmRNFWLUrP9xYTaww8jJWLsm1pTgoF1nMztFx54ccx8xNz2Yy6kMxWWi54TBFghBUkAB5oZKUNRiULJi",
  "key40": "5wM9uQWderCNuzbHuar16GAcc5Vtco3dnhS6N8F3P7a97pYfAyzCsm8hw9FhsaJFmigGV16FTyAx6wUtjBHKmhPo",
  "key41": "2WP7DDDfvsK7RQUYzycHt4S9K11xNGeXgiXX1uL3EWTiz3kCEKg4Dn1yHSCrsjWuajNDp9VitCZBQVjD33TvubXN",
  "key42": "4FehmNBu76FhXh1JMueH1riYUz14X1pGhNvAFkUrxDFbQNTz2fdCMShqGrruHnYMWDkMrCu8yUVrEvmxKi9bU3zc",
  "key43": "y7BQcaLbxirbrCk6WjYAQvq6qtfmp6KYvnsaJK6D75ddem23DksJpWAEex7jfSsQ2mQPJmUf1SgCzuY6pZFs6QD",
  "key44": "5GWspQaS5D9o3ydHvzxzoyL1NtFgUXUdLhN9JFJTW6MbNpnak2wrLKPCrfBMdVKgSLDyv8JCTkKGbXWU8xyEE3Ri",
  "key45": "2QXtzAmWLJ9a7Aa8hnwyWAZEfEY6SRJNXLcZxRu68gDFsWsuzwiJW5gqhDHfarteqLPDBhGZLkmRSYTK5oY4gYiP",
  "key46": "3RkMWpqF3FQMNtZRj37vSMDTZYQgTx715UUtVmchhHpZ4hfUiZcvikTZqNZ4bj5DfHKnNrbU33b6gkqL9PShcQBR",
  "key47": "BHtnPXg4G4A74rpbu3dfusgDNhkP78FXUatUafMXhPissie1QzuNVcGErWuQZMNBW2HHmF2nj3c6Jmji76yCxQv",
  "key48": "3WayhxpaqBeajdUMFrbgmusTB5x9BP8g7c2x7yJA3U4jmLhPbW1XDyEFyFBamya2sefsFCUTsiuRJHyjgUDhLKbz"
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
