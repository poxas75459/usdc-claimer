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
    "LXdoqkb8f4AN96SZXzozXJPYMt13jYWP6aNodPXqNNoeGkfeor3r8T5oAWq4NNVeJtguJ9ssgHMg2GpGWjiCy4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fdcQTTB89UhSntz8iGgMRkHocfKFf5HcXtci35SHFict7pF6FSbDGTRAGVDD9wvTv1qmwbTtS2BmoMuZ3fzuWtH",
  "key1": "5ysQJ2YddFEXAzEWuFTViH63gRDrT1zxLuUxj6FMQSuZ9Q18Qb2mpGsc7ivvXYCQGqA9TfiEcVjQMQtPjHz7rKMZ",
  "key2": "51AtV9QVdGHPFC7AYsg3nZiQHb5H3oSkJUNPfJsLijdAyCFkgSQPS1aVCUCyoHqgzZdU3EciSUeinWWzVTheRWbe",
  "key3": "5xwsgDS77FVuSm2jRDz2MQSQSR1ihaH1FbUxcqMEEtCdrnDhAKE66c3XaUYXkf6tXdvq8BzW6HxgAb4tR6wiW1Mn",
  "key4": "26NoNUALkc5yKTrBbAhtzWJpZJu1CjiaK5TH1T7TZFCy842RwHCdMBjNgi64XJ2Z19DAyTEafYNtXmSmkZTms3X8",
  "key5": "2mQG4h2cNVBxKXhMEfUtxMuF6vrw8z7VYJAynb4MqXaCstq2QNTm3thsM5awApmEWB2AtkaJVCzLKyCD4xv4PjT1",
  "key6": "549e53eCVX8dzuuFroBS6T6YDSAMkMjxrmrVw9rc2dizmQJtEjkc3Biirx2ZcsfhLMXNCmwtvS2pLR84ETVBnwRA",
  "key7": "38BiktWUyqXrq4cquR5rYCfoQKBW5ueuuQJwz86vWs72PfRhR2BEuzqsG4A9gxKHEEE5WKSMGqkKa5iYmQu4WGHE",
  "key8": "3LSHubXNMXj75wfN2gtsW8VjGH8JtYFj3o5wkkwAZUL7hVbz27PQRk9fqWnNTYbk9ZwFMQWAbFpG6oWj3CBRXQcu",
  "key9": "67PpgcEf1WVJYhnoRhEgxxvb3QV2Cix3S2R32mSQ69hwLWw5ry4U6ZK66QYXhiSv4KboqZiGGVBDVpWskxV31npV",
  "key10": "2BmQAYo2219yxrEU9jmcM1yKz9YaEE29t9QXkCC1kd3JKEghVMmGXSMjmWyoqEpjna8oDm7iXaQiWqNHGMcG59f6",
  "key11": "5Y4a24VBib8RpLMcmL4L7u2pknt5JMCgX8jmNm6maL6P7UoNTis4gBGm135PP8rHBL36HT8mmQN9KLz9cjUc6JNb",
  "key12": "523nefzXT9vnuz4PNpaoGWf2TsJCGBVotbs2PmdPmQcTuoCpKchMe4oW2sTZrsfuf4uqaNKTD8t6PuzAv7GGCapr",
  "key13": "4KQHCdgnJd1P1i1RWcMw1KEC6HX997c3gdc79EPXDBBy2r2k7yJNNkbyoMJ19nNopCDxahXPLHqSnCPhyXnuK6FY",
  "key14": "3bBBHfSGMj6WRfXWy8ToAdwdnUiuvxdZBv3Uu28jv5ALaPK5XiXKenuDA1a38xJ3r1XwEgrSR8G2BoZFDonyD6yz",
  "key15": "3XJG5UHv9nrxitaszMgTeFGcqmGbdQ8bAbp32n67DGaSco4c82F3oVtGpMjhFdxaivymaqBSETxfpPAKotmoEDtk",
  "key16": "3RGvGsqk6QP7WBvhW5ExybVf42Gtc2mnf7EyjT2fXkjkcbgBRijzVgfVajpkUWmAPnok3LkwaAcMzB6DZ6XXGEkh",
  "key17": "4MJcWj3YhJYoqE49MgVLXKT3qTS4Le6njXePULYzCfjEZYJoW95FQCr5KMuNE9bqX74PTcrJmfQGG1JB2bgVix9D",
  "key18": "4PyN9xDsHFNTH1noNq18jgAnDAGvJ8Es31vjXTWCi4xGLcbHULFMuZVqQg1qmgFR55y8zH3RTva1a8CSg757owpn",
  "key19": "5GNTfeLbzQb2edek9q1SR2b6wdFsx8pmcp1toEcp2fCSaPds6obJu4c4nnjT7oyySzgzYotpS1aR4pCx4661ioDU",
  "key20": "HYybdCzd6iN3K2XLsNmjNgcXTsW3rL6w5iB3iaHfYCQkbL2KNkPFEeqnxUAm2qeGhjA2hY37jhCnKYnpH76Wq7A",
  "key21": "4MuLBynik2mk9QoTMioYspzPmceshd5VYchXHDVzNDLYscPJbqX6w6ZCAAX4qk1DB1hLq6aW1HedQqctxyG819gn",
  "key22": "3L1xn26jAiiJhtFLCvDaATAe4W8hiQUuqRMa4xrEU2t5iGYyXjG1Xj6mntNUKkoM6EMNtjDKT7VjYMNSkTTMBcD",
  "key23": "wybEcxJzrfLKvEiEdSy9AVt61f5NiUToixMWWk52kPpSEArhNy5wwRW9Fkn2YaYDJ8EAcn6Du5WHa9TFeVHyw7f",
  "key24": "266Zm67cfUAd73hhUJ6DNwPRXQPh4oR5ETXur2SwiyRxqAaQHLa2Qxo5trR7Caq4ZWYDFgFK3skhJVWheLFe3mWu",
  "key25": "2UEJ2evtFLbgzFLYWpiw2D3QrfMyM2vk99FCbzvb7rKvipnSFW6jywSAbNzffhnnmja4jimwYQwZswoRXAz9A6kN",
  "key26": "2dnoE13kiYes34SGavtCLxBxE6b74Mjs6vjEMAcJRcwL4ThyFELcdU2TdTw1n99hyWa9PH3J8cYT5mraSFLdwcxN",
  "key27": "DEWgWyBPuMyLAYzuNTenBKHd6ytC6Zj5zpyht7mLq7PinubSrf6125NHonpwYobF9TsaQAumUjGSH5dMBoaKYWY",
  "key28": "4RWbDpmPk3zizQoKgdfhGtGYu4M8EANbeMEd42fgFEMRCff9L9zoZqgRW9gHXGZvrv86UBJQq3YFNdkusJj56HDf",
  "key29": "2hGBYoZpLLwZU1MGUCh9UZ1hizRSL9jBh5gqFnc9a8un1xbzzH7sed5nkQmZJYmTC2vCQ3X78R9fb1pNos2HEjXK",
  "key30": "2dPdUHCzsZGrTLzYPCHfENX3qE4icvuJxZmewgfX3eMdkurUdUfBfCUCZ46n5jYCbedyUZzTM4o3uPziCr9cFppE",
  "key31": "BzKPcT2Vfax3ACfc4ENon69uzL6ZBjKwULe1qEoYeDfieRTxHYfFJSzxWk4Lk9UWDKi2MPJF7YfdzXpzLfjYrG2",
  "key32": "yT2iN3S8CpJ6UZYjYoNv9wRvczuapES4k8xQhKX9Lo4WM1ecCT48TbiA8nbSsGfdF6Nebr38EWq82YwrH4mXiQm",
  "key33": "355fF7LCpvVK6mUYKptAAv1vEoDdahQSJn2wkSGceCo1MrNg6ho46stg6c8do138bz7UPGMzF2X4heZNVYjHeYtP",
  "key34": "5mpxCnCZ7y1R1bVR251J7TEidtkfEi9d9MWiAW1imAymkha9hpTgBGMfswVUmob1PSzJ4dMQ2TSzViXyFo3w6pZu",
  "key35": "26atpRvumRxJ49nXuRKzicvfA2sqU6iYqXVt2gAWnSL1xq5zGQD4T8uVMsBr3zRxHAqYT5uA7mmcHtqesJiKhKD9",
  "key36": "dCE6ZdBBEb42QiTTNgtqCUxTj3A7E9UcyqzydiAHuzTk8sYFKtMrsWHAmpARkRqMbsJYxa81pygPwfNDgqvGqd5",
  "key37": "3QwmAt3Vx1ZDqhQZLDNbJNCAGKF1FfGiEJ2PSUVJNX39PP7d1Cwb1QPMN9poM9mmikZ5vfbi2jhzVL8zvqeu77dh",
  "key38": "5JYVC3BaBtDmaiuhj7NTY2bFoDthqc9ArGLW4wRQ7bWThHFA74jfA5qgKivYJEdmXryFpBDkX5AH4mLbcKfzaD8C",
  "key39": "2xi9ni2aES7m7PXk6JSFneYV9dtkQ3m4LqSfGTBykKEhM4Hk5evUJsaGhwkhJiEUSU3PkLzTMjTwHWHR3E2cD4GK",
  "key40": "5fyr33R6ymfnqEjbVSSjakC3DvuPtHYNJKrxwixYQJJewVsMZdKW24ojV318UM1Uft7BEjh74zAQahj6xSRVxbym",
  "key41": "2rbQVJ2gJpWRA6sE4dSUudip8VU3zoQjF14rxsSa8JGRrb5xupTPP73ND31BN2xhQ9QNYJiN2M3k8scGABUdRKTw",
  "key42": "4JCZZJoSBwVJCbHy61trErW2kcP7DcNfRKRxf1cAygnJfQbx9cExPN5kC9FAJKm5HHGrNfLF8UWNvs3pbKFrHU7V",
  "key43": "eA1BKBn82wHyWxFXqvEUfMqLagoMnmu4DkFBZVmbQw3W8hdyRsNvREtaQEqAFgNdx5iQ968UHqxAyBCfxk7SFP5"
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
