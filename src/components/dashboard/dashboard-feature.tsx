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
    "b72A1UgwvYimqGKApGWG7vmgZ86iyk66YfXNdYbbtEFxSisjrPFPTyNyAZ1TzLNQkZ3QwXfEzqTbPbRAokxvYFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xwKRcECZuH7iEMoNzAH5RbJYQjKT6HSYsvsohoW81yAStG4L4wLrGak3W8cU6xCq6womxbRf2WM3CEfd7mdFTkG",
  "key1": "5mqV3xQrhyGKha6bqdaoj2hd62mUMwxR61iFk4oG8iwE33JorigrxuH4UrvuhosQBnRziU7DpAGz5H2AXerQW2cF",
  "key2": "4XfH4oGdUZbczzQ9P1f28RU2hwY4NFxxj2Cd1CXAZq657UNB2WrvzHTTbyg4H9vEC77URuDxpyjxy65YKB8XDPs6",
  "key3": "2aghwmraywWYWTe1QJDWYubxZvUJGdntFk6nud5kmnnMbB1kf4LToJK6MtLD4aJ9u62jSs25d4obWSLuXKDzd7mq",
  "key4": "5qurJxDThZueR4TDSZ1eMqGtxM5aYX2YqMUkBg25iYKTVr9bffEds47y7xL9RSTmWHUzidRbVtuGVTVHq5mUc5hc",
  "key5": "5k2VHZfGnBmpHxtjVF8F73ktgrUYu4H9KzrBJaTEEWSmyXRjWUCZXcWqjZvB7mZnHQkfku6QPmMRGGNRzGbP32wz",
  "key6": "2hrtxcFNFmrt7phoEPjrddTgevUqJRLm3Cg2UMyk4CAzBNanuiDw9ia7z8LBinQFa68PeHa4Np6zcVfD5cPsJ8bJ",
  "key7": "32tdeT3f2PGPCEcVtyMQ1KSP5nJLZUVB7NxWnkwCGt5hJVJ1aL56uUr9qrGfoWMH2odPJAKCzunMJxG3W9Dm6b7K",
  "key8": "2NaMtwkbvNPSxuyXa7SNP6FUKv5zJt4DeqyumzsxaeENMRoGxoFAB9VDUaL15BEWy6KjRDLdKRQ3gR3wKqccMhAX",
  "key9": "2VTmRPvZ7uHsHKzQFR3w5cho2FPpsRFEwZ4QQuVHEYEEpM3Sj72UPf2sBinhmGSba1En3mEfmsgbRNA4oe2RDCqC",
  "key10": "55ETiaLFMnBEdCu5v2gbDMdKthyXjSLaYK4Pk2cor7Ar8NJRZcC9TTKQ7RVeKDeco9j4mqcnEjvwNaxzPPyimqmB",
  "key11": "2RhgmgLXLkVmprhNujHAx1vcDtX7e2DG1tsyk6vYxgS1md4QiUJLYsEwb6KaNTsm2WKRD9PRxJKTXuvd5wUJuRYy",
  "key12": "54iirqyVeekC5DR5Wj8aM8JSaHSrGUT2WrrxotmJ4gmiv3cJAAaPvshWHiEfkS9Lxn4BzM2UEB1e8gDXTCPh6TZJ",
  "key13": "27JyDi1HuC5WZWBXWfRfja8avJQUXzFGFHMyvoQ3Wg8nWF6F5rEE2AVsWeurnJHYRq8vFFRM2cdRTs7ok326zMcv",
  "key14": "3Y9bV5JHo9jo8R7KSVVZ8B3Lr8Jg8JVPKugxhVW15Zx4p9F4SYiSEyMUn4EyNxDHan48wTipCtm3tKKERyBJiuxU",
  "key15": "3ZG3dxMGdH4jTdVuWRXpmkt3ZpdAiHpgpKTnRPTqGdtE6kHRdnnnruF5VjSXLAFMM1eKnpdLdF412TfijRwZ931G",
  "key16": "3i997uRDgQ3i24LUWuR9DsbhyLKgBzSHhsNYZZCWcLAv4aaCRra65hJQ2b8zoJ92kqu3VfCaHP7fkoNpXVfUfWKA",
  "key17": "3wuVoMqQEEezb1hJzg7SVan1VNiPxHT1k9GVb5o7UrBwfCzEX42YYjSGEt8y6GDaQLWKddEG4twBdjhw7eBFBvvL",
  "key18": "FWjyNFZ39tCfQEMYJ9ViwPytDkXbMypNJvhyDAvECg88U47EHYLF64H5pR1Pojih9GaGkTba3VuKAX9of6dj78c",
  "key19": "2i9NkPfMyErmW7TVD4NJ2JV1hyTeAbLhp71N15CHboZP54F8tcJkTUZzMAPa6e5NQzKFL73ucSfuBPdxeQQFy6Wj",
  "key20": "4se4bhHuazXaZJQYntwN9HRsKzK4mRkMk4y1xqHVvrzNMwQbkLDP8z5E3GzfeKFzcvzrReLUaRPhQHW1JRY8YKn5",
  "key21": "3JEQVNArVWMwESEq54fBF9MhDPrgRRFwvd9khZGvL2PeyLgt3RiF7gtFH3446c6FsLRnHTZz8vZ5FXYrcfGUJvN6",
  "key22": "4mTqX3q7kwbdWzLwnJuZharVD66z4JCVDvxB1RBD2FjmbXBwCxBg5sPx7MxHaURXHEjE4QoRR66gxs3Cew18njSh",
  "key23": "48661UyEeoTGxDNnLX3TSinCQpcwRBg8EJHXNs3adkSC1FY4MDcEYPhjtYMgDbtpPNNAsVec7bJUuDBQU6ms5fXN",
  "key24": "3V7gFbEQUmFb8qBbmHPVXp5VqmAz4MFs15LieAu22kL21P6dPLxKSawt6bZhE4cK6Re9j1K1r5bFoSeXhEsxKFM5",
  "key25": "3ECibWNvg7CgPCb5oP89Ftnayy9g1g6ioUkYE7vTp2vRtBL7S1MLjTUzRdEk3P4r1cUiJ4mpQ4FaDrqqCQiJ4UTy",
  "key26": "1VMRdp2XeewajZkY8y1rrwMoa8do9HBok7seSTQy4vRu4vrFrZUbEkK6o4TW6DwxeQzn5XMvvdtyuwYYdzRf7th",
  "key27": "YRN5gcZpf1CxguRFNQ5mwkkh9sNnWuZZ8K7eWLQ9CiqBm2q7AtdbMV9iBFLQQTzrYt7u55wMrUrzoB1QLGsBoZL",
  "key28": "5pFGYSpVZ2BDHem3xnDemtkSNBoqJdrFjsVy9Vp1ttZB8q92VWRjJeH9d5sAYY8SEZWZZbPjwnJZhmKr8AJB9n9n",
  "key29": "5HrK7LxZRvjMtJ5i26G5v3cqPWt6vWLLNZ1wzvFhUJdUv4AKju4meA3TB8mzSnmumAP5XDSHprw8QaHVVEA9UfkT",
  "key30": "53xYzc9Grh11kfwfDKx18ESA2CZYJeXjbDhxUQcNB7i3qwTUtzkF3a3nkNwUHm9jxNfaPaFLoDoqZbm43MVVzp6h",
  "key31": "2RHWqVDX9CztsSn1PiJ9ABvEVfk3tHc1f6tQECdVQw3wBgtcArCvofZXwncqwdTU7kudh7myFYsW4AevCgvL4EDk",
  "key32": "2eLPTwo1fVDgvmNEyYrWpqUGg2RAfUJXuEDs916PAuVBXrAr6EP4v3jsn32sQZonRdAhW7D72jn6hq2DTed1wBzd",
  "key33": "3xp7p3YNGkjfAHHmZCaRn5Jh4TsCjdauJtFEyKcEYzju4Bg1bnNCZdwWQijfSoHNkweAMxb2wE7aZQE7KkDFm559",
  "key34": "2yruP8naPtvAJcFQjcRTsJZAdjJH9xYRZCP5V2eC8v75BRbobqVas8LEuwTjc8J37APBKcVnsH7zodu5ip1vTH4C",
  "key35": "5cRrS32X3yJ5AfTy39axyvML1MCsC7L6JiYsM46HEHr6NFGfTDusbKuL1n5vKsm2j1DaVjzRZMo7Y7L9QzrLb7GD",
  "key36": "56mGfJoqUswG22iZk8BeBMCTKa4qZ8u7gmSABtcis2ZbsDHYhXVZ2EbPkKbYnFiJE3tFKeAJFmq23vs5HEhL3HzT",
  "key37": "49Yr39SdTEmk8uayZMS1XmNxrvzRo4VMiUBacdBBbksdH9Rpp6UkKhw9kNodHPPS5ZmYPRXrKUqr2fWSUu9ZDVgE",
  "key38": "3fRcjdpUx1CQ7aakNd2DTXcFzqWpufEjtAHQL863vmKkqaGuZ7Pv26TZ57WWaGQyweASaBeYGwJB55y5E9sTCvbZ",
  "key39": "2cQ1sEPkTsZEMPJzNg7SKCRLipf4qknSqJkrWjCLgXDodWhenQ9eHV9huXCu5WMbPrAAzjoSA3Qo6cth1FhEFsBj",
  "key40": "5LvhQWQE1rGmbxdo7rkkCEnLUJuFKmcraJYhZSAShhNF7ba5becQfDciy5rz6V2xybZg21Dto3WmQxpiSnBfLvrc",
  "key41": "5MJbVqsW7Cekw1DFWwfqnPJKPt2eksEeRdZ8MUU64EBd8g5SGgRMtS31GVU78WGp2wCJQLASSM5b5km7GaPzykF9",
  "key42": "5A4WZvBHCro4TeMz7LKgWX5TDgmKFC7MCaPusz9bjjEKSkBmd5YmDxRkBjJTeaV2NzL398apKsZ7MtmiZb7qEVX9",
  "key43": "5Ze6fM52ffvTa3L7WPxC4NzVxHfsG4Ka5QRkxTRFFWMjbG1JnVaNPFrg89jZhKf7PuBHvYQHCUmbyAJpnYUQTxGq",
  "key44": "5g8PmoLF1H68DPhPGt78b6MrxUpJaQcMnf3sbdJ53cEoCMt7EP6d1kqG7AQHt9Rg3tsgPt6uvr97xkscJ4nbh6gZ",
  "key45": "5CNamXqQQYnoPuspVsuPtqXi3fuqTggimzk6TUAoGCwXHVPedpTwvg2uiaUsTpAN5PfvJh7CyMyydDTQrZ8x2E2b",
  "key46": "2AdQ1e81k1tr42GNnw9dx77okyPqevrt6UbB6udMCEgfSNadxRFAK2CnN3vFjfmygM4Bxjp5p5BbWUPPw3EhJWGD",
  "key47": "2AesPwvFmRBqqKRk9awNoMkz7vvVNttHnRnKeg9mxbuM1PmN3yiSvZgS9cViNbBQ7pdBQ4U9mt1ZQRJXVtWvycot"
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
