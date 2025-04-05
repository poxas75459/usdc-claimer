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
    "5TBB6JANZrAyQeueK29B45QBJYmYoz5rDFAKGJkWBVbQhwZi8Uk9jfhMwdkD79p6dnhpDdW6w7y24URtogF1pakK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dSFqBwXXAXcXiYzKwHKcLibJiRPQLDLEtEQPZDyq69Yq6Hp2jSmhKBfF74r56EQi7yhxwxpjgf2wfgJGbc6WTW4",
  "key1": "3SE2yZ9arK1NK6Kq7h6ka14Lxtkh1dXkyzwCGceQP5iZjwUpVKEaSthkugAb8qYqEajR53CaJFtoY9oktREDByLV",
  "key2": "4g7r3oudymmLxu9f9h5tbbccHAebrE4vDidqvfxnpgPVJNvndiCmbjfamoS7mL4jvwZLTayiFhKZqShuEq2sXUia",
  "key3": "4MJMf8tCprWaRadKuEWzTNpX13EpTiKajU83JkLRpN9WTBGTAjPJTLVssY7Q4944E1qHyZwWD7mNq6Y2KBniB2Sk",
  "key4": "2KsuPoMu8DTiRS27V8bqAqX6Toobz7iZT2Wzohope6eGZHyMx2PHQE5598e9wjZ55htWVNqxghJcL2NUye9fW4di",
  "key5": "kUa5rHstZjCJ8sC8kRYSbeucAZNK57G4KUB4ZnGNHPFFHFVvV5qbtYvurM3dxgGLPkFACk3RoSw3xAsmmuHfouo",
  "key6": "5KfzphhCfvSEuWRZcfAkXrqcqGC7dvnVxHn4G2BDKrzxZzTrsjJgXuih1Fmw6DeSS8zKrcwoEZDZhmWePPKwfxkm",
  "key7": "2aYA7FibYvjS4smc66L6NuJWVSATQqZcVFi8sR9iXSomc1jjCFmQQfam7M2YGn3KfPHnRovAuVyGP7AdbxemA4bf",
  "key8": "btXhWkH38ZeDDm8niZNzw63VkacK8ohoRnpSqDuqQwPebFNSmB73kXM3v8YMHn8AsvtFwNDviyY7meQTFS21UaD",
  "key9": "3Z5uCb3hje3T4FqoG1zxPXGdRKobV3EzrDXnVRZJi3T5AuCAZBbwCbrQyWdPgsLZegPVwmUsQUVt1A7ZtzJMgKm1",
  "key10": "jm8TJjMkqFn1UztKnLB3DxsoCj9CN5UksLRvqpDqU57bf76fQzGzERXfyvrcbLCuws6RhLZkbGgkkkoE7qNHwYR",
  "key11": "3K69uA5Lk4jVsJ9YEzvLU8XPnq7XjLUXV3ABEqyGZQUwCPBDfXCjFs7ZT3gbQVdZgAtiQmD58vhtgUSoqjoT9Sd4",
  "key12": "5ASdSta17L9j6RHKtSwfMfkDkRZ5f4UkaehBnNrpyrKU9GahSSwgdDbak2McuzML4YpbmoBrH9VDrPdcjmXGDZ43",
  "key13": "qyUBpxr1Yy4kaWShYmmcFW8Z956P4NGWktP8vivnUDhQZmnn5VbhZCckZMCnciYUtnkem4XLbwsikLwkt29TAEK",
  "key14": "CJ3pmxmZKGiMZssbArjKXyk4wht1zDyHc75wzDzYv9B9NB2nqY9GznuCGPCoHkB8BDdngZfM4x6LNqWypJPVchG",
  "key15": "3do2teiVjrnYFhXQLo5bBA3zRx7WXsuBvjn4yznCicvGiyxaJ66G8vnJcFmhXCjNcNfjGkXud7UA9MA886DXd77h",
  "key16": "3cYyhXMYB67QZEFAmnuyDJfY3Pv3rTvLQ3oarVDruzp7Sw2LeEBBhVCJi1qZQTTt8xkebT6Y3evMzMWLBRmmeyUH",
  "key17": "QEHjCZ6T5L8b3ye9GUFBGZ46MHwgXQvFijoHGCqeUqePyT5WwgMzHfEHDH5cuWDgapc1niaVGdDtwGGPcZymtAY",
  "key18": "4VciexSvnScXmY7myYMj94bcEz9Exdks7GdN1FnxiagmxQFKgDvU97E2JmLYE9x5mdvzTEAFpaQ9VtHmLmFKBDn",
  "key19": "ktPNtFu8zUz9SA6AtZXMfQqubPAdWxg595EA1vCgPNkS1kyFLPpQdTe7a9aVZqFHNZtCbP4QrGJuUavNbdkJQFn",
  "key20": "45iyyWGTEJMoxUePTW7bLMA2fhYbuqnmfmqRJPYhrhADUiJAzjFfx6GJKeP59EFqecK9sqMQzbeAyZuCtvA3bobz",
  "key21": "3oiWeZKFFSHxGy9uH2CBRDGYtgYdz8fRHcrDevvDnwi1xsRmxdQZu1CM1Un85Ty9SVTPBSqHdfd2HXv43JNxVcV8",
  "key22": "4guKbVhCuTwoDybgMFa3qdYxMR3AnMLuKFeMoEFTgdNFPhQAjq4A9CJ1ukwJ5b6qReopUoKVSY3ukYL77cQxazvS",
  "key23": "5Udhnf2VwcVrDqzoYBt9d2ibSWhrar9PrEg99yFAX1SzGxiW7mZWqbP5KvmY63HVgns1CrL6Wh6TUG3C6wPdBm5b",
  "key24": "47z4mUGB48zPexpg9XYRBcsa5jQpMHpggTbVwC52vHguwTvymRrQUsRKz8qP3tuXYKTvderAbznvNXNt3Gw6LBVY",
  "key25": "4T13thLwdtiT6zGmwwB3inkmE1WMdQcRbaEcGXEbgg3prx2GMPhZPphLN67c13HcJLfsJK7aER3ze1LQjtCR8ufb",
  "key26": "5djCP3ceNrzwdj1pN31gDx8bh3AqtnRveJqkz8PjxpvbSXVfAfJqaH15YL9afoduUjYFf7XuZeXaAEWZV82wM2Ey",
  "key27": "FA8uT3fkcLNZJy9GRqF7WLSjieGSRej4MEW2JSYtdbgKZqm2H2EqYJoEXJcE1Msxy92XWKr5ujtRP4xtZTRkkEi",
  "key28": "2XLbRiMYwCNtAzUupNuDusqfkfNaVDevwizC377sQV5e9TfRUA1TqaGH9zMmzLAXDqSaFL1f6Ku3iCkCNftvfjAt",
  "key29": "2TKAzus8aQMBJ5h1u1xDMhe1b7RAC4kjF7NwYZ1gMkpkN31JJTRrdDPAyp3dmjP9MfG9Awd8mKTJ3t3cfxNXQavh",
  "key30": "3kz7U7okg3jeda7GupX8QxXbYTorW86ARmq3iar2y4j22zbyJeuzaztL1bPRbWqzzCk6XKDBdjgxtYZV48SPbu4B",
  "key31": "4PiSXGoW32v16VY2rJBbQkiBqABXaTDhyMB8ZuRrWH4zewN744mf2U4FCneAxzsVvS1KXnNvs2rWbmHT17gsGDDu",
  "key32": "4nVYopAccmQLM9C83NywstWY68rUpAoi87WosYZXhNs8CC6XJzbaPhE6LrcZoah9JNKmn1gxuyY5hoeboMJnwa1C",
  "key33": "4rauHTtB6XjeFHSykRyfv8MMScUFQHMkHCo7mNxjjH2AMDqpiAovsyQhicEtzFYcQDUyW6g2jdeQM8Bb1iXwqfEV",
  "key34": "fJUGHev8EVopsLwV9SuLF3RGy9QKnM6rR2qHK1vDQp9catvmKX7FG3hQLteCdmuANNhkFRBiJorS36EhDbbrbce",
  "key35": "5JXMy1EhDJUR5TBe5fY6ztNsa7rpd4if7GDmrN3XSQZKfyopCvQQBVUbTVN69M6RzCpZHZpPtKXrjsLN8DX8VoEb",
  "key36": "2AYq4spWraPzbh1mFDPddevK2bi8VMq7UauAC5vaEYuwUSHv2e7crwBzoGcyTtKu4qPFo3VZYXhugyVDV2oUXeBB",
  "key37": "zcfXTUcyPDEbf4Pgijx46549LSbm2L8EoupHV1iD3thcb98PYHjiqj1UUsCrGig5r9tRNN1vUCmwj1w7nJDqW6F",
  "key38": "4cbtd62BLaq6y1T2j27NPPZZoMoDnurGHnaC6KsBWEdck7zgmybzTDD9mDdByZAsuwEY3EWb2bFnjYZV3ZobchdS"
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
