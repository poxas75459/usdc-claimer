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
    "7Xm4emto96bTTmF1vPbKCghVw1ji512vezWjkhCtEyo4SaoUyY3eG3Kofqaf3aix6jYkEYVZVMPUfcV8RcXGuYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qbnXNzmCmJ7cnpD1w6Pjdh2UZMQs4JDNEbZDDhdbdPTQV8i72d12aePfNHqhk2ZV5wMRwjnwBLjBBTqPeQeiLzY",
  "key1": "3kkPjDZLyWZ21GPkxTXJojqPpzeaMU2LwUrvS4fZT89S76NcopGmhuwAC38KfiHQCwpgd9fu3dJb3FjqH8iJ498d",
  "key2": "4PBrVdC6aDjbi81DQq17bwGqUSxiHiBFyhE9r3Yxb7LahVgkyYeEWwLqv92FLMk8xThTD1Vzz7PS8ZGXVsxSTcJx",
  "key3": "2QBS8DXiw9ou6SJahMeR17YQcLF22BvD2Ap5pK4qkLvCw8Jk7VMDrCYcAmSDzPmnGaGpM8fAu4ymu9XawtEuszJs",
  "key4": "23UDPkUi5UXLgbDFt6PnMoU1vicDGTBppc8wztPvUBBdHhPh5iCBrD5PPacbuL9AxkWTZ5XAywa5VxLLAcU2X3GS",
  "key5": "5HNuvd8Za1ZVd3EhaKbWR2SPhZnyCWTfB1uTZdUSpBsY1yrR6uR5weJ76UgaZEBiUamPoNRRAtATeiBsbwALSRM2",
  "key6": "ccUpo2TazMLPmfEGhLangBDg7YcEg1HNUmv1qwAsdFgPMmCUiFw8wH48CcnaFPmnxvqbev69jqiH4fy5Lqm8iGw",
  "key7": "3o12gmQEcdv78RDRJod1XAFm8dfxhgRofMYhLbFvRPW5WFHnQLnBMSDgunQ73YqaTYErdTrGL7cRhvJvxt9XWTER",
  "key8": "24UaddU5MrSmggt6cRuGiw2pKrqbXqq8etVyx6nHELcLdNVHrhmNTzuSe4pxot91jXC84atrihZ4pdpUE7mtpK5Y",
  "key9": "yq5HFUe2ygvNVY5C1ybTAiuDZXBoJwezCm5GnivofSox9vbprjE71n9rpQLeYNRCZZV37CiVfMuHXtnE4iNontb",
  "key10": "4EcegC45ydtgJBmrP4XMUMAmVAPQtEez7fQquULo3dM3wq46oTEseRVHcNnfADj2QZUAKHtQaRgPtG4Yuc6GLBwZ",
  "key11": "agUe8ujqev7nF8UJW7hJHqMrqmTUKYZX9g4Nb6N1X7aEeeQG8coxyvzJ3LZTUbWirH9DVdHWwePhniVR3rJKJcn",
  "key12": "3ukBCUrAotuPzcDizYCdWJ27Wis5zYU9oqmXDLAZiyvDETDx3iXHJ4Sr74NWoX4iHyy7WrM9s6XXvnCaWgSKG8wB",
  "key13": "5thYut2wLrtDgA5PWNRPnLvGXBEKcTZfTiiE9R21bC6iPCk7d5k2N9zLQXRMMAcncFZmYo9mschwniPnN3p3J6BW",
  "key14": "3q289gy5oqUnuezFw9fa6Li9RTFkU1H5PomhjKYGWLZ138vFxhwqDz68MmUh8Hmb2G156kT2vnhXZg1yCdhVsyJM",
  "key15": "38D21xGdaA5sfHugVqhfn9TGWMmx5Fvv7BjP927DMzigjfaQa6KSx7BfCXseWoXb3rSHETnmFw3KFZcF6LvAmdZu",
  "key16": "3D1EgwGPdSUJizu3mSxFLCUnC7NqLf3nza4U2oDgYZvVochB5TJwa9fRbgAMzaFf7aHwf7CmEd3G73FCJDVn6yeg",
  "key17": "5qFQzYsqBNUKPxYqfH4nGHPAGkuvuvRnnYd6x7qtbHgiZT9QMPSnhrWt3B9W9Kb1CCFMueZt43mHkHjVB3udZqVi",
  "key18": "5p1zi24VBPee7kDHsobjeEuAE6Ak3wKyY2bTavHjM82k4YueauqvpLLQy3bUn11P9gdayBkA87pUvsSA2K1Fqw6f",
  "key19": "2XvuX73N8Tobdp1Y4U6XkJszieqzE841tMToaKGizZMiFiMzxgeXkDnuKtaVVyzugfx4wE5SjUyee8Pnb1ro7BoD",
  "key20": "3ds9ytA8YSshNemR3W82jTfdzrbM49DseRn5rL3Ar8DjsQKY2x5Jz7URe6KyWKZy8KmVsP9H7WZTeoCSLviTcUeM",
  "key21": "2BvZBgnyMnYtNjEujukghujBgHYoWWouTEyhAnLzMFU53AgQb5Wi1nQPMsM8quPA2vbSp1etB4y5DdoJBhHK2CUo",
  "key22": "4qNnRZ378FCD3LtTWAqt16XUDTf5tbXub1wmLpYDoe4ovxuqUvnUYrfBpCh4S6JWh9JiQ81WRxjQvKMHCUmxjqN1",
  "key23": "4q5qYiy7Ta3Erm2vykhxh5hJD1ME5iBkLJnv4X5FMNLXmTrh5QGCEcXR6ZfU8Ed8xfpH5pPCPfexa2MmP1KoXiFZ",
  "key24": "XsMWoHrP5AGmDM6WLhzjXD3jBUcPrrpArtWywxoYpdgyuXnQbar56fktEpNbACM2JjoEqXr4soaxmH3RnXwgGeQ"
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
