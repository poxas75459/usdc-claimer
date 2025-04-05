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
    "4mbtvrpNnDnA4zEt9BXpLEexMFvxwcFxdytaPpt9dgtRiTbHaeUo3YcpjKzSy4bDqhe27CJXkjbZHXEbjpzNmJF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eHHJuisKvxPKrQissmWRbCn1TYJPR3KoXKTUyFUjgtXEZ4jrPYoeZejyDcZ1U2ZxSNnYCx8wVxRk42P5kPvptD1",
  "key1": "3uby9XwEEtZGUf3u11nUYWrK59MQowFyY9nSBsLH7Y5AVAWZmm4qARoTToe6VEB8sV1YssfqHD3vA8oYnFencwaY",
  "key2": "46ognxqQWNu2x1cE1qKXo3VaomymXgWXhtxYhRm4q72sfmCDbAtjC7v21h6RMsBGofwmPDUaTCaNoJe8Rs2G7xVb",
  "key3": "8XcYPG24yGKaXB4EVuXKL9eRePBw4ShhTzYX2DJyaaP7QdyHd6EYdnBi9sranmWF3Krg9hevAVb9j7gXqv2vqKc",
  "key4": "5XMXp6xWz2qCRWqE7epYA16MeoUnxTwA1eL3NQ3EUnfwiVZJveuLrC6ybndhKpwyE19UDyV58GziYbmRfn89WhPw",
  "key5": "3uxoz65H53pCBNEpsXRtWJBrB4KWhAVschnSSrrxZ4qYmJSxSYAGJVFRecFUpkHvMUhL4GHpfebVCc2T4jNtmWph",
  "key6": "39tksKU9hpRfELX5cXwTWWnUGWURhSFJAYfLt8kmqKervZixBkoe8tSzWLdhvyQRzsWucS5zpp5HP2FpE8KDReuM",
  "key7": "5sVeNBphwrzFeWxKK3qVYL6LH3izhudCVyou7MrxGQprNknppLCyPjGBCtQmsX3t1AUSakNa7qt9TW8iHGGfTT2e",
  "key8": "3i7cVT2oirgfsa8JYNG3FF4LcKbLzbc7SwS9nHF56K2H2byhqfdLsMDEyHAu3XAPz6chtE6n313amDJ7gK7tyGGN",
  "key9": "469qx6Tu9Kz6WGUFq7LcJcLjeejYigjVbv3Ys68zkBwTutmqrwubtu5jvxwRPUH5NbWcs6WErHy9XYjeEELNMJSw",
  "key10": "XKrhAceHTGL1LdvoMdeTqppiRPeQE7s377d1UbZriWXFXiyhSiGwAEZtTXpTj2CpxJrcGTvfANJig3gERnP78qP",
  "key11": "3KF96EvAsv3MNx5PP3ofkcYhbZtDf4LqcFq28imTuW9Z51TB6eYWrfx2CzK67PozfjkWL7bT5rbdnkNMAS22Mpdr",
  "key12": "2qH5YA15ZibuCb3YvfqWrynJh87gTVXRKKMQE6zqJaVKvBMnKtYKygvyqu1Txyb4nArs6DVTbcPZugF5MGDCrNZm",
  "key13": "5mHW8gpfPadgSF8zX2pvq18NvaueELmtF2YVYwT66RjgV3pUYC3uwbo1zxkbxJrYYU9C2LnybVwWBbZvKa33TYaz",
  "key14": "PNEScDVgS1ou1MvEgL5F8HSJcGTsahim1yBQzBVkwRkUusmnjF1YRSVqY134ghcUZfZkm614DvYBTWBduUa58h5",
  "key15": "5MBRGqWsfcadBAMHab4hgb5srmSgvAbiEXNuMJKcFXaV8U1AaGLbuht8GnN1AX2KFFLbTZeUwPCbm2Bvg1k5AaFB",
  "key16": "627cSzzPo5kTA5DECddgVMLybhpFwAwbrpsswMBgQ4cJntTsYGqmV7wpuQt4m7MDAbUg5BGXPRuPAX2WEQA2CZef",
  "key17": "wRhKLH5yeJsLZiBoyz9yULafDKe1GwRoUz23Bfai5q4RW2HSqJSGWSTEv9mwM2ZziovSoTpuG8dQMhRUpojFq2a",
  "key18": "4CFnSHFpnTnQqBqcZwYfHELRHBkaPUhdyBoF2hkmhbGd9284QwFTJGfY495r9Pn32n7BfMtBkTk9WTLksizAXVzS",
  "key19": "21p9JBJYuHwqurE8oXGdqMQW7P1aow44ccmEvg8oDhdVw2wKS6tw8woUtWADoHZiWGhhUuPLyG2b7piy5Up4S2U1",
  "key20": "47Cd2NMbvCGvwQx7hVW6EuDokdfz5B5Bg7kjA31vYvX8fk8r2tF7KkzYYB8kmWLVUc2tThuANgVjJbjxYZa5B6UM",
  "key21": "nypkGoKr7JsH1jpDqmii8F4XYVnkPtwv26qL7yaDuLD3PWKeDqTEpBsuZQZBdCJsGBs5HUWjuMAWUCrFLt8sQmC",
  "key22": "3vPhhetDqDBTamHy2XVepXBsaMtfd92SGXTLG7MPdTnxdM1bXjwrVjbqfGj5h1hLjmafo1F74oSVQNJksCDKwa6i",
  "key23": "dnV5CBACzwPgShZ7S8LYgBobHCAxwmqgFpT7RsVW7j9bV5uULRwHsqYMUmiifb9QBXBaZ7A4C9y6ueqCp8GeQdS",
  "key24": "qMrqTETDkoQL7ap8ptgsdNbUFK6DeAiXWcyqv1gDhK6L9uV3WenEhoephzUxDTMt6xkPoLVLhTmrmySGXQStAw5"
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
