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
    "FrxpeDwVtWT5827JrhYYWYAG86Cr54L4A4WyxtS1QHt2z6Q9McTW2mTbekM68xSGT6QPuKMzvDD9fNBqfcGjkin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gxo84cnK3eDdMGjPfCSNoU9xgFJPMXfHc2qGeoWRpTcXxjsXzCzUNqTead9EhqUV38LUbQUDC4rFh51VLCPFMpD",
  "key1": "4d4RKZ7r4GEHdhwzU6qRXxLFstVsnSLfuM8JZvvNEnPH47zMZ1qaPVABf315LFB2GsTmbCocFGx1z3rmeWXennFx",
  "key2": "FE8TL4QttxsDy2w7dcSZbxhN2WpUqFva9vKrPaKcRBX6zYB3zVNjWMfKcTEj2xD7XSHVjMHLiqm4HcQmqTRgDa6",
  "key3": "4izXiMU9LoMffdL86sKh2H9zmR6FQVgaCEVJ6RVE8j6ekbMsDCHztEBqJckekyv73LPMTsoMhKKDAZuwuounRXjq",
  "key4": "4yXGs9Whhe7Jb6PkMwfsAm8MY8b7U1xvsWkrMSoj4QpLtMhki83QGxzP72GtC6nK1biNu5njL7eYHHDZz7D4HEQy",
  "key5": "vbdjZQyzFQNbMPnyGqu7zL99BsciiiVivX1sjNiXVakKTAug9zqvkfn65DvbS77uhYLrC2yZLfJKQtcZejw9pWs",
  "key6": "2r95HfAVN6Nr7Mpvhcb4nax7YR3WidWgY2S3uQVthsMNDBF7ZdZxyH2XREwCKPkKZvmEGk9kkPNHAjiYUeR74bbL",
  "key7": "5Lpquyu2VjGWa9qLsxStT9DYhqcnPXxBEA6Rq9393CztuEY2N1rLsC2NJE6Jr3uoeg2Wbj5s7edE3uLX4Mv64q5F",
  "key8": "4Yg1N8QA47vJNnX839BEWpMwGhYyZmA6rvoftiZiNFJhLmEKaqJB8jfWwofuXmi8nwvuuk1QyA1sPTMoiK2Qq3qx",
  "key9": "2mvfanPb635vbq3JuytQLk66V61Twot1MdkZFigEKYHJ4pVQyYuuw3PdPHEZ9hDgqQtzffULvhHzEv1Jdi6d6cdg",
  "key10": "thyTSYKm78dpWg7mC8cdX4QaaZXv4gYdwN37Pu3UGphKqVrv9qCDYaocobd1TpJVfrAfERpECHDdzwwW7E6V3nu",
  "key11": "47oKFNn42DmgMN7GdP8y8VQekKwiSYmpcowm31oZvftbhebLUYSYbypUHNZ3etUD5MHzkZHEfBXLKE6J33ztLXAt",
  "key12": "5xNaVa4WaPACRgUDP8UtV2XBdXdLYUL9hBX9AvBi6HBFHWKY1usNnSiEMeAFsNYdLmaSemLXtcsZWf8eiMK7XASo",
  "key13": "46FzagpPW6hPgLJ2p1q9TDWvNLg4PFDbqq5iquLYWUpWTJTinv5vGN9tmwGN65pPeUMt99ZNrSvAxpoczddyGPgd",
  "key14": "5t86t6f17XbFsvzg9ogSdLD1rzTnELzmJF7BEymdMaTC6CQuyza47ud3z42fXS2QsnmDWVK8vyf2dc8zPyyFjELG",
  "key15": "RjYjm2FvxikFbTSqobZTKzzcS6aHHbnmTSQzEYhJ1QSvLdWC8FWSKriTbbmZaeUSKTmmwdZDuPnZfWqRBnV5SXQ",
  "key16": "3Doe6LtDLicX4ohL1UcNppXwF9qtupmjmxFTq3FVBowbBQXZd6iJG6rtK3zrM6h6M67yq82K4TsjdhrUb3q5MBxD",
  "key17": "sj13KtriNyzEFwRxoNVA1CgYy68f5Qij5sRLAKdHePDkvGLgUf7frPu3v7UTu49XeC2ntwKWVmRyCAy8UVuPqUg",
  "key18": "3ZoEnHD7X7JBBWFT1dhZz2cjgpMQNn5ec6SFeNpF7V7BALtDyBLnWW8nGhrK8ThQygKJUW64if5wgLrEcfhzrG98",
  "key19": "3M5Z9EQjXNq91ivTJBrbiKQJXiwMH2MBLQn33HtR8jRzgWkunM4ZpzeM4UaL3A6KnAzvnnarXqL3LT1kZ5s7iMaJ",
  "key20": "24eTroms8u1kmfcmibD69CToxufBrJUcBANFcw3HRLPPbGZqfEZKFbhJcui9iZbND4ZptkbFi3FrhXdXGonnVwh1",
  "key21": "QusDZJ3mzAUbRvzSA5pgteGdZ2JT6F2PqMAhVFNB7RvHEtz7wMpX7N5t2DMQDiFqvDWLrJPd3FQPCv1Z4wLNpyD",
  "key22": "3zib5FN6yVotNLBSYWnRF65dZjFDygaiaao2NM7zsgNXJgwGu8UKdeYMXdFhcqhekwVAHVcdCRy22HoqDBiP9kR3",
  "key23": "3Srwf6VMEn9XansBmpjMBhS1Xw35FVVrYAgucAYWErkkzSCS7qt81hKTMhSrPdGqRNxPZLg8MiahecWFUo1gc7kW",
  "key24": "hEe2DhEfVKqoFbFA9hLKoRR76xFwnzBuWj6UJ8sPtjv7tkMsNY8wETfu6Lr6FRe3d3fHJmpVE3vSLoMTuUb5NtY",
  "key25": "zTf4i3xDxehJUXWPVb9CTDWCZo22EttWZrzqy912HgibYKh95C2ttSwUTTPLfiGbppTrE79rhu6m5mDyvjRvSuG",
  "key26": "8yezyrAk4LCdNQ1mLWwpyibrJprCd2BLdDVh6WdooxMT7NTcREjUUURPPtGR9WrCHwqNUMZma71BwH3Tb5PCG2G",
  "key27": "3zMoRwCPqHSVkEmFAMWMMJoZJXAmmSx3SgWugr6ivwzqnc2HnkFdkRc4HPnjxq1TWm3TWGm54mPnQ2Eo9H5yJHdM",
  "key28": "21i8tdcgy7fAUP67S67HX7gH1A2KC63PUeEMfW1wfjkZxy55aKFTMKoryFiiEaQyXzMTcNuULWM6qj7T17eaHt6V",
  "key29": "4YaDjdu4pBZoA5ikJDuMLwA2V7Bjfd5Btnt8PLAcmNk1kBS21Dic5YPP5jGadmde21F5A8WxyUkA8h53UP5bYq6g",
  "key30": "34pfD1NaQowi5wkfYNtqZ4hZUaNYRZkUAHpCUtoAH5SzhTrATmmCFHMUT81Hkg7oNWiD9fNaqvnQiMNJXZfvJHHt",
  "key31": "52ofFtoisuZENoJMpbN2ZJj4K9ZkiWxsvUSRPpg3oypp8wkmLcKovif8B37eqnrGjBFfK7rNgFVMXkuaUkj2bfPv",
  "key32": "4o9vkGxV8JDEXtxLXLgJZGggTPwgMcrNkkfEuitYD7wp4udZ91tiQDcRiKFoeHAdQcPoGBbjeHyCuApNymUKPKsd",
  "key33": "3xMoYPmn8MqJoZkFfcuKySWVs8c8vVFykY6HMDLYKx59XpR3JdGnwCk2FcW7FAhA2WkzuTVr39aojuLDXwasRmM1"
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
