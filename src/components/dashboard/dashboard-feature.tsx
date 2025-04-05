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
    "23eysagB2CYUACMFgHyA14ZLu8vhxpuFMQphLsRzyPMWRRfJ6n6dBZv88KbGhTQqNb2WwhSvKgk1etcPRHC55gxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mz1wKLMv7f4q2FKzDmG9jH7X7BSrvtuL9xhV3CQzcnFin2V5bRFpU3qLKdk4e6Ezc7WAj7tY4NhJ7HdrtUwkVTb",
  "key1": "3pRPD8avuArGBLxYBTnTRTRGwmh8mZ3kkSthKP2Utfyb8h4sNLnPAUwjxveucZ3LeyQfo7T8ohnqp4GQGVew11vC",
  "key2": "5vd9xqRkn9Udvr55jvuUTpftBX393wW6hRbfkMUFTmgE5V9A8eaif12rEwtCznjkyRKFikiXw23XKq35aiMSJrVy",
  "key3": "WasdXyVXVk4vfLJ83K8AjrYNP8YCReudKjZ9aEMx51d8C4Ly8yMjo7JfNUkN2fJpViJjWSLhU7fXofuiChV8Mom",
  "key4": "2mfJaZFPzXyh8aQuab4m8TbRwgUA4i7w9jAF6ycvW9UGuLQ9Hmk3HoKC46E5L32VuQTct3PJqoAKcMe944axAnE2",
  "key5": "FhvhMbfYGTjMvtxhuFwPneTMjN1QEqRQT7jLGNwVkNwbVtcgCtDPVp9FrtweGt48hMZYhS4FXAM2ML42huJg2Ct",
  "key6": "4hHaUE7vzyBrDYpPPxCb9VbkerSBzknaYBb7anxFPCa66kKDyNVEthTJtagq5fA6BhZx25LdUuU5sWB1GVmnorK7",
  "key7": "37SUpNyxUD8QsNmbkLDDR3xgL2k1cC2tjMZEfpMrJrXi5zonThkWz2F1sZ8J5oCTJRPppuZ5UZPfnTJLGhh3bXWo",
  "key8": "3KVsnDgkvLDJVqCrmtKU9KFKEALupaS3VRXVaNinQMnAFMEwvv2hoGNK2BKC81VUzu9ZVFsD6NSLbTE9oYm6kNMf",
  "key9": "2r9gFGz9gApuEvQ5RCxpNXWFhcN7RvYeMWMbgnqAEhsdguHbXXsvFKedg1RJTv3ytQbqssJCS36atcivUzcY7W2J",
  "key10": "4qpXHVKdukcKnjF3ExtgzdGgNkPEvDZNXJsz4AnKpgCWMSLDS1CM8pxmpZfxQkh8TEVzYpzynrNnoTeXgfup19ND",
  "key11": "3emFL9ujwd4QPmzxXA2hwuAarRpc9S3mvyibN4QpPiCkFXP8gtgdMFL4gq83j5RfAe5uVyVxYzayQsTAd1q2SSEo",
  "key12": "uTUujzB8pU6Vtdiht27rsPBSbuj7i3AJd6fN3rC49As7mj9bunCS9rKE3GMvRvwLDcEfMEvLTGJvSnJbNkFEJmA",
  "key13": "MqcjZ5vzRRdQ1iy9AKyGQVxbUETUteCb6FegRTs1v8MikCuwsqojYBaS5T1KvE3madjPsfMbGzLtxej8LatTc68",
  "key14": "4J5WtfVGcsfEXyHokGccvxooXpeNtuSjTJbWXXwTWqsjeUDhAQqt3Se6WBhfvWaRogVyEJdxwjgXg4VZD2ivvggV",
  "key15": "3SKPygcfkcL6hBX4dQoxku2pv4N2WQhygPCDxMoMmXEKBPAF74KHRCMmoDmXiZfh6g9JLkVeKVjVsymbKvMFcxq",
  "key16": "cj9XJ5abFVinGVq1Xjfxkax3pm3TBtn69eJntyXv22kb4v3CevKtQtKUNR3T91DhmQWkRC3vPZ76fP5jNhtUxQb",
  "key17": "otoEntjUpDH91GdgHxcJrAYwtcszA6afeYpgv2RwwACYjm24JiNDtrL7PYY9BRe61EYm8WHm1gBVnTXz1cPjqzq",
  "key18": "3ne2GtnLjLzFJdnPLeYVkckEU5seCnbsRuzguh2e42iVdEpbSHNgpuSC4SFTjSzA2grbkUBTL43vxxgmBTNK57Kt",
  "key19": "4FLa1651rrJQUNatSgnzEeTLEoZffAJNt2rhVfR5k5Tfvd59ukKbo2nQhidbvCimHj2g1XZWyGU5U6TQjp5Bmn5r",
  "key20": "2ZLq972Ec5J8wqW56srw6BNbKCHAAWjLXQ2XCbkfjWBQf5JRiXmoc7c5kqRGDi5GKFpN769FBRn1X37Pj5CNiXq",
  "key21": "2Me96D82mNdnayvtjNBVKQfo43KWt1463TS4kvdr8XmjzeBVXjTD9wDFzUSZ2P2azBT32qaaPXsbULD1oujH1KPH",
  "key22": "5qrF37LhCy13FuszVzskLLjRXUp751CRYxs9tahJ6od2PrCwR86t442pPLHsuGeo3cnh4kzJ4fLdg9n1oGMUgmc3",
  "key23": "5WLajs8qZgQsXvswzx8U92bZFTJaVbMPxjT4C7xZT9a9qt6Uwsmfv4aUsRKCXDuvtS3Wt6yYMVLqzmnxdWTQEbh3",
  "key24": "35WqSynQMHW3VZZZrKoGBTkXdGSSghee1eXTQJvHAgPC8Q8WBgc1oHxb7UsrQDTNnu4psUwXErQtENYHS6NH32hU",
  "key25": "3YPseQRXMvYqHjAzAGiGWLqtvoNRJfqxJQu5EAaGhhqWMoiwp3KuG9B15Ja6cDP4LT4LF1xdVog26asYSLe6JNcS",
  "key26": "2cXoDkYa8PkjzbXfsmRNo7KchxNMJ9DoFPyZun7fquWBrEY9LJWz88RKNtEaUgRfpUsoqNSVRK5XYx3WsjDDg3jn",
  "key27": "5WKbCNdojTkFHhV5Du5xs8AmJuoYPxy5BzyEUuswSePziETP5LPi9GNGAuFfxe92c5THpWwayFEwyUw62wedaDKe"
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
