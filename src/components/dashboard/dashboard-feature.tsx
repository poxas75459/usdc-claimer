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
    "5Xx2GKskx7SVG4cNEeFcZi4UdyDfXbKYtKmrwxoVXedqYcY5DShbTzykdAAfEnTkMpF467hft6Yc9HnNQ2Q2YvPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yz7xP8qYABSxTXmAc7affXBSzt6ASACioYjVue1xMqahEj4Rp9GDDF4JK47yGzX64JJsLe4jBHvd3UDEk8CCmEi",
  "key1": "2pZcPZjFNrTZ3C1Z4WyCVf3G8sCg2U18DEFva6D4tCWtGn4VztBhvBEuNXuBH2W9MRuvXMrGnHzYka8u5JsDQyfT",
  "key2": "3z97UwK1bSffcBqpjbotxbxC7PyrRWkXPTsh2tvsaWeKrTKw2DpuZTGV1D4eStBtEQAprprNuryqup3qDnK9Qxvx",
  "key3": "67YnwKJwDDKTyqFPC9TbDitNow5nKs1KPNbooKCfQFCt6CBvckCy9vSuA6KTFTaExmuER5nRsDZ12qRh1ADvqoFE",
  "key4": "2UJwqZb5RqNeGXWiBZMrf9AZEMiv6WtHZWV9tnow7QafpinMXLtMrsm7dSShUfbdmoCSk9ceBRbGzDY9SmYu29TQ",
  "key5": "26gkXWbsBoyfykEmHUEzJyCEbKt4eWFQSLxKWeu6LD6doUifRGuxirFfrUaR2JPoDvoaSbJT6pNcqFLzxnR5QBpK",
  "key6": "3ZUnGt8aRYfQBsrFw89PL2gJAmgFPKcGYG1aUGiRVCbsyqfMoz5VTxtabshAuRCpLTN6ujYsSmasN7FubyE5YC6g",
  "key7": "3BBjbD5zPo6mDqhQJKkivM9ZKt7wqrUsDdgbAouY2VfY9JFZzVWnX3rhUrZFgmdvRiH45SRpYhNLHRgBup4qdnXF",
  "key8": "29fcvhymmnDhp7h7LDCoLPUEZDMeC2HLxfb45wntUfP4sQKAXpt4Y5GQCUScrhzqs7SHHFphwRs9pPQ2PdVSyJvM",
  "key9": "2ak5DarXzDhrRuZEcatAfD2yTBVMWjNW3qA2ZCmbom1j6cs5iSn1sxfy97d4mnVoeGspMQ9zDoj2WP7DRaX8wiN4",
  "key10": "31tiNA98QTnxJqFioj69gYVWUHsbanWTYpMrHpQH44AfEJTAeh9dkVjXSBmhMy264pnzycES8appjR6ncn9MLzgN",
  "key11": "5nC8ioJcdwL84hSrvwSc1JgZTnzJkD6YefW6Aq6QUY9jqy7rEC9TDThiDNSyJsjhsfwGnWR7uoww8PHQ4hgLNeWF",
  "key12": "3iKo28SMKobNioR9BcFXZLmkzijXaNamDcBWz2n1WL1JEA2LUrpZgbjAhcGuNzEYw6ekis8nZ1DFDtY4zyWTUmcg",
  "key13": "2ggsnuADmmnfY9BF3rezXgPK2ochjfWU2USsiVnP5aTPKesti3NTr5P5zDM3sMMV4UjzzBqSs74uqHMa7FDcZs93",
  "key14": "2PuVmark6VKC3DnoAKn65Z4CD8fQWYec4TiPgWYwH4YARRdLZXE9K7wSJVcfVyh2awFNxV8R6Kvf9bCk3Pgye4Es",
  "key15": "U7GgjYnnvVgt6uweDqGpvcGh3VEk18aodvEa2HeM5NUvhWKR9ikZuJN1RSQw2Q9qLVv3TWmYt3it8kmQxH3FhLS",
  "key16": "4Ye5K8hNrxTrmEd8dP22dyLLLSaQpkXRTuWpKFsFtg1uruP5frGWs728tkKYpshqDisWbFDiULXpqYxEqiUQmqjk",
  "key17": "5T8FbjBQwFrTjjZpg4pk6DduzVNFRMJXMeaUuhNaQjYjEjq97f81ntzzWNGQgUuCk3xGe41kWY4NMRTiMJxKfkqd",
  "key18": "3kGEQhnDavT1b887pWXEjF9VX3BVnVz7jHsg4tUkS32x8gkwx29CUV9BKCEZDVJWzkHsJfKzWiHGe1nHAvyYp54R",
  "key19": "27ghE3tgcpUT7kngwYFZ3Hdx5DsDC4eY32sR7C7w4xfu86aNgauR95U3gf4zwg3hwtQNhMoxrFvsdPEMTCq2fgyb",
  "key20": "BzkkM96kSgtAE4PeVThY2gbwSqvGNN3y7QStH3TYqnJxN7tciKyvw7SXHn2z3vXJhKdAPV5J9rAXGNUUBtWjJgd",
  "key21": "3xYjc7379BBTNvirTXXmGvZzJ6Nnx4abZxZpCKiJ2hkY4JRRyhNv25nUo8Z6VQwVCJDbac5htkavXP2osRJzPvJj",
  "key22": "54N8fwJCMj8QJ8nvWV5ZNQ1q166WNZFRaty5JCu6Y1qBQLh3ATVJNGP2yECtFFL6na5oCLZqKReLjzuJoJoJp3gt",
  "key23": "2graHzZXVHS1fB2V9gAonjc3XVpCESNt5JCAvt3sRQirdFD1uympZvLSYcEqpk1XcDdDN7CabBUfHPLHVRxLMszC",
  "key24": "33dZ9yQW2Ss967fxc2AmErKEouDWWbYBBEgRZHG1qopVGdiwLKQhTihWkFJX5eh7aoznDyFwqFNHyp5qm8C2oDeJ",
  "key25": "9hVimGhvRZgQtAAy39uGEpbEdwQz1wcfKdmRkVnh53Fz1iVHSf1d8SGwLdmNJ8bgNZ6zaJEb8gbMybgEtJPLWAf",
  "key26": "2MYSsJU3Xpx6SqcrjZ2ZVJrcfMG9MLY9VwWwrUcDeh17MBqfdnBoJWoaXD7twc1ne2vZgPFW3ktPdSKdFH8wSGUD",
  "key27": "TfBYB7GLY7ezCmFaQ2FaDUdMTWmXjUH9uJ62KgzgP5qw8d6RvkWB3D3g2VKcTwmh6fbfPdCAk7AqBifjUXhtr6Q",
  "key28": "57qY8hKh9nHdWTTz9Sh2qENXtw9gs37RgSenbY2mFzpoLC4eC8ov9hCom8effhWvw9Rf6FkvVKXFAWtmRmo99bN7",
  "key29": "4PBYhkzDMvh2t2tjz3WiQzYNG5Y4qjKd5V4fHFi4YpfHXwKiuYyCRukLzTacNuSNGK84bM3AkjdTaUMzNdUcWk1x",
  "key30": "4H9R3no2HmZys4Yt9xmHkv3zdVKYHyHPHzHnS4dv7j9MmsEZkLZ2he2sFnhrAfdyAMPQ5Fv7ytFHuaeniusDdXyg",
  "key31": "566k3f8rT5jCkuXxrQ3Bt5Y2sRKQe9tDyriYv1coo2eseNEuiJtx32kjmFLPxE8avRUW9S86HheTvEtqd6ac9qqL",
  "key32": "22MrarWeXh3xDgZ71rndHk3fB4oVMGevgMut5deG765QzgfbuX8qdM7hqy76bGZKXCYSbGdGvXnwBzE3xcaD17Km",
  "key33": "38UacV6r2WBnvsvuQD73BU85PvRkYyJ2dinZ16Fuf89YUD3eTthhhp3i4n6dcLX3NFeMsBygVN8CjAxSz6wfHtbG",
  "key34": "3HVRwmySHWMtMwSyzs19TqiJQ68NfEJrYjCwf2jNraB2n7Y4SWzJyGnsr79XCoPNR8gcyopic5UnsEvbCUrrKsrV",
  "key35": "5NaNqAhJwvbDvbPf4qrYRNrTdA162chxmHTsXYwChZCTJfHAWAYCJiyTLURsJTsQF2d1uJNrFNyF482cgpgQzBDN",
  "key36": "jLHbTdcjGwSytJQRALP6N86f6Aj7KNc2FkxU5HNc4cmzaScQxviDWr5iiGKDkwooUitx2Tp2bNifugbTFjc2jLA",
  "key37": "3aemnjgsodDSskAU8TegeAfNeb6QeLrEKWivoxEDtLWS7qW2FgZnKusNWHhECvgzzB8Lwyd3buAAHWy2B9dVP3X",
  "key38": "PqsgoUp3Uu6G7H7WB7Ntm1M4t86i32UL4okjv7TSQjqJaSoMwCwMsrsWAQxYKtKUSu8n3F7qTJ2bdRqLY7yvLyj",
  "key39": "3zYxZJGT1gyfCJTxLdXsWN9TvrMiRpAiCcwQUwo1d8UWjC2mJBZyicZbP4tN7qSkrWqLmyFBdfxvCvXxhdB7wAqu",
  "key40": "2ZQdCboGJ4d7ZQicfHq7BfrfARu6rdnyRyfTWYDWJFdEUvGavQFCA7XERKTELVzeMK4UTvkuZMUA6djfMww18UZt",
  "key41": "62SccL8jgi6eRzSYAstnYNjQaNNh3u6i4CcE1QimQYPK9AX3W7vBg3C6gmttf6ZajYarF6XjduNWagXg625H39JH",
  "key42": "5PC3bkb1X2RmQQUMBrbyrkWiWMo9wcetKUxZzTMdvmQTupaApsmLHQWyNvaLenrCA2kWdB9MXtikFBuyafP3rDfs",
  "key43": "2qKtw4W9h2mqkLQypik7Zgn9G5seQ3txFzkSMMK98PVMU8PzsLG5G9fxwocith8paHJsRPuDe7WawPrCzf1K5Dc6",
  "key44": "2VTVD3ZiDkfbJvCvqAsLWZiDKqwCnAoXRJ5QoUmDJ9YGFVQdUiGv7d9zWuSWULDrTB7eWVyYP2W4Nf12GNnKr6Pj",
  "key45": "yrLGMwYmgNerwS27Gto9mbCuSmQLFpnuxZFwzQ2KncecS8oaXLkQK5gtdNLjwSBwuuGScPfvCBGZhWm12cubY6P",
  "key46": "3YRir5pLmcshEEZdwexBgVij21TTWttwXkJ5aPGTEsMJW251Rvvb83o46cn91dw2roGETDqwrL8nXEZe8eq1Pmrg",
  "key47": "uju4U27EnVkx38yANVmanWnnA4yAuwaxjjNheRtBvsC1sdbWAnMHpmWFEkiYKAtAxqVqJmJ8FtkZ4mwY9HCsUTc",
  "key48": "5R8Xex8xC7CoHWDvAPLW9ekTGNQxVWdTiUViFFh51UeB4Eqih2LYsueNYgaApyNQ44HTnuRujiBXFoMeW3jFP9QN",
  "key49": "5oVFzSQfzUcq47VS3swSjTkLSE5gTkReAjQNuVnu5bSHCtpULQgyNDY9wDCZS1sELgFwqWJcSbVBnKS3N4TB6Ece"
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
