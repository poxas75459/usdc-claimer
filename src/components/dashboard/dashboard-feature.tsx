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
    "5QrxCpeXisDuAUtTSf5emwnCjQVo3Ch11njLDuAiZvmU344kKBrhVonD3cEGurZrYuDfkxkyhPJtw6ZMQzFfMMGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a5B4VtaddB3qDc6zcDvGEhJshACwvBM6BVRWJzPpbQ6nuZJQ8UzocnZKgSgoQ7EC2mE7WCVsemhWTApmU6v39cN",
  "key1": "3xcXyazNvaeTzwUUC99teryMNprBKc9rr55D9Unj7itLY56YKaub5u42og4uiXVEiupLZRhq1uf6yBmisYo7sUmK",
  "key2": "4vgAkK3RKWQ9oJsRmGCGZoYiJSAgSEwuHdvWYMZERXhKpSmTQPNbqp6WX2uJ9GsNkdK856yLZ2bve6qo8VHLYNjU",
  "key3": "32Khgc1ZuozAtgrFSSuniFvEFKFaH37DWXjBXqzxJJck4N8SYR76CG7GTuQziamvGEMWR4WKKsVJnwnfMnAFjqig",
  "key4": "2Ec3FryXr9qPbTZSr1hx1SLqPp3AGgdFfXvHGyGjRboRzrG1pMU5rnDW5NPJx7tv3e4DuFgKJZxa3cJQKcfLJKX",
  "key5": "wQAesjiHZttcBPmwjfUHfoXsyeCW8uaq6MMB93ajgemtqLwfMAT7ESDPeE7uqSKZSSB3msqkUvkStj8bzNX15r9",
  "key6": "2uu4V4Y6C6ZK81kTqX2dAQAisGkfSzDYS9eiwtHL2bMxRSdSwByEmCvLLeA9rmNoXokQDmcUd9avUa1VSN7D1tna",
  "key7": "2To72c9N8ouXWRQ6UNyenaBH3w7uojrxGtzPYaLGtVzNKtoH7aoY2zP7P9UdhQc25nyAhMheYsd17eTwoHf5GLHk",
  "key8": "r6gLi9BbvXvviUtQMhDcnjgDkof18boJwpCn6AHSnrR1qYzFkYi54KzRFkSHF5pPSpapeLhncdEKPDKxVmNjUso",
  "key9": "3Za9aQViGe5rDJEVqcU9srMA5KKnZQqo4uxb6Sbt6aTDme3wWtvSEPzR2yJUERnok75Gg69mrmAeuMBzRGGKrgbJ",
  "key10": "XZxpVatt6zTmQHdL1E2MAJrBCtrdMENanaexSdnj227eGuZUGkmpXfjf6AnyNNiYLDCiwyEuV2uEFMx3eHoH2oL",
  "key11": "tFzduMFuZagQNiNkGzZHVH7sw21KRG8N8ZjJmEsAA9CiJfYAF2Sh7R4pd5hVhH5dCgVea6wvU9XzreK7JUGRPcA",
  "key12": "54QWkvii9MgbAiucthg1LnnFgnXs3hjinD6rVDh7L8t6AcG4UdbcDmNj3LRLKMDR5ABFDggQ1nnK4iHLCN8kKpxV",
  "key13": "4qUqS4NwD23jw6RKRyjQrNoXDDf5hEeqZ4pwfpSPa9WSQ5GJGdYRLU4XFBx5WGDQYuyuKUGsFFYRNGCTMfMM2dDs",
  "key14": "3yQjhTSbrmDNoomZKWbyBX9sVpesiSxkKnwKwhXXNEfejVy5nGV33KqVuHKrZcYc9P43PVrMJwoGeyR1DR3gEV5A",
  "key15": "5upbDLiduR4pXyQzj9QQvXY1pQ7rgJpZr54FoPjaPGxBmmL8kkRnwzXu3NMFMTjNJR1SBFp5uR7hfngBtNJqMdkS",
  "key16": "2hVf55iHjpYtY8zzDUHhnAf6mYyXSPHT9TS6XH4Agwzp4PwmSTTk74bTrky4qXkpLkj7DyYfGnWwcxc9Kx1NWEXo",
  "key17": "5qP7Vjq2Ztvm8ourrhG8vdV8zNwjTK8v3aEcGEaxuCsjKinTUDC9GdQm1neR1VtyfSvcTVfuFkjsRUtWnQsKEp4T",
  "key18": "3Qq8otDXrkn7DeHM6Ew4NQai2ynX6f5NC3zVGb6AVaJoRShdTXUNpdq2P3CF84zW6b3ju9TfDKTHv9YXcsGwCyCS",
  "key19": "2UqAfPYz2ztaC19BoXXSWYEcHx9LiPXhRyPkjxmC2pmzeDsDt6zb1KUFGHhFiCEWDCKmPFzhwzk3RyA5jsHQ9quS",
  "key20": "64E7GgfZQwsLgSED2fP6iEsxNM6oUH8NLpyJgBboVFwR1maG4VLjtHv8XWVpFEfhn36XPvCWU9F7PNTmVCWsfrpd",
  "key21": "3ezTz6JYhzUftP16DDiwV6p9tKhLTMu2ZvPpucEkjZQ4bCRGguTiEAgJK8eTMdx94ezGsp9WKMroCPypk7ChDUmc",
  "key22": "4djPJhQRjDvu8tbphghoSsVdEvhGcybH7sJrv1iEYn9nQVF5eKq16qoyPAonuPrcXsqup34VpFSdQtqfd9VEzgH6",
  "key23": "4xJ6LvEZ6sbTGjZadZbPsxsP3DaWeLmnna1xSzQ7qGVDS85Fx127rnDAxswuM1LpqjFJ4B9xhfaenbHJhWwec6G8",
  "key24": "3qPEQ9h7gr6Y82zzBx2zemfsgcZSG88hVwCyYqgB2P8x43HzXKzQuYCWgYXdrws8BWzXeVCdRaK4c1iTxPuZWAx6",
  "key25": "3ASP6MEH78pgMnNVJsLGn26mbWuJb5sUBciXGx2se7rQHw3XPmW8KgThLqriPTs5N9GQUMscAPVyFozpDKo8thCA",
  "key26": "car4HQ87Y5YAyu5Et76onGgc2BeyHnwxaPnEb7Dtv5VWoyozK9Ho6F1yMfzEwRG7ZJA9iBG73Urtk8Q4DKH2j6t",
  "key27": "2MJBkphXfdGPpyBuAmyhvHLNbptXzGk1XdZb4EbDo16f1CdkxxjNyVc1keZVWUCevNVeyEUFJTngiTbxCzCmLhNH",
  "key28": "5u2JwPnxbDi7K27ESzojPqVmgdG2cTGK72J2P9yz73WyT1LTy6gqhbD3CAt2cpWCxPteucKMt23mNLMmZUjP1saC",
  "key29": "33RRNgMo6RfFUDJcpTjpfmwPzDmBtXUiuhczq7watK981fKo6yqNQtrMhQK9tfRMXMqDYikmivuNLwH4qADx8goy",
  "key30": "2D4n2PwByWxZyarTUguawtd1fjAgNeHaGz7W1PSd6AZv8tkyQLH6e2gysAzTw9bXvH7HHawHZnbtBrMnuYxxL1Ke",
  "key31": "2nBiQtdJDgcBDaGBJBDJveH9wpCPuh8daAnPpKvBcR5DhCt6WHTQ4xhDrf361BQU96TmJA6d6wkG3qbQQcavvc8t",
  "key32": "Lu6daBYx15EWzPLyTY8yroAbXkKv4fXn3WFjvBf18QbRh1mdSqMdzRJvC8UpTZ8jCALq5c4qeqnQeMSeisSF2W9",
  "key33": "sbPjDm21yKGoxToeunNmynzX7t6enuJcNdWrQQwjjuBqdzRn1Uv2My3nXZKVyK6keYVaaGm3sqP6p4zPaSUFYsr",
  "key34": "2pA6G4VCVP8C8VP6T7inVyg5MctjRu1em7Vc7Et3f9qNw5WofFEkaAczosAFsgNqnm1PPGfBsUC6BKswjg2s38VX",
  "key35": "3CjAQU1JCAYCv5YBvzD4to9Uu2A4jLz7aawVXBrsbhuL15uc3Eore1utpEUJZLrU3riyKnNMVGanfj1zeoEhychg",
  "key36": "d9R5r9RXzu2LwX3TdE7dCUbqRxbQdK8CWEn82Y13BYHFpzzRdgYvnsPvzyZpRzRDJeNZE2S5UP636zomvpZ4DXH",
  "key37": "cdWXPo4m7T8yELse62f8LD914mSUM3CJ7xmENRK5nwVzDFn5y48KUoxkjXNirP6vpiD7yhks5fV71MxPESYNGqD",
  "key38": "5zu9ayLMEzoZEEZvZ6vF3gAfvfbtocRPXJcmstssXjDxnebJB81SaHrqf9PX6RSC6tUraK9Bwypih6RA7Qxenu8Q",
  "key39": "37RF5DxcJRQu992wGBdFzywPUPzYjQnBXoQP3UNaxJrzqm3wYDp9oD6tZ8WwpetmzPMXBg9fZKaRFRtpqW6iozBi",
  "key40": "97ZibFx1wmVMSDxczt4gbHJaLCCvJwwNNSikopdhAnEakQKi2sCytkziqzX9Qnyz6DzVEvnYLEUeH4zuGSvTUeg",
  "key41": "3eXeTbuKCCXSeNQy7QRzTadCQqSvNsZegfm6dGzbQv8VgaqAiuGBTQQhtaN1Su8BNQk2aBt2Fm8mEhHjhxrNadzW",
  "key42": "4C84Rm7ATCusLgAUDdCUP1q83knWKynNiwcK5Kivsxqriz5Ays69g3AkVTtU7CBKRxvDULTWQUW9mRmd9z9sVJwS",
  "key43": "DrAohNrfzPKHVhwYUAZky1tzC9RNtp6CAw9DHcW9rjZNcShf7sc68wvHfvQsSNpP7whzzSZci6CLQ26HmsrQnvv",
  "key44": "4pkTWeQaNi6BaQN92yJkexZagDMeJTxmy3mxt8d89vL5NnHcefFKVYn5U7dygyko2vRfccEJBfiXHuL9azJcH2Pi",
  "key45": "4djPDFjohgMBPNZGRg2kHcSFkLS9A3Z6ej9d2Fx6eqi4mL4ics6Ae6bAzQZaGFNCGdFm41zBcSYqztPY6d688ZzW",
  "key46": "4fnN9jF6GojAUF9ro6VLuZ8MZFu7su1YPRpNTK7edjB95aGtHKf8vohu5v2QMSnye6uaegoPyQbVAfyWzJCgfTTk"
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
