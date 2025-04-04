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
    "2jRV2QoKyMmz1Hut79Yp73GfbVeGP1HQ4rcN9dUqBKR3sznBBr8ijDar25nXLHEmiSJxGruYm2cxnV9Wa2Gtha81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pX89jnsR1D159WmCG61eAVLBAB6yhF43u42ekAbeyqYcUXbfBgqqEQgE6fvRhAFeUycoDoTjayeEVfmCCLxPK47",
  "key1": "51omFGXAPMuXzHQbXChgH6SZeYxFGqhcKta3DZAEEaa6KZ6oamH6dcBDLR5Vxzqfv5ACJugXiZY66wvVVoEweLmF",
  "key2": "4jCSQpfBRAWCUz4UjN8TfdLuNoUBiuDq6SBcBihtp3NoAtRuB3qBGKwcHLcx2RgKtuPPaE4uPBPRZ42G84gJkqno",
  "key3": "63oNFBCSfYdvJyQ2KqNdk3jDywXaPoFe3ozsBisbfMLZP4uq4qz2BHxLvxeaDRxn9g8Q4cEMdq7HmhrvcLvTm1jN",
  "key4": "4hPN8uDMciSnBspJ7Ax52GU3fPLu8TpdSwx9Hmtdr5CNmjgfNnNQRTPRJEjpJPgxaFkH5kKA9LHFKgnVvccbLUe1",
  "key5": "3PnZ9BTGfniGuyHK7TP43y4bPUn3Cs6zwRCeUQeGPwJ48JBjiQibZxRgeUS14gs9srkFQzgxFH4tTpF2VKSAG7av",
  "key6": "RN8gveLmM4bcHN9vvfP4G3tShXbPtsHrhmiihVVuNa55VG89RCFiiTmQQqcrtcfbG32pWQgrJmDPhCmtLojoLUf",
  "key7": "4ExQ2i8xcp693ugZsoiV9AobT5tcMko6usmuiqgHw1MJfC7qJH8C3gjw879z7n4xWKz7WKY6s2d9tC9P4kh7Q9bq",
  "key8": "4CyNXqfHZg2WvwMDKq3nK73MfQsuKc3dGkYPcNbYMYkt6po3ZBK2BeyMs7mSRSZY4t5wzMMUodAab6SrncKwhMhz",
  "key9": "2pGt488WHkXYZrCVVrNn1z1cD3xTEjysuL7UsvSa1ysVHBPp8L1Q1o3u3QCuFipmvprkrYyeR8qro51ko8wydYNj",
  "key10": "4qsFD1KnJXrmxjtuzjE1otovKb3AAy2KDELvytqm7rZsncYswe46DLxXqdmtpohoKdkPWNexReYsnt1GuaJew4hn",
  "key11": "3HC3HzsAHyuuAr9UC2i4iKtMVdVHAFYLjnBVmaUVodfzuJxnowNuwncDJUowtRST3m2S2wxUgwand9gnGQaBNLVo",
  "key12": "3Lht8kKv4oZ7bgGPm9DUvxR72B2mc3zuiiy6qfxrFbQvtD3eBpu9iRpB78DyP7BaJZ4Td6jhV999DPVyYaNusPhq",
  "key13": "325GL18jFNxe1t5sbSd1FNB5tDQANRVxj98HMAWTyq9mJSnGK9w5n8SLsqj3gLHgM3qmu9e9uUirDVY6HhTq2PQL",
  "key14": "2S67LdXHf9QAYagN2CUER4xCQBXBP4n5V1snrEuE1xLQ6Q8tURC6AjecnjgV9NXaqmxtURCuD3B6zQQ9t1GnQSzv",
  "key15": "4cxA1PVdtaWMgMEEQWPzuVSbxFujvmYCy9S4jMurEdXomcw36uywQuEAcimAhrVwrbSZWt8T6iKGZMdDUkNpW1vw",
  "key16": "2rbTwWhM5ChiDJ7bPv4fGd2k1jhiLbH4uttun8najGbaHKUGnaXjguqSSf3fHA3eb6jEuGBjNBEkrhVgBnEeG2Je",
  "key17": "41Nw2rJWt3QKqkou4b3ht5bBdaJn2nkxQSoqFLxBWRqLvFvEHVzL6K9eewsBzivqPdtRUNX4PFu8xWEhDS6wyCzm",
  "key18": "2U19i4zjTCbpz7hojjGg9CpVZCSJHX8h6BXHyUVxZFeUQZCHEvJ86NvLJsfjFY3B55nidcwFSV2cFj7v8B22CvE3",
  "key19": "3CAFgrspbSSz2Ri63Kksg8JM4nUSMf5mCV4m1bWubLkX4yV2eNxwhJTUT84jdKRKa9tTeAoGueArkA9J441CLx9u",
  "key20": "2yejj5SzvN8Qgw9Uyh8Mib1ATaefYX8KuKZaTiJ7YMGgmCjzrpwWi2y4aQa22dXb1fVr9ridZSZ7MboXpaRxTSVi",
  "key21": "2sBZt9BSFxQ2BXMk4rFtDYbrxzpu5GVEfMi8DhzRyn6XCb2x1AeQUs5PG7dAs445b4S6gRbndnjFpB3Hf7iXSy6v",
  "key22": "2XdhNy7hZjZMYN5Aj75geLxSVFykyxTb5VdAaFhnMcq9NnNUtSWpwyjX9pDFd7Ud4G45aAnXxs6YeVHa3dGeqGw6",
  "key23": "3ZYd6sdVPQgoJVyPEogn2vD3KFRVkNRE2AxpLGHyugotohHpy7TvKdumwZ4LTffK6dEBRq2512FJxWeSDBCgAB9C",
  "key24": "2tfAs5vnrKHR25XecP74Ud8hGTbpuVaRc7Ydo8yxeAZFoEvFW47C3QyLth5ARWQxd7bqaqB96hpcbimdAPQpSgFo",
  "key25": "3JSsb5nViRjLqdfQ6Esy85RUgwKPvju7hw5AzJhWtjSW7cZFQRy1Robbgy6GW7JHoatZJiJQPrGANj8ztUBN8BTq",
  "key26": "2jErrkKDsMceNhPUKLckkevV3fMjukRKqV4wGxzh51KPVJYpHJKxmz7ZYvWS5iVqJkJecD4jttGsGv4pdG1y51Ys",
  "key27": "3FLVXw9WKbZBjyTV22ufkj8EKsGmPGymdHfnwcV78XpZmkXKYXMEbhuNh2z5pWkdUrWRkYr9gVtQHAcuH3CqeEgZ",
  "key28": "LAyw3H1G17DF823D5bmDuHr2McKh1dawPPtQ7uAKaBwwfc2XGC4XsyFHLJiMzegSptBDP56p7Yo51c7yGTasaJv",
  "key29": "2RmpwbgMCDuF9gGS6XMy9uEE7L6BeLNYyFYEZPKA6DFsjKLxDP7Z6hyHA6cXxgUTxsyTnrh1Pm6tsRCnm3UbiXvt",
  "key30": "5P4sdF8C9SiApvY2ZttU69bX2QDJfGcCxigE88nG4v99iGUyTshY7PEw4BPTKHv286c3DuXnpREFyb6GAq3VTkQi",
  "key31": "4aBJxfFxtcLtbsuVihQFFbemFvgAH1j4jVbpGN25kndhqAqn1XN4ou6mBwDMdwDvfTERpfoDFTt6vM6DUK2vVbB1",
  "key32": "5FDafpisCDxDyyY9NzgDj6AtNYefwVMrzwZ6PMcyn8JJy9uotUgfdAM9aH4p12B1hjnRSoVw3XSDDrwBezzH3Jc6",
  "key33": "4n4yHJigMiyq8z6CUL6ooQZdLF4iZMG4pPSFTXCubqTiRQDvWNxw1MAycGsN4dZrCyabC2G2AzxwhenC2XFdmLH5",
  "key34": "5BLEo5HuegLBtYX6kANnz8cSL4XASaEp859s9wbvpQhrnhCmSd8KyhniucgBCSSLxwfjoEqyK9TNki1SDt6UTDsS",
  "key35": "21XEyD6BNbxvabssEjApfRVerwLXenuDnkhUaQ4EmFoymcaZerG9DtsSBuzZR3PnX3UrUS9X1tU7NbxrGijahS33",
  "key36": "5FVQfa66pTk8GnQZDDvDTFPYXu7dehtTWvuwJeT1QM3xxsPYGZip7SMosWg1JdwM3A24iqok2SWckWHmayd6he7z",
  "key37": "5pe3n4g8FdKQcoiemghNQQB4d63qjSiGKXaHBXtbkEDG5y7Jw8bP1hoAacMh1aX2evgMSwSmn1u7jc1LXyPN3pNt",
  "key38": "443mr2mPmH3gaAM8KDwDsA6iM7nkT5M3uX9npenSYhNhGrHEgypJfdwwLyHMzXGc8dLr51nFnPChMgtZnGfRwFLS",
  "key39": "2hBfXnUntWRjmLJ8N2K83u8bUgE7SAymUi4dRopBknXkgHRTYUqbtYa4x36JZmo8Aq18zTAes4QSqyBCt4b88FMk",
  "key40": "2cYLU9XKLqxYCBRjtK9doEUSTzrxgwFtrA2u7z6Ch9fwqRfTv5iswF62taAMDyxFmt85MhKXHD7NesG7ZExoD54z",
  "key41": "2GfFJqSqyY4mdgF8QuvpST3L5K9xF9qRYUPnSDRBqbWBNjrmAfYaGJop74Fi49mt3E91aaWxTEcGiwBk8Q2CzpBL"
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
