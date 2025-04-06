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
    "3dWH5nnmPrJG9VGbnX5iNe3YipetQggGa3S9juHihmbK3bKRBwe69DFYCG3HJMBbcZe2sBRiE1cMeUay7aybtZqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d1xEYhxd5ypFQaHCLeWGRk8eL6qgKb1s8Kcn6u8WRGjY4HywGtDrGUakyMh5hCpdyxB4yRk8emo8f2oXHHJDEvh",
  "key1": "2syeqgYuzp6oKivYkPh1zeM7zJBMP1uueaPQdUvBA71Hc1cv4Dk4Tm1tjLCvhRQyjGiL9rvapE3UzQwe19ZpWeUC",
  "key2": "4sRpoXwpioHnS8imUSxcD7MRkbe3LaqjYfKp1nZoKB9wgqkomawUjCveMeqoQbTynoXWc5M4HVQ6HHvoWSGuMSib",
  "key3": "3XpfeTbrxHGR1wsfsEWETjArkLZN34hPHMpQcA8UezXNeRodtt2NbKEh7us1RsA2TwEDzoPo8R1bEtwq9k1CF2dC",
  "key4": "2Wi5zkYCZkPL3o8jLoampmKiGEwhEas1iCJkHmHPhNnUFycPaNft2RrUW9nKbAVcSyfw8hcq2GY8rpBSyagfHtRw",
  "key5": "PdMG5SLgoMWCg3WuyLVpy4i4Eowged1waH8Ahjwc23A4yWfdb2GmPiYH6A6Y3jDnuzTBz5NSYB6hNaBXMCJ4xSb",
  "key6": "3HEX8bps8i1yLfjh2MZ4bPaeDUFkQxoa9xQYgKFMgdGPHd11zowELJp88oK2mGYMWdKZR3rBkX4ypnxAzRV5Vy3p",
  "key7": "5FMEA3QPNiVgXmDYKxnihTrxy7tWqzKQFKPWC72c6XMjyzqM7ThCPFuzYbGL61aLCkiBiNSTQdByWYFacEPDD85R",
  "key8": "8ye7NjpdNG93zTQjzkmxGkLYLfKhg9nJAMRtpmfai9t3fTu6onX9RKAAb2TKFKAeeBF3dReRyqkkG8t7WumSxVz",
  "key9": "3qsXLAxZcg2fQ62sEN4yyjTH2Pcm2ua2zZBV6SuNvpk95AKkH8B2WAGc5aJs3EBo9RCjMZaZPwpJT4ZjkmJ4vVaW",
  "key10": "42adcuawqQfmBcbTZ4d7Kwaho7aoptTLotNLyq7yoQZYky3K7ohvxqgY1uLX8qK2ZoNJK9G4doFm91pp6oBSX9F2",
  "key11": "49fNbJooxVax4ZqwbgfVxdqQXVmBhZqTXtV2QwJtYQWkHgL62iqDV6sEePq81D9eDCYwT3YhH72uS8gAxUZ17wEj",
  "key12": "4V7A7y48qCg9QE1deiQcnzutAp6Mi2VnpssDyHSi395aBXZSDzzW4NnZrntaUXHKnfyFAd5wJSxiEQQcsJfLxNb8",
  "key13": "3sJ4rVFnarTVZXtzQ9CgBDHXnKC11GcvAKZ4ibsARp382tW8rCkf2tAhcCGnR7izE4m9etHir9yRtiQzjYp3Dqqn",
  "key14": "58PuT7rxLvtZiEgKNg5iT756wfvazjrsKcBTe2xaDkEhQ1TKfhTJpykdprvYhDLVGGAiMTA76gUdA1XDjNQSCcnw",
  "key15": "45xTJi89ZCQvDaANXDrYGrykBUXmp3npQtrCMUkVYKE8cH6PgxjkVtWYhUfVjNf5JQbEvX3hDqqFzQf7RsotWgY3",
  "key16": "3kBtJYuUGrKA6FNPyvQ7U6De2L8mLmwA8fSMS11VeyEUskQpkfVe4CYbKKipNdQEvGoBDcviHpgcMnEduMiTX1nA",
  "key17": "vXD9WM716hdUkXKWJov4u6wrAvcHDwjjM5YocHtkD4Yb5qTpVuerUjfNfekzLbTsAQe9uGdonffbSbXE8kmbo8e",
  "key18": "4w3KhMDJ6zRFR4kzqZxRbTPnNRJPshXzw89wyNe8dL1qKtsxmKPA7nWKBWdN9Kkt7yHppCAMCq9qrqeDws1wuHVn",
  "key19": "453NGnuvgbovx3DDrsscbWRS4ZSBZn7ZvyPmTQ9CykfkHkWWx8Kyta72YKJJhZF9jTDp73xwbN8ekTZ1CxYJRQ9",
  "key20": "3EaVWUm57mFjQvrT2H8FEQdTB8bioyFeaZvkTSic4Ctp6C7ayHfMbDiyPECpSiqA4QUgsYXM8HHqvzMxZKf7gTGp",
  "key21": "5akdZbt1nmTH3w5brwh7qXdgrCvP7fqYyBSoXPxtwPFcMpm349gS1KAwnMEKqogSV641tuTLx9YD4hU8b2HqGB3x",
  "key22": "5W6B3ppmannVnshZezmWMSzdHginwNwfhwJuZtLZa7AvTtGXKMVF8jgxBNikooBDAVASZvtM2kq1pbsaGSLuXi1D",
  "key23": "4a5G47LqmGzkgpcmiR8Hf3fp9AmFr6CyLvqtJirEHR3btFq6EmY9Eq6jBbuJkcHpGnUF7YkQNJFr7Kaucd72YHZV",
  "key24": "GGnAUQFGdk18k68MrezY728EE1JzkqSTPKM3z3awrKJSqZGhknAEvYHU6SLJj62hhZ2pyZTYJ7m9BBYGoLK4xc1",
  "key25": "3WUFfHdZDa57pbDTKniBdE7mZYUqNYe2CYDX7Lu9wayoLZpGti2fZijgxP9krbywsR1i9LJCKwucaJEwWLG89hG5",
  "key26": "5S2fWSrhkGbTxKymFfnbDUjoSf48fqUi5f1NVYCJMwaWQUAN1grdETUXkKHYGTxzyfb9FPizMAi7GTVPM1QiQCuP",
  "key27": "3ijYFvRnKDH9VxsCQkS7uXPMjwGYNteBm6uBkhNoTwfMWxi43Fm2nKpJpnB4Y59dWkDXMrpUKz78LRZqyaEUbmK7",
  "key28": "ASQ3D411PEJPW4WGagzdPFFpFcTKr7hsJCfVUbAfXSNdouA6ofzTm4TLPPj9UbH9fp6emUECmLizV3o2rqaEiU9",
  "key29": "53cTuiQkijvTAT3rCULTKnu5rRQvnd7GPTW6o5VX8E6pwb7wPBhXx2JkMVbpZCpLw9pxpJxuyr2HmJQdVKS4HYk3",
  "key30": "3n1ktXsu98yUriDtytzQZvZyncBjqhm62vKRV6mFsbFsmS8yo5LwgeHU7vc2DgM6ShBBPtRo5zdsVHNhzQrYB9Kj",
  "key31": "61s4Th8Q81iPKdQSAqtjzALbh6hYTPiRwpzjDZEYDCcDJ3y7nR51FjZ1XKQqWyEHPuvjRxPM7LLn2uRHuviK4brB",
  "key32": "63A1At2XGfxEhF4kgciZGTspsR4kzRGvJgio9VyfXiUZrB6uADJm1f7h93ULyXaieVfDBv7TDRgL27hU6qh4haq5",
  "key33": "5tn9BGXLq6mxtYxK9yjK2GknhtfTEcPb5CmvRxwMWWXGmA6TXin7GM7VworZyP3fgfKJvA2Vik6jVqgNb894VhqG",
  "key34": "41TiBdMcNDLFL6SDAufuxE6gDQVPedPstCRYNgVRd7u1ChWzYdJi11GkboEmN4vAxBSqfdvTo2LcQHJJ6vsV1dB8",
  "key35": "3YGCDp51gkaZM4hYNTAkVDtP887bcz1mD6EQrVSwrhUavjYRxAYqXZah62D5MR2t2D1pWBp3J7LQ4eSjv8gFhRtR",
  "key36": "4Urs2eyvttPZmkKiWHCwh9VeUJ216tSerFqYfbYhRUvKr8JAbkMjU7vKaqs5FHY2P2NH6u42FVYBaumfsdCGpo3j",
  "key37": "27EqK1LAe41iW4dZHsKpYt3YtkRgFtDC6y8zy4ZqgUybmTLxAY1fvdWrDhrpzwQBqvhcrGznpFaXBtooN8gFQuNc",
  "key38": "34xKfCD6qwxrwhPZ26FGGiW5xm8oxgRxXbiNQbuKrLVirTKiyFwSZ5QnHr9QoFQvg2JzbxAxQtwuBsBW3LiAYW6h",
  "key39": "62dp3TKmaKRRFZT2ou6Sei91JDS4kA43uwMwL9ofWKFEdTj7W5FKhJDpXADy6bxcMzWg5gCJ1kMkNQnMyJAw3nCq",
  "key40": "2JNvqwbZ2oHfHoKjdd7HHXGLdQ5F4GMrN5GBwoyg4H6Kymjdq2VazMpgdWb1WtSL5eGbMzjQrSm7M6uC8aXhT3ab",
  "key41": "3HP8uFEceCGwj9mRhNAH9NCbfkhQntuB8TM1fXzda6SJtptvLj89Q97tP5vggSW9vUr672JtBTCrHfkKSxFLKxVY",
  "key42": "67guv4qH2gCbqMCuD1sq5HBXBDwhYLnpzk3vSsRD6tckDK4fhPmBFbg3w5aEewAC9UFmSnpPjYbmCLvh2ZJQ883F",
  "key43": "4kfgHM1d8Qti6VMy1Y1xAj3q6FXQoPGEKS4euSQSouBqXQWFCMk64v8db48EDXc3wLLzrcqho28Hd8BjYbHfDkA6",
  "key44": "FXAp9XME4zXZsU3ZjPw3XeGUFe4sWjgcgM82r3cZ5ajHqokAyEjeDHn97B6ad6NMgnkRxRULhmPwKkmKvAipktb",
  "key45": "4mQJiPXtNfuUXV9qFc2pPf1827BjMHBpcVhxiMyiZSxsBaWzvCGFscfYxYs1RKpzx82GwTPPXpY3dwfoHRovmnAv",
  "key46": "3VvuhFjdbN4QWusRHLA1jX1V3VK6yK6KjrtYXT16xcNZshV9gB7vNzKyXg7BjXvmCsGvprAnt6vEYgVpuMoGDVpX"
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
