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
    "2fELiKzpWfVt6EV6mCPr3Qcqg6gkC2j21rauzAmjTwGiZYjQf1zzPEVHgYrHW3xz24TopHyqZfPJJPHiArRtoqbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YNEgMFLdwtFhH145TbuRH4wqvW2vr4HXynJ2UrwcxQb4FLMgEaC6oRgW25AxGijb9cTpT3Kdz1MA1hPvow2s3gr",
  "key1": "gVFFB23QHR1V4tjjUXizW4k2SDjXbRPXbz4JDJNcYjzJGkngxCa2zCAnNeYnZQmEKYm7ywDogvBDCyNrSECqSdF",
  "key2": "3Z1Tg1Hh1gZ7rQ25Snt5x97MBbDWzyDR2bv9ritf5DHu2bqSmpPpxVJ36j7BEorodJWNUeGunPdE21He8Lntwp9V",
  "key3": "5jrWopb3y2Vu3guJ2g8oH4UZNEEcDHXjNypxPa8h1V7NciHzaNEQ5HCaycDxL65p7gwqHi68woNmj7Ry1qbaP6Xq",
  "key4": "5PiSRBdQo4Ke3U4tkfxGgjwrNTyArWpVcfCBThYvzoqCFkAFzVXsHnmZ4AzYMwD2w49pBvUbJ6AzWrBNEjszxp9J",
  "key5": "4WtCZZmtfkxB2g7j3hVtVw5EmQnViZ8EwgBu445eMwKLnp1wvaWboHYkf5xugELM6KEpaaxAULhv8qMyGRKcSaPi",
  "key6": "5nUshdVcEbJkFegEeLAyR41SPDduZWrZxvy1WYf7r3D6Ffdudg6HHHzYXmAp7kr1KUGDy792e3vry4gojDZXqf9R",
  "key7": "271F8cpgTMYhQuj3vnocMLH7tiXrtbTnc4NrrTp2i5C1vkJS63wZZUVhhNh39ux3WwyY2UhqmuD9SGunq64pChmM",
  "key8": "5zLuuk1eTmej2BTnTFYBqNTxwCcwgrtmtXF4QgZBvM3t4ZHHA42oFEJKYZtEuEULoZSgmedrqZ1nSDH2D6AgvWaJ",
  "key9": "66PoS3drfb89Dgp9GjMLW7BNhdWJEd4YDpTNgLTdbSvwpQFVTqFyQUVA71cmVqT263C9A16qfwsREDeuUxJKmpHi",
  "key10": "37YekjQ2A8yXWHuXSkr5xwBxpdw26PfGhSWXQrJiBvX5BXDpP6A3beVopWhDb2HAdL8JSR3kwT8qeJUfGdCjbXKH",
  "key11": "5ojUEYULfKLcry956xjjkXWPqomLSEok9arQ71BpD7wfkbTYJTWo38dyz78zH8LVhpkVsFcTDxQ9CEuFPhkqdBM7",
  "key12": "24krYHcD4WnddvZM5hvsinp44ifmo9JPpyhisLKwX7HnZ4xbU34v5Ginghw9aELAABy8v9N9vs46tsvdPZT3XPAB",
  "key13": "4Ysy42rTLDUU6eo8rujdVyAvvPd8QxxR3CqdhiU38GbQVKR3xdKaQmTWEmMeNgCc5bAEbok2Lxk7UFnd6JCDtz83",
  "key14": "5kbWh3Gs81XC7Q5Zu6jJm1W9XcKhUn7Kbu1zF2u4TRsBC3M5uL45TdYgSZuASRBLqao7maK7Q2uPNC7KLzKdqSBD",
  "key15": "5FpmBiN9jdfqA1C55PU6vVKUbaEZCoCUdmuTQB61ULDxiJZ1HENLBDtthzsRk2Z2TV3yYcKQ7ExSUjRiqxK16ftu",
  "key16": "4Jd2RkZwAWJNQq8KFn4pNp68oUatf8Y8sXEwUohkbpMFszKWwGvZXsV3n53155TbW7PHdqVfTHFmHF4WvPwb8cLT",
  "key17": "658DEuuUqHTTukSTdhEoDX3gHDKrVcLaKKQmaHhqW75vsedabNh85AwsZ6Ug1C6AjXmirAqf86mnryf3Ufm7wzaS",
  "key18": "2bJNtX1UDYiZDeDxzRo3Np9X9S5K5Qbryv2uHfz2LEYTtWXakJDvF5J9gvtQLNfki6ZrVAmuS77GkXwzSKtQJHh2",
  "key19": "3qFxDvzhvNSPTYp6RJVm4CaFUvRUSZJrULd9ikU4axPLWcbaaNSafDn7KxA4avCBWJQvQbQXU4iS4AsbXRHTMvPu",
  "key20": "5gN9Kiv8khrYrPFufKiWQY9UGpD2GodLTMkLT4QaATSXNKNB3sN7VsR3ZM7jWm6dhDxL5FMQKGkAJcHZqSTEmRZH",
  "key21": "5UKwyi8D8ZhvomLF6y411Uw29C2jHqYJynzRyQBuA37q1YBqWyynZiYezXYHWk3B2vCsfrZfErZse2PzWYFTRAWs",
  "key22": "ke2e1DviqU15dSyFf6LkSuAe4unnDAabf3831foYHthkW2BJxukYzHB2rAgByF9XDfG7YXPZmPnvijhG6C3SZTR",
  "key23": "3SywnTcBP6wTJLnMpoqJaYAeoXaq77a5HJStz3F1TYx4NScUB9F7VpFu46tnKC5JUcQxDrC2u2gody2wpJH3KHDX",
  "key24": "3qaCkLPRAbPqoz3p1QVWoVKi1MAjSGNNuQHn98veCnDXDn2CPidZvyzoEYQc5PwWb2Lb8XRbF9M83ddjCQ4PUy9b",
  "key25": "4voTeXfR2LwH8eLGwSLkVrkC7LnSHhw19hMaUx8BFzk7ePtmxxKgEtKg37vsZ3DiYGCjTYEFyP3hyuxCYXVMnakV",
  "key26": "4UAwvKSozNupVpZQ6UnCQ8aX5dm7NLZuzfXAb5779CnWb5uw13fNVh6jau7iXrzgNmGsGyXSdwmjQNArob46EHB6",
  "key27": "3SBrR8v12P1UftpU9aFVKsPTFH6saWjjzD8dVziNveQ6hjFhb1mFee7yfcYqKS8dcB2YGDnsnNhFVviojUKAFbLF",
  "key28": "2aoeLXQLNNuCfTzTooYbGMS3JTF4Z1S6ad9PxUexTphf1aLES4SGBpCSgVjAqPxh93rTApaSpxsgBHvvwmKoCox8",
  "key29": "2pqqUtd3agX4jStygWvywxk29UGnA9KwMfoj9XoFujenRFKjGR1tBiAcBesimJVyuSiWtZxB5Zdy3WNbxTFB6Az7",
  "key30": "415MMAjfRZRqvXTCnjQJwt76RreHwWTkye9HPR9EBfYnfHYGDJUGyh99MrteMfhc1YUSernJfsMcv6hjahP4GwQr",
  "key31": "KtDcaL2Jj47uniBxTBYhzAuKQMgV6ksqWhj62RuNX7NZzBjVQdEk4UJxr6N2b5z2wZNFYWWv3k9W79HXivpVVyA",
  "key32": "4UoYCufT9eaoph2jUEpYFYfQsYvgxJsG47SYKCSWQ3zF3M5EYZm7WQXABFtZYoz5xiZPxjC6hxXD8nGEgb2UaQNC",
  "key33": "3pGrHoJ5sYSBVmszjQzhVFVxbd2uTyyDuYSEJ5LgBFtLjbA354VMqU21ydFe5gqw31ivgU6N1rqQ5JsDPAELcFXT",
  "key34": "2HeWNX7K66urxLGZqUUnn8ncT5LdCvxRMD4AD7FBpgXNx8Tgr6asb5wEwb9t4AMFK6E8rRYv4G4VdYyRXFKNrmJk",
  "key35": "28zLD2cPoGuXn1y2nFuigDYapjxG8FahxkAbN67Vdey5FmHdfHimhjdPYqukLcM8C8PWHfocAueZuSLRM4Z2rb7d",
  "key36": "UTq4H4JaTPX8bCVAjtFp3iaaJrYjaTC3oNPQh3J2LYBqwumyztQzmuYTirReNKApV3faAHRoEjAXQZLfdcrWX1w",
  "key37": "5UAXZAAco6JtU1vWNKPEfcycu6q1KCfm9njX5mCYjrQu8mwujdU3dR3572BZVmmnpTW5xowGbiaKULh1RWyfkTA5",
  "key38": "5yA46NMYZjYxquoAoTJvx8xd9RNWNkEdGa4GMJvR1A7ePZQFehYkJF1dJFvsKguhXjSnQeVP2cNFXY4GD6vQJrnp",
  "key39": "2rZbq2FUp8euPwVeqgoFSKWaSDan6zmaeMFPkWgT4WENDACdULdt2yDEsBBSamjG7wAW1Uuy7f5Kmkuw5YkK61E5",
  "key40": "4qSUPFmMvxYLNizd6j58aUqSXfmCDWPqijBUvoXUiaHqCAf1irpDF9mcqqPEqoFwdR2w6uXoFfwN9KUfCTK7iyFX"
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
