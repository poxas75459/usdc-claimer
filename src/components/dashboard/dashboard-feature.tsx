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
    "4BHtddyQXvsM1e5jKDyQS6nx7VtxNb99SNj4fKHTjo9m42UasAJgquKqVnnPSN7nWpPXeoHUEQ7tCop2npWSEavW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tgNE4QXVXPGWQex4CczmFwr6zMjt78H8hbadg3Znji4Ugg18kKkHtDnc5WDPWaecm3HwjNtZNMTEVx3C1EhMGoa",
  "key1": "4zME6w79Q5EH5toY7vnXQDazBha6Mft3ebiwfpwp38zfTv3Xt26oN6GwDfA4dh1dPayzrG5YLuufGNrxJeenKHvU",
  "key2": "2dkQ8ENGhxkjVHSU8GffhBPeR2NyZYa2XjFeW6NHMH8m7jG7DPBXNQqjitMmjvpo675kesekbe5aH9NzpVkpYojK",
  "key3": "4qVA2qakSmbJXc5UjkpqHSG1jcCaD4RKthc9e97McZQezoj3KHFVUzNTUva9oyMjXA6i1rheoMDQZqDkEkbmcvut",
  "key4": "3292foDRagf1wGmfYR21YVL81zA4eCVJkCd5RfWLobVwi6pkvAkrdkGEvAVFEuFQuhUojHZx5RvugPNuDKxLYHs",
  "key5": "3aMDeXVQ8oTKiWShwv5zgSFrqMYHtuQhE18CgfgU2ufuArYMyCawVDSbFZ4AAZE7raFW4DuhHS8z1LXvEgWwjRBn",
  "key6": "3p8mDv5LqL8cuLXdhFJw1USLZQW1feBASjqJS9yjtTbQG9isCwNwxq2dFWUbg4f2qwVazQ5mfxCiXYPYnBov7sQ8",
  "key7": "4UtGu7ze3gYK5hURkc8amebJzsfnYUoWoMJ215UhYh6gf9u9HV4cwodq5s2hQzfhycuEWzSFZwny4Ycapd3uwqtg",
  "key8": "3VE53R8BEoTMdZB4qPdoXToSPoo94B11CRVZzyZW8D1pr3DMfqMuM79QKpaowmkp1WucxFJFQgXZVouik8sPsUWN",
  "key9": "BbZczVq7PpFjDNJTuoZTXkyHFPJi1gNoRDoAans2K4AfpmrZM825wX5ZHfNBExraVA8HJUsKxstCsQrTcHafLXH",
  "key10": "J5iZcsbXpyAJkUbmkyd6sudjjFyaJp4pFxq2rUYC7rhZpBuyVyDEJdhZpTDpjRpocDQthw9jKw1R8vgJYTdUc7X",
  "key11": "4VZqpX9kUuceVALinxokRkuhYJsWhckj1DAfPpEHobZwy8VQgmUUJ6YdMYz3VARTzDY141Ck1JyrLJNg2xdvPf3K",
  "key12": "EAYwWj8jdm9Y7ibjEDHHYai23RLhpKuda1f3eaCip7GMftMgBfrvL9dRg9FPzckBkHweJwFvMjnA6Nrc98N88X1",
  "key13": "3wjCFcdG2J77K7qaH2avcignRvTG3378F1gnst2NN1UiQcp39CLWr9UHspxoZ9fecTQraHqY7w7SBRm5JXHc7Mou",
  "key14": "5UYieCQn1UyCbspCXMcvH2Qc8b2hhaXZYni1vPnJNGhj5Kgqmd5JJewMoSoTqju43bJHS9q5wBGCu3cpPn6Lfxcn",
  "key15": "3itnvrS45iVM36NEKvXYnM87vFR3ApfjwjBwDqS8EJQ47549g6GPcHnLtW2MtGFnKLbe4kEfEvLhyRpNG1tsoum7",
  "key16": "5rNv15N4v9aT3V4xrvhEZqXHn5VzGg5T1PJNmMyWm394BR64uhESqKPRxYfuPVcJSeEGFfbG6DUUa7yNhHgeQpAS",
  "key17": "3uEShdTCoEGBqf1a6CP8JsKZ9bDPpoDgJ3D61GGdXSwvLKK97qjj8319Nnq6Yyfq8xg4HHybj5b9n1CnPyH2EZdc",
  "key18": "7s35NSxdh7RTC8zV1estJSHFMF8DAAPvpFQwyg7Bvam8CMaJvs9UDEqssFGJaSDpX8s9s7anwJCeo3FPX4PMZQQ",
  "key19": "2ee5556fXczmeiRnMrRBzh9SbcGf372Smja98yned95ws8zuMSD74PbfXJNJJVsQBGS1TLXZb2BqgNvEgt4WomU6",
  "key20": "3guLDhkNY5baNm4NqtHn6PXeu92eCYdZwh3DTbxnZg5DX1hTeiw2RFr4pMCj2tG9N5j9zAL4eGDBNoZjDdGfUcY2",
  "key21": "3yyDUoEWHBGVnGCmhXpHxLv5iMH6pf2z3CLqDnDnchnhGc2q2E1sXsAg9UUNgKxYCHzWrhZSyQmr84ZsqN5GqAp9",
  "key22": "2yag3PnPqBWkhKeKE8TbyxeEXnKPYgyotfUwUEotzr4HjjLLQKMDLkci7nK7KXZDz5qAXGNjjiy66yT8FrDkmeiV",
  "key23": "3rtydkY8dnNxzcsvE98T2JykHdXJRvEeaTootujcMPeGcLcdaQn3RcJmbbwK1kFhSLjjVWSUn3Q2oA4Dc1zMzEYo",
  "key24": "3ZcgGqCt6k47vgp5z4qsfndaDyXeXtbToZ8XTzho3B6ZUsqGweSntMouT63iqTGjsswPgAwcAPuwFCLLdyQKHf4L",
  "key25": "5iRu1TfS3gpVy64vF9pCP3owBuRECMN5dQ9Uo5ic1pZGc1EfHqiT9G2VbTwe6xJ8TC3Vf7SWrTSJNkF4yNKZZaWv",
  "key26": "4FRhpKsSQoyMCJamgsSVxQFBLzSqHz44ufL3hcsPDgQHKeMxwZb43dNRjXTJkBZ2SDid7EbCZN8EeaZjgxZbicmq",
  "key27": "3EHqAJxdK19NNw1uo2fBEVZLoEoybmfA1M7kPJQwfZjYCNf3nfcBf1hFGD42ETJe3yHvEF2M3dt5C5xka1xiNdxV",
  "key28": "2uEtNz3V6EJ8dMPFnxoPnV1zqTyGUmVmfJ71rDjNuutZ3tAbPckGmXvJ9chhkCNyCzKcXA8vmh8aw1TiMsyBj1LU",
  "key29": "4ZoS3YDRRaWdddSj8yziC4BWqCJ99sUq9nMcwgxxB2ZzSdPrrJhKT38hAcKuCt7ZRhtETYVPrB2TWFBMN3Ke84dr",
  "key30": "2VaJ7a1j3Yuj8Zypsx5zgS1bRMSiUzW26zUF3LCz93cqSxAHqr2Wxcg55favmDoTSMwpTYyHVqhobpziCp4phwwj",
  "key31": "2heqGJjuaCTuZCSSPbsxf4aSzDvdaN86fTRMkbTmMp9XiKdz1XgPUD5LPGm4zHz9gZco5zPS6XtTTe5E5j3K6CWD",
  "key32": "8cQx17WxWYjK3QM2NvYj6dKmBcgWMwfA3Wx9G5LKfaWDS35uxGhDgCofW6PxWcWn13Pgq9KNbWMP5uPpLkmr63Q",
  "key33": "4EULuv1GFK5CxztrEkSgXjFKx4W7ek8Vk5drQpLNGnAbjqZqqUiWq85fTAwcuTouGzgvJ7jXcBo4fEGggZNj6RiX",
  "key34": "36GUwZKLhZ34Uyz9RRxnPDLwaS1Au9EBn6eBExdJ4oyLEqdLR4nZQDGfQv5P4VWUgedDLJSTjKoVS1FBJbCaJ999",
  "key35": "s4pPdmtWUCC4Ld4oHBU1yyw5AdWjcsZtUmsATnqWuJGiWs4cxbN8uvqHC39L2bw5P4rc75XBgS7Vdtq8wsmnqHa",
  "key36": "3KWdTNuDyTSghfaiS3ZRUJfvfcWUVsnazio42iKUe4cNCLe9xLyihJoby55xohHPV8VkXLrQLFJqLe7HVx5VbfZQ",
  "key37": "389vLp9mSXV1nE5XQ5vdA2Ck6tpdvTicwu3JjNB5f89s7dt6awbkxJmaJ9a74AvkzHQYxo1zoHadS8Vtta1NyM3R",
  "key38": "44ZMP3FnMSzptDC6QonfWPsNMMXCGNktAFBwFTUV2UzUi3dwjfAv27deq4FSqkJihPPz56bH9DzWjNXUyYkLJKR5",
  "key39": "4mmBkAwV4yPtigv8aMbJPdCnmvtNPHkij5FjBYYFAFJ33oKSkFWd2E7SkSjH4tHLcmP7Z7xXM6NdEu6iCPupJz24",
  "key40": "2eURTBfYqqQVWoBYjmqx6de6WgCa5R4mXR1TjNz1og97wrimnioDcPFSqZUTGVnKhiQdMUuRJBY8cbUqdW2tD3AF",
  "key41": "5df8q241YtbDJfHLhzX2YerR5RubVfKvYBjVXmHFq8kyoJueVj4eywY1RGadPLJrnb398119eMabCZgPnA5xchWD",
  "key42": "4xqBZd2iHdv8vJbTkfoWvpf6JLEULGFKyijP7AwtRHhir2m5Tf4bRw5BLLD3JKK9i2eJ9NyRGRqFSpnCUGXphdgL",
  "key43": "3YjbrViTi31uwVkqqvbe7cRxn4r39utgmeHcuixFM3ymzaQDjpdPLrBncmnCqeZkrpDje7R2avhW3u7vTwV8uVau",
  "key44": "3WHLx6BLhAnLZkxDGRLwB5JDiksYjmfb4DZPCchtveG1MvVA2MS32NeRaoPf64FVepQBVBuRvtpUmjpGStjW5CJB",
  "key45": "3L98Jcbwc6EGoVWDwYHadWLmhzRTX45MgrUTpepsK2uW6C1zn4eT1sd4vG62txzGgeZ7x73VWf1d7PfVR3BTacBC",
  "key46": "5ArtMUUa57VnYotZF9nvpvXmjvPDS6mxaeaDfyfnx6krzhDpeRGxVfH6EgZ2mcgZi2nU4hdbUKjrs3XnMfu4LQYr",
  "key47": "21qrgyAvz42vdznNkG5PFX6WcrJcE8gftc2RLowX4dYxWrr7TgnZMEGhd3QNMHDAUTjL83dahUv8kkRngEcziXtv",
  "key48": "5xCaxP34QFoHAaLdLxH1hzE546NzSiGC7YssavZ6hLx7dtW5kmA5DNrWnpjPQu27piyvxXMY1VhZfcZCdtZKUy1h",
  "key49": "45LfxyikJa7mzvhaBGFpPVfS4wHvuiPUa45SXJu2KaTooGEpDYZQTyb2aEVF1TjvMFm8yhQvFu8VN7iwCvq1KgQM"
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
