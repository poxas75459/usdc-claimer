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
    "2wxgWrsF8ia8LCcrKywT4dtB95xhDutQ7khEBVV1FN79JgsMfAKf6gyaJMiCYyqaF3Dmu3My1A4h5TDmw8XvNVGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y3enDqfcGJ6o1bPg8fx8ymdG3EiLGwjUvd5DHyUo2QKVCx3nigzw4JL4CFgbCbDdGvJgMR2yJcyaKH1NQv3LByC",
  "key1": "SUKbfTkHeysgvwnHDHiSVXkFy68n6DGRdYNMLBP14zhUsfTnVJr5HaxguFAQaVV7zefbBHmHs3JeDevN7DTVbHp",
  "key2": "5DcS2Vgsrph2YRp6GSeZqWfvHH2GYeYcXJgJJGJFrf4sP7c37dWXhoxqpeok2ENREAW3ZpGYkf2dqNimRRsAXmoV",
  "key3": "4YMVPiEQ9eDbG1mZZ6w3URMs6V5sgEZ24NrBtHtPeeMArjV7fgQ4eE5DXjZKbUzUVZNkG2hbiaH4oBRxkk67EgcG",
  "key4": "2cvURumWhzxvXxssJYpecsrszQmhSzu5Vt2gndLnNQEFUHqnxTeiqZxV6KG1Yb1Nhz4NzHVqiRzAEGRxcaotvhxQ",
  "key5": "4r6ge4TdjVZ9x1szdygYcUPRoWPPyUsNYyr6FtaGbKmUos85w2WQBRo3rMwAUfbF2kMz8mPQwF1gZ19juR9pf4GQ",
  "key6": "5k6gvCUQKUw9r7iRvPQVHbZxDNK59ELwpJK256KzXPJy73iu1NpJRdrQtdG6ahGf8j87ALrwgRjFmZ6LVx5HPwZU",
  "key7": "2RXKDognJSyAoAJ6W64LwciF7eD2SfwPbEARy3wEoe353p9ewLCm2aQiGB28rDKGbNTxJAerJiZMCzG1JbtUeGSY",
  "key8": "4E7bdEkz4qmT3JQaVvbPgRnzbRVR4NWuDpaY1CWBJS5BLHAjcZ2ThYcMG34r8YgzxTvxE7m7fPa2dVh2UoENYTMa",
  "key9": "2eTrXvrxYPxSUWRigrK55gzphovBTvp9xwew7UPjSF3WpbTpmfLDuUhHkN6mF8MZakou8a4qKwpsfeFVuEGLVkpa",
  "key10": "44UmyhxfNFUSixTzhCuveveqcwCeFHXxdaNHPUHnMEZiHeCH4xbPDw1BUzJgqrxA5dtvcLEDSZwbvBENqjF14ovj",
  "key11": "4RzyaUERyzjxRA6yHCA6eAsnxavZMPJVaRvz22M4xm1LZcFUSaLTZUjwYRGr9mw5gyEtNYVNLch9t58uqBgDexgb",
  "key12": "4exppoy2H3Kwf7zsDP4AAaLeG9D4iBJyiyXuFsoSCsfW8zpCu5s641jsrBjsDc6zxyhuo7YBsECyrNnYVwV6r89z",
  "key13": "2T2HHeeGghMPGB9z5Wy2N4mADkh3ZcLq32PJt377Ku7Q6xhBuWaHkAwJcxT3MEN9hpnTsMou284XqNWbx315HxdR",
  "key14": "3WvAhwYS34UC819vPAg5ytzea3JnR5bUdxHWY5oMGZGna1pfi75wPy4KfcvDPze6TtWLYEqkUtrKRaGYicGCGaMf",
  "key15": "2sf74MkxEtWTWxReUHV8vgMF1CRmcqihZCxeGkNrK4w5rz7ZPjkw4VWpA6J6YFzUxFHjqMsoXcgotWAsLZN3Jzg6",
  "key16": "LGhtoUP8HAPvptEzbHYkTWhhDWEhQ5JwpXvApuAMV6N2XVSvBf4KjaP4YM2ErdzxyDTmLVihFBEHByQwJfzHqW7",
  "key17": "4i5h3uEQTfEkBnsJNY1JsnYhWBehir6Xz1xiw6segLhK3Sz5Q3viP13iwxpKzLNSj1ttcnsz9JKyqvkESrjz5HLD",
  "key18": "4vWYFZU5iYDa1L3TcBRtE5k1oW4hvuZJ5px8pkoy1VaB5R1CbTjZtZpnqB1vtyRCTcYAseseHqP7PpGzdzAY4a4t",
  "key19": "5z22j6SgvBZ6K4tUXugQQpgkVjBmV8BxZEXnfExn8uqLFk7fRJ72ApJ83fDgnki6LMNzLyixXvFzM7vLZ9y66M9s",
  "key20": "3pi4s8PMLk9XF7QVDWqsAHoXbpMYvBSkb53yBNPu2ZXxTw8amXiimHNAFGT7b5VpD9aYLMgjct31ptWkUjN8LvqU",
  "key21": "U3PYvDa84KjbX8J2eF78rj792LEcnKKgfwhJemyFNwC1Zugu8ZiWuEzosTu11RizTSJxwRApcy7Hpjk2ezHc7yT",
  "key22": "3HmbGECR6tKn1X7V2Qay4kCbyEVRdPsUVqUhQnN4CdXSEWLPdEj1si4yxLcEbA77Zusc7t4GXLm8sbgXYYj4Vpup",
  "key23": "2EpFdVQcZPNCwje315hmfM8zfXSQBdcZ9SZ9ASSBXoe4xrmmcQuXnyB4U1SS9ZyntxtETK2EGkjxb7hVoVMBaLBi",
  "key24": "3JgCP3fgd8iESH8n1M39XfK8894oH9hEy97ZJmheW53phgKr7YtWQqiN4uYg9K7pFD8dxd18JFKKHqihCQttw4d5",
  "key25": "5qTKbCPuDLLkhJGovmgwuZ6YUBBSfq3TsMut3mLfJphVFm1tyas6HF2H5c3NocyKF2EfC3zWxBV3e31zd6iqE3Rg",
  "key26": "5kks9rZGptawddht9wVC61MpdWiJQ8rtAFQUNN6Rye6xxzuHpao4emWy8dd4AJxHSCsNbc8hBzUVUY5gjSyT9Cfx",
  "key27": "4fedaHfd6aggHfoPZckCUUEosQXKf8bbr2fdVq2vzwc3UbDwx3WPSRRBpgzJSX1PB89cdDFSyx6K2HspupQmrNvt",
  "key28": "5pVNkBNbpwaxyvbiu4J9rhoAg1aVkoH3toFVZWGC28baMaeWdYX3AYhWjkvVcBVitp5WXeCpdeJjLSGAAYtBcoEQ",
  "key29": "5XwGxNkVtuj6aBVv9A24VZho4yQuaUEfiHTi3EELB8H8pbdNAmeHB8NXQY6ZngUEw6E1K5qgfdo7xKpieNDH4nYV",
  "key30": "4X7ezuwSGkBXj5NAKDAckX6RBRPByY46aEEDxXTegECN5UhNhkK8jLKMRhBbZXe1zugZ7qgAnp1RNCVbTowRQ9p3",
  "key31": "2mRFwMJVwdrqDxWrAsbmSBVoJ4ZWY57KodRGxJ2QCxHqSerQot71AGd8FpTBNjrGHv8r3jL7Se14vMLEGZ3Tn4E4",
  "key32": "32m84KTCJ7tzo3Z987qTKG5qe1QzDDoeC5BFgtEhWntUY8xHYYw493oEVCNuNWU88KG5qHWCNLheSnuKSMrYSg5g",
  "key33": "2Y3RRJhX2UPGLX6VK84uFB2PmdUBADnjz8qecKBGsnQx6M151yE5p3v5eYSvHG8jQFEpvDZXKurBP6zTt2ytyuRE",
  "key34": "55P7G9fm5n35MiPui9GFDrF35fpAEhHDePGS8e55aCnWEFQhV8HrnX8PgrLNtuVi6Qn4mxq7TwbjhbdJaZkYyWmL",
  "key35": "4ypoygrjeu7QYBicXvUNtWFqQt5QgAAbGHrBUQGZ26gLeBN9aAvvcN88ysYPXhXgSpEuK37erFJ2QXrpVXiG5FHw",
  "key36": "3Y42pSxsHTVXLzdircvyeTtUAe2AN8k8AVctanHqCwvNzKP59hE29BGbw2kTLerBw4wYohdgUv2KNz71gkBviHew",
  "key37": "251xMinvKCa8njKwLDFWnMnnL1dDiMNWmiB9GKFVm8DSdG1EpjZ87BgkLiWmn9LZ6nuFv1pUfaGYcRL3CYk9ro6Z",
  "key38": "5AWCE8hoqSdC4hDAnsaFKqAyjqRBymxH8o7kdeWPKCxThgdc1eE8RANGYW5rtUvbH5PayQHLKWfeJfvz97do8Gmb"
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
