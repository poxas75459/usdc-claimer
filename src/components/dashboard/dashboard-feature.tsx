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
    "5shvV6D7xDXMwq5eFrsAJFs9HMrETrea9ppgG7otSmQ1qhyFSHNyKXBjU5eDPmfJrwFEi7Zuo2TmVPLgdRjUjmZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38tLLPf2tNmwUfVUVbAkdSaTZRtFu94gztPyh9j385Dum97kkL4SqDZs6jvnZMW69GLNhyoPHVf8wUzzFN5RtzKK",
  "key1": "dM67gmq8zSFJz3dkWJ2YeG7inXqa4xKzFaowgaUGR25HWVngnBYy2iJ1wPgp4Df2nHXVg7oza4waocvzFowBaRY",
  "key2": "38CkSXmM48jFaD8ADkN23iKMHSGdG8f4ozu2Fz3Es4regkEVY3LuG1ZHGMXVFQPwJUBQoR6qgV5x3eq7MFxXjUCC",
  "key3": "67cCKcEwSKND9nBEvXY26fcqP4o32Vm8nThxVoaN7KF8QgZEzLdei3b13DsciDd9zcFFHWRyc5K5jxG27hMBh44x",
  "key4": "Jh52ZVDgX2mZudNc4yR7qU5Thxb1JMy9q6AAoffuBwHA6mA8sUWFHUF2VXEqL1sChy71fKg6kdK8jwRv5kdZdc2",
  "key5": "H5ewoHfQdNkkdRzXSZJJcEdWwDFUrBZgKuNEjnJ446EdsmCZajzZw7ugXJQJSHf6Rr21MJJTVpsPFGAsUM6KfBk",
  "key6": "5XTrXcnNDaUHmEUaQcCG279XqsRAGbeMRcDGNLPquCWZrppq4pfNrXffLHcdogrp65gvwBDivVGzzn4SMpiuGYUG",
  "key7": "5kQ9Bo4pgyyvVnYZZdRerdHWw6cnszLFYwdCvyTfwnrXDGFLcgSGYjr7SQtFb7SN1EBZQiFqYnnESbv2oPTvepGu",
  "key8": "rVHGuvTpxqkvfPv1JghuuQFQ8yv7sBDHmP4dPgzEWzeJAXGntMM1s7nMLh5g185jMTsvyHhd6MmdYKMXREDSoKQ",
  "key9": "DrDvwfoYnid5K9ZnChnd1Rg3Q4f3a2HzTit72Wjyy4MF9sj2Akou1PuPzbEG4f3dTM6CHqFcNrPxLjmo1VeWhtp",
  "key10": "24GpufnxFurQ4Dbvfjp5ngkxYFznxQvEiw81yw4WLGuoWNsTiGQNkVjXeRGVpDMCTkbq5fQ4FES7PBKfQjvvZXpx",
  "key11": "3Q5LQYA14mT3oVqTvSqMdSoCTyJGZuBXiUwFuKt5MDtMgQyeeGqLXxh2gG8SJv6XQCULwrKU8JkjZ2kbqAfMNadm",
  "key12": "B6WCSzYEDDDtLwroXxqU5vsP3Vqo2XpZoLK7FarsokEXfgtEN8cYfmnUMNgXosLnbjJCbpFqw8MjyzWU3k9K7re",
  "key13": "vTNKFU36r4xWQpc9HyyRaJf22sj9Ci44KeFvCpDS2PrGgJg8JuM2W9PZZLtZA4wzALbKwaLdtnt2AivqyRmVzVW",
  "key14": "3cDg33uKPzaCeGZ7oyZsjpGK3VnF6hj19AHjNVazfkXVH3h9BVUACipUUmwz9ruXQxJuKCJSyfAmctxvmdHJ6BX7",
  "key15": "4k3YgrwVvoxLmAR2HCqx2ERKi6N8cenaVq5uJQMgk41NQaRreMkNt1at9ngfwgLQnkTYBvPE4M93vh2kv3KJLurc",
  "key16": "2ifrecUBkoqtMn4PivhK35jPz87miQq7pfAxRUH4iSXgcFcvS3fq5QnzTXJgd8UPUW3DNnVatoMqJpHk5Afw9vy9",
  "key17": "2gNuwgcoBNBmVixcdPd1FJWTyAEbjQLLY3JjPYoRz6ryuERVFyGKMWoZvw38wD16KEQsLnmsSYYuxSTVvq9WngHp",
  "key18": "4jtiLEy8H5xYwTNP9U7b8GhL8vgUS1FcA1rZfN54h8qvWhbJLzstBr7M5yn6ipWd3Rm6AbHfFvwD62QFwbwb2Sbb",
  "key19": "3UnRq4BSrTZkyk2awCht1xpsXehS5vFK2MeMndZ53D8A6ehpAT3yMBbBDQMhX65nWadkkqF6rog5urVP9zuF2VJt",
  "key20": "pjNsqgW4WLYVp5svdeU8jL9otuXv1tr6j8fmYr2E5amVHchcqZfM8Nm5XEwBtZGNyh3LbNpnkmNwAM2B5pc3AWR",
  "key21": "38Pejg2vmg8KDrHQWF3VvdAc9NxWFkYLevvjt1psv6niMgxPpLJ1PaWT2TeQwn9xFHuNxvnncjKZTAWPFNqtuKDz",
  "key22": "3B48MKFPCdPWfqDFqfXZYymwZskJaSPT2xsTHmMxTRucyy58NtwkgDym2epSfwA1DgbjPZqPV94LSrs6o7diPeVZ",
  "key23": "3GoyY4jMiAP2kZUNstdWLsKuRvXzvGEfWJ65qncR7t8n56dpdnZqrPP3hismMhiu43tW9A8YftCQ82guoqv8YdDx",
  "key24": "5v7czeQfQ6tFNAHeFBud3rfWSAVsBMR22c4BkvrGePyePpGdMyLCsWRXkEW7BGirAjL4TGMCBbcRjF4aFHEXzyGu",
  "key25": "GhiVmX2mNEKR7kgvACBfzdoPDvCuAwSRT95Vgx53tvAqC1gzatM2vYfbbCpaL6UHbS2S8q5G4uwiaWcLv66pgrs",
  "key26": "2JVmguW67gnR7BkmXbjdhzEXDstunJEcAe9e3JN7qekL8YhHhoVUKmHyeJZte9CbEwUFJG8oXXbD7wrSmfneDSMH",
  "key27": "3ozARWNRt9ugfdyNf4JkXnraBtKPEB1oxaxwtGnCb9odvSiEnignm2GVWZ7HtHVCzePkF82EpCfBg7xWePBWZZ1y",
  "key28": "5XMLQfdKnQx6R6mYbQRc7dfnRDZPBRp4iNz7uoQHY4iEXBqE24BRfJHEUVHm6qvRXBiKcq4oyKGvRKecRGdxCjJD",
  "key29": "gVdrCTwS1SGwA5BBnpRA6xAopDQQuZt3HmC2MiXyfcbBQ9rSfjRWx5XtAq2jHnubta7waujfZJA4T9AyATQ5c7B",
  "key30": "34UjHTq9J8mvy4gwNj48e1GfnZAx8PxGXGQczo2SAshWj2eodtpVqDic7fGfCM6q3iovmQx1R4m9wFwDDrXjaQ4E",
  "key31": "2y5x5TQh1sVhq2px1rtC7ctnZcfGYe7TVHk2TxnU7ztE8vZLm64cxVNXfjb1wwhnw6fqPgtFMvSoWz2JsPaGjPjx"
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
