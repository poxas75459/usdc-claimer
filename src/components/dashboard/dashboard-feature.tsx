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
    "5yVsZJHf6iNQhZLAkmsC5YE9yjditV52FwcZ7U7a52ckrx9K6rVbb8q8mezLBLsAKLg5x8gYv8Ya9FgUoaH1yszo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fw74ZFQufjQW4brNeoC3MTUmMxs9W6L5BJzVQemrPngETGn1egNCaVXdZ8Bu3qxM1715pMgNMRrJDuuUu6knEXX",
  "key1": "5t6dvMnPVWJe4CJsKsMLauTaZGrMDkNxTxAAo9sm5fE3LDVxfUARsk67mxLYzkH9ZGnQCqX4W6NmhC7Gs75daKVK",
  "key2": "5CUMG4UwsPe8czJtF7zeBPJbEZvpAexvK9unpF92zQe2qsctMrK3YYak6gVgfeFENMzQNaCgK95fRS7DtKrmcGtH",
  "key3": "UDKpTXVHyTmhxMtEnSRxsauL4YWgZ7d1CUELYDcV4k2mRWPQMCC6m87RhbN1v2gNnj925wGEXDz7woiaL2vzQ3d",
  "key4": "2GHVMJUFDEA7cfovobhUjPgEv7hsRyDpzhsKatcUqow6MoGYmPmAbe3NYBCKJmgHjgHBPLzS5c4kJUhiE1KXgXYZ",
  "key5": "5eTVgC5DNsfxeSMqKcQSb1BVPvjHhL34rJhSYTdMpgnPupAgQCLzi1Xq4pDQ5vz4uu5FiMmxjQSu16XUR5uPJMDY",
  "key6": "RXMnYVvX2Hkn7LrqRBnwZid5PRAvG6uN7YANjnjTcu6iqBJWEZ9DNYcYA4VegKagjsnL2NdHT4Hbku1tKPkHhLR",
  "key7": "TYQzn12eAWEDnsUxqGUrnAWiyG53991TbnBWwXjWmZ4NLfnKfXKERvtQNLF6qZ6wd62SRTbtgYXFdezUYexGmbg",
  "key8": "4fD3HjL3iu9ZWDbNLQ7UsSunfjLw6FuwXKUA43naYwPg7DuVdxCjHeBB6mVUZKQ4EAvxEGg4DVANjFLi5o6vagnG",
  "key9": "RAwM5bsbiVEuTJvUWN5gowa5kbQsZP2fGngxDELUmCx4P3HoBv5D7VwAmu7GCXMTJdzyfXLoM8FRn8WY1SDnxiJ",
  "key10": "nkxEmEtQFSXRLHqG6d7YKw1sKGo6ip4xzh4A7Wrn4GqSzbBAU12tDft5ZTvMrwVo8vSPqYXr9uvqBghtteLMytd",
  "key11": "57VqkWT3CABMKnUszqPRBnQpgHV9UymgX3oAFgGsmssUeB66BaaGXzZzoka5r86XtHUMsqERm5bs6DohJd7rsb44",
  "key12": "2f8yESySJkQiwkMGWuSmVqur6xkHFru43BammoVqm36CaxBYNgdjPXeQQYRhzpSUDN6TvhVa6tdA2aQ4MYpobpLm",
  "key13": "2yMECqK6NXWE469oLQtuTsv8rjNLcXsUAn1fvHAMNUQjdBKZF68sruiFfUNHQFYRgbUxFqqsbZnrXoFGPGgq5Hid",
  "key14": "3hdEbTynbiVHVefMM8NsWcpABZPEQP29p2g9gFrUVyZKia4qLypoU9zPnrNLQct5bi62uwC8zigk9Fgjgb3qpfjz",
  "key15": "2npxRTvq4yLiKVrj5ertMPARAD3e5gFiKgKxWY24VGAxnMKAYdk6R62QoywLZsYRqUzhwzsAn5SoE22n9Q6pykBJ",
  "key16": "wXPUFSHGDuYT2zuQV56QYMzHBdNjKjMiAT7dHGWCCZSrCCrPsvunKNCWTL5ZWXEkhqEG3RWD8MKiHhtGQ77mkW5",
  "key17": "RdZ7My7r4ozYz3g39sKL6CsfwX2qo9KD3RGgqM1hUKLRTeBQgFQG3HpTX3LesQ6K7gyXrtP4LsoTvqHNNV4mzus",
  "key18": "uhKBo2RNw5BhEarRr2dJNVLNzWYSXUWVYQfPchMYJ8FzgxLacmHvNAJgUpA9b6REfrBUQehh2uxztBFFDs6NWwP",
  "key19": "5FVecsn2x4aT91hzgwVpcJAw2tCMternGprr1cswqWxrs9Af7QGa5tZycEbB1NGgJkVVxaC2n9Uu1LYsVqLhQNfw",
  "key20": "4YMb49gDMMu5ZkrY1fJEeT7bjH8djCxt9HPJBt8Bz7RkEspuvS28nqGp9vzkwxMPGJggpbGKTtavFQc4ei7N3sjR",
  "key21": "4M8ccWbFfXakf9YdSfQ9GSUsaFAWdiN7aEEy4ix2NMhZeidvd8N6y1Z8taGnCbSqc6Tut6dmuDPCbsAj9BaU1BxD",
  "key22": "2SUufrgfVjvPFBJybetCbHLPXKY5Xwe5vzRdxypceG9WXXjRCEkUq6kB1zeaoYrDSW7bmsWhPvkaE9JYnBeRMJUz",
  "key23": "2ax5Md2De3xoRG43WBcxhXyYskgTjoT4n2gJEHZmmLJZfGJg4A3RRAmY8fMBvvTb52PBuLLpmtwfUPhFNuPLrLSZ",
  "key24": "3YjhWAGGKULG4ozYm3WXCEoooDgkxsEZ62r338JDUJfr928jiTAwiAUB6vdGVbediUkVa8qTsVFD9DmjeHQrp4Hx",
  "key25": "DGGaUTzLQpH1cv8iNSByXMgqjYguYuexfbgwUngAur7hENWg2o1FMpBJXNd8xVHEFXaijEX9QuPgZcUct6menYj",
  "key26": "3vEguBNfY2Pafss7tEHQ1RASAsb8nv4WJgQ5XDbYrzWvTwtcuUE8Z5U2RyKUbv12LSBdpRa8hNV4VsmtTetha4PU",
  "key27": "54Ke86nrpgGTdK9GRxjP25Yxt8kcy5DWbVSanmRHW7KBdqKY2kzn2vaeK9bLub2ZT5NGDzBk76xxVfb5kETtP5ND",
  "key28": "HBhVjCYepny7pgHYSixa6tsUA5zPmNL1a4eLb5hQDmMsKUaN5KcpVGYdH7Y23PZDABAtdmnRNbtJzaTKMyECahU",
  "key29": "3Uaar8TijWscjTVku4MBHQyT7x4BtzvNS4Wfj8hfVHfActRAhjBaH7HP7vXYMgdEgkuYT139mvCzRWsTkfNxXcE6",
  "key30": "43Z1GJdYHuyJonKYiCP4zWoCLZbcC5L9F3GxSkjenTebPvr1xogb6zzcz27JcNzvgwWGzJ1nhcBbr2dZcjwHFaYk",
  "key31": "4jA8a1SQFBBkwH9QQWtRyCuPaAGuyvfVUnv5nNWJMTSuzdg21p3cBJrZEDtkv9Kzy8r13YvqQMcwSYhLkiRe5GVn",
  "key32": "3SHDsEx8j3Ai31XstmwhqpikNAdkE31xgwfMZKWPBPHxv2nkvaqTnRsR7Rd4j7qP4r1UBcrRfvVXLqhnLwUv9evV",
  "key33": "2aecyW1Qjua84Jco8ETaz1cJvdjDMLxJ74wmSrK2KeG2NYfuU8YDCkDs2CZ52LUUjUJXDhQetLy4uuAqN22DEAx7",
  "key34": "3ajcf2TNJePk8kMhCcKYfHC6jcbC6U77w89xS7Qwrp5azHyd1xFLgtF57Xo9UwYpNaoCtYZYeNFQBbikrfMMy14o",
  "key35": "3dghuqFjsHKPxq8ozMWkN7iAof6j6psv1cALtxYzQao1kPaGK12CFRmqEuuyJmkcffqxNG3Rcx33hSswo9RQ2oDu",
  "key36": "GXyyq5BYLMuV85UahvSF2ewWBjFxiiTcm7EZ5gxMdPHcLNQrFVcrFPBnXqdgah8Vhm8LMK6aCC2baURcU8Abmpj",
  "key37": "3CkZkeupSqnSYtRshg7YNbZULTpJCydcEsbGqkHjZ4aZau6vZjXSGY9XLq6cTGNeKnDPwwUWUfL1wgnpbK2ARmCt",
  "key38": "MMTNVhT1xYGw2ESJrbYxJ3oNcwh4Z1e2bfUVmpCLezKwrh24J1BMZ2HMnfhbwF99YAHSQCfTdNG8gJ4jyVYXVXU",
  "key39": "4QUEp2m3wxGG3rsRYouSMxzLNYeVquSR7HMsidYYcbjJrAek2HvGFA4bbmzMxkCJhKhfWobedijFQB1gebkEV9ju",
  "key40": "3nief48S1pYF7MhUv1h4PXyXUzHSXnaWC846yPxmJyeABdkcRajStHeW5JTDEJmpMBGCZFj45WMUttrqHAgZKakz",
  "key41": "A8c7Ef1Knrqv7ga8G3hycbiWgMwo3vU6Z1sjb1nMCYtajvBuCp3XVFYTNLEt7ux9kDwQjNSgVSEm8eXy28gmKUC",
  "key42": "QF4z1HB79eDC47FpYJwTX5vUDUXmYbcQZNdefGEpjqgfwRkrWoV9HtGdZv2KjbCmMgrVvP5WMgRWGStXmrUQAuT",
  "key43": "Ue9Fr1iYGL8DdSSRGvwAokU1K164AU9zUvyNB1x47k6fYixLSQh3WuLrYgAHzQJcHoET5BupyMk4W74DoFyjrSE",
  "key44": "23VNxpRK7te5DReUe7NJ2Jjm7HYGZDjLWbJBS7kT92naitCM5aLPqpdz3Utun48VbfVsaw5n8VAhs5jw9TZS6Nba",
  "key45": "Eq7T8Eo7E2ngYfUxJZNLoEiW13yhKR5ht5qS96kvBqVTuDT4UMqxkb3b81W1yijGTURLKqzSFaWWepyBKyyNTEc",
  "key46": "5tgzii4AWgV6ZCC1RFWX4oxU4cwFkGfaBwKLBrqRXM5LS3hCEwZpueF9CMvzHREKSXftT4F3u2zJ5Zu6HN7uBu3g",
  "key47": "65VMjuM8a32K7qdT2vov3GvKC1cvfShMogSzxQRTy57ZN27wfWU49iNQHiA2nR6hSTrWXQjftBhtVGefX7Urk9P2",
  "key48": "34DCCuAAzfZyR5XPHFz11rSKGAtNHSYqy1fEV5SUao3Bey97jW5UcV93j2ECuw53oBpoMys1GwwFPeaWLqa4HvV1"
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
