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
    "22yrn51u3cDMxi8rHUViBJbEV2gWt1GKr38wTxcoQV4FUKBETRkhZ4H3PGS5BXmfcqPF6dhUeg6Q3kfL2UyAUbQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GgpNXzpCTQ47WUqQqL3rsxSP8EPmjYKjtNyWqeidJCtius5rXFCzREW1JgkzqX5wgXREAPcX83RGbNp8Yn8veJB",
  "key1": "3NMXyyib6b8k4Kd7V9c1CEvmkDCMxPaCWSK9BFm9UDYKwtTZGcebtQ6wMkAdd7XU4Eix3qXD5LftuV6W5vakH6Xj",
  "key2": "61wkBNhxxL4EWcj4UDuFNDX6eqXybV5t8nb7ggK11xPoEMiLC6QAZWp2rGnoctgBEnDFt77BBdGsDQBeDpgNx8JG",
  "key3": "Zdxw53PjXr9q22ag2sKRKzeyJqNpcNLv2Qk6HV8sqC44THgqYpcwbfdHwfvWxMbBKzy2oGXVdYZUkm8EbVeJrXE",
  "key4": "29gHUiFwmY5od3kwZpTBVafKikdyiKNP6Qp9jRmws6w149jT6on6cHETpwSDKFEET6EGPjZMPcWAqTKSbRtqKJPt",
  "key5": "58KPjTyfcUG3PHijWtevcGmoVeqQB1yGiE4F8bKSeP1KUWEqTBnnpAZXuYjMru1Jf6cDViABXAYMjmzeRCVHAuiU",
  "key6": "3XjDjHkUeGdh5oMzViayuNeUXyn2nR26YDeUfmzQZpYHiFUvv9hVNRWzSHNmzErjvJ7dDcVUvRTLpEJnmFP2S86K",
  "key7": "5FJhxWioV8GN8maX397HQpWi9CN8sJNu9H4DRy5UxtuJtUMejnpJytMvmGyE3Uh3qsVPLQLBptBG8qDV4PSjj38z",
  "key8": "45NKMJaLLPkH7CunxbbJicGpXFvNZCC1QmfqcmHvzXo8L4g75bKYRUPRiH6moFKzivTYxeoiNQkgRLmDY6zjzNWj",
  "key9": "129K5uaddp94Gno5kFM52ktHnbddbi7FFmpYupjEh6yyhwWsuKTxAMr4aweRmB122hPDcWx13MzDQ6QgTbAtg8KM",
  "key10": "65sN1YoTHumRargSzuai1Nu674w8aL9v9AncPZDee3RxWcSAMGsN41UU6FmnNp72EFbC6AU3sTF8iSxxxGpDhisz",
  "key11": "L9uuoKjLe8uAZxqp1q46Z2J9zrQhcvnnbVDJF7yj65W66c9RVT6ywWLnkR3MV68A9A9ukDS6jzoeFLquYw1QE27",
  "key12": "3oKyUuUQWifUhzNekYCwQUcHU1e642WAy3DxrC6gZmBjeyAZAvTn3krSKRbgoyLLXTsUsyZfgDWNjPobLNxQc84w",
  "key13": "47Q4zXXLLsMzYerDzRZeTCNxRQkHycFhf8V8MHVUHX6CmThY6YDk34xqiigddrmejtyJkZBkjZsRqcMGebHHMTe1",
  "key14": "3NwD3CnpWQotbaLMM1EJVVk6N43CTnaUBCKTSvtEV5K5Zd6PeWh2ZBbv2QaqBU1sWbaJxdGTHnHRSGFoP17arDpE",
  "key15": "31UGDDYHPmeB1jfwqYvntiGiXXGFvuHrTmGdD1kqzA3HXofK8sEdhvLztx7LSBjYHEjZQTuyb6RL5jL9HtC8xqdN",
  "key16": "tpqwtrvtYRC3CsdwTZKwgXgFyBpya55dN1PbXZeQYimVGq4SVer2hp8qxcdaTz6UfzRCe8UYtUcgjZph8rsgN1T",
  "key17": "3bf3WRLRRyvguBXePRsFz4GLn6LrPyinMNzSF68UgFHPk6Vm6arUEL3Rq7m97FPQswdvswhvokMySPLJvWhvJdH",
  "key18": "29ErG35d8sf3rdC17t1sPkmsTMmyKDycwJSQhaeZUFPbwpCutF3H3wLM6GK73gtoHpFQQEBkrAJzdBfDKmAtXehR",
  "key19": "48EqU1YN3AoRKQRv2SENmpJRVqcTw7D5JeSUpD14cd6Bdneowhzf1omqcrmGPSUMEdx6zs9Ww3CW4Z1CWg9mJj6A",
  "key20": "uDKBPiJbZDRoaN9Bzq7Lk8TTX1PY2HX6rv38SqLk77hac3bVp3VEedL1q7smzaui24wszQNuhquB1L7cVjVgeGM",
  "key21": "2Zvf4cMUfURVMYNte1TtARocQSyoj3TCeQKteAEe9butqmH1U3Vhcwy5ti8CD3qugC39hjcYUnQ7AFe2LvNQT5XY",
  "key22": "5jpQZKVJBY6AJtSdU1cQKvQyRUVAcLFZxVSuAawSo7ABMeHtxYyxwd48aJj8qEp1eos9RtoNE3fppgx9LStomdsp",
  "key23": "5rqMuBn12rHvGTSiYUNxUQBMvvRr2FCePP7mY71ZmobjAoS5YzWjKXLdZwmkcdH873aGQEaGTZ7GiQrR3hqaAqHE",
  "key24": "35FqnTqvoWozVxKQg26RdkdJFgaJ3sgZz1ip3Mqgs9PKzQoKkR7yPLBtjMeiggBAgLmtZ2exPn6XpKXvGxLYDwUm",
  "key25": "4wPi4uKZL2dwpVyixspUio272u23JZn5KAXTtpzijkAuB2TAJzCZYfHStCEb4SNUaXRgAcebCU6Mx8kYZeLD5g73",
  "key26": "39YxqqpkJSe2gNaRXDCiyHeRGXcLbvsYKGyz2DZXKHWgLitH2oXu5cVv6Z1ZM6dQbtKg7gPPowKppsXzbGBj7ra1"
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
