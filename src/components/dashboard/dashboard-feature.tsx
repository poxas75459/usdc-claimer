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
    "43wWAYspZeaxkRdjNoUzJEsJ6k8Xx5dqyETWyGqiqqH9cNJVk2tAHZtah5fzQAUAF5feXzm32DAr9uMsB33FRp1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pv7vY6ke6yK5euAJ6NUifLTngmvNSR1b9uE9nTrUcHTYToUzz2RpGSHRHKTxcpsEnfGan2aVzriRfzRkjapSSSa",
  "key1": "2WV2PVe5CR4zqLxtMeCv1YmicS7GZ7BvSowMnMJczs8px3UgQP1o2hUsbk8t7P9hFBPmY3C2NHiAmGDuyW5BdC91",
  "key2": "4B1o6izVaJmtg68cSHHmjjUQRqYrKwp1DdMS3tGND6CHmST5p8YywiDGnNTLnJq6vEYsTQTm3RxcrtxBHqToF8Yi",
  "key3": "D5DhhyAZN7Suz42HrZ5YLhMyFamZSYiiJWud742LedMVvdnNhE4DtZvNgPWVE4K3FMHkCVwMSCWFW1WiaEnr3Eg",
  "key4": "4GfWP6tr4h31G4DHYzVm5XPv89kaRj5vXPCiLVbnr2fcd94h5wzuELqFyAHWHUvqrCFcohzLbrDnCXmJB22rLMBT",
  "key5": "3x9JTf7TjLBsXYieut5oVFtuipEy5n1no8CD4aPuHKWvPZgtUNigQeSXMugyS5yLUK3mDtuHakfHCJx47Ee7gjDU",
  "key6": "5MSWr377swyupzPbCN12arkkVRiG7v6XgeDpu59EEQahY8vFpRuKaYYeL1nzJZMB2JkgpYWt3zqgEsnZxAJpHvbg",
  "key7": "5GtNRpb3T8oNPjCLb5a9M2z538eEEcBC5FLpqEUgo44eT555wWb78RJf9WWyMStrdgekNcwcyAVxSuG2BSX7M5JD",
  "key8": "5NMXRCZj5VQUTBHcfbMKBaERu5cmkzwu6SpcWwzs2xJ5d6CkHenA5vXPdxaD8eYkRHPpJhDK6MTMMHjZ2iwdqmMK",
  "key9": "5ktHU22ybCHMbjmk46ATivRGvd59aDgr7pYRTutXRJ4njhpLmqEZCTDNtbrUtDJ72dLhxwjFtEJcg1AeBVX7nrFb",
  "key10": "HwAHmJNj6CC8tyyGhBQTsZWViJHnZGN2mZKtoWe4PWg5gNjyyvGNhBcqvR3Akaa5p2vY9CX3FqAENpTCNcFbFT2",
  "key11": "2fvRFKkvoi9pYaX3qPnW5iQ2erjty27oqwRDYJtfLTtazeHjJNvy4HnWyvLQDLFEUHSncBSMt2Qbm5fpNQ97AUbc",
  "key12": "3jrcgd9ZRRruGbktk1fZoiRycVMRw1T8T4y1FQaDA6mfP2eR3cqd4fJqBrA2oZWxoiDPVbeyc7mXoaCXvzWQtHbE",
  "key13": "Mek9uUyEpydYDLqv7W3d4WERPwV7sNN2fVHYwHNd9W2w4prkopDSumpeazp3UReLV1rDZg42Un1Q9nuK5y1ob8H",
  "key14": "2DXqDu5AxxfkCJ2MA15FZbagGHGQkr9j8F9W7jF5vZiia2gYoz4T35XcCAgzj1y46Ex9zRvBgBXxxTanvfMHhD6Z",
  "key15": "5Nx3tvtXDPSPCrwyoHwMVfTs1v931rLiDYvLEAur2EqD9215NEK2mfp6hQBWioQBwQCvRfF5gFPaxw8PyGYHexxy",
  "key16": "48UpYC4tvTZMU9VQxoi9LSCPRKq8TaF3HzcxPGjg9RKNUPWcKzbVVpyfHFgeafXDFhkBvgD3XEr8RnahyJ1SW2ah",
  "key17": "62p8dDpHK84JJCxLMRM3C64yKfxKhqATjHBSB1pM2pwShEc9TLmWFqBD3eEoAgpmGtvUVFmLrKKMXQdRbwTK4q7g",
  "key18": "56kUUg34QpYyUh1Vz8NYKrZFp4yC5z3MAoCZ2NXyrQU1HysMpDfX9FyLsG4tisaAigPnpyr7qAa4FWCmxpReDTA3",
  "key19": "5PC1p1cm1Jcd7tjCWrkivfcDGTdbEYQ6oHyoyQsM8SZzwNzZCVYgwocUyPL29e353Vx3YkgYWqorJuk9gFb39UU1",
  "key20": "5Sd69Q5XkxciswSKNowNe1xnerXwNiKsgDqudKhQqKa9mfuVGUHmF1d6PDBfdFdVSNjSgD3Znkg8Ydmayoh7wfHF",
  "key21": "4riMnqhUo1L7EHeYDGf7GAXa7HG8Rjhswag3LAsYWqvDuV1wiG4LWhBJLeZLBrDmDF3nhhkXD5eeZHxHSJmf9xNr",
  "key22": "27tLVHBm19P52Rro84aCE7LHacVXkPRUa24LSDvPafBR37YqDs2wZaV8HyE93bii5cxRFwGNMKtw4kpzb4b64MUa",
  "key23": "3BHcHa3ghHbVTLqQaaLA8awTJwiBvK4PizJsaFUTTxefvaT9QrQeMnPy7CedHkmqfnTMDRbi6w3R9gJ878DNAyhs",
  "key24": "2aZUafajXgBqRa1txUpA1FtktfxtVEsWv4r1iGDipcsLUmcw29C1WSGRhepnhDs4mHSZDbUTGVsRQd2TXZZvMK67",
  "key25": "2NdwXJNNGuLCZPh8YFEnweKhxqkzteMkYKhqX8ufVwRw9764p87JEKEG4incRyXsDrLdAtAVNLi7iCjdRBJHP4yZ",
  "key26": "jBMTTPnYvumjuyWwZesporeVVLX6uSvb2YyFmEQ7ic8GKa2aTVFV2iqBnd83DK3pvi39KK89FSLexmCYRy8Z5uZ",
  "key27": "4tuTvJrUQJfq65uPChQy2YHLiyd2nbhf6Cf8NnqMZzdi7iR5GYnFpYMpFUm4UbMbcjcAvVnH9eTMoQD3YPnAqpaQ",
  "key28": "yUmjBp2mZUxYmn3uDcgmpvp1bCNYJtR9jrkCGGLbH9nChJEg5LpfdyKtPn2UkU2yqMi85QtX44j9ripVAQCcX8j",
  "key29": "3swTVcHbTKSk3r32B5CA8vJTSsKP3GbQdNbDqTaqV9bt9vL78GPW2jK4V7CcXYoLSzZ4gwhWsNfsP6zPuRmEKr2h",
  "key30": "3Cv44zgtcit2cGDuZJeM4QGejwKhtqGy1dP7H6VTqLLAx57srcZpVkGSDrXt7aCaj3Bjnwn5JKbYpoSaEX61eJQ2",
  "key31": "3cJxTHR7emN15St66yF5uMFtT6mXgWtPKEDtPreiatiipYLrvE5UBx2X1EdrFV9zEhJPBcRWTi7viXjfU6aMkGPR",
  "key32": "47eRqoFWf18sTvqNPQBkmfRmCz5hygMLCFuVsqrJqKCU6YD14b7dKntRVRC7wSQ2ziBEx7B7UGh6zzYtJRNqwN96",
  "key33": "4BFFBHcp94Toyyv5fWzLzV327fNvGKUZno7eUxAuvq1b7VkjCiHnHtNe2GnCAk5BQwJ1jLFWffoJ4Maip4FSqsmj",
  "key34": "43o7iMtazHwVLRResgEeUJaC76u7VDqxoH9AvrAgZcPqvag71FtLvVQQUJmarH7cEtrqg84r3zfdMdrobVFU5i8E",
  "key35": "4h2VyzABABEeYVyzaqCgwhqGZkBX4FvZ34XS6u8Ce3pQfbCwKEbJgprnTm4crFkzx8x6FAKEtRBkFr8GR2Jb6tQV",
  "key36": "4QLE4SmfbYeZHmmxgPGKqUwbV3TSQZftQgj2GmmX9DNVF7unaPSN9YEUNJ7Z1pvSsz3jDTvABcSXQPP7draan3yq",
  "key37": "4nqbBzmcJ47tjvF5ZnzuQu9YpsRmEv5L8U37W1RsZHZJusy4xfLybUwighmUdvPXiBiSuEKtyjyvNYC37tQcaiUm",
  "key38": "5fJmUpNZ1JoC7BLpDvneUzaKVDWkiE4atuwFaXYFCpH6L1zJ5Y4YDqUSSn9iGy7d8ckhUniqH9CsAaTwS1dMAXKt"
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
