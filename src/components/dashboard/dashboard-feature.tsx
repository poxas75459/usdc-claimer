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
    "2TTWSPAELZcSTLUZbmmZNwLtZonycdFuFPcPt8yVKSKGEax1vKkdDk6EFKXAj8CUsDMtjCJ6C1Nq6xoZj579Adbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9GcNwnBYU7sCknHSFczTgVPRb2b9AnepHzWaDvpzFGcEstn27s7X6D2BekaBfeHPvgphbkELqWyqC9kBaAkCay",
  "key1": "4sf71rApGJYVV5vM1EavNGuHVon3jW6oLjsrvLmigAvcQBfKVsxtrCSRVnNAMf3medufHCq57vUNftRYC4iAwMnX",
  "key2": "4nsSgvA1HXu2zsq5ABpzHzhjbFisThnBPWeVdjKRd8ESS9btz3vmNG9KqLb9WGB6gJqAd98MesDH6GXdwcoARBiJ",
  "key3": "abNV3wjQZY29hgxkLNZiwXMdXZKNBXfG5JTQWvvP1vRgXj2JyHhj7Umi9Gy8ZrDcRrULrycGyYnaCc7FFS2Zw6C",
  "key4": "5cwFpydbBrekemz1icNi22a5p2heYUfSxoy8gkGa3ythvSUF2SaamN16AECV5FCSsZhfYneUnfJmGSWwVKXcKwbL",
  "key5": "2EKdSPyvKuzJgLnLuDR4eePdrDDvFU6i667NwkzzQ5Hq5Y6dDkFLvZ3BxktiWe11NpQ3ep3bQ4T8BhYb5SjsKA25",
  "key6": "5uVTqep5L1rw3tkb1hQJwg4sLhDZcaz1rrERfuZWZ1pZLYzJpKDQY6qHAHgJCJC97zzNhq5D5cBX3xYSrzGyQUDs",
  "key7": "wj8hgbdnvABQBTsQd7W6a2DnX3e9JdFb7N38jsy8LQpiSAJRKFZnVnfBLD6yr8Ngq87BnCLz24uc2sEZayiLRVP",
  "key8": "2SKnBjmn6rTRgA9tKng2rFDAEHpypxFHfJCKxmbb4ZNVATHiDhg26F4WqtpX4SuXSeLVaUqEmm7Ffsw4tkhiReZh",
  "key9": "5RGM4wi6q2Dm99EcCxCXNWZdaeeWnKJ6UixKyaNNUfcrWzZbmxSaT1zBTqSdh2vDoSaXJfsVcmUBpodyfQ6NYA1Y",
  "key10": "5RVcTXr4LPZ7Rk7Z2d9Zhn7kjNXrmQAK36h94p5CrKA5eB3F22yHurSvuwFTUJ6bYmT6MASwrmMwxbL1VGpuwCND",
  "key11": "4pkNMEDd3yuncqDcW4AzhziMxwxWZSNcWMGSGYKwYzt8NFsoDSJa5XXMpqMt6BjjDQrGmZyzxjRcaBAua3gv3Xu3",
  "key12": "5R8waXWG41jTsb8LpVtyMVpik2w2EtiVMeAdLM6ePUCF2bHTpfXDRGToorxNRshCDQmVbX8vXmBBKWX73KBrYgT6",
  "key13": "5bYEm14SbT7LmtdK1FgtCQYKSHHq2hTP7DTSNKfzd71CdcijrSBSGKiKTMUxPhnU3G8mF8ALytAbuQGjmyCagXqL",
  "key14": "YRBXDTunxGCyq3btxMjv8hkoQyFc2DyzY6NQanT7aSGQLJMiE7Z9T7aQguJ78K8AJummrCDjqisFLrHUyYDHExN",
  "key15": "5NJtLQam6wWkLPVKsrCF3KNRm2Em5V8bXRUasAtC3uqfLVfG5wwqjUZpDLaNrCvCwHBHCfVjR3qbiqvS6ffb6Bfk",
  "key16": "2ix6Vuh6q2bv1EcekWs4sfwGS421Vq4Fyzr4tsWcdUwU9Dk2VjLkTNqb45wQXufQ42A4suSDK7ZntiawMhYf3Kr4",
  "key17": "4Y5ag9DZAU1VtEWrMJiwZLDLDH27qqHHbCDeniGwEeGjBSnEUJoy6MCnCHrdChMJ9cS5xdAFgpccRfBpYm7QwSKz",
  "key18": "3Qe9qTBAGy1pVvQbzoccb3ycaXo6RUSLkiq8cieKChFPJ2wT39ujuy9e9eaFGzc9N6FDVHvtkhdxGTc9MBfpXw28",
  "key19": "34K8cBwvcuCUtforNXW7n2tFmGxpKku5VcRhifkhABeS99v6hEL1PBAqbH4WR7K2daJGe967yJgZ27VxmqNHx2QR",
  "key20": "2d7faRZXE6x8nhzWX8AJUBTPoUYDnautammT5kDDLLXnoVTA4GtqeQ6xhyzWKJZ9dBMYTvJa9Pw3ZCCwV8nUqnhN",
  "key21": "5LdYM7wupxuKSyX3AdHpykhPzUgFbNSDL1QtAAHJfgA4nSiAy54Rr592nZZ29UXaZVK91Rc1HzJbCGaCFdikYeYz",
  "key22": "4VZfdcnEauRMY6d2CNAVxtFZFnVMiu9EXDGtEFCynJGey2BWB32H7F5RuyPFwFhSoM6qzrXHQTPXHMTyna8g3eZb",
  "key23": "4XSaC5SuopWkdmHsdQjAYECqFDSvbmWJnrRxPaFvgAeL14mrAFAVdnjYvqKqxUWCa6Zm3S4ntYXJ7RDdtXKg8w2D",
  "key24": "3iGCQ6QnjVUT1zdP6VrTXv91MAMY5DLxyyjnbqNFpNphmczzpiWdwn8nTsuETfJKtH3DM9pMjNDbm8oZsYEBeBFj",
  "key25": "7nNNWN3qsZxKF512UWFtW7k9xfcGrT1FQNGFRMnf6GW4EhMLV6v7x1chNJZb7ZNiaGbthHpDZtx6W3fAirTP51p",
  "key26": "4bboPoBqF3m3sz9ihqAMFjiYZ6UoqRBuK8GTMDrr99HxAs43BxY9TVR8KCNJETigRXXE4ehvfK7Vyxv8KzZfqLWY",
  "key27": "2CpjyN496Ss1gxy2q274YD6mR7d1721HtqMgGaGfX7Wzfq2fh6AkZcUMwhHbiR9GM9eSCLqi753TgoqwuRvZNz4p",
  "key28": "5M1F7Vtso2F6skDktVK3LfSh4KFWfmDDoTM7k5Xp6ss9rVEsFJ2v4JpmeUNStouDfX4G25qYTNcrcb7xGM37GSCF",
  "key29": "61wPSthSLSn7NqKMoVMz417qHpfbMcvWmGJ6gLoaMVsBMcoB5zPqXwN1Vqb3DhSzGkyCidDfWm2o5jxzcNGf9UNR",
  "key30": "e81cpz8aKMo7Anx5BytJG58msdvaxB5qCQrcpJjjpimPQ3EnVfLpYTyA5JoKHpivePSAEVLjsw2x14kHZbEQr3x",
  "key31": "4mtVvsLR4Kbyk3Kcv8g8Bon4cj6rfBnxrba2WxeXNAc2ineP9xRdWo83Qy1jw8z4F6EtsFk1mpMVH7ds3TUDqEdf",
  "key32": "45SU58ux6RhKFYwkUYcwWLa4GPTNtAia3NBxfDdotcw2bkUVPz5C74zPzUm4EEzUfcmckZHhn2wVs8uCuYBN6w6V",
  "key33": "5zsZqLg4xoqn7gicjrFQGx77NyvTGqHEpZ6D7raQuZ64JYuAj5kPD5ve7v75bnBjyfkzWdDRBgZSVjbcoQkHycqF",
  "key34": "41CcfbjmfvKAAHtwABkgiuRy3ehzj5eEdpEsQYUPHkSW4LhYXT5fxSwrZCuDwAVPK4Cbc2fYkw7PMajDLxgnnccT",
  "key35": "3Dsx9Z5ymPYRXBQU29kfmA7Z4ZnXf5V8etiYCmkBgVFq1cUXP1csrYku5B4w12uNCFxVQPdkP5gAcCZda3oE58pk"
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
