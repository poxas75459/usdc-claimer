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
    "3hD53YdYERnrghUgtqSa8oCY59J1a7rv14YRsQbpcsarSbRGVtMPMNjM8Mx6J8Uu92yrMNRGh4rAg9KHK6FUm5xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XFszuUL6oiz8EcjL1HdK5paeW86uHjYzKjq27Uvfv7BiwfgEV7iQiNdhqEb2s7ZnGwEYKy1CfovUp5Ew4ZjeNHF",
  "key1": "4x5RojJetU6f3FpKwXHw6MJHE9Ew96RJ1YUJya3cuwDGF5rtg7qV5bewqLvAhMXnqxKG4QDgezcJN5Lvw2QxSwgB",
  "key2": "M4SBvwuda2sYsPg1FSKQBRmgjzMsBtLwQVkhjPTJp3SfqDwcezgLC6oE45vYyhowZE3zd2rym6vqswmcCH54FHk",
  "key3": "5gCM9Wzi8cq53hQSHAc1EmydyEWfaBBcXdBFF1MpF2a5j614rqDBWgL4ojbeC8szVQCjr4zJV3nF99WU84T3zrPu",
  "key4": "3oXy5X36ChGyEMNzw5RL5oZryUJAaTE3DCGk5Cj6sqzbAr4jfgqjRESSZPPWDzUxTojia3pR96cfG7akCV5yxZUv",
  "key5": "3o8QRKim4dE9GDbs6yUf9FdsKfmej2fb6mjmck6RCridVqwEe9W9ezJujkzjPvHKSoqWma4m6YTf3LsbfC8r2YBM",
  "key6": "2axQcV6uWCZ34WedCE4nFNcjWmaVqSfgDNH5EbMzvo9PCyzfMusbrDxLwNCgnVskNjqqJkNaMuatcPuLmwNK6HmE",
  "key7": "5DbU8dawgWfwVVGFRmnv3vjBvFKpwVUNmuF6vfjUje2sMfBHZDgsCyBRRvg4trKyanXVGAgtZawDdj1jZfmfuwNT",
  "key8": "5HHKiR2N9GHLnNCLvJEUjDLMQjE9A5qAPsTXfVFxX6RipXZyWD4RjnMj32vsqgixPDk72casMjPdaJDrQT6rUbFt",
  "key9": "cTXgdatYfmfAC7RGLvWKZzjyqwQMH61WJdcbHaFmimi1LApyxvxQYvrPmX1ZgDVPeFjDmfw54b1zn3QU8MhRJpT",
  "key10": "2D9sKzdB1bURhrNuBsoh2psWpBu2PzMM5Jpcmzzj2XzQzpTLMgGmRhmwJU4D37onfHbKLmSFgspLeMDWYqquTAeG",
  "key11": "rZrjpZamDsVwuK9DrLtCyApZKTg9tq83GTyLCmRvLBLHDqTkBZrD3a3Vh9CRTzsTs8ZEXuCF61ALTzG6hqeTBRq",
  "key12": "AYJvtvfarZtm6Aw3MY2Ljyw2UDpp68xbf65SLELEkHya6juebQpAJgPAU2sp16sdeoEShTBWvMcgKkhowtDU7m6",
  "key13": "5tn6J4PmfAMY9MTbubNBjXiLYMcnTmJq2tWEezBiooJGPFcnDGDt7oqagn9Wso8SK7tEdVNe2nxnmRYx1oLp1iUC",
  "key14": "2p1ATM2kj1KRBaC75usDTK91XLrwNCjntWGyJaHbtU28bdgL7W48Ego5Y3VTbiaUWYRjorYeStL1cPFNxm6xZdLo",
  "key15": "2SHSXtrLp4JWLsn7DDowQ5HpyKv16G3YCpiEDUfqwRVzrsPziegrUM4s1JTdFogsm3ZyFm35jFpGvj9NsktJGZig",
  "key16": "p2md8Jvf94g713tKc57Hes8B9e9WDCbviAGzKj5JM4oByKMDBCaZhpWKQVLyLWjHYEJCmAkzQGDToJRJrg93XQk",
  "key17": "5DNuSY6yHqK6J42FBgwMMtvz3gwzyyyY3aoaoHhtzkNtz7qrNuuXaBGngSVq59u2ePHww39GEStn6xGrsyhFZV83",
  "key18": "32YcGurCUjXUnzz4zZpbs9uh6NvPbAxCZxudKJ94uuFhVBcEvD1VgaZ6UUbc7e2sSNBtaUNkqi6mtys3c2KwwDcg",
  "key19": "24ivV1ZkuguBPvw5xR46Kv6iEvXNTb63QRK7i4c33jGhy62LcwpxihQNMhY7tgrGb5w5WuXUW5XBxZJca85q61Xj",
  "key20": "Fq78JEVk6F26Ji3UaKCMbLNX4dx8gvETpu27tHBN7PujMuARKgdA1jP1m15gyrNJXBTYtE2TfGCdoodQhx1u7Kq",
  "key21": "4fuAGk8qoc8n2hP1JpgEtwbjkzkCdb54KpLMLPqLEXBvKouddNkB1YK4jr7yH1koi8XAySFPbk3Afjjj8p3XpqEb",
  "key22": "2qAmvovQEEZTfqHKhMpGgJpfrC5uBjANGmGUTSqxJxChqXVUVNg865QxNnXpd6MqTJg6wWMKQNgx2pzTND7qx66R",
  "key23": "3ugbvxk9zz5hLMKMhQCo51rgcpQBv8XSTY8C6JYFLLR3CwVMsYZFFyF95nB7CRQYNQ9y6bJVtTFLjGtTLkNiz9to",
  "key24": "4RBjnLQKH4HTNJWZrREH4JF5PdVpaVHpgtahBwvtNnv4iybE2Sh1iA4y29QreFZRkGcZKZ1gA2Tb8nD9KaXdDtQ5",
  "key25": "eaYGwyCoXmp6DDf2E5ebFbyNCoyBPRjApenUGWD1hk341N2gMoksFonXHjH9XSMYw8Vei2Uptsnw3B1Aj5fdD3n",
  "key26": "3z5q4wQYyM1rB8XyxRQfxrsgwbatntThPTgVwMpLUpjEU5D73dGhrnsuY5aPxnz3YcUe2gBUk7qpi6NJAVKPif8j",
  "key27": "5GdGheHFFp4WAR7zqgz9edGGB1zWnZKFSZ8K8BHAoJFNGGEuCL8MWXvzz9KZJz3jkuJqG2BHTzPjveuxWcNQU1wS",
  "key28": "5LVvVLW9F958WHXAKnpTJ3zrZqBfxgxWM5Lqgsp88bC6hMrxA56V3foBXTJQuoCYV4Wx8gydXKJLjb9uXXHoMZkd",
  "key29": "5htwrPebusoGGCXh6dE3kts9vyYwTXie2QbLrq6JZLEF8EZsEwKZDjAX4AKb2Bcq3euYsw8Jj5ob1r35eXPHRzT5",
  "key30": "5JXpkZbihdtoPYQHb3ZU2Yu9FvW2D8WdwHBag9tcCuY2obQw7BtYn3b3G6B6h759ijNQF1xrtiESvCum24ZfK1D5",
  "key31": "4PvwFPpegf2tmHq7Jgjcs6MrxxpFibGZr6XkEcAHNyA3iyesHFbfEEeyAzPZjF5X7udfRcCKG8heYcVdG6kxCnDp",
  "key32": "3NqPUFJUac2onVg31KhQ7hJjNVjC1pYKP4V9ZRKGXcoK59ayeBbR4f6gbT748f6Qh3qTiwtqmFGokG6HFqrRu5H4",
  "key33": "LUCp7Rs8bYeAKHafSiLxXURmjpAXmBmGsheckJDEzDnJQx7jA7uuLDzR3fzYtDpr7Wex6W6P6jt54U3y4vr3Lb3",
  "key34": "fecG16nDsaGC5zCnuwBHxzNdhh4ZoyVRab4vaQWaRvtE1HSkHbpPFpRmQjj3pXsEVvF6xixb8mt4eaEpfjEouRL",
  "key35": "639poSyuSCBHEYDhuB2snodFrGmc1DQxSNQ5uNKNr1tcVHfGGzt4ZJ1xrEUxngNbkDvhkf8KH5muPY5HRWhjyq8T",
  "key36": "4tnHVVCDfLHtG9HMRQww4JvQ9DyWLCBzRYMxF68fCY6bWuG5Qs2G3RNzo4Jz2a2oU8pT8RfHwxCiQHjN1r1UXR2e",
  "key37": "4CtQpQ6J8ZD9AnfvjRgRQp7hauNfuUtaB6KpkLW62bVr4p4sTYefAkJkSQGWiJFYNYUmhtFsJmFRUgeRJnGAGdHG",
  "key38": "38YVWSELkbeKRd5QFAZzsX6Gn32VacvtJV1N6qAVcEtFiLj8D8166UsWYqCtEMz3uzFowEFswejaWWYqVJvQb677",
  "key39": "65o85XNY53rCxE6WvR9uG3cfmxoFTY4V5cHBiLC2KCc6KPv22WYg869nLTSe8pVrc6zYJ7kfw8bBsAWf8jRiYzZG",
  "key40": "4rQyRWKX5WRYVM7BoactiWQ8siKfnzgtLHDhujgQuN8vdGS856YcD3tDosRJJe1HVtccS12d8NPNfw8wBvCk5MMX",
  "key41": "4Lfn9ebykxorADyBtKumg7WS2vErJLVS4uXHJZTPDUzZ1octkhzeRSXiJ3vqLJKBGAeSLNiKjqzTvTjAEUjsVZff",
  "key42": "4Tq2Quu7VY7pS1DVXaGbtkoTiWzfSfPChRp8NDv7VfSwBerSPxdDsA6cYumf2QsP4hPwyjPfcLtyq5anyxYkz6CY",
  "key43": "4EM6ZaJbc18eiRKBKyiRBocpd4JbnYs9KB8Ypvadqx8FU4cytWbEdwawFatPxa83WbkDrnHStHRqciaCQUKsBmB6",
  "key44": "3xutL7UqyaXr2jfRwNcDQ7sfgFQE9SLfcfNhrFKkipDd8Qj1Dhxrejx8kBFYxPxEDFPjM9wc9xFuuTpnXqfgLYo5",
  "key45": "2NWsGwsz6oQ7mUyjLiEu28PitD8pWXkAChVQSbn58t8cgxUM1Yu38teA4gHYs7oA1xZV1Y2NTDc3wvzM1rbbrbtA",
  "key46": "4X3h9bzaZ84C5G1PNdbNAzTt95rakYvc4RHWKe2QCLA8Ah6pPQJTuAyt4uqzucVwKCFBCg8qHjfK1rYS5RPinXjF",
  "key47": "5iNiVgDjS16JR7ar47yw6ayVoUMRqStQhi9r88Dsx7PhZfkAGxkuUWnrYuu5KPqQRQ92ASmbyMusa2huz3Wpdc7g",
  "key48": "33B8yCuapXQkXgYVZir1diB1fcTkazijohsZEy5V9oDwtpzV3VUFgnr28G1FjVrfgQqQM9sqMwHJ2yX78gXozAJr"
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
