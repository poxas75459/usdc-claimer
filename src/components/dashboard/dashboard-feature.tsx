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
    "2Sf8uCbGZFkaLWNoAUdSzfXVmLzoqK976t12MtJRzxARp5UJRKb5219Jw1AJMJY6jecEUUa9sBdNic9hpm1eYwJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ARJWhvbEnxqEiZTiVJxB2N4L1zA6mzuhe36WADUWCQXAx5HsMsPAgdETZLSoX9YYLTSzCmifys3JyH48xm5FjrD",
  "key1": "3Qkr1hWb6LFCSMghqgGbxG9vLG5bjn5JCevxexcZgx5t6eMvwiRYywUDp53J7x6DG6Pcej5sWTo9CbqHHxigL757",
  "key2": "4X8vijQZvvnX7mZvrNw8SeXYYYC7PQiqBF6QcjFwtcizSB9sTPvX1ELX1EcW8uZUdUnjRpjeTzUYLXac4sSC1BGN",
  "key3": "64NuR2w4obynMCrEwhry3KxRUPgNUs42oCXbJCMGTrL9xKN7ySJ4M9QWtdcaE7UaUpKnZBm9dzvdoRUixZk1An7v",
  "key4": "2fdEDgNjVoL6MNj9wRpWRJNn4chnHbPajKRB52j6uCa3msQgffAzByEhaseh6LgGQMqaS1TyHkvcVFmmpkLTWXKP",
  "key5": "36AFH37xghJWRWN9xWHbsRNbYmJvC9KbYStb2tXx2KhdXq4jhgTVi3k6uzQms69r64zM4dodde99vwxxq1P4GLmM",
  "key6": "EHPQHf38UCE4oy8PkHf455jXdD8r357fN4XSaSqotr1uyHXnMKPAUAkQr1YTodPcVKt4Mxd8jLFHPzR4NJ5nzz9",
  "key7": "5tEM3cnvwL2tAoaeHkerc6yJKfwBAqP28XzyK6yCucw3viY7L84jAxsa1zDTqFsJBEdSnvzPAcoEARXZotHCjXdp",
  "key8": "2VXBne5hRpgKhf3NcRWfEbVwYk5aaLRYUSYRD9XqrGKDvoyAS97j6LTq2e1VTd1hnMqxogjpJXnuyjcMLMqNf7z5",
  "key9": "6GAsE5z12aoFigcMXnAim835uQdXyDXWFWWHbKEk4EVKtLN3nqmHU5J2dZrKCCkJ4vjus9hYeAhDcmP9etCoc4b",
  "key10": "ZVtrfgCyZcF4QkGNuyCb5mQmj4kZyWyXkxo8C2pxq9yQFb9iVdzTmNJ7tMtPusUjQVfYUXdtzxtAwyW4gd95uTd",
  "key11": "2YeWLqrWsPvqYrpgj4FqFsfjWe9e6tqvGpJv4mCv6UfdFaH3FojgCG8GfToPnwiGvm9TmpDmHK2MAmYJ2YGPu978",
  "key12": "2Xo2FNmsrSATyc9xAPcuA9kwuT24qGKkneszhAcdMRMwWWwQEL4G9wNrtvXQTxvyRKKLnQrPDwjF3CEdD44piJ4Y",
  "key13": "LMVrotfM4ZDWBDmjd3dysHADE4KJfNddUnYbkfdoBNxUBaduqiFdbpn3H35FFLUEuD1eDtoBvwd98eHBmh1iMQY",
  "key14": "WWxeKdTdrNfwdoWm3FB7Hq6phbSR1Ct2q47xi9v2hizF3NkUhkT7RW6UPSCzgpZnZzNP2YLniBRqKzag3K1ZQ5R",
  "key15": "65d6FvtGJVdN4SY5rKLsVTua7pNUsX5nKiWYi4k8YQqbwaPEmpWRhimUFZCKvBTHikD4XgLx4ieYoRxsfut7v65n",
  "key16": "5EtNiDgs3VqDnF8ecwaKuf4iT5swBnynJjoTfPPMWkTcUXyUHQokc4zLj45EXJ85KaDKpRnLGXzZCUxaAx2RgjUj",
  "key17": "LEsD7fKDrijEC36agYZyBCHEGppquQnvXPjdXqzT6WVfrw2nZ8ZSmm5riBDEav8aZuWyaP9gPn6VpKGPDMkb1cz",
  "key18": "4Cp1b8vKDkfXR8CAJm6qwcByTGX3kK42PgVsGXYQSpaoyHyqfeWwqSKaaD4JHyqoWVh6NCY8ydQhHkxsFjoqFWDb",
  "key19": "UfoTJLkQqZzH7czhFHsPTRcegC4gznApayvnCC84BMywGJspvT3c4NtKCAogx7yx5wLXoUCHreW8nU4qwXekCma",
  "key20": "3khhnaNgUS68vFX9MqyxcPdtA6kemmPHBADuQqHsHWM51sdyFvjNsnYgTJACSKcVE6kDjQoiSsNmEQzibrNSFWcF",
  "key21": "4vFQxPsGyiX5WtKsLDMYzYh5qU5QrwGmf2iqFrkAWDRFrPzbbmDCJbCphs4tPj84NdcbDyD66RGdKrD3Eypkc4p9",
  "key22": "4yBtiz9iwZTyVkgVyY4dnMYiBS1C14HsPTk2v8H8vyXzBpyEN1pNit5TZd1ZqmfokQoWHhTXVcb81YKrDEnQyFvZ",
  "key23": "3JrFdV68KEGLetGdXHYTJr5sVdKYh1oohLAgVyD3aaB4WAwNLg4izh2UCiswmBevBfCeeMw7rMoiBdtD36biXkCF",
  "key24": "x8MpW4RWgHNjFBPraWoCtzWehSkyJSfiEhtcQRuw4XjJsgYKmyZQZ6t1nd949y127NjNiiUQmgaBSgbvk9oXh54",
  "key25": "STgrc1YsMv1MtmsHi5UHtjCZkjoNpYuNPzgmDyfuBJRsctFeUgS9rdVEbcCeRjbQJixs1s721gNkYbRcPUGchss",
  "key26": "q9sqU7V477VyJakmq7ebTUzVsLfcJ3uhkYwMvZbcaACqsxX37qQDgphEvMb9K69Jg2gyk16fkhRRtFRomGPHi4R",
  "key27": "3jDN46H7Uo4qDaZr7UKyKWbqjLNFy5xyne1um8SPenNwdeDNu12NShG97Qp8doUg6qmBgBPYDw8ZMjGrojrgFzNV",
  "key28": "2PrtF9riMttFuLcmP85qvX5yVo2wrgn2sVHWHuLZcrTx8eCZLmVtKTZmgiRydZeuR3kU7MRBrtDa1WwLfz1GHj1c",
  "key29": "3uitVVMYUMkGaVqJJgW49V4WTCNbaTjZQzUzFj8VAUv3DPEvvS19jUUJzUQHgeBH5JkEzc9yeapzz79GxGoxeBS8",
  "key30": "5dNiuNpLboKKdvVguQBUHjbjP8U45MWHrHtDxBN29Gc92Uvca16ebgzq4Te3rhBSXHYxmCJSkWBnKyeEsGzKxdwe",
  "key31": "3oqQCYDWViGKe5ESo9M2ozWHxmpiSgwgezwEWQyvYoTTetkN9QTLfhajXCZdKKvQkeJBE2vQx3KE561z7aDgwytK",
  "key32": "8bCbJpzJf8pCawUcz3bqtuKSigikXL87dZmC91a91YG6ZEq9yrDpBHbJZ6fBTGpMNpDkaBReZ9jpFsN2sEfsJhA"
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
