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
    "4ZZ29P4s2y1DYzYr9zP1BKv9SUXMXBrquWU5NB87KPicdVYu2v2ZMzjtm95HoHBiqtvFFvAHHYDYwBF4YAgUzfpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uNEqZMivXrK9GLGj1F61UAEdhq48SG9RRV4ue1VmPRLzwjdx1shsffkg9kBteAJD5JYhn4uKToiBhR53DcRx372",
  "key1": "5aMnDivCv5A6pjSQjRWUNWBKuJyeDZCny29u4UiAsn6RU3nNJ1jdtuZfMAPuTArJDrrjw7x6st8QEbp1TJ7DuwAN",
  "key2": "4CnB5yxJPanLkxa8XAi7RqpS5g4qwyjU5DJrDH4RPERuGtG3nAHdkuDETKiatzCyc6dTRseB3YppMH1opGJ6A1Ef",
  "key3": "d6HQNWnzUhTrL2ZfkZazvidJJS3mQLxUtq9GQ1nRohoxfEGHjf3kaZUYyA5VscEdaCyn8TbDmgbDYsZELPTDZnW",
  "key4": "3C4DtaYUWYpEiK4Xssupj3asqxtFZLnjUrSxujp5nAdnuuz4TTY6VABhQAMAkWpyvLRvPSq9Mpzci3cMbiq2CjSa",
  "key5": "AURxQ23x6ZPMkF2yfHYKXMyF4EWMaGe9vk4Yd4m9mi4vU1ku85ogRVEtCCxzk7LmKXP1xuR7CexnwKeMiTp3QcD",
  "key6": "5cCuiw6UZxMvpD4rCJmEzaU4wiPLaDy8RK8AGTK7Kt9Tw3tZEkvJCtSGJqRRuX6kjWbi5NgSf4qAnrUHRYUVvwYF",
  "key7": "bbfSCyBH5WcTMpBD9rqpVtvCwmvs2JVGca93rguiQEKo1tevqdRV9iY4PRKVUGbL3SgD5sMQ5EKwQyM2RCvQVQf",
  "key8": "3AyYUxR1vaGZE3xDXZCbraM4BrxuqWTiZByB9VSfd1WLFgRSu3UuDteq8ddN7QpBVkZEAoPLpw7Gpdm6ppG96ANU",
  "key9": "2574kTyBvX7d5h4X7ucgaoHzh6rz4vAY4GKD9YEShr7Ew86vhAjkNw3wbCH4BLQ3vKA3jb5XmnBUvABpA8YfUAE7",
  "key10": "4fmUKVvGKLe6gYJGsMrLTD1iwn7C5G1bt5ybc3BRjkb3opUo5qWytnSpBwJv68z9mibGSfqa92vVAQE9ciSE626K",
  "key11": "xzJy3kuoHKiEaDUCfG8ZNHy8V8Szj3k2qvjcRCZuEoMjcXEoAu2ijaQahkgBoghY6JR3yFVGXG9psdvWemiBvY8",
  "key12": "4gBDx1zZwZhJBvUXorxJrGFGeacV69WzWt53j7SLyLFxbptrm1yQ7um5TJdNGx3KQvgMa1X9iezN6MRiynm5C4x6",
  "key13": "5ZEkiDmBwp2sArdBFk5vdbqHG5xt3iTQaks1CiZDd9wbNFrTKogPB2gThnrNHcn9TUAMMBLNQiHUZwQ3BvHiayVS",
  "key14": "3h2v8B37ae2HWUWfwfFstWCShPbSVP1fTctZCCH6TELrYce3dmRNnX4B1iM8xPT2BPnAZ5zEPxywFuj62aKqcZxg",
  "key15": "2sZ1CLPbveeYzaVZWMcFHzRQVS7ha2ubhiCa3MbaV3HAuRrhFyXkGCaXyq1EuZTZgDKAcPPaFPiNEcdwGhYhZvXM",
  "key16": "CyMQE3tdZCSMp7Q6cRP4Br8sUgtdDUKGcXhaa1Av9B2DRKoU4KWNCjpejijy3fh7N5NNdvVWdWxvbB9ighAYZhC",
  "key17": "5Kimx5gEdFAwzASHwYgMP94FvVpYqKj5BMrKJMEjzqbU2cnL7yyV21dDzZAuyrJmMju6mG8TeLy8FwJiHbC22gik",
  "key18": "3hsjkideKorF69JGKB3eT4oka1jZXPqCVs1kSC1RABBmxKLcxofMQhBZZbGWJDWNBpUi25Tb6arL7Dt6wTNB4wXM",
  "key19": "qkjrqJdC2KycsskWbacKg67DbHaGeVJkMvaVDdf27hBQGbBEib7x7cv6BvzqPzeDhUNoY4eTUdrCqeGqYynaaot",
  "key20": "9J67aRywNVU8Ex1JyRcMRm7jYtpNpHMngGqyQsZ1okXVeEao9vxsrpREXKqKHj3BHtL9TkugDVckGzx5SQiDYw7",
  "key21": "3Hm3v3ZyGQ9ndC9CV1cFYEiZEGDbWif7CUoGhu3GcVqggHKUDh1FvmrRxPucQKbuDumRNE9Se4ozy37rxAastq8q",
  "key22": "4VJyJY7L7M3Wjv67MptyNUNq2YVPpCMgRJnfqWKXjrjeidJ2KGBNZPXbRUmtR8ViWinS4r8PGQ1pfbqWpMRhwDXq",
  "key23": "2fyX8BLR96rkuzcVPmzqwa7GaCdvrUfjs6k1EVHSedvNmvJuidtkpe4dHoyEhkZPzbvZR5KbWyGxEEngGGh8kGKg",
  "key24": "4LEFztxYghfm2Hov8yAc2x4BApB59962dkHoMSniGsPfkqtFKzGHcyQFUUQp1QmWVLWxvgohS5cssPiZTaUBPvnG",
  "key25": "2ZpeDdSBMbrPncT2U3SLYdjoQcjWHwF5jZoYriyXm6C8RoFi8XH55VuFr4JhhWBrSvhCt8YphxswcNkzRqRQf7FT",
  "key26": "vqoSH7dydRRYUtrCSRXpLufzWM88tCnfaEUSAD8yucBRJRZKtLod5rSx6tpyMGBhAJpMxx84RHFKrGA7is5RJqr",
  "key27": "GCixwrZntXCWA3iC9nNQbwMLwi1wVmHnTpNjxWuatx9ZpxC4qmrz7zfJAbmn2p3Etbe5ndmAcqZkQZUj5canrYU",
  "key28": "4t7ZGYviBpzks2Kt3g6a4BX4TzuTzqcxKY7vRqf9vedbxuB6m596mSCkC3hdw433Xm2vvwjEFGGGAhCoQodfaeXZ",
  "key29": "3APx2YfULtSAasBnCYVJSJizDBHWfdf69Z25nab9xMy7PHuJzuceDpdK6KLJ49wcXQxAa8M6C8SJ76Yx5hxmhKmW",
  "key30": "25sxivJ5dGawu2PvgBderyrGkMG3KHunKr89p1y7wHBAmdexXDrLCBDdDfBkeSrRfsMLjo1GjL1NjFaxrunEbWd4",
  "key31": "2d3b5oA3wvBr7kc12CQQ7176FmxYpnNtfYk3tmAszWSz2YSLndTSeuBLnotkAJUH6QaYyNBwzGXg3fFM5xbpxktm",
  "key32": "eXvBLxgwMs3L8DoKKN6fJiSYgJHibenGHxAmwNdmFYUg4ErENpRoY1YFd4HVRDUerx8RiWLEdBoBwYmoq4q4jaY",
  "key33": "59fdmNvqeogXCbg6tdKuxagqYjdjjgbtMnBCsWzAfsjuN52rQkV7KmnkckyfmqqCtUijPs6KLPApRqXRk6P1et17",
  "key34": "3FFh2x736AKVY1kZkBrkcVP4jhgHk4zJkXDnyKJsBhdE7vVk9Di8fRxaCCjFY6CyeTU1BtCzPZzYSpfxgPFaJzfg",
  "key35": "2xKwXAMLRShtbhEWqQYCJESDwrNYtt3GA9kMAT1LBGJMEdTR2kMQmrbhanuYeP2nzr8WckcwVaMNqnY135uFdriE",
  "key36": "3NZPvDPWqc1iH7dSxLMcom657YMkXVQTNRZi7k6t93uVJgo1RwDYLvTKYsbiQTAQAZ9GiNpWRRpzE13QkQoc4Htc"
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
