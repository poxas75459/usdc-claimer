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
    "efhg4h4jT1PHfsTQW1Hs3HEQGMXZrFJ4JaKVWaaqYrm1jZpgRRMV9zUupS6j8bH1iFo1Wjohfbm4w9UwcxJcCYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3twQbhxrtn2izhbwV5hessVwPJ6JP9tpB6r1w382ZcidZBkgfp6MjNXZWc4YPNZKBAWC7T7YMqppUR1xnh5dpfUe",
  "key1": "Cg9mnqRfYsrQ46c3JskuXB8esGcPMZ87x2FZv6JbrUX6vwVL5uB8FEGRzeqj3VTSnvwvyFFFAXZvT45KDp19k7E",
  "key2": "eJNoBBMcWZgpdg9w5U7Q3D3E6YR1LPC5hRwi8DgqTUTmQySorfVjiN8KywhNJ6MHcju1KbqErABKtWh66TiUMxs",
  "key3": "yaRcA1kb3WHqFeBYU1bY1LakvHAQsQp3o3aCLyCivDzbkpZ8vnaRHTdfvkKUAnpQNKNSXxU1GRYt3mofnu8yjMc",
  "key4": "SMYqx2sSbQ9N3TshTGR6vtMwsbt1ofrNFDGErutNSSx5VsGhP7EXVJGbGn6bKS66z7PvH7u92BtTAfF3HTjDjqY",
  "key5": "6iVPFJMSeXGrfW155cPKXSDR6ZJeK5A1THKRsKuM6gatS2TaoxQsXkhQpKrNbq3HRwAGYUwXKqY2EQ1Na4me6Zm",
  "key6": "3P2ZJLGFStfEGrV4phCTSSXWA1cNrXoDfGtsqSwaNL3R3FM2rgSUTYTYumbTfiEefVhjKdEG2tkCpWE8b6somVxa",
  "key7": "2BjDdRCXBDmSCssZ3rX7yFFo8Ju9cAya8rQU2rQqnYuphJHRg8vFNPUTLfYDdTGQ4AsT2hFwBs6EQ6BUwxXDEzrW",
  "key8": "388dtrPuoM1d2sJ414Nu9MJ2yJiGAnkwsx6KHNCMSFyiuTe5rt4quDHdWekQWPj5WVhpbWxyXK8r1CFvDvt4wziy",
  "key9": "2ZVc675QtrntXdMj8JLz6UHdkiPZPpY4QH4FzbVQ5pvdkY1NCqD88r7ewLYs47sPqSvtc67qKnYGwdSD2FAkGuUU",
  "key10": "3AQWuftgMshTe6s9gyDnJ41o3Uxt6rqhwCM3SsdYYcqxiJcVomjjwx74TJigZCYkHDYPq9gXUchX1n2NMZzhLVeF",
  "key11": "S49WqLwDgc65oPJMZdfszSBQyL4ELBfVx4PpgJMMPMGBHYr9oEyUM6187e7HrUSmfkYUSYpgx2EP7mRpPYSLLdq",
  "key12": "2USKysGeNBhoopMnRmVCGPyCMQKM4Y2cfdVd2fAYQxQUQsgH5n8Q4ScW9LAPv4mfak7k1AQNjhhTUR6NFCSheZTD",
  "key13": "3GBfFGTt18T7f1nmbU6jPtp33JXP74LiM9GNeMWkh8xJZRZaNudDNWt5HVfkehXye3tHXGjt99NSXKP6Ck9NHXAv",
  "key14": "2eoUFYAkhTLmWz4s58bBxaktKh3TXVr1NojWYomjV7nxVgy1pzM7ASt3AswpjvzAU9fCB7kGvATrFm9mv1gndE1A",
  "key15": "4nYZGX6FbfwUDwrwm71LYEZAwpvsDR622fMrGkWhjjkQ94uhU2fpazxFSSPdnrYXWsuMtr4dMzKSkVdAv49cxFTW",
  "key16": "3fatLZCCC62ayLBmGukBZMAH66PfiSPa7Gus1ry8Neojhw5rP1TvPcXj4k3EdAXGVGGxFTmYv9MtvQS1AVS1LBQv",
  "key17": "5xgmU14iFfyaXJDvf1jafey6q5ivTMC5inkzYG5uoKe1V2BTfT1rg4sAZQobYN9153Yn66Mjpi56fN1ZVnQC3FQh",
  "key18": "5WLwRHipdgiRbX1hgFFC3zVUnpLjFWEEu4DhnUgaGxhndgvtCoeo4LMAuBWE4bR5FxGhve2Y5K3ASRxcuQgxMayJ",
  "key19": "4GoRvLVcavKB8KYZPgcpPh7u7aGgeKJvi1gRMmnfnuwDsSbM5xP1eeVJyFYqATNMrJkTUJb1uNk2HFPVtbLyw7xL",
  "key20": "2JNNAb7JYtGmhad2AtgcB8Acwqt5Sv3LVQg3dhb6ysgp23uE8jf9QbMxrUHiBhoctrSw7E9KzJ5u9SizUKruSHZJ",
  "key21": "4uvqpZwqKPXAAZmdp5YRrkQu4vcWBjFhpHFWbyb8HYxqCkTJtVssvpHa89oGna1dSRbZ273riP2xD3kB3CD6YPKw",
  "key22": "6CTYaHMCPiUQrSpY71JxtnBwHQXDTxVfPv3ZPA2EQiZaCA3uabpK8cnr2k2Mh5oCPDqufe4c4urckusfHFTkQmy",
  "key23": "34eseeDFWRHd8VFDXm2TLj631L6aX3eeM2S71PCHC951txGzZaUh6EjG7EBYNLv4ob1z6EFmgcuHfgcdMuC3FcJ9",
  "key24": "4W6xFoqEnyZQZNFQUQNMQ9LUJfcV6z2QcwXMr1nXA2wKQFiPryu9kct2JpBvpaEnSVBDMcFhu1eH3gFCukBQ2hvw",
  "key25": "4Jpx9poZm73hi4dVg21ht6pwpYRtVv4612h8VCYq8PEJJ4L1pRxvmBvwt4zB5gsSZNk44bauAPAbmdakZkr8qZjs",
  "key26": "26Z6PJebSr6edbEtRVY3bsXELhPipwpguT9uezjPVhSkzNWLPUef4SkhzUXLLmu8KyhYsKrHaDnu7xzvgMboynHz",
  "key27": "YB3CEDgpobAtPqzDRN81UHG7zT5LrNBicucdwc5Uw2S5cszatyakdDqTRcvN1CkfSRmLnKBjAnNanoh2XwEY8Xd",
  "key28": "3PKe7YyGwzdD9AkkbCu3PGM1ag76HNBiyQxQ7T8tSQ1hTiCZpuFRjL8MvD83kiURQLsXDVNVWDy4rUTS8sBwrWbD",
  "key29": "4iZf3WchkjwDVvcmNC3VXsrckeThoof84R69f2EQcPztCWqx52WU5XCFUo2rBWyC4jxbTHS6edXVaF1sKQ1KsHkt",
  "key30": "3qGqD8Bp521SrQvSN8AND7fYTzj8KAKbrr9csgq3eWRDzFg2CzuiJNFBKvSnpzfbzwyfXBGAxW3DuwTvQASTJM87",
  "key31": "2cf4tW8A8xUuCAwE3FQxpZB6Nk5Pif6dAfbknbe9P9BdPF7K1CtNJuA5BUUgk9oMQRaPbTDBjvjmLByW61bUSk6t",
  "key32": "2V53ySAfYYGVRtP6PtXobWirLPgCYhYDXopNRNeSqmNeVKxpxtkGv9gRN8nodvfhMPS7CJyQ14dubWu2AyNWsJKY",
  "key33": "2kszBx5GYBq2B6MfYVSxsUVomoLu3fwvdvob3HvidPnfhQeDLb63dEDguQRg3a7m2LiW4k3WcrQ1wecrL98ECmfz",
  "key34": "51vgDjeKFYnzeZALxmfr7hFYKuXEvGLaGvGjZifRYmGjcoT7uiVQMmaZCY7HnuTBgcv3WoeUhNbm5bAYLAVXAGqa",
  "key35": "1Y16w8j7duodJxeiSfpbymZZZE37GJ5o62xv3FivBBaW8P1SMmMnmNKQCiyzbNRHcTWND9g3u5WxoceG3HbnuUk",
  "key36": "26QRiu4xiFQj2Phq8aKMUKNMesjDcvjAZhQ8AyxBFyQHh8VWa5fArdowvXcwbPs4tU8PgYuTZrM3dNNPPbcy1TDA",
  "key37": "23pqKUL5YZnvP8dW5gVnczpBqaQNDXiKuixWdgMAZgEf2aJ7FHb5YBFY9ue3XCHSpH7DqKWR6wtsBqiry3y2iyV3",
  "key38": "652GWcgp8edhZXszova4w3fVb2PJdKMERMjywvqgtXr6BgESBpXRCrtMSoC5PmxoRn7C3xfvG5rDsi5YgR9yp5pD",
  "key39": "tSq7xD1ewAQ7BoY8J6M2hREMzd9MM6chnFM7VmkUov9nNWDvQf96p1xCcBBqhaygT2YdhGCKK1mFjZxahh7RFhq",
  "key40": "bAajU8LMso6fK55t9rDqTP3hQrAjvxkmUJB1SRq2d8n2WTtQGiPWyPtSVJwDWWPBQgH9xw7ApFKiL7v6McHbwjK",
  "key41": "5U5GG1ad96ExRe2agfaiDZA7593fg81geFX6wxR8tQTyMvXFfwy4QnmHrgDcXEMkqYMRYPaLHX7JgksbLBUSosnR"
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
