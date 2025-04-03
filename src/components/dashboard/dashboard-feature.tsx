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
    "E76xUTypFV3UuMHmSjGoJEATj38oAdDbDqFbjJk8ndtXSo9B7tMoCmJR7aY8PjpVXoNGbQYRfeyndeDMkdBUbJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2atRuq1xTKmnD2bmcNEzUoo5SwemdPKVEoN92rNJSY816AS6BMFqb64qqKZkctAEn9qiGMSny1H4F2MyVMYMx7QL",
  "key1": "2nrViLHy8eEAt312XRers96b83jY8dbSNx9fWmwfmSjiSNRPVZTLygqks7F6zfqgQmyXyVUCNtmm4i5pCdQiFKyh",
  "key2": "2jaFZ1EJd3ihtRLzrVZpexbT55gnpmz3NNuN5humxsLrL4qEjYidhFvPiE69EkcD4TjLUD6d2RMokkPe5rWLk6Vu",
  "key3": "3VbeUZSgaYboiAUzLwGHtfE2Y3K4ctdGWP5cSWWHUtVzc55neGUZdHHXH2J2drnFn3d9cSRo91gxyayeK4kYhrLn",
  "key4": "3mePHK15Y4eeD5y3kbpjW8vQKxb5oXLdmfWnM8Rz7BL1njJ5Jf3MQAjoLMsAXWvjQsLKU12kt7qWuinXPCgsb5uG",
  "key5": "dkMTEXqTMYMG7ubqDpyyDgopEA6uMthsy1PjnfEu99vRddVvgcURiFPDTa4uSVaZtxjU5Zp7K2pYSRoTbkm5CgZ",
  "key6": "2rZaomtii7tapfbo5Updh95JsGct7WTCade4CEJYfDjiaSHVLsmss7pVASvtbB3awpGjV82mQ56vs5qu9HPVzNNM",
  "key7": "4TejZQQ78auWECodc1fyW7BPC47tWxvG3szHKmi8F5zs1dq1oFib42Rzs4c2sPjs6j8q6oj13f8gpWZ9juz8dhZ5",
  "key8": "4VHvxKH26n6R9hTVdEHyct5KYs7JhVt9uBHVqVTgWvsEzeDogHxZeWefZB3L1ehyaMfTbGwyX2ZDv9Zv94WnJzwQ",
  "key9": "2W2bHHwoWGRcbw8RMCDLGKroJm1rEQGUhSCtYbWbQRKeFtVL7iYyt1thXQuoqg58PyxTwsUJcAqMbkdT3CSvp4AU",
  "key10": "3V89tKK8KGBaVAMUekRcXqHaZTU3tdasWaVybt1dkVsReARn4xyWEcLYETnTP9J9XZEcBjzp1ca3DBvFnjKLqMqF",
  "key11": "2DvbcQMmNB5gt8mRF7t9vdRbRaXLYDGfPpe9124HrNZ5aFpxExEVpmf78qHX34qShwiJ18yVVrKGrSt6JEdvirW2",
  "key12": "4QuvEFzyrx4fyxkHJuW3NkzCE6LAsVq6iLmyBsTppSuZd6GcoHgn9yBeR6yL3mhXqGBCaGVRqutw4GpYa7HvaE62",
  "key13": "YSser9MnAJXVRHAhZC9Z4rWzfHeoBkemZr7LkH24cdRn8My1JTRscpy2vhbkhpeQ4qD5t9bKTJDKv82GYrVNu4V",
  "key14": "39Skh29i7rSuWgaugz45muDqLXqX9MyxFoDPuiMU4Pg7W5Dx5S6SDWkzVXqX6tT5k5wErExyCKbvJCiqpXcYKgAP",
  "key15": "4wCYrDmy5o9DPjvdbbfS4B7sEafAwJXVP5anFRuvdWyA9aSVhzUWUm8GZLzeZcwvzWjYNkqC5MqDH1ZjccSKYrUS",
  "key16": "v9mZ5vgKiHArPB9mfw5gdBjErzQ1J7tsz34B2H8Eb5X3iG3Lt4nFaoHmyNnBvRoZR5jGcoju9MGaZQSaE1iM6mv",
  "key17": "cdJ9TMEvBfeKny7a9z967B9Pp7uEovjqss5RZAvBeYbPEi4FAQbE3AxMQ14hohwJAYrKKkYDdaWJ6PH1VZdCpu7",
  "key18": "3rWcpW314SqJ626TBmk6A1C5nKsEdReFB15ihWB5FoqcVbqMtSiQKMqYfXuJ2GoTLgfAiHTZBy2M31krq7YtYxKC",
  "key19": "5w6PQLnUgPvNiM7ttJg3QM21LNz4YqfcNVYZaaWd8H7kfocHJhBB4RsKwdGjSDAeeKAC9bb8zKPNq2BgR6oumKn4",
  "key20": "5J3jPKjjmbigUDGbQ8KJbUFYm1ewrUYHbyhkWKux1wdhQ7Y4PvsVjeZvzx5rScLkWQvJHeVvevs5EdH5GEWvQ2hj",
  "key21": "oMCUt9z5NMpLZzSPyppbGZTswuRkS6mTbmukWEvQyvBabPBgBLVoFE1rwGsgz6ND8TTQxVNnx3ZnfzLzcMvrboJ",
  "key22": "4Ce19G37dSP6Ya2nZwXhSSjtAmJZeR4xDdd2bCeEqH19LXq8EZvEHV5KkSSzY4nnF6YHNmKDM2nBXBiHyGE4G3mt",
  "key23": "4fiHUHJWYt6Jf8KhhNyaDLX1Ctbh8Davfp3n1KP9EgwmKFSbTEpPRc61Vv6DCN3EenCuYe4apn2QG9AJQdro3KqP",
  "key24": "2DwEVSvYS2ZMFgAqZjTjhveUhh6atRW8f9dvU9CGzLrY1gKEwsYNG3zsQei8egwwfAoD1ExjADu3kpY5c8c76ykH",
  "key25": "2kDfYRfsFjEG8YmYybpZZS6VUp3ppnBhxk3YGmTzRqyDqae6rBxQJ167WdiBLBjaMTjhiMpTnoeAUy9GEjLraiHj",
  "key26": "25yXKuzFMuDFrkKb3w1C1GevppXBJeiZrM2tuybh9BAnZ8mxtb6P55WyHZivk21Z87zzHD3MD6vo9DqfuhNQsnUd",
  "key27": "JKwrvx38YG67GXU6BPxUSb9qwLF5QoxXWW7ZNCZ7Randr6AYMmNZmbdPKXedX1VQfa4cwdDtXh4raU9cgxyKkTB",
  "key28": "66USxptPBrKtfRkCXmRzcUS711siyF3RvsQwQDppjZYnXhuSsZcW8oR4Hvs79omGRV6rtihUvg5PmHNXrzQqZvtw",
  "key29": "3yvb1QyccDSyFHYtzqrnoyL6djozdCmzXVdeKLVMhpnbdGUdkU6ePRQpGStX4Q836amMrK7WoGxMxkBahxWu2gZo",
  "key30": "2rWW429hTvLo716KDyNvn4UsYjZg1KT1PMufxqxSeun5NuZuPqi7nTTwCt9yh9VDwvKkDDdRfP48V8iA4jia2Egq",
  "key31": "mQmbzbv7nsnquBxwrdjom4PVEnxpaoN3r2Q9pFe1xaEPUrefjMgMCcSs1TXFfaKFCUrGpRE8zvGDEvB6kW3jb6N",
  "key32": "4AYfT76eC5PEyRwZQxPhyhwG7oGgmN7Gwity1PZk7Zh5vbXcMXUybX7FaDEPg1LAZ2DufHS9UHvsx54PHrAhT8By",
  "key33": "5SHge1oD6sFeHbE2GE7oZ8M2t4WntWdptq4idHv7REWcMSzPw36BTXUnD55M66YqakMmfuh9jCReKoRZ8Nk9brVX",
  "key34": "5UqWWsdnyoMX41jB47udUKNFkBAuJ2WJpoQfQVxNzWaXfUaoWhTcD48dzBLT2AXWZcoUJ4JSgkFDYSJku7jk68M7"
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
