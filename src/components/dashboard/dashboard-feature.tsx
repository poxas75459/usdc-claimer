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
    "4NV3QWYLL7u7ECVUzf9fFP8jPTRBDMxSiZkH7DcmyQcvB95s7fcDajhemt7QGzpRsc57VXCzQr7Ew4Df356MtW8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5akf3iwXWR5J2aTxQNGL6ciJXNAP6rprKRt7tmjh8xKF6oy6PMzLPNmqcP4ym71GFqwD7qGqBryyiNWUwDkG4SHb",
  "key1": "5Fvu2HoRZWDW6CkTfnKzSjm5A7zDAupR2j8HhakaZNC5r4CcxdGjAYggqMos3ZBjCTK8WuhaWxFqLRYiewBBTdNB",
  "key2": "2P3kAmoi45mfuR7878aTor2H8McXka46bob4j5yknaA2yCkNaPQ4q724piXDNR7VYyC3qMkJg3FnjhS4P5uBgiqn",
  "key3": "4DdsE6PVCAtumtmduvgqDyX6nGBR4GyL83Ad4oqaLrwUhYD9Lwfb8GUChdGW4viXAkkPhEDjni881XfSFECBCoCe",
  "key4": "4z4wBTnAETNy38RovwijKTwK7yerwXAUaffqbFbFkUjhYXd35nsXPHiUnQ9AssTzegKN1133LZU3HLVafzntt7Xb",
  "key5": "na3JuxdaAi7bHZwBAMpG67vgFWnmPnGrfCF86Dd6qBpn1Y2657tjaLncSVZAa2AdN7F5qfBiR7eR28eDJ2u69i2",
  "key6": "5PMg8rNKX2j9M8k6SiPKvAbdumNiZ2TzgLUn3ViwrTDSGbBBpJfnKkEK2T5g7rLwGLfKXMQJbSzNCaehsKHZHw7c",
  "key7": "2H6QQKJGohqqDXgJsWXXVF6DdKcSWmrrf5unSgxLR9KcE49WCXToYnUiHDoyoUmGVsXZeeYAFhSngzDPLqXopbkJ",
  "key8": "4zjjuzws4jH14zCcoBS5Tgj1iXGkVDnBQ4dumkZmPYwvzsxJV2Vsc64dtRFRVjxvfZDBhQL5kCrKW9aDMEt3kJRT",
  "key9": "3PbzTitoTV7o3st7p1qKM1xUkS7sD88g1WRRGvyDwuq29Pon8fe4UvxFBhVmPWAkTVo95pK93ZvFwarvjFUqU7Rc",
  "key10": "4dxe27cKo2pFUXNw48Y1pMBs9N43n9Mj9PJi4itc7bFmmeUuXhhXQ8BxPKLo44GQGQ1ZdQrAoDsM1Pkw7hWEdxS7",
  "key11": "5CFD8gUL5tz6PCWNVzFFhRghFsWA8PqYLxKfKRonc5nBpw3YCQKmauGMiPswBRhgdBXUa1KaKttgsAnQ63HaN25E",
  "key12": "NqTLFBbX9d4Z6J8kpNzQkms8W4aUNVBAHYXvWbWM1iygrAD9PxpE2vXFexbsDvkzk9zReonTovSS8cKiuNZqkTz",
  "key13": "5sCUTYEoJF7o4QU7mPD6KHSvzyA46WPtb3cLcGrzAWJ2TC7qQVLXKLdqigWusZAxkPw43w3EHRC9LecNHc6RLxy6",
  "key14": "7ogd6RvjzfagWJYZ4A5KSPpBKjpLzcQ1gxDRUM2QzobRnxctiRjSQiE6VdUCCVgyvr9qSLyS49HvGHmoD6NqXYq",
  "key15": "NgCQ9m6ErVZSTfF9VJXeHQkZyAYXJ7nVdHqKdAdBuEfaEvk5f568V2DwfMgdi5fFTmkwkeDLpQZyd2kNomcWL5r",
  "key16": "58ffj4UYCshBhGt8ZyUhYWS58A3tFZvLYikP94ECTVrSaPu7BZrAxtwiBYNys2LY9DUCULvzKDivj115znhc1BSY",
  "key17": "CeUyvrxBGe3nJG6sybJUqPSVpA7yy6ezQmTbPw3efdsydna7uaMPiwt9PsoRWEVNiWEERDjvS5CA4WoGEsUdYpJ",
  "key18": "NopddqMKqaabDP5TyUtHrFD7XmPF3UxgChvE1wi9cJU4q3D6E8RgjtbbWdpBTomB2AApAmj97WGRNxZiReHUe8t",
  "key19": "2hYjmiUeVYk4NcUtHycwHWrXqNZEDZVYQYdw4raJrwKRESvcPZLYcAsMheqRwaj6tsbgB5CvXmEZFbTpLuTBHQ9p",
  "key20": "2xK37jzb6eAp8Vw4sjNjbzRQ8vNL1bKTfGr1VHt6WbsePHwputRC6Da7NhgsteMX1RBo2Bo6hD2uFnhi7ryRJepr",
  "key21": "2abxjQxTifP4srhRno8LEqJMCJrDtqq3e5oFgkm3woVRokkUamTNnC8hwgQYr4nE4cBPd7p8tyPMHRibF4DTjNwY",
  "key22": "3x8FsyWb7LneZwtZR7TRziScJ7jM1iNxDDGJjbgbWp2Jmw52Z7Cvn14QenYNroCKRRrDHiipNGtUnN6HYxt3bEAT",
  "key23": "5MeohPX8hRQmzndWkfTMPkrBMvXGXMCcxywk1iWWeEDi6bRV8D7mke5sBZabnEyew5cRrCRdrd2A4ech2aLb8npS",
  "key24": "3hMCqAJomdeWdF6yAE8KxoSpiRh5P3jEJphuo4cGsr3QpyyYrkxJC3xU78LEqKCwEWk4j32njyucRxjrxjoWQ44b",
  "key25": "FbTJcyx6so2B6sw8GNTdha8oF2KLEmu1tEyXyNxLuonRbVvqp8XDxJiXSqKCcvNESj8dV6ftKCcGaUiVXeYE5ZW",
  "key26": "4mQmLtgvD1Y3TutEPcgULmaFhDvpFwxejoADW8AUSV9jowiqfftqVKP2HwLTnn8Dw6yLSeFHGRvS1wPiydJLiPMQ",
  "key27": "5npmVca1WjAQU3QR1XQgJPcDwPyjUFC91Jy34TcBJNqUSV34emRKHVBvraFjkjgAP5dfjWgr531mF8Yus4Wt81U7",
  "key28": "4cKYaeGa1BFs7kzy2PZaUijtafVT9fXf2P3LW2U47ieGXW4mqxcqY7AmgUdGKrLJVqGCquuY54biP36tyCEdWQUr",
  "key29": "3FjpAFJiKtNu5YTzQV6fkTmuCYGhtJZGXhk7CnzZ8xbeA74ZtDVDLM9XN3Ya6j2tdB568fEUDSXXmZknDkwoWxFw",
  "key30": "5cthFphbeZv2tTkedDnoM6mUcksaBHLYQ2R6L5ByK8fE1zNpEQPxAvePadECmY5pCpaRSe6gShzVEVAtMZFJjx8S",
  "key31": "hvKNdoAEb5NTLr3TWKfaSXVYNbHRByGzhrCMyNkoipAqbaYFVYC8RVkvZ11yRvtwZ1CnKxi27yw3VXXzoADwbTg",
  "key32": "5DTSCMkgLbtdLEa9FJEEVZBJZG4dUNKZTp8FYv2EDc77WNKEZF7rFoJXaEYcg9HHu7yMqJ1aGgqRU4Z9drKpU2TJ",
  "key33": "3rmv3hHFkngUUdbfmSeAx5pFqkbDLZU3Qrxwv31rDjeXXrUhzCcoheiQvfw3fjZTWXNjv3Qov9Gd5xADBpTGtzJQ",
  "key34": "28GcQzPkP11fJtdzN876hvTNoLmK8BsXC1BY5nasD6wffyoWfRzgDphaeovHbV4KsQD84ufDyrjUTSX5bEqWUDbA",
  "key35": "4MfM4XksSFTnBj27U3Vbi3QwF1D7SY2D3CeRbZB2AFsZAcjkdzSythj4Nz3GKGBjfi9y5N3or7jrvQ8MNwseydEX",
  "key36": "3WkQzv4TjM8os4wKn5nBXyePnti7otUxp77HX3hirF2b4G7vgkivCK9uKFK7yvv727P6iYmwmoRRZsTRdM6KJr4L",
  "key37": "3p242QH3794RKaTZwVUh5uKmxu4idAmeiwMkGVDDkgQJGjpK63DJi6nZd9uxHRgD1Lqq3UmeJhN8RoSj8hnrXvaM",
  "key38": "5Vc6WS3beSsZqDwjfM7jf5nvS6MakhaFP9mX3oQxHd5Bqv49keyhN2z3JarXAyC8HitSUc9R1fUis6WrVWTHVaJ7",
  "key39": "eThwMSxtJutJmoFXEaW31mpn1ouBAj9R1gV6Fe5BioXDPQz8A9gtbpPj7QJHX3EWqKNNY2g1Ux1f99Fj98oEbUH",
  "key40": "cLtZWVkgvpbCGAyPtQwp797x4qfcWk41CCMgJ2GVwB4maNT1oQF3Y4bif6qxEsNfX9WRrFn7Z3r2mZx6p9iXzYX",
  "key41": "41ss49gsCpm5QPJa6iDEwWhLid6x7NGvCcUJCALztvmkKzP2pW4XPu1XY788YjthUtMvEzWrQZYvgdfSpEQ2acvx",
  "key42": "5LWLfsCTPBSHEiGg63JQqF9ePqnwLs9TjV5zdQ8ed9yJ1FRHMhx64S9skFAu5zXqgqBSh3Aqahttsa36g3amGUfs",
  "key43": "5pSxfi4FM1za63nBbSvD2PG594WnaMuepkS29x5r3iMaDnvjFqKsDFwR61xqj8wEcGjh5qNG4aevJ3Cyxu2v65j9",
  "key44": "4k8sbUMkk1CojHV7fvTqp33RLyPPhNPgFM6QE1emTBkqh6Dqgd2XcLMBECDcoXtDKohiZcktc4ZMEEJu8Z5EoFSk",
  "key45": "2EnTKEvrh65Me9UoQ4xQZ2TFQmfN1hkF9Vn3XAVaM3X9NwMBv8S89Egr38DXSF38TQLKKa5STQ4qBaoqjZLGfRaU"
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
