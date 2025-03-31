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
    "64FxRXmcRaWNhADJQeH3xjm6Tr7Ns9jtdusGcxiJSTKn5Dz84fqZyVHaWFqwaZ7hkTuCgwsL71s3hzEo1JmC99LJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q6aFFRYr1aSwbgzYBXSCwX6oTi9hkNtgUKQcKxQdw5Q6BU1kYBgW8uRV3Sx9UwCE2f2QASo7DtpKuGDCJGfCXTf",
  "key1": "4BntbjAog3uSP8u2s9spCbu5CxduHsnusAFZ2ypE52TG9QmjnisWVLtuQnWkg66qmFSZcZuTaPwh2H3BHynQAANZ",
  "key2": "56kPFErnFUFEKi5hMr3pVTKLP7ruuvf7FERkDawGzBRJnb4BcvnKvLS8jiv9XHbuBs7W9ZVaCWZuG5coPqCv1xk4",
  "key3": "3JhgvY99ywMRHprWpgDKroDboxLEVTdHVsNjFoNmkXme4PTPtFNj2RDKycS79JmM2cQJ3Tiyy7JY3R5ZJwg6RDTa",
  "key4": "2XbKjqkReF7yvs9iTcSpA9vR1gi3CKs5UtsQFnSM23NPqUDDdPjajFhb9w2GoptMbKQbWoPDZHmRD8mYmhLLCff4",
  "key5": "24jgUboV62KEh9VtSsaSaDqAguqvXXaJD4AgGieep9vyGcEZrp3BTAuJbjXbLjCr5zrZAx8L7v6rcCoVrPLidkJA",
  "key6": "4EDtrN6nxz8DYnEg9GfRUVskU7m4TvYJtgogbxFKc2JqWaquomRspmwAM9b5G4ixSsqusMM2Pw8fhjpNnZ4bp7F4",
  "key7": "JiTb5F4pcDL2H1TFQf797RVGDLeZCH8ykM6pwY5MdfyfEhhGb4HpC6s1JeAndtJf3BwFXMzWjFZNShm69E6ryLx",
  "key8": "5CPg9z6r7jiYZsyvZ8xxrUeiyccLbGhMExTSBJxuto7EjZDCUoeXm5nDgQDcRwHe8NszH2BXfqbtt4MWfVNBtRXv",
  "key9": "4Jkrf7dK1pid1S5EdAdcuwbLvuYr69EpGFPeVDsPwTshXdHRUvvWdNaiCmMNwjNe2XxxapzNKq77FS8msu1bRVsG",
  "key10": "5QmXJEHfVNMUHKJjdiBRV7n4LhjgvasNwehmyB5r8U2uYufooPjsVNV1ty4iYe2gkTBz2F7wj4G6wunzPRxtFt5H",
  "key11": "53TvuV53WL3mhzExnB5svUKDxRKZ9wpSqqfFmMh4F4Ay8aqazdYfGQ82tzFV11xT12hhzY2cwjk9EJFvg6Lo4VPf",
  "key12": "2JwNmd5TzA7aURmipnwnLuUZ7hSv3bZjvguPM8ArfPVzLeUDpgarSnGQExFkLyhJgmF15RDcX9fdht2hX6MHBET7",
  "key13": "qMMcCAY5XwBrHS2ztWKG1A4aGGtEU8ZgcxpwwYAR1Ummf6ff1ecu3Y3kSjepYj2aZ1RRawW9UBUWkFrc9Z4wxeh",
  "key14": "2AMXYsnk4TXH1eBu2Q8HqMyqMudnVHcySM1NgrandfZiXJBMD8D8ktwKDr7AbWbE3WtYm9GQmGqGyPQ4Fzf7Fjh8",
  "key15": "mae5wy62yuRENPEmb2pBBicJ8tbHS6CUfkJFfmW6PWVHnJq7Diu9GGDWPFJ7PYrQk69A2S5hQgYN3CJhwuZLD4t",
  "key16": "mfXknQemXL2hVrRcCRWMDSGEmXCctekThQfwcQrr1AvyqGDE9gC6wMnDjXWifi7icy5yWAHzMTPdw1mMktYk21h",
  "key17": "3aEcbFTxrsyUJMDcnqDbJZ31FPH5qrmbstVbGHbqMJd7N1yg3oX6MJK6EQKR9xPcmmVUcKyTjPbK3cAvwhEgPgA3",
  "key18": "3edb37AkbfmFsGWxY5KCa33M6AwKqECdv8y94Gx91YBZ2FhaMkpSzCcS2CmZ8UxgHsrs8W6NgjU4nkevCPMMuM9E",
  "key19": "3iAfLi9vCd6gfg4rsAdsMFfCsPW3cjU6TaRYPUf1VwqLTuiwsHfJWUATpjY5BpJfeBVNyQfb9HjvX5yrAZuLdGPe",
  "key20": "3PwVNuonDUc5X5zqNwFMRegy5SrCaWu8vqfCDQ1XBh9LzzK2uigczytUhvAxxJJAvhvp74chbreEZYyztcNQHBnV",
  "key21": "5yPzydFgrwMMzXVbGYKPFfDBsYaZRQDGzi1Z69ZKaZhnZzcVy4soERXhQPUvaNvL9CVoetQyRtsRbXtsL2wLFRZX",
  "key22": "2k3nMBXZNAEEWsR2L5uRfmozkK4To3Yx7eScx3aCwAnhcMCGoKR9aq8jTNDATp3zbRmVA5PHBNkxKuyrSwLTX1pc",
  "key23": "3dzFLswP4nA1Cby2EFY86LVNLcsgRhXfLhcLTQq7ob6ck2e6cnFrHVSbBomnipBWXKf8QQPXfJ7eWBw9RQfrwpJL",
  "key24": "Ljs2jUfzSnaPBerRZXJ2wUfr7jqQBptWFhkPopTikk6rZaf3s4tWVaFAL4nxwMtXjE81qCy2B7NM8yWvhpsjdL5",
  "key25": "5Hk8RxX2WTDaXnyngbrg767uw7aB7n7CeJT23QEfc8n7nqhcYjspgPZa4vavtCpkGnUs2jxApsDQ6KpS4W6Xtbyn",
  "key26": "3sVHdCf5yDHvs7TFuNfnDfb5RVvuw7twcxoYjGLmg6VLVQKMw8ogNruFGvgYp1aw6pvDfXx7rDh1uF1nM1vGcB3n",
  "key27": "1P5puoYQQb6qh9XC2XCLJvLu7krMusi3oP2P6nDVvGUwSjRExypuQdHFpK9dG4bpSvaXc14WW7tDsdnT5k2TEyt",
  "key28": "2SntfRCvsJsmSheQqNfkJ5DrtMM4gdjcLcTSepsiEi56CWtTQa42ApiAQi2MXagRDEeQF3fzE23ykZjejc4SG7ua",
  "key29": "3QtCZt89nq9ZXTk3fqAeUettGXXMLV8EDcHQAyQ1SEx52LEFLKLdtsAPNus3jeMzSgFheQmHaKocaAsR56JyB7fF",
  "key30": "2cUtZStPNRrFUDjvAKCMU1jYBe3VWC3zoqqkFgL5iNSHQ7Hq4zjRknLx7SDw4a2jSwQu2fRerYeWNRtb8CAki12d",
  "key31": "5FGMjknc7SbM8CMhsV9MBJJE8waNvRjgPUjrSXr12D2TVCBgRckKALmaBYcpfV2SrYZMyJG4XNe9TKVjd62fy6Fw",
  "key32": "4wDXdJEmKBFdSFhv9D4aAQbZV7uyVwzWst93a2ERjMBhUM47JZ8gpP1H6NSQ4pBRdcibkPLtbC2Poar7SJ2JBFRQ",
  "key33": "5b9XpAaxjg145exc1ZgCd2AUMAyEMi86VYq132zkmE6qofnrWriNHo5SLEgtJsZ5RQVK7au5LjQmoAvF89SjbZ32",
  "key34": "4Gt4YS2qRXdrQjAPGTS4BDiq9XuuSLy9RSGsAMFTK7c6LBWnRkeSKRSFhTczZSZm8WF74bywCdruq4rzkHrgUp7R",
  "key35": "RrFbDQWT934NVTFjPnXraMzb7KJoyEEqu9j4eT3yBHDp1Y6eLu67caWmkjmQWLE6d1yJCVvhjP2pVkagQJ1g5ra",
  "key36": "3voiUmWFubygEWfDCz6S2CbDS3PHAywpsqHUntYn4qRg8jY7FEdMHDd6mnNtf9QuZ4gifN98TW8ZJed3a6qc6aoB",
  "key37": "4ZnnmCBBxmvnpMWQXQm6ggNwkJd5mzrFj3oquT6mWHKVZWLeMzGXeJu2Kc9NH5RUNGdqByokMd37vMpvmgKZa3yG",
  "key38": "3Dyer97ovVuE9J32cuwDS31yfrWZAn3qpMp8FNJjpc7GdyMN14X2xB6uLPUVyT3WXFwFvZ7BUxqYcsUN2UjH1icF",
  "key39": "bkux6KBiHeYCVyAqrQj1vGWeZxQidinagdFwuRr7ZWW1kuwF8KCtWd1tm3Nomd89Mt92oJvCSnFnh83uSDViU2j",
  "key40": "NBFV7zrFA7KT1GBgF6sjWkgmnsasgaMTbJQnb4fmdYMKzPcK9CuCj9YkUo9DsCt8uvHcrZNT8KZtBWBSNfjKABR",
  "key41": "368tPCVaEEKu7tRB2ZwitEicaf2zyrN6YJNEp3bDQZxRFSRYjYkKcPUF9ZpgVDcweuYN9ryKSwYdsTGqw23iPmA9",
  "key42": "3rDpUJjEK8MChfjiX6RHpXq7AxasJrZ7gQJUv6bpnhL1bxfnraZiEpBjED6cfjehNqanwuytEaWVUs5oXexe6cmc",
  "key43": "4p8zApenQrvoA5ja8gDrVU3hL3GihbTK7SnNFKMN12JCqoB9EyL5qPwaodjeNWxs6SirqyLpKBBTY47TDv7JXEnL",
  "key44": "5iom2E4xBvTuZixeJB3fbRjWRBL6bGymkCFku9SJ9FBwiFvJ3yAV5RmNk6mWkVzntE3VeuuYYBMrq7u1cbC8iMVY",
  "key45": "122AwJWZttt65P6XXaf7iWzxwjp4qLXXCoBBin89bMTrXo1ugwpZ28zz2gruPM5aHH6K5JrMdQhWNg5mhtBu9T8T"
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
