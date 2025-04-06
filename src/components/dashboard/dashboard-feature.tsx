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
    "8khHUyZhXktHgFoNSB5YLaNHwCoArbnUebULpqMVaU39eoU6snB5Gc17eUdRdN2MFwg1W9s2JrFvfEfvdtSqHTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PUn4hLXEpC6Lo7AVqVcK96qe4sKytrrYRuXV5S23qAHHiuNVqd2fjGY1BNRSXJRfUTquWk2ku778QFJHvAX2Mqi",
  "key1": "2VrYwuDAqfNGVb7gD4Vaei98Tcrd4aaxXYFdLJxSnQmBjFjgfRfRnaKuPKZAiyjLpCCJX4oHTVVw4neBkF2Mva6E",
  "key2": "5CVFwe2Mhj424GPp1DSFrphcJsAyeZqo6c4kuYwimcyQZTcWKcvBBvsVA8A2hX8Zk8eLvh2X4stcZefDjyjHzc1Y",
  "key3": "2JmLJrx7dr2ZAaDNvnthsuHwdFHMFSVkiYFSSdQHWQmAkf46ub7eZhgMKaGyp2GdJqLKtKhqi3jvgNcco4zwmUn9",
  "key4": "2LxNzMM7i4sHyjSTtUBiMemCZ4CAP6kq6CS4oo2ddTjc3B88Qdq8EnCicLoJTNF4vCpg1BMMwFh2gse6j6P5AKvk",
  "key5": "4A9UmK6SHrYwLgea87sjqr4oHvx8LhUNZbxBQWhcS7VeZE5rBgNS325anPAWjhTLEdeT3vzFb7SK4gxWYgFiFXRf",
  "key6": "4ReYfixHAA2gQJVrzBNA5FgXYzk1Bo7GPzWKGrV61PtfAszHh6iass7rcoHtNNCMs2umukoEkrfQpbtXGxg6tS8S",
  "key7": "4gpeQHi9MQ4BtJjwEPRpVLEDKsL5ddPTPa5q2kA8fqjTGS7BTU2AHjCyMzvmT4U5caYhzVoUWhE9nnrhQmfTgxN4",
  "key8": "5w1KdrRwsgSJvNcbfvTvD8PtCbGyiyzaQzNoeSdH1LPFjYdN7Ebfg94dbESJCMsy1Ws6AXKcixSMWosBB8VFtBgD",
  "key9": "BE3TMgpcXSHUG5uCyA75KKAA3Uezx7VMPFFRkTfBWsPsA3iGJWJGXkkULESrzNNAB5vRrxpPF1o55Q6vWvboa6Q",
  "key10": "4z6bLcdeetSpiFe5Vod6kQ8w9sWxgHHazBCUnmhwRfGNLC3FJUsUdRX5C4x762bCJZuRs4rs6QVQveCpNjFaRCKL",
  "key11": "25kK9ECvMuPDxLGvVZSbfUQDwMHoGojrzEjtGbukxCnQvpoJJ3Gm8KLDUvSSmKe3MKwcjksQ3GWjXKu6cx847LjD",
  "key12": "3mY22vuL9Ae5BwzS1mBnVD7n6i5hpKKPGF7Z2Yq4UvqwMd4Qn88TRyLNb9nd79Nx3yHSzdJemZt4NTNFwdkVvxov",
  "key13": "5PZu1qEupcU2QtWJfsjMVFX2r32fW54VVUPpEZgiX9HCga2ogFff7FeEG87RU2pjLCAnETdteix2VJy4474uybNm",
  "key14": "2nPtZufjU9XwpbfSDMQGTMzVQEM63DE3RRBSSgytByHYriQjuMwJd389hHqriBdsvcKkxuijc5KXqmk2NyZD4meL",
  "key15": "4SYccfJcUuE2ByEesbKK1MzG6DU97urQc7bakKGyRscygyhLxXn9zQifFD3Z4ojLSAvh5D3mDrHfXfe5h7kSoYDq",
  "key16": "WytdWbhyRVLRkMNW3VBkeKiqshKyFmyVuzcMVix8kU4uMhKpECcPzTp1CQtu118yFFkGCmL3qGXdCsuCXu5fDeC",
  "key17": "5BdtBMur1Br7gK7SeadFA1hsFsokPPA8CcVUmwAF9vdPx1WwU3jhu9f6r2hNMQbZH7Kk6qgHWPmkvhKnQHAyoXWg",
  "key18": "4vLYyrjZH51nMM9VUkQh7uHrijh8NqbjcZdB9BChEGou5s5S91MXdq3BPsBEK8TB2TP3YpwgFBRqkHEeh6wCv1fm",
  "key19": "5PSwyLwzYtBEu86MeCshrsRbwRR26d4W6Diov1cBmVSX8Svpth5arqiTt2jLV9pcvYxum4uHhDBitzA1W5sfvq6y",
  "key20": "2xp7i8mnpLwQfWcjgTa12SGcbWkxCswAekSx9yotiiciNSfTUsy8SomHwbcHBJTQSwKTGfgnLadSgywgPZ29A3v2",
  "key21": "318xC7JUzmmeLLua6QaiPvSJfE8BxdLbDRa99T2XzErLk7HFrrP46Ry4S1JAfRJwrkMqegdJKv4T5fZ6Gt54QxZg",
  "key22": "4PVUs9N9Ev1cQZQLkBmzLv5se4aFYVqR24YNoEy38GwRCi4AZ7McqiBp5ugNG9a8tfbFrxuYx8ZxP2E7JdXfSNSF",
  "key23": "2CJc4vwizdo93w93eUAbAgjU8BQgZJERPaaqCbqNwaJXxDbFax7NWZq2TrD26jnqfNUw8jPjsBogrkfPy94P8gv",
  "key24": "km3PAHHbixthmHFP8fCud5d4KEaMbH6nYqDySyjMY9JXM1tbW4Lt1cxAsFzvEPbWNr22n8wPNRj53WhKE8uUmCa",
  "key25": "2K7rC2XQqzEqJLiwncfb93Da6Ks5PLB31SCw1Hw7VpMfNQngoMYhk1eWBpSoVkQDx9YwMoW2zfc7t6QZhqdtVq7y",
  "key26": "5naRkxoVqSPXQfcoxXCz33Bm2rf6LAgt7Uth3V9Yehg3BqCuwkqptuJdAZasNQeJjKir3t3t3HSkkE3EpbZ3rdch",
  "key27": "2kPpfETkRUbDBDELpnUozexjtrjLUBEhHGmTigNaUWSyjDRqGyKUonjbh9Bt8SNfdSM5sqBWDZDdpZ2AzjZCYBiG",
  "key28": "3kt8NFbymqyviQ7Ro4axJDaybHY4FYR9i9jFnP6VxiNDqWMxnW6q78CqKgyWsEmXVb7sorehUghqFMGQXJj6toUh",
  "key29": "3JhhwoMDoUfcZ7w6mHrGuufgzxtQWFZbZedKvMyMdcpziLgzwvp3xYyctRis1ehUNyJyXVbtECWmwz47zxQTGEKt",
  "key30": "3QGPemPchfpbZJgwJBiYJGxWjFBPcMGWxCHoR3BVojBW25JudPFkqRm6NaMidCzib3GuR8CHQcU3yk9Hcbx7oAZf",
  "key31": "52fE7X5Au4gCxN2d9UVSViiKaxZHQs2J1WnUtjbXQ4iev3975Jhj25NcUiVubwJEf7xMoqxmmpG3qqQQpE4A7XKX",
  "key32": "5GLopaszwLUVQBFE3fSd3P266j4EUnZaturyzaTruS6icAc9e3A2QpWA2Mq7hEAffWCG6GCyv5YKkvHphxzwedFG",
  "key33": "3phSiwsu7c8MYgGwAZC8XmbNGVk5rNjasTp1tRtU4XaVbH5Th83eBB6iiR2kUztTPQtTNTdft3xMuf6CZGYT2SbP",
  "key34": "4dzWK37PTys8LYhWE15ugSrYeUwf5FdfnTiw8STdfqdqQdu9Ks8FyL5qBUziUAHcZEmpmeUVph3EayfCTj5Lm4tZ",
  "key35": "5AXr2rC9vVGKAkc6QyAzhVDwESnBRXDFKDhpHeXbQWjVda4W1C5SWHKgZdHHKHQDaaXaj9AUCbM6yV5gWXaBTqNV",
  "key36": "2fGq5CXVg5VPvyMYx5H6zTfgJuunp5eb2KLqFaK4wi5L3KCZjosdKMfE7hAXBii57QZ8oJhKo99xdxzd42YLe84",
  "key37": "4V5qC8mSPk35TiDr4s9NVHGVMuG7BJ8HFbJZpE5kTRPP97tP5UroRoymReWYViV4cmRK9sEaW7D5sbBUPSpBM2b",
  "key38": "4KEWQQbEczcHPaXnQctwKjBDL7BhmhUS3c6Bb3RCxK3A7i86GW4NjkrR2V4aygVuT6hPrp5ve6LcNsxFtnLGsH6",
  "key39": "3AJDCw3BkeM6cAvzzxWtQsuNyj6r39aBCJiPiXbVdWD998jQ2AhSb2YYeam99fyHzF7KCagT9dttytCtWSJedjPd",
  "key40": "35ebXsrgSSa5f88ggRf7MvnwCWRpFrXL7hqxDxB2b7PFaqyDvvCYJZNbapi4eJL1AM2tRX1CcJH5DsrKP8W9oDi",
  "key41": "5WGo3DJUpGDLqnDAHnQ3uXBh3cskMQYykZzTWQv7V91eDShfmG9yx9yMwEm5Fu4MNaCCfjcxqBFy3yH5W13PSzBh",
  "key42": "zeoPFMFRWZ6Lbk1bcK1so1nF4Xj9sAunuxtpbdU6rka47dkTdocZcfZ2ndXPPWFaZiMei3u7VEPcwCRBHY6MXUg",
  "key43": "RUqvr3u6GJFHDzxwKS1qvqpHVJj1N6rwt1A3jjcZ3eFQoAyE5hQUGgisgiA7bNozU7DeSVtTAC4kei91ndmyTuS"
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
