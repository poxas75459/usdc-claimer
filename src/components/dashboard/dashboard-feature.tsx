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
    "4yiguiGCrL932YDX1UZrAcn4a5DQrNsNdpiLCJa5WLnYweGdw6DeuSLr8PmHiuAFauVj7yg3onwCZofUXSGtZhpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36LtHtrTzw5WWa9UYgpoHK2SQVfoADyMmWRaP5ueLbggsjhQBHxe4BfZjv1HctAGpq17tmytRjdPqWcCpJJBwWiX",
  "key1": "4oFLK7NXCWyPw8JhX7rxLcHnVmWhnr6HUXPVdyWxqPVFWN9rvUYUQCovR3icEieJs7ybW9YwT42aNbiJrvaBtLME",
  "key2": "Yoy5PJViSWq6ntU542SN7m8GMzUagrFwmDWcqTv7mLF85BSsopWUuQhdvaHjPUN8VpfZ3rQFdZRZnRDGsBUsKj1",
  "key3": "4yGjHAe9AkqGFn2pujtmcwPLknyEBDMYr1dAfQ7kafa5ND9qRDQwVSF7GqhKuqrX6Cd6ibZY7rmVvnCqez7zFhrP",
  "key4": "4X4txi9PxHpaxbWnB4ngbc3ifTMtWp7JYs22EGn8R6nG3GrNGbTXCJHDbAJyMsDCQKC2HPysnFNE9f1AkL7CEWDh",
  "key5": "4UrAYkVHX2cjDVadX6xpT68RkjE4mM8rTkd1bcwi7L5XGq2MyZhsEMXPwiQYPa7dLscLLbq9SqDEY2FXomCozmG2",
  "key6": "TywQ97iWH5btBeMWNezA47NKDQJjzHogRwsShMF11GeJ2z9EWCN5iofvdqovG12mf9LWGwt94tVCLxovZJKqf7k",
  "key7": "2YSjprY3kg2qve5zwuQEA1JCcwGnk3vKkAMQ1msFHB9cZEriooJm3VVUhwZqrBnZmAkzj4cCQPHCNMgA7CdKJyxA",
  "key8": "3Hakk72obmd3z5VF2CVW92Dwfn51XneiTXb9SvWTbVgvUJJ6y7QDc1aD8vJqH2ccBpBKAijFxLbqDNCfzLtqSX1F",
  "key9": "vUSqk3SQro2nRgZ41KFjGc6zrytnjay52sMSazgm3VCDeZdRwhCFCSLmGMEr8se9StzRCujSjZN74cukqmtUZDi",
  "key10": "5m7ydDSw4c1gJ7HcS6hGCXAMUEct967qy3tmC5jembffJ78WSeX4aXeJNGmjkQ3SatWmJ3ejHvoiRUBgBdMHUwrQ",
  "key11": "2wx8j2rhBDqoPE8K8qHn4gnwySFBCmd6KdHvUXoejsgQCqbKN1FtvqdeXmN6z37FtCKRoKtj8N7KyLscxGj3LkDX",
  "key12": "5D7GcgnzHEr7TVcPg37CHmRA5RpU7tQLUNVXvZeFQNX1hYWU6efoJvjrDdApbdfA1i3YTMqmB5ixg2uf4vmr7C5n",
  "key13": "5nW9dURierf3NvmCEQB7TSk3NizFt4VCZxzD9BSNBykumT315QiEzQLKCkfrVR5JcmRZPtao7PcUMT7rQkDAGjTc",
  "key14": "4kBzhcrqPRUo2ZQttBoS5jcJ9cVQvoVPenDjnvQpQ7VBx2JTzq39Si8wUpPCn3cGPaqabQqP2WfQaXQHExGBKxmd",
  "key15": "3twGqxctaAeMzmwd6GyFcAwVKvVXkjsRb6mvG8xb1nqryN26GwwTBeSxg27454pnok8aeqVxKM8d7kikfzJ86ZXh",
  "key16": "3cLvFeTpURUbXL85RpTJA3uqwpL532854pyLyWtot5h2P8krKjZYAJNMddqToHwjUAPGDSzcLjQRuNqGjVUPFBEm",
  "key17": "5Lm8nhqb6crQNhmnALr2DXjSNjdN7pC4eBxg6sfg6xqq8f6NF9gjf4BnaTA7Cu4VN6T2eqok7oRKfTSN7mCGToky",
  "key18": "6D2u7GBwQdjXA1NBwfPR8bpUUquU7uwNQP4dWu1uvVjjnR1SScEsnFHmWu5qyxqsy64Am7ZJR1T9uf95hwawjyT",
  "key19": "47ZitSkYrNbghm4DQdJBbcY1crwhRCoo2485u1PDqVKKAuYmJRC4cac4AFmi2FG386vjmu5UCLZKwLSxdXCpAu4F",
  "key20": "2YvdL7AVoPye8FTSCRTtfgoPSSaJ6rX7yUBCgZPyVZbKXk8LVgs8QQkYy6MriJxkDRygfYMu56dULoRRFuUayeez",
  "key21": "3FJAdCQqZ8TMB18zwqtauJQ16oX5HW2W7Dy9RdCYFVn5iC2P1WExV795Vzbt68JUigb37E51mQ6hMpf5AKffFrok",
  "key22": "4H2WTJ8dpMh284wUwe8xiT2hzgyVJrAKvnBMeN1b1kEWeLEzdwPfDLHRPGiReCUKAqiGcbBh7UpRipSFjAAHVeSC",
  "key23": "U2qct65PnNs19ZmgFMQmTPgRq5yKBQCSPiXLg34BT3Cx817u8x17SYpQKvfyjCsZ6ePeQ1jaEqqs5jLgHU99pzf",
  "key24": "5mjPzNPrJ374X2kGbLZJ5dPGfceYmLnCDvB4j1VaXtKAhrdDSnYy76zaPsu8cRB51L1JztwvrKot4M9WGduUXsiC",
  "key25": "4tLYm39XRvNddJFAeKgre7y8eLwVaHcACt6rkoXTCC4hJWFxiM4JGPBznT5vKUU2aZi3KMtmHmBix6W7GrE2TP8H",
  "key26": "4qRJKoEXhbUYJA6VDrdenatiKmBJa8nqgQPCn8nf3Fsyih6F8p7KoWUnkukL28WgdgYVSn14g24awepMCJzTPphZ",
  "key27": "3doEVt7MAFQwUP79LyUfS7BSaHS3picM3xxvtdGEE7sMswzH6heiWR4gGSMZxx7mwZq4tA5hVvSb3xnWcSpRzXGy",
  "key28": "4DWFzW39cM2ysqcxpqMTQ2NTeZ1zkej8P7exYSdUkdy2jAuSERqv1fKuwNhPKv2iZ1vzDMrVHrKRN8pVuvNW1BeQ",
  "key29": "59bCcxE4yBnzCjV6p4pCcsDnN6BUwzUBmMxF4RmSPrmMoAM9nvHXCK9E1z962iWUEn1VbSFnMELPLAJCdMrFYEkR",
  "key30": "3k3mjbmSxKyWUyZSJDHuxFV8VjvFQArqtYVTW1dcMtyrpxZnzjPbfo31L76U4QLtDkTPtyBDcYw7QjbgsWqcQJhq",
  "key31": "sJrTefK6SijWfeR2LRHSjYtBdnr3FbtGAsdj6efbgwGz1WyEHBGnev6zZcgyNtQoonqamwrpf7C683s8s5QpiQg",
  "key32": "5tnDeBFZNYkVPvuHT12Vd2S8yQzWuivkgweBN11YGBuzeMiyLpRevbW7ZfbXKAnPs3U1GgSUqAmZyirnQHAMHw9g",
  "key33": "3cbRmvuhj4qJDdKee4PerWYFzt5CiCiLXxzGQXkqasDshbb9Y4KR7J4CupwnpgwmHeYVh3K9XUgh5ok6u1ZzyNZ7",
  "key34": "23rgZso7X87NDtBYY6noZGem4Xh1jZqJ1KYx6Wvy5gLQFgH2jyHh2my56UQv94nWsxRdJ9tCREdkeuHsSt1ur1tA",
  "key35": "o1D4g9CGhW5haURdvFfucQC8UDKyrcmJVDgVadgUsbADRD9h25r8GMcb5Q5TbsKBXVqk4v28mYfZYiYeEd9xBmV",
  "key36": "YXxB19CTcfwWs59rDZmPVino4cjzCeRUZx1aERVkcGvCzrm4uL84k8nxCpwWtSURzUtjNJ5ehaTa1s2Gx9km1Ec",
  "key37": "5aQcQ5UqaHYjaXdPzYdfas2oSou4A3tGCCn6hnZG6hq6mwGw2Gaf8k8doZPrhCx6ZVY8Tz2YTdXuHYoYwZ3R3SLa",
  "key38": "3gZNsGkNvpbXvYKBXh5gpEHwxEk4RSMZY71ypwDZiDENVSRn8RjsUwesttAK6Spb1MskwNNzWPXuxeKzm6ZKnihN"
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
