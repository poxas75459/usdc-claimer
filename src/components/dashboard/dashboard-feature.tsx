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
    "36noT4vzHrwQbBCLTQvJ2gwqRzkSwm92dnvhHGg4uHnNdLTSeb2FWBUMH1M5Nv7wigEEj4N3FjhMAG52KhgWZJkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ELuPHVjVPUbtEhyPQNeEUg1KbNCzGNwKNN2dNimVE1P8m34HCaymXuriAiR3fuQ4V4dvwnn4w1BJbd3FeHc43D",
  "key1": "45DgkynmorndX2TYaRoSAPK44jbTAWof2EAaQh6Pn3ji8PzN6YADptXakD51LLHDsD1KRr5Lq9CeBRziyD1sd9bb",
  "key2": "3uS6dAcGShs1YgQ6oH8UgHcAVRxqHZanNqLSNHuGR3xJ1U8RQsE68eDGf4yscynGEnRNrKTwYqecQxkSt4Pr9fVS",
  "key3": "52dQSnc2wyjhnV7jBWrSsrKUpYYp385FXqDFsrBJrpncN7iPL46SNkNr4rGzoVtYaXsv7P4CJAmmSCo3JZR97Hn5",
  "key4": "5PoC2ZxCYPEHkBia4a9cBR5G8XPqpJkYCQbcngdwNkFaZvhTBmXdNEKZapdPfBysRgTWCYpwC8Q7ociPm216wMmf",
  "key5": "2ev2fYHzpuDGZKwTL6VzaCMtNtrB4gcEHN6MPn6EsAixUmnd2572FZWnRt5mweqjzbmK6JBY7n2sAz42dWbApPWT",
  "key6": "5NA4HgaY8H1rQYu9J7qZMwQq881VkiG6FoZumonhZJmXguj7UyvVG3SWxnryLQTZD4QA3Z7MVZctHVtcvJKhD5oV",
  "key7": "3x2e658ideBSfusivpUwC3U6nrm16hG9BEZzpVZNCHGsgU3S17uP1fhhtzZghbiCYi1RT1G15J3MW9HdGgsz2xst",
  "key8": "4pEdXYaHDpMeXCAGoxRfCjVkXyW98GWhEPMRKS7FnHXLou8Bka7V3CuDwRXf6B4HGzCeRcppucrsnYn6XRGm4mCi",
  "key9": "5TuKhYv4MpdfMPkxDNGdzFeqfuFbAm2r1f7bxeA43f6T9jt3tsgdm2MTX3Yi1b4DsyS5fSnj56DFiQUe1HZPAvP7",
  "key10": "53R8Rtz4Ni6Qpqdb9RLhQSEaZ7F6BSBbgqvgH2euY5f8EC2yAVoHkTs1oiPPGj4foiqy57ApwSphEAkEqXabtwXo",
  "key11": "59BfgAMZvBWAybaxMYESk3Xgo7B2QzrZqmtDYyTh2wkVj5AiN1FrEK2ZFBfkpBGdGhRX3stBHYMyyqMrRLKFaW2B",
  "key12": "7adsi8UekPehkFysPpj9JLLkdsDQjbjZC1A2J4QpgNi6YrBEFv6BWbPYzwCXPhFJczDKVf4FNPDazq74TGxijJc",
  "key13": "2Wev4Hx1iEEiEboTouHQxGb9FqcTNB9Dfgpjqv93hLGksX9Mi769Qhc6E2E1oGBMJzkCbvt2dEZPs2fckskgkPry",
  "key14": "kRfnz4AYtDfBk9yyqT9Cx7PC8q1faPr9c4Wzg6yZBdJZEfEsFmZhs5LaZmgR7Tm6LHDG5zgcFR8SvfjwTYPb8tE",
  "key15": "5sYQonv4GH41B5qm7t7N5BJBHvXyzM6TeLS1qSbNvKBr8kGCFLEmjhsg4PnjAuXPT2yteNmaXWV66hGQtfuSkGUV",
  "key16": "NWWBf4w2Mu5rqxQ5E8WcNXM45A3jcAJL96iuhY97z8X6XEDjM6KkvL5ffbeJxXxCpB2mG5WNraDLnFunrPaiVhL",
  "key17": "5xMkgWEqiqDQvvu3fzgpPgUJerdDKRWhauYoBSGmMZA1qNGBWjgqmNVJFhrRt9yTsMT5MnC5him15epwy9NtU5Q3",
  "key18": "2nndJmiQnx8P7FvQRbMWbUsBoRoBvWGv31pmUYT3GpJVWeVmSd7S3WqWu7qJVfn9gUbeGN3xqafd5oUgV4cs9NBN",
  "key19": "4tfSVDntm8n7AgWAL2ArGXDr7jF4TEoisHvvKj8JJvsBckyjUiFacjDSMUxRwgWtf8TZNE2Z14RLCU6thUFqy9np",
  "key20": "4ZDhzsGfeUNBqiaQPpZkRAG6iRGLTPJuTyGmJhaCkNr9GzKsHrRuP7iMgMeh6GeS2DU55Xbkoj9Kyn8bwKj5QyUd",
  "key21": "2gS8WJeadfREMARh6ChyiUwfTzhko73byvSswyxnoGwSaMqeREWKwPqokpcqt2ycqSqxACFPmRvrcQfq8BcsEYpZ",
  "key22": "BmChhJfZeDJ31TYWGEs9YuPQn9bDzr9SsCxPFP5eNY8rZfG1XLA46UXiv5YAT4r5qvkX5KLU7gHBWUr43fZaeEH",
  "key23": "59vKmzCYJF8bKbqrXa25doJRhdiCoUh5CXTkKAkw33o9AvpBqEFqosGVa6jhjpafxhp7SD5yDKk5t63Tfp9ySg18",
  "key24": "2u6pz4MouERUbfAumLt5taPmLX7a9cndBzo7X1aCJzQQAtZetsjbc29Pq6N1Mxvibzd6VtNh4WPmmzaMsZtaQfYR",
  "key25": "5ARKPnuUv9y69oAoY5fyvZZhdcWmMa1P6rJXDJmRRvNf3jCv6S2yCfZvT6Y11CsxUGQTY2yADd4Pacv3tPJ6aF7S",
  "key26": "5oFYLx3suQUxk8NjM8ybUbRFDq5CHNJ8ntMNddGg4QCV1BRnzXh16fweQ8LSBuiR1v8RcEM19TTTxaCpdeAcCFMY",
  "key27": "3ijWcQhYZkxxP13zYyTrxvszUZhpADeePJEggx4GXfdPjMmFSQZEcZQLnmDtaapgJEt2nvY3Pi9c4c2P3num4WRK",
  "key28": "2qH7fEwXCuWvGbrAwFLbjyvz4G8gUcQPbo7mUqvxPhY14GA2br2cZAKch6K99JKCHUC28nUovaiUgUppWVhdz5kt",
  "key29": "BiGyhEtVjjmyfmDJ8FmeLbnV9q3LWqjSknoGgXZENX2ba8QvzrXqoVoxvZJF9zBwJSaLLbd9vWdkdPHxfFYyFnU",
  "key30": "LidPn35BxrNdvjkVmAXP6vAEabwJu8LqCchuaftukh4ejiBbSQG2GTTZtfBAWHMrM1FhmXjc3FDEGc4T1KadNbh",
  "key31": "3NcjT1PPfmDivsCusbiR3McPGmXxTYMJqieCHKasfSTAiNrUdESToSKaw4sxjJP7pbqkHfXdrnu1PhoF3inDbAf9",
  "key32": "3ZsHQt3pzymneotbc2LWAawwhofYAzVzH1cAbAfd16v5mKAoP53QTcnfXkQbd8s5zvwkdtArw2NiXXEbeaRnhjZV",
  "key33": "3hAhWcpaWJ8ExExy4D1TDwVACraEvtukx5N7d7Kdc8zkCtavtKkV4TmhvrkEtUfVEo9N3ptUmxwkoK18pDTnarcL",
  "key34": "aGgSdFU793Ci4zTBgxYHpcKXJFQfyYRRjikPYXJV2EWjfFHDmwZptATExmu36Pv8iippsT7gz1SNWTzNmWDgQ9n",
  "key35": "2XU1q1KwtD5cNkkM3cn7hAEsHNfje1wLj9dArk13cSYQWa8xM2sQNu6T3rXMoSjiHd4p33rQ2o4K7mjBGV25iVob",
  "key36": "5gLhoFw2rYatY39vNzLUYjHJ7wmzcWQ6k3C9KJ55gbDWUo6XzjYE8ZvBNJDBXkuVitzwYmTz5zSx36oBnhzSjURL",
  "key37": "rV4azZXmaGsCWgZndjs55NseTnDJ1taygFoqQpyS3ppgeYpbGees1fZWCRN5KXVCurwTDFNDJGi9XXSo4roYgRk",
  "key38": "1UdR4ofNMrvh3az37fCLwHWarzQB9oUnwkZqmz2FJSt8YyBhWyJFnXy921ZFXMEduKnhKpPnhRFf1PVfqXXM1QZ",
  "key39": "4eLAogmc8K1FkAeNkdnogZjJ1GetnC7DduVCVueZf79mpj7cXeQ82ipCUMa7X7ZxTf7RaymNa6SNi7MW5eViDUyj",
  "key40": "26Khb6HzfLWS2QnqkD6UVZoaqiifQcPkYV95E9TQ7JJ9ao6f26MiFR7vKTUjX214F2rLWUoLxbvUbT5xzG81YWvw",
  "key41": "51BYAw2n72xda3kHYLPPNcNhv3gftSTTvLxZTzshrFEqYeGUK1kYQrRPx25F2et6h4VLpACtwgXZUoYHro9i4zjV",
  "key42": "4C14g1QtnxWTwHfuNxaWWZ78gzHdF6cojJ5DXnuc2WcrWhCdpVcCj5QazxqpQRfZpJDqnBA4aeprCf7DmDYtT6AK",
  "key43": "3ywE6hbXMXWu8cGSG5rvG1t9itP7LgRGGTMHDT8rvuPu9n82ETxZ7mSciaE7jqqmESRyApVNgJA5VKx1Jo7oskmP",
  "key44": "5xm3uB5PUDhdcpvah1whg2PpqcErVnuronogQFhR9owACuxS3KGZcdVj3jpTvRXcFrJ2WGJof7ydvZKJFUc3RJ1b",
  "key45": "5Qt9Ud34ZNwp1RnZcCDJP9vasF6PXeqZvfTtS3f1uayN6C9rYLMBMdbGBHLGL6VumRaKMBpbHH7jzADtJrgwW7ZA",
  "key46": "5rvR8DWN1VnKs4UQEUzRCkWLa2PKuBm6wreAuXN6H7Tu6B7Mddwugd1EjavBEvE5RJ7feUqkaFw8E2ARfdoHAmow",
  "key47": "21LRMuqdoo7ssMctt3WL26NK2CaHj1WAtqu9C38fcs82Jd3mdXFjFZoHbTmqPSU9FUT6rq6yJqrw9rVJsdkwa4MX"
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
