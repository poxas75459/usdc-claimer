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
    "64m25R6h5YfvKj99qArgseaTB582mZr6nV3M7yArujjY79agnYaxft3ufQLutx1xENyM7wetfoCweFCGx2WmMsh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bk6vKr1w4Xyt9scZQnzV6Zi1iMTRr4vySecFtgdkcbvEtbGpjeZdAtwJZapSwDaDeExNHrXSVE6xmuiExuNcuzj",
  "key1": "5t6wCUsTh7zudGrZNMnWhUEQMWzmMPPAsP71fPav4cx9cUWd3gLYFgs382q8fmSD6PFyhTJMfPYyQ7Ag4EjcJh6u",
  "key2": "3Mar9k3oDXcqFCU86CTagzVyzf2grPWRfDnYJ11coTtk8Z1gw74apmkFcK6gyBSKYkm4M5nJ3aW7Sq9Nhc4kPsK4",
  "key3": "vStmqodJJfSgMu218BBFjnpuJ1K8hsZeuaxcLo5HzqDYVrmz8v5ruP4h5P8sArkuybLaNvMeqankY95oZt3JHfr",
  "key4": "3NVkjjHJ6AY4ktAQwuvw49zhbTF3GU8Rnzr7uEn8ugNexEzQfcAhNZS24bhREH7tGci3Rquff2nbiE9D9WR81xRk",
  "key5": "5Vuj9sYbiDdv76nbdHJXG51wRhfo7Hd7jb9FpCDxihWB7hs3CjuwNG5gZJttofQ968FfWdfJwsj23yGz65wzeUPX",
  "key6": "2eXjE3xRwHz7dn1FDH5YchaYtXrqZcQhD7AkWozieHpqmfa8mArGnZMZvbHbi4YYdPf93JQdHLcoHQc9KRYo2LV6",
  "key7": "5URzGXBJBoAafriPCzyNuXHoeGrtWCvnrLmSFR1GXVZ3qmBvUcLFiXWVwSQGh38zoTfJYqSu2XwiD2MFiycZ9Lcs",
  "key8": "5sFnRY9Sf1zkoWbnm7BfShwhdv2EBbESZ7AzPzf3ibnqB15g9RCrrSMju8UZw3FxsCKm73vrd2wfy5DW6yYRbrh5",
  "key9": "5zXuEax4z2wogZZrKKf1FwM9D6epDFHcHihZEk6Hr45qcjhpF8dMR5VoLJQXZQFLzkRJGnsf6prvLBNcuU63XxS5",
  "key10": "62A4ENSDdDJ2QQNurQWLiEp9iw7exNuYVSvnVatWSK83n3LgARwMvDdkx55U7Grz6S1NMFYePedqjxNnytmYZJrX",
  "key11": "67PbnwXWdAMTQhun4UwC1Ukpz5kvDojvSDHAGvT1emthQpWmg8giAaMiZXsjmfDXxJ35X6rsvi4tr5b2wzRg9H1e",
  "key12": "5BqEg7Gah9QRnMCuZRh96PYEKmkrBTwSteVK8m2jy63qp8oBmRorYM42SjPS3XFdKehhJ1KLVWu8UYJ9eoHLKunn",
  "key13": "2H9kAtA8GEUhPMH85p23YmRgfwjLeTkYPHbmoZxCwe2Ljt75i3pYZVdi42oU1gc9woe866aRgnxmMucHWRrRDpDb",
  "key14": "3oegjPjGqrnMybHzpq7vR9t85cTMbGbvKUKNA6oqoVBU4tn1hBHn1vXy5P3Vnbe4bQAQnEWiRXEZvfZqjRpj8rto",
  "key15": "2JEBVZkw6EYKR7Jzt88oeVrneXoEZVNpomBKMkMKdmzMdG2nH3wEPonLmzrVbLQRodusTUwtwTSWLBGF7Naatiq3",
  "key16": "9e4fq5VdjmnjQQToSRqjpr5VVt4eGPurP8FDvWcBHgjZ1QjW5KpkQBwR94LUz8dCQtNwBtATKXjpNSyZq3LL4NR",
  "key17": "42X7iKL2YDcrpo6z4tXVcdVZqf5gWsiPJX27jHDEy35sRN2N3pdHypncoouVxxdJmg7NY4D3VMy2DmNzMws6AgEM",
  "key18": "4kzRcWMyBTJpATCM38mTPJQUKib4Ru2EapoHEkjcNCgvN34CYkDu76cM9XkjEus8fhDTFHQqLhHEQ9Vqt9ueZ5BG",
  "key19": "3ft7TWpmKBGKk7nfqiM1L7h35t5zbJZohbuTq4MQXTfFBkdeM8VyVbjuiPS62ZCuwwTQscz627cXGMHmPS8kGFfP",
  "key20": "5KvTpkzcnipTcn9EokbAvW5BuRVQjgNiCqfh2aYAmEcjVdiEho6JkCNMg7AJ8jVvVhYUanpd2CWimk8qxz6dKQmR",
  "key21": "3v6pMQUNPwQM4YVCqySoMCDrsXVFwiWY3hRTm6Fdd2zpdXveiHHiJudLFLuKdztTgF4m59YDsKhiVTUKWexd2viW",
  "key22": "urzU2BdLajcX4eJj7SuGhkfCBD3rrYSAF5hLewB3SqcnyKXemh6DpoDuLoEqyMrwWCU3fBKg2Mk9xi8tx6fGNN9",
  "key23": "Zzp7S2d2EMp2yJjtyo4BHG4pSFQo7NgEDKL4jVSxVh7Kd5W8hep3FTQNEFNhcEZ9LvEC7mwpgLFtJ22DoAJ5yxf",
  "key24": "36m64JADcokBvGx2tv3Atz9EwrGvtRBzcEKPaAxm3pWEzfSRC3bqTeyn1ypbSjKpm1yyeaotaYEudJasB4NL5fDZ",
  "key25": "42Nfpo5HAwzNgmK2LjJcnQ6isZztkGCQDL9kY3jj7mdRGyNxo7buJiwoiYUfLn2Eeode7qYTPCLq6msBMDcAB4yv",
  "key26": "3EiNd7eCDroU8sMfk3X8ycDwncnJepiDaHrrhGZtmY2Anr93oEx5i8NUQX5tS57tMbsM4vmZ3XU2gtPAsBF2XYpQ",
  "key27": "35y4VAqz4v9p5QWvMY9sj9L3QXR9YeEg3f1EV41ZZhUmeNDCdzq86zVkqZNQeuCRYWj5e1J5pEmcCDyigN7SYSJP",
  "key28": "4zg5xRKvNX5oib4GBxHUoWoFCUkWRcjWmYqCE4ujTGxz2n8yQyrzTqMVZeFiQ2E6PnK7gc7qRE3kJGm7bvJv9K8v",
  "key29": "5xACdfYz4gmXbcrkGeLa8GEKNwbksgLHibqbi4uBQowEizpgiurwcFBnTDYPK56dyKB4FCBSAuHsuQNzHBYKRtuT",
  "key30": "2T2f91MXz2PyQA6Dcq6iLQTAEAoDper2VqExHcajzwgXxhq3mmT8qXsd2UF26D4vFteX38kD9LKHWgY2w7xQu3BK",
  "key31": "5qX8FVM6V9rNTTR25BqFyQKciPUnK38sLGVDeZH3rWwsMPMQ1sHzW7KLAPjiKGmX21nhBrWAtABnuBcpRwoCSSHS",
  "key32": "d4yzCzNbrEBxdzcrkSQPivakyrduXHc5XvrBKEGzN8xKT5mMfn5gtQG5jVWuobM3jkRy4Um3STK5D5SB2KYyYgx",
  "key33": "tYRas8KFZpZyJxYbBsefF11eapBmCgbuo27poSRBrg5GDZMULLnkxrwV6LrRgfitQUiXbsSpqbU2VrpADK9ZhzH",
  "key34": "3zAA1B8i7dGmh5H9NmhXBGuXXpSVnNwyJ3Fv7X59UvSaPtrcXWMjNXoPJYLGgY6BBNt1AccRSEGUVyu17718yHNg"
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
