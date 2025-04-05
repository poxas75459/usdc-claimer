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
    "2HpC1N9RAD7hMx16dAwkmdKfdUZhcuu4GXqNJrQxMYEtRUQfWRKoCJ2EbUu6HfCuheFZowkiP5TqvhZjKnyxScdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537Wb9rTLACkFuFLHYT23MB8GYDv2UpTFvxpFkDQK9tti8JbauwjXKm3tacFiAv9BL4BpqcqukqsaambPqco7dqm",
  "key1": "58CGejmvw6qiEbEFLzAvJp6XuMP2QGNGYrQssz3yASVxnnYuD93Ymhn5HGqRTJiL8ciBPCnRFkQYqsizDwCo9nvM",
  "key2": "3hCgL3uh24NFnsdruWeYxaBi9DcahLBQSBmjP2ajr3rCGHPpvh5idtPpRkpJZv9GP6xqgL6cpqLspaokX3w94Wy7",
  "key3": "5uLLCXjn94gWT1pBXLi1YUN9PLkLtnk3LJCRGj3WKJk92dDMJ4V1EBvY3dj8XjiwcoHcUcq6QgQyLeYws1TiTwFP",
  "key4": "5WRU4hGzWaA6oq2C6Zsuij4y1vCLNGDDTvEDsj7S2QrwJUe9oTVEf2nGf581P2ScqEMSz5QEBmnPT3vtUUTCTTxT",
  "key5": "4DDGC9S5tEX2ztaozkvcj6gBjkD7H2wK8gshKBEqQH6aTwUBJnV143mUVSMtHrnf4anRbQcW1k2E2YTSXYTnjT5c",
  "key6": "4wMah5Q96mjQwQPtjhnDEsQqy5abK1xbLe5vE1pVtNap76U8x2UqJwjRNm3v5pGJ7NvKLFioquFJfWT7UbZnycnW",
  "key7": "Cq95tdJ5VvaurwavBAN9DPTPibVLUYdqi8KUTTJ3Pd3jHXQfMmnC3qFHRxXjWS34MmrEet9VUx8Yfj4d87SSiAQ",
  "key8": "3P4XqVdNH8Etb4Fvx183V47bv1CVZkj68PpkpEKhyFKkUZsa6NuucpMRJaH1SyPrd2n5wQt8XzVgGFxQbMH6yYuu",
  "key9": "4o1ySmKLF4Ar9UFfHKyTeUAcJ47eJ7FQJKQx28nTg8uKGouyXPtHwPXUDj8v3PxRTZSu1fFKtq1E5G7E1Cjm8nch",
  "key10": "51WnADX5SK7c84jXAG3cg1UpZYKphwRGrxzqcWJTatXXSrwYeNyTHZRuWiL5YJMbNyGjhqLg77tXCypDR3LezkJU",
  "key11": "3vNpZKFsjo1Gad6GkKVwHXekZyNqHe7HdyCgUzd58kDU5dNDzgc6tgp1AHJ6APmRvjboiK2827F5CLF36qPgDhDy",
  "key12": "5uYrqpaDSewuzRiCHh7sEMroryN3BMhkjLdpSgqw5jUM6WLy5VZDHskJvkC6rMLMvKn6qeNiFZt6VhNhWYDCwX4v",
  "key13": "5UsRQv8Z8UCa93KBFpeg27s6odgHRm4g1RZxbnDRB6Pu3KLuC75QioUyAcgFvnt2yMRTyonLvq8rx4TYfXBXWTG1",
  "key14": "4V3pqmJcWCQKd4x2iXqYeHpqUGgb2unkc566FBsor7aSyTHmKaTeNEZCPtjcGoxhqJWDn66232Y2pLkwEgC1iZX2",
  "key15": "5tozaVsoWHBt9jqrdzck7w7TcAtBcTbrCYmc34aJUEE4W6rSwLZnjdWYx4MZogRWfWnp1ochzJQ4M958igpPFDGK",
  "key16": "2QEGTFyQbDgyNGZNJ4QNH7wgsa83GrgaTM2f28MLeLX8JRcR4EFoSThYkeeoxuknbVu9WM8FmUSRfEbr9JC28VoD",
  "key17": "4HZXhFsG3mT7QwD5NdaLcFNyMygaHdokz8CpdVaTWtnB4RYuiMY6D3zGQo7Va9iUvrEguun3CDretdTmDbHAXMng",
  "key18": "2FKEF4DqFJf3utaShGzQhWMLicz1tHQdsST6umKijAmHMawAMGUu7dpHZ3L2aukuS3pfDSapgAmwAd1J9Q3Mpuq9",
  "key19": "3JuBNux9ikG1f2rkLSpxudpi7s3DjMGXqXQpq1LLVkQDkAEteyQ7H3orEdQsJZKtpqmzN5StqoXKcZH5PToSNGKt",
  "key20": "24ypdW33yUQWHaHy3KDTayFtNn9CJHuY6U5ebTmxXmNDAkaA1E2ecjQaVztYX6m1ZMkuB7WaRvMinQzebi9r3ree",
  "key21": "659pihKDrXFgn19FWP1LEwDEcqniWr84JV8QptzxvuVzuT3Zv5fL2GA4bP7WakTbN4KKE2yGvk59dJXPcHhp2Pgg",
  "key22": "ugciH7aey8tkUY4X5X4xx3vLeaqJEF2KD8Cdtd4sisrU8m16Ac9ChhA5QBS7tf1KL3fqqzJuj3Bn4F1U4hfT37X",
  "key23": "3PzgASsRnartht9k5PKdiu3AVWrneRpis51UK2BtvQr2B7WdZVNBqiLYRUBafq6vAqstB4wEbia1NDWPuh66WjrG",
  "key24": "66sf2vPHJth79JzJcZpS5nnM6WFvVqY2mMJEdn3MXfSakk6gPqkw7i8uyfmhkPMgR7tL6f3vctQAseCNSScaPPDf",
  "key25": "5PfQFyWCe3WkjdD33pSEkonC7ZZvsqxHLCEiHt8aPPK5AgqfEdMMjWDN77yPuJMBtrRSCvRN7Lrsn2qNFC5PMeEX",
  "key26": "48dUJAnLkQ4Np93p1AXZ5P5Rc4HK3RFBCD4mvx6PoFcpr3TkzybxXTvwND5emEs1DL6vhTaDdwxdVSKopu7Pt2dB",
  "key27": "7HnR7ASjDxYX3XmwGS7hKFd5Ptk7LhYduhiHUtDf3coPTVmu8DNPBUpwyeQ8rYoi4TxvRcZ8Ed5bgCekmpKUpbT",
  "key28": "pYVuzL13w6FcWEn9jz4m2Pg5kcywf276kDrVfvG2QK8cvk6uptUDS1un37YerQTXJqKwia7F4aUuwYE8UR4Ys3P",
  "key29": "LsZdT1uiYKj4u5eAVpFio3eWDTf5rSz5rAWqrtXz8p98PUYgZsbvxDDQoGQUChHoF4r1dPcH19gZ6itJ25LibJ8",
  "key30": "5bGdzKM67sdT9W1u8EpgiJCv38JMvJV5FbATBbbYdTm7Kg6QSWxbidxATXgnj71sY6k5wq3EZTXzQ8YWpFYZs8iV",
  "key31": "49EDAyQPcm4iczpUZeHXEKTw3PzwAVvswicg5TYVUsTqT5nyu1gMJ9osEpEnE7h7kDpkpcAsXhXS9LTzW1MC4aM2",
  "key32": "5CMDSU41tbUGRCXP68ttPUe7di6u9ZQuWm2cW1ebbb66KLGRH21oSAEeA4as9hsVazHVZqDJ6JAExkKUfsNGAdSk",
  "key33": "2PqBdPtwDQUKLwnKToBVT8mA4FPJjVtR2N2nJ246WRW8SEK2UZVD8HVfTjEqqpW1A6xMH2qaS6kwNYBT5Jzv8hGQ",
  "key34": "3MEjgvDekC4i6XpU91T5P669dCT4zxMBTezgcayZMStQzA7guT3QCKLoBr9fuGytAdnxFXi2ngRTFJvCHDnKATwE",
  "key35": "ziANWR59sVGse8rTc3V4gCPFY94RbV9H6apTLzprHeCZjV2Qx4u6Bcq2jL6a8ED8y18JbvV3G7cyc6gbqwpUjLc",
  "key36": "4Zhn3y26T1W6gU9bhYkciY2ckgb6WCGrY1uCrGV6VZSYKoe3mdPX4NQeXe68XuubjKNyNtNLZ6yVpc7p72ekuMr4",
  "key37": "53LhQe9RWvG2PCJXu6v93rHZtxETjQ363pmQ41Z3PY8r6ozcbq6j1CeMa8rQzoPonMywMX8BHxDpZ1dJLZzdNNot",
  "key38": "4oMNRrx972L8MyWa64YkU2f7Gr6NTZPkF6AxFzb1z1C3q9UWPuAemL1H6FBMVryf16SNrh1yNGNuhUWGKU4ZdKin",
  "key39": "5oUzqhCA6XTBEGofhCA7RbPQzJuGjct7SSr4r1XGKd4GDcjX42nTLtt5Qmw3A9YQGmEsQzsu6bCRXpXBT6boMjac",
  "key40": "2zM4P8Lb6vE46E4FSFm9z7QQDSqvwHutBE1VT9UhU5DnHgM5W1VrczMFuQEZwNYSfCkyERi1PKRnyZpGDgQShXsX",
  "key41": "GQouXcYRafrtwTtaQNKRRVxwzEArpUaLDr8EMtihDDk8PQTreYtAPv7KzFwk9FHDeh8zAh3bEXBVsWU1CXwXK2A",
  "key42": "2YfrBXyxdJieCa2tiqZXQQ7rNxqJ9ATxKpsmuw8A9RZUDkFjbk9eHhgdacxSSPZzuH3LTNWL8rtB4gPcpDZGeynx"
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
