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
    "35yLhFPAMJPN5mgRAC5DZ3CFUWiHMSEMfUT5qxnkshgD316WHXDAwr5biNzHuzg3kthDhyRhZcAuWHoVwMRLVVoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "389V57ZVD9EZzCNjdoEGn2BKWGdMLhJzeujyGdSPbXRr7PDwHVMd5u5NC9S6kMxbg7HW4Kw3a9KWGupZCDq15mui",
  "key1": "4SpZxzeqsLd1mF97mrB2JNyGKuM9hk83w6pF7fLETsj1Sz1p2DVvybyQmmZSeEnCkQGzUzNbfhaJMf3tw8aobnM3",
  "key2": "4puMgZnAf6NWTegqnPuTHsXUzKvbmuJRQhzs3G43x8TXN7hG4o29CXzszWVGfoeMARtAUXqKccQG6PdPcSFhSLYZ",
  "key3": "1dr51fTD7Uf1Ni2jDxKXszD1tgCom3unm3Qq4CkkdvuJdecD3YkQyCz2oZmn43akfb2wfW4Lca2ReC739B1C4y",
  "key4": "57mgm4fzdvmY1HBRsddZtmRDqz3ZGw4LHR3r39RUA4PbRjzyJHt8CzHaWcboHUEnXgCfxwrjLMHPCatdoAyiGd4i",
  "key5": "5KTwkESvMhxAgaJsBmC2gVA9fV81EPARy6aaVjHiTbEML8axk4rp19ERsBt1QF3Ca8fxDUkNZ2fC2UBdShbrpc95",
  "key6": "9tq7Ca9UDELBLL4shB7PPdeYBBT1jN4gFDEM3t8e9kYhqTmyNBcRV8uABxVTK9hLKJ2TzS1tBuVniah3iAYDi4s",
  "key7": "5EWAg5UmVBRCVhHgEiCxJTU3xVmFnriDPuadVFtUajUaZv9DwutxeVZsNwAKoHJe7DdxJLNH6jkdGY5ne6EDT1HW",
  "key8": "3DKq7Sz8f7VkdWzrhL5mgauotx1sbCNw7bp3bBXzXCLw2HNBQSGbQLFtJwcA7V8pSShhcQrtKgcVyijosrMpBDP8",
  "key9": "2hZo1aHKedB7SfFXPWZkZxicW354xJcczn5GmjmfmokgMoRCNA78sAAohaLNNqC2sSqxAUCG5EQGb4rpCRs2jMmh",
  "key10": "2wZ61d1vBc4yNe1T4o7wJxeyUEEZ8isjfw6NzupWinY8MKN1X763qa2GPQqFFER2BKXyd6ryP9LBSgRKp46EYQBy",
  "key11": "22BXtQ1eYDmuUv1PAfFvMfswg7RLr1dMnBB2TPm1Ut45hvTWWkMcBhJn4otCTJi1pbEZ64gZtGH2ufK7uU6HUbgJ",
  "key12": "3vfJ5Q6q8AYrTr1KAFwvc2X3DktSnopN5DdJaPuUjCBixvGdC5NSJtJeuWFnH8eDjm4bSRaeWe33mfBoG9C4xSjE",
  "key13": "4FEnsMgE16wnNeKqmBvD4zGEXiWuJvAS9k312rEDXiqdQrkTE4Pif69A916dRB5sm7nLieP1iyY4Ei6KtdWvUpbo",
  "key14": "3DFAfFQ6ag6PvdXbApRVuDXyJaMe2vpdtswjeZbTp2DpkaKGtrMgefpHVTwd8R29Bs5ZF3kTF8nwtHygKkonaPVv",
  "key15": "7hjb8UJBcg9AaHFoYBd5eevL2Yidm5pbdUsRe9zY7vwxLk7TuV1SZBkknBavuoTxVcsPSYwX7m9kNedSe7juBwE",
  "key16": "2Ych3MBP8dS1oLMoMc49FGNczPT1aHUhF884dJwEeRpKqWEQKy96aywaF9Z5B6KiwFQZQ7QeZkSCDU1qcRi5KHXf",
  "key17": "5euJFopLGuwzHtzeJryJ2WyW6gosD2UD1wmg7mGdC6DgiQNoPAwLfwTn5VXYCjbutbE8Ki5YtRvpw7kxu98d86Bi",
  "key18": "2WjMEz3qPhEzqVjFR2QTQE1VLT7xieM759VXE6i1Rugm6BHJvtii8MdKWLXFu1sZMyShfXEeNvoeAtG45jrFdTzm",
  "key19": "5w3DL1UUPCpF387bnZipr1rEcCNnbbMJ1sHSwhJquMcjtqqBFEwsJDwbEkXWaZgtSpfNjrpdYsJbF1ThcuYUheBZ",
  "key20": "2YGv6vwBQZRG8xdww5h38eDdxTyH83gzFXfVr9qnnjUFhuxMeFMzHpJzqvPbhtn9MjnkjeE5CWAPD67Dcu6svBZb",
  "key21": "PiGrcFYbYqjvCUcWHzixDVYFKoUmjHrXCH9L1BoitZa1qax8yNDb6xKtCQVm1Gc3GD6mTFSxZkBc4AspN2Zzhqu",
  "key22": "33wejqztgDn1hY2US3Kh3PA44C9ZLaqb9jWQTsfdJiCdNSgmAb2spiawcjo6HTqyzpauTcm4y4hxaW9KrGH83GJJ",
  "key23": "61D2WUaRu1HLHtb7GvioJDxwMT86YNTogEFqd6gp8QPoFEqjiUqAygdBbSv1CLboiq4JtUgwDRSAhMdg8J8SxwKL",
  "key24": "3sKvaJp4NqRdwrAVxpexrUbWvggo9CizwykgpKegNJTpP5KSHMmM5zmeV4yuf1b7q74J7JWHpySD7wzcEfJMm7AS",
  "key25": "3PxMXjQaaTGpLPx6EVG1XnNSR28omAgtGv96Zc9ZfbwJy3fPy3Ye7LSRWBpEDsJor3pf5upQr5J3nH5cxA67gfdi",
  "key26": "h9ytaWhjddQYvyMdmZ1y1P82ri6hUg2W5in1FoEcRsZh3G2LgRh1wsX3Fwzmqsyn5oHKzq12Aog2HyhdDYduCda",
  "key27": "64zdNaz3JsfqswDL1cD17CJsm8io6QEZ6FrFaVMNwoXJvtyctT88k9o14GTo9q3fr2UPM1vueZSH5e4jP2ZJqNmL",
  "key28": "9qw3n1v5nF6VvsJiSFCAGvDDHhnFYrSXN1zge1qPWv165nzNxexLm7ZC4AEika9R5TZcdENJf5zicMZ5sLUSdCh",
  "key29": "EWYErtCtiTVmtfX6GatZKBiBasVEs7Z15j3dWbe5BMDNu7bjxrP7fQJwd1GNWJgz1436gk35Kdkk3CxBV21xLJT",
  "key30": "4j2i6FfPkeSyW9PEdZMWKT78DDCBg3WuYKDY1uNdWb35dpWZuoD5h5ELufQMssdNtovnZnAUrxwwfiWz49ARJFjQ",
  "key31": "47U9huZiaPvgkSYD9oD2vQcmy69N69JBKjrELE7QvPPB8Tes1wECUjY9RTAs3np4hzU4wqM2uuZmmFKWyb3Dw6TS",
  "key32": "4vga973VjpHb9PC8TSjy2dmXjsTHtLsPWPNAqLE9nJTwjxw3qBuoy6KXAwTqviJE7DhyXZy227KAQYdXBX3W9Atc",
  "key33": "3Qq9Gzxwij3cH6C1jtfhg7iSSQMXJztfnVJqhyAv6XpwFaFy7pd2YNa7aK5HigBFLHGUEsrRQvU9ug1BMzSN3LVM",
  "key34": "451Jf2sMNi25BFntxxJFuqGysno2Axm9b41mvTCgTGrDU1f8uDpL65AUYuN6LWBJezziEjBb9FFb84aY6QhafEUm",
  "key35": "3DBTzhbD8mSpq6P7VXx5mjFuZJMxkgvTWHiGNrPRgK1cWQzQEKwy2xNXwjitxTbT5oDzQ1RXs1gWYUh8HtknZJWP",
  "key36": "4nYbLiTG11XdhxYKJU6wSTZFBrJR7xqPccUVAhVbxw3eUgtb6HSXMtfVup8JoPbmGDFJbQ6emiaiQqSoneU4Vz71",
  "key37": "2RDw4v9YuPxWNSjL3m8dEJbxZXHMkH7cvhREFofEKzzjx6CHBAUqhQqj2YzvugrzBes7v66ZTLiUYG6GybZoDc4E",
  "key38": "422Hp1xyEaapUMQN1FEEaTj5DTz1HHEYCotwatMs7C4oefusfqhD4wAQZDiQxU2vrhm5FXGHKpjUb8NLjN26B4T6",
  "key39": "2YQ75MMA65dyWVFLbWrUu4dYM31375KPANUUz8xj9N7i5G4grbcp4swyXxjCXpCd72kQZNpy2JWXjRzxRFcgbux6",
  "key40": "3yngUVwPCLfrSC7asugp7ZMFjuQpwLBBjmzogVrW9aC4dJvWQK6PJp9yxBVGYMBoVqPtYYWb7HgG83uFwBDwbqmc",
  "key41": "4N5sfNEZCakmXRF2iFbq7TRvyDS8Vsf26zTmLa9GsNrY2RhCAsSmKTEyf94ZTmG5VDaVGMmAxGE7XTwijAuNCxoB",
  "key42": "3r5R7MeVc3W3HaZsPFUgGGA7oMNnrMT1KZg25bFNda653aRDuEiBvH7RKmhGH22eUXTX4uZw1kcWYhXTJ23Bzt4L",
  "key43": "4CQZRVHhMS9hTeM7J1rEVjbmMGXADaNiq1DUh2SQ4LVFJ9WT83sNtJfbzhsG5hk3Hfd6aAPqAuhom9JnwBgaKDqc",
  "key44": "5pb1YwsauejnWAcEvo2mZg8ZDWPh2jiscSFcRKFqLqwCpj67SodRpq9AVYFVTpFov3ZvDV1jRYVdFFVKqE1mmGLr"
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
