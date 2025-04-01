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
    "skmzqXstzPgkb8grnsRBt959YXJQm8GHw6AodbqdLgHVT4QoCWGv9W5zsExsK1ZXGntwBjvb29uLXbKeENDLNib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cuPYnKykqVp4pLT52Q6jg7t1ZYQfTrG3y3ioEqKYGCaMRknHRyZYapemqbAEHJcKc4Vp8G9S9LvZeVJ79NEP131",
  "key1": "616jWiYBFqSiSebptLfdFH2Ts2XbKHhsH1KNh1ucJtR6fmtvSHx328TE7fQyZyRrWcVuLXLBJiAmLoztNG5mVX5e",
  "key2": "5uHsj7MsAhxMxZWe34Wd4fC2pyjV7r5WcBaZWnCeihN1gReq1QrRWyQoeVfHyHpPcXjLgjfQNzpDHxyQtAvYTZMG",
  "key3": "25ciqDAchoMheM98z93714RMWhSxccYjosRJdvBaTVDQGWoGzDxnQFa8faqdzbD3aUTwUtejLn91BGmeDEQj3XG9",
  "key4": "4f1U5SzML6JLvKQPBstZN1tJ2HK3V5jhF1uLRjn8eaQaLbT5UPJeKCqPNQac2BaadF329X7rb7qpLQGVsFM73Z6j",
  "key5": "4Eo8iYxcMVGuC8dvMk4zHNLuG9nytVTvcwchxnKJJYLXyVLfK5o4PjGRfyWuuviLzCUrL9uSctpcMTNWN79g6FN9",
  "key6": "2A36oX9V5ZSs4DmetjTU5cKe7kziYEvXaEP9KVaZVK7igVmy4AQtC5iw6V5yNDpRX12MuKMf4dnLK1vY1n35j2TF",
  "key7": "5TD7XAjaCGDCGfDfWqxmRDPJG9m9PdT1H5d4ZjSEuovrESLpJJTrfgdqJL9MAnhDhAnX8iSe6yQFSAkS5mAS61Mz",
  "key8": "5BoyWhFTtrXkvMCFXXTUc64YLTLmp3ELBsumSCun45FbWmzQbiJsuArfcKCEpRprH7q7j13zM1m8MFsUjobM8Mbx",
  "key9": "4L9Gc6JHEJ2wMkbePFqnoZptBRzeRwE8nqTsLVh2e8An6RMVqtVVpPWDDNKxrzAjDS5YK4cRqp3wNcUXGEr5fXYt",
  "key10": "5GJoSEu6fWGLGt4qyQyLuEgjbT2oDg58FuChPQ5TtwCfZpcchR2NTfBHB4n6DCpqdV53z9XmBLUoV7TNSVF67Sr6",
  "key11": "QUcVH8gKFjmvzrg6rShYtj8ZS3TfRj61RG2na3zwLbhzhjHxguMJmXFnAqHBb1K7LgTFMziv34LBSZ3kTRPV3KL",
  "key12": "3uunssGhX9fZdiBkZEJHWXsVjCDwQs9FAicr8zR14rHoZT2JTGjivwSUT8HNpdfEAAUL7wL2CM4ZMw29upCnTcU3",
  "key13": "3i81ANw75Gib1wG356aVUNXrkw9cNWdcsXunSmnPC49UMg8XCFyyf6XqfyM3J8adhbhzjVACdabMPhakrkppe2ru",
  "key14": "4UPPu2vHAwNJEWSHco9KwubrcVgd72G3DYvC2cZv8BjMTSHSJoDqxWGeuaPoY2CJMfs2BtyqHt4nDgVWyc2HnKR3",
  "key15": "CpYipuCHZFYExay5D8x62sGVfthyQxHyFQPTDNZgRiUmgAWHuzLFkPrBFLXzyFx1czU9ZUBKZa3Hx3DW4GSt8kF",
  "key16": "ExdVpwHHBzbgttWxawGyQ9F1BpyMUPJDEcugpV9T7rnKqpDgUN8iRWYvrfk6DMq3GjmMArQYvUGNHyKTjfrbUYH",
  "key17": "6CBeNnq8wXJggSAUuFPDn9u6p6Eh7f8s36pzQvPnVC3fC1WUaUjKSMQhMpUxoFLPGWG676uFjio1XVf4qVpjicP",
  "key18": "gNX3VCnCQirwUChSsJnXS7GmmMEaZRS4E1Dfjw6HT2gvWMajS7nsFpTEeur7DDCj55z3aTEyD5JPdeSwUZP1RGU",
  "key19": "DSKxSqZxPhZfoUWeNZuWwZeQW4UNxAXBJU4gTUsTnJ6bggPWJYQgTfvSe393R6dt1t6YZN9zNWRExfot8uuv7FW",
  "key20": "2fmz3Bd2WZz96diKYeJ4Utqqn7hwrsPFDVseL8JSSje6Nszwefqm8es3go89VmSKpXLV1Pd1FT99X5ajY89UJAdM",
  "key21": "2Xgwu79JfXPvLEtcCdusWV53uoESpHhGci9oF2uhTx8Vv9rMoMoUowCLWSSAFaMHZENK3tnuwaaFrPzmtwzJWRX",
  "key22": "4z49jxgtrAmvMeT7vfDH2rVVsMtqieJh8sJ2gbDcTG3jPecurEcyECFiQ6DmNYWfL774QKuGzpNsAuP1U9cmUacz",
  "key23": "3gyz54XnJTfm84gUk1P7TeyRzYSYhQyduZ5DnbJcQJ9erMYn8W6VW7s4vwLcvjcwCxVJcmDRToDc6abGcCszLu65",
  "key24": "3d3zFh4nqtk5WgsnppQz2XJe9Nj1hNMcyRX7ha9cY1fiFEK24BnHbxQgySaBCzoYsdMjJBQFevrLxXrn89TT5f9b",
  "key25": "3dxqZnPGRsWvt4v73L77WcTCmDqFVq8y3PNQuUft3CgycVhRC94qRyvsd5gE12Vgwe6enGUGLseEdaNFFMXv9BDC",
  "key26": "kER5a4aiUET71oV7JtdKXDPvdHHESGXaeeGuf9HBZp2Ff5AnbwsEx2Md4HhV95N1aayhH2RZzTV2k5EigScy8LV",
  "key27": "3DEpEFbzfXmg5Pzend4yaTUekkYBdhc4d5WwNGAczHXjm7HfcYSNtuL83MWXDbJWfT1ixDUjiUgTshLgPHAKzHz3",
  "key28": "2kZJojhPnA5HsVGeubpZCPfmqS2tNJnfEmezngY5YNwhjxY5UQEBihs1KYt8RNW9b19UBCw1R2hLWSnZm4MFv2jU",
  "key29": "54tPyLhqZmmtqHCmjfMM6EmXW6CzA2B8P488q9CJ4aWQGNb6Ny4RQP52sbcsHEvxawUiLZEL3rzSi9YQk4yxwbHu",
  "key30": "41usRbJpRerB86adPTDQU4foQUbyA7krjcb1PEfasAZirJfhPwab5Mc5k2DTxkcdYsMQVh7LgjNqFsckafjSmZdF",
  "key31": "4NjmVNeAYFFjPyUomMDGihPeb4U634yNsko85nMUnn2reCNuB8vMdzYRXVBChHccsmrsrfMb1CL2T6fsdSez5erd",
  "key32": "nDoiRUXakspPPXFM7TiHeSGG8GboMWZbCHKEbivdfmr1YCfMRCioZxuihgu5zyZHaXKYGW11fR5oAuAHdWZvbPx",
  "key33": "YqAkcdxaaQNTLwKx89XJqT4TFyhodvz6kRovCU9bSgJr5FtdVyx4YNQiFFEkhpQWpi3qQfN2rPr4KQ5sGGQs381",
  "key34": "5trrFP4PEWZShxZLF3BZEtJvBx196Lh7Bysr42zeMJBDgeKYRZgRJTS8McF5PsJgcsr4wBLMhuunRkrDyq25f8Ev",
  "key35": "5jUB9XP4u5yw9Pd4fQfghfSDDPqTkRDXxMEAABuzzcdNjjh8RUUBc3hZVaGgJytgc3oSJMxWjjjsb6iDS1jdhhiL",
  "key36": "5gYas3gkNVLCTHcKLMJJWLmvUkwwdqijaExjthWhoNBF2tUNqiVd5o4KjnV9FbA98E7CPHgVBbKVwgSNwR6N1Js1",
  "key37": "63sjGShScNSjj3vx2YEPsNoVcpv2jF2JCRxmxMb1qFV45wJGckxPRex5MFHnZ1V9hxVVMhs8uaUpVWUWaYa5HCKe",
  "key38": "hB5fChFKawE9sHsYyFDK29UnS6RRZC22HNGhPtM5i8m2FA1f2vUjJmG9w2ozBrgnyYD1mqS6Jt4Y9RufMHMP28f",
  "key39": "36rgrPPyoWEGwRezbv4kdvvgceVK5QgfSZ1hJSrfAqNcNntJNUJ3tACzuf6vTRC3VVYBJbVk6FUK1Rjb1br55BP4",
  "key40": "ZUfevab5u6gafo6zLfHvanDR4hiHghmWYVWXyBGREBBJFU58SpE1sEUm3UMshZtpphMdh4ADUnPvtQs1RJRB8oU",
  "key41": "4D6AhRw4FkKQWSHN9qmTCMqDy2ZJsdTWq3BqTfumRxp4iJdupmzGv9DnZndX3G45y6F2T2o1Ao3Q3nHYGeh3oC6d",
  "key42": "2ZCLwiJFyC9MASnxq7suWLZZ78ZiErcpPZCwfDjTotVyRpH53Nv2DSQuhmhJt6JzjUbD1UScWWzGASccjsw4noaU",
  "key43": "2AnRfnPyCLf27HyUBQNrC7MnPAMBShRvhCPqzEXKVMyuZgYnonkyR3SQznP8SoXWqMfnypFmLjBA39oEmfmBf2e2",
  "key44": "5Hd3hgnho5qjaeHpFt6ATdX6oQhNc4DHFY9nry2JVN3s92HSJ3Jj1naXLZtr4hJyFwGHVCcY55FfsdMWDDtEip9t",
  "key45": "4CJEbbxS4LHg81DDEspRBc7UQKq7ed3Vefxcpx7nU3AFWg5vgQ9FxuoUeaqCfSagkeGCgizAiM6eRrMudAYkhV3p",
  "key46": "2jC3dFLzFGM6ZWjHMte9XR3hLMS5kRaXVZPEzYTXsiGgDY2sbmp3jevef84uwCNmFo2SxvLj7gyNLK4BRW946s8h",
  "key47": "mmS2mR51aJy1H3WjzY6SJdKfKU9vbo8rgQN3QHr1RCfCrt8747F8uoj8U3taLXjiHJ7e7gJSSy6MwuxentAwGwR",
  "key48": "5zbJzFni82UuzmmsMdM5HkV1iV1KFnDsHcBPnaEScHPzW2oqDMZHqTvY6F71VKnaQLQu22Kfo2t3RUpp4F32nA7d",
  "key49": "avQmHv4Gg2Ae91Hx6dNtxaHPchVh9rL6LgSazPFgXvcGCWyyzJzsh3mtps8UncqLbkd7BpZSwcvnRRSn5t3BF3x"
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
