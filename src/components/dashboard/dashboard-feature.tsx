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
    "3MnkHhzZ7p4xozghvrYAw6CjxoWBmGnwoAvNLAy1hQQK7B6BusGEm4dopCoUhDk3Mzm4Re2qxx4ZuGV3xeVUw56a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38wEbMaXVHHBgswior1cGhXWvCWXVy3azB3NQ4iAff14ScBdBTHmMNdc6GyW2yv7rM2Z4tN7ujNsWhhoZPaiuovC",
  "key1": "2LKeS77xRoqDs3s3VPPLAap2srKBaVqmCtDKPtuvu26Wjcm4nBBWyHbpKUAdiwPch1JNQ23U1jWQaKdbY3MjKfRx",
  "key2": "3FKktXMHaFFKZuKnojAG14CmaZKjk7rJkeG9m9is6TowBoC2JHqDTW3i64Vs5vChb6ozQp5rakfV7bXEc7XjtDq4",
  "key3": "5fa5w5nMQnvFGkKrgQ2PQKq8DU83LKQaUNm26uGhSyiKQ4iMyeDA4EkKRwMW6sZJEtyTMWtWsvrTYJkCZxxSC9Ky",
  "key4": "3NGUQbZZFjdggoVufKiaBhdGGgyLMswLFGQyYU5BVrBYJxgkroSa9BUhvUJ9PPKnF5ySHMSvFQX1yqtcJXw2LHsS",
  "key5": "rkLVQQFWj2f5CUmABwxvaN7AvJUKarYJJDZBV6RE8LbnigWEBjiFM8o8JeL2fhCaURJtBCpG5XP59pBbcQ2bs6y",
  "key6": "guufyxPsMYGdovEZKC6msGQw3ViuiWSdYbz1NDT9ZFAJ6t447Q3ntWsPQ8sYqrEMG8fdTWtjqPhPu3Y5Cs5ACut",
  "key7": "JgPN6EYyQSmNYr5LEhzC9fUUWePC2ftetaUpYXHWvhyerNEwHtpiTwBAMmzeC3nTNdwyHrrUaSU5GeXwZf6Aut5",
  "key8": "2E6XyVQnxGHrKjwhcsLwk5xprZFW3EfLauxYKvfZtEkxCwAJ69Kqtcn9MfhTvyW6xnJjXBfQtN2raZLatxzQRHBY",
  "key9": "2GKPS1WLcKZEVphPDUbf1wnvmbTUGJHzJRHeABaaNj6H4ocjBHk4XkoYMVoj3pTYfMwSHYenFQ2RBkstj1z9tUxx",
  "key10": "239NSocYCyzWMTeU3g4BqFzbRBnxJ3AZ24KXonL4eTzNgYtajcUEdM4PSfz3oMPYhfB4oCGQtk8EiZuR6TYYKznz",
  "key11": "4JcSL7b6YvSDcPdjo97Q5cQ4ThaJDkxvjFgKvagvZm5A4dvaRFeb85iWk2fGgP3z3LDmqWnDLfugSPsVGFRPiZXc",
  "key12": "4aDuxYrxbcWdqNjNFakuT7p2esbhCtsnBSQVpXGcAEcNZ8n7AsAYGAnf5eGZnS9UDfnoiu7GToUPNpr9hpaauq5J",
  "key13": "28c92TaPf6noMytMJ44z7rT1aeQVkb9XZbQQ3Vs898xwDRnX5w515Y1xarFtrvkgPNeXkPfXzPcQuFMV8a2c4io5",
  "key14": "3nnurreoeRMfyRogKNP9cnNqHj6v5hivYHRtS6rnWcgWKQaq7zCWc82h545bNGL1GXhnVe58u3LHfavRr9DJrt9N",
  "key15": "4Npum6EBkn5ysAdCPLH127crq1knauSkw2ykyHcnuWDfiT9sGHHxP9btCk9f83crdaf7Yba8t1ubPLxT1cPX6qnq",
  "key16": "2g7JfZhTymqXhYL3QFbaz3z3DEKZ6hH4B5pays4MGEwHu4fgoMTWs2y7sUkMAVUqZuxSu18D8HfHqwT2e8QwUGQV",
  "key17": "2mcAMpXJrWG28yyKR9tBXeuzf3cFd4eXXS19ftxEhfXaWqQdiEa16aVdVFrxfcPwq4QFPacAVHJoASgUgcM1Sihh",
  "key18": "3F8S4uRpedW6vB81YUGULweWV8WtNVw1MzrKjnpGo2sqr1QJuHuhyYFE2WD7T1PWiPYgXVCUqKSKshJaLkgXTVfg",
  "key19": "3B3vmWPasY4qTxJpZAVFG2s2A8DbYci6vet4oG7Tyvhnhbir8JVahUbYEqNQ2LSuYxipzHXDsv2ndjQbjW1aavtX",
  "key20": "3e2zzpV48Jgr6fBHVJ6pA3rwfZokXKKAtXC2ZHpte7tp544BDdxPcvxTPKodwU34qSsf3xJzrHbYyz5JwnbZ2kvA",
  "key21": "3Q4EBXjcxqiEaxKaxZT42ZmUAa8x3vRAZNhrTpRFV3nvtddPQynCJeAy5Jc4Q4cRj4iD9dMxaxgYUZ6mo8k8VnqK",
  "key22": "4BMjvQonKfZ6CeELk4rueceBZNxNbEzLUJPzZx5oibXrQpwqDqSsAks92m2Eso8yaocLMhF2ZDxtKaEnneiFK4GB",
  "key23": "3GJyeB4K5AwiHbKBg4EowkpWW8ZoNijMkyaEmdU3SU4jr9PYYLMDredBiDFVLsKMUxwHVgzGC6diFz9zgyvJTW1Y",
  "key24": "2PVPnNxDPuyGabcH9KYXAfrLYmXw5zV9PybjTksVKBemDi7kbj28rmRVGAEKM3ruGYs2M8FFx4epqov8crVphr8R",
  "key25": "2gf1e3Er1WqByFmqX5z4MLFEycrkybwHcuyGVC7xMyj8bYgPmFpDbouXjbp5pGGPj4kmJHdXQShavmNfm2WkvkV5",
  "key26": "4qy1eALRNmc1tXXLbhAHJ5vqjFJ5ijaEpbqXC61jPto8G4nFQz8zLn57iBeQnDVXnaiKEdFsonk6Msqn33avP9jL",
  "key27": "2JLtvNwFo4buYYpP6mCVnfSwiRFrfommbTuE4zb66gD8Ref5RvMBdS55i6oiWgxboCYdU2yrPJiCrvXZKKhUcva5",
  "key28": "2Rwvi6AvNChCLYTHjyfr7uUsEXe9WmF7phUXrUvoFgURQciTmGsFTrJFZikFFs1C3KKK7m4Sxmyrr526NE3oUdtv",
  "key29": "3WqottNedNefn6ZXMSoya7ZxjzE4JL9gphuKQb4pg1tnE2G6GpZdqUj6CSeU1irUYfVUngqPGzjTpb8FC8JwmjNo",
  "key30": "5ftb6aCweef5N4A2Qepjx2Md7hHk1aRVLGyBdGroy1th8xVudKvx6jjuMzhJ4tTYGW3geizHYdMQKMfe4YJHtTtA",
  "key31": "48vuvB6Lk5WZmu3BL5HEGzqxB9K9x1FC9Yx1Nxcwdiy3fb5UMQv5JS6xCfwNR5iK6VrU4PXW3aHp6WMs1T72Hmkz",
  "key32": "5qDghbDiph4RWMqfYbh8uejYWtim7132eu9tdk2K6CmdiVK6RBdeRFDTauE63CLkX1M5NfYQydRvpVaUPHwiQzZd",
  "key33": "5JewdxUc5Y1kfxsKVEf6d5a5qXSdLXt1GbtKcAzBgHmWF7J6KoRb4iEgGSqmiVDnJTTD8dgkjEqJhhVVkanQWzfk",
  "key34": "22G7fPMpdYqFWpM4AJzR2BZufGJL7GvQ7qA7d9qTUHB3vgU5aLsFekcUKyKLnwGVRbv2z6SYHt3xwyiY4FdBtZzp",
  "key35": "4qQaAMSgV9zfpSAngdSvGn8Abjai1DwqsijsPuEa3TPijJdWtZu7a4CVbJ1QqKL1Uwj2jdXbrbCV6ZQDRZT3GNVU",
  "key36": "4qhg4B8CkWckrncii8rPBrX4LPvrQWC2DYLiyNcqpcytMgQh7gGyqHPeSyCXLzVfGf8k8pURfXyYqNe8DTVPWanG"
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
