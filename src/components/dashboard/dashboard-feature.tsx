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
    "2iSGK2bHcRBBDrjU9JyLfBZbHT4Waacsobh1cnfbQc69xKJdLesBhuoFN77jDRyidXcwwLN2p466Z7YKrQcryXRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZwEQf4Qdq2tsT2Bq1uE9zDT3t1W3PHdxZzcQ6NeatKfQvEEwEWJzX32hr7cGJyP5ikgRSS5tXgy3XVvTfwtJdYC",
  "key1": "5DadpAaoWw4uxS1FWgoXJsinZC1snMQzRHVJZSe8C3HavG7jQLdxkdAocgx9qgk4P91vDWvxuZ7My6ZybWz8g7kV",
  "key2": "5zUtgpRHkbxdYy4dfATkRsxUYKSNhnH9S8aRTVES1oabq9TxKXWKEYPn7RR1yKdRp1pKXcjXJYDZr2KVwF9WPgit",
  "key3": "3VNPX98qjYRs5qVnEh5oWXcNb3XJsnZtLVPZ6BGKg64ZQ126RnHZuSD4AjGTgFGf7pY8TtfEcCHb12fsCzTd5ADg",
  "key4": "5oVGvwpvueo3Lv79rF7zHxNwCR2KRJSMzRU5DtvVBsR9VdrKk2AXjpNbPnrPQk24aJTZF149wQf4Kac957XCESQx",
  "key5": "4vdiY9222q75F7EYhxWwRkJmr2XfxtGCjhVHXfNfotQguF4daaQKT5SoVMF8PZxDXGGVSZHMyuwYZh2miajsF5xG",
  "key6": "2ipGZC6aQiL9AB7FY9hieyyfNDyyLzJZCWfUAZt7N2oen6FLmJSrLPEFgbyt578WGxznrowUrruTRePb9P5J2xiG",
  "key7": "5Y3JgCtavtEkv181aQkzqbkK93aja1bqrxMvhD6jHyk4AKnERr7z4dCmGdJM7va141NSStLU8wMFAcXjWixHYHwZ",
  "key8": "voV1mPAHvehwnGoe3A1LonVrZykhwYNpvKkN8NLtCzEYRJLjLYmoDXgcvzULQYGCPAhtEyrdosyaDjWyr3fpEjz",
  "key9": "5Ddw89kW9VrjUet1GsrgWGX9a823iMQXJAuF3oxeLJHLBzAHaeniZy6ezKiTknfavwVH94PTdx7kWqPkjoKenXUB",
  "key10": "4HeYPNsYzdbpvQqxpDZQow9kV2kCK5SsmQiGEoJRoLswuVpUfxmbaomyUM9mUz2ZFmXjmsXq1LfwuS3ATmSSMQmR",
  "key11": "k6epEfPMZBiBxu4mCyGqDMBd5gJDpvAQXbDFMoSati4KEjrU7UqCZPpVvqwCCyerTRUkhRMndR6fSLQ3Snb9dhK",
  "key12": "62hiJsThVyXV6EgBErVap7R1ehUxZUvWVmC41aneSk7EQBUFMy2dNEwDSaceTJGZPE5ihnPN6jNwzQ2LqWRp5mJz",
  "key13": "3NBS3Phf8LFxKCqVeV1QDHL2YGwRA5aJEdBAenY7djQTJFb5MnfEyD95ef4F8sPRqYCKai51auZtk4Cz48EJPHJT",
  "key14": "4qXiBthZqCZBj7u4VF842PjjZBs4aoPdsYxAitsqSTWdayUgzi5AwXktqQ4UrW6J8qUbehHUpeXqQuMmYicF6F2R",
  "key15": "4aNJRvnVfRCrdpuz4MALoaPQK9JFcNREtwvRNGQc9RWj7UFekKU29vWBTA6ZnacfP4yK5dQB4ce5PLj4bWQEeyxc",
  "key16": "y7vG9XFxtCFJEMibpwPR54sXZNZTSUNA95KbTA1ko6jN8LK3R9idooDrL6gEruY1pmuxUCyn3C85DMA9En7nTR7",
  "key17": "2sobkwCtCAgbhj6owVKTLUwJS8SUm5duDr5ezgMkCqkmBEP6iGDxJWqAqZx8km5xTicShLZ4CrTMM1mBihqbEXQa",
  "key18": "41xYzbW7xHPMUsfVYtWk18DoZfqvfoFvtLoSWLokwPHCkmzW93WsEmqD2VDkTueAfCAeKNQQFSCbuT6n7MD6PHYD",
  "key19": "39r2y7sUVeDjdzs5L9ANgwv4bVn4qKF72VAis3R6LgDTnz6NHYd1t6Ad38tXrHbh932SkLnkiVQn5UuBjqyy6Fej",
  "key20": "pQo66u13vutpuo5UeyxZnmZjkRrA2Zxu8rQvTApnuTFaRPDPbB7gWNzqQ8afWykfgqatqYvprdMh1psCmLrEAz2",
  "key21": "2kgzFMGqUt98Ky4FTH1L7dEYAkYMDRtp9ESg9wRvteRi1VVApJRR9usEnMcGW2svGt73dXp77dzBJkkYCaXfAs5E",
  "key22": "2pUM3A56iuipVykzZ9qeiP6VGT34b1dMVBmSFk2EJFvyUTBErAApRho3btySGifPwHNBb3D8bvDxzERpU7zCu85y",
  "key23": "5ucqYJqMun893K89o9HreqeFQQuV1DLsqG3HTQ1YFTusFnbxfb1qVARiT8Qq6MtvU2SioG1kV9zh28NQiS5uhnae",
  "key24": "4N4Ff2ECdVSsKjAKEbYThF2bg8oXnugtBmYVjXm8nBwkYnKxcVwQDX5gWqUazPrrZiXQGYLoF5MmyeAKaBtMMHrS",
  "key25": "4mBWcgWir9RxhqHQsXrVg6kTdgEUmDi81G56zETfmFcz4Rp3GWP6Tf1WaaoM4pQMyYYUpfQAtTahYK3PZb2N5rZR",
  "key26": "fvfqDCtMJNWmvkdv4XTMJzazLddLjzhCmcaJiScJf51PGq9y4ZfhGa1G1oKeoHsLbaVcUzgW26cLuVdsiu5dRRc",
  "key27": "5eKpGqqcoCLSE7Cf3JnSvUge5TF2BUen3kvSRa1BCpdrem24eaQQCVt6gvKsFdsAkCABrKiVVyJvB2jWPhwCggwi",
  "key28": "2sShrg68CxDGCdgJs35zgxQk44QrkBXJ22Zqmqc7yjy5Bu4m3kdJ5cUrXhYx3ZPCBjt5Bm91EUWb48CF8cZCuUn9",
  "key29": "5zoWMV5LECZqEijbcsF1NGkJNZWkMytyHs1bEtvexyERyH9DcXTSkBGsHKQdWSV2Ww4ZnFF6iFEUoddaXBGg287A",
  "key30": "3EQLDoLSf1sUWUURyonYcBLcwQcAxQRKTtoZ6GnvGdtYq5EP74XYeLkGRPutnpd2ajqkihGbDWmuo8G9hKAiwdQu",
  "key31": "2zFgRpMoFSujgjFBnWmxiLdjAq6CY83KPgUGPsqnr9yKcWj18kECLHJr2sMQYZBV1iUDWoRh5REkEzVAKZjVeeEY",
  "key32": "8PdEjkjBEhvgfcTK5tuegM3s74PZzKsnbQJUAgPfwbBJUvTFiKSpTz6ZG9tNJAcUsqw6sHbLpMe8jxKcZPcCDoJ",
  "key33": "3US8TbASYN7QG3v7YpZj9P9CNkBY9vsRU7ignxsCawCeK6wAXC5odt6NEf7TNeiUpEfNvLmgpqrBD9auatS4vT6m",
  "key34": "3d3vLHkaM43HKNxmyc9FZyAhyUrzTrQa8h3LM5P4DHfAi9UGrM8BoaHWnPyNFHxTqvEs5stjDxYST9n9iBZYK8X1",
  "key35": "5KxKRTY6F4LhVPagZ5fXCS8cyKQLt23ACbzoScvsr9xo7FeukHq843KMFMVaTVvUq6eZnCrJrcXneeQrUczWCam3",
  "key36": "38p7yx2Jdm8mTNb7WLwWTXNt2cbVxPRescvHHe8CSWuomZhRSdPF2dxA5jjcJAkyWL3oWmUN6iE7bEoAJkCe94k2"
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
