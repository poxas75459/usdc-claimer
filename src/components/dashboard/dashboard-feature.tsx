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
    "LUK3bysSGvzbK6HUd4caCwp139vGuXvUeZzyUHwioWceMjwhr11WbgYvghrHsfZGrFmF7ym6ZKHqx8r2njyiSra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sn7mMcENoAKLXhuPAp9osxNCuGccAbTMXKxZZgsWdq5ureigUHP3fN5qdFsj4RThU4Aeb2gWYY1yhXSxqoJ66AN",
  "key1": "5ZcAuNAHRye49WERT72C4eDFKif1nfvr6UxYJDApVGLpAiirVDnnd5JdMPAQD6jpqzpJzzeQcDmnYKe8R5Cf2Vv6",
  "key2": "267EtUyFRrmVwZf7ATQiNqL3LPRw2wifJz8y36it7JDaZqaaVRGv4EEViVtTgkksUxEgtdPjAkptirNJpMygBVcN",
  "key3": "5nAwfRuVZWenCajV5KbCjWoKZNY3Wu8uFqBcYDzZ6ppT7STqhNXQ1PyHAPKh1zr774YC4RG81cM4YH81kbfzZnfA",
  "key4": "31GKRTeiQpMaWCV3KRtSh5vij3z4uXHhwj6pXVgdXuHYyGs9adnrbuTLWdMGWMJThBrb1hDAEMbzUDVC4kMennAW",
  "key5": "5eWxWsJUW1zp8poh1JcywrDG5k2ELZ1GhSTJnGDurYjQ2SLM7QRQczemj2VS96mCdvBo6Brk5ee5Z8XCB5JpqXip",
  "key6": "uLwEwUULzAxi7quzHdFA66AL2oBBTGFnyfzz4uMWStRQYUdmejTWnYXKYsjoHnS7AWvVNNjCmNQUoX1jDQNWdK4",
  "key7": "5jEHApepK3z3Z2kDJCKyjWW5hBo4jMwsqwpDDvLmwVMq9gsKyoFrdH5qJeVzrxkrKqA4EdP9aWGKYSN9iRBhbdxf",
  "key8": "2MSTs8PcmDgQgX8EV7CPkwgevZwHynbetw8dt3ysTSsQTJXzDcqZL7Lfj7o1EphL72L9tNA4ZUTHsq5KmTgMDtLr",
  "key9": "4rH9itnCjcFp6EsVL7iZFW8LWJdBrmLhPQPetVYhstZvrdphGNUdFPeXuumixmXxmZxTxEb93Nn4Eop2kABEJUqV",
  "key10": "2mJCufx4eutqeaPVxCgMg9Swt53Rmnjn8avoKrDnM4kMcCxwx5Bgut4NcjdkwtrBsUKwwpBsJ6udHL1wfAGE6BVo",
  "key11": "4Wn73A7N56Q514VnsHGHoPbSkcBXNq2hMYRcVF8McTZuyeEbrLr6nS4N62vMe9xTPd33Uj3tEDkKZCuPthgAmcfn",
  "key12": "4yPXYdQRBNU8nffUXq7kaXbWdiJtUgnRpfJHQLZjux3UR1gZD3SXsXqtarHmCELa8YGKd72VCX3WhrjPR5fDgkxR",
  "key13": "3ntFcMop3Jey97mxHAw3WQy55DG1qoef8Ne3ht9iGJSXN3M8Qwmgmm4FXrTc9ZPmRtcNvdRc2MDDGa2MWvZPgaSt",
  "key14": "5R6aTH3KpWgu1hhhtxto6ZkETeyGNpvVk8Z9UdXyMTQ4tAa6y5ZSZde2YPWu9jk8dB8crSboHQfU91BX84MCSy1t",
  "key15": "ULPz3Gf2jWDX3PQaKPyQThGi2T8caUvrPkceembaf3jpsuKnzVNeAQjRPqTbo6MWArmKvite3JofNcqQVgENgbj",
  "key16": "3ZtJt3BPuchxWRue8JVVvsit1Hiwfom6bjJbfjB6KTyiLnKkcaVh8Gomg6btnkotiQGPheek3WGJZVZsm6QQX1cD",
  "key17": "5KVUcz2yGXcMDfiJSrYJHXHDDCt6JD9gB1wQYJLao3wLGexHS4FwmvrnfdrenwMKcusLYvTjobmnSorPkWioRKvF",
  "key18": "zf3oVQAgeeM6Q3MMeBt4tH4pj2oc48kNuKW12G5aWPknYqShVwroBmRiVZr4tTHAC8Xcp81gTUysRe9t4ARQPb2",
  "key19": "4o5tMtcSUGw6s5WpjXENzyHSAhGKiPvNRGzkZyZggtHbrzXSdYjG2tUjSvuFbWj4tMp9ixT46rXoUmDF5sC64t3E",
  "key20": "3NT6D8HLuMrg2fZfjiZqQvnQ4G33Pen3PPpr3fCqAv5tKcAXZ6yK7tp8hDP9NXxLENS7cZKaTzX5FnArATjrqGz6",
  "key21": "3hAqCRJ1yzzCLRm1S8FTYK8L3xAyoRiSV42XpEmV3E6Yfwi5HiFJ5DYAsWcArEipEULiGiFa1psR6wk1zmhwW8xF",
  "key22": "2oBdQXWgookjpCTQkQ3zPeg5wUXpEaKGAo93FdKYMvL4ihsnczbZRSN3obEJ1WwbNtCSUPBA6z5RUsLJJYGPt6qU",
  "key23": "3HPoWpF6ARtJPXw6N6Vxw2oBH23YJNwTMSpSYHtgB5g4NeJEnww1AsCRDwGNMKQH6cXLMB9pRmfHdx42mr1sKQob",
  "key24": "4tPYoguswdzpcDw4pMUAA1cVtYLCPRsdPWhvKyZY4ge1mCVUYAzT9QAUWVKZpNdkhXqowAu6XwFAXSmxU4KLSdZV",
  "key25": "2zgDMTAPschJc8Du2XSsJnPJEGuCpZ2QB8SJ1eNL4hEWMj9R2TyfBea5T8BRGbdwcHkCLXcyzCd1FRNkNxqWhPXQ",
  "key26": "5qMQEd3t5VsGF8nJHokXG5rcmmX2MBV4cgDXWxn4X9Azwe5w9jfQ9cstnzwN7kgdjbuddFSgdTYSUDdwK2S4f39L",
  "key27": "2hV5Yi3vzvSFmvo3VZZzunyD6KKXd8dgTZm7wEPN88MpzLp1mDBxD5nbveFNKyknUi6erbBQRKzMtaRWjjv5PzVp",
  "key28": "5AyWHSq7qzs8vwfnLShMjTT16Dq3ccmKmBdZZHkNysrP68qKBzGgMrZAAKH2wFW7QjUFE6WQxSqQASdjnL2VNobK",
  "key29": "fQYkYvxFBdp91MXn2B7E5aMBh8n4X4njvdDJ4vdHKDfNCmYnfj6BzxhyoZt5NZttgY5jivfAqPYEmpYR6h5yta4",
  "key30": "2PYTixxWEQ8vTMd5Hib7PDSGtDzfutB3NE8pnoPPx167epAWAqjo8TbbVSKWC4ReevGzwAmepUuqXDgtYk1MU5XA",
  "key31": "4fiu8DD2UWgbJznXrMXJ2gaaiSTPtpvbpPmHpvAmrbP6BdNZ2HsJi7W3eoFSFvnw2G8zmB3Uqj8BfEZVpYKJ8jkW",
  "key32": "4xRaCFafd8RqrfdXP4vHxq5nMDuYiPbm11KEZv27BbdT1W9HYnpyd4m1JEGrmLQRSHoEa6U1N8yyPkGHPqoYJgAB",
  "key33": "29hxEHbxbzhpmD7NqmNKiBjxKiJW2wh41krqsMRG14bHTig3XTkkHDeJAGAXsqGFowJwshUUgk52wKB4YC8ngkeX",
  "key34": "3GQEb68ZQBqAsDbnmdqmYCNVZFHPLNjytjaoDLwXqnWjxCUPuo3VSc6mesqzVqefNQwBPF7ytmkTm1t4HUs9bn16",
  "key35": "5Y67tJxsvJBg3sxFGbvajXANamJwqNZCpuJCDMCDMiwttSxMiHCxCUwogASyPHY9omMKp1qcsPGMHf6WSamA1wtm",
  "key36": "5N82qKttKTTaoArR96BTYa8EXaskg7XDcmQnEzQXuKzYzMev7LVaxfQaRrsKLXstKbb5YmPMLMB7QrmNtVwqum7y",
  "key37": "Et8MANyuzGriAFafS7a7PsAwAXYvJgZBkn44AJw8dS1JGgBmX79Eieo8QjBFEhrvJ2Dg7FJwAJcPoyS1m1RoPxH",
  "key38": "2HmRpw4bmhxhTKeHaKojG9qZgvoiw3tK6adPgxeAXskR5UdPorXFWCi5U7J5CjBDxb8TUVCfBMb5bjAcbVkE3FSQ",
  "key39": "2uMVENDzkFJFvFH8dvFv8LBSb4AsaEuCdvDJuTqrriuYqC5Cf6qPm99LZGitWiLQDGQ9Szv8Z6SjdpvbKQuKYaN",
  "key40": "2tJGtsf3Y2bpezWFBbBvJx1k2TSQz4JBECR7dMoZqomJAx12Z7gAqM63LjSC4HbwGSShstt1ZVx6bVvfh8GwHHVW",
  "key41": "2MUMxPy9KYp7odBnTPn4mtgsaumpGGKnzV8KByoNAgPcPVshzpnFZhjhNPYVk9JJrswwXsCCNR82GzYm7KojP8AS",
  "key42": "2GZoFnLSKv1J4o7fiBDzi7zhFaLxWgnWC4uLmfHaNbGWUJPy82bAR8EDqVMLhEipPLr9cG9PtFLTsJ3ATGWigHdw",
  "key43": "2kpR4gJgecFiUzAAnnJP3JTocZF21DfnjaTqxLj9jqc9yDr5EX21db8B8qsJi1ZJpq6158Uovg9kptx4GQgcYh4Y",
  "key44": "4EpfuggozTnNe2bDryzAzYrJzTC7NB2pPRRPNhqVqTbA8YNK9YevK34qQR7eBEANWjMwmeg1zkX3anUX1PNoAN75",
  "key45": "3cPS5CbYApe8qTTdFoFh9T5feCFmeMt4h91hFFVXA1ud7m6uiMLobWps6G9Mfd7Tm5WD3GRPUsSSooHRDCykSeUX",
  "key46": "2tbQXXXXZPzn1b4VQtmCNsQbbAfSZy1fGnSyFXExvjQrPQbcuKrtzQj2RfXogAcqxvy4pBWdUEmNjLJd9Ech2aF4",
  "key47": "2GCgPB6AFnKRTybk6ZGaWVQMYZDUsMVPV1or3tQDAebWRPGnGSt3JWDXQ3Pri8YTwTQrckmNqLozUMQVbbTyiQcX",
  "key48": "2tyqqdPWqx7xDhni8T52FtsSFRVmT74YnfZhjw61VJP4QaYot1ZHcyU2gqP8iCgNyvRVU8bLJ5MNs1riaZfAhpoG"
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
