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
    "2chMWedUKMuB5LaWT81hrxkSPSc7Pa2GW5hRaU9TeM7urAa3aURBCPhAd8RQXCH7KF8edr3D73vR927kFnrnuhza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u1NRy6WBq4GTWtMKxU4CxBVaz7fWR9UGR7VkuozDAxSAcBkBUxcmcbSrpquer2pgsJyrotneAtKLdQ9PkZGzVeC",
  "key1": "ZJbYbqVcGt4Qab7gXZQm9nU13Ga4iGczR1b7ziL5zQoeorekWgAH2d6cdU1Legj7oowQYHfdzu4dshtEsxAJrzU",
  "key2": "3LdyqpZx5ahzEaTbqfUsazLk5Ax6BQcdhR4vRUVxuu5xyphnmyrfPJ84i9Gd31P3Ax4yTPtJNyR7C7GSm3euFsqD",
  "key3": "4zuzYzFLhGBmogdvN95YxGqVmLNPWiaCkELBSNtqEFGQMi3EZJu1K7Q5BoFzL2gfVCrULzC1aNzxo6VUmqnqrRSU",
  "key4": "WsDM4Y6JcXb85wEMEXKAkt5gksXorDPJqYmhrLa43WfPd8LyrWVoTKNTEGJwV9QqoXP61gBkRP99ScHdLbpVWzq",
  "key5": "2ERAAy8mvs1MT99RC15PcrqTk1B8dYtXiaFfUqPVhv7UzTkrF1STYk1QSeNTtNQiRGho2Pef4cdSMf5G8gAd76Dw",
  "key6": "5JgyLwipv7P5ukRTvmyQ45TNZ4ihK8rpkjauL4wTceXJKXzn2xdYRYgL3eRcPnF5iPaVGZv7129ejevkvN4C2JXc",
  "key7": "5RULSWP7yJKFcUpkavjXnELSTsnWA8xu7CsfaSmev1xT2FY5M7tXwYNzBYZrV8sMyahmKyEc4ty1eFKFPAnSSsZH",
  "key8": "37qGnwSKxQhH3Wm5pfm64YSTYgc6Bk1FD9WwhFpATV87Ze9AbYtEEnfipewkuyDCWBXHS37jVhuWqUQxEMQzzhfg",
  "key9": "2MrbpijYfdh9TKwK9ScU5UckSqxVH8JhMGBhhABGM14Kpoo3WmYssUv7uwmP41LSw8efmHXjLY937vJVSbBmVreR",
  "key10": "31hVN3RLacpFBpNGRoUbpcPKfV2YuBG4R68mu4af2YQvUaqK6ULUZPgpZ3EVXqBJJqLU51MjNjZcDCU4e8fbboB5",
  "key11": "2GTZszVhz2kP7ELy1y2f4VxRqj8AZCrz4tWhWy9fJVjg2tRkQYkWgWahwUebM3NbttUishj3WcvjNLTk6pJx47va",
  "key12": "52eC14yV5ocNcHkQGrhDRodGM58fq1qNcbqSQtRL3ev3ft476ibQjgJyqEXTQQaTZxuDbdYm4bhjgjikdPXKT8i3",
  "key13": "KG6ocLbSaW9hnYN1wy9vpkbdUkuKKfQpQppwbmkPhf41ux1vkoi5i6U1vBdJU8fz9uoivwyEnoBbqxF5XKW3gLF",
  "key14": "5a3nT9H6PKVyBmYWAPqnWvV7pLEhdm1hq37n377kKJiEqHFhqpSp8ewmw1553VGmuErMpkj4ho2u1Fx2V9tn4uGN",
  "key15": "3b3nNGRLsd8RtmboseX5ZLCvCkKE7X3nKCWwjJ6QXfamGky5Bhhv8mg2cMBrDM8LNKhzdqUPVgB3RazhwuTUSw9g",
  "key16": "3fSjE2A9NcjFm8V3QT9HGSa8PY3suJDJXVd7pVMrau1zBFhqXF6rhYi84DG646uDwcVdw95Y94jq1fXyuZctpNV1",
  "key17": "4SNYXnDFJNeXVRio8Jv5uCCgTFAtFGS2YkBkd5rpZjib83k8bE89aGWeXfoNBzWMhPp4cQh8rAr7y4ivPcayMvQz",
  "key18": "5t6op59HxoVbZxq5yjdMBALqNRLk1HGnFcKQiSrMiCvvvfNXo7E3UTQMhQWRkWWzz2A5c2he6BRw6GvncUW8sGfP",
  "key19": "2qDfg7PKtBA7Stv8wxpAEV15e4HUygFBdWkKes9h6ectx2cMPH9hHd6WYKx7zQ3dZuX7Gba2XbmoQ641Lfwak3hw",
  "key20": "5Jk1Q5YtfH62YgLmVrSTxdixrEcdYUuEMGwaFS42UFKLEiddSqoYswWgZrmpmz8kzkCXFLEHoHe19r5NnVtZob2f",
  "key21": "3zWTGzwrqe9eLyXtQnUacon3NZQ6SnraYsVYaZYo5LRVsxyXNr6hWCVniVhJPSUhtCoSq8Mk4J4yYiRHAZgewebC",
  "key22": "27sv5yZSiHk1gkgLtoZdpAJbwMTA5bSbhpFfx8RN7LZsKkFwRVjEi74fAvM17da1TRtmNSyhd6F26JS1Bppz86Bb",
  "key23": "42Kp3B91fDG1Papm2zLChHe3sDqTnH3zn8PyQzadZS44uKQF3ANCf1RFDXz2ykmt2KVFqWx2xGtoM6VW6N6azVxo",
  "key24": "53kGZ7dpGPD18FL4H1PUckSo17LP4z9KTVjKRKAAAM5wus9W64YvgencJcXrA4NiuKwoMA5Bw5zgQhmbDCTWANJh",
  "key25": "4HTQosNYJdu2HDiEoSwCnFs6bnkN5TYHUdgRmxHP51NCzgEoagEg4AznXNhjWWwhUsuypD2EwtbTqovHVUqM7bBK",
  "key26": "5auNz6UmzwweGRFhnxRq15smGDwiHwycmmuJtoNm6bcq2UacomGy9y9Yg7zt5bwpLutBgu7teYXJsDa7M7ppKMbL",
  "key27": "4o7RJY4AuioLBxPcoU5PCc4WqS6JoaLKLfm8m9hDfUSv5zma25bX94uKxednnpj9jz6odtcJhp3GvrfUuWfAF29K",
  "key28": "26JEifedeisCNwtgdQK7A6YDdGrRmJNmPfEW1QPr6MJYBt1uGTaeBVzqc735aHoj6UuoXhjyh27XJDx57vWeEbpD",
  "key29": "3fqG2UNuQoBSQFQ3kB1FXKt7F8ptAQkoiax8vNarFtAQe9rpdLSheDmfkWHadFVhjAZQYAaU8rWHZz43WqKVMEKx",
  "key30": "4XWpAF6wBXe4hjVJwFRvijr8cDYHzXQRkh4NcSK8VyN8vkKkCkhLHguQZrgBjycrsijNEMWp6gr7KN2zg8LmbMiN"
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
