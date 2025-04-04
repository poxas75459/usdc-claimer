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
    "5dR68Lk6Fe95fzVjtjaqUFKD2whoDyN5wcpRcxE8yegCLEjt1uLhF2R5US38CFuX4tPqnbtL79AjFZxNQdaFDVWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ww7K3NQWudszw2np6qHYPAEds4LsBEgSUZHPetZeTZnHu5SGQCTL5dr1eTDU2Kaz1CE68wexU5yQsrVXSqhk7Cy",
  "key1": "5L7NoE2LE3mV9jigXB8ayRFWuSP8daD46a4s5DanJdsEwD4PkMmK29wWD435HrtsZBm7LjgJR9cLJBpeUF4ibLaf",
  "key2": "2UnY5fSYQKc1vSWKFktG3z7PsxEv7xPMGPtswDqrQApRfQUEvTt4zXY9LqXfy75MdAGbTP79nLHkNXGTTsHb1QMm",
  "key3": "5ghjQJXjdSMUcb3HRi2Y5SydbB5Z4XGqhZp6uJUoSFxL14Q7NoDvxVJFkn2GbehwibhKW6ehcNqJP4aFTDzKbHin",
  "key4": "kkKphTexkdjN5hR6ozLJXWEJNryqAaQWeaqaJAiRb1fCraUuUwXqHFkAD6KBk1MWhtGPeVBiVSnxcWzMYr3VQQK",
  "key5": "5ZFGwmc2hhKk8JrjdbmWbwynKSvavufzUWUhnA2cfTWi3Hiaaa6Cnq2Md4AvjNEDx8AvHJTFzwTie4niBB2Y6B4g",
  "key6": "2sJjpwJhrP8mmsbMDAUGq3R3QmCWde5YJZFDDiXHTDY69E7GCmqRMnP4ytGR6kr7J5dKCmoiNbACYenYW7d9hT72",
  "key7": "mCviFcwfE9fTTf2gt9HsknWjqgqBPWhMefVxfV7SJm7juCX5i8bJKU6exeqBAJYLSgmTJTJykano3W66krYLAnf",
  "key8": "55Qzj9PusYsNqbG2agRniw5Wi1fi8pvjDTUck8HQAKvyioxfXVnbRMHBgvYFg38K1W7iKtP4YJxtXLJLFShjiCrw",
  "key9": "3xYgyhVhsdbxSnxyqREFQ1rfAXpKD9X82pkrqbLfD1jTVXmrr5b5zTbs9LBYhTFoWWER7geCAFHavhWtoaGwND8E",
  "key10": "2HBuVUpcupfvdwsHHA96GfEBxrZRnSpw9TwVozGzakt9XLFh5wUskNkjG27kmqyRikBKgPV7Zzunwk4faEH5PiFN",
  "key11": "J7bZvxKNUpMkQxjAN5vmVK77goA2Z8BRs4W8kncLCqKCHiQejRWF2dWbFi2e3i9c8kPtAmCNhuzHCzjCSirt2GM",
  "key12": "3NhSi7zYvHuj79mUsMUHDc8iSU1bKHqMc56pKzkj798DXFMczJaDMdhiZAYLU4QNfAfuc5zBSrgfPCw3KQAcfcba",
  "key13": "3qUHmhRaqMnyzj4Nz6WgCzcVehgz1mizqsDgywV5neHdfTvxQoa6jUwHHWtGCaMiUnkquojbXbieZra4sVBHdiRh",
  "key14": "5AZejqQYpd1j3QaQD2v7swsiB6zuTzV8E2RVzR1Y2cbzbawERDew3dUwHE1MNvGPqadeDY7PEaCakmtZA8xYaypt",
  "key15": "63zXPkvW9Kw74ANmZvCE1EDYCtUgpTNSs6ZvesF4LkT3fRnD8Do7qJMvuzr6Hu24GWe8JGKTozeZUsQsMWZx8kM8",
  "key16": "4D5zw39Lb2FkqhVEvPtP6jfnkibniCBTmKaZXSeaW8fmhpMLGkNyMqbVSVcWb7ibTDBFUU8KAwaYhrkVP3zri4iF",
  "key17": "2BK488WfbGQ4uiqSzy7k5wQSVJoXzmdZXS63bAyDkuEQSMUS6rC7kuYKgAvSHJ8ktJCRrjn9tkwYRffj9DdSS9SA",
  "key18": "3k6BVEXLv68Q8Zs2SEmpwUezz5kbqJDCxrDFFduRdsCow3kB4WNhpdtLZpkqizMq7CYYQDnWhZmE8kBcczq1PCvr",
  "key19": "5bAQuzZjWct9D8ZgudDHtrz7b8qJUgdVDxN2cVYNVP5LtEp9K4BJWGveR7EFPjMBgtsLtoXEENeZP8sPAEk6R4nQ",
  "key20": "65kdwKhmEHoR3GqYBBi9mR4VqRdAGSiSZqxTFwJCZD1uvT2JYS8NmF23iHriQkDVWQgJRN9hR5JZ87kRebNqW8Bc",
  "key21": "2zgz2QbM9Esb8swM2RAe3Z3sSZv3CYBeknvFUMPLKNkR2YnWKXJRygy3PNxwtZNqjgYGscCH4w7qH26KgoLn8fc2",
  "key22": "5MQe2KcCNfLa95GcsugFexaNwzudub4qaa9Kd4zKQYmfvFbcagk2WqLKUscuYh6qChnhrPnHJwnCahMRvxo728nk",
  "key23": "4oZcmpu3ZmsaPfLRZ6ztNA87GcdcU1MLgQDn1niAg2B6Ki1SMDo82s574eWrpafz7tJ2DktMZpW4DMNk4PHzFKE4",
  "key24": "4cbMQnhUK2kDd2bSUhkQWn2eZoFLNjB7jz8MS2TT3HABjzXJ8dVzd6k3uMFosHyVz1pqts5F8bokw27XNaupkCTo",
  "key25": "cWUWmxJnkm8XU1Ggy5Eg7U3cS28HpzQWTRRFcF5VDGGsHXYdR5imTaUMeTzMdm2aYJXz9KcP1NDLLzB796vS5uF",
  "key26": "2Bo4UBBCLF2JaWg16Zj5Hsyc7KT7hZJnWggBvtVZJLBdCdarAQ8nHats2AsiWVmt7QVRnGnjAfC6Kz3jnvK3FU56",
  "key27": "215Usr1SrzYEmJcFQMZc7zqwdqqSWZDdpZKkBSAJ5CvJEvgohCBmLq78jE7oeJptRg4g9yEAryPGQtYyGs7XCbhG",
  "key28": "4aDK3arbu9TWysLGXakVanogSJFJu1dqQi6jJP5SmWvbgqHHYyaXZRoqVf4bozrBaVgSQDYio6FVRigbzk7J8GJD",
  "key29": "479gc5CDELdqtefjZV6qHfaEgeSTesukedf4NpjCDks2Vb1inHcJepFEJggppQKLRrecjkS5aicHbndkQTaS4231",
  "key30": "4G2zwhnXLhqLzJSizkHAs5SQkx17uug4T5RJBnrhD86CH1PudLqKfpKg5aRBewJviQtWUKmokV2us7y7rZMsBcQ2",
  "key31": "31a7KpKHGHPrZhuJUgA6hD3djBeQENdwg4yPa3uLXEHdV15ur7XBwvArNgLVPqV7qo7nS9o3LB7KyhsvTL7TJXyx",
  "key32": "65eTscc37ysEZdBphhnmm1VRgiN4hk5WgCcV9nJTHRDhUYniMGSrskRfY3TE3q5wrpknXJoBGEa3Lywwsk6zua52",
  "key33": "3hLZkBpdCu7CgzvaE6PNYakpgJH11EFXsBzGZxD17knuVNV5SZMy13q5MHrXcPnVWVR3xYMcUENdJRNc4ptSiQJ7",
  "key34": "3iPVeSZUsYBndXu7utvLQu3XnPRiw1HbmL8a6GSb2p23e29ksr7JfQjWQErGzkFTnWBQKngAx9DgtgH5ruzeUJAr",
  "key35": "4KT11Gn8k29AP4DDw1oPZQjJ6aK6b1uPTF8BYceAGXDhY9d4gqwWggCfMv9hmYcfKEiBc8q8hV6cvQDGZRGveosC",
  "key36": "3y3d4G47DW5M9sNVvXAxvDebuXVNPMMzkMaQANVMH1DDUtDfTbNTV6piMxGWe769Ly4aJyHtM6AZ2XhND2oyT9ex",
  "key37": "2aMvGBidoeu1L3g9xcRsy1nDaR6Y2kqnNRU81D7PY7iXu1AzJY6x45E1QHsGS6n4ZLiDjReCpmTM8QMiT18nWzR5",
  "key38": "27bCU3jZ5tybRE11zZaWikjo48RS6RYq5sffQtGrz8Hau96S6pQbKxs8HBvRvN9yc8CNvQCFqNFK5ued8XotWLen",
  "key39": "3xwRBcUHmNCuEnz3MWpmBDMS6jvevAgnPJnSPwvfy2SBJEF1NmcUXys6xk8ox7Tks5BjJBGMNEYchsytGmRmjsrN",
  "key40": "3hvzznzAaQazPU7wqeHZP8GTHgihxay7ot87gVFhf2TG8ZXkpjQTRU3yaxqALmfNHgVL4dQeD7nVBXwVzHYqDZD2",
  "key41": "4yx7VA8SkSZhGeR7tCz8M2KBv6fCEv3oXZvNWPNQTP4bUKW4EisdsirwnExYGW3T2zTzWdShhjpUMdDadvGzcVYb",
  "key42": "2Bzrik2DYvuTouivNhsRFMeizAPr2XMntHzhPTPnus7hG2MSYT84sfSDeUjuZnugcwFhZdvFj2kCu5QCv8ZWzxmu"
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
