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
    "2CWP1AEaSgRbBNNqNd1MCTf28sWszcLojwoSmcFVaqpWKwNrsAkQ1ptgiZDMbMocYsVWXMToP3jc6tLTJz4rLLpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UyzMMdwVtjeitxbCu8dZoHLyR33e8xoeAHA4TsMZSp21vRnUzXSbBcex9K5WYCfjmiiW9JB6Wc2h4YH8AFvD5YB",
  "key1": "3AGcQiJjiiMJmNCB4wXVe3pWNgXnTAJ9Uj2Bf4fZXh79PpG2Rpowk81r4CKtfERaPgimfuPJVHytgQ9NnTsZH9px",
  "key2": "49Y9xg2MJN47iM1XxyVoPt9E7HSx97hmdGseakno1xoPztTigKcsh2nc6j4fRUVEdNvyg6ziApGwoeacyGGxaeWg",
  "key3": "R4XrZwUgQpUzR9uiJ3dca9zP59mwAYHJCNHd7zXs9RJSrDjF4FWpvkun2FaL4vh1pnfbPtsE8Y9KqQkahCHX2xb",
  "key4": "5JHQ1A3pQ7FWBBTFGt58yjWyouMJfWazN7J3jTZm5faP9xJYW5FGikqfZqDKdeSopPEB7M64U68kurcmXRTdwQSt",
  "key5": "4XxvaR2gjEUAKKzTcRB85kWxFTkQH4zyqbYg4yBkVe1KN72fKmDvjPKHJni6B1Xsntfphoc4Xgom3Gi978BbRJAC",
  "key6": "5uYDaNr7y42amCDWbukYCPHLbhibebuquKapBS3QVx2zwddVzKZgcqy2oE7nwnSrM3mYt5mD9YuU66Z122ETPdvz",
  "key7": "56AwkfpVcc3JCLruRdvBcUq8SqG6rRgNj29eMM7wQSxBDFPXjxoh1ut4wPjSArTHZ5AHW2yUKqZCy8UttJZsDkAL",
  "key8": "3a6dHP25AsXm11HcwSXrZj6voAff3CpDSvGUHqRoUkaVYRj3Fq1UBDcuHLwxctqJkpQrxYuTnJcw63MbDRfS9ty4",
  "key9": "4AFRbmbo1dzj7RGxH4b997g2HJJC7ndehBSrN936JTNtrVfDSDaiJvtwKH9GRjPW8JrSwVGHUBXWek1UZVwhSn6m",
  "key10": "3wERsZSbXsj9dKaeKc3ZcHuJMLE2KQo7yqBx4Yje4SDyXnr8VbtTW9bsQsJFV3s9pYdxU8uaEXyxYNy54ErWftDx",
  "key11": "3VKFSWStB45LNT35oKYYz2oUQ5bGgbpzhodieHE2Dte4n8Z1urYqyqMSZeipDvgdfaoTAtqjCWRioAAyhobaBHhH",
  "key12": "r8mjzMAPKmY4sNbbrCZ7SF5PJEzXeqZC3xUXYdWPjewHZpi2Bsxma25W895XmEcph35ZvcMf3exwJHhtgd6KiJo",
  "key13": "3pCMQVvUKpBYumdf7CmVEpyaJHRHWNtMcdAz1iBLSDLFp4rkr3dVerxySwadTt6KSU4dAjjFn1is2aCihpYYZLqF",
  "key14": "35kyBu1WC5yZoN72BHmXtJANqZFsRiHj1EKuBn6iqrRXSehpnDY8Lb1fmrXTHMfyvkGNMPG7vi33m7a6b1szvhbK",
  "key15": "Kn3WC4sg1Y6cChnm8akq8yRDjyNggkGuDSyuZTj78b9jrK3Y8wgJxDzyZRNmrjjYvdsg7wN2UAg4gUYhVSMAwyh",
  "key16": "4S4RvbLnZvovrjQrDMGZSj9FJnwwGxQk8LbieN4bNgJACXYS3Q6Xgqdpjqd4NFi37RWTHmQhurefRjehG22FaSsH",
  "key17": "48UB8iQwZyQbbesZ4ZgZ8mgvFKmH3QxW4QRZpwahYoBkpUUAHHw9H4SegRkUkgCpt3TCyyrbWDsYeVUwmJexkEe4",
  "key18": "3dNKRpz1AQd5MDNawpTK3bLpGNas1Hx2J6coR2ALRkz7XEzLcFFr2bSeei9CB2hreqf4fboBA8kMjnDqs9gJsBgQ",
  "key19": "65XuoXgkictE5bEvNyUKUe56E9JHo7yZUqV7Hu964qNSEA5wbMi7acioa9BWso7rvcpYfunudXQEo2fK8hsDSoZm",
  "key20": "5PViLYJkAZsAHsa9Q7znvASEQHBhofTnLDXNK3vnxekDwz58NiB9ZsCkSYg9geWjafS2DXoAxGgd5MDKixscqBhe",
  "key21": "3CugtJBHeH8R8tKmEVXczZ6axBFqCrQwN3Z6sMuid88Wrm8ZEiKRRuCFQVnsUHxGUApjWEGcD9xQbfrYumoSdbBr",
  "key22": "3cFcgoGnFkGaZrAjUrqBdxbc7DQHYjNScE6RqkNTo9GReJ6g1VLMw5RFrxWmX697sZjQaWbdALUNRHmL9629DSzv",
  "key23": "3iKFQZPVt1mLRDdSMLFQAfRuFDMjrrTLjaoxnEj41V3xyfqKgqfjhcEh2EHUdQR9zNy66K4jYuYX7G97dCJuZNmf",
  "key24": "2EZdzytXZCXvHTdJx7YBPyXVZzmNvp32N9EqZNEzpLpXJ9xq436uT8FgHbGKsFcmzqucaRsCNaufQD6N198DKYKN",
  "key25": "2E6ZsJgmeFbhaKdkp4FszwbqgTM7i8kUq6zaEDshjpMSwGDBY77KGVbQuVDt4ra9eT7Yc4ya7c8UkhtiTiLxqj8o",
  "key26": "3wdovNFTYrVuYQGcekMqJpWpZs57Jw1osH6UNhc7Ci7YzQ2NP7k2KRkvjR4uyQdqqTzqF1YkpXCN35p5e21i7HDF",
  "key27": "rGP4CSgcVQ4qoLRonrJV3Lo8uUpAeyNXcYc1U2aa7qoiw1SMVSYo4n1uPXVxBNcxJ2TcU9H9zsd9kmSv9AaZFxF",
  "key28": "RBCaKQYzJgvGJiau7KGBRKb3ChMrkMJmXGQxk1JXgUuSsMRN8zQWLk1m9PdRR48VKPSqsEsM7qYZgYwqW8umNPk",
  "key29": "3fATXsHRFQjRpCg3jDzLA3fGeXbAYVStQw9R4swkzhZm8yNFUckdSjC53dQDVj6aiq7obkWL942W7vCAYHDrSPAb",
  "key30": "4tRKFHAmbeVz92BmLSkJWymMkzr7qZT9XApTvBZjTHABF8KkeL3QMg6Pv4Ahefzj37zm2oS6bcskwwUep9sUutmf"
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
