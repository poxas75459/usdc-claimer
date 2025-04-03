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
    "37C3cxAP9u1PZKE9Pj2CZA5MHcv6LjrCeCimuNhDK6AX6byhopuvBvEHbtXSF8BgiGsF16RKYsavRW2WqNF8vQ7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bcVTjnX3mKCCxDqduSwRoJc3azL34VYnXA7FfRL3yqwkhTTXrmi3iFj6VgBYW2zqU1va9fjd5iDznm4dJSXsxnn",
  "key1": "2aycxJSeFYfkKUbvHnLpE83UgscLxTDxDY3kD6hVJAYLGkKYqyUT2ztE6zUp7REKrSypnxYqa2Va9qreQs6bxEpn",
  "key2": "4YNbuhyYqyNJnqpRfYYgavRPuosWBzspBNC8u2huXDsZRbF2LzD7kwbu9dCzWkwKDrU5cRWpiiMVcNfSTZDa5kLK",
  "key3": "3xgpxifckkJwnWMxQ6EQavkaULGiyVgLEoqiHSxsGzCHk3nc91ohuYcEUcRc23BL5UxQhJyyMfWdS1mChoHYcTjk",
  "key4": "2weA5cUJ3Nv2yqoRkyuhoj9KorYwNURZDbVuVXkCAvN3dQ37DDzyCtRfPf3XRDueKMihvhQ8QA4gbVuemm138dXv",
  "key5": "2JcJWkENYU7SzBZrKbYq2zw54DUvnioUuqA2qMBdhZVBPUj9hYqHMRfJomFtmYJ7rAe6RqMDSeqVbjjT9Q2S8jzK",
  "key6": "SQ6WZjirPG3EL6ksVWvwBsYCenZEUPZwAWUy5g8YFxNA3ZcnLqmhq4ty7N5tHtMkLp77XK16BPqd4CH5YueFk8X",
  "key7": "4ii4ATPeSgWp8MfzY2amUJvpksqc1zKZg7WcURy4Rx1jWRrajd1tCzjZhuExBCTimt697ZWRz5eckgjR7X6sZey",
  "key8": "2TWS3xxN3svr2ZxcrtJJaH9jWvwpm1gycvLLQFac8qougpKb42jJ3kXADZH1jCFCNFzzEgcrxMKr4shAPVoQb5pt",
  "key9": "2qtZXJ76ZAFCBZyXZAZT3Aq7q5m4tcxH3E6huWQkdyWXsFrEwPrAS1DorSKN3gTdBmUFS8z8n7Cdt87y3Dk63d79",
  "key10": "5JqkV6xtZcYNWVhMQzqm1LGyVXQdD78JMHpgDZqNhua6uAeEuepRNZ7xbkfPPgRmpk6zz4eidHYrNqR4uUW81CaG",
  "key11": "BUtzsPowRFBPNrKFbXqjkaKroTNbZorRjH5vuCUKj7rkjeMiQ3vLXFSTjXnvU4P1JT8481djAJCDtiAT23GvrcC",
  "key12": "2HWStKmAVx5E2HfbdkEpySR3aQHr4p1iAYq1YARYSiLkQmgZhBDUhtg3EsNQe2Qju1KqK7ewJdKqUzNLcBZZfXAv",
  "key13": "TxAvfq4UeMSwT3TQLwvLo1SfoZ6kmgY6RkRPDy5a7mZXY8HYJoCLHbj3QMYWHtqTrcgbskb5umpsz5xTZmvbtMX",
  "key14": "5tieBbEWHAfzWzd9RTxq8U5rzsvMnaLpyMe64AHapY1rNWGtRu5UoEXUGxsb27KMy7nrpWVeUm1cv7CfmBXhjWZ9",
  "key15": "3ETu9LmncBKk5YDgcQBGdkb3ahwXqTCdvuPQ2w3xjkuZjvXT3kaCHQFowuPqzUU5E4MqAedcU4hYG1GjydeM2dB3",
  "key16": "3CZoSkw31Mp8WMZnjD5xGesDpG3cpduP1u3fguLAi5bUWfuTzPgTrr7C1NXwtEWMhuijxwXgJcTHtTPJZzyKQDbm",
  "key17": "677DSTRVzgzQohC8tCHD6QNxoNCZ3Ty2LzH8PB6Dr44r8KsmJ3pvh75NZcGdDaiJAuRb95EMbXSgHZATaLXZP5jX",
  "key18": "3RfxZHkSruVqEiX9ZF3W5nCe32WWpKjV6agMosdvvsQcnDUbjy1vvCoiJKPSfzU5B2qWpobZoH9krmYnzTdDzM9t",
  "key19": "3pVyoLAXSW4Nx5zakwbYR7jjFMU5pmTtyRTDrmBvtb4KJwgDxrq3qd7re2BCM21fXVsFh93QCH4yEmtvwAyGWeCL",
  "key20": "4SKeh3keowKj7Uk6hMJPHbVtdrqKMkxTJkCunsdCQ3zPfRrXTnyta6JJBhLMF7JDc23JUNcygwjmzCbHWzf3xTrY",
  "key21": "3vdaJSdG4GfKZx7cWoQ58ApWxxxU2HJDvGGue6wCz87u4tR5RjpJPNZuwFArNWibpZYLTnYURuZNu7aFMtSQ4NVy",
  "key22": "2mh4yxtNKKcZ66Ktt5qsPhbk4vT8WcjzMWixLUPCRfrLYzNqN1T5QWyFR3dWUo2fRUCuy7novzRosbmhs9CwYaZ4",
  "key23": "5NB6rFUpEuD95nFGwNKJ5rvbw4C8mEHZhf597N62Eiayi4Q1emHeQaVv3G44sMZFL9zDDDV7aif2AfFEALGgvNYy",
  "key24": "4pEoggsmukyoW24yG2rjazYLaDS8tJJLyST6fWbdAmztoPrJrcudyfei2Bt7bqKmj71BPpXMj2ybUFFzpAniJfBS",
  "key25": "3tdw3TuLPeNTSWNcLNujMHbTcLRaysBhYduV91m67bAdK9nTS3ZDpZwLosQV1i8zYRss3CW5Th2Qy8F6C2ibQbZi",
  "key26": "5V6uE2HHLYxYgA8NTJnbxzBwF6YJ7utxKzGpkMMd7QmmgFKpEudbHGVKsyX6TPMeq8mjH6nqfEWmEHp4J5xBox4J",
  "key27": "42vt9YrjQDz4jbYkYRpHwTi2iTU79Z4RPwXuRAU7t94egMUxi9pJr8QXfGmmpa64rqZh9kusjV5sgHhdBSKqD1yV",
  "key28": "WK6WSrkTo7QQLo7evrC7oGkEqJ5wY3eJz4Pz8cifY9xWP98uscCPWw8JVsa8DiowjW75KFWHkCY7GveMThqLFTA",
  "key29": "3ZwNErpRSZPc8VGrMrT7A6N3MAgs2mHHMqoMj4wzyaLprNJUGGu4jXmkJcqAKBgHEZcN2Zn9gYWYBBBsD7KKfRkg",
  "key30": "5G64ooaqFDi21z1jafmyTHNNdcvSbF6GafBJcF9SkAK71cHjhg16RQxg6qAr91D8pDTyixykop3AWstfMaaBEN4q",
  "key31": "3vJ1oi2ipbzgPNT9767fdXRew4EpYy7wiJFRyZBB3CmJzKAfE2MCnQurvY5nwBbMHYznvh8fr7WgxCSHpLLC21Bd",
  "key32": "4oPhFgLgXNVqVYDXXHWDtSVbjPwd2oy11GPYyEmDQxfLw4TzMuwCwdYaax5TLZow44LkqHBJ79VkFNujMApknq2a",
  "key33": "4MeCnoR2tVpqEzjnUZnsT4bSV629xwjwrrbEEhsnneB9urib5n7K6it45Mxq8wtJ5L5geF3819q74cinwK5HhdNP",
  "key34": "51DU48951RF2rcvpR7rDsPhVpJJR1yXLNzscmVsYnwyFk3mCTTHRVnZSGvKFPsrHn2yqxHhN1VYjc1A5ojNpPvbH",
  "key35": "RMCguiJv9KBUhNwS3DxgXVSMMuqsidyYMmqXPSwNjLphntKwEcw67cGUyNNYaiJhoBm74dGkmE2or2v6SV3pogD",
  "key36": "4VUqkDNEcxVSfK4JsAw3VbrEc6fvXm6nRYb96kbamCh42z32BjwkttsUd8nnEA5MrKMuU1rJgv7jddrqeL1wF3eL",
  "key37": "Un4N5f72TsUH9TEaKz5HkBoh5MvLAAjfSzoGwcnbowqY2y5t1eBAbFLtNksttqwrSeMU8bKToDsXVVEJdgwU1AR",
  "key38": "fVsJfEyrDqnxoufeXGayNkZk66kEsW41nSNWpu8DgCpdjXhGNfyPSvMwAaxqaAUb8UCa6nE1kVAxNdjYz3zEqqJ",
  "key39": "4tbGQstEGcby8juuYXB9gijGpqNgsZqEZJBUxP8hbg8qRZGshsi3CuPc4K3s92QWvwGoMqSrKHm1CzsAL8LieJHv",
  "key40": "4WFAgygSGo5Evhnf6R2FsdHfutj6SddoPSppyMT4GMx1Twbj1UtgApkqe4EpUMMJfxLMkrLAqN7EuKL49amnrr67",
  "key41": "4ZJUZouEGwEnT7XASobbqffS6x22s3UFhYfisKhEqE15ms9k5MR5k3dMsDHYL8vnQjpK9AZGMwpkxqnaRNARpdxt",
  "key42": "2FCaDwhkqJZU92kpRQrj2mfcUeAKwkQC5ej4FBTcatGxoqQCJVyHzhjmvMWSpmdb1zuTvU6nhfmHmsqmiA8bnjZG",
  "key43": "2g73xz7dFPeKVsp3gZXCrGRqqz5zVLbHUJSg4RMinpBsNNDrMByC5hp2FcTkB4eFJKL91CLcxVYerExEBioWvmPE",
  "key44": "35gSxkYKUSo6D19JtfxSxPB4ZS3cFBfXUJwetjqU9zNHtsnRC2CZTLdSG5KPKU1bh7vamyJKNq41ny4Dgk7sGKQv",
  "key45": "ttxD3oXuKhhfa5RKDaJqcbitWPCsiBFRu59sanxbhuYnqKpdT4Ux7wEP6hFw92yP3VTJg3yYhFqAH85Qs1q2Xwi",
  "key46": "3k6Jkcxui1oqmZTKMQdKp9UJGMqY1CaHjVuh9ypTKZ8K9Dfu9x8qx3nqhN4ywNNCPnWAwSy8ZdZjNJYDgywSX8Fh",
  "key47": "4SyLVZ5SbnCXRmuher8L2LvANfZjPVzLx7eZFyEHA2SwX2sM6FykQrBJDcpRPYoWW3Vy6YZCixgJu4XZt45ZPN16",
  "key48": "2QjnoDZaYJM4Dgj7EyPdDtG4kaAo5mxAXgKALzY3WpE2fhkFq1yNN9MVwUDRM9HPSQpni6xW9berojA5a1msFVJ7"
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
