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
    "7jPumfxQV9J3bh8rw5FQzsg5A6pn5JgVnjqNQLRacYwbi1hWutmjDBAQsSuFBF1MNpU6YYPmb1MXCoJHJCXTPai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h8WWhYx9pQFLVmGjcEeuTvw6VLmvFfNvoNtDtJP9a4z1fCX7XaJCSJCRKQdpCpQcbDqsnNwAHg1EZ1fd8cyZCsV",
  "key1": "3RqTkHz3Lsf2gzxVhBzL7bHHUL44N7vGQiCNiriF58tTijxaGvYDjLheuDyewRufgn8Evhmq6L8k2AYfNeR7wmo9",
  "key2": "Y7CPZ8mwpxap1xFdj9UQDF5toEfX27QkARsjSK6Z6NPbmwZFvMkD8NPsv2vFSD3dzaGDnc3iqmUYvZPCqScLSdp",
  "key3": "5CR6LijLzh7LxMDMC4VtawhviF6Fa8Bzam52iLpTiaSwaTavnxEpVDRJsgqdxGsJ1c7m7suYvyXsayYJd1iC8fms",
  "key4": "4o13xZdD9biyUQ8KjGF58AjYSahkspMHHfX9NLTapex7Tkqy3VmqDw8A7La66z6CiCWiMjpMH6pEddFiHtYRwySi",
  "key5": "2TPeRHiFUuDsLPDpfY7E26hu6kJWzqZTnRNJXkx63JonH1t4kUGCyjhbuP8ToSgbULM4YPyiAbypqDj6r8tVE98L",
  "key6": "4FqF7kJxAtVGKUUF97ekpnqdBCGcUkLyeVQM4iorGLxLMnxSf2fUFxhxHeMNauubSJZgCc8rvygEqsuCknGvCA8B",
  "key7": "5Sa1TdgHUn2BRBDL5PuD5L6Z2PPBjLaj9QahWLQ1vjUQYWDqrLEVb5gkmXcahB4RYnQgu5V5rR4KPHtQ9ZaaLtAU",
  "key8": "8HvZhL1NzpH9MENsNsu9ibDVL4gycVWFo5RcDjpy5xzEmTkavbSqaKr9Gk5fhHXQycFmfPRUZGFbW2y1qm2ziP9",
  "key9": "67khyXGHcr86XiHZQ1LbuVfCrcuP1tBwwYaiWMLTHiY2eSqgT4Yy4u4KBJwhBqVjSKHoHvwQPac7T2bvU81W8Yi6",
  "key10": "1271donHmnLZ5kpmrV7poXUkv7Mr28hrVDrvqFXjf9Vw7CgZeXBySJjNAhahty2x3x1PmjPARX7Hv3AFYGZymF4h",
  "key11": "2nXbK3UbQY85H74WDxnWHm6AfiJZhaq7kytrmfVX4r6DUecZ8hEptcWebSWhQdBZ15BT1DQNuPvwXUQgagutvE8h",
  "key12": "2UsuFQEhCDqDTenBd7FT4ZTD6XoeeMej9iRYAHJGJA1tNM2did2mthUshdR5YbrxH1Xh1JoT6FpQwujh2UeFQNkV",
  "key13": "3H7564kSnMUZV6TpS587YBcuvKwUvgMfN6E8kBLPdsd59gq41qiurhBhHdJVoaESMCxPvtUfHCFkSNGYfdPuBtCu",
  "key14": "244pqWwktVS6ztEkvFBze8butqcbQ1p2GNqHTgELfnS4rKefU7dQWTt1eKUgZHKfRL9tsWVNsiKpuV8mrjXRLXTs",
  "key15": "2thP5iv3YsSQifrcgQh39pg2fzkiaSXwNJf2d45UUtca7HHyAG6nhR9eJVTnq2N7fdf3EHLQ1QwZsoTaBUmPk1wf",
  "key16": "5i6eijRbmmwmmLcah5Fznv1PAsY7p6HKYrxfWJxUae2driotUPacTJSVjwv89unNozVzWXGZ8TAAbExYCW6tXCbE",
  "key17": "3HE4pjWdd3hxsBsGfFcUKRHERtqELv5mEDJ8Mp6PDZ7iKEtVmVCCrYdHM6eDD6uVWXYckZGYp2aM7MFiib3nRchm",
  "key18": "pwQs5VdhsQj9s555rUdcEdt5YkDLogAXCCSAztkCFUU8nh4mHbhAFvUSEPYsFW8H2zx8o3J5Qaq5Um5vNvcqQch",
  "key19": "2F6bUmBixtRogtgdu5MT2ANVvXYSxBR3Ywn71dKRd2xXeL4uohmRRYfA9QppfKgnAgo2kLngAc22qUY5jDCq8FtV",
  "key20": "hFbGZfep4vtjtr8SDXpT3M1BaBHN7uXR2S3LTqSMoDSzaqmtGX1Eea6FJuDvTzfLiuC7TJhHsVGJ7GpYpdV8H9v",
  "key21": "4v1gQTchcrpej51mVwnzFDX8KneqPGtfo4dA1mEA58cnoe6tDFMYL7p8yYWfi8HGMbix3i66zuUCRJigFRdCKyDo",
  "key22": "4y5rqrePwsvuFnvhbEVRrgCVbAM2MGdUxJasR5Uah1zWBWMgUB8riVvSGP9yE5LpwAMKPHdTyHHDKTUYSMYVDoYi",
  "key23": "5tEkt4FtqhKiaz1Xjbrn3QPcEgQoxP53urhCQMLzMRchs11JpEv4Ukb8xU435UHwKqqzB528YuiYo7xUR8bo9Ygu",
  "key24": "5zhCBFHsPYBsmah2ZPKpeMuo7ZHEjHeChkVExZxGs5VYdjVAnA2SxXmMpqQS79YhAbTYxWRVMbH4sVgZC7P8qsyC",
  "key25": "3y2JiQQYCm8hnhjTo5AsuHxXkfCyL5YM3n5HH7mC7NHrpBmM1XJYiB42fDNba61DCfuCjQTn7Q67nxZndAEoKsTM",
  "key26": "5PQfKM2v89WCuDpFXTZyU1dr2EQGxpq18NFK74zGh7ouRf2y85AYc6CPNxtdjCnyDv8g3DX6Gz68LEjcFimG98Ge",
  "key27": "4hxugWSAZnEdPhiHsQcow7X5QFTG9hhq35e2bA1TsZ9uMMBPRLyv9pEBzGTMwJKUBoQsaGFbeuZJcijoJwbCcCfp",
  "key28": "4nNge9TjH56pphaZUuSNaCPLrfV5PS81QKdWwEPStJdXpdFCS4xKKa6gVyQqdJSnqJwWxH8FL8KdQQYxWkSk8ZWW",
  "key29": "uLnCtUXRYex85AEfr3TkuQtZ21a8cK7jWhT63nEJWEPCsF6v6eTfCaVhZWgjVbNHmyTBYn1pvjM6f6abZMsoiZy",
  "key30": "5ASBJCJtdSRW8xMtfmMx1zABy5WqVuFerLE2Sw6i6uLjNTPVJjcJA967e1ALQLiPUpWZsCtNGGSA7ZmvKK9KVfPS",
  "key31": "4xMnZeqvXQHGFQ2McPk2JQwf6XU8bKRrhnhHce4st7j8QyqfbgHRjWiGNj4KB2PNoAMLahHz7oriJxBc2Bgi4Cj5",
  "key32": "34FPj3VuYYu91adpNa8Y7LmUN21zFKe5UGhPZuDhFa6Hd7AjTyHGRjXtsZHz4g22CD4RuSFNPxr1Cf5ZqccgFVEt",
  "key33": "47sykGzXoCFu4gDwMYWt63bLoxHLxSqwhwkox8cAFz2yXb17b5bkjYFMF5QeopW7La2QsgZ5qV2TVVBwWu8tRmLi",
  "key34": "37ZyKoUBydyY3CKG1qcKPu5Kxp7PsYeuFghAPT56e123siJfir8YLGbYEBquVAL9YmZ8RsWqnEFCAbWdE3mnkEbe",
  "key35": "3oM1q1JRyxGkfMfZM2cfuJTbtASntUk5cC7oVhdRfdrGGGofKQJojwhw1MFK3K2VZ2tUDcTi2CA3XXY59YLiRe7z"
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
