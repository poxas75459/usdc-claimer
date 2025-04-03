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
    "K3K3A13DCXQAJParuCJN9Z28un8yBVHaEeCmXQWHMvSHVpraMz9V34e5WesLxLbGp6q2xhw3RL3P9R1u2eypGCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQYdYDCxJ7hMTYHMS2AtM9Uget7YR7LuCY3Raf6ZxxHo4XhGTqogXuR5yfK3dgzzBDBV7zYJ6U2qtiNk2vhaLir",
  "key1": "NRKEQ4KrdjzZJjs1VLmPajhGTZyHp6ooDbygpp9d8sd4xUHcHgPnGnY563RsQXMkPF6GwrTRtEMUXtL1SytGkAY",
  "key2": "2tBH9gj1xMZHTEDs7hNJtWudc2MyZQDA1b9NV5xh8Ck54QoQbQyXxJ5DShQHfAen3wMWyVPMgXC5KwTT6wvrV9KV",
  "key3": "5jrLRDqEuNFq8SXcxboe2DR3vnq9whBNaADSNkXSsE9A7kS9HxeLBD3Fi8BgMTJ18DCjMSEXKVG9UN59ATcFVaQW",
  "key4": "51mm46bvvmMVkA4qkcKUHne1zWRFtW57dhvnV9ug7vC5muz9PnhPeLH8bowpXrYU2fNWhLVSqZAick2UFfrRJEii",
  "key5": "4fgJptmwZxV18roYzeJpJvDy2aj2NhhyB3PDRdQ2bscFRqz4Y5cFsK1nT9LPW6Pg9y9UQrBhwUSfnBpF6MK9RGNS",
  "key6": "5R3dBnr5Hbu5XXX3aRqNqWyqE68gYSUwe4RRXR1BYesBnHTCCmp1z7Eiu6Xyujf8QwqvESZWGoQAEehr8kyoRyyL",
  "key7": "5xpNMsMF4rVf1YGHxChJjJk8cxfEjcQFxbptJT6UqbQ1xXkmyb3qWCK4GGLUFbSJyUkJTiWbhTZu7nyQ3wTGVHri",
  "key8": "3bjCyv8mgFAryW4TH3FyT4vBZF8BusWtzNCJg1wVmsD2qAnrmGsyJLgjsHMrgkkvXuBjkx1KopibuYo2fjBAYdsn",
  "key9": "5Bk9NLab7JfDoBAAq9FstSyTVZaSCtCo8Rh8iiNY4qFS367wbGqcWu8uPVerNoEKLC24SioUWHHZd15qmSaswuYV",
  "key10": "4bDBcsUAG6JxZb9BXk7djBj2w3MzS3gmx6doRHVaMyXqzr8VkF97PuVMhDwuDGoTREzyLuujE8tRW28dVvWdTLWM",
  "key11": "sBX3d3x11i4wNrVuErsCXNFUp4Y4SJKtNZsNrjiDBhkAh7c4o7S7mbwYfZ8CEhnAEy3NYmRN4hhnsmmcHqwZFCs",
  "key12": "2UjsuAxBQLQaWhVxR2dSR5ngpe5kZTinekFKGGmoLM4fmH4bKMDjkxXgkndi2z8bwfyjRfVy3es6bT94iaxBmxg",
  "key13": "4VYXVGF36ZBrxiywntFnn3rDoXzRwM17KrEyf4u2EgyxSWN9PcJ9SEZETQNDtXMNZN4GwNo4wP5DPPbuLSfz3BjZ",
  "key14": "4PMk4f5KFuczvjaAWF385HQXaxMNKuAti25HFXuCX9FjXzpuGhfGAkXEDe7qQbgH7MLMAMQkskfwLAaKZ4zFkMsZ",
  "key15": "82dJLQGx1EUgEK1cLfJwzRDMJwx2VvzCWmMXLrYjahzfAxXBA73u265adxsPFtSR7BcZrwxaEpYHDecbHRattab",
  "key16": "4soTKDs2kN3J54aRSP1XihwvTmRtePckK38hVucoe4DgA6yA6u84zGWGX8CUMo3mVWjkmS2z3Rj3dqTsaDRjjVwR",
  "key17": "1222eqPQeyaaKJyQygBeHLkPPkjgioQfK55jJAskw4Zqei9UfoTbrRcfCS68oF2xhFNUZxM3UvDBmSHSH1MpmTLq",
  "key18": "4zcU9CLk94wVifZdgntNVoJLHFoYtEhf4URz6C4Dp3cuCaM1KwQojasbkXJ72VSCpeD6b4TgxiUF7QrEaFPK9YVb",
  "key19": "45sKwhRV8zFyNddDNjk827zGHqmtEs8PHmYoh2RFKY57NcBqETrdWhn8U14tcNAeypudHmZgTrBBBBKvWYpQMHWe",
  "key20": "3YToaRi9nWSSoCSWciMD1n11CnraSiyYd842LfBDrr8YdStQ23YU6MEtQ3DY8kVr2pJV39E278pTwWujw6ABCwaS",
  "key21": "3nmh2tUMF5kv5adcUnLUGghVh2RgdLfv2kAAGmfGh4QoKJtswFxrD1zYgdFTrko1ihgNUcPa66Ci8VouD5esaruX",
  "key22": "3Q5DoMbrkEPgaNRawzrRSbW8kQ8kFYu8zWTQ2FhVn8dCuMotErsAT9YMTmbN9MFqqrSgLzothabBhEtM7tx3jXTY",
  "key23": "5RDMxejka9cxBLzQt4qyjrUth7r3bbaXbz3EzxYJRz84JKLeWUq1rEa8iCn6xzhkp4mRUSNdbQGMxjvmHBP2AKEU",
  "key24": "knVgiXvYxpvTCHFm8m1ccMnz2wqS3eHVCKMgbo9dUK5bmvGtXEty9EN4REii55stUAGBQiMavpYAmpPQ3WhNAS7",
  "key25": "5DtK3iX5pzBuEyGtpvhaBGrNVLqVKtEFPKKJENaX8rk9uFHbdyGEdLbumTNiTXgk9DpG15ieRnTzGshBL5CkrKQ9",
  "key26": "oKjuMk4iQi7ACwTBbtJYza9NdLmS341R5AAtXGGJLfv2XMcTJTa8JuiyFNZwoWLhPmyj2xE7knbixqjpDYAyxY3",
  "key27": "3uFqHopPybJYgGdWcgbHdgXgHBtBfJaLs2ibXcdDMpr2PFxhU8vvGnrrGuCkYFiNaFf3Ra3M7DkqzZHfiPQKE9uF",
  "key28": "QZxjCDyX9ZZxw5w58kC3FsoRarcHmAt1Y3NBACcw1vi6pxN9p52zNSgWfakS27GEQEWRi25LS1MahVsiRwLsoKq",
  "key29": "3Hw1p7kv8tnDpZh5FhVwABo4xgkCq7TrYtAFa2AkKsYCQQtPWN1XzhQSPvkgDeqKj37zk11bEmqQBe9L27RSG5Wm",
  "key30": "bEhwLqEfcoBPhHKuTP9C9Ks4UMSesG7gQiyxJooYCHUVgtFDP2vguQK867xZDsWBuoSGVMT4VvkuGU1z9r8csFh",
  "key31": "5seRHqJ4CFPF6jP3vWDAqRWMh9wsZjHoC64CmgExMpk4qQTEA9UEoPJNXzwHTYjKShpHtjgPam4iCMcQ1tgs7FER",
  "key32": "2JYLCyjHyQaBbXMScCn1e4Dkvb6bRDL8JRVmWXesSfnHQYvhVbJjUEc1zGG4giB7vPyxSLS9286vwY6Wm3GfVLX",
  "key33": "2JfSKqDPALs6Ggf4C4UPqGM2ku8K7N33qS6ZxvGkPVtQFvajhxiBkZLpi8N2sTD7Cm1kxzXR9NnFeRoZtYAxxZLv",
  "key34": "4Yew8fqovNQwPJPAPFAqcP3o2CWe7fdGMVe6NFcBksE9TEMg8XEUQxmLf4YdrM3wUtM2o3tBBmYr6GoXiapwtCFh",
  "key35": "4ndKpiEJTfsQwxtnEZFTJjUgRjGA8nRFUJwzPenyj76NQNyBMakxQJaD1VFAtiAD3o1kNtTR5ZqX4h4e34hPBg7t",
  "key36": "3L8N78zBsCY3ucv7BEsVnTFq8peTNNH7WuRcjW8QVkqaPv1Lv9Q32JTj27EZqrX1dg71o77V5E6s7PBAPSwMP6n6",
  "key37": "2zRMGz58qRjc8L3WuqHWP63VExMFMw996uTo6qCfRqCo13KvCDSpmrCmHNvj2q5ZtbrAG6R3tYEiZxvSDUCWiVX9",
  "key38": "41AiwLCd4XgkfjdYi7XF23WJdBLuhkj2Vw9nfHVA3f5Zx2VeQhkuJ4cCAQiHHWnGLiPho8VFX9UuLHWtL34Wtb72",
  "key39": "CGZzzPa4unH3HFNn6SBC4W73EYGwmZ8iZQihY44aJnwHSEEFgKURtZL9uTJRhMapcbuYokmmFwsuZq6DFGp2JWC",
  "key40": "5yHyXCBoaz297nArSpCC3ZaZwnzWjePzBRy8dDZiAeCmAzdpmGHffXQJh8fsFbKrNQg4zsSADjYV5qNXbzLgvDyS",
  "key41": "5nz3SjgXo5ftnR4y9dD2e8aSXBnUYQDYJAzMTgr8jw8FeNs2T5JGhVPJb3hwTadwjEEZM1MpSbEiCcg9yovpAcNn",
  "key42": "5vN1HAxAs4okxSGUruscdPpv7GJ5A88mVmvrFZAKcVTPkJj8zd1RRAm1m3GceFjpVGsow3Zh4r97Q1YdRPT2v8wP",
  "key43": "61PiYDmFAgWb1VxiLFGZCNZu7tV3gedjaw35yvMEopYH5aF2Q7L4gy24Z4MoftjExVZZUd5H3PVHmXPTx5g6F5B6",
  "key44": "5ntxSpKJjSGnS9p8gBcvkRMgrge2hhymUFd15DLMB2d6hmSHk9beUA3xpy3xiVLevYYbo48BYuSa1bJxbFvEuUN3",
  "key45": "2s5VT65xSxxiisevuG8m8MV1tJSADyGQpmebUoLQCRyWUPgYCCH8SshVfMu9mDCuRnJNA27NrAamX58XaZj9G7xe",
  "key46": "67AnzsUKUp2fnpFaPHctTMUDCNsTnxXNrHgCMVJS3X1qybuodWjkZuUZfEJec9RF6wNvVnrw1p4RDRDuV25hPtmm",
  "key47": "jT1HNkLKJZjjKbRCUwBGyQzs3EUSTcy4Er2Eep5AZRBEvss1GFyKCLvGgNMJZafZ1w1vUDMwjDq3L8ajD3VuGUu",
  "key48": "3xQF6SqfNFak4Q3Zz2wBsAGmzmHcXN9VXK5chBwLA1uhq8xpwiQMrE3W5BEJpPK6x46fP1hWu3eQPvBSmtpsgHY"
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
