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
    "52qfwrabYYbD7jYhfi1u1mxXt8JyRNA3DDNSmeQAUjJSAeGT4p2rECkUsd1iEBJwYpnRwztZNYLHyiGuZAjUDDuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FJWicfPFCFEAXQShj338KMcGsst4RgMVxnyvbfBLLgTWCCLsqwWM1XU9fN9XppBPn43Ts5L28Dk1bdpUbhm2AJV",
  "key1": "4198DED7WihDPTdykfNLhBHDoap4NkenKZcdkdKWaXhefyhM7uTLjKP9FMH8Y95R123UvmN7E26Avjzn1ZeHygq6",
  "key2": "4oc7bzaeLFaS2uyMXPQSpDzeBGPWstx56JJGLTFSX7br8pMmsgXZBrfeh4D3pZ9KcpExYRBXP9J5vM1tPfpTGGnq",
  "key3": "2KFyWQkuSq3py3f1UGujbNDyMx2BMMnYJruHVG1xVjSNzB9vp6DWK3akGjLFfKmqvUZTFDgAH7UpfZFCJnJe4PGK",
  "key4": "3Uu3pN364YSTEcpQmP2bjF5wPcWG1WFJ3ahW3K46wSp2WBBPKypuuH5Nk3cNG2o2BLLQAzJ8oKwvyYKRnpv3SfT2",
  "key5": "54MafGh5ZgqyxMhRVtHXhkgvpyamtF1SwpUXJZNV9svhQVhmRArUKKEgdGKHorh1YjWtdFVe1Tws7UeXnDehqUgK",
  "key6": "6Wc5K3vPoQsAttHaXkNNNoVSeALAwxz6biHcNTUgV9u3jPQob3wLx3m1XbfDKPmMfXTexak5wTptFv8z8w6pdBK",
  "key7": "5JM2LhmTgtvR3cXaz1YjZ4yegVNDU1a45XkVUMUKpNM9tbx5gVcW7XP2wr6r6sjEtcVoYx6c7AwyhH56MsDSWVyJ",
  "key8": "feeJPyzWX1pNHtH6n3jUFEPdDP1Kj8DEo9bRfBmE9RdfpafJRiGdpDBiEcFmYiq6DkUkUftZ7JubQbtJFr4sYZW",
  "key9": "DvzmDNWQiJLZFTZ5tPjKn6zcTbnabrRH49wBUuxprYmhSeGQwnW6Nfp3odzHahoVyNkhuQRbV3KUxaiVoLWcwti",
  "key10": "eKHAdgX3k6HvEMJsPbdLaWyYHccbz7dLveCwvt3vEN6px7NUDdwHxKprSGcv2nkkQLKdKLhErpYhyd3HQqtoDV6",
  "key11": "L9TTAUX1zdF4c7tdLdCXPzbndxHoPk2j7gz8tHPZEVxmtBuSFx4kHahvy9qzmKKg92RUhxaMHfTEF75HUjbJKSn",
  "key12": "56qYwTARVHpUyYddf6wpayxZtP3UkJx5QUMvBKHG1ZEqAqoxmPQcu95epYKHcgFkCbdxupz2fcxz1Vk88RpzCHAp",
  "key13": "3B6x3bg6kxTscaVt17LyL1rRTMYhkkiLeUnp5PXrknJee7KqPqiEK3KapSKbDGg6YLBgYuzxHkJcpTasxUEZ56be",
  "key14": "4kqHMNsGnDj5qv4Eybm8hC9JGN3yvXtgDYr33CGTPCJYLUrakBvBbVjzT4YNhgfJfoCm2sVNZSyZtUNxgm11Xvrm",
  "key15": "2tLJBtexjrTuX6KTBCjRTeZUPwHyUnZ6EwyzL9VMnf8RikKM6WmBXgGhQDSs4bF5GeNpEbS4ew6qFQBrR8t457my",
  "key16": "4M5XDMALEGPk6hNyknPMm21ZY8B3VfSTJTaN4TGieYrHdSX7wvDwpPhNucDnRawZJV1MTffpDcmtHwGFfbmTKQAC",
  "key17": "5woPxu5bGvoWuu4dGTpudkC6e3kM1vcHuPW38EPgGcv6HqzHFdnpaqEKtNHbwhrAsWTf9waHF8H14FvBif1Fp62d",
  "key18": "4oJXJrVLAcHYqvJcfgUQXTPJn755QdM8tt8qrB2PvwS2C5t64SV7BsRBqsX64RXYmE2fsrnGkZcuU5LuSa6n57xX",
  "key19": "3pqyNU68BJfe8mwFEDbfBY61in5Gq66qtwkQzdPMthJAQnjhJXNdRN86ATG9W7JYx4faKSr3MS1UMGMdfZqfA7Jg",
  "key20": "37VbPipSvFR76RwLuDpRMUsU5MLQYurxr4ogEBnxWtzd16oFKzMnUnz4sAtAy1dnWKP4FmRXZhuT6BapNwhqQBE9",
  "key21": "5P2kfQ4SfMaJLEwSi2Do3tLcE9aEUpmJEyJfVBzPFXb2kdLtp5VZJFoEJYNw43KBxbPwGTQ2jdyZtiNPzd1pR4ZE",
  "key22": "5Uoir8Rcg1eCSw4nFUpZbCLkrKmFDBb74ps5cvEzouSLTvdNhE4X4ygA4wWVsjNaz1U9BGhj5xSftbvGDEAk3n21",
  "key23": "45Raix8hDSbmKifunUeRzBkm5XkXomXttXv8qNwYfGhRGUBuXbVMjVs5QSq4s8cHcZyDrwCm4hWyVCgqiDNUsUa6",
  "key24": "385ePcuCvi1Z2CFxaqLQE8zwwVxjLPY53wwxim9TxtwKp7AN5e5Fv79qeSjWfzVbTyi7sXsygdSr9gwfmqt7ka2r",
  "key25": "4qAMhoGAbBTEGFuvuo4vLaPmBdz9DYHK1fCoyJgpRSjPjxp5qM7CtxbWNpD2iipePmQ3gKq1QbckCsjwMzmuv1BJ",
  "key26": "4UQPKb3CBk6NGwZnRVmrwrQP6KoWNEdinYgAXtWneqDXGtk7rRveFeJtyVHXDYJpabpsyzWJMQLg64A3Qt5PKfkJ",
  "key27": "4kNrBP5ut1jD1oAoBRaPCdaAkZh5mwbzHdq8wKJsLJcoqiPkGQMPPGzVmn8wiEBWEvS2FKDH5EdGyUwdyx8ZVQ51",
  "key28": "4oA5R6ZfsjiWVstw67E9qEzjbbdEpodFmeKe9m7zEikoxDmrwJihf3eAU814sseLcsY4y7sNU5F3j84P6eDVKY47",
  "key29": "5uvnXDx7Ki13Yvpet2LAPpEsUyt3rZc8vmJR2pc6Jjqu7uH8ajDr5EY6L4zf8gcSubisXUpus27669zVP5VrsMtt",
  "key30": "q9MxnbQo6jaDPVeiQnHWHwBGkS1dC598Tt8mrK3xdePNES1KjgDNzPdRdTDsxu6zBbBb3NMb34gggqC8obnrVxd",
  "key31": "4vBR1BQs76BmYtmbQjojRkdt6nkFtTtNUPpWZoNkev9vSYA42uQ46GrHhCBdiGorj4MSbPaNdew7SNZ9eRDR2yaU",
  "key32": "59fULymwdZX8RmKocYZ61p4qbwspH4rtSdRL3g6Gq5UqzpUajXKjsn3kAXDHhZjDoj2Y6euFktY8ssCtwRUtGYKA",
  "key33": "67ec8UPo7ZqKiSyRnYAkaXjziKoYPr85qjuScYJHG2F1RCQwxD6ptt2mbYKMj2WCd92kqGU2WQU8Y32HY8mLbWdp",
  "key34": "5ULasRfFVaEs6Vnh54qDTkYEJykr2Mo7hC3omi2h3HNkcVN699wHUdxP7vakA2es7rMzH7pocwPS35bXea4z9H5M",
  "key35": "67Xc6EJyGWUkZw2NZvZcwQ5qsxRZW9yThCfmjD6dFA7ewMkEXmTiW7eRS5W7Qsi1L5aB2Uw1PMEKBNWUrfz1tD1j",
  "key36": "5U2HdexSdcNWsbDkbsYJVLjnkP48522RV12i6ie9b854JwXCYzEvqmCPWsv65EDPHWxYUYhUDQjzNq5Jez6d5Htx"
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
