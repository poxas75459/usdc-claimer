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
    "3ib6ZTt4EBM4tkv2HYucVCefDthR9hXTUcXoBMq7CDwxvZU7VuSWzL3KDoVvboxzx1Lu7ZSL7F7kg9MiPNGKt3vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26pavC51Gkx8fSb84CceGCtE21mV7vCG8G75mg9USeYHdn7Y5VDR54CLwZiENEFrhHbAxXJjYJaNYvxio2ADA4Go",
  "key1": "2DXo8FxEKHAok6sh1iK18dhTkfdRAqgL166pgsQQ9k4f1jnYWocrCVxtANNpQkuswz6fWYYTjvH9azVNVYdzFN3V",
  "key2": "2xguhgcFhXWk8GN3Nz9QvvbrUNEJaS3nLU3ww6tZ7zEZzZJsSLeG6MQFp99ixWizgzHtjotsfzRXZdsGGLuQFVjj",
  "key3": "e1TKDArRa7z4rhwss9V5RwY779JqsEZzH7oyBDD8VzzeyvA7Lfz1iQrNHejjukVH3e8exeDocvcSvs2oMtEvtYS",
  "key4": "2jzaYNbofuwjK7Xz5XxsXQcs7bEAWqV21ajb7VYxkceuYHWEfDQTAXGKri8Xxcty2b3ADzyibAcu2cjkkP7RHUWM",
  "key5": "2neUinomcnCwwkdVEjMWAPAFArJvmJxW9NKLtZVLTY7EJppYP81hQKpDbxciyqcv2PmDp7QQZYQs3A3VRMwzSSBJ",
  "key6": "2hNcRMPTfVtZcMP6RmyBbzFqsaVg6KeMAYknAB455UX4UYf8zL63AJH33trJcsxtQ4qYh6kaK1nf36X3jdENvgek",
  "key7": "4qKTffoJaHmRzgXfSVGDnGMb8fjivvweEq1tdqYjVQf4Ej7vdRvhURuo9HPcZJGgKYEQCEjHSyxCPA6D1g8GNEQK",
  "key8": "4gQvMhJk33ina1Epw6jivB6FnUTqQ9enEqEL2oT2XSx2iHM1UZCWTegzTiFpF4ndUQD4qv1efgTSKDGcDUneRMkP",
  "key9": "5E2kvZzhofBuK5MJ3R3nnbKNwKzrXypVrX7U6P1crVGpGFrBiwgfm5TQGNN9P9kCmJrvQ6TKePHZDs6wwpShchHU",
  "key10": "3cyWDfHBefMqu3MjHhXUTvt2vcmKc5jpa3jCg6w2XzKbT5fFe2zkjAjmJfPWijATiwPD1JHD2xdKm9PHJbymLPkF",
  "key11": "5upytDxYtZb2Te2yyGnPCRKBvB8EqKzEBBQmqcGaT3kN6KA9GB7LtrJZ7z5ua3UksbgZpATQK1XEjn5YXZ4tDAEY",
  "key12": "3pZ4MF4x8kG4dAfiag9NWRW2viHMuq2cE4ibN7UtrKqxtVsvHcCaQk7aRa8tzXNXjNbcBMuhuKiMA617J4XJCaTt",
  "key13": "5aeYU5WWcdrVAqbQ5xethv9yBVKBEwyWwofK89psLGaVPmkeVWckbm4nooQGi7YtjHBTUpsn54YkwfmBQqNNkjg1",
  "key14": "2Na2NXoUJRhxi4VbBKN4J15BZ34hWeGLam7wfHAzfifeZzKNuMqc4LnN7R4byfKiJChvtRA3FKYXUDg7NmbrnLeB",
  "key15": "5GcwXyqr7sSVr6EH6rG4RQo3cRjUTBYD7CR92tp5aqPCF4oMULzGSW97PorgAwZvSUTJCXDyjFnbmLSMMf8xdmt6",
  "key16": "5HLS2WLXBNB36ewWmvTmYMFaxzNMzF66BKtm2XYUnUssRoh98QKM9mbFYYU7sJQzCo3pca1kKqFciK6ft2RRM67o",
  "key17": "3SapyaxkLJyeeprhc38ZPHjJaDTVMCfFbupsp65AycE879o213frPuaw74MheW1eP8SLHjXuHfAYTCZEynhqoa6y",
  "key18": "LaiWvqDPT93oVS8Ghyi8DH8yqf5XPFfwsSvHLzySCy2LkJQ6fQU1BtxrpdSmxYfF3i9ZX3qhuV4uha6kGvRCkvD",
  "key19": "4LKB7D1pwz58VvnDTt8fx5Vwd7U27DhLhoi2ke3yH84bHx6ezUauid9mw2R9cP4mhcAK4HYqXCXQGehyrnAhMfMy",
  "key20": "3BijbD8BAx8u7b2aTvZytCZtNm9CB6UzRD57gp23tcDTqBKMt4xSUDwwxmT9nVcdX5THiBbrgNytACjWZSKh8maX",
  "key21": "5wCuEjSt4A3rwwXemeUmVBYadvUQzAbEvPLCR1ro2VXu2JL9T3taMooFWoZ9yQtypfjjccEEpwY43237cNKXEoz",
  "key22": "52JTFCL6RGX6YDe3gJtPBvbDVNEMigWnfMVeZfKMRmko54naMcaB72jWZGiyFjKkCTZqRuaQ7VBR1zkVcjqReHMt",
  "key23": "2Rw1pQxY7TWY4FZh5Gzhxt5Z5GFgB5LK8e3Lg1nQ4jwSostmVuRBxz99GmYqAY1P3yAM5qMoHyjCoeWDms23gsXt",
  "key24": "27ogKkA3mZdiej9H5ZpuFboDVk8rhpdiAVmqixYJ3dsQJZQDvAKCV6VoJojcb7ghD1C6jtu9tSeqx37mx4oSwHzd",
  "key25": "nAu3kWvQhLUbjunyBWn5qHLbvudzPUbZmg9YY38CwrjzNTq6fWGMyTiB7RfZTg1vEKWV4fPzHaE2W3Qwc9NhwPw",
  "key26": "3CtRJ3EpTJPPPBmg6DwvrT4Z85Qsa9vmVk621zngeixYAYkucAFo3f1oVDv3fQ2ByUuJjm5TAEK62ywPSRUerqQx",
  "key27": "65xhL9o2buGt8p8mXkg1y8a4QMhTiuTvi1j2KioVXRZnCpp9JVaes5ap2EXTHkTzq2WSYAku37eCsPmnvm8yBkWK",
  "key28": "2kvWKsGNsqhVG8iaRywzTC2Vsm7SRSEqoAic84YzD18T8qdkhs6LrDMFt31ZN1YsBdxPntdMFHhhyrowsbpb9rDX",
  "key29": "4YmydysRjyz3r689uEsGuFX7S111mb2uN8mbnCFa8oCAFpTJoQGF9DZgzf2RyqLg1BB9ENkSkzPVyvvsQj3q4NyQ",
  "key30": "2JPCt5Y81gHb9BNnfSW9gf7DVJRsTxeJSmykh1XCdHXoDWhhiAipu7ZFVvgTZfvWLcN5dTuZHJwvFQoixbsUf6jM",
  "key31": "3z8ZC2SqrKsm5EQSgx9E4d8hK7M7cKXdEY3wnmsoZVbE1Uphking9jHxVv9HX5BTa4ABokBACfX9X3ESAY8iLLGj",
  "key32": "o7r88tHQmXEJSGQwN2hXWv57MGCa3vGU1p62dsKdQCMmXjfpxooBziXPpmPMComphnekN8RLsSRbFqDTyo5UTf2",
  "key33": "4kBbNkYmwXUWhcMXzua1wKFUNFCJtEHMnd957kCLVttE4GBG3sfU1MaiXQrLAqFoPBfPnEC1MWE8duoEzQSd2pRW",
  "key34": "3y2kxiAsvUhs7Nkn28nEbfxKn566U1BebBrHtQbt63DhbWt84YZwAeEDK7kde6UUyuQ8tL9ESQxoCZxZJnpAy4Mm",
  "key35": "62vHBL8azH7hf2VeTcxPeLzKgR9H933UaVds2TPmijVqMD4dtuBW8AFwLgWFAHsAVrEfAcvezFq3NCzzxKAssdVK",
  "key36": "35ykM1DfRCHejb4xsZ6wNqtkBVqxA2cVovA3yh2qyCDuXVitHq68F7DvyoTPhV1pSZG2MRuhu9KXbQurEJHhv7DL",
  "key37": "igLHo6LAnvJ3uLePjfcTuT6LMRKXqejHJ12ESCMSKPggR3bHVcsx34RJp3QBrjM1NWM8X7C8KFiDXW4NeMVLQ9s",
  "key38": "5FjzbEoaFTAvSU7h6muYnL1z18cZ9MU8oxJRgkvYuAqKHsKrv3Cx2ECVZMkJm1yYoswbQoarmXLeWhRjk2UWd8N6",
  "key39": "2zyUpLhkZLjSE2iAcQ6TNfdKpQh8Mj7cqDJwLUC5LTYjX8P6yWSVm1AeWxFZwCFHgFARd2Q4hJ8ZvJbEa4YXwtQs",
  "key40": "2h2av8ABWdBwfvPt25b7LTFejkxeh1BnNoGKcdnQ7aCCRRDk1vjLDZGYkHKWVcMWFzvZkLcZb53nC1hozDgDESdv"
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
