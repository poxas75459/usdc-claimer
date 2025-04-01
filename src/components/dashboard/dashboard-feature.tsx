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
    "39Mhi7n8KvJucoQ26BX6Wf1Krtowh9A3Mr5GzmugrLNHxiqVT1qXgP8CRyZgdy2AEnaVP5vpmkDruk55VqFNgbHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e3ju5SE8jiMGQo2rS69VeeqQRRr3tYxgBp2X73hFPrzFP4VwSRuVciUxgqof8aSwp4LUKjS5yV48V9aSxhTPGsA",
  "key1": "GLg3EaY7WMLJxq7yoLJ9miM8Z1Um8VP37YLxBiuhRA2KVVvXHTdbriPbmwaUaeWpcaNmxkN15mXd6m9B88La2LV",
  "key2": "58XrmTv2sXzpzBvHS8VQhttpg7BpHFzsBKafhoE3Anj81T3uvujQvUQgWiQuee6SwGezU3mWmSt4Q8PphZJAj8qx",
  "key3": "5keCJmKCqpbpfAdtM9rKB55z6jXEUo8xwpVFx7e7kbRR2ADjTCxXvV6d6qXxtuQxfrqcAVpKej47GdemGmxzx3AV",
  "key4": "3XdTh7nKgjmgifvk3HisdsizRJ1prbB5dnhmuDxJweeC65eawrbvAScCvSAMn6P32yqFC8D72Rery6tsusc6PFmq",
  "key5": "2z9wcguEZTKRkT14BUMQEYfjdRPZBPZE4MXi4hhuCqn3NyUzusw5xgY33Q23FCGyVN6XtuZdTmttzjNHzdQuf1E7",
  "key6": "LsWgmTYhcNcV9y5uCGtgTq9UGi6MMUa87Su4QgeGU9zjBPuFLwPu8XCCaivLwNqwwkq6C9nBqFt1rZD9UPyAHv4",
  "key7": "4UG48bVnPR76pdgyUSwp4xHXbVuCuA7XeRv8khqn9rx5hNQVjd2Bbk3bb9HUpu7oZJSnEFZsSS5EFN5d2e1JUJZa",
  "key8": "58d2DrxJDuiyj2v6ubGrL4RmEztP75VAX4MgvjaTyQ4gCp6UPXnokUGHitaqn7mUfTmKksWmwkUTF3BfkXsNo1Q5",
  "key9": "pGth2fCJB85YrHijSgMyJ2HRbvoWwCc3fNi6uAkyZCkHaHC8Ded2RYUBTtm31Ue36pmhkCjTS82Ep78J3WDmzzu",
  "key10": "4pMX6zKHSdcWVJuycVVApwM3K78NptDPDte85VnitEPjzFcbrXU53HmwzoVqBFJFeRzwx7TXsSczCHYzBQqYJ1uJ",
  "key11": "26eCDwEUDgBDiTWRv4XArhEk1LhrgC7SDPAXoQBgocuRbujdPzNRUEedUyHjtG5TG8cpVKpGWPfdyYX3m5cpWJza",
  "key12": "1mHbfPbDDBvEjuaTgsduoQcjhjWWNAooXfaLuQoako7MzXskwceoSoqYsy2FyiiBdFNMM2XQXzwhubP7BNqAiwH",
  "key13": "3R73ZCFvZ6vcSWSJhBBrmfjnjhGReYeB9VLFyb5YBfDMttzdcyVF67HHEbYhzkTMMPnMkjRue4MECzghhxNbNCw2",
  "key14": "4ecMC9RoEhdMnG6oCZmCDruL3St2o76q29rpYty6w5TpCGwEsGbXXn1o1YApEJ1DL2aGgSdWx7bMiVMjNS89oKAW",
  "key15": "2saVeAoQPjpd2fS66rcmRAxDzmWWyPVP7Q4KvPH8eityYSbtMZCGVTTrf2LXncdeo1V3ASF1QzsQQt8ak6V9cqGB",
  "key16": "5oGmbunA4DpYq8LFyBqSvWAVHhQQtjhWrxq9wpNyLSyD2droi34ZjxGQmoGygQSptUcMPUpn974ruK6quiFGH8e",
  "key17": "4ksuEQM89d623FGTnFhESGfZu3jmvQYHw76oQUJL2ikrpDpGPJF4VPAQqnjsHh78MXBGTh3hwaz4rTS5gNYv2bMW",
  "key18": "2usnwnGaaP8aCwy6iMzsZc9DhuKRpVP1Jm9JmtkeKsy8kMf5b2e2ZzvP5Hc3Qztv8qziotUC25XDikur2yFJwXxv",
  "key19": "f8tjMynytGuE8V9P4kjJcPi71cc1ux8eZVyBNm964Y6e2XzZz2nmNt3uZpr3XkZq6PqLd6wmu2pswhyQDKw9vDL",
  "key20": "2oNyTngVkZi14MpDcBSa3Q3SE83aZgiGSUf1bkAtB2xHNQXLxaJEdQzi4AR2o2HhFWfYGsCCucQntvkGhgLqrMmk",
  "key21": "5GesYNsd1oqf2ju5uSTQruj35C7tJVpuMNkxoyNX79RL4F8WW2w2KaS3EWYnMYjsmc9MQy7CYK7pY9rsV3A8rQQ1",
  "key22": "3NBZe9mxFFB5rnJtimZd2bEaJ8GKzUFEbxZkwLNipAxy7jyFNuTTx5qM3T4MSowA9XNBFZnTFvKx6EPMVeP6BHUt",
  "key23": "4egpcyBsiyx8qgND5CZfcqRAzzKW7HxdvCXByLvZTS5WsSfQcDhres6qXX8ohca8FbzZcSgXbr8T4n4qoDvUiQX3",
  "key24": "52gcTbfhoRkxaJyXQpFk4P8bPykqXeZkQJe7Nco67pqub3rkPPjomneJop44QvmW4xESd4b8a2ja5Sr1aRmayvCQ",
  "key25": "2qjwU5na6zLAYH9iRj2u84iUAUvGMmVSyAwrnVfcHv2EZ2doVb9QreCDMxhPU5CP32N2uNwHr2KAT3wmDrs3Btw5",
  "key26": "5UscBBuCsLnaPyqprjWnnwHJVjvWeYgrBevyTC475E2ZwUhsJLvoAnEoq2nQWzUGqZdH6jP2wdqeLwUmFDLwzSnF",
  "key27": "4if5TWCeNLzBCZFRdyvhVPLJu4dpJdfqpvdvaWSRvBYEouhgG2dAAXGdN1t5vTH3g7oUQKPXSvVgdp7Nd4p8Vjsk",
  "key28": "4BP6YtTddhpimkFY8vFvHwfeTB5iDtwrFfddEcwZd9WVzuLDFct5VK9AjSpzUp3ntdBgm71taMXAuTxDyrLBSJjX",
  "key29": "4qzYseWZPSKsGR4WNjQVyz4uVopHRucg1TjSJALa4i5wv4yFkEMp7Tgb4ADgAqEGabXT4h4KYNH63NBqc6v5uogD",
  "key30": "588EYSzXfYHX5St82WLHh8N2218yL84gsXWgbnM5MbwuUf5qkoeUANESJ5A4WcvwbGr8wUf1HPF1skYGfV1b4nUA",
  "key31": "N4zk4fhx2jGE7eWMfCLiUS982CA5EzjwSvticf3m4eD89aJJW7TBVD2XjMDRmhwa9Rd9SDoZ9G4u7L5i9w5Uyu9",
  "key32": "5axZVf5hV5dqF9WyDCvk9VLwbfy9yKmrcEu8QuZ9zQcL3g53wFP8qCaZYpEYYjzyMSW2SXsUnM4MXaXhqnMuAdzW",
  "key33": "5B85JSkshujWJNfuYLynUnE2wQPMjNpSZCbZksaF1617UuTkN9PaP92SabjW1jmGqbXLNvSwkTfzN4ti4mZ3yUcA",
  "key34": "3L4rr5MuZREnwoPRARCtYNipJ8rDE7xvk5Lk6D9QpkWtGMBffVtuddSjGduTy4AdnmmauXwtFLK1b6mcdFGBU4vt",
  "key35": "5nwzhyLu3HVvG3VN8sPLC6PSUTiRyzGM1zHUkZQqFR6tMAEJGPYisttoSRGTXw3UAC3iVXUhHJhAumBVPP6G9kKt",
  "key36": "5L7Mc7YN6mK8nJ4k5mD9PYZLVgpChUWzQYUsxE9U8WBaQhV2uTqzFDb4s9mALXKt5dNTb1ueB5Eg1WND488YBw9Z",
  "key37": "4Mk5J6Nmexb3gQ5WiEMisVVQS9u6XfyXcHYtRMwmEAZHYQyaYkCXERU1YxUuCc1AKqMW7t5AnSP1zLmCxjG9UWpv"
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
