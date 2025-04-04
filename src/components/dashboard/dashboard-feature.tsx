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
    "2RQNr87hSXRenYcVzmzipUMwQHoVv8uuHs2Vj2yjUWQx1GctEJ1hBSaSQRPfKM8GKcEWm4UvEKcrfyjYChmaH9ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k1n5c5YcetYgJsWMZzWhTSeZp5RkNEPEsqjus2ujHeiwNXj41oBFeKodFcVatnqs2Ye6FCu4cZ6HM7Px8x175qr",
  "key1": "46pxEKoxH5vhzES1F2HXHthUcsVKWApaUWLSihxgN8nbfyCm7cMYNgZRcKKufRoZuP8YiXtaEgPtnTGSFrQjyZtX",
  "key2": "4yDtQg8wtVpiEDncZY3DjN6AaBH8pCGyVNynjh4HHoD68hbbA6kT73eReEqYyqjEYJP9vE1sCpvaT5iPshnz5LWn",
  "key3": "2BwJuNionGYu7aBMTkK3nzu7qaRGLRGA9YAPcMTPuFMATHtyG7iVC1w1w5pMCkMqhN67ZhMDDx9nZPqTZE5jjb26",
  "key4": "238aR3XKLd7hPtcxrLY7k2cS2zCtWZ6ATEWiZKM856hYMi1Ju5pDPMYiVLiJ8CZtjvWGYmuANvYFFg43NfY5g667",
  "key5": "4qgz9xcfnn3GpnDJDiUF6zvqBe6GDrMTkB9BkTNygMmhzyxjUReekcxaBWRD1YMQvgm1hAWC6SeJiULNzK4EoFBJ",
  "key6": "2uzd9Rnmyd8BM6SvFmypucpiXFbbEVK7AHiQWroJuAvhXhVt8AsFm5K2Ua8x147W6Raiev6eS4hRRtS7U93nMCc1",
  "key7": "3CNbkNGjLobULbsMxiDbJdNAxJehHpjtLZ9RuZXow6P4CBvd5PRYnnj4hP3izvWYGkQtGMkPEzY1swwLbMwSc51H",
  "key8": "36veYbX5K8pb4WvJS6RVBe7nce5sfCAzqwwDhoUfbyN7n9gSJTWSNWt74NdMxT1SwD3e1osoMzrSAykE2WZwmoUi",
  "key9": "4Wb4t4gAMi3ShCxfpdMTjVV3GTX81WxiGaqi8K3PEGT5WPmCRs9hUNRkUEWyXamoUu5X45GuQBCH7LvyQwwyMwFK",
  "key10": "5qgLbKiJ7FhRuZzRGPQ3dGD3K5An8oF4cPSA6WQbCbXQR56ooST4ZHEMPERHHk6CS5BvEjxfk8wrCJSCKJpRtdf8",
  "key11": "3Ux7EZKQs4RHfMLjii9m2yiEko37URKmoewDVhZh7kKJDoSVDQvrpBHfyNrJmD9MfPkY8Bmea11rTU2qLwWYWJpJ",
  "key12": "2b41XKLKaxJK95EjCW3Vrphwk2XbM66scak37eyTgqo32d7EkR7bgF7KTdMh15Kp5hjVqjuv21u6AdSAT8BgKiHM",
  "key13": "2frTky4C1t166HqsuXFeT3QRnoJmyRk1ZsQyzYbt7XTRHkcTjW9tYDjbfxi9S1k1wjxrRiS2i8p2B5edWWFu7BEw",
  "key14": "3qDVTD6i4f3i2e7buVSH1tbk5dRxr2ZrNGpwVAtN1DUjg2YhYQUBrZYtvhS7pAz2JDkGozLHyJqYa8aavzatJaWH",
  "key15": "4xpiBAqG3G1T9ubHv6pyyyK5FXxWtv7iV3bB8oMkoroYLE87hufNh3AwtmTcNJdtfcoQ4LZKxkwGfmpdjm3dWWLL",
  "key16": "3RWE8iywhF7cvFToS8K62Aw86wSzByZkhdvLTyxwkTuGQhLPcGrZeuTkTsLsd2HKaAaB9GMWMomEDWFRg5HSZ7KP",
  "key17": "4Qccojz4NPNTUN7iQXEMh6vb5WAPHnMxN4Ap1RZLgdSsZYTkRBKV4TQesjMZRxkChXvm4sEirbvXiwYdu2oWSDWt",
  "key18": "b2hi3iwk7yqEvzDHeKcb22PTnkCP6vuDq9BgNgXPufbMjZB27HoYhsMFStkTKFuN4xQ11uT4XDMCijyUdcNMq9r",
  "key19": "3BEiyGV9HmnGtgL9d1NR6BemR1rKnUtTojVMqs8zCWXsY2JFgjKw1a5bftyJQE8ngejK95AYsubx5ebL11NYNYw5",
  "key20": "5FpNc7Ln9duZy8xriSfs9zTR2sJj2Y2CEsvz8sFetQvs7cZXnGwHLE3ei11XGdh4uVtXVP5bErSi94F6JyKNgCdh",
  "key21": "2DkX3o1PsDWcS3WqFGs2cupXTYy5Nhn7zEDpMYsrauojPCvjHNSXXLyfatEVgmyHBcG99YxUC3wceGAbxn6GjR1d",
  "key22": "2L43WmVbxBK7VrQQNK7nPCseHuhRneyY73X6VQD74yvHwSwNHSrQU7pbewiA8Lj9yXn2Ewnj12CNZT66bBK4MWwa",
  "key23": "3vrhZJ7PVkMsoyrWJh3L5sNRqJFE2t2FmfmJSDqh71Xx1SJprtxdQPGvnW6JY2wegvfDJw2ufCZQAwM17T9GaZs8",
  "key24": "413yARs23oNZBs6xBhCeGNNSG4uMgpecgfqd7x4iE6bjhQLpYi4bxv81mvWB6EX87uTwbqYAmkxFD6fxD3sLCDCG",
  "key25": "vnFypMy4Xoc9WgZFWkh4bJtHiHA34GkwTxW41QGK36VUT42CZbyaV584ATPvFv7MyrW9bmjXF1fqUJ29oWphQWE",
  "key26": "3ZhU1cjRh3Rk4f2TYwj8Ctgw6srbuVFQPFHRuxkQfU1ZkYxASKTM4Guv8vTf5QxaVjRL6cdxVDmwxrQ3Qo3GEjoG",
  "key27": "gKhbGNfGZtEb6vVdwgaXuZCmCTSg79SBte3Y8p6tjMYHQdvHFPTb2ZQVePV4ieyPaUVvGa1KEeQCwJb5xU7ZUiC",
  "key28": "56diJo8qRGUCfWsvQyMfzUUDEvYtcfWd7vfAzzCNhBDrJjyUS1fDN12pzEYJA1d39mAEhDDoRonPMbb4kDmyawjf",
  "key29": "47csQqGSXUZKSxJtFS1ue1Sr4xh91hEhN6sMfw8i3rhoGsvE5QBn8Ng3cjSQv2uStBTQya3y9Pr1GsygNyRU1KoD",
  "key30": "2nVWTVoiCCYUDnfuy6xTyG9ZnXLravSqVzeQ2pDKwrhrFFnnXNVvS66uX6fgYthVWb12eruZHoXi7PK38FP3BbPH"
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
