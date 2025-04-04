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
    "5odChTdJZShvzPqHzpZLf8oz9jxodhG3JD5UT18m9Muycy3U34xJnVRQRwp7cfWzJKKF4FjrJcH7QbyNcXtVeTjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dygcpHJ9Ry1ruDKvCXU2cWBxUTWmkzbMmQxLyqmDEXvWu6BFQMYbYDyvzrwzT86Nz8nLCRggSnaKn6S49ZeCEVW",
  "key1": "3HJLZhSzwLZn7PNtKyTioibjrvgkv3azoXcbHj8a3bzxWL4wmxpUU4FaTogLRpwSbP7Lwho2FhiPRwMKBFMYPyfM",
  "key2": "5uwViACFsAiUomUCNs8yMXh96uS5fn2s9bQ6ByBoCwBznQejJGxQMsNSmh137r9CgmuCsG2q1hdbtovTmr6iZNN2",
  "key3": "2CTsokKUCw49FrF4eRBZc3FuWHyc62qLaben3pQ45smnd8oYNmYLVVCRG4sUbN5fhSQAgcnDQ5r9ZQS1forRe42t",
  "key4": "JomqGReSBK3ct5X9qtxB7cH1xCTvJqheWtpaNS5dE3zHq4Qf2ooFKgbyVD8vVj7Tpx71gCxxHgy1mWPetVSHDU7",
  "key5": "3WZGtANmzHQ9YRpLwP4sRxtWC11fAo7AxRtHjmMzvHxuVr3yjRwtgW5Ezhdq9noxda4gDySgjCDYqb82L7VHXJ1p",
  "key6": "4EqXnGZvjvKzNEDPvCxRGKcrTqf7P125eQunQBZwfDTHpZVwpf5eBZsbc7jJV7MHgywNijc3hfEFFJgfrziufFk4",
  "key7": "3vx4dVLYomnxj6mT7daGPFwdDypLYQALHP4jqyvkzCkcUFdZRyWXTPYhgoccKfC9JaK91tt954x5ddToad4gjabf",
  "key8": "4cXRydip4FRTWKrNQGohUx6Mr43py9xPGrqrSTZ3TZUTSsCfDYvY1iG4UTN7kTwY9pmmu6mN9HL8qq7ZZeGooJpa",
  "key9": "SFQoESLWzKzwxEtB7eLpDhB3M3jE7gnZhsYGX8MDeYxewfwxMSZbBo2MTNPVTt4cLLEkyf7JWgxTSAwrJ4pFVet",
  "key10": "51inNK3ZHm3knWsuQHJzkpraUSQPuScnV3oZb6am5qXnqDAEMkuYvo635M1RcHsJoRgLke1mQAPZKVazA7brNimp",
  "key11": "3j5WinFQ7spxY4qYq7x7GtAMWE6xL2EKVLWavFwmjuLate9eSaSNeyWsgggRRyNbEqeqcDYR7r2T8hCsHoi8zFAe",
  "key12": "vmsWd4CgQT1SMig6nxcLrn4YvrAgn49CRei5uoEmNUiV1UrH5vjyBLAi8gRZx7z6U7UAf8b3BpfTtqYUxtjQA46",
  "key13": "2RdyL4NjdFDsup7zPobVQnnajZSFx4wGqWpVmEpVUB9LnggQhQgBSdnV1j5RwWE3WwpbYpBcqxFm8jPNZtPwjuk3",
  "key14": "4or7atjrmHf85YwDsoAKYU3Bwe1egj6aJkz8NDKW448knUHymMDHDHPkzrZXEDhv9aScb8hbynZt5KQpFhiN5wwe",
  "key15": "374hHDZ6UTEEDeb5GaxvnPxNmkfsajcmHZwJMDz5joAEjC7ts7j2D18mUiNJitS4LAL54xmvijeaoxT2P9KFdTu3",
  "key16": "5Z2zqfaLsEmyv9cuGMeTNKYtyvcL6i9nNZvAJ4uzLjwvNbz5KksGrqqFyjzhiNDaHzHXmWyU1DzFy6y6Qytyo5vo",
  "key17": "58VhfWgYMkbKoADjyRuodRMwr9TaS3LQ4zothisJ4j5Jxwqq6qosxLoS9fgafKNnu4D54DuxTPwoTewd8XocJTAo",
  "key18": "2Ntnd6qDrYW2kBshqaUhD5yYSmTGH7K3pMoRKiQrfYvdqahS2XXMmGwotJ96on8c5GarE9BooT5gccasoAUgMfVb",
  "key19": "UCkHLDU4piUxMCmMpxGdxk8ejHUUFK6Zig7w1wDiQK2afYLWddC9mwNhvUK2hjg2tBe8i4r2KH8XncLZnBKU6ea",
  "key20": "2xTw5WQK82fkgrXHXRr2oYux14NvzSveXo3G5QMoJiUzTiCe866iTbPwpvmhXhvTrMrfzgTZjoZ1zfRyHrK4ag5G",
  "key21": "39wXFYwdGpesz3Tm4Rpu7gB6LN9dnVaHaPzdxs28SGPQaCBp8xSaQExBqryMSSV7JucA7kRUeB35aP2W7YmhL5ch",
  "key22": "4k7vQjdizBNP7P7fZtod4zcJVsRSMyckEeYR3JKoudPAiDcTTtkJPcP5je41qowNzXcNYPBxskzhh3HzAhD9t1M5",
  "key23": "rp9vBCJ9QE7N9NksWnYvYeq2BfHxPYFXgn4ENt2AWb5MThMoMXZTNNGxqP2bVBmroetGemwKtxmmdbkKbmPLdQd",
  "key24": "4YWfqDcrjardLs881xm5uKi7CKW5LypBYGTP4vHGvSUTcJNXE8rxo6f1QBrKo7QXBwQ4HdhebCCqAmmWNNx453fM",
  "key25": "KWaVvffYCRc2f2iRsEPcd8y8VKzjtM5LMRRL4b3jV8xRpYWCaD5pda3SkWW44F3nB7Nk5k2tMtrPn9NcBTFwv1e",
  "key26": "5qTDt3bh84sqr8oCWWryzMz8qZm9XhPknHiczgpT6mUELyKMaBxvAcVQoVJDaeBMp3tTAmQV7rcybYGxeBCeEc1T",
  "key27": "NaXSqKEVgx7LkfUjZ23bgJBh4fv7AaPGGpfM419yTPHT6uVjjwcw4jHtaphy4uAwhYzhHM5aNiQ9jumaD4xw67A",
  "key28": "gSZSpxhqGgWiVwKVmnYVaTwqpTF6wy6DMXeK1wX6A7ikQUxdR7NJW5J2cuH6G1WCdpz9eBTPCiPPcoYaNCX1wiK",
  "key29": "4j9T1wNxZ274Z2C7drHG3Q9kfWW7hrgAt2bG2CguidH1qiyVJmg9ZtePsxC8582En8EBXMWt38Ctsag5RGN8tBXU",
  "key30": "41iuYaUybyFPJShrGefnkP1mfTX3uoUTsk47ZsAcajhKXoDteEGLYXeRs65F1GQg8DFcrBzAprniDquvRNj4K7Ld",
  "key31": "4iBHsctx6iWDnLLCmFSZ8mBRvbYc7yLnaL3biExmEMY6CBgrXtcYbNCs1DCAwhmDQJCVtcQh3cGPLt9VKr4getFY",
  "key32": "5kVhXte5HUo7vNGMbFbCbXMdboZAjEERGjYqtELMbFP5avp1UEWSWStcStkdgsyYyW8VdXJN87LYhUe7gAnUmGNH",
  "key33": "45NjSsA2BH9mSzJ31jj6fo3wQ2TekuJti7mSMhwV8cGsdJa8NA1KPyLPpuWusbj8DvKXQQPkPB2EiZnftAeLbTmD",
  "key34": "3MFaHrM3v4uzXahqEb7ADUojuqYGmU1RTEZcD7efsa3KsLnSQcYXxz8CeZe5zhfW6uCyy76bec6gmTm2798ZJXkL",
  "key35": "2sGjKLL4pdZt4Xhp1b6R7V98dXiqo6uMFoN5kKV1fzFq22rVvZoRC89EoyYsw1LStEm3eSumNFQTnqoLzk3fiec1",
  "key36": "41QdLmYDc1oRK6ex6Bd3eFFgEWdez7DqgoDjjrSqw13tuW8voiNn7poGNNvUasL37bnAk7jjDacts4dhfATV2DE4",
  "key37": "2ezpanEPAa1amFnKQfyt7R23oyWe1PyH9AEHn9WsxYXAEYs4KfmvG1da7N5zYW7M88tNPbXwJNyqWwh6Tscx5nYr",
  "key38": "4dZDzDW2JDPZfmQmxCgBF6iBe64butQGcgqME4uoUneRwAUDYU5q9b9aNo1bsCVwfWsDLpCaGyqmUGHr9z1891BC",
  "key39": "MC2sqEdaifYUsHGN4VEjMrekdYBn7NbjTW9KyMyYtr9oXcVMNGqaCsv17Prjn4MrZttB77XjwJgZjpPwbKXAP93",
  "key40": "aQzZXSAFwhXycq3we86oCuBV2YXWV6wFTCNJRsUyztjBsWAexnv4XGF3duy5UcDwDhphg754bNe61ik2CCjrBgA",
  "key41": "5rDj55njjJFCMupDZQPPjDTPMcnLXpPinMD9nTbFzcMjcX5UtmGFYe2wmb9vuRMeBSzB3XT4XppRxNTFkTJGVjgf"
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
