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
    "KApraHH1zW3RVZgqnbYSZBC9ZsfLivCFskHV8WRe2aCRkaXbAXMSAkwRDrJW7wr2Vs6rhzg5qcTJRnjw7qb3wUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fujRm3WJhn3K2S4SxoPHR2LGvBZbpdME4jV95FyofhWbPgy5Vaa3tbF15yimbsnhfVoxhH1Z6oXnq7f57w8bsvu",
  "key1": "5Z3VFoPwsLdrXXzKWCmSq4nnySTu1hnLBzkGSK73KHhrwhDy7A2ZcciKZV6MmFyxwbbMMfUva15fN3umnhkTbpE6",
  "key2": "4ruH1DfqTtRpPwHCNcPz46pLWGH8ZCDy5GP5WAUiurFHZpS7csYHBM28DSdw4AsyPchWPQfyh4wJyZmvLGFGo2qP",
  "key3": "4YTptDDxXib7awxkneLgTKrhFYEHWQN2L61EvWaiwNyfpwbrvmHh9k1Y7JoxHQqihpF1tEYbhWLzykKAxVB71mG5",
  "key4": "2NvsC9SvHSx9VpiiUMd4snqi6CK6EraitxJtAbK4SPmNH7MQ4PrMEjXX6J9WYMTK5Y8WGxVhrgDLqyYcUVo7jELa",
  "key5": "2YQ28p8kPBfN4KXN4wjLNPUh3oxhej8dX9buseheGqKrjLoNnTQyqM33LbzPs6LNNmETGFAVGPtp2ChJH1BogdYg",
  "key6": "4zmB9qSUNyRjLHirrNmfp8GsC8hyAYNeU7Axeck2WsLWCUWoNwYTRKSkrBFxj95fDbydzTZivwr5SXHUeDQSAU9p",
  "key7": "HWvjP4mzUvVtVkSbbWedeGyVnB6T7uFtU7jJFGs74qYuhiKw3zot5moUEZNi5kSGiKNu18V9BxTMUn7pMZFnnAC",
  "key8": "64QQQRCggpUwZPMXvPtkUG6cPVavX64hRNGmiQqiqZootK5J6ZE1kman5XWS1bEksWMzCN9NTigG1QyMdYLVU1wd",
  "key9": "cZJk4CH5tWg8Ny3thu7mzZsvzubB57hQi71MuxiTkYPkVZ4r9v9iCeHzuxRTm55efQFb9oQzhawnmnbkG5DHtn8",
  "key10": "2d9croYDtcCTa3d2H5GTRtVkAi26WCehrew4SEx5ref6U1YngAiLYgm3Z8P4f2eWbxK3UHhRMzUDqmiZ91YHxGrd",
  "key11": "5STArNGXqmNiH3qHZzxM7J9iBaSNZGMaKWBi5hNzS7S7tXy3TXkHfgNxrDT7PptiFGBEW9dd8yXoL14UWBAQn114",
  "key12": "3KA9x64EB8AJx7hfPAZ9caMJdjjBjUjdwcFBLvnoN7UTdMtRCi2sfKirjuVgHgDCKUk6pcUZ9jXEQZwXfaCgC8PW",
  "key13": "2M74S1sjRGWgj5esE91QUojBBgcgWNMfUCReanAiXgSxY5xEaf665N34PgX3yotk7fSxQqLqhzCh541himPffugL",
  "key14": "4ehXdhRBrS4JCnWCnjDJ1mXFs3QN8wZqqPcQSpS31NzRQGMi8AqB5dkX6sD9dPfsELpLZdQgq24ufvP48Hf5KPm4",
  "key15": "2tFQXDB8rWgdp1CxYWXcvu1ztPbzjL5sLU4SLcVB4rXs3Hv2AKjCXDaWDfQNH4Si5ZEnynJHPHhU2NcB4quz6EQp",
  "key16": "2Z9ZqHE4rLvZPzy7gYMySiRyxCLYU57BPUGM5nkR6B1C3marW3RzVAUPu4Tv49LwMrJRWqZqvYv57sFktQRXPCrF",
  "key17": "61WXVJMkMeAHgDJdoqeQcPK5g3tSNUQaS9cHEEYMahR4ZwV3HJeT9mbg7pcEx6wnvMr8o54s5kqD2GDb6QjmGB4X",
  "key18": "3kHYQnnAhR6TMg5XiLYp2HEDcFK44eKqvmKbA4ongr28Q7KyDTjk9NBjxNLNyVt7DB8uC2QDrajY4FwGMWdg92Y2",
  "key19": "28DDXmbmsEkYoDbx2sLcND4W1s5d8aLLjSCdqXmWkiX9B2G1R9bwYj82aL3dz2MuykwNWTFNxF9bkReuae64RR9o",
  "key20": "aE7Qzx452aLnR3jyUkdF3EnJkxqXhAEuF84PcX1TCHRH1axkokCkhk734NqcJdappVVa7HpTmaC1fNFiPGLVNTW",
  "key21": "3F9kKdZBzkh5EUEWsjEQ6m1DCFGgnovAJdjS71AzQ4Ka3Wth4JR4ahpram5AfZrnqYeiv5GHdz9cXp2ZeXkwFCyb",
  "key22": "4TFQWHGwtS6Ys7HkJTidywtZLkZexdEJj5tRZDxu79EsktoTxF3ZViESiefLuvcnHqWhdiDZ7N6p4Qcnj6PkGR7c",
  "key23": "2zmbj6SVyyFhRi7kHsxzDjKWA9mJeEx9xiQSs69zLdrrSHgdtJvGQvEa6hZJL1yxGiK8fU8kveFu22FyVxigpSCg",
  "key24": "2QtZGTovJvQ8unppoqX46XMMwz3NLU4rT3oGErmPyS2UFqgsraC9spy6ZpfMp5PUfLfRmJhsWRhknHvwwtzDMf7a"
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
