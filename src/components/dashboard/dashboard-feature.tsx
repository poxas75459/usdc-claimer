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
    "5c35jzLKVAF84ohYPB68cAGzNSFbfkFfoGR5wDjSmd3sUmQz9uTrRXssn4wgqSjddh2RLLev3q5Pu15HiA83qgym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q6HnX16cT3Kfu4Ae8Akg8XxBdp3EiCjEpXWMA29rqvP4btFge2ydbhxKurNdm3ih6ES61V87A4hUq9bDzceFYun",
  "key1": "21auYsR4z8QeYqUszKnFP2VXYu9XKxVFW2U5yBu4VReMvgQhw8RRL6M7HJhQpb9i4JSDzjLL9izbPynPm9VD5wjN",
  "key2": "oyYidMEfirunhmrA9cUs67jS5ekiSA7JqoYfJTGrUps7Vnc3pc2fAu9yFXej24QvWuFMLNzV7NuNWNqJr12drJ5",
  "key3": "4wvrDgebUthPgbiCfXsyt84XxSxTX3YViUAiFRzV8DEkEpzvuHEeZuQoT6VXmUpQvHm1Q563qc3vYKAvoNWWZPfN",
  "key4": "3PA9nXouiPba431dn2EDqct3ejvtFTNd3u4JfqeQHA8KwQjqoXVKVPADjYusWPfEusemCMavfoPjtXNy2RQxW2oz",
  "key5": "iDgZSxxdhffg3dz2Kxgp9QsSby5Nf4Dq3SmvWHKdNWYVtft22AQpPSd16DyH1zx2SuLC2bYP2x6qh1WSgVKrKaw",
  "key6": "5MBGhCscEmFuD62kJxS1Z9y6jNBVpJYFoXyCVWnXHRtnfyU6xdWR58wTaVd7DqQdJhjPuoFtmbTTdikavSwchbqv",
  "key7": "3bvoQuYvz2Sgjx7mz3JQM53JELdveQViq12K8ehwyXm1mR6T6M2wHjWVHp5kZiF3nFgH3oHGGCwzfhPShP7AdkUQ",
  "key8": "36Wo8AUQjHXGC3EoQt4LvTRE1HFxUJZinqrNtkoqCYTtgRoXJw6zRemkqVwYSqfznx5zEvQMQQpKDgbpmEBVgZSv",
  "key9": "8C6ALWXZHszCHytZjwA5b9D9np3uUQTo9QfKQERe7NEsxxkrs32Btt2MKuoQm9v9F2TZLvJBHb69V4Lx3g5qjM5",
  "key10": "EroRPkM7xfEH81akeuyX5dSAatxjJ8WQJhawqKrBonEYMKgMoLLZdwJPFN98FjwiBMdMie2BrtiCvTpF5j6e8t3",
  "key11": "5gCBfnAckKS8AHNmGSwvTsJJAnLfUgATMzXkU55XL5EgqD6v8d5mzgGj4KFBMQxHsLXwwgpYfd9ziZi8qxFr5VYY",
  "key12": "64upbWUgfTEdD4T8m9Vi3vz4u3kRhKHnyCX9i8jbNPMAw1ijLyrrTZeWt7FFVvNbTfsnE9CQa9eBiJoT2VySQA1V",
  "key13": "2B5UzwyJC5rQbQW7ok8PPfQ6NSrkmfjFv3aap9J2XJSJQVK6DHge8WHuGM1pZ5aHDviQhxaqUG7kHc5t76kSRQp7",
  "key14": "4XYYET6MUWwH7S8QkwXPEFUonjgRoc9RBnUvWoEfQshdgpJ6VRQWccUyqcX7Uiii12CbCDtsFHE1m1YhKRFu2vwk",
  "key15": "3EsAFhGieJ88cStCU1D7w5SQt4doEZrJpRbBuvgNSB7tRw5TDSzAPbLw1rN4ZHtgHTENNgQGr6zcPrpoXrXgymCk",
  "key16": "5JoXvoTYM1LT4u1yfUkqySUZNKvCnR648CrTrsvXtzPxzk7xMyqwna6WnXuoUTP1UyhrSFr6iZa2CqUFGBDX7x9B",
  "key17": "5KcX5hrgQ65LzW1FuWrAJSTqi7StGeY24k6NYnieW6xZUqjbNiEGpoZboMjVWnju4PuzSmP3ZPNNLsMws5QBBA1n",
  "key18": "5kKhTJPQ6bXM4LTzG3QCpim7cAqE5NCk5f8ZaKXAtouWTMCcHM5N7sjfbqKot8CXgqTHYafD3DTk5n1KTwvRmf1x",
  "key19": "5NLbhXeVXqQugPMcJ1it6uCTKCDsVaoeowhxKFe4ez7sS4Jz9mwEMoZqz2xWD2iMZE4CrCgf9g6dyzyFoREXmQZg",
  "key20": "5nGPh8k3t1v3mLzVAxitUwUPettgctAmu79mQotUBXRZqgFHcrTDEVPGciRdjoFyfruWa3csQueduL4fPfyf8xxG",
  "key21": "5BPksUtJUfmNzSzJHrGTaAbdCHVcQ2YL3U11dGdBuLNvJzvAGJrFvZk6BGEs4DR6fo2NqQAG2wkJonAqmLTbdEpu",
  "key22": "2tTRC7wZRsnm6WA7HTfw9DY5C5LqkEwB2Sy5oXbXfAYXUuPNLwzPz4AGkyp5BSbpf4Kg2j7sSXw6gGurJLTEPMaS",
  "key23": "2Pva61YqkHHDAYZ38t4QD3nK3r1XoAAGDXFejQbz4yE7vwGnf817mevwJcY6ArGxvGy6kdTcj5kGAAN65gjBjoUV",
  "key24": "4g8sasbt7zycNDkziyzfHEeoWFbSA8R2q28pcuSB5Nnt3CjiL4fBda5WJ5FDioHaNZRhCpBoKiEsJnQjvNxMMAzn",
  "key25": "3UjupTeTfpdPmbpgw8EWh4ctMzEA2LTEFRrSXfTHT2VxPx3nAq9DTbTyPazcANHikiEacrR9RpHKF1qpmpHAAygV",
  "key26": "5tHU5Yq6YYSbuZrXukP5HcJCijvBu2Fz4j1MxLZn46vUc41vuwQLmhEk35vJugc9MmMWPaHXTwYCyXdM95TVioBK",
  "key27": "3Ka38WtW6oMRthFf3ujXSncHdhYa4aK2T6f4yJBv2rePWYFGkgEz2nc5xQg8TThq93ECLLEsLfw52rGFmyf8t2Yk",
  "key28": "2rasDeBaV73i4qjzvYgt86rq6TobgGYnhHAvRGTiPWdJ4DtgC5nHgmqj3RcvKZxVXoARdw6vAzXtvKSkkXDUtoMt",
  "key29": "3UyQhUZFQutR8Vo5TJEEWvzBSiUt6WhHx8CsQo33yWetJHMK5ZXaBYgbGfqAg74niWbA1gRrHCq6jt2sgaKUM4p1",
  "key30": "617Z2jaU31Y3vaE22ukHjSAnUXhxkJWEtX5xgwVw6WFaPLUBPaM41ZC6UdWMcQtmFRDgsgo2tUU2qpE74uVUiVVT",
  "key31": "3EWcyhJQPcmqHgWMnNDg4sW6hoQPSw8mQs73qdZ8u1tX78XA6HdYMYiDGg2Umd8iPhXcLePciB5jvqfXvevFVWF9",
  "key32": "3aPJJFAMyAHbZJw8phTv74wD4zMR26rnUSZdZMhELVUMwDbfKxH7JFp28zjoJBJkyKoKfkivviWY3pfARjoMYgS4",
  "key33": "4sbcouci5dPitJHxUtFpdKU4SuU9fJPhtTnd91jHaFKqyj76TvPMqmL6i1gCNS1b5kMgGUSHierW3JRunZCBrADq",
  "key34": "35tDQRTbxuUR54R7wTWCn4G4zRtEU2dPtMSf6vrw3hgnHVAenYMnziBoY5dCSeVYY6Av4RvH4AdtE4vbASZMB9B5",
  "key35": "4FynPvKjjz5n5N6SBsxRy6AnAJemXNfX3FgzMD8AGE9fPjEbM6LguQPmS5kXBmoLDovNmtGRyFCFrjsuVCZcoG2q",
  "key36": "3RywqtLvyfxPDXFhCUCBwvnCbV7Tdasad2y558Xowvinmwn3rFmtUBQ15dZ1GYdR9cfn2tKvBj8L1z6tihuCezAp",
  "key37": "57q6bkc4DQHVDoVNRkL2rkCeiGbWTUgLPKwZ2KhnvtpWBo4Jwc4ZVFxXqh67G4zci9KhJfa1DagEdyFz82nFc9vB",
  "key38": "28JagKrdLQhJDWTqPF1dKQPehWM2MjVpAWsDhttfTW3N79Yhj5AUKzx1Xz82ypR27dCmHyfn9EmvG2hRf6suXANR",
  "key39": "44zG1yBrwjPQ81E6twwM5D9J385ZPE52DuyyeiJmb1fEgRNurapz8VLLhDPCYBksVdFJBgWH3MLZ4UfaUR3dXECA",
  "key40": "2C1u8yyD2HBHBRPyoKBLdXzZ33mCbfNNPzPt6X2wjqVz5bkciD9QsC1S2MB1UKQNSGWKUNNobmXzmaaC3jEfSEJF",
  "key41": "2Yv1un6Sg7yJAhV7Gnbawg9hgq7NCsDgA2JmaG8sVkAGzbBhHbfQxuEXHhiCJiuUDpr2fXjLrjdQpnJvP1aGoB2U",
  "key42": "4R8RnKhTmV51Xs7dZz2SaFR1LAaiHv3vnNLVpLJrUjHFTp1sPdgxsWgqLVFCkUJY4HuLDEz7Tfyi8J4Wma5o4hch"
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
