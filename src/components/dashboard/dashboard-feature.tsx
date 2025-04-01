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
    "3jsxF6gwPhQ9FUXib3XswjzbSFeiEQsSBzMAv92vbvKVnJDbGPGV51Y1ugoaZFEKPpefzsDuivcicKyzn3oMcuKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ocNapGVQ8uwjEnqiZ8mPYFCturNiWTLmvtsodNs2yrp9QE4JdDS8mWtFm89Z5KQBUmxFT3rciix61wRdqhWHEab",
  "key1": "2aQi8ZjWxgbaRn5RCm7JEB15FfQfHFxiKdRNggmSsmYSLAU41hyPGPXGWAKouKeqMzujgaxF5mCBXJSmixs9V3ci",
  "key2": "2taqKzvNgJqTk9Bi3DiAJJYS6xi55gVyTS3nrfXpetvLyzHaMWppaBNV6133mSjA5bLyttsW3jGeEqB9G6Ue5a81",
  "key3": "5AGXm6jaQUN5wVZSBmK1tVboseDNVut8knDemtGzs6G7Q7UoEC4eBAJYcjy63X3hnWESFFgr7W1kuhHhD53sqtTF",
  "key4": "pDmYpj57JxonVuAsMMrQ5uN9MHgAmeSesJeZzGNyu7fy5ZgFeTCGCfKKABcCjzkY4HKehXXSMABA38pvbMq5oR6",
  "key5": "FJN3Xnhr6U721ux89uutZqhxSkWoMCiSzynpSjVN7e2FNgpzyNasQ5WJrk7PeUR1z3abdvsJbro3YETUHc2yXoU",
  "key6": "2bcFFUkQ1AVwUfMxpQ8QfUPri4PQLUZdFwwYdnPxSFicLXuNJKuk8xrPp2b5jWAPb5aWddHcciS1C72j97ok9rUt",
  "key7": "4JRc4EFCs7nfb9HvrwaB8XR7edWTNUMiRsuzZmURBnXyAckQ7XmuNqznx15ktuPq3nrNxNVPdYRkVjgzKpCENLfx",
  "key8": "fvvmYmsVKHj3F6kPnSfE79BdypVRM3cJhDuWjc83s59JqLbjbXpg9RXcp5xFnFH4tYTjbVAat9my6D4QjcB7HjB",
  "key9": "4z6GugTk1dJ4tXxwTPgqy2axYAFv5rVL2hJanpX12FHA2XdRhT2DjAz3o6hgcWcJpUCWsHBLYz8u1ButNyKkwehu",
  "key10": "3f23FdcG7HiAoAi1EeMAF7iF1v4a98VPpLRmoxLnZoYLZNjWPQmBgTKWkivggK1NcGHXRC39BBRPiXBfGEfczHmG",
  "key11": "41TVwfhoRRbgjiNYQsNKb7uojU71ninU51tZBW2LuvziCnd8p1hjc8m4TaBcWh5mYwxdxL8vdFcPJa9npbPByZxL",
  "key12": "23MX7yAPaWmo2EhtopBwkmLSCPGRe6MsR27TvpEyw8PjppaeS1CEd7vXg85TinLMVqtEoqNkoa8Fa7XvLUucxbv8",
  "key13": "6PdSiPqeHEU9fQdn3HtWzfw6JPFYQDdvHxmhdGQt7qWAHNyMmRLdEnpNc9gWVqcVS2hXNH1NThGZFKVxNcd7Tc9",
  "key14": "5M4ZTtBDTjPqQHBBXt4cHcdV27w9wFqR3ybfpRr3miuQHAUWQmM3Ayyuv9emFHr7sqEJUzMna7tNKidjsyaQbbMw",
  "key15": "chwf8CDutAn35WZWBWBHAGXVZVuy41CHd8iUKhzKoSdRtWXXQeNYENzKDcwMv6N5SeRJqDznfuBK7B9LtUMUn1o",
  "key16": "2d1y1XRKUaDDueauKq6gBGetPNwwXAx6i7PFEu5ZBfsmEmsk82jBVy94mwPbh7ZtzkZevgDGwn9kPvn8sGQzsK7B",
  "key17": "3d9MTgTBpeiz92hbxrW9htum9JwzbV25L4uC9j7QY3pLrsCFvUJpBxcnQAfQQhFffpcBMitokxG8Yc5Zpf4rBSQn",
  "key18": "4DTw8vMSvNS3bRNCYcLzjHP27QxhXDEuA81zzbB6vx9YFDDQhmhGqzrE4wEiNEva49srGxH7Hftd2WpQ9NjiRwgj",
  "key19": "2X184YZYDwVK8KN9JjLWB58syGVBSGHFHYJHzoFtqR8RwmuormfbVA3znfv8o74VurSRGqPzzNYXaAhQHR6eVthc",
  "key20": "3Dn4yKWs9fA56eRQ7T7aEV24gzAW6ciBKyF5pmZFXVGyxMfGzyLEtJ5GMCoX9Q95sQ7vcBrgXSGyJSvKwKwbPjze",
  "key21": "D3refVt3H64RQ1qME97NA6hCW8koF7YFBejSt9YX2BYkcYpR5jpztybnq8DHRzT8465M33LKD37QV5N1ywtaUR5",
  "key22": "2hJunpKxKkNYCdPq4UPtwVTkzfBMtYw8u9bguS3aKChCgEvTKobrcFMVSKuHN5ZAbZpgE9E4JNhXHEHtkSsn1ZTe",
  "key23": "4rByUjXux216y9cvRuezDDMbaJcd9bd7R1U7HxWnxURcMn4mqn52iPnP3S7cJuYp8Hc7ZJFtzGahCnyexJqSp5W9",
  "key24": "LnaVyZXXmAtoaDc5bWBg4KocTaxSqjGwhHcnz9yEBz8gmR2nxZAmFeaaNgKKyveDpyuGKFU54fHCdkXPwzCWzFu",
  "key25": "2sNot9xkaty4aD63uBdHHcQrAFvEMUuumKF86zYQQdMXvzy4qPNtyPehuQmko8h38D7xMYCwnDatiazYaEo3wdGV",
  "key26": "5zZBL7f9RRpw9s8C999ASpNR9JN4CL2Ueps78EeoDwh2QofFdE5TmjLA1v3eMmn3BKBMTkKN7Z5QysdE8up8JM8o",
  "key27": "62yVH62L9m6CjtbHXKQzVUdZ9tWPGx6SjHftTeNvmLhz6Jx3idQvprDcRv4d26qb4FbiVNZXRtJUFaz4iMi3B1gt",
  "key28": "47SLmqpNq7ACszffhffrnwf6kJBeC7h9f36ARWTnR1zoXhhSAR8JKLpi1cDaUGGNgAUMBgk8CcDacHfCfUAv7Lgo",
  "key29": "552dnDDKrfiZjcYpCP83J2sGevLmASy7rB1tqb9j2uK1YELvZM6a1ugwAnXkCGAA3XBFmWTMePzHxy1faCJ3x1Kn",
  "key30": "sh9LrCwd14MWG8PGTbRQ9k3Wtqogwnsf6wBKBegUhCiAzFmxZrGL7Qke5DqizWyhsGizjr76SLEVz6kdF56Yzd1",
  "key31": "5vadNeNtfsWLAgMiXqK6MVGo6iHdxm5fXgUqadSgQUGVvYN8vL9FFEdu3pip1B87MV6xJqP8VgPo4CJAiwxSiANM",
  "key32": "Gxd5rmHngEvytSWXnDptq3ReJQzUm89fQ4cZZaMcqnZqLLmqrmmTfpmuCLP97AiQi2Ci8M7sQeoHDdfWCJfMSc3",
  "key33": "5dGrZrvpsycUo2AMmdjoivNvzA8HJrZDaUpwRHrqrb1L8es3rLQXJRGSvfVWVEQ1Km5JJ2qB8aDa94PVAojMb6RN",
  "key34": "5WcFfbt1nFkxCrrxD9EYmBA7C6omVTQfWBHPA3843KCC6rqxzDseViwKuf5Fny5QuLMsNQ39ep9VvKQVYT2k2yw5",
  "key35": "2sCCNfGYcTuivFaTiXcp7qdRiuH7Z8LsCyDhYXkr6C43Gh1JNT9pnpCqb14PzWojzuKC1GMV5g2ZQV7zyJCgaUKY",
  "key36": "UBd7AoUJbWVh12JymutXcnGwtaAkzkfj8G9dpw7SwYF63AcxSbHpa9z6TM9jsaX3rJqb4FbFd98yitHKDJNp6Jh"
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
