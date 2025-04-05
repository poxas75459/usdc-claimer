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
    "3YuMW39wf2u3T1aQD26uktez24PJBXzd7wDbYf35KpDC2QghJEpDNZDxNWJMsW1gzCwdpUbdAbLXqbwAJv2riwzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bTnqLp6a9yf47t5U8doWM1ghPjhYvUrFyAqCTXwRWfQZSPuyyy6MNHp8uvE4PRdtpC3EYQQ2EEttHPyRUbVwMWL",
  "key1": "3Q33X2efVTiVW9KATpjMpeeRmCVNvhE5to54s4gC67mcBQdwcyVeJ34XU4ZwUjK1Ki9rqT2Uu5FB9D638NzZMe9r",
  "key2": "2FsyhP95qUXufuLvHkX3UA93nb8pYZLhkVdyEh6qUj5F4apQ714ZoUSjA3TU6Y2raMsr9e8Jd9pUPFAefcejWnED",
  "key3": "4twadkoDZVFi7smGej7TroWoqs5JDW5AhmaEnZci8MUXSZnLgqsUDVZLvP3wgxmSUg6p2Heja97RCPPBeKW17XaZ",
  "key4": "eyrshcsUqErJitbsHWoK56zKmPhBuQM7r3fqEmUYkur1rtRu8NVQKx96QahPiPsAa6gQoxFPGAPvSVHwEcNG4Pg",
  "key5": "4hhCAs7mQWPB8WphzYRRJfqFnnJfnZmfLKiDRRUEqThfrKC1Go3wpjN829WprR6AbdW3Y7EqyxizXrf2mNcxTYUh",
  "key6": "4bCRhs9Bnsuv1dDjRE8vWHVNcCiDnXutcCCQ2EcwDTd42U7nULdATDBhbkadxzm7X87QMyqf8YvDaaEX84BjAWy4",
  "key7": "28ufL1SKy261vDhaVWczCwFkDQnrbfWMdRTf4xgYon5TDrRxYypkpECzSmFZ6zHgnpXWtPjbkauqMNibKKN5Q53y",
  "key8": "3LAMnVsZd56GDZAtWVgeooQEPxKUy9NbLDs4k3k5EPzsg2LMpy8WNZuZUvcmStSQRmdDULwvVCBmEV1ZwVQryFDj",
  "key9": "3t8wkecKYdJFzHajm8jetWEzpWDnEHKRXa3mefk6MfHfYkzdcBbGowmogztyVEtJESZqobjUANcXVVhtvSsETp72",
  "key10": "4xidkZRmZ2VcKTFmLUNiu4xfMNLjnXQ7xVuZqbdt7gXzPrVVDT1HTBctt7JJ5fBaFxWyJJWUhuBYNwJR2dkB2hTT",
  "key11": "2PqVoarnV783D23FYFTLho8NqgxnM5TRw9zv6Wif5mZyHKGb6zNejrYsvKyQW6D8SHCbUes2muJNX7e2rJCiFWZT",
  "key12": "5TUSvyWe3Mb6EazkKXFnnnbUheXHvdSd8fz5kzGJXUszKkHERQyKiEn6hXdYr28e48maha6EAHcg6Cec9P2ug7MK",
  "key13": "4htcPakwtyJQKFk7sReyn91m4vKC3CffBVi34y35wS13XToLaHTZDUpB6FSm9YfFFFErC4KDdXVsdpnN4QMUUjt7",
  "key14": "646PFQ4VvvYVN9LQDzSYz3bKtUn5hY27uEEBpBUCmDtap9nnsU2hfz45bVGMb85HNG1W2Md7UQ4m21KtZzGcMZyj",
  "key15": "5kmyocVaqST2iobzyEDmZHniWvzvrSCG2VXL3Ut2EqDNMkMTGZx9FFr2upqLpoZUSXx2LQEwSozPatMxxBRKmVwJ",
  "key16": "5ExRBSuFtacu59wMGp3AMyuKpnUdGHjyWniHg54XoUhEPQwfpg98STxDovwZJX1mdZxJjVhE32s3aVi7mvd5Ms64",
  "key17": "32P2ppS3MWdDF4tQQPoKKvuiZrkGRTHEuR16KjFAm9bSxxktvEbR9q7uUzDtPZLrGFufi1sKVGhQKzd6CzJYZhHH",
  "key18": "4yzRAzfC8ha1CsQKg7H9DfFKpK46ZEVX32CqKADsPcYPwXAZ2NtUzcqwZFyZVVRiw1DQrziPLn7Qfpn4mLTBezEf",
  "key19": "27ij86xCf7E2uSubVFLGT1DN63JPT5zwW8rvTFPYCW6YdTXbkw1aeU8SDbUrQ7r24SXtAx87TJacLHa4D5qjtUTJ",
  "key20": "67kJxxPZn84LankodyQp91SThz4NSmRA8PiQqkj5QXaarc7m1bAPQHmkY8QefQWoYGZy7gS5VNibkAgXXzaFDdbw",
  "key21": "21Hd42tunRh7YbMGmUinSYzgHMTERG9AZpjXYvwxuHUeh58wCtFdm5jZmYZpRzy2gWXX1DW5NnUcBuw9R2Mdx4UA",
  "key22": "2cFEBfYdWVNACty3Gch9JnYHPRsoJBHVjAeKYmo9NecYRcEqmmCyEbSSmStpg4VYMmc7L7r3xchycQTAP5pGeZuV",
  "key23": "xJHKfDNpSKxfDant9XNfq7U8n9DUMYNntUG4h1y1ohTPRcWjEZRPTksCKdjqvemFSrKhUyBqbaCx7x4Evq2vTZh",
  "key24": "2gcC1V3YXRzRK5pa9w2phMX4CmyYgjoqsQCoS3WL2bfYAqSfpRbb49DsuZkNBkRFpn1fdJvC9W1K343ZpKPyfHbD",
  "key25": "5pNDZ3wwydB6AhPZdmD8d2taf9M9SaLe1g8GcAv9MvfigSP8CrrfjWXu2qYwb3sfnPMWD4NsGaUbjr3bpNpKEaqr",
  "key26": "5c5d9LTAUwrA3EX3LYj4yug14ZQEnzZZGrzizGoeekDJKTiyscGUEwGDt59nP83aCp8scQpka67tFC5f9aygARzk",
  "key27": "i4L6iZ69YZ98zTMRFkhD7QBLUJp9W8BMR7JyhjvKsKm9bJw1Eu32iDTe86uk8NxdxAGmkAif9PMVCAqxAm4GGZQ",
  "key28": "4HEAa8rApMqA8KgK1UvPdaaDcff4QU9ZptCR9uR3Gy5H3Y813zfNcCN6pHSzxf66o8o1rHFWmec5ZnXY7S6sZ4jd",
  "key29": "5GhofKnv34iwxW6if9LQPBoZXjsPZFCGt7omD9aLn8FSBALYdwGeBLDvexvaYafaN4aEekY4Gq3ud8XhBCbjhEmQ",
  "key30": "3KdLM7sdjMZQSFj31RUNs1ZcKAQA7gBJEiejVFURYWQrixF86jmJKtFPqtD7sx7hsEf1GygA7RkbXgNv8LXYoDYm",
  "key31": "4FJK3VopcVqVG4U7kXHYFhLYyshNoJ4Jgcxn5twNVX6Y4sTx5iLz9dZWf7QGZx3sH7WWHKrdftJ7TXfUTuH6wobi",
  "key32": "4y1UTkGPZgsAQoNb8woXEoWkMyYSPeGEwTG8tgBpTboKienidXxk5SH4UXu6wNGMwMQjxNh5wd6Mr5urgF6xKsWq",
  "key33": "3nFYuwYfUwxHDwteCi9bvsspgw5aNVUYKC8YXmE9Cq2DK6kCBvQ9XKfzabGPrk1emBH12bemhJr7v7RygwhYuoRZ",
  "key34": "5upj9a69p5G9kKjdpWMi6CD7iCNx36wASTMaiywafPtSkdCfYzjjpkJ2pnF1tREUhRiQa58Rdm2mmUj1zaSvMDWy",
  "key35": "WdaCx6KFNANUSUqFM2CEFsFrHUhxfpXdUePwAp3H9mDcGY6Dr75TZibnsqGdnimXDy93v8aSrhSr7ikjt9vdS3d",
  "key36": "2ZPxA95AEmiHy8nKbhohQn6VPXSTUVEjqfwHQiNPA6vsPQb2Pb1WUmyPSSxQxQmHHEFPkCvFihCFPxNAUe5FrLSQ",
  "key37": "25dbH8Gcv1gkEh6vxoViGpckH96uem6SWM8QGzwQnyoYTFacFBd98gZZWGNh2oCPLKtn6WT4xa9HSNzXofMYYkVt",
  "key38": "4QyXRjf8gZst3Z43rgiEBNN58s9zxi2ir7PrSSVfzYQdgf8Z2Ly87KZuBbew3jcptSzWpnnKWLFNXJoaz2zhsiMk",
  "key39": "EXNRzt2BeqcVYEaCariGuouPhXMj1iRH4ao8weYYK31ZdsMKMayT7Kjx5LmjQ6JCbZJBKfPZgC7a4xSRu5TKueb",
  "key40": "67jkvsu9vX32KsHSTNopEU4JSNCta9tJh1QthynAconEcirGj4YbT3Tv3sfHuReTAp1hnsTiwkvfX3Z1wK3XJt46",
  "key41": "2zmxDAg3KiRFezQbrjC188aKPU9ZsZTLrQRQppzJiPgQYVf1rxpKUrGk58hQ8xqJ7yis2MwqXCtJHkWzabKqfjLW",
  "key42": "4bwEHK1JvRQ7V2ktCJUdHFRV3isQp5Avv8pdEoqRyu5D7v9geuM7VfMQEpMhTCAsuFEDkGhSruJZPdWCd2sBK3ff"
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
