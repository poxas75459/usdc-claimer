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
    "35RWY19v8bPy7mPdCF297rPmUMAAkMardyeiPwfLKqfkEVrCtvKUUFVX3P6EiK7ftvBKnEYTrRy2NeZMVNq4pkdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SHQP7a5CgYrT7AY64z56qquPu2MfYm85sR1DNvnJ5xk9PeVgiAsEjU4aGATzCUyB8vjvnTssG1aquMVtChbJRAs",
  "key1": "5PKYPiEYM81ww8gyMcM7uybWSmAr4WtvQ1WnMw8XvJVoKsVPKEbpmErZ3oc9PydcDCbYM2SpNx6qGAzBBkbaDE7g",
  "key2": "3VoBKT2LniV3Kdc6eBrA1mkzhdXw9bZS3ng9zdt8m2uGy1mjfaiup1qWY6tsVUMGoYDeNpwcapXKjD96rQfWp6RX",
  "key3": "4V3uRdYGPXqByGgqWyM1FJW7zYiidLBJVfGCyUikzYAsyxor81PiaRncYR18Wyu6NnxnokAsSddJJunCEmMpCrv9",
  "key4": "5JPTncv34BTP1qK9VaYmKWicFumytrWpJ1xxUhygdXvXD4wvFvM9JHvSQXQNNXnWDnzrtsHbwTrqegQPqPjjJbvs",
  "key5": "5W5w6u7zpuWpRm6Ro8sxfwgdwCvoZPqWjD6BqTZjNLLZR8ZjGKoDAZEJdPM1RibUPXAvFEvuWMLyVHSmZNKywRVv",
  "key6": "gtPTnNMoqP44EFVLgm1VgDqWqMG2CpsXbfDu2sS2ya13vTUuCDDtq4JBGPPo3zfwwEJwGopodkZG7uCXrwWshPL",
  "key7": "434YuTgSfXtYg8VxRiBiXtcu7bdrYeZLHmVw7QkLE2WUGs8sZXkRsXuZ7paXZUqkw9os1YZhK6nHHrLF37CZAccV",
  "key8": "3ubvLmau7WDUetugWSC4o3notSvuYcwkBxdKbyKZ1bAKMDwo8JNPL4XNiZTjNtLbaVfER9pyJnUTXPyPRSWaNaVv",
  "key9": "EhDHL29m4Hu3wD17sXVyvtstZnvS5VfHqyLsm3YG2XJVyFpdP3ZLpWC4AxQSyL4vb4VQgN3sKrYVxpJHpDYSwqX",
  "key10": "63MfsiL1CYoFdWotMEYYQ1NGc9AzNxPcXEhXzPGYSqUZgpfuAr2m4ZrPWUTLt83PEsREfcozDWQgkA7H56stQzMx",
  "key11": "gekxtEf1vaqf8pxFHaCUAggfPNcNVopCx6z3ndgUmPgEE78LUGsj6rcFQhJZVtEWWzmpCLWv8CB58e1BfgYZX6W",
  "key12": "2QWpZZTSrZVLLVBD9XatphkYvzTgQbFk2WWyemGHH4Z8Zj7YSVXJssDVoGBgDWGjwvLEN78GSLL6r24ZKHdAoTY7",
  "key13": "2Y8Bc5ytodZPYCwG8aNtKPn6dfoJFTdtHJyAnfAsjYbxhuTAQH6VRsEdqAD2QaULChBdGsGMutjMqShUhqvfJ8HE",
  "key14": "2LNECATmAE8FwQgwmVfW4oPV17uKdmvfKCk4KbVKuHbANRkWZRyhuLy6oB6UKS4aahjUY3fJKTZxHqfHFTd9Chpm",
  "key15": "U4x8NMj45TZRvHwKKtFQCcGo4HgM2RGdKBgizmKA6DsAgQZVvfknkBe3rA8NEMgNxFbx5Nd2pfV3TDQ2kxGPvST",
  "key16": "k1YsNvUi5dJ24DpsDbkc7XBdwRWhmv3gRTQVxALaXwPDmH7z8GTf7PaafydWHTQKxZDk3vkmLLFCX431iizUrCb",
  "key17": "26LkbvoDcBX9VEP9T7NTyph2JQjSyArqnm51uKFsfci3BHawNQqwj9TS925vNLTZtwQm3yTyx81qe5MLneyVAYde",
  "key18": "3FPVx262Ax4WgNh87dLxeRA5rfiT9GMJhHomohhLcRgNJy15zCKxtK4cp1jemfxG3azxLM7Ha5s4FvTn73yfgkSV",
  "key19": "5Xi37LodTECGfTfEMwPEh4yTUBLEKHQDFfBMqZyxekghQKyyxK6rWM1uafM3e9aRQJukZ6Q75n76JuBAfd3Q8c1c",
  "key20": "5oNmhFuye8muk79ECPFDCgNnabP7sXaCeRUCXgdUVgDFFodUVJf3JGG3MtRrgaE8YN3vX2rWk7SH3Vo1Mz9sAmja",
  "key21": "2KuU93PUSFfGBh96URFWFXxwXV4y6jhHgdqqQHQupwE9VgasvYBrpshekiFcr5D5VRjqLxUktxTHzZ899rR8f6Gx",
  "key22": "4LyYvHfWYchMm7MyHe9oRzsbPSd8E8FV5HWSzQRVZWFRJppck2RFwsJZtXbYdNpN86tiAKQDWAYXMnTN9tW98Hbq",
  "key23": "31apeLnbau1YeHxhHqSUjrV7wmyWrnkE7R9z8dbnRcZrNgnBxSERJ72jhVGj2X4v3hofAfwUZhUJS2FL1fF4SJTV",
  "key24": "5TfA9DniXk15j3eBBjfzBrAqq8mH9PHQuuHYn8s1cr99F8jGvmVTuJfcMCeaXsQmMC7aGNnm42mWgDvmpGkmjeb4",
  "key25": "N59y3DQj18zkGRCL2UerMq5j1NwTBdDD1zj6SeiLgkuueqVuvxYbS1V32dRw8JewmwBtjWYw8xjPcBrtNRifsFu",
  "key26": "3np2xXEoBnNuDFtSakLHVHioLHSm2FA5peuHfHnUmywuVuWcHPwUwwxDLTo7f9VTP2M32HnJdzkybarTRiNkCWLk",
  "key27": "5JgnBeWDSgQFFpWVQerPfpbuqF7MDnFC8gs5izDKrMFf6krK6Nvr57cHr1PdbuqvNjrxJzMyRX5F2GgQW1zpow7g",
  "key28": "4edHqhYSF6H1dz9y4jnCLPDZ1yubdPzjYFLpNSEcEivg9PPcAVuJLZ9v46VaSGWSG99Suh2aqxrK54q8F7NAe21p",
  "key29": "5nuvcedKom5XJegdiAmBBkQ5nvAHCwm7WCTJxaP8YCv3MBk2GEzzJ9x3rpf5sHvbvrKYkVNnC5wuiFok1f6Lice5",
  "key30": "2iX4YgRUNmmEKQFPAAiq9UCeYvjxaMQD3YPf69FaNDZGywhwDNuP1qX7azt7dRoJxui88PQ5qXSZzf371P5gFT12",
  "key31": "2STJPVrrWdhtH7Jnuw2K1vk5vQBFgCVx4YJ4cFzCGug3L1tx6TY7QJmm2tPjZZmCxBwsMGPrL1QR4KH49qPQ7Uaa",
  "key32": "2n1pJSYqT7gBLcKc4yDH548KzoFYbU3VfqjE2aNx5ajRsay5nsDK6yH3hEYpAqHTH9QhCaLquaVD5FC3v6dDv9k4",
  "key33": "bNYy8K5nBD594gsh9yrB7mwzmcFkjgJzRe9BcVS6G8vWC6bqwxP2QYFvAr8wxxXvw2c5sSyMAFV3SegcSU71buz",
  "key34": "2WqfVw4qzsLv3ouexyzkkHewpt2Vfcg8WurshfJNARMHU7VyZHdpzwdZjroYuSBgAVZmQEuwbNe22TsNhjmek9kB",
  "key35": "4qe7FbaMqpyB96qEPXiEvQSqRs5t1wo5iNkjN92kpHgpdwQ2UyJjEU5vmgvBx1KX1cEhxfSqz1b4vqCUAwofcSHd",
  "key36": "4JX4AA1owCA3c42wAmbm183vJUanL7fCR615n7jhvZGg5UajZncT8cgzpH7d9Gwzm5dEsQzLDbdffpF8HY3fdEe3",
  "key37": "Gh2KYuCo5xvpi53h5nkkYUeUdeUfwXaEoPfGeEWVsEuUZkmJoChMh12KrNA6uy887MzKrAZvXVUHwBZfauoikKF",
  "key38": "5B5XbBN9HT4YrCq2hqai84KHmEjJ2jUYNZ6C9jkhEHh3arHg593HNHNStan3Q6oo4a73RCKSwyc65QhXrjGHjPRj",
  "key39": "mynZYM4NQcF9pMzgxbV7GZ9E3jtCpx9Lm6HHTFbbtEXqjWHGe27j2CzJp8bDom5pvKFxYzPw9bJ7pZPYh6Dk9PL",
  "key40": "FSY57PK3TRPmWyzMrZ2uqUBpGFUHCfMi7dyNjbcoKteCyfXJkQshLDUfR29Hk9iGnzqfFx3mJ2iGhxeFqsg9qfu",
  "key41": "zF3hvFXJbDZXMLFJPg469BadwTW5RjWncznSowoYt9R2HKPpsERHgB5wkCxNQco7U1GLXfM78SPeoboeXCMvHWo",
  "key42": "4NtfbveHVcmsnwnsdUr3bBZCrTsEVDYfaFnmfG4e7NRb5zFVZ4Veg3qKsy1z8CdjUTPV4JLW9wYbvUXhbkMcgfyr",
  "key43": "skGMr4Cr29hLdzxAF7zLyd7jfUVG9h6DNG9CvZP4jWu51iFYzx6WGeeKbCCe73KjUySUJjHmgcVJzUDM6Ma5EB6",
  "key44": "5rsH55nZFnHq1mTR7dth8GPcFadG1wRruxCwjbgJzNYwwPF4yuCrRzQuzr7r6VRrUMAH93Yv3vKywzJgRcnvAF22",
  "key45": "45vDceV163FoD3JCr5ePGtv5VLVjeJp2YAoufdyWnz5SW7N6NSwMh856jAZkpRuyuNSdv7SYhc9QgMqiLTeNkkDJ",
  "key46": "44MjmN8rCqyFbGnMeU68f26gMMVUTQyxedSZ4p2UQzP1QSpo5WswBJH46FR58inPfPm8Yt2VyiSo8sEjSTChHpPe"
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
