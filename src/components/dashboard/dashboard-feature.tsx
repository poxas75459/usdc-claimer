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
    "5kQHY4D5tVAQQSdLGMUdThQNrMynb97C8oKXgCDeTp6RoMCfDE2WKmtLGgq1VK4pvsh3VhUfZWtqhTK3J3vLHGR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33GgqFjikJwFwaQ92vwdXCeTuqSrw1TcDvAPLcX4JGzurG3mBY5myJYjeg8PxZoGmVo1oGiRZrqFurPvG9MDxHkn",
  "key1": "3Vdne5W6E24s461f6Bb6hPugprHvoE3fAuWoRcHv7wRaQNLQ1i2UcQ8uFFYyjrmzHqemSct2QBLr3gM6b5RyHdTd",
  "key2": "4WWFz7PEZChxPfFHGPMbHhxuuotCa1MnPeKkviHd9gMYUG9tb6gi9QgB5Kmjy274x16YoU5uMgiiJJPS3XsEJyUz",
  "key3": "4hnmZuGqhwQzquHsQTtSEEL1kBwYwgnZWaM7pC12DVWoTVBvLiAVANRuFLKBH9zrUzt7tCJobfUpsPQmih8qbDtu",
  "key4": "3dwp7ERmieJwecB585qyHKb5J89k2mzRJSKKDzG6GzY7cGu8cPLo1R1DafZuj2qeuRNvZNs1f1woJVR6xAoNZU8w",
  "key5": "3juxqLXkwNB9SWLtsEjKpLHG6fcCU7nZYPm7quoDeBbpjk8thsheKMjFFphZLwYSJkFoNicyMoi4YYePZJTqmsRs",
  "key6": "2uP18ntRBWHGH5PkAh3rJDG2d6Q6HiepJkUFo7NSVmoRvwuQ4V2zjZoJTcGLANKPXy1XTELZ7yA8YsLx4FrfVy4P",
  "key7": "4AfkU8L73Tx29qJfW7ksB5cmHpXzgf4JMb7zkPVLugk8ndsBvdYphGf2qXNssdssyCKoV7gSZfYk4jMZvp6M7DFK",
  "key8": "2vKWh3Da2V5DGFQnScCcDfqS1uuXFUNPRf69exNX6fq3peu5z1FWxnPY8Z6oz8MT3PCuvPSaNqKoo2imAtSc1Ao3",
  "key9": "2DzaFepuQURpztDqY7qtUSTBC5WshNdNMLAny86tWZhV87w8fa1uSENs4qNMuWy63ryDyKCDUt6qREhufZe8mZfr",
  "key10": "3QFAAyQyQmrx74n1zxAGKvi2qNERYgH2w2u98wMbFvUiFkMcNREp99ACBcjCsVRe3SrUE2p2yYjZ7Dqgq9VdyoS9",
  "key11": "5sAqR1KapASHQNPCi9YyQqa5ms38k3tEUcpSgHsuwzMcsBwe8EJGqgexnHbYqVnkvJ5QVMNJRRSjZqfcktRgrm1B",
  "key12": "2wuRUXR5gz5kYc2F5ur8qvh8DxjzcUVPxRBjJ2TMUwSv9jXPWZptrDBt7rHYGtvd76noQogD3ZQTRzC7p98g1Bic",
  "key13": "1vK8kxoZrTUBp4TAUPPqq1ZTfdFB2VLojJzCfCDkGJJFaumqdVzZFTh6kGXx8JbH3ahJ6ggmh4Dzn4YeMrgXaPo",
  "key14": "LR7VeqyG7Y76e8nWuyoecpGYMpZbj9N2u6TkvVodH6J9DwiUpQ9HP3sH1DC7TVyzuC2Rz9vGQyaue9DJxrDCfd5",
  "key15": "HRmyVditqDg7cySGoFiWUeqVBEKHux1MzPdmqvQGuB8Mh8kRNcuFJVh4PWa5moTKyzMeQ3tV5L7BArPuJsjHEiA",
  "key16": "2rXhmJLeKe2sZATw9b2YpHi192PSRX1TJ3yqfavy8VDhpDcTRpv6tKo8UwybueTWZvtMnX3Gr79YJr13RJuw4mf2",
  "key17": "WWhmQtyjuumFuFENaeEpMiFn2AsVYk2YZCdXw9G1BwJxdSUoisoz8fBdHJGBjFuBqQZHPiWJiFYcNkLzqcMSNte",
  "key18": "5deVoeTrcZbUxnuaHohbMF7RhNk1vXK6VFJMANZvzvSTRTYoECTNXEBx4WWaEHWQM8HfgtQ3VwH4qBDcjmVxo11Y",
  "key19": "2beqiqcvZwykB7KYhXm3dBim5MmVwmzh2z8tQZwQYhibuCAL8Zpx5F8fcwHj7F1DMuRPY3hRZKCUCyiYoqL8sUue",
  "key20": "2DHrTsmhKckVeAWe1jB8eesLzwgqC44V7aU8U3qT4me1T8WjfgbeYE4EjgyqVSWuqx1T1rmrSkJbmcDPxqqmRV9V",
  "key21": "4aY2uz5HPBT1KA2b6t6hgvmVyCr26QDLzw8aKme21ioPn3t9zzn9bPnskCCBayrCkUqMbzUHeVMxzTqeG6tKBafw",
  "key22": "4MC9j4PTuna4LZ1THDuoXMh6CJDDFPVkAqqEYmKvfyf21sFpPjGcUEZsL5UMHPMeL1tL3hawkjWW5NbYaPU77LPL",
  "key23": "5ApBrmkjKC9uwp5gehBDQxMNnUyPTWryv981Jxz8hbTsuV9jMXHVcs8HNjCzGmtsEbm5gYmJJot8472Btr84murC",
  "key24": "432bwMjhonR3FqpmeH4fsZehmfLDtZBHRmgzFvALuKQh5BqM9yjBdQNMq53UeCAQgN3ojMV9TSUVq6Hm6DyTL4ws",
  "key25": "28fChL69jbWMt9FfjXwTz88UjNEbVYVLHZJ9vgWi4DZXHVMrDFVFNjBDcvPXSMeBNswzmJdMiV5dphEdv991JP2u",
  "key26": "3Awja8yQEW17UYgGn7199vnYYSJdGGe9zf38BKzWggErnFXtddd5sgv3gBgog6v4yjg1ZGQu6XwhqrvhK5XpjcqM",
  "key27": "2HfKxsgbJUeNxjSYWbW9nPwNcYQ3TYq2BsRTAMhtmN68RjMcohqeDDnmCkNETjrk3Y9DQqBRnFrZKefEKQS786ZT",
  "key28": "49tcoe8DHK4dLMP5VKVYRVFgJQZrroPKzGdNDZaomPRmZDV9wYu2eUcVTjFZxgDSaceQxeDd3Xcv4bpN1QCDN9Xb",
  "key29": "DhTisCdf8gnxdezSDoNCFRfNdpbJTD5qoPHacxHmPD3aGEFazfgef4FZ8vCvcNYX29QQxtS79c7S8RuhkkXpr9r"
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
