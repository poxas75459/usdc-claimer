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
    "3QDp5n2jSTAnDv8gu3FSuqHjSsTS7LRyis6wnAVHdLasy6b27BfTDqCac3n6YTSkE7SzcmREmQqqA78CeeLLfdSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SWoTnPaTfVP7gzTzh7K2V67T7Wfr9x6BH551Zzi1JQfg1NhmPDKJPoyzSH546qSoFyQMbUVormYZAqub8ibNdVa",
  "key1": "2DwSUKLWS5bAHLiyFpaVwu8GepGoz5gFhJSRv6XJHw2QUAQDLxCACNrZkEm9EzGvaavj63XvVnNm4sb2yVBbUkR5",
  "key2": "4C74yhN6JRFqD4fPP1cYLtcAMsRPEaCK4oi3Honu4KrNoCLcZa8GGrDAcnizBx9nrYDh7T21addDK6awBnHs3NeP",
  "key3": "ED6tTEeXq91GJpJV3ZnYTrbqKcqBtScWdHQKMzhcwAzvgrjvwqaAKuxK8QxaUJ7MDaSnWpEWx7JEHDh67CEuU3Y",
  "key4": "4WyFfKbEg5y4hTbKSmBrEj6V1PqJKj6oWhQ7WnYAJGDXT9zV8tJ8NS1TY2XKfDgg11UwiyKqpgkPzM2zZhKxD2xD",
  "key5": "4op52GrML71N48RRHoCG6wKwQXGSTsQFYiJZp5tDE1zRMYHrd65FzxKWknSsCJdg6LRF9FQJxdLR7NxpCxfJTwM",
  "key6": "4ta1bwzh81QK3bmKSto8uQ6R5kwxkDY9iA7yLCxBj8fbYK4Vz7d8nyrYvwLwtWueXhp2E7qBPtNoxGpxrAq5uY37",
  "key7": "32wye5ehP98JwfRptLspMB2PboE6rfj1gEeAqxX3VhsMATAGS6dynsR18PmE4J81vy3uCDMMRhL1LvVq8nJpGhrd",
  "key8": "61qSU2cWsaih7CW7QoWqxBdjo6GECRfx3hqA1xaERPuD2A3YWd2XA8EszCpBpjm5mvJK6Cszdrd7tPHb5U85x92K",
  "key9": "4E94xJg7HpN7qz6PBdxFaxPUTkzsoJAWEa8upgA9gNJgzPipxxC18uZV9HEEPM6x5fiGFqQN3nf5iCUjGXJgHqAq",
  "key10": "43Q7tJaVXFsnvgNzfmoKKS4MXpjFBAs3CKfeeFeit9J1sUkEQumtc1bVxYQUhai8iMADwjbUcVqRmcmYtQ1BXp26",
  "key11": "3cLqEsJ2WnmJsasv8BHweRKSVvRwmjY3G5ngAAPzitMChRArG2n5EsRhCqJzsbvmft3MxZPYzRfhUxHio2rwhuET",
  "key12": "P4ef7P5Bv8GZq3ySJkh9rfUmKHzxZkCjhoVuV75jruNjdthnNYJSDjsae2AwMGWPdr2CPGyxetnfQKkNJq3wtip",
  "key13": "36SeXCKmfymcsJ6AczXWVGL9XaWeHBcm5RCgLZMYNxUsN6dJxBJtQ2NhJkoMPsuoedtQgV5cVat2YhPsvRAwXQAf",
  "key14": "5bEXHCnmpCsCEzMMQYMKs6JKYPsKpzCts3VSKgyUzMjiYzD6tyQRm9ngAF48ykvfAXn3cw9fKB7QUGWJdQZqzLQT",
  "key15": "nLqBp6CBJYsTvo5zVNFLvy9ACL3FVFDVd73kUM3AoZ5NRQnXW4PJBtj6fCT8W3wS3GXroL1bM6qKMnWin1TxECn",
  "key16": "xYrNusy6ThAKWASk1pGnae96tFJDCGvXbywKkmo2sURfWFNRPBeW7nRQ4d9GEpkKDEBtjvaipWWksFWE3e6k5cT",
  "key17": "5TMKoRKegSmP7NFh9ZbPTzjYzHT1JKPcta16cmdpPdXs4FmnqNcAy4N5pD4oGrqKV7zwRq1Qv1ZRiwexaazHwMsW",
  "key18": "3qcSFAD6C9ySD16r54Z2cx8SnoUi2Whs7brVp1K1HvgSL9Y2hA9ZW8mK9sK1fNzMLKCvoo2Sg3ZnmMHvDwi3TuBq",
  "key19": "4csLaF4McCSLfeWohQm3ueaFg2tjVaXzKFYu1HZ9t3Z8CUGq8Memgqsb7Hu8qNSmrEJMDWEPKJxKeYG8xxgC6hDw",
  "key20": "65X8A55kJDeKRyhy8VtaBBrYtu8qHXczp726yS5b3MCtp6y7F7Xeb6RDzgDTctrgb3Chvb9ds2q9YWKyagV1ztvx",
  "key21": "25XAq1ebwcxMDjeUDiBUCYA9rV19pEQbXANUY5C2CjuBscA8UHKE6DUbvSTfPBHjBBqrQHCGDJDzZFEkE1mQtShN",
  "key22": "4fDJHQPJTiV7vKtMVBHAU8uMH1XcF5J6kRYfJzi6M9tWF26CcFYNdogR42WAPf2pZeY9FZfB59eKpJCA4Gu8bRLK",
  "key23": "2iDb95Xkcn5pGdvohHURaL6dZoPBnC5nowaPzLexCf9hq2ePMfZHy7rXNy8ftacqymTGuYEBfARmVUFctdY6Mpbj",
  "key24": "3HPR253RW9aurYcwqmMRNUYDCoqu5Tv7TahrEjQ44d7AfCiMkCvHrdZz8oqtop4uo1mYD9R1abiyg8EZhLffD26Z",
  "key25": "5avFfcVpxcLKr3LuMEW71w37PLTGYpw9G1sfkQfM5YEGtnrUMVWJZuZTpVqBuh4GtguUcZeVK2nnnfY27vLu9Vuw",
  "key26": "4qXktYg55uJcdfsD3c6iYdF1Xfupf5AV4hzh2ZYoEgZmPUMYYCwoE2kS7YTnFkTR5r863UpeuV9SVh2giHekGX76",
  "key27": "iFL6uE2D7LeuZNJstU8bktoeem5eNYRt2yQeFij5E6SrE6SPEJ9kZEZcduE9x7RpTFzuvwK5mAXcHyPNaYf5AKm",
  "key28": "DkSQKPVDGhKubkhgivcpxnW15Hnkg6Zm3QGjejFUvEpbz3Bw38VWkvfof6DoJQm9QJaxBTJQdG5jPXKaFtsCv2Z",
  "key29": "3TumaoHu7Y3zMfTTJwqJHVtiLijDzLyKVb4qdsHBJU4Sux9JuQLNy4GGRX3NHA6jWsUsdpXv2PbnxfBDHPGTKbwj",
  "key30": "35Uk3aPGgi4oFxhgWsu4FrcX6rBU9j5zJCVSBhNRdYG2B3hasvC7hFVKTkodM5L1CrbT7BjGwTcnTVMdTJZTuHpQ",
  "key31": "4ZL6Jv6e83G2Yb13cc1Gez6yi6eKMt6R1Xey22Q8pSahM7kxQbFRacsEofdjKrmMRctqpixWYKDdjoY4w8C2Juz3",
  "key32": "2mgxUwh94QJuqiQKvqBoapjFyQCETpkZHUCdjL1w2DHA1mJ1bvEVomrNUK7DfFnnwrG4LLFAjDMo6QYYhHbbVou4",
  "key33": "4be2wTAq4eumAG7PzYV4ZnLS4YWGvWZaWM6m86KBSu9aLtkh2bUKJAx5L8VG3vBzph4b6GNTyu6HP388z4gFBZa8",
  "key34": "59ToGyrXDyB75NQPgitjBxCqqPWtCuM3aTAhcaJ9bsE3msvHHivfv6hjB28REKnEwPraAC2tSP2bxJrZFCYTy5jd",
  "key35": "3TfvMuRJQAVgLLN6WwTLytF2hvNS7LZzeWEYZJME86xVHZvey6vBdCzaDrXh8Q7WwCHFda9sAHfWfgLbKi1wxzzf",
  "key36": "3G2oPwmoQ7ReHoXNJuTVaGd1H3WE8m3Hua4paNvKNM8nc78v2LL8Q5tUYUxbXAbRguSx13xSGdK95rLbPxvpsok4"
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
