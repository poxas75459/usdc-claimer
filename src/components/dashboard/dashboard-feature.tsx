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
    "5rquWbtVUQnizosFvsMV8KPcMvA6RTRrETJ3rrDRE4iKPyq2E83RtDPcF3mdw6fPNDKkeQFcBTXHWY548N7BbGqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vF1f6z5mofYSQQVmVepx1aNtjuqnoj7h16UFfMUmapCJyNu9CZ1SSWvctzuPfYSz3RpeQjnKLCLmnScYLCysPz1",
  "key1": "5GgrBhK8bEe4krGgd1q6ny1Skz4p5ocXuSriZaEsnMrtixetdDY8GuqdPSUyWdVZ6RcDWocV9SpTeCFbVURzC1CU",
  "key2": "2ezDDnjNn274t6RRjQBWrskqcLVJBoaRuaesuoyf85MJhNUCkPW9wYrvF3dP3JT8rpdArEYwKf4WxnMmidwHBAnT",
  "key3": "eaLrs666WE8yq9Yurdo4Gt6QuEYR2DoZAVfGwrhNzUmCUwyo99CtXpcckvtji6GmXuW2wYmmhUESKpPZLwqaLHi",
  "key4": "4ZuLuQGjjZu76CHMxTVnypJHGFi6RTwnriAGhBmyRmhoXvc5xmHW9TVX1szssCZG7sxJ5Qo2eNN3fk2Y9T4pRQLy",
  "key5": "3Rq4ST8nECD9DzZggCkCJL7uPcTW7HKhhMfisUtr6HqeepDcXtADcYmReFqADTcZLMQ7TZWSbQfTDvyrFdJ2DfmZ",
  "key6": "5Q5Ux5DkrtTyPHs5yYewh1R5nodbCNRD3DG8qxgbMKzKffDBLm3VKEt7e12NncWiatjpfsDjjFK7U9bkUvvmMXFC",
  "key7": "3rYudZSyALK12MCBwgiFDSpm3GSxgbmzHRLu8fKk7T4UbxYu47HFwwYy52J3hrty7RYz9JYTmzkLRLWyjv6HdxtQ",
  "key8": "52UPysLz1RK3yrzcJKTduf3B1C1ZxuMbRSNffBEBu7163g8MJrpPjdvdasRvoKKQ9viPByceFxz3S3xuHQuY8xc1",
  "key9": "3jy69iGQ4v2xHCuSJfPC4W868MY3tfJkscPeaLe3n6kdcXuK7dh8dEe2FgMvtQfFVb6vwDMaQQHtRSLkaq7Xujeu",
  "key10": "2iSfwefoxT1Rd1vjb3gKhPyLP1TDTTymGsFJRv2JqjizCLtjQ68kiiXpSEN8qfLso1eceZ6C6G5pPmhHhQkQomTJ",
  "key11": "56atTdg2J1EwNKdgwZJBeTS6atw1tTWpqBxVGwuQwSJ1P689F5Akkxm9SsvTSnuhhPzab5fgfjgVeCtQNJBMdhVt",
  "key12": "32oyMS3485dziPsPxVzbB4KkqdYJLvtJQhJQVxUHKAxdaykufZoZ7vKWPvbZuC2aHQxVPALbRvaqjZ9D2EFV71Ez",
  "key13": "2hfGSgEdG53U322RnzADwX2Msu1wurMDrZx3JHwQBYZcCUxfnZF6FGbxzYLQmmLPeq2GXtFEY61NWo2PurQKQF5C",
  "key14": "4CFHnixRP29cbHvMNafnzULwQ2ZqWL9UujQMXv3g8iZtzedo7ecTSTZHHxccujQ89dmjLCbDL3U31cwcpeBTnjaM",
  "key15": "3591kQgKtywZEBV77dkpy8go1gYCYKpYqpsiSrpJJpCDmwAkqMwnkn4GtSsrLUCZkQZyuz19Dh9fekXM2nyz8dg7",
  "key16": "jdCBAghacvKNWp1JCoFrFuspjmtKiXvXJvcb1iFTRXdhJByZt3ZdTsaYAJhxcpgTLZbisJxibJKwfdU16JE84Lv",
  "key17": "3brTPGTGti5U8VdvpLK7AewyGz6K7iGBgJMoNbwoveSjwqai1WpxRspk1tpLVtLmpBQeTv1NqPvYkC9dvxbJ9JFD",
  "key18": "5ibSVkGALccsSvCTTYKvPDteWR2KF6NXV6fUu4XfiLwwT8jzQmhg2BkFLHQVCAPfGiouvEmUXgMmLHkbFF5PjmP4",
  "key19": "kzP8QZNxKAt62SMoHEG13PyRaddFwMX6ceZmpWPVgZg6o6P8cA9e5y4eLfmKFP6YvLdtsrCc9ikwuLwwP4Wa9jv",
  "key20": "qCSqHmpMdMcMFhoQik9RUP4otB5SgTaRUcwCXo6i6X9sAAvYLmntfgHTqNoN7M7caBB2wx1jydrE6qMqZqnanhf",
  "key21": "32LUvMkCcdPbuHepwwJxQANF7XaDajZVw3rqqc1hkN8SmWYygSPQF4h3Uyr1qn3DVkdGhB8MJcq1Td2jKyT3tLDB",
  "key22": "3937zMgtQSpW3mbfeFR84TtwVQJnaF4NsJZjL8VmoAgGeLuaK2Z9NEWFZaJDmiLLn5SFBVL3Rgd3MBHHor1sUpb7",
  "key23": "5eNQZ1WkRmPM6TDwxPKU2Rm69pWCxtw9emNvi29HmKkFPBr39uP5Q7yzrT1VJaWfm6SQoi9isYMwxLuPxHTupuU",
  "key24": "XNVsCBgfYnvbmqFps8zRQgEZfG2nDwumQTc6AdPd8LvY7rjKsYBY7qMAyqaJvkCFS2XXqCT1imKU7vKMYoivKD3",
  "key25": "5wr8Rm2MsDis6JHXnjrGvTq3FdJ2TCwyaUMHct7eyhVYiKgYDE4urAm3NnU6yUahrUX3n1mzV1oFakqKycqnYwYv",
  "key26": "5H2c8JZSLjKuQ9p5kYq23ChHVpKdWhhKo8s82tQ9RCCdpcKzDBwyU2gpZLefGusRYr5x4HVTNNpBJuCB93zZQaHr",
  "key27": "3SrkhHrftwnGM767c79dNmtBJvC66aSAEPCXCZEejoTJ3DTQSQ5PcU3R4PT5nBTCNxfiaTMrbzLDoTN32qKLSpAV",
  "key28": "2dByDyiByqEBy5tfoGcjyDzPAYuhMKdt2fEX7TpD8xkDyEVN9hUCXXkz8AyHkxTjf4Bui16J9C93QK3a5dFLiwQh",
  "key29": "62anuznF9gmEpgckvVfVkT8MLX4QSSGw91HAbsyJNQHkT5uLkcuok4MUyvWJCu11HrhPJMpSGvNPrKWbiEZwF1HY",
  "key30": "4csgaCKecg87ePNb15tHDgv3hVEYiSbXFR26Xq7hrN7NF9zLYDdNsMJ5RBJxeuLdi3hp1vUZwsfc5VJvXh764Lgi",
  "key31": "53WVHfsqan5jStToRx7WvACqZQc1CL48Tf9V1QEtKj1SCKbPwASuzku68fuAnBSpP52ouLqFDXRwvazqa9uZyKMG",
  "key32": "5LyWSUDT1NpYA55GdDJZzTkuNXgKcWuNekn7zffHeyjTDMXEtNpRwFqZiDN3zVUw6EWMRiQ5xCycTrVKFHso2hkN",
  "key33": "RV3XTd4CZUWFZQAQdC9PPofQr8yhGJmyNBFSR78AbcvMnEmhe7cPtsUD5LvwGeoT59wyHQfaRf28iUUNzmDLaQP",
  "key34": "2cbcFFdD9YnXFaUa5Bb9xBJHmUJypsw5riwpqXDdbBuVjUq7gRf31p43f2yN2Fy1raWdVVx4Snfm1x71d1mdvEZo",
  "key35": "2MRSnMWqP5xC4dSg29pNQsPBf6A3LYE2ytvSzM9Fxnp5T2fzgMwWS6i1hxYeNmPiqJSowig3SdNk9HHZrs4g1s1Q",
  "key36": "qtoXnSGg9wf4WBfxg3aJmUvhrBqJ9zZok2hUohJSoAyVhm884yzX3LtR8GuAjBeXgReCKey9dzvn6ukzWa79ct4",
  "key37": "231UUPkXQvMqoiKccUUjAqYNF3AoFcqyu3Lf8BGQimJr6MursvyJT7VV2Lo5Son6vddefnBdTHeLXgkqBsFaUumQ"
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
