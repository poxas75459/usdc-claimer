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
    "cxNisToXntfYzUdxLvEERTAbMLm8sUeN6MQxFi2k9TFu6Vtff35UwcL4HPc4qVroGsgxktHNPGinWJNJpkUyWU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pqd2CMqQxM1fyXRhQzUD3jFhq3uCpCERMWwfGVuHpjiKATEoghZapzEMYWeYxLSH6NUE8Pp61q9DCseRoJwS6KU",
  "key1": "2kPifHjeNgqEq2SEb8aEfoTBexPMznh332FyCjmN3s1UgjVyn8szTcbbxVzNgHFPgY8ekdM7cZR3JaVzec5ae6ES",
  "key2": "534AeiP1HYzCMhoW3NdfxhpDdUth2D5QFh9XWgmCHikBFVqWC3Z41QFKaqm6vWKhfPPVbk8WfpBdx7hKJxriDMqD",
  "key3": "44D4UV7cRg29QLmLW5FUejJswY65NWAH9jahSceTuLdyfL32mopAyZyQFFRvTLK1c1K3UP522cZJFz5KPAQViuz7",
  "key4": "ajhD4UYQwiBGNJGo9RtGVFeQnTehLDUzub3mkhXYy5qmnK8GzW42h2nk6rnCXCynhSBTErw6c8uq6sbn4VfzFCj",
  "key5": "JU64e3K5xMw97Ky6iFwJpQ2uD3MKaswfYGLiJv2kx1E6GLbLwoFfC4461DioR1j7CPEqhVBUwVsdy8TBgf37UYi",
  "key6": "29MVxZ6DiSy1GG3MS5cAPEhoi2R2W7y2RyNaJzMfNUMxREfiRCNCUvJQJYvBuk8Gq3EyqPFo9h1Vy6xKG8gGiTwt",
  "key7": "5SJuvrdGitMrN7VF5bqYHw4KBcyjj86R9BLGFVsg7ELJMuGFJTk1m2iE5gk9AUbKXCDKb6yxB7UwJ1EQE3qhVicG",
  "key8": "21Kqxqjkd7JW6Dpnkc8PCdyrEovcVUhUeMwtvEYd4cHWLjBp1UjmFYuP3BKBTd1ejpaRbsPEv5bTQ1mHAq38FUFY",
  "key9": "JT7UL3kzmKwdNLZ39a5qRQaN9uSPzrRT1QetvSygoyK18jW4FYFC4Gtq54yJqMPYit13tRjL1cKNuPoRxmUfowP",
  "key10": "3vPDdJMR5v15HonWCoFF9z8Hi6UkfNkiWc2U7WapJdwmpYxF4Lk7BWHJxFoXP3EkbVy1aGovAvLUh31UJPhrDD7d",
  "key11": "5yKtv1n1pz7oc8z2NwpErnt2Gbz3JBB6V1ZWJYa5EjKPm1hu5dojSeQtjr8fWNHMeGjA1bqTqAwXWXchCbFJHGgk",
  "key12": "dwCfwqyFyVpLRN4wbFRiGLPeZHAuZi8tL6eFY8Ds6DUuTXi3bB72KD72AN7dZwaLWP1jrETcHcQb6ZT66kYmpVN",
  "key13": "4CrEQVKsj2s1u5e8Q3VUKnaKePGS3Lto451PgwRd66GK6iRgiWUeaHWHwQmZjKSWvWNCHvXfy5kuNxSMGv6B3jYH",
  "key14": "5XS61rtyrqAbAgXgVDQ2iYe3Y3EDNe834ndG4h6x2d16Wy9KsumEgAxgHCryH8hFVwLa7DWTGHjqu5rHqYwrkt25",
  "key15": "TLq4bNAYZDbVdCG4vyucE9Ud6b1WHvUA6rfTTw32SfUqb7egGVrCtNXTXFc6RiQjn8Y3gWwMHCx8kThQ27ksuK3",
  "key16": "5nPPt5Dmom161SAVThoajGcdVQPQZdCTzRUi6di5ZqH6KJ6GWEnFJRVLg9BLZv6t23ddLzKbFxbC8BMyn55XvwDC",
  "key17": "2ijT5aFWGUSps4SWfRjB2hULwCGR3qfGHfKufwKdvnvRrwb4DXWLkw4YjLeBvvxuHZQupbKAY2fQt1TjExLgJ1G6",
  "key18": "51TnJiyS6j8WbnrBbszh6mLazcUiu1sG9WruoZ7XVWxt1oGRpsLMDRtnRiPQ5rMjnKfCsHFfkKA5YgnFTcFasTrz",
  "key19": "2eHPVtZajT7cH8vGCZa4Xmqgs7UqaxJD6Zevjcb7onVkVudwVWFFBT95AZoxbW9wEUAbVQaEky2yNJy9hXnf6tjx",
  "key20": "5Gs6iifxGGqrHE5mMDcgcY2q9F7GabK8faPJko6spXjgDdAD5K3Dd5JzisXcQVSohURueA7BtBP8V9xWG8ZnKDCk",
  "key21": "5MSEQxtgGcWkHzB3a344n7mL6xnmuJHL4ZmEfktDjc8BGKLL2VbKfAFhCzRosswCkuK31qWozeHXLS6jFzuEasBQ",
  "key22": "5jhLaE4uu3kxpTRgSUHgXummN6dRbhGzH5kGYHqGJdFJXrVnUEhKgLb6K4FyV1ogSZXAeCao7fidQjQhKjXTecAh",
  "key23": "55aeu8hJ2fiYXv53rqfTLXeZVkJQQtDshCtXB81YwAMuw2D5pVdeeM4vFZmcLg1ovY6MXv1XuXxQBNjVYyNb3sMz",
  "key24": "66yn9UMuPzVaK9nMf6K2nkzZ3wDDCTfRpafpnzeNtuTsR8nyQ7jT8BhDktqtdWBAHV66aQ8Ar5zQbjFryHyndx61",
  "key25": "39YxykVDBPDFYYLEvZGb9ZgzgTiyuL8Rtp739f5HXsv6WWRKfSqX1BiVQoBZXEdMkc7dfnXQShepKYyYbUYoUQBY",
  "key26": "5LwHputze1xHZJ5EGPguDwdbDXdjp1dD8rHi7h95T8mwXcJb2fmJjFpVxAwS7i3a6RAdUtkbH2saHpNYHgAUdomp",
  "key27": "2R34MJ8LtueuHf3yQkYLLS9bkXYb3nngiCKKgVpRZmfsZUE2y8X2yUXUWoZ3MaYGgtttEmUbQSfaFQjjURg1NARt",
  "key28": "5KnTf5Ci7tU8fNcKwoWdvtunimKBZu7t5mUBeVyUocgcusSVLujUxhucN3As7Mc4mhVdoKScUa9TwoE97Bzy7qS4",
  "key29": "3NbBMTMKm5gpGGBkoLd55QVyY3KCuugqPvVtnukv221p5bQYPhiYNmy59YRTYckEpD2D9nQpJ3SU8QGFiBiyT1QT",
  "key30": "4dq15P8EFJpaHVzS3juuF7SuUvDex1cCfyRAJyLN7QmWWA6En1cpyxa3Droowt4aCat5pR6TGdNAWzWCqsfDk3n2",
  "key31": "WaEXzZyhDDAVH2n3h6McyVabJtt2bKggKf1f8mJZRff6hrSEYn2jFuF3uvDmLub9ixho8AghubQNbNrAsV27Zyr",
  "key32": "3sd33J83a6JSRV4wypiufh3yBSnXjiAuu915g4SyUpSyq6TbdMcA9NjMpLKzRC98rvAc8vndALEwpQb4GLqRgNMR",
  "key33": "4tqzVMReFiCQeDMXqK6WAuBQaLpWx2EvvqRki8QyLgEDHrXwUM32NXjDFs5Y8zWNmLEiASBAjSvn63mSSqho9WPq",
  "key34": "65xQsEoEJWfZXyDPgmg8j7kNNJq4ctsuuaWybZVCKVfSHMK6nbRBPd9HVfuK9uSiCxeG53npJuRL6w3TcE1i3c1T"
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
