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
    "5RArJjouUSRasV3EFNGJbpP6KZToddJ5JnF9v1ntYQEDnyvuzGM96L8dMiC2WYPN6fi7qZqrpqw7RiyRU7sSUq7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55baMYqUygsWMLhcnBmuYuj3oBXhEJsbi2jjEVMPprduuv3ygGb9wNwgHywqibX82mBG1AK6UJFjEoVGBdHEzFy8",
  "key1": "32YViXn8FWaFrkHkjLJ4WaDxJVvLdNjA73F13JkBdPfsXJ2R68bbGhkairEBKk8e2cRQRwmR4W4mrp4gzkHBSFUt",
  "key2": "5qGsQpR5cPGyzi6KqtgRffcUUuErVsxbyLhqicdVg8iHU9N18rCeD6WyKGc9zNdAjZy5NeTuF4tfvexQpaRYEaek",
  "key3": "4yNqhYmB86YxG53aBktm1T1v2uFv997CYfgHius8rUgoVXALYbMyDmVc9mpeNVKjjMbvGhBeeXDBD2RyK6Ce3dCK",
  "key4": "2G3NLK8jeZwsw8kUrpg3WCAXckxCNAXKGmdhF1dBQtyVxSKQvsc7WbudKpNEKCgq4M9KK6aJYfmuvZiLVHtYwW93",
  "key5": "3zobccep5DXULfiVaSxYaHnP7V8WvYkRai3tZvDXdPB3zDniFYtBGMDzqiFTxHBphGhbhbPVhvX1dMi2pXF5bkVu",
  "key6": "5N7tQ43KrJ4UnoVhW31h5pM75o2AZMrubG64ZZTFrVbeMz7XsBVzGTa3y4waHFSAaLbMS9pGmRjkBg8myPcLVWQX",
  "key7": "YrSJFkoTFvMDfCJQNzry5268zVcn6ffDwCJsqFsUkpivBHXqHtazDQDzHTHBB4QrZbZiSZhxXbwnU2ngSYyv1hG",
  "key8": "5VQ2GS2wgN6GZBc9HNKEhF4KrunJTAUG4UzZgqozfHuDtov8MVr7mJu4z3VzNWyk8gKcZWqn9z5y3T57rVphvjBu",
  "key9": "5qidQhCsbH9kE611aLK6Tb1PJCXFeK3ZFQACFegt72yd4teG6SZuGxdzDstj5B8TU5ah2TdxdyP8iMM2Y1L3hnn",
  "key10": "5CurbAxhS6i4JRuQhJ6Y3GH1L2Rj9ybWpxJAGDEwFCcbZ8xfijRUu6vRfnJNDHJuJVMuCfNFGaNUY6xEQtdNr6Yx",
  "key11": "5SudR1JgS1VuZguS31m72Mq2jEXMPKrMwXd9b9sgc4pFswVi9xGk3WoZoJCJ177yz9C5S6v71AAZa5qfzV3DxirR",
  "key12": "2nbzm2zanV6wbRYFT4bD3BBJe7FuDJZMH1NBGh9QB1MduRbFnT7reeyTFRs42jFnbZyoLg71u7R6xywWoFoxdEG9",
  "key13": "y9VbHAuVsBPRL141HejMaf5jU4X572v3DRAgXGyxpkJwPome4CaN74JDm8tq5PcRstuvjbgyYQhTiMoSRgzD99N",
  "key14": "22pyJNYTqmNX3wDoSJCkYhhZK5tkSpDmQdr7i6zjoSxivnq2ActKtRVX2TLCi1cgWoUpcwfrHyyAdaZkGARSBT2t",
  "key15": "2xsvrVrXZSpQdvNFfUEDyJ4ixBpfaGPp3mQUuw2p31FuWB6TQLkGiufyAthzSjADiNZSNR5dAygtSvsmcCSjcjzH",
  "key16": "mu3nvmkUffL9bxc25pn7u5Jt8cFAcyEQzn2odbrEkoKSNtFkJsrw7BmWs8Dbsz1NCmtKo7ztu2jJwS2znQV32wm",
  "key17": "3RtQP9frmYUkVUZV1iBRJSPrwMh4ieatEF3CwSt4ZVzbYXJq8aWHtRkda7Dcz7PBZWR1WA37Juaq7pdwTmXM4bjr",
  "key18": "4MbMjWbMexmn8LPPgQHq7bSHV54RqxMhGEsLk58H1Fov7JZ2GspWDp7HmFEarhsyA5SYjXpd6ukPA3TeUsyRcZnu",
  "key19": "595kfwvq1oHsRAdYfAHZmHijvGsaPZ9DByLX11Zi3Ca2WXNT3bUP7th1zBsTGdXoDHKaK6nHX6a6Vhfd7CTDprwE",
  "key20": "3SW4XtMMS2Ferg4ECyxU8eQnoCLALaCuAutuwmY7uUsvGkkAHNC2u2cLwzo1JYn7UAHzofaknLB9CzwStbGSpqj6",
  "key21": "47832eggzXQwU9nyD9aZGuTU2A8fvdoEuLRvDBxjpyhr3HMBCZSY6TSks7hDTr9qfaJfeyPAvwg17Kes1FPsqJ9i",
  "key22": "4tKGcCiMWjo1PqoFcZYF5NzxR49jshM5f2db9zS8x8usp2y9SjnPm66c25YKyisveEwzRSrkvkEsEHsntezDgwtL",
  "key23": "25u2SQANp91Sq2kBssLJmpDrC6LjCi8JGfzKZEi8fbAZ2zEjvkHqwEvr6PXGnUUNpHncEwx1jfsVd9YUfjRoestG",
  "key24": "46RGDoUf8vkeRFRLzzEAR1FYiVL1mWSaUGREzjyLXbAiSPAgJuajYFRW1j21z6aUsywHxR8hYWxyxrgHxixVeS4X",
  "key25": "4Nc4MQWt6UYLjei82QGCTaDSwvZMjWQcVSkxuAwf7Ambg3Zjn9uNuubBtvsCdZKA1KtTSWv84yBAgRSQBaU2prQD",
  "key26": "3RNky8dcmcZHcVncNmowF4aUWo3WQKs1q4BM5899rYhNC4CvJDUdzXKVRXxL635Z9LYwr3KXJGkjTGB6mp6yb3aY",
  "key27": "4sQP7zzvFP5TFZWkEB7PZjjSFgedNuYkm6iyAkKKZe9VdBy6dFiaP5jCm6m84u1fVP5xFomGP3wGjgJrj33DRxVK",
  "key28": "RJNGyuXRPjQGhadGyWKaozAnLaBHWdQRbseRtHrWFbGXYKy6gT9hZ5KZNf6MTWwYZat49EpjdrvHDdFCUJtnoYo",
  "key29": "oetjy8JEQkwJYLshN74dyV5a3Sj4MxdgTbSoBMseuGAZNaDP3WUFrqo7QY1ptX6aeCJC98TehL5HkLWd2zUKs7q",
  "key30": "5vFsk57eJz4Gs98VoisjZ1mCFk7sCpSYeatmwM7uzew3CuTC9pBNwRez5tvazwhGyqf7oFEPt9TqJU5qEt49sbvr",
  "key31": "5F7mfcfEFaDJ1E7fLVX3SbKs57vmbbe2d2kdT2moggtryu8ECSno3sdjd7oaB9CsaR99AiKvU2FsuqDjvF11nXo2",
  "key32": "4RwzLtYXYx1MWzGnqW8t1bGifFdsuDF1BfH1qDmYepHoPgNYLTSgmM1NnmUmEWXTPn75d1sLHbf95pin2Amvw93K",
  "key33": "31nJdRus6PdHnHEboPCT6r6tBTnzG16Wee3zbENqJ6UHqZdDhrfnKq2NhnqsiEEPVUvifhc2ha7Lmb21kntjsUnu",
  "key34": "njfXHj8YcZaUVYuD7jvCXjmPmasHtg4VJKyXawhJbS85sQRewd8vR1AQmBcPXbKHARxZ2gehLFhehQ7ieMfLNfh",
  "key35": "3k1h8PXTN3ccPgAAG6H759Gg14mKF4wciaXqufbhYTRAfGiuNXLPTpPLBymYV72w7gggCSFo3rMMBnDDHwVKLP22",
  "key36": "3NrN7oY9ZCX8bkDMwqCaFgQpFR9uJ8jXXq8cC9RibEaxGhxUao96aCxwESVaoMkEuqrr46jYFF3NNVX5ttYbQcdw",
  "key37": "4sEdrR13FB9DsYHRbwPYmySttRVheS5wmHxzxS6nNpYkmpBKPjAxwM3qGtrVa6dUWd7PxqXeWZL5SJ2zgcuXwm9o",
  "key38": "zdUsfLXGvciHqoP52ooXKVGUSSxD6PcnSjaMVivfVmt2CkqxsQFw9CXVwEuD4PAvgbqCoXLELJ2xU9XVCUczCV1",
  "key39": "4LM96D6Qjf8YDPLmWHyxR6YW51NFto6VYJ4xKYNN8L7kyRJpSJXnTLMrHXe9GumNY4gstJYAjtQiuw1sQhjSUrZu",
  "key40": "62DXZzFDySWcD9kFod1r19aN5mh6LnCtiBCeku47QDrFr43tA7DX12PeskdDg7cAyrMeKgVaVNwfVFYUTyfjHbrT",
  "key41": "3DbLhvb5rSXzuSVd9qZjZy8tM8AzfU2i4NAsXvc5u93adeYuy4H7NudML96jgv4wajJHEA4nQZx8QB17eJy9e6tX",
  "key42": "4191Rnn2MCmr1mAg1SQCMjKYkSMLobMRynP9UxRdxBEWwwuDs46mDfXo5HkkmTbvULPNQzVpEiZxB9REHVfK35nk"
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
