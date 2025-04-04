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
    "47JXMeLKYRM5czxonfNJFjG8MXsHoMd7jR7chVkZ1HpfRNd5CDgzM2g8cfnMW989TreQ6V246zq9PeNSwav66d8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fJ4Zf4D8qRSufmfL1PAZFLxAZWvZEzB3xaAyk4ZsGuf2uAdHUZkxZHseJ33msECmMxeXb4va8WC9EHBUKXMYfUL",
  "key1": "3TpJgrgNVHASbDWsynRokpcZr1DfLkLCGRpU6QFg1wMAs5WhLg9acB9oVpjgqGNTASnFPEkiFYPWB4Nbc54niS2",
  "key2": "3CqL4jjQZbsDpd5tAjjzsDBF7QmYvZLACJExTxFzaPuEkRPzdZmi3nFLkHNjZEk5xh6KrMk7Sw75NeZFgPfmzpL5",
  "key3": "2B9kGEgjMikB95VrGfo1W6aLymLp2xaBFCmCFEEc753kV1csELbMdf1SAhgeanBiXcTsVHb5SjPSiCLve8TpwNoA",
  "key4": "41kPtAScxnzdSfqQxfUA5LQeXAAMGSCDf1xVV2fAMGDFnD56Z1n5AmQLEkT6e53vGEFNXCPS274941t6TXjuGpub",
  "key5": "66J5iPQMtKL2L2BqUwGQTJBU7WtsecX6XSBrCYkWTbSchzyKrXofb5qQqYh9SEkf7WDNBpLkAAi3H8uq9avgA5kF",
  "key6": "LbuYsK1pup2557ZevCHwBLMB2SnpJXfGXHVLy2bEKq7maP68Yu5M6E9vBg4SNMdNcN9GN6UsiFkZS4gVdkqXG7i",
  "key7": "5NRtK4RGJzDZDDfSxPZWCsWJw3gUHYCBRiPHjTWVWqB9BYxEr8XbZgfwhst6JRXzxApepCvvJ4H5qBnsfMYzxvGU",
  "key8": "3rq5Y6GSd1VKvf8VNQ7qPMm27RExNJ7RayprafUK3w67esLvtZqaJBaQHdboNruxwskPkrTHgsoYSiSm5PuWBPzc",
  "key9": "2HECrcHzTj8E74R9zuEpDbaehaQGF2Y9S9UU8WRjcaW9jJsAYFwqA9kYQNiv6KskBtme88Mu3qLQPVsyn9LM6xhE",
  "key10": "3LNxSFjtHa1dru9CngxEMvDmFL8Y45GD24hKawyxbjpCudEVLX9CDeJPP6FSfqr613e2347mcKZ9AC6HpGSMwteE",
  "key11": "4cdTyDYXDarjM1mxDRCUoDboFKJ3PwgnCCcB3zFaHN9FdKvNx4HnZFyLNLB2Qo2ih8YGPkunXsnBTCpr8mrbABWR",
  "key12": "2K1mKsihGU5eSghjGhePzYYsHq5c7RhJc8gWexrX4jKxDZimkmiXdWJ5fEQuSBnPfge18uqEjkqh4aECD3Np91iq",
  "key13": "3sWEWHo9FUp242sQuFjgMmKBu4xud685dN2hAQCDXrRFKphEyLqSWMwZWA2Zk9sFCNS9Krnd8XkKUwi3iar3VsQ7",
  "key14": "SJkGMdtHNFX5Vtr7xfv7Fjoo5mYv1PkmJnvoqgvqXom5phmvYeAmnMgzHkuQx31yDHqyWfqSpVXZWHcSMfbv9uU",
  "key15": "3DY2rcDJSgbx13fGqB31kUQdNWBdRmBo9i3bMnSWGsWbMMieugsGuFGQfhNCwZCgeBZUwixxc6Q69JbpJ8o8CyPk",
  "key16": "32xV5BFgo5dNE3UkYC3JzAyUUM9yNrUL6XjTPCB1RMiBw9qvU48P2YwCgJfHM7wSRZhfsu8Jk97mADntwjXQc93r",
  "key17": "38Z3j3Krb38x1Ypy9TPZmLxiX4tqqmwbREMNrrUifqrQBF921zoHbDoBDKj5rH9dz5tVoaKDx6viMwc7dwUUvtoP",
  "key18": "29EGHx2gLSj51oyTfyLmQUaqFfBtDE9DheJ2HT48h8sAAR4qL2WhDYmKfkBqES9AnpQpkzzogAVotnYZvvsyJ2fd",
  "key19": "4W1NMEVak1Wh71o2n7xoqGM8zohMiuZNhSw1j2XiqAsJoJzc7HrYuyesiGFw6vNnVU1pFeHeQwFFZseQ4Qz8ZdRB",
  "key20": "v8TkYxGweaeqiMdYaZLMs8GGmuB7h4vsUWEr3g12kfn2evGPiNNHZNRpJvC84LHy3UpQ18G3GWwG4C9mbe622tK",
  "key21": "4GhppJK1pAfTXVeTMY8EtmsUp3ahTKEnxCoPJNV39bs1ZquF85hEr7AMJdLqmUpAAMNGFQHJNwEYDE5TV3DEcTJk",
  "key22": "4uSeBHprZeYuTo2eiDLeNyzVPiwuxkcoPK4gottEDUS7VHP8H1biznDJULRGwv97MHYUdfCinHEu7c7dEdcnt3qB",
  "key23": "3ajpN9drZjPjRhdVzPo7HVsYJ1rgauxML3thPBQgShnWmS9mDrArz7FkEJ4jrWkqH7d8Lwo5b4FWKc7ntxYuJMD3",
  "key24": "iK7VqnTHkmFvmKdVBSBT5WboMsnooB2CiMXTpmmrxceobsmGrq7juC9LhAJi3qT6iyEobcUYd9JRGKHsu9F4Quq",
  "key25": "vcJk2JFFCG2ucAvMiAQvN7fspmtjFvtVYHGcbEwEWXXZjcXqMeRnuWxjfKDmGp9AzcU3RYGQbs1jgkUkkA2pcrC",
  "key26": "5ijnWWM3xjKWEzpPB2AZHLy6EGfk85S6hjBuq1e6QVqr2dfzFjWqvG3uzXXGZhYDA2y5EUGGJ4KCULEJ2QRopVJB",
  "key27": "4upRwM5pBUUXqsM3xZseSSjXDwdbd1voHMjtJe1jdxdWSoPZajJd5HPfNqRRyKTf3Tc1gG76wtbSLNp6GDq8D4UL",
  "key28": "3FTiVGfyXfmEZ69bLSgyKM1xrdV6i5R6bV2qLsJvm8zVkLEmffq7rmwWokELvD4gft7XnNscQz65i5fTxBXPj8iZ",
  "key29": "2CSHCoKL2P3iUsx57uEqo1rCpoXFrpe34FNcW1KfZVy7rreMCxmQMsZ45dUMPGt12f9sH3qnXG9GLzM8fEQa7agW",
  "key30": "3TwBQZdwkUmWHZw1FmAB8qE6RJnijLBqRykUw6HQuBKwKvjxRMpkpM4ZqRNQHwxNxFhWM3brjxi33whiuQhwfe6x",
  "key31": "537RaJJzVY2tpE5TdB3uia7qVEJyCgc7RZ23DBtVo1JjveX7wfp24XW4aiFJKuEAX92LtmtPsg1FTmgtBuBTC9vM"
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
