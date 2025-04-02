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
    "2pAewRuH53sFLG6p9kVN4961JsfnXP6nmc7z2DgjZ9jryzW51NDNCEh93eLpHB3WL4anJBG1NWCzyBUnH8cxPuVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PRXvyjbU52GAyDeLS3Bvgm3rumjf94BFJggVNK9Hh7pDsamRtkjSQEwRmgU67oSTRdYM4JL5o8kJApFnk97qxgj",
  "key1": "3v3ZMzEbtYehWghVjGUyXk1KATLcicqi6vj6bhpc26TKDdTKvncJATUKEdFUsrMdfQeXdTepmVswbFebBGxMUZa1",
  "key2": "5eiREHNCjNweAcD1c5HhBVEggSiVbj28cUzx13RmPBACAMpXkdprSw7vbxB3S41DCPskw1TmVRGCKSsCX5h83btU",
  "key3": "2nfStxPnxsDrDYnGdqEU2KX5kqxau8gwDxRKGZ5Wv1TKYidHdUp7bCfUft8WTjn5pvWk3ijYUsmzsN9hvCyxoEsj",
  "key4": "wp8wyF9RFS18Fzhooea7FuAtytznwH55VMquVbaZR4kdPw7r4Pgv6weTmDDjBnUmEGGTXfRMeSw1BYFJHV8epBd",
  "key5": "5iMUXjNTrkEJ36Bm48gkMMQZhmcauA1gKW1ddBAUdwxirX7WsPK4KfyKSndhLUthdY8JxjgB6UXgEHmfdNm2pjR3",
  "key6": "4BanxqMzjfnoa2tQd89upFsb3Ve4DfebcidU6jVSHHfY4fDfi4bA8FCEyoWHac6RcjnyTmEaxskaomsqwhTuWtJZ",
  "key7": "3TxQeurQEzYXYdYai5mgu9BuHpgQB78exCjYQsVHwSuqvYjfTkawn3gbHkWcSMyUVdQs3z2zfTmm59Tw58JEyY9n",
  "key8": "4D6FQsLt28p8kCif1gTzLo2TSjisBfVv43XvZDPRrvsK3jJKf9XRSHz14SkJGViP6jReptdaP3JZ7mqQxpEsguWt",
  "key9": "5afu564RJjQjNFkahA6u9YWqybyXja4Kv1VAbcv5aeVnPxLUhL8pmrMXdy2DHZYcsnWnesGWCeE6EomLrBDC8Wd5",
  "key10": "4vuPpmGYWsHP5cw5TG4TAohshrkrsqEUhypr5hCrA87iE4wXydXEj3tsmKqB1buP4gZXGEiPpH8EMUGSJdyPLeJm",
  "key11": "cjgFxpLnvSszQrvmWGc9eGa2kZQqQNsCHkeXZqgmDgBa3UEvRkRZQfTFuSopFtcBbVvwKWPd2SnHqAmmm1sjm6G",
  "key12": "2YKRVFe8gncZyu3DEX2ty2aGLqnZLyqRvPQrSANgqJfd5Vdsd7opt5EdJPoXBbqLQpjc3bpXy3eFu1qbtakBv3t8",
  "key13": "2L6dfjzh7fHiabYSf7QyiP6MCqksn7ioFZf3MZcwEAngnZfoUT7zcHHydVE3pSYfGpq15jBMLhNzSwaPZkTH6MRR",
  "key14": "3bFsWWoaR63rJXB4sRZUGRDZvfT6rxSRCCDhXeFj2E1M3R5kGKrY3d91ghH8MVoLzkjawL9gkmJ4ertQW7JUmfYe",
  "key15": "37C2xmkGS9dnoWDBWSnuLpJe9BuzXNsv7EaV5mc3cVDMdQ7qAs22NYnUmce17kZ4nLVdi8gjHF8zsBuYSgPnLmBF",
  "key16": "4bi6P21SFbSgjQhY4tfdFyNChm2sPneQNUrz1TwHw7jdwPPBSmboPHA2XWS5MBm21PsuQUACrP51kEMfrJwQLb3B",
  "key17": "3TDmwxGPcnSa4eN4hk23PaeKzBRhsVX3DKGPWgVP9xX8jRpoSpybGBkCN3gMQHMyLvBufD6Gixkq9GmKZD4c2PqS",
  "key18": "3xX4ayJkBnwdHkUhkzty3qTdf9x74k4CRqXXvi9UiNYPrVCgkV2ho4eSX39W3sMCjfDWzRco9e96jNn3xsHLP38B",
  "key19": "g6vyaFwXsihZyB95BdnDtWwELusqJaGpbtQsRMmWhwLhwzSXNWCN4uaMHdevXwHQyWoRJMDBSnBMA1WTSPhBNEy",
  "key20": "5K9BNxMhUvcHHhaujd4bBDsoF7x2VQBK1hyiBb4Dar6oXyaLJ7qyENBcyBPq8kdFYMNxx3tqkEAro8coWXo2xZo2",
  "key21": "3ucu3Q4KAMEMFnP9pe4ARmVkK2TReDgNdG4y2CDiL8XE8rqfz9DFhVihg9iUjz5pzn9VNGfL6rbSuxS9hrRhaXKh",
  "key22": "4WHgyHcH7xg5dQUfQNjAicNJZPRxFTrV7dtannUfN3U5kk7odeRs5z6FUn8icBUoDFTh82TQ36qoukbmTgq2KVSo",
  "key23": "3H1N9R5u2xgkknF6eSAJ36jqZNo1H3BcHP78n5BtkEwskzY8WDXCaGvoqaS8M3rXDQSsRF28F194wJ81idXkRRJy",
  "key24": "64WLmcffoAdT8sTYdYQ2ZL6TYgn8RuexXa8t2xLK1vQXmbQta1EmiwHPskw2sAmP6LGVy9pxFBKAnYPdQz1yWJfh",
  "key25": "5S252758oSEEB4wr7Qy3mEu4UNoiPAbm15siJ4h7CTto4dgZP88ved9F2qXiQCi26KEBUpm8qsuQxBSBGCYU6493",
  "key26": "4fS8hPbaDpAYA2oaX2sWam448nCqTZ7D6WvjeXrosHCkQSL46sVFfab6oXUN3gxvv66UZ8Vhd6HNezYPnVidcdNN",
  "key27": "2zbJsFpkUFPdKVLBpdKq3sMeSar5ieDQtg3mL6jAkx8c5jPGzr52B2TgJQ4RWd9aH8Mv9CTpqzDbriNGXiP1taAi",
  "key28": "5qQAMstjggRMBrSBZ6aosP8tPXQj9hbVUyqhW4L98veR1VjeDjVX4a81KuwAice9crTkyZBFHSVTTVewHJvANHPs",
  "key29": "5xwm1QUsYTyD8WDJT8zmQjTE4HCU5VYvZuXxRZJ7qZfDuUR1VM1c8D5t1nS1mpk3WfhoRoCFjuioYCqBsFzjMttu",
  "key30": "33dj7mJLY547PMvX4JHdhAJzazWALzpgWe3Z1GZYCRV8gXw9amgtrS2RjHy9bkGmBjPKE7QTgBwj1cjvJyEZ69Q5",
  "key31": "2vvYGxy6i4SxJopBvZ34w5ovgPGh3BHcemqoUFfW4kU7oTZEu89dNsUE8FkgJSdKWvmnCBSWyQUnUHxDwPBCY45X",
  "key32": "2KHLH7KDFpoLTmkGxJSYexU5r68rYNhAaujjeaDU6uajwuSuWHwzgAK9gLykZfD2XPhf8kpsi7ZzKq137Gr9cAJb",
  "key33": "4otr1Mip53cEYshfivPNjEksCmPteC7VnUHZz1L6NuKNGoH4pzWgF7bFC6RMSS27n7pJ2EfdHd4DU6u3EDT1aaza",
  "key34": "62CfF8JZxiSokgdnQgpa4bhArRDUzJGN7EBfooygtVopgWss5i8Ks6Ask7ymFcCp7eE1xmf8M8C6tYu2vtdu5pyW"
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
