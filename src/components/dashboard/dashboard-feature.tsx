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
    "5yDcaE4X19G7kCPAL8bsK7hDH8L6nWer5nLgYJBaXkbaVLXuYhG7pGZ7J4SGrcDCUdtjf7zAYYAYJtd1AsKoh9g7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dJxNqzh9whD3kG7tmG9xqopqjxicEUovBJXJjyj1yw3GUg4FkFwJ93G6XT3WyADVaBhtjJAtAF7Mgd62zhbs6zF",
  "key1": "eopURKSy5SsgmkW3cxb2WXUqP6ratKhEdbjUrkJFAbnipZ5LRP8YHHpJ1vi2HRyfB1NwsJouAoy7k2ddA98jp3b",
  "key2": "fG1HSNWYqhqrCJ8wTBYZc2jrB23xBpbyrZtFWziWWu6Ld44rAeeuyuQ8BBXBC47szSSS4VvXamVKA9KijwnrJdg",
  "key3": "3BMdUjPmqTyMAWA6czjAEQfQJwYHNbSoadircQmRcca4Mddh5BrCEJ8FZBo7mPk9meaNxcfzfcFijbFktsZU3AdT",
  "key4": "5JhKck6JjgzDYzNvqpKpud9CQXYiQJGQN28TdLowSVt19Hqu7rtGN1kkoFtBSB5L2cvyj4LQ9e4GPDyHRoThhiXk",
  "key5": "2iEQx7UKvDCWy59BwaLCXU2eDJuHfgeMKqpLpKkx9cacUasFf2e9Do9F6eeESCiC9dSQHfe8gr9J49SGj4KNuVM5",
  "key6": "42nLrK5KPPRAoBxkrTZ177M9y7dMZognFTEkJgLKTtgZ1DNJ9vmec975NgKFLaw5aqUXWyi4nubjuTmtoouV5dFH",
  "key7": "5pbJzzLFkjChHQ3mrmt2jKeyfo8PKqZoecwykh4sA8LS3xUjjWbbzcFuBkNcxHDzLQ1zn9emppTXTY6TfTQuNoy1",
  "key8": "5rqCyYMGBGjXqZBEssQJ5cxG83MLbFMSK93GhKCwn8JaXGXaCHfuLJvuF7pC33YE9iyVCkyahiVp7MaNy5qk2YAT",
  "key9": "3icBV2TkZQFiN22nm3WrudecVAMydtQxXf97tUopkxvXbvw4A5QDFyh3ZQWmkcK8GPMfheo355GkHbykZYGFa1BX",
  "key10": "3B7Vzpi1wMJpdvNYwwsKaFFgiH7CUKvgRbZhxWSSzFSXEnkLzWv54pBgBcMB8ihKUNHzHDLkto5KMCwybJUaq7ew",
  "key11": "4g7Ub3HDLmnckEnLo582VExM43jeyzE7ygdofz87VPad863FV5g9DUokAN3NXzpoREV6o5XGevHhL62Gvnm97ayR",
  "key12": "2vWJreUcEyWx3kanbC6RS94KGcVDvtJefMrHduqerSMRXKrX5Jtsvra1t9RJWvWytJkPT23pwrFZLSvteHLnW5MA",
  "key13": "2wgn2ugQ8dGa39yrQTg8LDUQ5epVnRRcNYpVEgVo7ML46EksJKfQB6xFtTAp8uNHcE1R8JTuaJWKqDDNwzou7qnX",
  "key14": "3tnKMVgYAPXWCSP8zgYvXM4ZTzi6FWL98dPUcyTCZ4GNeC6MoZeTR9Uos6ZV5XykG78ELArfzEnVd6W3WGkGioLU",
  "key15": "3akxRJyqDGMUDnLz5WGYDxBB9ucMbH3wz5WVGrNtRyEZLyxcYRRapb4XvnZLNoopSkawSsNxy5ftoBPxZSwfw6At",
  "key16": "kqzfTbBHFjpFjLgEYicCVgJwM19fYprYcotoAAamGv2hTETK5TR6Wpq7aaLm9ewa14q8zyFkcPwVXpSUudwEGez",
  "key17": "63PeGNokGqnyRFfKbDQemSTFhgWkNtFhU8gzh2Qp7Y7jgLoLFqXuXHAM3VdZY6XV8C6kwpB6o7uWCzK5T7xmW1ia",
  "key18": "2gL2wYU2Gt1BqEEY4mpx1fwSWvZ6PSR5z9uFGTr4SceLdXtWVmSo26o3E7e7RezJ8wq1LoV7x92q3w7rR1KfJ2Yp",
  "key19": "YK3Si2YiEY5aGjKJkRw9yyNsMkSS9K6NBUBL7r1TztZvvX92m5dL5umnLCh3TUxHhWcWP4zwJCW5VkpDCh5BpEM",
  "key20": "4UntXbwSEP4AvTNrKi6Nmppqm9PfQVp47HQyXH9LZUJNDfSMxCf3GykJ4HuA1wE7tkwZdhGg2cAsyRdsvNFLYyak",
  "key21": "4FvfE1A2qpX4dEcamcj73encfyZyNBAwXHuCKYPxpDF5LmZj4pCT7Sj734U1LukdoRXhW815EXuiNhsQgC3hdj48",
  "key22": "2RfNDGTfqB5kpC57xRRcwYYJohfqUh7aL1KaFumVFsn5yQDtJfC8irw2SSUkeCzuMbMNxGHSxDRUZJmdyajZocqH",
  "key23": "4nHfPmxFqvb4DRaKPT9JzsG8T5ratdtvNJKypCw2JqtG8x1ULV4Ud6YuKn1eTL7KYeBF7J5j1HTDwApdjNL3z4Di",
  "key24": "28jNigjE36K8xwaeiWoUAT78aYkpMcBHxNVfXEUeoQcgbnqns19QfXK1C2rzySREipGL7Gm2jTZvZq5mEtiJn23t",
  "key25": "5u3Mkhg5hBaZ5NthsVk1UzrVqqTyt6JTDUrDFwqmsfgGhTayfxoxxgrXovnfGQS5Q2k67gEy1oSMTVzGRwNbZV75",
  "key26": "56pfMUZMG51x1M3AhKQMcPo53T9iioza8oTnnXZvHm7Xadhhypd94o5sWwfcwPQqZKYuh6DtPQvSbrmqhGVNjiUg",
  "key27": "vuZqwayAwRfUfyH1vngYNzPkvHh2eYVHDvf8A6FhHwGSBZh9DcVz64tvqBkLPf286oFoVqK2cqf9r46sF5cqwbq",
  "key28": "128z6zeCQCRxFUaPghigwoxxorN36JCRVjgpW1kiUMzx5WxjYSmE2JuZEjo4tv5J87tcRYzz5cCNq1dfVmfe7mKC",
  "key29": "3ywS3YUkkcJNiQFa4cwMHXaEfRbphQnZfaGQFNJKogtC2U12HhGcEW9msyARtN4NB7APNcA92JGWh9D5PkzTPB91",
  "key30": "3h5oM8fDdBGMqHAx5WmQuGQMANzK1ySo5BvyZAdPKg1pWhH3KRZ3DMsB4g8qk5Jkxh3eGEkBYwR7Uj3QhLkbEqcV",
  "key31": "5fGHtzNY9Apuzmy6varNekgmoNvUTWrXQCADtPpmiN9LtHYbYM8gtZQtgmDtvujRBvTVpsc3BnqawVp6G25kU8mB",
  "key32": "65u9tLHCM3CCmLeGibVtyLSsVwCYPisuc6HEJYicnWCaRTnVjceqUry7KR1FXkR6kBhVs7DuufPJV7psDUCPMLcR",
  "key33": "4ieDUkAuBL2EkYWPEgb8R7QkW4j7Nxgd8m47ryayjgh9bSqYDsT79gADPNWzNBXkVXZ5xWhaTbAjfFLN51bgWWmv",
  "key34": "3dVtdnG2edHZdAsUtxsFbJxdhZrmRdwLGMsEeaytcvNxy7PZxHQcGRRgrBYpTCRyVDU3oTJGhCRksCcJLTMhWdM6",
  "key35": "4uRKR41V4FExwqtb6z6m4aqcUL6QvfY3fozRXJpCZCCV1fttWJFhAAikZMXjpsbYvFkWjehp1MUqqJcZ48EBcuEq",
  "key36": "2wsZaKQWb8P91LCetYSpTT82zn3wvmHp33hMEBdZTTGp3YVYmzM6Lzp3LvnzXrdSgdgLe7gUKxfY4eMKDboTh7v9",
  "key37": "36RbB5SB7K5eaUw8QkbCZH7zsKQS6Cg2YBVtMjAx4V6Wy3vDSBq8PDzB9TL15KULuvaiCJPTkgdzst6ar4BeyZK9",
  "key38": "2B4XncDeRnPDnBhoQchiWC7FDboWqgvJ3YzpmT1MgsUYCH21RgxyV4sSXEFx959GYNuEkxLQL3vK4A3Ki3CjHY6n",
  "key39": "3uyZTmPnokUdo9xyXAYKEzFM4mJcszvxWceKuuo3misLkr7U8HVbxDFnypnCLXgsnccDggzaX3XHKq3UpCokoPye",
  "key40": "3t5bfrUCCvffvEoDWccCMwc67g1iBqrv8jERNas3AEfbekWMoUdXWjjgjy2Vm4jtJ4owmbvww34bvJSok1gAyyxW",
  "key41": "41qNYGZLymDaVvhAZiYVo36H664D1t2g9a5jGUpN5Tzd1osFNANREnmWWnLtUgmc4adHooZSdqSefL7K4PrYNSLw"
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
