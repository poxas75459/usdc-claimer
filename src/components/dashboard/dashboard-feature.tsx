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
    "4THTnb2fPuMGf4sokayDGG58vELtFSY4MmMDzT4wG1RzTyF6HLP5X8xxov5dt1hE9qWrTd8oDPEAwgHTC5U4cfvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xkFyoHeE1S9DTmekee6Li6AmXMCDrLgkPvYjV2P7MNd5G8GVgrkMxomhe2zrny7HvXexKFx5XpPNGu6YB2a4ync",
  "key1": "4potJgk5dxcFHTYGKcEyy46PKeJMZ38CFoMQXpcUaeKDoaEyGrSnj9en5ZELDMM6G9MEuBwS49LpDU2Xh6tcmXvU",
  "key2": "5Xb7P9iB9DiyXaTjgrcnBdyB7uBSYAjPtUwa9aexoAwQ2DLy2HLtaae1zCMNGbR6iARDapyeP7uEULaPn5C1Mef7",
  "key3": "2cdpMqpUzec2Ag93BQxygSGAheCvGUwgKaYBcYUQyDeKyGJuFh5NuTQNip5hFY8bgo7TK7oSLbQoN2qfnhLmE3Tb",
  "key4": "3ZBLy1YaWayzVj7MMt9bxJgctAVsbJH5UR3RYdhaSrzgZJ3ossUvST9PoAkj58WRUXQiMpkCpCnC44W4zbsnMaK3",
  "key5": "bTct2Ntci2cgrN6Y7AZKbz5CpmpwU8i2r1rKdTLvnAhAnbhe6UrEXKz4iUrXLefTJrTDkrtn1vyKcWJd8vHEGnA",
  "key6": "3QhmigfWaG85YBRZVtdfppDKzspCzL5YNoF32U7h2tvYeumPFrB7JWgzvg8NoTXNusnZNV8V5Rw8qWSWbQZZRP3i",
  "key7": "55CSA6KR3mumh55oy2c7JM5NDxWgeABco9iBbvBcuoCqyY73vD3VhJPXTVeMVpSjozSAVPWiLej6Uh1eFvApstj8",
  "key8": "4PjDYe1DAbKe49eHWUCwMMTvdk1aHds4LM8pwEYYCDxMiuUXVy7BTAj2wfw53Xm3wwtz1hAgKoFSeYmrvto6Nnpm",
  "key9": "5vjKvyTW9ePLveQXUo76KZ7hDMg1g6D7qRqdCtqk5Ee4atfGVQkMNzzATyqnqbNWbdPyKJUbNVV2MXXRXCvcq2T2",
  "key10": "4RFRLVzBTbM3xyzmmo4NFNtZRxozFe6nk6HwwrQtsevLugkDFQrn2Nnw5nuFXUyu4ohKd7TSbVqySuJXdUbwc1QQ",
  "key11": "6eLUWCYKcjqKeiHEbSkEh2QrHVS9GAcshkPMGZYLJwnDTsou7b8Ppr95dCRir9UiH4qy6YZtJ1gya6MHi4SGy8M",
  "key12": "5RqxJPyPekrZ4S7T5PGdduf4qpQeJ9AJXogUkgopLM7MdB3Rv8FsenSEbnWRgh1pPPEyYYWL76ymKVTTs9wem9ww",
  "key13": "21fXztZnuJTni18G1Du42cbLATXAWLpj3moiCbjPmhEiGkBvsctBEzD93actY1qErVxaAuQ3Zwk5FAr7rEBAomHF",
  "key14": "PHKCvfEDLKwdLc9tbwzkNQbfvvYhZLgH9xGxvwZsG4G24Y6nuNPbmtdEQDaJuXicdVc8wirqTukdYzZRZM4rdAZ",
  "key15": "5iAacxrurSwivW1xBgbVYDKKxjJNoA5WTrLLMYCyj41RVpNtuP9Lb8Qbi3PfYuTZHkyJrdddxZzKysLh88X1dbAv",
  "key16": "5MV2mqsx6EBErjK2apuYdvDS73wMFLuAsvrf6JuX7KRCU9qFTdZqhPVSzGwW6B3EMBWhhahM3AC1xLwn16vJRHYm",
  "key17": "25RVUabKtCApqoeSe9GqbXmJ3L8LhiuMsEqwoJrPYEfKNGATyHZppUY9FnuVUaYAaFrqdrQ3QLEueAqZYbjMTKui",
  "key18": "2Ua4P13QqBu6sdTGsgPGjeGDuKWo2QLN39MgQN6xCJfoG9KxyHH76Kb9GH8thoybEky1urf7TPsSvqHw9NbTfJrD",
  "key19": "4a75iTM8jFtZbPZTjh26wQFdY8czL8D2xSCaKj41TzprFVA1m2PiuNCQXTao2wiSKMc5jrEaj8Xz5r1cVmtZa9Wd",
  "key20": "54LkKMiVPfffA1MtSUDofgf6n3SeAVNjFSVAc1XDpyjE5Au5eom9gvtmuz2V7M9vbDEVt4C8XZ9KPCxHC9nq93AB",
  "key21": "4r2e52wAkx8i8Yyh4f8LaQKPM6rTPqkNhXANRa4kXoF38GsRWemhCeuRe5nxtF46jo6fb7k32EE7ExJv4BHuNciP",
  "key22": "4Xd48HMSyfSQ8zJsfbEYMVXruWHPcKLWVcgKQsZP9CDzwpXLpKUcmMWg9mfHiE5XwiAXs9oGtfgVCchT6cBfchnZ",
  "key23": "5HFiGTSn1Aqq3SZcGshSvwYUjwTCAzCTP9Gt5TKovWAzQqnWkVyFonYyQWrRQBAQ6VcG9xkUGpfeuZE9LC8KpwKu",
  "key24": "5KjRgrdApHgo2nTYq8JQkBt1YdULUqUMqzY6TPQkz58X8AQWuG932LhxHxB8eNTW5Kp6nKJrL6sVbmPuEGKvWrgz",
  "key25": "5VuC9jRwoJPcogxCcbz8VRHDRNLPzW7LXHbV7Qsjzk1fW2Ttq57ZK3nrZyb3dKYeiMyEdpGyB6QbTg6sm9C9X8tT",
  "key26": "29MoVLA4dDaAxB6NKxwZP6zKUgnHSxkDw8JwWJ5gNwQhpGCnSmAfUrGLbZFAJFR3viP5HAdsucBUC18CVSza8vhd",
  "key27": "32HPXtHRwammLz2wDoFz9RuHYrbDpszFERez9Y8Ht45efrn4L5GdqpJzQxVkt8ZY72FB5XFknaYjnxSdkMwMpSCm",
  "key28": "5X9EFpu7C1LVybFLng2UFURme9BpAWhpYxPdZu5VRsRNmBthfUYLmCdz2VhBc3LDzdwRoTdAyutHBNdXpwnNLMLt",
  "key29": "3G3ovVZw4HEYdHTMrNxnzqFVQANznqTf5b3Fp9EmthW5kdGDqRiDoepYuCusqoEtD8M8hmjR2vqyG4doQ783gjmz",
  "key30": "58BCmkjbDJMgmv2zrZWiUHDMWopYdaWgDi9ahKL3y1ARawnDsf8QkJem5PM2BtDh16bs78ae1yGZeckN6RRTXobY",
  "key31": "4nT3ct3onE4t4G7duj7Ka3oopFM8w1MuYhpATduDf8wMaNvkhwNUMt617avQ64PUifs8hR2RBUYR4z8tncAYPVp2",
  "key32": "3sd7ThMU9W7okU23WnMU1Xb4gRQLUAVKju7dd6uss7jnRHN8TDAhgeba69ymVkmtGV5vxbCNo5vp5VSBsVXuBPw8",
  "key33": "5Z1aqvbgtrCugCEo8r2627p6Bixgmnp3oCWVVSrJAUJEQgugjVPjraCVdeHSe6TNRLtGyFwRtKha3xWPKXqKDYod",
  "key34": "jLPHuMZ9tQxwuAXUA1gYZjyvRZPaMrChsjnepUGsxSpNTxFP69CV2HWjYNYHTD6mXtMrNLoqbdhCYTo2eRyNXHz",
  "key35": "4ZCU8P6fGFHPuw2PfpirWQpipJmRPrQn1yQG54swwHF2KQGiBhi9bdq3jjpNa6GNgdYsXCASDabuUq8GrPUy8FpG",
  "key36": "44fEEFphnCVyf5UUEn9A3euJnCMdXv1YEDWFtXpk4PNQidwP3rGGyaMsesrswQ6AcDmeGtSSZBfLuMtKof6QhBrp",
  "key37": "4RHQ6g7yB3gkyywURcTnKdiQEau3iCdzYncX9Ca7BJ5LeNgUfDD8kZoAckFWvd7AraCXXgDRQ2Pi7Gp49q3HAh4q",
  "key38": "4qy2W6YgWkNWhBWh23ivTUcSSEZvRiVvC439QcXvPhVw8wh7C8yfyHbwHeRduBorHeMXAwLAQqWW47sKRH18Sd5S",
  "key39": "2rst5bnYqPtah6CPzCZyKUbhnWThghhixUceSjjftd277sr9onENVURhFMHtwEXV6aELL8ozKhqHKPLA3oGtCfon",
  "key40": "mKmtJxLAqkbLpbnX3ArUMMFABrBbRBYiUDDfmwjRyRKGSkt1f5fPCgjrABELMziwPT3pSkHZFwrPP84UudK6Tj8",
  "key41": "2HqdqoC8tEN8gP1FLfgDUQ7vn2vzuKebpQCgxAPxHEULzJsfrkkJJRTgKDufa9icNu5E8ZGWPoDMaKttTzQMSRSk",
  "key42": "3ge7xrgqgLxfvcVMMuuCkmm8Rtqyg1XsJTMwxUHzCESQi82QKxAfGpB51f6W7WjWbt7qC4mWQQjiRsFNEoVumLgp",
  "key43": "4fZ6zwHeNQCE6bxwGnu1aS1mjRMg6AG4cM26oqajeDXsk9BNByz4UNTbFZG3XW9qg5UehHHHhU8KPPCjHpFY9gY4",
  "key44": "2vLCRkcuwgHjG2GTvZs7wUkUDeGQSk6Fs5XwYPCYvBv1AAWsHtEQKD41janreNKBTJEQRVoiUjjAa73XDvw8Q31b",
  "key45": "UhQJ29Jt5Ckqpyf3EcWrK1JGhm2EoGNABA5qs3RH2bPuVhmkyYQb4vwCf6umBJ3uLta4CpJcjBwbFXFjC1CkniS",
  "key46": "4GVzoM6nFzBeaamWSybTC141cQVphE3UF3rvuEuzzsYjDTVNPXKtzy5CPYnWGneYcyvxTCnGnNWfXkGYTLHoeK7h",
  "key47": "3HFhuxaCoEXEZ1qYqvEyMp5uSgZFVibStJXsJSEHUcHLuHWkFmQJzHbM3EKRDhVN2YdYfmosKh9UogdUnB26VuwA",
  "key48": "5aohTCGRvGQhPbaePQckuRC3XfQiavkHirNocNkfnmLgi4bN61TDJ1XZDubSxRqwGA4F8iTKwvgCmaP5JDnGDRby",
  "key49": "54QAFaXQpDXtpMNpwi4kvpjhiYcX5adamwkyFixU86yuReEwNuDNRyT9fo4uRHLApNsW1szJAZrzPkGNPzuPhdpq"
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
