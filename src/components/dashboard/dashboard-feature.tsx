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
    "5zEDm6Se2cyoepqWkDzqqwAPuc8CYxDBHTz6xmbiGVAd82j9YWtCcoQu4hDNT4rctfk1HzNiE5FJgnSe8qMpEuxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E4Eq8c9Gw3cAxihWnJGsY9tpSWAUJzBZ4VGhM5q1tq9WpPZhX81YevzfqXpD2sFjMXaegpUkfmPSRsxuvaxESfx",
  "key1": "5MffHiX8fj3P2o9KfjiP1jDQcnRsugr79HzrS3Szwv59QASVZKANPonkna38qecZoyBchc6tbgbHenyBqdm9PrX9",
  "key2": "3W85BARVbwdXEKqKubERRXPPjXnbKmwFrnUZHz9Z1xs4LiJTRXS7wyng5eR6K6GDKr4E8wJb8HS78Ht18vq5EFGu",
  "key3": "2BFRwwYhTykHQr51SJ8SiUtk9mYUD93yvVQbFLt9CyMNDXV4k2dQQjBiSeCJi8yrXfiz4op8GyEqL5XYJSuVRezj",
  "key4": "3DK1D2TyfvhfRCqgRN9N6D1sVFZEsJaaRbvuRBuk5MR1bRFcJusNLXfoyKWeKbDDcbEEjEnWjPJG5Yf4b3QpSEMn",
  "key5": "3TkPBivgzdZGqXt4WuCybg62rrkWboK9mYPSMQ3fQn9uAJX94mXNuchr4sySFHZFPVEbGydrfoYbkRf6jZAMrKBU",
  "key6": "3K7Hhwjob8JRbso6MEU1WVM3CiBUTdGnV7mxymQ84CeTTz8wFrRGzJsto4HdF5x5VPtS9tS7rjNdQc9nngb7TwvT",
  "key7": "5fDJeXTMW4r1CiGPvzMyrUzFohhUZHZCea2H9UbDKCHY5z3YBvnPaF9AuHsggsPpVScSdfk72kg7SUXb6uHFk9HU",
  "key8": "4FzhP9LSUADvMyk1LpwzxpnkAsJdVnbDHA2EyebSPV1DQ858WJEyg1ykHXTmgXsAdEgzbAiTJ8kuvGm75AidRx7B",
  "key9": "4qeqjGvWr32azS1jTciUXEP35yrD9mt9DYU6ASA3tykMsaM3TTymo5DgHAGf1SMfRx9CeWCMQyha9Y73dd1VJcv",
  "key10": "MXrm5zrfTMdFLRDZ26kpehige9WZZj9kHWyzexxwCbrVedmoHks8yGWAeQ9Zx3dXePq7qrKzw1rwaMRL6ykkQsv",
  "key11": "3UfRiNZu9Tbdn5DBNPyiftYTCRb5BKfLP1pCQ1mQvExUo5bb6pXbSiRfP9iEqw1divo3TMuqioXNbmcJCK9y34Bw",
  "key12": "3arW2gP6rP1wZvG9BcojtLZdSmLr64kb6G2ySsUu7U528K3fqxKGpM3CRVR33rdMc6b7vQ6JXUpiVEqSt6oK7Jrr",
  "key13": "D8dsEKUiWoxSVnnFzDPtJ9EDtq9fo68VNe1X9jhwuxGKpPbwGnV98txnJ8ve9rvJNWzgJ67znVGLMskuxDPhY2W",
  "key14": "3xoXbk1FekdjYEr1g3WDCdebJebvVpX8mpyu4gNSJNK6VdudPjChaa2ANBUJNM2pwurMe2S3DzkUjmwCju6bwnhr",
  "key15": "3JrhTUyg76gWG9gpvfZ76nNJPhTaCE8B8V7f1RxAMComZ5zwMU53C5Kphnz4dUkTWYUGSFgkiDACbtKmj2T4fafx",
  "key16": "4BcGbTuUhyY8cVU9qpVYxu7gh7TZpnoRg4ZTxV5JaBY3uEF6WW639gF1fb1G8g7jHxrkx3RTyFraGaxsWuRZCF4H",
  "key17": "Qk3FoxzrPPJq9oqoKU7GoqgDetXJ8bgc3tiCXWs761h8HUurxYBiK8VjQRZmtHAZ88CduugkKpdmDHSgvPdkiTx",
  "key18": "wxfB3UE9KFi4QLv8uj9V7KeCJymJfS19V1n9B5fYj8fqVz4WBP4wz8jKSmqz4nsE2ZZfk7S1vCVYEJ3ccgu4qkF",
  "key19": "5huierqbG2KcuzkrwAnkyaXqJq7Wv6McwnvTGxqtjM1pSD9k7LP62W4B9d3RvLxVApGYVRMoJ35LhRQrf7xvm7wL",
  "key20": "3aK7GZHQLPSCCYkhUEjNdHsPa3eaf9RAQdybMiiuLc2EoXuESCSrgu59nc4LqFTnipS45izX6jF51Zoewjo1h1jK",
  "key21": "4yoN2sF78UXMxAcouPhd35d5Rw6M3m4RwotFJjQeCkxmgCvEjFXdsm9vTMSL1Y5iEKNszEmGRoDBC7t97NRHfp1",
  "key22": "4fqGwMgsCy5noMCzdRBwUr9wqp1ukVSPX2EVZAmap5dQPW4Ve2pC81fQQCVm5CvNVxT8wCmc9A7YpYE4U7mK8Cbd",
  "key23": "48UMVYqnDMBP519iBexoSb6MhitJc9uN1vd8ZWWAEc7MByqYrAQzqWwcDsCVZYQyXwPZxYzdkMgGw2Ui7bdFPuyG",
  "key24": "5EVSyKc9GnaV5UcQnC9XWJ2AhrzLGrM5s4oD5ebzaAS4YK5sP4Pjxju4obiwhpYL6aqxW6uJLg5G2bZgWsptUt11",
  "key25": "3A4ctUZff2kci3j4rJ8bzApMr48v4GnZDhtas3NmSomhA5ywpc3prabX2QFRHGmhHQDFukpYnNU6JESS9ZP8iPCX",
  "key26": "3bjPFFuGMGnXpXa8vLgTHr4ERCS2v1cz6fD4XiUhYSxvtZBetDgQ3HtSe98AXh3Z1qM6CxafLoGGVZcgRq9WqgV3",
  "key27": "NtW3HCHot85dN8ZGvWhSEzWEHth9TfnSAqQhaYqJsEuAME56PzpTmtkJWsNyEoc6iK9ex67x54sbcwtHN1tncgq",
  "key28": "4VwjDYCruMPfwv9xtK8rP66HqL9ZGrVXEXTZjFJDUiG7m1CYjVaUGLLaWy5b1CJLn5H3svYe2fG9xddgiMiFqAs9",
  "key29": "49vbJWPdscLRFV5GJWHLcJFnUNMH8Ek3fhyXNFzqj4narsZxig1uRzT3gJ3d4sBurWzwuc7FPPuvR4ZCbR61QSiK",
  "key30": "22AnfRNagDgBj6ShHfuSnvr1X2dna9uh1NKaxkPR666Qp82fbvpsMgEojuDTjoE3XwgYJPsqBSHtBLZaCWAzsbQL",
  "key31": "4mp2Rr7dRA5cC2g1D7588GjVGMbo1j41zaZWnyEbZndJ65wxsF4h8CtwY8KrUmq64akFo1C4iXqsAWR7KAdijjmz",
  "key32": "4Nvq1p14irCfif4VDF15Lz2zuVT4USqkmMnEQSVrAfWXGqYatem7NQcVtzZBZZ2u4G8tLAFC8Ww2UVxGhsk5wJB8",
  "key33": "5Ny99gdmUnhuWktHsX2cHUPdvnB2f3gD8qXvXkv2ja8ASrbR6iPvFkWboVEzoPoskum2xz1Z5HxScUPAtDkgbeiu",
  "key34": "64AkEX3AKTv5HGKckk2tnWX6R3KYHt6oKYbs9gUekF7BdAGPnWHXwycnfuFx9dmFEdkvVQ5MfFcGZ9AmrpU7Wy2C",
  "key35": "3NjFamDaMHKYMiKG7eY2hfQDwkEaLVaLqedh26tG6ktwUK1RoJCUXfR4L6nEtYfqVBhHS1D12jyh2j2S4yug3VVY",
  "key36": "2vgabhsjGJ247oKEEwAK47C3nPFoZKpDBLWtjBQkUx5YpjqY4pGcZrpeGyRJX7RS6wB5Ez36LcUMbzF9dfxRaizn",
  "key37": "RoHvbpW3oR3qebsdNGJttp6Tx5c8R3z4uC4XhBUeiZ6wnVVoJfmjbH53RFJi3jNXceHsu3M23evnafJ9tMR978h",
  "key38": "4pZs4g4ZgHZyd5B1UiMhExj3Ww1satxzQtTJdhBzYNEDV9gC8Dkyi7FXzBVFMUssmoY4v7qsTRuVqzUPfjiWtUf5",
  "key39": "5Dt2qh6HHsxMFKwkAwjHvaRKGRYLUQ8bDN7T9C7KAtxg824K2Pg7v9dZde9RmohpczVYxJ4gKTWUWXDKHZMGS6sM",
  "key40": "58TFLHNsxtxcQF69RbwbHpwoeC1SAB7YmaoGizGCFZSs6DRnbjWNf5NyiY2qqcF4pLfFpoz7NWdE1oeYmL7f9vto",
  "key41": "g7rfBDLfM8wVWNJZoFTKNQdRGV6nKtxD8uhZfJfYTfjZNgcAu1qxoKjSzK7hWnz1YadSWDSxGJWCVHTtZhDtPkr",
  "key42": "Ji5UTHhUwuo3k6h31hQCMbu8p1xtAdEXq36wdWW57Qxh3k4ziFWpHeUBrQYdv44DvqzS3ud82dE8Wz6gZEMFUNp",
  "key43": "4jaCaYeZAQAThE2eR7evRQTTxsF4ATXqkgZti64YiX6QimAaXsbDEwMqDuYdbB5wTr2sYdjezrsBFerrBVncu8EJ",
  "key44": "5zWKB8GqxML7sCRa1vA6PKu5exGULSqHRRqR75rTswG3HuvFpQQbfC2JoNMYmKcYRgiQQwR9JXcgmEmL7TmRpmQ9",
  "key45": "42Utw3XGuzjxMifZhF4FVe6kzR1KBii2dqaBjZ4aGfKdX27F2c67Tvr4BQ6uihGmML2CmMDsp47fGPWZFkn88kJX",
  "key46": "3zxCQos6vqHx2hNBUMNmcBpsor3ABtMcxgmPKrMvHBoKVwDhwyehiDVMKJYE8fSBXssRpGPzEQrwUZYJRGoRsqb8",
  "key47": "4QBUzKNS7vFnUCjAopJfwY1i2MRF4nvh49m8y6MkVuMUpMsCAZVarBNQfsEqR2o1G6i13EB6UmuhxzCnNbb8MZX9",
  "key48": "2GiXH5SUWQ4HrLEdjAnNZAi49PRVAPTBG8L16m1bjsAPjKhCTRZDDiT6HrXRRzGKEvSYiTWRGxXwDB3w5UxtoH4a",
  "key49": "3KdmCfRaBvrij5PnhyqXj1NorK6sRbLvvr552PB3muuw2g7Zqpg6JP1fRciWZi6ZWZvhiZcfrPNmBLkFEVft1AGg"
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
