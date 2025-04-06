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
    "5u5z8p24vgg3MrDyJeRb6eHEJtejcWUdJocAyKvu1gXjNeLoHBdRZtZNbQRqwDtvCzYes4tHm2wYDQKZU2W4DXgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pYjnnNDzwHVwsiLnpVGAjp7GeZhvFHuDgj8KSazZRMojtNLCYNksYrFX9SYaBVENxSSosqyHviZvPsexuvsX2yS",
  "key1": "xhuqHGRXy6w4p9DdutLrcuVc5VEsFzZodH21b6uEMZEcRx8pMREhGw5nJJ7kRghF8f37QoCdVWGfBzTqgfvNie4",
  "key2": "27ufiFjzaL4Q6Y4FPBHXCofrjVgL4DXqKspVbPHUnhQCn919GS4oAHeUnSotbXhSauZrTiwPgJoatYGxdVgXq7JK",
  "key3": "2HXSBy9bLYuKDPRDu4v9d4EMSUWdE6EpeoV3Yw3ynn5DoHmPhGtBAj8JH14Ky1EeRApKjgLbX2MX51qv2txVAWoe",
  "key4": "5PmUS7rzkQLWPMcZfQYBYtwe7e6mAjuLtzU4djepKTjH3d5zciG1K5nTukbzYWY8gsyKkU1FBRDYQRTtKPok2HS8",
  "key5": "2QCTtpk59kiPwrXxe7ea4jyMmBmK8wzZwD4orQFGSRM6MmEzd5GpEpMipeip2Pra9Bap9G9SKduVf9XANgaBdob6",
  "key6": "zrumcEoLNPHuXgrittBBVMRnKvo8AUJa1rqGCETfraiquXydZBGgUhLnnKAsCVrYYtjCJ59LoSCDagmoPaPijvP",
  "key7": "Xxax7QgX75eVnUCheytJARPbKdmZRXqxUw8KcqZNbmoRJSQ9E6HB2vDgwpjaKpeXUGFbwx2wYeyJWjkgVj1vh6z",
  "key8": "3Qpni2U64w8mMVuoYTX93uXRgkKpuAi3FAGa9WbGFkc1QeFCSvMqgg6t7fqQuKRGmTga4T7fc86khQaT47tYAJk",
  "key9": "3w62JX2M8gGcpkh2vvSnrWmdoYXorz163oPsL7LaD8HAv2DLbJBKoY3Q8nsrY41CZmzjq5VEbEyY4qWdsgRXLqZA",
  "key10": "3UfvLQ78wcC7aPcuSMsoT2D3r4SUiLXPY9mZwuydaS7XnzVRZHTz82JLYAtC64f7UyGjzbAwUVjn8VyhYXMKqcv9",
  "key11": "BCzWV8UnMBXfEB5zB1WqNNnLJhZUvLdjx36ASWDQWURjzpP7mtHei7G39HrknXCP6zuxW6Y5tz3SyxS79i7Bqtw",
  "key12": "36z6ywvVv8Z6Tsffoitk2bAUdRRi98HEKFPTgDkBTJExgNFBVxKufN86gb6Yr8TNzS8ZBHUq4RrGhjdkKyHA9K3k",
  "key13": "5rTNtwxQeHx6mQMjQLgfEynQuqd3ooHYPxdp27rC8xBUhjJnr5Jfzd8GjNCFV3ugG71MFz6iNQsACSLVto7s2Fun",
  "key14": "3LvcFTCWaTnCHQ28LY43dbj8a7jTiEwR539R4G1FT8k8DuL7pkfnuN8MVt8dHD7xX1ozz2H4ZJoZCY754U6rhLEW",
  "key15": "3BDEYHosnuypMxGMW9ZBYEzmxFEn6bqXnb94x9j1XyUh3H4tf7JjbaYpcmZ9fKXoA8yAifqGjhPLjegLCQyWHb9y",
  "key16": "4ekr9VRdP8bwmQmrWHF7kdHXEicRu7ndXHMcos2y4V8eSLHbBAwJYFdCKegDVWQBUWhuPcxzgyABweY8ydXb6uS2",
  "key17": "3HGWcWD889GgWo3eH36BmimWnLMRttxTtGhdrye4X21J2oC1FAP2v9wjW6BmoCGd18CbXtihAxCfnC44yBPECpxE",
  "key18": "2MB3TJz8VZ6zLHELaQFacZ3MYC76AV9BWCkZ2uSjhYHzwHRPRFzr8eWETX9n5n9WQy6ZsJ8j9LipNN7BwCKEcNaf",
  "key19": "n9doYZqn3mYkKjgDhpfZLXagZ8yY3mM4PMnsuXdRyc5PFsBZpTSJ92YJubkRw3f8BQCm524woJehh6oC3EprTvQ",
  "key20": "3ZJ8j5P1XzkKBbaiUftxsrx8dwyveRVaxVBXaYkFw1PG2uzWJuVSbDwfwTQWKbXyrxEwuzYFuK3D5dqV95BoSEtJ",
  "key21": "5Pr8dKAxwbJTTeW2tSsKcWFa6xZT5pFBZjwXAX44fQHPPt6FyjB7X4WCBPVFDACLAtiN9tC7KrcG3WjQLSh56mR5",
  "key22": "5SABu5dUNL9UgFoZNp8MomZffFgH2PzRUoas3vF1MxLJCCR3AcS3NTh32AArgWSJ2NQ76oV4pLBxd2YtLihvDfa",
  "key23": "5Rjgp8hHongbPhD3kahYJYYC94xEJuesqMPJhF8BWnNaC5sSpv8SRrK2aChF2corW7qkpz1BiiTgt486ZsApxBGP",
  "key24": "4Q8GHtJaeJ6Y63EjviUWLt3b8MacJwVtZ3zsBn53a6f4673SFBmbbt2PbZtcBUvBfuomA5YyPGJ2E3dStEYmwJYp",
  "key25": "4aMofvzFnHMi4jj5rGTAisKpgAA7tmnXZQWgfeMuMExXKHNxRwh6DUZZqEJogsr7MupGbusMPZYmrAoAriMTNQte",
  "key26": "66hCKJkedzSj1fpfxt4oPreFTzocwHwcnB5QieobhVa9NJ1m9BpzThixgqmDonGFsFj2BDTGvaexV3UW7BU8qm7y",
  "key27": "5nhggdRoHLgvcXChNnekfPv4h8vbm3GzxxuFHbDqSvsmaANDZFSbc4qAF4g22RJqCHuGJRBybtjZuScUHqT99reW",
  "key28": "2QUgXHD7yk12SNjzfzVcARtQWZ79K9xtNaCv9FWPJ6LhGqrD73z2szAckEi9BYRtL8waTempNtj6VMGjwmtgiEmn",
  "key29": "2HzctRs6voMdkv9VZFtt4rbYvv2AdxiYuSgGieoPjxxmrf2C5h42mXcpsn8tUoWC2Pxnmob1i8vuRJRZTiGb1ufH",
  "key30": "2vveGH6B3gMZDN9vDsuCDVcHnH6WstAXMfiCb335QZCAPiqSQYktxF6WTL8FaddrDDD7wnnM87pnseDzemEooP8U",
  "key31": "28rTHSYKM71WWcEMJ48ZZbbGgGeNsJjgezMVQoGZmTBAGFq9y7GxtVKMA3kaTWG3NUq2JdeVsZuRcYpbeWsjZuNK",
  "key32": "3VBXhBBqBo8ZcBHFTMdtBTcSfSLaQUqXaWU7Ct3jxdoB1GyPVWHGGBDZvs689ovETSLcP1YQirGb7YDaG7DXDks1",
  "key33": "X8fDu31WqYyAjEedNzh3zkwEH4MFpEX7dTQwD9KmcephJMUZnAQ7Jp2g2wxTY4NFTtuNdMNteDPEz4pvYHquPLJ",
  "key34": "4TPLJR3wiLUvj1k4dLwtmTsWh9nCVdjKvTjnb1kbT51AUYN2sTptCJYhee2m3wDuwDWTEzHF9WZmkMjeiQNW8VZ",
  "key35": "5fnDJnPaZmkk9eWFSSi3z2qoNkn9z1buSFmTojYFGT1BBA4RiYQj5wgLbBH6ap4P1Hds9PsP1YTQzyfEUeVGvcNb",
  "key36": "3LyKK8RNB7TuWqfHRRCMqjBsfwADXEjwvkaxuXyLrhcMnsd4ex39nFfNDpkNcqw6GiTij6Jatupy2pNgWEMRuSf9",
  "key37": "2nzC5s5wUC3yWqCaJG2adBGHgQr1iWRpNRQDoSKFmMffNUdohpHumxFmhnYEwqzHtfap9L8rDjrrZ9qkUaknwjMQ",
  "key38": "382Y67avccj74bLM1AGjWndczABS92f362CAgns81jhR2p64sXkrvB2aewJqBoKKzdnhbNU2fkqS865zjxdWdM4D",
  "key39": "2nkg2FVktMp1xWoy2o5WkE377e2aFXxNEDzohnV2E6ipfHDSNH2fmjofmHhcPqzH9wq5g9coGkpXv95CfZFLZKME",
  "key40": "5RGqR6ZamrJXsfEHacDkwygQp12Ss5xbLVfq5uhad79ZfcVXJgX6R9SoGUqTiDY4uEKSSoEWnLyiRvzYhJp47QBi",
  "key41": "4g3FGGXBk3MBh4mb7oPerb3TavGzVWyKWHLvwXgDFpFM4orRh5xT1MRQ6g7KKFAqNxFjP9qQamdqr2BUfnRZnCii",
  "key42": "3STccXbX98SgkNcNg7ZPPv7HHVBBQRNfxRQMumq9tRWA3VfmAnsxYVd4sfNaQLanpAkdQCgVtWFCTCNLZRiez7p8",
  "key43": "4kn2i2MnQnDEbwwudNhRhoMHbjoDAfNYvu9uYjhC3UzDsVbfV9gaQhvw859sqSpVhAxwW6HKDP8kNB1mJ7XFGa1e"
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
