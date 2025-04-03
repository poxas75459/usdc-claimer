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
    "1jR6zDmztC41DCDnccyPhTDLtaAsqhLKXdq5z2xdLo4jvNcBqmUsoUAa1aHaMKcQmcK53q3gbKxV4QBAbU2h1hZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kRaWh1sfomnPdZ7sb6buWwqhrkMS5dR9hHsG8WMYDpg255hnEkjgX6UKB4hFpoeWMcNedno7yxp4AgTV57oPWiA",
  "key1": "2hbdDkeoRaTCTsked97umHKjYwomPGNm9m72UjEpse14HmeraJDiujyqLD3hBvU8mNHbNy9xNwAyB2FZQxPnctFb",
  "key2": "2s4WLwKeAijopTNJqCkVKEYq5a9HFQjXsrH4eRBYJAJjHZ67mxbaYmJdtH3J3HDQRdmCqduXenE4k5YL35X8bUVn",
  "key3": "4BAiXqWgRTkvAepQ8yFju8mDrpX7pH4sS9HVMDmojoEJyv3AbXVC4QPviaAUdRLSSF2Z4gxuDywCJWCYicP35Aei",
  "key4": "vd9yaZyyx7vjtzcz36CSh2fEU5LX9wvAwtcQay1bvCYQqLMqm1m3nxuARebkewcgjKV6PNDFfJN6ZRC67pizGrW",
  "key5": "3Ts33ChB321C6geU9tG8uXxnhUyNSvfuddTwxoe3UtuNrwGsLte1ZYXichubiX3jknpP2brLhJDnieVZG73ktngR",
  "key6": "564z27xDaMYToA5QUUg9Nth7MGRZn1fXqpZEhDjkCqrG6aPFsYfQ4tJ1q861kT3Fd2Ur3zXyTtk2ms6yJZrEecSZ",
  "key7": "VgNXjLCs8y6rNrhQcuQKbAaP3cNZ58hpVCYCcSeKN9ek4mSQPCK1ePpvtNSYvTAt982FsyuQg3NyMgt2NNMv2HC",
  "key8": "Jx5XnKnL33tsTt6iS99ky1g5n6Vn3nN2yfe9oZMLXvmg7owmVYQhW9G5oq7WJcGiU1mVZzdXTQzy7q8ZxJqZYKF",
  "key9": "CQm95udx1F7gTvHY4s4pZRPq2r6XnZhSocUg5TgYAWpDsZf1Si7NVDYsmPJECB9jq6EXyHQjRq5hop3BbTberGL",
  "key10": "4wD1GySUpf43MSnvM4uDYTxb7VM4NWvZvr36mK5iDT53LJiUBLGx3Q5r1gxCXjDJAk67EsfNdrGp3k1TbhYGyMxn",
  "key11": "3C59mDvjp7sWwSuytqE5zVRw2FRefGAVwwfYSbaKWtdArTLHa3aZpfG9viGHhv8L9MznPhB6XvVtuPxdLjdZLV3N",
  "key12": "3R8hYfish41M68PLnYAZrYqn7oXEZbMnTJWfszgJ282Bnaf9mg5dX97PnNPXeyE7mEEZzDYh23aaLMpUVp9ecqf3",
  "key13": "66aiS3UYDdunk4mrEvrG97poMSJXVwzL4wvr4YBZCeUX3X7m3DcSfu125kLLBo7N675BEC7brih1YdHDFV1knWrr",
  "key14": "3GPgQi69PtQqBHMxphzHdgAPWd2GEW3ExzsvatBnjuPMLBzCWpeuX6Bh8n2Wkws3nUqnhSSJG2MeU4hP21PytKW8",
  "key15": "4jXRWbWBWcAMtDN2L7MB2YYmAvh1DUuwhppZL6GX8bEFw8M85SQK6QLg61uiakcDdLbPDbF7BLDLSYeuhBGi7DfF",
  "key16": "4qH8ztxcNwPj7bU1dju2CaT8qRKDBqAhQvkysNKCHnvi3T7pEBpzdsGTmvBqyfsD6uuMUAPJzrbwJkdQvt5YYjJs",
  "key17": "5bnLX9dyvnH9Z2Rx9BudMqbN4mQ9Ji5CgzEHF3QNeudyAEzMuzoYi3zfTYjavE2H9TVLoRHZ14gcQvEg4PkEuv7i",
  "key18": "9iLEoHZHGPCCehSZNBBoP7wBcuVVnnEwyVMotfcMyZM7DZ67jJLexvgoeDCLbREGCS96Fgbd7yhnuc4W4Ukn2F7",
  "key19": "3EnziZcJaTgH5xAnTLV4KwyFVzNVpBu6CKMy81XYVemUXkdzuKN6LRaZ7jhMN1eKW9mnNJSJ9amWFYjEq9tZm4Jh",
  "key20": "3eG8ZFgSpowo3Apcyso5dqNTLDDFgvcN1SNbbcfk1o324Aho5SBuUHsm3pPN85aL2Fr2WxzXKTwh6ZTYRJMLW7VK",
  "key21": "5WsZF2rEwx8NsGfGPeoof68DWhHSQ1fY5nBndEHgDQ5kuizFSpyArVD9QM3scn6eSqdn6LBSFwxbsaMjryhDv9uh",
  "key22": "4D1esWDWDCgRbYsWhjuxxv7c7bNcqHtkz527TmzDq6KhWvpNPYPvZgHFb7z39oBD2sEEUDk4BZ26QtWRJHQYUrC",
  "key23": "je9tUWjRQMzXpU3jab7kaoAWErdeMY1CcxGw32V1VcfDbnLcSagRKsmwHWmQLpkoVxDbMLoAto4mJq31o5dREN5",
  "key24": "2nMWuyNDfhJc85yzHrScTqYxFcULEj9kNBK7HYtSXVEenyzTZpFkxJFvSkTY9suhrs65VHffN1M9JetB7JCugRys",
  "key25": "3YspZKv8aLatj99Uwd2PgiCpvqKuF7PKjafy9V3xMGjuPb8ijGAnrHt3yeMXxb8WngspkusKheWqUF2z9YxdfF4P",
  "key26": "3DQAtsDSzRrUPtzaFEVJrtvrm36y8vQg5KwJ29bpgBjUa4M4jpekGVutry65L1KkT8mFK3BbFvXPooiFzRAA33Xi",
  "key27": "59kojfjNcoyggSZ8GMafnpFKKxbCzJgweSyBr99YCYGKZtynfjW4WeCcmDe6RBAWRHdKvgKsiRZiqtLwKpVYsyXF",
  "key28": "5cZsd5d2HQwN4M8n8i58fFSPHHjaPA5rtndqBjaPAV3PF6toG93CgLMBRQbtN8GNXbfrYwq72R9WJmMzV6qzPEk7",
  "key29": "Hv6svj25VVpXA9LwfXpSaBe3FLBHS47MR1GXcxGz6VsYYcNyDBBezq7VH4MPEWZYuSZ7hxTgUUtU9EnmNasWU3S",
  "key30": "4PNrG2CL6J45yJF8LvfnuGdvZXWEJKqQ2wtMA28h7Ro5rUYdV8UHVKcrXsWs8ENWicQQ4ro4mzFTCXVDhTbFXHBb",
  "key31": "129SSWLBGPzq4qsQx66BjpwAi5mVD3LfWKetwbb9xjonz8NjyHyzyVpWCoVgipC76vazUo7jnSktPDKqxfXaVJrZ",
  "key32": "66W4ycA5xU5nJH5EtwmGNo9xNYsJXbMyYThPpjkNNoNVmACtpTyvicARCFXU3KxyupEVakQLEnADNXv1MbBqCGB5",
  "key33": "TUrc1rdVqfmhgLbysJ8jnkAHPnCCtsHB6jEWxY4aLfM21pTMhMGfX9gTRs5AnExCCvKiGzGmx1xup9JSQhAmjUs",
  "key34": "4yDUqH63tzX6jgcUGrTrbsAobhv43T85VTNJ9m4Q3DR5w6J2DjhXcVDH4wcqG2GvGYHUhruJXfR1hyN3R4H2bti7",
  "key35": "zVSWuKwf8G41QyUSnz7ptzk8qnTEEaJf2Y1vboEDsXe86MjvYohAGYshbtT1VxYiSB8gsdpgW2a4UERxTcZre2b",
  "key36": "3Z1uWG1CfbUyvkPr5aU36r71g1NW4PvFgh78LfRED7ofiZb7yFvb2W8ivm23NNXtHx4FtAqksUGoysz86J7NKXWk",
  "key37": "44x4QA1eJ2qcKfBvTEG9yYTcQKrUMkdBWUposD7HJTWRK4wczehjXw4ZiB2ZoJPC86Bu3YnZwWgmRfUJuUK1mmgQ"
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
