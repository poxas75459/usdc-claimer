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
    "mGBYEYLY5fXV6kQacnb64tJKcNzRLTm45q8hrCWs5sVra4vbFbD1Tb8y8ic9Csyj3VXDmCkYMz5X23F98CJHGgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61iYJ8AjK6ggP2f5RLBCi6bv6Ga16Wc2hBMjp8iuv6MEqh8LZ1wESTwFPeMX2oBzTQrMPhEYExebqKbjyN8UN9ZZ",
  "key1": "LxwUeauHBjb9qqWL34sPHfVUWAAhPKMK7eAKyKUrwx8WyWgTdfma9D2c5TgQiUAtxiCLVDB6wTQLo1bL2T4af1j",
  "key2": "3k2iM6Hr2jSsSWb4WopNtPLqWgAmZUuzdK12YZkQdrPEbwnfwXxw2mBi63s5P6JMn1qFnr6QBCsyZfNviEEswdGt",
  "key3": "2oFrBvhb7QbSisUECuaxNidHCAdUCyGU5dZmZccNMNBBiYjKf6VMESXbzRhh1Adgei7VCUYKHNiwrBsUG7MojYJH",
  "key4": "2EWiNyfUY8U2WGNBWoQDiqqHsBKNN6gwfG6G4FrSnTD3P2nMKC2Urb3oGxhdqCyKkQr2xTPTGoktEcr6VSFM7Kxa",
  "key5": "21WxJP3i7pCwsS3bh1Rk59wbXVcreowB8m47hZPq87WUotqvL48RQjNv9642hpAi9JYJqiUQy9pMiCd153UBqmDD",
  "key6": "4vKD16JGyAK4SKTMJwMSAeVrkcJqwX25UexbEMF3R8vPSQmfAtzs7vtZogbX5i75uk5hhxg9dSjC4PXbiy6yUfV8",
  "key7": "2EdFmWw2bvT8ZpUJa6WeEGaPpaMecLxC65t1qTG5F8eZCPUWfFVhrXwo3YBz6ekGtLCHfY7ADjVdQWYFaoCypwwc",
  "key8": "5fEyE3UgBZJJhp1ax5xk6onFDi2rGVSA8jtzij2z7NasKggd3KPLPfTzzeamn1G9LqLPeD9YoudRCcq1uZa4G5k9",
  "key9": "Zk1USPZXFxNcsuUw1Mum5R93tgTjVpYznTpiTNjDjoYMun748n3E7wa8MJNfvHDtadKJfXad5tzidjpHbPFmLpR",
  "key10": "2Uw81LKVSif1uPxuXjZpJAvDwftG2LvMvADwxXau5w15cVA68bifpKngAd93yrEjMaMr3uCXztMrRtPoGjaZzgzf",
  "key11": "EVRh2dtLwU3HoXoAT9a7hGn8irWcYYegHibPKnphL4TkhV7pvkFTi6hrZ62WTrnat6bWdYZmGGMEDU2iTZomtds",
  "key12": "3iZNqHe5NqDh6XXttapUNSuQNVJVXWBf84kPFFHdcGk1RBaWCDWhrqMWUSseTXrgnBdhFN1wFEvFXVdvaQXy7FkC",
  "key13": "ooEAi6qDVtt5BoCuHZdZbdy2i26Y44rzCsqRyL1d7wVQpoxZEKZN9ytXD98DvzuDtuLs7ozggkEtxQYVfbbskqK",
  "key14": "54LwW3QaQBieDD87e6J6QHwBo5JFUTsVYEDatWkJm59KNJUptb2NUCsFqWTDVEmMtt1knipEtec5X8pHgp9c2LMQ",
  "key15": "54hvjXx4LhCA2YJ8E67tJwR4maGmT1MTznYXNtPyYKsPfnMQTUxYVu7f6k3QxE5ojFgW1EvuYP6cBMd5Crzk6tfm",
  "key16": "28S46wsednwkQwmDSVoRjeP9oEx3DXpk89UuSwdiPejrkWgqafeGPXbYBa1SpYgfM8xJ8e5Hg7sn45RgJvsaz5Mf",
  "key17": "2vxeY4VtzWb7s1DpxwRdsWT6FbUYTNV5Rt9LqdgAMZDvJ9xq7YybH2HWhd6ruRh1szQa5bMTiZtrCxu8BVJS6UUV",
  "key18": "4bdvKx8ZctfphHRsEmj53dHvPshwi18ggF5PxkKGtWQAwQuysQU45wvWN1djqww3HcEQKVu5NQhptihWNyw47CcF",
  "key19": "5M2Ehrf2qGEyZ9f3ZmmX9LEfbdRLe26CGeUu95bqvtwRzKFyC4VzZYfzFcbC2eWSTVMNHdKtBz7z585xoxBTJ455",
  "key20": "5ZnFXqg9UauUxJVvfRi2ZgCBGxLE3AMiW7jHsQ4mMvTNtyZBK4RcuWibMj4AV6QDuZhXPoYvYmjSxWPRF3fZazYL",
  "key21": "5VqMtdYsM6YTYBvDJs7SHAJWWdchmuSdiYJ79mLy3KoELMZCAN1W1JwWjfYXPt31M28xFKCT5m6DdinnDZRZhP29",
  "key22": "w64FV1yTUbwtgUQDorE9rH8pVtdWGHKMZhfGrfH1K7GoE1J2NgmnEXKwwHySMiBCknnpv6Qu8Ewt77gt8MUKN4f",
  "key23": "4hspQe5f6muLU4AoXfHvSctuWCgtHb9HeT97ZnTWrCaRWq5mJH82LFm5pMPz78VJFb2TPvnDWzdoxgq6s8PHajTJ",
  "key24": "5cqgiGQaQUz5noPFQu45Y5gv54PPmaAs2tZUy2NziuNXHUprySAXo3uMsLGwvZiH9wH17L8fa6B29CEkgdgRtwYk",
  "key25": "3YjKTbACHDh7CzzTHz5faaEUd64qvjvgyj9fnXbe2myjy94jTtKdGKY86BwDvP3qYyoMsx2hLqtDxP8n9Q2iTsyk",
  "key26": "2MyAK3qQvQQAnSw2ALDJ37NiUvTmLynAbnxaeh3oypp48QYwPH6kUV3MrrniGjeA5SJarwFH4GzrWvpFMK8QfK6o",
  "key27": "3Nyqmg18aFKanHhWn4XUQjSDKiAWXS51arY6QLxvD8tCzj2y3FLavrKWSuyrawZmx9JYhiKZwewDdsshefmz2NNB"
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
