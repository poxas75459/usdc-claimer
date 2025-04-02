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
    "46jLbj9GpTNazd5x5jAHK8NHa1UL1qiZCk93soDvP4zhgRMYDBPRnZn3FZCayrWt7E7AYyPzUGU6YEdP6xLaxUWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WVSGCqF5Mkb2STNQ33DZ2wqq4jUZHCsNGpg6imHcMry88qhJcB6gerV1stvoXQpU6ajZCgVHTHMLbTYHTAmJa2H",
  "key1": "3QtXwKhJZEyR6YftE5K4KRYzZhWn8vEHPceTNHKcHBz5CDbwapgZKYGcBuEkRFq58kPdK2PagKfouXZic8pvu1VC",
  "key2": "Ni5yX3Dq51vpBzFFziTxAANh2CSWbct3c44BuXCfFccLjzCoiSJ2J45SrHChHj1nQNYUZeL6qbfCJpLkcoGLEiW",
  "key3": "oi44L7Si9QFbYChqe5WLMPYJTVnKugxT8TARTfubroySHPr2vgbvnnYj4bBPZo2hdKjEV6DhQYXauG2qzSwV4sz",
  "key4": "2pCkh5oBgikuSCHSs8FqiE8cTbqNRKAjyer5yFAFJuq5qs7fvaJsxT928GGVrHdhELhF1LYwoqvEa5fPexMNLmyc",
  "key5": "3foqvocFDjz3BvbXJE5vei2iVmidYwDV2DRDZrdXJN9bb5BTn7pXHnk52LY4qjgkmppxbgcBBRxRwf3YMSSrywED",
  "key6": "3BPSpn4ZUAmLohCAwWY5iYGREQxwsSTg27QPi9nCDzfsV3JEcT67AtpWWWYevehevA1FmK1KfsuRrskzdV9Ey6XD",
  "key7": "5uKtzh5kjmoY1yiMwTreJEBh91x1NrcAexthPtkYoCcLpisj15oora9eQ1kSUM2ELKV7fJufCjtdBhSVoM7DApJm",
  "key8": "4jJBnV9UjA82cHXT2Rnme6qEAiEcUXHWp6yoNhKameFwpcK8uqwaqRU7u4DLojT2uULa7CGgfNXxgZPEt38nMCKL",
  "key9": "5WrYyjh66id9wx7sGRXA3xyzxwMnJSEEEG9rkyiNBBEQqrYBQpa5H4ea9XQAXqVSbfaXj5hYLmxY8k4mcazMEkWz",
  "key10": "2ydQDnvf8PSrN47CqTbCKuVpYS69iEhHmNUWT4EUCAy4rddxTZyxnuAVry1yFXVSEVZy181rofAKMhmtg1tzKJy6",
  "key11": "3X2fxpQrXhBeXKRo3FF9BZm4wRzoFE26HhRMyb3rjNZzCRoKmbBV9VvPBuRjvLcVitjpwYNS9j14R2LQGFq7BB2",
  "key12": "2CAVmkgKit88GF7mMHS4Mf1ZByNokjhWqduBmdFpeFDTK5s9CgkvpdDSjG6bRHT9W6BKGoAWpHhhxkJ474JXFRub",
  "key13": "4ShBosyqwqWhiHDofkjNctvdSc66gV1dQUyBtHggroj2z82wPab3wvB8wzhWM3TQ1Y33qHpnAWRv5zkY4RBVLpKK",
  "key14": "2e4ERm2KG1crUocjEZkYzQEP3PqMhqmCSJcn3bz9jxGzknPVtfR9SGU5FGjYWac2fkJDvi63VQTRdfmDEUvbsTzb",
  "key15": "2AW86h7LLcPtmGvq7eLthhh6MBpigwZsoZXwDRNKToencuhmmGBtgAhoPK38suDCBsoqVGQNSfT8ykR5Fdp2g1xu",
  "key16": "2b4YVDiycKxTV79T5JVYyZKbHgG3mMrGei3PyDdXAiy6LACC2oKZGJ7mhTSoD5BiWPQWC4VEoSFmCsPBVzXZVzwd",
  "key17": "5jzxp3Hqd7WhYF2qSejryDZyzsSrgDDErB1hoDdwN7E6kTNW2J4zQMQWD3qCx25Lf4roQ1J3eHy8dgjcqkqYc9VY",
  "key18": "5TqCK6jBCq4xZQPEpRox4W1yNrqChHo7XZ2uZYQdBg5yNjRFLV2WKW9K1pExfjTBufk4GNaBdg8XKVerCJD59PpC",
  "key19": "hmLbaX34rBzREmuGGz9jdoFxzmepCcrb1Gzk1T1qGe2uwic877L64r72qYKQ5pkSfDd5zrNqju8ynLLUyoryxzt",
  "key20": "iTndvRkLQ4kGoNHfCqjWXJpTkXsi2ZHBFFXCkwY1nSyq38qyF5trpsxVm4VdPGmzELcNn2aMZizTGs3aA3to6hE",
  "key21": "2WBvphVLtd6svC7BXaNKYxjdEqHkioSvqew3QskbD3e4MbREbSyzkskSZ3erd8tupXQN4HX64G2hq9JtuEwzjsQa",
  "key22": "2DoAKdZkoQaF1xAKoFQQPPeh6J32KWVBNqRUw5JzKPCZ5Z8NqJTZxRRW7xubyNSaTQvXbA6TtdgJbTELT4724tVQ",
  "key23": "3xEMBY7k8NWEcJH1j3bwLUVi4hTh9E3jZfS88qwGeag1q8jKTxhRw5XDERdfpxqxDJNyhLt4Dg8BYNizuWNb7LD8",
  "key24": "5dxSfGUU7FV8eWtNkEZop17A71yMiR4wJDAi8gG4DeqnSLjqUrw2mAN1EiWRGyAx47qbqZxEmVWz3XzE4qxdqtxU",
  "key25": "3tZJosravHQCSFYJqaWvrmYkqRGHF7vDBB8aTatzwmKjDqN4vXKekNCrUbCnRsZRpEWLTHNLXqP96zyKTTe1U76P",
  "key26": "mDGq4CwKv7atV6V2RAfMQNSmLfWpM3C9oPtuZQQv1a1mGLAt7oAjbtxwwVKoEZiPJ1DX4UUhuBzUpB44T1wr6gG",
  "key27": "3WDihsrMN1bDsDyjGtRmbYxF2sUs4d7sM72HhvbS8ppAmX431fv6tfccXoGPeQptGVdptcSYs4XxoFmUd7jvz7q7",
  "key28": "31HeYuvRjmQjjWqcspdRAHfqKPbJRR7B24pZT2JRfoTaZFMd4wudLXfe76wLkekh3aAvtRY3AzD7kDD8qxrssF3k",
  "key29": "4F28cd9WDpQV64eEDSpK3tLaYKVbqkmhCszXSwcseNoxJZyN5W6L923UvqsTW2zZGrMiZAxN1Y8THqBZvrNisxMQ",
  "key30": "4YeNi226ymBsjLLKCVmMWY53gi9uiU7XiZBUtAyRcLHLQrwWD2mz5eWoYZbLNRUUd87723xVCGvBTYhGLXTN7VYL",
  "key31": "4vbmfzybJJgsSCMC9W52qwc323LZ5u86fjTvDBnrFuMDReEQwchAxQa537gaAqjwk84pMDK78UcLTrUZQU4dYERK",
  "key32": "48PoMSwK1QvjnGrtqfhZzQApf6wh3YGZuPk4PBVvQWRRn7W7MLwtLMKytWGpcfqqFJqBywJz15KYD5fdCMseG4kh",
  "key33": "3uSizJRFwYfFPzdrCoUpRKWXXa77WHm9s6g9h3pvcmdAvmqrzDtYFvstjyZhTXdJLTnTtb1uCbCpK6EQ5iaAJzAj",
  "key34": "4yBpB8zRTzLmsRKr23rbW6KZ3hCkr7onqS629tNN7ZXGwUrwyAN7XiD8Vfgs5qi7DRFBaxDJLLJNfeZJ9DvjFoq6",
  "key35": "49fkfrvTdmSGDyYHzyDyEHWExmMBbjPkSRQrC95UfhQTmoY1GdxzYG9UBhN5v3YdCyQycSfWVqNKtZiumTKJQkS6",
  "key36": "63wZQuteeqbx6pZhMZGjBBx6qvEfGAVaVr8FpksR2Fz2sWaZwYBoZ23zZ3yq12DmEAtXBpF2fDtK6LL9nwUCCTpQ",
  "key37": "1ba2sLjmC1PwMVqhBQYyR7StGq8a7NWP7FNexc3rZtZTEYkC1qd3t7sgrXY7naKae5XfRAwm3QhNH9s3vgFvT4u",
  "key38": "5R3uQeqLkngNB4X8w85Rrau2rjMRR6keiKYL3utgCkMz7bo4LNXULFoNNdgAhxJAXSq5HgHhdBJrVYL5xLvdZgh",
  "key39": "5ftVwWZ1mKDo95djbyMPDdwWLeaAHbfzNWd8cnRo6rESMbXwJnkUQVB8wKT41FoR5DohPCWZNZ4JFox78jeiL3sJ",
  "key40": "oZLe54nf2arvfwnJ93h4vACnLaLFAXDr53DatPAdDnceDgKxxzN8Ano4Z2qEgsYCx1n5ZS959SnnF31v3vffB2R",
  "key41": "2AwRPmtFF2jaGE9jN1zkMRTSVHa8gb9s5WtZqVRN8CjQmoi6XnzzDMEzPiumtybnqT8S7dtWQ2HSSDTjoNFWAefk",
  "key42": "5wZLEfM8G5Z1i8PdJyFopMiG2AY6LhGctHxoQignxAPNXqFxmWiG4AzWnJs9dh2RrKzdXJ21HnePsta36ucvwbSt",
  "key43": "3TLz7XniwEwv3SyUUhv8PCpa1iza8AqVkYQARNuYiGUXypQJi3bCtLqmYvEkbK4AMmqw6vmRFHEnMXaKkG8iw381",
  "key44": "4NbfPxQ2MBfZJzdRHKRSb2bLbcYw3zvCd2YjYn2dx6Wyhj16Ge4okP4uZ6NSXf9xuUjmkZV9bonyMyFeNDE8Xygj",
  "key45": "CiPcj8U1j9xCVZr8G7EC2dsYeTBG7i2KmqMSbNiPVR8N3Vnf7Qx6dRYwUR54AKzEpTcPqgwHyeMMvAprz1f8tvf"
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
