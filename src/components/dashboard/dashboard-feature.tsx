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
    "4U1D6qBMkYzZqJyW6yqkEjkawpVFC9aJVLjP9rjAUTjq9Cmy16LPjnDioCScwVcwVEoxkny7RHkAqpzwZJSfWtPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uYg2JNoxjNRodGpedHhsZL79EvdgDF9KHKeGKjXneh6cLgSEKfycJ1hSa4sm3CBwvAJNUktQPDuEXHPbE2bZLw",
  "key1": "MuDvMN1kDQbsXh3rQEMcGug5bYMxMkeNeJRQBitEe4XqXTV8mQWyizZjjvewJenPFW1A6jTuoGm3te5CzTpMMKp",
  "key2": "22JNUdWXFA3uHaYmmXWy2xV8DJ5fhv5aVqbQFYXmwzsPbLbnRBAejEjmg24M5ovhZZQTZ7T1P3V8n1vHJe4VWjj8",
  "key3": "MAxwnPHLqun44ob5bRqsMEQEJ2Jn6YaKC229qVJer4afxTPS6uGF12o3dcyrwBVxMsgHPe8rGtCNQFbZDYmAAo7",
  "key4": "2EJfEL36UrvuwfuCZPxbDvjq8Xpcs9TsNy6yv9SQrpiMe8LYBqv3jTgPfVBkX2CTf3e52zhWT1APqwxoEPZcx3Qr",
  "key5": "5jM95pKfynxQx3nSPdfvfYySzUShabhZqEeZ1RWSG8ofMbDvpuiikmFRBwdEZ1Wgkvq46JNGujQg7Kx9JC94cm6n",
  "key6": "ZzKRD5vZTqY1CENgnujrL1eQPXLJxzAoTU3dxdg8XX8Be757qWCXujsaFvqL7i25rooWoorcn6xUzBssVbSYr2a",
  "key7": "CWGG8o4S9vBoij8ssop8Xh1YT938fWMGdTrXYEgeKftkK7QvSJ6S81AUAq3kPUBbGESc3Cfe5J4tUXqWPzWPxV9",
  "key8": "2BhMc7TeHX4aHREn1wjcS9a6UnEGzy25sBxcunRmzYrSvWV7gyzzaHPM1hsnDMNkbW1g5NrFtyHoqBG29MKDx8ge",
  "key9": "3xWF76dFPcWYk6tHZzxMgciBnEZthLmHuf5k1zC5aSxzDbopvAjS8SW3VycQKqyoEBTrgjMKc93PyAo1uwbEvrcP",
  "key10": "2gTiv7QFtJk1eb9mbMrPVVu2JvdE6oaHqighjPnz465qrbNcYa1KN2gxWeH1LLeDKgYbR7rekyz2qxjpbRAVyvx9",
  "key11": "4HU4iZbuWvrnubNKV5uVP57BTcSdCktfgTaWpL2xfbHQUm9NPPKdhZrBKKPy8afEfBFeWb6yo8MANJvaigx5NCj9",
  "key12": "38HBtCK6NQ2CqSLgoLaubDK2NYJYZehAv17Z3WwRAdeY98ocVtpzVafKhLYCKPw9DbzTKzcSJiqLHqsXU9RibETD",
  "key13": "2niGA4kftqJ4nbURkCmrUQ21TeQ7rqeqAjnTFdm4YFiFiUdiYG3ysqeNaF4Eb6hLQvVoVr6iEoroaji7sX1uuhXB",
  "key14": "21SSAZBHagSsy2KxNHqfT88Fz2Yr4svhMsPmzD5QutyMrrs2BkhrtxL21dTajNt6y7Y88Jh41TnMeWW5SZaguSHB",
  "key15": "Nr4rxqT2JmWaZm1WPfNh3KLb5ne3xwfgmfCVhSjDFNkRr4yA1eXZBakXVvHaUnMhSk7L6ikPfnKEHzf4K5tocEU",
  "key16": "2dE5TucjncvaWUK4kaqdZYHkF5wvQDWJUhS9YpdvbCXdWL8U6uducp1sjtJXvdvYA8tpJJWkYjV5QNDtXz5Wz1pt",
  "key17": "2o9KNGcGMocKEDQxMpFQ6tjuZFcavVYXW1pY7ZAqJwC6QhcF3qhkn3s6eaM9g6tL5TZaqhSKwXZzZq5Qs8YE2ZQi",
  "key18": "3UVXR7Kb78sBThyyktKXaGJ8EnaYKKx9jbk1eLgnhXPnkQZiRfTB2rjfZyX8WUvntYjc5jcL57Yqvcbh4V9p8xpH",
  "key19": "2g2mghwfGL8bmoQ6PLgim9J3GXyde9dms1zBLJUtVWvm2vbACFEyAaL7kZPwn6giQKeC4DbF7NQzYwjh7zYawU4T",
  "key20": "4enXXjVFZuLaeHFdch53NZFd4DsWNUWaQrR5kCTqph8pKaqGWEBdeh7VBambeFakTQ2DfMKrzXB3rB7HjBkpEkG1",
  "key21": "5fJWudaqbrqT7mxjtJjZxUivCBsmTUpmGXET171st5LeF5Ku2oHoLygWbbdorZMgfJVJQ2qoTfmbW68mR3ZUDZBw",
  "key22": "6K5YTLa4GXxed5Hx89kDoh1p1inxmNatyRe3t7PD1B6kRBqJonH1f93J2bLWLa5SsgoN13wso4jVp4XGZBTVCKc",
  "key23": "3K74Lob7faJdfPxb5vRcxHP9W6Vd8GbHx5xuYruRptJvNzEhHxQvA4gt1f2NiwCxW1Cpnxkyq52pmYw1bGwD5Eho",
  "key24": "2muizYnLgNW9SRGzu48bcWJqF1fypn2xWx2vmaHKNZU3HqeSRyfSykerTrh6uPe4ueqY7PR6w3AeVrsQattFvMbE",
  "key25": "15FGhQErBYoehzUj792KHpUGv3a8MQncYrMvXqUVcN21yK5mtJPXciirrMdEu7dLTrGVKuEGYnSUvNyg2bUuigs",
  "key26": "45piam9Cy9EbWch32j6X7C5bQXgFpeNuyjfvRs8jGxyXEmH43dU64G9w51XaJjrBf5b1VBByqreZ1exVKgEX8Vgj",
  "key27": "21vF8zk4ws9caripgkN6uYjDeYdbEigsxTuYRhEsizbRu3CZNomV1BHtj3ggCuaAnYrjUzbTSde8CxCTXLrZo6Et",
  "key28": "3hTVJs5NhwqXxhUzQpwnHbPUVf3r5oUuCf59NxXGpwrRmPtdpqyDsADYDexh2gACibKZUPNQTJgggUpWKn6SPFav",
  "key29": "4yts9ZDyi9iA3hc19TX7f6e643FVDGaugepEAyNPBDCvgon2GjkGpLymzWpicyQ3Fn1r8KuetJcMDYEFNbnqoUqd"
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
