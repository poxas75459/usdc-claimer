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
    "5KUNZLu1QpMSNHcbaph93VaoBCNUpmGxLbfP3U4rD7NrVKX2EyovkYbMRHdR9kjGkVS4pWfauoLpaEYitUrS1xEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TNewBTvSGwyjt1FdPzDSAH9tU5GHxrgyTdYWtLG6FqPwF8AUAvXTW5nGWbhiX33ARyBXaV957oSaUmy3snDM8WT",
  "key1": "44wgqwTwjbZMtBEXkAmruaBSkhMbZnVP6KzXhaejjCUTVDA31kwG8G51Locb9Ly9ex7DHtfEVv1EGiosxAiJ8Byo",
  "key2": "3KkWRT8bfCp4gjB5jA1AVRyCuXSDZ9V8JBDo5JD7BLAoKf5AnrRxjoztiT79CuZc35u1aipjrJ45DKCxGV4PxNW3",
  "key3": "27GRHXCc8gT1MiuLVd3zqcLDiR26FLHRAteFUqphogXwixGrrtnQeaaQDzUnNaJx35oVm5JsovY2qdXFhNuNKiEH",
  "key4": "3pUasfCLot92gdZp9cE6fQH98yEnjGa3Fzpr5ddDWjxrwa3gBpfKeksuHLeToi8jTjEqR12SC4dCEcQK16M2GSwQ",
  "key5": "2UJA16EzZMFF1fEYVNvT99J7bLYPTVqiub2ygyXcE9PJro12ouwtSaUoiJnLvFJ6VNhk5Pdg1pMydA1JHUw1uykb",
  "key6": "5WjL2N6HqV98yqqgYcRuxGLnRZqGBdZft9Pws2enowshfS4Vv1N2888Kq7vM7aRd3rMFR6VCy6n5GHaraqQMp5Dv",
  "key7": "219eQ9XgfyVmDrtHyUuj4stUEtojWDYzYA5taxcEvKEdSg55niL2D6mnvf5C2p54QdkFzUCuBQ9HhDkvTpZQ3P4s",
  "key8": "5vsxcHH9WpQjmNBfNSaJzrxPhLd3BBcz78i7CvXZGEpFLpu2nxikDKte78Z4Zk9mUyiNudo3QomJfF9PWdwgYMzR",
  "key9": "2Ky7A4jvaVPt6ZGdwXHtahCNNmFKvweVgKfxUE1ZwmA4UKUxBpyZJjFJ4Pj1yXru78npZGtaAMLf2sgnFm3hkJkD",
  "key10": "5Kdfq58cWYmzY6gswqQRWwbtEyfmEpNPcpcbmR13KDEx8sn1FQ2xnqFiERK6c6dPSD3CkW7HxyY7DcjerfFgFDGH",
  "key11": "29J4c4Q9G99ibGtfiTQaV7MpTVWcyj37XWQPMudgSeZwR2qjCeQEeZBpe6Zs19Nr2tLa8UDc7WyxF1CVKvGEmGJW",
  "key12": "djivi2FiUNhpaWB1ysFeUEpXAm2kG48rEBaJpR2PHYm8RPxEukv55LVuB9DWtw7HodMw53eNm6nFrYZn2o66FAr",
  "key13": "4pwHP27gb5AzDXBaZKkKCoTyhzYgfyAZ1nQta75sFEWt5PsALqQyxdjxyTiWPba7q3breyB5t5nD4ARtWCvJA8Cz",
  "key14": "VZv2cbhyTfSi6TYkE71rsW21odgD3GoSBza92CBrD5mV6MyiKSRrJkAz2y27YL6HePGVBPaQvDGtqHLgreeFBev",
  "key15": "3DVUfSEEALbU1S437PqVZtQSHMFjhBvdfpURfhBahVXbk3krCjsJX23zkBDbgJZcAc7MVdvTFmd5evhyV4Wor2Vy",
  "key16": "3e2hoZvegUAc8X2dcLoX81KqEvwhuju4kwAACuRvA6U6gdvGsCohP9RzmNC8eCNfjm3b9LAqFjnouhLepPh7XpA7",
  "key17": "4SwR8zRsrWCv92DNfPn5qZo78o5pUzxnbdZeXu5dVMndBgKZkc4wgB9RgBZheLE8bUnLxVKGAkbU7m9Krix9bTUd",
  "key18": "4Wk6QMBsnFm1vUEsKtft9bNT2PjqxXrmrHCEu3qjqCuqa2tDhDAwRPQTSzgtDxjMoCMLbfDzkHxWpzBTuQoY43Zr",
  "key19": "3PaCwT4iwr1cNWkXVN5qABg4aax9B6GLUF2DZvJzWRS2Eq7katu98qyiwjFA5TY674XmuMaobM2TGPFkKys74j8c",
  "key20": "2L2RThCHLfqvbgdAMBP1v7jqia7H5umrDrpjZwd938uWhrsuhokRVJ8qgtqCCPTyg72Mv5vH3QMYa8NrgiWpFZn9",
  "key21": "2XCKDJ1hL8XiH17m6TBPwTroFyVooQfLXcSGJcoNFiAsTs1wiVe17t7GtgNzKker4HJxr9SR51yuxqtJJ4fXEgaT",
  "key22": "4z8zDRn9jdXwtA22TVukm2me1xMhpXZLweH9BGGHHBzpPYsGrRHeqrCqer3ikN1kzs18HG6KAAUG8Nn9tWZc3ZNF",
  "key23": "Wfo13HNX8EiswHyXVvLEd4CJ6Nhw5VstPU3Pogkc9xpRwnSVHWChWEx5uSeX1UtaaPdLEXjjggCCE1QHM86CBda",
  "key24": "4cNvfanB6JuKupv3cGPou2hTFWSQQ4x2EFE7rUhKCkSW7HS5aQQ81fEkEZUZH6JFWy5DH5y5VGDMMwBQrM2jjv5T",
  "key25": "eELdfCVAYZG7JPbdY9cWfRgGN6fxqt3uSG3PH6d3AQugwbrmNfHGLZLXzMfgwNMZE7JuhJAWYqXadUEY3XZ8a49"
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
