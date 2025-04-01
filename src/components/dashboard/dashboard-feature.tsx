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
    "64rSxfSrwjYp8We4hpXracPwQWgBBM6HB6DP9KEcsty3ZYQzbUB3L1QKbkHr79nZjyLqEVD51Vn4fHeBzKJ6uccu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nHmEYNdCEMmBrUETbVTjNKi4wZfsDq25rL7G8H7oDkgJZcbRpB1gmkGbjWLcb6L5roke4FnKVdrE7yPJmU3xiSw",
  "key1": "9YNovCbdjrzYGZJhydnmhgudEx5Cm14biJb3EbiDfaQRKewqpjoPYKPjJYvFM2E2xkCV8MpAkjMhgGXz7zYZYWB",
  "key2": "53Niy9vLKxCCd6EDT3idEfMpgg2E279FUhVNwcB6JEzUymUVRpK197Bjho7GL136j147ytNx8mDd3MpyvvGVsQvP",
  "key3": "3k1Hz6Ns58wyaD88ZhAAWkWMZW98jPRz7T7V4ykLvTiTgL7qeiuZMxVmt9aNPuMKsziG6BzBSYxVqF2RitzZvDsf",
  "key4": "PTNwNYWBVsN7RkJxEbbkJuvkjKCdwpVbcZBomRervSGq1EPDwkQJmZmc6fgFS9kn7UT575TVSJZbSUk7cixSj8a",
  "key5": "5vNrUg9VFeEW4Bb8RzZb3Hp41PtDFykogV7zXRYRkKkJcxMSUNLGoAa2FyxjMuLJfAwFHgZcSPz4HxuwUjuvKSWR",
  "key6": "3AK54WZCxXNLCdM4V3tbn2w1n3cpmgMAkirGeXejdHfdqrujf6bqYxvmnM2Q4MYPZtSxL9th7K1MLB2J136wY5Qn",
  "key7": "56o9DEG82ZDHjmA7kktNdk5RL4fPZCMnqBp5tT7Uu8978J5fxwTiQzQ5QXEAmWh5vJTxNaCs9dMaJHRfBPtkTLhh",
  "key8": "4s9sMVwDMzpVT8LxsDLUnsjesP4Zia1hTa44ufkzqcVXbMiCgr2ab2RUVNjk5Dp15JQikWinSNKyXV8w7cm7hFKN",
  "key9": "4C3cpkyy5LKqv9HqWPS4oZkLiyLtN6pbptWZvSAuHP67wqh2x2ziBz1qfGriTZmiguxHCJgCB4rstuuKF7c6CWq6",
  "key10": "5j2Ay2B79jN2sxXCRVoFVodgWQPJUdYBVNUVpVxazysc181o9WhS8Ue5gDyyskkb8TY9KAhRZQyB6dyy7N4CmZm6",
  "key11": "5QLa1KaeaoxCqsm5KX1wzAiFqx5vBP2w3HhGKHgTKEi3mUqBZ67b1gKiQMFNFGMQ4NhF67spk7vTcte4S5P4cJTE",
  "key12": "4mjfdPKXURhFjSHaPGh9iJ7Nkbm3dxfkFsYWnGJC5zSTkbNCmTcpebefhGkXPpcoK1pMXAkzuS9XT8TtoRRNMVoC",
  "key13": "62aM5cesEJksDvEK3CoDwoE2tvqxhJqMNtvX6rPbGqUbHFoU3LmAakP76EG1PqfzfojUqkbbYkGMbutCN3vNioj5",
  "key14": "5tF3MjesW3MHpjAQLB8S81K9oBQB65dbn3xEq79zjVMWDLe2XN4MMWEBpYdByyLbGdz9YVDNZi9YRjQNKdLz4ikH",
  "key15": "62dR3qWz36X9JhdZBGyR6yfZFD4ffsMrCKkgBeikqxX9PAg3PpiqqXPqm9eXfX13yg9wJGAPcWUS74qV1yut5Tjr",
  "key16": "4uW6pmtFezwSMnVqg4k8z4u7m116kdJQ8rDAg5bDbNqurQVwd4p2vZYYGQe7XdhSFThC4a2DmKCrVuWBvH6DDJM5",
  "key17": "39CqRZLYch8UFW7hr7UC9ja3pfeTBB9R6R83wL3uSz86eH3VrYeHHK9nP5qyACvaMa3fLRFZcXPbbB1i881SmQmk",
  "key18": "394f7d43ssBK5bCtesWbghSpzN9ujGpxjbwpc7Jdw21myYGB4Gxsximp9V7H5y4RqCZwL9Q4iLd3ig8JHVb3ZrQk",
  "key19": "gxycFes3NzcXJWvVq64G1fN53fhuQPEqLQdf97kfivd7fJYVFta4cbn4cVNmqZuXhnehnYBAv5hdUApyR9MG6uG",
  "key20": "4WxJV1vBcNRp3R66vmZSYff9Wqitbsc58PE74bUi7dKYHRHs3VpT3sgU3Ti41A5kApDHFTiEDYzT3RXb5C7ZBoSV",
  "key21": "3wP81NtQ9cCzA3oYk9x4eoauBgaksS77nrazS82oduHi194DStYUeyeQNbqo9ongjb2JfRSXTZsni8LT2SVLYKCp",
  "key22": "3MVjFkws5bneEAUYeSvanxgnXFwqn6zp1TdM5DT7rdLer9ESQJrJ7uZbUhGRgk9WLdxCg6r7i3qUWpEY9rCJ8yda",
  "key23": "3vu2Q7HyPMYVsmcqhkmC5ZdEh4wcBafEuZKQkEccMABt4E9ojo8Bnr9PUTR2kYFP8k3fPfNN7BieVQxAhsBhwymi",
  "key24": "3ZBoxDbxbUQAjFKbNvTsyj8TCu5N5TKzKpH7gwTdru1AX7C1H1A2Y3k9GL3FF7roFy41evNnpsVBVh7hgkqScUws",
  "key25": "4JXyFcskR9gxgTDeviThAHWWSJKkM7q7e1BffLovcPsNABLpu4TP2SMfHjfT2gtWmoFby5cZymPAJzAiTGYAieSg",
  "key26": "4FX1fH3X2JJnLmR4k5tjaHaQ5Qic9wPXi2GgoaPVq1Wpyb6EYE9kgVoczribJ6Qd6Z4HuT9YB8JJnULGbSfCY9TE",
  "key27": "4L7QtQ14J91RaJRZm3TeqK8dv6DLQb9M32bnvBNW8RKpYTvvYKmiAcJuwPRGFXiShE7aLR9tqFgAjA9YF9AsCobu",
  "key28": "5WubagazabNHib6ped2DkunQRuaR1NdrkjWiphSdkLbQdZhFHJsNpcdEbwmgDXoCrTMpg1Cb1Bt4fc94oju2fVay",
  "key29": "4C8XtkaUSCpFf2B2XgU9WswGV2bQWQWUaa57ftpvj4CGejgtTVRhrYdbzVmhThZg6pPKnQsAYoejfSCWyqvFcSQU",
  "key30": "4A5AbZKkDkBzSxcpQAnv4WGnmAgC6vmCnS1G8CurVqXgyDMWxPV8xzPfjS2REjDWHvZEWeieYmcZq9GLj6CCtxGR",
  "key31": "5SWM1KNTEhvwmjuteiifQwRUALErbMvg58rVfCqyZzRicXDSiKLYaMNRjL5VVvKsvgXuFfTuLE9LUCzC9GRrQSak",
  "key32": "4zbxtLixgf2myJ45g1gYWdiPfkUg5g8Pdbq689awn3Zjqe9Z4h1NCqECuVuPqnpjGg2TuNCRG2xstm2Ti2jHwqSG",
  "key33": "RdBy6q6ZFrw5KFD2M9xqFXvfDxsfCxMbLv6XzE6Y62tpYCzCSzUbb1XxkZabowUNbZCk6fKp2cEYxL6utrUmseD",
  "key34": "5vL5gtAKsbum9u8sipnb3PUdrvaQaamLWyNeVSrKTsVt9z1VS1b1BEqLhWaD6jNTHZYiGYYzcBuEUef6pb8kTUSJ",
  "key35": "5zLxWU8cYPjUvhHEgzMFg4ysPZ7GSQge983mBQw2Xf52iJktfziELEruZHMrAQ2pXNbc8Q3yhNzHTt2z7VEJ7rMe",
  "key36": "5sq6zYHcJ4VZ3MMkhYVoc6BiHhygAYqBTZDR2VwTM1Xm3U3F4yMuqniFzdfwxqsfSDuftvZjx2txN9SKBpbegk4G",
  "key37": "4jhFU8yj7QvgHd44hL9HcRtGpHHMkSi1M6FQrCPmqG2As76QmC69HB6ygfeoKhwZ63L2HG9zFrJ1aDbSMQjQe72Y",
  "key38": "sATFFJToGRzqZKy1oGS7YFe38GZBeRs6nQB69g7rBvVcF6Fp3MpWELMVkKif7oYe6XCxE5WsUUKVYctosHXjLAp",
  "key39": "9g9rgzyb6BiKmfzKwdhwZsi2P1aQ7ZnE6b3WrMcdLVWhqqhGPPpTTuSttkmDAuMTZ6RgQadpYFQxt5AtMDdArpY",
  "key40": "5G53V3k766oLrsu4DvQbeWF2uCS6ogKZeBPZ8D838HSewKZ9orbEbjCQBXPyCwAEZUczgA82gdBRXsYXqR8pLMa8"
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
