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
    "4Gt1hPEAVK57G8rwsFUR86caZRnYsqPuBhVy3GtZAppLgYxwooh9smvGh8ZPqTAqvqT8xhtUsJonPRPD2ESy3pT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xazcfe3Rf3L92b9EM7Kof92eoAJNCRtjzR6NK2MXr6TsgWzZRPZ3tUi9gmQJJpBm5TupsSUGctZ9mvutELmbYux",
  "key1": "2UiuZoRBcxJoCDQtQR6i3VS5cBaXnzuUpJeFLihxQdeewExAk9EeA6CjHf376K7Mg8PzRLix8JF5SdAzKPQ3D8qF",
  "key2": "3uRunZmFBJECumcGqQXnFwWSnQbNFYcvcrmSXKhTtEz3YBhddXLfgRJd8bhoBck4dCkQgCLL8TUJBgCkcKcqZjLy",
  "key3": "4JFGQ7kCwyWznso4on6TFot3davmYk4Ec92kCv2ggiyAHeRM6Uh2QSk5UFtvBEwdTiTjDzDJS85NrcVu9duazS4F",
  "key4": "4h4N5Bb1MxtFtzqfRjnUcibay4sN64GTScwwP45FrRhQWSSFFpUYVDewMnpRKgvu8ULBNrPrC2qCMWQJ8VWA64Y5",
  "key5": "aFJuKS31cCZ6CrxQB3wR8czmsciyhFE9jZ1F7RCb14BWT8awQorHThWJSgVUH7x7GbMkE3cLw9zEe6VF1CqYJQU",
  "key6": "5BmzeoPTYxJB2sq3R3x6tg4iKTLZku7aSrN1N9GbHSHdx9oSVG96Jy8ECkFF67HAyjh6MRoRsGpcUzaanHhq9wpK",
  "key7": "3tjm7VC7HWbPUJ2tFiFMU9HkSeLW1stLqkX9T6DEsBbBUnPPKmshdJLNKiKUbvZ2wvSUiE4ZwuEDHm9itmynH96n",
  "key8": "53d4pAzeACun3SeRAYFCNKRi5Kgdw9bSwuM4X4iugowv5BjXdG27KptkDRCH3o1VBA4siYdjXGi8P6MVmkuvMzBt",
  "key9": "22oypZNS8igeCTwQdiBYvyinND5j6nmbb3AJN8y4ujQ85But9ZSbM3LJ9pdCjhXSQF72fRh5DUcAd3vxHEuVEFkc",
  "key10": "KMk7bbz3MLUSsGeBuvAFn2VQRvTjVh8kFkgemaGEbhGadUXWJ2NnTZtEF8UjKmddZ5SNoucBwKkVeTpSehbYa5G",
  "key11": "2UGgMnyS7bhCfzhje9HymnEz6b4Bg2WXpgq8SKFecX7zF46KcKWkE2VWVN5D9YLVDy8NMYw7tvMQeA2R27KNUtbc",
  "key12": "4UEh1CTU634Xun7Viutx36mGQpzsKCETsBQVQ5F8S2K7p6uJqZs2tC5sVnsYjg7XzE5QEbUpigWVxSYuMa91eg8y",
  "key13": "hFiJgYGygt7i1Pg43aGPrwu7pbyKdvrkjSxbrFzyiWY67Kimob1wMP15cuK4gSAJ5vM6NzvA3QEwnRJvJCN21Uw",
  "key14": "TQPBZnxRWRNQ7BrWcz5MDzZbwtg4NUJxZdCnRmhWG3CJDdTTDMxKjRQscQqkNeM35s7LJai7o1AHfAsaozC7thY",
  "key15": "59SLcMziRowX5hvfk7Uao5a4BRKrVJUevoYjWg7dQNJZWFDBHpTPNgfBWxNgQHntgGx863NACXxDC5aLLdLSscqw",
  "key16": "KzLauf1jjjNfUPdPUpWvdNurFH6UD8rtmFjAzoAaAftMttKzrj23L2Uesst12EGvzDQV4gs1m6Ds93knhBmr28x",
  "key17": "pb8KQgzJJqzyrsqacaGXHJ7RZusPLiQF92g7nThXHwhuoNpDBSUVWSHsa3BE6iQFj4HN5P4aDy7BLLpG8zhJbKN",
  "key18": "61jmEqaj3EcTFRtC5RVoETWyHC44K9d3d72Q2qBQSzZcsUiJf3yuym67r8bsLkkHvFVY4JLFNjoEp4HxugwFDv74",
  "key19": "zQLaB99Tdv8ZKkcHjuRLgviHsYjTUJw5BxXpCRNQmyCoYoTem8hjTgKsmqm6zF3bghnVVuxJcbTZ4B4F8641ab4",
  "key20": "PQitN4X6bejfomYGCZ43UwSk4KsEkAprWbTcg3SMjGUitiUgF6Wmh2ycTQB1EH3tXStxfqp4wvqBVEXpCrjrusC",
  "key21": "4d1Sa4cfwGhDRCyjGtXSmc1wpTs45sLcPB1WChPYCJiqHGCkXydM5sH3fT1586weKGDEH88VWAV9mkPCz8fWzHDV",
  "key22": "2NnvcPUB1QGcNk3Q1JmQ6NC122Wf4F1PQbjDr7L4w62eZ3bXLEmiA5bPYru7j82cbFag1X689ZNimgnNB83bwZ7C",
  "key23": "3DnXkD8CAVpJYGRkxGoYRwsq9Mi7dpiqWY4Z7XBpV9hJ6sBhWKwHX4Dr2fSFj7x8nnvhpXUi3SwB7cW5uHPj6Un5",
  "key24": "5JVUUNp3YQUQKi4yoHEHsmfpJsVjJNaRxuadRGaZUV6rV1nCQJLiKMDwop2UdD51XxAmYKpPscMWGkcBtqNDziQ2"
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
