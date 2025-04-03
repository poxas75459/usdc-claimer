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
    "kZnRuH2n4qFsjA4FxmABkv9WtYLs6wqPXXM77LuLCdP9BMNNam8Y4r4armUvdGEVAQFo4Cx5tpv2KZZTuuv71Kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZLjf3u9RermDNbbNfT11MYvjWKJy4EZv2YNupgXrAXHCx8TtPSge11tSnWcJJu3v3wDRo7n8X6NYJ9gjZAZopiP",
  "key1": "3dtyDk6Xvax6jSKRGeqvThHmuVEKecbRcguZhFjcgwSZh83uSrBUrXh682MXFDJFTTQrLSGXYPrUEKaRrdTCRxmc",
  "key2": "3rjMYz4Wv6LGc62qNPhrU3YPFZXmiydsEVpGLMHzAHrMsGCgv56bDPN1FYhd19nnQWHqDHPvtcESv3neGUicoM75",
  "key3": "5Rw7oHma5G44rmMzngRVwTiNQTZoPQpZMgdaZzGa9VvdG24kNGSWe4ZSGC9MDMg1yNVRhDYE8iREkeXWEegzns7j",
  "key4": "64A7FaGc2ZdLWYtjQerpsUgWYedM2msUWCn4RRm5Pk2cjPhhroKGQKoEd7Mbmr9LJ1JSYzdYRWbKWEnBMJkNyfVE",
  "key5": "4bhR1CqTu82SSiSwu4vhMvFWuEQN4kgzU98zMwJbtLtyUfPBUt4Y9AtmMHXo49YzP4NwRPfNWc3s2jUmdYvbgARj",
  "key6": "au4CunqiSC2i3tDSvPqPesYi1bBAnHCei269BUcJgyMe4Jk6s2URLbdPo7prXpCguT5vf7T5T4h4F5MXMw3Ltzv",
  "key7": "5Hb5MUURceyTDkfAj6AJg1XftR9pAuXKnxj5o5ujt4zVMUidPqbgRiSr1GqGou8Da9pqmWQVdAqBXjJrEz7zKD6b",
  "key8": "5aghVExiwHnVZErcut4NBDVYCehWMNPTyDQ8DbzeQUA1PyqvKzKxhz3VDhcm4Lczaz9Q73oJhSP8dvA1S582fzjG",
  "key9": "3gvSgx9C416roS2CMYsvtRawKf2wfymMpRiPJCjx15nw7S8cVQUjFFkPNfLHvTUNmNiZu4JFAmSWfJyVA2qwqtP3",
  "key10": "3UHzeWNwMyd4vUoQj8SFiMgyCCaU3BDh2Ca6gHRD8ctdEvJXgfLMx4SwkBJ1AtbM3HSTmucA5iEpWkJ2xVuibfSa",
  "key11": "5SafN9LbAyiZoiNfxMPEpskkpvT3RX2eu3Y2XE41EVxgyKgpKuzzw4wAH2x8hWMV5DWZ1vPddb9w2Kaz2VR9vjBB",
  "key12": "53GepReKXrov9ZWbNKXkPmTi2aNdYjF4REQ2VNSWCPq1uZST2kk1ciHJyhcsK2iLEVXob1QTMbuUYEaixS4VvQw8",
  "key13": "2XkSVpFpar3uDmtcF6NxNBXoqegUuqEKzNEe7iNj9m7u92GZJMBALuof9ysviD9QDL2avrmfKd8f2xvgWKMmPefE",
  "key14": "3hrnmRkWRDskPTw2p2P6XgfY9e9mwQN8cpDLFMHbLJrtS7Vye5pMRiWjmTy8J332RoSEUCp46C6GcztxSrE1fnPT",
  "key15": "2sKcXSWUZM17y6HXkgtXnoodcApcqNzTSVZs896ayrfSpFR2qd7sP7tSneTpSFMXvNLPaNzebNJnLQqatDcWTD8M",
  "key16": "TrQnq3uDKfRQBziVVP2556nTfkiL2ZA3qGzibBrk9GGEV7vfTMQ4uF2NMx1oKrY1MdmdrutQirMNHaDJHNpMLfq",
  "key17": "4WfPVA3x59zMeRdncS6oRot5PenSrcWTiwzVthkoSpQU2YHvLoQnfZycQQwSpMgL7pui2P4wTPwA9M3qpNojG9of",
  "key18": "2UA4U8UvZz8MjFr3rtggxU5DJSiKTS1wuGMw7M9PvcjLj9LQtVV1Az6a11KFmGrqzEsz264v8z6nM22DGmCmSSnp",
  "key19": "5FALFW6Lt8W33V4FK3T5bRYPjnEKDbone5feVjKtw78ieNP4R3yUE5MpN1z1MES7Ap8dxxx4NhyMqkGvaPUG7eyB",
  "key20": "bXfZ3wDbg2tReJpM2ea6NdLiAVaXR5gMBePysjjquwAs12mVj83qBrn9hzoEhA95JCSbvaJEWodcBeaUmnETJbj",
  "key21": "1eSUcU4as6zzyyNcWQvJ3XawRGk5imcHhG9wNjCLgJrB12GpkWASCr7UrHhSjmX6t8k3jHHJ8f9tCZnctd1BDsF",
  "key22": "ZEFYpdbkSDcoZFxqzG2UMvD9JcpuzBzcNSkqfmsQuiGZCBUpqMeiD6HcsEso6D7m5fyaYbmgAohd3Cx6ewoUfST",
  "key23": "KWwjW4vvJ6JBeUHCZPhGkrVPFZsHFdqenEe8SPJxymYoHgBjYpuQLm1y8PMqTGrBmzYLdrtCdREjEeCBzJttgaq",
  "key24": "3Zm8nULy17gawVqSPkMuA3b8C9K2kyiaCgAiZz8bbHAAFTo967qApZgfi78rYwT33bqZooaJLpCYvp9tYvnKpGrn",
  "key25": "2TwNeJFPafRAzLiLDn9RxtZ3sTZUfA8xCTpbWP9wmvcGgnqwL483BkMR2gryoASaBFbfLQpyA2WLZG6FyBf7F8AJ",
  "key26": "5JMqMc6JFE5FjKYR5YEGf7FHBQAhnmULrDJ1skcYREjmYU4fF1o8oY4iKDBvh5g1SLsu4Rh8xPC9DfxNnN5zdbGK",
  "key27": "5LFxSav4QdgJgxy69eSSEDnUJmVtD37MySWQue64ZWacoXvayUn5c96j83cGPkr2D24WTXuKRqgZfgsbQan3v7ys",
  "key28": "5ejdg2o4BPe5Sq2cLJqGS9woXjCEiUkCAq5d9v92MFTWHr8J87NxFaQnSxWLzZ18Z3wgQbmijNhECUroUQpE1ob2",
  "key29": "63HVzCQMT8CRNgqLgyzjFuP4hM3SvwAkWudu8Uv4fMAw8Wbf7xcbKABpTnsAeg6ALXyWzQ6Jfg8R6s7Gsz1NtVee",
  "key30": "LLKjydYKKgqAQbmQYgjvJPNtSUeZvQ9bVKDpUakx5V9BP7teMb6nhjJ4fFXph4Yc8BDymfxs3RjUz5h7cqCFoGo",
  "key31": "2PPdMNdimBgsDYTaJdJxUfYa3J35KmLWoxWmDgy4P4ajNLvdkhXJnwPRu89FT6gZccWnvUaJiZkzMGvYPKdaes6h",
  "key32": "2JvJ1aGvxAN9THXfHjJjR1U1EsW1BcgE8GPvLhub2ax2K43FQERDi65Zist3Zbg4zUrNMmh5FzexJepyUUhz344o",
  "key33": "51k1nmLpkAvKty54HqCKZNhKYTyfKN4tLnbvrqSTvd1zJoPyMgMQStDdYG7zDogGixKo9XcPfoBjYSZdgLQNhHYk",
  "key34": "4BFFSRaitEMvBCJtrtUvDaGwZ6qRjm8jdjyDgCgLxYZeVs9bno8dJEgPJwhQfbG1D3DdLB3gnfDL4behJqZTinRA",
  "key35": "4WXGmJxYosd8hXqSn6bpEiUPjBtDZJkZobtWpRktvJ3V9dUqRYbLDmF3ULZNpPdSyZs6c5r9gjQkz7tsqWnMbX7F",
  "key36": "T8KGnfiHxZboJEsMVP9WxF6vDrGwab7LCgWeW4gxQYgnzzMyDmcuXQddJwz2CpKLx1hXoGCgXSdjkJxvXMd9wRe",
  "key37": "4Zm799uZjXYwJG5Ern8V4BMpjQrBNEeTQZgu7SmZxfdRj8EQ2NxLt33W5JwLZLHj7fNvgyT99XkRc5LuALzdxEXG",
  "key38": "2ekPwXxm5oz95YYvMmYXgjeCoBU3NPZyhUnrTjg1JwGEq4tcDVzuKySUMWpfgQn5C2kwZM9GqP2mKJSJVjq26Ays",
  "key39": "36ep99ojT6euNKDSt5DgoCfmVRzqKDFP6djyMPMajeUXYECp8CkJ1s8pHuPPvudDBc5eZkd9XWGvmwY3Y1rNTR5b",
  "key40": "3gp4tk7B1mg2sCRsxUGVGiKmAYy9xVF9MrJBa11HTCkZHBUC3N9SQAMgaFHC8tUtZgxWVPgwyZe3t1P6mWZwaJB"
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
