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
    "2DBZAVD75pK4LykubmoU2PEfpuBdL131XuKzhAD4QEdNXkCt41QKy53jiTBuquwhCFRL33aW3rJ6AzeC1GNhT2wp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7wyaRwkVW9BhPyBJGT4GzmH4FhqKiU4CWccQZhhmBykF5pwjVs4twpNjmMZKB8uoW6rJowqGhrNH8LWm277H6Gy",
  "key1": "3N9akGDgxueSbeVQNgRTBz3d6wayNsM6ak9J1BAGTZL5A2Km2sfEAQynNVszy5NKvsYCVKjVdhLs8bMoEVoXpMY9",
  "key2": "8azxq65q3uPtEjFMydXV9hf6EfkQk7q2gPT9oPNwSLA1Adp4i4SZdvYmqYTxW9gESAtpfQYABqERhYnwRAsZoRA",
  "key3": "37Dek3yEkYHUaQPHucqEMiy4RoisNTgk8i2UdkUP6euSPV2F9MjYGXxv3md8w4GTVEAJBkyi6bfp1ZSLZinLHdDX",
  "key4": "4AMFBiQQ4VnPCbXXLKxNzmrNn2aQCux8aedxgyPoKAjKUr8LwKpmwXp8kRz9x4uQ5v2Dpx44c3TtiUXvFCzgE5pj",
  "key5": "5aNaNpzjXVFe7hLgVhoKgZVzZwgf2LpupojkXV5VqFtWBFeshF5Vox9eU4xqKKTch4hQveTRoB9JAgBD2zfN8ir9",
  "key6": "4cmxT7WrPRj91Dg2dXgMUdFDhkx4un6vexbkGBWSvjdjVirmQva8D77BCkwMDEpRj7nv5EbYyiYjmMHmgmaCbF5u",
  "key7": "3gbut9m5eCULR6g8q3BYrZp4chSyjA8FLjyKRtNJLpwcsNczHeSBhVm5U3fKTiUPdMBS1ALoWmsCg9w46drToJ7T",
  "key8": "nzT2bJXWZNoGZLU52FKhabmsP83HehgRjKioeoGCjDCVw3TRQ8g7d7bCApzbrADkAtswjAQAuqdYXHRmqPeR2fL",
  "key9": "2B6mHpHpzRFspMFTSKdqbrR3SqaJWWDKTpbBAF5sLRtMAwDKSFZ5JA5VunWCQwRPpTL1riakRVMvmuT3SMK5Nxyb",
  "key10": "3G9hVim6D4MLL3X6WfCVN82QdZAXYzzePSWSsGHgMZszd2hrcZ2spV6XK1R5pTeDgRDUh1rs4s4NXBuz2CduhVEj",
  "key11": "2ebuwB2PjisBzpXSNDowTntdpuH8WSGBZ6RmA2VZqDQcL99cqw8jELPRp9ajZoWkYCg5qZQHjHnbjSMh8JWccSsc",
  "key12": "41Ty13ij3Z7tUs9VcPRq4JxzUDZmTEMYjBUiNKSEE6PCo7ysu2GwaevkX7CG7zkMhtrRPQXYHezrmxVBJXiLCPz7",
  "key13": "hLeFrhUBphKJcqYDBdT9HPbH8Kw4hBgd1nHebgPL2n6DnmtkSfoBZLhmusq7K5GJ5CELZWb6wgCc6vn5tx3bwnf",
  "key14": "4vo56Dk75VtKCJX4Jdw8YJGgt7eh48a1vQieFMH41AWGHmQ8fTZdu7cgHrC8uSZS9T36pUynskJ4hFrnu3rbPXso",
  "key15": "4vSXUPz4mRt9xVueiiNeaRrydAynyuyppcpNps3qh86Jn1ysUpk4VyxaVVUJPWbxMGZbc1Q4etpwp3QcS2M8fCHM",
  "key16": "57zRbF3QD1817KnCknjFi816Jdr54Z3vPXfFgzTxDXR14q3Y7YkdbchhSVNhvuFwANBr5JeCQmA19EqcDEdTsCRJ",
  "key17": "2i89HfiRw2S5vvrReRVucf7pD6tbgdCfugF2nwjFND4JvnXociTCzFBdF5Tp2cuzP8JTp9ApPQpRFbEaetXM9M12",
  "key18": "ZPmAPN3VoTCah4NGz66ReEE4CZeyp7mAwyM4NkA4prWsCjLG6UEky8qo57HU9FJFB1ukoXNeaWeoFRGr4UEDctR",
  "key19": "4wRRD4ESpjG2JpGV6hugYMU9wueAvUuk1gtrkrBYcZpQbqueHgg2nGgDuSQbMFeYFkf64VLn1htSQB4S8Y5Tr71c",
  "key20": "66MtEvNYRBNCCrBwsCEhmTpRhcrrCNhgp9UQuPAAAtXoo3BD9weo24MU9Qvzjr6WuWQQdumER5W9wW9TpVZMKctF",
  "key21": "5swuicrARfVAXCdx8qQXMTwd7U7LTFhMaQSi18GUd57vs1BJLmPPxC6i5hSzSefNCK9AGWzWwGRNHoyLmaY9qFn3",
  "key22": "3uDAawoytyeHk5mnmoUcfaxdxGE94CwjomRuT2EZ9g6oMBiGJ1Pz8zVXF2okvu4s9grb5kUHJu6ZrdQD7VzYDwqu",
  "key23": "5mkdcZfq2uL442FkUCAebHqDFQ1o3eGLu2BQujxf9jMUvUgCREPbCabeMofCHvak67oCMnHvpMgp6YrvF7ZZLgme",
  "key24": "2xdk34Z2Cu8wiWcyRa4ToDXsP9yzSHsPWuQn9r6mKdSV1jFSJdfbDgSfLF9oxVR6Ckv52k7Wsf2caxmZp6z714A9",
  "key25": "Gg1CcSct2K58gx5GofNrYMNq8nFm6voQx96btWVLBVuMgPSYTeF9MQtcN8AyMNwmjsBFo2vgyDPyRFdaS3Xja7g",
  "key26": "4qHdFiSv2JyYMySGyafvjtc8kVyVvXj3Fst7GwmFC1RVeqX2MvaafK8tPFVdwP9zDzvxmpws6KMMygh4NUH8S1Cu",
  "key27": "2Hij37Yv3oXRbYBVGgKZ47pThtyEdp7PHF5Ub2w7WXCgqWcAwv8PKwppas4UTW14vwb6NZ3TJzotoqHVrPEoUDN",
  "key28": "5stba9c4W3MKhaACJn9wfFCdLpM2huvSyEuW1c3Lw76ca2pfpTJPBd6MotNQPSBv9rsh3Ab4p3nPAJEnEnhVXMRk",
  "key29": "3PPUPYgPfZ5f41Pdg34fpgRa75MD1sym5LE91Mokrh8L6SZ3tFAR11FQTzwVrpTrfwBrMw7fhqQrJM2io21S67AM",
  "key30": "4N8qnfdrMjHsWScigUNSEg5E9N9Eiievqj14Hvj55xtmThwXWX5NxsBwMDMUci9rZb4imzxShzajVvj3HtkwyAPN",
  "key31": "5A9fczN9Aui6KWJXBKCdfXyS1ru4Z6v9c9mGizU9py1KDHj75gtA6TZCdALYiS8QPRfaLKLfdVSJH9uoJAA4KBHp",
  "key32": "dopLYPaWPAjhfLEQKgswVEkWoTb6sjDQeVM6CsM6VHF6RLMKeXdjQJeb17x6gA5JsHPxPqcrSMpHK6XkPewb84V",
  "key33": "5whVGHD4sDUQDSdkN6M26UHZHLXu9xtc1CYr72kD5CBTx4sVznmXjQz6tNWF4K6qwNg7ToGLBuzr7osE3A4uLE4s",
  "key34": "2iE7JGoy81cNZDXdX7y41HPQLgbE3nNnB5LT9dkiTCoxXVPoYU7561ypLhqeLGttBFozQbsKgW9Y4iLuxxFUPvni",
  "key35": "wKqLSdPDeMjRkv4NaY1gAAJL6CRkaXhZijQiNke3iYuM6SwDd8U7kqWzYLY4FcbTQ3aaAFENtqey4Ss1rTzQRGo",
  "key36": "4rsUkTDXg47R2dv24qKG7tKemWdCFJckavov7QmU7WeKHzZAE2NRN7KZpWRpzetJK1JcSuFrzAUaATU3Vb44r4ob",
  "key37": "xdJYAVHbQe1bAokQZ9awwhij73T1PhgrMggTzHen6pk6uWDTVdnuNVDi6m9tZNTigehWsC1DKjhFpyGx7E7nnb3",
  "key38": "5p48hVXBRikjUaqZfNpbPjaiX8xwN4ViN3qHGtY6AeSXJTGsKx6Lu3uFpv2bR3rGZb6Nff8mESkGiurYRnqXyqm",
  "key39": "eoXDTJJo1Mw1H2Z29Mueqt8XF3vsrsFWciK5VjD41rqN6TxZnGP9AzzEpTRVTQJeHsGWrZxed3TPK7vGnxAGxcD",
  "key40": "3VzCoQKrKcP1bLFTfTJxFKtLiwNzkZKqAytXejfEGohzRby4cuvCSbJt4QVg9KxuwcdnVdtswfmriXARcCbCTXbb",
  "key41": "2ZxEAuzSwq1Zni1V7vXXdHqTkSxo2WQHYSKoyWryV3ppnm7hjFVsSHuo68UhorZNvoJBD1pZrwfMBqE6uhUSt3hY",
  "key42": "4HxW2p5oUVHGwHSgoC6Zi3vmCiRGZNiCruLKPiasFF4M9QYsjZBbFUoSNghnRCSduAZnXHzSWwwttWqaGm2cs9KX",
  "key43": "Xe14EN9CZRn386BnAEZ49dCaLvByjRCee6hu2dc2Xoaogzm3qHibyP4nbGaedUfntfXmH6M9N7TD4Tz9LJf8Roo",
  "key44": "4uT8vouCzXKyKYYcYaJoTSvGnFdVBxzvABbKwendXrWsZ7je5Vd4uSPBd7ezMAWema71bHmmRq5QmeHvKF9J62f",
  "key45": "2CE6KgzuCs3mjmByRYY5Y9hWKhcZdjQ1ZttaTwbEtv69BzhW1fat1e48FWgfwjcbAf3gJzWwjdo9EwHCQoWDXrMj",
  "key46": "5vysXjgw52FQJth4uqFFJ9eAAsKGuGJi74dhGoLp9Jkbh5bpRs2KkMbUNzsEfyhpZ2FCzYTgnSzRDfRPFwfnyLG2",
  "key47": "21h1y3Z7z7AhzD6TTHwBo8rMs8woN8L9J6vJ1ZoGUkEhLxBBAGbxeyxBduHEnNS1zJCaVb2asBSpvoKMrAMThTwu"
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
