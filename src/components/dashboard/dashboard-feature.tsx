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
    "5wn2d2T5Qp9ppdErs2X33bCrP54b3Hq2um5bfujpPe1uLeXuzH3C19RYhJ1iD1Pe4v12kmA2SsaEpMkwakZnkxJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SKx9gEWfMa1LMpTkvuQuLr7hFEGWDNvCkz6d1uecydk7Ed6Lwu2s7M9rNQYnQ7BMqi7ErLJ8bvUY9ezkVHPcU3m",
  "key1": "3ciFSRVvtsjGT1PymcX3Rf9dd18wVbRgY46f1RE4m98ToiTCbmNpP5jAKSVE2qUwGQKrLbzzHa26J8CwE8fgymRH",
  "key2": "4QMUYCyxyVDpGV27rF5n4Qw8pXkSXbnsovby3yqbdixwGq4WgnXRj3jD4axrGyGjeMUDzmMHJVWxcxKScdRSRcLf",
  "key3": "2F9DezwVrbsTsqsDqAvALRfuxUEmCT1bfYqhMUkYeU359dikzLMqHoR5jLr8HAkGC3rjSGu1CS76g8G9uzDiKswk",
  "key4": "5EpNy3DJQjdwF49x1FHURu74X8xYnZTyiJSEfsb2LZqApQ3LqTsxyRF4rgssVxeXZi86RAPMeuTd6YCBfyP7AW51",
  "key5": "5499FVcF1dAPp1kUwNJeMMbcAe4TdM3SYaB4sgHSi8aDZXW7KexsGs6JhaKh1SWYX7kh8zqyBhiFN7nJtgRuJ14x",
  "key6": "5k6nAYyQ8TELhT9KxyRQezKAR3aUotQk3tu5BcbJbEYdaEJjQ7dGg51nHyVKfPxoQeYcRrBFoQBTQPEkTBCcTMsD",
  "key7": "tNCF6VDWXaRaZN4WUV7FjkVN1PwqBZvsuESZ42VAMuTAndnXZ8hTuDHK67fPM2JL5bMvgKgUHoPFaM3cMcuiaQX",
  "key8": "vs7qA3crB5xicPayGPEgjPWw2j2e6bAqgM4BAmedrda2qg3UkuEoGbSszDM4YKdSF1L7TKhG7nfj17bDRqgP6DH",
  "key9": "5rgV6KYYrjgfrTQiVDZHHemqhySs6pbGLbFWdyLpyjUfJu8o8SBUjB78tSeeQ2MTa2Z2s9yEWcFD7MtUaiGYpW3K",
  "key10": "2kN22cJxZC9dUsgTgZqrkmmeDszdhz9Nt6RmD4aL6K6rW7Y89Tf3p9QJfALbfD8qLfq3vkB4cr39vkMpbKJ5awPJ",
  "key11": "4KojLGb7BBrDST7GcAqkZ7CuTudCKW55H6NXH3ztHK7mKQLhWh6W9yzqxvGM7m617aeSoKodRiaHwftS2wKJ95xv",
  "key12": "5rEfyGyLgEqrCWaaa1mPiqVurDoyhmVrzgbzZ4e7WEzvbtF8JkKT7STHh7xZBNDJRSPeitZjYmpF9umqufLj6Sm1",
  "key13": "5rurXE6T4WoNRft3mo2aNADzVP7i8aV4VVmHu68b5VHZEQrjN4zrhW4aMRuFkDP7ssE1k7A2p7LWcraFyniJgbg3",
  "key14": "doDszz9EsBxaJed2uWa9PpLydw9GxMBCcNBuZfnWPac4UokDzgYBTfK7HoqX35paxzNjNpQdyJic53y3VMVLXd9",
  "key15": "5MxdMyQ67o8xaoRMnSdNcKsfPsdBuRtcKxzUyNonfxHhnd11bvRMF6A4htgkDLfHNJxjFGbhH74knFcQScUqmBFC",
  "key16": "phJhjxRWrxAPW6SvKhoX2y1Ms5A8B5MGUeaSSyhWMEhZSqjMyFtTLmkzBxen8DYkSrhXSo5Yb7AjStLcpTLGEAY",
  "key17": "4TMntrfn1p5zsNg3pXqZtHTKF2Ft52k79bFp2FHeWzCcgfZokX8A9K8xsT4hvK2bt7R9BJqKaHcNR5RnRSLkgxMW",
  "key18": "65mynFhezWi8Uaoj85KR5RyxRjhe4FZYs4Jm7TjGLnPWxQ6nTQ5Tqs8mXgZv9paQXNpymYDuUPb1E5dCzG15kNAR",
  "key19": "2vWEWQDFvSZne7zquULvFB4isp9CW7KCQuii8N4Xc8AugZdHjHCvPJrZDEYvChkP7VYasn4PaQCovyyH4BYr8LVD",
  "key20": "3nyARbj1azxhY5KZY3UF17N2DoiuoMiUkEBwP1VbNHj4MMZVUaLQRMurdPzQU5zPkaFqB6shxTPCuk6sKi2Z1j8v",
  "key21": "2zXtRnqXxEACbLazNvi3KNBr6nBFRJvxGijZG2xSwss1JCUoniPPtKjY1mkiKPh8Bt5zn2h68YW6ErfDTjaSrW1g",
  "key22": "58cFCSCa11gxuxNE3DXnVNRGFxZzfxGXkzHruqQMw6RHxJwhxWmqHUbd89NgewnvicMkiR9AZhnu16AJeJarYsHZ",
  "key23": "4stBG2tKCiGdYX1XhUXPjrcNsb8RLzwS4gfu3HvSvwMeVRVGQAHhDQCeDqUHq8Zc2YtoNoEfagvEFUf1oEDboGVn",
  "key24": "yy1JdkK53DevKmA647bBzvhjsv3mRcZwjzom5aVYKoB2CNRV6FgWUHpEj4Hyy4yGfUZFKGCdVVtfwaduRC8PG4Q",
  "key25": "2D4B7Dj1TedSPyhiShkT9w5FHraBZYbLGcKaxV5J3EX5xUqM5HUfrWpmCXpVqEzoAmCSHU9a4dN1VcTpfY2m72M4",
  "key26": "A5v7bKS5kUWzEfJcSpPwuUHQ4BV8CToLQdgCnMMkzBxg35gShMCLpvsAxCvdTkeqMNacsQWddsFRiLBf8RcxCCe",
  "key27": "3KcrZyUnbwjYMjsRngWJzf8dh8RfgDNLyXJnBdfNP4msgctfD8yB1Nnd3MdHvN43VeRtsHFg8YvSUSkjaTtnmUfU",
  "key28": "4VUu1Ypa3iin2CF4WQBFeof7WcsYBXvbLusSf91Lw8RpCrbnujS1iMpa47BSBAD7kYDL9raMB73Yo7FfA8wZHrGG",
  "key29": "5nEVEH6EzRFrRdvUptaZWrd8Zg2wuRQznMYUC1yFVeANRFKn9hJ62RyZnk4Axh8Be45NgFTtupqg9STSkMvpfTdQ",
  "key30": "emkNCkFf9FFLuqr6a52WAhTQRGVpLAr4iUMmjdEyNHqPBYsKUazAfWbXnsswd8t2HGwTbHgGqmb69BXQSbHWqcM",
  "key31": "3pLpD4j4f3UiqBMaLXikBhDPc9Z8mvBecsKQ9MnYGpbXDZyQ56dno3kipjMmNmVUvv57qFBqZheYuPBHHGtYfZ2E",
  "key32": "2t2Nqkai2aa4RCT6WWtF62kPJ91ZMJn93TjRpaVbNFA2PtxyMJf4qQDGp5hsAuF3YA8XfKdpTfML8B8QT5jC47Y",
  "key33": "3BKT4Q5WjAaZ4Jgg5hxY9EyXAeuGLYEjbJdE1VaAyvfWD6VyUHSm273fhQ4GFaZe8UeyQcfF6FyRAo8Fj3CHP3uZ",
  "key34": "25wiyJzMhwJrGY56pyrVCzYMpXwFBhcmdNQ4PCErVJWp3Vypnq9TbJNX5tQWrabUL7dekVV3LW69qcJiBUziY81f",
  "key35": "GDYH5VF61ZJAhWyEkXuMZ37hMkhmsm6ZX31pNqj3CvjArzu8UNpgBktp26kFjBYsp6k4rrZv5KngCsoikvTASa9",
  "key36": "4vr1rBfUKC3KSgGwqimXSs2N4GAs1QNwWJZT9r9ms296zPhc3khUt4qXN1PXgtzjsKpgZtir7kALnBWLgGtZk5qK",
  "key37": "34VM8RQ6ZsCWSNAaHVWMVyZ3BFT8KfSLrNJZpCWsuDtbV8VPTcv79meW19MMyaxXtizkp2tCnikCwxKZVL4NMDUP",
  "key38": "yTp9TAnkSxsyMP912vUuDLtoJwGaxaZhfZcLWNVgE6YjtmRUiwrejWDMatTmuW1gPGcuwLJNAqWAARiPCoQx8F5",
  "key39": "4wotvKh1Qrd85ADqnViY5r6UdjqKGgwqmDJNFNTiMjs9MHPdA95sQDQiciUhiBaUeDX2r73X1cZdU7tmkyYBiaeP",
  "key40": "4agZXScFz9QViBWX8gJ6kJLHGxfCwLwcWNze1Ji9jy7sJmXnU1jhdE5GJuXtrAe9PkUQvSKTEqWnnyV6mq9BBdvC",
  "key41": "2yQkN12DdJxGkjehsS9Cq1qxUXL62Bm9PJwPK43UUcgZGR4xcGLsqgtZT2JRnam8R8RmvEqMck9M4cW6RuSyjwjG",
  "key42": "aV1PuqU18Qi3VuTek7b3CrCwAdFXR28n13tRnb1rqcfixwhHnnJf95fDDgVnuV8jBZJ2RERRyuJmsV5EU4rczng",
  "key43": "3D6zkNcNHaDdCkCVAKu6irMjnQ6gYbiWXSPbWQ5KMfhthiDGeuD6xaf4fKYR65uYBpQpdeFPsYtNR8hPD2Kon3vS",
  "key44": "WhEwwC3qJ2edZ4CUtcyke6ABTJKvwbdM6eCaRNXJMRLJvoeLoi79BzGuugehStuLbqPn5TrzCLonG2XEChYhqNk",
  "key45": "3Mr2Agda4xFGMhotr2miTqLGAZzXrxSexRKj7nuS3g7yR2EQ8GvSxvudkkkAZqXGzCUNxgsr3Zx2SL2KShU1NFri",
  "key46": "2h5HEATeDre2WQNL4bt4rNCqJ82tMq3E5VZuC4y2nsTNLXeBd5pRFFa8p5oRnKp94GP8Tz2irhP5NqjbA86QFx7a",
  "key47": "2GDnKJL5KpN7Uy5JYkYcdvqUEXRXUYAFegvxjb5UbZfka7e5GjQDCDSHjdd4jeNrqSPBLHa39AZNLuDz1zx85NxA",
  "key48": "3TNchcJ4CTUcEH9xuVJNSKfv3te671Pbz4J5KHr72yyRMsdZ7uPF8iQfmMNWcxvNRab58mcqFaRPchXEVLhMdbhy"
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
