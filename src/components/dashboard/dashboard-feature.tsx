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
    "5tF94cu9B8A23t2ZFz7uqFEnVQJXFAtKhxhG6bcfEDuUmHDxrvG7NZHUVCWcfkd5hXB8Zc1zmLb6xzJc3JVm83kp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uTXTtV225D6Mpq43CTo2LxYmQT2s2pXcgrkq14wDnW8LQJXoYiq6hdYaJa7pXNimRinTBSEp7s3AzmE7KxaGhU3",
  "key1": "5pXh4nasGkyZRoLr2L3cQNSCGHRBvtfuk7wMKGoUhLaABjNp19yMD2o7X3ohFHGhCMEPR9tp3ZWvYYzYpP4ekVmu",
  "key2": "n25MP8D1VZ8Mp7rL41DKaP33UXT68rzHjaZQBAKbxBQtVcnCYZwWziMzhzjtt9T8bBinVwZHhEVcBYVAUBoJuPE",
  "key3": "4xuG6WJ1Cy3Q5LN5RbEcCkDTwsjf5m6ZjKBNerMv4Ji9GJ5sFdTbhrYDXpbGqeemqGnPZeCceGnAdkj8CMkGZU77",
  "key4": "2FFpfHc97hQfRCD4xvifBFt1MsKnvMsr9h14q3upZJHjpKE5GyjGRuWgBUQea3wKwENgpWKdfZ6L2DixTJbbj88P",
  "key5": "SdMr9BLjx8aNyi8WjdSGbsM13mKmRqxPnCiW7UjzQ8do37DPJTjQY4fKi92oDx4YHWN5HswoEckKXFeiBLSDdf1",
  "key6": "2Cq3DN8KA1xBiLr3XXH6QbBQBtFRhmzaRxBaJyuL5iy34uGMc1kmEVTJ4VYxVVS5Giv2XfXnCui5c8DhGvHC2evR",
  "key7": "2qkK5HtP75huWTPLS6tEimSSiawgGmaPunaLk1Z3vYm5n79baHsdix6gwhF7mhPUK5AEBxyirT531SasrcpU9W3V",
  "key8": "5RL1Lz3bTvKpWDz5jB5QuoEMLJCCuGA3dAHSPMtuFQsJyokaGz2u5c717KiN8HVR7xxfhYoe3XXSuyuVK2iH1WNe",
  "key9": "s56Lt6rqgdxzwtaBzLzeNSBQz4q7Wico1yaX1vJheASSj7GZ8qUUz3BjUtzqHtAgJw4of3LkWBiSTrx1dcEJkk5",
  "key10": "3ZwXFV879GqyQKjwq2a9BeCV1oXrpPd2dt35KmgQu9rCPYFsQcqNQcgfKnncqJ3VLpD9u7d713sSU4gfAu8BynXj",
  "key11": "rU86niSzibAgLWCdxUWpq2LzCm19pXr7iwM8iNmwCULPXRs24pDpMVHRabgBYZ9aBYJrkxoJL8kn1twXUJ1bYEL",
  "key12": "52F9otAKvkX1RxU9gyxJDGdYF5Fc31N2T7wFdUCshLBFpRRtmyuQNVU5q5oHmW3DRPY3xecg4bii1FJhJds8fqhg",
  "key13": "3fGxB87Ky9iEZXuFoFd5BhHZEWv9vqPoDEt466cxej8zrag8kfYgDKvubffEaaCgdQUhRb6wjtV9Fw1pVFVB4Jms",
  "key14": "3QFCZx1gp4krx8twVhM9mxKyXvUMbbVEzi4TPpq3PR77LnUZNSWBgukkgC2xx3xaWTBmbejtW5bNqMqTscJt5axx",
  "key15": "hmFdoGVBQSpR94yhx4aXkRh54U9sbtB5aATtMgKDCjkXCBkP5LuksZQEepVjd9xvGfXii6sGqNJfF7spKZVcXDR",
  "key16": "3Kxh1vFduqqqnHXHLbStVBvJkxKB8aC3SUzjJADAFjyi9Aw7XHTouZZ4NVGpJsidZjAEmkZT3FYhCnK9yKHuQ11Q",
  "key17": "4ZhwHCbsBbLCSau12bwCTX2T7dqe9xuTngaxdJUMBN8gS7kYwyVMQUaF3uRUbz3i2v9GJkMXUeQDkj58DDpDSGkF",
  "key18": "48cSFSPL9w5AGsxUqHYdFrSRrKUww4uTD9FrjYzqDj2bbXrVbZxn3V7XUsCeD4XEQFfXCbsqHBDFXzneqsjoa8dm",
  "key19": "2yCSd6epUhTXkXrFTJVKoXv7BXJr15ZzH7itPQWgtg9cNKctXSQqUvd4YWgSkye72DFj92zjZz7yGg8HjkuPN5XD",
  "key20": "2yAjL8hMCSHPHKpNcFgdsfepMpwFLwZaUaFky613pYnQDjAvtRseRS3jcb4DuKkR1R1A92V5fKxaS4PpNq8UcJFd",
  "key21": "4JW61qbihR12eMgXbDbdq1rYq4MubjqaLtib2SyK7UmDF8mJhik9i1oJmufAohMJmNJMGcxajHrWrEPCimG3sMWr",
  "key22": "5o3a7tLB29wzg6JD5885AS5AXsX9wdBXCVZAoMbVgz71T6wS7AmYc8Pje3b56JiLHZ7axykot4i1g5pa4NpBr9WE",
  "key23": "CeVVGr6fESjQwBneMwZ6Rscrj5zqH8mRqqUrA6UASdK13vwt8dG2A3YVKBx8YYKmp8L3iyUvPCLiYhwfbmnsg4s",
  "key24": "9xCaH2jiBDGdGxyCKoxQsZUBtgfhcQ7UxS6d7PgVz8NTw2CiMB2SN2huKjZdTxcXsUEpd4z4HkByF35qpH4w8KA",
  "key25": "gNT82WEqM7KYfC9uHkFfwZExKJYT2U1VR4TGu4hGsN1DkFPCj9RKEDuE94iURAucoe5Rhzw27pdM5BjWt7oMCMj",
  "key26": "4bnQcdRAKtW6ZYv42UcfrhA64k6xhZZ3hQdFKRay3oSXawwivbkHPD3wJo2SkFC4bd341d8HVX63BWTqWnaKtmur",
  "key27": "24YCmmgopYeMPt3yMccwKpb2uQ9iVhcpEwr4NKWLdKX6SvKM5YWgdJ5WHidmTwYYSCWBttUySn9ngzpjqvsNoegN",
  "key28": "3F24gfgsweE3j2FcexsR1mjUbea7W6NmC966FrPw9NsPptSQFNw2JpMt7Mmjv2mTDNWNaDLdyHhaYuZGmj5RbGsd",
  "key29": "4pT2u2CEd46B8or3WKqqh81kUVStq6wzGoJkR4HE9dM7fiU5QTUfWQKvX83DXEjgHG3xBoas32T319U71eY32aKf",
  "key30": "3q5Hy7okEYnVpYjZfVmgrE7E1SJz5SZNCE9SsshhpNgL2w6tKKUrKyiM65p9PcDzL2XNhp18HLdGRnbLDSG6DAVs",
  "key31": "2vk97a3P9BDJ2JnwoPpg87zWLVsZdxRcaeGpi731JjwkWZnpdpe15XpF1imwzkLZBPpdZbSyZgvAKsbm7sffqZ64",
  "key32": "334hwXPy71Q6jsNHUypeJeKiXmdp2jB2iJJ4wVVe84hyJh2vMN5GDwta75HZ4afGvgTCzJ2RJi7yTEaQQoxdrRDo",
  "key33": "2XYWVa7VmD9nbELxU8tGdnbxaaSSq7Aeeo5nJ9SfWgzFoKnEGAZUN8mZETRc9eu5qgQucd4W4tvETFu1roqYgDw2",
  "key34": "3jzFe98fPdebDv8ezehFn92xomzqJ8mtqLE4e9A9y8sNXkEuGMJJnr1B7kq63aAKFtPdJaxD49iBkzSHzBNeGbn8",
  "key35": "2dM8NW1bbryaAjVrv7i4cpET556MsxDY1DvzCe5tzZozwAiYncuuNxGREt83quQTa615tx4eqxBLnibNCpCQKa5x",
  "key36": "3evgGfnxa6KWpBh8y9yHKCbwvV2ojzYh6juSjrmeL8oDhoyGP8ZB3TbUGrwTSMiWiMZR6D5hJqkpSeeAWW3gWam6",
  "key37": "22nfw87x78hD9esHxoBJZU5vesGw8iw9bVdVXfqFuBJFgV2326B4qTvy3ZvVp5rjj76whCs4vZoic1feQHb3n1dG",
  "key38": "4ZJPCqGxHvMqLZjtAoabYVErV2Rw7vq9AxxqXybo7FrZSE2vzLzoiZ7MJsH3JVEo2CynP4DHoKUzv6912VsVhy7z",
  "key39": "5j1ENGLKfs6eUaw1xaA4iqdHvaKQXTrooxeMmh4j18Wze7Ep1LBihRrVMHctKQc24g5m6DGkHkUZurKvPd5anUPL",
  "key40": "4FEPTAx7ApsFzhGsU4CN6u4CehX9nff7NpVAtXH3uebcNGMSSMUsxZE5RuUm8s7aCwZxwKHyZj5BWW5Cm98zgC9A",
  "key41": "3Zy4YR8R6JsZg6CtgDzzkH45HHNG9gKnRQ6n1gfgamoVdpho76S8cHSAAX921Xuuua5vQ47hnrKv4zw2SnjA9ah5",
  "key42": "2Z9JWgyCLRdFkzKhJqu6kZKVMpCFvfRKrskw5fCFJyGgmRjvpfRimAqpbXuSr7nsGK1bbEHj1aSH7DFBEiJZWoQr",
  "key43": "2SXyL55jxX9xbsMZEJTbpgUMAxjmsTkCFuUCP3UnPuPTExLo1rem2TthZUn5Bx4MLCDHTtGJQ8eXrMewE8ZnYSMM",
  "key44": "3EbsFtMEYuBn2Kh1hKNFmUjNm4JnYm7zPpAxTBwgC9rNTQY9SK4T5Us55i8Jt8Ra4AAFQ77SSGeYJPcowQ5ZraTu"
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
