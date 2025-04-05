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
    "JqFUXM4z5mDrKWbWHgRMbY6ioZSYLHTGU6TREQUHnou4dcE8Rvq2f4CpqXrhqCVB1xWSckhSRrejdKNY2tL5WVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f6LTBJr32mCYKYgwBvDNteMh2ft2Ckv5ngCPbFJ2NYsW7pBKpjKsavUdkNoUy6MN1ozrj3sGoNmkiZcT4r726eg",
  "key1": "5GgrwN4gm47Qiz4mDeq8iN6qsgXjuaUWQfs1BBNSmkzTxsm1w6o4KqJ6vaNhhm6AU1K2oxyTECn2Uz5BotSRxxY5",
  "key2": "3kiVYewfAuto6GtxRftvhuGG9Ss1r8yXayaLGTBwx7fpKdZAofKEhyvf9cjqMLdFPTc1my2UDbTCUzmRVyo7ScLe",
  "key3": "2gvMUNxJKBVxeRxL9eSTc5f8inByCce4tDyJtoEoZHmdaHm53DnhJ3rfG599NcpdDS2gsapEgSWM25ofNmkcpf8T",
  "key4": "47MUv6BVthDYsEKKE7JRhEa4ATYFTw5XRwYxRqSgMZnBc8u5bxW5cxA1yA74x56eGvQQpZ3Vug9pCwre86XS7Qdk",
  "key5": "5WvbH3WiEuq5JjmrgZdAQrmJAQFwtdNFMyLqkSoWFt6kS7RuoeFYQut5hSjre2NtuNdQmNNZLxR9B2Pap1KFeNtr",
  "key6": "3ruasRsbbB1PC4er1pc4HJoqC54QXuLdjJT6a1dn3VUVrJiHmcP2RBtBQBCaYMwcKfdcaesrtKejdaHxtHG5ZAGi",
  "key7": "5MoobfCrLe1SGc1Vjpp8CFGRDm52etcWve79tJCNKNwSHYNQaiqsjUvfCjxw7dTaH17ZwNS4EUEDQE5pcvoTiiW9",
  "key8": "5wfFyGgTgFZhWpejHXuhwj4VbgS514gqjZKDPEQ5d4Ky31vHaLFzp8wDExpTJekf7tqM4F6Vfco5P85isYf7RNKr",
  "key9": "5aQxWGJ225VJMt45Q4jpKispQqxrm3SDN63XC8dfMt1oprRLxAttCpuW5JXBuD8upHEohVCBbDtykXWJSEWezgTh",
  "key10": "48HiqByjF9crD2wxXCzTtJJn8fziuNi52ytSipNaW1dWpf6k4teWP5gwVyFbgyYJgBTPnH4YyvYsX2twbhM2ohLn",
  "key11": "2H9JMJ91aTLyvuRvXJQ1QcjEm1oEWMPT3qCMPuxA46BaJNnVEzsjqW2FuMK8nsk4hK3tgts4df7pLEtEmeGFWUWz",
  "key12": "3jgN8sKLYcwEUHJFpecsKdJUNqmuQBUtcGHsbtu8MiZ8FGGGR9rHqcpqhjkMk6woRjpNv7MkTPhjscELx27FaWy3",
  "key13": "3csZ3yhc4CM7ZnoSGxC8nTpZG3hDGsHLXkAKNULfrFce1JyoqzH7ri3mbkdGtYvTh4k8o3CyyJggZgLrpMppR7SC",
  "key14": "3jEzmQv5v66sH5z7hyg25eJZF8N9QiCkYwEh946X6hqkjZv3PwTQu3Rh6DXuavLZGBPXYK1rRHq219MXD9NuHknk",
  "key15": "2usdTd4Zt8yCxzqiSC7UcbFZE3b8uCWXWmJz9vRs67eYv3AAz9ZViTR9RMMbR4iapt4WdtfakEZo5FXPAdTFYuf3",
  "key16": "5jPc2GAiMQK8NynAVaNgFeZWKLxbixMT2cWD8YgH7uE5JkLeB6v7phTS8pJRkaiqonk6Hwws5khrDg8V7o6Q9Rhz",
  "key17": "3ijU4KnEiJ3gkoAmN7YMQvLKdZKxnzx2PWKmZVnFU4pnVReogfUqzXxWpcG9jqVBfMo4rA8u979Y9oXdUHdnShS1",
  "key18": "4MDD5Lqwovm7RLFLDPDzQPqNw6Zv1Nocpw4GRH8BiCTL2FmV2jgh1adQnfKjRntkiQKeyxFES2HEQ9EkcGrmTxEg",
  "key19": "4exCN4BRybPXtRuKzd9UUVgzUis2U5dQF6Gr7KcijPZstqEBdpswEFUkzBuWEZiME1oR61S81dCEK2zmFddJEAfG",
  "key20": "392EbuPE3oiuP5YndZDi2NnHEaZa3wRp8B58LSvtpcYCKEmDUphhagfhURdryLUtvzBh8FK4bw913Ggph5YZGf71",
  "key21": "5ccJA8huNBDhYvP8yg7mRX7DT2TrkAbPaoFuDHNaTPSDtKNPSJ4aLHFW8TUYyopeAwPFWMqGEPt9u9mzwFFdBmMP",
  "key22": "2WewvSkktQSki3numABjparDb1sdt4hGdJpTq7Z62WJdgCEmTLUgqDyKLqdhCtjQPpvt5L3iHPQVVzubWByyrYPD",
  "key23": "5z7YjeQzCxs2xgnrUSrXZ8rm1BMDZqtKfpd1JA6UHMPEXQ2cqWbw4XE7XjyKKwBrkzSqer5rPYiaPWMDyBa5Z3rP",
  "key24": "22KWvDX3vf5bPqsYJQXAw4ShDkA3Ff6eHqGW19QWNkAvtikBvWVRiQLHsw7Rw5NuvPhFfcM2HEvigkSNvidGwDAn",
  "key25": "416A7pZDxV5aSUoWNS8tSKbG465DGtTCiig2gQrJP6jxcPf84NAd9GE2uwvsxsFdMNvnQS2CaEyV9oipPWcLsssm",
  "key26": "4LkH72T3a2efownQd9mBG9ddWJPoyJbN7swMniXwVpTTFYYQnNcAig7u6Ee5L47DgPsD5SZRXomHzDH3SNb7Suhe",
  "key27": "5Vo4yBZSGp9Yn34aRLvheAnRxVCC9jvEhjbiSxwjvQtj9BtmpjjUEzrMHPhX6KPWeNrtdNUSceeykLyHXrNceyuu",
  "key28": "4nq6P919YFch8j3sifbNupVwmDQWsoPgh4xRksMYt9JiSkGd1WkKnkKdQnJBX8w8aSE6Q4Vfeo7dt97Ku61j1Txu",
  "key29": "2hLNTP65txsDUHEujNuYEgY6K68tamPVUyVYXma5DGKqpjJ7XHxhmkDUyYqZrRKuqftJn1hgNgNRAjUndzYBLDJn",
  "key30": "3iZ6sSUpETd8BaCyxW38t4JceCsEkNE37yf9RVm5KyDHx3RjbqbYpxdvApNfyse3VapHvQhiWd5wCCsMrNiHoX6c",
  "key31": "3EjpatG62Uet2cAnQRTcFPy531fm9VVYyMq7XsVfMTJfMtJk9n1tKJFCeMccAq9mK1b3Dk3jAMe6wZSvBmvnKHrp",
  "key32": "4xA8JCxeVbFgTA7xqbxCRNQsVgc8UhyF4ej7KRSVikMifqW4o8kfyk1V2LWepSuL5dP5Vexqm1SsAUrcx9a4Lokb",
  "key33": "5oCdJMDn6remsWhBDuaAEKQYY98nqyGDBxX7PoCPb9dTo1kng7D8SG3p4hu5mkJmZedjqPCS3Neumt1ed5Yrknjt",
  "key34": "tK4ySTigJ7VFdAwfygPNrLv7Zi7oupcH5j9re53QVdmsyvruoCUWJWkBXa3tuM2UeoNW7KJhcs88Gw9CTjPkdNG",
  "key35": "JaxeS7TCb5EkHqAW4CKEG6n9beAV7A8sHppow9hS8VRCiXr7sFRMfMkfchBgzQiiTNvdFvJNDX8S8gBu1gmNEYf",
  "key36": "3sfVTZjdWM8aVWCPcM7ecuKCUEwXaCwujtxfacZhJu9bEiV87NeyMxf5YKxWHXbtag6HfPdTrrzgY3H4yfDZzGnK"
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
