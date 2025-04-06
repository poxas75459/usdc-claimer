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
    "4P2XRzTdVheRSxo52jSzRvLy3KJY6acsnDRQpafNEFdYG9D9nsvUnTMDXdJPcwfejW2PuN7ywDJUAWxEsBykcB6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U9zDRoqLWgFU92qwNyJTUbEtm7rNBiTcvRKBDbJoDY4SvfubLXLrg2xXJNS8MerKdHGEMS8zpQVuyxRaHXw2pU1",
  "key1": "5NTamapR5WnJLz7jHJkFiY59QvE8UJ4yPQgpy9zJy3iMszQT4HpUYVm6CfyGGee3w74s78VxLrxQnTQFhXRPkJBg",
  "key2": "5NJV3y1fHGnUrnXz7zpJwxqqaNHY8usXaTkKUaeJk9zYyKd8pZ222sXVo79SgAvX3B25SEFogqWMZHjfiD78XhSe",
  "key3": "2izHpzQhPMJpj57N7iuy83Lb2LsTZiycWnUkYAbT7PqVaqUb9GpLcFHcZ7ZBZzg4hB8PQTQjQ3YZqH5KBaU3BLwt",
  "key4": "3WYNLVtsJPeFxi9qMugGi74117NKSZLWqsCdjvgnhWawLvNEULPwU7TrpHbChASYNiPkMXsPhX1LWwLVJU7x2FGU",
  "key5": "58weDLURDUvY4RajP6GoHccCof6tzqrAstEUiUwgcpbQR8gbRmjZQ9XgwcEXqsRouUFBMV62NVeLYojVxTbNfT2A",
  "key6": "3REaktoomM5chAf3Rhyb8zZSpBJ67PvReuKZKbeJzmeukiiag38tupL4ADrLtVP6vcfVeEZLtxCMCwgRU1LEYJwa",
  "key7": "36U8Q5JmvPPwwfUq788y6qMq2xA78ozuGwcPZjXdK3uRpQQoMfRaMH4wCg2VDff7jSBZ9tzPUtkfXifmy5cTaZHQ",
  "key8": "5yW1PPyG86e7FEyjiMupe64NAKhGx7bXouL4sEpyRZmfL13zq2KcWHw3y8mhgWdmn8DihsVN5pgRx23ZCrMCyxMu",
  "key9": "3yaY96g1r3sADQnmGHJm7KGvkv6vRNTJmDCUDjkiPhBVyGZQFdyy9jJVWudMyqbw274y3Y2je6NVW8b2WTcFnXcB",
  "key10": "2U1t8KcZhwkELCV7J55QFU9RgjAvqJTUi5XeUKajcn48JS85qqXeQ6JR2YFYNQD48wkHVCoLtarGtPafYoz1mk3W",
  "key11": "2gNrjyaJK8v47UVVuvakBphTE3hd95MZ5J8NKVVKBgiyuiuqLQhr5WRcbEgVAmso2K2QNL97CfxRzrcF9k6zmxd5",
  "key12": "2psJ8x9j5rcbvAtvX9bisDeqYm7ZLq9tGvhhC7jMVx5hVAxdEw2RedE5LGUj6o2c8icVe3fU5EshhcYzNZxXLzyX",
  "key13": "9CtH9yfpQqRQDLsX2Q5mgAFG7wT3KkxmBPHeKSyxbHqm4pmPG76nr4gF4YXmeybPBiFi5CsC3bJT97rbxj8kbLD",
  "key14": "Bx2PvRLQBQQxQ4HrsG5p8ySoKBGZvoh49G6HdJcrTvvfEpZeGfmzwDmAShgBPrnaoDMYs5THq6f2ddRZJcMY8J8",
  "key15": "39HmzE5WppAKC1DmWbrqFYMU3yDdFPc15R24oFeWJUZRi9Y9uGnLdfC4i6w3r9JHdUBE52BcVaEFvsjWG2Ty53xW",
  "key16": "3zDuWJFwQnHbwpsi3SrbE8GtGZ1xq4D3rrMuKyiBmroAMmWAawfV96jo8oQnC9Sws327fut2PSKBwKwE4hg8wH6J",
  "key17": "7h1WkxuVbAKQRycJo3UByFtVKseVLPqmHpth6hGXRwSik1dY3HZ5U3XyuVaxW5f5Wz1BuTLSzW8yxZHgXngM86Q",
  "key18": "5pNmDJwQGxAxm5ZzS1YM5RnmqbMuK9LbRBdFy1YYDQNxeh8zX8Wik4rYx8neC2U1ffWMsiZvLAhTqYUchMybGbuX",
  "key19": "5MPFK1C2vQ6mZFnZYqAsy7yiMEjQq1JoypFZSPRtHxQmgH7hf9BNCYtZuTG97prSWMEpgZ5tLM8sQ3D8wKzDXGKx",
  "key20": "kmCptL9CMtbz8pPzfnvtuSdxbGbrZrbeLsCegu1xr2njMWJ8XWQdq83j41kRusptd5P5NSntMM9m5ckdFF53oR7",
  "key21": "2jcj1ppK9MPkcxiXPbFDYp1X269uFuMuU95SYeHX3mphRDScPuCCC3adFJiXY1SyTU9KdK6vJcn4jPAtmFjka3Ba",
  "key22": "2ywTkjiLhJUuzVTsjHjZ9jkc2QDaT9ywyGviAbzcqxDaVsn6xsT2e82acLMyx8Lc6CV6yXLEuVQVv48HvHWorBH",
  "key23": "5wG1QD7TV4DwGPusiDNvHBUDyqz5C6iYsTPQxwBfWUFJTuVvCLN46fdfBYHb36uWKTcbJDkxCM7wmiFooD6vBDs7",
  "key24": "4VFCfeMYyBDANnqB72mLSMKxrq9PeK6ckutAZFyrprXxcQFiSQMs1Mz12VstFm44hQQiJXoigGyPgN7UGQNYTJ6Y",
  "key25": "2BqtMvcacjADYyww5XhksPkXLXEDAi7E1gDjGEgTTY1rFv2yymULwYsZKZ92cSrYXNidBudC4yWKyViaW1LoVZAM",
  "key26": "33jX9JWnF9vf3EX26zsy5truodVcj3bvdCHXjj7gp4avwNtwKLiNFjNpzHJauLxyJZ76qBY8t2dj4iy55pWtiFoT",
  "key27": "3nzQAiVd3r4TZH6VU4ZSvpoTBXfdJ2QUEf9kN1YdirofKgp1c1KCpysuCUCXZ75Wa6iJ7e5LWnX174SpKwa1sMTa",
  "key28": "3BfwANvAruaob1M6siEVrxjn6ryrQwGd5QwFe5XcJz3BQNnLWRzNER7AWoL5neGNdUPX5qYCHQS94u1RMh1QPK3w",
  "key29": "4DjUCAfoP2xsPd8jzoJQfaigTrmTA4JwhECjXqczZKjpkodjKpzdZR611baKLimr4GLrtGeU8U4Ab7v2FgU7MN45",
  "key30": "MmY23L4EbStQcBQJGsFGBNs3Q8UMoFs6QpoFAeLmfZ5gUwDeRswArx2ieLfpxXAiCadaDqnV163SrPrDzGuKpDn"
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
