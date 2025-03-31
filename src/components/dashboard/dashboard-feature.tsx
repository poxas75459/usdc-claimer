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
    "2mCisEbtTeZDJ8Jo4i2qmFWgqmwvE5ipDBUEqGuv2YXsuqXSdARdfm5w6BXP3RFUwN2r3V68kMp1UExocUifMdRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wnGBYrNvzi3tahbriWYU4cpgbRBsXVxghrMDQ8YmDzZo5EcsrYj72eNfN3JkECj4mUzufGT5Xxzpogf8fVXbCsU",
  "key1": "3K7yvjExt6mZxXK3A1KDgfHiMdsFc6jLyREr3e6CPmPbxh3mg5AV7Nyqm4QDX5bVfHH3LCmLHXnuWdwBo2jvXmQ1",
  "key2": "5STvycfWbK63pk4U73be4nfCPbcAHG2jXqkup5RH7mcNwnq79WRFhhNQGMygjJHFq4cDo2CLsgQMKKpKz1UZ9xu9",
  "key3": "VjJnrmtHk4aGtnoCG4LcdW9QVAckAnLTpd5ADJrHPZW1jeuQzFhi8aVVuNSJ8JZhMRjsBt3U9TCuqQNNk7x8tMW",
  "key4": "2xATEAnfr9J4cY9qVoJkMRJTR98VhJCQSQRKEQGpaXzov2LTvdAVw2Xe6VagEBDeiiQXm4Q2q1pn6NRjG2rLM5ex",
  "key5": "BwQqwTyXAtY5CrosTAjSAvrx9NkvJWV3V2o8X1mDJW5gWajxBj37T72hkGo674XXFLwZ2QP8MkbsR8H91MkHUow",
  "key6": "41w8R9zsZK9ELvjmCFRWpWAmG7gu1s8AnLySZpMZEoj2Kyr6gdgU42HhPHjqNtL2axCw1fTQCeneYd1fZzTV3Hkd",
  "key7": "51THsjQSp3ipM63Nv6pj2AD2H6UXp8k2icZCZFjk36xMVDse3Swy1iuA1pWgKaBYq4cSVrpRCXqUyaiZPPxBEqic",
  "key8": "5LkfiBUXd5MgZFQvFYPbZ45P3cQ8BCm2SqmapfVFXisU7QkxPjmyMr2nEHgZrLUXeq6UfTkT8Lcwpp8j3rczRePt",
  "key9": "3bXABrsBXevDdV42igZ5g77L8LwpzzxzuH9aTfD5UquB38Qb2KbMj192XvJpmybQHWwBFq2fqEKeQ9m7JRqAwoKt",
  "key10": "3m4ZbcYPMS2x811W2P9mTATVWWRMwRXzAcjBQYS6tL9sP5FwjV3msHuGeRYbaYmLNhUvmhTPBFoC9MNpP966SWB5",
  "key11": "521iE5Y5qgwbzMzvAMgmKJW2WnbvX9q1JKnbmQLhj6QPtT4aDckUJvRbaSk1ov15Pf86sAbTqJVzwf5Z5R2RHfQn",
  "key12": "9xWa2PTtjuybb7UDgDoEFgesii22L8SFk57hHL9Q19ykH17n4RZxZUpaBgQAaXFq54CTaLUL48CaKaATBQqgsJQ",
  "key13": "26daifs34wgzLiaZKZrUeyjPBH5oH6wXmHuhkE4VKdBbzb4MJMDkfD9qo7G2CAzRyNbaekUsFjm8Z4Dt4Bstra2R",
  "key14": "5mGgf8SvEzdDz7wnmwVnG8vRwoo5ND3onvuhxRjW17AA8bFrFhwaP4pai89eU9Jm1wxk4CgSJ4FvLcs5AgWVGWHq",
  "key15": "RxhHHKwJoDgMbSr8SzyrKUDtZzuUErU6VjUHGMq3gdGGsj6HniapK4Hk8Fj7W8c3MgxGSjxbhWojCLMSWZPPctv",
  "key16": "4UvD2JFoj5fvBEQCvaPoEQZsWEEcuZUXwWi3nnj8rAMoDem4uPitNSX5YTmnWu5FvUs5txW7BjzPMjoNiKvmAmW6",
  "key17": "4PQHvUHsoChkPhNMC9pidekSoueU7YkSefaEDzDB1qTUtHseA1wzqnMhHbPfDRVC9p7pw4p5m44nKAxrpv5yjPNe",
  "key18": "39pn1cCgomX7idFgd7GTd7XbzFHJ2RRREdmKE6ChZZ6C6XpwinA2AaCjSQxJPk3Co6hn1riLxfxnV535diHifNK",
  "key19": "2AMjAwwhUXujyPEde6uGAmE39edug3JVwQMXJkZiuiAmjAJ2cr6SY3dgFi2UmD8gPXsQSv8C5N4VZ641eHgLj1Du",
  "key20": "22kmx3GaSX5bzdLQSe457jDDDjnA93AcTTPq8W6vLTWBNohJGM77unUuKNmmtxiHHCYgq7BfWTaLwX7XogRP4n6P",
  "key21": "4i37PFRfwJ7rJs4UcXZNxYkBzAkUJeW4smA7FQc71mjbFCAdPorXgrhoWNwXmjWzzEEKA2GgDPE8yvu7MrpioJdX",
  "key22": "4m6KV3dYs7RzceUAX3bdPpandEbVv4dtew46nXfffD1VDUNd2sW57JxdrdVqiVi8jt4jYpVJTDr5JQC3et7z5PnQ",
  "key23": "48dZothhUaP9emNHL4XR237FewWDcR3ZrcjMK11ijFhRvR6GBAgxTEqpSKcyXg5M57M52FMGsM7f3H5sYN9PC4dv",
  "key24": "7rbHQ4MnZew2HKfQ74zzLVJXRtTk49zsg79bYupjCN3WEuY35KPmuN7LdtmSV6pJ5XHNBsCTNcLhJAB9pbUeChU",
  "key25": "3Dek3aSoE7xGxvcuNuyZLx9q1RgJxxoBC1Gkawd5PuwTcw55xd6TCToYZ9usYov3zubTiXg1xCzkz3281trcaTsA",
  "key26": "4E87J4grvkohA3TGwnXcAPyRKpybctHWUTFo6nbtBHsvSMHvSUnaKpdusvsmaEsV5Yzkqt3ntEEf9DhgmwkrPkLH",
  "key27": "5XUPEyy6NmMJew6tFd6Bi3TBPCzPjcKw4K53ajLK1FPeYhMZd9Tt4YWcM2Z2PuitaSSAkaFzSEapSr8UKAcES719",
  "key28": "4F8yqagCKF1Q4LUvJbeAyGweBzsDT7CAr3oe9tnTac3AmVmZ3uVLJJ94BPuWD9HsPbJZLtmRBjGAY5Zm13fLaCFC",
  "key29": "4oxzqVb6sEGnCXjk2QCgLbCAy8UtF6BKEhovs93BEcNUiz6XyEZgqRCYCQjbJibNBpJtGRoFNZKMEfxg619JP6N8",
  "key30": "55xN9BJCWj6RPBk3aZV9MANFpJnTkgxrBjcDmm3fCBmqZZPWP7zmRnB6uMhQaUW65bETrHUdZ9rU45zEEndhjFKP",
  "key31": "5KFwJP93eNENNTNUUwacjWQMNJHCPuAJjnfmXsE7LUofhcn9QjFm1gov2nU8F5astcPBAbFgqWBEN4GwuZMu2aJw",
  "key32": "5Y7Gtnm51Esq6pEstZNUVcvbcWn99LdnW2mCWPpqP8cuTuWPuQR9bTQYtP9cZk77XSWKiegJ2kG6wTyXQtRSfBaJ",
  "key33": "e74oKLjp6YU1zNNJFMdSPniG53h7v4PEwEPmpLJHFhXTmxTmZyiZpkBbHrCorQGbXebYCHargJGsN5W55yVY76M",
  "key34": "4d1eamLySnbHg16bcACUzhgc6nQrD4ocriaCkgh2en2PbpTYNfrk9WKrbk6NuaiQE8NShugmKuZaJSK7dDHEe7b4",
  "key35": "55MYNJXTpFgiGFBUszdYjwivWANiKP9a8BzEKcDpqubVGj3qdxGyYN44BzL2hnLhZ1WndfoDZWaJ8VFtgE9xnCiV",
  "key36": "36rQsoeU4ae1uvt72TjWULJzouHyykSP7q7BpE3ZKvpCxwdhFifhZNTPMSuPHH16J25BitoztCzupAouQju87uvy",
  "key37": "2EVCMkUYZxowMjqzK2sS4A3SQNLyBcACouxMU4C7xE5eGM5ykSMmeyNB8dt2zmyBmogUp8UPE3gpokUdV7fLmBYv",
  "key38": "5Aeyki5gwjNGkexaSPPAiTHzr65KqJGFumLYtaTtx7DJjDFvvtyWLJmiB5ECMpgh2m2M7LAuVDDNozzsSX6usjfa",
  "key39": "3aWRY8QeLdzWQZPjmyirRZgfDvN67e5tUX8tjmTSTzZuM798zRMF65dMV3mQQRRS5WUcjgZTucWjHEEzFySX5gx7",
  "key40": "5nfMDCDuD5SrondmKTC8KrCSQvqEgkCPGs5JNcWw6fx9cYHBH1jPf1t3Vk571it3wMjJdVZt1g1z3bjBTdHCNvy8",
  "key41": "2WLQKUVBcjhYy5163gtvoBBCZCj9uZJUCU2T6ddGJ2PKLuWr1ULdMYhZXnvcWVUiosAMYy3azo4J3iTTN49P8Jcf",
  "key42": "5AgiPkv9cSEanSDftsZPNFzhEuwhiNAcfPHBrYLzpeDgCosLFhCV63CVBvmqXftprunHFYVa61YFmahkmpuNd95q",
  "key43": "3xL2S6WH9o5d2atLfFuKwKDPSbFfuHSZucWGCuzQTpHbq5vAw4i3eedooqPcdz28EZNXCJFs74xVo554BERmXUvp",
  "key44": "32H2xxj3ssxvRbXx56HfHXQxcGfNEtCUBbxB9GApzkLJ26Pxt24nekE6uBg68R2MhNRmoG8s5P6u5qAGKyT798iE",
  "key45": "4J4mMMbW3BUYo7MztZG2SNPXdBK8qCqShjKCvPduPUSvXRjAsunqujKfYnwh6iL58hpA8GAoKRcJ2opXFR3VJUxr",
  "key46": "39Umn2kCYia2yg9s2PYT9p7ZmLq1cW7AUgEgTBX1Su82qBwq6HckoBZv8d7y3pb4b4H3y5seqK2S5Ln2ecFHy1jL",
  "key47": "2Biu7ev2HjiapMnhgr7XUJAtTBQnpn2GGqbZJae7WTd97k8Cka5Kt5j9sdg2PQXLgQG9p4Koz27jvurudDQvrXMF",
  "key48": "59yAPr86kChpBKpFnrCAM3Up2G2EsLxGb7RjLH5jPinVzQZv2HforKLbi1KXzWYs5GSsHJxKuR5RruNP8AFFjtD9",
  "key49": "3JfjUnUMJjNsTstEVmDNf1D9QSJox4EYXuEsaBNm4udBKABNBVtgKYgmEQU8x8j3ZGJaXAFDH4njTdr2wyTuiLDf"
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
