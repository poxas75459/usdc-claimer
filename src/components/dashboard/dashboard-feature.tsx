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
    "3hQ6e6rm2PTyhWg6q1fm39A3BFJY46C2GEfYh1yWBtzsPX5MtqbjwjZ1t1tDNYP1coN7G1VEDa2zDmD7cyF6Jvi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "stao6ngNJXtgC7keX5zfZ9Eu73kviTC3utdvJ73YSz9q3cCnfcwnQr81JQumCuq1CN7s3TAiMVH9mWvz8wGbmrs",
  "key1": "3L5sXa8VTZkTJrGMb4LTA2EQ7SmPPU1VpGyd9Jaf5SMcVS1Yd1ZVoayrb4yGwH1pdTtxJwwrUd2x4TAFNTGrAuYJ",
  "key2": "3APs1GaNWSJTrDkV8XKP7w3KiZNpJmfcMh31FT1ugmoSvD53hBBY7xodHtSghqdY6Rpnvphb12BXprAcyruDLNaY",
  "key3": "qntXFYRbXsc3AWCnpLjdmDMa98BrZaajGQUmsNAz5HVfeZjQwM35DQeMca7JhnptRC89Cow2iGWXcV2MKMfSVC3",
  "key4": "5r3fuNNGwR3WgJWTiozBQyKAC2G5yxEcDMSd4pNYEnXDQZJirdMVXe3Ub6PYC2LQLhRGsXgs1S26YMyzGpB8XF6P",
  "key5": "2jAPWtfumPSVCAYmRWsc73nUoNyY59Vhx8r9TsF966Qs4G53tUe2k3XwsBiDsi1WqNY8wJf1DkgBDX6JKpwYMogh",
  "key6": "5gKSJ3wwfASdCnkbNGCHKrzZ7dAF2eaRFgbxtsEASJmv3WbdxnwDuB4AGKdQfRNqXWdU6y9RZThrNczgno5iFVfr",
  "key7": "2u4kpPmkbLSAUWkKsv8yZdYVLKgF6cwUCLy4yu2n5vQFjYH3JTobqm5GGwfPvYaYHWADh3MdGrgXvvTddfVMuaMX",
  "key8": "3x9w8tj94L4H3RfBAh4Ks7xcdcRku8V9DLU7V7AzcEsuK15VZWYzjVBxb1japxYFs5TPNsj1cRfeQZWjDdKZoR8d",
  "key9": "4QAN2XdM72R85JmUBJqYo5eN5ss18raTuwvFV4AiiP8HnUyd7SbkhT9tKqsdzxDdLkGrKM3CXfWwVupKdYTyf6qa",
  "key10": "3UvsaMb4KzG7eT3Vy3EX15eYETqAhE5JWXUDSmM8vTDAVeGVQ3MSqShLGzFyQTMH6kjZwTom1LZEpLWZwJ7bxE9E",
  "key11": "2R8qgKMS4aYaK9y5E3YAXf5xwvzKxHun41Df37rCvGnJbuaRJWp9zhKWqmM5o7JekRq8zac9gpaM2SuCGBY49FMH",
  "key12": "5cEFCQbAR1WYQjUVuudbgwnwKcEoCWCdEwVgwTA4uMJXrsr9hjwvBNNHmTUFSkq8oBWt7MBbzgjgJmc75LkheC7K",
  "key13": "4rZL9ejWGJXBbNc6uErBmUNyPcWfTY4w8He1FnpFAg89AnwnCfSTUkb8wkHALGMWkxpEfeju9rne6KZH32C7fQHS",
  "key14": "4QkuTFyW6CcBRsL6YE9BMZaFdahj2zyKpXsUdMCWFTikvpdjcEdRouMJx3C98MQG1DRp4maFVj7r453idn1gXbrj",
  "key15": "2sdnXUCy8Dr9XvYuFS9FNzzZ1ZhowckJgJHtnW1ZVoJYz9pg35inK2EwF28wBedLHz1w8T17SSU6sT6e9PEKPrb1",
  "key16": "4SLcEzry9Dj5VXnyJqRqhF7DSqiS1jtajFnNim7k7jDJg5bdiGm4VFqV998J12AJTpAcwLxCtHCDb9nr4tFexybH",
  "key17": "27ebLKPTTsx9wAhvTYEnfox3uCWUt1Sk2i31hV84mAAME5oBb4PdJzW1ufD724TMNQXC8Yy6eGf95ZUTytFGJRLn",
  "key18": "5ymEBUmuBvjSBizVhkbC3KhRbjutTEPRDzMh7S4AySQJdj2rsgPC8qsisYWiYDmwhuoeobCVhrC2fJQQnun1Q2Mg",
  "key19": "3mGn4j23X83kbRKrQCEbQM9MuCRnujiHhsanby4FkssoZh4u7u6KGZcPo3KV8zUFnM2xPV6we4PdwsnVftzsNvVA",
  "key20": "3A9g4cxFcYmf4Tab1cndP95jDV6tFsVorCKrZ92QU4eiGn4Fiy4iMwzeoMcvMDPiJrNAf6Y4uFTMticRqovPJwbK",
  "key21": "5o8zMuWhCYyumZRBV1XYaY2YDJrzxyq6ga446NdSC3WWur3YSn5e2z2jNBEPBLGPd2koSaeXHbs83eG9w967cGDx",
  "key22": "4CCFZKB8jNFVf4tWrgLjPKgQhwyGLhXGUxqomKAyQUn8jQsDjt7G3rZVVV3ovtJaXZfuHe9ixdbx1i4xbDKgAVGo",
  "key23": "3WsLjYyWECMCFZ3oB3PhrRnd8tiT9QrjjZvQ3PRn3aGo9M7qjoYCDKYmvfFTQTGH5ZbTLp9w9MpZQ6bCUgVW6z9W",
  "key24": "1vVTTA8afcR6fhmG1Vog4yjDxn6vjXhDE3C6aRaPXLZpHchGEyP1kJRVLiJrWm5d34JUFs3HXwja3FhCwrz9JQ3",
  "key25": "2U3yyzopqaBkBUhJxLj1tJBL5qiiuMmAsgcjbL4ZUu6SwaMsftFbBktRWnDmVLgWWrpdJWQaS8CeVLdr2f5QWt2J",
  "key26": "3nJ4znzwabsXHQaVHnSBLAcfB1c2P92UXLTuxsudAr18rtWSq9WuRACp85SVuQ7CSMSM3FNtPuQnv2GmERRWTiPZ",
  "key27": "5o3vpPFJ9USNF8N7NmJakFVo8ot1nMUsQgXC6oXNtMie4fHXz6SrWABivAfQyNaKCX6zrbLzvSu5bvd8gLToFD4X",
  "key28": "3ZDWNHd8nyunkjZvF922pXHHiPyfygwFXfFmckQk4Zr9NpFvefRhiub5wQUNxPcSJQBL1NVFnhZBbbcFFcxm3YLJ",
  "key29": "5j2SA8rDeFMRf7CTDDbCWbs1TiEHey1oaMjUq3Yr7HBopLuCxXQseM7aEWnZ367uqttrmQkqyDmgHB7goq8AGeAS",
  "key30": "263DhKXoCuNmoMwryiG2cbQ1NV8XWFu4MrDNG3EBHEi9beegqC7UCBWeKEt8mYwi35gyCdcBtWNGqWRxHJDYocu8"
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
