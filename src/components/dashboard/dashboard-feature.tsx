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
    "53FV4NyCtmaMonCYoAQVcip7DATFnyfLygZammzwcrF9qYrfNXVpaR94YRm4CGVghS7r8UzEvQmrTujmuZdbLzME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k1fCkFbLSdH3USWq9RMaZhej8e3hYuNJVi1idewTtx9McpagXQvbSfYoWcVLuFaA4zisqdWL2qbhd1cKF2ZViiM",
  "key1": "4QqnyZmP7G9Yn1W2eRCddmxemfgjjLittRp7cNxcNg6aWNL6GVqMX6CDUeFn17HDBXU8VfsCAEyFXYR7gjgsCNKo",
  "key2": "61Fhx1BkKf6DfvooCPzj6u2uwoiy6WATHbsuHN44GvVWWXGui8FofjxhSftyRxWjeYEB3fCUjS9yQ3pDM2sbMJN1",
  "key3": "3fxC3ViaPJrhqy6jxqVJ16c8TNY2ZzNaSUesWr8kb6jdRSsEhbo5mwWEBf6aYFKj13a4s27h7pGs4HoZiyNumj6u",
  "key4": "5s6qSrrYUMayrTvoCXbjeczEzH9hBLZQ64rndZxU1PVcHiJoMjCJpQ9m4KLQUW6N8ckyocY3bGGkvvu51bEkVMNz",
  "key5": "5ZWGRi1U3661fQ9nRLjhn1Uo6L3FzAYf7Zj85TopvaenkRj4SL683nj7yP2YXsERPfmizTEnbwjMavUTwW963YFR",
  "key6": "3LnVdjpGb3apwXtUyfnu87jwnH2s8pVogno485CkemDARAbbXi7y4PDZDB8S1zSZwCPcwH6aa4XLmQmdWAABkcf5",
  "key7": "2K6fUHLyGRuo8998V9uGUCYweL3nA7AfVwqe8BMs82decLqoUXezDHheUSBXjDLkRfvwP78oKSgTqwkuxVtnhepW",
  "key8": "32zXA32fH2VLhWdY9Znmf7wtMbHsNNbFpWpD5iNYuoPqJd95LGgc91SVZVg64pdhMqZkpUBN9SFhBFAQBsBjzV2p",
  "key9": "2zwsoy2igssZp4B6EN6K7s4J5mFSUVykemnm9TQUiUwtRTtdaTiNLUQA83LSNysf1A3bJKCQxWzdDMSDUogZfwnN",
  "key10": "qqCczrb53icGAD6D2BSYrVeB8kEUShgUAsmAQyRJSrjJ1zFiqL9QZt9q1aKYVoUK2sxBBFSssw2717VyYMNNgtE",
  "key11": "5ySwdVpTmY48xyLrPNgSmG1H1LECaue2sKpkoT1piHVWaxdfN4yr9qTLBbcyNZjskxyu8VRmZ1grMzgSMCewTgjW",
  "key12": "57U6kzCqtyKzQsRgMAUVVaofMXarta2nPgnZNCJcAFuvH9HNM5qaoFXgrvisjfUs3ns3vzouy4pjyF6Vx1R1y6Va",
  "key13": "3qT2k9gMjXHnZboF4PrAXDLMNup8iGncrqRNUKhCxDyRWhMKWo5BjWNfqYAYtg1aSRk68FHYv2J3wK6SfmJDYFUY",
  "key14": "4sE7Ukx1VSWJicVKzkyFp9kge9xf31fyiSH4tZvhHa41W7W9gAR1ZQKMCMn11eVPLDQLZ54Si21HeVYge9C733Qg",
  "key15": "3S1h38ESE2UYyHw6kjXSa82ZfpaamUxa6xwDaJxVdG5ysN1tjoixjbzumn9G58Zkgggego9XjSqhyFMLqCheKzyQ",
  "key16": "YQAjYtpPwhrHHEz7sTHZETZCUdYbhYeGki4gDY17jkH6qyRJuEuShf3QgZnjDvnVrWbn4rxJNDDvEooiix3d17A",
  "key17": "2t2V8Qk4wjjXjt4Wd8ENDfL2H8ANSLCE9x4A9erU3waps8ZdEQXa6rLNM4FYes9K9NbF4bgJ7Vitr1fHEFEFZovD",
  "key18": "4JSYoBXMrUmu9viWeRT9HH7MBi6qzmqnakgP2McFRKDLhaNvSHYdxVH6PTuAGJyp6mev6xSbva5kEQqSud3f4RMe",
  "key19": "3WcBzQmtUr3rhEK7xVCPMw8fzvL8eM7MWZLSnbkXrWTydSB9hCGjWbBcnBvV5nGqg5KoVBp5VYpxx4QTzrBrJQqU",
  "key20": "4c5ux1x5KunmWTukWuLseXsW7eqbvWDmtc6DSBwBJoFXR9Y6H8ckyXFk75dGznGfkgsQFSxMVrZP3hq7HSjc6pW4",
  "key21": "67BrDYuECivxyvXXAERxhLSAuKajjTGDuznaqUh28Hj859NnXgnuXyZduWHay3UrrA4mJBFsiDkbGqVe8JdSTpa4",
  "key22": "4rZKHBCsz2wNZjU74gxfTExyZsAcuqVy4KQvEmhHgZDo174rKMvbukA2mLSEC32yJPqq9R58nzuCv3ePMk7VXPPs",
  "key23": "3sbXRNJ91Vj6JWrK8xL8XfjLE6Y3ABwuTtMxeLTsjrxNCi1kteYzXxCZUy5nqqxcxxAVXtvL91HZtcAKur7D42zS",
  "key24": "ZNr81McpSbJCz4cEw7MgsuND5sxgkdotpVEQuJ1AqeRyYz6hSMUk7drkSa8BxxYdKthnKvwmgVcMNPmzXwfPcBb",
  "key25": "3GmyfLbgYqTxsy57GyUoQKmnJRHqnJRVPCdbVzXd87L2SHnTkdeAeHsJkKRWEtvtCBu4hsykRuf31hBvjGbycR8R",
  "key26": "5ndB98XG4v9kb9TX4PvDM9ZLWqFNZDK44ZKZALmcNjmz12qp34xTSqfAQLJBVrWngaLpZvjQkwiJzE6eLgK58YWr",
  "key27": "2innezihDRgz4zS1Mq6PYg97yzXVd5fPBzQET9r2BvMrnMbseZR8oknCpYB2VjARVX3fy94JsNQbERT5t1P2arxV",
  "key28": "539wS7KhzecevcVsHg8phLgnS3ni4W3VHzYSan2tJF1r8Hi3zBBbfBv69QpQTojYNu9rtuRjGQkQAz89NxgdpA2x",
  "key29": "296ztCveoej4SA9dP34W6XboXXFNYx71a4KuNKnWzm1G5dShZ4LUNhGmY2KSdBdzTU38bVasKpEVTj2XoVDBD6sc",
  "key30": "nbTBN9YyPVY87urxtctzb1FQhuD39KSQYwZ8QK37KAN19psS1Kiv5etbDbAkHeR9pupUTNxVxuVeDA2VquJuB3s",
  "key31": "4V4kjzqEwz1k6q66FzwHdx5XnwztvK8cBz2AZJWw4ckn8a8QfCdtaHCk8c5pcLLWeS2K1fubQroFwdDRmqszRAsY",
  "key32": "66k4j3QfUAY8gBCYNceX3rgWGkPM48HCdLBvQbuMM6VWpmPTsxsQgRQiHgHpBCMs3BudCjg9yUUFQozzZKyFj3Xs",
  "key33": "4UHfEMmrnxjL6t7GqLpGLbw1aYxWcUZobygckk9pgtJcckcsnaQjPqdvnXGUNrB7w8yZF3uVTmCGcMH5i4wLuTsq",
  "key34": "62x5gmBVx6GbQfC3LkaUeBwUvSRqaVYh7oQx2aCwcDUk7cNyRHJeXgqE3oWvrDKUAktPi8sF2M8LKXWjXbiAkpPC",
  "key35": "5dw5iaqjikSG37nhWSrQU9QqHfBtRx8iM6qGV8R4e1SHk2Aibrm1VGkWnMLaeBUsfHoNUWxdu6ufZTb4ffyDd4mm",
  "key36": "TqCeBco6BDvoMZBXkQQVYoJp418N8Lnmi6MUS8JF82DwXVUVz4GqtsJCJJMn5UAwibKWqCoPresg1m1MC4s71tK",
  "key37": "5jVCcNHE7U5y3y2497LxXEG9mCmcAf4pTLah7qpsGhM5Hkxe57i8Mj22c4SwLGrsyNaKhUtwtAuN7qDEeTxVrt66",
  "key38": "ecjDpp6uBkpntjwsUBYjzgRXTxW45RKNZAChcEEKCNHrufmDUYuN8sjSYidks3rNbD8uuYMtpsKR1cQTW8ouGci",
  "key39": "2FJkEcWVtWRe7TR1dv4CAmWMRVtDqpuTv5vsBqy51suXDfKuUCLMnp1Tk7D4anoiwdpkHHX2ZovEeNVHgXLCHtkA",
  "key40": "2BCFJZkAfiyzeJHjD4bScrpPeFnfNkHnpYoqXiC87tZQtvk4j6a6TUB2koHAVDXk1sQV6r3f4kPTDp2JSvoRobjA",
  "key41": "2L4T8U94eKVuLNE7hXpVR36XbLeCuj8UyRgu37t3AGscVA4GSaEdvkKu3Mrp6QYw1Nqg1g8fNJBbCXKnQZARY6e9",
  "key42": "4xrn5bBEJ74JsuuAeZZELizyHGFjoSwAqTmTPKa5CcRDtA49ipC9YT6Bho1WX1x3bfPaAy9gVmgjQPJmeWaJqEAR",
  "key43": "4hpgabtWfxp8eZdSjVVj8qRFeh483XkyXn7EBaPrK4cw3fuk7DyMvAuN2EJNSpzPvNovzzpqdnwiKEuMp8cnD7RL"
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
