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
    "2Nv8AYViESAdzvrBPY6EY8MH7YDDpCb7rntr186jGBX88YoyjJLYWDMTEwhAqmqNJ1wQuqLDj7RJBJdFh8FMYjPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UY1Ud4GuKRTrosoQc8GE1uh8GoipCfrQTpUhUR6CqovSC8nWZxsMYTNi9n3w2YRXHBVS2zsp54Qnz9MvHawq7zK",
  "key1": "4fp2XYxnpQtSbF4kknwVrH3ZG3VSgqqBLw86Lw6pzKKkNYgoLycRdRrbKEyw3nntUgrMMMUFDWH3QCknF4JaNS5a",
  "key2": "3PeyEj6CWoephVbJxvBBWu67rCbH3YQHcu4upCgZrwAjnJ6DLXJr4Nxzgtif2RAjRy4u51BYoBnkixfhpKzgzD2y",
  "key3": "VVq2KepdUCxPSvV8f5iqJ8LPFgS4aKdPnKmtwViaxNknThsvPWfCJQ3TPZdUtbMtaRjrt9FUKAH7sWQ2wtCPKGM",
  "key4": "FR57bP427VowXK6ZUSSAve5HDm4ZhqKkyGTFosDAvPS24C1vHzVHCAdEEW9zjiPS1VsXCxQJuz3APWH4vbhZ19C",
  "key5": "L9oqpMx79iPAahcw6DSQFqzsTYB4bxoM5vNUasPe2gucjWsVkBEkjdj3VjDHbJCzj4saQJnqi23JdDxMGLPoWkZ",
  "key6": "gUVeBBLZMUe9zG4GaPfdv3aWUafdYq2AxQet3oYYKdpvKZwUW5kXdajrZ3ahmYcRyBj7jvQF7QNP2gx1x52pS8K",
  "key7": "2wNdAQwJqS59LLoQQFMYBmukzgUdozU5anRL3ujRshPUBu5Wgs45y9XAESyko1rfdQjBqksChuZkor4qAXRhxk8e",
  "key8": "5UhmDqwqNmjXTDFxkNqCdv9ZLHEmiTicVG5tZdchc42YFkjaBsXxU5gsiVXvZH4cVwBxaHYXjAs3diodWUXww18w",
  "key9": "wRPXviGMQxqspcisazGEVYXR7sdMSP4oFbsvLEryRuoL3qnKiWafcruKys8edHRKuTLxK1JZNfopVhuc4zFxqPo",
  "key10": "5H4J5EPgkb22WMyxKd4YJfGs4YVC5qiZWUbTrcG9gLYKtUnRJVX8N4FQ9CyE7odrA8SAYiShRsxvvxyHkq5Vjp5G",
  "key11": "2KyQCic6Szj3cU8zYnDwZYdg4cZh7pdhN8TKZKmHrUkCAmCQsiWRvn9DxccTaRYbwKcWuEM1eAvYhx9mHyyRUP4F",
  "key12": "32eRfKMtby1V2TMsuwiHzadQA14a1KPG6m4ntV3yAAamiQjrSnN7gAMTNJy4XrEthTGu6QtPfkE2ttzESDw7G66r",
  "key13": "mUfwcYVp3xmJwY2npX3LuEPdgnWXemct7J42idQxVsGiSszyw8413qPFi2FUjeRLu737SMfbKP3HDQUpkxds84k",
  "key14": "5wvQ32TtJJgE2md96LUPwzW6sZCL7doza2JQBg2gGZpxJUN2yjQgcgw6r5xLXPgGVjhumfZc6yRpLGUABrFdGqZm",
  "key15": "4vBiNwK3vUu8QA7fiCm96SRnrUA579acuTBEoa9X4nWJV7wP3Eob1cGitmhzSDtHAYsoJXwMaPqkXHwd6drSkRb1",
  "key16": "2MT2jUExYA26vbmhJZLwfAmQ57mVAwvCzCZZh65KhzWkb8HBcTFCJkRUPKkE9jRDjXNWN4jQPWpLeMTTHbTSEjWo",
  "key17": "43MT94bjhEJm3FTaHPnSbg1ui3qLnnxuSbFZkUKrhA8y5jnz47RvXjsa3WJ8wrpMkbnGteok4wzbH8FoZcLKjL7W",
  "key18": "4QqfnBULzZSJrTtAZXfufsfdG6quVQFXzCdZKyo29uBDscj62c4PjzwPLatDwCU1wmbaQfcRHicrYpczGE9aCsLt",
  "key19": "M4WLxk9LX92STFhULC2SuVkkSYXP6kaTX7cTtwgzZccQ6yxmoBXHauRWj3tNBL5V8fERaH5xqLLkBZCyT7b63Y7",
  "key20": "4Q2RXzdYdBb2xAumQu2PDzrj4juhzbCKMgzoE2ZvZS7U2fTtsGYqmsFb3nF73NGQqAVPUQ1KEiz8KhrHpZb5EHW7",
  "key21": "2ijm1xQMJWSPyQBCnF6mQEcCsEgjse3wEiH2gf9FCJEUD7Z84xAwYEzr85sggHRsMCzZB9VXatBXfSEeCptwx23w",
  "key22": "4wU4N6TvAaa8NaaxB6iiDmSETkFsHg11ovL6ciAEst59w15m9ewLxy3qQCiPKwY9Z5GMb3fL5jHqFJZNS9YQfASP",
  "key23": "h2NUrTYwj9dWDUD7VUCrcbBgeK1ZK4dTnyMtwHnf7TjqEuA4mijVExDZDAbt47ZMNmUcM631fTUoDjTWN9EHuH4",
  "key24": "5YFU47nwYHYq7m1Ny7sfixFtSuoURV6paRcHeNdEEq86YCvJkqerEUX3XheBDdyZrJuHpiNzuqXyMqL5KBSV6v7Z",
  "key25": "2j7c8UNdaHtsNTXhq1N4WWRmvXwSLDS6iZKue9M4P9Mwwr2QyipCuczZiJQJEF2ghMwLn7RjYNa3UNVHC99nYRSp",
  "key26": "5AZV1Ey8qdL3WA8owJgzMyFMh4zPMkTBBKYTxkrMYsW6nVq9JUDNaY1pa4ar4GSjKvfcduDu5oWLCs3ziKPdWrpA",
  "key27": "54FSAbXXux5fUcKphNNEberj1ycz9RCgZqXZBYa5dd4R3aTxCuMYvABPKsd3AhwLA46gH7Rphxt6aARB4XPVUP8V",
  "key28": "2V4otGmcMCDS7D8smZRiPCxcPdzZJzHxxHvQUcmLBaSp1j5ByXacxT142hUvwjoh73eLmMn8p6abWaGLpWej8kTN",
  "key29": "4WQjx7nxBt9cadnngDx7dJyrAGgUhM5bwHPVuktjjLVGmVfzt5M1aW5B5MSTDFqFXJexrNbYfxTeCfhX1c3qRMT3",
  "key30": "3tvdHVPe3wm7xhWbeHcDiiX69J6oKT4pXPZdEJr1kBAkvXkYnJxpmWaH6z8KizwsRHB9wJyp7gDADTG4wqazizRj",
  "key31": "33geAuN8WAZ2uNmXw7XMMNZaHbb3UF36rzVDfPuufRm1fZyG71Mu4Fu9XVqVcNMxRxbX1zg5BeSZKxpBEpNbvGMk",
  "key32": "3oPa3T8wWEdZJPbiZ9tgbJVHDptsHSkpE1ckUB6H1qgmLxJHkn4ijTrw8kvb9Fuk3MUG2xFXP2vKZa4KRwWq1qPT",
  "key33": "GXhisZd34dzt7H9F8JSVVC4yJPv4cRKNqa17PS7tmrGV3VCzzzj73vNKvnaAfJvWJXPYYnuJgomATvh61r2hDVj",
  "key34": "rZH8HQPVcKGStqKkq2CocEBkJx46EWTjMCKAsFVKTSJNi5bcdAvkR85yAjf2cYrNzLy24pawL7FQe36XGK11abD",
  "key35": "DnKDmUF4dDfBDKqWpKrGCQpD81FLCYduUoX1RWuEzW6CiDhSCXAa1517Yfw36wtagJnXmHxxToHPerGcvoZfdXe",
  "key36": "3ar1nnfGrEw9fYb3SWWKkVF16poFNoHqMSUQY5B8jxCi4Zy531yRKMc6saZfquvLuiY187Spo4PR1mgu8KWqtHCa"
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
