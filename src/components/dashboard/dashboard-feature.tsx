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
    "4gmk3kqax2DmeiMXAeLrqR5P5PgtG6hUt467jWeFfKtahMjerSHFZPmJePq6g3UMNfGXUzdivujowFQuuy8v3XJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vo6UHfmaSDyV3dANK9hsRv98ydiu4Zg6x1SWs7dirSP7txwm84V8bwQvhXEs1DbPgr1pDDMWa2wQmXdJYvZHd1w",
  "key1": "4w8yzUUyDS6ahJ2PcWNDcUenrqNYXRBSLB1aRkkyVbVkoQUhg3RCkbndxNasFKPTuRuZdWQ3xk98QAJL4kuJ8z9a",
  "key2": "3iRs3CuvXpspRZCYeTR9YRKkc4kJhxsSeXTUqKYHe2Gbs57hmWYKVQ4a6kv6thVJMbcJVRXyWWaXWDxo9V17ZwNE",
  "key3": "5mbs7GsvrGNhBbSydwP5xCd4fYFcoL5tmuxy87Sw4Th2TMp2RGr8sCK3poS3p9zmTGvVbFyw9cWaFG6MoThBm5cU",
  "key4": "hw66ZpbiHTYyB6Xhm4afzEhZHsBJVvg1FskLkNvP9NepgZhbTZvqh1VZPb5Edu1MNuMcKzhUaZPiZmkrx3YfKh3",
  "key5": "37NvqUhQ4AFd3oU4y1BtuaHoNuzXR6BshefKjb1mchN9iMg9wcFqoJpd44ub9wz4PBkBFZn9tsJHaqjY51E1U7Ya",
  "key6": "38XRGhJve4s5wjaaYiQJm1zNHohePGk4tEKFaLu3vBuNnG4ZLjGQCQecWBg96irwENwaRsxEzmRyQczfREpKkaX6",
  "key7": "5h9wLgqCHK6qi36Ae8W9JkPummhunpKsB5WNz7fXZfqaWLVXkKmJkaiRf5HKhBW8bLDn5AtF16osjJQepf9UTKRc",
  "key8": "JNCc73kwNuJjc18RudaG33PTKsEFYpyno2XqxhpQUSh9ed4EYXYg64WGdPN5AaWNK7tFMFfnobHHhfGY1Jc13jK",
  "key9": "2GRtZkp8i3B3Ad2mtb7bHUYxKhpXJiwVBK2hwDdep42eXnsbfSqJ4uiMJZeErRb4ykJRNmiBYQgbUsVxkyGZNvbx",
  "key10": "27Xs8dQQdDy65t9AiLBb5VMwcNKCP74a5DL1hgeeLmbRpUDe3C7F68GXoUZjmHEtFaiuWPSEnsJxxWbSVFmC9oHW",
  "key11": "5uGihuG7vpjU1r76NdNkJsxGiHtUC4vv9Gpjnqv4yhQ8g8Ka41kQkffqEAptNbsJwNYrwUHiFfs8aPYmvCbzJpj7",
  "key12": "2ncNTCRmfVckh6PVnXnyvEK9NcYo1jrNWVh3CLx1yQuZ5QhaFNs6aXi3Ezdig7PwfUxwJHnH1okzkDVfW97jgH14",
  "key13": "3xGNXbkjsU9wEWWHXcVF9aLNEJE3mqVeovefrzvoci8moJvWVcN5nCiMuDgrPRA5psSbG8NabAHJW51PbrQQ1RKR",
  "key14": "2hXd5ZjdEWnaWQLUae1GApJdy5EW3HJKo1sqs2q12zwseZmUe3JeEbzyJGnjVAGgtw6ztwXPXNzaXQ5xqFuB254f",
  "key15": "2U5Vw1ECghBztH6dSjorhbskpTuFiiw6eQkAjCeBL9vLJJYuPxsC4MNMAsmXdDqGXtCPnxPDHjfnncs4biK6pEXH",
  "key16": "4kjhbgZEMjYEjakc3UigVS1mwyWmfsKSKfoWtfWtxBYX4Kd3w1vg2uJE3mQudPR7ccfRPQovRqt4z97pk7adk8uz",
  "key17": "62Fd15i8iDbwKti72QoGAoNfpz3eG4GkEgRMP2qCPWoL7Qx3xKvwFcLC5kLwEusiivzpG8Dr6bHktdEDkxPA59tz",
  "key18": "2HwKT1tXXb1d7ggh24ZwMM8tU6dstFpj233fKDSkaWe99WZKgTb5x8SpLc1PY5bSvuodXDNzZ1LYt9wzEe3b6c27",
  "key19": "vvpVWRyowijPWDSoTWHqqFGEVTRfQSwggUJxJ4ccVbrhJHqpaPtvLdwzz52Xxt9m8yF4a2ozjRMrYCHyyTTNcMX",
  "key20": "5CcgnV5Q6rqv6HdxBnxE1M7H3QLdFfAnsTGCE2STjhfSr4voHe8TBGwSph3rt5T8NNj8V3jYBnLuAgq1nqKRBLbp",
  "key21": "64umwThhhJscMaiS4tcMkyKXzRR45mj7gnwWJKsS4j9F9ZQgrPJ5MvtwT2ffBqiQfXkAiS6F4iJk89PdvaVbxCot",
  "key22": "5WLFARwLtkASdU8QrZT24pNKUdV95u7xStQE7asDdbavYzsTvSSgpsqLYkTEMQ1BX5PpGGHGXap2fbMYLa1N9ath",
  "key23": "Ly4VQjafSBxqrHv6TxaWDUbxGQhQgJsKp8yksYRsinqX5Ng5mW2uyAyzJ9dNaiiUG63aBFdPN7PGDhKvP2JU2BJ",
  "key24": "4sz43YeXVAQmcoyr59GMC7yiraTs3wtUwvN7Lcmx37txAoFZzYowH7u73SQSXD7icASPpqxFj3isyNganAzxXuUB",
  "key25": "5nSsjjo81roCKzXbPajrUxXzagG5ZbzJtF8QcPfgYdRc3JXfU98HZhoG6zh7rAcEZ8BedLSuzQEziGLTXrahAe82",
  "key26": "J42HRnv1mJ3bK9R84UYQZeFaNVx1q4zE6mSMA9HPpUYaLZbbwSN3cepvA9t2ANLHeUv3BMGSKnvD1Jg9MJ57Nds",
  "key27": "RN23ns6Vmvnxe9M4QMUbwubt57yxkw5Fw5erbgGKi55p2izAFJTEJU4qNeGp1nDW3EbbxhE9X8xzubwutWG2noQ",
  "key28": "27HWXNeUJr45a23UQm4CCtaUp7Q5FVDhhmdQtbxBgxShYL8DQurhSvjNrDfaPJPvMDWnqBWH8dPvnoQhc2es3khW",
  "key29": "4Eb41Sx6HEsGN9nLMbv5syjhwmwov53xHPN4aAUPtjTZF6LWdhcK99pgq7LJEq66vEsakTAhZGiUwc2KTj3PtKzF",
  "key30": "3g9eLFUcAL7MZ5j9RyyPgkikz3gvEMtG9bzrHRTNcvYLREn2BocsXn8AUJeGWxuMoAhNbYX239jxh94Apv2TDn9m",
  "key31": "JDDU7pjVstFFPR2ukany2ZUbieQuGBno3WTHMAfpfiEhUcTT9AFEEvdjxsXw2taJMJbnHqpokJXUt8cMx97ZheU",
  "key32": "2voXzTmJgdHm1K3srr9opnh29YSSDBSKRw7ZR6cutamvB3bkPwM3gJQw7u7BSNdyeADqjNCmKvdX31xGRZd5AD5e",
  "key33": "4M11JrVHHgfMXVziKPMpD6CLYPKUaJouUtTpBUiN132fZ7DBXjJCAHV6jna82yh8uiMB5DaMkXrDQNnr4DWCSSxz",
  "key34": "oezYNu2v9QMt4iZxmyjSKPCVJC6W5tqKVk76N9V2PsiQHPwVHqsJQ5zT9KPqcuAvhKRm3rQmzCtTEGxMpjpqVoG",
  "key35": "4CtzLkEmDRdr4qCXCyTFrAfiZUbhBsb8eBE3QuaTvaxnnkZhYkpvcZSVfNLwx1FqRKz3JSSWE1Z3RQXi7zcGp3jW"
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
