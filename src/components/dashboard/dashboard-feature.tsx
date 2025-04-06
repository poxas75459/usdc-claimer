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
    "4TvTgnS3TaUQRANjSkd1Nw1wgfMK5Aee1DswVaUFgVrcHESypbcQLxsTfUVh4wbkzgMBC6NJBr7vG656zFjtufA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ELTFkaT1e1sap6b3Ao84jYpm5ZFSCz48H2sDNw4Wj2yXSLTcDudRbwjnA9gwas4TH4doXD8nT56oEEB5dNMCxKu",
  "key1": "5QwhVTMEYxHJtqiy2AY1rsP8Gxi7iALcPWwDunzheieEjFcQ7XGaNPaMBQJociL1cEegvjWvso2Xx9wd3Y1DZgAM",
  "key2": "61779ZcFRAQcjWcRKEVsuEp9tDcFM6SzUZ4S5p1o9YHe7YECFiyoRF7jEk7f5GxW8PakV8vzLruXrcsCL5o3YmZm",
  "key3": "5FcexqZCsHN6rByN4U1YK9UDCC8T6KMpz96kUiEpy6ptJcJKqReppjZScTHuwfoJ441eQq1A9XSFVRWFdSXdCxct",
  "key4": "5NdkgeTsT9S3nigLokgaZsfHCifzH27FMg4boTHcQcVfg9BMYfnySiB2PWCTLQMnYuDqf6LNoRQe15RaWGvfMQin",
  "key5": "36iEC3YFSpeo5GkWS3JKXZbdB1ueU72dW6wiiW51ZPVioHp3mdPr9weQ7wNh6ujqcaYHtBxz5B5oEjsWdnFiCKTr",
  "key6": "62bZt59bW4sNkeMNKWpWNzERu5tbvrudiWjpHM1ZT1TQDySVsDqSnbFT1kDMmuuQ6pCB5BJ2xraZNFMxgQBQprSz",
  "key7": "2HsD5NtPE7EC3n8SVtPqxC4Fofy3NwA4NYsp8reMi3SAR5eboXNbBhCopKZryM9irsbYqxoUFDci7Ecbd8HGHHd7",
  "key8": "4X9nr7HMGzQVNFuXtzzLmUypdBQuXAR9yuV7CQRaefnguzMCuXqvzxsg1vgUj5cPAFo88VHwukxwR7EBiGhUQmjf",
  "key9": "4CLQxBPeb1GfAPANoQwoZdNZTGphjjVQWcr8APWRFt9ggMfvtDECe2HMLYf2aj1CiER6RfkbHtwkAkR88AxxakBt",
  "key10": "mdeDXZV4Qj13HdpXsVpVtKJ6BJUU39go4nQHhhBuiUCHXEtgqBrnYJsejuT6Mw44v1NDcvazroVXURwUQ4EWtaL",
  "key11": "2ya5TuHSo5NduGoArXyZJAxshGvqgCaCLPKu3DwoxdA86zs5D1c94R1nbwUKmrD2DJEYJvfHNdkNrTMpgemdpwbq",
  "key12": "5VpioHLHP8N5TZnHyxzPvj2TKPGxEB3zxb3FJkaGmfeT8YsaknFK1tzNyCRManGJ6qCpGFSmXTCtTKh9ru9qCGM7",
  "key13": "44kWAcYJgd2bKEy3wVAQswSQx3haa33fASZip3dEsfJipzZcgT4A9gFCxAeiHmZrw9TkYvEJRQNE3ZQj2sXhvToc",
  "key14": "2YR31ppYiGcuHvraPXMjcbaEr4LeyXr5ts7MyMFMEF7rgvargd6NLjr71EXwruiKfhRbhA9azJEDVNhgeVscDVF8",
  "key15": "5SAn6a8QemQYV4FGGFfPiHnzq8cKQgb6h6sUWCFEqGhRkTYLVrKUiNBkWAsbevLreKWtUeDJxHXag6v3wNjQrBH7",
  "key16": "3GofMSuWFe8JvDqF1j4xFDGYTppXibotgNeedVAcaxgUHr3EeG7ztXMZzRsPyfLpnK7xPa5jyeSQ3veWx4S9iqjR",
  "key17": "94DBK6LjWjV4jeFynt6GMUcfRJS6zDqzwJa5sXbtzcdVGNNb3xXjNCTYAaU6wzEWsqbwaDH8wdTeoYh4CET4XL3",
  "key18": "276Tem4nu1kotcAiJkD9nd6fxUFJXMQ8bFrrRftVW8xg9prbKL1qoTjFns7nAjXS83k5X5a45fzz377taxxQ4fxc",
  "key19": "4YBUEURYeiUGtUBv8yWTrmETkkqiSYQh3bkzQRDmX6JUCL4GEtrkXDQL7YBsmMrQiHSiW8JjpyUcwSSodn1nquG",
  "key20": "44YudssGk2RVFzNs1rZmFicrWHxr2hbnkLpdtdztBYbiLQGeAtY6bv7GN9P9oV3Tkd8NB2KT9AYQHxTWm8ymHXaS",
  "key21": "5LnkF7iSyMcCecTbSkdew2fNzJjmJzQnRv8wyDkC2RuEKTPdviqQL4iqCeXieGQeTJtmTofrdHZDwSMHXcDSK65t",
  "key22": "4TpdjQjiAaDvcjJmrs4jQGVrFCGFZwjayLyBqKf9aCzJ7PeaY8U7nko6Ekg8S3UfSHnudtEcAoHow3FfJNoaonxH",
  "key23": "3cCY8M6is2FLCuuQX5e61DtTKGNY8LKWB1Fa4enZdZ475t4XatfojcUsa6LvbhezcL1pWFVoP1xXyUuE99ej6KSW",
  "key24": "48UXqtFzZHfUMM2AJv4xLCtnwwBrK9W6urzdoDwmpyhX2VKG8TyzjMegwrDWNvkiFDMfvwiDqD2UaQjr89DrGUyH",
  "key25": "52jTTxMiqpBFjL4LsQetEjfpiT8tQZQ9oxQi4fD2DgrSQ7EjURekrLNYR8jXK8U42PAT238t11CxhAeP9DMiF8VE",
  "key26": "4VDw3q9uzhGgcqahNoStn1rhTbwXpgEw9zp1cmrKkaGQePbHHYQQmNYcESyK9JVtdjCgYKkVGqQQ7UVjdCTt8RV8",
  "key27": "2YBqvek2DzpP5TkT9BQRDULLBYWGhpSnTMYP7QTmtE1eDHHvRZsJbvuCh9THBnsUNqrkxTrUAi9URFJHdQFEXD3x",
  "key28": "5GGmxr9LKHf86YSE1VtUhbiu4gGwUFXdVd3DWC5576z8FJrcgFtxtt7FREptTucksbn4a2osXQw7WLfBddprUFyH",
  "key29": "3miTwVSHsFW1Ca3sE9nqF9fMcUfQbcv1aGPLifHcgPUU46sAZ2VYwMhKQ1f8LFSBaBGUMpnq65i2d9jjVUc5t2mQ",
  "key30": "2Hozp1taU8c4oMN9aSA46Gq9UxATw3jjPS2wqa7EE1DXCaWJhNJ3BSL296hqxf2EdQyDYHLP4piyMHc5jiWbTCqE",
  "key31": "3SD9PhaPGhHNYsaRbfVyfqLZeT8zv1PUSvBwz3P3W9T6KhSDpcd3hEMyWTKjmxVEFpaMGQFH8ga74f128E9LwD7M",
  "key32": "52QSjvoRhQLCns62RDpp6tR9KCMyANfDei9Prm7t16WbxZKZNmLtH8Un65zw1DqBGngyW5xrrEhWcH81NG15sxsR",
  "key33": "5vvSax8a9rzuDMtgR8z9wtTxR8bwADCJrfMkdKWRTDf6uCJ5HTYrin1xUL7wRKsqoiRMU8AaeaRtTGve2DV5qYeV",
  "key34": "woXS5PHSeBryrQr2vt4B7FjDRquAaK3H7rJciskAXMbGCJW4fCE5s35eqSiX2vQRvoEd478vei9tW1wYDz6h7y6",
  "key35": "3KpWD12a1DpPp8wcPc1xq5QjjCarGVj9mjqREMejLLxi9UKtFqGNhuoqRFtmUTRov1zCsuxbvMA3knbkxYy6c4fy",
  "key36": "36dSCDoF8nJ5NWQgpXtNVksXhRSdyDW3TDLBK5qguXTJjT6eoX6mMBHVaq5Hps7nwRPocY8iqxTL36bEnJ6efiDk",
  "key37": "3z9num9QEwxvEqjURwhk8QfnXozgb24q56JKXRqfMNdY85ze3xsnnb3zSX4cB4ZmpW7f3yu1hFmyNGmV486zfUCh",
  "key38": "58jUEW2YGWAfro8AbPahTJrk4Aa9veQsszCzmtWbST2XkC5QPVdEz3mtcGhHggh54mgmFWWr9qi81FRLm4LJi9UC",
  "key39": "4jrK4VkBr1yU2AmK1wEYSQdykkbsVUCTHVq6nH6kKHhDLgr5kT5aXyouGLkJ8tkdWxpFJ38wakdkw51rWpibBSGF",
  "key40": "2MBj23acD3Qjsekkxg7x94q1c9BaocX31ZGjPrpp9goaQSrQH6KwALoxnFRx1c17WaHrRGwqawiwgugHmzFDfJE6",
  "key41": "5yGat8p47ufRd497CThmsjivAnBieYHvWzLmPNKa5DLPSGD9w5qtxRwMcSEKFF6ufsN3Bn5SD2wkzxoMsJdx61x6",
  "key42": "3EtHa1wnPtcn6QXeyGv5ZzsxJ58wyzG72Dxba97FHKVQM4Y8dBg3ZkqFGGxXqhz23bYvsX2GEN1KZhXesNte7iWo"
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
