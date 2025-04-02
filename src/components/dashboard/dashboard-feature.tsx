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
    "4QrAD3cecWWmvS9RTTDyLYYhFokRmVX4vYfuAKspsJutb6mKco4VtUXDBQ8NbZsg6oP2sYsQf4uDQvVpJykYTGjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZJTi2hwN5JYGj5CxhqfxAw9CAMebj8hBVGGSyrDdqeNEkRJnCEW2hK5aBy6h9pfHYRvKgQ338nmmZQuhYxxsDxb",
  "key1": "3KyeLvomyha6ceTBr5y87V3JxkxgvQgt8vwsJsnbEmMD5JYsHVEiL5zWBYJHhQHYPxLNNLctwcFxdgSU4i1oRSft",
  "key2": "AXMcpv4nKRad7JSS1eWzaxUsCcR8VgaiPwdzLBxs3noQ3GqKWvAc8hZ4kAA59ifcXuAvcfcuP6wGAJvEhxitJqU",
  "key3": "89xCKwSKsJDKn8Lrm8ycaX51aZ6uK7e3P9GsHoxb3hB99oyDFYqqgJwLaP5ZZM9wsGXbEx7ZWf3VnvKiMJNjx2y",
  "key4": "4LUDRM3k5spyBz1vq91tgBDvLLpVNuSACbZ7ax715Q2znYvbLr6S7TVBs1pPqY2XBptYSfEhPAkwxBtddZ3YgwEf",
  "key5": "3Vzj3PnZnDo27JNpCwSxjiyYQ9znSBffkdRfNfGuovxKmxwJcLdn1AZpEViQLV1hAxqGLct9o2BwfUESWkb51mro",
  "key6": "ZKYSBBHJ5v6BBRUEvj6e9ri965Rry1EgRDzA6reYgGBqGmZydYxvJnBC5WwNoX7mU2u2cfXfYEDJNAhtpp8YP1s",
  "key7": "3TZA95MxhzhDD5tarGZSX3KxkYcUScVt2nykL1DDmNdE4qXoZXJBZjqmrmt7Ti5d6ATybCwHocxo5KEEYQXLFUfZ",
  "key8": "uvd5fhS5cYRXuvY7uVbivwfWeRh2NWXjF69XBhwowtSMTWk2m6GjhZbHBFLFCDJxtx7iu8XDXiKiEJJSELuquPh",
  "key9": "4wLzjNDcnSzMce4sjQdCM2JEoGgPuStpuUFQWKYEnWKmPHEukh7Wdyz4tD9du8DsBSqGF4TteQKydmCRBD8yYbML",
  "key10": "4qxvRsds7zix8CzvBgpQALDpWHhkL6hRmN6kZhbHa9b1Bwjsuo1gXqp4b3UKLm6d691EeFWEpo7Zj7p3hQEP4d2i",
  "key11": "34G3wT8UgtK6aNvTggth5311CuJc6eKpYfiJEeb7ccQqpbga8WduhWhRkwHi9bd4BBvZfTukUGuv4zMDQgJYyjQx",
  "key12": "6W611fet7siHeAjbPAFTARQp966fPYewJYgDFuNnUmd3CKkSrYU4vkpJKcvyBZfAf2gWVXG45v5pKhd4VzKJaw5",
  "key13": "2RToSXxjANwP2W9yz3CSpBmw1vsZa9p5KM7LCeoxT3X83msZrffU5WohxPbyUN8D6jCjAEiCJCx7vk4L3W4n4BA6",
  "key14": "5FoZMZRbRqbcURh1QVkEeJHY14FxaBY7u6nqJVEfm7QT9vrcHKzGYzppETmgq2cQEvWGw9NkD4LBh4Xzbw7bSSLu",
  "key15": "4BDGU3rf6pi1p8AgW1QkJMe8ai7t4XeEHaULjdJiYRtL7YTo1gxyFj8tM7ftGydXFrX8oa5SCwj3CxduzCNkzTdS",
  "key16": "2S7Aa2WPzQMuqYoHpuMTqNWqF55aiL74QDLfRB7Zhi9ikR5xV4gn6so4rDSvRgzSPY5D4H3E5VGyucpjGZczB2Rb",
  "key17": "2Y3KzKyziJdkkg1A6aTWbB4Pp4ZSFz4hBeBmKXdK3PNPW8UD1H3Rvw7ARqsxz7D1CX6Tzz7qaZ6PVPUfLu8UPomV",
  "key18": "4vE7NDuqHzCojhkamxXGb7ziTMFSFffe6m86bYuxmKfcMr3qxDvvyaKJnkfJoMnwacq658HQWpTdpvuhPeURnCd9",
  "key19": "3Z8nfVDYzUGHj7eHe2y4ZAX6n6yMPS7LMN6y2SH73MPVV7CcUhMZArkBcj14PYD6xmbTV6qCh5G2auWVLqGJniy3",
  "key20": "5ySr1TEVR3EVxRA2a88JFgfEgvrcdvrxPjYZA1s1jWZzkRZpQ64qwQRos3TFf6WHxMNqAEQYw1hiQ4Vz2L3y2MSv",
  "key21": "5PhzcjMoLKC642tMDEFCUMQ8K9jt2vkKigogoofhZ3ojVk4WiJTiEijD3Yz3ighfzFMm2rZ9LCKVDVxqytYLdKoS",
  "key22": "XbYuYsf7MGAZneeLzfc248KtDRAwRZ2Ho25iq13jPUPzZpYR47kSkrx31ZhUTNhPjaeug37pA8UAGXuJ81t791k",
  "key23": "4c2TCZSkr3qZrDPkR5boBwfPAG39AMT9vtqDoRef74nv3PzX4E3tuxt7ZCdUfPpePfvnH7isApNuoQVJ4MNSA3y6",
  "key24": "4D2vs7nZJtJNiZ2sPd9sZYx6wkaBXCEZcpPyjg2HUh9ywS61HoQkjm5yBbW6WS5Hjfpnbb8cbwrFN45eGWc1UFQe",
  "key25": "2z5yH388t8i3YLFvVBqFp9NdEWi7wqu76QLFiP6gCquXUxfBEjYPq5cZrcDjdaVw1AGHwdN8FAfUszaujmK74B3X",
  "key26": "3s7DqV1aJJLcYuNR6vNkTH312f4DiMjiSwvMFqTT3Kb2rHwDRdUauNLMUPBqDmNM4TPHKkKqEBAybXw58fqhQMHP",
  "key27": "4F7WeNvzNtTjQ4ZWewMN7ib6LZT42yjziRHuf9nKQzDG3V7CEquqrVbdfEsTgYngxbrLy1okxdxQqKvtCeiExMLo",
  "key28": "vMRNacTwB9Vw7C4CKXER7ByNxHcF5sbwKDM6RN5oAtwScqyXh67NakHVX8PUpQS9Ddc84jLhk9hVRCcorCDjzvc",
  "key29": "3oq5a46iKFqa3NT1qq6CDZ7VGEhNwjrHU7m47iJho8ZPeUNNh34v1UWJV5FbmPwHRh2p3uYPukpsCEpDoSidGABK",
  "key30": "5tTQPcWozxZccWWmvSs87WRbdPQqT3hanKXtSdHgPYgJmtApMDZfHcsvutnnuQf9gYCevrwwVsJXoSCh4ckgA5tP",
  "key31": "2tFFwZHSRGQVF4JRzFVcS7W81rzHCWYjLFiPgJuUEonHyzXj1W67hqsp6YFtyjprAtRACZ2n17eyxf9pjSBfHuSz",
  "key32": "3JfbpQXoNN1rvj2ro6pvQMvGFsgBX38j26jPBV5LMV7PLAgjhvcyH54Jk4cmPqDZvaWEok6tuQczAaXxNcVHoHe4",
  "key33": "2Z2DGCK42YYxrH6gUyPjPyFpUszXSQgLubbAbJnThQLZfYxYmdVqmxKjVGhv7G2HhMnocRPT4c5smTvQxaS67wTb",
  "key34": "KcbvKpVL5ZYbS9reTajEEqQkyZ8AK2RMo9BwJHEfhd7Vvbr8Gcn1ZY2AXNjw4HVfUXsCQpGr66n6ro11bEJ5JKx",
  "key35": "4CFBs5HASkZgUA8u12AnuW1pSxFzXs8fyse2Q7xDBRTULGs33WRyK6VXgemycEC6iHAjS3PfATYQn4weQLJawMZp",
  "key36": "4BojBtsZQEQvr6CYDsXKwSkRzbA5QfdZ36MLrkbcuLn8kVt3bKwh7sqPkpEHvN1WaACpan89zf46BUPiADaVbWLt",
  "key37": "3wYDE9o9wBjjUtvyaLcciNZ7uGRzhGF5QzCHYghQczdQkUVVrR2SGmLrnAuuJWTE7ExiH5wnoqw6FZtPivnfeYa9",
  "key38": "G6NpvKrcLjE6YpX2rX9V5ub1uLcLnzWZenzJ6jXymLPVMbLez8v8C1vdUXNiRuBg7u2Arwj28DdpD5qnf52Pdof",
  "key39": "62jHmpDmiNuxp4bmRNcwinHoFP9cD6cC3G2nSvVKpf4NDK2KLBg5SwKFXTKSBWmkMf8gFZ3yZEqa17Vp291VgFhs"
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
