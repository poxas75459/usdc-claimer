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
    "3pnkmnDTECGashcyrgoD6N9zpW1n7GDBhFeLb69YpdNBHvsHayxfnC77g5hhXmZtoTLH28EBxpnNiHUqkJTt6MUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HS8c1Fe9FxcCzhjoVYrZq1wJNnQjGu3BCoRDjgHKBk4bTu9hmGqb5udjEjXBN5gTgyBzyUp7wtymZNeFSur78Jm",
  "key1": "51KajePryuBLyLWMGXGzMSz6ewV9wrJPoAo531yntLmLDdp74WQF3CECt6YeQvckzDgYFz8eRD1U6LEYiG6Kr4YQ",
  "key2": "f4D6H5rKq1tzY8C4EnnfJ1pjdGmuvrMJn74RL4LcRsDQRoEnM5LciijS28kjSfmW19kJRUADGd5XCFu82FoePU5",
  "key3": "5x2F3EymvGxDpda8AWF3YsMQB4EprMdm3sULP5sb7zKonzcKdepbEUCNKoVyDkHEPDrSFJDDjyXwTjF9TbfcvJAv",
  "key4": "3WYNbdDqiw9vaK96xGjVrBnZWYUGVZcCSoBGmT8WSkASzMbQM5pj3dgoteg66Q1q5t8PRVyup72QbH56bm6eXiod",
  "key5": "5vPofJrjrpb1nwEJdN7GmF9AhEjF1QvyjR73U2rYbRpeCqDq6BVv5fUyqVQdjwupu9mLCXbnoiD9aKXHxoPaL97a",
  "key6": "2X4UHzoTACmdsa4FJ7wSnDZF2Y7pnpfn2xBkH2J6dkuMRPZ2F1gQB4JvB2NvYxgUisrpaBwuPuDUeuqNVxYAEAVB",
  "key7": "4eRtJ7YT8WMoo5CGBPjFLk6morDFsffrmnHT5J3X9K8NBTAHznTazYZCw3KeKbYnM3amHnwigM3rM1HjaLZnkUvC",
  "key8": "5whLaB2R2SdGBGjwWHsNbfidLntUfi6QzeuTF3Jf3qdQySVM9Li9GHL4EemA9HMXDqVmY6xnkN3dTD7SE2hZLQTb",
  "key9": "3L3qb9jfAv7tkKR6WWTb7mXQGQa4cYTF6LJtuC8JsFT44vuzQuTZzx4nmNo3LUsRSRyvn53m75examR8MPrbaEyk",
  "key10": "rogKyD7yStuMBESTKcZDF2k1cAEmuodEQtDs7PNL9RHCzNmed3AEWVvoimYmhJQLbQDZEccawwP1R1ZHwyprr9F",
  "key11": "2jgLmqqwmTK2SkM29xG3sapwnfmWtZpkDe4AYckeuJKtTtYzh8i94zVawLUFPgyasDYvxY9Rns6SpEp2ZZLokczt",
  "key12": "5NZoVGGML4Tdx92z1s4pHdCh5sRfyJzKas4BjTyGVJanAq1i7QMQdBxo4Ruf57iXk41JnqNG8EKzmS7npVFSLY6d",
  "key13": "3o2kWqd4DGhz8E2cLPDqW5PCiX3rfHmQmLPWMrVCWc9PWw14e2arngnTuosZceoTkHfrPsvRkZb2LxThmVftvFSE",
  "key14": "2bu9iGop9xVAEAPB3ttM4daSoTGgm2vLWqvaeF1kdkoigzhag26FMLynKd9sqiVhfEczomdTTfzVkEh8NTd36L7D",
  "key15": "2L7wtgcZSbDU1iPhsAek7cjQA15WHncEo48gokpB5TUUonztrJaSzM8c1CumqPDGG7Zr5piJTUbgh4xe3wd7FyCk",
  "key16": "4WfLtiqWZfYyq8sQvJ9ikyNPLL4CQAd7e5NVxgC22KaEGUshP8cAr8PESV6b7F36Gih8xRFBKz3jw8caU3ym4eQJ",
  "key17": "3aedxLS1pbwXPCJNRQZatMqZwSRHm3UcqKnp6s7gyCwNEu3YomzipL6VyNxzHm5ebX6tZBPgRYA9uEwYM8969sxx",
  "key18": "5kFDEh6QJWtRhx1pFJb3dD7VcXCgLA3UhgdFQwZV5uF48V8m749an8td3kBBRY3Hye8iEk92MYH2gha6Ak4hiLiR",
  "key19": "32SrsnwR9nTW5oxDkjFBfRiQaQrhNcZJL7qRnz6GVrSSr99oEhe4kbkEgjsAhFtGe69VWFdAEdH2JLt6B7Nq3Pu7",
  "key20": "UiFVPnrAFwNU7GwzAD6qrUAHahkEgshTfsg3UazNHgVQwX7mLx3bt3DV9pa833oqXBtri5hokygk8f5zPXYK8Qb",
  "key21": "2ZP1m3wLGqFPb9D4oure4d2AKNcrzG2AFwZZqGU12eZDYgxYXJyrp1A8huu63rsxEisnyZzxA4zEK58MGsUtu97W",
  "key22": "2VYscBQz9RrHvuKA2Uw9wpzqvpKSkGf86RzTGQZ74CfibSH9NQcbV8WBgWLVbPadXcH4C79opSWZZ2dTUZgXcNVX",
  "key23": "5iftqW2uvhHuENsRUMrro3eSg4tAZas6z4aoJrjnUUynsjfdHnw1nBnU591ze88ShCmREJVUQ9gSs1TfNbzeBc9w",
  "key24": "3XtqGFVTko3qC4GzF5p8dT5N8cidb8U6ouV6MQk5N8FfE9WpZ9wHJNskrkLzwSVwxQYC89AWNZa7rvSzk52EMhLp",
  "key25": "5hiBS8597tniVKz8qapzdQBxcYCV313fEfFTRJTYb2fvhFcA53wKL7tYu1vwhgJp7tXvvjjP58PjWceETNcTiW4e",
  "key26": "f4uW6Ly2XHs1hG3GqJTMGaVATJYHVJMV8FM5HMwQAepCA8cfGvbemy7UGiSc32RQYC47ugv1PCTA4em6yPCqqb4",
  "key27": "QAA3Lx9F1NT8uJrfGiR5npom1ndpjYgoJYpduJbHC88DyMSN7rreo9ntaDm5uCpTMbeFy4NHCVW9JPycPobazRC",
  "key28": "2PefRkzs5fcmpLCTwU82huGSuUe9FBvTyiS1uBHhin3eudwcALEUz3mRunMtg8MQQ8NqqTP4ing1Pio9ZADgsDVs",
  "key29": "45NywgK6R5YaDWFTZ3aqv8Znjq5S3QTQS78mqnJiCf8P7A5L2RBD6Ey8Y1ZemWcccEKeDeiVAaUtcrAi1GmmU8Tt",
  "key30": "3oRjWpx18VhYGFXmBSTzzNptqxfdLBJxjUePmLHXkZtX3Evr4devEXQMxSXX4sQvkc5cm5au7MKmqGqAmvUG8Tp5",
  "key31": "yGNK32b4b2MvYp2CXih62ff1dBtRVbUBLGs32tbyiZSY4sttajFedNUQpBhASGixH8U1U6e6yySTEv4chuKxyxW",
  "key32": "3hgStbvtaYGZcdGeRntuJRwsRDrQ73UC83vX7TStEghtPv9VLA2sArx1U4c8jB8gVU6UzPTxRpT8upMDACJ3YaSH",
  "key33": "PEBKBSGehdjbi6AD8ZjTm2N8K17BiwwmHWeYpPM5g1aWreL8wiTRNKhu9Qvu8ktJfUafaiaf5gkPZP7xGXLUFVH",
  "key34": "Z5yfp7nEsXzAhwWC6PQtreY5qWQUngNHJzMDadMjRgMixJbzBXzJ8AF2Xvqj2vTCt453aoenLG3QTxXqqjdwtmx",
  "key35": "FJhYdKNSnLqrGQZhtCESvr8yjR8E64q9qcfvUAHeN365ygaCRKDE7KEHJbvgvSVMzhXRX7N61TLBBgoL1CMATGJ",
  "key36": "2d8R9vmYNtZEEiwPiHNWLGysZMApU6uTxhUtyPgdww1U8L4ip68E9986ve9tL5iHxDEFDFMnjZhgudocbMC4FH2V",
  "key37": "dY2SkB5ipx2Pnr58D7V2q77jTeyR7DfDUXQmfcKNAAV8gucNtnoDEnYHyw9MfRxWSGPDY2m1cpmv742MzTNHgoB",
  "key38": "4SPcqW83uyRFUv2M7QWf9xSmwFxA7y7J3fTHH4qhcg66nrB15xPZRGnobE463X8ww2Fsk9UxY92ago8n95joddzX",
  "key39": "3W9XvhhWS1ttQMuordvRLM9t7WYLDKXxQ4BCrhaAxfEYVbnwiDxteJPVHETZzZq3PuPvC1Zc1wxrWsCPk5B9L4Y4",
  "key40": "5777phpzHioN5iU7sJNDR2deYS62j1RfQNCWD1M7ecAiwueN5pfdzfxGfHdksePmzkDPgKh3x2UHyvmZ36B2PM5m",
  "key41": "4QBMYTzEwjbZYzMECU8w79imVQZ9Ec7cfgBQehgLj8wrxfuskvLosrPbV55bE8ARXUfHhPhvvpkSArJN2vfqZgmv",
  "key42": "383nyS9nfUwXWKSubjpbEwZTKw95GU3jqzjifQjySskgAiAWPK5EuZtUmLUeGYi26yo1zDbzhSRXBh9ZgkKwE3Gd"
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
