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
    "28rDw5tTmhmiVvaz5q1WqoQVr9KDzhRdVKP9snah3pbeXeJVE6KhFpCEkNQaa8qZhoZcD7g8epGnu7VX44w857Qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cyLuqYZ3mbCUfwuaMDBVhRuzxvRvvcbv8xdiRTQ1cEhMYfzFzA9hiXUF6VUr9rYvYmzorJM64caSQPnsf2t4B88",
  "key1": "3rkv9kFLMUwbrPh2xvkuxttuGwqHvF4PZ6sPRvWQhjqP7zTmrvj2UT6GeBbj15vbqnJj7Frcbh8T9LG9aaWBHgiD",
  "key2": "4t3T7GVBwqpFEBd69ht5qwBUnABGdpBBVxK7RjWwCMvpLrAgBmWuod74gbi7cdbxaNUmS2wGS7NTF9JRsehRygYA",
  "key3": "5RgKPkfVGQUDKtszMMVgDkRW5uEdDufpTkZSMg89fSRkmbRjkF8LYxymWUZKaxtfziTTLNB8GLjrKhH7x51WQHLh",
  "key4": "fLr6eVES7ZuDUAewPLgDNVkLWxuyCMp8ig6yrfZFjiqRgipaMGWyKnkDYY66QBGw6RkcgRXvwczDfA9aFwjgrao",
  "key5": "122pnpQjcKeGzFi5DrNySfHdZdbeHUpz1ncCjqf1bo9mXQfG2dxVBWFu71wT6g9ovWik6VHs4cQrLxxXHoTwWp26",
  "key6": "5PuUzusezpY8jscn8Xja51YUjmPQvBKKE6D71wiURCYjdjTbmRk76dDHZU4n69UESzzspyNHniCtziuj3vtxikA8",
  "key7": "654GeYfG1JWgHhGsLBwKT7vwn7snByK4RFt5f4hQEkUvw9odxTBioV2kh6FEokGNbVXQN2HNUaT3dCZ5VLbcbdbu",
  "key8": "52gf7E1CdifU4Xsz4GfsobH9VxZLGbLuMiVwsREdpK84gC3gjJSsKodj5JiGsZzfjD8Fjuh6PcAFNSu3qoHhBaoK",
  "key9": "5UZR1Ujtib63ybw519CucFKEJaRZApPkhCuiak5MbcWJAspzBQX4TW6oviAu4UtkyxR1DVFHQixHiNxgieAiBW5n",
  "key10": "5JGbjJZLfdbo5LZGSfEpBMcAvCFp4fVurHYmSvFvPaLAwkRg39btsfdABPVyoFQ18kA9B4QWScX7cj67nvN5V5E",
  "key11": "SDeyEaRhs12iXcbSh4mb3xgSYRHXPgRtympUoBMxZHf3nZQm5VN2skRjqkYwgtQCQ5t4CMgiTujo2LRRe6B8h2U",
  "key12": "5tAA1YDw9GiQyMkirqQ4zhoJD55uXrEXS9qsGepz1JKUUiu38tSM1DngiybuXQ1pQG8RQpFxLQhKb1nXbAAmCc9s",
  "key13": "2X61Csk1D432v5FpSFHs4agjCJe7sYva5DPkLNgfoQ1Y485MH7iGqPxBvYKkFMzqpfSwQpuCFaYZ6MaTM16561sM",
  "key14": "369siqxg8qxMbG83hM6x9zmimp1Xxt4Ujs6FCFMo4Ng4icwsy7eyT56dZ4BkFnGJhXUypY6SQXMxXzsvqMVKt7MB",
  "key15": "3eH2GsLAP5qa87F8p8mM3R4P75nHEgSY2GikxX6MwPFbZpB9jjn6LCGcyiRg6h21TCbmY5Mw76ghw4i8aCFH9vjv",
  "key16": "RzBA48DUGtBqN7CBTRqwxpnQhGfpPydn1cXHPk3XUGKn7EE72HsZWUg9pzA2ZWTY1xVDQDUS9eSqf8AZ8XM7Au7",
  "key17": "v2QyHioU3AwQoaBWYtHwUZWerwjyg4NkPKoNcKTEqRjHnvaZtU9nrpinwFyPUby4wU5uN4V4dZBc25iAEzFDKDb",
  "key18": "4pHqTBkHjGzUCbKvsaGvaFaTsnzmEsoDXLn4guEtcjTtijo3jDa1dkW5RSY9hZxC9Rayj6etKHXZHMoisWQZzMx4",
  "key19": "5cWHWhwe4eKKVqxaQuRisYKF6KRw2DB5vSpXxr5EiT6aRdj55eacX4zHp7mY8NLBoktD9Pi4WjLRm9VJHpjJbVA9",
  "key20": "qc938d1UrVWjVeLwRsaGmFpJihq1XRZBRZ1yjJ74xjG6wkC9JrrRJpq4zziUtvTU1NvJWzKGpMiHimBMYifvtNK",
  "key21": "4M6uSbQwCgB1SHdcJ9NkTjyfRcbPKsLWxpkFBGW2mLBNrcuQdyY3qwxndYxS1UHZtczMAx26ZnCWHYaftaPnQqLu",
  "key22": "4DP2HKYKEEUnmtqfgnCL4NupsmzrMcsRRsVQrf6ENdSPz1MMvHXgqyuQoqy4xTQwgnakAEhEWisRjf4WrxK2PsCa",
  "key23": "3ofoFTiCbWVNPKa717DEqScM9u6jHJ5LV3UQLPFSda38FpCxQeimBCWqktQYpUUZi43EdbvKV1yHMGLz36snTw1H",
  "key24": "3a1xXHfLXEjNeWBsGT9M3K9CTM3o5t9od3fgsR467cnVbnpmRobXg2Gnye1AiyeH4Q4gxS5Wn1TGkk3HZLXJdyHU",
  "key25": "2GmEXgdV2Xw2NYiNfqjiURVczQwsep2PyQba84Vr1pggpkzFx8LFSUFMKwrwEhbbvuuG5rHa9tQz3wnYc7WRXZ79",
  "key26": "4zVUCCYnkgyH6cFciCmyEWtV334Kxy1Z4cPidpQG79xYFqbmDJAzWBX6tbdeC3HJKCRCt6VtyuYimiddKmfk9vyX",
  "key27": "2g5BZ8agzxRGgjipsTQnEgDuDgXqqSyKK2wbB5MFP3a7SRBxX3AFcuqzKDqQQq741d9onxmGE55hLQR7Q3rGybgi",
  "key28": "61Qrz6J2esqpGLpfM89WJNtmmLMSmoTSRhWxcgS7Y69au9xhncezEcjCEnwNisJSb3pX8j31mFT59j66nkya7Le",
  "key29": "4xfgZAAPaMWtfdHNkwhAj7EagChTJeDK1KTddTt2vtfKkgMkD9bvnw5VEGAhUmdiDT24YEh2hTzxdo1KiNaozXnL",
  "key30": "2n6Ko21KrKLHRXRcS2tDzeaNj2UMzHF1VkfFLNiAkoM1Ycuyy2neinpcq2ezbp67Yajg1aK9eYFKLiDdW1SEVsvF",
  "key31": "2L6cRfEq3W8BXb7L4BWSn9nw2u6ADm9zo6kWVUmLL1DKbUe3kdX8dBwQE1hjhVptHL1dRAAuL6W42GvYFroJTJ5C",
  "key32": "45JL6cZ3htTjrvhs7RpehHuv6GxCxeQgMFR65BFD7tkKBvJYMiCsE3kfm6fct3wwjiaWnvrezCbLc5qAao2DdFfg",
  "key33": "41HdNmxWQ38Cf342Spm174i38Fe5o7GgdmYpGMaHsVtNzonq791Vg4f2sS5HY2iYNeSkaT6pMDU2LKLHALj2Ayvj",
  "key34": "4WRmm3rJ1fe2uimgV29wxx17nwrkrseVfRCNo7FazKf8nVEFUGgKJpbbDnouiD3Dudn5G6S47uAjGA9vjQwVy7F4",
  "key35": "3dzNUTaW5aNDs3UvqyvVd4Voic5gA9WHgVZ7e8Vo1XMtxj9QM5yfV2DDa9EiAaCw3wLFH43N6ad4zvSaYHoqWkZL",
  "key36": "Mryu3fsZCpUDifqYQriR4LJgohNMGSuthC1Ns3umjKFkFxKV2LgLSQF9ErBUSeEUfQ4FjqzWFogA9LpxscgwLdR",
  "key37": "5JVAUYiWSk5ZRsLYhf1e9dstrDkxm5XtZ1kkZt2KSGvLrqKcqjXSwbRYjbz8qr8mfUFuuQzmBvSVuS3jzv4izxd4",
  "key38": "WTaVbcjKN3bpcFN4JuwCK7hqiXv5rCtoLxFLffqofdWTmXyrJo6GLEop3FTgJTdTtoep6G4Huw6GVF7mutjKBu9",
  "key39": "4Pkz3SKJYe4QrtWrZaGZjyaQ1wyC5oMvturtT7cwUx2VCfwcLLDJcfu51ANdqjgU8fNdsut2MmNXiWmh7VzBxurb",
  "key40": "UjqRoYkSneSMFmfaHejoWubeiVsqVoY2EQVQpZzBWCmV5h1Smp2thbfWzCcrwJGfHJ33eiV64aoBJeoSt5yvS77",
  "key41": "3aH5ovd1rkyg87L1QfrvziYhEjBg2FQRkTpVA3EMPSy9coorzjw4DgqMcUNcDHWL5raXbViXwuHERgLLxLwRUvih",
  "key42": "5bM8LZnGhQNu3i927G8qCH1icKPgR19CmViX6yX14HdbJf6xwsr8tA3fs4RxRMA7FF1y4Zk5qYqjM9wqMo5TcMJg"
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
