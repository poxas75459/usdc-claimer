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
    "2RrCNRw3Hw5MAkYdVj7aByiG4pwuWwxzG4xUjXf2CjmqjWS8gWFEhfccdHAdBxkwYxm4yWW1dHv5i1hKJhCZKGDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mvKCQKyJHHBNy4KjUSkuXe6p4N2XFeReVrGiCiR4P12fjRpsaR37bBiApq838pCRbGdpviHZAC1oCKXg38Q6Wkw",
  "key1": "5bNZ4DDzmix49kS6AtYbHXNRygXLsvD52E2SjejBwMtzze7oujudDXcaCYDUi7fNAjpCmiB5kRrc1kSdTmLeXwRk",
  "key2": "51Ea7KQtJc5hfoRwRkuFo3o3btY1EpTKRfZoeRov5ymNeixfYkq6Bx5twnQ3ngQaydkFfkSurDEzFgJZdVLDd9kd",
  "key3": "5XWp413EMwC2jCvrFqzWbpwaXbQ3FyyoY9m4SmqEEe8viebSLAne6inTZvTtRPunCP6Gh7i58YNQ9tJ13w67KRt8",
  "key4": "36yQu5dJ6FxE3kjxRWdi9Th8tfC9Lwc8SprbNU3pUwDvh9hJ1PhmwhifTT1ZeY5HqRy9xQtTU57pfDweyK4YYrtu",
  "key5": "BjdbeTMF2k6aNjiYWoggeAkJmevNddtmz2k2CsudsDpJ5TXfyndwknyciPHxCzKMtAt96HwRxbG2q2uSJL4Sgrb",
  "key6": "5z8e7wPL2pJjV724Fqtx5DjbWGYXyEQsw14v3TwwEYgmVMzqrRznRkqRHg85jZ3kwRQSUhtTH5H7gdJ7adNEdxDK",
  "key7": "5F8uRWiqna6EnJwTiQwSFom8ToTwdZ7tpsGgy7sHCV8YkdWMp1ct4nbcdxCcqPXVUkE89XtG7KEKmyAQcqfbkQV6",
  "key8": "64Hfd5SHn6kMLMFdpVitc73hCtvk5yXUY2y2GvUpozkKjCGSmZXhQKArBHpfA1NL7tfjDEoeJGogo337MdT4bEn8",
  "key9": "5QpS7PMGZTgQ8KdZndSKjJwqL9qY6hBoti9vUAmwJB7LbanVhe4RVQx9b3egUvgdE67udPGGKzQr6Tq4R2SeMWTs",
  "key10": "2NN2kQ7ZPbmmZEse9AebFJKG1ZcWpSH5hJSMLpbMXDQhED2H4VeeDBMYQN4USPembWXqk5CFG7gPtk3SFzW9auLm",
  "key11": "5JuJFEowppj7WxRu17M4EhUDawqAwbzDCEKoWJYEA7BYuh9Y6CXsbSprbX3zAhGqRhhYzZDDirbWWWYFmYw3JmNM",
  "key12": "2F9u9z1v2LyDveQRjQ2Ho2Gen3oUnZTAx7YLPu3UTtczrL75MPZMnqC6C2FoAStwt3xSsn8JYueAhNFL1dQBszk6",
  "key13": "3fqWKGxD6Ed7L4xsj2NNLmCaKvAHX3Dj1KQgWXhAH9EAzGh35vmG2NpNzZwRXVjZ4EvMDP2mgxu2jAjEMpcnNjBR",
  "key14": "4vSLbwhy2ULY18L7jm6sVQjig5y6FBgdrgPPsuVfiEjB6AjHFTWRw9uLUDxsmQdZV6vzDWszmNNnH2MGUGfiA2J9",
  "key15": "5j1r3mKNGzAd5e8HUqe3Ep8N6PEMdbo3X7pW2HnsnJsRSdth39qTx2oNfoXs1ZYAapU7XDviacQjsMYJbvKHzXXk",
  "key16": "2vHJjbwKGKt75U5SBFhvERJgJ8a7uHCRenSnp8YF7zkJeFWqNAVzhXNivJeA2CnS76ktAutAW3mAn2Baj3PKzncX",
  "key17": "32MFiJHdBuYzBXG3zmReKsKAURKoLjdFG8Lr1ArRbsjWSuai6Bm5b2ByTP9YiGWAaGfTgprcVkBnVb3JU6a1MTYk",
  "key18": "aT1QCYfaapqryaUcjMKjAWuwxstrRRkS6XM4XtL8VRyd8Yh3Lb3zeUHwDA7Fjc8WsXNdws5be6LBPLbNXsNurcB",
  "key19": "DAxRDEL1VgCZmibVSU8Sg97Y4WzuiGPXSMWEHjo4cpALKdgEEPVdWeeax5ZC2xFjLn1G1DuVPeNP3Tb8DGbRPgG",
  "key20": "3nGStGzw7gBVyfCMmn5YyHma42Sjc9b7gKnTsciu9x1UGvT13b2pMLsvWR1EgyCrR9Je6H9eeni9GSjtY8eEShLj",
  "key21": "3JKxHR5c8LYkqAQRbiLibufep5DWUzuVQbBqJpGe1RxrjM4TWxdwJnjbNUweEBPSjptra4ifZaE4HHzYgks8sinZ",
  "key22": "uekCgoDC1xt5XPxdj2kA4jzqLPgShZ5rNT7m1y3f3FuGofNqjyrBjuo9vhUSAk9zQwthbkDqgBvs5C5bFRC6mSv",
  "key23": "5JX1c3fqsRrFWvUUYCN2hzaKgCAGueHwJFRJScM7PQG7CJZKP2zpQe4xdHvyJiMYrgXCZNX9wmpC1c9EmBtkAs8r",
  "key24": "d6SANnPCjMcNbL8jeScy2FFGaTUhVP47HQipw5H9oerm3Ph3EXGm3MKnAXq3WWGesU5MvSgUwcSET8ANjGb2yhp",
  "key25": "5LXYDfzBSgda49YqCQeKkWG2yrC1SSzET7zkpMFnbFW3vzfEVQSsooYsm3egXwq2dX8w7BNSi45wvkM4Uk7m7gbM",
  "key26": "3hJxT6L2iWEbjszDrSgGvYcNNftqGLJNMBSV4gggu9GApcjyojgMrPYJt8NuuTkctmhx74He5mCLAq2D61qiN6g",
  "key27": "3uAaj95KBPWgHQUWZH1sVC7Q8RGmsQNMnYpRhzNEeNicvhUmDnvoa8R21Va76dBaPkBfPW9qqKb1cF39HxMJxZ4t",
  "key28": "4Xw3eZoL9V7QyRXeKEMNX3dA3SSgxZQeZ7e1HWtY6Et9TVrmnE3AZTFxmeLzaJ5B1Do3ar2aLyh7nngJkRX1H92h",
  "key29": "5EUW3strAPBXw8qHHr3bpeioDLFombRAzWTzWNkxAnefSYiCiAeHpkF1J3MB8FKuoDRE2nfTwFJdJfnhuyesQMQ8",
  "key30": "3wrEEb55bZpaRbzMwtcGfAXpJeknREJdPELQUXd5sAVThXAcLZvK9wBQBtJtXKCaXibmiaM6AytH315x9sNsfxLW",
  "key31": "CjyxqvPcTkjFQjhGVVof7RoUjSnKteByWPWkt86aVuBHn4v27Wdr6jFTbPafrTsi3EZeY9Hb4AHSnNjm2kTdE8z",
  "key32": "5tReSLFQWLW2bqLDCcRyKTwWgacd4j4CyNSbPx3HUAgPhwZfUmtYtm6BNiYbUjfyVBYo6SBN3v1aTX6gBJSh2BAG",
  "key33": "47j99rsFctfLUD529HaYRCwz7VDeJsnqaBMkFzDGb9xCkv3iW9kmWWQREBWpvuAJvkd5SxxDZbYrQmPy1ZgjeLDA",
  "key34": "5V6mq8NxDBh4YDEXq3mymS2MvdLFXGp1fbxsm2fVGNeJ8Qh1fr5q7wKgUYcRmhstpFuTdxFStZpk8X1yTbFsckPr",
  "key35": "4Z4Erbkd4MEGiK5LsgUyCzvgvAdbaLoKR1Ymi3TRe2znuhBSHStxvBjRb98Pzp3tFfMvDZtZvt3LX39ZLypF1CYo",
  "key36": "2AEE8GLwQxjHAbVzDybbtzQ9g9EE6dQ3hqJq8wCDaoUAh8X3z33JT3HVhYGea3H7bK5z5Vrmg4d9kv4GwqifAdfo",
  "key37": "23FcwZxoXd6Z4tk9gVS3RcVvh8CfLCvCjSL5ZNAWTQ9QZULkDsYGUMasxvJTx4vLKwxEVRPx4dMcBFTGpRHpzfpT",
  "key38": "5K72vSbBbE1N2DC1U4q2W7CUVKjAjRRdXFrxpgtJu4PGZngPYUodZu9D5EziuzgdHguDj7SCJ21nNMktfhj3o9A7",
  "key39": "LcaDZHNvSCYxvBWLftGLko6FNGCudY4YcL6ba2Dv1BMBqrgRn816hRow5sxdrzA4rqxf5DfQd5NH5d2nUMSSutX",
  "key40": "3ixMEUmbfRky3hdgEF28oizDwDacTRFTX2kNyUBi2qYp82yJ4EakL1g18AHhykyheFN7As24RpYwdRnUGmP221fh",
  "key41": "34d85soFwgqJrS15hgmEBwXEfAEg193hm1kyizG3FJbr4Ax5exCepDfUxV4mdCbQzNSwxbDyegzcoyGodTxWE8z8",
  "key42": "3c3PZoisUgFoMokwJXudSaP34rJjfsyWnLoYYUh829xtKoXg4qTFBSPwZghJDvoeuSKvKTEYdtHZXGht2h7cvbfT",
  "key43": "KjeChFjgX2Z9YB8Zzb3ufhCuCRZS1chCXoYpHhnABDEvqpJLXpmPdMab393dq73XmF93AjbpiCTw8C6DqxBmdfX",
  "key44": "465VP2SZVxmzz9WXoQQ7s8t9S6T6RPFvUwYG3ixt1qJ6gUbB7hnF3aQRd7uNhFKgzqVBBK6tQrhZyPfbiQfkSVGe",
  "key45": "3gyAtNEJoYKN3cvsZ9v8Vc1Xw3yBHaqBypyL44r1iBiqNuaqHBkCAvSdQQuKD3efTVSDgUWy8iwwt2BPEsfoXCNs",
  "key46": "2jP8Vsqm3pz6ZFQ7znTYz6JWP2z8aoq5ASPUygUZJSg1Yaj7JEHY7xAfh1HkuxVWapJK5zjqfUPTFDYgJKgiBVM4"
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
