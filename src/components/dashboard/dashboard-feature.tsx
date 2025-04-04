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
    "z2TijSxa4HUYpzDW3cPRuH3kMsWuyoqPKnVm8nMFkrbAfZpKjP4De7y2yi2NaHMR9Kdg8g5kMoDhW4N3XvNgmiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qVGNg1G3cquPC4s9wrDzRCLJVeoFcHRKZk3W3CwzWq1LwpEwCwEgHb4b5Ni8qJCamxL4VBBf7RiuwbgJbFY6UDq",
  "key1": "49mGL9CKPmcg44dDuUdxKy7HZgLLZ7C7S1KyvANq5v99YgzzKHSkhQBBpyTTtYA1DRePRhWAMB5SzGwsNi5HZsDZ",
  "key2": "2ETb153o3mFJnHKQA2vPy3Nd5jkkNLuoMKmD39WSP6FuC6vCkTcGDcwe1XSE1YoArtcfyZsGgrjLUPFPRZsJD8oQ",
  "key3": "4cK9J8zoGjvP4KiCU7WQTj8qGfW4draF6sAsWPFsAws39REqDau2Boprd8P1q4VroxoFqqPnVN46UYrFHcxwppX5",
  "key4": "4DBFWKXkfMRyYdkGWkKuiVhuv8CCgWjC7YqDM6ptFbLDmukinNkcfzkK5qfMStEMh3S7AT2wtDRCPjrpaJKYXvJj",
  "key5": "3v5oTuUDrdDBXYkg5NgFazxjtssprapZx3vyhLmnkH8LAERvZfAW7U6gwE5qGCmd7Vdit3bmbq2ZDKZ2ERACaioC",
  "key6": "4zXick8a6yWEJn44vNZwq4UZT8aPEzsT8cfMuY1ysFfLM13BFZ7B1Y7V498DVDu6RDtwnGR4yYapw3QayoDSnXwk",
  "key7": "42goGu9fVctDEc2r2s4DoQ534DxZGZvaVvB7ntYNWpxaQtjPya4rNodTynMAewPyGFRd4acfhc4BvDCAkQgz1y7",
  "key8": "5Moxa6GUK85C88gSRfVeUBaPKsFTgYpVT1QPt1xnxX8CSzbZbyQ2ejWu25uqVFz66VYR8LMpf4RK5zMNTMp5Ai2g",
  "key9": "2WoMxdhCJGtLyfYJ4ENxnrWggMmZmVVSgpwDfMrAXq3nwhtwXEzEP2MydCLAbHCduaPh1aqrPgcuwZaQLZcac4D7",
  "key10": "2Z6GpRs3vgixwM1maUoWWRfLjTCuMG54zXgPV36tkFk5kFBeB3LDG1WUcLM7XLQUCQi2od83guXecUnC7vbH2VM8",
  "key11": "2oFi7eSoWGSQJAWsgLDLfikVqq7ZT1NX6tbWDoGzzW1RtSgx52LpjvbkVhisNrW5rdAamopw4fm7eohLU8mnCpwa",
  "key12": "28dTfJEj4uMKvjJTUXKrM4GoMozt8d2KBRZZKbSRQGk5cZuH9PFFHekJY2HxtZkyXFbkK5cTk7KW4L9tj98yrdE9",
  "key13": "2BzLL24Lx2C81rArv1GCdGmJD7hdGPT7qRZeh3h8Q59zd11DAR9CiU86TCWzBwnQXMcS7HpC4aqsd22Mc5cophdU",
  "key14": "5nng7V3xBJvUUE2JZXst399mTGHLNenAwbh6XSpms3JHaxYc2fwtdHsfn5iMmhwj3Uw7RaQgq5bx6ut4mnvnuV2Y",
  "key15": "45Y2X2SzFZ1ppwi4QxHmD93qHNxX7dZ1WfyqWYaZf5ZGKdiqfY9aRYn55st2hx18qwHxn3hJGeQJEMTzC4C7vaCE",
  "key16": "4Pz5zEUk5GzrrWw93tgfvYYow3oEa4FARPJ1KuD5KPtUA6coXU1TPAdPDk7Zu5LQE65kiFKcZKd2CxM5CeiMRyr3",
  "key17": "3HgQJa38iWJwv2oVYMyJ7QiLzxHzmMiGfnBEMJvvHic47zuWF6pNer4SHKV2uriYVH1sa43smTvCi1PK5gq1moTb",
  "key18": "2ytSDJuWJHBkQjSeEJeao4u5fg6fwMAWM7veFWPdJma4AqR5w3RdbioFM2yx3A6EV33auj71UcfKKF2PwE9K4TcN",
  "key19": "5kfezgjcbBbymt36vYoHExPHqtRbn6KRqWukmfQoFDUuriG1Ba2YSrYs58CWw4fhnvQDw9YyqdTDz7pA2S2mXY3C",
  "key20": "3fExYqTG57MrqX8w7j9AYpdsSH8xDccRhzgrg6beD1GWsJvi2XCEJm6yRBx7X397YykbHFfMfsoTBxJMLTvxGFN1",
  "key21": "qRzj6x8TBuLJGynyqGW2LiZTP8LxCqNfMFPehekvAB3MWWve77n83Sm1PNZAptppTqiWiK8fuJsLpESCDJUSG1b",
  "key22": "2JEhuwVsTENzWkbWXqHh4iQNGXvJsvcHAaRw1KVnzL9gwKnkKuUcmwKB5JCNEccwuhchsRCbsnmG8W44NfXrejuC",
  "key23": "4seP8RBorqW3LkeJZZFE7kxY8fESriZ8Gu689D6J6rEUn6ou6K46mym94cMQFQzqbK6g1KysEHrP9y9huUP4W6hD",
  "key24": "3SLaCn4SPjxpBBoXVnk5342abNsv9rdMz5UtXc6HnohGgYPsmVgSAfJBH9zeWFUSraWzA2VwBF1vwGDLgYHR63QJ",
  "key25": "41acbrfMQrkuiaDQs5FjZWrRwZfJ6ekkUuF3Ss8j4Ma8HWkomdzonQZzVfHJhyw9khZgVrZRhxRJYJo5inQRqAD9",
  "key26": "R5fmg2CpwqVetvx9tgs4u4FiCL4T8CLRS7mSbTAsFuVSjytgjmaeoSaeiMVabKEALGBySvtvpxeFDxtd2wb5Gdk",
  "key27": "5gd45zhn72QQCisVg7EswDK6mMtP6ooh32QHRstTP49radQTAsA3WtWXQwgTCDyULdS6ExYNnNrQF5M4MQD74ixX",
  "key28": "3UXbMqCB5NcMagmwejJePJ9Cneyws9wETNAvsnbRY64vuHEamJR1M8g8H3BLaBBx86EdAVcqeZUCBphHwP96bF2S",
  "key29": "332DT92GTR8M9KS1Bgxu7cVk1N2tMuUZc6RykFZ1Fyy7FQYcgUnPxcnAbCtbk2EijTyNagp4neCHmXTZnYkYCpwn",
  "key30": "4gSFJkRV1WMSzqksDjE3x1sjnRZYykRQ4prqdKu7MBGKxDvCyfAC8psUWNaasrdbBgZXEzsMQeSz6RvvdkCzzkuG",
  "key31": "4BZ967yz96uXg2kKBmUEsvCNsP3uEEcZKyE32bWbPqNU4ZdpEQ5UTTXz6pzGkntcD37ZmBmdKRCoZ5ZpzbwvRyD4",
  "key32": "2ZWGiFFj9Cnmuc3ey7jg92rosfTkN7zhhSMQTskt3QWjQpkdCQe27sXZUsJQHwYw1ChnHbGN2JHms3rBkCRy8yfL",
  "key33": "51MRhdumMVusigZGZ4ALNJRrrRu3TENfacTcnjtM4fFHQAaGhyUxFh97GM1cwobG3UaBo8hASwRGicVHqoMi7hG1",
  "key34": "5icer5tSP7qwTnmsy6dw4jJz1Z3hE8Z9aVMmrmfKNZBnB2M3SrGGuCryzoHXFKVtbKZJvtowPxCVdEP7GvT5svDt",
  "key35": "5aiFnBFWByhfutkadXxKk8KxAXiw19TnbyMPtvAtm8Cqc4LTKQAV9vSnm1wj5eXtYb2zEhDLem3FATz4GS6rqNkm",
  "key36": "pUzGpmmobdMqRyoa8VNaHJqD9MfAJcjhEHr7CDRBL6rW5FxpvoMfKACWFzpQ2BXZEFMrF9gnAeex1RCAdm8zhRG",
  "key37": "RdfcCgm6VF9NQCEdrbW13ySTw3TD9RTkbUp6TaTrnPWNDVWVpiefooboRzaRuUWvABjHMaEtSQGDn6vR7RhrtBa",
  "key38": "5K72CzQZ8xDan48VWRsa2Tw61JSmitr3cfq9JHf7Hm7sowvbw7tGjeDZtLVZZXsKByY12LhdMuZF4TBepBMyeGuw",
  "key39": "4rKr2XtKzUeWqgGRvgRAntcTTTbSkWEeF7ysUjqfdsoHpnbjVyBJLKJDrBgR7edHjk6iTsqeQV7vdiBrxwJArtYy",
  "key40": "3h1NJa6uak4F6VqbTBtobAbBdY2FrghpkLbMCgmF4LMm7YyQJnURPuMqnazig5ifyy1cJPufYzUzpTYVF96ZiRab"
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
