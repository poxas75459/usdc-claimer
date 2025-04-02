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
    "5RYHaC2ND79PoPq8tBjCS7yEE7EmrpFQHVobHQ3fyqfyAP4aHqtKMgix3LgYBiW2UJHpoXxK3gocgP1e57JtvHKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Ur36xRu7oXc7NSAHQDjAGknXzEH2UYUYhEfBkDxz7q9b2wJeT26xgmWw7zGu1ABtKEmcGFWKFcCAT6GG4VecwK",
  "key1": "5v2wCLRn3z9h7vfDyNhX5VAk7LNiJdqT8vZ5HZ6HE43UKoUSoViZ5gYrWKNwqVHGBFwZds8NHGPT6TFAJPxKyRub",
  "key2": "3ze9pNPyts8w59tMspysTxFPt9ErcNHcADFJPa1pNzEcqvLtX2aq4dBK5YbfgNqRZJR71qUnssQY1oBMoWeqaJRk",
  "key3": "kftK1yayzXjiv1b1zQ6nzbA4RG5RpQaEjHE6b9uAZ1LGWCSqKtrbfMLp8sAmxgw5hZu1zoXrxc7PEwzUhDDWKtU",
  "key4": "5oo1UvYWTpovB2m8rJzbjdFq4Tv5kyqheRDKUwJkwpCuQmHK3dVbrFm6MZ9nqYReBS95WQ1Sh4BD7vxjCYyxzCh1",
  "key5": "429Tn2CPd8V24WrYY6gM7EpDnnXh6XYdUktQfM5m8q5x1Dy6zSVwHmLg1tvs4KGPsMR3T8as8G1qezu3Zbnw9ooB",
  "key6": "5CanDAaFC9edRG6PdivcZpfg5uqBubouVvu9ZTFePP5Y1TJc2JdXXFfCPviGrX7oP66Bi94PwNQ3ayuFbdhUG8rK",
  "key7": "2N1X7cUgQ7UGxHV82gmeD2Kht4h4aPoNgAu1EYwzymq4sztYJZehykguPiqQwGtMxPpEZNsfdYtMB4AdzaUS6UEk",
  "key8": "49ozkakDTKMJ3EtvC1cX4cLxZB3ufHFwZpaxZoDjDo2FcLFQ2S9oHChEjzzbnXATB9fJbg5CmyunYADofDMbekkw",
  "key9": "YbgQZHsz7ANxPEmAjXqVxg5GsvNVZo5kuyYFKXpZmd7co4QtW7yjdP9QuBT2Ah2Jh7kBTNUX7Jsr5yzU8rRe54F",
  "key10": "3q6KbdvoCk5EX59sLoTegNbVLpn3bDSqH417ght4GUXuiNY1rEKXxyvHLFtCeBiVjtxqiyhbtzSwHBAC9GFq8fTb",
  "key11": "4KdNQm3KcRUV2KePKSbzWiRt5FsFxf8wdE94WMdvvZ1e9LPZcEJx5mv4pydvWWwMdMmkb5AqUYM2y57ZjG9dda57",
  "key12": "2maRdGPnoWbURtycMDeYZPbtQzTjDPhcQZfM2Faw5chXoeQWmPRbt3PxG5DVw6Lp1pgWfQKjkHeALhNdEDCJ8k4E",
  "key13": "5mjtaFzfCWMX2Y2vLXiE5vQfEyRTqVpYLo3VYHrfWTXvShdnpakaHYPrqbysoDWhRCuBeSBrrA3fdWDAn5pCRoT8",
  "key14": "41kuEJupZTcsvkFhFh9LmddY5yvA4UGdAmFhckT5SUyT7HayToZjAchwa8vLJqgASR9Fpsbu9w5TzmbJ6WyeX4EU",
  "key15": "4Sb79NfdnmuUq9LHZeehsER1Zz6BAKYSzBZBXFyqi2M1MybJHvEN6kwEzpQkacRPMEZrAWVEsnxuaT2btrjmUSQc",
  "key16": "3a3KMrkRiKZxsRhNowqpHRdk8qfDjkF1Hd7HDM8MNznBmhBp5aeZC5iXqFqjmXw1MLZHJxZapHJZwvEfhtYnw1AK",
  "key17": "4ZfoPEjSefX37Qaqm76dJa76DFesuGoVnvE2EoRfaWvDpDTRMNvz5zNmEMrK96EFX23sR3U8Hm8StuUpboSxaSvj",
  "key18": "3w8hCz5vP6KY2x64hCVmrcDYHY9M3i95vcQkPSGU1gUaEYatkn5hsdsh9R3xBdG1449Sao6HbK4RVrZK84eDsKtM",
  "key19": "43EFWfefeJ1BSfP71uW1Yz5wxGut8WV63CNBbzZ5iqYHtBSDoMJka2v9V4DmUEZ28Egkm6XG7sxMyAvVqRdqa74m",
  "key20": "oafZFWQTmjUMaHBrsC7XDY5RBvwkRiufSUbagt6DU8gk9Uhf577WgpQGDWdTjkRPKchyXuhdKzivA1RGt7nCu9F",
  "key21": "r3rBYCdWGXXmPUbr58eRw7vDpj6wDrWr1rDhchC5zkas2rvYvoe5gaxGHVW7BB6tuWZcNxy9mnyE6XqHEQY4ZzU",
  "key22": "Swoz5e7mGPFPc67vqgwMQ3QaPqD2yzZnmgPf8vD7NxZTxbBZ8HUfzYNnn4bCzX7EieXWcnV1gg6qd2pUFTBDqe6",
  "key23": "agW2Dr8PimComqJfcBZkdk7ghXcNqFLjA8X35EcNaVqLxWkkHs47RcZWEtUZffPHK7rJQtHz9o5taRXUqERvyxp",
  "key24": "4CfgG2WschSdPSpoGP3RwVN7NFy6Kt9xEDpn9NwDFU8wRh7acWGHZKCF5yJxVJAxJtdnnjFqPjpwRYMgKxYK7fuS",
  "key25": "47iFWEHxSakuMb1ZmzjcSzeby9e6oUhanRSShRPPTAWxrxEyjBZNtPfo9wpJcMiAEgCFtULXGTLjEBYpNBvRh6Df",
  "key26": "5hQyojmGjRS5LBspobjs9H6dtaNPuoDySHdnVxy19mboxCD6apPNzuHhr1HD8Fj8AyRP4GJFNqVhXeWF6RrU3LrX",
  "key27": "FaHXX7wFJboU2tjoR8ZzzivJtu88dZUSgEtuujtNuJTXjpZ2V1TBfvmCxXq2VAcyh2LSppF5oSHzPwNEbaQfR1b",
  "key28": "3fJih66G1ZwKsoyL5zBWD1a4xpu9Mp2tJHT5Z49MbyCHKNULXk1Y1ds1LvuHc8XCHZm8RToGTuWo2cQVNbUwVnys",
  "key29": "2qbZzPYEuoR1Qum3Wb9dSJCLPAcPPAWHfBeGGaPi8GpwwYQYqsjSMZ6Kurt1QGYvgQYP3iY6grB1FwtsiVthF8am",
  "key30": "3Cz1X69ciMviXJZVULYJem8QKfa3AAWrQErcQuViZaFSyxA3cED8R6uv6foqTiWmu9FEdQCM7Dxe52bFxK8CjADV",
  "key31": "53rVAh9gmvAbNvQXPMqxqPzXohj9VZPUptKxp8ZebWdLuaFS9Utm8qVWjbEadRnma3dgYZCVRTuuxNzx5QFSgxJb",
  "key32": "5CwBGKhQCP2PyuKKdTq4jNZ5ZHLFmBMAjqgCtTJNsvtf9ngv2b9oXL4moBh22nL5FjNMwuCjgVUgfmWd6jwwePcV",
  "key33": "2LWY5pzujP44uyiWFr3AQhaEkmKY8y2RZoWdHrvgdaQMEERXpoY3kg7McrDx9wD8ZAfsBJyHnbJ2mdekaxZAdjVb",
  "key34": "2aCcYTBCS2cH3oTqwNJqEK3soycFjSafsrB1orpGshDrKY5neLdvdwZPWmkGoAmTcKMRewgs3zo4MjXWZo3MPnFH",
  "key35": "WjaCR3zpH9DjDF9jC94UVYtvq1DodUzcaWXJQyttJFNWwhXnJjYPB1ijUwzB7SqaBUaK4ryxqaCWN57SzEhuRii",
  "key36": "5Mgm5VaJXSKkaodryCfixwTaXAumRzw61ZPNLP41cVhy4kNXMJ5RVcFYjwHW4HPnypLbrNdmrvfN64v6oRMKSXcC",
  "key37": "3ia1hZ7osG9KwRza5vn6vBQ3Gyp1mNJkCywLDqsFUEmQkKAL1HZwoaKNZT2hAFwF97vJiZFxNfF6pL8Q8s7KTmvk",
  "key38": "53G1JsoVRnThkD7dFaLU4kLwHiZ1ZCcQNVu64iNz9jJNnm3vVb4ZCckCu5qv1bkE3Kzkv3j1WoBysvBdoCsFo6Cy",
  "key39": "3Fgzjdkd86yzEipQY8j1ej7QZagyJawLDQ8G5tbAoBVkbQpz1mnvXpeqZQXTfAnvJb4NrrsemH3oFzwefDHrWLyo",
  "key40": "5L7p1u9Bui2ukMXAYuBgSHPQxbpp6uuzjkpTr7E69SFQgooXgcVN2f2MtXtmtmXfPg8KkzTsH5mqfXj4LAqoZeQk"
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
