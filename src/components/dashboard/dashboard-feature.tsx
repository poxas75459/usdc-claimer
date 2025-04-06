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
    "3sRAytEAzQgmyLgvy18iBsBpuD77Jea2bWrR9Pu2vRQwkKDUoqCYJ3eFyKBdYRiPJhbExyZNVAmrUfPjGGjV83Th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21YTeNMVLcVXSPr6SJq19LXwyJ46jmjGbCRFZsMKUGvHEky29xcYHR5bBN4QYuCMWd98cmEFMLZ6Z11qqQp5CiVy",
  "key1": "2JdqwvEBHss6UGpALRSFNwCETmPNgqY4dncwrXA6iyc1dZuYpq8wtt7yjAH5DkiAsV1u7smri5DJfzHAgPkQecDL",
  "key2": "2HQLGnsVcRVY2Yn3JPAsok7DL1KwwW3sfZWmiPxAJPhkd6VZLtz8BJwsiypLcmtPHb2QSsCANjVAncPmbQqmUd28",
  "key3": "4Vnk9hJJ6QSj713ZEgtBPwkCvmcYXe4Epe29vzwpJhE5niSsmdDNMS27cqjctoWeDGCBKr1FVnTssPC3WCD5N1xa",
  "key4": "63gfXomNyTeTbosyhbxyAZUJGHFuzExcM21LFyNsyQ4j7Xe1BAJ5RaF5iX3Rr1NZeocNJmrN11hX75DUJjPtFj9K",
  "key5": "5Qxj5Z1fi1hJkqXtUt3GewMATFLwShiMb3h7aqJWfCWCxzWan58nVoyZhJvsUKsvfKupaTxrrymCpaSZLLkvGeyE",
  "key6": "3YuK3ez98Sf45rTAH5toz8oLMxGQ4Nm3uhnF9jvYZon4NTRPqcaRwHHQuV7UQBj8gw1fmdW7iqh6pZCZhUVD3ECk",
  "key7": "4D6KcSXZHc92ZFNGjyA1qjQ9NAgyqS4x47zUBBbxhCH9u6fqFcbPVqwXNE9Asibo7Qmdn8UBCgkkjahHTQT6jVV4",
  "key8": "KzNsEgWzvq2jM4buKoh6YFgo1Lx6YzodkMEPRKgNJwbQRzhjmBSpY4bUtcJyQD5RFqhMTizenP9sZiuCJaZwMgK",
  "key9": "3oKjPj5mGu3kLyDqg2DQRhRPLDqZKwpWgLiEbmb2VFRzBkjEkJLrxsa5zvimdDftJgx9roVyKfruDXiNCF6vw8BR",
  "key10": "4Dt5Bcac5ok1RXcefYdQpTreDAEE7ZxgZs9CkfXaR26sqcvHUr3RYJYXXouNPoj6imJzFgH76zMgLjBpPzWB8JEN",
  "key11": "3LeBFK4axHQ74QJqr3JpeUZBSPsZ2YWHAYru5JUz7p3XiZEM6dqkLJXqpdbJMJn2ynFr3YtnYbmF9HKU2v4SbSVU",
  "key12": "3VHmSsPDz3MCEnm7rsyS3UMLoZ8RXChYP4No5fX7pP11WwRqpW4Gdb4B8RNGEZ5QaSZ6VMpvWALaKRtSNPPBdGw6",
  "key13": "2XUiGSXKRpiCWHkLH9xjU47pEWtzSB6EVbPHCmn7e1HZptXtJz8dQifzzPnce3kcBLjcjG7zrvrwrQzEUm1rTxXu",
  "key14": "4hzZrVJ6G5nMBhGXNhzzuwoyCidxExK5gSjGjquEnNZJJcGwHjSTVmGqXQGwE433v95sckuhLkpwg9MJLc95bpXy",
  "key15": "5JuiN15JdiyxndMSNAoTbGLojq1VKgyF9WGSbgGHkzVWD5zpc6QtG4nxCVYJx33QCXDZe3xseymtnQWFPz8fFHat",
  "key16": "4cdd7Vs3REZ2aD7MxSdb4nsgyafScax9GshyrTcVX8oCkEVu6gGQdk4N6Moz4meACjTTxen9xxVf743tF2BUBrx",
  "key17": "3PqMXHPVyP5hJn25BJeJhNS52LLR4GYNmTYzAxQpyYRiMk9N3mb6JeAWJn5wbaqnDrVhSnTCcjKkessbZotCS2Jf",
  "key18": "2YJumLX2FMBr8899bFuj4ghpoUjFRTq2VNP9igkLvFCq7PCcqqD14gjLeiWDjsKtK3r4t873Jtms9HY1d13kfm7M",
  "key19": "5fYvRASMkQKodMPr6gBP24ortAW5A172iuw29wHfE6C4vvUEtyLPkw5Zd3se2ypQT8nSvtdfVQRbL2mJSU1fW8D4",
  "key20": "2NHxTndurZhZ3K1gYW94tH3bM5rNmtFpQucBoGGRoXHvA7eQpawVVEoWnGDDVHpwbwuv2ouPtGU5tmp49cnw6DJt",
  "key21": "67mKdNd2M1oSmYyUpwLw6RCyoDpc5SCDW488SrL3pXDZpJcn6kemB6mURVSCV5GBmJKJQ5xxFe8kN3ZB6DpV7avv",
  "key22": "5WczERmJAwVNJzbi31k3bpnpqvRCZLsLf6wnQSRABtFFH2Et8PbupvqYo19Fz2dJNB3RSHjtLjmsSw8bBpqnx3GR",
  "key23": "5Cwti1GUYiH1es5drLA2HeTW9m4kFzgArTFgDVVDxcMVqgXAQ2UfwjHHxkaRnZbYP7SChNBhqayRwmA13ULArSug",
  "key24": "3ZMaG1cnLLDTXEvpAdQcHVkAnRuxFsrMazP21YstDKZHJB7bQhnLrrU7eCcWT7q6XDVSYH4n35muRjS4h5ZHLwo9",
  "key25": "3hN6WhRV5jgq857PucCYbZ1nfrz7p7p5QYHo2NQh7wgAVi3mz35MB7Z2Xq1YA8P8ieY1fBPUpeagJULifN29gzjG",
  "key26": "2D6fLiJQQBLuUgFP5ABAy4UZjvginy1Vfh1LKAzeX7DQNee7j1QpQwTZwJugR5g3Yha7CEkcfBcnKBQUfaxxmQrU",
  "key27": "1RcS1QtuXu6zngyghM477VYY7F35mUB8F6CDz98Y9fnfng4w69imNToeBYHpWpX9etDR5csADb3D2xodW7kfC2V",
  "key28": "B2Tzmjpx3so88b5tZouZQyrropckKzko6isZV4zvvJyzaroKCrHmN4azDYZKi2TZSCq7Fn3FYJEoJ9D34BU3NiN",
  "key29": "3AxsEp9gBkGAAcHLkQukvm38h2TFRKM4RfiBJapzVAYCjfxFg9MWJLS5F9EHfHZ21vPx8EyRM4Namb1SwrZcNQm2",
  "key30": "yS2ZSE7E99uuM2cJs3ZSB2X21Mj2y4gx8gF2V1UqWcuZoNG74CcVXY1vfaAWMSwhQcTATJLNtASfsbvPM8FmnXq",
  "key31": "3TwG4wL6poN5oRY2TG6kxsQAfvdw81EwRUEykSTyRsMiQiKAi1B4Nbqagsv4WtqyvvRcqtCBne8W4xeTqukUtMM5",
  "key32": "2J2qEvRVVQLVnBqc26Etz4zADKwXyLLk2JYcwL7zvDeafStf3fKBTGvPDza4FeoT2iHc9mXRUXQxm33Yky6kSd6Z",
  "key33": "54nMqG6EBqiMsJu5hVpFE3yhGUVLor8X8MopMwDKpDwgNvGK5Lt8dL9fNmoEXfUpQikPnf4UytP1BM1q6TBxYXfx"
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
