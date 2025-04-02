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
    "4dBfevKuc4hYpVGaJWUy9c2CqqkB2gmoaYvCcYaxWG78B2qpfMTybtYuwfbjgbssCXoaguGpN6eYN7G1pqQKxJ2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HrWpJThrZU9kNJNu3pPD1KRGrMu9vsbTX6zxpuBdhmJvtptj6ej5RD6MVbHmhhhR4R5wbepnp6tC5vwTZG8a4EM",
  "key1": "2wbYb8Q5jifQKBwD5L4xnu48bKbgCA6GCbC3UXEKZrjdgE44vNbn4N2XbQSU9D2mUU9PEXdnPTT6SxnEVgThZwd7",
  "key2": "348WNrgsgn6oTFWT1hz5Bat5QEjaybSesyV9n5YXMkGmsC4xLtKviN1R8E9V2tpybPt184ZCVj6NLUxYMYH1M3sX",
  "key3": "vLrHLhJSeeeEn1wUb1vm6DvcBbDn1ZSzr9cnNCQjrRD9fSSup5CUFru1ChxCfTpUDdkj1qS7KEfTg7gbn4qgbao",
  "key4": "49CM6PZmPXLP3AVkQE9KtS6fHkvTc3R2SSgyv5bNavgjh4BzTTA3HP6aoizhoy9M6kuw3f2dhGYBvVthyHEfohpT",
  "key5": "2tqTag33MLtgWPwFEHVZKfNCN9GCfnzPAPzCCYfwemi7wU9suGfDvqEQ2QAZMutfe83bEpzEvUCaAfGcAdZfMp5E",
  "key6": "57mgWRLKXTH65FKfoQQ3dHxWS3MoLRyu63tefsdiUWZzVK8ZU1z4gqmVZfvzEsNus4WV4MhQcoaoxvLYS9LcDq6h",
  "key7": "2uNZ4QUmHT6YmwLKcpTRhMHEJj7XQxkNpqpomY8FtxmGW9UpD9956GWC5uMDwDBGkruJCQ5A1UNHYHj5uFyjSSPP",
  "key8": "5hMwZtuJ9bauo1F8YiBrwDCJB8xjqTdUY9scNL8Qp6n2Hua7PWM2kCU7CipZVo74zNVi56CRMgy2ZXsEFJ1zTwh1",
  "key9": "V1RjcjUPWveVvjkgx76oZcpMsjgSwVCZ9syeVVmk8mvNwye9SovCZ46eUtqNQaDMxwvrfdPAjhUt7i8QBt1vmAN",
  "key10": "48GqtdMydHjRkSpQHzTP3HxnBYbmdZ1W14AT6LMjSo11i7Cri3AhQ5UMZusb31mLuaw26w199jLM28fW2FrugaU2",
  "key11": "2tJyUJ3ZRJk2YWv6QE6KK1ozNmc8pQ5qzMFHuAwk3ys3Jc488yKi9watUdzwT9rw5nVzGb2QQp2xcqNJQsMzMcBP",
  "key12": "SjQy7TKgkuqAZnKWtbPSvCcwWjxsFMjHofuWY94uUnYJ21rc11cYmudTNDs329bgeR6R3sqTbNXyfdwvKqxp8KL",
  "key13": "22VRmMKC5ZY87ntu1q3x7UM39XxqHEkJbZU9VSBMp8dp2q6Zw3g8B8EmugeFT7WyPddaR3DNp9jFKFKwfqa4urNg",
  "key14": "2W7K1Kh1hjhutBDwtEJd8wwF9SNxNXfEvx744nzXaPbBwpUmDT57SmgQHgRV7F5ozN53Z2FFA3UwNNiQBmbBWYvC",
  "key15": "aQEPxHz91LaKMv61crUxVfRMhXsjy1UsKNrvEEQxEd1Rbjr3zekyno9wDqocA7PS8iNYtoMxcA31yB2tQ7adB4X",
  "key16": "2wbBsjmphhv4xX34BaKW5NQpEeEP5bi9dopHp378kfscM4UzReeNRM2sdkX4b44DVz8vxZCLVcBZUh86Wypiq4BK",
  "key17": "2ctS4z9z8Ku6anGAvYVovuBHhYZHor9MK4bcdYU6UydwAxUjDbiR56wcj8QrwPtH3Rc1WCWgTFWFkSjKVYknkbDS",
  "key18": "3WxuDL9C71sw96yxYT8auLYT13SwChkBgjKvjsQk4Z2iUP4Y9BvEVYhemaMzyaESVDbMe7UQinX5x7AnYKmbcVYL",
  "key19": "4woSoz6AUwRdYyZZ8wuMXv9NEDcEzWiszDfwZAzckE7RNnxQ48fcvNHMaNVetoMHQDKTLq1iGFteGNQ8myf1Gyhy",
  "key20": "4nEuzwDpvXb9UESXKxuDZRLP1Lx2D1hBXAgw611cDTmStxTRtKcYL531aALc4XZD8gjPrAeLacqAbFkQBW9aez6j",
  "key21": "2Xb95obqDPiiWug1sYQunLpjucNq5C9c1kPj2Bo8Br1S4yM6k8WgnT8Rperbks1CdRNDKrT3EZPq3dWz2ze7cZqX",
  "key22": "DjJsDkLh9RRs9ASdfxp5aDGzpSPRym5T7u9YQCmi4n1H9AGfzc6ZFL25vFqnAPBvFZYEvBgVS4eHUUMoNZwQtqp",
  "key23": "3tWUKKBFha1SwWWkJX6mfJYrRJ8H1YJp1Xmq9kRGDHQtpr3Uy1We2rvQ5NbYFNSqWbuiwAzAQ3eGUsRrteGTeV5K",
  "key24": "4FghD75KmJWCoFkp7aj599Ruiv7E46pTUnQyp7ghmt4XPJ8XfRaJjD9zbTMXYK4E3bKPAbXJWFENuL8QvhuFfcZg",
  "key25": "oK4xWwyHJGL8uLCjNtqSoAnxfGW778fxSxJZYdAZtNr8pA5RJQoiqAGB3sDvrYbGJGfjpqpyxLBtq5mkgi4Non2",
  "key26": "XYpoLHttuHTwTDNU717etnUTTxsakJfgwbG3wzTpCEyzegVrZHNrq6BnU3NdhGdrQpMpbkUpEkHHjsjmUFuHoeQ",
  "key27": "4ArnNjxCLxFjadMpJFajBgf89qvdLPBoqqT63xihwHhEZyLsHUS5p7pav28dU3huCFYqSoPKRgBcVFmLGFDPSrLy",
  "key28": "4twi2aabdtPLbRcCMNNsuTSBHdmCeXJfvQ3LbxA3b8j8MdNtmUaVVfWJkEEUG57f9RVipJX57WGzXta8GF6JxTBs",
  "key29": "2AWCSnLoG1RHgUSsazZPGBYU5pqmyJJYWkFvkndZ37WVXwshCJx166fXJaSRvymxxXLSv6E3xKULwWyNePRwEKwK",
  "key30": "5BUSravBhqUs9A1ta58geTaoML2T8919Ln6mXENmbUBrfaUc5JdPZgoo3durvbhzsLKjfQwpuAdqnfDjmXa4a6eA",
  "key31": "4AAkUrakMYA3xTvgN3wAtxxvbtqmx84aZrFA2dtfNcf9eFttUDn5hxPgHC5pJDuvndpYmUUGdyzH69bSVg92Khad",
  "key32": "FNiDopJ6X6HPQeCyMnP8P7G7b1p12Bf1xKDzSBUR4mxGggBRugbR3qBNMGKiNXwRz4GWJe9pfm972PzCgwHhmK8",
  "key33": "4Q8E1TJS9JYfBQY4MVw8J5UM4YnFXzN57MV8t3R6A4ap7PcfPArHrvLXDtZgivnru7eBK9w2f1kmCiMsxaz6s56n"
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
