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
    "Bpu1jivpzvYdxsnf8pYqyHfpXA2rJh9toGYymF2nfQh2NoDCmipJVTmXh5BSkrB8RjyzkVyo67vL1n1xrAP6S4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2atxaSv8aAEtM1j1c5aWh7qYBLgsorZYLom9FueNruLVYddTJEfunMXbvZcDohHQPv9gBMadAWJ77G9ZFLw3dkb6",
  "key1": "58kFM5wuMSkN4DwqRM1bMQcYfQ9CFWUktz514TYFBi83eHbKG8wxxZmxFZ1ybQnZY1kmUybSqgBus96mqdTvCcHZ",
  "key2": "4uYCRFYrfURk7vUYjYQE33UGUVEvUtaLJKnshaVbc4J2XxgSt8QuJn4S8cYVrWEfP3zWANNvrTADWdWMBPXYhYEP",
  "key3": "2w3fv9B5gLr2UKmpcBZMxjDvoRekPDKbnr7P1fZejXyPMTi7hVnwPphnNGgKgF3vMeorfUx863zYDMfXCDFhxB3",
  "key4": "WoqUH6ducKHtZDDgsLmPpJbGxKNp9MCZ61LNmasnpqFfgbZzinzSKURKd5FMAGrq7KBvrycBXtn8CFb1dbHzz8j",
  "key5": "4agciMZmjjZSHqwFy1big9X3JjMsnvYdHTq34gMBogoPRf2KX3iZxUBRRGTuDVJRF1dgpgNcuAWfLPUPGTXVGBHx",
  "key6": "4UTUKcNd9dJZYgxLH4LfLGBuiFnLBhyYxG4ucGicvrx3mKbswfGFRUufWF8xepWpxCL1z9HhXBB6AEWsiMVywqCH",
  "key7": "3PTgcjBY7ehVjjx29iqofuy1TKjQR9TDQfCYhkzbBuUgfW7TEq8PqGspz4YExCPxPDMC4tYwgQuiRtExSYq3vBVV",
  "key8": "2n3sDceRWJg2iEuZrpvYF7Fc4db3d6X4EC67XFG7jEWDLN3L68sSqxkiJfNS8K3CFpWegBY1vfg2Y7QbKbvPZ8eB",
  "key9": "366L1Y2iVuSLVUPJ3QyBBuGeXwrvuC4ejmrzGYHsBmV6se9PmYRggJ5XuaZrHMbTCw946HK8ofgDdanbivrQiQhs",
  "key10": "81pakUQxJecmfSeTyxFZmxjkX2RRksLN5dcDMDyTpiZdcFpTKisdwDRYHHx24RSu4KuNepdtFREWJfjEWwF9YAr",
  "key11": "NQsQrXZb9fJfHBSUUqy1hRj5zEtTW8pE3aTJLYD9tavbMD29ZuWPdMQUrBK2KkxS7v6HFGZymXAFALcaKDbGaC9",
  "key12": "2omTjNRBdwrBZrjSNchiNHByHqa3V4PHsDY3uSF8NN99iT1ztvSTyodaGAEZgVa47hvYRsj21AyfsToHnBJh6bfT",
  "key13": "257233grehH9M3XapBpPdwCKaQa6vuDQuuPYJxRKFwCxqsZyfzN5Rqtd2o3MLkJ7pBK5Rr8yvdMi82EoUxQrx8xq",
  "key14": "4ahsuXutAM1g285E7RnPRGiccprhB3hg1GQcM2tvsnPvy5Yq2pgB43W3EpSWyyEudggpi3XoZpZH57s4XNZLnm8b",
  "key15": "5LYy72fCEDaLMyjQra5EvkYFrZact4Rb11aoQ7Hhck5yaQV1UmsAg7bw1Q12mnBEQJJvMEWTLyL62BHZ9h2sbuko",
  "key16": "YNYf3ZbJhGDcJLFt5MtEJ1CELWhg62wjSPV1avuuDYQukbhERMbK3DKqLb8ZmStPtAvYMoLokpUsKu3QBACqmT7",
  "key17": "5SBXwRe5j7J42SMPJao8diK7gK5f5rCkq3S7q57Lw4LN5KwHo1iuYRTuACdSuWFXZQ8tZULUQ5P46rbTB9GngdBu",
  "key18": "59vmbMvDceeuznRAo662ae9gFr1zyEgGWWwdTvFEgPPQMV1QKNQ54GeXukUDHEVksMEqLpiwRQaX7LV3oiSTyd2t",
  "key19": "5KfgztovNs6L82id4fivfBqHHzEnnSjdrr6AQzbcahG6xwm3W6S8amydBCYhEjJdEax7cgzHWUE3B2Ska82S1S8L",
  "key20": "3WgrSLdYATuM8AxpK6LnMQK9gPeYeJktga5zcsHxEkntKUFZYvBZ5UsPRuyYTPT7ZefxAaiKUj2EcHWiVNagJHhH",
  "key21": "4LDi5cPB1ZS1Fo7nnxc8C9Cey3bsXU4onUjNRSUBa3ftQdmJhtEr76xkEuThJqN5a1nZDEZJS87vp8Mf4jDSqJX9",
  "key22": "eVCp4A1xHY5sq8ZymhUAxGrudPgNerq6nr33ec2cydaGcoPn8KtDk6yBVoUukWfV1FMduxDZEkmu6SBqETyR3RM",
  "key23": "3HqKUw1pF2MDYbJ79uLbA3MAsXZMbE8wYT8HAtxUPELAkYF64DEDcNgSV2XcDj8eqcx5fi3t48q7brZAyY75Bmv4",
  "key24": "2i18X5patmGXggPLojvv25RHmckMfbZehtXk54t1MsxqYBf7J9Eg71xXbisfZCudcQJRcxaP5ecWF74HvCDeTubP",
  "key25": "5wwocKJTMmahigU7bRQ7nsuXXH4xpX8RzSyfSUyDpRg4u1JZXevKaUS5yJyKNwMixMp7SkKQKnS7ZAWTrNzxom5k",
  "key26": "ZqHW7yJYHNkm26gmtVL5hPF7NBBwnJscJn4eumDrVVtix1GuALJQAQzHioWM2rTvTNYoKGjieB6TX18dz8mWqeK",
  "key27": "4RVmfmYeMNbqfxnUNZbaFiZNbEhciKD2ecUqYGEx4n5zxi1CEKBgNrULFfbQZV4Le434jqxR3xuwWqF5qyHQGzSX",
  "key28": "4jMstGvgbChBUK1yhsi11iAm4u2zWkwrE5tRTpphvX7Y8Uc27QoiPbTsph42Jwfvn868rujvHmcJnvWh2Neo1zXR",
  "key29": "3uojcRsSoEtL4PXCKgs5xxD3VEJd6c1AUZyhEPuctFuE3pTf35eBUs3EsrJK1Ln6vQHT4JX6YhGBu1BvwJdXvykB",
  "key30": "4ptxBC7kgHdTZKGMTpNX53CnCBYyArwyATLTpfti1NE12yWQ6xkT4r3SoPUD4Jyxwd4Q6LyE5qGf48e3r3JpGYAU",
  "key31": "2kFTuo9bhmLNUmHVyEiUyv7TZEoAWCmFWV8hjRASWkd3aqvj2mkhf1Wu5Bse7R3DeeycPuhH1CC3NczPKXgSYNLi",
  "key32": "4upxhfgAoGKz7dghwPDKTVJQV8Gx7XQ6eacvKNEhhmckz3LEaj9RRaAyvPbTcwuF47LuYsDFwVJSbBvfcMvJAXAe",
  "key33": "2A8eC3K6aEJfb2dAUxU7YiyiCsAE6Dj7XR2HUyYtW3JFgXoL7FQRP7ZuBdkMgw9ZLMwcgn62jdpSv6JuD1kQCuh5"
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
