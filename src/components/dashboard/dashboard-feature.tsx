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
    "4hKhf8DvAaw32wEcfSZUPCaSuSatJDe7TjrCtF2qjauJ3z5abFWWRd5zGEV3LFJf57LBkJXW2Ch9LctjoPr2bmQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NCD64HFrsxqKQ2r8Tccn94oKwEcAj9YGpUpukYzc7ZRSxLRY1aWR4zngneobXmAaiCVGyXTc27yS6S5C9PCkLyH",
  "key1": "2P5kFjqdfnnWpyEa31QTXwLMRJscaC3N7kddADV2GCZ9zJchzvpEMer9DV7r2oGUw6m9jY96BZCbarpRYJ4hpW9W",
  "key2": "3SZovMBo2YUGsUc7J3ZhqUNbS8ed4zzk5nE7FZsevA8zgK1hqrQm8cEQRMwfTd1Q41Rt1QB6ZjHUoVv3dzz2vGRb",
  "key3": "32CNwGF7YGYfTTEoUmqA9A3z3NHxxPy37DTXDZ44XLWERAqainx7g55z1bbBmeqdQehPM1jJm7c1P2gLjnN2Wsnb",
  "key4": "LJJ6TCk15qzVLA3Zo5QsAryYkin5vGyF3m75PNijsinvXep7Mtm1byKz8NWZXQugXpSPbSsbX2LzM9xupswgmVA",
  "key5": "2ND9T3ADAjhkSDieeAN7a4UpARthgnB5BJfJTsuAvcchhQCfByaMSLkkUds6q1hryY71W2t8pBDz8WzpTZsWtcuR",
  "key6": "2KVtk3Q9E3wxt7PjevBScbic2KRGttWLFRceoRm7YFz4oGDnUuMXr2o8byrqX3voJVh9YqgofKkRqjdjaPU5dxgm",
  "key7": "2nmWT8e6jMgnrQeuT288QQaArcbHxuTWoB1SeN3gYqv9CcNALkeSW6DjGiACiUsxnYXJvAvq73gEffEnmHaMpLkb",
  "key8": "36jbNwRFF6TBx2z2UPeXn92CWRS4LgwFzrKB8sXTTgQjLQaLdPffJFptHvebw2NRELDyGWhquvmhNLW6LEaZxhdd",
  "key9": "3U1qfAcVEw5D4xFfQWM1BLQB5tV2MbBbFXPenaefvSRCKGyq2srHL6QtMXkBE3M6C2zYZUiyKjZ3hkRAQreVAi8C",
  "key10": "WoHqQGuGZoqSBBR63jrWg9RbtdDgXJgV1tVs3nM8Jcvu9Crdnfq3Ns731xPotG53beQCBtVDQTVYWDsMYB5TUsL",
  "key11": "3BiGqWMvfimNxsJ3vc2EnhEaxUU5ssUybZdgCmKT5SLvTyzyzVVb9uUVXoMJZi76E6dvJkNnPDf15qEw9qWGFtCw",
  "key12": "VBY5LGrQpxXCWPF8c9rG74VnPVpzp6MFXjTW3Z4w4wBhfz9zNbeVZyCvhyrXM9Av5DGVHJsAhbYYXiWxbhy1hou",
  "key13": "BDYPihuskEEo5rSEDnkRZkUYt2uEjPhdEUrVZWxyaFFjvBxLsZVCF8uzxmUhJxhzcfSTqQevfnb9hztC7qoBKxA",
  "key14": "2M2fFL63pQP8ps46764QhMfY1kaauW26iXLdxF2HATCkZrAERSRDrZkbdvrM8cd7ibVYWmsG7kqeDM2N72MJrAX7",
  "key15": "4DCGvHFWXuhwFkcLd3u7jaZ2zNf7Ca6AxmG47dPuFgrfcxT4KHraeAgf2Tjcn8YrS34imR72qRmCwRYgYomgqm1S",
  "key16": "4AxHAE9sBE3VreQshNMgJfQBiCY7GXT6Lm8LUPg7w8MyLbbCz3dfpoAsvLqE5Djb7Y7zYsyidpjpmxqVU4Xmo6U1",
  "key17": "3BhujHv45vurf8u4YVcUJWTKwskaX4cb8aihzMKHM7BoyeKt8QZCZiXXWgq5MqnSopztS33su8gAdRq699qnBweu",
  "key18": "ULbfHZDVp5jRS1qKLpBrzYbNQfCqh1dnMTNMgVuGxrYrBNQ61RJA3fYhtLb9hbzAUaET5tE9uQdjjmgQQaof1B9",
  "key19": "APptNhTmr3kZV8xT7FUmErYZBFfCm3SifgDpUbmD5YE4kab1VDHqBfUhzaskTJVqMBZTTeWFAUTHPPUxprk214S",
  "key20": "5bzJjav4NjJp2BPRHSmbAMokTduRvWHBaf9G96DUr6teVpWQ89ruBXeRqY3Q198NhKY4SfbvzQUaDRrmuFCpC5zT",
  "key21": "3fKjhXzF5oMZ2HzaGLF2ciTc4hVJCH1tXxRXzD7roC1Moc98cprZE7VHePcAMB9KJNmrK7j8SpYEEAnyZi15cXvi",
  "key22": "55KoyUdpxMgEMedtLD14JPRXzZv95hQyugebpynAJLUkR6sTcWio8WaFVGDn2RmbqiMQduuoKWDQWLvQ15kyy2oD",
  "key23": "5HKeWCNyN3PVpABcubed8ZUU7m8gWdpAcyu56rQ9DQ1UNN3sWtH38J4PuGaJ5V9KjkQK2VazqnzTPvyjtDZBN8d2",
  "key24": "5zYGYsRA1Vbi4RWbbAYM9MeV8Fq4UQXW33Y8y9EdbFkj5rsFJbRex9KcHFxpEHMFUgvYNwkq2xjHcJ6c2KCMaVKp",
  "key25": "44FAkPK6KoUeQVZjeWd19GWVppWQe5RhcbYmZiTz2AY8GViLcSBL62y1NkK7atUxFCekNxsXooJeREUsFv3BYxtW",
  "key26": "4hihTEFx19429z5A4go8soqMPQnj2Fx8ybQfX9pQc18fzh5dBr7qUk2KdF2ehQmkrRvG74c6jo6t1Sv3NWjtzWAL"
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
