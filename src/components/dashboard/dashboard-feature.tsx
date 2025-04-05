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
    "4EMcW9NLQ2QSYeuN3fTpAVHCUAtrezeecn3vSecipb7h7RUJPVR6cbpgcFzE8dRn1uUkMnXrB7xDee9PgrS4q3Wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Wa1W9miUiDm1f5taYHbF1gKp8jKf7R1ygU7tmvHLSoBTuVXJSwT1NEjhBjaExmeGYdWNN2J9yw4mY85fkWZVCR",
  "key1": "5q9oUpZeMzJEcVXU2jJ8UCzrvdeR46QGcj4gR4LMAo1dv8ktacCjTNYHMMC3tkcf43eQ3zatrp1b6NoaRD5Co5z7",
  "key2": "MFrUM9Hv22iyn2X2CEx9zHTBeLoekT3SdTjFFSs7TJoeEphrwrY4uzzKy9f8gxrLKoTggG7obhMnD61JngmgcCB",
  "key3": "61LKXyW7W6Rq9CGDKzhgZwwSAUn9tEPb18ApZEvQH4kfcHrSz3tueeUXKhPmebqLd1D3H28Tpo7MXSvhKH7Kkwae",
  "key4": "3Rq7iXCMSxYLfkmhGXwSuRKp6jrHocCXKcVnE7rzmHZhDBuxSQvAhkn4aFms6SMg9ha821APtnm2NrvQHs86HXhW",
  "key5": "3y6co26aP3gZbVDRo5qaTry6tRfVZZDf8uAJYGHJJgcdVPUfWmrCXMkNLHMU43P4wrUxmgCGWzaZVRjJCTYaRwTy",
  "key6": "3YDVTmmFva6vpG2VmUkSPFnrrFdq3HPSkAB5wsRqR2yBaJsWyu2V36xNaubG7J2boCeegnF2x11Y1VSfVKniUx5V",
  "key7": "4Uzds4ddcpfKvXE7Uadg4mKHDKj9vhfXdweUkypfQBHULW8YtZ9BDoZjLZGNFuvosKakNShEX8JbphZkAX2d5pG4",
  "key8": "496BDtsCijXLpDPTfbqah4RarH2nMHY7aKqXgSFt9FFChpwEvpdCAZfxYf1DVyD6TaM7azUncJkauBZF5c6zikaM",
  "key9": "2Pi8CCvE5SuWafku1shBYTtFj5TxnBoirDX88YsAjaG9GNYAFRdr5GB3wq7rxQQ597KLB995t8wDZViwr4cmz5Rc",
  "key10": "4a5bFWEcahCJ9f1D17rYZSTZUN7nBmotVu8YhEQoVLYtwoHQr1TpTzXWSM38P9dKatewJKi51Lo9VeBjkMrRwdLh",
  "key11": "5r74DYeesREqCSzNJrg6xcWDsZ7wrW4En25A37MFaR23buuojhYeKZimp4ATLTgG61ABuQ9qZoYGkJPfMTJZdJiQ",
  "key12": "59gWgXnSk5hKCAZYvZB81Cg1qexqqvawcBqRk7y8XgTeW1zTZenf8cbgeGTSQ765zunySMkaCiNXS1Ehe8NBMP5K",
  "key13": "35nSeSruzC2itb6RsM4XDDuXd4YxmvpSNLTdiY2VCddNMBqdiVad6oSzFKpDFJdHjb6GPTHD8xr6sb3FYSHdSKu6",
  "key14": "5R6CnfAaU2i6rDxbRZLHB8c4uAAz1mnQ2yhsQ76iF8yMvAMqwHf5YQy9oxHrH2J2PP6zECjSFEF1ozWy8eyo9DJf",
  "key15": "56A71n7691t7NoDUdRPwfbz4PBKcmrgUBPBgi4hxRz9y16VL28QGW3Kj15N9BSuQNiCAYbiYGjGe32dxVPMGExxB",
  "key16": "5Zd8bzi5bAfQvysQutrVieNi8dUUyqLG7dwDnKuc1hXb5ByL6ZCEQoHEpMabFXLe8SK7BAddUcY8Nro8oLTsseSq",
  "key17": "592vw7htnKG7tUjPBT5k8QSpVagR5BXFeUkcDPuoxCCssGo5kWcL2iZibZNMkNCUJ3WRNeZKSeKzBYZenPBkY2xU",
  "key18": "3fS7BUgn6fSFJyi7cjqPXBimjoNsKufKWYhf49tmGRM5U16nC8KJPQ1zXSpK5Br8JuJDAaKfpxo2bzL5vpamMVTV",
  "key19": "5hQysxkr7coeKFqJK7mWXXKZZDVrizHQCGVogiw1xLtbKLXygxvs74h63u3V898B54w2oEhS9deEbAdGvpwVYhAi",
  "key20": "8cYsU7AboD4mgZhWiDcX5unLFM5vUqSqCYekYV3m5Gw7LhwJhe9YiQA8k35XdQY2Sb8BtgDQ7ssXDR451YJwC4r",
  "key21": "GxqT9vEtQUoUf4iRrB8gz3FBZQ7QKvBHdyUWQVz8zXfm4KLy86uYgjRPcKXgw2JWyUJuyeUjmkjbQTr2wV4G5fe",
  "key22": "AxRb4jmogVTbegjoV9BGXvwm9StPQGdBtmkRp1dviHyshRmgktS7GVzb7G5ar9tXZ6fqDbDKAiSQmc7AezT2Qk5",
  "key23": "4J9iQrarRcjakrGnNZM68AqgJ99pEHqpiFzgXcGVjrt5h16iNeZYVr79nRCft4aU5FH8EQJZjC4ab6fMekUUbAEi",
  "key24": "RjLjxvL97WBj9xjmy39uan7jvg2yqHfy4jLLitqMYB1cUQWJ5sbyf49n9SoETqPoz4vw9oWZwAMzFbQsT5cKWG8",
  "key25": "2MUdyGm9shTuLe53ZSUgeipL6oFiASSxZhJHFRghpPB4zNFuaUxphHbnaTqz8L9Qth5ghy7nAWyY7gvfRDAv7HV9",
  "key26": "22vr6c7vGdmWCxjDutTUP9B4VqgMoLMwiRwGgmL6HPb5QPJVk2FVb6HNHLAS8mN6M8itRXkkdtYC5vHN7cfecc7o",
  "key27": "x3EFffVLAzW84xrnbyQJemT6bdxzXNKTYGpSsm9YSaBDWYsCrKcuaMEteCPtkTxGpjRjRkHFnxMHrmJ1Kx6WKLS",
  "key28": "1vLfFqnitA6kUgkMKBn8m7ZLUGd5KwbVfeVN2ov8QjLmDoDFk42SuMmVP3oPHc886Jn1fRS8FA5i9dSCjktUyE4",
  "key29": "4mYxujZJ9xjqt68DuN5e8pFaVnzT6gWPdbx2Rt7EqNtts3t7K8QnRKZXHHpXEyi5uzJQYphcKi3pzdx6Ntm6jhe2"
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
