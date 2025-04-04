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
    "2nTt985MPYTnuLUGk49EMuEKkFVXiVgH8THtySvtWDyvdNQJ3LuahpmGgoveMkCY385zDEAhcosakkKbCBfvLngV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gVeghr8U7kXfj4UJ3X6ybgnizDFJNJ6ywqVtM4minVLRbPvREeqtNADQbbigELS6SPnGzVZDEX7sxKD1HaTPDdM",
  "key1": "e3gzsoEaNNyGd5mN9bPHR4FyfDMYE91Ey4TLZzHDj9tiGjk9CsrYEeFLJyi8RgA1hFaYnhimPHm7YYXSC4TtWos",
  "key2": "3YTKkq9n8hkhgeZG2MwrHKoR9Cf1nDpST4UYtZYLG1F2nCz7EZDsYFTXehayh1zYAMZn8vbygvqswB8wPaFfmqw7",
  "key3": "5hEDdZ58DVpkY52wVjkmwJhiXYTuEX1uC6Jo1cusieUrnXH5ZhDu52kz9bmWd33ReaouJdTXsSWcH8XhB4RWJcNt",
  "key4": "5eLyQjw2Hzzbk7DXGt8kgZiayzCzvwq1j7SWU9TvCtBrhYKbeYU5V4uzu5eNJUeN2uARhmKE1g5o6eZwKsjgo8Xr",
  "key5": "392U9ZZP1oGhTjAUaU6PXw94W8rrdLVUCPtXrfbuPjn8CC6ykNakbTMyPpUwZgXJZpvvAW9W1jqGEVRmAK5oNt4u",
  "key6": "29FEggH6FW4axwhed5y44Sjqn7SjZqGPE3chEVxiC38pVpG8WCKdyWaqcrd1K6FaViNdzxcAwL8qo1SsQuSAL14P",
  "key7": "3JjB4zNkt4GiTGAPaTMooBQCvvpjs1xMMyLPschFGe6SmvaJm2UZTAP5AETFqHWTUwtr4G1ZJ3spVd6qL6s2Zvpr",
  "key8": "r9dfJ62zL3zb1sJXrNRurnN18iSs8PQrU7Jucbxr1TFqdwWVYgoxB5t6L55bDVvpz1sh2QhJaVpoec62T6HR3P9",
  "key9": "4sDq9vURdWiZxYDUKujnaN53AeRYkFG4PdE9kWR5jnj4ZyajrTsHKNN2QG14zvMuKTmp3GGisuSGNyVr8mANCrMR",
  "key10": "o8Gwu5Er21MjwU8sQZzvjbNVGaymLQrQ6uDxdBkkGH3mBCfx6o8TLBG1jaV2NViWcowSpgSUQGb9HouP9r11FWX",
  "key11": "2penHEzHCWhstd4efFxp1NssQsrHKPoCB69UkUMfPtEWL6SGXHdqpGKVDVyZ9wUUaw8fxok3tWqZE2jVWL91dSCw",
  "key12": "2oBF5wU6t9xAgk47caxs5v1u4f3bUkKiTGSRRw8NJQwBtjYxhFW68feZF9U5LWVoDB3h2rK96D538JhDL7g4oVYa",
  "key13": "dhgC4BzWsdYorTs5ZyEqVc66Mjp1jH8e3SacaUVgs4CDAjW6gRQQmVasFHtV6d4QQ7vtnQSgmqdY3CCCFfDeS8W",
  "key14": "33coR6fVPauntStPfzRjT2U1mFwSBg6VUkcX9uRUrBRygboKWtHmabK5rteLq5zV5VfzbXGAR7jjXbJo9ttywfdS",
  "key15": "4Q9Qn6yDuVo29xVh2WHjoTsvsJ82SQghLkXqr9nt3jFTRgp28VUnJswCUS5KgZqJacwFFqWS8tBRTejsxNAE8d5x",
  "key16": "4Y4TeoA7zb49TSizWrqBnAGRLFXkomfZGBkffAJQHogJFbQ4cUkdbGiThf7NX9veAY8S1uw3zuDW2SJJW4gp1eGk",
  "key17": "337LXcoa6QFhb7vMmznpQjtZ4d3tns9tfQGttBQxPE35Qntm1FH7V4o4e4NuURaHet49zSMH6121TJRAxbptsnog",
  "key18": "5UkRbzsNUzbtfioX5sAmSRgeBPpcZbcodyq82t7QK29Mb7tGZn5TKHGN3XZGe7F9trvhg8qYfTAALJ8Ri3ocvfoM",
  "key19": "2voJixb8VKgsrnTrnDUb8wExFX1u5VEikF2358bvGRLAjD1rPw64LXLeWTfE22sqbNDPaUULDgW8YJPzX5mbECPC",
  "key20": "3kYenYwZ7VwXZc8qnnUz3ybnbBKFFRy9utipyPCD7XjuytSLKPPeXBd7yVpMCzh5eKK8wKoxLazn2m34RjGa2dxD",
  "key21": "2pze6va1oFAEHMVqahsvQC5HS7F3fUx8JwUDEtcSRbpdMa9PKL8ZKbacv5esbcAjdBdjJYW9b5o7wR6uzcF1ZFx4",
  "key22": "4Nqj4vXFuSgXVWrnLLbefB8FN9jdRSKKXUzMxWjosDoiLRFyHBY4oEswzUJX1N4KMzEmfbaPiNsYSBf8K5NW8mht",
  "key23": "4U6WxaNg5GnHDhWjiznmDvAWUDFHzAQS9uyg9nzSL1QbvkD9egq5WSUsjJ8zeTkdWdkdyjxwnca8kns7AHNwpoxP",
  "key24": "RJhbGXtnAYVecrWxhzH51qk3B6Qvrk37oUeRyAaeDdLGN2543Hn3GKvJfiNWQ8r2jWbyyzxCgcBdiwtxU6e4fYC",
  "key25": "4xuGfjHJGUcGZQnDvstViHAPGES2uhgvp7VigNmaReMHAj6V4VsAsm56L58aYmEJCd6eUcKCheHAJYr3UoQoJN7y",
  "key26": "3GqKQUtFKELnS8rDPzqivXtCs4Qe7D6SWVpkhBQCx1DaxERaGr8gRrYV9ETqKE3y86JSidyCPqMceni1mrtaAdLR",
  "key27": "fMwhtPiC9RWzoUZqc2Mj6mYZwTi2krWzpjUnGek1koPpAAFJHoBFHA6mUz63neLd2aj1t6hJf17wFP6LLUdK6Lk",
  "key28": "mxXR9oeMrgYzitdsA2vrGMozVqZ8NqREgEfjCi2ivVhDoRUqbFDSgYa8txY3aWgQoiaskFwKS1NGXZxD8DjhFke",
  "key29": "4YURzBxVFcnmTYuLrYpbEJfrzzgba5PQgvkvM4GLCaHM6wuRKJT4qGzHWMBZeZkWYci54QtFuG2qpRcs3qA6Z8DQ",
  "key30": "3EHuWtEeSqMMZCHBxFSdHAss4gRCFnJMYoidvPJaxFCDx3FPTfcNyAWozFZUosHG6LGabngV9FpRpxdLewCJ9fAM",
  "key31": "5iewozWdN3nJtFmfVMvcmMTtpSRtuLBV8yHLfW5dd7oyg3JHJoRrQp54sJ2F15tZBjwisqc1Xfe6fpybWBh7EzVM",
  "key32": "RuEis8xnxdkNfGykACHSD4GsXEq3CcgpExeQYjasAmsoy1dygPH3WJuGYGCMNMck42NoGndDpiXFW4j6nNA6LTV"
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
