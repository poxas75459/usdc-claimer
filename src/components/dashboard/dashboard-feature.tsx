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
    "4KpHroSvsHA2bUbWcRERBKQCtsYSMJEw5Tu6c8dZtoh3GmN1Cviep9sKjQJQ36HRhoLBPbe68vMmESD22om72yKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9BtVCzokP75E8YcQeyTZ3nFWFPFY3FHpFWe2WW6J18BGu9qBRJvWwiTgmhWBRc8zxisckpi11qFaUg5vfqbwVps",
  "key1": "4mRhnBn9eNHCTVgDuENCViwLdz6UdQTXwyLe25NmbKHxJQ3Tkmn5LvXfFSTGEKLY88NV6NhXi6cszhZsXsC94Swm",
  "key2": "2rdeKnmc12M6xKnU5Bjgj9JSCkbzPsDU8WKn69K727vMTazDrcJetSBaphQkCMgCMc4PXwwtKscaXdRjEd78vJn6",
  "key3": "uuehJXfWDwD6QmGkXpt1gX7Cd69b9EeHk9rdy1M9U8o7rZ1yvwFpPWv7CxWLQ6xyr8RNSJRriBRDTBHZoS5fwZY",
  "key4": "3WXBinYCuDXdDBu6hJaTpeTtodRDau8CEAXZ1GDLfbMcm9cgRjtNjHAHw3PsVPp1aMHS57No5V9EJpP5P9bybbSn",
  "key5": "4pJP1VBEK2sKBibbg2nXSm4CaVsrwuyGbCraQUbibG6Vjay5oakKFaBuNcrqNQododrEqdxc1jSHYm9CYVQLbhqY",
  "key6": "3WE4k6J6MCUadrU2ird6osLhcemAGkx1y79YTUJRf6HcwjkXkUihBWiqpizvrzdUQwHwEBx3LGX5htGb9ecpbgWg",
  "key7": "53ru4hpZeziYbsjAvkPbXSCpoXWpc2bop7bnt5ABCuvXLDgwhqgzycnyXHpLaoiEfTWyf4PieiaScY3csQXowqvZ",
  "key8": "rVT6GM23y2cwW3YW5rAvLst5c552WPCUJFHzcoQzUctqPbLDCgmVMrKq9agyHHRUKKpf3QcD3HUVVQbs7uayWPB",
  "key9": "2eAhtpGQAduZy6R98R19qcR47xFvmaFDVx1cmk3a3gcktLVZjmGQku16dkFN7ouFq5vz4kw9xxP6WVF4PNSyGRom",
  "key10": "65guF8hJo8QDCM4i5JFsLneTSTrTpe9AFVb3wWrZckqQsfx8utHa1Ebc7fJATRsqKcCimuJQJXv6imvPzjhsnFBD",
  "key11": "4EcfLZLv7pCxs6V1RqAfYeWvjS8ha8mgzRdoZzh8jAW6bzGY1fdiRuuJpFLsqVtU6UyhwyoP12gq8HpFJvZ2wT6P",
  "key12": "58MgNXe4nhi6eSd9CxQnCd7hqoZKenMCeoPfxnApRMj5h9adsAdu1sAWasT18TjyfTKfinY8mXdJGw37Yce17zZU",
  "key13": "2hqW8nW4xQH8VxACeesWjSf42W5jaShBkzWrxtNJh1JpzofnK7wQBgy3Px8E7rj1e6WVMkvYDVm5EC98WGNpnJVp",
  "key14": "5gxqMrjGmUVcwy6GmRWMwDtS4vYFwCxdjtpBeVUHZL7RW6vU9wt2y8RC7tETVhBtymtVF9WnAtSfXTmbLq3txtAG",
  "key15": "37rKJbhkkeZXaEbigiWVeWcYEjSKSqoM6UHhPfSiKffKUtqnf37Q5CjVzCtNaZ4xYagx1DyDjQaUWET37Ayk9EcX",
  "key16": "52syMjqZ499mwRxoEyWTU8i4DoztFjyvCSDdUCseQQgtheLhDNdka5zS2m551tprC7wWKmpWJKwDn9sr9XSiEwxm",
  "key17": "25PLuAmXybi1bdfwTKu9ffaFfCjJeaMXReJvzi8bXtdUqGZ7w5LefPKPwk1Rc8YcDzx1WWEgbsyksJAuuHfbbdFo",
  "key18": "jbfyyZeNEzdqVHiajKXMbhPskmXuBjWATRvGC9xwcdvhrwFwYSkdea8kCcDyPxAifGF4KtujTyoBEKymUYwVqzZ",
  "key19": "5UAW3RwxQeNYxYigNwNKrTkexCqkto2YEq957WSPMKeCiTVypTJTj8bUJxNxqfzXroNmGHbmBo5QeCA2RTTeh9RV",
  "key20": "2geAPL9ZcYM6tz9gMGweombhW9o85o8ke18LYBeSXFfi3EjfBSFGwCFJVTbZEcX1soUezZnE4nKhqxXiZgTWHSwf",
  "key21": "3G7XX416c2ynwdBDb49RxNmRdHBw4B1fcriGRKADT6W9SqRyyvt928XppYBY1KT83myXB1bCYucpgiqN6DEZ4T9c",
  "key22": "3kLfJrGwtcr61U81711b5GAX9bkyB9doESQe5AzK5dokDWVjD2yYsuX3gz38WX3NY7u5rKSheszSxJwNGCZ8rqV6",
  "key23": "3uNwQB6oyb6rMFkAczCtxHyUa4PtBPADhwT9zodgoQfKTV2y7hEyaXSWQM4xH9mDLTx52K9gGdNrwL6dtmxE3nm9",
  "key24": "2UodezU75Fx4em77a2suJk2gQGqABwhMJ2BqvLqR327cx8Xb1L8ou2PyXxFbwAvg7RmUuGBRgYwyZ9Eoqhqmvv4u",
  "key25": "2tdk1wUn8ojfRo8VhE7MhvbfcQ8fiDijW4Bk9QrJoqCEWn9SfjwU7zAT37kuBNAYN8vTVtJXuY4DQUtkgdqUEcUk",
  "key26": "26uxXhCYKQEwcProL4MkPAPM3NmM6mM8nGELuDALX93WiS29CSVrSg2J1e5rJmCXvgpAwJZeuXTX7TN19MChZPqv",
  "key27": "4wMChqGtrqdByfPFG36x17E9gzKW5fyLfWzWvFfEdHtifBK5tjZwkkqJHYTKSCdDmYW8pwyAo6cfS9jkVknN5REs"
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
