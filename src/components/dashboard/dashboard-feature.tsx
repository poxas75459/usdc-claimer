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
    "5t84JM7363Tx5o6qipx2hZFdPV6RiR9WVBP6hxo7r2dAFwzEs64mhfNu7NCEwMM9kQLdVn1fZf2Qt5VKhnnLnLzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gT9vwdiVKAZrX9sXzUKHxF4k11NEf3hTsUq3LjPEY8citSJknVVCxBivGrHGySqUwJExrLCX5iPhG5pfkdVUUne",
  "key1": "3EZVTcCXCPczskEpxUpZxYieGraejMQbHKvsSV7nmBE8WsNpPf2MbYfmv1VcNWMV3zLFvsFPBnEdJdw83679CF6N",
  "key2": "5GEpRwsF1atTiRQUEaFQwEu7RJY4PU7hHEvvRBU8NMejVqq8A6Jy3ZAhCjgC8U9aJw8Qg4cpg22xaoCENrp1vPbU",
  "key3": "3u6YscCxeC7VRcfbQmUDqk1GYBWguGY4abkXCVXjFSPDXdcjrPc1KQCnYauBpyZPS3tBfjoyExv2G9KGch2uKSDT",
  "key4": "28LQ9JEZ8vXMDAjTnUvTs27XkTLvokZigXZjWJhVF3ALjwttmRrqZjqZxmLe9oRcTUseJWgwkdZxL7WYhF4chsqk",
  "key5": "43hYpdAAJQFxsLG72poRpyPA2BaK3G3jMvoMG4GzT2zC1xUrHiv6WspTMPdkRgcAhbhLnFKtNgdXPSDUCwcbnd5g",
  "key6": "mwU2K4fAB6duhXWrVCwqYRHeHkmehpnY4RuAcLWqjHi43JaGoo48N6WWkgFCMvLpDtmFeu5mwCbkqe2GVNPLME1",
  "key7": "4UDF8p4bu2aniiCWKcEGXMtAcbmwU3RxkXxkcCNiBMvuueCcEhtmHFNe3tZUmAZBb1Zg5nrf78wa3m2xCUBjbNvR",
  "key8": "33hxhVDeGsSB4rWA2WLB7NKMaMgjwJoiKzFuYyhUKrQFedLM3qRRGogYbxYtzrkcbW3VB9795nsmfyEnvrviQNMc",
  "key9": "K8fHy7stAWT7uPfBxXj8JGhjB9LszpMyCFCCSFqrFxUtwtmpYgwvTeVZJ8KY8Ngb6XRgzJ5dpWZEjdh6apDcETX",
  "key10": "4AW8fN7buvkngjVUL1yody6B6PYG1RsVKy9AZjP3xk3NiMc9VCv6KHBdYsJiLYsR2jGnBtKG1nmncVHzsiHspMhM",
  "key11": "5mPfhgQCJX9p9GsBrNnqV3oeKknYiQrw8m1wMeRNmpJCFUmAE6Pm2SLEZRDZ33Ab5WxaCWsJYYrf5QiCkfrexu3V",
  "key12": "3zfyctMMUVdsjKtVarRMkyvQijWgD4YzmGVh9HpxugFSZv8ESmGJ9yyxVdMgJ4bxCwJvcnVHSGQJN99SU3Dn2tJ3",
  "key13": "5HgFkDm7fjMtBLnZrQT9H66eh2tDMBy2sGneGsSBn5LH2K4cN4373m8mn5C8ftQKAYv3x2DvULuS9ggw29AoRzLo",
  "key14": "P2ewshjBDLjShGNtwYPeWaNxrSxjUjH5k2PKm9qJoNy2GFrycndrJrKVyN7Bi68573CDiqezhgqc1MK5BTDcsVL",
  "key15": "hjRmJmitpS2f687mUsJGsR1t9wDPvoGYpHwkoTF5VVmJM5GrCZ7WYssXC7Dk8ySj5oKjQ4F2zsp1YwVnNzpXGAY",
  "key16": "4uR3E28CtngWg9m2WC8kURAhF54Wbn7uz6Ad1JEEguHCFLYShavskcP61E9tb8jQFRu92sNCidsqdXkFZzswKt7b",
  "key17": "3LedrBhFxNHnU3XPNadmT65QGcAVNdiaoLShBAH4rJ8i5ZTSHH4mFRoAgHrvGHbFs9iX5VxwWynXMFEtS2q7YTF",
  "key18": "Xmej6j2A9YUHRFtWzf4GvFRbErTiRwwFoY9zLZ9oJeysqZZFRgidyqJk7sKoHR6bW8Uu1G8mRuokh7MKHBWhZoH",
  "key19": "2YCByvVzBo3N67LjdQXH8JdVRoNmzqm2qcFTJX2re8dhsmXVeogZqJjdFRv7Z57hMDCdiFMLnBCNE3LHNqHDM1Bc",
  "key20": "3tYrBaD6yFAFdjrvF2H1wzdRjBBGkDUfV1qJnYyNUUKi4wU4Pq8d51c6ZHmcU2wkPmJvG9TWxDRtDnf9taqFgxnL",
  "key21": "7QAbwVcTg1MWoHnAUzcn9QaudfE2U2jShmYayFfrkiu6w9KHQyf6YK3rZu7UVQHwkYxdP2Ej5oLYhEdNg8dhzuZ",
  "key22": "eJEiVwzdtak5GTufpyapi4EoMd8SAAFa19vHiBiVJGpfjyUiohjUmdooSWCxoSmLnP7qh1UzjiVP26Bjurikk4R",
  "key23": "2LgTmNfWzAP5kLEyirkxazebQwKfCyoFKajCEYgf6PxZqnKN7RtWxG7ZkytT3Bc6BCh353beasBS35nsppGuqJ8g",
  "key24": "37KTwprZcA6LfG9Sckx9RGsA2vFjYHTrfNjrUWWGv1ddScRCDHeyvcEA1V3tHW4V66HKd2A2Nu3Z9c7jgWhUL6kF",
  "key25": "eUVuAy8GSYkUK3p8TntRAEyMW8QjdeZLA5jJVFdaCnvrSALhz5EmZsAA9wk4s9nTsNprqEmqveE4zKM9TRrtaJG",
  "key26": "PsdsLj7vWzoZkbxdADDNzuNQz98txQVZK6Kw72znjdYxpYjimNsJUcGpRB5cT7TSBEmQsmwetGANykVnStVW6Ge",
  "key27": "5DNYXcF5FeuCLgQgayGWaxeEUqq5QCu78uGbAmSaxZ3ywfas2iH71riaxbQTvshWkywFD8gqmvLRYzEJEvByPnkb",
  "key28": "5hWgKYqvGQJHMZiBCmCmcvmfYZTiUr47JXyWxz7BgYUhVj17KX2gatDim2jieL3fvESks6w6A1L4CqAcabugPS93",
  "key29": "8xJxDK8Xsgdzmhynrt4KJE8xcG15U6w5Hroiy9h3VwA5gvsVnc2RRacTY93hPFe1mkxtMXZkq5Yqemz8vBWpqDf",
  "key30": "LLHbFAqGdKxGgTgv2ZnikfUYzPqxGeLVS63mnxyjcfLBvwaWBNJSFYqrRQjMWNfVrpRsL81WS7xfCi77gRKWBA2",
  "key31": "3L2crf71VHR8sZuxcwVXKHo8ndgD2YJuot1KqineAppxRS46ofGG2Phfo4RSEZ19bpQWTxoV6fX2rpi34B7PrxFV",
  "key32": "5mfn2UMVa6wxFoR1GEpprCxmUmJCGdEmpjP5KvHH2cf16vgd2Xbj38w94uEfeJk5kmwUAmGwNH9qy862rmiRbHv2",
  "key33": "YuEyB9nDr8kHEKjvXwA37cuvqB2fypDLPgCkUTr6xkL1SRAevnWUVrKHVd1gVdwugWwTg82JGVoyWJKKeJGBxgn"
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
