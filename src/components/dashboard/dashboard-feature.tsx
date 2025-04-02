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
    "5rGzChAc8nzpZHUk74QF3cdp5o4zQfTp8kzTHEq8L3jz211gWcCbvHnU2DaEMBZLfFK1fp1auccDQ6oS263jAyPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jJ3aohNDgVK5swGnYYt6oAersEdWevHqMTqRjEY7rpxoRnic6i1vsmw49ooZDFyYGM1pKu2SDmXV94zwQppeQ1x",
  "key1": "qKN5P8bUzrxZ2cPabJh2oXQFuMQEZTzq1k84K5zJaCx12X4YxD1UpQzhvhw25KMHXrcXnebewa9fRJb1kRj7BQK",
  "key2": "2q24gxUzcNWNCbwDnxMgVoQfeG5ZSLEt1xzhkmYu4LcjRHNhdpULvQR6m9uLZsX69VtXUVK8zQveDM7RnFBr3ckN",
  "key3": "2N4yXoioJEvrAcJPtxyUsUZkXTeZ5EzE6oy7wn5HQLYmZkkrUQAxtECUDyFq5HwVFzd81mMt4zguf9he3hadgpKJ",
  "key4": "4FJ1i9iM4rQ6w9RhbhaoUgvsuHStC6WAVFL7uieQdPreqzXFxM7oSKmEUQx6FkbCBHGFcSX923MAU6Wy1tPM3Pf1",
  "key5": "2KjBoFyUHAs8P3M6R65ZnwnZYhjwNrkZtx5Ek8UqkuLdueYZhRJF7FQyynUJLUa4vi8eVNcXqPqzy5dMdQpKyK8S",
  "key6": "2ZRpQbhLQsUymXGSd6husaDUkDEhbjzS6mFazMDQev9aQZmVhwTUXLgTSEaMTBKLkxyfo8gz2wpRTHGZiMyaYrgF",
  "key7": "5qM7Z56VrWrLGHtc5vR4WjeKaKQtCjy6XtNTbMUum6VzdnicwsKYKabLzuk8JAcjKy3ib7yS3QhZeUfJnjhCGoMS",
  "key8": "jh5VGLcu4JJQ2dVhurTfarHHKN884wVdtHiWLNiAr9rCd71ChChjyKsCtuUmokNx49HHvQtrssxMuPJcfQ5oRj6",
  "key9": "2roRLUtouZJk6LXQ6AujGGuf5cQNZg8s6SK6e7ph9Ycmfed3W9SfNoJ3SXUDP6KBW9CUotAKFc4GZejAieCJwyJN",
  "key10": "abcghZCmJk8xaCkgzYYPKTcKFxHHtbuqW2KDWaZZGXHHvaqhqpYRSTUL5G338NDvLZzYJRjfxPjxBwzFxQEzy9T",
  "key11": "18a2xqCp7WW5CCciTXM47GTwvb9gDFAGm3gXUVW4LsZFkwqcBZZ16m6Uvg7wwkta8NAr7FyfMPF3fb5XyoyHgur",
  "key12": "2brqP5rz2PZwseZqJhuRMUE5LGjkXU81UVWrfT1TcirxN9vGb1wD4afG4oDKWR7f1FDMNNzx4itFhnNyqPiFRxrL",
  "key13": "3Q1geSsWe7kTZvRZV41jVQcimMmaHdxaZQq8fkfCF1EBqcBVgGJ5UBnk9h5TK89mPXLvvRUXwALRhSYapVMFKqZj",
  "key14": "49Ez6YLzb44BVLruwhCf7rMtkX2ND6DgqFjn4zF5HZsrnA3tK1GZ59nzZuiUMoMFfUpu7zByG3EnjEFsb69oZU2n",
  "key15": "xNuboMQQHe5Djg9QgZSCTs2bNTxE4BTDC4795k3kxRqEpzy3ACSZdc5Lg13RFTTP5kUBJ8myrkjPasw1Y2PRSGP",
  "key16": "3HLLKmWy2Squ8PovSfpjJVT51GDvWLQeuysvvhV6aid4kR6Zx9gV35kw1FG3XWx8aPhCSUs4QVQUGbHAMB7cpnLN",
  "key17": "4spnfgQxAFdJPW66NV6W5mJF7ehDrXqxAkWhZMVj3JmDvY2QjGgPqyoZtfDSB8nbtdYMsVgNssvTA3TBLM8TiKUQ",
  "key18": "5aaaHwJmMSaACvFmeZ6JdUm76B8uXiMzwZRDcHeAEPMcqQLN4rkcUhusri7MKCpJaLzMYRMjxnHiydChiPkWdZ4F",
  "key19": "22zYCJ5qKRA3YDG4Qfi7k7cypnEfwZofjZWrebUN49nEa3GkgzhkFfLcudMZKXzeC6Zky37SnLp2xgCXrY8U6YSv",
  "key20": "4JHDnk7Zka3a4ecghEmFN4ma5AD37qoZfxg42XcUX6qeiypM5r4omgFYeTZMZ9EmmK3uAUgiocMVE3iNwnwkaex2",
  "key21": "H2xs4koJXGRJmycAwahqLjdQy6z5vaTTRFwTkkqwBfyRpKYPLNP3ip76wXoSdfPuXeFvkF5hshb7PH21GYouFSV",
  "key22": "3ERJyXhie9dsRyoC5RxKCxRbYWMQo2KcAxY57jHoRVcy5YJcYwtE8uc3U8kRYWtqhdLzDJiZUi6KEpRVDxEN1uHy",
  "key23": "4kjGJB48vnDioPcsNW23Bg3LgCEinKBXe3EgUccMP9wCiheU1sqzVqUpfs5qHcXn1qcUS1bqDkg4VdZXPoX71F5p",
  "key24": "4rbNWZgPiCnVeh362H2mb74iCtMrk9M8rLudUTqmPS3dFG8wNmByNXK3CvtSbF2UtWQs8r7E3FEgKoJLETfvTZTp",
  "key25": "3cRDi27MNXPCWrSKkPwkeNEq4TyYc9KLbf3Rb99NCEdRaa4u4g1YRiJwLNMa6X8gQAbdVNX84Q2WrP4hWQeY5Cbb",
  "key26": "4qWRDkDWCbtn6ZHV2hki57eZzFyy7oiXCiHZ2e4qJCWALL8vbQ9533G9tSGhBR5y32s7L4YYfMYGUc4oiDaFLrN7",
  "key27": "5D2oM2SR6TvnRcwRD2w8cGNEPrG9218yofMBAoFEAuYVKxSxrqu7bP4RqRV1JTnA1BrWyFduGwue3anAStAq9DVU",
  "key28": "VAXk5hqGZ5i4ru9B1VsptqndfbHKT26efknUR9fiG6NufSWaemcdRPh2Hpi4ZThwX7oDsatryidMfpmuJxuiCdS",
  "key29": "4gkkuzqTcxSXjr7jxaXhyt9ASMyPvwu8Q5o7o3gk7ygGnmLibqyTx3zveJyo5pxHF7LGgpVrkTwdbuVaRT5PvXGU",
  "key30": "NgJTkUQ2Cn5zhxGtwfZNRQXwunyExdobpKgmHXRyJWgSj7FqmV4NdXnxmRx3JGZ1TyBLd3UHkHLtjygxSdTVEi8",
  "key31": "2a582ZrEu9h1AXSeJjSDkeYHLED2ySBhd2KXrAUb5opUi6MdYSSKstzCNk2PWqXhjXC72pq2WY1Fgej8Xp9v2QPm",
  "key32": "4c8QqjbHZ4Q9yrty2Cn2LeQKauXmme5pNYpGQrLVckJ5GJWFMKrS3jpc5pYK6Cb7BwJpQF8xARE9xH8Y1HZZQgqJ",
  "key33": "4iHbMe22WT1ZbJfGSjWcshKVRAb74G32bFeZVqXz8RVBQh2aeKuTt3V27wkxv3z46JRrN4qfMxZHtF6wKGCHp2PA",
  "key34": "3uTGtQaQBdUYSdWc6SFZE3tJ8zxQEfnd6mnQGsm158PdNABkiPy7Vr1XfctDavgv26cuXcUfeY3o89mgUQdoQtku",
  "key35": "3DX15EwVQ7MJjL9vohPb9x4dSmeeEemU5ds5E2GvSR7vP58ymfn1YfQUhqwcXy3BS1ZeBnDZcGBXbW5Et5Divgua",
  "key36": "4Kmya7r4LUsLYAWruNJ3bmvjwmPqY27PfxMTFGjp48WixuxDWPvxBENVBTXK6P5XF8yHAKXka2sVK1V134MDoiBW",
  "key37": "4wkYVJuWFcDqPk6AmAhnj7E8ti9gGqebv5pXyg3aepd781uDLf8b3EDddL4Gi6Fix8HyV8Nn16N5b9zoniUSLAtu",
  "key38": "5g8t7CcdBei9PkGdcJ82pVo6rFFcaZWPEkR2ZdXddakDPYr1FyGNP1KKGEy5vBmweAdPuhkGxZuYWfAGVxWghDXy",
  "key39": "2fAdykKUvFJ9r4ZENfQZ9CeVdr6Hy3FfCEXuymjNf9ffezeX5o7Sh3Mnv4X3V9AUqkRaaT4DK8uAi5SbfkqHTeRM",
  "key40": "r4BaRYXE1VBBYrXFberxC58kkfhsc98BHE1DAybUDprbyvtjXKXbFSAEhCzSXHXZ2ZNPcBRtXrFmwLEfDwBJQfg",
  "key41": "2DGR7UN5nWCizuKuBnKgRAC6kZdGZLLPY4CLqYSKLoZkh9Jxrw3c7PLExDEtUGCNF36rMcSU7sCdXruXCFLpXq64",
  "key42": "3j3nrUCK4Vw3awAZoejceqAK4zqVn2qnJybJosr8Dv9zLyR4U1nBsx2Er5a8HV3rHJjv77CCPG3uvtZc12kw94XD",
  "key43": "ZwhDiN3eKKgdi5YNZRwpz7XqVEzk7kgwWwTLYPkvHb2mDrCKUQ3EiHBwWyVVRZoJ2so1fJ9aq4UbenRp3ryCC6R",
  "key44": "4SjqEUXnhVaw8Cq2RQUS6KTXq6sHb33co5MSoYMKxhPrroBpnb2zCeACqeqtiLpQH4oNw4Vu4DMyWc9Bkm9EsjTa",
  "key45": "k4UFq9hgy6SpjHYyTnyccS8dXZav4LSe8qQTLiJSfM7odj6EPrygttpkm3NXGz41ziiMoUN4A8qQa9abtcEKNPM",
  "key46": "HmaRjwX5dW2qjujD5MLTkRt9Q12ZQ5PPrHH39uUqRjUj2nDWTNLUCLMK24hsPa3x9RLeNotHyqb9nc5EUmQjCXG",
  "key47": "2XHtuQGMAeDSkT5ydoZMueWZuh8895BYNVfDGLizxNN1aKpAAcsWGTCoazAGzLQJxnW5wzECLMgm35KDe3LCSDay"
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
