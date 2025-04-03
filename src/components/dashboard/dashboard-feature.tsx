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
    "4qoDmmQFqNFvaBRtxFz9zvqeMh45YRqxv9y1SMyvUuGZ5X5AhDCrMPu9Vnx1gh3ocJCPMp1VFeS26pYU46ezbR4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xsnsVr9QDGh1x7jEKXCVBG5eKfQHZUcdeRbAA6kqdCyNRhezZamgpHPqGkC42PMvBYj4SeWw5NzeMeby2cN7tBZ",
  "key1": "4TXbbPnTJoMSon7a5A9W85Po1XPytmqHcSPS6XnwSpurujp9Gx2CCCWQyCorLset6yjmJCSgHq9AWtz4DbsNu9G2",
  "key2": "2CjARtCaqD7ERjNWEg9tKsvLokTD5WUkCEvsYdPJhZSrUp5aGUei6qqrceuWeWDaT5nFhsB5UBbyWtPb248P3ZeU",
  "key3": "NaBFryxt5kKLtqCduWKVmCYAkTSLzGM6ygBt5iNSyzXdNjWTY4rf5HXXGfA5a9hphTuepddxsUthotz91uqtQDn",
  "key4": "2Qra1AympXxS1aVaVtNTu71EpMPisq1Aghwq4tPHr4AJDdjzFKekvRFCLqy5aiQadjBmtsHmWnwafKmdUExATQ2p",
  "key5": "64Bj91voxarSkhiv7H2rE4fuXhhGexwFvewYXYkypcX8Artf3iGrYbhLLe7pULuRipok5rxkT9uGxtDqadM2GuL",
  "key6": "AZCnFb8ujbThwUymGP86TViSvw8MPjPMfWAdnA54Z3x2HAL39U1e63LZA1dftmAzVPcR9ficwee9cXz2aJqcJLU",
  "key7": "2E1kCCGn3PaMet5ZKamn5ifrnLEwZehEZx5bYksQkJz3L66kbzpSVkJhPAU6KtqSk5DY1xrbSGYF8riJ2eexKBZj",
  "key8": "3TcdvpRxLc2RZabHc5PEmh3Q1QHumhrq539CHkJfimmWE618u8XrNuFd9JRRxxZeFtVfdug7tVYR8h4cdqxqdjBo",
  "key9": "3ijJXDf7zTAe3GCUa6TiENDd3eTkjWWxGgHe5VFAD8ZM7ob7PRXxctZsiNANu6byxVvodUfERPWfHjPTWrtxxWdU",
  "key10": "67i3u8ABm2FSUH6hURitEsM29z2FxehHVgZV173ExPUV6KJEmYy5Mqrpho1DLEgBLU4Nki5eVX9roXok3BQtXKdp",
  "key11": "2zx8wZhk1b4pCpqq3awn2UyYQEeBvUfq1YgJTkyVFSTqWbUJwgn4DBMjFvB5c8LYKgXnqvs4tGhm3VaDpxE9JVLM",
  "key12": "5uqQLLPEZZaf8Eqiqq294LWM82vrbWKFMe3ov1B16MpW5X5A7rfddeJEiBEXjggz1pAHHEJNqu48AdiuhMZfitEA",
  "key13": "2fLFdYgEErofD2Lpwt5weXwPjnsAgLfuSN7LzQvmKPVBmScwDFryfrkDp3VkUoByT6wsEt9aXoiYSzNBnkiqvp2h",
  "key14": "4V7AhHFsrnPLWG4hEeVVaZLiXiCnHg8kzTntTESKf5vnPNJbuLddCcQnDn2o4oTMEByMMoz7yLfkzC2btF17ye7u",
  "key15": "5PF2ru4Bk3TzjCGhefbUauxGCn7QbZAaLSHtibkeccYW1f5cs93gu96iH8AYLUSic8F7TjpFEcxjg4NvXGWW2LqC",
  "key16": "3DoM4Dvc2uTtwh4bFHWrmVarqe81Wi7pX9YYUr1pfKU1THzcvt1R3kjkkFKmqBmp82Z7CyRL8xa17mVMjAwJjFBt",
  "key17": "3ZLqsAw3SMbdTf4XxGAMEmtQnFvvqjisBCu6z3eyYsTMXGp9otfhLY5GsGdkcmuqQJ9VQQSqBMhAKi6hFcSDScEM",
  "key18": "2cSv3aRgFALr1AsnRhn56CGTgqyY8pXtMtWsjDXyBp1Mvzr7ETfVKtrarghuogRDYkAHobeC7eg8r4oqbtLFJNz6",
  "key19": "3WyrqpW6NQr6PkUjSoVD99Sh16vkDX8BZwSXsteLQ1Xp3bmirMrgRrajvsJXCtb4V5dLYDcsP9X36SVgZobaB6mP",
  "key20": "1uKMop6rgdNehX6cQ6JY4YVrncE83z1ndTAdnEYfmpaWcdonKcFjDTVQMQt1vqUyu1fzfDWpvXqz1e3sa4LXLdr",
  "key21": "5TBqZGrE1VfPWba3k7X5rXXHiJtS5hsNoxEG9Hx83nmnJL51SMTQWQdMnxbKBL7aAFSvd248nDNzupfribVx33vE",
  "key22": "9s452AHwHFsmY3v5UrxeBHueY192u9vB6enzRB6vW33gK9oLUfHAQ1CzhPohQMFeWYqBwD3Hemz1UmgvJjtexHW",
  "key23": "3PthPKHNxcgpg8f6UxskF9ZmSBKDkSstZ55tUEBwF8xeEvvgv9pxitSWcJop5MChVwgVA1XvRenRfgU9gtzhK8he",
  "key24": "5qVVrG5gqwfHxNiPUqtEip3pxJ4zeL9cNQQaFQxTRB5ogXAZ6gG4mY87Bmqm9ZLzhWDFj3LqAufkvGPbGVqmVKao",
  "key25": "28DJJ5JhqaG7NcT4i9x9jWDZSjCVCFUWW6yUkPhkr4CBH2MgMnaUQ9FvktHK9MBxk71gX5dupdagfeBunjHm9iV5",
  "key26": "62wRMNPg11LQozSyuWLQPaFn7H1tmxhroncwoUDEdTb9ZS6F5GvH6QwVxxxbbJxPtokPdafGNEfT27WedoWAJure",
  "key27": "3wS1bGdmcs1oeD3pGaf2YkX8KAt5EMe86yJrA2wJuDjX7PQymWT3avA6NK1dbpjdBUCBNRra613c187VoW2wAHf4",
  "key28": "4oy8ekgEe5saK4gedW1aCer98cGgzKyaVALgRk54TRQce2Rp3iPUY4bqvy5xk9VUKYjajCb9aCn6w13S5oxct4bQ",
  "key29": "5eTov4yp7VbTXrMK519FVMFFsCmuDvSyXzsrD33H52v9S3wrzZ3H257sE5iEHaGSjWX6uA4fanQoUuu9rbWyHbZS",
  "key30": "5pDWcfVcWcqLdrhEXCyw7YVJnYZxvTyvXJXWCbMqzbaTc17afGAQLKu73CuyuV3KGAesfCZTjZyZH7Y2pMz7PZ4Z"
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
