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
    "2wtNxjZv3VLs7xwb4eXC5i9ZYEScoUtEUCKnASVBLVi75KNA3wXpBiN7KwhTL85cgqyUH68q1RnDGH5y3crm9z5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bmQqwXq1JNfiUNqg9SAfMXqSdoTuyk4zQPVF4HJhQGf5qZsiUP2K5EcjEyagqEJyzWAFSupKPY1uwhZWHZ4diNr",
  "key1": "4zZ3A7NY6qfhxUhR79fugyH8MwGffagoaANCFSg5ttJaNZogDd7QGNSMR6dTbGx6rtFK5Ui19d7y3Lo3D7fFZ884",
  "key2": "3iVcC1GjDJFRxGiQ9Xhy1C8TYtqD82bLFa6maKZH8KrL3iB3BuqSde19tfKvwrPwfsDDS25p9kRiYaNSXf6e3PCu",
  "key3": "2PyP8c6WiNumn8xj31gykmx6p8fVGcd8hMrNaeYzutcARmKoBUsQwHkeaTWybBUnWKBiQzPfmBVs5a79tpoMAfkn",
  "key4": "5oaSPFWyGyHRDC6xHFN3JBYx77T4a5zhSfPAos3ADeyBbVNjQpKxjukSsdiFxmidUvRSDJpsR2343QtFrRr3Aje3",
  "key5": "4TCWgLZidRdyGn9m5VB3w1edsLWSkELk8Eu7JWW2t1knkS9DGtwsAMvATzocDyFnyKZN2BExYr83W3Y3PHti1XFS",
  "key6": "3N5jN9FTL3TvrjGPxPp7YFGehmmzUJYcQ6iqXkJv8UiDxNG5ydUEtBVqdQsr5vtBzgA16ot3pUc98RoxT5qKNf4P",
  "key7": "4Evo5v9nLv2Mw2gU8pjm3xW6YjcWRebfpSNh6zdqpeUxCttgCyfG1PXkAVDtcZEr36PSFkp2iFuA1HTHKZkXGTHV",
  "key8": "2VDW3xEWSTL31t8u9DNvPNsAb7xBYb9Pj2yaFaCo1enwZ6SEezCe5XFSBZdgSseJdogXaVuTPG84KfTTjpDFDohT",
  "key9": "36HshGaAaR5PWLc7ETJTLciwHrvwUMviKF29RJ9e8ztyPCCg6beaNh9m39cAhrmYSFaBGx2PYRimGqgcwLDgHyHV",
  "key10": "3a1eGCXGmSLwABx5CUAesavo9mV2K5hzX2LhU1xEjNz8MNhXxSmPdqhW1V8Z8bFi17pAXCkgfJDnTWWKPpZbE5WK",
  "key11": "3RNU4fhnsNamweKNCJZF58pFjCqjMu2bffH8ryiuSSR8bGNbDWrQpDMViYSPXEhoPYoXjpoDDA84yVKdNQg995vL",
  "key12": "5SNUFbrn7RabaRyMTDCEbLFgkESS9NKYctJ9frufrzWp59gw1z2YCay4NhjfsnQ5N88XvpGd2p4n14PmVFsydshj",
  "key13": "2XeP9GhG3qUsCYyPuiGXimX5bddyibWjZELoTziXuxaZco1cDVav9PfftMWPnCETDdLn3e7HDXGNJ8dzwjmd4rLQ",
  "key14": "5sREtqFeqp3mBKkaJDEr5oFcVbftJtvxDBivH4ZXmXUTcGQYv4rgf8XiZcVUrvMkXZz61Lkt6tXyrGt49PU8Thyd",
  "key15": "5S7jCyx4e8NCXyc1L9vWXx7xxSWm2HcrRsW2gpji52Gw9JiL4b6jNknsWSu6JPfgnDTFa9TjK1eeWpucGoWCiZqt",
  "key16": "5rgkweDyA6pH7XRySgtjiANFD2hDuqTphKgczZJMrAzAxCDS97c53wvYQRvpyBHh87Cv63eJxD66iLoDaWrfo5tE",
  "key17": "GceXCDMa2Ch3d5cBPRhPG5MHHaERaZhq21A3tKqDhFNVcX1rMTartyjRkg4QuZQ4cmXXayvKpmwRijJVQVSHxFU",
  "key18": "dKfAqg74SE7Zg2qsV12Aka5oruDhTZJrv9jaGtDV7Emzac7GUc4RaZfso15AUUuRn6CGBewikkC9ZCbYww1j249",
  "key19": "5j8i92wUdwxnowJ9ghMMmkYv4Tqdat6t86oZzseaWr2bsvVTJs6qzfiLD13Y8RA5HHfEvyYRTFVQ7nMNesfihRz4",
  "key20": "4wffq1yQQir5165p5mnZynHLjGddLe5gN7b7MndtMvFGMcpBMDZQxDMEUZTRKmzxj9hqPKyFcR2tizpCw8BcYmKR",
  "key21": "4wczzEyhSn32pYZTXuVhYMuwAXDrGFuvPYJHtriFJrg9QWfVuExabpc23YyihRtgCMom1zHPFu5WJ8d38oXjLj7z",
  "key22": "4R51v5FqNuDvbNbwoFfBogeGJ9oBKniPwYXoSxBhPh3sFQCcjxgDzccXUc7YYXT9n91WT8mUUV4FD5Lsr5jRtUKU",
  "key23": "2hiNchqvQcZXJ1WJqYFNnST3yRcCmn2x9T2iySeYt5EZaUpgDWergu2E8g9EauE2q5N5Ng4yHsrJdoHa73ePz6Le",
  "key24": "45qcoiFwfqc5XGfmd69dnFAV9PkBmQDF9aFqadNkwhmBD5D7EGqvjnHA9WSXdSTRDY411niEFS5fK8TGLaE2KH7T",
  "key25": "46kPeTwxTX4D8PoAE5UWWHejnT9hLTExM2hbXWBvDdgGC2AEdeaXd8k9cNU8TroubmTv7361Ad7Y7X7MTAYkKWdG",
  "key26": "4HvXhYMthDa9te2btP5Un3tBgUajMLEZJ8g2Rtk9UHyj57xqG2JeunV3uTi9QG58S3Eg4fpeYgeJsifhDd58AGcC",
  "key27": "2Kv4CpzyiHiHJWEa7xs6k5JqS82JJLskuniAw7iDMETHzNo3dWxUjQ478awtP5gUnEa268fUj6jDgXDh1tRAVMrA",
  "key28": "HtcPwEsi5ANv46rU2Cs4Qp1D2M8dFLkeh2roAk93BqzdyypHzGmduDKv549nZX9NK8u43d8K3Ndx8xm3Yc9gZyC"
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
