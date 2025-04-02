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
    "3Df6vjnryE2SUSnnG6DtaRiVSNmnJov4DptPi6dLWQzEoiuDJ3e1j86CKzz6mXMv7AxLGm8aVF5ciwFUnBAcWeCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TTpghfKM6uCVMLTYXApXLSbjcjAQSAvHBPymszpcJ6qf6CqA72nuz2FS6iq1gN6GqajEeDZaRYWjGXGNWnA7GeT",
  "key1": "2ca8dPCkvZ57ML8sUYwViGLVWWgeguMGRLNNuGypNv6KEGdK6P4gFbJaYBRkborefTwc7xrqsn8fuife3FZrw4gV",
  "key2": "2H95ocw4L6hD2JnxjMgLhwRwMg9RdBHfyiEHdDkSM3GgDmEfkhKH4G9fYmAQmDh25McX4i93upGr1g3rNxEAkFxb",
  "key3": "BkeZkvAgRdqp92qWG8J77Z3XJfPwR6P32b1WnpDnSa5RJvAABmviMXRjnzLQ3vheqr4z78bZvsBoLziUbqeavzW",
  "key4": "1AEsEyk5KeHbsinaYHYPkcMwaAqwELnpQxCgSz5wUpKtRiS4oeunfWQzMncDrvqyYYbKxdRfXY1omcA1tmD8h3r",
  "key5": "2UGmpmay8RTDrCx6Wbo9E2LHaREbxV97iL6nJTTR4uBVsqFf2YnwuMy9WfggrAAB3cGxTr1GxfNGdjdTjrXaTczW",
  "key6": "3TWy9n16khrnG2JwjeBqtyLzxRtHT3qVPEfxm9CC4TcqBrQhg6S8JfyVhVTuXrE89TevdZGzBk4rVYh14S5jsb2a",
  "key7": "b7JtSMCL3GUX9rd5dQfUWgsCisqpHiJ1fuFaD3zj1MWCabcB6SqwUETC1SUKcroaZoyvL6nLTjMTgRHvQP5Xnw9",
  "key8": "4LFpS5Wv7c53oV4P6e1gwFzTcn9nTodfEWtKD6i9tYWwVCy63cgRXnagAaapvxmzCvqyXt2Bdq3yPmvjjShsLGdW",
  "key9": "xMGk66c9BF686KiNNKU2hSm5kbw9Lz4qgYcwr5M24s8jkR6PTKqVKa4GXRNdotQXMZT329EqSbaB3MuJsPA2RCf",
  "key10": "2Z5Cb1tFnNKgaV2qbhDTDBSyWqfrYav29E12Qw8dE1bNM2j6iCrG6gRknCVsdZQuEHkxYU8qsCm4TBXc9mnwhYMk",
  "key11": "3idsuoVnmN57pWimTNJjNbjoBUgkhnDq8ynoXSbXLLih8Y6q64HDjhAixQZKQizvftCXCioAV2RgYpJ8ucuZM5Sc",
  "key12": "2kK84pGaVqMnmhcNVzJg8R5qjf2u3en9gH3QVpnZ3WJCBmVW2zcUWyZTJBbK1W3WU1EzVUKuV4RUpLtKTJT8aanF",
  "key13": "4HxVttFbMMfwHwWL57wbSkdRDaa5NtgHRGvzDAD82V22PJAu15WySSquFW8DTfzr3JAtXx4PTUgWvdomZKGF5zxN",
  "key14": "2xqtCP9w1RVxBznmCJSSV8LXNPTMKQyJHdbd8yKsq2iKyuncYeffNZLnHteGLJv1Kzkq1kPPxndqyb8MrR8BuvRH",
  "key15": "5kEjLMo37Wiu7mhkSLgi9f7LRqNbVQSh7sfMvn5Kh8PC9fmrFU5WtdW8FQ5d2aqZq5ZcWXS9YezocaRrrL9u8Xpb",
  "key16": "zz2yeEwsLWhYWf5QU3JJqnvLiEMbEcwt2k7Echub6XAr9ceeJMSJcPt3uBwjiTh7KfKQfCPzo9YZShhncshiySk",
  "key17": "5DYQe2so5jJv6YMTUx1ajEWJCPcpFXztezhTYTTmgsPWmbcr5Lc2NAqukXeKqfFqNz9U9QGRPXPA3SzFLX95UEf8",
  "key18": "3Y37FjL5y8zFk9vSt5qvjVkDQDrmZsqpu325ezW7pXuBrPoPa8pt7kxFQngsuAtRgxJekpEwPbapNFTSWs1q4iYS",
  "key19": "b5fSTHZpd4KzmkQxq5kP2RnnZjTe3EHfxUKBcKGfU27nMqaYyQR6yqc8DMdyuSoymk6a9eUj6w6cBG6V9k3RctZ",
  "key20": "2hJ2cUhrc8zQj6vgZoxr5GapoyP94pHwainuvQjT8UfshvopyqDeMrBmLZXbaCcDmNrtZS9Av1cfCc1aQQn5BMrY",
  "key21": "35j2jXT46sgzmzL52nF3U4GUABWvJ3fCCqA9hAATVeFFGZQ2HKYPQD4LzWSwPL8uN1nv4nnS8PY5HfZ2uuJgEpDk",
  "key22": "4uxbmoPmb1BVe4agC22cH6ySMSGYQ6McKVVbgqUPHBSGf2NDmvqJSfiwUDnUJ6gcEYwbs6SRSi7JVMSdcPp9YZK3",
  "key23": "4oRNqrYnNz72rFLSVbqwqiUPCW3gu2CfhkDqkSH3CSQqfdS6Ngu6ubFz4qgMZ1caot3QpVi7Be1h5dBcZxpAbYqK",
  "key24": "62XrPY227Bg9xdrJBeUCqxe6fQfxXs9hKPU9QBB9ygZ26bf2nzQ4me2QBkakdtRnwdM9iqfZPbDgow91qM26CwBL",
  "key25": "2Y3BpQWo5MbABgkevK6jymUrkR5gRQLD3u2nB9NYrVFFk7w1waLFbbhdLXBmhVwjCgskBBcLA7fDavaKzQzrJRDB",
  "key26": "mVqKnXP4xhRkNKSyEZJ2a4rA9TCXtaKT3yDMmQ9EfHyfTJh47XCKYMWqsqRioogK8R4TcaAeG7MCHP6uNvnMTuV",
  "key27": "65qBa5ZXm1eCYTuaFmf4HncBUkB6eTdGiXCDtt8CKF8W2tSWyDXzmMeCPZjD3GL3KJcnvtXWWeihv4iW31KSA6bZ",
  "key28": "5SSHd5Lwwg88QXfjntsch2NiMZ32SgE8aDsiyCNTzbtkBj6K6PD83ErbefnHmruBJbVhNt7cK4BE1QmwUrNNc3iT",
  "key29": "4MwCvXg1BTF3wBL3W3AiAxw2vNh3QRFMaHeHdE7i6TWrgvroHU14wfwyj3BGj5Vi1u4vdXwmr35b5YUALpd5PhAb",
  "key30": "33QyJuPvbiaxX4CMvnMn9jQj4pKfbvWEEwJ2ZCoccUpk4kdKebiARovQLkB5TzLnJCAB1wZMnyeTq2bHJpgGm6YG",
  "key31": "3XxFcRRqMuStX5C6bSm4hshq9thnwff77yQnhvRnXDyP8rErY7K7bpfGm3xbFLvxzV9BVWKvjhqsUUt21Ancpp8m",
  "key32": "3LpB53uZKh48coDLm7sjaViT7AtzaGR5FCFTzgMYGKciD891zqqyU2cJuPvYeS7bhpc7sEkSsuRvHvL9sh6DkDby",
  "key33": "4qskzrzhMWPXrbLDMyRi1dHvqq2EydcERJNEbJ2tEdK7fyycqDRBf1xTdvi8942yxuPmq32Z3UaUY1tYiwzA8bBd",
  "key34": "3VZacggsLMLv7m59zDe14nD3WafenfUDT35xUD3UswCAdYtd6dYniNvf461J4jKFcuKG6cF1CVeWBgKE19zHPSuT",
  "key35": "4jEEheUAUgYzcXvsPHxaUcNBZLiDqed34MEwrytG6sCmuLypjwZJeAPN7ov1BGum3cwo1G2PFx1sNxoxCoEBMfet"
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
