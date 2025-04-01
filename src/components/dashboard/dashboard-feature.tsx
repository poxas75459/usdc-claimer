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
    "2eQcAwYhhcJyfj3ybspgjkEjMo7JvystxpHDNFPVZsgxsKpG4WLdX88Bae69XZZ9eCKAqAEvg4bE5Q1M8sPLkojW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HaQPuX46KW7kAMvA6DJXVSjj3HdYKd1bfcgSG6YT75WFZQNqUBo88nTVxSgxCer3otVQDq7QsE726tGpz9GLUQr",
  "key1": "29vpnQb9qi2otjetmsBxmC4SMkeqYUeAgVzSR6R4Pk1dD6PxzUHtc8XtdreLfyNaG6MnJssA2pWuvrCvD6RzytwP",
  "key2": "3Xu7aj5WML2LzEnqypZnycuXDis7bAmm6DYGozg5sxpeKVXxU9iFVRXohgaQZgnxKofdGjvM1RRFtNTvfW1FoHgj",
  "key3": "2JRbYTzeDQ6Ze7538KcjVrohAZRojX9GDzyC5zoeq9c6hL6h2y1n3rFkr4ZPFeiVAW1WHTtrVLNDDBucCjaPVmEw",
  "key4": "nuvJP9bfrxYwkShSTc4prnneVrXwqpFYvH2ZrXf1Y1KRVek2D5cFFQg1241FkYkUKh3Uaifz9CScdZP32etTKQj",
  "key5": "4ahMjtgBe4mt3JJM3gJhPtY2MssknN4XUcTpWge3tf1t5o1TPchGTuiBX2qVPBiV7cTQ6CiBc3GUAZhpzVydbdem",
  "key6": "EaRGgh71uXr9vJMZatfxfDjETVJA4vdTzS21vCPPsbEcMcT2H36Vnuu2y6hzAE2NR1rh8rZniSwgtqMR6oaabyh",
  "key7": "2pHKmN3SFGVA7zfo7j5j16zSL4NUiyNeuWzPyemaWoqDUS3M18oXr5o3QA93xEvac8a4c7R3pdLiCdrqP52gyXVu",
  "key8": "28TS57z5JnQmrKGf3anmPmfX8MRi9ShrvvekFWmcoZmxSQe9rHuGwzH1FSwWEPCH462PgBZMTFYPkLJkb7DdkYbS",
  "key9": "43KXDwwfmACTwr2BnwvD4VBXXCSv7BBpR5UmWk6gM6EGoa9NuFqxpDPjGgNALPpksnjBmKNhNSF51RXtGwpVBsk",
  "key10": "SK6XD3qMRtTN2B2xnW8vydKBswKB7m6feekdNYABzZuaUUHhqhEoU3aVhUfEYyBR9qNUfsRqmSpFyVvxxvBc2ay",
  "key11": "5HnGLmfhjb2uyBAMRHDfWK4Moc3nGaGsU4ZosHP24exuU4gnmKuHANXhgCnbLtHoYUyVE384v7ysFm4HhhsURUwG",
  "key12": "4pmkJwjFWE33mpsAV3gUACFRQueCF6Fuxp5oXkPm2aemiyBfQumhN7rd3e8w8YfiEJgyLm7uUnSLk7YmYtu3UEzH",
  "key13": "56Qj7wCLqbhm1vA4pURRifzKG7H1QFP33qjttZJgoKoPi7TsBzmEMfJaAf2WK3btMweLfGnoC9wvjETFF1DZZiaZ",
  "key14": "2SEPUz5quoXLgSQSPh86qVVbrWrvYyQ1ppDnkBKCghjU7TY5cENSAMttkRe8bv1dTvHUs54JNPX8Pheba8GQf8c1",
  "key15": "oB1L8htprn7MVZHMbUzDP2KHKcUXTxmxFJdaCtPaKBwYxm5tLmmmVw1qV1C33EQjFpfns3jaaD1VAUF5buVCZqu",
  "key16": "2MDgWBcV2hv2KRrhHmbnctLZbhJyLDn2v6CryWKQnJ13hAiP4YndWRNgBieV9bJNpn9crUnJpGkjvULbVdBHHFPi",
  "key17": "3BVi9NiVmPrGxPbLbWbvKG1QhnyUukvJ67Gx2QAxquJ7krAu3kbiqrBGr6Kyj64FsXPdHBDNY3ya3wAj3HGkFuyQ",
  "key18": "5VCQxpenA13fpb2XQjgVVYbwk7UmQWgjm39C1M296yxav3spfJR72gCZGyrPrvQBVgFGNXUqUqwrgcF7zpUcy6zH",
  "key19": "28tH8ovXYTZKQ8wHTQx7CsVewx3G6biAPZpsuKH5FBRYfTnoiAfgsT8QnS9SSLtJTaJMnFXCAkeX2bgJjkTZVXnw",
  "key20": "KfkabjrobhYiq7y6DcyiJu4g73nKvVCZwDvrEnsfpaVm79gfqvRVSQUX8hzbjcvB5ZcntFnkdzvypdGgo2JB55w",
  "key21": "4Hu9qbKaDVWa9Ej4VdvPbrQPyz1UzrF4vc7oBAEjuvonf7G2GsLw8AyNMvwzQnviSJ5696Qh4gDNkHECG4FehbsS",
  "key22": "4C7Gdar6gzZbj1R6vN9pQctRvhX3ux1Fnmmg3aFWmC9aPK9gTAET18BCos9bbCc4PpkjvDZuaEjq6BgV6DZKa32m",
  "key23": "TM9mWz2SAhwprVdsN6w4jJpr3nY7esnSUDbto7tRXRELwrLBLkFEqX2C6KVBMBC1Wwk24MSfAo3hb9mLaL38pcf",
  "key24": "5SrdxZMjz2miAqzE7oxGAUK8dtTxis4TxJPXByXK5zLZS3Jtqdmy6iiiTs4LtwVEobGbT1nYS8UDRHv5dzNiRA36"
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
