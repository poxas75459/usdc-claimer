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
    "TitW5Hh2EQa21yhc9G99ZFirxx58hcYhtVCe3VDe83UdQZUoFJPiqUEzQXGN21Wkyyvv5kRKaaX5wJVUxKYN5G6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36i3Gy4b6LQiBY2fJ7jATVRcHWVC5FZahZwAjz77xnsBSZLjpjbqbJtyCstyGUMoUThaDN3wXaXVA3kNYvKDfxbV",
  "key1": "48a6ozprNTQ7toXN5U1RfCGBYiFMpGDF3itq2eF5o8CN2ozw7dPhZCgcrLm9hbUBVozyS7YB9742xVSuJ5g8iZgf",
  "key2": "62wM8ut1wkGC5f6BkJXoSFSi27teJ8h65SpV944ZD6dyD4dm6WoMnbVTKpQygJxUri4uwHC3y6oR5YoKGMPqJttv",
  "key3": "5y4j4wpy5kSerUVvsiLFoEeyqfLW7ErDWheFWpAPcyA9zZDWW3QeWK37tBeBa6vb1Q36pdd3enPxFy2AaSS9oMQn",
  "key4": "2UPSCA1nxrHApS3eii5ptMeJNN2DBYTMAmHyprtR3tyaDyTV6Zok2gf16jfgY6R3jZzVxPBfGqNSpEcj26qe2kwL",
  "key5": "5q1U3xvzkht6qQ1pdykDj8CJa3cffchwtj3hgaWSUBB2JBAeXZqtmX3Sn95Vb6u3PoNcJqmvAJbjEcqiAtNDGexd",
  "key6": "4MGgTireZ37Bo52h9aBhfMj4kogr6jw64PatJKrFxUmeM4Ztsfyzkm369mY3AU5Sb2nNFcvgFdiRV5XN6uDGU4oW",
  "key7": "wsL7HvugozgUdoT3aZqPKmQ4u9ZHRqPXnVsaQRPpVcM8p5GqUpe9QP4dqQNCxFRBQmbuJ9VpxKhisVJHgP7QZGn",
  "key8": "w5WmndRkx3onj4xFMws9oR1WTsGEBePA2pmyWvYgf8C33PcNpq5s7wq17cE5k6yJ4HWrZrx3a7B1wAdfCQXWXgH",
  "key9": "YoFRGKdsmSxK18d8HmExBgtVw7MdhzR5dTQuuWrTd4eiGbG7c5rVjzGXiDehCjMCRkE6n92MpKL2swzeqYRj5as",
  "key10": "4ry9RG3KDJjhoW13wdTYrbeqdNgPhGS18ztABhmKCZgwQFN13qmxyqbT4Xp4CkVT7DjgmKX3Gn8mm1iTf8GG3BtK",
  "key11": "54PUr7y7oGxdGmw6aMgVVWNZD4EA9fr8zBuZFucTq85gdmmBCicEYxjNQsK4MBva5nTjfnDHqgB7oKRnXsH4AHJs",
  "key12": "272a1XYTuo1ovU3LUUPWhe8pxorZDe9YXx5giBTbGWXLiX31kwKRRWZLeWqazSyfFLBxdjToDqkjs7a3tAfyY3Qr",
  "key13": "39j7mV6EUHk8cVyVqVocrKfwJJomm9LYyKA8JVKuCiYs7HnLLc5ezErXnFF3QWg61eRZ1rtV6EJABAZxDdSKmXtd",
  "key14": "2W59AZb2txXhy52dQEnHpZdFVjPdTkVxKuXwNM3sjmBRaP2n6CKsY3rgU9GzgW11QacH42yCY6At4ZWgtqhEs9z6",
  "key15": "myZH9gCUQPXmf5ZB7gRBQcScTQsxwN8d22BYm3AuHYrEez3QJ4mk2Sd1HCPNmN55gSwBUNfezAdx7dLmJVBumdN",
  "key16": "3NHVDf9wCrvKKEqBkUh616bSRVtMmitTmQLkpTk3frygevySKVUb2DVWJQARWNuZeh1jCSgmbCv1A7bYyWfBVp6p",
  "key17": "27A9ACCeKBYFZz3FDteLEt7jPcWh9E6rTRsWG8DYHNSGxvCzxmkrjmWGmRRLbVVL7juCgXtCvYb1Kuh3xAyDGvJH",
  "key18": "5Rat6xoyAtseqFHSbNFPLuPgeuwnLPM2zMavfp5p3k6EREjL3vNuzjcYZDcwoSb8VPSaqH1a4XJ3nbMN3uJ3SSkL",
  "key19": "2o6u46tk3uMydMj4avD4teNDa5zrxVzRvLMb1sYyWaTar6RTrrEQrLgkLpwuQHiqqfnGGMzC6gdQ2W3XsDh1yrMa",
  "key20": "5KpoCSaUJ67cz2jyXSHZQ244xnyEenuFDoryJomWEWJDRT55gSnJoHRurhSN7fk3WwVo8fWBB8FFcnvXYVsiHFzx",
  "key21": "5jEv7nuA4NGrfWhspAMHTQ6w6bMvjTdUCGvt2dNDz5e9w94SAWTyceXsMqt9WzjYf3YdyL3KXgnAjAbU7yarXinQ",
  "key22": "71Dhg9K2TvayA6fyXS4LvhtbyHgqoa8JU75q3ebbTu5i7kZr3XJYDduQM8Sz5pi6PHKD1SCYfLMM3HJobXQNvGt",
  "key23": "2ew871uvbohLwG5s72r4DfSvcUU2anAyGvfJ1184F2gFUTDdvK5hDUEQDangp976JXb6muuhzfmRtdXFdLWLM18w",
  "key24": "37MKtXxfuud98eRd7YWXKacgr6BFdU2A6HNwEFhVMXqsbdasGQKfbZX2KrmcKvbFhVq59y5WGP3uLAbY4hxWfQa",
  "key25": "3aZhrQwAdxdN4gATnQ2KfP8c15rZ9UyXVywsuX4rLDQdp5FeZ31MPPx7sNEgaAWKPG8VJuKmjHJcEhPrRLuUkEMf",
  "key26": "QRBW2fGrMfLaa39guzk2Gm8HDN2sWbpbmWvX3Rdu7K3tpiafmAHiAJutBotiD3mFn2qWCTzVEDmtSteGxXbSxNb",
  "key27": "z5zLoKupSNB64Et2DAmDbkngHfZknL5WXQkSJv5rK6LiCvTBZWVXSNVRiHpnTBD9P5qtBXU3MbSGNqJ355pxf7K",
  "key28": "MRPSvmnAYMuH8FDTzUZJZmRg4dSmuviMkaXhC2QdD5zqX8Kp2vk6gZhPPztruGe2XL56qmyxMnb2nAJfPDQepnZ",
  "key29": "sCq3TP1RuKNu5TBrPZxKYm8c9zxbi8bgdzfACbsTN1vNhXbmRTHpVtLt2SctrXvRNph6ztA9VdiExBVydRiTVPv",
  "key30": "cdrkSaPvN7Bhtcg4gku322hgzdeHq98RkbSRge2YxaYckhHrUnDhWi2LxUr89SoWPJn4T5BrpZUrBCG8RuJQEnE",
  "key31": "4RVk2pgpCFWJMEiHKEb2TMgBhUffZcCRPR1KL3AXXSHFEz4uRCEXZ1nxDUX3iMnwWWHCGwznE4xPArx38sx2f37V",
  "key32": "64n2JfKvwCUqDfaKzcYFCmAVqvQn7gn8AwRweoqyVyU1fB348MDpErjroKc2UYFMZrEm3UgCM18KYAXHmD8vzZVk",
  "key33": "5vmJtr7vvm7v8MQrMj1ztqwTJFh7ZQqJjPtqNRPae7x8ZCvWZjkaESUcVn7ajkPDpECA1F9vPCXv3bFneJo1vf27",
  "key34": "5RSHYyhEhZciz9fgeWue4eMKWwS1MsJTmUA5sHmRJhPvBibd53ZMxaEARBpUPPuFZjNRVuSBiW4jAn3wVPMfEMrv",
  "key35": "2hftbXvUpsWrQnDEq5czxj6UGZJtre2hsGHHbYKWcEVauFfzrHx6cWPwS317xKjGBBGiandtwi1q2bQrjgzNWJPt",
  "key36": "4hcG4bxhr888TGSXuEStne5W9SbAMNisVK2JCYyHc3nKGHezCBL6xy3uBbsDqJoDfFNvBCLRxuPjnRqR5dUJkAna",
  "key37": "4xMw3o7ARWVDeD7Ee1ucjdrBr8rHjguLoxowdJLZefJsJe3RXpH6p9uLN2nDebsfY3bcUmbRtZhGoDV1pLwKouvx",
  "key38": "2gxVTA55rv6zxpXuJrU2ebb5EaX6ywos4C8aTTXkRodL9vnNEKMuDSW8d2Ump5J8Pzdm8bHM59MycurXMEvryPdD",
  "key39": "3dxB1cLER42rdPswdR7eeDLtdbDqT2v7gfprkFHsE1d4cL1nyTMEXU12YEtgrHVE8hrCcyiTE2knq2BW11vEB6H5",
  "key40": "w2TTD3xvBpNPGhSKaucNCBcHSNBFVQ45m5krMdYU12x5zDUiGxxLzwpNY53axevn6z18GcfPB7YCcepRB9hVNHk",
  "key41": "35VWrePssJ37tFtw2G77pBSX6nedLGbspDxY813wKrC7Mwz3ag5UtjXWpRqjrci8s7MaHJQAbRzUUJXkFNQUWsgi",
  "key42": "4GX2n4bXWs4tYVU7c2sdiyyfFUeNUPbsCDPAQnPFv9RoH47V8nbYmmbBUn2ZWxbMyygvjcTSo4gctBrZPsm3neAz",
  "key43": "3W9KGVMQLJSdPbki2Ku1RRyNBozANhuTFqDahzYFLYKvufQbu9o8KufkBa7tYE9BgPDpK49QUHfGx5FWKbGtYkCs"
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
