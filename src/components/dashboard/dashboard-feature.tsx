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
    "3TsyBiFXXn91zRs7TR2XZuAqjsLbfPWBbBwFRHpnLPPUZAPgJDc5bGS5LiPKZHiMt97TxYJQZ2A1cKd6oCr4TK3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t4QSjCzBPCN1BW2DbkjzDFawQdCXtg4DEt4nG5ykQWmH96wvyP41nShnnaVkqB4EBR6w98hQ2uro81cHwQMFsfs",
  "key1": "2DMa2JiQdC4VJiV3DWkgnxkBMmDYtzzcPzVLFo4BgtsKbL3tMx8KPW7AavEsfgBZGokUiu8PYSqS48zxtZSUy75h",
  "key2": "4Z1AifZJdYkF5wKHQgtRamZ3LRuHdtJhTB2vyjRkD1RVhXAUmNeorx5g5HcKg921ap6Gy3sTn9prZ8tE6C8n4Fj7",
  "key3": "2unKRwp6LPMnGGvZVtVnxcrwqxnv94qRC7BVNBiuz7A1z14a4dM5wnytkaMtmtnxPv9WroXcQu3cUJjSMp3ojof",
  "key4": "43EpaXxDE5ZiGGR8yKjnFdTWy6uQePSRXgFtof4PmcRcjTrLcsZpVSvae3DUyNP1XgNQEEZkmKNrAkCHbN6G3Vwu",
  "key5": "3Dwyp92zC2RUBy2hA6CqFvxjSubWt5vh3kpocuiwofKjfgmh1zcknP4eedzLcvnhmfPCJPVpsaJK5Y2sbuMUvE4U",
  "key6": "3iCwc7iafPhmqybwmjtojzQvJpZNCxy3cT4UAZyrLhLfDoNdVWrYychXUD7gJRJMgrCpmt44nCXqd4WzKUwTKL4Y",
  "key7": "4sjvopeXk7bLbRB4DDtNJdbMzQJcZadR4zFpaNXrmnqH73qgQRFKS4fXW3GyYazRjB2Aty921DgEUgUoJQjDSXax",
  "key8": "4zk24vfXVYjsriNPYoRDNiiCPurDpFoBTyhSuDoRe2kKvZEEqYq6jFBGdmPzRYLnV3wo7gExTcgDQWkVdpcJtXxH",
  "key9": "4FGfdrwFz6NpxQkFfATnMfa8E6W4r6CMfHba5fwHYftryDoUQccPCZuxKA6j9j16Rvta1h9JHUF1if3GqZYVBk2T",
  "key10": "5KfTh4umSNmob85EgTpDuDRzJL7FuqX9sejCrzhumSJmddMEJHYqLLvMvsmRYoZPT55x7mpvnYNPySDyYKi7wrZi",
  "key11": "HHoGrhtUAnxNA4ypeKLLYZusn4eunad2Hfa6YenBHNvUfr79TZnH8VpamJtB2iZv1AFUMYfJgX72GmDgzC6MDMp",
  "key12": "3DzgYMYJiGf27VTHaq3H9ko9DqpN4F6BhzUayh7XcyB896veMXwg1TLJmHFvk4UUkR6Bf3EHDXJKZKNemdWwSEG9",
  "key13": "4wvf7uC3p9KdRMXcNDztYTRHofiqd5BiiVo3r7RBq4sdb7SUuD1HGLE12fo5gbnJ52rBGZUcMK3iDrXN1esGVUd7",
  "key14": "4HsxtFKJEyXSkeQ81F6GgkMtcsD2WJ51huEj316iPXGHBh7KEoNTh39JYicpAbCeA1NK63jYaZBUZ7V2JQ5HKK1U",
  "key15": "8rHtTWBvxKmfMwbAWxMCFKu7zUkaYYJFkFLVK6M9ULgj2YVJgMkyMZrrnAKTW3PFQDtPharw3NhnfXeYeXNVVqn",
  "key16": "4KC5fBj7NwzfsxCWPmJQaanPoEDvP9oKFoJY1dGKXcr5v1LKirRJxZbUacnyyRXb4pF1oJNiPfXwSe4mg1vJZBHd",
  "key17": "25ZCN5vpvoD9hZ3bUzhTNXFXxqkeechxjNHaB74NL71UDnwPyXyRpGBq1AuWLwcWdpqZ76KmGtom8vZNbcT8PzFh",
  "key18": "4JD8PFq4h7iaAy1n2jam6F6shMZqvC9ZooiM3yc9x1fiPKtKC9oprGiRxBVEdY6UcxBZwDaehSa3wkUUjsaWGste",
  "key19": "4bwVeRGw1mJAM5i6qr1hxvaRd6aBqvc9Nyb4PQkgT7XQhzszrzNRSazwdHUGqxohwQeULbHn25vHzrjVK6dtQaXE",
  "key20": "5jHvX8d99qeyc49naHnvCwZ6Jkv7bWR4KsrQLVePGy8Vpx5Aohd7AEaSG4eWc4YhqZdwqVV914a2M7vi9MuVsib2",
  "key21": "5fBav3EcdttF4q1QFKrR27AtiLyrtiaHZYDoLFUug72ruzBtT5aaY5YRcZwsdhd28EHvVkeypLwUGnq2KSYqhMrK",
  "key22": "z7mHwSrapUAYu38JKcAEc8zjnMcjNq3H33pGLZ7czotSpwHz17ahdkdF9AdnAv694pRqHhZx5RBjizCQSjLMWfa",
  "key23": "272KD7WMq1DdEu7wWfesgJT21ELA8DixwKuiKGypCzLxcpuMxiM9hEyMPhNDFhuarwVhgZZxf12VwzDZu5HzGbya",
  "key24": "xqsjyijfP15bUKAmSwhKRKBAwSh1gEdhGAdjyaG7giUKZPktEWCA3rT5VKLZZkuSkzjZhfeL6c7WZKeV3tvJp1r",
  "key25": "37RrRJC2L3gREgLwvAfQ1mi8sK3sZ7MvDQxp75hVgLRcpAMjVW8jWnfN4NsxWYybSwkrFWDQAaJv5nd4JRupmYpR",
  "key26": "4dhE9g9fjLrjFwpdDsuFk7mry3Qwy5NfEVN9ic74avED1WX4QJ2rG6pb8ASGuAZWm7rQkP7ZFXwz7KpPcDLtHSVe",
  "key27": "5WGbZB1qvakkERvi7p9ehs8g6BcLgJ8JFFkTnbNveCyiEMjz74ChZBR7PyfqUpLbf1KFWJk8nxHYz88h3WYTmdyR",
  "key28": "2jWkpt2awRXyzD29JQuhY7WMfVfxztHKvng3gKN8QziWwV6spzPPsNK1ryCUyavdp24sVnKRQL6eDTKKD58SodHi",
  "key29": "2b4F8DBJp266jWFwJkMAi4cgbyvvHVKckaNZ7NhKSp7KFpHaXbFcHZKrAQF4e23VLj1Cc3Cft2yMzNijNx1Qfci2",
  "key30": "LcyN7gUbttjAsnE69rFhEP9q6QCaKL1mhKN1aRofM9V9r5jSWjQKfiwbYNWaYJYhP891FBjJffBtTxkJ4ocKVrQ",
  "key31": "5jHPwtbZ4eJMmtTvT6Pf6sExhYqqvE6Suou4cJjZYBhWWAYzSV4DDp7bg8GKbiucFfaC6uL43K5e6XJCUdp2v55S",
  "key32": "5zHPSdAsZfa8L8npWJ9SdT7xqF6R9Bhi61yVC1zwAMwHq767YDe7BvKKLwNjcpyJronPocxgPyM3P43YvuQAgKnm",
  "key33": "5rcDdABWqUvEwrsBHfeEkD5Dxm5QkxnrxQqkBdgPNYAoKGm8BZ9oARLWG5fdBD9xVgU4tB9ZqMChei4vaXSiygZr",
  "key34": "5cBHe37RzdZoqbCa2Vmb1jjAmAEr7syktRecbYqZeZpceha7rR8wnNJyuG6hdi4V86yqm6WfEw9cM51BLm5gvMxE",
  "key35": "27EnmtoimevkwERW9zbmHUoQ5Wo5A9XLWNQbRJaLxzaaKs8kpAn6Uey6HDQqhmmMyF8q1ybP2DuucNz3ZBCGsHz1",
  "key36": "3hgoq4WhkaC3VD2PwV4mhrwndo35KPeXAyijP9eYMubLCgTNyM8ULhKw14U7u8mg5VBXMG4i2eBnYYybATg2KZvs",
  "key37": "28FB4kLG6hMRs19SeMxpYbooNp5sXZhWDMjk6CXh7S6iTYBoDjHhEtYNv1aScmhBwBLZih1HNiEZgrhtXmQBAVz8",
  "key38": "gHPybQnm2QE4FpwxZM8s1ozD75hpyHoN6qXum3JvpZUQyRbJ3nQ4xR2b85jGMpMUsKz8Qh6VX94cPwMX3iuRcdT",
  "key39": "5NmTvMcPwProodUrBcMdkXPw5uAjn5MDyTYFkeCQzR1UYCRPQ9USt2kfzRW38YnUzGcvFe4gnRYBNRkq2ozxHnUN"
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
