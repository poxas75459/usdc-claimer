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
    "4NqxzAd3tPrTFVwA29ykfarJ1gfyXJcXMWXcDZa2oJuBK2yM9hTmtcpQogctBqDvksPG1v27cpKrjxvVTmRWL5qQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ttLSQTjh6ZMMHvTdpv4citAvZFSnz6wyUHwCuWhU9iCEETkorC8JHnF1yJXv9Hp6vuvnV6YoYR9C7r5Y9VDkDE",
  "key1": "mjCkWdFBS7s5ggAgchKgDU4qC9iYNz2dPGoEqoFyaTM4vnifptvg78vzZAtrtQHUXcR9ptSbdzPxMmFhrMHt8fh",
  "key2": "24EjpzThcGYrSKZdtz7Ye52CfK3K12fyj2mgZH2APLhSBvgwVdnYij39hyN2XLpJ5g2NKTMssaaox6fTy7NLvGQS",
  "key3": "2nnt3s8QHaFwCc9Jh5N9D2iBVmq9ggJHQntBnRtoxg2arKq2mrWLrakeFwiUJeuEbYaCy5recpjUEDdbKo91zpXb",
  "key4": "51QvYJeStzefo4tPmAixSfmoUcs45kKNsbgnknoZKe6Xi1JRy7xsdApvWwi4BjmhP4i7Qbsx9H2y3C5mtZR59Q34",
  "key5": "3828pESMvy5PiDsKVwqmqX7JQM8ngGKFXUcDgPz5zvfANcHAH1H5Aqu2ndbVgK7EQCUAJqXQ1CH8Q9y2yLJG7zaj",
  "key6": "3ynqXjHetoXbeyrsMdidxGmvVPf7yynkpCEVEh4ynrBQFMUFYJwG64HtPj42fVe7rUrmQkG4nrdoo4Xk1bxrtwjJ",
  "key7": "5LK2Ya17kUSg5amsTbVqooNy8qr6AsSLpd7SrowLzPSppzx8ZAnWQM9Rg8ZKh1E7Ck3zhuKFv2QFRVYwArgdfCQ9",
  "key8": "5dyZj211SYvLVinQijAYnKdJQS28aULEyERxJeSrXWHLtS4P24edpektcbk5CbSB9Zn3k6FgvXo8mKKU2EM4kMo2",
  "key9": "mcVbxJoqX4j1X47yjqRYzw6pRdT8L2dsk1sDZnMo3fhWGmf4v3tYKjDwQ8c87s68ssuMAnQ2uU2D4yhfggfYMES",
  "key10": "aJu6v6PDY9kFaAmFceaWhzMhe2LiGWGLDjvnz9CQNBSxARMixSSnADhzYEviQkKQ18mzXMPCafHCJFuxUBTtpWU",
  "key11": "2FApdJnMPtVwjFikKxv7QUEYDXTFKhQyc7uJSbeutda3JPidBTa8xUZv99NUocqe5PQ2Z5M3gXLGAUdV55b4eFUr",
  "key12": "FeFY2cWxvwFc2tuGehMFwWGEPCuUmmoEGuqjwsXp4rLuFFNiUYT9N9ZG7eW24dPwrqQy3dtuX6n1yB3bq3TUm3v",
  "key13": "3zp5Skg7oRSJnQK5KwnuJTAZFMTxjchk6f6r4aECXY5KVaHw8UcCctFtxPN3xFJcMdxcHCVjNY5NfUjYYBfgxKby",
  "key14": "2bfvYcj9ZErUL8ehMsfEFpGpq5yukXTwURuTLSoe3MNg9uWMVKSkxG7hbKJQaBitaLhn81ayuj2cbW6nUXstAbYk",
  "key15": "PZJsUJKLcXa8NnV9kZ7GZunt3eWbcUfdLKF5eEcxpWAkLCptjyopgyV63AMWxTp9xwrJdmSF3PGxnNDRUa9NLcU",
  "key16": "3t6vKFrzQVUxAfwSfaqZGAP1ZhEhQiD2pVBf5ugyS6BFaTeLpZqxV1jyXcKCdSq2CsdbtpBYoEXMPoyXrZX8S7tR",
  "key17": "ajYncvWBQJqWMtwshsuMCZqym8zXDz2piEjUUp7oxQgziszwVAazMQzKH653CwPoqVDXEmQx4LyKUNy5NSNPSud",
  "key18": "3dghtrg5CxQvQCNr1iqB8wgHuSGiPBnkUm15ZXNeMZZf2LpovHXBDanHwUjo5qGhFfe4EoNrCorsJ9fqvBhgPAc",
  "key19": "3GWmKMRMPfQrMRmK4F37UXgkU5CCJku4iiWeT34JxTiKnNTgbCuFpSZakxRFan8jLLLVcQkeDjv15LSd8HsSzzBy",
  "key20": "2frLMFV9vLd6vPXCHNBiPdmn3njRoG1HqRMFRW12y9vT7xN4Wysum1e4tThYqrUDe93YEJdBLENgX7UX88VfVTzd",
  "key21": "3ZEKsSCGedJ9RwTyytBNtD1MajXNSSzUCfpbF7fUMtbBaittRg5vzPhAF8xtJtwUQZVBiW9tSAU7yVLjJNhspyVv",
  "key22": "48b42LZU3ZKiW67bav6q5xTsfXdAJKbYuvQ5P19kq3wAASDVhPzKiJZZoKdSZcCborAn5otLbYDhLSaBczYxgCqz",
  "key23": "3aqXQdUrBKB2ADsLkMHF7UGsZxCtdD5CPuQ85PF63VDGSAA1BUzceATcWENMtLTg4Tfa377X61VpiUse1qNPjUyx",
  "key24": "2eWRHFd4BDTkGNNYZye6RhoT1jatAE9ptPqycycSmYDiCXqH2gH4MUgDrs6Bqf8qGLUJHnkMSj6xyCrMgPAg6FVa",
  "key25": "2ruxJLeuEgMLkYR7xstFvSPXWCi9963uVW6VgXcpCxnUpAXt3mUkpcYypJRCa4ic99aCFwgtEqpVvDgoWa6xVhKq",
  "key26": "2hbtWJk4kCCDcbi4dQ9m4GLG4Dcj1S8N2fv14joe9ZdcwZSSZhpjaPVjuQZvRGav1hq2J4eoeB3zE6oeZ4pupkFK",
  "key27": "BsQkbcBj6ocPmQkxKjWgTChU6vWKBxox7Htr1MdxJ7ePrrpjpYHwPv1zuPjrYJP1s5ra49ju6h2HQZNh76pGhdF",
  "key28": "Xf9ZBMNZaSxYoZKzQMH5HFTCeWTYPLdUY7zkxonetCPvc6iYQfMC52UWu4tQ4JWPnPfBVto56Ramog8Kx4jGk8a",
  "key29": "4NPdyCMmbqRnHE1AQvYeiZXkzAtZX5V975dsxMKffDULNC7ySUSNajBWkiXQjS5Nh4sKuKSferkMVedpT73xT9K7",
  "key30": "5zrxkeJxuoUuokXFWCAYR1pirME8PkMLQdNvtxUTXbsPEjTfRyv9S5g6jtvzA1uf6pp38KuLjTMSEfqAZb9FZAWW",
  "key31": "3g1Rff5QuRao8JDwnSFLqmu6uU3pVYMkSLK78ySG2tu5B9URstcoek6EJ6a44LPF1J5aS1WmbrEyTVuGQ1VfXKjs",
  "key32": "5twrzTP95BfsNB4kA5qYecVVDsb5meTY5rCLMKNM6LDoZjM4UqinNExxnksdMiNJNYYukPCtE2dHBKxQbbLxrgYP",
  "key33": "3vBMoozkwvqvXsx3M3Fy7rCULtqcaFxZvkxKGjx4u3yXTADheukZDDaSPYzaPPp3Ljo6VU4ncwvpjdQezhz8N4Rc",
  "key34": "2VKzn4cYeYu3CNaFCZni1PiUYuNt3oyszvHyteaWwcXUqbL4234Qd2sd6xAufUqYDt8TSPT36Wu89DA7bi9AUJBG",
  "key35": "4UqjAZpfdRQukXRwN22CCJs34Bme4ACY1qaugvzLzwetFfTMprWxX9qiAdLc62mx9mZTbuP4ry5C2swomN1oe7gi",
  "key36": "3UgzwAdBgnH6ch4dgmYmMvog2Vgk5AW9wW1BioK3ZqKxaaMw9ZWnT2ubjSRc9UbRYWBj51gAZnXtiKkFPPqz5L49",
  "key37": "24g1qR9E8gBSUiBwbhKFcgsmeMfNbS752dJaiTgPbER3Fex7RxotG9LYAUu19uirQfgxbdTRdimZV5JX6uVUqjyF"
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
