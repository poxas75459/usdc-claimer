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
    "3eHKx3eTARZtgkMYABWwYBRAZ4UqLGDJuvWuFK5e2u28a1tymEAQ92Fn1wxLKfLMPJmvdHVHNYhjQrRY4spLgpvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ac8BFWnTrhto6ZDFkkPkm6SsXjHHwcYKu9rMBPioVpTDgEXGET39njxXGrPywgKDUxMaSsiYT1KnY6uEfedATqE",
  "key1": "3krh5QazsTnDU5HjpjsipyLLBbiXsARux1CarwgWKBzCzm8V9YUBRRkHRCNrMBSWpUdKw9kcZDYfS7XDh84vjvLy",
  "key2": "3WUaaQYZt5NkWH6y1avi4suW8TrQJ86Xu131HEGsz1vAYi3msTAVfexVXydVQEqjVmHZHM41TgtyPLAKTyDi71Xs",
  "key3": "dFEaZbfMJmFkgVZkKkDYRHDnZQ9WfTVRM5Sw4B6hUZQdFE4czMYhjKhJW4cBFKxqptPS9TnwsBqa1skh7CUYeTW",
  "key4": "piLm9URnEKFDkfAc5Ww83osrJASXiWdrFUaCrFSNWf8qH146uKWhQnRn8gHxDsGnkokXSFeJrm6rbwTktmHzVS5",
  "key5": "3coFPhGgBT8Lrr6b5J2sJJmBBqJJ9bxk2yaRNteCX7U525VcsqR1wArj8T1vYTJNwuy78UZz5nneFEiPCTcmJ1Vp",
  "key6": "34HnLSRQwF8MniL3qfQANAybAHUCd51dNZxRZyrrbGYD6MF93ERgQN61tZ5eLGMpe3H9ZkdXe1HbqUiSxEhN1Ro",
  "key7": "2dzgVGWy8J8mPEQzD2uaw87usCTHZHPFJhRrzPDAtQUiGnLt4sStW4RD9uVuB71vVHRhrjBfwjnb9wvUP1UAziWt",
  "key8": "4wnRuGr3hXrPbkaGpuxQUhFUBt3ksynqdPbDFoVFNzHLbeS15AXQU5L157G5ZUNGZZuJy3yiysTyuGV87wxVnBqC",
  "key9": "5vGthvBiGf77pLuk6H3H8KaC5uDoknDhHdzXhdaL9C4BPR7fVVYYnoxWSYN83DS83dAUsDKKDbtv32wWKSNAoM4o",
  "key10": "4R5BRZihzypf5EvusfbESqTGy7zQP3eeUT1DyDCRCxSTzGbhrazU3cm6fMH3EvDaFZRFvFdopCuThASnUCGWM49Y",
  "key11": "4ysfXdg4Lnvz36UshokM1tM1xShs1u4qJQfNAhWwziVBH4kBF3ABpjDN9BoALFmkFRE4zWk6fhktB1Y9Dg4H6cKz",
  "key12": "f6ZeuLLAmWoXJo9tbi38GiLWVdkdKqRLHfKn4n4LNvtt9ptWJCy7v5u9hBj32LDmB418P6ZsebmqRsyYaQviFpn",
  "key13": "5Ex2sA1usBRmHqY5VFHXbAHrVxDE9ZB7Xv9y4iAPLrdW8fQ2RzitBJVGnoF78xTVkcHc9pUL9skGmwB97f58rizK",
  "key14": "25nLB6dmku2sANc1qX8x4uS7nfzsK9h3tn3dw3irW35DyCtMidLZWeArow8CpJQf8Z8eJqH1E4qAX4Nanf6Pcx7E",
  "key15": "62HYqTXG9B78E9387E2MwgL5E6vQ9QWM8vXLgs3dkJFQt3QhaMDfBP6FVrKkdkzM8gHKLknBJvtJ17XinCrNE1Xf",
  "key16": "553LNtj58HuPmSjwPPv6rGfqhnJm4GnbpEuvho8hSTAFyaGYMBzoUVf7NFJorxvAvZWH8hLom3A2wJPVytz3rrpX",
  "key17": "5BRLGQgU7ZFL5Zh2Sf4Wsg1MnzPbeBetvdv7bF3vqfTjptgFGAAhfNsJFHUqhMZBHFZbFAu8CUWkFvDZcrSq3Hi3",
  "key18": "NRMPwXqigbnG4ffkU44da9dZYutS3WH9JY5PUDRVsgVPHDStPpVqC1AXZ4fa77uBsUpFr8hUpDKWoHmeTtyEm24",
  "key19": "P1LRNfsfcg4HVsawUQcQP1eFc4MaLSMRzPvuHe81wHfBuaGBifAfnebJ21REAc8pXDPsSziCS91g8u8uVb9JqgM",
  "key20": "3tV3GvQZhFa9yvxMZ7pXa1RxGuFHrFX51xQdNgqhBULdaynehKL68tA7mpvoVgyZKPTzgQSSmvu5VHxwKBfwNryt",
  "key21": "y9wD7NEcJ8UEH4DSfitsp5e91ntuCu3TZ9hLufkhHftMTGtbJT5gsQjUi3DmSL9CNPTewnqVnAieRGVwghvp79e",
  "key22": "3gNhBVMm38NwgCM5b8rFsCkjffXCd3Mb81TzFsMkUsYATJh9ogXgv5oUbryFAX21Ew916JeWqt2uvG6i5Cq4xERY",
  "key23": "2WdTuwJCKQc2jBtoVZFjRNP1PbxVN9L2C2FH6g99y3M3xWfnca6QUuxR5r8KQFYf9Ri1nGQ6b4818PVors2XoEAj",
  "key24": "3mxrZCHCXE58PKT7nhezj3N4M7asc4APiakmkaFi2DPeRtmxhQNtHSzYdHK9K4hosFfNVgd1AoMCVyaovfqxQXf9",
  "key25": "4A4uqQJszHuDTMSsT64fBBLfE6ZWqUpVMxPetEfPqT35jbAL8CjosMNWUcXkEXtPQnxX3h5oYqxhXWVMPEZXuHC",
  "key26": "2nhCqTRLWGgHM1JhmCZqtUVPGRGh6E8J5iCqNAnq1hKuMWeTnPyGCEFRhw2UZ2Q244ykLPdn38D6ZY9veXWNuabg",
  "key27": "4XVvZxvFBvNZQ34nV8ChQdVnsuMM7GQayMdVuKMAnjWJggDbAB2bL92ERVTKbZyswkw4ZwXwQH1QjxzRBsjjxy15",
  "key28": "3md5MXLaJwVArKKzn7oM96hnZQLj1QY4r1kAZwKJn19hT8aVkCZyVecwDb5wmVZh6QVybFULmZnzaEUVVQSx8BAS",
  "key29": "2JQrahYSKA2f3czwo9PNiK1ksP58FQ9ypfYCX8ri2j5RKHmvE2ex6a9qms3zHHHahB9DYbTNW4Kb8Mo81db9HSsH",
  "key30": "3oepb3wQ1vgbmPLaqBMXQxKcZ8MhGYBvscPTakeKS4Tg4qpkuP5RSmzFeW59Dk8QGXrHuqSbALDWer49sdTC3ae4",
  "key31": "3bPn35Qv7zgCsWBNaBwdiZd8rjX9c9MLMHJtEbUiAwPrf2jVzhEKSA1cVWdtZbcgKWWFBs4EtaSHZunk3JG6Qfe3",
  "key32": "5eQshhQzpThR3G32vYNrzvPw4gQv8SFmYeXfKGb2g12VbGUU6TkszdXqbXz7HJqmNtiCiWPL6MBZVRgw44TgnygT",
  "key33": "2vVYNBKq3UM69uhWWJ4q6w1uWs69fdkvSwcMnrPv8Y1atoCso9rg8KkzwXiEjK1tN2VRN2PwbwcciHWk62kfoBx9",
  "key34": "4E9caa4pw5JnbBApa8nBD1bTbhVNz8YqHAiYgwciirXasy4BhxByeMms1rnGVa4VSfLcL8zEPcguvrLzVEtPwx7y",
  "key35": "5Vtb1P9K7LX8waJ6MErVR5QJLs4iMFuf29g8pEkMp2BRpjDUTny4NL57SdP98JnieCCimwc9T79JZmMrMX9QGtXq",
  "key36": "4SPXG3f3w2YYamDzwReFQ2Q4rEutMzGFP2YzYHUSjd8paUtKKG3amtWUhU5xHf6MaivU1DND4iUgADbwfD177M8H",
  "key37": "5iEYGWrvxn6VNVPrEGJbUJ86MZqXSBhhf2AdMYRw72W8JKkGU4V7zGq28jk3tNiEAkhi7R1WKBQQ4sNbzobAn1P3",
  "key38": "4WATPzisZssgyRFib6HJ3eAUPnuijAzhrzBi5TDCuCWXveZUfbGe6w4jx6DmSB5GfZSZFVNgbMRxkLT7oixvdyja",
  "key39": "5soXX7yBSkVvRMzEBtGUjMRpPdutwYDZvmtkBRW9kQ3wxEyMrKuT4sr3vh2JbLj78h7UDLbFzTXpur575PsyCYB9",
  "key40": "3vEfmGBFgGGyjVi68atHHYixzgTfMGaWxv9gbWYBzxtKRgmcbcUohPu3ncgJZRXzYn4FXTsd4ACGXSdiEiPTA39A",
  "key41": "3Hed3LfiTcATCDqLkW2hnPgHmANQaRP5Cp6Tm5cTFxfxspqsC4AxzHZJaD9xsFGo68xoNMZJ2QETwFdWMvSxou6e",
  "key42": "GUiAFqufn3MtBx9AEsrkdyupCviZSQ6WnFTsaefdyFCP6tzQxJchHYkRTT6K8t7bBvqhKWCtJmXi8DrQs4ubCDj",
  "key43": "3eDsDWJ7pU9dtji14AmrXL71XY6oijwcZjBvvciGspGkSzQZ4W8DQ8cteaxB3z3uvzAjmdnthKd2hVMDTgL7s6Nh"
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
