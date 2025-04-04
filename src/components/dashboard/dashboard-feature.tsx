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
    "BeFG2BnkkL3fDEuyBtZkYeYok7r4fDT7jEYDEtDji3w82iw3Fhiku7e5rjzgMQuQcuhAHQLyYDsSgmCRJUVRpee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZZeMUZ7H9BBV4foHCQNns15HgUZPeKEDfCRyTgTAZqMcv2Wd7VdbzV4JrXx2oGGRBW7A9Xj5iMMpfryM1YuP83k",
  "key1": "4AWRsgudQppG8mchs85iksxihC3JTza2RXfkenKxBKPLhVJkXPMNSsDQSKc8sjcPzVgmpGrukMZ66DKX8zoKkTXM",
  "key2": "4fhSt7CuJm6tdCpZekaGL58ur2v4PL2ETWn29nWeTzSKt72fbeCz6akZkE4zUt82uq768g53qERpkeLUg4Yy8M1z",
  "key3": "2TGaweUEEty9VM6dFZ3bGfi2VUu7e86cjQFnigqqHaciAdWhxwbmZquwe6VjAvuPshsQSqGF2AwxwWuQ1ttqJzU5",
  "key4": "4t1hofm5kJwGSr8NKCfKBHouNGBqrn6cLYGdSGgnrWuZ7CHhbgNSvuM4N6UuqDfpHVfDmKV3VmoEEGSYdG2BqhTu",
  "key5": "3mctb2QRKF3an8uxMR3jBxuqaGckLM8HPKr3C5q13wUSUKrq3Y3MWGZUhE7cAVhjyerb9An8K1UbjHC1HDXtbjaz",
  "key6": "YmTMnyR5ao11n2XqzN2EGTcgozwAQrN981orhq4JZJnjeoGbqA7MQcvrVKPFaRN7mLykweV7YkdyY3ccRAULEWD",
  "key7": "nL5LVcHjWm4HJ9XWbttJox8GnHjsubq8nAP2EG2ipey24Aara4MFGMU1rcAru1wMbd6JRTnFBvpCx7jj612a4yN",
  "key8": "2m3Y6n3pfMy3Yn2xkFUtCti6d59mQfALCqg4LjtZaGCorAHQEx3k2E6zzNVqSjj9mcE2o1jX1YG3pFatFZZG4d4d",
  "key9": "4U8vmYBAhTSrvxmicQAaPRL8CP9xy4E3nmrFp5y4mtQP178byVYQTzoHTKKccrEPY3mQe4h9aH3k7zNZMwKGaxv8",
  "key10": "5W6BWC3bGwxQMcZVDybU8N6PNvgZU3TF7VQik9WDL9fyWhfifo6ejuK4DoSiaaFRxMPFD3PGkWArgnR6vzV7Si5y",
  "key11": "jQiqR6Bgt64s2XvZE6basuuPZQYreKiVCWwETEKF6W154h6KE24J4QtfeZvBrDpJgmy2yAdFqED2HvoXPYxTRrH",
  "key12": "2cghDkDxdYH9VaiG4ckgFN1prvp4kaudZ4BmN8gYkQrP4qsBDtnXrtExS7Nn3x7qKHDn8JoaKbJW97xjqyzYciAn",
  "key13": "47nNJP9ezJAYeD6PNo1YKyJwHYro1ShxPsZpJemGi6mKvGmGZ8NgtnXHSm8D4LzgPZTQDf13AZ1bzutYfCocLzwK",
  "key14": "39k4zAPVM2HQCHpLLTUoniU57oaN4HukURNQjRLhYaJwc93YgH2cPPu3bHKnnry5NmksuvgDB8kSXYboStXY4Mg3",
  "key15": "EYZB7sqHcBLtNR3RyuNTAtDMzqNGZhk3Lh95tHkcooLXnyyZBBNZ2nh2pdefEXuisZ82kS8t7WNeDMiXP5rrpn2",
  "key16": "4EjegUuj5gU9CvebQbBwunLbRqn5BhRYeSiM3FMU6KwAHSih1LUhHkFX8paKzgM5oBojg4FR3udMGwGGCcY825GU",
  "key17": "3wXQgQuis5ddFDkUExjAs7BckCPUETqgi6q35ojKvZPMLAukEq73M25akxPaXAyB2Sycuz6htq4mFj6Frdj2CF6c",
  "key18": "4raMAETWn2y7gwC3B6TSpDZ59u6ZQqmcA14Ue6V76N1eBhSLyZcEorq4ewRoMCLNZMjebqCbiCMY5J9usjks4WPm",
  "key19": "9eX2mrrYAZbKyhMu4nBjKXsGuuFgYrUHthjgUvQyaijbuaUKoZPU4k9FNQYpcU7woM81avHcmPzjQtTRPMKLfu2",
  "key20": "2VZkFZPjxarkD321QDJgnTHbsa77pcoWX1GmRNoDD9Cu6uifewUX4t3wHvdkK5JYjD1eq2BkVHqTriwouPs5fjNC",
  "key21": "3uUvb9Nb5JB3pf2jawspJ7Sfmbc4P34WLzkgMr5uxt4wheDAaEziJnpafJkydc9KYJTo4dPiM7UbWpqvBD2FKe1",
  "key22": "8znEcWL2YBAAV7hoty8YxhaqAeFANYTPGgPcYwwa484GUUdxg6RRXRkU9qcQKASK48sjtYxyBDkRPRKSwm2cJCA",
  "key23": "58XUTJrZ3dvsuezwBNFHf4Ae6JPQfWaLXE2eefSVLf7vF666SLeiiewjdp9pd9jYgnYp3PW7MV53w7UVBwf9EBao",
  "key24": "4yxfBxxDskyekWtd778dRa9UiR5mAob4N6gMUgQVCoDbQ4iFyNHCaSZQhSqwL2QhZhY7pkKoCkHEhu6AH5t6a9Mu",
  "key25": "54MDsrnPbrnsGJRhenE7pFw24eJ56DGPbahvTLL2YErQEyyK9STona8sfkeDR7bKaoFsxAUTfZW2mQzVkFQJvQfJ",
  "key26": "3Hp98gXtFPcUhDgHcgreCtNYQccz4wPHwKFCTjZeoVbFteKZKCMGuakhWQt68NstRsgKWDUM9kj2gurXReq8vFMN",
  "key27": "4VPxrQL4haXc4NBc5WxA693ELnPTsJyaL6E5J1n3TUaYqgwLxFxPjMFavNfbLicbE6TyhZPKdVaqdcvxqRuxowCv",
  "key28": "2R8kRSggS36dRVW3yn42DwSZVuAqYA25mu2o6mqfyRBRNRhinbyhQeufE4iGqVhLHnGMmoSER47yJB6hPKQoyKhs",
  "key29": "2kGsEtxRLCuf7dMvHWLYWNWPvRKLUQEjFmWM2hY9wP12gTZWr8wLK64p4xmocMSCY8HXB43fz3yEMiM9eFnkPByd",
  "key30": "5Vho75xn6CRetiJUy9Kcqg4otCp626u7pL3jXQnEyyHGX9qrqDzfgjC4QnRC35wCPtQPNpq6zMXnvtzEao9Pnjfa",
  "key31": "4EkPHkY1BNLTKyUBnFLxC9cgcVkXahGzPypbby7Zuu1BvHS7cEgnLZiytMBkgcW6wVkX2ZfkMh6BE1vYytEBFrgT",
  "key32": "Sazvh2oZaqSmKmKqpFXryUfUcCxGMHL4hLUphqG6AdkZTqH9sMRqwRaRh6jJHkkeqKsjFqqTmdav9GqAi9GuS9H",
  "key33": "4SRvRSpDgw4sosMiuv5bKRDJM39SrVJtd3VvjK8MvMrCxoK3hKgr5UWQxX7e8zh3FBvW5s5V1DA5mXQjrLC9LSq9",
  "key34": "fUgckBoedeAggfW1wtKeBT9ZyirESgbZLDWJnQFECFXiRdY3RmTKnE1eSw38vPuP5dVF7eukm1o8oZxdXicpJca",
  "key35": "5nBWeFXwgCXt7AuzSzX3aidYqykBMmC9XrcmmXH69uxLvWgFHcGMeRTFVS2DeeDc7SZhbCwFMCE9nTBrGRzCsDqV",
  "key36": "5B7S4V6DZubzvbPqxhWjF1GxjJdUKGzwDqhPwsS7mSMP3LQXcyYHaBnEELpqw4saBM5mwoYk9Cb1c5tNaE64XbW1",
  "key37": "4WVWtNZWnVY42snx6kn4scXaqge3tREhyM7xS3429GbgFR2LSpWzZUUVTdUrsywHtRuhAxTTB9pSEBAofQofPKEf",
  "key38": "5ChA5rwYsx3Pdm2Sf65R6Fwd5ng4V3uWHX3xJQ1Z9RwjVFwFt9XsoLXyhEUzY5BDrudyRuK5L1BRJ1R5xmojo78E",
  "key39": "5Dz4s1Lp4zXArx4859gjnz9QaCY6SNzTQVVYfT63JLJcQKKXfRie8wc1Zp1vjF9RjVX1RUX6tBpKeiAbggXVca9C",
  "key40": "3Bx6t3qkQ7MpzzLtFK18n4VjK3C4nSqprxC7WDDuXgPmifbmSREQo5jA3s1fHkt9okKPE4cYpzTqLcMKrJjq7MsJ",
  "key41": "56KA6ayp6hjpJwjwVXSLRVbCNkZRqLGvPpJ7yyxGiAFxzqbXm1Z2Ry5kJYSMRpnsMDV28PKCnc1ASkmXkKb1hP1r",
  "key42": "Q4N1KTUK87mHneb4a3inrxtk7tqkrSYtVDxHPLEJJtrDM5SXyvpHEdAYqMnWewWu25VwmZjm4XA3tsvtuHPxUKs",
  "key43": "Z5vqyu5CPZdtiEwwJHzRo1aemtGgxeEPDiCpMNwZUGUzYrAAiTDz6JZaMpTGyNPEw6M7dWnLyQF6Hqj2RH2YPm1",
  "key44": "ERmcZmdCtXrzY2Pj9zUFTBHSZ3zNkACVaXYzbCZkHE3W25zc2spezGq1xszSdsJzhhTUef7BfjTHNjEbRRrJTnT"
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
