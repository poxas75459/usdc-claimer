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
    "2LrGF3khcekEJWmafdMy4kdWyjiRLC9bvE3K1V1MDeh7RdKqx4oShmQYzGU5sNdtzE4WcWnR1o99SL4fB3nh7KRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CV4yjMK5jZkoP1JVkddEwWVPsPAa3PeLmRq2TLiDXm8xfGAAd9bpZML8FXcaPXj65Bh5oGppJ85k8tXKf1oVyYU",
  "key1": "5iykmxzq7xAKaXxHDfV8PApgs5Zr54d5aUS7yiMZ1j3UrV6fBEKffLURxFvN7o18XdPJ9UhriPJ5x2RpB5npF6pG",
  "key2": "4ArgaGuuPfq4T5SnE5MVhF6P4SkcTuB9rBSeeR4QtV5rxCtSBiBguxGVpgGLYmWKZHVftX686NeWcG2Xoh1Nj9r7",
  "key3": "zKa6m5GLwb8EENURC5PV3gMRo3on24sN78oo4XeagRPGGioobyBrgpJ3KGWd8C7RerUxvHE6jqM1HymnjJoqrzT",
  "key4": "cegrJqFYhvJMH3jUrpHLpML9ALqompK21c2raxuuzWEaN83CmeX4nGf7kya6mA5Jp45sm6BpHzKhKEBF2YsPuWY",
  "key5": "5gc4jtKpnGdMNBVKXfj89uEBoBzbEwv7P3QGX4wnsLmSEKnSzorrPe7R3U8c5TAZVzQReqeREYd3w6cZpvkNJ4Kx",
  "key6": "5MVJWsPk8EtRTSyrMhwGQ5PYeE9NLXts1MRHpfCcL4sNNhVUzU86rXcZ3oXu49MdvkdoC1UqKeYjtQruNygBSTxg",
  "key7": "3HkbxWPoPWcDRPaPzRhdCCpHbCpq3Tyrev5EZbbwq1RtvoopywqAgpuh6mFBftwZHmFPj1T3FAu7Ccomb269BLLd",
  "key8": "61ToUvUHzN7Bdinf4FNKaTUuQwXwZrnX31m3UavX2KsGvxzqJxPtzDEMbqbxXZ97AZqcG9b5Q1xWN7YB2eejZuZF",
  "key9": "5cbzRjzvyqBpdbX8RmVpDxyq2e5fJkSYPMo9JvLk9PJPbGgsVk1u3m6znCE5dFrEtvaPSMWFzaBUT2v4VyQD71pC",
  "key10": "mSngnWUcASdBjaB2WYqfa8j4EbaAJEVerx72c8K9ZknDxEiHcaViJoJsuHncy5MNkZxGNQ4QjP6hnkwnrVWFMG2",
  "key11": "3D3rZaJGh2giqXNpxDxJPVNGwb1JTZBJx5bvuSjepE9w2cxx12tjmdXrAEf799YqFd2ijRpUKBwuV3MMg5ppCdqd",
  "key12": "2FYxjxrQWTSc7Gf2MS7wAfa1to1WegHh9VPMjDDzgP9ph3zf96amzP7gBJSovxH5H7gAci1uMf5yRBxs2jrckNKu",
  "key13": "3F75emzmgmG7RUxrdQg1Fypqn5NdNKWgGT7GLkoj4Tac61dUHQvWiscApV6QVTZeDrNynF9SfKySKqsWQTFsky2B",
  "key14": "2nTN6KhBGp6rVrJmtEWqo46XMiRiud7ShudgfwtGgMXA5FQKggMBekGV14ecgjzsEtuVxM5DKjAJnSeEVet921Fs",
  "key15": "4TXx4zSQVFfHwn7sR3nhRQSVt7xoDfa9CFNM4Js5F17oNwG3dR9w7MRxghbQ3P6SE8axJ2ogg7btER1hvZRvwc4L",
  "key16": "2mH4wythaCwuPGPnHSrRPFr689b1vFMoqmRjgJSRojVgDHnuEJ9nCjLkU9GeQ4io9yxA1tPcc6b7HcJVVb7WwUm4",
  "key17": "3Foc6RexU8fDab8AnQg2JNn24xwV2DfEV81vg9V7m7VrJ6RBsfoYJmY1NuEkDccL7xyXtYBtkia8VcuGkLguiEKq",
  "key18": "kESJndF8i9MSB4GEED6tXuWeSL8EAHG9cWNiSur3aPLVyXnREMh9TPqoAe5fKhfbXJFrV19J1JYayBrjhE46qNV",
  "key19": "5G9QhHoMPzfW1Q1PFLSeHSKgewfN7f6STpoj8o76JcxSdy8FWzPqPfcDfLXaB5EKUYWwiXNEJ54QNuffR226U3rZ",
  "key20": "54wcbdcE4WQjUGbfpv7rHMyXaG54HkDJXCGaRH9qDzQdi8XKTMyKeetmVRKZFTgjWvNui3Hhqr1CMWjv4ziqmcBt",
  "key21": "2mvoYe3Hd7WxYdZqp8x2YoAdXfTtzt7BeXH6pESRZ8eNHRyyfD5Kjd4P2aKMWiWnbjbiLwKY8wrcCWH5dyzDskGU",
  "key22": "56pBF33iogH1wLfhsZFNr1VuTW1CZb5C4KKTBwAHy7i9zh7DQvBsmDaQQEPgrhzhpu2X1AyCqoGBYggA89g2VpFA",
  "key23": "xJ2fq5naAnWw9as4PynF7QxQBZtcxNPmnukjGtoNCv3iqnp7fuKVWpoDyc5WmJMV7rZSkpVChSxVJ7vxSSZKGmJ",
  "key24": "2v7RvYrpu2uP47YB3eGSn6Dmf5TniCKuHxUUQHRBW6NwQYJGoo6p128MzHtGhFi6QQ3FBuULZqCiSj57Q8BCJAAj",
  "key25": "3BFGBNP1CLKmSrYDkcs85wRLRuZoKWkcpvm6ac28SoHuB4ASLJQj9RiQJTzC4vvQJL1RvYay2T5E9DtrW8fBSTXy",
  "key26": "4vpxrzJyhruqqEhFrG8BPQMqckH2oBZ8QW8984MBRvKx9HQJNhQnSfKc8ZmVog1yrwYQJYqpiLDkJBhw73iazw6Q",
  "key27": "4hU4u6m82H1bjNKKQD31X8c3JDBoxJrC7xfNCiQcu3fUgrbwUNZAWdqhhC1MjLZGHV5uUCAQ911jogJUafhw9cCs",
  "key28": "47wyEhCZJXYxmxbm8fHnDABhn6iQj6dEAJ257wydh4VoRVjGncbxHbhzZPtvfuYU8hg3YEMDVNYiyATVkNdM3ZDd",
  "key29": "5J6ZNvLcufJ3aJu5bu5eoXj1jCidhxedHAX8ehc69LRH4LAwejYX47Aae5ZvRay2XvK13xPaTSBAKR5yt77MBEKm",
  "key30": "4nehpWyam9NjqUc18YEaK5KLHeqqZDtdaVa6eDvVq1yufzKVLMbqxU4kv83jUvmEAEuQn5MeuTzB9K1pbtucZXQw",
  "key31": "5DqfVn5YsEMBUkuafaaorXFkR1NWy4tjHDkxyyyJpHcm4xvf3M2foGEcJDrfECPvtpgQDtP3gtKaKd7QuhyRZGXf",
  "key32": "2QsETponFY5ruWmoD2QiQNSMZ4NZyiuQBi7rGkXgkRZbzUbuh7LGpXY5JzvQpZ8K6vS8EySrwr5HGtF1M4wPmy4p",
  "key33": "puQi1UPPnW13DRbEo3jX8rAro8siB1WJhy4PjkLuAEaNSQYDfomG2LMebejF2SWYfhJr3ax2JR83yePZ4HSqBr5",
  "key34": "5e2cVQU2zDVWaKWY61T36w8zXVC528MXxacC5ybapX9xNLhujnZ2UPFDN5iMTXLGV9MzHjb3y9R5xd3Zb5Jb2uat",
  "key35": "41Kw4fVHZd3xnZyyPzFdhSj3naV5NhRVNHRLNGQu7Wz44RhwogiAhdZvYWEeGhLekhVa4P2781j3BUYUJ5TowojP",
  "key36": "RxvprQHp26m7cyezixcHdbaVGkXrCSVuGCjbjyLg6DJfnyximojtQJtnhj1j9Wek4Q37JuXeSDPELKmsEqD2evg",
  "key37": "2Z1X1coLJiXVnRLf2yaCYPjsxTFJfgBd3dVeXPNmqu1Gs1e8zamz8nPnsVLLEqAkY1GVcauHT5XruFRufiN3Lknn",
  "key38": "5GrFqnJ5TGBt4WfSZrQFoSQc7W6QA3UdgpZskDPXdjUKbsA7btz2fPqi7w2YnVEXy13SoQFmjonU3rwDTkhmuZkK",
  "key39": "RA679NjPLmggordpvGSouTXgozZpRWqbeJfibDDJLZKed6aTYYSFuKsjkbKtkUk7FCLuCPTkDB6hjiJTQYb6pF8",
  "key40": "5nkF1phKFVPcN5KQE9FNW5A7EbdyNYTGTjUKAyvZMH9KKMvYSRM3ti8kLiqCjiY8XEWBxSW5BsdJB5xHFpwaKFq",
  "key41": "2Eo9HSsvvJQptVhAJeT4Xapk18v5P1LVmfrLEKKu9unDZ849TJNf7CqpVn37SsasgW5eBrSBU931ZPzzNJ6fKLT5",
  "key42": "2tXPcR8pBxdsJxkoy7gPNAjGqoBsBgY1c89d1SaM2hBDJXe7LPuMkUgBUuiUHwKXcKsAoMAvoXsMLXxZPKBpJM8D",
  "key43": "2sfMGNXjmjreWSAZejEjsgAWaSP8cRuVZAH9cam4XQMNeXyAJtCKoR5Wny9byc6LTWLPC1ajbLaBmhoVR3NkLXuY",
  "key44": "7NK75E6RAKfxvRQvCEQ95YtHH9MoBMqXkg2PaPJ3oVRvGmA2Hoe2RqEzvngCsW982K44nkwKWK4ZsykTnhuq1u5",
  "key45": "4Cvc2AtvKR7KyqbX2dPGHHWS5PAPx2jxCVTKQ3PzsFRcszjEbN6L7pYraGj6KdsyWoG4LzDN59Ge9HSr1kdN69SP",
  "key46": "3kbBRSk5TUJWpR6daefnM5dabxTvKZT1wmhFxH9SNi2bqewAENANXGwSaGMLm1uLL6xoxxMTcNfNE3FjXJ8Yscun",
  "key47": "Pd57Li9SoecVnjM25AdEbfqNFqM7ohR4HoGJmwSyrvnuCacDZJ771YFUHxPxCSqTuEsNWfJpoo3mmKXzKYWZVJh",
  "key48": "62Zk8ioywFR1TDQR3tVDGU91TfswZ5xnpssDYMBnM61soVZiPHWSDpQeRbXQSh15SEoDHy84jqzMEBnDqVASREr7"
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
