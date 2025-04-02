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
    "4FaWeGFogoZpCoGuNt69SuDHi9JshQH38yBwgGy7Jfv8ncH6kU4ucAysAgznCuRWJLr84TjJoGbeT1tWs2HvEfzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rRSy8Myuyez6a6sHSgBJM21gLwMrruioPt5X4xFvxumpXTLVJJKMcuybt8FdmfRxYRZMLLRvhAYP48akqdHPNDa",
  "key1": "uqPUFGWCt6XhwG6nFTqQLVsHnk9hjkDwz748sJsUGeSodzAVbTbF3N5MV4WdYZ5yxMeFipaSDGdF4b9Jm8YETDU",
  "key2": "2y9ep22ZxGxgd3Vv1t41geUoM6S3iYR8uLWLfY5CHY9n1BGy8yCzQhmkeZXNYmpuYuqrCUFSUxMHUZpxEQg1jj7X",
  "key3": "2VmummpLEQpYDU1Weasg7wYgU5zGwc8zwQDKo956kUKYFi2h67RpFpuZmkXqSjNCMiQqVWY1fwtk89jnph4Crpce",
  "key4": "5r8mPtxr8rvAHZcbeqPKXC6seYyUfHkGdX8WEV8ehePdTmiU61dzYtM9Pa1cgqfwsbGNv4Qrqygiyh7Ew4hueEk6",
  "key5": "4brPbbwWkXM53BFgaXTqrKxkKGgZnsfUE43ZbQLo2G3pC3m2HbdV7YhMsG6v385MM7bgQsbuBwo5ijJxp1wRKsh6",
  "key6": "4EnPbtmcbhdTTgnEFJ1gfoEwtBEh5Z7Kto5GLRLTY2fNRaEp8vDkMraeESGkiZqunurb2T44giQx2FXTASWxjysc",
  "key7": "5QiyYCtuQJQzhJqaAfpohqQHimrnWpwPSESPcbPMshDFB6mSTRhdrSYTu5L1NsMK2e2F66ePUntHnDruWSYR2jSL",
  "key8": "39qGXaRhLaRcmMxaYQj5YDyZTgA4rwpbcrzRB7SvZXiUprvVfX2dZEdWdHAyuBCPT8RB1KiR6RinjujEbaLAQFHk",
  "key9": "2F16fdW11ngdkyPjagmjFWrKQ7TtFerhYFbh6rN3aVuzL7EvNZGSTCbtAr2Wtsu8CZscWbg9XgH45nexwtXGEBNo",
  "key10": "2WfPCzAtE1KMSwjuLVvbcjppu6DvyQrEvb783tgHqQW5TGAQ17fViwSKJ4YuzWYSYMxacSzcKTe3WvrxxRxxcAfn",
  "key11": "Ci93DdUcpK9Gf1i1kMEafHYbrzGR79tyEPLWfqtTJhHBq37inXasrWkS8UQ78391YY9eBYiLvrTx6YtJ5JBxxzr",
  "key12": "4w4SUkm2CRMbY2xLo9Rb95iRJFYxnHwiTFovHHEfzBwXUpCySyDymU1rHWPHAaZHnLLkdQheovZzboTz3auxMvCH",
  "key13": "4LqLPavJV5iVAFQQxAiHYRTJbkAJEAGncGbyye42VcMGjyLa9pAXXW36JQZQ1eo6N8DDTSrmCHC6NJuppT93n6my",
  "key14": "2iFPAvBeUYmX9mzG2RnupZafzD9qYFju8RY365sbXXhJLFexXimcHRX916WCwYZNFDGoFaTEKxV7v3roZVThaNhv",
  "key15": "3Xy1ybV3XaBynsrkGQ7oRydxBSLtDT24JKfA3XjHPjcFMc1qB4qd29KRXcZmVwHRgtvoT4bkeajTDJ1a3Heijdt",
  "key16": "4TbzZ5nCTxKM6MQVUREzr4kBxY5QbwPXdHgWAWhMAmVSzUhn3HYrAzoCxLfU7qbqp1CLXMw1pUZGa5MLQbdNmx7S",
  "key17": "5ZhRwnBtz2DzecEmjhDvmdzKh6z5qFwovjGdcapBt2dbtbJH81EoSNSDrQYR5jxLonV3QoUmMi12uLLnTktkMkVZ",
  "key18": "36pmfvM2Qny4PkwEx1DHSUmRv9V8TVgnGmbzzTTAJuWLps7NrcLzZY6hMnrJaPmejo6aDsC2xbS7Au8zfnwt4LQd",
  "key19": "3senKsdEFdiqnnAV5HyTE3uUf1nnoKLHTnhiq52MJpQewDR3vjq7xVA8guFuW1NNMLD1FPbt69dRJihyVWaaLvfW",
  "key20": "5149XytmMzKqtJdNrPFEYdNnhGMQmc3HLQJaY5rzbegN6a9FVTYiHDyfGkioELWKjuHUp6P9JWGeesd6VHWpWniy",
  "key21": "2A91jQxxtRRRDpa6fCCBXQysJFhpYRnqkHymWKpugJq4KuE438kN7KfzePVW2Tzm1C8sdpCmouDp1tJXG7SVMbvb",
  "key22": "5MLGWenuLaF4rr4r6JUPM4KshksdnsuvmjqZLwEJfTJ9stpJVpGuMc3TPKq6e8cLd116wpCrrc9zSJyRyPgGD56q",
  "key23": "4n7q17rWLgB5pdKHncz51g5R79Jbb9x4WroVn6h129tynZjZ8c97xoovAAiuw3eDJ2Nj9X6D5HmeRev1QfTWXwLy",
  "key24": "3psEEyvKJeHX5fZJzYPQjN2dte2WoNqRD7he1pAJxVoSBq1pmEj4EfUTJ1pG6KxNYiF8BmCAgxvYPf8mFCJ7HWKs",
  "key25": "5Tx6ZmaVbaKcd1RetFUQZKwuhM8C94JMT7W9S5bXXuUSVaJAPBV9QQQfnZjkZqEm1TcBE7B4ajMRPSSy1Pqakd2G",
  "key26": "2YjoofoGarrreMqxEyzprko7Am5KMP6dZrirACBzjWcdntEdHRf4iNeP6pwpBC9UaTp9TXoBCbfqY1Xz2P45xHM2",
  "key27": "3E56nk8WmAUsfrDnWM2uUwwwTGbVEzxRoz26E9M5LrJVL1nskZNDXnLoPFX6EPYauYjDXVuh3HMjq5c7nTBej19H",
  "key28": "3HNk8s3Kb1SxRG2zR5DtwNh375417RqDh4ozcSrjWEgyq6kwKF64jZnJXbDAk7tTDi1LMLXzCfTaD9YJzdheyozZ",
  "key29": "2PK3nd6dQKbhbxqj6xfJ1DFWo8HKmNECWcKTkrvq9n1dAkHuuwsF8PE2A5HWeJFUTryyejwYqQ6acNfGc5HJru3z",
  "key30": "2RJWcncd3fgnMhaczAtpKXxYBXSccKzqh7i8r5red3yjqbME9nvXxNKL9JLCvMwqjVBPYWruFRuUHKgCf4Nb95TT",
  "key31": "4j5vzb1kgvcrmhMoHkAtwSGu8Yqcbc98HbDQTj4AM6T4iCT51rJGKVyRpmFPRxJWYDkt5HVFKxQ6EgX2r46qZtHU",
  "key32": "5efR2hEUnNEPZPPkpHTe3QqjuByvKwSxAG5djEJ7q7BT18qVNsrPqcF1cz635NyBDvaKWtwFx2byEpGvuCWyybjL",
  "key33": "2qXW5j5dnvzyvtSgKcwPoPETS5YKG9NJK3QxtAaXAM1mztvYwKKsHY9mKujna77366E7WJkciF76W5ud7PkE1qQN",
  "key34": "2aKzxFhsyeDrZGeJ345awu22HXP678uxYLBnf7sboNjFaDXtyja2e3VhfdTtjUsgK6QwXMiGBFFP2pXuYCZi5g8m",
  "key35": "3V1xaKD5BMVBYJEX9aotrJBC5vc74RTkoJQMCYWA7C37gSGdZpWo8E6jpYZvqAMo4XwaVmHRzZUsLMMSzd4FdS7d",
  "key36": "4T7Q86gpun7zbKY799WKFe9EWggzCDxo4tkMQ3EXnNfNZZtCXsjHnzertAaAPd9tA7soUzS2A9Prdp3LdDyXMRp6",
  "key37": "4uMXgNxrJGJhczeSsZw2aoEhP3m8QtzsCj4epqPhG8NMByQeMAs6rEPyqnyiXXqBLMDvGWsphtNYiQLcZYniRter",
  "key38": "5WxLhpBMW38WFvS3UXRfJcQtWtWKeyN7Mzw2WaNiig2LGgGTm5wXp4cLUhsLc6rWsQPk4wfQ84TrcjRLK2Bg8m49",
  "key39": "2m9ZHdJstwhwWDVs4xWfxZUeTjsgvXE217gZwnQc4Ryx32bDqpSYVRU2X6BWkp16whmDrVqmiANRrxC8SbFjgu2",
  "key40": "5Zzsp82YxeLmB3YEGrNWMZVgpAd21PNaPLaPXuZvCqrLwrHUcrLQDbVNeQgH126nUrscMpnWE8h9ktHa9MpgDuUw",
  "key41": "5QcVQvT5xDNfRkxn8WVoUfHERc7BCQLdCmzEcmPuBdRFwLshFng1qu2xM8HwyPqK4DLm9C7Z1WCghYSwFAKhBS5U",
  "key42": "5gCV79EtEwfeGkXxdSiUT2Y6gszHXyn7jG1pWoA7oKrXTkjJ3Ds2kYL2y6vP269KYhWUtsm7tcGmHAc1bfGWduae"
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
