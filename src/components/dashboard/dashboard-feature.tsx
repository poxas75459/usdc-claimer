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
    "563LiV5sGQwbhCny8xjbPM3aDkquuKz1oymMYWKMMY6h6mJhxFs8sb3eRxKNPG7CWNSSmyCHeFjJzvUr3GHaDxHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5164zRMmfPA8xzGegDCA4pQaGMmC3ekAStpedPBR2v4e6RPTioLRKQMq9AwqKhabDSgVLvuNMuPqoVG9z9xFuhuj",
  "key1": "3KcySTYFYqCP7bMq6JVPUAeiSxtz9uD15gRkSVQniEQ24NfoNkhbmZ2y1t8ZpArykuBA7a1g4mzZg7qoJT6NzgVV",
  "key2": "2ZNGPFondfTANpN34TBQYwTzYNGY8LBdRaWZzW6sP8ErZMJsL6Mp9VFkCCq7t5WbFEK6FNUrUhFvDoTp4D6dv8e5",
  "key3": "4R3QJh2oPYb1EqgRTH7oHMk7z79Lt2Chg9C6UyqzMKZ64orDgnvVeoJqNCphdvJb9auA96bA657Pih6sprDKUyTM",
  "key4": "4V4D9cN2HntP3oosoZmjQBEdd6UuiiR6jtww7mP7Xe7Sns29DYCM1FZLEKBDiLEAnqGXPB6pxHxp6d8EwmQUe3b7",
  "key5": "5yiCoQhqzm36TcULmvbsZ3nxQtGVv8roA42ETTRybUbFV95hwkzTRmD6YALG8MV8ekR38sJy3WCqzF5drdLS6DMk",
  "key6": "124mkcjZXF5gCCdBdBWiphAE6HPg7k2ZYkvybTRViPE7xocgqULiWCLJ9RZ8hGV6d5YMy8Uy8CgUK3sSPqcAEJw8",
  "key7": "5bbXFDfLYXfEg7dHHzKh3SyNQvxZ8wcnc7Yqh8hSkG93CdLZUosBwq4cMKYhmvNxR5yEbJWGYocpFTLH7Qj2qXec",
  "key8": "2DH1y28nP93sphvKSTUpxJeSRhnFJyYGcTGvSvNcPaAuHR5T74MFNfWiuQMNbDN8bMd8ZboztocJTw177vFz5X5Z",
  "key9": "5cVSdACAe6zkH3iSqANft5LWD1ZkpaGPGnepbe84bJ5XGz2TYiHXd8QT9AbvDG2tebm9MnysoZj4xAUF5iZcumna",
  "key10": "5Csjx3mRj9xShcpCpfTuA7DQG3BbqigMpVycPntwgdoqNpkTQ3ycaeYLnSeGHFPjpJzXqPVi1PsBYPoRHHvqeCq3",
  "key11": "5FvGY2X1UnKUSn3ceYUeBBAC2DCVXDLM26TNpti1vFMgWmZvFGxcZCB3oKQ35C1YPc8vYFr13WGDApyNm7yYj9bs",
  "key12": "5J9jSbpyNn1hMXxP3PHLig5jcBbhD2f1jGP3AY1zP1wvgDpRxbqJqC9i3LY7VzQYKnLvQuPUS57M63m5mk6PgUCn",
  "key13": "5dQGRGYseAENcXeswhDmwtFUGBMdPmgcX79nwJvg9o5FVh6ceDB4sTX9s3RiTX5ALYXs7LkUC8Va2MeMbZjWcMpe",
  "key14": "2kbJ3MAKpi6UsvzzGahWMHdHGRF7txKacWLmByuZTUFatXs3KQZsc3H4UZeag56ronSiGyzUWi3tkfsXePZQhvuH",
  "key15": "5Px5SV45DVL2yVqmrfQZbj1aWwwf9dshiwzXGCU5rF4jAToj27ZuCrAVbBxJEav5W8HcUobFUDWYP1Z45scNWZ64",
  "key16": "61XsJc3SDxt3iyTXiJLhFUPxpf8VMhkrHPSFuduUwvWGgcwy8zB6codzHSRdBmEzMygbSoCDk9jMHCGPPyS5gmW9",
  "key17": "2K1FX4fUzTQUwHDdDL92aZhFBYUBJaVkmhpC8dHeE71Dx8Nu2HM1qZxZyZhdArqpZYGwMBxzFmLx9GH5BP9ihEsu",
  "key18": "3vXbeiFB7sdnhXbe1YGTCe97rCRwg8JPa73bkichndkSkynDDCRb4EwhuHpicSonwUbPiEcbgLLkhNrD21HJBr3c",
  "key19": "4jufaJsbbgE1yjSrZSzHJrbqBRuNc7cEPFZt4kDMYJQzYudsoSdpvNNpwne5f8Ymt5mJS4yEtVsHkY6p4osqiJUo",
  "key20": "4JeGqvXbixiTnTs4YVhzskxzqQ7ZXk6kUvc8iSHjjFBEdbsB6jb4G4evaaVvk22qPT9ewrCS53mpX18qgrgJ1M6N",
  "key21": "2bjNhT2CN6bgoAB26vqQzHs8NLAAYspNpwjm7T21gihxSyb7KQRmdzzDB453XXUbQ5AdLV5MyryJKmCiLBCQbdzM",
  "key22": "4yryw9xrv15Qp6uKiaSbNrXcsn8r4vVKc7JRSHtSekfuFUs3ATtVYizfMe2BXdkiJfvF924gi4zKEAteuvVKLVUQ",
  "key23": "4s3LCSXr3pAWCzt87CBxrgnoWepaBzC82tAwQ286A9b2gw9Lq75cin1gXyKmR5US2HgX15PoEXPdKmaRnTfVtC6B",
  "key24": "2XEqGzGDRu6mQroXf9kdpCzfitLdWC2RgZSdzZcF3HT3hb7o5szJ6q8wk3FeGEZL6mcVSqBVMoZBXQ7s3HXnW6nf",
  "key25": "5jqm5v8APESaUB9cjEiPKBkaqws5vD5NFTc9NkMLE3K78jBcAgLWTjjRb7xvjabCbWCDgPMBPxvCN2R9wK2Q8ofQ",
  "key26": "2SAPj7i6vxn1QfRKLo3SSHmbRCH5kKaJgBfmDgA7D9tVN7sr215Z4SvASwR2Ztb9UjgznvfW3Lmh6CxqdHpGRgvG",
  "key27": "5bN2fxCnx5ycbEDHK22RZha7MHtPdGfJcfvvTQorT7p8KdFxgE83TvkzWpuvbNk9fshWfpwpAS2f5oZ1TS81xMpB",
  "key28": "YY4AMUD3MEpn8XmZUdfAuvUkthZcb7b9JLLi5oihREVcXUCRekKmspeT8HCkdiyjuya4vcvHfYTPMJi2km61TTB",
  "key29": "5uxfem8BzTakgcQPyPSyg7t9A1zvHWwAt4ynKfMoRiobufXrVr11vwW9HGjxhhwRa8wcEhqTmmdqX3AyxDHVLe6s",
  "key30": "4gpqb7rYWxTcVUXFcFhdPdKkf689kWCSkRibF2PSJaCqmpQm5yFDEjU8CPUH1TbZVg2cKzUoMkgqaeA275DveWLK",
  "key31": "4tfYEjNULwVLrkRk9T36da4ieWTL2ADoP38cszYk6SbPfXC7V1hJgd4SkjwsNojbe9qURHXL2Jyj1pNrQhMZjWym",
  "key32": "2vW1uNCHUq1JzGY2NAGifFtbFBiwYLnij6CuwPouM7X3pYeCfqDMqhBe6LGmtvq9sntUwwdhjKNeD8nEzrR9dY5w",
  "key33": "61ze6q5fV1Sgm5KU9tRoQ7LtTeFRJR1cu8ZRQe5FcFHgv2jvfuMucDtLGKyCzj9F5mApXLqZzUXWLUq9ga6AQuv7",
  "key34": "V4jxJU8DVNVP4JXrBxyC7DYDDssj29nwHbCMN3PU794AbXH1RNTrvAV8z5aArV3J152sVYtyGeTbRY97s6LhCJe",
  "key35": "2BDQkk932etjibgko2fkb5irAuerFApL9bbYX9g4fXqrdeJqHd9W4vGCV4B88cG3RXguPuWv3KdHTxGvqyChVhTt",
  "key36": "5e7ZYjspqg1kbcGowCmcGhAJgizXZ6WRGZkSW9zDvbPiLJr33JPbeu3czKJkhVrWWWMM13LSFXu9ZZ8t2B2Gn3eU",
  "key37": "uhL1oaqgt8aBWNsSKrfjQqhwNHt27eB52xAVNd3BQ4gdX9F8TcEAy4QKTYdH3dDPwcuW8gKsz5AU8P3jH9WwGCv",
  "key38": "5xAemvp9jjwL9ewLvn1Q9fYjyiFGhVZKdWPRVUJ2gahthEkteBqhauHHbvHgzitDvxmS8ZL7Ra7wbwRnLxamk1uW",
  "key39": "Q2gYz1jEtDoQ6LRQGCaWr1rukY5jDj5wrcv5aMzpEMupj9jbzr6GEPkvUGBG7wNh11GePbwzm6UfyyrpNxuADE9",
  "key40": "QY6wiBua52jrJ3di62THnpknYY78Xmtpjtx6ZabBy79PW9ATZA5x61wZdZD9Tm28FEXgeqH9ue9QvCXtstwo1LC",
  "key41": "3ZK3f35JgBViek1jW7CgNLUNqJhqKyirHcdwJEUSsggXjKUj2L2xmsSm678vWQhM8AhbZj2HSazwWFrgpnD91Cd",
  "key42": "3aduaJcR327wjbkFXwTyLAqt9E1onWESEdCs8X6owGt2YuhzHM5xrSxXmvsSEYKzHcqYgguB2TyfJCEcnxtnJehi",
  "key43": "3f8xMciGbeaf5H47VM4wfcZSjMEEaA5AoibVBVoZ8K7H4iMT3j8JtBELzsHLtzr8jGrMRtZkZog9G8mnfKtEXxko",
  "key44": "5Wmh7PwMQtQ8xQKNiDR8rziyFfE2eecgTcV6qYU2Q1oQin6CtVFaRR9KPsjUh4pGZrpwJeknutLCn9x6ntNAkHuw",
  "key45": "5Acaa3vUDuGBSjDxYCEvtA5aaAgx68Ls55sEy7gzpCZMfnqCuSGrobeVUY6nvZxbmputbj8YrPvQ5oJtNkgdLBJE",
  "key46": "4c2zVEKWjDm69gW3PrKTkCbu85xvLv3vdTTzPhRuKok7tAssRBWtW1JdkaQgSAjCb3kF1frqAk9XBvFhamqV3kHG",
  "key47": "2aZYRwMguc16XtVp7hyHaDSmQUdGxPBqQCHP9JyDWDcbiqkRyEqvEjEu1SZhCZTTxu31rBZDvpK1phRH78ppyTe2",
  "key48": "LEVQ4Ve6wDRXzemscAUJbY7WCP68e8iCgWEXsU45Psoc3CKGK5ug7CoZphESwyR9Q2RzWxp1gM9BoE6WcggsxEc"
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
