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
    "51JLmWc9PZ5KBxNkALKB46hPUyXe5uEpuDHJUuZ8UP38nubyzQNxJmiDjRbbPGh2rMfPo5dKCAcsbzeuhDB57r3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eCXMneTmDjn12voLZK1bntxNFtnjBjGZG8D3VgVMD4dAbwU3QKfVNPkYYMSBULbb5W2T7wxZCDiH32Ffhv8ugHe",
  "key1": "5Jt1YPdY8diyVPMJNeGQVqHmwp4KzHBW3evHjZQsBYWBcY3dDj1TkdaxTVx8dagNgNZNNqd6abjBr6xzwEqqzjNF",
  "key2": "vuey3xT6Da3nyS8iEK6bExtr2GwAaYTs5SX2toc3JH7yHCxTXC2ijFcDNA8PYRg4NHxgqqHATt4ZDpwsBnDjnNc",
  "key3": "5GkWrzhJmGrYG6CyB9W6Kq7bpSWziwWVFnAPWbwgySQVzd1q7TaefodEeJdivbNuY2rpYcQ82NyhrWPvg57UkehB",
  "key4": "3LY2FjXwFvSaUP49qqAYGLhP1pF7HQ998bvJzCqMhAdu9h85336q7FjSFVf2iGhUpmyRPiTfd7MQHQy22V9P4G2Z",
  "key5": "3ccdUfTyGPmZ192hwUW9LmewAM9ZD2dyKuoQDhMFyUF8YsmWi6M74Tv2wCxAhLe2Utf7pLzzbbrFdSe2cLJppxGd",
  "key6": "4FeEQGDvpJtPtnYEVUudeisQKpwQZEcdsQBvUgC3s3U6kH4riga6xH5koRFSf79Fzd8qtoi1vrpWGoQPH6sNBD1V",
  "key7": "37i4VVWQFewnshcNEPgGNWo75Fr5xPwEenLJkGny461Un1JdfxUBe5CEnpUc6abUXoSKJmSCsW2gA1nCEfG2LD63",
  "key8": "2d8zCujVR5uW9pTVu91uKcR6dCmJXrRX4hAfMqhQenkyNzcojTdFPbeYrqbt4fkF5bqegXPUoR6YMgJdR7V2JpzY",
  "key9": "3cr8b7nGwaSa7EjLThj8yGwqp7BhTcUZwTUEwnxJ3vz95aP8akzZe2WZ86qiPV4SqrGvpW5Dp1QNkVc5xqD2PBkE",
  "key10": "325XCNwoELFwMTmZjuSLBZVjZRU4yRBrWvPfCn5pWWMCYqWFjmdpSUeqwLdZbpHKvxyp2Y6oF65qtmQqA5b5ErbC",
  "key11": "48hEYutR6jM5B8PtzbLAkbU4n9yQ3anD4yRJJq2mCt8QiJZgWQLoofkwheF6yHmVU2TH3CWLTz66dZZCnLEovMV2",
  "key12": "JiPB7sq3HzyDgxcGrdY1KVpVGEXfiYBGvTUvae5AYjjvJfTWAjUyNFg2wtLnkF4keeFnoMSGtxW7Z9jakcHNnkz",
  "key13": "TmYRJ88jAKMBPssxDgyQzztQVpkBtJu47s4taLKPbhweJEamjPEWBNaWSWVkrEVi3D1m57DukS26EzNbi4xrFTG",
  "key14": "5a2BTdbZuBGVG8JVvE8vDWdDb98x4rQyeTX2Yc5u8uTXzQKu4paNMxLR48aA5h3JF19zLgRgkDm3F58KMxv19qqN",
  "key15": "5MNqJ4kJEych52iqESHjqVf8Ahz1vpwmAV4XYFwKzbDmR4iF91svvD8pS646ZYuB6uEr7Yh1erMGYC7arWLHhcRt",
  "key16": "3LeVEiKqNyM5CrrVdV1iHCqFnHwDisuLo49wZYybMiq3Jf4GYgGDyK2EWDMHNLN6FNbAM4xnz2t6ew4T8bJAT9qw",
  "key17": "62RURJp4k7bwQ1aMxjig3BKyRKUkyBQHixjcQxT6JB9Aw378aBa7CJSHWigTzyEgn31934gESDXjcJsx2NtCR57W",
  "key18": "3MTGdiqdJt1bsY8v49JrZMnBvJ9VZu7BQTeifwCNrGeW7DjbAtcWYakXAWUue8STXhfkhzsv83dMJEbDXvUoe48u",
  "key19": "5jQGqTCSozNCoaeLv3JpsaeSj6QgeBPcHbJbsNxq2RAyRVVB3sjcQAE3oyKJv2fqUb18yeR5UGkK4uSpFz4UZ8Rz",
  "key20": "4ZcB3jDNfcBitJVUKRvwGUfrwfrMajvbE6JPTqsmHY8s66zewf3tM3vWKgYL9BtUytyNPDG3ZrSDrHhZnDnSKEQs",
  "key21": "2jorUxHMTeBsH9iNL9VPv3s1Acu5KxuTFjZPhstZBmXbii3YiDrFXfbLpZiXxUfJdm94MFNA7hzXPqFzK5LcbQY2",
  "key22": "5sLm2EebECBGSggu2UoaATjvWS5XnQceXjcY1UJJrEr79a2AHV5vLGcVv4syJsB9cNLGTEYMxjQxpo6mh5XATNXP",
  "key23": "5z4TTPLfQAy3GPULyTBmUtQ94ngKUk9LFkSPnzeCYNGxSiveNypxfHQzczqaMCj8oR45Yf55UzcdFN3Tbr7mJLJy",
  "key24": "36fKYVjJswQmJ52zrCCPYSA99vCNv88uBFhdJ71WkDXrdALihTFqfsgrzndP1FmoMHoftbyMdw1qDTeDNY2CVZ23",
  "key25": "2CDRQXgXW4i8K137ebUv2yBr7KyHEVge5kEd7Xqn16a8t8jexCZQEWhGQkuC8sLh5VSivkrr4pXY3qhjNbsWiwVj",
  "key26": "3CMALc3yMgGMD5UKaFoEQCt1Nn3eX36ySnERA9JW1wF2H8ZyEQ8AM1Eazaw6MQ41E71f53cVbfReLricstdA1Mg6",
  "key27": "2p1H71fYSoh8vi7P6iK8AFXw8866o7f5qSjXodEoGp3sRueG7kqpcxiRHtC9QM8Lf1BBM4Ps4pqUTGeNwijZ7A7Z",
  "key28": "4KCSZXoDB6PqXY6AMnjAtcLAEa3g33UpVUTXTgWG3eXHD9bcC6xVFeGJYUfMmXZKhdsM3DvNwLHQiGFiLBMYMN5j",
  "key29": "JQD1sGhuYwo2ZnhpL5AaZzq8ZfkzW5KtgBLWvWTpv7utWJC6kcxHZbhE8BHFgUW7wcNzYJU6R8mUihxtKs9ZD8w",
  "key30": "5nzrDn4oLB26eCRt3zZcY2pnsgQW14eQjkYsN92NdJpov4HVf5L7sy6HnXCw4SbJvKmTdpem3ufxddAKLZ7qRHca",
  "key31": "3kZLY2BTFR8v7w9JNk7XsM6YNmbNo1CFwDMAUxfWvjcPoLgprJhRtKWSaEndLXrdtZqztYg6h9PQaf1Lm4jnWihu",
  "key32": "4RMvchnP4t4AUWUqLgkbucGTHQE7GEhBZKUXUHA8nFrnvhAY2KhwnDKnadyu8vfD4XEeQU1s6qSCB3zbBJBQgPYU",
  "key33": "5GP5w7HHKjW7LgFvjexCEcQUrqyBmfpZKnzFhE2v4YodHAyxwvSPe7BKuYi91Q98fyUTw4JQLAC5kW9dPpznyLLd",
  "key34": "3NPWwVcoFCM9sL9SFPy79oTZdaQoK9258uX1r3CuMfrpow9rXgcMPmyZ1jYc8fJm5GhkrWckukRcgq9H29muZPKS",
  "key35": "5gv3XXSbFgjBV8yQw4eGQVK8nzkYdNAN1jYM53vM2ggFmyUXskefgeWiKEqJRMna26jaL9EsGKviSG7e9Zmbak7M",
  "key36": "2hD353g6XuUkU1T6gsbFSrCCG9aby97581xbd4tCY5JTwbMKmV9ng6rRXssDRW4ijW9fxmvXeZXKjx84bvM8BMfx",
  "key37": "61uYHXjLcvBttjYvapeJpvMiQ5wKBWRiE3wrLHNupNrvqSYSUQs4oCZ5kwVt4xxQQXF4qG6unkCwUyhaeAi7csi",
  "key38": "4tyQULCFQUiuYfREzCatvknBxXEpQL9TetDgWdKBdapEWmK4HcuJLKHNqSLS6y5m5e7rHmopKTPLRBcj59q3215c",
  "key39": "4MWZuM5DPivbmAusuRresEznHgKYD3MtRS5ChFBJB6sGZm9j6aAg7EB8HqDFzuVznSF2RRm1EwGvVzzCuZmC3KTp",
  "key40": "45w2EW1zRUosijhGRuEoGU9ZQ8kxF2W3FADG8MHFmt3ScYfW5nRpmBDMWEiUvEYHCPB63AwJKXLXvVPLervRmCUZ",
  "key41": "3LoWGZ1HJFH8bTveCJgX1eDdY9a26zACVBPx168YGER9kbGxaNn2bRAxeM19W86FXbxysPihHVwpiG9tt3kfRv7T",
  "key42": "5xKzakCX3vMFPKKPLANzuNnt7FtEwZdJw29qKf42qKVa3bt1mgZWBmoFEtc8tuHpd4CSGsJSXVd4E1DYxWGwGkab"
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
