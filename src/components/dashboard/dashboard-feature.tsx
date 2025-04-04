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
    "5qoqpXpBwrzUrRKTVDoRnmw4YeWTR2NeozRSaGwhE5TYksNcFWf3N6NQXmjMb5i2G9xWPAQZxtXhpAFQwpdfE272"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vAtxdz4o287FfWawtRC3m9E1ExvdfneUSyiULKJHHr3foDY9cV8DaqBA9LfsJSq83gfrLgRfYSpZWNHqMoowNXj",
  "key1": "2mcvNRWKFSzwnkEdXhUNH9McfUc7JozdnVrrrV5Jq25mJeTgxsyyYDhwg37igsBQscszsUkLUaWy89pCY2ypBoPx",
  "key2": "2HGE1NQAg5xGroJLiPA3XBVT2Q3Gw88s5TUfvT6HdbSySM651xSqU53JpcQWudKcDv6yNejgbyzo7GgFaQocfMdG",
  "key3": "3LvvDca9DKiCyEN51EAxiXyDKmY26fCpPSU33MQ5MN9WzRt45kaL9PPWHDps7SbhQ2u2QhiMF76GCSTxywsxQr8Q",
  "key4": "nU3vFuW8ib2pikDSLPZG8tDvHjhW68BM5wtf9x2ZDhErKoPEoZXThpjgynNcNBepUvnmptnskxrApPAViYUoehF",
  "key5": "3fNYcTa8sho6Vmdp6eWasxP8KB2QvUg2jgs8td13xJcLDnX3pdmTZsg86R4u1zmPFnTHSbcwWkqFbmgcJ8pbuQrp",
  "key6": "3jEWGmXLu2ti8ChVui371wScvBsqpQCMN4itoDksouCSnnyva5mRVP8isnPsEDPWfnPwts6uDFBNhro6gMvrFrAF",
  "key7": "gRokvtpGAcVijLevN5iBh6unGqqWYS163xfA2mtvLYV4fPraiFEKb4ErS14Bjs6aFt3M8CCsLj4MFoRbiR4nrQQ",
  "key8": "3WJmYjuRjLUahpP1xYu4BLZAvUP2zNf6xqHbpWQ4yKqrL1EUahcipGwR2bdos6bkqVUUx2JNFsXnsyhpQfh5Qe9u",
  "key9": "352L9uXhGeRDTrmZGkwovUr7nnT8An7QVmFdQWekbFoL27WNd9X2zBSpdDUWY9Rw7PVWbhUg4qBf6CEXhBunpqmm",
  "key10": "pViQXrgxZ3vccVWFETRHujPcsnboDyMsBJbxrnixeg5u61rqwU8545Nxw2iQbbHyAxvXSCp2TfGd6ranBBxWAA7",
  "key11": "5MLvyce7knucwnDQ1acuJXLsXGccuTZSUSK2nCphSmNysq4itz3XunUrGq8BrSeuC4ZdR7fXb3tsCy7u2tVUZgtR",
  "key12": "5HXGJHvyqtnb7aNHgqvaEcMNKc1C6PhqaPhZx96GRn7XDDA1xfmo4ZMMDXpiaaFdPZSRv8EhSud43kLxkDyu4Di4",
  "key13": "3DiX3ZLMKWF27DEuMvUUL72RnFeqd1tR2myezmzzFxw1JRvz7FvsVcrDN27ULpj3Nhj4CA9RMKwfLeFXh94GpWZp",
  "key14": "2c5c5EwghKvisepeyDhrKQ6oQ8vqL45NgP1qiYtMn7uSPAJEotEH3cMX4n9GX7t1vvZka5umK5rB5be2UacHQJFX",
  "key15": "28dfbkgK5kGKqj9tEhH4zfCCzKuTCL4r5JqHmAxAsJRAA2Sg6qeZGgEn4om7mbMRpmVX4qFkvCuKstmfVrZsr1rc",
  "key16": "3W88dP3P6erVT1Wisjb1SHFFaDcW1X3T51FSsoFfXtUCyiH2PaaJmb5AzUgHhWwtPgr6FpZnm66RLxhrWmX4puom",
  "key17": "5U314ezWiZWgNX6vBv9R1HfnaKTVgVRM3QJwSK5R7MJW7FwSct22yRbzTxqJLtLo22ARv88dUuJoXUGcmAsadNGu",
  "key18": "4UFDAuKQcU2x5t7bTvps2NY3MCNPwieA9qSSYjmEkiQ9WZmCQKxzDsGkgU2UE3tqB5h8YnZoWpeeiwxWyTL3crkn",
  "key19": "5RP8DbBjac3qLukXAB5iLVh1YQuKT5bAep71HisRv5GxaW94YCQJcaAwBi2p1KT5ECD3UKg38sJXhEHqAMSDR8Ft",
  "key20": "4mwP7ootjjJraCLKAEUV33WVLzvdyjA9SQ2cFnVd84i2aHQXWRBBVz7KmHoL9ExLshyPcDetR15BA3zSCSXFfvwP",
  "key21": "48mvYsUeJ3M45v7UpcwZS7GLfSoYvXmfWK5ZDZDLEciKRabfm3iRL1PyeaNzSVi3nHEbCHtkLZuotAVp2mbkoRn",
  "key22": "2LJFZw6r9Mj74ZLfz74RLDywHatMrADW7MuMh3F6z8Uf7p5xo1Mn6o8CwX4iw9ocMtXQh2afK8d8MTJMmtuMiM2R",
  "key23": "5fmZWJ3Y6YYgR4z7EZnesKqEAQVZn7xsArRQufT3TC4Cpmf4njs2G5tumkXq6BPbypxyT8oHRrvk1JgA7nLBDdXa",
  "key24": "5CDoSJhdvYHhqPN4vUWZPhGs7dU3skVsztkWHkqk2NVj4NBZW3ac13oCvfWRmcmaCsFmMvzyeGczbbwJD5SZq7if",
  "key25": "54og1zXELti4aZ6PqBgY3K2tyotNRHyWnAPvvnqt9TFXi1hT5Xj4yWjLMaZ2yWK5R1jgpbFZ6NctYq4gYGYadDVJ",
  "key26": "3GtW5rwip62yU4N9N3ZBDk7WLBvmYtvXrGddj9PDEeEnFeStnxZkWDB4pAow2EZiwMFbeUtfM2hcKvADRkFRCZcz",
  "key27": "4xgLxEWouyCj8jt1Fux7aKRQNRTuffwaTzvQsxCf2hLUPLSLryUiYhPXiDcceLwmkNssZL5c228rujbj8Q6s55kM",
  "key28": "5Mq9iLuxe1kQoxjEY5VwDBSb9y1uoyQXuWqzKRTSujuyJ3ZfS7YXEFF9wYqV2vjD134fQ6kGQq4U3MrsYuKgEb1T",
  "key29": "5tXoFLML4wiNXvTS1PfRDyQbUoJPcX4Nj44v8xEKdGDxfWCJRqEChs6MF7axpK4tDrAC97tnSNWNCwtzDerNEqtu",
  "key30": "5KcqNpvRfHYpyZ4aLRMzgNUnyzyavVQQRgq7fo5kj9d1eTDhvdYa8DC3XSZ5vaM3o316afMvrRqAmjPhrAtnaSLh",
  "key31": "5AzEMLuFj2o41dGH4vHRwP7DV9gZ5gmv9ovVpJ7QPLc9GNpPP5NSqtCzwi3Dwvn8h27cGFcBv3zWbUwjkQhm1cVr"
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
