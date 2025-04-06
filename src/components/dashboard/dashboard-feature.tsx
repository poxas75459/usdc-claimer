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
    "54gwvqBguYrky5Nnd6cjDbcVB5XXy7ACgVuCoboSLL6ufSSYsb7s8fUWRuGpwY9W7HcMCp4qfjUUES8L3DtxpqQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TLf9jwV3H8vJBWCgxpvsy2XpWK3KbHc3VfEGH1m2jCxwywQPprZSFNE7QVwHT9Ys6p5thdbtijXPcQhzdUtHekp",
  "key1": "5h5AkaNVfNN5yXkfuSx63ctNxpa5PAJc5EiN8utQE4mFtThVSnxBsRhTzj93ghXMmMYgU9B6NrBcWUXftrbvuRTs",
  "key2": "eCdBebjLtZjsb8DMuKfwPVqAovsZzsrCQVhpwiC3hP3g6bCKYRjfYZrXfG42S5rMBTUDc5mJJ1mmjqjRAVWzm9b",
  "key3": "qc811R2diaevaLzQ5mW1jWZxweWKdRTgpvTghLdznBhfHf7thEtZCpU8aeH5mPnSVn8RsUZMCK84VzyLMtpZPCL",
  "key4": "bBJUbKcT5qf3QJitDajntyoHo2Wxp5J7r5aMrVTon8PvEuBnm1BJXHGn83GXFqPrKkmnNhmA998TPVU3nULF4AR",
  "key5": "4riuVaAhFjCgm3eKdkcM3QX1W61PDLZpnDP1w2Zz8zAKB5x7eTViusmRLw9y8bupN1FqFLGdp2wxLSUZ4LySeYs4",
  "key6": "38Q6HM4DVoYLAKSeicusjdNFfo9NSf7SqHwTb1pRTThAbmHSdN7NQxbMVzTe7avD4CaFun9WrEg28zoU5zai2yzs",
  "key7": "2BwATdAqCU7xa44WpqPXPbk2SiVtnV9BifaxtSNfehEzY4ef9wLvfhAoA9XamE8BBfVQiWgDi1v4pmvdJXkPM7xB",
  "key8": "fUYzBLxbAuVJVvHfCYgk78f3GTjXHSfSsLDNxkR4GmpDBYfF2gvu2JnwZBtcXrQrSFxURiLvaVb8CE4qmBwE7k5",
  "key9": "21uvFtWj4HZRG93eCVAmoQW9YNWNqrhTggZYMafucNg7Fri82Dc6z7SpKjsUFHmHT2jPYyZ2MRHS88o81SsQ8bVv",
  "key10": "4dyx84411k7BVQJfHY4L1tjsCKWMYftTDW42vBgmRzxcCTNNoPFjNwmjs1CPMmwTE9faVU1AdAztNgmi2UweCktE",
  "key11": "4aMxTYAVksJRfPvssSh34xb18qS5KvBTNR2PerzVaJicAEk8Hvsd4ND1dtrs85WQ2gnnENzAdTgtFMvWQz1VYfbA",
  "key12": "c1pexu8mLhzUxWQMJK3gJAyWswrbMHuexFGzeZB2cqJXN7iu4n5Q43WyZ2phAvr5yhKd2aZfKWnA55gr2RZZPaH",
  "key13": "p8TVodMgD5D11kNp5aR3XrJfyvEd9wuJzV5GQMKJz1JNz2NFELnVjdS4kDkx51Lpvw1abtNhismJKEV1XgtidEz",
  "key14": "hBpPcgtMneUBwmGUmz9urGUUzoU34uCidcb8626EkvWoC7wbE14fs8Hhd4DMNzMhywGXaPyFFoRJp4ERZjjszL7",
  "key15": "3F3WoTbicygW9WNmX1rx3noK48B2pH2Xgi3NHoYUkq6JP3bfMrbfR7YDQ6Twj9q92gdaYei5zMkb4MW4YNV64f7N",
  "key16": "5bRsqsubLavQQyRRR36T6zowe9aF1YjkdzpTFRyZGEWajSsjzGQvpQ9A2r83tLvxgHoLWeXef3965tZRc9qBJzQd",
  "key17": "nTJ3upQ6q579t3KGxxp1s7g9L1tQUwjemAPxg6MUsMAmkmsattnuh1PNab4syJFqh8qXhM8FXpQtsKHEZAQrz7a",
  "key18": "365iXzW7BXFaYVQceUQgw8N29wjD4omSz94W9uWkRrq1No9BASTNvjx5rB4XNuN4tyrt6SpUxaZ6Ab9zwcXYip5t",
  "key19": "3k9Er9YsUz4NpiPKApy6EdQ5pYT77CSkryiGiuY4G4ZmRRzz7WGXBfJdX5FjX1pijnBXbK1reVtmxTHTbWzBFWZv",
  "key20": "2SqQYqvQLT8kE8DqXZouaKfGowZz9f2v6yTXDasTP22ein4W23Lvb41NjxUTNMNSWCSZgtxhmKvj2hiJdk4DSbo",
  "key21": "29eNN344tV5vhoaYUPq3MBr7kFhK3Mnsoo58cpB6K2MWzixC3P8mLhaATxpgUTpx2Taddh7jJvXgGCCYvj1V4i4z",
  "key22": "25Dh141GUxwTERYHDAxTVfjwqZACzLPVwMiWJLCo3f8KU9XGDeqFmnQo2BR7LKHsYej2WkzVMumqLTDi3h8wn2e8",
  "key23": "4YnHjKVcr5y1NA4w583SGzjX9pH7ptRF5irQRgkTBQwYEpeEBs9o9YSpN3Vzg4NYdvPsaf5jQVWGGawBUHmfa4vy",
  "key24": "2BBhPyKKw1eBE2PDBfjixdhARX8pun58TwVfFh9mWKx23UPYiZWTQgYAheQYiqwQRFV9iswHj7TgrsNeLqhM5D2n",
  "key25": "2fCC1QGfEFnw11rb9SApbuz91kKRgXjhHeHkSXdUqy7ga9AYvBuXnU7eLZSEFDn5FpartKhN43DBmKYVc9a4xLX3",
  "key26": "31TgcgAwHasbewZgK58Z5AtUV3Wf9dXLTv93w9mR3VibntQDs6R86YXS3KnPao6wGT6SngS5cCz3wYns9hhBhBsM",
  "key27": "ikjcivTyG9UEAovBdfvZQSLNEcL5BHguPpF4BJ5EhptkjLACp1VE42VeRaeLqBQW1n5WapFpzPVSpZb6Cexfcn1",
  "key28": "5LwB6HhkhhNkKf4w4th3kRHEm7EdxzZ1DxGPbHNv6EQTJwuJz54hYFj49euxTf9DTFaQhzxC5h6J91sMad1BXCrm",
  "key29": "mqf9KanPnQTDyyXm5sVJGJWvhTNZ6v2iQe4ZPpRHJdQ5c5qYSx7gChYZ8YDwZdcV1JSK15137VrLdTjTV8J9gvQ",
  "key30": "4MwYYfuKmWukbEDvajwauCnM7qSdwCzH2KH8wKhv8bdPRqcBfwDp6pPSFrLR8GLo1d21cvWgefYfUKTdqsiQ4hKA",
  "key31": "5Cj3FnFEFFcMy8tZrPMvkkSuBaQ8F9ygSTmM9EYnt7HZLacXpyAmJHJwdk1oK8Kt2gq4YAiuTjx9x3ac3JZZiefR",
  "key32": "kWcbVidEg85HECQqS7TRE2k5mUAuD31ZJNiHJFSHhRnjChFtXcMdN1wr2DPEJWEUJGFymeDdV4jGH8kds3o9g2b",
  "key33": "3Y7Pcv6SLKLXk8T5zyi73KMLFTw9DaF5zMppphV3n9fXSCzm466PaF6emrttW3d4UjQQdPYDfjiqicFimo7aFZpG",
  "key34": "3Td1Rfv1gx72obA676nNfsFjKiJ3qUwkodegXC9SC1Cvia4YYSZtaVjSM5yd5ycSNbdEz7oHCmKbzT8DHNhxq8iL",
  "key35": "3LcXEtxfWqN6Yx9khXynJKjGYyHeEas3zWaPaVG8Dqug68fyDVMSChTJk8KCt1eNr2q2Npn6QVrxvwnuaqDbG2me",
  "key36": "2mUrwx8MJmut7JxuSPDsRrpbTXRvWeeCUBtmUuZqrRM8dJj1QErfQtKioRYghmrUAnkyknKS35XFB8CbDZA6ryhR",
  "key37": "5CVBRJ6EVNrH9C9GaStUDTkCmiQeSUxM4WQ4Fy1kcBCXKwMRx3K2PLQrEnZtXCbu1FK9sZiXxuSi9XS7YpAg3Nyt",
  "key38": "t8LNQYzNCQsjtsJti9JRNQFgsNTjFwx9GJUTF8ryRpfSJurFoD4ZHtqaCHDtMLneuXBt8ptMpRQv236L2Xerg2j",
  "key39": "2A4jFYUy6tRfA1WEEM3urpy4YkidSCjNVhY1Qi2stjfZ6mjzjzDKfQ4Q7f9LGH4L4uK5jK85tLyhffhJfE52EEGK",
  "key40": "4wp1a1LRkWKbgMs9UC4YeUkqEhCz2vn4rnhfjSNWHsyGLKhCqQ9ZiJAtya751Cu2oysvPy2i1kBGKhNK5FnvzJaH",
  "key41": "2E5E1nkQUxo4vntXkCjsNKNtuZ7sC7GDFYMFX5wY8ewetgPFWyEu7Nsk1hY6qHSVLMoYXsS2N7rSARtSREM2Y8vD",
  "key42": "56fJ3oMUEsMd3sbdEm6q8hZxxZMWe4zESVW1dKYQavu7R1gbfhcYUhjyyHjC6PPuWh7ifjqvnvRqNr3Dmp757roR",
  "key43": "25Rq6EDuj4cA5gycM1yDjjJsEgnS3HQmsJFhB6BGY3s8qjPvEGnSDVQ2nhqmEu5bDgqoC9UW78x8E1uBi9Mq22x6",
  "key44": "3NjxTPjFFmi1Xu9r2YPu5N9kAHrMDr6X5HpkrnDxo6rmb9yUpjgVy1gFcuoQDf1D2LSqFnqujVKVhyRo69XVa5tC",
  "key45": "2qsBeYpJaNyDGTZ8YJKBwr2rZzyMDs6ALecfv6CVR7AMKN8NyF8W16bmJajAAqsyHhHrBVoisi5vrYhWYs47NQW"
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
