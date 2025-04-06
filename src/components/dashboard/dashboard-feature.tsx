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
    "2GQGz9htDi9ojk5KJdsAY3rzU1p8zgV2kZKbJpsyNwLpx3fBjcQmJXnxb48XtsQRWPDTgwmobDQSGcEPmFhnCyiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ue6xRs3WDve13AgS8gGcBmAuh9aqHfiQjPZBM8C2BPRvrZQeDWhkKtJyxW1ZvCrD7duThoFKQ4cgtSgpupRQ4rv",
  "key1": "54m1ifgt6qhX26SobARJx7gH87gtponKaAyj3MUE19ypB1gC1MbaXe8HX5sRp8zzFkziYJXr9xzgVFzWu6QRtNwP",
  "key2": "5Ksn75MzDwGJEgzB4VABteaZueYcioD9nRgVKVB4ZUe9yKzwzxhBoTBwPdMSHaEYgQdSeyMJjRWQoEYHvk9FZeNi",
  "key3": "3tG1bgX7TEdPR5gaqYffEvsNceHw7J9xRvc1r9N8xRBTDM9h7sFjxCrbRbpqbAyE4tFBZ9KXQyQDJmiB9vi7bfdH",
  "key4": "3Sb5vp5jsGxZr6mMYYmShhHjmCEhjK58KNJUSFKi5dz2ZGLZe3ckpzMfyMB3V7ZKMp23Sf6c5upFTyi3Vdh8PJwA",
  "key5": "5rE72w2dYDp3bNRPk9nBdDY4sk9Pk5wsyiFY1XHG2hHsbGpjADDMDaHf7xwqNJFRxMgGesfDv5mAE4SxEjh8s2kS",
  "key6": "2MFUPE2rbLg93HfSyfjBqEXuPjarEMmDzEjnhtEH9WgEwNgj9MM11XvtfCUgZfMQYycJmaoeZxnAzrrPu6vk5eWW",
  "key7": "pP36UDzUtZ3cw4t6Ko2XarU1ZUzkuYn4AV5uJGhHhQPcD7XV2p5npBY5c6HuriZKBVHZLTCq5zGhqZKAkomEob2",
  "key8": "4UGHFgC8ssheLm2sQcg5xrVwh1ETJ4yaJxNjc8a1N2b2YoHehSwpJL6zXCcWSF9W1RUNgbU3RgGcmc2KAAoMkANQ",
  "key9": "2wjEiTjtaeYFK2AGrjRYL7w5Jr7UTQwnReJA2jdDFBZLXVxZsPPrgxqaJJLvPACpbDnE9aDA9uxt4xpJoJFV7kGw",
  "key10": "3vX3Hox8EYorLPzyujP4t4Y9SxizBnQQy2QFxdvsoWPHoaE7rQWqRT11Rj5dE68PtdSVg22VvnE8kN6X6ts99sn8",
  "key11": "3DTXd4XJ73SmkPZySsRHAKpScwc7CopMEzkFtAMBbSZEvUXxLRDgHiw71yzinLy9RRDMzu6w62ybMmd4sqkqAdFN",
  "key12": "4qYW2gBHAfDfmtd5sjtx1SKNNPa2H94PV1d1UsCyZh7K2uPwEj33bUnv3WjKosRRMoqSp9USbawPx3QCnrsEDjcB",
  "key13": "3dmtZWHX3fhvqBLMBXji7TYjewTZrnu5yruC4Qwti138ic7MSCTyTKsECoVr4ijeKny85TG9AMmfoyu5YVUeqMn2",
  "key14": "4B8CivXsPyeKa1c8RJyeWb15rdELFwTLd3MKDwuiHQhPK8YBHQ4o4FU1YgTuwTAwPuGeDmEkcu9Veu1UNCLavGo4",
  "key15": "45YhrPMnKb9PoZFm1UABt5T9a6WZDvofQdUDhjiiVn73vRZ2QYGvJFCg9LNHHRVyzchNGbEarjupfR6LMb91dGAE",
  "key16": "5gfxSQxbUatZskCn8sLk7AvWPwRqdP6bFQVaz5tU6BJgp4uRfkeFQDg4DLRFGx6MCZdiTXovYZSNd9WSD8tkAHWU",
  "key17": "212SrMJdXsN7rPoMkWbGKBaHpQu5aZPfhkLZ1vyc6M8HzipmEU39GgXATxbrHeJQi6j4dxqALSprMqrtisFczH9b",
  "key18": "2Yb538ReeRCGXuXyFXRxnJud9ERLjxXLpkrJmkdF7vUVSDaryqbrARMXiQKxQLpBsB79XnuTzhRfkMHwH63fCAyi",
  "key19": "5fUgGcissmbfCaKGz2SCGZcjiCEtop5xngW7uCDR8qJWM8ArCotuF3JDDZqUedNQ9kyyV6QbLt7vQLR2oWf82Qir",
  "key20": "56ckvR4ka6xzDH2rBMU6LQbCux2pv8uAnKQZU2L4cgF1ioRQUwkAiDVUpJHTCPLoXTZLQZXFP7xWfesFZJM4Bxs8",
  "key21": "2LBH7FprBJwc7MH5ZGsGKwySRquEwa4sWQuPskvbvKCjH3CuauCWsm7g6FyuwyniEH3XwFSYtXdDdX5c9STPFUNz",
  "key22": "4rVMZ2nBpMNkcsDs62NtegrPL3BapYLoMUz7jnM4BtG7L9d1pPbbsZYU5x8ppQq7sX8fBBpQp5EJHKPAQqvuj5xU",
  "key23": "62gGgDyxYzBPLxqbqiiSSu2a2oYgxarhokMVLMk35oPFFdktQsB6CcFT9kHCkkEbZGodWQLFNCU89akJJoQswXB1",
  "key24": "4iaFHBt46hK79UjiGKVns2Uko1WoaGEYGAryUe2piaauxHinQZF3FacvhUqmWCFDYCtbDEqE6AHRoNg6vkthyW7b",
  "key25": "4tiALkwbjn42cHJidTspiABhvCBmLcnm91n1ymxR9YFsqUbWNJjQZgdiLMQnaSL22UgeMznmYmFzqDdEQHepMvhS",
  "key26": "5qBd7zEsH1ejYWtBSTywoSpLMcFnWeJsF1DYtEk9SDRF4dJnQaHC3WbcVcMzFPrghRv7z7dbXYnkAMtRcbr49Wn1",
  "key27": "2tJyL3nkrzVJYNUGNpweLzhHJeEwRk4PWWiJ5dkBSJcWNpSkoqus3G9auz1MUHYkUDk7EGyBqPX3xLzEJQhhCZuo",
  "key28": "3xpfM3DCJSp8ex31v9kPoLvfbENdWrrPH6XnGJXhWTLY8bRUVBfvHwzwL4HQiryCzkCWd1BkbQaoTmvA1ZvcbeXJ",
  "key29": "4ZbKbUBvp6f7pq9o7mk1z35pAHxoGBMJf3f9kzp9eSvfP9TdFk5fJs5LYxV1x7E7r3WvgTfrcGxVD5dKLmDW2yVM",
  "key30": "3cz7sMmYnamt7hu8K82P22FsYdywtK7x1sWsiUysALFaoSVjfV1HjQmKDMukyeH4cUtayALnkKoNb1bd6b6pEti6",
  "key31": "5uuSMBaHG2aRrD1h8PcQtVTokaC3UCRumVKGTAQbaEK2cjjpvbb9PBwAQ8YU1xPyRyTonoVs3u9ErDdbZ5agi1Z8",
  "key32": "4h2yVBMvox8jGriLBmXyaRpGDXfcjGV5mFGCvTjjqQfksnsgpoDJ978TcComNirA5iEV1puaeziu9jWTG8yryq7",
  "key33": "4Njsbbgcpninx3gj1XCAXjqJPLFQYN3UeGx9oETULevUCQCMGEsH12T8dK73s6TUxmhfn5usWy9EcBzc7ofTP6zv",
  "key34": "QoiJ9vZ41XH3dZWNXx61BAp3MAYUEopZe4QKSsjBrJz2WA6MroXkMVZjWzHjT6g6huS1NQdmBfg9gwExMzCyxrZ",
  "key35": "3uyeysHhpRE2AHp6sE6vaWaRDgKE6nAAsquTsgqpy2xSmGmaEdr4ZN2QyWz1qAgDYFfjaj2qPW8iFtce35gtBniA",
  "key36": "XPBwjarGuU7SHCXiSMe2pUnvgdKP3UUJgsGXoPwjtQxmdVLGh9bdEP73c3s4ZGspouJmRu2mCJjVjKrrMp1Fmnt",
  "key37": "2tDk8eEbXN4A7uLaaogQEsrc9QG7F8bVz3CsH5mkBHHeaq7ZgCcNAAPNsXQ7meLsJ45XvfJwePsDWmNW82Zfa96J",
  "key38": "nVF6BhPYGbUkC54FJZMmCFDdHx5jgXyCpH8ZcLa36nVYAkLWvPJ8G1sfK3zZ3py2FPTZLS3tbmeaNdGo3yANT8Z",
  "key39": "53VhY96uQnPunAK7NNjQ5JKXVgrt5XttYbBohxXGXy3YoPa1FLfC6VewC8jiUoAWMTCseHXBbbkXykq2dTUnuP5c",
  "key40": "29NxfU5gmRxnnh7Xz6XwaW9AaEQ1wjUsmoZBSA4kypcsEEaWqEenyyHuzXf15cs7Mmkf98xm7sNK7hGFi7pBbtc2",
  "key41": "5HJkbpvVMX28CGxGkC9BghLn4WbBneVH7DSNFqEG96rhxVtsuuNUiA32iNRcVFAii3enUf7zKCaqfECMrWtzTJGr",
  "key42": "osLxF7ZJUVSeFK63xWTBuKpWiwJwiisHpPoWfzKzNMARpkhtEYe1rj91umsmGkCfDVeNc1uKoVbGPvQsvs43h5F"
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
