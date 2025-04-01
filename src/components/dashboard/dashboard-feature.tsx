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
    "67HXrsE6Kgi9MnRLtpUzrfg6Z8pTDdRrkFiGT2p7uxRMWLnL5Gw12zpcSeTsodUcgyJAoJCgSjGwqHvtNnJqp5dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZVdT6EYpoQJiLuQdc1qsL7NryQVTK39ZB3RZcjqj1w1WuUwF2BwV9FovL2j4jW49DJzyDgwjMZexVPAxhFii3ZX",
  "key1": "5RPMg91YEcSgxGACeiJUNYryUvmPiWoA3dQCwg69tH5LX5kk49cEHguyisarFLqjj6suPeFGmqPASN56mLHtARy1",
  "key2": "3xaS8w8Xn4fFh6M2Mc2SrWPSTpF5FXFK5NbXL3c9vbSeg2U937WRPq79iJqvkBfYR9iGJ8iPxSVKCdhPbT35RNqC",
  "key3": "3S8cm3pFztc1KQvp8b4Hnypzf3NuULYrquiwgzQ1W9Xiu5Jf47Z3baQRsyiFqZyMN3rvPMh2U2HtiwvkryGWTcff",
  "key4": "hEAKKf7fvYQMDAp25AN7mpDrGGTPMtyDL6YD8EFpVCqG8VxMU8RiT73PDXTozcvvLnPy6dwmZtuZiTe8YHnTYhN",
  "key5": "NxmCqiwQhfHnfErcvBszqe4vCWpTGxRgv4dboMTkbEkSPYP1wMQdmbkjZwujhjZ2KNLEZ8WknPgDQHP4RkYF48t",
  "key6": "4Y5BWK3EUMGRMHyApYpS6qwLT9XmNXEwjrarrZfu43wVw3A1VorZYFYJRnkkonyAMPSjA4d2W2Y3QXJCWUVH4Mnk",
  "key7": "2bMdFnVm2e389VCcNDBNJPC4pRPVkt5Lbp48S1XPjWUSr5rNHAoNKZRBuiCkhh7WF2j1TwfAqMHn8AB8yfewGZT5",
  "key8": "42mpuMYdjCAbNbBAPyi3WNqjSMkxqHHKdSDjGR6efnCQ3xcpNi3CjBayrGtFMQR2jhytn92P2xAiMdefVsDabuob",
  "key9": "gsurpyNA16PGhnzuMYXb6W5gPfAuy3wdsMqbYerjcUuziKs9w4qvwxgy4mczuTk7e3Yv8QzBP7RL4KomAbj5ofv",
  "key10": "5AXbvj7Ms5z5QJY1zq511S6jj61oimwwcW99vb9yiTvUvLTjJ4mvs58GiSjuU3T3dJJdVt3SbQGwHNKiT15waDJc",
  "key11": "5Co6LEPfnFuAEN2nQWA1koD4YF4FGzFoz6Q92uMMoZirSsZWtvDp9DbAwygeZbQsTxK3XBkuAvWGfcpocgcFrtuF",
  "key12": "MaChS92PdHZ3ia6etxQcenqtZPF8oz2Nn8VpLJP1Jbek2tSTPZNyYsiuH38WppBJ8hp2jbnLpYR5RGrzipPrA1E",
  "key13": "2uiXCHudSBZdgP9ye5bcoZhJnozeNfh7kLgyC4rGeqeBB4WTmhKUSSu2rVDuRL76rzJ84wYiEkLfYF4atCgjtvGy",
  "key14": "4NHw7yB2JF3cZuoh275zJLqPbZyQ4RPi1dMQdAjjmhXd7H3ycy3ituVL6M17Uzc5duqLNJacAWeasoAaqJJjXdHe",
  "key15": "2WZ2p9yRMAhbfxjnsXSeMec3TXpfdg1KEk2Wu4KtR5rc5NT2NoGrcCgX1nbzse5KzNjidjnwZrQrnSXt4A8JBnka",
  "key16": "W8THepqN7KMxGepBHd3JEVrzmPPw5L8smonXSzzyU5wttzsxR8qffrx3YfshZBimACuYjYrZVcguGnKHn68qsB8",
  "key17": "3WeGR9pAKiYcyVvcuPMY9UiTRkW5fgBnT84uFC9d4tJFDQFwtLvobzyhDFL3XYEeNTHsLMAJkEQhp1NPHUUctaH1",
  "key18": "AyhzEUREomqrtoR2ypYSpL2cMzLp4fSvrgNSwjsCDyyx69sF37cZN1TmbQpReAf3uKVSjPUxRfyKphvJ5KU1N8F",
  "key19": "2DjoQyA7P4eqwzxiyvEZgDkCufWVQwAHGSqXJiiKndajXtd5Ky88AFxe94gcj9fKZjfebiPXkd4Uz9JurYSoLoqh",
  "key20": "3JxoqYXHCgGxiG1udg7Q321KBmmhma3xVsNUFBdTRBnYUbiPsPqK6p1F4ZNX6q1Xhs4RhZMp1X7L2K1mqj6c15ws",
  "key21": "HdXPz4C5rYF4m6Ea9GKxZH8SUgqtwQUF9ZK8329HVJTrjU2pGY5wgh6mrNQpR8LMfaBb1bhUi8EwQA73swmSM4W",
  "key22": "MLTjygqkhVfdK4c8oRLK9VGThYunzXs8PJhQNkgaDd4cDCvXhC8hDobMnF76rjVUJbAGM7D6C9SRSqWxSNEKeWg",
  "key23": "3mhnAAc5JjkD2m77aKxDx5YYsr6StFE9zS6s5mERwDLXucuLQqn9WjafKbCE5Sp7dAFRWHNawjFa6DS2zpZNUmRD",
  "key24": "2BdvJsmHr4YdtELbw7GBC3UMBGpFUmPfuYVFmgf1pawCUy7v6gjyxiGM43d1xUqnUS58VGdTG1gbfymgq2eTrx9m",
  "key25": "553WAMen1vFd4bUdYGiSvMbam1vALcrhKeiNYQaRw69iizrFHuCUyZtuQ719RD5Ehvto2QzTs8daLY6aTEU9n26N",
  "key26": "4YgXWZZtFx1vSeWiis9jcc3BU9HmsBKyaGj4RQTpBPfKhqXnui4ekKyfaiJJsULKjoyVvFkFn3JveYx4Y2XbjKuq",
  "key27": "3mUADCRCBSUQgqJBqyX3NXQAgn1HbiDAFSRQ9u3GH48ktkPQQJB3eNGde3CssLy4HsKdhEszQguwHiSDjmVZA8xr",
  "key28": "3xgDZA7Dxz9qoQprnJBmKjzeQ9odBro2mNM9MQDzi5MVvuBZxJizEYy3fPTMvV6PzZxdStD3sq7VbwAe6rWzjtW5",
  "key29": "3xUvwFGDyki75RjPzfvr8ETjvneFAy9fXmdUT5PiDcpk5GC6EHMasWkUcEkgdVLeJMwXd9bujVLKTejccGjh6dRN",
  "key30": "gGQCaFQaw9neZbzpLC7Wa8CXDjo5NCtRX9pfVukLbxQM5YauFwTDTcPVnG5koWVUW7P2WpMtgWomrVHaKQrpthp",
  "key31": "5P7Rfa79Yri4mC9WtYNN89QNpUyyBdih8oCozh22mnTD6GefcKhn5unJTrkYFMRFikY1KjhWtrYCRAJCCYDsRKdh",
  "key32": "2dCadNph6CkyHXewqes6jpYneNxAbAK3DL5jW3Ttew3fgnbssx4FEJX6M1c9qdz7VHK1YLryKnFcfQsSPkUGzM4d",
  "key33": "3ncKrZ7vYKUXqvC3EfdFrNuFdtAb7aWEBaUxVyGQjNbUw9wErZkrkxS5wxc5cvBNTBw1c1z4mLJPpS5mb1y2JyXE",
  "key34": "3DvxBwcRHj6fAWwiECF8X1ySizNx7gHffn12drbsg1Pi66k1unhqV2dQpGCj9i2VgA8Zn3DdRJDnzZcnUVMCar6u",
  "key35": "5K8SmZ5NqHBymFLtqmjUU8J4PpEnPTLmFGL9vjK59GEtFVtjCmBz5akJnbXcTrFoG8AuiEfQrCiCASd5tw5od59a",
  "key36": "58EEPLMK666GssUcFy11y25tbC8g6Pw8cUtyAdaCHoHnd3zgQwSmNM6gsxTH5HX3ACKXW8tKr33RKrQiysfQQ9Jr",
  "key37": "2Ch28xWSbG3dLjf9cPUAb1Mq54M9uNr9b2mBte3rjNEtkkQWfK9Q8Kw6QNiXZPrrohkgx4DzQA8mktTAn6PcHwrB",
  "key38": "24J1rQYc9zA39JE7JvZSdhH3RbCPWqqRHFb2w2ra9ssTUtQhmatRXJQSFRK4jKMuku8UKVgZkkgqBqALAQ5PBfYn",
  "key39": "HXPbHEzWgnAm7jyTDyhainPCtZUaHh6d1Y11dxUzDVFx4XzK9MTSi8hMXF8WBytyT9sBDsdnaUsPgHN2ESAAHyC",
  "key40": "3oWHwb1sNBYK1F5cQqWTCJEWyfcSJKTkqqUPbHaMTvRAr5zXhnjh8GgnQ8jUQPtCyvuuzc7z6oLKrjWmSarJvXR3",
  "key41": "357NU5yDJFqwCpwfLHMQcFz4gFEUVuG9uTxpSW5Z4nTAj1rAx3iAbKTWtHfQ8evxvS4yAaC79nc1BF8wz5VJ1Qfo",
  "key42": "2wbe9NwMcEvaJ3noK5xoFQnUR84iAGpsQXL9aixysUhbN66efRbAyupQVW4txHLQ2UzB1uQN69UANM1VY8RDnqPR"
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
