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
    "jwNpDjHZn8UHbqfWUtr3fwgv9C4EoVfGpMwPoSRB3bX4xG4VuhuAFFD1oV1g3NopZZy42p1aqHjLjaBeLfjgW4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QFACEdqoYeQp4TwenfimeX3RpXrKL3Kqv2nbKFQeKihdZZVagAyDx63NDFdEajnY34GDivJDopguLuw2GkuNchr",
  "key1": "5MksDPxHSWhbFxpvvDLuMPQjQyvHztKZ9yLiVj97ksdYb4rkR9WVaZvGa527SR8FjH7NiLgDSv3Jbg8PX6YR791V",
  "key2": "3k1BermYGdEsg7EzQcNZQcaPjfA8beoophEJdt2FwvmdYnuf8zHSEUj3EySS9sEJ6yHrcnPgoqBZL8KUqQZjuqnt",
  "key3": "Jkbb6c8zXadQN3Bz7wbqBwmL4ko2p2ue1eosY73BToGSbwZcx8t9ZhNjZUGbCr35fE26zVoEV96Ugx2LMTKJTqE",
  "key4": "2CqJ5xiE9hRJT45j1vxcYpv4mKVgf6Lwkb5PhJKEWFtCh1nfjqQAXGFh17A5sSd6tnQ9oYYndD8eoLgVRmZD2TPP",
  "key5": "5LHRiPm4dNwnagaXi8gVufGh96nUk19zdpNoqXcf3ssL5coA9fHtx9wAeKjRQ5zth9Tnr4AGd9QnWwUKHgBFW8rd",
  "key6": "2G2AkvwFkoMTVYMczT4dKkgyqBhkwzzYr5tjJ9drJBAorh2T1FK7di7p5FJA1hZJh7kgmJUQEQmauJgcdNBaL32d",
  "key7": "2VzGwEzzLswsfBtSwNMSjejGpFLzYS9cvzeQpwXiMKdecFEnznxpKLwBHiDyQirWfgiiSYM65ZkhesDJPfpZUgAf",
  "key8": "m11KBbJGpbWTjwaTCNxT631jnA2b3Fzo4yVbuUVPQ4b71R9W8r2VHkGgZ2CUXPzBTDzo4jLVBNzWXKNxfKNSmvH",
  "key9": "678hDVPzcsiKQ499dENPfDAmjSAM1Pv4pb7nFdec9cf2Rj2znt8Ysxe4mRNv1AptJXkdzLGESHnrsdqpFcw5Uo2b",
  "key10": "fL7kjtq7s3bsdDxxDkwg1Q36jsisVfFk5JLwv9pzFfu45xTTwZnCNYhfE5xeuxzsYG9LbpnvDeAgot3AHfoqhum",
  "key11": "566efMrcdYzGD5wBkp2Sm9iBFZbxXv7L22c5xDQbo1SnVLwJCq84Est3pVLjrtXUiVPFBTJvyw1ezPxbYiUUA8dy",
  "key12": "5SZX2Q6uCSwr9FMHNydjyMHhHCD7Q5K9wfbYBc2ome5R7e2LDZ5tzSimc24o68SWcA7mNRcSsgerzR45fqR4su65",
  "key13": "56y97vxvBCjCsE7BroU8R87p9HAEiGCZWYj4odkgcU5GGnB1RDSpDRtuBmpTkbtp9Fr3Up7Nm5b86hikBqbJgWNC",
  "key14": "3LyGbRET8orT4X2GtXVz6jUXbw76q6VMhyWje8MiBhs3vGHGPsFpXWDmBPegEWW3WrSwvQr4s8qwToTZnB5eX4FW",
  "key15": "PVTDksAcg49KfHxvRygpww4LJbnaoF5HuE481bbHpABJm1U2yzFmfZeP8j1F6rYb7zyD6LRjsXjeSK3GQsu5RMH",
  "key16": "4JVgfrQYBWTW5XR3ry4R9wtp7KZ5mfHUhzrESFpijcWXt84aGBYWdTFRUkXnSUrccAZads6HoE1qkXfp3cS9j33w",
  "key17": "49hcgN9cKVtfjETnmgizT1ZeysQ9rV4SArky25ShxtsGgGkjMNPdxm19Exp51xbFWJugbbaQ6ZSjTxCapSopFafz",
  "key18": "ekEJVytWP4ijpo9xDcrjTN9THTQSuH6LGTc4iJkvcKrVPP4bafg8GGPSqJNVegFYAkZxFcR787Cj4kaDDW6pK1c",
  "key19": "5jMhSpxhBhaEdZm4DKywvtRhEazH4NxxyZiq4BeCShUhxiarcZgVNaFBzgG1q3s9zswxaGRKuazYD7NFLXBh7YYN",
  "key20": "4kaoXGhD4eEpDoMcVd88ruobfGoTJoT3oq3osyFB6NjrEsdvaXHiJPFDeR5jPj1BMrDPgPi7A7YqP7MZqMrQNPUy",
  "key21": "4F8Q8QAvGAqjU9CwpdaXm661xMTfqzd8Gp9RpRRqgv3hGML69wp16jpEfcv5G7C3HYS8jNvG7D2BXUWeS6267Fbh",
  "key22": "435oWeACT1YrzWLXUNHKKBDc9DG5etJiFKbJwHFBrvv2p6KzNuGvUDjbTsNodLsHiMcUazrEzdbM1ssZ9UWdHeVG",
  "key23": "4WAr64xSRWiyE8YmJjSyRjCkZ1Ze3kyYYiVJeZq2ZsP8jxPK2JNoZazYHfp7XbF9pVs5i75NTFers5hpQQW6GgYJ",
  "key24": "2AxDcsbetzHiJ6Yp5A1jeHuKkLpG9LqzvoR5EePxFd2UJ7VUJnrrEviCrop2t8bNDYwnj3GaQzXQQZxzWLWuHEdo",
  "key25": "2JpHEe9Mha4kV2wTf1qS9ywFPqwK5xG4fR69AzDsyQYnWbaojyQwptCRihK2i5yiJeKJ3HjtwDSdnPTPfhNtrZFz",
  "key26": "5i4Q8NJbrfVVbHXq34FY7QcufVcRMMFdDpu6BjWzFLGpbY7V21r5Dbjri5E1wjGiEKkZgFjuXvg5t2EdPPeZwSAh",
  "key27": "FkmA9HFXMqBVoiQt2S1depfhmSUYYZcVYYNVRZnpkSReqaiHtwmuFTbr7Ud4edW6CGq4q9Sef2YQdpirByw8BRq",
  "key28": "57HSDmn3QesoLC8vrLVK8PYnZaviue18kjcz8No9J6T1A6X74m2ia84nbjqGMu9Y12YnTmxb1rFjgu8Y2e645f9R"
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
