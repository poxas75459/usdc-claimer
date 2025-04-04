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
    "31KWSUKTNpbKbh8pkZHoxQspJ2Z68k1YKzQgvxT9YxuFPEHYHNg1pUjcPE1deBLX4GvBqjFuN9rgok8QpuZmWF2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t3DxVqKNApqkntci3iPjSDVDcU1orNs5UUtZpBT3C3dMa19hYYxmNPGsnUagUAAzf1a8mSH9SKWGVvXnHtMypWt",
  "key1": "28RJ5xRaa5xDpogrD3EALb3J1yEFRwjh8dieqfp977yV3LsTgCszsEQT4bTgFAtmuVPqH6sSBK1fWPA5aWaBj5o2",
  "key2": "3dnrDTt6e6svRTJBkRGEPMiZsimK5FDBkU7LcprxXocnc9Mmm1S1zL4WM1VTAoAgZKuDabguUpLktm1y7NjSvbDo",
  "key3": "295xxjKxWv2MhAKdDQaLPPRQJ6SSBcBG5gyANGKLv6bPTYuX1JtXQELtSGM7gkqbUp62oapo3nddGnzPFRKpz1BM",
  "key4": "gzobX6fK6bjGJ66Eb1yfys6bNvEd9qm7HvcdqNsJQja9ogRoXxUhU4W46msgUeLrRztvquceGdmcLAoVg5G1Ruk",
  "key5": "4yVFwx3fzegM6tJFifw2j2dBf6k2jByGirLzd2Ct6VNe3UxHpyL2dCSwLU8VW1w3ZKzyS1QuSAaZXHoRH9cwjrUR",
  "key6": "47g4GnvYw25Q4ABpU9njxdB62HoFkkoifCbjqqhS2nSPLu5HuUXbGhUkN2WbAgaHuPnPZNRvCTw2pGoBZyvo9xKJ",
  "key7": "3ciBhh3A7UQe6AKTgdwNZXSGSkhxTyCAsjpyUUgDrUVQWNie1wSJRSow1WsmDcumkBkmGLoLBj1Mmqd4BxFkXVRb",
  "key8": "2ntQYgtgRyRehgRBV5EWkhsLrc4dWrCEtaa5Cu7ubPwKcL6xQS7AdyaYeJfQp9bRu6WYrb6jwPhNZbpUaK7jTDHq",
  "key9": "45cT7ty32W5shvo3McJkc2XBSrzvCCqtEoqj3yR6bFWHBtGhLBZfJayXiwAwsV1WQhyu4daJXJet1XMEpbQ2xMpk",
  "key10": "dbTK2sFW3w38dbyNCvprH6ZDwCf8gRUg3S6CGb9sTnwyG85gvzPNVBeqgm7rmGwn2GtCkqpqtNwWKptDSowUQmx",
  "key11": "2gbnJbXrQAZnRXUx7qrQt6BQ7YSfWZDHvnPSmEfY2e4AwmgYYf4bb5AwQTYoeWoyJfu3gvPrwbyFQnAVmSEZK5qk",
  "key12": "4B37ogX69dszZjLkmezvxrQC6RinbYfLBuYr7mVtBZV4Tmm8mGZ1gW1eqd2CQg7bfoeTVMpJUJN46fZf7nYMGt7c",
  "key13": "3ppzHQdpP8YqRcxp9CRUhjx7BaxpuQmrpoh4vFXsz5PSeDPA5UaXDxWEME7s4WCPn9tJVq4RucRJoffovaNjTPez",
  "key14": "35gdWsm2hvg2qiDJrQCS3176DrVvuLoJRFJ5zj797Zxqz5A42QiYbK4XR26ezcnyyUd77UsJHc2n9ZKHrQTQ2QSX",
  "key15": "3zdXKy5DvtzZxC3j2bNy46JvqhbfNuW1msLMkGhqm4RC8c1Q5Gci6bqSbHYm9M69FdyNWuKzYeuXcYfLac82jAMG",
  "key16": "67GatGTBG9WmAHgNr6TP9L3Htx2TpUiNcZDPFzEKchsh1Y2q7eqfEHecf8swkpg2u78VknYBtZLh6Zuup1xzfepm",
  "key17": "47UEw4FwTLikSa9Spgw51LGEoJZz3RoLS3pAk68bn9whEHZ55nqKJFe9ycTF76Lti663ePwf6jy3cLMr8ayZudLc",
  "key18": "XCDFjCyVBeAysfAfTJZbefr1PNgBjBi1Wzy1fsLcGGT3PcD2oD2zGuxEQwS7APSsUKYvpZNfThQeNAxQ1FFSay1",
  "key19": "3rMbdiVykcHDRbi49hW9QPtmqR2LaKYiFrfzvxKK4zCyHFjNNCYoo3xZy8p7JvjyF9At6K33VTTCBKZBPJ1JgmfL",
  "key20": "4KN2Hi1ocSNG88g4EWA7v5CSAeem3tjyRS7FBAgL9c11G11RNBmnFVcP7d2ErRk7gF1FCNvJwV9J8QGkD7BAAsGB",
  "key21": "2zXJLu7qwRTzcF6RnjofJpAToQLC6zTqfvZXzPT8FfCXuEMcg3SB16XNvxFTPvy9PUYpvUt8vvbCEkxu98bTkZj3",
  "key22": "4gnhzVzbCArecFsx5ormUEMyRCm4G65bkULeMZkbDppUgGaiuoZCqv2nfSjPZTJAWD6f7AeTHRPbjfup7LkBdECm",
  "key23": "3iYVMzy21s1HUrDuLRVbiFg1iJ75vo7QfcfjS3aBdYA1eyELy3k2rDeJ8555qq6gq6R9VgYiMidW1CPedmRZUVNp",
  "key24": "5y8eCcCSFPzJyvPEMNLPMH6fENVYZP7ttkjSvkvGYtQaepeZtvPcg4SaGLsnrpr69FWXnSv4TsnBtzvirZotmSam",
  "key25": "524aWXvy3QYb3dpwnpusS8PK2RCFfFcXj3iNbUVEHBo6wxEWGtNt77JDZGF99sUiu1CLbvsgQcM6bQSRQ6z7qbYw",
  "key26": "51im782FVXpejWfhkuGLGdHzo5aJfVsBqwiFisFrQYWifgeE3kGBC4uhweHEz5kWxHCYV7TgCJUR46DuGV5nbxJC"
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
