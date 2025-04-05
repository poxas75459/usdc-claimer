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
    "5v1XPYLJZ61no4Gv9dGmUwKF3aixzkdWt2yAbqqoPKxLjSbPCKC2s3398VmQTAHJjLdHLEM8qE3fR4zrLULWrMxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JtkNSbA8jrj2kwXZ1Tud7WC9i6YxsRh82vczRfiapGRAheP7NnYHspu1MdaBV7cQhZgiKSi39dcUN4Nw4rEGYS6",
  "key1": "2fAMB67KunkkjvHmMQy6tX93kBUzaacNtFkjDG4PF7n13nspg3rUXye5N8ANcZfYcWLDqTHqe5i5cQaUcQZAsSbS",
  "key2": "7gWqSmtiyduWGj5Cc685jzm9K4NYmf5MDAb5RXvMhVCrYCuhNXpiD5MLVfBYGe9gUH3THb4iNVpmwXc4yem5boU",
  "key3": "4MBesuVgq2gAodtoViNe9DP9LZwteaC2weBy3fNzo9ZCuetDfg1y3pG6zHwuQwGQCMS8Qu19hLqTE1u21SEkUZ1Q",
  "key4": "49hmeWCP8yoARNYaBRWkLkruM1VFNQiPJaUCbSr2jnztpFwej8XDrCYLrHVi5nhUspCsb8B8JpfLro5zznXPUhz8",
  "key5": "5Vou1fWbf9MocjvfRMNnfP1FKiHPL7yzsFvffs6fvFo3cB9vPCQps1633pqiTnwQbh3JsWUyBZHGsenrZAWRSeRP",
  "key6": "2yroLKz4jrp99VrbifixJfAhUGUoCjqYPdBLmVbS9nkSt5vNwucLiMq7Kdm1eKUmHu4gKc3zeahgD7v3Lh96xCdF",
  "key7": "2Sgj6pxGKMKfRnxqGEZxytjJoSyjskh2x6WY59VgVNVtbncNX2eXDERuQezVQYFaePcAHcAuJt1vixxH3pzPvPmi",
  "key8": "2FaTC4NEy1CPF9VB5TwvCbqJzhE6n5qM2F6i6VSirqqb25g15YbB3JKDtuwn1Vv1zxriyxppSUPwrWnTo4ZKBeZb",
  "key9": "4B4tHFN1nTjbsfwvZVwfzLbh29P6aRXEgaiAxyX8FPnDSS3SExadjxCKPxtvcy1VLqtFj1q49a8HXZH7NKeEGhSz",
  "key10": "5p2DkzStmrPDQ4UbzWwYE7CcMRj7cQi3AP4oNRx5n12w7NJ9f6h5ceEQfjH1oiESqjDJrgfgDKzkwk2zMknEE7ia",
  "key11": "3tebu9RUnqAkyfPo1rFuqqYPc5XYNMXVkajirKuB2Mgu95CWiFu4z9n62eaPbdwuzJ68qnwRd5rJdzn6ionAcUgj",
  "key12": "38Qvv6BkcgFNQdrLmstJDQYumZH3j5no5YX3ewGpTE7QHJbMeE6GsvcUNJpCJYibZM7J7K4gdJkuthoYmFzX51z",
  "key13": "XEPGDEhgkyT7rBQ8SsVjTx7krJetXU7PjBRqUQ1eAKwSpWeCnxvJjjEGp2fJhAfb7seUHvq6b94itARJ4ffZqNB",
  "key14": "w4cw8EjXygmwimy6PJLXcgDskP83yBjW65oaGVcMTypNUkFDHkKmzZ4cZg3AATKkK763dUkXZ3sUVQG8NRad2Ff",
  "key15": "56sbrh2vTWq8Td34JkduDg3uerL9WXfA2yjcTZsANJLrNnXun9ontTcNQ8QgobLVZkUXJgu4WGHiGd3hygziqRNK",
  "key16": "55dCAhRaqW92HN4h93uStjWEmRf99WDhd6LdH7vjgd1MuNyCH8fyb4WtLkHNZgUWJd6iuxv3U7ALKgeTyvELJo5T",
  "key17": "54exsGKJBmgvuHyothnGHGpRzpNm7a2z4ntYsSCg4krbw9xWa85TbQSamjNaxrtW4Dba9oVdMoKAcNW2Dr2CFqhS",
  "key18": "YAQtWn9xEK5LxF6hx9dnPsj3kzXMDpj2LcMCBk32MWwRBrfMbKwEwy92NJRxHeARVJYUjks8G8N5K3GRrrDgdhp",
  "key19": "5upb6rvTgwAJtPpK71TMRwWS2UcHcJTkZzRD3jYBdXJNrVXSDUD8JWrfNYdwzVYPuwMW67E8sdDpWqoMFicEgd7w",
  "key20": "5ZD43kLvycRKDk7v2PiVtAje7Maa5qNbYSSmpbWxDfzxRHcwGuhH4usESZVt1GdJYxJVh4nfjAv9xb56UeyQNCvE",
  "key21": "2QhbY8pYHAjfo7VgGGTgagYfykzrLpD2j5RnGEjFU9At7K4HDV8x3XhpGV4Ajw7c5Fb5LgnyTFgTsqgZGPi5NVtT",
  "key22": "t5rorhn5uEwReutUSqj5avHpk9myeFXpJhdwRGd8g9VXN9rZBGTx92oxEdqbt9R4oCNFhozTHemKgmFWNG6CFQb",
  "key23": "2ee86hQAe2y1K4nGdhARngr7H5wBf5cPwA4DmvoGxZVYdpHYDCN1JHSzL4e6gJwd3cGvbEdk5enC5y5QVSjEXShW",
  "key24": "4j88n2MR7JGomvKMj13HW8qCbCatfABvuwsrTtjNP5H6UF6fhBDT3Y31p6sPWBFmeVEA58EqaCftoJAnmgE9CstX",
  "key25": "2R2cEH28SgHaASfcggHstd8eCN2uz7iCesLadJ3SQ5eqyd3hLhLT2nWZTtGsR1QdMxR4F51Qx7aNnXxpaFCvVJKe",
  "key26": "4SrVsuxXEx7Y65qHynC6xTS4hQpvjFSR4eznm4QWQcCDFxJu1dDpzLLLEWQsXgu2PiuxCSxW4yVgF3CqUTcQ9ERb",
  "key27": "4KuWW748t6LJGwLLFJFbTjXyfEEdhc2hSrQFw5bw9vf7SKzAn7k6KoCR71BahVYmxrf3JHCAsEKao3AMPoE67WwD",
  "key28": "QinzaiY8VT4TdqVXBBDDjaUChmqGiBjY8BFqcw41eDj68JLfxFS4dUD3r9aAjAcgViaxftcn5SpGN7RQM2tLAPT",
  "key29": "3tkoTRDytDiJMQcuZid5wnDxKhWMkXsvRDf4ZyZETiYXfMrYKQzeLeRpVYeKf52HMzT7wPZuFWRMDxcyptoRe92f",
  "key30": "4uFQecNW9dPf2pmtnF9sw3oefbMrDfqak9BPQiXV51pt9F3aVbLAxfcSxD7N81CqTJnfh48AAazkv6TdaRskbDvo",
  "key31": "4ft233Tr9Fhp4HN85hGfZpkthFa85deatwtmr5oTW9jsbAunEDBCSRPwapoJXZTuTMnuEmwWfKBK3wkxJVqHn9Us",
  "key32": "4kyUYPhmfQrb4rWQAdx9xvoYVfHvhHnrLbbsdgBGu1XzvD3PtUmGv3vzDbQFFedqrX3AzpE8B8SjJ3C6dn95tkxX",
  "key33": "UYrWBA8nLR9itbYMSsV3zHKbUGfP1HaQhSS3oLNENgGVvW3YJyhQpdEB2ngEGxqnEYJEj1V3zs6EXjAj2Y7hVTi",
  "key34": "4AyF3zMdRKLTdhFMRpHNFv1PF3oZdJjTugZhtiYgnbtuXiTTWWAi1oMQzv6TWckpXSdrjG91coTCTu2UgfaAJ15d",
  "key35": "5sStNjaV2jXYiBod13NRN44T8Jfyrwc4KN24t97F49QekrVN7kNME5oiW4dqpoTNbJMpZcYfJ7HWZYFswWrin6bt",
  "key36": "4zxRE2sgctJKrEhWAoXEcoEMh9qpTkDDksUAobnQ3nHnvVGG2pj89P7RDQzFLzimSbEnuYvCQ3vYKrvpCJQMmWSp"
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
