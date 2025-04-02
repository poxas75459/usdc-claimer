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
    "MiiL5zzo6XfxtUcXy4fubX2kYbVPRad1sWMpRmumD4EHaGGmLK9A6y2rvJLu87uA71Cy7QQe535F2MyB3hv4AU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cdhdnjx5MEeE2gGaSpghw1JcenD7zFTttmMfC8v4wJUZ3ZRKoWGXLzmp7WmBmiJTu68NiZ3KrsTd6hcK66TGgkr",
  "key1": "2eJvKiQBMULaW1ou17QodcTJgkyCykZdiaF2chwrHbbxGpygkonoL826pbG83ZDUWL8ao2E6pjCb3N9X3f1r2ogZ",
  "key2": "4T82xn7aAos4xeeiEnQMYfgRdjy6DbZxCZr9p3CpMPXCFt3LFn44PGMFM8Y5sqE9wpZbcServ96CAco1wUcs3A4a",
  "key3": "5pTh5iJt8Die1oXbDVTLx1jw2g9osNiCua6FnDuAwoABzjFodGSXk3XhQyJ3kyGpkJa6RYnnaBjHZM3EpHaMHU27",
  "key4": "3F1Cyio3htiVjnMWjS5kMg2qVfJ5W3zE5EauQfCmC6jjKgTjwRTPT2yZmT2Nk8a9Bo5nPPxb3ZMLo1JKieR9RtcC",
  "key5": "4dKLyoQ958fa6MSxaRybWK8z4PfCJUbXwzoh2iWLG2gW7k6gQ7roWtzbCR2b1bXhmNWNNsUawVB2vK4xLVUfwBKy",
  "key6": "4pgx4prmJBSid5M4TMrrcWqR3Xu5csTRa2JtvLfEJ5dEb4BUm3fT2YDRoqmg7mRYKsKeN3ha8u8a65bNYBGsU6bX",
  "key7": "TiLjt7MCzUdBaSVKq9FVBbeHHB6oFgWFPEdVJzF9khjBFrPNrQsRZa6Rfb9gtbGWBTjx7z2tdo2MZa269NCVnEt",
  "key8": "4tX6WRmdf7vMs2zai7M7MDQGxExJweqnvFeQfMdhRTkN8K3KjV2YfabuiRefFbF3CoSXC5hvXfqYkcEkfK9Bx3bW",
  "key9": "4UKFMeuF72HooQEbYMcBVTdZGWZ1LFFNSZ4LmQjNB2BMZ18RPihTouwc6CdGA234uuMLK2D2niPKDiz3br8JAsLA",
  "key10": "2jeoEZCmXPYM4eTodueSWFx1TLeZG1r4gRhzmLNZtgMtZVWfJAatgj9ytxuRQiwF2TCqaTmg2STXEThCNRevtvx5",
  "key11": "34yYdmG7Xhd4aezQMsYZJU6q8Qhvj65UgZdmFKfZGxTdK2XtLmiyMfy8eVE3DjeQ4sugQwnRHgiWZUK2di4BePd",
  "key12": "4jREnjDFb6KcsXtuLQw2bSKzNMD9fxorkB9zdQx7SoSGSskCYaTVXER4NzzFFqrK1z1W3fEbMieNkJhdvTW22F6x",
  "key13": "31U1CuyyXLyBqfdLbbTPhFe6UxyDa7vrJ6LFGNBoqNKekDkMnvirQyTqGKEm2sgf7T9hDCSoU2RJT3HxoJBpD3wc",
  "key14": "yjU5sjWpQ93sX4vpSd7vYdaF74aZDbTKZj6ugUeajGLkGhCL5WGtm4u82bDj6ZdJXHGqji7vujsK3GyD8snDoEV",
  "key15": "3GKkc5EKZMiFVLPstxSTJ1WrxRZrCqp5XEHsWZh8k6AjNrZJUSiq3jRyLPNigsxisHdsa6fm5JAH3X9YyuKj3WSc",
  "key16": "3t2HTVqK9wJ9hTQiTKGQC17Jj2PvuNiJ7ahDfstVWnbyP83eWY8BXNB6rLEMJJkYpAELMWWSCrpvhQU2y9VzR9kC",
  "key17": "5B3knJQrp7os2Npx6ignYd44GToLaHYiwQ2FR69oqakb7XhFuSikTHDfNPQbekSd4JyFh9BiwDKAt5n5RDWRJSjo",
  "key18": "Kvy6squr84yEHQgpZswc7zw7Le66CqSZ8dkbtfAANJh3U2NReENmeYNzhGYwx3wEXuZ27qbsfHX3frSdA62ZC1m",
  "key19": "JnE3sfZFz9UJL8MWn4qKSbFF8n4VLzyAPKLJ5mieGAM9md4H6aws4gmz5TTCb8c8RPA66hDbsWcjc5NqE6FUfZz",
  "key20": "qG7uRQoHnvXg6rYevL1JycJke63uhDy7Kk9BGjdNL9RbpozxDVdSseKkFmzRSsrZ2pir1Yz6gXfEkQkaUQVmDWD",
  "key21": "2tNXhUp11ha2uG93UA85LfxFAzYHV6QzdJscQeNCdV9XPMqfXxX9nnyoZ4t1J6ZwNXqXKFbG1yCKFyYZjkgP3AtY",
  "key22": "3b5i5qYbP2tdCPGFG5s6CJTy4EkWJFtJTG6h9DteasV9LAw19m87MLLoL4GQXgQo1UnCAiXeg357wBxkjHjH6bme",
  "key23": "4EQZKwo38X9PKsRW9HVZLjRaQ2uLZsAPWTGaJ56ARgcdUiXAW8gbuAsu7obmmqvcWa4DPFAfcqxHeGRCX8jYYEWS",
  "key24": "5h67VTy7kijs82QFD35U6FN24DuvRaSmMWPpZpVhdUndV8jENAhJW7wnx3HrAcPMJAFEFSwZp6PdZbKnm4567zfz",
  "key25": "5T6AaU5kyji6zCuBU6BBDxmv1mFtRKPA9HgPhqydsSFEfJfSoovJGfCEKc4btN4qud1vJ5HLpPct6mX2Ask2R7T4",
  "key26": "5U3zNAmkcpkNDTeeLtSMcbKCH6u4LRpfz7xsMvjpegExVuiHYUfJHxe8XoEXCYuCEDU31uXN3mS1kjwPNUXLbERo",
  "key27": "2uHcsvCWC9Sj5G8buLgaPgYcYpsDcbGux4ekmz15sxvTsAAS5FNccRzrHDeDxoV5eTJ1nkk8qMc2Fu1JUC6UivyP",
  "key28": "2fWWEPGu6AB52s866yWhkRdpUyv3SoKCLSW5UocRD6ezkPQZ9h2CCNGCaLTrqpnQ3aHnMnrEmGgVfuqTLspozR4u",
  "key29": "ZccRdy6TXcsSfsHiGSFqpGN8L9MWZB7f7FArZq7FsRDQyhBfBAJSXoWqEjQumy5srFsyX3KsXULpxUhwh6gjnae",
  "key30": "4SPXyhSEMNDpb4heM7xpt5V8qgV6rYHQnfRL2DPzyryKZN7ZfpKtM8QhEUXQQYkip84MoL6smGyJjYc6N84BePH8",
  "key31": "2dUKn3Lj9FvLqNPdhpRiTU5TseKN1GJNHDn5cibGb6pdvPYZgRTsn25bEYLxT7fQoUwXwuVBbJU6PpmZ9mvRSDKu",
  "key32": "3HK3xy7FDgzjvZ5hVq9yMyZEQnHjYA7rjFv6MT2hyTV3UF3suy8DsVLCgVsXXq7GR9SJf6j8x1hxfYLAtRgNc5Zz",
  "key33": "4jTjnyZdJ2aRTu8FYFza2rCysNFx1p8uNUWTCGCt4xhNdXQenk7UsS6LfSWw2dia58wD82bPuZCiebhqGBibCKCQ",
  "key34": "5hUWYes8EmsTXnE4bUAU57vvXrLYru1oBG157quyjHpAwEpRuGfQ273Pr5Ds764GmuYUbF3rJEspgHLXqZTBA8W9",
  "key35": "4KX27gB4k5F4EoZMLda1ufRrqD3SaXqcVgRxUXLmJutdDcfX1QBNqBZXoMCp1nhPSQSPDRMtFvjrESxZPYpA6x4D",
  "key36": "2oMiAQQrjLFNjSnn4JihwxLeNxZ9AvKnvf373JcSa3gzT9anV1e4mzRpi3Xrdno3L4m9qMD8GHgVgcVuZw4yEPnW",
  "key37": "3xHn4sZTpbwVPuy5GEszavwcSEuAbQPrpnQkeodVN3HHBAuF996xu2r88nEfU97YeQhymzwejJQC1Hyw6Rtvfnm5",
  "key38": "5ZLYRFxZFEtfFTAfKYcmkVB3mDMqQXgaMSVs8MMrJjKs51FMdFYjgTpLkZLwNYGwRZTpcoiED72QwMVYCoJXScqB",
  "key39": "5eiyWtM6xoQ7KZGbcQHTccqq1smkVQXSDCHAQQrdieir1UortHsCF1z2JEtWK5kW2chnRXTRrDMReze1JYGKzjes",
  "key40": "X22EzhiYuRSkMceLUFVKYfAG4ajpjF3KwgzprM9PQjYEhKT69YQN6aAGohbjXijxi3RevbFvLQXnuDgQ9UXHBpb",
  "key41": "3VPG4g7MRsKeChp5sUcSkuWBNF6jrSs8dN3JJTZzmfiaNw7oFvxaSqGx128mipUHJinVJXb5xuLVuxJ8KD2Xec4F"
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
