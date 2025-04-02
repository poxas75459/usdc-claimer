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
    "4GoaF7x3iFDrQvoYhNcVYb821USw4qQUF78eK4XtXWvuR54U71Mi7t2uNFm65kgbGaJMw7DnHvvRCczA8PzGYB69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nKpYawLBSrtsqH8hWy5xfGGeSyxMuGfGGVrySWsSq44hGmQyLTjKvqLVYPxJJix2KoVgdkSrbq3CvxFsp7ifYFR",
  "key1": "259vVigsBRrrihCppjzDxrYfajBUuNvAh2cEWjWqbXGRa3wDr4yHML6kby72t6ZDJvqckAyjtPtYxQ7qC9VNkYnY",
  "key2": "Yiyuzq2Dsj1uEEPkTLW4J2naVkuNwUZGPuQD8WGAHhPFZRWipNjogFJqJwgCXZySih3nzLBEFcx9ebKA5MczSgt",
  "key3": "2foCH1eL5U59udxukRC8mAwSJQ4hJxncAJ8ECvLKoTiLR6uex1fL9DVfbZ8q6WZNSEFwaN9V1x6y7KTuXSBdrap",
  "key4": "2abtykWZ9yq9fccfhwkG1oyC2XDFpx4rKdE5BRFm1SVb1eUA6mi3UKwkAavkSh97QB8zNk2PoiYNxvpVVVjdPuWg",
  "key5": "JvvSw97WpmXTRWkLapMwPDaUaehPP6QZGiiAgwA3nR5nCCzn8gK9MWgAJuT54SmeojX67Qe7Y5BuwzcfJfxB8pB",
  "key6": "2Ax7g8dinwUqmWb96MTgyqFR6TS6Z335LZxre5mY5FLupZmHSvESTnnTdPbFM9DKtRPQ2Z7EhGENaPDf8FgN3MTN",
  "key7": "4ZTc24izvK4NEVBiMaxqyDo6U4fJ9sduz7h63PNxXuMmdr6B7opkfCxezm4JY9NUMDmd9mPd9ZgCjesc81jd29oV",
  "key8": "224FP1vAfX9mETiZAGKFPCVVpRD2EDWuhZ8VFzzDHJujiKSBKxCS8PkdfSredWRQRR1UUGGZJzbxKeNt9uBSYXbB",
  "key9": "5HDYNV7tjFgmdVE3EXTGTSf8owjvaMS8BxRt19jJqSBjb4BnMBc7aR4jbm6svYWZkhghTfwxctHEnQkuxiootsWh",
  "key10": "5Q9Me2ewCZJUYugFqsNsykPzm4TCNfk2wdD4VKSnNej3zm9Dnb25LArQpKRJ6g3bDMdv1NQ6C7XpmaGRDSagLEXp",
  "key11": "48UT4k5pDsYVc6niiKhF7E5FDwGEdM95gRRckFhf7hwm4nS5EFgncR8WXxSyu12LjKSufvmeVu7rq5dSiGukSfUi",
  "key12": "ez57gVhQBd2TvioneYRVf5ruHAgG4msSU45pMcBkd3jRdTiTbcd3k83mWzac5BcndBNL5ceN6KVtLgZD7FTmHju",
  "key13": "45nUaoDS5FJgP9Zo72GK6euzEdpT2kHo3EBpZd2GyrBGFRioCXTb4bGUvHKLzgHr2XJ5cWKaRWuMpTdgrBWF1AXh",
  "key14": "54T494Gfrbt2FWv5iv2fKdGUYYCLrpkyiHYMvh5MvCGWEErKHBWKDPqJkAHT3oGoBz3vWjTbpWafVGeMR9SqBhgX",
  "key15": "3SBo3o4UwQX5KSGibPfeCQ4EmukHD4c3TA266qnTVjJsh9GUs5ZuJjg8KXX1ndtj45F7YqenaRpCKjSDA2sXGDCr",
  "key16": "2k1Lw1jFtEoZ39JuaVVLkFrWX6tFtV2CzbkvqSXVnnuGAoJJmosHwZyWZgBtMrgkoHc8wbFuWtkYfZJhRVU5GCX",
  "key17": "ptvSumevYBfZ3YvPAgmv3jrC83dj6nhH2W43PCs544aa7cbcrLRxaLNXw6tdktPECNdwn4fVi8LhmXH5MEV6Bow",
  "key18": "2L2EmL5cPHHHWDfK8WtiDh3UEowaecLD9MBcDWadbtgR4xQbYHeaQT45exkueCyGGk84fTh9CcZCET46rZuxoVTp",
  "key19": "o318aq3STdvL3StXKVB7ZKPcPmhKvcjH3d2p5vU7rpzgaCmsRY9a3yhL9HcqNkL6iBZLPwxq6dJp63T6FnBP639",
  "key20": "qGV23FXM4B21vgCBtSsLWgtSr9LP2KGqUCPJKK5Z3YXqsSVSYUJWg4v6QNhBvrvEaciQLFc4pXj3pRsCoqZBi9H",
  "key21": "3Gj8J9p83oMUrcRb4i5HNuJHjd48nuHwuQbDhQRdgpNRzpkPP59947FFBhaTXGki5QWnAjxoQqPbjqXzQ3KBngqG",
  "key22": "4X7dQgV25fiS7UeB5mjnuZ5F9WRFmNdGSaPPGK1fYYJ828Z5VGMmt3azk7z3fAzqkvdgrms7qVGmGTNtbQdg8bkk",
  "key23": "5bLMKC5wX3V1CsaHY1GYEgyTEum1ps44n6NTkEfm9VBYM6CPoZdueBRak1mhuZHCbn2b4GV5vGTy8aBA8w8JNpCr",
  "key24": "6SvH2x9U3FdFDDbaosbz6KZzwfiEsGinztYjGxP6VuHq2f5Y7AQ9zxwXZBLDE5cxg3bTYA9jGMCMEcTAADTKAh8",
  "key25": "36r4pi7tCfW143h11GDc2jvGvDsKVdCuoNnX5UQ86gdmzXKfx1N7YGsfM9L3BRrZVXRyVfzcGkRuxpiMTy5UGwvh",
  "key26": "5ZMV2tpgsj5ecDe5nYryBZxp6b2GycKYRPa8MDdtrimuuWg6ALNGbmyJDQDhCiWLs1PjY23wZ3UevV1uTdnatmy2",
  "key27": "2TSbw8xvY5audfncL95t3fhkNs4DGZqvEw8131qWUFzcj6jU1h1jW9zKoeCowoG4bzKjj7Hef3mxMVP6qVozZ3S9",
  "key28": "38NzHuBZFiq9z6rZU1HefMxGwBFah6VpfRhVbGtsitdS8U5sF6Bp19wEQEZhiRFVZJZ9pyfByYrk8kSmFQErThwK",
  "key29": "594bUE6pxVqsZhKtCwj2q5W4mPkNbTFH4DhYSq4MiMro5oMSEse4ewXYCADHfKK8FjCtmDobUX9hmXMfV6GkTZ7h",
  "key30": "5DBUUQkGWtaXmmReFLibXMMiMCwJHd8Q7ugAhff14y6NKNrAygusfDkTZwsnHv8uySFfESS229jL8RJ67uLpJrJk",
  "key31": "59YWZeRmb3H68wXmyf1SPEZSXFsQGJ6Dt3XKtwWMKhuyi2mTkY1S1GkyZMoGF6v9Jb3Ceu4iJF4AsH2pbT8E2rHW",
  "key32": "5xDBNj9ULXEmdiG7jH6qT4cqM8AwxGCPnE23xX7uaWxMpopcFqf4GEsNJb1NjiJWjxMWT3nr5PggAkH8sdiJt1da",
  "key33": "53qKTD794Ps6C4o2pxn5bTFpCTV1egXBdvxUcLnVAPFfVNy8VJJn2qHQiMhmvYcaMVKdcVR1ZFZFPowUhYR1GqN9",
  "key34": "4BnFm4MJy6zJWahSFVSB5gyteHXy1FBrPosgn4CSjvsdhqpDVmNWzbFx1pBmkzRTzMyomkyFF5175XtSTCry2LJ6",
  "key35": "3KsQZddv3TD6u6xTVNPqgS4gtFoQJfF9pKTditQCa9AU24v3QeB9ZupxS1obB1bUPpPCuQm9ouCrbofp9PsRdWxH",
  "key36": "4m3Ym6PGLHBBZiqn8w2hutT6YBKeBr2cqm2gzxYiUjbhmsnv6UbzWLqNhuJoR1MSZQVeqPpGoLbDJvHPdBK2eCBq",
  "key37": "61wgyqgneie3uVLnbLH51fTD4X7HYD8DVibv7vqxR5PV3HfkdrZZtCNxJF2KjSrHzXM6qm6mvvcpWdA2Bwhwz6rD",
  "key38": "2FEcnZ4jtkCBPLtdT3XgjKnUJZzeYqZq13uqNCwvgjuE2PktjzrK88AFxq534Qq4Bfy8mZ4TLvi3MKLzEZPGnARA",
  "key39": "4sPE99nEU5YxHKuwx8DGe96syPiqGLHbPiUtQmse71yLkQTNzd26Vx5SmUfHCcMK27AHUTJQDhgZWNnBxb8qX52s",
  "key40": "xxzkVUf2P4rLgwQUYmRB2kuDczWbPzBgCBfJndL9yPF2ctsAsCZWoXHJzTPWN5Q7TEKU9dqvQdnKgG3T5T7CWCp",
  "key41": "2UF86wDNgcRdcgrHCgTotcDGTz3ngG7kiatBjHN6vtcHc6puH4uiMzQVdu1FXMqqKGFopEF7gYBD9ip8hwZvfx6P",
  "key42": "2aPGwLzbcnwSgWw9gZSTQzEUH2sueuJqG59zG9Fthx3cmsiJZ95JYR3FLNscAcRrLVVMtALj49KrVdGLJ7L4tEpc",
  "key43": "3xewb4J4sDXQavQixzNaw69XDzc6zHWdEWbH6u8sNQgwGZeEeh2owm6jr4KurwveCH2LVku3fwMzaqk1hPs4xpzc",
  "key44": "5vikVRFs4HsV2xgsDYHeY6cAnJmcWMmhX7jfTggWmAiXrXirmi8ugwhFVbZP4xrSqKLZSzeVHDmJaChAXoMdvPz4",
  "key45": "3LSdk8CX84fFqNHBREqfTQTwQhkbMPhtncKsyWgnXmXdkU858j9QfrHxLMJ4UsDSFLJJvq8QTvXGahnvipidu4Cx"
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
