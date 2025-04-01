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
    "3PFk8fY4V6CeEHAjH3T8cRGmHfv6theaGZ5vZR8dpaaMDgMMQA2SqfdSV8ei8EY6EbKdgdeVHKH3kcdEbVpHK6gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63hFSBEr7Sq7fnsCP3pAuJxffmYi4B5BE8hbHS4nbgegAgiPdiX7Nc6m1Arm1jJoN5PZGBCJCC5AKkkRTbHRMWnw",
  "key1": "3GL3PaPdLvpfh4FN87UC2vBvw4meuQAQrHtgSfpHLGkBDYEwZpQxg1docNe28EVKCiK4CPCyLP8wsmaP5QQh6k5j",
  "key2": "5SpcK1qy1VgK6Bnd97T3511Hxj58Ce6XGKVNK4P2GsT75qX4b6CQPf7RS5EVrfoUhbEtbhCsX1oDHp7T7ZVFi3Kt",
  "key3": "5KKhGDeedTfxtkTmEM7DHgKcJu6oobXrj8mAS3E7ikckbdH3osyLeQHCLB7c3W7721Ccnfq4jjvGjA3252bz6CrZ",
  "key4": "3Sr48TGdcD6uZgeQdXoHGmdFYYCYmpuPWzbWgwS4CdV621A1w4LTuAtmu2gnqv8SjQVcfcRZ2EhFHhVtgJViQ5Qs",
  "key5": "2po46UyjFTf6Ai3A9cTUCDs1QsxEAhu85bwKLjPf42rYUxBTKRXLbEXXG3hvKtGzCZCnmAnrQF4cfWL2KxZo4Tbz",
  "key6": "2MCvjBp6PvbmFX6vuVku7tAB6WefUQdNMgP9siSvbKKazLWbdypSm5pKpKnx7UR6betpfAqiJAtdWNX5qQCK2oEJ",
  "key7": "2rJE8MKBQfp84QxAV3aw485w6n39vc97spsLvggFAx4JRWuEZicSwa1D3Eck5Nyfhoaf1965R21JJYkBrVWxcj3p",
  "key8": "4gpFfKPVgnSWJsqLqGjLyhi8hob3NHDUqGMcYX2Wk61FSmBMnGSWnH9QXFDFr4u2MyGMRT1GXyUrhEsX1dFnvMQy",
  "key9": "3SYtfY53cCcN8EwYLhtkM8WSxQtxrq2byKpwaznnWXYSsc6vVQbFHMufRyZYzx1thDp9aJKnS7cyA9pLoqr7diBN",
  "key10": "CaFpy9RFCpTwqFi7Cbeb3Wfq4Su1u621g8iDGCo6NZqcU2hk1Xk7wYwRn9oghfUgWXshdeNdrgijWz2V4LBoq1E",
  "key11": "26VRJTNL9tVPzjidEu4nsqM7MmtxR4CqKtr648yyFunfBo7Nfgi9ERKxBuj17B99Eupy4hzaXoyRwts1p3G5HTcw",
  "key12": "5WjP4tG1PRzF8MKqYvzhoLk8G3DgDTkyGoKmzzNdR6t1xgaZ913DuhRBd2uwhcvP9eNtCEougvyLTNZFEuH9xsUy",
  "key13": "5UzL9fvtov7ZTnqdbsfUFNd3ocMw7KMrUkW7e8SG7b14SKZnmoLp12zgr55bsi6suoXLLQBm3ikvXPYtL4d4kQJw",
  "key14": "4HJZTD3iaV85YwWG25GmmdvdVb7ERSG9JCpV5G1NP678qDnj8ANXYCVyRC4h2fz14LCEQxYx4VaMtgSt9RtZGm4x",
  "key15": "3oR9gkHEDQTB3WtSZaoYTPGCwuyrdVMhTKv1Dr3DF7r6FNd4mtYyKi9fJn8oJ4VJhNa6iyFB927yQGNvpMpqLheW",
  "key16": "3cp4KLwTf4YLyqF1EPeUE9XsGF3Nn6M9BiFmmyUDWYVWVfExEX4TGcwd7MHwNrpD7MqqnoFGJ2qKKTdijbTp6Qkc",
  "key17": "4LPLNHUjjypnSaYbDq3RJFVrNjSYP2Nn18mv9we9k7u7CVDMiJaU1jD885FmZWSotoL1AoshNsL6XJZQgoTAhXsA",
  "key18": "2UZRkJHg4ysSFrUQp3FU2aKUCcp6fKXVQoeBuahU9XtYqRWRA45udQmbUyU1AEy7yKbeaRE8wuHhCS3uJXkNv9Uy",
  "key19": "3TG1tSaVhtrJUNJ8PReHyJFTgpsHh3gGhgr7j177nRCQwFkcBgwdXv9h8fCmi4tGavnkvP1vNWttjKz5VMujwUvs",
  "key20": "5wZP4otNRq7fho7wDWw31x2ybVjSXXCFvF3VtiGtEWSyToyESwENLj5b2Tm7UP1L2Xoj91yyeqhvT1RUrRei5sTK",
  "key21": "4fDCccNLNYuQYLn1bxxX9i1bT26my6WpPD5oNcXb6ecgDtt8GRvFJoup4xVhzZeK7JDzcxq3ReZRDf2Q92ViwNmH",
  "key22": "67grL5md8aBpbE4z4mq9to6pHF62p9XgFj6CnSMgXY4ZpPc2DXiN1mUfqfEoBmHoo3ah6phEK7kZniY3eUxpSWe2",
  "key23": "4TXzqtAwsUy3ijbcBr2SESHMEexfrqSSWgAbstgjhgDYX677cgCqpmKgwk7H7bgw5H3ZWHnmSkiNHb1GofozYTEi",
  "key24": "3SuRG2rGnHtGxEvQNRoNx35KxDYdujUe13dxRsnKSutB9c7F4xaHcScJCpm2c37YiutTovCjrwa2mnNYJaM45Dfx",
  "key25": "26MLpPQV55MP7jqaU1MpwyBAWDL4qQxVq9dAts8hMwmPuavdMH62ySgXNQdak8xsgB9Ewcur4X12tS8KH31iQxBS",
  "key26": "51sMiquWdd3WbMBHh6YSqgyMRv89BQccn9Qc29Pyc4PUJofag5Uu3aAmAfaprLqthCtHaivQcQwqQM34agZpMBSV",
  "key27": "2JHGQCJoPbXggyVarPeH88xn9iKZZKzKkJgu6rj74LMeW6VHkczmdTN1HqkwVoEiGQzNmGTtaan2M1B5WUHaVvVL"
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
