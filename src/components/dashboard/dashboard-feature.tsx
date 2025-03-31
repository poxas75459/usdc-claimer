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
    "2CzJKFFZH5Ekr478zBmkXyu9SkLT1MMt3M5XfZKFK4FZUHXNBBkDZH1GGi5eRpxa3f3UtzvAkXua8qrxbV89prYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xDkdvaZp6yRBUP85g3HrFJbUeaovKPdYFwHwFwCheq16UEeeHuD4J2Gg3BrmFCDNpkcuAGEFS6UrUEnzdKCJYSa",
  "key1": "2fwL1d2dsB2MDZWLQ7ohSK5BfQuBJK7vaNDyMuyeka8jFs8uM1GjJ5KvFCa6Jo1bnb6T2L88FSFaa58a81guL4pH",
  "key2": "5wm5wxAAouKSExwva6fTq5kr18paS5ZU5d69GH4j77EmhCSoopCmXe8hNp25LYii2mRN2WvEhAD1MXzcfYoHCc7X",
  "key3": "3dHrDQurtnaRCkb9SJWX1bgzRzyMm6eDqGQeVn6ESAUzipEr6KofRzxEa7bTwB6YFf4YW1Z2yNKAn72Gqo8r4FED",
  "key4": "Z32rGfpS6cHQocCMPihHh7WqgygH8Mx7mTyTewXEHHE3A7nzaaZW7MP1cKYDwCE2wpSoLSi6zQPvCebkXFvHbBD",
  "key5": "UTAh9Vf3i9TAHZtXXj3dfoSF4m7zqmvFj2GwKvgvzHp8qtJFtg4bSnP7F7cMvM6gfAyyw8z2Ycm7UBDHcA2TYzZ",
  "key6": "jmMzchSqS2Q6YqVaD8EPi73fr4nfC9yka4iYJGTcQMa5G8kTKCBsKnmCNVho2gdeKx5WuR9ctUhPJFfwo83LgLw",
  "key7": "48qwuNy2w964niBsoGNSZSa2N2rKus4hPbrv1cVMfYFK8SFdS8yRRfEbCkCVXhPwTTPBDmP7Vc4WtSiPczuMgUNZ",
  "key8": "3NVFKKS1MePh5MhVX12chzx2S8L9Xxd8NEWiVqMxX8PL35ttWEjaBRdt6vwzcwUbK6SZE2virCo8bw5ybJKowbzS",
  "key9": "vySyq7KbjRTEhDA871JE4ACrGQuzmpn1UNJQX3y2CyFtgnUt2BcRQXAh9HXgzxhTaSPR1gW9niiN5DW63LbF4q3",
  "key10": "44KQwWXX3V5wFZmRBfU8C5UkSEPG2ip73GosZj7Twga5PZbrEgniL1PykMSwscXCvJTmer4b63nnJGu7phJ5KWsQ",
  "key11": "5bMoz51ijo9grDnFh3kXLe7Z6SZW9xDh3rxwkv3BuZ7ZNorNqqwYB2ttL5F4qKWyqoatwn2GyNkeFE8bjaingxed",
  "key12": "663h2SmBqna4rf6ph2bnPjKtE4tBxwyBGpjimE6KC2VNw1EjUdp5kgebtCWJyKffcstbFfXwxoRXcETa4GGkRT92",
  "key13": "2XySdpQCSxw2VSdypvwWEfkNHb5cyArhjqRxFXf1Zie7bfS7dJwCMDiAxZNrnqeL38WYSY3NHpYStdjfkniRA6CD",
  "key14": "2FuRiVrGkxwtj7bSPNtxHyGrKaCzhTyBHTtHHEYJyPJZ9by83aYoBVdAnMyofkeTexK3qF3HkcmZu2UswuvuaZtC",
  "key15": "4fXq2XN7XzC4vsDzRjZmNqENz6VkzM46cSuUEhEGDhkBxWXLFF29Z6os27Xo3w7QFvQ8SpbrdCdHvr2w1cZPuRMT",
  "key16": "29cgNJ8uSkH1EHugNeBBp7k6wYBxdt13kugP6TsDFL2mJzSmMUgr7hnzVoQMMWvuqRaATQNghqHVjPuGGCMMK2J3",
  "key17": "29KyRoHoM9EBdmWhDyQyU29EgNte69GLGZg4V42PW9xVjPVaQAJzNxT2pCYDpwjXDvbGEguQ5p5pZsa2FiXSGKvm",
  "key18": "3wc8J7FX8UKdGhh9hYswfP1Xu6pLsgge5iCnEcjrFGpaDYVc4URHQf8konBERz2fCrqNUMxHFQcG4ZAZeEtdyAiU",
  "key19": "2T4R1JUVf5vDXibzKYPa8BvgoXtgpXpCkXAYVayrb9GBSALinDn8xkEJ3jMKi5S9NUmpJvK93cpC9JhVnaTKMkLF",
  "key20": "56p1D413EGeuqqLvtW3k7VuBEYyohrk9yEsoq3wSoR3mcW3umNghmLY2yZbuCKG7BYZJji1oTZu7xGPpoAHucRK5",
  "key21": "5qpCsgco1vSKA24Wx8UriySTmKX7eVfEJMj4b8tGNbnbuxzBBGM8xvWd3mRejt1jJYQkK5HFHAHZ4VCCWuL2qS96",
  "key22": "4T8J1XNx43SZexPXSWs2M1mFvpcp6TUAMXbtkvgeXoUxEPY7A71d5E3oPbK7j5JMQhYg7AJ4hXoqTK18rrdFa4oT",
  "key23": "4rTPA2dNAKUgXm7rbW2UEphBGsZEurSHTyehMtL6yDU7dWfy53mRGug7AUNE3CPpK8YgwQTXizkzpL4SghqhkM81",
  "key24": "bR6453Wp61o2dTPxBUwSqTgmzuhQBpGcjDARENkqUzYLRJwRcNE1v9RNGFinBdTpdThcJuVVwy4ucvRywRDisQy",
  "key25": "3E7UUx53sgVnjKyyYmhKrud14sshA9MmSZaVJwdm75TMRSw35shTJ9u1wrcBU6eJKZYJKJjD1FJ4b9LrJpjz1gkP",
  "key26": "4rzRWhgxuEFe8HZQFetxZaEyfn4cJiXnFyLh34JzCepatnLw7WSbr1LRB2y5bzDdxPBRqswKRH9TsS8vqxzjKq9Q",
  "key27": "5iVQd7KZdVHDvLDhaPoXC93r8T4ofzhnxNycUr3jxjutGZWZ9qy1ZXeRxrHfbtRLNrsfNtw8F1QMf65BCgYHvKU5",
  "key28": "3TGLsf214HqWDDAYGRTozx1yenEmWQm4Mtj19wLhwvnitNvUiPkziE2SYCM1XVaTdmGuTxf82BksP32JrQNPvgPe",
  "key29": "5LFtNgrJ2J3XSPvos4gZjbrmG97GAQXxWef3EScMVr2UdVxZbWmq5H4Afp42nBYEwZcUBYoYTXsWttegS2c31QFB",
  "key30": "3Rjh985B3JXv4YgAJiqcdjPPZsbao7FvUj7Eu6hFxC7HQRikGorQFzJRwbkGnUj2sHz5fBcEnFP4jkdHtdnosrZE",
  "key31": "5Ax7gf14pxkLouuubPjo2ZvP2WnYGn2XUe3do3JWchDbz8zxqb9Mro3WKR8SPDZUjJ4sz6uPM5hdANmGq5ZHScMX",
  "key32": "5m43rpZ24mFojvC2wooSpyFTvmofGM9WeYTXxS8S9UfX82yJqCPMrhyiYNDomvJcuzRBoxf6sBRP8aAfkoqDSaNp",
  "key33": "3SRS2f6UPXbo8xkL8B2MkMvnjZWotVbD9MBzD4cPG6HTJ82LwwKTHrxsXUysj9mBzBAQ73mdLAV9MTVJn1LL1foh",
  "key34": "2Gk85sujeQGhctofz7MWtidhWaqwM7LpUpdwWoc5LyJSkVirUfBvGev3G6yPDTXzGivZN2LgmW7p9HMarsWVNnDZ",
  "key35": "4ZCVasCVnykXPeGgfUaiEFtPtrXzmX31FEZdEVXQbbgevnfjBvH1KqLa96im1vKjDBXBv6Pcx5NRNrLZbkxzPR9e",
  "key36": "3RSdgEzuUsrvLh8KHcNg7YA1HGCcbYV1JVyn8j4JdW6uHxJkMdrYR2ZsV8yZ2iQSek2A4r54b8B8zge5BL51jKnV",
  "key37": "qLneajFrEFDRoenXraN8PdGUdYqeL3UshCKurcReBt6nMmtBoAMRPWM27V2XGMbNAV7z1ZziWignZ152L11XY9T",
  "key38": "5pAb4EsyuutrGdpKqDqqSv5ZGpLRMLKMHQcG1PT6CtcvsdHi678gtzuChfbCpheXtA49JpL9dufW4eM2Mxrcunpb",
  "key39": "8WhRvXUUiCsNg4vDWV3kARaQx6mSejRACSpcSigRWxXeJv4PUooBrNMEqEbc7WttM3j3oKWKrssJqZz55f18WN2",
  "key40": "5KvkNnFBCYCcu425nUorxwBikXLP9MQhqEhbRVHHoRdQGSnuL8hdYqbBQzqm8tHzHBg7XuCYjWPiLrBAsw1GBbVW",
  "key41": "5cGahwa7ksuMXsW67nc9S9re1ieTo9XsoaGfnwxBhqAhioTrgLVraWv4EEueAGoE9HLfSNSMXhiZcog5YKE4tdCo",
  "key42": "5aBiZKyoTaCkX1ifCHZLiaNS9p6dtL8tFZyBGyxHBrApDrjUKJsura1tnw1Mik7GJ1UcXJo8KfsiQdkXKXNCPVqq",
  "key43": "2CPbzeiqaRkLonKo8kfeVPDQDnCRpxTGnz63YgqD3Cpr3zRUbUet7juySDNpzGhESowxdqoBF6UnH6EAMTsZTBfn"
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
