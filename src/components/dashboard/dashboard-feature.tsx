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
    "226zh77mpkyiAuKVg4eHLoCY2RxLVXr1R9capJjhDHQG1pPsCGsozprwvjBdmKNLasGpLaMvywAoUg5svoSzZtrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V1pUPkzB7D5ZFYcm47A8vihH9bRPCwRZUFqh5PyemNrSdehq2Dao2Lzz4qb1gFEZULa32kCQKhVbNvBQToBhH6W",
  "key1": "5Ks8zE9wQCHe3oWfgXoRpWooPYVhVK7iQMvzDp2py4cC66EL1WTZFcz1sUCaMbgNoXgDmn8rJfD565neeJrq7L3M",
  "key2": "GV5k4ZcYiPia4mbDGnozq2z8EZZB43ULyGbNcSoPMQ6koEoBWfWY2pDoT48KtztjatrwXETHAqu4FzSMMa8c9t6",
  "key3": "2b7L2w8zLUuVQkzUzj36FF1rGqYoc9ZfWnabq5c4nhJAzyYJPMuPg3vQUfNWvkaEqokVpfKLw4XNHXf67aRwzQ2",
  "key4": "HAM57yDnTZJK7y9ba7uw8QuQxPMcdneEUX24VfMidUznfyWan4tDRyQeD4jwLW6NiHat79ouxnKQLsqfnMVShzD",
  "key5": "61LMdhmfjDMKsey4sovxXfxARWKa9V5HH2hfYF5ow9XtuLQz1ShT9FsBUvwphUyTwFCRiifTGZcy4zdmXmQ1xTyQ",
  "key6": "4tvKK4M8HVhZ4tfxoS9WBJofAho4NRmAzMa4a1C31Sh9tU22iDSfTUXAQfeTQ5w3HwRjTYZ6AhPK5cW1XUEbHUoj",
  "key7": "XS4Qf76n1fcv2uFwYUhKxioeSevq8aBosLgAXZck2jN4RyTPx6huF5DkiB3fQ2NpEGChr6K6KWdYcnB4V2iHadk",
  "key8": "3RkFLzYzB75EyGH9AGeQ9m4ygGRDjro2nckcJUGufD4T8Gca6utLFp7MHu3gjhL2v2RzuKFFi5THGrwJjh74uEiq",
  "key9": "5DbZczctAXPucADyE8tNyJDq4FNNhQMjukqWJGqaUAGN94qFisX6nmTZzH8XEYU9wxghjQNpQoyvZVpkJosQJE9A",
  "key10": "4tU7uW7R9LJyiafXGdARd3dHfjDDZ637qFMRv7eA9joXYFLeRHAAsa8TjVe4Qwu3VRqudvkd5YbBVb5JgpPq3HZV",
  "key11": "DefQ2D7NJndxmwAPtGM4VxU26LHrTsL2QgmPsYfnTc45ATpjdkmTrYz1j6VEQb2xHdcGA5r8iMKdWFfP8QtAPC5",
  "key12": "3nBaxBX8xL47bpbn8fC45fG8fRySKANo1PRRxdzDuYeW2ajqYU6ybmzhnDZ8CdDgRZeqBmW426xgxc6KUw3ygXzo",
  "key13": "kYQDQKHNVZQahzVqY3fKfQ12ZDg6oQfxeJw7KrdLZzTTBXd38meQFNo8UqtYRFkhrDVsmXG2S4xecqKNFJ8aGb3",
  "key14": "QmkeK8xwg2waskXQyHqJeyViipwD4nyE9DhWjo4BqNBgbrHF4uh6jiKXrsjvfiXbKyoBvQhHh6qveJ8pyS8ouvR",
  "key15": "2XEuqgyaNFm3HQqWuAiUke7AM1yFCfoPxqgUx2W4uRM5jwWTFDGMpLNnQFQNccXqv8CiJ7uw9P7TiqKGrse2HmTn",
  "key16": "DNmLG6MgqZXQVLWb5EmGfuqVb6o9EC1fF6VNoRqjaopaHYayvpd2uoZUMGoDkRY1aktnSwpr2EPq8s1x5L2my2M",
  "key17": "2SVGbLiohsM13z7DjZWJP4t4wBXDMj7DUruSVJRDoCKw4rua6hbnjdbRpoqP5Wkfr9ic7TdL8ZCmPqnAvdhenNKw",
  "key18": "4fo11USFRhcECiMSSEpjoNQYCabJaMcb2KaF68MP6UEMdXZVQqS3maPam29HM5uDYrXjW56nfr5o3JzGH6xd2pH9",
  "key19": "nBuWDn84SSDv5gaxazCuGW6xRe8ynVFFSnnuZcPHFTJ8X1KZF9Y139t8nbWK1oXXTu7r6TfVJm68vsjkm38y38x",
  "key20": "uq72L1han3pmGZ85bqWzTyakbUxv5na6TZbwGPpyapZpyWCXQUf4YYYCrTyEfzpcf8bq5SmNuAazsH9S9Vidk9F",
  "key21": "2FAbq8UfNWbLBgJ8qojV89CbtyGduht9DwAdt7rwfoC13igr1ssJrkrZiUxtcFcSQQqkENaCYLSopreDxm5F1BJh",
  "key22": "2Zkvc6YbAasqLaAZirz45qmRwGzhpKoi3Uyx6gEjjsJfN4NxMczPiVf8QwaeLSjqcmEs4JnMypompCRHXTwa8RDh",
  "key23": "pjzXZXUq5X7A9nNyeBYHvKiN3ubWBF93gbXqJNNudQczCQn1E6rRq9dEBqJLTaC12qHoTZocbN5RsFabiWKqmNb",
  "key24": "5MeYNy3egmUP2utZEKgGK6L9XeAbvbKPBQK2UrgfuMVKMMK3Dvkwj7DzBtYLrn9tG5yDTgyRiX1T3sGPnUcCRT6L",
  "key25": "3KrutJV2Spx2jGes2gfyWAj335ns59JX64epG4aHiZyWSSwWJ9aW8i7U3fyriyg1mQkvTLpmrHW42uKVHuMkabYP",
  "key26": "66EN1k6xC9vyh1ETkXwuRtaGwDboAfZPYUYjPFVDeazCBiWjKpNJepXRvEjmPnftmHu2EWuTf9yRWb6oGShMdRAz",
  "key27": "4xGx26hHXdCEr3aaxquYQdq45hxn2NDHq9RAcHzPyyobEcMDzLMzQCGDjMaTAq65zghX75oRQb5uQWVuLyXXrS84",
  "key28": "54vHaAuVtP4yLuzfx3etzR1uGjQabwHr48qA7LxNw8h26CYXoWTmxmrKL2doGE7y4kKcyFDHuodLircKwmhPBLk7",
  "key29": "5HAo5smDrtvgffgxhUEMvZaLmtYoTJ6iDQc1fULXGfxy9AH4EF2EN8AqN288QgCeyb3NHrJF9gCrDwxETbYtg4wm",
  "key30": "3jW79SmNbsCjdjQA39eRYvsxDLrm6Cv4ekeAxyVjcvrse9BnohsRmronGQBpxTrZ3sPyPznX6JTL1f8QuJWLEXQV",
  "key31": "fJSRGqetSW9BUNgiYTeDVDAtvBpM54WGz8tDghhN55tzT7C6E9yuZvpzqeC1QkHK3hm34Y7AqZdgzZeNHwnzjHz",
  "key32": "4nFV8HB6F1Phq23hhatpCTPmkp5zZX3MBDMFCP8QnVFDjbetyofKkpPtN2aVNe2yu2FbFWoRWrU5xvmwh6cxcDpr",
  "key33": "zr2Q6nvgiUbCUiKPp6znLYEsqqwLPnmh2dEpaqFFkxTYcx62YL9caH5pQAFtJm2oCZGDHG4fQujCmH1HF2BM85Q",
  "key34": "3X2txUbhhyjkPyQC16HLV7C3Jas9QCCJ6uvfUyNWur6gZWg3XwDupLYfNX1FS5WTEdo5JTeMoGaraSDX78vfNEPD",
  "key35": "4geRFuT91b16X2djSVqntRXu6jzED46ypeHk7b2uAzEC7TwCCud7Kcbmqqg9ekmj174zZkzNvwXVWBmfcjEtupDt",
  "key36": "67Xk1wXj51Q3TMX8SchaEtxZ6jKpMWn9RBaa9N9KKR9ZkgNToj2Kk3VEmasScorQdoTEoYgQ2LVaB5vfo7Zdk4Mr",
  "key37": "wJ4udavbEu9ZXF5BtJz5Fsom1y9kZCf7RFxUtf55AxEs6tiktRkw26HMfiqnfqKTmmVo59d7KgTFKtQ9H7YGdZP",
  "key38": "5kVzsKpsM9QaoFU4wLsWdYCDgf9R8XUQ6xa3ibqH6tXCU7ttxi92Li64G8p2kV8w56FGzsm51mt9GApJ9vX7s3KT",
  "key39": "4aZj3Df7XnJK4yXvFcvcHGnZA3oQhQnqHcypWvtmyWDJuYtZJMgTrR5jmMwF5s7end2hRVEJsbXrPiztiSj4QHDG",
  "key40": "3ovNLdiA4iScratNingz4aaAbiRSc6XGanfnyHz1G3UKytKLWp8gAGNpKWxzEPdVVdqhSeygyRpEadCxDVWrB7f6",
  "key41": "473raro4HDmGctKGauPbPoMvRwWamrYWVv8NM4bzhDVMg7X5PysjQouK61H7DP9deqvszHJQKWV9KHrYniSgXqHL",
  "key42": "62kFHKmkW6M3stE7txGAo3eCSvnxTpVDbs5tPhqanfaNb1jTABKziSTrRabfEUPfwL1s3kQ5gAKrdAU282BKBtW",
  "key43": "4MoPTLjtEN1piNcbR2wfUdc7sdhm6RQTh1qZ7YiE4arNi6mzJn5g6dKowbcxRLwVD11Xzetvtus293rWxUVk1iWN",
  "key44": "37GH6yF1iizYwjRhthj3grhbinaHVzcmjiHiBUTaYnMTR18XyWeJ4Tb7NCR8JiXsR9ASV1o27oLBmeCiHtvrPC1M"
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
