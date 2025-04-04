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
    "nPUPWh5xrJoVHwJSNoF6TPvwExhePYS1TsPNfywi2Rh5h6JWWpFJrhH3AyKDJP8RENNa9ovSiSAKZvXutWowSYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TeSTt59YLdeVYp7dPNuKAsK8xdzP8oi4wxqCRGvSnmqHdt3VYZ6t5V9KBftiMdGq1Qzw5CsMeAZNN9kFo3H4AW3",
  "key1": "42vJ18wBSXYL45RY8HGt25tsoL4Mp5ByZB9beUzB5Yy47Rm5LuebKiNddqk2ouA6gCTqjbVfGthFFjzoFA7C1h7c",
  "key2": "4agR75c1vFEBARa6oX5HKw8RMUSx7PJsB4tLad6nJKJNAsumvzADhpFioFVHeTCD4RNqD1LqTYH4TUe8yXNNbF6k",
  "key3": "4SgRANiKbpxbd59ACdQ6oduSBFYrZungmEDYik9nomT1P1PstEPSqWx8xRYuYyc57u5n7pmFsqJ1HbpNAkoi7EFe",
  "key4": "52D1sX4WXn7hbhUZMULtFmrMyhU4k9niAMPamUGEXENWcS4XSPW2iqg3ovq9oQtjasK2fR69BjsRQLjF4DPNC7fd",
  "key5": "tDjV8yhLrPMgSBzbgoMm3d1ZRm16JFoHLkQZRX3eNcVvQtCCGmSahj25J5nBkxm6v8pwix12P4kKzY27HU4Ny61",
  "key6": "3fMKCkJoYWFCd6x2t8jpwvakxxXnqyBcgjYAmwcP6D2rmHirfi3oy148hDp9zXk1FUvtezQJJyvW7aRniUzBZ7Dx",
  "key7": "3LquShShgaRfA5y31CYJS93eqE6exdea1Z4C8FzqPsDE9BR2NVP3UmEMLYLeHQpzaaxUxGTTSHe5VstH7W9K3zYc",
  "key8": "3CiFxq6v7j9r2bwyobW2vTr7rL9PCWVCd3UBQCAUe3XFk69YVq4Ze4nNqQTNtSXzvWCUQMe24zWwXvJT4D6xfsZq",
  "key9": "4xUk6xkRQPawvEXw4vQbWiXZX9w43WGVxvBuGz5xNutSopFo4rTt6ELreQME1hm58KsfiMt9F7ZjBDeGrX1k4rLd",
  "key10": "4JgNSoMujLzGkBkdYqpSbFqGJJNFbA6CknD6qiX2vtaLs17dkyyZSwvXYgffaKBpgUSuzCR8qXXJVdKQs1mrPhxR",
  "key11": "zWadcetz15GEbzZryLoMQxwtNNxZoC71fqo9Cowr1o98qXEDKW7sZ7assQtkJ9U795LK5n47bncRDdtTWmfa6Xr",
  "key12": "fgXsUfaW3m5TnMxQkEfsrADpCXcbvfP188v1jiknB7HrsWxBwZ71CN4ndhGVCV23krhebm8nJa4pmyaWLtkuJ4m",
  "key13": "2gDn4yD6n8mmE8nJqjLVGTjTpfH7xEQuMzG9VSm11pG7AgUZL686Cb7ba2uTk2WBE5gEuFqzYrrmcXJqsNb2Pcc8",
  "key14": "4G4LaLFud9oNdNNCADTKSA25xNJDgxkuXgKPQCwDtnjeWL7jhFeNCHhF3YQJzJhoRpqRV5RH1dQ3BvY2EyXgGxd3",
  "key15": "jS3j8LXN9xgoJyDg1wWu2HH7sP3kYPNgB517XNG8cQ4ueRoqb7EyPDDhijRemrQbgE1Wh5dXMQqKd8cXMgCgXuS",
  "key16": "3BEDTutEwmcqjRH9bC6BgZmAF1P8ZNUHgLacXWyDAGFTftjQEG6nP4Wn1LGtHLohKKD2S9oWVmMorfLDoXuomUd1",
  "key17": "2P7wvdTyFNxwhqsVsu2MtR2UULcsfcC7a6amqvuBTTtLjbzUynzthsKh6qTxfAfcWpNFgYumpzVAa6uAudbmd1Th",
  "key18": "2CfJYqXfYy65vXndRux15bMgmUq118cWTvQWJNktATYdH6uXFfjukNUr6WFVuYcxEhv7ecNbfr9yUtnFkMuLrsXZ",
  "key19": "4V2me713vATiPjJEt5TrHP96zjDhwuEP12bjw8J2X9X7EeK6XRvmhygzXvUxYJMCGCKHynLryR5CwgX1uPKo7AnZ",
  "key20": "56Yddo8nhstB5TuifW6cFJmDYwXwT4s88UgUm2xE1pUgpWJQ1NbTtHamxXMvryfBLUz8YySQ4NKyRpdvyq3yq9XM",
  "key21": "RND3a8CXJrbXMgvLVrgx4PjvnMAt2VEpBokEedNDTuXrENQceHezEEK6RyHdQe9Wow9mXjsP6xpup7mJnuAMFSX",
  "key22": "2Lakh76HdaeAmuHhU2sYJ6NxdaXmvwNYXtLSyiMTgBwSYL2XWQXD9qhVxWsnBViECS833CqdskfLE3eP4TxVV1MP",
  "key23": "UZbnuLeLQXo9D2tAhXsoVXTL9hzfvcjNyEFKByRkomJ2ipunn91EjCt4pTVt81KsoD91HRQiFg7xFzj1bMJHRaD",
  "key24": "3xpX5LxJMfEU3HdTTfzgSYggKQY7hUSk3JbjnSEcRxcW9NFsjfYAwHr5U17h9Zuh9D2t2SB8K4HZK5EPBUzkigR3",
  "key25": "3nMLy8VHLP66iq9ZJG3nnh8PneFoXqkGWgEc3nAiv7qBMKz2M9PKhLS2hKKUFJeFbumvwWi8JpWWT8DgG1N9u2iR",
  "key26": "hze63bJbcPCVnoRvUzAterHTJRf5eMo5ZVKEDdAU6scVwJpYK9G29ooAWjUh1ZQJ4tgKsbkXezu5mJ9QL2H4CC3",
  "key27": "5kbckEjvSVRByPsXuxKM93AvGxaNyPQPBnm3fAhi93UgR4Re2QS3WFuh4ENjCSHhVXrr8BDgd4kqxxw3skhMgr5P",
  "key28": "5BTagT7xADZ2fue6Y9XRDNLxQMG9HmupPveSSZy7uzbUgJ9TYXRXQVZanrb33ypmSEzqUCUtJJxngHsZN1r38ejq",
  "key29": "5D95swvsgPzedEG6NEB7bR2GwCW4gGMpLwjFkiys1N8jYUKhTjycZTaDudBfAv8Tq83t2i4p2HuWhbVTXj5eAZTn"
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
