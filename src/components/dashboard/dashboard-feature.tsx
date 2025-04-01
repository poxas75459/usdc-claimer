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
    "B8Y8kQ8QrEyPQraCMpKCHmBWqQFtpSaQxt83NSjDhp5Hf1fzqA35HaeP5jgjcDitD1weEFUVqWdUw8dgrSdReCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zCYyhVvFWBVMAkNbxRHco4PM4NL86SP53BAHdKS7Pvoxs36JDGiA3t5PMW6JNWX4jLCHWnjgxJn7yGmzEbSC6v5",
  "key1": "4NYLXD2Sza8wrPQAvoN67uZi1Hkctfrbhz69z3LLzH6ahfHodx665tBZ7amvvcCK1ZaBMwbGhXkuyM4zrXGNgWyD",
  "key2": "5znQpvazbvj4KYBiC8pBJhS29mtRtSNitN6i9LpxVYhdbTE8eqezFLtisQZX2Vu1HGZJPfmR9b6BhV5HNQViwwvG",
  "key3": "57vJw4twxVbaRYhwnTQjrC5pntQtBwTdUAN2eCkAxgWkS5n7vFEgjJNGACXtDTgVRy52u6nNgFMSrDQY9AC5DZ8C",
  "key4": "2jW9jQq8JLnragJb8v3vWzsBD8imP8ZPCadSr2Qx1Txj8ndJkQCd4q8Q7K4jWmVi7zgnoUESXhMZM8SXDR4KdWMF",
  "key5": "2oDB2XGGChpjj9TE2AwSuVrkg3Q5TRK2TcxFozmxkkiJewCJEDBX4bjTMkmf1Tre76PGquWTihnvEPKMrEmEM9DU",
  "key6": "CpiXvJomHnRDd1jygNWjRm6ByFhdcn4FeaLUUHojPi98qPSoEbwhxe2piS1r5PGDkdmGdzSQEYK83WG5VT2tgzj",
  "key7": "3hHVx5tgcqCW3YFeVLwqKe2n5zSEVzn3C9U4RmAVGhn5XyqXM5R8GL5fGip2vh4XBp6st9q3Kf25EVg5rZjYK5dc",
  "key8": "2pijNARDHYu5zpupYu1rwPdv5CCFZA6Kp5Rfx8Yjz4EBEo8x2wvoUF2hvKTAH5d9TyfTmJSPSdCXnqddoWBwV2WY",
  "key9": "ENGJkm5KdygBeQ6vbAW52S8NHxzq3UimphQR7YyTgjNB4PLNjMZwXdHmWefhZXj2SQGzKRGLPYFZz3r4gKdjj7F",
  "key10": "2d9jSyg87vkd3M3Ci3C6jzt9v9fi43FJyaDfPZTXCNgSx86Z7FU6LkDrzokfZPsd4QRuWvfgRszHNFoHVXrng6HN",
  "key11": "4CfqxAW1E1RKYu4e7XNp2cyKRH4auQUr5ySdeRsWDyuKudQuxLF79DWYcTSy4TWya9bknhA8mpwGX2NKz2mDrPHM",
  "key12": "3BJEwLt8LWzTASozY4t6Eh49XvSNApdezU4xtYQsufezTpHpc2j4XZXTWxyTjFidRbz5oBTFtJRfv2hxgQf2BwGw",
  "key13": "46Ap1XmmHVAx476m7xKXBmEe57A1iBSGo2hz8XkPmST4NvD9KB31UM43HE4n5WxjMT2CAsaBDJ4TSAUmgbQ665mL",
  "key14": "3ewRvEysNbPHptrAUedmVNzVw7MR6YdPLa9KPhWKF8pC7w8jyWQgT7gaUxYYP47FxJfjqFivSXfbqWk2SMNFuYyD",
  "key15": "3MXegLDnHhPqKGALFx8JwRrj6yai3hSTkCMLHnXHjoAJgNFopWC6QRLHHTocZKAdNxcQjraMhBqgUFhg1LgrcGok",
  "key16": "Hv7j7bSGnhCte4yoc8kKUXoPnftKBWSjWu4MTNYzfj7ho5fetLKC8HPaR1tLHwPNb1oWMHKLX3fNgNhVjpfg2PX",
  "key17": "VEnt8RcDGbKe8BYvSLpsc5GeJuQyfajVz5BQ3mTazxgkhFuenDkeSYKHZSCinBui9CnS5TT42vsyoEKJNkZkWU2",
  "key18": "3RKTdoUb84dtm82E4yGSfU7QFdyavXQDPA4fxsrrg4s3hb2RYfgrnD7U3bvd2KDNcrt75zABeoTqHPP4y7xkwff1",
  "key19": "4RpvMcuS2CRfvu39KLPSpcHYr9PA4rCTgv8iSStF6NtnGRUmypBFgiYzbQQBJfLexn3dVk5wU5w1XS6gwVd22QaR",
  "key20": "4C6C3mtEosikAp7Yh9XC1TsoFSGwRJZ4w5VSGuDkERYCGxW3ZNA9v5GywcLinckongTPveXH9hrmXs3pXmY1TrHA",
  "key21": "2QpXJcHe8qMqNL6tidjwxZx4mgsUbVbv4YWQCQCcK6PDbgR5j2nYJYDrBirnjcV1TnvRikj3wTL2jtFJDwBHPfJ1",
  "key22": "4GkGrb9ah12AzW5rRcDRiT1ZHnVErvibCTvdL1A3xsxu4TCPHJQiY8SFUR8tVhWsxA8hkFExht9ZYsUSpEWz9a5t",
  "key23": "3QRmteToqPUgKaWLbzujTFJJNYUn2UQukWkEuVG8DT2SuMcJkY8DQ4n6bvU4AKmjYiiJLB3CfqjbfoxZmzzoUExk",
  "key24": "2HVFi4H4Fp7rUcjT5CLNurDnvcQCJhoiGVAX3RaVS7sjvNSENDvdE3bTzYyR2CTDN7929VqVf842D9Dy8SMgPV4X",
  "key25": "2tCgSzYmZQYMYYWrp6djDyT1t5hzLfj2pbiZ6ntMyhHdGAYcasSaaS2oDCW5PriU5ptAkSS635SeWFsgU4eG3LHo",
  "key26": "5EXrDrePRuxwEbSn8AghD3oSRtvSEA1hyBm8v1zNMm4khN7fiD31oh9d7HY2G345hieVWrn8X7QJaiboCHexQb2R",
  "key27": "4TdpXFs6wNszAMmPGmFmfcCgDbgbbjyQSFv9PZnRpyK9Biag8jW72hw9kdxnSqbogmPKfMSseEGCzn9na3d2vfUi"
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
