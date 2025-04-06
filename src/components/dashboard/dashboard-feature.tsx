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
    "4gJVSDCBQ3qXgJWssYjo2kcFHyQ3ksTLqbmhaoAaEQTX6Nk5TauCoDhTg9rfSGkgRui7Rk9oygd1vgpq96rph79t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56iJi1jk7P83aEiVNfnwBhvwBd6eTmFdhh41XW9F72qxtQ64rKuCEknXqKgkTk5q64U6q9NbDjaPAfKAZrPbkBUQ",
  "key1": "3rA6qPnp8kbW2HueR1qRB3YUjmijLozTXqeevxy8wuc6rK9WCJBarKTyrgKhNibWFDndBfwYCRoW5PR6mfhaZL8v",
  "key2": "5RymjCzjTZAybGm7Ma19qspCwgwewUu2kMxNBuUUiDULqLTDjgSmxY7ZsaZqg7v6wcJZTNJrrzo8BVbMQsvaM9uP",
  "key3": "56iQUCSXfugnZCDUhGvaX6XnRhDS8bcg8s3yRmQvqXwmDXgW7AKbzLbE7Hkycnizr7gee91YacPjSH4dgj2jt8W8",
  "key4": "2C8KZe1gyxatiNzQ7cmaoq3fQ2fUQoHeDsTkXRaURW8FtG7EP3iUJucg7K17Qmr3TAKJwJvryXdidyFXaNEX9vLS",
  "key5": "4S3FaRiYkHegoXNrsPSBdTUKYRMCWmMxmk1VDZ4uAFVXjJ4P2gs6kyHHSBEoxvVwvX1eJyXTkc643EbFdxBQMk7d",
  "key6": "5iefZoN8JR8G8vYpMzworNc4ADxo6agWeKHb7HdtTSBC6mEXngWKZuzLyJekEZkuuXpUa7VVAumQjrYdnp5d1meP",
  "key7": "4y7N2rXzP2TJ1ZSR5fmkfZfF3LGduuRAEosFaDWTFX7HQvgKsznrQYa2hvW3PE7Zz1iJJhe68q5HtGFFvMngekeL",
  "key8": "4dTuzYigAFEZ6xDXbdmXB8J7bEFPFCVFQ8SGjCLCLqV5haB5kvihFmrRBmUWB9kaovkrujHf7EAjvhggeP1mhL9j",
  "key9": "5VLoFncfEYg4HMHiHkLAB663ZhzEomiRqjJHdcQYo8UYz3Pd98ggMDc1sxWfFwrwCDZTn68j2kQRAPQWmejWEnaY",
  "key10": "5s4amKfNDfKCKpVYx6XG2vXPHvcsDA6wvvr2r8s6jGvcVmmct29NymYAA8KA8BnVimTZWf9D4KXke83aJWSt4q5D",
  "key11": "3h3ErWdt2ieuotzCQ3tDiPeFxm8W8QYm5sbCnqofcQjzNiiR9HK7LJstxgv5UBAPorYbWRNXFZfmbCuS6yoQeZZV",
  "key12": "2haBo4vgCW5RW5MYgA7H3yNYuMEEzby248URAJzTjbPhHyxnA2YYtRmrXcsyYc5fpmtR3nBr3bnfDD4TePrtR8X6",
  "key13": "HpMAgcoigXraZfEHXnjATnXnvueN6gjQQnpS4nLWNDBECp1HDaDCqtsxp5P7M29S113C6u4YEUpHVCTLh72mEmB",
  "key14": "57m4NAuwn5rgaApyvtkXeEDC2pTLy6g9yVQm6hj7rqaY6NgW41Wu2Ab5ERhVYbpP2TuFeGTAZe8EnV3nzLvh6WWy",
  "key15": "5GG7qmuU5czTrxUqZf8wSsD2tXWcCzu1MTJpmMLun9bVLhedb4sWk9grdEG8ZekuvvFERNbswvyfqrrj4Bsaife5",
  "key16": "3ukGvPaUSgP7dn2wDfSwkpkkFmrYy1PQ41SqhE7W49umcYAseMFtZyHxDoypsFVtfovTrUg5S9fTP7UB4koysj7E",
  "key17": "vY7h1FP7FefgnxpizBJipdquM3Q26aChHjSk6piBSvvjjdrPuMDPSa2weLyVFTppzZRrNvbjjbWSR1cniJDHF5h",
  "key18": "5FNDRePcCbmQbwabJUprSe6PvovU8zUdhJFVJrS4EZjTxKB9p9FMAbk7J42mByW3wahssaboaVqRsu6LMXuUb3Wt",
  "key19": "5hzukraE6msJipoXvyTVijMdeK7NDWJFW2tRf2jRUfZ3qGcXaTSgFUwhqcSGpy9bi1civBk4WDbLJsupphdkNVPU",
  "key20": "37yUus3LYE7MzNbbicfKyuxBhnxSVv2wrm4P8SYjefL51nJsG6nCMYQURZj7btN3NXE681avVta3BVDujEbk5NoY",
  "key21": "5w5ayy3UDjfEV7DncTaiyoUMSp6UbbVUXn3M1844zYs5LVxPCoX7XVz5CWCuCFEJzMTk3EqUheoYrAizfFsRjgiD",
  "key22": "Lm9LHWXKoERm7Vo7KMtYggyCS23JeYXLf9aP1BC6Lrx6TdJgXcMTaY3mHyu6hUwJW25NFoU9VsTkyjSeaw5P5XL",
  "key23": "3pWmoYCkr4UBX9NnYwL4cifyTebxMBuAx76tMpcczstXTa2KQ89TtABAoNNiu2FLHNWvKgzzNvFqg2oWeSd8oWBW",
  "key24": "4p5cgRysqm1RinUdZgGCEEKcASBuozHD8RLMeTXVnwBMvehrevVrCaVxC9k75L8cLeANja51by9z5Tfbtgt4Jsmt",
  "key25": "5xEYFAqG8vcah1ByGMGSi1kbodwqFDB8mJKtqbAFPAHGX9Lx1toyx8zpJVHw7Zk5rwTJ8F5DpXoUJYgpoujbY7oC",
  "key26": "aAVEWDFqGfg3guoYrVGv1PW3wtRVjN2chH2g6UjYwf2cQUeFeRuD4mBrySfuAskFumJxj8gk6nGwZghgMJZZT2f",
  "key27": "42divPoydUVX1RFPt753tZQz1kBx6osJMsbhN6MnGqB1gbT95FoRuCKeLqbd7bQFXMh6o6j9VuXa4shdmoyobbQB",
  "key28": "2tEzyNfTemRM9xpuHFS5B7NN1c9RUgrAU3VZZfNYrbVJqV2iyYw56P2hSgWh8qVpTtmxQQor2iGu5gryZt46mqBm",
  "key29": "4E4s8uHMG3DpmA39LHnedJfhLafBBZeWuYgoZrVYwcoVGdKteUGwvjAjQvXcU7qfUayEHapLRjF1PhUbGXmRSagi",
  "key30": "2JhM5qLTP3ppYhg6km1N6BUJhrSZF3qMRvYYDWVkULZvNSA9uzwkx5QzaGCrfch7eQnukrVAkXNFsqQk7vHC3yJ7",
  "key31": "3b2BHTp6DpJf6v9g4Ay2Z2Kivue6osJ3dU6jwQbcGYJSwBBT4x4MAmWrV1hKwEydGmhUxYeqyyPGD7APPDLEbxvP"
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
