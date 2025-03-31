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
    "5Jt5Zd8Ycn2DvJpTAMGFrgp6nUpNwoHbZmEG5AEeUhASbb43KpjWaCcFpDQzAh4ejz6VPJA95JRKabjaVUXoJLgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hhVhkW1ugo45CyaRSQBA8Lhu94xiM5DLnn9Q2cL7LTWB4bU85r4qrkVpGDkFfxWAYJvT8QUdt5yD3Yxu3BDi9M2",
  "key1": "2mmrwerrhsXQd2Utam1NmT5Fe5DEofqk2cdAa6EMy6KpLfTZfMUH4RK3o3mifFR8RNHE2GzqqbEWfVrMWgT3cwdc",
  "key2": "5EnnmURkYdvfdZWcbeVMPgAPvc2a3kVak7kXxxwKm7jquYqQifdctMpgSK3kG4F8PfSB5Fy6soQ9kDKJrj1np293",
  "key3": "5a78Q1BrjG4sbecsEWCp64JQTi5fW7HLKZk8k1ThyJG6CSXNedo2yudXR8iSUJpdrvcHauznuCd9AgkcfdPgio6v",
  "key4": "4hZwByq3dnA2izUqaXVd3KxmCbmUffgqVxfkw5cmmQMH2C5XJAUp1rrVBKTsHtEoTd4S4ec53boKy2aXCFYdfRV6",
  "key5": "276emyF7FVfFDTJYSW54emLsTHcqczjMnf73x74BYEHeQXf8KLLcGqWJpMcHvJR1wn7hXP4NPwHnXE8KY6cQRmU9",
  "key6": "3ZsGXvRoay8mzjJVyyV2o6yDfECjfZeELRsN7ixvaTdir8QwV8hzrKcbouVuUrLNqtCttZ5j5UTfbBxkWvQAfFNy",
  "key7": "64ub1eyXMFdwQzXKq2uu2Toetyz5sxwZCZTmxUq2c87ECYpV5ziAxnMSbiMjvYpd7X3WmGyK132TqCK62XXNeZjx",
  "key8": "2skPY2uHygQysijDEssFmgLAuXSfrAMUAEXnBcXpYu1Gev5iNWxtpbEhQz2zzA8AicGhwfvHqzE47D7jqJ36evAT",
  "key9": "5Jc3M65R9vgcxL9L9sz5TjoL3tWWGL8WYGfmhtXrqa1GX8QZ5py5WX68hmjA7cK9dYgFkKeXuWLkvVGJ2r8vG69b",
  "key10": "42sNXySzvJA46pGc3jJzgvTiBuu8TpytU1VdBut9rSDEFQd2hFZKgMuKpNiN5ubcHUVmBY6ieKDVrhiLZNEFRmsP",
  "key11": "5eGdXnMrp7incFXCxJyTxvm6Bs5xxbF8jVrio8GVYx4GEBqYzv8AMCvC8yKRo7NYyUt1cBUme2DnVwKwi2PcDj1y",
  "key12": "5YhQo8M2KaDZwwhHaqffdgUGk9n23XbebkGMh4ZpLaPb1iS8xDWTF4dF9ZYFqWtUuvyQo8bm8dnd6FmJjLNrFMAn",
  "key13": "2V6dCn2RGrF79tRsmPo6jsWek9q1NPzH1Wg4MDrPGjmJKoMGcRym3MX7AXtHAXFwr8P1sgYagUVWMyjW8qGTRBy6",
  "key14": "58tb9JQCX7zxeVKA4KF9eq5RQqKk3RiAjyNygidAL517RgijxGKoEpUc2RwTQEn6Ez5d1ZuL5Y5sF1c1gSKDFxEx",
  "key15": "tNiqjwCieVjvBUeKGiRp92KFiC6cKPtJTPXH3jR3VMicE5xEkHfxQy168dRZkNk58HsP4g3gdNG4SJHFQ3KPM6n",
  "key16": "2LkKzbzkHNGbtyKJEjPTRLRcPdkYanrqpA4y5qEAunG2W2H64imFviPMcge5VPYPG515CkThJfDeMyjq6G8CL7CC",
  "key17": "5qK9Qnyq96Y2PAFyNjb1dKpY9UmukxGtnpW8xdpqKrQsEZpz9xg45ykQueXtnytYSpo1fg4v8jLvPxoycMz4tCuN",
  "key18": "5b5HQKDrrQTxhNWhf8DVa9FQmBh1T3JGvmtMVWvXUv2QncScr2XBoMLPF81M6KzXUBiTijX6kRAmNZcyvin7Jz5B",
  "key19": "5WY3No5HoJVmuS5gd9ENmy6E3wQTbjCJEXXagGgcN6JnE8XEZse5Z24hSv3Nd7HhsB8CzCWJRkJF9kKue28Zhgj5",
  "key20": "4Q2nJdkEGPx2bzy3b2rmdyTAvgQSUP6GvQoFfEHtjpPT9uriwFbsBQEQwRUNFKAUH4dX1WiebNzJCzQsm5KULRbk",
  "key21": "45pwCdrmP3EFkcZ484SAmLSySsUUZBJZEXWyXYvJF7ypauvWcEvEmb9dqYxrimBt3RK2AFzfFY7LDgvW2ZJFEiVa",
  "key22": "5QZmfK8FdZ8MPpMcczGQC73zisCuipFet4nwSFctvUVEdbHSV88MccwHcCq14En8drj25uGJDBTye1pYxHo1NjjQ",
  "key23": "5WTZ4rRAxaDKSjPUxGGMagCoaiDWBzy4TEKVSXLbKABmD65UFYqzAveui3MQmtYBuqKkhH8M4EeTmCRn9K3wMCa3",
  "key24": "AAYBjWE4L8HmdYbDfZKDN7BmoY4k4dPwAJRBhJG22MwvGXe7fmM12pd5Rt2rdJyZPZme5QZokRRANZcD7JN42eR",
  "key25": "2hnZRVNxp8xPNZzemcx8RoM1rqTSrZ1ckAM5MzJ595wezf7KU1gN7GJ6NEV6Sz7LXFPNdy3KgRuxZt3MYGXRK32Y",
  "key26": "4PuSeuuMuSE1MBNvhNJ7RJ5kqYSwQoax28JXV4wkpenTBLkeogY8MmiQLbHYqWYKXVadeQmec9EQdFkUUDeTEnJ1",
  "key27": "SWEMZxMWmfEMFexBC8WBr3LAu14tBGkbbStMQpqSdAjyYGLVP4NeQArNu8RWaebm68f7cRSktc4AwJc7g1PJdNL",
  "key28": "21b9Pcet4WujU93iwUtWnSRr4kABsDomenYBi1QQeZQRAhQxPqbNfVtrXrEqXfnFwkWesUyfbHXD3qTvQzvftxzR",
  "key29": "JctwVPomnh4JkLKLCNbDw3n9QZKAbvrZDezFwBj4V8ZyGb5QJy9vCYaNQp9cYbZfw14wGJuztZZveLcFirYRor1",
  "key30": "22jbFwq9Kmj6qYG3our8Y6Yr8t6BBXWV4UHvEBEGeGXLhYMJ23oayB9QfJMAVs6xvHbbhNbpF5K2wWnVyeBWVb2N",
  "key31": "4JNjfoQAx5Yc3WrtdLSRqFYhzjJTucTxsm2fS52BQJnRt6yK5moi2fComigk9vP3d2QnZnPSXnTzXGjjXed5CPFe",
  "key32": "5iWf5vHgdP2oD7xJWbY9Q3zzW7USbZ2TcUG1nHPvh7j9GZpFsaY7XEmHkLgEYeujGwtosa2vN77K3v2Uuh4r6xV9",
  "key33": "55MWVcXCzMAgLbWUqBeTWCKi9fmWfV2ovJCxDixUtbMzmBZdbdebUaczDqr2tb2kLDhCKKD2zsm8HyaVdkwGjkb5",
  "key34": "29PuamuwVUnc629NqB1b9XWzjtAkaXA6Wzmq47aoCG7qY7ayXcqd2r3uCVaXGJj9MS6r9hCoieJS4CPHRae6w7Po",
  "key35": "TmFLKFYbJaYZ3EcjGSz2mBu8bxSn28ARXtvonCueJUYN7ZtJSUHHT9Ji8nGbGmpBTYcmhwz6KsULVmzcQjVud33",
  "key36": "2TyAZFkhBVwZpzf493a6G6NpgejaaYmmPVBaQbVWYJqeiR2DBm8EtH52fn8zzyv4Sv5bsKSkPY1VCmxCJnweJuYK",
  "key37": "2VjZ9HfJc9dDQ4ujxoZ7H2TW8k5m3kJfBnc4zrVCuiyDvEQYfBLAFZymH1wd2EUhT9ct319T34JZzpz2RitYShqb",
  "key38": "2SBsm883yh5pkUdfAy5rmeH13fD4hhS68BLzvzE3FGj9rA6EAv6QLFcDBB3aSsemuARUdRrQRbZYFP7aUBG4jb1v"
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
