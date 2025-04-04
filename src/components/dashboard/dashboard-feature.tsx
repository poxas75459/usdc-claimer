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
    "iqayypyU9HUZ2ZQErXgu3VKCtbXCD8ATTkV3rrawqtvJNjF96tjogS97a1HwNQZ3LkRZnCEtzABqEXJy16VXzkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51mffhovSsvSEno9dFH364fxxaYjVrA9NHc6hUeHgSnzm8Byi8RtpqdW5xRXneG6r1pt9cxMREX4gYSioLmiZpMs",
  "key1": "5xbZ5hQNTwHgFbU6mipcWc6qZMDyGQXDY9nmHKuxutA3dLLuKzJW2SuwF61bz1MkU85NKAyiWDjQbzJyHYVe9uH3",
  "key2": "2XnUCSmAqZJgQyeTXZYAkdiiLrWsTjTnL9H9FtwBYKsWgyPEGsomyGA4GPjNbcF3zzLBpxoBURykte5SoCZf32MM",
  "key3": "3Z1zZPUqvAKSc9KhwNJBnzBeCJCFSysjXAMfuN2rFa9YK3y76AVg9sBvnQ7uPFMXqxPEh99dgbsbSnTQTFhamCfq",
  "key4": "3kbyeNe4ZUy2gPKJMQSz5y19JXPpW9qbeKdqzooRfK2ghpgK949t1B4SXMbf6WSvfaj4vKU8tB7FrnujMy8z7SjP",
  "key5": "4LUTPDFAK8SPDzAGzSRiXdEHwt8EhpXzLaak7uKBbVFm9UxJMuDoAUAtqXixYHUaNVtCs16ezhVMb2gB7tRvAakH",
  "key6": "4pU8ZKB2QyHNTi5TeJM6TKjcNzQABQDL7aKUUR5UfQuG799YFCvgSPRrVFduVrpJXZyHkrFfm8RyUiko5FVJdwAa",
  "key7": "3dDgKoS928vfwV12oQUZzzbRagiX6XX6AcDeAt2BoQs8kMPdCqyPsSV6vsDQ4NemZxEeQNmFjGLymmcoXPdmZUtB",
  "key8": "4PmGtjPT5r87ZTjrwRavu3vV8o86V8Gnn41YGEVjvf6JFqEBiHyHe2MA4PniK4yXt29mTDUeuK5wUXyeGvpiSURS",
  "key9": "2ap35mjdTnmzsoAt6ZYbuiHKMn33TjdoJfjNCqAPAFietBNBajGc96gxbmd2wTi2zjyB48nDDkocNHmKnV29oe9U",
  "key10": "5G3yhhTyz5EmKzqujJRfhwG81wGdcVpuUWtPcUhmJ6wHpgLXPUw124M4pwbJB5yi1Z9FNAY2xPNuSFr4vsgkqMGQ",
  "key11": "2cqh6nHF8SJ6yWiVUXhB9E9H6hTNwYoM5mSK5qaB3ixDKsgm1KX9KMMrPHYD687z1cysMHuVJsbHK2fS8L4WnNy7",
  "key12": "4G38DCnkD9FCMzwXjArrTa2J8nNX6bEcxNiFvQFtP7ov8bvEHb5KWQCxZqUMxQyTuSdFqnuGQ9brFAezbSRPUJj6",
  "key13": "3MvgAFWjzCywsDu2VvfSvGeg6HfdBuBA4PtncWzyAyZbYAt7hK8Q5xLUNM4tqsUWFXYkkCEJHcbRAmEUeRFfiJvp",
  "key14": "4teyt8htpH2TizvppTCG6oR3nZFo9yXi5AztM6t3EGi1WKbaJzxQ8npz3UBUbGrAyDJJaMPwmPY8Rmo152K4ybxM",
  "key15": "4HYJqq5N96YrxocUbkhiqkb553ERDW8WRXhjNVFyBNKx15Tz4SHYFrNXXgyW4eimYRzV15aTRHXESxvUYX5G5ike",
  "key16": "42YH4dcuhjsdqBJsjM4o1b6D1MdtYARD2NGsWCwwBzgYh9yGXGJ9Vj9Qxvg8msvz57U3emPAxTMKH6hEjXHk2cUn",
  "key17": "5FFXPx1KdADu5s2YyB9wZKWyRTYykstg7vMemspuUDD9nU1qLyNTX9h99QAsvqsxxSk9PoT3pFKa78eZfbpFcoUD",
  "key18": "2Vz5mWEfVZnq9d9ZTaT1GE71PWEKWiZEiD3W1ocW36dPABFRLByREyFtybsjy99J8WpcqvBvmkGDTJiZC98vDnik",
  "key19": "411mzZT7Z5izvzYFXCqQHNpLdAoSGBGMuyPaubk3thGQ5PCG1aaetFjLwXxv269FNCiKNjDCUadWdtp43SsAYQat",
  "key20": "31oKiioo28ZikjEMfS3X4WqYALcc12J2Jj8VPhFqtWaY8q3UxFFBs5Zx6KEm6r3Z36ZWUFHRbnRFmp2TayJUSHS7",
  "key21": "5RYgqjMkF1SKEsw5hoCUmLmKxwLCKqvj9tKTV7Dgci4qkwwZWj3rVgRpSTwgx6yKkac8EzTJKNi2jcCENf7vnrC6",
  "key22": "2K4JbMzAxguWhNYifuxVpGejv82q2daWJAoEJeFMBbJSxVgwzK8Cbbd8L3bMYtk7u5ST5h4UVua5Cdk1KcaRgFZW",
  "key23": "3ZgNeX4jCeeuNLCQZf1r6ZR1mkx7kgS5ya4ad3Q5k8pxEL2DdFr1hMSKELk3zPLFUGY49e9ti4y5zCmEDfRVhFNX",
  "key24": "2MDrgmpvx72Y7VyED7bRXGQtgxk4Kiijo4kqZMzGZ6APYDtGjZnMnMgem33GuLLbh9HoE3GELxwxmixrUXgu7Vsp",
  "key25": "aPADdb6aHxBxbE1eUWnLXaVzoes4UiMCMyUXiWkNC7GaWugDigyEfHRKxyxwfkez6oUQGcHE3qUbTcwciNU1Ua9",
  "key26": "hdNibM5gPsRM49ox3qZhnBUHnYYkSC9Weyc6J1GyGmZL7T8u4uPBcysc7NpgGAfoxdzaw1pbt2qMyePNQBXDYFB",
  "key27": "2XKrpdWwy3xgUK27vnVzUwmoAZrRtRiLzpNAZdVfV6YxjJitDENPhsGfB1svUFptoPdtprSmDGZTL7KvjhrR8KDu",
  "key28": "5rAKMZUiNtKV1CvtuRzdJqbdSdXQ8remnpEyBbKv5Y2V5asURn5EYXZTK11tDmkFLxNtTXMTnAZMMoxyvJTujA6p",
  "key29": "2n3Y7VrGQMdbHzbj35q5bXGf9eg56b37GUQnCTErb9fheoh6mq2pPDTZhFhfU5rdmPoZAQVJvvcv46EAB3Yy6MTR",
  "key30": "45ZJZyS9wefdBPJt5EYBAfXHphi57gUYiFVgaEXTYrFX5exxesCSXdNgC5PvANm5pesKknKeWPyQVe3WowmzoVPm",
  "key31": "qAWozQE6dDWEQTYcBe79BtcTdxAuUZk6LSc2UTXpruix33pDxLMYc9Z78A3xnt7gEJr7WrZqBWdbm3mMheKXc2p",
  "key32": "2QHjsZjzqq7QCzqvuRQcqB3pjMQMCy752ukpBakrYp2JfW5MPyg5AkKwvh3mDiMXktJm4Ks44kbws976iZ1N1dVT",
  "key33": "27FpnmKCJYoeqbDjnYsgtn6Be7NHbBBT8UQGBnjFknuUdUAcF63Mhx5K1Q4B4YBMiCvuhMeWX5kBrptRn9bL6PV3",
  "key34": "5DvN33ypV6hqovF4Tgc2CvzkTyNS3xsroZndtCzmNRE6usoxrNfFSfWtjw8FLQN5uvnZ6kKmJREPqsshRy1JPoF",
  "key35": "54TdZZa9FFH6FWtkSRHEtyn8FmpxLem1caP4ibUiKhAK1XZEjooqgm1yseKzdBsq6LWBzCpEVXPPrzfVaHqudy24",
  "key36": "3x8HKJTK8CFrEtZ5C84x78TXjpvTFvf762ByzA3qtFn9tiMzSrxAHp1Shn6rWVobMxi7fm5JQhftfHiUgufpVfwD",
  "key37": "3wasRNCA3DjkkkXus2KRNWtKmoKt3ZLdqMGpcqTnNW6ekRkAmGNhFAbQYiAWBjYpja3WqhL7FM1R6Vwnxw8JxL4x",
  "key38": "5eBzFnjCkGJTxwFr7j1edGix1hUZhXMgrUBm9vBPmARfJ4kgLCfTEaWRjA2mK2AQroUSHhmaemPbSujPJ1zbbuB7",
  "key39": "N9qJphiEYpdfUsSGQBgcxai2SwQcopt4jgTBX7i1tKucuQaHe5VAy49SFB4pS1MwCWbfr6Y1JzgzzZr4Xr65Sar",
  "key40": "5RrRTrUzxVykztGwUzYeoZ4rseyBJhz1EtGF7jxumDWe8SNR83coxjZLE5AXAhv3BJzrd11ojUDRGBMn4gX22ZNt",
  "key41": "2QyY7m1c4gqFDgqNgZRnd3dRymTjV6XxqBgKhTgteau4PMpXc9hQ5Uhfy1aKsMRhpAcxhUzAsHCKhWfHPNxhW4RQ"
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
