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
    "4KppevqEnhTPejh2hZDzaNs3c1VU3ENGAR6Cs6YEujWKCCdZrnttPXGfG85HA49iSpveo889Wg7XhEe5YVq9hZYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ntxA7sDgAfaUMY7K9wS8WeUvmEaPQ7cEZYAYeFQvTj4VhGowbnH878AaM9mHcV1rmLuxAnmVgXYdryd6Yx6kVAK",
  "key1": "34W4r619MnMPKz88XjgvMdxZdbnST1Sqg8X38qjvQCZfETLfkzec2w389ARME5HWcPwRYLDBm9E8SHkuYdhVJJzd",
  "key2": "4h3EJdvW61Cnbc3XBUQSYYQtHUfxfuYnZ2EiqbUrPdvp4NmJxTNe9zaUGCbLn474m9MXLon3TcVeBbDNqFvffsMu",
  "key3": "4CSoGCwDscYTs6FUARrEptyTiCxLQATt2YHoZFW6y2N3hzVRbLhLTczqkTuC2rEziqxodxpNZVTJ8rML6eewqptS",
  "key4": "3z8fNTeuoPvdR4QM5No2QUDShWECDa6uZF68fB1aeC6i4PooQdM5SocuN63BZGx8fEAHPmw2d9ubbYnZnEEFsVaF",
  "key5": "3aVb9c8CetsSNw2bPTwVJvvvcunWuLuqTwdmSSyZFvgQZbg3Zris6tx32eeLL44NLeK5mELMxny8RaqoZZEBNxaf",
  "key6": "5wSePrzZ8epFRzhZYJRTBJnagjFWUBKrVGmtYqUt7Y2T2WWwrPyw51MeiYTXvQdP9rzafSzgRXgGnp51hSi3SLQM",
  "key7": "ihKrBYASGnMz2xZkbVocWNEhKh9icdWrV6zahbjEKZ3qRnXjpEKRHhukap9iHRBsgaZPxbAj4us151ucdktqHFD",
  "key8": "32KAobPw9XMPkjx9wQJ8nTx9seyTD2VmDtUC2pYyDUgodLfK4UZRcEP1dR25HUf5v8RJHmRBPZF4eKgUpR6PbkBr",
  "key9": "PDRudY6vofu7apeXhfhbybeaVQ9DgCZPP1WqmbZJ24k9GkiZhtr1HCiETfDmWT1XMwnFiCUp1LV7S2N6RtSigSn",
  "key10": "2z94KgwayPxVQ5KPZoNbN4ttG3KxTc1WnxDFFw9GpxKGqzmbQY8UU9bCucUXPRyGMyJx82k2WpnjbfZS6XQf16Av",
  "key11": "5K9MNkbqNs3BPdmFngF4Kcjz95F7NvhVgp93kpYWj68VbboLXBGYmzwExApH3FtVRuYyvWis6r4WG3PsH39aobpf",
  "key12": "2pUB53vZw3RAKVzyG8UQqhTqU5rVvdFCEzLYf1L8HLByanAWhgt3bHUN5TFsAqzD3XWYS3FKFqPBoJ8Lxm8VsfZC",
  "key13": "2uzdp1LeRayCDK9VYZK1bSVGYY9Xsf3RHcT8DqPkzAsRKWy9h4uQRF3iE6wgUT2HPzkzmxKoMnBrLSxSTMhjPAd1",
  "key14": "5LmGA9btbZSXdw3T8qDr6QnT63byT5qtX1uGSb8MbPVTFJ62BXS6pvjRAy6LeeXCjq5BuT3xdDSr3PBmiNir6eMC",
  "key15": "3aJ5DQUkwDu65HyMTVQc5QVEQe1CnVd5XRZ6f7ZYxXjxHHeJ2x9DY2THUr3KkNkT9NaMmmkkMqEfeF2Q11HvGiG9",
  "key16": "eZuZmFShRfpuxSSsKPC8W2PySnTRCMc5C127NKtYx1HzfQYBbHEBFu91nTa6YPSbgKGfQY5bvNjMfH1FLTcfBea",
  "key17": "2bLz2aguUMG6zwWZwpqc5h7Cd5iHQ6dwTdvo8vkCqeXaeuwoiFXW9wMa9x4t2LSngFvHfsrkFtdQErRamMctQ4qr",
  "key18": "2zrtqvjG7YGMBqYQoqSg2e6J7k5L4odaEL7sB7mWYpcFB5niWbrdvuiTX7t3N5w9KVtHnWRd6P74EnjYn6jNQBLU",
  "key19": "3esVhDBdvbQmqNEBvrc6SJsLwPm753ZhnFnQTXNfYuQtAFGP7VbkAz1E2a83cXBSwApRz4WoaWUdZBatTyir6Gst",
  "key20": "4Q3uq8bprodcgeCmscVhi4zXos41iNYcYhBcNP77kA5ZufP2XTnHTGixeCVgX9a9XaPpvayFWeswRyNhwcU1kf1P",
  "key21": "2MDjMxGTpW2oFae4gGneyJx5g7uoCsmCFo3x4aQwpBDoBXUYkbajjBG8jLSk1T3RDFeH6Mynx9JyPJ9VLcMoudHw",
  "key22": "4zfkPeknMFbxxJ8c7UYaP45FKTgHobvWExAUjgGPDwSBBphw36mnG4cQJ4Cird5fPntm4HKpXmozbqvavrKfFoNr",
  "key23": "2k779okxnj25TEfiXYAsKft7jHjnu9ZrKJiV1f3ZTT3Eu5Wh5rdVLS397eobTGyBLj28NfPXBZAA914x3dSGqnz3",
  "key24": "58uhaHnxy6uPr85YS5v9Zw1Vt3CkEDrBqrTCAr7G7id863V3xUvszUeEvBCVa1rv5cgmzbY62iHbyWLG4sKY8nPH",
  "key25": "4eNgjKJR4mNUgbJhNy395fjAwfK68WRfxD2JdiEJjXZj4up2EuiWG4jCvyT9DHF3rT2GdmTQHeAxuVMUGt4Bcmct",
  "key26": "ehjJUA4N9NnPFLWsXmYtCRkfgUMxsxGgqe3XdkrRSTpwAVaYSWT2tWrdWTipaDFsMoMb5Lg1xyhvMCiXsntCf44",
  "key27": "FPPSV8WvenkroUp4BeWTj3xA4AV34BqEwNHydu42juba4n7muB4VeyXuxqC5PH8L4wUk13HvUsGk36upXGNZ6db",
  "key28": "4ALCteEcEczykTv6rvR9oEMKo6FfkkRRuu3pCe2ycLaD3LdqPEGvnRbBY28EkCnzBAZuVx86meqk8UcxffBoypf1",
  "key29": "53kq34eLNAgMGsbri2kb6HBvPFLN9SAj6EYtJz3bsoum7eQNhg9o78GVQaENcT6tK5ACAtxjK8zkJedioqCArk2F",
  "key30": "4sXxuvWgE7DVLpvMmcx9MUoWP7tJgExG3ye9X1BTcyvUkUhAjSXe1KvXEEnSKdhiTThiSYZB1p3fUAHtX1RPkKQz",
  "key31": "e44xfVP9j8sEzAK6HDUzTcZym4zHMNKWD2gmQdUE111n7sBar3koBEq2CD22LLeexD6WaSp5YyihfFbsM6C44Wp",
  "key32": "2g8b37dD1DoKrr2uU4eEM8eU8AfEKWp1U36wRh4SDFhkbia7Xg4j7tpNUka29w94fb3pRFM1AWYBLqVC6GoXyUhz",
  "key33": "DaYSWrhoaJvonGGEkaaF8dopqrBDjaHxXXBRQgQQjbHXRiqkj8G9XsXA9S2AEru2gAQgWNvMyTCP1yucDpy1yyF",
  "key34": "4t8HSXjpoz3c8Pw6v7jZvHyQQSBy14eN2XWEAUMoynMLdW6YGVsMsxtdNftCqCeQMZE83dqVPHHNSvc43rE6f4hq",
  "key35": "63iiqT2tTbByzZpwXkx2qqHz4oQ2uHZv24KMhETRBpQdtUVWCbPExJTWjxgM79G4i9Lx33YsMGCBMaQ5J44hMx1L",
  "key36": "23oXJdtu3rSs5gYexHDch75TuKevnVq9mWEGrG8Va2noT7BMhH56EDu1mFAHCmYawBCMeCE45wCDN29ubFB9brJT",
  "key37": "5M8bqBZRMZBRsy3jwUiM6ifvLDP7hTTZLQWZfyJ4nn7PzwPH4oHaRyYu2ExJQ1WcbHBEgMeWXmgaNMi7uWhpVkVc",
  "key38": "2LEBc9kNAhcb5ffSr4dRqpJqMSFqKpLMyz89HJnNyRLGbSTU8rFKVByRKspErLJAggkb9NrH77EzHmVeRMfoXY1V"
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
