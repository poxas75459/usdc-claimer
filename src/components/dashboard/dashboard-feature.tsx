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
    "31VqyHNcvbt4sb2Ec8H4oBnc6GpoEYV71RTKkz5dWBURzJaGkKvD2g4pE2FJ3VBxTYgu1R5kKwQyYDWiiZGqeqqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bmMVmKtpCzAXXXePoaBCuP1T6fw23SPgWPxt33ciW8dBzt36ij6BDi3n5dKN7G96F1HcWF5MsnZEWLf7H7rPvcA",
  "key1": "5C9ZCFVLmcvSRq5YnnSFge6UHumnBVbLMWH4Wg9h6SZuhtQ6P8WzivHfYPmtckZp7ygdMkfg6eNkXYgt8dhqHk4b",
  "key2": "5HvahhhUrEThVoqWwUcRQhzkr4xt4ad7BivsHMiyXTp3juMQQJnREiQWuTowngtmX3eLP57BV6we8aQSFKMgu9yR",
  "key3": "5dpDfi5abDv8RDyvXYugc48ErShy13aKhQmEgo8ApLkn19JnajTXRZMH8m6NAAHRL1hNDeCqSp2XV82inFc8P5ik",
  "key4": "5SnfezAgkEPA95X3a6MYwa5TVJ9nZswSzM9E4Smpg3TZKPRgdUTvLgwzL47BwCj4EygG27SR8Ww5xG3wV9afpYuJ",
  "key5": "tLrGRV8k4D44MEo7ceGCHw3JrWUzMYEr6RwqVWjLwB1Y8BNtCbwCFXMVMx1Zd6b5gocJYTa4N5vZhYebUGFbL4r",
  "key6": "2fx7tfnQSQ6niiT1W4x49Z98P5K7ezWVbZc52Rj1R8596DSZsqwYe2UcbfqGXDaskpxWadERyUBC3sZFM8hY388L",
  "key7": "388FXXVnTfikSqF7vHrYPoCuqhoGM8myM4VKZKecufFfGD64vrpwGASVY2RsWvAd3uGJ9HrV9ukvMnuDQHZ2MgiL",
  "key8": "BPtLMtQAM3wzj1Zijad4f8YsfuN3pSLqojMtbivXVkoKJYUGgUw9fHxS8XwXNjkcKHpoY3DSHF2hzfbud5HLq8T",
  "key9": "64j7q2JHs2wTZJpxLSxLHvvBrxEz3FjH8LXE62SNyxCCfpQZFxKktjRH2wBydbB6n6e9kkTYfSgUX3LTSng3wF6c",
  "key10": "4RZfst1i36vUmaNFtoqLUFDcF2FJkHp18oh6RbFHgWpnQac7R8SzmEjW1yQZmEhyL9yKpSpnQn7FYLmXK4f4Fisu",
  "key11": "2zS3df5x25eKtdxjEc1KtYPe2A6VYfcuULoSZcE2bNjRhnH9CBZth6KL683Ts5wMBJqQBXLKFzM3ByU6A8uE8yXL",
  "key12": "C7QSucqTdqP6zKD52hKXpVv4cMnB3waUZJzd8Uj5NUoY8CHMvq8CyShtzoPDGMT5MP7zbZYk7ogfpEdBxr9XRfd",
  "key13": "3GMKc7zYdrLu685BdFrfJZ5VvhoufHrNSwLuJ6J8aC4RTv25UXoto1jp34MVY4S4acAgtFZCrzhJYhSqyHcHdhEc",
  "key14": "5MUY4XUBfzq7D96ciTAq8PZBKkoN4C3hWMiHSeaVpge83Qs7FFLcLsGCTNpuS1aBxFvygriMeC8Q9HgQqY4KeZE7",
  "key15": "5WC7ijJYVakTHDBYcZFpJMyDp4DStMGwvzy1qBTcv5ov94S4SpkJ7bAEghjm57JRpQzf6MTbuxU1kbVnjEVwjJ7i",
  "key16": "4rPZGnngZqkbj9TA8MHMS7bM3p3HKiVbs8rCQA1gtfejUDTG7HsEsUqM1Nza4vxHBNAr4AtChxNwReF6DbcMNjEE",
  "key17": "3kLakUBoZB5UgMMzg84W9sFiNZyiSrt7Ah4GZEYTDoqNfL1pe85VCzxrVM3xca6pnvgSTzxhUTao1ojd3YJ3nAHu",
  "key18": "2aCeerw2JPkrvkgBcd7JATWivHu9s4gEdbRwsgYwCwEYqzihahSLfs9K9Dr1LmcheasjcDENHmw1Bmi4veZZqP6s",
  "key19": "YjUmF7TpJ9gwDHrLte7BTs8nuvJRt7Bsqiunf5rhwT5TRFLX1W57RaMC2ZzQ1fLkkEuDwXupgWPBbFRXUE2UVZk",
  "key20": "29yGdbGT87XVug7TVv9SieycncAjAfaQrQnm6JG442PCmEn5zVmHA4JuKa1FzshLnMExwyFVb32mxExtUFxiM38M",
  "key21": "5R5K4BGbTA78hYNC6sBZfEegLsiuaiABEzs6N6DNQmngu1Ggxu3aHZHx3mj5axYy3fVysxFPViHcsDtSe41U8RLA",
  "key22": "1z3mDuvP6Q2792KSQJ3B1utDMZWx9Q5xk8i7DCkB8RLiFvFwfsQ6orqvw32yiELEAruDLpnaAdy7uXat38WEtyd",
  "key23": "2B6m6vwNKGf6peJw2fizUWEeadTXn1M5QZS3LkTki6WqiQ2zbymfWMmJJVh7rAG3rbZBKgYmwokRiXpeEEi8bsxs",
  "key24": "5guVyDJoA6zRrwavBkZ5i7oGV4VadmP8yjBnsLDE92S9YU2cADEnzaJB3BfjoYH3nAH6333jD5idZGf18tU1upme",
  "key25": "3KCMi4vBrTps1XmfpjcUNwP5soqJiwGD3XfScfrSEr43WFA5qjJGqzMA4ZKSGS4kUr7SbJizhxdBzYACCz1vzkBC",
  "key26": "2t6ruJqpH2rPGFTRgfSK7hH7kDGfzk3hpxwrv3X8oYfzd7mZWUX9WkHXhjMqW28QnADHeevvRhTtNVwrXaD4tTVZ",
  "key27": "2HLZmnxHxYXepMJuHebeCJkEybkHbCM8ZTPXDfDhns46zPnUJ4VRjb3DLrKqEvUGWszEaty4YLpQKGrnuGnBESvj",
  "key28": "3JdGvh2fvJK1vdyQnu7Y1ex16i6V2oeE9BTQKobHayCUVpy7YBt1cBHdowZ1qEjBVMnuHwtewtes6XKVmf9PkUqg",
  "key29": "5UinA17RMuzaGciDPnnte5CXyQjT3HMVLpjvrfWWos3SCiu9vGfQvcFUmgmJPeQwcHf2c6Z1EqyHLuryow5fpPqV",
  "key30": "445jeaXQAReYf6F5UBteiH4XekSVNRsAXPszk8hA1AU45gvVs8tFG6kD5hpyawaVK7XXc5UcC4i15c19CK8K9tTh"
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
