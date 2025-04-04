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
    "5KT1SbMj3mAwBUJTGmJoE65X4yrsVfdfY4hVikq17SgNCJ5DdVLbkksWQZL1kNVWSLwmHk4x2X4yfaC3XBHPTBfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rdwF11rov5E4cKi1EqMtZcUVBxJEExVza4Ghrxp2X4N5QUoNyjvq5vxBymgpUKHS1yn4guzbaFSC42umhcRg24C",
  "key1": "T4PNdRnZHg61GLo3RkPMRuDZpipBJHFq4KcbSL2Rer2LZ4jcPJAYC1CuYVBKMuVyzGYReqp53P64op6Gf4AytV8",
  "key2": "JG5v1eBmbXTHq7b9B98ZPiUPj616x1bMkqd3BxdVRJnE6BMA635FVCmtPJ4ih6gfrbu7sDNpYHUxAfKMK7Aq6W8",
  "key3": "4m7Q1hFPB8zczmwrkisLxV8iDV1nx4GFkWPUV9o8Fmn1a8uWbcYfa39iN6HJi8Fi663qMvGAdYtfRbsd1Q6uACaD",
  "key4": "nh6WQ2EuEw6CCKBKtXgAE2HUk5JJYSURn64AtMDnrM5JvvE8G1Dq7F5tjQCj8vBBdqNL2tXuK3w9rCKA1duEDYJ",
  "key5": "2359LnbbouAhAZNbvMRxaoZ2Hp7TZ73vKzyq9XGtympn1em5mrEP7sH1M4RU3m2LEYeMg7CiikcYpxKFtcUhygSb",
  "key6": "2hgZAJ7wVc363iwWpsKcpSffQZJZCVjjfBoYpbQeNp9ZTU55fwNtjq1ZEFYAq8DQqeJbRivk1LLrXLf2XMjPMGC3",
  "key7": "39DobZ154tnBnC76Eqtd5d3j9RVhKHCr9ooa58tKp1TUBbzruYS47HTbsagTVdNZ436zQrSMbsYufzqwj3RNRRK7",
  "key8": "4JcaQgRnMjULvqqSbKg1okDHTZGW38Mgf8LfqDS78EtTLFi87XB3iy5HmQAViJxgZh5LBjjMzvceY8rgp2todqub",
  "key9": "5qUjDVpfBbz8nJrKvyCuqLfLYzMPVpwqJFoTpXRCZvkRBUqMG4TZ2fySvekQAZYtKjm5Uqd2hsUmvdzQhVuAFssw",
  "key10": "3rhcrdfAF6eGFmwcxa3KsSdbbwYcwVPizmbbmTN2NCgHWhaQ8im46GoMT8enMK5YPpKQmHckTfMnt8FgKsYcMoab",
  "key11": "GZrEsfbRF92iH5EttUzjvHLuGEtRwkEFJgoTGnztqXFCjXnLQCfJ2BHSq6bLLnHbHxzF37znVWuPKuuQV6MxTkQ",
  "key12": "59ZNfbriY11bRDTYYgwWGshHHiLcymYRarsVNoXz7No5MhRRJcMCcLWVHecgoiV2RNbVYqcWUfuqRNvbBWeWFvQB",
  "key13": "3J6pHBxCEr6KrhxXCRFHZpczFZrBBp1gDRwwALJ65GahA5FPcMUq6gXSNfp9CELooA1iceveU73oG6H4RVyQCTVi",
  "key14": "5WTuxXt64ELXDRUrn91BxLjxLRYjsn3fTfpWZKcZxk5sct4wTxJxjwB3T3Af6guQehACJKJDDLH9HVasDyDFzwQQ",
  "key15": "3DwcYjVqQ273zuS14eMna4r8FJGJ1n2DEcB9v1UKt8x7seyZP46jDViofMNGnEzsNkKfD3YrdiGAZoy1QRJEvVCL",
  "key16": "41KFQuUEzJ3fmSeDknPsnsfeD3rJ2GFG7zA3cbY1VadW7SRV8F5Vg1BBgshNQefZ6ZeTfKkFg73HUY7bZjM1ti44",
  "key17": "3HGjbjwZwa59jdxXkGKaAKzkZu2gHdVf5cNEiNnZYky3TgbvQjfj4LuQnENG7tEFsQCD7xgP6U5BnpspXt96kvd5",
  "key18": "2VgFNoXiaCPUxha2NHSMzVivUaFLFPLRYvtYtT6WKYigzBahSnUBejpWQuePnmqs5iZymyxqHDMVGGRqwvb7KhrQ",
  "key19": "5nyCvwyvFdKzJDzkDMobKYxkBVW6eq4rQNC4m43Tsu46DgCMggtHeW74fVEGuAF1ZCEjP1NPRwz5EgqAARg7gQSU",
  "key20": "5hrRNW8pcfcSu5zZSVbtvtrQF44PoCAfxsi24mNcBbBSYki7tKrofAXHrPVEGrZzdJCNj2w4wN38csTL7JEPhz92",
  "key21": "57Pob4sx8LyfbBpNGyZVjEycPyB4u4xFL4nmdqt7PhaezZA2hs8KHjcznVuio2J7zkG53fhAC8rZvc6GhZ35BKSK",
  "key22": "dSBekqvwr9VvZDDYrcjtFZT8rnh5LAFNppdHDgyDAGQthXBLejsXVWQTySvNMY3owGr4UGzqq9ikdW6iXJwLE9d",
  "key23": "N8gL9urua6NaQE9Ec3jskxWeNoMc2brjVt7SmTf71XmsgadZD1BgCizxRyUsFkMP6qg6CLbsZii7HPWd82ypi69",
  "key24": "3Ju2q47En1ouFe9k1MH4gsQndRi9kPbS4cSY6JRuhuswGcqxEbfnTFrDDMDSSpRqWuyxThrD2qyvLUwudyDBPMEi",
  "key25": "4WABcCwajhZ8BkxNKVLVFebsQbcBk2CAZnuiVX2o3pYaQ5YVKbLJEZrpT7FrqoPuUnN7FmU3LvwRPR7eg3yhCKsP",
  "key26": "2m5qf1BRbsKUuDqFkh1AvkdYLNjKQLzedavUuqM3czzeVsY9wPHSPrLvSBSH7XYU1xXYRKFe1qeJv7WkLfCdhzj2",
  "key27": "5NyFfUDjbV1mRpZyA6bQRMbTsbEiW6sVQ6pGzpiGG5DFo1ywx3XnEUyMzjQAcsUcqRKwL9uJPd8zAtASuzgw7Skc",
  "key28": "43t2AF4UzaWpLC4uYcWXYsHMugVSNbu8BSe2pwQFeYfpdRDcWi8VsmLv9M1LBsVqeXF53ikHTbmuZNPQ9umuWuML",
  "key29": "5MZMv33ufiYKeo2eSdQ5Lb6wmGMCVKZ8BBhHwfYgwxDx1vAZMmLAPXfSgUtJv9MwBtDGnUwUr4azQF27d4jg7T8G",
  "key30": "YzinUF7LJgYyzg6sweXxYPA1So9akQsHT4uxohgwdBHCBrdqCSPMJnsq66mUVqLfx8WxKKSb8jXEdHQE9fT1e7t",
  "key31": "TjNPidkxmDnRvCtxQRN3jbcHJrsCokjgYf2i3MueSrev6wsR9LnBUPio6ZVj1tAKCYSbuMe3HaUYsRvV5GMzsBk",
  "key32": "5K8UccudDBZqXajsPFnpKPWLkKXY69PRvouE7FBgLvc5Tguueb414fuEUwA345p8DgS3qHKQDTCTaVud8GN9pEv8",
  "key33": "3PVrSnGvTsoTzbZKUw7juu4XSoYj83ASTt2vEJ1xqEDHUwkxyPHUJoLpetVkrue3LEjHrqvyuKKNGqd3HwyhjW48",
  "key34": "5QM8NzduLkhyRz5QoyzJhT5ygxRYviFWbHhbew9cjUxwpahxxqF1SMrrsNdjCzrmWNYQ1RcESbbRPspj4EvGhsHN",
  "key35": "fPaRvdp7UzzkRfgwtMXbzHc1dmuTc1MiyJxoy2SbnBZ4FH34Cv4Nxyj7RhQdkzkBWo61DWFvi52oAboL99LpVzM",
  "key36": "5XZP3JuFUWEwsESiUSQzpopbGPP2qWmKb8xesakfNnyBhi4zosUgveJ1YwaM4DvPM4zyozb8yQaSdXdsEjGSsySZ"
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
