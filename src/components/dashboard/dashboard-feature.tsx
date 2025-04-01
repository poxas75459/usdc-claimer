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
    "2xkGQ87vCgm24bFVvBw28v2hGUtSrvhcp64xrvaiga9ipvNi781e6nxC9AysnrAzVEAY5TPuwXSYjE8rM4javZ4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZvSnyKvK4C4Ma8Aoi6jY6geyvfDk44UYUFDipKDLGzyFCJFETYgxNQZN89vyF36qUD6otSRrn71AjfaE5sUjCyk",
  "key1": "4xk4YfrZqHDVUUY3sc8YedGEXoaHPBhX2xPTcV6E8Cuw9ezCL1iNYzztLPqeTCtyKTN421QD2rJw8TxkaEb92YFm",
  "key2": "4XZJrEFm9hWweYfmUZs4RufGvDyTqziXiJhS638LhzqYJrwKcvwMPnQScjrkLqfrmAjXCngpxnaS27WRbiT6Knmy",
  "key3": "5oMP9GkTbTTqbmZVdHxn2JaoNpooQAN5QQKLw7sbKGYWhmZu4t2oJhHDPmoe2WW2epEEokq9KTXhBYKj8dUWFQz1",
  "key4": "3FToki3vVd16AfjVDJ6kbFu18CuSZ6vcf9p2zSN1P6h9AJ12adtf6yjGPFFEmuZDFb5o8j7JF7VmMNia6KysKyna",
  "key5": "2hxoLZoL7h8emZa35n7zuoSzdHPRxpq61FkzVaYzu6JCstbYFzeLi4ZkibA6xzi2mpnB5ysxZjF1WRgKuzz8xMxZ",
  "key6": "2XjLdQYKMctmXAswdg1SEHqQezmCEaAtGcKG7W4ZsmmwEJyAhDKCdJPekLCmBQ91vUHRTHin8AZQutmNNdq4DWaC",
  "key7": "4LNiVgpRCihdz3TfneVTwr2swKQts76U2dxCivev329noiP6PgDT55juLC7nmcgrkoJtAngVeyupcnHTtNChADe5",
  "key8": "4mrekGSrZSDF5MxpMZeGugx369HaWPbuXSqf6jC6QT8mqcrmBSLTL3yMMr5xZKWGhqj36SyCT4NhUHPnMM53Fthg",
  "key9": "f5xU3AW9RSQafqoWRnHMmJXuukg5fkFuBqiUbbqCiLQ28no8kR3FFfzXJKMKEgTgP2vLFUmcnMW5RZu2n6CtS9m",
  "key10": "3V5WRXVdvnN9Y81jyaMxEJQQMiR36fRit97C9GahfXhhYduhgZCjFMs9AK7jQrF3zYzmLbU2GvYVvVBkjr6ud8BD",
  "key11": "2jBMukk57exn4m7ZgJNewRyTHTSaUKSvwiwEgJG2F2CEjRHmgbMY9tr3Y7y5Kvy1ML33Kg5BxdsqeEw29Qpbum9P",
  "key12": "4ykUcVqHKUVfv793pahtjMe2iCvG3sKowkLxwGVYrAeMGfGrcah6TyBXwwrqnUTnvppGd1sufJcJF9YPXCgDHNnh",
  "key13": "5QfRy2VNhcPYQqkAzPyduGwywXvUGiyTe8xT8S1Hs9e99N52Fgs6xEBcm9Te9HrjegY7kE4ffdYmHmFHyVvmd6s7",
  "key14": "34nErboaQp2oyPNFCojKL7shPgFmHbkUwRoyKWJ1AKW4ZAMHKFVG37kpWJqCbnyjQq7jWmSH5GgRxtq48kGcMJQA",
  "key15": "46UDuhV3SL6fstNhXWw7RfG9HN1WAU3BW6KbZDEzDSsnL6AUKp5QDUBkX93W98msAu8CGuSDTe9uD27EmyCFQffD",
  "key16": "4rgusrb3oTv2AmzVj33uzBgCuUhPyQFiYKWePUwRJQWVq2JDGJf81KUhW5NYUUxCGJ7uyd6MtX6ZcVksBz1u1Vdi",
  "key17": "H1zkGKb1mbt1mHsx7TVodzj7iwZPiRRZpCjGzMVeFuXNBBnNPCY4vJdJuaGEhy7i94A9db7kXUL6My7Y54oaucs",
  "key18": "47aaCp7mMtA84QP5DzBQ6tfKYzZiY6rn3eWqDDgi3hrDRqCJqTDM6WVWJzW83YcanjHXvj8bXeMAjEkRvfsaUwSB",
  "key19": "5Sxb9PHmCS7TKcRHZ1kJJXAbJr5uoUtXGNxTWsJiN6otTvN5mVrEKTkicSyosZhwdpDeBpJMWMEYa64CGaUfKjcU",
  "key20": "2f5bnUYvPGPgsmLfTE7FUtGRndfgaCirMcGr1r99LANK4bxmHY3sBUqCEeV3aPnE11CYkvaRBNnBBDzF1HCwKC5u",
  "key21": "VEQiNoeCghoh1cNG3oxku1DoLh51cixgd1uHXyDKHyPFuzkrMaPwXJFqAUvptwizNegNNsHCNhNnWcK97wGPzUi",
  "key22": "5NuUrvEFFkgJ26ZxM9hvLZeg1oURt58eAVNqNChXrMgLvKA5czN6pbg2TgrkWMvfWN1nEv98WdBhcVVmez1aQG1e",
  "key23": "59JWs3MQXBSKX6jcUuirJTin5fdqJuQjDHJxmCecYpAu5ttwTaT4beoBv1Kvt3HxKupR6M3RGoBb4ft5aqhobTYp",
  "key24": "3uNZh3eapmbFTScMpoSuFSXE8BsBqxtjUGVo18RdGbSgxyrE7mj5Wz41K1kT11x7ngCm6RNN7Y3DXtW5Ryv6k9RM",
  "key25": "2oucLzcQXb5k8bvo2tePRh8qTRvMrSr7s41rDjDD9Mgvc3C23vhDwFknK37RUzjkTz6DAwjHtjWnXH1gCwQsika6",
  "key26": "2urxes35buZ5XyKe87TLbrnj3bVRVaaPQMxugtJVQDQ3oc7r8NbVT2urPoD6BVrUapvfyuBLCSYkE4WjzgGQZbsz",
  "key27": "4BzUym5ejB1trgWaKgHq4GaRvUPkNPGqxRvBtvJAD6PTmLTUKAs9hjstn9GrDDD9ZapWeBHscZyfUxPC3oH4YTz2",
  "key28": "4pYYzkNCoRvrz5T72xTPnFti6Ay3pLzkFn4kKuFuH1wGR5XzhsJxCZtBz9wFZhNxLSAQGrWUCoYmh5wfF8MHt3dX",
  "key29": "278GNsn4u2NnZijwTHabCDK1WRuQzFSrroP8Kt8vZYhS4HoDbrEMUmAwhMXgeysKAxsGCjvj2vTQ9nmZsjia7PTe",
  "key30": "39qrXThcHcyvnSxYi8yvDfeW3QoqJcK8c9jbDcbP4fwXxGe52f38N4ReHY5uKwyr4cK2yX1ieroGcQpeFb2THkWc",
  "key31": "2Q6mRiav4YKVthfoJ7LvMQxxyGb3Y7csLn2j2rqqS8Kj4TeCS16CPMpdJKdjV8mTjNKw8k3eogCgHrxFHYjUrxy6",
  "key32": "oBBoCKA75AJA41QHmNE9yKM33kiqzS8VxiY9QqCAJkfzWLBeCkMmJVbUS9YRR5xCWabj98kHxJBRQvQhRMYrpWQ",
  "key33": "3V8QUYLFboYRFaBP2gnCLrZT2ztQNM6esPZeiAawEH9RMPqFT6kkBvQSRCAUBNExiGioySWxtEvGAYwugEpCREPX",
  "key34": "4E3VCJdxkuvyrsUcQmZtZyxUMdLm4Ksz9Cs2kwfy6CJiowxCVrWyV9kYX2oKT7tEJoxyL2y8EkirnnVpuqayEgta",
  "key35": "Vue9QdEXUMiQr5FaAkSvzzK1DseK5Dt2Reqg1jwB7DVGgT9UH1aBKgUz3GrYFjnAYyat7qHwjFZx3KjRfz3Gj2b",
  "key36": "38Y6DVsbJXQpEhGeBYScKSG2ZP5ZUyPQvPJZSUfugdRFakN4t3UBsXPvyxq6CNJEvU4kB9BrmVqeWBkJeFjsCbwL",
  "key37": "2iwLGtZJ1DC8UJ1NDsZ6eNNUUbYcUwBJphg1q7iRajqvya2mzn2oUZancRre1mr4QNpYnPUX5R1gPnUWddDJ1MCK",
  "key38": "23L28AakwEQbR5b61YAzd6VofmG3FrYLXmYkdXG9S8vVHKXtL6rUky5uH8vDmqRDGoJTLymRxyVtKfEVHwTkju2F",
  "key39": "3Lkwbk9awUzQxWodjNxpXftquopEiKZVGuSKvUhYV3yhUSL4FzwjmdYnhe4fjXDRcW4nnmiGUrfZT17CWWD8T8Be",
  "key40": "2RpsYYdB5Yp56vNBbKdjF7yvtARFmK6ev8FMv9mzkmxttZAGfPzFTWKxNemP1uG9xLzqQrSiCiYvEaZReTnsHTdo",
  "key41": "5QDuoxDUzjMsGGiP5jdymmUPxrSadmo3kp1sAQUjwgiMRbBHoAB6DQ6EoKXgrmgzhih58M6mQp8gse53vtNkhfxa",
  "key42": "5KyDtSrMTuAdNCsgGtkFE8HA9iVnwC635vvSwizJMzJwSxFwsw2qUPCLhERcKNMXdfGAQFn6F93zWvtXp1p9ubtP",
  "key43": "FVquxHrs99qdFhbaiLY8Pg93w5PeMNhqCJ8s9NSkJ3nTSFFj8AT18kTkwr6L1ct8rp7J8KPJWq9FgdxtDuaGBS9",
  "key44": "4Ycw3ymX2tYqY61PpaNKrx7xpYzuYc8AJQXeFx6g4YiptjNhJk8n6pQ22jRFNpfn6rBXdW7pQ1bSWbW7v3yJwEVA"
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
