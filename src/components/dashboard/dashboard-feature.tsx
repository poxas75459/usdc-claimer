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
    "66K94YdMqfNcX4mJpMsFhg94nB2CGofEucVq7Tvk5g7Ba1ivuvZ9EV9pTi5QUckRmEn1ZTT4DtRRZiXnEyHnfyuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZnaP9777tbBf5Q67CKZ5zMJ3fJujxTLUiHMih4NshgFrAPFbjajJkBE1h3mAyPXX2N4uGhqxXnQRk66XNZk6TkD",
  "key1": "4NBr2Z1MFkjN7U8krKkjXx66yanxyWEa1hcnn2yzGDtyLqT4e13jeJytnct9WM3F2wMKsJSqogjYyBDKWa9QBUVH",
  "key2": "4PQTXvJB7rM5mujCVJoWPKSk7hHuNJxPaGcnTD8X5pCaww5KGz2bozVCP1LRFyVph2dsPFBHkwsuWAoHjBDaSAHb",
  "key3": "288ioMFEWF4LksJ6DN1f2pV4dXQrS9RFsgJiBWtnXCaSHVWXT17PW3sGrviqgXgmFUExqqHWspr8H39CiokfjfPW",
  "key4": "2QihWRgvsezNFR9UCK8pEVP6PciFnkQx4q6YieKNuA7gjTyhDx6kHyhV9nHmpnNV1bfyfPUw6f7Bgewgf6mD3ovx",
  "key5": "3vLR6QEdHDFSTRjQSEdDceS6ZKbk3UdfyiCoUkAPCJEDj4C5rvHGG1rqgXqW718TVz4ykz71kdqRNVsj2ygFrbUx",
  "key6": "5rRJzNHacqmaDzEKDuFZyqb3oQCStbFqVfW74bTw5mzkYKPK3GAw6d5QQQYJMGjfvGb6hQstugMAGn9k2RKoXbUX",
  "key7": "57tfkyY6QXyDecjvos4nsSj3h5rehX7ScoKCcQPJypvWfQQhHKpCAJgtUZbMRnjzdbhumFh7LmbVzcxsE6Gyi5rx",
  "key8": "hKpdBHS3dngakEa21FNrdcyg86LTTxhgzBMPrsqcWrvehdTkKkh6H8UpNsuHwq8dzbSEzmdMTUeAAunPjG9W2sf",
  "key9": "3zMsGR6YugkWU7hbAYgGYAsTE7rYvyHGz7HofYuhFhBb7m5nJd4emeBnHH3DKS6N4yc1YkvyAkdL6qMBY3VwF3U4",
  "key10": "4uB54N7mmX3aqexNNbpxMxAageUCGDcNHUCAK8FuaDtS8TmFnt4fXRzBSfTFNXB3XXhdnsRwKEwuqszB78M5mjYr",
  "key11": "5gzq528VPbgBPaWVKfuvXVApsVMRhDQutzCa15rfhHaZdT83LtmvXfXvZzGT4N6QjwNwA1KAUWqUfKFBycTtTHw4",
  "key12": "62G9GmG4rJyrwfUJm1o3k1Gae6NBsYyonMvtRdnpe9iZ3XY7nXd5icAMZrpgqUiwBSucz7zepCpW8vKe6UidTYfK",
  "key13": "3Xfcn8zn3PBZz6zpSyqvzmAYWo88GSVGsnFPyx1tiJCgtYMWqtgzbVhej2NFBGBUi9VU6etbqBWnSPsM4Fgj83JX",
  "key14": "3V8CQ29bL429f5Rkv5z769SLaRX9oWsoZ3eZNx1sCi7rFiiW13fN3T6ojNQ2FUz4XUPUAkeycJWC8WapLinyMhRn",
  "key15": "3R3sEQiYYoiCbiRdF6HCatQnFrdN73KLbdJnt5iDpb8ReoRZKP9VbSUT8Wx3E7d8Fv9QWRe7aB4JV6eyTqKsqe4p",
  "key16": "5nGYi3gPBTKmTwsF1WxQfZEfyoth3ijDpLbH4bRkp8WyMom4E1kXSoZSEYE2UKT4nomzDzHonGGvQAUSCNrYNFKT",
  "key17": "E1otUCuRuaFgpNcJHCEG8qJf2xf2ryBAwoarvS5PZUKNu1n6MdBsPmCRwPZNosGJMFfz1WtNcggTU3SzTxTbfdL",
  "key18": "4os1iGhANXj7vGQAgS1jxskzKsTCugvyC7L5favmKKdRE7d4M33dtKr4mXGRUn4ScseyfpgZiRxm4a868YydiUdm",
  "key19": "48ociqUoNMeBpbdDZCrFxQbna9LSQVBoUospW7HkaeNFU5KyVW6ASFJxaAeiXhouPWqjofTncuMVsgbZ9725gtYZ",
  "key20": "mUeNmQdCTj6kQX8F2qamSY7BxjnrmYmjxZZYQFrwzmyCCLvden44Xdwf5iBA4msbj18GPU9toPZgGuma9GhoBop",
  "key21": "2qGJ6Kx45jS8qAFAeABTspQPb3eaAc55Wy4A5QZqFZsGJTxFCHASSCTdrwLnMgTyPLCkAt2kRMBkTdvktuc5i8MY",
  "key22": "4TSzDMq7qMAStB6tHpzqDdas6H5MdJ4uZUCk1FvieNUTGedNWdF9ePVRsPTXN8Zg7STZAUQ3Wtg9vcmmYjgzDwZf",
  "key23": "5ntCU6g1NHNCGpysNBStkqmQtL2Wc8hJjCGXtZMEZyA5mbJnHM3t4ASS4e4daJhSr5XsHy8ViRazDX262jihnamc",
  "key24": "3EBfxv22v3xDPE6bYQzAg1hykuSTTagnJJBPtZtodUCdLNBFdq1b3YehAykcVSpRsY3RhtKjURpry4acm4EvDsra",
  "key25": "3W4MqeRGWcMf4x7iJsfpy8aJr4nTq5UTd5DQihGD1BfXvAtFGmzAKxX1f1kUXASH6ETjE917kKMKUMgMMPNzqqnv",
  "key26": "3vTAVLrtWktq5Z7HMZLDqy3LFDsraxPCWmKjVBo3V4xUh3ZRVL1dG2fJoVxNmu4NPbh4EaEn53Ds5FSjeURes4Uk",
  "key27": "4pDK75eHkDSNRvP9i3NxHtV1KakRB9NdixcX3mthiPgKAvXqnsg22zeVyBHuhCQQVRAXNkoWgymhjNcWzJAdCvGx"
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
