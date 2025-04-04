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
    "MXqpJu6ChRXrF7aotTbh3xCyztCb1hZ6XSP9ZD9jKfTyGRNywxrTUGk71enKKdtErFqbGpNwUbxZCARecxEZFJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nc27zAXLAfEL9siUzumiF1YnDACJXyAWzGTjJgHkvriz8z3bbbVDnS73UHo5YvuHLaJqvX3VMvfXTvKaaQS6Xe3",
  "key1": "78nN236u9opUtehbHpX4YertgBhGXq9J5F2AUadFQ2vvJVJ58GtM9Pg6qWs7BPHTCHPQieUuFp6gJY7mFmJe1wm",
  "key2": "4up3N4xvN7xosCWBqD6itUfh8StXtsASLvMxMtSrRNHxMhvx3qgd8XqPQ8eAwca2LnBTFP3ETT1MrH5MQh39Dnuq",
  "key3": "5swv5nv89RJFp2eEZ3hNypvghLvuwdMaqX8NxAmuvJiUztoYFMfFC9p8aLaBGYJs4aFWz8EUkFdkoPUDipcCX96H",
  "key4": "NU8cXW4QzAkGxcbXuP9qRDHQK8eTaePCbpr3Q3MQFZyyNhTLbsLKv4onSXhNXRDMYmpFs1hhq1QcQkyhVzkEXfk",
  "key5": "Ks8anMD1PtXY3kXM1V3AfHSrhqzsGC4Ucqr76CgtezncpYEvLX1WUFEeSjcZ23iXAAv7xX9wvJSLrd8E3JKsUdC",
  "key6": "32QTmddjhbVzXmb8wCnNmKd9wjxzmd8Vw6Hp8s8fUNdbxibXzUxFbuRxWMN9HbH5cpnQKAGAb9EQe8C5iaEMnUMN",
  "key7": "3cUV2eATQfvMDoY3q66y3KrGdJ4UGHm9cK672uACdGMmJjhmq9MkwCUA4mwRwHe9fw6wUwYz3rr4BGgPDsNvjyGr",
  "key8": "4GEEBVRUKwH5cHAtNuTqCBY1hfxY2wE2BUWSmw9cP2iCsK1Y47GhwKQykhR8aMWaHDsSLYNoodg4NodYL4KH43tj",
  "key9": "Dc8nZnc2sAHQ68F6rF1GHSNABoGJHbb34sK2SpBaTYixP39Q2WcHGJx4rD6jt8UMDE61EWqKhD8hMTxFXNhAmbY",
  "key10": "5SfPfJSytLvDTum8QawxqABULHmfjqvJq9CHmx2Mmo2JdabncutL3UjzWFvFPYu83WQgAqNvMRxagB8cNDywJaS3",
  "key11": "3yWKCGZ13yourQ1BVmkUvgUDZ5vuus3GcjzxjrR8vStMQELke8QVtdCrbQPsw5EZHJfpy2uAiUg7fZZAnHSDj2Ut",
  "key12": "LXQSzLp9xgeKwKmtm82sCVeGSR3wM9zEgMUHZFsLr5icNJPbWqdG4etGYpjija6w47zHRhKvetRauVZMF9VQyiF",
  "key13": "NEqszNBMCEupvegoS5YxTQm5aCshuvpi3KSZVToWnDVDtSEteLySoMpXE3eYadjXNw8B5GtDdGdvWvh6sNGAHMn",
  "key14": "2k6s33CJ4DMF425M1SkjBuMAdRfERtB67FLkMKkX91YfBNjUVvdEfNfLjwFutiXoLiNdAnUfLfpbfB5QtejUF9US",
  "key15": "375PLRusw6SHQ5NwA3XfNWbPJxuj7yVutUUmTwdTKS9z2smkwW6YAGyDXgvpjcq2a6pz5imWW8zcmQzpTtUKVguD",
  "key16": "2DjH24GoWx1yAeTJDxQQkosGAF2BFFqG5xuwue5KfSXNkCn13MB2YGFisEPyCeqMMoGa8pjK2Px8Z3CoiDy2R7fF",
  "key17": "3FkUfHEnwbAEYMquz6kNi8DUNP4ervWV7K8BLZUtVGRu3N3QEQSv5dcMDQVzhvydXdPV67KFLZjSZCBUsEvhcaP9",
  "key18": "3quo451MMpCMJ5XTHdZ15RqpemTTLQrPqwKy2QFFP9Koj12WH2uvhXn8DXb8WprhJMLttx1LdNzrk3ADvBH7pXkr",
  "key19": "4169jtrowHWasifCXYNYea4yrbQhszpEcwPuPUzFE4JdJn7MH6dwPqjcBwpkpGNyGsvggj9hq9Ny6o84iZbFqZuT",
  "key20": "5r27HTNKQEvMNdQw3oFYApMdhyj9LZ1CpBHbaBxAsBfMd36dFCR9QbBNyQceJJc7YyFD4QsWs3wVC2mLmY5JTyU6",
  "key21": "hdULjDXVX1tWBWTVhF8ipNYJjXkax6hX1QdZZ5U28kdspnazSqvAnW43tvvt86bXjmMnegeLfSc3TQBxrF2BMry",
  "key22": "6dXGnQsp3dxfmr7MMFeDheYmAovh6j9q4VfY8mpsJoiGAu8MHwu1CyJZ7PtcnejHrgvbJdPLzpuo8epaf2rSK9q",
  "key23": "6GXbgmsUkDw3LGhrVUR47yKwaEnZ34Tx7A83caXwvwjA3agFtYZk5cdDs9oba99gh5hRrq4HjjNa5ue7K1aHGVV",
  "key24": "24KPpuDktec82tfzk9Ppd4QFLCksKr7HDRVUXBpJbZi6bFKsAc7GU8FuBYoMiwZBpkTyEDzHZqS37DFbr2TLPLgc",
  "key25": "5VkD9YCSzsnzfVSDeq5x7VD8aeXG7KMTijBjPg8ky8rqxTAoDffm1XaoeUevf9PtvVbea26XfY1Lih2gpBL1swsV",
  "key26": "2ZWk9yx3nBqJZLTRaecfyGs5FNaF1gHwxV5KaWavaxbotyfCDVAELWpBzZvcErz3SYKKhFvgtzAgMUsCPYXqJJgH",
  "key27": "3UpN9SWgWnofFXzUJnBZm1rwC5FWJnKW3HrruBTM7H6jDaJdpKufnjo9HbkAq4Edi9NacFvGQU1wLfhvUVQA3bfA",
  "key28": "zaMkHrUNhbqzu6jqVejKfJEraJTUougAzGZJfUQFt9gtQisbL6QbtmWhd2Y48D13ELrQiUsw3gPcXCEjFJ5NoqC",
  "key29": "3gGxLLjTSG1uiMJbiYtyviqMQyefRDPSgp6tFg9dqpdssu4aRwwUVNjc4ygjYYUPfwAGJdsazfnMVEunv13Ssu75",
  "key30": "4r5uyGnSPH8NzrkyJt9w3bjJBY9QCiHA2BnqHVEYbHoLvZJ1eaL1TPdd7e7NRth1brZy4tw629B6WLWE8ue9NHDy",
  "key31": "3PR8x1KcpwVBWDhrqxxdta7mDXCHgUH3foeed7i8kK71QZUyuP4JZedVXfd5fMNP3vLd6LVWaMsGZPSeqrqNm4bd",
  "key32": "fiRmy6c6WbxM52LtAieCu2HJ6V5VBr4YiPu1McfdM3CweEMP95fEfNYXLkybzWhKcRZ92RG1n4VMHPzbd5r3JLY",
  "key33": "57WV4jn21HQ5z1N8Aac6extoqFjwxtFpaaidjrsf3oZFauM5XTKJcaQvrT4uJZtH4EmknczDswKUTTsKw2YijhHg",
  "key34": "4ujRqtN2LcZW4ZtVFmEg8zQKN6JFU4sSD26VEtwF84MTV4ZVGNq5JngwivmnB9CUmRJBZmqeribN1zW1wV5Fab85",
  "key35": "61QjnTd6XyHSfq1mPZHFkBcEsCVRLemj6ciBjMX9T1cQ2HmVR1SinvTWR97kvCzYGmNL9P9zMtz2kbSBANJaqTrv",
  "key36": "6cSC41un9zRLHYA2uxJQfVR9uF8Sz9nYGR3ACEau6ReWJ19nfZbECW4Jax8EQLhNRHriAZgHWZekRY9ZoxgifU7",
  "key37": "BPPYmcjVJYsbWF2aU9P2JPnqjuQjVCjbJ3UBHFuBd86YYgn856v29v7ML1FDks7hH2ymuv5uuynFgfGGBcuFkA6",
  "key38": "3psTpudkTtTj8g55MvCo33VDeptMh5ztHJn7bNyYfyZv46Ar2E8EysGE7sYRaspygmmn2YooX5t3sicFPKkTwQCd",
  "key39": "5KH3sLbD6KXTaPwuerVFtZqHwFAsWuZoQVX86vYGTZ8W5yNbWh95CigZRARvv8KmEW8rV3BPTGafvhzYcGppNPyN",
  "key40": "4eXyjZ519ME4s4Z1SZdVBAA5dFxnRFHHbfoNUvLpcR8Ytemu2hXUrQJ4nyVi5AjY5qHArECHVWifGWsBFYW7Lfqe",
  "key41": "29t94dWFpvRMTQ4ERKKUiABc4DR5CYCRRK474BszXURirrbm2JjJosT9mELQZyh4xJ8ye5yfVbsk1U63QeyXdcye",
  "key42": "2LGxceU2gVkZqUrdCmnzRbGLY1y2AEyS6GRCozQAj2UNniBPczCTSJBahvkUmF4hmsZxJSGXFRvipcvAe2AETzJ9",
  "key43": "2wJjEYwz6Tguetcgd1do3Cq8JU7Xrf9HT1N9sXDNAUzwwKmXeR8BecwAL3wezHeqinEgkhQr6oLZpefiNBDD4hnj",
  "key44": "4pgQNnw1Mt1Ukp7ZUqHbDMg9sXhx4rj3pKJsTdP4roWxB55q34spR72EAQxUPmcKha4JYubvDCQ9rCV4Hk68wKa5",
  "key45": "23RoHozi2q7ssGf8tGgoijkzXsjYR9UhsXAf2HC7UkeFu92TbAPjWxmT7vQpv1ksW2rNiTxwgHS4ixycyZV9r5SJ",
  "key46": "26voTM2pETSe7Db6Zz7Lsusj1EvqVgmZPi8FZDvowy36nq9wEUY6nCRUPvtdCnJQcAUxSkFjg26HE98LvwDng2yA",
  "key47": "2YpsxjsKdTsYrcwqGiQN6dgMyN52hyhfgxZFPw6eDkg9zTYErsRHyKzFsdbduh9fJjhNFddTqiWJeZKhsFvADumQ",
  "key48": "4ynAdcp86fmNMxcwqXjgQHFWb8UksQrXh35rWzD3HQgG6m5vjb5MD6NBJXzt5BESa1R47d98vFAVX6neEkGhnG4h"
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
