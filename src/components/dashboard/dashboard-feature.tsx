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
    "5vs9DoY92VXLy4jjnsuU3hgBqxH9asEkodFTNjjmywQLzXXrXwqPzxBjYrvYzx1UXo6awNTBJP7Ncs9brc2Suuku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J3XchkBwDiMzdP98csoYvq9oun7cb3JveusyhUP2Bj68qkKHRrKgMnsJNPKuJU2afc5rLsms2G8NWHCcTL8cSGM",
  "key1": "5HwMPuVtEQ5nGZVFYGaBEapreRCMeaySTQxt8uonBk4AhH5Zg8wXdScHaRidy4pfvsQNAU5Rg9NM4AApzR5M4whd",
  "key2": "29Djh3pTmiHSkch7EMzAFm6cVz6yTnozWBAJ5gYSJEPcNWqjAqzyzqsao2UV3zQcmTff7DZNZGnFodWGbYiVoiZU",
  "key3": "2WCxirMKH29nXhexDnfdszhNkKkT5CfWpUhCHaURmLbQggF1bVXXci4AUifrkcDMf52debxF2jZeoUeDvEGjPn5t",
  "key4": "3CMbMEbGk4M2kvRXNckAgfddWNbp1mHbdt96NVmvHqbP3eiWeGuCA9NCkvpGq1hMny422zWbnLpUQHuNXWtrjHjs",
  "key5": "3AcXgLc9EzZRW8Qcj7nREi7DYawm6R9u5ity5W8bVp5jgGugsBPPJ6dy67Lcz1qNdmNjZfjpTorWxvDk2zAAYt27",
  "key6": "3VUkd2gom2kcqtaNdCD3MKrmdz9NfPUhNeVy4Bj56GN3wfWWFZD9PMpkKCvwkA3gqCYWGuxeVNjSgFoGY5SH9nBR",
  "key7": "3m1o7X4Qe2AyMZgy8hi5dULrYfEgkMAiuyfUqUj1oVjzjWT5XbSbic2LuY1Qns3XWLUoGkRvCorQZFtinzftKPXF",
  "key8": "2CmjtXfX7Pa3EqRE8b1W2YzUbpURda5X29tUEMJrMnkR9r4nsLh1jpxEfBCkS48K6uHaBxSBvdLZusW5pHEqZiSY",
  "key9": "ex2DfQMFBbCtvLbDofABR563k5nNT1jYztxkW7DRqXSKTyCvGja36FKu5UZxtPMa1a9NSeLn8m1UgphkXRXKQiE",
  "key10": "2SqMHwCzUh2cS3B8vhmQNPrj9371UesrE1jbbqHktX45NzLxifHMkQQAVZHGR7hMydMTh8qrrxFxpMwGAJcyWHFx",
  "key11": "43gj6BmF2xja5UJ3CDrGLL6LCpKMBoXGrggTAENvXUz9WbcNWdAMhMm1zQojBweq5LxogUTavZ6MFrvirKQqunWn",
  "key12": "pJpoD9GAiGe5aDzWkPW1aemc2RSdgADXkmpc4qyCBieA4tDT3tgWyRFbz7YTWDty7ncQ8Ke5dEtkqXXAJfRDZ59",
  "key13": "5wU8KRKdCDMHKe5wbnmRM3Rr6NEDdXsR3TQeBM9eT2Z9XQf2JbCBMZNmvi2tfFQRbj3tVvuLq46axQ13jeQMA8Jk",
  "key14": "48Kbt6vTGtVR8DQxxwtwUh9m9QvXeyW1NXL98kK71bAKECNAqydDoVJvaEMexypD7CjL5bwNHVpc77NQcCBNj2v6",
  "key15": "puT8WNLqutnmWoVj9zB6UWWL1nY3bruEBAAMa6yLTsGUE78zVNivaD3WxeEXdEoq1xH4H4HeALxs4HjHoBZXjQL",
  "key16": "4cNwEbf48Huymb9u3fmNPEi3aAeBcKcjkhrqRx6iitSbs7Q5f4YQJcNbkoakZZA9GzTfhEKu2BKnkaxgr4aNBSE7",
  "key17": "5PfWRBFJAW3QrQS23RGKzAfGJvS5D77J4eCZaNWbpm73sW7hn3X53gb3jCFFV7W9ww6ouzt18kcuoa716zAw2qeu",
  "key18": "5Zcrz2ACwp2zazhT4jXuv8Xiruz4hu28zXXyLnT6NxM4ATcjApjmz6r3e3NeuX5Ga6CeSgrXcf8oPN5tseDADgDN",
  "key19": "miEYEpnmCFf4c8MU9SFp5Q9R8ydvVCWjTvHQP64a13fr5yVNjTFu52sAh2Qny53p84ckG2STWB73wT4kU7V82hT",
  "key20": "pzkKrErtuD8uzTuUcJwBC6jVGxJ7mceovuea3c5RpN1HHXKRtLA48QyuSoXo35UWHuoxA4pVpeAkKJD4W1nD6og",
  "key21": "5mNnCkrXGryjbfaNX1s2L11N32NQUsCPctZkfpEfkvC7rBfc2SfQUuJoBvjrNMdUni5hHC4X4yRB1bMt92Wm1Xad",
  "key22": "waKdpL22XSJRH5EAHBRMrWWdEwT9eLA3W9vtyuQnAJr3FFXzpicsgcAuDeKXoKqPHJz4iJYJchQwrT7dy9iQKhv",
  "key23": "5gSXnsASWwWDvvpsUWzcNLSbta9rHLP5iqdYjZHHv27tuwPWo1iaeB5ZC79FG8SeN3U5NGAKpE2cS8pJPJu7vcV5",
  "key24": "2tTawvbcjeostPJPZ1f9e6z2E8rYkCFhgFTjbTe8mtxqePCG6JwzNLGWAGv2gy19go4QCGsJKCHigiRhjCU8L37A",
  "key25": "4pcLb3LviMMQWPZLotQmGtfKAHGRMRg2Q6XKHptSGMEjRaka1FJDiNxzuaLewS3UePNb7Nfo5iCWGAPACSK97ojY",
  "key26": "2cmq23B5hJcb8h1Mt9d2XWARiWj8VJLgL6UL9caysbRMthtghgckX8Q5mz9uRXx7nANNTc2DRKt5LtKi2Bm5azBx",
  "key27": "3PG8qQyxGVuLu8G8UhZf9Y77LrnSsjtW1WaRxQSzysaZLm3NYhhcZrHFTUkCjSS59i43x8WLgsA4gHJyaxBNvkyj",
  "key28": "3Qbvbsw1xYZ57RivQ7vQAwjyXZxVVjgasGUUotZgsXnFgEyZkUFoCpmbB5QEyTDHzExV6nGUiwRaeqJUrguNjWB",
  "key29": "4H63uFgnK2L8ERaaHhADxHF1wVUxPgpisPMnz4Hy51Ft8ftyf3Hpyqf45tLHJ3ccXHBKFaVGrtaoXjwyxrHSYZnN",
  "key30": "3tMmhiaMEUH3xqjBTYP1LXjFMQqjgwzHTrNRqWY5nXr36t4wxpddc8csEDMf2yEspewLD9oigVekyUFuidw7BW4n",
  "key31": "5wraCF6JMKQbCyQio4ySFMoF3Hg7SQaT8fi8CTNF2nZMB7D9quwL6DJvqHRcdfurRDouK4NjvWN2UpUbXQyYj6ci",
  "key32": "3Joze4uECXJZga4s9w2YGE3xKArF43WAT3WhqUr4qs7H3SxBEkqruPxR3pVGoPB9JQWhN6stwCfH95z5pgvd2sgW",
  "key33": "Z3UEEu1JGMbzzRfb6tSfACdSWcyJs44i8pSSXTFNy3TMH5NQgsPVRBwEMwGwY7nsQUKZKfy3xxtJHXztKLjNmrH",
  "key34": "wwb1Luy4nSnJ7Btp1shTvUFNP4JYT7Ei7xHkDdFxst2UuRNL3jr5y4pF2mpWE2QiSe8BTU1PJW4yJX2Wms4Vczf",
  "key35": "3bdgNukAoQ397Ag1n3XbHcN3xL6y7mLRpYhRUbUHYamtHYQidcrcTyGYRAY4t9FzsceR1h93qNgnKeprKUD3J6cj",
  "key36": "35RvQ8MMaktxP7mJJdhXHzcbRnYMHJLQdHXWbVucYH5XhAyHkuxffTKa39ixB4oXBrz7zexdKmApriSCHDSGSTGQ",
  "key37": "67bHD2nVPYmAg4FNPPHkS2DFXRWbciQyGKGADC7z4LRkTu6e8BCQFySwRACxaGuFBLETCU4XXVFDegi6uLHaun3B",
  "key38": "329orcQfddKFpeXLvQHGJAZYzdmQqoNjZKBE3iyJ1JvghS61q5sHmy54Tp4GppqjCbQiSmCFxbaGjTmon4V7ow5E",
  "key39": "66afFD8yi2Knfv1fA1pSaPSbEZQ9Hkzyxt7eRDPf3Nsyg77EnQqBriesmKyXLq1mCdQg1wGuqr3B2pvdyT3HVXPj",
  "key40": "3v3PL3E9YjyQioirUm7uVXdbAvD1vgHk25uMyTSqRCs9QAHRhVyBAYo7YvJ3aTuLr3Q8CkEfBpjBiUu6ZB9VjKpK",
  "key41": "36c17eBJn3r8noN1dBmisFJEyFYHidfSqdzm3JAZyAtG73vXun6MHXz68fxpiCVwncfRpQXgUPKArqKss2jRDWfD",
  "key42": "2VKkii1DaqwTj8vxnjqHxmhbSejp4ew7MjY7DbzWJ3yas12m2ARjfLwNA5ymdrCqFDcFQKCDZAJ8vjkwx4E1syf3",
  "key43": "5s489Yt8vmHCY3PHEoUgMJw7Dw1jyNm2vBik4hNa46kRjXzLcpGN5bmUDci3TZZhFuijvQCBtFeXctcYXeVs7V8m",
  "key44": "2kgPm8Bh45PCS1AhtDHvXpUzsxs6YMmx73aHjoWvD6Wbxdszi9eSYB4SyU1ckKtGCRVbnJaTVgbu5CXnmkL9htmk",
  "key45": "4qcFQdTVg8ehfm25o1BfreMnWCuJdr7AosDwWTfv9CJ9BeKbshJRbmTFESYJpZRc7MKmMRBQoK31s6UmWyZjDCRE",
  "key46": "5iVEeFSqFzjfUcjy1bgxeYVNTCn6MJMYREoS1wtd63gjcTnymb3umZDY7yHvoDTLTnFJAuivQxQcsbHYaGoAYm1n",
  "key47": "2PUXrLMVMuNX5L4sA59hSrfLgr25qMgxPbPcWiFU47rxQCMdfetHaqyM5AcRQows4hKxPDxZKNGjoZQDG2ob6cEH",
  "key48": "2Wy6TyJkZ24VSL6Hd2PtPN2rFniQuyRVij6QLRGfz9PSYq71iTMiignXyHC8zjD1xX7U5GY32T8Gk5URUkgGm8fs",
  "key49": "4G84VtEiF5ha8t8ZybaJp2PeCcuRpQYwsSsUwzS6KogN6gK7AiWthAuqjhJbCqYewpZuduyZouEyJ8DB8wo5tGaX"
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
