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
    "2uMjCcoLnPARKFm2j15rbRhKfeFDMGtbcPPzHrM1poDxurhm7BqcaybNcTpY4hxRMRBghuzNUvtjEtijepbn7wwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EFLdht2tQzU6KBw8d4ESxapSgAVLBXkTXmepLd9eFxgR5n9ogGSSmcJQeJ4ZWnZGUui8edXkNT93bH9qEurDK7x",
  "key1": "ZroARRbnUXAjoTDMQBw54FMug9Bx7yimCrQyXqVk63iNkAA17ZqeReLycuKtKXM5E5xWG9D1t675PvMQPA8eHYm",
  "key2": "3jFefNjJ7UyfPTASZFnacjnNWGdQxyxoNHF3Dep7UjJpXmMybTtk5EA4M2MgQBgAbEN2CBdhjdoeaeS72oJK9w3X",
  "key3": "4ZG9LihpZzyQEWP8Hc8uRXFQNAYpcQfSJutW73f8JD48sMvdpgpQizfEomBh42ptiGgT56XUQC2YbECfgNiBBdFa",
  "key4": "2ddAntb3fMUdkYD8UEtR1VVjuDFzcvWYnPK86NhcnAQpVCqFFsKQZmNQjkEw7Wt7FNH4sVLwgesQtN3BQZuDNaQn",
  "key5": "4dM6aifbpRHEdo5qYF1Z4k962aoaeuRnd3G3Y8Y4fsbudNzvtT69K5ET2yqDmDtii15WmxAMPuSjLnDjbEpY3we5",
  "key6": "BPDdUJvqkAUySyFaALfmmHDCCygebcVt7nakuUJr9u5em8ZitFjLpXfbR2RufVtu4Kigsa88rLKJALfvqq3SiAg",
  "key7": "27zPWNAfsvXx65KA71t212GVUa86JPJAmBJr9qGHWPRmigoyGxuAjzwmZDiDZyyLDttk8SF1wTFWdeLQGJAk6PFS",
  "key8": "2u9Fd22GGLZxaLN9g4w5JMVMsTUo6j588YXTM4qCm3sCYLwzZQtUMqnUv69qjbArKxCgXzH7M4gAnCxjRky4v48V",
  "key9": "5ekkJrj2rmFf7USgeokYEeBwJXLLizWGvBHBFk9UsPQnyWQ677endUXdaLr9tUcoAtaDYszEQNQaTZVZMyKg9q2c",
  "key10": "4PbekFAn34Emz7Di2es6Z2yggnAeHsUx5RCWZSTeBWCXBCKeGyiskhE1UU9swX6hhzGynKDdn838Ukrx3sWajEKQ",
  "key11": "47qixsfxWB8vrNLHhUppD72zaNGyuBVNtZG3F3EQaFoKMeSv2wqXyg4Xkwebqd7Rr8DGTeT7swRBEaNhopA1eWiy",
  "key12": "51gaVU4fN333maFxGC6BtS6tWTFhzMzfPmoFb2CrMhcVLEJP3g3K4VLRPZ1ucqrDZpzmtEGZ8WUuPgT5mfk31LE1",
  "key13": "fnw8zyg1TmMVT1qroWyRGmUERkjXyvsLLoUciJ9Kbjy5KNPQy3ZdYCwpSJu3fUXCHvCg8jpUFbBQDzf9SqhbvxQ",
  "key14": "2ewAwvCz9Z5SAFSg78DeV2Nn1XcgofdjTsRZUa4HEwiyaa9dDuP6nXqViMerQYgczFtSnksWexd7qFXuSR7v53fL",
  "key15": "3BWxFyMdQm8Mrgd8f92uzTKYzLcPuZ7YUrDCbn3VVKfZMHX5LUwy7uk9buGetTi7XxtM4PR5xVYdH9V4Mst39oKd",
  "key16": "3miRw1PsYurTVrE1MXrhCwFLBcoekEmNa4FUTPMc11CqjABRX54sErezjXuLueJGpTDT5Ywh4AKvNYsxCkjE118Q",
  "key17": "3irs9HxX1Y5ZbdTJiqvDiKPnwVRaRhjsvdAxqSvC4EmA7pgAMpihyVNzbirkjeczRcmEBPKoqTEjXCNCbp1SvYCc",
  "key18": "5WmYCTq38DyT7wAWeRXW1wMMM7iZV3bs9fEbarwktdTGjgZGevEut4WpPFR7mhdUxydNmywg7xgR9qWY6nRpvrcs",
  "key19": "2VvpxKUAUxtAiphDGbEnUpQKc9opWHDYBaaW47ahpt1fKGuoW2gd25DhoDoLdsWRrfPGGczo5eL5aE6GFkLNCfAf",
  "key20": "UZuYVz3LAswSQQ5p2XgAB6kmMKgBFT7iS5pijH3MkiudzjYTj6AJuaFn76bY16E82kJyiGuPy8Ap7CUNcoFPxdy",
  "key21": "KSt3anVVFrwes6hH7SpdqSQNYWLh3v6Aw3R4Pkg3xZ2LjwrpNBpNLyNZPWERcx22hLsVHWb856FaSVevrGBox1v",
  "key22": "XJFyMQL2PJ6oCQw5BsZqBZeF6nH4UeMvSfTJS7bjHYiw7nbHn6D8sLKg5BmtugabLUbLNVpjmu3wJ1hXF8t7Uuu",
  "key23": "61MkmzKiJSoohSSaKJ9E47kZm1QGpxR6WCD5wxSh6b8jCXFGF7xSuWnUWL2Der2hdS7grvocUpwJ2NYr3bruUo1j",
  "key24": "4DLGoGdL62xJfW7auTzRmztnPkY1W2wWzrJaLd3RivyGEewmx66RiTBWV5dMkubPib4FaSMameMmvmJUX54hDd7m",
  "key25": "3zBvheobavZ7o3ehgxtBpYJiSRcS1so1FikqtDNomQqnvJuhNscKmYrvRDvdvEsgpFSGfxkfqmV7rVPzqDLycsg2",
  "key26": "bTsUejkdHd66yv4feTrpfCuCu6C69gkdz7EJVezPJC2WcuwEWPQvGfKcxr5hYVt9y2sb2bXFcZGi5FLZudUSCM9"
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
