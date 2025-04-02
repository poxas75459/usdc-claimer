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
    "3Fn8RPEq1hMhK2LkZ7RvuBgKpmZ7Es8biNNjSTZE6JEn12AHb9y951iDuTKp5xQbubzPZ3pXNGz7QnWqxkqifdmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29n6Fe1rwUeGvgcbMuFydSdJ8cucyxgJfPT56C2teS5FVC2AqcjUdC4GUi92U9LfNBVRoYE8vnRvtHTdnbV2M5y7",
  "key1": "5z8k9gYxChVpH4aMaoGWgQdVZeGsaNHuoGxpy3ijcgAdLsseLWV6b1UtdmsGEoLnVqigM1GcCjs2QNqXgjJyyuHL",
  "key2": "4vDReAAXS6JscH13QYF1a7XNP7jysp4kdfeguZzYyCkxVUum5hvKttarC2t5jmjXxAs9n2aDKxsPzpjsMgiMwGW1",
  "key3": "3pn1LUy9d8F7tLPenqsXapNtAA1BofFJn5uUZpkSqPzBmKSBrvfwr1cQ84q9zVtqCq2nQak1d2FTQg364T4qWNEf",
  "key4": "3k13qJr93bRHoU3CHJ2m5G4N1J932hmjjz4QxKfRAkCENCzf2zAFkCD4c6Sn46xBaGNCL3CzGnvKpp4CXfDwJcFw",
  "key5": "61gsSiBaF6gZDcP1YMgQSQkNFD6L8X5HDfiXF4khTNyc9BoYjie4Txvd52joKWyj9EUHmkGNcvpyhEuPzw6dkfQ9",
  "key6": "5QqQvbbFV9kNNwFwtpW4UmjrUyF8YJFiny3Wfa3wz8vfR7PwfGEkYgab57cWtm5TBawcU2iFtQknZSHPVLjuThvv",
  "key7": "2BDbTn2pKsp2UesHXcFSUsvaPBcie4iCvmfzoJ2P8KMtbmSYXr4M4i3JmmnCjyo9smoQB86vX7niarBSyHzFZVDc",
  "key8": "5TpZLjhoAtV7QPqXcDBYnwoC6XExPzvCbeE3udsVd2tm5ighrmLcJUzo8SMycApLRwymzU4cdvuwZpkT9rKFi5tH",
  "key9": "4HPFXMBh2tCEb8e4773Cf1sAF9FHBf68oofyeja7i771kBfMMf671VeoTCtBzr1kEw2tsdP9CiJ1yzveFYnrHkPC",
  "key10": "gdAqSTthLqBg7LY6gXULhvCU9UPSJoqYhJgLk1x6XjD4NFUkSYFJC1XJnVtbFpP1FuRDAY271FXpF9a6k5thS9Q",
  "key11": "3gfybtyUwBiN7XJk8VzvfwPDUfwGEKcrcB4QKqzksR4LSkLVoV6eQgtM5vqQcWVREcgch1iQSsw7T4idNhV5rwqe",
  "key12": "sGUVYJvft9QMqqaB92AoroUxSgVcQKsetUd5CDJcuBDEvGg6hMbrBYtukAN5YVQsxy8QrBUAuQZD94dKH3JgJAA",
  "key13": "5Jge7EnMWi5dUZjc8FAPhAmzAx7SDxNARd1s1Px4Zc58qnAqqkAv4nQqyprg2uxPQJ99xJ2LBkMwmxE372uneK8N",
  "key14": "2iMrxXKmH8uRPEp1HcRGWXC5qN6hZAipPpAqgQXcB6dj8j1zn41KHSxVMKWXp1F1e3NuZ5m1iPkTwXE4xjCuL4cy",
  "key15": "3tssjF4WCM83UE31EiqZq6TbXtB3KhkwB4K7oTp5XJ334uk8oNKSyt36qqBpjjv3tc6tKmSYqYs8AcP62cXUjEbW",
  "key16": "4jVzU6yiuiGe1p8e81GTdmAFzeqFzqcWDbBGCtci6ZEiSuwr1gGNgcanQtnLGRW5JFDSUpEE9Qww3ehUJdWaz4Te",
  "key17": "62VYWP92Y3zAynva12MnZTSgubPDQ7Kj8Ss388weALrFeSkRwX53DXS7k6pvcYruiRsLdoKoZF6kbF6zKSFESdtC",
  "key18": "2Sz6aUsAkT7MYtoeRykfqPf196NwTdkFbfkcjmvPiw8HhuDhHouLDiA71LbY22yy9zsyumCwpoJeZ2HiLxWRApCh",
  "key19": "25QYjnV1afhehiCketnz1U2FJsWcCtbYD1KBWYZtLcwtcgyWu2oo4zJ3FeuDDm8KNDwengiy8d8KaxH8gyekkpxx",
  "key20": "4UXVSNQiufu32p6CuD5cxddrTkBsPy3sNN2iNta2jnQKGNQPqp3mL3Uai12E79ViyJQSsvfiJ59MCowRcTSNvb5S",
  "key21": "2XX4DkrwVrbTW895Tcu8BEqTouQAUzsEnA2PPP3SCLKMnFgC2MFiz24bek7Xz2zTs78UyguNhhxARHWbjMucPXsS",
  "key22": "3HgJ1exJRLEtsqkGbsLGPYRSdcS621nZ6FFQyik5TWuwsQmKmKAzsTqmzJ8u7R2HTngiYZ8TBqEkafixWV1GKSXR",
  "key23": "5s5cUvd2urHtVmLwW5TfmApm4vRJbEjib8hiRQo1ANZfKbFe1VJCTo4BzeGocHEMzVwPh7b3nmdmfzUMn9nz8TiZ",
  "key24": "3QUqMrvcUw9cN7TbBfmp7Uzh2twcY4J89Cyw6MWRHgQXK7QzMzycoivTiZhJoVPCEct5dtvCj92aVHbEmPVy7fMS",
  "key25": "2WkGymr1zvDq9CQoVzsFzLHsLctPYDVECTH4r3o1hiVk45SfBu4pobPdEFe8zmPcF2tZQgHNBujAj3sdguuEixAP",
  "key26": "4AgJQeviU2o5ySp4c6jVndnLyWycSfcnpaBrEi3VsDwp4cKYcyEx4WdeTpRttjAMHpQqJNbQFuze3nfF96CXt1JR",
  "key27": "8oG23gKSoBi5TvnHzYpfJUBWwed5TEei52A6H3kU5YXmYK43JbZhRiMwaWjfzyE28LTaJRB8bUXpbnmv47s85F7",
  "key28": "4wCjcAAsHBRbuc4kop78ktRawStzoLuN5Da7V6fo9Q2gbTbfxLLtsAt3ABoKQJ3mK4847Vx1ThfaBR9SeMDmT1qS",
  "key29": "Ub3moQLCWpGVcaU8r2rYuRGGKkuCuA8nikkXmYCpzVRqqRUrb6uXu5mhNVNjgxDRhxhcUkeQQXtnzEWLz8txmAn"
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
