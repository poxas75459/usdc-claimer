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
    "2WBbR4yUZTpgbtVbZbAy3uLLJvB8UqQbnpwCeRQhtadZeoAkHzucEwE3Ju6pVKoxkJFW8tqUzvX9qaLuyrMXR761"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t5T1SYJhZCWWtD3Fg6dP8x9Dt3yjuLTmSD1Wmyp6y1arpdd94qbcyQaYtyagLeTckTWuC53ECBRyfUnxGVmG6C4",
  "key1": "kyVSG5RMsADjoDYhv5wnTGXTcVKJvtfzFdS3n9YZnbwyVrbqEiMguMMcpwbjikYe4pTyW2kMoNuHNW22mywEBPo",
  "key2": "GDnXWHd68kGnAnPBZhLfxWbunZLAeehfy52etDXCbTQ4v2wWtjkwNpibvKNGQpx5YuuQA2b3XVrwcNVSDKGPCdh",
  "key3": "5QevGbvSzansXCtMPVy3jq51asUC3AQd5dJABeNq1NL2bfe39K5bA6d7H6whdjaShdHxMuEBJyopDAQWktJqyihv",
  "key4": "4Ns7kFbzBcnnT9FM4jVACZrfabSHszhhBqJgpXL4v43AWMwrpMoRoH35t1wxEkEJ84xH8gwvSQZcozJEZSUVKFWK",
  "key5": "4x5RJHLjGmHDPY4YRCrgfpUmC9EniWyhrhuHkZocwEcj9xc1k2mAYuXVXChy6WczkSXpiZ63T9c4MqE5gPpc5a8V",
  "key6": "2CBd3R73WQqYviujwo6phSHxkK28jqjHeZp5iEBunu5g1SSXSynKs8RtbnZCAnUSQX5rZ5NwxK1tfD6ELw5V2UL8",
  "key7": "5ecVT4ixjTvWSVtK3Ws1URWbEsoR2NFK45ghho4ufFRDhS7TnMyBkC35RcHdQ8oqph7ZaqF2YUAc87NGGzbHoxf1",
  "key8": "5i8q4Jj9d38KZWQHPPGRudHos4fhTNE131cLd6sV5oeGqbRhBm3ngJy7eY69FPCTLvYqVnHwrGyqey5Gh5RaZGhC",
  "key9": "47J5op8MDFqGRyAwimA3zdMqN6jvyfUneDUr61GrU91b5MAYHVyXMxBGohbcYa47JXkh8jeA4hcWR9GKixdewc76",
  "key10": "3oXrMYENX7hoCXLGrUM1fKfCP3dsSJh5dXhsCqgeELqMcsDGqGNcLJ3Cx4MsXZ4u6zmigPMqFnPw2aeW6z8ZbarQ",
  "key11": "yL9B68yFAuwKSmJSkY8y1nF7i4AWg3bR3pUaGa9uFQMJ47QJ5UB5YULiqkYmmRd5ginTXh1tSSBZEmoEoxFfRQd",
  "key12": "RBhuTXgUJej4m56cYxiSc8MJViAgcG7G3SzZs1bKpNzQLxtBBJWdVCLmsHmuuE2qeLKKeSwK8E8Hh3iiCwuwwf6",
  "key13": "4TBE9z7YWe5V2M2PcyeGDwUKmNewvTUZASQbozZnbtHKSBKyrkUAShpKU4d3gGoD84T9vRKHdfGuVRWn9Yf9Uymi",
  "key14": "2xGtDDY2V4EHB2XWdsfo8DLFKwnvGghMTgcmbTmktsaAQFCUkCr94AMssyBnWm6H4cCzecpDgN1BRvNDCV2rXrg6",
  "key15": "3mDG8eHp9U1opJkm7JoSJ2qEnrXfpi1ZCasj9EcMNpoVzDk4PkMaAfqGM4rBq7EHywCZXxcMSDqJNG96z6S9F6CX",
  "key16": "2EQSz3dWVpt8gm9So9SN8QV2pN7du4d91UtRvh2jrCWJSNHiEN2pAd97KNA5mtSBfcSNE9VDuNapGQX4oqK3ZuJt",
  "key17": "4yYn8e7eroLqdaoa7PRFHYmrNKbrAbgP7iGKVdSo1JYEND8FMrZbJHN2LmNp76KQaiFT3HcJC2Hkctbb6RZQZ2hv",
  "key18": "cQ86u5pjBAcSeRi3baceh7oGJFcExFw8baKixtAMtSS2nVYywC924sXvAxRcFsw5WvtrtyTxNiWVGbQYqzcxbTm",
  "key19": "2Vr8JVAaZc6R3QP8WzBwCWa921xeh45kKRr7HDbgn6Rcg81M7h1chw85ZRavVXEshKBA7VKVMxn8ccaT5MYDvhqX",
  "key20": "3nHLPJwgZDjXMPWNfrhYwM2uAKyGLmcuuQ8ZvF8wXKSNJx6RCJupJV3Gwj9kAr5reP695VwaoMX8xeHMXwstP3hz",
  "key21": "5piiBNEAHVcuUmYZacfgTRtaYrctEPkptQy4uWSLApT5asF1ZF3pcaqcCjtAkD4Sy8AaFTiwLykFPRUG1VEPQGEW",
  "key22": "77fNkTDRGHCajGaRGgs8tjLMuciBDoKd3R4L6CiBfwk3uySpmGA8KAbx5Dq6Z96sM8tQoU9oZmrc5bYJLb7HaFR",
  "key23": "2YNQmpoBkSekeHGUqEPWAwS9EUUsQX8gjHaFGQwbeSCCkoT1UWYPLznTqcGjzVruFRpX1i5djKGjPqFFrRGt6Mz3",
  "key24": "2BgksDe2P2vZpikiDBRcPyTstBnhPSFfpxHYt5iyauiCioda4uU4JZEYa9nVdsztZoJSk4obBthJvdLWRxRD2oZc",
  "key25": "5FhhT22JPwJwAJk4GcCS5wn5mSj4Ct3LyzFgGKo91FXvitKAJnz9DyVH3qrfod1tJS9xKyBxE6tDuyJintncC8uR",
  "key26": "5ZYZKLqmi8BfrK6JqtYR7zALqVUEmHmmj377K7dmbMheJow3kF49SoHf4GX7FHaeH9RU73cDdcgpwQwJddYMv1tX",
  "key27": "5hE3adGaoZtr9te3eH1tC9Bu5zJxZJcmq6EmkZcaa5aRcpJbSw3vDMEEMF2nCfDkBuQXH2hvU97eGBqDLgv5o4DM",
  "key28": "2zi6zNRruMRRw4gDZXMa1L2SNFUh6hvKrooU5znR77ctname7HDWfxKssmxD7kQs8h4U9GsJPWHNjGyQsEdjpEoW",
  "key29": "27NYJaZii6Jiz5Xembdd26AoJVUh1SLwy46ADvrCetR7ubQipr9CMenXmmQd5eKVzJBS4D1sFBXQ4XXZhKAXiLct",
  "key30": "4vSQyceMdXH9xtLsRXZ4MAdyaDHRCbmMoiDZpfsUVpcevsFLZeNzwkCdQdpax1J8VB7qGMyh3frzsfTgYkqDshEz",
  "key31": "4x5PHfmwrYJUZvcrPH4NXeRyNgkrqsrxEqKZ85kBsFhzkfAFGi3nNnaM5CWsAzW1FMoK23sJqybxLcGm8p5oBfD9"
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
