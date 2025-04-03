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
    "67WnpSzJUz1cSUgovTANy5vdjhK6gmCpd39A4JNQNhoS9SZp1B5XwtzUC8ZX3fSGVd64gM2fzh4hjzzpQPTUN1xT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27mmfa6ETBZB4p3yk9x2m4JNUQbKR87Mx2WRm7cTVaBvdMZEVAq2JKNjz3GtdGBmcmgDr5yiMkYxmAjsGHEUGK4X",
  "key1": "Yt6xv3P4cEe9Hp7v2LL2VYf63CSzANcmWSA9yGQ43VUzftTwdGNXdqwn4B4FiSbH9XKQCYaoDTu3UZ4Mdq69q2w",
  "key2": "3Uoz1sk4sqnBNpvjEpaM1kwhM4fR67XNseTFm43tdnSMquAYCqSkrZ57YdDWqir3LpvSQBHeFayKBNaju9tjSBmW",
  "key3": "4tui8aKMcjq9qqdhUB2G2SX5j7fFh9bpDyGzHrwjwdequ5DvPiWCi3JZtbe6NNGYjAQAPFUCA2x23dZz9hYDsEdc",
  "key4": "3VEkU7TZqGTDNuonaGUWw1q6RWwm3WvJD4W3A4mJZ1EkPWYQyszbSYpoR4eioeiCz2L6qGZJuCtLPppyjnSyvRLV",
  "key5": "5sJ3HpXkWe1t1GMg4vN1j2FJSBuZEPRDKRgL3NDgHPcXYEt2UuXvCJdm9jHkj6DhuQWc9BWCCGCcseU2PwVEh5Ss",
  "key6": "5hKJQmXzptLNHaacQCVrm2pTNr9VF6mDz1m1ZGCJ5r2uVDV3McDu61HStn59cTRvFQ7YdDwb2VAEgC2dqn3c5s23",
  "key7": "4mbkXYyhnpJt6q7uStcRizzu8C48vhco6TY74H1NndhahUumBN2AueLncmYs99PGcn4tAkYbZJ6YEVfyoQiatmV5",
  "key8": "4oJSVkj7yjWHXuGpXJTS9tQNq85Pqt6J1qrSfDRfArkNPCXQ3bm5h5zwTj3b2VYow2itWP1Rxih6BVewgPJYSzfh",
  "key9": "3ur5jY8YHdSxfajEpPzwev8YNs2vbPJR7wBsgkcjWusuKQfe35SkNr1mJzYspdQXavjr7w62ZruGuTnBUMwPi9Yb",
  "key10": "4VBNLQh1F17B6xhTMbxy5xhCbS8dnpss7kFrn657MxTTXQa3JREzvLMtu7TdXHNtJ12dA5Kkh49a7L1QDTCNMng8",
  "key11": "C9vcah9YzBvgNuE17XLbPigAEKTAgwgCQey3VkGsRKqjBsvGayCpnQ9sQpJKuicpas3PHPBBXvQ7fcZ6dMxHkNp",
  "key12": "4XNMZVCSCUh8SNKxnbnhffQMz29nrCoLyhzQ4wk3KxGJAHCPVS3jvCbcQic8AmRcT5sm5E6FGZyJsGt9BSBTKKh6",
  "key13": "5NgycPMVhSA3xt5zb6z6gHz4wSHCm5p7zXaWi2U5zpzUZi6KwCNsrnndvF85siQW7WSq56Cx1mUAGDGKM3G6KWk5",
  "key14": "2j1S3XfvpACoredv1dcgjbdad1VbckXdUnGpz3K2Hihf6bsbcj67Skh2EsC9be43sZpV2JJxCdZ5S2mHqMiVKWxJ",
  "key15": "9a1cjVi6B73FR5eoAwEp5pFMCJ8mNcX9juAiXadcjZeUCcij7mQ9E3Fuqv2gY9UZZeU1zqQkRydp7SoweCWmNFh",
  "key16": "kTikmS6dWECDtybgTdDuZ8qUqrqN89zkCd2iXvYWLMQ9o7tGATsbJLJta8JLyGq8hJXhE5TDeWxAt9kQ8p44myR",
  "key17": "3u298BK2mR6wMxn3VEUMwWVjCsQiM2m8xrGahKz3514ymC5E2v5aVcqe8Up2QmnLj6jeWyYz7R7XmRTA4WAW3Fc7",
  "key18": "3JKRyU5pX1Cnz1tmiAFjFjZ3ERJXT1nQDt9zv2r8QVcxYrQXq9RQBuk4yQHzi2L23WnCejKvgMe9zRMFP5sV21D1",
  "key19": "2TGLcxzT43Non5Bov4mrVpuXPGe2qTsZ8J8ricd2keWj3vuZktBHC6PBbBptz7CkkFspRAtXeuygCJw2Tf1KhnmF",
  "key20": "2dxfwVTjTfwRAba7EUjwYXXP4KjWMmLiWYTCqMjaJuKunyE6tFZopVt6PJWfiAxVaHTxJFckX5EZdJhvVVpWftig",
  "key21": "28KAwsXpPGP75HE6r2W3RrhWpRwMrmYuzewSP6aA8pBWiZcyi1S6CC4CViV59d1RNdvouB9DfibC9sxKiTZTdFUb",
  "key22": "45MnMLVYdcUMuQZozm9mEKLtePzmtmR7kxRmwV9w9PPZUcLndAVaxZQVf2dQJQUKLg3TJVQSbkUS1fRR8Xd7vY7J",
  "key23": "krLcHm4dNPQV5BSFfiFFwv397ZatpZPNHgUSMSQnqYMUbuXA8QQZiajh79mBwbTm1utLpSgExFa9eYEigHWpo8q",
  "key24": "kYQgDYMMwoBVxQFBuErkPfo5pjGLJjbiKNC2e2KqNrr4D9fWp7QMPJiJZGBGGenUyDaJXEcPU2KFRFuXma95Tur",
  "key25": "3WiJkmPQxpy9ivZtauRTpesbfAHPL3PHkMtd8PofXneb2S2rZicYer4LcPP14KJDs4qbyDEMSs7ZajAEjKkVL2aa",
  "key26": "2MbDXjChEXQoFMtNJXn3oWmKnS1bcsvjSqEneY89rf18kkQo9dcZKMMS6qqJqtEJyHaV3RcPhdmzhyfoyH6ri8uD",
  "key27": "4kWrBSn7hkDyUQHw3ppSRdJtJFW7WadrTC8JxspJF8LqFfAdp54E8fKSTvxVSLnge7rwALKo4iWXS6MYu5Cx9snb",
  "key28": "2xKix8BBJqzAKVA1yS1HEUYVby4JyK5ZkBYQ8qCKBfvjyrSoR7ECFWBgU2SCwRoRXcZvTqXqtcGAq3St3mjkjS25",
  "key29": "2zMexqhNA8C1xh1MMofY8DNHiqeMnCaZkkHgrguxcqN8tcAoLK2d7SVaqmHH135mSJKC8hBV4mWmPEaRoeD1C1eN",
  "key30": "2VcneNYtP72yjyz4BwUQnwcj9mdfGAcfeFT2PnSsUmTDFqZwUMfFk5DgjK56iiHps7pqSshcaD6t1GtYMinxYr78",
  "key31": "4yRDEnpYLjV62wPFGY6Z8pPd3aafpr5B7wCHqzu4VLWPvCPpwgFBrBn3EX9GKH7Ew9e4x9PfnuRVceV2bYd3fWVq",
  "key32": "3w2f8SDZHYdAj2rNkcGGoagcCbCEXWDBqFG6dZGJaPHy21X5XPMRLEL9dv4DXfQ11taCawqeknB9AAtAZfNcuadU",
  "key33": "4FGC6J5ob3DiRWMwmoBUXyPbfhuBchwHZT7G27ip9q1vRJvVWFiUirZmH89jYQMsQVVDuzC2ZE2HaXduEHfwnsEy",
  "key34": "54RKUvTCN8NqJVMpHyenADPF5A9BESzG7knhVNi6y5yKr59VmmuYgbNC5Nu631uBMna2uEvq5zqyTfNh7bgdScQa",
  "key35": "2GPEQDyFm99ga1AVBBrRK6GEdWf5Xw86b9SQyLP4b56Ri3ZyeDPYbUD2s176rC7seJTJ6tz37u8e4Yb4bkFM78Az",
  "key36": "Ka4rJYdxdBvMystdyaVoTshwitj5qHZYrFnRdd4uCAnXmHCqrJE7Fy3QQrtRAwo4rsPi61RhYrSPL1bh7umGZZZ"
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
