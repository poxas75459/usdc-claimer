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
    "4ZeisopqNPKi3RtDY6EiuGEb6PTixpqJCEVKXe78LoKkmLgarwEDLVAymFnXGTF2UPXFEE4EzH8t36LnhTBviQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kKm5NrturyUZob9MK1LwBKJyR61rPu3z17qV5ezhaijZaKTSEn2T4J43vLRQu8jjmvdoaBHBemrZr4RYwDcxSDw",
  "key1": "5ymnhYBe33vqPctaFGm6R5iB1J5HGAE9hGsajmya1zP9zVvXFpyhZQbLiWDEyEkMMswkJaPRaqgiTG85reTckzbT",
  "key2": "2txZic9i14DzNwKpQBeSQwfdPWb4PMX5u4THWp3GJRRRDRdKx2ZCU36sFuuS7iw4h8TMmP56w9AM6Kqb6wE59UMS",
  "key3": "5LmUrqxPD1ZtWta5f238CLnbzgX7ope6rVcYWecX39jPfQjkbmDbGdzMajtLiAQXtUrohDCRUk6cSVGTf1bCZeUF",
  "key4": "5M5in8VnJiLGeTf59NCHFY3WiC4Lm99XXG2w5di9nRi2ouCvZxgeQRsdHXSeh6LWQ49eQZwSWUn12MBvCF7A7Abh",
  "key5": "3BVWcCBtrgveNnY23Cx6CdSHv25hrao6DsjHYv5pdivdQ6vUZjMYkkS7W3zLUvu96DwNkLE6SRw6eWyc1DgvDL7J",
  "key6": "2djDRLKvinW1UDigQfCqDAoVhRkCHG7E3DxzZ7GnKyXdbF2GY2cv7HDQBcp8RyM6gUFQXr1WiLMefixqTmgCnAwR",
  "key7": "4DrkGwSs93DmbYqcoe8EMd7SshodFhU2LHCCjpq4485JNNHEYhboYqFgYzDUQzbdLXm9k3e95UFSjjBG5gHc9yVC",
  "key8": "5spBRJYm5uPtQk4wXwYLkMQB3VrFkjWREP4buyXsm8YPVMLqnyDsNijk3zfFff9Eyshyw2Z93ZPf3zdYQgz6oYax",
  "key9": "5VJa8zondbTA8Ehk9cHY8LUiETH2rDSmQMbVFwgL7ymvGVa5qQU3Jo9NdMaMnwa7ukQjUYhBBgT1fDmdP2a4wQWV",
  "key10": "24evGrPv7FyH5Va4kKBhUEiDAVQyRt377irtjaz9gRwuVQoV18mMsFTrEKJGFqP1v6wXxXooDzLC9uyzXVzif5mC",
  "key11": "5Su2akyqn1QNLtXKyemBiUiscN7ZbJC1z25h5H3mJ8uoiq9KTKuevzfLEM2EVDV6JZyx2uHJkWRK2G5BocoQFz1s",
  "key12": "5fdH2iC8eGDyByDxaj2wvBcSdR6jEDzyocpqXvasc6ZzXBrBJnGU2SdZWvCpowhiLS8SZKtdCohr1BAPm3i963fP",
  "key13": "21oF4tURyPwTrotq1kvPwiUmUuqyGDQpg9euM6JLvC58LeBSfnZWEzqhTMSJGDs9kdHhWwx7b2LRZ9knnk8pcgt1",
  "key14": "BPctsHZJTBpii98vR8Pgvx3ZpRtobArzgHTSXrF86wMvJnW4m1DXvvcdEC6u1eBFnVC1vcZFzMdqzjroGYDcCsz",
  "key15": "3ACGa42tmNJPi26UbChiAjsenq16a3WuDhz2MQQ81A629cpY4ChUikUzVizBRBpMo1t9xTuXRUs5drSzVBFnrvjG",
  "key16": "4kGGjnVVqRfKe5Rxqmkoi8UygUxKtmothxuRwMoE9eTu2FsbzxyvCUnMHsPiw8ACzeDquXUCNM2T8yP5ubnj2PEt",
  "key17": "3EhKnc6dZ4FJRKvVEJoeze2ETgVtWHjbwk47fkk1i7rZRpFqzGtv9YRX4AnUvRadDohCk1kBJhZsNVtdDpUsQfJt",
  "key18": "3WZiF9zY2Br9jC13noxTf9sAgFHeES4Ud8acsas8Pr5cm6tzQvaX6sLbp3jeZgQEjBdxP1cdqpkmSRe5BkmBG5ZN",
  "key19": "63a5dY5FKm479QS4v77GQwU5krstXXkhyjAyhebS2iGswegRSszcA76kbioJeSikYjNmYzNZDSs4QGjP5v6wWyy9",
  "key20": "2vJRZwRmtUKPiEHa1axH5HCCy28ka91dLaQkxjhXrxDSNFToiNrgXKQJBU4rjjtBSgo6DH9mP1Qpnsm9VUv9CQXY",
  "key21": "5KJiuiMi46xoLaLRMWSLv7yADqev3z5bpC6aGFsbMTvY8DkAXSovxsHApN6CZmaVqSgznckZF93uLPNDLeexwrGt",
  "key22": "64dTEChBsaSsEfbpVABMhRirE3uZwSPHNid9m1k4n45SVt9epHerHfbeh5JEWvsATC7PwUJUbCiexz3deVjrSEmv",
  "key23": "3GXMSANQAU3KdqdcB2zMEfic8bXrrBmtqjncRwZC746BhxWt5sq7MgP9DvCexjDQSS1KAMsKgU5gZrZwQNmEUacy",
  "key24": "5BfN5tXyARHzNXx4rms8gTKSrXcaJVXR5qxdC2ZGrH6LjCBwbrWSJhoZ8fT31QaLM6HB4Uy28fPjpsgPDiHEWqtZ",
  "key25": "42GaD8hpekJrfL1mHki5nmtrJsguJPPcPn22HVNfSEiDAj2qfY3Ymj4qRD2aZRgUUSvqW8MowS348ZpCQZ4f6wkC",
  "key26": "4DbX2LLzcCSL25ZwMEva6zEDcw3DVc8KMeRmXKhxHkcNYT3izCTqUz7TQNXwLrAcuQzpTHEkANVEW5VYPaFBkT2n",
  "key27": "3TFtDk7cWBPYiXvYxD9essoV46he3KgtdcPtNwC7MGjzGvsNERJkr3NruFqGxhRZ1wkBesxdfgTwWKv8sKey3etA",
  "key28": "BqPgqKEwoWuSJWX4WUJeuEpv4yhLc2NSsYRTuVGm9h3VSdmdbqaAQf72r5me2YU8fLftGus7Z2TGvNJ7LXnNvjw",
  "key29": "3ZiKRb6BRmWUqxzgiWWCof22CYpH5dGVibZK5H86jqrgXttFPWjT7U4tFdmN2aT6VMcL1j4xpae3e22jJXjwqevD",
  "key30": "QqBUNyRHRDLaxzX2zfdbxRK7BASYfmVNegxK2vRQXGFUhZRy4nhQRbMEnsHEhwMnwvHezNDYG1RAqz75k2jrcoW"
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
