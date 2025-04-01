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
    "5B7En1PB1SvZwY3nP9LdsGvY9gLhzP2R7Fw8Dw4j4DAwLXomccSRyUpu6GtwANtQYA6mLCTqAqq5dfP9TrqgNLHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F51iif7Tb3oLVbuCG1rracnBrn6UnTXNxs6xbyp4tJgj5drzq5BTNNaB7BGrQpkwcNVV5bN3PJrWLeeHgsyWAnu",
  "key1": "3g7M6i8wT9CaiiBTabakEo8FRmXugNXc7xwu63ckviqzvx26cg7JBsnsGTB89sN6tMpirAtquGLiNX3CyEzXWCFV",
  "key2": "2mFy25PeWGsnKKVtp2mpBad2BKhVwYKZLunHtba3KnaRe7cLRpkSdr1EpUXpCBtwvVQWsNBzZEVRJpQtq36oXd1A",
  "key3": "2uHyGEBzQVJKqk91y8gaJdvdtZ4122c5MuwJkvL2WmJv9SynzHUMqerseHDGJVKDTSLiXwke1R4rEsCyZKrESK5W",
  "key4": "Cpt94jtnCbdLtzZGEBm5ydSmJLfHFwub9beSHaWKnVYvz8hexGp9fxAreYUFh2Qjg298gBrjr5nr9YjoZPLg94w",
  "key5": "E4PbKKyThWaCHPp1jZfMQtFm1D798FE9aVcWzp3yQuDxNqsX4hGd5J6YT7xY1GMdv1FRNMhsSEfMoVq3s33MQid",
  "key6": "4p4FJEf1Pst8tTKDGzjxKfmgw5uguULHV41RpM7HvcqWBb1nBgxNm2JBm92UA6oswEYVky8wK3MhvU3qqqiL4NGf",
  "key7": "32VcjRiLU5p1eVG2F6Srk5HUrXCv43DhGXr4wnNNZNRfNuY5CELDDRad2Ceq8NP5euZ3Co1BGr5EeNVTMJzPj5gQ",
  "key8": "5D5UCF4qs9mVhxPzpUJgWv3rfSn4ZgVz2aW3s3aEhV5W9dfU1cTvxjUbAJaP5YTK8bFm5aHpw89uy291skuA19Up",
  "key9": "4haRcMV62EXVks15k7HjYJzQ7qCCwRdmyQReiHWnttY8o4WAWzwSuz9WvZUzniScTW2nifKKHQs9eHJWK1V5pHRd",
  "key10": "3Xrn8N6rWE8CnTyFL2zgDwhRaRwP8qpsF9p9TXA8whXrVmUyHoyDUo2JLDoGC9Wjq1cTdaTL8axT9C7JfgAAu4qb",
  "key11": "2kuyeU9MFi1AuD6XvkdHvodJQe4nucREtTAu7297hmaSnp4YEdJK5KsxQ7A4pVCEefftNuKUdAbbhCCNmGvWTQqU",
  "key12": "sDQFTkDtsWK6R22VaDRxQPh5k8xVP7YofhFwbW2dwXKgsrpJE5EsrW4aM7cgTmQAcM6JJQJCHieMUwYoYLvHAZj",
  "key13": "3ucWoM6wb22oaCihZiuoJ4NJ78Ty3bh2RHheZSwuBNZqopKJV3B9Vm342UXFNwKigJaydXXbZVDt9A3DMHiNEhR",
  "key14": "5P8vWTMXoRDnJfEDfuK3YRNcfjuK4pZ2NSQurwKvZeQPg5qBXxgYtFrvHpFsbXEo7MGoF8164ELKzwgtrHYJmhX3",
  "key15": "2BLRQbkj4djxcA3TWraApvdjunSvraZs7jS5wXaumgAkp85PPXWaK2bFXwWPkZuz2buwaCZ9xhjv2taVdJVpNEb2",
  "key16": "2ZRVfoZTtuaquBkyKw7N42dMwMJkNJx2UEwZbNxAug1G4U2rfUNYsPnh9B37wVzRof3XbAUAnSFa6jxVdaVxQb2A",
  "key17": "3QYWfFgPq4vk4NjKLnuV7D2LuNh61XZXPPY6L16nAVYm2UUenyrgd3JHHrpqmv8KvfCCjWgtQJ6yEFrZHZWiNgcN",
  "key18": "4KhHPRwgNCnnZvLoDBwjyBVJPd6p326JdYSgcZqasjRX24ZoxSyskAHMbf6p7bXKcfrYcQ9bvfiKikYha45HgDq",
  "key19": "53SxDQiy3g1DVw8P38AfvLa8Q5bQWGsejYQo5LDYn3DCjcY5mvLDdd2qe5EhG3Uhs4D6is5ayqkALanXTtkQw1AN",
  "key20": "3xVNJKH4MH7ToQVoCt7PUZLR9M7tmRfpEisG47E9GspMbSis4vvkoC16jC5JFTk4KZnTp8rpKGa8dwcYRUPah7zQ",
  "key21": "6PAGNRZdb3dze4PjygKvEhUgbvpUstqBjxTAfNkEqMavAWHZMmT7rYHfMpJorpdpGe4jpHoie8mUCrFByHg4Tdv",
  "key22": "38b3Q9tGVFMKULc1D3PVtqzaC4r38KxtYtvHquc8vPnmJTYTwURHquSDW7VkQ571YFozbJLiS36QNhpzEKB4Tuhk",
  "key23": "3V7HxeVP8XcTVWdyMQ6PfRq7eBtEjmJpWhQ5gQhx6iWyupSvLLHfkExHPcrvQi7zPvwbzC5tHLU9q3qHBPnmMNnP",
  "key24": "2zj9goagARRJcKPnFAzVav8u3QNTjmq8nG5MKrdqq9dqwdeM8JmxcWLUCfJ5g1Kx1dR9Vsnw7wPEaCV3KtyE3ie7",
  "key25": "4W2xHJiPF3QDxdLbJ2ftUPNNCrmCKdjn7LKugdcY6xKhY2xuMhBLbgYj3hdw4nzYTUrJK7T3Hpthtt339cNUzDjM",
  "key26": "3FK4C1X2ByE8hVWZpRXVmECY3jtVEzPAmsLFXqnEqPF89jtvtDMJrsUuZSX9wrrQX5hENwjFnC5pJWtRPDm1bnG2",
  "key27": "3i8WSXELxuWeddyuC155WCkEfgxE9812z1N2CWejTmK2V9w65Gbf7dKfGkDvxZjaJr3u35WAuAr9U9jidnjjbqLK",
  "key28": "5czcsbvupeE1vG9QHf4oZ49Jthir4QdNERzATM8BDtKLupM5eoAxYopvTozD6JrYCWizaVKo5j3p6p6GvZoxkKoT",
  "key29": "2EDEj3xTWDWuLpVDdVdfjT6u7LeeYuoNNamrNCEP1VSXAN3KjX2KkKBKzrMyKSkr4fdn9nA3RFV4iapGxcmmuewF"
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
