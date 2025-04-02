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
    "5MrvV1czRrPGFWuQTAvGXrWVxw21sv3mMuJMZirMnYFbBPZjJFpWPPDEodf8nExyMK4nnW57injqma1TtXpupKXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2226VpbdB1zazi1Hmwyeyv8192NW1gXyL8FtaEg8R5WdgJEmquiyqbGKDDzWbhYpmFRPH3txxmGKV4E8naRMESkS",
  "key1": "2syRZv6PauqdUZpcmbZ8zEupJ6sBUxSPzFXXdTPBeQSsLu8jf7vEMeqkRzzTza7hn7ThivAVKrfWmNSjPUrkADHi",
  "key2": "2Rp2HN1zXo3XU99M4zqSN9TEr1VnbEWjkpqkHXs46vicxbwQJYDig8jeeCddZJRpzaVEjVFzk2efEiVVZ1UZTaYA",
  "key3": "2FWkDqi6fW7769nAMLefruRp5vuHS2awf3fEeqAhvGBVgG9UZTddSTEcnHpt9bYErU3SwoKexpFEmmdTjnmWbEMW",
  "key4": "4V1s38AJnCdvNvUikMMtnc1JjKw2PMLLVQx55rmK5cnFGn6gmWE6QoQvQ6Faoc5QxLBQyNvjYCzf594AAVyFgj1s",
  "key5": "dZjMfomf2seXjNF8tLynDkf82dv9ZLeLNf88dEuu9r7s8pdXzYe3i2tByo9C6qpFYUFrQ1kCuJKxNMhQHMYdsbv",
  "key6": "5A6htPBaL2qr1LJWhpKGQCai1PBrqYHnfk1AdLngqxMxSyhxGkfQPunr9GQUbgrHWWd12tbfSY1bFN7QRLMw1uFo",
  "key7": "3j5FD7a9ceEfzif2Daf7E8nRWHmkWM4KKeAHYmnDtnFyTZhVWo8nR2QSpUYcftm5B6MjLiYFwwTGM4SY9rmR4cP",
  "key8": "2T1juQTff2vnzL5A6Ay4595kZZNd5sWLkekRTUxtHU26TDV8gtGrxVWqJr5wibK9C6DHpUDebf8sKdWG7EPY3RHc",
  "key9": "49rF5i6crA6UGfVs5HaaJs4RtHJDPxzLiFfGkgeWepggKJdPddvp2tLdkevZwYgvGRCjHsfJGnb6AntuqK8f2QCk",
  "key10": "nB8RmdEGUbpPbxAbVm5EHsYbga9fEiRAdH5bHAktRK3K3buoxmtr9ZkiELRZqrgn7d7WEK6wzvykriJ7zgwFiGH",
  "key11": "3Y8V5H6iLjidYXdde87ydB4b8zFnyatAtWeHA5gtfg1V6MEHUofwFN6VEghPXQJCPXqhLwqieKT6hAnAEQHSAxdS",
  "key12": "3EJ6tCr8o9c88QKKz1GxTA1NesZC2a44bAAvepndeypVwaQUitdAr8VMQZSMNbRiAxdG9NALkHsqUr3TT25w6erY",
  "key13": "3ikjbgqMbtuQ46DmKLxtXjYo15S6WJ2u5oNthqJnhueoGj9cpmcz2edfDtSxH6C15koQ8MXj5utrVC68DRgSR1z2",
  "key14": "Y23A3SKJP8zoQnBSRB12LTKUCwgPrUzk2Y1DV4Scfyc2EbjGGvNzpaTJn49gJsZqYmhwngYYoooXiDGaaJnfDcF",
  "key15": "5Kk6cS9PShZGFTYccMuQ5WfykwZF9zaMCq13dDmbkZK1doNhEGuMb4C9ns7tg25U5fN4ndHgPwqExjuyx4kYLERd",
  "key16": "2euLDfxKyxC1KcSzGQp9ANzx34mMtVq2uyAKoTtGhUYGy6157DZFKBB5YphDPyhj5UndFcb2HsW131Tuf8CKd3y4",
  "key17": "5Q8Z9VNmnrHGZoGtiZEsngk4Q23pSM7jAxJvyrfhBMJjYdFwtYwsbELoMNjoHTtFYWy4bXfek6qD8MF3KWmHPwp8",
  "key18": "5Tn92RzXL4bmDPsd1dNf4d72V5BPnNm8m7gx13CroRgRVKXDSQC6TNA1ZZG1TFAEtoMEYbn6dAu7ZQdR6HUaS6Sn",
  "key19": "4T8LfSCNitrcrqk1DmsZYuHJ3v5vZkSX9DxgfQBSVaf9LJNmS2BYKgQREEcajFuxMZrzYJQ6rXvfL9svWVjgqDiR",
  "key20": "4bNApFqvojxMVkFtkB6vtjnaf4U9fJ2aan6WPd7dVvS7eUXAJuwuHJtmHmtJuFbTxiEGhzogTovCT69a98prfUFc",
  "key21": "2dibtdwaXAGKpyxPEKpZ1B29GkobUHp4f5LP2qq2ysHmJpSRcksejkL93HQ674s27hXEDrhauhPSFYmPAtn2WhqG",
  "key22": "2auifyUFeozadcLQxMwrByuVoLHiu5nrPuSrt9SxZyEYTM83Wec4uUoJYi4caYMnAWTyeZSshM6Esnqir97FDq5w",
  "key23": "3o3HEpVjxu5eftT5gGFE7Zbd13bFxNS46rdd1C244NxYgNNjDpQLyP5F6EJw5YhiiFDiwyqDQMAkjYEUhwaWrcGo",
  "key24": "MVh7dsUjGvKWrpWQMVZpr1xfYycm9tzRgvzZBt7TerRzmNyZ3WhS6o8ndFfpmafsbk76knDUF3RvFJPadn5iPoi",
  "key25": "5KZYBkPz9DSFon5YKLEqy6FJ9PgaXVwwngCmGnyN1qGsRwDbh7TWfHZFSTG3uZdfFio7mLRWC412mnPEa9X1XtgZ",
  "key26": "2BhoU5Vn8Zkwjs5kEkp1SYVkC76iSRQNVyuMwZs6LdZ5oe9PbXaURv2C844uKDJ8AsAeTiPeqPaixwrbkL2FUS1Y",
  "key27": "3e7hhLHPqZsnjboYbasaLhJKABf6to6ursipDmQJf2aZHmkrpVrXyW7RFh71WpfEpx1CzamWVKCziSw7ipmzNXdp",
  "key28": "5BpzkRiJm2XG1N17Bx5qzmNkjT3yJF1UWgT2SainbsAoYkpfEaF3UCSctUZYcxNhxouRSTNByiqQ6yXScjuon5By",
  "key29": "5x7JYTH29x1rKgWwsbfH6rRKxVVoYimYmFcyG1CPdZAWudgJDRY7tRrcKQsteWeTQktXmvLRpRwx92hGkfhSh22L",
  "key30": "3GfNnWVo7qwcn3pjt2hXmox3tJj5Z21bF3redqXP6Y4cpbR6qUaSbFQgo4xoWcxKGt8Cc1Auk139rt7yxd59s5Tg",
  "key31": "DAvdew4QasGHFghoB88KUSx7CiHDWBvTpEsUUUKbhmw7eenTFnk5UwUMuy2imKGxe54xQoTmzZscW4BNPDPhHmV",
  "key32": "2uaDopuYUGGaGVCrPfuEZ9JSp3SP58zxfZsksasCEKaFC5fodDo1TzjBsW7MSpTTNc8D6qrQsCxaDQNtWdxDT8YY",
  "key33": "3BiUoMazSuiX4peiNwnQsNDvkaD6S6PjanyCTDiw1tcwEu5ceRt6BKzwVTU8Szx49w7QjF3fFthKpWt1zae1YpTE",
  "key34": "3iyNCz1Rr2xFfeFgc2yuZ9aQ7cmg2CtAXnyKHuqpFEHdmuVJdEVxeX3ydZmLMBN8RouBoAbSxzVZti55QaKNpb2k",
  "key35": "21JFVq12ZYogdEafV5C4LqsqoHZDBhiGBxRFGE1EUk6gjLhKne2R4xrBNdaoGLMPNoftgiqeXDtkPwhxrzC5rfUq",
  "key36": "4JDEN1CyqQNxV2DGKjJMySQcNsQi6xEFG75x9yfg4hYmrpnoeYAms2TxthmQNmSqboyfMtfQaTKcsjxtWekwkZFY",
  "key37": "4bBz4pRwdYYxbzyBPM4TjNU5rFDW624AeLd4qUEEmvgbmoKq54LWMFxtTB1V1xfFzBd4bWzq8EfPfR3HQn4SR7mJ",
  "key38": "4yPBz5fiHf4KoXdfjswe7ZfgeSL5FzkWdaDv3AyTcgzmRXT5kbrc9C4ayrSWVEnrqhoCJwnaPkPrE1TvQMhsfU3n",
  "key39": "JfjvKW5s5XA56CbmyX1R31E1YFW8tWbeFxBCjAB1jH3qNXpMYdtZsRNdTZ545GVNeuHF9yRbp6QRoDzqG8rsECD",
  "key40": "3SteQTs8F5PZzBRPC4uAFGSzjZ9ffJ5in8Wicih6w3sXPWdWKKJrrP4JqJtYRoWk5fxkfwKiSfcnSvjnuE9e9KDV",
  "key41": "3Xm4zteGYwMULLbyLcxd9Xc5bxhzkDk38DfLhyhq74jZDRoVXRBDhCKtoNrraMpU7Sm7aHubi2VZpWjDEFt44iBP"
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
