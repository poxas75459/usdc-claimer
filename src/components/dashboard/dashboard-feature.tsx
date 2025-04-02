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
    "4GjkTZLPxGTf4BgyspRNVvTNrzY7QynbhPjjR7AZF73UJz4ogJ5CWzfke9z7sdoXgk6s3pmKeQQtt1T5pKe7qWLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TNtsLMY8fztj3d2R5SQVFtbAbHWuszLHUMgWChyRCCMkfNUNeLqQYZfSiYqo3vQP9DECbRU4MRj8PDgju2fWBEp",
  "key1": "1Z5HTmtSdWBhjjs6teySy4cMCmEU239vpwejjL1MEtJGqdM7e2kaHe9U2TMNsDHBwVngvqPbJG52ZUCQKpFDiMc",
  "key2": "5QKi4LQ3bLx1CSF9vVc7PZY5Y5ZfDqCUqxhvqDJGDPufh1ctUkX3JgFyFshsz9vHojKrMGa8ZDzZJ4Zimi5EhZ7p",
  "key3": "5yc1ti37hSqc1UGV2BK2cjG8NjzTrsqQgjRnwQLkiKE6mRRnzK8BdJD2ThrHR7ANXLyKGPyBgtVzgxYUNBYKQKXV",
  "key4": "23qEPXQ1TKAh2r4zjLibqyzNhQhL3imtjbCEeyNCmN3N9vvZM5ittrzTbSugCoBQrT8sHxKvwQWGbLKuQwMaAzBq",
  "key5": "4fqhxUhpo1Dz3meUyQkKofVG8ZpYhL8JHZqsySL9dTLdAqeuCjFJCdqmMuum6bLdDPqPowqF2328R11jr3KaF8nB",
  "key6": "4XYuNTT6CibsqEw2e7mjxHYYCLHbEKe5FpSS36P2gGPg4roZ4rwQGYhdNFY4jkcqYiwNKteBeujGK9kJxayjwp9c",
  "key7": "5BhneCSZZtrYbXE4KQVTftQGDB6peCMTBNNZ8LDkRrg8ubKDTz7VjQXx6yi2TEThHyuQJXu6r6sfKDM4BZvwPieL",
  "key8": "48kHiLw3VVY912zoEmbS54gaNFnTr8dYQcAhsdeAR9yMaz2GNig7ZgxugL9so3gKFQzh5eC9FsSvhjr71rmh1kdw",
  "key9": "3yP2f6V39usV5jrPBMfrjKeSa97xXebQYXsAKi1TjNK3YEY5Me23tG88nSMAkLZQZiSJJVPATBDkdjr7jMZe1NGr",
  "key10": "WvwKoF5AeG2zeoRqqNgPyKP4nYiqq8kLEe6UY5d6cAvhhnXHMAMDmj4Y2Sj7zcPndYyF7CgC7PgMpoSMSMPwpmQ",
  "key11": "39kzFv6uEeJA7AXXGRgyyPrBvSi5aKi9YuXC9CjzcTzZ6U4GNjXmGGUwam8BPhieHUp5jvGD9wf83QPJQZux678i",
  "key12": "2drUj2pHUZtK3RZpkvxnrZrtAsVvq1nQEiai3pnSS5am1pSytR5iFy4373GQwMTny89V24aLsAU6f7xDztEdsVGi",
  "key13": "5Hv841u2RsggAFLxXmJ4sdrw5LRXCFSCAqjTPcApLg9dfCY12PaQjkNxsoBTsWKVtuDjtgejV9pv69A9iVE33Ger",
  "key14": "oiQvtoAcdoPuRxMiNfxtwYwqWKGJGx4kevKZRgGfwLWekZ7pza8R4H47QarEps5qeoBZX6hHtUeBi3ihhAqBbcU",
  "key15": "3h63AbwzyLHhhSLzywLu4zhZ6gbXVt44FDqr9bSs3QGZ82LVKXgk1LNW8JjqgConNwpbysQGJ8ncxoMobmSWTRac",
  "key16": "63noEwSmLAc5gB1Th562sVahG5qov9Cd8vKtrc4QYbDQDTyoLxs2tro2aWaNEkp18PUXnc5pdJD8tEFSDQpBfznN",
  "key17": "5amLjUBjncTRRCL9Y8QRnhYPEuiRx3cUxxCgCJJTbPoyTAr5KS8UXSAKNaLdGACqqpmTi5K2JVuYMw751LuxQ6eu",
  "key18": "3B7X9hH5M9i3neXQM2GTtTKA4RTMFnBFNK8X7XHgKkE42iZYMxaFUbhgn7MCtnVoDww5xhuggeu9uU3a7qr38BTH",
  "key19": "3GXbtKaQ7ovb6gcCvT9jXFFjX1KoMHfuAj9MXMWzcgxkFpXwpuKTWoa7iwD4oLwSxhKvbZLSZ6Ckog63ompNeYPd",
  "key20": "5HiA7B84CqtWF6wRq1u1pVahjfMqtMfcv9Z7KmXvDqiQcdbvqT4Jt4R4cqQ4JQdhiuhPp1mhbBg2ocpqHVNZwNKX",
  "key21": "5Us8iGjSdQf9FdsCt4uw731TjmbSxw74bFPScd59fSAV9rFPvrLVGMYPrbBxp2i1KzjhjPJrGrK9b6rYzLtPWf37",
  "key22": "3kS9rdMybgEnDm2GQ7i4Qyn4xvFKgpCi2uJZeyqCJGXMgNzFdjLh6jnPbTRzbiaS7Lidz4tH9BecouyGQJa2ngXo",
  "key23": "4ADqtCsD44vTN7UMkR4U8EmAvDeVVVaDtBNZkw5XX3AvQ5ABehYdea8w68bcYpsTHg5iGGjF52FiXgbhZrU3g3wn",
  "key24": "rJDnuGogxjxQJpUxPSN6jah1cCTySEEsHX4XA1UQ1dsi2b7udzFYyV5AUqG73zRTEPL7xGXrt9yXiyDrkaDdavR",
  "key25": "5dhcDhqbq75bXc9mutV63EVRUS5wa6a819Mb83gxqkNSEQoJmAfrgY5fNxYdgGmbYMRpyUeSnNSy5HuXwEnDSNqj",
  "key26": "4qHydZ7DMSybLctejV6Yz2CsgXnfKsNg9krPouMgjM4cuCJBK3FJxrCpYtk2hVMtotC19qH7tLUFaJqgQ6XVgUmR",
  "key27": "48vDTVVSspyhvh2omX41sPyiBoYdrKGm6TRWbd24TdQMUcfdPibnVqRsg48VTkkyQ3dzCEee62frjfEibbXUTQ2X",
  "key28": "tRT1UpzZVPnGEcVn4bFJukEbJu1beooVQGSjan1EADJk8JVaAFMHZ9juV1jcjW5NMHthopT8fq8QiEys2qmZgQn",
  "key29": "5ier3wtJWkFdNHa8WmBxn7BUFiGiZAJLKzcu8hyjh6Qyah3fCfL3xhKobYQLhujA37XiojvGr3VYdeAJr8HvwPLy",
  "key30": "5qqCebqjaykKEuCsahKbHvpL7vcxVR4fYDp9fe3HAriJrV2pX9B32dhnRz4JF9R8B68FFiet8rKNmbrTBtZMVmaK",
  "key31": "2ZUU63zQzdnJBMaRbsMi6WzPgRce96yLysajBHvsMJ91YCHMrzcTwFo82V3TXysbzczjCswWfJ5quqkJp1pVVj9g",
  "key32": "2vv3xxgrQtwj874YyNt6G17B2AXyNkTCVUQizt1P5Ys1pmuS1paFQveR4EuKCepKfKB34Qaq5qMvR2VRBCDBA9pK",
  "key33": "QCnxPvGK7SsifPzSysDmPJKojHx5gfp4C8oSMk4N6juc5N7GrmWMwKFDiNiCPkxAwRLBm45sNEViaZdcb4PfqxF"
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
