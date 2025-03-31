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
    "2Arutrt2t16oTu86kB7Xww9eFLLWuJF32Ke7912t8jPjW7WtzFnuGkduUuG6YwGzSToPeUcTghhfNUsn1VAqqDdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vYbwv9sJ5WHgbHVDPL87zNGkYwDXobUppuXA8WNdwZYti3znGe4CJFKirUUU1UaCtcjeKgwMSrFDHUbM3nSfDKb",
  "key1": "4Eb61zaGgVKs37Z5TDeofbDjavJnQnWACtbft35X9tCEKuryMRP6bQuECNdC8XRCieBXq4cKKt8ZHUkuYJ4vnjqN",
  "key2": "24DNsgv5o2PUeYv8Av8ZcKKe4LgGqRXRQ5iJXzz7G5jCpC6S7wyUdg28MknF2SsuMGqzn8vfdEuGqBLhrA8v316p",
  "key3": "49aKQ2kTsNBuF6RPUHwvVjNgy8E65dQc4ktZ2fUXi5LU27t3koz5KGKjGGZB3qxPR5uB7TkKNmnrTABuBDjjEbe5",
  "key4": "2jueLW8dFBnZqdWSKhSLr4xHXqZZVZewrW5oDE3WKaPJp89Jq8MdfYRqokiX5Wp1vPzQdvttznoM2tLGXmZ4PR5B",
  "key5": "5erGCt2xwSjwEnMvLqf67zfupaHTu1JDXnDxwRGXssCsLmdekhDZEV8MvKiSbPTE8MfRCdtiGLJdbvAFoUvVUQfg",
  "key6": "3exHtNtu8bXrhodjTxVhvxGBZvLXnwJ6PK1gGQoTiynUWVsDnhszMg2TXWQ1T3tPKEuJgYu3LkxEt4EhHX7vzMHv",
  "key7": "2D9HKQu2JosRQb2sqULsDJ43FRMxhnyTR9WSuTPFLHVoYAfawL583qHHkcYwDv7jmGUWdwDFtRjwXBWEVmqqdHcp",
  "key8": "YgT9tUo2s5659G9dfHME3PKaPmyUfxdnFiSjvCrd4PEaBsSnv8EyCnTDn4zZTBLsBrqFwD3Mfy2c75HPJRWwkXv",
  "key9": "D7HiFTr8Kx6gV4MFmYC5MM5Qzz936KG39i5hmcrAA5m8Kr5z6vp95pQGFB37h5k6KH5YYb7sUev9uCodEAhJtiU",
  "key10": "2948CyAS9ChDGpS4xyvKUauSDjSzhV1VCbjJCoGHq9N98FruYb3yxhzdWuZPpjowYSvcvzohFD3apdXzPkMxQ7jy",
  "key11": "2fbmTHd4dM2wJsogKvhGT1JmXZs53hxqHb8W4rBwywwS71pwN4bUTxuo6ynLTN8pHMmBdueyEbPdfznTstzZsxZo",
  "key12": "4asoAMDmCEUkZJ2m1zc3QoVgkWopf6iEZnvX1io7ww1Ltt39LMUoMaek5MUCrjAHMS7UiYuNv17gnFEgDaLiMZ7g",
  "key13": "oMbx72ChiXTFbgqtfMAzifjjTMknbDt1QgxiwnAC9NohzTY7N9ywTCAcuFVcbgpr865xdDvnvExHEfE1xGfxTfZ",
  "key14": "3rwk8oEdp3vYyQBpCJ5wJSqaeN2LZWxQ8viDPYCEuerRtfV8HyB68TkhqGn1gwb1d2iC8AV4EpYPdCT7R2NikCbG",
  "key15": "4dPQq5MVfoBk7XWdjxCMdhKDGncMtSYGdmzTCb3cmyp6WB9kegYSsePt5cuCfy6wNx7uCXXV8buLDaUN8PQcRTK5",
  "key16": "Z7DjTcnfR65ei12z3neLujZ7q7e5iX7AvaBsgZMVNSH7kU8mFPyBMo7U6Mj8VThdorEMzRctVs5XQ7S4jztvW9G",
  "key17": "5KhBpsW6ZXrEzzRMhxyBeXeAXdLXP7gtY7vsZbDnupBJgZXkJpnx8UCdLdtESUHJekruvFYcnJhxZ8SRNNVopAfE",
  "key18": "3dqqroZQA7jb77LHvu1Dp34AdsJmd2cUrxHeh1apeJXi7BCYQKMbVCUv8c719H73QhmbFFi6RiHQqz7FxSPogJnx",
  "key19": "5jwMtryzqsn5FtzSdhxeMEqv1UBERGLKdMrjRKonU6L9G71HHQpsFgnm5GziRfpLMHVaYPfC4NiKk54HRgnoyuqX",
  "key20": "27KdjszwK8eixTjyHAyp6gUAQWj7vPz1Fy2j7DeZJV8yf8tg97Pbayh25Mm8DNFe9m3dksmQaAbAn1VL3anu2w4K",
  "key21": "54QXmfSvhzG6hYgcg3PjZL9cZqojTczayBtdBHsQysctq6y3RrcFchJRYujXSBKqnFHfZMf3SRJxpwRuKePsnti8",
  "key22": "3drb8aeYMHFFo1u3yrmzooJxbDyic2ViVMxsMpXbQkYZzEq9XZGipdxHx7VohBGT8NyEzu4sTPvMRFozLep8Jv8C",
  "key23": "2zJXny4gtRa56gPRzF8Z5yjUYbC8u57ozbZNgMUxwkGy6DdVupa1gR21DtvGCwZxEmudppKh1hh5aQTyQQEcq91v",
  "key24": "4rCc1yFQgVUrFqtreybTR3UyWFLm7HQmf8Y4EwzLEaVHgz7ccYdL4uKuUzMi3eHSFpmnZag6SgZjew4JCmh7Ag2S",
  "key25": "4pHfGSxQHriD69kQf2LdZv6gSMdAo26SMTKcDByFwQJqWg5VhPQqjXTLvoke2dpxnFFzxscLufZkKJ19iCDJzX96",
  "key26": "CgZm28T2VWoBYdZGseuNBoGXJ7ZXFjhpBmT5cVn4nEZEdURAXag5xfGBDceqk5eHPaeCpvpB3vaaHEMpBV9kGdW",
  "key27": "282yMHD1TjDXX8a6LdKS15EGQY63V675qWwf8Dh2aqSFZaUNdY7bQAcc93KCniRTZJVzrMJMvxx9XfnXEw5thcRM",
  "key28": "5B4S5TQmYDCdoh498q4amn743P74hmfYR6bE2VLzyqLwUoJm7Pp22hq4e3u3PqmXYTKmrG8k8WrKw3QXsgoi6QVb",
  "key29": "5xrzqrZBqxKiFxcQj8bE7UUnY84MsCE8k2f8YuAFqE1waN8yEssxzkaJnGRAi9Eqv9BtRa9ySnc6RhMYHt4fx12z",
  "key30": "4e254zfuX3Zp5TZqjwanRhT87Qi4qFRLiSwbUPAkEN2tpMYS5RTcM9PvTSb5RMpZs7rdX3e6qfTSeGmAGTipgkez",
  "key31": "gBPugCaEWUF3euVmowg9jzhwspjLu5mWojYmbsUTr7NAiSRGMQGCYBi5mpsGPFvQW7XWVaSARY6FWheJEyXsDpY",
  "key32": "4NSFysjUYvbeShmnj5t994mm4Z3bHhKgD1D1mhEcgwgNd9Q1ALEWNgcjxUJeLHMYoBiEjfRQPuGGaaq5N5sL9BkK",
  "key33": "2eoscZaoGbXdAQhskPAXJcaEBVe7kJBWj9FSy4UcLjhzCCmobiW9NHSRiKa92FcpBAZyXqiFS6GnmhVNmnzMkJHi",
  "key34": "64nZtzjEibtCNco2MrMLBjj8RcwJQFXZwQoGKkHzg9hiXqo9yZRM4sN9R1kWLjCL7Qq8c5Sc2bZ7WtEAQWia2Y5v",
  "key35": "fCsRdwTve9TyjBnau92D4XRaYgMEYok5oubS3FE4NmHaASP49hFRp61bZgJg39voAUCPkpmaLjMcCBrsentguhn",
  "key36": "3ykvbNnWm4SGKyyFsi84dENkkyVDEUeUoLfCBrsNxCnGATLiXKVXAs6pQVGXLYL3CzjNwJrWr8QTyyDH1kADQybt",
  "key37": "2fKq7qmzqna8oTpmgcHBEASqbDxuBB3NJy7ZKsQae5vRzCwVDASsCFbFsxzvMbhXJ3Q44gBfZubWtoix7U5FsDtq",
  "key38": "69DKieGfxkHcNS8CeWEBnvZhNTDj8DYCaBLSzG6xHuf3g99uwDw6xV6A4RjkVWaA1C43hxv2E9Jbtb1H5u63f95",
  "key39": "W992AJSS45XEpBMqaisA6QmyKZLYWNsoATz8GAy3iPKRJ2BM1ZTCNzFQsfmGKj53cTta99XvVE2fguTEUR8DaeD",
  "key40": "g7eysm5bzAJmiBGUoxVE7BsH64Vh54iPmJnwUWHq3Et6TyGQ4MaTRkYd68nbEi1dwzUZSHrDsv6H2hcYDiAtfS4",
  "key41": "4Chq8Gu87jDJmcdqaY8MVyK2n49fq3S2hJwaovfetSeaWG96ozd4CYKMan1rGV1HwqSUZ1eM42Xv1UPUBKGxtpbj",
  "key42": "4CSthxKbuWSAt9ixGp8UriVrVkTaLAjSXqtayQRZd6bRohJk17VDmyFL461MezYGU8nWyaSHF5VeVK3KLiD5MbaV"
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
