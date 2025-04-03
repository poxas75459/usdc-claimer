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
    "4jtokR6EKU8s3afJ6xD8HNDN7FJZdmjjtKwiTkzRQWPR6n848GjC9tbqdd23wXrbNHoP9YKAPTfosZxSz8yY4HVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x57MRFfuqQnT5YMufZ8shnExqFAYkYnfBCF9GTHCywuZhyb9VNrH3xqiAsXg9E8LnVxLmTZN42VCuvYS869qGqn",
  "key1": "39oXXUyaMArCpNihMfnThd1Q2UiVxsLdkDmbh8hts7BVfwtr7HBjmqKDWLKeQLXuyKw97QEcFimPGX67hYKZbqcm",
  "key2": "36YG1WLZ6iXb1uUaiWRuKCU9rgFRZoPqdVfqP98nPjPpdP2iEPgjnwxFAzfne82bHtK3gcoBZfeyt2MQgjoNmPVu",
  "key3": "PdYaDfGnFCETN8CiaSPfkVxy5em3tSCMpcjmiXX67ztfA995btLWooAsFY2yFF33ZSPp6hjjh2Lx3jANaRhS6PC",
  "key4": "5V6STgve1KEcQUUzqePYBTi99tn7v8txm2YDA58odXFcRuXwWP2qT9a3yqQz5Q8JxKr18EPGmh3rMZNj4SsiAwDQ",
  "key5": "qb56jXQFzzijFMBrW5GYe2SfRiEeoaBdBdGvSzsGTHo53wsr6cegwsQyQiTWRjMkGSB13rJ8C5Uz2vKowuhe5rZ",
  "key6": "482HX6CuLmjYSotDc5ncVTy11RUtUqn7XJM9nfV1eBXimgDCHGQcaooZCyQA7NZbbyPvSVZP7cXrFV7CmNGukm5Y",
  "key7": "64ibCekJcCNvifK8Bh1ibK49tkBhAr9kjYxvpQ7fQXGEUxSJz2fHwX4Ysn34ZEpTkWBk1ER4arccWfgGVHfh1P8v",
  "key8": "4dYW1JMyznJWmQJiutviKedr4LRcB449ZwNPE73nxBhHZ3EUJSbmLFnmhH3ed9kwwM5DsEigKUYwcWQaPb14wfVa",
  "key9": "4h7nNTVLMSW7NjxCgN7aGY1PqGQQMt2Sxuw1ePhHgsaCVzy3DnU6a99YuNFn8PzSTBKtjaZKTdTR7NziUuxF4KcD",
  "key10": "4LsdGaQ4UZwHP8Nx8LVr9ZJjzejiPQox4vtpT6vnVVFGsHbtqjqxzTBiYo1HfpbcAzemWAZ3AYHneyAQ7m3ZxSDL",
  "key11": "4npShVNcaADnpRWSJ9WVznZ5mjHtST8K9WGwPUsHjiDxCcmdzSRW6zgtLLJhSTqGR6EksEuUnXvNZ9aGBZuhMX7f",
  "key12": "4WvUS9n7eGN6L1UpRu51BXfXKxtiKTeZudmuEnVciFwcbJkmrLGmFKNJ71jFJg1V6fJHzwbGnkNDvHSVKAQc2nMM",
  "key13": "35ei15VvWK7d26FEUB4Vp7WxZUmadJYuvEwLqy6QoLYcHh8i7MRr1jRtNXy7jr463gDb9PTmfQMXGshSV2JJrQhh",
  "key14": "4kEjh6FFs9drB6VnksApjF1tg4B1PKHduymBBSiZHFtd2Sp3NZFR5n166Rw6F9uoMQrRCnX7AzoiLZd9WeJRba2b",
  "key15": "4Diw7LFNxgK5wS1TggJLqCviZVYD1EHvTkayPUfdPrW5wVfTkTf5o7gb8WPva16vp7LdtgDFw9kG55hxsmLJfsb7",
  "key16": "4g3yP9pSDwLYz2mcZTvXLQer7Sq4ipXzZtJAurizvT1zZWPaXn33UMaPoRdSU6eqhdAtTkYkXScXsh13rztgF3jU",
  "key17": "253YpdNxgHecpdpiuKimqDNBWvEbMwKFe8zrrF5f3MiP2qQrmDb7qu7aFaA93NGaQ5Sed8LrA6TZXXSmVDAUkEaN",
  "key18": "59YdptKcSLG7vcQi5xenKsierJDQpxQhikKHtHSf3h5QYRvjWXdhkzHJJH7rETVdZ9pYrTrkZ3akv59w4V25sHwo",
  "key19": "62jwcBch4bW3UJuogXyFGvqSoUBJqL6NSVJAK7tYBjKzZ2KztzXBnsTtKVMMuKgFYxp4JsxvKaXJ66gsx4uFm5Pd",
  "key20": "5uutnWiRA2XK7YkL7qKdoTekQxW4RwFFjL6Mbp29KaZ9Se4YgXsf6o6kyF8dBdapBG94HUxnetFuZf6Q1Vsxb3J1",
  "key21": "3LTzVGr6ZNzgdSnNSheg2JVQ8NkbxV3QRUzn7iqkpMhk9QbbRNcJbucw1J1zJ473szr8EW7zeDkaQzDt4J4o5NgD",
  "key22": "21JitNwJWArZxne1povzBUBNe7xsWo3TXvHutojeXkRzBC3nyAxEmcj8Gp4C63t2y1TzKQYw2ihaSVFeZpNgzLTg",
  "key23": "2z28UD1LhEXZ4DxP6NvnXvbwsZ2yfPwDuCUPz7eo4794yJtta467f6yok7WHdkZFLpAPGy3KHbEePHNVmKyPRSnR",
  "key24": "3gnKqLTnB4REAHBVPMZmN1NihtwByToJ8hUvMwV7RNGWoeBvYJoksRFKmpTL8wQpPZN5q6eh1QiTbQ9G9R4wRwbi",
  "key25": "3SyNgBsoosRDoGwYnf76RGqJ6kNrd6A4gZ3qaZiVb2CDx7BALnqUp4RrfxNPpuMGG99Tmcw3G7CQ6mYpx5jFs9Pu",
  "key26": "33UZwyVEMpSgEwoECE5jmZEkVh2kwsaAvYu27jEk63dMBBNsZqYJWbqXxvqdwgCTg9mzobqV4b4ur6F6bBYNSWxz",
  "key27": "4FdnRVGssBEjUUqpRtxDSdJBSkAjeN4aq4UKJ1LuhVpj8K2vzbZeWTSmiZT7rsUEfWvt9UxokpLBDm2pjjw9vosj",
  "key28": "2hAMwBENGNpzLeKBBwgTtkLMdhjDU6fPvVi4QyM2gNPb69Szinx6JCiD1rBLqHcVP4s35EQ66e8S39F3PTyQ4T1c",
  "key29": "5R4N61qrGX2pN2GQ8HBMy6PfxZXuXi9zxq2Dintxfk8nEQVokrdhhigxJGPNHNemFefcYWE4Hdz3TBr65kbk7mKo",
  "key30": "2u7jRrJq5a5f33aqJQKZA82NsWznToXZU7JvdSQhvTg6qsiE8PfPNmt9GCuYrS7yxPfvR4QyVfHuyZWySz8QHjNo",
  "key31": "4gaQ1s6Xq17NCwvDDBbMsrmGmUAd1oiiVevGQZBR6upYHc9eQjtCGFZSC8sRqgywcnG75XNN5oqcpvgpyQJZadoH",
  "key32": "DKeBuCiq4JA9ZTXctzXTMxpMwe4KtSpQtfomgyeJ3z977wZSzpgnkk7m6JcJKxWiK2reFzFsdp6irvY85hHQcoB",
  "key33": "bB4fdUhsm3gWhNhmZ2yDYzYxus5tqB4WRPs7XYCc1ek5GMd7sZT3WcyNtpgKWNFk1L9ZYRkqFLacs7mHfPCy1Rj",
  "key34": "3eQE64SZezx4Rh9pA9NP8bNfgEtDoEB3Du9eyvimESPmnqLF3rnTVwSyw37QCanHpSrqwDCKLkjsTfK5iUFMWW8b"
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
