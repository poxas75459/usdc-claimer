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
    "2ofJvvgfXrBjJpviHiaB4WjNcQepJPVFs8HbcJkEf1eWKUwc2rqatZgfUyduuEECVgD4mpyryfnKDZKy5Djwwuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K1uftdsjavU7gAQLGvFKdasKWiZbFJdNbmKTYZwxqCnJA1MbnCQ2UfXARxpEWNPyVchCxPSKJsXjpZNTrN3BYKX",
  "key1": "2FEPTa9pGJtUKfB3duCM3JmdA6pQfs53Ery2GyZsgAkxWBnxFf8F4jKoP1UiAz6oXsx92AeJYp3WUEm6W7JPzKgf",
  "key2": "4eDrLxb5yKWX2LYCaZLTE8MmsZHSELFcSr7hY6qeBhumsSpjdUJZpCExEHTKjE4erseQFpt6ErZVmRmMNPLWtC8W",
  "key3": "2xwNFsGPGhLmWEEDKRmVyKn4aJWZCNssEPSoEdv8oVUm1QZdwL7oBc1z7bFNUguiR9NJNxTfp3a2CHeV64vfavwn",
  "key4": "8esbPAvrkioP7fyk37ratDFRtksu6p9cH4jXiPgn2Ujg9ZVVqrxXhCTWoCAFBaYEDgziBD5uEEWpoJKzcoyEuJ1",
  "key5": "4TMeebG9QKaAf4LxgK4hq6RCoh6n5zURUxtBkfs6xHzHv1WfuRm5qesYU2oHLCFduKkzgLG6srqu2GHSspdir7Ho",
  "key6": "2LV89u5Pg3vo8kYEwBbNSGY7wQkxJJgEJXJbWiCHZCpeh1vdtqEZRaUu8bBBtihHiEL4JB9H641RnkYBUTaMKZqU",
  "key7": "3gq1LpP1m9xCYcGPQsRRDsyMt48mqCqh9qfsyTrjASih9EKy7XF5JZCTgXhojRNQv7hSrEtdmaStLTuT6NpQVrwQ",
  "key8": "P6FVKSCFCHwNQGCD5rmtPtwGfxHM4GwARs9zaa3ZJKhHqkkVvaSEeDf3Ef7ikbr41Gv3uXHUd5PaQCUpAvfxqiz",
  "key9": "myD2aaauWPP96zgZyhUQ7WfwB1uNPfmzvqcqc5B3xqpGbCDuND2GshtaBjDRsn5zEvjG6dPcP9aYD5sihVKCg54",
  "key10": "2poFqEwAS3evahB2LVTnL8DYyuCSF9gsAzPHSHZj8W5nxwDNb2SudrYnXvHzBtnb65Rsj5SN4tdJxBB3BCykEgeu",
  "key11": "24D1jaCxfkwe9Qf4y685hFJiw8CtpL4H1CnheSrFxxFkTuHWc94kDscsRqRzR8ZWCh8XXtTJ5PVSR8oG64N6RMhx",
  "key12": "fTgcHX8hEG2wpVraHbLDKc9z9A3BRMZcCkdpHS7JqTz6zHbgSFKBqQFMoSf4a6mEH1iyJ6ozgAyRpCj6cQ6J3NU",
  "key13": "2yAALLCLs1pEQ18LP17rGALm3FDFFf5KheoppAfZAnju7HCZU25LerQm4oDoZ8QWXtsi7ikdh6qtX8tXwmqMATBv",
  "key14": "33eQqjKkKPqGsYGff7J9c7fwuvow4UfT8RWYA6333Hy3Be7y36CQt2XaXFJTZ7deHse49JpwDwBS3pgNz5WBZUix",
  "key15": "64vRxAsBoPY3WUUbLpW2aswkmjuHdhUbEHykoRUHsrP2oDVUKrZ5eeSf67tjjs18VJ2AsF8wfk22xWWbJzMKT3Gb",
  "key16": "4Yo69oUPuowtywT2C6U998HymA87o3doyHsfPYvwLuUKmJ5P8dFm1eZJ2T74nfwa7SR3DHXk1Z8bm7DSj26LnLNY",
  "key17": "5xD2pdj9MA2ph1BMdLWzsMJ2RVjxpWNZKVUkvtksEvSoFJdLQA4KnJxiKSNyc8ApL1672G5PVuQbhxaKbhWi9Ze8",
  "key18": "5HG1QR8jjyB6qnfVc4drBUkva6gUk1NTjzbXpf4Jok7gXKJXTFxNeTkp9u5jTWHgyto4eaBR66WJLXg8gtDryTAr",
  "key19": "5q34yo2weCy3s6VMLj6FVobzTTVZN3wXMvQhnm8efPY1gHpeQobJcpUunAjxVmrpf3xKVFKBTkrNNA8tfybneAio",
  "key20": "5sCuafvCk254B6X3GQgirMrntMYFfxLeAkxNWiN88NupR32esNuG5PMEqMQxibHW14aKsu2TRXNFy2V3rRG1R7UV",
  "key21": "M9MggrUkFcunqiGahr6eUkHo9ZtyFCB3gog8aoT91fp1cj7LiZ7PNeANarXaqarYzz6DLZHE2yLrJH5KTYYBE9p",
  "key22": "3oFG6xxAHubkY3ycBwvSAwKo5A2XTiujd8NmobXdiyVykRQE5UpYs9Qf8V9M4kiUfxpqoHotm9pE53wtQYmNkW1c",
  "key23": "NvqmGjhn2ANzi9joVg4CeMz3hmBK73nPfWt4BaqJtwjsYaUmjUgsdeJBtqqZDC2HL2rwM5NXqHiDFHHQ6RLxiU7",
  "key24": "5AuQwpf4MYiMJDA47gGKDDHxLCL6XiNKAWKZJ8ccSe8ENGRDX3ja57qZ8sSWZNwWCxstxGMCTMCF5gxJjX7BXYuR",
  "key25": "ZVMgGCfhvcw7asHSrDWXKExRWfyLEB5N1R9W8ffhRcgwLr63SFR8e7vSnURw9kopeFPJJEbPfwzxNRWoFXjkB2i",
  "key26": "4nVCvxykz7fGhm8WQxmKAJnadryaReDy7HF44LDBFEGxipE1iVBKZ7BcEn7pJtiVaBNDnbxD5e4nx7WM8r8DS7EH",
  "key27": "zxoGM3916VC7oQqv5SwFyUoAJTVGSYuzLZ1h3eicfsctXq41wAHrt47FCRU8UozuYn6ZYy4DAgHwiC4WHaSjHiM",
  "key28": "uWoVN2ytbYcXws3rpKTfw4neqjfUKPPiMdbMMpSa6uy6T5LVhK5pAQHvpS8s3Bn7Ssi6V4LvFsifiKToLw9ZCwZ",
  "key29": "5XkWXsgyoQhiGe8V81ymhfwR9YJs1PrTVf4HnHA1kDdf5W5v8jWXiAwtdfPDAMiGhQC2gsdTkBPoqygF2s9FZaoz",
  "key30": "Q7qzqcovg2xqds7fvWVEZ8yk9FurtdnNNR13iiB2wonQ6gCnWVJvrh4kK4txAswW3qby5DH4XMKAFf9Gh11qWVx",
  "key31": "5stDpQgLYGA1q1aFqpZAhAVDW8iz1Q9g3TjmFxDzDPQH2YwkrLLr2Lu6tPopbUZYbm4xTkdJ3R9GYxMXogQ52fH3",
  "key32": "2mzc6UXY3DQGEjQAqc3MgTEAUbTE72tBbSGT6dKmwnnbJFQe7B5VW3Xkm4ZWDug2scHfmFEBAT9ZD5XQeNEdyLBD",
  "key33": "2PdpXk7QLzFBKQ9uZ1V9sf7pbBkvAeWfb3SNGLWJRqGZAc5NaEqg2412QPpMUhZCZRvBQtn1h76UdxtUWcyfUNSL",
  "key34": "57PHj4es5rh5gn5vb2NnxsnReXgvoNGBYiiEhtCMDLwK4RhJh9pZ59CSeJJ4if1k3dBtyo9cSy8iw4A7apDxgVBr",
  "key35": "51HfGNDhixJ8nFwJWbnaoDVWkh93FfHM9nn5frFfwf6cmMFXY7JTCVewWLtaFWwwov8DcQ3F1EP2rDugUW5WaF7u"
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
