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
    "3mr7dHweTcXbHuzmyr1mmBM91zawtfaiQYgsLR1GeyuyKcDD6yG12WnzFU2LtvbNqsfqf6rJuWBwW6uK3ucmtjEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34w15EEMgspTyjEtHgKH2Z55c6aj5LtFp9jrm23AeMDqUv11pcgKNnfjCKqe1AQ3LEQ8w7NCvj2cx2UuGfxqWy6h",
  "key1": "5w4RGUbdYoXr4CeCu7xGXos6YA6jcXS6Wmw538byrerWKEu6KpfhvxmhoShFxZVkfTM66RsSeR8TpS5aFS9Y4wHu",
  "key2": "3DjwqLecJD8stNTBzpzVGbtPytQSkYL3sR7VXc5uQiMrFGf96Ybr4K5ym6mjeBGrDoNo85iggeJQjCaakNgdKkmV",
  "key3": "utvVpanpmrC33sZ9hihMFgiyEFPhCbmTTvuxU3bxBxvCCHAg6ibxFxqk9gQNdmAeyVuLL2ByA53RPih8dHMKDdK",
  "key4": "7MhBCSMVfMdhctQ24YtwSNnKrAAW8MKN7yq9uX3wfastwcCKJcKcHKu9JNCLQxHLaRcr9VWdnDmzaqJ7jcko9B6",
  "key5": "5pYwcLL9x33UkQo1onjSvGvVuWUNFaTQDweL48LdjZH9AdbjdppgZrKCeSJJviybbW15HfHVAnG34FDE4Un2RGmr",
  "key6": "5spYZZasstQkFJeHEv6yWQ8zDqsGtF58smuyGuTywwHhHm8qXG9B7fgHMYJCnjSQnDABzQjNzFyqgcMyQVDuNTX3",
  "key7": "2oWD8NS1NBG3oxiwcGYcrymoARagtDghbyUrePvZji3dehpBumwdWzDNEawWMrmpzpKW3ArShxocqn2FMyW5CJjZ",
  "key8": "493AT2feBupdPKRBjfBUyhW9cA8Eo2Tm3zfVnd2VQGaza317ecz3hffscDp9ryi5N8mmbumBMRFka3UZgAfjDiX8",
  "key9": "RohUmgkmAWFXV17C9X4v3GiaQHQhiPMo2nUSGVtx2giQvGD45fKJdE2L8nEEaux4qm8V7nQ9pwyLz8AZhvYasrp",
  "key10": "28RMeNWvoYBdRBVWmjoXG3W4aDE9U2Pc8XCYqeSBTpuNH4fjSwU95bsEbZ9YLGgVUe3y1knQabTCrmLnsNCkGJi5",
  "key11": "3xcoPp1zsw86pgvV7e72iuzkYZuBwavWqhmbiFDTVXRMGyHAL5XfBeWp3vnftHND2XvseR5ZhFHtktCQsvYfmAVH",
  "key12": "31aYVHWXPRrkh6pxnMKFLTJeeXXWoZC7XiXsxqQmGHnVF44UBUmmDNpJd48a1KhzTUToU6nGq8jakDU3sAq9JBTL",
  "key13": "5Ahjs9cK1r7t7JgnGHQnUJav6wbtBTQakZXemnvy58JB81EeZFc5SYrjU9vfKbjuHPDy63FCmb9E9XW4fJaoGBQ8",
  "key14": "67NqQkvJqFX8S66oLifs9wSghWvXJerHPMNTwQmK8WRyefeoGLy6bPGBHFvKs8bPukL5DZ5RopKBzBV6oq9SLdoB",
  "key15": "4ohihVHX1muui97XicVzswga9BGddeYtd8W5wG2HeEbWGKJNdQypYdRDpHfC3zWTDBPaRWyvWNxTXd4MvrsZWPZQ",
  "key16": "4wcuqGBvyCdiYaMPHd3aFFeZga21fyQbUbsJW1yN7s6RA4EAvZBvZuNp7ctaYGnYEJPJErmUSVKG471eVj64QmQm",
  "key17": "ot14FcgAXbTN9wSiUkPbigkpcCGSqpngoZLExNXSJF9XPGwVxaYLMBeMKkzNbc3cVXrkskjWgrMYJAEXhPeyKQP",
  "key18": "4xur4vRbgcHSeJSMuBUnRKM3iTbFkmS8sCccEiXbdGffdbkbcomUAAnnpz4hY7xfbrw5mjSyvHgPQzayweoF4wYG",
  "key19": "3aL6Zrj1fTt36EAT8G1X4ni1rBENmQVB3LELnNSWtSsJbbheeV3H9Fmb8DYJWV9gmYTTa8nVBzthpDxquhM5fJkN",
  "key20": "MVRBynMxxck9EdwfAp4uoWbzvtkjR8pLNRup9Xn7cD5rfjCSS8EXhtjMTpATfBghBQxLym5rB7AWDeuiC6dg1wb",
  "key21": "5nRmwmiDYxDQ5woyS5mZ45CBSYLykLDLEdD55R7qziaZjmt54rpZpH71TKsLZGFor4o1GTQcNCzzVVpb8ReoMeeC",
  "key22": "56bnJp8Z7uc2SMTjrxtdSdPWgF51rwbK891AqqqZoTYCstr2s5sEbuN9LBUFQFHQSHBrarDsivqz3Zzs8SBsHgRv",
  "key23": "kAX4Urc6B8mu6aoJmee1DuuWaVhqKdzqVQFEt4MXQRQ63yyLotDfMKhnZBpNCCXvFa1XsUXEK6ovzoQqVJ9GSC6",
  "key24": "xmXXvgwtGhPfb8ALDcLaqLwd8byyxpjJYHedrmXjfuAXXcRp1hUYyhbhWzJiRYRYHzG3vjhp1YGaMZJMrXP8bHd",
  "key25": "3gQ5jr3FAug7CT9ttvsUcJnXvXXyRpZ359tkHHtV1be5YZ7GGzQFWKbbxPU2RLHSQUVnpQeAVyNDi63Rp4oereUQ",
  "key26": "hMi9uSSsX7wEXzoW9es7KjMqCucLNHkoCorAA18rw41mGrJ92cYmvTDTKkSVh7HZnRCReHLnyT8xaKPkekMNwfv",
  "key27": "2pzRF7NCbFHyQmWJ9vCkDzeP6YJNvKV6acvrDNa1pM4gff1qshVA2TD9A4HaP823pfCeUKyWmyPRxxfdMLK5zPeL",
  "key28": "o8U8tD96dnh1X11tvfsF2EcJv1XXTEtnbn29RiSZi8mWS5iuGB5GEFFzow8VBn6Da3bc9QuZKGZzVBCTyJidFjD",
  "key29": "4ovoJD6UPkYoe1HQdAMGeRywRFuzwCPk3ikBjbzRkbCUY6q7ECBYUnGzh4ZUnbX5UZmrQyDARvepFH9xeQxjypsS",
  "key30": "3CPGgDY1EeM55RiucKJF7h3Hzv7yMGom185jv9g94giAo8AVTXhjoAVCrhN871fPYq2Gc1MgAvkUufuRU1Bn6QWK",
  "key31": "2HVQx3bUsyRhKav8Kc5suoZWAKL3WvYN7JTTfyc7KLCKSycHPDF8ndzHKR2dEH2yxyat4CG6W8SMDy36SNZLTkfz",
  "key32": "2PPQ2KkrWdiaQAgw8VhTxCRjVx1yUc2cdYouoRBtNJkXHbmw2Qopv2oSJqHNULtQo2aafEAaMpiBdYR2XNCt6asX",
  "key33": "C37JfHkt5eYCd5XGxHYmbJ3cf4G1BnTkMBiQmEV6BSXphEio14JuCNEs6rNP7DXBePyZAs48GWgnUdNutriKhae",
  "key34": "2tWXaAdvkfeus2nm5K9XAB2yJqfMVyDnXrhVDjjKGzzdvYcVpxW262ByamAKFiHjc8ZirTQ4bqaeuXCBY25UoRRe",
  "key35": "e6ykgmwgBn8JgeALj2ShghXcYW86NVkzUs77RqwRC75MoBQgaCAAbdHcnj9CewN98fJ1tyqcNnbt7HgSiSkhWVq",
  "key36": "5EuP1pZn5vBKpwUzyMhdqbyCGnH8rTDgPUyTHFLXaU8Qcot68d6eg5e7eZr8yodxRxLNKPJD3zYufHwijBFqf4p5",
  "key37": "5z7fygNTraTu4s3A1heFa7GyyYZQgKWvC24T6txYL18C4kfLaMHuzup4QnzNKH89nRUwV88TCEJmk9BVZAmxFd5j",
  "key38": "5SL5EAtTbqmdAVjoUHq2JoQ2UT8C9HgLmk7zHRU6YjG3P4NTxTeXnhaqGHTMnf3d4hzAdQnhRTUwEUwCPRKd5QZt",
  "key39": "32EHRUPjEsSedTXgVb4jfFCH22EB24FVT5E9jaAFY1kZYMJ96yJCBwYHZdY73EsWgT5YFccU8BK4RJkZ6wzJkqzs",
  "key40": "28W8c8pckuhHTrm43Z6zDZDQkooDDgmLe2826rwHLHMprW7rLudejibSYTzjpP1hso5PGeRyrhe3zyfX6mGUH33V",
  "key41": "5FBmZsNUmnPXaZmfUYLShKVXyi49MfC77cNCAby9NsTEnKAmpEdHLkt6NS1KkCDHSagEGgfPxaaS5bdvatrSUfqt",
  "key42": "587pK2AuSyVUT3GPTiXkuhyw3hNs2hhVTWuXHqqERJGvr2m6B2mo8xWfTWoLjMpscdjHV2uA7PtoP6pWw3Xsmmu3",
  "key43": "dCnT5up3zS5cGBWTL45UKrz2qhbszhgLGhS69X99Z6pzh4muoHeCz8B3LK7KDeNrNBvPXH8Bq7jACPXvkt8DwrQ",
  "key44": "2vsLkDicBHGbPMSb9Je6zKXteyMAPdVBHdZHuKYPV2nTKTaUpKHc1XJdVsHKUDV5fYoaKBmWuRHwu23vSyH2tn8u",
  "key45": "2i4P9LEGfmB1A74KNSyCS4tugZtDBb5x2gVNHdh8obofsu9RhQSHruqGZ2GNR5dft9uh9etZ9Fnq8iYnHwmynT1u",
  "key46": "3rrYpTnDQDnNU4iFC5PARYYLHygNMEEXXBer4iiABBQERLCrE2EzHqMfymMtgcwEgxi422F8oCT9eJd5ZJLS8jFd",
  "key47": "4jLJV185cxx8jXZbWPTeKuQtQe23rf9aUny7T26pA3G9ygMh7W9WDALwttBgT48BFKYCURFvdzv6YyLGMBFcMf7"
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
