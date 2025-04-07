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
    "2AiypLvJ9QDsBcxnGWb87hjSAPyZqXCaLasndaH8eSnBmJE3MpYbiXTVKf5bWzQvSD7bUuaPDqzmXGK6Az7Q7yTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fWf5ncWfUTYCHis6KXBmXke6wnW4Ph5zMXMyeMoYPjtmcwLTeQHNpzUszjHMX5uojR9gKCNu32i9RsW8Uwjshp4",
  "key1": "jn7NYCS16rmbFjd81oJRbVmNZzXiKJXDix1KvAM6PCW3hmbNu2TytxZeezhDHq9xRtRB2WAYT453qwA4MCgxk5w",
  "key2": "4WYs11tCML3n3oyhEixPi3QJkRKd1vPXWDRz63qJ5Zmj6cAppF1vxsFjxYQwig9f6hFLJaTESHhVdjrWaFmisWNh",
  "key3": "4XVfwHmCL4off9R7GUThZy9e7n7KrvjfdeJ8B9M4r6GUyEoW6n12BcGQP9kcECzSmR6W2U4SaYqyMJcS7VzbfMZS",
  "key4": "FUgXogEp2hBLxeyJzyFQYGerdrR6Sgg6FLbmGSHsWbUifBGH5nCsonP3LaTWcCxPo8ACu33jL6iJchQfPB9YXr3",
  "key5": "3SFg6yVQPFd35rsLH7YVCbiHoK14YC2bYer9FPJCSceZ7Axkw7fyCW1HBFHrWQ6Rthtq8cGpAzrHSWmCmDYjEoac",
  "key6": "2vRYE5rW1VeEjcWhPj6g7FLA9P1jN7td5C3piemtQQa6p7aabLGSqEZCvQQKujQJ4X3xaPHzJRd6K3WU456wYGUb",
  "key7": "2EoXFvEWjBZzUxbBDoDF4PMhfMVXkKXmY3msbbcRqiDKeA1SdW4NoLd3StdYKbbAEpFCcVFC1HtqkGwAFf7mRFe6",
  "key8": "5fiS33GcnaiT1zJ4SWAraEVffyMqpfSfBjiHWBVRsPznpbwM721chzdPKmGwuygtVVXEBBYZuLcgBeUz512e5XYW",
  "key9": "5wXbNNCsQdzDTiivBCJYsxA7unvcREEM7AfrXvVaQy6YE3aYXvjHFJPSMsz2Aevc1Jr4JCTBZVaAE564Tep49HEp",
  "key10": "5i3rzUkgC6sh7WTxjWY5yHbqhWE3AWMd1VgYuRYKySXGScE8j6Vck17rD3pGrFVQvs8G7pQUNT4ozqrY9Dc3ipvf",
  "key11": "4PT2Uq11MRXYqN36AQNoLjCUHRiGswgqozuAte7ferpsfBMFCgLdyTR4G1C8NmyaBAVgA5JLyCWsYU71UNMbWgFk",
  "key12": "KSzGEVVUvcBeoY7ph9JEdZ19CDcWgEF6BBhfJjwQ3SKv1z7PaQwELeFkcQj8WCs8hrXUYq5TXtj9SmojfQJMtYA",
  "key13": "4wxmvwtqu39GV1zQzXAN7Rug3VsV5RLgqFfAcCwPjNn18NeEa6sQAtRpjDuuNwtJkMULkhRai5KKkdJFNhb6Wnk4",
  "key14": "LJ2f3hq8hXWTSGPEh6dSyYvDEwLn6V5mTTcugnjzsyetugZEbCHYuiCFCFkoppuRxhHaPoaVv7xtRwYq3dUez76",
  "key15": "3MwTpmmLyT27pYQ9Dgkc8bV693fmZeWvxmEjnhqT5azV5F6PCrtPLS1vwBweNsXLrfioAtWPPZdvNBiWK1LbfSfZ",
  "key16": "5d22zDxc2imJAjyUGaNu6171UWUNkt46C85egLWc6XfuHRk7qZ6SGhpLQZHwm6owHVTDwBaZgaMjHsesXdZazzDw",
  "key17": "5QXpJkZJJgm5u3TZE9bRPM2X3c3QhJFSzs57w9y4cWupTEHtm6KREuBkpx7tGyR4U7n63uLuxEcbuUV1LLCz488v",
  "key18": "2UuDN4WxqAPUWRpc37DcSdZxtwdX7dVEGsMantt8wWu3iEB7efmJoKNsa87nH2yK7JJL7SXVxZd5n6terUA8yMTE",
  "key19": "3Wjnzj393e6X8M193CQP6frrw4mQkhabSQoBmuhRXfDmDL2RR4HWJov4dMLfceYiwug8tgsN7MoviYd6EELAoTVz",
  "key20": "3XcLsqf2GrpvvCxGzzi7vpvgDCESdADe6PKVeNzctaRFmZs78uz9oR76tQRG6ZAPeJjxJtJvX3QoNdcSd6pxtVUb",
  "key21": "3MWcbjSDYfFEUwXzxpP69WZfLfGdbtos2mpoNfHXJjDgKxosGFGBBbuVEJX2sVs7iwMyKkomFch1GiNchAqjrEdz",
  "key22": "1V4GS6B8sYPtEtx2mEtcucFa97u3VFJZe5DVPnic4ThmcjSsEwYVm65Rh4NF5CgD2XHKfRacJJxtpuJQ19u14hQ",
  "key23": "4uQF1T4cXyJSgqSJaNVQhoAoMQ6xUKgBHHF9Jb3HSciUZi9DKSg129NFf1pwHqq2ABUj4jdEQirBJkpsi3Yz4BXQ",
  "key24": "9Ktjuf57js3thr88Rd461yF4EJxHYQZutRUYhxjAk5TsVxaqwgoqy5Uuxi5BE5Lw7HSvagr3TeHZ4gnCJjpZsCG",
  "key25": "5YabBLQdrMr2SX5QsLNJL7wfasPLT39gBzhMt9bbdfqQk4kUWwxXqFEfJdecSRSahQD4QjtNzSxztyuyUfoXVDGb",
  "key26": "52vvK9Sy4Ujod4XRXLXudZb1QnqQT3kisofAQXeGUfWNSRJcCZajY7tnjGeUcenGmyTvk4WYQnis5Stoc4s4gj2v",
  "key27": "2GDorUHDrU9ciHRMrWwX9TYFtHQU3RqFeAzTkXCiKNfJr8kiqbADycXMS61z6q5rNS9S11hxUE5neNCWx3J1W9xC",
  "key28": "5gVM2VVGqHr1q2szJ9VyiAvQDXsSVnycZ91BYepasYxqSq1rL2V1KTFLbU9GrNk6yGT1Cfh4ifdYymqJ5MZZWdWQ",
  "key29": "2YYMvKT7hH2YhHfVGFFAgYL4ozJQMHEVJ3LAeeGoHiFT69gBZwDMNkLue9dpFfWTXHPgdh375osULLasdFox3b4q",
  "key30": "41vRo7ham8qtoJb89EQkqHM2A3PvYNMjTVUi9XTVqEH2mWCtVXyAFcDbjKRFPofiftJmjzcENN5BKa2mC47inkZP",
  "key31": "5NWvg96DHEJ1Y6CUSuPN3wTtBEcsPaWgaede3RNX6ASNtoybS8vfspjcxja1kYyb1jVPeRvWB7pNfNuNwD8hMdJU",
  "key32": "3Mg4E1TWJzWxY7LCE4exGy4a4hFpsFGMvAogV9Q8LG4pF8RvpXKGRauJeNFznVafAfnnX535qsFpD5kvwoCCkZEx",
  "key33": "2MdVattpD3byhRqxjuGznLAJ8i4qJrwuwZ6SFFAHccVULDk2hSWECu8K1ij2Crwm4U734q39BPzCFJ3h1KoNj6Rq",
  "key34": "VD1kke6JQU1LkEMRkFRd2qAWjndaXmCfeSahFiLUH64CC4SA3fFUEQVwPYn8waQCAQ4sTqJgZrLtBuhWGdfmX8G",
  "key35": "58ddArcTtJjWiFUPjnNiV9ntzm9Chtxnnn43WgBiSZq4bnaTcAaNhe2iWoerXeEp4V8xY3PnHYj87EPpU7agjWX2"
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
