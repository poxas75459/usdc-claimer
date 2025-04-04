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
    "3nKTkgdgo2JSw6uxoSyPGLSWWTytBwe6YAXcNrDSxi2i6V1sjVV2MATiwoZvzKiRrnjUdBWeQTbdfJucdeHt4Ai6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TBRvioV18JpZfmMb4yV2Q2MHJTtWV11a2tZxoKHDY2j8EPgzM5nuPf6TLt15nqShdgghpvTStbubhrTky1wuxSB",
  "key1": "3FUuiKFBG4AqEZugbF9Pf7GR3E516WWSeoaLKz29EQ9hVro26Gokwyfvfoh1SaDti4J5nnLuWbQbMeJ9geB4TMT5",
  "key2": "Ye6xWkGhsWoGwKe3TMaxoGwRZrcn3KutufGQ8ZfdjmYYyaXGvS7b3Cw4XL1TXVpYF3zjUJr7FcjqbDzjjM9cgX4",
  "key3": "48ur8ppF2Qsj6fyxzRV8YNKoVKuHLrCBx6dnoEEYuBf3h9LEMzYcn3UfRMMFoV7ACTJZDRBxzNxLCeisJNZ9W1At",
  "key4": "35t6qRJJTYtfnHw88wm7r85MjhuyuL2FDYPDif9GdY4U8CYntpy6SKN7QYncpPvFFPPXCSBFWaKtNPAFdj8Lgy2j",
  "key5": "3ihpD124iHrxwCoF2CJrmT2K5gMLKXbBTtwHcWnpDJx6b5NFiXdQPxiWQHPzVRuAMD1fDpdkKBHBQerQmysxZTed",
  "key6": "5d19Y8vBq82RVRa7PsJh1QGTXDcXBGTgDZ6LE6b6u7ZxhSJMyAKDFm4x7cSPe6BJx2pNxtcuYFWMy1oXjTkc3HNK",
  "key7": "2Bd7Xx5PCBCKot7R1sZQUxrNpe4i4oZPuhX29Tf8p9E3ouPesUbPot7Hnv1UrezgHAr6y2TEGJWgTWzYNGQ5X86h",
  "key8": "53m9Sw6Qb9KtV7SbpaRo79vdXxaC4fV1YLbUBWaX8yReUUAgQjRqGxTA2xGGcKv8kytt7rx4vSfs2QsSJjTYApka",
  "key9": "46EJuvyytjhVYM5TsMs4pRKpykoDsKE6oGB2mxKTN1vyQBzg2nVd9jFeNNEXLuEcYnkrRr7ktp3TtsAx8zYTn3B6",
  "key10": "CNFFL4gnDMWiNC1WLVkgQYqqajN4YsWaWipTtu81GzEnwsVbgPF1u5sazZanxyDh79BVNhcyhAUGRAvoFcZwHpL",
  "key11": "392aZmo6XMMYwDua3YUubx5AkM6UPA2D3EyyWgRKNAVfpNdjrjPmhMmq7bRT8pY5tpynzcmJBunjBmCH1scBpnri",
  "key12": "sBc2TrVRsj1h8JGaGz7CCKMYYTQrscY9uxkEACr51hPnRfticPjX14Z95ZuCQjU2EYRkghfNyvMGmxnKPy64ikp",
  "key13": "2GVeD4YAXc2sF8Xk3Ap3fcrDzijMD8NGuFxdJBpHJqV1YQRDbZLbJiPw1o4NuusQ4AznPXTcbhmTcSbScb5zrd6F",
  "key14": "2nTSaBE5AXBtE18gArCpQ6LK4BdB1YDBf4DAMTu72Np5MLFBCpLaCXpwxZ11DQaMUizarTGJqZqVyWBnswXU88H1",
  "key15": "35BwZRwrodvmJkCoojGqfocdakbjBTWUnnjDrkGjn93zw65Qy8DZyP5FRcJe6TFracPUyR59itfpaiLW5nbAnbH4",
  "key16": "2cqxLkcdWjQG67SvcGqvnfYzeZkRgbSZa1fWotYUw5wmfFrXJ4UMThkAguNbVuzDAy63NNAzEvR3SNPZ9uKMhEA2",
  "key17": "3Fi3ew5UNc3Ln3nRWaDRsdrStcrZwLHWeG8dBwzKrpSYtJi65zRZzWkTLMbpLc9PUYAbwAYS3TyLXNurHJkxZxc9",
  "key18": "v9nyDoaUNTP4aU18NWSeGgvfoYS9fnULnxqzXABZmk6L8P56RjdPXWxfCwGLnokJArQPhZSnFK4xqXdt6uGTBBu",
  "key19": "3DJz5tmE4wB5HWS32hSHs6GAC9h3Bm7psNtEgU2qfnTSApUmJHtxLnMJkrCp7M7MUeSUM9F83d8bE9EQ2dp4aYda",
  "key20": "4deWpa1khuSzMWA32aoij7fxVwBmsTBJ3wRp6DcacB3YquTjp3odd9UixJy8YyBJm7PvGc3oGaBdmtm4cHsTvctP",
  "key21": "3KSnN5C4NnHEz5ywTHDw2ADo9yFfQmD9jn5mYWQe4xkEm2XQLDutQZvqGMSJEFeqCTop9tAnAQ6z4WK3uBaW46ag",
  "key22": "3Lyw7wq7KmujdY3RWAuSqvApM7qFzJRtR4vd6CjPwcEdgXHc2xN3aeQsiqkv1WDt8jDPHNcT6mp5kraxL8BeMEgL",
  "key23": "FzAyd2bqV3sXa2pRSn6x2gvTDXgWEPQSduhnASXBeTbMqp4wjc7vhYEPtrwv68gLog98G7Thm3SvVfTbGKzU1NE",
  "key24": "5wpFWVMzCwRUtp4FEPLjKznCEgvowCC37uiB5eyTPEjR7v2ceR1Prjx4t3ix1KSQvbRjjnMfFa7u8Bmo3xHyHgPT",
  "key25": "3BNgn6N3S6Sj4LHXsNqPxL6MHkoVLeoEoWigtc6LyGufdUr31FPDFbKUdJ5NP4EFzt1WRe4JZzEvJqjb9L4B3aw6",
  "key26": "5Ci4tp14tVyNupjxVToroEAG2q5S7kfWaT61viUFXMe9eY3Kf64uHs3x8TgjemCiTGvc1oS4CmGRevNDQst5utCd",
  "key27": "2fMCfDaVu2U9Rv1KTceh1boU6dvHQFSDvLPNfCCmffr9mRkoDA7X9iUn1N25B25mw6dPnGZSkxDv5QU1rvc4cXhH",
  "key28": "n7gwif7zxSjkxp72YZqxeWbsQ9geXr4Yw4h6dTWbViUmA2Go9M5ZurzCgKpmPZCHkzTbobr8KEd3zJay5re9iAA",
  "key29": "msanq2MJYKuqNPiYnLwwFDbevmJk4RouNZe7Wz5de95z9F231aTCgZp6og3Wadt5ShpSD8rL7NorosLVp94numT",
  "key30": "5j8M3SEREw6haCHvUgAaYFeuNHb1DmH7ZMSn1JUkNXQExseCKYuJqCNfMTHhLZ4C1TvhdGTQN5PtzMim1RMj9Mze"
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
