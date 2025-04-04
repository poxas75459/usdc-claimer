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
    "3cVHorF8j49bmFuFYpXZGJ1ToDy6MAaHVyQjHAXwwffjehRmq2wkbQEXz2m3APMBVuaJmtLD2pQPKAG4SQraSjFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PyUCLuhDkiSk8Acns5ysKBcjTU5UPwKwXzuHbCtEzqi91jmU8avznhssEz2iGR7sHdKocTu1kNxSF6cMxcTAMFs",
  "key1": "34jgadwPAXo7MGNe1UFWDkAkTUxviRrJo22UhgMZ6b8iF8azMVe1HhBdGijG1fcPNfBnq5JdrgDvGLynwx3MBhfM",
  "key2": "4vzVMkvJtgdRG7pfpaZQDk7MMF8QSsH4aFU4fCMWjsT6hA1WmGoWP8Eh5oR1QwD1d8mGbZKVcAtWJw9rFFrxEU11",
  "key3": "4dqCu2q4i3KjaEMdavxSiURqUfxMU28SKfcDiNBnqUBxFk9WLNWAYha8nmvJiHNEVAssuMzSa1Cx97s7ojJv7C6e",
  "key4": "4rfLHb4RVA3TebBdivPpdgZsWHA5VzUmbAyR5cdbTdib9vaxVpxxAM2BP85GkvXH75rve71Gj5S94uwyrYpkECMr",
  "key5": "427D1weFAxLByPsC28XGvhZBnukKoGyWduk2ybKZVFq1jTtGvkb1DeEgXCEWvwEthMGRevvZUoMw7hJP4Lf7PkgN",
  "key6": "5tFBRQpjZgGinRfHv9wau3RZMVR15qitV3SHakXM2CLTjoCrsq3LLuD3LAxhYU53i8qJ3WRuwDdEyD3nfqPQovR7",
  "key7": "3XQgRuQzNwb5rEhdWFw6cLWsHqdNMD8wuwqK44ZJMEcNkHDgW33X9ZrYa9NAysma5yPsYYEbxzoS14UqSCEKSHXR",
  "key8": "KXw9uKBqAr9MTFCXB5xvuKeLcAhASURxuDbD5xNDtB9eNaDp5gTkPR4N3gqR1XWj3E4Ghc2xRxTBDgjNYLzMyZh",
  "key9": "h94JeUhDSqNy8kgGtMDNV52uG2D2wFXp3z2BuTx5WHMqdQFLZB9EEwHybUoaiuKNnSHuzt7iHFxXhwZVQmjnDfJ",
  "key10": "4nM3woPzctVrQpBpEQyYXcifAHpmWV9sXTHS2qd1u3QoLqV7oz29ZpYF1Jj7MQBqEoaDQ3tMJAyNUxhdiXLuSBGE",
  "key11": "T4PhZCd4pZaurNCaAHJMmiEKPFHfRnjcg53SGjtoGbcVgshkBSVWfHy79CRhMy6GAVcyUDS82q5LTgycwSTH38K",
  "key12": "5pPwfbt1biKTLW8uRmis44o16AeBQ2DAms8UhoY8rawEKzZFXrkBmyDMYX9sM17yDBFjvzpsFyciLewYUQ71wcsZ",
  "key13": "2AZMWXpaL87X6yEze1sHzWFS11VfdjmrbNrmCkUDp7Zsavo4FTU9rSbKGKsXDReh22PhkLL3v1Lc2iDFQJRLDhtq",
  "key14": "3DKoJ9w7xqpYxzTdt94kXhPPUxPpyqqMrL1snj6wp2nTMvkBMg8METMCJRN7bUGiR38WVHai5KSTnWb2CjG52LiF",
  "key15": "2HDfFwwZUfsF7eR2ZEpcs4ecwo38Fz6oHux34xRMKiYPrSVPqDsmNNULnojJA1rWqCvkJ5jaB7FwDgTMDwSNaNFx",
  "key16": "55uYiS5RyrtRCPaXyshQHoydJbn9mLTwjDSpspq6BrWGbQDp25ihr3bf9nyYRxS1vAh81aqZvrvMePw29j7Z4Ff9",
  "key17": "47wnjNdUM7j9jkeJSt93C55KafpvYGdVhxSyBrGUZRdmUqTM6ho5BHePqeADCiYYUudZnQTB8wrSuNJZDHaBLW8w",
  "key18": "9KXfNEC5U7d3aAo7kdKTaMB14D3UKjnTmmZwXNCZALhyo36wZEHdqr238eU7i11Nwrsf2FHzFiZxu2yZCZ5fTLf",
  "key19": "2Bn3SG3F3P7U1vN8WQ2NwBeF76MipCAprwfJ4FaCRQe7txiNvzgyokpb8knzpcq6FAZzFGGGYcxiA7NV87LmPn78",
  "key20": "5GxuN4a1bGfGzhaasoz76GETyZT2Up2bnFVTM56DKjR5Wx76yrPpMwCv5YH8z5MMgqMzBixsWobxuL2yCPVFRb1i",
  "key21": "2hHfteBqTPHd6BVjJ6ZP8UQKRwVzpir9BDkR2DA7XpB32qjMJzujH8aZfh2nVD16HmmrxwudiQHjso2MP1q2JaW6",
  "key22": "hqVFdBsLgXpUeZXVwtq3UcCFSoJm1pQmWhR7CML5acrNmBh5Cu831Ry2BSPiyy3Kc6P6DAxmaD9Hxa93VjutpoH",
  "key23": "5ti6FFToUBgGNKZXqybrodcXdo7HSeHvpshvPoHXBzhUNe9pzQ9pfQFc1bEDsuzLgMdZpURnRwyKD1zDMHXSHq3C",
  "key24": "Fzf4xPQ62XyT84VrRHaDwZDCMwmyn21K1i6FBRGkgB4v6RtLUqhhNTT4fCs8jY4KgPAVCh2C3edCuLTdP6ivbSD",
  "key25": "5BqxXqrt1CWda61M7hkx7rUAw6r7PcWtqpFxnUe89iFfsaQPwcEGzg9xbpb1SfbPRNaBBG6e7DGdpJ1cuUj7ckCG",
  "key26": "34dyAx8DL3671GHidHPqJs1s46WUqD2ie4PQoTSWvExyzAAXXa8UH8M36rtT9cETxNdhesHmtLa2etDR9EvdKviv",
  "key27": "SjpuYzPitDBDt3NyoFaSr2BfWqn9tetmZ983Kx6EZyusrb3HX2dxvrGdGTFf1cz4bA7dtbS1QPh4ArLpeTdC528",
  "key28": "3QJgPdN3AC26YU55BsPJyEhocZ82jk67y6V64PXP8nTqKWbFTZRnq1hnE4JUiJ5oZnXpywiTsj2h5xBahh5CAAhQ",
  "key29": "3KLTrkCiZ2oB2o1pK9nRL9TpFPPvK2J7tV4fdWpeskueYYefpRPM9HpzVKtacaq9Nf8Ya3sRkPxpoBpfpuEGnpv8",
  "key30": "5XvJWDQg4Rf5vZ6CCJXY5kNwT2nuJ6VY5ZRgWKJ4M4Sxr6EHat53bKTyCmo2zpwTiWcrhsm1YkKqBps8u2iVaRc3",
  "key31": "2pzakWjEr9ZbyqJYmtXETMzZnN41tpfds5urLQwy4tXMj9kSjJMoUAcMnmraZM2E5mq6b4LboU39PssdvH1VH3v7",
  "key32": "58JF4G7Hodf26E2dyVghqXuTzvgJaD9Tm9FDQo1Yd2PWEMGJC9SwqNGABE62y2n1Ew5TJUJBPpzWQNN4PwFHoq4f",
  "key33": "25vFkDoFxxuyi3PTEk32rCsgjiU1GSHPE7e2bVCQ2Y4d1237j4ZME9QH8ip6eBJBmxKid2MqLZMXbvz5yAyBZDbR",
  "key34": "5rp6NjC5uyqsc7hLBGbXmNhUoXGFU32D19zkJs6k8wo99WpndTmXPw6GNEkBxLBFZGgSmN516YymgRepK3QUGtrD",
  "key35": "2h2SHAya9gFLYytKoWKU3c4rcmMuVBxUNYFMZb3Ey5W5LpcRM6hQVLFXhFdqPquVCMJrRvRG5w7uRw8CPXnUcokF",
  "key36": "2YtQzxqPPq4MrWtu9BwyDLvC8ytboSjC3QJBw8zKWLMhQMHkjM4QPBj8zHmgz44gvmy4G1XeAAMHNBAuKWbxn1DM",
  "key37": "2TWyX4j6WG4hjaM4QBkMG9SFtZPmj4davw8ZfQVCUVi9mP92ZuivGntZuUEpQGfz8XWD2NieTrde3QjBCmqsYg5J",
  "key38": "4xopoSHok7CQ2yJGkMA4Hxg6H7BGPWnuzVoPkgQBsfg3fkTWBav9sKNoYM2kaJXG4N2qiyqbh4Yi4LUkdjkorhuC",
  "key39": "3tSm99oTpVhEi8K1nY74kQJRPZ9oEWzRvpGG3dBdxWG46meUtLQDU65QDLxY9se6xAgU3XuUtL1FDRC6Zy4GuDs1",
  "key40": "56aQTadTJMZ72fdfYddsEJnrvdLqJpSy7MLeBuSC9LymvUB1xsmo3AMWuTppcQSyLtvLhXaqQj2GvTpfnBF1cPZC",
  "key41": "2Lir1s3CUR9ZXGMWjcf96xS1ZRnqNRDUeWy2rJ4WegrB8xpGZRZwiLDStj7yYTKt68i8LK55y3NwAEocsb72XWT6",
  "key42": "Dd7SWwezzM6w87VcTQ7FuEAsD2fFYBGzS4vf5FYABzxEATRwwsky54NpXUxNJiSxWtVJe43uCvy1VMU72rvN9Tf",
  "key43": "5nSrubBZv7hWSmQnPfZQ9Rz6HVTEA2PtqTAjpesuRMJzeH1dHCVz37Zyn9JPyLmnv3qSzTTTQ9vsount7eSRfNeU",
  "key44": "2sMhnxapHcJf3c62ruPTF3v8pUgx62bXicR3pmoadDJ45seihDLUN3pGcsFonUAzBN3K8vPr9KZ4uKWxdF6xxkuA",
  "key45": "5B7EPrzFPYGv3c5mAvBLvFebdxocPvEdjZPLVzJ55kwW64Uc8AgJSUTC2eYrYoTA1HYS8dtcFbGY7ztU6pE9ijnW",
  "key46": "RTj9hc2yJqnHxeUQheb1aSLzsLF6T7WhLmQNBhkKKhbFwJVRdCivQaVrTvtNz9PP39V2X9JJ48DKCpkoxjg2Bmf",
  "key47": "4qJE5tBy3KLfuFE2DjpxkpZH9FFD3Zjdb98sJUukTeFt1Rj9jeafV2vAH927c5frfvdoU8ZN4PGC4SYjHbUhYgzG",
  "key48": "42zPJm3kCtBSUHcL7HwKMoXzPnxnQ54maJYq91vxZSkgFG18q8ax4RDzmdmdA9NAaB3ALzo6MeRLbTZ7UF1r9SVd",
  "key49": "29Q7VQ68L51SZj1uQk8n9ffbCPb2YtnTnEkCTEQs6yRm3eCXrdzoYdgXdj2Pj2m7s4AooK3VdHZjKg7B1ppW5jPX"
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
