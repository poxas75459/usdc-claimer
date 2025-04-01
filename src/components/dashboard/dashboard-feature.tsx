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
    "27npsKb2c2EZ7abGELucqZaLppeanpxWdbUmXxapvwbkqiJUiQEMexi4YooRvvcyc6Un1rZAoJ2b3fRDZBXYKVmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cD92ZEPAFxgeSuZfigvWDDn3cfRY45RsD4Xn16jz5u5fQCAjDCxQqEDYjddiwQ7QPc2SXMBj84Kb1pHGvWtdCgf",
  "key1": "5so8jjHRMD4PxdacyurXx2fgKGBxtH9zU9qWeN7DL6KP2Qb7oRwtgcQezTBGDQB7Lt8LvafEP64A1Bmc3GxLpSQW",
  "key2": "3JyL9GxXLsArPupF6Rr3wsmtn1gy5Ng1ZMV1oTrJCoTJL5Eoqzgih4V7Mit5nstyMKTJNFWtdwrcTjssz76v76uM",
  "key3": "2QAeqM6K5Xo6K6b5Qobe4SNfLsotdvnA3A4P7DcJkPJegvUkPoCR2NtZQXVWh8GJHMfFzSJBAZzNnSGipBizKe7a",
  "key4": "xdmn4hSEjsA7m32SSifBuBabCeBeTnBkuXdYdZqekzM9X3NZGhbS3CfndRJD5zws9ECQUzKqnk6We5JUU15wWZS",
  "key5": "3rtY7Cz8kVzN6wSvouQrwRNU5YtLKiA4VGsiDsBkkpQM6R7CUd4rcpjRPUjzA2LASfnH5UJsSc79qmJSf9v2dhCK",
  "key6": "5EWGuZj3ZJ9Pi4R9J4vcDKF1i9zUeHEuUJXS3VEKDeP4a8EHE6Boj1br8LHUGThTCVHx5rAJVnJDTULabN3EnyWw",
  "key7": "4TZbyjJfN9cc8hukxYo7uY66i1MVyqrFcxFB3VpABVfSePWbH8L7pXdGWGppxAcg6ioWCTSgGeWAC5tzoXuSAbvC",
  "key8": "miwkWQsippNAJccwvwtZS6VUvWVekfVQRBGzkWrA1wRvK2bRzgbjAwtZZmJcDBQPLxQrRriC2bWyS4Q4LoqijCG",
  "key9": "cbYcGZXZPc8iLfURqMcwcuCD7EBa66NAd7PD1fz51VurEVeqSZvZNzKbEMr6MFdbEdyibR7suP7bjERYPnTDke1",
  "key10": "4o1dCyrXMQDQSwdym1aSwNT7cxfM2AJvb13y4S8QVy5pxg2iMg1fhjsr7RVHE4RcqZt3coL8goTLn3yhgXbdEQcZ",
  "key11": "5skXNWSk2LYY7cAu9gWKJknBggghoCcVCKNvukT1CH16k1oHNXzB2L2MzV4MJjB9pf3bJ1BhKZSgfQTGGYoVjHMW",
  "key12": "2NG2dNJmawULsoiAe95m1pyXVxgMk2oVx3FsN1nAJkQw3TU35ic4WFncGyuKGgTHpdZ1V98UthKDLRa6Mnc8Rrt4",
  "key13": "PTob6HLmFLq3SmXkZnG5JRZUXr8ibzDcFMVsD94k2oAPgZPPruG8kuB9TJNSDczNDSn89JQKmoKjDqY1SCA9XjG",
  "key14": "3k4szMYfD9QgPHycr8sC1nmV57wGEMgKGvW6RYfvDS1ggkWAqT4a6reGYcdEUE2fAtzcJvXSKHG4tQnY4BES3y4G",
  "key15": "4dJKKtLGZkpE199Kgy7uV68eEJNEB9s1kPAznwBuxnucGrP9hM4Uq2v93pLuBxReQoe8xeD5PL6L7y4KkXinHcdB",
  "key16": "5dUFUGixSb65HyXbz98CT1iu4mD3GeVZVE5fbdQNHkAwvyWoJ1YHuewqrYWMgbrQP6hszpsejKtEDLwcKJUh4owW",
  "key17": "4nFinbnUmBwd1oCQF75qYaHahR3FRh1xnY78QbewSqTz24f6zpU4PJXqKWR1pHMnTo85bRvCBU5NwujLFU5Lo1XE",
  "key18": "2Tgordti8E1HsSXqZQc3pfz3cCYMXnjTsLt9frxvuLnCsKyXURKUZxwLCp7XaybZKvvbqZCrMVthGZZe7S5uhAvN",
  "key19": "3LGA4GYq5RMSVoRRGLmDDH752pgGHSvNCBzuyachbHSKZWSeXkJc89Rc7uJ1f5pyftCXfaYPQGm6RbSAFW2Rx7Q1",
  "key20": "4ce9Z8nSjbNCZnwbEykP2sfVsXUmYmXQfRVkyUSnCPT59TwFuYdUJ93TrhfDeVoryw4degT9E19eoeA3G9aEHePU",
  "key21": "2PXkU1tPPXgtQPUmVCrGrUxUF1yPoFhkkrxQYARSqeFUcfmE4PewzNRrHKQpDoQfBDZJyuefqBcggdFskCdYgnoE",
  "key22": "2nx9z1bADDEGbH14XmFG4UGBJaPwf8B1UBb54U6jLrhSg3Ckx38EkBkYSxnMuX7orQtuhjyA7726vynkbL32UF2z",
  "key23": "2E65rCxwCh7osrFAdNYgvM7PVxL6wyCwjyFr4iwUevRAm7nCCCemfUFKXJ8DCveZd41JmZGCnxvV7Y6PHoJeE5ay",
  "key24": "2LBA2fYUnWBsEEfYLQroVhsuiQteaDTn9H6qJ1QM41ZNk4SSkEkmkyGcKqE7AtK7ENBe6NuwNNbwgykpdEn8LC7s",
  "key25": "4MTWAhnS6HokawdkMM88djaZEbEZSDKLkEpTx2ASo43ApTLbtKTmdMirb4r48guy8jRCwvzt6ZmJSHqcCXgCWeb",
  "key26": "4QH8Pa2GRfodbNY1J85ZB7LkHo6XXfo1tRxGmGUbq3pZehLv3f1sQFGxNQynWvfXkg15aAcXxjmb61VtUAPXNsq2",
  "key27": "28jWzyBoAaaaHE4AJVzi645p2G7z2uiqRQx1jHbuaZbjSEkyEWYzS57ghaP3A8MCbEg73KvBcM4vwvVqXxkepLhV",
  "key28": "2Fymi5q5Koab7VzbmLE67ffku4dQmLiPf2Y9y9a24UhcXfZQPmWYAGhZerpoADVDDdjNzB9MkqthzZBy6BLwf8Qj",
  "key29": "2zrsb96TizaY9P4JeF76G6qyC2UC3NeBZ7XjeB2nszqn7qmXb9k1gAVty6r3wrw4rKnoTKfDMbPQS8ch3tqKSwSz",
  "key30": "5Lz2DtJRikz9v2bVfgE44AS4fMeozv65cpALorC1cG1Hc6ayuhvQWUy1mCPgP5TD7jPW8ix3ZrSa8RnXgibyrmY2",
  "key31": "4RSt71bttEf7m3tdM9JZCt62DmoYDc1a1un2whmFCcqe5WzgLWJjeKMBHsbiCXM3ZNQv6fCnK6QRjXEPQyf2YhiU",
  "key32": "4K6MCwbH3rU84rdJxanVwrUPhSvUKEHEMpRHxjHZeNDNXGjkPLDHBQoCG675eJ7E2WZExdNnMMreYKqifURfu8mC",
  "key33": "2LZe5YceU4AzZNx1N7heDgFnuf1xB12NmbEu72JRUQH66MjWxH2E9S8PTm1zCm7e4RGKzv5ugb4xMU1bNA7C9xGR",
  "key34": "28HgcNmA4gSUUjU8oBespnt6HY8mh2eLq1F2aoMaTVj6RUzYhqbL3VMgXyYMZytgGr2mU3vwp7cjfcKkb2P3Mzk1",
  "key35": "4h11XQjmWYB97isiPHG1VH4skrCitLbF28QEbkSMFSeJgHxdqi5SiZ17Yw1qxDENy7kfzATogyh4aSRBoseVkRgy",
  "key36": "4SJRNVQwQm9rzBK4tjJGjnwUswPF6JrFDY9nFraeM7fCD9pmJu4q4KESe5HoKFqp1ua51J7ZJysAtHd7Az4MsWNP",
  "key37": "5V64U2kRdXgbSjcnLkkWoLeFu7qiE7vHqDnmfkQmqtP8k6NwJ68RmJfAfZdEqYTK8AG4tC3FCyNwREoNgxeRSRVD"
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
