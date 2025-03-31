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
    "MwpDmeZC1WxsbtEkDEm5p1ead3re1oe9QECYrvPPdBPDissDrUsMj5RGzywZWghEPHQxHZtSxrr56YNSMRu7FvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g8eAUMYEiZD3yaWGg6BBD4Ayfzphqv68Mte1NcM7YzDSTG4qMHKX2UJBtasUCFcfkAfhZH4dfrAD3akFbJ62WV5",
  "key1": "57MB5Rv5Y6icADuf8A3SXp126fzkHT7QrZZCjvpdYVZoPz9ZoBTuxipFLpVbYTUteYWWKp97kwiygZ4LsmDkJSJR",
  "key2": "5T2uNZNGatf87e2AhKkwsyJnEiNk7taYzojZP23rogY6kywGgiHzL8spUAUQ243yXXviDhCoHHQ29QkdXwRmzUWx",
  "key3": "4R9oQosKciGxW2ZMwp925rm18PnwipBf6sjLkfkQHCRB4yXwQfSrVfCpEA32oG85JvyRTwhRqFTKXqH8jM8uURbr",
  "key4": "2Tv5hsAwApMU3QQnJNsvoJhN4TU3siKmcKFpYBa3SYzc498eGqu3AHqR7iiRC3FVW4pdo8H5yZENyd3rynkTbP4i",
  "key5": "2BTDCYxqyDFaWZS8ksGpgqkP7icjZSdsZ5r712ibocLgrAmPpz6ewarWVJv9F3nvBcQWNVfGftvMczaPDfpCGM8H",
  "key6": "4mHhaRcPVZP3gjhFTrbHXZCo1MncT2Whby1vPiyCY1Z8mvyUHNBnuYRVxAz7qyebJiHjPBa68XRT3ongzTEsHfpN",
  "key7": "2jnCUeYFDztx1hjVQgd9Zf6QwybTMgnVm4zZgREQMm1HxLvDGae7QR27WBKGVTJoXJNceADgochjjyGt4qQLcR25",
  "key8": "2DyMjS4KkkiEGYQvDZAxoH8BdoDdWpwzCyQaQNANjjp8bH3nTKCXGvNK6J6oWp7W9vf3eAH3CioWeYnpNQ4aDwEf",
  "key9": "2buPHFmmtgCRtkbaFJpz4aCjjuk6Fe7jTnrBBBVUGcgKM3mTnVDQbVVPE6BeR5Vf4LVXcUe5Sgre5V8Yg2ynZnhG",
  "key10": "dzQbvTwe7VSpWSfx3QmRwQDi6ch1P1tsVFpy9vH9n7duBzQ3H5zfeEVdk8JUozTSFTdhNbLA3WUVRWEiyKYa3hG",
  "key11": "3co2Bd6nnAq88a2NHSVVBThAKacHiUzcRNBhpCcZt9J4uafihYrpe9T1JxisA7gYazhjRNZ6MQqWHZpBM6aGpcQv",
  "key12": "2fx3Mzhz53R6UNPZ2cggboHTPW1ver1kghwqbenBd9kyWmG9Kjk35uv8qfkD4qcqcYT5H7Lyacp2FJsaSuQhnziF",
  "key13": "G3CdK2LNHBpd9CYwKpXa19KfpHxjSNcuzoRLJg2DiYC1g3tVcbat4kyPhga1N7mJfsqVBiz4UYRhpeiW4fvK8W7",
  "key14": "64ScKWPGxiZsoQygNwEKVRN1RrrUzu26jYu9SzrWXsnd1afqYUvpGiqnqQyqa6zthraivwWb6YxScauFnCHNWc3b",
  "key15": "6vWJoP52VLievTA2YUoQennZ2U7ekfcQHtWMaUEVY5iYb11NhqV7MzK4chDfmh6z2FJxpDtVsTjantMkobwLViK",
  "key16": "GWuXzZJsT2RBgnGSADWXHF98euTMxGCivk1Wpu46B7mzQdrYpUSUnSVx9x1nLLEUdvTHZS7Wxygs9yqvaR6y2kB",
  "key17": "5WaneoRJvt79CA7AE6Wj88yYRbay6b97sSnbYvqXxi7fAd3AFroSNSqvQzMz8Um1tCos1qz8XHJhneqqakpMf2fv",
  "key18": "28ebf8pYRd11jQShBRFpMt4RQd1qTUWiCQwbibeF5e5dg3mcUWTKAx58JZRbyykrRV5G2zXyF1jD825Bof2vEQ1j",
  "key19": "48yJhHWvsKJUZJWQBhy4xry4GbeB3pmWvChUT22EuAgWazpK4s4TH7VaRjQw13y158uZ9Fpt32MKKnEyzVE5EmwA",
  "key20": "3vfMgykqxb3ECGisiK3qUuHFkWcAHAMHy8teSvr1Jm3rDKzvGXos3gg5szmgi1YTJeSzV7CQBSue6RRvH6JFWSZ2",
  "key21": "NQAeDT9WPryNRZgV2n4qKfcH9JUSHP37aeXkdNMuo75QpihuWxV9CroatiejLHMELB2D33cGCR2kd8fTWmoNHnP",
  "key22": "EXLXXks7W3ysBQ5MVhUSUDxdQiREtj2kRqzXfRXv2tCHQVcVJ91ucbDyERdQrsxyTRcnhe1UDTG7kk2duBSpuwt",
  "key23": "5VKgpsvKF9kvFsYtft2GDVSWm5FRP2AtZ8fog6xaQBRee5hyxLSLdZ3UtDhWUiGMajAysXfgmXCfAUNnwiaM4PPW",
  "key24": "4irmYod2sPjHvHpd1jgaSbKc6y4fFot6EhYywFZVaZVuWyjUjav6FuRMSEZZt8G6oTdkwdZRD7RAYtU1ta55wApz",
  "key25": "jkmN8k3QWqVs29ctXduLhPS9DrG5SGpdHnnC5441hzo55L8Reu4trZXDFWBBhk8jCPnpMrN8teU69saBqMhvUFJ",
  "key26": "3GC3LBKrSosEpN7hu6ZeFdjkUWxwmBLVQiga3UFW1YeeDNakvFKhDD7j5EREhyNTUZPoJEjvDE9cnRKNmu1PM4xH",
  "key27": "4MpPR5gaqxw2ipmM6cDUyteyS2Wj9qvbWwYp4F7UewJ6y2JmQ4nbpBK5r2uQT4zWywgiK9LRXyVz8kcKxN5nBQnU",
  "key28": "5MxHCMVyTP5b1WzkTryEDKZByQ2Q3k1F2PRbeev1yrdGB1RHYJibxANJ7s8qHviNwDftrZap9Q9YyWFZCZeu88fr",
  "key29": "2PtK6F6BQ444LpwHpxEntBPMbQreLxQe6FqVD6kmH1vTgpYTdcJYQLpdEhj4ERVoE27k6QhpUYZ6fKGSqwKEbXkA",
  "key30": "3csk95eCTar2eJ9dXzhSCpmbXD725KkSxYHnmf3ASfHhAoVY12vDFZRfUXspUfkCxxq65wDeJ28PA1g76TtkxGva",
  "key31": "5N66FaaQiZr11aK7Eea5rVaXkncRosmiNnK5keaSWHNKXjZhvuC8vEB8Fnaz1qoB53UngKHYrKMgBy8tyVEtjRsr",
  "key32": "5BZRVcao6NVoT1vDNkki9TKMW94Jd5uNBcKrjhPVy2CcU5ys9h3HCaNC4avwijUKAPbniwRSF7sBJFQdXAmsng11",
  "key33": "25qhcWSBD78pfHsAGwViD7mcjZVbGD2YuzeYte4EVromeqdy7tEXr3RjJC71AHUSzTAvYZwVQXTe76x8M9EnrLjj",
  "key34": "4sT6rC7gVH43uUP6h42SwpQSzHxo6aX4RZqkf7mHZgwrHDXg591NnrAoo5JyMQHP7S9jchtE4AmxTXsnGjcttXLi",
  "key35": "2SPArr8w7caq7dPCGzQuVDPJuwGmLyfCQ4NNFfxFUcoLB4NQtFw4pHcquJQEnS1EWv9rDEhjeFZdTateP45yWCXt",
  "key36": "2VrdQE4vVs6T72dHRAsuYH2gptzMoqHch9oe4afExGAT9GF4dHjUJiYQZ67rifXAh1uuBR4BEeewGFEuTPhaZzBG",
  "key37": "2m5jkEYLRviJNmWDatmcJPGAwD58L2NXbJyQP4WVEtac5D3yiEXqaLXyBWsg7DcWeiHsdVKbZrpY9LYHJhDWEuNf",
  "key38": "5knBMfiDu2hA9vyKa9azHmiNN4iG14pKRMt5ck4qrNTkE6MwrTYwa9rxoR7ziLwoCeNKcSZ4rnJgJ2YLDv8nWzeT",
  "key39": "LibT35EjTNN4RBDA28hYfkvxAut8FiKr5BbbvVpwU2k4wdF33MNJAEV5fcmVvKrvHJ5Hu2Bs4gbiwg7iDfaiVsF",
  "key40": "PNfG8aqmt8hfYLQtLSq6oQJS53sGto6n3DKytREd2eVk5xJu1FM5r62CHiJhqUbwAJwiD17PBwqut9ZLYpHeQSs",
  "key41": "5SXbGb6XAbwaW5H81jgWw3ZuvbafhCNR7xDst18C6bDcJ3XviTFwhnQMApcDRgSTt8JE2Si6E5AfKH2Z8HZCh4Ha",
  "key42": "4phtTVXSMTB2UdqKeT9gTbLMDUwrKVGTM4ZZhn7Z4rNThoK5BQNg4eUZt7J5zexF1bUC83EZvyowhdmoxLmqDE81",
  "key43": "3yzeDLs7UMRTEArnJZoqiH9ziQQXtQ5U6GDJBgPMMN46nFPrdPKcXDcbev95gDDTutpyzZy44BUBSYcKRL89tPfF",
  "key44": "24rvv6hPwBaKXHXexFRNyE68KJkrcZR2EXYXugZ8oUhpZYR94YhkXEpZDZP5C6Y7wQqDJuy9d647vxYFEh8YY9dN",
  "key45": "5H4CtbaQfEFB1zn5Fy8uerTPsPymLGQ4Rc7r7Cw4nU2ribHtqfMi4PTcvwzWQzBw7M857rfijm1DNG7iNcdC7Kyy",
  "key46": "2wKN1NcA9emzwij4KCzShZrPqyqAosT1WFAsqURbW3HAJnepGPb1AfikPGDdviAgr4dLBccLFRk3MJZaNH24tKme"
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
