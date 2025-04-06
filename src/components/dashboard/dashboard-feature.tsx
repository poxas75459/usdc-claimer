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
    "4fSsDXehSo98nWHLTd4K5WfzRXhwMBw3GDRi6oaWe7fMvnaJsoepfM7ben7f4pjVXLRpPKC1z2h9sgSWETjLkjB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3scUJr734Z4oyMCiNCetECs4z4YA7BDffTXTeGWgLo4JqSuRqhXXbhvmioknUBz6rsxeksgZF3ibujcDpjXUfkxm",
  "key1": "VSjZHg9hfYRccaQdum1RP7dbrHXCh887mHKWindQQFzG5qTFGcttBn9HVN4dtjnzVJfjkfq2rB9hc8JumknJ8Qw",
  "key2": "65YjxrY3BHznaszfjL3RFhrEwkYUnBf5HarQGvz957a6tei5n2jszoTtgpQVqda8CoBaTg6hg6opGnhxsGzLVMg5",
  "key3": "2sTL36ZpMiXHc4P7cdzAz7gvaEqs6s2erYr1bbzyQeCFPn58bPFN47n56jE579gPXadzohuQ3DWxFiuf3swiRBn2",
  "key4": "TfMqTKNNeBkXZs7UyYpcmAPivkMQ4xNkvRp1Vn59G3BicsYbCMZuPbpVVcV4V5jQArbT7g8xe1VRgHiVrQ9ukzS",
  "key5": "2pCbynZTBBmQKkpcQpKensaffPZ17ZF4AP1J1t2zzPCWzbuxbsdXoJStFrmGtckRT26gwxS8CJf5DcMFcg2tEAe5",
  "key6": "59YZk3YoHQwcNtsKZzxMBRzW5nQXfgKwx7qH8nNWThRERCVTLuDVfXeageYajZUauEVNmBnowef6aVjzZsfujy5J",
  "key7": "4EvCVgcH5bjb8JdXFTKNT3oXZaqd3CxYHief9VF6uywcKPBrtHCTPptBarimyswYn9TfUgKyB37UUnQ2gCixkok3",
  "key8": "5QATEAraPB1w4tbn8Vg2uu5LUkaEPzobYdgFLPzH9zVemD5VLNas9VKrRDwyViLtUGL9KgGhhryYwBZTeAHFXMFc",
  "key9": "2FPWCmJ1vj2bYCRtH755xqKtMz9XJYMygPGaYSZFZaQZeSVeQuGwfigzra5TB4BcbvJoZnkNirmrA12NpaP3PQxH",
  "key10": "482ES5gwEFXkiW66pd2kdYAzTYpjBujMz5pDCcfaKzxDyDjQk1tsDduEjDYbUicxkWYCePk7ZziTQQkniA6ncofz",
  "key11": "5ptEZjxPiBBYbkNaqsZd4GWAmD3rEHjmkZZ6VtXH8thd8offj3unX6qyESPHzAxvHxH6pUSD7d6TNQrvUR7AZF86",
  "key12": "37erYBgKwDcjqvazH76G7TchAjMJXgZJxuQQzybtrRkgx5soVeqwo2L5vb1yoHty5aLKfqUSzUkGhUn6QxjxwFav",
  "key13": "3dbzSJTF7GHcimUGbvhSfHXzcVu9Rp3H7qsYq1NMnEf4MFSQ526LXRJgNSysYXsKDjiGsKoyY4vYxDda8Cw2Vj2T",
  "key14": "3mz5xDLsbG441jeU7236nskvvsJz7LTWb9CNzYTpKtDk1NVgSaXs9eEgzRp3oJnuGt3ofHBxp4My3CctyzLmeACs",
  "key15": "2KAKXLEjSjGQTnAZ1VZY3tjY7v1nNJJYmqgYFoQLee6Q1MchiPhuXXqc4LYeFxRWKCYUF6mNPLqvFyG7v6JZzzXf",
  "key16": "5EAiVYjJCgxkpU5PfKXPZ6NdmEBPYSb96CgLYQyVsz5y7ayVb2dPHkCJ4terNpWzTnsCkTbm2RYWUqfVB8tiSm9n",
  "key17": "3xR6kFVps1YxLoAAfVtXF3ZaxvNnTtFmtuDWcf6kuKb4ydCBYh2XUd5usyYRLacjC1pDu544XZvDrVbnwUf8b6F4",
  "key18": "2QuzApMa24YtQCo37WLzrRVCPXzZKV16LMBnyqLn2w4R1NAndvzYPg9t66Dn8oerG6YJ8Jh2g12VgryRmG3tcCoh",
  "key19": "514KAZbsj5221vxY3W2GmovYsVbX2tMtHByeuTXtLvnQm36NnzfBAQYswPrkp416Qp89qH1TmmCyUydmZrELWwxp",
  "key20": "45esfvxpR6vxCrp5NmygnboUJqEjQTSME6go13cssJPxyARqyEMgst2yCFPxs496badmUQs1RDCpkxm7WQkmwwUY",
  "key21": "5s1nRjYZktUAHRwam7dKfPYLvsSm9yG7TW2j527M1R6MjcsWqrz9Z5aCdjkfXG7wjTPb8TrU8dq9GYFWz7gJq92q",
  "key22": "mhjnJUjri4Z9pnthqdwAc4AKZtnRpVEaHQTZr3QiB9wHkCS5Qccn2ik2UdKCdnegfy55ah7mf9LajagxGZsShkv",
  "key23": "3ehmpUHmJAAU1FUFFLU2JSVXHTYiXdbuzPcSdnSgEUvAqkjREYdxNqTPTuh1qa8cmBhLesaMQvF4JrcJtgehLtFz",
  "key24": "67LV616AqVLW5hMhiSMxBupSk2GSZSwi79GsL4aBD1tTRjv6GZGKzLSdsr1BLMGwF1iRSbU9MGCygs7CfgMCpVLV",
  "key25": "3fkdQYCQq19fqEWiW6F1wq8R1iPZ368fUpyh6DuUT1Etc36ttnDk8ek1ejpLmUWHnmedbCaC1y8ThZMuDcBuLSbh",
  "key26": "42CtZTNm7ZaWtJvPsiko3WuSVo2yeM64WQw1btQnJZxtcfkWEoMdfL1w3JBgk5EQPfiTMdD9MNC3HLLi3C3jxCg7",
  "key27": "55vPnVFSmFUm3kSphjyvQ8THzqnbLyoaEr4QLhV4h46Ubv3sukez81NzPodsBbUWQjJvr9cJ92e5nx5HPVbRMbMF",
  "key28": "4gkvQnEWdrHR1edQnkyW3eMu22CyDP5ZsGpkBFv7RBJftvwp49KAu7wfPi4GNfQys9wRSvT6bhg475Gre98GhokV",
  "key29": "2mbQ7Vx7fb8MKm8bL8Dvet4V8QiNoL3sLvnEcYeMGEqVNpdFTtxNgqFHDqnbvBbc94SUZv5zG5jYEeGBMGKU5Vxf",
  "key30": "3d6oJtjaa8usw74N2kUBAdKe9ZeDNdUaUkjfFVp6dLQCDFvN12z5SPkC5GMd1QUZ7LeWkXBRb53KbXBjfjAiFE7N",
  "key31": "41N7J9Cs62Y97gTYCM46fiVLMJpBJHanHys7jCv4jqHHQuSUNwvvs1JjZxVYNzryaAR7PzpvRurAdDP5DoPg4WW",
  "key32": "s5iTcmWpamDvi1k45fC4Lm8zvFXTDrrK7hwZBuPwn3Pc3ZuoU2dEY3FesQiu3YHsZX6EJnUnDkJCLRJ5Y7LBEGr",
  "key33": "2x7GLeZdQvDLb23CjcPsysayjN6w7s8msHTWFRgtkwhJtfT1m76Kc3VxoPPwsQFyZksG51wQnX8AtPCBSYyPnXtw",
  "key34": "4Fu1gFmcJW86Z6gGeL54nWiwHtearXqFTWyPcqC7EhHhhbaQs2uLDJUBrDwGS8H2G5PzWQ4wAdq2Js575UZWc27V",
  "key35": "4zrfm7z6Yi7DYERR58d3bJ9LKpHL3twWxBPFW5wwCUwkC85o52rBkz31QnauAo4jeufLbivMsuLmXuh89oRRguye",
  "key36": "4NLpEYN8NfJjsoUXE2BnGvcjDbDmNPoPCA4UH7T6QGquyT56P3g9Mzah8xG4GBELLFsFdas5zXb3GbTVivDo1BSd",
  "key37": "5G8cVzPziNP6qrhmsiGmCASUuo92cRE9KuVkBbVjPkf2GFN1umcRjyrr8TuaAz4GovCZ1WovoVLodoKbyJ7gViJW",
  "key38": "KE8pknB3a7jijYPoadywcyGP9uGUjLridGQWUCbabS34cNwNCW4TaQk2Js44P4UVKyLEfrZTGGWcJqxaa9kErgd",
  "key39": "2znnscPqy4HiGL1Qo1aF7xqx9ppMvmuWpbpF1gQSMKfQoMywNZBLTc1ZDHEydQJEbGhygyvWjZDDMXVcwYUCMJHe",
  "key40": "wiJBx5RC2y4xcsRmTuXpNNikyjNEVTXj571EozkoquM296cACY8zmSFHrCZ9Lj2iSVA3hdxWnqiZHkYVURhfdde",
  "key41": "4GpxnktsEMwVTrJXrWNur2DVkfjwAec8kvn3wc7QwGSxZm47Frxjo54kXUynE6dmBB7aC6oqQmFSsMiVFzeA71uk",
  "key42": "5bK91mTFyyzcaSP5EnvSDkbJeEKiQ2ZaZUgZTZtp6oXvmsscdFoDRM7MUyTFG4aYz7QkTSwMu1hsboaasbAoNFme",
  "key43": "5qr6FwdvQSYxG7hW2VhDHgKBKpS8ig6ZFVox1paUit9CfgG1ScbzxgtiQag2B55P93sdAU5mPRaD8nnn4a5nmc5K",
  "key44": "T5hEZ3DpT2Aj39hRq88cS4zDgDNbNampGhn3ZzQU93c6d4Wj6Np97YNDjuUe4Yjc7tnztJ1SsugnEG7PLg6AYqv",
  "key45": "3FVT5Vgdye3g4S9Dv23Z6c3K44HmTp5fia4xepRnnSmgbg7ApJgokc9ezHJdWhu5zQyKbj8ESvKn55Lv35qdcvpt",
  "key46": "38MPhpNETR4SFTua6tuVH9Jk85LrDt7FtiF5pJCpnn3fFYbWVCiLgGwHDGawjtGcGbiFGZZ8zq2Fz1KynZFwZmrh",
  "key47": "5AfBbApXCJLCPZndyYKBfqcYk9g3EgdP6wEgpKv7GijPfcrNnuBZ6WVjJ193QPEUgsz6A1RXdWASwg1GYmr9sGn3"
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
