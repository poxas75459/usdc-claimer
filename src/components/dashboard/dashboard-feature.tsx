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
    "4G3DCNqKMMSz153MtAbaPdKcAcXAX75GJxX69DivDYYoxGL6uA87ezhhTS7Gx1UqNXHEWafEt11ZUFBX89EeR7Bo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W1BKJXrZsMEukN3iD1JkiL4LzHDnxjFDm2KPYbn446UAgBtWw2JU5zYNXLqaZctFEisnMDiERbhzHBjYbuL4Tsw",
  "key1": "63HrJMU1CxnuB9uM4iyrzcFZN3E8B9EMtoAqzbgUr8JswLCAcqKYmfdN5RKLkMToLx7zdr8RxgwCQ9E8MVqCcmKW",
  "key2": "4zznqTpNJht7qKJRnmkTxHwb3WzSANLchLrwMBBAC1UKmuhiMMbw1WNqByntwb63KEbYnmPUHXrAB3RmkXhzP9v1",
  "key3": "5sZ88aKeae4UZvRtVSMqPaBJxhXjasSZyJ2bjXnXkkcxAqZR3ZGkWPrvpsjQ6bRLaV9CKBQWPkzdpamN5vpRvWar",
  "key4": "2foWnP77RuncgcDYEPEE5XNFDfoAsRmojEsYLZmXLuzo9fbFUppZh8KK2wJvBgWQMvSuwB2AcA7wj9X4Ga3TM1YQ",
  "key5": "3KVyquvX4MbrmtxvdM3WLgAtp5oLgRv7YwaE4aF6A64AK2CnQcJVwi2VDRmrGj3r2kVydSqUknWx5V15CtRw2yDj",
  "key6": "3y8u6PykkNoVYF98oAxxinWj8d7xZHjteHGi74j11rhKsaDtz1VjHFp1n4L94dVhfgbgxECJKakAz6nhitf7ooLe",
  "key7": "41u9Vc7vFidBPHBtF1GWGXjEw65FqUye9B8H9rfTNYvuB27rYQeZ6dgwEZ5vGtHvEsEvy15ui9UF4unwePM4VbM1",
  "key8": "2rwfn96xXjKwx41r5sJcY52w7ywAoQvJYosn4KsVV4Pa8ptEw5aL2Chtj1XeK5durgQ7rrDntUb9epGo6KyKCZ4P",
  "key9": "21gW8oXpHjKhZMzi5KqM3je3hJQGgeW139D7qZ3n13aCgD4SpqniRPTGPrUS9z9RJdscwp69SMvEYP6QcCpmmBsN",
  "key10": "3rFX2YQ73zpxJUJ5gc7hX3NrqFLqnyUfF5xjGJvf79aashJGZqcE2fPkGaRB4PPnQHRYJe7GRd1wzWdu9EhJUkce",
  "key11": "5UAogwjUrYNv4aTrXiiUj3QWuk5v2NeUJJZuGdofBDUmGFbtGWyC41Dc7PJYh7cGpVGsFsWDkJcNbjMoExpf6aRX",
  "key12": "5H5PJkgEB9qvtn5sqfjU8zZN6t5YAjHPAMBxqTgn8jjeBxfS88CNSbde22idSWGn1ujKQwe2CbGfSL4xqD9B7TvR",
  "key13": "3ZV5xQioB8x7okwkNET8W8MhndLkSqjfxgkHhbxox5n33sgkZuttHSGbYBnHdpiDUx6SinwCRSY5njdLvpme1hoR",
  "key14": "6Yc1MZZSq4YCWKczw9ewjWGKFRcYW1qiYbo7PVNXkF6pJtQ7Y39kXSVzu9txp5NZUcDhkv7KK99cYRpnrF1HR4j",
  "key15": "3oAWNME1mMWUwGBEZZxvmFLdkypVsWD4pi8nhA2dd2Kxeb6dFymMCpd1AaqFYWqPF98ZtbAfGmhxCx85Nwkc4eRp",
  "key16": "5bygJVjsu6ASJ5Mq9o56Q1HVA5YGZZchfbvturwzKW3Wz2rzgc7bsYy19W9DkHYyENAL49C4coD3HerUKzUrNpjS",
  "key17": "EMkMgiFM8iVE5is1yAqYsk2BVfnEL5xtPBqQy1mXSNuBFv2D2AQcYxyZFuLCFrtrwcDcCQExMTkxTu7enj8c5pe",
  "key18": "2Yq3wVbQ94PG1aXR8etb5nzfZ556TgPbBmtkjV78sdsgaPg9cPYNNsG4f9RaUmXZznWZq85btt6FaMxoAYm1XWJ9",
  "key19": "4dRSPn1GbKfUDfsbxxaEAhSSoDwWi6jqftvG5R3AbMVUsvSU6hvak8miGcrkmPCrxT1pM1CqzcWNfqkmrvpuYn1Q",
  "key20": "36m7Y5ktGmW7wXhWbSg3aGU5e99YNbNm33V883n8Hs3HGtdSD5HwR2J1YWkaZU5efMWwcL5qxnwnkfA7b5SKoCWR",
  "key21": "3NjT5TTFqbxz5SNMDKyUKhbPomwP6q22jAVWiC7Dci5QfnMmYd97RhJouZVNS8LKRSMQkzAh1h33sPNh7et4mJTU",
  "key22": "9CxWFrVN5G8U4xYLNz328WUJAEos7iVmyS9UubvHQ9HbFAMq8Wbjo9P4yfeCxmx2eiraBD6Xpe8RfAGqVRvy87R",
  "key23": "53QZNuXwWZW6xXB62581eCQYWayKsBAjJqbs4d3f3wkmLAPFdp3pSrar8D6QkuHa9FdXF7bmdGkbmc68pihmuAW",
  "key24": "38zg4oYpeDsjanZpcCpuH3UwKNEarmQqabSb7FgC9hBnZ28aru78Z9vsFT2PcV89Gb1hkMVywFkfY5Vyta7qJ3xH",
  "key25": "4ubsGGiZWyV6rbcL5e4Zi6j8M4JsGzMakTLUtuia5cirt1X7UpGWL5UjZhkFVp3kmxhP4ANRbhpJ5K6QBrrkEsQA",
  "key26": "3kDH6d5NGpHYDxXUGZwbUDyggHWkvcwts18Na3aacXwdf6YeHx26ZM7AvCeAxSypU4djuZAa4aJEm4Pmyroc3Wqv",
  "key27": "64bWrHPPvgNiEt5NnN2f4Env2hGad7QuxXNAULQsVgsSHmXQWRiRZgYrQmNuafN4XD8J1PiKhB1oi8i5SVxxdnwE",
  "key28": "63aTrsy1JJZE7acJXyXZiPsUCDS662rNaxRgGFMkbmVzoXM75MUSZWR42uog6VdNayLqnk7vbQiyzBhBuB7VwQCS",
  "key29": "4RNvcsGETuWuC1r7cCZGejfib8UbK9rjVqFhQD7eHJ4VgeTHszoHA82kcp6cpjXAneoYY6C6N9vZgZn3qh2YSUq8",
  "key30": "2dFdGsKzAdixujDWxxHe6KbUFUeZoMPDfQhxzt591sau5M8FKCnAVgiYGBHTUWYyuMn4f6i7VLQfoaJsfmfEJn5V",
  "key31": "4KNJLacgnc7GuftEUUjpKvU9zpekJSHaPveAciUrL9g1tp7B3RfuTQ2E2YR8Fg13zhaU5LvTYDHuuEqFdGr54hJx"
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
