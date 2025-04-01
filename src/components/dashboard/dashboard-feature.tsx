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
    "4gHvkGXbePYi8x3rFiNr9pnYpsW6cNC5X1BerMpmmz2yfkMRMCG6JndMgt1JBZNg6hGbDuTfoYBribFtzUm2Pfey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a4q8FSZWk6BFMEEvKLoYAZCApuJoEkFq3d6oNWDz5og69GfYy8kAV6R9CMK2xohVKkYrAnMcSegpoWX1V3ibN1S",
  "key1": "3eu2U49Ayd35qozkKQWCHiScr4g6d4rieEpPmXypCNVAeTAahZRocTh99aindvJjs3HsvLvJ8h3dJypjYDRoP7gJ",
  "key2": "3MNvBh444MtGb2dqewWLnAgagFedKtzxSbL9AWkxeHidkk2Sd2jQRe2CBxeb11yqh4i7D9p4f1t2NHUo7SpKw3cK",
  "key3": "2WWPXqbDRDjNZWHN4fBi8sPJeCHd4keXqyWwA7gKJ1xxxXyXE7w3WcRogmVS6Wx61Qx5zrePR9niuUrdb9T5MKxv",
  "key4": "5ricfG4Vx1BHFun4pfSQC5Yygakv9PKrTzZuNNmiprg2mGy3WEA6wfr1py73dnpkXuc7TVqkeydo9YvzPpPh8Z2t",
  "key5": "3z4VzHaW9Voq1oo1SiWgcRRhTpbATNJSaKJWD4geSqiUuLJMpyQRchq32EXNTSkK9CD7ukTD3XedsaabAUScax7t",
  "key6": "5puBtTxEangjrnMmEzgatcC4zqVBrYJjnRZHXAQ3ucNq94YTFNBHq5QYVLybnTxu9HkiRH7DDmeZe9Lv8Q9F7FXw",
  "key7": "1Rq8pFe8mqz5GPZrzNrdbR2nZLv6kpNXJui6JqND9T6SvdmBGnyt48DvABEq7BJvBsNuCNjAEpUWm7RyvFdCjVw",
  "key8": "5n6J8aGs5VUztoyr6SjcLmLpm7KNVw4GJciqYu2pmXmwpdbRKE9JfmomHYhASi7zUETM9kS4wVfGJiDY6UabinFp",
  "key9": "WdGEm64JGRvnPGssKTSaQiCUcqDMX1CtGXu9eJnwkQLq8mYgbiaWhjjZBbxFF8grN2KsiDEffeu1VTi3a23XZkm",
  "key10": "5ZiEnGig3suMh4TiMKvpPkP4dU8MvJKnTzJVraEFBgSYZenvAjWJuffinDD3CWVDGoEWjo9eCzJxRiYQ5oMPYyac",
  "key11": "fUxHxvVzm3i6JmARrX3PwTixXKyaSFtPjPh3RML7wPHP3ELRrbHCPcA3LGArw5kBJrpcrvE64hJQFobrUqgjbDw",
  "key12": "253MDiSgAXFRZ27kbH4m2Y2f5iCCbu8eSyBNR17kzpHdf7UqnDyeJz4nu4UQgSfCPfvzwmt1QpsDLSJj8VoJgvGN",
  "key13": "28CyAgJSxFjQSf46F9C6PA2xCDtwCEWy8G334hG6PTVpYnKnC7TjFghV8RQ7Dx6LxKp3AHRUt9ZovhTugTntDy9Y",
  "key14": "4Bi4Gbp21fajaCWctFpqZSgHd2A4gX6FKYBezKnJ7Jg8VbdXCVe6iwh3qUkiNfQEkjZ985C4aTxyT5PD7vxeMMS2",
  "key15": "4MNs1jD37P5RG2MgntACXSfq334D7Pe9gc2AWubTzoJbACAUW12mv6MgUMMq86FMEGLBt9jWTxmMywXdav9Jox7f",
  "key16": "6rcxCoKGNnnamrEUgmnhDeY96jJCS6WC99YKXYsSwxqvwf7ozk95yGrbJ2e6oJztmjM9EL3bHz6WLgWoFBqgDfN",
  "key17": "4EadRPFAnUQqnKXgedyVLbtNW4YvTDyPTNxnnPUcotUSUeA15T95AWvSuJvA5BoKpT74z29jGCyBYLm9H3tTzzwq",
  "key18": "unMzTMN474CPnLEVkuzsV7DhqjCbST8zTSCAX7QygKUGkd8HP4DRomB4WbtMXTEnV6PLkU9D1bFyBgN1asS5oCE",
  "key19": "4Kr8G7HftCeMRKvNi6fTJY2TWNkYfvhtkf1Gj4tYP7TQ3tTgj81oiurUP98amtHQvinGpp1JQFAyYPc6Eyu5CsBo",
  "key20": "3BMLsR9td9jN8XfdhXR41rMMRF4vGfpTQCpFdtcyVSEB19hiYQoKkGVTPtAiiZCtgxvdwg2pih5xLWTgp44j1VDe",
  "key21": "677pYPmyu1GJ3rEaqMuQRko3tB4sLo3Tx3qhXr9BCwcXvMdW4NAMc8JZ5XsxooNk6GHf3HZ3vZrMM6zomuciZcnf",
  "key22": "7aZxLkBFGmydLJkJguGpesgRia6rUwL6y3wJA6BE3eufuaJfvB1517YQY4EG9FXu7fdzm4Avwzxeq5eTSSTiRJz",
  "key23": "2uhzMWHLicoywQ1kpZGuWdJbWduXtSodG9z2fRxtqjBH4aBpJjJZxm2F1mxWGExXqCoPFAdQvgdDTaci4LvstnVd",
  "key24": "fgP7jx63XkngD8NmpEhN8cQq2SDwBnXThCRbqJM1Ycy4mBtgXB3fkBTEjPGd6w9NuPik2xbFDGZ9wpW3oxu8zGT",
  "key25": "oLqmgxh723XpUgTd9hHnrnHBrmVh9jkTRZyyUbGh8Nm8ADwLRVe3A5St3ZS5LxgbmQwRGj5T7AixTnPxLRaVnzX",
  "key26": "4BsUDvUWG33EW3XDj3FE3RvdYRpSP5k7kFJfYTm5TmAZTucWyTg35rj8iFfnQqdbGZYC6kwVvLrJWUY5RSqL2f6U",
  "key27": "58ZprV4QeFGFiJNPESxD4cGKDUftFJaiacB6QbCQxsK3cQv4nTt47JfMT8v1gFhVDVKnBdji3UwazcurADrhLDph",
  "key28": "LN14ZqgRtTxtWFQogYcZFf6RCNymDFr3XXXxb1q36oMRFQ3gsN1MAqsrbDiMG1nFtpPKxCxuYLTbk5YsJAjsgja",
  "key29": "2gLDefNvpgzP2d8sy534eqB126SaBcwyszGoR7uqiSou2c24QtYqCHijXbEhQdzTPovCMtZGHMZAbZowrjL2Akpf",
  "key30": "SUraRLUXNUDwSPkQUPiQXb6KWzp6958Xdogpe1d6fw5x5cPXrcsRZJShtvGASvxs1YWeQa7ue2hjeBWfxc5n5gm",
  "key31": "4PML2wpZqS8LQUhLgghjZ7Gag85RYa6fdmatMmPHtZuAZ76nN9FkAHUjGvzpDpLzv2X6igE2AaCsbBaf5NU9gGyM",
  "key32": "Mni3nGHm5Vx1HGYN9KV62sSRXX5a9Awzs3mRbsjdzXbQTP91HWUjCZdMVsZUb33TsPbDSMca7onwU4A43JJcMgk",
  "key33": "4a4HuuX4GDkF8qaBxLvNP8osyRixmn1s4mNMCyuWCcmtQhrjd2snMJKuj1ZXYBNa9paLd33gkmtuRCtvxZF9mFnX",
  "key34": "2TDpMQZ4S1aNtnUNu4vaBVCYuyPTDMPMnz3YhC5iz1fpiddXkTsUZqQA4M7jadENMJifU5mVtgZrfwdrjKbKT9ja",
  "key35": "2A9tHunC9jcMijrfkpXFW2FqmvLGdBHmYjKVZ8PxK1cLUehiAnuv11o37DPmqbb8eFaxRMwKMNFrh7CkuANRVBwk",
  "key36": "2uJaeBeCriJof3wktoD6LzFPWLLAQTb6Qh6ZomXFm6C79eAYPpY5XcLJrfou5tK6FrxCjvcZgKehVyLLP7mxbBgT",
  "key37": "44ubhwUxZFaTDPufb2wKj4DhMv4CyjB1kGRg8Dc2TNbsBGALtApnR6Gqo9Jx33oSAUrwGaBjwFh8Zwtyf1hpQ5d3",
  "key38": "4ZnWiXMp2YM5WDXpSQp6iB1NGkJ11tcZdDyKZgefdjfZhSPjEyADBGxm81NS63HfW6Z7AMJTJbqQsnqxtauqJYeJ"
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
