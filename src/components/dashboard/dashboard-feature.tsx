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
    "2odDTzMCseczeaCiyvEsebTg3X3s6Fw7QTu4Vy9iyGMBgvAqt3zzGTWZRkLo14cRfDJJuAiZKksuPSSf1HUKqpq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fyGwysmK4Yed3McRv5UDBHFw9ESDHomRcc7e8iZqL1pz9aCMc9sbxQkJdNvQVmix2pCuThdrK2dMv8C9e9kT5Ao",
  "key1": "sFnJKiUcEQyNd55fvFeBHSDUs85L57pxPD8aVLdRoXTY25wU8miU3UXcwFanGZcF3bGc3GLp1QAaAyzSdoV6Twr",
  "key2": "5jRQd9o98AMxgw6aTMxswcLeprfbc2mburWktjn6c98FKuru1vLyNmaqnFp41px1zpf5BKJSVyD8RfjTs2JBfCUH",
  "key3": "2YyHZFPFMVFFCZQW69KLaojMih1fM1q2sEWnbh8JGduSFae9ydemWp8e6YUvtweEFWcCYHXisFHsxe4oxKze3RM1",
  "key4": "4hoPZtK22KN3JC7A4tp2BJ5tZ54njQej2SQHSkGoySiSL1nn2zSFxx5U9qrsQT2vkzAHwWceRALbjtMJLP5m9DP5",
  "key5": "3KvrviemWNgnADJFjWuBpzA13PuWx3HZsWRTNBHBPw5HFwna5ExH3a7iMjB3RFSjqptcSTxACC4phjG4YbF1hEHH",
  "key6": "3LaK576TgNWnCVcVKrJNUYKtj5yKMtD3aL7EMh5A2U4QRuYpeLznjYqULJH2wwJM5YLJV646vZAUVYqm4MYNbJyg",
  "key7": "fS7eMyc87sSVZ81JXzxpFMgoTVGDm8atrJGcd5jPDedSjAufiNqGH5b5vYqyNNczcZcyPY58ossSJ875YtRDSv3",
  "key8": "3vbUuHztTsk3z8W5oGvxKq1RAQaXtBfMKJWo5FonjqCNteh1suYrj3cLHGAk9Q4ExTR6JyWZiGR6xqF1aiJ7q1eD",
  "key9": "4vfhb1RfJwVr11PKsoVfjwZ4QmgU3C9QCd6jXe5vd9GjHkoSNmUnGme8GxQZwLFPByLppafcMiAgDGuLUSTQEK8B",
  "key10": "3HxDunMA15zG1Zg6g52bsyGWJDSSbqzSC9HaX2ehvzqL67MfDGnroBbUNceJ5GLACeNW1Ltu3EfGDwW9GLq4RQVV",
  "key11": "2sNgouYvmM1JxuiU6QdPZ8nQE71BB6ZDVo4sZW329w4VzXDNBB1NqKx1tukxUEaVWpmrCQ7cCniaVNwyFuCH9tJL",
  "key12": "2dAhey32pEETPMaLv813fB9xV3ZHDAnK7tY8JQUJ68SXWTUAd7MNuKqDAKN3KZyt2V9Frq2X8hETqTWiDQPTvS4V",
  "key13": "3C3M4Ehcy2M4ZQKSM7mD2pK28z1byoDkqRewAgSnMpkhwaW8pgZEdVB4KH4RjCmNDA56vWdMyn28yFW4PTnKY5nH",
  "key14": "2bYzMF3Bz6u8cV1qiqu6ZjQonAd2JKvQj5RrvnAidTnKabaHK7huaiRt9Yxq9dF13NJBiMMXTDkCJoqtax68uKWt",
  "key15": "5HwKiijTH8Sb7unptthBUdkRgATHocdTvPfXGYvGbUe1Tsky4KL2ZJu8X9rr8NzrM9d41Tcvu9miPRS9N6TmknEK",
  "key16": "pXuYHKRJKYUpuk392kXkRJcq1rFH97JrFWiMH2vb2Mq72LSVpRBxJR2r9tuVYa3Zvrg5h1jHZ3LgQZFjzz9pEf3",
  "key17": "45tppJPNva7NfbKxG7nLn6swA9zWhAKX22zDAnTHVARMxTnBqw5DBct4u61HqbC7mRJgYYhe6ZtwFKtu4MrqXaPg",
  "key18": "4LSij63hWVRDHqk5oGHJUc9BnGVix88ZAaFVZoChR3vdokiRyctHq1rhJWe6242zFB6xZ1PsmeJPxPBwQFyD7dtF",
  "key19": "2qiuWFNgjZdQAG5taxpBvSD94C9wR2RwBpfN5GRdL143w1uHokyxZTQeZVr36mYoLbHrdRwnzD2E8XWwdTpiSsPG",
  "key20": "3Zv8h3zfUM3mCjCGNgTx5QHBZByqfnRSm4AVkvuVXcp7zGgsfM76a6yja3VLcGADPPZojG9nLxLR4zDYs5uu7Ykk",
  "key21": "3nH8Sz5eYAuLLNyqFSvJvVUZifBYeSWbg4fSssW55BGfWfLUiZUR8jE2pafdkFwS2Za4sQFJoUzqWjJGgfnvh5pa",
  "key22": "3AU4rC5PMH4M7Ft7gasKvMgphcGpEj5CFV5fW7BNXjzspPmMF2FoiCyLeoJWWZUtGE3U79qRhtw2QQhZZWKnxN7c",
  "key23": "5zDfptewXdCYT6Frgxuzoq1oWy5135PM5Pc57gk3o8pPEwALHARGvuSfYNTtjBQEgptyALRvRDgVzgsRhLZNTPJB",
  "key24": "3YHCaDqrG9MWPQp6GHRfqhnoKNqPwFpTBHiTHFprqikg43qDhgJEaLGXNDKbtsLpbcQjsPg1xz3g6s6q1dTPYzu5",
  "key25": "2QkCZZZZnE4i94MaDnak3jqoPgQL8i2YVnPnrSn7WwufseZxv3uwP1xbBiFpuZk4RoM5cMmRvPGsXrtMZXPnwrBu",
  "key26": "2z3PPR9u6bxzNX3sMaKsNSLwrBDzhqMBupptgA1Eq1LtrF63qZeK65DS7dsxtFHredfHhdevjeu9WMHD7yvPdrki"
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
