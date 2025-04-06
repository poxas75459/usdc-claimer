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
    "3t8yoeA2PA3AKtsAqGEouLUSCt8qDF3EpK7AbcKxQ3WziWajy7vjAfVLhfzquapWm6tjhovYopmEJp7Mqoo9Bqee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B6yAYNEJJvv19BVJwjxAbVrca4iAiCDgRyzPSsVi9RRN11cg2CxkQnVWpMSdPCwgkp4xJYGEnDXBoLhSSK17Nk9",
  "key1": "f63Ae86sWuwvTs1va75ET512wwCv3Nzxi3dJ7V8dyx1btbTgr17AAFdTPvpBS6jXSh4U8D2UWV3N41QMvmLw6Uu",
  "key2": "49druwZgzA55YGmAbzr55dJjDXLyzeH5iWnRsqgF33zhhrjRwKNa6CsJs7jt2FpaJtJ6B5CGY6hnvFzwfsKUmicq",
  "key3": "H144u9ZJBRh7vyEYpPRkhkS3Uc1Wow5ZNLeYtGVfLE6qLJdzdEAVPz6x7fun767KCwsiKuFyPzUv63rMxRdtDP8",
  "key4": "4HvMGn5WcDRJbJMMxWi9Gx9AKSm8cjGs7HXtJfCeLNswgzWztDcKAcFMyT9YptafFiJGktiRDwFYry8j7e4DiQBd",
  "key5": "46DYrd8dS8jJq2vZ2jXDNY4gcC7Q9HEF9emP39rH1c27T4W4ZUia1yDozdUAW44wRX7yvzjDXossHEzJ8525HTta",
  "key6": "5RCvtFU3raSizBMgFgfZPs1efcJ3axPKWp66jD71baWthV53Qub4Sd9RieV37vBEVdWckKi3Fd7vixLKN5oVmjVd",
  "key7": "Hxq3Ag6z7iidAGzzxnGP7mYKNFTkktt3CvgJN42jVRHbADQYRSDzZWC4pJDjoj4GDnT5g67F9dDsS72sqhNJ1rk",
  "key8": "3gVP21A51foDsAyJaLHikaZxEVFx5qh39s5VAjfnPw5tEoekcwrYY7VvyriLAYwnJvfw47ekGLhHYcuKc7UPBJdB",
  "key9": "4WrhrdjLfNZgPNCeKCjxbfTHq1hENyueJfLwLJ1nYebc3ww8kCCfPKcmQ3pdZg2mHVJ3CByQCQxUVVwSRCC9oDdH",
  "key10": "WYV4gFdJdVwJv8qyVZEn25MhRpfm9qQzekL46PpdZzJqFTcMiN2a8RRKRUmVBJpPuWdB8ugeARYuoaqTDoMHgxP",
  "key11": "36sZraFu7YWbTSs4mejRX4McXCysJcHCwxN2yyMYLjd3ETqcLWi7J8U1YDYgqVkVPZLj5X8LjWPjXLrex29TYv2Q",
  "key12": "3WfqrFaeDZbLTrRn1oBE13JB7cAGCnrNuaV225se95WHVbPigkx2Bh67SFP9auCocXt72w6LEyKxdwvxWRfbPXnU",
  "key13": "3LunW7btBfaVT3uF1DaU3EUffLDbLVsFPtf5Q6BsFfQoSvBvRCtw6vQHWA2cTSCJsTo1WH3tBs3CUB2mx6XjnGAE",
  "key14": "5ubKsrshQe8GStsSxQNj8fXTMYRhFy67st3b3fRa4gSwxrWYWKA6wDUbfSufMss4VvZUSHBeLLXv25dQjM7Um8d7",
  "key15": "32UVCfUJvjUBMckaqFuYo5C6fGmbHQcMxrFFonFnhYanXukPGpernvWMQNz51oxpKhNBv2gLpWoSEFgfnTw5ewhj",
  "key16": "49D7ZjkvEsjFx4hBYUH6GrTcmDwjc4A7mh4jMefAvmNSpsSmG84aDg54xjALjpJsyLsHDjJhNFbVqb9aTZeTuzc3",
  "key17": "4nzRY8QeaKwtq1kZaAzPyTbKfhm3tpmLWTzmRkvHuFeE5rSnzFaMGr6ZEYTrUhMy7ixGsWaX5qBQPK5VfAuwJAGn",
  "key18": "3gdpun6bmY4qqg3Dh1SPgHDvQvHDz2S933cDjD1AhcQEQmuuxjVnvUXeMHv9RZvBagrALvtFBk1aro31Pmrow1pT",
  "key19": "5557sGWCoUBD7qggS6RmPxZQYjzQmhatN7JhHakbiGp46mFipKcbssFDu6QPu7QmAN6nGnBZZjNfGLygLJwxw9m3",
  "key20": "126Rajt9XKDUke2S6xz5BTswc7aXtAMfgCcsAjAicyzeso9v7DUk4jN2htoQ6APgYvU7sww11DPWT2pS5eFKBxD1",
  "key21": "RGrisQiFDnjhtYcrKjjnYfxwauyW6hHbY1S8Cn1yAbEjXHakYjXFetZh8G1yaHt9JFARPtZLoPoT3BpNbViKDEH",
  "key22": "33skTNkZeZnrweqyipYW43uxx4bbvduZADwHZNrXetjeUfEyYkdpHxEVGYE1n3uKnA7na1m1CHVypqYLbTgjYk6G",
  "key23": "2NHwKotVbW4CyMWsQaBKGWAXKGYWbCtg1GVVPkXP4qd8CbruvMpgmBe1fakCUhgfuNTCUx1Q7xu8FT9Wf9jtgSBu",
  "key24": "5FBr3EDLySPsmrfNa7tLrL4Ls8vLqxGk8ZEwSZzUME6RfUJvGGKoj4HArmKFX9yE4UGdnGgrDkcCmeb5ibam4k9r",
  "key25": "3EBgyrJF35mToZvG74FjLzYZdmwx3p2XB4G8jnyR6HPdgcSFJYRqF6KnMTcD7WPfp9qqxMEEE5XqFNkXMmVpefEt",
  "key26": "39BHqGfN7TVS87nbVDugnDtFs7CLu41UJYZP1QACg8KbnNatjbmeQ5kJNAaYn1j7YbpGqKe5SfeR5FTkJnmadCw9",
  "key27": "2V18AbTxMCKx45J9KXse22UpZjzVDS94UBqbPfGiELWeQUKo1bpjR8pDSWt2Zyjg4F42sDdtiC8KTJcQ41ufx5Zu",
  "key28": "4LLGGUNHsYPhDH4JaRyXuSrn2zJZjstpHfvt8WroAsYPvSR9NU3Tw5RysFqs9LXRspTKbn6mTS686MtiAtQwL66Y",
  "key29": "boeCFbxW5dT8bCWbWpsMg3QSvw41ke5L96oHuAQKcRCHREd1QyLk8SGnugvWfRbESgnrQqAbYUBAAV1rpRb6Quc",
  "key30": "25eDDCdGokWCVKcfBRMTMK2SzZncRE3bhgbZtjpaGrSDNZ6hboYCyAztjBVtdfdoaCThWcSqvmEH84xS6pHNEYxh",
  "key31": "4qcAnnHiwsDn6Wsg8n7d1Ls3oHGg97pQpLsn3tR5ydDD8QpWigNryif6nGqnfbULss1Lqmink9RybF8F1yPKeXVy",
  "key32": "27Upg7Ez6rpAnXeAbeXBTePKVhoQkAwXV1PNxiYKDHBHVFyTChEqTMXLgHauRnDuvzez8cjBF4b46PQisfWB46H2",
  "key33": "3K4sKEKFwzs3hd2ExctHX8ue4bFEezJA4L7PSkSharwuv1F62xcEBavpcgfmRR9s6fvNBRYPSZjjRLn92pQzPRzL",
  "key34": "4aMa6Md85gP3v6eLq33mGevX83SpAekp8x6zJFnxqToT4yDxrURaxpvyHygLQKnWF7Yj5MZ13xMRtV5xTxY3tA1W",
  "key35": "5vDHbnDMZa9Uv1BQyadqowvXs7WrRN9Cbg21FW5udsmZgAAxxbfMewAdbUjwHy51XMNa4zm1nZM7UxGRhLqpaYVD",
  "key36": "3VYDKYkceA3syLZbc1Mf7qadroaoKrEnZYr4UuXC8vuCvhh15GQRV4VvKghdHZrmgqg2s2WSnZxfxU1KPx5rNDBz",
  "key37": "5FEkeBmvuhDkqwn5nABNURpK3rGkZp138vpLrGrRiSVB4xWW6B55jgk5nUfBssSWZiceLwmNFEiRfP9fqcBkaRsh",
  "key38": "25DSuU2MRz7RDhQkdZmbK2RDkdn8QtVa9nygtZHGooNPNfxHT2rQefNA6KAAZWeZnHwCZbSwcg9hF79LyzAZ9qF5"
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
