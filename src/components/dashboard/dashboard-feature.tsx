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
    "2JHNZ5Lrg9TuxASSd1hSm6JtiaVNToHKPHCNxaSYAQyhjWXuBU5hvDoayt6jCU4jUkttfPnAhpKhQaSjEk3ymHZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zetHrYhZGWxwnQWikXRyVGiBD4qsafDbxn8TAffsJXywsfyYFCYYmTtH7eEXcyCLm2B4gmyDmnLAYrGKSFmFVYy",
  "key1": "B5xcipsxyCCABkrVKLDdJqv98R8my2YaYKAAtsB7PDCqxNWD7tzhQxjJjquMzbUJcqqmVMqxWU89n4oXhMYxN2P",
  "key2": "2zG4eM4VdscL139debdxkasrFj9L62Q14PcHsoYYjpawq31PFCqzVBsj1dFxqetNBFutSiV2GiQwzo4pFRmuJktK",
  "key3": "3ZL4eVsYCvB7GJzZ7j7M1xEwbBsab9sFFaXcxk8ifbad8Upj3DioYPVpVFFaiGzqHzp7RbxuiZGwVtQgyzoU6HRF",
  "key4": "2qaR438fo9jSqmP7kNK4mVip7MNSKQoDNJnwFxiaYgcNpwcC39VsuTiyHyyQE5VSpkizEsA7VqGqxA6mvgbTuF3v",
  "key5": "5iDMbLrwLxEMYVpRDH1cyZxfjJ2PoHH7mPsGugiTVPoznseUHMgJv3eNXQqat2z7p27iUQSpvQ1adyYPKvKHHcip",
  "key6": "59HokxfA6R1V3cvTk1ozZoKDHW3PrfSzg4qLkXfyW3AFMusFUgwuMonLSPdP3SQBYa3Yfj7ND2E8RdBUWkhGvdUT",
  "key7": "3ugRNtGPCRogfUtTCbb8PBWmPW2HUGa4EtT2xcDT6DcmoyfTCPG142gA2eb3HFSmTkrhT32mPT1Zpt2HeoaiFwTz",
  "key8": "2E6VGDp2yCsJEfZ7QknefBbzjPPg5roQnViGRY2fWcnBCYWH7PTyVfWyfpV6ZzxmJvG4o3SKpvZE7Gu8mRexaHTa",
  "key9": "SvnUqNmcG1TeqT8EMuLtAFiveyrPRvuovkaEyEB2cu9JW8MingMMzGQqzzfRNnBy4ySZu3ZUX1B9V2jgLpaVUkX",
  "key10": "2JoAk9X3gbJAoiaLjwFfgXWoemiEMNNXsbHqUM5A4erNw35PHcKP8g7N8ZkYWZzVpq5ycaehdKQbMacbf8Ziuug",
  "key11": "5C6vfeTesZ9uSf5oQN28x8ReVEEN9dwfwak45FSjuN6cGQKCPfo5SZdFYm2XPNmPRmPXaRFQmgNPfgTxu2tbAHBM",
  "key12": "iMm3mU92C3UFXr6tKeNBW1NHxkhYKfw8UKddw6XKKb7wY8qb2YPXJq1oHd3N3n8JgYr77uDGtT2ufhZqfYVW4wx",
  "key13": "4wYdoQNfk8R9ShQkLweSCZpQdGMwD4bSz9c54Thdq5WebN2G8gLvuhUteCiF65jmfRpFCXQnSaSYUqD3AKw6xWUZ",
  "key14": "5ht5M9ia8GhcVAHZafM7Rro35wcbZn6vTLjqfhnQxkv5T86vZfQN1cCb4JPNG3U73GDuympX88zQCjDV1yMShYap",
  "key15": "5VFpxYZqdvF4U2fwfV9zifvqsK58xwkLeBtZTFCKeExd2jLwCLjVQ7XSCxks7TdnfmnNiaE1HckA6VymAiW1YNzt",
  "key16": "2sZWNHQNogCaBRbiGusFC3Q6XH2YW3eejt2QgvRUtNGPZX3PmX89MTYoSzPtvoEqNovBB8uiLr8dSgxGVg1y24BR",
  "key17": "5Sr5KovrNK79NZ9jbWkHXf1rVL7y7hBnEXiySSmomA8YZ985EaEBPpVKozTQo2Mqj2BQPKmqycZAksfKpSixdCFP",
  "key18": "2UHWbhvEyvJouKzP5m1DBkBECfahP4moJ17MBcS1HPhfYcFxbqSxyd45zYyrTzs6D26TP4wbn8Dxsj6RMmYrfA5M",
  "key19": "5Uyst7hvLZaMTJ4wHMUZBVbxvgE2sCvUE8aa7yypB6KcyZSvFhgG1NPMC6XZ97HpSQhumjN1r6sqxLyzHa9ds3aQ",
  "key20": "3yzNkF91V2CgruY7f8dEHEzp3GbZ6FC595qGhqvgWzKJDa3UB965tjQQ3RkaeoG8nh4v5ahXdLT8DJB5usnV4Vwc",
  "key21": "3xeeNQVJJae834XmVp44K5rTPLUrDaxq3xLtcuv8CDEwwyJTsVReTpnVAUEmNWAgTFK4tq5fbhN8u9YKkrupSFW5",
  "key22": "4igo2Knx3VM7vsBkQEaQL6Ag8n1PVupGGDoz1fBJEndHnDx5KRK4uZ1VoJjbrgdD2K9FfY9T9sUNjPDyy6B1HrXf",
  "key23": "2L8SbzDoN9kwMBzt6b6Us1mngx6NytqCJbrEDLcKxA6ocVSCziJBXVoMcSqgWRdDA4LdqFWmGmvM4SEw9GRcP8gb",
  "key24": "2VqpA5CeCZaEzVvpncJsr7jmSxzbfyzktpGpda7oX5ggjbnqxeShkycwJ6apnkydshrELT3CwsVWEELzsFe4bdhX",
  "key25": "2ZnzEPGSTaTiVArF7hGyhWcps7KR2ATuf3W4iBahf2THGz5BHHJdHEwWq3UVbJ7AMx778gr3ANV8jvaun8XLSmHM",
  "key26": "4qZJUMbKSRTYJ9w2nXw7ho6coqVMST4rN7hJCacMDmh7Kc7xjFUU6emNRzmcnnXbaNnn79t57t1ncYNLX4yRdut4",
  "key27": "4C5vHJAgkHuMdLZM854pAod6kQvuUjxBG89Cf5Fhc6j6XdT47UdHCoUbMRkFBKmE1TzCHKhc54c6tTdcmvb9hXdb",
  "key28": "3jrQYzrHRfdsB67fS1r4XtEN5BDGBu2t94D4TNyLdGWimVHFDq3m7o91zLL3qJHrKHiNTgGm8YhpFXjUT5VR5Y3Z",
  "key29": "2GcPoHZ7pwiUCp23H5Mu1m1xrwizm53mKL6Mpz7NYH475vkUKfp5ZNaE5tnR72XrMnabcUydZfCHdfjrx8knqsnc",
  "key30": "5B6QsugUDPHHY8sBJL5btEpRZ87mz7evSVGSBpoR158WFmuzPqqsbGCxbDWqFvP6yfKijcBSLCMREw7mfHRQrQWV",
  "key31": "29p9v45yG3H6f8ED3YevW6NEGCGgxP3SrmUtaEnxZzT7pB1mT1TU7s1GC1kQNGqifMSLinHYXiRY7zbTfxibWXsi",
  "key32": "5aMwAa1NKu7dVNSPqwaZ5ezKdnF9KKfTxwvNKYvnes32snzWG7JymDHhcEAHWkVQ1t15qABng7YJ1xMjUusXB7Hn",
  "key33": "cVNt8T6BxCrHVmkCmf8tfbebym8CVYpfwHDEQbntYWpJhwU7ZyaVWyou613f8ACE3P7xiTodGM47pZKDDwV8g75",
  "key34": "25D47sRhzQVSRXQkaVAEX4i9CztkWspLp4gJLR7AaFPB3qHS7fhpjiNU7FSBCmdc7nWeAQMWQLAuRv9Cf9BYZRFo",
  "key35": "UDNjLpfnHvV58883T6xBWoUKDY4kx4QuB9SRtW3rLuXfF8tnwTPJmVU8wG5CEc2MxzD4BpMKaZGUT1koB7Bd7Ph",
  "key36": "5X7X8AXGQF3hMMyFkdqFL1shniSJRkX9cMKLjQVVM6ay5UiFrBS2BD4bujpZ39LzzvQ5HbK4gWzfHkiBr6RoGT5d",
  "key37": "vDqJvLELhuGQxt2j2EER3hvQS91q2h6tZ9qbtvGuSAY1vDNbuWeKRvFpEf9j7AYmnR9yvWDrx6yUFhrPzV53m6Q",
  "key38": "3C5ZiCp6DtnZNBZdXPToMsXQs3jBGdXgbpyoUr7A7oDfThgMiZwe6gFnQknhL22gN3yjtFhD7BK1qKibhc5KUHom",
  "key39": "2SiQbFv7mDhLwJEncTmmQhUM5pFAEUg5RpvimHYJcp1gJjfeaiBksEF5iD4fnXkjBbHMBesRFxjZexyyRyX7qR8Q",
  "key40": "5MhK5mLX7dzdKmxSaRGAPTZ223UGAJPpqGVVukX1E3FFCQ9RbRMPeB2YH78pnhJr717AagBztycczRxTjycPH2RN",
  "key41": "2dMe7RhFKrnu8n9Vy2ehpfUmHTNJAV6KX5oSekSw5VBrfZNQbuSZVfeJ7vWfzR11P54aVr6U6nbm2ZcjqDwuSFd5",
  "key42": "3RJWG5KydiTn7JgXTNUzuQibf974Y5NQ8Bq245iTzMnd3hhhW1ryYLruKbEpYz5PVJCAm1BpNnnXYViHAjiCi2ST",
  "key43": "2Lt74sY4wygCBLRGsCpPBVexHsn7ZWaofLuF49nMBs6GxLVJJkHxTbobg3sctC6XpAWKguAsnrgUZCvPM6L5cDAP",
  "key44": "59JjjJFqSE4YrmanHKXoM3LhwKg4Lc4KJTrkPJKmvGe5mExGPpayP4fyujHdBoTd9hYc1JPCJzSBaHjrNMrNYp9N",
  "key45": "4kyP36hQYU9meaiobMtwjEYQ2rpEtqiKWEEZwv7s3fdnyDW2gbJWpuRQswNcfQcrSiQeQ8juNWAQRUtJp667WREC",
  "key46": "2nrUQd7oCtyzAxAF15rB7Axnz3NnkXL63abGFYWEZAeq4D6GHkCgwJGjCpg8sS1bWwB4d5ZNPvw6bRFjNshye5qf",
  "key47": "Zk4D6Mfj7h2SFa8e7hY5mTmUJk4TMDyrT1bnkFHKRbtLd9GPVRk5ao57CsrjzaurgSVgQPWobvTMZnHqeVPHPGR",
  "key48": "3Spez6MPtbPB9YJ4YLAYyQyUB8cfQUJHy3TdpazAiakkApSFAbhmMD3s9ahxACfgyJfq5DuUcoSyvVsJJjoUoKWr",
  "key49": "wWBnSfiw1VpPpkSVW2LPDFXkv2Ub72FVeqZxRvnVWji2AhsR5uSo9vQ1NXi7tJtkgQfZmpTNUD3WFGwmnRfQnAR"
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
