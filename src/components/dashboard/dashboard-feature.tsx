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
    "5U2Df846eNhfPpQkPv2qU5So4dq3eLBvY4PJRiXECeeUV3uXUYFeJ8gAHonzSjSviXqS6jAoeJBufdjjqsv2zgzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cqwkTYF7bVCTofXNtvUc9EbHStRoEQ2KR64ZRoofdegmuQSx9cpPHhoNQ9ZnBbhoSk9rF6zP3dymZnFENeSTNu4",
  "key1": "47xJvub1344aRVCcnXJ7YVJGccx2TagEW9hP6puwYk3KCfamZMP89dtHZfSbLCnekdH1jrWtTEqKCYYTGthzQuWE",
  "key2": "4hXMynuqwQ75aMjgvd113FhQiSMzn2bBH6wZETzBbtHmhoLfhg4KxDEVhnhbp6BA6u3hz8R3NH3Gs6USFfCx83sn",
  "key3": "37WNLayrTHMQiVR3mPR24raZ6RPDuHHahB4C3JMw8oDfdvV6yLx9AXNpxa8CpjZCCZ3fNSbYmYQo3mc4qVx6jyts",
  "key4": "5YyqaRq6FdpETUU9DjuNaXGffp5Enf2Xg2YpaBn4Rf39TmXrdeVpumHEPoysQ9f6D3wYS82HEXpqs6w6tqVmBKkR",
  "key5": "3WtnjLoHvzC2i1w6Ds1a8Uh4TNYTzp7hUMWyLTsuRzBRyQBZNwmGbRwusDkgzN4BkwyWzAFnZroeySXazmd2tdHZ",
  "key6": "5i3tRvZWRHD2VeK1LsXFnWyhwDPUZifJrDMt7ru24r1HcNxKwkPDsvA35tQb4i5onZqjULwzeB2YupkN6YZSrkeS",
  "key7": "4bug7qu7uCejUELe7pzM4rfkj8T9twLjpRCcgRNYgwizQZK2xvmb6xPDYJEf8oeHzbVWRVdgRnYYBQNPxL3WrFA7",
  "key8": "4CjMMqQTwm3jqHcAVDJ8n2hGAM39rGwK7mQKweMwGRwXVKc1gumDngeo2xJZQrcxCgnmB1yUrmwgR8qZVgvp4EWb",
  "key9": "4LjfbaQCMAMmYCQnRjjDgPk6PuesNg9R5etxs6aGdn4C6FWHDaXdYn4BdPcqoGHn6xzvrWogQmcEE1Trd9opWQDo",
  "key10": "3FG7D6TJcCMZLgJRag6GNj25GoGttK8d31KRMCDy7LrT3RTmcm2pbDJRCzKXD7mFe3DPE7zuSVVuTNYwiNoFiWoF",
  "key11": "5hKXnUxYS1mbQcjbTQQsEKMsWSyWJmRj2FHxfZV1MudBqzmEfgZrgDLTQPuGVJmypkTKDAcx3qq3yzkipMhsNT8A",
  "key12": "5GGiQqDaBmhWXLBNGFLdMy2T8G2TPRwoyJUxpiGv57htmTQhMADPSw8syK7mC1TP9cWDBFBCpDENR2GD4Aa46DCa",
  "key13": "4DTHHCmqsp9jcHyPSpGumCx3ef8EoysTabAcj3QeVZxPdtasbF94qtTQPddNYQxPveGPNG5Dx5jubDEfsLQDKRNn",
  "key14": "2mECvknsbBNnE3bxYwyybSeHb1tzR99o431E61MUKfdp9WaYxcyYZWBs6Z9K8YxeH91VtvKfsjU6hjGkWUHsDfn3",
  "key15": "2vAvaFrTshxj9f4MDK7Hom5PLHoKQabDnexKvHYFpQFU2NvvsJVczx7uxAgsuGAqCjesJasEHxs8XyP6UnfLw364",
  "key16": "64g4CugSaaAtnkLEkBWatuCQftJwWugRq1bi5ighm19f9DZuJzfYt4VeytgQJtKac4CEbYfzZTNtHno1xoSKjYzy",
  "key17": "162kzmemcr5YvCQNRkE5YTCRdLCYqmBEHiLWmJdwSFFjDNwf2c7Z7fVD5f9xxfpGNZHXoc61YrmKXRPrcCHfkxh",
  "key18": "2hUZVCjiuzQkaueRGzNCQqYFivJ3VGBQcq9mV12WAokU4dKPNg8fZzUFYxcWrrWuU3QksDMPAnTnhhTnGKQnKWDK",
  "key19": "63V1jsdnJHbi1JwBW9fFFaLn24VfeBXBLmXSbkQvQgZBHJAdSPzBsPwWhLEjVDd88peRKXhEEPVsRFxFVUmj33aW",
  "key20": "4gUudoCYmJ9oehHJNcnjT422WskN7V4EBQhC2y1T4DYh9J7A655wcKuXGuQKfARLxfj9WuaTy1yyK9XLMCHb4GfG",
  "key21": "2g2Dq6PFgtFuxwynac7AcVBtnnU52MHK4VcXVDs66dRzEyk5CUzgZB4nPMrB3sXtFh6zYfAcfrCMMKKdvkStnLBe",
  "key22": "4jbP4Z3GZ3qcewuBTeBsyFxKjbBmfaELdX6iUsHZuQg8WEQWFjcYTRZwC2UGbmC2czatkmEsxgxzxGd2CWqk5vi9",
  "key23": "fQDM8PWnGdZS6xAHkzJTXL3vcwy2cZSW9kUJKFyEhoMjEx6fwpsU4BMEz3KhZUti6vvmarx5zKM5LfUiNSsJc6L",
  "key24": "3UoLMma7zK6L93PAXgTGMe9S6Bj3vjZ4b4SRiL2r5p4jXuh4DY2MzfdbnYnp3TemuvPemNM9xmSuXD4ec1eo8MdK",
  "key25": "4bMtnBuTeFCtnvMfQ8EFo2DL4nvSpf7hg1KbxscgfhmmjT54mSP7qUWYtHCpY6H16jSi4WgNG3twRX4T6BAwA8C6",
  "key26": "2Ef1JqjzjDMv8d6Lyyit5MwyMw6U31Pn2YFG6YjkcBdZVFj9ASzWNwKUWcnnWeDzBrqGRtNHeaWxmngDy4afFZwk",
  "key27": "3KZ9Mqa7zSaxspuCptcEfK9BMTo912kZFHmnTRqxi1kPsAPnubHkJpcwhJFBudrGXVHpCLszskJF8iyP7RcUdMsw",
  "key28": "2H6cC8Z4iUAyY6b7FXVAZaxHFK5L7hH7ZfHGEyHQS3kFrhDyDZvr6geMRsDJbEEfitQ1Spk9WFu93vKyqoj9asUA",
  "key29": "3H3zY4axydFSsf2iB2YNJryVNxrAudxq2tFVEzAzuG8vMHr2q3atgB1HDTivgCTSRfNg9bV2dHcJQ9iX2MZ9zmuC",
  "key30": "4Poou51dvxLNTeUDUgxTWMNNF4Kfqkzip8i3eF1vfUmb6GCRaTE7P3Hw8bFnFqw1ffWVn26DU4wfEg9wkQqipGNh",
  "key31": "5ZDMtmRGY4JM1JMHez8w5aX41AWjfFGWcaStRnoDaJCUoNfXNK2UF4SRKriN2BQDswKXpG7x6Cs3M8ieac2aZFie",
  "key32": "4MCevp6FMaVv6HejV2eUGFHLzRJoWTzFrEcoqJ3K9T4BSVDLMUkHVVSpvLF1ePaMbGKqywWrYYtLpBM2oqXCLxB",
  "key33": "3EAy3CuBPB81MzDHBA2sBVMc7e3MdWB6Lur6MtvCMouQsmquS76TripScxmbgUs9nSawGVAKpCirgVriKB7sQvyv",
  "key34": "rH3Vx49wY32XY5YTpyi9x4M1Uxie3d3cYvcvB2vpUw3JXSECj3ifx4YfBcLsAJrNs7SnnA8X2ZXQstQk2zkMDNQ",
  "key35": "3hXeMedizq1z5LA8s3E77o1AEJYjG2PepgrTZB8poJa9EiHzSN1V929TitVEukcRuENttDxcwA1quZ6afW5ZVRB6",
  "key36": "3ScDWtx47Kzj2kWcNE2p1iaG5QhZhdnZVW3hkJpsAbipnxfyphQ8pALuPUUD7wa9Jyv5AL3Uur7ppVHmNLsvV6ds",
  "key37": "4N6z8akCn5oXRKDAA2r7oKenK4JZyZk6M1kvMtLCc2LNzdpSc4FMYnf9vcF8HuwgH3dNMVb2QfgAgCe586m3Jx1o",
  "key38": "5S9xVTrWrGmfrwB7iZSyTmymgEJjD5ja3tzX5yUPYywt7uvZHRih6UqdTR5grX7cdKGsynRejJL3nCq3FcAhwyV9",
  "key39": "2AFp2GNPQfpTSqSHKVkmwZXRYTSf7d3LACWs1VKGEg2L9h4fqUJeUE2MW95YhjeaJxuwFZXo2GRENsB5VvapdSd7",
  "key40": "5p6sKag6Ao4gB7LkMg6nQst74LAJ2jW4Tfrd6rNPsfiUdqm37ioqSkmYoWhEgB57d9FCK5gqNYSrWcd3iMYq6jHU",
  "key41": "4hGy4L8Qzq9y5pqQw82HBrihVMyC56BxbYA15tMrog4iQNWKjhidw2QjJgedtWZKee1BhLvbHEY6hHawK62dYVTK",
  "key42": "4S4BMCtXeoPPNfRj7HENTmpgY2z8deKG3LN93tNH2JB9n8iYiRCDrC1U3DZB7Q3YKrq8hi9DhPMCuVM78E5kqi6v",
  "key43": "49mM2kbHtd2tNcqHdF91UWgwNiZ459hpwCexTHqGz4D8jUtgHGXXxiybHhLFkndfGtLYBYJNXibiyN64Be86GgRh",
  "key44": "66CbSTbvG3KmkYJxZMQtWujo9VH4NBthr3Ht2tdWaZGGjDbncjeVWApbTPZYQ7SogUcvHyJPS998H7gr5ytwBXS7"
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
