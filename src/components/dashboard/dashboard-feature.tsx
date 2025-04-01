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
    "2TvdqPs5VweMLbwVs8o1Wy4aGTUDMU6eBydrNRuegNhiTGTuCw9T9dAukyacUNH5dSJSdMGk4Z1Gxvd9LtTbxp4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8DyK1TSDWGNtqdgSc7iiNeatT9ugb4CxiHjtF1oVqAVUCXDz5KT7tRpe7WSmRBKRs8c8pLqTWypa2qupK9VP83",
  "key1": "3M4fJPFZJFmGikpobpgJP8MpzZZgQ654R7nAtkmeRoBRFmkNKvWuK23trc1cgbkx4Uy4idmjwdHwQvA9dBHqahjS",
  "key2": "5Mg6iSKBJpxpSsyz8TDYSAKNMyE1ohhbqz6KPKZMa64WXNWH2jgprR4wZMxTLcZDUDYQRD8RY1wshZBgaLcUipbG",
  "key3": "42Wf2c992FufmmyvnqvuTWe98eNXbc925omRtTZ1mk4ZKjrG9G628SugCG5HGvdV9iFpWeBRhXvR8jVB9cz5FcE3",
  "key4": "2upUL7rHZr3pgTRYxj1863qWxbFz9VWKvhgUKG7VPP7dgwaWTXtWw3WdSkZPugEUsUD8DhmnsK9eGkpxGSkRRNbU",
  "key5": "35yQxN6xDjPrcvd24dYaq1xSCxYZNrKx6qQpFvBbe2u3hWmBJbD52tA3GJbxmvpPyyiQuHLAqe72CuqMo7HaDXS9",
  "key6": "5BeMVU69ZaC4pWGyEm7MpZBo5QqY5McoPrd8vBG4cGMrdBmfgFS3PRf6nNGHKx5NZ91fjz7qUpeJ7VmNtkDjRiwf",
  "key7": "26MZft4ctqzE15fvHrpqHjQEFUaYH33DbpkrzVaxdMQDwwvB38dhcKdRTSdHwQiuxzkoKehJeoQLBDgGTheQPpYR",
  "key8": "51bSUwJWWAu5b5x9QL2YrzZ4Z6PqpwM2CYKBGmUkjJe1LsoqR9KPY2rUKMZDTgRd94NupeKdg3iJ6FJtcDVvgmZj",
  "key9": "3oUzKyAAqTF27ZtDrWDp4BUMY8HSta39gAi5o4yPX1j9LLSx3GGgnDcjVW3vLKcTQUxd2VNvzR3UM3UyuckVyvz7",
  "key10": "5VNHbFJ9EJ1QXyayFZc2iRfnXzw4K7XHkqs4vQfeA1gmpKcQdnhDcfzyJwib5KmcUNQCjApQFf2Guy8MoPMoQQg7",
  "key11": "3RDrU4NuFEnmGqWbyuHv3S7PAiA7Vxc8pehop2R6Cn4FkLYJm7x4tiYuYdtZS15q46vRsXv366D8C9ZBR6uY2NG4",
  "key12": "64u3DUnVq7ucSzUpRvrEoN7cXPKL6Bpo9X6AF7bX4abgMyQpefeknjcnNHFB8toUAiBibvjv7xVkuwpRpAhxwU7T",
  "key13": "5kKnKDw7FPMzQhnKyiS5efCbjxCHt8gPejUW4b7Fh3bDU4efFL4d83Xwo2ZwzyPCM66UxwPg2oBgjieqmh6YF4kr",
  "key14": "5NsaupCnuAhMqE6Tbd73rVYpqerW9462pSY76QfGYxiWYvNBu4UUS3aK5VHFNeAWGKpff2hRKiymsm3TFn37LJuD",
  "key15": "2YMCKoypjZ3eJKm9ijAnRFTPckcXWz6R95jF3edQmrp4Jfws2eYNZLPYqJAeA7mpbem6zGXa6ke82t3YXEPbnNLp",
  "key16": "3xEZ7Nu3tZ3mcBkdRjhrEprM4kAiUpvuZRu94nyxbJeFf9akp2fHnkZuDAzt28mtXBoLXHTaURbkgF2msWqNJabH",
  "key17": "RkaCd8R8NMNi9MGoLTBEaKDateDvPtf2ggWb6PtLRe2R5vwQVvWPKQWLGbk94Qc11KzQMtGUkXb5kCK4vAL26oH",
  "key18": "5k9eeyQTuMmuTB6bNCAR2kThZVhVn69bMCJzC3X4ujHVDLk9juHB4oWprsdmSNRrY5Wf4YKU5nxvrw75SW8XDaSo",
  "key19": "2U5T6qSoEXpjTh33GjvCVFrTgZbU9epK2ZZ8howdVcZCj8uSWaUg8CMiVxiE1c1fSbUbyRSrMp5CNgJpWx9WuoMd",
  "key20": "5BdohMC6yxwzZRYqsS7wXw9rFfVtQc9SoHyzuqBU9pvEmW52dJQZWkd4f3q3qbTd8bD94G9sZFy9snRP3476qqi8",
  "key21": "2dWyvAqSPF2g8ki8SFFLYQzLpXXcKBEGzkFtJRMuguS3ns8hptcxcxBA1P3ciH8C2jADf62Aaj4Rv5E1TPqRM7SG",
  "key22": "2Wh6iH64bpwvHs1D8NXsZjjfVpFsryKyFahf9oeBAjCjriXzchhPwFtkXEbb1cHCQ9G4CfGPAqkdqpoksFJu8PWr",
  "key23": "38Du3odEt31qVXm2gPCR6u9xHGfKt7YVzR7aVkkVkx1fiKSwWiaF9NFTbsKiokw5DxXphc8jr5KhyU7VUSBchgFX",
  "key24": "5wdHYLAFf2jTAn3CJqhDZjVv8o57Vk68h8CfbKh5nmRVPs7ZQew4sgNzs6E7s3vkJNyz6vru1kZweTt1rBHFZLyd",
  "key25": "4XUsK1vwQ9CFpRToS2MktEU5ouXTQpxbzSmnaz2dUgrxGh9xbv6NgaHVags3ApaMn2ELewrTsSxpVsTzYkAs2ufS"
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
