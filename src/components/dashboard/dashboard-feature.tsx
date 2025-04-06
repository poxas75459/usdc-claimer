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
    "2Qzx1Dezu51vMFjKGEuq5NxttV15iPUhb7MzRBH47iURqUFJZmmGYqtSzKd5Mbfcs3FWHCJczhKMhjg5PJmf88z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S2rtfsNcyoiHytZRwNjMCCK9vTAJgG5vMk1kRatmMHLe7NY9iPQ6rxwGSM4tE5VinXx2oQppKPDZzgZmFXL898",
  "key1": "4nof15rYW8rhNJ3AScLPkwY9z29mkmqUnJfG1j4CGg1sDmgKpbBGELWGwrqysQcNhAJDKi5Y5tzbQ3EYZ5woPRWC",
  "key2": "ZM2mbFbiZYE2RdaCLh5rbg3aGTfWxFfYtw9yFK5uzZ7nQLLK27yYUgsYP2ALWMbpHKHQQ8CLAGa6S1WAaRd2dJC",
  "key3": "4EkJp3mVFes584PbEbzvLMKxX7ZaXS9eu4MuR8BQRiCipv7pQP3QnnwZyxGquaEudUHSc1kCHtQxYuV5sCL2Bj9z",
  "key4": "3PDPVoR4ugET2Vj6zzkH2Vj114G54bsKYu1d7S8MxsXNwbUyJoFArU5mDqcJsd7qq671MkVWeQ6osurfcWUHodJp",
  "key5": "4i9YPtDxNe9RAkqhEYHRQ4xvQVSfqAKBcwDFZjgvjnNCm1frrKxLmcFa63EkzmBMt9JnA3HpfMagaR2o25XyiyH5",
  "key6": "5cPzDywnrdGY6TaybC4GjhvN2aSgMpqthEWHFeNEQazKo2DY4dKDTkZsSEXqTG8DH2myzQY152i2vsvKFqf3GC7h",
  "key7": "5w17N7Rv3xUQkd1LhRcnPVg6auvZnhD9vofvbHboSNfezTxsN87h1dtfPnepX2BvLQWFYZF1LGASeZFwbfAtfHjo",
  "key8": "5QqQe75276Sb6La5zFTwNrszCqS2aoe6yFaTxVcUaL9WzHY7EQYBFv7KWcwS6FHXaSbJNNrCR1TFUYjtmNokig5x",
  "key9": "2tBtd3YhkLCZxvPeHp6pHBaAXyKyAQTaxS9eCqiTpzMLkZPyiFVEYKiTBJmFqBuAJ5QYXCCkQ6bii3h4vgEGZaiG",
  "key10": "616boLyuhoP8H5u82HVgfMz3DNbXRe679ra4RVvK7qUSQwDKjJiLC2Wub26twCVxck8aTxQUYbQbrfcNYSjmanu1",
  "key11": "5XSG8oUA5BTC3vyEjdGwNZtgKWtMBcSHdKtbEsW48D8AFmkrau5a9bq8n2F77qmxafbr9kbZKbzvgJG3nidz7XED",
  "key12": "5hqjYdKnN6p3MoesQGp7SRrRH8HtLmGTNJbTEZMRgx9i2bNqP1Eh8UwxG51MNnKHhxpbyX4MrrxCg1ssfVDhhK3w",
  "key13": "5ZxZvYNJBNLsWKLRzz938tNDLJ3dMpdH7qCvy9MGWbdPAmmucJWsrQrGYVs2CAUFTfbK4vmCfVa1w7vNqz94CQAx",
  "key14": "5S8RxXjGSEpgQw7KtTqKsv79F94mQXT2MaKW5xbups4pQCYAm9vog9f3SkifA3LNrMKjRR4gvk24k7xu7a6PYE8G",
  "key15": "4BH2jsTDgkxkjZtMRyz23Mev8WzaX2Rp393yPTCJeebvZuLLs6wNqd3kUhJLDXVNv4Tap76ugm9LXWJTz6FLnk4c",
  "key16": "3c3Wx2JQbA9w295eB7pQamwPeraBZphsruLKHDsU2yyPgK5o4thApCEtmGNBdBTxfviW1vadAWoy9xjAYzzwL7rp",
  "key17": "5suiQ9a48dmrKFYgBd2U6by4DYWe8rjZCy6qXYMGJPRNP1rrbsNpZybGik8HocENqWw2C595YVbWkciewRcik5Do",
  "key18": "3n1jWCTLp5aiYYQtqvDWtzxxfWkArERD71pLFiRR2MUWZD7JoAdbXqsfcusNSAzfnKQQZ6sBCPC7entfxgyUtgNH",
  "key19": "4ot1C9fDzz4Y3VWbaeakD57Xpi1wA35PRQwMmxpYGk1jrGGkEWCm8htNBp2dUTCHGTooHosk6gELUhpzhAN7N4C2",
  "key20": "8s6GUanfVbFMEvoEGH6L1AnHUyfm2yjZjpvetujbCwV3LR5iYNAYtwyoJkctcYVjEg1ZEwi14jUCg6DTMPAgCJe",
  "key21": "jdJXcREqkPwNKrYNuZJqhYigdASy3KLFLH9hX5PqSEw9rHuftnzcfbYEVLe3mfau2FHe72GXVmLTMNWjaEeKjdt",
  "key22": "4UNwv3suUZwRfcqZEmarG4WkDmE8q4x9czBG79m76iFgHKhMLqC4D2LBzvs9tk62zjXC78AbDuJNbMuhsKaDWu4P",
  "key23": "23S1yp89RLhs33xuwBH1W5S5TCf8LeojZQvKXV3GSdRSJPnc52jc53d1anf5wRUvoWRjK6SMuDtRaDEDXVXKoMLf",
  "key24": "67DbxemU7tUDTq2T7qZPoxgkvraqPXZw2KVZP7cnTS9zVmebnNk2tZG5eeCRekKCmEiAyQ5obtQhfhYbbMXPozgJ",
  "key25": "5EY7uz2NkejAbXKjd8EvXkKWYaksmvJwJm7HQwch2cjcnsDBnxzVU1TrKNCqiPE1SoNJY4xihCNqpzxUuEGB8owp",
  "key26": "4rv5Z4u9UUsYMPCD8oWsx7rUKtjR9s4cKyYuT3jicJh7AwmGPsgpfqzPgUNSLnaDnLZRgakxPs6rHnU3c7DRmr1V",
  "key27": "27ZsMjcAPYPnHa1Nqnnhwb94hXsX5nZLxYQC6fDPybv1Xa9DpfY4GQfbaWBGroJxp1ePvGkkxvdMDZ1wvU8BQzzo",
  "key28": "5JdFLCDjkSXLHffFx1EMPVtSQ7UB3F95GMCYmN9ynnJLZZPomvNvp77f6rxuhwtrUAMKL5peXVzMzNiDH8jYmSxE",
  "key29": "3VVEMp5EnVrk5MX33Cvoevgu6QuA8wfWKtePbJXGUuALAAbD3KndRBvw5wQShpmDGt3HUardQcicEwb5P62JjNfU",
  "key30": "3M5W6xWeweYehHivMDygHiur9nBbS2ntf1VkAohBxtsBcM9cfXEvo8FXQEvWUyjZPA8anFpwNJGQfEfJsU5KzMb8",
  "key31": "2goLTXyoEryArvi4w9WndcJ3iyqoUCcfQ4XRdQTJs65X1DxjeD3waqcRzBNDKAnSutbimXUh2Ji2a1XARM95kA65",
  "key32": "2M2VxCovRT1tRhkZgVHJiJzSKdbcESNkxsjnewDv3rGTAByzk1fPZLTDTzD2bo4JapMm1vcxCSym7uW9HWLEhPqQ",
  "key33": "2hGjvgiTABnbvmwav5hMh3KLciTtqtn5RJCHaRRXZb6m6sBGQK6mefBAA1dLstBFrNEqoyx9KCkzQy3vmxWdXa7S",
  "key34": "2t4f8HhdPNmegcUveHcL6kL79hRbzt7wkZXTaABAi1837pw9bV73nAhdPvxuksgNPnY6uvg6mQRmQ3ZgZTo18gAQ",
  "key35": "2oScsevtnQvZZiNgKjStL3XfASRJWhxFbHagcrATwwfm6hG3eVvdANp2xKSkvegsnNrRiNPk5N3JkUJEaB8Duo24",
  "key36": "53oak7ZRKeiw3bZCtDHb9AgxBb9GThCByE5J2uugSTwaLeVqC1gm9AbBdonzs7GAMWRh6NY4FiqL8ZzxKwyD1UHk",
  "key37": "3djtSDSKH3odcSYEwGWE5Q4tRdZs7sR5VUdyTJY1drJ3tKcSibyACKkTvWtsT69dfbJw68Ff8n2ZHGUPNHDztpK",
  "key38": "62FtoUZeHdAovjNkxaHmryvihpKfPVZBJPkYi7UvJnV6XdRbiqbe2VdmkfDsvxcmsJ3QaTFNHKyTvh3iRTwihwbe",
  "key39": "5ir4aLqcYo3FdombuWvSUiz5iLq1mocwC4qX3xhj2LgSSCgkkMAErtmnE9KMwDmrW662DmBF6VKv5HqNaAoGkz45",
  "key40": "2J9JDgfdeLvGQa1qrXvsvZj4UDWgoWhKZw4NT7Jv5t9agfB2ESQeW9jtinGq5jG71v1BrDiYJnYS8pcJEENdzc3v",
  "key41": "44BG9mKX149fQNdea6yznmNPQTeJcmu1N8KYncVRYjM5FnhU7SaCGmebSoRBankt8yzxdg7bwxSPEvBuBqsRWZ82",
  "key42": "3yvLjSwonmcUBPXf8F5H2Jc3345q5kLgTiWNvWnNHBRAm64LgNVWQCwyhGFcUoA47ANy4zTAEPiEszPBvTtX4sf5"
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
