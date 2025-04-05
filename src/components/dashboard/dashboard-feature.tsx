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
    "TN69TPzFooPbFm1sfFVmP72DiXzjBS3CnMFSRH8NxrE7PnrRvFz3GJjaobi5zZDsiGpRSRAdYpea4AZ5NgRdBbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hLPvz62aVsCkzdFHSEbqNiQEkACieMkhuJpMKDmAhz8DsFWHrVHVWPsoH3PE7CKyAFc2UvmLGGhjLka3WLznthC",
  "key1": "3u76BQq81zrpVT7M3C6JN4K37qgEAKV3gQoc92wZy7SWQji4J4MaTRx7Z4numVHvPD6KxRmUwd98dgkHpif8zTX2",
  "key2": "Eb3DMvedEacsVtfEdxQZ8eHtCByZWdVS1sjtQLtA8SmoTjUznUgfqSPaa63CeJ1pXSNFrgDKLM4BtckFZHkrFdz",
  "key3": "56AUHqsbbgaf8Y9m5ovjNP8ivYYuVfQcbZzNAxCdCxCar5MHDpepLRyCk7zfakdKWKRXKyYVWE86qdbxU43Eb15r",
  "key4": "4uX31jt3PL9TC3gEWmS7urqLVjo6Aur35Hkm3T9gm6aBArnig7E1oqLR9vRuQH8bsYQzPFDKjD2nHEm9Xrq8itxu",
  "key5": "2Nk98M5BEf28ePkLKV62oY8g1AMVNuwGwukoCRBS2qZj9JW5dY43BoKQ2vTicnLExYgYA1dfGoo3p7m9Z3ChLSef",
  "key6": "2fmUX8MtP3oXgtWqDoirkGb4fs4rDxu2zpNE1jhZkkpeJdaFgH5MQ5iuwiEFTZRZtLqatux9qFXopJXdMB1us7fc",
  "key7": "5oygkV2TNdWXQqMzdpX5U2RDjnWjboD2dT9BtidMseRGnzjPhqD769ceJnsyALFkP6MLKRSovEVEz1XH4ZatrD1T",
  "key8": "5mKoQeeSiP1MXJj3v98dkcmgvGnULWg6GkZ8fptLsb8KUZTP3p8NFm8GpSVT4WNa4uwZNNCeXzoXUzB2kX6iqHp8",
  "key9": "5nrypER1g9ie8E2T5b3Mk68XuoRUNaD7z8AdMfFoM5WTUzV1aWvpTDkM1mHDzzsLbFbz7MNxqCq83CHvHygEVH2J",
  "key10": "3yfxyqZXiqtywpvGNMdw73Atn828RFkePBvna5DkyUeksNoKDoBPXJ49rUNV2tXvmTLCkdg95X17wcEXxXRiV6Wx",
  "key11": "61qDHVcM4FqXnkwaQLuG8bnjc5SDkatZVPrLgpGP4g2DEMPAyr9whMu5qUUEsKu8ru6k377SRhgDxayctbJvensW",
  "key12": "5P6cm2tvi2MNvcYShr7YZ4F3EW7GR16tdXcoWsyhLSabHr5Qv2WYnjw7qeDqBnxbSiZi33NagHDT779GfuULbpFk",
  "key13": "XP7YbqcvjBTcBURZWkR8iDv8hUur6ZiB6tisSUVXq9pUKgU4xYgjXe6M1EUqY8k3BkMSsbqRE24EwXSEyH6p4qu",
  "key14": "33S9PRuX1Sgch53tYqoGmTWjzG9H3aDw4GGF1N83KXr4nkT78ZTa2TPZa5pRTVAfKiY6m3k6WSbtgbiX7dCJmqtU",
  "key15": "59nQk7g7CB1Sd9Jasiekxs5Un1g7ZvCuUG5CTvZLZ1GhYLmRWqZbQQCvRxmF68wVRthcmmwHGQUjWt7ivTZdwk5P",
  "key16": "EYKnU7XPLAGphA2TA34jytXtvQWkLmgLzce1DaPh7A1zJDRCKcTnV1Ydh99rXoApgPJRFghBkEMN4vyhVPdMk9A",
  "key17": "cVuSvEMaJiGwYDsypMgb3vizBxpCRiWTVA7WZnt7kc4EmDFJHnfnRUiBHsfQv5HyudvSDqM4gTcZ7eSoC4WGUJS",
  "key18": "5W2APLGzCkuiVMfrREAvNMLsT4jF9L3pc9jCLeryJSWgu8473FVdTdmhoLgc2iRKYtD4Ht2UTa8497x3E9Vp9RRx",
  "key19": "5gJ4bBnrBAT8LCxrJNZ1VqATom41NWbm8UbzjUGYZLehWi5dcayfnsy5c23dMyPxhpX42Y5xPFGX5bythfWADcL6",
  "key20": "BFbxdXDLmDdHsgSgNFfCc5UwT1HA97us2NaJnP2dDiP68brqfADiART3z52BKrBe8t4RxDe1P38j9wiPeKWenWq",
  "key21": "QmfuVMJpXEHXGWCiZ11JuskjP5BZ3wmGBxN6SGULdyZ1HFfnhPjNhjprAfqGNy1rWiiKWAEcVuATS2vHxA7oeQd",
  "key22": "62tbWzFQmTSyVk5aQBsjBAKCws1r3ti3v8j4JumRyFCp1Xbk1VgBJ2LDqGNsiPx7gkSkTNrjj7f7VKpAXHKvyE7L",
  "key23": "578fFSfXLqf2dpUvPStrY4aZQh2Ht3FjVz55rs8xHjr4DZ34DDj8w1Wc3dKEWLGN49fJFtUaaYZbccbfK8W1Atnj",
  "key24": "hg4xPBCHjCDmKVB1SYAS2kE4dERcuFQLFNkrspq3xB66BBKPdxGfuQtraJQCd6PPLMG31rktWjiac4sQ84qC94U",
  "key25": "5qHeYc32jiSbq7yhJGqb5YZsQpx5uk46tCjsqoNtcgxkHfdeLnnNccDSxvyVjELChi4zTDBRovtSbvz72HN41KgZ",
  "key26": "fkrVwtMaaVwGKFn6fUxFUspT1jYfhQ65nk8y4g7v5E23NkwbMcLmigUxdsRkn6wbeb4i75rTVXU3vvrZ77evYxs",
  "key27": "67RDu8ZzWYE6qRHvh225nUcrKdeo5MEp1p6Hsy5Byc2DCqW9gYqddrwzZqpa8v6guPWp98HCSeBQ6e7enSa2UJm7",
  "key28": "NMpeJwZERgdKAgXsLQT2VFVf14dtLZaGkDa6VQkhfmk5iFmbPKZ4p42yByrr4MrP6Dc5PFBEZK7qnMv3Kac9ShU",
  "key29": "4e2ecaWk9LuY5eGfR67VKhEoKxp9QZR4WFhDtLFwkwdC8bYAW6N7f8zyYBUQg4VNWqi2EJDqo13Aj9Dr9RDFh6UP",
  "key30": "4izgh59Ksw37iwNskTPKZrmCw6M1Wt7Laqp9MYxkPjW7TrouvWJgViSjjYo5faQDZW3ZNLt3z6ucNGotTMoJrgz9",
  "key31": "2Fx8rjYmYWpjixoePUNxsgVcEenvYzjnKjFoCZ27QaVgNFzPEDvHuAdjzR7kVBLMaAivYeJcFu6sGqKB6TpSjPPn",
  "key32": "2s9m1yVNpRTJHvX2wuLSNSVQ3WrMjRzR62JxSKwcJ1mpHKWEJg9Thq1m8CXUnLphi2Ex28YynUZHvUTPus7e5gUa",
  "key33": "3oGSHCk27rpwQaCd3aCNXbdaQpUJgn5r45JFsr5TJjpU3v9FUoZH5Er8MPjk697TnXFnuKmGGZpsox5NhJydZrVA",
  "key34": "5dicx61bvvsPXRUAKvvhZYsVS8q5JAtH9zU8S48LwbY1BQ52iLcp5fVK4mLZgUguTBQrzQdEYRQiLrxBRqwzkysV",
  "key35": "2whwjwSQ6iQu21W84Qnwfurg5UjccuHmpoDCTE4gG7nMTr8KPtajAV1c649M1dKWmGaRw7Z6fy1ajzHckNe3JwDG",
  "key36": "53yxaBQuHkLeZdGMzoXREoB8zxfK2eizgyrWxUkNjfWLqSGYyKPS1yRru8BvAsP36kWWfNLMwZUHWHrgr8h2pYcD",
  "key37": "dLAajmta9AvxrWSTnTicb5L9VNTZHk2mVers8jdu5mgK8xuM5Lot1Tqg9Bkhe8VzH9TWtXdRZhRtB4TAM6uDHsw",
  "key38": "4DxN4dZ2CBpN9e4WWKpaesLC3xzDWPycoeCYUGwdfLZ7oVrKSf9BWDkLV4iEYgtqaz4qASskWgHqqhjsgLixAei7",
  "key39": "2zsyzsuTxzyfVEmthwcDuBguYwb8kQuhT4G2sdEzMVhiGtQjWnf5CpPte5x8LL9D9hoDAg4U1tGEKA2FnrBZk4yG",
  "key40": "gKDvB4jHPtVVvyYgyhJhsQ7ovZAfuPkc2cWDhpT4sRnwM14149qe34uzzdc7QjqaYh467zrJK7H916r6GfQsV5P",
  "key41": "2QtmR4fWNWBAMhB6J7FvD4x8xnKnHxSJKKBiDdUBpTU1frzJGDv2YKsSM1YaV9A9SWFt2kTHxwQNc9mtmHuZf5Pz",
  "key42": "2r8N5JSW9QCnMw9k81YWHz7Te61diF2WZPaWE7a4E11tBgi6W1skPoppKWcgQR22t5HYUhXXkFweMqRaxqfJA2mA",
  "key43": "3XqJHSCkomiwsBApT3vAJJJM7ubp27bE5mXo6trvz9pd5aYeMKG9zCEHtgWdazcqYNvd66b8Qh3PsZiBNeZPB2vP",
  "key44": "V3W1GvGt7Y5RsiVdZWZpDiSnk3hVECKvsez2DJEtkcX68H6YfV9Z97GnDcqXNzY7dDuvzWzmwXuxmq2qjHQz9aP",
  "key45": "3U3DBPGngPBmdG5WHNq48bt1B3Q5dSikCzQoaadbnNNooFWR6qyrQPuydgXQKJ7i4bdC3nHKKC4ArwjaxAH1NaMc",
  "key46": "2NDNbChqs2pefTVRcaLbsJH9DRvv1KZNKXAXduTPhpFwm9sZFqaN8hm76fBwPA3tzroTuSohStEFwSAJEfaThtgj"
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
