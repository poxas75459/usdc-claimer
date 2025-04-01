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
    "3HEqRzeYYymxGgYA1adjixBwVNPHJH9R4DGrAT3sNqEGDZvVH1ZHoPYXpoqDZnqy9ED7bq9JWtDfmBfrzoGQgGxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e2wLjXrML7T2AxvhGAUY9gs5xGoUAEk9dMFhj3Hr9qPDxLkdELwNfzsWeds1USg44oSdteCTd8PsjhKYXdRKA1p",
  "key1": "5qPzvA1YLxyMUvLGZ4m9omg9xwE1pkZDwF4mAjShsdpzb9yZQoXdt5CnrAJaU7PJbFTQUUhQ36FDoeJGSTRkcdVx",
  "key2": "467KRnDux7eqRCRHmSHABDjSeG2uzF7RLk9yNbZ7QMYEvgZcze6wQ4rNXzmktomEg99VgzTAdnJP8ynt1wpXz6Mb",
  "key3": "32JSw1StH6gj5WLs7DwkpKgfhEfM4BN9sb6xAas3scUKUHVkHKzAPfVtnDjgMnCkxPRMAmdNeTUKovhsCZuJYufr",
  "key4": "4PkjShHzYXZpHysa51dxKvxhqK5QjC5RzwxZF2RT9SphjhUHjJX5FC3fCddVQ2p1EDgDWwrfMtnkVqQ4qzwiQyL4",
  "key5": "5xnyUr2Xvy6fzGY5CprAivukVXVr6LVzMeifz2cFfEPHqmoavCq1DNPMiPNd4LK2CKJxB6GQrJE3dzY1cWsGjCvW",
  "key6": "3UonsjCZ3GFSY4mFTwKwbCMWqLG1RjYxwDE9EUSL1d9UBsTxYgmpPBC88bstCYhMDiein1CxqtWBfE1LGy5WWMrH",
  "key7": "2LD8KSxDGt1b1Tg9v4niQXfZULSuwxamwBx89DZSg7pXE9tiLwc2kKsvFzCa7dBEZ8mQMR115EP2Jn9eFio6xsbd",
  "key8": "2rWfjJgvYnEXHFK3adY5rMg65wQGyXreaBmkNCuY9iEwA3SuBgenFYFAbSmEpLF7yqXHoqRXLeib6KJimjsu4dVE",
  "key9": "4tVmFYcHaoDyFE2EMZsciUcpg6d5bS52tearnRNs8bTiEhtEL1J2BHePcmqHWKppR38yxDUsnfRHGNiFTfzQ77rj",
  "key10": "NpzvneHAuMXPxV3Akt9ttiBNpPiZP4YP1Z8BwG3avV9JEDytMXSLrcwYEfjQXujbdDCcqaycJi59wJVw6fXDQXb",
  "key11": "58vu3Z3iNVLgMmd8E7EvjCMtFdxsmC1mWKqtuZUBPa3o5C9TwKzVGQcpbdd8oWLqGmi1r8Ek8xB7ch6GbLKY9NWa",
  "key12": "4nPzVgk2Dy8fTrFEix7zFe7SMiNdQL8BB6TeJyYnKD9wkfPPRH7ZQiGfBPHD3JU4NrpCWDoMcH7RNmQgh7RcsLFM",
  "key13": "4agWJbtLjMBzRqEbTh4VwfkqGqCTz4KF6EHU1JgUYCXpv2WYjRDEwLV9HXwmqLUTSvdysRedbxQuXbfd2F89YtTg",
  "key14": "4zsjAcQ2KFNpCGDBHRtybkMdqigkWHxC4bMLfLcKnnAGKjmaCWykQDGBmEoffpzFpCJQwNebc6n8Jn63vUP8wyxa",
  "key15": "5Vo8GkKq4GBvLokQymbvNW9fbfNbq2cFvAYnVzqKPZBBstcpXV2snYf1ythoZaQ1vUMKD3HsxnXhPuttQ1fqW2jM",
  "key16": "54oGQfwskgs8RWsMb9jmiq8q4FXTcZFPjLYjguc6tiAzzjvmJvGiZatc5LB79NMygrss2PR4VJ3EMZ3BPzBWFHC5",
  "key17": "2E7Hjh1P7QDhapTUWdbP8kM4jKqn7UEBCppEjCavAr3hNPUb8j84LycB2Bweot37G9cGeMvsJ4C3FfyF4qZABN8J",
  "key18": "2eMz1RGizxgFNHaJ27Cxh9BdotBCd5ixLos6VFz9X1FyTP4LNEc2PYgXEBcAKqCQjK57EEBEuNg4oW9FVajPkSG",
  "key19": "2iXVM3RyBJ4uX1X3MeC4wYSBdr4qZ7CXjtxUjsM44igeyiCrV9cXfJZcvXP2eHFfsofQDCu32aH5PCWKFSdLKMzb",
  "key20": "rWH3LpsDBaP9jTJnVKnjPHeJxm26xva2YrqEHcnHRNSqxDfG1txHgM53fRbecbi2urTib9zwbrdEphayik4DmDk",
  "key21": "zMomLqCmGMs41m3h6qXsMHbf6YFA1L5xoMAEMr2TKRy9fCSJZNCVajQxQw3qLovZtf4WWYNjjckdLKsUjA1Mbcd",
  "key22": "3BsBCYXFzyUEsgpS9rp1CmXjB9nihWADR5e8KjYbjpb7sR3YVvudzvuNN94k6wQNzWCvjegRXusw5tSCffgpRLPZ",
  "key23": "rsczgqdbtsV8tXxzJ1bGBhrSUEcuP1FkQKJBwq5UrsHdTKdPYc2EEMN1PF5JV1w7ytFf7A6LW355B9dSRw6ghdb",
  "key24": "A8NAwB7bHKXZxj5PQv9evBpHThfBqNCdkxycJEwvbk7vkuMhUtdys4EGa6KDsSv82YxXFq6uTaa1fwYj46316Sg",
  "key25": "4vvssyHyhxdSwYK9ZGZFFPpxuDTJeGiyCT5HcUws6AA47zUuTuYHDvsqpMyMxUD7yHD7VPu7VZaYfAATS6gcNziM",
  "key26": "3YUpM4zhXQEtsFAt5AjHgj7ALThrpxW6FRdeBoV1d2K7JoJLWJRxGBjS98WPtiWjP4dHqq9h15U3ieWaNhrKFgL5",
  "key27": "2b9TzzpZGQgvX3AsJN2MexDnmaQ23qARz1DMGr9LXXRFF85FjwXCLFPoEErtGKW5vrqQTcPdzyZB81DzWLcmLpzi",
  "key28": "2BetUWoVX6MdTgrZYqemKPWQWcka6FNFhh4xyAbizznCtuNSkUJK764KrMCNcTWqAhubQB9AnheDcigCVW2mYeFD",
  "key29": "3Ev6QTuUPrGdfZBFZ22R8pbwes2eCinsEhdg75LmXy4AtibVYuBEkbGefpmqHxWWcd8yAYhfkSZT8FEjcaHptdty",
  "key30": "4YBHamboDCMPLNejtHBy1qhaX9Lgs8T57dg27WHgVjxHgx2T7o85hBbZ1S52AF7dJrTvmrintKyTNg6kxWMKz9UG",
  "key31": "3V6hG9ogdkJTAYVUpvVVqWCmGJCwbMwt9Z2YeGUQCxZyXYMmZ3g2RbWBEzPpbPgvz6UKkwdd1qPzN1F6q2vSqcq7",
  "key32": "QPWu2sJQuERNj8BWRsWjcKPqpigRvufQxBaasKuh6sWEFsyfZKLqCz8AJtKXJuQKBs6jocxPNVPPZYREyU8UJNn",
  "key33": "2woDjFK4v5HBiwvZL12TuL384e4mrLenTbHV2QSRuLmXseqYtMEKeSRrArBz3eRWswiJaUTfWkBtnjkQpaeUUazi",
  "key34": "63VmXFojXocJzbEm2YhHSx5X4YFU5e4P5HNUmLoHMUNwtnifCoqeyh8PBz55Yx5v919VhJuhHRSU8doDswRjZRoX",
  "key35": "5HFfdaww97iwFpkaHNCYzT8H2zhhKcmcEx8XeMxBpFfpW53HT7GtSwdj6ohQVANSEMTs1XGbVrGEpdS6x59ePyVh",
  "key36": "uqAZfcE4t5eyNe1YxhNJUicg4hVYqtNk4pB8qHtSeYuBcRKCg9vN4ofY6we2LS73DquEEHwYrFHT8T1dJoNnZW1",
  "key37": "5Q4uLxjZ4WM2msiruWmzCt8U1HRqbct45p5d1uwM5Jpw51i6tEobo7fuTZzJQRcV4upt9DfdDy7pqoVnFsfQMXBQ",
  "key38": "cyjwXEAmVNovXYmaGmgro44a9RpzS9YuAffHHcU6dR4oYsHZrYayBEgDhnaDn3RwFbUPqqC3tQJ4e4caGe3wUeR",
  "key39": "42GdSCEx5GmS6GEgQZF4MtYzeuf2dgVfKrGjGvaFN1wPE8pepAQk65PXb8TaBr8nzNJKfxobyTQjcsYE3daXRDuD",
  "key40": "2wRkaUgShQkidCqENfun4RXKot8uWJXYKikH3pKNMMxyXaEgoafcd8YGtvdo3m4D4Wg3VLjjh8DDjgnYZVcRvTBM",
  "key41": "27tGqE93MAc833PfAPapzm4BujQ53UfukZvYRpztkoDGoaU3dRvrdqJbyQw21DSDWKXKcJGur1rJYfkQ86HTainj",
  "key42": "443WJWCHb7VvP2bg65CWhRxhfyRJVewwYcqcFh6hwRgMxdsKH65yqDHMpVxpgztL3FumhtS4HUTPFTchLzmev9g7"
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
