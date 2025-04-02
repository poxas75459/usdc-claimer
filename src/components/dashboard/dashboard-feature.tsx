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
    "5zcwhiYNQDN23oKKC7dNo9V95cWHdThLi4qteFJuS3ftss1e9SWsXxpWuWYNM8dK3VemNBjTszkfKePnnapaKxKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FuEETEczcJiLYtg3qmNWxwKLs7WK8TwNTBWCni8U7DeWny4urpFrhvUBz8mTezQpCPp7DWCTTEAn4ww9HGfp8Je",
  "key1": "3edHu9av5EwS8c2zgwjqMyJ3LdGBByJ1QHpHnGAVDTGcCSSrW8Wp8zzQuDVpbM43oTkj34eLsNbfcYo1poyxz8jk",
  "key2": "3KTWZjvai95qohVY4DSRYt5A68H5TZq2ooYCmfEz1WYr8PEXwrpZU6CaWvYTBgv8mrufTVqvDkuQKR5qAPcbvXmq",
  "key3": "DSAAiTDWK2SFCjLQDAz8zgY3PM5HYQgs7fncfvaMCeNV1LMt7MopJJQvtHoXrXasyap6kUJ9CFBKfReubYxKBYS",
  "key4": "4BLzd2yo4UHugt9tSX4asygTFr4jEsogG1B3RRfDSF4JjKR4aE8DTFNXHmHPZFW39W4eHfrYFRpb2fZKeZNLju1J",
  "key5": "38zTubpu3Yti3MAVYETbpqASBmzBNATm5DK3t4Yu1DoNnbATJpGEL87G3FkGYjJd26Cks1y5mTGNLZSMoL7CBrH7",
  "key6": "LErvFyT8et7XRkC5dZXZY3hFSQG4R5W8U9K7VBhK4BFcbrze2zxauvJz8Y926MW28AxdQmKsMdayFEFc1r8URj2",
  "key7": "53gnfTMGBzevqQybnKkJPV5DAejUyrMUSeYrC9JLLpadnfYhWGpyzrf6zTSmibQaDRu8cbb5bJc8cV8ZknZkqhMd",
  "key8": "4XPQNZ1tTAdNaW6U7jjmMFa69PWn1RKEAYE5MwnPHYrjgmCqqpVoAnziQ6KYqgmAZhue6gGz2H2MBQauZqJtgjkr",
  "key9": "3EpDiH1xqCnJFZG7h4oPipy2e3YWizd2ygRJvkqH2hxMzZSnLKJu5w8mSTvzuKgqc2q4gBrqkYPKYv6MqFUi9CMR",
  "key10": "3bTJc4QVQm6g4geLfFqgczwU2gq2kEPKZDtg9mxHJv1wnvTNLF1ETYnCxZf1Nv7hbquB38QbFa6VEqj11vfnC14f",
  "key11": "3xTx8dZhQNsdzXjWqsVXK9wiexyKQkuVwZfCPpLqhYG227nSDoQiFAnFHeZgtEqzRCMYbyRi6GrQaNezThyNejL1",
  "key12": "4m3j8VpY8hpm4qqm1T1BPgJwastMhMrWAUP3ugu7cwDd4HftJnAwL4c6tWDbDTY4hwFkZUTaPYA5EwiHeQriBE1X",
  "key13": "4ZULnQPftcWQ1thKGCYWd4CjNKCr1RbwKJAhvwvUKmoNsAqZ8UK7j8nKTMsgeFv5GDJKFgZyV782hNUiJNJ8Trht",
  "key14": "56tdQn2CXyqzCdbfPYPdKduzU4ewia3aqPEyKdxFu1DZ1jxWN9Huy1SJK9ncQ2tkQqh32oAtFEtixZezpP7832v3",
  "key15": "2g9Mgc5FUJ4zhwE2EH4c81QRms2KYvPa6cqXx48ngCriq1y1tuLU4dhyExP6YswHDooUukdnFLgaYKwLon7UHm5v",
  "key16": "4TzfXaxrmec43APmZdG6XRJmFaGNK2moYFy2qaL93NdgoPLi94XgHn4oi3Trehqfc4vrfryU2EwZhx8VdPADnZY2",
  "key17": "2TP1VA6NR5wjUhW3sX3GsSNzBEoYyWSVxZPVWu7ZPpFH8SstECFWFA41fnzbKzAsjDroVnrgZZXYHGsWavKvfMN9",
  "key18": "fmA3HjpCR68RhAjC8gZWZ2MqCLg4mCVnwxQNuiSvryunGmSEKLHdTtn7FA6Ck5V9Q6zhYVpoeUVsLC2BjZTqXmt",
  "key19": "53vJrP5F55WeA9AVp2Bcq5R51m3pwwWJLxjCPnkXrGgtKbQGd5GDv7HcnKk7pYLTgGbXuNQmCdnzdAJegV4o6xcR",
  "key20": "3Lw2TN5iqTLVMhnkn27VJqyDUR2STiMsrz3spa95ogewEmkqntKPFLGXkweUrLDxFXSMo52fa2Wdvm22jWRTN3q3",
  "key21": "46Sa43AMw8q7WpSHREYdwiBxS3xVPcf5H8NEQFQtXLHpz7RqcprjudLRjjPj2wBjWjcjHcgFAY4vRyuJ9JgPhV3P",
  "key22": "4otFD8NJLiPKXGVcLScEPASUwDJXMghrVuJxZSRxXc5u7ddsYBz5STQhSNHXUvpS71bo6Wtrz9XYtjwYFRZ47E75",
  "key23": "43FUnhmfmbTKBc7a4WHYennsUsie4ApoR4YxLrc3xcELKF31webMwbkrJtAToQtGU6YTxubaWbZUTniAZZPzNUSo",
  "key24": "2ewhpZzX3Vt6LAiTddASwK6PgEpXVjV2NjynfcLQop2NYsYQ78HzcAgeNz5aMpmQxrbV33FFCnmdqmCT5iVwJCPH",
  "key25": "ipEmYaTtbXUHrs2Y59K1NYhTkBmbPsH7iMDjuige7h1H1ixh7PJZ94say7KyiaDRgxL5LfyaswWPUaFpiSBkE4h",
  "key26": "5WwxKzZtVSedSTTjxp6uPtWWWRG25JUNKAFpcutAZGUyAp1rSq9ZRhyvqqRP8U4rqHQTY2Z8XPXXia75Ez5ZQuVZ",
  "key27": "a5ZrDPPn5wsZWQEhgdw8Y3SK38VKYjr9ATkk97uq8Qjt2GpCxTsdQLzhD3X5CyosAqnZetY2YaZ6kDNxRzE6Awq",
  "key28": "3SnhuwG5nW9SHMaupj1emmauE9iydakkn2Rt5ubauWN1CeEoxWmKxD1xympphnCnNv5AREP6m1PhnhdejbBY6XR4",
  "key29": "2PNssHk8mYyxL4npgnvJx7rD4dtWyrhrkU4SAnaoKR6yYiKqrWGfoYnciyzBffddaTtXyjQheK46aX2oWLAtPt9",
  "key30": "5qfMMTHhtjuQxMogK9ab86TTxXwMrZaCaYK1Yy1wdcXCvXdDqMdPcSxbdfAEj4iHD88aUJT1KBSVxrV4HZTEKxEM",
  "key31": "7iFo9aYw55dNjTPpbw3YCk41Kafb5cFrzb34QmYHxtkVwrE88niKQgsgVmdEk5H9TcgRcNMN4w398PWpL2bVkip",
  "key32": "3DEi23gpBrP8ETRtuS1MB49JF3CFsgoNFZHSdZp4DCMo8NZ3XFfA867yJkTrjpFdfrDRjkKQKWWGmxqNWU8uVm6p",
  "key33": "4WFf4YVxgWgnSGiSEDgshfQAYFMXGVcVYa5XXC9UFAp4HMLbmcD2ZLkApq81GwY7UEVAVo6NWhiUdCo9TjQfy3na",
  "key34": "7a2mMCzRDscjP6LVaFUPNVfyUVZ6XxQoCNbTeLGcSUKxaHR4RGt6EPYmwA4jCHYzDqfXfyCjjQo2sQCzUuTVFCD",
  "key35": "37qU49VurdDJzsHWmveztcjTfZuADqN3gdDXSYdSMh1tdsiXr2oFBg7pDC5KAJiCQUjUTScw8bAP7woZpTVYGMJP",
  "key36": "55WnrqVsvkoUQqytqGELTUkwXNwq7mcfLTQzjyaXW4wxqkWudB2euHE1S22J1yrkMS5Rn9CBXCc53yVVYgzyMsKM",
  "key37": "2HomSNfygnGeZyUnxen2yTCyJ6MeAFxgBco7BbDQTDamh88THqNYNLvecQm4QXZkqZvMpefTBHt9HBfFVcjiSAWz",
  "key38": "3Gzh7m58W8uBjnLa3qouHafCBYpzqyZSenE5D6a3UyDSvoFhfu9FpKaCjQ15346pQNnb6H2oGUcHPL8WJyErM9R2",
  "key39": "5GksKqAa2nNqzLDNKs9XEEPqA3ofaBJj54gCuJJ5GtmywUddhyFaMDeHKNhtJd86dPVtU5CEKeo5Uj2FNJCSDGVy",
  "key40": "4J7h7joCeRYEVrPZsFZLhYrfCNQEuCy8TyAw1hCag4hDEnDiRFkJwrovssVQTCXLMz5ocyyCYKCzYDQPDX9kpyjW",
  "key41": "23J7BzeLAobvtUuzWSqSKrNuPg8v5iHkrT3xvvNhBU1Y5KB11ps6ATsGkTU6kTD5WhS2pssBJtPyPKC1cAemJTxP",
  "key42": "XSPt8gVMu1L6xBMTbBnRn9UTRDcqkhosAGkGBSAqxfx6HNiyKEuDjU2uXsTetsKqqieXU6sxTpwEMhdB5Vo7A3R",
  "key43": "3JdSkJaT5EYrZgZDtskWc9wtaZS5r4ji75VF8xwv1qXABWMMpwVZ8WYKzXmovj79didfKj37LeiRGm7gHox5PdGW",
  "key44": "5mT9oeYK5pDyDUGvfKfMLCFBJgoucE5Fd7diDFbTxytJxoEFK4Ce4JYPeRy2tjuuy2Bki94pzRMzzSpfradJA611",
  "key45": "3KzmxC1L1Dfb6ULroeBjXKELwyWteskauLBjRJrtr4ixfEmR39rUAA23MLsDyhcjQV5EsPvjRJMSYe55WYRkUxJ6",
  "key46": "2V4RwWRQvErcR8DbnkhmANrn6SN9owk6JWiBkq5ZHJGhoQYS2BUSf4ioSWHSEPuY8gdu3QhD198U3PMLw8fanjKa",
  "key47": "24v5PoDAXWkdQV9GJP5buYJmBVT59P1q8dwpjJJdyjEJnihsd74bj1xJDCxYYHGiWh2cfbuEKhTJHcK4ZsukDyVV",
  "key48": "263kTmyGfTMJATAThcTQ3UmUqEKsnMeBUwaoCjXwZSPHTDtXCMVS2FbJp5i1Ky92uaeUNfyYuUFy5vm21xaYUpWw"
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
