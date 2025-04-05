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
    "2e1ALNzz5x5Dxjdcq491WfzoZ2RiWRV6BeZbL1U9zNjtDfiRgfcwyx9wXFRSo18EjoYH6SN52kbPNuDEKdZPsvLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vZAfxMtuATSW3YPi1t2QLmthfKwYRmZrN6KZjvNfU1D6pAbBMzy3QVBSkyQj75gnvZvVCuRZrMgtPHSAa63KMRk",
  "key1": "4r98txiJc5vqi1M2Gbf5jPrrHPL8AZVGSHid8nC4kawomgW3TfWLwKHTYAT7c8jURAQ3fxAQz6JbpDW86xibwM6e",
  "key2": "66FDMAtb3GmVgmVgxchANTsgEmnbsp1ZM5RBjw5PPvNaWhN6N59qpn6xk9i9XiRgkMK9bfc7fJ2SCeHpnYeBhfXu",
  "key3": "34tpJdyApznKMkwZfyNUVHbS1dZVcuSSoAnmaV2AnVRnLQFvF2rb5VCr9kmLKMpcuS2CeQtP654XgqQHumYuvunM",
  "key4": "62aNi8pqEtQgPP7EHh2ddguoL9psNNstjKxQD5C1YtsWsDNxCYtYL5anjGB7HnMsqkburz9k9KcdND2pQdWMUpe",
  "key5": "4c7cQQT6ZqEv73fAC1Jn8x3nUBnj7mVChqT4ZeqsMqcV1WcmgU9o2tHSSk7iSHHi4X8FiwwPQ3TDBqsh25PEdGX6",
  "key6": "3qGDLtP6GJFTWpcwncVhTta5bTZ9AURTrXPmyL1TLQ4WrPMRrRobtxTDYQBnnzYW1oRDXRYsfvf1dy2HzvH5d3fX",
  "key7": "2Wip46i5x7K4bwexHBeF2fEnZaQH2TPDx9J2zmHVrZuVLeVJdA5apMuZchZq43gLNppZuzecEF5nmA9qgrVJaEmP",
  "key8": "96LWgt177NrMFKn53v2qW54H2x4ixusrtxuDNDVuSWxGFEYaYFjvQ6Mr3iLvmBVBVNR54HZqiyNbzwfHCXgEfoD",
  "key9": "3XSQkKjguzWbuMC2KcKTkXhwrNd37RHyRJS5dAMYX2ED1k5TcZjfahomtycJEPk7RwKywq6U4VvSccA6BUS7yMLf",
  "key10": "VMszEfmru5q6udVK6fhWK8uZqN3y7JkMNtYPcwoatVCNAwjZxKk66fvZGNQK7Q7N5VjWBZkPaCagfF6YiutWJZp",
  "key11": "sVbVXAKXbKqYH6qbsLSzLNaHpbftD8Z3huYwxYyXAyvTKfzSzchEouCA8cbMAAjpk2GShVD72mUEi5S4ykX17od",
  "key12": "4dSGxg7RgWZDxyCdhqYxHwhkkxPqyi4WmDt5HD5HQDiMwwjQgSaYrKyiUqTCAQu79Xuarvc5NnMNRSUo2todVYx3",
  "key13": "54z1jTYCmdAKhyZ43uQT3bjYtoEDSaNqGSFyWcB8LAyhY16iVescpkKz6e98jfAfK34ADiNpR2mBewpmnmcSHRnD",
  "key14": "e1pfMZNm2Cmxr84WAGjx1rJcGKRfhiMVjTFK2BDwt3R25DTbFDFEDrXhkRGn82aWbuezutYGXGZD3X8bQJKxA4j",
  "key15": "3VjdGtGmzuytRGhhCDGZmtSsePDJWZhwBKKrBNe7xi13J3kqSNaF8B56mhkvoAFxjhJ5X64nFbDjg4Y7N61ZjnQP",
  "key16": "26UDyQrTtej2tomdn6TRNn4nfhBh5qvxuG9376LqdafEWHxwvA8meZYk9hWJRSQ5wkupB8EWELkCV9pYzkRKbxFE",
  "key17": "4X68BisH3Tp4ePB3J1FwfRKtdW1gxaGahAsbM6CUSVacxK79M2eb1TvbKjadsYq1vXcJ6x3J8PhkR5Snj3jVHBHc",
  "key18": "2xpq18ioB1CCqYCpASttC7Q5eVEALJL3yuwrWShD8kW7tju8yXj7aWTnGGWbqrpx5inpHg9RJbhZQSeJRp5aka4r",
  "key19": "2EACZfhKu2KvKbzMn3zfDALT33qqfKmJNzYWwHZpsdHgffseSQBW8cQEcUPDNqNorwBfyKsXA1J6DL7EKiJvDbt",
  "key20": "5FKTms4QBGuJP5yw6unCPkWv9HEjFG5x7PCkAkrfHndJn6REtvqgdKBERcnh72nfUnX5o4bNmFAzwSj3GHn3WDL7",
  "key21": "4MkoBUek22UJvrksSEAtpuVCaLKnBpTezQtVWWgiskby56Gjbcmw6nycLvieyXsFtgmsMpj8VWarCmdqLEENsavC",
  "key22": "2QriSz1EbCBrE4TFaPCdzSDrfPYA6R7u6ZLPqhwk5bxDHXP4HMy9ERKNJuvE6u8S7UZ7pAhbedsU5UktNXzYjvY8",
  "key23": "4XSonp4v2vbTUa2vzUAxuYS7K1AgjnMVvm8gxRr2BhLomeEo3u2d97cAFQnomoEodZVWdgvs5ZvVeq1KYhzwv65G",
  "key24": "34JGUGtYHG4MZWPqfpiAeZnJPSJ3pYfpJsWViSmXDy3mCy85VgwFn8sVM628ReekNGjk3Xfk4bHCjSQDuMT7sWpC",
  "key25": "3ZUp1WBGDhkBhJa3gjQNCyB2kVrWz8xTL2e5E6gwDt4jJ1wq5DhyqhHnxq8uCao6Pw69Rj9uLSMRZRnA1LeJGRFQ",
  "key26": "3bvyWbgqWfYVsmyVKZ8zJL4MwnhZjYdBe2hDAzS5XKJeAKbu1Gh32Gxe6SZdCFmPmz3mcfZd3774WoF6gWzNdSB4",
  "key27": "4vqcsa8nQ9pKLNddeehsyguDdHTUBeWiT9y4FMWMjvjjCVsEHiG6mrJmVpBNKDbaTwrnMmQpgokqcaGe6FfMmGhk",
  "key28": "4xDV89QnndoPSZ4T9GSwDPTSENS9cwVgTc2Pnb9g3BUqsGuoYAyJPPkBoTYZSZwNZ918R2jqRFJHXpZaqfwGGWq6",
  "key29": "2kmD8q6w9JVJMEpz2nWc9v77sUNEHHdEmkyqdHPGdxfEmfNN7cseHx6QGNQZEjt4Dgjhce5GZ5so7aKhbhTc8BSN",
  "key30": "56EnHCGrLp8pmx3adbGZueCoPwWS5JtmtQLSHRHvii3gcS2S7hD1KvjqGS4WWdrqAv8fvpeWCC3yCQ9d5MyTCpVe",
  "key31": "2EEdWTpTdRZXhWgm7H2FcaGaSjdwyvNTVmNt35oSpUsPuePGf5TdYLRz1D3wTLccUsvhyjWGxKseLvFuQ6a5TfxC",
  "key32": "4AxNmhA5xrmaaYZ6SVVD8r1PdJHN9m3Cq5p7t3Wnhbe3Yed5noE3s9dKw7W6gcriqckUFCD16TxEkEHY5qRzCQ1W",
  "key33": "6bWSjFLsP115Tr42FojPz3ERL8Skzowu3RWcKRJHCuuJj7fhwjiT3MzZFwpjc8d7yc7LNzWy4jNZmW4qisoVa2v",
  "key34": "49PUKBna4ccviKAF5mBXRS4f5erqFVhfAiRWSthFCxu6ceodmkbrHDUv5GyYeQqHpDPjQrW8pJZ8A3cQL2ngep4M",
  "key35": "534i8dSxbHUr8miAQkzzMMB7WGUsfM8xaVmT6Bpm1TGv7ohLDUXa3ZbzSXEvVhrkgjXDWD2NxYbpDTE8aYFWkiPX",
  "key36": "3qEGkm3c3H8kKno7WA6pFLdnSJDJTAGBPGbF6JHBrFqRxJMxNhy7hcuhhLfN9wBDpnNQxPigZ9Btkdow7gGi1tUL"
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
