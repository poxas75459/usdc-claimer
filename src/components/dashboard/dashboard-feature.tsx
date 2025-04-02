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
    "4yfLnZJrfdVieQQHsshikhJ3jkCEH23U8R4v2anvZpJG4SJvhWBrdsQx2n5tTzg8qASKWgUi2q9tGcMfPXESYAh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "639QaLMQYPS7Bbx5kfi1sEqFkBQVwqLf2A4YmzKE6rijgAaQyQbunTaJQY7hXnmMsuo3ZWZ8VG1LzsaaAbBqrxHm",
  "key1": "4kHp78QpsFhFNZFLVxNCdPwN6Y6fW7P7qJms92mqFUbHtEScA3qLkHfTXC1zpT3tJKu1XSLMoN4usVed2jKN544P",
  "key2": "3Kra7G5oSgaDTUwjLWqVneibmAs2vgNNHd6QMGZLJueS8r3xeaqXDp4iDvPggrfMJfK2pR5PFqYqaP2PPkdXErgf",
  "key3": "3iRPFCDTBznWKvwRkCsMdS3LETuwBpAqp7YgWynr6PZRyFoFRHBUQEKMRHcaScs8H2iBraRqkUcTR68VJkSrV1g3",
  "key4": "4qaYEeyEz5RXxX4q2EtKSXbsQ1aLwJRVhULuSTHQBHaNCE8rF6zVFtoywJYDApTB4Uccvhh6kexbmjfd98jCGg6T",
  "key5": "4kPMcSXd4QXraJFhEngie3cYq2FhMJv2aYEWqR6HwypWnCJ9QnF23iFkbT3brTfsXeV4Yuqx68wgiatpttMRkXiB",
  "key6": "CLfHwdCsAKq9tGirFGAT1KTAwVrTm6TebyPuxQQPL5Dns4SsZro8mgnmDi1gkHt4DJXwZvURkbK2s4suh5JWqgq",
  "key7": "UhGwYKF2NFTtscty7qwZ1q1YeuXQb68qD5gdSgreY5nkuG5F9PmBZwNAoXBdiWh76CBQbiEKE6hMZMSUkHEadQg",
  "key8": "aVpZQ3obBMWvuoRR2YMkfc2zpmNTVayTv5AqgXdRHyLVj9eGTsrY2gCqsi3eztjgTFQzcFVrXFTe2kJfV3AQ54N",
  "key9": "64Dx4Uay4xyU93r1KkC8GoRufJ1oLdTwiKxUzswZRZjSxXpfipYzacvuSWmC4Kh8zz5GPYSVzaxgyNwVuUH9bafc",
  "key10": "3RZsDLjLDNjtXdFh6MZokW3MSzYY292zGscMcse8aHmKmSZKJdy5VZxjBAJzK8YJmoqU8sBLtExPUHBpQAD9ni74",
  "key11": "43HmV8xRJ1nv5GiPKa653DNfqHWZ3vWgk7uQLXpw9ASSgDqLpYYfKe83k1xfc9UQhfKpck2AXvCFNYwsmaUGzva3",
  "key12": "5WR6MwF6ynjzaR7VahqCRb36RvGnHHZgBJdkGUur9ttZhyRNogpW2y3QEpjeZJrmqBnqgCa5G7UqXw2VxSNUrVxZ",
  "key13": "3inpuPX1X7dejMyGsWzWBqW8Hdwdpi2YQC1F8YgbnRTBrP59Em2h4uXVbsLGEbeTH1Yo4y4tfj98yCbbNzLQ6T5h",
  "key14": "4C2N6jqWXG9VATv6mTfpeKjjbJqLG87X7mnaCbR4XvDnLRMLgseKf1tvpBLGo3iYFASHmdSiBditCKgmtQtheq8i",
  "key15": "T13kvswSKKgMntACebre9oMmUdbvoEUZfKn47iobRfdwmAKCs5sgUPYHYBCWSBBFBEwk262cn3voLNrVPPvnxtZ",
  "key16": "3FtCzYG1cQrpVE1F4UWgJ2ZMc92aqHSrBk5ewCRi7fDYcjr147L1w42pwq7cVd2GMF3crsn8cUBLLMcsJdZ6CsXg",
  "key17": "4wxmeqSTBxkoci22LzS1seMKQFnLepZFykjAmV8PuZ9Khou46MyPwoM3d35PHACGGM6sGNNc2Qh5xeTSDRZQrH1i",
  "key18": "28VyB1KceM3u8LWn3VA8NnF8UfjbXZEBHaxocj4sft3WNeXuoNs83q1aXSEjD2ePqzrM9YWR1R6gv2LD8gFathy4",
  "key19": "5AHzpoet1hd58B3AsCmueUGsiSRwZqvZpXYp1z3x9Woq7MNCinXfDLPGQUBEAgUpbvN8CbWFeD6eP5q443qUQeFE",
  "key20": "4kT8QsbqYUtffykQJV4SghGK8tUQ9DvnMHAYCXcdvPkUAYDSzZJFn4e1UHQe5iPuQBsGGMxvLbmoBKLnmexYAMA5",
  "key21": "2vg7vJ8UhScPRgAxSbZkQCa5vFkmK7vVCPr7dnddu4zqrSBqcuQoQR18f8nscXg4fFEWfbQ629FdAzDQeAw2bps5",
  "key22": "25SvpsEmi57bemU9uswPsqUDfq3H65kXqtygpNkGXo4Ru2CYLh91dnrSbdoDSxnZaAJBn5EtC2RehuPAM7MU1q3a",
  "key23": "38oiAZWtBfnEfBX8LXjhG9wt7nz6shZNcfzvkJNbiEeQapsEQYuefd8Mq68dmifBsERdPnu9rZ5GZFMjLSbgcaaV",
  "key24": "4nCaLYz3ygnDPcef7oNo6mgm6MhhkEpzVeP4PPLSEk4CR6CmLEmRFEF1bciqvubos9tzv6pwK1x1ma2pF4uakFmS",
  "key25": "3r1icfo3tYc2LWJL8cNEbdvABKc7de4CidmSTCtm5Kz3RUyszqMmphC7eHMnXmD2BVbRGyeuS1mDykobdjAKHAom",
  "key26": "2Sx7m3URVnPUeMgtreDQtEuh2vqjBrEKNXCWLnHWgqGkoS6nD6TUC69YLpVszQFfN67rjSEwMXJwQYaJqULgQLgP",
  "key27": "3qwciGaKWRZK3a4g6xkcBJcpfRxn9Az9GxdhMeyvnHzpHaphsbeSmCBkrXwFisGT6GEm9zD3KcGqHa6ymZHdcquh",
  "key28": "5MQ9K3inkV7NvEE6WX93CnFZNhvAMi3MBsL1TCyF4zi5zhomJGDE8Fgvjj4BVNSgs8htj4s1PWuuq1gTtU8VpgZp",
  "key29": "5ZH5t6KWZTBsCQVZtc58b2dEckXu6s5wX7VMyymeSHWERN97D2yNFKTTV8ZP8UvT8NbAS42b6SgdMtAWZpCT2U55",
  "key30": "474MZCDRGGvG82pjCFDy7zYCpjp7fVt67MpTSTvjf8fJmYLhmUyrE3fr5gr9HVWg2VvHo1cgKnydjjKgNeScZYJM",
  "key31": "52JpN4Z4U96jGwbTRhhgxBddz92AihQkkL98aUh9JMbvfwd8RBMoHW4RR8mGVo3pPg7k4env22oDoV6NyK6m8VPM",
  "key32": "4AVbtD763Yit2xRxHJ3R3uoCbLjEBhiV8aqXmf6sUVkf5kxo34E5HBe8mLtCrDwcgaSTTnKx5gAN9mZGej2HXiYM",
  "key33": "4RVTZVhTjHXhg68BxmP9cdpJ9Dho4JijmTsMii6dg1ZUx1MEowUC8H9EY5zm7DhbcATrKahhpYETaq4vh7NJu9Q7",
  "key34": "aKzdNwNr9rDCez9qc4PmdnCFLkCdruNKywgN8juFoqpn99VFTNyVy5Qx55P4PAgKnCH2TXJxxiGQ6uDSWdr1PNr",
  "key35": "5qDR9Heota3EL4dF7qioXPGaCEzZSTvSY47fQtL3Ftzhf3QMhvPQUCn7UFMXXR6HSouaWrfQcL6eMUxoXBBazmTc",
  "key36": "3AYbdExef4QtYBESPn9JfQHg7xbgTwhoUpPfvY2erUGfxP3idXhGTqMzSrJFVboybHpLwvrJkp3ome9N7EB1n5Fn",
  "key37": "2X6odCEg7sr7dx1YhyaKr47g3kKGoGXkYzgY1TQZnEaJLZUtXPoqdZ7K8rWNwjcVjSD949zCrQXP6PPwerRzNLKH",
  "key38": "25NzqQ7EUa5XGYimAe4Pfbc3DFeN4scFscvdSZ632319UcUhGNNnPK2wbuJFikfHYy9sNh8a8LqGuEpbv8h8B1hJ",
  "key39": "kdwCKTrdm13eUVTTAtLPn1zee1NGS6coKcanS3MpvkaBCbwdjUHgRxJNyeQhKCz9MCZp9oYwLQxw4xjuu3qTTof",
  "key40": "rPyKpEoxiTVEhpgCXiZTDojPVe8rrqLt5ie8DULbm6rrj8uvJToDLiJLk6vAk9m1LijuSdzMkWsvt9oDz8H3fhB",
  "key41": "2AdEkVdchbN1EZdBUeCe9o3mDfDYhQCdQp1Kce8a2XATqyH5php3eHn71bPgkd2S9Bk5qUg8CSwojST488McpWAj",
  "key42": "5aALPqzgMCUWdfPRZN7skJTM911E9A3k8Dtkgaxmf5K8zeEcPj3SpaJfWGwTwnp28aMM8dezBW8q5ojktVwwbNx5"
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
