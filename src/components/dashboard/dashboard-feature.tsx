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
    "2fJifr3GXWFcahQEPqy6b6UcgCPLa6d8h2JHrNcLpBnkfpYerVzqxWmPme85AkFMrnmundFoNMSoJxNAJMe47sdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Me8vnMkhmRWW1vKDxLDkEk3oSqkogd5A6He6eN5LgRKsUXZYNTUjupnDvNVEaSaznU71C2ZdKeaq5VGLePNbUNy",
  "key1": "5sser1ZyW7Lr8Bb919qjcn9wsJdtQyKqqmwumh3us1pQMKqsJu3EYe44EhxpZgVM2yWD2H5FDCRafxw8oUfMDB91",
  "key2": "e8K76rTkdfKc2e9uQYC2Y8hzvqXeJuQyaojAohA9QS6R5gKDMwGGnatrApLbP5wwGY7oakEpKwRSwm9VBVo8g2j",
  "key3": "4R5aGQBbeBLZ5vRcdTkfovRr32NVPKxznEtkFxaqVQFV9RAEDaneEogBArb6EMiPY9SPdw4mCnJqDZAPeAtkEn9b",
  "key4": "2uErBWQzyNCXF4LMAPosSWJQ7uaVnJxf2kaJc4vQoHAqRY8Ni2FM6hjbxp8y1U5XfgbRPCuaWFBEZ5gFSnTpaCax",
  "key5": "5ywkQeBfgVjoYcQUjAQECmEMbR6FX2hxTY2GM3aheSCBAs7Gfhd4TSZfTtjomSskXtEw1ga6z327JKkTbVAN4cgF",
  "key6": "4b2yTttLEYKwyGc1xgpvJMzPYhnce1GN7papfTnGqCTQRU3wBAa54tzt5eNFRohZtm3vV1KTuLCqo5jaT5ceMW2P",
  "key7": "JUoGag3z64o5UeBFMASkrt57cupLFaAeTPSdNRLzSSQFYJcwky5MznwVrfectFjD6EASGs9djuLwxz4zqJjNVav",
  "key8": "ZfbcKWrxmNMzek9GuZZn8C68SVDN45NANB6b22Ts1qhovQdkeXPzxp9TqhCpP75wqcneEKzxjwT3oLrNuCYcLNh",
  "key9": "4J99gwR5zLXMDvSwmUHx6WZrwxfrfsKe1nC667zmGkGhSGDrCUXZKqWnHCwjH1Md6EGzyRf23kz1CZEcxAULB7tZ",
  "key10": "SLMv65BCYyzpNoggZonvqwvR3i6QreMqet4EpdS1zdbNotDueV61ZjrSJvAJnHaVy4x4iBz7ErZjZjt8LR3BKXR",
  "key11": "4wVbRap4Wr3T2z351d9V9yaK8sCbBe9gwoTR5hMdRT6Us8x9vmFbTjQ1v9AyspnsLPiRaxUKSZ4AqA5hjnzEMnZW",
  "key12": "5fkmXS1cSNynDfwonkVk33q5sVCbqZ8cjBHtzmYW5p1fUUvmhKWveQVQvUUUJbXFFCbEB5psEW1QhZS9JbNTy9RN",
  "key13": "2qyyuzCGPtpwKjgUYQrr3FpR5mx4krQmX4DRDNesQc8wKKabKwEiz8VwoahaUF3acgqYKLDn8Lyc4nUKGG4Vgcum",
  "key14": "3ABBNJrV1Towk9W6RjgnRUJpVQ3GwrPtnpNkPDjkn3o2JwhDMMPJLd7MemNweakFNVxX23Mn4d6LvmhvbxYCcP7s",
  "key15": "wqtroo2X12E5qDnBP4KnjbN8SEcM6NvKJB18K2UBkSqWcLC1ac3wqwbikwLLroiMmZRGSarzmDpXTqxThQ9eFWy",
  "key16": "59rbeSxgmERrwZ1oGp85MKGfPVfrTPHjopMMYaBnKMG9PDg7JLgzXyjkxvRYPYSra2sqL3MrUdeCs3RyxM4KoTS3",
  "key17": "5NSBG2ZrAU5mUetcnoYNn1ogXFofrkKRRk7TuqhzBDgs9tpqjvirW1rw2uJhvs5mE6tNgid7TqEwSa71jL7P9BSE",
  "key18": "2gqCncUK4Zh9SC1y7NTWSVbMxP3vvgq54o6ZTTyLmzRmMMj3RmqmFXQ5B1F431nnhGKnKudteUmSYJyG1w5w8C74",
  "key19": "3BowaW7Dwh6WFVRihJ2fDgAQZ3GEoSE82Awco5WEaiFm8ZHxk6TQCfB8SeoQzdBoZi9sUXBxRuv5X4ueHGcmf6ba",
  "key20": "4tXXihBT3UhnHDAdBTDrVwer3uskdaDFQHuGaxX5jrtYwS8eGpag2cH7CNaH4Y9QXiAGi6NAUaLntHVepRA58GEF",
  "key21": "4pAv9ZBqN6BugDfdkBgPUbwwomgnHQGoH9a1HRtym1Bo3r3tqaeRqdx5w1oHGEKBvrU7KgwNtEhQqNCJuRd1zUKR",
  "key22": "5PBFPaKwqYwAatfpuHA3XxH6cK6KP7G3vnYonV3tVTzupL4QrP2K3w8gFgqrze6t2ybU1wmJENwmobqM1gcLpGu8",
  "key23": "4Bu6bXQctVkUpRejKyV4D77X6oF5ogSk4Nt6R5EYUPpqWcrSKc1cVcb3icu5GeBPVH8S95BbZQUSvWBbEurJ4zGE",
  "key24": "5iEgMS7YfaXKwd7q3xC2YbRncwcctzA5g3V3ZVTQcqJ6QCnfgLi16QjyPtqo2MGwCBjU5CQSx2PpDFNDyoHTQ86H",
  "key25": "2rtE5yjUTv2bevrUX4DB1oHy9b1igoSYE5EXr5A6x6gUNmdeu9yFJo5e7LNpgATcHe2mcLuXkLr9jqxUE7WnA9Q3",
  "key26": "4Jnp89ExU3Wa8SMqsvukW9EU6iAi8qNzGArUQEUL2suovuCGU4ssTPRTzHzqdsjDBeKpiypQQWKpsQA4PhYqVTKg",
  "key27": "5SnkCHiJLzNiHKGxiYJMaqzHRMcADnY6FMwUuxEr8Ddg11nmSjSLGaMqrp5NDxyQBeqBvVq4XWEQPfKSqf8Kjw7p",
  "key28": "21562s7wv5q5UQmsVAkcALvcfBWifC79W8g1BFriRJfZLWVQ5zNPLiocJZCQcCTmVrdWqXX6qYcMKUFj59mghuWT",
  "key29": "4adaC8Ddmb7Q11r9xpThCGiddYP8uYrHSpaAnqkq18kHqNUF8CY5XRwsC27nc9vYXgRnUCRk7XD58MoCeohfU4t4",
  "key30": "3b9jM5qKequpv464KFsetYNmEpb62u9q1rHyKPfidw3uHEFw82JH6K37gLXksk9s8sp2Hw8i6dfe4YtRJYcDimeP",
  "key31": "2LL1XRsifRovTHWuc2vA2XkEdy3cfQunrfKHNoVxTrDPRtaUPMxgCXS2bfdwDW6WLk9eAeHacW7D7TVNXD1TbWvG",
  "key32": "4Bnnc35k3MXht6Pf7YwbqPKNYKWsXjyegZwxYP8GUsses8WwpQVBUVQbbknsabuJ5E8bZ75Pd7cXzkFz6AxrT95S",
  "key33": "4ATGYyNDp2PcgWYGmk3RfNAAZSab5eJzsHJrbqcRvL3rShVeaGUg9dxhnzSa9G5UeD3gVBaKE2M9dJ5tzGaPmkXo",
  "key34": "L3Yk9bdTkGKRxgv1XcAmv5BVtDxAbQttnjaGgQ4DzJMKQwQGmFVpH651QiWRWxJ3suJ7PH5t3ZjnNQaXJqvT7dE",
  "key35": "3dG7AaaAeXmRBWtfvcyKdboxGtBFexnE5fcBcpmmUH119uDHm8rSRvs4KqQdBtqKfyZRojooeuVfRBsRswcPZCbQ",
  "key36": "4FA2sR1npuAgtP4Xy23SYoRSdN7fL6QkxQPmKRYyvKra5FUMrFAugDRqmy3mLbztTZHa4bCVhZ1YswoGVWvoWZ9h",
  "key37": "5i5XjCuPhUQc53U3pMcfcm3krXBwvsUYTW8HzKfc4MKospP3zRz9Rhk177QjpE37Ex23Aoqx6pQRkGEwHi5DHEM"
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
