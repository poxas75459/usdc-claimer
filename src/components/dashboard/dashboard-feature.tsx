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
    "jsRHCsxuxTG4k1U35bVwNaJuZYjVqqTSGadbQ5bgwDdiu8tJbBzec3JsyRgRskYCQZU3rYsQFaMWPtP2XJkUbof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhHRRG6r1HHeS5ZXyYNUWBVUxYuovzDrqU63aP4uee9TdAPfTBa1eBfDXHZRwfmhGfA9nXb67K9PY9VVcCNH2ga",
  "key1": "3gWob6RvvhdZCUq68U8XTVRpwv6oeJ3RKdJwPi6bpyqTEWjaRiiR8LaAeGvjjzD7LNHPVTHML76U55Rkw1EKUVNr",
  "key2": "4kVccniGb1wc6HwzXbJ4PTzV34M8365oYEADF1ds8M1qo7tNWtM3KEdgFqJzdbtM2ytZsejQStjQJDP6wtb4L7gp",
  "key3": "5qrah2DNu4KpdFncaUxjMWnrsPNJj93YbLeArh4RLAGj1GDVcskLwKEmA5FyJKiamX5rnjAfo3KUYdKtbyFxfaDH",
  "key4": "5UjH83kHJkH4HzbehRh6K3zSoAqV8co7CZpoc8ezJq7qwUw8gSkct74tTWbcvRpGj4sB7iWHJYd95L3YohXSMRvy",
  "key5": "m1XDDmjT4QToHbUMj1LsBAqPXZBzJ4cuFbzyz41az79BDj3dStAj6AfDiFZxZcPcKW6JKsyXYQV77vXFyYHj4dt",
  "key6": "XyZsqABy8j4gHhhE4MjSGwrWJ8pGjEritHMy5nmjN89ynp5TpyRVUDQwq8De56zSfLF8niUqLicvagVgAfsRZrv",
  "key7": "5LRTG3AdHqNLQ7NgpNL8583VXfkaQGpiXCJyAcgbAw9TULboHFquJdFuN9Ud5wPaEnYMQgJnfhhPs6MHmuDWyfcE",
  "key8": "4ViwCXJVLCnYCfHJ7QNYoiTP8uzafnd6KPdg8Pt6qZRzH59tHf4Qh95KKE5Um8GDGc1Qob5jvEjC15nMSZug58DP",
  "key9": "3hyxCQDBdW29THBYaeCKqZppoaxbMXxTxS5Z1FDZvLJE8zfh1d5G1gX5HV2BsR4aLXaGm817uqv7cmHCt8WHxuCf",
  "key10": "4M3iRYurN59dgJ2Ty9Uq4k7rXG2dKcfrG6BorzQxctN7znZRjiZP5bRXmQA2KjXzBi5VobyEzknvUzFT8y6GXW9S",
  "key11": "3BRvoQYJjijc4CqAutb3M2Ucy1iTTbXUaGnPApadR6FEeQbPBRsYJM8cP8QWDayPR9GyKbdKp5U7Uc9ffbnyQoPm",
  "key12": "36BRGdnrGUwETs8QZFkosaWb5HrjYerBbryLj2o3od7x8orTwqvF1wt32Y5mDKym8jsScK675rhyMA47KactBRxs",
  "key13": "JHGhuiMFbfiAnYu65b4bcVfqqJDRMFZ1agufgB6qbLNBdDSQnLCuVasfTFTrUNkjPjfS4W1RxAPHdVCu6idzkUD",
  "key14": "5SutSXqXbg8jhV41FgFgDuKWpmDuwr8WBUf6kqYiSPr1oGg7FF8ZAXn2aGHksAbakTRLHwbMuADiHvBhYAQcEB8h",
  "key15": "63NggVjXU28arQahvCfqZvKsM7zC4gaSLMJfkEW4mwB5FnnetgyEY95fo9nsYDhqgMhzEXZsuEuQXGCU4Fa4HXn6",
  "key16": "3qHTdGyki51F9BewdR4kkz5VrCRv99Xn4eKUqYQQLY97fJ1YWahYT5PPtqebdUUshSuttYVERMH86U58m7iuySf3",
  "key17": "5PHdDogbanqXAgWPepfmeiqYuih5YSX97obcybFa7nomci1jPe6LHJsvBdSwzTTiXNp7ue9daACqDPy49LgWY2SZ",
  "key18": "2Juca6rgqMWpW5sB9Q19zBZueSU6Gfh4qm9qSCvgkvvKDNVFAzQpGvp31vtcdeeqxEm2S6cLQf9vk6r9fBK27623",
  "key19": "4i5aimTeSjLYrGmSuuLBwTGR69sWfGktXdnAPXCjAcmbGW5tTseHoNQa8WM5X8fyVqo75WgGPKLfrYpbc7zakL5u",
  "key20": "3oBnJFf8ejtTdv385e4PWiZubtjtDht4k2xZmVeggEjCRMWvJdKg9uSiKNhEZtgmJdLLNW4LxBhMKMmFmwvnepH4",
  "key21": "62ugscT9ndaLuQJftLjkmxpFS9C1Dnj6yV2E9ZXMwUcUAFBQ4kBMa1pv41dSuSpG5vaSqSmVnaBop4B6dMxBY3Lb",
  "key22": "2BRRvGKEiTTDKM7NRAWNw2xRF35aYtqvmUUVdWPGxBGSPNkKJg3yRQ6BSgfGQydng8WEEDAYrCext1NmUXPgjVun",
  "key23": "4mWvD22hSBE9kYMgt4WER1qb1ta6qvSGtqciZExCPsAA7WqmJW6TvEjvy7CD8idBnJNDBaE4BP5pwkTyC9BqFJ3a",
  "key24": "29T5NQchoSjBy9MB7Mq836NmK2T6pRwSem8Hab6DhgMYSNfnRdQop1PJRtmVxu2Mw3Q1KBRoM4qSvzr2H9QbwBQe",
  "key25": "3a43m2d52HPLSw6HqYxfb5KBV3VsGYgpmGoXU7PfzNtSukVGuvqz2zFq6N6G3BEbrKTbEeEJeQiox57o5Bmpz3jA",
  "key26": "UcK6JJw4sP12B9wb9x4hZZscKYCEyobVGU9Cfd38cidSABjZJ4wunjMU7XRqUVXecdJmvDTgexEg3nRFCaygZyD",
  "key27": "4s2SNUn22RcCzgNEyfgwocxr1bp17TXiV2yKPFG3rGLP5eAkTGHxGyzL9JPgFqb8xso4uRsjqHN6DcD929BNUcSW",
  "key28": "2YUtsPgDBw45KTg12gW87uAaqzVZ7HQ142aywpvH6FAGHdQdii2EqyP8anb52E7G2tDAietAA7yYkZpbenUEAhk1",
  "key29": "5bhZHtkd81FSiCzwGc8SacD7rU8G9JFeEmP3idniGGXzaFrqWkFqMutYkswLSQV5yZCEjCHYmsQt3teQ2yDRgPkY",
  "key30": "5T1F9epqhJqSKinet2NbBnkwupSo4aq7Tdb1Nr4vwdo6wDSWeTvZ9Z3Dt4JVkktrmduvwCUo1JDDmkydbTcwHkzn"
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
