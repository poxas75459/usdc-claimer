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
    "2mg4Xr4JXTFxsqjtuj8ZZUi8S1btXtvA7yqB6B2xCdqU7XcyZ5i2LcQUyA9bEh1unQ3Uh5YnCz3CX5DgFTdviAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C1e7QrxU7SwT4z14CUnPZ4MkKX7Yc4hmJxCEa6SYts9XtcMwfWnsj4JpfGMmrBpWhpnNjfYwDJzrFcG3bBdx4yx",
  "key1": "2sEhewMMcow6ixk1rqPEmL32bYw8H24nsReKBvS69ADRbJsTaUtSTenxaroxMiGjbQKzuAaSW3S22iWueRsU8eKi",
  "key2": "2RQ8pFXmeNCCJaaRVPgm2NXLwo2KU9dYZ4fBW8PDVjHA7rnHcRiGfbtjAiFDLZiy1uTmhqJPhf1GMfP5oZmftt85",
  "key3": "4iuiYU8xLRMFxSBP2ck58VUZkjGRLCWx2Gzixqu3ahbxbbA6CDYbd2xKrXRzMZPTRngtjafwLtK7zNqGM455vYDe",
  "key4": "5WzqD9UdQcGGpd7phHyiiDoYAyuYyfThVdJATwxkmNuFbs2G4syciWyHEHzRavN26fVWcqqQgBYTgFhZGSqcPgs5",
  "key5": "41fjzJQkNPGEYh8zamtpyMBzrzNu9UBFmQ6m2vKUSbNHYbt5QnEHnHNfTiAmudDtF417hNKtzn7fsmQHoBfzuWur",
  "key6": "4YNuZo48XJn438A1kU12fxjScSqPyfMeLkkYBk9g86oSodhsWpZpwHiTqsGRa4MbrguQmWnXEJYNT18rZtENkkwN",
  "key7": "4TJ4uR7ZdvdfZQK4oq27qVRANjCmVY1kCYZXCSiZcXuYC4cEqbaAZyy7PzWQCrWnFgih6iUKkUeAN9gzPrJ3A3pM",
  "key8": "CSdRQpbFuwcKMSSAQ9Kzoq1ZciU3vdyh8rVJZWs4QUM84dX1nhPd5BLvwnW9iXFcPwmPkx8LpMHvAhAxL8aJ14L",
  "key9": "5FRWnPvfdS6YpQsg88SvQU6tKcN9o3GvkeQJHUDw2cgSfHWqS6m1y2qkQA2jK4b7qBV1NNPdyhYe4MFZLEVvy9Jd",
  "key10": "4HpNbb4cVzj1H5jQxt12dA7hxNZVKV2dtrmAguBsrfcRdwy5R6FCkJ9rGAb2QWu6GBzYCeTx2eNvh6eJEJUywr7Y",
  "key11": "5SMC3ABzcXEFYMVxEgWLsanDDpR13v6rkqtJtfvSZHBzkVoFbu4oU13Wy18YkwnTpLd51DQnNeDPsW2XhEBimR2Q",
  "key12": "3Xz5quQ58qNXdiwX26jqtKaoNm2AN8czVvJLNAkFWKFvBEm82svPdNACYHtuqCQEdqHe7Tr6TTMUE4bKWUWmvRqF",
  "key13": "5LER1kphgmVJossFnGhHcr9XxG88famYTXNks5RR9JaW97KK6cDTEbdq6Qzrihx7a3mpJKfefBbSRTUorgxH4z18",
  "key14": "2gP64TsUPZ3YwPTbr59jT6F2iMMn3LWuj7LZPJXihVXs7XFt2PT8eC4hkU6cEEr3N4i43Ly54Pa7uV2MjAXCsTxh",
  "key15": "3uFfmNUjXG3M5eAN91aRzUzB2m7o7MpuYp5G1bYfiFW3Q4Jca9Mhq8dv4Jte41dnywrtJaziNyndL7bwAeUYwGCZ",
  "key16": "oVXLCdXwZV5GbMCSwXm4PjPNtajCgDSQ8ae9rDcpHByAu4i7cw4UQNhXSsA3DFbH7c8zcx23rWF2gDi23x19YCW",
  "key17": "5C1ieos24ZzkCNQm7hJ8ubCsLX1rYYcGZqeGawoycftwhtxcZX6nj8nfr2CwS1B8cZcMUJLckfGDd2EQ2FpQj69W",
  "key18": "F3BBcUYHq48FsbNNjpr7Lp4SLQfWoCF9anvgr8NiNmbwxdH5hPx8Tn7yKkuEEmhxDbTdVEu3iVDsXgJKvneV5SK",
  "key19": "5Kj3jvHKFeMbcoLg3aMYt7we33GeLAjsJQN73EvNQ4qkKxBBnqeY33oBFwZgYZwL9CQbMBK42esyAJLknMtnyvQg",
  "key20": "3Dw2pKP6YHS4T4FaJQ5zwzrP4hUdFv3BboHu1jEUqvtDVDK1qsypynJZTPWd79Myyi2kYgHUroVYuSkbgNUcadeP",
  "key21": "4J8KJKD7FNb7Jw9TFavhZVsq7xRKzbRgZKAtV16Amk5poreLgKFQcKRhRBHWXZiFbyeHodENrU9JEiHDsybgm9Pj",
  "key22": "2otDZbgvVv8XC3n9h8eX1zLZAsaXGfBhqeMHfa3BSvjqYK3KPzg8JgiJNLEoLaYdPL7LudZiu5vPde9gXR9wWEc2",
  "key23": "3jmuu1VBy6yJb2J8epWDnrpR1Jfkf25sJjoDbCza2Ub6ocmEVUmcTSCwYcJihUdkRXkNMRjnaxkUZQT8mLVzUnVJ",
  "key24": "4onq35zLgCSnBktPoqsVER29GE4SvHpAV2fbojSyodwasYFi3zy1qqrKjJCyeySm1KWyCkQq4seEeizDAppnVWUL",
  "key25": "4b3ptoKcq6ESiRUSAJtyXLkMaD2PyYBfcjx3gbr9sGDuUua2wYbxHeeefYtAwsoFEWqd5Xm95tjnYKo8dg9txZAf",
  "key26": "5L5MXbFtAqeEVRsNVsKjfejZi4DFsMBmnE893b5Nvw3Gtzi8zCJChfY4RTDuPy1qkh3gw1YwtP6D5FMPaGy5HkTj",
  "key27": "3vdA58LZwbiMLnCFpvwXgNSgLJCViFPMX9Tw6gehZXv7jRQff2RgtU9JDbvVoqhKv5h2sA7Unk9boUeKDcufrchr",
  "key28": "237uvh4BnwFWjWKwFXTTme5CUjsqGxGpMRTzyVDvSxeg5jxLgFYa5eRcSBtMgWDf3CUgsnmVvNCFeHcxXFs3bFeg",
  "key29": "251hxedafjitsAaPvckJrSzjyrL3qH744pJyndCDZN7KS44sfnmWkW5obVqvu3U5bLQx1oaUEc4stY98zGKUcHpX",
  "key30": "4yJt7b5w4RsFACPXG6PHkwS86G9Qm3VM1Z9VCDW8MHfiQYxwSWTa7yf3ekrQroPgKxshfgZEWfPWEsX1BxRaPFHP",
  "key31": "3jsZFCkNEZuBnmurhU21zThbrqC2Nij1Xe5KDfBeWyUGHCcMfxsnu7xYd5V2qBVwvU7h9MTPNEQxRgFfaeFUch3J",
  "key32": "3UJ5gRAz4Uq7oskJWTNXTZUKTvPqnRh9e9ao9scerooKYX4psUgDDP5wggTSiVcjkZ5ZWfEcnvRicDf8m2RhRwDs",
  "key33": "4A8py4VWaAfNvkSCJ8HDh9hzHnqzJGEpWfywEqmiyCKmDqxcVKmuofbQoup2yhSycmZpqZZ2cJ4LEPnJKBmE9cG3",
  "key34": "yeSrv3E4gNtmtMp9UCbknwZvmdJWkwzCitGNKv13fLVJypLxxVSGaojv3GStQyvoDaRYP2bam9ygFBfryNjuhLr",
  "key35": "3eWPWpoMpydxzYdycTxWgy8F9sf8hdFbPGtXKLVZ8B5fenhLRN6ru62YdyyM6b2RtCRcPGmpMjtGF7xtYndx25MX",
  "key36": "4TTueP7hWv3oqPcBpQLEDsGQpC4fYgV7R34KVGWx9SWRtjH4WB3Us4EDNboDmqWyR8S1ZmTenwRzp4KgLzvoAKVh",
  "key37": "5JHvizkDAygmBrfCsjEcBLrDvc8H5eJ5XyJ9qJ8ynUQR69j8h7KFUEnjcJe1enn95KogaDctXzxE2rorFMD6Uzip",
  "key38": "24wptGjP6NZqtnjr1AHrqbEpakS7hmRNe7M2H1kBSEsqhB7kYPf3dtw5XZHgjiyb8Ea8yDNcy2dUn2Qz1s6djvps",
  "key39": "3Z5Cvr9jGKnr8G4xkh9kznK5d1ghkbtAcau5iezAbrKKuELAsPtpcMhps4BhwWb4Wt9aa57vZuuujuDstZH3FyiZ",
  "key40": "5PgAkNFtyZdv522dE3HvKtppwuPcRDLtnSMHkmLSu7Y5QQ1mHLZLrxWCUeeH2z6F1CBUsEmrdmcjYn96kcPeACPY",
  "key41": "2LmBundCXyz5RDMEAwWBqpC4SvAWcuLVWTeL7omKzHoQASWXn8dc7vtUCELaaW4K9bNYbe69TVJFWRkw4ih1YQzP",
  "key42": "fAQQ1EiCsdy3fXNwaU775KA29siaruEm7imquDVAdRB2wkseY1jrhUqx7xkeVZBNjA8TECUzuJyvJH1fgL7SfxU",
  "key43": "4wVkPC6BHLrqBwohuxHwJwgabr9sKtDXXxxeP8P9teEnVvwJhYY9K6DSourGhsFerhcTPC9eJm7Dwf6DebLuZRma",
  "key44": "34aL8GrWsVtKrDiLVJjNqek3x7mkPSgTjEs4BSokVHhkEUYRB4MULX8RtwN42fCmUpdGZQMxC2Hsse8dbF7isbtg",
  "key45": "4evpNqXN8sXiv3wq5BtHRq3yXYg4eBwPdZM4fGkzRVv2VRJNr8eKmEBASvJXLtrbdguUwmEtiwtzw5GVB254DQiv",
  "key46": "4MBQr65e5hbfrwf3sSsDftFBKS9b9oVLHocowgRzZr3zbPrHkSgNFQMpxEdyUjqFa4S371rLAqktYhiUHuvj159r",
  "key47": "4Z2si8fUyX4fgS1JfTvzT3TmuwXvLCnE8RAAeP4ttEHZLzetyr1bMnBsrbjFbZ2AZrdoGF48aUfQPQ1298tKFCbY"
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
