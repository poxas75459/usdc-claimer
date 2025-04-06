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
    "VkV9KbEDTrcExvTmidc4tDxuD6hyHUH5zJmwk18t6CkYaFVS8LK5EJ27zgL5deEzd8iRuNAQXCDydpb4fWgborz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RgwbyBQtawc2fFKxE6zLWMBrjHjDErmvWS4uDx2UKvoNgEMWJKPuu6oTJiD9X57wFSjL19rXmSh7gA35hxrRA9L",
  "key1": "31k86DyY1eyzDKurXRMNJXogb4cpduUumSmw9xv4GNicbk5pNxnkLYd9bqfqiXgGGw4GDpQTwMHRpsW94eYzKhoF",
  "key2": "2hnGQj7GJtYbWiprUA1UV7q3qv1qimTEkbjsaJRWbP1iaFWhKUvMg7n8DgnNW6GznVcT6QiiZWCaDWVKSnSFk15t",
  "key3": "448eoNoYXwVYXNBwvoVFhqraKk68ZLAncwyMrzEunuk4i4e5ieBSFanEEeqZjYL8SEDJW7VHXnbRcHcNkRirxbgA",
  "key4": "4Zn2eBM4NGvQZPQ8b69nGmiKgskqRZxkW6jwPZ2YagrtpWc8P3RKyM3FXcHZfgS77BmE9QAcR9jqA9QtVAMdf2TF",
  "key5": "3aGhw5X3YDkaiyvZviN3BG6zKHeUqfqKs3Cavc1x6pZiHpPf3ttjVYkdjyPLKDAp2ga27re2fp6vfm3FEXZCHePx",
  "key6": "45o39ZoRF961fotiPExD98RThymSnnavxvLNXTybJjEbbbytHjQdwHBW26ab4EsN7x4oBW8e9bKwkzPdi42ox5aj",
  "key7": "ouy3T3P5kMHnpLMfcsipftY6z4wqnVzLLbGp4FDhX8BHL3uQsHA6ZQ1GUv1MGgXiD5rE4fC3CNpUzweT3B2n4pt",
  "key8": "xxrtDkquNjzVRCaDkBiy51K9dWEWf8tWGCCdf8kjLPkvmiGxG1R9VEUtiYX9FWLJuSJCrN2T79cr9TVUKXBAsT2",
  "key9": "5GGxPKY7YtpMDvLqpY5q68cxCcLKcP4S8ZiUtLzXGLGHL1TfMVX95ejB66EtcQP9aZ1Kwx7CpX6SR1bxzdZbSPEF",
  "key10": "QnbsJKxhZfyz8EwvbXmb2DqqSFEPBtFcTDMkph1FjEKxGat5ScwswQrQCSk98PVekKTzZhZQjdy55MA9zw3UNeH",
  "key11": "4YGYmvLthKEeUkNCZLB6gTsbqc6RHNk3otrt1NmCTAQp2kpiQehCwZrUsh2yGnSjMGDJJCBkgP9vbJrDT55dQbhz",
  "key12": "46MuhkLr2rZEhRhWtKPyeZUg7NokX7V4d8oforYBtt5cWfkQmB2ap4Ly9ZRjKrZMgZxyhrJGrUccRVupHjvGTd1S",
  "key13": "L5MhNDVH6nqF6VdB8eUX6JsU5y6GvLxVH9hMcv4jWvZEMYaHt7eFF3XYXvFeehJwiGDwKigtJeU3waKLNeZWt7f",
  "key14": "4i8WE7qsuAnCWrZjJjY11RBxRFRs4P2Vaywhr9JkGd7yiAafZHMFkiH5MdN5zFnWDWQhzPcouCrRo2nmohU5xhx6",
  "key15": "4cPLeyG6r7gYihioXmoXRWcGkmFn6Asu9rtKuA2E3UNzDuMq2jALcjPfvkHy6s9uQKqsnH9WtoQc72722EMiJ3GS",
  "key16": "4ycSarsPn1RAtHNLhgFPYWPW9wxQDwyU2DeRgkQeoH4F2oqQNZaQAfWWjHCvt1ixJftUP2NaXddgbcQL1XHCK2VC",
  "key17": "JSu3NXoqtQxTgwpJNHFyTnQbTTxQGJLM3pcCZxAzAmUvpsbFA2UMqBQ4Ham2QeWNyoKG3vWZXsoci15bodNSwTC",
  "key18": "iwsn3ZsmhY5uBLUhZeve8hxKzT6W5FpcotyUDYZ1XsWLaVSJXn4GFGL88QZc8gyfzfCyEM5ajD6cuw2uB59JxdK",
  "key19": "3AcxJWYjrVAUAU8xQTQ4ZbU1LAzqsQnkCHiZY8MtZKzXvT3hWgYGYvtDujitftJGvymDNJX5mS1Hjpy2Qxonj1Hu",
  "key20": "nXNAHN8wC35E8gJcEo86tfsxadN5odsg1BEpwkGa3sm4djob9Tv1DLcN67GSPFypDhkSsGu1uyJTKHgc3QNFTV3",
  "key21": "3aMJqhYCvQHP9PHrfi9wjtAWKWKgTepQGBRykW3AjvtT72c72VjTVTgyMeboxzAXLvbskTK1qtTAvAYwRCMnbLjN",
  "key22": "3GkiWeidVBiER9U77TGjFkJKkTqqEg1mN29KMDCs9nSrQ5xMRX26tM6hTNZbbDEFyUFZ3fbxDaoLwKJfk7fV2wJK",
  "key23": "nd4u52Snk2NZqa7wwahEiVtU9UfteG81QYAciV7R6fiXZAqpuvCfexeNsSjJrEjRabvtbioXjsYtrKZmgbUC4YT",
  "key24": "2hA7aN1UW131qo3bx7xqFLneMhuwovX6nRhhrWBLjn1T1PV8j3xyYiyMVVvGwYmMGfSc2xwEnnY8ifWExGeX8tB6",
  "key25": "54VRdVAwCKYaNuqTZ4yugiNvqeGcmi99RMu9UHfBaH5vJMexjjtBao38VbjThjhiyCgZGmri1CKLTHwaSqxNVg7p",
  "key26": "4A9za5HGPNcuY4A8PXbp9mcLuRudx59YDuoLHmWH8EjNwQTN7hZpwxmk4aB4vtJRMgn7txLD3F4t2mQ79KxjKcRj",
  "key27": "mrdPVvcb7DfXaXCNAX5XB7bF1Xt74W1vLW47tScJ9Hu25yZT22TiW2P4cQA5QusWCar4QDFu1UHHTubpoSTZPTY",
  "key28": "5WKDMW9e4dXepYYTNCTN6AY89Kqm5oKocFqdpi5MhSALPsnQcYTv22JrADa7gqN6N6b4FX89eRwNWzEpXtS3WyGa",
  "key29": "5qZh54NSUXEn9uCFZ6TYhQeqtYs3mLJ94cuM4oGLgzqCtEWU9vZtt4JP2m3hE5aBa4rgvRRxneWjbbxnLqTNEKUJ",
  "key30": "ymEKK6F2P5jZKoZozUzbr7YYkwqfCdW6n6woc6VxkeRS21iH5uxksMjWVpGL9VZRPW3nyhc8oL7eYSv6NL3oepU",
  "key31": "2n1zA76d99oVywtLeWfAodaELcer5qzBh6gJtXUodkRE8scZzVzjfP2myTn7jAXypf6wVWELGwMywZtLi4aYTLas",
  "key32": "321QmRkHJG2AuPQTbSEywQc8m5VzL9bQ25LVmEXhe8Zo5qFLJgeKHsYtKvCVG6PdPMdxBWnRLmJWxPqTwYLPobR9",
  "key33": "oabUuHAFs8W9vvpThsFkEqyNApsVKtTp3VHZk6kDd8RiJMv4txKSHtfLkteWn1a6EcNGJHcMZQVeXVnpja35iaN",
  "key34": "5A5AVYTF6VmVwDk9iUHskPFuX7E2QuK5u1jpoNzvrqTD5wDrctMR5WCJgBRUt8xeMPv4jF4CfzgtaL7aePraJNAo",
  "key35": "5fafSFgzMxzGvk7dNNTxet6EMpwi8pkW6gom7LmHhUNS87ae5fPoPU14BgGbyQpma6pf9bZ39UAmGdA5JDeunSQq",
  "key36": "rGRWciE4Sjnjcemq2cu5Gj1c5m9yVTVATohtHsHmR8p1DKPUP1hTvkwNr4iCmZF61FA5radPU5b4Ed6EbQAXH4c",
  "key37": "cjGqViRVG134FHn1Rob6JqhQTgz3GdjKY7ULY2FSXuM5SR8TCzN98uFrGwRGRq8DGWUaJt4MbRYErFY4dB33JSE"
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
