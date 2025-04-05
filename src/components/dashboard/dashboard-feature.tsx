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
    "ruzEeAbhiGsJWFj3TUvjT8gMwjvZY1m67p3ENQqT4QS5GAXQ2gtzNH9PvDbyZprRLD5deLnCk9WHAZjJ5Yxzn37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29xrdqLNxC32YtXAshRqV6S9u5jjXZfKhBa7b6J2pVJHw3b2uEKsckt2DmEBnbwPAGvpMMyanJMfXL8dPRJYtK3R",
  "key1": "2j7bjaeLS8wvn6KBCehW998z2nPfr7PBNEqV7J5UD59rfGGovwmRF75aRqk6c1Xohfg7XoSSftkyPqtMdzcsYw9N",
  "key2": "GWgeH5fTRaeFe7CYF8zpzsU9dLg9tyfHAPGvxiHfGRGfYLJRbb7LsYCe75XcBRvX6SPAtpWjYLBCoFBd95d32nD",
  "key3": "4z4rh6oYfjULcropSYzv7RrcYJe5E9g7KkPaCaxVyFo51bazT2VuFsyNZsKWcNnFcAz9Xfa9wY1a4Vm99pNcGqj7",
  "key4": "4PYAE5yLyFot9xWwK5kqmubdw59qji6ZTfMq6pi2qmMVhkSKutPmkQvHZQJUzJFuq3HgsJ1oJGUc65zKeUZsrXb1",
  "key5": "3kE1Ef4e9tPd6xn9rR3v67icxF3LKj4MuuYxJ2g438RxidrWFmeKMSSaqkKaL5cuYvzBgB4bBGHeqVgAjCjDHnES",
  "key6": "jDgVjKUBaBJgjMpbKKBNAN1zweWS7k4XZUDCgs1nJ7GhmAUDq6TtC8xZS5c2y5NWMWM861JYqwKDfLFjpXuKWzx",
  "key7": "4JwAZqaqG67xmxouSoZDBKL67q3ngFQhpreLKfHbw3A925ohe7pEk5GgqMqof3DmAR9yvnL3PFw4rHRBMmjgysu7",
  "key8": "4TsooSyv32G1fmV7wQ1YhVjjXkYx9oDySqqHLCx11fX5zF8fhfN8EWVVQ4bL1o8JR5LvdZsNnW7PYxrkNwu4mmft",
  "key9": "2qCfMorukiz9NNxi394Sb1ruRPuxb7W4eSXo23X8yfeW2deTjw3iEshtayeyywwBZ7oN2Li4cPgGqtJRsyQ6uKir",
  "key10": "5K24Vj3S52hqaNYZM9dgMMmCguiA2Y9sYrW495S4ZffDJEpkf9x3gmWWnDRcx61PcaTqfWBpFfp8D2xAumVk9eyE",
  "key11": "4ssNp8Z879M8ZWn4YiMoDDanPqc6wugi6esAD3TJp8QtknoeUrmWgDPMv6W1Apeiemb7WioBUuFfCtDYhHGqn9R1",
  "key12": "2mM8qeNW1mZCx2cdJPWkZabLynPZFZY7fPYsMXu8iyz3rFiXUx8LJuvDfLrfVj81FeqD5VSnsgjMM762gTuxrU6L",
  "key13": "3EviQ5vJgBg4hSJh1UCUjC2MTM6UGYRUa1U7r1Pqh7nSkAsMu1ENxVeuhz8XAwJuBHv4grasiLexPnRg8oWhChV",
  "key14": "3nwUHm5uSbkHKpH8A8SVLYEquABBwSsBfU9bZgYL5T5Hj7ZMGnZtWiN9JSV72b1UkwcQVu21t8C8UTHafCPtcKLx",
  "key15": "2qox3ndq4ddksQGCPBDBCsENy8fXNBWrvskdgYwzx43zLX7AyLfj3zNm22JBSuFRStgAEWnTBK1KbnvyqY3ddUMm",
  "key16": "3UEhYni31R9b4GzJUrwRU8xnJ6KSGr2uhpVgqJoyK9A2yREaXQJ3v14bpLfL28zBXJ5NJpd9m7noSurRnMXedFeU",
  "key17": "H8WsMH9zuBTNtKyG1DRgVHJgeP3326yKFVFXgEP7aH9e7kQEPgUFLuPFFBegpNqxjUWJ37ComYGWmaemQNG5Yz6",
  "key18": "3R8LiPFGjNhBkGie92gmeRaXChNP8DHHZsjN7b829cvHbSZa9V7DosogXqohEuSJjs6Jvan3ZxFJcoiLgTnvBxB8",
  "key19": "4uvJzWkLB5EKsd4kBW9xLaTzAu6csXn44kgZV7E3nfTpHdYnku6jtHmysZoBkccoBRTVrdE3Eix3JvBwAc8ewhvt",
  "key20": "4P85sfZoGYHNKfmfnXdfg3PBdtuHUqrCCtLt6bkgkUfV6HeVnPtBKzELofrNdw5j9RAoKYqigRhoQwy1De5PmYxf",
  "key21": "4Jo8oLfViAdgCq3qWs8JGVD6R46JDxRCj9cJbywFSLPYzScyqccHRknYRGvbMuDit9McTaMCUe9hg6gYoD9KFjkv",
  "key22": "3cdgJraAVVBtLHHN4dVwTKmeTBJAwPNoAXtCxt7eWkP9CdtPUmbPvw6u8HpsfLgtz4ePg52cicncK7EZ3aKKzbiY",
  "key23": "5AmDhVbF7o7gkdXvfjANxaKm8qv1uffgVgcH7LziAAySa9fjWSd5idbLrjYXG9d9KYTUShHaCYuYXUEhwy5Qrztp",
  "key24": "3unTwBd9xugy9NpAAB5U7GCRUJ9xSi5NvzoQxFBxwC51YhZcFN3amA9FnKa2bJ5ftpxEu3DoP75E6PgiThqouhmk",
  "key25": "2CBVSsBJDkPhrd2XNgsaTaJvsUBTNzUb7Ccdb9GV8CoUmi3r3qehfE1JC1dARKs1fPZvn5BWiWyDnptqDUGriPeX",
  "key26": "5AY5vf4gtc2ZyMj4kDU9beJWaGyjD5UFbZUz3Sx26Fy523mv3SUkqdhdo6juXW3srUpf23y47FuNqr8itDA4Re3H",
  "key27": "nRSGxt1y5WN3sVJ9yTvMK7TVFC1rRMgYcDyS9DzwDWQ3EQDtPTjRxbxEWzNREnUob8Bm7Jn7tr3Z8GQEnawuHyy",
  "key28": "yaFKeUZvNGLTbVq58yFdWgFWU5QTbJyHyZR2Pu89HdvWfUfurH3gHYHc2b37vsxfrcdQrw8Rvi9QMnCLGGhCe5F",
  "key29": "2YvaGPiPfuWcHCH5Pb29916pbPSnVxozU9MP4XzPJc3T4RPhqD3YZismC5teSMp6GX7D6mboTs9zuJ9wmT1b1DL6",
  "key30": "59rYSG7vLktiaiNvkqA8zGuWEC3kzvgA5myFyQhHcy7rjGgCPTnSRxYRwHgTSgytyR1iDdnHWV3nuLyAsRZjebNx",
  "key31": "3BTfNzhkJsBw5FWt1pAZBmm556NdsrJdbrBeCyDsFRqpqXRc9WcMurD592fiZt5o7sTwu9fK9rVjZcrXgxsbFN4d",
  "key32": "2UCUpzoRMfKHgsjWhkcudyjkhAwekkXwazEkGxF7oXHGwztfxPArSoyBFC1uQ7TGQ1vtFNyGVHWKy8dpKbyLnREp",
  "key33": "2Kwy8ywUfwo68QDrymQS6KVA1g2DHWSnfKxpotYRkDfWJPmUyafoZ7iSPgGPe5i2rCSfHLZLBLikfNJGwNbBBhxZ",
  "key34": "2vmeGcvK2wDLNgihapbfbAQo67egBePVmaWECTUzr4rxPsAxWwKx5sE1vgozFmBrGLys7GpmyvMqADKJwJa94k95",
  "key35": "3gvjJf2v38CMemRsFWGdgsXa23CHtUnwwoEvDcPjowzDMJc9jitAsPuzrGaKdkjLL7CB6ReP1RMkGhFmcFuimQeo",
  "key36": "2BFMqoSbrctKdwVCPF3HZ5No5V6vBn7BBg6RnLQTVPcmqV5EACjhgM5mAdYSvjMooc4jDdoyLx37k1qPBVxkaHd3",
  "key37": "5keKvE733YQXfja3uV4YSndPYxyY4ZHaTtTBSgsPvcjaqXjq3EyuU6VNQ6ikbVvwij8SSaT4vCgYbsztHkgjgdsU",
  "key38": "46SAH8XCihb7cVGqZFQtg2yRCosYQ7aE7asS1t58XaZVtudcy13xe2qcKQ5s32wVyUsf8rLymCSK6aFHJkEvxqNo",
  "key39": "3Pp2EPSC4BpUHEnwSzuCDXHpUnbkTNduiiTfyWPJZUW4imh5Jx9dymrbkSteDnWU6UtxWd64YrXvehvgs8fQKjZ6",
  "key40": "5kJAo7Fpyzbz4nXH66zebwbvcuMBXorWuGznA18s9bgEBxvzrcBqfqFRtrEusTBArwjQcLmZfq5V2LyTXHgoBNJA",
  "key41": "4vCTAjGYG7H18Sy69GaGmjBKmKLmGnLB33WRSAYwsCFGZu2ymGpHq9YgqgFLYbXs6k8TdNaF24G3oeQcKHoeA4ay",
  "key42": "YWd8PJuwmcKdgPaAYw1xDLZ32HTDAVEG3k1vcLQS3JE8yBZmwLZtzqMsNwo7mB8gHrk3CRLDCxVrMa6w5oFHn99",
  "key43": "5mwjDh5hTEctJM8kHS3xJbaWJuoKK2L7A6x5fHLHZr52cwCsKYorBVahUce6kom1k24bmtWEVWLAcRWab3g5qfCF",
  "key44": "5nuoTxBtHujJQM4iKFdNARrmXPrdBH7memVtCwLVotmU6NMyvBk2ZwwVqaoKYmikLqjqJmaaoUhbxkYnWsDHT5sc",
  "key45": "3jKw7hwMbKhNgrBQqy5DQntwneZzkNfZMT1E2iMjJrixpknz7unxxAAiQhZATvBzZqKhzWhKbt5b4qwkMyuAuvEb",
  "key46": "5yvHH6T8nLVVzzLB8jyXcvbaPwET6vkGfPQQWMg4rPur7wwU63BQMWycChvMr6xWZPpsidHGZeTaGr3wuVZYgFv2",
  "key47": "eM95e7QyEcBwfrSkZV97udvoauytcCnvZGnmt63hBYHfuXMxYJWXhUHQNXa7ZvuznEq8LtCiVSNp8nF48wJQ7tv",
  "key48": "Pa1EQdDLpeW3zNfmrv5QCuwLFnzpW1R3UyME7oTnkRAfBWhD9uJ3kzZEHiPpMZTfwB1D9ZEviLV2aX621ry4Rmm"
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
