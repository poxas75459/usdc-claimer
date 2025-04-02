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
    "4EPqSamZnqCBVNW5UvnAyJWFnrwY5eypxScCjf6MEMr51GqrLrAFkSoEtKsDaaMHff9aQrCt9PKQhfh72DMFCfnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gjsgWizsMqv96MdsC28k8U5njLbXqo3ddzaifBBuwUUMsm6yh2Tnpg7VTsZmJoVvHVEhtdLVt5852oycDeK9svw",
  "key1": "2Z7LZ2p88JXyDf26NBx578eJKDPLEPnwTkJFBm8CamFatoh6LAY7cbdRK3i2yxPqJqAYPwTDT9CTyWwXD6MSRaSr",
  "key2": "2nNR3UJf5rkcBY7WbLRJK88S7m63i64dKX68yDuHBtQdWoP5KxbUhAjq53dAeTYWS89nyhVbFMWbGtT1Ky57U7K2",
  "key3": "bnrBsZqMwULdaK2xSpSPiknAm7ZZq2cwuPZgA6SAGdV5ocnUJzrnNMtj88JKWmGkD1am6sLauHMx7ncj6bQd9Do",
  "key4": "bM5pV7FvPwckmwvfU7EvFDyXCspWz117FD3ftMhWAgM9GfSYDsmnWmWHrgLZfnzpmr82HxUZTc5dJoDMsjAswLT",
  "key5": "3hR5HdiDZ7j8WRmRS2TN8UqdjdzcbAWA5RVHCsRnSWV6zt32ncvdU6ZJTai74gVfGKda9LPAdS12Lu9nE3usd11g",
  "key6": "5jADZ6bDxwK1Rt8SDMb866LK2D3LuQfNJ1NmVVrid22VEZFJPbvZS9r7wrBGTfnK3WRxeAPS23zSgqXFLjwSpbbc",
  "key7": "4gSipvFYVR9JaJYeVFFbEHEZYbDfVTuyDJc3JV8jn8ceCNuULsdSMNqux3XKeHugdbuwdZ1EJ3BRyoiSrrmwfgmP",
  "key8": "2g2dW5QbbZo2k8JUoGCwy6PNrxGCj22ZHHLigDuqfqusXXrdYfwXLrEDT5rzHommWisMhZju66iGxBrKHu84QjKA",
  "key9": "59RncKyXHopgrn73sae26gip9Ja31zzxvLNbRdHo2PsRRp2hfMNZ45KLCPyPFqCGi85bU5FJaFeuikdsenUsKAHi",
  "key10": "663aytodVJmqCY4gJdgv3Zw2m63v1RkAUmqWscSB5EfmcqrEdQPtsCdgadDBXFtnA2UaQvR86QcsPn9EBZ2hko9E",
  "key11": "5Q7kB6xXkz2TjXguhQn1srBaV6CF2Kd5J3AT19VpfjEBmsn8vg9VMKnB28VFaYC3BUU2ptTsJK3VBQb5motJZ2Nr",
  "key12": "4uGGQ6ERXayESKZbAokPuwTWegbWbXJNAFtUivBhqkLq5sw66hbuzwfLtpX6amAYfKs6W493fUkTSW1RrruwpiGt",
  "key13": "3Uj8oYkXoWG6zfF8RHswq2R7SMMHQnpdQSHwVbDSEVCCUHfwxgsqbDxM3pqr7FScwWT63yPBqfeiJKheq5MYXjNb",
  "key14": "9tjYWREHTnqg11GZU88EGPWQyoYekPjUBZVPb8ZPDMiSHcoQP2V5pYjf6qkS84jk1U1rxAuNRPAeo4g8mf3r82Y",
  "key15": "4meBvtMLpC2V4nuGopkv7rJRbNZ7N5CmoySBjTVPMGautwPJscLQsDLvxutWBGQRUHSfwyKSfjACPmSgF8tpDz8C",
  "key16": "4uFkYA9KTxnUZRvKm2qd7Lx7YtuiGKf5NRTjnL5WBvg5TuDRSqo9aqbjPt6FZJW8w8G3PEPbm4h1fK9baC7Xazzq",
  "key17": "3yS4aLF3tfXkgMakQjxBEcQG5xABDz1wp5PePQemJgr1j6g34xpNz95jPiGSwfiYgc2PtXudtHJx4uA8QiqGUTFK",
  "key18": "25vvfxawjbpLgaako7FdMDJXeHD1ndJXv8d1ogbytjZLRYVYh1ZVi9nf45F7zucfSyZLyw3TaFysFYN9Y3MGBzR1",
  "key19": "4mwaw8uvkfuyLy5WPjMBw8qnowMSwYmpv5Qn4VzrqfCRBFP37dHDbWCjUgR7tiX71oHdsJFBMC81j2arzWSgzEZV",
  "key20": "37w6eQhdxzyUiSApAW2FzxvpZUKav5BbKPHTBduSFBrVNvUH5ScWq4qoAncXRL4JrLYy8VCiUoyxJbUX8RnXUf8E",
  "key21": "3HHTmJqjanP9Gz1Wj95uu5GJG1VinGiiCtnZxUei1TMkmkTGWes3oDddbNhAFCEuGcbJqs9rvJHNczVtkGfo2D9L",
  "key22": "qHSp8nMREDr4s49vJcEUDNEZSE6BrWwcRpHATDx6gd2EhKrP8BfoN7Tw1HwEpMCmRnjD1AMq6poGVf7q6oiXF3s",
  "key23": "2jtZjhsEAMUzXFYMT9wQvbiWMHLiHKJHMKsG8w3HEGQeS5poiqugpVj1giL5uacebC3hRSuYZc9mCJE8ApBoHpW9",
  "key24": "5ZXaRwnmXQfigSRESWD1d4ZRbcyPDuug2dT5Dr5R5kkbK9Hrh2sJLk9PavNh2MdNsNSHrp7K2n7MQJoGuSXfuMj8",
  "key25": "3CFA7WAsh2d33W5w34mjyanbzfiq7kQ1G414Y2xaohEZ7fKvMACp4Q79QK6huFYsLUkLVybfAiSJzXe6rvsSyEn",
  "key26": "3D4GJyQEE5dt55hPRw3sFmwa6jKexAZCqeJfWgDcxXK5Ev2vwhXeTMraQkrM8j84g9ssZ4M4XsnXhmKhMQsgkQiS"
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
