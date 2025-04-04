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
    "3K2bk13gNmJEJXAf5KANU15rGUH5pUYEgvpByfp7QbCtTDLxNQNaMDdToRSPZ44vrvrUhQ3yXNqXpTdsUei24Wy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tJjSSMzYtFJGpZfTXPPE2LBkQRDhzxvrydw1RbEUuRQrMfSdqDriXkW1vPioGX5XnHi9v384XprUarVmDEAwb1t",
  "key1": "nY7Kx2b82YLDrVdfVZHRVTu4aJxJ3e29WDZduL1ZdTHh2ANTYvRH9ojpeppncuwh1XbAZwYtLpHDooZbgApuTXh",
  "key2": "3w8BNnX9y83aBJo5mFbwhAjehoYy2BCJmY8QSsojQmUhvXhQGKG1swoy2hv42vKqRCKoLRPE4JaqUnRZqTCmkdQK",
  "key3": "3mRsfpXrv97JM9gYmSwf4qidHtgvsXiPsa3h9h7GrYSisw5aQpw9ZviNyYQgojkcMXizR7QfAorNoXyKA5hJ86yy",
  "key4": "35gU8bhZKvdcfLm152gzHTtT1KGjGN8f4AQ6cmn6gA5wkxDoRyRK6UHTbAD1WRgN63wRJH4WUYDbNUwpeoqo7gdp",
  "key5": "4n2gH3UsuND2skYkxVyYguV1CKsYmUNkDKMSonsobXT1VS7Uqcw4yj65vCbHpFzP3xLRgU51W7czNYLMMD23a2JU",
  "key6": "2rzbXdcHBeN2MZqT9zjP11c5Kr2kmY5ttLzNLtNNCVkn9Y4C3ifRyW4oPmj3k5snEjrjbvKHyv2LCVrKTp9t6FCj",
  "key7": "rirLmRMT6cyzezV3NvdyaNgSWHBx8HPCQJ8psyYBU1wYZn7zS3yWeQUdHEaBHYQ7zj7JDbPwYGrAtC2P4T9xFn2",
  "key8": "41oQLPfxUm4Qtc2XREX8sx25DVVtEd8m9g2rX32YBarsfCf6YwJN7hmZm4YwmHiNAg3Gubfct5kaqifyKxB8T7ab",
  "key9": "n95WxNGj37vmq5e3VjkB4e3tBX1fgb8hXj1dDwf7QjdvzWphkyPg8et2bmcH4QfLSqkHSGuCAAupG4wNMskRq8P",
  "key10": "3DVVCEYeP2SWZKVG15goN8oyks3ZW4BoHdFTxLDvMNQAgLWZoKAB2GDhmv6h1Eg4TqFo4H8fANYFQ7KCzDGq61E3",
  "key11": "4bCAm93zSqGgUVuuQdYMvqWiKDpkmRB3Rv8asi3raz2V3X7wGVsURLB9JaZ51rQvEFbZobEveDoAZUd7mCNNXxzv",
  "key12": "3LKjYjVbCa8iSJVaf8h655tcozzzAJeW9q4NXVLaGT8jGrD5m8BWNt2N5Rcwtd9R9VtJWmabBE3xyibE5nU7q1dp",
  "key13": "sqLx6QeLy5sDHk19pwcSVso3RaZebmimtyB3pSNvbdfbL1phaT2qvoRgaeApp8w5C4wtGv73cCAxJzANehbzyyz",
  "key14": "3YLU7nXtACd8DvunsXhUJgey69gsVqZR28L87g7obv9BwJvbjWqxYgwj91y5ducXs9qRU6KK6h6n6GzoYEh6gcNP",
  "key15": "5mHke1GuTgCYj1WQc8MPTDD7Bq15nJvLraFyhkUtsvVJb3fZQAcZTmFGxqFxxX2xwoyhVFWtnvMygzPru6TzAXyV",
  "key16": "63B457hNH3ufmUNxqrNgJMXo4cBdbrtXfchS2DTkqW2nRReQZU6TpVJ4FcwECWwt91qQp2bwVXwdSr4F4BJ9y5TG",
  "key17": "D6NvqFjmorfQ1Lkh71WUbGVY5JUFji3uc8eJnwapR6U9SiNpCrwVNDEuw4PjZNEjpv5CwwsPkZHwKvdA7aqxLzN",
  "key18": "3H9HV4uuVNLoapCijypckWznb6AAqA9taMAsEH1v8WjfsMA95ryBUENEmvZ3yNQT5toKAZvqfjffBoumULZJmqGo",
  "key19": "4qsdCyfttybKgQ4k31dLDhc7vfKXHu3eafjA6221iprrdDCogqRFDd9TkFyEbFELwnHYdEgNscVbR9dMEnjk69BP",
  "key20": "2znBV7of1rWZcmXAFgpjZ84AHWF26xuv9hHvYFb8tPXe5hjKTKtHzCgLzqdZbRiE2nJVkDFZQZq4pfaSHieZuzYa",
  "key21": "3eeyin8dGwXPoYW5GvBCBvVeuN5FKcDsFmsQskhy5XqcTf7XSaDBu79UWzKgXutgzuX64mBAYje6bDG9WEJk3JK7",
  "key22": "24NKf6a7qSFQMSBsbxcgWuncVhT6EAMryH6GRibVJT4QdfuhQThET7zQhxzKp3Si3Hk1YfoPwFY4rwenB6n5zJZf",
  "key23": "2wHG3ikXvxfKSPJBjRF59YH5fXdvW3ARqHdt6YJ3p8rC2BmWMhii8zsoaV6a57MutvRL5mwgYcNwMVWX9xqKWE76",
  "key24": "3ABgH6TVx8kcxVSvbU7TKq4eagijN41C3FbkqmEwo6fPrGfQRYzroBmBYNZ5tpRLJBa3nnf3Q3SGsvYdt4bRQhJt",
  "key25": "3mHyhCXiC7g6EA3nVMuWYN7dB3KdN6fBCVGqYrMhEzXiLeLFCxPwRNePN4KrqfwogWKdPb7VjW6hsAmHpYYhL4tn",
  "key26": "2ca78uRcEgnhrGDWwHqH3jHZxaWcxBrBoYEnxTJu4Azhc6HNvWLw7DQSF3CkzNAM6MUL8aQy5R7iBWx4yU5qXWtK",
  "key27": "33afHFuBZtTCY1cEJfquyXxmP5opoGeHv3m6gZHoTutkyck9dKB47WeEAPFqvUXxgsxK5ZyBKydwupbrwP7Rfrb8",
  "key28": "5jioQXXHsnxVZsWtEKMgnqf4TKF4oTyom431pYeXYfagq3R7FS9A2mHUbPaNpHh4yp6VQzsTfEBG1C1HuHShFWDz",
  "key29": "arppRNPGxucFidgNRrJEaSKnUtE52iA1p8i2HNGxDm1DURNqD2embqETssYawnNPKXae7X32er97EJj4TaZxDjC",
  "key30": "48BE9ZkLQdCHWEcsU8J8ofH4mTqAf8kqWqg4RvfYq6pPjx5zdYMgCrNJXotfDUcyUbJKMwyENhwfk34ypWF3FHcB",
  "key31": "5Ecd6yLquKg2PqKPKjsXmHpdUoGRMogXjMNU1gDJoHRfRmpPu4ojaFi2rPcqMJVd3KD42EeXgFj4YPHGbEGqRJNt",
  "key32": "K6DVb6gNT4q8RSbcpr7aFxXzZwsAtMPpBKYFYtrCiocVYqyxpLJUzXwV8NTsJWcrGjADxuMJ78w2Ah2v9Fh9zDe",
  "key33": "55YnJd1PXH8A9cDmkV1gLdyci4QTBtQ8G492VYLZWSrfFQjUMdPD5cvYYtg8hAwunurqxRNE3dmL7pkFdF698fg6",
  "key34": "3xp9gz3t4DrsqMJ2acjgGTfaTpJ3dSxVQmEaXsXfn8gmxyhK6rYX5kprA9jaJQgSpffNdvYJc4ax4yhgEQBBqwev",
  "key35": "mXFSM346H89JewD1tJ8KL7YqKcB35JPavphkFBpSKo7Le4ywnckdWbepGW9vRp2MjdJri6SNBzCGsrdXgTukaiu",
  "key36": "55fnJuwbt8ztA34rW7tH4KfGvFWFPWmwgf8bzHCFGFHQjFHBNSRNFGbgCoriV7GK16cWPT616RwkRkpdu14Z13LN",
  "key37": "4iYPXAos6XVctRuri5VFaAB3Y6nRVjeG7F45kYtScTwb5VReDTF6xir9Sb4mwBqUgne4e6cANBnQxYsTwryTWBaB",
  "key38": "4cNEQJjspxp3fjG6zUKoGEK36ZEtDEvWhHxgU8DMTqhpgrSs51UX6CCKHadxJkRAEgHRqeACFsbsmQyRymgQ2jPR",
  "key39": "5JeHZPkFGqLVCoH2P3DMHRmSbEE3RveF5SbxmBPbKp1z76uf94T6ntoKXqxzpcPr1U5RG3AYNksyhKwBkxv2fur8",
  "key40": "3zCz39KPfMgPSyjGFo6nHc8sAoemDtRQo5KtGPo3TGXEY41ty5QYps47a2frAC3RZNYemsvNwo8RPMmHbjhebKfB",
  "key41": "65HAj4JcWA4Dnh1qG1sJEUrwkmkF8fu2er1gkQf7YKDeszTStWL8WHLqj2JGobjugUbFBjbpEZQoeVvekogqyVUJ",
  "key42": "4Ze8xEcDqs4zvy8wDCCpzo7UweAG9UnY2F9QCxLXsESBVWL1P9eHJv2KMK2JThPCPSa5XC2UCkKVQvdou4E3D8LW"
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
