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
    "3xByRT8fm5YZ8bhNH3FSXtMuANi7w2C6ZB11Emm4jrx4eY2nQJzDfVSvsU393Yw6ckKRKKrzSW1fVrS4tVRpBdtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q8HFVXr2vYqMobEJ32Ld6YtoCWBSi73qjK32cvEGFfLAH4vQtECMEJgR4joakQqmWgvPviupeZYbyNaU7MHXHV3",
  "key1": "7ueZEr7NGVAYKyME5pEF1ae4xX62USUVfrPcfHT5ixUiDaiJuoecmCG1ApKHGe4QNrjz7jVAsYzpugrLyXyRtEJ",
  "key2": "vgGEgk6B12xMPmuvaT8mcdiYK2TFPcsjjZW2qqTTA611yGcrGFUXsnwszrGgRPruE8N3Yh4hhX4c95b4gSr4G5M",
  "key3": "3R7dhkg386VUXQdJXCWXaXKiUsp9tmexxAzgu3A2xH1VWX1WgASNWCEgfRnz6y8BUjiMDEAmoz21gPnbHAp8U5ER",
  "key4": "23UyTwuwWZ19F7wP7JFiVNZZLXhNeWMyxWo2HgnhNNggPy5cGFE5EYjWy1s9P56Q21cEq6HWkMkPHSz2BUnYp2yN",
  "key5": "3gt4jwNAd84YitYqfVb1JPHmZTkqnkijGDkJ88cDo5qLSaXEQiJYVNiD4zz7zjNn5CcEjrJCpztpEppgoWAwMtNf",
  "key6": "4rCZZhUAL9NxLiaDBQqzko3L8GMHxeDENj3mP7Wo6KvNSYzCkkxMRVYrza4VrnxGDak71nJoLpHoGQUP7btdajw7",
  "key7": "213iR31Bt34Axg7wbLbyXaoLaLGfYy3JsktZ2RSEJxGk6JXCnDRPhAVSophHqwLN3U26VRScT1jML2jae4wZpoZj",
  "key8": "4h46W6nHJt2dErt4GJ13Wtnq2Bj2e2StCFHYiG1i2BJ1aQU9DDwmr9mqxSQY7XTgYPm6uBQVjR9V12NbkprWGwSL",
  "key9": "tHqrmr5visYEwoGbAd46GGNgKKF8evfvdzLT5quc51HmzkbW4Yb6LNWRxfzgSKgEbtMpyaNYGCgcTG2qnkUHn3f",
  "key10": "48vRAJ1JhymYZ2EXuzLLJAqVsXAeLs8pyqhjmpENx71Gwq7fvoGo7XaPLToVb66fUEEyrt5hkjofUVhyeLNrYcMk",
  "key11": "57bC5181u3EAxcj8S7kJ7Ppj8ufFTKhUXtCF1iThZxR5qD3B1XiZ9zA2hwqiqEYLKwZMmLPBqmcbPv1H1uDadgU5",
  "key12": "3FqxPwMCxWUJZbWRtJw3dUzArNDHupSPaY1kBLjkkjPrp5BYhQWLabSLMe5QWZ5bJjDX1Vf4m7VzGjeShmcVbzPs",
  "key13": "3ayhHv2hvangTH5SrT3qBgFwpjEh7BBwJRX8EE2raZmfJS2JvGnx8ujRYXbT44wFgAXvaevn6aRvpAXRmvQEoarq",
  "key14": "2bD8A7CU4eSQouHQTPUwpoW6bPDWJmiLdRmjMBdcYfmpcvaZYSxsK1GYCbjeDYdg4tvWyaL8NdHXZCseriwuF1wy",
  "key15": "22hdoP8Zpe3gHiNbFigtDCtcMubgnbcWu2Kh5XRHwgjtCr2qf4brCkzoToFgvxBcZx4ep5cBszXcKiEvsULVeMx8",
  "key16": "67RPSUnhZKapvSHnwNAADmKg8EmQzCX5ngSp425JCC93fnc9n371hePeaNto9vVWoKEqvAaYfatwDkX297Rx3HRy",
  "key17": "4bTdZymT6Ru8FHhez7ceRyJPw64c3w8yPFePLpeBkgtRHNjDdBfQKuCktjSYfc622gtRp5ae4KMX8s7XbufMDkUG",
  "key18": "H8msNETxy6RPa16LRgg6E95BxjANfxXyCKbH2UCeFPb7LGwKr5pAeoqhbQpvDC7opNsYf2etVdihSKH9vLUTzVp",
  "key19": "54N5xHoP73W2YSVU4jBPEayHTJMeAB3awcmK16Kq5fjRasgwuP2CegysGTbqT2FzsnqYYGuU4zdAhAZJnx6MDbby",
  "key20": "3CA6gNY6YaJA4hYSZAeTgELB2qc4nY22Lj8VumwLP9jMzJgw1kMtRhKp9MRFqza1YXAVRxJFo4nSUMyeqCFy44g2",
  "key21": "YUFs3Pi47x9pxGkeijEQ44o8vUVCGdtxt7FFSzsiajZU5RxepDkfZajynRE67SHRoqKPa5G5X7NeGFboSD7iWJx",
  "key22": "2J7TcNg7v117xowjuC1QJ8YrLTccVDidjHYb565zkHzi53wL53cBNRHLBod7LAtixaHNgKFi4boTjokh3UjzwjCN",
  "key23": "5o6PW6Ke4vzeV9REQYwaVLEEXmrBTPNbegGwnhNCBBNMuADhr1FBSTVpXecQ6PbJRVpAPWrF2rcViTsxXaz1iVea",
  "key24": "3e352XbyNZNb2toQFw1BSCrFjqvNxyim84bKzP6GoTJx99RTwW49wfXhUfz6riJsTRtLD7mjsygaEa5uuFvQLNDD",
  "key25": "zuPubuDFBBCTgResKahD2PnKvxD6BHn3ZLjzTyJqm3iDj56P2rCiY87CbDjFNf6iCxiLL6bNbk7vL7i4Lugu8vJ",
  "key26": "3V4fRie2Qf5WwPzYKEXscWPu5yFqQ7aJE4A3UeN7DTa4sb12MvbQ1uQEVTxaAo8SsmU21ZcGUY6KzV143GuLD2sR",
  "key27": "544J1UYCZUnsRoJyeh7vDf9SPrGvKnfBdbpAEtGEAedFjnfRnGUXHuztjTXKGsk53Tt4ThbBoMXWYyiDbsj3rmN7",
  "key28": "4qdwxTSJy1XtKTuHUbQdmvDFcUe818cqNerhPXLtyY9BTeyrLXf7vopyUaoQyhGo8HMQbbiQXMntmA2Gx2qe14Jc",
  "key29": "2apq23RBayJsbEEz6UL5n5CH1u3Bc4fLNRdqn5Xvh1NqKGmdv3HvrtF8PERKFbUA2zHARsiJm7AMZLu4SbXMAczT",
  "key30": "4K7HtcmG2QLEB5XFgJN4osLq3S5im5XXxi6X9a591ZpxGtZaz8C4BcjWE1fXUJ5WyybWm2iPpZVEA5XStgPiqes4",
  "key31": "4WYPXzc6pZVKK99rfWbPPDpu5Thh4EafdZdHqB7totpnB64BYxcknHH3LHSU7oFbnbhQAyqNCF2hmGAKJujofuA9",
  "key32": "2xyyExwRQn3ARmCCyf49qcYpxkTPBxu6B2tjrNXLa4y5zSXaAgvRihJ17jM79uLfSMuXaa4xjSuCs6PcrZ33cfsN",
  "key33": "55udRmtx7Qs5avabL5QyUkLVErsWcbMJYaAovWXjYXdoSqo3HeEQXuf2VCLpspshtcKv8H6VVRSDFh4fnQpqY2zx",
  "key34": "5KwByt5yyCLYtavMn9SAkdAK5T2xMREyRErVkZ4JoTMXAqRhLYvXUMexrbb6unvir1a7ZW9hmFV9SreEGEKnCtMK",
  "key35": "3PXUazPog7PaZDCgNKbu6gQWjDhqwWjenwR9pTpYYL84whgvwqajYxsys3kjNHqSrFV8vYVBoDe8PDby1nsuLJ7G",
  "key36": "4i59dEWynLs2ENVshdYEpGTQqbEGZK1UK1L1F1E7cShndz9z7ZbiQUvf4ZmhVM6TBFBZKmPCDz3tPfsAu7xe8oxS",
  "key37": "5cyz5HhVJ4UWAHj1UT8wAGiVtoFrB38mGqP8Hj9MT31fsqxAFziQQSYVWqSwJhdcHLqep9XaHdaNdmXozFSKYTM1",
  "key38": "5TXGVrhzSgovg1LXbY518vVDcCfmAzJuBFbc6o2m7W6KvL3UhwGj6ceQ4jExgJVcz9AMWQmTvc8o2X2nknHRTu1h",
  "key39": "4RuokMWPiSv6otBrgh2QBmwZxsxnP1KtUqtSfA9Zp9AJthCvpLirqxPxqRUPLAjAc6WacST758estmmEe9jN82kY",
  "key40": "3cqqcp4ZjJBuN6M1W9xYfYc74PB2pEVVE6juYkK8XRqmDSPgv5RES18yZ7SguYR1mDLFzgYcSVLVtxJsnyQHRAAR",
  "key41": "2UnjV3GiGrBKZGRDNCpG9u2LfsABGMp6Qt5kjmv3racKk15eEZoexbnY6QDiicNHt6AT4mcpm1CpRKMZJHR9zTNY",
  "key42": "4cUExyFt9eSQtMVRD9m2wXTaKoYcL5zKDTD9AZ1btrJ4e8VCFHVsty8AKHKjMSadfsUGu19tnvuYNXZPbh9kaZr",
  "key43": "2oLtQpf6RvyfXuRq38rdmYSfaziRp2utq3JQS94pV7xvBquNJ5wnQecAQzYTQRbHX24QCf4UB8CNEyCk4CYx3S8f",
  "key44": "5spFGgsfwSm9QtUDASdS1FCFbBwhccqQSrBrko4q3GhhNircjXdzqTpDNjSsFLq95BCoqRDeMZqDa8WPndw7F3qA",
  "key45": "5LGpxdrycze4yN51T9Jrs8P4BKDDgEbUgJALN8zHwEjWeaJ5zv4VecFqZj1nsQnTXVFTPS1p3nfwL2dyMk9FHXeX",
  "key46": "3mcczkqisVnf5sEoTMoEMLjkj2RyfabxMGA3jGoB7D9sQwRFaH534W18sgD8yiWxk18uBCZn5csChg3UPMRh5FVr"
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
